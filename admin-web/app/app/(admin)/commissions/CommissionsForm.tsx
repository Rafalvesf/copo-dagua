"use client";

import { useActionState } from "react";
import { updateCommissionSettings } from "./actions";
import { initialActionState } from "@/components/ActionButtons";
import type { PlatformSettings } from "@/lib/types";
import { fmtDateTime } from "@/lib/format";

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
      className="stack"
      style={{ gap: 18 }}
    >
      <NumberField
        name="platform_commission_percentage"
        label="Comissão paga pelo organizador"
        hint="Somada ao valor do parceiro em cada pagamento (sinal e restante). IVA incluído."
        suffix="%"
        defaultValue={settings.platform_commission_percentage}
        min={0}
        max={100}
        step={0.1}
      />
      {(settings as unknown as { partner_fee_percentage?: number }).partner_fee_percentage !== undefined && (
        <NumberField
          name="partner_fee_percentage"
          label="Taxa descontada ao parceiro"
          hint="Descontada ao valor do parceiro quando o dinheiro é libertado (3 dias depois do evento). IVA incluído. Só vale para pagamentos feitos depois de a alterares."
          suffix="%"
          defaultValue={(settings as unknown as { partner_fee_percentage: number }).partner_fee_percentage}
          min={0}
          max={49}
          step={0.1}
        />
      )}
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
      {(settings as unknown as { deposit_refund_window_hours?: number }).deposit_refund_window_hours !== undefined && (
        <NumberField
          name="deposit_refund_window_hours"
          label="Sinal reembolsável durante"
          hint="Se o organizador cancelar dentro deste tempo depois de pagar o sinal, o sinal é devolvido (comissão incluída) — desde que o parceiro o tenha marcado como reembolsável na proposta. Depois disso, o sinal fica com o parceiro."
          suffix="horas depois de pagar"
          defaultValue={(settings as unknown as { deposit_refund_window_hours: number }).deposit_refund_window_hours}
          min={0}
          max={720}
        />
      )}
      <NumberField
        name="cancellation_penalty_days"
        label="Restante reembolsável até"
        hint="Se o organizador cancelar com pelo menos estes dias de antecedência, o restante que já pagou é devolvido. Com menos, não é. Se for o parceiro a cancelar, devolve-se sempre tudo."
        suffix="dias antes do evento"
        defaultValue={settings.cancellation_penalty_days}
        min={0}
      />

      {state.error && <p className="form-error">{state.error}</p>}

      <div className="row" style={{ paddingTop: 14, borderTop: "1px solid var(--border)" }}>
        <button type="submit" disabled={isPending} className="btn btn-primary">
          {isPending ? "A guardar…" : "Guardar comissões"}
        </button>
        <span className="field-hint">Última alteração: {fmtDateTime(settings.updated_at)}</span>
      </div>
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
      {hint && <span className="field-hint" style={{ maxWidth: "62ch" }}>{hint}</span>}
    </label>
  );
}
