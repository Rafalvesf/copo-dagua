import 'package:copo_dagua_app/shared/widgets/skeleton.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:share_plus/share_plus.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../core/events/external_events.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/hero_icons.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/dense_card.dart' show PriceBox;
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/navigation_sheet.dart';
import '../../../shared/widgets/page_kit.dart' show KitCaps;
import '../../../shared/widgets/sized_network_image.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/venue_map.dart';
import '../../../shared/widgets/reduced_top_bar.dart';
import '../../partners/widgets/partner_cards.dart' show InfoTag;
import '../../profile/profile_widgets.dart' show ProfileButton;
import '../../partners/widgets/partner_cards.dart' show PartnerCarousel;
import '../../partners/screens/partner_detail_screen.dart' show PartnerDetailScreen;
import '../../../core/partners/partner_providers.dart' show partnerByIdProvider;
import '../../../core/partners/promotions.dart' show trackPromotionClick;
import 'package:go_router/go_router.dart';
import '../../../shared/widgets/v2_kit.dart' show softShadow;

const _months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
const _weekdays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

/// «Sáb, 19 dez» ou «27 nov – 3 jan».
String externalEventWhen(ExternalEvent e) {
  final a = e.startsOn;
  final b = e.endsOn;
  if (b == null || b == a) return '${_weekdays[a.weekday - 1]}, ${a.day} ${_months[a.month - 1]}';
  return '${a.day} ${_months[a.month - 1]} – ${b.day} ${_months[b.month - 1]}';
}

/// O preço como no §6 (rótulo + valor): ENTRADA Grátis / DESDE 8 € / ENTRADA Paga.
(String, String) externalEventPrice(ExternalEvent e) {
  if (e.isFree) return ('ENTRADA', 'Grátis');
  if (e.priceFrom != null) return ('DESDE', euros(e.priceFrom!));
  return ('ENTRADA', 'Paga');
}

IconData externalEventIcon(String category) => switch (category) {
      'concerto' => Hi.musicalNote,
      'mercado' => Hi.shoppingBag,
      'feira' => Hi.sparkles,
      'festival' => Hi.musicalNote,
      'desporto' => Hi.trophy,
      'cultura' => Hi.buildingLibrary,
      _ => Hi.sparkles,
    };

/// Foto do evento real, ou o cinzento escuro com o símbolo a branco
/// (mockup «Perfis com contraste», 2026-11-23).
class ExternalEventPhoto extends StatelessWidget {
  final ExternalEvent event;
  final double iconSize;
  const ExternalEventPhoto(this.event, {super.key, this.iconSize = 56}) : creditInside = false;

  /// O crédito do autor dentro da foto, em baixo à esquerda (cartões).
  final bool creditInside;
  const ExternalEventPhoto.card(this.event, {super.key, this.iconSize = 56}) : creditInside = true;

  @override
  Widget build(BuildContext context) => event.imageUrl != null
      ? Stack(fit: StackFit.expand, children: [
          SizedNetworkImage(event.imageUrl!, fit: BoxFit.cover),
          if (creditInside && event.imageCredit != null) ...[
            const DecoratedBox(
              decoration: BoxDecoration(
                gradient: LinearGradient(
                  begin: Alignment.center,
                  end: Alignment.bottomCenter,
                  colors: [Color(0x00000000), Color(0x73000000)],
                ),
              ),
            ),
            Positioned(
              left: 12,
              right: 60,
              bottom: 8,
              child: Text('Foto: ${event.imageCredit}',
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 11, color: Colors.white)),
            ),
          ],
        ])
      : Container(
          color: const Color(0xFF3A3733),
          alignment: Alignment.center,
          child: Icon(externalEventIcon(event.category), size: iconSize, color: Colors.white),
        );
}

/// Página de um evento real (pedido do Rafael, 2026-11-23): o mesmo desenho
/// da página do parceiro — foto 200 com os botões redondos, a cabeça sem
/// caixa, «Quando», «Onde fica» e a barra fixa com o preço. Só informativa:
/// os pagos levam ao site do organizador para comprar os bilhetes.
class ExternalEventScreen extends ConsumerWidget {
  final String id;
  const ExternalEventScreen({super.key, required this.id});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final async = ref.watch(externalEventsProvider);
    final e = async.value?.where((x) => x.id == id).firstOrNull;
    final top = MediaQuery.paddingOf(context).top;
    final bottom = MediaQuery.paddingOf(context).bottom;

    if (e == null && async.isLoading) return const SkeletonEventPanel(cover: 200);
    if (e == null) {
      return GradientScaffold(
        background: AppBackground.subtle,
        body: Center(
          child: async.isLoading
              ? const CircularProgressIndicator()
              : const Padding(
                  padding: EdgeInsets.all(AppTheme.screenMargin),
                  child: Text('Este evento já não está disponível.',
                      textAlign: TextAlign.center, style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
                ),
        ),
      );
    }

    final (priceLabel, priceValue) = externalEventPrice(e);
    final place = [?e.venue, e.city].join(' · ');
    Future<void> open(String url) async {
      final ok = await launchUrl(Uri.parse(url), mode: LaunchMode.externalApplication);
      if (!ok && context.mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível abrir o site.')));
    }

    void directions() => showNavigationSheet(context,
        label: e.title, address: e.address ?? place, latitude: e.latitude, longitude: e.longitude);

    // Botão da barra: comprar no site (pagos), ou como lá chegar (grátis).
    final (String action, VoidCallback onAction) = !e.isFree && e.ticketUrl != null
        ? ('Comprar bilhetes', () => open(e.ticketUrl!))
        : !e.isFree && e.sourceUrl != null
            ? ('Ver no site', () => open(e.sourceUrl!))
            : ('Como chegar', directions);

    return GradientScaffold(
      background: AppBackground.subtle,
      body: _ScrollHost(builder: (context, scroll) => Stack(children: [
        ListView(
          controller: scroll,
          padding: EdgeInsets.only(bottom: 120 + bottom),
          children: [
            SizedBox(height: 200 + top, child: ExternalEventPhoto(e, iconSize: 64)),
            if (e.imageUrl != null && e.imageCredit != null)
              Padding(
                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 6, AppTheme.screenMargin, 0),
                child: Text('Foto: ${e.imageCredit}', style: const TextStyle(fontSize: 11, color: AppTheme.inkMuted)),
              ),
            Padding(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 18, AppTheme.screenMargin, 0),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Wrap(spacing: 6, runSpacing: 6, children: [
                  InfoTag(e.categoryLabel),
                  InfoTag(e.isFree ? 'Grátis' : 'Pago', green: e.isFree),
                ]),
                const SizedBox(height: 12),
                Text(e.title, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 4),
                Text(place, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                Text([externalEventWhen(e), ?e.timeLabel].join(' · '),
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                if (e.description?.isNotEmpty == true) ...[
                  const SizedBox(height: 12),
                  Text(e.description!,
                      textAlign: TextAlign.justify,
                      style: const TextStyle(fontSize: 14, height: 1.45, color: AppTheme.ink)),
                ],
              ]),
            ),
            // Vais com amigos? Cria o plano na À Nossa! (mockup B).
            Padding(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
              child: _PlanCard(event: e),
            ),
            if (e.latitude != null && e.longitude != null) _NearPartners(lat: e.latitude!, lng: e.longitude!),
            const Padding(
              padding: EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
              child: KitCaps('Quando e quanto'),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
              child: Column(children: [
                _Row('Data', externalEventWhen(e)),
                if (e.timeLabel != null) _Row('Hora', e.timeLabel!),
                _Row('Entrada', e.isFree ? 'Grátis' : (e.priceNote ?? 'Paga')),
                if (e.organizer != null) _Row('Organização', e.organizer!, last: true),
              ]),
            ),
            const Padding(
              padding: EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
              child: KitCaps('Onde fica'),
            ),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
              child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                Text(e.venue ?? e.city, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                if (e.address != null)
                  Text(e.address!, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                const SizedBox(height: 12),
                VenueMap(label: e.venue ?? e.title, address: e.address ?? place, latitude: e.latitude, longitude: e.longitude),
                const SizedBox(height: 12),
                Row(children: [
                  Expanded(
                    child: ProfileButton('Copiar morada', onTap: () {
                      Clipboard.setData(ClipboardData(text: e.address ?? place));
                      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Morada copiada.')));
                    }),
                  ),
                  const SizedBox(width: 10),
                  Expanded(child: ProfileButton('Abrir mapa', dark: true, onTap: directions)),
                ]),
              ]),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 0),
              child: Text(
                e.isFree
                    ? 'Informação de agenda pública. Confirma a data e a hora perto do dia.'
                    : 'A À Nossa! não vende bilhetes para este evento: compram-se no site do organizador. Confirma os preços lá.',
                style: const TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted),
              ),
            ),
            if (e.sourceUrl != null)
              Padding(
                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 0),
                child: Align(
                  alignment: Alignment.centerLeft,
                  child: SizedBox(width: 140, child: ProfileButton('Ver a fonte', height: 36, onTap: () => open(e.sourceUrl!))),
                ),
              ),
          ],
        ),
        // Topo reduzido (pedido 2026-11-23): depois da foto, a barra com a
        // foto escurecida por trás, o nome e a data; a seta e o partilhar
        // ficam por cima, no mesmo sítio.
        Positioned(
          left: 0,
          right: 0,
          top: 0,
          child: ReducedTopBar(
            scroll: scroll,
            showAfter: 140,
            leftReserve: AppTheme.screenMargin + 44 + 10,
            background: ExternalEventPhoto(e, iconSize: 24),
            thumb: ExternalEventPhoto(e, iconSize: 16),
            title: e.title,
            meta: [externalEventWhen(e), e.city].join(' · '),
            actions: const [SizedBox(width: 44)],
          ),
        ),
        // Botões redondos pretos com aro branco (fundo escuro), fixos.
        Positioned(
          left: AppTheme.screenMargin,
          right: AppTheme.screenMargin,
          top: top + 12,
          child: Row(children: [
            _Round(Hi.chevronLeft, 'Voltar', () => Navigator.of(context).maybePop()),
            const Spacer(),
            _Round(Hi.arrowUpOnSquare, 'Partilhar', () => SharePlus.instance.share(ShareParams(
                  text: '${e.title} · ${externalEventWhen(e)} · $place${e.sourceUrl != null ? '\n${e.sourceUrl}' : ''}',
                  subject: e.title,
                ))),
          ]),
        ),
        // Barra fixa: o preço (sem caixa) e a ação.
        Positioned(
          left: AppTheme.screenMargin,
          right: AppTheme.screenMargin,
          bottom: bottom > 20 ? bottom : 20,
          child: Container(
            padding: const EdgeInsets.all(12),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(35),
              boxShadow: AppTheme.navBarShadow,
            ),
            child: Row(children: [
              Padding(padding: const EdgeInsets.symmetric(horizontal: 8), child: PriceBox(priceLabel, priceValue, outlined: true)),
              const SizedBox(width: 8),
              Expanded(child: ProfileButton(action, dark: true, height: 52, onTap: onAction)),
            ]),
          ),
        ),
      ])),
    );
  }
}

/// Dá um [ScrollController] à página (para o topo reduzido).
class _ScrollHost extends StatefulWidget {
  final Widget Function(BuildContext context, ScrollController scroll) builder;
  const _ScrollHost({required this.builder});

  @override
  State<_ScrollHost> createState() => _ScrollHostState();
}

class _ScrollHostState extends State<_ScrollHost> {
  final _scroll = ScrollController();

  @override
  void dispose() {
    _scroll.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => widget.builder(context, _scroll);
}

class _Round extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;
  const _Round(this.icon, this.label, this.onTap);

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        semanticLabel: label,
        child: Container(
          width: 44,
          height: 44,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: AppTheme.ink,
            shape: BoxShape.circle,
            border: Border.all(color: Colors.white, width: 2),
          ),
          child: Icon(icon, size: 20, color: Colors.white),
        ),
      );
}

/// Linha de 48: rótulo 13 à esquerda, valor 14 negrito à direita.
class _Row extends StatelessWidget {
  final String label;
  final String value;
  final bool last;
  const _Row(this.label, this.value, {this.last = false});

  @override
  Widget build(BuildContext context) => Container(
        constraints: const BoxConstraints(minHeight: 48),
        decoration: BoxDecoration(border: last ? null : const Border(bottom: BorderSide(color: Color(0xFFE3E3E3)))),
        child: Row(children: [
          Text(label, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          const SizedBox(width: 12),
          Expanded(
            child: Text(value,
                textAlign: TextAlign.right,
                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
        ]),
      );
}

/// «Vais com amigos?» (mockup «Página do evento real», B): cria um evento na
/// À Nossa! com o nome, o dia e o local já postos — a seguir convidam-se os
/// amigos e aparecem as sugestões de onde jantar e como ir.
class _PlanCard extends StatelessWidget {
  final ExternalEvent event;
  const _PlanCard({required this.event});

  @override
  Widget build(BuildContext context) {
    final e = event;
    final type = switch (e.category) {
      'concerto' => 'concert',
      'festival' => 'festival',
      'festa' => 'party',
      _ => 'other',
    };
    final d = e.startsOn;
    final date = '${d.year}-${d.month.toString().padLeft(2, '0')}-${d.day.toString().padLeft(2, '0')}';
    final uri = Uri(path: '/novo-evento', queryParameters: {
      'tipo': type,
      'nome': e.title,
      'data': date,
      'local': [?e.venue, e.city].join(', '),
    });
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22), boxShadow: softShadow),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        const Text('Vais com amigos?', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 4),
        const Text('Faz disto um plano: o dia e o local já ficam postos, convidas quem vai e vês onde jantar antes.',
            style: TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted)),
        const SizedBox(height: 12),
        ProfileButton('Criar o plano', height: 36, onTap: () => context.push(uri.toString())),
      ]),
    );
  }
}

/// «Perto deste evento · em destaque» (migração 223): o mesmo cartão da
/// página Parceiros; o destaque pago primeiro e o clique conta (+6 %).
class _NearPartners extends ConsumerWidget {
  final double lat;
  final double lng;
  const _NearPartners({required this.lat, required this.lng});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final near = ref.watch(partnersNearEventProvider((lat: lat, lng: lng))).value ?? const [];
    if (near.isEmpty) return const SizedBox.shrink();
    final partners = [for (final n in near) ?ref.watch(partnerByIdProvider(n.partnerId)).value];
    if (partners.isEmpty) return const SizedBox.shrink();
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      const Padding(
        padding: EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        child: KitCaps('Perto deste evento · em destaque'),
      ),
      PartnerCarousel(
        partners: partners,
        highlighted: {for (final n in near) if (n.paid) n.partnerId},
        onTap: (p) async {
          if (near.any((n) => n.partnerId == p.id && n.paid)) trackPromotionClick(p.id);
          await PartnerDetailScreen.show(context, p);
        },
      ),
    ]);
  }
}
