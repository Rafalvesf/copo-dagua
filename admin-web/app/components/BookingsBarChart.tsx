"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type Period = "7d" | "30d" | "3m" | "1y";

const PERIODS: { key: Period; label: string }[] = [
  { key: "7d", label: "7 dias" },
  { key: "30d", label: "30 dias" },
  { key: "3m", label: "3 meses" },
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
  const days = useMemo(() => buildBuckets(rows, period, nowMs), [rows, period, nowMs]);

  const axisWidth = 28;
  const chartWidth = 640;
  const width = chartWidth + axisWidth;
  const height = 165;
  const barGap = 3;
  const barWidth = Math.max(2, chartWidth / days.length - barGap);
  const rawMax = Math.max(...days.map((d) => d.count), 1);
  const totalCount = days.reduce((sum, d) => sum + d.count, 0);
  // Chão de 5 no eixo — com `rawMax` de 0 ou 1 (poucos/nenhuns dados
  // reais ainda), `niceAxisMax` sozinho devolvia 1, e cinco marcas em 0/
  // 0.25/0.5/0.75/1 arredondadas davam legendas repetidas ("1, 1, 1, 0,
  // 0"). Não inventa dados: só evita que o eixo fique feio quando o
  // volume real ainda é trivial.
  const axisMax = Math.max(niceAxisMax(rawMax), 5);

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
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, flexShrink: 0 }}>
        <h2 style={{ fontSize: 14, fontWeight: 600 }}>Reservas</h2>
        <div style={{ display: "flex", gap: 4, background: "var(--status-suspended-bg)", borderRadius: 10, padding: 3 }}>
          {PERIODS.map((p) => (
            <button
              key={p.key}
              onClick={() => setPeriod(p.key)}
              style={{
                padding: "6px 12px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                fontSize: 12.5,
                fontWeight: 600,
                background: period === p.key ? "var(--surface)" : "transparent",
                color: period === p.key ? "var(--ink)" : "var(--ink-muted)",
                boxShadow: period === p.key ? "0 1px 3px rgba(0,0,0,0.08)" : "none",
              }}
            >
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
            const y = height - height * f;
            return (
              <g key={f}>
                <line
                  x1={axisWidth}
                  x2={width}
                  y1={y}
                  y2={y}
                  stroke="var(--border-muted)"
                  strokeWidth={1}
                />
                <text
                  x={0}
                  y={y + 4}
                  fontSize={11}
                  fill="var(--ink-muted)"
                  transform={textTransform(0, y + 4)}
                >
                  {Math.round(axisMax * f)}
                </text>
              </g>
            );
          })}
          {days.map((d, i) => {
            const barHeight = (d.count / axisMax) * (height - 8);
            const x = axisWidth + i * (barWidth + barGap);
            return (
              <rect
                key={i}
                x={x}
                y={height - barHeight}
                width={barWidth}
                height={barHeight}
                rx={2}
                fill="var(--accent)"
                opacity={d.count === 0 ? 0.15 : 0.85}
              >
                {/* Um único nó de texto (string interpolada), não vários
                    filhos JSX separados — `<title>` dentro de SVG inline
                    fora do `<head>` já causou um mismatch de hidratação
                    real aqui (2026-08-30/31) com `{d.label}: {d.count}`
                    (três nós). `suppressHydrationWarning` como rede de
                    segurança: é só uma dica de acessibilidade/tooltip,
                    nunca lógica de aplicação. */}
                <title suppressHydrationWarning>{`${d.label}: ${d.count}`}</title>
              </rect>
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
                  fill="var(--ink-muted)"
                  transform={textTransform(x, y)}
                >
                  {d.label}
                </text>
              );
            })}
        </svg>
      </div>
    </div>
  );
}

// Arredonda o máximo do eixo Y para cima, para o "próximo número redondo"
// (1/2/5 × potência de 10) — evita eixos tipo "0, 17, 34, 51..." quando o
// máximo real de um período é, por exemplo, 17.
function niceAxisMax(value: number): number {
  const magnitude = Math.pow(10, Math.floor(Math.log10(value)));
  const normalized = value / magnitude;
  const niceNormalized = normalized <= 1 ? 1 : normalized <= 2 ? 2 : normalized <= 5 ? 5 : 10;
  return niceNormalized * magnitude;
}
