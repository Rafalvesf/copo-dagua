import type { ReactNode } from "react";
import { change, type Metric } from "@/lib/analytics";
import { LineChartHover } from "./LineChartHover";

// Cartão de métrica ao estilo Shopify (2026-10-21): título, valor do
// período, variação face ao período anterior e a linha dos dois períodos
// (atual a cheio, anterior a tracejado).
export function MetricCard({
  title,
  hint,
  metric,
  format,
  labels,
  tips,
  prevTips,
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
  /** Rótulo completo de cada ponto (atual e anterior), para a dica. */
  tips: string[];
  prevTips: string[];
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
      <LineChartHover
        series={metric.series}
        prevSeries={metric.prevSeries}
        tips={tips}
        prevTips={prevTips}
        values={metric.series.map(format)}
        prevValues={metric.prevSeries.map(format)}
      />
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
