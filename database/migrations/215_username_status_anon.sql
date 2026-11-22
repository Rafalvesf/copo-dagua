-- 215 · Ver se o @ está livre durante o registo (pedido 2026-11-22).
--
-- O registo passou a pedir o @ logo a seguir ao nome. Nesse momento ainda
-- não há sessão, por isso a verificação («@ana está livre» / «já está
-- ocupado») precisa de poder correr como anon. A função só diz o estado de
-- um @ (os @ já são públicos nos perfis) — não devolve mais nada.

begin;

grant execute on function public.username_status(text) to anon;

insert into public.applied_migrations (id) values ('215') on conflict do nothing;

commit;
