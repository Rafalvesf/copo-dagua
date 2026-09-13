import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { ResolveTicketForm } from "./resolve-form";
import type { Profile, SupportTicket, SupportTicketCategory, SupportTicketStatus } from "@/lib/types";

const FILTERS: { value: SupportTicketStatus | "all"; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "open", label: "Abertos" },
  { value: "pending", label: "A aguardar" },
  { value: "resolved", label: "Resolvidos" },
];

const STATUS_LABEL: Record<SupportTicketStatus, string> = {
  open: "Aberto",
  pending: "A aguardar resposta",
  resolved: "Resolvido",
};

const CATEGORY_LABEL: Record<SupportTicketCategory, string> = {
  general: "Geral",
  dispute_delay: "Disputa / atraso",
};

type TicketRow = SupportTicket & { profiles: Pick<Profile, "full_name" | "role"> | null };

export default async function SupportPage({ searchParams }: PageProps<"/support">) {
  await requireAdmin();
  const params = await searchParams;
  const status = typeof params.status === "string" ? params.status : "all";

  const supabase = await createClient();
  let query = supabase
    .from("support_tickets")
    .select("*, profiles!support_tickets_user_id_fkey(full_name, role)")
    .order("created_at", { ascending: false });

  if (status !== "all") {
    query = query.eq("status", status);
  }

  const { data: tickets, error } = await query;

  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>Suporte</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 4, maxWidth: 640 }}>
        Pedidos de apoio de casais e parceiros (`support_tickets`). Disputas e atrasos são só uma categoria aqui —
        resolvem-se diretamente nesta aba, sem módulo separado.
      </p>

      <div style={{ display: "flex", gap: 8, margin: "24px 0", flexWrap: "wrap" }}>
        {FILTERS.map((f) => (
          <Link
            key={f.value}
            href={`/support?status=${f.value}`}
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
      {!error && tickets?.length === 0 && <p style={{ color: "var(--ink-muted)" }}>Sem pedidos neste filtro.</p>}

      {!error && tickets && tickets.length > 0 && (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {(tickets as TicketRow[]).map((t) => (
            <div
              key={t.id}
              style={{
                padding: 16,
                borderRadius: 14,
                background: "var(--surface)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    {t.category === "dispute_delay" && (
                      <span
                        style={{
                          fontSize: 10,
                          fontWeight: 800,
                          padding: "3px 8px",
                          borderRadius: 999,
                          background: "var(--status-rejected-bg, #fde2e2)",
                          color: "var(--status-rejected-fg)",
                        }}
                      >
                        {CATEGORY_LABEL[t.category]}
                      </span>
                    )}
                    <p style={{ fontWeight: 600 }}>{t.subject}</p>
                  </div>
                  <p style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 2 }}>
                    {t.profiles?.full_name ?? "Utilizador desconhecido"} ·{" "}
                    {t.profiles?.role === "partner" ? "Parceiro" : "Casal"} ·{" "}
                    {new Date(t.created_at).toLocaleDateString("pt-PT")}
                  </p>
                </div>
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    padding: "4px 10px",
                    borderRadius: 999,
                    background: t.status === "resolved" ? "var(--status-published-bg, #e2f5e9)" : "var(--border-muted)",
                    color: t.status === "resolved" ? "var(--status-published-fg)" : "var(--ink-muted)",
                  }}
                >
                  {STATUS_LABEL[t.status]}
                </span>
              </div>

              {t.description && <p style={{ marginTop: 10, fontSize: 13.5 }}>{t.description}</p>}

              {t.resolution_note ? (
                <div style={{ marginTop: 10, padding: 10, borderRadius: 10, background: "var(--background)" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "var(--ink-muted)" }}>Resposta enviada</p>
                  <p style={{ fontSize: 13, marginTop: 3 }}>{t.resolution_note}</p>
                </div>
              ) : (
                <ResolveTicketForm ticketId={t.id} />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
