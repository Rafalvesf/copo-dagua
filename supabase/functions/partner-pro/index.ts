import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";
import { syncPartnerPro } from "../_shared/pro.ts";

// Plano Pro dos parceiros (migração 161). Subscrição mensal ou anual na
// conta Stripe da À Nossa! (Stripe Billing), com o preço das Definições.
//
// { action: "checkout", interval: "month" | "year", success_url, cancel_url } → { url }
// { action: "sync" }                → { active, until }  (ao voltar da Stripe)
// { action: "portal", return_url }  → { url }  (gerir ou cancelar a subscrição)
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
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const stripe = stripeClient();

  const { data: partner } = await admin
    .from("partner_profiles")
    .select("id, business_name, contact_email, stripe_customer_id, pro_subscription_id")
    .eq("id", user.id)
    .maybeSingle();
  if (!partner) return json({ error: "not_partner" }, 403);

  try {
    if (body.action === "sync") {
      return json(await syncPartnerPro(stripe, admin, partner.id));
    }

    if (body.action === "portal") {
      if (!partner.stripe_customer_id || typeof body.return_url !== "string") return json({ error: "no_subscription" }, 409);
      try {
        const s = await stripe.billingPortal.sessions.create({ customer: partner.stripe_customer_id, return_url: body.return_url });
        return json({ url: s.url });
      } catch (e) {
        console.error("billing portal failed", (e as Error).message);
        return json({ error: "portal_unavailable" }, 409);
      }
    }

    // Gerir dentro da app (2026-11-09, sem página da Stripe): cancelar no
    // fim do período pago, ou voltar atrás.
    if (body.action === "cancel" || body.action === "resume") {
      if (!partner.pro_subscription_id) return json({ error: "no_subscription" }, 409);
      await stripe.subscriptions.update(partner.pro_subscription_id, { cancel_at_period_end: body.action === "cancel" });
      return json(await syncPartnerPro(stripe, admin, partner.id));
    }

    if (body.action !== "checkout" && body.action !== "subscribe") return json({ error: "validation_error" }, 400);
    const interval = body.interval === "year" ? "year" : "month";
    if (body.action === "checkout" && (typeof body.success_url !== "string" || typeof body.cancel_url !== "string")) {
      return json({ error: "validation_error" }, 400);
    }

    const { data: s } = await admin.from("platform_settings").select("pro_enabled, pro_price_monthly, pro_price_yearly").eq("id", 1).maybeSingle();
    if (s && s.pro_enabled === false) return json({ error: "pro_disabled" }, 409);
    if (partner.pro_subscription_id) {
      const st = await syncPartnerPro(stripe, admin, partner.id);
      if (st.active) return json({ error: "already_pro" }, 409);
    }
    const price = Number(interval === "year" ? s?.pro_price_yearly ?? 190 : s?.pro_price_monthly ?? 19);
    const cents = Math.round(price * 100);

    let customer = partner.stripe_customer_id as string | null;
    if (!customer) {
      const c = await stripe.customers.create({
        email: (partner.contact_email as string | null) ?? user.email ?? undefined,
        name: partner.business_name ?? undefined,
        metadata: { partner_id: partner.id },
      });
      customer = c.id;
      await admin.from("partner_profiles").update({ stripe_customer_id: customer }).eq("id", partner.id);
    }

    // Pagamento dentro da app: subscrição por pagar (default_incomplete) e
    // o PaymentIntent da primeira fatura vai para o ecrã de pagamento da
    // app (cartão, Apple Pay, Google Pay). Fica ativa quando é paga.
    if (body.action === "subscribe") {
      const pk = Deno.env.get("STRIPE_PUBLISHABLE_KEY");
      if (!pk) return json({ error: "not_configured" }, 503);
      // Tentativas anteriores por pagar: anula-as.
      const open = await stripe.subscriptions.list({ customer, status: "incomplete", limit: 10 });
      for (const o of open.data) {
        if (o.metadata?.kind === "partner_pro") await stripe.subscriptions.cancel(o.id).catch(() => {});
      }
      const pid = `anossa_premium_${interval}`;
      const product = await stripe.products.retrieve(pid).catch(() =>
        stripe.products.create({ id: pid, name: interval === "year" ? "À Nossa! Premium · anual" : "À Nossa! Premium · mensal" })
      );
      const sub = await stripe.subscriptions.create({
        customer,
        items: [{ price_data: { currency: "eur", unit_amount: cents, recurring: { interval }, product: product.id } }],
        payment_behavior: "default_incomplete",
        payment_settings: { save_default_payment_method: "on_subscription", payment_method_types: ["card"] },
        metadata: { kind: "partner_pro", partner_id: partner.id },
        expand: ["latest_invoice.payment_intent"],
      });
      // deno-lint-ignore no-explicit-any
      const pi = (sub.latest_invoice as any)?.payment_intent as { id: string; client_secret: string; amount: number; status: string } | null;
      if (!pi?.client_secret) return json({ error: "stripe_error" }, 502);
      return json({
        client_secret: pi.client_secret,
        publishable_key: pk,
        payment_intent_id: pi.id,
        amount_cents: pi.amount,
        email: (partner.contact_email as string | null) ?? user.email ?? null,
        status: pi.status,
        subscription_id: sub.id,
      });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer,
      line_items: [{
        price_data: {
          currency: "eur",
          unit_amount: cents,
          recurring: { interval },
          product_data: { name: interval === "year" ? "À Nossa! Premium · anual" : "À Nossa! Premium · mensal" },
        },
        quantity: 1,
      }],
      subscription_data: { metadata: { kind: "partner_pro", partner_id: partner.id } },
      metadata: { kind: "partner_pro", partner_id: partner.id },
      success_url: body.success_url,
      cancel_url: body.cancel_url,
    });
    return json({ url: session.url });
  } catch (e) {
    console.error("partner-pro failed", (e as Error).message);
    return json({ error: "stripe_error" }, 502);
  }
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
