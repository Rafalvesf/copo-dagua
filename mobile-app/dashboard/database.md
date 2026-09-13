# Dashboard (mobile-app) — Modelo de Dados

Nenhuma tabela real — tudo `core/mock/mock_backend.dart`. Novo nesta sessão:

```dart
class CoupleBooking {
  final String id;
  final String weddingId;
  final String partnerName;
  final PartnerCategory category;
  final DateTime serviceDate;
  final double amount;
  final BookingStatus status;
}

enum SupportTicketStatus { open, pending, resolved }

class SupportTicket {
  final String id;
  final String userId; // casal ou parceiro — ver partner-app/dashboard/database.md
  final String subject;
  final SupportTicketStatus status;
  final DateTime createdAt;
}
```

`CoupleBooking` não reutiliza `Booking` (modelo já existente, mas perspetiva do parceiro — `clientName`, `partnerId`) porque os campos não fazem sentido invertidos; `SupportTicket` é partilhado entre casal e parceiro, filtrado por `userId` (`MockBackend.listSupportTickets(userId)`), mesmo padrão de `Booking.partnerId` filtrar por dono.

Providers: `core/home/home_providers.dart` (`coupleBookingsProvider`, `coupleSupportTicketsProvider`) — ficheiro novo, ver nota em `README.md` sobre não existir ainda um `core/home_app` equivalente ao `core/partner_app`.

Quando `backend/bookings/` (real, Supabase) vier a ser ligado a esta app, `CoupleBooking` deve mapear para `bookings` filtradas por `couple_id = auth.uid()`, e `SupportTicket` para uma tabela de suporte ainda por desenhar (`backend/support/`, ⏳).
