// Email dos pré-registos (migração 196, pedido 2026-11-16).
//
// ESTE FICHEIRO EXISTE EM DOIS SÍTIOS, IGUAL:
//   supabase/functions/_shared/newsletter.ts  (envio, Edge Function)
//   admin-web/app/lib/newsletter-email.ts     (pré-visualização no admin)
// Quem mudar um muda o outro — o que o admin mostra é o que se envia.

export type NlKind = "organizador" | "parceiro";

export type NlRow = {
  email: string;
  name: string | null;
  interests: string[] | null;
  business_name: string | null;
  city: string | null;
  country: string | null;
  age_range: string | null;
};

export type NlContent = {
  subject: string;
  body: string;
  buttonLabel?: string | null;
  buttonUrl?: string | null;
};

export const NL_FIELDS: Record<NlKind, { key: string; label: string }[]> = {
  organizador: [
    { key: "primeiro_nome", label: "Primeiro nome" },
    { key: "nome", label: "Nome" },
    { key: "eventos", label: "Eventos" },
    { key: "cidade", label: "Cidade" },
    { key: "pais", label: "País" },
    { key: "idade", label: "Idade" },
  ],
  parceiro: [
    { key: "primeiro_nome", label: "Primeiro nome" },
    { key: "nome", label: "Nome" },
    { key: "negocio", label: "Negócio" },
    { key: "categorias", label: "Categorias" },
    { key: "cidade", label: "Cidade" },
    { key: "pais", label: "País" },
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
  "música e dj": "música",
  "flores e decoração": "decoração floral",
  bolos: "pastelaria",
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

export function nlPhrases(items: string[] | null): string[] {
  return (items ?? [])
    .map((s) => s.trim().toLowerCase())
    .filter((s) => s && s !== "outro")
    .map((s) => PHRASE[s] ?? s);
}

export function nlJoin(items: string[]): string {
  return items.length <= 1
    ? items.join("")
    : `${items.slice(0, -1).join(", ")} e ${items[items.length - 1]}`;
}

export function nlFill(tpl: string, r: NlRow): string {
  const list = nlJoin(nlPhrases(r.interests));
  const vals: Record<string, string> = {
    nome: r.name ?? "",
    primeiro_nome: (r.name ?? "").trim().split(/\s+/)[0] ?? "",
    email: r.email,
    eventos: list || "eventos",
    categorias: list || "eventos",
    negocio: r.business_name || "o teu negócio",
    cidade: r.city || r.country || "Portugal",
    pais: r.country ?? "",
    idade: r.age_range ?? "",
  };
  return tpl
    .replace(/\{(\w+)\}/g, (m, k: string) => (k in vals ? vals[k] : m))
    .replace(/Olá ,/g, "Olá,");
}

const esc = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

// Texto → HTML: parágrafos por linha em branco, **negrito**, links.
function paragraphs(text: string): string {
  return text
    .split(/\n{2,}/)
    .map((p) => p.trim())
    .filter(Boolean)
    .map((p) => {
      const html = esc(p)
        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
        .replace(
          /(https?:\/\/[^\s<]+)/g,
          '<a href="$1" style="color:#171713">$1</a>',
        )
        .replace(/\n/g, "<br>");
      return `<p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#171713">${html}</p>`;
    })
    .join("");
}

export const NL_LOGO =
  "https://rafalvesf.github.io/copo-dagua/site/assets/estrela_feliz.png";

export function nlRender(
  c: NlContent,
  r: NlRow,
  unsubUrl: string,
): { subject: string; html: string; text: string } {
  const subject = nlFill(c.subject, r).trim();
  const body = nlFill(c.body, r).trim();
  const label = (c.buttonLabel ?? "").trim();
  const url = (c.buttonUrl ?? "").trim();
  const button =
    label && /^https?:\/\//.test(url)
      ? `<p style="margin:8px 0 24px"><a href="${esc(url)}" style="display:inline-block;background:#171713;color:#ffffff;text-decoration:none;font-weight:700;font-size:15px;padding:14px 26px;border-radius:26px">${esc(label)}</a></p>`
      : "";
  const html = `<!doctype html><html lang="pt"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(subject)}</title></head>
<body style="margin:0;padding:0;background:#F2F0EB">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F2F0EB"><tr><td align="center" style="padding:24px 12px">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background:#ffffff;border-radius:22px">
<tr><td style="padding:28px 28px 8px;font-family:Arial,Helvetica,sans-serif">
<table role="presentation" cellpadding="0" cellspacing="0"><tr>
<td style="vertical-align:middle"><img src="${NL_LOGO}" width="36" height="36" alt="" style="display:block"></td>
<td style="vertical-align:middle;padding-left:10px;font-size:20px;font-weight:700;color:#171713">À Nossa!</td>
</tr></table>
</td></tr>
<tr><td style="padding:16px 28px 8px;font-family:Arial,Helvetica,sans-serif">${paragraphs(body)}${button}</td></tr>
</table>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px"><tr><td style="padding:16px 28px;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.5;color:#57534E;text-align:center">
Recebes este email porque fizeste o pré-registo na À Nossa!.<br><a href="${esc(unsubUrl)}" style="color:#57534E">Deixar de receber</a>
</td></tr></table>
</td></tr></table>
</body></html>`;
  const text = `${body}${label && url ? `\n\n${label}: ${url}` : ""}\n\n—\nRecebes este email porque fizeste o pré-registo na À Nossa!.\nDeixar de receber: ${unsubUrl}`;
  return { subject, html, text };
}
