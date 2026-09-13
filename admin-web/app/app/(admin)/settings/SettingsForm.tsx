"use client";

import { useActionState } from "react";
import { updatePlatformSettings } from "./actions";
import { initialActionState } from "@/components/ActionButtons";
import type { PlatformSettings } from "@/lib/types";

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
      style={{
        background: "var(--surface)",
        borderRadius: 16,
        boxShadow: "var(--shadow-card)",
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        maxWidth: 560,
      }}
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

      {state.error && <p style={{ color: "var(--status-rejected-fg)", fontSize: 13 }}>{state.error}</p>}

      <div>
        <button
          type="submit"
          disabled={isPending}
          style={{
            padding: "10px 20px",
            borderRadius: 999,
            border: "none",
            background: "var(--ink)",
            color: "var(--surface)",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
          }}
        >
          {isPending ? "A guardar..." : "Guardar definições"}
        </button>
      </div>

      <p style={{ fontSize: 12, color: "var(--ink-muted)" }}>
        Última alteração: {new Date(settings.updated_at).toLocaleString("pt-PT")}
      </p>
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
    <label style={{ display: "flex", flexDirection: "column", gap: 6, fontSize: 14 }}>
      {label}
      <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
        <input
          name={name}
          type="number"
          defaultValue={defaultValue}
          min={min}
          max={max}
          step={step ?? 1}
          required
          style={{
            width: 100,
            padding: "8px 10px",
            borderRadius: 10,
            border: "1px solid var(--border-muted)",
            fontSize: 14,
          }}
        />
        <span style={{ color: "var(--ink-muted)", fontSize: 13 }}>{suffix}</span>
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
    <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, cursor: "pointer" }}>
      <input name={name} type="checkbox" defaultChecked={defaultChecked} style={{ width: 16, height: 16 }} />
      {label}
    </label>
  );
}
