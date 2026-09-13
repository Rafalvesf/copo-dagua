# Módulo: Dashboard (partner-app)

**Estado:** ✅ Documentado — **implementado com dados mock**, sem backend real ligado (mesma nota de `mobile-app/dashboard/README.md`)
**Camada:** Partner-app
**Consumido por:** Parceiro

## Objetivo

`partner_home_screen.dart` (`mobile-app/app/lib/features/partner_home/`) já existia como um lançador de módulos (grelha "bento box"), explicitamente documentado no código como "versão mínima". 2026-08-30: acrescentado um resumo de painel a seguir ao mesmo pedido feito para o admin (`admin-web/dashboard/`) — reservas pendentes, vendas, assuntos urgentes, suporte. O tile "Reservas" da grelha, que antes não tinha ação nenhuma, passou a abrir o ecrã real de reservas já existente (`PartnerBookingsScreen`).

## Nota sobre dados

Ver `mobile-app/dashboard/README.md`, "Nota sobre dados" — aplica-se integralmente aqui, mesma app, mesmo `MockBackend`.

## Índice de documentos

| Documento | Conteúdo |
|---|---|
| [`requirements.md`](./requirements.md) | Funcionalidades e regras de negócio |
| [`ui.md`](./ui.md) | Estrutura do ecrã |
| [`database.md`](./database.md) | Modelos mock envolvidos |
| [`tasks.md`](./tasks.md) | Backlog |

## Resumo executivo

`_PartnerDashboardSummary` (novo): reutiliza `partnerBookingsProvider`/`partnerStatsProvider` já existentes (de quando `partner_stats_screen.dart` foi construído) e acrescenta `partnerSupportTicketsProvider` (novo). "Assuntos urgentes" = pedidos ainda sem qualquer resposta (`BookingStatus.novo`) — acionável, não um aviso genérico, mesmo critério usado em `admin-web/dashboard/requirements.md` RN02/RN03 (algo com prazo/ação pendente, não só uma contagem).
