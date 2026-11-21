import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'line_icon.dart';

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

  Widget _subtitle() => Padding(
        padding: const EdgeInsets.only(top: 6),
        child: Text(
          subtitle!,
          style: const TextStyle(color: AppTheme.inkMuted, fontSize: 14, height: 1.4),
        ),
      );

  @override
  Widget build(BuildContext context) {
    // Mockups «Páginas do evento» (2026-11-14), em todos os ecrãs: voltar
    // redondo branco 44 numa linha (com as ações à direita) e o título de
    // página 28 à esquerda, por baixo, com o subtítulo 13. Nos separadores
    // principais (sem voltar) o título fica na linha das ações.
    // [titleFontSize] e [centered] ficaram só por compatibilidade.
    final padding = EdgeInsets.fromLTRB(
      AppTheme.screenMargin,
      topPadding < 12 ? 12 : topPadding,
      AppTheme.screenMargin,
      0,
    );
    final titleText = title == null
        ? null
        : Text(
            title!,
            maxLines: 2,
            overflow: TextOverflow.ellipsis,
            style: const TextStyle(fontSize: 28, height: 1.15, fontWeight: FontWeight.w700, color: AppTheme.ink),
          );

    if (!showBack && !centered) {
      return Padding(
        padding: padding,
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          SizedBox(
            height: 44,
            child: Row(children: [
              if (titleText != null) Expanded(child: titleText) else const Spacer(),
              if (trailing != null) ...[const SizedBox(width: 12), trailing!],
            ]),
          ),
          if (subtitle != null) _subtitle(),
        ]),
      );
    }

    return Padding(
      padding: padding,
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          SizedBox(
            height: 44,
            child: Row(children: [
              if (showBack) const CircleBackButton(),
              const Spacer(),
              ?trailing,
            ]),
          ),
          if (titleText != null) ...[const SizedBox(height: 20), titleText],
          if (subtitle != null) _subtitle(),
        ],
      ),
    );
  }
}

/// Botão circular preto com ícone "+" (DESIGN.md §2) — o padrão de ação
/// primária (nova tarefa, adicionar despesa, nova mesa) usado nos
/// cabeçalhos de Tarefas/Orçamento/Lugares. Só ícone, sem rótulo, para
/// nunca competir por espaço com o título grande ao lado.
class AddActionButton extends StatelessWidget {
  final VoidCallback onTap;

  /// "+" de traço, como no mockup das Mensagens.
  final bool line;

  const AddActionButton({super.key, required this.onTap, this.line = false});

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
          decoration: const BoxDecoration(
            color: AppTheme.ink,
            shape: BoxShape.circle,
          ),
          child: line
              ? const LineIcon(LineIcon.plus, color: Colors.white, stroke: 2.4)
              : const Icon(Hi.plus, size: 24, color: Colors.white),
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
