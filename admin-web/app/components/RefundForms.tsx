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
      <button type="button" onClick={() => setOpen(true)} className="btn btn-secondary btn-sm">
        Reembolsar…
      </button>
    );
  }

  return (
    <form action={formAction} className="stack-sm" style={formBox}>
      <input type="hidden" name="payment_id" value={paymentId} />
      <label className="field">
        <span className="field-label">Valor a devolver (€)</span>
        <input name="amount" type="number" step="0.01" min="0.01" max={maxAmount} className="input" placeholder={`Tudo: ${maxAmount.toLocaleString("pt-PT", { minimumFractionDigits: 2 })}`} />
        <span className="field-hint">Vazio devolve tudo. Comissão e parte do parceiro saem na mesma proporção.</span>
      </label>
      <label className="field">
        <span className="field-label">Motivo</span>
        <input name="reason" required minLength={5} className="input" placeholder="Fica no histórico da reserva" />
      </label>
      {state.error && <p className="form-error">{state.error}</p>}
      <div className="row">
        <button type="submit" disabled={isPending} className="btn btn-danger">
          {isPending ? "A reembolsar…" : "Confirmar reembolso"}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost">
          Cancelar
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
        className="btn btn-primary btn-sm"
      >
        {isPending ? "A reembolsar…" : "Reembolsar agora"}
      </button>
      {error && <p className="form-error">{error}</p>}
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
    <form action={formAction} className="stack">
      <input type="hidden" name="dispute_id" value={disputeId} />
      <div className="tabs" role="radiogroup" aria-label="Decisão" style={{ display: "flex", flexWrap: "wrap" }}>
        {Object.entries(DISPUTE_RESOLUTIONS).map(([value, text]) => (
          <label key={value} className="tab" aria-selected={resolution === value} style={{ flex: 1, justifyContent: "center" }}>
            <input type="radio" name="resolution" value={value} checked={resolution === value} onChange={() => setResolution(value)} style={{ display: "none" }} />
            {text}
          </label>
        ))}
      </div>
      {resolution === "refund_full" && (
        <p className="field-hint">Devolve ao organizador tudo o que ainda não foi reembolsado ({maxAmount.toLocaleString("pt-PT", { minimumFractionDigits: 2 })} €).</p>
      )}
      {resolution === "partner_favor" && <p className="field-hint">Não há reembolso; a reserva volta ao estado normal.</p>}
      {resolution === "refund_partial" && (
        <label className="field">
          <span className="field-label">Valor a devolver (€)</span>
          <input name="amount" type="number" step="0.01" min="0.01" max={maxAmount} required className="input" />
          <span className="field-hint">Máximo {maxAmount.toLocaleString("pt-PT", { minimumFractionDigits: 2 })} €</span>
        </label>
      )}
      <label className="field">
        <span className="field-label">Explicação da decisão</span>
        <textarea name="note" required minLength={10} rows={4} className="textarea" placeholder="Enviada ao organizador e ao parceiro (mín. 10 caracteres)" />
      </label>
      {state.error && <p className="form-error">{state.error}</p>}
      <div>
        <button type="submit" disabled={isPending} className={resolution === "partner_favor" ? "btn btn-primary" : "btn btn-danger"}>
          {isPending ? "A decidir…" : "Fechar disputa"}
        </button>
      </div>
    </form>
  );
}

const formBox: CSSProperties = {
  marginTop: 8,
  padding: 14,
  borderRadius: 12,
  background: "var(--surface-2)",
  boxShadow: "0 0 0 1px var(--border)",
  maxWidth: 420,
  textAlign: "left",
};
