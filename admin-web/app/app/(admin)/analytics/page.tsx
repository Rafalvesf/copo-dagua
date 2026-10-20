import Link from "next/link";
import type { ReactNode } from "react";
import { requireAdmin } from "@/lib/dal";
import { createAdminClient } from "@/lib/supabase/admin";
import { EVENT_TYPES } from "@/lib/event-types";
import { Card, FilterTabs, PageHeader, Stat } from "@/components/ui";
import {
  PERIODS,
  type Period,
  avg,
  duration,
  eur,
  hoursBetween,
  inPeriod,
  median,
  monthBuckets,
  monthKey,
  pct,
  periodStart,
  sumBy,
  topN,
  netPartnerAmount,
} from "@/lib/analytics";

// Analytics detalhado (2026-10-20): muito mais do que o dashboard —
// dinheiro, funil com tempos, organizadores e eventos, parceiros por
// categoria, qualidade (cancelamentos, reembolsos, disputas, suporte) e
// uso da app. Lê com a chave de serviço (as contas precisam de tabelas que
// o RLS não mostra ao admin, ex: mensagens), só depois de requireAdmin().
// Volume atual pequeno: lê as linhas e agrega aqui (até 10 000 por tabela).

const LIMIT = 10000;

type Row = Record<string, unknown>;
const s = (r: Row, k: string) => (r[k] as string | null | undefined) ?? null;
const n = (r: Row, k: string) => Number(r[k] ?? 0);

export default async function AnalyticsPage({ searchParams }: PageProps<"/analytics">) {
  await requireAdmin();
  const params = await searchParams;
  const period: Period = (["30", "90", "365", "all"] as const).includes(params.p as Period) ? (params.p as Period) : "90";

  // Um só "agora" para a página toda (mesmo padrão do dashboard).
  const nowMs = new Date().getTime();
  const sinceIso = periodStart(period, nowMs)?.toISOString() ?? "1970-01-01";

  const db = createAdminClient();
  const q = (table: string, cols: string) => db.from(table).select(cols).range(0, LIMIT - 1);

  const [
    profilesR,
    weddingsR,
    guestsR,
    quotesR,
    proposalsR,
    bookingsR,
    paymentsR,
    partnersR,
    partnerCatsR,
    reviewsR,
    disputesR,
    supportR,
    galleryR,
    offersR,
    settingsR,
    messagesC,
    groupMessagesC,
  ] = await Promise.all([
    q("profiles", "id, role, created_at, status"),
    q("weddings", "id, created_at, event_type, wedding_date, location, estimated_budget, estimated_guests"),
    q("guests", "wedding_id, rsvp_status, linked_profile_id"),
    q("quote_requests", "id, partner_id, created_at, status"),
    q("proposals", "id, partner_id, quote_request_id, created_at, status, price, deposit_refundable"),
    q("bookings", "id, partner_id, wedding_id, proposal_id, created_at, status, total_amount, cancelled_at"),
    q("payments", "id, booking_id, partner_id, type, amount, status, paid_at, refunded_amount, updated_at"),
    q("partner_profiles", "id, business_name, status, stripe_charges_enabled, featured, region, city, created_at"),
    q("partner_profile_categories", "partner_id, partner_categories(label_pt)"),
    q("reviews", "partner_id, rating, created_at, status"),
    q("disputes", "status, reason, resolution, refund_amount, created_at"),
    q("support_tickets", "status, category, created_at, resolved_at"),
    q("wedding_gallery_photos", "status, created_at"),
    q("guest_offer_reservations", "amount, status, created_at"),
    db.from("platform_settings").select("platform_commission_percentage").eq("id", 1).maybeSingle(),
    db.from("messages").select("id", { count: "exact", head: true }).gte("created_at", sinceIso),
    db.from("chat_group_messages").select("id", { count: "exact", head: true }).gte("created_at", sinceIso),
  ]);

  const rows = (r: { data: unknown }) => ((r.data as Row[] | null) ?? []) as Row[];
  const profiles = rows(profilesR);
  const weddings = rows(weddingsR);
  const guests = rows(guestsR);
  const quotes = rows(quotesR);
  const proposals = rows(proposalsR);
  const bookings = rows(bookingsR);
  const payments = rows(paymentsR);
  const partners = rows(partnersR);
  const partnerCats = rows(partnerCatsR);
  const reviews = rows(reviewsR);
  const disputes = rows(disputesR);
  const support = rows(supportR);
  const gallery = rows(galleryR);
  const offers = rows(offersR);
  const commissionPct = Number((settingsR.data as Row | null)?.platform_commission_percentage ?? 0);

  const start = periodStart(period, nowMs);
  const within = (iso: string | null) => inPeriod(iso, start);
  const withCommission = (a: number) => a * (1 + commissionPct / 100);

  // ---------- Dinheiro ----------
  const paidAll = payments.filter((p) => s(p, "status") === "paid" || n(p, "refunded_amount") > 0 || s(p, "status") === "refunded");
  const paidIn = paidAll.filter((p) => within(s(p, "paid_at")));
  // Valor líquido: sem o que já foi reembolsado (a comissão devolvida não é receita).
  const net = (p: Row) => netPartnerAmount(n(p, "amount"), s(p, "status"), n(p, "refunded_amount"), commissionPct);
  const partnerAmount = paidIn.reduce((a, p) => a + net(p), 0);
  const grossPaid = withCommission(partnerAmount);
  const revenue = partnerAmount * (commissionPct / 100);
  const refundedIn = payments.filter((p) => n(p, "refunded_amount") > 0 && within(s(p, "updated_at")));
  const refundedTotal = refundedIn.reduce((a, p) => a + n(p, "refunded_amount"), 0);
  const deposits = paidIn.filter((p) => s(p, "type") === "deposit");
  const finals = paidIn.filter((p) => s(p, "type") !== "deposit");
  const bookingsIn = bookings.filter((b) => within(s(b, "created_at")));
  const avgBooking = avg(bookingsIn.map((b) => n(b, "total_amount")));
  const offersPaid = offers.filter((o) => s(o, "status") === "paid" && within(s(o, "created_at")));

  const months = monthBuckets(12, nowMs);
  const paidByMonth = sumBy(paidAll.filter((p) => s(p, "paid_at")), (p) => monthKey(s(p, "paid_at")!), (p) => withCommission(net(p)));
  const revenueByMonth = sumBy(paidAll.filter((p) => s(p, "paid_at")), (p) => monthKey(s(p, "paid_at")!), (p) => net(p) * (commissionPct / 100));

  // Categorias de cada parceiro (para dinheiro e pedidos por categoria).
  const catsOf = new Map<string, string[]>();
  for (const pc of partnerCats) {
    const cat = pc.partner_categories as { label_pt?: string } | { label_pt?: string }[] | null;
    const label = (Array.isArray(cat) ? cat[0] : cat)?.label_pt;
    if (!label) continue;
    const id = s(pc, "partner_id")!;
    catsOf.set(id, [...(catsOf.get(id) ?? []), label]);
  }
  const primaryCat = (partnerId: string | null) => (partnerId ? catsOf.get(partnerId)?.[0] ?? "Sem categoria" : "Sem categoria");
  const partnerName = new Map(partners.map((p) => [s(p, "id")!, s(p, "business_name") ?? "Parceiro"]));

  const revenueByCat = sumBy(paidIn, (p) => primaryCat(s(p, "partner_id")), (p) => withCommission(net(p)));
  const revenueByPartner = sumBy(paidIn, (p) => s(p, "partner_id"), (p) => withCommission(net(p)));

  // ---------- Funil ----------
  const quotesIn = quotes.filter((r) => within(s(r, "created_at")));
  const quoteIds = new Set(quotesIn.map((r) => s(r, "id")));
  const proposalsOfQuotes = proposals.filter((p) => quoteIds.has(s(p, "quote_request_id")));
  const proposalIds = new Set(proposalsOfQuotes.map((p) => s(p, "id")));
  const bookingsOfQuotes = bookings.filter((b) => proposalIds.has(s(b, "proposal_id")));
  const bookingIdsOfQuotes = new Set(bookingsOfQuotes.map((b) => s(b, "id")));
  const depositPaidBookings = new Set(
    payments.filter((p) => s(p, "type") === "deposit" && (s(p, "status") === "paid" || s(p, "status") === "refunded")).map((p) => s(p, "booking_id")),
  );
  const funnel = [
    { label: "Pedidos de orçamento", value: quotesIn.length },
    { label: "Com proposta do parceiro", value: new Set(proposalsOfQuotes.map((p) => s(p, "quote_request_id"))).size },
    { label: "Proposta aceite (reserva criada)", value: bookingsOfQuotes.length },
    { label: "Sinal pago", value: [...bookingIdsOfQuotes].filter((id) => depositPaidBookings.has(id)).length },
    { label: "Concluída", value: bookingsOfQuotes.filter((b) => s(b, "status") === "completed").length },
  ];
  const quoteCreated = new Map(quotes.map((r) => [s(r, "id"), s(r, "created_at")]));
  const responseHours = proposalsOfQuotes
    .map((p) => {
      const qc = quoteCreated.get(s(p, "quote_request_id"));
      return qc ? hoursBetween(qc, s(p, "created_at")!) : NaN;
    })
    .filter((h) => h >= 0);
  const proposalCreated = new Map(proposals.map((p) => [s(p, "id"), s(p, "created_at")]));
  const decisionHours = bookingsOfQuotes
    .map((b) => {
      const pc = proposalCreated.get(s(b, "proposal_id"));
      return pc ? hoursBetween(pc, s(b, "created_at")!) : NaN;
    })
    .filter((h) => h >= 0);
  const proposalsIn = proposals.filter((p) => within(s(p, "created_at")));
  const nonRefundable = proposalsIn.filter((p) => p.deposit_refundable === false).length;
  const avgProposal = avg(proposalsIn.map((p) => n(p, "price")));

  // ---------- Organizadores e eventos ----------
  const couples = profiles.filter((p) => s(p, "role") === "couple");
  const couplesNew = couples.filter((p) => within(s(p, "created_at")));
  const guestAccounts = profiles.filter((p) => s(p, "role") === "guest");
  const eventsIn = weddings.filter((w) => within(s(w, "created_at")));
  const eventsByType = sumBy(weddings, (w) => EVENT_TYPES[s(w, "event_type") ?? "other"]?.label ?? "Outro");
  const nextMonths = (() => {
    const out: { key: string; label: string }[] = [];
    const d = new Date(nowMs);
    for (let i = 0; i < 12; i++) {
      const m = new Date(Date.UTC(d.getUTCFullYear(), d.getUTCMonth() + i, 1));
      out.push({
        key: `${m.getUTCFullYear()}-${String(m.getUTCMonth() + 1).padStart(2, "0")}`,
        label: m.toLocaleDateString("pt-PT", { month: "short", timeZone: "UTC" }).replace(".", ""),
      });
    }
    return out;
  })();
  const eventsByMonth = sumBy(weddings.filter((w) => s(w, "wedding_date")), (w) => monthKey(s(w, "wedding_date")!));
  const eventsByPlace = sumBy(weddings, (w) => (s(w, "location") ?? "").split(",")[0].trim() || null);
  const budgets = weddings.map((w) => n(w, "estimated_budget")).filter((v) => v > 0);
  const estGuests = weddings.map((w) => n(w, "estimated_guests")).filter((v) => v > 0);
  const guestsPerEvent = [...sumBy(guests, (g) => s(g, "wedding_id")).values()];
  const rsvpConfirmed = guests.filter((g) => s(g, "rsvp_status") === "confirmed").length;
  const rsvpDeclined = guests.filter((g) => s(g, "rsvp_status") === "declined").length;
  const guestsWithApp = guests.filter((g) => s(g, "linked_profile_id")).length;

  // ---------- Parceiros ----------
  const published = partners.filter((p) => s(p, "status") === "published");
  const pending = partners.filter((p) => s(p, "status") === "pending_review");
  const withStripe = partners.filter((p) => p.stripe_charges_enabled === true);
  const quotesByCat = sumBy(quotesIn, (r) => primaryCat(s(r, "partner_id")));
  const bookingsByCat = sumBy(bookingsIn, (b) => primaryCat(s(b, "partner_id")));
  const partnersByCat = sumBy(published, (p) => primaryCat(s(p, "id")));
  const partnersByRegion = sumBy(published, (p) => s(p, "region") ?? s(p, "city"));
  const quotesByPartner = sumBy(quotesIn, (r) => s(r, "partner_id"));
  const answeredByPartner = sumBy(proposalsOfQuotes, (p) => s(p, "partner_id"));
  const responseRate = quotesIn.length ? new Set(proposalsOfQuotes.map((p) => s(p, "quote_request_id"))).size / quotesIn.length : null;
  const publishedReviews = reviews.filter((r) => s(r, "status") !== "removed");
  const ratingAvg = avg(publishedReviews.map((r) => n(r, "rating")));
  const ratingByPartner = new Map<string, number[]>();
  for (const r of publishedReviews) {
    const id = s(r, "partner_id")!;
    ratingByPartner.set(id, [...(ratingByPartner.get(id) ?? []), n(r, "rating")]);
  }
  const ratingDist = [5, 4, 3, 2, 1].map((star) => ({ label: `${star} ★`, value: publishedReviews.filter((r) => n(r, "rating") === star).length }));
  const topPartners = topN(revenueByPartner, 10).map((t) => ({
    id: t.label,
    name: partnerName.get(t.label) ?? "Parceiro",
    revenue: t.value,
    bookings: bookingsIn.filter((b) => s(b, "partner_id") === t.label).length,
    quotes: quotesByPartner.get(t.label) ?? 0,
    answered: answeredByPartner.get(t.label) ?? 0,
    rating: avg(ratingByPartner.get(t.label) ?? []),
  }));

  // ---------- Qualidade ----------
  const cancelledCouple = bookingsIn.filter((b) => s(b, "status") === "cancelled_by_couple").length;
  const cancelledPartner = bookingsIn.filter((b) => s(b, "status") === "cancelled_by_partner").length;
  const expired = bookingsIn.filter((b) => s(b, "status") === "expired").length;
  const disputesIn = disputes.filter((d) => within(s(d, "created_at")));
  const disputesOpen = disputes.filter((d) => s(d, "status") === "open").length;
  const disputeReasons = sumBy(disputesIn, (d) => DISPUTE_REASON[s(d, "reason") ?? ""] ?? s(d, "reason"));
  const disputeResolutions = sumBy(disputesIn.filter((d) => s(d, "resolution")), (d) => RESOLUTION[s(d, "resolution") ?? ""] ?? s(d, "resolution"));
  const supportIn = support.filter((t) => within(s(t, "created_at")));
  const supportOpen = support.filter((t) => s(t, "status") !== "resolved").length;
  const supportHours = support
    .filter((t) => s(t, "resolved_at") && within(s(t, "created_at")))
    .map((t) => hoursBetween(s(t, "created_at")!, s(t, "resolved_at")!));
  const supportByCat = sumBy(supportIn, (t) => SUPPORT_CAT[s(t, "category") ?? ""] ?? s(t, "category") ?? "Outro");

  // ---------- Uso da app ----------
  const photosIn = gallery.filter((g) => within(s(g, "created_at")));
  const periodLabel = PERIODS.find((p) => p.value === period)!.label.toLowerCase();

  return (
    <div className="page">
      <PageHeader
        title="Analytics"
        subtitle={`Tudo o que se passa na plataforma, com dados reais da app. Valores do período: ${periodLabel === "sempre" ? "desde o início" : `últimos ${periodLabel}`}.`}
        actions={<FilterTabs current={period} items={PERIODS.map((p) => ({ value: p.value, label: p.label, href: `/analytics?p=${p.value}` }))} />}
      />
      <nav className="subnav" aria-label="Secções">
        {[
          ["dinheiro", "Dinheiro"],
          ["funil", "Do pedido à reserva"],
          ["organizadores", "Organizadores e eventos"],
          ["parceiros", "Parceiros"],
          ["qualidade", "Qualidade e risco"],
          ["uso", "Uso da app"],
        ].map(([id, label]) => (
          <a key={id} href={`#${id}`}>
            {label}
          </a>
        ))}
      </nav>

      {/* ---------------- Dinheiro ---------------- */}
      <SectionTitle id="dinheiro" title="Dinheiro" sub="Pagamentos feitos na app pela Stripe (valor pago pelo organizador, comissão incluída)." />
      <div className="grid grid-3">
        <Stat label="Pago pelos organizadores" value={eur(grossPaid)} hint={`${paidIn.length} pagamentos`} />
        <Stat label={`Receita À Nossa! (${commissionPct}%)`} value={eur(revenue, true)} hint="comissão sobre o valor dos parceiros" />
        <Stat label="Para os parceiros" value={eur(partnerAmount)} hint={`${deposits.length} sinais · ${finals.length} restantes`} />
        <Stat label="Reembolsado" value={eur(refundedTotal, true)} hint={`${refundedIn.length} pagamentos`} tone={refundedTotal > 0 ? "warning" : undefined} />
        <Stat label="Valor médio por reserva" value={avgBooking == null ? "—" : eur(avgBooking)} hint={`${bookingsIn.length} reservas criadas`} />
        <Stat label="Ofertas a convidados" value={eur(offersPaid.reduce((a, o) => a + n(o, "amount"), 0))} hint={`${offersPaid.length} reservas pagas`} />
      </div>
      <div className="grid grid-2">
        <Card title="Pago por mês (12 meses)">
          <Bars data={months.map((m) => ({ label: m.label, value: paidByMonth.get(m.key) ?? 0 }))} format={(v) => eur(v)} />
        </Card>
        <Card title="Receita À Nossa! por mês (12 meses)">
          <Bars data={months.map((m) => ({ label: m.label, value: revenueByMonth.get(m.key) ?? 0 }))} format={(v) => eur(v, true)} />
        </Card>
      </div>
      <div className="grid grid-2">
        <Card title="Pago por categoria">
          <HBars data={topN(revenueByCat, 8)} format={(v) => eur(v)} empty="Sem pagamentos no período." />
        </Card>
        <Card title="Melhores parceiros (pago no período)">
          {topPartners.length === 0 ? (
            <Empty>Sem pagamentos no período.</Empty>
          ) : (
            <div className="table-wrap bleed bleed-bottom"><table className="table">
              <thead>
                <tr>
                  <th>Parceiro</th>
                  <th>Pago</th>
                  <th>Reservas</th>
                  <th>Resposta</th>
                  <th>Avaliação</th>
                </tr>
              </thead>
              <tbody>
                {topPartners.map((t) => (
                  <tr key={t.id}>
                    <td>
                      <Link href={`/partners/${t.id}`} className="cell-main">
                        {t.name}
                      </Link>
                    </td>
                    <td>{eur(t.revenue)}</td>
                    <td>{t.bookings}</td>
                    <td>{t.quotes ? pct(t.answered, t.quotes) : "—"}</td>
                    <td>{t.rating == null ? "—" : `${t.rating.toFixed(1)} ★`}</td>
                  </tr>
                ))}
              </tbody>
            </table></div>
          )}
        </Card>
      </div>

      {/* ---------------- Funil ---------------- */}
      <SectionTitle id="funil" title="Do pedido à reserva" sub="Pedidos de orçamento feitos no período e o que lhes aconteceu depois." />
      <div className="grid grid-2">
        <Card title="Funil">
          <Funnel stages={funnel} />
        </Card>
        <div className="grid grid-2" style={{ alignContent: "start" }}>
          <Stat label="Tempo de resposta do parceiro" value={duration(median(responseHours))} hint="mediana, do pedido à proposta" />
          <Stat label="Tempo de decisão do organizador" value={duration(median(decisionHours))} hint="mediana, da proposta à aceitação" />
          <Stat label="Valor médio das propostas" value={avgProposal == null ? "—" : eur(avgProposal)} hint={`${proposalsIn.length} propostas`} />
          <Stat
            label="Sinal não reembolsável"
            value={pct(nonRefundable, proposalsIn.length)}
            hint={`${nonRefundable} de ${proposalsIn.length} propostas`}
          />
        </div>
      </div>

      {/* ---------------- Organizadores e eventos ---------------- */}
      <SectionTitle id="organizadores" title="Organizadores e eventos" sub="Quem organiza, que eventos, quando e onde." />
      <div className="grid grid-3">
        <Stat label="Organizadores" value={String(couples.length)} hint={`+${couplesNew.length} no período`} />
        <Stat label="Eventos criados" value={String(weddings.length)} hint={`+${eventsIn.length} no período`} />
        <Stat label="Orçamento estimado" value={median(budgets) == null ? "—" : eur(median(budgets)!)} hint="mediana por evento" />
        <Stat label="Convidados por evento" value={median(guestsPerEvent) == null ? "—" : String(Math.round(median(guestsPerEvent)!))} hint={`estimados: ${median(estGuests) == null ? "—" : Math.round(median(estGuests)!)}`} />
        <Stat label="Respostas confirmadas" value={pct(rsvpConfirmed, guests.length)} hint={`${rsvpConfirmed} vão · ${rsvpDeclined} não vão · ${guests.length} na lista`} />
        <Stat label="Convidados com a app" value={pct(guestsWithApp, guests.length)} hint={`${guestAccounts.length} contas de convidado`} />
      </div>
      <div className="grid grid-2">
        <Card title="Eventos por tipo">
          <HBars data={topN(eventsByType, 10)} empty="Sem eventos." />
        </Card>
        <Card title="Eventos nos próximos 12 meses">
          <Bars data={nextMonths.map((m) => ({ label: m.label, value: eventsByMonth.get(m.key) ?? 0 }))} />
        </Card>
      </div>
      <div className="grid grid-2">
        <Card title="Onde são os eventos">
          <HBars data={topN(eventsByPlace, 8)} empty="Sem local definido." />
        </Card>
        <Card title="Pedidos de orçamento por categoria (período)">
          <HBars data={topN(quotesByCat, 8)} empty="Sem pedidos no período." />
        </Card>
      </div>

      {/* ---------------- Parceiros ---------------- */}
      <SectionTitle id="parceiros" title="Parceiros" sub="Oferta disponível, resposta aos pedidos e avaliações." />
      <div className="grid grid-4">
        <Stat label="Publicados" value={String(published.length)} hint={`${pending.length} à espera de aprovação`} />
        <Stat label="Com pagamentos ativos" value={pct(withStripe.length, partners.length)} hint={`${withStripe.length} de ${partners.length}`} />
        <Stat label="Respondem aos pedidos" value={responseRate == null ? "—" : `${Math.round(responseRate * 100)}%`} hint="pedidos com proposta, no período" />
        <Stat label="Avaliação média" value={ratingAvg == null ? "—" : `${ratingAvg.toFixed(1)} ★`} hint={`${publishedReviews.length} avaliações`} />
      </div>
      <div className="grid grid-2">
        <Card title="Oferta vs procura por categoria">
          {partnersByCat.size === 0 && quotesByCat.size === 0 ? (
            <Empty>Sem dados.</Empty>
          ) : (
            <div className="table-wrap bleed bleed-bottom"><table className="table">
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th>Parceiros</th>
                  <th>Pedidos</th>
                  <th>Reservas</th>
                  <th>Pedidos/parceiro</th>
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
                        <td>{cat}</td>
                        <td>{np}</td>
                        <td>{nq}</td>
                        <td>{bookingsByCat.get(cat) ?? 0}</td>
                        <td style={{ color: np === 0 && nq > 0 ? "var(--danger-fg)" : undefined, fontWeight: np === 0 && nq > 0 ? 600 : 400 }}>
                          {np ? (nq / np).toFixed(1) : nq > 0 ? "falta oferta" : "—"}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table></div>
          )}
        </Card>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <Card title="Avaliações">
            <HBars data={ratingDist} empty="Sem avaliações." />
          </Card>
          <Card title="Parceiros por região">
            <HBars data={topN(partnersByRegion, 6)} empty="Sem região definida." />
          </Card>
        </div>
      </div>

      {/* ---------------- Qualidade ---------------- */}
      <SectionTitle id="qualidade" title="Qualidade e risco" sub="O que corre mal: cancelamentos, reembolsos, disputas e pedidos de ajuda." />
      <div className="grid grid-3">
        <Stat label="Canceladas pelo organizador" value={String(cancelledCouple)} hint={`${pct(cancelledCouple, bookingsIn.length)} das reservas do período`} />
        <Stat label="Canceladas pelo parceiro" value={String(cancelledPartner)} hint={`${pct(cancelledPartner, bookingsIn.length)} das reservas`} tone={cancelledPartner > 0 ? "warning" : undefined} />
        <Stat label="Sinal não pago a tempo" value={String(expired)} hint="reservas expiradas" />
        <Stat label="Disputas" value={String(disputesIn.length)} hint={`${disputesOpen} por decidir`} tone={disputesOpen > 0 ? "warning" : undefined} />
        <Stat label="Pedidos de ajuda" value={String(supportIn.length)} hint={`${supportOpen} em aberto`} />
        <Stat label="Tempo de resposta ao suporte" value={duration(median(supportHours))} hint="mediana até resolver" />
      </div>
      <div className="grid grid-2">
        <Card title="Motivos das disputas">
          <HBars data={topN(disputeReasons, 6)} empty="Sem disputas no período." />
          {disputeResolutions.size > 0 && (
            <p style={{ ...muted, marginTop: 10 }}>
              Decisões: {topN(disputeResolutions, 3).map((r) => `${r.label} (${r.value})`).join(" · ")}
            </p>
          )}
        </Card>
        <Card title="Pedidos de ajuda por tipo">
          <HBars data={topN(supportByCat, 6)} empty="Sem pedidos no período." />
        </Card>
      </div>

      {/* ---------------- Uso da app ---------------- */}
      <SectionTitle id="uso" title="Uso da app" sub="Sinais de que as pessoas estão a usar a app no dia a dia." />
      <div className="grid grid-4">
        <Stat label="Mensagens com parceiros" value={String(messagesC.count ?? 0)} hint="no período" />
        <Stat label="Mensagens em grupos" value={String(groupMessagesC.count ?? 0)} hint="no período" />
        <Stat label="Fotos na galeria" value={String(photosIn.length)} hint={`${photosIn.filter((g) => s(g, "status") === "pending").length} por aprovar`} />
        <Stat label="Contas ativas" value={String(profiles.filter((p) => s(p, "status") === "active").length)} hint={`${profiles.length} contas no total`} />
      </div>
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

function SectionTitle({ id, title, sub }: { id: string; title: string; sub: string }) {
  return (
    <div id={id} style={{ marginTop: 20, scrollMarginTop: 80 }}>
      <h2 style={{ fontSize: 19 }}>{title}</h2>
      <p className="muted" style={{ fontSize: 13, marginTop: 2 }}>{sub}</p>
    </div>
  );
}

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
          <div key={d.label} title={`${d.label}: ${format(d.value)}`} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-end", height: "100%", minWidth: 0 }}>
            {d.value > 0 && <span style={{ fontSize: 10, color: "var(--ink-muted)", marginBottom: 3, whiteSpace: "nowrap" }}>{format(d.value)}</span>}
            <div style={{ width: "100%", maxWidth: 28, height: `${Math.max(d.value > 0 ? 4 : 0, (d.value / max) * 110)}px`, background: "var(--accent)", borderRadius: "6px 6px 2px 2px" }} />
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
