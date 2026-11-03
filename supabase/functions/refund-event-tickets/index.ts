import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { stripeClient } from "../_shared/stripe.ts";

// Reembolso de bilhetes e cancelamento de eventos pagos (migração 152).
// Só o dono do evento.
//
// { action: "refund_ticket", ticket_id, reason? }
// { action: "cancel_event", wedding_id, reason? } → reembolsa todos os
//   bilhetes pagos e tira o evento do Descobrir.
//
// Quem comprou recebe o valor total. O dinheiro volta da conta do
// organizador (`reverse_transfer`) e a application fee NÃO é devolvida:
// o organizador paga a comissão de 4% e a taxa da Stripe dos bilhetes
// reembolsados, e a À Nossa! não fica a perder.
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
  const reason = typeof body.reason === "string" ? body.reason.slice(0, 300) : null;
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const stripe = stripeClient();

  // Sem a migração 152 não há onde registar o reembolso: não toca na Stripe.
  const { error: migErr } = await admin.from("event_tickets").select("refunded_at").limit(1);
  if (migErr) return json({ error: "not_configured" }, 503);

  async function ownerOf(weddingId: string): Promise<boolean> {
    const { data: w } = await admin.from("weddings").select("owner_id").eq("id", weddingId).maybeSingle();
    return !!w && w.owner_id === user!.id;
  }

  async function refund(t: { id: string; payment_intent_id: string | null }, cancelled: boolean) {
    if (!t.payment_intent_id) throw new Error("no_payment_intent");
    const r = await stripe.refunds.create(
      {
        payment_intent: t.payment_intent_id,
        reverse_transfer: true,
        refund_application_fee: false,
        metadata: { kind: "event_ticket_refund", ticket_id: t.id },
      },
      { idempotencyKey: `ticket-refund-${t.id}` },
    );
    const { error } = await admin.rpc("mark_event_ticket_refunded", {
      p_ticket: t.id,
      p_refund_id: r.id,
      p_reason: reason,
      p_event_cancelled: cancelled,
    });
    if (error) throw new Error(`mark_event_ticket_refunded: ${error.message}`);
  }

  if (body.action === "refund_ticket") {
    if (typeof body.ticket_id !== "string") return json({ error: "validation_error" }, 400);
    const { data: t } = await admin
      .from("event_tickets")
      .select("id, wedding_id, status, payment_intent_id")
      .eq("id", body.ticket_id)
      .maybeSingle();
    if (!t || !(await ownerOf(t.wedding_id))) return json({ error: "not_found" }, 404);
    if (t.status === "refunded") return json({ ok: true, refunded: 0 });
    if (t.status !== "paid") return json({ error: "invalid_state" }, 409);
    try {
      await refund(t, false);
      return json({ ok: true, refunded: 1 });
    } catch (e) {
      console.error("ticket refund failed", t.id, (e as Error).message);
      return json({ error: "stripe_error" }, 502);
    }
  }

  if (body.action === "cancel_event") {
    if (typeof body.wedding_id !== "string") return json({ error: "validation_error" }, 400);
    if (!(await ownerOf(body.wedding_id))) return json({ error: "not_found" }, 404);
    // Primeiro deixa de vender, depois reembolsa.
    const { error: cErr } = await admin.rpc("mark_event_cancelled", { p_wedding: body.wedding_id, p_reason: reason });
    if (cErr) {
      console.error("mark_event_cancelled failed", cErr);
      return json({ error: "unknown_error" }, 500);
    }
    const { data: tickets } = await admin
      .from("event_tickets")
      .select("id, payment_intent_id")
      .eq("wedding_id", body.wedding_id)
      .eq("status", "paid");
    let refunded = 0;
    const failed: string[] = [];
    for (const t of tickets ?? []) {
      try {
        await refund(t, true);
        refunded++;
      } catch (e) {
        console.error("ticket refund failed", t.id, (e as Error).message);
        failed.push(t.id);
      }
    }
    // Falhas podem ser repetidas: a chave de idempotência evita reembolsos a dobrar.
    return json({ ok: failed.length === 0, refunded, failed: failed.length });
  }

  return json({ error: "validation_error" }, 400);
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
