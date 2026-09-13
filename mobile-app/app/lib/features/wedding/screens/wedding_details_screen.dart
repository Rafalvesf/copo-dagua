import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/budget/budget_controller.dart';
import '../../../core/budget/expense_controller.dart';
import '../../../core/home/home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../guests/screens/guests_list_screen.dart' show InviteShareSheet;
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/initials_avatar.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// "Os noivos" — cartão banner "O nosso casamento" (foto de capa +
/// contagem decrescente) e o resumo do dashboard (orçamento, atalhos,
/// suporte, pagamentos, reservas, próximas tarefas). Pedido explícito
/// do utilizador (2026-09-01): "trocas o conteúdo do home com o
/// conteúdo do os noivos, sem mexer no conteúdo" — este ecrã passou a
/// ter o conteúdo que antes vivia em `home_feed_screen.dart`
/// (`HomeFeedScreen`), sem nenhuma alteração ao próprio conteúdo.
class WeddingDetailsScreen extends ConsumerWidget {
  const WeddingDetailsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingState = ref.watch(weddingControllerProvider);
    final wedding = weddingState.wedding;

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
                        const _FinancialSummaryRow(),
                        const SizedBox(height: 16),
                        _ShareWeddingButton(wedding: wedding),
                        const SizedBox(height: 16),
                        const _QuickLinksRow(),
                        const SizedBox(height: 22),
                        const _UpcomingPaymentsCard(),
                        const SizedBox(height: 14),
                        const _BookingsSection(),
                        const SizedBox(height: 26),
                        Row(
                          children: [
                            Text(
                              'Próximas tarefas',
                              style: Theme.of(context).textTheme.titleMedium,
                            ),
                            const Spacer(),
                            SnappyTap(
                              onTap: () => context.push('/tasks'),
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
                        const _UpcomingTasksSection(),
                      ],
                    ),
                  ),
                ),
                const Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: FloatingBottomNav(current: AppTab.wedding),
                ),
              ],
            ),
    );
  }
}

/// Cartão banner "O nosso casamento" — foto de capa do casal +
/// contagem decrescente até ao grande dia. Usa
/// [Wedding.coverPhotoUrlCacheBusted] em vez do URL cru: o caminho no
/// Storage é fixo por casamento (`upsert: true`), por isso um novo
/// upload devolvia sempre o mesmo URL e o browser continuava a
/// mostrar a imagem antiga em cache (pedido explícito do utilizador:
/// "a imagem no o nosso casamento não quer atualizar").
class _HeroCard extends ConsumerStatefulWidget {
  final Wedding wedding;

  const _HeroCard({required this.wedding});

  @override
  ConsumerState<_HeroCard> createState() => _HeroCardState();
}

class _HeroCardState extends ConsumerState<_HeroCard> {
  bool _uploading = false;

  String get _dateLabel {
    final date = widget.wedding.weddingDate;
    if (date == null) return 'DATA POR DEFINIR';
    return formatWeddingDateCaps(date);
  }

  Future<void> _pickBanner() async {
    final picker = ImagePicker();
    final file = await picker.pickImage(source: ImageSource.gallery, imageQuality: 85);
    if (file == null || !mounted) return;
    setState(() => _uploading = true);
    try {
      await ref.read(weddingControllerProvider.notifier).uploadBanner(file);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível carregar a foto.')),
        );
      }
    } finally {
      if (mounted) setState(() => _uploading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final wedding = widget.wedding;
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.fromLTRB(22, 22, 22, 40),
      decoration: BoxDecoration(
        color: AppTheme.accentOliveDark,
        borderRadius: BorderRadius.circular(28),
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
              Stack(
                clipBehavior: Clip.none,
                alignment: Alignment.bottomCenter,
                children: [
                  SnappyTap(
                    onTap: _uploading ? null : _pickBanner,
                    child: ClipRRect(
                      borderRadius: BorderRadius.circular(20),
                      child: SizedBox(
                        height: 214,
                        width: double.infinity,
                        child: Stack(
                          fit: StackFit.expand,
                          children: [
                            if (wedding.coverPhotoUrlCacheBusted != null)
                              Image.network(
                                wedding.coverPhotoUrlCacheBusted!,
                                fit: BoxFit.cover,
                                errorBuilder: (context, error, stackTrace) =>
                                    Container(color: AppTheme.accentOliveDark),
                              )
                            else
                              Container(
                                color: AppTheme.accentOliveDark,
                                alignment: Alignment.center,
                                child: Column(
                                  mainAxisSize: MainAxisSize.min,
                                  children: [
                                    Icon(
                                      Icons.add_photo_alternate_outlined,
                                      size: 30,
                                      color: Colors.white.withValues(alpha: 0.85),
                                    ),
                                    const SizedBox(height: 6),
                                    Text(
                                      'Adicionar foto',
                                      style: TextStyle(
                                        color: Colors.white.withValues(alpha: 0.85),
                                        fontSize: 12.5,
                                        fontWeight: FontWeight.w700,
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            if (_uploading)
                              Container(
                                color: Colors.black.withValues(alpha: 0.35),
                                alignment: Alignment.center,
                                child: const CircularProgressIndicator(
                                  color: Colors.white,
                                  strokeWidth: 2.5,
                                ),
                              ),
                          ],
                        ),
                      ),
                    ),
                  ),
                  Positioned(
                    top: 14,
                    left: 10,
                    child: SnappyTap(
                      onTap: _uploading ? null : _pickBanner,
                      child: Container(
                        width: 30,
                        height: 30,
                        decoration: const BoxDecoration(
                          color: Colors.white,
                          shape: BoxShape.circle,
                        ),
                        child: const Icon(
                          Icons.camera_alt_outlined,
                          size: 15,
                          color: AppTheme.accentOliveDark,
                        ),
                      ),
                    ),
                  ),
                  Positioned(
                    bottom: -32,
                    child: Container(
                      constraints: const BoxConstraints(maxWidth: 260),
                      padding: const EdgeInsets.symmetric(horizontal: 22, vertical: 12),
                      decoration: BoxDecoration(
                        color: AppTheme.accentOliveDark,
                        borderRadius: BorderRadius.circular(18),
                      ),
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            'O nosso casamento',
                            textAlign: TextAlign.center,
                            style: TextStyle(
                              color: Colors.white.withValues(alpha: 0.85),
                              fontSize: 11.5,
                              fontWeight: FontWeight.w600,
                              letterSpacing: 0.4,
                            ),
                          ),
                          const SizedBox(height: 2),
                          Text(
                            wedding.displayNames,
                            textAlign: TextAlign.center,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: AppTypography.displaySerif(
                              fontSize: 20,
                              color: Colors.white,
                            ).copyWith(
                              decoration: TextDecoration.underline,
                              decorationColor: Colors.white,
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 46),
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

/// Atalhos diretos para os módulos que deixaram de ter tile próprio no
/// grid antigo — Orçamento, Convidados e Lugares continuam a precisar
/// de um ponto de entrada visível, além de Definições.
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
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(18),
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

/// Botão de partilha do casamento — pedido explícito do utilizador:
/// "o botao de partilha para o casamento deve aparecer entre os o
/// orcamento gasto e parceiros reservados [_FinancialSummaryRow] e o
/// orcamento, convidados e lugaares [_QuickLinksRow]". Reaproveita
/// [InviteShareSheet], já construído em `guests_list_screen.dart`
/// (link de convite + código do casal) — mesmo conteúdo, só um segundo
/// ponto de entrada, sem duplicar lógica.
class _ShareWeddingButton extends StatelessWidget {
  final Wedding wedding;

  const _ShareWeddingButton({required this.wedding});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: () => showModalBottomSheet(
        context: context,
        isScrollControlled: true,
        builder: (context) => InviteShareSheet(wedding: wedding),
      ),
      child: Container(
        width: double.infinity,
        padding: const EdgeInsets.symmetric(vertical: 14),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(18),
        ),
        child: const Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Icon(Icons.ios_share, size: 18, color: AppTheme.ink),
            SizedBox(width: 8),
            Text(
              'Partilhar convite',
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: 13.5),
            ),
          ],
        ),
      ),
    );
  }
}

/// Top-3 tarefas recomendadas pelo motor de tarefas
/// (`core/tasks/task_engine_controller.dart`) — substitui a antiga
/// leitura direta de `checklist_items`. Pedido explícito do
/// utilizador (2026-09-01): nunca mostrar dezenas de tarefas, só as
/// que o motor já promoveu a `ACTIVE`.
class _UpcomingTasksSection extends ConsumerWidget {
  const _UpcomingTasksSection();

  static IconData _iconForCategory(String? category) => switch (category) {
    'orcamento' => Icons.savings_outlined,
    'convidados' => Icons.people_outline,
    'lugares' => Icons.event_seat_outlined,
    'parceiros' => Icons.storefront_outlined,
    _ => Icons.task_alt_outlined,
  };

  static String? _routeForCategory(String? category) => switch (category) {
    'orcamento' => '/budget',
    'convidados' => '/guests',
    'lugares' => '/seating',
    'parceiros' => '/partners',
    _ => null,
  };

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final state = ref.watch(taskEngineControllerProvider);
    final top = state.systemActive.take(3).toList();

    if (top.isEmpty) {
      return Container(
        width: double.infinity,
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(20),
        ),
        child: const Text('Sem tarefas pendentes — bom trabalho! 🎉'),
      );
    }

    return Column(
      children: [
        for (final (index, task) in top.indexed) ...[
          _TaskRow(
            title: task.title,
            description: task.description,
            icon: _iconForCategory(task.category),
            onTap: () {
              if (!task.seen) {
                ref.read(taskEngineControllerProvider.notifier).markTaskSeen(task.id);
              }
              final route = _routeForCategory(task.category);
              context.push(route ?? '/tasks');
            },
          ),
          if (index != top.length - 1) const SizedBox(height: 10),
        ],
      ],
    );
  }
}

class _TaskRow extends StatelessWidget {
  final String title;
  final String? description;
  final IconData icon;
  final VoidCallback onTap;

  const _TaskRow({
    required this.title,
    this.description,
    required this.icon,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(18),
        ),
        child: Row(
          children: [
            Container(
              width: 36,
              height: 36,
              decoration: BoxDecoration(
                color: AppColors.green,
                borderRadius: BorderRadius.circular(11),
              ),
              child: Icon(icon, size: 17, color: AppTheme.ink),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    title,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 13.5,
                    ),
                  ),
                  if (description != null) ...[
                    const SizedBox(height: 3),
                    Text(
                      description!,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(color: AppTheme.inkMuted, fontSize: 11.5),
                    ),
                  ],
                ],
              ),
            ),
            const Icon(Icons.chevron_right, size: 18, color: AppTheme.inkMuted),
          ],
        ),
      ),
    );
  }
}

/// Orçamento gasto/total e nº de reservas confirmadas.
class _FinancialSummaryRow extends ConsumerWidget {
  const _FinancialSummaryRow();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final budget = ref.watch(budgetControllerProvider).budget;
    final bookingsAsync = ref.watch(coupleBookingsProvider);
    final confirmedCount = bookingsAsync.maybeWhen(
      data: (list) =>
          list.where((b) => b.status == BookingStatus.confirmado).length,
      orElse: () => 0,
    );

    return Row(
      children: [
        Expanded(
          child: _SummaryTile(
            label: 'Orçamento gasto',
            value: budget == null
                ? '—'
                : '${budget.spent.toStringAsFixed(0)} € / ${budget.total.toStringAsFixed(0)} €',
            color: AppColors.purple,
          ),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: _SummaryTile(
            label: 'Parceiros reservados',
            value: '$confirmedCount',
            color: AppColors.green,
          ),
        ),
      ],
    );
  }
}

class _SummaryTile extends StatelessWidget {
  final String label;
  final String value;
  final Color color;

  const _SummaryTile({
    required this.label,
    required this.value,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(20),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 28,
            height: 28,
            decoration: BoxDecoration(color: color, shape: BoxShape.circle),
          ),
          const SizedBox(height: 10),
          Text(
            value,
            style: const TextStyle(
              fontWeight: FontWeight.w800,
              fontSize: 18,
              color: AppTheme.ink,
            ),
          ),
          const SizedBox(height: 2),
          Text(
            label,
            style: const TextStyle(color: AppTheme.inkMuted, fontSize: 12),
          ),
        ],
      ),
    );
  }
}

/// Despesas não pagas com prazo próximo.
class _UpcomingPaymentsCard extends ConsumerWidget {
  const _UpcomingPaymentsCard();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final pending = ref.watch(expenseControllerProvider).pending;
    final withDueDate = pending.where((e) => e.dueDate != null).toList()
      ..sort((a, b) => a.dueDate!.compareTo(b.dueDate!));
    final soon = withDueDate.take(3).toList();

    if (soon.isEmpty) return const SizedBox.shrink();

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        color: AppStatusColors.declined.withValues(alpha: 0.1),
        borderRadius: BorderRadius.circular(20),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Assuntos urgentes — pagamentos (${withDueDate.length})',
            style: const TextStyle(
              fontWeight: FontWeight.w700,
              fontSize: 13,
              color: AppTheme.ink,
            ),
          ),
          const SizedBox(height: 8),
          for (final expense in soon)
            Padding(
              padding: const EdgeInsets.only(top: 4),
              child: Text(
                '${expense.title} — ${expense.amount.toStringAsFixed(0)} € até '
                '${expense.dueDate!.day.toString().padLeft(2, '0')} '
                '${monthNamesPt[expense.dueDate!.month - 1].substring(0, 3)}',
                style: const TextStyle(fontSize: 12.5, color: AppTheme.ink),
              ),
            ),
        ],
      ),
    );
  }
}

/// Reservas do casal (parceiros contratados).
class _BookingsSection extends ConsumerWidget {
  const _BookingsSection();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final bookingsAsync = ref.watch(coupleBookingsProvider);

    return bookingsAsync.when(
      loading: () => const SizedBox.shrink(),
      error: (err, st) => const SizedBox.shrink(),
      data: (bookings) {
        if (bookings.isEmpty) return const SizedBox.shrink();
        return Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Row(
              children: [
                Text(
                  'Reservas',
                  style: Theme.of(context).textTheme.titleMedium,
                ),
                const Spacer(),
                SnappyTap(
                  onTap: () => context.push('/bookings'),
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
            SnappyTap(
              onTap: () => context.push('/bookings'),
              child: Container(
                width: double.infinity,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: AppTheme.surface,
                  borderRadius: BorderRadius.circular(20),
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    for (final booking in bookings)
                      Padding(
                        padding: const EdgeInsets.only(bottom: 8),
                        child: Row(
                          children: [
                            booking.partnerLogoUrl == null
                                ? InitialsAvatar(
                                    name: booking.partnerName,
                                    radius: 16,
                                  )
                                : CircleAvatar(
                                    radius: 16,
                                    backgroundColor: AppColors.gray,
                                    backgroundImage: NetworkImage(
                                      booking.partnerLogoUrl!,
                                    ),
                                  ),
                            const SizedBox(width: 10),
                            Expanded(
                              child: Text(
                                booking.partnerName,
                                style: const TextStyle(
                                  fontWeight: FontWeight.w600,
                                  fontSize: 13,
                                ),
                              ),
                            ),
                            Text(
                              '${booking.amount.toStringAsFixed(0)} €',
                              style: const TextStyle(
                                color: AppTheme.inkMuted,
                                fontSize: 12.5,
                              ),
                            ),
                          ],
                        ),
                      ),
                  ],
                ),
              ),
            ),
          ],
        );
      },
    );
  }
}
