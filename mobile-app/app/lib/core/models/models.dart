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
enum UserRole { couple, partner, guest }

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

  /// Categoria de negócio — só usada quando [role] é [UserRole.partner].
  final PartnerCategory? category;

  // Campos de "Informações do negócio" — todos só usados quando [role]
  // é [UserRole.partner]; ver `partner_profile/screens/business_info_screen.dart`.
  //
  // [businessName] é o nome público do negócio (`partner_profiles.business_name`)
  // — distinto de [fullName], que é sempre o nome da pessoa
  // (`profiles.full_name`, usado nas saudações "Olá, ..."). Antes de
  // 2026-08-30 o mock reaproveitava [fullName] para os dois, o que teria
  // deixado um parceiro a editar "Nome do negócio" a alterar sem querer o
  // seu próprio nome. Ver `ROADMAP.md`, Fase 3.
  final String? businessName;
  final String? businessDescription;
  final String? location;

  /// Rótulos das categorias reais selecionadas (`partner_profile_categories`,
  /// até 5 por RN03) — não tem relação com [category] (enum de mock de
  /// categoria única, mantido só para não partir código antigo que ainda
  /// o lê, mas nunca populado a partir do schema real). Ver
  /// `core/partner_profile/partner_profile_controller.dart`.
  final List<String> categoryLabels;
  final List<String> serviceAreas;
  final int? yearsExperience;
  final String? website;
  final String? instagram;
  final String? phone;
  final String? contactEmail;
  final bool acceptingRequests;
  final bool travelsForEvents;
  final int? maxTravelDistanceKm;

  /// Valor bruto de `partner_profiles.status` ('draft' | 'pending_review' |
  /// 'changes_required' | 'published' | 'rejected' | 'suspended') — null
  /// para casais.
  final String? partnerProfileStatus;
  final String? rejectionReason;

  /// Logótipo do negócio (`partner_profiles.cover_photo_url`) — pedido
  /// explícito do utilizador como requisito obrigatório de onboarding,
  /// distinto das fotos de portefólio. Nome do campo Dart escolhido por
  /// clareza (é sempre usado como logótipo, nunca como capa/banner);
  /// mantém-se `cover_photo_url` do lado da base de dados, a única coluna
  /// já existente que serve este propósito.
  final String? logoUrl;

  /// Valor bruto de `partner_profiles.pricing_mode` ('packages' |
  /// 'quote_only') — null para casais. Ver [ServicePackage].
  final String? pricingMode;

  const Profile({
    required this.id,
    required this.fullName,
    required this.email,
    required this.password,
    required this.role,
    this.emailVerified = false,
    this.onboardingComplete = false,
    this.category,
    this.businessName,
    this.businessDescription,
    this.location,
    this.categoryLabels = const [],
    this.serviceAreas = const [],
    this.yearsExperience,
    this.website,
    this.instagram,
    this.phone,
    this.contactEmail,
    this.acceptingRequests = true,
    this.travelsForEvents = true,
    this.maxTravelDistanceKm,
    this.partnerProfileStatus,
    this.rejectionReason,
    this.logoUrl,
    this.pricingMode,
  });

  Profile copyWith({
    bool? emailVerified,
    bool? onboardingComplete,
    String? fullName,
    String? businessName,
    String? businessDescription,
    List<String>? categoryLabels,
    List<String>? serviceAreas,
    int? yearsExperience,
    String? website,
    String? instagram,
    String? phone,
    String? contactEmail,
    bool? acceptingRequests,
    bool? travelsForEvents,
    String? partnerProfileStatus,
    String? rejectionReason,
    String? logoUrl,
    String? pricingMode,
  }) {
    return Profile(
      id: id,
      fullName: fullName ?? this.fullName,
      email: email,
      password: password,
      role: role,
      emailVerified: emailVerified ?? this.emailVerified,
      onboardingComplete: onboardingComplete ?? this.onboardingComplete,
      category: category,
      businessName: businessName ?? this.businessName,
      businessDescription: businessDescription ?? this.businessDescription,
      location: location,
      categoryLabels: categoryLabels ?? this.categoryLabels,
      serviceAreas: serviceAreas ?? this.serviceAreas,
      yearsExperience: yearsExperience ?? this.yearsExperience,
      website: website ?? this.website,
      instagram: instagram ?? this.instagram,
      phone: phone ?? this.phone,
      contactEmail: contactEmail ?? this.contactEmail,
      acceptingRequests: acceptingRequests ?? this.acceptingRequests,
      travelsForEvents: travelsForEvents ?? this.travelsForEvents,
      maxTravelDistanceKm: maxTravelDistanceKm,
      partnerProfileStatus: partnerProfileStatus ?? this.partnerProfileStatus,
      rejectionReason: rejectionReason ?? this.rejectionReason,
      logoUrl: logoUrl ?? this.logoUrl,
      pricingMode: pricingMode ?? this.pricingMode,
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

  /// Foto de capa escolhida pelo casal para o cartão principal do
  /// Home — `null` até fazerem upload da primeira. Guardada no bucket
  /// `wedding-banners` (035_wedding_banner_storage.sql).
  final String? coverPhotoUrl;

  /// Foto de perfil mostrada no ecrã "Os noivos" — separada de
  /// [coverPhotoUrl] de propósito (038_wedding_profile_photo.sql),
  /// pedido explícito do utilizador: "o pfp em noivos pode e deve ser
  /// diferente ao da imagem em home".
  final String? profilePhotoUrl;

  /// Usado só para "quebrar" a cache do browser em [coverPhotoUrl]/
  /// [profilePhotoUrl] — o caminho no Storage é fixo por casamento
  /// (`{wedding_id}/banner.ext`, `upsert: true`), por isso um novo
  /// upload devolve o mesmo URL de sempre e o browser continuava a
  /// mostrar a imagem antiga em cache. Pedido explícito do
  /// utilizador: "a imagem no o nosso casamento não quer atualizar".
  final DateTime? updatedAt;

  /// Código para uma conta de convidado (`UserRole.guest`) se ligar a
  /// este casamento (`register_screen.dart`, `050_wedding_guest_code.sql`)
  /// — gerado no backend a partir dos nomes do casal + número, distinto
  /// de [inviteUrl] (RSVP sem conta).
  final String? guestCode;

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
    this.coverPhotoUrl,
    this.profilePhotoUrl,
    this.updatedAt,
    this.guestCode,
  });

  /// URL pronto a usar em `Image.network`, já com o cache-buster de
  /// [updatedAt] anexado quando presente.
  String? get coverPhotoUrlCacheBusted => _cacheBust(coverPhotoUrl);
  String? get profilePhotoUrlCacheBusted => _cacheBust(profilePhotoUrl);

  String? _cacheBust(String? url) {
    if (url == null) return null;
    if (updatedAt == null) return url;
    return '$url?v=${updatedAt!.millisecondsSinceEpoch}';
  }

  String get displayQuote => (quote == null || quote!.isEmpty)
      ? 'O amor não se vê com os olhos, mas com a alma.'
      : quote!;

  /// Domínio fictício do site do casamento, derivado do slug já
  /// existente (sem traços) — não precisa de campo próprio.
  String get websiteDomain => '${inviteSlug.replaceAll('-', '')}.casamento.pt';

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
    String? coverPhotoUrl,
    String? profilePhotoUrl,
    DateTime? updatedAt,
    String? guestCode,
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
      coverPhotoUrl: coverPhotoUrl ?? this.coverPhotoUrl,
      profilePhotoUrl: profilePhotoUrl ?? this.profilePhotoUrl,
      updatedAt: updatedAt ?? this.updatedAt,
      guestCode: guestCode ?? this.guestCode,
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

  /// `guests.notes` (`004_guests.sql`) — notas privadas do casal sobre o
  /// convidado (ex: "chega de carro", alergias), distintas de [note]
  /// (`guest_message`, palavras do próprio convidado). Coluna existia na
  /// base de dados desde sempre, mas sem ecrã que a mostrasse ou
  /// editasse até ao ecrã de perfil do convidado.
  final String? notes;

  /// `guests.created_at` — usado só para dar sempre um primeiro ponto
  /// ao histórico do perfil ("Convidado adicionado"), mesmo antes de
  /// qualquer convite ser enviado ou resposta dada.
  final DateTime? createdAt;

  /// `guests.invite_sent_at` — ainda não escrito por nenhum fluxo real
  /// (o envio de convites é manual, por link copiado — ver
  /// `guest_detail_screen.dart`), por isso hoje é sempre `null`; exposto
  /// já para o dia em que um envio real o passar a preencher.
  final DateTime? inviteSentAt;

  /// `guests.rsvp_responded_at` — timestamp real da resposta,
  /// preservado por `updateGuest()` mesmo quando o resto do convidado é
  /// editado depois de já ter respondido (ver nota em `guest_controller.dart`).
  final DateTime? rsvpRespondedAt;

  /// `guests.rsvp_token` (`004_guests.sql`) — usado para construir o
  /// link público de RSVP (`/rsvp/{rsvpToken}`, `rsvp_page_screen.dart`).
  /// Sempre presente na base de dados (`not null default gen_random_uuid()`),
  /// só `null` aqui em código antigo/mock que ainda não o preenchia.
  final String? rsvpToken;

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
    this.notes,
    this.createdAt,
    this.inviteSentAt,
    this.rsvpRespondedAt,
    this.rsvpToken,
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
    String? notes,
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
      notes: notes ?? this.notes,
      createdAt: createdAt,
      inviteSentAt: inviteSentAt,
      rsvpRespondedAt: rsvpRespondedAt,
      rsvpToken: rsvpToken,
    );
  }
}

/// Casamento a que uma conta `UserRole.guest` está ligada
/// (`wedding_guest_members`, `050_wedding_guest_code.sql`) — versão
/// mínima só com o que `guest_home_screen.dart` mostra, não o [Wedding]
/// completo (o convidado não tem acesso ao resto dos dados do
/// casamento).
class GuestWedding {
  final String weddingId;
  final String partnerName1;
  final String? partnerName2;
  final DateTime? weddingDate;
  final String? venue;
  final String? location;
  final String? quote;
  final String? coverPhotoUrl;

  /// `weddings.ceremony_time`/`welcome_message`/`theme_colors`
  /// (`067_guest_self_service.sql`) — mostrados no ecrã de Detalhes do
  /// casamento do convidado; todos opcionais, sem ecrã de edição
  /// próprio ainda para o casal os preencher.
  final String? ceremonyTime;
  final String? welcomeMessage;
  final List<String> themeColors;

  /// `weddings.updated_at` — mesma razão de [Wedding.updatedAt]: o
  /// caminho no Storage é fixo por casamento (`upsert: true`), por isso
  /// um novo upload de foto de capa devolve sempre o mesmo URL e ficava
  /// preso em cache do browser sem isto. Pedido explícito do
  /// utilizador (2026-09-13): "quando o casal atualiza as fotos...
  /// deve atualizar em todos os lados" — incluindo aqui, do lado do
  /// convidado.
  final DateTime? updatedAt;

  const GuestWedding({
    required this.weddingId,
    required this.partnerName1,
    this.partnerName2,
    this.weddingDate,
    this.venue,
    this.location,
    this.quote,
    this.coverPhotoUrl,
    this.ceremonyTime,
    this.welcomeMessage,
    this.themeColors = const [],
    this.updatedAt,
  });

  String? get coverPhotoUrlCacheBusted {
    if (coverPhotoUrl == null) return null;
    if (updatedAt == null) return coverPhotoUrl;
    return '$coverPhotoUrl?v=${updatedAt!.millisecondsSinceEpoch}';
  }

  String get displayNames => partnerName2 == null || partnerName2!.isEmpty
      ? partnerName1
      : '$partnerName1 & $partnerName2';

  /// Hashtag derivada dos nomes ("Inês & Miguel" → "#InesEMiguel") — não
  /// existe nenhuma coluna própria para isto, calculado no cliente a
  /// partir dos mesmos nomes já mostrados no resto do ecrã.
  String get hashtag {
    String clean(String s) => s
        .replaceAll(RegExp('[áàâã]', caseSensitive: false), 'a')
        .replaceAll(RegExp('[éê]', caseSensitive: false), 'e')
        .replaceAll(RegExp('[íî]', caseSensitive: false), 'i')
        .replaceAll(RegExp('[óôõ]', caseSensitive: false), 'o')
        .replaceAll(RegExp('[úû]', caseSensitive: false), 'u')
        .replaceAll(RegExp('[^A-Za-z0-9]'), '');
    final first = clean(partnerName1);
    final second = partnerName2 == null ? '' : clean(partnerName2!);
    return second.isEmpty ? '#$first' : '#${first}E$second';
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

/// Parceiro real, do lado do casal (Marketplace) — liga-se a
/// `partner_profiles`/`partner_profile_categories`/`partner_categories`
/// (`core/partners/partner_providers.dart`), substitui
/// `MockBackend.listPartners/getPartner`. Categorias em lista (não um
/// único enum): a taxonomia real (`partner_categories`) tem 14 valores,
/// não os 5 fixos de [PartnerCategory] (esse enum mantém-se, mas só
/// para Checklist/Orçamento, que ainda não foram migrados para a
/// taxonomia real). [rating]/[startingPrice] `null` = ainda sem
/// avaliações reais / parceiro só aceita pedidos de orçamento — nunca
/// um valor inventado.
class Partner {
  final String id;
  final String name;
  final List<String> categoryLabels;
  final List<String> categorySlugs;
  final String location;
  final double? rating;
  final int reviewCount;
  final double? startingPrice;

  /// Só preenchido quando o parceiro trabalha em `pricing_mode =
  /// 'quote_only'` (sem pacotes fixos) — ver
  /// `database/migrations/049_partner_average_quote_price.sql`. Distinto
  /// de [startingPrice] (mínimo de um pacote fechado): isto é uma média
  /// indicativa, não um piso de preço.
  final double? averageQuotePrice;
  final String description;
  final String? imageUrl;

  const Partner({
    required this.id,
    required this.name,
    this.categoryLabels = const [],
    this.categorySlugs = const [],
    required this.location,
    this.rating,
    this.reviewCount = 0,
    this.startingPrice,
    this.averageQuotePrice,
    required this.description,
    this.imageUrl,
  });

  String get primaryCategoryLabel =>
      categoryLabels.isEmpty ? 'Outro' : categoryLabels.first;
  String get primaryCategorySlug =>
      categorySlugs.isEmpty ? 'other' : categorySlugs.first;
}

// `aceite` — pedido explícito do utilizador (2026-09-05): a proposta
// aceite pelo casal (`accept_proposal()`) cria uma linha real em
// `bookings` com `status = 'awaiting_deposit'`, mas isso caía no mesmo
// balde que [emAnalise] (pedido ainda por responder) — o parceiro não
// tinha nenhuma forma de distinguir "casal ainda não decidiu" de "casal
// já aceitou, falta só o sinal". Ver `mapRealBookingStatus`
// (`core/home/home_providers.dart`) e `partner_bookings_screen.dart`
// (separador "Confirmados" passou a incluir este estado também).
enum BookingStatus { novo, emAnalise, aceite, confirmado, concluido, recusado }

extension BookingStatusLabel on BookingStatus {
  String get label => switch (this) {
    BookingStatus.novo => 'Novo',
    BookingStatus.emAnalise => 'Em análise',
    BookingStatus.aceite => 'Aceite — sinal pendente',
    BookingStatus.confirmado => 'Confirmado',
    BookingStatus.concluido => 'Concluído',
    BookingStatus.recusado => 'Recusado',
  };
}

/// Pedido de orçamento/reserva recebido por um parceiro — do lado do
/// parceiro, não confundir com [ChecklistItem] (do lado do casal).
class Booking {
  final String id;
  final String partnerId;
  final String weddingId;
  final String clientName;
  final String avatarSeed;
  final DateTime eventDate;
  final String city;

  /// Rótulo de categoria (`partner_categories.label_pt`) — texto livre em
  /// vez de [PartnerCategory] porque a taxonomia real tem 13 valores
  /// possíveis (ver `database/migrations/005_partner_profile.sql`), não os
  /// 5 fixos do enum de mock; `null` quando o parceiro não tem nenhuma
  /// categoria associada. Ver `ROADMAP.md`, 2026-08-31, Fase 4.
  final String? category;
  final String packageLabel;
  final BookingStatus status;
  final String? messageFromCouple;

  /// `true` quando esta linha vem de `quote_requests` ("Recebidos" —
  /// ainda não há reserva confirmada), `false` quando vem de `bookings`
  /// (Confirmados/Concluídos). Necessário porque as duas tabelas reais
  /// têm ids e ações de escrita diferentes (`decline_quote_request` só
  /// existe para a primeira) — ver `booking_detail_screen.dart`.
  final bool fromQuoteRequest;

  /// `true` quando `quote_requests.status == 'proposal_sent'` — já foi
  /// enviada uma proposta para este pedido e está à espera do casal
  /// aceitar/recusar (`accept_proposal()`), por isso não mostra outra vez
  /// o botão "Enviar proposta" (`send_proposal()` rejeita um segundo envio
  /// com `invalid_state` — isto só reflete essa regra na UI). Ver
  /// `send_proposal_screen.dart`.
  final bool proposalSent;

  const Booking({
    required this.id,
    required this.partnerId,
    required this.weddingId,
    required this.clientName,
    required this.avatarSeed,
    required this.eventDate,
    required this.city,
    required this.category,
    required this.packageLabel,
    this.status = BookingStatus.novo,
    this.messageFromCouple,
    this.fromQuoteRequest = false,
    this.proposalSent = false,
  });

  Booking copyWith({BookingStatus? status}) => Booking(
    id: id,
    partnerId: partnerId,
    weddingId: weddingId,
    clientName: clientName,
    avatarSeed: avatarSeed,
    eventDate: eventDate,
    city: city,
    category: category,
    packageLabel: packageLabel,
    status: status ?? this.status,
    messageFromCouple: messageFromCouple,
    fromQuoteRequest: fromQuoteRequest,
    proposalSent: proposalSent,
  );
}

enum PortfolioMediaType { image, video }

/// Item real do portefólio (`database/migrations/005_partner_profile.sql`,
/// `023_portfolio_storage.sql`) — mín. 3 [PortfolioMediaType.image] e no
/// máximo 1 [PortfolioMediaType.video] (RN reforçada em
/// `enforce_portfolio_video_limit()`). Sem noção de categoria: a tabela
/// real nunca teve essa coluna — era só uma classificação do mock
/// (casamentos/sessões/detalhes), sem equivalente na base de dados.
class PortfolioItem {
  final String id;
  final String partnerId;
  final String mediaUrl;
  final PortfolioMediaType mediaType;
  final int position;

  const PortfolioItem({
    required this.id,
    required this.partnerId,
    required this.mediaUrl,
    required this.mediaType,
    required this.position,
  });
}

/// Pacote de serviços real do parceiro
/// (`database/migrations/028_partner_service_packages.sql`) — até 3 por
/// parceiro (RN, `enforce_partner_package_limit()`), só usado quando
/// `Profile.pricingMode == 'packages'`. Distinto do `PartnerPackage` só
/// de leitura em `partner_style.dart` (lado do casal, ainda mock,
/// derivado de `Partner.startingPrice` — o Marketplace/perfil público
/// que consumiria estes pacotes reais ainda não existe, ver
/// `ROADMAP.md`).
class ServicePackage {
  final String id;
  final String partnerId;
  final String name;
  final String description;
  final double price;

  /// true = preço mostrado como "A partir de X€" (pedido explícito do
  /// utilizador: "preço ou 'a partir de'"), false = preço fechado.
  final bool isStartingPrice;
  final int position;

  const ServicePackage({
    required this.id,
    required this.partnerId,
    required this.name,
    this.description = '',
    required this.price,
    this.isStartingPrice = false,
    this.position = 0,
  });
}

/// Avaliação real (`reviews`, 045_reviews.sql). `weddings` só é
/// legível pelos próprios membros/admin (RLS de `003_wedding.sql`) —
/// por isso `coupleDisplayName`/`coupleAvatarUrl` no perfil público do
/// parceiro (`partner_detail_screen.dart`) vêm de uma função à parte
/// (`get_review_authors()`, `069_public_review_authors.sql`) que expõe
/// deliberadamente só nome+foto de casamentos com review publicada
/// desse parceiro, nunca o resto de `weddings`. Pedido explícito do
/// utilizador (2026-09-13): mostrar isto a qualquer visitante do
/// Marketplace, não só a quem tem relação real com o casal.
class Review {
  final String id;
  final String bookingId;
  final String partnerId;
  final int rating;
  final String? comment;
  final DateTime createdAt;
  final String? response;
  final DateTime? responseAt;
  final String status;

  /// Nome a mostrar ("Rafael & Inês") — o mesmo `weddings.partner_name_1`/
  /// `partner_name_2` que aparece em "Os noivos", não o nome da conta
  /// individual (`profiles.full_name`). Pedido explícito do utilizador:
  /// "devem mostrar o nome dos noivos e o icon deles, tal como o perfil
  /// deles".
  final String coupleDisplayName;

  /// `weddings.cover_photo_url` — mesma foto do "perfil" do casal
  /// (`wedding_details_screen.dart`). `null` quando ainda não
  /// escolheram nenhuma, cai em iniciais na UI.
  final String? coupleAvatarUrl;

  /// `profiles.created_at` de quem escreveu a review — "há quanto
  /// tempo tem conta", nunca a data de nascimento nem nenhum dado
  /// pessoal, só a antiguidade da conta na plataforma.
  final DateTime accountCreatedAt;

  /// Restantes campos "interessantes mas não secretos" pedidos pelo
  /// utilizador — já públicos no próprio wizard de onboarding do
  /// casal, nenhum é pessoal/sensível (nem orçamento, nem contactos).
  final DateTime? weddingDate;
  final String? location;
  final int? estimatedGuests;

  const Review({
    required this.id,
    required this.bookingId,
    required this.partnerId,
    required this.rating,
    this.comment,
    required this.createdAt,
    this.response,
    this.responseAt,
    this.status = 'published',
    this.coupleDisplayName = 'Casal',
    this.coupleAvatarUrl,
    required this.accountCreatedAt,
    this.weddingDate,
    this.location,
    this.estimatedGuests,
  });

  factory Review.fromRow(Map<String, dynamic> row) {
    final wedding = row['weddings'] as Map<String, dynamic>?;
    final profile = row['profiles'] as Map<String, dynamic>?;
    final name1 = wedding?['partner_name_1'] as String?;
    final name2 = wedding?['partner_name_2'] as String?;
    final displayName = (name1 == null || name1.isEmpty)
        ? 'Casal'
        : (name2 == null || name2.isEmpty)
        ? name1
        : '$name1 & $name2';

    return Review(
      id: row['id'] as String,
      bookingId: row['booking_id'] as String,
      partnerId: row['partner_id'] as String,
      rating: row['rating'] as int,
      comment: row['comment'] as String?,
      createdAt: DateTime.parse(row['created_at'] as String),
      response: row['partner_response'] as String?,
      responseAt: row['partner_response_at'] == null
          ? null
          : DateTime.parse(row['partner_response_at'] as String),
      status: row['status'] as String? ?? 'published',
      coupleDisplayName: displayName,
      coupleAvatarUrl: wedding?['cover_photo_url'] as String?,
      accountCreatedAt: profile?['created_at'] == null
          ? DateTime.parse(row['created_at'] as String)
          : DateTime.parse(profile!['created_at'] as String),
      weddingDate: wedding?['wedding_date'] == null
          ? null
          : DateTime.parse(wedding!['wedding_date'] as String),
      location: wedding?['location'] as String?,
      estimatedGuests: wedding?['estimated_guests'] as int?,
    );
  }
}

/// Resumo agregado de avaliações — valor fixo de referência (não
/// derivado da lista de [Review] seed, que só tem exemplos parciais).
class PartnerReviewSummary {
  final double average;
  final int count;

  const PartnerReviewSummary({required this.average, required this.count});
}

/// Estatísticas agregadas do parceiro para um período — objeto de
/// valor simples, não persistido, devolvido diretamente por
/// `MockBackend.getPartnerStats`.
class PartnerStats {
  final int views;
  final double viewsDeltaPct;
  final int requestCount;
  final double requestDeltaPct;
  final double conversionPct;
  final double conversionDeltaPct;
  final double avgRating;
  final double avgRatingDelta;

  /// Vendas do período — soma de reservas confirmadas/concluídas.
  /// Mesmo valor de referência fixo que os restantes campos desta classe.
  final double revenue;
  final double revenueDeltaPct;

  /// Pontos do gráfico de tendência (sparkline) de visualizações.
  final List<double> viewsTrend;

  const PartnerStats({
    required this.views,
    required this.viewsDeltaPct,
    required this.requestCount,
    required this.requestDeltaPct,
    required this.conversionPct,
    required this.conversionDeltaPct,
    required this.avgRating,
    required this.avgRatingDelta,
    required this.revenue,
    required this.revenueDeltaPct,
    required this.viewsTrend,
  });
}

enum SupportTicketStatus { open, pending, resolved }

extension SupportTicketStatusLabel on SupportTicketStatus {
  String get label => switch (this) {
    SupportTicketStatus.open => 'Aberto',
    SupportTicketStatus.pending => 'A aguardar resposta',
    SupportTicketStatus.resolved => 'Resolvido',
  };
}

enum SupportTicketCategory { general, disputeDelay }

extension SupportTicketCategoryLabel on SupportTicketCategory {
  String get label => switch (this) {
    SupportTicketCategory.general => 'Geral',
    SupportTicketCategory.disputeDelay => 'Disputa / atraso',
  };

  String toDb() => switch (this) {
    SupportTicketCategory.general => 'general',
    SupportTicketCategory.disputeDelay => 'dispute_delay',
  };

  static SupportTicketCategory fromDb(String value) => switch (value) {
    'dispute_delay' => SupportTicketCategory.disputeDelay,
    _ => SupportTicketCategory.general,
  };
}

/// Pedido de apoio ao suporte real (`support_tickets`,
/// 047_support_tickets.sql) — casal ou parceiro, distinguido por
/// [userId] (não por um campo de papel próprio, mesmo padrão de
/// [Booking.partnerId] filtrar por dono em vez de por tipo).
/// "Disputa/atraso" ([SupportTicketCategory.disputeDelay]) resolve-se
/// na mesma aba, sem módulo `admin-web/disputes/` separado — pedido
/// explícito do utilizador.
class SupportTicket {
  final String id;
  final String userId;
  final String? bookingId;
  final SupportTicketCategory category;
  final String subject;
  final String description;
  final SupportTicketStatus status;
  final String? resolutionNote;
  final DateTime? resolvedAt;
  final DateTime createdAt;

  const SupportTicket({
    required this.id,
    required this.userId,
    this.bookingId,
    this.category = SupportTicketCategory.general,
    required this.subject,
    this.description = '',
    required this.status,
    this.resolutionNote,
    this.resolvedAt,
    required this.createdAt,
  });

  factory SupportTicket.fromRow(Map<String, dynamic> row) => SupportTicket(
    id: row['id'] as String,
    userId: row['user_id'] as String,
    bookingId: row['booking_id'] as String?,
    category: SupportTicketCategoryLabel.fromDb(
      row['category'] as String? ?? 'general',
    ),
    subject: row['subject'] as String,
    description: row['description'] as String? ?? '',
    status: SupportTicketStatus.values.byName(row['status'] as String),
    resolutionNote: row['resolution_note'] as String?,
    resolvedAt: row['resolved_at'] == null
        ? null
        : DateTime.parse(row['resolved_at'] as String),
    createdAt: DateTime.parse(row['created_at'] as String),
  );
}

/// Reserva do lado do casal — parceiro contratado para o casamento.
/// Não reutiliza [Booking] (perspetiva do parceiro, campos como
/// `clientName` não fazem sentido aqui); ver nota em
/// `mobile-app/bookings/README.md` sobre este módulo ainda não ter
/// motor real ligado nesta app.
class CoupleBooking {
  final String id;
  final String weddingId;
  final String partnerName;

  /// `partner_profiles.cover_photo_url` (mesmo campo usado como logótipo
  /// em todo o resto da app, ver `partner_welcome_screen.dart`) — `null`
  /// quando o parceiro ainda não fez upload de nenhum, cai em
  /// [InitialsAvatar] no ecrã, mesmo padrão de `cards.dart`.
  final String? partnerLogoUrl;

  /// Ver nota em [Booking.category] — mesmo motivo para ser `String?` em
  /// vez de [PartnerCategory] aqui.
  final String? category;
  final DateTime serviceDate;
  final double amount;
  final BookingStatus status;

  /// Id do pagamento pendente do sinal (`payments.id`, tipo `deposit`,
  /// estado `pending`) — `null` quando não há nenhum sinal por pagar
  /// (já foi pago, ou a reserva ainda não chegou a esse ponto). Usado
  /// para abrir o checkout Stripe (`create-deposit-checkout`, ver
  /// `mobile-app/payments/stripe-connect.md`).
  final String? pendingDepositPaymentId;
  final double? depositAmount;

  /// Id do pedido de pagamento final (`payments.id`, tipo
  /// `final_payment`, estado `pending`) — criado automaticamente por
  /// `admin_complete_booking()` (`053_final_payment.sql`) assim que o
  /// serviço é marcado como concluído, quando sobra valor por cobrar
  /// além do sinal. `null` quando não há nenhum pagamento final por
  /// fazer (ainda não concluído, já pago, ou o sinal já cobria tudo).
  final String? pendingFinalPaymentId;
  final double? finalPaymentAmount;

  const CoupleBooking({
    required this.id,
    required this.weddingId,
    required this.partnerName,
    this.partnerLogoUrl,
    required this.category,
    required this.serviceDate,
    required this.amount,
    required this.status,
    this.pendingDepositPaymentId,
    this.depositAmount,
    this.pendingFinalPaymentId,
    this.finalPaymentAmount,
  });
}

/// Proposta real (`proposals`, `009_quotations_bookings.sql`) enviada por
/// um parceiro em resposta a um pedido de orçamento, ainda por aceitar
/// pelo casal — distinto de [CoupleBooking] porque ainda não existe
/// nenhuma linha em `bookings` (só passa a existir depois de
/// `accept_proposal()`). Ver `pendingProposalsProvider`,
/// `couple_bookings_screen.dart`.
class ReceivedProposal {
  final String id;
  final String weddingId;
  final String partnerName;
  final String? category;
  final String title;
  final String? description;
  final double price;
  final double depositAmount;
  final DateTime? eventDate;

  const ReceivedProposal({
    required this.id,
    required this.weddingId,
    required this.partnerName,
    required this.category,
    required this.title,
    this.description,
    required this.price,
    required this.depositAmount,
    this.eventDate,
  });
}

/// Mensagem trocada entre um parceiro e o casal cliente. `contractTitle`
/// não-nulo marca a mensagem como um "cartão de contrato" em vez de texto
/// livre — é assim que um contrato é "enviado no chat" (ver `tasks.md`
/// de `partner-app/contracts/` para o modelo completo, ainda por
/// implementar; isto é a versão mínima só de envio/receção no chat).
class ChatMessage {
  final String id;

  /// Usado apenas pelo chat mock dedicado do parceiro
  /// (`core/chat/chat_controller.dart`, `partner_chat_screen.dart`) —
  /// o Chat real (`chat_thread_controller.dart` e o equivalente do
  /// lado do parceiro) usa [conversationId] em vez disto.
  final String? partnerId;

  /// Id real de `conversations` (036_chat.sql). `null` só no chat
  /// mock dedicado acima.
  final String? conversationId;
  final bool fromPartner;
  final String? text;
  final String? contractTitle;
  final DateTime sentAt;

  /// Cartão de proposta real (`send_proposal()`,
  /// `051_proposal_chat_card.sql`) — distinto de [contractTitle], que
  /// continua só mock. `proposalId` não-nulo marca a mensagem como
  /// cartão em vez de texto livre, mesmo raciocínio de [isContract].
  final String? proposalId;
  final String? proposalTitle;
  final double? proposalPrice;
  final double? proposalDepositAmount;

  /// Aviso real de pedido de orçamento (`sendQuoteRequestMessage()`,
  /// `054_quote_request_chat_notice.sql`) — clicável no chat do casal
  /// para abrir o perfil do parceiro (pedido explícito do utilizador,
  /// 2026-09-05). O `partner_id` da conversa já identifica de qual
  /// parceiro se trata, não precisa de nenhum campo extra.
  final bool isQuoteRequestNotice;

  const ChatMessage({
    required this.id,
    this.partnerId,
    this.conversationId,
    required this.fromPartner,
    this.text,
    this.contractTitle,
    required this.sentAt,
    this.proposalId,
    this.proposalTitle,
    this.proposalPrice,
    this.proposalDepositAmount,
    this.isQuoteRequestNotice = false,
  });

  bool get isContract => contractTitle != null;
  bool get isProposal => proposalId != null;
}

/// Linha do separador Chat (casal) / Mensagens (parceiro) — uma
/// conversa real entre um casamento e um parceiro, ligada a
/// `conversations` (036_chat.sql, par único `wedding_id`/`partner_id`).
/// [lastMessage] fica `null` enquanto a conversa ainda não tem
/// nenhuma mensagem (não inventamos uma prévia falsa).
class ChatConversation {
  final String id;
  final String name;
  final String avatarSeed;
  final String? avatarUrl;
  final String? weddingId;
  final String? partnerId;
  final String? lastMessage;
  final DateTime? lastMessageAt;
  final int unreadCount;

  const ChatConversation({
    required this.id,
    required this.name,
    required this.avatarSeed,
    this.avatarUrl,
    this.weddingId,
    this.partnerId,
    this.lastMessage,
    this.lastMessageAt,
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

enum TableShape { round, rectangular, square }

extension TableShapeLabel on TableShape {
  String get label => switch (this) {
    TableShape.round => 'Redonda',
    TableShape.rectangular => 'Retangular',
    TableShape.square => 'Quadrada',
  };
}

/// Tipo de mesa que um local (parceiro de categoria "venue") tem
/// disponível — ex: "10 mesas redondas de 8 lugares". Real
/// (`database/migrations/022_venue_tables.sql`), configurado pelo
/// próprio parceiro; o número de mesas do casal em [SeatingTable] é a
/// soma de [quantity] de todos os tipos do local que contratou. Ver
/// `mobile-app/seating/README.md`.
class VenueTableType {
  final String id;
  final String partnerId;
  final TableShape shape;
  final int seats;
  final int quantity;

  const VenueTableType({
    required this.id,
    required this.partnerId,
    required this.shape,
    required this.seats,
    required this.quantity,
  });

  VenueTableType copyWith({TableShape? shape, int? seats, int? quantity}) {
    return VenueTableType(
      id: id,
      partnerId: partnerId,
      shape: shape ?? this.shape,
      seats: seats ?? this.seats,
      quantity: quantity ?? this.quantity,
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
