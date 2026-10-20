import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { PartnerStatusBadge } from "@/components/PartnerStatusBadge";
import { Badge, Card, Empty, FilterTabs, PageHeader } from "@/components/ui";
import { fmtDate } from "@/lib/format";
import type { PartnerProfile, PartnerProfileStatus } from "@/lib/types";

// 'draft' nunca aparece aqui (RN02): perfis por acabar não são para rever.
const FILTERS: { value: PartnerProfileStatus; label: string }[] = [
  { value: "pending_review", label: "Para aprovar" },
  { value: "changes_required", label: "Alterações pedidas" },
  { value: "published", label: "Publicados" },
  { value: "rejected", label: "Rejeitados" },
  { value: "suspended", label: "Suspensos" },
];

type Row = Pick<PartnerProfile, "id" | "business_name" | "status" | "submitted_at" | "featured"> & {
  stripe_charges_enabled: boolean;
};

export default async function PartnersPage({ searchParams }: PageProps<"/partners">) {
  await requireAdmin();
  const params = await searchParams;
  const status = isStatus(params.status) ? params.status : "pending_review";

  const supabase = await createClient();
  const [{ data: partners, error }, { data: all }] = await Promise.all([
    supabase
      .from("partner_profiles")
      .select("id, business_name, status, submitted_at, featured, stripe_charges_enabled")
      .eq("status", status)
      .order("submitted_at", { ascending: true }),
    supabase.from("partner_profiles").select("status"),
  ]);
  const counts = new Map<string, number>();
  for (const r of (all ?? []) as { status: string }[]) counts.set(r.status, (counts.get(r.status) ?? 0) + 1);
  const rows = (partners ?? []) as Row[];
  const current = FILTERS.find((f) => f.value === status);

  return (
    <div className="page">
      <PageHeader title="Parceiros" subtitle="Fornecedores e espaços do Marketplace. Revê os perfis novos e aprova-os quando tiverem tudo pronto." />

      <div className="toolbar">
        <FilterTabs
          current={status}
          items={FILTERS.map((f) => ({ value: f.value, label: f.label, href: `/partners?status=${f.value}`, count: counts.get(f.value) ?? 0 }))}
        />
      </div>

      <Card flush>
        {error ? (
          <Empty title="Não foi possível carregar a lista">Tenta atualizar a página.</Empty>
        ) : rows.length === 0 ? (
          <Empty title={`Sem parceiros em “${current?.label}”`}>
            {status === "pending_review" ? "Nenhum perfil à espera de aprovação." : "Escolhe outro filtro acima."}
          </Empty>
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Parceiro</th>
                  <th>Estado</th>
                  <th>Pagamentos (Stripe)</th>
                  <th>Enviado para revisão</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <Link href={`/partners/${p.id}`} className="cell-main">
                        {p.business_name}
                      </Link>
                      {p.featured && (
                        <span style={{ marginLeft: 8 }}>
                          <Badge tone="accent" plain>
                            ★ Destaque
                          </Badge>
                        </span>
                      )}
                    </td>
                    <td>
                      <PartnerStatusBadge status={p.status} />
                    </td>
                    <td>
                      {p.stripe_charges_enabled ? <Badge tone="success">Ativos</Badge> : <Badge tone="warning">Por ativar</Badge>}
                    </td>
                    <td className="muted nowrap">{fmtDate(p.submitted_at)}</td>
                    <td className="num">
                      <Link href={`/partners/${p.id}`} className="btn btn-secondary btn-sm">
                        {status === "pending_review" ? "Rever" : "Abrir"}
                      </Link>
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

function isStatus(value: unknown): value is PartnerProfileStatus {
  return typeof value === "string" && ["draft", "pending_review", "changes_required", "published", "rejected", "suspended"].includes(value);
}
