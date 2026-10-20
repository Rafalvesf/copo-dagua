import type { CSSProperties, ReactNode } from "react";
import Link from "next/link";

// Peças base do admin (redesenho 2026-10-20). Só marcação + classes de
// app/globals.css — sem estado, servem em Server e Client Components.

export function PageHeader({
  title,
  subtitle,
  back,
  actions,
  badge,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  back?: { href: string; label: string };
  actions?: ReactNode;
  badge?: ReactNode;
}) {
  return (
    <header className="page-header">
      <div className="page-header-text">
        {back && (
          <Link href={back.href} className="page-eyebrow">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M15 18l-6-6 6-6" />
            </svg>
            {back.label}
          </Link>
        )}
        <h1 className="page-title">
          {title}
          {badge}
        </h1>
        {subtitle && <p className="page-sub">{subtitle}</p>}
      </div>
      {actions && <div className="page-actions">{actions}</div>}
    </header>
  );
}

export function Card({
  title,
  subtitle,
  actions,
  children,
  flush,
  tone,
  className,
  style,
  footer,
  id,
}: {
  title?: ReactNode;
  subtitle?: ReactNode;
  actions?: ReactNode;
  children?: ReactNode;
  /** Sem padding no corpo (tabelas e listas encostadas às margens). */
  flush?: boolean;
  tone?: "accent" | "warning" | "danger";
  className?: string;
  style?: CSSProperties;
  footer?: ReactNode;
  id?: string;
}) {
  return (
    <section id={id} className={["card", tone ? `card-${tone}` : "", className ?? ""].join(" ").trim()} style={style}>
      {(title || actions) && (
        <div className="card-head">
          <div style={{ minWidth: 0 }}>
            {title && <h2 className="card-title">{title}</h2>}
            {subtitle && <p className="card-sub">{subtitle}</p>}
          </div>
          {actions && <div className="row">{actions}</div>}
        </div>
      )}
      {children !== undefined && children !== null && <div className={flush ? "card-flush" : "card-body"}>{children}</div>}
      {footer && <div className="card-foot">{footer}</div>}
    </section>
  );
}

export function Stat({
  label,
  value,
  hint,
  href,
  tone,
  icon,
}: {
  label: ReactNode;
  value: ReactNode;
  hint?: ReactNode;
  href?: string;
  tone?: "warning" | "danger";
  icon?: ReactNode;
}) {
  const cls = ["card", "stat", tone ? `stat-${tone}` : ""].join(" ").trim();
  const inner = (
    <>
      <span className="stat-label">
        {icon}
        {label}
      </span>
      <span className="stat-value">{value}</span>
      {hint && <span className="stat-hint">{hint}</span>}
    </>
  );
  return href ? (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  ) : (
    <div className={cls}>{inner}</div>
  );
}

export type Tone = "success" | "warning" | "danger" | "info" | "accent" | "neutral";

export function Badge({ tone = "neutral", children, plain }: { tone?: Tone; children: ReactNode; plain?: boolean }) {
  return <span className={`badge badge-${tone}${plain ? " badge-plain" : ""}`}>{children}</span>;
}

export function Empty({ title, children }: { title?: ReactNode; children?: ReactNode }) {
  return (
    <div className="empty">
      {title && <p className="empty-title">{title}</p>}
      {children}
    </div>
  );
}

/** Filtros por link (?status=…), com contagem opcional. */
export function FilterTabs({
  items,
  current,
}: {
  items: { href: string; label: string; value: string; count?: number }[];
  current: string;
}) {
  return (
    <nav className="tabs" aria-label="Filtrar">
      {items.map((it) => (
        <Link key={it.value} href={it.href} className="tab" aria-current={it.value === current ? "page" : undefined}>
          {it.label}
          {it.count !== undefined && <span className="tab-count">{it.count}</span>}
        </Link>
      ))}
    </nav>
  );
}

/** Sub-navegação entre páginas irmãs (ex.: Tarefas → Modelos / Analytics). */
export function SubNav({ items, current }: { items: { href: string; label: string }[]; current: string }) {
  return (
    <nav className="subnav">
      {items.map((it) => (
        <Link key={it.href} href={it.href} aria-current={it.href === current ? "page" : undefined}>
          {it.label}
        </Link>
      ))}
    </nav>
  );
}

export function DetailList({ items }: { items: { label: ReactNode; value: ReactNode }[] }) {
  return (
    <dl className="dl">
      {items.map((it, i) => (
        <div key={i} style={{ display: "contents" }}>
          <dt>{it.label}</dt>
          <dd>{it.value ?? "—"}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Alert({ tone = "info", children }: { tone?: "info" | "warning" | "danger" | "success"; children: ReactNode }) {
  return <div className={`alert${tone === "info" ? "" : ` alert-${tone}`}`}>{children}</div>;
}

export function TableCard({ children }: { children: ReactNode }) {
  return <div className="table-wrap">{children}</div>;
}
