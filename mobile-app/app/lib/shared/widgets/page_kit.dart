import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import '../hero_icons.dart';
import 'scroll_aware_back_button.dart';
import 'snappy_tap.dart';
import 'v2_kit.dart';
import 'app_progress.dart';

// Peças das páginas redesenhadas (canvas «Páginas do evento», «Páginas do
// parceiro», «Páginas do convidado», 2026-11-14), iguais em todas: um só
// tamanho por elemento (DESIGN.md §3).

const _divider = AppTheme.line;

/// Página com a margem lateral 20 em todos os blocos, menos os que vão
/// de ponta a ponta (carrosséis), cujo tipo está em [bleed].
class KitPage extends StatefulWidget {
  final List<Widget> children;
  final Set<Type> bleed;
  final double bottom;
  final ScrollController? controller;

  /// Liga a seta de voltar fixa do DESIGN.md §6 (fica sempre no ecrã, roda
  /// ←→↑ e sobe ao topo). Com isto ligado, o [KitHeader] desta página deixa
  /// de desenhar o seu próprio voltar (passa a ser o do overlay). Usar só em
  /// páginas que fazem "push" (que têm voltar) — não em raízes de separador.
  final bool pinnedBack;

  /// Ação de voltar da seta fixa (quando [pinnedBack]). Omitir = `maybePop`.
  final VoidCallback? onBack;

  /// `false`: a seta fixa é sempre «voltar» e não roda para ↑ (páginas do
  /// evento, pedido do Rafael 2026-11-22).
  final bool rotateBack;

  const KitPage({
    super.key,
    required this.children,
    this.bleed = const {},
    this.bottom = 40,
    this.controller,
    this.pinnedBack = false,
    this.onBack,
    this.rotateBack = false,
  });

  @override
  State<KitPage> createState() => _KitPageState();
}

/// Marca a subárvore de um [KitPage] com a seta fixa ligada, para o
/// [KitHeader] saber que não deve desenhar o seu próprio voltar.
class _KitPageScope extends InheritedWidget {
  final bool pinnedBack;

  /// O título da página (o [KitTitle] escreve-o aqui) para a barra do topo.
  final ValueNotifier<String?>? title;
  const _KitPageScope({required this.pinnedBack, this.title, required super.child});
  static _KitPageScope? of(BuildContext context) =>
      context.dependOnInheritedWidgetOfExactType<_KitPageScope>();
  @override
  bool updateShouldNotify(_KitPageScope old) => old.pinnedBack != pinnedBack || old.title != title;
}

/// Barra do topo bloqueada (pedido do Rafael, 2026-11-23): depois de passar
/// o título, fica uma barra branca fixa no topo (cantos 35 em baixo, sombra
/// da navbar) com o título 16; a seta de voltar fica por cima dela, no
/// mesmo sítio. Substitui o «nevoeiro» branco do topo.
class LockedTopBar extends StatelessWidget {
  final ScrollController controller;
  final ValueListenable<String?> title;
  final double showAfter;
  const LockedTopBar({super.key, required this.controller, required this.title, this.showAfter = 64});

  @override
  Widget build(BuildContext context) {
    final topInset = MediaQuery.paddingOf(context).top;
    return AnimatedBuilder(
      animation: Listenable.merge([controller, title]),
      builder: (context, _) {
        final y = controller.safeOffset;
        final show = ((y - showAfter) / 24).clamp(0.0, 1.0).toDouble();
        if (show <= 0) return const SizedBox.shrink();
        return IgnorePointer(
          ignoring: show < 1,
          child: Opacity(
            opacity: show,
            child: Container(
              height: topInset + 68,
              padding: EdgeInsets.fromLTRB(AppTheme.screenMargin + 44 + 12, topInset + 12, AppTheme.screenMargin, 12),
              alignment: Alignment.centerLeft,
              decoration: const BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.vertical(bottom: Radius.circular(35)),
                boxShadow: [BoxShadow(color: Color(0x1F171713), blurRadius: 24, offset: Offset(0, 8))],
              ),
              child: Text(title.value ?? '', maxLines: 1, overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ),
          ),
        );
      },
    );
  }
}

/// Envolve um ecrã com scroll próprio (que não usa [KitPage]) e dá-lhe a seta
/// fixa do DESIGN.md §6: gere o [ScrollController], põe a seta no overlay
/// (sempre no ecrã, roda ←→↑, sobe ao topo) e, via o mesmo scope, faz o
/// [KitHeader] lá dentro deixar de desenhar o seu próprio voltar.
///
/// Uso: `ScrollBackView(onBack: ..., builder: (ctx, c) => ListView(controller: c, ...))`.
class ScrollBackView extends StatefulWidget {
  final Widget Function(BuildContext context, ScrollController controller) builder;
  final VoidCallback? onBack;

  /// Px de scroll em que ainda há imagem por trás da seta (0 = sem imagem).
  final double imageExtent;

  const ScrollBackView({super.key, required this.builder, this.onBack, this.imageExtent = 0});

  @override
  State<ScrollBackView> createState() => _ScrollBackViewState();
}

class _ScrollBackViewState extends State<ScrollBackView> {
  final _controller = ScrollController();
  final _title = ValueNotifier<String?>(null);

  @override
  void dispose() {
    _controller.dispose();
    _title.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final topInset = MediaQuery.paddingOf(context).top;
    return _KitPageScope(
      pinnedBack: true,
      title: _title,
      child: Stack(children: [
        Positioned.fill(child: widget.builder(context, _controller)),
        Positioned(top: 0, left: 0, right: 0, child: LockedTopBar(controller: _controller, title: _title)),
        Positioned(
          left: AppTheme.screenMargin,
          top: topInset + 12,
          child: ScrollAwareBackButton(
            controller: _controller,
            onBack: widget.onBack ?? () => Navigator.of(context).maybePop(),
            imageExtent: widget.imageExtent,
          ),
        ),
      ]),
    );
  }
}

class _KitPageState extends State<KitPage> {
  // Usa o controlador do ecrã, se houver; senão cria um só para o
  // "voltar ao topo".
  ScrollController? _own;
  ScrollController get _controller => widget.controller ?? (_own ??= ScrollController());

  // Mostra o botão de "voltar ao topo" depois de passar o cabeçalho.
  bool _scrolled = false;
  final _title = ValueNotifier<String?>(null);

  void _onScroll() {
    final v = _controller.safeOffset > 120;
    if (v != _scrolled && mounted) setState(() => _scrolled = v);
  }

  @override
  void initState() {
    super.initState();
    _controller.addListener(_onScroll);
  }

  @override
  void dispose() {
    _controller.removeListener(_onScroll);
    _own?.dispose();
    _title.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final topInset = MediaQuery.paddingOf(context).top;
    return _KitPageScope(
      pinnedBack: widget.pinnedBack,
      title: _title,
      child: Stack(children: [
        Positioned.fill(
          child: ListView(
            controller: _controller,
            padding: EdgeInsets.only(top: topInset + 12, bottom: widget.bottom),
            children: [
              for (final c in widget.children)
                if (widget.bleed.contains(c.runtimeType) || c is KitBleed)
                  c
                else
                  Padding(padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin), child: c),
            ],
          ),
        ),
        // DESIGN.md §6. Com [pinnedBack]: a seta de voltar fica sempre no
        // ecrã, roda de ← para ↑ ao descer e passa a subir ao topo (é o
        // ScrollAwareBackButton; o KitHeader deixa de desenhar o seu voltar).
        // Sem [pinnedBack]: mantém-se o botão ↑ que aparece ao fazer scroll.
        if (widget.pinnedBack)
          Positioned(top: 0, left: 0, right: 0, child: LockedTopBar(controller: _controller, title: _title)),
        if (widget.pinnedBack)
          Positioned(
            left: AppTheme.screenMargin,
            top: topInset + 12,
            child: ScrollAwareBackButton(
              controller: _controller,
              onBack: widget.onBack ?? () => Navigator.of(context).maybePop(),
              rotate: widget.rotateBack,
            ),
          )
        else
          Positioned(
            left: AppTheme.screenMargin,
            top: topInset + 12,
            child: IgnorePointer(
              ignoring: !_scrolled,
              child: AnimatedOpacity(
                opacity: _scrolled ? 1 : 0,
                duration: const Duration(milliseconds: 180),
                child: V2RoundButton(
                  icon: Hi.arrowUp,
                  tooltip: 'Voltar ao topo',
                  onTap: () => _controller.animateTo(0,
                      duration: const Duration(milliseconds: 320), curve: Curves.easeOut),
                ),
              ),
            ),
          ),
      ]),
    );
  }
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
    // Numa página com a seta fixa do §6, o voltar é o do overlay: aqui fica
    // só um espaço de 44 por baixo dele, e as ações à direita.
    final pinned = _KitPageScope.of(context)?.pinnedBack ?? false;
    return SizedBox(
      height: 44,
      child: Row(children: [
        if (pinned)
          const SizedBox(width: 44)
        else
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
  Widget build(BuildContext context) {
    // Dá o título à barra do topo bloqueada.
    final holder = _KitPageScope.of(context)?.title;
    if (holder != null && holder.value != title) {
      WidgetsBinding.instance.addPostFrameCallback((_) => holder.value = title);
    }
    return _build();
  }

  Widget _build() => Padding(
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

  /// Sem linha logo a seguir a uma caixa branca de destaque (2026-11-21).
  final bool line;
  const KitCaps(this.text, {super.key, this.top = 24, this.trailing, this.line = true});

  @override
  Widget build(BuildContext context) => Padding(
        // Sem espaço a mais por baixo do grupo anterior: metade por cima da
        // linha, 16 entre a linha e o título (2026-11-21).
        padding: EdgeInsets.only(top: line ? top / 2 : top, bottom: 8),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          if (line) ...[
            // Linha mais grossa entre secções diferentes (pedido 2026-11-21).
            const Divider(height: 2, thickness: 2, color: AppTheme.sectionLine),
            const SizedBox(height: 16),
          ],
          Row(children: [
          Expanded(
            child: Text(text.toUpperCase(),
                style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
          ),
          ?trailing,
        ]),
        ]),
      );
}

/// Barra de progresso verde (10 no resumo, 6 nas linhas).
class KitBar extends StatelessWidget {
  final double value;
  final double height;
  const KitBar(this.value, {super.key, this.height = 10});

  // A barra da app: a estrela na ponta e animada (DESIGN.md §6, 2026-11-21).
  @override
  Widget build(BuildContext context) => AppProgressBar(value: value, height: height);
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
        // O resumo do topo é o destaque da página: caixa branca com o
        // contorno preto 1,5 (2026-11-21).
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
        padding: EdgeInsets.only(top: top / 2, bottom: 12),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          // Linha mais grossa entre secções diferentes (pedido 2026-11-21).
          const Divider(height: 2, thickness: 2, color: AppTheme.sectionLine),
          const SizedBox(height: 16),
          Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
          Expanded(
            child: Text(title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          if (action != null)
            SnappyTap(
              onTap: onAction,
              child: Text(action!,
                  style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
            ),
        ]),
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

  /// Dentro de uma moldura as pílulas nunca passam da linha: as que não
  /// cabem descem para a linha de baixo (pedido 2026-11-23).
  final bool clip;
  const KitPills(this.pills, {super.key, this.top = 16, this.clip = false});

  @override
  Widget build(BuildContext context) => clip
      ? Padding(
          padding: EdgeInsets.only(top: top),
          child: Wrap(spacing: 8, runSpacing: 8, children: pills),
        )
      : Padding(
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
        // Sem caixa: as linhas ficam no fundo, separadas por traços (2026-11-21).
        margin: EdgeInsets.only(top: top),
        padding: const EdgeInsets.symmetric(vertical: 4),
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
      // Etiqueta neutra: #E6E6E6 (DESIGN.md §1), visível no fundo da página.
      KitTagKind.neutral => const Color(0xFFE6E6E6),
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
        // Numa linha só (pedido 2026-11-22: «Pedido enviado» ficava torto).
        Text(text, maxLines: 1, softWrap: false, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: fg)),
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
                  decoration: BoxDecoration(color: AppTheme.accentOliveDark, shape: BoxShape.circle))
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
              textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 13, fontWeight: FontWeight.w700),
              tapTargetSize: MaterialTapTargetSize.shrinkWrap,
            ),
            child: Text(action!),
          ),
        ],
      ]),
    );
  }
}
