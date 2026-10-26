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
      return Response.json({ capabilities: caps, config: view, livemode: def?.livemode ?? null });
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
