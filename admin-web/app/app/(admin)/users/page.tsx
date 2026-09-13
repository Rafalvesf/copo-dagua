import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { AccountStatusBadge } from "@/components/AccountStatusBadge";
import type { Profile, UserRole } from "@/lib/types";

const ROLE_LABELS: Record<UserRole, string> = {
  couple: "Casal",
  partner: "Parceiro",
  admin: "Admin",
};

const ADMIN_ROLE_LABELS: Record<string, string> = {
  super_admin: "Super Admin",
  admin: "Admin",
  support: "Suporte",
  finance: "Financeiro",
  moderator: "Moderador",
};

const ROLE_FILTERS: { value: UserRole | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "couple", label: "Casais" },
  { value: "partner", label: "Parceiros" },
  { value: "admin", label: "Admins" },
];

export default async function UsersPage({ searchParams }: PageProps<"/users">) {
  await requireAdmin();
  const params = await searchParams;
  const role = typeof params.role === "string" ? params.role : "all";

  const supabase = await createClient();
  let query = supabase
    .from("profiles")
    .select("id, role, admin_role, full_name, email_verified_at, status, created_at")
    .order("created_at", { ascending: false });

  if (role !== "all") {
    query = query.eq("role", role);
  }

  const { data: users, error } = await query;

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>Utilizadores</h1>
          <p style={{ color: "var(--ink-muted)", marginTop: 4 }}>
            Todas as contas da plataforma.
          </p>
        </div>
        <Link
          href="/users/new"
          style={{
            padding: "10px 18px",
            borderRadius: 999,
            border: "none",
            background: "var(--ink)",
            color: "var(--surface)",
            fontWeight: 600,
            fontSize: 14,
          }}
        >
          + Novo utilizador
        </Link>
      </div>

      <div style={{ display: "flex", gap: 8, margin: "24px 0" }}>
        {ROLE_FILTERS.map((f) => (
          <Link
            key={f.value}
            href={`/users?role=${f.value}`}
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              background: role === f.value ? "var(--ink)" : "var(--surface)",
              color: role === f.value ? "var(--surface)" : "var(--ink)",
              border: "1px solid var(--border-muted)",
            }}
          >
            {f.label}
          </Link>
        ))}
      </div>

      {error && <p style={{ color: "var(--status-rejected-fg)" }}>Não foi possível carregar a lista.</p>}
      {!error && users?.length === 0 && (
        <p style={{ color: "var(--ink-muted)" }}>Sem utilizadores neste filtro.</p>
      )}

      {!error && users && users.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", fontSize: 13, color: "var(--ink-muted)" }}>
              <th style={{ padding: "8px 0" }}>Nome</th>
              <th>Papel</th>
              <th>Email verificado</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {(users as Profile[]).map((u) => (
              <tr key={u.id} style={{ borderTop: "1px solid var(--border-muted)" }}>
                <td style={{ padding: "12px 0" }}>
                  <Link href={`/users/${u.id}`} style={{ fontWeight: 600 }}>
                    {u.full_name}
                  </Link>
                </td>
                <td style={{ fontSize: 13 }}>
                  {ROLE_LABELS[u.role]}
                  {u.role === "admin" && u.admin_role && u.admin_role !== "admin" && (
                    <span style={{ color: "var(--ink-muted)" }}> · {ADMIN_ROLE_LABELS[u.admin_role]}</span>
                  )}
                </td>
                <td style={{ fontSize: 13 }}>{u.email_verified_at ? "✓" : "—"}</td>
                <td>
                  <AccountStatusBadge status={u.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
