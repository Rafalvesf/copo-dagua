import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { RefundPaymentForm, RunRefundButton } from "@/components/RefundForms";
import { refundPayment, runBookingRefund } from "./actions";
import { Alert, Badge, Card, Empty, PageHeader, Stat } from "@/components/ui";
import { fmtDate } from "@/lib/format";

// Reembolsos (pedido do utilizador, 2026-10-20).
// - "Por tratar": reservas canceladas com pagamentos ainda pagos. Se a
//   regra automática dá direito a reembolso e falhou, "Reembolsar agora";
//   se não dá (fora de prazo / sinal não reembolsável), reembolso manual.
// - "Feitos": pagamentos já devolvidos (total ou parcialmente).

type Pay = {
  id: string;
  booking_id: string;
  type: string;
  amount: number;
  refunded_amount: number;
  status: string;
  paid_at: string | null;
  updated_at: string;
  bookings: {
    booking_number: string;
    status: string;
    partner_profiles: { business_name: string } | null;
    weddings: { partner_name_1: string | null; partner_name_2: string | null } | null;
  } | null;
};

const TYPE_LABELS: Record<string, string> = { deposit: "Sinal", final_payment: "Restante" };

export default async function RefundsPage() {
  await requireAdmin();
  const supabase = await createClient();

  const select =
    "id, booking_id, type, amount, refunded_amount, status, paid_at, updated_at, bookings!inner(booking_number, status, partner_profiles(business_name), weddings(partner_name_1, partner_name_2))";

  const [{ data: pendingRows, error }, { data: doneRows }, { data: settings }] = await Promise.all([
    supabase
      .from("payments")
      .select(select)
      .eq("status", "paid")
      .in("bookings.status", ["cancelled_by_couple", "cancelled_by_partner", "disputed"])
      .order("paid_at", { ascending: false }),
    supabase
      .from("payments")
      .select(select)
      .gt("refunded_amount", 0)
      .order("updated_at", { ascending: false })
      .limit(50),
    supabase.from("platform_settings").select("platform_commission_percentage").eq("id", 1).single(),
  ]);

  const pct = Number(settings?.platform_commission_percentage ?? 0);
  const paidByCouple = (amount: number) => Math.round(amount * (100 + pct)) / 100;
  const pending = (pendingRows ?? []) as unknown as Pay[];
  const done = (doneRows ?? []) as unknown as Pay[];

  // Direito a reembolso automático: gravado no cancelamento.
  const cancelledIds = [...new Set(pending.filter((p) => p.bookings?.status?.startsWith("cancelled")).map((p) => p.booking_id))];
  const eligible = new Map<string, { refund: boolean; why: string }>();
  if (cancelledIds.length > 0) {
    const { data: events } = await supabase
      .from("booking_events")
      .select("booking_id, event_type, metadata, created_at")
      .in("booking_id", cancelledIds)
      .in("event_type", ["cancelled_by_couple", "cancelled_by_partner"])
      .order("created_at", { ascending: false });
    for (const e of events ?? []) {
      if (eligible.has(e.booking_id as string)) continue;
      const m = (e.metadata ?? {}) as Record<string, unknown>;
      const refund = m.refund_required === true;
      const why = refund
        ? "Tem direito a reembolso — a regra automática ainda não correu ou falhou."
        : m.deposit_refundable === false
          ? "Sinal não reembolsável (escolha do parceiro)."
          : "refund_deposit" in m
            ? `Cancelou depois das ${m.deposit_window_hours ?? 48} h — sinal retido${m.refund_final === false && (m.days_until_event as number) < (m.penalty_days as number) ? "; restante também (menos de " + m.penalty_days + " dias)" : ""}.`
            : m.penalty_applied === true
              ? `Cancelado a ${m.days_until_event ?? "?"} dias do evento — sinal retido.`
              : "Sem direito a reembolso automático.";
      eligible.set(e.booking_id as string, { refund, why });
    }
  }

  const totalDone = done.reduce((a, p) => a + Number(p.refunded_amount), 0);

  return (
    <div className="page">
      <PageHeader
        title="Reembolsos"
        subtitle="Dinheiro a devolver de reservas canceladas ou em disputa, e o que já foi devolvido. As regras automáticas tratam da maioria; aqui ficam os casos que precisam de ti."
      />

      <div className="grid grid-3">
        <Stat label="Por tratar" value={String(pending.length)} hint="pagamentos de reservas canceladas" tone={pending.length > 0 ? "warning" : undefined} />
        <Stat label="Reembolsos feitos" value={String(done.length)} hint="últimos 50" />
        <Stat label="Total devolvido" value={eur(totalDone)} hint="aos organizadores" />
      </div>

      {error && <Alert tone="danger">Não foi possível carregar os reembolsos.</Alert>}

      <Card title="Por tratar" subtitle="Abre a reserva para ver o histórico completo." flush>
        {pending.length === 0 ? (
          <Empty title="Nada por tratar">Quando uma reserva paga for cancelada, aparece aqui.</Empty>
        ) : (
          <ul className="list">
            {pending.map((p) => {
              const e = eligible.get(p.booking_id);
              const max = Math.max(0, paidByCouple(Number(p.amount)) - Number(p.refunded_amount));
              const disputed = p.bookings?.status === "disputed";
              return (
                <li key={p.id} style={{ alignItems: "flex-start", flexWrap: "wrap" }}>
                  <div className="list-main" style={{ minWidth: 220 }}>
                    <Link href={`/bookings/${p.booking_id}`} className="list-title">
                      {ref(p)}
                    </Link>
                    <p className="list-sub">
                      {couple(p)} · {TYPE_LABELS[p.type] ?? p.type} · pago {eur(paidByCouple(Number(p.amount)))}
                      {Number(p.refunded_amount) > 0 && ` · já devolvido ${eur(Number(p.refunded_amount))}`}
                    </p>
                    <div style={{ marginTop: 8 }}>
                      {disputed ? (
                        <Badge tone="danger">Em disputa — decide em Disputas</Badge>
                      ) : e?.refund ? (
                        <Badge tone="warning">Tem direito a reembolso</Badge>
                      ) : (
                        <Badge tone="neutral">{e?.why ?? "Sem regra registada"}</Badge>
                      )}
                    </div>
                  </div>
                  <div className="stack-sm" style={{ alignItems: "flex-end" }}>
                    {e?.refund && <RunRefundButton bookingId={p.booking_id} action={runBookingRefund} />}
                    {!disputed && <RefundPaymentForm paymentId={p.id} maxAmount={max} action={refundPayment} />}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </Card>

      <Card title="Já devolvidos" flush>
        {done.length === 0 ? (
          <Empty>Ainda não houve reembolsos.</Empty>
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Reserva</th>
                  <th>Organizador</th>
                  <th>Pagamento</th>
                  <th className="num">Devolvido</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {done.map((p) => (
                  <tr key={p.id}>
                    <td>
                      <Link href={`/bookings/${p.booking_id}`} className="cell-main">
                        {p.bookings?.booking_number ?? "—"}
                      </Link>
                      <span className="cell-sub">{p.bookings?.partner_profiles?.business_name ?? "Parceiro"}</span>
                    </td>
                    <td>{couple(p)}</td>
                    <td>{TYPE_LABELS[p.type] ?? p.type}</td>
                    <td className="num">
                      {eur(Number(p.refunded_amount))}
                      {p.status !== "refunded" && <span className="cell-sub">parcial</span>}
                    </td>
                    <td className="muted nowrap">{fmtDate(p.updated_at)}</td>
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

function ref(p: Pay) {
  return `${p.bookings?.booking_number ?? "—"} · ${p.bookings?.partner_profiles?.business_name ?? "Parceiro"}`;
}
function couple(p: Pay) {
  const w = p.bookings?.weddings;
  const a = w?.partner_name_1 ?? "";
  const b = w?.partner_name_2 ?? "";
  return a && b ? `${a} & ${b}` : a || b || "Organizador";
}
function eur(n: number) {
  return `${n.toLocaleString("pt-PT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}

