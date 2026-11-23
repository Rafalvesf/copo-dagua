import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";
import { reserveCents } from "../_shared/tickets.ts";
import { createInAppIntent, intentJson } from "../_shared/inapp.ts";
import { syncPayment } from "../_shared/event_pay.ts";

// Pagar com QR no balcão (migração 229, 2026-11-23).
//
// Quem paga (leu o QR do parceiro):
//   { action: "intent", code, method? } → PaymentIntent para o pedido (no
//       formato do ecrã de pagamento da app: cartão, Apple Pay, Google Pay).
//       O pedido fica associado a quem paga.
//   { action: "sync", id } → confirma se já está pago.
// O parceiro cria o pedido com a RPC create_pay_request; vê o «Pago» por
// Realtime. O webhook da Stripe confirma também (kind = pay_request).
// deno-lint-ignore no-explicit-any
type Admin = any;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return json({ error: "forbidden" }, 403);
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return json({ error: "forbidden" }, 403);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "validation_error" }, 400);
  }
  const admin: Admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const stripe = stripeClient();

  try {
    if (body.action === "intent") {
      const code = typeof body.code === "string" ? body.code.trim().toUpperCase() : "";
      if (!code) return json({ error: "validation_error" }, 400);
      const hash = await sha256Hex(code);
      const { data: row } = await admin.from("pay_requests").select("*").eq("token_hash", hash).maybeSingle();
      if (!row) return json({ error: "not_found" }, 404);
      if (row.merchant_id === user.id) return json({ error: "own_request" }, 409);
      if (row.status !== "open" || new Date(row.expires_at) <= new Date()) return json({ error: "expired" }, 409);
      if (row.payer_id && row.payer_id !== user.id) return json({ error: "used" }, 409);
      const pk = Deno.env.get("STRIPE_PUBLISHABLE_KEY");
      if (!pk) return json({ error: "not_configured" }, 503);

      // Uma tentativa anterior ainda aberta: cancela-a (ou confirma se já foi paga).
      if (row.payment_intent_id) {
        const old = await stripe.paymentIntents.retrieve(row.payment_intent_id);
        if (old.status === "succeeded") {
          await syncPayment(stripe, admin, old.id);
          return json({ state: "paid" });
        }
        if (old.status !== "canceled") await stripe.paymentIntents.cancel(old.id).catch(() => {});
      }
      const { applicationFeeCents } = reserveCents(row.amount_cents, Number(row.fee_pct), 0);
      const intent = await createInAppIntent(stripe, {
        method: typeof body.method === "string" ? body.method : "card",
        email: user.email ?? null,
        amountCents: row.amount_cents,
        description: `${row.merchant_name}${row.description ? ` · ${row.description}` : ""}`.slice(0, 200),
        metadata: { kind: "pay_request", request_id: row.id },
        applicationFeeCents,
        destination: row.destination_account,
      });
      await admin.from("pay_requests").update({ payer_id: user.id, payment_intent_id: intent.id }).eq("id", row.id);
      return json(intentJson(intent, pk, user.email ?? null, { request_id: row.id }));
    }

    if (body.action === "sync") {
      const id = typeof body.id === "string" ? body.id : "";
      const { data: row } = await admin.from("pay_requests").select("*").eq("id", id).maybeSingle();
      if (!row || (row.payer_id !== user.id && row.merchant_id !== user.id)) return json({ error: "not_found" }, 404);
      if (row.status === "paid") return json({ state: "paid" });
      if (!row.payment_intent_id) return json({ state: "open" });
      const st = await syncPayment(stripe, admin, row.payment_intent_id);
      return json({ state: st === "succeeded" ? "paid" : st === "processing" ? "processing" : "open" });
    }
    return json({ error: "validation_error" }, 400);
  } catch (e) {
    console.error("event-pay failed", (e as Error).message);
    if ((e as { type?: string }).type === "StripeCardError") return json({ error: "declined", message: (e as Error).message }, 402);
    return json({ error: "stripe_error" }, 502);
  }
});

async function sha256Hex(s: string): Promise<string> {
  const buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(s));
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, "0")).join("");
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
