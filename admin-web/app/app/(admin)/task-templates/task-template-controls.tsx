"use client";

import { useActionState, useEffect, useRef, useState, useTransition } from "react";
import {
  createTaskTemplate,
  updateTaskTemplate,
  toggleTaskTemplate,
  duplicateTaskTemplate,
  softDeleteTaskTemplate,
  type TaskTemplateActionState,
} from "./actions";
import {
  ELIGIBILITY_RULE_KEYS,
  COMPLETION_RULE_KEYS,
  COMPLETION_BEHAVIOR_KEYS,
  DISPLAY_TYPE_KEYS,
  ACTION_TYPE_KEYS,
} from "@/lib/types";
import type { PartnerCategory, TaskTemplate } from "@/lib/types";
import { EVENT_TYPES } from "@/lib/event-types";

const initialState: TaskTemplateActionState = { error: null };

export function ToggleSwitch({ templateId, isActive }: { templateId: string; isActive: boolean }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      type="button"
      role="switch"
      className="switch"
      aria-checked={isActive}
      aria-label={isActive ? "Desativar template" : "Ativar template"}
      disabled={isPending}
      onClick={() => startTransition(() => toggleTaskTemplate(templateId, isActive))}
    />
  );
}

export function NewTaskTemplateForm({ categories }: { categories: PartnerCategory[] }) {
  const [open, setOpen] = useState(false);

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className="btn btn-primary">
        + Nova tarefa
      </button>
    );
  }

  return (
    <EditModal onClose={() => setOpen(false)}>
      <TaskTemplateForm mode="create" categories={categories} onDone={() => setOpen(false)} />
    </EditModal>
  );
}

export function RowActions({ template, categories }: { template: TaskTemplate; categories: PartnerCategory[] }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <div style={{ position: "relative" }}>
      <button
        onClick={() => setMenuOpen((v) => !v)}
        className="btn btn-ghost btn-sm"
        aria-label="Mais opções"
      >
        ⋯
      </button>
      {menuOpen && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "110%",
            zIndex: 10,
            background: "var(--surface)",
            boxShadow: "var(--shadow-pop)",
            borderRadius: 10,
            minWidth: 150,
            overflow: "hidden",
          }}
        >
          <MenuItem
            label="Editar"
            onClick={() => {
              setMenuOpen(false);
              setEditing(true);
            }}
          />
          <MenuItem
            label="Duplicar"
            disabled={isPending}
            onClick={() => {
              setMenuOpen(false);
              startTransition(() => duplicateTaskTemplate(template.id));
            }}
          />
          <MenuItem
            label="Eliminar"
            danger
            onClick={() => {
              setMenuOpen(false);
              setConfirmingDelete(true);
            }}
          />
        </div>
      )}

      {editing && (
        <EditModal onClose={() => setEditing(false)}>
          <TaskTemplateForm
            mode="edit"
            template={template}
            categories={categories}
            onDone={() => setEditing(false)}
          />
        </EditModal>
      )}

      {confirmingDelete && (
        <EditModal onClose={() => setConfirmingDelete(false)} narrow>
          <h3 style={{ marginTop: 0 }}>Eliminar template?</h3>
          <p style={{ color: "var(--ink-muted)", fontSize: 14 }}>
            Este template deixará de gerar novas tarefas. As tarefas já existentes e o histórico dos organizadores não serão
            eliminados.
          </p>
          <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 16 }}>
            <button onClick={() => setConfirmingDelete(false)} style={secondaryButtonStyle}>
              Cancelar
            </button>
            <button
              onClick={() => {
                startTransition(() => softDeleteTaskTemplate(template.id));
                setConfirmingDelete(false);
              }}
              style={{ ...primaryButtonStyle, background: "var(--danger-fg)" }}
            >
              Eliminar
            </button>
          </div>
        </EditModal>
      )}
    </div>
  );
}

function MenuItem({
  label,
  onClick,
  disabled,
  danger,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  danger?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: "block",
        width: "100%",
        textAlign: "left",
        padding: "10px 14px",
        border: "none",
        background: "transparent",
        color: danger ? "var(--status-rejected-fg)" : "var(--ink)",
        fontSize: 13,
        cursor: disabled ? "default" : "pointer",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      {label}
    </button>
  );
}

function EditModal({
  children,
  onClose,
  narrow,
}: {
  children: React.ReactNode;
  onClose: () => void;
  narrow?: boolean;
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "var(--overlay)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: "var(--surface)",
          borderRadius: 16,
          boxShadow: "var(--shadow-pop)",
          padding: 28,
          maxWidth: narrow ? 420 : 960,
          width: "94%",
          maxHeight: "92vh",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function TaskTemplateForm({
  mode,
  template,
  categories,
  onDone,
}: {
  mode: "create" | "edit";
  template?: TaskTemplate;
  categories: PartnerCategory[];
  onDone: () => void;
}) {
  const action = mode === "create" ? createTaskTemplate : updateTaskTemplate;
  const [state, formAction, isPending] = useActionState(action, initialState);
  const [eligibilityRule, setEligibilityRule] = useState<string>(
    template?.eligibility_rule ?? ELIGIBILITY_RULE_KEYS[0].key,
  );
  const [completionRule, setCompletionRule] = useState<string>(template?.completion_rule ?? "");
  const [displayType, setDisplayType] = useState<string>(template?.display_type ?? "required");
  const [completionBehavior, setCompletionBehavior] = useState<string>(
    template?.completion_behavior ?? "action_completed",
  );
  const hasSubmitted = useRef(false);

  // Fecha o formulário automaticamente assim que uma submissão termina
  // sem erro — `hasSubmitted` distingue "ainda não submetido" (estado
  // inicial, sem erro nem sucesso) de "acabou de submeter com sucesso".
  useEffect(() => {
    if (hasSubmitted.current && !isPending && state.error === null && !state.warning) {
      hasSubmitted.current = false;
      onDone();
    }
  }, [state, isPending, onDone]);

  const eligibilityDef = ELIGIBILITY_RULE_KEYS.find((r) => r.key === eligibilityRule);
  const completionDef = COMPLETION_RULE_KEYS.find((r) => r.key === completionRule);
  const needsCategory = eligibilityDef?.needsCategory || completionDef?.needsCategory;
  const showsConsistencyWarning = displayType === "required" && completionBehavior === "cta_opened";

  return (
    <form
      action={(formData) => {
        hasSubmitted.current = true;
        formAction(formData);
      }}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: 12,
        padding: 0,
      }}
    >
      <h3 style={{ gridColumn: "1 / -1", marginTop: 0, fontSize: 18 }}>{mode === "edit" ? "Editar tarefa sugerida" : "Nova tarefa sugerida"}</h3>
      {mode === "edit" && <input type="hidden" name="id" value={template?.id} />}

      <Field label="Chave (única, ex: define_budget)">
        <input
          name="key"
          required
          defaultValue={template?.key}
          readOnly={mode === "edit"}
          style={mode === "edit" ? { ...inputStyle, background: "var(--surface)", color: "var(--ink-muted)" } : inputStyle}
        />
      </Field>
      <Field label="Título">
        <input name="title" required defaultValue={template?.title} style={inputStyle} />
      </Field>
      <Field label="Categoria (agrupamento na UI, ex: orcamento/convidados/lugares/parceiros)">
        <input name="category" required defaultValue={template?.category} style={inputStyle} />
      </Field>
      <Field label="Rota de ação (opcional, ex: /budget)">
        <input name="action_route" defaultValue={template?.action_route ?? ""} style={inputStyle} />
      </Field>
      <div style={{ gridColumn: "1 / -1" }}>
        <Field label="Descrição">
          <textarea
            name="description"
            rows={2}
            defaultValue={template?.description ?? ""}
            style={{ ...inputStyle, resize: "vertical" }}
          />
        </Field>
      </div>

      <div style={{ gridColumn: "1 / -1", marginTop: 8, fontSize: 12, fontWeight: 700, color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
        Comportamento
      </div>
      <Field label="Tipo de tarefa">
        <select name="task_type" style={inputStyle} defaultValue={template?.task_type ?? "automatic"}>
          <option value="automatic">Automática</option>
          <option value="manual">Manual</option>
          <option value="system_action">Ação de sistema</option>
        </select>
      </Field>
      <Field label="Tipo de ação (descritivo, não afeta o motor)">
        <select name="action_type" style={inputStyle} defaultValue={template?.action_type ?? ""}>
          <option value="">— nenhum —</option>
          {ACTION_TYPE_KEYS.map((a) => (
            <option key={a.key} value={a.key}>
              {a.label}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Apresentação ao organizador">
        <select
          name="display_type"
          style={inputStyle}
          value={displayType}
          onChange={(e) => setDisplayType(e.target.value)}
        >
          {DISPLAY_TYPE_KEYS.map((d) => (
            <option key={d.key} value={d.key}>
              {d.label}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Conclusão">
        <select
          name="completion_behavior"
          style={inputStyle}
          value={completionBehavior}
          onChange={(e) => setCompletionBehavior(e.target.value)}
        >
          {COMPLETION_BEHAVIOR_KEYS.map((c) => (
            <option key={c.key} value={c.key}>
              {c.label}
            </option>
          ))}
        </select>
      </Field>
      {showsConsistencyWarning && (
        <div
          style={{
            gridColumn: "1 / -1",
            fontSize: 12.5,
            color: "var(--warning-fg)",
            background: "var(--warning-bg)",
            borderRadius: 8,
            padding: "8px 12px",
          }}
        >
          Aviso: uma tarefa &quot;Para concluir&quot; que se conclui ao abrir o CTA pode confundir o organizador — ela
          desaparece sem a ação real ter sido feita. A submissão não é bloqueada, mas confirma que é mesmo isto que
          queres.
        </div>
      )}
      <Field label="Texto do botão (CTA, opcional)">
        <input name="cta_label" defaultValue={template?.cta_label ?? ""} style={inputStyle} />
      </Field>
      <Field label="Prioridade">
        <select name="priority" style={inputStyle} defaultValue={template?.priority ?? "normal"}>
          <option value="low">Baixa</option>
          <option value="normal">Normal</option>
          <option value="high">Alta</option>
          <option value="urgent">Urgente</option>
        </select>
      </Field>

      <div style={{ gridColumn: "1 / -1", marginTop: 8, fontSize: 12, fontWeight: 700, color: "var(--ink-muted)", textTransform: "uppercase", letterSpacing: "0.04em" }}>
        Regras
      </div>
      <Field label="Regra de elegibilidade">
        <select
          name="eligibility_rule"
          style={inputStyle}
          value={eligibilityRule}
          onChange={(e) => setEligibilityRule(e.target.value)}
        >
          {ELIGIBILITY_RULE_KEYS.map((r) => (
            <option key={r.key} value={r.key}>
              {r.label}
            </option>
          ))}
        </select>
      </Field>
      <Field label="Regra de conclusão (opcional)">
        <select
          name="completion_rule"
          style={inputStyle}
          value={completionRule}
          onChange={(e) => setCompletionRule(e.target.value)}
        >
          <option value="">— nenhuma —</option>
          {COMPLETION_RULE_KEYS.map((r) => (
            <option key={r.key} value={r.key}>
              {r.label}
            </option>
          ))}
        </select>
      </Field>
      <Field label={`Categoria de parceiro${needsCategory ? " (obrigatória para esta regra)" : " (opcional)"}`}>
        <select name="partner_category_slug" style={inputStyle} defaultValue={template?.partner_category_slug ?? ""}>
          <option value="">— nenhuma —</option>
          {categories.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.label_pt}
            </option>
          ))}
          {template?.partner_category_slug &&
            !categories.some((c) => c.slug === template.partner_category_slug) && (
              <option value={template.partner_category_slug}>{template.partner_category_slug}</option>
            )}
        </select>
      </Field>
      <div style={{ gridColumn: "1 / -1" }}>
        <p style={{ fontSize: 12.5, color: "var(--ink-muted)", marginBottom: 6 }}>
          Tipos de evento — nenhum marcado = aparece em todos
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {Object.entries(EVENT_TYPES).map(([value, t]) => (
            <label
              key={value}
              className="check"
              style={{ alignItems: "center", fontSize: 13, padding: "6px 10px", borderRadius: 999, boxShadow: "0 0 0 1px var(--border-strong)" }}
            >
              <input type="checkbox" name="event_types" value={value} defaultChecked={template?.event_types?.includes(value) ?? false} />
              {t.label}
            </label>
          ))}
        </div>
      </div>
      <Field label="Posição (ordem de exibição)">
        <input name="position" type="number" defaultValue={template?.position ?? 0} style={inputStyle} />
      </Field>

      {!state.error && state.warning && !isPending && (
        <div
          style={{
            gridColumn: "1 / -1",
            fontSize: 12.5,
            color: "var(--warning-fg)",
            background: "var(--warning-bg)",
            borderRadius: 8,
            padding: "8px 12px",
          }}
        >
          Guardado. {state.warning}
        </div>
      )}
      <div style={{ gridColumn: "1 / -1", display: "flex", gap: 8, alignItems: "center", marginTop: 4 }}>
        <button type="submit" disabled={isPending} style={primaryButtonStyle}>
          {isPending ? "A guardar..." : mode === "create" ? "Criar template" : "Guardar alterações"}
        </button>
        <button type="button" onClick={onDone} style={secondaryButtonStyle}>
          {!state.error && state.warning && !isPending ? "Fechar" : "Cancelar"}
        </button>
        {state.error && <p style={{ color: "var(--status-rejected-fg)", fontSize: 13, margin: 0 }}>{state.error}</p>}
      </div>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="field">
      <span className="field-label" style={{ fontWeight: 500, fontSize: 13 }}>{label}</span>
      {children}
    </label>
  );
}

const inputStyle = {
  minHeight: 38,
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid var(--border-strong)",
  background: "var(--surface)",
  fontSize: 14,
};

const primaryButtonStyle = {
  height: 38,
  padding: "0 16px",
  borderRadius: 10,
  border: "none",
  background: "var(--accent)",
  color: "var(--on-accent)",
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
};

const secondaryButtonStyle = {
  height: 38,
  padding: "0 16px",
  borderRadius: 10,
  border: "1px solid var(--border-strong)",
  background: "var(--surface)",
  color: "var(--ink)",
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
};
