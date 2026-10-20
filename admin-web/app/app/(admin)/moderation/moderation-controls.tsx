"use client";

import { useTransition } from "react";
import { moderateReview } from "./actions";
import type { ReviewStatus } from "@/lib/types";

export function ModerationActions({ reviewId, status }: { reviewId: string; status: ReviewStatus }) {
  const [isPending, startTransition] = useTransition();
  return (
    <div className="row" style={{ gap: 6 }}>
      {status !== "published" && (
        <button type="button" className="btn btn-secondary btn-sm" disabled={isPending} onClick={() => startTransition(() => moderateReview(reviewId, "published"))}>
          Voltar a publicar
        </button>
      )}
      {status !== "removed" && (
        <button type="button" className="btn btn-danger-outline btn-sm" disabled={isPending} onClick={() => startTransition(() => moderateReview(reviewId, "removed"))}>
          Remover
        </button>
      )}
    </div>
  );
}
