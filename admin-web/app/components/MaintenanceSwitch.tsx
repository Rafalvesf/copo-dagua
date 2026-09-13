"use client";

import { useActionState, useTransition } from "react";
import { setMaintenanceMode } from "../app/(admin)/actions";
import { initialActionState } from "./ActionButtons";

type Mode = "off" | "couple" | "partner" | "both";

function modeFor(couple: boolean, partner: boolean): Mode {
  if (couple && partner) return "both";
  if (couple) return "couple";
  if (partner) return "partner";
  return "off";
}

// Pedido explícito do utilizador: "add a maintenance switch for
// couple, partner and both side at the same time" — controlo
// segmentado de 4 posições (Desligado/Casal/Parceiro/Ambos) em vez de
// dois checkboxes independentes: um único estado ativo de cada vez é
// mais difícil de ler mal do que dois interruptores separados, para um
// controlo que tira partes da app real do ar. Cada clique submete de
// imediato — não há botão "Guardar" à parte.
export function MaintenanceSwitch({ couple, partner }: { couple: boolean; partner: boolean }) {
  const [state, formAction] = useActionState(setMaintenanceMode, initialActionState);
  const [isPending, startTransition] = useTransition();
  const current = modeFor(couple, partner);

  function set(mode: Mode) {
    const formData = new FormData();
    if (mode === "couple" || mode === "both") formData.set("maintenance_mode_couple", "on");
    if (mode === "partner" || mode === "both") formData.set("maintenance_mode_partner", "on");
    startTransition(() => formAction(formData));
  }

  const options: { mode: Mode; label: string }[] = [
    { mode: "off", label: "Desligado" },
    { mode: "couple", label: "Casal" },
    { mode: "partner", label: "Parceiro" },
    { mode: "both", label: "Ambos" },
  ];

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          padding: 3,
          borderRadius: 999,
          background: current === "off" ? "var(--surface)" : "var(--status-rejected-bg)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <span style={{ fontSize: 11.5, fontWeight: 600, color: "var(--ink-muted)", padding: "0 8px" }}>
          Manutenção
        </span>
        {options.map((o) => (
          <button
            key={o.mode}
            type="button"
            disabled={isPending}
            onClick={() => set(o.mode)}
            style={{
              fontSize: 12,
              fontWeight: 600,
              padding: "6px 12px",
              borderRadius: 999,
              border: "none",
              cursor: isPending ? "default" : "pointer",
              background: current === o.mode ? (o.mode === "off" ? "var(--ink)" : "var(--status-rejected-fg)") : "transparent",
              color: current === o.mode ? "var(--surface)" : "var(--ink-muted)",
            }}
          >
            {o.label}
          </button>
        ))}
      </div>
      {state.error && <span style={{ fontSize: 12, color: "var(--status-rejected-fg)" }}>{state.error}</span>}
    </div>
  );
}
