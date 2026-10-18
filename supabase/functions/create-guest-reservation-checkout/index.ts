import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";

// Reservas para os convidados (099_guest_offers.sql): o convidado paga na
// app o quarto ou o lugar no transporte que o organizador combinou com
// um parceiro. Mesmo modelo de create-deposit-checkout: destination
// charge para a conta Stripe do parceiro, comissão da plataforma
// ADICIONADA por cima do valor do parceiro.
//
// Corpo: { offer_id, quantity, nights?, success_url, cancel_url }
// 1. `reserve_guest_offer()` (JWT do convidado) confirma que pertence ao
//    evento, bloqueia os lugares e calcula o valor no servidor.
// 2. Cria a Checkout Session (expira aos 31 min; o bloqueio dura 35).
// 3. `record_guest_reservation_session()` guarda o id da sessão; o
//    webhook confirma o pagamento por esse id.
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return jsonError("forbidden", 403);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: authHeader } } },
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return jsonError("forbidden", 403);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return jsonError("validation_error", 400);
  }
  const offerId = body.offer_id;
  const quantity = body.quantity;
  const nights = body.nights ?? 1;
  const successUrl = body.success_url;
  const cancelUrl = body.cancel_url;
  if (
    typeof offerId !== "string" ||
    typeof quantity !== "number" || !Number.isInteger(quantity) ||
    typeof nights !== "number" || !Number.isInteger(nights) ||
    typeof successUrl !== "string" ||
    typeof cancelUrl !== "string"
  ) {
    return jsonError("validation_error", 400);
  }

  // Leitura com service role só para obter a conta Stripe do parceiro
  // (não é exposta aos convidados); quem pode reservar é validado a seguir
  // por `reserve_guest_offer()` com o JWT do convidado.
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: offerRow, error: offerError } = await admin
    .from("guest_offers")
    .select("id, title, kind, is_active, partner_profiles(stripe_account_id, stripe_charges_enabled, business_name)")
    .eq("id", offerId)
    .maybeSingle();
  if (offerError || !offerRow || !offerRow.is_active) return jsonError("not_found", 404);
  const pp = offerRow.partner_profiles as unknown as {
    stripe_account_id: string | null; stripe_charges_enabled: boolean; business_name: string;
  } | null;
  const partner = {
    partner_account: pp?.stripe_account_id ?? null,
    partner_charges_enabled: pp?.stripe_charges_enabled ?? false,
    partner_name: pp?.business_name ?? "",
    title: offerRow.title as string,
    kind: offerRow.kind as string,
  };
  if (!partner.partner_account) return jsonError("partner_not_onboarded", 409);
  if (!partner.partner_charges_enabled) {
    try {
      const account = await stripeClient().accounts.retrieve(partner.partner_account);
      await admin.rpc("sync_stripe_account_status", {
        p_account_id: account.id,
        p_charges_enabled: account.charges_enabled,
        p_payouts_enabled: account.payouts_enabled,
      });
      if (!account.charges_enabled) return jsonError("partner_not_onboarded", 409);
    } catch (e) {
      console.error("stripe account refresh failed", e);
      return jsonError("partner_not_onboarded", 409);
    }
  }

  const { data: reservationId, error: reserveError } = await supabase.rpc("reserve_guest_offer", {
    p_offer_id: offerId,
    p_quantity: quantity,
    p_nights: nights,
  });
  if (reserveError || typeof reservationId !== "string") {
    const msg = reserveError?.message ?? "";
    for (const code of ["feature_locked", "sold_out", "offer_unavailable", "forbidden", "invalid_quantity", "invalid_nights"]) {
      if (msg.includes(code)) return jsonError(code, code === "forbidden" ? 403 : 409);
    }
    return jsonError("unknown_error", 500);
  }

  const { data: reservation } = await supabase
    .from("guest_offer_reservations")
    .select("id, amount, quantity, nights")
    .eq("id", reservationId)
    .single();
  if (!reservation) return jsonError("unknown_error", 500);

  const { data: settings } = await supabase
    .from("platform_settings")
    .select("platform_commission_percentage")
    .eq("id", 1)
    .single();
  const commissionPct = Number(settings?.platform_commission_percentage ?? 0);

  const partnerAmountCents = Math.round(Number(reservation.amount) * 100);
  const applicationFeeCents = Math.round((partnerAmountCents * commissionPct) / 100);
  const totalChargeCents = partnerAmountCents + applicationFeeCents;

  const what = partner.kind === "lodging"
    ? `${reservation.quantity} quarto(s) · ${reservation.nights} noite(s)`
    : `${reservation.quantity} lugar(es)`;

  try {
    const session = await stripeClient().checkout.sessions.create({
      mode: "payment",
      line_items: [{
        price_data: {
          currency: "eur",
          unit_amount: totalChargeCents,
          product_data: { name: `${partner.title} — ${what}`, description: `Parceiro: ${partner.partner_name}` },
        },
        quantity: 1,
      }],
      payment_intent_data: {
        application_fee_amount: applicationFeeCents,
        transfer_data: { destination: partner.partner_account! },
      },
      metadata: { kind: "guest_reservation", reservation_id: reservation.id },
      expires_at: Math.floor(Date.now() / 1000) + 31 * 60,
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    const { error: recordError } = await supabase.rpc("record_guest_reservation_session", {
      p_reservation_id: reservation.id,
      p_session_id: session.id,
    });
    if (recordError) return jsonError("unknown_error", 500);

    return new Response(JSON.stringify({ url: session.url, reservation_id: reservation.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("create-guest-reservation-checkout failed", err);
    await supabase.rpc("cancel_guest_reservation", { p_reservation_id: reservation.id });
    return jsonError("stripe_error", 502);
  }
});

function jsonError(code: string, status: number): Response {
  return new Response(JSON.stringify({ error: code }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
