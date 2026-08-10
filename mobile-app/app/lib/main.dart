import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import 'core/router.dart';
import 'core/theme/app_theme.dart';
import 'core/theme/phone_frame.dart';

void main() {
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
