"use client";

import { useRef, useState } from "react";

// Linha do período atual (cheia) e do anterior (tracejada) com dica ao
// passar o rato/dedo: data e valor de cada um (2026-10-21).
export function LineChartHover({
  series,
  prevSeries,
  tips,
  prevTips,
  values,
  prevValues,
}: {
  series: number[];
  prevSeries: number[];
  tips: string[];
  prevTips: string[];
  /** Valores já formatados (o formato vem do servidor). */
  values: string[];
  prevValues: string[];
}) {
  const W = 300;
  const H = 92;
  const pad = 4;
  const max = Math.max(1e-9, ...series, ...prevSeries);
  const n = Math.max(series.length, 2);
  const x = (i: number) => (i / (n - 1)) * W;
  const y = (v: number) => H - pad - (v / max) * (H - pad * 2);
  const path = (arr: number[]) => arr.map((v, i) => `${i === 0 ? "M" : "L"}${x(i).toFixed(1)},${y(v).toFixed(1)}`).join(" ");
  const area = `${path(series)} L${x(series.length - 1).toFixed(1)},${H} L0,${H} Z`;
  const ref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState<number | null>(null);

  function onMove(clientX: number) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const f = Math.min(1, Math.max(0, (clientX - rect.left) / rect.width));
    setHover(Math.round(f * (series.length - 1)));
  }

  const left = hover == null ? 0 : (hover / (n - 1)) * 100;
  return (
    <div
      ref={ref}
      className="chart-hit"
      onMouseMove={(e) => onMove(e.clientX)}
      onMouseLeave={() => setHover(null)}
      onTouchStart={(e) => onMove(e.touches[0].clientX)}
      onTouchMove={(e) => onMove(e.touches[0].clientX)}
      onTouchEnd={() => setHover(null)}
    >
      <svg className="mcard-chart" viewBox={`0 0 ${W} ${H}`} preserveAspectRatio="none" aria-hidden>
        {[0.25, 0.5, 0.75].map((f) => (
          <line key={f} x1={0} x2={W} y1={H * f} y2={H * f} className="mc-grid" vectorEffect="non-scaling-stroke" />
        ))}
        <line x1={0} x2={W} y1={H - 0.5} y2={H - 0.5} className="mc-base" vectorEffect="non-scaling-stroke" />
        <path d={area} className="mc-area" />
        <path d={path(prevSeries)} className="mc-prev" vectorEffect="non-scaling-stroke" />
        <path d={path(series)} className="mc-cur" vectorEffect="non-scaling-stroke" />
        {hover != null && <line x1={x(hover)} x2={x(hover)} y1={0} y2={H} className="mc-cursor" vectorEffect="non-scaling-stroke" />}
      </svg>
      {hover != null && (
        <>
          <span className="mc-dot" style={{ left: `${left}%`, top: `${(y(series[hover] ?? 0) / H) * 100}%` }} />
          <span className="mc-dot mc-dot-prev" style={{ left: `${left}%`, top: `${(y(prevSeries[hover] ?? 0) / H) * 100}%` }} />
          <div className={`chart-tip${left > 60 ? " tip-left" : ""}`} style={{ left: `${left}%` }} role="status">
            <div className="tip-row">
              <i className="lg-cur" aria-hidden />
              <span className="tip-label">{tips[hover]}</span>
              <span className="tip-value">{values[hover]}</span>
            </div>
            <div className="tip-row">
              <i className="lg-prev" aria-hidden />
              <span className="tip-label">{prevTips[hover]}</span>
              <span className="tip-value">{prevValues[hover]}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
