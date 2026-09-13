import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

// Contract: mobile-app/guests/api.md — "submit-rsvp". Mesmo raciocínio
// de get-rsvp-by-token/index.ts (função pública, service_role,
// rate limiting por IP) — limite mais apertado aqui por ser uma
// escrita, não só leitura.
const RATE_LIMIT_WINDOW_MINUTES = 15;
const RATE_LIMIT_MAX_ATTEMPTS = 10;

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
    .eq("event_type", "submit")
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
  const rsvpStatus = body.rsvp_status;
  if (
    typeof token !== "string" ||
    (rsvpStatus !== "confirmed" && rsvpStatus !== "declined")
  ) {
    return jsonError("validation_error", 400);
  }
  const plusOneName = typeof body.plus_one_name === "string" ? body.plus_one_name : null;
  const dietaryRestrictions =
    typeof body.dietary_restrictions === "string" ? body.dietary_restrictions : null;
  const guestMessage = typeof body.guest_message === "string" ? body.guest_message : null;

  const { error } = await supabase.rpc("submit_rsvp", {
    p_token: token,
    p_rsvp_status: rsvpStatus,
    p_plus_one_name: plusOneName,
    p_dietary_restrictions: dietaryRestrictions,
    p_guest_message: guestMessage,
  });

  await supabase.from("rsvp_attempts").insert({
    ip_address: ip,
    token,
    event_type: "submit",
    success: !error,
  });

  if (error) {
    const code = error.code === "P0002" ? "not_found" : "validation_error";
    return jsonError(code, error.code === "P0002" ? 404 : 400);
  }

  return new Response(JSON.stringify({ ok: true }), {
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
});

function jsonError(code: string, status: number): Response {
  return new Response(JSON.stringify({ error: code }), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}
