import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { PaymentStatusBadge } from "@/components/PaymentStatusBadge";
import type { PaymentStatus } from "@/lib/types";

type PaymentRow = {
  id: string;
  booking_id: string;
  type: string;
  amount: number;
  status: PaymentStatus;
  due_at: string | null;
  paid_at: string | null;
  bookings: { booking_number: string } | null;
  profiles: { full_name: string } | null;
  partner_profiles: { business_name: string } | null;
};

const FILTERS: { value: PaymentStatus | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "pending", label: "Pendentes" },
  { value: "paid", label: "Pagos" },
  { value: "failed", label: "Falhados" },
  { value: "refunded", label: "Reembolsados" },
];

export default async function PaymentsPage({ searchParams }: PageProps<"/payments">) {
  await requireAdmin();
  const params = await searchParams;
  const statusFilter = typeof params.status === "string" ? params.status : "all";

  const supabase = await createClient();

  // Um único fetch para os KPIs e a tabela — o volume de pagamentos é
  // pequeno o suficiente nesta fase da plataforma para agregar em JS em
  // vez de round-trips extra com `count`/`sum` do PostgREST (mesmo
  // padrão usado no dashboard, ver app/(admin)/page.tsx).
  const { data: allPayments } = await supabase
    .from("payments")
    .select(
      "id, booking_id, type, amount, status, due_at, paid_at, bookings(booking_number), profiles(full_name), partner_profiles(business_name)",
    )
    .order("due_at", { ascending: false });

  const payments = (allPayments ?? []) as unknown as PaymentRow[];

  const paidVolume = payments.filter((p) => p.status === "paid").reduce((sum, p) => sum + p.amount, 0);
  const pendingVolume = payments.filter((p) => p.status === "pending").reduce((sum, p) => sum + p.amount, 0);
  const overdueVolume = payments
    .filter((p) => p.status === "pending" && p.due_at && new Date(p.due_at) < new Date())
    .reduce((sum, p) => sum + p.amount, 0);

  const { data: settingsRow } = await supabase
    .from("platform_settings")
    .select("platform_commission_percentage")
    .eq("id", 1)
    .single();
  const commissionPct = (settingsRow?.platform_commission_percentage as number | undefined) ?? 0;
  const platformRevenue = (paidVolume * commissionPct) / 100;

  const filtered = statusFilter === "all" ? payments : payments.filter((p) => p.status === statusFilter);

  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 600 }}>Pagamentos</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 4, fontSize: 14 }}>
        Sinais de reserva — ainda não existe integração com um processor real (Stripe Connect),
        ver <code>admin-web/payments/README.md</code>. Só sinais são acompanhados aqui; pagamento
        final/faseado ainda não tem nenhum fluxo em nenhuma app.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, margin: "24px 0" }}>
        <KpiTile label="Volume pago" value={`${paidVolume.toLocaleString("pt-PT")} €`} />
        <KpiTile label="Pendentes" value={`${pendingVolume.toLocaleString("pt-PT")} €`} />
        <KpiTile label="Em atraso" value={`${overdueVolume.toLocaleString("pt-PT")} €`} accent="var(--status-rejected-fg)" />
        <KpiTile
          label={`Receita da plataforma (${commissionPct}%)`}
          value={`${platformRevenue.toLocaleString("pt-PT")} €`}
        />
      </div>

      <div style={{ display: "flex", gap: 8, margin: "16px 0", flexWrap: "wrap" }}>
        {FILTERS.map((f) => (
          <Link
            key={f.value}
            href={`/payments?status=${f.value}`}
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              background: statusFilter === f.value ? "var(--ink)" : "var(--surface)",
              color: statusFilter === f.value ? "var(--surface)" : "var(--ink)",
              border: "1px solid var(--border-muted)",
            }}
          >
            {f.label}
          </Link>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p style={{ color: "var(--ink-muted)" }}>Sem pagamentos neste filtro.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", fontSize: 13, color: "var(--ink-muted)" }}>
              <th style={{ padding: "8px 0" }}>Reserva</th>
              <th>Casal</th>
              <th>Parceiro</th>
              <th>Tipo</th>
              <th>Valor</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} style={{ borderTop: "1px solid var(--border-muted)" }}>
                <td style={{ padding: "12px 0" }}>
                  <Link href={`/bookings/${p.booking_id}`} style={{ fontWeight: 600 }}>
                    {p.bookings?.booking_number ?? p.booking_id.slice(0, 8)}
                  </Link>
                </td>
                <td style={{ fontSize: 13 }}>{p.profiles?.full_name ?? "—"}</td>
                <td style={{ fontSize: 13 }}>{p.partner_profiles?.business_name ?? "—"}</td>
                <td style={{ fontSize: 13 }}>{PAYMENT_TYPE_LABELS[p.type] ?? p.type}</td>
                <td style={{ fontSize: 13 }}>{p.amount.toLocaleString("pt-PT")} €</td>
                <td>
                  <PaymentStatusBadge status={p.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const PAYMENT_TYPE_LABELS: Record<string, string> = {
  deposit: "Sinal",
  installment: "Prestação",
  final_payment: "Pagamento final",
  refund: "Reembolso",
};

function KpiTile({ label, value, accent }: { label: string; value: string; accent?: string }) {
  return (
    <div
      style={{
        background: "var(--surface)",
        borderRadius: 16,
        boxShadow: "var(--shadow-card)",
        padding: 18,
      }}
    >
      <div style={{ fontFamily: "var(--font-serif)", fontSize: 24, fontWeight: 500, color: accent }}>{value}</div>
      <p style={{ fontSize: 13, color: "var(--ink-muted)", marginTop: 4 }}>{label}</p>
    </div>
  );
}
