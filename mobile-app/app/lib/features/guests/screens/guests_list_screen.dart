import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:copo_dagua_app/shared/utils_clipboard.dart';
import 'package:flutter/material.dart';
import '../widgets/join_requests_card.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:share_plus/share_plus.dart';

import '../../../core/guests/guest_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/cards.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_widgets.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/search_pill.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/floating_filter_bar.dart';
import '../../../shared/widgets/island_sheet.dart';

class GuestsListScreen extends ConsumerStatefulWidget {
  const GuestsListScreen({super.key});

  @override
  ConsumerState<GuestsListScreen> createState() => _GuestsListScreenState();
}

class _GuestsListScreenState extends ConsumerState<GuestsListScreen> {
  final _search = TextEditingController();
  String? _groupFilter;

  @override
  void initState() {
    super.initState();
    _search.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _search.dispose();
    super.dispose();
  }

  Future<void> _addGuest() async {
    final weddingId = ref
        .read(guestsControllerProvider.notifier)
        .currentWeddingId;
    if (weddingId == null) return;
    final result = await showGuestFormSheet(context);
    if (result == null) return;
    ref
        .read(guestsControllerProvider.notifier)
        .addGuest(
          Guest(
            id: '',
            weddingId: weddingId,
            name: result.name,
            email: result.email,
            phone: result.phone,
            group: result.group,
            side: result.side,
            plusOneAllowed: result.plusOneAllowed,
            maxCompanions: result.maxCompanions,
          ),
        );
  }

  Future<void> _shareInvite(Wedding wedding) => shareWeddingInvite(context, wedding);

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(guestsControllerProvider);
    final wedding = ref.watch(weddingControllerProvider).wedding;
    final total = state.guests.length;

    final groups =
        state.guests
            .map((g) => g.group)
            .where((g) => g.isNotEmpty)
            .toSet()
            .toList()
          ..sort();

    final query = _search.text.trim().toLowerCase();
    final visible = state.filtered.where((g) {
      final matchesGroup = _groupFilter == null || g.group == _groupFilter;
      final matchesQuery =
          query.isEmpty || g.name.toLowerCase().contains(query);
      return matchesGroup && matchesQuery;
    }).toList();

    int countIn(String g) => state.guests.where((x) => x.group == g).length;

    // Mockup «Páginas do evento» → Convidados (2026-11-14).
    return GradientScaffold(
      background: AppBackground.feed,
      body: state.loading && state.guests.isEmpty
          ? const Center(child: CircularProgressIndicator())
          : KitPage(
              pinnedBack: true,
              children: [
                KitHeader(actions: [KitAddButton(tooltip: 'Adicionar convidado', onTap: _addGuest)]),
                const KitTitle('Convidados'),
                KitSummary(
                  kicker: 'A vossa lista',
                  value: '$total',
                  unit: total == 1 ? 'convidado' : 'convidados',
                  progress: total == 0 ? 0 : state.confirmedCount / total,
                  legend: [
                    KitLegend(AppTheme.accentOliveDark, '${state.confirmedCount}', 'sim'),
                    KitLegend(const Color(0xFFF2A01B), '${state.pendingCount}', 'por responder'),
                    KitLegend(const Color(0xFFC8553D), '${state.declinedCount}', 'não'),
                  ],
                ),
                if (wedding != null) KitBleed(JoinRequestsCard(weddingId: wedding.id)),
                if (state.guests.isEmpty)
                  Padding(
                    padding: const EdgeInsets.only(top: 24),
                    child: IllustratedEmptyState(
                      mascot: MascotPose.wave,
                      title: 'Quem vem celebrar convosco?',
                      message: 'Comecem pela família mais próxima. A lista pode crescer aos poucos, e cada convidado confirma pelo link do convite.',
                      primaryLabel: 'Adicionar o primeiro convidado',
                      onPrimary: _addGuest,
                      secondaryLabel: wedding == null ? null : 'Partilhar convite',
                      onSecondary: wedding == null ? null : () => _shareInvite(wedding),
                    ),
                  )
                else ...[
                  Padding(
                    padding: const EdgeInsets.only(top: 20),
                    child: Row(children: [
                      Expanded(child: SearchPill(controller: _search, hint: 'Pesquisar convidados')),
                      if (wedding != null) ...[
                        const SizedBox(width: 10),
                        V2RoundButton(icon: Hi.arrowUpOnSquare, tooltip: 'Convidar', onTap: () => context.push('/guests/convidar')),
                      ],
                    ]),
                  ),
                  if (groups.isNotEmpty)
                    KitPills([
                      KitPill(
                        label: 'Todos',
                        count: total,
                        selected: _groupFilter == null,
                        onTap: () => setState(() => _groupFilter = null),
                      ),
                      for (final g in groups)
                        KitPill(
                          label: g,
                          count: countIn(g),
                          selected: _groupFilter == g,
                          onTap: () => setState(() => _groupFilter = g),
                        ),
                    ]),
                  if (visible.isEmpty)
                    const KitGroup([KitRow(title: 'Sem convidados aqui.')], top: 16)
                  else
                    KitGroup(top: 16, [
                      for (final guest in visible)
                        KitRow(
                          lead: V2Avatar(guest.name, size: 44),
                          title: guest.name,
                          sub: [
                            guest.group.isEmpty ? 'Convidado' : guest.group,
                            if (guest.maxCompanions > 0) 'pode trazer ${guest.maxCompanions}',
                          ].join(' · '),
                          trailing: switch (guest.rsvpStatus) {
                            RsvpStatus.confirmed => const KitTag('Confirmado'),
                            RsvpStatus.declined => const KitTag('Não vem', kind: KitTagKind.neutral),
                            _ => const KitTag('Por responder', kind: KitTagKind.pending),
                          },
                          onTap: () => context.push('/guests/${guest.id}'),
                        ),
                    ]),
                ],
              ],
            ),
    );
  }
}

/// "Partilhar convite": abre logo a partilha do telemóvel (WhatsApp,
/// Mensagens, Mail…) com o link e o código (pedido do utilizador,
/// 2026-10-20). Sem partilha disponível (ex: computador), mostra a folha
/// com o link e o código para copiar.
Future<void> shareWeddingInvite(BuildContext context, Wedding wedding) async {
  final url = wedding.inviteUrl;
  final code = wedding.guestCode;
  if (url != null) {
    final text = 'Estás convidado/a para o evento de ${wedding.displayNames}! '
        'Confirma a tua presença aqui: $url'
        '${code == null ? '' : '\nCódigo do evento: $code'}';
    try {
      final result = await SharePlus.instance.share(ShareParams(text: text, subject: 'Convite — ${wedding.displayNames}'));
      if (result.status != ShareResultStatus.unavailable) return;
    } catch (_) {}
  }
  if (!context.mounted) return;
  await showIslandSheet(
    context: context,
    isScrollControlled: true,
    builder: (context) => InviteShareSheet(wedding: wedding),
  );
}

class InviteShareSheet extends StatefulWidget {
  final Wedding wedding;

  const InviteShareSheet({super.key, required this.wedding});

  @override
  State<InviteShareSheet> createState() => InviteShareSheetState();
}

class InviteShareSheetState extends State<InviteShareSheet> {
  bool _linkCopied = false;
  bool _codeCopied = false;

  Future<void> _copyLink() async {
    await copyText(widget.wedding.inviteUrl ?? '');
    if (!mounted) return;
    setState(() => _linkCopied = true);
  }

  Future<void> _copyCode(String code) async {
    await copyText(code);
    if (!mounted) return;
    setState(() => _codeCopied = true);
  }

  @override
  Widget build(BuildContext context) {
    final guestCode = widget.wedding.guestCode;
    final inviteUrl = widget.wedding.inviteUrl;
    return Padding(
      padding: const EdgeInsets.fromLTRB(20, 20, 20, 32),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Partilhar convite',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 6),
          Text(
            'Envia este link aos teus convidados — vão precisar de criar '
            'conta para confirmar presença.',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
          ),
          if (inviteUrl != null) ...[
          const SizedBox(height: 16),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            decoration: BoxDecoration(
              color: AppTheme.accentTint,
              borderRadius: BorderRadius.circular(AppRadius.md),
            ),
            child: Row(
              children: [
                Expanded(
                  child: Text(
                    inviteUrl,
                    style: const TextStyle(
                      fontWeight: FontWeight.w600,
                      fontSize: AppFontSize.md,
                    ),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 12),
          ElevatedButton.icon(
            onPressed: _copyLink,
            icon: Icon(_linkCopied ? Hi.check : Hi.documentDuplicate, size: 18),
            label: Text(_linkCopied ? 'Copiado!' : 'Copiar link'),
          ),
          ],
          if (guestCode != null) ...[
            const SizedBox(height: 24),
            Text(
              'Código do casal',
              style: Theme.of(context).textTheme.titleLarge,
            ),
            const SizedBox(height: 6),
            Text(
              'Se já têm a app instalada, os convidados usam este código '
              'ao criar conta para ficar ligados ao vosso casamento.',
              style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
            ),
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
              decoration: BoxDecoration(
                color: AppTheme.accentTint,
                borderRadius: BorderRadius.circular(AppRadius.md),
              ),
              child: Row(
                children: [
                  Expanded(
                    child: Text(
                      guestCode,
                      style: const TextStyle(
                        fontWeight: FontWeight.w700,
                        fontSize: AppFontSize.lg,
                        letterSpacing: 0.5,
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 12),
            ElevatedButton.icon(
              onPressed: () => _copyCode(guestCode),
              icon: Icon(_codeCopied ? Hi.check : Hi.documentDuplicate, size: 18),
              label: Text(_codeCopied ? 'Copiado!' : 'Copiar código'),
            ),
          ],
        ],
      ),
    );
  }
}
