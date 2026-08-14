# Módulo: checklist (mobile-app)

**Estado:** 🔄 Em progresso — implementado diretamente em código (`mobile-app/app/lib/features/checklist/`) com backend mock, a pedido direto do utilizador durante os testes da primeira versão da app. Documentação formal completa (Regras de negócio, Fluxo, Casos limite, Critérios de aceitação, Testes) segundo a metodologia de `docs/product/README.md` ainda **não foi escrita** — este ficheiro descreve o que existe hoje, não substitui esse processo.

## O que existe hoje

- Lista de tarefas de planeamento do casamento, agrupadas por categoria (Local & Data, Parceiros, Convidados, Vestuário, Legal, No dia — categorias livres, definidas pelo casal ao criar a tarefa).
- Cada tarefa: título, categoria, concluída/pendente, prazo opcional.
- Cartão de progresso no topo (`X de Y concluídas`, barra de progresso).
- Adicionar tarefa (bottom sheet), marcar concluída, remover.
- Acessível a partir do feed inicial e da barra de navegação flutuante.

## Por documentar

- Regras de negócio (ex: existem tarefas pré-semeadas por omissão para todos os casamentos? Podem ser editadas/removidas as sugeridas pela plataforma?).
- Modelo de dados definitivo e RLS (`checklist_items`, ligado a `wedding_id` via `is_wedding_member()` — mesmo padrão dos módulos anteriores).
- Edge cases (ex: prazo no passado, tarefa duplicada, categoria vazia).
- Testes e critérios de aceitação.

Ver estado geral em `ROADMAP.md` na raiz do projeto.
