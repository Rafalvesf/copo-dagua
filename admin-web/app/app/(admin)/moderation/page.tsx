import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { ModerationActions } from "./moderation-controls";
import type { Review, ReviewStatus } from "@/lib/types";

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

  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>Avaliações e Denúncias</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 4, maxWidth: 640 }}>
        Moderação de avaliações reais (`reviews`, só reservas concluídas podem ser avaliadas). Denunciadas saem do
        Marketplace/perfil público de imediato — nunca um DELETE, só `published`/`flagged`/`removed`.
      </p>

      <div style={{ display: "flex", gap: 8, margin: "24px 0", flexWrap: "wrap" }}>
        {FILTERS.map((f) => (
          <Link
            key={f.value}
            href={`/moderation?status=${f.value}`}
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              background: status === f.value ? "var(--ink)" : "var(--surface)",
              color: status === f.value ? "var(--surface)" : "var(--ink)",
              border: "1px solid var(--border-muted)",
            }}
          >
            {f.label}
          </Link>
        ))}
      </div>

      {error && <p style={{ color: "var(--status-rejected-fg)" }}>Não foi possível carregar a lista.</p>}
      {!error && sorted?.length === 0 && <p style={{ color: "var(--ink-muted)" }}>Sem avaliações neste filtro.</p>}

      {!error && sorted && sorted.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {sorted.map((r) => {
            const coupleName = r.weddings
              ? r.weddings.partner_name_2
                ? `${r.weddings.partner_name_1} & ${r.weddings.partner_name_2}`
                : r.weddings.partner_name_1
              : "Casal desconhecido";
            return (
              <div
                key={r.id}
                style={{
                  padding: 16,
                  borderRadius: 14,
                  background: "var(--surface)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <div>
                    <p style={{ fontWeight: 600 }}>
                      {r.partner_profiles?.business_name ?? "Parceiro desconhecido"}
                      <span style={{ color: "var(--ink-muted)", fontWeight: 400 }}> · {coupleName}</span>
                    </p>
                    <p style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 2 }}>
                      {r.bookings?.booking_number ?? r.booking_id} · {new Date(r.created_at).toLocaleDateString("pt-PT")}
                    </p>
                  </div>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      padding: "4px 10px",
                      borderRadius: 999,
                      background:
                        r.status === "flagged"
                          ? "var(--status-rejected-bg, #fde2e2)"
                          : r.status === "removed"
                            ? "var(--border-muted)"
                            : "var(--status-published-bg, #e2f5e9)",
                      color:
                        r.status === "flagged"
                          ? "var(--status-rejected-fg)"
                          : r.status === "removed"
                            ? "var(--ink-muted)"
                            : "var(--status-published-fg)",
                    }}
                  >
                    {STATUS_LABEL[r.status]}
                  </span>
                </div>

                <div style={{ marginTop: 10, fontSize: 14 }}>
                  {"★".repeat(r.rating)}
                  {"☆".repeat(5 - r.rating)}
                </div>
                {r.comment && <p style={{ marginTop: 6, fontSize: 13.5 }}>{r.comment}</p>}
                {r.partner_response && (
                  <div
                    style={{
                      marginTop: 10,
                      padding: 10,
                      borderRadius: 10,
                      background: "var(--background)",
                    }}
                  >
                    <p style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-muted)" }}>Resposta do parceiro</p>
                    <p style={{ fontSize: 13, marginTop: 3 }}>{r.partner_response}</p>
                  </div>
                )}

                <div style={{ marginTop: 12 }}>
                  <ModerationActions reviewId={r.id} status={r.status} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
