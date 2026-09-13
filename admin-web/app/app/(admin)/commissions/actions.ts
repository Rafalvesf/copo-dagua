"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import type { ActionState } from "@/components/ActionButtons";

// Mesmo padrão de settings/actions.ts (escrita direta na tabela singleton,
// a policy de UPDATE de platform_settings — has_admin_permission('platform.manage'),
// só super_admin — já é o boundary real). Campos movidos para cá a
// pedido explícito do utilizador: "o sinal nunca pode ser editado pelo
// parceiro, mas pode ser ajustado pelo administrador no admin web na
// secção comissões" — deposit_percentage/cancellation_penalty_days
// nasceram em 062_deposit_and_cancellation_rules.sql;
// platform_commission_percentage já existia em Definições, mudou-se
// para aqui por ser a mesma família de regra (quem fica com quanto do
// dinheiro), não por termos alterado a coluna em si.
export async function updateCommissionSettings(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const { userId } = await requireAdmin();
  const supabase = await createClient();

  const commission = Number(formData.get("platform_commission_percentage"));
  const depositPct = Number(formData.get("deposit_percentage"));
  const penaltyDays = Number(formData.get("cancellation_penalty_days"));

  if (
    !Number.isFinite(commission) || commission < 0 || commission > 100 ||
    !Number.isFinite(depositPct) || depositPct <= 0 || depositPct > 100 ||
    !Number.isFinite(penaltyDays) || penaltyDays < 0
  ) {
    return { error: "Valores inválidos — confirma os números introduzidos." };
  }

  const { error } = await supabase
    .from("platform_settings")
    .update({
      platform_commission_percentage: commission,
      deposit_percentage: depositPct,
      cancellation_penalty_days: penaltyDays,
      updated_at: new Date().toISOString(),
      updated_by: userId,
    })
    .eq("id", 1);

  if (error) {
    return { error: "Não tens permissão para alterar as comissões da plataforma." };
  }

  revalidatePath("/commissions");
  return { error: null };
}
