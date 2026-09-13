"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";

export type CategoryActionState = { error: string | null };

const COMBINING_DIACRITICS = new RegExp("[̀-ͯ]", "g");

function slugify(label: string): string {
  return label
    .normalize("NFD")
    .replace(COMBINING_DIACRITICS, "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

export async function createCategory(
  _prevState: CategoryActionState,
  formData: FormData,
): Promise<CategoryActionState> {
  await requireAdmin();

  const labelPt = String(formData.get("label_pt") ?? "").trim();
  const slugInput = String(formData.get("slug") ?? "").trim();
  const slug = slugInput || slugify(labelPt);

  if (!labelPt) {
    return { error: "O nome da categoria é obrigatório." };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("partner_categories").insert({ slug, label_pt: labelPt });

  if (error) {
    if (error.code === "23505") {
      return { error: "Já existe uma categoria com este identificador." };
    }
    return { error: "Não foi possível criar a categoria." };
  }

  revalidatePath("/categories");
  return { error: null };
}

export async function toggleCategory(categoryId: string, isActive: boolean) {
  await requireAdmin();
  const supabase = await createClient();

  const { error } = await supabase
    .from("partner_categories")
    .update({ is_active: !isActive })
    .eq("id", categoryId);

  if (!error) {
    revalidatePath("/categories");
  }
}

export type DeleteCategoryState = { error: string | null };

/**
 * Pedido explícito do utilizador: "dá-me a capacidade de apagar a
 * categoria, no crm, se não tiver nenhum parceiro ainda" — inverte
 * RN01 (`admin-web/categories/requirements.md`, "categorias nunca são
 * eliminadas"). A proteção real é a FK sem `on delete cascade` em
 * `partner_profile_categories.category_id`
 * (`005_partner_profile.sql`) — o próprio Postgres recusa o DELETE
 * com `23503` enquanto existir pelo menos um parceiro nessa
 * categoria; aqui só mapeamos esse erro para uma mensagem legível.
 */
export async function deleteCategory(categoryId: string): Promise<DeleteCategoryState> {
  await requireAdmin();
  const supabase = await createClient();

  const { error } = await supabase.from("partner_categories").delete().eq("id", categoryId);

  if (error) {
    if (error.code === "23503") {
      return { error: "Esta categoria ainda tem parceiros associados e não pode ser eliminada." };
    }
    return { error: "Não foi possível eliminar a categoria." };
  }

  revalidatePath("/categories");
  return { error: null };
}
