import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { BookingStatusBadge } from "@/components/BookingStatusBadge";
import { Card, Empty, FilterTabs, PageHeader } from "@/components/ui";
import { fmtDate, fmtEur } from "@/lib/format";
import type { BookingStatus } from "@/lib/types";

const FILTERS: { value: string; label: string; statuses?: BookingStatus[] }[] = [
  { value: "all", label: "Todas" },
  { value: "awaiting_deposit", label: "A aguardar sinal", statuses: ["awaiting_deposit"] },
  { value: "confirmed", label: "Confirmadas", statuses: ["confirmed"] },
  { value: "problems", label: "Com problemas", statuses: ["payment_overdue", "disputed"] },
  { value: "completed", label: "Concluídas", statuses: ["completed"] },
  { value: "cancelled", label: "Canceladas", statuses: ["cancelled_by_couple", "cancelled_by_partner"] },
  { value: "expired", label: "Expiradas", statuses: ["expired"] },
];

type Rel<T> = T | T[] | null;
const one = <T,>(r: Rel<T>): T | null => (Array.isArray(r) ? (r[0] ?? null) : r);

type Row = {
  id: string;
  booking_number: string;
  event_date: string;
  total_amount: number;
  status: BookingStatus;
  created_at: string;
  partner: Rel<{ business_name: string }>;
  couple: Rel<{ full_name: string }>;
};

export default async function BookingsPage({ searchParams }: PageProps<"/bookings">) {
  await requireAdmin();
  const params = await searchParams;
  const filter = FILTERS.find((f) => f.value === params.status) ?? FILTERS[0];

  const supabase = await createClient();
  let query = supabase
    .from("bookings")
    .select(
      "id, booking_number, event_date, total_amount, status, created_at, partner:partner_profiles!bookings_partner_id_fkey(business_name), couple:profiles!bookings_couple_id_fkey(full_name)",
    )
    .order("created_at", { ascending: false });
  if (filter.statuses) query = query.in("status", filter.statuses);

  const [{ data, error }, { data: all }] = await Promise.all([query, supabase.from("bookings").select("status")]);
  const rows = (data ?? []) as unknown as Row[];
  const statuses = ((all ?? []) as { status: BookingStatus }[]).map((r) => r.status);
  const count = (f: (typeof FILTERS)[number]) => (f.statuses ? statuses.filter((s) => f.statuses!.includes(s)).length : statuses.length);

  return (
    <div className="page">
      <PageHeader
        title="Reservas"
        subtitle="Cada reserva nasce de uma proposta aceite. O número (WED-1, BAP-1…) é por parceiro, por isso aparece sempre com o nome do parceiro."
      />

      <div className="toolbar">
        <FilterTabs
          current={filter.value}
          items={FILTERS.map((f) => ({ value: f.value, label: f.label, href: `/bookings?status=${f.value}`, count: count(f) }))}
        />
      </div>

      <Card flush>
        {error ? (
          <Empty title="Não foi possível carregar a lista">Tenta atualizar a página.</Empty>
        ) : rows.length === 0 ? (
          <Empty title="Sem reservas neste filtro" />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Reserva</th>
                  <th>Organizador</th>
                  <th>Data do evento</th>
                  <th>Criada em</th>
                  <th className="num">Valor</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((b) => (
                  <tr key={b.id}>
                    <td>
                      <Link href={`/bookings/${b.id}`} className="cell-main">
                        {b.booking_number}
                      </Link>
                      <span className="cell-sub">{one(b.partner)?.business_name ?? "—"}</span>
                    </td>
                    <td>{one(b.couple)?.full_name ?? "—"}</td>
                    <td className="nowrap">{fmtDate(b.event_date)}</td>
                    <td className="muted nowrap">{fmtDate(b.created_at)}</td>
                    <td className="num">{fmtEur(b.total_amount)}</td>
                    <td>
                      <BookingStatusBadge status={b.status} />
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
