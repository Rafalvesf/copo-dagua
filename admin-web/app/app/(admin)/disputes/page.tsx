import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { DISPUTE_REASONS, DISPUTE_RESOLUTIONS } from "@/lib/dispute-labels";
import { Badge, Card, Empty, FilterTabs, PageHeader } from "@/components/ui";
import { fmtDate, fmtEur } from "@/lib/format";

// Disputas (deixou de ser "Em breve", 2026-10-20 — migração 109).
type Row = {
  id: string;
  booking_id: string;
  opened_by_role: "couple" | "partner";
  reason: string;
  status: "open" | "resolved";
  resolution: string | null;
  refund_amount: number | null;
  created_at: string;
  resolved_at: string | null;
  bookings: {
    booking_number: string;
    partner_profiles: { business_name: string } | null;
    weddings: { partner_name_1: string | null; partner_name_2: string | null } | null;
  } | null;
};

const FILTERS = [
  { value: "open", label: "Por decidir" },
  { value: "resolved", label: "Resolvidas" },
  { value: "all", label: "Todas" },
];

export default async function DisputesPage({ searchParams }: PageProps<"/disputes">) {
  await requireAdmin();
  const params = await searchParams;
  const status = typeof params.status === "string" ? params.status : "open";

  const supabase = await createClient();
  let q = supabase
    .from("disputes")
    .select(
      "id, booking_id, opened_by_role, reason, status, resolution, refund_amount, created_at, resolved_at, bookings(booking_number, partner_profiles(business_name), weddings(partner_name_1, partner_name_2))",
    )
    .order("created_at", { ascending: status === "open" });
  if (status !== "all") q = q.eq("status", status);
  const { data, error } = await q;
  const rows = (data ?? []) as unknown as Row[];

  return (
    <div className="page">
      <PageHeader
        title="Disputas"
        subtitle="Conflitos entre organizador e parceiro sobre uma reserva. Enquanto estiver aberta, a reserva fica parada e os reembolsos bloqueados."
      />

      <div className="toolbar">
        <FilterTabs current={status} items={FILTERS.map((f) => ({ ...f, href: `/disputes?status=${f.value}` }))} />
      </div>

      <Card flush>
        {error ? (
          <Empty title="Não foi possível carregar as disputas" />
        ) : rows.length === 0 ? (
          <Empty title={status === "open" ? "Nenhuma disputa por decidir" : "Sem disputas neste filtro"} />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Reserva</th>
                  <th>Organizador</th>
                  <th>Aberta por</th>
                  <th>Motivo</th>
                  <th>Estado</th>
                  <th>Aberta a</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((d) => {
                  const w = d.bookings?.weddings;
                  const couple = [w?.partner_name_1, w?.partner_name_2].filter(Boolean).join(" & ") || "Organizador";
                  return (
                    <tr key={d.id}>
                      <td>
                        <Link href={`/disputes/${d.id}`} className="cell-main">
                          {d.bookings?.booking_number ?? "—"}
                        </Link>
                        <span className="cell-sub">{d.bookings?.partner_profiles?.business_name ?? "Parceiro"}</span>
                      </td>
                      <td>{couple}</td>
                      <td>{d.opened_by_role === "couple" ? "Organizador" : "Parceiro"}</td>
                      <td>{DISPUTE_REASONS[d.reason] ?? d.reason}</td>
                      <td>
                        {d.status === "open" ? (
                          <Badge tone="danger">Por decidir</Badge>
                        ) : (
                          <Badge tone="success">
                            {DISPUTE_RESOLUTIONS[d.resolution ?? ""] ?? "Resolvida"}
                            {d.refund_amount ? ` · ${fmtEur(d.refund_amount, true)}` : ""}
                          </Badge>
                        )}
                      </td>
                      <td className="muted nowrap">{fmtDate(d.created_at)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
