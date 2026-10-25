import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";
import { applyDetails, applyDocument, type Details, ensureAccount, prefill, stripeMessage } from "../_shared/connect_details.ts";

// Conta Stripe do parceiro DENTRO da app (pedido 2026-10-19: "algo
// semelhante para os parceiros, botão para levantar; inicialmente uma
// página para confirmar todos os dados que a Stripe precisa").
// Substitui os Account Links / login links que abriam o browser.
//
// action:
//  - "status"  → resumo da conta: o que a Stripe ainda pede, IBAN (só os
//                últimos 4), saldo disponível/pendente e últimos levantamentos.
//  - "prefill" / "details" / "document" → dados pedidos com o UI da app
//                (2026-10-25), enviados à Stripe pela API.
//  - "payout"  → levanta o saldo disponível para o IBAN (levantamentos
//                passam a manuais: só saem quando o parceiro carrega).
//
// Sempre com o JWT do parceiro: só mexe na conta do próprio.
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return json({ error: "forbidden" }, 403);

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: authHeader } } },
  );
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return json({ error: "forbidden" }, 403);

  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch { /* vazio */ }
  const action = typeof body.action === "string" ? body.action : "status";

  const { data: profile, error: profileError } = await supabase
    .from("partner_profiles")
    .select("id, stripe_account_id, contact_email, business_name, phone")
    .eq("id", user.id)
    .single();
  if (profileError || !profile) return json({ error: "not_found" }, 404);

  const stripe = stripeClient();
  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
  let accountId = profile.stripe_account_id as string | null;

  async function syncFlags(acc: { id: string; charges_enabled: boolean; payouts_enabled: boolean }) {
    await admin.rpc("sync_stripe_account_status", {
      p_account_id: acc.id,
      p_charges_enabled: acc.charges_enabled,
      p_payouts_enabled: acc.payouts_enabled,
    });
  }

  try {
    // Antigo formulário embutido da Stripe — a app já não o usa (2026-10-25).
    if (action === "session") {
      const publishableKey = Deno.env.get("STRIPE_PUBLISHABLE_KEY");
      if (!publishableKey) return json({ error: "not_configured" }, 503);
      accountId = await ensureAccount(
        stripe,
        admin,
        user.id,
        (profile.contact_email as string | null) ?? user.email ?? null,
        (profile.business_name as string | null) ?? null,
        accountId,
      );
      const session = await stripe.accountSessions.create({
        account: accountId,
        components: {
          account_onboarding: {
            enabled: true,
            features: { external_account_collection: true, disable_stripe_user_authentication: true },
          },
        },
      } as never);
      return json({ client_secret: session.client_secret, publishable_key: publishableKey, account_id: accountId });
    }

    // Dados pedidos com o UI da app (2026-10-25): sem formulários da Stripe.
    if (action === "prefill") {
      if (!accountId) return json({ prefill: null });
      const a = await stripe.accounts.retrieve(accountId);
      return json({ prefill: await prefill(stripe, a) });
    }
    if (action === "details") {
      const d = body.details as Details | undefined;
      if (!d || !d.person || (d.business_type !== "individual" && d.business_type !== "company")) {
        return json({ error: "validation_error" }, 400);
      }
      accountId = await ensureAccount(
        stripe,
        admin,
        user.id,
        (profile.contact_email as string | null) ?? user.email ?? null,
        (profile.business_name as string | null) ?? null,
        accountId,
      );
      try {
        await applyDetails(stripe, accountId, d, {
          ip: (req.headers.get("x-forwarded-for") ?? "").split(",")[0].trim() || "0.0.0.0",
          userAgent: req.headers.get("user-agent") ?? "",
        });
      } catch (e) {
        console.error("details rejected", (e as Error).message);
        return json({ error: "invalid_details", message: stripeMessage(e) }, 400);
      }
    }
    if (action === "document") {
      if (!accountId) return json({ error: "no_account" }, 409);
      const front = body.front as { data: string; type: string } | undefined;
      if (!front?.data) return json({ error: "validation_error" }, 400);
      try {
        await applyDocument(stripe, accountId, front, (body.back as { data: string; type: string } | undefined) ?? null);
      } catch (e) {
        console.error("document rejected", (e as Error).message);
        return json({ error: "invalid_document", message: "A Stripe não aceitou a fotografia. Tenta outra mais nítida." }, 400);
      }
    }

    if (!accountId) return json({ has_account: false });
    const acc = await stripe.accounts.retrieve(accountId);
    await syncFlags(acc);

    // Manual ou automático — o parceiro escolhe (2026-10-19).
    if (action === "schedule") {
      const interval = body.interval;
      if (interval !== "manual" && interval !== "daily" && interval !== "weekly" && interval !== "monthly") {
        return json({ error: "validation_error" }, 400);
      }
      const schedule: Record<string, unknown> = { interval };
      if (interval === "weekly") schedule.weekly_anchor = "friday";
      if (interval === "monthly") schedule.monthly_anchor = 1;
      const updated = await stripe.accounts.update(accountId, { settings: { payouts: { schedule } } });
      return json({ payout_schedule: updated.settings?.payouts?.schedule?.interval ?? interval });
    }

    if (action === "payout") {
      if (!acc.payouts_enabled) return json({ error: "payouts_disabled" }, 409);
      // Em automático é a Stripe que levanta sozinha (escolha do parceiro).
      if (acc.settings?.payouts?.schedule?.interval !== "manual") {
        return json({ error: "automatic_payouts" }, 409);
      }
      const bal = await stripe.balance.retrieve({ stripeAccount: accountId });
      const available = bal.available.find((b) => b.currency === "eur")?.amount ?? 0;
      const requested = typeof body.amount_cents === "number" ? Math.floor(body.amount_cents) : available;
      if (available <= 0 || requested <= 0) return json({ error: "no_balance" }, 409);
      if (requested > available) return json({ error: "insufficient_balance" }, 409);
      const payout = await stripe.payouts.create(
        {
          amount: requested,
          currency: "eur",
          description: "Levantamento À Nossa!",
          metadata: { partner_id: user.id },
        },
        { stripeAccount: accountId, idempotencyKey: `payout-${accountId}-${requested}-${new Date().toISOString().slice(0, 16)}` },
      );
      return json({
        payout: { id: payout.id, amount_cents: payout.amount, arrival_date: payout.arrival_date, status: payout.status },
      });
    }

    // status
    const reqs = acc.requirements;
    const bank = acc.external_accounts?.data?.find((x) => x.object === "bank_account") as
      | { last4?: string; bank_name?: string | null }
      | undefined;
    let balance = { available_cents: 0, pending_cents: 0 };
    let payouts: unknown[] = [];
    if (acc.details_submitted) {
      try {
        const bal = await stripe.balance.retrieve({ stripeAccount: accountId });
        balance = {
          available_cents: bal.available.find((b) => b.currency === "eur")?.amount ?? 0,
          pending_cents: bal.pending.find((b) => b.currency === "eur")?.amount ?? 0,
        };
        const list = await stripe.payouts.list({ limit: 10 }, { stripeAccount: accountId });
        payouts = list.data.map((p) => ({
          id: p.id,
          amount_cents: p.amount,
          arrival_date: p.arrival_date,
          created: p.created,
          status: p.status,
        }));
      } catch (e) {
        console.error("balance/payouts failed", e);
      }
    }
    return json({
      has_account: true,
      details_submitted: acc.details_submitted,
      charges_enabled: acc.charges_enabled,
      payouts_enabled: acc.payouts_enabled,
      business_type: acc.business_type ?? null,
      payout_schedule: acc.settings?.payouts?.schedule?.interval ?? "daily",
      payout_delay_days: acc.settings?.payouts?.schedule?.delay_days ?? null,
      email: acc.email ?? null,
      requirements: {
        currently_due: reqs?.currently_due ?? [],
        eventually_due: reqs?.eventually_due ?? [],
        past_due: reqs?.past_due ?? [],
        pending_verification: reqs?.pending_verification ?? [],
        disabled_reason: reqs?.disabled_reason ?? null,
        current_deadline: reqs?.current_deadline ?? null,
      },
      bank: bank ? { last4: bank.last4 ?? null, bank_name: bank.bank_name ?? null } : null,
      balance,
      payouts,
    });
  } catch (err) {
    console.error("connect-account failed", action, err);
    return json({ error: "stripe_error" }, 502);
  }
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
