import { createClient } from "jsr:@supabase/supabase-js@2";
import { stripeClient } from "../_shared/stripe.ts";

// Liberta ao parceiro o dinheiro retido (2026-10-25, migração 119): 3 dias
// depois do evento, sem disputa aberta, transfere a parte do parceiro (o
// valor da reserva, sem a comissão da À Nossa!) para a conta Stripe dele.
// Chamada todos os dias pela base de dados (pg_cron + pg_net) com o segredo
// partilhado em `x-push-secret`. Idempotente (chave por pagamento).
Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("method not allowed", { status: 405 });
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: cfg } = await admin.rpc("push_config");
  const secret = (cfg as Record<string, string> | null)?.push_secret;
  if (!secret || req.headers.get("x-push-secret") !== secret) return new Response("forbidden", { status: 403 });

  const { data: rows, error } = await admin.rpc("payments_to_release");
  if (error) {
    console.error("payments_to_release failed", error);
    return Response.json({ error: "db_error" }, { status: 500 });
  }
  const stripe = stripeClient();
  const released: string[] = [];
  const failed: string[] = [];

  for (const r of (rows ?? []) as {
    payment_id: string;
    booking_id: string;
    provider_payment_id: string;
    amount: number;
    partner_id: string;
    partner_account: string;
    booking_number: string;
  }[]) {
    try {
      const intent = await stripe.paymentIntents.retrieve(r.provider_payment_id, { expand: ["latest_charge"] });
      // Pagamentos antigos (cobrança com destino): já foram transferidos.
      if (intent.transfer_data?.destination) {
        await admin.rpc("mark_payment_released", { p_payment_id: r.payment_id, p_transfer_id: "destination_charge" });
        continue;
      }
      const charge = typeof intent.latest_charge === "object" ? intent.latest_charge : null;
      if (!charge || intent.status !== "succeeded") {
        failed.push(r.payment_id);
        continue;
      }
      // Parte do parceiro = valor da reserva (sem a comissão do organizador)
      // menos a taxa do parceiro gravada no pagamento (migração 123; os
      // pagamentos anteriores não têm taxa), tudo reduzido na proporção de
      // algum reembolso parcial.
      const gross = Math.round(Number(r.amount) * 100);
      const feeMeta = Number(intent.metadata?.partner_fee_cents ?? 0);
      const fee = Number.isFinite(feeMeta) && feeMeta > 0 ? Math.min(feeMeta, gross) : 0;
      const keep = charge.amount_refunded > 0 ? 1 - charge.amount_refunded / charge.amount : 1;
      const feeCents = Math.round(fee * keep);
      const cents = Math.floor(gross * keep) - feeCents;
      if (cents <= 0) {
        await markReleased(admin, r.payment_id, "nothing_to_release", feeCents / 100, 0);
        continue;
      }
      // Parceiro que ainda não ativou os pagamentos: o dinheiro fica retido
      // e tenta-se outra vez no dia seguinte. Avisa-o no máximo 1x/semana.
      const acc = await stripe.accounts.retrieve(r.partner_account);
      if (acc.capabilities?.transfers !== "active") {
        await nudgePartner(admin, r);
        failed.push(r.payment_id);
        continue;
      }
      const transfer = await stripe.transfers.create(
        {
          amount: cents,
          currency: "eur",
          destination: r.partner_account,
          source_transaction: charge.id,
          transfer_group: r.booking_id,
          description: `Reserva ${r.booking_number}`,
          metadata: { payment_id: r.payment_id, booking_id: r.booking_id, partner_fee_cents: String(feeCents) },
        },
        { idempotencyKey: `release-${r.payment_id}` },
      );
      await markReleased(admin, r.payment_id, transfer.id, feeCents / 100, cents / 100);
      const euros = (cents / 100).toFixed(2).replace(".", ",");
      await admin.from("notifications").insert({
        partner_id: r.partner_id,
        type: "funds_released",
        title: "Pagamento libertado",
        body: `${euros} € da reserva ${r.booking_number} já estão no teu saldo.`,
        link: "/partner-payments",
      }).then(({ error }) => error && console.error("notification failed", error));
      released.push(r.payment_id);
    } catch (e) {
      console.error("release failed", r.payment_id, (e as Error).message);
      failed.push(r.payment_id);
    }
  }
  return Response.json({ released, failed });
});

// deno-lint-ignore no-explicit-any
async function nudgePartner(admin: any, r: { partner_id: string; booking_number: string }) {
  const since = new Date(Date.now() - 7 * 24 * 3600 * 1000).toISOString();
  const { count } = await admin
    .from("notifications")
    .select("id", { count: "exact", head: true })
    .eq("partner_id", r.partner_id)
    .eq("type", "funds_waiting")
    .gte("created_at", since);
  if ((count ?? 0) > 0) return;
  await admin.from("notifications").insert({
    partner_id: r.partner_id,
    type: "funds_waiting",
    title: "Tens dinheiro à tua espera",
    body: `O pagamento da reserva ${r.booking_number} está pronto. Ativa os pagamentos para o receberes.`,
    link: "/partner-payments",
  }).then(({ error }: { error: unknown }) => error && console.error("nudge failed", error));
}

// Grava a libertação. Antes da migração 123 a função só tinha 2 argumentos.
// deno-lint-ignore no-explicit-any
async function markReleased(admin: any, id: string, transferId: string, fee: number, transferred: number) {
  const { error } = await admin.rpc("mark_payment_released", {
    p_payment_id: id, p_transfer_id: transferId, p_partner_fee: fee, p_transferred: transferred,
  });
  if (error) {
    const { error: e2 } = await admin.rpc("mark_payment_released", { p_payment_id: id, p_transfer_id: transferId });
    if (e2) console.error("mark_payment_released failed", id, e2);
  }
}
