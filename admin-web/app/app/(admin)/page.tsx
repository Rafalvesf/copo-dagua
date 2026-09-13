import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { LiveRefresh } from "@/components/LiveRefresh";
import { KpiCard } from "@/components/KpiCard";
import { BookingsBarChart } from "@/components/BookingsBarChart";
import { StatusDonut } from "@/components/StatusDonut";
import { BookingStatusBadge } from "@/components/BookingStatusBadge";
import { TabbedCard } from "@/components/TabbedCard";
import { DashboardGrid } from "@/components/DashboardGrid";
import { MaintenanceSwitch } from "@/components/MaintenanceSwitch";
import type { BookingStatus, PlatformSettings } from "@/lib/types";

type ActivityEntry = {
  id: string;
  action: string;
  target_table: string;
  created_at: string;
  actor: { full_name: string } | { full_name: string }[] | null;
};

type ExpiringBooking = { id: string; booking_number: string; hold_expires_at: string };
type StalePartner = { id: string; business_name: string; submitted_at: string };
type FlaggedBooking = { id: string; booking_number: string; status: string };
type SupportTicketRow = {
  id: string;
  subject: string;
  category: "general" | "dispute_delay";
  status: string;
  created_at: string;
  profiles: { full_name: string } | { full_name: string }[] | null;
};

type RecentBooking = {
  id: string;
  booking_number: string;
  event_date: string;
  total_amount: number;
  status: BookingStatus;
  created_at: string;
  couple: { full_name: string } | { full_name: string }[] | null;
  partner: { business_name: string } | { business_name: string }[] | null;
  proposal: { title: string } | { title: string }[] | null;
};

const URGENT_HOLD_WINDOW_HOURS = 6;
const STALE_APPROVAL_DAYS = 3;
const PERIOD_DAYS = 30;

function one<T>(rel: T | T[] | null): T | null {
  return Array.isArray(rel) ? (rel[0] ?? null) : rel;
}

// Deltas comparam sempre "novidade no período" (últimos 30 dias) vs. o
// período de 30 dias imediatamente anterior — não totais acumulados
// (esses já são o número grande de cada cartão). Ver KpiCard.tsx.
function deltaPct(current: number, previous: number): number | null {
  if (previous === 0) return current === 0 ? null : 100;
  return ((current - previous) / previous) * 100;
}

// Agrega uma lista de linhas com `created_at` em N baldes de dias iguais
// dentro da janela [since, now) — usado para as sparklines dos KPIs.
function bucketize(rows: { created_at: string }[], buckets: number, windowDays: number, since: Date): number[] {
  const bucketMs = (windowDays * 24 * 60 * 60 * 1000) / buckets;
  const out = new Array(buckets).fill(0);
  for (const row of rows) {
    const idx = Math.floor((new Date(row.created_at).getTime() - since.getTime()) / bucketMs);
    if (idx >= 0 && idx < buckets) out[idx] += 1;
  }
  return out;
}

function bucketizeSum(rows: { created_at: string; amount: number }[], buckets: number, windowDays: number, since: Date): number[] {
  const bucketMs = (windowDays * 24 * 60 * 60 * 1000) / buckets;
  const out = new Array(buckets).fill(0);
  for (const row of rows) {
    const idx = Math.floor((new Date(row.created_at).getTime() - since.getTime()) / bucketMs);
    if (idx >= 0 && idx < buckets) out[idx] += row.amount;
  }
  return out;
}

const DONUT_COLORS: Record<string, string> = {
  confirmed: "var(--accent)",
  awaiting_deposit: "#c9a86a",
  completed: "#8fa87a",
  cancelled: "var(--status-suspended-fg)",
  expired: "#b8b2a3",
  disputed: "var(--status-rejected-fg)",
};

export default async function DashboardPage() {
  const { fullName, adminRole } = await requireAdmin();
  const supabase = await createClient();

  const { data: platformSettings } = await supabase
    .from("platform_settings")
    .select("maintenance_mode_couple, maintenance_mode_partner")
    .eq("id", 1)
    .single();
  const maintenance = platformSettings as Pick<
    PlatformSettings,
    "maintenance_mode_couple" | "maintenance_mode_partner"
  > | null;

  // `now` fixado a um único `Date.now()`, arredondado à meia-noite UTC, e
  // tudo o resto derivado dele — nunca uma segunda chamada independente a
  // `new Date()`/`Date.now()`. O Next.js pode executar este Server
  // Component mais do que uma vez no mesmo pedido (uma passagem para o
  // HTML inicial, outra para o payload RSC usado na hidratação); duas
  // chamadas a `Date.now()` feitas em momentos ligeiramente diferentes
  // podiam produzir textos de data diferentes entre as duas passagens
  // (ex: as legendas diárias de `BookingsBarChart`), causando um erro de
  // hidratação real — foi exatamente o que aconteceu aqui 2026-08-30,
  // com `isoDaysAgo()`/`isoHoursFromNow()` (que cada uma chama
  // `Date.now()` outra vez) usadas em vários pontos espalhados. O
  // arredondamento à meia-noite UTC garante que as duas passagens
  // produzem o mesmo valor mesmo que caiam em milissegundos diferentes,
  // desde que não atravessem a própria meia-noite (risco aceite, o pior
  // cenário é uma diferença de um dia numa janela de 30/60 dias).
  const now = new Date();
  now.setUTCHours(0, 0, 0, 0);
  const nowMs = now.getTime();
  const dayMs = 24 * 60 * 60 * 1000;
  const cutoff30 = new Date(nowMs - PERIOD_DAYS * dayMs).toISOString();
  const cutoff60 = new Date(nowMs - PERIOD_DAYS * 2 * dayMs).toISOString();
  const since60 = new Date(nowMs - PERIOD_DAYS * 2 * dayMs);
  const since30 = new Date(nowMs - PERIOD_DAYS * dayMs);

  const soon = new Date(nowMs + URGENT_HOLD_WINDOW_HOURS * 60 * 60 * 1000).toISOString();
  const staleBefore = new Date(nowMs - STALE_APPROVAL_DAYS * dayMs).toISOString();
  const cutoff365 = new Date(nowMs - 365 * dayMs).toISOString();

  const [
    couples,
    couplesSince60,
    publishedPartners,
    partnersReviewedSince60,
    pendingPartners,
    bookingsSince60,
    bookingsSince365,
    expiringHolds,
    stalePartners,
    flaggedBookings,
    quoteRequests,
    proposalsSent,
    proposalsAccepted,
    bookingsTotal,
    confirmedBookingsTotal,
    activity,
    recentBookings,
    openSupportTickets,
  ] = await Promise.all([
    supabase.from("profiles").select("id", { count: "exact", head: true }).eq("role", "couple"),
    supabase.from("profiles").select("created_at").eq("role", "couple").gte("created_at", cutoff60),
    supabase.from("partner_profiles").select("id", { count: "exact", head: true }).eq("status", "published"),
    supabase
      .from("partner_profiles")
      .select("created_at:reviewed_at")
      .eq("status", "published")
      .gte("reviewed_at", cutoff60),
    supabase.from("partner_profiles").select("id", { count: "exact", head: true }).eq("status", "pending_review"),
    supabase.from("bookings").select("created_at, total_amount, status").gte("created_at", cutoff60),
    supabase.from("bookings").select("created_at").gte("created_at", cutoff365),
    supabase
      .from("bookings")
      .select("id, booking_number, hold_expires_at")
      .eq("status", "awaiting_deposit")
      .lt("hold_expires_at", soon)
      .order("hold_expires_at", { ascending: true }),
    supabase
      .from("partner_profiles")
      .select("id, business_name, submitted_at")
      .eq("status", "pending_review")
      .lt("submitted_at", staleBefore)
      .order("submitted_at", { ascending: true }),
    supabase
      .from("bookings")
      .select("id, booking_number, status")
      .in("status", ["disputed", "payment_overdue"]),
    supabase.from("quote_requests").select("id", { count: "exact", head: true }),
    supabase.from("proposals").select("id", { count: "exact", head: true }),
    supabase.from("proposals").select("id", { count: "exact", head: true }).eq("status", "accepted"),
    supabase.from("bookings").select("id", { count: "exact", head: true }),
    supabase.from("bookings").select("id", { count: "exact", head: true }).eq("status", "confirmed"),
    supabase
      .from("audit_logs")
      .select("id, action, target_table, created_at, actor:profiles!audit_logs_actor_id_fkey(full_name)")
      .order("created_at", { ascending: false })
      .limit(10),
    supabase
      .from("bookings")
      .select(
        "id, booking_number, event_date, total_amount, status, created_at, couple:profiles!bookings_couple_id_fkey(full_name), partner:partner_profiles!bookings_partner_id_fkey(business_name), proposal:proposals!bookings_proposal_id_fkey(title)",
      )
      .order("created_at", { ascending: false })
      .limit(8),
    supabase
      .from("support_tickets")
      .select("id, subject, category, status, created_at, profiles!support_tickets_user_id_fkey(full_name)")
      .in("status", ["open", "pending"])
      .order("created_at", { ascending: false })
      .limit(6),
  ]);

  const couplesRows60 = (couplesSince60.data ?? []) as { created_at: string }[];
  const couplesNew30 = couplesRows60.filter((r) => r.created_at >= cutoff30).length;
  const couplesNewPrev30 = couplesRows60.length - couplesNew30;

  const partnersRows60 = (partnersReviewedSince60.data ?? []) as { created_at: string }[];
  const partnersNew30 = partnersRows60.filter((r) => r.created_at >= cutoff30).length;
  const partnersNewPrev30 = partnersRows60.length - partnersNew30;

  const bookingsRows60 = (bookingsSince60.data ?? []) as { created_at: string; total_amount: number; status: BookingStatus }[];
  const bookingsRows30 = bookingsRows60.filter((r) => r.created_at >= cutoff30);
  const bookingsRowsPrev30 = bookingsRows60.filter((r) => r.created_at < cutoff30);
  const bookings30Count = bookingsRows30.length;
  const bookingsPrev30Count = bookingsRowsPrev30.length;

  const revenueStatuses: BookingStatus[] = ["confirmed", "completed"];
  const volume30 = bookingsRows30
    .filter((r) => revenueStatuses.includes(r.status))
    .reduce((sum, r) => sum + Number(r.total_amount), 0);
  const volumePrev30 = bookingsRowsPrev30
    .filter((r) => revenueStatuses.includes(r.status))
    .reduce((sum, r) => sum + Number(r.total_amount), 0);

  const kpis = [
    {
      icon: <UsersIcon />,
      label: "Casais registados",
      value: (couples.count ?? 0).toLocaleString("pt-PT"),
      deltaPct: deltaPct(couplesNew30, couplesNewPrev30),
      trend: bucketize(couplesRows60, 8, PERIOD_DAYS * 2, since60),
    },
    {
      icon: <StoreIcon />,
      label: "Parceiros publicados",
      value: (publishedPartners.count ?? 0).toLocaleString("pt-PT"),
      deltaPct: deltaPct(partnersNew30, partnersNewPrev30),
      trend: bucketize(partnersRows60, 8, PERIOD_DAYS * 2, since60),
      href: "/partners?status=published",
    },
    {
      icon: <CalendarIcon />,
      label: "Reservas (30 dias)",
      value: bookings30Count.toLocaleString("pt-PT"),
      deltaPct: deltaPct(bookings30Count, bookingsPrev30Count),
      trend: bucketize(bookingsRows30, 8, PERIOD_DAYS, since30),
      href: "/bookings",
    },
    {
      icon: <CoinIcon />,
      label: "Volume de reservas (30 dias)",
      value: `${volume30.toLocaleString("pt-PT")} €`,
      deltaPct: deltaPct(volume30, volumePrev30),
      trend: bucketizeSum(
        bookingsRows30.filter((r) => revenueStatuses.includes(r.status)).map((r) => ({ created_at: r.created_at, amount: Number(r.total_amount) })),
        8,
        PERIOD_DAYS,
        since30,
      ),
    },
  ];

  const bookingsRows365 = (bookingsSince365.data ?? []) as { created_at: string }[];

  const statusCounts: Record<string, number> = {
    confirmed: 0,
    awaiting_deposit: 0,
    completed: 0,
    cancelled: 0,
    expired: 0,
    disputed: 0,
  };
  for (const r of bookingsRows30) {
    if (r.status === "cancelled_by_couple" || r.status === "cancelled_by_partner") statusCounts.cancelled += 1;
    else if (r.status === "payment_overdue") statusCounts.disputed += 1;
    else if (r.status in statusCounts) statusCounts[r.status] += 1;
  }
  const donutSlices = [
    { label: "Confirmadas", value: statusCounts.confirmed, color: DONUT_COLORS.confirmed },
    { label: "A aguardar sinal", value: statusCounts.awaiting_deposit, color: DONUT_COLORS.awaiting_deposit },
    { label: "Concluídas", value: statusCounts.completed, color: DONUT_COLORS.completed },
    { label: "Canceladas", value: statusCounts.cancelled, color: DONUT_COLORS.cancelled },
    { label: "Expiradas", value: statusCounts.expired, color: DONUT_COLORS.expired },
    { label: "Disputa / atraso", value: statusCounts.disputed, color: DONUT_COLORS.disputed },
  ];

  const expiring = (expiringHolds.data ?? []) as ExpiringBooking[];
  const stale = (stalePartners.data ?? []) as StalePartner[];
  const flagged = (flaggedBookings.data ?? []) as FlaggedBooking[];
  const urgentCount = expiring.length + stale.length + flagged.length;

  const entries = (activity.data ?? []) as unknown as ActivityEntry[];
  const recent = (recentBookings.data ?? []) as unknown as RecentBooking[];
  const supportTicketRows = (openSupportTickets.data ?? []) as unknown as SupportTicketRow[];

  const funnel = [
    { label: "Pedidos de orçamento", value: quoteRequests.count ?? 0 },
    { label: "Propostas enviadas", value: proposalsSent.count ?? 0 },
    { label: "Propostas aceites", value: proposalsAccepted.count ?? 0 },
    { label: "Reservas criadas", value: bookingsTotal.count ?? 0 },
    { label: "Reservas confirmadas", value: confirmedBookingsTotal.count ?? 0 },
  ];

  const firstName = fullName.split(" ")[0];

  const urgentPanel =
    urgentCount === 0 ? (
      <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>Nada a precisar de atenção imediata.</p>
    ) : (
      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
        {expiring.map((b) => (
          <li key={b.id} style={{ fontSize: 14 }}>
            <Link href={`/bookings/${b.id}`} style={{ fontWeight: 600 }}>
              {b.booking_number}
            </Link>{" "}
            — janela de sinal expira em {new Date(b.hold_expires_at).toLocaleString("pt-PT")}
          </li>
        ))}
        {stale.map((p) => (
          <li key={p.id} style={{ fontSize: 14 }}>
            <Link href={`/partners/${p.id}`} style={{ fontWeight: 600 }}>
              {p.business_name}
            </Link>{" "}
            — a aguardar aprovação desde {new Date(p.submitted_at).toLocaleDateString("pt-PT")} (
            {STALE_APPROVAL_DAYS}+ dias)
          </li>
        ))}
        {flagged.map((b) => (
          <li key={b.id} style={{ fontSize: 14 }}>
            <Link href={`/bookings/${b.id}`} style={{ fontWeight: 600 }}>
              {b.booking_number}
            </Link>{" "}
            — {b.status === "disputed" ? "em disputa" : "pagamento em atraso"}
          </li>
        ))}
      </ul>
    );

  const quickActionsPanel = (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        <QuickAction href="/partners?status=pending_review" label="Aprovar parceiro" />
        <QuickAction href="/categories" label="Nova categoria" />
      </div>

      {(pendingPartners.count ?? 0) > 0 && (
        <div style={{ background: "var(--status-pending-bg)", borderRadius: 12, padding: 16 }}>
          <h3 style={{ fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Parceiros aguardam aprovação</h3>
          <p style={{ fontSize: 13, color: "var(--ink-muted)", marginBottom: 12 }}>
            {pendingPartners.count} parceiro{pendingPartners.count === 1 ? "" : "s"} a aguardar aprovação
          </p>
          <Link
            href="/partners?status=pending_review"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 13,
              fontWeight: 600,
              background: "var(--accent)",
              color: "var(--surface)",
              padding: "8px 14px",
              borderRadius: 999,
            }}
          >
            Rever parceiros →
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", flex: 1, minHeight: 0 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexShrink: 0, marginBottom: 18 }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 600 }}>Olá, {firstName}!</h1>
          <p style={{ color: "var(--ink-muted)", marginTop: 4, fontSize: 14, fontWeight: 400 }}>
            Aqui está o que está a acontecer na plataforma hoje.
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          {adminRole === "super_admin" && maintenance && (
            <MaintenanceSwitch
              couple={maintenance.maintenance_mode_couple}
              partner={maintenance.maintenance_mode_partner}
            />
          )}
          <LiveRefresh intervalSeconds={20} />
        </div>
      </div>

      <DashboardGrid
        items={[
          ...kpis.map((kpi, i) => ({
            id: `kpi-${i}`,
            content: <KpiCard key={kpi.label} {...kpi} />,
            defaultLayout: { x: i * 3, y: 0, w: 3, h: 6 },
          })),
          {
            id: "reservas-chart",
            defaultLayout: { x: 0, y: 6, w: 5, h: 11 },
            content: (
              <section style={{ background: "var(--surface)", borderRadius: 16, boxShadow: "var(--shadow-card)", padding: 20, height: "100%", overflow: "hidden" }}>
                <BookingsBarChart rows={bookingsRows365} nowMs={nowMs} />
              </section>
            ),
          },
          {
            id: "estado-donut",
            defaultLayout: { x: 5, y: 6, w: 3, h: 11 },
            content: (
              <section
                style={{
                  background: "var(--surface)",
                  borderRadius: 16,
                  boxShadow: "var(--shadow-card)",
                  padding: 20,
                  height: "100%",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12, flexShrink: 0 }}>Estado das reservas</h2>
                <div style={{ flex: 1, minHeight: 0 }}>
                  <StatusDonut slices={donutSlices} />
                </div>
              </section>
            ),
          },
          {
            id: "atividade-suporte",
            defaultLayout: { x: 8, y: 6, w: 4, h: 11 },
            content: (
              <TabbedCard
                height="100%"
                tabs={[
                  {
                    key: "atividade",
                    label: "Atividade recente",
                    content: (
                      <div style={{ overflowY: "auto", maxHeight: 190 }}>
                        {entries.length === 0 ? (
                          <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>Sem atividade registada ainda.</p>
                        ) : (
                          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                            {entries.map((entry) => {
                              const actor = one(entry.actor);
                              return (
                                <li key={entry.id} style={{ fontSize: 13 }}>
                                  <span style={{ fontWeight: 600 }}>{actor?.full_name ?? "Admin"}</span> {entry.action} (
                                  {entry.target_table})
                                  <br />
                                  <span style={{ color: "var(--ink-muted)", fontSize: 12 }}>
                                    {new Date(entry.created_at).toLocaleString("pt-PT")}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    ),
                  },
                  {
                    key: "suporte",
                    label: "Suporte",
                    content: (
                      <div style={{ overflowY: "auto", maxHeight: 190 }}>
                        {supportTicketRows.length === 0 ? (
                          <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>Sem pedidos por resolver.</p>
                        ) : (
                          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                            {supportTicketRows.map((t) => {
                              const author = one(t.profiles);
                              return (
                                <li key={t.id} style={{ fontSize: 13 }}>
                                  <Link href="/support" style={{ fontWeight: 600, color: "var(--ink)" }}>
                                    {t.subject}
                                  </Link>
                                  {t.category === "dispute_delay" && (
                                    <span
                                      style={{
                                        marginLeft: 6,
                                        fontSize: 10,
                                        fontWeight: 800,
                                        padding: "2px 7px",
                                        borderRadius: 999,
                                        background: "var(--status-rejected-bg, #fde2e2)",
                                        color: "var(--status-rejected-fg)",
                                      }}
                                    >
                                      Disputa/atraso
                                    </span>
                                  )}
                                  <br />
                                  <span style={{ color: "var(--ink-muted)", fontSize: 12 }}>
                                    {author?.full_name ?? "Utilizador"} · {new Date(t.created_at).toLocaleString("pt-PT")}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        )}
                      </div>
                    ),
                  },
                ]}
              />
            ),
          },
          {
            id: "reservas-recentes-funil",
            defaultLayout: { x: 0, y: 17, w: 7, h: 13 },
            content: (
              <TabbedCard
                height="100%"
                tabs={[
                  {
                    key: "recentes",
                    label: "Reservas recentes",
                    content: (
                      <>
                        <div style={{ display: "flex", justifyContent: "flex-end", marginBottom: 12 }}>
                          <Link
                            href="/bookings"
                            style={{
                              fontSize: 13,
                              fontWeight: 600,
                              border: "1px solid var(--border-muted)",
                              borderRadius: 10,
                              padding: "7px 14px",
                            }}
                          >
                            Ver todas as reservas
                          </Link>
                        </div>
                        {recent.length === 0 ? (
                          <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>Sem reservas ainda.</p>
                        ) : (
                          <table style={{ width: "100%", borderCollapse: "collapse" }}>
                            <thead>
                              <tr style={{ textAlign: "left", fontSize: 12, color: "var(--ink-muted)" }}>
                                <th style={{ padding: "6px 0" }}>ID</th>
                                <th>Casal</th>
                                <th>Parceiro</th>
                                <th>Serviço</th>
                                <th>Data</th>
                                <th>Valor</th>
                                <th>Estado</th>
                              </tr>
                            </thead>
                            <tbody>
                              {recent.map((b) => {
                                const couple = one(b.couple);
                                const partner = one(b.partner);
                                const proposal = one(b.proposal);
                                return (
                                  <tr key={b.id} style={{ borderTop: "1px solid var(--border-muted)", fontSize: 13 }}>
                                    <td style={{ padding: "16px 0" }}>
                                      <Link href={`/bookings/${b.id}`} style={{ fontWeight: 600 }}>
                                        {b.booking_number}
                                      </Link>
                                    </td>
                                    <td>{couple?.full_name ?? "—"}</td>
                                    <td>{partner?.business_name ?? "—"}</td>
                                    <td>{proposal?.title ?? "—"}</td>
                                    <td style={{ color: "var(--ink-muted)" }}>
                                      {new Date(b.event_date).toLocaleDateString("pt-PT")}
                                    </td>
                                    <td>{Number(b.total_amount).toLocaleString("pt-PT")} €</td>
                                    <td>
                                      <BookingStatusBadge status={b.status} />
                                    </td>
                                  </tr>
                                );
                              })}
                            </tbody>
                          </table>
                        )}
                      </>
                    ),
                  },
                  {
                    key: "funil",
                    label: "Funil de reservas",
                    content: (
                      <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                        {funnel.map((step) => (
                          <div key={step.label} style={{ textAlign: "center" }}>
                            <div style={{ fontFamily: "var(--font-serif)", fontSize: 24 }}>{step.value}</div>
                            <div style={{ fontSize: 12, color: "var(--ink-muted)" }}>{step.label}</div>
                          </div>
                        ))}
                      </div>
                    ),
                  },
                ]}
              />
            ),
          },
          {
            id: "urgentes-acoes",
            defaultLayout: { x: 7, y: 17, w: 5, h: 13 },
            content: (
              <TabbedCard
                height="100%"
                tabs={[
                  {
                    key: "urgent",
                    label: "Assuntos urgentes",
                    badge: urgentCount,
                    highlight: urgentCount > 0,
                    content: urgentPanel,
                  },
                  { key: "actions", label: "Ações rápidas", content: quickActionsPanel },
                ]}
                defaultTabKey={urgentCount > 0 ? "urgent" : "actions"}
              />
            ),
          },
        ]}
      />
    </div>
  );
}

function QuickAction({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 12px",
        borderRadius: 12,
        border: "1px solid var(--border-muted)",
        fontSize: 13,
        fontWeight: 600,
      }}
    >
      {label}
    </Link>
  );
}

function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M15.8 14.2c2.4.3 4.2 2.3 4.2 5" />
    </svg>
  );
}

function StoreIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 9V5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5V9" />
      <path d="M3.5 9h17l-.9 4.5a2 2 0 0 1-2 1.6h-11.2a2 2 0 0 1-2-1.6L3.5 9Z" />
      <path d="M6 15v4.5A.5.5 0 0 0 6.5 20h11a.5.5 0 0 0 .5-.5V15" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </svg>
  );
}

function CoinIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v8M9.3 15.2c.4.7 1.4 1.2 2.7 1.2 1.7 0 3-.8 3-2.1 0-3-5.5-1.4-5.5-4.3 0-1.3 1.3-2.1 3-2.1 1.3 0 2.3.5 2.7 1.2" />
    </svg>
  );
}
