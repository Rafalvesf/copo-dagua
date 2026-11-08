"use client";

import { useActionState } from "react";
import { updateGrowthSettings } from "./actions";
import { initialActionState } from "@/components/ActionButtons";

export type GrowthSettings = {
  updated_at: string;
  founder_slots?: number;
  founder_free_months?: number;
  founder_featured_slots?: number;
  founder_featured_months?: number;
  referral_zero_fee?: boolean;
  referral_free_every?: number;
  referral_min_booking?: number;
  pro_enabled?: boolean;
  pro_price_monthly?: number;
  pro_price_yearly?: number;
  free_shop_products?: number;
  gift_fee_percentage?: number;
  pro_fee_discount?: number;
  pro_referral_free_every?: number;
  pro_promotion_extra_pct?: number;
};

// Fundadores, convites dos parceiros e Pro (migrações 151, 160, 161).
export function GrowthForm({ settings }: { settings: GrowthSettings }) {
  const [state, formAction, isPending] = useActionState(updateGrowthSettings, initialActionState);
  return (
    <form key={settings.updated_at} action={formAction} className="stack" style={{ gap: 18 }}>
      <h3 style={{ margin: 0, fontSize: 15 }}>Parceiros Fundadores</h3>
      <Num name="founder_slots" label="Vagas de fundador" suffix="primeiros parceiros publicados" value={settings.founder_slots ?? 100} />
      <Num name="founder_free_months" label="Meses sem taxa para fundadores" suffix="meses" value={settings.founder_free_months ?? 3} />
      <Num name="founder_featured_slots" label="Fundadores com destaque grátis" suffix="primeiros" value={settings.founder_featured_slots ?? 50} />
      <Num name="founder_featured_months" label="Duração do destaque grátis" suffix="meses" value={settings.founder_featured_months ?? 6} />

      <h3 style={{ margin: "8px 0 0", fontSize: 15 }}>Convites dos parceiros</h3>
      <label className="check">
        <input name="referral_zero_fee" type="checkbox" defaultChecked={settings.referral_zero_fee ?? true} />
        <span>Clientes trazidos pelo parceiro contam para clientes sem comissão</span>
      </label>
      <Num name="referral_free_every" label="Sem comissão a cada" suffix="clientes trazidos" value={settings.referral_free_every ?? 5} min={1} />
      <Num name="referral_min_booking" label="Primeira reserva mínima para contar" suffix="€" value={settings.referral_min_booking ?? 500} step={0.01} />

      <h3 style={{ margin: "8px 0 0", fontSize: 15 }}>Plano Verificado e Loja</h3>
      <label className="check">
        <input name="pro_enabled" type="checkbox" defaultChecked={settings.pro_enabled ?? true} />
        <span>Verificado disponível para os parceiros</span>
      </label>
      <Num name="pro_price_monthly" label="Verificado mensal" suffix="€ / mês" value={settings.pro_price_monthly ?? 19} step={0.01} min={1} />
      <Num name="pro_price_yearly" label="Verificado anual" suffix="€ / ano" value={settings.pro_price_yearly ?? 190} step={0.01} min={1} />
      <Num name="pro_fee_discount" label="Verificado: desconto na comissão das reservas" suffix="% (4% → 3%)" value={settings.pro_fee_discount ?? 1} step={0.1} />
      <Num name="pro_referral_free_every" label="Verificado: sem comissão a cada" suffix="clientes trazidos" value={settings.pro_referral_free_every ?? 3} min={1} />
      <Num name="pro_promotion_extra_pct" label="Verificado: comissão extra do destaque" suffix="% (sem Verificado, +6%)" value={settings.pro_promotion_extra_pct ?? 4} step={0.1} />
      <Num name="free_shop_products" label="Produtos na Loja sem Verificado" suffix="produtos" value={settings.free_shop_products ?? 5} />
      <Num name="gift_fee_percentage" label="Comissão da Loja" suffix="% + taxa da Stripe, paga pelo parceiro" value={settings.gift_fee_percentage ?? 4} step={0.1} />
      <p className="field-hint" style={{ margin: 0 }}>
        Os preços novos aplicam-se a subscrições novas. Quem já é Pro mantém o preço até cancelar.
      </p>

      {state.error && <p className="form-error">{state.error}</p>}
      <div className="row" style={{ paddingTop: 14, borderTop: "1px solid var(--border)" }}>
        <button type="submit" disabled={isPending} className="btn btn-primary">
          {isPending ? "A guardar…" : "Guardar"}
        </button>
      </div>
    </form>
  );
}

function Num({ name, label, suffix, value, min, step }: { name: string; label: string; suffix: string; value: number; min?: number; step?: number }) {
  return (
    <label className="field">
      <span className="field-label">{label}</span>
      <div className="row" style={{ flexWrap: "nowrap" }}>
        <input name={name} type="number" defaultValue={value} min={min ?? 0} step={step ?? 1} required className="input tnum" style={{ width: 110 }} />
        <span className="muted" style={{ fontSize: 13 }}>{suffix}</span>
      </div>
    </label>
  );
}
