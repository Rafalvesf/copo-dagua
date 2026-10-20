import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';

import '../../payments/open_payment.dart';
import '../../../core/budget/budget_controller.dart';
import '../../../core/budget/expense_controller.dart';
import '../../../core/home/home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../core/wedding/menu_style.dart';
import '../../guests/screens/guests_list_screen.dart' show shareWeddingInvite;
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/skeleton.dart';
import '../../../shared/widgets/photo_adjust_screen.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/money.dart';
import '../../../core/gallery/gallery_providers.dart';
import '../../../core/guests/guest_controller.dart';
import '../../../core/seating/seating_controller.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../shared/widgets/island_sheet.dart';


/// Cor escolhida pelo organizador (verde-eucalipto por defeito, 098) e
/// frase/desenhos do tipo de evento (canvas "Menu principal").
class _Look {
  final Color color;
  final Color on;
  final Color accent;
  final Color tint;
  final Color comp;
  final String tagline;
  final IconData motif;
  final List<IconData> doodles;

  const _Look({
    required this.color,
    required this.on,
    required this.accent,
    required this.tint,
    required this.comp,
    required this.tagline,
    required this.motif,
    required this.doodles,
  });
}

final _lookProvider = Provider<_Look>((ref) {
  final type = ref.watch(weddingControllerProvider.select((s) => s.wedding?.eventType)) ?? EventType.wedding;
  final c = ref.watch(currentMenuStyleProvider).color;
  final d = EventDecor.of(type);
  return _Look(color: c.color, on: c.on, accent: c.accent, tint: c.tint, comp: c.comp, tagline: d.tagline, motif: d.motif, doodles: d.doodles);
});

/// Sombra suave dos cartões (canvas, 2026-10-17).
const _softShadow = [
  BoxShadow(color: Color(0x14171713), blurRadius: 10, offset: Offset(0, 4)),
];

/// "Os noivos" — cartão banner "O nosso casamento" (foto de capa +
/// contagem decrescente) e o resumo do dashboard (orçamento, atalhos,
/// suporte, pagamentos, reservas, próximas tarefas). Pedido explícito
/// do utilizador (2026-09-01): "trocas o conteúdo do home com o
/// conteúdo do os noivos, sem mexer no conteúdo" — este ecrã passou a
/// ter o conteúdo que antes vivia em `home_feed_screen.dart`
/// (`HomeFeedScreen`), sem nenhuma alteração ao próprio conteúdo.
class WeddingDetailsScreen extends ConsumerStatefulWidget {
  final bool startEditing;
  const WeddingDetailsScreen({super.key, this.startEditing = false});

  @override
  ConsumerState<WeddingDetailsScreen> createState() => _WeddingDetailsScreenState();
}

/// Toque longo na página (pedido 2026-10-18): a própria página encolhe,
/// como trocar o mostrador do Apple Watch, e ao deslizar passa pelos
/// estilos reais (com os dados do evento); por baixo, as cores.
class _WeddingDetailsScreenState extends ConsumerState<WeddingDetailsScreen> {
  bool _editing = false;
  bool _saving = false;
  int _layout = 0;
  int _color = 0;
  PageController? _layoutPager;
  PageController? _colorPager;

  @override
  void initState() {
    super.initState();
    if (widget.startEditing) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (mounted && ref.read(weddingControllerProvider).wedding != null) _startEditing();
      });
    }
  }

  void _startEditing() {
    final style = ref.read(currentMenuStyleProvider);
    HapticFeedback.mediumImpact();
    _layout = MenuLayout.values.indexOf(style.layout);
    _color = MenuColor.all.indexWhere((c) => c.id == style.color.id).clamp(0, MenuColor.all.length - 1);
    _layoutPager?.dispose();
    _colorPager?.dispose();
    _layoutPager = PageController(viewportFraction: 0.8, initialPage: _layout);
    _colorPager = PageController(viewportFraction: 0.2, initialPage: _color);
    setState(() => _editing = true);
  }

  Future<void> _finish({required bool save}) async {
    if (save) {
      setState(() => _saving = true);
      try {
        await saveMenuStyle(ref, layout: MenuLayout.values[_layout], color: MenuColor.all[_color]);
      } catch (_) {
        if (mounted) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
        }
      }
    }
    if (mounted) setState(() {
      _editing = false;
      _saving = false;
    });
  }

  @override
  void dispose() {
    _layoutPager?.dispose();
    _colorPager?.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final wedding = ref.watch(weddingControllerProvider).wedding;
    final layout = ref.watch(currentMenuStyleProvider).layout;

    return GradientScaffold(
      background: AppBackground.feed,
      body: wedding == null
          ? const _WeddingSkeleton()
          : PopScope(
              canPop: !_editing,
              onPopInvokedWithResult: (didPop, _) {
                if (!didPop && _editing) _finish(save: false);
              },
              // Ao entrar no modo de edição a página "encolhe" para o
              // carrossel (como no Apple Watch).
              child: _editing
                  ? TweenAnimationBuilder<double>(
                      key: const ValueKey('editing'),
                      tween: Tween(begin: 1.12, end: 1.0),
                      duration: const Duration(milliseconds: 300),
                      curve: Curves.easeOutCubic,
                      builder: (context, scale, child) => Transform.scale(scale: scale, child: child),
                      child: _editor(context, wedding),
                    )
                  : _normal(context, wedding, layout),
            ),
    );
  }

  Widget _normal(BuildContext context, Wedding wedding, MenuLayout layout) {
    return Stack(
      key: const ValueKey('normal'),
      children: [
        SafeArea(
          bottom: false,
          child: GestureDetector(
            behavior: HitTestBehavior.translucent,
            onLongPress: _startEditing,
            child: EdgeFade(
              topFadeHeight: 8,
              bottomFadeHeight: 140,
              child: _PageBody(wedding: wedding, layout: layout),
            ),
          ),
        ),
        const Positioned(
          left: 0,
          right: 0,
          bottom: 0,
          child: FloatingBottomNav(current: AppTab.wedding),
        ),
      ],
    );
  }

  Widget _editor(BuildContext context, Wedding wedding) {
    final color = MenuColor.all[_color];
    final layout = MenuLayout.values[_layout];
    return SafeArea(
      key: const ValueKey('editing'),
      child: Column(
        children: [
          // X à esquerda, título ao centro e ✓ à direita (pedido
          // 2026-10-18).
          Padding(
            padding: const EdgeInsets.fromLTRB(16, 10, 16, 0),
            child: Row(
              children: [
                IconButton(
                  tooltip: 'Cancelar',
                  onPressed: () => _finish(save: false),
                  style: IconButton.styleFrom(backgroundColor: AppTheme.surface, fixedSize: const Size(44, 44)),
                  icon: const Icon(Icons.close_rounded, color: AppTheme.ink),
                ),
                Expanded(
                  child: Column(
                    children: [
                      const Text('Aparência do menu',
                          textAlign: TextAlign.center,
                          style: TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      Text('${layout.label} · ${color.label}',
                          textAlign: TextAlign.center, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                    ],
                  ),
                ),
                IconButton(
                  tooltip: 'Guardar',
                  onPressed: _saving ? null : () => _finish(save: true),
                  style: IconButton.styleFrom(
                    backgroundColor: color.color,
                    disabledBackgroundColor: color.color.withValues(alpha: 0.5),
                    fixedSize: const Size(44, 44),
                  ),
                  icon: _saving
                      ? SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2.2, color: color.on))
                      : Icon(Icons.check_rounded, color: color.on),
                ),
              ],
            ),
          ),
          const SizedBox(height: 6),
          Expanded(
            child: PageView.builder(
              controller: _layoutPager,
              itemCount: MenuLayout.values.length,
              onPageChanged: (i) {
                HapticFeedback.selectionClick();
                setState(() => _layout = i);
              },
              itemBuilder: (context, i) => AnimatedBuilder(
                animation: _layoutPager!,
                builder: (context, child) {
                  final pager = _layoutPager!;
                  final page = pager.hasClients && pager.position.haveDimensions ? (pager.page ?? _layout.toDouble()) : _layout.toDouble();
                  final d = (page - i).abs().clamp(0.0, 1.0);
                  return Transform.scale(scale: 1 - d * 0.08, child: Opacity(opacity: 1 - d * 0.35, child: child));
                },
                // A página real, encolhida e sem toques (só se desliza).
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 8),
                  child: DecoratedBox(
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(34),
                      boxShadow: const [BoxShadow(color: Color(0x2E171713), blurRadius: 30, offset: Offset(0, 12))],
                    ),
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(34),
                      child: ColoredBox(
                        color: Colors.white,
                        child: IgnorePointer(
                          child: FittedBox(
                            fit: BoxFit.fitWidth,
                            alignment: Alignment.topCenter,
                            child: SizedBox(
                              width: 390,
                              height: 780,
                              child: OverflowBox(
                                alignment: Alignment.topCenter,
                                maxHeight: double.infinity,
                                child: _StylePreview(
                                style: EventMenuStyle(MenuLayout.values[i], color),
                                child: _PageBody(wedding: wedding, layout: MenuLayout.values[i], scrollable: false),
                              ),
                              ),
                            ),
                          ),
                        ),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ),
          Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              for (var i = 0; i < MenuLayout.values.length; i++)
                AnimatedContainer(
                  duration: const Duration(milliseconds: 200),
                  margin: const EdgeInsets.symmetric(horizontal: 3),
                  width: i == _layout ? 18 : 6,
                  height: 6,
                  decoration: BoxDecoration(color: i == _layout ? color.accent : AppTheme.borderMuted, borderRadius: BorderRadius.circular(3)),
                ),
            ],
          ),
          const SizedBox(height: 8),
          SizedBox(
            height: 74,
            child: PageView.builder(
              controller: _colorPager,
              itemCount: MenuColor.all.length,
              onPageChanged: (i) {
                HapticFeedback.selectionClick();
                setState(() => _color = i);
              },
              itemBuilder: (context, i) {
                final c = MenuColor.all[i];
                final selected = i == _color;
                return Semantics(
                  button: true,
                  selected: selected,
                  label: c.label,
                  child: GestureDetector(
                    // Tocar na cor já escolhida (com o ✓) guarda.
                    onTap: () => selected
                        ? _finish(save: true)
                        : _colorPager!.animateToPage(i, duration: const Duration(milliseconds: 260), curve: Curves.easeOutCubic),
                    child: Center(
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 200),
                        curve: Curves.easeOutBack,
                        width: selected ? 60 : 40,
                        height: selected ? 60 : 40,
                        decoration: BoxDecoration(
                          color: c.color,
                          shape: BoxShape.circle,
                          border: Border.all(color: Colors.white, width: 3),
                          boxShadow: [
                            BoxShadow(
                              color: selected ? c.accent : const Color(0x22171713),
                              spreadRadius: selected ? 2 : 0,
                              blurRadius: selected ? 0 : 8,
                            ),
                          ],
                        ),
                        child: selected ? Icon(Icons.check, color: c.on, size: 22) : null,
                      ),
                    ),
                  ),
                );
              },
            ),
          ),
          const SizedBox(height: 14),
        ],
      ),
    );
  }
}

/// Estilo em pré-visualização (modo de edição): sobrepõe-se ao guardado
/// para os widgets desta página.
class _StylePreview extends InheritedWidget {
  final EventMenuStyle style;
  const _StylePreview({required this.style, required super.child});

  @override
  bool updateShouldNotify(_StylePreview old) => old.style.layout != style.layout || old.style.color.id != style.color.id;
}

_Look _look(BuildContext context, WidgetRef ref) {
  final preview = context.dependOnInheritedWidgetOfExactType<_StylePreview>();
  if (preview == null) return ref.watch(_lookProvider);
  final type = ref.watch(weddingControllerProvider.select((s) => s.wedding?.eventType)) ?? EventType.wedding;
  final c = preview.style.color;
  final d = EventDecor.of(type);
  return _Look(color: c.color, on: c.on, accent: c.accent, tint: c.tint, comp: c.comp, tagline: d.tagline, motif: d.motif, doodles: d.doodles);
}

/// O conteúdo da página do evento num estilo.
class _PageBody extends ConsumerWidget {
  final Wedding wedding;
  final MenuLayout layout;
  final bool scrollable;
  const _PageBody({required this.wedding, required this.layout, this.scrollable = true});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final look = _look(context, ref);
    final children = <Widget>[
        // Aparência escolhida (098): o clássico por defeito, ou uma das
        // três opções.
        ...switch (layout) {
          MenuLayout.classic => [
              _HeroCard(wedding: wedding),
              const SizedBox(height: 22),
              const _QuickLinksRow(),
            ],
          MenuLayout.stickers => [_StickersTop(wedding: wedding)],
          MenuLayout.mural => [_MuralTop(wedding: wedding)],
          MenuLayout.clothesline => [_ClotheslineTop(wedding: wedding)],
        },
        const SizedBox(height: 22),
        const _BookingsSection(),
        const SizedBox(height: 14),
        const _UpcomingPaymentsCard(),
        const SizedBox(height: 22),
        Row(
          children: [
            const Text('Próximas tarefas', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(width: 8),
            Transform.rotate(angle: -0.17, child: Icon(look.doodles[1], size: 18, color: look.accent)),
            const Spacer(),
            SnappyTap(
              onTap: () => context.push('/tasks'),
              child: Text(
                'Ver todas',
                style: TextStyle(color: look.accent, fontWeight: FontWeight.w700, fontSize: AppFontSize.md),
              ),
            ),
          ],
        ),
        const SizedBox(height: 12),
        const _UpcomingTasksSection(),
        const SizedBox(height: 26),
        const _FinancialSummaryRow(),
        const SizedBox(height: 22),
        _ShareWeddingButton(wedding: wedding, color: look.color, on: look.on),
    ];
    const padding = EdgeInsets.fromLTRB(AppTheme.screenMargin, 40, AppTheme.screenMargin, 140);
    if (!scrollable) {
      // Pré-visualização (modo de edição): sem lista que desliza.
      return Padding(
        padding: padding,
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: children),
      );
    }
    return ListView(padding: padding, children: children);
  }
}

/// Cartão banner "O nosso casamento" — foto de capa do casal +
/// contagem decrescente até ao grande dia. Usa
/// [Wedding.coverPhotoUrlCacheBusted] em vez do URL cru: o caminho no
/// Storage é fixo por casamento (`upsert: true`), por isso um novo
/// upload devolvia sempre o mesmo URL e o browser continuava a
/// mostrar a imagem antiga em cache (pedido explícito do utilizador:
/// "a imagem no o nosso casamento não quer atualizar").
class _HeroCard extends ConsumerStatefulWidget {
  final Wedding wedding;

  const _HeroCard({required this.wedding});

  @override
  ConsumerState<_HeroCard> createState() => _HeroCardState();
}

class _HeroCardState extends ConsumerState<_HeroCard> {
  bool _uploading = false;

  String get _dateLabel {
    final date = widget.wedding.weddingDate;
    if (date == null) return 'DATA POR DEFINIR';
    return formatWeddingDateCaps(date);
  }

  Future<void> _pickBanner() async {
    final picker = ImagePicker();
    final file = await picker.pickImage(source: ImageSource.gallery, imageQuality: 85);
    if (file == null || !mounted) return;
    final rawBytes = await file.readAsBytes();
    if (!mounted) return;
    final adjusted = await showPhotoAdjustScreen(context, imageBytes: rawBytes);
    if (adjusted == null || !mounted) return;
    setState(() => _uploading = true);
    try {
      await ref.read(weddingControllerProvider.notifier).uploadBannerBytes(adjusted);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível carregar a foto.')),
        );
      }
    } finally {
      if (mounted) setState(() => _uploading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final wedding = widget.wedding;
    final look = _look(context, ref);
    // Cor com transparência em vez de Opacity (evita camadas extra ao
    // desenhar — a app estava a ficar lenta).
    Widget doodle(IconData icon, double size, double angle) =>
        Transform.rotate(angle: angle, child: Icon(icon, size: size, color: look.on.withValues(alpha: 0.22)));
    Widget dot(double d, double o) => Container(
          width: d,
          height: d,
          decoration: BoxDecoration(color: look.on.withValues(alpha: o), shape: BoxShape.circle),
        );
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(22, 22, 22, 40),
      decoration: BoxDecoration(
        color: look.color,
        borderRadius: BorderRadius.circular(AppRadius.xxl),
        boxShadow: const [BoxShadow(color: Color(0x24171713), blurRadius: 28, offset: Offset(0, 10))],
      ),
      child: Stack(
        children: [
          // Desenhos do tema espalhados pelo cartão, meio transparentes.
          Positioned(top: 252, right: -6, child: doodle(look.doodles[0], 26, 0.21)),
          Positioned(top: 268, left: -8, child: doodle(look.doodles[1], 22, -0.24)),
          Positioned(bottom: 62, right: 0, child: doodle(look.doodles[2], 30, -0.17)),
          Positioned(bottom: 50, left: -2, child: doodle(look.doodles[3], 26, 0.21)),
          Positioned(top: 236, left: 0, right: 0, child: Center(child: doodle(look.doodles[4], 16, 0))),
          Positioned(top: 290, left: 14, child: dot(6, 0.35)),
          Positioned(top: 282, right: 30, child: dot(5, 0.3)),
          Positioned(bottom: 120, left: 40, child: dot(4, 0.3)),
          Positioned(bottom: 110, right: 50, child: dot(6, 0.25)),
          Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Stack(
                clipBehavior: Clip.none,
                alignment: Alignment.bottomCenter,
                children: [
                  SnappyTap(
                    onTap: _uploading ? null : _pickBanner,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(AppRadius.lg),
                      child: SizedBox(
                        height: 214,
                        width: double.infinity,
                        child: Stack(
                          fit: StackFit.expand,
                          children: [
                            if (wedding.coverPhotoUrlCacheBusted != null)
                              Image.network(
                                wedding.coverPhotoUrlCacheBusted!,
                                fit: BoxFit.cover,
                                errorBuilder: (context, error, stackTrace) =>
                                    Container(color: look.tint),
                              )
                            else
                              Container(
                                color: look.tint,
                                alignment: Alignment.center,
                                child: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    Icon(
                                      Icons.add_photo_alternate_outlined,
                                      size: 30,
                                      color: look.accent,
                                    ),
                                    const SizedBox(height: 6),
                                    Text(
                                      'Adicionar ${EventDecor.of(wedding.eventType).coverHint}',
                                      style: TextStyle(
                                        color: look.accent,
                                        fontSize: AppFontSize.sm,
                                        fontWeight: FontWeight.w700,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            if (_uploading)
                              Container(
                                color: Colors.black.withValues(alpha: 0.35),
                                alignment: Alignment.center,
                                child: const CircularProgressIndicator(
                                  color: Colors.white,
                                  strokeWidth: 2.5,
                                ),
                              ),
                          ],
                        ),
                      ),
                    ),
                  ),
                  Positioned(
                    top: 14,
                    left: 10,
                    child: SnappyTap(
                      onTap: _uploading ? null : _pickBanner,
                      child: Container(
                        width: 30,
                        height: 30,
                        decoration: const BoxDecoration(
                          color: Colors.white,
                          shape: BoxShape.circle,
                        ),
                        child: Icon(
                          Icons.camera_alt_outlined,
                          size: 15,
                          color: look.accent,
                        ),
                      ),
                    ),
                  ),
                  // Autocolante com a frase do evento.
                  Positioned(
                    top: 12,
                    right: 10,
                    child: Transform.rotate(
                      angle: 0.07,
                      child: Container(
                        padding: const EdgeInsets.fromLTRB(8, 6, 12, 6),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(999),
                          boxShadow: const [BoxShadow(color: Color(0x1A171713), offset: Offset(0, 4))],
                        ),
                        child: Row(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            Icon(look.motif, size: 16, color: look.accent),
                            const SizedBox(width: 6),
                            Text(
                              look.tagline,
                              style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: look.accent),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                  // Selo redondo com um ícone do tema.
                  Positioned(
                    left: 14,
                    bottom: 40,
                    child: Transform.rotate(
                      angle: -0.21,
                      child: Container(
                        width: 46,
                        height: 46,
                        decoration: BoxDecoration(
                          color: look.color,
                          shape: BoxShape.circle,
                          border: Border.all(color: Colors.white, width: 3),
                        ),
                        child: Icon(look.doodles[2], size: 22, color: look.on),
                      ),
                    ),
                  ),
                  Positioned(
                    bottom: -32,
                    child: Container(
                      constraints: const BoxConstraints(maxWidth: 260),
                      padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 12),
                      decoration: BoxDecoration(
                        color: look.color,
                        borderRadius: BorderRadius.circular(AppRadius.lg),
                      ),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            EventDecor.of(wedding.eventType).kicker,
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: look.on.withValues(alpha: 0.85),
                              fontSize: AppFontSize.xs,
                              fontWeight: FontWeight.w600,
                              letterSpacing: 0.4,
                            ),
                          ),
                          const SizedBox(height: 2),
                          Text(
                            wedding.displayNames,
                            textAlign: TextAlign.center,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: AppTypography.displaySerif(
                              fontSize: AppFontSize.xxl,
                              color: look.on,
                            ).copyWith(
                              // Bold Italic — como num convite (redesign 2026-10).
                              fontStyle: FontStyle.italic,
                              decoration: TextDecoration.underline,
                              decorationColor: look.on,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 46),
              Row(
                children: [
                  Expanded(
                    child: Divider(color: look.on.withValues(alpha: 0.24)),
                  ),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 8),
                    child: Icon(Icons.favorite, size: 12, color: look.on),
                  ),
                  Expanded(
                    child: Divider(color: look.on.withValues(alpha: 0.24)),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              Text(
                _dateLabel,
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: look.on,
                  fontSize: AppFontSize.sm,
                  fontWeight: FontWeight.w700,
                  letterSpacing: 0.6,
                ),
              ),
              if (wedding.location != null) ...[
                const SizedBox(height: 2),
                Text(
                  wedding.location!.toUpperCase(),
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: look.on.withValues(alpha: 0.75),
                    fontSize: AppFontSize.xs,
                    fontWeight: FontWeight.w600,
                    letterSpacing: 0.6,
                  ),
                ),
              ],
              const SizedBox(height: 18),
              RepaintBoundary(child: _CountdownRow(weddingDate: wedding.weddingDate, color: look.accent, on: look.on)),
            ],
          ),
        ],
      ),
    );
  }
}

class _CountdownRow extends StatefulWidget {
  final DateTime? weddingDate;
  final Color color;
  final Color on;

  const _CountdownRow({required this.weddingDate, required this.color, required this.on});

  @override
  State<_CountdownRow> createState() => _CountdownRowState();
}

class _CountdownRowState extends State<_CountdownRow> {
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (mounted) setState(() {});
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final date = widget.weddingDate;
    if (date == null) return const SizedBox.shrink();

    final remaining = date.difference(DateTime.now());
    if (remaining.isNegative) {
      return Text(
        'É hoje! 🎉',
        textAlign: TextAlign.center,
        style: TextStyle(
          color: widget.on,
          fontWeight: FontWeight.w700,
          fontSize: AppFontSize.lg,
        ),
      );
    }

    final days = remaining.inDays;
    final hours = remaining.inHours % 24;
    final minutes = remaining.inMinutes % 60;
    final seconds = remaining.inSeconds % 60;

    return Column(
      children: [
        Text(
          'FALTAM',
          style: TextStyle(
            color: widget.on.withValues(alpha: 0.75),
            fontSize: AppFontSize.xs,
            fontWeight: FontWeight.w700,
            letterSpacing: 1.2,
          ),
        ),
        const SizedBox(height: 8),
        Row(
          children: [
            Expanded(child: _CountdownBox(value: days, label: 'DIAS', color: widget.color, on: widget.on)),
            const SizedBox(width: 8),
            Expanded(child: _CountdownBox(value: hours, label: 'HORAS', color: widget.color, on: widget.on)),
            const SizedBox(width: 8),
            Expanded(child: _CountdownBox(value: minutes, label: 'MIN', color: widget.color, on: widget.on)),
            const SizedBox(width: 8),
            Expanded(child: _CountdownBox(value: seconds, label: 'SEG', color: widget.color, on: widget.on)),
          ],
        ),
      ],
    );
  }
}

class _CountdownBox extends StatelessWidget {
  final int value;
  final String label;
  final Color color;
  final Color on;

  const _CountdownBox({required this.value, required this.label, required this.color, required this.on});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(vertical: 10),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(AppRadius.md),
          ),
          child: Text(
            value.toString().padLeft(2, '0'),
            textAlign: TextAlign.center,
            style: TextStyle(
              color: color,
              fontWeight: FontWeight.w800,
              fontSize: AppFontSize.xl,
            ),
          ),
        ),
        const SizedBox(height: 5),
        Text(
          label,
          style: TextStyle(
            color: on.withValues(alpha: 0.75),
            fontSize: AppFontSize.xxs,
            fontWeight: FontWeight.w700,
            letterSpacing: 0.6,
          ),
        ),
      ],
    );
  }
}

/// Atalhos diretos para os módulos que deixaram de ter tile próprio no
/// grid antigo — Orçamento, Convidados, Lugares e Serviços já tratados
/// (movido de Definições, 2026-09-14) continuam a precisar de um ponto
/// de entrada visível, além de Definições.
/// Um atalho do menu (Orçamento, Convidados…), partilhado pelos quatro
/// estilos de menu.
class _Shortcut {
  final IconData icon;
  final String label;
  final String subtitle;
  final String route;
  const _Shortcut(this.icon, this.label, this.subtitle, this.route);
}

List<_Shortcut> _shortcuts(WidgetRef ref) {
  final budget = ref.watch(budgetControllerProvider).budget;
  final guests = ref.watch(guestsControllerProvider).guests;
  final tables = ref.watch(seatingControllerProvider).tables;
  final weddingId = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
  final photos = weddingId == null
      ? const <GalleryPhoto>[]
      : ref.watch(weddingGalleryPhotosProvider(weddingId)).asData?.value ?? const <GalleryPhoto>[];
  final handled = ref.watch(_servicesHandledProvider).asData?.value;
  final confirmed = guests.where((g) => g.rsvpStatus == RsvpStatus.confirmed).length;
  final seated = tables.fold<int>(0, (n, t) => n + t.guestIds.length);
  final pending = photos.where((p) => p.status == 'pending').length;
  final approved = photos.where((p) => p.status == 'approved').length;
  String plural(int n, String one, String many) => n == 1 ? one : many;
  final decor = EventDecor.of(ref.watch(weddingControllerProvider.select((s) => s.wedding?.eventType)) ?? EventType.wedding);
  return [
    _Shortcut(Icons.savings_outlined, 'Orçamento',
        budget == null || budget.total == 0 ? 'Por definir' : '${euros(budget.spent)} de ${euros(budget.total)}', '/budget'),
    _Shortcut(Icons.people_outline, 'Convidados',
        guests.isEmpty ? 'Ainda sem convidados' : '$confirmed ${plural(confirmed, 'confirmado', 'confirmados')} de ${guests.length}', '/guests'),
    _Shortcut(Icons.event_seat_outlined, 'Lugares', guests.isEmpty || seated == 0 ? decor.seatingEmpty : '$seated de ${guests.length} sentados', '/seating'),
    _Shortcut(Icons.photo_library_outlined, 'Galeria',
        pending > 0 ? '$pending ${plural(pending, 'foto por aprovar', 'fotos por aprovar')}' : approved == 0 ? decor.galleryEmpty : '$approved ${plural(approved, 'foto', 'fotos')}', '/gallery'),
    const _Shortcut(Icons.card_giftcard_outlined, 'Para os convidados', 'Programa e presentes', '/guest-page'),
    _Shortcut(Icons.checklist_rtl_outlined, 'Serviços tratados',
        handled == null ? '—' : handled == 0 ? 'Nenhum ainda' : '$handled ${plural(handled, 'categoria', 'categorias')}', '/service-preferences'),
  ];
}

class _QuickLinksRow extends ConsumerWidget {
  const _QuickLinksRow();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final items = _shortcuts(ref);
    final look = _look(context, ref);
    const bg = [0, 1, 1, 0, 0, 1];
    Widget tile(int i) => _QuickLinkTile(
          icon: items[i].icon,
          label: items[i].label,
          subtitle: items[i].subtitle,
          color: bg[i] == 0 ? look.tint : look.comp,
          index: i,
          accent: look.accent,
          onTap: () => context.push(items[i].route),
        );
    return Column(
      children: [
        for (var r = 0; r < 3; r++) ...[
          if (r > 0) const SizedBox(height: 12),
          Row(
            children: [
              Expanded(child: tile(r * 2)),
              const SizedBox(width: 12),
              Expanded(child: tile(r * 2 + 1)),
            ],
          ),
        ],
      ],
    );
  }
}

/// Categorias marcadas como já tratadas ou sem necessidade
/// (`wedding_service_preferences`).
final _servicesHandledProvider = FutureProvider<int>((ref) async {
  final weddingId = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
  if (weddingId == null) return 0;
  final rows = await supabase
      .from('wedding_service_preferences')
      .select('preference')
      .eq('wedding_id', weddingId)
      .neq('preference', 'needed');
  return (rows as List).length;
});

class _QuickLinkTile extends StatelessWidget {
  final IconData icon;
  final String label;
  final String subtitle;
  final Color color;
  final Color accent;
  final int index;
  final VoidCallback onTap;

  const _QuickLinkTile({
    required this.icon,
    required this.label,
    required this.subtitle,
    required this.color,
    required this.accent,
    required this.index,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    // Canvas "Menu · Casamento": ícone num autocolante branco inclinado.
    const tilts = [-6.0, 5.0, 4.0, -5.0, -3.0, 6.0];
    final tilt = tilts[index % tilts.length] * 3.14159 / 180;
    return SnappyTap(
      onTap: onTap,
      child: Container(
        height: 116,
        clipBehavior: Clip.antiAlias,
        decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(22), boxShadow: _softShadow),
        child: Stack(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(16, 14, 16, 16),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Transform.rotate(
                    angle: tilt,
                    child: Container(
                      width: 40,
                      height: 40,
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(14),
                        boxShadow: const [BoxShadow(color: Color(0x14171713), offset: Offset(0, 3))],
                      ),
                      child: Icon(icon, size: 22, color: accent),
                    ),
                  ),
                  Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        label,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 15, color: AppTheme.ink),
                      ),
                      const SizedBox(height: 2),
                      Text(
                        subtitle,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Botão de partilha do casamento — pedido explícito do utilizador:
/// "o botao de partilha para o casamento deve aparecer entre os o
/// orcamento gasto e parceiros reservados [_FinancialSummaryRow] e o
/// orcamento, convidados e lugaares [_QuickLinksRow]". Reaproveita
/// [InviteShareSheet], já construído em `guests_list_screen.dart`
/// (link de convite + código do casal) — mesmo conteúdo, só um segundo
/// ponto de entrada, sem duplicar lógica.
class _ShareWeddingButton extends StatelessWidget {
  final Wedding wedding;
  final Color color;
  final Color on;

  const _ShareWeddingButton({required this.wedding, required this.color, required this.on});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: () => shareWeddingInvite(context, wedding),
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(vertical: 16),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(20),
          boxShadow: const [BoxShadow(color: Color(0x29171713), blurRadius: 20, offset: Offset(0, 8))],
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            // Dois copos a brindar — o "tchin tchin".
            Icon(Icons.wine_bar_outlined, size: 22, color: on),
            const SizedBox(width: 10),
            Text(
              'Partilhar convite',
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15, color: on),
            ),
          ],
        ),
      ),
    );
  }
}

/// Top-3 tarefas recomendadas pelo motor de tarefas
/// (`core/tasks/task_engine_controller.dart`) — substitui a antiga
/// leitura direta de `checklist_items`. Pedido explícito do
/// utilizador (2026-09-01): nunca mostrar dezenas de tarefas, só as
/// que o motor já promoveu a `ACTIVE`.
class _UpcomingTasksSection extends ConsumerWidget {
  const _UpcomingTasksSection();

  static IconData _iconForCategory(String? category) => switch (category) {
    'orcamento' => Icons.savings_outlined,
    'convidados' => Icons.people_outline,
    'lugares' => Icons.event_seat_outlined,
    'parceiros' => Icons.storefront_outlined,
    'pagamentos' => Icons.euro_rounded,
    _ => Icons.task_alt_outlined,
  };

  static String? _routeForCategory(String? category) => switch (category) {
    'orcamento' => '/budget',
    'convidados' => '/guests',
    'lugares' => '/seating',
    'parceiros' => '/partners',
    'pagamentos' => '/bookings',
    _ => null,
  };

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(taskEngineControllerProvider);
    final top = state.systemActive.take(3).toList();
    final accent = _look(context, ref).accent;

    if (top.isEmpty) {
      return Container(
        width: double.infinity,
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(AppRadius.lg),
        ),
        child: const Text('Sem tarefas pendentes — bom trabalho! 🎉'),
      );
    }

    return Column(
      children: [
        for (final (index, task) in top.indexed) ...[
          _TaskRow(
            title: task.title,
            // Menos texto (design): só a primeira frase.
            description: task.description?.split(RegExp(r'(?<=[.!?])\s')).first.trim(),
            icon: _iconForCategory(task.category),
            accent: accent,
            index: index,
            onTap: () {
              if (!task.seen) {
                ref.read(taskEngineControllerProvider.notifier).markTaskSeen(task.id);
              }
              if (isPaymentTask(task.category, task.sourceEntityId)) {
                openPaymentFlow(context, ref, task.sourceEntityId!);
                return;
              }
              final route = _routeForCategory(task.category);
              context.push(route ?? '/tasks');
            },
          ),
          if (index != top.length - 1) const SizedBox(height: 10),
        ],
      ],
    );
  }
}

class _TaskRow extends StatelessWidget {
  final String title;
  final String? description;
  final IconData icon;
  final Color accent;
  final int index;
  final VoidCallback onTap;

  const _TaskRow({
    required this.title,
    this.description,
    required this.icon,
    required this.accent,
    required this.index,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
          boxShadow: _softShadow,
        ),
        child: Row(
          children: [
            // Ícone "autocolante" dos menus novos (canvas 2026-10-18).
            StickerIcon(icon, color: accent, turns: StickerIcon.tilt(index)),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 14,
                    ),
                  ),
                  if (description != null) ...[
                    const SizedBox(height: 3),
                    Text(
                      description!,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(color: AppTheme.inkMuted, fontSize: 12),
                    ),
                  ],
                ],
              ),
            ),
            const Icon(Icons.chevron_right, size: 18, color: Color(0xFF8F8B84)),
          ],
        ),
      ),
    );
  }
}

/// Orçamento gasto e parceiros reservados — como no design: cartões de
/// cor, rótulo em cima, valor, e uma linha por baixo.
class _FinancialSummaryRow extends ConsumerWidget {
  const _FinancialSummaryRow();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final budget = ref.watch(budgetControllerProvider).budget;
    final confirmed = ref.watch(coupleBookingsProvider).maybeWhen(
          // Reservado = sinal pago (confirmado) ou serviço já feito
          // (concluído); antes só contava "confirmado" e as reservas
          // concluídas davam 0 (2026-10-19).
          data: (list) => list
              .where((b) => b.status == BookingStatus.confirmado || b.status == BookingStatus.concluido)
              .toList(),
          orElse: () => const <CoupleBooking>[],
        );
    final look = _look(context, ref);

    return IntrinsicHeight(
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Expanded(
            child: _SummaryTile(
              label: 'Orçamento gasto',
              value: budget == null ? '—' : euros(budget.spent),
              detail: budget == null || budget.total == 0 ? 'Orçamento por definir' : 'de ${euros(budget.total)}',
              color: look.tint,
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: _SummaryTile(
              label: 'Parceiros reservados',
              // Um parceiro com várias reservas conta uma vez.
              value: '${confirmed.map((b) => b.partnerName).toSet().length}',
              detail: confirmed.isEmpty
                  ? 'Nenhum ainda'
                  : confirmed.map((b) => b.partnerName).toSet().join(', '),
              color: look.comp,
            ),
          ),
        ],
      ),
    );
  }
}

class _SummaryTile extends StatelessWidget {
  final String label;
  final String value;
  final String detail;
  final Color color;

  const _SummaryTile({
    required this.label,
    required this.value,
    required this.detail,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: color, borderRadius: BorderRadius.circular(20), boxShadow: _softShadow),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: const TextStyle(color: AppTheme.inkMuted, fontSize: 12)),
          const SizedBox(height: 4),
          Text(value, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 17, color: AppTheme.ink)),
          const SizedBox(height: 4),
          Text(
            detail,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: const TextStyle(color: AppTheme.inkMuted, fontSize: 12),
          ),
        ],
      ),
    );
  }
}

/// Despesas não pagas com prazo próximo — "Pagamentos próximos" no
/// estilo do Orçamento (canvas 2026-10-18): um cartão rosa por
/// pagamento, com a data num quadrado branco inclinado.
class _UpcomingPaymentsCard extends ConsumerWidget {
  const _UpcomingPaymentsCard();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final pending = ref.watch(expenseControllerProvider).pending;
    // Também os sinais/restantes das reservas, com o valor que o casal paga
    // (com comissão), e um toque abre logo o pagamento — 2026-10-19.
    final pct = ref.watch(platformCommissionPercentageProvider).value ?? 0;
    final bookings = ref.watch(coupleBookingsProvider).asData?.value ?? const <CoupleBooking>[];
    final bookingDue = <(Expense, String)>[
      for (final b in bookings.where((b) => b.status != BookingStatus.recusado)) ...[
        if (b.pendingDepositPaymentId != null)
          (
            Expense(
              id: 'booking:${b.id}:deposit',
              weddingId: b.weddingId,
              title: 'Sinal · ${b.partnerName}',
              amount: amountWithCommission(b.depositAmount ?? 0, pct),
              dueDate: b.pendingDepositDueAt ?? DateTime.now(),
            ),
            b.pendingDepositPaymentId!,
          ),
        if (b.pendingFinalPaymentId != null)
          (
            Expense(
              id: 'booking:${b.id}:final',
              weddingId: b.weddingId,
              title: 'Restante · ${b.partnerName}',
              amount: amountWithCommission(b.finalPaymentAmount ?? 0, pct),
              dueDate: b.serviceDate,
            ),
            b.pendingFinalPaymentId!,
          ),
      ],
    ];
    final payIds = {for (final (e, id) in bookingDue) e.id: id};
    final withDueDate = [
      ...pending.where((e) => e.dueDate != null),
      for (final (e, _) in bookingDue) e,
    ]..sort((a, b) => a.dueDate!.compareTo(b.dueDate!));
    final soon = withDueDate.take(3).toList();
    final look = _look(context, ref);

    if (soon.isEmpty) return const SizedBox.shrink();

    return Padding(
      padding: const EdgeInsets.only(top: 8),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              const Text('Pagamentos próximos', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const Spacer(),
              SnappyTap(
                onTap: () => context.push('/budget'),
                child: Text(
                  'Ver todos',
                  style: TextStyle(color: look.accent, fontWeight: FontWeight.w700, fontSize: AppFontSize.md),
                ),
              ),
            ],
          ),
          const SizedBox(height: 12),
          for (final (i, expense) in soon.indexed) ...[
            if (i > 0) const SizedBox(height: 10),
            SnappyTap(
              onTap: () => payIds[expense.id] != null
                  ? openPaymentFlow(context, ref, payIds[expense.id]!)
                  : context.push('/budget'),
              child: Container(
                padding: const EdgeInsets.all(14),
                decoration: BoxDecoration(
                  color: const Color(0xFFF6E3DF),
                  borderRadius: BorderRadius.circular(20),
                  boxShadow: _softShadow,
                ),
                child: Row(
                  children: [
                    DateSticker(date: expense.dueDate!, turns: StickerIcon.tilt(i)),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(expense.title, maxLines: 1, overflow: TextOverflow.ellipsis,
                              style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          const SizedBox(height: 2),
                          const Text('Pendente · toca para pagar', style: TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                        ],
                      ),
                    ),
                    const SizedBox(width: 8),
                    Text(euros(expense.amount, cents: payIds.containsKey(expense.id)),
                        style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ],
                ),
              ),
            ),
          ],
        ],
      ),
    );
  }
}

/// Reservas do casal (parceiros contratados).
class _BookingsSection extends ConsumerWidget {
  const _BookingsSection();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final bookingsAsync = ref.watch(coupleBookingsProvider);
    final look = _look(context, ref);

    // Canvas "Menu · Casamento": título como "Próximas tarefas", "Ver
    // todas" na cor do evento e um cartão branco com cada parceiro
    // (logótipo ou iniciais, nome, categoria e valor).
    return bookingsAsync.when(
      loading: () => const SizedBox.shrink(),
      error: (err, st) => const SizedBox.shrink(),
      data: (bookings) {
        if (bookings.isEmpty) return const SizedBox.shrink();
        return Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Row(
              children: [
                const Text('Reservas', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const Spacer(),
                SnappyTap(
                  onTap: () => context.push('/bookings'),
                  child: Text(
                    'Ver todas',
                    style: TextStyle(color: look.accent, fontWeight: FontWeight.w700, fontSize: AppFontSize.md),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 12),
            SnappyTap(
              onTap: () => context.push('/bookings'),
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 6),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(20),
                  boxShadow: _softShadow,
                ),
                child: Column(
                  children: [
                    for (final (i, booking) in bookings.indexed)
                      Container(
                        padding: const EdgeInsets.symmetric(vertical: 12),
                        decoration: BoxDecoration(
                          border: i == 0 ? null : const Border(top: BorderSide(color: Color(0xFFF0ECE4))),
                        ),
                        child: Row(
                          children: [
                            StickerIcon(_categoryIcon(booking.category), color: look.accent, turns: StickerIcon.tilt(i)),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                children: [
                                  Text(booking.partnerName, maxLines: 1, overflow: TextOverflow.ellipsis,
                                      style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                  if (booking.category?.isNotEmpty == true)
                                    Text(booking.category!, maxLines: 1, overflow: TextOverflow.ellipsis,
                                        style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                                ],
                              ),
                            ),
                            Text(
                              euros(booking.amount),
                              style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted),
                            ),
                          ],
                        ),
                      ),
                  ],
                ),
              ),
            ),
          ],
        );
      },
    );
  }

  /// Ícone por categoria do parceiro (canvas: casa, máquina, nota…).
  static IconData _categoryIcon(String? category) {
    final c = category?.toLowerCase() ?? '';
    if (c.contains('foto') || c.contains('víde')) return Icons.photo_camera_outlined;
    if (c.contains('músic') || c.contains('dj')) return Icons.music_note_outlined;
    if (c.contains('som') || c.contains('luz')) return Icons.mic_none_outlined;
    if (c.contains('flor') || c.contains('decor')) return Icons.local_florist_outlined;
    if (c.contains('bolo') || c.contains('doce') || c.contains('pastel')) return Icons.cake_outlined;
    if (c.contains('cater') || c.contains('jantar') || c.contains('bebida') || c.contains('bar')) return Icons.wine_bar_outlined;
    if (c.contains('espaç') || c.contains('quinta') || c.contains('venue')) return Icons.home_outlined;
    if (c.contains('aloj') || c.contains('hotel')) return Icons.hotel_outlined;
    if (c.contains('transp')) return Icons.directions_bus_outlined;
    return Icons.auto_awesome_outlined;
  }
}

/// Estado "a carregar" do separador Casamento (canvas): a forma do cartão
/// do casal e dos quadrados, a pulsar, com a navbar já no sítio.
class _WeddingSkeleton extends StatelessWidget {
  const _WeddingSkeleton();

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        SafeArea(
          bottom: false,
          child: ListView(
            physics: const NeverScrollableScrollPhysics(),
            padding: const EdgeInsets.fromLTRB(
              AppTheme.screenMargin,
              16,
              AppTheme.screenMargin,
              140,
            ),
            children: [
              SkeletonBox(
                height: 380,
                radius: AppRadius.xxl,
                color: AppTheme.accentTint,
              ),
              const SizedBox(height: 16),
              for (var row = 0; row < 2; row++) ...[
                const Row(
                  children: [
                    Expanded(child: SkeletonBox(height: 104)),
                    SizedBox(width: 12),
                    Expanded(child: SkeletonBox(height: 104)),
                  ],
                ),
                const SizedBox(height: 12),
              ],
            ],
          ),
        ),
        const Positioned(
          left: 0,
          right: 0,
          bottom: 0,
          child: FloatingBottomNav(current: AppTab.wedding),
        ),
      ],
    );
  }
}

// ---------------------------------------------------------------------
// Estilos alternativos do menu (098, pedido 2026-10-17): Autocolantes,
// Polaroid Mural e Polaroid Estendal, do canvas. Usam os mesmos atalhos
// ([_shortcuts]) e a mesma cor ([_lookProvider]) que o clássico.
// ---------------------------------------------------------------------

Future<void> _pickBannerFrom(BuildContext context, WidgetRef ref) async {
  final picker = ImagePicker();
  final file = await picker.pickImage(source: ImageSource.gallery, imageQuality: 85);
  if (file == null || !context.mounted) return;
  final raw = await file.readAsBytes();
  if (!context.mounted) return;
  final adjusted = await showPhotoAdjustScreen(context, imageBytes: raw);
  if (adjusted == null || !context.mounted) return;
  try {
    await ref.read(weddingControllerProvider.notifier).uploadBannerBytes(adjusted);
  } catch (_) {
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível carregar a foto.')));
    }
  }
}

int? _daysLeft(Wedding w) {
  final d = w.weddingDate;
  if (d == null) return null;
  final n = d.difference(DateTime.now()).inDays;
  return n < 0 ? 0 : n;
}

String _eventNoun(Wedding w) => w.eventType == EventType.wedding ? 'o casamento' : 'o ${w.eventType.noun}';

/// Foto de capa (ou espaço para a pôr), usada dentro das polaroids.
class _CoverPhoto extends ConsumerWidget {
  final Wedding wedding;
  final double height;
  final double radius;
  const _CoverPhoto({required this.wedding, required this.height, this.radius = 3});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final look = _look(context, ref);
    final url = wedding.coverPhotoUrlCacheBusted;
    return SnappyTap(
      onTap: () => _pickBannerFrom(context, ref),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(radius),
        child: SizedBox(
          height: height,
          width: double.infinity,
          child: url != null
              ? Image.network(url, fit: BoxFit.cover, errorBuilder: (c, e, s) => Container(color: look.tint))
              : Container(
                  color: look.tint,
                  alignment: Alignment.center,
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Icons.add_photo_alternate_outlined, size: 28, color: look.accent),
                      const SizedBox(height: 4),
                      Text('Adicionar ${EventDecor.of(wedding.eventType).coverHint}', textAlign: TextAlign.center, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: look.accent)),
                    ],
                  ),
                ),
        ),
      ),
    );
  }
}

/// Moldura branca de polaroid, com sombra e inclinação.
class _Polaroid extends StatelessWidget {
  final double width;
  final double angle;
  final Widget child;
  final EdgeInsets padding;
  const _Polaroid({required this.width, required this.angle, required this.child, this.padding = const EdgeInsets.fromLTRB(10, 10, 10, 14)});

  @override
  Widget build(BuildContext context) {
    return Transform.rotate(
      angle: angle,
      child: Container(
        width: width,
        padding: padding,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(4),
          boxShadow: const [BoxShadow(color: Color(0x26171713), blurRadius: 26, offset: Offset(0, 10))],
        ),
        child: child,
      ),
    );
  }
}

Widget _namesAndDate(Wedding w, _Look look, {double size = 20}) => Column(
      mainAxisSize: MainAxisSize.min,
      children: [
        Text(
          w.displayNames,
          textAlign: TextAlign.center,
          maxLines: 2,
          style: TextStyle(fontSize: size, height: 1.2, fontWeight: FontWeight.w700, fontStyle: FontStyle.italic, color: look.accent),
        ),
        const SizedBox(height: 4),
        Text(
          [if (w.weddingDate != null) formatWeddingDateCaps(w.weddingDate!), if (w.location?.isNotEmpty == true) w.location!].join(' · '),
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted),
        ),
      ],
    );

Widget _roundSticker(IconData icon, Color bg, Color fg, double angle) => Transform.rotate(
      angle: angle,
      child: Container(
        width: 54,
        height: 54,
        decoration: BoxDecoration(
          color: bg,
          shape: BoxShape.circle,
          border: Border.all(color: Colors.white, width: 3),
          boxShadow: const [BoxShadow(color: Color(0x1F171713), blurRadius: 14, offset: Offset(0, 6))],
        ),
        child: Icon(icon, size: 26, color: fg),
      ),
    );

// ---------- Autocolantes ----------
class _StickersTop extends ConsumerWidget {
  final Wedding wedding;
  const _StickersTop({required this.wedding});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final look = _look(context, ref);
    final items = _shortcuts(ref);
    final days = _daysLeft(wedding);
    final first = wedding.partnerName1.trim().split(' ').first;
    const tilts = [-8.0, 6.0, -4.0, 8.0, -6.0, 4.0];
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text('Olá, $first!', style: const TextStyle(fontSize: 30, height: 1.2, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 6),
        if (days != null)
          Wrap(
            crossAxisAlignment: WrapCrossAlignment.center,
            children: [
              const Text('Faltam ', style: TextStyle(fontSize: 16, color: AppTheme.inkMuted)),
              Transform.rotate(
                angle: -0.05,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 2),
                  decoration: BoxDecoration(color: look.color, borderRadius: BorderRadius.circular(999)),
                  child: Text('$days ${days == 1 ? 'dia' : 'dias'}', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: look.on)),
                ),
              ),
              Text(' para ${_eventNoun(wedding)}', style: const TextStyle(fontSize: 16, color: AppTheme.inkMuted)),
            ],
          ),
        const SizedBox(height: 10),
        SizedBox(
          height: 320,
          child: Stack(
            clipBehavior: Clip.none,
            children: [
              Positioned(
                top: 22,
                left: 0,
                right: 0,
                child: Center(
                  child: _Polaroid(
                    width: 250,
                    angle: -0.05,
                    child: Column(
                      mainAxisSize: MainAxisSize.min,
                      children: [
                        _CoverPhoto(wedding: wedding, height: 190),
                        const SizedBox(height: 10),
                        _namesAndDate(wedding, look),
                      ],
                    ),
                  ),
                ),
              ),
              Positioned(left: 8, top: 8, child: _roundSticker(look.doodles[0], look.color, look.on, -0.24)),
              Positioned(right: 10, top: 40, child: _roundSticker(look.doodles[2], look.comp, look.accent, 0.21)),
              Positioned(right: 34, bottom: 6, child: _roundSticker(look.doodles[4], look.tint, look.accent, -0.1)),
            ],
          ),
        ),
        const SizedBox(height: 14),
        _Grid(
          columns: 3,
          rowGap: 18,
          columnGap: 10,
          aspectRatio: 0.82,
          children: [
            for (final (i, it) in items.indexed)
              SnappyTap(
                onTap: () => context.push(it.route),
                child: Column(
                  children: [
                    Transform.rotate(
                      angle: tilts[i % tilts.length] * 3.14159 / 180,
                      child: Container(
                        width: 78,
                        height: 78,
                        decoration: BoxDecoration(
                          color: i.isEven ? look.tint : look.comp,
                          borderRadius: BorderRadius.circular(26),
                          boxShadow: _softShadow,
                        ),
                        child: Icon(it.icon, size: 32, color: look.accent),
                      ),
                    ),
                    const SizedBox(height: 8),
                    Text(
                      it.label,
                      textAlign: TextAlign.center,
                      maxLines: 2,
                      style: const TextStyle(fontSize: 13, height: 1.2, fontWeight: FontWeight.w700, color: AppTheme.ink),
                    ),
                  ],
                ),
              ),
          ],
        ),
      ],
    );
  }
}

// ---------- Polaroid Mural ----------
class _MuralTop extends ConsumerWidget {
  final Wedding wedding;
  const _MuralTop({required this.wedding});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final look = _look(context, ref);
    final items = _shortcuts(ref);
    final days = _daysLeft(wedding);
    final first = wedding.partnerName1.trim().split(' ').first;
    const tilts = [-3.0, 2.5, 2.0, -2.5, -2.0, 3.0];
    Widget tape(Color c, double angle) => Transform.rotate(
          angle: angle,
          child: Container(width: 78, height: 24, decoration: BoxDecoration(color: c.withValues(alpha: 0.55), borderRadius: BorderRadius.circular(3))),
        );
    Widget backPhoto(IconData icon, Color bg, double angle) => _Polaroid(
          width: 190,
          angle: angle,
          padding: const EdgeInsets.fromLTRB(9, 9, 9, 40),
          child: Container(height: 170, color: bg, alignment: Alignment.center, child: Icon(icon, size: 40, color: look.accent)),
        );
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text('Olá, $first!', style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
                  const Text('O nosso mural', style: TextStyle(fontSize: 26, height: 1.2, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ],
              ),
            ),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(999), boxShadow: _softShadow),
              child: Row(
                mainAxisSize: MainAxisSize.min,
                children: [
                  Icon(look.motif, size: 14, color: look.accent),
                  const SizedBox(width: 6),
                  Text(wedding.eventType.label, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: look.accent)),
                ],
              ),
            ),
          ],
        ),
        SizedBox(
          height: 360,
          child: Stack(
            clipBehavior: Clip.none,
            alignment: Alignment.topCenter,
            children: [
              Positioned(left: 0, top: 44, child: backPhoto(look.doodles[0], look.comp, -0.16)),
              Positioned(right: 0, top: 34, child: backPhoto(look.doodles[2], look.tint, 0.14)),
              Positioned(
                top: 24,
                child: _Polaroid(
                  width: 246,
                  angle: -0.035,
                  padding: const EdgeInsets.fromLTRB(11, 11, 11, 16),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      _CoverPhoto(wedding: wedding, height: 210, radius: 2),
                      const SizedBox(height: 10),
                      _namesAndDate(wedding, look, size: 22),
                    ],
                  ),
                ),
              ),
              Positioned(top: 12, child: tape(look.color, -0.07)),
              if (days != null)
                Positioned(
                  right: 14,
                  top: 262,
                  child: Transform.rotate(
                    angle: 0.21,
                    child: Container(
                      width: 84,
                      height: 84,
                      decoration: BoxDecoration(
                        color: look.color,
                        shape: BoxShape.circle,
                        border: Border.all(color: Colors.white, width: 4),
                      ),
                      child: Column(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: [
                          Text('FALTAM', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, letterSpacing: 1, color: look.on)),
                          Text('$days', style: TextStyle(fontSize: 24, height: 1.1, fontWeight: FontWeight.w700, color: look.on)),
                          Text(days == 1 ? 'DIA' : 'DIAS', style: TextStyle(fontSize: 10, fontWeight: FontWeight.w700, letterSpacing: 1, color: look.on)),
                        ],
                      ),
                    ),
                  ),
                ),
            ],
          ),
        ),
        const SizedBox(height: 10),
        _Grid(
          columns: 2,
          rowGap: 22,
          columnGap: 18,
          aspectRatio: 0.98,
          children: [
            for (final (i, it) in items.indexed)
              SnappyTap(
                onTap: () => context.push(it.route),
                child: Stack(
                  alignment: Alignment.topCenter,
                  children: [
                    Transform.rotate(
                      angle: tilts[i % tilts.length] * 3.14159 / 180,
                      child: Container(
                        padding: const EdgeInsets.fromLTRB(8, 8, 8, 10),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(4),
                          boxShadow: const [BoxShadow(color: Color(0x1F171713), blurRadius: 16, offset: Offset(0, 6))],
                        ),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Expanded(
                              child: Container(
                                width: double.infinity,
                                color: i.isEven ? look.tint : look.comp,
                                alignment: Alignment.center,
                                child: Icon(it.icon, size: 34, color: look.accent),
                              ),
                            ),
                            const SizedBox(height: 8),
                            Text(it.label, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                            Text(it.subtitle, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 11, color: AppTheme.inkMuted)),
                          ],
                        ),
                      ),
                    ),
                    // Pionés.
                    Positioned(
                      top: -6,
                      child: Container(
                        width: 14,
                        height: 14,
                        decoration: BoxDecoration(
                          color: look.accent,
                          shape: BoxShape.circle,
                          boxShadow: const [BoxShadow(color: Color(0x4D171713), blurRadius: 3, offset: Offset(0, 2))],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
          ],
        ),
      ],
    );
  }
}

// ---------- Polaroid Estendal ----------
class _ClotheslineTop extends ConsumerWidget {
  final Wedding wedding;
  const _ClotheslineTop({required this.wedding});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final look = _look(context, ref);
    final items = _shortcuts(ref);
    Widget peg() => Container(
          width: 12,
          height: 26,
          decoration: BoxDecoration(
            color: const Color(0xFFC9A77C),
            borderRadius: BorderRadius.circular(3),
            border: Border.all(color: const Color(0x26171713)),
          ),
        );
    Widget sidePhoto(IconData icon, Color bg, double angle) => _Polaroid(
          width: 130,
          angle: angle,
          padding: const EdgeInsets.fromLTRB(7, 7, 7, 22),
          child: Container(height: 110, color: bg, alignment: Alignment.center, child: Icon(icon, size: 30, color: look.accent)),
        );
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Row(
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    EventDecor.of(wedding.eventType).kicker.toUpperCase(),
                    style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1.4, color: look.accent),
                  ),
                  Text(
                    wedding.displayNames,
                    maxLines: 2,
                    style: const TextStyle(fontSize: 26, height: 1.2, fontWeight: FontWeight.w700, fontStyle: FontStyle.italic, color: AppTheme.ink),
                  ),
                ],
              ),
            ),
            Container(
              width: 44,
              height: 44,
              decoration: BoxDecoration(color: look.tint, shape: BoxShape.circle),
              child: Icon(look.motif, size: 22, color: look.accent),
            ),
          ],
        ),
        const SizedBox(height: 6),
        SizedBox(
          height: 340,
          child: Stack(
            clipBehavior: Clip.none,
            alignment: Alignment.topCenter,
            children: [
              Positioned.fill(child: CustomPaint(painter: _LinePainter())),
              Positioned(left: -46, top: 28, child: Column(children: [peg(), Transform.translate(offset: const Offset(0, -8), child: sidePhoto(look.doodles[0], look.comp, -0.12))])),
              Positioned(right: -46, top: 28, child: Column(children: [peg(), Transform.translate(offset: const Offset(0, -8), child: sidePhoto(look.doodles[2], look.tint, 0.12))])),
              Positioned(
                top: 34,
                child: Column(
                  children: [
                    peg(),
                    Transform.translate(
                      offset: const Offset(0, -8),
                      child: _Polaroid(
                        width: 236,
                        angle: 0.035,
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            _CoverPhoto(wedding: wedding, height: 200, radius: 2),
                            const SizedBox(height: 8),
                            Text(look.tagline, textAlign: TextAlign.center, style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, fontStyle: FontStyle.italic, color: look.accent)),
                            const SizedBox(height: 2),
                            Text(
                              wedding.weddingDate == null ? 'Data por definir' : formatWeddingDateCaps(wedding.weddingDate!),
                              textAlign: TextAlign.center,
                              style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted),
                            ),
                          ],
                        ),
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ),
        ),
        RepaintBoundary(child: _FilmStrip(date: wedding.weddingDate)),
        const SizedBox(height: 30),
        _Grid(
          columns: 2,
          rowGap: 28,
          columnGap: 14,
          aspectRatio: 1.0,
          children: [
            for (final (i, it) in items.indexed)
              SnappyTap(
                onTap: () => context.push(it.route),
                child: Stack(
                  alignment: Alignment.topCenter,
                  children: [
                    Container(
                      padding: const EdgeInsets.fromLTRB(8, 8, 8, 10),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(4),
                        border: Border.all(color: const Color(0xFFECE7DC)),
                        boxShadow: _softShadow,
                      ),
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Expanded(
                            child: Container(
                              width: double.infinity,
                              color: i.isEven ? look.tint : look.comp,
                              alignment: Alignment.center,
                              child: Icon(it.icon, size: 30, color: look.accent),
                            ),
                          ),
                          const SizedBox(height: 8),
                          Text(it.label, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          Text(it.subtitle, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 11, color: AppTheme.inkMuted)),
                        ],
                      ),
                    ),
                    Positioned(top: -14, child: peg()),
                  ],
                ),
              ),
          ],
        ),
      ],
    );
  }
}

/// Fio do estendal.
class _LinePainter extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFF8F8B84)
      ..strokeWidth = 1.5
      ..style = PaintingStyle.stroke;
    final path = Path()
      ..moveTo(-60, 14)
      ..quadraticBezierTo(size.width / 2, 64, size.width + 60, 14);
    canvas.drawPath(path, paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}

/// Contagem decrescente numa tira de rolo fotográfico.
class _FilmStrip extends StatefulWidget {
  final DateTime? date;
  const _FilmStrip({required this.date});

  @override
  State<_FilmStrip> createState() => _FilmStripState();
}

class _FilmStripState extends State<_FilmStrip> {
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (mounted) setState(() {});
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final date = widget.date;
    if (date == null) return const SizedBox.shrink();
    var left = date.difference(DateTime.now());
    if (left.isNegative) left = Duration.zero;
    final cells = [
      ('${left.inDays}', 'DIAS'),
      ((left.inHours % 24).toString().padLeft(2, '0'), 'HORAS'),
      ((left.inMinutes % 60).toString().padLeft(2, '0'), 'MIN'),
      ((left.inSeconds % 60).toString().padLeft(2, '0'), 'SEG'),
    ];
    Widget holes() => Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            for (var i = 0; i < 14; i++)
              Container(width: 10, height: 6, decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.85), borderRadius: BorderRadius.circular(2))),
          ],
        );
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 8),
      decoration: BoxDecoration(color: const Color(0xFF171713), borderRadius: BorderRadius.circular(6)),
      child: Column(
        children: [
          holes(),
          const SizedBox(height: 8),
          Row(
            children: [
              for (final (i, (v, l)) in cells.indexed) ...[
                if (i > 0) const SizedBox(width: 8),
                Expanded(
                  child: Container(
                    height: 56,
                    decoration: BoxDecoration(color: const Color(0xFF2A2A25), borderRadius: BorderRadius.circular(6)),
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(v, style: const TextStyle(fontSize: 20, height: 1.1, fontWeight: FontWeight.w700, color: Colors.white)),
                        Text(l, style: const TextStyle(fontSize: 10, fontWeight: FontWeight.w700, letterSpacing: 1, color: Color(0xFFD9D6CF))),
                      ],
                    ),
                  ),
                ),
              ],
            ],
          ),
          const SizedBox(height: 8),
          holes(),
        ],
      ),
    );
  }
}


/// Grelha simples sem lista que desliza (pedido 2026-10-18: mais leve e
/// sem slivers, para a pré-visualização do modo de edição).
class _Grid extends StatelessWidget {
  final int columns;
  final double rowGap;
  final double columnGap;
  final double aspectRatio;
  final List<Widget> children;

  const _Grid({
    required this.columns,
    required this.rowGap,
    required this.columnGap,
    required this.aspectRatio,
    required this.children,
  });

  @override
  Widget build(BuildContext context) {
    final rows = <Widget>[];
    for (var r = 0; r * columns < children.length; r++) {
      if (r > 0) rows.add(SizedBox(height: rowGap));
      rows.add(Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          for (var c = 0; c < columns; c++) ...[
            if (c > 0) SizedBox(width: columnGap),
            Expanded(
              child: r * columns + c < children.length
                  ? AspectRatio(aspectRatio: aspectRatio, child: children[r * columns + c])
                  : const SizedBox.shrink(),
            ),
          ],
        ],
      ));
    }
    return Column(mainAxisSize: MainAxisSize.min, children: rows);
  }
}
