// Donut em SVG puro (stroke-dasharray por segmento) — `slices` já vem
// agregado a partir do estado real das bookings (ver page.tsx).
export function StatusDonut({ slices }: { slices: { label: string; value: number; color: string }[] }) {
  const total = slices.reduce((sum, s) => sum + s.value, 0);
  const size = 180;
  const radius = 70;
  const strokeWidth = 26;
  const circumference = 2 * Math.PI * radius;

  let offset = 0;
  const segments = slices
    .filter((s) => s.value > 0)
    .map((s) => {
      const fraction = total === 0 ? 0 : s.value / total;
      const dash = fraction * circumference;
      const segment = (
        <circle
          key={s.label}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={s.color}
          strokeWidth={strokeWidth}
          strokeDasharray={`${dash} ${circumference - dash}`}
          strokeDashoffset={-offset}
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      );
      offset += dash;
      return segment;
    });

  return (
    // `height:"100%"` + `aspectRatio:"1"` no círculo (em vez de
    // `width`/`height` fixos em pixels) — mesmo motivo que
    // `components/BookingsBarChart.tsx`: esta caixa é redimensionável em
    // modo de edição (`components/DashboardGrid.tsx`), um tamanho fixo
    // não acompanhava o redimensionamento. `aspectRatio:"1"` mantém o
    // círculo circular (não oval) enquanto encolhe/cresce com a altura
    // disponível; `maxWidth:"50%"` evita que ele coma toda a largura
    // quando a caixa fica baixa e larga.
    <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap", height: "100%" }}>
      <div style={{ position: "relative", height: "100%", aspectRatio: "1", maxWidth: "50%", flexShrink: 0 }}>
        <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
          {total === 0 ? (
            <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="var(--border-muted)" strokeWidth={strokeWidth} />
          ) : (
            segments
          )}
        </svg>
        {total === 0 && (
          <p
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
              color: "var(--ink-muted)",
              fontSize: 12,
              padding: "0 30px",
            }}
          >
            Sem reservas ainda
          </p>
        )}
      </div>
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
        {slices.map((s) => (
          <li key={s.label} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13 }}>
            <span
              aria-hidden
              style={{ width: 9, height: 9, borderRadius: "50%", background: s.color, flexShrink: 0 }}
            />
            <span style={{ color: "var(--ink)" }}>{s.label}</span>
            <span style={{ color: "var(--ink-muted)" }}>
              {s.value} ({total === 0 ? 0 : Math.round((s.value / total) * 100)}%)
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
