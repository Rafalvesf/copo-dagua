# Dashboard (partner-app) — Modelo de Dados

Nenhuma tabela real. Reutiliza `Booking`/`PartnerStats` já existentes (`core/models/models.dart`, seeded em `core/mock/mock_backend.dart`); `PartnerStats` ganhou dois campos novos:

```dart
class PartnerStats {
  // ...campos existentes (views, requestCount, conversionPct, avgRating)
  final double revenue;
  final double revenueDeltaPct;
}
```

`SupportTicket` é o mesmo modelo partilhado documentado em `mobile-app/dashboard/database.md` — `listSupportTickets(userId)` filtra pelo `id` do parceiro em vez do casal.

Providers novos: `partnerSupportTicketsProvider` em `core/partner_app/partner_app_providers.dart` (ficheiro já existente, só a função é nova).

Quando `backend/bookings/` real for ligado a esta app, `PartnerStats.revenue` deve mapear para `sum(bookings.total_amount) where partner_id = auth.uid() and status in ('confirmed','completed')` — mesma query (por parceiro em vez de agregada) que `admin-web/dashboard/database.md` já usa para "Volume confirmado".
