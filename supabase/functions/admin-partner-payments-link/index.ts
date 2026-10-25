import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";

// Link de ativação de pagamentos para um parceiro, gerado pelo admin
// (2026-10-25): para parceiros sem acesso à app (ex.: contas de teste) ou
// para enviar ao parceiro. Cria a conta Stripe gerida pela À Nossa! se
// ainda não existir (mesma configuração de `connect-account`) e devolve um
// link de onboarding da Stripe (válido poucos minutos, uso único).
// Só admins. Body: { partner_id: string, return_url?: string }
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return json({ error: "forbidden" }, 403);

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return json({ error: "forbidden" }, 403);
  const { data: isAdmin } = await supabase.rpc("is_admin");
  if (isAdmin !== true) return json({ error: "forbidden" }, 403);

  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch { /* vazio */ }
  const partnerId = typeof body.partner_id === "string" ? body.partner_id : null;
  if (!partnerId) return json({ error: "validation_error" }, 400);
  const fallback = `https://copo-dagua.vercel.app/partners/${partnerId}`;
  const returnUrl = typeof body.return_url === "string" && body.return_url.startsWith("https://") ? body.return_url : fallback;

  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
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
        email: (profile.contact_email as string | null) ?? undefined,
        controller: {
          stripe_dashboard: { type: "none" },
          requirement_collection: "application",
          losses: { payments: "application" },
          fees: { payer: "application" },
        },
        business_profile: {
          name: (profile.business_name as string | null) || undefined,
          mcc: "7299",
        },
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true },
        },
        settings: { payouts: { schedule: { interval: "manual" } } },
        metadata: { partner_id: partnerId },
      } as never);
      accountId = account.id;
      const { error } = await admin
        .from("partner_profiles")
        .update({ stripe_account_id: accountId, stripe_charges_enabled: false, stripe_payouts_enabled: false })
        .eq("id", partnerId);
      if (error) return json({ error: "unknown_error" }, 500);
    }
    const link = await stripe.accountLinks.create({
      account: accountId,
      type: "account_onboarding",
      collection_options: { fields: "eventually_due" },
      refresh_url: returnUrl,
      return_url: returnUrl,
    } as never);
    await admin.from("audit_logs").insert({
      actor_id: user.id,
      action: "partner_payments_link_created",
      target_table: "partner_profiles",
      target_id: partnerId,
      metadata: { account_id: accountId },
    });
    return json({ url: link.url, expires_at: link.expires_at });
  } catch (e) {
    console.error("payments link failed", partnerId, (e as Error).message);
    return json({ error: "stripe_error", message: (e as Error).message }, 502);
  }
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
