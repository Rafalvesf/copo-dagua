import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";

// Contract: mobile-app/payments/stripe-connect.md, partner_payments_screen.dart
// "Saldo" section (2026-09-04).
//
// Distinto de create-connect-onboarding-link: esse cria/continua o
// onboarding (`account_onboarding`); este devolve um link direto para o
// Express Dashboard de uma conta JÁ onboarded, onde o parceiro vê o seu
// saldo Stripe real e pede/gere levantamentos para o IBAN — o botão
// "Levantar" no ecrã de Saldo abre este link em vez de reimplementar
// payouts. A plataforma nunca vê nem guarda o IBAN do parceiro; isso
// vive inteiramente do lado da Stripe.
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return jsonError("forbidden", 403);
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: authHeader } } },
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return jsonError("forbidden", 403);
  }

  const { data: profile, error: profileError } = await supabase
    .from("partner_profiles")
    .select("stripe_account_id, stripe_payouts_enabled")
    .eq("id", user.id)
    .single();

  if (profileError || !profile?.stripe_account_id) {
    return jsonError("not_onboarded", 400);
  }

  const stripe = stripeClient();

  try {
    const loginLink = await stripe.accounts.createLoginLink(
      profile.stripe_account_id as string,
    );

    return new Response(JSON.stringify({ url: loginLink.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("create-connect-login-link failed", err);
    return jsonError("stripe_error", 502);
  }
});

function jsonError(code: string, status: number): Response {
  return new Response(JSON.stringify({ error: code }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
