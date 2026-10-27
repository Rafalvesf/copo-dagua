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
        hint="Proteção de pagamento, somada ao valor do parceiro em cada pagamento (sinal e restante). IVA incluído."
        suffix="%"
        defaultValue={settings.platform_commission_percentage}
        min={0}
        max={100}
        step={0.1}
      />
      {Array.isArray((settings as unknown as { organizer_fee_tiers?: unknown }).organizer_fee_tiers) && (
        <TierFields
          prefix="org"
          label="Taxa do organizador (por escalões)"
          hint="Somada ao valor do parceiro em cada pagamento. Sobre o valor total da reserva, como os escalões do IRS. IVA incluído. Quando há escalões, substitui a percentagem acima (que fica só para as reservas dos convidados)."
          tiers={(settings as unknown as { organizer_fee_tiers: Tier[] }).organizer_fee_tiers}
          defaults={[2000, 10000]}
        />
      )}
      {Array.isArray((settings as unknown as { partner_fee_tiers?: unknown }).partner_fee_tiers) && (
        <TierFields
          prefix="tier"
          label="Taxa descontada ao parceiro (por escalões)"
          hint="Descontada ao parceiro quando o dinheiro é libertado. Sobre o valor total da reserva, como os escalões do IRS. IVA incluído. Só vale para pagamentos feitos depois de a alterares."
          tiers={(settings as unknown as { partner_fee_tiers: Tier[] }).partner_fee_tiers}
          defaults={[2000, 10000]}
        />
      )}
      {(settings as unknown as { partner_free_months?: number }).partner_free_months !== undefined && (
        <NumberField
          name="partner_free_months"
          label="Parceiros novos sem taxa durante"
          hint="Oferta de lançamento: a contar da data em que o parceiro criou o perfil. 0 = sem oferta."
          suffix="meses"
          defaultValue={(settings as unknown as { partner_free_months: number }).partner_free_months}
          min={0}
          max={36}
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

type Tier = { up_to: number | null; pct: number };

function TierFields({ prefix, label, hint, tiers, defaults }: { prefix: string; label: string; hint: string; tiers: Tier[]; defaults: [number, number] }) {
  const t = [0, 1, 2].map((i) => tiers[i] ?? { up_to: null, pct: 0 });
  const row = (i: number, last: boolean) => (
    <div className="row" style={{ gap: 8, flexWrap: "wrap", marginTop: 6 }}>
      <input name={`${prefix}${i + 1}_pct`} type="number" step={0.1} min={0} max={49} defaultValue={t[i].pct} className="input tnum" style={{ width: 80 }} required />
      {last ? (
        <span className="muted" style={{ fontSize: 13 }}>% acima disso</span>
      ) : (
        <>
          <span className="muted" style={{ fontSize: 13 }}>% até</span>
          <input name={`${prefix}${i + 1}_up_to`} type="number" step={1} min={1} defaultValue={t[i].up_to ?? defaults[i]} className="input tnum" style={{ width: 100 }} required />
          <span className="muted" style={{ fontSize: 13 }}>€</span>
        </>
      )}
    </div>
  );
  return (
    <fieldset className="field" style={{ border: 0, padding: 0, margin: 0 }}>
      <span className="field-label">{label}</span>
      <span className="field-hint" style={{ maxWidth: "62ch" }}>{hint}</span>
      {row(0, false)}
      {row(1, false)}
      {row(2, true)}
    </fieldset>
  );
}
