// Tipos de evento da app (weddings.event_type, migração 081) e o prefixo
// do número das reservas (migração 107).
// Migração 230 (2026-11-23): sete tipos para escolher e prefixos em
// português. Os tipos antigos passam a estes na base de dados.
export const EVENT_TYPES: Record<string, { label: string; prefix: string }> = {
  birthday: { label: "Aniversário", prefix: "ANI" },
  wedding: { label: "Casamento", prefix: "CAS" },
  party: { label: "Festa", prefix: "FES" },
  corporate: { label: "Evento de empresa", prefix: "EMP" },
  baptism: { label: "Batizado", prefix: "BAT" },
  new_year: { label: "Passagem de Ano", prefix: "PAN" },
  other: { label: "Outro", prefix: "EVT" },
};

export function eventTypeLabel(type: string | null | undefined, other?: string | null): string {
  if (type === "other" && other) return other;
  return EVENT_TYPES[type ?? ""]?.label ?? "Evento";
}

// Estado do evento (weddings.status).
export function eventStatusLabel(status: string | null | undefined): string {
  if (status === "planning") return "Em planeamento";
  if (status === "completed") return "Concluído";
  return status ?? "—";
}
