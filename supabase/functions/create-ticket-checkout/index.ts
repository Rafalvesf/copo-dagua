import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";
import { confirmTicket, reserveCents } from "../_shared/tickets.ts";
import { fixedFeeCents } from "../_shared/fees.ts";
import { cancelOpenIntent, createInAppIntent, e164, intentJson, intentState } from "../_shared/inapp.ts";

// Bilhetes para eventos públicos pagos (migração 149).
//
// { action: "checkout", wedding_id, quantity, success_url, cancel_url, code?, invite_token? }
//   → Checkout Session com o pagamento para a conta Stripe do organizador
//     (destination charge). Quem compra paga só o preço anunciado.
//     Evento privado e pago (migração 153): só com o código do evento ou um
//     link individual desse evento; ao pagar, entra logo.
// { action: "sync", ticket_id }
//   → ao voltar da Stripe: confirma o bilhete se já estiver pago (plano B
//     do webhook) e acerta a taxa.
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
    if (typeof body.ticket_id !== "string") return json({ error: "validation_error" }, 400);
    const { data: row } = await admin.from("event_tickets").select("buyer_id, checkout_session_id, status").eq("id", body.ticket_id).maybeSingle();
    if (!row || row.buyer_id !== user.id) return json({ error: "not_found" }, 404);
    if (row.status === "paid") return json({ state: "paid" });
    const sid = row.checkout_session_id as string | null;
    if (!sid?.startsWith("pi_")) return json({ state: "open" });
    try {
      const st = await intentState(stripe, sid);
      if (st.state === "paid") await confirmTicket(stripe, admin, sid);
      return json(st);
    } catch (e) {
      console.error("state failed", (e as Error).message);
      return json({ state: "open" });
    }
  }

  if (body.action === "sync") {
    if (typeof body.ticket_id !== "string") return json({ error: "validation_error" }, 400);
    const { data: t } = await admin.from("event_tickets").select("buyer_id, checkout_session_id, status, wedding_id").eq("id", body.ticket_id).maybeSingle();
    if (!t || t.buyer_id !== user.id) return json({ error: "not_found" }, 404);
    if (t.status === "paid") return json({ status: "paid", wedding_id: t.wedding_id });
    if (!t.checkout_session_id) return json({ status: "open" });
    try {
      const status = await confirmTicket(stripe, admin, t.checkout_session_id);
      return json({ status, wedding_id: t.wedding_id });
    } catch (e) {
      console.error("ticket sync failed", e);
      return json({ error: "stripe_error" }, 502);
    }
  }

  const weddingId = body.wedding_id;
  const quantity = body.quantity;
  const successUrl = body.success_url;
  const cancelUrl = body.cancel_url;
  if (
    typeof weddingId !== "string" || typeof quantity !== "number" || !Number.isInteger(quantity) ||
    quantity < 1 || quantity > 20 ||
    (body.action !== "intent" && (typeof successUrl !== "string" || typeof cancelUrl !== "string"))
  ) {
    return json({ error: "validation_error" }, 400);
  }

  // `*`: funciona antes e depois das migrações 152/153 (cancelled_at, guest_code).
  const { data: w } = await admin.from("weddings").select("*").eq("id", weddingId).maybeSingle();
  if (!w || w.pending_deletion_at || w.cancelled_at) return json({ error: "not_found" }, 404);
  // Privado: precisa do código do evento ou de um link individual dele.
  let inviteGuestId: string | null = null;
  if (typeof body.invite_token === "string" && body.invite_token) {
    const { data: g } = await admin
      .from("guests")
      .select("id, wedding_id, linked_profile_id")
      .eq("rsvp_token", body.invite_token)
      .maybeSingle();
    if (!g || g.wedding_id !== w.id) return json({ error: "not_found" }, 404);
    if (g.linked_profile_id && g.linked_profile_id !== user.id) return json({ error: "already_linked" }, 409);
    inviteGuestId = g.id as string;
  }
  const codeOk = typeof body.code === "string" && !!w.guest_code &&
    body.code.trim().toUpperCase() === String(w.guest_code).toUpperCase();
  if (!w.is_public && !codeOk && !inviteGuestId) return json({ error: "not_found" }, 404);
  if (!w.is_paid || !w.entry_price || Number(w.entry_price) <= 0) return json({ error: "not_paid_event" }, 409);
  if (w.owner_id === user.id) return json({ error: "own_event" }, 409);

  const { data: org } = await admin
    .from("profiles")
    .select("stripe_account_id, stripe_charges_enabled")
    .eq("id", w.owner_id)
    .maybeSingle();
  const account = org?.stripe_account_id as string | null;
  if (!account) return json({ error: "organizer_not_onboarded" }, 409);
  if (!org?.stripe_charges_enabled) {
    try {
      const acc = await stripe.accounts.retrieve(account);
      await admin.rpc("sync_stripe_account_status", {
        p_account_id: acc.id, p_charges_enabled: acc.charges_enabled, p_payouts_enabled: acc.payouts_enabled,
      });
      if (!acc.charges_enabled) return json({ error: "organizer_not_onboarded" }, 409);
    } catch {
      return json({ error: "organizer_not_onboarded" }, 409);
    }
  }

  const { data: settings } = await admin.from("platform_settings").select("*").eq("id", 1).maybeSingle();
  const platformPct = Number(settings?.ticket_fee_percentage ?? 4);
  const unitCents = Math.round(Number(w.entry_price) * 100);
  const amountCents = unitCents * quantity;
  const { platformCents, applicationFeeCents } = reserveCents(amountCents, platformPct, fixedFeeCents(settings));
  const name = [w.partner_name_1, w.partner_name_2].filter(Boolean).join(" & ");

  // Pagamento dentro da app: valida o método e anula a tentativa anterior.
  const inApp = body.action === "intent";
  const method = typeof body.method === "string" ? body.method : "card";
  const phone = inApp && method === "mb_way" ? e164(typeof body.phone === "string" ? body.phone : "") : null;
  if (inApp && method === "mb_way" && !phone) return json({ error: "invalid_phone" }, 400);
  if (inApp && typeof body.previous_id === "string") {
    const { data: old } = await admin.from("event_tickets").select("buyer_id, status, checkout_session_id").eq("id", body.previous_id).maybeSingle();
    if (old && old.buyer_id === user.id && old.status === "pending") {
      const r = await cancelOpenIntent(stripe, old.checkout_session_id as string | null);
      if (r === "paid") {
        await confirmTicket(stripe, admin, old.checkout_session_id as string).catch(() => {});
        return json({ error: "invalid_state", ticket_id: body.previous_id }, 409);
      }
      if (r === "busy") return json({ error: "processing" }, 409);
      await admin.from("event_tickets").update({ status: "cancelled" }).eq("id", body.previous_id);
    }
  }

  const { data: ticket, error: insErr } = await admin
    .from("event_tickets")
    .insert({
      wedding_id: weddingId,
      buyer_id: user.id,
      quantity,
      unit_price: unitCents / 100,
      amount: amountCents / 100,
      platform_fee: platformCents / 100,
      destination_account: account,
      ...(inviteGuestId ? { invite_guest_id: inviteGuestId } : {}),
    })
    .select("id")
    .single();
  if (insErr || !ticket) return json({ error: "unknown_error" }, 500);

  if (inApp) {
    const pk = Deno.env.get("STRIPE_PUBLISHABLE_KEY");
    if (!pk) return json({ error: "not_configured" }, 503);
    try {
      const intent = await createInAppIntent(stripe, {
        method,
        phone,
        email: user.email ?? null,
        amountCents,
        description: `Bilhete · ${name}`,
        metadata: { kind: "event_ticket", ticket_id: ticket.id },
        applicationFeeCents,
        destination: account,
      });
      await admin.from("event_tickets").update({ checkout_session_id: intent.id }).eq("id", ticket.id);
      return json(intentJson(intent, pk, user.email ?? null, { ticket_id: ticket.id }));
    } catch (err) {
      console.error("in-app intent failed", (err as Error).message);
      await admin.from("event_tickets").update({ status: "cancelled" }).eq("id", ticket.id);
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
        price_data: { currency: "eur", unit_amount: unitCents, product_data: { name: `Bilhete · ${name}` } },
        quantity,
      }],
      payment_intent_data: {
        application_fee_amount: applicationFeeCents,
        transfer_data: { destination: account },
        metadata: { kind: "event_ticket", ticket_id: ticket.id },
      },
      metadata: { kind: "event_ticket", ticket_id: ticket.id },
      customer_email: user.email ?? undefined,
      expires_at: Math.floor(Date.now() / 1000) + 31 * 60,
      success_url: (successUrl as string).replace("{TICKET_ID}", ticket.id),
      cancel_url: cancelUrl as string,
    });
    await admin.from("event_tickets").update({ checkout_session_id: session.id }).eq("id", ticket.id);
    return json({ url: session.url, ticket_id: ticket.id });
  } catch (e) {
    console.error("create-ticket-checkout failed", e);
    await admin.from("event_tickets").update({ status: "cancelled" }).eq("id", ticket.id);
    return json({ error: "stripe_error" }, 502);
  }
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
