# Modulo: budget (mobile-app)

**Estado:** 🔄 Em progresso — ligado a dados reais (`mobile-app/app/lib/core/budget/`) em 2026-08-31, a pedido direto do utilizador ("switch them to real live data"). Documentação formal completa segundo `docs/product/README.md` ainda não foi escrita — este ficheiro descreve o que existe hoje.

## O que existe hoje

- Tabelas reais `budgets`/`budget_categories`/`expenses` (`database/migrations/033_budget.sql`), RLS via `is_wedding_member()`.
- Orçamento total editável (`updateTotal()` — sem UI própria ainda, só a API).
- Despesas individuais: adicionar, marcar pago/pendente, separadores Todas/Pagas/Pendentes, "Pagamentos próximos".
- `budget_categories` (nome, gasto, verba atribuída) só de leitura na UI — sem ecrã de gestão ainda, ficam vazias para casamentos novos.

## Por documentar / por fazer

- Regras de negócio completas, fluxo, casos limite, critérios de aceitação, testes.
- UI de gestão de categorias (criar/editar/remover, hoje só possível diretamente na base de dados).
- Ligar `budget_categories.amount` (gasto) à soma real de `expenses` por categoria — hoje são independentes de propósito, para não mudar o comportamento do produto além do necessário nesta ronda.

Ver estado geral em `ROADMAP.md` na raiz do projeto.
