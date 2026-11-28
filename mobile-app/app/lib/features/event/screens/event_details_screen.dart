import '../../../core/chat/group_chat.dart' show openEventGroup, eventGroupUnreadProvider;
import '../../../shared/widgets/count_badge.dart' show WithCount;
import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:copo_dagua_app/shared/utils_clipboard.dart';
import 'dart:async';

import 'package:flutter/material.dart';
import '../../events/widgets/event_actions_sheet.dart';
import '../../settings/screens/settings_screen.dart' show EditEventPage, PanelPage;
import '../widgets/event_program_section.dart';
import '../widgets/organizer_suggestions.dart';
import '../widgets/fresh_event_panel.dart';
import '../../guest_home/widgets/guest_dashboard.dart' show DashSummary, DashNow, DashAllDone, DashTasksEmpty, DashPhotos, DashButton36, dashWhenAt;
import '../../../shared/widgets/page_kit.dart' show KitCaps, KitGroup, KitRow, KitTag, KitTagKind, LockedTopBar;
import '../../../core/events/event_pass.dart' show GuestSection, GuestSections, guestSectionsProvider;
import '../../../shared/text_case.dart';
import '../../../core/auth/auth_controller.dart';
import '../../../shared/widgets/alert_outline.dart';
import 'package:copo_dagua_app/shared/widgets/v2_kit.dart' show V2Avatar;
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/reduced_top_bar.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';

import '../../payments/booking_extras_sheet.dart' show payBookingFlow;
import '../../guest_home/widgets/choose_menu_sheet.dart' show chooseMenuAndPay;
import '../../../core/guest_home/event_tables.dart' show EventTable, myEventTablesProvider;
import '../../../core/budget/budget_controller.dart';
import '../../../core/home/home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/event/date_format_pt.dart';
import '../../../core/event/event_controller.dart';
import '../../../core/event/menu_style.dart';
import '../../../core/event/organizers.dart';
import '../../guests/screens/guests_list_screen.dart' show shareEventInvite;
import '../../../shared/widgets/scroll_aware_back_button.dart';
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
import '../../../core/events/events_providers.dart' show joinRequestsProvider, JoinRequest;
import '../../../shared/widgets/island_sheet.dart';
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';
import '../../../core/partners/promotions.dart' show featuredForMeProvider, FeaturedPick, trackPromotionClick;
import '../../../core/partners/partner_providers.dart' show partnerByIdProvider;
import '../../partners/screens/partner_detail_screen.dart' show PartnerDetailScreen;
import '../../partners/widgets/partner_cards.dart' show PartnerCarousel;
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';
import '../../../shared/leave.dart';


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
  final type = ref.watch(eventControllerProvider.select((s) => s.event?.eventType)) ?? EventType.wedding;
  final c = ref.watch(currentMenuStyleProvider).color;
  final d = EventDecor.of(type);
  return _Look(color: c.color, on: c.on, accent: c.accent, tint: c.tint, comp: c.comp, tagline: d.tagline, motif: d.motif, doodles: d.doodles);
});

/// Sombra suave dos cartões (canvas, 2026-10-17).
const _softShadow = [
  BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6)),
];

/// "Os noivos" — cartão banner "O nosso casamento" (foto de capa +
/// contagem decrescente) e o resumo do dashboard (orçamento, atalhos,
/// suporte, pagamentos, reservas, próximas tarefas). Pedido explícito
/// do utilizador (2026-09-01): "trocas o conteúdo do home com o
/// conteúdo do os noivos, sem mexer no conteúdo" — este ecrã passou a
/// ter o conteúdo que antes vivia em `home_feed_screen.dart`
/// (`HomeFeedScreen`), sem nenhuma alteração ao próprio conteúdo.
class EventDetailsScreen extends ConsumerStatefulWidget {
  final bool startEditing;
  const EventDetailsScreen({super.key, this.startEditing = false});

  @override
  ConsumerState<EventDetailsScreen> createState() => _EventDetailsScreenState();
}

/// Toque longo na página (pedido 2026-10-18): a própria página encolhe,
/// como trocar o mostrador do Apple Watch, e ao deslizar passa pelos
/// estilos reais (com os dados do evento); por baixo, as cores.
class _EventDetailsScreenState extends ConsumerState<EventDetailsScreen> {
  bool _editing = false;
  bool _saving = false;
  int _layout = 0;
  int _color = 0;
  PageController? _layoutPager;
  PageController? _colorPager;
  // Controlador da lista do painel: a seta fixa de voltar/voltar-ao-topo
  // (DESIGN.md §6) lê o scroll e sobe ao topo por ele.
  final ScrollController _scroll = ScrollController();

  /// Secções do painel, para os atalhos do topo reduzido (pedido 2026-11-22).
  final Map<String, GlobalKey> _sectionKeys = {
    for (final k in const ['todo', 'program', 'numbers', 'bookings', 'invite', 'manage']) k: GlobalKey(),
  };

  @override
  void initState() {
    super.initState();
    if (widget.startEditing) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (mounted && ref.read(eventControllerProvider).event != null) _startEditing();
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
    if (mounted) {
      setState(() {
        _editing = false;
        _saving = false;
      });
    }
  }

  @override
  void dispose() {
    _layoutPager?.dispose();
    _colorPager?.dispose();
    _scroll.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final event = ref.watch(eventControllerProvider).event;
    final layout = ref.watch(currentMenuStyleProvider).layout;

    return GradientScaffold(
      // Fundo liso #F2F2F2, sem o degradê para branco (pedido 2026-11-22).
      gradientOverride: const LinearGradient(colors: [AppTheme.background, AppTheme.background]),
      body: event == null
          ? const _EventSkeleton()
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
                      child: _editor(context, event),
                    )
                  : _normal(context, event, layout),
            ),
    );
  }

  Widget _normal(BuildContext context, Event event, MenuLayout layout) {
    final hasCover = event.coverPhotoUrlCacheBusted != null;
    final topInset = MediaQuery.paddingOf(context).top;
    return Stack(
      key: const ValueKey('normal'),
      children: [
        // Sem SafeArea no topo: a capa do estilo Clássico vai até cima,
        // por trás das horas e da bateria (antes ficava uma faixa da cor
        // do fundo por cima da capa). Cada topo soma a margem ele próprio.
        SafeArea(
          top: false,
          bottom: false,
          child: GestureDetector(
            behavior: HitTestBehavior.translucent,
            onLongPress: _startEditing,
            // Sem o desvanecer branco em cima e em baixo (pedido 2026-11-22).
            child: _PageBody(event: event, layout: layout, controller: _scroll, sectionKeys: _sectionKeys),
          ),
        ),
        // Topo reduzido como nos parceiros (pedido 2026-11-22): a barra
        // branca com a capa, o nome e a data, e os atalhos para as secções.
        Positioned(
          left: 0,
          right: 0,
          top: 0,
          child: ReducedTopBar(
            scroll: _scroll,
            showAfter: layout == MenuLayout.classic ? 170 : 110,
            thumb: hasCover
                ? Image.network(event.coverPhotoUrlCacheBusted!, fit: BoxFit.cover,
                    errorBuilder: (context, error, stack) => V2Avatar(capFirst(event.displayNames), size: 32), frameBuilder: skeletonImageFrame)
                : V2Avatar(capFirst(event.displayNames), size: 32),
            // A capa escurecida por trás da barra (pedido 2026-11-23).
            background: hasCover
                ? Image.network(event.coverPhotoUrlCacheBusted!, fit: BoxFit.cover,
                    errorBuilder: (context, error, stack) => const ColoredBox(color: Color(0xFF3A3733)), frameBuilder: skeletonImageFrame)
                : const ColoredBox(color: Color(0xFF3A3733)),
            title: capFirst(event.displayNames),
            meta: [
              event.eventType.label,
              if (event.eventDate != null) formatShortDatePt(event.eventDate!),
            ].join(' · '),
            actions: [
              ReducedTopAction(Hi.chatBubbleOvalLeft,
                  label: 'Grupo do evento',
                  onTap: () => _openEventGroup(context, ref, event.id),
                  count: ref.watch(eventGroupUnreadProvider(event.id)).value ?? 0),
              ReducedTopAction(Hi.arrowUpOnSquare, label: 'Partilhar o convite', onTap: () => shareEventInvite(context, event)),
              ReducedTopAction(Hi.ellipsisHorizontal, label: 'Mais opções', onTap: () => showEventActionsSheet(context, ref,
                  eventId: event.id,
                  name: capFirst(event.displayNames),
                  isOwner: event.ownerId == ref.read(authControllerProvider).profile?.id)),
            ],
            sections: [
              ('Para fazer', _sectionKeys['todo']!),
              ('Programa', _sectionKeys['program']!),
              ('Números', _sectionKeys['numbers']!),
              ('Reservas', _sectionKeys['bookings']!),
              ('Convite', _sectionKeys['invite']!),
              ('Gerir', _sectionKeys['manage']!),
            ],
          ),
        ),
        // Seta fixa de voltar: nos eventos é sempre «voltar», não roda para ↑
        // (como nos parceiros, pedido 2026-11-22).
        Positioned(
          left: 16,
          top: topInset + 12,
          child: ScrollAwareBackButton(
            controller: _scroll,
            onBack: () => leave(context),
            backLabel: 'Voltar a Eventos',
            imageExtent: layout == MenuLayout.classic && hasCover ? 174 : 0,
            rotate: false,
          ),
        ),
        const Positioned(
          left: 0,
          right: 0,
          bottom: 0,
          child: FloatingBottomNav(current: AppTab.event),
        ),
      ],
    );
  }

  Widget _editor(BuildContext context, Event event) {
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
                PressScale(child: IconButton(
                  tooltip: 'Cancelar',
                  onPressed: () => _finish(save: false),
                  style: IconButton.styleFrom(backgroundColor: AppTheme.surface, fixedSize: const Size(44, 44)),
                  icon: const Icon(Hi.xMark, color: AppTheme.ink),
                )),
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
                PressScale(child: IconButton(
                  tooltip: 'Guardar',
                  onPressed: _saving ? null : () => _finish(save: true),
                  style: IconButton.styleFrom(
                    backgroundColor: color.color,
                    disabledBackgroundColor: color.color.withValues(alpha: 0.5),
                    fixedSize: const Size(44, 44),
                  ),
                  icon: _saving
                      ? SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2.2, color: color.on))
                      : Icon(Hi.check, color: color.on),
                )),
              ],
            ),
          ),
          const SizedBox(height: 6),
          Expanded(
            child: PageView.builder(
              controller: _layoutPager,
              // Sem cortar: a página ao lado (e o contorno) aparecem
              // inteiros nas margens em vez de terminarem num risco.
              clipBehavior: Clip.none,
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
                  return Transform.scale(scale: 1 - d * 0.08, child: Opacity(opacity: 1 - d * 0.45, child: child));
                },
                // A página real, encolhida e sem toques (só se desliza).
                // Sem sombra (2026-10-31: ficava cortada e suja nas
                // margens): só um contorno fino, como um ecrã de telemóvel.
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 10),
                  child: ClipRRect(
                    borderRadius: BorderRadius.circular(30),
                    child: DecoratedBox(
                      // O mesmo fundo da página do evento.
                      decoration: const BoxDecoration(gradient: AppGradients.feed),
                      position: DecorationPosition.background,
                      child: DecoratedBox(
                        decoration: BoxDecoration(
                          borderRadius: BorderRadius.circular(30),
                          border: Border.all(color: i == _layout ? color.accent.withValues(alpha: 0.55) : AppTheme.borderMuted, width: i == _layout ? 2 : 1),
                        ),
                        position: DecorationPosition.foreground,
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
                                  child: _PageBody(event: event, layout: MenuLayout.values[i], scrollable: false),
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
                      // Sem sombras (2026-10-31): a escolhida tem um anel na
                      // cor de destaque, as outras um contorno fino.
                      child: AnimatedContainer(
                        duration: const Duration(milliseconds: 200),
                        curve: Curves.easeOutBack,
                        width: selected ? 58 : 40,
                        height: selected ? 58 : 40,
                        padding: EdgeInsets.all(selected ? 4 : 0),
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          border: Border.all(color: selected ? c.accent : AppTheme.borderMuted, width: selected ? 2.5 : 1),
                        ),
                        child: DecoratedBox(
                          decoration: BoxDecoration(color: c.color, shape: BoxShape.circle),
                          child: selected ? Center(child: Icon(Hi.check, color: c.on, size: 22)) : null,
                        ),
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
  final type = ref.watch(eventControllerProvider.select((s) => s.event?.eventType)) ?? EventType.wedding;
  final c = preview.style.color;
  final d = EventDecor.of(type);
  return _Look(color: c.color, on: c.on, accent: c.accent, tint: c.tint, comp: c.comp, tagline: d.tagline, motif: d.motif, doodles: d.doodles);
}

/// Um evento «acabado de criar»: tudo já carregado e sem convidados, sem
/// pedidos para entrar, sem reservas nem propostas (as recusadas não
/// contam), e ainda não passou nem é hoje. Enquanto alguma coisa carrega,
/// fica o painel de sempre.
bool _isFreshEvent(WidgetRef ref, Event event) {
  final eventDate = event.eventDate;
  if (eventDate != null) {
    final now = DateTime.now();
    final days = DateTime(eventDate.year, eventDate.month, eventDate.day).difference(DateTime(now.year, now.month, now.day)).inDays;
    if (days <= 0) return false;
  }
  final guests = ref.watch(guestsControllerProvider);
  if (guests.loading || guests.guests.isNotEmpty) return false;
  final bookings = ref.watch(coupleBookingsProvider).value;
  if (bookings == null) return false;
  if (bookings.any((b) => b.eventId == event.id && b.status != BookingStatus.recusado)) return false;
  final proposals = ref.watch(pendingProposalsProvider).value;
  if (proposals == null || proposals.any((p) => p.eventId == event.id)) return false;
  final requests = ref.watch(joinRequestsProvider(event.id)).value;
  if (requests == null || requests.isNotEmpty) return false;
  return true;
}

/// O conteúdo da página do evento num estilo.
class _PageBody extends ConsumerWidget {
  final Event event;
  final MenuLayout layout;
  final bool scrollable;
  final ScrollController? controller;
  final Map<String, GlobalKey>? sectionKeys;
  const _PageBody({required this.event, required this.layout, this.scrollable = true, this.controller, this.sectionKeys});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Painel do evento (canvas "Painel do evento", 2026-11-11): topo,
    // próximos passos, números, convite, sugestões, reservas e gerir.
    // O estilo "Clássico" usa o topo minimalista; os outros mantêm o seu.
    final classic = layout == MenuLayout.classic;
    // Evento acabado de criar (mockup «Criar evento 3», 2026-11-27): só o
    // que falta, uma ação de cada vez, até haver convidados ou reservas.
    if (_isFreshEvent(ref, event)) {
      final fresh = FreshEventPanel(
        event: event,
        onCover: () => _pickCoverPhoto(context, ref),
        onShare: () => shareEventInvite(context, event),
        onMore: () => showEventActionsSheet(context, ref,
            eventId: event.id,
            name: capFirst(event.displayNames),
            isOwner: event.ownerId == ref.read(authControllerProvider).profile?.id),
      );
      const freshPadding = EdgeInsets.only(bottom: 140);
      if (!scrollable) return Padding(padding: freshPadding, child: fresh);
      return ListView(controller: controller, padding: freshPadding, children: [fresh]);
    }
    final children = <Widget>[
      if (classic)
        _MinimalTop(event: event)
      else
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
          child: switch (layout) {
            MenuLayout.stickers => _StickersTop(event: event),
            MenuLayout.mural => _MuralTop(event: event),
            _ => _ClotheslineTop(event: event),
          },
        ),
      // Painel novo (mockups «Painel do organizador», 2026-11-21): resumo,
      // para fazer, sugestões, programa, números, reservas, convite e gerir.
      // As tarefas pré-feitas («Próximos passos») e o carrossel de
      // sugestões de parceiros saíram.
      _OrgBody(event: event, sectionKeys: sectionKeys),
    ];
    final padding = EdgeInsets.fromLTRB(0, classic ? 0 : 40 + MediaQuery.paddingOf(context).top, 0, 140);
    if (!scrollable) {
      // Pré-visualização (modo de edição): sem lista que desliza.
      return Padding(
        padding: padding,
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: children),
      );
    }
    return ListView(controller: controller, padding: padding, children: children);
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
  final Event event;

  const _HeroCard({required this.event});

  @override
  ConsumerState<_HeroCard> createState() => _HeroCardState();
}

class _HeroCardState extends ConsumerState<_HeroCard> {
  bool _uploading = false;

  String get _dateLabel {
    final date = widget.event.eventDate;
    if (date == null) return 'DATA POR DEFINIR';
    return formatEventDateCaps(date);
  }

  Future<void> _pickBanner() async {
    final picker = ImagePicker();
    final file = await picker.pickImage(source: ImageSource.gallery);
    if (file == null || !mounted) return;
    final rawBytes = await file.readAsBytes();
    if (!mounted) return;
    final adjusted = await showPhotoAdjustScreen(context, imageBytes: rawBytes);
    if (adjusted == null || !mounted) return;
    setState(() => _uploading = true);
    try {
      await ref.read(eventControllerProvider.notifier).uploadBannerBytes(adjusted);
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
    final event = widget.event;
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
        boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
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
                            if (event.coverPhotoUrlCacheBusted != null)
                              SizedNetworkImage(
                                event.coverPhotoUrlCacheBusted!,
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
                                      Hi.photo,
                                      size: 30,
                                      color: look.accent,
                                    ),
                                    const SizedBox(height: 6),
                                    Text(
                                      'Adicionar ${EventDecor.of(event.eventType).coverHint}',
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
                          Hi.camera,
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
                          boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
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
                            EventDecor.of(event.eventType).kicker,
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
                            event.displayNames,
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
                    child: Icon(Hi.heart, size: 12, color: look.on),
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
              if (event.location != null) ...[
                const SizedBox(height: 2),
                Text(
                  event.location!.toUpperCase(),
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
              RepaintBoundary(child: _CountdownRow(eventDate: event.eventDate, color: look.accent, on: look.on)),
            ],
          ),
        ],
      ),
    );
  }
}

class _CountdownRow extends StatefulWidget {
  final DateTime? eventDate;
  final Color color;
  final Color on;

  const _CountdownRow({required this.eventDate, required this.color, required this.on});

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
  Widget build(BuildContext context) =>
      // Atualiza a cada segundo: só esta parte volta a pintar.
      RepaintBoundary(child: _build(context));

  Widget _build(BuildContext context) {
    final date = widget.eventDate;
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
  final eventId = ref.watch(eventControllerProvider.select((s) => s.event?.id));
  final photos = eventId == null
      ? const <GalleryPhoto>[]
      : ref.watch(eventGalleryPhotosProvider(eventId)).asData?.value ?? const <GalleryPhoto>[];
  final handled = ref.watch(_servicesHandledProvider).asData?.value;
  final confirmed = guests.where((g) => g.rsvpStatus == RsvpStatus.confirmed).length;
  final seated = tables.fold<int>(0, (n, t) => n + t.guestIds.length);
  final pending = photos.where((p) => p.status == 'pending').length;
  final approved = photos.where((p) => p.status == 'approved').length;
  String plural(int n, String one, String many) => n == 1 ? one : many;
  final decor = EventDecor.of(ref.watch(eventControllerProvider.select((s) => s.event?.eventType)) ?? EventType.wedding);
  return [
    _Shortcut(Hi.banknotes, 'Orçamento',
        budget == null || budget.total == 0 ? 'Por definir' : '${euros(budget.spent)} de ${euros(budget.total)}', '/budget'),
    _Shortcut(Hi.users, 'Convidados',
        guests.isEmpty ? 'Ainda sem convidados' : '$confirmed ${plural(confirmed, 'confirmado', 'confirmados')} de ${guests.length}', '/guests'),
    _Shortcut(Hi.ticket, 'Lugares', guests.isEmpty || seated == 0 ? decor.seatingEmpty : '$seated de ${guests.length} sentados', '/seating'),
    _Shortcut(Hi.rectangleStack, 'Galeria',
        pending > 0 ? '$pending ${plural(pending, 'foto por aprovar', 'fotos por aprovar')}' : approved == 0 ? decor.galleryEmpty : '$approved ${plural(approved, 'foto', 'fotos')}', '/gallery'),
    const _Shortcut(Hi.gift, 'Para os convidados', 'Programa e presentes', '/guest-page'),
    // «Serviços tratados» passou para dentro das Reservas (2026-11-23).
    _Shortcut(Hi.clipboardDocumentList, 'Reservas',
        handled == null ? '—' : handled == 0 ? 'Nenhum serviço tratado' : '$handled ${plural(handled, 'serviço tratado', 'serviços tratados')}', '/bookings'),
  ];
}

/// Que permissão um atalho/cartão do painel exige (null = sempre visível).
/// Segue o mesmo mapa das `PermissionGate` nas rotas (router.dart).
OrganizerPerm? _permForRoute(String route) {
  if (route.startsWith('/guests') || route.startsWith('/seating') || route.startsWith('/invite')) {
    return OrganizerPerm.convidados;
  }
  if (route.startsWith('/budget') || route.startsWith('/service-preferences')) return OrganizerPerm.orcamento;
  if (route.startsWith('/bilhetes')) return OrganizerPerm.bilhetes;
  if (route.startsWith('/checklist') || route.startsWith('/tasks')) return OrganizerPerm.tarefas;
  if (route.startsWith('/chat')) return OrganizerPerm.conversas;
  if (route.startsWith('/gallery') || route.startsWith('/guest-page') || route.startsWith('/gift')) {
    return OrganizerPerm.evento;
  }
  return null; // /bookings e outros sem mapeamento: sempre visíveis.
}

/// Um co-organizador não vê o que não pode fazer; o dono vê tudo (`can` já
/// devolve true para o dono). Pedido do Rafael (2026-11-18).
bool _routeAllowed(String route, OrganizerPerms perms) {
  final p = _permForRoute(route);
  return p == null || perms.can(p);
}

/// Categorias marcadas como já tratadas ou sem necessidade
/// (`wedding_service_preferences`).
final _servicesHandledProvider = FutureProvider<int>((ref) async {
  final eventId = ref.watch(eventControllerProvider.select((s) => s.event?.id));
  if (eventId == null) return 0;
  final rows = await supabase
      .from('wedding_service_preferences')
      .select('preference')
      .eq('wedding_id', eventId)
      .neq('preference', 'needed');
  return (rows as List).length;
});

/// Estado "a carregar" do separador Casamento (canvas): a forma do cartão
/// do casal e dos quadrados, a pulsar, com a navbar já no sítio.
class _EventSkeleton extends StatelessWidget {
  const _EventSkeleton();

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        // O painel novo a carregar: capa, resumo e molduras (2026-11-25).
        const SkeletonEventPanel(),
        const Positioned(
          left: 0,
          right: 0,
          bottom: 0,
          child: FloatingBottomNav(current: AppTab.event),
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
  final file = await picker.pickImage(source: ImageSource.gallery);
  if (file == null || !context.mounted) return;
  final raw = await file.readAsBytes();
  if (!context.mounted) return;
  final adjusted = await showPhotoAdjustScreen(context, imageBytes: raw);
  if (adjusted == null || !context.mounted) return;
  try {
    await ref.read(eventControllerProvider.notifier).uploadBannerBytes(adjusted);
  } catch (_) {
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível carregar a foto.')));
    }
  }
}

int? _daysLeft(Event w) {
  final d = w.eventDate;
  if (d == null) return null;
  final n = d.difference(DateTime.now()).inDays;
  return n < 0 ? 0 : n;
}

String _eventNoun(Event w) => w.eventType == EventType.wedding ? 'o casamento' : 'o ${w.eventType.noun}';

/// Foto de capa (ou espaço para a pôr), usada dentro das polaroids.
class _CoverPhoto extends ConsumerWidget {
  final Event event;
  final double height;
  final double radius;
  const _CoverPhoto({required this.event, required this.height, this.radius = 3});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final look = _look(context, ref);
    final url = event.coverPhotoUrlCacheBusted;
    return SnappyTap(
      onTap: () => _pickBannerFrom(context, ref),
      child: ClipRRect(
        borderRadius: BorderRadius.circular(radius),
        child: SizedBox(
          height: height,
          width: double.infinity,
          child: url != null
              ? SizedNetworkImage(url, fit: BoxFit.cover, errorBuilder: (c, e, s) => Container(color: look.tint))
              : Container(
                  color: look.tint,
                  alignment: Alignment.center,
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Icon(Hi.photo, size: 28, color: look.accent),
                      const SizedBox(height: 4),
                      Text('Adicionar ${EventDecor.of(event.eventType).coverHint}', textAlign: TextAlign.center, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: look.accent)),
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
          boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
        ),
        child: child,
      ),
    );
  }
}

Widget _namesAndDate(Event w, _Look look, {double size = 20}) => Column(
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
          [if (w.eventDate != null) formatEventDateCaps(w.eventDate!), if (w.location?.isNotEmpty == true) w.location!].join(' · '),
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
          boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
        ),
        child: Icon(icon, size: 26, color: fg),
      ),
    );

// ---------- Autocolantes ----------
class _StickersTop extends ConsumerWidget {
  final Event event;
  const _StickersTop({required this.event});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final look = _look(context, ref);
    final items = _shortcuts(ref);
    final days = _daysLeft(event);
    final first = event.partnerName1.trim().split(' ').first;
    const tilts = [-8.0, 6.0, -4.0, 8.0, -6.0, 4.0];
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text('Olá, $first!', style: const TextStyle(fontSize: 28, height: 1.2, fontWeight: FontWeight.w700, color: AppTheme.ink)),
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
              Text(' para ${_eventNoun(event)}', style: const TextStyle(fontSize: 16, color: AppTheme.inkMuted)),
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
                        _CoverPhoto(event: event, height: 190),
                        const SizedBox(height: 10),
                        _namesAndDate(event, look),
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
  final Event event;
  const _MuralTop({required this.event});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final look = _look(context, ref);
    final items = _shortcuts(ref);
    final days = _daysLeft(event);
    final first = event.partnerName1.trim().split(' ').first;
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
                  const Text('O nosso mural', style: TextStyle(fontSize: 22, height: 1.2, fontWeight: FontWeight.w700, color: AppTheme.ink)),
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
                  Text(event.eventType.label, style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: look.accent)),
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
                      _CoverPhoto(event: event, height: 210, radius: 2),
                      const SizedBox(height: 10),
                      _namesAndDate(event, look, size: 22),
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
                          boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
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
  final Event event;
  const _ClotheslineTop({required this.event});

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
                    EventDecor.of(event.eventType).kicker.toUpperCase(),
                    style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1.4, color: look.accent),
                  ),
                  Text(
                    event.displayNames,
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
                            _CoverPhoto(event: event, height: 200, radius: 2),
                            const SizedBox(height: 8),
                            Text(look.tagline, textAlign: TextAlign.center, style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, fontStyle: FontStyle.italic, color: look.accent)),
                            const SizedBox(height: 2),
                            Text(
                              event.eventDate == null ? 'Data por definir' : formatEventDateCaps(event.eventDate!),
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
        RepaintBoundary(child: _FilmStrip(date: event.eventDate)),
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
                        border: Border.all(color: const Color(0xFFD9D9D9)),
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
      ..color = const Color(0xFF6E6A63)
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
  Widget build(BuildContext context) =>
      // Atualiza a cada segundo: só esta parte volta a pintar.
      RepaintBoundary(child: _build(context));

  Widget _build(BuildContext context) {
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


// ---------- Parte de baixo (canvas "Organizadores · O meu evento") ----------

const _cardBorder = Color(0xFFDCD8CE);
const _green = Color(0xFF4F6B4A);
BoxDecoration _card({double radius = 22}) => BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.circular(radius),
      border: Border.all(color: _cardBorder),
      boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
    );

const _monthsShort = ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'];
String _shortDay(DateTime d) => '${d.day} ${_monthsShort[d.month - 1]}';

/// Pagamentos por fazer (despesas com data e sinais/restantes das
/// reservas), por ordem de data — o mesmo cálculo de "Pagamentos próximos".
/// Só os pagamentos das reservas (pagam-se na app). As despesas escritas à
/// mão no Orçamento não entram no «Para fazer» nem nos alertas: não há
/// parceiro a quem pagar (pedido do Rafael, 2026-11-22).
List<(Expense, String?)> _duePayments(WidgetRef ref) {
  final orgFee = ref.watch(organizerFeeConfigProvider).value ?? const FeeConfig();
  final bookings = ref.watch(coupleBookingsProvider).asData?.value ?? const <CoupleBooking>[];
  final out = <(Expense, String?)>[
    for (final b in bookings.where((b) => b.status != BookingStatus.recusado)) ...[
      if (b.pendingDepositPaymentId != null)
        (
          Expense(
            id: 'booking:${b.id}:deposit',
            eventId: b.eventId,
            title: 'Sinal · ${b.partnerName}',
            amount: amountWithCommission(b.depositAmount ?? 0, orgFee.effectivePct(b.amount)),
            dueDate: b.pendingDepositDueAt ?? DateTime.now(),
          ),
          b.pendingDepositPaymentId,
        ),
      if (b.pendingFinalPaymentId != null)
        (
          Expense(
            id: 'booking:${b.id}:final',
            eventId: b.eventId,
            title: 'Restante · ${b.partnerName}',
            amount: amountWithCommission(b.finalPaymentAmount ?? 0, orgFee.effectivePct(b.amount)),
            dueDate: b.finalPaymentDueAt ?? b.serviceDate,
          ),
          b.pendingFinalPaymentId,
        ),
    ],
  ]..sort((a, b) => a.$1.dueDate!.compareTo(b.$1.dueDate!));
  return out;
}

enum _Fourth { seats, gifts, tickets }

_Fourth _fourthOf(EventType t) => switch (t) {
      EventType.wedding || EventType.vowRenewal || EventType.baptism || EventType.communion || EventType.corporate => _Fourth.seats,
      EventType.graduation || EventType.party || EventType.nightlife || EventType.concert || EventType.festival => _Fourth.tickets,
      _ => _Fourth.gifts,
    };

/// Rótulo da quarta caixa (Definições → Painel do evento).
String fourthLabel(EventType t) => switch (_fourthOf(t)) {
      _Fourth.seats => 'Mesas',
      _Fourth.gifts => 'Presentes',
      _Fourth.tickets => 'Bilhetes',
    };

/// Página "Definições do evento": tudo sobre este evento, por temas
/// (O EVENTO / CONVIDADOS / CONTEÚDO / ARQUIVO). Mockup «Definições do
/// evento», 2026-11-17. Linhas sem ícones (DESIGN.md §4). A seta de voltar
/// é a do §6 (fixa, roda ←→↑, sobe ao topo).
class _EventSettingsPage extends ConsumerStatefulWidget {
  final Event event;
  const _EventSettingsPage({required this.event});

  @override
  ConsumerState<_EventSettingsPage> createState() => _EventSettingsPageState();
}

class _EventSettingsPageState extends ConsumerState<_EventSettingsPage> {
  final _scroll = ScrollController();
  final _barTitle = ValueNotifier<String?>('Definições do evento');

  @override
  void dispose() {
    _scroll.dispose();
    _barTitle.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final w = widget.event;
    final topInset = MediaQuery.paddingOf(context).top;
    final fourth = _fourthOf(w.eventType);
    void push(String r) => context.push(r);

    // Um co-organizador só vê o que pode fazer; o dono vê tudo. As linhas de
    // dono (Organizadores, Arquivo) ficam só para o dono.
    final perms = ref.watch(myEventPermsProvider).value ?? OrganizerPerms.all;
    final canEvento = perms.can(OrganizerPerm.evento);
    final canBilhetes = perms.can(OrganizerPerm.bilhetes);
    final isOwner = perms.isOwner;

    final groups = <(String, List<(String, String, VoidCallback)>)>[
      ('O evento', [
        if (canEvento)
          ('Detalhes do evento', 'Nome, data, local',
              () => Navigator.of(context).push(MaterialPageRoute(builder: (_) => EditEventPage(event: w)))),
        if (canEvento)
          ('Painel do evento', 'O que aparece',
              () => Navigator.of(context).push(MaterialPageRoute(builder: (_) => const PanelPage()))),
        if (canEvento) ('Aparência do menu', '', () => context.go('/evento?aparencia=1')),
      ]),
      // Organizadores e O convite vão em molduras próprias (mockup
      // «Páginas do evento · com molduras» → Definições do evento).
      ('Conteúdo', [
        if (canEvento) ('Para os convidados', 'Programa, acesso e entrada', () => push('/guest-page')),
        if (canEvento) ('Galeria', '', () => push('/gallery')),
        if (canEvento && fourth == _Fourth.gifts) ('Lista de presentes', '', () => push('/gift-list')),
        if (canBilhetes && fourth == _Fourth.tickets) ('Bilhetes', '', () => push('/bilhetes')),
      ]),
      ('Arquivo', [
        if (isOwner) ('Eventos arquivados e apagados', '', () => push('/eventos-arquivados')),
      ]),
    ];

    return Scaffold(
      backgroundColor: AppTheme.background,
      body: Stack(
        children: [
          ListView(
            controller: _scroll,
            padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, topInset + 12, AppTheme.screenMargin, 40),
            children: [
              const SizedBox(height: 44), // espaço por baixo da seta fixa
              const SizedBox(height: 8),
              const Text('Definições do evento',
                  style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 4),
              const Text('Tudo sobre este evento, organizado por tema.',
                  style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              // Cada tema numa moldura cinzenta com o título lá dentro
              // (mockup «Páginas do evento · com molduras», 2026-11-22).
              // Organizadores: quem organiza e «Convidar quem ajuda».
              if (isOwner)
                SectionFrame(title: 'Organizadores', children: [
                  ...switch (ref.watch(eventOrganizersProvider(w.id)).value) {
                    final list? when list.isNotEmpty => [
                        for (final (i, o) in list.where((o) => o.status != 'revoked').indexed) ...[
                          if (i > 0) const Divider(height: 1, color: AppTheme.line),
                          Padding(
                            padding: const EdgeInsets.symmetric(vertical: 8),
                            child: Row(children: [
                              V2Avatar(o.name, size: 44),
                              const SizedBox(width: 12),
                              Expanded(
                                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                                  Text(o.name, maxLines: 1, overflow: TextOverflow.ellipsis,
                                      style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                  Text(
                                    o.isOwner ? 'Anfitrião · tudo' : (o.status == 'pending' ? 'Convite por aceitar' : 'Ajuda a organizar'),
                                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                                  ),
                                ]),
                              ),
                            ]),
                          ),
                        ],
                        if (list.length == 1) const FrameNote('Ainda organizas sozinho.', top: 4),
                      ],
                    _ => const <Widget>[],
                  },
                  FrameButton44('Convidar quem ajuda',
                      outlined: (ref.watch(eventOrganizersProvider(w.id)).value?.length ?? 0) > 1,
                      onTap: () => push('/organizadores')),
                ]),
              // O convite: o código e o link.
              if (canEvento && (w.guestCode?.isNotEmpty == true || w.inviteUrl != null))
                SectionFrame(title: 'O convite', children: [
                  if (w.guestCode?.isNotEmpty == true)
                    Container(
                      margin: const EdgeInsets.only(top: 4),
                      padding: const EdgeInsets.fromLTRB(16, 8, 8, 8),
                      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16)),
                      child: Row(children: [
                        Expanded(
                          child: Text(w.guestCode!,
                              style: const TextStyle(fontSize: 22, letterSpacing: 4, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                        ),
                        FrameButton36('Copiar', outlined: true, onTap: () async {
                          await copyText(w.guestCode!);
                          if (context.mounted) {
                            ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Código copiado.')));
                          }
                        }),
                      ]),
                    ),
                  if (w.inviteUrl != null)
                    FrameButton44('Copiar o link do convite', outlined: true, onTap: () async {
                      await copyText(w.inviteUrl!);
                      if (context.mounted) {
                        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
                      }
                    }),
                ]),
              for (final (title, rows) in groups) if (rows.isNotEmpty)
                SectionFrame(
                  title: title,
                  children: [Material(
                    type: MaterialType.transparency,
                    child: Column(
                      children: [
                        for (final (i, (label, value, onTap)) in rows.indexed) ...[
                          if (i > 0) const Divider(height: 1, color: AppTheme.line),
                          InkWell(
                            onTap: onTap,
                            child: ConstrainedBox(
                              constraints: const BoxConstraints(minHeight: 56),
                              child: Padding(
                                padding: const EdgeInsets.symmetric(vertical: 10),
                                child: Row(
                                  children: [
                                    Expanded(
                                      child: Text(label, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                    ),
                                    if (value.isNotEmpty) ...[
                                      const SizedBox(width: 12),
                                      Flexible(
                                        child: Text(value, maxLines: 1, overflow: TextOverflow.ellipsis, textAlign: TextAlign.right,
                                            style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                                      ),
                                    ],
                                    const SizedBox(width: 6),
                                    const Icon(Hi.chevronRight, size: 18, color: AppTheme.inkMuted),
                                  ],
                                ),
                              ),
                            ),
                          ),
                        ],
                      ],
                    ),
                  )],
                ),
            ],
          ),
          // Barra do topo bloqueada (pedido 2026-11-23).
          Positioned(top: 0, left: 0, right: 0, child: LockedTopBar(controller: _scroll, title: _barTitle)),
          Positioned(
            left: AppTheme.screenMargin,
            top: topInset + 12,
            child: ScrollAwareBackButton(
              controller: _scroll,
              onBack: () => Navigator.of(context).maybePop(),
              rotate: false,
            ),
          ),
        ],
      ),
    );
  }
}

/// "Lembrar" quem não respondeu (migração 165, pedido 2026-11-08): quem
/// tem conta na app recebe notificação e push; quem não tem recebe o
/// convite por mensagem.
Future<void> _openRemind(BuildContext context, WidgetRef ref) async {
  final event = ref.read(eventControllerProvider).event;
  if (event == null) return;
  await showIslandSheet<void>(
    context: context,
    isScrollControlled: true,
    builder: (sheet) => _RemindSheet(event: event),
  );
}

class _RemindSheet extends StatefulWidget {
  final Event event;
  const _RemindSheet({required this.event});
  @override
  State<_RemindSheet> createState() => _RemindSheetState();
}

class _RemindSheetState extends State<_RemindSheet> {
  Map<String, dynamic>? _summary;
  bool _failed = false;
  bool _sending = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final r = await supabase.rpc('rsvp_reminder_summary', params: {'p_wedding': widget.event.id});
      if (mounted) setState(() => _summary = Map<String, dynamic>.from(r as Map));
    } catch (_) {
      if (mounted) setState(() => _failed = true);
    }
  }

  int _n(String k) => (_summary?[k] as num?)?.toInt() ?? 0;

  Future<void> _remind() async {
    setState(() => _sending = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      final sent = await supabase.rpc('remind_pending_guests', params: {'p_wedding': widget.event.id}) as int? ?? 0;
      messenger.showSnackBar(SnackBar(
        content: Text(sent == 0
            ? 'Já foram lembrados nas últimas 24 h.'
            : 'Lembrete enviado a $sent ${sent == 1 ? 'convidado' : 'convidados'} na app.'),
      ));
      await _load();
    } catch (_) {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível enviar. Tenta outra vez.')));
    } finally {
      if (mounted) setState(() => _sending = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final pending = _n('pending');
    final withApp = _n('with_app');
    final canRemind = _n('can_remind');
    final withoutApp = _n('without_app');
    Widget block({required IconData icon, required String title, required String sub, required Widget action}) => Container(
          padding: const EdgeInsets.all(14),
          decoration: _card(),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Row(children: [
              Icon(icon, color: _green),
              const SizedBox(width: 10),
              Expanded(child: Text(title, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink))),
            ]),
            const SizedBox(height: 4),
            Text(sub, style: const TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted)),
            const SizedBox(height: 12),
            action,
          ]),
        );
    ButtonStyle filled() => FilledButton.styleFrom(
          backgroundColor: AppTheme.action,
          foregroundColor: Colors.white,
          minimumSize: const Size.fromHeight(46),
          shape: const StadiumBorder(),
          textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 15, fontWeight: FontWeight.w700),
        );
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(20, 16, 20, 24),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Text(
          _summary == null ? 'Lembrar quem não respondeu' : '$pending sem resposta',
          style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink),
        ),
        const SizedBox(height: 14),
        if (_summary == null && !_failed)
          const Padding(padding: EdgeInsets.all(24), child: SkeletonStats())
        else ...[
          if (!_failed)
            block(
              icon: Hi.bellAlert,
              title: '$withApp ${withApp == 1 ? 'tem' : 'têm'} a app',
              sub: canRemind == withApp
                  ? 'Recebem uma notificação no telemóvel a pedir a resposta.'
                  : canRemind == 0
                      ? 'Já foram lembrados nas últimas 24 h. Podes voltar a lembrar amanhã.'
                      : '$canRemind ainda não foram lembrados hoje.',
              action: PressScale(child: FilledButton.icon(
                onPressed: _sending || canRemind == 0 ? null : _remind,
                icon: const Icon(Hi.paperAirplane, size: 18),
                label: Text(canRemind == 0 ? 'Lembrete enviado' : 'Enviar lembrete na app'),
                style: filled(),
              )),
            ),
          const SizedBox(height: 12),
          block(
            icon: Hi.arrowUpOnSquare,
            title: _failed ? 'Enviar o convite outra vez' : '$withoutApp sem a app',
            sub: 'Envia-lhes o convite por WhatsApp ou mensagem. Respondem pelo link, sem conta.',
            action: PressScale(child: OutlinedButton.icon(
              onPressed: () => shareEventInvite(context, widget.event),
              icon: const Icon(Hi.arrowUpOnSquare, size: 18),
              label: const Text('Enviar convite por mensagem'),
              style: OutlinedButton.styleFrom(
                foregroundColor: AppTheme.ink,
                side: const BorderSide(color: Color(0xFFDCD8CE), width: 1.5),
                minimumSize: const Size.fromHeight(46),
                shape: const StadiumBorder(),
                textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 15, fontWeight: FontWeight.w700),
              ),
            )),
          ),
          const SizedBox(height: 8),
          PressScale(child: TextButton(
            onPressed: () {
              Navigator.of(context).pop();
              context.push('/guests');
            },
            child: const Text('Ver a lista de convidados'),
          )),
        ],
      ]),
    );
  }
}


// ---------- Painel do evento (canvas "Painel do evento", 2026-11-11) ----------

const _hairline = Color(0xFFDCD6C8);
/// Topo minimalista: foto de capa a toda a largura, voltar e definições,
/// tipo do evento, nome, data e local, e a contagem decrescente.
class _MinimalTop extends ConsumerStatefulWidget {
  final Event event;
  const _MinimalTop({required this.event});

  @override
  ConsumerState<_MinimalTop> createState() => _MinimalTopState();
}

class _MinimalTopState extends ConsumerState<_MinimalTop> {
  bool _uploading = false;

  Future<void> _pickBanner() async {
    final picker = ImagePicker();
    final file = await picker.pickImage(source: ImageSource.gallery);
    if (file == null || !mounted) return;
    final rawBytes = await file.readAsBytes();
    if (!mounted) return;
    final adjusted = await showPhotoAdjustScreen(context, imageBytes: rawBytes);
    if (adjusted == null || !mounted) return;
    setState(() => _uploading = true);
    try {
      await ref.read(eventControllerProvider.notifier).uploadBannerBytes(adjusted);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível carregar a foto.')));
      }
    } finally {
      if (mounted) setState(() => _uploading = false);
    }
  }

  Widget _round(IconData icon, String label, VoidCallback onTap) {
    // DESIGN.md §2: preto 44 com o ícone branco sólido, sobre a foto também.
    return Semantics(
      button: true,
      label: label,
      child: SnappyTap(
        onTap: onTap,
        child: Container(
          width: 44,
          height: 44,
          decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
          child: Icon(icon, size: 20, color: Colors.white),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final w = widget.event;
    final look = _look(context, ref);
    final photo = w.coverPhotoUrlCacheBusted;
    final place = [
      if (w.eventDate != null) '${w.eventDate!.day} ${monthNamesPt[w.eventDate!.month - 1].toLowerCase()} ${w.eventDate!.year}',
      if (w.venue?.isNotEmpty == true) w.venue! else if (w.location?.isNotEmpty == true) w.location!,
    ].join(' · ');
    // Altura das horas e da bateria: a capa começa por trás delas.
    final inset = MediaQuery.paddingOf(context).top;
    // Capa como a do painel do convidado (mockups «Painel do organizador»,
    // 2026-11-21): foto com o véu escuro, o tipo, o nome e a data/local a
    // branco em baixo; partilhar e ⋯ à direita (a seta de voltar é a fixa
    // do §6). Tocar na foto muda a capa.
    return ClipRRect(
      borderRadius: const BorderRadius.vertical(bottom: Radius.circular(40)),
      child: SizedBox(
        height: 260 + inset,
        child: Stack(fit: StackFit.expand, children: [
          SnappyTap(
            onTap: _uploading ? null : _pickBanner,
            child: photo != null
                ? SizedNetworkImage(photo, fit: BoxFit.cover, errorBuilder: (context, error, stack) => Container(color: look.tint))
                : Container(
                    color: look.tint,
                    alignment: Alignment.center,
                    child: Column(mainAxisSize: MainAxisSize.min, children: [
                      Icon(Hi.photo, size: 28, color: look.accent),
                      const SizedBox(height: 10),
                      Container(
                        height: 36,
                        padding: const EdgeInsets.symmetric(horizontal: 16),
                        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(18)),
                        child: const Center(
                          widthFactor: 1,
                          child: Text('Pôr foto de capa', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                        ),
                      ),
                    ]),
                  ),
          ),
          if (photo != null)
            const IgnorePointer(
              child: DecoratedBox(
                decoration: BoxDecoration(
                  gradient: LinearGradient(
                    begin: Alignment.topCenter,
                    end: Alignment.bottomCenter,
                    stops: [0, 0.35, 1],
                    colors: [Color(0x26171713), Color(0x00171713), Color(0x8C171713)],
                  ),
                ),
              ),
            ),
          if (_uploading)
            Container(
              color: Colors.black.withValues(alpha: 0.35),
              alignment: Alignment.center,
              child: const CircularProgressIndicator(color: Colors.white, strokeWidth: 2.5),
            ),
          Positioned(
            left: AppTheme.screenMargin,
            right: AppTheme.screenMargin,
            top: 12 + inset,
            child: Row(children: [
              const Spacer(),
              WithCount(
                count: ref.watch(eventGroupUnreadProvider(w.id)).value ?? 0,
                child: _round(Hi.chatBubbleOvalLeft, 'Grupo do evento', () => _openEventGroup(context, ref, w.id)),
              ),
              const SizedBox(width: 8),
              _round(Hi.arrowUpOnSquare, 'Partilhar o convite', () => shareEventInvite(context, w)),
              const SizedBox(width: 8),
              // Arquivar ou apagar o evento (185).
              _round(Hi.ellipsisHorizontal, 'Mais opções', () => showEventActionsSheet(context, ref,
                  eventId: w.id,
                  name: capFirst(w.displayNames),
                  isOwner: w.ownerId == ref.read(authControllerProvider).profile?.id)),
            ]),
          ),
          Positioned(
            left: AppTheme.screenMargin,
            right: AppTheme.screenMargin,
            bottom: 22,
            child: IgnorePointer(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                Text(w.typeLabel.toUpperCase(),
                    style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: photo != null ? Colors.white : AppTheme.inkMuted)),
                const SizedBox(height: 4),
                Text(capFirst(w.displayNames),
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: TextStyle(fontSize: 28, height: 1.15, fontWeight: FontWeight.w700, color: photo != null ? Colors.white : AppTheme.ink)),
                if (place.isNotEmpty) ...[
                  const SizedBox(height: 4),
                  Text(place, style: TextStyle(fontSize: 13, color: photo != null ? Colors.white : AppTheme.inkMuted)),
                ],
              ]),
            ),
          ),
        ]),
      ),
    );
  }
}

class _MinimalCountdown extends StatefulWidget {
  final DateTime date;
  const _MinimalCountdown({required this.date});

  @override
  State<_MinimalCountdown> createState() => _MinimalCountdownState();
}

class _MinimalCountdownState extends State<_MinimalCountdown> {
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
    final left = widget.date.difference(DateTime.now());
    const border = BorderSide(color: _hairline);
    if (left.isNegative) {
      return Container(
        padding: const EdgeInsets.symmetric(vertical: 14),
        decoration: const BoxDecoration(border: Border(top: border, bottom: border)),
        child: const Text('É hoje!', textAlign: TextAlign.center,
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: AppTheme.ink)),
      );
    }
    final cells = [
      (left.inDays.toString(), 'DIAS'),
      ((left.inHours % 24).toString().padLeft(2, '0'), 'HORAS'),
      ((left.inMinutes % 60).toString().padLeft(2, '0'), 'MIN'),
      ((left.inSeconds % 60).toString().padLeft(2, '0'), 'SEG'),
    ];
    return RepaintBoundary(
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 14),
        decoration: const BoxDecoration(border: Border(top: border, bottom: border)),
        child: IntrinsicHeight(
          child: Row(children: [
            for (final (i, (v, l)) in cells.indexed) ...[
              if (i > 0) const VerticalDivider(width: 1, thickness: 1, color: _hairline),
              Expanded(
                child: Column(children: [
                  Text(v, style: const TextStyle(fontSize: 26, height: 1, fontWeight: FontWeight.w800, color: AppTheme.ink)),
                  const SizedBox(height: 4),
                  Text(l, style: const TextStyle(fontSize: 10, letterSpacing: 1.5, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                ]),
              ),
            ],
          ]),
        ),
      ),
    );
  }
}

/// "Sugestões para ti": um parceiro de cada vez, cartões da largura do
/// ecrã que prendem ao deslizar, com pontos por baixo.
class _Suggestions extends ConsumerStatefulWidget {
  final Event event;
  const _Suggestions({required this.event});

  @override
  ConsumerState<_Suggestions> createState() => _SuggestionsState();
}

class _SuggestionsState extends ConsumerState<_Suggestions> {

  Future<void> _open(FeaturedPick k) async {
    if (k.paid) trackPromotionClick(k.partnerId);
    final p = await ref.read(partnerByIdProvider(k.partnerId).future);
    if (p == null || !mounted) return;
    await PartnerDetailScreen.show(context, p);
  }

  @override
  Widget build(BuildContext context) {
    final location = widget.event.location;
    final picks = ref.watch(featuredForMeProvider((location: location, category: null, limit: 6))).value;
    // Sem quem já está reservado ou com proposta.
    final booked = {
      for (final b in ref.watch(coupleBookingsProvider).asData?.value ?? const <CoupleBooking>[])
        if (b.partnerId != null && b.status != BookingStatus.recusado) b.partnerId!,
    };
    final list = [for (final k in picks ?? const <FeaturedPick>[]) if (!booked.contains(k.partnerId)) k];
    // O mesmo cartão da página Parceiros (`PartnerBigCard`, pedido do
    // Rafael, 2026-11-22): o mesmo elemento igual em todo o lado.
    final partners = [for (final k in list) ?ref.watch(partnerByIdProvider(k.partnerId)).value];
    if (partners.isEmpty) return const SizedBox.shrink();
    final paid = {for (final k in list) if (k.paid) k.partnerId};
    return Padding(
      padding: const EdgeInsets.only(top: 18),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
          child: KitCaps('Parceiros em destaque'),
        ),
        const SizedBox(height: 4),
        PartnerCarousel(
          partners: partners,
          highlighted: paid,
          onTap: (p) => _open(list.firstWhere((k) => k.partnerId == p.id)),
        ),
      ]),
    );
  }
}

// ---------------------------------------------------------------------------
// Painel do organizador (mockups «Painel do organizador», pedido do Rafael,
// 2026-11-21): muito semelhante ao painel do convidado. Resumo com quanto
// falta e como estão os convidados (com a linha preta, como no convidado);
// «Para fazer» só com o que existe mesmo (sem as tarefas pré-feitas);
// sugestões que nunca repetem o «Para fazer»; programa, números, reservas,
// convite e gerir. No dia, o «Agora»; depois, «Foi há N dias» e as fotos.
// ---------------------------------------------------------------------------

/// Escolher a foto de capa (a capa e a sugestão «Pôr foto de capa»).
Future<void> _pickCoverPhoto(BuildContext context, WidgetRef ref) async {
  final messenger = ScaffoldMessenger.of(context);
  final file = await ImagePicker().pickImage(source: ImageSource.gallery);
  if (file == null || !context.mounted) return;
  final rawBytes = await file.readAsBytes();
  if (!context.mounted) return;
  final adjusted = await showPhotoAdjustScreen(context, imageBytes: rawBytes);
  if (adjusted == null) return;
  try {
    await ref.read(eventControllerProvider.notifier).uploadBannerBytes(adjusted);
  } catch (_) {
    messenger.showSnackBar(const SnackBar(content: Text('Não foi possível carregar a foto.')));
  }
}

/// Uma linha do «Para fazer»: ponto da cor do prazo, título, meta e o botão.
/// Um aviso do «Para fazer» (mockup «Painel do organizador · secções com
/// moldura», 2026-11-22): a sua própria linha amarela ou vermelha (pelo
/// prazo), com o brilho só na linha e sem fundo; à esquerda a imagem do
/// parceiro ou do que se trata (sem bolinha); título e meta numa linha só.
Widget _orgTaskRow(BuildContext context,
        {required String title,
        required String sub,
        required String action,
        required VoidCallback onTap,
        required Widget lead,
        bool urgent = false}) =>
    Padding(
      padding: const EdgeInsets.only(top: 8),
      child: SnappyTap(
        onTap: onTap,
        child: AlertOutline(
          tone: urgent ? AlertTone.urgent : AlertTone.pending,
          fill: Colors.transparent,
          radius: 22,
          padding: const EdgeInsets.all(10),
          child: Row(children: [
            lead,
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                Text(title, maxLines: 1, overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(sub, maxLines: 1, overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
            const SizedBox(width: 8),
            DashButton36(action, onTap: onTap),
          ]),
        ),
      ),
    );

class _OrgBody extends ConsumerWidget {
  final Event event;

  /// Chaves das secções, para os atalhos do topo reduzido.
  final Map<String, GlobalKey>? sectionKeys;
  const _OrgBody({required this.event, this.sectionKeys});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final w = event;
    final info = ref.watch(orgGuestFacingProvider(w.id)).value;
    final program = info?.program ?? const <ProgramItem>[];
    final (label, big, unit) = dashWhenAt(w.eventDate, info?.ceremonyTime);
    final now = DateTime.now();
    final days = w.eventDate == null
        ? null
        : DateTime(w.eventDate!.year, w.eventDate!.month, w.eventDate!.day).difference(DateTime(now.year, now.month, now.day)).inDays;
    final isToday = days == 0;
    final isPast = days != null && days < 0;

    final guests = ref.watch(guestsControllerProvider).guests;
    final going = guests.where((g) => g.rsvpStatus == RsvpStatus.confirmed).toList();
    final notGoing = guests.where((g) => g.rsvpStatus == RsvpStatus.declined).length;
    final pending = guests.where((g) => g.rsvpStatus == RsvpStatus.pending).length;
    final photos = ref.watch(eventGalleryPhotosProvider(w.id)).value ?? const <GalleryPhoto>[];
    final perms = ref.watch(myEventPermsProvider).value ?? OrganizerPerms.all;

    // Resumo: como estão os convidados.
    String? who;
    String? whoSub;
    String change = 'Ver';
    bool filled = false;
    VoidCallback? onChange;
    if (guests.isEmpty) {
      who = 'Ainda sem convidados';
      whoSub = 'Partilha o convite ou junta-os à mão';
      change = 'Convidar';
      filled = true;
      // A página «Convidar» que já temos (pedido 2026-11-22).
      onChange = () => context.push('/guests/convidar');
    } else if (isPast) {
      who = '${going.length} ${going.length == 1 ? 'foi' : 'foram'}';
      whoSub = photos.isEmpty ? 'De ${guests.length} convidados' : '${photos.length} ${photos.length == 1 ? 'foto partilhada' : 'fotos partilhadas'} pelos convidados';
      change = photos.isEmpty ? 'Ver' : 'Ver fotos';
      onChange = () => context.push(photos.isEmpty ? '/guests' : '/gallery');
    } else {
      who = '${going.length} ${going.length == 1 ? 'vai' : 'vão'}';
      whoSub = [pending > 0 ? '$pending por responder' : 'Todos responderam', if (notGoing > 0) '$notGoing não ${notGoing == 1 ? 'vai' : 'vão'}'].join(' · ');
      change = pending > 0 ? 'Lembrar' : 'Ver';
      onChange = pending > 0 ? () => _openRemind(context, ref) : () => context.push('/guests');
    }

    // «Para fazer»: só o que existe mesmo — pagamentos com prazo, propostas
    // dos parceiros e pedidos para entrar.
    final tasks = <Widget>[];
    if (perms.can(OrganizerPerm.tarefas)) {
      final allBookings = ref.watch(coupleBookingsProvider).value ?? const <CoupleBooking>[];
      // Mesas em que cada um escolhe o menu (216): o organizador escolhe o
      // seu, o de quem vem com ele e o de quem paga.
      final tables = ref.watch(myEventTablesProvider(w.id)).value ?? const <EventTable>[];
      final withPayRow = <String>{};
      for (final (e, payId) in _duePayments(ref).where((p) => p.$1.eventId == w.id).take(3)) {
        final left = e.dueDate!.difference(now).inDays;
        final when = left < 0 ? 'o prazo já passou' : left == 0 ? 'até hoje' : left <= 3 ? 'faltam $left ${left == 1 ? 'dia' : 'dias'}' : 'até ${_shortDay(e.dueDate!)}';
        // Com menus (restaurante/catering, o organizador escolhe): escolhem-se
        // no momento de pagar — «Escolher e pagar», como no convidado
        // (pedido do Rafael, 2026-11-21).
        final parts = e.id.split(':');
        final booking = parts.length == 3 && parts.first == 'booking' ? allBookings.where((b) => b.id == parts[1]).firstOrNull : null;
        final table = booking == null ? null : tables.where((t) => t.bookingId == booking.id).firstOrNull;
        if (table != null) withPayRow.add(table.bookingId);
        final menus = booking != null && (booking.organizerChoosesMenus || table != null);
        // Restaurantes não têm sinal: paga-se tudo de uma vez (191).
        final what = parts.length == 3 && parts[2] == 'final'
            ? 'O restante'
            : booking?.depositIsFull == true
                ? 'O pagamento'
                : 'Sinal';
        final name = booking?.partnerName ?? e.title;
        tasks.add(_orgTaskRow(
          context,
          title: name,
          // Numa linha só (pedido 2026-11-22): «Sinal 1 386 € · até 30 nov».
          sub: menus ? 'Menus e pagar · $when' : '$what ${euros(e.amount, cents: payId != null)} · $when',
          action: menus ? 'Escolher' : 'Pagar',
          urgent: toneForDue(e.dueDate) == AlertTone.urgent,
          lead: V2Avatar(name, size: 44, imageUrl: booking?.partnerLogoUrl),
          // Popups por cima do painel (pedido 2026-11-22): extras e pagar,
          // como depois de aceitar uma proposta.
          onTap: () => table != null
              ? chooseMenuAndPay(context, ref, w.id, table)
              : payId != null
                  ? payBookingFlow(context, ref,
                      paymentId: payId, bookingId: booking?.id, partnerName: booking?.partnerName ?? e.title)
                  : context.push('/budget'),
        ));
      }
      for (final t in tables) {
        if (!t.needsAction || withPayRow.contains(t.bookingId)) continue;
        final d = t.choiceDeadline;
        final pays = t.myPayment?['status'] == 'pending' || (t.eachPays && !t.chose);
        final booking = allBookings.where((b) => b.id == t.bookingId).firstOrNull;
        tasks.add(_orgTaskRow(
          context,
          title: t.partnerName,
          sub: [
            !t.chose ? (pays ? 'Menus e pagar' : 'Menus') : 'A tua parte ${euros(t.myAmount ?? 0)}',
            if (d != null) 'até ${_shortDay(d)}',
          ].join(' · '),
          action: !t.chose ? 'Escolher' : 'Pagar',
          urgent: d != null && toneForDue(d) == AlertTone.urgent,
          lead: V2Avatar(t.partnerName, size: 44, imageUrl: booking?.partnerLogoUrl),
          onTap: () => chooseMenuAndPay(context, ref, w.id, t),
        ));
      }
      for (final p in ref.watch(pendingProposalsProvider).value ?? const <ReceivedProposal>[]) {
        if (p.eventId != w.id) continue;
        tasks.add(_orgTaskRow(
          context,
          title: p.partnerName,
          sub: ['Proposta ${euros(p.price)}', if (p.category?.isNotEmpty == true) p.category!].join(' · '),
          action: 'Ver',
          lead: V2Avatar(p.partnerName, size: 44),
          onTap: () => context.push('/bookings'),
        ));
      }
      // Cada pedido para entrar é uma tarefa (pedido 2026-11-23): a pessoa,
      // quando pediu e «Ver», que abre o pedido para aceitar ou recusar.
      final requests = ref.watch(joinRequestsProvider(w.id)).value ?? const <JoinRequest>[];
      for (final r in requests.take(kListPreview)) {
        final days = DateTime.now().difference(r.createdAt).inDays;
        tasks.add(_orgTaskRow(
          context,
          title: r.name,
          sub: [
            'Pediu para entrar',
            days <= 0 ? 'hoje' : days == 1 ? 'ontem' : 'há $days dias',
            if ((r.bringing ?? 0) > 0) 'traz ${r.bringing}',
          ].join(' · '),
          action: 'Ver',
          lead: V2Avatar(r.name, size: 44),
          onTap: () => context.push('/guests/pedidos?id=${r.id}'),
        ));
      }
      if (requests.length > kListPreview) {
        tasks.add(MoreFacesRow(
          rest: [for (final r in requests.skip(kListPreview)) (r.name, null)],
          noun: 'pedido',
          nounPlural: 'pedidos',
          action: 'Ver',
          onTap: () => context.push('/guests/pedidos'),
        ));
      }
    }
    final bookings = [
      for (final b in ref.watch(coupleBookingsProvider).value ?? const <CoupleBooking>[])
        if (b.eventId == w.id && b.status != BookingStatus.recusado) b,
    ];

    final body = <Widget>[];
    if (isToday && DashNow.started(program)) {
      body.addAll([const KitCaps('Agora', top: 16, line: false), DashNow(program: program)]);
    } else {
      body.add(DashSummary(
        label: label,
        big: big,
        unit: unit,
        who: who,
        whoSub: whoSub,
        whoNames: [for (final g in going.take(3)) g.name.split(' ').first],
        onChange: onChange,
        changeLabel: change,
        changeFilled: filled,
      ));
    }
    // Cada secção numa moldura cinzenta (pedido 2026-11-22); no «Para
    // fazer», cada aviso com a sua linha amarela ou vermelha.
    if (perms.can(OrganizerPerm.tarefas)) {
      body.add(KeyedSubtree(
        key: sectionKeys?['todo'],
        child: SectionFrame(
          title: tasks.isNotEmpty ? 'Para fazer · ${tasks.length}' : 'Para fazer',
          children: [
            if (tasks.isNotEmpty)
              ...tasks
            else if (bookings.isNotEmpty || guests.isNotEmpty)
              const DashAllDone(done: 'Pagamentos em dia e propostas respondidas.')
            else
              const DashTasksEmpty(what: 'Pagamentos, pedidos para entrar e propostas dos parceiros.'),
          ],
        ),
      ));
    }
    body.add(OrgSuggestions(event: w, past: isPast, onCover: () => _pickCoverPhoto(context, ref)));
    if ((isToday || isPast) && photos.isNotEmpty) {
      body.add(SectionFrame(title: 'Fotos', children: [
        DashPhotos(onOpen: () => context.push('/gallery'), urls: [for (final p in photos) p.imageUrl], count: photos.length),
      ]));
    }

    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      Padding(
        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: body),
      ),
      if (!isPast) KeyedSubtree(key: sectionKeys?['program'], child: EventProgramSection(eventId: w.id)),
      Padding(
        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          if (!isPast && !isToday) KeyedSubtree(key: sectionKeys?['numbers'], child: _OrgNumbers(event: w)),
          KeyedSubtree(key: sectionKeys?['bookings'], child: _OrgBookings(bookings: bookings)),
          if (!isPast) KeyedSubtree(key: sectionKeys?['invite'], child: _OrgInvite(event: w)),
          KeyedSubtree(key: sectionKeys?['manage'], child: _OrgManage(event: w)),
        ]),
      ),
      // Parceiros em destaque no fim (pedido do Rafael, 2026-11-22).
      if (!isPast) _Suggestions(event: w),
    ]);
  }
}

/// Números em caixas (pedido do Rafael, 2026-11-22, mockup «Números do
/// painel», B): orçamento, convidados, parceiros e mesas — as mesas só num
/// espaço com mesas separadas (os restaurantes juntam mesas para o grupo).
class _OrgNumbers extends ConsumerWidget {
  final Event event;
  const _OrgNumbers({required this.event});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final w = event;
    final perms = ref.watch(myEventPermsProvider).value ?? OrganizerPerms.all;
    final guests = ref.watch(guestsControllerProvider).guests;
    final going = guests.where((g) => g.rsvpStatus == RsvpStatus.confirmed).length;
    final pending = guests.where((g) => g.rsvpStatus == RsvpStatus.pending).length;
    final budget = ref.watch(budgetControllerProvider).budget;
    final bookings = [
      for (final b in ref.watch(coupleBookingsProvider).value ?? const <CoupleBooking>[])
        if (b.eventId == w.id && b.status != BookingStatus.recusado) b,
    ];
    final reserved = bookings.where((b) => b.status == BookingStatus.confirmado || b.status == BookingStatus.concluido).length;
    final seating = ref.watch(seatingControllerProvider);
    final tiles = <Widget>[];
    void add(String label, String value, String sub, String route) {
      if (!_routeAllowed(route, perms)) return;
      tiles.add(_OrgTile(label: label, value: value, sub: sub, onTap: () => context.push(route)));
    }

    // Orçamento, Convidados e Reservas aparecem sempre, mesmo a 0; Mesas só
    // com mais de uma mesa (pedido do Rafael, 2026-11-23).
    final spent = budget?.spent ?? 0;
    final total = budget?.total ?? 0;
    if (spent > 0) {
      add('Orçamento', euros(spent), total > 0 ? 'de ${euros(total)}' : 'gastos', '/budget');
    } else if (total > 0) {
      add('Orçamento', euros(total), 'por gastar', '/budget');
    } else if ((w.estimatedBudget ?? 0) > 0) {
      add('Orçamento', euros(w.estimatedBudget!), 'estimativa', '/budget');
    } else {
      add('Orçamento', euros(0), 'ainda sem teto', '/budget');
    }
    if (guests.isNotEmpty) {
      add('Convidados', '$going / ${guests.length}', pending > 0 ? '${going == 1 ? 'vai' : 'vão'} · $pending por responder' : going == 1 ? 'vai' : 'vão', '/guests');
    } else {
      add('Convidados', '0', 'ainda sem convidados', '/guests');
    }
    final others = bookings.length - reserved;
    add('Reservas', '$reserved', bookings.isEmpty
        ? 'ainda sem parceiros'
        : [reserved == 1 ? 'reservada' : 'reservadas', if (others > 0) '$others por fechar'].join(' · '), '/bookings');
    // Mesas: só num espaço com mesas separadas, e com mais de uma mesa.
    if (seating.hasVenue && seating.venueTypes.isNotEmpty && seating.tables.length > 1) {
      final seated = seating.tables.fold<int>(0, (n, t) => n + t.guestIds.length);
      add('Mesas', '${seating.tables.length}', '$seated de ${going == 0 ? guests.length : going} sentados', '/seating');
    }
    if (tiles.isEmpty) return const SizedBox.shrink();
    final rows = <Widget>[];
    for (var i = 0; i < tiles.length; i += 2) {
      if (i > 0) rows.add(const SizedBox(height: 10));
      // As duas caixas de cada fila com a mesma altura.
      rows.add(IntrinsicHeight(
        child: Row(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Expanded(child: tiles[i]),
          const SizedBox(width: 10),
          Expanded(child: i + 1 < tiles.length ? tiles[i + 1] : const SizedBox.shrink()),
        ]),
      ));
    }
    return SectionFrame(title: 'Números', children: rows);
  }
}

/// Uma caixa dos números: a linha da moldura (1,5 #CFCFCF, cantos 16), sem
/// ícone; rótulo 12 em maiúsculas, valor 28 negrito e uma linha 13 — tudo ao
/// centro, na horizontal e na vertical.
class _OrgTile extends StatelessWidget {
  final String label;
  final String value;
  final String sub;
  final VoidCallback onTap;
  const _OrgTile({required this.label, required this.value, required this.sub, required this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        label: '$label: $value, $sub',
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 14),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(16),
              border: Border.all(color: SectionFrame.lineColor, width: 1.5),
            ),
            child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
              Text(label.toUpperCase(),
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
              const SizedBox(height: 4),
              FittedBox(
                fit: BoxFit.scaleDown,
                child: Text(value, maxLines: 1, style: const TextStyle(fontSize: 28, height: 1.1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
              const SizedBox(height: 4),
              Text(sub, maxLines: 2, overflow: TextOverflow.ellipsis, textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 13, height: 1.3, color: AppTheme.inkMuted)),
            ]),
          ),
        ),
      );
}

/// Reservas: uma linha por parceiro com o estado numa etiqueta.
class _OrgBookings extends ConsumerWidget {
  final List<CoupleBooking> bookings;
  const _OrgBookings({required this.bookings});

  /// O pagamento por fazer desta reserva → os popups de pagar (extras e
  /// pagar), como no «Para fazer»; sem nenhum, a página das reservas.
  Future<void> _pay(BuildContext context, WidgetRef ref, CoupleBooking b) async {
    String? payId;
    try {
      final row = await supabase
          .from('payments')
          .select('id')
          .eq('booking_id', b.id)
          .eq('status', 'pending')
          .order('due_at')
          .limit(1)
          .maybeSingle();
      payId = row?['id'] as String?;
    } catch (_) {}
    if (!context.mounted) return;
    if (payId == null) {
      context.push('/bookings');
      return;
    }
    await payBookingFlow(context, ref, paymentId: payId, bookingId: b.id, partnerName: b.partnerName);
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    if (bookings.isEmpty) return const SizedBox.shrink();
    String day(CoupleBooking b) => '${b.serviceDate.day} ${monthNamesPt[b.serviceDate.month - 1].substring(0, 3).toLowerCase()}';
    // Por pagar: botão preto «Pagar» em vez da etiqueta (pedido
    // 2026-11-22); restaurantes não têm sinal (191): «por pagar».
    Widget trailing(CoupleBooking b) => switch (b.status) {
          BookingStatus.confirmado => const KitTag('Confirmada'),
          BookingStatus.concluido => const KitTag('Concluída'),
          BookingStatus.aceite => DashButton36('Pagar', onTap: () => _pay(context, ref, b)),
          BookingStatus.emAnalise => const KitTag('Em análise', kind: KitTagKind.neutral),
          _ => const KitTag('Pedido enviado', kind: KitTagKind.neutral),
        };
    return SectionFrame(title: 'Reservas', children: [
      KitGroup([
        for (final b in bookings)
          KitRow(
            lead: V2Avatar(b.partnerName, size: 44, imageUrl: b.partnerLogoUrl),
            title: b.partnerName,
            sub: [
              if (b.category?.isNotEmpty == true) b.category!,
              day(b),
              if (b.status == BookingStatus.aceite) b.depositIsFull ? 'por pagar' : 'falta o sinal',
            ].join(' · '),
            trailing: trailing(b),
            onTap: () => context.push('/bookings'),
          ),
      ]),
    ]);
  }
}

/// Convite: o código (toca para copiar), «Partilhar» e «Ver como convidado».
class _OrgInvite extends StatelessWidget {
  final Event event;
  const _OrgInvite({required this.event});

  @override
  Widget build(BuildContext context) {
    final code = event.guestCode;
    return SectionFrame(title: 'Convite', children: [
      KitGroup([
        // Tocar abre a página «Convidar» (Convidados / Organizadores),
        // pedido 2026-11-23.
        KitRow(
          title: code ?? 'O convite',
          sub: code == null ? 'Convida pela app ou por link' : 'Código para entrar · convida pela app ou por link',
          trailing: DashButton36('Convidar', onTap: () => context.push('/guests/convidar')),
          onTap: () => context.push('/guests/convidar'),
        ),
        if (code != null) KitRow(title: 'Ver como convidado', chevron: true, onTap: () => context.push('/invite/$code')),
      ]),
    ]);
  }
}

/// Gerir (pedido do Rafael, 2026-11-22): presentes e a página dos
/// convidados; os convidados e as mesas estão nos quadrados. As Definições
/// do evento ficam à parte, por baixo de uma linha grossa e com o botão
/// redondo preto (§2), mais à vista.
class _OrgManage extends ConsumerWidget {
  final Event event;
  const _OrgManage({required this.event});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final perms = ref.watch(myEventPermsProvider).value ?? OrganizerPerms.all;
    final sections = ref.watch(guestSectionsProvider(event.id)).value ?? const GuestSections();
    void settings() => Navigator.of(context).push(MaterialPageRoute(builder: (_) => _EventSettingsPage(event: event)));
    final rows = [
      if (sections.shows(GuestSection.presentes) && _routeAllowed('/gift-list', perms))
        KitRow(title: 'Presentes', sub: 'Lista e envelope', chevron: true, onTap: () => context.push('/gift-list')),
      if (_routeAllowed('/guest-page', perms))
        KitRow(title: 'Página dos convidados', sub: 'O que os convidados veem', chevron: true, onTap: () => context.push('/guest-page')),
    ];
    return SectionFrame(title: 'Gerir', children: [
      if (rows.isNotEmpty) ...[
        KitGroup(rows),
        const SizedBox(height: 12),
        const Divider(height: 2, thickness: 2, color: AppTheme.sectionLine),
      ],
      SnappyTap(
        onTap: settings,
        child: ConstrainedBox(
          constraints: const BoxConstraints(minHeight: 72),
          child: Row(children: [
            const Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                Text('Definições do evento', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                SizedBox(height: 2),
                Text('Detalhes, convidados, conteúdo e arquivo', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
            Semantics(
              button: true,
              label: 'Definições do evento',
              child: Container(
                width: 44,
                height: 44,
                decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
                child: const Icon(Hi.cog6Tooth, size: 20, color: Colors.white),
              ),
            ),
          ]),
        ),
      ),
    ]);
  }
}


/// Grupo do evento no topo do painel do organizador, como no do convidado
/// (pedido 2026-11-25): o balão com o número por ler; abre o grupo.
Future<void> _openEventGroup(BuildContext context, WidgetRef ref, String eventId) async {
  final g = await openEventGroup(eventId);
  if (!context.mounted) return;
  if (g != null) {
    await context.push('/group/${g.id}', extra: g);
  } else {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('O grupo do evento ainda não está disponível.')),
    );
  }
  ref.invalidate(eventGroupUnreadProvider(eventId));
}
