import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/checklist/checklist_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/assignee_cluster.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/support_chat.dart';

IconData _iconForTask(ChecklistItem item) {
  return switch (item.partnerCategory) {
    PartnerCategory.photography => Icons.camera_alt_outlined,
    PartnerCategory.catering => Icons.restaurant_outlined,
    PartnerCategory.music => Icons.music_note_outlined,
    PartnerCategory.decoration => Icons.local_florist_outlined,
    PartnerCategory.venue => Icons.villa_outlined,
    null => Icons.task_alt_outlined,
  };
}

class HomeFeedScreen extends ConsumerWidget {
  const HomeFeedScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingState = ref.watch(weddingControllerProvider);
    final wedding = weddingState.wedding;
    final checklistState = ref.watch(checklistControllerProvider);

    return GradientScaffold(
      background: AppBackground.feed,
      body: wedding == null
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                SafeArea(
                  bottom: false,
                  child: EdgeFade(
                    topFadeHeight: 8,
                    bottomFadeHeight: 140,
                    child: ListView(
                      padding: const EdgeInsets.fromLTRB(
                        AppTheme.screenMargin,
                        40,
                        AppTheme.screenMargin,
                        140,
                      ),
                      children: [
                        _HeroCard(wedding: wedding),
                        const SizedBox(height: 22),
                        const _QuickLinksRow(),
                        const SizedBox(height: 26),
                        Row(
                          children: [
                            Text(
                              'Próximas tarefas',
                              style: Theme.of(context).textTheme.titleMedium,
                            ),
                            const Spacer(),
                            SnappyTap(
                              onTap: () => context.push('/checklist'),
                              child: const Text(
                                'Ver todas',
                                style: TextStyle(
                                  color: AppTheme.accentOliveDark,
                                  fontWeight: FontWeight.w700,
                                  fontSize: 13,
                                ),
                              ),
                            ),
                          ],
                        ),
                        const SizedBox(height: 12),
                        _UpcomingTasks(
                          items: checklistState.items,
                          onOpenChecklist: () => context.push('/checklist'),
                        ),
                      ],
                    ),
                  ),
                ),
                const Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: FloatingBottomNav(current: AppTab.home),
                ),
                const Positioned.fill(child: DraggableChatBubble()),
              ],
            ),
    );
  }
}

/// Atalhos diretos para os módulos que deixaram de ter tile próprio no
/// grid antigo — Orçamento, Convidados e Lugares continuam a precisar
/// de um ponto de entrada visível no Home, além de Definições.
class _QuickLinksRow extends StatelessWidget {
  const _QuickLinksRow();

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(
          child: _QuickLinkTile(
            icon: Icons.savings_outlined,
            label: 'Orçamento',
            color: AppColors.purple,
            onTap: () => context.push('/budget'),
          ),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: _QuickLinkTile(
            icon: Icons.people_outline,
            label: 'Convidados',
            color: AppColors.green,
            onTap: () => context.push('/guests'),
          ),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: _QuickLinkTile(
            icon: Icons.event_seat_outlined,
            label: 'Lugares',
            color: AppColors.blue,
            onTap: () => context.push('/seating'),
          ),
        ),
      ],
    );
  }
}

class _QuickLinkTile extends StatelessWidget {
  final IconData icon;
  final String label;
  final Color color;
  final VoidCallback onTap;

  const _QuickLinkTile({
    required this.icon,
    required this.label,
    required this.color,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(18),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 20, color: AppTheme.ink),
            const SizedBox(height: 8),
            Text(
              label,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 12),
            ),
          ],
        ),
      ),
    );
  }
}

class _HeroCard extends StatelessWidget {
  final Wedding wedding;

  const _HeroCard({required this.wedding});

  String get _dateLabel {
    final date = wedding.weddingDate;
    if (date == null) return 'DATA POR DEFINIR';
    return formatWeddingDateCaps(date);
  }

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(22, 18, 22, 24),
      decoration: BoxDecoration(
        color: AppTheme.accentOliveDark,
        borderRadius: BorderRadius.circular(28),
        boxShadow: AppTheme.cardShadowStrong,
      ),
      child: Stack(
        children: [
          const Positioned(
            top: -6,
            left: -10,
            child: Opacity(
              opacity: 0.12,
              child: Icon(Icons.eco_outlined, size: 70, color: Colors.white),
            ),
          ),
          const Positioned(
            bottom: -10,
            right: -8,
            child: Opacity(
              opacity: 0.12,
              child: Icon(Icons.eco_outlined, size: 90, color: Colors.white),
            ),
          ),
          Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(
                children: [
                  const Spacer(),
                  SnappyTap(
                    onTap: () => context.push('/settings'),
                    child: const Icon(
                      Icons.settings_outlined,
                      color: Colors.white,
                      size: 22,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 6),
              Center(
                child: Stack(
                  clipBehavior: Clip.none,
                  children: [
                    Container(
                      width: 92,
                      height: 92,
                      padding: const EdgeInsets.all(3),
                      decoration: const BoxDecoration(
                        color: Colors.white,
                        shape: BoxShape.circle,
                      ),
                      child: ClipOval(
                        child: Image.network(
                          'https://picsum.photos/seed/${wedding.id}-couple/300/300',
                          fit: BoxFit.cover,
                          errorBuilder: (context, error, stackTrace) =>
                              Container(color: AppColors.green),
                        ),
                      ),
                    ),
                    Positioned(
                      top: -2,
                      right: -2,
                      child: Container(
                        width: 26,
                        height: 26,
                        decoration: const BoxDecoration(
                          color: Colors.white,
                          shape: BoxShape.circle,
                        ),
                        child: const Icon(
                          Icons.favorite,
                          size: 13,
                          color: AppTheme.accentOliveDark,
                        ),
                      ),
                    ),
                  ],
                ),
              ),
              const SizedBox(height: 14),
              Text(
                'O nosso casamento',
                textAlign: TextAlign.center,
                style: TextStyle(
                  color: Colors.white.withValues(alpha: 0.75),
                  fontSize: 12.5,
                  fontWeight: FontWeight.w600,
                  letterSpacing: 0.4,
                ),
              ),
              const SizedBox(height: 2),
              Text(
                wedding.displayNames,
                textAlign: TextAlign.center,
                style: AppTypography.displaySerif(
                  fontSize: 26,
                  fontWeight: FontWeight.w600,
                  color: Colors.white,
                ),
              ),
              const SizedBox(height: 10),
              Row(
                children: [
                  Expanded(
                    child: Divider(color: Colors.white.withValues(alpha: 0.24)),
                  ),
                  const Padding(
                    padding: EdgeInsets.symmetric(horizontal: 8),
                    child: Icon(Icons.favorite, size: 11, color: Colors.white),
                  ),
                  Expanded(
                    child: Divider(color: Colors.white.withValues(alpha: 0.24)),
                  ),
                ],
              ),
              const SizedBox(height: 10),
              Text(
                _dateLabel,
                textAlign: TextAlign.center,
                style: const TextStyle(
                  color: Colors.white,
                  fontSize: 12.5,
                  fontWeight: FontWeight.w700,
                  letterSpacing: 0.6,
                ),
              ),
              if (wedding.location != null) ...[
                const SizedBox(height: 2),
                Text(
                  wedding.location!.toUpperCase(),
                  textAlign: TextAlign.center,
                  style: TextStyle(
                    color: Colors.white.withValues(alpha: 0.75),
                    fontSize: 11.5,
                    fontWeight: FontWeight.w600,
                    letterSpacing: 0.6,
                  ),
                ),
              ],
              const SizedBox(height: 18),
              _CountdownRow(weddingDate: wedding.weddingDate),
            ],
          ),
        ],
      ),
    );
  }
}

class _CountdownRow extends StatefulWidget {
  final DateTime? weddingDate;

  const _CountdownRow({required this.weddingDate});

  @override
  State<_CountdownRow> createState() => _CountdownRowState();
}

class _CountdownRowState extends State<_CountdownRow> {
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (mounted) setState(() {});
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final date = widget.weddingDate;
    if (date == null) return const SizedBox.shrink();

    final remaining = date.difference(DateTime.now());
    if (remaining.isNegative) {
      return const Text(
        'É hoje! 🎉',
        textAlign: TextAlign.center,
        style: TextStyle(
          color: Colors.white,
          fontWeight: FontWeight.w700,
          fontSize: 16,
        ),
      );
    }

    final days = remaining.inDays;
    final hours = remaining.inHours % 24;
    final minutes = remaining.inMinutes % 60;
    final seconds = remaining.inSeconds % 60;

    return Column(
      children: [
        Text(
          'FALTAM',
          style: TextStyle(
            color: Colors.white.withValues(alpha: 0.75),
            fontSize: 11,
            fontWeight: FontWeight.w700,
            letterSpacing: 1.2,
          ),
        ),
        const SizedBox(height: 8),
        Row(
          children: [
            Expanded(child: _CountdownBox(value: days, label: 'DIAS')),
            const SizedBox(width: 8),
            Expanded(child: _CountdownBox(value: hours, label: 'HORAS')),
            const SizedBox(width: 8),
            Expanded(child: _CountdownBox(value: minutes, label: 'MIN')),
            const SizedBox(width: 8),
            Expanded(child: _CountdownBox(value: seconds, label: 'SEG')),
          ],
        ),
      ],
    );
  }
}

class _CountdownBox extends StatelessWidget {
  final int value;
  final String label;

  const _CountdownBox({required this.value, required this.label});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          width: double.infinity,
          padding: const EdgeInsets.symmetric(vertical: 10),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(14),
          ),
          child: Text(
            value.toString().padLeft(2, '0'),
            textAlign: TextAlign.center,
            style: const TextStyle(
              color: AppTheme.accentOliveDark,
              fontWeight: FontWeight.w800,
              fontSize: 18,
            ),
          ),
        ),
        const SizedBox(height: 5),
        Text(
          label,
          style: TextStyle(
            color: Colors.white.withValues(alpha: 0.75),
            fontSize: 10,
            fontWeight: FontWeight.w700,
            letterSpacing: 0.6,
          ),
        ),
      ],
    );
  }
}

/// Top-3 tarefas por concluir, ordenadas por prazo — a mesma lógica
/// que antes vivia em "Os noivos" (`_UrgentTasksSection`), agora aqui.
class _UpcomingTasks extends StatelessWidget {
  final List<ChecklistItem> items;
  final VoidCallback onOpenChecklist;

  const _UpcomingTasks({required this.items, required this.onOpenChecklist});

  @override
  Widget build(BuildContext context) {
    final urgent = items.where((i) => !i.done && i.dueDate != null).toList()
      ..sort((a, b) => a.dueDate!.compareTo(b.dueDate!));
    final top = urgent.take(3).toList();

    if (top.isEmpty) {
      return Container(
        width: double.infinity,
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(20),
          boxShadow: AppTheme.cardShadow,
        ),
        child: const Text('Sem tarefas pendentes — bom trabalho! 🎉'),
      );
    }

    return Column(
      children: [
        for (final (index, item) in top.indexed) ...[
          _TaskRow(item: item, onTap: onOpenChecklist),
          if (index != top.length - 1) const SizedBox(height: 10),
        ],
      ],
    );
  }
}

class _TaskRow extends StatelessWidget {
  final ChecklistItem item;
  final VoidCallback onTap;

  const _TaskRow({required this.item, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final due = item.dueDate!;
    final seeds = item.assigneeSeeds;
    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(18),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Row(
          children: [
            Icon(
              item.status == ChecklistStatus.inProgress
                  ? Icons.donut_large
                  : Icons.radio_button_unchecked,
              size: 22,
              color: AppTheme.inkMuted,
            ),
            const SizedBox(width: 12),
            Container(
              width: 36,
              height: 36,
              decoration: BoxDecoration(
                color: AppColors.green,
                borderRadius: BorderRadius.circular(11),
              ),
              child: Icon(_iconForTask(item), size: 17, color: AppTheme.ink),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    item.title,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 13.5,
                    ),
                  ),
                  const SizedBox(height: 3),
                  Text(
                    'Até ${due.day.toString().padLeft(2, '0')} ${monthNamesPt[due.month - 1].substring(0, 3)}',
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: 11.5),
                  ),
                ],
              ),
            ),
            if (seeds.isNotEmpty) AssigneeCluster(seeds: seeds),
          ],
        ),
      ),
    );
  }
}
