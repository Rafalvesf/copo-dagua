import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { EVENT_TYPES, eventStatusLabel, eventTypeLabel } from "@/lib/event-types";

// Eventos (antes "Casamentos", 2026-10-20): a app já tem vários tipos de
// evento — batizados, aniversários, empresas… — com prefixo próprio no
// número das reservas.
type Row = {
  id: string;
  partner_name_1: string | null;
  partner_name_2: string | null;
  wedding_date: string | null;
  location: string | null;
  status: string;
  event_type: string | null;
  event_type_other: string | null;
  bookings: { count: number }[];
  guests: { count: number }[];
};

export default async function WeddingsPage({ searchParams }: PageProps<"/weddings">) {
  await requireAdmin();
  const params = await searchParams;
  const type = typeof params.type === "string" ? params.type : "all";

  const supabase = await createClient();
  let q = supabase
    .from("weddings")
    .select("id, partner_name_1, partner_name_2, wedding_date, location, status, event_type, event_type_other, bookings(count), guests(count)")
    .order("created_at", { ascending: false });
  if (type !== "all") q = q.eq("event_type", type);
  const { data, error } = await q;
  const rows = (data ?? []) as unknown as Row[];

  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>Eventos</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 4 }}>Todos os eventos criados pelos organizadores na app.</p>

      <div style={{ display: "flex", gap: 8, margin: "20px 0", flexWrap: "wrap" }}>
        {[["all", "Todos"], ...Object.entries(EVENT_TYPES).map(([k, v]) => [k, v.label])].map(([value, label]) => (
          <Link
            key={value}
            href={value === "all" ? "/weddings" : `/weddings?type=${value}`}
            style={{
              padding: "7px 13px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              background: type === value ? "var(--ink)" : "var(--surface)",
              color: type === value ? "var(--surface)" : "var(--ink)",
              border: "1px solid var(--border-muted)",
            }}
          >
            {label}
          </Link>
        ))}
      </div>

      {error && <p style={{ color: "var(--status-rejected-fg)" }}>Não foi possível carregar a lista.</p>}
      {!error && rows.length === 0 && <p style={{ color: "var(--ink-muted)" }}>Sem eventos neste filtro.</p>}

      {rows.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", fontSize: 13, color: "var(--ink-muted)" }}>
              <th style={{ padding: "8px 0" }}>Organizadores</th>
              <th>Tipo</th>
              <th>Data</th>
              <th>Local</th>
              <th>Convidados</th>
              <th>Reservas</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((w) => (
              <tr key={w.id} style={{ borderTop: "1px solid var(--border-muted)" }}>
                <td style={{ padding: "12px 0" }}>
                  <Link href={`/weddings/${w.id}`} style={{ fontWeight: 600 }}>
                    {[w.partner_name_1, w.partner_name_2].filter(Boolean).join(" & ") || "Sem nome"}
                  </Link>
                </td>
                <td style={{ fontSize: 13 }}>
                  {eventTypeLabel(w.event_type, w.event_type_other)}{" "}
                  <span style={{ color: "var(--ink-muted)" }}>· {EVENT_TYPES[w.event_type ?? ""]?.prefix ?? "EVT"}</span>
                </td>
                <td style={{ fontSize: 13 }}>{w.wedding_date ? new Date(w.wedding_date).toLocaleDateString("pt-PT") : "—"}</td>
                <td style={{ fontSize: 13 }}>{w.location ?? "—"}</td>
                <td style={{ fontSize: 13 }}>{w.guests?.[0]?.count ?? 0}</td>
                <td style={{ fontSize: 13 }}>{w.bookings?.[0]?.count ?? 0}</td>
                <td style={{ fontSize: 13 }}>{eventStatusLabel(w.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
