import { createClient } from "jsr:@supabase/supabase-js@2";
import { stripeClient } from "../_shared/stripe.ts";

// Valores como nas notificações da base de dados (migração 157): "4 500 €".
const fmtEur = (v: number) => {
  const r = Math.round(v * 100) / 100;
  const int = Math.trunc(r).toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00a0");
  const c = Math.round((r - Math.trunc(r)) * 100);
  return `${int}${c ? "," + String(c).padStart(2, "0") : ""}\u00a0€`;
};

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
      // Migração 151: o N.º cliente trazido pelo parceiro (a cada 5) não paga
      // comissão do parceiro. O sinal que o fez contar foi cobrado com taxa
      // (a posição só existe depois de pago) — acerta-se aqui.
      const referralFree = await isFreeReferralBooking(admin, r.booking_id);
      const fee = !referralFree && Number.isFinite(feeMeta) && feeMeta > 0 ? Math.min(feeMeta, gross) : 0;
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
      await admin.from("notifications").insert({
        partner_id: r.partner_id,
        type: "funds_released",
        title: "Pagamento libertado",
        body: `${fmtEur(cents / 100)} já estão no teu saldo.`,
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
    body: "Tens um pagamento pronto. Ativa os pagamentos para o receberes.",
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

// Reserva de um cliente trazido pelo parceiro que calhou na posição sem
// comissão (seq % referral_free_every = 0). Sem a migração 151, false.
// deno-lint-ignore no-explicit-any
async function isFreeReferralBooking(admin: any, bookingId: string): Promise<boolean> {
  try {
    const { data: b } = await admin.from("bookings").select("couple_id, partner_id").eq("id", bookingId).maybeSingle();
    if (!b?.couple_id) return false;
    const { data: s } = await admin.from("platform_settings").select("*").eq("id", 1).maybeSingle();
    if (s?.referral_zero_fee === false) return false;
    const every = Math.max(1, Number(s?.referral_free_every ?? 5) || 5);
    const { data: ref, error } = await admin
      .from("partner_referrals")
      .select("valid, seq")
      .eq("partner_id", b.partner_id)
      .eq("profile_id", b.couple_id)
      .maybeSingle();
    if (error || !ref) return false;
    const seq = Number(ref.seq ?? 0);
    return ref.valid === true && seq > 0 && seq % every === 0;
  } catch {
    return false;
  }
}
