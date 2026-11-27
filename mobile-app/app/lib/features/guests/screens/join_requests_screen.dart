import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/events/events_providers.dart';
import '../../../core/guests/guest_controller.dart';
import '../../../core/social/social.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/event/event_controller.dart';
import '../../../shared/text_case.dart';
import '../../../shared/widgets/estrela.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/v2_kit.dart' show V2Avatar;
import '../widgets/join_requests_card.dart' show guestCategories;
import '../../../shared/leave.dart';

/// «Pedidos para entrar» (pedido do Rafael, 2026-11-22, mockup «Páginas do
/// evento», ⑨): um pedido de cada vez, com a foto grande, o @, os eventos e
/// os amigos em comum, para se reconhecer a pessoa; «Ver perfil»,
/// «Recusar» e «Aceitar». Por baixo, os outros pedidos com «Ver».
class JoinRequestsScreen extends ConsumerStatefulWidget {
  final String? initialId;
  const JoinRequestsScreen({super.key, this.initialId});

  @override
  ConsumerState<JoinRequestsScreen> createState() => _JoinRequestsScreenState();
}

class _JoinRequestsScreenState extends ConsumerState<JoinRequestsScreen> {
  late String? _selected = widget.initialId;
  final Set<String> _handled = {};
  String? _category;
  bool _busy = false;

  Future<void> _review(JoinRequest r, bool approve, String eventId) async {
    final messenger = ScaffoldMessenger.of(context);
    final guests = ref.read(guestsControllerProvider.notifier);
    setState(() {
      _busy = true;
      _handled.add(r.id);
      _selected = null;
    });
    final category = approve ? _category : null;
    _category = null;
    try {
      await reviewJoinRequest(r.id, approve: approve, category: category);
      ref.invalidate(joinRequestsProvider(eventId));
      if (approve) await guests.load(eventId);
      messenger.showSnackBar(SnackBar(
        content: Text(approve ? '${r.name} está na lista de convidados.' : 'Pedido de ${r.name} recusado.'),
      ));
    } catch (_) {
      if (mounted) setState(() => _handled.remove(r.id));
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final event = ref.watch(eventControllerProvider).event;
    final eventId = event?.id;
    final all = eventId == null ? const <JoinRequest>[] : (ref.watch(joinRequestsProvider(eventId)).value ?? const <JoinRequest>[]);
    final requests = all.where((r) => !_handled.contains(r.id)).toList();
    final current = requests.where((r) => r.id == _selected).firstOrNull ?? requests.firstOrNull;
    final others = [for (final r in requests) if (r.id != current?.id) r];
    final eventName = event == null ? '' : capFirst(event.displayNames);

    return GradientScaffold(
      background: AppBackground.feed,
      body: KitPage(
        pinnedBack: true,
        rotateBack: false,
        children: [
          const KitHeader(),
          KitTitle(
            'Pedidos para entrar',
            subtitle: requests.isEmpty
                ? eventName
                : '${requests.length} ${requests.length == 1 ? 'pessoa quer' : 'pessoas querem'} entrar no $eventName',
          ),
          if (current == null)
            SectionFrame(title: 'Pedidos', children: [
              FrameEmpty(
                reaction: Estrela.piscar,
                title: 'Está tudo tratado',
                text: 'Respondeste a todos os pedidos. Os novos aparecem aqui.',
                actions: [FrameButton44('Ver convidados', outlined: true, onTap: () => leave(context, force: true))],
              ),
            ])
          else ...[
            _RequestProfile(
              key: ValueKey(current.id),
              request: current,
              category: _category,
              busy: _busy,
              onCategory: (c) => setState(() => _category = _category == c ? null : c),
              onReview: (approve) => _review(current, approve, eventId!),
            ),
            if (others.isNotEmpty)
              SectionFrame(title: 'Outros pedidos · ${others.length}', children: [
                KitGroup([
                  for (final r in others)
                    KitRow(
                      lead: _Photo(request: r, size: 44),
                      title: r.name,
                      sub: [_ago(r.createdAt), if ((r.bringing ?? 0) > 0) 'traz ${r.bringing}'].join(' · '),
                      trailing: FrameButton36('Ver', onTap: () => setState(() {
                        _selected = r.id;
                        _category = null;
                      })),
                    ),
                ]),
              ]),
          ],
        ],
      ),
    );
  }
}

String _ago(DateTime d) {
  final days = DateTime.now().difference(d).inDays;
  return days <= 0 ? 'pediu hoje' : days == 1 ? 'pediu ontem' : 'pediu há $days dias';
}

/// Foto da conta de quem pediu (ou as iniciais).
class _Photo extends ConsumerWidget {
  final JoinRequest request;
  final double size;
  const _Photo({required this.request, required this.size});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final p = request.profileId == null ? null : ref.watch(publicProfileProvider(request.profileId!)).value;
    return V2Avatar(request.name, size: size, imageUrl: p?.avatarUrl);
  }
}

class _RequestProfile extends ConsumerWidget {
  final JoinRequest request;
  final String? category;
  final bool busy;
  final ValueChanged<String> onCategory;
  final ValueChanged<bool> onReview;
  const _RequestProfile({
    super.key,
    required this.request,
    required this.category,
    required this.busy,
    required this.onCategory,
    required this.onReview,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final r = request;
    final p = r.profileId == null ? null : ref.watch(publicProfileProvider(r.profileId!)).value;
    final handle = p?.handleLine ?? (r.email ?? r.phone ?? '');
    Widget count(String v, String l) => Column(children: [
          Text(v, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          Text(l, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
        ]);
    final bringing = r.bringing;
    return Container(
      margin: const EdgeInsets.only(top: 20),
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Center(child: V2Avatar(r.name, size: 76, imageUrl: p?.avatarUrl)),
        const SizedBox(height: 8),
        Text(r.name, textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        if (handle.isNotEmpty)
          Text(handle, textAlign: TextAlign.center, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        if (p != null || bringing != null) ...[
          const SizedBox(height: 10),
          Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            if (p != null) ...[count('${p.events}', p.events == 1 ? 'evento' : 'eventos'), const SizedBox(width: 22)],
            if (p != null) ...[count('${p.mutualCount}', 'em comum'), const SizedBox(width: 22)],
            if (bringing != null) count(bringing == 0 ? 'Só' : '+$bringing', bringing == 0 ? 'vem sozinho' : 'traz'),
          ]),
        ],
        if (p != null && p.mutual.isNotEmpty) ...[
          const SizedBox(height: 12),
          const Divider(height: 1, thickness: 1, color: AppTheme.line),
          const SizedBox(height: 10),
          Row(children: [
            SizedBox(
              width: 32 + (p.mutual.take(3).length - 1) * 22,
              height: 32,
              child: Stack(children: [
                for (var i = 0; i < p.mutual.take(3).length; i++)
                  Positioned(
                    left: i * 22.0,
                    child: Container(
                      decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2)),
                      child: V2Avatar(p.mutual[i].name, size: 28, imageUrl: p.mutual[i].avatarUrl),
                    ),
                  ),
              ]),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: Text(
                'Em comum: ${p.mutual.take(2).map((m) => m.name.split(' ').first).join(', ')}'
                '${p.mutualCount > 2 ? ' e mais ${p.mutualCount - 2}' : ''}',
                maxLines: 2,
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
              ),
            ),
          ]),
        ],
        if (r.answerSummary != null) FrameNote('${r.answerSummary!} · ${_ago(r.createdAt)}', top: 10)
        else FrameNote(_ago(r.createdAt)[0].toUpperCase() + _ago(r.createdAt).substring(1), top: 10),
        const SizedBox(height: 12),
        const Text('Quem é para vocês?', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        const SizedBox(height: 8),
        Wrap(spacing: 8, runSpacing: 8, children: [
          for (final c in guestCategories)
            SnappyTap(
              onTap: () => onCategory(c),
              semanticLabel: c,
              child: AnimatedContainer(
                duration: const Duration(milliseconds: 160),
                height: 38,
                padding: const EdgeInsets.symmetric(horizontal: 14),
                alignment: Alignment.center,
                decoration: ShapeDecoration(
                  color: category == c ? AppTheme.accentOliveDark : AppTheme.background,
                  shape: const StadiumBorder(),
                ),
                child: Text(c,
                    style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: category == c ? Colors.white : AppTheme.ink)),
              ),
            ),
        ]),
        if (r.profileId != null) FrameButton44('Ver perfil', outlined: true, onTap: () => context.push('/u/${r.profileId}')),
        const SizedBox(height: 10),
        Row(children: [
          Expanded(child: FrameButton44('Recusar', outlined: true, onTap: busy ? () {} : () => onReview(false))),
          const SizedBox(width: 8),
          Expanded(child: FrameButton44('Aceitar', onTap: busy ? () {} : () => onReview(true))),
        ]),
      ]),
    );
  }
}
