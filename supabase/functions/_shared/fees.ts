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

/// Valor fixo por transação, somado à percentagem (pedido 2026-11-08:
/// "4% + 1 €, tal como 3% + 1 €", em todas as taxas). Vem de
/// `platform_settings.fixed_fee_cents`; sem a coluna, 100 (1 €).
export function fixedFeeCents(settings: Record<string, unknown> | null | undefined): number {
  const v = Number(settings?.fixed_fee_cents ?? 100);
  return Number.isFinite(v) && v >= 0 ? Math.round(v) : 100;
}

/// Taxa pelo país do parceiro (migração 180): Portugal, resto da Europa ou
/// fora da Europa — nunca pelo cartão de quem paga. Devolve null antes da
/// migração (sem `region_fees`), e aí ficam os escalões de sempre.
const EUROPE = new Set([
  "AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "HU", "IE", "IT", "LV", "LT", "LU",
  "MT", "NL", "PL", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO", "CH", "GB",
]);

export function feeRegion(country: string | null | undefined): "PT" | "EUROPE" | "OTHER" {
  const c = (country ?? "").toUpperCase();
  if (c === "" || c === "PT") return "PT";
  return EUROPE.has(c) ? "EUROPE" : "OTHER";
}

// deno-lint-ignore no-explicit-any
type Admin = { from: (t: string) => any };
type StripeLike = { accounts: { retrieve: (id: string) => Promise<{ country?: string | null }> } };

export async function partnerRegionRates(
  admin: Admin,
  stripe: StripeLike,
  partnerId: string,
  stripeAccountId: string | null | undefined,
  settings: Record<string, unknown> | null | undefined,
): Promise<{ organizer: number; partner: number } | null> {
  const rf = settings?.region_fees as Record<string, { organizer?: number; partner?: number }> | undefined;
  if (!rf || typeof rf !== "object") return null;
  let country: string | null = null;
  try {
    const { data } = await admin.from("partner_profiles").select("country").eq("id", partnerId).maybeSingle();
    country = (data?.country as string | null) ?? null;
    if (!country && stripeAccountId) {
      const acct = await stripe.accounts.retrieve(stripeAccountId);
      if (acct.country && /^[A-Za-z]{2}$/.test(acct.country)) {
        country = acct.country.toUpperCase();
        await admin.from("partner_profiles").update({ country }).eq("id", partnerId);
      }
    }
  } catch (e) {
    console.error("partner country lookup failed", e);
  }
  const r = rf[feeRegion(country)];
  const organizer = Number(r?.organizer);
  const partner = Number(r?.partner);
  if (!Number.isFinite(organizer) || !Number.isFinite(partner)) return null;
  return { organizer, partner };
}
