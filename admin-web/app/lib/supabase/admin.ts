import "server-only";
import { createClient as createSupabaseClient } from "@supabase/supabase-js";

// service_role client — bypasses RLS entirely. NEVER import this into a
// Client Component or anything that ships to the browser ("server-only"
// above makes that a build error). Only for actions that genuinely need
// privileges no RLS policy grants (today: creating auth.users accounts
// via auth.admin, which the anon/authenticated key can never do — Supabase
// Auth has no "invite a user" RPC exposed to normal sessions).
//
// Every caller of this file must itself gate on requireAdmin() +
// has_admin_permission() BEFORE reaching here — this client trusts
// whatever it's told, same as `security definer` Postgres functions do.
export function createAdminClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !serviceRoleKey) {
    throw new Error(
      "SUPABASE_SERVICE_ROLE_KEY não está configurada. Vai a Supabase → Project Settings → API keys, copia a " +
        "'service_role' key (secreta — nunca a chave 'anon'/'publishable') e adiciona-a a admin-web/app/.env.local " +
        "como SUPABASE_SERVICE_ROLE_KEY=... (sem NEXT_PUBLIC_, para nunca chegar ao browser).",
    );
  }

  return createSupabaseClient(url, serviceRoleKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  });
}
