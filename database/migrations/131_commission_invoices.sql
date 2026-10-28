-- ============================================================
-- Faturas das comissões no InvoiceXpress — 2026-10-28
-- ============================================================
-- A Edge Function `issue-commission-invoices` corre de hora a hora e emite
-- no InvoiceXpress, com IVA a 23% incluído:
-- - organizer_fee: fatura-recibo ao organizador pela taxa de serviço
--   (comissão cobrada por cima do valor do parceiro), quando o pagamento
--   fica pago;
-- - partner_fee: fatura-recibo ao parceiro pela taxa À Nossa!, quando o
--   dinheiro lhe é libertado (a taxa é descontada nesse momento);
-- - credit_organizer / credit_partner: nota de crédito quando o pagamento
--   é reembolsado na totalidade.
-- Cada documento é enviado por email a quem o recebe. Esta tabela guarda o
-- que já foi emitido (uma linha por pagamento e tipo), para nunca faturar
-- duas vezes.

begin;

create table if not exists public.commission_invoices (
  id uuid primary key default gen_random_uuid(),
  payment_id uuid not null references public.payments(id) on delete cascade,
  kind text not null check (kind in ('organizer_fee', 'partner_fee', 'credit_organizer', 'credit_partner')),
  amount numeric(10,2) not null,
  status text not null default 'issued' check (status in ('issued', 'failed', 'skipped')),
  provider_id bigint,
  sequence_number text,
  permalink text,
  error text,
  attempts int not null default 1,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (payment_id, kind)
);
create index if not exists commission_invoices_status_idx on public.commission_invoices (status);

alter table public.commission_invoices enable row level security;
drop policy if exists "Admins read commission invoices" on public.commission_invoices;
create policy "Admins read commission invoices" on public.commission_invoices
  for select using (public.is_admin());

create or replace function public.trigger_issue_commission_invoices()
returns void language plpgsql security definer set search_path = public, pg_temp as $$
declare
  v_secret text;
begin
  select value into v_secret from private.app_config where key = 'push_secret';
  perform net.http_post(
    url := 'https://yknbtsmcmjxzzhijyiav.supabase.co/functions/v1/issue-commission-invoices',
    headers := jsonb_build_object('Content-Type', 'application/json', 'x-push-secret', coalesce(v_secret, '')),
    body := '{}'::jsonb
  );
end;
$$;
revoke all on function public.trigger_issue_commission_invoices() from public, anon, authenticated;

select cron.unschedule('issue-commission-invoices') where exists (select 1 from cron.job where jobname = 'issue-commission-invoices');
select cron.schedule('issue-commission-invoices', '20 * * * *', $$select public.trigger_issue_commission_invoices();$$);

commit;
