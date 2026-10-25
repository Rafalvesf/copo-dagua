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
    case "payments_not_enabled":
      return "Este parceiro ainda não ativou os pagamentos (Stripe). Só pode ser aprovado depois de o fazer em Perfil → Pagamentos.";
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

// Destaque manual (migração 106): o admin escolhe parceiros que passam à
// frente do carrossel "Em destaque" na app. O resto continua automático.
export async function setPartnerFeatured(partnerId: string, featured: boolean): Promise<ActionState> {
  await requireAdmin();
  const supabase = await createClient();
  const { error } = await supabase.rpc("set_partner_featured", {
    p_partner_id: partnerId,
    p_featured: featured,
  });
  if (error) {
    return {
      error: error.code === "42501" ? "Não tens permissão para esta ação." : "Não foi possível mudar o destaque. Tenta novamente.",
    };
  }
  revalidatePath("/partners");
  revalidatePath(`/partners/${partnerId}`);
  return { error: null };
}

export async function featurePartner(partnerId: string) {
  return setPartnerFeatured(partnerId, true);
}

export async function unfeaturePartner(partnerId: string) {
  return setPartnerFeatured(partnerId, false);
}

// Dados de pagamento do parceiro preenchidos no admin, com o UI do admin
// (2026-10-25: nada de links nem formulários da Stripe).
export type PayoutPrefill = {
  business_type: "individual" | "company" | null;
  person: { first_name?: string; last_name?: string; email?: string; phone?: string; dob?: string | null; address?: { line1: string; line2: string; postal_code: string; city: string } | null; nif_provided?: boolean; title?: string };
  company: { name: string; tax_id_provided: boolean; phone: string; address: { line1: string; line2: string; postal_code: string; city: string } | null } | null;
  product_description: string;
  url: string;
  bank_last4: string | null;
  account_holder_name: string;
  tos_accepted: boolean;
} | null;
export type PayoutStatus =
  | { ok: true; hasAccount: boolean; chargesEnabled: boolean; payoutsEnabled: boolean; currentlyDue: string[]; pendingVerification: string[]; prefill: PayoutPrefill }
  | { ok: false; error: string };

async function callPayments(partnerId: string, body: Record<string, unknown>): Promise<PayoutStatus> {
  await requireAdmin();
  if (!partnerId) return { ok: false, error: "Parceiro em falta." };
  const supabase = await createClient();
  const { data, error } = await supabase.functions.invoke("admin-partner-payments", {
    body: { partner_id: partnerId, ...body },
  });
  if (error) {
    let message = "Não foi possível falar com a Stripe. Tenta novamente.";
    try {
      const ctx = (error as { context?: Response }).context;
      const j = ctx ? await ctx.json() : null;
      if (j?.message) message = j.message;
    } catch {
      /* corpo sem JSON */
    }
    return { ok: false, error: message };
  }
  const d = data as {
    has_account?: boolean;
    charges_enabled?: boolean;
    payouts_enabled?: boolean;
    currently_due?: string[];
    pending_verification?: string[];
    prefill?: PayoutPrefill;
  };
  revalidatePath(`/partners/${partnerId}`);
  return {
    ok: true,
    hasAccount: d.has_account === true,
    chargesEnabled: d.charges_enabled === true,
    payoutsEnabled: d.payouts_enabled === true,
    currentlyDue: d.currently_due ?? [],
    pendingVerification: d.pending_verification ?? [],
    prefill: d.prefill ?? null,
  };
}

export async function getPayoutStatus(partnerId: string): Promise<PayoutStatus> {
  return callPayments(partnerId, { action: "status" });
}

export async function submitPayoutDetails(partnerId: string, details: Record<string, unknown>): Promise<PayoutStatus> {
  return callPayments(partnerId, { action: "details", details });
}
