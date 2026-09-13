"use client";

import { useEditMode } from "@/lib/edit-mode-context";

export function EditModeToggle() {
  const { editMode, toggleEditMode } = useEditMode();

  return (
    <button
      type="button"
      onClick={toggleEditMode}
      aria-pressed={editMode}
      aria-label={editMode ? "Sair do modo de edição do dashboard" : "Editar disposição do dashboard"}
      title={editMode ? "Sair do modo de edição" : "Editar disposição do dashboard"}
      style={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        border: editMode ? "1px solid var(--accent)" : "1px solid var(--border-muted)",
        background: editMode ? "var(--status-published-bg)" : "transparent",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: editMode ? "var(--accent-dark)" : "var(--ink-muted)",
        flexShrink: 0,
        cursor: "pointer",
      }}
    >
      <PencilIcon />
    </button>
  );
}

function PencilIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19 3 20l1-4Z" />
      <path d="M14.5 5.5 18 9" />
    </svg>
  );
}
