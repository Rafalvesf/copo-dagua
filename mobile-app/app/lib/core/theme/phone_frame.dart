import 'dart:async';

import 'package:flutter/material.dart';

import 'app_theme.dart';

/// Em janelas largas (browser de desktop), limita o conteúdo a uma moldura
/// do tamanho de um telemóvel — a app é mobile-first e deve parecer-se com
/// uma quando testada fora de um dispositivo real. A página à volta fica
/// fixa (sem scroll próprio); só o conteúdo dentro da moldura desliza.
class PhoneFrame extends StatelessWidget {
  final Widget? child;

  const PhoneFrame({super.key, required this.child});

  static const _phoneWidth = 412.0;
  static const _phoneHeight = 892.0;

  static const _statusBarHeight = 28.0;

  // Simula margens de "notch"/barra de sistema para que o conteúdo dos
  // ecrãs nunca fique colado aos cantos arredondados da moldura nem por
  // baixo da barra de estado simulada.
  static const _insetTop = _statusBarHeight + 8.0;
  static const _insetBottom = 14.0;

  @override
  Widget build(BuildContext context) {
    final content = child;
    if (content == null) return const SizedBox.shrink();

    return LayoutBuilder(
      builder: (context, constraints) {
        final fitsAsPhone = constraints.maxWidth <= _phoneWidth + 64;
        if (fitsAsPhone) return content;

        final height = constraints.maxHeight - 40 < _phoneHeight ? constraints.maxHeight - 40 : _phoneHeight;
        final mediaQuery = MediaQuery.of(context);

        return SizedBox.expand(
          child: ColoredBox(
            color: AppTheme.outerBackdrop,
            child: Center(
              child: Container(
                width: _phoneWidth,
                height: height,
                clipBehavior: Clip.antiAlias,
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(40),
                  boxShadow: [
                    BoxShadow(color: Colors.black.withValues(alpha: 0.5), blurRadius: 50, spreadRadius: 2),
                  ],
                ),
                child: Stack(
                  children: [
                    MediaQuery(
                      data: mediaQuery.copyWith(
                        padding: EdgeInsets.only(
                          left: mediaQuery.padding.left,
                          right: mediaQuery.padding.right,
                          top: mediaQuery.padding.top + _insetTop,
                          bottom: mediaQuery.padding.bottom + _insetBottom,
                        ),
                        viewPadding: EdgeInsets.only(
                          left: mediaQuery.viewPadding.left,
                          right: mediaQuery.viewPadding.right,
                          top: mediaQuery.viewPadding.top + _insetTop,
                          bottom: mediaQuery.viewPadding.bottom + _insetBottom,
                        ),
                      ),
                      child: content,
                    ),
                    const Positioned(
                      top: 0,
                      left: 0,
                      right: 0,
                      height: _statusBarHeight,
                      child: _PhoneStatusBar(),
                    ),
                  ],
                ),
              ),
            ),
          ),
        );
      },
    );
  }
}

/// Barra de estado simulada (hora + sinal/wifi/bateria) — puramente
/// decorativa, só para a moldura de desktop parecer um iPhone real.
class _PhoneStatusBar extends StatefulWidget {
  const _PhoneStatusBar();

  @override
  State<_PhoneStatusBar> createState() => _PhoneStatusBarState();
}

class _PhoneStatusBarState extends State<_PhoneStatusBar> {
  late final Timer _timer;
  DateTime _now = DateTime.now();

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(seconds: 15), (_) {
      if (mounted) setState(() => _now = DateTime.now());
    });
  }

  @override
  void dispose() {
    _timer.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final hour = _now.hour.toString().padLeft(2, '0');
    final minute = _now.minute.toString().padLeft(2, '0');

    return Padding(
      padding: const EdgeInsets.fromLTRB(24, 8, 16, 0),
      child: Row(
        children: [
          Text(
            '$hour:$minute',
            style: const TextStyle(
              color: AppTheme.ink,
              fontSize: 14,
              fontWeight: FontWeight.w600,
            ),
          ),
          const Spacer(),
          const Icon(Icons.signal_cellular_alt, size: 15, color: AppTheme.ink),
          const SizedBox(width: 5),
          const Icon(Icons.wifi, size: 15, color: AppTheme.ink),
          const SizedBox(width: 5),
          const Icon(Icons.battery_full, size: 16, color: AppTheme.ink),
        ],
      ),
    );
  }
}
