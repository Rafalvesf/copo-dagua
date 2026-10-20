import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { PaymentStatusBadge } from "@/components/PaymentStatusBadge";
import { Card, Empty, FilterTabs, PageHeader, Stat } from "@/components/ui";
import { fmtDate, fmtEur } from "@/lib/format";
import { netPartnerAmount } from "@/lib/analytics";
import type { PaymentStatus } from "@/lib/types";

type PaymentRow = {
  id: string;
  booking_id: string;
  type: string;
  amount: number;
  refunded_amount?: number | null;
  status: PaymentStatus;
  due_at: string | null;
  paid_at: string | null;
  bookings: { booking_number: string } | null;
  profiles: { full_name: string } | null;
  partner_profiles: { business_name: string } | null;
};

const FILTERS: { value: PaymentStatus | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "paid", label: "Pagos" },
  { value: "pending", label: "Pendentes" },
  { value: "refunded", label: "Reembolsados" },
  { value: "failed", label: "Falhados" },
];

const PAYMENT_TYPE_LABELS: Record<string, string> = {
  deposit: "Sinal",
  installment: "Prestação",
  final_payment: "Pagamento final",
  refund: "Reembolso",
};

export default async function PaymentsPage({ searchParams }: PageProps<"/payments">) {
  await requireAdmin();
  const params = await searchParams;
  const statusFilter = typeof params.status === "string" && FILTERS.some((f) => f.value === params.status) ? params.status : "all";

  const supabase = await createClient();
  const [{ data: allPayments }, { data: settingsRow }] = await Promise.all([
    supabase
      .from("payments")
      .select("*, bookings(booking_number), profiles(full_name), partner_profiles(business_name)")
      .order("due_at", { ascending: false }),
    supabase.from("platform_settings").select("platform_commission_percentage").eq("id", 1).single(),
  ]);
  const payments = (allPayments ?? []) as unknown as PaymentRow[];
  const pct = Number((settingsRow?.platform_commission_percentage as number | undefined) ?? 0);
  const net = (p: PaymentRow) => netPartnerAmount(Number(p.amount), p.status, Number(p.refunded_amount ?? 0), pct);

  // Só o que ficou pago (sem reembolsos) conta como volume e receita.
  const kept = payments.filter((p) => p.status === "paid" || Number(p.refunded_amount ?? 0) > 0);
  const partnerVolume = kept.reduce((s, p) => s + net(p), 0);
  const revenue = (partnerVolume * pct) / 100;
  const pendingVolume = payments.filter((p) => p.status === "pending").reduce((s, p) => s + Number(p.amount), 0);
  const overdue = payments.filter((p) => p.status === "pending" && p.due_at && new Date(p.due_at) < new Date());
  const overdueVolume = overdue.reduce((s, p) => s + Number(p.amount), 0);

  const filtered = statusFilter === "all" ? payments : payments.filter((p) => p.status === statusFilter);
  const count = (v: string) => (v === "all" ? payments.length : payments.filter((p) => p.status === v).length);

  return (
    <div className="page">
      <PageHeader
        title="Pagamentos"
        subtitle={`Sinais e pagamentos finais feitos na app (Stripe). O organizador paga o valor do parceiro + ${pct}% de comissão À Nossa!.`}
        actions={
          <Link href="/refunds" className="btn btn-secondary">
            Reembolsos
          </Link>
        }
      />

      <div className="grid grid-4">
        <Stat label="Pago pelos organizadores" value={fmtEur(partnerVolume * (1 + pct / 100), true)} hint="já sem reembolsos" />
        <Stat label={`Receita À Nossa! (${pct}%)`} value={fmtEur(revenue, true)} hint="comissão bruta, antes das taxas Stripe" />
        <Stat label="Por pagar" value={fmtEur(pendingVolume)} hint={`${count("pending")} pagamentos pendentes`} />
        <Stat label="Em atraso" value={fmtEur(overdueVolume)} hint={`${overdue.length} fora do prazo`} tone={overdue.length > 0 ? "danger" : undefined} />
      </div>

      <div className="toolbar">
        <FilterTabs
          current={statusFilter}
          items={FILTERS.map((f) => ({ value: f.value, label: f.label, href: `/payments?status=${f.value}`, count: count(f.value) }))}
        />
      </div>

      <Card flush>
        {filtered.length === 0 ? (
          <Empty title="Sem pagamentos neste filtro" />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Reserva</th>
                  <th>Organizador</th>
                  <th>Tipo</th>
                  <th>Data</th>
                  <th className="num">Organizador paga</th>
                  <th className="num">Parceiro recebe</th>
                  <th className="num">Reembolsado</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => {
                  const refunded = Number(p.refunded_amount ?? 0);
                  return (
                    <tr key={p.id}>
                      <td>
                        <Link href={`/bookings/${p.booking_id}`} className="cell-main">
                          {p.bookings?.booking_number ?? p.booking_id.slice(0, 8)}
                        </Link>
                        <span className="cell-sub">{p.partner_profiles?.business_name ?? "—"}</span>
                      </td>
                      <td>{p.profiles?.full_name ?? "—"}</td>
                      <td>{PAYMENT_TYPE_LABELS[p.type] ?? p.type}</td>
                      <td className="muted nowrap">{fmtDate(p.paid_at ?? p.due_at)}</td>
                      <td className="num">{fmtEur(Number(p.amount) * (1 + pct / 100), true)}</td>
                      <td className="num">{fmtEur(p.amount, true)}</td>
                      <td className="num muted">{refunded > 0 ? fmtEur(refunded, true) : p.status === "refunded" ? "Total" : "—"}</td>
                      <td>
                        <PaymentStatusBadge status={p.status} />
                      </td>
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
