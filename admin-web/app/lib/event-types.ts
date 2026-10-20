// Tipos de evento da app (weddings.event_type, migração 081) e o prefixo
// do número das reservas (migração 107).
export const EVENT_TYPES: Record<string, { label: string; prefix: string }> = {
  wedding: { label: "Casamento", prefix: "WED" },
  baptism: { label: "Batizado", prefix: "BAP" },
  birthday: { label: "Aniversário", prefix: "BDY" },
  communion: { label: "Comunhão", prefix: "COM" },
  engagement: { label: "Noivado", prefix: "ENG" },
  vow_renewal: { label: "Renovação de votos", prefix: "VOW" },
  graduation: { label: "Festa de curso", prefix: "GRD" },
  corporate: { label: "Evento de empresa", prefix: "CRP" },
  baby_shower: { label: "Chá de bebé", prefix: "BBS" },
  other: { label: "Outro", prefix: "EVT" },
};

export function eventTypeLabel(type: string | null | undefined, other?: string | null): string {
  if (type === "other" && other) return other;
  return EVENT_TYPES[type ?? ""]?.label ?? "Evento";
}
