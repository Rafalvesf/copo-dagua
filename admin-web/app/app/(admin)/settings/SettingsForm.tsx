"use client";

import { useActionState } from "react";
import { updatePlatformSettings } from "./actions";
import { initialActionState } from "@/components/ActionButtons";
import type { PlatformSettings } from "@/lib/types";
import { fmtDateTime } from "@/lib/format";

export function SettingsForm({ settings }: { settings: PlatformSettings }) {
  const [state, formAction, isPending] = useActionState(updatePlatformSettings, initialActionState);

  return (
    <form
      // `key` força o React a desmontar/remontar o formulário sempre
      // que `settings` muda de verdade (ex: depois de guardar) — os
      // campos abaixo (`NumberField`/`ToggleField`) usam
      // `defaultValue`/`defaultChecked` (não controlados), que só se
      // aplicam na montagem inicial. Sem isto, `updatePlatformSettings()`
      // gravava corretamente na base de dados (confirmado por
      // `revalidatePath`), mas o formulário continuava a mostrar os
      // valores antigos até um refresh manual da página — parecia que
      // "guardar" não tinha feito nada. Pedido explícito do utilizador:
      // "qualquer alteração feita em definições tem que ser guardada
      // para refletir efeito".
      key={settings.updated_at}
      action={formAction}
      className="stack"
      style={{ gap: 18 }}
    >
      <NumberField
        name="booking_min_days_before_event"
        label="Prazo mínimo para nova reserva"
        suffix="dias antes do evento"
        defaultValue={settings.booking_min_days_before_event}
        min={0}
      />
      <NumberField
        name="default_booking_hold_hours"
        label="Tempo para pagamento do sinal"
        suffix="horas"
        defaultValue={settings.default_booking_hold_hours}
        min={1}
      />
      <NumberField
        name="payment_grace_period_days"
        label="Margem após pagamento em atraso"
        suffix="dias"
        defaultValue={settings.payment_grace_period_days}
        min={0}
      />
      <ToggleField
        name="manual_partner_approval"
        label="Aprovação manual de parceiros"
        defaultChecked={settings.manual_partner_approval}
      />
      <ToggleField
        name="review_requires_completed_booking"
        label="Permitir review apenas depois de reserva concluída"
        defaultChecked={settings.review_requires_completed_booking}
      />
      <ToggleField
        name="guest_offers_enabled"
        label="Ofertas dos parceiros para convidados (alojamento, transporte…)"
        defaultChecked={Boolean((settings as unknown as { guest_offers_enabled?: boolean }).guest_offers_enabled)}
      />

      {state.error && <p className="form-error">{state.error}</p>}

      <div className="row" style={{ paddingTop: 14, borderTop: "1px solid var(--border)" }}>
        <button type="submit" disabled={isPending} className="btn btn-primary">
          {isPending ? "A guardar…" : "Guardar definições"}
        </button>
        <span className="field-hint">Última alteração: {fmtDateTime(settings.updated_at)}</span>
      </div>
    </form>
  );
}

function NumberField({
  name,
  label,
  suffix,
  defaultValue,
  min,
  max,
  step,
}: {
  name: string;
  label: string;
  suffix: string;
  defaultValue: number;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <div className="row" style={{ flexWrap: "nowrap" }}>
        <input
          name={name}
          type="number"
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step ?? 1}
          required
          className="input tnum"
          style={{ width: 110 }}
        />
        <span className="muted" style={{ fontSize: 13 }}>{suffix}</span>
      </div>
    </label>
  );
}

function ToggleField({
  name,
  label,
  defaultChecked,
}: {
  name: string;
  label: string;
  defaultChecked: boolean;
}) {
  return (
    <label className="check">
      <input name={name} type="checkbox" defaultChecked={defaultChecked} />
      <span>{label}</span>
    </label>
  );
}
