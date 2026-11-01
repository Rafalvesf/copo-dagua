import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

/// Modo em que uma conta que organiza está a usar a app: a organizar o
/// seu evento ou a acompanhar o evento de outra pessoa como convidado.
enum AppMode { organizer, guest }

/// Decide o modo de cada caminho (só os separadores de cada modo;
/// Definições, conversas, etc. não mudam de modo).
class AppModeTracker {
  static AppMode? current;

  static const _guestPrefixes = [
    '/guest-home/',
    '/guest-gallery/',
    '/guest-gifts/',
    '/guest-profile/',
    '/guest-onboarding/',
    '/guest-wedding-details',
  ];
  static const _organizerPaths = ['/home', '/partners', '/wedding', '/chat', '/eventos', '/novo-evento'];

  static AppMode? modeOf(String location) {
    if (_guestPrefixes.any(location.startsWith)) return AppMode.guest;
    if (_organizerPaths.contains(location)) return AppMode.organizer;
    return null;
  }

  /// `null` = segue sem paragem; senão, o caminho do ecrã de transição.
  static String? interceptFor(String location, String fullUri) {
    final mode = modeOf(location);
    if (mode == null) return null;
    final previous = current;
    if (previous == null || previous == mode) {
      current = mode;
      return null;
    }
    return Uri(path: '/modo', queryParameters: {'m': mode.name, 'to': fullUri}).toString();
  }
}

/// Ecrã de transição entre o modo organizador e o modo convidado (pedido
/// 2026-11: "quando vou clicando na navbar muda de um para o outro do
/// nada"). Mostra para onde se vai e segue sozinho.
class ModeSwitchScreen extends StatefulWidget {
  final AppMode mode;
  final String to;

  const ModeSwitchScreen({super.key, required this.mode, required this.to});

  @override
  State<ModeSwitchScreen> createState() => _ModeSwitchScreenState();
}

class _ModeSwitchScreenState extends State<ModeSwitchScreen> with SingleTickerProviderStateMixin {
  late final _anim = AnimationController(vsync: this, duration: const Duration(milliseconds: 1100))..forward();

  @override
  void initState() {
    super.initState();
    Future.delayed(const Duration(milliseconds: 1100), () {
      if (!mounted) return;
      AppModeTracker.current = widget.mode;
      context.go(widget.to);
    });
  }

  @override
  void dispose() {
    _anim.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final guest = widget.mode == AppMode.guest;
    final icon = guest ? Icons.local_activity_outlined : Icons.edit_calendar_outlined;
    final title = guest ? 'Modo convidado' : 'Modo organizador';
    final subtitle = guest ? 'Vais ver o evento como os convidados o veem.' : 'De volta aos teus eventos.';
    final fade = CurvedAnimation(parent: _anim, curve: const Interval(0, 0.45, curve: Curves.easeOut));
    final scale = Tween(begin: 0.8, end: 1.0)
        .animate(CurvedAnimation(parent: _anim, curve: const Interval(0, 0.55, curve: Curves.easeOutBack)));

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Center(
        child: FadeTransition(
          opacity: fade,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 40),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                ScaleTransition(
                  scale: scale,
                  child: Container(
                    width: 96,
                    height: 96,
                    decoration: BoxDecoration(
                      color: guest ? Colors.white : AppTheme.accentOliveDark,
                      shape: BoxShape.circle,
                      boxShadow: AppTheme.navBarShadow,
                    ),
                    child: Icon(icon, size: 42, color: guest ? AppTheme.accentOliveDark : Colors.white),
                  ),
                ),
                const SizedBox(height: 26),
                Text(
                  title,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: AppFontSize.h1, fontWeight: FontWeight.w700, color: AppTheme.ink),
                ),
                const SizedBox(height: 8),
                Text(
                  subtitle,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: AppFontSize.base, height: 1.4, color: AppTheme.inkMuted),
                ),
                const SizedBox(height: 28),
                SizedBox(
                  width: 120,
                  child: AnimatedBuilder(
                    animation: _anim,
                    builder: (context, _) => ClipRRect(
                      borderRadius: BorderRadius.circular(3),
                      child: LinearProgressIndicator(
                        value: _anim.value,
                        minHeight: 3,
                        backgroundColor: AppTheme.borderMuted,
                        color: AppTheme.accentOliveDark,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
