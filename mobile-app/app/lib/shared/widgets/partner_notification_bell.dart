import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/notifications/partner_notifications_providers.dart';
import '../../core/theme/app_theme.dart';
import 'count_badge.dart';
import 'feedback.dart';
import 'island_sheet.dart';
import '../../core/notifications/push.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

/// Sino de notificações do parceiro e do convidado — versão simples do sino do casal
/// (`home_feed_screen.dart`, `_NotificationsSheet`), sem os separadores
/// Todas/Não lidas/Lidas. Ver `partner_notifications_providers.dart`.
class PartnerNotificationBell extends ConsumerWidget {
  /// Já não muda nada: o sino é sempre o redondo preto 44.
  final bool round;
  const PartnerNotificationBell({super.key, this.round = false});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final unread = ref.watch(partnerUnreadNotificationsCountProvider);
    // Sempre o botão redondo preto 44 com o sino branco e o número por ler
    // (DESIGN.md §2; pedido 2026-11-23 — antes, fora do perfil, era um sino
    // solto com um ponto verde).
    return Tooltip(
      message: 'Notificações',
      excludeFromSemantics: true,
      child: Semantics(
        button: true,
        label: unread > 0 ? 'Notificações, $unread por ler' : 'Notificações',
        child: GestureDetector(
          onTap: () async {
            await showIslandSheet(
              context: context,
              isScrollControlled: true,
              builder: (context) => const _PartnerNotificationsSheet(),
            );
            ref.invalidate(partnerNotificationsProvider);
          },
          child: WithCount(
            count: unread,
            child: Container(
              width: 44,
              height: 44,
              decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
              child: const Center(child: Icon(Hi.bell, size: 20, color: Colors.white)),
            ),
          ),
        ),
      ),
    );
  }
}

/// Popup das notificações (prancheta «Popup das notificações», 2026-11-24):
/// título 22 com «N por ler» e o «×», pílulas «Todas» / «Por ler» com o
/// contador, o cartão dos avisos no telemóvel e as notificações por dia
/// (ícone num círculo 44, título 16, hora 12, ponto verde por ler, texto 13
/// e «Ver» quando leva a algum lado).
class _PartnerNotificationsSheet extends ConsumerStatefulWidget {
  const _PartnerNotificationsSheet();

  @override
  ConsumerState<_PartnerNotificationsSheet> createState() => _PartnerNotificationsSheetState();
}

class _PartnerNotificationsSheetState extends ConsumerState<_PartnerNotificationsSheet> {
  bool _unreadOnly = false;

  static String _day(DateTime d) {
    final now = DateTime.now();
    final today = DateTime(now.year, now.month, now.day);
    final that = DateTime(d.year, d.month, d.day);
    final diff = today.difference(that).inDays;
    if (diff <= 0) return 'HOJE';
    if (diff < 7) return 'ESTA SEMANA';
    return 'ANTES';
  }

  static String _time(DateTime d) {
    final now = DateTime.now();
    final local = d.toLocal();
    String two(int v) => v.toString().padLeft(2, '0');
    if (now.difference(local).inHours < 24 && now.day == local.day) return '${two(local.hour)}:${two(local.minute)}';
    const wd = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    const mo = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    return now.difference(local).inDays < 7 ? wd[local.weekday - 1] : '${local.day} ${mo[local.month - 1]}';
  }

  Future<void> _open(PartnerNotification n) async {
    if (!n.read) {
      await markPartnerNotificationRead(n.id);
      ref.invalidate(partnerNotificationsProvider);
    }
    final link = n.link;
    if (link != null && mounted) {
      final router = GoRouter.of(context);
      Navigator.of(context).pop();
      router.push(link);
    }
  }

  Widget _pill(String label, int count, bool on, VoidCallback onTap) => Semantics(
        button: true,
        selected: on,
        child: GestureDetector(
          onTap: onTap,
          child: Container(
            height: 38,
            padding: const EdgeInsets.symmetric(horizontal: 14),
            decoration: BoxDecoration(color: on ? AppTheme.brandGreen : AppTheme.background, borderRadius: BorderRadius.circular(19)),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              Text(label, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: on ? Colors.white : AppTheme.ink)),
              const SizedBox(width: 6),
              Container(
                constraints: const BoxConstraints(minWidth: 20),
                height: 20,
                padding: const EdgeInsets.symmetric(horizontal: 5),
                alignment: Alignment.center,
                decoration: BoxDecoration(color: on ? Colors.white : AppTheme.ink, borderRadius: BorderRadius.circular(10)),
                child: Text('$count', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: on ? AppTheme.ink : Colors.white)),
              ),
            ]),
          ),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final async = ref.watch(partnerNotificationsProvider);
    final all = async.value ?? const <PartnerNotification>[];
    final unread = all.where((n) => !n.read).length;
    final shown = _unreadOnly ? all.where((n) => !n.read).toList() : all;
    final groups = <String, List<PartnerNotification>>{};
    for (final n in shown) {
      groups.putIfAbsent(_day(n.createdAt.toLocal()), () => []).add(n);
    }
    return SizedBox(
      height: MediaQuery.sizeOf(context).height * 0.85,
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Padding(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 0),
          child: Row(children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                const Text('Notificações', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(unread == 0 ? 'Está tudo lido' : (unread == 1 ? '1 por ler' : '$unread por ler'),
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
            Semantics(
              button: true,
              label: 'Fechar',
              child: GestureDetector(
                onTap: () => Navigator.of(context).pop(),
                child: Container(
                  width: 44,
                  height: 44,
                  decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
                  child: const Icon(Hi.xMark, size: 20, color: Colors.white),
                ),
              ),
            ),
          ]),
        ),
        Padding(
          padding: const EdgeInsets.fromLTRB(20, 16, 20, 0),
          child: Row(children: [
            _pill('Todas', all.length, !_unreadOnly, () => setState(() => _unreadOnly = false)),
            const SizedBox(width: 8),
            _pill('Por ler', unread, _unreadOnly, () => setState(() => _unreadOnly = true)),
          ]),
        ),
        Expanded(
          child: async.isLoading && all.isEmpty
              ? const SkeletonList()
              : async.hasError && all.isEmpty
                  ? AsyncErrorView(onRetry: () => ref.invalidate(partnerNotificationsProvider))
                  : ListView(
                      padding: const EdgeInsets.fromLTRB(20, 16, 20, 28),
                      children: [
                        const _PushCard(),
                        if (shown.isEmpty)
                          Padding(
                            padding: const EdgeInsets.only(top: 32),
                            child: Text(_unreadOnly ? 'Sem notificações por ler.' : 'Sem notificações.',
                                textAlign: TextAlign.center, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
                          ),
                        for (final k in const ['HOJE', 'ESTA SEMANA', 'ANTES'])
                          if (groups[k] != null) ...[
                            Padding(
                              padding: const EdgeInsets.only(top: 20, bottom: 4),
                              child: Text(k,
                                  style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                            ),
                            for (var i = 0; i < groups[k]!.length; i++) _row(groups[k]![i], i == groups[k]!.length - 1),
                          ],
                      ],
                    ),
        ),
      ]),
    );
  }

  Widget _row(PartnerNotification n, bool last) {
    // Ícone do tipo num círculo 44 #E6E6E6 (prancheta «Popup das
    // notificações»): mensagem, pagamento, pessoa, reserva, equipa.
    final t = n.type;
    final link = n.link ?? '';
    final icon = t.contains('message') || t == 'group_message'
        ? Hi.chatBubbleOvalLeft
        : (t.contains('pay') || t.contains('deposit') || link.contains('/pay'))
            ? Hi.creditCard
            : (t.contains('join') || t.contains('guest') || t.contains('rsvp'))
                ? Hi.user
                : (t.contains('support') || t.contains('admin'))
                    ? Hi.star
                    : (t.contains('booking') || t.contains('proposal') || t.contains('quote'))
                        ? Hi.calendarDays
                        : Hi.bell;
    // O botão diz o que faz: «Pagar», «Ver proposta» ou «Ver».
    final action = (t.contains('pay') || t.contains('deposit') || link.contains('/pay'))
        ? 'Pagar'
        : t.contains('proposal')
            ? 'Ver proposta'
            : 'Ver';
    return Semantics(
      button: true,
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: () => _open(n),
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 12),
          decoration: BoxDecoration(border: last ? null : const Border(bottom: BorderSide(color: AppTheme.line))),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Container(
              width: 44,
              height: 44,
              decoration: const BoxDecoration(color: Color(0xFFE6E6E6), shape: BoxShape.circle),
              child: Icon(icon, size: 20, color: const Color(0xFF3A3733)),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Row(children: [
                  Expanded(
                    child: Text(n.title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ),
                  const SizedBox(width: 8),
                  Text(_time(n.createdAt), style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                  if (!n.read) ...[
                    const SizedBox(width: 8),
                    Semantics(
                      label: 'Por ler',
                      child: Container(width: 10, height: 10, decoration: const BoxDecoration(color: AppTheme.brandGreen, shape: BoxShape.circle)),
                    ),
                  ],
                ]),
                if (n.body != null && n.body!.trim().isNotEmpty) ...[
                  const SizedBox(height: 2),
                  Text(n.body!, style: const TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted)),
                ],
                if (n.link != null) ...[
                  const SizedBox(height: 6),
                  Container(
                    height: 36,
                    padding: const EdgeInsets.symmetric(horizontal: 14),
                    decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(18)),
                    alignment: Alignment.center,
                    child: Text(action, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Colors.white)),
                  ),
                ],
              ]),
            ),
          ]),
        ),
      ),
    );
  }
}

/// «Avisos no telemóvel» (prancheta «Popup das notificações»): caixa
/// #F2F2F2, cantos 22, o sino branco num círculo preto 44, título 16, frase
/// 13 e «Ativar» preto 36. Some quando os avisos já estão ligados.
class _PushCard extends StatefulWidget {
  const _PushCard();

  @override
  State<_PushCard> createState() => _PushCardState();
}

class _PushCardState extends State<_PushCard> {
  PushStatus _status = PushNotifications.status();
  bool _busy = false;

  Future<void> _enable() async {
    setState(() => _busy = true);
    PushStatus s;
    try {
      s = await PushNotifications.enable();
    } catch (_) {
      s = PushNotifications.status();
    }
    if (!mounted) return;
    setState(() {
      _status = s;
      _busy = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    final (String title, String text, bool action) = switch (_status) {
      PushStatus.notAsked => ('Avisos no telemóvel', 'Sabe na hora quando um parceiro responde.', true),
      PushStatus.denied => ('Avisos bloqueados', 'Para os receber, permite-os nas definições do telemóvel.', false),
      PushStatus.iosInstall => ('Avisos no telemóvel', 'No iPhone, junta a app ao ecrã principal para os receber.', false),
      _ => ('', '', false),
    };
    if (title.isEmpty) return const SizedBox.shrink();
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
      decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
      child: Row(children: [
        Container(
          width: 44,
          height: 44,
          decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
          child: const Icon(Hi.bell, size: 20, color: Colors.white),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 2),
            Text(text, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        ),
        if (action) ...[
          const SizedBox(width: 12),
          GestureDetector(
            onTap: _busy ? null : _enable,
            child: Container(
              height: 36,
              padding: const EdgeInsets.symmetric(horizontal: 14),
              alignment: Alignment.center,
              decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(18)),
              child: const Text('Ativar', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Colors.white)),
            ),
          ),
        ],
      ]),
    );
  }
}
