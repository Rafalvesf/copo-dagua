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
import '../features/checklist/screens/checklist_screen.dart';
import '../features/guests/screens/guest_detail_screen.dart';
import '../features/guests/screens/guests_list_screen.dart';
import '../features/home/screens/home_feed_screen.dart';
import '../features/invite/screens/invite_page_screen.dart';
import '../features/onboarding/screens/onboarding_wizard_screen.dart';
import '../features/seating/screens/seating_screen.dart';
import '../features/suppliers/screens/suppliers_list_screen.dart';
import '../features/support/screens/support_screen.dart';
import '../features/wedding/screens/wedding_details_screen.dart';
import 'auth/auth_controller.dart';
import 'models/models.dart';
import 'suppliers/supplier_providers.dart';

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
          if (_authRoutes.contains(location) ||
              location == '/verify-email' ||
              location == '/onboarding') {
            return '/home';
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
        path: '/suppliers',
        builder: (context, state) {
          final args = state.extra as SupplierPickerArgs?;
          return SuppliersListScreen(
            category: args?.category,
            selectionMode: args?.selectionMode ?? false,
          );
        },
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
