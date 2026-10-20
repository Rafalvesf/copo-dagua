import Link from "next/link";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { BookingStatusBadge } from "@/components/BookingStatusBadge";
import { PaymentStatusBadge } from "@/components/PaymentStatusBadge";
import { ResolveDisputeForm } from "@/components/RefundForms";
import { DISPUTE_REASONS, DISPUTE_RESOLUTIONS } from "@/lib/dispute-labels";
import { resolveDispute } from "../../refunds/actions";
import type { BookingStatus, PaymentStatus } from "@/lib/types";

type Dispute = {
  id: string;
  booking_id: string;
  opened_by_role: "couple" | "partner";
  reason: string;
  description: string;
  status: "open" | "resolved";
  resolution: string | null;
  refund_amount: number | null;
  admin_note: string | null;
  created_at: string;
  resolved_at: string | null;
  opener: { full_name: string } | null;
};

export default async function DisputeDetailPage(props: PageProps<"/disputes/[id]">) {
  await requireAdmin();
  const { id } = await props.params;
  const supabase = await createClient();

  const { data } = await supabase
    .from("disputes")
    .select("*, opener:profiles!disputes_opened_by_fkey(full_name)")
    .eq("id", id)
    .maybeSingle();
  if (!data) notFound();
  const d = data as unknown as Dispute;

  const [{ data: booking }, { data: pays }, { data: events }, { data: settings }] = await Promise.all([
    supabase
      .from("bookings")
      .select(
        "id, booking_number, status, event_date, total_amount, deposit_amount, partner_id, couple_id, partner_profiles(business_name), weddings(partner_name_1, partner_name_2), proposals(title, deposit_refundable)",
      )
      .eq("id", d.booking_id)
      .single(),
    supabase
      .from("payments")
      .select("id, type, amount, refunded_amount, status, paid_at")
      .eq("booking_id", d.booking_id)
      .order("created_at"),
    supabase
      .from("booking_events")
      .select("id, event_type, actor_type, created_at")
      .eq("booking_id", d.booking_id)
      .order("created_at", { ascending: false }),
    supabase.from("platform_settings").select("platform_commission_percentage").eq("id", 1).single(),
  ]);

  const b = booking as unknown as {
    id: string;
    booking_number: string;
    status: BookingStatus;
    event_date: string;
    total_amount: number;
    partner_id: string;
    couple_id: string;
    partner_profiles: { business_name: string } | null;
    weddings: { partner_name_1: string | null; partner_name_2: string | null } | null;
    proposals: { title: string; deposit_refundable: boolean } | null;
  };
  const pct = Number(settings?.platform_commission_percentage ?? 0);
  const paidByCouple = (a: number) => Math.round(a * (100 + pct)) / 100;
  const payments = (pays ?? []) as { id: string; type: string; amount: number; refunded_amount: number; status: PaymentStatus; paid_at: string | null }[];
  const refundable = payments
    .filter((p) => p.status === "paid")
    .reduce((a, p) => a + Math.max(0, paidByCouple(Number(p.amount)) - Number(p.refunded_amount)), 0);
  const couple = [b?.weddings?.partner_name_1, b?.weddings?.partner_name_2].filter(Boolean).join(" & ") || "Organizador";
  const partnerName = b?.partner_profiles?.business_name ?? "Parceiro";

  return (
    <div style={{ overflowY: "auto", minHeight: 0 }}>
      <Link href="/disputes" style={{ color: "var(--ink-muted)", fontSize: 13 }}>
        ← Disputas
      </Link>
      <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "16px 0", flexWrap: "wrap" }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 26 }}>
          Disputa · {b?.booking_number} · {partnerName}
        </h1>
        {b && <BookingStatusBadge status={b.status} />}
      </div>

      <Section title="O que foi reportado">
        <Field label="Aberta por" value={`${d.opened_by_role === "couple" ? "Organizador" : "Parceiro"} — ${d.opener?.full_name ?? ""}`} />
        <Field label="Motivo" value={DISPUTE_REASONS[d.reason] ?? d.reason} />
        <Field label="Data" value={new Date(d.created_at).toLocaleString("pt-PT")} />
        <p style={{ fontSize: 14, whiteSpace: "pre-wrap", background: "var(--status-pending-bg)", padding: 12, borderRadius: 12 }}>
          {d.description}
        </p>
      </Section>

      <Section title="Reserva">
        <Field label="Reserva" value="" link={{ href: `/bookings/${d.booking_id}`, label: `${b?.booking_number} · ${partnerName}` }} />
        <Field label="Organizador" value="" link={{ href: `/users/${b?.couple_id}`, label: couple }} />
        <Field label="Parceiro" value="" link={{ href: `/partners/${b?.partner_id}`, label: partnerName }} />
        <Field label="Serviço" value={b?.proposals?.title ?? "—"} />
        <Field label="Data do evento" value={b ? new Date(b.event_date).toLocaleDateString("pt-PT") : "—"} />
        <Field label="Valor total" value={b ? eur(Number(b.total_amount)) : "—"} />
        <Field label="Sinal" value={b?.proposals?.deposit_refundable === false ? "Não reembolsável (escolha do parceiro)" : "Reembolsável"} />
      </Section>

      <Section title="Pagamentos">
        {payments.length === 0 ? (
          <p style={muted}>Sem pagamentos.</p>
        ) : (
          payments.map((p) => (
            <div key={p.id} style={{ display: "flex", gap: 12, alignItems: "center", fontSize: 14, flexWrap: "wrap" }}>
              <span style={{ minWidth: 90 }}>{p.type === "deposit" ? "Sinal" : "Restante"}</span>
              <span>{eur(paidByCouple(Number(p.amount)))}</span>
              <PaymentStatusBadge status={p.status} />
              {Number(p.refunded_amount) > 0 && <span style={muted}>devolvido {eur(Number(p.refunded_amount))}</span>}
            </div>
          ))
        )}
      </Section>

      <Section title="Decisão">
        {d.status === "open" ? (
          <ResolveDisputeForm disputeId={d.id} maxAmount={Math.round(refundable * 100) / 100} action={resolveDispute} />
        ) : (
          <>
            <Field label="Decisão" value={DISPUTE_RESOLUTIONS[d.resolution ?? ""] ?? "—"} />
            {d.refund_amount != null && <Field label="Devolvido" value={eur(Number(d.refund_amount))} />}
            <Field label="Fechada em" value={d.resolved_at ? new Date(d.resolved_at).toLocaleString("pt-PT") : "—"} />
            <p style={{ fontSize: 14, whiteSpace: "pre-wrap" }}>{d.admin_note}</p>
          </>
        )}
      </Section>

      <Section title="Histórico da reserva">
        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 6 }}>
          {(events ?? []).map((e) => (
            <li key={e.id as string} style={{ fontSize: 13 }}>
              <span style={muted}>{new Date(e.created_at as string).toLocaleString("pt-PT")} —</span> {e.event_type as string}{" "}
              <span style={muted}>({e.actor_type as string})</span>
            </li>
          ))}
        </ul>
      </Section>
    </div>
  );
}

function eur(n: number) {
  return `${n.toLocaleString("pt-PT", { minimumFractionDigits: 2, maximumFractionDigits: 2 })} €`;
}
const muted = { color: "var(--ink-muted)", fontSize: 13 };

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section style={{ background: "var(--surface)", borderRadius: 16, boxShadow: "var(--shadow-card)", padding: 20, marginBottom: 16 }}>
      <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{children}</div>
    </section>
  );
}

function Field({ label, value, link }: { label: string; value: string; link?: { href: string; label: string } }) {
  return (
    <div style={{ display: "flex", gap: 12, fontSize: 14, flexWrap: "wrap" }}>
      <span style={{ color: "var(--ink-muted)", minWidth: 140 }}>{label}</span>
      {link ? (
        <Link href={link.href} style={{ fontWeight: 600 }}>
          {link.label}
        </Link>
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
}
