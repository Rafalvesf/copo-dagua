# Bookings (admin-web) — Critérios de Aceitação

- [ ] Lista mostra reservas reais, filtráveis por estado.
- [ ] "Confirmar sinal recebido" só aparece quando `status = awaiting_deposit`; "Marcar como concluída" só quando `confirmed`.
- [ ] Introduzir um valor diferente do sinal esperado é rejeitado (`amount_mismatch`), sem mudar o estado.
- [ ] Introduzir o valor exato do sinal confirma automaticamente, sem passo manual adicional. **Validado 2026-08-30 contra o Supabase real** (não só planeado) — ver `database/README.md`.
- [ ] Ambas as ações atualizam a UI e aparecem na timeline (`booking_events`) depois de confirmadas.
- [ ] O aviso de "sem pagamento real" está sempre visível quando há uma ação disponível.
- [ ] Um não-admin não consegue aceder a `/bookings` (mesmo guard de todas as outras rotas, `lib/dal.ts`).
