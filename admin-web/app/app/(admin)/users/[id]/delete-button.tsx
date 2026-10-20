"use client";

import { useActionState, useState } from "react";
import { deleteUser } from "./actions";
import { initialActionState } from "@/components/ActionButtons";

export function DeleteUserButton({ userId, fullName }: { userId: string; fullName: string }) {
  const [confirming, setConfirming] = useState(false);
  const [state, formAction, isPending] = useActionState(deleteUser, initialActionState);

  if (!confirming) {
    return (
      <button type="button" onClick={() => setConfirming(true)} className="btn btn-danger-outline btn-block">
        Eliminar conta permanentemente
      </button>
    );
  }

  return (
    <form action={formAction} className="stack-sm" style={{ padding: 14, borderRadius: 12, background: "var(--danger-bg)" }}>
      <input type="hidden" name="user_id" value={userId} />
      <p style={{ fontSize: 13, color: "var(--danger-fg)" }}>
        Eliminar a conta de <strong>{fullName}</strong>? Não dá para desfazer: a conta e o perfil deixam de existir.
      </p>
      {state.error && <p className="form-error">{state.error}</p>}
      <div className="row">
        <button type="submit" disabled={isPending} className="btn btn-danger">
          {isPending ? "A eliminar…" : "Eliminar"}
        </button>
        <button type="button" onClick={() => setConfirming(false)} className="btn btn-ghost">
          Cancelar
        </button>
      </div>
    </form>
  );
}
