import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";

// Contract: mobile-app/payments/stripe-connect.md
//
// Chamada pelo próprio parceiro (partner-app) para ativar recebimento de
// pagamentos. Cria uma conta Express (uma vez, reutilizada em chamadas
// seguintes) e devolve sempre um novo Account Link — os Account Links
// da Stripe expiram ao fim de alguns minutos, por isso nunca são
// guardados, só o `stripe_account_id` fica persistido.
//
// Cliente construído com o JWT de quem chama (não service role): a
// leitura/escrita de `partner_profiles.stripe_account_id` passa pela RLS
// normal ("Owner can update own profile", 005_partner_profile.sql) — só
// o próprio parceiro pode ativar pagamentos para si.
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
    .select("id, stripe_account_id, contact_email")
    .eq("id", user.id)
    .single();

  if (profileError || !profile) {
    return jsonError("not_found", 404);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    body = {};
  }
  const returnUrl = typeof body.return_url === "string" ? body.return_url : undefined;
  const refreshUrl = typeof body.refresh_url === "string" ? body.refresh_url : returnUrl;
  if (!returnUrl || !refreshUrl) {
    return jsonError("validation_error", 400);
  }

  const stripe = stripeClient();
  let accountId = profile.stripe_account_id as string | null;

  try {
    if (!accountId) {
      const account = await stripe.accounts.create({
        type: "express",
        country: "PT",
        email: (profile.contact_email as string | null) ?? undefined,
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true },
        },
      });
      accountId = account.id;

      const { error: updateError } = await supabase
        .from("partner_profiles")
        .update({ stripe_account_id: accountId })
        .eq("id", user.id);
      if (updateError) {
        return jsonError("unknown_error", 500);
      }
    }

    const accountLink = await stripe.accountLinks.create({
      account: accountId,
      type: "account_onboarding",
      return_url: returnUrl,
      refresh_url: refreshUrl,
    });

    return new Response(JSON.stringify({ url: accountLink.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("create-connect-onboarding-link failed", err);
    return jsonError("stripe_error", 502);
  }
});

function jsonError(code: string, status: number): Response {
  return new Response(JSON.stringify({ error: code }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
