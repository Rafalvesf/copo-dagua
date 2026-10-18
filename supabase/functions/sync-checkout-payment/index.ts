import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";

// Plano B do webhook (2026-10-18): o casal pagou o sinal/restante na
// Stripe mas o `stripe-webhook` nunca foi chamado (endpoint por
// configurar), por isso o pagamento ficava "pending" para sempre e o
// cartão da proposta continuava a dizer "pagar sinal".
//
// A app chama isto para os pagamentos pendentes que já têm uma Checkout
// Session. Lê a sessão DIRETAMENTE na Stripe (fonte de verdade — nada
// vindo do cliente é aceite como prova de pagamento) e, se estiver paga,
// confirma com a mesma RPC que o webhook usa. Idempotente.
//
// Leitura do pagamento com o JWT do casal (RLS): só sincroniza os seus.
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return json({ error: "forbidden" }, 403);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: authHeader } } },
  );
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return json({ error: "forbidden" }, 403);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "validation_error" }, 400);
  }
  const ids = Array.isArray(body.payment_ids)
    ? (body.payment_ids as unknown[]).filter((x): x is string => typeof x === "string").slice(0, 20)
    : [];
  if (ids.length === 0) return json({ synced: [] });

  const { data: rows } = await supabase
    .from("payments")
    .select("id, payer_id, status, provider_payment_id")
    .in("id", ids);

  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
  const stripe = stripeClient();
  const synced: string[] = [];

  for (const p of rows ?? []) {
    const sid = p.provider_payment_id as string | null;
    if (p.payer_id !== user.id || p.status !== "pending" || !sid?.startsWith("cs_")) continue;
    try {
      const session = await stripe.checkout.sessions.retrieve(sid);
      if (session.payment_status !== "paid") continue;
      const pi = typeof session.payment_intent === "string"
        ? session.payment_intent
        : session.payment_intent?.id ?? session.id;
      const { error } = await admin.rpc("confirm_stripe_deposit_payment", {
        p_session_id: session.id,
        p_payment_intent_id: pi,
      });
      if (error) {
        console.error("confirm_stripe_deposit_payment failed", error);
        continue;
      }
      synced.push(p.id as string);
    } catch (e) {
      console.error("sync-checkout-payment retrieve failed", e);
    }
  }
  return json({ synced });
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
