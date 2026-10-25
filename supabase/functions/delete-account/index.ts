import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

// Apagar a conta (RGPD, 2026-10-25 — "faz o botão para o RGPD").
// O próprio utilizador, com sessão iniciada, pede o apagamento na app.
// 1. `erase_account` (migração 122) apaga/anonimiza os dados — recusa se
//    houver reservas ativas;
// 2. o login é apagado (soft delete do Supabase Auth: email, palavra-passe
//    e ligações a Google/Apple desaparecem; o id fica para os registos de
//    pagamentos que a lei obriga a guardar).
// Body: { confirm: true }
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return json({ error: "forbidden" }, 403);

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return json({ error: "forbidden" }, 403);

  let body: Record<string, unknown> = {};
  try {
    body = await req.json();
  } catch { /* vazio */ }
  if (body.confirm !== true) return json({ error: "validation_error" }, 400);

  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: active, error } = await admin.rpc("erase_account", { p_user: user.id });
  if (error) {
    console.error("erase_account failed", user.id, error);
    return json({ error: "unknown_error" }, 500);
  }
  if (typeof active === "number" && active > 0) return json({ error: "active_bookings", count: active }, 409);

  const { error: authError } = await admin.auth.admin.deleteUser(user.id, true);
  if (authError) {
    console.error("auth delete failed", user.id, authError);
    return json({ error: "unknown_error" }, 500);
  }
  return json({ deleted: true });
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
