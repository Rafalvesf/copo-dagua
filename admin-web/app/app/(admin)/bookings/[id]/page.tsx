import Link from "next/link";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { BookingStatusBadge } from "@/components/BookingStatusBadge";
import { SimpleActionButton, AmountVerificationForm } from "@/components/ActionButtons";
import { BOOKING_ACTIONS_BY_STATUS } from "@/lib/types";
import { confirmDeposit, completeBooking } from "./actions";
import type { Booking, BookingEvent } from "@/lib/types";

export default async function BookingDetailPage(props: PageProps<"/bookings/[id]">) {
  await requireAdmin();
  const { id } = await props.params;

  const supabase = await createClient();
  const { data: booking } = await supabase.from("bookings").select("*").eq("id", id).single();

  if (!booking) {
    notFound();
  }

  const b = booking as Booking;

  const [{ data: events }, { data: couple }, { data: partner }] = await Promise.all([
    supabase.from("booking_events").select("*").eq("booking_id", id).order("created_at", { ascending: false }),
    supabase.from("profiles").select("id, full_name").eq("id", b.couple_id).maybeSingle(),
    supabase.from("partner_profiles").select("id, business_name").eq("id", b.partner_id).maybeSingle(),
  ]);

  const entries = (events ?? []) as BookingEvent[];
  const availableActions = BOOKING_ACTIONS_BY_STATUS[b.status];

  return (
    <div>
      <Link href="/bookings" style={{ color: "var(--ink-muted)", fontSize: 13 }}>
        ← Reservas
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "16px 0" }}>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 26 }}>{b.booking_number}</h1>
        <BookingStatusBadge status={b.status} />
      </div>

      {availableActions.length > 0 && (
        <div
          style={{
            background: "var(--status-pending-bg)",
            color: "var(--status-pending-fg)",
            borderRadius: 12,
            padding: "10px 16px",
            fontSize: 13,
            marginBottom: 16,
          }}
        >
          As ações abaixo são um registo administrativo — não processam pagamento
          real (sem Stripe ainda), mas o valor introduzido é cruzado
          automaticamente com o sinal esperado antes de avançar. Ver{" "}
          <code>backend/bookings/api.md</code>.
        </div>
      )}

      <Section title="Detalhe">
        <Field label="Casal" value="" link={couple ? { href: `/users/${couple.id}`, label: couple.full_name } : undefined} />
        <Field
          label="Parceiro"
          value=""
          link={partner ? { href: `/partners/${partner.id}`, label: partner.business_name } : undefined}
        />
        <Field label="Data do evento" value={new Date(b.event_date).toLocaleDateString("pt-PT")} />
        <Field label="Valor total" value={`${b.total_amount.toLocaleString("pt-PT")} €`} />
        <Field label="Sinal" value={`${b.deposit_amount.toLocaleString("pt-PT")} €`} />
        {b.status === "awaiting_deposit" && (
          <Field label="Janela expira em" value={new Date(b.hold_expires_at).toLocaleString("pt-PT")} />
        )}
      </Section>

      <Section title="Histórico">
        {entries.length === 0 ? (
          <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>Sem eventos registados.</p>
        ) : (
          <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            {entries.map((e) => (
              <li key={e.id} style={{ fontSize: 14 }}>
                <span style={{ color: "var(--ink-muted)" }}>
                  {new Date(e.created_at).toLocaleString("pt-PT")} —
                </span>{" "}
                {e.event_type} <span style={{ color: "var(--ink-muted)" }}>({e.actor_type})</span>
              </li>
            ))}
          </ul>
        )}
      </Section>

      {availableActions.length > 0 && (
        <div style={{ display: "flex", gap: 12, marginTop: 24, flexWrap: "wrap" }}>
          {availableActions.includes("confirm_deposit") && (
            <AmountVerificationForm
              id={b.id}
              idFieldName="booking_id"
              amountFieldName="amount_received"
              label="Confirmar sinal recebido"
              expectedAmount={b.deposit_amount}
              action={confirmDeposit}
            />
          )}
          {availableActions.includes("complete") && (
            <SimpleActionButton id={b.id} label="Marcar como concluída" action={completeBooking} />
          )}
        </div>
      )}
    </div>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section
      style={{
        background: "var(--surface)",
        borderRadius: 16,
        boxShadow: "var(--shadow-card)",
        padding: 20,
        marginBottom: 16,
      }}
    >
      <h2 style={{ fontSize: 14, fontWeight: 600, marginBottom: 12 }}>{title}</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{children}</div>
    </section>
  );
}

function Field({
  label,
  value,
  link,
}: {
  label: string;
  value: string;
  link?: { href: string; label: string };
}) {
  return (
    <div style={{ display: "flex", gap: 12, fontSize: 14 }}>
      <span style={{ color: "var(--ink-muted)", minWidth: 160 }}>{label}</span>
      {link ? (
        <Link href={link.href} style={{ fontWeight: 600 }}>
          {link.label} →
        </Link>
      ) : (
        <span>{value || "—"}</span>
      )}
    </div>
  );
}
