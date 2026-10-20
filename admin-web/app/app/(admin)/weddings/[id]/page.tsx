import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import type { BookingStatus, Wedding } from "@/lib/types";
import { eventStatusLabel, eventTypeLabel } from "@/lib/event-types";
import { BookingStatusBadge } from "@/components/BookingStatusBadge";
import { Badge, Card, DetailList, PageHeader, Stat } from "@/components/ui";
import { fmtDate, fmtEur } from "@/lib/format";

export default async function WeddingDetailPage(props: PageProps<"/weddings/[id]">) {
  await requireAdmin();
  const { id } = await props.params;

  const supabase = await createClient();
  const [{ data: wedding }, { data: collaborators }, { data: bookings }, { count: guestCount }] = await Promise.all([
    supabase.from("weddings").select("*").eq("id", id).single(),
    supabase.from("wedding_collaborators").select("invited_email, status").eq("wedding_id", id),
    supabase
      .from("bookings")
      .select("id, booking_number, status, total_amount, event_date, partner_profiles(business_name)")
      .eq("wedding_id", id)
      .order("created_at"),
    supabase.from("guests").select("id", { count: "exact", head: true }).eq("wedding_id", id),
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

  const ev = w as unknown as { event_type?: string; event_type_other?: string };
  type B = { id: string; booking_number: string; status: BookingStatus; total_amount: number; partner_profiles: unknown };
  const rows = (bookings ?? []) as unknown as B[];

  return (
    <div className="page">
      <PageHeader
        back={{ href: "/weddings", label: "Eventos" }}
        title={`${w.partner_name_1}${w.partner_name_2 ? ` & ${w.partner_name_2}` : ""}`}
        badge={<Badge tone={w.status === "planning" ? "accent" : "neutral"}>{eventStatusLabel(w.status)}</Badge>}
        subtitle={`${eventTypeLabel(ev.event_type, ev.event_type_other)} · ${w.wedding_date ? fmtDate(w.wedding_date) : "data por definir"}${w.location ? ` · ${w.location}` : ""}`}
      />

      <div className="grid grid-4">
        <Stat label="Convidados na lista" value={String(guestCount ?? 0)} hint={w.estimated_guests ? `estimados: ${w.estimated_guests}` : undefined} />
        <Stat label="Reservas" value={String(rows.length)} />
        <Stat label="Valor reservado" value={fmtEur(rows.reduce((t, b) => t + Number(b.total_amount), 0))} />
        <Stat label="Orçamento estimado" value={w.estimated_budget ? fmtEur(w.estimated_budget) : "—"} />
      </div>

      <div className="grid grid-main-side">
        <Card title="Reservas" flush>
          {rows.length === 0 ? (
            <div className="empty">Ainda sem reservas.</div>
          ) : (
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Reserva</th>
                    <th className="num">Valor</th>
                    <th>Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((b) => {
                    const pp = b.partner_profiles as { business_name: string } | { business_name: string }[] | null;
                    const name = (Array.isArray(pp) ? pp[0] : pp)?.business_name ?? "Parceiro";
                    return (
                      <tr key={b.id}>
                        <td>
                          <Link href={`/bookings/${b.id}`} className="cell-main">
                            {b.booking_number}
                          </Link>
                          <span className="cell-sub">{name}</span>
                        </td>
                        <td className="num">{fmtEur(b.total_amount)}</td>
                        <td>
                          <BookingStatusBadge status={b.status} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </Card>

        <div className="stack">
          <Card title="Detalhes">
            <DetailList
              items={[
                {
                  label: "Organizador",
                  value: ownerProfile ? (
                    <Link href={`/users/${ownerProfile.id}`} className="link">
                      {ownerProfile.full_name}
                    </Link>
                  ) : (
                    "—"
                  ),
                },
                { label: "Espaço", value: w.venue ?? "—" },
                { label: "Local", value: w.location ?? "—" },
              ]}
            />
          </Card>
          <Card title="Colaboradores" flush>
            {!collaborators || collaborators.length === 0 ? (
              <div className="empty" style={{ padding: 20 }}>Nenhum colaborador convidado.</div>
            ) : (
              <ul className="list">
                {collaborators.map((c) => (
                  <li key={c.invited_email}>
                    <span className="list-main" style={{ overflowWrap: "anywhere" }}>{c.invited_email}</span>
                    <Badge tone={c.status === "accepted" ? "success" : "neutral"}>{c.status === "accepted" ? "Aceite" : c.status === "pending" ? "Pendente" : c.status}</Badge>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
}
