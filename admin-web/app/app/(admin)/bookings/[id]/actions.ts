"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import type { ActionState } from "@/components/ActionButtons";

// Both wrap the payment stub documented in backend/bookings/api.md —
// neither confirms a real payment. See admin-web/bookings/README.md.
async function invoke(fn: string, bookingId: string, args: Record<string, unknown> = {}): Promise<ActionState> {
  await requireAdmin();
  const supabase = await createClient();

  const { error } = await supabase.rpc(fn, { p_booking_id: bookingId, ...args });

  if (error) {
    return { error: mapError(error.code) };
  }

  revalidatePath("/bookings");
  revalidatePath(`/bookings/${bookingId}`);
  return { error: null };
}

function mapError(code: string | undefined): string {
  switch (code) {
    case "P0001":
      return "Esta reserva já foi decidida por outro administrador.";
    case "42501":
      return "Não tens permissão para esta ação.";
    case "P0002":
      return "Esta reserva já não existe.";
    case "P0004":
      return "O valor introduzido não corresponde ao sinal esperado. Confirma a referência e tenta novamente.";
    default:
      return "Não foi possível completar a ação. Tenta novamente.";
  }
}

// Cross-referencia automaticamente amount_received com o sinal esperado
// (admin_confirm_deposit em database/migrations/010_deposit_cross_reference.sql)
// — só avança se coincidir. Ver components/ActionButtons.tsx, AmountVerificationForm.
export async function confirmDeposit(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const bookingId = String(formData.get("booking_id") ?? "");
  const amountRaw = String(formData.get("amount_received") ?? "");
  const amount = Number(amountRaw);

  if (!amountRaw || Number.isNaN(amount)) {
    return { error: "Introduz um valor válido." };
  }

  return invoke("admin_confirm_deposit", bookingId, { p_amount_received: amount });
}

export async function completeBooking(bookingId: string) {
  return invoke("admin_complete_booking", bookingId);
}
