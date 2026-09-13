import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { PartnerStatusBadge } from "@/components/PartnerStatusBadge";
import type { PartnerProfile, PartnerProfileStatus } from "@/lib/types";

const FILTERS: { value: PartnerProfileStatus; label: string }[] = [
  { value: "pending_review", label: "A aguardar" },
  { value: "changes_required", label: "Alterações pedidas" },
  { value: "published", label: "Publicados" },
  { value: "rejected", label: "Rejeitados" },
  { value: "suspended", label: "Suspensos" },
];

// RN02 (admin-web/partners/requirements.md): 'draft' never appears here,
// so it's deliberately absent from FILTERS above.
export default async function PartnersPage({
  searchParams,
}: PageProps<"/partners">) {
  await requireAdmin();
  const params = await searchParams;
  const status = isStatus(params.status) ? params.status : "pending_review";

  const supabase = await createClient();
  const { data: partners, error } = await supabase
    .from("partner_profiles")
    .select("id, business_name, status, submitted_at")
    .eq("status", status)
    .order("submitted_at", { ascending: true });

  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>
        Parceiros
      </h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 4 }}>
        Rever, aprovar e gerir perfis do Marketplace.
      </p>

      <div style={{ display: "flex", gap: 8, margin: "24px 0" }}>
        {FILTERS.map((f) => (
          <Link
            key={f.value}
            href={`/partners?status=${f.value}`}
            style={{
              padding: "8px 14px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              background:
                status === f.value ? "var(--ink)" : "var(--surface)",
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
          Não foi possível carregar a lista.
        </p>
      )}

      {!error && partners?.length === 0 && (
        <p style={{ color: "var(--ink-muted)" }}>
          Sem parceiros neste estado.
        </p>
      )}

      {!error && partners && partners.length > 0 && (
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ textAlign: "left", fontSize: 13, color: "var(--ink-muted)" }}>
              <th style={{ padding: "8px 0" }}>Parceiro</th>
              <th>Estado</th>
              <th>Submetido em</th>
            </tr>
          </thead>
          <tbody>
            {(partners as Pick<PartnerProfile, "id" | "business_name" | "status" | "submitted_at">[]).map(
              (p) => (
                <tr
                  key={p.id}
                  style={{ borderTop: "1px solid var(--border-muted)" }}
                >
                  <td style={{ padding: "12px 0" }}>
                    <Link href={`/partners/${p.id}`} style={{ fontWeight: 600 }}>
                      {p.business_name}
                    </Link>
                  </td>
                  <td>
                    <PartnerStatusBadge status={p.status} />
                  </td>
                  <td style={{ color: "var(--ink-muted)", fontSize: 13 }}>
                    {p.submitted_at
                      ? new Date(p.submitted_at).toLocaleDateString("pt-PT")
                      : "—"}
                  </td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      )}
    </div>
  );
}

function isStatus(value: unknown): value is PartnerProfileStatus {
  return (
    typeof value === "string" &&
    [
      "draft",
      "pending_review",
      "changes_required",
      "published",
      "rejected",
      "suspended",
    ].includes(value)
  );
}
