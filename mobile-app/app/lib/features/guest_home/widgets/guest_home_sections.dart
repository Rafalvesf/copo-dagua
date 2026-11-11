import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/wedding_venue.dart';
import '../../../shared/widgets/navigation_sheet.dart';
import '../../../shared/widgets/snappy_tap.dart';

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

/// Cartão branco com borda e sombra (o mesmo do "O meu evento").
BoxDecoration guestCard({double radius = 20}) => BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.circular(radius),
      border: Border.all(color: const Color(0xFFDCD8CE)),
      boxShadow: const [BoxShadow(color: Color(0x1A171713), blurRadius: 14, offset: Offset(0, 4))],
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

String _cap(String s) => s.isEmpty ? s : s[0].toUpperCase() + s.substring(1);

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
    final meta = [
      if (date != null) '${_weekdays[date.weekday - 1]}, ${date.day} de ${monthNamesPt[date.month - 1].toLowerCase()}',
      if (wedding.ceremonyTime?.isNotEmpty == true) wedding.ceremonyTime!,
      if (place.isNotEmpty) place,
    ].join(' · ');
    final today = DateTime.now();
    final days = date == null
        ? null
        : DateTime(date.year, date.month, date.day).difference(DateTime(today.year, today.month, today.day)).inDays;
    return Container(
      clipBehavior: Clip.antiAlias,
      decoration: BoxDecoration(color: guestHeroGreen, borderRadius: BorderRadius.circular(26)),
      child: Stack(children: [
        const Positioned.fill(child: _Circles()),
        Padding(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 20),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(wedding.eventType.label.toUpperCase(),
                style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1.2, color: Color(0xCCFFFFFF))),
            const SizedBox(height: 6),
            Text(wedding.displayNames,
                style: AppTypography.displaySerif(fontSize: 30, fontWeight: FontWeight.w800, color: Colors.white)),
            if (meta.isNotEmpty) ...[
              const SizedBox(height: 6),
              Text(meta, style: const TextStyle(fontSize: 13.5, color: Color(0xE6FFFFFF))),
            ],
            const SizedBox(height: 18),
            Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
              if (days != null && days > 0) ...[
                Text('$days', style: const TextStyle(fontSize: 44, height: 1, fontWeight: FontWeight.w800, color: Colors.white)),
                const SizedBox(width: 6),
                Padding(
                  padding: const EdgeInsets.only(bottom: 5),
                  child: Text(days == 1 ? 'dia' : 'dias',
                      style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: Color(0xE6FFFFFF))),
                ),
              ] else if (days != null && days < 0)
                const Text('Já foi', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w800, color: Colors.white)),
              const Spacer(),
              if (goingWith != null)
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 7),
                  decoration: BoxDecoration(color: const Color(0x26FFFFFF), borderRadius: BorderRadius.circular(999)),
                  child: Text(goingWith!, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Colors.white)),
                ),
            ]),
          ]),
        ),
      ]),
    );
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
      mainAxisSpacing: 10,
      crossAxisSpacing: 10,
      childAspectRatio: 1.45,
      children: [
        for (final it in items)
          SnappyTap(
            onTap: it.onTap,
            child: Container(
              padding: const EdgeInsets.fromLTRB(14, 14, 14, 14),
              decoration: BoxDecoration(
                color: it.color,
                borderRadius: BorderRadius.circular(20),
                boxShadow: const [BoxShadow(color: Color(0x14171713), blurRadius: 12, offset: Offset(0, 4))],
              ),
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Container(
                  width: 40,
                  height: 40,
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(13)),
                  child: Icon(it.icon, size: 21, color: guestHeroGreen),
                ),
                const Spacer(),
                Text(it.label,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(it.sub,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 12.5, color: Color(0xFF57534E))),
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
          Expanded(child: Text(text, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink))),
          if (action != null)
            GestureDetector(
              onTap: onAction,
              child: Text(action!, style: const TextStyle(fontSize: 13.5, fontWeight: FontWeight.w700, color: guestButtonGreen)),
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
            style: FilledButton.styleFrom(backgroundColor: AppTheme.ink, foregroundColor: Colors.white, shape: const StadiumBorder()),
            child: Text(declined ? 'Mudar' : 'Responder'),
          ),
        ]),
      );
    }
    final companions = ref.watch(guestCompanionsProvider(guest.id)).value ?? const <GuestCompanion>[];
    String detail(String? menu, String? allergies) => [
          menu?.isNotEmpty == true ? _cap(menu!) : 'Menu por escolher',
          allergies?.isNotEmpty == true ? allergies! : 'sem alergias',
        ].join(' · ');
    final rows = <(String, String)>[
      ('Tu', detail(guest.menuSelection, guest.dietaryRestrictions)),
      for (final c in companions) (c.name, detail(c.menu, c.allergies.isEmpty ? null : c.allergies.join(', '))),
      if (companions.isEmpty && guest.plusOneName?.isNotEmpty == true) (guest.plusOneName!, 'Acompanhante'),
    ];
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 14, 16, 8),
      decoration: guestCard(),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          const Expanded(
            child: Text('A TUA RESPOSTA',
                style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1.1, color: AppTheme.inkMuted)),
          ),
          GestureDetector(
            onTap: edit,
            child: const Text('Alterar', style: TextStyle(fontSize: 13.5, fontWeight: FontWeight.w700, color: guestButtonGreen)),
          ),
        ]),
        const SizedBox(height: 6),
        for (final (name, sub) in rows)
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 6),
            child: Row(children: [
              CircleAvatar(
                radius: 17,
                backgroundColor: const Color(0xFFDDE5D3),
                child: Text(name.characters.first.toUpperCase(),
                    style: const TextStyle(fontWeight: FontWeight.w800, color: guestHeroGreen)),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(name, style: const TextStyle(fontSize: 14.5, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  Text(sub, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
                ]),
              ),
            ]),
          ),
      ]),
    );
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
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: guestCard(),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          Container(
            width: 42,
            height: 42,
            decoration: BoxDecoration(color: const Color(0xFFDDE5D3), borderRadius: BorderRadius.circular(13)),
            child: const Icon(Hi.mapPin, color: guestHeroGreen),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(title, style: const TextStyle(fontSize: 15.5, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (address?.isNotEmpty == true && address != title)
                Text(address!, style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
            ]),
          ),
        ]),
        if (wedding.dressCode?.isNotEmpty == true) ...[
          const SizedBox(height: 10),
          Text('Dress code: ${wedding.dressCode}',
              style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ],
        const SizedBox(height: 12),
        FilledButton.icon(
          onPressed: () => showNavigationSheet(context, label: title, address: address, latitude: lat, longitude: lng),
          icon: const Icon(Hi.map, size: 19),
          label: const Text('Como chegar'),
          style: FilledButton.styleFrom(
            backgroundColor: AppTheme.ink,
            foregroundColor: Colors.white,
            minimumSize: const Size.fromHeight(46),
            shape: const StadiumBorder(),
          ),
        ),
      ]),
    );
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
