-- ============================================================
-- Corrige: "Não foi possível carregar" nos pedidos do parceiro
-- ============================================================
-- A migração 116 ligou `private_owner` a `profiles` com chave estrangeira.
-- Como `bookings` já tinha `couple_id → profiles`, a API passou a ter duas
-- ligações possíveis e consultas como `bookings ... profiles(full_name)`
-- falham ("more than one relationship"). A chave estrangeira não é
-- necessária: retira-se, a coluna fica.

alter table public.bookings drop constraint if exists bookings_private_owner_fkey;
alter table public.conversations drop constraint if exists conversations_private_owner_fkey;
alter table public.wedding_tasks drop constraint if exists wedding_tasks_private_owner_fkey;

-- A API recarrega o esquema logo a seguir.
notify pgrst, 'reload schema';
