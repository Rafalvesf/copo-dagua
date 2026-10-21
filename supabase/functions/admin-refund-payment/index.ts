import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";

// Reembolso feito pelo admin (2026-10-20): secção Reembolsos e decisões de
// Disputas. Só admins. Total (sem `amount`) ou parcial (`amount` em euros do
// que o casal pagou, comissão incluída). A comissão e a parte do parceiro
// são devolvidas na mesma proporção (`refund_application_fee` +
// `reverse_transfer`).
//
// Body: { payment_id: string, amount?: number, reason?: string }
// Resposta: { refunded_cents, remaining_cents, status }
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
  const { data: isAdmin } = await supabase.rpc("is_admin");
  if (isAdmin !== true) return json({ error: "forbidden" }, 403);

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "validation_error" }, 400);
  }
  const paymentId = typeof body.payment_id === "string" ? body.payment_id : null;
  const amount = typeof body.amount === "number" && body.amount > 0 ? body.amount : null;
  const reason = typeof body.reason === "string" ? body.reason.slice(0, 200) : "";
  if (!paymentId) return json({ error: "validation_error" }, 400);

  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );
  const { data: p } = await admin
    .from("payments")
    .select("id, booking_id, status, provider_payment_id, refunded_amount, bookings(booking_number, wedding_id, status, partner_profiles(business_name))")
    .eq("id", paymentId)
    .maybeSingle();
  if (!p) return json({ error: "not_found" }, 404);
  if (p.status !== "paid") return json({ error: "invalid_state" }, 409);

  const sid = p.provider_payment_id as string | null;
  if (!sid || !(sid.startsWith("pi_") || sid.startsWith("cs_"))) {
    return json({ error: "not_stripe" }, 409);
  }

  const stripe = stripeClient();
  let pi = sid;
  if (sid.startsWith("cs_")) {
    const session = await stripe.checkout.sessions.retrieve(sid);
    pi = typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id ?? "";
  }
  if (!pi) return json({ error: "not_stripe" }, 409);

  const intent = await stripe.paymentIntents.retrieve(pi, { expand: ["latest_charge"] });
  const charge = typeof intent.latest_charge === "object" ? intent.latest_charge : null;
  const alreadyRefunded = charge?.amount_refunded ?? 0;
  const remaining = intent.amount - alreadyRefunded;
  if (remaining <= 0) {
    await admin.from("payments")
      .update({ status: "refunded", refunded_amount: intent.amount / 100, updated_at: new Date().toISOString() })
      .eq("id", paymentId);
    return json({ refunded_cents: 0, remaining_cents: 0, status: "refunded" });
  }
  const cents = amount == null ? remaining : Math.min(Math.round(amount * 100), remaining);
  if (cents <= 0) return json({ error: "validation_error" }, 400);

  const hasTransfer = Boolean(intent.transfer_data?.destination);
  const hasFee = intent.application_fee_amount != null && intent.application_fee_amount > 0;
  try {
    await stripe.refunds.create(
      {
        payment_intent: pi,
        amount: cents,
        reason: "requested_by_customer",
        ...(hasTransfer ? { reverse_transfer: true } : {}),
        ...(hasFee ? { refund_application_fee: true } : {}),
        metadata: { payment_id: paymentId, booking_id: p.booking_id as string, by: "admin", note: reason },
      },
      // Evita reembolsar duas vezes com um duplo clique (mesmo valor, mesmo minuto).
      { idempotencyKey: `admin-refund-${paymentId}-${alreadyRefunded}-${cents}` },
    );
  } catch (e) {
    console.error("admin refund failed", paymentId, (e as Error).message);
    return json({ error: "stripe_error", message: (e as Error).message }, 502);
  }

  const totalRefunded = alreadyRefunded + cents;
  const fully = totalRefunded >= intent.amount;
  await admin.from("payments").update({
    refunded_amount: totalRefunded / 100,
    status: fully ? "refunded" : "paid",
    updated_at: new Date().toISOString(),
  }).eq("id", paymentId);

  const b = p.bookings as unknown as {
    booking_number: string;
    wedding_id: string;
    status: string;
    partner_profiles: { business_name: string } | { business_name: string }[] | null;
  } | null;
  const partnerName = (Array.isArray(b?.partner_profiles) ? b?.partner_profiles[0] : b?.partner_profiles)?.business_name ?? "parceiro";
  const euros = (cents / 100).toFixed(2).replace(".", ",");
  await admin.from("booking_events").insert({
    booking_id: p.booking_id,
    event_type: "refunded",
    old_status: b?.status ?? null,
    new_status: b?.status ?? null,
    actor_type: "admin",
    actor_id: user.id,
    metadata: { payment_ids: [paymentId], amount: cents / 100, partial: !fully, note: reason },
  }).then(({ error }) => error && console.error("booking_events insert failed", error));
  if (b?.wedding_id) {
    // Contratação em segredo (migração 116): só quem a fez é avisado.
    // Consulta à parte para não falhar antes de a migração correr.
    const { data: priv } = await admin.from("bookings").select("private_owner").eq("id", p.booking_id).maybeSingle();
    const owner = (priv as { private_owner?: string | null } | null)?.private_owner;
    await admin.from("notifications").insert({
      wedding_id: b.wedding_id,
      ...(owner ? { profile_id: owner } : {}),
      type: "booking_refunded",
      title: "Reembolso enviado",
      body: `Reembolsámos ${euros} € da reserva ${b.booking_number} · ${partnerName}. Chega à tua conta em 5 a 10 dias úteis.`,
    }).then(({ error }) => error && console.error("notification insert failed", error));
  }
  await admin.from("audit_logs").insert({
    actor_id: user.id,
    action: fully ? "payment_refunded" : "payment_partially_refunded",
    target_table: "payments",
    target_id: paymentId,
    metadata: { amount: cents / 100, note: reason },
  }).then(({ error }) => error && console.error("audit insert failed", error));

  return json({ refunded_cents: cents, remaining_cents: intent.amount - totalRefunded, status: fully ? "refunded" : "paid" });
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
