import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import '../hero_icons.dart';
import 'snappy_tap.dart';
import 'v2_kit.dart';

// Peças das páginas redesenhadas (canvas «Páginas do evento», «Páginas do
// parceiro», «Páginas do convidado», 2026-11-14), iguais em todas: um só
// tamanho por elemento (DESIGN.md §3).

const _divider = Color(0xFFECE7DC);
const _track = Color(0xFFECE9E2);

/// Página com a margem lateral 20 em todos os blocos, menos os que vão
/// de ponta a ponta (carrosséis), cujo tipo está em [bleed].
class KitPage extends StatelessWidget {
  final List<Widget> children;
  final Set<Type> bleed;
  final double bottom;
  final ScrollController? controller;
  const KitPage({super.key, required this.children, this.bleed = const {}, this.bottom = 40, this.controller});

  @override
  Widget build(BuildContext context) => ListView(
        controller: controller,
        padding: EdgeInsets.only(top: MediaQuery.paddingOf(context).top + 12, bottom: bottom),
        children: [
          for (final c in children)
            if (bleed.contains(c.runtimeType) || c is KitBleed)
              c
            else
              Padding(padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin), child: c),
        ],
      );
}

/// Marca um bloco de [KitPage] que vai de ponta a ponta.
class KitBleed extends StatelessWidget {
  final Widget child;
  const KitBleed(this.child, {super.key});

  @override
  Widget build(BuildContext context) => child;
}

/// Cabeçalho: voltar redondo branco 44 à esquerda e ações à direita.
class KitHeader extends StatelessWidget {
  final VoidCallback? onBack;
  final List<Widget> actions;
  const KitHeader({super.key, this.onBack, this.actions = const []});

  @override
  Widget build(BuildContext context) {
    final nav = Navigator.of(context);
    return SizedBox(
      height: 44,
      child: Row(children: [
        V2RoundButton(icon: Hi.chevronLeft, tooltip: 'Voltar', onTap: onBack ?? () => nav.maybePop()),
        const Spacer(),
        for (final (i, a) in actions.indexed) ...[if (i > 0) const SizedBox(width: 10), a],
      ]),
    );
  }
}

/// «+» de criar: círculo preto 44 (DESIGN.md §2).
class KitAddButton extends StatelessWidget {
  final VoidCallback? onTap;
  final String tooltip;
  const KitAddButton({super.key, this.onTap, this.tooltip = 'Adicionar'});

  @override
  Widget build(BuildContext context) => Tooltip(
        message: tooltip,
        excludeFromSemantics: true,
        child: SnappyTap(
          onTap: onTap,
          semanticLabel: tooltip,
          child: Container(
            width: 44,
            height: 44,
            decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
            child: const Icon(Hi.plus, size: 20, color: Colors.white),
          ),
        ),
      );
}

/// Título de página 28 à esquerda, com subtítulo 13 opcional.
class KitTitle extends StatelessWidget {
  final String title;
  final String? subtitle;
  final double top;
  const KitTitle(this.title, {super.key, this.subtitle, this.top = 20});

  @override
  Widget build(BuildContext context) => Padding(
        padding: EdgeInsets.only(top: top),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(title, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink, height: 1.15)),
          if (subtitle != null) ...[
            const SizedBox(height: 6),
            Text(subtitle!, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.4)),
          ],
        ]),
      );
}

/// Título de grupo em maiúsculas (12, espaçamento 2).
class KitCaps extends StatelessWidget {
  final String text;
  final double top;
  final Widget? trailing;
  const KitCaps(this.text, {super.key, this.top = 24, this.trailing});

  @override
  Widget build(BuildContext context) => Padding(
        padding: EdgeInsets.only(top: top, bottom: 8),
        child: Row(children: [
          Expanded(
            child: Text(text.toUpperCase(),
                style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
          ),
          ?trailing,
        ]),
      );
}

/// Barra de progresso verde (10 no resumo, 6 nas linhas).
class KitBar extends StatelessWidget {
  final double value;
  final double height;
  const KitBar(this.value, {super.key, this.height = 10});

  @override
  Widget build(BuildContext context) => ClipRRect(
        borderRadius: BorderRadius.circular(height / 2),
        child: SizedBox(
          height: height,
          child: Stack(children: [
            const Positioned.fill(child: ColoredBox(color: _track)),
            FractionallySizedBox(
              widthFactor: value.clamp(0, 1).toDouble(),
              child: Container(
                decoration: BoxDecoration(
                  color: AppTheme.accentOliveDark,
                  borderRadius: BorderRadius.circular(height / 2),
                ),
              ),
            ),
          ]),
        ),
      );
}

/// Cartão de resumo do topo: rótulo em maiúsculas, número 40, unidade 13,
/// barra 10 e uma linha ou legenda por baixo.
class KitSummary extends StatelessWidget {
  final String kicker;
  final String value;
  final String? unit;
  final double? progress;
  final String? footer;
  final List<KitLegend> legend;
  final Widget? extra;
  const KitSummary({
    super.key,
    required this.kicker,
    required this.value,
    this.unit,
    this.progress,
    this.footer,
    this.legend = const [],
    this.extra,
  });

  @override
  Widget build(BuildContext context) => Container(
        margin: const EdgeInsets.only(top: 20),
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(kicker.toUpperCase(),
              style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
          const SizedBox(height: 8),
          Row(crossAxisAlignment: CrossAxisAlignment.baseline, textBaseline: TextBaseline.alphabetic, children: [
            Flexible(
              child: FittedBox(
                fit: BoxFit.scaleDown,
                alignment: Alignment.centerLeft,
                child: Text(value,
                    maxLines: 1,
                    style: const TextStyle(fontSize: 40, fontWeight: FontWeight.w700, color: AppTheme.ink, height: 1)),
              ),
            ),
            if (unit != null) ...[
              const SizedBox(width: 8),
              Flexible(
                child: Text(unit!,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ),
            ],
          ]),
          if (progress != null) ...[const SizedBox(height: 12), KitBar(progress!)],
          if (legend.isNotEmpty) ...[
            const SizedBox(height: 12),
            Wrap(spacing: 16, runSpacing: 6, children: legend),
          ],
          if (footer != null) ...[
            const SizedBox(height: 10),
            Text(footer!, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ],
          ?extra,
        ]),
      );
}

/// Ponto de cor + número + rótulo («● 4 sim»).
class KitLegend extends StatelessWidget {
  final Color color;
  final String count;
  final String label;
  const KitLegend(this.color, this.count, this.label, {super.key});

  @override
  Widget build(BuildContext context) => Row(mainAxisSize: MainAxisSize.min, children: [
        Container(width: 8, height: 8, decoration: BoxDecoration(color: color, shape: BoxShape.circle)),
        const SizedBox(width: 6),
        Text(count, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(width: 4),
        Text(label, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
      ]);
}

/// Título de secção 22 com ação verde 14 opcional à direita.
class KitSection extends StatelessWidget {
  final String title;
  final String? action;
  final VoidCallback? onAction;
  final double top;
  const KitSection(this.title, {super.key, this.action, this.onAction, this.top = 24});

  @override
  Widget build(BuildContext context) => Padding(
        padding: EdgeInsets.only(top: top, bottom: 12),
        child: Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
          Expanded(
            child: Text(title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          if (action != null)
            SnappyTap(
              onTap: onAction,
              child: Text(action!,
                  style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
            ),
        ]),
      );
}

/// Filtro em pílula 38 (verde quando escolhido) com contador 20.
class KitPill extends StatelessWidget {
  final String label;
  final bool selected;
  final int? count;
  final VoidCallback? onTap;
  const KitPill({super.key, required this.label, this.selected = false, this.count, this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        selected: selected,
        child: SnappyTap(
          onTap: onTap,
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 160),
            height: 38,
            padding: const EdgeInsets.symmetric(horizontal: 16),
            decoration: BoxDecoration(
              color: selected ? AppTheme.accentOliveDark : Colors.white,
              borderRadius: BorderRadius.circular(19),
            ),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Text(label,
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.ink)),
              if (count != null) ...[
                const SizedBox(width: 8),
                Container(
                  constraints: const BoxConstraints(minWidth: 20),
                  height: 20,
                  padding: const EdgeInsets.symmetric(horizontal: 6),
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: selected ? Colors.white : AppTheme.ink,
                    borderRadius: BorderRadius.circular(10),
                  ),
                  child: Text('$count',
                      style: TextStyle(
                          fontSize: 12,
                          fontWeight: FontWeight.w700,
                          color: selected ? AppTheme.accentOliveDark : Colors.white)),
                ),
              ],
            ]),
          ),
        ),
      );
}

/// Fila de filtros que desliza na horizontal, a sangrar até à margem.
class KitPills extends StatelessWidget {
  final List<KitPill> pills;
  final double top;
  const KitPills(this.pills, {super.key, this.top = 16});

  @override
  Widget build(BuildContext context) => Padding(
        padding: EdgeInsets.only(top: top),
        child: SingleChildScrollView(
          scrollDirection: Axis.horizontal,
          clipBehavior: Clip.none,
          child: Row(children: [
            for (final (i, p) in pills.indexed) ...[if (i > 0) const SizedBox(width: 8), p],
          ]),
        ),
      );
}

/// Grupo de linhas: cartão branco, cantos 22, interior 4×16, linhas
/// separadas por #ECE7DC. Sem sombra (DESIGN.md §4/§5).
class KitGroup extends StatelessWidget {
  final List<Widget> rows;
  final double top;
  final bool shadow;
  const KitGroup(this.rows, {super.key, this.top = 0, this.shadow = false});

  @override
  Widget build(BuildContext context) => Container(
        margin: EdgeInsets.only(top: top),
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
        decoration: shadow
            ? softCard(radius: 22)
            : BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
        child: Column(children: [
          for (var i = 0; i < rows.length; i++) ...[
            if (i > 0) const Divider(height: 1, thickness: 1, color: _divider),
            rows[i],
          ],
        ]),
      );
}

/// Linha de lista: [lead] + título 16 negrito + meta 13 + [trailing].
class KitRow extends StatelessWidget {
  final Widget? lead;
  final String title;
  final String? sub;
  final Widget? trailing;
  final bool chevron;
  final VoidCallback? onTap;
  final bool done;
  const KitRow({
    super.key,
    this.lead,
    required this.title,
    this.sub,
    this.trailing,
    this.chevron = false,
    this.onTap,
    this.done = false,
  });

  @override
  Widget build(BuildContext context) {
    final row = ConstrainedBox(
      constraints: const BoxConstraints(minHeight: 56),
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 8),
        child: Row(children: [
          if (lead != null) ...[lead!, const SizedBox(width: 12)],
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
              Text(title,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(
                    fontSize: 16,
                    fontWeight: FontWeight.w700,
                    color: done ? const Color(0xFF8A847B) : AppTheme.ink,
                    decoration: done ? TextDecoration.lineThrough : null,
                  )),
              if (sub != null && sub!.isNotEmpty) ...[
                const SizedBox(height: 2),
                Text(sub!,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.35)),
              ],
            ]),
          ),
          if (trailing != null) ...[const SizedBox(width: 12), trailing!],
          if (chevron) ...[const SizedBox(width: 8), const Icon(Hi.chevronRight, size: 16, color: AppTheme.inkMuted)],
        ]),
      ),
    );
    return onTap == null ? row : SnappyTap(onTap: onTap, child: row);
  }
}

/// Linha de definições: nome 16 à esquerda, valor 14 + seta à direita.
class KitSetRow extends StatelessWidget {
  final String label;
  final String? value;
  final VoidCallback? onTap;
  final Widget? trailing;
  const KitSetRow({super.key, required this.label, this.value, this.onTap, this.trailing});

  @override
  Widget build(BuildContext context) {
    final row = ConstrainedBox(
      constraints: const BoxConstraints(minHeight: 56),
      child: Row(children: [
        Text(label, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(width: 12),
        Expanded(
          child: Text(value ?? '',
              textAlign: TextAlign.right,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
        ),
        if (trailing != null) ...[const SizedBox(width: 8), trailing!],
        if (onTap != null && trailing == null) ...[
          const SizedBox(width: 8),
          const Icon(Hi.chevronRight, size: 16, color: AppTheme.inkMuted),
        ],
      ]),
    );
    return onTap == null ? row : SnappyTap(onTap: onTap, child: row);
  }
}

enum KitTagKind { green, neutral, pending, urgent }

/// Etiqueta em pílula 12 negrito: verde (sucesso), neutra, ou com linha
/// amarela/vermelha e ponto (pendente/urgente — DESIGN.md §7).
class KitTag extends StatelessWidget {
  final String text;
  final KitTagKind kind;
  const KitTag(this.text, {super.key, this.kind = KitTagKind.green});

  @override
  Widget build(BuildContext context) {
    final line = switch (kind) {
      KitTagKind.pending => const Color(0xFFF2A01B),
      KitTagKind.urgent => const Color(0xFFC8553D),
      _ => null,
    };
    final bg = switch (kind) {
      KitTagKind.green => const Color(0xFFE6EDE1),
      KitTagKind.neutral => AppTheme.background,
      _ => Colors.white,
    };
    final fg = switch (kind) {
      KitTagKind.green => const Color(0xFF3F7A4F),
      KitTagKind.neutral => const Color(0xFF3A3733),
      _ => AppTheme.ink,
    };
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 10, vertical: line == null ? 5 : 4),
      decoration: BoxDecoration(
        color: bg,
        borderRadius: BorderRadius.circular(999),
        border: line == null ? null : Border.all(color: line, width: 1.5),
      ),
      child: Row(mainAxisSize: MainAxisSize.min, children: [
        if (line != null) ...[
          Container(width: 6, height: 6, decoration: BoxDecoration(color: line, shape: BoxShape.circle)),
          const SizedBox(width: 6),
        ],
        Text(text, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: fg)),
      ]),
    );
  }
}

/// Círculo de estado das tarefas: vazio, em curso (ponto verde) ou feito.
class KitCheck extends StatelessWidget {
  final bool done;
  final bool inProgress;
  final VoidCallback? onTap;
  const KitCheck({super.key, this.done = false, this.inProgress = false, this.onTap});

  @override
  Widget build(BuildContext context) {
    final box = Container(
      width: 24,
      height: 24,
      alignment: Alignment.center,
      decoration: BoxDecoration(
        shape: BoxShape.circle,
        color: done ? AppTheme.accentOliveDark : null,
        border: done
            ? null
            : Border.all(color: inProgress ? AppTheme.accentOliveDark : const Color(0xFFC9C3B8), width: 1.5),
      ),
      child: done
          ? const Icon(Hi.check, size: 14, color: Colors.white)
          : inProgress
              ? Container(
                  width: 10,
                  height: 10,
                  decoration: const BoxDecoration(color: AppTheme.accentOliveDark, shape: BoxShape.circle))
              : null,
    );
    return onTap == null ? box : SnappyTap(onTap: onTap, child: box);
  }
}

/// Aviso com linha fina da cor do tom, ponto e botão preto 36
/// (DESIGN.md §7).
class KitAlert extends StatelessWidget {
  final String text;
  final String? action;
  final VoidCallback? onAction;
  final bool urgent;
  final double top;
  const KitAlert({super.key, required this.text, this.action, this.onAction, this.urgent = false, this.top = 16});

  @override
  Widget build(BuildContext context) {
    final tone = urgent ? const Color(0xFFC8553D) : const Color(0xFFF2A01B);
    return Container(
      margin: EdgeInsets.only(top: top),
      padding: const EdgeInsets.fromLTRB(16, 12, 12, 12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(22),
        border: Border.all(color: tone, width: 1.5),
      ),
      child: Row(children: [
        Container(width: 8, height: 8, decoration: BoxDecoration(color: tone, shape: BoxShape.circle)),
        const SizedBox(width: 10),
        Expanded(
          child: Text(text,
              style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink, height: 1.35)),
        ),
        if (action != null) ...[
          const SizedBox(width: 10),
          FilledButton(
            onPressed: onAction,
            style: FilledButton.styleFrom(
              backgroundColor: AppTheme.ink,
              foregroundColor: Colors.white,
              minimumSize: const Size(0, 36),
              padding: const EdgeInsets.symmetric(horizontal: 16),
              shape: const StadiumBorder(),
              textStyle: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700),
              tapTargetSize: MaterialTapTargetSize.shrinkWrap,
            ),
            child: Text(action!),
          ),
        ],
      ]),
    );
  }
}
