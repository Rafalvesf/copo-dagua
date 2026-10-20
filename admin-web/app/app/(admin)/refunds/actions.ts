"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { refundPaymentRequest, runCancelledBookingRefund } from "@/lib/refunds";
import type { ActionState } from "@/components/ActionButtons";

function refresh(bookingId?: string) {
  revalidatePath("/refunds");
  revalidatePath("/payments");
  revalidatePath("/disputes");
  if (bookingId) revalidatePath(`/bookings/${bookingId}`);
}

function parseAmount(raw: FormDataEntryValue | null): number | null {
  const s = String(raw ?? "").trim().replace(",", ".");
  if (!s) return null;
  const n = Number(s);
  return Number.isFinite(n) && n > 0 ? Math.round(n * 100) / 100 : NaN;
}

// Reembolso manual de um pagamento (total ou parcial).
export async function refundPayment(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();
  const paymentId = String(formData.get("payment_id") ?? "");
  const amount = parseAmount(formData.get("amount"));
  const reason = String(formData.get("reason") ?? "").trim();
  if (!paymentId) return { error: "Pagamento em falta." };
  if (Number.isNaN(amount)) return { error: "Valor inválido." };
  if (reason.length < 5) return { error: "Indica o motivo (mín. 5 caracteres)." };

  const r = await refundPaymentRequest(paymentId, amount, reason);
  if (!r.ok) return { error: r.error };

  const supabase = await createClient();
  const { data } = await supabase.from("payments").select("booking_id").eq("id", paymentId).maybeSingle();
  refresh(data?.booking_id as string | undefined);
  return { error: null };
}

// Corre a regra automática numa reserva cancelada (se falhou na app).
export async function runBookingRefund(bookingId: string): Promise<ActionState> {
  await requireAdmin();
  const r = await runCancelledBookingRefund(bookingId);
  if (!r.ok) return { error: r.error };
  refresh(bookingId);
  return { error: null };
}

// Fecha uma disputa: faz o reembolso decidido na Stripe e depois regista a
// decisão. Se a Stripe recusar, a disputa fica aberta.
export async function resolveDispute(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();
  const disputeId = String(formData.get("dispute_id") ?? "");
  const resolution = String(formData.get("resolution") ?? "");
  const note = String(formData.get("note") ?? "").trim();
  const amount = parseAmount(formData.get("amount"));
  if (!["refund_full", "refund_partial", "partner_favor"].includes(resolution)) {
    return { error: "Escolhe uma decisão." };
  }
  if (note.length < 10) return { error: "Explica a decisão (mín. 10 caracteres)." };
  if (resolution === "refund_partial" && (amount == null || Number.isNaN(amount))) {
    return { error: "Indica o valor a devolver." };
  }

  const supabase = await createClient();
  const { data: dispute } = await supabase
    .from("disputes")
    .select("id, booking_id, status")
    .eq("id", disputeId)
    .maybeSingle();
  if (!dispute) return { error: "Esta disputa já não existe." };
  if (dispute.status !== "open") return { error: "Esta disputa já foi decidida." };

  let refundedTotal = 0;
  if (resolution !== "partner_favor") {
    const { data: pays } = await supabase
      .from("payments")
      .select("id, amount, refunded_amount, paid_at")
      .eq("booking_id", dispute.booking_id)
      .eq("status", "paid")
      .order("paid_at", { ascending: false });
    if (!pays || pays.length === 0) return { error: "Não há pagamentos por reembolsar nesta reserva." };

    let left = resolution === "refund_partial" ? Math.round((amount as number) * 100) : Infinity;
    for (const p of pays) {
      if (left <= 0) break;
      const r = await refundPaymentRequest(
        p.id as string,
        left === Infinity ? null : left / 100,
        `Disputa: ${note.slice(0, 150)}`,
      );
      if (!r.ok) {
        refresh(dispute.booking_id as string);
        return {
          error: `${r.error}${refundedTotal > 0 ? ` (já foram devolvidos ${(refundedTotal / 100).toFixed(2)} € — a disputa continua aberta)` : ""}`,
        };
      }
      refundedTotal += r.refundedCents;
      if (left !== Infinity) left -= r.refundedCents;
    }
  }

  const { error } = await supabase.rpc("admin_resolve_dispute", {
    p_dispute_id: disputeId,
    p_resolution: resolution,
    p_refund_amount: resolution === "partner_favor" ? null : refundedTotal / 100,
    p_note: note,
  });
  if (error) {
    refresh(dispute.booking_id as string);
    return {
      error:
        error.code === "P0001"
          ? "Esta disputa já foi decidida por outro administrador."
          : "Reembolso feito, mas não foi possível fechar a disputa. Tenta novamente.",
    };
  }
  refresh(dispute.booking_id as string);
  revalidatePath(`/disputes/${disputeId}`);
  return { error: null };
}
