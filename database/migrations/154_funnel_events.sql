-- ============================================================
-- 154 — Funil de conversão (analytics)
-- ============================================================
-- Pedido do utilizador (2026-11-03): analytics do funil. A app regista os
-- passos que a base de dados não vê (abrir a app, ver o início, começar o
-- registo, abrir a compra de um bilhete…); os outros (contas, eventos,
-- pedidos, reservas pagas, bilhetes) já estão nas tabelas e o admin
-- conta-os direto. Sem dados pessoais: um id anónimo por dispositivo e,
-- com sessão, o id da conta.

begin;

create table if not exists public.funnel_events (
  id bigint generated always as identity primary key,
  anon_id text not null check (length(anon_id) between 8 and 64),
  profile_id uuid references public.profiles(id) on delete set null,
  step text not null check (step in (
    'app_open', 'welcome_view', 'signup_start', 'signup_role', 'onboarding_start',
    'event_create_start', 'partner_view', 'quote_request_start', 'checkout_open', 'ticket_checkout_open',
    'invite_open', 'partner_invite_open'
  )),
  platform text check (platform in ('web', 'ios', 'android', 'other')),
  props jsonb not null default '{}'::jsonb check (pg_column_size(props) < 2000),
  created_at timestamptz not null default now()
);
create index if not exists funnel_events_step_time_idx on public.funnel_events (step, created_at);
create index if not exists funnel_events_anon_idx on public.funnel_events (anon_id, step);

alter table public.funnel_events enable row level security;
drop policy if exists "Admins read funnel" on public.funnel_events;
create policy "Admins read funnel" on public.funnel_events for select to authenticated using (public.is_admin());
-- Escrita só pela função abaixo.

-- Regista um passo. Os passos únicos (app_open, welcome_view, signup_start…)
-- contam uma vez por dispositivo e dia, para não encher a tabela.
create or replace function public.track_funnel_event(p_anon text, p_step text, p_platform text default null, p_props jsonb default '{}'::jsonb)
returns void
language plpgsql security definer set search_path = public, pg_temp as $$
begin
  if p_anon is null or length(p_anon) not between 8 and 64 then
    return;
  end if;
  if exists (
    select 1 from public.funnel_events
    where anon_id = p_anon and step = p_step and created_at > now() - interval '1 day'
      and coalesce(props->>'ref', '') = coalesce(p_props->>'ref', '')
  ) then
    return;
  end if;
  insert into public.funnel_events (anon_id, profile_id, step, platform, props)
  values (p_anon, auth.uid(), p_step, case when p_platform in ('web', 'ios', 'android') then p_platform else 'other' end,
          coalesce(p_props, '{}'::jsonb));
exception when check_violation then
  -- Passo desconhecido ou props grandes demais: ignora em silêncio.
  return;
end;
$$;
revoke execute on function public.track_funnel_event(text, text, text, jsonb) from public;
grant execute on function public.track_funnel_event(text, text, text, jsonb) to anon, authenticated;

-- Liga os passos anónimos de um dispositivo à conta que acabou de entrar.
create or replace function public.link_funnel_anon(p_anon text)
returns void
language sql security definer set search_path = public, pg_temp as $$
  update public.funnel_events set profile_id = auth.uid()
  where anon_id = p_anon and profile_id is null and auth.uid() is not null;
$$;
revoke execute on function public.link_funnel_anon(text) from public, anon;
grant execute on function public.link_funnel_anon(text) to authenticated;

-- Limpeza: guarda 18 meses.
select cron.unschedule('funnel-events-cleanup') where exists (select 1 from cron.job where jobname = 'funnel-events-cleanup');
select cron.schedule('funnel-events-cleanup', '30 4 * * 0',
  $$delete from public.funnel_events where created_at < now() - interval '18 months';$$);

commit;
