import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";
import { confirmGiftOrder } from "../_shared/gifts.ts";
import { reserveCents } from "../_shared/tickets.ts";
import { cardRegion, fixedFeeCents, organizerTiersForCard, parseTiers, tieredFeeCents } from "../_shared/fees.ts";
import { cancelOpenIntent, createInAppIntent, e164, intentJson, intentState } from "../_shared/inapp.ts";

// Presentes da loja dos parceiros (migração 160).
//
// { action: "checkout", item_id, quantity, message?, success_url, cancel_url }
//   → Checkout Session com o pagamento para a conta Stripe do PARCEIRO
//     (destination charge). O organizador nunca recebe dinheiro.
// { action: "sync", order_id }
//   → ao voltar da Stripe: confirma a compra se já estiver paga (plano B do
//     webhook) e acerta a taxa.
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

  // Pagamento dentro da app (2026-11-09): estado para o ecrã de pagamento.
  if (body.action === "state") {
    if (typeof body.order_id !== "string") return json({ error: "validation_error" }, 400);
    const { data: row } = await admin.from("gift_orders").select("buyer_id, checkout_session_id, status").eq("id", body.order_id).maybeSingle();
    if (!row || row.buyer_id !== user.id) return json({ error: "not_found" }, 404);
    if (row.status === "paid") return json({ state: "paid" });
    const sid = row.checkout_session_id as string | null;
    if (!sid?.startsWith("pi_")) return json({ state: "open" });
    try {
      const st = await intentState(stripe, sid);
      if (st.state === "paid") await confirmGiftOrder(stripe, admin, sid);
      return json(st);
    } catch (e) {
      console.error("state failed", (e as Error).message);
      return json({ state: "open" });
    }
  }

  if (body.action === "sync") {
    if (typeof body.order_id !== "string") return json({ error: "validation_error" }, 400);
    const { data: o } = await admin.from("gift_orders").select("buyer_id, checkout_session_id, status, wedding_id").eq("id", body.order_id).maybeSingle();
    if (!o || o.buyer_id !== user.id) return json({ error: "not_found" }, 404);
    if (o.status === "paid") return json({ status: "paid", wedding_id: o.wedding_id });
    if (!o.checkout_session_id) return json({ status: "open", wedding_id: o.wedding_id });
    try {
      const status = await confirmGiftOrder(stripe, admin, o.checkout_session_id);
      return json({ status, wedding_id: o.wedding_id });
    } catch (e) {
      console.error("gift sync failed", e);
      return json({ error: "stripe_error" }, 502);
    }
  }

  const itemId = body.item_id;
  const quantity = body.quantity;
  const successUrl = body.success_url;
  const cancelUrl = body.cancel_url;
  const message = typeof body.message === "string" ? body.message.trim().slice(0, 600) : "";
  if (
    typeof itemId !== "string" || typeof quantity !== "number" || !Number.isInteger(quantity) ||
    quantity < 1 || quantity > 20 ||
    (body.action !== "intent" && (typeof successUrl !== "string" || typeof cancelUrl !== "string"))
  ) {
    return json({ error: "validation_error" }, 400);
  }

  const { data: item } = await admin.from("gift_list_items").select("id, wedding_id, kind, product_id, quantity_wanted").eq("id", itemId).maybeSingle();
  if (!item || item.kind !== "product" || !item.product_id) return json({ error: "not_found" }, 404);

  // Só convidados (ou organizadores) do evento.
  const [{ data: member }, { data: w }] = await Promise.all([
    admin.from("wedding_guest_members").select("guest_id").eq("wedding_id", item.wedding_id).eq("guest_id", user.id).maybeSingle(),
    admin.from("weddings").select("id, owner_id, pending_deletion_at").eq("id", item.wedding_id).maybeSingle(),
  ]);
  if (!w || w.pending_deletion_at) return json({ error: "not_found" }, 404);
  if (!member) {
    const { data: isMember } = await supabase.rpc("is_wedding_member", { target_wedding_id: item.wedding_id });
    if (isMember !== true) return json({ error: "not_guest" }, 403);
  }

  const { data: p } = await admin.from("partner_products").select("id, partner_id, title, price, stock, active").eq("id", item.product_id).maybeSingle();
  if (!p || !p.active) return json({ error: "unavailable" }, 409);
  if (p.stock != null && p.stock < quantity) return json({ error: "out_of_stock" }, 409);
  if (p.partner_id === user.id) return json({ error: "own_product" }, 409);

  // Não oferecer mais do que os anfitriões pediram.
  const [{ data: claims }, { data: orders }] = await Promise.all([
    admin.from("gift_claims").select("quantity").eq("item_id", item.id),
    admin.from("gift_orders").select("quantity").eq("item_id", item.id).eq("status", "paid"),
  ]);
  const taken = [...(claims ?? []), ...(orders ?? [])].reduce((s: number, r: { quantity: number }) => s + Number(r.quantity), 0);
  if (taken + quantity > Number(item.quantity_wanted)) return json({ error: "already_taken" }, 409);

  const { data: partner } = await admin
    .from("partner_profiles")
    .select("business_name, status, is_paused, stripe_account_id, stripe_charges_enabled")
    .eq("id", p.partner_id)
    .maybeSingle();
  if (!partner || partner.status !== "published" || partner.is_paused) return json({ error: "unavailable" }, 409);
  const account = partner.stripe_account_id as string | null;
  if (!account) return json({ error: "partner_not_onboarded" }, 409);
  if (!partner.stripe_charges_enabled) {
    try {
      const acc = await stripe.accounts.retrieve(account);
      await admin.rpc("sync_stripe_account_status", {
        p_account_id: acc.id, p_charges_enabled: acc.charges_enabled, p_payouts_enabled: acc.payouts_enabled,
      });
      if (!acc.charges_enabled) return json({ error: "partner_not_onboarded" }, 409);
    } catch {
      return json({ error: "partner_not_onboarded" }, 409);
    }
  }

  const { data: settings } = await admin.from("platform_settings").select("*").eq("id", 1).maybeSingle();
  const unitCents = Math.round(Number(p.price) * 100);
  const amountCents = unitCents * quantity;
  // Migração 181: a taxa do parceiro da loja segue os mesmos escalões das
  // reservas (4% + 1 € até 2 000 €, 3% + 1 € acima); sem eles,
  // `gift_fee_percentage`.
  const partnerTiers = parseTiers(settings?.partner_fee_tiers);
  const platformPct = partnerTiers.length && amountCents > 0
    ? (tieredFeeCents(amountCents, partnerTiers) / amountCents) * 100
    : Number(settings?.gift_fee_percentage ?? 4);
  const reserved = reserveCents(amountCents, platformPct, fixedFeeCents(settings));
  // Migração 181: quem oferece com um cartão do Reino Unido ou de fora da
  // Europa paga a diferença da taxa de serviço por cima do preço (cartões
  // europeus, MB WAY, Multibanco e carteiras: nada a mais).
  const pmId = body.action === "intent" && (body.method ?? "card") === "card" &&
      typeof body.payment_method === "string" && body.payment_method.startsWith("pm_")
    ? body.payment_method as string
    : null;
  let region: "EEA" | "GB" | "OTHER" = "EEA";
  if (pmId) {
    try {
      const pm = await stripe.paymentMethods.retrieve(pmId);
      region = cardRegion(pm.card?.country ?? null);
    } catch (e) {
      console.error("payment method lookup failed", e);
      return json({ error: "card_error" }, 400);
    }
  }
  const extraCents = region === "EEA" ? 0 : Math.max(
    0,
    tieredFeeCents(amountCents, organizerTiersForCard(settings, region)) -
      tieredFeeCents(amountCents, organizerTiersForCard(settings, "EEA")),
  );
  const platformCents = reserved.platformCents + extraCents;
  const applicationFeeCents = reserved.applicationFeeCents + extraCents;
  const { data: buyer } = await admin.from("profiles").select("full_name").eq("id", user.id).maybeSingle();

  // Pagamento dentro da app: valida o método e anula a tentativa anterior.
  const inApp = body.action === "intent";
  const method = typeof body.method === "string" ? body.method : "card";
  const phone = inApp && method === "mb_way" ? e164(typeof body.phone === "string" ? body.phone : "") : null;
  if (inApp && method === "mb_way" && !phone) return json({ error: "invalid_phone" }, 400);
  if (inApp && typeof body.previous_id === "string") {
    const { data: old } = await admin.from("gift_orders").select("buyer_id, status, checkout_session_id").eq("id", body.previous_id).maybeSingle();
    if (old && old.buyer_id === user.id && old.status === "pending") {
      const r = await cancelOpenIntent(stripe, old.checkout_session_id as string | null);
      if (r === "paid") {
        await confirmGiftOrder(stripe, admin, old.checkout_session_id as string).catch(() => {});
        return json({ error: "invalid_state", order_id: body.previous_id }, 409);
      }
      if (r === "busy") return json({ error: "processing" }, 409);
      await admin.from("gift_orders").update({ status: "cancelled" }).eq("id", body.previous_id);
    }
  }

  const { data: order, error: insErr } = await admin
    .from("gift_orders")
    .insert({
      item_id: item.id,
      wedding_id: item.wedding_id,
      product_id: p.id,
      partner_id: p.partner_id,
      buyer_id: user.id,
      buyer_name: (buyer?.full_name as string | null)?.trim() || "Convidado",
      product_title: p.title,
      quantity,
      unit_price: unitCents / 100,
      amount: amountCents / 100,
      platform_fee: platformCents / 100,
      message: message || null,
      destination_account: account,
    })
    .select("id")
    .single();
  if (insErr || !order) return json({ error: "unknown_error" }, 500);

  if (inApp) {
    const pk = Deno.env.get("STRIPE_PUBLISHABLE_KEY");
    if (!pk) return json({ error: "not_configured" }, 503);
    try {
      const intent = await createInAppIntent(stripe, {
        method,
        phone,
        email: user.email ?? null,
        amountCents: amountCents + extraCents,
        description: `${p.title} · ${partner.business_name}`,
        metadata: { kind: "gift_order", order_id: order.id, card_region: region, card_extra_cents: String(extraCents) },
        applicationFeeCents,
        destination: account,
        paymentMethod: pmId,
      });
      await admin.from("gift_orders").update({ checkout_session_id: intent.id }).eq("id", order.id);
      return json(intentJson(intent, pk, user.email ?? null, {
        order_id: order.id,
        base_amount_cents: amountCents,
        card_region: region,
      }));
    } catch (err) {
      console.error("in-app intent failed", (err as Error).message);
      await admin.from("gift_orders").update({ status: "cancelled" }).eq("id", order.id);
      if ((err as { type?: string }).type === "StripeCardError") return json({ error: "declined", message: (err as Error).message }, 402);
      const code = (err as { code?: string }).code;
      if (code === "payment_intent_invalid_parameter" || code === "parameter_invalid_empty" ||
          String((err as Error).message ?? "").includes("payment_method_types")) {
        return json({ error: "method_unavailable" }, 409);
      }
      return json({ error: "stripe_error" }, 502);
    }
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [{
        price_data: { currency: "eur", unit_amount: unitCents, product_data: { name: `${p.title} · ${partner.business_name}` } },
        quantity,
      }],
      payment_intent_data: {
        application_fee_amount: applicationFeeCents,
        transfer_data: { destination: account },
        metadata: { kind: "gift_order", order_id: order.id },
      },
      metadata: { kind: "gift_order", order_id: order.id },
      customer_email: user.email ?? undefined,
      expires_at: Math.floor(Date.now() / 1000) + 31 * 60,
      success_url: (successUrl as string).replace("{ORDER_ID}", order.id),
      cancel_url: cancelUrl as string,
    });
    await admin.from("gift_orders").update({ checkout_session_id: session.id }).eq("id", order.id);
    return json({ url: session.url, order_id: order.id });
  } catch (e) {
    console.error("create-gift-checkout failed", e);
    await admin.from("gift_orders").update({ status: "cancelled" }).eq("id", order.id);
    return json({ error: "stripe_error" }, 502);
  }
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
