import type { ReactNode } from "react";
import { change, type Metric } from "@/lib/analytics";

// Cartão de métrica ao estilo Shopify (2026-10-21): título, valor do
// período, variação face ao período anterior e a linha dos dois períodos
// (atual a cheio, anterior a tracejado).
export function MetricCard({
  title,
  hint,
  metric,
  format,
  labels,
  current,
  previous,
  invert,
  footer,
}: {
  title: string;
  hint?: string;
  metric: Metric;
  format: (v: number) => string;
  /** Primeiro e último rótulo do eixo X. */
  labels: [string, string];
  current: string;
  previous: string;
  /** Subir é mau (ex.: cancelamentos, reembolsos). */
  invert?: boolean;
  footer?: ReactNode;
}) {
  const pct = change(metric.value, metric.prev);
  const up = (pct ?? 0) > 0;
  const good = pct === null || pct === 0 ? null : invert ? !up : up;
  return (
    <section className="card mcard">
      <div className="mcard-head">
        <h3 className="mcard-title" title={hint}>
          {title}
        </h3>
      </div>
      <div className="mcard-value-row">
        <span className="mcard-value">{format(metric.value)}</span>
        {pct !== null && pct !== 0 && (
          <span className={`mcard-delta ${good ? "is-good" : "is-bad"}`}>
            {up ? "↗" : "↘"} {Math.abs(pct) >= 1000 ? ">999" : Math.abs(pct).toFixed(0)}%
          </span>
        )}
        {pct === null && <span className="mcard-delta">novo</span>}
      </div>
      <LineChart series={metric.series} prevSeries={metric.prevSeries} />
      <div className="mcard-axis">
        <span>{labels[0]}</span>
        <span>{labels[1]}</span>
      </div>
      <div className="mcard-legend">
        <span>
          <i className="lg-cur" aria-hidden />
          {current}
        </span>
        <span>
          <i className="lg-prev" aria-hidden />
          {previous}
        </span>
      </div>
      {footer && <div className="mcard-foot">{footer}</div>}
    </section>
  );
}

function LineChart({ series, prevSeries }: { series: number[]; prevSeries: number[] }) {
  const W = 300;
  const H = 92;
  const pad = 4;
  const max = Math.max(1e-9, ...series, ...prevSeries);
  const n = Math.max(series.length, 2);
  const x = (i: number) => (i / (n - 1)) * W;
  const y = (v: number) => H - pad - (v / max) * (H - pad * 2);
  const path = (arr: number[]) => arr.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${path(series)} L${x(series.length - 1).toFixed(1)},${H} L0,${H} Z`;
  return (
    <svg className="mcard-chart" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden>
      {[0.25, 0.5, 0.75].map((f) => (
        <line key={f} x1={0} x2={W} y1={H * f} y2={H * f} className="mc-grid" vectorEffect="non-scaling-stroke" />
      ))}
      <line x1={0} x2={W} y1={H - 0.5} y2={H - 0.5} className="mc-base" vectorEffect="non-scaling-stroke" />
      <path d={area} className="mc-area" />
      <path d={path(prevSeries)} className="mc-prev" vectorEffect="non-scaling-stroke" />
      <path d={path(series)} className="mc-cur" vectorEffect="non-scaling-stroke" />
    </svg>
  );
}

/** Indicador simples sem gráfico (para números de estado, ex.: "por decidir"). */
export function MiniStat({ label, value, hint, tone }: { label: string; value: string; hint?: string; tone?: "warning" | "danger" }) {
  return (
    <div className={`card stat${tone ? ` stat-${tone}` : ""}`}>
      <span className="stat-label">{label}</span>
      <span className="stat-value" style={{ fontSize: 20 }}>
        {value}
      </span>
      {hint && <span className="stat-hint">{hint}</span>}
    </div>
  );
}
