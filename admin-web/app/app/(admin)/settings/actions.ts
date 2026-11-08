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
      guest_offers_enabled: formData.get("guest_offers_enabled") === "on",
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

// Fundadores, convites dos parceiros e Pro (migrações 151 e 161).
export async function updateGrowthSettings(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const { userId } = await requireAdmin();
  const supabase = await createClient();
  const n = (k: string) => Number(formData.get(k));
  const ints = ["founder_slots", "founder_free_months", "founder_featured_slots", "founder_featured_months", "referral_free_every", "free_shop_products", "pro_referral_free_every"];
  for (const k of ints) {
    if (!Number.isInteger(n(k)) || n(k) < 0) return { error: "Valores inválidos — confirma os números introduzidos." };
  }
  if (n("pro_referral_free_every") < 1) return { error: "“Premium: a cada N clientes” tem de ser pelo menos 1." };
  if (n("pro_fee_discount") > 10) return { error: "O desconto do Premium não pode passar de 10%." };
  if (n("referral_free_every") < 1) return { error: "“A cada N clientes” tem de ser pelo menos 1." };
  for (const k of ["referral_min_booking", "pro_price_monthly", "pro_price_yearly", "gift_fee_percentage", "pro_fee_discount", "pro_promotion_extra_pct"]) {
    if (!Number.isFinite(n(k)) || n(k) < 0) return { error: "Valores inválidos — confirma os números introduzidos." };
  }
  if (n("pro_price_monthly") < 1 || n("pro_price_yearly") < 1) return { error: "Os preços do Premium têm de ser pelo menos 1 €." };
  if (n("gift_fee_percentage") > 30) return { error: "A comissão da loja não pode passar de 30%." };

  const { error } = await supabase
    .from("platform_settings")
    .update({
      founder_slots: n("founder_slots"),
      founder_free_months: n("founder_free_months"),
      founder_featured_slots: n("founder_featured_slots"),
      founder_featured_months: n("founder_featured_months"),
      referral_zero_fee: formData.get("referral_zero_fee") === "on",
      referral_free_every: n("referral_free_every"),
      referral_min_booking: n("referral_min_booking"),
      pro_enabled: formData.get("pro_enabled") === "on",
      pro_price_monthly: n("pro_price_monthly"),
      pro_price_yearly: n("pro_price_yearly"),
      free_shop_products: n("free_shop_products"),
      gift_fee_percentage: n("gift_fee_percentage"),
      pro_fee_discount: n("pro_fee_discount"),
      pro_referral_free_every: n("pro_referral_free_every"),
      pro_promotion_extra_pct: n("pro_promotion_extra_pct"),
      updated_at: new Date().toISOString(),
      updated_by: userId,
    })
    .eq("id", 1);
  if (error) {
    return { error: error.code === "42703" ? "Falta correr as migrações 160 e 161 (página Migrações)." : "Não tens permissão para alterar as definições da plataforma." };
  }
  revalidatePath("/settings");
  return { error: null };
}
