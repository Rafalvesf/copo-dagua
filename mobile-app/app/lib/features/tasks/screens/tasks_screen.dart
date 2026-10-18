import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/chat/chat_helpers.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/tasks/task_models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/floating_filter_bar.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

enum _TasksTab { todo, done }

/// "Tarefas" — motor de tarefas contextual (pedido explícito e
/// extenso do utilizador, 2026-09-01). Duas abas: "Por fazer"
/// (`source=system` ativas — no máximo [kMaxActiveSystemTasks] em
/// simultâneo, o motor recalcula/promove automaticamente, ver
/// `task_engine_controller.dart` — e `source=user` sem limite) e
/// "Feito" (histórico). Dentro de "Por fazer", cada tarefa mostra um
/// selo "SUGESTÃO" ou "PARA CONCLUIR" ([TaskDisplayType]) — pedido
/// explícito do utilizador para tornar imediatamente percetível se
/// aquilo é só uma recomendação (conclui-se ao abrir o CTA) ou algo
/// que precisa mesmo de ficar tratado (só conclui quando os dados
/// reais confirmarem, nunca só por ter sido aberto — ver
/// [TaskCompletionBehavior]).
class TasksScreen extends ConsumerStatefulWidget {
  const TasksScreen({super.key});

  @override
  ConsumerState<TasksScreen> createState() => _TasksScreenState();
}

class _TasksScreenState extends ConsumerState<TasksScreen> {
  _TasksTab _tab = _TasksTab.todo;

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
    // "Pagar sinal — …": leva às Reservas, onde está o botão de pagar.
    'pagamentos' => '/bookings',
    _ => null,
  };

  static Color _priorityColor(TaskPriority priority) => switch (priority) {
    TaskPriority.urgent => AppStatusColors.declined,
    TaskPriority.high => AppTheme.accentOliveDark,
    TaskPriority.normal => AppTheme.inkMuted,
    TaskPriority.low => AppTheme.inkMuted,
  };

  Future<void> _openTask(WeddingTask task) async {
    final notifier = ref.read(taskEngineControllerProvider.notifier);
    if (!task.seen) notifier.markTaskSeen(task.id);
    // Uma sugestão (`cta_opened`) conclui-se no primeiro clique válido
    // no CTA — nunca uma tarefa `action_completed`/`manual`, essas só
    // ficam "Feito" quando os dados reais confirmarem a ação, ou o
    // casal a marcar manualmente. Ver `task_models.dart`.
    if (task.completionBehavior == TaskCompletionBehavior.ctaOpened) {
      notifier.completeCtaTask(task.id);
    }

    // "Rever proposta — {parceiro}" (task_engine_controller.dart) é a
    // única tarefa de categoria 'parceiros' que representa uma resposta
    // concreta de um parceiro específico — leva à conversa real com ele
    // em vez do Marketplace genérico (bug real reportado pelo
    // utilizador, 2026-09-05).
    if (task.category == 'parceiros' &&
        task.title.startsWith('Rever proposta') &&
        task.sourceEntityId != null) {
      final weddingId = ref.read(weddingControllerProvider).wedding?.id;
      if (weddingId != null) {
        try {
          final conversation = await resolveProposalConversation(
            weddingId: weddingId,
            proposalId: task.sourceEntityId!,
          );
          if (mounted) {
            context.push('/chat/${conversation.id}', extra: conversation);
          }
          return;
        } catch (_) {
          // Cai no comportamento antigo abaixo se não conseguir resolver
          // a conversa (ex: proposta entretanto apagada).
        }
      }
    }

    final route = _routeForCategory(task.category);
    if (route != null && mounted) context.push(route);
  }

  @override
  Widget build(BuildContext context) {
    final state = ref.watch(taskEngineControllerProvider);
    final doneItems =
        [
          ...state.systemDone,
          ...state.userTasks.where((t) => t.status == TaskStatus.completed),
        ]..sort(
          (a, b) => (b.completedAt ?? b.createdAt).compareTo(
            a.completedAt ?? a.createdAt,
          ),
        );

    return GradientScaffold(
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: EdgeFade(
              topFadeHeight: 8,
              bottomFadeHeight: 140,
              child: ListView(
                padding: EdgeInsets.only(
                  bottom: FloatingFilterBar.bottomPadding(aboveNav: false),
                ),
                children: [
                  PageHeader(
                    title: 'Tarefas',
                    // Redesign 2026-10: mesmo topo que Orçamento/Lugares —
                    // voltar · título ao centro · "+".
                    centered: true,
                    trailing: AddActionButton(
                      onTap: () => _showNewTaskSheet(context, ref),
                    ),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
                    child: Builder(builder: (context) {
                      final total = state.systemActive.length +
                          state.userTasks.where((t) => t.status == TaskStatus.active).length +
                          doneItems.length;
                      return GreenHero(
                        label: 'O VOSSO PLANO',
                        value: '${doneItems.length}',
                        suffix: 'de $total feitas',
                        progress: total == 0 ? 0 : doneItems.length / total,
                        doodles: const [Icons.checklist_rounded, Icons.favorite_border, Icons.auto_awesome_outlined],
                        footer: Transform.rotate(
                          angle: -0.035,
                          alignment: Alignment.centerLeft,
                          child: const HeroPill('O plano guia-vos, vocês executam', solid: true),
                        ),
                      );
                    }),
                  ),
                  Padding(
                    padding: const EdgeInsets.fromLTRB(
                      AppTheme.screenMargin,
                      8,
                      AppTheme.screenMargin,
                      0,
                    ),
                    child: _tab == _TasksTab.todo
                        ? Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              const SectionTitle('Próximas tarefas'),
                              if (state.loading && state.systemActive.isEmpty)
                                const Padding(
                                  padding: EdgeInsets.symmetric(vertical: 20),
                                  child: Center(
                                    child: CircularProgressIndicator(),
                                  ),
                                )
                              else if (state.systemActive.isEmpty)
                                Container(
                                  width: double.infinity,
                                  padding: const EdgeInsets.all(18),
                                  decoration: whiteLineCard(radius: 20),
                                  child: const Text(
                                    'Sem tarefas recomendadas por agora — bom trabalho! 🎉',
                                  ),
                                )
                              else
                                for (final (i, task) in state.systemActive.indexed) ...[
                                  _TaskRow(
                                    task: task,
                                    index: i,
                                    icon: _iconForCategory(task.category),
                                    color: _priorityColor(task.priority),
                                    onTap: () => _openTask(task),
                                  ),
                                  const SizedBox(height: 10),
                                ],
                              const SizedBox(height: 4),
                              const Text('As tuas tarefas',
                                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                              const SizedBox(height: 4),
                              Text(
                                'Criadas por vocês — sem limite, sem pressa.',
                                style: TextStyle(
                                  color: AppTheme.inkMuted,
                                  fontSize: AppFontSize.sm,
                                ),
                              ),
                              const SizedBox(height: 12),
                              if (state.userTasks
                                  .where((t) => t.status == TaskStatus.active)
                                  .isEmpty)
                                Container(
                                  width: double.infinity,
                                  padding: const EdgeInsets.all(18),
                                  decoration: whiteLineCard(radius: 20),
                                  child: const Text(
                                    'Ainda não criaram nenhuma tarefa vossa.',
                                  ),
                                )
                              else
                                for (final task in state.userTasks.where(
                                  (t) => t.status == TaskStatus.active,
                                )) ...[
                                  _UserTaskRow(
                                    task: task,
                                    onComplete: () => ref
                                        .read(
                                          taskEngineControllerProvider.notifier,
                                        )
                                        .completeTask(task.id),
                                  ),
                                  const SizedBox(height: 10),
                                ],
                            ],
                          )
                        : Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                              SectionTitle('Feito',
                                  trailing: Text('${doneItems.length} ${doneItems.length == 1 ? 'tarefa' : 'tarefas'}',
                                      style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
                              if (doneItems.isEmpty)
                                Container(
                                  width: double.infinity,
                                  padding: const EdgeInsets.all(18),
                                  decoration: whiteLineCard(radius: 20),
                                  child: const Text(
                                    'Ainda não concluíram nenhuma tarefa.',
                                  ),
                                )
                              else
                                for (final task in doneItems) ...[
                                  _DoneTaskRow(
                                    task: task,
                                    icon: _iconForCategory(task.category),
                                  ),
                                  const SizedBox(height: 10),
                                ],
                            ],
                          ),
                  ),
                ],
              ),
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: FloatingFilterBar(
              items: [
                FilterBarItem('Por fazer'),
                FilterBarItem('Feito'),
              ],
              selected: _tab == _TasksTab.todo ? 0 : 1,
              onSelected: (i) => setState(
                () => _tab = i == 0 ? _TasksTab.todo : _TasksTab.done,
              ),
            ),
          ),
        ],
      ),
    );
  }

  Future<void> _showNewTaskSheet(BuildContext context, WidgetRef ref) async {
    final result = await showModalBottomSheet<_NewUserTaskResult>(
      context: context,
      isScrollControlled: true,
      builder: (context) => const _NewUserTaskSheet(),
    );
    if (result == null) return;
    await ref
        .read(taskEngineControllerProvider.notifier)
        .createUserTask(
          title: result.title,
          description: result.description,
          dueDate: result.dueDate,
        );
  }
}


class _TaskRow extends StatelessWidget {
  final WeddingTask task;
  final IconData icon;
  final Color color;
  final VoidCallback onTap;
  final int index;

  const _TaskRow({
    required this.task,
    required this.icon,
    required this.color,
    required this.onTap,
    this.index = 0,
  });

  // Como "Próximas tarefas" no design: ícone num quadrado verde, ponto
  // de prioridade, título numa linha, selo NOVA, e uma só linha por
  // baixo com "Sugestão"/"Para concluir" + o resumo (menos texto).
  Color get _priorityColor => switch (task.priority) {
        TaskPriority.urgent || TaskPriority.high => const Color(0xFFC8553D),
        TaskPriority.normal => const Color(0xFFF2A01B),
        TaskPriority.low => const Color(0xFF3F8A5A),
      };

  @override
  Widget build(BuildContext context) {
    final type = task.displayType;
    final typeLabel = type == null
        ? null
        : (type == TaskDisplayType.suggestion ? 'Sugestão' : 'Para concluir');
    final desc = task.description?.split(RegExp(r'(?<=[.!?])\s')).first.trim();
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: whiteLineCard(),
        child: Row(
          children: [
            StickerIcon(icon, turns: StickerIcon.tilt(index)),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      Container(
                        width: 8,
                        height: 8,
                        decoration: BoxDecoration(color: _priorityColor, shape: BoxShape.circle),
                      ),
                      const SizedBox(width: 6),
                      Flexible(
                        child: Text(
                          task.title,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 14),
                        ),
                      ),
                      if (!task.seen) ...[
                        const SizedBox(width: 6),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 6, vertical: 2),
                          decoration: BoxDecoration(
                            color: AppTheme.accentOliveDark,
                            borderRadius: BorderRadius.circular(AppRadius.pill),
                          ),
                          child: const Text(
                            'NOVA',
                            style: TextStyle(
                              color: Colors.white,
                              fontSize: 11,
                              fontWeight: FontWeight.w700,
                              letterSpacing: 0.4,
                            ),
                          ),
                        ),
                      ],
                    ],
                  ),
                  if (typeLabel != null || (desc != null && desc.isNotEmpty)) ...[
                    const SizedBox(height: 4),
                    Text.rich(
                      TextSpan(children: [
                        if (typeLabel != null)
                          TextSpan(
                            text: typeLabel,
                            style: TextStyle(
                              fontWeight: FontWeight.w700,
                              color: type == TaskDisplayType.suggestion
                                  ? AppTheme.inkMuted
                                  : AppTheme.accentOliveDark,
                            ),
                          ),
                        if (typeLabel != null && desc != null && desc.isNotEmpty)
                          const TextSpan(text: ' · '),
                        if (desc != null && desc.isNotEmpty) TextSpan(text: desc),
                      ]),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(color: AppTheme.inkMuted, fontSize: 12),
                    ),
                  ],
                ],
              ),
            ),
            const SizedBox(width: 6),
            const Icon(Icons.chevron_right, size: 18, color: Color(0xFF8F8B84)),
          ],
        ),
      ),
    );
  }
}

/// Linha do histórico ("Feito") — pedido explícito do utilizador: uma
/// sugestão concluída ao abrir o CTA mostra "Explorado", nunca
/// "Concluído" (essa palavra fica só para tarefas que precisaram
/// mesmo de uma ação real). Internamente ambas continuam `completed`,
/// isto é só apresentação (`completionSource` já guarda o `'cta_opened'`
/// que distingue as duas, ver `task_engine_controller.dart`).
class _DoneTaskRow extends StatelessWidget {
  final WeddingTask task;
  final IconData icon;

  const _DoneTaskRow({required this.task, required this.icon});

  String _formatDate(DateTime d) =>
      '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}/${d.year}';

  @override
  Widget build(BuildContext context) {
    final wasCtaOpened = task.completionSource == 'cta_opened';
    final at = task.completedAt;
    final label = at == null
        ? (wasCtaOpened ? 'Explorado' : 'Concluído')
        : '${wasCtaOpened ? 'Explorado' : 'Concluído'} a ${_formatDate(at)}';

    return Container(
      padding: const EdgeInsets.all(14),
      decoration: whiteLineCard(radius: 20),
      child: Row(
        children: [
          Container(
            width: 26,
            height: 26,
            decoration: BoxDecoration(
              color: AppTheme.accentOliveDark,
              borderRadius: BorderRadius.circular(9),
            ),
            child: const Icon(Icons.check_rounded, size: 16, color: Colors.white),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  task.title,
                  style: const TextStyle(
                    fontWeight: FontWeight.w700,
                    fontSize: AppFontSize.base,
                    color: Color(0xFF8F8B84),
                    decoration: TextDecoration.lineThrough,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  label,
                  style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.xs),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _UserTaskRow extends StatelessWidget {
  final WeddingTask task;
  final VoidCallback onComplete;

  const _UserTaskRow({required this.task, required this.onComplete});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: whiteLineCard(radius: 20),
      child: Row(
        children: [
          SnappyTap(
            onTap: onComplete,
            child: Container(
              width: 26,
              height: 26,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(9),
                border: Border.all(color: AppTheme.accentOliveDark, width: 2),
              ),
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  task.title,
                  style: const TextStyle(
                    fontWeight: FontWeight.w700,
                    fontSize: AppFontSize.md,
                  ),
                ),
                if (task.dueDate != null) ...[
                  const SizedBox(height: 2),
                  Text(
                    '${task.dueDate!.day.toString().padLeft(2, '0')}/${task.dueDate!.month.toString().padLeft(2, '0')}/${task.dueDate!.year}',
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.xs),
                  ),
                ],
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _NewUserTaskResult {
  final String title;
  final String? description;
  final DateTime? dueDate;

  const _NewUserTaskResult({
    required this.title,
    this.description,
    this.dueDate,
  });
}

class _NewUserTaskSheet extends StatefulWidget {
  const _NewUserTaskSheet();

  @override
  State<_NewUserTaskSheet> createState() => _NewUserTaskSheetState();
}

class _NewUserTaskSheetState extends State<_NewUserTaskSheet> {
  final _title = TextEditingController();
  final _description = TextEditingController();
  DateTime? _dueDate;
  String? _titleError;

  @override
  void dispose() {
    _title.dispose();
    _description.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: 20,
        right: 20,
        top: 20,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text('Nova tarefa', style: Theme.of(context).textTheme.titleLarge),
          const SizedBox(height: 16),
          AuthTextField(
            label: 'Título',
            controller: _title,
            errorText: _titleError,
          ),
          const SizedBox(height: 12),
          AuthTextField(
            label: 'Descrição (opcional)',
            controller: _description,
          ),
          const SizedBox(height: 12),
          DatePickerField(
            label: 'Prazo (opcional)',
            value: _dueDate,
            onChanged: (d) => setState(() => _dueDate = d),
          ),
          const SizedBox(height: 16),
          PrimaryButton(
            label: 'Adicionar',
            onPressed: () {
              setState(() {
                _titleError = _title.text.trim().isEmpty
                    ? 'A tarefa precisa de um título'
                    : null;
              });
              if (_titleError != null) return;
              Navigator.of(context).pop(
                _NewUserTaskResult(
                  title: _title.text.trim(),
                  description: _description.text.trim().isEmpty
                      ? null
                      : _description.text.trim(),
                  dueDate: _dueDate,
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}
