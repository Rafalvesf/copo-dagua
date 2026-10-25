"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Period = "7d" | "30d" | "3m" | "1y";

const PERIODS: { key: Period; label: string }[] = [
  { key: "7d", label: "7 d" },
  { key: "30d", label: "30 d" },
  { key: "3m", label: "3 m" },
  { key: "1y", label: "1 ano" },
];

// Agrega as linhas reais (só `created_at`, já filtradas para os últimos
// 365 dias no Server Component) na granularidade certa para cada período
// — dias para 7/30 dias, semanas para 3 meses, meses de calendário para 1
// ano (não blocos fixos de 30 dias, que desalinhariam com os nomes dos
// meses mostrados).
function buildBuckets(rows: { created_at: string }[], period: Period, nowMs: number): { label: string; count: number }[] {
  const dayMs = 24 * 60 * 60 * 1000;
  const now = new Date(nowMs);

  if (period === "7d" || period === "30d") {
    const days = period === "7d" ? 7 : 30;
    const buckets: { label: string; count: number }[] = [];
    for (let i = days - 1; i >= 0; i--) {
      const day = new Date(nowMs - i * dayMs);
      const dayKey = day.toISOString().slice(0, 10);
      const count = rows.filter((r) => r.created_at.slice(0, 10) === dayKey).length;
      buckets.push({ label: day.toLocaleDateString("pt-PT", { day: "2-digit", month: "2-digit" }), count });
    }
    return buckets;
  }

  if (period === "3m") {
    const weeks = 13;
    const buckets: { label: string; count: number }[] = [];
    for (let i = weeks - 1; i >= 0; i--) {
      const weekStart = nowMs - i * 7 * dayMs;
      const weekEnd = nowMs - (i - 1) * 7 * dayMs;
      const count = rows.filter((r) => {
        const t = new Date(r.created_at).getTime();
        return t >= weekStart && t < weekEnd;
      }).length;
      buckets.push({ label: new Date(weekStart).toLocaleDateString("pt-PT", { day: "2-digit", month: "2-digit" }), count });
    }
    return buckets;
  }

  // 1y — meses de calendário reais, não blocos de 30 dias.
  const buckets: { label: string; count: number }[] = [];
  for (let i = 11; i >= 0; i--) {
    const monthStart = new Date(now.getFullYear(), now.getMonth() - i, 1).getTime();
    const monthEnd = new Date(now.getFullYear(), now.getMonth() - i + 1, 1).getTime();
    const count = rows.filter((r) => {
      const t = new Date(r.created_at).getTime();
      return t >= monthStart && t < monthEnd;
    }).length;
    buckets.push({ label: new Date(monthStart).toLocaleDateString("pt-PT", { month: "short" }), count });
  }
  return buckets;
}

// Barras simples em SVG — sem dependência de gráficos (o resto do
// admin-web também não usa nenhuma). `rows` vem do Server Component
// (page.tsx), já filtrado aos últimos 365 dias reais de `bookings.created_at`
// — os separadores de período reagrupam essas mesmas linhas no cliente,
// nunca inventam dados para períodos sem histórico real.
//
// `nowMs` também vem do servidor (não `new Date()` local) — mesmo motivo
// documentado em `page.tsx`: evitar duas leituras do relógio a
// divergirem entre a passagem SSR e a hidratação.
export function BookingsBarChart({ rows, nowMs }: { rows: { created_at: string }[]; nowMs: number }) {
  const [period, setPeriod] = useState<Period>("30d");
  const [hover, setHover] = useState<number | null>(null);
  const days = useMemo(() => buildBuckets(rows, period, nowMs), [rows, period, nowMs]);

  const axisWidth = 28;
  const chartWidth = 640;
  const width = chartWidth + axisWidth;
  const height = 165;
  const barGap = 3;
  const barWidth = Math.max(2, chartWidth / days.length - barGap);
  const rawMax = Math.max(...days.map((d) => d.count), 1);
  const totalCount = days.reduce((sum, d) => sum + d.count, 0);
  // Eixo Y com 4 intervalos de números inteiros (2026-10-21): antes as
  // marcas eram 0/¼/½/¾ de um máximo arredondado (ex: 0, 1, 3, 4, 5) e as
  // barras usavam outra escala, por isso não batiam certo com as linhas.
  const axisStep = tickStep(rawMax);
  const axisMax = axisStep * 4;
  // Folga em cima para o número da linha de topo não ser cortado.
  const plotTop = 10;
  const plotHeight = height - plotTop;

  // `preserveAspectRatio="none"` (nota abaixo) estica tudo dentro do
  // SVG de forma não-uniforme para preencher a caixa redimensionável —
  // ótimo para barras/linhas, mas esticava também o texto (números do
  // eixo, datas), que ficava visivelmente deformado na vertical. Mede o
  // tamanho real renderizado do SVG e aplica a escala inversa só ao
  // texto (envolvido num `<g>` com `translate...scale(1/sx,1/sy)...
  // translate` de volta), para o texto ficar sempre proporcional
  // independentemente de como a caixa é redimensionada.
  const svgRef = useRef<SVGSVGElement>(null);
  const [textScale, setTextScale] = useState({ x: 1, y: 1 });
  useEffect(() => {
    const el = svgRef.current;
    if (!el) return;
    // `mounted` evita "state update on a component that hasn't mounted
    // yet" — o `ResizeObserver` pode disparar o próprio callback antes
    // de React terminar de considerar a árvore montada (visto em dev,
    // sobretudo durante Fast Refresh); sem isto o `setTextScale` da
    // primeira medição corria demasiado cedo.
    let mounted = false;
    const measure = () => {
      if (!mounted) return;
      const rect = el.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      setTextScale({ x: rect.width / width, y: rect.height / (height + 24) });
    };
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    mounted = true;
    measure();
    return () => {
      mounted = false;
      observer.disconnect();
    };
  }, [width, height]);

  function textTransform(x: number, y: number) {
    return `translate(${x} ${y}) scale(${1 / textScale.x} ${1 / textScale.y}) translate(${-x} ${-y})`;
  }

  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div className="row" style={{ justifyContent: "space-between", marginBottom: 12, flexShrink: 0 }}>
        <h2 className="card-title">Novas reservas</h2>
        <div className="tabs" role="tablist">
          {PERIODS.map((p) => (
            <button key={p.key} type="button" role="tab" className="tab" aria-selected={period === p.key} onClick={() => setPeriod(p.key)}>
              {p.label}
            </button>
          ))}
        </div>
      </div>
      {/* `flex: 1, minHeight: 0` + `<svg height="100%">` (não um pixel
          fixo) — a caixa "Reservas" é agora redimensionável (modo de
          edição do dashboard, ver components/DashboardGrid.tsx); com uma
          altura de SVG fixa, redimensionar a caixa não mudava nada dentro
          dela (o gráfico ficava sempre com a mesma altura, cortado ou com
          espaço a mais). O `viewBox` mantém a mesma proporção interna de
          desenho, `preserveAspectRatio="none"` deixa esticar livremente
          nos dois eixos para preencher o que quer que sobre. */}
      <div style={{ position: "relative", flex: 1, minHeight: 0 }}>
        {totalCount === 0 && (
          <p
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--ink-muted)",
              fontSize: 13.5,
              zIndex: 1,
              pointerEvents: "none",
            }}
          >
            Sem reservas neste período.
          </p>
        )}
        <svg
          ref={svgRef}
          width="100%"
          height="100%"
          viewBox={`0 0 ${width} ${height + 24}`}
          preserveAspectRatio="none"
        >
          {[0, 0.25, 0.5, 0.75, 1].map((f) => {
            const y = height - plotHeight * f;
            return (
              <g key={f}>
                <line
                  x1={axisWidth}
                  x2={width}
                  y1={y}
                  y2={y}
                  stroke="var(--border)"
                  strokeWidth={1}
                />
                <text
                  x={0}
                  y={y + 4}
                  fontSize={11}
                  fill="var(--ink-subtle)"
                  transform={textTransform(0, y + 4)}
                >
                  {axisStep * Math.round(f * 4)}
                </text>
              </g>
            );
          })}
          {days.map((d, i) => {
            const barHeight = (d.count / axisMax) * plotHeight;
            const x = axisWidth + i * (barWidth + barGap);
            return (
              <g key={i}>
                <rect
                  x={x}
                  y={height - barHeight}
                  width={barWidth}
                  height={barHeight}
                  rx={2}
                  fill="var(--accent)"
                  opacity={hover === i ? 1 : d.count === 0 ? 0.15 : hover == null ? 0.85 : 0.5}
                />
                {/* Zona de toque/rato com a altura toda, para a dica. */}
                <rect
                  x={x - barGap / 2}
                  y={0}
                  width={barWidth + barGap}
                  height={height}
                  fill="transparent"
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  onTouchStart={() => setHover(i)}
                />
              </g>
            );
          })}
          {days
            .filter((_, i) => i % Math.ceil(days.length / 6) === 0)
            .map((d, i) => {
              const x = axisWidth + days.indexOf(d) * (barWidth + barGap);
              const y = height + 18;
              return (
                <text
                  key={i}
                  x={x}
                  y={y}
                  fontSize={11}
                  fill="var(--ink-subtle)"
                  transform={textTransform(x, y)}
                >
                  {d.label}
                </text>
              );
            })}
        </svg>
        {hover != null && days[hover] && (
          <div
            className={`chart-tip${(axisWidth + hover * (barWidth + barGap)) / width > 0.6 ? " tip-left" : ""}`}
            style={{
              left: `${((axisWidth + hover * (barWidth + barGap) + barWidth / 2) / width) * 100}%`,
              top: 0,
              bottom: "auto",
              minWidth: 0,
            }}
            role="status"
          >
            <div className="tip-row">
              <span className="tip-label">{days[hover].label}</span>
              <span className="tip-value">
                {days[hover].count} {days[hover].count === 1 ? "reserva" : "reservas"}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Intervalo entre marcas do eixo Y: inteiro, com 4 intervalos a cobrir o
// máximo (1 → 0‑4, 9 → 0‑12, 17 → 0‑20, 230 → 0‑250…).
function tickStep(max: number): number {
  const raw = Math.max(1, Math.ceil(max / 4));
  if (raw <= 5) return raw;
  const magnitude = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / magnitude;
  const nice = n <= 1 ? 1 : n <= 2 ? 2 : n <= 2.5 ? 2.5 : n <= 5 ? 5 : 10;
  return Math.ceil(nice * magnitude);
}
