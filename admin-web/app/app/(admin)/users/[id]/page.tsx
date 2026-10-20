import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { AccountStatusBadge } from "@/components/AccountStatusBadge";
import { SimpleActionButton, ReasonActionForm } from "@/components/ActionButtons";
import { restoreUser, suspendUser } from "./actions";
import { DeleteUserButton } from "./delete-button";
import type { Profile } from "@/lib/types";
import { Card, DetailList, PageHeader } from "@/components/ui";
import { fmtDate, fmtDateTime, initials } from "@/lib/format";

export default async function UserDetailPage(props: PageProps<"/users/[id]">) {
  const { userId: viewerId, adminRole } = await requireAdmin();
  const { id } = await props.params;

  const supabase = await createClient();
  const { data: profile } = await supabase.from("profiles").select("*").eq("id", id).single();

  if (!profile) {
    notFound();
  }

  const u = profile as Profile;

  const { data: wedding } =
    u.role === "couple"
      ? await supabase.from("weddings").select("id").eq("owner_id", id).maybeSingle()
      : { data: null };

  const isSelf = id === viewerId;

  const roleLabel = u.role === "couple" ? "Organizador" : u.role === "partner" ? "Parceiro" : "Equipa À Nossa!";

  return (
    <div className="page">
      <PageHeader
        back={{ href: "/users", label: "Utilizadores" }}
        title={
          <span className="row" style={{ gap: 12, flexWrap: "nowrap" }}>
            <span className="avatar" style={{ width: 44, height: 44, fontSize: 15 }} aria-hidden>
              {initials(u.full_name || "?")}
            </span>
            {u.full_name || "Sem nome"}
          </span>
        }
        badge={<AccountStatusBadge status={u.status} />}
        subtitle={`${roleLabel} · conta criada a ${fmtDate(u.created_at)}`}
      />

      <div className="grid grid-main-side">
        <Card title="Conta">
          <DetailList
            items={[
              { label: "Tipo de conta", value: roleLabel },
              { label: "Telefone", value: u.phone ?? "—" },
              { label: "Email verificado", value: u.email_verified_at ? fmtDateTime(u.email_verified_at) : "Não" },
              { label: "Configuração inicial", value: u.onboarding_completed ? "Concluída" : "Por concluir" },
              ...(u.role === "partner"
                ? [{ label: "Perfil de parceiro", value: <Link href={`/partners/${u.id}`} className="link">Abrir perfil</Link> }]
                : []),
              ...(u.role === "couple" && wedding
                ? [{ label: "Evento", value: <Link href={`/weddings/${wedding.id}`} className="link">Abrir evento</Link> }]
                : []),
            ]}
          />
        </Card>

        <Card title="Ações">
          {isSelf ? (
            <p className="muted">É a tua própria conta — não a podes suspender.</p>
          ) : (
            <div className="stack-sm">
              {u.status === "active" && <ReasonActionForm id={u.id} idFieldName="user_id" label="Suspender conta" action={suspendUser} variant="danger" block />}
              {u.status === "suspended" && <SimpleActionButton id={u.id} label="Reativar conta" action={restoreUser} block />}
              {adminRole === "super_admin" && <DeleteUserButton userId={u.id} fullName={u.full_name} />}
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
