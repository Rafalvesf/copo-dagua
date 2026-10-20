import 'package:flutter/material.dart';
import 'core/page_transitions.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'core/router.dart';
import 'core/auth/auth_controller.dart';
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
  installBrowserBackDetection();
  runApp(const ProviderScope(child: CopoDaguaApp()));
}

class CopoDaguaApp extends ConsumerWidget {
  const CopoDaguaApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final router = ref.watch(routerProvider);
    // A cor escolhida em "Aparência do menu" passa a ser a cor de acento
    // da app toda, para o organizador (pedido 2026-10-18). Parceiros e
    // convidados ficam no verde da marca.
    final isCouple = ref.watch(authControllerProvider.select((s) => s.profile?.role)) == UserRole.couple;
    final accent = isCouple ? ref.watch(currentMenuStyleProvider).color.accent : AppTheme.brandGreen;
    if (AppTheme.accentOliveDark != accent) {
      AppTheme.accentOliveDark = accent;
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
      builder: (context, child) => PhoneFrame(child: BrindeGate(child: child ?? const SizedBox.shrink())),
    );
  }
}
