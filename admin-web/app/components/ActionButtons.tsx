"use client";

import { useActionState, useState, useTransition } from "react";

export type ActionState = { error: string | null };
export const initialActionState: ActionState = { error: null };

// One-shot actions (no reason required) — e.g. approve, restore.
// Generic over any server action shaped (id) => Promise<ActionState>, so
// admin-web/partners/[id] and admin-web/users/[id] share this instead of
// each hand-rolling the same pending/error handling.
export function SimpleActionButton({
  id,
  label,
  action,
}: {
  id: string;
  label: string;
  action: (id: string) => Promise<ActionState>;
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
    <div>
      <button onClick={handleClick} disabled={isPending} style={primaryButtonStyle}>
        {isPending ? "A processar..." : label}
      </button>
      {error && <p style={errorStyle}>{error}</p>}
    </div>
  );
}

// Reason-required actions — e.g. reject, suspend. Same ReasonModal pattern
// documented in admin-web/partners/requirements.md RN04 and
// admin-web/users/requirements.md RN04.
export function ReasonActionForm({
  id,
  idFieldName,
  label,
  action,
}: {
  id: string;
  idFieldName: string;
  label: string;
  action: (prevState: ActionState, formData: FormData) => Promise<ActionState>;
}) {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(action, initialActionState);

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} style={secondaryButtonStyle}>
        {label}
      </button>
    );
  }

  return (
    <form
      action={formAction}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginTop: 8,
        padding: 16,
        borderRadius: 16,
        background: "var(--surface)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <input type="hidden" name={idFieldName} value={id} />
      <label style={{ fontSize: 13, color: "var(--ink-muted)" }}>Motivo</label>
      <textarea
        name="reason"
        required
        minLength={10}
        rows={3}
        style={{
          borderRadius: 10,
          border: "1px solid var(--border-muted)",
          padding: 10,
          resize: "vertical",
        }}
      />
      {state.error && <p style={errorStyle}>{state.error}</p>}
      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={() => setOpen(false)} style={secondaryButtonStyle}>
          Cancelar
        </button>
        <button type="submit" disabled={isPending} style={primaryButtonStyle}>
          {isPending ? "A processar..." : "Confirmar"}
        </button>
      </div>
    </form>
  );
}

// Cross-reference verification — e.g. confirming a deposit. The admin
// enters the amount they actually received; the server action cross-checks
// it automatically against the expected value and only changes state on a
// match (admin_confirm_deposit(p_booking_id, p_amount_received), see
// backend/bookings/api.md). The human step is entering the number
// correctly, not clicking "yes" — a typo or wrong reference is rejected,
// not silently confirmed.
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
      <button onClick={() => setOpen(true)} style={secondaryButtonStyle}>
        {label}
      </button>
    );
  }

  return (
    <form
      action={formAction}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        marginTop: 8,
        padding: 16,
        borderRadius: 16,
        background: "var(--surface)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <input type="hidden" name={idFieldName} value={id} />
      <label style={{ fontSize: 13, color: "var(--ink-muted)" }}>
        Valor recebido (€) — esperado: {expectedAmount.toLocaleString("pt-PT")} €
      </label>
      <input
        name={amountFieldName}
        type="number"
        step="0.01"
        required
        style={{
          borderRadius: 10,
          border: "1px solid var(--border-muted)",
          padding: 10,
        }}
      />
      <p style={{ fontSize: 12, color: "var(--ink-muted)" }}>
        O valor é cruzado automaticamente com o sinal esperado — só avança se
        coincidir.
      </p>
      {state.error && <p style={errorStyle}>{state.error}</p>}
      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={() => setOpen(false)} style={secondaryButtonStyle}>
          Cancelar
        </button>
        <button type="submit" disabled={isPending} style={primaryButtonStyle}>
          {isPending ? "A verificar..." : "Verificar e confirmar"}
        </button>
      </div>
    </form>
  );
}

const primaryButtonStyle = {
  padding: "10px 18px",
  borderRadius: 999,
  border: "none",
  background: "var(--ink)",
  color: "var(--surface)",
  fontWeight: 600,
  cursor: "pointer",
};

const secondaryButtonStyle = {
  padding: "10px 18px",
  borderRadius: 999,
  border: "1px solid var(--border-muted)",
  background: "var(--surface)",
  color: "var(--ink)",
  fontWeight: 600,
  cursor: "pointer",
};

const errorStyle = { color: "var(--status-rejected-fg)", fontSize: 13 };
