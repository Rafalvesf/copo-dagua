"use client";

import { useMemo, useState } from "react";

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
};

type Col = {
  key: string;
  label: string;
  get: (r: Signup) => string;
  width?: number;
};

const date = (s: string) => new Date(s).toLocaleDateString("pt-PT");

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
  ],
};

const DEFAULT_SUBJECT = {
  organizador: "A À Nossa! está quase a chegar",
  parceiro: "{negocio} na À Nossa!",
};

const DEFAULT_BODY = {
  organizador:
    "Olá {primeiro_nome},\n\nObrigado pelo pré-registo na À Nossa!. Vimos que gostavas de organizar {eventos}, na zona de {cidade}.\n\nAvisamos-te assim que a app estiver nas lojas.\n\nAté já,\nRafael",
  parceiro:
    "Olá {primeiro_nome},\n\nObrigado por registares {negocio} na À Nossa!. Vimos que trabalhas em {categorias}, na zona de {cidade}.\n\nOs primeiros 100 parceiros ficam Parceiros Fundadores, com 3 meses sem taxa de serviço. Avisamos-te assim que a app estiver nas lojas.\n\nAté já,\nRafael",
};

const FIELDS = {
  organizador: [
    "nome",
    "primeiro_nome",
    "email",
    "eventos",
    "cidade",
    "pais",
    "idade",
  ],
  parceiro: [
    "nome",
    "primeiro_nome",
    "email",
    "negocio",
    "categorias",
    "cidade",
    "pais",
  ],
};

// Como cada escolha do site se lê numa frase («trabalhas em restauração e
// fotografia», «organizar casamentos e jantares»). «Outro» fica de fora.
const PHRASE: Record<string, string> = {
  restaurante: "restauração",
  bar: "bares",
  espaço: "espaços para eventos",
  catering: "catering",
  fotografia: "fotografia",
  "música e dj": "música e DJ",
  "flores e decoração": "flores e decoração",
  bolos: "bolos e pastelaria",
  convites: "convites",
  animação: "animação",
  aluguer: "aluguer de material",
  transporte: "transportes",
  casamento: "casamentos",
  aniversário: "aniversários",
  batizado: "batizados",
  festa: "festas",
  despedida: "despedidas",
  "evento de empresa": "eventos de empresa",
  jantar: "jantares",
};

export function phrases(items: string[] | null) {
  return (items ?? [])
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s && s !== "outro")
    .map((s) => PHRASE[s] ?? s);
}

export function joinPt(items: string[]) {
  return items.length <= 1
    ? items.join("")
    : `${items.slice(0, -1).join(", ")} e ${items.at(-1)}`;
}

function fill(tpl: string, r: Signup) {
  const list = joinPt(phrases(r.interests));
  const vals: Record<string, string> = {
    nome: r.name ?? "",
    primeiro_nome: (r.name ?? "").split(/\s+/)[0] ?? "",
    email: r.email,
    eventos: list || "eventos",
    categorias: list || "eventos",
    negocio: r.business_name || "o teu negócio",
    cidade: r.city || r.country || "Portugal",
    pais: r.country ?? "",
    idade: r.age_range ?? "",
  };
  return tpl
    .replace(/\{(\w+)\}/g, (m, k) => (k in vals ? vals[k] : m))
    .replace(/Olá ,/g, "Olá,");
}

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
  const p = joinPt(phrases(r.interests));
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
}: {
  kind: "organizador" | "parceiro";
  rows: Signup[];
}) {
  const cols = COLS[kind];
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<{ key: string; dir: 1 | -1 }>({
    key: "date",
    dir: -1,
  });
  const [sel, setSel] = useState<Set<string>>(new Set());
  const [subject, setSubject] = useState(DEFAULT_SUBJECT[kind]);
  const [body, setBody] = useState(DEFAULT_BODY[kind]);
  const [open, setOpen] = useState<string | null>(null);
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
      <section
        className="card"
        style={{
          padding: 16,
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div className="field">
          <span className="field-label">Assunto</span>
          <input
            className="input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div className="field">
          <span className="field-label">Mensagem</span>
          <textarea
            className="textarea"
            rows={7}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <span className="field-hint">
            Campos que mudam para cada pessoa:{" "}
            {FIELDS[kind].map((f) => `{${f}}`).join(" ")}. Vê a mensagem de cada
            um na tabela («Ver») O Excel sai com as colunas{" "}
            {kind === "parceiro"
              ? "Nome, Tipo de Negócio, Nome do Negócio e Contacto"
              : "Nome, Tipo de Evento, Cidade e Contacto"}
            .
          </span>
        </div>
      </section>

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
                <th style={{ width: 120 }}>Mensagem</th>
              </tr>
            </thead>
            <tbody>
              {view.map((r) => {
                const isOpen = open === r.email;
                const s = fill(subject, r);
                const b = fill(body, r);
                return [
                  <tr
                    key={r.email}
                    style={{
                      background: sel.has(r.email)
                        ? "var(--accent-bg, rgba(79,107,74,.08))"
                        : undefined,
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
                      const v =
                        c.key === "date" ? date(r.created_at) : c.get(r);
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
                        onClick={() => setOpen(isOpen ? null : r.email)}
                      >
                        {isOpen ? "Fechar" : "Ver"}
                      </button>
                    </td>
                  </tr>,
                  isOpen && (
                    <tr key={`${r.email}-msg`}>
                      <td
                        colSpan={cols.length + 2}
                        style={{ background: "var(--surface-muted, #F7F6F2)" }}
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 8,
                            maxWidth: 640,
                            padding: "4px 0",
                          }}
                        >
                          <strong>{s}</strong>
                          <div
                            style={{ whiteSpace: "pre-wrap", lineHeight: 1.5 }}
                          >
                            {b}
                          </div>
                          <div className="toolbar">
                            <button
                              type="button"
                              className="btn btn-secondary btn-sm"
                              onClick={() =>
                                copy(`${s}\n\n${b}`, "Mensagem copiada.")
                              }
                            >
                              Copiar mensagem
                            </button>
                            <a
                              className="btn btn-primary btn-sm"
                              href={`mailto:${r.email}?subject=${encodeURIComponent(s)}&body=${encodeURIComponent(b)}`}
                            >
                              Abrir no email
                            </a>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ),
                ];
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
