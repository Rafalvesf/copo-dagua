"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import type { ReviewStatus } from "@/lib/types";

// Update direto (não RPC) — a policy "Admins can moderate reviews" em
// 045_reviews.sql já restringe isto a `is_admin()`; nunca um DELETE,
// só muda `status` (nunca apaga histórico, ver a mesma migração).
export async function moderateReview(reviewId: string, status: ReviewStatus) {
  await requireAdmin();
  const supabase = await createClient();

  const { error } = await supabase
    .from("reviews")
    .update({ status, updated_at: new Date().toISOString() })
    .eq("id", reviewId);

  if (!error) {
    revalidatePath("/moderation");
  }
}
