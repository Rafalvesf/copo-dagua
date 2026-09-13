import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";

// Contract: mobile-app/payments/stripe-connect.md
//
// Chamada pelo casal para pagar o sinal (`payments.type = 'deposit'`,
// criado por `accept_proposal()`, 020_payments.sql) OU o restante depois
// do serviço concluído (`payments.type = 'final_payment'`, criado
// automaticamente por `admin_complete_booking()`, 053_final_payment.sql)
// — mesmo fluxo para os dois, só muda o texto mostrado na Stripe.
// Checkout Session hospedada pela Stripe — nenhum dado de cartão passa
// por este código. `payment_intent_data.transfer_data.destination` +
// `application_fee_amount` implementam a destination charge: o casal
// paga a plataforma diretamente, a plataforma FICA com a comissão
// (`application_fee_amount`, calculada de
// `platform_settings.platform_commission_percentage` abaixo) e transfere
// o resto para o parceiro — isto aplica-se aos dois tipos de pagamento,
// não só ao sinal.
//
// Comissão ADICIONADA por cima do valor do parceiro, não descontada dele
// — pedido explícito do utilizador (2026-09-05): "ao valor que o
// parceiro cobra nós adicionamos a nossa comissão sobre o valor". O
// parceiro recebe sempre `payments.amount` (o valor que ele próprio
// definiu na proposta) por inteiro; o casal é que paga esse valor mais a
// comissão. Antes desta mudança era o inverso (comissão descontada do
// parceiro) — `payments.amount`/`bookings.deposit_amount`/`total_amount`
// continuam a guardar o valor do parceiro sem alteração, só o que é
// efetivamente cobrado ao casal na Stripe é que muda (ver
// `couple_bookings_screen.dart` para o mesmo cálculo refletido no botão
// antes de abrir o checkout, para nunca mostrar um valor diferente do
// que a Stripe vai cobrar a seguir).
//
// Cliente construído com o JWT do casal (não service role) — a leitura
// do pagamento passa pela RLS normal ("Participants can view payments",
// 020_payments.sql), por isso um casal só consegue criar checkout para
// os seus próprios pagamentos.
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

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return jsonError("validation_error", 400);
  }
  const paymentId = body.payment_id;
  const successUrl = body.success_url;
  const cancelUrl = body.cancel_url;
  if (
    typeof paymentId !== "string" ||
    typeof successUrl !== "string" ||
    typeof cancelUrl !== "string"
  ) {
    return jsonError("validation_error", 400);
  }

  const { data: payment, error: paymentError } = await supabase
    .from("payments")
    .select(
      "id, booking_id, payer_id, amount, type, status, bookings(booking_number), partner_profiles(stripe_account_id, stripe_charges_enabled, business_name)",
    )
    .eq("id", paymentId)
    .single();

  if (paymentError || !payment) {
    return jsonError("not_found", 404);
  }
  if (payment.payer_id !== user.id) {
    return jsonError("forbidden", 403);
  }
  if (
    (payment.type !== "deposit" && payment.type !== "final_payment") ||
    payment.status !== "pending"
  ) {
    return jsonError("invalid_state", 409);
  }

  const partner = payment.partner_profiles as unknown as {
    stripe_account_id: string | null;
    stripe_charges_enabled: boolean;
    business_name: string;
  } | null;
  if (!partner?.stripe_account_id || !partner.stripe_charges_enabled) {
    return jsonError("partner_not_onboarded", 409);
  }

  const { data: settings } = await supabase
    .from("platform_settings")
    .select("platform_commission_percentage")
    .eq("id", 1)
    .single();
  const commissionPct = (settings?.platform_commission_percentage as number | undefined) ?? 0;

  // `partnerAmountCents` é sempre o que o parceiro recebe por inteiro;
  // `applicationFeeCents` acresce a esse valor em vez de ser descontado
  // dele — o casal paga `partnerAmountCents + applicationFeeCents`.
  const partnerAmountCents = Math.round((payment.amount as number) * 100);
  const applicationFeeCents = Math.round((partnerAmountCents * commissionPct) / 100);
  const totalChargeCents = partnerAmountCents + applicationFeeCents;
  const bookingNumber = (payment.bookings as unknown as { booking_number: string } | null)?.booking_number ?? "";

  const stripe = stripeClient();

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: totalChargeCents,
            product_data: {
              name: `${payment.type === "deposit" ? "Sinal" : "Pagamento final"} — reserva ${bookingNumber}`.trim(),
              description: `Parceiro: ${partner.business_name}`,
            },
          },
          quantity: 1,
        },
      ],
      payment_intent_data: {
        application_fee_amount: applicationFeeCents,
        transfer_data: { destination: partner.stripe_account_id },
      },
      metadata: { payment_id: payment.id, booking_id: payment.booking_id },
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    const { error: recordError } = await supabase.rpc("record_stripe_checkout_session", {
      p_payment_id: payment.id,
      p_session_id: session.id,
    });
    if (recordError) {
      return jsonError("unknown_error", 500);
    }

    return new Response(JSON.stringify({ url: session.url }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("create-deposit-checkout failed", err);
    return jsonError("stripe_error", 502);
  }
});

function jsonError(code: string, status: number): Response {
  return new Response(JSON.stringify({ error: code }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
