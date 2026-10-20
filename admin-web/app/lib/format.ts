// Pequenos helpers de formatação puros, partilhados entre AdminSidebar e o
// cabeçalho do layout — ambos mostram um avatar com iniciais do admin.
export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}

// Datas e valores (redesenho 2026-10-20) — um só formato em todo o admin,
// sempre na hora de Lisboa e com "—" quando não há valor.
const TZ = "Europe/Lisbon";

function valid(v: string | number | Date | null | undefined): Date | null {
  if (v == null || v === "") return null;
  const d = v instanceof Date ? v : new Date(v);
  return Number.isNaN(d.getTime()) ? null : d;
}

export function fmtDate(v: string | number | Date | null | undefined): string {
  const d = valid(v);
  return d ? d.toLocaleDateString("pt-PT", { day: "2-digit", month: "short", year: "numeric", timeZone: TZ }) : "—";
}

export function fmtDateTime(v: string | number | Date | null | undefined): string {
  const d = valid(v);
  return d
    ? d.toLocaleString("pt-PT", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit", timeZone: TZ })
    : "—";
}

export function fmtEur(v: number | string | null | undefined, cents = false): string {
  if (v == null || v === "") return "—";
  const n = Number(v);
  if (!Number.isFinite(n)) return "—";
  const fraction = cents || !Number.isInteger(n) ? 2 : 0;
  return `${n.toLocaleString("pt-PT", { minimumFractionDigits: fraction, maximumFractionDigits: fraction })} €`;
}

/** "há 3 dias", "há 2 h" — para listas de atividade. */
export function fmtAgo(v: string | number | Date | null | undefined, nowMs: number): string {
  const d = valid(v);
  if (!d) return "—";
  const min = Math.round((nowMs - d.getTime()) / 60000);
  if (min < 1) return "agora";
  if (min < 60) return `há ${min} min`;
  const h = Math.round(min / 60);
  if (h < 24) return `há ${h} h`;
  const days = Math.round(h / 24);
  if (days < 30) return `há ${days} ${days === 1 ? "dia" : "dias"}`;
  return fmtDate(d);
}
