import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "./cors.ts";

// Every one of the four Edge Functions in this module (approve/reject/
// suspend/restore-partner-profile) is a thin wrapper: parse the request,
// call the matching Postgres function (database/migrations/007_partner_review_transitions.sql)
// via RPC — which is the actual atomic unit, see "Risco técnico" in
// admin-web/partners/api.md — and translate its sqlstate into the logical
// error codes documented there.
//
// The client is built from the caller's own Authorization header, not
// SUPABASE_SERVICE_ROLE_KEY: the RPC function runs as the authenticated
// admin, not as a privileged service role, so its own `is_admin()` check
// (see api.md, "Autorização em duas camadas") is what's actually enforced.
export async function handlePartnerTransition(
  req: Request,
  rpcName: string,
  buildArgs: (body: Record<string, unknown>) => Record<string, unknown>,
): Promise<Response> {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  const authHeader = req.headers.get("Authorization");
  if (!authHeader) {
    return jsonError("forbidden", 403);
  }

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_ANON_KEY")!,
    { global: { headers: { Authorization: authHeader } } },
  );

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return jsonError("validation_error", 400);
  }

  const { error } = await supabase.rpc(rpcName, buildArgs(body));

  if (error) {
    return jsonError(mapSqlState(error.code), statusFor(error.code));
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function mapSqlState(code: string | undefined): string {
  switch (code) {
    case "42501":
      return "forbidden";
    case "P0001":
      return "invalid_state";
    case "22023":
      return "validation_error";
    case "P0002":
      return "not_found";
    default:
      return "unknown_error";
  }
}

function statusFor(code: string | undefined): number {
  switch (code) {
    case "42501":
      return 403;
    case "P0001":
      return 409;
    case "22023":
      return 400;
    case "P0002":
      return 404;
    default:
      return 500;
  }
}

function jsonError(code: string, status: number): Response {
  return new Response(JSON.stringify({ error: code }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
