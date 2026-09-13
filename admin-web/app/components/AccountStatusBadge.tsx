import type { AccountStatus } from "@/lib/types";

const LABELS: Record<AccountStatus, string> = {
  active: "Ativo",
  pending_deletion: "A eliminar",
  suspended: "Suspenso",
  deleted: "Eliminado",
};

const COLORS: Record<AccountStatus, { bg: string; fg: string }> = {
  active: { bg: "var(--status-published-bg)", fg: "var(--status-published-fg)" },
  pending_deletion: { bg: "var(--status-pending-bg)", fg: "var(--status-pending-fg)" },
  suspended: { bg: "var(--status-rejected-bg)", fg: "var(--status-rejected-fg)" },
  deleted: { bg: "var(--status-suspended-bg)", fg: "var(--status-suspended-fg)" },
};

export function AccountStatusBadge({ status }: { status: AccountStatus }) {
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
