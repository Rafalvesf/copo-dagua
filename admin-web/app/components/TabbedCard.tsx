"use client";

import { useState, type ReactNode } from "react";

export type TabbedCardTab = {
  key: string;
  label: string;
  badge?: number;
  highlight?: boolean;
  content: ReactNode;
};

// Cartão genérico com separadores dentro da mesma caixa — usado para
// "Assuntos urgentes" / "Ações rápidas" e para "Reservas recentes" /
// "Funil de reservas" (pedidos explícitos do utilizador, 2026-08-30/31).
// O conteúdo de cada separador continua a ser montado no Server Component
// (page.tsx); só a alternância entre eles precisa de estado no cliente.
export function TabbedCard({
  tabs,
  defaultTabKey,
  height,
}: {
  tabs: TabbedCardTab[];
  defaultTabKey?: string;
  /** "100%" quando o cartão precisa de esticar até ao fundo do ecrã
   * (ver layout.tsx/page.tsx) — omitido para altura natural do conteúdo. */
  height?: string;
}) {
  const [activeKey, setActiveKey] = useState(defaultTabKey ?? tabs[0]?.key);
  const active = tabs.find((t) => t.key === activeKey) ?? tabs[0];

  return (
    <section
      style={{
        background: "var(--surface)",
        borderRadius: 16,
        boxShadow: "var(--shadow-card)",
        padding: 20,
        height,
        overflow: height ? "hidden" : undefined,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", gap: 8, marginBottom: 14, flexShrink: 0 }}>
        {tabs.map((tab) => (
          <TabButton
            key={tab.key}
            active={tab.key === activeKey}
            onClick={() => setActiveKey(tab.key)}
            label={tab.badge && tab.badge > 0 ? `${tab.label} (${tab.badge})` : tab.label}
            highlight={tab.highlight}
          />
        ))}
      </div>
      {/* `key={active?.key}` — força o React a desmontar/montar de novo em
          vez de tentar reconciliar entre árvores diferentes (ex: "Ações
          rápidas" tem uma lista de botões, "Assuntos urgentes" uma lista
          de texto); sem isto, trocar de separador podia deixar a barra
          de scroll/altura de um separador "colada" ao entrar no outro.
          `overflow: hidden` garante que este separador nunca mostra
          scroll próprio — o cartão já tem tamanho fixo (`height`, quando
          passado) e não deve crescer/mostrar scroll consoante o
          conteúdo. */}
      <div key={active?.key} style={{ flex: 1, minHeight: 0, overflow: "hidden" }}>
        {active?.content}
      </div>
    </section>
  );
}

function TabButton({
  active,
  onClick,
  label,
  highlight,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  highlight?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: "8px 10px",
        borderRadius: 10,
        border: "none",
        cursor: "pointer",
        fontSize: 13,
        fontWeight: 600,
        background: active ? (highlight ? "var(--status-rejected-bg)" : "var(--status-published-bg)") : "transparent",
        color: active ? (highlight ? "var(--status-rejected-fg)" : "var(--accent-dark)") : "var(--ink-muted)",
      }}
    >
      {label}
    </button>
  );
}
