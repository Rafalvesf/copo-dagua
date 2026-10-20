import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { ModerationActions } from "./moderation-controls";
import type { Review, ReviewStatus } from "@/lib/types";
import { Badge, Card, Empty, FilterTabs, PageHeader } from "@/components/ui";
import { fmtDate } from "@/lib/format";

const FILTERS: { value: ReviewStatus | "all"; label: string }[] = [
  { value: "all", label: "Todas" },
  { value: "flagged", label: "Denunciadas" },
  { value: "published", label: "Publicadas" },
  { value: "removed", label: "Removidas" },
];

const STATUS_LABEL: Record<ReviewStatus, string> = {
  published: "Publicada",
  flagged: "Denunciada",
  removed: "Removida",
};

const STATUS_ORDER: Record<ReviewStatus, number> = { flagged: 0, published: 1, removed: 2 };

type ReviewRow = Review & {
  partner_profiles: { business_name: string } | null;
  weddings: { partner_name_1: string; partner_name_2: string | null } | null;
  bookings: { booking_number: string } | null;
};

export default async function ModerationPage({ searchParams }: PageProps<"/moderation">) {
  await requireAdmin();
  const params = await searchParams;
  const status = typeof params.status === "string" ? params.status : "all";

  const supabase = await createClient();
  let query = supabase
    .from("reviews")
    .select(
      "*, partner_profiles(business_name), weddings(partner_name_1, partner_name_2), bookings(booking_number)",
    )
    .order("created_at", { ascending: false });

  if (status !== "all") {
    query = query.eq("status", status);
  }

  const { data: reviews, error } = await query;
  const sorted = (reviews as ReviewRow[] | null)?.slice().sort((a, b) => {
    if (status !== "all") return 0;
    return STATUS_ORDER[a.status] - STATUS_ORDER[b.status];
  });

  const TONE: Record<ReviewStatus, "danger" | "success" | "neutral"> = { flagged: "danger", published: "success", removed: "neutral" };

  return (
    <div className="page">
      <PageHeader
        title="Avaliações"
        subtitle="Avaliações dos organizadores depois de uma reserva concluída. As denunciadas aparecem primeiro; remover só esconde do perfil público (nada é apagado)."
      />

      <div className="toolbar">
        <FilterTabs current={status} items={FILTERS.map((f) => ({ ...f, href: `/moderation?status=${f.value}` }))} />
      </div>

      {error ? (
        <Card>
          <Empty title="Não foi possível carregar a lista" />
        </Card>
      ) : !sorted || sorted.length === 0 ? (
        <Card>
          <Empty title="Sem avaliações neste filtro" />
        </Card>
      ) : (
        <div className="grid grid-2">
          {sorted.map((r) => {
            const coupleName = r.weddings
              ? r.weddings.partner_name_2
                ? `${r.weddings.partner_name_1} & ${r.weddings.partner_name_2}`
                : r.weddings.partner_name_1
              : "Organizador";
            return (
              <Card key={r.id} tone={r.status === "flagged" ? "danger" : undefined}>
                <div className="stack-sm" style={{ gap: 10 }}>
                  <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-start", flexWrap: "nowrap" }}>
                    <div style={{ minWidth: 0 }}>
                      <p className="strong">{r.partner_profiles?.business_name ?? "Parceiro"}</p>
                      <p className="list-sub">
                        por {coupleName} · {r.bookings?.booking_number ?? "reserva"} · {fmtDate(r.created_at)}
                      </p>
                    </div>
                    <Badge tone={TONE[r.status]}>{STATUS_LABEL[r.status]}</Badge>
                  </div>
                  <div aria-label={`${r.rating} de 5 estrelas`} style={{ color: "#c29a4e", letterSpacing: 2 }}>
                    {"★".repeat(r.rating)}
                    <span style={{ color: "var(--border-strong)" }}>{"★".repeat(5 - r.rating)}</span>
                  </div>
                  {r.comment ? <p style={{ fontSize: 14 }}>{r.comment}</p> : <p className="subtle">Sem comentário.</p>}
                  {r.partner_response && (
                    <div style={{ padding: "10px 12px", borderRadius: 10, background: "var(--surface-2)", boxShadow: "inset 2px 0 0 var(--accent)" }}>
                      <p className="field-hint strong">Resposta do parceiro</p>
                      <p style={{ fontSize: 13, marginTop: 2 }}>{r.partner_response}</p>
                    </div>
                  )}
                  <ModerationActions reviewId={r.id} status={r.status} />
                </div>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
