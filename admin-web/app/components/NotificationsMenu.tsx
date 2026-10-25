"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export type AdminAlert = { key: string; href: string; title: string; detail: string };

// Sino da barra de topo (2026-10-21): antes era só um link para o Início,
// por isso "não fazia nada" quando já se estava lá. Agora abre a lista do
// que precisa de atenção, com atalho para cada página.
export function NotificationsMenu({ alerts }: { alerts: AdminAlert[] }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const total = alerts.length;

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const label = total > 0 ? `${total} ${total === 1 ? "assunto" : "assuntos"} por tratar` : "Sem assuntos por tratar";
  return (
    <div className="notif-wrap" ref={ref}>
      <button
        type="button"
        className="icon-btn"
        aria-label={label}
        title={label}
        aria-haspopup="true"
        aria-expanded={open}
        aria-pressed={open}
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden>
          <path d="M6 9a6 6 0 0 1 12 0c0 4.5 1.5 6 1.5 6H4.5S6 13.5 6 9Z" />
          <path d="M10 19a2 2 0 0 0 4 0" />
        </svg>
        {total > 0 && <span className="dot-count">{total}</span>}
      </button>
      {open && (
        <div className="notif-pop" role="menu">
          <div className="notif-head">
            <strong>Notificações</strong>
            <span>{label}</span>
          </div>
          {total === 0 ? (
            <p className="notif-empty">Está tudo em dia.</p>
          ) : (
            <ul className="notif-list">
              {alerts.map((a) => (
                <li key={a.key}>
                  <Link href={a.href} role="menuitem" onClick={() => setOpen(false)}>
                    <span className="notif-dot" aria-hidden />
                    <span style={{ minWidth: 0 }}>
                      <span className="notif-title">{a.title}</span>
                      <span className="notif-detail">{a.detail}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}
