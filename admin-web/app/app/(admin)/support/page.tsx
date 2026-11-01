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
  bug: "Erro na app",
};

type TicketRow = SupportTicket & { profiles: Pick<Profile, "full_name" | "role"> | null; admin_message_id?: string | null };

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
  // Fotografias (migração 145): links temporários de 1 hora (bucket privado).
  const paths = rows.flatMap((t) => t.attachments ?? []);
  const signed = new Map<string, string>();
  if (paths.length > 0) {
    const { data: urls } = await supabase.storage.from("support-attachments").createSignedUrls(paths, 3600);
    for (const u of urls ?? []) if (u.path && u.signedUrl) signed.set(u.path, u.signedUrl);
  }
  // Respostas a mensagens da equipa (migração 134): título da mensagem original.
  const msgIds = [...new Set(rows.map((t) => t.admin_message_id).filter((x): x is string => Boolean(x)))];
  const msgTitles = new Map<string, string>();
  if (msgIds.length > 0) {
    const { data: msgs } = await supabase.from("admin_messages").select("id, title").in("id", msgIds);
    for (const m of (msgs ?? []) as { id: string; title: string }[]) msgTitles.set(m.id, m.title);
  }

  // Classificações da app (migração 136): média e últimos comentários.
  const { data: ratingRows } = await supabase
    .from("app_ratings")
    .select("stars, comment, platform, created_at")
    .order("created_at", { ascending: false })
    .limit(200);
  const ratings = (ratingRows ?? []) as { stars: number; comment: string | null; platform: string | null; created_at: string }[];
  const avg = ratings.length ? ratings.reduce((a, r) => a + r.stars, 0) / ratings.length : 0;
  const recentComments = ratings.filter((r) => r.comment).slice(0, 5);

  return (
    <div className="page">
      <PageHeader
        title="Suporte"
        subtitle="Pedidos de ajuda enviados a partir da app. Problemas com uma reserva concreta tratam-se em Disputas."
      />

      {ratings.length > 0 && (
        <Card>
          <p className="strong" style={{ fontSize: 15 }}>
            Classificação da app: {avg.toFixed(1).replace(".", ",")} / 5 · {ratings.length} {ratings.length === 1 ? "nota" : "notas"}
          </p>
          {recentComments.map((r, i) => (
            <p key={i} className="list-sub" style={{ marginTop: 6 }}>
              {"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)} · {r.comment} · {fmtDateTime(r.created_at)}
            </p>
          ))}
        </Card>
      )}

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
                      {t.profiles?.full_name ?? "Utilizador"} · {t.profiles?.role === "partner" ? "Parceiro" : "Utilizador"} · {fmtDateTime(t.created_at)}
                    </p>
                  </div>
                  <div className="row" style={{ gap: 6 }}>
                    {t.category === "dispute_delay" && <Badge tone="danger" plain>{CATEGORY_LABEL[t.category]}</Badge>}
                    {t.category === "bug" && <Badge tone="info" plain>{CATEGORY_LABEL[t.category]}</Badge>}
                    <Badge tone={t.status === "resolved" ? "success" : t.status === "pending" ? "info" : "warning"}>{STATUS_LABEL[t.status]}</Badge>
                  </div>
                </div>
                {t.admin_message_id && (
                  <p className="field-hint">Resposta à mensagem «{msgTitles.get(t.admin_message_id) ?? "da equipa"}»</p>
                )}
                {t.description && <p style={{ whiteSpace: "pre-wrap", maxWidth: "75ch", overflowWrap: "anywhere" }}>{t.description}</p>}
                {(t.attachments?.length ?? 0) > 0 && (
                  <div className="attach-grid">
                    {t.attachments!.map((path) =>
                      signed.get(path) ? (
                        <a key={path} href={signed.get(path)} target="_blank" rel="noopener noreferrer" title="Abrir fotografia">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={signed.get(path)} alt="Fotografia do erro" loading="lazy" />
                        </a>
                      ) : null,
                    )}
                  </div>
                )}
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
