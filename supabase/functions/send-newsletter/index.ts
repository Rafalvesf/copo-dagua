import { createClient } from "jsr:@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";
import { type NlKind, type NlRow, nlRender } from "../_shared/newsletter.ts";

// Envio de emails aos pré-registos pelo admin (migração 196, 2026-11-16).
// Só admins. Usa o Resend (segredo RESEND_API_KEY; remetente RESEND_FROM,
// ex.: «À Nossa! <ola@anossa.pt>»; sem domínio usa onboarding@resend.dev,
// que o Resend só deixa enviar para o email da própria conta).
//
// Body: { kind, subject, body, button_label?, button_url?,
//         emails?: string[]  (só estes; sem isto: quem ainda não recebeu),
//         test?: boolean     (um email só para o admin, com os dados de
//                             `preview_email` ou do primeiro da lista) }
// Resposta: { sent, failed, remaining }
const MAX = 100; // limite diário do plano grátis do Resend
const SITE = Deno.env.get("SITE_URL") ?? "https://rafalvesf.github.io/copo-dagua/site";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  const authHeader = req.headers.get("Authorization");
  if (!authHeader) return json({ error: "forbidden" }, 403);

  const supabase = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_ANON_KEY")!, {
    global: { headers: { Authorization: authHeader } },
  });
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return json({ error: "forbidden" }, 403);
  const { data: isAdmin } = await supabase.rpc("is_admin");
  if (isAdmin !== true) return json({ error: "forbidden" }, 403);

  const key = Deno.env.get("RESEND_API_KEY");
  if (!key) return json({ error: "no_key" }, 503);
  const from = Deno.env.get("RESEND_FROM") ?? "À Nossa! <onboarding@resend.dev>";
  const replyTo = Deno.env.get("RESEND_REPLY_TO") ?? undefined;

  let b: Record<string, unknown>;
  try {
    b = await req.json();
  } catch {
    return json({ error: "validation_error" }, 400);
  }
  const kind: NlKind = b.kind === "parceiro" ? "parceiro" : "organizador";
  const str = (v: unknown, n: number) => (typeof v === "string" ? v.slice(0, n) : "");
  const content = {
    subject: str(b.subject, 200),
    body: str(b.body, 10000),
    buttonLabel: str(b.button_label, 60) || null,
    buttonUrl: str(b.button_url, 500) || null,
  };
  if (!content.subject.trim() || !content.body.trim()) return json({ error: "empty" }, 400);
  const emails = Array.isArray(b.emails) ? (b.emails as unknown[]).filter((e) => typeof e === "string").slice(0, 2000) as string[] : null;
  const test = b.test === true;

  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const cols = "email, name, interests, business_name, city, country, age_range, unsub_token";

  type Row = NlRow & { unsub_token: string };
  let rows: Row[] = [];
  if (test) {
    let q = admin.from("newsletter_signups").select(cols).eq("kind", kind).limit(1);
    if (typeof b.preview_email === "string") q = q.eq("email", b.preview_email);
    const { data } = await q;
    const sample: Row = (data?.[0] as Row | undefined) ?? {
      email: user.email ?? "", name: "Rafael", interests: [], business_name: null,
      city: "Lisboa", country: "Portugal", age_range: null, unsub_token: "00000000-0000-0000-0000-000000000000",
    };
    if (!user.email) return json({ error: "no_admin_email" }, 400);
    rows = [{ ...sample }];
    const msg = nlRender({ ...content, subject: `[Teste] ${content.subject}` }, sample, `${SITE}/pre-registo/?sair=${sample.unsub_token}`);
    const r = await send(key, [{ from, to: [user.email], subject: msg.subject, html: msg.html, text: msg.text, reply_to: replyTo }]);
    await admin.from("newsletter_sends").insert({
      kind, subject: content.subject, test: true, recipients: 1, sent: r.ok ? 1 : 0, failed: r.ok ? 0 : 1,
      error: r.ok ? null : r.error, created_by: user.id,
    });
    return r.ok ? json({ sent: 1, failed: 0, remaining: 0, to: user.email }) : json({ error: "resend_error", message: r.error }, 502);
  }

  let q = admin.from("newsletter_signups").select(cols).eq("kind", kind).is("unsubscribed_at", null)
    .order("created_at", { ascending: true });
  q = emails ? q.in("email", emails) : q.is("last_sent_at", null);
  const { data, error } = await q.limit(5000);
  if (error) return json({ error: "db_error", message: error.message }, 500);
  rows = (data ?? []) as Row[];
  const batch = rows.slice(0, MAX);
  if (batch.length === 0) return json({ sent: 0, failed: 0, remaining: 0 });

  const payload = batch.map((r) => {
    const unsub = `${SITE}/pre-registo/?sair=${r.unsub_token}`;
    const m = nlRender(content, r, unsub);
    return {
      from, to: [r.email], subject: m.subject, html: m.html, text: m.text, reply_to: replyTo,
      headers: { "List-Unsubscribe": `<${unsub}>` },
    };
  });
  const res = await send(key, payload);
  const now = new Date().toISOString();
  if (res.ok) {
    for (const r of batch) {
      const { data: cur } = await admin.from("newsletter_signups").select("sent_count").eq("email", r.email).maybeSingle();
      await admin.from("newsletter_signups")
        .update({ last_sent_at: now, sent_count: ((cur?.sent_count as number | undefined) ?? 0) + 1 })
        .eq("email", r.email);
    }
  }
  await admin.from("newsletter_sends").insert({
    kind, subject: content.subject, test: false, recipients: batch.length,
    sent: res.ok ? batch.length : 0, failed: res.ok ? 0 : batch.length, error: res.ok ? null : res.error, created_by: user.id,
  });
  if (!res.ok) return json({ error: "resend_error", message: res.error }, 502);
  return json({ sent: batch.length, failed: 0, remaining: rows.length - batch.length });
});

async function send(key: string, items: unknown[]): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const r = await fetch(items.length === 1 ? "https://api.resend.com/emails" : "https://api.resend.com/emails/batch", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify(items.length === 1 ? items[0] : items),
    });
    if (r.ok) return { ok: true };
    const t = await r.text();
    let m = t;
    try {
      m = JSON.parse(t).message ?? t;
    } catch {
      // texto simples
    }
    return { ok: false, error: m.slice(0, 300) };
  } catch (e) {
    return { ok: false, error: String(e).slice(0, 300) };
  }
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
