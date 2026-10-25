import { requireAdmin } from "@/lib/dal";
import { EVENT_TYPES } from "@/lib/event-types";
import { createClient } from "@/lib/supabase/server";
import { ToggleSwitch, NewTaskTemplateForm, RowActions } from "./task-template-controls";
import { ELIGIBILITY_RULE_KEYS, COMPLETION_RULE_KEYS, DISPLAY_TYPE_KEYS, ACTION_TYPE_KEYS } from "@/lib/types";
import type { TaskTemplate, PartnerCategory } from "@/lib/types";
import { Alert, Badge, Card, FilterTabs, PageHeader, SubNav } from "@/components/ui";
import { TASK_TABS } from "@/lib/nav";

const PRIORITY_LABEL: Record<string, string> = {
  low: "Baixa",
  normal: "Normal",
  high: "Alta",
  urgent: "Urgente",
};

export default async function TaskTemplatesPage({ searchParams }: PageProps<"/task-templates">) {
  await requireAdmin();
  const params = await searchParams;
  const typeFilter = typeof params.type === "string" && EVENT_TYPES[params.type] ? params.type : "all";

  const supabase = await createClient();
  // `deleted_at` — soft delete, nunca aparece na listagem normal (ver
  // `softDeleteTaskTemplate` em actions.ts).
  const { data: templates, error } = await supabase
    .from("task_templates")
    .select("*")
    .is("deleted_at", null)
    .order("category")
    .order("position");

  const { data: categories } = await supabase
    .from("partner_categories")
    .select("id, slug, label_pt, is_active")
    .order("label_pt");
  const activeCategories = (categories as PartnerCategory[] | null)?.filter((c) => c.is_active) ?? [];

  // Quantos casamentos reais já geraram uma tarefa a partir de cada
  // template — dá ao admin sinal de quais templates estão realmente a
  // ser usados, sem inventar nenhuma métrica.
  const { data: usageRows } = await supabase.from("wedding_tasks").select("task_template_id");
  const usageCount = new Map<string, number>();
  (usageRows ?? []).forEach((row: { task_template_id: string | null }) => {
    if (!row.task_template_id) return;
    usageCount.set(row.task_template_id, (usageCount.get(row.task_template_id) ?? 0) + 1);
  });

  const groups = new Map<string, TaskTemplate[]>();
  (templates as TaskTemplate[] | null ?? [])
    // Filtro por tipo de evento: os gerais (sem tipos) aparecem sempre.
    .filter((t) => typeFilter === "all" || !t.event_types?.length || t.event_types.includes(typeFilter))
    .forEach((t) => {
    const list = groups.get(t.category) ?? [];
    list.push(t);
    groups.set(t.category, list);
  });

  return (
    <div className="page">
      <PageHeader
        title="Tarefas sugeridas"
        subtitle="As tarefas que a app sugere a cada organizador. Quando aparecem e quando ficam concluídas escolhe-se de uma lista fixa de regras."
        actions={<NewTaskTemplateForm categories={activeCategories} />}
      />
      <SubNav current="/task-templates" items={TASK_TABS} />
      <div className="toolbar">
        <FilterTabs
          current={typeFilter}
          items={[{ value: "all", label: "Todos os eventos" }, ...Object.entries(EVENT_TYPES).map(([k, v]) => ({ value: k, label: v.label }))].map((f) => ({
            ...f,
            href: f.value === "all" ? "/task-templates" : `/task-templates?type=${f.value}`,
          }))}
        />
      </div>

      {error && <Alert tone="danger">Não foi possível carregar a lista.</Alert>}

      {!error &&
        Array.from(groups.entries()).map(([category, items]) => (
          <Card key={category} title={category.charAt(0).toUpperCase() + category.slice(1)} subtitle={`${items.length} ${items.length === 1 ? "tarefa" : "tarefas"}`} flush>
            <div className="table-wrap">
              <table className="table">
                <thead>
                  <tr>
                    <th>Tarefa</th>
                    <th>Ação</th>
                    <th>Conclusão</th>
                    <th>Prioridade</th>
                    <th>Regras</th>
                    <th className="num">Em uso</th>
                    <th>Ativa</th>
                    <th />
                  </tr>
                </thead>
                <tbody>
                  {items.map((t) => {
                    const eligibilityLabel = ELIGIBILITY_RULE_KEYS.find((r) => r.key === t.eligibility_rule)?.label ?? t.eligibility_rule;
                    const completionLabel = t.completion_rule
                      ? COMPLETION_RULE_KEYS.find((r) => r.key === t.completion_rule)?.label ?? t.completion_rule
                      : null;
                    const displayTypeLabel = DISPLAY_TYPE_KEYS.find((d) => d.key === t.display_type)?.label ?? t.display_type;
                    const actionTypeLabel = t.action_type ? ACTION_TYPE_KEYS.find((a) => a.key === t.action_type)?.label ?? t.action_type : "—";
                    const completionBehaviorLabel =
                      t.completion_behavior === "cta_opened" ? "Primeiro clique" : t.completion_behavior === "manual" ? "Manual" : "Ação concluída";
                    return (
                      <tr key={t.id} style={{ verticalAlign: "top" }}>
                        <td style={{ minWidth: 220 }}>
                          <span className="cell-main">{t.title}</span>
                          <span className="cell-sub">
                            {t.key}
                            {t.partner_category_slug ? ` · ${t.partner_category_slug}` : ""} · {displayTypeLabel}
                          </span>
                          <span className="cell-sub" style={{ color: t.event_types?.length ? "var(--accent)" : undefined, fontWeight: 600 }}>
                            {t.event_types?.length ? t.event_types.map((e) => EVENT_TYPES[e]?.label ?? e).join(" · ") : "Todos os eventos"}
                          </span>
                        </td>
                        <td>{actionTypeLabel}</td>
                        <td>{completionBehaviorLabel}</td>
                        <td>
                          <Badge tone={t.priority === "urgent" ? "danger" : t.priority === "high" ? "warning" : "neutral"} plain>
                            {PRIORITY_LABEL[t.priority] ?? t.priority}
                          </Badge>
                        </td>
                        <td className="muted" style={{ fontSize: 12, maxWidth: 300, whiteSpace: "normal" }}>
                          <p>Aparece: {eligibilityLabel}</p>
                          {completionLabel && <p>Fica feita: {completionLabel}</p>}
                        </td>
                        <td className="num">{usageCount.get(t.id) ?? 0}</td>
                        <td>
                          <ToggleSwitch templateId={t.id} isActive={t.active} />
                        </td>
                        <td className="num">
                          <RowActions template={t} categories={activeCategories} />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </Card>
        ))}
    </div>
  );
}
