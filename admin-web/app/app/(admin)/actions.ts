"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import type { ActionState } from "@/components/ActionButtons";

// Mesmo padrão de admin-web/settings/actions.ts (escrita direta, a
// policy de UPDATE de platform_settings — has_admin_permission
// ('platform.manage'), 019_platform_settings.sql — já é o boundary
// real). Vive à parte de updatePlatformSettings() porque este
// interruptor fica no dashboard (pedido explícito do utilizador: "add
// a maintenance switch... in the dashboard"), não na página de
// Definições, e é acionado imediatamente ao clicar, não por um
// formulário com vários campos.
export async function setMaintenanceMode(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const { userId } = await requireAdmin();
  const supabase = await createClient();

  const { error } = await supabase
    .from("platform_settings")
    .update({
      maintenance_mode_couple: formData.get("maintenance_mode_couple") === "on",
      maintenance_mode_partner: formData.get("maintenance_mode_partner") === "on",
      updated_at: new Date().toISOString(),
      updated_by: userId,
    })
    .eq("id", 1);

  if (error) {
    return { error: "Não tens permissão para alterar o modo de manutenção." };
  }

  revalidatePath("/");
  return { error: null };
}
