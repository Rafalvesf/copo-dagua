import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { Badge, Card, Empty, FilterTabs, PageHeader } from "@/components/ui";
import { fmtDate } from "@/lib/format";
import { ReportActions } from "./report-controls";

// Denúncias de fotografias, comentários e mensagens (migração 130).
// A App Store e a Google Play exigem resposta rápida: decidir em < 24 h.
type Row = {
  id: string;
  kind: "gallery_photo" | "gallery_comment" | "group_message" | "message";
  reason: string;
  note: string | null;
  excerpt: string | null;
  status: "open" | "removed" | "dismissed";
  created_at: string;
  reporter: { full_name: string | null } | null;
  reported: { full_name: string | null } | null;
};

const KIND: Record<Row["kind"], string> = {
  gallery_photo: "Fotografia",
  gallery_comment: "Comentário",
  group_message: "Mensagem de grupo",
  message: "Mensagem",
};

const REASON: Record<string, string> = {
  offensive: "Ofensivo ou ódio",
  harassment: "Assédio ou ameaças",
  sexual: "Conteúdo sexual",
  violence: "Violência",
  spam: "Spam ou burla",
  other: "Outro",
};

const STATUS: Record<Row["status"], { label: string; tone: "danger" | "neutral" | "success" }> = {
  open: { label: "Por decidir", tone: "danger" },
  removed: { label: "Removido", tone: "neutral" },
  dismissed: { label: "Arquivado", tone: "success" },
};

const FILTERS = [
  { value: "open", label: "Por decidir" },
  { value: "removed", label: "Removidas" },
  { value: "dismissed", label: "Arquivadas" },
  { value: "all", label: "Todas" },
];

export default async function ReportsPage({ searchParams }: PageProps<"/reports">) {
  await requireAdmin();
  const params = await searchParams;
  const status = typeof params.status === "string" ? params.status : "open";

  const supabase = await createClient();
  let q = supabase
    .from("content_reports")
    .select(
      "id, kind, reason, note, excerpt, status, created_at, reporter:profiles!content_reports_reporter_id_fkey(full_name), reported:profiles!content_reports_reported_profile_id_fkey(full_name)",
    )
    .order("created_at", { ascending: status === "open" });
  if (status !== "all") q = q.eq("status", status);
  const { data, error } = await q;
  const rows = (data ?? []) as unknown as Row[];

  return (
    <div className="page">
      <PageHeader
        title="Denúncias"
        subtitle="Fotografias, comentários e mensagens denunciados por quem usa a app. Decide em menos de 24 horas: remover esconde a fotografia ou apaga o texto para todos."
      />
      <div className="toolbar">
        <FilterTabs current={status} items={FILTERS.map((f) => ({ ...f, href: `/reports?status=${f.value}` }))} />
      </div>
      <Card flush>
        {error ? (
          <Empty title="Não foi possível carregar as denúncias">Confirma que a migração 130 foi aplicada.</Empty>
        ) : rows.length === 0 ? (
          <Empty title={status === "open" ? "Nenhuma denúncia por decidir" : "Sem denúncias neste filtro"} />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Conteúdo</th>
                  <th>Motivo</th>
                  <th>Publicado por</th>
                  <th>Denunciado por</th>
                  <th>Estado</th>
                  <th>Data</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.id}>
                    <td>
                      <strong>{KIND[r.kind]}</strong>
                      {r.excerpt ? <div className="muted" style={{ maxWidth: 320, whiteSpace: "pre-wrap" }}>“{r.excerpt}”</div> : null}
                    </td>
                    <td>
                      {REASON[r.reason] ?? r.reason}
                      {r.note ? <div className="muted">{r.note}</div> : null}
                    </td>
                    <td>{r.reported?.full_name || "—"}</td>
                    <td>{r.reporter?.full_name || "—"}</td>
                    <td>
                      <Badge tone={STATUS[r.status].tone}>{STATUS[r.status].label}</Badge>
                    </td>
                    <td>{fmtDate(r.created_at)}</td>
                    <td>{r.status === "open" ? <ReportActions reportId={r.id} /> : null}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
