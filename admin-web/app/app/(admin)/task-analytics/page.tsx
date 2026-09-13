import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import type { TaskTemplate } from "@/lib/types";

type TaskRow = {
  id: string;
  task_template_id: string | null;
  source_entity_id: string | null;
  status: "upcoming" | "active" | "completed" | "dismissed" | "expired";
  category: string | null;
  completion_source: string | null;
  created_at: string;
  completed_at: string | null;
};

const COMPLETION_SOURCE_LABEL: Record<string, string> = {
  budget_defined: "Orçamento definido",
  has_guests: "Lista de convidados criada",
  no_pending_rsvp: "RSVPs todos respondidos",
  seating_started: "Mapa de lugares iniciado",
  has_interest_in_category: "Favorito/pedido/reserva na categoria",
  has_quote_for_category: "Pedido de orçamento na categoria",
  has_confirmed_booking_for_category: "Reserva confirmada na categoria",
  manual: "Marcada manualmente pelo casal",
  payment_paid: "Pagamento liquidado",
  proposal_accepted: "Proposta aceite",
};

function formatDuration(hours: number): string {
  if (hours < 24) return `${hours.toFixed(1)} h`;
  return `${(hours / 24).toFixed(1)} dias`;
}

export default async function TaskAnalyticsPage() {
  await requireAdmin();

  const supabase = await createClient();
  const { data: tasks, error } = await supabase
    .from("wedding_tasks")
    .select("id, task_template_id, source_entity_id, status, category, completion_source, created_at, completed_at")
    .eq("source", "system");

  const { data: templates } = await supabase.from("task_templates").select("id, key, title, category");
  const templateById = new Map((templates as Pick<TaskTemplate, "id" | "key" | "title" | "category">[] | null ?? []).map((t) => [t.id, t]));

  if (error || !tasks) {
    return (
      <div>
        <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>Analytics de tarefas</h1>
        <p style={{ color: "var(--status-rejected-fg)", marginTop: 24 }}>Não foi possível carregar os dados.</p>
      </div>
    );
  }

  const rows = tasks as TaskRow[];
  const templateRows = rows.filter((t) => t.task_template_id !== null);
  const dynamicRows = rows.filter((t) => t.source_entity_id !== null);

  const total = rows.length;
  const completed = rows.filter((t) => t.status === "completed");
  const dismissed = rows.filter((t) => t.status === "dismissed" || t.status === "expired");
  const resolved = completed.length + dismissed.length;
  const completionRate = resolved > 0 ? (completed.length / resolved) * 100 : null;

  const completionHours = completed
    .filter((t) => t.completed_at)
    .map((t) => (new Date(t.completed_at!).getTime() - new Date(t.created_at).getTime()) / 3_600_000)
    .filter((h) => h >= 0);
  const avgHours = completionHours.length > 0 ? completionHours.reduce((a, b) => a + b, 0) / completionHours.length : null;

  // Por template: quantas vezes foi concluído vs descartado/expirado —
  // sinal real de quais tarefas o motor sugere que realmente ajudam.
  const perTemplate = new Map<string, { completed: number; dismissed: number; total: number }>();
  for (const t of templateRows) {
    const key = t.task_template_id!;
    const entry = perTemplate.get(key) ?? { completed: 0, dismissed: 0, total: 0 };
    entry.total++;
    if (t.status === "completed") entry.completed++;
    if (t.status === "dismissed" || t.status === "expired") entry.dismissed++;
    perTemplate.set(key, entry);
  }
  const templateStats = Array.from(perTemplate.entries())
    .map(([id, stats]) => ({ id, title: templateById.get(id)?.title ?? id, ...stats }))
    .filter((s) => s.total > 0);
  const mostCompleted = [...templateStats].sort((a, b) => b.completed - a.completed).slice(0, 5);
  const mostDismissed = [...templateStats]
    .filter((s) => s.dismissed > 0)
    .sort((a, b) => b.dismissed - a.dismissed)
    .slice(0, 5);

  // Fonte da conclusão (completion_source, coluna real gravada pelo
  // motor em cada `completeTask`/auto-conclusão) — responde a "quantas
  // tarefas terminaram porque surgiu um pedido de orçamento/reserva"
  // sem inventar nenhuma ligação causal que não esteja gravada.
  const bySource = new Map<string, number>();
  for (const t of completed) {
    const src = t.completion_source ?? "desconhecida";
    bySource.set(src, (bySource.get(src) ?? 0) + 1);
  }
  const sourceStats = Array.from(bySource.entries()).sort((a, b) => b[1] - a[1]);

  const dynamicPayments = dynamicRows.filter((t) => t.category === "pagamentos");
  const dynamicProposals = dynamicRows.filter((t) => t.category === "parceiros" && t.task_template_id === null);

  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>Analytics de tarefas</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 4 }}>
        Agregados reais sobre `wedding_tasks` — sem números inventados.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16, marginTop: 24 }}>
        <StatCard label="Tarefas do sistema geradas" value={String(total)} />
        <StatCard label="Taxa de conclusão" value={completionRate === null ? "—" : `${completionRate.toFixed(0)}%`} sub={`${completed.length} concluídas / ${resolved} resolvidas`} />
        <StatCard label="Tempo médio até concluir" value={avgHours === null ? "—" : formatDuration(avgHours)} />
        <StatCard label="Descartadas/expiradas" value={String(dismissed.length)} />
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 32 }}>
        <TemplateTable title="Templates mais concluídos" rows={mostCompleted} column="completed" columnLabel="Concluídas" />
        <TemplateTable title="Templates mais descartados/expirados" rows={mostDismissed} column="dismissed" columnLabel="Descartadas" />
      </div>

      <div style={{ marginTop: 32 }}>
        <h2 style={{ fontSize: 16, fontWeight: 600 }}>Como as tarefas foram concluídas</h2>
        <p style={{ color: "var(--ink-muted)", fontSize: 13, marginTop: 2 }}>
          Inclui quantas terminaram porque surgiu um pedido de orçamento ou reserva real na categoria.
        </p>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 12 }}>
          <thead>
            <tr style={{ textAlign: "left", fontSize: 13, color: "var(--ink-muted)" }}>
              <th style={{ padding: "8px 0" }}>Motivo</th>
              <th>Nº de conclusões</th>
            </tr>
          </thead>
          <tbody>
            {sourceStats.map(([source, count]) => (
              <tr key={source} style={{ borderTop: "1px solid var(--border-muted)" }}>
                <td style={{ padding: "10px 0" }}>{COMPLETION_SOURCE_LABEL[source] ?? source}</td>
                <td>{count}</td>
              </tr>
            ))}
            {sourceStats.length === 0 && (
              <tr>
                <td colSpan={2} style={{ padding: "10px 0", color: "var(--ink-muted)" }}>
                  Ainda sem conclusões.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 32 }}>
        <StatCard label="Tarefas de pagamento (Pagar sinal)" value={String(dynamicPayments.length)} sub={`${dynamicPayments.filter((t) => t.status === "completed").length} pagas`} />
        <StatCard label="Tarefas de proposta (Rever proposta)" value={String(dynamicProposals.length)} sub={`${dynamicProposals.filter((t) => t.status === "completed").length} decididas`} />
      </div>
    </div>
  );
}

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div style={{ padding: 18, borderRadius: 16, background: "var(--surface)", boxShadow: "var(--shadow-card)" }}>
      <p style={{ fontSize: 12, color: "var(--ink-muted)" }}>{label}</p>
      <p style={{ fontSize: 26, fontFamily: "var(--font-serif)", marginTop: 4 }}>{value}</p>
      {sub && <p style={{ fontSize: 12, color: "var(--ink-muted)", marginTop: 2 }}>{sub}</p>}
    </div>
  );
}

function TemplateTable({
  title,
  rows,
  column,
  columnLabel,
}: {
  title: string;
  rows: { id: string; title: string; completed: number; dismissed: number; total: number }[];
  column: "completed" | "dismissed";
  columnLabel: string;
}) {
  return (
    <div>
      <h2 style={{ fontSize: 16, fontWeight: 600 }}>{title}</h2>
      <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 12 }}>
        <thead>
          <tr style={{ textAlign: "left", fontSize: 13, color: "var(--ink-muted)" }}>
            <th style={{ padding: "8px 0" }}>Template</th>
            <th>{columnLabel}</th>
            <th>Total gerado</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.id} style={{ borderTop: "1px solid var(--border-muted)" }}>
              <td style={{ padding: "10px 0", fontWeight: 600, fontSize: 13 }}>{r.title}</td>
              <td>{r[column]}</td>
              <td style={{ color: "var(--ink-muted)" }}>{r.total}</td>
            </tr>
          ))}
          {rows.length === 0 && (
            <tr>
              <td colSpan={3} style={{ padding: "10px 0", color: "var(--ink-muted)" }}>
                Sem dados ainda.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
