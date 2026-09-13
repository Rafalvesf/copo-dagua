"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export type CreateUserActionState = { error: string | null };

const ACCOUNT_KINDS = ["couple", "partner", "support", "moderator"] as const;
type AccountKind = (typeof ACCOUNT_KINDS)[number];

// `couple`/`partner` são `profiles.role` diretamente; `support`/
// `moderator` são sempre `role = 'admin'` + `admin_role` — nunca um
// `user_role` à parte (RN de 018_admin_rbac.sql: "é admin" continua
// binário, o que muda é o nível de permissão dentro de admin).
function toRoleAndAdminRole(kind: AccountKind): { role: "couple" | "partner" | "admin"; adminRole: string | null } {
  switch (kind) {
    case "couple":
      return { role: "couple", adminRole: null };
    case "partner":
      return { role: "partner", adminRole: null };
    case "support":
      return { role: "admin", adminRole: "support" };
    case "moderator":
      return { role: "admin", adminRole: "moderator" };
  }
}

export async function createUserAccount(
  _prevState: CreateUserActionState,
  formData: FormData,
): Promise<CreateUserActionState> {
  await requireAdmin();

  // Verificação real de permissão — não confiar só em requireAdmin()
  // (qualquer admin passa lá), `user.create` é restrito a
  // admin/super_admin (ver 046_admin_user_creation_permission.sql).
  // Usa o cliente da sessão (não o service_role) para `auth.uid()`
  // resolver corretamente dentro de `has_admin_permission()`.
  const sessionClient = await createClient();
  const { data: allowed, error: permError } = await sessionClient.rpc("has_admin_permission", {
    p_permission: "user.create",
  });
  if (permError || !allowed) {
    return { error: "Não tens permissão para criar contas novas." };
  }

  const fullName = String(formData.get("full_name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const kindRaw = String(formData.get("kind") ?? "");

  if (!fullName || !email) {
    return { error: "Nome e email são obrigatórios." };
  }
  if (!ACCOUNT_KINDS.includes(kindRaw as AccountKind)) {
    return { error: "Tipo de conta inválido." };
  }
  const kind = kindRaw as AccountKind;
  const { role, adminRole } = toRoleAndAdminRole(kind);

  let admin;
  try {
    admin = createAdminClient();
  } catch (e) {
    return { error: e instanceof Error ? e.message : "Configuração em falta." };
  }

  // `inviteUserByEmail` — nunca a app gera/guarda uma password; o
  // Supabase Auth envia um email real com um link para o próprio
  // utilizador escolher a password (mesmo mecanismo já usado no
  // signup normal, ver database/README.md "gap de provisionamento").
  const { data: created, error: inviteError } = await admin.auth.admin.inviteUserByEmail(email, {
    data: { role, full_name: fullName },
  });

  if (inviteError || !created?.user) {
    if (inviteError?.code === "email_exists") {
      return { error: "Já existe uma conta com este email." };
    }
    return { error: "Não foi possível criar a conta. Tenta novamente." };
  }

  // `handle_new_user()` (011_auth_provisioning.sql) já criou a linha
  // em `profiles` com o `role` correto a partir do trigger — falta só
  // atribuir `admin_role` para support/moderator, o trigger não sabe
  // dessa distinção.
  if (adminRole) {
    await admin.from("profiles").update({ admin_role: adminRole }).eq("id", created.user.id);
  }

  revalidatePath("/users");
  redirect("/users");
}
