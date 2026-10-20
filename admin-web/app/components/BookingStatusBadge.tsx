import type { BookingStatus } from "@/lib/types";
import { Badge, type Tone } from "./ui";

const LABELS: Record<BookingStatus, string> = {
  awaiting_deposit: "A aguardar sinal",
  confirmed: "Confirmada",
  completed: "Concluída",
  expired: "Expirada",
  cancelled_by_couple: "Cancelada (organizador)",
  cancelled_by_partner: "Cancelada (parceiro)",
  payment_overdue: "Pagamento em atraso",
  disputed: "Em disputa",
};

export function bookingStatusLabel(status: string): string {
  return LABELS[status as BookingStatus] ?? status;
}

const TONES: Record<BookingStatus, Tone> = {
  awaiting_deposit: "warning",
  confirmed: "success",
  completed: "accent",
  expired: "neutral",
  cancelled_by_couple: "neutral",
  cancelled_by_partner: "neutral",
  payment_overdue: "danger",
  disputed: "danger",
};

export function BookingStatusBadge({ status }: { status: BookingStatus }) {
  return <Badge tone={TONES[status] ?? "neutral"}>{LABELS[status] ?? status}</Badge>;
}
