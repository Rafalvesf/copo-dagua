import type { PartnerProfileStatus } from "@/lib/types";
import { Badge, type Tone } from "./ui";

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

const TONES: Record<PartnerProfileStatus, Tone> = {
  draft: "neutral",
  pending_review: "warning",
  changes_required: "info",
  published: "success",
  rejected: "danger",
  suspended: "neutral",
};

export function PartnerStatusBadge({ status }: { status: PartnerProfileStatus }) {
  return <Badge tone={TONES[status] ?? "neutral"}>{LABELS[status] ?? status}</Badge>;
}
