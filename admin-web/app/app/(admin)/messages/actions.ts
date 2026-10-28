"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";

export type SendState = { error: string | null; sent: number | null };

// Mensagem da equipa (migração 133): vira notificação na app e no
// telemóvel de cada destinatário. RPC com `is_admin()` no servidor.
export async function sendAdminMessage(_prev: SendState, formData: FormData): Promise<SendState> {
  await requireAdmin();
  const audience = String(formData.get("audience") ?? "user");
  const recipient = String(formData.get("recipient") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const link = String(formData.get("link") ?? "").trim();

  if (!["user", "all", "couple", "partner", "guest"].includes(audience)) return { error: "Destinatário inválido.", sent: null };
  if (audience === "user" && !recipient) return { error: "Escolhe a pessoa.", sent: null };
  if (title.length < 1 || title.length > 120) return { error: "O título tem de ter entre 1 e 120 caracteres.", sent: null };
  if (body.length < 1 || body.length > 1000) return { error: "A mensagem tem de ter entre 1 e 1000 caracteres.", sent: null };

  const supabase = await createClient();
  const { data, error } = await supabase.rpc("admin_send_message", {
    p_audience: audience,
    p_title: title,
    p_body: body,
    p_recipient: audience === "user" ? recipient : null,
    p_link: link || null,
  });
  if (error) {
    return {
      error: error.message.includes("admin_send_message") || error.code === "PGRST202"
        ? "Falta aplicar a migração 133."
        : "Não foi possível enviar a mensagem.",
      sent: null,
    };
  }
  revalidatePath("/messages");
  return { error: null, sent: Number(data ?? 0) };
}
