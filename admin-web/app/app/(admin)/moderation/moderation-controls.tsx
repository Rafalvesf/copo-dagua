"use client";

import { useTransition } from "react";
import { moderateReview } from "./actions";
import type { ReviewStatus } from "@/lib/types";

export function ModerationActions({ reviewId, status }: { reviewId: string; status: ReviewStatus }) {
  const [isPending, startTransition] = useTransition();

  const buttonStyle = {
    padding: "6px 12px",
    borderRadius: 999,
    border: "1px solid var(--border-muted)",
    background: "var(--surface)",
    color: "var(--ink)",
    fontSize: 12,
    fontWeight: 600,
    cursor: "pointer",
  };

  return (
    <div style={{ display: "flex", gap: 6, opacity: isPending ? 0.6 : 1 }}>
      {status !== "published" && (
        <button
          onClick={() => startTransition(() => moderateReview(reviewId, "published"))}
          disabled={isPending}
          style={{ ...buttonStyle, borderColor: "var(--status-published-fg)", color: "var(--status-published-fg)" }}
        >
          Republicar
        </button>
      )}
      {status !== "removed" && (
        <button
          onClick={() => startTransition(() => moderateReview(reviewId, "removed"))}
          disabled={isPending}
          style={{ ...buttonStyle, borderColor: "var(--status-rejected-fg)", color: "var(--status-rejected-fg)" }}
        >
          Remover
        </button>
      )}
    </div>
  );
}
