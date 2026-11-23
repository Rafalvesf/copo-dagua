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
import '../../partners/widgets/partner_cards.dart' show InfoTag;
import '../../profile/profile_widgets.dart' show ProfileButton;

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
  const ExternalEventPhoto(this.event, {super.key, this.iconSize = 56});

  @override
  Widget build(BuildContext context) => event.imageUrl != null
      ? SizedNetworkImage(event.imageUrl!, fit: BoxFit.cover)
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
      body: Stack(children: [
        ListView(
          padding: EdgeInsets.only(bottom: 120 + bottom),
          children: [
            SizedBox(height: 200 + top, child: ExternalEventPhoto(e, iconSize: 64)),
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
      ]),
    );
  }
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
