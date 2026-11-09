import type Stripe from "npm:stripe@17";
// deno-lint-ignore no-explicit-any
type Admin = any;

// Bilhetes (migração 149). Quem compra paga o preço anunciado. A À Nossa!
// retém, como application fee, a comissão (4%) MAIS uma reserva para a
// taxa da Stripe; depois do pagamento, quando a taxa real é conhecida,
// devolve ao organizador o que sobrou da reserva. Resultado: o
// organizador paga exatamente a comissão e a taxa real da Stripe.
export const STRIPE_FEE_RESERVE_PCT = 3.25; // cartões de fora do EEE (o pior caso)
export const STRIPE_FEE_RESERVE_FIXED_CENTS = 25;

// `fixedCents`: o valor fixo por transação (+1 €, 2026-11-08).
export function reserveCents(amountCents: number, platformPct: number, fixedCents = 0): { platformCents: number; applicationFeeCents: number } {
  const platformCents = Math.min(amountCents, Math.round((amountCents * platformPct) / 100) + fixedCents);
  const reserve = Math.round((amountCents * STRIPE_FEE_RESERVE_PCT) / 100) + STRIPE_FEE_RESERVE_FIXED_CENTS;
  // Nunca mais do que o valor do bilhete.
  return { platformCents, applicationFeeCents: Math.min(amountCents, platformCents + reserve) };
}

// Confirma o bilhete e acerta a taxa da Stripe. Idempotente.
export async function confirmTicket(stripe: Stripe, admin: Admin, sessionId: string): Promise<"paid" | "open" | "unknown"> {
  const { data: t } = await admin
    .from("event_tickets")
    .select("id, status, amount, platform_fee, stripe_fee, checkout_session_id")
    .eq("checkout_session_id", sessionId)
    .maybeSingle();
  if (!t) return "unknown";
  // Pagamento dentro da app (2026-11-09): o id guardado é o PaymentIntent.
  let piId: string;
  if (sessionId.startsWith("pi_")) {
    const intent = await stripe.paymentIntents.retrieve(sessionId);
    if (intent.status !== "succeeded") return "open";
    piId = intent.id;
  } else {
    const session = await stripe.checkout.sessions.retrieve(sessionId);
    if (session.payment_status !== "paid") return "open";
    piId = typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id ?? sessionId;
  }
  const { error } = await admin.rpc("confirm_event_ticket", { p_session_id: sessionId, p_payment_intent_id: piId });
  if (error) throw new Error(`confirm_event_ticket: ${error.message}`);

  if (t.stripe_fee == null && piId.startsWith("pi_")) {
    try {
      const pi = await stripe.paymentIntents.retrieve(piId, { expand: ["latest_charge.balance_transaction"] });
      const charge = pi.latest_charge as Stripe.Charge | null;
      const bt = charge?.balance_transaction as Stripe.BalanceTransaction | null;
      const feeId = typeof charge?.application_fee === "string" ? charge.application_fee : charge?.application_fee?.id;
      if (bt && feeId) {
        const stripeFeeCents = bt.fee;
        const platformCents = Math.round(Number(t.platform_fee) * 100);
        const fee = await stripe.applicationFees.retrieve(feeId);
        const keep = platformCents + stripeFeeCents;
        const excess = fee.amount - fee.amount_refunded - keep;
        if (excess > 0) {
          await stripe.applicationFees.createRefund(feeId, { amount: excess }, { idempotencyKey: `ticket-fee-${t.id}` });
        }
        await admin.from("event_tickets").update({ stripe_fee: stripeFeeCents / 100 }).eq("id", t.id);
      }
    } catch (e) {
      console.error("ticket fee true-up failed", (e as Error).message);
    }
  }
  return "paid";
}
