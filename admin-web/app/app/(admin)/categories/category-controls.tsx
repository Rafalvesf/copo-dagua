"use client";

import { useActionState, useRef, useState, useTransition } from "react";
import { createCategory, toggleCategory, deleteCategory, type CategoryActionState } from "./actions";

const initialState: CategoryActionState = { error: null };

export function ToggleSwitch({ categoryId, isActive }: { categoryId: string; isActive: boolean }) {
  const [isPending, startTransition] = useTransition();
  return (
    <button
      type="button"
      role="switch"
      className="switch"
      aria-checked={isActive}
      aria-label={isActive ? "Desativar categoria" : "Ativar categoria"}
      disabled={isPending}
      onClick={() => startTransition(() => toggleCategory(categoryId, isActive))}
    />
  );
}

// Sempre visível por cima da tabela: nome + slug opcional.
export function NewCategoryForm() {
  const [state, formAction, isPending] = useActionState(createCategory, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await formAction(formData);
        formRef.current?.reset();
      }}
      className="row"
      style={{ alignItems: "flex-end", gap: 10 }}
    >
      <label className="field" style={{ flex: "2 1 200px" }}>
        <span className="field-label">Nome</span>
        <input name="label_pt" required className="input" placeholder="ex.: Fotografia" />
      </label>
      <label className="field" style={{ flex: "1 1 160px" }}>
        <span className="field-label">Slug (opcional)</span>
        <input name="slug" className="input" placeholder="fotografia" />
      </label>
      <button type="submit" disabled={isPending} className="btn btn-primary" style={{ height: 38 }}>
        {isPending ? "A criar…" : "Adicionar categoria"}
      </button>
      {state.error && <p className="form-error" style={{ flexBasis: "100%" }}>{state.error}</p>}
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
  const [confirming, setConfirming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (partnerCount > 0) {
    return (
      <button type="button" disabled className="btn btn-ghost btn-sm" title="Só dá para eliminar categorias sem parceiros.">
        Eliminar
      </button>
    );
  }

  if (!confirming) {
    return (
      <button type="button" className="btn btn-ghost btn-sm" onClick={() => setConfirming(true)}>
        Eliminar
      </button>
    );
  }

  return (
    <span className="row" style={{ justifyContent: "flex-end", gap: 6 }}>
      <span className="field-hint">Eliminar “{categoryLabel}”?</span>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        disabled={isPending}
        onClick={() =>
          startTransition(async () => {
            const result = await deleteCategory(categoryId);
            setError(result.error);
            if (!result.error) setConfirming(false);
          })
        }
      >
        {isPending ? "A eliminar…" : "Sim, eliminar"}
      </button>
      <button type="button" className="btn btn-ghost btn-sm" onClick={() => setConfirming(false)}>
        Não
      </button>
      {error && <span className="form-error">{error}</span>}
    </span>
  );
}
