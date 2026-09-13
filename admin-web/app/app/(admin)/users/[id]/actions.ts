"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";
import type { ActionState } from "@/components/ActionButtons";

const MIN_REASON_LENGTH = 10;

// Direct supabase.rpc() calls, not an Edge Function — unlike
// admin-web/partners/, there's no side-effect to orchestrate yet, see
// admin-web/users/api.md for why this is simpler here.
async function invoke(fn: string, args: Record<string, unknown>): Promise<ActionState> {
  await requireAdmin();
  const supabase = await createClient();

  const { error } = await supabase.rpc(fn, args);

  if (error) {
    return { error: mapError(error.code) };
  }

  revalidatePath("/users");
  revalidatePath(`/users/${args.p_user_id}`);
  return { error: null };
}

function mapError(code: string | undefined): string {
  switch (code) {
    case "P0001":
      return "Este utilizador já foi decidido por outro administrador, ou é a tua própria conta.";
    case "22023":
      return `O motivo deve ter pelo menos ${MIN_REASON_LENGTH} caracteres.`;
    case "42501":
      return "Não tens permissão para esta ação.";
    case "P0002":
      return "Este utilizador já não existe.";
    default:
      return "Não foi possível completar a ação. Tenta novamente.";
  }
}

export async function restoreUser(userId: string) {
  return invoke("restore_user_account", { p_user_id: userId });
}

export async function suspendUser(
  _prevState: ActionState,
  formData: FormData,
): Promise<ActionState> {
  const userId = String(formData.get("user_id") ?? "");
  const reason = String(formData.get("reason") ?? "").trim();
  if (reason.length < MIN_REASON_LENGTH) {
    return { error: `O motivo deve ter pelo menos ${MIN_REASON_LENGTH} caracteres.` };
  }
  return invoke("suspend_user_account", { p_user_id: userId, p_reason: reason });
}

// Eliminação real (não o fluxo de auto-eliminação de 30 dias em
// backend/auth/requirements.md — esse é iniciado pelo próprio
// utilizador em Definições, âmbito diferente). Isto é o admin a
// remover permanentemente qualquer conta (ativa ou suspensa). Restrito a
// `super_admin` (nenhum outro `admin_role` lista `user.delete` em
// `has_admin_permission()` — nem precisa de migração nova, a função já
// só devolve `true` para permissões explicitamente listadas por role, e
// só `super_admin` devolve `true` para tudo). A única trava de
// segurança é o próprio ecrã de confirmação (`delete-button.tsx`) —
// pedido explícito do utilizador para não exigir suspender primeiro.
//
// Usa o cliente de sessão para o registo de auditoria (precisa de
// `auth.uid()` real) e só depois o cliente `service_role` para a
// eliminação em si (`auth.admin.deleteUser` — só a Auth Admin API
// consegue apagar de `auth.users`; `profiles` cai em cascata, ver
// `on delete cascade` em 001_authentication.sql). Se o utilizador tiver
// histórico real (reservas, pagamentos) sem `on delete cascade` a
// partir de `profiles`, a eliminação falha com um erro de FK — proteção
// deliberada, nunca destruir histórico transacional/financeiro
// silenciosamente.
export async function deleteUser(_prevState: ActionState, formData: FormData): Promise<ActionState> {
  await requireAdmin();
  const userId = String(formData.get("user_id") ?? "");

  const sessionClient = await createClient();
  const { data: allowed } = await sessionClient.rpc("has_admin_permission", { p_permission: "user.delete" });
  if (!allowed) {
    return { error: "Só um super admin pode eliminar contas permanentemente." };
  }

  const { data: profile } = await sessionClient.from("profiles").select("status").eq("id", userId).single();
  if (!profile) {
    return { error: "Este utilizador já não existe." };
  }

  await sessionClient.from("audit_logs").insert({
    actor_id: (await sessionClient.auth.getUser()).data.user?.id,
    action: "delete_user",
    target_table: "profiles",
    target_id: userId,
    metadata: { previous_status: profile.status },
  });

  let admin;
  try {
    admin = createAdminClient();
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Configuração em falta." };
  }

  const { error } = await admin.auth.admin.deleteUser(userId);
  if (error) {
    return {
      error:
        "Não foi possível eliminar — esta conta tem histórico real associado (reservas, pagamentos, avaliações) " +
        "que não pode ser destruído silenciosamente.",
    };
  }

  revalidatePath("/users");
  redirect("/users");
}
