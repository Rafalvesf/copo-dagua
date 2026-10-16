import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'buttons.dart';

/// Cabeçalho partilhado pela maioria dos ecrãs. Três formas:
///
/// * [centered] — subpáginas abertas a partir do Casamento (Convidados,
///   Orçamento, Tarefas, Lugares): uma só linha com voltar à esquerda,
///   título ao centro e a ação (ex: "+") à direita.
/// * sem voltar e com [trailing] — separadores principais: título grande à
///   esquerda e as ações na mesma linha, à direita.
/// * o resto — voltar numa linha própria e título grande por baixo.
class PageHeader extends StatelessWidget {
  final String? title;
  final String? subtitle;
  final bool showBack;
  final Widget? trailing;
  final double titleFontSize;
  final double topPadding;
  final bool centered;

  const PageHeader({
    super.key,
    this.title,
    this.subtitle,
    this.showBack = true,
    this.trailing,
    this.titleFontSize = 34,
    this.topPadding = 20,
    this.centered = false,
  });

  /// Altura da linha do título — a dos botões redondos do Perfil (46).
  static const double _rowHeight = 46;

  Widget _subtitle({required bool center}) {
    return Row(
      mainAxisAlignment: center ? MainAxisAlignment.center : MainAxisAlignment.start,
      children: [
        Flexible(
          child: Text(
            subtitle!,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: const TextStyle(
              color: AppTheme.inkMuted,
              fontSize: AppFontSize.md,
              fontWeight: FontWeight.w700,
            ),
          ),
        ),
        const SizedBox(width: 6),
        const Icon(Icons.favorite, size: 15, color: AppTheme.accentOliveDark),
      ],
    );
  }

  @override
  Widget build(BuildContext context) {
    // Pedido do utilizador (2026-10-16): "alinha os títulos todos à mesma
    // altura que o título Perfil" — mesma margem de topo (20) e a linha
    // do título sempre com 46 de altura (a dos botões redondos), em todos
    // os ecrãs. Por isso [topPadding] nunca fica abaixo de 20, e os ecrãs
    // com voltar usam sempre a forma de uma linha (voltar · título).
    final padding = EdgeInsets.fromLTRB(
      AppTheme.screenMargin,
      topPadding < 20 ? 20 : topPadding,
      AppTheme.screenMargin,
      0,
    );

    if ((centered || showBack) && title != null) {
      return Padding(
        padding: padding,
        child: Column(
          children: [
            SizedBox(
              height: _rowHeight,
              child: Row(
              children: [
                showBack ? const CircleBackButton() : const SizedBox(width: 44, height: 44),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(
                    title!,
                    textAlign: TextAlign.center,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: AppTypography.displaySerif(
                      fontSize: AppFontSize.h3,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.ink,
                    ),
                  ),
                ),
                const SizedBox(width: 12),
                trailing ?? const SizedBox(width: 44, height: 44),
              ],
            ),
            ),
            if (subtitle != null) ...[
              const SizedBox(height: 8),
              _subtitle(center: true),
            ],
          ],
        ),
      );
    }

    final titleText = title == null
        ? null
        : Text(
            title!,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: AppTypography.displaySerif(
              fontSize: titleFontSize,
              fontWeight: FontWeight.w700,
              color: AppTheme.ink,
            ),
          );

    // Separador principal: título e ações na mesma linha.
    if (!showBack && trailing != null && titleText != null) {
      return Padding(
        padding: padding,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            SizedBox(
              height: _rowHeight,
              child: Row(
                children: [
                  Expanded(child: titleText),
                  const SizedBox(width: 12),
                  trailing!,
                ],
              ),
            ),
            if (subtitle != null) ...[
              const SizedBox(height: 6),
              _subtitle(center: false),
            ],
          ],
        ),
      );
    }

    final hasIconRow = showBack || trailing != null;
    return Padding(
      padding: padding,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (hasIconRow) ...[
            Row(
              children: [
                if (showBack) const CircleBackButton(),
                const Spacer(),
                ?trailing,
              ],
            ),
            const SizedBox(height: 18),
          ],
          if (titleText != null) ...[
            if (hasIconRow)
              titleText
            else
              SizedBox(
                height: _rowHeight,
                child: Align(alignment: Alignment.centerLeft, child: titleText),
              ),
            if (subtitle != null) ...[
              const SizedBox(height: 6),
              _subtitle(center: false),
            ],
          ],
        ],
      ),
    );
  }
}

/// Botão circular verde-oliva com ícone "+" — o padrão de ação
/// primária (nova tarefa, adicionar despesa, nova mesa) usado nos
/// cabeçalhos de Tarefas/Orçamento/Lugares. Só ícone, sem rótulo, para
/// nunca competir por espaço com o título grande ao lado.
class AddActionButton extends StatelessWidget {
  final VoidCallback onTap;

  const AddActionButton({super.key, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Material(
      color: Colors.transparent,
      child: InkWell(
        borderRadius: BorderRadius.circular(AppRadius.pill),
        onTap: onTap,
        child: Container(
          width: 44,
          height: 44,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: AppTheme.accentOliveDark,
            shape: BoxShape.circle,
          ),
          child: const Icon(Icons.add_rounded, size: 24, color: Colors.white),
        ),
      ),
    );
  }
}

/// Selo de estado pequeno (ex: "Dentro do orçamento", "Atenção",
/// "Pendente", "Disponível") — pílula de fundo pastel com texto colorido.
class StatusPill extends StatelessWidget {
  final String label;
  final Color color;

  const StatusPill({super.key, required this.label, required this.color});

  @override
  Widget build(BuildContext context) {
    // Cores pastel (ex: `colorForTagLabel`) como texto ficavam quase
    // invisíveis sobre o cartão — nesse caso a cor passa a ser o fundo
    // e o texto fica escuro.
    final light = color.computeLuminance() > 0.5;
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
        color: light ? color : color.withValues(alpha: 0.18),
        borderRadius: BorderRadius.circular(AppRadius.pill),
      ),
      child: Text(
        label,
        style: TextStyle(
          color: light ? AppTheme.inkMuted : color,
          fontSize: AppFontSize.xs,
          fontWeight: FontWeight.w700,
        ),
      ),
    );
  }
}
