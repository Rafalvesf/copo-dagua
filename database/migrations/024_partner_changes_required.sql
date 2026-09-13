-- ============================================================
-- Módulo: Partner review — estado "Pedir alterações"
-- ============================================================
--
-- Pedido explícito do utilizador: a revisão de um parceiro passa a ter
-- três desfechos, não dois — `changes_required` fica distinto de
-- `rejected` (recusa dura, IN_REVIEW não volta sozinho) e de `draft`
-- (nunca chegou a ser revisto). Um parceiro em `changes_required`
-- corrige só o que falta e é reenviado automaticamente para revisão
-- assim que os requisitos voltarem a estar todos válidos (ver
-- `025_partner_auto_submission.sql` para o trigger que faz isso).

alter type public.partner_profile_status add value 'changes_required' after 'pending_review';
