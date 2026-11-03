import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createAdminClient } from "@/lib/supabase/admin";
import { Alert, Card, PageHeader, Stat } from "@/components/ui";

// Funil de conversão (2026-11-03, migração 154). Passos da app
// (`funnel_events`, id anónimo por dispositivo) + o que já está nas tabelas
// (contas, eventos, pedidos, sinais pagos, bilhetes). Lê com a chave de
// serviço, só depois de requireAdmin().

const PERIODS = [
  { key: "7", label: "7 dias" },
  { key: "30", label: "30 dias" },
  { key: "90", label: "90 dias" },
];
const LIMIT = 50000;

type Ev = { anon_id: string; step: string; platform: string | null };

function pct(n: number, d: number): string {
  if (!d) return "—";
  const v = (n / d) * 100;
  return `${v >= 10 ? Math.round(v) : v.toFixed(1).replace(".", ",")}%`;
}

export default async function FunnelPage({ searchParams }: { searchParams: Promise<{ p?: string }> }) {
  await requireAdmin();
  const { p } = await searchParams;
  const days = PERIODS.some((x) => x.key === p) ? Number(p) : 30;
  const now = new Date();
  now.setUTCHours(0, 0, 0, 0);
  const since = new Date(now.getTime() - days * 86400000).toISOString();
  const db = createAdminClient();

  const count = async (table: string, build: (q: ReturnType<typeof db.from>) => unknown) => {
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { count: c, error } = await (build(db.from(table)) as any);
      return error ? null : (c as number | null) ?? 0;
    } catch {
      return null;
    }
  };

  const [evRes, accounts, organizers, partners, events, quotes, deposits, tickets] = await Promise.all([
    db.from("funnel_events").select("anon_id, step, platform").gte("created_at", since).limit(LIMIT),
    count("profiles", (q) => q.select("id", { count: "exact", head: true }).gte("created_at", since)),
    count("profiles", (q) => q.select("id", { count: "exact", head: true }).gte("created_at", since).eq("role", "couple")),
    count("partner_profiles", (q) => q.select("id", { count: "exact", head: true }).gte("created_at", since)),
    count("weddings", (q) => q.select("id", { count: "exact", head: true }).gte("created_at", since)),
    count("quote_requests", (q) => q.select("id", { count: "exact", head: true }).gte("created_at", since)),
    count("payments", (q) => q.select("id", { count: "exact", head: true }).eq("type", "deposit").eq("status", "paid").gte("paid_at", since)),
    count("event_tickets", (q) => q.select("id", { count: "exact", head: true }).eq("status", "paid").gte("paid_at", since)),
  ]);
  const missing = !!evRes.error;
  const evs = (evRes.data ?? []) as Ev[];
  const uniq = (step: string) => new Set(evs.filter((e) => e.step === step).map((e) => e.anon_id)).size;
  const platforms = ["web", "ios", "android"].map((pl) => ({
    pl,
    n: new Set(evs.filter((e) => e.step === "app_open" && e.platform === pl).map((e) => e.anon_id)).size,
  }));

  const steps: { label: string; hint: string; value: number | null }[] = [
    { label: "Abriram a app", hint: "dispositivos únicos", value: missing ? null : uniq("app_open") },
    { label: "Viram o ecrã inicial", hint: "sem sessão", value: missing ? null : uniq("welcome_view") },
    { label: "Começaram o registo", hint: "abriram o formulário", value: missing ? null : uniq("signup_start") },
    { label: "Criaram conta", hint: `${organizers ?? "—"} organizadores · ${partners ?? "—"} parceiros`, value: accounts },
    { label: "Criaram um evento", hint: "eventos novos", value: events },
    { label: "Viram parceiros", hint: "dispositivos que abriram um perfil", value: missing ? null : uniq("partner_view") },
    { label: "Pediram orçamento", hint: "pedidos enviados", value: quotes },
    { label: "Pagaram o sinal", hint: "reservas com sinal pago", value: deposits },
  ];
  const first = steps.find((s) => s.value != null && s.value > 0)?.value ?? 0;
  const max = Math.max(1, ...steps.map((s) => s.value ?? 0));

  return (
    <div className="stack">
      <PageHeader
        title="Funil"
        subtitle={`De quem abre a app a quem paga — últimos ${days} dias.`}
        actions={
          <div className="row" style={{ gap: 6 }}>
            {PERIODS.map((x) => (
              <Link key={x.key} href={`/funnel?p=${x.key}`} className={`btn ${String(days) === x.key ? "btn-primary" : "btn-secondary"}`}>
                {x.label}
              </Link>
            ))}
          </div>
        }
      />
      {missing && <Alert tone="warning">Ainda não há registos da app: corre a migração 154. Os passos das tabelas já aparecem.</Alert>}

      <div className="grid grid-4">
        {platforms.map((x) => (
          <Stat key={x.pl} label={`Abriram · ${x.pl === "web" ? "Web" : x.pl === "ios" ? "iPhone" : "Android"}`} value={missing ? "—" : x.n} />
        ))}
        <Stat label="Bilhetes pagos" value={tickets ?? "—"} hint="eventos com entrada paga" />
      </div>

      <Card title="Passo a passo" subtitle="% do passo anterior · % do primeiro passo">
        <div className="funnel">
          {steps.map((s, i) => {
            const prev = steps.slice(0, i).reverse().find((x) => x.value != null)?.value ?? null;
            return (
              <div key={s.label} className="funnel-row">
                <div className="funnel-label">
                  <strong>{s.label}</strong>
                  <span className="muted">{s.hint}</span>
                </div>
                <div className="funnel-bar" aria-hidden>
                  <div style={{ width: `${s.value == null ? 0 : Math.max(2, (s.value / max) * 100)}%` }} />
                </div>
                <div className="funnel-num">
                  <strong>{s.value ?? "—"}</strong>
                  <span className="muted">
                    {i === 0 || s.value == null ? "" : `${pct(s.value, prev ?? 0)} · ${pct(s.value, first)}`}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </Card>

      <Card title="Como ler">
        <ul className="muted" style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
          <li>Os 3 primeiros passos e «Viram parceiros» contam dispositivos únicos (id anónimo, sem dados pessoais).</li>
          <li>Os restantes vêm das tabelas: contas, eventos, pedidos e sinais pagos no período.</li>
          <li>Onde a percentagem cai mais é onde vale a pena mexer primeiro.</li>
        </ul>
      </Card>
    </div>
  );
}
