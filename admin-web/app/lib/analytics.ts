// Contas da página Analytics (2026-10-20): tudo calculado a partir das
// linhas reais, sem números inventados. Funções puras — a página vai
// buscar os dados e passa-os aqui.

export type Period = "30" | "90" | "365" | "all";

export const PERIODS: { value: Period; label: string }[] = [
  { value: "30", label: "30 dias" },
  { value: "90", label: "90 dias" },
  { value: "365", label: "12 meses" },
  { value: "all", label: "Sempre" },
];

export function periodStart(p: Period, nowMs: number): Date | null {
  if (p === "all") return null;
  return new Date(nowMs - Number(p) * 86400000);
}

export function inPeriod(iso: string | null | undefined, start: Date | null): boolean {
  if (!iso) return false;
  return start == null || new Date(iso) >= start;
}

/// Agrupa por mês ("2026-10") os últimos `months` meses, a contar de hoje.
export function monthBuckets(months: number, nowMs: number): { key: string; label: string }[] {
  const out: { key: string; label: string }[] = [];
  const d = new Date(nowMs);
  d.setUTCDate(1);
  for (let i = months - 1; i >= 0; i--) {
    const m = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() - i, 1));
    const key = `${m.getUTCFullYear()}-${String(m.getUTCMonth() + 1).padStart(2, "0")}`;
    const label = m.toLocaleDateString("pt-PT", { month: "short", timeZone: "UTC" }).replace(".", "");
    out.push({ key, label });
  }
  return out;
}

export function monthKey(iso: string): string {
  return iso.slice(0, 7);
}

export function sumBy<T>(rows: T[], key: (r: T) => string | null | undefined, val: (r: T) => number = () => 1) {
  const m = new Map<string, number>();
  for (const r of rows) {
    const k = key(r);
    if (!k) continue;
    m.set(k, (m.get(k) ?? 0) + val(r));
  }
  return m;
}

export function topN(m: Map<string, number>, n: number): { label: string; value: number }[] {
  return [...m.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, n)
    .map(([label, value]) => ({ label, value }));
}

export function pct(part: number, total: number): string {
  if (!total) return "—";
  return `${Math.round((part / total) * 100)}%`;
}

export function avg(nums: number[]): number | null {
  const v = nums.filter((n) => Number.isFinite(n));
  return v.length ? v.reduce((a, b) => a + b, 0) / v.length : null;
}

export function median(nums: number[]): number | null {
  const v = nums.filter((n) => Number.isFinite(n)).sort((a, b) => a - b);
  if (!v.length) return null;
  const mid = Math.floor(v.length / 2);
  return v.length % 2 ? v[mid] : (v[mid - 1] + v[mid]) / 2;
}

export function hoursBetween(a: string, b: string): number {
  return (new Date(b).getTime() - new Date(a).getTime()) / 3600000;
}

export function eur(n: number, cents = false): string {
  return `${n.toLocaleString("pt-PT", { minimumFractionDigits: cents ? 2 : 0, maximumFractionDigits: cents ? 2 : 0 })} €`;
}

export function duration(hours: number | null): string {
  if (hours == null) return "—";
  if (hours < 1) return `${Math.max(1, Math.round(hours * 60))} min`;
  if (hours < 48) return `${Math.round(hours)} h`;
  return `${Math.round(hours / 24)} dias`;
}

/// Parte do parceiro que ficou mesmo paga, já sem reembolsos.
/// `refunded_amount` está no que o casal pagou (com comissão); reembolsos
/// anteriores à migração 109 ficaram só com status "refunded" e 0 — conta
/// como devolvido por inteiro.
export function netPartnerAmount(amount: number, status: string | null, refunded: number, commissionPct: number): number {
  if (status === "refunded" && !(refunded > 0)) return 0;
  const gross = amount * (1 + commissionPct / 100);
  if (!(refunded > 0) || gross <= 0) return amount;
  return Math.max(0, amount * (1 - refunded / gross));
}

// ---------------- Comparação com o período anterior (2026-10-21) ----------------
// Ao estilo Shopify: cada métrica mostra o total do período, a variação
// face ao período imediatamente anterior e uma linha para cada um.

export type RangeKey = "7" | "30" | "90" | "365";

export const RANGES: { value: RangeKey; label: string }[] = [
  { value: "7", label: "Últimos 7 dias" },
  { value: "30", label: "Últimos 30 dias" },
  { value: "90", label: "Últimos 90 dias" },
  { value: "365", label: "Últimos 12 meses" },
];

export type Bucket = { start: number; end: number; label: string };

export type Ranges = {
  start: number;
  end: number;
  prevStart: number;
  prevEnd: number;
  buckets: Bucket[];
  /** Mesmos baldes, deslocados para o período anterior. */
  prevBuckets: Bucket[];
  label: string;
  prevLabel: string;
};

const DAY = 86400000;

function fmtShort(ms: number, withYear = false): string {
  return new Date(ms).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "short",
    ...(withYear ? { year: "numeric" } : {}),
    timeZone: "Europe/Lisbon",
  }).replace(/\./g, "");
}

/** Períodos fechados ao fim do dia de hoje (UTC), com baldes regulares. */
export function ranges(key: RangeKey, nowMs: number): Ranges {
  const days = Number(key);
  const today = new Date(nowMs);
  today.setUTCHours(0, 0, 0, 0);
  const end = today.getTime() + DAY;
  const start = end - days * DAY;
  const span = end - start;
  const prevEnd = start;
  const prevStart = start - span;
  const step = days <= 31 ? DAY : days <= 120 ? 7 * DAY : Math.round(span / 12);
  const buckets: Bucket[] = [];
  for (let t = start; t < end; t += step) {
    const e = Math.min(end, t + step);
    buckets.push({ start: t, end: e, label: days > 120 ? new Date(t).toLocaleDateString("pt-PT", { month: "short", timeZone: "UTC" }).replace(".", "") : fmtShort(t) });
  }
  const prevBuckets = buckets.map((b) => ({ start: b.start - span, end: b.end - span, label: b.label }));
  return {
    start,
    end,
    prevStart,
    prevEnd,
    buckets,
    prevBuckets,
    label: `${fmtShort(start)} – ${fmtShort(end - DAY, true)}`,
    prevLabel: `${fmtShort(prevStart)} – ${fmtShort(prevEnd - DAY, true)}`,
  };
}

export type Metric = { value: number; prev: number; series: number[]; prevSeries: number[] };

/** Soma (ou conta) linhas por data, no período, no anterior e por balde. */
export function metric<T>(rows: T[], date: (r: T) => string | null | undefined, r: Ranges, val: (r: T) => number = () => 1): Metric {
  const series = r.buckets.map(() => 0);
  const prevSeries = r.prevBuckets.map(() => 0);
  let value = 0;
  let prev = 0;
  for (const row of rows) {
    const iso = date(row);
    if (!iso) continue;
    const t = new Date(iso).getTime();
    if (Number.isNaN(t)) continue;
    const v = val(row);
    if (t >= r.start && t < r.end) {
      value += v;
      const i = r.buckets.findIndex((b) => t >= b.start && t < b.end);
      if (i >= 0) series[i] += v;
    } else if (t >= r.prevStart && t < r.prevEnd) {
      prev += v;
      const i = r.prevBuckets.findIndex((b) => t >= b.start && t < b.end);
      if (i >= 0) prevSeries[i] += v;
    }
  }
  return { value, prev, series, prevSeries };
}

/** Rácio entre duas métricas (ex.: conversão), por balde e no total. */
export function ratio(a: Metric, b: Metric): Metric {
  const div = (x: number, y: number) => (y ? x / y : 0);
  return {
    value: div(a.value, b.value),
    prev: div(a.prev, b.prev),
    series: a.series.map((x, i) => div(x, b.series[i])),
    prevSeries: a.prevSeries.map((x, i) => div(x, b.prevSeries[i])),
  };
}

/** Variação percentual; null quando não há base de comparação. */
export function change(value: number, prev: number): number | null {
  if (!prev) return value ? null : 0;
  return ((value - prev) / Math.abs(prev)) * 100;
}

export function inRange(iso: string | null | undefined, r: Ranges): boolean {
  if (!iso) return false;
  const t = new Date(iso).getTime();
  return t >= r.start && t < r.end;
}
