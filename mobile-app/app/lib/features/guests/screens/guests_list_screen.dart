import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/guests/guest_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/cards.dart';
import '../../../shared/widgets/cover_flow_picker.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_widgets.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';

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
          ),
        );
  }

  Future<void> _shareInvite(Wedding wedding) {
    return showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      builder: (context) => _InviteShareSheet(wedding: wedding),
    );
  }

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
                      Padding(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          20,
                          AppTheme.screenMargin,
                          0,
                        ),
                        child: Row(
                          children: [
                            const CircleBackButton(),
                            const Spacer(),
                            if (wedding != null) ...[
                              CircleIconButton(
                                icon: Icons.ios_share,
                                background: Colors.white,
                                onTap: () => _shareInvite(wedding),
                              ),
                              const SizedBox(width: 8),
                            ],
                            CircleIconButton(
                              icon: Icons.add,
                              background: AppTheme.ink,
                              foreground: Colors.white,
                              onTap: _addGuest,
                            ),
                          ],
                        ),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          16,
                          AppTheme.screenMargin,
                          0,
                        ),
                        child: Container(
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(999),
                            boxShadow: AppTheme.cardShadow,
                          ),
                          child: TextField(
                            controller: _search,
                            decoration: InputDecoration(
                              hintText: 'Pesquisar convidados...',
                              prefixIcon: const Icon(Icons.search, size: 20),
                              filled: true,
                              fillColor: Colors.white,
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(999),
                                borderSide: BorderSide.none,
                              ),
                              contentPadding: const EdgeInsets.symmetric(
                                vertical: 12,
                              ),
                            ),
                          ),
                        ),
                      ),
                      if (groups.isNotEmpty)
                        Padding(
                          padding: const EdgeInsets.fromLTRB(
                            AppTheme.screenMargin,
                            14,
                            AppTheme.screenMargin,
                            0,
                          ),
                          child: CoverFlowPicker<String?>(
                            options: [null, ...groups],
                            selected: _groupFilter,
                            itemExtent: 20,
                            itemBuilder: (context, group, isSelected) =>
                                CategoryPillLabel(
                                  label: group ?? 'Todos',
                                  big: group == null,
                                  selected: isSelected,
                                ),
                            onChanged: (group) =>
                                setState(() => _groupFilter = group),
                          ),
                        ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          14,
                          AppTheme.screenMargin,
                          0,
                        ),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.center,
                          children: [
                            Expanded(
                              flex: 20,
                              child: _StatTile(
                                icon: Icons.check_circle_outline,
                                iconColor: AppStatusColors.confirmed,
                                value: '${state.confirmedCount}',
                                label: 'Confirmados',
                                percentOf: total,
                                onTap: () => ref
                                    .read(guestsControllerProvider.notifier)
                                    .setFilter(GuestFilter.confirmed),
                              ),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              // 105% da largura das outras duas (flex 21
                              // contra flex 20).
                              flex: 21,
                              child: _StatTile(
                                icon: Icons.groups_outlined,
                                iconColor: Colors.white,
                                value: '$total',
                                label: 'Todos',
                                big: true,
                                background: AppColors.greenDark,
                                onTap: () => ref
                                    .read(guestsControllerProvider.notifier)
                                    .setFilter(GuestFilter.all),
                              ),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              flex: 20,
                              child: _StatTile(
                                icon: Icons.cancel_outlined,
                                iconColor: AppStatusColors.declined,
                                value: '${state.declinedCount}',
                                label: 'Recusaram',
                                percentOf: total,
                                onTap: () => ref
                                    .read(guestsControllerProvider.notifier)
                                    .setFilter(GuestFilter.declined),
                              ),
                            ),
                          ],
                        ),
                      ),
                      Expanded(
                        child: visible.isEmpty
                            ? const Center(
                                child: Text('Sem convidados nesta categoria.'),
                              )
                            : EdgeFade(
                                topFadeHeight: 32,
                                bottomFadeHeight: 140,
                                child: ListView.builder(
                                  padding: const EdgeInsets.fromLTRB(
                                    AppTheme.screenMargin,
                                    16,
                                    AppTheme.screenMargin,
                                    140,
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
                const Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: FloatingBottomNav(current: AppTab.guests),
                ),
                const Positioned.fill(child: DraggableChatBubble()),
              ],
            ),
    );
  }
}

class _StatTile extends StatelessWidget {
  final IconData icon;
  final Color iconColor;
  final String value;
  final String label;
  final int? percentOf;
  final VoidCallback? onTap;
  final bool big;
  final Color? background;

  const _StatTile({
    required this.icon,
    required this.iconColor,
    required this.value,
    required this.label,
    this.percentOf,
    this.onTap,
    this.big = false,
    this.background,
  });

  @override
  Widget build(BuildContext context) {
    final total = percentOf;
    final pct = total == null || total == 0
        ? null
        : ((int.parse(value) / total) * 100).round();
    // Fundo de destaque forte (verde escuro) pede texto branco para
    // continuar legível — os restantes tiles mantêm o texto normal.
    final isDark = background == AppColors.greenDark;
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: EdgeInsets.symmetric(
          vertical: big ? 13 : 12,
          horizontal: 8,
        ),
        decoration: BoxDecoration(
          color: background ?? Colors.white,
          borderRadius: BorderRadius.circular(18),
          boxShadow: AppTheme.cardShadowStrong,
        ),
        child: Column(
          children: [
            Icon(icon, size: big ? 19 : 18, color: iconColor),
            SizedBox(height: big ? 7 : 6),
            Text(
              value,
              style: TextStyle(
                fontWeight: FontWeight.w800,
                fontSize: big ? 21 : 17,
                color: isDark ? Colors.white : null,
              ),
            ),
            Text(
              label,
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: big ? 10 : 9.5,
                color: isDark ? Colors.white70 : AppTheme.inkMuted,
                fontWeight: FontWeight.w600,
              ),
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
            ),
            if (pct != null)
              Text(
                '$pct%',
                style: TextStyle(
                  fontSize: 9.5,
                  color: iconColor,
                  fontWeight: FontWeight.w700,
                ),
              ),
          ],
        ),
      ),
    );
  }
}

class _InviteShareSheet extends StatefulWidget {
  final Wedding wedding;

  const _InviteShareSheet({required this.wedding});

  @override
  State<_InviteShareSheet> createState() => _InviteShareSheetState();
}

class _InviteShareSheetState extends State<_InviteShareSheet> {
  bool _copied = false;

  Future<void> _copyLink() async {
    await Clipboard.setData(
      ClipboardData(text: 'https://${widget.wedding.inviteUrl}'),
    );
    if (!mounted) return;
    setState(() => _copied = true);
  }

  @override
  Widget build(BuildContext context) {
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
            'Envia este link aos teus convidados para veres quem confirma.',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: 13),
          ),
          const SizedBox(height: 16),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
            decoration: BoxDecoration(
              color: AppColors.green,
              borderRadius: BorderRadius.circular(14),
            ),
            child: Row(
              children: [
                Expanded(
                  child: Text(
                    widget.wedding.inviteUrl,
                    style: const TextStyle(
                      fontWeight: FontWeight.w600,
                      fontSize: 13,
                    ),
                  ),
                ),
              ],
            ),
          ),
          const SizedBox(height: 16),
          ElevatedButton.icon(
            onPressed: _copyLink,
            icon: Icon(_copied ? Icons.check : Icons.copy, size: 18),
            label: Text(_copied ? 'Copiado!' : 'Copiar link'),
          ),
        ],
      ),
    );
  }
}
