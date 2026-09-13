import Stripe from "npm:stripe@17";

// Uma instância por invocação — consistente com o resto de supabase/functions/
// (createClient(...) também é construído por pedido, não guardado num
// singleton de módulo). STRIPE_SECRET_KEY é um secret de Edge Function
// (`supabase secrets set`), nunca o mesmo tipo de chave que
// SUPABASE_ANON_KEY/publishable key — não é seguro embutir no cliente.
export function stripeClient(): Stripe {
  const key = Deno.env.get("STRIPE_SECRET_KEY");
  if (!key) {
    throw new Error("STRIPE_SECRET_KEY not configured");
  }
  return new Stripe(key, { httpClient: Stripe.createFetchHttpClient() });
}
