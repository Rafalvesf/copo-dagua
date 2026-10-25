import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";

// Página de teste do formulário de pagamentos (2026-10-25,
// `web/teste-pagamentos.html`): abre o mesmo onboarding embutido da app
// para um parceiro de TESTE, sem login. Só funciona com a Stripe em modo de
// teste (sk_test_) e só para contas cujo email termina em ".test" — nunca
// para parceiros reais.
// Body: { partner_id: string }
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (!(Deno.env.get("STRIPE_SECRET_KEY") ?? "").startsWith("sk_test_")) return json({ error: "test_mode_only" }, 403);

  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch { /* vazio */ }
  const partnerId = typeof body.partner_id === "string" ? body.partner_id : null;
  if (!partnerId) return json({ error: "validation_error" }, 400);

  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: authUser } = await admin.auth.admin.getUserById(partnerId);
  const email = authUser?.user?.email ?? "";
  if (!email.endsWith(".test")) return json({ error: "test_accounts_only" }, 403);

  const { data: profile } = await admin
    .from("partner_profiles")
    .select("id, stripe_account_id, contact_email, business_name")
    .eq("id", partnerId)
    .maybeSingle();
  if (!profile) return json({ error: "not_found" }, 404);

  const stripe = stripeClient();
  try {
    let accountId = profile.stripe_account_id as string | null;
    if (accountId) {
      try {
        await stripe.accounts.retrieve(accountId);
      } catch {
        accountId = null;
      }
    }
    if (!accountId) {
      const account = await stripe.accounts.create({
        country: "PT",
        email,
        controller: {
          stripe_dashboard: { type: "none" },
          requirement_collection: "application",
          losses: { payments: "application" },
          fees: { payer: "application" },
        },
        business_profile: { name: (profile.business_name as string | null) || undefined, mcc: "7299" },
        capabilities: { card_payments: { requested: true }, transfers: { requested: true } },
        settings: { payouts: { schedule: { interval: "manual" } } },
        metadata: { partner_id: partnerId },
      } as never);
      accountId = account.id;
      await admin
        .from("partner_profiles")
        .update({ stripe_account_id: accountId, stripe_charges_enabled: false, stripe_payouts_enabled: false })
        .eq("id", partnerId);
    }
    const current = await stripe.accounts.retrieve(accountId);
    await admin.rpc("sync_stripe_account_status", {
      p_account_id: accountId,
      p_charges_enabled: current.charges_enabled,
      p_payouts_enabled: current.payouts_enabled,
    });
    const session = await stripe.accountSessions.create({
      account: accountId,
      components: {
        account_onboarding: {
          enabled: true,
          features: { external_account_collection: true, disable_stripe_user_authentication: true },
        },
      },
    } as never);
    return json({
      client_secret: session.client_secret,
      publishable_key: Deno.env.get("STRIPE_PUBLISHABLE_KEY"),
      business_name: profile.business_name,
      charges_enabled: current.charges_enabled,
      payouts_enabled: current.payouts_enabled,
    });
  } catch (e) {
    console.error("test onboarding failed", partnerId, (e as Error).message);
    return json({ error: "stripe_error", message: (e as Error).message }, 502);
  }
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
