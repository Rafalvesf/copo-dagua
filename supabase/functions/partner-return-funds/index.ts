import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";

// Parceiro devolve o que já recebeu de uma reserva, para a poder cancelar
// (2026-10-26, migração 125). Retira o valor do saldo Stripe do parceiro
// (reversão das transferências) e marca os pagamentos como devolvidos.
// Body: { booking_id, dry_run? } — com dry_run só diz quanto há a devolver.
// Resposta: { amount, returned } ou { error: "insufficient_balance", amount }.
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return json({ error: "forbidden" }, 403);
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return json({ error: "forbidden" }, 403);

  const body = await req.json().catch(() => ({})) as { booking_id?: string; dry_run?: boolean };
  if (typeof body.booking_id !== "string") return json({ error: "validation_error" }, 400);

  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: booking } = await admin.from("bookings").select("id, partner_id, status").eq("id", body.booking_id).maybeSingle();
  if (!booking) return json({ error: "not_found" }, 404);
  if (booking.partner_id !== user.id) return json({ error: "forbidden" }, 403);

  const { data: rows } = await admin
    .from("payments")
    .select("id, transfer_id, returned_at")
    .eq("booking_id", booking.id)
    .eq("status", "paid")
    .not("released_at", "is", null)
    .is("returned_at", null)
    .like("transfer_id", "tr_%");
  const stripe = stripeClient();
  const pending: { id: string; transfer: string; left: number }[] = [];
  for (const r of rows ?? []) {
    const tr = await stripe.transfers.retrieve(r.transfer_id as string);
    pending.push({ id: r.id as string, transfer: tr.id, left: tr.amount - tr.amount_reversed });
  }
  const total = pending.reduce((s, p) => s + p.left, 0);
  if (body.dry_run || total === 0) {
    if (!body.dry_run) for (const p of pending) await admin.rpc("mark_payment_returned", { p_payment_id: p.id });
    return json({ amount: total / 100, returned: !body.dry_run });
  }

  // Tem saldo suficiente na conta Stripe? (Se já levantou para o banco, não.)
  const acct = (await admin.from("partner_profiles").select("stripe_account_id").eq("id", user.id).maybeSingle()).data
    ?.stripe_account_id as string | undefined;
  if (acct) {
    const bal = await stripe.balance.retrieve({ stripeAccount: acct });
    const eur = [...bal.available, ...bal.pending].filter((b) => b.currency === "eur").reduce((s, b) => s + b.amount, 0);
    if (eur < total) return json({ error: "insufficient_balance", amount: total / 100, balance: eur / 100 }, 409);
  }

  for (const p of pending) {
    if (p.left > 0) {
      try {
        await stripe.transfers.createReversal(p.transfer, { amount: p.left, metadata: { reason: "partner_cancel" } }, {
          idempotencyKey: `partner-return-${p.id}-${p.left}`,
        });
      } catch (e) {
        console.error("partner return failed", p.id, (e as Error).message);
        return json({ error: "insufficient_balance", amount: total / 100 }, 409);
      }
    }
    await admin.rpc("mark_payment_returned", { p_payment_id: p.id });
  }
  await admin.from("audit_logs").insert({
    actor_id: user.id, action: "partner_returned_funds", target_table: "bookings", target_id: booking.id,
    metadata: { amount: total / 100 },
  }).then(({ error }) => error && console.error("audit insert failed", error));
  return json({ amount: total / 100, returned: true });
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
