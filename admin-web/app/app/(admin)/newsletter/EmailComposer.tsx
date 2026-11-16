"use client";

import { useMemo, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { NL_FIELDS, nlRender, type NlKind } from "@/lib/newsletter-email";
import { saveNewsletterTemplate, sendNewsletter } from "./actions";
import type { Signup } from "./SignupsSheet";

export type Template = {
  subject: string;
  body: string;
  button_label: string | null;
  button_url: string | null;
};

export const DEFAULT_TEMPLATE: Record<NlKind, Template> = {
  organizador: {
    subject: "A À Nossa! está quase a chegar",
    body: "Olá {primeiro_nome},\n\nObrigado pelo pré-registo na À Nossa!. Vimos que gostavas de organizar {eventos}, na zona de {cidade}.\n\nAvisamos-te assim que a app estiver nas lojas.\n\nAté já,\nRafael",
    button_label: null,
    button_url: null,
  },
  parceiro: {
    subject: "{negocio} na À Nossa!",
    body: "Olá {primeiro_nome},\n\nObrigado por registares {negocio} na À Nossa!. Vimos que trabalhas em {categorias}, na zona de {cidade}.\n\nOs primeiros 100 parceiros ficam **Parceiros Fundadores**, com 3 meses sem taxa de serviço. Avisamos-te assim que a app estiver nas lojas.\n\nAté já,\nRafael",
    button_label: null,
    button_url: null,
  },
};

const SAMPLE: Signup = {
  email: "exemplo@email.pt",
  kind: "organizador",
  name: "Ana Silva",
  interests: ["Casamento", "Restaurante"],
  business_name: "Luz Estúdio",
  city: "Porto",
  country: "Portugal",
  age_range: "25-34",
  created_at: new Date().toISOString(),
};

/** Criador do email: assunto, mensagem com campos por pessoa, botão
 *  opcional, pré-visualização tal como chega e envio pelo Resend. */
export function EmailComposer({
  kind,
  rows,
  selected,
  previewEmail,
  onPreviewEmail,
  template,
  ready,
}: {
  kind: NlKind;
  rows: Signup[];
  selected: string[];
  previewEmail: string | null;
  onPreviewEmail: (email: string) => void;
  template: Template | null;
  ready: boolean;
}) {
  const router = useRouter();
  const t = template ?? DEFAULT_TEMPLATE[kind];
  const [subject, setSubject] = useState(t.subject);
  const [body, setBody] = useState(t.body);
  const [buttonLabel, setButtonLabel] = useState(t.button_label ?? "");
  const [buttonUrl, setButtonUrl] = useState(t.button_url ?? "");
  const [confirm, setConfirm] = useState(false);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, start] = useTransition();
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const [lastFocus, setLastFocus] = useState<"subject" | "body">("body");

  const person = useMemo(
    () =>
      rows.find((r) => r.email === previewEmail) ??
      rows[0] ?? { ...SAMPLE, kind },
    [rows, previewEmail, kind],
  );
  const preview = useMemo(
    () => nlRender({ subject, body, buttonLabel, buttonUrl }, person, "#"),
    [subject, body, buttonLabel, buttonUrl, person],
  );

  const active = rows.filter((r) => !r.unsubscribed_at);
  const sel = selected.filter((e) => active.some((r) => r.email === e));
  const unsent = active.filter((r) => !r.last_sent_at);
  const count = selected.length ? sel.length : unsent.length;
  const willSend = Math.min(count, 100);

  function insert(field: string) {
    const token = `{${field}}`;
    if (lastFocus === "subject") {
      const el = subjectRef.current;
      const a = el?.selectionStart ?? subject.length;
      const b = el?.selectionEnd ?? subject.length;
      setSubject(subject.slice(0, a) + token + subject.slice(b));
      requestAnimationFrame(() => {
        el?.focus();
        el?.setSelectionRange(a + token.length, a + token.length);
      });
      return;
    }
    const el = bodyRef.current;
    const a = el?.selectionStart ?? body.length;
    const b = el?.selectionEnd ?? body.length;
    setBody(body.slice(0, a) + token + body.slice(b));
    requestAnimationFrame(() => {
      el?.focus();
      el?.setSelectionRange(a + token.length, a + token.length);
    });
  }

  function bold() {
    const el = bodyRef.current;
    if (!el) return;
    const a = el.selectionStart;
    const b = el.selectionEnd;
    const inner = body.slice(a, b) || "texto";
    setBody(body.slice(0, a) + `**${inner}**` + body.slice(b));
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(a + 2, a + 2 + inner.length);
    });
  }

  const payload = { kind, subject, body, buttonLabel, buttonUrl };
  const run = (
    fn: () => Promise<{ ok: boolean; message?: string; error?: string }>,
  ) =>
    start(async () => {
      setMsg(null);
      const r = await fn();
      setMsg({ ok: r.ok, text: (r.ok ? r.message : r.error) ?? "" });
      setConfirm(false);
      if (r.ok) router.refresh();
    });

  const label: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
    color: "var(--ink-muted)",
  };

  return (
    <section
      className="card"
      style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap",
        }}
      >
        <strong style={{ fontSize: 16 }}>
          Email para {kind === "parceiro" ? "parceiros" : "organizadores"}
        </strong>
        <span style={{ flex: 1 }} />
        <button
          type="button"
          className="btn btn-ghost btn-sm"
          disabled={pending}
          onClick={() => {
            const d = DEFAULT_TEMPLATE[kind];
            setSubject(d.subject);
            setBody(d.body);
            setButtonLabel("");
            setButtonUrl("");
          }}
        >
          Repor texto inicial
        </button>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          disabled={pending || !ready}
          onClick={() => run(() => saveNewsletterTemplate(payload))}
        >
          Guardar modelo
        </button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: 18,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            minWidth: 0,
          }}
        >
          <div className="field">
            <span className="field-label">Assunto</span>
            <input
              ref={subjectRef}
              className="input"
              value={subject}
              onFocus={() => setLastFocus("subject")}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="field">
            <span className="field-label">Mensagem</span>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {NL_FIELDS[kind].map((f) => (
                <button
                  key={f.key}
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={() => insert(f.key)}
                >
                  + {f.label}
                </button>
              ))}
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                onClick={bold}
                style={{ fontWeight: 800 }}
              >
                Negrito
              </button>
            </div>
            <textarea
              ref={bodyRef}
              className="textarea"
              rows={12}
              value={body}
              onFocus={() => setLastFocus("body")}
              onChange={(e) => setBody(e.target.value)}
            />
            <span className="field-hint">
              Os botões «+» põem no sítio do cursor um campo que muda para cada
              pessoa. Uma linha em branco separa parágrafos. Links começados por
              https:// ficam clicáveis.
            </span>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 10 }}
          >
            <div className="field">
              <span className="field-label">Botão (opcional)</span>
              <input
                className="input"
                placeholder="Ex.: Ver o site"
                value={buttonLabel}
                onChange={(e) => setButtonLabel(e.target.value)}
              />
            </div>
            <div className="field">
              <span className="field-label">Link do botão</span>
              <input
                className="input"
                placeholder="https://…"
                value={buttonUrl}
                onChange={(e) => setButtonUrl(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            minWidth: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={label}>PRÉ-VISUALIZAR COMO</span>
            <select
              className="select"
              style={{ flex: 1, minWidth: 0 }}
              value={person.email}
              onChange={(e) => onPreviewEmail(e.target.value)}
              disabled={!rows.length}
            >
              {rows.length ? (
                rows.map((r) => (
                  <option key={r.email} value={r.email}>
                    {r.name ? `${r.name} · ${r.email}` : r.email}
                  </option>
                ))
              ) : (
                <option value={person.email}>Exemplo</option>
              )}
            </select>
          </div>
          <div style={{ fontSize: 13, color: "var(--ink-muted)" }}>
            Assunto:{" "}
            <strong style={{ color: "var(--ink)" }}>{preview.subject}</strong>
          </div>
          <iframe
            title="Pré-visualização do email"
            srcDoc={preview.html}
            sandbox=""
            style={{
              width: "100%",
              height: 460,
              border: "1px solid var(--border)",
              borderRadius: 12,
              background: "#F2F0EB",
            }}
          />
        </div>
      </div>

      <div
        className="toolbar"
        style={{ borderTop: "1px solid var(--border)", paddingTop: 12 }}
      >
        {!ready ? (
          <span className="field-hint">
            Para enviar daqui falta aplicar a migração 196.
          </span>
        ) : confirm ? (
          <>
            <span style={{ fontSize: 14 }}>
              Enviar a <strong>{willSend}</strong>{" "}
              {willSend === 1 ? "pessoa" : "pessoas"}
              {count > 100 ? ` (das ${count}; o resto no envio seguinte)` : ""}?
              Não dá para desfazer.
            </span>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              disabled={pending}
              onClick={() =>
                run(() =>
                  sendNewsletter({
                    ...payload,
                    ...(selected.length ? { emails: sel } : {}),
                  }),
                )
              }
            >
              {pending ? "A enviar…" : "Confirmar envio"}
            </button>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              disabled={pending}
              onClick={() => setConfirm(false)}
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            <button
              type="button"
              className="btn btn-secondary btn-sm"
              disabled={pending}
              onClick={() =>
                run(() =>
                  sendNewsletter({
                    ...payload,
                    test: true,
                    previewEmail: rows.length ? person.email : undefined,
                  }),
                )
              }
            >
              {pending ? "A enviar…" : "Enviar teste para mim"}
            </button>
            <button
              type="button"
              className="btn btn-primary btn-sm"
              disabled={pending || count === 0}
              onClick={() => setConfirm(true)}
            >
              {selected.length
                ? `Enviar aos ${sel.length} selecionados`
                : `Enviar a quem ainda não recebeu (${unsent.length})`}
            </button>
          </>
        )}
        {msg && (
          <span
            style={{
              fontSize: 13,
              color: msg.ok
                ? "var(--success-fg, #3F7A4F)"
                : "var(--danger-fg, #C8553D)",
            }}
          >
            {msg.text}
          </span>
        )}
      </div>
    </section>
  );
}
