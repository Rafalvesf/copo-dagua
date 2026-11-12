"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";

export type WordState = { error: string | null };

// Palavras bloqueadas (migração 186): asneiras e ofensas que a app não
// deixa pôr no nome/tipo do evento, no perfil nem nas mensagens.
export async function addBlockedWord(_prev: WordState, formData: FormData): Promise<WordState> {
  await requireAdmin();
  const word = String(formData.get("word") ?? "").trim().toLowerCase();
  if (!word || /\s/.test(word)) return { error: "Escreve uma só palavra, sem espaços." };
  const supabase = await createClient();
  const { error } = await supabase.from("blocked_words").insert({ word });
  if (error) {
    if (error.code === "23505") return { error: "Essa palavra já está na lista." };
    return { error: "Não foi possível adicionar. A migração 186 já correu?" };
  }
  revalidatePath("/blocked-words");
  return { error: null };
}

export async function removeBlockedWord(word: string): Promise<WordState> {
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase.from("blocked_words").delete().eq("word", word);
  if (error) return { error: "Não foi possível apagar." };
  revalidatePath("/blocked-words");
  return { error: null };
}
