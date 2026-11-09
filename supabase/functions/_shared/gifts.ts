import type Stripe from "npm:stripe@17";
// deno-lint-ignore no-explicit-any
type Admin = any;

// Presentes da loja dos parceiros (migração 160). Quem oferece paga o
// preço do produto; o dinheiro vai para a conta Stripe do parceiro. A
// À Nossa! retém, como application fee, a comissão (gift_fee_percentage)
// mais uma reserva para a taxa da Stripe e, depois do pagamento, devolve ao
// parceiro o que sobrou da reserva: o parceiro paga a comissão e a taxa
// real da Stripe. O organizador não recebe dinheiro.

// Confirma a compra e acerta a taxa da Stripe. Idempotente.
export async function confirmGiftOrder(stripe: Stripe, admin: Admin, sessionId: string): Promise<"paid" | "open" | "unknown"> {
  const { data: o } = await admin
    .from("gift_orders")
    .select("id, status, platform_fee, stripe_fee")
    .eq("checkout_session_id", sessionId)
    .maybeSingle();
  if (!o) return "unknown";
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
  const { error } = await admin.rpc("confirm_gift_order", { p_session_id: sessionId, p_payment_intent_id: piId });
  if (error) throw new Error(`confirm_gift_order: ${error.message}`);

  if (o.stripe_fee == null && piId.startsWith("pi_")) {
    try {
      const pi = await stripe.paymentIntents.retrieve(piId, { expand: ["latest_charge.balance_transaction"] });
      const charge = pi.latest_charge as Stripe.Charge | null;
      const bt = charge?.balance_transaction as Stripe.BalanceTransaction | null;
      const feeId = typeof charge?.application_fee === "string" ? charge.application_fee : charge?.application_fee?.id;
      if (bt && feeId) {
        const stripeFeeCents = bt.fee;
        const platformCents = Math.round(Number(o.platform_fee) * 100);
        const fee = await stripe.applicationFees.retrieve(feeId);
        const excess = fee.amount - fee.amount_refunded - (platformCents + stripeFeeCents);
        if (excess > 0) {
          await stripe.applicationFees.createRefund(feeId, { amount: excess }, { idempotencyKey: `gift-fee-${o.id}` });
        }
        await admin.from("gift_orders").update({ stripe_fee: stripeFeeCents / 100 }).eq("id", o.id);
      }
    } catch (e) {
      console.error("gift fee true-up failed", (e as Error).message);
    }
  }
  return "paid";
}
