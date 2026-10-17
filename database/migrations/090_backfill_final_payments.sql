-- ============================================================
-- 090 — Pedidos de pagamento final em falta
-- ============================================================
--
-- Reportado (2026-10-17): "depois de pagar o sinal aparece que tudo foi
-- pago, mas não foi". Reservas concluídas antes de 053 nunca ganharam o
-- pagamento final (só `admin_complete_booking()` o cria) e ficavam como
-- "Concluído" com valor por pagar. Cria o que falta: total menos o que já
-- foi pago, para reservas concluídas sem pagamento final.

insert into public.payments (booking_id, payer_id, partner_id, type, amount, status)
select b.id, b.couple_id, b.partner_id, 'final_payment',
       b.total_amount - coalesce((select sum(p.amount) from public.payments p
                                  where p.booking_id = b.id and p.status = 'paid'), 0),
       'pending'
from public.bookings b
where b.status = 'completed'
  and not exists (select 1 from public.payments p where p.booking_id = b.id and p.type = 'final_payment')
  and b.total_amount > coalesce((select sum(p.amount) from public.payments p
                                 where p.booking_id = b.id and p.status = 'paid'), 0);
