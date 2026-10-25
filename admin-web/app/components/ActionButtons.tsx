"use client";

import { useActionState, useState, useTransition } from "react";

export type ActionState = { error: string | null };
export const initialActionState: ActionState = { error: null };

type Variant = "primary" | "secondary" | "danger";
const btnClass = (v: Variant, block?: boolean) =>
  `btn ${v === "primary" ? "btn-primary" : v === "danger" ? "btn-danger-outline" : "btn-secondary"}` + (block ? " btn-block" : "");

// Ações de um clique (aprovar, restaurar…). Partilhado entre parceiros,
// utilizadores e reservas.
export function SimpleActionButton({
  id,
  label,
  action,
  variant = "primary",
  block,
}: {
  id: string;
  label: string;
  action: (id: string) => Promise<ActionState>;
  variant?: Variant;
  block?: boolean;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleClick() {
    startTransition(async () => {
      const result = await action(id);
      setError(result.error);
    });
  }

  return (
    <div className="stack-sm" style={{ gap: 6 }}>
      <button type="button" onClick={handleClick} disabled={isPending} className={btnClass(variant, block)}>
        {isPending ? "A processar…" : label}
      </button>
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}

// Ações que pedem motivo (rejeitar, suspender, pedir alterações). O motivo
// fica no histórico e é enviado ao utilizador.
export function ReasonActionForm({
  id,
  idFieldName,
  label,
  action,
  variant = "secondary",
  block,
  hint,
}: {
  id: string;
  idFieldName: string;
  label: string;
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
  variant?: Variant;
  block?: boolean;
  hint?: string;
}) {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(action, initialActionState);

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className={btnClass(variant, block)}>
        {label}
      </button>
    );
  }

  return (
    <form action={formAction} className="stack-sm" style={{ padding: 14, borderRadius: 12, background: "var(--surface-2)", boxShadow: "0 0 0 1px var(--border)" }}>
      <input type="hidden" name={idFieldName} value={id} />
      <label className="field">
        <span className="field-label">{label} — motivo</span>
        <textarea name="reason" required minLength={10} rows={3} className="textarea" placeholder="Explica em poucas palavras (mín. 10 caracteres)" />
        <span className="field-hint">{hint ?? "Fica no histórico e é enviado ao utilizador."}</span>
      </label>
      {state.error && <p className="form-error">{state.error}</p>}
      <div className="row">
        <button type="submit" disabled={isPending} className={variant === "danger" ? "btn btn-danger" : "btn btn-primary"}>
          {isPending ? "A processar…" : `Confirmar`}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost">
          Cancelar
        </button>
      </div>
    </form>
  );
}

// Confirmação manual de um sinal: o admin escreve o valor recebido e o
// servidor só avança se coincidir com o esperado (admin_confirm_deposit).
export function AmountVerificationForm({
  id,
  idFieldName,
  amountFieldName,
  label,
  expectedAmount,
  action,
}: {
  id: string;
  idFieldName: string;
  amountFieldName: string;
  label: string;
  expectedAmount: number;
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
}) {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(action, initialActionState);

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="btn btn-secondary">
        {label}
      </button>
    );
  }

  return (
    <form action={formAction} className="stack-sm" style={{ padding: 14, borderRadius: 12, background: "var(--surface-2)", boxShadow: "0 0 0 1px var(--border)" }}>
      <input type="hidden" name={idFieldName} value={id} />
      <label className="field">
        <span className="field-label">Valor recebido (€)</span>
        <input name={amountFieldName} type="number" step="0.01" required className="input" placeholder={expectedAmount.toLocaleString("pt-PT")} />
        <span className="field-hint">Esperado: {expectedAmount.toLocaleString("pt-PT")} €. Só avança se coincidir.</span>
      </label>
      {state.error && <p className="form-error">{state.error}</p>}
      <div className="row">
        <button type="submit" disabled={isPending} className="btn btn-primary">
          {isPending ? "A verificar…" : "Verificar e confirmar"}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost">
          Cancelar
        </button>
      </div>
    </form>
  );
}
