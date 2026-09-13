import type { PartnerProfileStatus } from "@/lib/types";

// Mirrors the badge cell of ui.md's wireframes — same alpha-background /
// solid-text convention as ProfileStatusBanner in
// mobile-app/shared/design-system.md, not a new pattern invented here.
const LABELS: Record<PartnerProfileStatus, string> = {
  draft: "Rascunho",
  pending_review: "A aguardar",
  changes_required: "Alterações pedidas",
  published: "Publicado",
  rejected: "Rejeitado",
  suspended: "Suspenso",
};

const COLORS: Record<PartnerProfileStatus, { bg: string; fg: string }> = {
  draft: { bg: "var(--status-suspended-bg)", fg: "var(--status-suspended-fg)" },
  pending_review: {
    bg: "var(--status-pending-bg)",
    fg: "var(--status-pending-fg)",
  },
  changes_required: {
    bg: "var(--status-pending-bg)",
    fg: "var(--status-pending-fg)",
  },
  published: {
    bg: "var(--status-published-bg)",
    fg: "var(--status-published-fg)",
  },
  rejected: {
    bg: "var(--status-rejected-bg)",
    fg: "var(--status-rejected-fg)",
  },
  suspended: {
    bg: "var(--status-suspended-bg)",
    fg: "var(--status-suspended-fg)",
  },
};

export function PartnerStatusBadge({ status }: { status: PartnerProfileStatus }) {
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
