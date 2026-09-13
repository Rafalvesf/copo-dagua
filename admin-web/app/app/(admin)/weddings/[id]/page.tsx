import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import type { Wedding } from "@/lib/types";

export default async function WeddingDetailPage(props: PageProps<"/weddings/[id]">) {
  await requireAdmin();
  const { id } = await props.params;

  const supabase = await createClient();
  const [{ data: wedding }, { data: collaborators }] = await Promise.all([
    supabase.from("weddings").select("*").eq("id", id).single(),
    supabase.from("wedding_collaborators").select("invited_email, status").eq("wedding_id", id),
  ]);

  if (!wedding) {
    notFound();
  }

  const w = wedding as Wedding;
  const { data: ownerProfile } = await supabase
    .from("profiles")
    .select("id, full_name")
    .eq("id", w.owner_id)
    .maybeSingle();

  return (
    <div>
      <Link href="/weddings" style={{ color: "var(--ink-muted)", fontSize: 13 }}>
        ← Casamentos
      </Link>

      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 26, margin: "16px 0" }}>
        {w.partner_name_1}
        {w.partner_name_2 ? ` & ${w.partner_name_2}` : ""}
      </h1>

      <Section title="Casamento">
        <Field label="Data" value={w.wedding_date ? new Date(w.wedding_date).toLocaleDateString("pt-PT") : "Por definir"} />
        <Field label="Local" value={w.location ?? "—"} />
        <Field label="Espaço" value={w.venue ?? "—"} />
        <Field label="Convidados estimados" value={w.estimated_guests?.toString() ?? "—"} />
        <Field
          label="Orçamento estimado"
          value={w.estimated_budget ? `${w.estimated_budget.toLocaleString("pt-PT")} €` : "—"}
        />
        <Field label="Estado" value={w.status} />
        {ownerProfile && (
          <Field label="Dono" value="" link={{ href: `/users/${ownerProfile.id}`, label: `${ownerProfile.full_name} →` }} />
        )}
      </Section>

      <Section title="Colaboradores">
        {!collaborators || collaborators.length === 0 ? (
          <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>Nenhum colaborador convidado.</p>
        ) : (
          collaborators.map((c) => (
            <Field key={c.invited_email} label={c.invited_email} value={c.status} />
          ))
        )}
      </Section>
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
