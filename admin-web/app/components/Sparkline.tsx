import { useId } from "react";

// Pequeno SVG de tendência com preenchimento em gradiente sob a linha
// (como no mockup) — sem dependência de gráficos. Os pontos vêm sempre de
// contagens/somas reais agregadas em page.tsx, nunca inventados. Ver
// components/KpiCard.tsx.
//
// `useId()` gera um id único por instância para o `<linearGradient>` —
// vários KpiCard na mesma página, cada um com o seu Sparkline; sem isto,
// dois `id="fill"` iguais no mesmo documento fariam todos os gradientes
// apontarem para a definição do primeiro.
export function Sparkline({ points, color = "var(--accent)" }: { points: number[]; color?: string }) {
  const width = 120;
  const height = 40;
  const gradientId = `sparkline-fill-${useId()}`;
  if (points.length < 2) return <svg width={width} height={height} aria-hidden />;

  const max = Math.max(...points, 1);
  const min = Math.min(...points, 0);
  const range = max - min || 1;
  const step = width / (points.length - 1);

  const coords = points.map((p, i) => {
    const x = i * step;
    const y = height - ((p - min) / range) * (height - 6) - 3;
    return { x, y };
  });

  const linePoints = coords.map((c) => `${c.x.toFixed(1)},${c.y.toFixed(1)}`).join(" ");
  const areaPoints = `0,${height} ${linePoints} ${width},${height}`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} aria-hidden>
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0.25} />
          <stop offset="100%" stopColor={color} stopOpacity={0} />
        </linearGradient>
      </defs>
      <polygon points={areaPoints} fill={`url(#${gradientId})`} stroke="none" />
      <polyline
        points={linePoints}
        fill="none"
        stroke={color}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
