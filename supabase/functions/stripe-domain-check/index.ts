import { createClient } from "jsr:@supabase/supabase-js@2";
import { stripeClient } from "../_shared/stripe.ts";

// Diagnóstico interno (2026-10-26): estado de um Payment Method Domain da
// Stripe (Apple Pay, Google Pay…) e, com `validate: true`, pede à Stripe
// para voltar a verificar. Só com o segredo partilhado (`x-push-secret`).
Deno.serve(async (req) => {
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: cfg } = await admin.rpc("push_config");
  const secret = (cfg as Record<string, string> | null)?.push_secret;
  if (!secret || req.headers.get("x-push-secret") !== secret) return new Response("forbidden", { status: 403 });
  const body = await req.json().catch(() => ({})) as { id?: string; validate?: boolean; methods?: boolean };
  const stripe = stripeClient();
  // Teste (só modo de teste): cria e cancela logo um pagamento de 1 € com
  // cada método, para saber se a conta o aceita.
  if ((body as { probe?: boolean }).probe) {
    const out: Record<string, string> = {};
    for (const t of ["card", "mb_way", "multibanco", "revolut_pay"]) {
      try {
        const pi = await stripe.paymentIntents.create(
          { amount: 100, currency: "eur", payment_method_types: [t], description: "teste de método (cancelado)" },
          t === "mb_way" ? { apiVersion: "2025-09-30.clover" as never } : undefined,
        );
        if (pi.livemode) {
          await stripe.paymentIntents.cancel(pi.id);
          out[t] = "ok (live)";
        } else {
          await stripe.paymentIntents.cancel(pi.id);
          out[t] = "ok";
        }
      } catch (e) {
        out[t] = "erro: " + (e as Error).message;
      }
    }
    return Response.json(out);
  }
  // Auditoria só de leitura: webhook, pagamentos, transferências, saldo e
  // contas dos parceiros (body.pis = ids de PaymentIntent, body.accounts).
  const ab = body as { audit?: boolean; pis?: string[]; accounts?: string[] };
  if (ab.audit) {
    const safe = async <T>(f: () => Promise<T>) => { try { return await f(); } catch (e) { return { error: (e as Error).message }; } };
    const hooks = await safe(async () => (await stripe.webhookEndpoints.list({ limit: 10 })).data.map((w) => ({ url: w.url, status: w.status, events: w.enabled_events, api: w.api_version })));
    const pis = await Promise.all((ab.pis ?? []).slice(0, 10).map((id) => safe(async () => {
      const pi = await stripe.paymentIntents.retrieve(id, { expand: ["latest_charge.balance_transaction", "payment_method"] });
      const ch = pi.latest_charge as unknown as { id?: string; amount_refunded?: number; transfer?: string | null; balance_transaction?: { fee?: number; net?: number; status?: string; available_on?: number } } | null;
      return {
        id: pi.id, status: pi.status, amount: pi.amount, livemode: pi.livemode,
        method: (pi.payment_method as unknown as { type?: string } | null)?.type ?? pi.payment_method_types,
        transfer_data: pi.transfer_data, application_fee_amount: pi.application_fee_amount, transfer_group: pi.transfer_group,
        metadata: pi.metadata, charge: ch?.id, refunded: ch?.amount_refunded, charge_transfer: ch?.transfer ?? null,
        fee: ch?.balance_transaction?.fee, net: ch?.balance_transaction?.net, bt_status: ch?.balance_transaction?.status,
        available_on: ch?.balance_transaction?.available_on,
      };
    })));
    const transfers = await safe(async () => (await stripe.transfers.list({ limit: 10 })).data.map((t) => ({ id: t.id, amount: t.amount, dest: t.destination, group: t.transfer_group, src: t.source_transaction, reversed: t.amount_reversed, created: t.created })));
    const balance = await safe(async () => { const b = await stripe.balance.retrieve(); return { available: b.available, pending: b.pending }; });
    const accounts = await Promise.all((ab.accounts ?? []).slice(0, 10).map((id) => safe(async () => {
      const a = await stripe.accounts.retrieve(id);
      const bal = await stripe.balance.retrieve({ stripeAccount: id });
      return {
        id: a.id, charges: a.charges_enabled, payouts: a.payouts_enabled,
        transfers_cap: a.capabilities?.transfers, card_cap: a.capabilities?.card_payments,
        payout_schedule: a.settings?.payouts?.schedule, due: a.requirements?.currently_due,
        balance_available: bal.available, balance_pending: bal.pending,
      };
    })));
    return Response.json({ hooks, pis, transfers, balance, accounts });
  }
  // Métodos de pagamento ativos na conta (capabilities da plataforma).
  if (body.methods) {
    try {
      const acc = await stripe.accounts.retrieve();
      const caps = (acc as unknown as { capabilities?: Record<string, string> }).capabilities ?? {};
      const cfgs = await stripe.paymentMethodConfigurations.list({ limit: 10 });
      const def = cfgs.data.find((c) => (c as unknown as { is_default?: boolean }).is_default) ?? cfgs.data[0];
      const pick = (k: string) => (def as unknown as Record<string, { available?: boolean; display_preference?: { value?: string } }>)?.[k];
      const view = Object.fromEntries(
        ["card", "apple_pay", "google_pay", "link", "mb_way", "multibanco", "revolut_pay", "paypal", "klarna"]
          .map((k) => [k, { available: pick(k)?.available ?? null, preference: pick(k)?.display_preference?.value ?? null }]),
      );
      const all = cfgs.data.map((c) => {
        const r = c as unknown as Record<string, unknown> & { id: string; name?: string; is_default?: boolean; active?: boolean; parent?: string | null; application?: string | null };
        const pv = (k: string) => (r[k] as { display_preference?: { value?: string } } | undefined)?.display_preference?.value ?? null;
        return { id: r.id, name: r.name, is_default: r.is_default, active: r.active, parent: r.parent ?? null, google_pay: pv("google_pay"), multibanco: pv("multibanco"), revolut_pay: pv("revolut_pay") };
      });
      return Response.json({ capabilities: caps, config: view, livemode: def?.livemode ?? null, all });
    } catch (e) {
      return Response.json({ error: (e as Error).message }, { status: 502 });
    }
  }
  if (!body.id?.startsWith("pmd_")) return Response.json({ error: "validation_error" }, { status: 400 });
  try {
    const d = body.validate
      ? await stripe.paymentMethodDomains.validate(body.id)
      : await stripe.paymentMethodDomains.retrieve(body.id);
    return Response.json({
      domain: d.domain_name,
      enabled: d.enabled,
      livemode: d.livemode,
      apple_pay: d.apple_pay,
      google_pay: d.google_pay,
      link: d.link,
    });
  } catch (e) {
    return Response.json({ error: (e as Error).message }, { status: 502 });
  }
});
