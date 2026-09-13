"use client";

import { useActionState } from "react";
import { updateCommissionSettings } from "./actions";
import { initialActionState } from "@/components/ActionButtons";
import type { PlatformSettings } from "@/lib/types";

export function CommissionsForm({ settings }: { settings: PlatformSettings }) {
  const [state, formAction, isPending] = useActionState(updateCommissionSettings, initialActionState);

  return (
    <form
      // Mesmo raciocínio de `key={settings.updated_at}` em
      // settings/SettingsForm.tsx — campos não controlados
      // (`defaultValue`) só refletem o valor novo se o formulário
      // remontar depois de guardar.
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
        name="platform_commission_percentage"
        label="Comissão da plataforma"
        hint="Cobrada sobre o sinal e o pagamento final via Stripe Connect (application_fee_amount)."
        suffix="%"
        defaultValue={settings.platform_commission_percentage}
        min={0}
        max={100}
        step={0.1}
      />
      <NumberField
        name="deposit_percentage"
        label="Percentagem do sinal"
        hint="Calculada automaticamente sobre o valor total de cada proposta — o parceiro nunca escolhe este valor."
        suffix="%"
        defaultValue={settings.deposit_percentage}
        min={1}
        max={100}
        step={0.1}
      />
      <NumberField
        name="cancellation_penalty_days"
        label="Janela sem penalização para cancelar"
        hint="Se o casal cancelar com menos dias do que isto até ao casamento, o sinal fica cativo (parceiro + comissão da plataforma); fora da janela, o sinal já pago é reembolsado."
        suffix="dias antes do casamento"
        defaultValue={settings.cancellation_penalty_days}
        min={0}
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
          {isPending ? "A guardar..." : "Guardar comissões"}
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
  hint,
  suffix,
  defaultValue,
  min,
  max,
  step,
}: {
  name: string;
  label: string;
  hint?: string;
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
      {hint && <span style={{ fontSize: 12, color: "var(--ink-muted)" }}>{hint}</span>}
    </label>
  );
}
