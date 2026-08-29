import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../features/auth/screens/forgot_password_screen.dart';
import '../features/auth/screens/login_screen.dart';
import '../features/auth/screens/register_screen.dart';
import '../features/auth/screens/role_selection_screen.dart';
import '../features/auth/screens/verify_email_screen.dart';
import '../features/auth/screens/welcome_screen.dart';
import '../features/budget/screens/budget_screen.dart';
import '../features/chat/screens/chat_list_screen.dart';
import '../features/chat/screens/chat_thread_screen.dart';
import '../features/checklist/screens/checklist_screen.dart';
import '../features/guests/screens/guest_detail_screen.dart';
import '../features/guests/screens/guests_list_screen.dart';
import '../features/home/screens/home_feed_screen.dart';
import '../features/invite/screens/invite_page_screen.dart';
import '../features/calendar/screens/calendar_screen.dart';
import '../features/onboarding/screens/onboarding_wizard_screen.dart';
import '../features/partner_bookings/screens/booking_detail_screen.dart';
import '../features/partner_bookings/screens/partner_bookings_screen.dart';
import '../features/partner_calendar/screens/partner_calendar_screen.dart';
import '../features/partner_home/screens/partner_chat_screen.dart';
import '../features/partner_home/screens/partner_home_screen.dart';
import '../features/partner_messages/screens/partner_chat_thread_screen.dart';
import '../features/partner_messages/screens/partner_messages_screen.dart';
import '../features/partner_onboarding/screens/partner_welcome_screen.dart';
import '../features/partner_profile/screens/business_info_screen.dart';
import '../features/partner_profile/screens/partner_pricing_screen.dart';
import '../features/partner_profile/screens/partner_portfolio_screen.dart';
import '../features/partner_profile/screens/partner_profile_screen.dart';
import '../features/partner_reviews/screens/partner_reviews_screen.dart';
import '../features/partner_stats/screens/partner_stats_screen.dart';
import '../features/seating/screens/seating_screen.dart';
import '../features/partners/screens/partners_list_screen.dart';
import '../features/settings/screens/settings_screen.dart';
import '../features/support/screens/support_screen.dart';
import '../features/wedding/screens/wedding_details_screen.dart';
import 'auth/auth_controller.dart';
import 'models/models.dart';
import 'partners/partner_providers.dart';

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
          final homeForRole = auth.profile?.role == UserRole.partner
              ? '/partner-home'
              : '/home';
          if (_authRoutes.contains(location) ||
              location == '/verify-email' ||
              location == '/onboarding') {
            return homeForRole;
          }
          // Mantém o utilizador na área certa mesmo que a role mude a
          // meio da sessão (troca rápida de conta de demonstração).
          if (location == '/home' && homeForRole != '/home') {
            return homeForRole;
          }
          if (location == '/partner-home' && homeForRole != '/partner-home') {
            return homeForRole;
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
        builder: (context, state) =>
            RegisterScreen(role: state.extra as UserRole? ?? UserRole.couple),
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
        builder: (context, state) => const OnboardingWizardScreen(),
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
        path: '/partner-chat',
        builder: (context, state) => const PartnerChatScreen(),
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
        builder: (context, state) => const PartnerBookingsScreen(),
      ),
      GoRoute(
        path: '/partner-requests/:id',
        builder: (context, state) =>
            BookingDetailScreen(booking: state.extra as Booking),
      ),
      GoRoute(
        path: '/partner-messages',
        builder: (context, state) => const PartnerMessagesScreen(),
      ),
      GoRoute(
        path: '/partner-messages/:id',
        builder: (context, state) => PartnerChatThreadScreen(
          conversation: state.extra as ChatConversation,
        ),
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
        builder: (context, state) => const WeddingDetailsScreen(),
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
        path: '/budget',
        builder: (context, state) => const BudgetScreen(),
      ),
      GoRoute(
        path: '/seating',
        builder: (context, state) => const SeatingScreen(),
      ),
      GoRoute(
        path: '/partners',
        builder: (context, state) {
          final args = state.extra as PartnerPickerArgs?;
          return PartnersListScreen(
            category: args?.category,
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
        builder: (context, state) =>
            ChatThreadScreen(conversation: state.extra as ChatConversation),
      ),
      GoRoute(
        path: '/settings',
        builder: (context, state) => const SettingsScreen(),
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
    ],
  );
});
