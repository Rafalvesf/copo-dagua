import 'dart:async';

import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../supabase/supabase_config.dart';
import '../wedding/wedding_controller.dart';
import 'task_models.dart';

/// Máximo de tarefas `SYSTEM` visíveis em simultâneo (RN33/59 do
/// pedido do utilizador) — tarefas `USER` não contam para este limite.
const int kMaxActiveSystemTasks = 4;

class TaskEngineState {
  final bool loading;
  final List<WeddingTask> systemActive;
  final List<WeddingTask> systemDone;
  final List<WeddingTask> userTasks;
  final List<AppNotification> notifications;

  const TaskEngineState({
    this.loading = false,
    this.systemActive = const [],
    this.systemDone = const [],
    this.userTasks = const [],
    this.notifications = const [],
  });

  int get unreadNotificationCount => notifications.where((n) => !n.read).length;
  int get unseenTaskCount => systemActive.where((t) => !t.seen).length;

  TaskEngineState copyWith({
    bool? loading,
    List<WeddingTask>? systemActive,
    List<WeddingTask>? systemDone,
    List<WeddingTask>? userTasks,
    List<AppNotification>? notifications,
  }) {
    return TaskEngineState(
      loading: loading ?? this.loading,
      systemActive: systemActive ?? this.systemActive,
      systemDone: systemDone ?? this.systemDone,
      userTasks: userTasks ?? this.userTasks,
      notifications: notifications ?? this.notifications,
    );
  }
}

/// Contexto de dados reais recolhido a cada recálculo — usado pelos
/// avaliadores de elegibilidade/conclusão. Nunca inventa números: cada
/// campo vem diretamente de uma tabela real.
class _TaskContext {
  final bool budgetExists;
  final int guestCount;
  final int pendingRsvpCount;
  final int confirmedGuestCount;
  final int seatingTableCount;
  final Map<String, String> servicePreferences; // slug -> needed/already_booked/not_needed
  final Set<String> favoriteCategorySlugs;
  final Set<String> quoteRequestCategorySlugs;
  final Set<String> proposalSentCategorySlugs;
  final Set<String> confirmedBookingCategorySlugs;
  final Set<String> exploredCategorySlugs;

  const _TaskContext({
    required this.budgetExists,
    required this.guestCount,
    required this.pendingRsvpCount,
    required this.confirmedGuestCount,
    required this.seatingTableCount,
    required this.servicePreferences,
    required this.favoriteCategorySlugs,
    required this.quoteRequestCategorySlugs,
    required this.proposalSentCategorySlugs,
    required this.confirmedBookingCategorySlugs,
    required this.exploredCategorySlugs,
  });

  /// `not_needed` bloqueia sempre; `already_booked` (dentro ou fora da
  /// app) também deixa de precisar de sugestões de procurar/reservar.
  /// Sem preferência definida, assume-se `needed` por omissão (RN37).
  bool categoryStillNeeded(String slug) {
    final pref = servicePreferences[slug] ?? 'needed';
    return pref == 'needed';
  }
}

/// Motor de tarefas contextual — pedido explícito e extenso do
/// utilizador (2026-09-01). Nunca mostra dezenas de tarefas: no máximo
/// [kMaxActiveSystemTasks] tarefas `SYSTEM` ativas em simultâneo,
/// promovidas de `UPCOMING` para `ACTIVE` à medida que vagas abrem.
/// Tarefas `USER` (criadas manualmente pelo casal) não têm limite.
///
/// `recompute()` é seguro chamar tantas vezes quantas forem
/// necessárias — é idempotente (o índice único em
/// `wedding_tasks(wedding_id, task_template_id)` evita duplicados) e
/// só escreve o que realmente mudou.
class TaskEngineController extends Notifier<TaskEngineState> {
  String? _weddingId;
  bool _recomputing = false;

  @override
  TaskEngineState build() {
    final weddingId = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
    _weddingId = weddingId;
    if (weddingId != null) {
      Future.microtask(() => recompute());
    }
    return const TaskEngineState();
  }

  Future<void> _load(String weddingId) async {
    final taskRows = await supabase
        .from('wedding_tasks')
        .select()
        .eq('wedding_id', weddingId)
        .order('priority', ascending: false)
        .order('created_at', ascending: true);
    final tasks = (taskRows as List)
        .map((r) => WeddingTask.fromRow(r as Map<String, dynamic>))
        .toList();

    final notificationRows = await supabase
        .from('notifications')
        .select()
        .eq('wedding_id', weddingId)
        .order('created_at', ascending: false)
        .limit(50);
    final notifications = (notificationRows as List)
        .map((r) => AppNotification.fromRow(r as Map<String, dynamic>))
        .toList();

    final systemDone =
        tasks.where((t) => t.source == TaskSource.system && t.status == TaskStatus.completed).toList()
          ..sort((a, b) => (b.completedAt ?? b.createdAt).compareTo(a.completedAt ?? a.createdAt));

    state = state.copyWith(
      loading: false,
      systemActive: tasks
          .where((t) => t.source == TaskSource.system && t.status == TaskStatus.active)
          .toList(),
      systemDone: systemDone,
      userTasks: tasks.where((t) => t.source == TaskSource.user).toList(),
      notifications: notifications,
    );
  }

  /// Recalcula: conclui automaticamente o que os dados reais já
  /// satisfazem, cria linhas `upcoming` para templates recém-elegíveis
  /// e promove a `active` até preencher [kMaxActiveSystemTasks].
  Future<void> recompute() async {
    final weddingId = _weddingId;
    if (weddingId == null || _recomputing) return;
    _recomputing = true;
    try {
      final ctx = await _gatherContext(weddingId);
      final templates = await _loadTemplates();

      final existingRows = await supabase
          .from('wedding_tasks')
          .select()
          .eq('wedding_id', weddingId)
          .eq('source', 'system');
      final existing = (existingRows as List)
          .map((r) => WeddingTask.fromRow(r as Map<String, dynamic>))
          .toList();
      final existingByTemplate = {
        for (final t in existing)
          if (t.taskTemplateId != null) t.taskTemplateId!: t,
      };

      // 0) Sincronizar tarefas ainda não concluídas com o template
      // atual — pedido explícito do utilizador: editar um template no
      // admin deve refletir-se nas tarefas `upcoming`/`active` que
      // ainda não aconteceram (o casal ainda não agiu sobre elas).
      // Nunca reescreve `completed`/`dismissed`/`expired` — essas são
      // histórico, ver a nota "não alterar retroativamente" do próprio
      // pedido do utilizador sobre gestão de templates no admin.
      for (final task in existing) {
        if (task.status != TaskStatus.active && task.status != TaskStatus.upcoming) continue;
        if (task.taskTemplateId == null) continue;
        final template = templates.where((t) => t.id == task.taskTemplateId).firstOrNull;
        if (template == null) continue;
        final needsSync = task.title != template.title ||
            task.description != template.description ||
            task.category != template.category ||
            task.priority != template.priority ||
            task.completionBehavior != template.completionBehavior ||
            task.displayType != template.displayType;
        if (!needsSync) continue;
        await supabase.from('wedding_tasks').update({
          'title': template.title,
          'description': template.description,
          'category': template.category,
          'priority': taskPriorityToDb(template.priority),
          'completion_behavior': taskCompletionBehaviorToDb(template.completionBehavior),
          'display_type': taskDisplayTypeToDb(template.displayType),
          'updated_at': DateTime.now().toIso8601String(),
        }).eq('id', task.id);
      }

      // 1) Concluir automaticamente o que os dados reais já satisfazem.
      for (final task in existing) {
        if (task.status != TaskStatus.active && task.status != TaskStatus.upcoming) continue;
        final template = task.taskTemplateId == null
            ? null
            : templates.where((t) => t.id == task.taskTemplateId).firstOrNull;
        final rule = template?.completionRule;
        if (rule == null) continue;
        if (_isComplete(rule, template!.partnerCategorySlug, ctx)) {
          await supabase.from('wedding_tasks').update({
            'status': 'completed',
            'completed_at': DateTime.now().toIso8601String(),
            'completion_source': rule,
            'updated_at': DateTime.now().toIso8601String(),
          }).eq('id', task.id);
        }
      }

      // 2) Criar linhas `upcoming` para templates elegíveis que ainda
      // não têm tarefa neste casamento (idempotente via unique index).
      for (final template in templates) {
        if (existingByTemplate.containsKey(template.id)) continue;
        if (!_isEligible(template.eligibilityRule, template.partnerCategorySlug, ctx)) continue;
        if (template.completionRule != null &&
            _isComplete(template.completionRule!, template.partnerCategorySlug, ctx)) {
          continue; // já satisfeita antes de sequer aparecer — não vale a pena criar.
        }
        try {
          await supabase.from('wedding_tasks').insert({
            'wedding_id': weddingId,
            'task_template_id': template.id,
            'source': 'system',
            'title': template.title,
            'description': template.description,
            'category': template.category,
            'priority': taskPriorityToDb(template.priority),
            'status': 'upcoming',
            'completion_behavior': taskCompletionBehaviorToDb(template.completionBehavior),
            'display_type': taskDisplayTypeToDb(template.displayType),
          });
        } catch (_) {
          // Corrida entre recomputes concorrentes — o índice único já
          // protege contra duplicados, ignora o conflito.
        }
      }

      // 3) Reavaliar elegibilidade das `upcoming` (podem ter deixado
      // de ser relevantes, ex: preferência mudou para "not_needed").
      final refreshedRows = await supabase
          .from('wedding_tasks')
          .select()
          .eq('wedding_id', weddingId)
          .eq('source', 'system');
      final refreshed = (refreshedRows as List)
          .map((r) => WeddingTask.fromRow(r as Map<String, dynamic>))
          .toList();

      var active = refreshed.where((t) => t.status == TaskStatus.active).toList();
      final upcoming = refreshed.where((t) => t.status == TaskStatus.upcoming).toList();

      final eligibleUpcoming = upcoming.where((t) {
        final template = templates.where((tpl) => tpl.id == t.taskTemplateId).firstOrNull;
        if (template == null) return false;
        return _isEligible(template.eligibilityRule, template.partnerCategorySlug, ctx);
      }).toList()
        ..sort((a, b) {
          final pw = taskPriorityWeight(b.priority) - taskPriorityWeight(a.priority);
          if (pw != 0) return pw;
          return a.createdAt.compareTo(b.createdAt);
        });

      // 4) Tarefa urgente pode entrar mesmo com a fila cheia,
      // empurrando a ativa de menor prioridade de volta a `upcoming`.
      final urgentWaiting = eligibleUpcoming
          .where((t) => t.priority == TaskPriority.urgent)
          .toList();
      for (var i = 0; i < urgentWaiting.length; i++) {
        if (active.length < kMaxActiveSystemTasks) break;
        active.sort(
          (a, b) => taskPriorityWeight(a.priority) - taskPriorityWeight(b.priority),
        );
        final weakest = active.first;
        if (taskPriorityWeight(weakest.priority) >= taskPriorityWeight(TaskPriority.urgent)) {
          break; // já tudo urgente, não há para onde empurrar.
        }
        await supabase.from('wedding_tasks').update({
          'status': 'upcoming',
          'updated_at': DateTime.now().toIso8601String(),
        }).eq('id', weakest.id);
        active = active.where((t) => t.id != weakest.id).toList();
      }

      // 5) Promover de `upcoming` para `active` até preencher a fila.
      var slots = kMaxActiveSystemTasks - active.length;
      final alreadyActiveIds = active.map((t) => t.id).toSet();
      for (final candidate in eligibleUpcoming) {
        if (slots <= 0) break;
        if (alreadyActiveIds.contains(candidate.id)) continue;
        await supabase.from('wedding_tasks').update({
          'status': 'active',
          'available_at': DateTime.now().toIso8601String(),
          'seen': false,
          'updated_at': DateTime.now().toIso8601String(),
        }).eq('id', candidate.id);
        await supabase.from('notifications').insert({
          'wedding_id': weddingId,
          'type': 'new_task',
          'title': 'Nova tarefa',
          'body': candidate.description ?? candidate.title,
          'wedding_task_id': candidate.id,
        });
        slots--;
      }

      await _syncDynamicTasks(weddingId);

      await _load(weddingId);
    } finally {
      _recomputing = false;
    }
  }

  /// "Pagar sinal" e "Rever proposta" — não vêm de [TaskTemplate], nascem
  /// uma vez por pagamento/proposta real (`source_entity_id`, ver
  /// `041_task_dynamic_entity.sql`). Diferente do resto do motor, entram
  /// diretamente em `active` (são sempre poucas e sempre urgentes por
  /// natureza) e são concluídas assim que o registo de origem já não as
  /// justifica — não passam pela fila de [kMaxActiveSystemTasks].
  Future<void> _syncDynamicTasks(String weddingId) async {
    final existingRows = await supabase
        .from('wedding_tasks')
        .select()
        .eq('wedding_id', weddingId)
        .not('source_entity_id', 'is', null);
    final existingByEntity = {
      for (final r in (existingRows as List).cast<Map<String, dynamic>>())
        r['source_entity_id'] as String: WeddingTask.fromRow(r),
    };

    final bookingRows = await supabase
        .from('bookings')
        .select('id, status, partner_profiles(business_name)')
        .eq('wedding_id', weddingId);
    final bookingPartnerName = <String, String>{};
    final completedBookingIds = <String>{};
    for (final r in (bookingRows as List).cast<Map<String, dynamic>>()) {
      final name = (r['partner_profiles'] as Map<String, dynamic>?)?['business_name'] as String?;
      bookingPartnerName[r['id'] as String] = (name == null || name.isEmpty) ? 'o parceiro' : name;
      if (r['status'] == 'completed') completedBookingIds.add(r['id'] as String);
    }
    final bookingIds = bookingPartnerName.keys.toList();

    if (bookingIds.isNotEmpty) {
      final paymentRows = await supabase
          .from('payments')
          .select('id, booking_id, type, amount, due_at, status')
          .inFilter('booking_id', bookingIds);
      for (final p in (paymentRows as List).cast<Map<String, dynamic>>()) {
        final paymentId = p['id'] as String;
        final status = p['status'] as String;
        final existingTask = existingByEntity[paymentId];

        if (status != 'pending' && status != 'overdue') {
          if (existingTask != null &&
              (existingTask.status == TaskStatus.active || existingTask.status == TaskStatus.upcoming)) {
            await supabase.from('wedding_tasks').update({
              'status': status == 'paid' ? 'completed' : 'dismissed',
              'completed_at': status == 'paid' ? DateTime.now().toIso8601String() : null,
              'dismissed_at': status == 'paid' ? null : DateTime.now().toIso8601String(),
              'completion_source': 'payment_$status',
              'updated_at': DateTime.now().toIso8601String(),
            }).eq('id', existingTask.id);
          }
          continue;
        }
        if (existingTask != null) continue;

        final dueAt = p['due_at'] == null ? null : DateTime.parse(p['due_at'] as String);
        final urgent = status == 'overdue' ||
            (dueAt != null && dueAt.difference(DateTime.now()).inHours <= 48);
        final typeLabel = switch (p['type'] as String) {
          'deposit' => 'sinal',
          'installment' => 'prestação',
          'final_payment' => 'pagamento final',
          _ => 'pagamento',
        };
        final partnerName = bookingPartnerName[p['booking_id'] as String] ?? 'o parceiro';

        try {
          final inserted = await supabase
              .from('wedding_tasks')
              .insert({
                'wedding_id': weddingId,
                'source': 'system',
                'source_entity_id': paymentId,
                'title': 'Pagar $typeLabel — $partnerName',
                'description': dueAt == null
                    ? '€${(p['amount'] as num).toStringAsFixed(2)} pendente.'
                    : '€${(p['amount'] as num).toStringAsFixed(2)} até ${_formatDate(dueAt)}.',
                'category': 'pagamentos',
                'priority': urgent ? 'urgent' : 'high',
                'status': 'active',
                'due_date': dueAt?.toIso8601String().split('T').first,
                'completion_behavior': 'action_completed',
                'display_type': 'required',
              })
              .select()
              .single();
          await supabase.from('notifications').insert({
            'wedding_id': weddingId,
            'type': 'new_task',
            'title': 'Nova tarefa',
            'body': 'Pagar $typeLabel — $partnerName',
            'wedding_task_id': inserted['id'],
          });
        } catch (_) {
          // Corrida entre recomputes concorrentes — índice único protege.
        }
      }
    }

    final quoteRows = await supabase
        .from('quote_requests')
        .select('id, partner_id, partner_profiles(business_name)')
        .eq('wedding_id', weddingId);
    final quoteRequests = (quoteRows as List).cast<Map<String, dynamic>>();
    final quoteRequestIds = quoteRequests.map((r) => r['id'] as String).toList();
    final quotePartnerName = <String, String>{
      for (final r in quoteRequests)
        r['id'] as String: () {
          final name = (r['partner_profiles'] as Map<String, dynamic>?)?['business_name'] as String?;
          return (name == null || name.isEmpty) ? 'o parceiro' : name;
        }(),
    };

    if (quoteRequestIds.isNotEmpty) {
      final proposalRows = await supabase
          .from('proposals')
          .select('id, quote_request_id, status')
          .inFilter('quote_request_id', quoteRequestIds);
      for (final p in (proposalRows as List).cast<Map<String, dynamic>>()) {
        final proposalId = p['id'] as String;
        final status = p['status'] as String;
        final existingTask = existingByEntity[proposalId];

        if (status != 'sent') {
          if (existingTask != null &&
              (existingTask.status == TaskStatus.active || existingTask.status == TaskStatus.upcoming)) {
            await supabase.from('wedding_tasks').update({
              'status': status == 'accepted' ? 'completed' : 'dismissed',
              'completed_at': status == 'accepted' ? DateTime.now().toIso8601String() : null,
              'dismissed_at': status == 'accepted' ? null : DateTime.now().toIso8601String(),
              'completion_source': 'proposal_$status',
              'updated_at': DateTime.now().toIso8601String(),
            }).eq('id', existingTask.id);
          }
          continue;
        }
        if (existingTask != null) continue;

        final partnerName = quotePartnerName[p['quote_request_id'] as String] ?? 'o parceiro';
        try {
          final inserted = await supabase
              .from('wedding_tasks')
              .insert({
                'wedding_id': weddingId,
                'source': 'system',
                'source_entity_id': proposalId,
                'title': 'Rever proposta — $partnerName',
                'description': '$partnerName enviou uma proposta nova. Vê os detalhes e decide.',
                'category': 'parceiros',
                'priority': 'high',
                'status': 'active',
                'completion_behavior': 'action_completed',
                'display_type': 'required',
              })
              .select()
              .single();
          await supabase.from('notifications').insert({
            'wedding_id': weddingId,
            'type': 'new_task',
            'title': 'Nova proposta',
            'body': '$partnerName enviou uma proposta nova.',
            'wedding_task_id': inserted['id'],
          });
        } catch (_) {
          // Idem — índice único evita duplicados em corridas.
        }
      }
    }

    // "Avaliar — {parceiro}": sugestão (nunca obrigatória, avaliar é
    // sempre opcional), uma por reserva concluída sem avaliação ainda
    // — `source_entity_id = booking.id`, mesma idempotência das
    // restantes tarefas dinâmicas. Só completa quando `submit_review()`
    // criar mesmo a review (nunca ao abrir o CTA), ver
    // `045_reviews.sql`.
    if (completedBookingIds.isNotEmpty) {
      final reviewRows = await supabase
          .from('reviews')
          .select('booking_id')
          .inFilter('booking_id', completedBookingIds.toList());
      final reviewedBookingIds = (reviewRows as List)
          .map((r) => (r as Map<String, dynamic>)['booking_id'] as String)
          .toSet();

      for (final bookingId in completedBookingIds) {
        if (reviewedBookingIds.contains(bookingId)) {
          final existingTask = existingByEntity[bookingId];
          if (existingTask != null &&
              (existingTask.status == TaskStatus.active || existingTask.status == TaskStatus.upcoming)) {
            await supabase.from('wedding_tasks').update({
              'status': 'completed',
              'completed_at': DateTime.now().toIso8601String(),
              'completion_source': 'action_completed',
              'updated_at': DateTime.now().toIso8601String(),
            }).eq('id', existingTask.id);
          }
          continue;
        }
        if (existingByEntity.containsKey(bookingId)) continue;

        final partnerName = bookingPartnerName[bookingId] ?? 'o parceiro';
        try {
          final inserted = await supabase
              .from('wedding_tasks')
              .insert({
                'wedding_id': weddingId,
                'source': 'system',
                'source_entity_id': bookingId,
                'title': 'Avaliar — $partnerName',
                'description': 'Contem-nos como correu a experiência com $partnerName.',
                'category': 'parceiros',
                'priority': 'normal',
                'status': 'active',
                'completion_behavior': 'action_completed',
                'display_type': 'suggestion',
              })
              .select()
              .single();
          await supabase.from('notifications').insert({
            'wedding_id': weddingId,
            'type': 'new_task',
            'title': 'Nova tarefa',
            'body': 'Avaliar — $partnerName',
            'wedding_task_id': inserted['id'],
          });
        } catch (_) {
          // Idem — índice único evita duplicados em corridas.
        }
      }
    }
  }

  String _formatDate(DateTime d) =>
      '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}';

  Future<List<TaskTemplate>> _loadTemplates() async {
    final rows = await supabase.from('task_templates').select().eq('active', true);
    return (rows as List).map((r) => TaskTemplate.fromRow(r as Map<String, dynamic>)).toList();
  }

  Future<_TaskContext> _gatherContext(String weddingId) async {
    final budgetRow = await supabase
        .from('budgets')
        .select('wedding_id')
        .eq('wedding_id', weddingId)
        .maybeSingle();

    final guestRows = await supabase
        .from('guests')
        .select('rsvp_status')
        .eq('wedding_id', weddingId);
    final guests = (guestRows as List).cast<Map<String, dynamic>>();
    final pendingCount = guests
        .where((g) => g['rsvp_status'] == 'pending' || g['rsvp_status'] == 'invited')
        .length;
    final confirmedCount = guests.where((g) => g['rsvp_status'] == 'confirmed').length;

    final seatingRows = await supabase
        .from('seating_tables')
        .select('id')
        .eq('wedding_id', weddingId);

    final prefRows = await supabase
        .from('wedding_service_preferences')
        .select('partner_category_slug, preference')
        .eq('wedding_id', weddingId);
    final preferences = {
      for (final r in (prefRows as List).cast<Map<String, dynamic>>())
        r['partner_category_slug'] as String: r['preference'] as String,
    };

    final favRows = await supabase
        .from('favorite_partners')
        .select('partner_id')
        .eq('wedding_id', weddingId);
    final favPartnerIds = (favRows as List)
        .map((r) => (r as Map<String, dynamic>)['partner_id'] as String)
        .toSet();

    final quoteRows = await supabase
        .from('quote_requests')
        .select('id, partner_id')
        .eq('wedding_id', weddingId);
    final quoteRequests = (quoteRows as List).cast<Map<String, dynamic>>();
    final quotePartnerIds = quoteRequests.map((r) => r['partner_id'] as String).toSet();
    final quoteRequestIds = quoteRequests.map((r) => r['id'] as String).toList();

    Set<String> proposalPartnerIds = {};
    if (quoteRequestIds.isNotEmpty) {
      final proposalRows = await supabase
          .from('proposals')
          .select('partner_id, status')
          .inFilter('quote_request_id', quoteRequestIds)
          .eq('status', 'sent');
      proposalPartnerIds = (proposalRows as List)
          .map((r) => (r as Map<String, dynamic>)['partner_id'] as String)
          .toSet();
    }

    final bookingRows = await supabase
        .from('bookings')
        .select('partner_id, status')
        .eq('wedding_id', weddingId)
        .eq('status', 'confirmed');
    final confirmedBookingPartnerIds = (bookingRows as List)
        .map((r) => (r as Map<String, dynamic>)['partner_id'] as String)
        .toSet();

    final allPartnerIds = <String>{
      ...favPartnerIds,
      ...quotePartnerIds,
      ...proposalPartnerIds,
      ...confirmedBookingPartnerIds,
    };

    final partnerCategorySlugs = <String, Set<String>>{};
    if (allPartnerIds.isNotEmpty) {
      final catRows = await supabase
          .from('partner_profile_categories')
          .select('partner_id, partner_categories(slug)')
          .inFilter('partner_id', allPartnerIds.toList());
      for (final r in (catRows as List).cast<Map<String, dynamic>>()) {
        final slug = (r['partner_categories'] as Map<String, dynamic>?)?['slug'] as String?;
        if (slug == null) continue;
        partnerCategorySlugs.putIfAbsent(r['partner_id'] as String, () => {}).add(slug);
      }
    }

    Set<String> categoriesFor(Set<String> partnerIds) {
      final result = <String>{};
      for (final id in partnerIds) {
        result.addAll(partnerCategorySlugs[id] ?? const {});
      }
      return result;
    }

    // Categorias cuja tarefa "Explorar" já foi concluída — usado pela
    // regra de elegibilidade `save_favorite_category` (só faz sentido
    // pedir para guardar favoritos depois de o casal já ter explorado
    // essa categoria, ver 043_task_completion_behavior.sql).
    final exploredRows = await supabase
        .from('wedding_tasks')
        .select('task_templates(key, partner_category_slug)')
        .eq('wedding_id', weddingId)
        .eq('status', 'completed')
        .not('task_template_id', 'is', null);
    final exploredCategorySlugs = <String>{};
    for (final r in (exploredRows as List).cast<Map<String, dynamic>>()) {
      final tpl = r['task_templates'] as Map<String, dynamic>?;
      final key = tpl?['key'] as String?;
      final slug = tpl?['partner_category_slug'] as String?;
      if (key != null && key.startsWith('explore_') && slug != null) {
        exploredCategorySlugs.add(slug);
      }
    }

    return _TaskContext(
      budgetExists: budgetRow != null,
      guestCount: guests.length,
      pendingRsvpCount: pendingCount,
      confirmedGuestCount: confirmedCount,
      seatingTableCount: (seatingRows as List).length,
      servicePreferences: preferences,
      favoriteCategorySlugs: categoriesFor(favPartnerIds),
      quoteRequestCategorySlugs: categoriesFor(quotePartnerIds),
      proposalSentCategorySlugs: categoriesFor(proposalPartnerIds),
      confirmedBookingCategorySlugs: categoriesFor(confirmedBookingPartnerIds),
      exploredCategorySlugs: exploredCategorySlugs,
    );
  }

  bool _isEligible(String rule, String? slug, _TaskContext ctx) {
    switch (rule) {
      case 'always':
        return true;
      case 'guests_with_pending_rsvp':
        return ctx.guestCount > 0 && ctx.pendingRsvpCount > 0;
      case 'enough_confirmed_guests_for_seating':
        return ctx.seatingTableCount == 0 && ctx.confirmedGuestCount >= 10;
      case 'explore_category':
        if (slug == null) return false;
        return ctx.categoryStillNeeded(slug) &&
            !ctx.favoriteCategorySlugs.contains(slug) &&
            !ctx.quoteRequestCategorySlugs.contains(slug) &&
            !ctx.confirmedBookingCategorySlugs.contains(slug);
      case 'save_favorite_category':
        if (slug == null) return false;
        return ctx.categoryStillNeeded(slug) &&
            ctx.exploredCategorySlugs.contains(slug) &&
            !ctx.favoriteCategorySlugs.contains(slug) &&
            !ctx.quoteRequestCategorySlugs.contains(slug) &&
            !ctx.confirmedBookingCategorySlugs.contains(slug);
      case 'quote_category':
        if (slug == null) return false;
        return ctx.categoryStillNeeded(slug) &&
            ctx.favoriteCategorySlugs.contains(slug) &&
            !ctx.quoteRequestCategorySlugs.contains(slug) &&
            !ctx.confirmedBookingCategorySlugs.contains(slug);
      case 'book_category':
        if (slug == null) return false;
        return ctx.categoryStillNeeded(slug) &&
            ctx.proposalSentCategorySlugs.contains(slug) &&
            !ctx.confirmedBookingCategorySlugs.contains(slug);
      default:
        return false;
    }
  }

  bool _isComplete(String rule, String? slug, _TaskContext ctx) {
    switch (rule) {
      case 'budget_defined':
        return ctx.budgetExists;
      case 'has_guests':
        return ctx.guestCount > 0;
      case 'no_pending_rsvp':
        return ctx.guestCount > 0 && ctx.pendingRsvpCount == 0;
      case 'seating_started':
        return ctx.seatingTableCount > 0;
      case 'has_interest_in_category':
        if (slug == null) return false;
        return ctx.favoriteCategorySlugs.contains(slug) ||
            ctx.quoteRequestCategorySlugs.contains(slug) ||
            ctx.confirmedBookingCategorySlugs.contains(slug);
      case 'has_quote_for_category':
        if (slug == null) return false;
        return ctx.quoteRequestCategorySlugs.contains(slug) ||
            ctx.confirmedBookingCategorySlugs.contains(slug);
      case 'has_confirmed_booking_for_category':
        if (slug == null) return false;
        return ctx.confirmedBookingCategorySlugs.contains(slug);
      default:
        return false;
    }
  }

  /// Tarefa criada manualmente pelo casal — nunca conta para o limite
  /// de [kMaxActiveSystemTasks], nunca é substituída/adiada pelo motor.
  Future<void> createUserTask({
    required String title,
    String? description,
    DateTime? dueDate,
    TaskPriority priority = TaskPriority.normal,
    String? category,
  }) async {
    final weddingId = _weddingId;
    if (weddingId == null) return;
    await supabase.from('wedding_tasks').insert({
      'wedding_id': weddingId,
      'source': 'user',
      'title': title,
      'description': description,
      'category': category,
      'priority': taskPriorityToDb(priority),
      'status': 'active',
      'due_date': dueDate?.toIso8601String().split('T').first,
      'completion_behavior': 'manual',
      'display_type': 'required',
    });
    await _load(weddingId);
  }

  Future<void> completeTask(String taskId) async {
    final weddingId = _weddingId;
    if (weddingId == null) return;
    await supabase.from('wedding_tasks').update({
      'status': 'completed',
      'completed_at': DateTime.now().toIso8601String(),
      'completion_source': 'manual',
      'updated_at': DateTime.now().toIso8601String(),
    }).eq('id', taskId);
    await recompute();
  }

  /// Chamado quando o casal toca no CTA de uma tarefa `cta_opened`
  /// (ex: "Explorar fotógrafos") — pedido explícito do utilizador: uma
  /// sugestão pode concluir-se no primeiro clique válido, ao contrário
  /// de uma tarefa `action_completed`/`manual`, que nunca conclui só
  /// por ter sido aberta (ver `completion_behavior` em
  /// `task_models.dart`). Não espera pelo `recompute()` completo antes
  /// de devolver — a navegação para o CTA não deve ficar bloqueada à
  /// espera da rede.
  Future<void> completeCtaTask(String taskId) async {
    final weddingId = _weddingId;
    if (weddingId == null) return;
    await supabase.from('wedding_tasks').update({
      'status': 'completed',
      'completed_at': DateTime.now().toIso8601String(),
      'completion_source': 'cta_opened',
      'seen': true,
      'updated_at': DateTime.now().toIso8601String(),
    }).eq('id', taskId);
    unawaited(recompute());
  }

  Future<void> markTaskSeen(String taskId) async {
    await supabase.from('wedding_tasks').update({'seen': true}).eq('id', taskId);
    final weddingId = _weddingId;
    if (weddingId != null) await _load(weddingId);
  }

  Future<void> markNotificationRead(String notificationId) async {
    await supabase.from('notifications').update({'read': true}).eq('id', notificationId);
    final weddingId = _weddingId;
    if (weddingId != null) await _load(weddingId);
  }

  Future<void> markAllNotificationsRead() async {
    final weddingId = _weddingId;
    if (weddingId == null) return;
    await supabase
        .from('notifications')
        .update({'read': true})
        .eq('wedding_id', weddingId)
        .eq('read', false);
    await _load(weddingId);
  }
}

final taskEngineControllerProvider =
    NotifierProvider<TaskEngineController, TaskEngineState>(TaskEngineController.new);
