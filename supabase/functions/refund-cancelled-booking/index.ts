import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";

// Reembolso automático (pedido do utilizador, 2026-10-20):
// - casal cancela com pelo menos `cancellation_penalty_days` (30) dias
//   antes do evento → reembolso de tudo o que pagou;
// - parceiro cancela → reembolso sempre;
// - o casal recebe 100%: a comissão À Nossa! é devolvida
//   (`refund_application_fee`) e a parte do parceiro é recuperada da conta
//   dele (`reverse_transfer`).
//
// A decisão "há direito a reembolso" NÃO é feita aqui: vem de
// `booking_events.metadata.refund_required`, gravado pelas RPCs
// `cancel_booking_by_couple()`/`cancel_booking_by_partner()` no momento do
// cancelamento. Esta função só executa. Idempotente (chave por pagamento),
// por isso a app pode voltar a chamá-la sem risco.
//
// Chamada pela app logo a seguir a cancelar, e de novo quando o casal ou o
// parceiro abrem as reservas (plano B se a primeira chamada falhar).
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

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "validation_error" }, 400);
  }
  const bookingId = typeof body.booking_id === "string" ? body.booking_id : null;
  if (!bookingId) return json({ error: "validation_error" }, 400);

  const admin = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { data: booking } = await admin
    .from("bookings")
    .select("id, booking_number, status, couple_id, partner_id, wedding_id")
    .eq("id", bookingId)
    .maybeSingle();
  if (!booking) return json({ error: "not_found" }, 404);

  const { data: isAdmin } = await supabase.rpc("is_admin");
  if (booking.couple_id !== user.id && booking.partner_id !== user.id && isAdmin !== true) {
    return json({ error: "forbidden" }, 403);
  }
  if (booking.status !== "cancelled_by_couple" && booking.status !== "cancelled_by_partner") {
    return json({ error: "invalid_state" }, 409);
  }

  const { data: events } = await admin
    .from("booking_events")
    .select("metadata, created_at")
    .eq("booking_id", bookingId)
    .eq("event_type", booking.status)
    .order("created_at", { ascending: false })
    .limit(1);
  const refundRequired = (events?.[0]?.metadata as Record<string, unknown> | undefined)?.refund_required === true;
  if (!refundRequired) return json({ refunded: [], skipped: "not_eligible" });

  const { data: payments } = await admin
    .from("payments")
    .select("id, amount, status, provider_payment_id")
    .eq("booking_id", bookingId)
    .eq("status", "paid");

  const stripe = stripeClient();
  const refunded: string[] = [];
  const manual: string[] = [];
  const failed: string[] = [];

  for (const p of payments ?? []) {
    const sid = p.provider_payment_id as string | null;
    if (!sid || !(sid.startsWith("pi_") || sid.startsWith("cs_"))) {
      // Pago fora da Stripe (ex: dados de demonstração) — fica para o admin.
      manual.push(p.id as string);
      continue;
    }
    try {
      let pi = sid;
      if (sid.startsWith("cs_")) {
        const session = await stripe.checkout.sessions.retrieve(sid);
        pi = typeof session.payment_intent === "string" ? session.payment_intent : session.payment_intent?.id ?? "";
      }
      if (!pi) {
        manual.push(p.id as string);
        continue;
      }
      const intent = await stripe.paymentIntents.retrieve(pi);
      const hasTransfer = Boolean(intent.transfer_data?.destination);
      const hasFee = intent.application_fee_amount != null && intent.application_fee_amount > 0;
      await stripe.refunds.create(
        {
          payment_intent: pi,
          reason: "requested_by_customer",
          ...(hasTransfer ? { reverse_transfer: true } : {}),
          ...(hasFee ? { refund_application_fee: true } : {}),
          metadata: { payment_id: p.id as string, booking_id: bookingId },
        },
        { idempotencyKey: `refund-${p.id}` },
      );
      const { error } = await admin
        .from("payments")
        .update({ status: "refunded", updated_at: new Date().toISOString() })
        .eq("id", p.id)
        .eq("status", "paid");
      if (error) {
        console.error("refund ok but payment update failed", p.id, error);
        failed.push(p.id as string);
        continue;
      }
      refunded.push(p.id as string);
    } catch (e) {
      const msg = String((e as Error).message ?? e);
      // Já reembolsado na Stripe (ex: à mão no painel) — alinha a base de dados.
      if (msg.includes("already been refunded") || (e as { code?: string }).code === "charge_already_refunded") {
        await admin.from("payments").update({ status: "refunded", updated_at: new Date().toISOString() })
          .eq("id", p.id).eq("status", "paid");
        refunded.push(p.id as string);
        continue;
      }
      console.error("refund failed", p.id, msg);
      failed.push(p.id as string);
    }
  }

  if (refunded.length > 0) {
    const total = (payments ?? [])
      .filter((p) => refunded.includes(p.id as string))
      .reduce((a, p) => a + Number(p.amount), 0);
    const euros = total.toFixed(2).replace(".", ",");
    await admin.from("booking_events").insert({
      booking_id: bookingId,
      event_type: "refunded",
      old_status: booking.status,
      new_status: booking.status,
      actor_type: "system",
      metadata: { payment_ids: refunded, amount: total },
    }).then(({ error }) => error && console.error("booking_events insert failed", error));
    await admin.from("notifications").insert({
      wedding_id: booking.wedding_id,
      type: "booking_refunded",
      title: "Reembolso enviado",
      body: `Reembolsámos ${euros} € da reserva ${booking.booking_number}. Chega à tua conta em 5 a 10 dias úteis.`,
    }).then(({ error }) => error && console.error("notification insert failed", error));
  }

  return json({ refunded, manual, failed });
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
