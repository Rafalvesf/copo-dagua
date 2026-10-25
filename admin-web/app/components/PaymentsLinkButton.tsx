"use client";

import { useActionState, useState } from "react";
import { createPaymentsLink, type PaymentsLinkState } from "@/app/(admin)/partners/[id]/actions";

// Gera o link de ativação de pagamentos da Stripe para o parceiro
// (2026-10-25). O link só vale uns minutos e uma vez.
export function PaymentsLinkButton({ partnerId }: { partnerId: string }) {
  const [state, action, pending] = useActionState<PaymentsLinkState, FormData>(createPaymentsLink, { url: null, error: null });
  const [copied, setCopied] = useState(false);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
      <form action={action}>
        <input type="hidden" name="partner_id" value={partnerId} />
        <button type="submit" className="btn btn-secondary btn-block" disabled={pending}>
          {pending ? "A gerar…" : "Gerar link de ativação"}
        </button>
      </form>
      {state.error && <p className="field-hint" style={{ color: "var(--ink)", fontWeight: 600 }}>{state.error}</p>}
      {state.url && (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <a href={state.url} target="_blank" rel="noreferrer" className="btn btn-primary btn-block">
            Abrir ativação na Stripe
          </a>
          <button
            type="button"
            className="btn btn-ghost btn-sm"
            onClick={() => {
              navigator.clipboard?.writeText(state.url!).then(() => setCopied(true), () => setCopied(false));
            }}
          >
            {copied ? "Link copiado" : "Copiar link para enviar ao parceiro"}
          </button>
          <p className="field-hint">Válido durante alguns minutos e só uma vez. Gera outro se expirar.</p>
        </div>
      )}
    </div>
  );
}
