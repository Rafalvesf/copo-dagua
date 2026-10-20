import { createClient } from "@/lib/supabase/server";

// Chamadas às Edge Functions de reembolso a partir do admin (2026-10-20).
// O JWT do admin vai no pedido (sessão do Supabase); as funções voltam a
// confirmar `is_admin()` — o admin-web nunca é a única barreira.

export type RefundResult = { ok: true; refundedCents: number } | { ok: false; error: string };

async function readError(error: unknown): Promise<string> {
  let code = "unknown_error";
  let message = "";
  if (error && typeof error === "object" && "context" in error && error.context instanceof Response) {
    try {
      const body = await error.context.clone().json();
      code = body.error ?? code;
      message = body.message ?? "";
    } catch {
      // resposta sem JSON
    }
  }
  switch (code) {
    case "forbidden":
      return "Não tens permissão para reembolsar.";
    case "invalid_state":
      return "Este pagamento já não está pago (pode já ter sido reembolsado).";
    case "not_stripe":
      return "Este pagamento não foi feito pela Stripe — reembolsa fora da app.";
    case "stripe_error":
      return `A Stripe recusou o reembolso${message ? `: ${message}` : "."}`;
    default:
      return "Não foi possível reembolsar. Tenta novamente.";
  }
}

/// Reembolso de um pagamento: total (`amount` vazio) ou parcial (euros do
/// que o casal pagou, comissão incluída).
export async function refundPaymentRequest(paymentId: string, amount: number | null, reason: string): Promise<RefundResult> {
  const supabase = await createClient();
  const { data, error } = await supabase.functions.invoke("admin-refund-payment", {
    body: { payment_id: paymentId, ...(amount != null ? { amount } : {}), reason },
  });
  if (error) return { ok: false, error: await readError(error) };
  return { ok: true, refundedCents: Number((data as { refunded_cents?: number })?.refunded_cents ?? 0) };
}

/// Corre a regra automática de uma reserva cancelada (mesma função que a app).
export async function runCancelledBookingRefund(bookingId: string): Promise<RefundResult> {
  const supabase = await createClient();
  const { data, error } = await supabase.functions.invoke("refund-cancelled-booking", {
    body: { booking_id: bookingId },
  });
  if (error) return { ok: false, error: await readError(error) };
  const d = data as { refunded?: string[]; failed?: string[]; manual?: string[]; skipped?: string };
  if (d?.skipped === "not_eligible") return { ok: false, error: "Esta reserva não tem direito a reembolso automático." };
  if ((d?.failed?.length ?? 0) > 0) return { ok: false, error: "A Stripe recusou parte do reembolso — vê os registos." };
  if ((d?.manual?.length ?? 0) > 0 && (d?.refunded?.length ?? 0) === 0) {
    return { ok: false, error: "Pagamentos feitos fora da Stripe — reembolsa à mão." };
  }
  return { ok: true, refundedCents: 0 };
}

