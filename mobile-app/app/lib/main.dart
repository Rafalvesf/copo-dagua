import 'package:flutter/material.dart';
import 'core/onboarding/intro_answers.dart';
import 'core/chat/presence.dart';
import 'shared/widgets/keep_field_visible.dart';
import 'shared/widgets/safe_top.dart';
import 'package:copo_dagua_app/core/analytics/funnel.dart';
import 'core/pending_deep_link.dart';
import 'core/invite/public_invite.dart' show PendingInvite;
import 'core/page_transitions.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'core/router.dart';
import 'core/web_keyboard_stub.dart' if (dart.library.js_interop) 'core/web_keyboard_web.dart';
import 'core/auth/auth_controller.dart';
import 'core/monitoring/error_reporting.dart';
import 'core/notifications/push.dart';
import 'core/partners/partner_referrals.dart';
import 'core/models/models.dart';
import 'core/wedding/menu_style.dart';
import 'core/supabase/supabase_config.dart';
import 'core/theme/app_theme.dart';
import 'core/theme/phone_frame.dart';
import 'shared/widgets/brinde_gate.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  // Barra de estado (horas/bateria) transparente em vez da cor por
  // omissão do sistema — pedido explícito do utilizador: "a barra...
  // aparece com outra cor... faz com que apareça sempre a cor igual ao
  // fundo da app". Transparente (em vez de uma cor fixa) garante que
  // combina sempre com o fundo de QUALQUER ecrã (gradiente ou sólido,
  // ver `AppGradients`), já que é literalmente o próprio fundo a
  // mostrar-se através dela. Ícones escuros porque todos os fundos da
  // app são claros (branco/verde-sálvia pastel).
  SystemChrome.setSystemUIOverlayStyle(
    const SystemUiOverlayStyle(
      statusBarColor: Colors.transparent,
      statusBarIconBrightness: Brightness.dark,
      statusBarBrightness: Brightness.light,
    ),
  );
  // Ecrã sempre na vertical (pedido 2026-10-19). Nas apps nativas e no
  // Android trava a rotação; no iPhone (onde a web não pode travar) o
  // `web/index.html` mostra um aviso para rodar de volta.
  SystemChrome.setPreferredOrientations(const [DeviceOrientation.portraitUp]).catchError((_) {});
  await SupabaseConfig.initialize();
  await PendingDeepLink.load();
  await PendingInvite.load();
  Funnel.track('app_open');
  await PushNotifications.init();
  installBrowserBackDetection();
  setupWebKeyboard();
  await runWithErrorReporting(() => runApp(const ProviderScope(child: CopoDaguaApp())));
}

class CopoDaguaApp extends ConsumerWidget {
  const CopoDaguaApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final router = ref.watch(routerProvider);
    // Toque numa notificação no telemóvel: abre o ecrã dela.
    PushNotifications.onOpen((link) => router.go(link));
    // Notificações com a app fechada: ao entrar numa conta, este
    // dispositivo (se já autorizou) fica ligado a ela.
    ref.listen(authControllerProvider.select((s) => s.profile?.id), (prev, next) {
      if (next != null && next != prev) {
        PushNotifications.resync();
        // Convite de parceiro aberto antes de ter conta (migração 151).
        claimPendingPartnerReferral();
        Funnel.linkAccount();
        // Respostas do início da app (país, idade, interesses) → perfil.
        IntroAnswers.flushToProfile(next);
      }
      if (next != prev) setErrorReportingUser(next);
    });
    // Presença "online" (mensagens): enquanto a app está aberta e há sessão.
    ref.listen(onlineNowProvider, (previous, next) {});
    // A cor escolhida em "Aparência do menu" passa a ser a cor de acento
    // da app toda, para o organizador (pedido 2026-10-18). Parceiros e
    // convidados ficam no verde da marca.
    final isCouple = ref.watch(authControllerProvider.select((s) => s.profile?.role)) == UserRole.couple;
    final menuColor = ref.watch(currentMenuStyleProvider).color;
    final accent = isCouple ? menuColor.accent : AppTheme.brandGreen;
    final tint = isCouple ? menuColor.tint : const Color(0xFFDDE5D3);
    if (AppTheme.accentOliveDark != accent || AppTheme.accentTint != tint) {
      AppTheme.accentOliveDark = accent;
      AppTheme.accentTint = tint;
      // Redesenha tudo o que já está no ecrã com a cor nova (sem perder
      // o estado nem a navegação).
      WidgetsBinding.instance.addPostFrameCallback((_) {
        void rebuild(Element e) {
          e.markNeedsBuild();
          e.visitChildren(rebuild);
        }
        WidgetsBinding.instance.rootElement?.visitChildren(rebuild);
      });
    }
    return MaterialApp.router(
      title: 'À Nossa!',
      debugShowCheckedModeBanner: false,
      theme: AppTheme.light,
      routerConfig: router,
      builder: (context, child) => PhoneFrame(child: BrindeGate(child: SafeTop(child: KeepFieldVisible(child: child ?? const SizedBox.shrink())))),
    );
  }
}
