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
  const body = await req.json().catch(() => ({})) as { id?: string; validate?: boolean };
  if (!body.id?.startsWith("pmd_")) return Response.json({ error: "validation_error" }, { status: 400 });
  const stripe = stripeClient();
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
