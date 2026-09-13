import 'package:supabase_flutter/supabase_flutter.dart';

/// Ligação ao mesmo projeto Supabase real que `admin-web/` já usa
/// (`admin-web/app/.env.local.example`) — mesmas duas credenciais
/// públicas (URL + publishable/anon key), seguras para embutir no
/// cliente (é exatamente para isso que a publishable key existe; nunca
/// a service role key, essa nunca deve chegar a um cliente).
///
/// 2026-08-30: primeira vez que `mobile-app/`/`partner-app/` deixam de
/// estar 100% em `core/mock/mock_backend.dart` — ver `ROADMAP.md` para o
/// âmbito exato do que foi ligado nesta ronda (Auth, Wedding, Partner
/// Profile mínimo, Bookings) e do que continua mock (Guests, Checklist,
/// Budget, Chat, Reviews, Portfolio, Pricing, Support).
class SupabaseConfig {
  static const url = 'https://yknbtsmcmjxzzhijyiav.supabase.co';
  static const publishableKey = 'sb_publishable_TkmeAQOlKuN4kUii5i70Rg_Qiz8D7cc';

  static Future<void> initialize() {
    return Supabase.initialize(url: url, publishableKey: publishableKey);
  }
}

SupabaseClient get supabase => Supabase.instance.client;
