import type Stripe from "npm:stripe@17";
import { reserveCents } from "./tickets.ts";
// deno-lint-ignore no-explicit-any
type Admin = any;

// QR de pagamento no evento (migração 229, 2026-11-23): sem saldo; cobra-se
// na hora o cartão guardado de quem paga, por Stripe Connect para quem
// cobra. A comissão sai só de quem cobra ("Cobramos apenas ao Parceiro"):
// a application fee leva a % mais uma reserva para a taxa da Stripe, e o
// que sobra da reserva volta para quem cobra quando o pagamento fica pago.

export type PayRow = {
  id: string;
  wedding_id: string | null;
  payer_id: string | null;
  amount_cents: number;
  fee_pct: number;
  description: string | null;
  merchant_name: string;
  destination_account: string;
  idempotency_key: string;
  payment_intent_id: string | null;
  status: string;
  stripe_fee_cents: number | null;
};

export function payIntentParams(row: PayRow, customer: string, paymentMethod: string, offSession: boolean): Stripe.PaymentIntentCreateParams {
  const { applicationFeeCents } = reserveCents(row.amount_cents, Number(row.fee_pct), 0);
  return {
    amount: row.amount_cents,
    currency: "eur",
    customer,
    payment_method: paymentMethod,
    payment_method_types: ["card"],
    confirm: true,
    ...(offSession ? { off_session: true } : { use_stripe_sdk: true }),
    application_fee_amount: applicationFeeCents,
    transfer_data: { destination: row.destination_account },
    description: `${row.merchant_name}${row.description ? ` · ${row.description}` : ""}`.slice(0, 200),
    metadata: { kind: "event_pay", payment_id: row.id },
  };
}

/// Estado da Stripe → estado do movimento.
export function statusOf(pi: Stripe.PaymentIntent): string {
  switch (pi.status) {
    case "succeeded":
      return "succeeded";
    case "processing":
      return "processing";
    case "requires_action":
    case "requires_confirmation":
      return "requires_action";
    case "canceled":
      return "cancelled";
    default:
      return "failed"; // requires_payment_method: o banco recusou
  }
}

/// Atualiza o movimento a partir do PaymentIntent (idempotente) e, quando
/// fica pago, devolve a quem cobra o que sobrou da reserva para a taxa.
export async function syncPayment(stripe: Stripe, admin: Admin, piId: string): Promise<string | null> {
  const { data: row } = await admin.from("event_payments").select("*").eq("payment_intent_id", piId).maybeSingle();
  if (!row) return null;
  const pi = await stripe.paymentIntents.retrieve(piId, { expand: ["latest_charge.balance_transaction"] });
  const status = statusOf(pi);
  const failure = status === "failed" ? (pi.last_payment_error?.decline_code ?? pi.last_payment_error?.code ?? "declined") : null;
  if (row.status !== status && row.status !== "refunded") {
    await admin.from("event_payments").update({ status, failure, updated_at: new Date().toISOString() }).eq("id", row.id);
    if (status === "succeeded" || status === "failed") {
      await notifyPayer(admin, row as PayRow, status);
    }
  }
  if (status === "succeeded" && row.stripe_fee_cents == null) {
    try {
      const charge = pi.latest_charge as Stripe.Charge | null;
      const bt = charge?.balance_transaction as Stripe.BalanceTransaction | null;
      const feeId = typeof charge?.application_fee === "string" ? charge.application_fee : charge?.application_fee?.id;
      if (bt && feeId) {
        const { platformCents } = reserveCents(row.amount_cents, Number(row.fee_pct), 0);
        const fee = await stripe.applicationFees.retrieve(feeId);
        const excess = fee.amount - fee.amount_refunded - (platformCents + bt.fee);
        if (excess > 0) {
          await stripe.applicationFees.createRefund(feeId, { amount: excess }, { idempotencyKey: `event-pay-fee-${row.id}` });
        }
        await admin.from("event_payments").update({ stripe_fee_cents: bt.fee }).eq("id", row.id);
      }
    } catch (e) {
      console.error("event pay fee true-up failed", (e as Error).message);
    }
  }
  return status;
}

const euros = (c: number) => (c / 100).toFixed(2).replace(".", ",") + " €";

export async function notifyPayer(admin: Admin, row: PayRow, kind: "succeeded" | "failed" | "confirm"): Promise<void> {
  if (!row.payer_id) return;
  const title = kind === "succeeded"
    ? `Pagaste ${euros(row.amount_cents)} a ${row.merchant_name}`
    : kind === "failed"
    ? `Pagamento recusado (${euros(row.amount_cents)})`
    : `Confirma o pagamento de ${euros(row.amount_cents)}`;
  const body = kind === "confirm"
    ? `${row.merchant_name}${row.description ? ` · ${row.description}` : ""}. Abre a app para confirmar.`
    : row.description ?? row.merchant_name;
  const { error } = await admin.from("notifications").insert({
    profile_id: row.payer_id,
    type: "event_pay",
    title,
    body,
    link: row.wedding_id ? `/pagar-no-evento/${row.wedding_id}` : null,
  });
  if (error) console.error("event pay notify failed", error.message);
}
