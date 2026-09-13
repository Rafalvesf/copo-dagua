import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { BookingStatusBadge } from "@/components/BookingStatusBadge";
import type { Booking, BookingStatus } from "@/lib/types";

const FILTERS: { value: BookingStatus | "all"; label: string }[] = [
  { value: "all", label: "Todas" },
  { value: "awaiting_deposit", label: "A aguardar sinal" },
  { value: "confirmed", label: "Confirmadas" },
  { value: "completed", label: "Concluídas" },
  { value: "expired", label: "Expiradas" },
];

export default async function BookingsPage({ searchParams }: PageProps<"/bookings">) {
  await requireAdmin();
  const params = await searchParams;
  const status = typeof params.status === "string" ? params.status : "all";

  const supabase = await createClient();
  let query = supabase
    .from("bookings")
    .select("id, booking_number, couple_id, partner_id, event_date, total_amount, status, created_at")
    .order("created_at", { ascending: false });

  if (status !== "all") {
    query = query.eq("status", status);
  }

  const { data: bookings, error } = await query;

  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>Reservas</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 4 }}>
        Reservas em curso na plataforma.
      </p>

      <div style={{ display: "flex", gap: 8, margin: "24px 0", flexWrap: "wrap" }}>
        {FILTERS.map((f) => (
          <Link
            key={f.value}
            href={`/bookings?status=${f.value}`}
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              background: status === f.value ? "var(--ink)" : "var(--surface)",
              color: status === f.value ? "var(--surface)" : "var(--ink)",
              border: "1px solid var(--border-muted)",
            }}
          >
            {f.label}
          </Link>
        ))}
      </div>

      {error && <p style={{ color: "var(--status-rejected-fg)" }}>Não foi possível carregar a lista.</p>}
      {!error && bookings?.length === 0 && (
        <p style={{ color: "var(--ink-muted)" }}>Sem reservas neste filtro.</p>
      )}

      {!error && bookings && bookings.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", fontSize: 13, color: "var(--ink-muted)" }}>
              <th style={{ padding: "8px 0" }}>Reserva</th>
              <th>Data do evento</th>
              <th>Valor</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {(bookings as Booking[]).map((b) => (
              <tr key={b.id} style={{ borderTop: "1px solid var(--border-muted)" }}>
                <td style={{ padding: "12px 0" }}>
                  <Link href={`/bookings/${b.id}`} style={{ fontWeight: 600 }}>
                    {b.booking_number}
                  </Link>
                </td>
                <td style={{ fontSize: 13 }}>{new Date(b.event_date).toLocaleDateString("pt-PT")}</td>
                <td style={{ fontSize: 13 }}>{b.total_amount.toLocaleString("pt-PT")} €</td>
                <td>
                  <BookingStatusBadge status={b.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
