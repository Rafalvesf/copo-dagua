// Desativada (2026-10-25): os dados de pagamento são pedidos com o UI da
// app (connect-account, action "details"), sem formulários da Stripe.
Deno.serve(() => new Response(JSON.stringify({ error: "gone" }), { status: 410, headers: { "Content-Type": "application/json" } }));
