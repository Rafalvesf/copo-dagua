import 'package:flutter/material.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../features/auth/screens/forgot_password_screen.dart';
import '../features/auth/screens/login_screen.dart';
import '../features/auth/screens/register_screen.dart';
import '../features/auth/screens/role_selection_screen.dart';
import '../features/auth/screens/verify_email_screen.dart';
import '../features/auth/screens/welcome_screen.dart';
import '../features/bookings/screens/couple_booking_detail_screen.dart';
import '../features/bookings/screens/couple_bookings_screen.dart';
import '../features/payments/screens/pay_screen.dart';
import '../features/partner_payments/screens/partner_payout_setup_screen.dart';
import '../features/payments/screens/pay_done_screen.dart';
import 'payments/payments.dart' show PayArgs;
import '../features/guest_offers/screens/guest_offers_screen.dart';
import '../features/budget/screens/budget_screen.dart';
import '../features/chat/screens/chat_list_screen.dart';
import '../features/chat/screens/chat_thread_screen.dart';
import '../features/checklist/screens/checklist_screen.dart';
import '../features/tasks/screens/service_preferences_screen.dart';
import '../features/tasks/screens/tasks_screen.dart';
import '../features/guest_home/screens/guest_events_screen.dart';
import '../features/guest_home/screens/guest_gallery_screen.dart';
import '../features/guest_home/screens/guest_gifts_screen.dart';
import '../features/guest_home/screens/guest_home_screen.dart';
import '../features/guest_home/screens/guest_onboarding_wizard_screen.dart';
import '../features/guest_home/screens/guest_profile_screen.dart';
import '../features/guest_home/screens/invite_token_screen.dart';
import '../features/guest_home/screens/guest_wedding_details_screen.dart';
import '../features/gallery/screens/gallery_screen.dart';
import '../features/guests/screens/guest_detail_screen.dart';
import '../features/guests/screens/guests_list_screen.dart';
import '../features/home/screens/home_feed_screen.dart';
import '../features/auth/screens/join_wedding_screen.dart';
import '../features/invite/screens/invite_page_screen.dart';
import '../features/invite/screens/rsvp_page_screen.dart';
import '../features/calendar/screens/calendar_screen.dart';
import '../features/maintenance/screens/maintenance_screen.dart';
import '../features/onboarding/screens/onboarding_wizard_screen.dart';
import '../features/partner_bookings/screens/booking_detail_screen.dart';
import '../features/partner_bookings/screens/partner_bookings_screen.dart';
import '../features/partner_bookings/screens/send_proposal_screen.dart';
import '../features/partner_calendar/screens/partner_calendar_screen.dart';
import '../features/partner_home/screens/partner_home_screen.dart';
import '../features/partner_messages/screens/partner_chat_thread_screen.dart';
import '../features/partner_messages/screens/partner_messages_screen.dart';
import '../features/partner_contracts/screens/partner_contracts_screen.dart';
import '../features/partner_onboarding/screens/partner_welcome_screen.dart';
import '../features/partner_payments/screens/partner_payments_screen.dart';
import '../features/partner_profile/screens/business_info_screen.dart';
import '../features/partner_profile/screens/partner_location_screen.dart';
import '../features/partner_profile/screens/partner_availability_screen.dart';
import '../features/partner_profile/screens/partner_pricing_screen.dart';
import '../features/partner_profile/screens/partner_portfolio_screen.dart';
import '../features/partner_profile/screens/partner_profile_screen.dart';
import '../features/partner_reviews/screens/partner_reviews_screen.dart';
import '../features/partner_stats/screens/partner_stats_screen.dart';
import '../features/partner_venue_tables/screens/partner_venue_tables_screen.dart';
import '../features/seating/screens/seating_screen.dart';
import '../features/partners/screens/partners_list_screen.dart';
import '../features/settings/screens/guest_facing_screen.dart' show GuestPageRoute;
import '../features/settings/screens/settings_screen.dart';
import '../features/support/screens/support_screen.dart';
import '../features/wedding/screens/wedding_details_screen.dart';
import 'auth/auth_controller.dart';
import 'models/models.dart';
import 'partners/partner_providers.dart';
import 'platform/maintenance_controller.dart';

const _authRoutes = {
  '/welcome',
  '/role',
  '/register',
  '/login',
  '/forgot-password',
};

class RouterRefreshNotifier extends ChangeNotifier {
  RouterRefreshNotifier(Ref ref) {
    ref.listen(authControllerProvider, (previous, next) => notifyListeners());
    ref.listen(maintenanceControllerProvider, (previous, next) => notifyListeners());
  }
}

final routerProvider = Provider<GoRouter>((ref) {
  final refresh = RouterRefreshNotifier(ref);

  return GoRouter(
    initialLocation: '/welcome',
    refreshListenable: refresh,
    redirect: (context, state) {
      final auth = ref.read(authControllerProvider);
      final location = state.matchedLocation;

      // Página pública de convite — acessível sem sessão, para
      // convidados que abrem o link partilhado.
      if (location.startsWith('/invite/')) return null;

      // Página pública de RSVP por token (`get-rsvp-by-token`/
      // `submit-rsvp`) — mesmo raciocínio de `/invite/`, mas com um
      // convidado real e específico (`guests.rsvp_token`), não a
      // criação de conta genérica de `/invite/`.
      if (location.startsWith('/rsvp/')) return null;

      // Link de convite individual (`invite_token_screen.dart`) — também
      // público: decide por si próprio se mostra "Iniciar sessão/Criar
      // conta" (sem sessão) ou já tenta associar o token (com sessão).
      if (location.startsWith('/i/')) return null;

      // Link "Convidar o teu par" (079) — também público.
      if (location.startsWith('/juntar/')) return null;

      // `/register` sem uma role válida na URL (ver role_selection_screen.dart
      // e a nota na rota `/register` abaixo) volta sempre a `/role` em vez
      // de deixar o registo continuar com uma role adivinhada.
      if (location == '/register') {
        final role = state.uri.queryParameters['role'];
        if (role != 'couple' && role != 'partner' && role != 'guest') return '/role';
      }

      // Modo de manutenção (`admin-web/components/MaintenanceSwitch.tsx`)
      // — só faz sentido uma vez a role conhecida (perfil já carregado);
      // um visitante ainda não autenticado continua a ver o login
      // normalmente. Pedido explícito do utilizador: interruptores
      // independentes por lado, "ambos" é só ligar os dois. Convidado não
      // tem interruptor próprio (`MaintenanceState` só tem `couple`/
      // `partner`) e nunca é bloqueado por manutenção de outro lado.
      final role = auth.profile?.role;
      if (role != null && role != UserRole.guest) {
        final maintenance = ref.read(maintenanceControllerProvider);
        final blocked = role == UserRole.couple ? maintenance.couple : maintenance.partner;
        if (blocked && location != '/maintenance') return '/maintenance';
        if (!blocked && location == '/maintenance') {
          return auth.status == AuthStatus.active
              ? (role == UserRole.partner ? '/partner-home' : '/home')
              : '/welcome';
        }
      }

      switch (auth.status) {
        case AuthStatus.unauthenticated:
        case AuthStatus.error:
          if (_authRoutes.contains(location)) return null;
          return '/welcome';
        case AuthStatus.authenticating:
          if (_authRoutes.contains(location) || location == '/verify-email') {
            return null;
          }
          return '/welcome';
        case AuthStatus.emailUnverified:
          if (location == '/verify-email') return null;
          return '/verify-email';
        case AuthStatus.onboardingIncomplete:
          if (location == '/onboarding') return null;
          return '/onboarding';
        case AuthStatus.active:
          final homeForRole = switch (auth.profile?.role) {
            UserRole.partner => '/partner-home',
            UserRole.guest => '/guest-home',
            _ => '/home',
          };
          if (_authRoutes.contains(location) ||
              location == '/verify-email' ||
              location == '/onboarding') {
            // Pedido do utilizador (2026-10-17): quem organiza entra
            // sempre na aba Parceiros.
            return homeForRole == '/home' ? '/partners' : homeForRole;
          }
          // Mantém o utilizador na área certa mesmo que a role mude a
          // meio da sessão (troca rápida de conta de demonstração).
          for (final home in const ['/home', '/partner-home', '/guest-home']) {
            if (location == home && homeForRole != home) return homeForRole;
          }
          return null;
      }
    },
    routes: [
      GoRoute(
        path: '/welcome',
        builder: (context, state) => const WelcomeScreen(),
      ),
      GoRoute(
        path: '/role',
        builder: (context, state) => const RoleSelectionScreen(),
      ),
      GoRoute(
        path: '/register',
        builder: (context, state) {
          // Lê a role da própria query string (`?role=couple|partner`, ver
          // role_selection_screen.dart) em vez de `extra` — `extra` do
          // go_router não sobrevive de forma fiável no Flutter Web (só
          // existe em memória, não faz parte do URL), o que fazia o registo
          // cair sempre em `UserRole.couple` independentemente do que fosse
          // escolhido em `/role`. `redirect` (acima) já garante que só se
          // chega aqui com 'couple' ou 'partner' na URL.
          return RegisterScreen(
            role: UserRole.values.byName(state.uri.queryParameters['role']!),
            initialWeddingCode: state.uri.queryParameters['code'],
          );
        },
      ),
      GoRoute(path: '/login', builder: (context, state) => const LoginScreen()),
      GoRoute(
        path: '/forgot-password',
        builder: (context, state) => const ForgotPasswordScreen(),
      ),
      GoRoute(
        path: '/verify-email',
        builder: (context, state) => const VerifyEmailScreen(),
      ),
      GoRoute(
        path: '/onboarding',
        builder: (context, state) {
          final step = int.tryParse(state.uri.queryParameters['step'] ?? '') ?? 0;
          return OnboardingWizardScreen(key: ValueKey('onb$step'), initialStep: step);
        },
      ),
      GoRoute(
        path: '/maintenance',
        builder: (context, state) => const MaintenanceScreen(),
      ),
      GoRoute(
        path: '/home',
        builder: (context, state) => const HomeFeedScreen(),
      ),
      GoRoute(
        path: '/partner-home',
        builder: (context, state) => const PartnerHomeScreen(),
      ),
      GoRoute(
        path: '/guest-home',
        builder: (context, state) => const GuestHomeScreen(),
      ),
      GoRoute(
        // Variante com `weddingId` explícito — usada só por uma conta
        // de casal em "Modo convidado" (`guest_mode_screen.dart`),
        // nunca por uma conta 100% convidado. Caminho distinto de
        // `/guest-home` de propósito: o `redirect` acima devolve
        // sempre uma conta de casal a `/home` ao ver `location ==
        // '/guest-home'` exatamente — este caminho nunca é esse texto
        // exato, por isso não é apanhado por essa guarda.
        path: '/guest-home/:weddingId',
        builder: (context, state) =>
            GuestHomeScreen(weddingId: state.pathParameters['weddingId']),
      ),
      GoRoute(
        path: '/juntar/:token',
        builder: (context, state) => JoinWeddingScreen(token: state.pathParameters['token']!),
      ),
      GoRoute(
        path: '/i/:token',
        builder: (context, state) => InviteTokenScreen(token: state.pathParameters['token']!),
      ),
      GoRoute(
        // Wizard "Vais ao casamento?" — pedido explícito do utilizador
        // (071/073), mostrado uma única vez por `GuestHomeScreen`
        // quando `guest.onboardingCompletedAt == null`.
        path: '/guest-onboarding/:weddingId',
        builder: (context, state) {
          final step = int.tryParse(state.uri.queryParameters['step'] ?? '') ?? 0;
          if (state.extra is! Guest) return _LostRoute('/guest-home/${state.pathParameters['weddingId']}');
          return GuestOnboardingWizardScreen(
            key: ValueKey('gonb$step'),
            weddingId: state.pathParameters['weddingId']!,
            guest: state.extra as Guest,
            initialStep: step,
          );
        },
      ),
      GoRoute(
        path: '/guest-events',
        builder: (context, state) => const GuestEventsScreen(),
      ),
      GoRoute(
        path: '/guest-wedding-details',
        builder: (context, state) => state.extra is GuestWedding
            ? GuestWeddingDetailsScreen(wedding: state.extra as GuestWedding)
            : const _LostRoute('/guest-home'),
      ),
      GoRoute(
        path: '/guest-gifts',
        builder: (context, state) => const GuestGiftsScreen(),
      ),
      GoRoute(
        path: '/guest-gifts/:weddingId',
        builder: (context, state) =>
            GuestGiftsScreen(weddingId: state.pathParameters['weddingId']),
      ),
      GoRoute(
        path: '/guest-profile',
        builder: (context, state) => const GuestProfileScreen(),
      ),
      GoRoute(
        path: '/guest-profile/:weddingId',
        builder: (context, state) =>
            GuestProfileScreen(weddingId: state.pathParameters['weddingId']),
      ),
      GoRoute(
        // Alojamento e transporte para os convidados (099_guest_offers.sql).
        path: '/guest-stay/:weddingId',
        builder: (context, state) => GuestOffersScreen(weddingId: state.pathParameters['weddingId']!),
      ),
      GoRoute(
        path: '/guest-gallery',
        builder: (context, state) => const GuestGalleryScreen(),
      ),
      GoRoute(
        path: '/guest-gallery/:weddingId',
        builder: (context, state) =>
            GuestGalleryScreen(weddingId: state.pathParameters['weddingId']),
      ),
      GoRoute(
        path: '/partner-contracts',
        builder: (context, state) => const PartnerContractsScreen(),
      ),
      GoRoute(
        // Chat antigo de demonstração (MockBackend) — removido; o link
        // antigo leva às Mensagens reais.
        path: '/partner-chat',
        redirect: (context, state) => '/partner-messages',
      ),
      GoRoute(
        path: '/partner-welcome',
        builder: (context, state) => const PartnerWelcomeScreen(),
      ),
      GoRoute(
        path: '/partner-profile',
        builder: (context, state) => const PartnerProfileScreen(),
      ),
      GoRoute(
        path: '/partner-availability',
        builder: (context, state) => const PartnerAvailabilityScreen(),
      ),
      GoRoute(
        path: '/partner-location',
        builder: (context, state) => const PartnerLocationScreen(),
      ),
      GoRoute(
        path: '/partner-business-info',
        builder: (context, state) => const BusinessInfoScreen(),
      ),
      GoRoute(
        path: '/partner-portfolio',
        builder: (context, state) => const PartnerPortfolioScreen(),
      ),
      GoRoute(
        path: '/partner-pricing',
        builder: (context, state) => const PartnerPricingScreen(),
      ),
      GoRoute(
        path: '/partner-requests',
        builder: (context, state) => PartnerBookingsScreen(
          initialSegment: state.uri.queryParameters['segment'],
        ),
      ),
      GoRoute(
        path: '/partner-requests/:id',
        builder: (context, state) => state.extra is Booking
            ? BookingDetailScreen(booking: state.extra as Booking)
            : const _LostRoute('/partner-requests'),
      ),
      GoRoute(
        path: '/partner-requests/:id/proposal',
        builder: (context, state) => state.extra is Booking
            ? SendProposalScreen(booking: state.extra as Booking)
            : const _LostRoute('/partner-requests'),
      ),
      GoRoute(
        path: '/partner-messages',
        builder: (context, state) => const PartnerMessagesScreen(),
      ),
      GoRoute(
        path: '/partner-messages/:id',
        builder: (context, state) => state.extra is ChatConversation
            ? PartnerChatThreadScreen(conversation: state.extra as ChatConversation)
            : const _LostRoute('/partner-messages'),
      ),
      GoRoute(
        path: '/partner-payments',
        builder: (context, state) => const PartnerPaymentsScreen(),
      ),
      GoRoute(
        path: '/partner-payments/setup',
        builder: (context, state) => const PartnerPayoutSetupScreen(),
      ),
      GoRoute(
        path: '/partner-venue-tables',
        builder: (context, state) => const PartnerVenueTablesScreen(),
      ),
      GoRoute(
        path: '/partner-reviews',
        builder: (context, state) => const PartnerReviewsScreen(),
      ),
      GoRoute(
        path: '/partner-stats',
        builder: (context, state) => const PartnerStatsScreen(),
      ),
      GoRoute(
        path: '/partner-calendar',
        builder: (context, state) => const PartnerCalendarScreen(),
      ),
      GoRoute(
        path: '/calendar',
        builder: (context, state) => const CalendarScreen(),
      ),
      GoRoute(
        path: '/wedding',
        // `?aparencia=1`: abre logo no modo de mudar estilo e cor
        // (Definições → Aparência do menu).
        builder: (context, state) => WeddingDetailsScreen(
          key: ValueKey(state.uri.toString()),
          startEditing: state.uri.queryParameters['aparencia'] == '1',
        ),
      ),
      GoRoute(
        path: '/gallery',
        builder: (context, state) =>
            GalleryScreen(weddingId: state.extra as String?),
      ),
      GoRoute(
        path: '/guests',
        builder: (context, state) => const GuestsListScreen(),
      ),
      GoRoute(
        path: '/guests/:id',
        builder: (context, state) =>
            GuestDetailScreen(guestId: state.pathParameters['id']!),
      ),
      GoRoute(
        path: '/checklist',
        builder: (context, state) => const ChecklistScreen(),
      ),
      GoRoute(
        path: '/tasks',
        builder: (context, state) => const TasksScreen(),
      ),
      GoRoute(
        path: '/service-preferences',
        builder: (context, state) => const ServicePreferencesScreen(),
      ),
      GoRoute(
        path: '/guest-page',
        builder: (context, state) => const GuestPageRoute(),
      ),
      GoRoute(
        path: '/budget',
        builder: (context, state) => const BudgetScreen(),
      ),
      GoRoute(
        path: '/seating',
        builder: (context, state) => const SeatingScreen(),
      ),
      GoRoute(
        path: '/bookings',
        builder: (context, state) => CoupleBookingsScreen(guestsTab: state.uri.queryParameters['convidados'] == '1'),
      ),
      GoRoute(
        path: '/pay',
        builder: (context, state) => state.extra is PayArgs
            ? PayScreen(args: state.extra as PayArgs)
            : const _LostRoute('/bookings'),
      ),
      GoRoute(
        path: '/pay/done',
        builder: (context, state) => state.extra is PayDoneArgs
            ? PayDoneScreen(args: state.extra as PayDoneArgs)
            : const _LostRoute('/bookings'),
      ),
      GoRoute(
        path: '/bookings/detail',
        builder: (context, state) => state.extra is CoupleBooking
            ? CoupleBookingDetailScreen(booking: state.extra as CoupleBooking)
            : const _LostRoute('/bookings'),
      ),
      GoRoute(
        path: '/partners',
        builder: (context, state) {
          final args = state.extra as PartnerPickerArgs?;
          return PartnersListScreen(
            categorySlug: args?.categorySlug,
            selectionMode: args?.selectionMode ?? false,
          );
        },
      ),
      GoRoute(
        path: '/chat',
        builder: (context, state) => const ChatListScreen(),
      ),
      GoRoute(
        path: '/chat/:conversationId',
        builder: (context, state) => state.extra is ChatConversation
            ? ChatThreadScreen(conversation: state.extra as ChatConversation)
            : const _LostRoute('/chat'),
      ),
      GoRoute(
        path: '/settings',
        builder: (context, state) => SettingsScreen(fromGuestMode: state.extra == true),
      ),
      GoRoute(
        path: '/support',
        builder: (context, state) => const SupportScreen(),
      ),
      GoRoute(
        path: '/invite/:slug',
        builder: (context, state) =>
            InvitePageScreen(slug: state.pathParameters['slug']!),
      ),
      GoRoute(
        path: '/rsvp/:token',
        builder: (context, state) =>
            RsvpPageScreen(token: state.pathParameters['token']!),
      ),
    ],
  );
});


/// Ecrã aberto sem os dados de que precisa (ex.: recarregar a página no
/// telemóvel num detalhe — o `extra` do go_router perde-se). Antes ficava
/// um ecrã de erro em branco; agora volta à lista certa.
class _LostRoute extends StatelessWidget {
  final String to;
  const _LostRoute(this.to);

  @override
  Widget build(BuildContext context) {
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (context.mounted) GoRouter.of(context).go(to);
    });
    return const Scaffold(backgroundColor: Colors.white, body: Center(child: CircularProgressIndicator()));
  }
}
