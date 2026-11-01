import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/chat/chat_helpers.dart';
import '../../core/partners/partner_providers.dart' show PartnerPickerArgs;
import '../../core/supabase/supabase_config.dart';
import '../../core/tasks/task_engine_controller.dart';
import '../../core/tasks/task_models.dart';
import '../../core/wedding/wedding_controller.dart';
import '../../shared/widgets/island_sheet.dart';
import '../payments/open_payment.dart';

/// Abrir uma tarefa — o mesmo em "Tarefas" e em "Próximas tarefas" no
/// início (2026-11-01: algumas tarefas não faziam nada ao tocar).
/// - Usa o destino do modelo (`task_templates.action_route`), e não só a
///   categoria: "Escolher o bolo", "Juntar fotos", "Definir o programa"…
///   não tinham destino porque a categoria (festa, cerimónia, programa)
///   não estava no mapa.
/// - Parceiros abrem já filtrados pela categoria da tarefa.
/// - Tarefas manuais ("Escolher os padrinhos", "Tratar do processo na
///   conservatória"…) abrem uma folha com "Marcar como feita" — antes não
///   havia forma de as concluir.

/// Modelos de tarefa por id (só para ler o destino de cada tarefa).
final taskTemplatesByIdProvider = FutureProvider<Map<String, TaskTemplate>>((ref) async {
  try {
    final rows = await supabase.from('task_templates').select();
    return {
      for (final r in rows as List)
        (r as Map<String, dynamic>)['id'] as String: TaskTemplate.fromRow(r),
    };
  } catch (_) {
    return const {};
  }
});

IconData taskIcon(String? category) => switch (category) {
      'orcamento' => Icons.savings_outlined,
      'convidados' => Icons.people_outline,
      'lugares' => Icons.event_seat_outlined,
      'parceiros' => Icons.storefront_outlined,
      'pagamentos' => Icons.euro_rounded,
      'cerimonia' => Icons.church_outlined,
      'festa' => Icons.celebration_outlined,
      'programa' => Icons.schedule_outlined,
      _ => Icons.task_alt_outlined,
    };

String? _categoryRoute(String? category) => switch (category) {
      'orcamento' => '/budget',
      'convidados' => '/guests',
      'lugares' => '/seating',
      'parceiros' => '/partners',
      'pagamentos' => '/bookings',
      'programa' => '/guest-page',
      _ => null,
    };

/// Destino da tarefa: o do modelo, senão o da categoria.
String? taskRoute(WeddingTask task, TaskTemplate? tpl) => tpl?.actionRoute ?? _categoryRoute(task.category);

void _go(BuildContext context, String route, TaskTemplate? tpl) {
  final uri = Uri.parse(route);
  if (uri.path == '/partners') {
    final slug = uri.queryParameters['category'] ?? tpl?.partnerCategorySlug;
    context.push('/partners', extra: PartnerPickerArgs(categorySlug: slug));
    return;
  }
  context.push(route);
}

Future<void> openTask(BuildContext context, WidgetRef ref, WeddingTask task) async {
  final notifier = ref.read(taskEngineControllerProvider.notifier);
  if (!task.seen) notifier.markTaskSeen(task.id);

  // "Rever proposta — {parceiro}": abre a conversa com esse parceiro.
  if (task.category == 'parceiros' && task.title.startsWith('Rever proposta') && task.sourceEntityId != null) {
    final weddingId = ref.read(weddingControllerProvider).wedding?.id;
    if (weddingId != null) {
      try {
        final conversation = await resolveProposalConversation(weddingId: weddingId, proposalId: task.sourceEntityId!);
        if (context.mounted) context.push('/chat/${conversation.id}', extra: conversation);
        return;
      } catch (_) {/* segue para o destino normal */}
    }
  }

  // "Pagar sinal — …": abre logo o pagamento.
  if (isPaymentTask(task.category, task.sourceEntityId)) {
    if (context.mounted) await openPaymentFlow(context, ref, task.sourceEntityId!);
    return;
  }

  final templates = await ref.read(taskTemplatesByIdProvider.future);
  final tpl = task.taskTemplateId == null ? null : templates[task.taskTemplateId];
  final route = taskRoute(task, tpl);
  if (!context.mounted) return;

  // Manual (ou sem destino): folha com a descrição e "Marcar como feita".
  if (task.completionBehavior == TaskCompletionBehavior.manual || route == null) {
    final action = await showIslandSheet<String>(
      context: context,
      builder: (ctx) => SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 20, 20, 12),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Text(task.title, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700)),
            if ((task.description ?? '').trim().isNotEmpty) ...[
              const SizedBox(height: 8),
              Text(task.description!.trim(), style: const TextStyle(fontSize: 14, height: 1.45)),
            ],
            const SizedBox(height: 18),
            FilledButton.icon(
              onPressed: () => Navigator.of(ctx).pop('done'),
              icon: const Icon(Icons.check_rounded),
              label: const Text('Marcar como feita'),
            ),
            if (route != null) ...[
              const SizedBox(height: 8),
              OutlinedButton(onPressed: () => Navigator.of(ctx).pop('open'), child: const Text('Abrir')),
            ],
            const SizedBox(height: 4),
            TextButton(onPressed: () => Navigator.of(ctx).pop(), child: const Text('Agora não')),
          ]),
        ),
      ),
    );
    if (!context.mounted) return;
    if (action == 'done') {
      await notifier.completeTask(task.id);
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('"${task.title}" feita.')));
      }
    } else if (action == 'open' && route != null) {
      _go(context, route, tpl);
    }
    return;
  }

  // Sugestão: conclui-se ao abrir.
  if (task.completionBehavior == TaskCompletionBehavior.ctaOpened) notifier.completeCtaTask(task.id);
  _go(context, route, tpl);
}
