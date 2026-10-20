import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { EVENT_TYPES, eventStatusLabel, eventTypeLabel } from "@/lib/event-types";
import { Badge, Card, Empty, FilterTabs, PageHeader } from "@/components/ui";
import { fmtDate } from "@/lib/format";

// Eventos (antes "Casamentos", 2026-10-20): a app já tem vários tipos de
// evento — batizados, aniversários, empresas… — com prefixo próprio no
// número das reservas.
type Row = {
  id: string;
  partner_name_1: string | null;
  partner_name_2: string | null;
  wedding_date: string | null;
  location: string | null;
  status: string;
  event_type: string | null;
  event_type_other: string | null;
  bookings: { count: number }[];
  guests: { count: number }[];
};

export default async function WeddingsPage({ searchParams }: PageProps<"/weddings">) {
  await requireAdmin();
  const params = await searchParams;
  const type = typeof params.type === "string" ? params.type : "all";

  const supabase = await createClient();
  let q = supabase
    .from("weddings")
    .select("id, partner_name_1, partner_name_2, wedding_date, location, status, event_type, event_type_other, bookings(count), guests(count)")
    .order("created_at", { ascending: false });
  if (type !== "all") q = q.eq("event_type", type);
  const { data, error } = await q;
  const rows = (data ?? []) as unknown as Row[];

  const filters = [{ value: "all", label: "Todos" }, ...Object.entries(EVENT_TYPES).map(([k, v]) => ({ value: k, label: v.label }))];

  return (
    <div className="page">
      <PageHeader title="Eventos" subtitle="Todos os eventos criados pelos organizadores na app: casamentos, batizados, aniversários, empresas…" />

      <div className="toolbar">
        <FilterTabs current={type} items={filters.map((f) => ({ ...f, href: f.value === "all" ? "/weddings" : `/weddings?type=${f.value}` }))} />
      </div>

      <Card flush>
        {error ? (
          <Empty title="Não foi possível carregar a lista">Tenta atualizar a página.</Empty>
        ) : rows.length === 0 ? (
          <Empty title="Sem eventos neste filtro" />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Evento</th>
                  <th>Tipo</th>
                  <th>Data</th>
                  <th>Local</th>
                  <th className="num">Convidados</th>
                  <th className="num">Reservas</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((w) => (
                  <tr key={w.id}>
                    <td>
                      <Link href={`/weddings/${w.id}`} className="cell-main">
                        {[w.partner_name_1, w.partner_name_2].filter(Boolean).join(" & ") || "Sem nome"}
                      </Link>
                    </td>
                    <td>
                      {eventTypeLabel(w.event_type, w.event_type_other)}
                      <span className="cell-sub">Reservas {EVENT_TYPES[w.event_type ?? ""]?.prefix ?? "EVT"}-…</span>
                    </td>
                    <td className="nowrap">{fmtDate(w.wedding_date)}</td>
                    <td className="muted">{w.location ?? "—"}</td>
                    <td className="num">{w.guests?.[0]?.count ?? 0}</td>
                    <td className="num">{w.bookings?.[0]?.count ?? 0}</td>
                    <td>
                      <Badge tone={w.status === "planning" ? "accent" : w.status === "completed" ? "success" : "neutral"}>{eventStatusLabel(w.status)}</Badge>
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
