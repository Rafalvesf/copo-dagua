import { createClient } from "jsr:@supabase/supabase-js@2";
import { stripeClient } from "../_shared/stripe.ts";

// Contract: mobile-app/payments/stripe-connect.md
//
// Chamada só pela Stripe, nunca por um cliente da app — a autenticação
// real é a assinatura do evento (`Stripe-Signature`, verificada com
// STRIPE_WEBHOOK_SECRET), não um JWT do Supabase. Por isso o cliente
// aqui é construído com SUPABASE_SERVICE_ROLE_KEY (o único sítio deste
// projeto que o faz fora dos scripts de migração) e as duas funções que
// chama (confirm_stripe_deposit_payment/sync_stripe_account_status,
// 021_stripe_connect.sql) têm `execute` revogado de `authenticated` de
// propósito — nem um utilizador autenticado consegue chamá-las
// diretamente, só este webhook.
//
// Sem CORS de propósito — isto nunca é chamado a partir de um browser/app,
// só server-to-server pela Stripe.
Deno.serve(async (req) => {
  const signature = req.headers.get("Stripe-Signature");
  const webhookSecret = Deno.env.get("STRIPE_WEBHOOK_SECRET");
  if (!signature || !webhookSecret) {
    return new Response("missing signature", { status: 400 });
  }

  const rawBody = await req.text();
  const stripe = stripeClient();

  let event;
  try {
    event = await stripe.webhooks.constructEventAsync(rawBody, signature, webhookSecret);
  } catch (err) {
    console.error("stripe-webhook signature verification failed", err);
    return new Response("invalid signature", { status: 400 });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as { id: string; payment_intent: string | { id: string } | null };
        const paymentIntentId =
          typeof session.payment_intent === "string"
            ? session.payment_intent
            : session.payment_intent?.id ?? session.id;
        const { error } = await supabase.rpc("confirm_stripe_deposit_payment", {
          p_session_id: session.id,
          p_payment_intent_id: paymentIntentId,
        });
        if (error) {
          console.error("confirm_stripe_deposit_payment failed", error);
          return new Response("db error", { status: 500 });
        }
        break;
      }
      case "account.updated": {
        const account = event.data.object as {
          id: string;
          charges_enabled: boolean;
          payouts_enabled: boolean;
        };
        const { error } = await supabase.rpc("sync_stripe_account_status", {
          p_account_id: account.id,
          p_charges_enabled: account.charges_enabled,
          p_payouts_enabled: account.payouts_enabled,
        });
        if (error) {
          console.error("sync_stripe_account_status failed", error);
          return new Response("db error", { status: 500 });
        }
        break;
      }
      default:
        // Outros eventos (payment_intent.*, charge.*, etc.) não são
        // tratados de propósito — checkout.session.completed já cobre o
        // caminho de sucesso do sinal; nada mais é consumido ainda.
        break;
    }
  } catch (err) {
    console.error("stripe-webhook handler failed", err);
    return new Response("internal error", { status: 500 });
  }

  return new Response(JSON.stringify({ received: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
