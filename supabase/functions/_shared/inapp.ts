import type Stripe from "npm:stripe@17";

// Pagamento dentro da app para bilhetes, prendas e Premium (2026-11-09:
// "sempre embutido na app, nunca com link"). O mesmo formato que
// `create-payment-intent` devolve às reservas, para o ecrã de pagamento da
// app (cartão, Apple Pay, Google Pay, MB WAY, Multibanco) servir a todos.

export const METHODS: Record<string, string> = {
  all: "all",
  card: "card",
  wallet: "card",
  mb_way: "mb_way",
  multibanco: "multibanco",
};

export function e164(raw: string): string | null {
  let d = raw.replace(/[^\d+]/g, "");
  if (d.startsWith("00")) d = "+" + d.slice(2);
  if (!d.startsWith("+")) d = "+351" + d;
  return /^\+\d{9,15}$/.test(d) ? d : null;
}

export type InAppOpts = {
  method: string;
  phone?: string | null;
  email?: string | null;
  amountCents: number;
  description: string;
  metadata: Record<string, string>;
  applicationFeeCents?: number;
  destination?: string | null;
  /// Cartão já criado na app (migração 181).
  paymentMethod?: string | null;
};

export async function createInAppIntent(stripe: Stripe, o: InAppOpts): Promise<Stripe.PaymentIntent> {
  const m = METHODS[o.method] ?? "card";
  return await stripe.paymentIntents.create({
    amount: o.amountCents,
    currency: "eur",
    ...(o.paymentMethod ? { payment_method: o.paymentMethod } : {}),
    ...(m === "all"
      ? { automatic_payment_methods: { enabled: true, allow_redirects: "never" as const } }
      : { payment_method_types: [m] }),
    ...(m === "mb_way"
      ? { payment_method_data: { type: "mb_way" as never, billing_details: { phone: o.phone! } }, confirm: true }
      : m === "multibanco"
      ? { payment_method_data: { type: "multibanco", billing_details: { email: o.email ?? undefined } }, confirm: true }
      : {}),
    ...(o.applicationFeeCents != null && o.destination
      ? { application_fee_amount: o.applicationFeeCents, transfer_data: { destination: o.destination } }
      : {}),
    description: o.description,
    receipt_email: o.email ?? undefined,
    metadata: o.metadata,
  }, m === "mb_way" ? { apiVersion: "2025-09-30.clover" as never } : undefined);
}

export function intentJson(intent: Stripe.PaymentIntent, publishableKey: string, email: string | null, extra: Record<string, unknown> = {}) {
  // deno-lint-ignore no-explicit-any
  const mb = (intent.next_action as any)?.multibanco_display_details;
  return {
    client_secret: intent.client_secret,
    publishable_key: publishableKey,
    payment_intent_id: intent.id,
    amount_cents: intent.amount,
    email,
    status: intent.status,
    ...(mb ? { multibanco: { entity: mb.entity, reference: mb.reference, expires_at: mb.expires_at } } : {}),
    ...extra,
  };
}

/// Estado de um PaymentIntent no formato do ecrã de pagamento.
export async function intentState(stripe: Stripe, piId: string): Promise<Record<string, unknown>> {
  const pi = await stripe.paymentIntents.retrieve(piId);
  if (pi.status === "succeeded" || pi.status === "requires_capture") return { state: "paid" };
  if (pi.status === "processing") return { state: "processing" };
  // deno-lint-ignore no-explicit-any
  const mb = (pi.next_action as any)?.multibanco_display_details;
  if (pi.status === "requires_action" && mb) {
    return { state: "awaiting_multibanco", entity: mb.entity, reference: mb.reference, expires_at: mb.expires_at, amount_cents: pi.amount };
  }
  return { state: "open" };
}

/// Anula uma tentativa anterior que ainda não foi paga.
export async function cancelOpenIntent(stripe: Stripe, piId: string | null | undefined): Promise<"paid" | "busy" | "ok"> {
  if (!piId || !piId.startsWith("pi_")) return "ok";
  try {
    const pi = await stripe.paymentIntents.retrieve(piId);
    if (pi.status === "succeeded" || pi.status === "requires_capture") return "paid";
    if (pi.status === "processing") return "busy";
    if (pi.status !== "canceled") await stripe.paymentIntents.cancel(pi.id);
  } catch (_) { /* já não existe */ }
  return "ok";
}
