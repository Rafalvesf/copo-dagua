import "server-only";

import { redirect } from "next/navigation";
import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

// Data Access Layer — centralizes the "is this user an admin" check so
// every Server Component/Action that needs it goes through the same,
// database-backed verification instead of trusting a client-passed role.
// This is the *secure* check (RN01, admin-web/partners/requirements.md);
// proxy.ts only does an optimistic, cookie-presence check.
export const requireAdmin = cache(async () => {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, role, full_name, admin_role")
    .eq("id", user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    await supabase.auth.signOut();
    redirect("/login?error=not_admin");
  }

  return {
    userId: user.id,
    fullName: profile.full_name as string,
    // `null` = conta admin criada antes de 018_admin_rbac.sql — o backend
    // (has_admin_permission()) trata isto como 'admin' por omissão; o
    // frontend não deve assumir o mesmo silenciosamente, por isso fica
    // explícito aqui e cada página decide o que mostrar.
    adminRole: profile.admin_role as
      | "super_admin"
      | "admin"
      | "support"
      | "finance"
      | "moderator"
      | null,
  };
});
