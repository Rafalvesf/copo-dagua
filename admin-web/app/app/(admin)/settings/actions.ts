"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import type { ActionState } from "@/components/ActionButtons";

// Escrita direta na tabela em vez de Edge Function (ao contrário de
// admin-web/partners/[id]/actions.ts) — não há nenhuma transição de
// estado com regras a validar aqui, só um UPDATE simples numa linha
// singleton; a policy de UPDATE de `platform_settings`
// (has_admin_permission('platform.manage'), 019_platform_settings.sql) já
// é o boundary real. requireAdmin() aqui é só para falhar cedo com um
// redirect claro.
export async function updatePlatformSettings(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const { userId } = await requireAdmin();
  const supabase = await createClient();

  const minDays = Number(formData.get("booking_min_days_before_event"));
  const holdHours = Number(formData.get("default_booking_hold_hours"));
  const graceDays = Number(formData.get("payment_grace_period_days"));

  if (
    !Number.isFinite(minDays) || minDays < 0 ||
    !Number.isFinite(holdHours) || holdHours <= 0 ||
    !Number.isFinite(graceDays) || graceDays < 0
  ) {
    return { error: "Valores inválidos — confirma os números introduzidos." };
  }

  const { error } = await supabase
    .from("platform_settings")
    .update({
      booking_min_days_before_event: minDays,
      default_booking_hold_hours: holdHours,
      payment_grace_period_days: graceDays,
      manual_partner_approval: formData.get("manual_partner_approval") === "on",
      review_requires_completed_booking: formData.get("review_requires_completed_booking") === "on",
      updated_at: new Date().toISOString(),
      updated_by: userId,
    })
    .eq("id", 1);

  if (error) {
    // A policy de UPDATE só deixa super_admin passar — um admin comum
    // que chegue aqui (ex: link direto) recebe um erro RLS genérico.
    return { error: "Não tens permissão para alterar as definições da plataforma." };
  }

  revalidatePath("/settings");
  return { error: null };
}
