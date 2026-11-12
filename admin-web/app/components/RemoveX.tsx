"use client";

import { useState, useTransition } from "react";

// X para apagar (2026-11-12): o primeiro toque pede confirmação na própria
// linha ("Apagar?"), o segundo apaga.
export function RemoveX({
  onRemove,
  label = "Apagar",
  confirm = "Apagar?",
}: {
  onRemove: () => Promise<{ error: string | null }>;
  label?: string;
  confirm?: string;
}) {
  const [asking, setAsking] = useState(false);
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);
  if (asking) {
    return (
      <span style={{ display: "inline-flex", gap: 6, alignItems: "center", flexShrink: 0 }}>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          disabled={pending}
          onClick={() =>
            start(async () => {
              const r = await onRemove();
              if (r.error) {
                setError(r.error);
                setAsking(false);
              }
            })
          }
        >
          {pending ? "…" : confirm}
        </button>
        <button type="button" className="btn btn-secondary btn-sm" onClick={() => setAsking(false)} disabled={pending}>
          Não
        </button>
      </span>
    );
  }
  return (
    <span style={{ display: "inline-flex", gap: 6, alignItems: "center", flexShrink: 0 }}>
      {error && <span className="form-error">{error}</span>}
      <button
        type="button"
        aria-label={label}
        title={label}
        onClick={() => setAsking(true)}
        style={{
          width: 28,
          height: 28,
          borderRadius: 14,
          border: "1px solid var(--border)",
          background: "transparent",
          color: "var(--ink-muted)",
          cursor: "pointer",
          fontSize: 16,
          lineHeight: "26px",
          padding: 0,
        }}
      >
        ×
      </button>
    </span>
  );
}
