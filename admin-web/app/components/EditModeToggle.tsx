"use client";

import { usePathname } from "next/navigation";
import { useEditMode } from "@/lib/edit-mode-context";

export function EditModeToggle() {
  const { editMode, toggleEditMode } = useEditMode();
  // Só o dashboard tem caixas para arrumar.
  const pathname = usePathname();
  if (pathname !== "/") return null;

  return (
    <button
      type="button"
      className="icon-btn"
      onClick={toggleEditMode}
      aria-pressed={editMode}
      aria-label={editMode ? "Sair do modo de edição do dashboard" : "Editar disposição do dashboard"}
      title={editMode ? "Sair do modo de edição" : "Arrumar o dashboard"}
    >
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
        <rect x="3.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="3.5" width="7" height="7" rx="1.5" />
        <rect x="3.5" y="13.5" width="7" height="7" rx="1.5" />
        <rect x="13.5" y="13.5" width="7" height="7" rx="1.5" />
      </svg>
    </button>
  );
}
