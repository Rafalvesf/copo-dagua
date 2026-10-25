import Link from "next/link";
import type { ReactNode } from "react";
import { requireAdmin } from "@/lib/dal";
import { createAdminClient } from "@/lib/supabase/admin";
import { EVENT_TYPES } from "@/lib/event-types";
import { Card, PageHeader } from "@/components/ui";
import { MetricCard, MiniStat } from "@/components/analytics/MetricCard";
import {
  RANGES,
  type RangeKey,
  avg,
  duration,
  eur,
  hoursBetween,
  inRange,
  median,
  metric,
  monthKey,
  netPartnerAmount,
  pct,
  ranges,
  ratio,
  sumBy,
  topN,
} from "@/lib/analytics";

// Analytics ao estilo Shopify (2026-10-21): um separador por área, cada
// métrica com o total do período, a variação face ao período anterior e a
// linha dos dois. Lê com a chave de serviço (há tabelas que o RLS não
// mostra ao admin, ex.: mensagens), só depois de requireAdmin().

const LIMIT = 10000;
type Row = Record<string, unknown>;
const s = (r: Row, k: string) => (r[k] as string | null | undefined) ?? null;
const n = (r: Row, k: string) => Number(r[k] ?? 0);

const TABS = [
  { key: "dinheiro", label: "Dinheiro" },
  { key: "reservas", label: "Pedidos e reservas" },
  { key: "organizadores", label: "Organizadores e eventos" },
  { key: "parceiros", label: "Parceiros" },
  { key: "qualidade", label: "Qualidade e risco" },
  { key: "uso", label: "Uso da app" },
] as const;
type TabKey = (typeof TABS)[number]["key"];

export default async function AnalyticsPage({ searchParams }: PageProps<"/analytics">) {
  await requireAdmin();
  const params = await searchParams;
  const range: RangeKey = (["7", "30", "90", "365"] as const).includes(params.p as RangeKey) ? (params.p as RangeKey) : "30";
  const tab: TabKey = TABS.some((t) => t.key === params.tab) ? (params.tab as TabKey) : "dinheiro";

  const nowMs = new Date().getTime();
  const r = ranges(range, nowMs);
  const sinceIso = new Date(r.prevStart).toISOString();
  const href = (t: string, p: string) => `/analytics?tab=${t}&p=${p}`;

  const db = createAdminClient();
  const q = (table: string, cols: string) => db.from(table).select(cols).range(0, LIMIT - 1);
  const [
    profilesR, weddingsR, guestsR, quotesR, proposalsR, bookingsR, paymentsR, partnersR, partnerCatsR,
    reviewsR, disputesR, supportR, galleryR, offersR, settingsR, messagesR, groupMessagesR,
  ] = await Promise.all([
    q("profiles", "id, role, created_at, status"),
    q("weddings", "id, created_at, event_type, wedding_date, location, estimated_budget, estimated_guests"),
    q("guests", "wedding_id, rsvp_status, linked_profile_id, created_at"),
    q("quote_requests", "id, partner_id, created_at, status"),
    q("proposals", "id, partner_id, quote_request_id, created_at, status, price, deposit_refundable"),
    q("bookings", "id, partner_id, wedding_id, proposal_id, created_at, status, total_amount, cancelled_at"),
    q("payments", "id, booking_id, partner_id, type, amount, status, paid_at, refunded_amount, updated_at"),
    q("partner_profiles", "id, business_name, status, stripe_charges_enabled, featured, region, city, created_at, reviewed_at"),
    q("partner_profile_categories", "partner_id, partner_categories(label_pt)"),
    q("reviews", "partner_id, rating, created_at, status"),
    q("disputes", "status, reason, resolution, refund_amount, created_at"),
    q("support_tickets", "status, category, created_at, resolved_at"),
    q("wedding_gallery_photos", "status, created_at"),
    q("guest_offer_reservations", "amount, status, created_at"),
    db.from("platform_settings").select("platform_commission_percentage").eq("id", 1).maybeSingle(),
    db.from("messages").select("created_at").gte("created_at", sinceIso).range(0, LIMIT - 1),
    db.from("chat_group_messages").select("created_at").gte("created_at", sinceIso).range(0, LIMIT - 1),
  ]);
  const rows = (x: { data: unknown }) => ((x.data as Row[] | null) ?? []) as Row[];
  const profiles = rows(profilesR), weddings = rows(weddingsR), guests = rows(guestsR), quotes = rows(quotesR);
  const proposals = rows(proposalsR), bookings = rows(bookingsR), payments = rows(paymentsR), partners = rows(partnersR);
  const partnerCats = rows(partnerCatsR), reviews = rows(reviewsR), disputes = rows(disputesR), support = rows(supportR);
  const gallery = rows(galleryR), offers = rows(offersR), messages = rows(messagesR), groupMessages = rows(groupMessagesR);
  const commissionPct = Number((settingsR.data as Row | null)?.platform_commission_percentage ?? 0);

  const within = (iso: string | null) => inRange(iso, r);
  const labels: [string, string] = [r.buckets[0]?.label ?? "", r.buckets[r.buckets.length - 1]?.label ?? ""];
  const card = { labels, tips: r.tips, prevTips: r.prevTips, current: r.label, previous: r.prevLabel };
  const int = (v: number) => Math.round(v).toLocaleString("pt-PT");
  const money = (v: number) => eur(v, v < 1000);
  const percent = (v: number) => `${Math.round(v * 100)}%`;

  // Categorias de cada parceiro.
  const catsOf = new Map<string, string[]>();
  for (const pc of partnerCats) {
    const cat = pc.partner_categories as { label_pt?: string } | { label_pt?: string }[] | null;
    const label = (Array.isArray(cat) ? cat[0] : cat)?.label_pt;
    if (!label) continue;
    const id = s(pc, "partner_id")!;
    catsOf.set(id, [...(catsOf.get(id) ?? []), label]);
  }
  const primaryCat = (id: string | null) => (id ? catsOf.get(id)?.[0] ?? "Sem categoria" : "Sem categoria");
  const partnerName = new Map(partners.map((p) => [s(p, "id")!, s(p, "business_name") ?? "Parceiro"]));

  let content: ReactNode = null;

  if (tab === "dinheiro") {
    const net = (p: Row) => netPartnerAmount(n(p, "amount"), s(p, "status"), n(p, "refunded_amount"), commissionPct);
    const paid = payments.filter((p) => s(p, "paid_at") && (s(p, "status") === "paid" || s(p, "status") === "refunded" || n(p, "refunded_amount") > 0));
    const sales = metric(paid, (p) => s(p, "paid_at"), r, (p) => net(p) * (1 + commissionPct / 100));
    const revenue = metric(paid, (p) => s(p, "paid_at"), r, (p) => (net(p) * commissionPct) / 100);
    const toPartners = metric(paid, (p) => s(p, "paid_at"), r, net);
    const refunded = metric(payments.filter((p) => n(p, "refunded_amount") > 0 || s(p, "status") === "refunded"), (p) => s(p, "updated_at"), r, (p) =>
      n(p, "refunded_amount") || n(p, "amount") * (1 + commissionPct / 100),
    );
    const count = metric(paid, (p) => s(p, "paid_at"), r);
    const avgOrder = ratio(sales, count);
    const offersPaid = offers.filter((o) => s(o, "status") === "paid");
    const offersM = metric(offersPaid, (o) => s(o, "created_at"), r, (o) => n(o, "amount"));
    const paidIn = paid.filter((p) => within(s(p, "paid_at")));
    const byCat = sumBy(paidIn, (p) => primaryCat(s(p, "partner_id")), (p) => net(p) * (1 + commissionPct / 100));
    const byPartner = sumBy(paidIn, (p) => s(p, "partner_id"), (p) => net(p) * (1 + commissionPct / 100));
    const deposits = paidIn.filter((p) => s(p, "type") === "deposit");
    content = (
      <>
        <div className="grid grid-3">
          <MetricCard title="Vendas" hint="Pago pelos organizadores, já sem reembolsos (comissão incluída)" metric={sales} format={money} {...card} />
          <MetricCard title={`Receita À Nossa! (${commissionPct}%)`} hint="Comissão bruta, antes das taxas da Stripe" metric={revenue} format={money} {...card} />
          <MetricCard title="Valor médio por pagamento" metric={avgOrder} format={money} {...card} />
          <MetricCard title="Para os parceiros" metric={toPartners} format={money} {...card} />
          <MetricCard title="Reembolsado" metric={refunded} format={money} invert {...card} />
          <MetricCard title="Ofertas a convidados" hint="Alojamento, transporte… pagos pelos convidados" metric={offersM} format={money} {...card} />
        </div>
        <div className="grid grid-2">
          <Card title="Vendas por categoria" subtitle={r.label}>
            <HBars data={topN(byCat, 8)} format={(v) => eur(v)} empty="Sem vendas no período." />
          </Card>
          <Card title="Parceiros com mais vendas" subtitle={`${deposits.length} sinais · ${paidIn.length - deposits.length} restantes`} flush>
            {byPartner.size === 0 ? (
              <div className="empty">Sem vendas no período.</div>
            ) : (
              <div className="table-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Parceiro</th>
                      <th className="num">Vendas</th>
                      <th className="num">Pagamentos</th>
                    </tr>
                  </thead>
                  <tbody>
                    {topN(byPartner, 8).map((t) => (
                      <tr key={t.label}>
                        <td>
                          <Link href={`/partners/${t.label}`} className="cell-main">
                            {partnerName.get(t.label) ?? "Parceiro"}
                          </Link>
                        </td>
                        <td className="num">{eur(t.value)}</td>
                        <td className="num">{paidIn.filter((p) => s(p, "partner_id") === t.label).length}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
        </div>
      </>
    );
  }

  if (tab === "reservas") {
    const quotesM = metric(quotes, (x) => s(x, "created_at"), r);
    const proposalsM = metric(proposals, (x) => s(x, "created_at"), r);
    const bookingsM = metric(bookings, (x) => s(x, "created_at"), r);
    const conversion = ratio(bookingsM, quotesM);
    const quotesIn = quotes.filter((x) => within(s(x, "created_at")));
    const quoteIds = new Set(quotesIn.map((x) => s(x, "id")));
    const props = proposals.filter((p) => quoteIds.has(s(p, "quote_request_id")));
    const propIds = new Set(props.map((p) => s(p, "id")));
    const bks = bookings.filter((b) => propIds.has(s(b, "proposal_id")));
    const bkIds = new Set(bks.map((b) => s(b, "id")));
    const depositPaid = new Set(
      payments.filter((p) => s(p, "type") === "deposit" && (s(p, "status") === "paid" || s(p, "status") === "refunded")).map((p) => s(p, "booking_id")),
    );
    const funnel = [
      { label: "Pedidos de orçamento", value: quotesIn.length },
      { label: "Com proposta do parceiro", value: new Set(props.map((p) => s(p, "quote_request_id"))).size },
      { label: "Proposta aceite (reserva)", value: bks.length },
      { label: "Sinal pago", value: [...bkIds].filter((id) => depositPaid.has(id)).length },
      { label: "Concluída", value: bks.filter((b) => s(b, "status") === "completed").length },
    ];
    const quoteCreated = new Map(quotes.map((x) => [s(x, "id"), s(x, "created_at")]));
    const responseHours = props.map((p) => {
      const qc = quoteCreated.get(s(p, "quote_request_id"));
      return qc ? hoursBetween(qc, s(p, "created_at")!) : NaN;
    }).filter((h) => h >= 0);
    const propCreated = new Map(proposals.map((p) => [s(p, "id"), s(p, "created_at")]));
    const decisionHours = bks.map((b) => {
      const pc = propCreated.get(s(b, "proposal_id"));
      return pc ? hoursBetween(pc, s(b, "created_at")!) : NaN;
    }).filter((h) => h >= 0);
    const proposalsIn = proposals.filter((p) => within(s(p, "created_at")));
    const avgProposal = avg(proposalsIn.map((p) => n(p, "price")));
    const nonRefundable = proposalsIn.filter((p) => p.deposit_refundable === false).length;
    content = (
      <>
        <div className="grid grid-2">
          <MetricCard title="Pedidos de orçamento" metric={quotesM} format={int} {...card} />
          <MetricCard title="Reservas criadas" metric={bookingsM} format={int} {...card} />
          <MetricCard title="Propostas enviadas" metric={proposalsM} format={int} {...card} />
          <MetricCard title="Conversão pedido → reserva" hint="Reservas criadas ÷ pedidos de orçamento" metric={conversion} format={percent} {...card} />
        </div>
        <div className="grid grid-main-side">
          <Card title="Funil" subtitle={`Pedidos feitos em ${r.label} e o que lhes aconteceu`}>
            <Funnel stages={funnel} />
          </Card>
          <div className="stack">
            <MiniStat label="Resposta do parceiro" value={duration(median(responseHours))} hint="mediana, do pedido à proposta" />
            <MiniStat label="Decisão do organizador" value={duration(median(decisionHours))} hint="mediana, da proposta à aceitação" />
            <MiniStat label="Valor médio das propostas" value={avgProposal == null ? "—" : eur(avgProposal)} hint={`${proposalsIn.length} propostas`} />
            <MiniStat label="Sinal não reembolsável" value={pct(nonRefundable, proposalsIn.length)} hint={`${nonRefundable} de ${proposalsIn.length} propostas`} />
          </div>
        </div>
      </>
    );
  }

  if (tab === "organizadores") {
    const couples = profiles.filter((p) => s(p, "role") === "couple");
    const couplesM = metric(couples, (x) => s(x, "created_at"), r);
    const eventsM = metric(weddings, (x) => s(x, "created_at"), r);
    const guestsM = metric(guests, (x) => s(x, "created_at"), r);
    const guestAccountsM = metric(profiles.filter((p) => s(p, "role") === "guest"), (x) => s(x, "created_at"), r);
    const eventsByType = sumBy(weddings, (w) => EVENT_TYPES[s(w, "event_type") ?? "other"]?.label ?? "Outro");
    const nextMonths = (() => {
      const out: { key: string; label: string }[] = [];
      const d = new Date(nowMs);
      for (let i = 0; i < 12; i++) {
        const m = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + i, 1));
        out.push({ key: `${m.getUTCFullYear()}-${String(m.getUTCMonth() + 1).padStart(2, "0")}`, label: m.toLocaleDateString("pt-PT", { month: "short", timeZone: "UTC" }).replace(".", "") });
      }
      return out;
    })();
    const eventsByMonth = sumBy(weddings.filter((w) => s(w, "wedding_date")), (w) => monthKey(s(w, "wedding_date")!));
    const eventsByPlace = sumBy(weddings, (w) => (s(w, "location") ?? "").split(",")[0].trim() || null);
    const budgets = weddings.map((w) => n(w, "estimated_budget")).filter((v) => v > 0);
    const guestsPerEvent = [...sumBy(guests, (g) => s(g, "wedding_id")).values()];
    const confirmed = guests.filter((g) => s(g, "rsvp_status") === "confirmed").length;
    const declined = guests.filter((g) => s(g, "rsvp_status") === "declined").length;
    const withApp = guests.filter((g) => s(g, "linked_profile_id")).length;
    content = (
      <>
        <div className="grid grid-2">
          <MetricCard title="Novos organizadores" metric={couplesM} format={int} footer={`${couples.length} no total`} {...card} />
          <MetricCard title="Eventos criados" metric={eventsM} format={int} footer={`${weddings.length} no total`} {...card} />
          <MetricCard title="Convidados adicionados" metric={guestsM} format={int} footer={`${guests.length} nas listas`} {...card} />
          <MetricCard title="Contas de convidado" hint="Convidados que criaram conta na app" metric={guestAccountsM} format={int} {...card} />
        </div>
        <div className="grid grid-4">
          <MiniStat label="Orçamento estimado" value={median(budgets) == null ? "—" : eur(median(budgets)!)} hint="mediana por evento" />
          <MiniStat label="Convidados por evento" value={median(guestsPerEvent) == null ? "—" : String(Math.round(median(guestsPerEvent)!))} hint="mediana" />
          <MiniStat label="Respostas confirmadas" value={pct(confirmed, guests.length)} hint={`${confirmed} vão · ${declined} não vão`} />
          <MiniStat label="Convidados com a app" value={pct(withApp, guests.length)} hint={`${withApp} de ${guests.length}`} />
        </div>
        <div className="grid grid-3">
          <Card title="Eventos por tipo">
            <HBars data={topN(eventsByType, 10)} empty="Sem eventos." />
          </Card>
          <Card title="Eventos nos próximos 12 meses">
            <Bars data={nextMonths.map((m) => ({ label: m.label, value: eventsByMonth.get(m.key) ?? 0 }))} />
          </Card>
          <Card title="Onde são os eventos">
            <HBars data={topN(eventsByPlace, 8)} empty="Sem local definido." />
          </Card>
        </div>
      </>
    );
  }

  if (tab === "parceiros") {
    const newPartners = metric(partners, (x) => s(x, "created_at"), r);
    const approved = metric(partners.filter((p) => s(p, "status") === "published"), (x) => s(x, "reviewed_at"), r);
    const visibleReviews = reviews.filter((x) => s(x, "status") !== "removed");
    const reviewsM = metric(visibleReviews, (x) => s(x, "created_at"), r);
    const ratingSum = metric(visibleReviews, (x) => s(x, "created_at"), r, (x) => n(x, "rating"));
    const ratingAvgM = ratio(ratingSum, reviewsM);
    const quotesIn = quotes.filter((x) => within(s(x, "created_at")));
    const published = partners.filter((p) => s(p, "status") === "published");
    const pending = partners.filter((p) => s(p, "status") === "pending_review");
    const withStripe = partners.filter((p) => p.stripe_charges_enabled === true);
    const quotesByCat = sumBy(quotesIn, (x) => primaryCat(s(x, "partner_id")));
    const bookingsByCat = sumBy(bookings.filter((b) => within(s(b, "created_at"))), (b) => primaryCat(s(b, "partner_id")));
    const partnersByCat = sumBy(published, (p) => primaryCat(s(p, "id")));
    const partnersByRegion = sumBy(published, (p) => s(p, "region") ?? s(p, "city"));
    const ratingDist = [5, 4, 3, 2, 1].map((star) => ({ label: `${star} ★`, value: visibleReviews.filter((x) => n(x, "rating") === star).length }));
    const ratingAll = avg(visibleReviews.map((x) => n(x, "rating")));
    content = (
      <>
        <div className="grid grid-2">
          <MetricCard title="Novos parceiros" hint="Contas de parceiro criadas" metric={newPartners} format={int} footer={`${pending.length} à espera de aprovação`} {...card} />
          <MetricCard title="Parceiros aprovados" metric={approved} format={int} footer={`${published.length} publicados · ${pct(withStripe.length, partners.length)} com pagamentos ativos`} {...card} />
          <MetricCard title="Avaliações recebidas" metric={reviewsM} format={int} {...card} />
          <MetricCard title="Avaliação média" metric={ratingAvgM} format={(v) => (v ? `${v.toFixed(1)} ★` : "—")} footer={ratingAll == null ? undefined : `${ratingAll.toFixed(1)} ★ desde sempre`} {...card} />
        </div>
        <div className="grid grid-main-side">
          <Card title="Oferta vs procura por categoria" subtitle={r.label} flush>
            {partnersByCat.size === 0 && quotesByCat.size === 0 ? (
              <div className="empty">Sem dados.</div>
            ) : (
              <div className="table-wrap">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Categoria</th>
                      <th className="num">Parceiros</th>
                      <th className="num">Pedidos</th>
                      <th className="num">Reservas</th>
                      <th className="num">Pedidos por parceiro</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...new Set([...partnersByCat.keys(), ...quotesByCat.keys()])]
                      .sort((a, b) => (quotesByCat.get(b) ?? 0) - (quotesByCat.get(a) ?? 0))
                      .map((cat) => {
                        const np = partnersByCat.get(cat) ?? 0;
                        const nq = quotesByCat.get(cat) ?? 0;
                        return (
                          <tr key={cat}>
                            <td className="cell-main">{cat}</td>
                            <td className="num">{np}</td>
                            <td className="num">{nq}</td>
                            <td className="num">{bookingsByCat.get(cat) ?? 0}</td>
                            <td className="num" style={{ color: np === 0 && nq > 0 ? "var(--danger-fg)" : undefined, fontWeight: np === 0 && nq > 0 ? 600 : 400 }}>
                              {np ? (nq / np).toFixed(1) : nq > 0 ? "falta oferta" : "—"}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            )}
          </Card>
          <div className="stack">
            <Card title="Avaliações">
              <HBars data={ratingDist} empty="Sem avaliações." />
            </Card>
            <Card title="Parceiros por região">
              <HBars data={topN(partnersByRegion, 6)} empty="Sem região definida." />
            </Card>
          </div>
        </div>
      </>
    );
  }

  if (tab === "qualidade") {
    const cancelled = bookings.filter((b) => (s(b, "status") ?? "").startsWith("cancelled"));
    const cancelM = metric(cancelled, (b) => s(b, "cancelled_at") ?? s(b, "created_at"), r);
    const cancelPartnerM = metric(cancelled.filter((b) => s(b, "status") === "cancelled_by_partner"), (b) => s(b, "cancelled_at") ?? s(b, "created_at"), r);
    const disputesM = metric(disputes, (d) => s(d, "created_at"), r);
    const supportM = metric(support, (t) => s(t, "created_at"), r);
    const disputesIn = disputes.filter((d) => within(s(d, "created_at")));
    const supportIn = support.filter((t) => within(s(t, "created_at")));
    const supportHours = support.filter((t) => s(t, "resolved_at") && within(s(t, "created_at"))).map((t) => hoursBetween(s(t, "created_at")!, s(t, "resolved_at")!));
    const disputeReasons = sumBy(disputesIn, (d) => DISPUTE_REASON[s(d, "reason") ?? ""] ?? s(d, "reason"));
    const resolutions = sumBy(disputesIn.filter((d) => s(d, "resolution")), (d) => RESOLUTION[s(d, "resolution") ?? ""] ?? s(d, "resolution"));
    const supportByCat = sumBy(supportIn, (t) => SUPPORT_CAT[s(t, "category") ?? ""] ?? s(t, "category") ?? "Outro");
    const expired = bookings.filter((b) => s(b, "status") === "expired" && within(s(b, "created_at"))).length;
    content = (
      <>
        <div className="grid grid-2">
          <MetricCard title="Reservas canceladas" metric={cancelM} format={int} invert {...card} />
          <MetricCard title="Canceladas pelo parceiro" metric={cancelPartnerM} format={int} invert {...card} />
          <MetricCard title="Disputas abertas" metric={disputesM} format={int} invert footer={`${disputes.filter((d) => s(d, "status") === "open").length} por decidir agora`} {...card} />
          <MetricCard title="Pedidos de ajuda" metric={supportM} format={int} invert footer={`${support.filter((t) => s(t, "status") !== "resolved").length} em aberto agora`} {...card} />
        </div>
        <div className="grid grid-3">
          <Card title="Motivos das disputas" footer={resolutions.size > 0 ? `Decisões: ${topN(resolutions, 3).map((x) => `${x.label} (${x.value})`).join(" · ")}` : undefined}>
            <HBars data={topN(disputeReasons, 6)} empty="Sem disputas no período." />
          </Card>
          <Card title="Pedidos de ajuda por tipo">
            <HBars data={topN(supportByCat, 6)} empty="Sem pedidos no período." />
          </Card>
          <div className="stack">
            <MiniStat label="Tempo até resolver o suporte" value={duration(median(supportHours))} hint="mediana no período" />
            <MiniStat label="Sinal não pago a tempo" value={String(expired)} hint="reservas expiradas no período" tone={expired > 0 ? "warning" : undefined} />
          </div>
        </div>
      </>
    );
  }

  if (tab === "uso") {
    const msgM = metric(messages, (m) => s(m, "created_at"), r);
    const groupM = metric(groupMessages, (m) => s(m, "created_at"), r);
    const photosM = metric(gallery, (g) => s(g, "created_at"), r);
    const signupsM = metric(profiles, (p) => s(p, "created_at"), r);
    content = (
      <>
        <div className="grid grid-2">
          <MetricCard title="Mensagens com parceiros" metric={msgM} format={int} {...card} />
          <MetricCard title="Mensagens em grupos" metric={groupM} format={int} {...card} />
          <MetricCard title="Fotos na galeria" metric={photosM} format={int} footer={`${gallery.filter((g) => s(g, "status") === "pending").length} por aprovar agora`} {...card} />
          <MetricCard title="Contas criadas" hint="Organizadores, parceiros e convidados" metric={signupsM} format={int} footer={`${profiles.filter((p) => s(p, "status") === "active").length} contas ativas`} {...card} />
        </div>
      </>
    );
  }

  return (
    <div className="page">
      <PageHeader title="Analytics" subtitle="Dados reais da app, comparados com o período anterior." />
      <div className="an-toolbar">
        <nav className="tabs" aria-label="Período">
          {RANGES.map((x) => (
            <Link key={x.value} href={href(tab, x.value)} className="tab" aria-current={x.value === range ? "page" : undefined}>
              {x.label}
            </Link>
          ))}
        </nav>
        <span className="an-compare">
          {r.label} · comparado com {r.prevLabel}
        </span>
      </div>
      <nav className="subnav" aria-label="Separadores">
        {TABS.map((t) => (
          <Link key={t.key} href={href(t.key, range)} aria-current={t.key === tab ? "page" : undefined}>
            {t.label}
          </Link>
        ))}
      </nav>
      {content}
    </div>
  );
}


const DISPUTE_REASON: Record<string, string> = {
  service_not_provided: "Serviço não prestado",
  service_different: "Diferente do combinado",
  partner_no_show: "Parceiro não apareceu",
  couple_no_show: "Organizador não apareceu",
  payment_issue: "Pagamento",
  other: "Outro",
};
const RESOLUTION: Record<string, string> = {
  refund_full: "reembolso total",
  refund_partial: "reembolso parcial",
  partner_favor: "a favor do parceiro",
};
const SUPPORT_CAT: Record<string, string> = {
  general: "Geral",
  dispute_delay: "Disputa ou atraso",
};

// ---------------- peças visuais ----------------
const muted = { color: "var(--ink-muted)", fontSize: 13 } as const;

function Empty({ children }: { children: ReactNode }) {
  return <p style={muted}>{children}</p>;
}

/// Barras verticais simples (um valor por mês).
function Bars({ data, format = (v: number) => String(Math.round(v)) }: { data: { label: string; value: number }[]; format?: (v: number) => string }) {
  const max = Math.max(...data.map((d) => d.value), 0);
  if (max === 0) return <Empty>Ainda sem dados.</Empty>;
  return (
    <div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 150 }}>
        {data.map((d) => (
          <div key={d.label} className="bar-col" style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", minWidth: 0, cursor: "default" }}>
            <span className="bar-tip">
              {d.label} · <strong>{format(d.value)}</strong>
            </span>
            <div className="bar-fill-v" style={{ width: "100%", maxWidth: 28, height: `${Math.max(d.value > 0 ? 4 : 2, (d.value / max) * 120)}px`, background: d.value > 0 ? "var(--accent)" : "var(--surface-3)", borderRadius: "6px 6px 2px 2px" }} />
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: 6, marginTop: 6 }}>
        {data.map((d) => (
          <span key={d.label} style={{ flex: 1, textAlign: "center", fontSize: 10.5, color: "var(--ink-muted)", minWidth: 0 }}>
            {d.label}
          </span>
        ))}
      </div>
    </div>
  );
}

/// Barras horizontais (ranking).
function HBars({ data, format = (v: number) => String(Math.round(v)), empty }: { data: { label: string; value: number }[]; format?: (v: number) => string; empty: string }) {
  const max = Math.max(...data.map((d) => d.value), 0);
  if (max === 0) return <Empty>{empty}</Empty>;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      {data.map((d) => (
        <div key={d.label}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 8, fontSize: 13, marginBottom: 3 }}>
            <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{d.label}</span>
            <span style={{ fontWeight: 600, whiteSpace: "nowrap" }}>{format(d.value)}</span>
          </div>
          <div style={{ height: 8, borderRadius: 999, background: "var(--surface-3)" }}>
            <div style={{ height: "100%", width: `${Math.max(3, (d.value / max) * 100)}%`, borderRadius: 999, background: "var(--accent)" }} />
          </div>
        </div>
      ))}
    </div>
  );
}

function Funnel({ stages }: { stages: { label: string; value: number }[] }) {
  const first = stages[0]?.value ?? 0;
  if (first === 0) return <Empty>Sem pedidos de orçamento no período.</Empty>;
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {stages.map((st, i) => {
        const prev = i === 0 ? null : stages[i - 1].value;
        return (
          <div key={st.label}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
              <span>{st.label}</span>
              <span style={{ fontWeight: 600 }}>
                {st.value}
                <span style={{ color: "var(--ink-muted)", fontWeight: 400 }}>
                  {" "}
                  {i === 0 ? "" : `· ${pct(st.value, prev ?? 0)} do passo anterior · ${pct(st.value, first)} do total`}
                </span>
              </span>
            </div>
            <div style={{ height: 10, borderRadius: 999, background: "var(--surface-3)" }}>
              <div style={{ height: "100%", width: `${Math.max(3, (st.value / first) * 100)}%`, borderRadius: 999, background: "var(--accent)" }} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
