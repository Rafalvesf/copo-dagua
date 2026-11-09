import type Stripe from "npm:stripe@17";
// deno-lint-ignore no-explicit-any
type Admin = any;

// Plano Pro dos parceiros (migração 161): subscrição Stripe Billing na
// conta da À Nossa!. Esta função acerta partner_profiles.pro_until com a
// subscrição ativa do parceiro (fim do período pago). Idempotente.
export async function syncPartnerPro(stripe: Stripe, admin: Admin, partnerId: string): Promise<{ active: boolean; until: string | null; cancelling?: boolean }> {
  const { data: p } = await admin
    .from("partner_profiles")
    .select("stripe_customer_id, pro_until, pro_interval, pro_subscription_id")
    .eq("id", partnerId)
    .maybeSingle();
  if (!p?.stripe_customer_id) return { active: Boolean(p?.pro_until && new Date(p.pro_until) > new Date()), until: p?.pro_until ?? null };

  const subs = await stripe.subscriptions.list({ customer: p.stripe_customer_id, status: "all", limit: 10 });
  const live = subs.data
    .filter((s) => s.metadata?.kind === "partner_pro" && ["active", "trialing", "past_due"].includes(s.status))
    .sort((a, b) => periodEnd(b) - periodEnd(a))[0];

  if (live) {
    const until = new Date(periodEnd(live) * 1000).toISOString();
    const interval = live.items.data[0]?.price?.recurring?.interval === "year" ? "year" : "month";
    await admin.from("partner_profiles").update({ pro_until: until, pro_interval: interval, pro_subscription_id: live.id }).eq("id", partnerId);
    return { active: true, until, cancelling: live.cancel_at_period_end === true };
  }
  // Sem subscrição ativa: fica Pro até ao fim do que já pagou (pro_until).
  if (p.pro_subscription_id) {
    await admin.from("partner_profiles").update({ pro_subscription_id: null }).eq("id", partnerId);
  }
  return { active: Boolean(p.pro_until && new Date(p.pro_until) > new Date()), until: p.pro_until ?? null };
}

function periodEnd(s: Stripe.Subscription): number {
  // deno-lint-ignore no-explicit-any
  const any = s as any;
  return Number(any.current_period_end ?? any.items?.data?.[0]?.current_period_end ?? 0);
}
