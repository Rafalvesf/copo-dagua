import Link from "next/link";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import { actorLabel, bookingEventLabel } from "@/lib/audit-labels";
import { PaymentStatusBadge } from "@/components/PaymentStatusBadge";
import { RefundPaymentForm } from "@/components/RefundForms";
import { refundPayment } from "../../refunds/actions";
import { createClient } from "@/lib/supabase/server";
import { BookingStatusBadge } from "@/components/BookingStatusBadge";
import { Alert, Card, DetailList, PageHeader, Stat } from "@/components/ui";
import { fmtDate, fmtDateTime, fmtEur } from "@/lib/format";
import { SimpleActionButton, AmountVerificationForm } from "@/components/ActionButtons";
import { BOOKING_ACTIONS_BY_STATUS } from "@/lib/types";
import { confirmDeposit, completeBooking } from "./actions";
import type { Booking, BookingEvent, PaymentStatus } from "@/lib/types";

export default async function BookingDetailPage(props: PageProps<"/bookings/[id]">) {
  await requireAdmin();
  const { id } = await props.params;

  const supabase = await createClient();
  const { data: booking } = await supabase.from("bookings").select("*").eq("id", id).single();

  if (!booking) {
    notFound();
  }

  const b = booking as Booking;

  const [{ data: events }, { data: couple }, { data: partner }, { data: pays }, { data: proposal }, { data: settings }, { data: openDispute }] =
    await Promise.all([
      supabase.from("booking_events").select("*").eq("booking_id", id).order("created_at", { ascending: false }),
      supabase.from("profiles").select("id, full_name").eq("id", b.couple_id).maybeSingle(),
      supabase.from("partner_profiles").select("id, business_name").eq("id", b.partner_id).maybeSingle(),
      supabase.from("payments").select("id, type, amount, refunded_amount, status, paid_at").eq("booking_id", id).order("created_at"),
      supabase.from("proposals").select("deposit_refundable").eq("id", b.proposal_id).maybeSingle(),
      supabase.from("platform_settings").select("platform_commission_percentage").eq("id", 1).single(),
      supabase.from("disputes").select("id").eq("booking_id", id).eq("status", "open").maybeSingle(),
    ]);
  const pct = Number(settings?.platform_commission_percentage ?? 0);
  const paidByCouple = (a: number) => Math.round(a * (100 + pct)) / 100;
  const payments = (pays ?? []) as {
    id: string;
    type: string;
    amount: number;
    refunded_amount: number | null;
    status: PaymentStatus;
    paid_at: string | null;
  }[];

  const entries = (events ?? []) as BookingEvent[];
  const availableActions = BOOKING_ACTIONS_BY_STATUS[b.status];

  const remaining = Math.max(0, Number(b.total_amount) - Number(b.deposit_amount));

  return (
    <div className="page">
      <PageHeader
        back={{ href: "/bookings", label: "Reservas" }}
        title={`${b.booking_number} · ${partner?.business_name ?? "Parceiro"}`}
        badge={<BookingStatusBadge status={b.status} />}
        subtitle={`Evento a ${fmtDate(b.event_date)} · criada a ${fmtDate(b.created_at)}`}
      />

      {openDispute && (
        <Alert tone="danger">
          <span>
            <strong>Reserva em disputa.</strong> Os reembolsos ficam bloqueados até decidires.{" "}
            <Link href={`/disputes/${openDispute.id}`} className="strong" style={{ textDecoration: "underline" }}>
              Abrir disputa
            </Link>
          </span>
        </Alert>
      )}

      <div className="grid grid-main-side">
        <div className="stack">
          <div className="grid grid-3">
            <Stat label="Valor do serviço" value={fmtEur(b.total_amount)} hint={`organizador paga ${fmtEur(paidByCouple(Number(b.total_amount)), true)}`} />
            <Stat label="Sinal" value={fmtEur(b.deposit_amount)} hint={proposal?.deposit_refundable === false ? "não reembolsável" : "reembolsável nas 48 h após pagar"} />
            <Stat label="Restante" value={fmtEur(remaining)} hint="pago mais perto do evento" />
          </div>

          <Card title="Pagamentos" subtitle="Valores pagos pelo organizador (já com comissão)." flush>
            {payments.length === 0 ? (
              <div className="empty">Ainda sem pagamentos.</div>
            ) : (
              <div className="table-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Tipo</th>
                      <th>Pago em</th>
                      <th className="num">Valor</th>
                      <th className="num">Devolvido</th>
                      <th>Estado</th>
                      <th />
                    </tr>
                  </thead>
                  <tbody>
                    {payments.map((p) => {
                      const paid = paidByCouple(Number(p.amount));
                      const refunded = Number(p.refunded_amount ?? 0);
                      return (
                        <tr key={p.id}>
                          <td className="strong">{p.type === "deposit" ? "Sinal" : "Restante"}</td>
                          <td className="muted nowrap">{fmtDate(p.paid_at)}</td>
                          <td className="num">{fmtEur(paid, true)}</td>
                          <td className="num muted">{refunded > 0 ? fmtEur(refunded, true) : "—"}</td>
                          <td>
                            <PaymentStatusBadge status={p.status} />
                          </td>
                          <td className="num">
                            {p.status === "paid" && !openDispute && (
                              <RefundPaymentForm paymentId={p.id} maxAmount={Math.max(0, paid - refunded)} action={refundPayment} />
                            )}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
          </Card>

          <Card title="Histórico">
            {entries.length === 0 ? (
              <p className="muted">Sem eventos registados.</p>
            ) : (
              <ul className="timeline">
                {entries.map((e) => (
                  <li key={e.id}>
                    <p>
                      {bookingEventLabel(e.event_type)} <span className="muted">· {actorLabel(e.actor_type)}</span>
                    </p>
                    <p className="timeline-time">{fmtDateTime(e.created_at)}</p>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>

        <div className="stack">
          <Card title="Pessoas">
            <DetailList
              items={[
                {
                  label: "Organizador",
                  value: couple ? (
                    <Link href={`/users/${couple.id}`} className="link">
                      {couple.full_name}
                    </Link>
                  ) : (
                    "—"
                  ),
                },
                {
                  label: "Parceiro",
                  value: partner ? (
                    <Link href={`/partners/${partner.id}`} className="link">
                      {partner.business_name}
                    </Link>
                  ) : (
                    "—"
                  ),
                },
                ...(b.status === "awaiting_deposit" ? [{ label: "Prazo do sinal", value: fmtDateTime(b.hold_expires_at) }] : []),
              ]}
            />
          </Card>

          {availableActions.length > 0 && (
            <Card title="Ações manuais" subtitle="Só para pagamentos feitos fora da app (ex.: transferência). Não cobram nada na Stripe.">
              <div className="stack-sm">
                {availableActions.includes("confirm_deposit") && (
                  <AmountVerificationForm
                    id={b.id}
                    idFieldName="booking_id"
                    amountFieldName="amount_received"
                    label="Confirmar sinal recebido"
                    expectedAmount={b.deposit_amount}
                    action={confirmDeposit}
                  />
                )}
                {availableActions.includes("complete") && (
                  <SimpleActionButton id={b.id} label="Marcar como concluída" action={completeBooking} variant="secondary" />
                )}
              </div>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
