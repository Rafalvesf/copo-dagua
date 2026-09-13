"use client";

import { useActionState, useState } from "react";
import { deleteUser } from "./actions";
import { initialActionState } from "@/components/ActionButtons";

export function DeleteUserButton({ userId, fullName }: { userId: string; fullName: string }) {
  const [confirming, setConfirming] = useState(false);
  const [state, formAction, isPending] = useActionState(deleteUser, initialActionState);

  if (!confirming) {
    return (
      <button
        onClick={() => setConfirming(true)}
        style={{
          padding: "10px 18px",
          borderRadius: 999,
          border: "1px solid var(--status-rejected-fg)",
          background: "var(--surface)",
          color: "var(--status-rejected-fg)",
          fontWeight: 600,
          cursor: "pointer",
        }}
      >
        Eliminar conta permanentemente
      </button>
    );
  }

  return (
    <form
      action={formAction}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: 16,
        borderRadius: 16,
        background: "var(--surface)",
        boxShadow: "var(--shadow-card)",
        maxWidth: 420,
      }}
    >
      <input type="hidden" name="user_id" value={userId} />
      <p style={{ fontSize: 13.5, margin: 0 }}>
        Eliminar permanentemente a conta de <strong>{fullName}</strong>? Esta ação não pode ser desfeita — a conta
        deixa de existir em <code>auth.users</code> e em <code>profiles</code>.
      </p>
      {state.error && <p style={{ color: "var(--status-rejected-fg)", fontSize: 13 }}>{state.error}</p>}
      <div style={{ display: "flex", gap: 8 }}>
        <button
          type="button"
          onClick={() => setConfirming(false)}
          style={{
            padding: "10px 18px",
            borderRadius: 999,
            border: "1px solid var(--border-muted)",
            background: "var(--surface)",
            color: "var(--ink)",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Cancelar
        </button>
        <button
          type="submit"
          disabled={isPending}
          style={{
            padding: "10px 18px",
            borderRadius: 999,
            border: "none",
            background: "var(--status-rejected-fg)",
            color: "var(--surface)",
            fontWeight: 600,
            cursor: "pointer",
            opacity: isPending ? 0.6 : 1,
          }}
        >
          {isPending ? "A eliminar..." : "Confirmar eliminação"}
        </button>
      </div>
    </form>
  );
}
