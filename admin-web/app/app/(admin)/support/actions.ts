"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import type { ActionState } from "@/components/ActionButtons";

const MIN_NOTE_LENGTH = 5;

// RPC (não update direto) — `resolve_support_ticket()`
// (047_support_tickets.sql) restringe a `has_admin_permission('support.manage')`
// e grava `resolved_at`/`resolved_by` no mesmo passo, nunca deixado ao
// cliente construir esses campos.
export async function resolveSupportTicket(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  await requireAdmin();

  const ticketId = String(formData.get("ticket_id") ?? "");
  const note = String(formData.get("resolution_note") ?? "").trim();
  if (note.length < MIN_NOTE_LENGTH) {
    return { error: `A resposta deve ter pelo menos ${MIN_NOTE_LENGTH} caracteres.` };
  }

  const supabase = await createClient();
  const { error } = await supabase.rpc("resolve_support_ticket", {
    p_ticket_id: ticketId,
    p_resolution_note: note,
  });

  if (error) {
    return { error: "Não foi possível resolver o pedido." };
  }

  revalidatePath("/support");
  return { error: null };
}
