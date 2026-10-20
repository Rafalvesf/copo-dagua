"use client";

import { useActionState, useTransition } from "react";
import { setMaintenanceMode } from "../app/(admin)/actions";
import { initialActionState } from "./ActionButtons";

type Side = "couple" | "partner" | "guest";

// Modo de manutenção por lado (2026-10-20: os convidados passaram a ter o
// seu, migração 109 parte 5). Cada botão liga/desliga só esse lado;
// "Tudo" liga os três e "Desligar" desliga tudo. Cada clique grava logo.
export function MaintenanceSwitch({
  couple,
  partner,
  guest,
  guestAvailable = true,
}: {
  couple: boolean;
  partner: boolean;
  guest: boolean;
  /** false enquanto a coluna dos convidados não existir na base de dados. */
  guestAvailable?: boolean;
}) {
  const [state, formAction] = useActionState(setMaintenanceMode, initialActionState);
  const [isPending, startTransition] = useTransition();
  const current: Record<Side, boolean> = { couple, partner, guest };
  const anyOn = couple || partner || guest;
  const allOn = couple && partner && (guest || !guestAvailable);

  function submit(next: Record<Side, boolean>) {
    const formData = new FormData();
    if (next.couple) formData.set("maintenance_mode_couple", "on");
    if (next.partner) formData.set("maintenance_mode_partner", "on");
    if (next.guest && guestAvailable) formData.set("maintenance_mode_guest", "on");
    if (guestAvailable) formData.set("has_guest", "1");
    startTransition(() => formAction(formData));
  }

  const sides: { side: Side; label: string }[] = [
    { side: "couple", label: "Organizadores" },
    { side: "partner", label: "Parceiros" },
    ...(guestAvailable ? [{ side: "guest" as Side, label: "Convidados" }] : []),
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, maxWidth: "100%" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 2,
          padding: 3,
          borderRadius: 18,
          background: anyOn ? "var(--status-rejected-bg)" : "var(--surface)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--ink-muted)", padding: "0 8px" }}>Manutenção</span>
        {sides.map(({ side, label }) => (
          <button
            key={side}
            type="button"
            disabled={isPending}
            aria-pressed={current[side]}
            onClick={() => submit({ ...current, [side]: !current[side] })}
            style={pill(current[side], true)}
          >
            {current[side] ? "● " : ""}
            {label}
          </button>
        ))}
        <button
          type="button"
          disabled={isPending || allOn}
          onClick={() => submit({ couple: true, partner: true, guest: true })}
          style={pill(false, false)}
        >
          Tudo
        </button>
        <button
          type="button"
          disabled={isPending || !anyOn}
          onClick={() => submit({ couple: false, partner: false, guest: false })}
          style={{ ...pill(!anyOn, false), background: !anyOn ? "var(--ink)" : "transparent" }}
        >
          Desligado
        </button>
      </div>
      {state.error && <span style={{ fontSize: 12, color: "var(--status-rejected-fg)" }}>{state.error}</span>}
    </div>
  );
}

function pill(active: boolean, danger: boolean) {
  return {
    fontSize: 12,
    fontWeight: 600,
    padding: "6px 12px",
    borderRadius: 999,
    border: "none",
    cursor: "pointer",
    background: active ? (danger ? "var(--status-rejected-fg)" : "var(--ink)") : "transparent",
    color: active ? "var(--surface)" : "var(--ink-muted)",
  } as const;
}
