# Categories (admin-web) — UI

```
┌────────────────────────────────────────────────────┐
│ Categorias                          [ + Nova ]      │
│ Taxonomia do Marketplace.                            │
│                                                        │
│ ┌────────────────────────────────────────────────┐  │
│ │ Categoria         Parceiros   Estado             │  │
│ │ Fotografia            12      ● Ativa    [⚪──]  │  │
│ │ Vídeo                  4      ● Ativa    [⚪──]  │  │
│ │ Wedding Planner         0      ○ Inativa  [──⚪]  │  │
│ └────────────────────────────────────────────────┘  │
└────────────────────────────────────────────────────┘
```

Modal "+ Nova": campo `label_pt` (texto), `slug` pré-preenchido a partir do label (editável), botão Criar.

## Componentes

| Componente | Descrição |
|---|---|
| `CategoriesTable` | Lista com toggle inline de `is_active` |
| `NewCategoryModal` | Formulário de criação, reutiliza `ReasonModal` de `admin-web/partners/ui.md` como base estrutural (modal simples com form) |
