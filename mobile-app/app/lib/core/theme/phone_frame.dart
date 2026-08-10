import 'dart:async';

import 'package:flutter/cupertino.dart' show CupertinoIcons;
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
          const _IosSignalBars(),
          const SizedBox(width: 5),
          const Icon(CupertinoIcons.wifi, size: 14, color: AppTheme.ink),
          const SizedBox(width: 5),
          const _IosBatteryIcon(),
        ],
      ),
    );
  }
}

/// As 4 barras ascendentes do indicador de rede do iOS — diferente do
/// ícone único "signal_cellular_alt" do Android.
class _IosSignalBars extends StatelessWidget {
  const _IosSignalBars();

  static const _heights = [4.0, 6.0, 8.0, 10.0];

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.end,
      children: [
        for (var i = 0; i < _heights.length; i++)
          Container(
            margin: EdgeInsets.only(right: i == _heights.length - 1 ? 0 : 2),
            width: 3,
            height: _heights[i],
            decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(1)),
          ),
      ],
    );
  }
}

/// Pílula com "nub" do indicador de bateria do iOS — diferente do
/// triângulo de bateria do Android.
class _IosBatteryIcon extends StatelessWidget {
  const _IosBatteryIcon();

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
          width: 22,
          height: 11,
          padding: const EdgeInsets.all(1.5),
          decoration: BoxDecoration(
            border: Border.all(color: AppTheme.ink, width: 1),
            borderRadius: BorderRadius.circular(3),
          ),
          child: const FractionallySizedBox(
            alignment: Alignment.centerLeft,
            widthFactor: 0.8,
            child: ColoredBox(color: AppTheme.ink),
          ),
        ),
        Container(
          margin: const EdgeInsets.only(left: 1),
          width: 1.5,
          height: 4,
          decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(1)),
        ),
      ],
    );
  }
}
