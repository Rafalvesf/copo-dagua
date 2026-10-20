"use client";

import { useActionState, useState, useTransition } from "react";
import type { CSSProperties } from "react";
import type { ActionState } from "./ActionButtons";
import { DISPUTE_RESOLUTIONS } from "@/lib/dispute-labels";

const initial: ActionState = { error: null };

// Reembolso manual de um pagamento (total ou parcial). Pede sempre um
// motivo — fica no histórico da reserva e no audit log.
export function RefundPaymentForm({
  paymentId,
  maxAmount,
  action,
}: {
  paymentId: string;
  /** O que ainda se pode devolver, em euros (o que o casal pagou, com comissão). */
  maxAmount: number;
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
}) {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(action, initial);

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} style={secondaryButton}>
        Reembolsar…
      </button>
    );
  }

  return (
    <form action={formAction} style={formBox}>
      <input type="hidden" name="payment_id" value={paymentId} />
      <label style={label}>
        Valor a devolver (€) — vazio = tudo ({maxAmount.toLocaleString("pt-PT", { minimumFractionDigits: 2 })} €)
      </label>
      <input name="amount" type="number" step="0.01" min="0.01" max={maxAmount} style={input} />
      <label style={label}>Motivo (fica no histórico)</label>
      <input name="reason" required minLength={5} style={input} />
      <p style={hint}>A comissão e a parte do parceiro são devolvidas na mesma proporção.</p>
      {state.error && <p style={errorText}>{state.error}</p>}
      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={() => setOpen(false)} style={secondaryButton}>
          Cancelar
        </button>
        <button type="submit" disabled={isPending} style={dangerButton}>
          {isPending ? "A reembolsar..." : "Confirmar reembolso"}
        </button>
      </div>
    </form>
  );
}

// Botão simples que corre a regra automática de uma reserva cancelada.
export function RunRefundButton({
  bookingId,
  action,
}: {
  bookingId: string;
  action: (bookingId: string) => Promise<ActionState>;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  return (
    <div>
      <button
        type="button"
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            const r = await action(bookingId);
            setError(r.error);
          })
        }
        style={primaryButton}
      >
        {isPending ? "A reembolsar..." : "Reembolsar agora"}
      </button>
      {error && <p style={errorText}>{error}</p>}
    </div>
  );
}

// Decisão de uma disputa.
export function ResolveDisputeForm({
  disputeId,
  maxAmount,
  action,
}: {
  disputeId: string;
  maxAmount: number;
  action: (prev: ActionState, formData: FormData) => Promise<ActionState>;
}) {
  const [resolution, setResolution] = useState("partner_favor");
  const [state, formAction, isPending] = useActionState(action, initial);

  return (
    <form action={formAction} style={{ ...formBox, marginTop: 0 }}>
      <input type="hidden" name="dispute_id" value={disputeId} />
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {Object.entries(DISPUTE_RESOLUTIONS).map(([value, text]) => (
          <label
            key={value}
            style={{
              ...chip,
              background: resolution === value ? "var(--ink)" : "var(--surface)",
              color: resolution === value ? "var(--surface)" : "var(--ink)",
            }}
          >
            <input
              type="radio"
              name="resolution"
              value={value}
              checked={resolution === value}
              onChange={() => setResolution(value)}
              style={{ display: "none" }}
            />
            {text}
          </label>
        ))}
      </div>
      {resolution === "refund_full" && (
        <p style={hint}>
          Devolve ao organizador tudo o que ainda não foi reembolsado (
          {maxAmount.toLocaleString("pt-PT", { minimumFractionDigits: 2 })} €).
        </p>
      )}
      {resolution === "refund_partial" && (
        <>
          <label style={label}>Valor a devolver (€), máximo {maxAmount.toLocaleString("pt-PT", { minimumFractionDigits: 2 })} €</label>
          <input name="amount" type="number" step="0.01" min="0.01" max={maxAmount} required style={input} />
        </>
      )}
      <label style={label}>Decisão (enviada ao organizador e ao parceiro, mín. 10 caracteres)</label>
      <textarea name="note" required minLength={10} rows={3} style={{ ...input, resize: "vertical" }} />
      {state.error && <p style={errorText}>{state.error}</p>}
      <div>
        <button type="submit" disabled={isPending} style={resolution === "partner_favor" ? primaryButton : dangerButton}>
          {isPending ? "A decidir..." : "Fechar disputa"}
        </button>
      </div>
    </form>
  );
}

const formBox: CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginTop: 8,
  padding: 16,
  borderRadius: 16,
  background: "var(--surface)",
  boxShadow: "var(--shadow-card)",
  maxWidth: 520,
};
const label: CSSProperties = { fontSize: 13, color: "var(--ink-muted)" };
const hint: CSSProperties = { fontSize: 12, color: "var(--ink-muted)" };
const input: CSSProperties = { borderRadius: 10, border: "1px solid var(--border-muted)", padding: 10, font: "inherit" };
const errorText: CSSProperties = { color: "var(--status-rejected-fg)", fontSize: 13 };
const chip: CSSProperties = {
  padding: "8px 14px",
  borderRadius: 999,
  fontSize: 13,
  fontWeight: 600,
  border: "1px solid var(--border-muted)",
  cursor: "pointer",
};
const baseButton: CSSProperties = {
  padding: "10px 18px",
  borderRadius: 999,
  fontSize: 14,
  fontWeight: 600,
  border: "none",
  cursor: "pointer",
};
const primaryButton: CSSProperties = { ...baseButton, background: "var(--ink)", color: "var(--surface)" };
const dangerButton: CSSProperties = { ...baseButton, background: "var(--status-rejected-fg)", color: "#fff" };
const secondaryButton: CSSProperties = {
  ...baseButton,
  background: "var(--surface)",
  color: "var(--ink)",
  border: "1px solid var(--border-muted)",
};
