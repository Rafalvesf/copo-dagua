-- ============================================================
-- Módulo: Modo de manutenção (admin-web dashboard)
-- ============================================================
--
-- Pedido explícito do utilizador: "add a maintenance switch for
-- couple, partner and both side at the same time" — dois interruptores
-- independentes em vez de um só "modo de manutenção" global, para
-- poder desligar só o lado do casal (ex: bug isolado na app do casal)
-- sem impedir os parceiros de continuarem a trabalhar, e vice-versa;
-- "os dois ao mesmo tempo" é simplesmente ligar os dois interruptores
-- juntos, não precisa de uma terceira coluna.
--
-- Vive em `platform_settings` (já existe, `019_platform_settings.sql`)
-- em vez de tabela nova — mesma RLS já correta (leitura ampla para
-- autenticados, escrita só `platform.manage`), a app real precisa de
-- conseguir ler isto ANTES do resto do arranque normal.

alter table public.platform_settings
  add column maintenance_mode_couple boolean not null default false,
  add column maintenance_mode_partner boolean not null default false;
