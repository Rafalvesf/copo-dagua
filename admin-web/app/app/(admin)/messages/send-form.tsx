"use client";

import { useActionState, useMemo, useState } from "react";
import { sendAdminMessage, type SendState } from "./actions";

type Person = { id: string; full_name: string | null; role: string };

const ROLE: Record<string, string> = { couple: "Organizador", partner: "Parceiro", guest: "Convidado" };

const AUDIENCES = [
  { value: "user", label: "Uma pessoa" },
  { value: "all", label: "Todos" },
  { value: "couple", label: "Todos os organizadores" },
  { value: "partner", label: "Todos os parceiros" },
  { value: "guest", label: "Todos os convidados" },
];

// Ecrã que abre ao tocar na notificação (rotas da app).
const LINKS = [
  { value: "", label: "Nenhum (só a mensagem)" },
  { value: "/settings", label: "Definições" },
  { value: "/bookings", label: "Reservas (organizador)" },
  { value: "/partner-payments", label: "Pagamentos (parceiro)" },
  { value: "/partners", label: "Procurar parceiros" },
];

const initial: SendState = { error: null, sent: null };

export function SendMessageForm({ people, preselect }: { people: Person[]; preselect?: string }) {
  const [state, formAction, isPending] = useActionState(sendAdminMessage, initial);
  const [audience, setAudience] = useState("user");
  const [query, setQuery] = useState("");
  const [recipient, setRecipient] = useState(preselect ?? "");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return people
      .filter((p) => !q || (p.full_name ?? "").toLowerCase().includes(q) || (ROLE[p.role] ?? "").toLowerCase().includes(q))
      .slice(0, 200);
  }, [people, query]);

  const count = audience === "all" ? people.length : audience === "user" ? 1 : people.filter((p) => p.role === audience).length;

  return (
    <form action={formAction} className="stack">
      <label className="field">
        <span className="field-label">Para</span>
        <select name="audience" className="select" value={audience} onChange={(e) => setAudience(e.target.value)}>
          {AUDIENCES.map((a) => (
            <option key={a.value} value={a.value}>{a.label}</option>
          ))}
        </select>
      </label>

      {audience === "user" ? (
        <label className="field">
          <span className="field-label">Pessoa</span>
          <input className="input" placeholder="Procurar por nome…" value={query} onChange={(e) => setQuery(e.target.value)} />
          <select name="recipient" className="select" size={6} value={recipient} onChange={(e) => setRecipient(e.target.value)} required>
            {filtered.map((p) => (
              <option key={p.id} value={p.id}>
                {(p.full_name || "Sem nome") + " · " + (ROLE[p.role] ?? p.role)}
              </option>
            ))}
          </select>
        </label>
      ) : (
        <p className="field-hint">Vai para {count} {count === 1 ? "pessoa" : "pessoas"}.</p>
      )}

      <label className="field">
        <span className="field-label">Título</span>
        <input name="title" className="input" maxLength={120} required placeholder="Ex.: Novidade na À Nossa!" />
      </label>
      <label className="field">
        <span className="field-label">Mensagem</span>
        <textarea name="body" className="textarea" rows={5} maxLength={1000} required />
      </label>
      <label className="field">
        <span className="field-label">Ao tocar, abre</span>
        <select name="link" className="select" defaultValue="">
          {LINKS.map((l) => (
            <option key={l.value} value={l.value}>{l.label}</option>
          ))}
        </select>
      </label>

      {state.error && <p className="form-error">{state.error}</p>}
      {state.sent != null && !state.error && (
        <p className="form-ok">Enviada a {state.sent} {state.sent === 1 ? "pessoa" : "pessoas"}.</p>
      )}
      <div className="row">
        <button type="submit" className="btn btn-primary" disabled={isPending}>
          {isPending ? "A enviar…" : "Enviar mensagem"}
        </button>
      </div>
      <p className="field-hint">
        Aparece nas notificações da app e chega ao telemóvel de quem tem as notificações ativas. Os convidados só a recebem no telemóvel.
      </p>
    </form>
  );
}
