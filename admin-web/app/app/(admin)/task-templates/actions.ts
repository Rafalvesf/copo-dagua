"use server";

import { revalidatePath } from "next/cache";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import {
  ELIGIBILITY_RULE_KEYS,
  COMPLETION_RULE_KEYS,
  COMPLETION_BEHAVIOR_KEYS,
  DISPLAY_TYPE_KEYS,
  ACTION_TYPE_KEYS,
} from "@/lib/types";

export type TaskTemplateActionState = { error: string | null; warning?: string | null };

const VALID_ELIGIBILITY_KEYS = new Set<string>(ELIGIBILITY_RULE_KEYS.map((r) => r.key));
const VALID_COMPLETION_KEYS = new Set<string>(COMPLETION_RULE_KEYS.map((r) => r.key));
const VALID_COMPLETION_BEHAVIORS = new Set<string>(COMPLETION_BEHAVIOR_KEYS.map((r) => r.key));
const VALID_DISPLAY_TYPES = new Set<string>(DISPLAY_TYPE_KEYS.map((r) => r.key));
const VALID_ACTION_TYPES = new Set<string>(ACTION_TYPE_KEYS.map((r) => r.key));

// Uma tarefa apresentada como "Para concluir" (display_type=required)
// mas que se conclui só por abrir o CTA (completion_behavior=cta_opened)
// provavelmente está mal configurada — pedido explícito do utilizador
// para avisar, sem bloquear (pode haver um caso legítimo).
function consistencyWarning(displayType: string, completionBehavior: string): string | null {
  if (displayType === "required" && completionBehavior === "cta_opened") {
    return "Aviso: uma tarefa \"Para concluir\" que se conclui ao abrir o CTA pode confundir o casal — ela desaparece sem a ação real ter sido feita. Confirma que é mesmo isto que queres.";
  }
  return null;
}

function readTemplateFields(formData: FormData) {
  const key = String(formData.get("key") ?? "").trim();
  const title = String(formData.get("title") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim();
  const category = String(formData.get("category") ?? "").trim();
  const taskType = String(formData.get("task_type") ?? "manual");
  const priority = String(formData.get("priority") ?? "normal");
  const partnerCategorySlug = String(formData.get("partner_category_slug") ?? "").trim() || null;
  const actionRoute = String(formData.get("action_route") ?? "").trim() || null;
  const eligibilityRule = String(formData.get("eligibility_rule") ?? "");
  const completionRuleRaw = String(formData.get("completion_rule") ?? "");
  const completionRule = completionRuleRaw || null;
  const position = Number(formData.get("position") ?? 0) || 0;
  const completionBehavior = String(formData.get("completion_behavior") ?? "action_completed");
  const displayType = String(formData.get("display_type") ?? "required");
  const actionTypeRaw = String(formData.get("action_type") ?? "");
  const actionType = actionTypeRaw || null;
  const ctaLabel = String(formData.get("cta_label") ?? "").trim() || null;

  return {
    key,
    title,
    description,
    category,
    taskType,
    priority,
    partnerCategorySlug,
    actionRoute,
    eligibilityRule,
    completionRule,
    position,
    completionBehavior,
    displayType,
    actionType,
    ctaLabel,
  };
}

function validateTemplateFields(f: ReturnType<typeof readTemplateFields>): string | null {
  if (!f.key || !f.title || !f.category) {
    return "Chave, título e categoria são obrigatórios.";
  }
  if (!VALID_ELIGIBILITY_KEYS.has(f.eligibilityRule)) {
    return "Regra de elegibilidade inválida — escolhe uma da lista.";
  }
  if (f.completionRule && !VALID_COMPLETION_KEYS.has(f.completionRule)) {
    return "Regra de conclusão inválida — escolhe uma da lista.";
  }
  if (!VALID_COMPLETION_BEHAVIORS.has(f.completionBehavior)) {
    return "Comportamento de conclusão inválido.";
  }
  if (!VALID_DISPLAY_TYPES.has(f.displayType)) {
    return "Tipo de apresentação inválido.";
  }
  if (f.actionType && !VALID_ACTION_TYPES.has(f.actionType)) {
    return "Tipo de ação inválido.";
  }
  const eligibilityDef = ELIGIBILITY_RULE_KEYS.find((r) => r.key === f.eligibilityRule);
  if (eligibilityDef?.needsCategory && !f.partnerCategorySlug) {
    return "Esta regra de elegibilidade precisa de uma categoria de parceiro.";
  }
  return null;
}

export async function createTaskTemplate(
  _prevState: TaskTemplateActionState,
  formData: FormData,
): Promise<TaskTemplateActionState> {
  await requireAdmin();
  const f = readTemplateFields(formData);
  const validationError = validateTemplateFields(f);
  if (validationError) return { error: validationError };

  const supabase = await createClient();
  const { error } = await supabase.from("task_templates").insert({
    key: f.key,
    title: f.title,
    description: f.description || null,
    category: f.category,
    task_type: f.taskType,
    priority: f.priority,
    partner_category_slug: f.partnerCategorySlug,
    action_route: f.actionRoute,
    eligibility_rule: f.eligibilityRule,
    completion_rule: f.completionRule,
    position: f.position,
    completion_behavior: f.completionBehavior,
    display_type: f.displayType,
    action_type: f.actionType,
    cta_label: f.ctaLabel,
  });

  if (error) {
    if (error.code === "23505") {
      return { error: "Já existe um template com esta chave." };
    }
    return { error: "Não foi possível criar o template." };
  }

  revalidatePath("/task-templates");
  return { error: null, warning: consistencyWarning(f.displayType, f.completionBehavior) };
}

export async function updateTaskTemplate(
  _prevState: TaskTemplateActionState,
  formData: FormData,
): Promise<TaskTemplateActionState> {
  await requireAdmin();
  const id = String(formData.get("id") ?? "");
  if (!id) return { error: "Template inválido." };

  const f = readTemplateFields(formData);
  const validationError = validateTemplateFields(f);
  if (validationError) return { error: validationError };

  const supabase = await createClient();
  const { error } = await supabase
    .from("task_templates")
    .update({
      title: f.title,
      description: f.description || null,
      category: f.category,
      task_type: f.taskType,
      priority: f.priority,
      partner_category_slug: f.partnerCategorySlug,
      action_route: f.actionRoute,
      eligibility_rule: f.eligibilityRule,
      completion_rule: f.completionRule,
      position: f.position,
      completion_behavior: f.completionBehavior,
      display_type: f.displayType,
      action_type: f.actionType,
      cta_label: f.ctaLabel,
      updated_at: new Date().toISOString(),
    })
    // `key` não é editável de propósito — `wedding_tasks` não referencia
    // a chave diretamente, mas mudar a chave de um template já em uso
    // tornaria o histórico confuso para nenhum benefício real.
    .eq("id", id);

  if (error) return { error: "Não foi possível guardar as alterações." };

  revalidatePath("/task-templates");
  return { error: null, warning: consistencyWarning(f.displayType, f.completionBehavior) };
}

export async function duplicateTaskTemplate(templateId: string) {
  await requireAdmin();
  const supabase = await createClient();

  const { data: original, error: fetchError } = await supabase
    .from("task_templates")
    .select("*")
    .eq("id", templateId)
    .single();
  if (fetchError || !original) return;

  let newKey = `${original.key}_copy`;
  for (let i = 2; i <= 20; i++) {
    const { data: exists } = await supabase
      .from("task_templates")
      .select("id")
      .eq("key", newKey)
      .maybeSingle();
    if (!exists) break;
    newKey = `${original.key}_copy${i}`;
  }

  await supabase.from("task_templates").insert({
    key: newKey,
    title: `${original.title} (cópia)`,
    description: original.description,
    category: original.category,
    task_type: original.task_type,
    priority: original.priority,
    partner_category_slug: original.partner_category_slug,
    recommended_days_before_event: original.recommended_days_before_event,
    due_days_before_event: original.due_days_before_event,
    action_route: original.action_route,
    eligibility_rule: original.eligibility_rule,
    completion_rule: original.completion_rule,
    position: original.position,
    completion_behavior: original.completion_behavior,
    display_type: original.display_type,
    action_type: original.action_type,
    cta_label: original.cta_label,
    active: false,
  });

  revalidatePath("/task-templates");
}

export async function toggleTaskTemplate(templateId: string, isActive: boolean) {
  await requireAdmin();
  const supabase = await createClient();

  const { error } = await supabase
    .from("task_templates")
    .update({ active: !isActive, updated_at: new Date().toISOString() })
    .eq("id", templateId);

  if (!error) {
    revalidatePath("/task-templates");
  }
}

// Soft delete (RN explícita do utilizador): nunca um DELETE — marca
// `deleted_at`/`active=false`, deixa de gerar tarefas novas e some da
// listagem normal do Admin, mas `wedding_tasks` já criadas a partir
// deste template ficam intactas (guardam uma cópia de título/descrição
// no momento em que nasceram, nunca dependem do template continuar a
// existir — ver task_engine_controller.dart).
export async function softDeleteTaskTemplate(templateId: string) {
  await requireAdmin();
  const supabase = await createClient();

  const { error } = await supabase
    .from("task_templates")
    .update({ active: false, deleted_at: new Date().toISOString(), updated_at: new Date().toISOString() })
    .eq("id", templateId);

  if (!error) {
    revalidatePath("/task-templates");
  }
}
