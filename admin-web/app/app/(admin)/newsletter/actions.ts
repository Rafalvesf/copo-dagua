"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { nlCleanBlocks, type NlBlock } from "@/lib/newsletter-email";

// Pré-registos (migração 196, 2026-11-16): guardar o modelo de cada tipo e
// enviar pela Edge Function `send-newsletter` (Resend). A função volta a
// confirmar `is_admin()`.

export type NlResult =
  { ok: true; message: string } | { ok: false; error: string };

type Kind = "organizador" | "parceiro";

export async function saveNewsletterDesign(input: {
  id?: string | null;
  kind: Kind;
  name: string;
  subject: string;
  blocks: NlBlock[];
}): Promise<NlResult & { id?: string }> {
  const { userId } = await requireAdmin();
  const supabase = await createClient();
  const row = {
    kind: input.kind === "parceiro" ? "parceiro" : "organizador",
    name: input.name.trim().slice(0, 80) || "Sem nome",
    subject: input.subject.slice(0, 200),
    blocks: nlCleanBlocks(input.blocks),
    updated_at: new Date().toISOString(),
    updated_by: userId,
  };
  const q = input.id
    ? supabase
        .from("newsletter_designs")
        .update(row)
        .eq("id", input.id)
        .select("id")
        .single()
    : supabase.from("newsletter_designs").insert(row).select("id").single();
  const { data, error } = await q;
  if (error) {
    return {
      ok: false,
      error: error.message.includes("newsletter_designs")
        ? "Falta aplicar a migração 196."
        : "Não foi possível guardar.",
    };
  }
  revalidatePath("/newsletter");
  return {
    ok: true,
    message: "Modelo guardado.",
    id: (data as { id: string }).id,
  };
}

export async function deleteNewsletterDesign(id: string): Promise<NlResult> {
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase
    .from("newsletter_designs")
    .delete()
    .eq("id", id);
  if (error) return { ok: false, error: "Não foi possível apagar." };
  revalidatePath("/newsletter");
  return { ok: true, message: "Modelo apagado." };
}

export async function sendNewsletter(input: {
  kind: Kind;
  subject: string;
  blocks: NlBlock[];
  emails?: string[];
  test?: boolean;
  previewEmail?: string;
}): Promise<NlResult> {
  await requireAdmin();
  const supabase = await createClient();
  const { data, error } = await supabase.functions.invoke("send-newsletter", {
    body: {
      kind: input.kind,
      subject: input.subject,
      blocks: input.blocks,
      ...(input.emails ? { emails: input.emails } : {}),
      ...(input.test ? { test: true, preview_email: input.previewEmail } : {}),
    },
  });
  if (error) {
    let code = "";
    let message = "";
    if (
      error &&
      typeof error === "object" &&
      "context" in error &&
      error.context instanceof Response
    ) {
      try {
        const b = await error.context.clone().json();
        code = b.error ?? "";
        message = b.message ?? "";
      } catch {
        // sem JSON
      }
    }
    const text: Record<string, string> = {
      no_key:
        "Falta a chave do Resend: põe RESEND_API_KEY nos segredos das Edge Functions do Supabase.",
      resend_error: `O Resend recusou o envio${message ? `: ${message}` : "."}`,
      forbidden: "Não tens permissão para enviar.",
      empty: "Escreve o assunto e pelo menos um bloco.",
      no_admin_email:
        "A tua conta de admin não tem email para receber o teste.",
    };
    return {
      ok: false,
      error: text[code] ?? "Não foi possível enviar. Tenta novamente.",
    };
  }
  const d = data as { sent?: number; remaining?: number; to?: string };
  revalidatePath("/newsletter");
  if (input.test)
    return {
      ok: true,
      message: `Teste enviado para ${d.to ?? "o teu email"}.`,
    };
  const sent = d.sent ?? 0;
  const rest = d.remaining ?? 0;
  if (sent === 0) return { ok: true, message: "Não havia ninguém por enviar." };
  return {
    ok: true,
    message: `${sent} ${sent === 1 ? "email enviado" : "emails enviados"}.${rest ? ` Faltam ${rest} (máximo de 100 por envio; o plano grátis do Resend dá 100 por dia).` : ""}`,
  };
}
