"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import type { ActionState } from "@/components/ActionButtons";

// Pendentes (migração 137): riscar / desfazer e acrescentar tarefas.
export async function toggleAdminTask(id: string, done: boolean): Promise<ActionState> {
  const { userId } = await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase
    .from("admin_tasks")
    .update({ done, done_at: done ? new Date().toISOString() : null, done_by: done ? userId : null })
    .eq("id", id);
  if (error) return { error: "Não foi possível guardar. Tenta outra vez." };
  revalidatePath("/pending");
  revalidatePath("/", "layout");
  return { error: null };
}

export async function addAdminTask(_prev: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();
  const title = String(formData.get("title") ?? "").trim();
  const detail = String(formData.get("detail") ?? "").trim();
  const area = String(formData.get("area") ?? "Outros").trim() || "Outros";
  if (title.length < 1 || title.length > 160) return { error: "O título tem de ter entre 1 e 160 caracteres." };
  const supabase = await createClient();
  const { error } = await supabase
    .from("admin_tasks")
    .insert({ title, detail: detail || null, area: area.slice(0, 60), owner: "tu", sort: 1000 });
  if (error) {
    return { error: error.code === "42P01" || error.message.includes("admin_tasks") ? "Falta aplicar a migração 137." : "Não foi possível acrescentar." };
  }
  revalidatePath("/pending");
  revalidatePath("/", "layout");
  return { error: null };
}
