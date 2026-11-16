"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";

// Pré-registos (migração 196, 2026-11-16): guardar o modelo de cada tipo e
// enviar pela Edge Function `send-newsletter` (Resend). A função volta a
// confirmar `is_admin()`.

export type NlResult =
  { ok: true; message: string } | { ok: false; error: string };

type Kind = "organizador" | "parceiro";

export async function saveNewsletterTemplate(input: {
  kind: Kind;
  subject: string;
  body: string;
  buttonLabel: string;
  buttonUrl: string;
}): Promise<NlResult> {
  const { userId } = await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase.from("newsletter_templates").upsert({
    kind: input.kind === "parceiro" ? "parceiro" : "organizador",
    subject: input.subject.slice(0, 200),
    body: input.body.slice(0, 10000),
    button_label: input.buttonLabel.trim().slice(0, 60) || null,
    button_url: input.buttonUrl.trim().slice(0, 500) || null,
    updated_at: new Date().toISOString(),
    updated_by: userId,
  });
  if (error) {
    return {
      ok: false,
      error: error.message.includes("newsletter_templates")
        ? "Falta aplicar a migração 196."
        : "Não foi possível guardar.",
    };
  }
  revalidatePath("/newsletter");
  return { ok: true, message: "Modelo guardado." };
}

export async function sendNewsletter(input: {
  kind: Kind;
  subject: string;
  body: string;
  buttonLabel: string;
  buttonUrl: string;
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
      body: input.body,
      button_label: input.buttonLabel,
      button_url: input.buttonUrl,
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
      empty: "Escreve o assunto e a mensagem.",
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
