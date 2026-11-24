import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import '../../partners/widgets/partner_cards.dart' show PartnerCarousel;
import '../../../shared/widgets/partner_suggestion_card.dart';
import '../../../shared/widgets/snap_carousel.dart';
import 'package:copo_dagua_app/features/partners/screens/partner_detail_screen.dart';
import 'package:copo_dagua_app/core/event/event_controller.dart';
import 'package:copo_dagua_app/core/partners/partner_providers.dart';
import 'package:copo_dagua_app/core/partners/promotions.dart';
import '../../../shared/widgets/feedback.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../task_actions.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/tasks/task_models.dart';
import '../../../core/theme/app_theme.dart';
import '../../partners/partner_style.dart' show CompanyCategoryPicker;
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/floating_filter_bar.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/island_sheet.dart';

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

  @override
  void initState() {
    super.initState();
    // Sempre atualizadas ao abrir (ex.: depois de uma reserva cancelada
    // pelo parceiro noutro dispositivo) — 2026-10-21.
    Future.microtask(() => ref.read(taskEngineControllerProvider.notifier).recompute());
  }

  Future<void> _openTask(EventTask task) => openTask(context, ref, task);

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

    final todoCount = state.systemActive.length + state.userTasks.where((t) => t.status == TaskStatus.active).length;
    final total = todoCount + doneItems.length;
    String date(DateTime d) => '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}';

    // Mockup «Páginas do evento» → Tarefas (2026-11-14).
    return GradientScaffold(
      background: AppBackground.feed,
      body: KitPage(
        pinnedBack: true,
        bleed: const {_PartnerSuggestions},
        children: [
          KitHeader(actions: [
            KitAddButton(tooltip: 'Nova tarefa', onTap: () => _showNewTaskSheet(context, ref)),
          ]),
          const KitTitle('Tarefas', subtitle: 'O plano guia-vos, vocês executam.'),
          KitPills([
            KitPill(
              label: 'Por fazer',
              count: todoCount,
              selected: _tab == _TasksTab.todo,
              onTap: () => setState(() => _tab = _TasksTab.todo),
            ),
            KitPill(
              label: 'Feito',
              count: doneItems.length,
              selected: _tab == _TasksTab.done,
              onTap: () => setState(() => _tab = _TasksTab.done),
            ),
          ]),
          KitSummary(
            kicker: 'O vosso plano',
            value: '${doneItems.length}',
            unit: 'de $total feitas',
            progress: total == 0 ? 0 : doneItems.length / total,
          ),
          if (_tab == _TasksTab.todo) ...[
            // Sugestões do que tem andado a procurar (migração 155).
            const _PartnerSuggestions(),
            const KitSection('Próximas tarefas'),
            if (state.loading && state.systemActive.isEmpty)
              const Padding(
                padding: EdgeInsets.symmetric(vertical: 20),
                child: Center(child: CircularProgressIndicator()),
              )
            else if (state.systemActive.isEmpty)
              const KitGroup([KitRow(title: 'Sem tarefas recomendadas por agora', sub: 'Bom trabalho!')])
            else
              KitGroup([
                for (final task in state.systemActive)
                  KitRow(
                    lead: const KitCheck(),
                    title: task.title,
                    sub: _taskSub(task),
                    trailing: task.seen ? null : const KitTag('Nova'),
                    chevron: true,
                    onTap: () => _openTask(task),
                  ),
              ]),
            const KitSection('As vossas tarefas'),
            const Padding(
              padding: EdgeInsets.only(bottom: 12),
              child: Text('Criadas por vocês, sem limite.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ),
            KitGroup([
              if (state.userTasks.where((t) => t.status == TaskStatus.active).isEmpty)
                const KitRow(title: 'Ainda não criaram nenhuma tarefa vossa.')
              else
                for (final task in state.userTasks.where((t) => t.status == TaskStatus.active))
                  KitRow(
                    lead: KitCheck(
                      onTap: () => ref.read(taskEngineControllerProvider.notifier).completeTask(task.id),
                    ),
                    title: task.title,
                    sub: task.dueDate == null ? null : 'Até ${date(task.dueDate!)}',
                  ),
            ]),
          ] else ...[
            const KitSection('Feito'),
            KitGroup([
              if (doneItems.isEmpty)
                const KitRow(title: 'Ainda não concluíram nenhuma tarefa.')
              else
                for (final task in doneItems)
                  KitRow(
                    lead: const KitCheck(done: true),
                    title: task.title,
                    done: true,
                    sub: () {
                      // Uma sugestão aberta pelo CTA fica «Explorada»; só
                      // o que precisou de ação real é «Concluída».
                      final word = task.completionSource == 'cta_opened' ? 'Explorada' : 'Concluída';
                      final at = task.completedAt;
                      return at == null ? word : '$word a ${date(at)}';
                    }(),
                  ),
            ]),
          ],
        ],
      ),
    );
  }

  /// «Sugestão» / «Para concluir» + a primeira frase da descrição.
  static String? _taskSub(EventTask task) {
    final type = task.displayType;
    final typeLabel = type == null ? null : (type == TaskDisplayType.suggestion ? 'Sugestão' : 'Para concluir');
    final desc = task.description?.split(RegExp(r'(?<=[.!?])\s')).first.trim();
    final parts = [?typeLabel, if (desc != null && desc.isNotEmpty) desc];
    return parts.isEmpty ? null : parts.join(' · ');
  }

  Future<void> _showNewTaskSheet(BuildContext context, WidgetRef ref) async {
    final result = await showIslandSheet<_NewUserTaskResult>(
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
          category: result.category,
        );
  }
}


class _NewUserTaskResult {
  final String title;
  final String? description;
  final DateTime? dueDate;
  final String? category;

  const _NewUserTaskResult({
    required this.title,
    this.description,
    this.dueDate,
    this.category,
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
  String? _category;
  String? _titleError;

  @override
  void dispose() {
    _title.dispose();
    _description.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
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
          const SizedBox(height: 14),
          CompanyCategoryPicker(selected: _category, onChanged: (c) => setState(() => _category = c)),
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
                  category: _category,
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}

/// "Para ti": parceiros (em destaque) das categorias que a pessoa tem
/// andado a procurar — ou do que o evento ainda precisa (2026-11-03).
class _PartnerSuggestions extends ConsumerWidget {
  const _PartnerSuggestions();

  Future<void> _open(BuildContext context, WidgetRef ref, FeaturedPick k) async {
    if (k.paid) trackPromotionClick(k.partnerId);
    final p = await ref.read(partnerByIdProvider(k.partnerId).future);
    if (p == null || !context.mounted) return;
    await PartnerDetailScreen.show(context, p);
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final location = ref.watch(eventControllerProvider.select((s) => s.event?.location));
    final picks = ref.watch(featuredForMeProvider((location: location, category: null, limit: 4))).value;
    if (picks == null || picks.isEmpty) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(top: 18),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        const Padding(
          padding: EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
          child: Text('Sugestões para ti',
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ),
        const Padding(
          padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 2, AppTheme.screenMargin, 10),
          child: Text('Com base no que tens procurado.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        ),
        // O mesmo cartão da página Parceiros (`PartnerBigCard`, 2026-11-22).
        PartnerCarousel(
          partners: [for (final k in picks) ?ref.watch(partnerByIdProvider(k.partnerId)).value],
          highlighted: {for (final k in picks) if (k.paid) k.partnerId},
          onTap: (p) => _open(context, ref, picks.firstWhere((k) => k.partnerId == p.id)),
        ),
      ]),
    );
  }
}
