import type { ReactNode } from "react";
import Link from "next/link";
import { Sparkline } from "./Sparkline";

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
    <div
      style={{
        background: "var(--surface)",
        borderRadius: 18,
        boxShadow: "var(--shadow-card)",
        padding: 18,
        display: "flex",
        flexDirection: "column",
        gap: 12,
        height: "100%",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span
          aria-hidden
          style={{
            width: 38,
            height: 38,
            flexShrink: 0,
            borderRadius: "50%",
            background: "var(--status-published-bg)",
            color: "var(--accent-dark)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </span>
        <div style={{ fontFamily: "var(--font-serif)", fontSize: 32, fontWeight: 500 }}>{value}</div>
      </div>
      <span style={{ fontSize: 13, color: "var(--ink-muted)", fontWeight: 400 }}>{label}</span>
      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 8 }}>
        <div>
          {deltaPct === null ? (
            <span style={{ fontSize: 12.5, color: "var(--ink-muted)" }}>sem histórico</span>
          ) : (
            <span
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: positive ? "var(--status-published-fg)" : "var(--status-rejected-fg)",
              }}
            >
              {positive ? "↑" : "↓"} {Math.abs(deltaPct).toFixed(1)}%
            </span>
          )}
          <p style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 2 }}>vs. período anterior</p>
        </div>
        <Sparkline points={trend} color={positive ? "var(--accent)" : "var(--status-rejected-fg)"} />
      </div>
    </div>
  );

  return href ? <Link href={href}>{content}</Link> : content;
}
