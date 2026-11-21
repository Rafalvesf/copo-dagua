import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/events/event_pass.dart';
import '../../../core/gifts/gift_shop.dart';
import '../../../core/guests/guest_controller.dart';
import '../../../core/home/home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/seating/seating_controller.dart';
import '../../../core/wedding/guest_facing.dart';
import '../../../core/wedding/organizers.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../core/partners/partner_providers.dart' show PartnerPickerArgs;
import '../../guests/screens/guests_list_screen.dart' show shareWeddingInvite;

/// O que os convidados veem (programa, dress code, cores, presentes) — para
/// o painel do organizador saber o que ainda falta.
final orgGuestFacingProvider = FutureProvider.autoDispose.family<GuestFacingInfo, String>(
  (ref, weddingId) => loadGuestFacingInfo(weddingId),
);

/// As categorias que cada tipo de evento costuma precisar (aprovado pelo
/// Rafael, 2026-11-21). Cada grupo fica tratado com qualquer uma das
/// categorias (p. ex. espaço **ou** restaurante). Sem lista: só «Ver
/// parceiros» genérico.
const _wedding = [
  [('venue', 'Espaço')],
  [('catering', 'Catering')],
  [('photography', 'Fotografia')],
  [('music_dj', 'Música')],
  [('cake', 'Bolo')],
  [('flowers_decor', 'Flores')],
];
const _placeOrRestaurant = [('venue', 'Espaço'), ('restaurants', 'Restaurante')];

List<List<(String, String)>> orgCategoryGroups(EventType t) => switch (t) {
      EventType.wedding || EventType.vowRenewal => _wedding,
      EventType.baptism || EventType.communion => const [
          _placeOrRestaurant,
          [('cake', 'Bolo')],
          [('photography', 'Fotografia')],
          [('flowers_decor', 'Decoração')],
        ],
      EventType.birthday || EventType.party => const [
          _placeOrRestaurant,
          [('cake', 'Bolo')],
          [('music_dj', 'Música'), ('photobooth_entertainment', 'Animação'), ('kids_entertainment', 'Animação')],
        ],
      EventType.engagement || EventType.babyShower => const [
          [('restaurants', 'Restaurante'), ('venue', 'Espaço')],
          [('cake', 'Bolo')],
          [('flowers_decor', 'Decoração')],
        ],
      EventType.graduation => const [
          [('venue', 'Espaço')],
          [('music_dj', 'Música')],
          [('transport', 'Transporte')],
        ],
      EventType.corporate => const [
          _placeOrRestaurant,
          [('catering', 'Catering')],
          [('transport', 'Transporte')],
        ],
      _ => const [],
    };

// Os rótulos das categorias nas reservas (`partner_categories.label_pt`).
const _labels = {
  'venue': 'Espaço / Quinta',
  'restaurants': 'Restaurantes',
  'catering': 'Catering',
  'photography': 'Fotografia',
  'music_dj': 'Música / DJ',
  'cake': 'Bolo',
  'flowers_decor': 'Flores e Decoração',
  'photobooth_entertainment': 'Fotobooth e Animação',
  'kids_entertainment': 'Animação Infantil',
  'transport': 'Transporte',
};

String _join(List<String> xs) => xs.length <= 1 ? xs.join() : '${xs.sublist(0, xs.length - 1).join(', ')} e ${xs.last}';

/// «Sugestões» do painel do organizador (pedido do Rafael, 2026-11-21):
/// nunca repetem o «Para fazer» — só o que ainda não começou. Cada uma só
/// aparece quando se aplica; sem nenhuma, a secção não aparece.
class OrgSuggestions extends ConsumerWidget {
  final Wedding wedding;

  /// Depois do evento (só «Agradecer aos convidados»).
  final bool past;

  /// Escolher a foto de capa (o mesmo que tocar na capa).
  final VoidCallback? onCover;
  const OrgSuggestions({super.key, required this.wedding, this.past = false, this.onCover});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final w = wedding;
    final rows = <Widget>[];
    if (past) {
      rows.add(KitRow(
        title: 'Agradecer aos convidados',
        sub: 'Uma mensagem para todos os que foram',
        chevron: true,
        onTap: () => context.push('/groups/${w.id}'),
      ));
    } else {
      final info = ref.watch(orgGuestFacingProvider(w.id)).value;
      final bookings = [
        for (final b in ref.watch(coupleBookingsProvider).value ?? const <CoupleBooking>[])
          if (b.weddingId == w.id && b.status != BookingStatus.recusado) b,
      ];
      final proposals = [
        for (final p in ref.watch(pendingProposalsProvider).value ?? const <ReceivedProposal>[])
          if (p.weddingId == w.id) p,
      ];
      final started = {
        for (final b in bookings) ?b.category,
        for (final p in proposals) ?p.category,
      };
      // 1 · Ver parceiros: as categorias do tipo de evento ainda sem reserva.
      final groups = orgCategoryGroups(w.eventType);
      final missing = [
        for (final g in groups)
          if (!g.any((c) => started.contains(_labels[c.$1]))) g.first,
      ];
      if (groups.isEmpty) {
        if (bookings.isEmpty) {
          rows.add(KitRow(
            title: 'Ver parceiros',
            sub: 'Procura o que precisas para o evento',
            chevron: true,
            onTap: () => context.push('/partners'),
          ));
        }
      } else if (missing.isNotEmpty) {
        final names = [for (final m in missing.take(2)) m.$2.toLowerCase()];
        rows.add(KitRow(
          title: 'Ver parceiros',
          sub: bookings.isEmpty ? 'Começa por ${_join(names)}' : 'Ainda falta ${_join(names)}',
          chevron: true,
          onTap: () => context.push('/partners', extra: PartnerPickerArgs(categorySlug: missing.first.$1)),
        ));
      }

      final guests = ref.watch(guestsControllerProvider).guests;
      // 2 · Partilhar o convite: há convidados mas ninguém respondeu.
      if (guests.isNotEmpty && guests.every((g) => g.rsvpRespondedAt == null)) {
        rows.add(KitRow(
          title: 'Partilhar o convite',
          sub: 'Ainda ninguém respondeu',
          chevron: true,
          onTap: () => shareWeddingInvite(context, w),
        ));
      }
      if (info != null) {
        // 3 · Juntar o local.
        if (w.venue?.trim().isNotEmpty != true && info.venueAddress?.trim().isNotEmpty != true) {
          rows.add(KitRow(
            title: 'Juntar o local',
            sub: 'Sem ele, os convidados não têm «Como chegar»',
            chevron: true,
            onTap: () => context.push('/guest-page'),
          ));
        }
        // «Montar o programa» não entra: a secção Programa do painel já o
        // pede quando está vazia (sem repetir, 2026-11-21).
        // 6 · Dress code.
        if (info.dressCode?.trim().isNotEmpty != true && info.themeColors.isEmpty) {
          rows.add(KitRow(
            title: 'Dress code',
            sub: 'Ainda sem estilo nem cores',
            chevron: true,
            onTap: () => context.push('/guest-page'),
          ));
        }
      }
      final sections = ref.watch(guestSectionsProvider(w.id)).value ?? const GuestSections();
      // 5 · Revelar as mesas: todos os que vão já estão sentados, mas os
      // convidados ainda não veem a mesa (só a veem perto do dia).
      final tables = ref.watch(seatingControllerProvider).tables;
      final going = guests.where((g) => g.rsvpStatus == RsvpStatus.confirmed).map((g) => g.id).toSet();
      final seated = {for (final t in tables) ...t.guestIds};
      if (sections.shows(GuestSection.mesa) &&
          tables.isNotEmpty &&
          going.isNotEmpty &&
          going.every(seated.contains) &&
          !sections.tableVisible(w.weddingDate)) {
        rows.add(KitRow(
          title: 'Revelar as mesas',
          sub: 'Já estão todos sentados',
          chevron: true,
          onTap: () => context.push('/guest-page'),
        ));
      }
      // 7 · Lista de presentes: ligada mas vazia.
      if (sections.shows(GuestSection.presentes)) {
        final items = ref.watch(giftListProvider(w.id)).value;
        final hasOther = info != null && (info.giftListUrl?.isNotEmpty == true || info.giftIban?.isNotEmpty == true);
        if (items != null && items.isEmpty && !hasOther) {
          rows.add(KitRow(
            title: 'Lista de presentes',
            sub: 'Está ligada, mas ainda vazia',
            chevron: true,
            onTap: () => context.push('/gift-list'),
          ));
        }
      }
      // 8 · Pôr foto de capa.
      if (w.coverPhotoUrl?.isNotEmpty != true) {
        rows.add(KitRow(
          title: 'Pôr foto de capa',
          sub: 'É a primeira coisa que os convidados veem',
          chevron: true,
          onTap: onCover,
        ));
      }
      // 9 · Convidar quem organiza contigo: só um organizador.
      final organizers = ref.watch(weddingOrganizersProvider(w.id)).value;
      if (organizers != null && organizers.length <= 1) {
        rows.add(KitRow(
          title: 'Convidar quem organiza contigo',
          sub: 'Para dividirem as tarefas',
          chevron: true,
          onTap: () => context.push('/organizadores'),
        ));
      }
    }
    if (rows.isEmpty) return const SizedBox.shrink();
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      const KitCaps('Sugestões'),
      KitGroup(rows),
    ]);
  }
}
