"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createAdminClient } from "@/lib/supabase/admin";
import { MIGRATIONS } from "@/lib/pending-migrations";

// X numa migração (pedido 2026-11-12): "não a vou fazer". Fica registada
// como dispensada (skip-NNN em applied_migrations) e sai da lista.
export async function dismissMigration(file: string): Promise<{ error: string | null }> {
  await requireAdmin();
  if (!MIGRATIONS.some((m) => m.file === file)) return { error: "Migração desconhecida." };
  const id = `skip-${file.slice(0, 3)}`;
  const { error } = await createAdminClient().from("applied_migrations").upsert({ id }, { onConflict: "id" });
  if (error) return { error: "Não foi possível tirar da lista." };
  revalidatePath("/migrations");
  revalidatePath("/", "layout");
  return { error: null };
}
