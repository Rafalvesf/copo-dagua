import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { AccountStatusBadge } from "@/components/AccountStatusBadge";
import { SimpleActionButton, ReasonActionForm } from "@/components/ActionButtons";
import { restoreUser, suspendUser } from "./actions";
import { DeleteUserButton } from "./delete-button";
import type { Profile } from "@/lib/types";
import type { ReactNode } from "react";

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

  return (
    <div>
      <Link href="/users" style={{ color: "var(--ink-muted)", fontSize: 13 }}>
        ← Utilizadores
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "16px 0" }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 26 }}>{u.full_name}</h1>
        <AccountStatusBadge status={u.status} />
      </div>

      <Section title="Identidade">
        <Field label="Papel" value={u.role === "couple" ? "Casal" : u.role === "partner" ? "Parceiro" : "Admin"} />
        <Field label="Telefone" value={u.phone ?? "—"} />
        <Field label="Email verificado" value={u.email_verified_at ? new Date(u.email_verified_at).toLocaleString("pt-PT") : "Não"} />
        <Field label="Onboarding" value={u.onboarding_completed ? "Concluído" : "Incompleto"} />
        <Field label="Conta criada em" value={new Date(u.created_at).toLocaleString("pt-PT")} />
        {u.role === "partner" && (
          <Field label="Perfil de parceiro" value="" link={{ href: `/partners/${u.id}`, label: "Ver perfil de parceiro →" }} />
        )}
        {u.role === "couple" && wedding && (
          <Field label="Casamento" value="" link={{ href: `/weddings/${wedding.id}`, label: "Ver casamento →" }} />
        )}
      </Section>

      {isSelf ? (
        <p style={{ color: "var(--ink-muted)", fontSize: 13 }}>
          Esta é a tua própria conta — não podes suspendê-la (RN03).
        </p>
      ) : (
        <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
          {u.status === "active" && (
            <ReasonActionForm id={u.id} idFieldName="user_id" label="Suspender" action={suspendUser} />
          )}
          {u.status === "suspended" && (
            <SimpleActionButton id={u.id} label="Reativar" action={restoreUser} />
          )}
          {adminRole === "super_admin" && (
            <DeleteUserButton userId={u.id} fullName={u.full_name} />
          )}
        </div>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section
      style={{
        background: "var(--surface)",
        borderRadius: 16,
        boxShadow: "var(--shadow-card)",
        padding: 20,
        marginBottom: 16,
      }}
    >
      <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{children}</div>
    </section>
  );
}

function Field({
  label,
  value,
  link,
}: {
  label: string;
  value: string;
  link?: { href: string; label: string };
}) {
  return (
    <div style={{ display: "flex", gap: 12, fontSize: 14 }}>
      <span style={{ color: "var(--ink-muted)", minWidth: 160 }}>{label}</span>
      {link ? (
        <Link href={link.href} style={{ fontWeight: 600 }}>
          {link.label}
        </Link>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}
