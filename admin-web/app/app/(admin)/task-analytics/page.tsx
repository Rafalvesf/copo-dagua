import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import type { TaskTemplate } from "@/lib/types";
import { Alert, Card, PageHeader, Stat, SubNav } from "@/components/ui";
import { TASK_TABS } from "@/lib/nav";

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
  manual: "Marcada manualmente pelo organizador",
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
      <div className="page">
        <PageHeader title="Tarefas sugeridas" />
        <SubNav current="/task-analytics" items={TASK_TABS} />
        <Alert tone="danger">Não foi possível carregar os dados.</Alert>
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
    <div className="page">
      <PageHeader title="Tarefas sugeridas" subtitle="Como os organizadores estão a usar as tarefas que a app sugere." />
      <SubNav current="/task-analytics" items={TASK_TABS} />

      <div className="grid grid-4">
        <Stat label="Tarefas geradas" value={String(total)} />
        <Stat label="Taxa de conclusão" value={completionRate === null ? "—" : `${completionRate.toFixed(0)}%`} hint={`${completed.length} feitas de ${resolved} fechadas`} />
        <Stat label="Tempo médio até concluir" value={avgHours === null ? "—" : formatDuration(avgHours)} />
        <Stat label="Descartadas ou expiradas" value={String(dismissed.length)} />
      </div>

      <div className="grid grid-2">
        <TemplateTable title="Mais concluídas" rows={mostCompleted} column="completed" columnLabel="Feitas" />
        <TemplateTable title="Mais descartadas ou expiradas" rows={mostDismissed} column="dismissed" columnLabel="Descartadas" />
      </div>

      <Card title="Porque ficaram concluídas" subtitle="Inclui as que terminaram porque surgiu um pedido de orçamento ou reserva na categoria." flush>
        {sourceStats.length === 0 ? (
          <div className="empty">Ainda sem conclusões.</div>
        ) : (
          <ul className="list">
            {sourceStats.map(([source, count]) => {
              const max = sourceStats[0][1] || 1;
              return (
                <li key={source}>
                  <div className="list-main">
                    <p>{COMPLETION_SOURCE_LABEL[source] ?? source}</p>
                    <div className="bar-track" style={{ marginTop: 6 }}>
                      <div className="bar-fill" style={{ width: `${(count / max) * 100}%` }} />
                    </div>
                  </div>
                  <span className="strong tnum">{count}</span>
                </li>
              );
            })}
          </ul>
        )}
      </Card>

      <div className="grid grid-2">
        <Stat label="Tarefas “Pagar sinal”" value={String(dynamicPayments.length)} hint={`${dynamicPayments.filter((t) => t.status === "completed").length} pagas`} />
        <Stat label="Tarefas “Rever proposta”" value={String(dynamicProposals.length)} hint={`${dynamicProposals.filter((t) => t.status === "completed").length} decididas`} />
      </div>
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
    <Card title={title} flush>
      {rows.length === 0 ? (
        <div className="empty">Sem dados ainda.</div>
      ) : (
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr>
                <th>Tarefa</th>
                <th className="num">{columnLabel}</th>
                <th className="num">Geradas</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id}>
                  <td className="cell-main">{r.title}</td>
                  <td className="num">{r[column]}</td>
                  <td className="num muted">{r.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Card>
  );
}
