import 'package:flutter/material.dart';

/// Em janelas largas (browser de desktop), limita o conteúdo a uma moldura
/// do tamanho de um telemóvel — a app é mobile-first e deve parecer-se com
/// uma quando testada fora de um dispositivo real. A página à volta fica
/// fixa (sem scroll próprio); só o conteúdo dentro da moldura desliza.
class PhoneFrame extends StatelessWidget {
  final Widget? child;

  const PhoneFrame({super.key, required this.child});

  static const _phoneWidth = 412.0;
  static const _phoneHeight = 892.0;

  // Simula margens de "notch"/barra de sistema para que o conteúdo dos
  // ecrãs nunca fique colado aos cantos arredondados da moldura.
  static const _insetTop = 18.0;
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
            color: const Color(0xFF202124),
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
                child: MediaQuery(
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
              ),
            ),
          ),
        );
      },
    );
  }
}
