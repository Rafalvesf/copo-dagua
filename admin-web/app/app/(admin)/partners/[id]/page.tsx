import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import { auditActionLabel } from "@/lib/audit-labels";
import { createClient } from "@/lib/supabase/server";
import { PartnerStatusBadge } from "@/components/PartnerStatusBadge";
import { Alert, Badge, Card, DetailList, PageHeader } from "@/components/ui";
import { fmtDateTime, fmtEur } from "@/lib/format";
import { ACTIONS_BY_STATUS } from "@/lib/types";
import { SimpleActionButton, ReasonActionForm } from "@/components/ActionButtons";
import { PaymentsLinkButton } from "@/components/PaymentsLinkButton";
import {
  approvePartner,
  featurePartner,
  unfeaturePartner,
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
    // Migração 104: obrigatório antes de aprovar.
    {
      label: "Pagamentos ativos (Stripe)",
      done: Boolean((p as unknown as { stripe_charges_enabled?: boolean }).stripe_charges_enabled),
      detail: (p as unknown as { stripe_charges_enabled?: boolean }).stripe_charges_enabled ? undefined : "o parceiro tem de ativar em Perfil → Pagamentos",
    },
  ];

  const stripeOn = Boolean((p as unknown as { stripe_charges_enabled?: boolean }).stripe_charges_enabled);
  const reviewing = p.status === "pending_review" || p.status === "changes_required";
  const missing = checklist.filter((c) => !c.done).length;

  return (
    <div className="page">
      <PageHeader
        back={{ href: "/partners", label: "Parceiros" }}
        title={p.business_name || "(sem nome)"}
        badge={
          <span className="row" style={{ gap: 6 }}>
            <PartnerStatusBadge status={p.status} />
            {p.featured && (
              <Badge tone="accent" plain>
                ★ Em destaque
              </Badge>
            )}
          </span>
        }
        subtitle={`${categoryLabels.length > 0 ? categoryLabels.join(" · ") : "Sem categorias"} · ${p.nationwide ? "Âmbito nacional" : p.service_areas.join(", ") || "Sem área"}`}
      />

      {accountSuspended && (
        <Alert tone="danger">
          <span>
            <strong>Conta suspensa.</strong> O perfil não aparece no Marketplace enquanto a conta do parceiro estiver suspensa (Utilizadores).
          </span>
        </Alert>
      )}

      <div className="grid grid-main-side">
        <div className="stack">
          <Card title="Como aparece na app" subtitle="O que os organizadores veem. O NIF e a morada de faturação nunca aparecem.">
            <div className="row" style={{ alignItems: "flex-start", gap: 16, flexWrap: "nowrap" }}>
              {p.cover_photo_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={p.cover_photo_url} alt="Logótipo" width={64} height={64} style={{ borderRadius: "50%", objectFit: "cover", flexShrink: 0 }} />
              ) : (
                <div aria-hidden style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--surface-3)", flexShrink: 0 }} />
              )}
              <div style={{ minWidth: 0 }}>
                <p className="strong" style={{ fontSize: 16 }}>
                  {p.business_name || "(sem nome)"}
                </p>
                <p style={{ marginTop: 6, maxWidth: "68ch" }}>{p.description || <span className="subtle">Sem descrição</span>}</p>
              </div>
            </div>

            {portfolioItems.length > 0 && (
              <div className="row" style={{ marginTop: 16 }}>
                {portfolioItems.map((item) =>
                  item.media_type === "image" ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img key={item.id} src={item.media_url} alt="" width={84} height={84} style={{ borderRadius: 10, objectFit: "cover" }} />
                  ) : (
                    <div key={item.id} className="row" style={{ width: 84, height: 84, borderRadius: 10, background: "var(--ink)", color: "var(--surface)", justifyContent: "center", fontSize: 12 }}>
                      vídeo
                    </div>
                  ),
                )}
              </div>
            )}

            <div style={{ marginTop: 18, paddingTop: 16, borderTop: "1px solid var(--border)" }}>
              <p className="field-label" style={{ marginBottom: 8 }}>
                Serviços e preços
              </p>
              {p.pricing_mode === "quote_only" ? (
                <p className="muted">Só orçamento à medida — sem pacotes fixos.</p>
              ) : servicePackages.length === 0 ? (
                <p className="form-error">Escolheu “Pacotes” mas ainda não adicionou nenhum.</p>
              ) : (
                <ul className="list bleed">
                  {servicePackages.map((pkg) => (
                    <li key={pkg.id}>
                      <div className="list-main">
                        <p className="list-title">{pkg.name}</p>
                        {pkg.description && <p className="list-sub">{pkg.description}</p>}
                      </div>
                      <span className="strong tnum nowrap">
                        {pkg.is_starting_price ? "desde " : ""}
                        {fmtEur(pkg.price)}
                      </span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Card>

          <Card title="Dados do negócio">
            <DetailList
              items={[
                { label: "Tipo", value: p.business_type === "company" ? "Empresa" : "Individual" },
                { label: "Área de atuação", value: p.nationwide ? "Âmbito nacional" : p.service_areas.join(", ") || "—" },
                {
                  label: "Website",
                  value: p.website_url ? (
                    <a href={p.website_url} target="_blank" rel="noreferrer" className="link">
                      {p.website_url}
                    </a>
                  ) : (
                    "—"
                  ),
                },
                { label: "Enviado para revisão", value: fmtDateTime(p.submitted_at) },
                ...(v ? [{ label: "NIF (só admin)", value: v.tax_id || "—" }, { label: "Morada de faturação", value: v.billing_address || "—" }] : []),
                ...(p.rejection_reason ? [{ label: "Último motivo", value: p.rejection_reason }] : []),
              ]}
            />
          </Card>

          <Card title="Histórico">
            {entries.length === 0 ? (
              <p className="muted">Sem decisões registadas.</p>
            ) : (
              <ul className="timeline">
                {entries.map((entry) => (
                  <li key={entry.id}>
                    <p>{auditActionLabel(entry.action).replace(/^./, (c) => c.toUpperCase())}</p>
                    <p className="timeline-time">{fmtDateTime(entry.created_at)}</p>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>

        <div className="stack">
          {(reviewing || availableActions.length > 0) && (
            <Card
              title={reviewing ? "Aprovação" : "Ações"}
              subtitle={reviewing ? (missing === 0 ? "Tudo pronto para aprovar." : `Faltam ${missing} ${missing === 1 ? "requisito" : "requisitos"}.`) : undefined}
              tone={reviewing ? (missing === 0 ? "accent" : "warning") : undefined}
            >
              <div className="stack">
                {reviewing && (
                  <ul className="checklist">
                    {checklist.map((item) => (
                      <li key={item.label}>
                        <span className="check-icon" data-done={item.done} aria-label={item.done ? "feito" : "em falta"}>
                          {item.done ? "✓" : "!"}
                        </span>
                        <span>
                          {item.label}
                          {item.detail && <span className="muted"> · {item.detail}</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
                {availableActions.length > 0 && (
                  <div className="stack-sm">
                    {availableActions.includes("approve") && <SimpleActionButton id={p.id} label="Aprovar e publicar" action={approvePartner} block />}
                    {availableActions.includes("request_changes") && (
                      <ReasonActionForm id={p.id} idFieldName="partner_id" label="Pedir alterações" action={requestChangesFromPartner} block />
                    )}
                    {availableActions.includes("restore") && <SimpleActionButton id={p.id} label="Restaurar" action={restorePartner} block />}
                    {availableActions.includes("reject") && (
                      <ReasonActionForm id={p.id} idFieldName="partner_id" label="Rejeitar" action={rejectPartner} variant="danger" block />
                    )}
                    {availableActions.includes("suspend") && (
                      <ReasonActionForm id={p.id} idFieldName="partner_id" label="Suspender" action={suspendPartner} variant="danger" block />
                    )}
                  </div>
                )}
              </div>
            </Card>
          )}

          <Card title="Pagamentos">
            <div className="row" style={{ justifyContent: "space-between" }}>
              <span className="muted">Stripe</span>
              {stripeOn ? <Badge tone="success">Ativos</Badge> : <Badge tone="warning">Por ativar</Badge>}
            </div>
            {!stripeOn && (
              <>
                <p className="field-hint" style={{ marginTop: 8 }}>
                  O parceiro ativa em Perfil → Pagamentos, na app, ou pelo link abaixo. Sem isto não pode receber sinais.
                </p>
                <PaymentsLinkButton partnerId={p.id} />
              </>
            )}
          </Card>

          {p.status === "published" && (
            <Card title="Destaque na app">
              <p className="muted" style={{ marginBottom: 12, fontSize: 13 }}>
                {p.featured
                  ? "Aparece primeiro no carrossel “Em destaque” para todos os organizadores."
                  : "O carrossel “Em destaque” é automático (melhor avaliação). Marca para aparecer primeiro."}
              </p>
              {p.featured ? (
                <SimpleActionButton id={p.id} label="Tirar do destaque" action={unfeaturePartner} variant="secondary" block />
              ) : (
                <SimpleActionButton id={p.id} label="★ Pôr em destaque" action={featurePartner} variant="secondary" block />
              )}
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
