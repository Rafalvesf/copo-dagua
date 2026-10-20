import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { ResolveTicketForm } from "./resolve-form";
import { Badge, Card, Empty, FilterTabs, PageHeader } from "@/components/ui";
import { fmtDateTime } from "@/lib/format";
import type { Profile, SupportTicket, SupportTicketCategory, SupportTicketStatus } from "@/lib/types";

const FILTERS: { value: SupportTicketStatus | "all"; label: string }[] = [
  { value: "open", label: "Abertos" },
  { value: "all", label: "Todos" },
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
  const status = typeof params.status === "string" ? params.status : "open";

  const supabase = await createClient();
  let query = supabase
    .from("support_tickets")
    .select("*, profiles!support_tickets_user_id_fkey(full_name, role)")
    .order("created_at", { ascending: false });

  if (status !== "all") {
    query = query.eq("status", status);
  }

  const { data: tickets, error } = await query;

  const rows = (tickets ?? []) as TicketRow[];

  return (
    <div className="page">
      <PageHeader
        title="Suporte"
        subtitle="Pedidos de ajuda enviados a partir da app. Problemas com uma reserva concreta tratam-se em Disputas."
      />

      <div className="toolbar">
        <FilterTabs current={status} items={FILTERS.map((f) => ({ ...f, href: `/support?status=${f.value}` }))} />
      </div>

      {error ? (
        <Card>
          <Empty title="Não foi possível carregar a lista" />
        </Card>
      ) : rows.length === 0 ? (
        <Card>
          <Empty title="Sem pedidos neste filtro">Quando alguém pedir ajuda na app, aparece aqui.</Empty>
        </Card>
      ) : (
        <div className="stack">
          {rows.map((t) => (
            <Card key={t.id} tone={t.status !== "resolved" && t.category === "dispute_delay" ? "danger" : t.status !== "resolved" ? "warning" : undefined}>
              <div className="stack-sm" style={{ gap: 12 }}>
                <div className="row" style={{ justifyContent: "space-between", alignItems: "flex-start" }}>
                  <div style={{ minWidth: 0 }}>
                    <p className="strong" style={{ fontSize: 15 }}>{t.subject}</p>
                    <p className="list-sub">
                      {t.profiles?.full_name ?? "Utilizador"} · {t.profiles?.role === "partner" ? "Parceiro" : "Organizador"} · {fmtDateTime(t.created_at)}
                    </p>
                  </div>
                  <div className="row" style={{ gap: 6 }}>
                    {t.category === "dispute_delay" && <Badge tone="danger" plain>{CATEGORY_LABEL[t.category]}</Badge>}
                    <Badge tone={t.status === "resolved" ? "success" : t.status === "pending" ? "info" : "warning"}>{STATUS_LABEL[t.status]}</Badge>
                  </div>
                </div>
                {t.description && <p style={{ whiteSpace: "pre-wrap", maxWidth: "75ch" }}>{t.description}</p>}
                {t.resolution_note ? (
                  <div style={{ padding: "10px 12px", borderRadius: 10, background: "var(--surface-2)", boxShadow: "inset 2px 0 0 var(--accent)" }}>
                    <p className="field-hint strong">Resposta enviada</p>
                    <p style={{ fontSize: 13, marginTop: 2 }}>{t.resolution_note}</p>
                  </div>
                ) : (
                  <ResolveTicketForm ticketId={t.id} />
                )}
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
