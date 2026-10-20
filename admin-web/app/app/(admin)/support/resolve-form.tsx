"use client";

import { useActionState, useState } from "react";
import { resolveSupportTicket } from "./actions";
import { initialActionState } from "@/components/ActionButtons";

export function ResolveTicketForm({ ticketId }: { ticketId: string }) {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(resolveSupportTicket, initialActionState);

  if (!open) {
    return (
      <div>
        <button type="button" onClick={() => setOpen(true)} className="btn btn-primary btn-sm">
          Responder e resolver
        </button>
      </div>
    );
  }

  return (
    <form action={formAction} className="stack-sm">
      <input type="hidden" name="ticket_id" value={ticketId} />
      <label className="field">
        <span className="field-label">Resposta</span>
        <textarea name="resolution_note" required minLength={5} rows={3} className="textarea" placeholder="Enviada ao organizador/parceiro e o pedido fica resolvido." />
      </label>
      {state.error && <p className="form-error">{state.error}</p>}
      <div className="row">
        <button type="submit" disabled={isPending} className="btn btn-primary btn-sm">
          {isPending ? "A enviar…" : "Enviar e resolver"}
        </button>
        <button type="button" onClick={() => setOpen(false)} className="btn btn-ghost btn-sm">
          Cancelar
        </button>
      </div>
    </form>
  );
}
