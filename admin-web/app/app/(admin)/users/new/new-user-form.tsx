"use client";

import { useActionState } from "react";
import { createUserAccount, type CreateUserActionState } from "./actions";

const initialState: CreateUserActionState = { error: null };

const KIND_OPTIONS = [
  { value: "couple", label: "Organizador" },
  { value: "partner", label: "Parceiro" },
  { value: "support", label: "Suporte (admin)" },
  { value: "moderator", label: "Moderador (admin)" },
];

export function NewUserForm() {
  const [state, formAction, isPending] = useActionState(createUserAccount, initialState);

  return (
    <form action={formAction} className="stack">
      <label className="field">
        <span className="field-label">Nome completo</span>
        <input name="full_name" required className="input" />
      </label>
      <label className="field">
        <span className="field-label">Email</span>
        <input name="email" type="email" required className="input" />
      </label>
      <label className="field">
        <span className="field-label">Tipo de conta</span>
        <select name="kind" defaultValue="couple" className="select">
          {KIND_OPTIONS.map((k) => (
            <option key={k.value} value={k.value}>
              {k.label}
            </option>
          ))}
        </select>
      </label>
      {state.error && <p className="form-error">{state.error}</p>}
      <div>
        <button type="submit" disabled={isPending} className="btn btn-primary">
          {isPending ? "A criar…" : "Criar conta e enviar convite"}
        </button>
      </div>
    </form>
  );
}
