import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Folhas e diálogos "ilha" (pedido 2026-10-18): um cartão branco a
/// flutuar com margem à volta, cantos redondos em toda a volta e sombra —
/// nunca encostado ao fundo do ecrã. Substitui `showModalBottomSheet` e
/// `showDialog` em toda a app, com a mesma forma de chamar.
Future<T?> showIslandSheet<T>({
  required BuildContext context,
  required WidgetBuilder builder,
  bool isScrollControlled = false,
  // Aceites só para manter as chamadas antigas; a ilha define o seu
  // próprio fundo e forma.
  Color? backgroundColor,
  ShapeBorder? shape,
  bool isDismissible = true,
}) {
  return showModalBottomSheet<T>(
    context: context,
    isScrollControlled: true,
    isDismissible: isDismissible,
    backgroundColor: Colors.transparent,
    elevation: 0,
    barrierColor: const Color(0x52171713),
    builder: (ctx) {
      final mq = MediaQuery.of(ctx);
      final full = mq.size.height - mq.padding.top - 24 - mq.viewInsets.bottom;
      // Sem isScrollControlled a folha antiga ficava em 9/16 do ecrã.
      final maxH = isScrollControlled ? full : (full < mq.size.height * 9 / 16 ? full : mq.size.height * 9 / 16);
      return Padding(
        padding: EdgeInsets.fromLTRB(12, 0, 12, 12 + mq.padding.bottom + mq.viewInsets.bottom),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          mainAxisAlignment: MainAxisAlignment.end,
          children: [
            ConstrainedBox(
              constraints: BoxConstraints(maxHeight: maxH < 200 ? 200 : maxH, maxWidth: 560),
              child: DecoratedBox(
                decoration: BoxDecoration(
                  borderRadius: BorderRadius.circular(28),
                  boxShadow: const [
                    BoxShadow(color: Color(0x2E171713), blurRadius: 40, offset: Offset(0, 16)),
                    BoxShadow(color: Color(0x14171713), blurRadius: 6, offset: Offset(0, 2)),
                  ],
                ),
                child: Material(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(28),
                  clipBehavior: Clip.antiAlias,
                  // O conteúdo já não precisa de afastar o teclado nem a
                  // barra de baixo — a ilha trata disso.
                  child: MediaQuery(
                    data: mq.copyWith(
                      viewInsets: EdgeInsets.zero,
                      padding: EdgeInsets.zero,
                      viewPadding: EdgeInsets.zero,
                    ),
                    child: Builder(builder: builder),
                  ),
                ),
              ),
            ),
          ],
        ),
      );
    },
  );
}

/// `showDialog` em forma de ilha (mesma assinatura usada na app).
Future<T?> showIslandDialog<T>({
  required BuildContext context,
  required WidgetBuilder builder,
  bool barrierDismissible = true,
}) =>
    showIslandSheet<T>(context: context, builder: builder, isDismissible: barrierDismissible);

/// Conteúdo de diálogo dentro da ilha: título, texto/campo e botões em
/// pílula lado a lado (o principal a verde, o secundário claro).
/// Mesma API que o `AlertDialog` usado antes (title, content, actions).
class IslandAlert extends StatelessWidget {
  final Widget? title;
  final Widget? content;
  final List<Widget>? actions;

  const IslandAlert({super.key, this.title, this.content, this.actions});

  @override
  Widget build(BuildContext context) {
    final c = AppTheme.accentOliveDark;
    final base = Theme.of(context);
    const pill = StadiumBorder();
    final theme = base.copyWith(
      textButtonTheme: TextButtonThemeData(
        style: TextButton.styleFrom(
          minimumSize: const Size.fromHeight(50),
          backgroundColor: const Color(0xFFF2F0EB),
          foregroundColor: AppTheme.ink,
          shape: pill,
          textStyle: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base),
        ),
      ),
      filledButtonTheme: FilledButtonThemeData(
        style: FilledButton.styleFrom(
          minimumSize: const Size.fromHeight(50),
          backgroundColor: c,
          foregroundColor: Colors.white,
          shape: pill,
          textStyle: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base),
        ),
      ),
    );
    final acts = actions ?? const <Widget>[];
    return Theme(
      data: theme,
      child: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(22, 14, 22, 20),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Center(
              child: Container(
                width: 40,
                height: 4,
                decoration: BoxDecoration(color: AppTheme.borderMuted, borderRadius: BorderRadius.circular(2)),
              ),
            ),
            if (title != null) ...[
              const SizedBox(height: 16),
              DefaultTextStyle(
                style: const TextStyle(
                  fontFamily: AppTheme.fontFamily,
                  fontFamilyFallback: AppTheme.fontFamilyFallback,
                  fontSize: AppFontSize.xl + 2,
                  fontWeight: FontWeight.w700,
                  color: AppTheme.ink,
                ),
                child: title!,
              ),
            ],
            if (content != null) ...[
              const SizedBox(height: 12),
              DefaultTextStyle(
                style: const TextStyle(
                  fontFamily: AppTheme.fontFamily,
                  fontFamilyFallback: AppTheme.fontFamilyFallback,
                  fontSize: AppFontSize.base,
                  height: 1.45,
                  color: AppTheme.inkMuted,
                ),
                child: content!,
              ),
            ],
            if (acts.isNotEmpty) ...[
              const SizedBox(height: 20),
              Row(
                children: [
                  for (var i = 0; i < acts.length; i++) ...[
                    if (i > 0) const SizedBox(width: 10),
                    Expanded(child: acts[i]),
                  ],
                ],
              ),
            ],
          ],
        ),
      ),
    );
  }
}
