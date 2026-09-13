import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";

export default async function AnalyticsPage() {
  await requireAdmin();
  const supabase = await createClient();

  const [
    { count: quoteRequestsTotal },
    { count: proposalsSent },
    { count: bookingsCreated },
    { count: depositsPaid },
    { count: bookingsCompleted },
    { count: partnersPublished },
    { data: quoteRequestPartners },
    { data: proposalPartners },
    { data: bookingPartners },
  ] = await Promise.all([
    supabase.from("quote_requests").select("id", { count: "exact", head: true }),
    supabase.from("proposals").select("id", { count: "exact", head: true }),
    supabase.from("bookings").select("id", { count: "exact", head: true }),
    supabase.from("payments").select("id", { count: "exact", head: true }).eq("type", "deposit").eq("status", "paid"),
    supabase.from("bookings").select("id", { count: "exact", head: true }).eq("status", "completed"),
    supabase.from("partner_profiles").select("id", { count: "exact", head: true }).eq("status", "published"),
    supabase.from("quote_requests").select("partner_id"),
    supabase.from("proposals").select("partner_id"),
    supabase.from("bookings").select("partner_id"),
  ]);

  const couplesFunnel = [
    { label: "Pedidos de orçamento", count: quoteRequestsTotal ?? 0 },
    { label: "Propostas enviadas", count: proposalsSent ?? 0 },
    { label: "Reservas criadas (proposta aceite)", count: bookingsCreated ?? 0 },
    { label: "Sinal pago", count: depositsPaid ?? 0 },
    { label: "Reserva concluída", count: bookingsCompleted ?? 0 },
  ];

  const partnersWithLeads = new Set((quoteRequestPartners ?? []).map((r) => r.partner_id)).size;
  const partnersWithProposals = new Set((proposalPartners ?? []).map((r) => r.partner_id)).size;
  const partnersWithBookings = new Set((bookingPartners ?? []).map((r) => r.partner_id)).size;

  const partnerFunnel = [
    { label: "Parceiros publicados", count: partnersPublished ?? 0 },
    { label: "Receberam ≥1 pedido", count: partnersWithLeads },
    { label: "Enviaram ≥1 proposta", count: partnersWithProposals },
    { label: "Obtiveram ≥1 reserva", count: partnersWithBookings },
  ];

  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 600 }}>Analytics</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 4, marginBottom: 8, fontSize: 14, maxWidth: 640 }}>
        Funil de conversão calculado a partir de <code>quote_requests</code>/<code>proposals</code>/
        <code>bookings</code>/<code>payments</code> reais — sem números inventados.
      </p>
      <p style={{ color: "var(--ink-muted)", marginBottom: 24, fontSize: 13, maxWidth: 640 }}>
        As etapas anteriores ao pedido de orçamento (registo → visualizou parceiros → abriu perfil)
        não aparecem aqui: não existe ainda nenhum sistema de eventos de navegação/pesquisa
        (nem, do lado do casal, um ecrã de descoberta de parceiros ligado a dados reais) a gravar
        essa informação. Adicionar isso é um módulo próprio, não uma extensão desta página.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
        <FunnelCard title="Funil de casais" stages={couplesFunnel} />
        <FunnelCard title="Funil de parceiros" stages={partnerFunnel} />
      </div>
    </div>
  );
}

function FunnelCard({ title, stages }: { title: string; stages: { label: string; count: number }[] }) {
  const max = Math.max(...stages.map((s) => s.count), 1);
  return (
    <section
      style={{
        background: "var(--surface)",
        borderRadius: 16,
        boxShadow: "var(--shadow-card)",
        padding: 20,
      }}
    >
      <h2 style={{ fontSize: 16, fontWeight: 600, marginBottom: 16 }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {stages.map((stage, i) => {
          const previous = i === 0 ? null : stages[i - 1].count;
          const conversionPct = previous && previous > 0 ? (stage.count / previous) * 100 : null;
          const widthPct = Math.max(6, (stage.count / max) * 100);
          return (
            <div key={stage.label}>
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 4 }}>
                <span>{stage.label}</span>
                <span style={{ fontWeight: 600 }}>
                  {stage.count}
                  {conversionPct !== null && (
                    <span style={{ color: "var(--ink-muted)", fontWeight: 400 }}>
                      {" "}
                      ({conversionPct.toFixed(0)}%)
                    </span>
                  )}
                </span>
              </div>
              <div style={{ height: 8, borderRadius: 999, background: "var(--status-suspended-bg)" }}>
                <div
                  style={{
                    height: "100%",
                    width: `${widthPct}%`,
                    borderRadius: 999,
                    background: "var(--accent)",
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
