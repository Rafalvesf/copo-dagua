import { createClient } from "jsr:@supabase/supabase-js@2";
import webpush from "npm:web-push@3.6.7";
import { corsHeaders } from "../_shared/cors.ts";

// Chave pública para o browser subscrever notificações (Web Push).
// Na primeira chamada gera o par de chaves VAPID e guarda-o na base de
// dados (`private.app_config`, migração 115) — a chave privada nunca sai
// do servidor.
Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return json({ error: "forbidden" }, 403);
  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return json({ error: "forbidden" }, 403);

  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: cfg, error } = await admin.rpc("push_config");
  if (error) return json({ error: "not_configured" }, 503);
  let publicKey = (cfg as Record<string, string> | null)?.vapid_public;
  if (!publicKey) {
    const keys = webpush.generateVAPIDKeys();
    await admin.rpc("push_set_vapid", { p_public: keys.publicKey, p_private: keys.privateKey });
    const { data: again } = await admin.rpc("push_config");
    publicKey = (again as Record<string, string> | null)?.vapid_public;
  }
  if (!publicKey) return json({ error: "not_configured" }, 503);
  return json({ public_key: publicKey });
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
