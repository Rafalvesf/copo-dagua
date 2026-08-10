import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../features/auth/screens/forgot_password_screen.dart';
import '../features/auth/screens/login_screen.dart';
import '../features/auth/screens/register_screen.dart';
import '../features/auth/screens/role_selection_screen.dart';
import '../features/auth/screens/verify_email_screen.dart';
import '../features/auth/screens/welcome_screen.dart';
import '../features/guests/screens/guest_detail_screen.dart';
import '../features/guests/screens/guests_list_screen.dart';
import '../features/home/screens/home_feed_screen.dart';
import '../features/onboarding/screens/onboarding_wizard_screen.dart';
import '../features/wedding/screens/wedding_details_screen.dart';
import 'auth/auth_controller.dart';
import 'models/models.dart';

const _authRoutes = {'/welcome', '/role', '/register', '/login', '/forgot-password'};

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

      switch (auth.status) {
        case AuthStatus.unauthenticated:
        case AuthStatus.error:
          if (_authRoutes.contains(location)) return null;
          return '/welcome';
        case AuthStatus.authenticating:
          if (_authRoutes.contains(location) || location == '/verify-email') return null;
          return '/welcome';
        case AuthStatus.emailUnverified:
          if (location == '/verify-email') return null;
          return '/verify-email';
        case AuthStatus.onboardingIncomplete:
          if (location == '/onboarding') return null;
          return '/onboarding';
        case AuthStatus.active:
          if (_authRoutes.contains(location) || location == '/verify-email' || location == '/onboarding') {
            return '/home';
          }
          return null;
      }
    },
    routes: [
      GoRoute(path: '/welcome', builder: (context, state) => const WelcomeScreen()),
      GoRoute(path: '/role', builder: (context, state) => const RoleSelectionScreen()),
      GoRoute(
        path: '/register',
        builder: (context, state) => RegisterScreen(role: state.extra as UserRole? ?? UserRole.couple),
      ),
      GoRoute(path: '/login', builder: (context, state) => const LoginScreen()),
      GoRoute(path: '/forgot-password', builder: (context, state) => const ForgotPasswordScreen()),
      GoRoute(path: '/verify-email', builder: (context, state) => const VerifyEmailScreen()),
      GoRoute(path: '/onboarding', builder: (context, state) => const OnboardingWizardScreen()),
      GoRoute(path: '/home', builder: (context, state) => const HomeFeedScreen()),
      GoRoute(path: '/wedding', builder: (context, state) => const WeddingDetailsScreen()),
      GoRoute(path: '/guests', builder: (context, state) => const GuestsListScreen()),
      GoRoute(
        path: '/guests/:id',
        builder: (context, state) => GuestDetailScreen(guestId: state.pathParameters['id']!),
      ),
    ],
  );
});
