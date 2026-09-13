"use server";

import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export type LoginState = { error: string | null };

// Deliberately generic error copy — never reveal whether the email exists
// or whether the account exists but isn't an admin (anti-enumeration,
// same principle as backend/auth/user-flow.md and admin-web/partners/user-flow.md).
const GENERIC_ERROR = "Não foi possível iniciar sessão. Verifica os dados.";

export async function login(
  _prevState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "");
  const password = String(formData.get("password") ?? "");

  if (!email || !password) {
    return { error: GENERIC_ERROR };
  }

  const supabase = await createClient();

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    return { error: GENERIC_ERROR };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", data.user.id)
    .single();

  if (!profile || profile.role !== "admin") {
    await supabase.auth.signOut();
    return { error: GENERIC_ERROR };
  }

  redirect("/partners");
}
