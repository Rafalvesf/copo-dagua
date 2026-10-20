"use client";

import { useState, type ReactNode } from "react";

export type TabbedCardTab = {
  key: string;
  label: string;
  badge?: number;
  highlight?: boolean;
  content: ReactNode;
};

// Cartão com separadores dentro da mesma caixa.
export function TabbedCard({
  tabs,
  defaultTabKey,
  height,
}: {
  tabs: TabbedCardTab[];
  defaultTabKey?: string;
  height?: string;
}) {
  const [activeKey, setActiveKey] = useState(defaultTabKey ?? tabs[0]?.key);
  const active = tabs.find((t) => t.key === activeKey) ?? tabs[0];

  return (
    <section className="card" style={{ height, overflow: height ? "hidden" : undefined, display: "flex", flexDirection: "column" }}>
      <div className="card-head" style={{ paddingBottom: 12 }}>
        <div className="tabs" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              role="tab"
              className="tab"
              aria-selected={tab.key === activeKey}
              onClick={() => setActiveKey(tab.key)}
            >
              {tab.label}
              {tab.badge !== undefined && tab.badge > 0 && (
                <span className="badge badge-plain" style={{ height: 18, padding: "0 6px", background: tab.highlight ? "var(--danger-bg)" : undefined, color: tab.highlight ? "var(--danger-fg)" : undefined }}>
                  {tab.badge}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
      <div key={active?.key} style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>
        {active?.content}
      </div>
    </section>
  );
}
