import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";

// Pagamento DENTRO da app (pedido 2026-10-19: "não quero que a app abra o
// browser"). Em vez de uma Checkout Session hospedada, cria um
// PaymentIntent para o método escolhido no ecrã de seleção e devolve o
// `client_secret` — a app monta o Payment Element da Stripe (Stripe.js,
// iframe da própria Stripe: nenhum dado de cartão passa pela app nem por
// este código) e confirma ali mesmo.
//
// Mesmas regras que `create-deposit-checkout`: só o pagador, só
// pagamentos `pending` (sinal ou restante), destination charge com a
// comissão POR CIMA do valor do parceiro.
//
// Um pagamento só tem uma tentativa viva: ao trocar de método, o
// PaymentIntent/Checkout anterior é cancelado/expirado para nunca se
// cobrar duas vezes.
// `all` (2026-10-21): todos os métodos ativos na conta Stripe no mesmo
// formulário — cartão, Apple Pay, Google Pay, Link e os restantes que
// forem ativados no painel. Sem métodos que saem para uma página da
// Stripe ou do banco (pedido 2026-10-21: tudo dentro da app).
// Os outros três ficam para compatibilidade.
const METHODS: Record<string, string> = {
  all: "all",
  card: "card",
  mb_way: "mb_way",
  multibanco: "multibanco",
};

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return json({ error: "forbidden" }, 403);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: authHeader } } },
  );
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return json({ error: "forbidden" }, 403);

  const publishableKey = Deno.env.get("STRIPE_PUBLISHABLE_KEY");
  if (!publishableKey) return json({ error: "not_configured" }, 503);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "validation_error" }, 400);
  }
  const paymentId = body.payment_id;
  const method = typeof body.method === "string" ? METHODS[body.method] : undefined;
  if (typeof paymentId !== "string" || !method) {
    return json({ error: "validation_error" }, 400);
  }

  const { data: payment, error: paymentError } = await supabase
    .from("payments")
    .select(
      "id, booking_id, payer_id, amount, type, status, provider_payment_id, bookings(booking_number), partner_profiles(stripe_account_id, stripe_charges_enabled, business_name)",
    )
    .eq("id", paymentId)
    .single();
  if (paymentError || !payment) return json({ error: "not_found" }, 404);
  if (payment.payer_id !== user.id) return json({ error: "forbidden" }, 403);
  if (
    (payment.type !== "deposit" && payment.type !== "final_payment") ||
    payment.status !== "pending"
  ) {
    return json({ error: "invalid_state" }, 409);
  }

  const partner = payment.partner_profiles as unknown as {
    stripe_account_id: string | null;
    stripe_charges_enabled: boolean;
    business_name: string;
  } | null;
  if (!partner?.stripe_account_id) return json({ error: "partner_not_onboarded" }, 409);

  const stripe = stripeClient();
  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  if (!partner.stripe_charges_enabled) {
    try {
      const account = await stripe.accounts.retrieve(partner.stripe_account_id);
      await admin.rpc("sync_stripe_account_status", {
        p_account_id: account.id,
        p_charges_enabled: account.charges_enabled,
        p_payouts_enabled: account.payouts_enabled,
      });
      if (!account.charges_enabled) return json({ error: "partner_not_onboarded" }, 409);
    } catch (e) {
      console.error("stripe account refresh failed", e);
      return json({ error: "partner_not_onboarded" }, 409);
    }
  }

  // Tentativa anterior: se já foi paga, confirma e recusa nova; senão
  // anula-a para não haver duas cobranças possíveis.
  const prev = payment.provider_payment_id as string | null;
  try {
    if (prev?.startsWith("pi_")) {
      const pi = await stripe.paymentIntents.retrieve(prev);
      if (pi.status === "succeeded") {
        await admin.rpc("confirm_stripe_deposit_payment", { p_session_id: pi.id, p_payment_intent_id: pi.id });
        return json({ error: "invalid_state" }, 409);
      }
      if (pi.status === "processing") return json({ error: "processing" }, 409);
      // Referência Multibanco já emitida: mostra a mesma em vez de criar
      // outra (o casal pode ter apontado a primeira).
      const mb = (pi.next_action as any)?.multibanco_display_details;
      if (method === "multibanco" && pi.status === "requires_action" && mb) {
        return json({
          client_secret: pi.client_secret,
          publishable_key: publishableKey,
          payment_intent_id: pi.id,
          amount_cents: pi.amount,
          email: user.email ?? null,
          multibanco: { entity: mb.entity, reference: mb.reference, expires_at: mb.expires_at },
        });
      }
      if (pi.status !== "canceled") await stripe.paymentIntents.cancel(pi.id);
    } else if (prev?.startsWith("cs_")) {
      const cs = await stripe.checkout.sessions.retrieve(prev);
      if (cs.payment_status === "paid") {
        const piId = typeof cs.payment_intent === "string" ? cs.payment_intent : cs.payment_intent?.id ?? cs.id;
        await admin.rpc("confirm_stripe_deposit_payment", { p_session_id: cs.id, p_payment_intent_id: piId });
        return json({ error: "invalid_state" }, 409);
      }
      if (cs.status === "open") await stripe.checkout.sessions.expire(cs.id);
    }
  } catch (e) {
    console.error("previous attempt cleanup failed", e);
    return json({ error: "stripe_error" }, 502);
  }

  const { data: settings } = await supabase
    .from("platform_settings")
    .select("platform_commission_percentage")
    .eq("id", 1)
    .single();
  const commissionPct = (settings?.platform_commission_percentage as number | undefined) ?? 0;
  const partnerAmountCents = Math.round((payment.amount as number) * 100);
  const applicationFeeCents = Math.round((partnerAmountCents * commissionPct) / 100);
  const totalChargeCents = partnerAmountCents + applicationFeeCents;
  const bookingNumber = (payment.bookings as unknown as { booking_number: string } | null)?.booking_number ?? "";
  const label = payment.type === "deposit" ? "Sinal" : "Pagamento final";

  let intent;
  try {
    intent = await stripe.paymentIntents.create({
      amount: totalChargeCents,
      currency: "eur",
      ...(method === "all"
        ? { automatic_payment_methods: { enabled: true, allow_redirects: "never" as const } }
        : { payment_method_types: [method] }),
      description: `${label} — reserva ${bookingNumber} · ${partner.business_name}`.trim(),
      receipt_email: user.email ?? undefined,
      // Pagamento antecipado (2026-10-25, migração 119): o dinheiro fica na
      // À Nossa! e só é transferido ao parceiro 3 dias depois do evento,
      // sem disputa (`release-partner-funds`). Antes ia logo para o parceiro.
      transfer_group: payment.booking_id as string,
      metadata: {
        payment_id: payment.id,
        booking_id: payment.booking_id,
        kind: "booking_payment",
        partner_account: partner.stripe_account_id,
        partner_amount_cents: String(partnerAmountCents),
        commission_cents: String(applicationFeeCents),
      },
    });
  } catch (err) {
    console.error("paymentIntents.create failed", err);
    const code = (err as { code?: string; param?: string }).code;
    // Método não ativado na conta Stripe (ex.: MB WAY/Multibanco).
    if (code === "payment_intent_invalid_parameter" || code === "parameter_invalid_empty" ||
        String((err as Error).message ?? "").includes("payment_method_types")) {
      return json({ error: "method_unavailable" }, 409);
    }
    return json({ error: "stripe_error" }, 502);
  }

  const { error: recordError } = await supabase.rpc("record_stripe_checkout_session", {
    p_payment_id: payment.id,
    p_session_id: intent.id,
  });
  if (recordError) {
    await stripe.paymentIntents.cancel(intent.id).catch(() => {});
    return json({ error: "unknown_error" }, 500);
  }

  return json({
    client_secret: intent.client_secret,
    publishable_key: publishableKey,
    payment_intent_id: intent.id,
    amount_cents: totalChargeCents,
    email: user.email ?? null,
  });
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
