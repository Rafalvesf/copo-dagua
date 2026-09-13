enum TaskStatus { upcoming, active, completed, dismissed, expired }

enum TaskPriority { low, normal, high, urgent }

enum TaskSource { system, user }

/// Como uma tarefa se conclui — nunca confundir com [TaskDisplayType]
/// (o que é mostrado ao casal). Ver `database/migrations/
/// 043_task_completion_behavior.sql`.
enum TaskCompletionBehavior {
  /// Só conclui quando os dados reais confirmarem a ação (ex: orçamento
  /// definido, pagamento pago). Nunca só por abrir o CTA.
  actionCompleted,

  /// Conclui-se no primeiro clique válido no CTA — para sugestões de
  /// exploração, não ações obrigatórias.
  ctaOpened,

  /// A app não consegue verificar sozinha — o utilizador marca "Feito"
  /// manualmente (sempre o caso para tarefas `source = user`).
  manual,
}

TaskCompletionBehavior? taskCompletionBehaviorFromDb(String? value) => switch (value) {
  'action_completed' => TaskCompletionBehavior.actionCompleted,
  'cta_opened' => TaskCompletionBehavior.ctaOpened,
  'manual' => TaskCompletionBehavior.manual,
  _ => null,
};

String taskCompletionBehaviorToDb(TaskCompletionBehavior behavior) => switch (behavior) {
  TaskCompletionBehavior.actionCompleted => 'action_completed',
  TaskCompletionBehavior.ctaOpened => 'cta_opened',
  TaskCompletionBehavior.manual => 'manual',
};

/// O que é mostrado ao casal — "SUGESTÃO" vs "PARA CONCLUIR". Conceito
/// de apresentação, independente de como a tarefa se conclui de facto
/// (ver [TaskCompletionBehavior]).
enum TaskDisplayType { suggestion, required }

TaskDisplayType? taskDisplayTypeFromDb(String? value) => switch (value) {
  'suggestion' => TaskDisplayType.suggestion,
  'required' => TaskDisplayType.required,
  _ => null,
};

String taskDisplayTypeToDb(TaskDisplayType type) => switch (type) {
  TaskDisplayType.suggestion => 'suggestion',
  TaskDisplayType.required => 'required',
};

TaskStatus taskStatusFromDb(String value) => TaskStatus.values.byName(value);
String taskStatusToDb(TaskStatus status) => status.name;

TaskPriority taskPriorityFromDb(String value) => TaskPriority.values.byName(value);
String taskPriorityToDb(TaskPriority priority) => priority.name;

int taskPriorityWeight(TaskPriority priority) => switch (priority) {
  TaskPriority.urgent => 3,
  TaskPriority.high => 2,
  TaskPriority.normal => 1,
  TaskPriority.low => 0,
};

/// Tarefa real de um casamento — gerada a partir de um
/// [TaskTemplate] (`taskTemplateId != null`) ou criada manualmente
/// pelo casal (`taskTemplateId == null`, `source == user`). Ver
/// `database/migrations/039_task_engine.sql`.
class WeddingTask {
  final String id;
  final String weddingId;
  final String? taskTemplateId;
  final TaskSource source;
  final String title;
  final String? description;
  final String? category;
  final TaskPriority priority;
  final TaskStatus status;
  final DateTime? dueDate;
  final DateTime availableAt;
  final DateTime? completedAt;
  final DateTime? dismissedAt;
  final String? completionSource;
  final bool seen;
  final String? sourceEntityId;
  final DateTime createdAt;
  final TaskCompletionBehavior? completionBehavior;
  final TaskDisplayType? displayType;

  const WeddingTask({
    required this.id,
    required this.weddingId,
    this.taskTemplateId,
    required this.source,
    required this.title,
    this.description,
    this.category,
    required this.priority,
    required this.status,
    this.dueDate,
    required this.availableAt,
    this.completedAt,
    this.dismissedAt,
    this.completionSource,
    this.seen = false,
    this.sourceEntityId,
    required this.createdAt,
    this.completionBehavior,
    this.displayType,
  });

  factory WeddingTask.fromRow(Map<String, dynamic> row) => WeddingTask(
    id: row['id'] as String,
    weddingId: row['wedding_id'] as String,
    taskTemplateId: row['task_template_id'] as String?,
    source: TaskSource.values.byName(row['source'] as String),
    title: row['title'] as String,
    description: row['description'] as String?,
    category: row['category'] as String?,
    priority: taskPriorityFromDb(row['priority'] as String),
    status: taskStatusFromDb(row['status'] as String),
    dueDate: row['due_date'] == null ? null : DateTime.parse(row['due_date'] as String),
    availableAt: DateTime.parse(row['available_at'] as String),
    completedAt: row['completed_at'] == null ? null : DateTime.parse(row['completed_at'] as String),
    dismissedAt: row['dismissed_at'] == null ? null : DateTime.parse(row['dismissed_at'] as String),
    completionSource: row['completion_source'] as String?,
    seen: row['seen'] as bool? ?? false,
    sourceEntityId: row['source_entity_id'] as String?,
    createdAt: DateTime.parse(row['created_at'] as String),
    completionBehavior: taskCompletionBehaviorFromDb(row['completion_behavior'] as String?),
    displayType: taskDisplayTypeFromDb(row['display_type'] as String?),
  );
}

/// Template geral de tarefa (o "catálogo") — `task_templates`.
class TaskTemplate {
  final String id;
  final String key;
  final String title;
  final String? description;
  final String category;
  final String taskType;
  final TaskPriority priority;
  final String? partnerCategorySlug;
  final String? actionRoute;
  final String eligibilityRule;
  final String? completionRule;
  final int position;
  final TaskCompletionBehavior completionBehavior;
  final TaskDisplayType displayType;

  const TaskTemplate({
    required this.id,
    required this.key,
    required this.title,
    this.description,
    required this.category,
    required this.taskType,
    required this.priority,
    this.partnerCategorySlug,
    this.actionRoute,
    required this.eligibilityRule,
    this.completionRule,
    required this.position,
    this.completionBehavior = TaskCompletionBehavior.actionCompleted,
    this.displayType = TaskDisplayType.required,
  });

  factory TaskTemplate.fromRow(Map<String, dynamic> row) => TaskTemplate(
    id: row['id'] as String,
    key: row['key'] as String,
    title: row['title'] as String,
    description: row['description'] as String?,
    category: row['category'] as String,
    taskType: row['task_type'] as String,
    priority: taskPriorityFromDb(row['priority'] as String),
    partnerCategorySlug: row['partner_category_slug'] as String?,
    actionRoute: row['action_route'] as String?,
    eligibilityRule: row['eligibility_rule'] as String,
    completionRule: row['completion_rule'] as String?,
    position: row['position'] as int? ?? 0,
    completionBehavior:
        taskCompletionBehaviorFromDb(row['completion_behavior'] as String?) ??
        TaskCompletionBehavior.actionCompleted,
    displayType: taskDisplayTypeFromDb(row['display_type'] as String?) ?? TaskDisplayType.required,
  );
}

/// `notifications` — só o aviso; a tarefa em si vive em [WeddingTask]
/// (nunca duplicada, ver 039_task_engine.sql).
class AppNotification {
  final String id;
  final String weddingId;
  final String type;
  final String title;
  final String? body;
  final String? weddingTaskId;
  final bool read;
  final DateTime createdAt;

  const AppNotification({
    required this.id,
    required this.weddingId,
    required this.type,
    required this.title,
    this.body,
    this.weddingTaskId,
    required this.read,
    required this.createdAt,
  });

  factory AppNotification.fromRow(Map<String, dynamic> row) => AppNotification(
    id: row['id'] as String,
    weddingId: row['wedding_id'] as String,
    type: row['type'] as String,
    title: row['title'] as String,
    body: row['body'] as String?,
    weddingTaskId: row['wedding_task_id'] as String?,
    read: row['read'] as bool? ?? false,
    createdAt: DateTime.parse(row['created_at'] as String),
  );
}
