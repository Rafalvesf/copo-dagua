import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'buttons.dart';

/// Cabeçalho partilhado pela maioria dos ecrãs — botão de voltar e ação
/// opcional (ex: badge de conta, "+ Nova tarefa") numa linha própria no
/// topo, com o título grande serifado + subtítulo numa linha por baixo.
/// Duas linhas separadas (em vez de tudo alinhado numa só) para seguir
/// o ritmo vertical da referência partilhada (ícones colados ao topo,
/// título logo a seguir, por baixo).
class PageHeader extends StatelessWidget {
  final String title;
  final String? subtitle;
  final bool showBack;
  final Widget? trailing;
  final double titleFontSize;

  const PageHeader({
    super.key,
    required this.title,
    this.subtitle,
    this.showBack = true,
    this.trailing,
    this.titleFontSize = 34,
  });

  @override
  Widget build(BuildContext context) {
    final hasIconRow = showBack || trailing != null;
    return Padding(
      padding: const EdgeInsets.fromLTRB(
        AppTheme.screenMargin,
        20,
        AppTheme.screenMargin,
        0,
      ),
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
          Text(
            title,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: AppTypography.displaySerif(
              fontSize: titleFontSize,
              color: AppTheme.ink,
            ),
          ),
          if (subtitle != null) ...[
            const SizedBox(height: 6),
            Row(
              children: [
                Flexible(
                  child: Text(
                    subtitle!,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      color: AppTheme.inkMuted,
                      fontSize: 13.5,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                ),
                const SizedBox(width: 6),
                const Icon(
                  Icons.favorite,
                  size: 15,
                  color: AppTheme.accentOliveDark,
                ),
              ],
            ),
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
        borderRadius: BorderRadius.circular(999),
        onTap: onTap,
        child: Container(
          width: 46,
          height: 46,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: AppTheme.accentOliveDark,
            shape: BoxShape.circle,
            boxShadow: AppTheme.cardShadow,
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
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
      decoration: BoxDecoration(
        color: color.withValues(alpha: 0.18),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(
        label,
        style: TextStyle(
          color: color,
          fontSize: 11,
          fontWeight: FontWeight.w700,
        ),
      ),
    );
  }
}
