// Taxa do parceiro por escalões marginais (migração 126). A mesma conta
// existe na app (`core/home/home_providers.dart`, `partnerFeeFor`).
export type FeeTier = { up_to: number | null; pct: number };

export function parseTiers(v: unknown): FeeTier[] {
  if (!Array.isArray(v)) return [];
  return v
    .map((t) => ({ up_to: t?.up_to == null ? null : Number(t.up_to), pct: Number(t?.pct) }))
    .filter((t) => Number.isFinite(t.pct) && t.pct >= 0 && (t.up_to == null || Number.isFinite(t.up_to)));
}

/// Taxa (cêntimos) sobre o valor total da reserva (cêntimos).
export function tieredFeeCents(totalCents: number, tiers: FeeTier[]): number {
  let fee = 0;
  let prev = 0;
  for (const t of tiers) {
    const cap = t.up_to == null ? Infinity : Math.round(t.up_to * 100);
    const portion = Math.min(totalCents, cap) - prev;
    if (portion <= 0) break;
    fee += (portion * t.pct) / 100;
    prev = cap;
  }
  return Math.round(fee);
}

/// Parte da taxa que cabe a um pagamento (sinal ou restante) da reserva.
export function paymentFeeCents(
  paymentCents: number,
  bookingTotalCents: number,
  tiers: FeeTier[],
  flatPct: number,
): number {
  if (tiers.length === 0) return Math.round((paymentCents * flatPct) / 100);
  if (bookingTotalCents <= 0) return 0;
  const bookingFee = tieredFeeCents(bookingTotalCents, tiers);
  return Math.min(paymentCents, Math.round((bookingFee * paymentCents) / bookingTotalCents));
}
