import 'package:flutter/material.dart';
import 'pending_deep_link.dart';
import 'invite/public_invite.dart' show PendingInvite;
import '../features/events/screens/tickets_screens.dart' deferred as l1;
import '../features/events/screens/ticket_pass_screens.dart' show CheckInScreen;
import '../features/settings/screens/organizers_screen.dart' show OrganizersScreen, PermissionGate;
import '../features/gifts/screens/gift_list_screens.dart' show OrganizerGiftListScreen, GiftShopScreen, GiftReturnScreen;
import '../features/gifts/screens/partner_shop_screen.dart' show PartnerShopScreen;
import '../features/partner_pro/partner_pro_screen.dart' show PartnerProScreen;
import 'wedding/organizers.dart' show OrganizerPerm;
import '../features/messages/team_messages.dart' deferred as l2;
import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'lazy_page.dart';
import 'page_transitions.dart';
import 'chat/group_chat.dart' show ChatGroup;
import '../features/chat/screens/groups_screen.dart' deferred as l3;

import '../shared/theme_color/theme_color.dart' show BarColorObserver;

import '../features/auth/screens/forgot_password_screen.dart';
import '../features/auth/screens/login_screen.dart';
import '../features/auth/screens/register_screen.dart';
import '../features/auth/screens/role_selection_screen.dart';
import '../features/auth/screens/verify_email_screen.dart';
import '../features/auth/screens/welcome_screen.dart';
import '../features/bookings/screens/couple_booking_detail_screen.dart' deferred as l4;
import '../features/bookings/screens/couple_bookings_screen.dart' deferred as l5;
import '../features/payments/screens/pay_screen.dart' deferred as l6;
import '../features/partner_payments/screens/partner_payout_setup_screen.dart' deferred as l7;
import '../features/payments/screens/pay_done_screen.dart';
import '../features/payments/screens/pay_return_screen.dart' deferred as l8;
import 'payments/pay_return.dart';
import 'payments/payments.dart' show PayArgs;
import '../features/guest_offers/screens/guest_offers_screen.dart' deferred as l9;
import '../features/budget/screens/budget_screen.dart' deferred as l10;
import '../features/chat/screens/chat_list_screen.dart' deferred as l11;
import '../features/chat/screens/chat_thread_screen.dart' deferred as l12;
import '../features/checklist/screens/checklist_screen.dart' deferred as l13;
import '../features/tasks/screens/service_preferences_screen.dart' deferred as l14;
import '../features/tasks/screens/tasks_screen.dart' deferred as l15;
import '../features/events/screens/eventos_screen.dart' deferred as l16;
import '../features/events/screens/mode_switch_screen.dart';
import '../features/guest_home/screens/guest_gallery_screen.dart' deferred as l17;
import '../features/guest_home/screens/guest_gifts_screen.dart' deferred as l18;
import '../features/guest_home/screens/guest_home_screen.dart' as l19;
import '../features/guest_home/screens/guest_onboarding_wizard_screen.dart' deferred as l20;
import '../features/guest_home/screens/guest_profile_screen.dart' deferred as l21;
import '../features/guest_home/screens/invite_token_screen.dart' deferred as l22;
import '../features/partners/screens/partner_invite_screen.dart' deferred as l23;
import '../features/gifts/screens/envelopes_screen.dart' deferred as l24;
import '../features/guest_home/screens/guest_wedding_details_screen.dart' deferred as l25;
import '../features/gallery/screens/gallery_screen.dart' deferred as l26;
import '../features/guests/screens/guest_detail_screen.dart' deferred as l27;
import '../features/guests/screens/guests_list_screen.dart' deferred as l28;
import '../features/home/screens/home_feed_screen.dart' as l29;
import '../features/auth/screens/join_wedding_screen.dart' deferred as l30;
import '../features/invite/screens/invite_page_screen.dart' deferred as l31;
import '../features/invite/screens/rsvp_page_screen.dart' deferred as l32;
import '../features/calendar/screens/calendar_screen.dart' deferred as l33;
import '../features/maintenance/screens/maintenance_screen.dart';
import '../features/onboarding/screens/onboarding_wizard_screen.dart' deferred as l34;
import '../features/partner_bookings/screens/booking_detail_screen.dart' deferred as l35;
import '../features/partner_bookings/screens/partner_bookings_screen.dart' deferred as l36;
import '../features/partner_bookings/screens/send_proposal_screen.dart' deferred as l37;
import '../features/partner_calendar/screens/partner_calendar_screen.dart' deferred as l38;
import '../features/partner_home/screens/partner_home_screen.dart' as l39;
import '../features/partner_messages/screens/partner_chat_thread_screen.dart' deferred as l40;
import '../features/partner_messages/screens/partner_messages_screen.dart' deferred as l41;
import '../features/partner_contracts/screens/partner_contracts_screen.dart' deferred as l42;
import '../features/partner_onboarding/screens/partner_welcome_screen.dart' deferred as l43;
import '../features/partner_payments/screens/partner_payments_screen.dart' deferred as l44;
import '../features/partner_profile/screens/business_info_screen.dart' deferred as l45;
import '../features/partner_profile/screens/partner_location_screen.dart' deferred as l46;
import '../features/partner_profile/screens/partner_cancellation_screen.dart' deferred as l47;
import '../features/partner_profile/screens/partner_availability_screen.dart' deferred as l48;
import '../features/partner_profile/screens/partner_pricing_screen.dart' deferred as l49;
import '../features/partner_profile/screens/partner_portfolio_screen.dart' deferred as l50;
import '../features/partner_profile/screens/partner_profile_screen.dart' deferred as l51;
import '../features/partner_reviews/screens/partner_reviews_screen.dart' deferred as l52;
import '../features/partner_stats/screens/partner_stats_screen.dart' deferred as l53;
import '../features/partner_venue_tables/screens/partner_venue_tables_screen.dart' deferred as l54;
import '../features/seating/screens/seating_screen.dart' deferred as l55;
import '../features/partners/screens/partners_list_screen.dart' deferred as l56;
import '../features/settings/screens/guest_facing_screen.dart' show GuestPageRoute;
import '../features/settings/screens/settings_screen.dart' deferred as l57;
import '../features/support/screens/support_screen.dart' deferred as l58;
import '../features/wedding/screens/wedding_details_screen.dart' deferred as l59;
import 'auth/auth_controller.dart';
import 'models/models.dart';
import 'partners/partner_providers.dart';
import 'platform/maintenance_controller.dart';
import '../features/legal/legal_screen.dart' deferred as l60;
import '../features/messages/admin_message_screen.dart' deferred as l61;
import '../features/legal/legal_texts.dart';
import '../features/settings/screens/username_screen.dart' deferred as l62;

/// Rotas que vale a pena guardar para depois do login (não o início).
bool _deepLinkWorthKeeping(String location) =>
    location != '/' &&
    location != '/home' &&
    location != '/maintenance' &&
    location != '/verify-email' &&
    location != '/onboarding' &&
    !_authRoutes.contains(location);

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
    // A barra do topo acompanha a página visível (2026-10-19).
    observers: [BarColorObserver()],
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

      // Convite de um parceiro aos seus clientes (migração 151) — público.
      if (location.startsWith('/p/')) return null;

      // Link "Convidar o teu par" (079) — também público.
      if (location.startsWith('/juntar/')) return null;

      // Termos e Política de Privacidade — públicos (abrem do registo).
      if (location == '/termos' || location == '/privacidade' || location == '/apagar-conta') return null;

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
      // independentes por lado.
      // Convidados passaram a ter interruptor próprio (2026-10-20).
      final role = auth.profile?.role;
      if (role != null) {
        final maintenance = ref.read(maintenanceControllerProvider);
        final blocked = switch (role) {
          UserRole.couple => maintenance.couple,
          UserRole.partner => maintenance.partner,
          UserRole.guest => maintenance.guest,
        };
        if (blocked && location != '/maintenance') return '/maintenance';
        if (!blocked && location == '/maintenance') {
          return auth.status == AuthStatus.active
              ? switch (role) {
                  UserRole.partner => '/partner-home',
                  UserRole.guest => '/eventos',
                  UserRole.couple => '/home',
                }
              : '/welcome';
        }
      }

      switch (auth.status) {
        case AuthStatus.unauthenticated:
        case AuthStatus.error:
          // App instalada a partir do convite ("Descarregar a app", 162):
          // ao abrir, vai direto ao convite com o código já aplicado.
          if (location == '/welcome' && PendingInvite.code != null) {
            return '/invite/${PendingInvite.take()}?app=1';
          }
          if (_authRoutes.contains(location)) return null;
          // Link partilhado aberto sem sessão: volta lá depois de entrar.
          if (_deepLinkWorthKeeping(location)) PendingDeepLink.save(state.uri.toString());
          return '/welcome';
        case AuthStatus.authenticating:
          if (_authRoutes.contains(location) || location == '/verify-email') {
            return null;
          }
          // A sessão ainda está a ser recuperada: não perder o link aberto.
          if (_deepLinkWorthKeeping(location)) PendingDeepLink.save(state.uri.toString());
          return '/welcome';
        case AuthStatus.emailUnverified:
          if (location == '/verify-email') return null;
          return '/verify-email';
        case AuthStatus.onboardingIncomplete:
          if (location == '/onboarding') return null;
          return '/onboarding';
        case AuthStatus.active:
          // Conta "Utilizador" (2026-11, internamente `guest` até criar
          // um evento) começa no separador Eventos.
          final homeForRole = switch (auth.profile?.role) {
            UserRole.partner => '/partner-home',
            UserRole.guest => '/eventos',
            _ => '/home',
          };
          // Regresso de um pagamento (página recarregou): direto à confirmação.
          if (PayReturn.pending != null && location != '/pay/return') return '/pay/return';
          if (_authRoutes.contains(location) ||
              location == '/verify-email' ||
              location == '/onboarding') {
            // Link que a pessoa abriu antes de entrar (2026-11-03).
            final pending = PendingDeepLink.take();
            if (pending != null) return pending;
            // Pedido do utilizador (2026-10-17): quem organiza entra
            // sempre na aba Parceiros.
            return homeForRole == '/home' ? '/partners' : homeForRole;
          }
          // Mantém o utilizador na área certa mesmo que a role mude a
          // meio da sessão (troca rápida de conta de demonstração).
          if (location == '/home' && role != UserRole.couple) return homeForRole;
          if (location == '/partner-home' && role != UserRole.partner) return homeForRole;
          if (location == '/guest-home' && role != UserRole.guest) return homeForRole;
          if (location == '/eventos' && role == UserRole.partner) return homeForRole;
          // Conta que organiza a saltar entre o seu evento e o de outra
          // pessoa como convidado: ecrã de transição pelo meio (2026-11).
          if (role == UserRole.couple && location != '/modo') {
            return AppModeTracker.interceptFor(location, state.uri.toString());
          }
          if (role != UserRole.couple) AppModeTracker.current = null;
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
          return lazyPage([l34.loadLibrary], () => l34.OnboardingWizardScreen(key: ValueKey('onb$step'), initialStep: step));
        },
      ),
      GoRoute(
        path: '/maintenance',
        builder: (context, state) => const MaintenanceScreen(),
      ),
      tabRoute(
        path: '/home',
        builder: (context, state) =>l29.HomeFeedScreen(),
      ),
      tabRoute(
        path: '/partner-home',
        builder: (context, state) =>l39.PartnerHomeScreen(),
      ),
      tabRoute(
        path: '/guest-home',
        builder: (context, state) =>l19.GuestHomeScreen(),
      ),
      tabRoute(
        // Variante com `weddingId` explícito — usada só por uma conta
        // de casal em "Modo convidado" (`guest_mode_screen.dart`),
        // nunca por uma conta 100% convidado. Caminho distinto de
        // `/guest-home` de propósito: o `redirect` acima devolve
        // sempre uma conta de casal a `/home` ao ver `location ==
        // '/guest-home'` exatamente — este caminho nunca é esse texto
        // exato, por isso não é apanhado por essa guarda.
        path: '/guest-home/:weddingId',
        builder: (context, state) =>l19.GuestHomeScreen(weddingId: state.pathParameters['weddingId']),
      ),
      // Mensagem da equipa (admin, migrações 133/134), com resposta.
      GoRoute(path: '/mensagem/:id', builder: (context, state) =>lazyPage([l61.loadLibrary], () =>  l61.AdminMessageScreen(id: state.pathParameters['id']!))),
      // Conversa com a Equipa À Nossa! (mensagens diretas, migração 146).
      GoRoute(path: '/equipa', builder: (context, state) =>lazyPage([l2.loadLibrary], () =>  l2.TeamThreadScreen())),
      GoRoute(path: '/termos', builder: (context, state) =>lazyPage([l60.loadLibrary], () =>  l60.LegalScreen(doc: termsDoc))),
      GoRoute(path: '/privacidade', builder: (context, state) =>lazyPage([l60.loadLibrary], () =>  l60.LegalScreen(doc: privacyDoc))),
      // Pública (Google Play): como pedir para apagar a conta.
      GoRoute(path: '/apagar-conta', builder: (context, state) =>lazyPage([l60.loadLibrary], () =>  l60.LegalScreen(doc: deleteAccountDoc))),
      GoRoute(
        path: '/juntar/:token',
        builder: (context, state) =>lazyPage([l30.loadLibrary], () =>  l30.JoinWeddingScreen(token: state.pathParameters['token']!)),
      ),
      GoRoute(
        path: '/i/:token',
        builder: (context, state) =>lazyPage([l22.loadLibrary], () =>  l22.InviteTokenScreen(token: state.pathParameters['token']!)),
      ),
      GoRoute(
        // Wizard "Vais ao casamento?" — pedido explícito do utilizador
        // (071/073), mostrado uma única vez por `GuestHomeScreen`
        // quando `guest.onboardingCompletedAt == null`.
        path: '/guest-onboarding/:weddingId',
        builder: (context, state) {
          final step = int.tryParse(state.uri.queryParameters['step'] ?? '') ?? 0;
          if (state.extra is! Guest) return _LostRoute('/guest-home/${state.pathParameters['weddingId']}');
          return lazyPage([l20.loadLibrary], () => l20.GuestOnboardingWizardScreen(
            key: ValueKey('gonb$step'),
            weddingId: state.pathParameters['weddingId']!,
            guest: state.extra as Guest,
            initialStep: step,
          ));
        },
      ),
      GoRoute(
        path: '/modo',
        builder: (context, state) => ModeSwitchScreen(
          mode: state.uri.queryParameters['m'] == 'guest' ? AppMode.guest : AppMode.organizer,
          to: state.uri.queryParameters['to'] ?? '/eventos',
        ),
      ),
      // Bilhetes (migração 149).
      GoRoute(path: '/bilhete/:id', builder: (context, state) =>lazyPage([l1.loadLibrary], () =>  l1.TicketReturnScreen(ticketId: state.pathParameters['id']!))),
      GoRoute(path: '/bilhetes', builder: (context, state) =>lazyPage([l1.loadLibrary], () =>  PermissionGate(perm: OrganizerPerm.bilhetes, child: l1.OrganizerTicketsScreen()))),
      // O organizador leu o QR de um bilhete (migração 158).
      // Organizadores do evento e o que cada um pode (migração 159).
      GoRoute(path: '/organizadores', builder: (context, state) => const OrganizersScreen()),
      // Lista de presentes e loja dos parceiros (migração 160).
      GoRoute(path: '/gift-list', builder: (context, state) => PermissionGate(perm: OrganizerPerm.evento, child: OrganizerGiftListScreen())),
      GoRoute(path: '/gift-shop', builder: (context, state) => PermissionGate(perm: OrganizerPerm.evento, child: GiftShopScreen())),
      GoRoute(path: '/presente/:id', builder: (context, state) => GiftReturnScreen(orderId: state.pathParameters['id']!)),
      GoRoute(path: '/partner-shop', builder: (context, state) => const PartnerShopScreen()),
      GoRoute(path: '/username', builder: (context, state) =>lazyPage([l62.loadLibrary], () =>  l62.UsernameScreen())),
      // Plano Pro dos parceiros (migração 161).
      GoRoute(path: '/partner-pro', builder: (context, state) => PartnerProScreen(returned: state.uri.queryParameters['ok'] == '1')),
      GoRoute(path: '/entrada/:code', builder: (context, state) => CheckInScreen(code: state.pathParameters['code']!)),
      GoRoute(path: '/bilhetes/ativar', builder: (context, state) =>lazyPage([l7.loadLibrary], () =>  l7.PartnerPayoutSetupScreen(organizer: true))),
      // Evento público aberto por link partilhado (2026-11).
      // Envelopes recebidos (migração 156).
      GoRoute(path: '/envelopes', builder: (context, state) =>lazyPage([l24.loadLibrary], () =>  l24.EnvelopesScreen())),
      GoRoute(path: '/p/:code', builder: (context, state) =>lazyPage([l23.loadLibrary], () =>  l23.PartnerInviteScreen(code: state.pathParameters['code']!))),
      GoRoute(path: '/evento/:id', builder: (context, state) =>lazyPage([l16.loadLibrary], () =>  l16.PublicEventScreen(id: state.pathParameters['id']!))),
      // Criar mais um evento (vários por conta, 2026-11).
      GoRoute(
        path: '/novo-evento',
        builder: (context, state) =>lazyPage([l34.loadLibrary], () =>  l34.OnboardingWizardScreen(newEvent: true, initialType: state.uri.queryParameters['tipo'])),
      ),
      tabRoute(
        path: '/eventos',
        builder: (context, state) =>lazyPage([l16.loadLibrary], () => 
            l16.EventosScreen(initialTab: state.uri.queryParameters['tab'] == 'meus' ? 1 : null)),
      ),
      // Caminho antigo de "Os teus eventos" — agora é o separador Eventos.
      GoRoute(path: '/guest-events', redirect: (context, state) => '/eventos'),
      GoRoute(
        path: '/guest-wedding-details',
        builder: (context, state) =>lazyPage([l25.loadLibrary], () =>  state.extra is GuestWedding
            ? l25.GuestWeddingDetailsScreen(wedding: state.extra as GuestWedding)
            : const _LostRoute('/guest-home')),
      ),
      tabRoute(
        path: '/guest-gifts',
        builder: (context, state) =>lazyPage([l18.loadLibrary], () =>  l18.GuestGiftsScreen()),
      ),
      tabRoute(
        path: '/guest-gifts/:weddingId',
        builder: (context, state) =>lazyPage([l18.loadLibrary], () => 
            l18.GuestGiftsScreen(weddingId: state.pathParameters['weddingId'])),
      ),
      tabRoute(
        // Perfil igual ao do organizador (2026-11), com a barra de convidado.
        path: '/guest-profile',
        builder: (context, state) =>l29.HomeFeedScreen(guestMode: true),
      ),
      tabRoute(
        path: '/guest-profile/:weddingId',
        builder: (context, state) =>l29.HomeFeedScreen(guestMode: true, guestWeddingId: state.pathParameters['weddingId']),
      ),
      // Resposta, menu, acompanhantes e mesa de um evento (antigo perfil
      // do convidado).
      GoRoute(
        path: '/guest-presenca/:weddingId',
        builder: (context, state) =>lazyPage([l21.loadLibrary], () =>  l21.GuestProfileScreen(weddingId: state.pathParameters['weddingId'])),
      ),
      GoRoute(
        // Alojamento e transporte para os convidados (099_guest_offers.sql).
        path: '/guest-stay/:weddingId',
        builder: (context, state) =>lazyPage([l9.loadLibrary], () =>  l9.GuestOffersScreen(weddingId: state.pathParameters['weddingId']!)),
      ),
      tabRoute(
        path: '/guest-gallery',
        builder: (context, state) =>lazyPage([l17.loadLibrary], () =>  l17.GuestGalleryScreen()),
      ),
      tabRoute(
        path: '/guest-gallery/:weddingId',
        builder: (context, state) =>lazyPage([l17.loadLibrary], () => 
            l17.GuestGalleryScreen(weddingId: state.pathParameters['weddingId'])),
      ),
      GoRoute(
        path: '/partner-contracts',
        builder: (context, state) =>lazyPage([l42.loadLibrary], () =>  l42.PartnerContractsScreen()),
      ),
      GoRoute(
        // Chat antigo de demonstração (MockBackend) — removido; o link
        // antigo leva às Mensagens reais.
        path: '/partner-chat',
        redirect: (context, state) => '/partner-messages',
      ),
      GoRoute(
        path: '/partner-welcome',
        builder: (context, state) =>lazyPage([l43.loadLibrary], () =>  l43.PartnerWelcomeScreen()),
      ),
      tabRoute(
        path: '/partner-profile',
        builder: (context, state) =>lazyPage([l51.loadLibrary], () =>  l51.PartnerProfileScreen()),
      ),
      GoRoute(
        path: '/partner-availability',
        builder: (context, state) =>lazyPage([l48.loadLibrary], () =>  l48.PartnerAvailabilityScreen()),
      ),
      GoRoute(
        path: '/partner-location',
        builder: (context, state) =>lazyPage([l46.loadLibrary], () =>  l46.PartnerLocationScreen()),
      ),
      GoRoute(
        path: '/partner-cancellation',
        builder: (context, state) =>lazyPage([l47.loadLibrary], () =>  l47.PartnerCancellationScreen()),
      ),
      GoRoute(
        path: '/partner-business-info',
        builder: (context, state) =>lazyPage([l45.loadLibrary], () =>  l45.BusinessInfoScreen()),
      ),
      GoRoute(
        path: '/partner-portfolio',
        builder: (context, state) =>lazyPage([l50.loadLibrary], () =>  l50.PartnerPortfolioScreen()),
      ),
      GoRoute(
        path: '/partner-pricing',
        builder: (context, state) =>lazyPage([l49.loadLibrary], () =>  l49.PartnerPricingScreen()),
      ),
      tabRoute(
        path: '/partner-requests',
        builder: (context, state) =>lazyPage([l36.loadLibrary], () =>  l36.PartnerBookingsScreen(
          initialSegment: state.uri.queryParameters['segment'],
        )),
      ),
      GoRoute(
        path: '/partner-requests/:id',
        builder: (context, state) =>lazyPage([l35.loadLibrary], () =>  state.extra is Booking
            ? l35.BookingDetailScreen(booking: state.extra as Booking)
            : const _LostRoute('/partner-requests')),
      ),
      GoRoute(
        path: '/partner-requests/:id/proposal',
        builder: (context, state) =>lazyPage([l37.loadLibrary], () =>  state.extra is Booking
            ? l37.SendProposalScreen(booking: state.extra as Booking)
            : const _LostRoute('/partner-requests')),
      ),
      tabRoute(
        path: '/partner-messages',
        builder: (context, state) =>lazyPage([l41.loadLibrary], () =>  l41.PartnerMessagesScreen()),
      ),
      GoRoute(
        path: '/partner-messages/:id',
        builder: (context, state) =>lazyPage([l40.loadLibrary], () =>  state.extra is ChatConversation
            ? l40.PartnerChatThreadScreen(conversation: state.extra as ChatConversation)
            : const _LostRoute('/partner-messages')),
      ),
      GoRoute(
        path: '/partner-payments',
        builder: (context, state) =>lazyPage([l44.loadLibrary], () =>  l44.PartnerPaymentsScreen()),
      ),
      GoRoute(
        path: '/partner-payments/setup',
        builder: (context, state) =>lazyPage([l7.loadLibrary], () =>  l7.PartnerPayoutSetupScreen()),
      ),
      GoRoute(
        path: '/partner-venue-tables',
        builder: (context, state) =>lazyPage([l54.loadLibrary], () =>  l54.PartnerVenueTablesScreen()),
      ),
      GoRoute(
        path: '/partner-reviews',
        builder: (context, state) =>lazyPage([l52.loadLibrary], () =>  l52.PartnerReviewsScreen()),
      ),
      GoRoute(
        path: '/partner-stats',
        builder: (context, state) =>lazyPage([l53.loadLibrary], () =>  l53.PartnerStatsScreen()),
      ),
      GoRoute(
        path: '/partner-calendar',
        builder: (context, state) =>lazyPage([l38.loadLibrary], () =>  l38.PartnerCalendarScreen()),
      ),
      GoRoute(
        path: '/calendar',
        builder: (context, state) =>lazyPage([l33.loadLibrary], () =>  l33.CalendarScreen()),
      ),
      tabRoute(
        path: '/wedding',
        // `?aparencia=1`: abre logo no modo de mudar estilo e cor
        // (Definições → Aparência do menu).
        builder: (context, state) =>lazyPage([l59.loadLibrary], () =>  l59.WeddingDetailsScreen(
          key: ValueKey(state.uri.toString()),
          startEditing: state.uri.queryParameters['aparencia'] == '1',
        )),
      ),
      GoRoute(
        path: '/gallery',
        builder: (context, state) =>lazyPage([l26.loadLibrary], () => 
            l26.GalleryScreen(weddingId: state.extra as String?)),
      ),
      GoRoute(
        path: '/guests',
        builder: (context, state) =>lazyPage([l28.loadLibrary], () =>  PermissionGate(perm: OrganizerPerm.convidados, child: l28.GuestsListScreen())),
      ),
      GoRoute(
        path: '/guests/:id',
        builder: (context, state) =>lazyPage([l27.loadLibrary], () => 
            PermissionGate(perm: OrganizerPerm.convidados, child: l27.GuestDetailScreen(guestId: state.pathParameters['id']!))),
      ),
      GoRoute(
        path: '/checklist',
        builder: (context, state) =>lazyPage([l13.loadLibrary], () =>  PermissionGate(perm: OrganizerPerm.tarefas, child: l13.ChecklistScreen())),
      ),
      GoRoute(
        path: '/tasks',
        builder: (context, state) =>lazyPage([l15.loadLibrary], () =>  PermissionGate(perm: OrganizerPerm.tarefas, child: l15.TasksScreen())),
      ),
      GoRoute(
        path: '/service-preferences',
        builder: (context, state) =>lazyPage([l14.loadLibrary], () =>  PermissionGate(perm: OrganizerPerm.orcamento, child: l14.ServicePreferencesScreen())),
      ),
      GoRoute(
        path: '/guest-page',
        builder: (context, state) => PermissionGate(perm: OrganizerPerm.evento, child: GuestPageRoute()),
      ),
      GoRoute(
        path: '/budget',
        builder: (context, state) =>lazyPage([l10.loadLibrary], () =>  PermissionGate(perm: OrganizerPerm.orcamento, child: l10.BudgetScreen())),
      ),
      GoRoute(
        path: '/seating',
        builder: (context, state) =>lazyPage([l55.loadLibrary], () =>  PermissionGate(perm: OrganizerPerm.convidados, child: l55.SeatingScreen())),
      ),
      GoRoute(
        path: '/bookings',
        builder: (context, state) =>lazyPage([l5.loadLibrary], () =>  l5.CoupleBookingsScreen(guestsTab: state.uri.queryParameters['convidados'] == '1')),
      ),
      GoRoute(
        path: '/pay',
        builder: (context, state) =>lazyPage([l6.loadLibrary], () =>  state.extra is PayArgs
            ? l6.PayScreen(args: state.extra as PayArgs)
            : const _LostRoute('/bookings')),
      ),
      GoRoute(
        path: '/pay/return',
        builder: (context, state) =>lazyPage([l8.loadLibrary], () =>  l8.PayReturnScreen()),
      ),
      GoRoute(
        path: '/pay/done',
        builder: (context, state) => state.extra is PayDoneArgs
            ? PayDoneScreen(args: state.extra as PayDoneArgs)
            : const _LostRoute('/bookings'),
      ),
      GoRoute(
        path: '/bookings/detail',
        builder: (context, state) =>lazyPage([l4.loadLibrary], () =>  state.extra is CoupleBooking
            ? l4.CoupleBookingDetailScreen(booking: state.extra as CoupleBooking)
            : const _LostRoute('/bookings')),
      ),
      tabRoute(
        path: '/partners',
        asButton: (state) => (state.extra as PartnerPickerArgs?)?.selectionMode ?? false,
        builder: (context, state) {
          final args = state.extra as PartnerPickerArgs?;
          return lazyPage([l56.loadLibrary], () => l56.PartnersListScreen(
            categorySlug: args?.categorySlug,
            selectionMode: args?.selectionMode ?? false,
          ));
        },
      ),
      // Grupos do evento (2026-10-20).
      GoRoute(
        path: '/groups/:weddingId',
        builder: (context, state) =>lazyPage([l3.loadLibrary], () =>  l3.GroupsScreen(weddingId: state.pathParameters['weddingId']!)),
      ),
      GoRoute(
        path: '/group/:id',
        builder: (context, state) =>lazyPage([l3.loadLibrary], () =>  state.extra is ChatGroup
            ? l3.GroupThreadScreen(group: state.extra as ChatGroup)
            : const _LostRoute('/chat')),
      ),
      tabRoute(
        path: '/chat',
        builder: (context, state) =>lazyPage([l11.loadLibrary], () =>  PermissionGate(perm: OrganizerPerm.conversas, child: l11.ChatListScreen())),
      ),
      GoRoute(
        path: '/chat/:conversationId',
        builder: (context, state) =>lazyPage([l12.loadLibrary], () =>  state.extra is ChatConversation
            ? PermissionGate(perm: OrganizerPerm.conversas, child: l12.ChatThreadScreen(conversation: state.extra as ChatConversation))
            : const _LostRoute('/chat')),
      ),
      GoRoute(
        path: '/settings',
        builder: (context, state) =>lazyPage([l57.loadLibrary], () =>  l57.SettingsScreen(fromGuestMode: state.extra == true)),
      ),
      GoRoute(
        path: '/support',
        builder: (context, state) =>lazyPage([l58.loadLibrary], () =>  l58.SupportScreen()),
      ),
      GoRoute(
        path: '/invite/:slug',
        builder: (context, state) =>lazyPage([l31.loadLibrary], () =>  l31.InvitePageScreen(
          slug: state.pathParameters['slug']!,
          fromInstall: state.uri.queryParameters['app'] == '1',
        )),
      ),
      GoRoute(
        path: '/rsvp/:token',
        builder: (context, state) =>lazyPage([l32.loadLibrary], () => 
            l32.RsvpPageScreen(token: state.pathParameters['token']!)),
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

/// Carrega todos os ecrãs deferred de uma vez (capturas de ecrã/testes).
/// Página do evento (a principal do organizador): vai buscar o código logo
/// que o início abre, em segundo plano, para não esperar ao tocar no menu
/// (2026-11-09: chegava a demorar 5 s só a descarregar o ecrã).
void prefetchEventPage() {
  l59.loadLibrary().then((_) => LazyPage.markLoaded([l59.loadLibrary]), onError: (_) {});
}

Future<void> preloadDeferredPages() async {
  final loads = <Future<void> Function()>[l1.loadLibrary, l2.loadLibrary, l3.loadLibrary, l4.loadLibrary, l5.loadLibrary, l6.loadLibrary, l7.loadLibrary, l8.loadLibrary, l9.loadLibrary, l10.loadLibrary, l11.loadLibrary, l12.loadLibrary, l13.loadLibrary, l14.loadLibrary, l15.loadLibrary, l16.loadLibrary, l17.loadLibrary, l18.loadLibrary, l20.loadLibrary, l21.loadLibrary, l22.loadLibrary, l23.loadLibrary, l24.loadLibrary, l25.loadLibrary, l26.loadLibrary, l27.loadLibrary, l28.loadLibrary, l30.loadLibrary, l31.loadLibrary, l32.loadLibrary, l33.loadLibrary, l34.loadLibrary, l35.loadLibrary, l36.loadLibrary, l37.loadLibrary, l38.loadLibrary, l40.loadLibrary, l41.loadLibrary, l42.loadLibrary, l43.loadLibrary, l44.loadLibrary, l45.loadLibrary, l46.loadLibrary, l47.loadLibrary, l48.loadLibrary, l49.loadLibrary, l50.loadLibrary, l51.loadLibrary, l52.loadLibrary, l53.loadLibrary, l54.loadLibrary, l55.loadLibrary, l56.loadLibrary, l57.loadLibrary, l58.loadLibrary, l59.loadLibrary, l60.loadLibrary, l61.loadLibrary, l62.loadLibrary];
  await Future.wait([for (final l in loads) l()]);
  LazyPage.markLoaded(loads);
}
