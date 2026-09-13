import Link from "next/link";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { PartnerStatusBadge } from "@/components/PartnerStatusBadge";
import { ACTIONS_BY_STATUS } from "@/lib/types";
import { SimpleActionButton, ReasonActionForm } from "@/components/ActionButtons";
import {
  approvePartner,
  rejectPartner,
  requestChangesFromPartner,
  restorePartner,
  suspendPartner,
} from "./actions";
import type {
  AuditLogEntry,
  PartnerPortfolioItem,
  PartnerProfile,
  PartnerVerification,
  ServicePackage,
} from "@/lib/types";

export default async function PartnerDetailPage(
  props: PageProps<"/partners/[id]">,
) {
  await requireAdmin();
  const { id } = await props.params;

  const supabase = await createClient();

  const [
    { data: profile },
    { data: verification },
    { data: history },
    { data: account },
    { data: categoryRows },
    { data: portfolio },
    { data: packages },
  ] = await Promise.all([
    supabase.from("partner_profiles").select("*").eq("id", id).single(),
    supabase.from("partner_verification").select("*").eq("partner_id", id).maybeSingle(),
    supabase
      .from("audit_logs")
      .select("*")
      .eq("target_table", "partner_profiles")
      .eq("target_id", id)
      .order("created_at", { ascending: false }),
    supabase.from("profiles").select("status").eq("id", id).maybeSingle(),
    supabase
      .from("partner_profile_categories")
      .select("category_id, partner_categories(label_pt)")
      .eq("partner_id", id),
    supabase
      .from("partner_portfolio_items")
      .select("*")
      .eq("partner_id", id)
      .order("position"),
    supabase.from("partner_service_packages").select("*").eq("partner_id", id).order("position"),
  ]);

  if (!profile) {
    notFound();
  }

  const p = profile as PartnerProfile;
  const v = verification as PartnerVerification | null;
  const entries = (history ?? []) as AuditLogEntry[];
  const categoryLabels = (categoryRows ?? [])
    .map((r) => (r.partner_categories as unknown as { label_pt: string } | null)?.label_pt)
    .filter((label): label is string => Boolean(label));
  const portfolioItems = (portfolio ?? []) as PartnerPortfolioItem[];
  const imageCount = portfolioItems.filter((i) => i.media_type === "image").length;
  const servicePackages = (packages ?? []) as ServicePackage[];
  const availableActions = ACTIONS_BY_STATUS[p.status];
  const accountSuspended = account?.status === "suspended";

  // Mesma lista de condições de public.partner_profile_requirements_met()
  // (database/migrations/028_partner_service_packages.sql) — repetida
  // aqui em vez de chamada por RPC porque a UI precisa de saber QUAL
  // requisito falta, não só um booleano agregado.
  const checklist = [
    {
      label: "Informações do negócio",
      done: p.business_name !== "" && p.description.length >= 50 && (p.nationwide || p.service_areas.length > 0),
      detail: p.description.length < 50 ? "descrição com menos de 50 caracteres" : undefined,
    },
    { label: "Categorias", done: categoryLabels.length >= 1, detail: `${categoryLabels.length} selecionada(s)` },
    { label: "Logótipo", done: Boolean(p.cover_photo_url) },
    { label: "Portefólio", done: imageCount >= 3, detail: `${imageCount}/3 imagens` },
    {
      label: "Serviços",
      done: p.pricing_mode === "quote_only" || servicePackages.length >= 1,
      detail: p.pricing_mode === "quote_only" ? "só orçamento" : `${servicePackages.length} pacote(s)`,
    },
    { label: "Contactos (NIF)", done: Boolean(v?.tax_id) },
  ];

  return (
    <div>
      <Link href="/partners" style={{ color: "var(--ink-muted)", fontSize: 13 }}>
        ← Parceiros
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "16px 0" }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 26 }}>
          {p.business_name}
        </h1>
        <PartnerStatusBadge status={p.status} />
      </div>

      {accountSuspended && (
        <div
          style={{
            background: "var(--status-rejected-bg)",
            color: "var(--status-rejected-fg)",
            borderRadius: 12,
            padding: "10px 16px",
            fontSize: 14,
            marginBottom: 16,
          }}
        >
          Conta suspensa em <code>admin-web/users/</code> — o perfil está{" "}
          <code>{p.status}</code> aqui, mas está invisível no Marketplace porque
          a conta associada não está ativa (ver{" "}
          <code>admin-web/users/edge-cases.md</code>).
        </div>
      )}

      {(p.status === "pending_review" || p.status === "changes_required") && (
        <Section title="Checklist de aprovação">
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {checklist.map((item) => (
              <li key={item.label} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14 }}>
                <span style={{ color: item.done ? "var(--status-published-fg)" : "var(--status-rejected-fg)" }}>
                  {item.done ? "✓" : "✗"}
                </span>
                <span>{item.label}</span>
                {item.detail && (
                  <span style={{ color: "var(--ink-muted)", fontSize: 13 }}>— {item.detail}</span>
                )}
              </li>
            ))}
          </ul>
        </Section>
      )}

      <Section title="Pré-visualizar perfil">
        <p style={{ fontSize: 12.5, color: "var(--ink-muted)", marginBottom: 4 }}>
          Exatamente o que um casal vê — só campos públicos, nunca dados de{" "}
          <code>partner_verification</code> (NIF, morada).
        </p>
        <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
          {p.cover_photo_url ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={p.cover_photo_url}
              alt="Logótipo"
              width={72}
              height={72}
              style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }}
            />
          ) : (
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                background: "var(--surface-muted, #eee)",
                flexShrink: 0,
              }}
            />
          )}
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 700, fontSize: 16 }}>{p.business_name || "(sem nome)"}</div>
            <div style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 2 }}>
              {categoryLabels.length > 0 ? categoryLabels.join(" · ") : "Sem categorias"}
            </div>
            <p style={{ fontSize: 14, marginTop: 8 }}>{p.description || "—"}</p>
            <div style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 6 }}>
              {p.nationwide ? "Âmbito nacional" : p.service_areas.join(", ") || "Sem área de serviço"}
            </div>
          </div>
        </div>

        {portfolioItems.length > 0 && (
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 16 }}>
            {portfolioItems.map((item) =>
              item.media_type === "image" ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={item.id}
                  src={item.media_url}
                  alt=""
                  width={88}
                  height={88}
                  style={{ borderRadius: 10, objectFit: "cover" }}
                />
              ) : (
                <div
                  key={item.id}
                  style={{
                    width: 88,
                    height: 88,
                    borderRadius: 10,
                    background: "var(--ink)",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 12,
                  }}
                >
                  vídeo
                </div>
              ),
            )}
          </div>
        )}

        <div style={{ marginTop: 16 }}>
          {p.pricing_mode === "quote_only" ? (
            <p style={{ fontSize: 14, color: "var(--ink-muted)" }}>Só orçamento à medida — sem pacotes fixos.</p>
          ) : servicePackages.length === 0 ? (
            <p style={{ fontSize: 14, color: "var(--status-rejected-fg)" }}>
              Modo &quot;Pacotes&quot; escolhido mas nenhum pacote adicionado.
            </p>
          ) : (
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
              {servicePackages.map((pkg) => (
                <li key={pkg.id} style={{ fontSize: 14 }}>
                  <strong>{pkg.name}</strong> — {pkg.is_starting_price ? "a partir de " : ""}
                  {pkg.price.toFixed(0)}€
                  {pkg.description && (
                    <span style={{ color: "var(--ink-muted)" }}> · {pkg.description}</span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <Section title="Negócio">
        <Field label="Tipo" value={p.business_type === "company" ? "Empresa" : "Individual"} />
        <Field label="Descrição" value={p.description || "—"} />
        <Field
          label="Área de atuação"
          value={p.nationwide ? "Âmbito nacional" : p.service_areas.join(", ") || "—"}
        />
        <Field label="Website" value={p.website_url ?? "—"} />
        <Field
          label="Submetido em"
          value={p.submitted_at ? new Date(p.submitted_at).toLocaleString("pt-PT") : "—"}
        />
        {p.rejection_reason && (
          <Field label="Motivo (última rejeição)" value={p.rejection_reason} />
        )}
      </Section>

      {v && (
        <Section title="Dados fiscais (só admin)">
          <Field label="NIF" value={v.tax_id} />
          <Field label="Morada de faturação" value={v.billing_address} />
        </Section>
      )}

      <Section title="Histórico">
        {entries.length === 0 ? (
          <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>
            Sem decisões administrativas registadas.
          </p>
        ) : (
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {entries.map((entry) => (
              <li key={entry.id} style={{ fontSize: 14 }}>
                <span style={{ color: "var(--ink-muted)" }}>
                  {new Date(entry.created_at).toLocaleString("pt-PT")} —
                </span>{" "}
                {entry.action}
              </li>
            ))}
          </ul>
        )}
      </Section>

      {availableActions.length > 0 && (
        <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
          {availableActions.includes("approve") && (
            <SimpleActionButton id={p.id} label="Aprovar" action={approvePartner} />
          )}
          {availableActions.includes("reject") && (
            <ReasonActionForm id={p.id} idFieldName="partner_id" label="Rejeitar" action={rejectPartner} />
          )}
          {availableActions.includes("request_changes") && (
            <ReasonActionForm
              id={p.id}
              idFieldName="partner_id"
              label="Pedir alterações"
              action={requestChangesFromPartner}
            />
          )}
          {availableActions.includes("suspend") && (
            <ReasonActionForm id={p.id} idFieldName="partner_id" label="Suspender" action={suspendPartner} />
          )}
          {availableActions.includes("restore") && (
            <SimpleActionButton id={p.id} label="Restaurar" action={restorePartner} />
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

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: 12, fontSize: 14 }}>
      <span style={{ color: "var(--ink-muted)", minWidth: 160 }}>{label}</span>
      <span>{value}</span>
    </div>
  );
}
