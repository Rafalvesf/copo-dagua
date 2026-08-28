import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'buttons.dart';

/// Cabeçalho partilhado por Tarefas/Orçamento/Lugares — título grande
/// serifado, subtítulo com coração, botão de voltar opcional e uma
/// ação opcional à direita (ex: "+ Nova tarefa").
class PageHeader extends StatelessWidget {
  final String title;
  final String? subtitle;
  final bool showBack;
  final Widget? trailing;

  const PageHeader({
    super.key,
    required this.title,
    this.subtitle,
    this.showBack = true,
    this.trailing,
  });

  // Largura reservada para alinhar a segunda linha (subtítulo) com o
  // título, quando o botão de voltar empurra a primeira linha para a
  // direita — CircleBackButton (36) + a margem esquerda que já traz
  // embutida (12) + o gap desta Row (10).
  static const _backIndent = 58.0;

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(
        AppTheme.screenMargin,
        8,
        AppTheme.screenMargin,
        0,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          // Botão de voltar, título e ação (ex: "+") sempre na mesma
          // linha, alinhados ao centro — o título usa Expanded/ellipsis
          // para nunca sobrepor os botões, mesmo em telas estreitas.
          Row(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              if (showBack) ...[
                const CircleBackButton(),
                const SizedBox(width: 10),
              ],
              Expanded(
                child: Text(
                  title,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  softWrap: false,
                  style: AppTypography.displaySerif(
                    fontSize: 34,
                    color: AppTheme.ink,
                  ),
                ),
              ),
              if (trailing != null) ...[const SizedBox(width: 10), trailing!],
            ],
          ),
          if (subtitle != null) ...[
            const SizedBox(height: 6),
            Row(
              children: [
                if (showBack) const SizedBox(width: _backIndent),
                Flexible(
                  child: Text(
                    subtitle!,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      color: AppTheme.inkMuted,
                      fontSize: 13.5,
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
          width: 40,
          height: 40,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: AppTheme.accentOliveDark,
            shape: BoxShape.circle,
            boxShadow: AppTheme.cardShadow,
          ),
          child: const Icon(Icons.add_rounded, size: 22, color: Colors.white),
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
