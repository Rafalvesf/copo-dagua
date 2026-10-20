import 'package:flutter/material.dart';
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
import '../../../shared/widgets/page_header.dart';
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

    return GradientScaffold(
      background: AppBackground.feed,
      body: state.loading && state.guests.isEmpty
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(
                  bottom: false,
                  child: Column(
                    children: [
                      PageHeader(
                        title: 'Convidados',
                        centered: true,
                        trailing: AddActionButton(onTap: _addGuest),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
                        child: _ListHero(
                          total: total,
                          confirmed: state.confirmedCount,
                          pending: state.pendingCount,
                          declined: state.declinedCount,
                          onFilter: (f) => ref.read(guestsControllerProvider.notifier).setFilter(f),
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          16,
                          AppTheme.screenMargin,
                          0,
                        ),
                        child: Row(
                          children: [
                            Expanded(
                              // A linha fina é só a do cartão: o campo não tem
                              // fundo nem contorno próprios (antes o fundo do
                              // campo tapava metade da linha — 2026-10-18).
                              child: Container(
                                height: 46,
                                alignment: Alignment.center,
                                decoration: whiteLineCard(radius: AppRadius.pill),
                                child: TextField(
                                  controller: _search,
                                  textAlignVertical: TextAlignVertical.center,
                                  decoration: const InputDecoration(
                                    hintText: 'Pesquisar convidados...',
                                    prefixIcon: Icon(Icons.search, size: 20),
                                    filled: false,
                                    isCollapsed: true,
                                    border: InputBorder.none,
                                    enabledBorder: InputBorder.none,
                                    focusedBorder: InputBorder.none,
                                    errorBorder: InputBorder.none,
                                    disabledBorder: InputBorder.none,
                                    focusedErrorBorder: InputBorder.none,
                                    contentPadding: EdgeInsets.symmetric(vertical: 13),
                                  ),
                                ),
                              ),
                            ),
                            if (wedding != null) ...[
                              const SizedBox(width: 10),
                              CircleIconButton(
                                icon: Icons.ios_share,
                                background: Colors.white,
                                size: 46,
                                onTap: () => _shareInvite(wedding),
                              ),
                            ],
                          ],
                        ),
                      ),
                      Expanded(
                        child: state.guests.isEmpty
                            ? IllustratedEmptyState(
                                mascot: MascotPose.wave,
                                title: 'Quem vem celebrar convosco?',
                                message: 'Comecem pela família mais próxima. A lista pode crescer aos poucos, e cada convidado confirma pelo link do convite.',
                                primaryLabel: 'Adicionar o primeiro convidado',
                                onPrimary: _addGuest,
                                secondaryLabel: wedding == null ? null : 'Partilhar convite',
                                onSecondary: wedding == null ? null : () => _shareInvite(wedding),
                              )
                            : visible.isEmpty
                            ? const EmptyStateView(message: 'Sem convidados nesta categoria.', icon: Icons.people_outline)
                            : EdgeFade(
                                topFadeHeight: 32,
                                bottomFadeHeight: 32,
                                child: ListView.builder(
                                  padding: EdgeInsets.fromLTRB(
                                    AppTheme.screenMargin,
                                    16,
                                    AppTheme.screenMargin,
                                    groups.isEmpty
                                        ? 40
                                        : FloatingFilterBar.bottomPadding(
                                            aboveNav: false,
                                          ),
                                  ),
                                  itemCount: visible.length,
                                  itemBuilder: (context, index) {
                                    final guest = visible[index];
                                    return GuestListItem(
                                      guest: guest,
                                      onTap: () =>
                                          context.push('/guests/${guest.id}'),
                                    );
                                  },
                                ),
                              ),
                      ),
                    ],
                  ),
                ),
                if (groups.isNotEmpty)
                  Positioned(
                    left: 0,
                    right: 0,
                    bottom: 0,
                    child: FloatingFilterBar(
                      items: [
                        FilterBarItem('Todos'),
                        for (final group in groups)
                          FilterBarItem(group),
                      ],
                      selected: _groupFilter == null
                          ? 0
                          : groups.indexOf(_groupFilter!) + 1,
                      onSelected: (i) => setState(
                        () => _groupFilter = i == 0 ? null : groups[i - 1],
                      ),
                    ),
                  ),
              ],
            ),
    );
  }
}

/// Canvas "Convidados — redesign": cartão verde "A VOSSA LISTA" com a
/// barra dividida e três chips brancos (tocar filtra a lista).
int _flex(int v) => v < 1 ? 1 : v;

class _ListHero extends StatelessWidget {
  final int total;
  final int confirmed;
  final int pending;
  final int declined;
  final ValueChanged<GuestFilter> onFilter;

  const _ListHero({
    required this.total,
    required this.confirmed,
    required this.pending,
    required this.declined,
    required this.onFilter,
  });

  @override
  Widget build(BuildContext context) {
    Widget chip(String label, int n, Color dot, GuestFilter f) => Expanded(
          child: SnappyTap(
            onTap: () => onFilter(f),
            child: Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(16)),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Container(width: 8, height: 8, decoration: BoxDecoration(color: dot, shape: BoxShape.circle)),
                      const SizedBox(width: 6),
                      Flexible(
                        child: Text(label,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                      ),
                    ],
                  ),
                  const SizedBox(height: 2),
                  Text('$n', style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ],
              ),
            ),
          ),
        );
    final t = total == 0 ? 1 : total;
    return SnappyTap(
      onTap: () => onFilter(GuestFilter.all),
      child: GreenHero(
        label: 'A VOSSA LISTA',
        value: '$total',
        suffix: total == 1 ? 'convidado' : 'convidados',
        doodles: const [Icons.people_outline, Icons.favorite_border, Icons.wine_bar_outlined],
        footer: Column(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(999),
              child: SizedBox(
                height: 10,
                child: Row(
                  children: [
                    if (confirmed > 0) Expanded(flex: _flex(confirmed * 1000 ~/ t), child: Container(color: Colors.white)),
                    if (pending > 0) Expanded(flex: _flex(pending * 1000 ~/ t), child: Container(color: Colors.white.withValues(alpha: 0.55))),
                    Expanded(flex: _flex(1000 - (confirmed + pending) * 1000 ~/ t), child: Container(color: Colors.white.withValues(alpha: 0.28))),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 14),
            Row(
              children: [
                chip('Sim', confirmed, AppStatusColors.confirmed, GuestFilter.confirmed),
                const SizedBox(width: 8),
                chip('Por responder', pending, AppStatusColors.pending, GuestFilter.pending),
                const SizedBox(width: 8),
                chip('Não', declined, AppStatusColors.declined, GuestFilter.declined),
              ],
            ),
          ],
        ),
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
    await Clipboard.setData(
      ClipboardData(text: widget.wedding.inviteUrl ?? ''),
    );
    if (!mounted) return;
    setState(() => _linkCopied = true);
  }

  Future<void> _copyCode(String code) async {
    await Clipboard.setData(ClipboardData(text: code));
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
              color: AppColors.green,
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
            icon: Icon(_linkCopied ? Icons.check : Icons.copy, size: 18),
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
                color: AppColors.green,
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
              icon: Icon(_codeCopied ? Icons.check : Icons.copy, size: 18),
              label: Text(_codeCopied ? 'Copiado!' : 'Copiar código'),
            ),
          ],
        ],
      ),
    );
  }
}
