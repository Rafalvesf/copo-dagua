import Link from "next/link";
import type { ReactNode } from "react";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { RefundPaymentForm, RunRefundButton } from "@/components/RefundForms";
import { refundPayment, runBookingRefund } from "./actions";

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
          : m.penalty_applied === true
            ? `Cancelado a ${m.days_until_event ?? "?"} dias do evento — sinal retido.`
            : "Sem direito a reembolso automático.";
      eligible.set(e.booking_id as string, { refund, why });
    }
  }

  const totalDone = done.reduce((a, p) => a + Number(p.refunded_amount), 0);

  return (
    <div style={{ overflowY: "auto", minHeight: 0 }}>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>Reembolsos</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 4, marginBottom: 24 }}>
        Reservas canceladas ou em disputa com dinheiro por devolver, e reembolsos já feitos. Total devolvido (últimos 50):{" "}
        <strong>{eur(totalDone)}</strong>
      </p>

      {error && <p style={{ color: "var(--status-rejected-fg)" }}>Não foi possível carregar os reembolsos.</p>}

      <Card title={`Por tratar (${pending.length})`}>
        {pending.length === 0 ? (
          <Empty>Nada por tratar.</Empty>
        ) : (
          <ul style={list}>
            {pending.map((p) => {
              const e = eligible.get(p.booking_id);
              const max = Math.max(0, paidByCouple(Number(p.amount)) - Number(p.refunded_amount));
              return (
                <li key={p.id} style={row}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <Link href={`/bookings/${p.booking_id}`} style={{ fontWeight: 600 }}>
                      {ref(p)}
                    </Link>
                    <div style={muted}>
                      {couple(p)} · {TYPE_LABELS[p.type] ?? p.type} · pago {eur(paidByCouple(Number(p.amount)))}
                      {Number(p.refunded_amount) > 0 && ` · já devolvido ${eur(Number(p.refunded_amount))}`}
                    </div>
                    <div style={{ ...muted, marginTop: 4 }}>
                      {p.bookings?.status === "disputed" ? "Em disputa — decide em Disputas." : e?.why ?? "—"}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 8, alignItems: "flex-end" }}>
                    {e?.refund && <RunRefundButton bookingId={p.booking_id} action={runBookingRefund} />}
                    {p.bookings?.status !== "disputed" && (
                      <RefundPaymentForm paymentId={p.id} maxAmount={max} action={refundPayment} />
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </Card>

      <Card title="Feitos">
        {done.length === 0 ? (
          <Empty>Ainda não houve reembolsos.</Empty>
        ) : (
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
            <thead>
              <tr style={{ textAlign: "left", color: "var(--ink-muted)" }}>
                <th style={{ padding: "8px 0" }}>Reserva</th>
                <th>Organizador</th>
                <th>Pagamento</th>
                <th>Devolvido</th>
                <th>Data</th>
              </tr>
            </thead>
            <tbody>
              {done.map((p) => (
                <tr key={p.id} style={{ borderTop: "1px solid var(--border-muted)" }}>
                  <td style={{ padding: "10px 0" }}>
                    <Link href={`/bookings/${p.booking_id}`} style={{ fontWeight: 600 }}>
                      {ref(p)}
                    </Link>
                  </td>
                  <td>{couple(p)}</td>
                  <td>{TYPE_LABELS[p.type] ?? p.type}</td>
                  <td>
                    {eur(Number(p.refunded_amount))}
                    {p.status !== "refunded" && <span style={muted}> (parcial)</span>}
                  </td>
                  <td style={muted}>{new Date(p.updated_at).toLocaleDateString("pt-PT")}</td>
                </tr>
              ))}
            </tbody>
          </table>
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

function Card({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ background: "var(--surface)", borderRadius: 16, boxShadow: "var(--shadow-card)", padding: 20, marginBottom: 16 }}>
      <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>{title}</h2>
      {children}
    </section>
  );
}
function Empty({ children }: { children: ReactNode }) {
  return <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>{children}</p>;
}
const list = { listStyle: "none", display: "flex", flexDirection: "column" as const, gap: 0 };
const row = {
  display: "flex",
  gap: 16,
  alignItems: "flex-start",
  padding: "14px 0",
  borderTop: "1px solid var(--border-muted)",
  flexWrap: "wrap" as const,
};
const muted = { color: "var(--ink-muted)", fontSize: 13 };
