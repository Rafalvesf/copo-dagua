import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:share_plus/share_plus.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../core/guests/guest_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/public_link.dart';
import '../../../shared/utils_clipboard.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/organizers_card.dart' show RowPillButton;
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'guests_list_screen.dart' show shareWeddingInvite;

/// «Convidar» (mockup «Páginas do evento» → Convidar, 2026-11-15): quem
/// ainda não recebeu o convite, quem já recebeu, e o link do evento para
/// grupos. «Enviar» abre a folha com a mensagem pronta (com o link de
/// cada pessoa) e as apps; ao enviar fica a data em `invite_sent_at`.
class InviteScreen extends ConsumerStatefulWidget {
  const InviteScreen({super.key});

  @override
  ConsumerState<InviteScreen> createState() => _InviteScreenState();
}

class _InviteScreenState extends ConsumerState<InviteScreen> {
  /// 0 = por mensagem, 1 = quem sigo (189).
  int _tab = 0;
  /// Quem sigo; null enquanto carrega ou se a migração 189 ainda não correu
  /// (aí não aparecem as pílulas).
  List<_Followed>? _followed;
  final _inviting = <String>{};

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      final w = ref.read(weddingControllerProvider).wedding;
      if (w != null && ref.read(guestsControllerProvider).guests.isEmpty) {
        ref.read(guestsControllerProvider.notifier).load(w.id);
      }
      if (w != null) _loadFollowed(w.id);
    });
  }

  Future<void> _loadFollowed(String weddingId) async {
    try {
      final rows = await supabase.rpc('event_followed_people', params: {'p_wedding_id': weddingId});
      if (!mounted) return;
      setState(() => _followed = [for (final r in (rows as List).cast<Map<String, dynamic>>()) _Followed.fromRow(r)]);
    } catch (_) {
      // Sem a migração 189: só o convite por mensagem.
    }
  }

  Future<void> _inviteFollowed(String weddingId, _Followed p) async {
    setState(() => _inviting.add(p.id));
    try {
      await supabase.rpc('invite_followed', params: {'p_wedding_id': weddingId, 'p_profile_id': p.id});
      await _loadFollowed(weddingId);
      await ref.read(guestsControllerProvider.notifier).load(weddingId);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível convidar. Tenta outra vez.')));
      }
    } finally {
      if (mounted) setState(() => _inviting.remove(p.id));
    }
  }

  List<Widget> _followedTab(Wedding? wedding) {
    final list = _followed ?? const <_Followed>[];
    if (list.isEmpty) {
      return const [
        SizedBox(height: 24),
        Text('Ainda não segues ninguém na app. Quem seguires aparece aqui para convidares sem link.',
            style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
      ];
    }
    final toInvite = list.where((p) => !p.invited).toList();
    final invited = list.where((p) => p.invited).toList();
    Widget tag(_Followed p) => switch (p.rsvp) {
          'confirmed' => const KitTag('Vai'),
          'declined' => const KitTag('Não vai', kind: KitTagKind.neutral),
          _ => const KitTag('Convidado', kind: KitTagKind.neutral),
        };
    return [
      if (toInvite.isNotEmpty) ...[
        KitCaps('Quem sigo · ${toInvite.length}'),
        KitGroup([
          for (final p in toInvite)
            KitRow(
              lead: V2Avatar(p.name, size: 44, imageUrl: p.avatarUrl),
              title: p.name,
              sub: p.mutual ? 'Segue-te também' : (p.username != null ? '@${p.username}' : 'Na app'),
              trailing: RowPillButton(
                label: 'Convidar',
                onTap: wedding == null || _inviting.contains(p.id) ? null : () => _inviteFollowed(wedding.id, p),
              ),
            ),
        ]),
      ],
      if (invited.isNotEmpty) ...[
        KitCaps('Já convidados · ${invited.length}'),
        KitGroup([
          for (final p in invited)
            KitRow(
              lead: V2Avatar(p.name, size: 44, imageUrl: p.avatarUrl),
              title: p.name,
              sub: 'Vê o evento na app',
              trailing: tag(p),
            ),
        ]),
      ],
    ];
  }

  @override
  Widget build(BuildContext context) {
    final wedding = ref.watch(weddingControllerProvider).wedding;
    final guests = ref.watch(guestsControllerProvider).guests;
    bool sent(Guest g) => g.inviteSentAt != null || g.rsvpStatus != RsvpStatus.pending;
    final toSend = guests.where((g) => !sent(g)).toList();
    final done = guests.where(sent).toList()
      ..sort((a, b) => (b.rsvpRespondedAt ?? b.inviteSentAt ?? DateTime(0)).compareTo(a.rsvpRespondedAt ?? a.inviteSentAt ?? DateTime(0)));
    final answered = done.where((g) => g.rsvpStatus != RsvpStatus.pending).length;
    final waiting = done.length - answered;

    String contact(Guest g) => g.phone?.isNotEmpty == true
        ? g.phone!
        : (g.email?.isNotEmpty == true ? 'só email' : 'sem contacto');
    String meta(Guest g) => [if (g.group.isNotEmpty) g.group, contact(g)].join(' · ');

    String doneMeta(Guest g) {
      if (g.rsvpStatus != RsvpStatus.pending && g.rsvpRespondedAt != null) return 'Respondeu ${_ago(g.rsvpRespondedAt!)}';
      if (g.inviteSentAt != null) return 'Enviado ${_ago(g.inviteSentAt!)}';
      return 'Respondeu';
    }

    Widget doneTag(Guest g) => switch (g.rsvpStatus) {
          RsvpStatus.confirmed => const KitTag('Confirmado'),
          RsvpStatus.declined => const KitTag('Não vem', kind: KitTagKind.neutral),
          RsvpStatus.pending => const KitTag('À espera', kind: KitTagKind.neutral),
        };

    return GradientScaffold(
      background: AppBackground.subtle,
      body: KitPage(children: [
        KitHeader(onBack: () => context.canPop() ? context.pop() : context.go('/guests')),
        KitTitle('Convidar',
            subtitle: _tab == 1
                ? 'Quem segues recebe o convite na app, sem link.'
                : 'Envia o convite a cada pessoa, com o link dela.'),
        if (_followed != null)
          KitPills([
            KitPill(label: 'Por mensagem', selected: _tab == 0, onTap: () => setState(() => _tab = 0)),
            KitPill(label: 'Quem sigo', selected: _tab == 1, count: _followed!.where((p) => !p.invited).length, onTap: () => setState(() => _tab = 1)),
          ]),
        if (_tab == 1) ..._followedTab(wedding) else ...[
        KitSummary(
          kicker: 'Convites enviados',
          value: '${done.length}',
          unit: 'de ${guests.length} convidados',
          progress: guests.isEmpty ? 0 : done.length / guests.length,
          legend: [
            KitLegend(AppTheme.accentOliveDark, '$answered', 'responderam'),
            KitLegend(const Color(0xFFCFC8B8), '$waiting', 'à espera'),
          ],
        ),
        if (toSend.isNotEmpty) ...[
          KitCaps('Por enviar · ${toSend.length}'),
          KitGroup([
            for (final g in toSend)
              KitRow(
                lead: V2Avatar(g.name, size: 44),
                title: g.name,
                sub: meta(g),
                trailing: RowPillButton(label: 'Enviar', onTap: () => _openSendSheet(context, wedding, g)),
              ),
          ]),
        ],
        if (done.isNotEmpty) ...[
          KitCaps('Já enviados · ${done.length}'),
          KitGroup([
            for (final g in done)
              KitRow(
                lead: V2Avatar(g.name, size: 44),
                title: g.name,
                sub: doneMeta(g),
                trailing: doneTag(g),
                onTap: () => context.push('/guests/${g.id}'),
              ),
          ]),
        ],
        if (guests.isEmpty) ...[
          const SizedBox(height: 24),
          const Text('Ainda não há convidados na lista. Junta-os em Convidados, ou partilha o link do evento.',
              style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
        ],
        if (wedding != null) ...[
          const KitSection('Para todos'),
          Container(
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              const Text('Link do evento', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 4),
              const Text('Para um grupo de WhatsApp. Quem entra por aqui aparece em «Pedidos para entrar».',
                  style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              const SizedBox(height: 14),
              OutlinedButton(
                onPressed: () => shareWeddingInvite(context, wedding),
                style: OutlinedButton.styleFrom(
                  foregroundColor: AppTheme.ink,
                  minimumSize: const Size(0, 44),
                  side: const BorderSide(color: AppTheme.ink, width: 1.5),
                  shape: const StadiumBorder(),
                  textStyle: const TextStyle(
                      fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 14, fontWeight: FontWeight.w700),
                ),
                child: const Text('Partilhar link do evento'),
              ),
            ]),
          ),
        ],
        ],
      ]),
    );
  }

  Future<void> _openSendSheet(BuildContext context, Wedding? wedding, Guest g) async {
    if (wedding == null || g.rsvpToken == null) return;
    final link = publicLink('/rsvp/${g.rsvpToken}');
    final text = 'Estás convidado/a para o evento de ${wedding.displayNames}! Confirma a tua presença aqui: $link';
    final sentNow = await showIslandSheet<bool>(
      context: context,
      isScrollControlled: true,
      builder: (sheet) => _SendSheet(guest: g, text: text, link: link, eventName: wedding.displayNames),
    );
    if (sentNow != true || !mounted) return;
    try {
      await ref.read(guestsControllerProvider.notifier).markInviteSent(g.id);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(this.context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
      }
    }
  }
}

class _Followed {
  final String id;
  final String name;
  final String? avatarUrl;
  final String? username;
  final bool mutual;
  final bool invited;
  final String? rsvp;
  const _Followed(this.id, this.name, this.avatarUrl, this.username, this.mutual, this.invited, this.rsvp);

  factory _Followed.fromRow(Map<String, dynamic> r) => _Followed(
        r['id'] as String,
        ((r['full_name'] as String?)?.trim().isNotEmpty ?? false) ? (r['full_name'] as String).trim() : 'Sem nome',
        r['avatar_url'] as String?,
        r['username'] as String?,
        r['mutual'] == true,
        r['invited'] == true,
        r['rsvp'] as String?,
      );
}

String _ago(DateTime t) {
  final d = DateTime.now().difference(t);
  if (d.inDays >= 2) return 'há ${d.inDays} dias';
  if (d.inDays == 1) return 'ontem';
  if (d.inHours >= 1) return 'há ${d.inHours} h';
  return 'agora';
}

/// Folha «Enviar a …»: a mensagem com o link desta pessoa e as apps para
/// a enviar. Devolve `true` quando o organizador escolheu uma forma de
/// envio (fica marcado «Enviado»).
class _SendSheet extends StatelessWidget {
  final Guest guest;
  final String text;
  final String link;
  final String eventName;
  const _SendSheet({required this.guest, required this.text, required this.link, required this.eventName});

  @override
  Widget build(BuildContext context) {
    final phone = guest.phone?.replaceAll(RegExp(r'[^0-9+]'), '');
    final hasPhone = phone != null && phone.isNotEmpty;
    final hasEmail = guest.email?.isNotEmpty == true;
    final first = guest.name.trim().split(' ').first;

    Future<void> open(Uri uri) async {
      final nav = Navigator.of(context);
      final ok = await launchUrl(uri, mode: LaunchMode.externalApplication);
      if (ok) nav.pop(true);
    }

    final waNumber = hasPhone ? phone.replaceAll('+', '') : '';
    final waDigits = waNumber.length == 9 ? '351$waNumber' : waNumber;

    return SafeArea(
      top: false,
      child: Padding(
        padding: const EdgeInsets.fromLTRB(20, 4, 20, 20),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            V2Avatar(guest.name, size: 44),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('Enviar a $first', style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text([if (guest.group.isNotEmpty) guest.group, 'link só para $first'].join(' · '),
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
          ]),
          const KitCaps('Mensagem', top: 20),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(18)),
            child: Text(text, style: const TextStyle(fontSize: 14, height: 1.5, color: AppTheme.ink)),
          ),
          const KitCaps('Enviar por', top: 20),
          KitGroup([
            KitSetRow(
              label: 'WhatsApp',
              value: hasPhone ? guest.phone : 'sem telemóvel',
              onTap: hasPhone ? () => open(Uri.parse('https://wa.me/$waDigits?text=${Uri.encodeComponent(text)}')) : null,
            ),
            KitSetRow(
              label: 'Mensagem (SMS)',
              value: hasPhone ? guest.phone : 'sem telemóvel',
              onTap: hasPhone ? () => open(Uri(scheme: 'sms', path: phone, queryParameters: {'body': text})) : null,
            ),
            KitSetRow(
              label: 'Email',
              value: hasEmail ? guest.email : 'sem email',
              onTap: hasEmail
                  ? () => open(Uri(scheme: 'mailto', path: guest.email, query: 'subject=${Uri.encodeComponent('Convite · $eventName')}&body=${Uri.encodeComponent(text)}'))
                  : null,
            ),
            KitSetRow(
              label: 'Outra app',
              value: 'Partilhar…',
              onTap: () async {
                final nav = Navigator.of(context);
                final r = await SharePlus.instance.share(ShareParams(text: text, subject: 'Convite · $eventName'));
                if (r.status == ShareResultStatus.success) nav.pop(true);
              },
            ),
            KitSetRow(
              label: 'Copiar link',
              onTap: () async {
                final nav = Navigator.of(context);
                await copyText(link);
                nav.pop(true);
              },
            ),
          ]),
          const SizedBox(height: 12),
          Text('Quando escolhes uma forma de enviar, $first passa para «Já enviados».',
              style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        ]),
      ),
    );
  }
}
