"use client";

import { useActionState, useState, useTransition } from "react";
import { createCategory, toggleCategory, deleteCategory, type CategoryActionState } from "./actions";

const initialState: CategoryActionState = { error: null };

export function ToggleSwitch({ categoryId, isActive }: { categoryId: string; isActive: boolean }) {
  const [isPending, startTransition] = useTransition();

  return (
    <button
      onClick={() => startTransition(() => toggleCategory(categoryId, isActive))}
      disabled={isPending}
      style={{
        width: 40,
        height: 22,
        borderRadius: 999,
        border: "none",
        background: isActive ? "var(--status-published-fg)" : "var(--border-muted)",
        position: "relative",
        cursor: "pointer",
        opacity: isPending ? 0.6 : 1,
      }}
      aria-label={isActive ? "Desativar categoria" : "Ativar categoria"}
    >
      <span
        style={{
          position: "absolute",
          top: 2,
          left: isActive ? 20 : 2,
          width: 18,
          height: 18,
          borderRadius: "50%",
          background: "var(--surface)",
          transition: "left 120ms",
        }}
      />
    </button>
  );
}

export function NewCategoryForm() {
  const [open, setOpen] = useState(false);
  const [state, formAction, isPending] = useActionState(createCategory, initialState);

  if (!open) {
    return (
      <button onClick={() => setOpen(true)} style={primaryButtonStyle}>
        + Nova
      </button>
    );
  }

  return (
    <form
      action={async (formData) => {
        await formAction(formData);
        setOpen(false);
      }}
      style={{
        display: "flex",
        gap: 8,
        alignItems: "flex-end",
        padding: 16,
        borderRadius: 16,
        background: "var(--surface)",
        boxShadow: "var(--shadow-card)",
        marginBottom: 16,
      }}
    >
      <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 13 }}>
        Nome
        <input name="label_pt" required style={inputStyle} />
      </label>
      <label style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 13 }}>
        Slug (opcional)
        <input name="slug" style={inputStyle} />
      </label>
      <button type="submit" disabled={isPending} style={primaryButtonStyle}>
        {isPending ? "A criar..." : "Criar"}
      </button>
      <button type="button" onClick={() => setOpen(false)} style={secondaryButtonStyle}>
        Cancelar
      </button>
      {state.error && <p style={{ color: "var(--status-rejected-fg)", fontSize: 13 }}>{state.error}</p>}
    </form>
  );
}

export function DeleteCategoryButton({
  categoryId,
  categoryLabel,
  partnerCount,
}: {
  categoryId: string;
  categoryLabel: string;
  partnerCount: number;
}) {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  if (partnerCount > 0) {
    return (
      <button
        disabled
        title="Só é possível eliminar categorias sem nenhum parceiro associado."
        style={{ ...dangerButtonStyle, opacity: 0.4, cursor: "not-allowed" }}
      >
        Eliminar
      </button>
    );
  }

  return (
    <span style={{ display: "inline-flex", flexDirection: "column", gap: 4 }}>
      <button
        disabled={isPending}
        onClick={() => {
          if (!window.confirm(`Eliminar a categoria "${categoryLabel}"? Esta ação não pode ser desfeita.`)) {
            return;
          }
          startTransition(async () => {
            const result = await deleteCategory(categoryId);
            setError(result.error);
          });
        }}
        style={{ ...dangerButtonStyle, opacity: isPending ? 0.6 : 1 }}
      >
        {isPending ? "A eliminar..." : "Eliminar"}
      </button>
      {error && <span style={{ color: "var(--status-rejected-fg)", fontSize: 12 }}>{error}</span>}
    </span>
  );
}

const dangerButtonStyle = {
  padding: "6px 14px",
  borderRadius: 999,
  border: "1px solid var(--status-rejected-fg)",
  background: "transparent",
  color: "var(--status-rejected-fg)",
  fontWeight: 600,
  fontSize: 13,
  cursor: "pointer",
};

const inputStyle = {
  padding: "8px 12px",
  borderRadius: 10,
  border: "1px solid var(--border-muted)",
  background: "var(--background)",
};

const primaryButtonStyle = {
  padding: "10px 18px",
  borderRadius: 999,
  border: "none",
  background: "var(--ink)",
  color: "var(--surface)",
  fontWeight: 600,
  cursor: "pointer",
};

const secondaryButtonStyle = {
  padding: "10px 18px",
  borderRadius: 999,
  border: "1px solid var(--border-muted)",
  background: "var(--surface)",
  color: "var(--ink)",
  fontWeight: 600,
  cursor: "pointer",
};
