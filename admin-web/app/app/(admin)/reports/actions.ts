"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";

// Denúncias de conteúdo (migração 130). `remove` esconde/apaga o conteúdo
// e fecha todas as denúncias dele; `dismiss` arquiva só esta.
export async function resolveReport(reportId: string, action: "remove" | "dismiss") {
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase.rpc("admin_resolve_report", { p_report: reportId, p_action: action });
  if (!error) revalidatePath("/reports");
  return { ok: !error };
}
