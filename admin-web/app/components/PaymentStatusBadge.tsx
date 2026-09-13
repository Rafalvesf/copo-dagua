import type { PaymentStatus } from "@/lib/types";

const LABELS: Record<PaymentStatus, string> = {
  pending: "Pendente",
  paid: "Pago",
  overdue: "Em atraso",
  refunded: "Reembolsado",
  failed: "Falhado",
};

const COLORS: Record<PaymentStatus, { bg: string; fg: string }> = {
  pending: { bg: "var(--status-pending-bg)", fg: "var(--status-pending-fg)" },
  paid: { bg: "var(--status-published-bg)", fg: "var(--status-published-fg)" },
  overdue: { bg: "var(--status-rejected-bg)", fg: "var(--status-rejected-fg)" },
  refunded: { bg: "var(--status-suspended-bg)", fg: "var(--status-suspended-fg)" },
  failed: { bg: "var(--status-rejected-bg)", fg: "var(--status-rejected-fg)" },
};

export function PaymentStatusBadge({ status }: { status: PaymentStatus }) {
  const { bg, fg } = COLORS[status];
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 10px",
        borderRadius: 999,
        fontSize: 13,
        fontWeight: 600,
        background: bg,
        color: fg,
      }}
    >
      {LABELS[status]}
    </span>
  );
}
