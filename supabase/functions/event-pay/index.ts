import { createClient } from "jsr:@supabase/supabase-js@2";
import type Stripe from "npm:stripe@17";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";
import { notifyPayer, payIntentParams, type PayRow, statusOf, syncPayment } from "../_shared/event_pay.ts";

// QR de pagamento no evento (migração 229, 2026-11-23). Sem saldo: cobra-se
// na hora o cartão guardado de quem paga.
//
// Quem paga:
//   { action: "save_card", payment_method }   → guarda o cartão (SetupIntent,
//       uso off_session). Se o banco pedir 3DS: { status: "requires_action",
//       client_secret, setup_intent_id } e a app confirma; depois
//   { action: "finish_card", setup_intent_id }
//   { action: "remove_card" }
//   { action: "approve", payment_id }          → acima de 25 € ou quando o
//       banco pediu 3DS: cobra com a pessoa presente; pode devolver
//       { status: "requires_action", client_secret, payment_method }.
//   { action: "decline", payment_id }
// Quem cobra:
//   { action: "charge", code, amount_cents, description? }
// Os dois:
//   { action: "sync", payment_id }             → estado atual (Stripe).
// deno-lint-ignore no-explicit-any
type Admin = any;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return json({ error: "forbidden" }, 403);
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return json({ error: "forbidden" }, 403);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "validation_error" }, 400);
  }
  const admin: Admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const stripe = stripeClient();
  const str = (k: string) => (typeof body[k] === "string" ? (body[k] as string) : null);
  const now = () => new Date().toISOString();

  try {
    switch (body.action) {
      case "save_card": {
        const pm = str("payment_method");
        if (!pm?.startsWith("pm_")) return json({ error: "validation_error" }, 400);
        const customer = await ensureCustomer(stripe, admin, user.id, user.email ?? null);
        await stripe.paymentMethods.attach(pm, { customer });
        const si = await stripe.setupIntents.create({
          customer,
          payment_method: pm,
          payment_method_types: ["card"],
          usage: "off_session",
          confirm: true,
          use_stripe_sdk: true,
          metadata: { kind: "event_pay_card", user_id: user.id },
        });
        if (si.status === "succeeded") return json({ status: "saved", card: await saveCard(stripe, admin, user.id, pm) });
        if (si.status === "requires_action") {
          return json({ status: "requires_action", client_secret: si.client_secret, setup_intent_id: si.id, payment_method: pm });
        }
        return json({ error: "declined" }, 402);
      }
      case "finish_card": {
        const id = str("setup_intent_id");
        if (!id?.startsWith("seti_")) return json({ error: "validation_error" }, 400);
        const si = await stripe.setupIntents.retrieve(id);
        if (si.metadata?.user_id !== user.id) return json({ error: "not_found" }, 404);
        if (si.status !== "succeeded") return json({ error: "declined" }, 402);
        const pm = typeof si.payment_method === "string" ? si.payment_method : si.payment_method?.id;
        if (!pm) return json({ error: "declined" }, 402);
        return json({ status: "saved", card: await saveCard(stripe, admin, user.id, pm) });
      }
      case "remove_card": {
        const { data: c } = await admin.from("payer_cards").select("payment_method_id").eq("user_id", user.id).maybeSingle();
        if (c?.payment_method_id) {
          await stripe.paymentMethods.detach(c.payment_method_id).catch(() => {});
          await admin.from("payer_cards")
            .update({ payment_method_id: null, brand: null, last4: null, exp_month: null, exp_year: null, updated_at: now() })
            .eq("user_id", user.id);
        }
        // Os QR que estavam abertos deixam de servir.
        await admin.from("pay_tokens").update({ used_at: now() }).eq("user_id", user.id).is("used_at", null);
        return json({ status: "removed" });
      }

      case "charge": {
        const code = str("code");
        const amount = body.amount_cents;
        if (!code || typeof amount !== "number" || !Number.isInteger(amount)) return json({ error: "validation_error" }, 400);
        const { data: r, error } = await admin.rpc("consume_pay_token", {
          p_code: code, p_merchant_user: user.id, p_amount_cents: amount, p_description: str("description"),
        });
        if (error) {
          console.error("consume_pay_token", error.message);
          return json({ error: "unknown_error" }, 500);
        }
        if (r?.result !== "ok") return json({ result: r?.result ?? "unknown_error" });
        const row = await rowById(admin, r.payment_id);
        if (r.status === "awaiting_payer") {
          await notifyPayer(admin, row, "confirm");
          return json({ result: "ok", payment_id: row.id, status: "awaiting_payer", payer_name: r.payer_name });
        }
        const status = await createAndSync(stripe, admin, row, r.customer, r.payment_method, true);
        return json({ result: "ok", payment_id: row.id, status, payer_name: r.payer_name });
      }

      case "approve": {
        const row = await ownRow(admin, str("payment_id"), user.id);
        if (!row) return json({ error: "not_found" }, 404);
        if (row.status === "awaiting_payer") {
          const { data: c } = await admin.from("payer_cards").select("stripe_customer_id, payment_method_id").eq("user_id", user.id).maybeSingle();
          if (!c?.payment_method_id) return json({ error: "no_card" }, 409);
          const status = await createAndSync(stripe, admin, row, c.stripe_customer_id, c.payment_method_id, false);
          if (status !== "requires_action") return json({ status });
        }
        const fresh = await rowById(admin, row.id);
        if (fresh.status !== "requires_action" || !fresh.payment_intent_id) return json({ status: fresh.status });
        const pi = await stripe.paymentIntents.retrieve(fresh.payment_intent_id);
        if (statusOf(pi) !== "requires_action") return json({ status: await syncPayment(stripe, admin, pi.id) });
        return json({
          status: "requires_action",
          client_secret: pi.client_secret,
          payment_method: typeof pi.payment_method === "string" ? pi.payment_method : pi.payment_method?.id,
        });
      }
      case "decline": {
        const row = await ownRow(admin, str("payment_id"), user.id);
        if (!row) return json({ error: "not_found" }, 404);
        if (!["awaiting_payer", "requires_action"].includes(row.status)) return json({ status: row.status });
        if (row.payment_intent_id) await stripe.paymentIntents.cancel(row.payment_intent_id).catch(() => {});
        await admin.from("event_payments").update({ status: "cancelled", updated_at: now() }).eq("id", row.id);
        return json({ status: "cancelled" });
      }

      case "sync": {
        const id = str("payment_id");
        if (!id) return json({ error: "validation_error" }, 400);
        const row = await rowById(admin, id).catch(() => null);
        if (!row || (row.payer_id !== user.id && row.charged_by !== user.id)) return json({ error: "not_found" }, 404);
        const status = row.payment_intent_id ? await syncPayment(stripe, admin, row.payment_intent_id) : row.status;
        return json({ status, amount_cents: row.amount_cents });
      }
    }
    return json({ error: "validation_error" }, 400);
  } catch (e) {
    console.error("event-pay failed", (e as Error).message);
    if ((e as { type?: string }).type === "StripeCardError") return json({ error: "declined", message: (e as Error).message }, 402);
    return json({ error: "stripe_error" }, 502);
  }
});

type Row = PayRow & { charged_by: string | null };

async function rowById(admin: Admin, id: string): Promise<Row> {
  const { data, error } = await admin.from("event_payments").select("*").eq("id", id).single();
  if (error || !data) throw new Error("payment not found");
  return data as Row;
}

async function ownRow(admin: Admin, id: string | null, userId: string): Promise<Row | null> {
  if (!id) return null;
  const row = await rowById(admin, id).catch(() => null);
  return row && row.payer_id === userId ? row : null;
}

/// Cria o PaymentIntent (idempotente pela chave do movimento) e guarda o
/// estado. Off-session: se o banco pedir 3DS, quem paga confirma na app.
async function createAndSync(stripe: Stripe, admin: Admin, row: PayRow, customer: string, paymentMethod: string, offSession: boolean): Promise<string> {
  const now = () => new Date().toISOString();
  let pi: Stripe.PaymentIntent;
  try {
    pi = await stripe.paymentIntents.create(payIntentParams(row, customer, paymentMethod, offSession), {
      idempotencyKey: `${row.idempotency_key}-${offSession ? "off" : "on"}`,
    });
  } catch (e) {
    // Off-session recusado: o PaymentIntent vem no erro.
    const raw = (e as { raw?: { payment_intent?: Stripe.PaymentIntent; code?: string; decline_code?: string } }).raw;
    if (raw?.payment_intent && raw.code === "authentication_required") {
      await admin.from("event_payments")
        .update({ payment_intent_id: raw.payment_intent.id, status: "requires_action", updated_at: now() })
        .eq("id", row.id);
      await notifyPayer(admin, row, "confirm");
      return "requires_action";
    }
    await admin.from("event_payments")
      .update({ payment_intent_id: raw?.payment_intent?.id ?? null, status: "failed", failure: raw?.decline_code ?? raw?.code ?? "error", updated_at: now() })
      .eq("id", row.id);
    await notifyPayer(admin, row, "failed");
    return "failed";
  }
  await admin.from("event_payments").update({ payment_intent_id: pi.id, updated_at: now() }).eq("id", row.id);
  const status = (await syncPayment(stripe, admin, pi.id)) ?? statusOf(pi);
  if (status === "requires_action" && offSession) await notifyPayer(admin, row, "confirm");
  return status;
}

async function ensureCustomer(stripe: Stripe, admin: Admin, userId: string, email: string | null): Promise<string> {
  const { data: c } = await admin.from("payer_cards").select("stripe_customer_id").eq("user_id", userId).maybeSingle();
  if (c?.stripe_customer_id) return c.stripe_customer_id as string;
  const customer = await stripe.customers.create(
    { email: email ?? undefined, metadata: { user_id: userId, kind: "event_pay" } },
    { idempotencyKey: `event-pay-customer-${userId}` },
  );
  await admin.from("payer_cards").upsert({ user_id: userId, stripe_customer_id: customer.id }, { onConflict: "user_id" });
  return customer.id;
}

/// Guarda o cartão novo e larga o antigo.
async function saveCard(stripe: Stripe, admin: Admin, userId: string, pmId: string) {
  const pm = await stripe.paymentMethods.retrieve(pmId);
  const { data: old } = await admin.from("payer_cards").select("payment_method_id").eq("user_id", userId).maybeSingle();
  if (old?.payment_method_id && old.payment_method_id !== pmId) {
    await stripe.paymentMethods.detach(old.payment_method_id).catch(() => {});
  }
  const card = {
    brand: pm.card?.brand ?? null,
    last4: pm.card?.last4 ?? null,
    exp_month: pm.card?.exp_month ?? null,
    exp_year: pm.card?.exp_year ?? null,
  };
  await admin.from("payer_cards").update({ payment_method_id: pmId, ...card, updated_at: new Date().toISOString() }).eq("user_id", userId);
  return card;
}

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
