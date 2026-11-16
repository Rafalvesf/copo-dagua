"use client";

import { useMemo, useState } from "react";
import { nlJoin, nlPhrases } from "@/lib/newsletter-email";
import { EmailComposer, type Design } from "./EmailComposer";

export type Signup = {
  email: string;
  kind: string;
  name: string | null;
  interests: string[] | null;
  business_name: string | null;
  city: string | null;
  country: string | null;
  age_range: string | null;
  created_at: string;
  last_sent_at?: string | null;
  unsubscribed_at?: string | null;
  sent_count?: number | null;
};

type Col = {
  key: string;
  label: string;
  get: (r: Signup) => string;
  width?: number;
};

const date = (s: string) => new Date(s).toLocaleDateString("pt-PT");

function sentLabel(r: Signup) {
  if (r.unsubscribed_at) return "Saiu da lista";
  if (!r.last_sent_at) return "—";
  return `${date(r.last_sent_at)}${(r.sent_count ?? 0) > 1 ? ` (${r.sent_count}×)` : ""}`;
}

const COLS: Record<"organizador" | "parceiro", Col[]> = {
  organizador: [
    { key: "name", label: "Nome", get: (r) => r.name ?? "", width: 160 },
    { key: "email", label: "Email", get: (r) => r.email, width: 220 },
    { key: "age", label: "Idade", get: (r) => r.age_range ?? "", width: 80 },
    {
      key: "interests",
      label: "Eventos",
      get: (r) => (r.interests ?? []).join(", "),
      width: 240,
    },
    { key: "city", label: "Cidade", get: (r) => r.city ?? "", width: 120 },
    { key: "country", label: "País", get: (r) => r.country ?? "", width: 100 },
    { key: "date", label: "Data", get: (r) => r.created_at, width: 90 },
    { key: "sent", label: "Enviado", get: sentLabel, width: 110 },
  ],
  parceiro: [
    { key: "name", label: "Nome", get: (r) => r.name ?? "", width: 160 },
    { key: "email", label: "Email", get: (r) => r.email, width: 220 },
    {
      key: "business",
      label: "Negócio",
      get: (r) => r.business_name ?? "",
      width: 160,
    },
    {
      key: "interests",
      label: "Categorias",
      get: (r) => (r.interests ?? []).join(", "),
      width: 220,
    },
    { key: "city", label: "Cidade", get: (r) => r.city ?? "", width: 120 },
    { key: "country", label: "País", get: (r) => r.country ?? "", width: 100 },
    { key: "date", label: "Data", get: (r) => r.created_at, width: 90 },
    { key: "sent", label: "Enviado", get: sentLabel, width: 110 },
  ],
};

function csvCell(v: string) {
  return /[";\n\r]/.test(v) ? `"${v.replace(/"/g, '""')}"` : v;
}

// Exportação (pedido 2026-11-16): as mesmas 4 colunas para os dois tipos,
// para servir de base a emails personalizados.
export const EXPORT_HEAD = [
  "Nome",
  "Tipo de Negócio",
  "Nome do Negócio",
  "Contacto",
];
const ORG_HEAD = ["Nome", "Tipo de Evento", "Cidade", "Contacto"];

function exportRow(kind: "organizador" | "parceiro", r: Signup) {
  const p = nlJoin(nlPhrases(r.interests));
  const types = p ? p[0].toUpperCase() + p.slice(1) : "";
  return kind === "parceiro"
    ? [r.name ?? "", types, r.business_name ?? "", r.email]
    : [r.name ?? "", types, r.city ?? "", r.email];
}

export function downloadCsv(kind: "organizador" | "parceiro", rows: Signup[]) {
  const head = kind === "parceiro" ? EXPORT_HEAD : ORG_HEAD;
  const lines = rows.map((r) => exportRow(kind, r).map(csvCell).join(";"));
  // BOM + «;» para o Excel em português abrir com acentos e colunas certas.
  const blob = new Blob(["\ufeff" + [head.join(";"), ...lines].join("\r\n")], {
    type: "text/csv;charset=utf-8",
  });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob);
  a.download = `pre-registos-${kind === "parceiro" ? "parceiros" : "organizadores"}-${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

export function SignupsSheet({
  kind,
  rows,
  designs,
  ready,
}: {
  kind: "organizador" | "parceiro";
  rows: Signup[];
  designs: Design[];
  ready: boolean;
}) {
  const cols = COLS[kind];
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<{ key: string; dir: 1 | -1 }>({
    key: "date",
    dir: -1,
  });
  const [sel, setSel] = useState<Set<string>>(new Set());
  const [previewEmail, setPreviewEmail] = useState<string | null>(null);
  const [note, setNote] = useState("");

  const view = useMemo(() => {
    const t = q.trim().toLowerCase();
    const col = cols.find((c) => c.key === sort.key) ?? cols[0];
    return rows
      .filter((r) => !t || cols.some((c) => c.get(r).toLowerCase().includes(t)))
      .sort((a, b) => col.get(a).localeCompare(col.get(b), "pt") * sort.dir);
  }, [rows, q, sort, cols]);

  const target = sel.size ? view.filter((r) => sel.has(r.email)) : view;
  const allOn = view.length > 0 && view.every((r) => sel.has(r.email));

  const flash = (s: string) => {
    setNote(s);
    setTimeout(() => setNote(""), 2500);
  };

  async function copy(text: string, msg: string) {
    try {
      await navigator.clipboard.writeText(text);
      flash(msg);
    } catch {
      flash("Não foi possível copiar.");
    }
  }

  function download() {
    downloadCsv(kind, target);
  }

  const toggle = (email: string) =>
    setSel((s) => {
      const n = new Set(s);
      if (n.has(email)) n.delete(email);
      else n.add(email);
      return n;
    });

  const cell: React.CSSProperties = {
    borderRight: "1px solid var(--border)",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <EmailComposer
        kind={kind}
        rows={rows}
        selected={[...sel]}
        previewEmail={previewEmail}
        onPreviewEmail={setPreviewEmail}
        designs={designs}
        ready={ready}
      />

      <section className="card" style={{ padding: 0 }}>
        <div
          className="toolbar"
          style={{ padding: 12, borderBottom: "1px solid var(--border)" }}
        >
          <input
            className="input"
            style={{ maxWidth: 260 }}
            placeholder="Procurar…"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <span className="field-hint">
            {sel.size
              ? `${sel.size} selecionados`
              : `${view.length} ${view.length === 1 ? "linha" : "linhas"}`}
          </span>
          <span style={{ flex: 1 }} />
          {note && <span className="field-hint">{note}</span>}
          <button
            type="button"
            className="btn btn-secondary btn-sm"
            disabled={!target.length}
            onClick={() =>
              copy(
                target.map((r) => r.email).join(", "),
                `${target.length} emails copiados.`,
              )
            }
          >
            Copiar emails{sel.size ? ` (${sel.size})` : ""}
          </button>
          <button
            type="button"
            className="btn btn-primary btn-sm"
            disabled={!target.length}
            onClick={download}
          >
            Descarregar Excel{sel.size ? ` (${sel.size})` : ""}
          </button>
        </div>
        <div
          className="table-wrap"
          style={{ maxHeight: "65vh", overflow: "auto" }}
        >
          <table
            className="table"
            style={{
              tableLayout: "fixed",
              minWidth:
                40 + 120 + cols.reduce((s, c) => s + (c.width ?? 120), 0),
            }}
          >
            <thead
              style={{
                position: "sticky",
                top: 0,
                zIndex: 1,
                background: "var(--surface)",
              }}
            >
              <tr>
                <th style={{ width: 40, ...cell }}>
                  <input
                    type="checkbox"
                    aria-label="Selecionar todos"
                    checked={allOn}
                    onChange={() =>
                      setSel(
                        allOn ? new Set() : new Set(view.map((r) => r.email)),
                      )
                    }
                  />
                </th>
                {cols.map((c) => (
                  <th
                    key={c.key}
                    style={{
                      width: c.width,
                      cursor: "pointer",
                      userSelect: "none",
                      ...cell,
                    }}
                    onClick={() =>
                      setSort((s) => ({
                        key: c.key,
                        dir: s.key === c.key ? (s.dir === 1 ? -1 : 1) : 1,
                      }))
                    }
                  >
                    {c.label}
                    {sort.key === c.key ? (sort.dir === 1 ? " ▲" : " ▼") : ""}
                  </th>
                ))}
                <th style={{ width: 120 }}>Email</th>
              </tr>
            </thead>
            <tbody>
              {view.map((r) => (
                <tr
                  key={r.email}
                  style={{
                    background: sel.has(r.email)
                      ? "var(--accent-bg, rgba(79,107,74,.08))"
                      : undefined,
                    opacity: r.unsubscribed_at ? 0.55 : 1,
                  }}
                >
                  <td style={cell}>
                    <input
                      type="checkbox"
                      aria-label={`Selecionar ${r.email}`}
                      checked={sel.has(r.email)}
                      onChange={() => toggle(r.email)}
                    />
                  </td>
                  {cols.map((c) => {
                    const v = c.key === "date" ? date(r.created_at) : c.get(r);
                    return (
                      <td key={c.key} style={cell} title={v}>
                        {v}
                      </td>
                    );
                  })}
                  <td>
                    <button
                      type="button"
                      className="btn btn-ghost btn-sm"
                      onClick={() => {
                        setPreviewEmail(r.email);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                    >
                      Ver email
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
