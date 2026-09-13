"use client";

import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { GridLayout, type Layout, type LayoutItem } from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import { useEditMode } from "@/lib/edit-mode-context";

export type DashboardGridItem = {
  id: string;
  content: ReactNode;
  defaultLayout: { x: number; y: number; w: number; h: number };
};

const STORAGE_KEY = "copo-dagua-admin-dashboard-layout-v1";
const GRID_COLS = 12;
const GRID_MARGIN = 14;

function loadSavedLayout(itemIds: string[]): Layout | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const saved = JSON.parse(raw) as Layout;
    const savedIds = new Set(saved.map((l) => l.i));
    const currentIds = new Set(itemIds);
    if (savedIds.size !== currentIds.size) return null;
    for (const id of currentIds) if (!savedIds.has(id)) return null;
    return saved;
  } catch {
    // localStorage indisponível (janela privada, etc.) — fica na disposição por omissão.
    return null;
  }
}

// Mede a área realmente disponível para a grelha (não o container inteiro
// — esse também tem o aviso de "modo de edição" por cima, que rouba
// altura). É esta medição, não um `rowHeight` fixo, que decide a altura
// de cada linha — ver nota junto a `rowHeight` mais abaixo sobre o porquê
// de um valor fixo ter cortado a fila de baixo do ecrã (2026-08-31).
function useContainerSize() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<{ width: number; height: number } | null>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      if (!entry) return;
      setSize({ width: entry.contentRect.width, height: entry.contentRect.height });
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return { containerRef, size };
}

// Grelha arrastável/redimensionável do dashboard — pedido explícito do
// utilizador (2026-08-31): por omissão bloqueada (nada se move só por
// existir), só entra em jogo depois de o admin clicar no lápis da TopBar
// (ver lib/edit-mode-context.tsx). A disposição fica guardada em
// `localStorage`, por navegador/dispositivo — não há tabela própria na
// base de dados para isto (ficaria fora do âmbito pedido); documentado
// como limitação conhecida em admin-web/dashboard/tasks.md.
export function DashboardGrid({ items }: { items: DashboardGridItem[] }) {
  const { editMode } = useEditMode();
  const { containerRef, size } = useContainerSize();

  const defaultLayout: Layout = useMemo(
    () => items.map((it): LayoutItem => ({ i: it.id, ...it.defaultLayout })),
    [items],
  );
  const [layout, setLayout] = useState<Layout>(defaultLayout);

  // Nº de linhas que a disposição por omissão ocupa (máximo de y+h entre
  // todas as caixas) — usado para calcular `rowHeight` dinamicamente, não
  // um valor fixo escrito à mão (ficaria desincronizado assim que as
  // posições/tamanhos por omissão mudassem noutro sítio).
  const totalRows = useMemo(() => Math.max(...defaultLayout.map((it) => it.y + it.h)), [defaultLayout]);

  // `rowHeight` fixo (ex: 20px) tinha um problema real: a disposição por
  // omissão ocupa `totalRows` linhas MAIS as margens entre elas, num
  // total em pixels que não tem nenhuma relação com o espaço que
  // efetivamente sobra no ecrã depois do cabeçalho/KPIs/gráficos — em
  // ecrãs mais baixos (ou com o aviso de "modo de edição" a roubar mais
  // ~40px), esse total ultrapassava a altura disponível e, como o
  // container é `overflow: hidden` (nunca scroll, pedido explícito do
  // utilizador), a fila de baixo ficava cortada. Em vez de adivinhar um
  // valor fixo, `rowHeight` escala-se sempre para que `totalRows` linhas
  // + as margens entre elas caibam exatamente na altura medida do
  // container — a grelha preenche sempre o espaço disponível, nem mais
  // nem menos, seja qual for o ecrã.
  const rowHeight = size ? Math.max(8, (size.height - (totalRows - 1) * GRID_MARGIN) / totalRows) : null;

  useEffect(() => {
    const saved = loadSavedLayout(items.map((it) => it.id));
    // eslint-disable-next-line react-hooks/set-state-in-effect -- ver nota em DashboardGrid: sincroniza com localStorage, que não existe no servidor
    if (saved) setLayout(saved);
  }, [items]);

  function handleLayoutChange(next: Layout) {
    setLayout(next);
    if (!editMode) return; // só grava alterações feitas deliberadamente em modo de edição
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // localStorage indisponível — a disposição só fica na sessão atual, sem erro visível.
    }
  }

  function resetLayout() {
    setLayout(defaultLayout);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ver nota acima */
    }
  }

  return (
    <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {editMode && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            background: "var(--status-published-bg)",
            color: "var(--accent-dark)",
            borderRadius: 10,
            padding: "8px 14px",
            fontSize: 12.5,
            fontWeight: 600,
            marginBottom: 10,
            flexShrink: 0,
          }}
        >
          <span>Modo de edição — arrasta pela pega no topo de cada caixa, redimensiona pelo canto.</span>
          <button
            onClick={resetLayout}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              color: "inherit",
              textDecoration: "underline",
              fontSize: 12.5,
            }}
          >
            Repor disposição
          </button>
        </div>
      )}
      {/* `overflow: hidden` aqui também — pedido explícito e absoluto do
          utilizador (2026-08-31): o dashboard nunca deve fazer scroll,
          nem sequer quando uma caixa é redimensionada para maior do que
          o espaço disponível em modo de edição (nesse caso o conteúdo
          fica cortado, nunca com barra de scroll). */}
      <div ref={containerRef} style={{ flex: 1, minHeight: 0, overflow: "hidden" }}>
        {size && rowHeight && (
          <GridLayout
            width={size.width}
            layout={layout}
            gridConfig={{ cols: GRID_COLS, rowHeight, margin: [GRID_MARGIN, GRID_MARGIN], containerPadding: [0, 0] }}
            dragConfig={{ enabled: editMode, handle: ".dashboard-drag-handle" }}
            resizeConfig={{ enabled: editMode, handles: ["se"] }}
            onLayoutChange={handleLayoutChange}
          >
            {items.map((item) => (
              <div key={item.id} style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                {editMode && (
                  <div
                    className="dashboard-drag-handle"
                    style={{
                      flexShrink: 0,
                      cursor: "grab",
                      textAlign: "center",
                      padding: "3px 0",
                      fontSize: 11,
                      color: "var(--ink-muted)",
                      background: "var(--status-suspended-bg)",
                      borderRadius: "10px 10px 0 0",
                      userSelect: "none",
                    }}
                  >
                    ⠿⠿⠿
                  </div>
                )}
                <div style={{ flex: 1, minHeight: 0 }}>{item.content}</div>
              </div>
            ))}
          </GridLayout>
        )}
      </div>
    </div>
  );
}
