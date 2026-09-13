# Modulo: seating (mobile-app)

**Estado:** 🔄 Em progresso — ligado a dados reais (`mobile-app/app/lib/core/seating/seating_controller.dart`) em 2026-08-31, a pedido direto do utilizador ("switch them to real live data"). Documentação formal completa segundo `docs/product/README.md` ainda não foi escrita.

## O que existe hoje

- Duas partes, ambas reais agora: (1) número de mesas disponíveis — soma de `partner_venue_tables.quantity` do local reservado (`022_venue_tables.sql`, já ligado desde 2026-08-31 numa ronda anterior); (2) atribuição de convidados a cada mesa — tabela real `seating_tables` (`database/migrations/032_seating_tables.sql`), RLS via `is_wedding_member()`.
- Preenchimento sequencial: só a próxima mesa incompleta é editável, mesas completas ficam com ✓.
- `seatsPerTable = 8` fixo — mesmo para locais com tipos de mesa de capacidades diferentes (débito técnico já documentado, ver comentário em `seating_controller.dart`).

## Por documentar / por fazer

- Regras de negócio completas, fluxo, casos limite, critérios de aceitação, testes.
- Grelha por capacidade real de cada tipo de mesa (hoje assume 8 lugares para todas).

Ver estado geral em `ROADMAP.md` na raiz do projeto.
