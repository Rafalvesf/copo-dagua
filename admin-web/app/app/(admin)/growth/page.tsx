import { requireAdmin } from "@/lib/dal";
import { createAdminClient } from "@/lib/supabase/admin";
import { Alert, Badge, Card, PageHeader, Stat, type Tone } from "@/components/ui";
import {
  PLANS,
  PLAN_START_DEFAULT,
  TARGET_BOOKINGS_PER_MONTH,
  VENUE_SHARE_TARGET,
  planAt,
  type PlanRow,
} from "@/lib/growth-plan";

// Plano de crescimento (2026-11-02): as três métricas que decidem o
// cenário — parceiros angariados, quantos ativam e quantos são espaços e
// caterings — comparadas mês a mês com os cenários simulados.
// Lê com a chave de serviço, só depois de requireAdmin().

const LIMIT = 20000;
const COUNTS = ["pending_review", "changes_required", "published", "suspended"];
const LIVE = ["awaiting_deposit", "confirmed", "completed", "payment_overdue", "disputed"];
const VENUE_SLUGS = ["venue", "catering"];
const ACTIVE_WINDOW_DAYS = 90;

type Partner = {
  id: string;
  created_at: string;
  status: string;
  partner_profile_categories: { partner_categories: { slug: string } | { slug: string }[] | null }[] | null;
};
type Booking = { partner_id: string; created_at: string; status: string };

const one = <T,>(v: T | T[] | null): T | null => (Array.isArray(v) ? (v[0] ?? null) : v);

function parseStart(v: string | undefined): { y: number; m: number } {
  const s = /^\d{4}-\d{2}$/.test(v ?? "") ? v! : PLAN_START_DEFAULT;
  const [y, m] = s.split("-").map(Number);
  return { y, m: m - 1 };
}

const monthEnd = (y: number, m: number) => new Date(Date.UTC(y, m + 1, 1));
const monthLabel = (d: Date) => d.toLocaleDateString("pt-PT", { month: "short", year: "numeric", timeZone: "UTC" });
const pct = (v: number) => `${Math.round(v)}%`;
const n1 = (v: number) => (v >= 10 ? Math.round(v).toLocaleString("pt-PT") : v.toLocaleString("pt-PT", { maximumFractionDigits: 1 }));

/** Em que cenário está um valor: compara com os três para o mesmo mês. */
function scenarioFor(month: number, idx: 0 | 1 | 2, value: number): { label: string; tone: Tone } {
  const c = planAt(PLANS.conservador, month)[idx];
  const b = planAt(PLANS.base, month)[idx];
  const o = planAt(PLANS.otimista, month)[idx];
  if (value >= o) return { label: "Otimista", tone: "success" };
  if (value >= b) return { label: "Base", tone: "success" };
  if (value >= c) return { label: "Conservador", tone: "warning" };
  return { label: "Abaixo", tone: "danger" };
}

function Vs({ real, plan }: { real: number; plan: number }) {
  const ok = real >= plan * 0.9;
  return (
    <>
      <strong>{n1(real)}</strong> <span className="muted">/ {n1(plan)}</span>{" "}
      <span style={{ color: ok ? "var(--success-fg)" : "var(--warning-fg)" }}>{ok ? "▲" : "▼"}</span>
    </>
  );
}

export default async function GrowthPage({ searchParams }: { searchParams: Promise<{ inicio?: string }> }) {
  await requireAdmin();
  const { inicio } = await searchParams;
  const start = parseStart(inicio);
  const startStr = `${start.y}-${String(start.m + 1).padStart(2, "0")}`;
  const db = createAdminClient();

  const [{ data: partnersRaw }, { data: bookingsRaw }] = await Promise.all([
    db
      .from("partner_profiles")
      .select("id, created_at, status, partner_profile_categories(partner_categories(slug))")
      .limit(LIMIT),
    db.from("bookings").select("partner_id, created_at, status").in("status", LIVE).limit(LIMIT),
  ]);
  const partners = ((partnersRaw ?? []) as unknown as Partner[]).filter((p) => COUNTS.includes(p.status));
  const bookings = (bookingsRaw ?? []) as Booking[];
  const venueIds = new Set(
    partners
      .filter((p) =>
        (p.partner_profile_categories ?? []).some((l) => VENUE_SLUGS.includes(one(l.partner_categories)?.slug ?? "")),
      )
      .map((p) => p.id),
  );

  const now = new Date();
  const monthsSince = (now.getUTCFullYear() - start.y) * 12 + (now.getUTCMonth() - start.m) + 1;
  const current = Math.max(1, Math.min(monthsSince, PLANS.base.length));
  const notStarted = monthsSince < 1;

  type Row = { month: number; label: string; signups: number; active: number; bookings: number; venueShare: number };
  const rows: Row[] = [];
  for (let k = 1; k <= current; k++) {
    const y = start.y + Math.floor((start.m + k - 1) / 12);
    const m = (start.m + k - 1) % 12;
    const from = new Date(Date.UTC(y, m, 1));
    const to = monthEnd(y, m);
    const end = to < now ? to : now;
    const windowFrom = new Date(end.getTime() - ACTIVE_WINDOW_DAYS * 86400000);
    const signups = partners.filter((p) => new Date(p.created_at) < end).length;
    const activeIds = new Set(
      bookings
        .filter((b) => {
          const t = new Date(b.created_at);
          return t >= windowFrom && t < end;
        })
        .map((b) => b.partner_id),
    );
    const monthBookings = bookings.filter((b) => {
      const t = new Date(b.created_at);
      return t >= from && t < to;
    }).length;
    const venueActive = [...activeIds].filter((id) => venueIds.has(id)).length;
    rows.push({
      month: k,
      label: monthLabel(from),
      signups,
      active: activeIds.size,
      bookings: monthBookings,
      venueShare: activeIds.size ? (venueActive / activeIds.size) * 100 : 0,
    });
  }
  const last = rows[rows.length - 1];
  const [pS, pA, pB]: PlanRow = planAt(PLANS.base, current);
  const activation = last.signups ? (last.active / last.signups) * 100 : 0;
  const planActivation = pS ? (pA / pS) * 100 : 0;
  const scen = scenarioFor(current, 2, last.bookings);

  return (
    <div className="stack">
      <PageHeader
        title="Plano de crescimento"
        subtitle={`Real vs cenário base (4% do mercado ≈ ${TARGET_BOOKINGS_PER_MONTH} reservas/mês, ~mês 42). Mês 1 = ${monthLabel(new Date(Date.UTC(start.y, start.m, 1)))}.`}
        badge={<Badge tone={scen.tone}>Cenário: {scen.label}</Badge>}
        actions={
          <form method="get" className="row" style={{ gap: 8 }}>
            <label className="muted" htmlFor="inicio">Início</label>
            <input id="inicio" name="inicio" type="month" defaultValue={startStr} className="input" />
            <button className="btn btn-secondary" type="submit">Aplicar</button>
          </form>
        }
      />

      {notStarted && <Alert tone="info">O plano ainda não começou — a mostrar o mês 1.</Alert>}

      <div className="grid grid-4">
        <Stat
          label={`Parceiros angariados · mês ${current}`}
          value={<Vs real={last.signups} plan={pS} />}
          hint="inscritos (sem rascunhos nem recusados) / plano base"
          tone={last.signups < pS * 0.9 ? "warning" : undefined}
        />
        <Stat
          label="Parceiros ativos"
          value={<Vs real={last.active} plan={pA} />}
          hint={`com reserva nos últimos ${ACTIVE_WINDOW_DAYS} dias`}
          tone={last.active < pA * 0.9 ? "warning" : undefined}
        />
        <Stat
          label="Ativação"
          value={<Vs real={activation} plan={planActivation} />}
          hint="ativos ÷ angariados (base ≈ 50% maduro)"
          tone={activation < planActivation * 0.9 ? "warning" : undefined}
        />
        <Stat
          label="Espaços e catering"
          value={<Vs real={last.venueShare} plan={VENUE_SHARE_TARGET} />}
          hint="% dos parceiros ativos · referência 25%"
          tone={last.venueShare < VENUE_SHARE_TARGET * 0.9 ? "warning" : undefined}
        />
      </div>

      <Card
        title="Reservas por mês"
        subtitle={`Mês ${current}: ${n1(last.bookings)} reais · plano base ${n1(pB)} · conservador ${n1(planAt(PLANS.conservador, current)[2])} · otimista ${n1(planAt(PLANS.otimista, current)[2])}`}
      >
        <div className="growth-bar" aria-label={`${pct((last.bookings / TARGET_BOOKINGS_PER_MONTH) * 100)} da meta de 4%`}>
          <div style={{ width: `${Math.min(100, (last.bookings / TARGET_BOOKINGS_PER_MONTH) * 100)}%` }} />
        </div>
        <p className="muted" style={{ marginTop: 6 }}>
          {pct((last.bookings / TARGET_BOOKINGS_PER_MONTH) * 100)} do caminho até aos 4% do mercado ({TARGET_BOOKINGS_PER_MONTH} reservas/mês).
        </p>
      </Card>

      <Card flush title="Mês a mês" subtitle="Real / plano base · ▲ dentro de 90% do plano ou acima">
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Mês</th>
                <th className="num">Angariados</th>
                <th className="num">Ativos</th>
                <th className="num">Ativação</th>
                <th className="num">Reservas</th>
                <th className="num">Espaços/catering</th>
                <th>Cenário</th>
              </tr>
            </thead>
            <tbody>
              {[...rows].reverse().map((r) => {
                const [s, a, b] = planAt(PLANS.base, r.month);
                const sc = scenarioFor(r.month, 2, r.bookings);
                return (
                  <tr key={r.month}>
                    <td>
                      <strong>{r.month}</strong> <span className="muted">{r.label}</span>
                    </td>
                    <td className="num"><Vs real={r.signups} plan={s} /></td>
                    <td className="num"><Vs real={r.active} plan={a} /></td>
                    <td className="num">{r.signups ? pct((r.active / r.signups) * 100) : "—"}</td>
                    <td className="num"><Vs real={r.bookings} plan={b} /></td>
                    <td className="num">{r.active ? pct(r.venueShare) : "—"}</td>
                    <td><Badge tone={sc.tone}>{sc.label}</Badge></td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Card>

      <Card title="Como ler">
        <ul className="muted" style={{ margin: 0, paddingLeft: 18, lineHeight: 1.6 }}>
          <li><strong>Angariados:</strong> perfis de parceiro criados até ao fim do mês (sem rascunhos nem recusados).</li>
          <li><strong>Ativos:</strong> parceiros com pelo menos uma reserva ativa criada nos últimos {ACTIVE_WINDOW_DAYS} dias.</li>
          <li><strong>Reservas:</strong> reservas criadas no mês (a aguardar sinal, confirmadas, concluídas, em atraso ou em disputa).</li>
          <li><strong>Cenário:</strong> pelas reservas do mês — otimista leva aos 4% em ~2 anos, base em ~3,5, conservador em ~7.</li>
          <li>Contas de teste contam: muda o <em>Início</em> para o mês do lançamento real.</li>
        </ul>
      </Card>
    </div>
  );
}
