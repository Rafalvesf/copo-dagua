# Módulo: Dashboard (admin-web)

**Estado:** ✅ Documentado (âmbito MVP)
**Camada:** Web admin
**Consumido por:** Administradores

## Objetivo

Dar ao administrador uma leitura imediata do estado da plataforma ao abrir `admin-web/`, usando só números que já existem na base de dados — sem KPIs de bookings/pagamentos/GMV, que pedem entidades (`bookings`, `payments`) ainda não construídas em lado nenhum da plataforma.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | KPIs incluídos e excluídos, e porquê |
| [`ui.md`](./ui.md) | Wireframe |
| [`database.md`](./database.md) | Queries |
| [`tasks.md`](./tasks.md) | KPIs futuros, por dependência |

## Resumo executivo

Quatro KPIs reais (casais, parceiros publicados, parceiros a aguardar aprovação, casamentos) mais um bloco de atividade recente lido de `audit_logs`. Substitui deliberadamente o dashboard de 12 KPIs com percentagens "vs. mês anterior" da spec genérica avaliada em 2026-08-30 — ver `tasks.md` para a lista completa do que falta e de que depende.
