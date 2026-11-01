"use client";

import { useActionState, useEffect, useRef } from "react";
import { addAdminTask } from "./actions";
import { initialActionState } from "@/components/ActionButtons";

export function AddTaskForm({ areas }: { areas: string[] }) {
  const [state, formAction, isPending] = useActionState(addAdminTask, initialActionState);
  const ref = useRef<HTMLFormElement>(null);
  const wasPending = useRef(false);
  useEffect(() => {
    if (wasPending.current && !isPending && !state.error) ref.current?.reset();
    wasPending.current = isPending;
  }, [isPending, state.error]);
  return (
    <form ref={ref} action={formAction} className="stack-sm">
      <label className="field">
        <span className="field-label">Tarefa</span>
        <input name="title" required maxLength={160} className="input" placeholder="Ex.: Pedir orçamento ao contabilista" />
      </label>
      <label className="field">
        <span className="field-label">Detalhe (opcional)</span>
        <input name="detail" maxLength={500} className="input" />
      </label>
      <label className="field">
        <span className="field-label">Área</span>
        <select name="area" className="input" defaultValue="Outros">
          {[...new Set([...areas, "Outros"])].map((a) => (
            <option key={a} value={a}>{a}</option>
          ))}
        </select>
      </label>
      {state.error && <p className="form-error">{state.error}</p>}
      <div className="row">
        <button type="submit" disabled={isPending} className="btn btn-primary btn-sm">
          {isPending ? "A acrescentar…" : "Acrescentar"}
        </button>
      </div>
    </form>
  );
}
