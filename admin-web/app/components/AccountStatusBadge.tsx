import type { AccountStatus } from "@/lib/types";
import { Badge, type Tone } from "./ui";

const LABELS: Record<AccountStatus, string> = {
  active: "Ativo",
  pending_deletion: "A eliminar",
  suspended: "Suspenso",
  deleted: "Eliminado",
};

const TONES: Record<AccountStatus, Tone> = {
  active: "success",
  pending_deletion: "warning",
  suspended: "danger",
  deleted: "neutral",
};

export function AccountStatusBadge({ status }: { status: AccountStatus }) {
  return <Badge tone={TONES[status] ?? "neutral"}>{LABELS[status] ?? status}</Badge>;
}
