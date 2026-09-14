import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'core/router.dart';
import 'core/supabase/supabase_config.dart';
import 'core/theme/app_theme.dart';
import 'core/theme/phone_frame.dart';

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
  await SupabaseConfig.initialize();
  runApp(const ProviderScope(child: CopoDaguaApp()));
}

class CopoDaguaApp extends ConsumerWidget {
  const CopoDaguaApp({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final router = ref.watch(routerProvider);
    return MaterialApp.router(
      title: "Copo d'Água",
      debugShowCheckedModeBanner: false,
      theme: AppTheme.light,
      routerConfig: router,
      builder: (context, child) => PhoneFrame(child: child),
    );
  }
}
