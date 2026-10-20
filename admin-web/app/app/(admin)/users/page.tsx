import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { AccountStatusBadge } from "@/components/AccountStatusBadge";
import type { Profile, UserRole } from "@/lib/types";
import { Badge, Card, Empty, FilterTabs, PageHeader } from "@/components/ui";
import { fmtDate, initials } from "@/lib/format";

const ROLE_LABELS: Record<UserRole, string> = {
  couple: "Organizador",
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
  { value: "couple", label: "Organizadores" },
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

  const rows = (users ?? []) as Profile[];

  return (
    <div className="page">
      <PageHeader
        title="Utilizadores"
        subtitle="Todas as contas: organizadores, parceiros e equipa À Nossa!."
        actions={
          <Link href="/users/new" className="btn btn-primary">
            + Novo utilizador
          </Link>
        }
      />

      <div className="toolbar">
        <FilterTabs current={role} items={ROLE_FILTERS.map((f) => ({ value: f.value, label: f.label, href: `/users?role=${f.value}` }))} />
      </div>

      <Card flush>
        {error ? (
          <Empty title="Não foi possível carregar a lista">Tenta atualizar a página.</Empty>
        ) : rows.length === 0 ? (
          <Empty title="Sem utilizadores neste filtro" />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Tipo de conta</th>
                  <th>Email verificado</th>
                  <th>Registo</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((u) => (
                  <tr key={u.id}>
                    <td>
                      <div className="row" style={{ flexWrap: "nowrap", gap: 10 }}>
                        <span className="avatar" style={{ width: 30, height: 30, fontSize: 11 }} aria-hidden>
                          {initials(u.full_name || "?")}
                        </span>
                        <Link href={`/users/${u.id}`} className="cell-main">
                          {u.full_name || "Sem nome"}
                        </Link>
                      </div>
                    </td>
                    <td>
                      {ROLE_LABELS[u.role]}
                      {u.role === "admin" && u.admin_role && u.admin_role !== "admin" && (
                        <span className="muted"> · {ADMIN_ROLE_LABELS[u.admin_role]}</span>
                      )}
                    </td>
                    <td>{u.email_verified_at ? <Badge tone="success" plain>Sim</Badge> : <span className="subtle">Não</span>}</td>
                    <td className="muted nowrap">{fmtDate(u.created_at)}</td>
                    <td>
                      <AccountStatusBadge status={u.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
