# Bookings (admin-web) — API

Contrato completo em `backend/bookings/api.md`. Este módulo chama `admin_confirm_deposit(booking_id, amount_received)` e `admin_complete_booking(booking_id)` diretamente via `supabase.rpc()` do lado do servidor (Server Action), mesmo padrão de `admin-web/users/api.md` (sem Edge Function — nenhum side-effect a orquestrar).

**Repetir aqui, porque importa:** estas duas funções são o stub de pagamento documentado em `backend/bookings/api.md`. Não confundir com uma integração de pagamento real.
