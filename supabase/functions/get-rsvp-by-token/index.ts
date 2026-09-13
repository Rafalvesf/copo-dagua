import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

// Contract: mobile-app/guests/api.md — "get-rsvp-by-token".
//
// Função PÚBLICA (deploy com --no-verify-jwt, mesmo raciocínio de
// stripe-webhook: quem chama é um convidado sem sessão nenhuma, a
// "autenticação" real é conhecer o `token` uuid aleatório de
// `guests.rsvp_token`). Usa sempre o cliente service_role — nunca expõe
// outros convidados nem outros dados do casamento além do necessário
// para preencher a página pública.
//
// Rate limiting por IP (api.md, "Risco técnico"): mesmo padrão já
// estabelecido para `login_attempts` (001_authentication.sql) — conta
// tentativas recentes antes de responder, regista a própria tentativa a
// seguir. Um UUID aleatório já é inadivinhável na prática; isto cobre o
// vetor de negação de serviço/abuso, não adivinhação de token.
const RATE_LIMIT_WINDOW_MINUTES = 15;
const RATE_LIMIT_MAX_ATTEMPTS = 30;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? null;

  const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60_000).toISOString();
  const { count } = await supabase
    .from("rsvp_attempts")
    .select("id", { count: "exact", head: true })
    .eq("ip_address", ip)
    .eq("event_type", "lookup")
    .gte("attempted_at", since);

  if ((count ?? 0) >= RATE_LIMIT_MAX_ATTEMPTS) {
    return jsonError("rate_limited", 429);
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return jsonError("validation_error", 400);
  }
  const token = body.token;
  if (typeof token !== "string") {
    return jsonError("validation_error", 400);
  }

  const { data, error } = await supabase
    .rpc("get_rsvp_by_token", { p_token: token })
    .maybeSingle();

  await supabase.from("rsvp_attempts").insert({
    ip_address: ip,
    token,
    event_type: "lookup",
    success: !error && data != null,
  });

  if (error || !data) {
    return jsonError("not_found", 404);
  }

  return new Response(JSON.stringify(data), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});

function jsonError(code: string, status: number): Response {
  return new Response(JSON.stringify({ error: code }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
