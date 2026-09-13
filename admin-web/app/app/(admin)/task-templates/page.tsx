import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { ToggleSwitch, NewTaskTemplateForm, RowActions } from "./task-template-controls";
import { ELIGIBILITY_RULE_KEYS, COMPLETION_RULE_KEYS, DISPLAY_TYPE_KEYS, ACTION_TYPE_KEYS } from "@/lib/types";
import type { TaskTemplate, PartnerCategory } from "@/lib/types";

const PRIORITY_LABEL: Record<string, string> = {
  low: "Baixa",
  normal: "Normal",
  high: "Alta",
  urgent: "Urgente",
};

export default async function TaskTemplatesPage() {
  await requireAdmin();

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
  (templates as TaskTemplate[] | null ?? []).forEach((t) => {
    const list = groups.get(t.category) ?? [];
    list.push(t);
    groups.set(t.category, list);
  });

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>Templates de tarefas</h1>
          <p style={{ color: "var(--ink-muted)", marginTop: 4, maxWidth: 640 }}>
            O catálogo do motor de tarefas do app (mobile-app/app/lib/core/tasks/). As regras de elegibilidade e
            conclusão são chaves fixas, já implementadas do lado da app — um template só tem efeito real se usar uma
            das chaves da lista abaixo.
          </p>
        </div>
        <NewTaskTemplateForm categories={activeCategories} />
      </div>

      {error && <p style={{ color: "var(--status-rejected-fg)", marginTop: 24 }}>Não foi possível carregar a lista.</p>}

      {!error &&
        Array.from(groups.entries()).map(([category, items]) => (
          <div key={category} style={{ marginTop: 28 }}>
            <h2 style={{ fontSize: 14, fontWeight: 600, color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
              {category}
            </h2>
            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 10 }}>
              <thead>
                <tr style={{ textAlign: "left", fontSize: 13, color: "var(--ink-muted)" }}>
                  <th style={{ padding: "8px 0" }}>Template</th>
                  <th>Ação</th>
                  <th>Conclusão</th>
                  <th>Prioridade</th>
                  <th>Regras</th>
                  <th>Em uso</th>
                  <th>Estado</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {items.map((t) => {
                  const eligibilityLabel = ELIGIBILITY_RULE_KEYS.find((r) => r.key === t.eligibility_rule)?.label ?? t.eligibility_rule;
                  const completionLabel = t.completion_rule
                    ? COMPLETION_RULE_KEYS.find((r) => r.key === t.completion_rule)?.label ?? t.completion_rule
                    : null;
                  const displayTypeLabel = DISPLAY_TYPE_KEYS.find((d) => d.key === t.display_type)?.label ?? t.display_type;
                  const actionTypeLabel = t.action_type
                    ? ACTION_TYPE_KEYS.find((a) => a.key === t.action_type)?.label ?? t.action_type
                    : "—";
                  const completionBehaviorLabel =
                    t.completion_behavior === "cta_opened"
                      ? "Primeiro clique"
                      : t.completion_behavior === "manual"
                        ? "Manual"
                        : "Ação concluída";
                  return (
                    <tr key={t.id} style={{ borderTop: "1px solid var(--border-muted)" }}>
                      <td style={{ padding: "12px 0", verticalAlign: "top" }}>
                        <p style={{ fontWeight: 600 }}>{t.title}</p>
                        <p style={{ fontSize: 12, color: "var(--ink-muted)" }}>
                          {t.key}
                          {t.partner_category_slug ? ` · ${t.partner_category_slug}` : ""}
                        </p>
                        <p style={{ fontSize: 11, color: "var(--ink-muted)", marginTop: 2 }}>{displayTypeLabel}</p>
                      </td>
                      <td style={{ fontSize: 13, verticalAlign: "top", paddingTop: 12 }}>{actionTypeLabel}</td>
                      <td style={{ fontSize: 13, verticalAlign: "top", paddingTop: 12 }}>{completionBehaviorLabel}</td>
                      <td style={{ fontSize: 13, verticalAlign: "top", paddingTop: 12 }}>{PRIORITY_LABEL[t.priority] ?? t.priority}</td>
                      <td style={{ fontSize: 12, color: "var(--ink-muted)", maxWidth: 320, verticalAlign: "top", paddingTop: 12 }}>
                        <p>Elegível: {eligibilityLabel}</p>
                        {completionLabel && <p>Concluída: {completionLabel}</p>}
                      </td>
                      <td style={{ fontSize: 13, verticalAlign: "top", paddingTop: 12 }}>{usageCount.get(t.id) ?? 0}</td>
                      <td style={{ verticalAlign: "top", paddingTop: 12 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <span style={{ fontSize: 13, color: "var(--ink-muted)" }}>{t.active ? "Ativo" : "Inativo"}</span>
                          <ToggleSwitch templateId={t.id} isActive={t.active} />
                        </div>
                      </td>
                      <td style={{ verticalAlign: "top", paddingTop: 12 }}>
                        <RowActions template={t} categories={activeCategories} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        ))}
    </div>
  );
}
