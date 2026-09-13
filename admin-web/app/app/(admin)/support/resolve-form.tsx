"use client";

import { useActionState, useState } from "react";
import { resolveSupportTicket } from "./actions";
import { initialActionState } from "@/components/ActionButtons";

export function ResolveTicketForm({ ticketId }: { ticketId: string }) {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(resolveSupportTicket, initialActionState);

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} style={buttonStyle}>
        Resolver
      </button>
    );
  }

  return (
    <form
      action={formAction}
      style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 8 }}
    >
      <input type="hidden" name="ticket_id" value={ticketId} />
      <textarea
        name="resolution_note"
        required
        minLength={5}
        rows={2}
        placeholder="Resposta para o casal/parceiro..."
        style={{
          borderRadius: 10,
          border: "1px solid var(--border-muted)",
          padding: 10,
          fontSize: 13,
          resize: "vertical",
        }}
      />
      {state.error && <p style={{ color: "var(--status-rejected-fg)", fontSize: 12.5 }}>{state.error}</p>}
      <div style={{ display: "flex", gap: 8 }}>
        <button type="button" onClick={() => setOpen(false)} style={secondaryButtonStyle}>
          Cancelar
        </button>
        <button type="submit" disabled={isPending} style={buttonStyle}>
          {isPending ? "A resolver..." : "Confirmar resolução"}
        </button>
      </div>
    </form>
  );
}

const buttonStyle = {
  padding: "8px 14px",
  borderRadius: 999,
  border: "none",
  background: "var(--ink)",
  color: "var(--surface)",
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
};

const secondaryButtonStyle = {
  padding: "8px 14px",
  borderRadius: 999,
  border: "1px solid var(--border-muted)",
  background: "var(--surface)",
  color: "var(--ink)",
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
};
