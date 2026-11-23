import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:share_plus/share_plus.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../core/auth/auth_controller.dart';
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
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/search_pill.dart';
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
  /// Quem sigo; null enquanto carrega ou se a migração 189 ainda não correu
  /// (aí não aparecem as pílulas).
  List<_Followed>? _followed;
  final _inviting = <String>{};
  final _search = TextEditingController();
  bool _showAllFollowed = false;

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  @override
  void initState() {
    super.initState();
    _search.addListener(() {
      if (mounted) setState(() {});
    });
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
    final all = _followed ?? const <_Followed>[];
    if (all.isEmpty) {
      return const [
        SectionFrame(title: 'Quem segues', children: [
          FrameEmpty(
            title: 'Ainda não segues ninguém',
            text: 'Segue amigos na app para os convidares com um toque, sem link.',
          ),
        ]),
      ];
    }
    final q = _search.text.trim().toLowerCase();
    final list = q.isEmpty
        ? all
        : all.where((p) => p.name.toLowerCase().contains(q) || (p.username ?? '').toLowerCase().contains(q)).toList();
    final mutual = list.where((p) => p.mutual).toList();
    final onlyMe = list.where((p) => !p.mutual).toList();
    // «Ver todos (N)» (mockup «Convidar · quem sigo»): os primeiros 5 de
    // «Só tu segues» até carregar no botão ou pesquisar.
    final showAll = _showAllFollowed || q.isNotEmpty;
    final onlyMeShown = showAll ? onlyMe : onlyMe.take(kListPreview).toList();

    Widget row(_Followed p) => KitRow(
          lead: V2Avatar(p.name, size: 44, imageUrl: p.avatarUrl),
          title: p.name,
          sub: p.username != null ? '@${p.username}' : 'Na app',
          trailing: p.invited
              ? switch (p.rsvp) {
                  'confirmed' => const KitTag('Vai'),
                  'declined' => const KitTag('Não vai', kind: KitTagKind.neutral),
                  _ => const KitTag('Convidado'),
                }
              : RowPillButton(
                  label: 'Convidar',
                  onTap: wedding == null || _inviting.contains(p.id) ? null : () => _inviteFollowed(wedding.id, p),
                ),
        );

    return [
      const SizedBox(height: 16),
      SearchPill(controller: _search, hint: 'Pesquisar quem segues'),
      if (mutual.isNotEmpty)
        SectionFrame(title: 'Seguem-se um ao outro · ${mutual.length}', children: [
          KitGroup([for (final p in mutual) row(p)]),
        ]),
      if (onlyMe.isNotEmpty)
        SectionFrame(title: 'Só tu segues · ${onlyMe.length}', children: [
          KitGroup([for (final p in onlyMeShown) row(p)]),
          if (onlyMeShown.length < onlyMe.length)
            MoreFacesRow(
              rest: [for (final p in onlyMe.skip(onlyMeShown.length)) (p.name, p.avatarUrl)],
              onTap: () => setState(() => _showAllFollowed = true),
            ),
        ]),
      if (list.isEmpty) ...[
        const SizedBox(height: 24),
        const Text('Ninguém com esse nome.', style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
      ],
      const Padding(
        padding: EdgeInsets.fromLTRB(4, 16, 4, 0),
        child: Text(
          'Recebem o convite na app, com notificação, e respondem lá. Entram logo na lista de convidados como «Por responder».',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 13, color: AppTheme.inkMuted),
        ),
      ),
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

    String contact(Guest g) => g.phone?.isNotEmpty == true
        ? g.phone!
        : (g.email?.isNotEmpty == true ? 'só email' : 'sem contacto');
    String meta(Guest g) => [if (g.group.isNotEmpty) g.group, contact(g)].join(' · ');

    String doneMeta(Guest g) {
      if (g.rsvpStatus != RsvpStatus.pending && g.rsvpRespondedAt != null) return 'Respondeu ${_ago(g.rsvpRespondedAt!)}';
      if (g.inviteSentAt != null) return 'Enviado ${_ago(g.inviteSentAt!)}';
      return 'Respondeu';
    }

    // Só o RSVP, como no mockup: Vai / Não vai / Sem resposta.
    Widget doneTag(Guest g) => switch (g.rsvpStatus) {
          RsvpStatus.confirmed => const KitTag('Vai'),
          RsvpStatus.declined => const KitTag('Não vai', kind: KitTagKind.neutral),
          RsvpStatus.pending => const KitTag('Sem resposta', kind: KitTagKind.neutral),
        };

    return GradientScaffold(
      background: AppBackground.feed,
      body: KitPage(
        pinnedBack: true,
              rotateBack: false,
        onBack: () => context.canPop() ? context.pop() : context.go('/guests'),
        children: [
          const KitHeader(),
          KitTitle('Convidar', subtitle: wedding == null ? null : _eventMeta(wedding)),
          // Convidados | Organizadores (mockup «Páginas do evento», 2026-11-22):
          // os organizadores convidam-se na página deles.
          if (wedding != null && wedding.ownerId == ref.watch(authControllerProvider).profile?.id)
            KitPills([
              const KitPill(label: 'Convidados', selected: true),
              KitPill(label: 'Organizadores', selected: false, onTap: () => context.push('/organizadores')),
            ]),

          // Por link — o link do evento, com o RSVP
          if (wedding != null)
            SectionFrame(title: 'Por link', children: [
              const FrameNote('Para quem ainda não está na app. Quem entra por aqui aparece em «Pedidos para entrar».'),
              if (wedding.guestCode != null) ...[
                const SizedBox(height: 10),
                Container(
                  padding: const EdgeInsets.fromLTRB(16, 8, 8, 8),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16)),
                  child: Row(children: [
                    Expanded(
                      child: Text(wedding.guestCode!,
                          style: const TextStyle(fontSize: 22, letterSpacing: 4, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                    FrameButton36('Copiar', outlined: true, onTap: () async {
                      await copyText(wedding.guestCode!);
                      if (mounted) ScaffoldMessenger.of(this.context).showSnackBar(const SnackBar(content: Text('Código copiado')));
                    }),
                  ]),
                ),
              ],
              FrameButton44('Enviar link', onTap: () => shareWeddingInvite(context, wedding)),
              if (wedding.inviteUrl != null) FrameButton44('Copiar link', outlined: true, onTap: () => _copyEventLink(wedding)),
            ]),

          // Amigos que segues (migração 189) — convidar na app
          if (_followed != null) ..._followedTab(wedding),

          // Já convidados — só o RSVP
          if (toSend.isNotEmpty)
            SectionFrame(title: 'Por enviar · ${toSend.length}', children: [
              KitGroup([
                for (final g in toSend)
                  KitRow(
                    lead: V2Avatar(g.name, size: 44),
                    title: g.name,
                    sub: meta(g),
                    trailing: FrameButton36('Enviar', onTap: () => _openSendSheet(context, wedding, g)),
                  ),
              ]),
            ]),
          if (done.isNotEmpty)
            SectionFrame(title: 'Já convidados · ${done.length}', children: [
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
            ]),
          if (guests.isEmpty && (_followed == null || _followed!.isEmpty)) ...[
            const SizedBox(height: 24),
            const Text('Ainda não há convidados. Convida quem segues, ou partilha o link do evento.',
                style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
          ],
        ],
      ),
    );
  }

  String _eventMeta(Wedding w) {
    final parts = <String>[];
    final d = w.weddingDate;
    if (d != null) {
      const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
      parts.add('${d.day} ${meses[d.month - 1]} ${d.year}');
    }
    final place = (w.venue?.isNotEmpty == true) ? w.venue! : (w.location ?? '');
    if (place.isNotEmpty) parts.add(place);
    return parts.isEmpty ? 'Sem data definida' : parts.join(' · ');
  }

  Future<void> _copyEventLink(Wedding w) async {
    final url = w.inviteUrl;
    if (url == null) return;
    await copyText(url);
    if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado')));
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
