"use client";

import { useMemo, useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import {
  NL_FIELDS,
  nlRender,
  type NlBlock,
  type NlKind,
} from "@/lib/newsletter-email";
import {
  deleteNewsletterDesign,
  saveNewsletterDesign,
  sendNewsletter,
} from "./actions";
import type { Signup } from "./SignupsSheet";

export type Design = {
  id: string;
  name: string;
  subject: string;
  blocks: NlBlock[];
};

const DEFAULTS: Record<NlKind, Omit<Design, "id">> = {
  organizador: {
    name: "Boas-vindas",
    subject: "A À Nossa! está quase a chegar",
    blocks: [
      { type: "title", text: "Olá {primeiro_nome}!" },
      {
        type: "text",
        text: "Obrigado pelo pré-registo na À Nossa!. Vimos que gostavas de organizar {eventos}, na zona de {cidade}.\n\nAvisamos-te assim que a app estiver nas lojas.",
      },
      { type: "text", text: "Até já,\nRafael" },
    ],
  },
  parceiro: {
    name: "Boas-vindas",
    subject: "{negocio} na À Nossa!",
    blocks: [
      { type: "title", text: "Olá {primeiro_nome}!" },
      {
        type: "text",
        text: "Obrigado por registares {negocio} na À Nossa!. Vimos que trabalhas em {categorias}, na zona de {cidade}.\n\nOs primeiros 100 parceiros ficam **Parceiros Fundadores**. Avisamos-te assim que a app estiver nas lojas.",
      },
      { type: "text", text: "Até já,\nRafael" },
    ],
  },
};

const NEW_BLOCK: Record<NlBlock["type"], NlBlock> = {
  title: { type: "title", text: "" },
  text: { type: "text", text: "" },
  image: { type: "image", url: "", alt: "", link: "" },
  button: { type: "button", label: "", url: "" },
  divider: { type: "divider" },
};

const BLOCK_NAME: Record<NlBlock["type"], string> = {
  title: "Título",
  text: "Texto",
  image: "Imagem",
  button: "Botão",
  divider: "Separador",
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

type Focus = {
  block: number;
  key: string;
  el: HTMLInputElement | HTMLTextAreaElement;
} | null;

/** Editor do email por blocos (pedido 2026-11-16): título, texto, imagem,
 *  botão e separador; campos por pessoa; vários modelos guardados;
 *  pré-visualização tal como chega; envio pelo Resend. */
export function EmailComposer({
  kind,
  rows,
  selected,
  previewEmail,
  onPreviewEmail,
  designs,
  ready,
}: {
  kind: NlKind;
  rows: Signup[];
  selected: string[];
  previewEmail: string | null;
  onPreviewEmail: (email: string) => void;
  designs: Design[];
  ready: boolean;
}) {
  const router = useRouter();
  const first = designs[0];
  const [designId, setDesignId] = useState<string | null>(first?.id ?? null);
  const [name, setName] = useState(first?.name ?? DEFAULTS[kind].name);
  const [subject, setSubject] = useState(
    first?.subject ?? DEFAULTS[kind].subject,
  );
  const [blocks, setBlocks] = useState<NlBlock[]>(
    first?.blocks ?? DEFAULTS[kind].blocks,
  );
  const [confirm, setConfirm] = useState<"send" | "delete" | null>(null);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [pending, start] = useTransition();
  const [uploading, setUploading] = useState<number | null>(null);
  const focus = useRef<Focus>(null);
  const subjectRef = useRef<HTMLInputElement>(null);

  const person = useMemo(
    () =>
      rows.find((r) => r.email === previewEmail) ??
      rows[0] ?? { ...SAMPLE, kind },
    [rows, previewEmail, kind],
  );
  const preview = useMemo(
    () => nlRender({ subject, blocks }, person, "#"),
    [subject, blocks, person],
  );

  const active = rows.filter((r) => !r.unsubscribed_at);
  const sel = selected.filter((e) => active.some((r) => r.email === e));
  const unsent = active.filter((r) => !r.last_sent_at);
  const count = selected.length ? sel.length : unsent.length;
  const willSend = Math.min(count, 100);

  function load(id: string) {
    if (id === "") {
      setDesignId(null);
      setName("Novo email");
      setSubject("");
      setBlocks([
        { type: "title", text: "Olá {primeiro_nome}!" },
        { type: "text", text: "" },
      ]);
      return;
    }
    const d = designs.find((x) => x.id === id);
    if (!d) return;
    setDesignId(d.id);
    setName(d.name);
    setSubject(d.subject);
    setBlocks(d.blocks);
  }

  const update = (i: number, patch: Partial<NlBlock>) =>
    setBlocks((bs) =>
      bs.map((b, j) => (j === i ? ({ ...b, ...patch } as NlBlock) : b)),
    );
  const move = (i: number, d: -1 | 1) =>
    setBlocks((bs) => {
      const j = i + d;
      if (j < 0 || j >= bs.length) return bs;
      const n = [...bs];
      [n[i], n[j]] = [n[j], n[i]];
      return n;
    });
  const remove = (i: number) => setBlocks((bs) => bs.filter((_, j) => j !== i));
  const duplicate = (i: number) =>
    setBlocks((bs) => [
      ...bs.slice(0, i + 1),
      { ...bs[i] },
      ...bs.slice(i + 1),
    ]);
  const add = (t: NlBlock["type"]) =>
    setBlocks((bs) => [...bs, { ...NEW_BLOCK[t] }]);

  // Põe {campo} no sítio do cursor do último campo de texto usado.
  function insert(field: string) {
    const f = focus.current;
    const token = `{${field}}`;
    const el = f?.el ?? subjectRef.current;
    if (!el) return;
    const a = el.selectionStart ?? el.value.length;
    const b = el.selectionEnd ?? el.value.length;
    const next = el.value.slice(0, a) + token + el.value.slice(b);
    if (!f || f.block < 0) setSubject(next);
    else update(f.block, { [f.key]: next } as Partial<NlBlock>);
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(a + token.length, a + token.length);
    });
  }

  function bold() {
    const f = focus.current;
    if (!f || f.block < 0 || f.key !== "text") return;
    const el = f.el;
    const a = el.selectionStart ?? 0;
    const b = el.selectionEnd ?? 0;
    const inner = el.value.slice(a, b) || "texto";
    update(f.block, {
      text: el.value.slice(0, a) + `**${inner}**` + el.value.slice(b),
    });
    requestAnimationFrame(() => {
      el.focus();
      el.setSelectionRange(a + 2, a + 2 + inner.length);
    });
  }

  async function upload(i: number, file: File) {
    setUploading(i);
    setMsg(null);
    try {
      const ext = (file.name.split(".").pop() || "png")
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "");
      const path = `${crypto.randomUUID()}.${ext}`;
      const supabase = createClient();
      const { error } = await supabase.storage
        .from("newsletter-images")
        .upload(path, file, { contentType: file.type });
      if (error) throw error;
      const { data } = supabase.storage
        .from("newsletter-images")
        .getPublicUrl(path);
      update(i, { url: data.publicUrl });
    } catch {
      setMsg({
        ok: false,
        text: ready
          ? "Não foi possível carregar a imagem."
          : "Para carregar imagens falta aplicar a migração 196.",
      });
    } finally {
      setUploading(null);
    }
  }

  const run = (
    fn: () => Promise<{
      ok: boolean;
      message?: string;
      error?: string;
      id?: string;
    }>,
  ) =>
    start(async () => {
      setMsg(null);
      const r = await fn();
      setMsg({ ok: r.ok, text: (r.ok ? r.message : r.error) ?? "" });
      setConfirm(null);
      if (r.ok && r.id) setDesignId(r.id);
      if (r.ok) router.refresh();
    });

  const onFocus =
    (block: number, key: string) =>
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      focus.current = { block, key, el: e.currentTarget };
    };

  const small: React.CSSProperties = {
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: 1,
    color: "var(--ink-muted)",
  };
  const iconBtn = "btn btn-ghost btn-sm";

  return (
    <section
      className="card"
      style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14 }}
    >
      {/* Modelos */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          flexWrap: "wrap",
        }}
      >
        <span style={small}>MODELO</span>
        <select
          className="select"
          style={{ width: "auto", minWidth: 180 }}
          value={designId ?? ""}
          onChange={(e) => load(e.target.value)}
        >
          {designs.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name}
            </option>
          ))}
          <option value="">+ Novo email</option>
        </select>
        <input
          className="input"
          style={{ width: 200 }}
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-label="Nome do modelo"
        />
        <span style={{ flex: 1 }} />
        {confirm === "delete" ? (
          <>
            <span style={{ fontSize: 13 }}>Apagar «{name}»?</span>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              disabled={pending}
              onClick={() =>
                designId && run(() => deleteNewsletterDesign(designId))
              }
            >
              Apagar
            </button>
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              onClick={() => setConfirm(null)}
            >
              Cancelar
            </button>
          </>
        ) : (
          <>
            {designId && (
              <button
                type="button"
                className="btn btn-ghost btn-sm"
                disabled={pending}
                onClick={() => setConfirm("delete")}
              >
                Apagar
              </button>
            )}
            {designId && (
              <button
                type="button"
                className="btn btn-secondary btn-sm"
                disabled={pending || !ready}
                onClick={() =>
                  run(() =>
                    saveNewsletterDesign({
                      kind,
                      name: `${name} (cópia)`,
                      subject,
                      blocks,
                    }),
                  )
                }
              >
                Guardar como novo
              </button>
            )}
            <button
              type="button"
              className="btn btn-primary btn-sm"
              disabled={pending || !ready}
              onClick={() =>
                run(() =>
                  saveNewsletterDesign({
                    id: designId,
                    kind,
                    name,
                    subject,
                    blocks,
                  }),
                )
              }
            >
              Guardar
            </button>
          </>
        )}
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: 18,
        }}
      >
        {/* Editor */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            minWidth: 0,
          }}
        >
          <div className="field">
            <span className="field-label">Assunto</span>
            <input
              ref={subjectRef}
              className="input"
              value={subject}
              onFocus={(e) =>
                (focus.current = {
                  block: -1,
                  key: "subject",
                  el: e.currentTarget,
                })
              }
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div
            style={{
              position: "sticky",
              top: 0,
              zIndex: 2,
              background: "var(--surface)",
              padding: "6px 0",
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              alignItems: "center",
            }}
          >
            <span style={small}>INSERIR</span>
            {NL_FIELDS[kind].map((f) => (
              <button
                key={f.key}
                type="button"
                className="btn btn-secondary btn-sm"
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => insert(f.key)}
              >
                + {f.label}
              </button>
            ))}
            <button
              type="button"
              className="btn btn-ghost btn-sm"
              style={{ fontWeight: 800 }}
              onMouseDown={(e) => e.preventDefault()}
              onClick={bold}
            >
              Negrito
            </button>
          </div>

          {blocks.map((b, i) => (
            <div
              key={i}
              style={{
                border: "1px solid var(--border)",
                borderRadius: 12,
                padding: 10,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 4 }}>
                <span style={small}>{BLOCK_NAME[b.type].toUpperCase()}</span>
                <span style={{ flex: 1 }} />
                <button
                  type="button"
                  className={iconBtn}
                  aria-label="Subir"
                  disabled={i === 0}
                  onClick={() => move(i, -1)}
                >
                  ↑
                </button>
                <button
                  type="button"
                  className={iconBtn}
                  aria-label="Descer"
                  disabled={i === blocks.length - 1}
                  onClick={() => move(i, 1)}
                >
                  ↓
                </button>
                <button
                  type="button"
                  className={iconBtn}
                  onClick={() => duplicate(i)}
                >
                  Duplicar
                </button>
                <button
                  type="button"
                  className={iconBtn}
                  aria-label="Apagar bloco"
                  onClick={() => remove(i)}
                >
                  ✕
                </button>
              </div>
              {b.type === "title" && (
                <input
                  className="input"
                  style={{ fontWeight: 700, fontSize: 16 }}
                  placeholder="Título"
                  value={b.text}
                  onFocus={onFocus(i, "text")}
                  onChange={(e) => update(i, { text: e.target.value })}
                />
              )}
              {b.type === "text" && (
                <textarea
                  className="textarea"
                  rows={Math.min(
                    12,
                    Math.max(3, b.text.split("\n").length + 1),
                  )}
                  placeholder="Escreve aqui. Uma linha em branco separa parágrafos."
                  value={b.text}
                  onFocus={onFocus(i, "text")}
                  onChange={(e) => update(i, { text: e.target.value })}
                />
              )}
              {b.type === "image" && (
                <>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                      flexWrap: "wrap",
                    }}
                  >
                    <label
                      className="btn btn-secondary btn-sm"
                      style={{ cursor: "pointer" }}
                    >
                      {uploading === i
                        ? "A carregar…"
                        : b.url
                          ? "Trocar imagem"
                          : "Carregar imagem"}
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/gif,image/webp"
                        hidden
                        onChange={(e) => {
                          const f = e.target.files?.[0];
                          if (f) upload(i, f);
                          e.target.value = "";
                        }}
                      />
                    </label>
                    <input
                      className="input"
                      style={{ flex: 1, minWidth: 160 }}
                      placeholder="ou cola o link da imagem (https://…)"
                      value={b.url}
                      onChange={(e) => update(i, { url: e.target.value })}
                    />
                  </div>
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: 8,
                    }}
                  >
                    <input
                      className="input"
                      placeholder="Descrição (para quem não vê imagens)"
                      value={b.alt ?? ""}
                      onChange={(e) => update(i, { alt: e.target.value })}
                    />
                    <input
                      className="input"
                      placeholder="Link ao tocar (opcional)"
                      value={b.link ?? ""}
                      onChange={(e) => update(i, { link: e.target.value })}
                    />
                  </div>
                </>
              )}
              {b.type === "button" && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 2fr",
                    gap: 8,
                  }}
                >
                  <input
                    className="input"
                    placeholder="Texto do botão"
                    value={b.label}
                    onFocus={onFocus(i, "label")}
                    onChange={(e) => update(i, { label: e.target.value })}
                  />
                  <input
                    className="input"
                    placeholder="Link (https://…)"
                    value={b.url}
                    onChange={(e) => update(i, { url: e.target.value })}
                  />
                </div>
              )}
              {b.type === "divider" && (
                <hr
                  style={{
                    border: 0,
                    borderTop: "1px solid var(--border)",
                    margin: "4px 0",
                  }}
                />
              )}
            </div>
          ))}

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 6,
              alignItems: "center",
            }}
          >
            <span style={small}>ADICIONAR</span>
            {(Object.keys(NEW_BLOCK) as NlBlock["type"][]).map((t) => (
              <button
                key={t}
                type="button"
                className="btn btn-secondary btn-sm"
                onClick={() => add(t)}
              >
                + {BLOCK_NAME[t]}
              </button>
            ))}
          </div>
        </div>

        {/* Pré-visualização */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            minWidth: 0,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={small}>VER COMO</span>
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
            <strong style={{ color: "var(--ink)" }}>
              {preview.subject || "—"}
            </strong>
          </div>
          <iframe
            title="Pré-visualização do email"
            srcDoc={preview.html}
            sandbox=""
            style={{
              width: "100%",
              height: 620,
              border: "1px solid var(--border)",
              borderRadius: 12,
              background: "#F2F0EB",
            }}
          />
        </div>
      </div>

      {/* Envio */}
      <div
        className="toolbar"
        style={{ borderTop: "1px solid var(--border)", paddingTop: 12 }}
      >
        {!ready ? (
          <span className="field-hint">
            Para guardar e enviar daqui falta aplicar a migração 196.
          </span>
        ) : confirm === "send" ? (
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
                    kind,
                    subject,
                    blocks,
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
              onClick={() => setConfirm(null)}
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
                    kind,
                    subject,
                    blocks,
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
              onClick={() => setConfirm("send")}
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
