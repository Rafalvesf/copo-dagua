"use client";

import { useActionState, useTransition } from "react";
import { setMaintenanceMode } from "../app/(admin)/actions";
import { initialActionState } from "./ActionButtons";

type Side = "couple" | "partner" | "guest";

// Modo de manutenção por lado (organizadores, parceiros, convidados).
// Cada interruptor grava logo; "Ligar tudo" / "Desligar tudo" mexem nos três.
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
  const anyOn = couple || partner || (guest && guestAvailable);
  const allOn = couple && partner && (guest || !guestAvailable);

  function submit(next: Record<Side, boolean>) {
    const formData = new FormData();
    if (next.couple) formData.set("maintenance_mode_couple", "on");
    if (next.partner) formData.set("maintenance_mode_partner", "on");
    if (next.guest && guestAvailable) formData.set("maintenance_mode_guest", "on");
    if (guestAvailable) formData.set("has_guest", "1");
    startTransition(() => formAction(formData));
  }

  const sides: { side: Side; label: string; hint: string }[] = [
    { side: "couple", label: "Organizadores", hint: "Quem planeia o evento" },
    { side: "partner", label: "Parceiros", hint: "Fornecedores e espaços" },
    ...(guestAvailable ? [{ side: "guest" as Side, label: "Convidados", hint: "Página e app dos convidados" }] : []),
  ];

  return (
    <div className="stack-sm">
      <ul className="list bleed">
        {sides.map(({ side, label, hint }) => (
          <li key={side}>
            <div className="list-main">
              <p className="list-title">{label}</p>
              <p className="list-sub">{current[side] ? "Em manutenção — não conseguem usar a app" : hint}</p>
            </div>
            <button
              type="button"
              role="switch"
              className="switch switch-danger"
              aria-checked={current[side]}
              aria-label={`Manutenção para ${label}`}
              disabled={isPending}
              onClick={() => submit({ ...current, [side]: !current[side] })}
            />
          </li>
        ))}
      </ul>
      <div className="row" style={{ paddingTop: 8 }}>
        <button type="button" className="btn btn-secondary btn-sm" disabled={isPending || allOn} onClick={() => submit({ couple: true, partner: true, guest: true })}>
          Ligar tudo
        </button>
        <button type="button" className="btn btn-ghost btn-sm" disabled={isPending || !anyOn} onClick={() => submit({ couple: false, partner: false, guest: false })}>
          Desligar tudo
        </button>
        {state.error && <span className="form-error">{state.error}</span>}
      </div>
    </div>
  );
}
