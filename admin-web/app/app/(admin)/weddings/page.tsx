import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import type { Wedding } from "@/lib/types";

export default async function WeddingsPage() {
  await requireAdmin();

  const supabase = await createClient();
  const { data: weddings, error } = await supabase
    .from("weddings")
    .select("id, partner_name_1, partner_name_2, wedding_date, location, status")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>Casamentos</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 4 }}>
        Todos os casamentos criados na plataforma.
      </p>

      {error && <p style={{ color: "var(--status-rejected-fg)", marginTop: 24 }}>Não foi possível carregar a lista.</p>}
      {!error && weddings?.length === 0 && (
        <p style={{ color: "var(--ink-muted)", marginTop: 24 }}>Sem casamentos ainda.</p>
      )}

      {!error && weddings && weddings.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 24 }}>
          <thead>
            <tr style={{ textAlign: "left", fontSize: 13, color: "var(--ink-muted)" }}>
              <th style={{ padding: "8px 0" }}>Noivos</th>
              <th>Data</th>
              <th>Local</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {(weddings as Wedding[]).map((w) => (
              <tr key={w.id} style={{ borderTop: "1px solid var(--border-muted)" }}>
                <td style={{ padding: "12px 0" }}>
                  <Link href={`/weddings/${w.id}`} style={{ fontWeight: 600 }}>
                    {w.partner_name_1}
                    {w.partner_name_2 ? ` & ${w.partner_name_2}` : ""}
                  </Link>
                </td>
                <td style={{ fontSize: 13 }}>
                  {w.wedding_date ? new Date(w.wedding_date).toLocaleDateString("pt-PT") : "—"}
                </td>
                <td style={{ fontSize: 13 }}>{w.location ?? "—"}</td>
                <td style={{ fontSize: 13 }}>{w.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
