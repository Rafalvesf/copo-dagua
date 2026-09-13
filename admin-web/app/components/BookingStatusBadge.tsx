import type { BookingStatus } from "@/lib/types";

const LABELS: Record<BookingStatus, string> = {
  awaiting_deposit: "A aguardar sinal",
  confirmed: "Confirmada",
  completed: "Concluída",
  expired: "Expirada",
  cancelled_by_couple: "Cancelada (casal)",
  cancelled_by_partner: "Cancelada (parceiro)",
  payment_overdue: "Pagamento em atraso",
  disputed: "Em disputa",
};

const COLORS: Record<BookingStatus, { bg: string; fg: string }> = {
  awaiting_deposit: { bg: "var(--status-pending-bg)", fg: "var(--status-pending-fg)" },
  confirmed: { bg: "var(--status-published-bg)", fg: "var(--status-published-fg)" },
  completed: { bg: "var(--status-published-bg)", fg: "var(--status-published-fg)" },
  expired: { bg: "var(--status-suspended-bg)", fg: "var(--status-suspended-fg)" },
  cancelled_by_couple: { bg: "var(--status-suspended-bg)", fg: "var(--status-suspended-fg)" },
  cancelled_by_partner: { bg: "var(--status-suspended-bg)", fg: "var(--status-suspended-fg)" },
  payment_overdue: { bg: "var(--status-rejected-bg)", fg: "var(--status-rejected-fg)" },
  disputed: { bg: "var(--status-rejected-bg)", fg: "var(--status-rejected-fg)" },
};

export function BookingStatusBadge({ status }: { status: BookingStatus }) {
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
