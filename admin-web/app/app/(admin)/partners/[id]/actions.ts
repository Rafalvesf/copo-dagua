"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";

export type ActionState = { error: string | null };

const MIN_REASON_LENGTH = 10;

// Thin wrappers around the four Edge Functions contracted in
// admin-web/partners/api.md. Authorization is checked twice on purpose:
// requireAdmin() here (so the Action fails fast with a clear redirect for a
// non-admin who somehow reaches this code path) and again inside the Edge
// Function itself (the actual boundary — see api.md, "Autorização em duas
// camadas"). Neither call trusts the other.
async function invoke(
  functionName: string,
  body: Record<string, unknown>,
): Promise<ActionState> {
  await requireAdmin();
  const supabase = await createClient();

  const { error } = await supabase.functions.invoke(functionName, { body });

  if (error) {
    return { error: await mapError(error) };
  }

  revalidatePath("/partners");
  revalidatePath(`/partners/${body.partner_id}`);
  return { error: null };
}

// supabase-js doesn't surface a non-2xx Edge Function response body on
// `error.message` — it has to be read from `error.context` (the raw
// Response). See supabase/functions/_shared/partner-transition.ts for the
// { error: "invalid_state" | "forbidden" | ... } shape being parsed here.
async function mapError(error: unknown): Promise<string> {
  let code = "unknown_error";
  if (
    error &&
    typeof error === "object" &&
    "context" in error &&
    error.context instanceof Response
  ) {
    try {
      const body = await error.context.clone().json();
      code = body.error ?? code;
    } catch {
      // Response body wasn't JSON (e.g. network failure) — fall through.
    }
  }

  switch (code) {
    case "invalid_state":
      return "Este perfil já foi decidido por outro administrador. A recarregar...";
    case "validation_error":
      return `O motivo deve ter pelo menos ${MIN_REASON_LENGTH} caracteres.`;
    case "forbidden":
      return "Não tens permissão para esta ação.";
    case "not_found":
      return "Este parceiro já não existe.";
    default:
      return "Não foi possível completar a ação. Tenta novamente.";
  }
}

export async function approvePartner(partnerId: string) {
  return invoke("approve-partner-profile", { partner_id: partnerId });
}

export async function restorePartner(partnerId: string) {
  return invoke("restore-partner-profile", { partner_id: partnerId });
}

export async function rejectPartner(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const partnerId = String(formData.get("partner_id") ?? "");
  const reason = String(formData.get("reason") ?? "").trim();
  if (reason.length < MIN_REASON_LENGTH) {
    return { error: `O motivo deve ter pelo menos ${MIN_REASON_LENGTH} caracteres.` };
  }
  return invoke("reject-partner-profile", { partner_id: partnerId, reason });
}

export async function suspendPartner(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const partnerId = String(formData.get("partner_id") ?? "");
  const reason = String(formData.get("reason") ?? "").trim();
  if (reason.length < MIN_REASON_LENGTH) {
    return { error: `O motivo deve ter pelo menos ${MIN_REASON_LENGTH} caracteres.` };
  }
  return invoke("suspend-partner-profile", { partner_id: partnerId, reason });
}

export async function requestChangesFromPartner(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const partnerId = String(formData.get("partner_id") ?? "");
  const reason = String(formData.get("reason") ?? "").trim();
  if (reason.length < MIN_REASON_LENGTH) {
    return { error: `O motivo deve ter pelo menos ${MIN_REASON_LENGTH} caracteres.` };
  }
  return invoke("request-partner-changes", { partner_id: partnerId, reason });
}
