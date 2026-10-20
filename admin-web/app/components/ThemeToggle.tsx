"use client";

import { useEffect, useState } from "react";

type Mode = "system" | "light" | "dark";
const NEXT: Record<Mode, Mode> = { system: "light", light: "dark", dark: "system" };
const LABEL: Record<Mode, string> = { system: "Tema: automático", light: "Tema: claro", dark: "Tema: escuro" };

// Claro / escuro / automático (segue o sistema). Fica guardado neste
// navegador; o script em app/layout.tsx aplica-o antes de pintar.
export function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");

  useEffect(() => {
    try {
      const t = localStorage.getItem("admin-theme");
      // eslint-disable-next-line react-hooks/set-state-in-effect -- lê a preferência guardada no navegador
      if (t === "light" || t === "dark") setMode(t);
    } catch {
      /* sem armazenamento: fica automático */
    }
  }, []);

  function cycle() {
    const next = NEXT[mode];
    setMode(next);
    const root = document.documentElement;
    if (next === "system") delete root.dataset.theme;
    else root.dataset.theme = next;
    try {
      if (next === "system") localStorage.removeItem("admin-theme");
      else localStorage.setItem("admin-theme", next);
    } catch {
      /* ignora */
    }
  }

  return (
    <button type="button" className="icon-btn" onClick={cycle} aria-label={LABEL[mode]} title={`${LABEL[mode]} (clica para mudar)`}>
      {mode === "light" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
      ) : mode === "dark" ? (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" />
        </svg>
      ) : (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 3.5v17a8.5 8.5 0 0 0 0-17Z" fill="currentColor" />
        </svg>
      )}
    </button>
  );
}
