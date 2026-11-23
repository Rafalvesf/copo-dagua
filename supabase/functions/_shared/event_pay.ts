import type Stripe from "npm:stripe@17";
import { reserveCents } from "./tickets.ts";
// deno-lint-ignore no-explicit-any
type Admin = any;

// Pagar com QR no balcão (migração 229, 2026-11-23). O parceiro mostra um
// pedido de pagamento em QR; quem paga lê-o e paga na hora (cartão, Apple
// Pay ou Google Pay), por Stripe Connect para o parceiro. Sem taxa para quem
// paga ("cobramos apenas ao parceiro"): a application fee leva a % mais uma
// reserva para a taxa da Stripe, e o que sobra volta ao parceiro.

/// Atualiza o pedido a partir do PaymentIntent (idempotente) e acerta a taxa.
export async function syncPayment(stripe: Stripe, admin: Admin, piId: string): Promise<string | null> {
  const { data: row } = await admin.from("pay_requests").select("*").eq("payment_intent_id", piId).maybeSingle();
  if (!row) return null;
  const pi = await stripe.paymentIntents.retrieve(piId, { expand: ["latest_charge.balance_transaction"] });
  if (pi.status !== "succeeded") return pi.status;
  if (row.status !== "paid") {
    await admin.from("pay_requests").update({ status: "paid", paid_at: new Date().toISOString() }).eq("id", row.id);
  }
  if (row.stripe_fee_cents == null) {
    try {
      const charge = pi.latest_charge as Stripe.Charge | null;
      const bt = charge?.balance_transaction as Stripe.BalanceTransaction | null;
      const feeId = typeof charge?.application_fee === "string" ? charge.application_fee : charge?.application_fee?.id;
      if (bt && feeId) {
        const { platformCents } = reserveCents(row.amount_cents, Number(row.fee_pct), 0);
        const fee = await stripe.applicationFees.retrieve(feeId);
        const excess = fee.amount - fee.amount_refunded - (platformCents + bt.fee);
        if (excess > 0) {
          await stripe.applicationFees.createRefund(feeId, { amount: excess }, { idempotencyKey: `pay-request-fee-${row.id}` });
        }
        await admin.from("pay_requests").update({ stripe_fee_cents: bt.fee }).eq("id", row.id);
      }
    } catch (e) {
      console.error("pay request fee true-up failed", (e as Error).message);
    }
  }
  return "succeeded";
}
