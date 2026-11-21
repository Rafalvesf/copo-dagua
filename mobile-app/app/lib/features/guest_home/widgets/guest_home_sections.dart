import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/v2_kit.dart' show V2Avatar, softCard;
import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/guest_home/event_tables.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/home/home_providers.dart' show amountWithCommission, guestShareFeePct;
import '../../../core/payments/payments.dart' show PayArgs;
import '../../../shared/money.dart';
import '../../../shared/widgets/alert_outline.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/wedding_venue.dart';
import '../../../shared/widgets/navigation_sheet.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/sized_network_image.dart';
import '../../../shared/widgets/partner_notification_bell.dart';
import '../../../shared/utils_clipboard.dart';
import 'guest_events_pill.dart';

// Ecrãs do convidado redesenhados (canvas "Convidados · Ecrãs
// melhorados", 2026-11-07): capa verde, atalhos coloridos, a tua resposta,
// o dia, local; no próprio dia "a decorrer", mesa em grande e fotos.

const guestHeroGreen = Color(0xFF3F5A3B);
const guestButtonGreen = Color(0xFF4F6B4A);
const guestPageGradient = LinearGradient(
  begin: Alignment.topCenter,
  end: Alignment.bottomCenter,
  colors: [Color(0xFFE9E8E4), Colors.white],
);

/// Cartão branco com a sombra suave, sem linha à volta (DESIGN.md §4/§5).
BoxDecoration guestCard({double radius = 22}) => BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.circular(radius),
      boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
    );

/// "17:00", "17h00", "17h" → minutos desde a meia-noite.
int? programMinutes(String raw) {
  final m = RegExp(r'(\d{1,2})\s*[:hH]\s*(\d{2})?').firstMatch(raw);
  if (m == null) return null;
  final h = int.parse(m.group(1)!);
  final min = int.tryParse(m.group(2) ?? '') ?? 0;
  if (h > 23 || min > 59) return null;
  return h * 60 + min;
}


const _weekdays = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'];

class _Circles extends StatelessWidget {
  const _Circles();
  @override
  Widget build(BuildContext context) => IgnorePointer(
        child: Stack(children: [
          Positioned(right: -50, top: -60, child: _circle(180, 0x14)),
          Positioned(right: 40, bottom: -70, child: _circle(140, 0x0F)),
          Positioned(left: -40, bottom: 30, child: _circle(90, 0x0A)),
        ]),
      );
  Widget _circle(double s, int a) => Container(
        width: s,
        height: s,
        decoration: BoxDecoration(shape: BoxShape.circle, color: Color((a << 24) | 0xFFFFFF)),
      );
}

/// Capa verde com contagem e "Vais com …".
class GuestHero extends StatelessWidget {
  final GuestWedding wedding;
  final String place;
  final String? goingWith;
  const GuestHero({super.key, required this.wedding, required this.place, this.goingWith});

  @override
  Widget build(BuildContext context) {
    final date = wedding.weddingDate;
    final today = DateTime.now();
    final days = date == null
        ? null
        : DateTime(date.year, date.month, date.day).difference(DateTime(today.year, today.month, today.day)).inDays;
    // Mockup «Páginas do convidado» → Início (2026-11-14): tipo em
    // maiúsculas, nome do evento 28 e a data/hora/local por baixo.
    final when = [
      if (date != null) '${date.day} ${monthNamesPt[date.month - 1].substring(0, 3).toLowerCase()} ${date.year}',
      if (wedding.ceremonyTime?.isNotEmpty == true) wedding.ceremonyTime!,
      if (place.isNotEmpty) place,
    ].join(' · ');
    return Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
      Text(wedding.eventType.label.toUpperCase(),
          style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
      const SizedBox(height: 6),
      Text(wedding.displayNames,
          style: const TextStyle(fontSize: 28, height: 1.15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      if (when.isNotEmpty) ...[
        const SizedBox(height: 6),
        Text(
          [when, if (days != null && days > 0) days == 1 ? 'falta 1 dia' : 'faltam $days dias', ?goingWith].join(' · '),
          style: const TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted),
        ),
      ],
    ]);
  }
}

class GuestShortcut {
  final IconData icon;
  final String label;
  final String sub;
  final Color color;
  final VoidCallback onTap;
  const GuestShortcut(this.icon, this.label, this.sub, this.color, this.onTap);
}

/// Os atalhos em mosaicos 2×2 (pedido 2026-11-08: "passa os botões a
/// mosaicos"), com a cor de cada atalho.
class GuestShortcutsRow extends StatelessWidget {
  final List<GuestShortcut> items;
  const GuestShortcutsRow({super.key, required this.items});

  @override
  Widget build(BuildContext context) {
    if (items.isEmpty) return const SizedBox.shrink();
    return GridView.count(
      crossAxisCount: 2,
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      padding: EdgeInsets.zero,
      mainAxisSpacing: 12,
      crossAxisSpacing: 12,
      childAspectRatio: 1.35,
      children: [
        for (final it in items)
          SnappyTap(
            onTap: it.onTap,
            child: Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Container(
                  width: 40,
                  height: 40,
                  decoration: const BoxDecoration(color: AppTheme.background, shape: BoxShape.circle),
                  child: Icon(it.icon, size: 20, color: AppTheme.ink),
                ),
                const Spacer(),
                Text(it.label,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(it.sub,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
          ),
      ],
    );
  }
}

class _SectionTitle extends StatelessWidget {
  final String text;
  final String? action;
  final VoidCallback? onAction;
  const _SectionTitle(this.text, {this.action, this.onAction});
  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(bottom: 10),
        child: Row(children: [
          Expanded(child: Text(text, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink))),
          if (action != null)
            GestureDetector(
              onTap: onAction,
              child: Text(action!, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: guestButtonGreen)),
            ),
        ]),
      );
}

/// A tua resposta: tu e quem vem contigo, com menu e alergias.
class GuestAnswerCard extends ConsumerWidget {
  final Guest guest;
  final String weddingId;
  const GuestAnswerCard({super.key, required this.guest, required this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    void edit() => context.push('/guest-presenca/$weddingId');
    if (guest.rsvpStatus != RsvpStatus.confirmed) {
      final declined = guest.rsvpStatus == RsvpStatus.declined;
      return Container(
        padding: const EdgeInsets.all(16),
        decoration: guestCard(),
        child: Row(children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(declined ? 'Disseste que não vais' : 'Ainda não respondeste',
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 2),
              Text(declined ? 'Podes mudar a resposta.' : 'Diz aos anfitriões se vais.',
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          FilledButton(
            onPressed: edit,
            style: FilledButton.styleFrom(backgroundColor: AppTheme.ink, foregroundColor: Colors.white, shape: const StadiumBorder(), minimumSize: const Size(0, 36), padding: const EdgeInsets.symmetric(horizontal: 16), tapTargetSize: MaterialTapTargetSize.shrinkWrap, textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 13, fontWeight: FontWeight.w700), ),
            child: Text(declined ? 'Mudar' : 'Responder'),
          ),
        ]),
      );
    }
    final companions = ref.watch(guestCompanionsProvider(guest.id)).value ?? const <GuestCompanion>[];
    // Sem menu (2026-11-15): cada um escolhe no restaurante.
    String detail(String? menu, String? allergies) => allergies?.isNotEmpty == true ? allergies! : 'Sem alergias';
    final rows = <(String, String)>[
      ('Tu', detail(guest.menuSelection, guest.dietaryRestrictions)),
      for (final c in companions) (c.name, detail(c.menu, c.allergies.isEmpty ? null : c.allergies.join(', '))),
      if (companions.isEmpty && guest.plusOneName?.isNotEmpty == true) (guest.plusOneName!, 'Acompanhante'),
    ];
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      KitCaps(
        'A tua resposta',
        top: 10,
        trailing: GestureDetector(
          onTap: edit,
          child: const Text('Alterar', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: guestButtonGreen)),
        ),
      ),
      KitGroup([
        for (final (i, (name, sub)) in rows.indexed)
          KitRow(
            lead: V2Avatar(name, size: 44),
            title: name,
            sub: sub,
            trailing: i == 0 ? const KitTag('Vou') : null,
          ),
      ]),
    ]);
  }
}

/// O dia: os momentos do programa em cartões horizontais.
class GuestDayStrip extends StatelessWidget {
  final GuestWedding wedding;
  const GuestDayStrip({super.key, required this.wedding});

  @override
  Widget build(BuildContext context) {
    final items = wedding.program;
    if (items.isEmpty) return const SizedBox.shrink();
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      _SectionTitle('O dia', action: 'Ver tudo', onAction: () => context.push('/guest-wedding-details', extra: wedding)),
      SizedBox(
        height: 104,
        child: ListView.separated(
          scrollDirection: Axis.horizontal,
          clipBehavior: Clip.none,
          itemCount: items.length,
          separatorBuilder: (context, i) => const SizedBox(width: 10),
          itemBuilder: (context, i) => Container(
            width: 140,
            padding: const EdgeInsets.all(12),
            decoration: guestCard(radius: 18),
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(items[i].time, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w800, color: guestButtonGreen)),
              const SizedBox(height: 4),
              Text(items[i].title,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              Text(items[i].place,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
            ]),
          ),
        ),
      ),
    ]);
  }
}

/// Local com Como chegar e dress code à vista.
class GuestPlaceCard extends ConsumerWidget {
  final GuestWedding wedding;
  const GuestPlaceCard({super.key, required this.wedding});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final appVenue = (wedding.venueAddress?.isNotEmpty == true && wedding.venueLatitude != null)
        ? null
        : ref.watch(weddingVenueProvider(wedding.weddingId)).asData?.value;
    final name = wedding.venue?.isNotEmpty == true ? wedding.venue : (appVenue?.name ?? wedding.location);
    final address = wedding.venueAddress?.isNotEmpty == true
        ? wedding.venueAddress
        : (appVenue?.address ?? (wedding.venue?.isNotEmpty == true ? wedding.location : null));
    final lat = wedding.venueLatitude ?? (wedding.venueAddress?.isNotEmpty == true ? null : appVenue?.latitude);
    final lng = wedding.venueLongitude ?? (wedding.venueAddress?.isNotEmpty == true ? null : appVenue?.longitude);
    if (name?.isNotEmpty != true && address?.isNotEmpty != true) return const SizedBox.shrink();
    final title = name?.isNotEmpty == true ? name! : address!;
    // Mockup «Páginas do convidado» → Início (2026-11-15): «Como chegar»
    // antes dos quadrados, com «Abrir no mapa» e «Copiar morada».
    final copyable = address?.isNotEmpty == true ? address! : title;
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      const KitCaps('Como chegar', top: 0),
      Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        // Mockup «Páginas do convidado»: nome 16, local 13 e «Como chegar» 44.
        Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        if (address?.isNotEmpty == true && address != title)
          Text(address!, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        if (wedding.dressCode?.isNotEmpty == true) ...[
          const SizedBox(height: 10),
          Text('Dress code: ${wedding.dressCode}',
              style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ],
        const SizedBox(height: 12),
        Row(children: [
          Expanded(
            child: FilledButton(
              onPressed: () => showNavigationSheet(context, label: title, address: address, latitude: lat, longitude: lng),
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                minimumSize: const Size(0, 44),
                padding: const EdgeInsets.symmetric(horizontal: 12),
                shape: const StadiumBorder(),
                textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 14, fontWeight: FontWeight.w700),
              ),
              child: const Text('Abrir no mapa', maxLines: 1),
            ),
          ),
          const SizedBox(width: 8),
          Expanded(
            child: OutlinedButton(
              onPressed: () async {
                final messenger = ScaffoldMessenger.of(context);
                await copyText(copyable);
                messenger.showSnackBar(const SnackBar(content: Text('Morada copiada.')));
              },
              style: OutlinedButton.styleFrom(
                foregroundColor: AppTheme.ink,
                minimumSize: const Size(0, 44),
                padding: const EdgeInsets.symmetric(horizontal: 12),
                side: const BorderSide(color: AppTheme.ink, width: 1.5),
                shape: const StadiumBorder(),
                textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 14, fontWeight: FontWeight.w700),
              ),
              child: const Text('Copiar morada', maxLines: 1),
            ),
          ),
        ]),
      ]),
      ),
    ]);
  }
}

/// Capa do evento no topo do início do convidado (mockup 2026-11-15): a
/// foto escolhida pelo organizador (ou a cor do evento) até ao topo, por
/// trás das horas, com voltar e o sino por cima; o nome e a data num
/// painel que sobe por cima da foto.
class GuestCover extends StatelessWidget {
  final GuestWedding wedding;
  final Widget hero;
  const GuestCover({super.key, required this.wedding, required this.hero});

  @override
  Widget build(BuildContext context) {
    final inset = MediaQuery.paddingOf(context).top;
    final photo = wedding.coverPhotoUrl;
    final h = 260 + inset;
    return Stack(children: [
      SizedBox(
        height: h,
        width: double.infinity,
        child: photo == null
            ? ColoredBox(color: AppTheme.accentTint)
            : SizedNetworkImage(photo, fit: BoxFit.cover,
                errorBuilder: (context, error, stack) => ColoredBox(color: AppTheme.accentTint)),
      ),
      Positioned(
        left: AppTheme.screenMargin,
        right: AppTheme.screenMargin,
        top: inset + 12,
        child: const Row(children: [GuestEventsPill(), Spacer(), PartnerNotificationBell()]),
      ),
      Padding(
        padding: EdgeInsets.only(top: h - 28),
        child: Container(
          width: double.infinity,
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 22, AppTheme.screenMargin, 0),
          decoration: const BoxDecoration(
            color: AppTheme.background,
            borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
          ),
          child: hero,
        ),
      ),
    ]);
  }
}

/// Linha do grupo no estilo da aba Mensagens (2026-11-15): avatares
/// sobrepostos, nome 16 e uma linha por baixo.
class GuestGroupRow extends StatelessWidget {
  final VoidCallback onTap;
  const GuestGroupRow({super.key, required this.onTap});

  @override
  Widget build(BuildContext context) {
    Widget dot(Color c) => Container(
          width: 34,
          height: 34,
          decoration: BoxDecoration(color: c, shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2)),
        );
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      const KitCaps('Grupo do evento', top: 0),
      SnappyTap(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 14),
          decoration: softCard(radius: 22),
          child: Row(children: [
            SizedBox(
              width: 52,
              height: 52,
              child: Stack(children: [
                Positioned(left: 0, top: 0, child: dot(const Color(0xFFB9767C))),
                Positioned(left: 18, top: 18, child: dot(const Color(0xFF6E8B68))),
              ]),
            ),
            const SizedBox(width: 12),
            const Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('Conversa dos convidados',
                    maxLines: 1, overflow: TextOverflow.ellipsis,
                    style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                SizedBox(height: 2),
                Text('Fala com quem também vai', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
            const Icon(Hi.chevronRight, size: 18, color: AppTheme.inkMuted),
          ]),
        ),
      ),
    ]);
  }
}

// ---------------------------------------------------------------- É hoje

/// Capa verde "É hoje!".
class GuestTodayHero extends StatelessWidget {
  final GuestWedding wedding;
  const GuestTodayHero({super.key, required this.wedding});

  @override
  Widget build(BuildContext context) {
    final place = wedding.venue?.isNotEmpty == true ? wedding.venue! : (wedding.location ?? '');
    final weekday = _weekdays[DateTime.now().weekday - 1];
    return Container(
      clipBehavior: Clip.antiAlias,
      decoration: BoxDecoration(color: guestHeroGreen, borderRadius: BorderRadius.circular(26)),
      child: Stack(children: [
        const Positioned.fill(child: _Circles()),
        Padding(
          padding: const EdgeInsets.fromLTRB(20, 22, 20, 22),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(wedding.displayNames.toUpperCase(),
                style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1.2, color: Color(0xCCFFFFFF))),
            const SizedBox(height: 4),
            Text('É hoje!', style: AppTypography.displaySerif(fontSize: 40, fontWeight: FontWeight.w800, color: Colors.white)),
            Text([weekday, if (place.isNotEmpty) place].join(' · '),
                style: const TextStyle(fontSize: 14, color: Color(0xE6FFFFFF))),
          ]),
        ),
      ]),
    );
  }
}

/// O que está a acontecer agora e o que vem a seguir (pelo programa).
class GuestNowCard extends StatefulWidget {
  final List<ProgramItem> program;
  const GuestNowCard({super.key, required this.program});
  @override
  State<GuestNowCard> createState() => _GuestNowCardState();
}

class _GuestNowCardState extends State<GuestNowCard> {
  Timer? _timer;
  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(minutes: 1), (_) => mounted ? setState(() {}) : null);
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final timed = [
      for (final p in widget.program)
        if (programMinutes(p.time) != null) (p, programMinutes(p.time)!),
    ]..sort((a, b) => a.$2.compareTo(b.$2));
    if (timed.isEmpty) return const SizedBox.shrink();
    final now = DateTime.now();
    final nowMin = now.hour * 60 + now.minute;
    var cur = -1;
    for (var i = 0; i < timed.length; i++) {
      if (timed[i].$2 <= nowMin) cur = i;
    }
    final next = cur + 1 < timed.length ? timed[cur + 1] : null;
    final current = cur >= 0 ? timed[cur] : null;
    final progress = current != null && next != null
        ? ((nowMin - current.$2) / (next.$2 - current.$2)).clamp(0.0, 1.0)
        : (current != null ? 1.0 : 0.0);
    String hm(int m) => '${(m ~/ 60).toString().padLeft(2, '0')}:${(m % 60).toString().padLeft(2, '0')}';
    String inLabel(int m) {
      final d = m - nowMin;
      if (d < 60) return 'em $d min';
      return 'em ${d ~/ 60} h${d % 60 == 0 ? '' : ' ${d % 60} min'}';
    }

    return Container(
      padding: const EdgeInsets.all(16),
      decoration: guestCard(),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Text(current == null ? 'AINDA NÃO COMEÇOU' : 'A DECORRER',
            style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1.1, color: guestButtonGreen)),
        const SizedBox(height: 4),
        if (current != null) ...[
          Text(current.$1.title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w800, color: AppTheme.ink)),
          Text(
            [
              next == null ? 'Desde as ${hm(current.$2)}' : '${hm(current.$2)} – ${hm(next.$2)}',
              if (current.$1.place.isNotEmpty) current.$1.place,
            ].join(' · '),
            style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
          ),
          const SizedBox(height: 12),
          ClipRRect(
            borderRadius: BorderRadius.circular(99),
            child: LinearProgressIndicator(
              value: progress,
              minHeight: 7,
              backgroundColor: const Color(0xFFE9E8E4),
              valueColor: const AlwaysStoppedAnimation(guestButtonGreen),
            ),
          ),
        ],
        if (next != null) ...[
          const SizedBox(height: 12),
          Row(children: [
            const Text('A SEGUIR  ', style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.inkMuted)),
            Expanded(
              child: Text('${next.$1.title} · ${hm(next.$2)}',
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ),
            Text(inLabel(next.$2), style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: guestButtonGreen)),
          ]),
        ],
      ]),
    );
  }
}

/// A mesa em grande.
class GuestBigTableCard extends StatelessWidget {
  final int? table;
  final int mates;
  final VoidCallback onTap;
  const GuestBigTableCard({super.key, required this.table, required this.mates, required this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.all(16),
          decoration: guestCard(),
          child: Row(children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                const Text('A TUA MESA',
                    style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1.1, color: AppTheme.inkMuted)),
                const SizedBox(height: 4),
                Text(table == null ? 'Ainda não atribuída' : (mates > 0 ? '$mates pessoas' : 'Vê quem está contigo'),
                    style: const TextStyle(fontSize: 14, color: AppTheme.ink)),
              ]),
            ),
            if (table != null)
              Text('$table', style: const TextStyle(fontSize: 56, height: 1, fontWeight: FontWeight.w800, color: guestHeroGreen)),
          ]),
        ),
      );
}

/// Tirar e partilhar fotos.
class GuestPhotosCta extends StatelessWidget {
  final VoidCallback onTap;
  const GuestPhotosCta({super.key, required this.onTap});
  @override
  Widget build(BuildContext context) => FilledButton.icon(
        onPressed: onTap,
        icon: const Icon(Hi.camera),
        label: const Text('Tirar e partilhar fotos'),
        style: FilledButton.styleFrom(
          backgroundColor: AppTheme.ink,
          foregroundColor: Colors.white,
          minimumSize: const Size.fromHeight(52),
          shape: const StadiumBorder(),
          textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 15.5, fontWeight: FontWeight.w700),
        ),
      );
}

/// O programa de hoje como linha do tempo, com o momento atual marcado.
class GuestTimeline extends StatelessWidget {
  final List<ProgramItem> program;
  final bool live;
  const GuestTimeline({super.key, required this.program, this.live = false});

  @override
  Widget build(BuildContext context) {
    if (program.isEmpty) return const SizedBox.shrink();
    final now = DateTime.now();
    final nowMin = now.hour * 60 + now.minute;
    var cur = -1;
    if (live) {
      for (var i = 0; i < program.length; i++) {
        final m = programMinutes(program[i].time);
        if (m != null && m <= nowMin) cur = i;
      }
    }
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 14, 16, 6),
      decoration: guestCard(),
      child: Column(children: [
        for (var i = 0; i < program.length; i++)
          IntrinsicHeight(
            child: Row(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              SizedBox(
                width: 46,
                child: Text(program[i].time,
                    style: TextStyle(
                      fontSize: 13,
                      fontWeight: FontWeight.w800,
                      color: i == cur ? guestButtonGreen : AppTheme.inkMuted,
                    )),
              ),
              SizedBox(
                width: 20,
                child: Column(children: [
                  Container(
                    width: 12,
                    height: 12,
                    margin: const EdgeInsets.only(top: 3),
                    decoration: BoxDecoration(
                      shape: BoxShape.circle,
                      color: i <= cur ? guestButtonGreen : Colors.white,
                      border: Border.all(color: guestButtonGreen, width: 2),
                    ),
                  ),
                  if (i < program.length - 1)
                    Expanded(child: Container(width: 2, color: i < cur ? guestButtonGreen : const Color(0xFFDCD8CE))),
                ]),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Padding(
                  padding: const EdgeInsets.only(bottom: 14),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(
                      i == cur ? '${program[i].title} · agora' : program[i].title,
                      style: TextStyle(
                        fontSize: 14.5,
                        fontWeight: FontWeight.w700,
                        color: i == cur ? guestButtonGreen : AppTheme.ink,
                      ),
                    ),
                    if (program[i].place.isNotEmpty)
                      Text(program[i].place, style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
                  ]),
                ),
              ),
            ]),
          ),
      ]),
    );
  }
}

/// «Falta o teu menu» / «A tua parte» (190, mockup «Início do convidado ·
/// menu por escolher»): linha fina amarela com o próximo passo e botão
/// preto. Vermelho quando a escolha fecha em 3 dias ou menos.
class GuestTablesAlerts extends ConsumerWidget {
  final String weddingId;
  const GuestTablesAlerts({super.key, required this.weddingId});

  Future<void> _pay(BuildContext context, WidgetRef ref, EventTable t) async {
    try {
      final share = await myShareEnsure(t.bookingId);
      final pct = await guestShareFeePct(ref, t.partnerId, t.totalAmount ?? 0, share.amount);
      if (!context.mounted) return;
      await context.push('/pay', extra: PayArgs(
        paymentId: share.paymentId,
        partnerName: t.partnerName,
        kind: 'guest_share',
        amount: amountWithCommission(share.amount, pct),
        baseAmount: share.amount,
      ));
      ref.invalidate(myEventTablesProvider(weddingId));
    } catch (_) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível abrir o pagamento.')));
      }
    }
  }

  Future<void> _payChoice(BuildContext context, WidgetRef ref, EventTable t) async {
    final id = t.myPayment?['id'] as String?;
    final amount = (t.myPayment?['amount'] as num?)?.toDouble();
    if (id == null || amount == null) {
      context.push('/mesa/$weddingId', extra: t);
      return;
    }
    final pct = await guestShareFeePct(ref, t.partnerId, t.totalAmount ?? 0, amount);
    if (!context.mounted) return;
    await context.push('/pay', extra: PayArgs(
      paymentId: id,
      partnerName: t.partnerName,
      kind: 'guest_share',
      amount: amountWithCommission(amount, pct),
      baseAmount: amount,
    ));
    ref.invalidate(myEventTablesProvider(weddingId));
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final tables = ref.watch(myEventTablesProvider(weddingId)).value ?? const <EventTable>[];
    final todo = tables.where((t) => t.needsAction).toList();
    if (todo.isEmpty) return const SizedBox.shrink();
    return Column(children: [
      for (final t in todo)
        Padding(
          padding: const EdgeInsets.only(bottom: 12),
          child: _alert(context, ref, t),
        ),
    ]);
  }

  Widget _alert(BuildContext context, WidgetRef ref, EventTable t) {
    final deadline = t.choiceDeadline;
    final tone = deadline == null ? AlertTone.pending : toneForDue(deadline);
    final until = deadline == null ? null : 'Até ${shortDate(deadline)}';
    final String caps;
    final String title;
    final String sub;
    final String cta;
    final VoidCallback onTap;
    if (t.eachChooses && !t.chose) {
      caps = 'FALTA O TEU MENU';
      title = t.eachPays ? 'Escolhe o teu menu e paga a tua parte' : 'Escolhe o teu menu';
      sub = [?until, t.partnerName].join(' · ');
      cta = 'Escolher';
      onTap = () => context.push('/mesa/$weddingId', extra: t);
    } else if (t.eachChooses) {
      caps = 'FALTA PAGAR';
      title = 'A tua parte · ${euros(t.myAmount ?? 0)}';
      sub = [?until, (t.myChoice?['package_snapshot'] as Map?)?['name'] as String? ?? t.partnerName].join(' · ');
      cta = 'Pagar';
      onTap = () => _payChoice(context, ref, t);
    } else {
      caps = 'FALTA PAGAR';
      title = 'A tua parte · ${euros(t.myAmount ?? 0)}';
      sub = [?until, (t.package?['name'] as String?) ?? t.partnerName].join(' · ');
      cta = 'Pagar';
      onTap = () => _pay(context, ref, t);
    }
    final capsColor = switch (tone) {
      AlertTone.urgent => const Color(0xFFC8553D),
      AlertTone.invite => const Color(0xFF3F7A4F),
      _ => AppTheme.inkMuted,
    };
    return SnappyTap(
      onTap: onTap,
      child: AlertOutline(
        tone: tone,
        radius: 22,
        padding: const EdgeInsets.fromLTRB(14, 12, 12, 12),
        child: Row(children: [
          AlertDot(tone),
          const SizedBox(width: 10),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
              Text(caps, style: TextStyle(fontSize: 11, letterSpacing: 1.5, fontWeight: FontWeight.w700, color: capsColor)),
              Text(title,
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 15, height: 1.25, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              Text(sub, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          const SizedBox(width: 10),
          Container(
            height: 36,
            padding: const EdgeInsets.symmetric(horizontal: 14),
            alignment: Alignment.center,
            decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(18)),
            child: Text(cta, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Colors.white)),
          ),
        ]),
      ),
    );
  }
}
