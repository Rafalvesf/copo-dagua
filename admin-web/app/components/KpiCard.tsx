import type { ReactNode } from "react";
import Link from "next/link";
import { Sparkline } from "./Sparkline";

// Indicador do dashboard: valor, variação face aos 30 dias anteriores e
// tendência (dados reais agregados em page.tsx).
export function KpiCard({
  icon,
  label,
  value,
  deltaPct,
  trend,
  href,
}: {
  icon: ReactNode;
  label: string;
  value: string;
  deltaPct: number | null;
  trend: number[];
  href?: string;
}) {
  const positive = (deltaPct ?? 0) >= 0;
  const content = (
    <div className="card stat" style={{ height: "100%", justifyContent: "space-between", gap: 8 }}>
      <span className="stat-label">
        <span aria-hidden style={{ display: "inline-flex", color: "var(--accent)" }}>
          {icon}
        </span>
        {label}
      </span>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 8 }}>
        <div style={{ minWidth: 0 }}>
          <div className="stat-value kpi-value" style={{ fontSize: 26 }}>
            {value}
          </div>
          <div className="stat-hint" style={{ marginTop: 2, whiteSpace: "nowrap" }}>
            {deltaPct === null ? (
              "sem histórico"
            ) : (
              <>
                <span className={positive ? "stat-up" : "stat-down"}>
                  {positive ? "▲" : "▼"} {Math.abs(deltaPct).toFixed(0)}%
                </span>{" "}
                <span className="kpi-vs">vs. mês anterior</span>
              </>
            )}
          </div>
        </div>
        <span className="kpi-spark" style={{ display: "flex", flexShrink: 0 }}>
          <Sparkline points={trend} color={positive ? "var(--accent)" : "var(--danger-fg)"} />
        </span>
      </div>
    </div>
  );

  return href ? (
    <Link href={href} style={{ display: "block", height: "100%" }}>
      {content}
    </Link>
  ) : (
    content
  );
}
