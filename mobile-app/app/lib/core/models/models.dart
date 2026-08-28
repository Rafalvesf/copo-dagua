/// Sentinel para distinguir "parâmetro omitido" de "parâmetro passado como
/// null" em copyWith — necessário para campos int? que precisam de poder
/// ser limpos explicitamente (ex: idade), ao contrário de String? onde uma
/// string vazia já serve esse propósito sem ambiguidade.
class _Unset {
  const _Unset();
}

const _unset = _Unset();

// `UserRole.partner` é o papel de negócio (prestador de serviços no
// marketplace) — não confundir com `Wedding.partnerName1`/`partnerName2`
// abaixo, que são os nomes do casal. O termo "parceiro" é usado nos dois
// sentidos no produto; ver nota de terminologia em `ROADMAP.md`.
enum UserRole { couple, partner }

enum CeremonyType { civil, religious, both }

enum WeddingStatus { planning, completed }

enum RsvpStatus { pending, confirmed, declined }

enum WeddingSide { groom, bride, both }

enum CollaboratorStatus { owner, active, pending }

enum PartnerCategory { catering, photography, music, decoration, venue }

extension PartnerCategoryLabel on PartnerCategory {
  String get label => switch (this) {
    PartnerCategory.catering => 'Catering',
    PartnerCategory.photography => 'Fotografia',
    PartnerCategory.music => 'Música & DJ',
    PartnerCategory.decoration => 'Decoração',
    PartnerCategory.venue => 'Espaços',
  };
}

class Profile {
  final String id;
  final String fullName;
  final String email;
  final String password;
  final UserRole role;
  final bool emailVerified;
  final bool onboardingComplete;

  const Profile({
    required this.id,
    required this.fullName,
    required this.email,
    required this.password,
    required this.role,
    this.emailVerified = false,
    this.onboardingComplete = false,
  });

  Profile copyWith({bool? emailVerified, bool? onboardingComplete}) {
    return Profile(
      id: id,
      fullName: fullName,
      email: email,
      password: password,
      role: role,
      emailVerified: emailVerified ?? this.emailVerified,
      onboardingComplete: onboardingComplete ?? this.onboardingComplete,
    );
  }
}

class Wedding {
  final String id;
  final String ownerId;
  final String partnerName1;
  final String? partnerName2;
  final int? partner1Age;
  final int? partner2Age;
  final DateTime? weddingDate;
  final String? location;
  final String? venue;
  final CeremonyType ceremonyType;
  final int? estimatedGuests;
  final double? estimatedBudget;
  final WeddingStatus status;

  /// Frase de destaque mostrada no ecrã "Os noivos" — editável nas
  /// Definições, com um valor de exemplo por defeito quando ainda não
  /// foi personalizada.
  final String? quote;

  const Wedding({
    required this.id,
    required this.ownerId,
    required this.partnerName1,
    this.partnerName2,
    this.partner1Age,
    this.partner2Age,
    this.weddingDate,
    this.location,
    this.venue,
    this.ceremonyType = CeremonyType.civil,
    this.estimatedGuests,
    this.estimatedBudget,
    this.status = WeddingStatus.planning,
    this.quote,
  });

  String get displayQuote =>
      (quote == null || quote!.isEmpty)
      ? 'O amor não se vê com os olhos, mas com a alma.'
      : quote!;

  /// Domínio fictício do site do casamento, derivado do slug já
  /// existente (sem traços) — não precisa de campo próprio.
  String get websiteDomain =>
      '${inviteSlug.replaceAll('-', '')}.casamento.pt';

  String get displayNames => partnerName2 == null || partnerName2!.isEmpty
      ? partnerName1
      : '$partnerName1 & $partnerName2';

  /// Slug usado no link público de convite (ex: "ana-e-miguel").
  String get inviteSlug {
    final base = partnerName2 == null || partnerName2!.isEmpty
        ? partnerName1
        : '$partnerName1-e-$partnerName2';
    return base
        .toLowerCase()
        .replaceAll(RegExp('[^a-z0-9]+'), '-')
        .replaceAll(RegExp(r'^-+|-+$'), '');
  }

  String get inviteUrl => 'www.copodeagua.pt/invite/$inviteSlug';

  Wedding copyWith({
    String? partnerName1,
    String? partnerName2,
    Object? partner1Age = _unset,
    Object? partner2Age = _unset,
    DateTime? weddingDate,
    String? location,
    String? venue,
    CeremonyType? ceremonyType,
    int? estimatedGuests,
    double? estimatedBudget,
    WeddingStatus? status,
    String? quote,
  }) {
    return Wedding(
      id: id,
      ownerId: ownerId,
      partnerName1: partnerName1 ?? this.partnerName1,
      partnerName2: partnerName2 ?? this.partnerName2,
      partner1Age: identical(partner1Age, _unset)
          ? this.partner1Age
          : partner1Age as int?,
      partner2Age: identical(partner2Age, _unset)
          ? this.partner2Age
          : partner2Age as int?,
      weddingDate: weddingDate ?? this.weddingDate,
      location: location ?? this.location,
      venue: venue ?? this.venue,
      ceremonyType: ceremonyType ?? this.ceremonyType,
      estimatedGuests: estimatedGuests ?? this.estimatedGuests,
      estimatedBudget: estimatedBudget ?? this.estimatedBudget,
      status: status ?? this.status,
      quote: quote ?? this.quote,
    );
  }
}

class Collaborator {
  final String id;
  final String name;
  final String email;
  final CollaboratorStatus status;

  const Collaborator({
    required this.id,
    required this.name,
    required this.email,
    required this.status,
  });
}

class Guest {
  final String id;
  final String weddingId;
  final String name;
  final String? email;
  final String? phone;
  final String group;
  final WeddingSide side;
  final bool plusOneAllowed;
  final String? plusOneName;
  final RsvpStatus rsvpStatus;
  final String? dietaryRestrictions;
  final String? note;

  const Guest({
    required this.id,
    required this.weddingId,
    required this.name,
    this.email,
    this.phone,
    this.group = '',
    this.side = WeddingSide.both,
    this.plusOneAllowed = false,
    this.plusOneName,
    this.rsvpStatus = RsvpStatus.pending,
    this.dietaryRestrictions,
    this.note,
  });

  Guest copyWith({
    String? name,
    String? email,
    String? phone,
    String? group,
    WeddingSide? side,
    bool? plusOneAllowed,
    String? plusOneName,
    RsvpStatus? rsvpStatus,
    String? dietaryRestrictions,
    String? note,
  }) {
    return Guest(
      id: id,
      weddingId: weddingId,
      name: name ?? this.name,
      email: email ?? this.email,
      phone: phone ?? this.phone,
      group: group ?? this.group,
      side: side ?? this.side,
      plusOneAllowed: plusOneAllowed ?? this.plusOneAllowed,
      plusOneName: plusOneName ?? this.plusOneName,
      rsvpStatus: rsvpStatus ?? this.rsvpStatus,
      dietaryRestrictions: dietaryRestrictions ?? this.dietaryRestrictions,
      note: note ?? this.note,
    );
  }
}

enum ChecklistStatus { todo, inProgress, done }

class ChecklistItem {
  final String id;
  final String weddingId;
  final String title;
  final String category;
  final bool done;
  final DateTime? dueDate;
  final PartnerCategory? partnerCategory;
  final String? selectedPartnerId;

  /// Progresso (1-99) de uma tarefa "em curso" — só tem efeito quando
  /// [done] é false; ver [status]. `null`/0 e não concluída conta como
  /// "por fazer".
  final int? progressPercent;

  /// Seeds para os avatares (`https://i.pravatar.cc/150?u=<seed>`) dos
  /// responsáveis pela tarefa, mostrados em "Próximas tarefas" e em
  /// Tarefas — dados ilustrativos, sem modelo de colaborador próprio.
  final List<String> assigneeSeeds;

  const ChecklistItem({
    required this.id,
    required this.weddingId,
    required this.title,
    this.category = 'Geral',
    this.done = false,
    this.dueDate,
    this.partnerCategory,
    this.selectedPartnerId,
    this.progressPercent,
    this.assigneeSeeds = const [],
  });

  ChecklistStatus get status {
    if (done) return ChecklistStatus.done;
    final p = progressPercent;
    if (p != null && p > 0 && p < 100) return ChecklistStatus.inProgress;
    return ChecklistStatus.todo;
  }

  ChecklistItem copyWith({
    String? title,
    String? category,
    bool? done,
    DateTime? dueDate,
    Object? selectedPartnerId = _unset,
    Object? progressPercent = _unset,
    List<String>? assigneeSeeds,
  }) {
    return ChecklistItem(
      id: id,
      weddingId: weddingId,
      title: title ?? this.title,
      category: category ?? this.category,
      done: done ?? this.done,
      dueDate: dueDate ?? this.dueDate,
      partnerCategory: partnerCategory,
      selectedPartnerId: identical(selectedPartnerId, _unset)
          ? this.selectedPartnerId
          : selectedPartnerId as String?,
      progressPercent: identical(progressPercent, _unset)
          ? this.progressPercent
          : progressPercent as int?,
      assigneeSeeds: assigneeSeeds ?? this.assigneeSeeds,
    );
  }
}

class Partner {
  final String id;
  final String name;
  final PartnerCategory category;
  final String city;
  final double rating;
  final int reviewCount;
  final double startingPrice;
  final String description;
  final String imageUrl;

  const Partner({
    required this.id,
    required this.name,
    required this.category,
    required this.city,
    required this.rating,
    required this.reviewCount,
    required this.startingPrice,
    required this.description,
    required this.imageUrl,
  });
}

/// Mensagem trocada entre um parceiro e o casal cliente. `contractTitle`
/// não-nulo marca a mensagem como um "cartão de contrato" em vez de texto
/// livre — é assim que um contrato é "enviado no chat" (ver `tasks.md`
/// de `partner-app/contracts/` para o modelo completo, ainda por
/// implementar; isto é a versão mínima só de envio/receção no chat).
class ChatMessage {
  final String id;
  final String partnerId;
  final bool fromPartner;
  final String? text;
  final String? contractTitle;
  final DateTime sentAt;

  const ChatMessage({
    required this.id,
    required this.partnerId,
    required this.fromPartner,
    this.text,
    this.contractTitle,
    required this.sentAt,
  });

  bool get isContract => contractTitle != null;
}

/// Linha do separador Chat — uma conversa com um parceiro contratado
/// ou com alguém do cortejo (madrinha/padrinho). Quando [partnerId] não
/// é nulo, a conversa reaproveita o [ChatMessage]/`chatControllerProvider`
/// já existente para o chat com parceiros; quando é nulo, é uma
/// conversa com o cortejo, sem contraparte no backend mock — a thread
/// usa uma lista de mensagens local, gerada em [MockBackend].
class ChatConversation {
  final String id;
  final String name;
  final String avatarSeed;
  final String? partnerId;
  final String lastMessage;
  final DateTime lastMessageAt;
  final int unreadCount;

  const ChatConversation({
    required this.id,
    required this.name,
    required this.avatarSeed,
    this.partnerId,
    required this.lastMessage,
    required this.lastMessageAt,
    this.unreadCount = 0,
  });
}

/// Mesa da disposição de lugares. A posição da mesa na sequência não é
/// guardada explicitamente — é o índice desta mesa na lista ordenada de
/// mesas de um casamento (ver [MockBackend.listSeatingTables]), o que
/// garante que nunca há mesas preenchidas depois de uma mesa vazia:
/// remover uma mesa do meio reajusta automaticamente a sequência.
class SeatingTable {
  final String id;
  final String weddingId;
  final List<String> guestIds;

  /// Forma da mesa na planta (Lugares) — retangular ou redonda
  /// (default). Só visual, não afeta a lógica de preenchimento.
  final bool rectangular;

  const SeatingTable({
    required this.id,
    required this.weddingId,
    this.guestIds = const [],
    this.rectangular = false,
  });

  SeatingTable copyWith({List<String>? guestIds}) {
    return SeatingTable(
      id: id,
      weddingId: weddingId,
      guestIds: guestIds ?? this.guestIds,
      rectangular: rectangular,
    );
  }
}

class BudgetCategory {
  final String name;
  final double amount;

  /// Categoria de parceiro correspondente — permite somar o preço de
  /// parceiros escolhidos na checklist a esta categoria de
  /// orçamento. `null` para categorias sem parceiro associado (ex:
  /// "Outros").
  final PartnerCategory? partnerCategory;

  /// Verba atribuída a esta categoria — distinto de [amount] (o já
  /// gasto). Usado para a barra de progresso e o selo "Dentro do
  /// orçamento" / "Atenção" em Orçamento.
  final double allocated;

  const BudgetCategory({
    required this.name,
    required this.amount,
    this.partnerCategory,
    this.allocated = 0,
  });
}

/// Estado de pagamento de uma despesa individual — distinto do
/// agregado por categoria em [BudgetCategory], que só guarda o total já
/// gasto. Alimenta os separadores Todas/Pagas/Pendentes e a secção
/// "Pagamentos próximos" em Orçamento.
class Expense {
  final String id;
  final String weddingId;
  final String title;
  final PartnerCategory? category;
  final double amount;
  final DateTime? dueDate;
  final bool paid;

  const Expense({
    required this.id,
    required this.weddingId,
    required this.title,
    this.category,
    required this.amount,
    this.dueDate,
    this.paid = false,
  });

  Expense copyWith({bool? paid}) {
    return Expense(
      id: id,
      weddingId: weddingId,
      title: title,
      category: category,
      amount: amount,
      dueDate: dueDate,
      paid: paid ?? this.paid,
    );
  }
}

class Budget {
  final String weddingId;
  final double total;
  final List<BudgetCategory> categories;

  const Budget({
    required this.weddingId,
    required this.total,
    required this.categories,
  });

  double get spent => categories.fold(0, (sum, c) => sum + c.amount);

  double get remaining => total - spent;

  double get progress => total == 0 ? 0 : (spent / total).clamp(0, 1);
}
