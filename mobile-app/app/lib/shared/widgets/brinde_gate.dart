import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/auth/auth_controller.dart';
import 'mascot.dart';
import 'tchin_splash.dart';

/// "Início 7 · Brinde" — logo a seguir a entrar, o Tchin Tchin brinda,
/// diz olá e o verde fecha em círculo com confetti, revelando a app.
/// Só depois de um login feito agora (não ao reabrir a app com sessão).
class BrindeGate extends ConsumerStatefulWidget {
  final Widget child;
  const BrindeGate({super.key, required this.child});

  /// Ligado em [AuthController.login]; consumido quando a conta fica ativa.
  static bool pending = false;

  @override
  ConsumerState<BrindeGate> createState() => _BrindeGateState();
}

class _BrindeGateState extends ConsumerState<BrindeGate> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 3400));
  bool _show = false;
  bool _burst = false;
  String? _name;

  @override
  void initState() {
    super.initState();
    _c.addListener(() {
      if (!_burst && _c.value >= 0.86) setState(() => _burst = true);
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
    _c.dispose();
    super.dispose();
  }

  void _start(String? fullName) {
    BrindeGate.pending = false;
    if (MediaQuery.maybeOf(context)?.disableAnimations ?? false) return;
    setState(() {
      _name = fullName?.trim().split(' ').first;
      _show = true;
      _burst = false;
    });
    _c.forward(from: 0);
  }

  @override
  Widget build(BuildContext context) {
    ref.listen(authControllerProvider, (prev, next) {
      if (!BrindeGate.pending) return;
      if (next.status == AuthStatus.active) {
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
              builder: (context, _) => Material(
                type: MaterialType.transparency,
                child: TchinSplash(
                  t: _c.value,
                  greeting: _name == null || _name!.isEmpty ? 'Olá!' : 'Olá, $_name!',
                  tagline: 'A abrir o teu evento…',
                ),
              ),
            ),
          ),
      ],
    );
  }
}
