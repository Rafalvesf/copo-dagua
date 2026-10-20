import type { PaymentStatus } from "@/lib/types";
import { Badge, type Tone } from "./ui";

const LABELS: Record<PaymentStatus, string> = {
  pending: "Pendente",
  paid: "Pago",
  overdue: "Em atraso",
  refunded: "Reembolsado",
  failed: "Falhado",
};

const TONES: Record<PaymentStatus, Tone> = {
  pending: "warning",
  paid: "success",
  overdue: "danger",
  refunded: "info",
  failed: "danger",
};

export function PaymentStatusBadge({ status }: { status: PaymentStatus }) {
  return <Badge tone={TONES[status] ?? "neutral"}>{LABELS[status] ?? status}</Badge>;
}
