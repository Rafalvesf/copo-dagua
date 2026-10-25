import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import { actorLabel, bookingEventLabel } from "@/lib/audit-labels";
import { createClient } from "@/lib/supabase/server";
import { BookingStatusBadge } from "@/components/BookingStatusBadge";
import { PaymentStatusBadge } from "@/components/PaymentStatusBadge";
import { ResolveDisputeForm } from "@/components/RefundForms";
import { DISPUTE_REASONS, DISPUTE_RESOLUTIONS } from "@/lib/dispute-labels";
import { resolveDispute } from "../../refunds/actions";
import { Badge, Card, DetailList, PageHeader } from "@/components/ui";
import { fmtDate, fmtDateTime } from "@/lib/format";
import type { BookingStatus, PaymentStatus } from "@/lib/types";

type Dispute = {
  id: string;
  booking_id: string;
  opened_by_role: "couple" | "partner";
  reason: string;
  description: string;
  status: "open" | "resolved";
  resolution: string | null;
  refund_amount: number | null;
  admin_note: string | null;
  created_at: string;
  resolved_at: string | null;
  opener: { full_name: string } | null;
};

export default async function DisputeDetailPage(props: PageProps<"/disputes/[id]">) {
  await requireAdmin();
  const { id } = await props.params;
  const supabase = await createClient();

  const { data } = await supabase
    .from("disputes")
    .select("*, opener:profiles!disputes_opened_by_fkey(full_name)")
    .eq("id", id)
    .maybeSingle();
  if (!data) notFound();
  const d = data as unknown as Dispute;

  const [{ data: booking }, { data: pays }, { data: events }, { data: settings }] = await Promise.all([
    supabase
      .from("bookings")
      .select(
        "id, booking_number, status, event_date, total_amount, deposit_amount, partner_id, couple_id, partner_profiles(business_name), weddings(partner_name_1, partner_name_2), proposals(title, deposit_refundable)",
      )
      .eq("id", d.booking_id)
      .single(),
    supabase
      .from("payments")
      .select("id, type, amount, refunded_amount, status, paid_at")
      .eq("booking_id", d.booking_id)
      .order("created_at"),
    supabase
      .from("booking_events")
      .select("id, event_type, actor_type, created_at")
      .eq("booking_id", d.booking_id)
      .order("created_at", { ascending: false }),
    supabase.from("platform_settings").select("platform_commission_percentage").eq("id", 1).single(),
  ]);

  const b = booking as unknown as {
    id: string;
    booking_number: string;
    status: BookingStatus;
    event_date: string;
    total_amount: number;
    partner_id: string;
    couple_id: string;
    partner_profiles: { business_name: string } | null;
    weddings: { partner_name_1: string | null; partner_name_2: string | null } | null;
    proposals: { title: string; deposit_refundable: boolean } | null;
  };
  const pct = Number(settings?.platform_commission_percentage ?? 0);
  const paidByCouple = (a: number) => Math.round(a * (100 + pct)) / 100;
  const payments = (pays ?? []) as { id: string; type: string; amount: number; refunded_amount: number; status: PaymentStatus; paid_at: string | null }[];
  const refundable = payments
    .filter((p) => p.status === "paid")
    .reduce((a, p) => a + Math.max(0, paidByCouple(Number(p.amount)) - Number(p.refunded_amount)), 0);
  const couple = [b?.weddings?.partner_name_1, b?.weddings?.partner_name_2].filter(Boolean).join(" & ") || "Organizador";
  const partnerName = b?.partner_profiles?.business_name ?? "Parceiro";

  return (
    <div className="page">
      <PageHeader
        back={{ href: "/disputes", label: "Disputas" }}
        title={`Disputa · ${b?.booking_number ?? ""} · ${partnerName}`}
        badge={d.status === "open" ? <Badge tone="danger">Por decidir</Badge> : <Badge tone="success">Resolvida</Badge>}
        subtitle={`Aberta por ${d.opened_by_role === "couple" ? "organizador" : "parceiro"}${d.opener?.full_name ? ` (${d.opener.full_name})` : ""} a ${fmtDateTime(d.created_at)}`}
      />

      <div className="grid grid-main-side">
        <div className="stack">
          <Card title={DISPUTE_REASONS[d.reason] ?? d.reason} subtitle="O que foi reportado" tone="warning">
            <p style={{ whiteSpace: "pre-wrap", maxWidth: "68ch" }}>{d.description}</p>
          </Card>

          <Card title={d.status === "open" ? "Decidir" : "Decisão"} tone={d.status === "open" ? "accent" : undefined}>
            {d.status === "open" ? (
              <ResolveDisputeForm disputeId={d.id} maxAmount={Math.round(refundable * 100) / 100} action={resolveDispute} />
            ) : (
              <div className="stack">
                <DetailList
                  items={[
                    { label: "Decisão", value: DISPUTE_RESOLUTIONS[d.resolution ?? ""] ?? "—" },
                    ...(d.refund_amount != null ? [{ label: "Devolvido", value: eur(Number(d.refund_amount)) }] : []),
                    { label: "Fechada a", value: fmtDateTime(d.resolved_at) },
                  ]}
                />
                {d.admin_note && <p style={{ whiteSpace: "pre-wrap" }}>{d.admin_note}</p>}
              </div>
            )}
          </Card>

          <Card title="Pagamentos da reserva" subtitle="Valores pagos pelo organizador (com comissão)." flush>
            {payments.length === 0 ? (
              <div className="empty">Sem pagamentos.</div>
            ) : (
              <div className="table-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th className="num">Pago</th>
                      <th className="num">Devolvido</th>
                      <th>Estado</th>
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((p) => (
                      <tr key={p.id}>
                        <td className="strong">{p.type === "deposit" ? "Sinal" : "Restante"}</td>
                        <td className="num">{eur(paidByCouple(Number(p.amount)))}</td>
                        <td className="num muted">{Number(p.refunded_amount) > 0 ? eur(Number(p.refunded_amount)) : "—"}</td>
                        <td>
                          <PaymentStatusBadge status={p.status} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>

        <div className="stack">
          <Card title="Reserva" actions={b && <BookingStatusBadge status={b.status} />}>
            <DetailList
              items={[
                { label: "Reserva", value: <Link href={`/bookings/${d.booking_id}`} className="link">{b?.booking_number ?? "Abrir"}</Link> },
                { label: "Organizador", value: <Link href={`/users/${b?.couple_id}`} className="link">{couple}</Link> },
                { label: "Parceiro", value: <Link href={`/partners/${b?.partner_id}`} className="link">{partnerName}</Link> },
                { label: "Serviço", value: b?.proposals?.title ?? "—" },
                { label: "Evento", value: fmtDate(b?.event_date) },
                { label: "Valor", value: b ? eur(Number(b.total_amount)) : "—" },
                { label: "Sinal", value: b?.proposals?.deposit_refundable === false ? "Não reembolsável" : "Reembolsável" },
              ]}
            />
          </Card>
          <Card title="Histórico">
            <ul className="timeline">
              {(events ?? []).map((e) => (
                <li key={e.id as string}>
                  <p>
                    {bookingEventLabel(e.event_type as string)} <span className="muted">· {actorLabel(e.actor_type as string)}</span>
                  </p>
                  <p className="timeline-time">{fmtDateTime(e.created_at as string)}</p>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}

function eur(n: number) {
  return `${n.toLocaleString("pt-PT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}
