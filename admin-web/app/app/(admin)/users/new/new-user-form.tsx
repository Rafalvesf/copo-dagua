"use client";

import { useActionState } from "react";
import { createUserAccount, type CreateUserActionState } from "./actions";

const initialState: CreateUserActionState = { error: null };

const KIND_OPTIONS = [
  { value: "couple", label: "Casal" },
  { value: "partner", label: "Parceiro" },
  { value: "support", label: "Suporte (admin)" },
  { value: "moderator", label: "Moderador (admin)" },
];

export function NewUserForm() {
  const [state, formAction, isPending] = useActionState(createUserAccount, initialState);

  return (
    <form action={formAction} style={{ display: "flex", flexDirection: "column", gap: 14 }}>
      <Field label="Nome completo">
        <input name="full_name" required style={inputStyle} />
      </Field>
      <Field label="Email">
        <input name="email" type="email" required style={inputStyle} />
      </Field>
      <Field label="Tipo de conta">
        <select name="kind" defaultValue="couple" style={inputStyle}>
          {KIND_OPTIONS.map((k) => (
            <option key={k.value} value={k.value}>
              {k.label}
            </option>
          ))}
        </select>
      </Field>

      {state.error && <p style={{ color: "var(--status-rejected-fg)", fontSize: 13, margin: 0 }}>{state.error}</p>}

      <button
        type="submit"
        disabled={isPending}
        style={{
          padding: "12px 18px",
          borderRadius: 999,
          border: "none",
          background: "var(--ink)",
          color: "var(--surface)",
          fontWeight: 600,
          cursor: "pointer",
          opacity: isPending ? 0.6 : 1,
        }}
      >
        {isPending ? "A criar..." : "Criar conta e enviar convite"}
      </button>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 13 }}>
      {label}
      {children}
    </label>
  );
}

const inputStyle = {
  padding: "10px 12px",
  borderRadius: 10,
  border: "1px solid var(--border-muted)",
  background: "var(--background)",
  fontSize: 14,
};
