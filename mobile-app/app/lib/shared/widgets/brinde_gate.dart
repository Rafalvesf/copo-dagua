import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/auth/auth_controller.dart';
import '../theme_color/theme_color.dart';
import 'mascot.dart';
import 'tchin_splash.dart';

/// "Início 7 · Brinde" — logo a seguir a entrar, o Tchin Tchin brinda,
/// diz olá e o verde fecha em círculo com confetti, revelando a app.
/// Acontece sempre a seguir a entrar ou criar conta.
class BrindeGate extends ConsumerStatefulWidget {
  final Widget child;
  const BrindeGate({super.key, required this.child});

  /// Ligado em [AuthController.login]; consumido quando a conta fica ativa.
  static bool pending = false;

  @override
  ConsumerState<BrindeGate> createState() => _BrindeGateState();
}

class _BrindeGateState extends ConsumerState<BrindeGate> with TickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 5000));
  late final SteadyDriver _driver;
  bool _show = false;
  bool _burst = false;
  bool _barGreen = false;
  String? _name;

  @override
  void initState() {
    super.initState();
    _driver = SteadyDriver(this, _c);
    _c.addListener(() {
      if (!_burst && _c.value >= 0.78) setState(() => _burst = true);
      final green = _show && _c.value < 0.7;
      if (green != _barGreen) {
        _barGreen = green;
        if (green) {
          lockBarColor(const Color(0xFF5F7545));
        } else {
          unlockBarColor();
        }
      }
    });
    _c.addStatusListener((s) {
      if (s == AnimationStatus.completed && mounted) {
        setState(() => _show = false);
        Future.delayed(const Duration(milliseconds: 2600), () {
          if (mounted) setState(() => _burst = false);
        });
      }
    });
  }

  @override
  void dispose() {
    _driver.dispose();
    _c.dispose();
    super.dispose();
  }

  void _start(String? fullName) {
    BrindeGate.pending = false;
    setState(() {
      _name = fullName?.trim().split(' ').first;
      _show = true;
      _burst = false;
      _barGreen = true;
    });
    lockBarColor(const Color(0xFF5F7545));
    _driver.start();
  }

  @override
  Widget build(BuildContext context) {
    ref.listen(authControllerProvider, (prev, next) {
      if (!BrindeGate.pending) return;
      // Sempre que se entra ou cria conta (pedido 2026-10-17: "tem que
      // acontecer sempre"), também quando a seguir vem o onboarding.
      if (next.status == AuthStatus.active || next.status == AuthStatus.onboardingIncomplete) {
        _start(next.profile?.fullName);
      } else if (next.status != AuthStatus.authenticating) {
        // Erro, email por confirmar ou onboarding: sem brinde.
        BrindeGate.pending = false;
      }
    });
    return Stack(
      children: [
        widget.child,
        if (_burst) const Positioned.fill(child: ConfettiBurst(origin: Offset(0.5, 0.45), count: 32)),
        if (_show)
          Positioned.fill(
            child: AnimatedBuilder(
              animation: _c,
              builder: (context, _) => IgnorePointer(
                ignoring: _c.value >= 0.78,
                child: Material(
                type: MaterialType.transparency,
                child: TchinSplash(
                  t: _c.value,
                  greeting: _name == null || _name!.isEmpty ? 'Olá!' : 'Olá, $_name!',
                  tagline: 'A abrir o teu evento…',
                ),
              ),
              ),
            ),
          ),
      ],
    );
  }
}
