import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { DISPUTE_REASONS, DISPUTE_RESOLUTIONS } from "@/lib/dispute-labels";

// Disputas (deixou de ser "Em breve", 2026-10-20 — migração 109).
type Row = {
  id: string;
  booking_id: string;
  opened_by_role: "couple" | "partner";
  reason: string;
  status: "open" | "resolved";
  resolution: string | null;
  refund_amount: number | null;
  created_at: string;
  resolved_at: string | null;
  bookings: {
    booking_number: string;
    partner_profiles: { business_name: string } | null;
    weddings: { partner_name_1: string | null; partner_name_2: string | null } | null;
  } | null;
};

const FILTERS = [
  { value: "open", label: "Por decidir" },
  { value: "resolved", label: "Resolvidas" },
  { value: "all", label: "Todas" },
];

export default async function DisputesPage({ searchParams }: PageProps<"/disputes">) {
  await requireAdmin();
  const params = await searchParams;
  const status = typeof params.status === "string" ? params.status : "open";

  const supabase = await createClient();
  let q = supabase
    .from("disputes")
    .select(
      "id, booking_id, opened_by_role, reason, status, resolution, refund_amount, created_at, resolved_at, bookings(booking_number, partner_profiles(business_name), weddings(partner_name_1, partner_name_2))",
    )
    .order("created_at", { ascending: status === "open" });
  if (status !== "all") q = q.eq("status", status);
  const { data, error } = await q;
  const rows = (data ?? []) as unknown as Row[];

  return (
    <div style={{ overflowY: "auto", minHeight: 0 }}>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>Disputas</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 4 }}>
        Conflitos entre organizadores e parceiros sobre uma reserva. Enquanto a disputa está aberta, a reserva fica
        &quot;Em disputa&quot;.
      </p>

      <div style={{ display: "flex", gap: 8, margin: "24px 0", flexWrap: "wrap" }}>
        {FILTERS.map((f) => (
          <Link
            key={f.value}
            href={`/disputes?status=${f.value}`}
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

      {error && (
        <p style={{ color: "var(--status-rejected-fg)" }}>
          Não foi possível carregar as disputas (a migração 109 já foi aplicada?).
        </p>
      )}
      {!error && rows.length === 0 && <p style={{ color: "var(--ink-muted)" }}>Sem disputas neste filtro.</p>}

      {rows.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13 }}>
          <thead>
            <tr style={{ textAlign: "left", color: "var(--ink-muted)" }}>
              <th style={{ padding: "8px 0" }}>Reserva</th>
              <th>Organizador</th>
              <th>Aberta por</th>
              <th>Motivo</th>
              <th>Estado</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((d) => {
              const w = d.bookings?.weddings;
              const couple = [w?.partner_name_1, w?.partner_name_2].filter(Boolean).join(" & ") || "Organizador";
              return (
                <tr key={d.id} style={{ borderTop: "1px solid var(--border-muted)" }}>
                  <td style={{ padding: "12px 0" }}>
                    <Link href={`/disputes/${d.id}`} style={{ fontWeight: 600 }}>
                      {d.bookings?.booking_number ?? "—"} · {d.bookings?.partner_profiles?.business_name ?? "Parceiro"}
                    </Link>
                  </td>
                  <td>{couple}</td>
                  <td>{d.opened_by_role === "couple" ? "Organizador" : "Parceiro"}</td>
                  <td>{DISPUTE_REASONS[d.reason] ?? d.reason}</td>
                  <td>
                    {d.status === "open" ? (
                      <span style={badge("var(--status-rejected-bg)", "var(--status-rejected-fg)")}>Por decidir</span>
                    ) : (
                      <span style={badge("var(--status-published-bg)", "var(--status-published-fg)")}>
                        {DISPUTE_RESOLUTIONS[d.resolution ?? ""] ?? "Resolvida"}
                        {d.refund_amount ? ` · ${Number(d.refund_amount).toLocaleString("pt-PT", { minimumFractionDigits: 2 })} €` : ""}
                      </span>
                    )}
                  </td>
                  <td style={{ color: "var(--ink-muted)" }}>{new Date(d.created_at).toLocaleDateString("pt-PT")}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

function badge(bg: string, fg: string) {
  return { background: bg, color: fg, borderRadius: 999, padding: "4px 10px", fontSize: 12, fontWeight: 600 };
}
