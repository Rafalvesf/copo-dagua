import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";
import { applyDetails, type Details, ensureAccount, prefill, stripeMessage } from "../_shared/connect_details.ts";

// Dados de pagamento de um parceiro preenchidos pelo admin, com o UI do
// próprio admin (2026-10-25: "nada de caixas com o site da Stripe" nem
// links). Mesma lógica que a app (`_shared/connect_details.ts`).
// Só admins. Body: { partner_id, action: "status" | "details", details? }
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
  const action = typeof body.action === "string" ? body.action : "status";

  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: profile } = await admin
    .from("partner_profiles")
    .select("id, stripe_account_id, contact_email, business_name")
    .eq("id", partnerId)
    .maybeSingle();
  if (!profile) return json({ error: "not_found" }, 404);

  const stripe = stripeClient();
  try {
    let accountId = (profile.stripe_account_id as string | null) ?? null;
    if (action === "details") {
      const d = body.details as Details | undefined;
      if (!d || !d.person || (d.business_type !== "individual" && d.business_type !== "company")) {
        return json({ error: "validation_error" }, 400);
      }
      const { data: authUser } = await admin.auth.admin.getUserById(partnerId);
      accountId = await ensureAccount(
        stripe,
        admin,
        partnerId,
        (profile.contact_email as string | null) ?? authUser?.user?.email ?? null,
        (profile.business_name as string | null) ?? null,
        accountId,
      );
      try {
        await applyDetails(stripe, accountId, d, {
          ip: (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "0.0.0.0",
          userAgent: req.headers.get("user-agent") ?? "",
        });
      } catch (e) {
        console.error("admin details rejected", partnerId, (e as Error).message);
        return json({ error: "invalid_details", message: stripeMessage(e) }, 400);
      }
      await admin.from("audit_logs").insert({
        actor_id: user.id,
        action: "partner_payment_details_updated",
        target_table: "partner_profiles",
        target_id: partnerId,
        metadata: { account_id: accountId },
      });
    }
    if (!accountId) return json({ has_account: false, prefill: null });

    const acc = await stripe.accounts.retrieve(accountId);
    await admin.rpc("sync_stripe_account_status", {
      p_account_id: accountId,
      p_charges_enabled: acc.charges_enabled,
      p_payouts_enabled: acc.payouts_enabled,
    });
    const reqs = acc.requirements;
    return json({
      has_account: true,
      charges_enabled: acc.charges_enabled,
      payouts_enabled: acc.payouts_enabled,
      currently_due: [...new Set([...(reqs?.past_due ?? []), ...(reqs?.currently_due ?? [])])],
      pending_verification: reqs?.pending_verification ?? [],
      prefill: await prefill(stripe, acc),
    });
  } catch (e) {
    console.error("admin partner payments failed", partnerId, (e as Error).message);
    return json({ error: "stripe_error" }, 502);
  }
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
