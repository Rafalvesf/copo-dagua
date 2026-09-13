"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

// Estado partilhado entre o botão de lápis na TopBar (components/layout.tsx,
// fora da página do dashboard) e a grelha arrastável/redimensionável do
// dashboard (components/DashboardGrid.tsx) — vivem em partes diferentes da
// árvore de componentes (layout vs. page), daí o Context em vez de props.
// Por omissão bloqueado (`editMode: false`) — pedido explícito do
// utilizador (2026-08-31): as caixas só devem poder ser arrastadas/
// redimensionadas depois de entrar explicitamente em modo de edição.
type EditModeContextValue = { editMode: boolean; toggleEditMode: () => void };

const EditModeContext = createContext<EditModeContextValue | null>(null);

export function EditModeProvider({ children }: { children: ReactNode }) {
  const [editMode, setEditMode] = useState(false);
  return (
    <EditModeContext.Provider value={{ editMode, toggleEditMode: () => setEditMode((v) => !v) }}>
      {children}
    </EditModeContext.Provider>
  );
}

export function useEditMode(): EditModeContextValue {
  const ctx = useContext(EditModeContext);
  if (!ctx) throw new Error("useEditMode must be used within an EditModeProvider");
  return ctx;
}
