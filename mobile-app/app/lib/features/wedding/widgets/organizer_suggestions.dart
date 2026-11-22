import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/budget/budget_controller.dart';
import '../../../core/chat/group_chat.dart' show openEventGroup;
import '../../../core/events/events_providers.dart' show eventEntryProvider;
import '../../../core/guest_offers/guest_offers.dart' show guestOffersEnabledProvider, guestOffersProvider;
import '../../../core/reviews/review_providers.dart' show reviewForBookingProvider;
import '../../../core/supabase/supabase_config.dart';
import '../../../core/events/event_pass.dart';
import '../../../shared/widgets/island_sheet.dart' show showIslandDialog, IslandAlert;
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

/// Quantas pessoas que sigo ainda não estão no evento (189).
final orgFollowedCountProvider = FutureProvider.autoDispose.family<int, String>((ref, weddingId) async {
  try {
    final rows = await supabase.rpc('event_followed_people', params: {'p_wedding_id': weddingId});
    return (rows as List).length;
  } catch (_) {
    return 0;
  }
});

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

/// «Revelar as mesas» (pedido do Rafael, 2026-11-21): pergunta e, se sim,
/// os convidados passam a ver a mesa deles já (em vez de perto do dia).
Future<void> _revealTables(BuildContext context, WidgetRef ref, String weddingId, GuestSections sections) async {
  final ok = await showIslandDialog<bool>(
    context: context,
    builder: (ctx) => IslandAlert(
      title: const Text('Revelar as mesas?'),
      content: const Text('Os convidados passam a ver já a mesa deles e quem lá está sentado.'),
      actions: [
        OutlinedButton(onPressed: () => Navigator.of(ctx).pop(false), child: const Text('Agora não')),
        FilledButton(onPressed: () => Navigator.of(ctx).pop(true), child: const Text('Revelar')),
      ],
    ),
  );
  if (ok != true || !context.mounted) return;
  final messenger = ScaffoldMessenger.of(context);
  try {
    await saveGuestSections(weddingId, sections.withOption('opt_table_reveal', 'now'));
    ref.invalidate(guestSectionsProvider(weddingId));
    messenger.showSnackBar(const SnackBar(content: Text('As mesas já estão à vista dos convidados.')));
  } catch (_) {
    messenger.showSnackBar(const SnackBar(content: Text('Não deu para revelar as mesas. Tenta outra vez.')));
  }
}

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
        sub: 'Uma mensagem no grupo do evento',
        chevron: true,
        // O grupo do evento nasce com o evento, com toda a gente (212).
        onTap: () async {
          final messenger = ScaffoldMessenger.of(context);
          final g = await openEventGroup(w.id);
          if (!context.mounted) return;
          if (g == null) {
            messenger.showSnackBar(const SnackBar(content: Text('O grupo do evento ainda não está disponível.')));
            return;
          }
          context.push('/group/${g.id}', extra: g);
        },
      ));
      // Avaliar os parceiros: as reservas feitas que ainda não avaliei.
      final done = [
        for (final b in ref.watch(coupleBookingsProvider).value ?? const <CoupleBooking>[])
          if (b.weddingId == w.id && (b.status == BookingStatus.confirmado || b.status == BookingStatus.concluido)) b,
      ];
      final toReview = [
        for (final b in done)
          if (ref.watch(reviewForBookingProvider(b.id)).hasValue && ref.watch(reviewForBookingProvider(b.id)).value == null) b,
      ];
      if (toReview.isNotEmpty) {
        rows.add(KitRow(
          title: 'Avaliar os parceiros',
          sub: _join([for (final b in toReview.take(2)) b.partnerName]) + (toReview.length > 2 ? ' e mais ${toReview.length - 2}' : ''),
          chevron: true,
          onTap: () => context.push('/bookings'),
        ));
      }
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
      // Convidar quem segues: pessoas que sigo e ainda não estão no evento.
      final followed = ref.watch(orgFollowedCountProvider(w.id)).value ?? 0;
      if (followed > 0) {
        rows.add(KitRow(
          title: 'Convidar quem segues',
          sub: '$followed ${followed == 1 ? 'pessoa que segues ainda não está' : 'pessoas que segues ainda não estão'} no evento',
          chevron: true,
          onTap: () => context.push('/guests/convidar'),
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
        // Juntar a hora de início.
        if (info.ceremonyTime?.trim().isNotEmpty != true) {
          rows.add(KitRow(
            title: 'Juntar a hora',
            sub: 'Os convidados veem a que horas começa',
            chevron: true,
            onTap: () => context.push('/guest-page'),
          ));
        }
        // Escrever as boas-vindas.
        if (info.welcomeMessage?.trim().isNotEmpty != true) {
          rows.add(KitRow(
            title: 'Escrever as boas-vindas',
            sub: 'A primeira coisa que os convidados leem',
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
      // Definir o orçamento.
      final budget = ref.watch(budgetControllerProvider).budget;
      if ((budget?.total ?? 0) <= 0 && (budget?.spent ?? 0) <= 0 && (w.estimatedBudget ?? 0) <= 0) {
        rows.add(KitRow(
          title: 'Definir o orçamento',
          sub: 'Para saberes quanto já gastaste',
          chevron: true,
          onTap: () => context.push('/budget'),
        ));
      }
      // Sentar os convidados: só num espaço com mesas separadas (os
      // restaurantes juntam mesas para o grupo todo) e ainda sem mesas.
      final seatingNow = ref.watch(seatingControllerProvider);
      if (seatingNow.hasVenue &&
          seatingNow.venueTypes.isNotEmpty &&
          seatingNow.tables.isEmpty &&
          guests.any((g) => g.rsvpStatus == RsvpStatus.confirmed)) {
        rows.add(KitRow(
          title: 'Sentar os convidados',
          sub: 'O espaço tem mesas separadas',
          chevron: true,
          onTap: () => context.push('/seating'),
        ));
      }
      // Onde ficar e como lá chegar: a «Estadia» ligada, mas sem opções.
      if (sections.shows(GuestSection.estadia) && (ref.watch(guestOffersEnabledProvider).value ?? false)) {
        final offers = ref.watch(guestOffersProvider(w.id)).value;
        if (offers != null && offers.isEmpty) {
          rows.add(KitRow(
            title: 'Onde ficar e como lá chegar',
            sub: 'A «Estadia» está ligada, mas sem opções',
            chevron: true,
            onTap: () => context.push('/guest-stay/${w.id}'),
          ));
        }
      }
      // Pôr bilhetes à venda: festas, concertos, festivais e noites.
      const ticketed = {EventType.party, EventType.concert, EventType.festival, EventType.nightlife};
      if (ticketed.contains(w.eventType)) {
        final entry = ref.watch(eventEntryProvider(w.id)).value;
        if (entry != null && !entry.paid) {
          rows.add(KitRow(
            title: 'Pôr bilhetes à venda',
            sub: 'A entrada ainda é livre',
            chevron: true,
            onTap: () => context.push('/bilhetes'),
          ));
        }
      }
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
          onTap: () => _revealTables(context, ref, w.id, sections),
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
