import '../../shared/public_link.dart';

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

enum EventStatus { planning, completed }

/// Tipo de evento escolhido no onboarding (pedido do utilizador
/// 2026-10-16: "adiciona uma opção para as pessoas escolherem entre
/// eventos, e não só casamentos"). Guardado em `events.event_type`
/// (`074_wedding_event_type.sql`); o resto da app continua por agora a
/// tratar todos como "casamento".
enum EventType {
  wedding('Casamento', 'casamento'),
  baptism('Batizado', 'batizado'),
  birthday('Aniversário', 'aniversário'),
  communion('Comunhão', 'comunhão'),
  engagement('Noivado', 'noivado'),
  vowRenewal('Renovação de votos', 'renovação de votos'),
  graduation('Festa de curso', 'festa de curso'),
  corporate('Evento de empresa', 'evento de empresa'),
  babyShower('Chá de bebé', 'chá de bebé'),
  // Eventos abertos ao público (2026-11, migração 144).
  party('Festa', 'evento'),
  nightlife('Discoteca / noite', 'evento'),
  concert('Concerto', 'concerto'),
  festival('Festival', 'festival'),
  other('Outro', 'evento');

  const EventType(this.label, this.noun);

  /// Nome para mostrar ("Batizado").
  final String label;

  /// Em minúsculas, para frases ("o vosso batizado").
  final String noun;

  /// Valor guardado na base de dados.
  String get dbValue => switch (this) {
        EventType.wedding => 'wedding',
        EventType.baptism => 'baptism',
        EventType.birthday => 'birthday',
        EventType.communion => 'communion',
        EventType.engagement => 'engagement',
        EventType.vowRenewal => 'vow_renewal',
        EventType.graduation => 'graduation',
        EventType.corporate => 'corporate',
        EventType.babyShower => 'baby_shower',
        EventType.party => 'party',
        EventType.nightlife => 'nightlife',
        EventType.concert => 'concert',
        EventType.festival => 'festival',
        EventType.other => 'other',
      };

  /// Só estes podem ser públicos (pedido 2026-11): festas, discotecas,
  /// concertos, festivais, eventos de empresa e "Outro". Casamentos,
  /// batizados, aniversários, etc. são sempre privados.
  bool get canBePublic => const {
        EventType.corporate,
        EventType.party,
        EventType.nightlife,
        EventType.concert,
        EventType.festival,
        EventType.other,
      }.contains(this);

  /// Valores que a base de dados aceita antes da migração 081.
  bool get legacy => this == EventType.wedding || this == EventType.baptism || this == EventType.birthday || this == EventType.other;

  static EventType fromDb(String? value) => EventType.values.firstWhere(
        (t) => t.dbValue == value,
        orElse: () => EventType.wedding,
      );
}

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

  /// `partner_profiles.key_figure` (077) — ver `category_figure.dart`.
  final int? keyFigure;

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

  /// Foto de perfil da conta (`profiles.avatar_url`) — partilhada por
  /// toda a app (Modo convidado incluído): é a mesma coluna, por isso
  /// não há sincronização a fazer, só um único caminho de upload.
  final String? avatarUrl;

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
    this.keyFigure,
    this.partnerProfileStatus,
    this.rejectionReason,
    this.logoUrl,
    this.pricingMode,
    this.avatarUrl,
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
    int? maxTravelDistanceKm,
    int? keyFigure,
    String? partnerProfileStatus,
    String? rejectionReason,
    String? logoUrl,
    String? pricingMode,
    String? avatarUrl,
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
      maxTravelDistanceKm: maxTravelDistanceKm ?? this.maxTravelDistanceKm,
      keyFigure: keyFigure ?? this.keyFigure,
      partnerProfileStatus: partnerProfileStatus ?? this.partnerProfileStatus,
      rejectionReason: rejectionReason ?? this.rejectionReason,
      logoUrl: logoUrl ?? this.logoUrl,
      pricingMode: pricingMode ?? this.pricingMode,
      avatarUrl: avatarUrl ?? this.avatarUrl,
    );
  }
}

class Event {
  final String id;
  final String ownerId;
  final String partnerName1;
  final String? partnerName2;
  final int? partner1Age;
  final int? partner2Age;
  final DateTime? eventDate;
  final String? location;
  final String? venue;
  final CeremonyType ceremonyType;
  final EventType eventType;
  final int? estimatedGuests;
  final double? estimatedBudget;
  final EventStatus status;

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

  /// Nome do tipo quando é "Outro" (ex.: "Despedida", migração 081) —
  /// aparece no topo do painel em vez de "Outro".
  final String? eventTypeOther;

  /// Blocos do painel que o organizador escondeu (Definições → Painel do
  /// evento, migração 177).
  final List<String> panelHidden;

  const Event({
    required this.id,
    required this.ownerId,
    required this.partnerName1,
    this.partnerName2,
    this.partner1Age,
    this.partner2Age,
    this.eventDate,
    this.location,
    this.venue,
    this.ceremonyType = CeremonyType.civil,
    this.eventType = EventType.wedding,
    this.estimatedGuests,
    this.estimatedBudget,
    this.status = EventStatus.planning,
    this.quote,
    this.coverPhotoUrl,
    this.profilePhotoUrl,
    this.updatedAt,
    this.guestCode,
    this.eventTypeOther,
    this.panelHidden = const [],
  });

  /// O que aparece no topo do painel: o nome escolhido em "Outro" ou o
  /// tipo de evento.
  String get typeLabel =>
      eventType == EventType.other && eventTypeOther != null && eventTypeOther!.trim().isNotEmpty
          ? eventTypeOther!.trim()
          : eventType.label;

  bool panelShows(String key) => !panelHidden.contains(key);

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

  /// Link público de convite (`/invite/<código>`, `075_connect_remaining.sql`)
  /// — `null` enquanto o casamento ainda não tem código de convidado.
  String? get inviteUrl => guestCode == null ? null : publicLink('/invite/$guestCode');

  Event copyWith({
    String? partnerName1,
    String? partnerName2,
    Object? partner1Age = _unset,
    Object? partner2Age = _unset,
    DateTime? eventDate,
    String? location,
    String? venue,
    CeremonyType? ceremonyType,
    EventType? eventType,
    int? estimatedGuests,
    double? estimatedBudget,
    EventStatus? status,
    String? quote,
    String? coverPhotoUrl,
    String? profilePhotoUrl,
    DateTime? updatedAt,
    String? guestCode,
    String? eventTypeOther,
    List<String>? panelHidden,
  }) {
    return Event(
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
      eventDate: eventDate ?? this.eventDate,
      location: location ?? this.location,
      venue: venue ?? this.venue,
      ceremonyType: ceremonyType ?? this.ceremonyType,
      eventType: eventType ?? this.eventType,
      estimatedGuests: estimatedGuests ?? this.estimatedGuests,
      estimatedBudget: estimatedBudget ?? this.estimatedBudget,
      status: status ?? this.status,
      quote: quote ?? this.quote,
      coverPhotoUrl: coverPhotoUrl ?? this.coverPhotoUrl,
      profilePhotoUrl: profilePhotoUrl ?? this.profilePhotoUrl,
      updatedAt: updatedAt ?? this.updatedAt,
      guestCode: guestCode ?? this.guestCode,
      eventTypeOther: eventTypeOther ?? this.eventTypeOther,
      panelHidden: panelHidden ?? this.panelHidden,
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
  final String eventId;
  final String name;
  final String? email;
  final String? phone;
  final String group;
  final WeddingSide side;
  final bool plusOneAllowed;

  /// Quantas pessoas pode trazer (`guests.max_companions`, 091) — 0 =
  /// vem sozinho. [plusOneAllowed] é `maxCompanions > 0`.
  final int maxCompanions;

  /// 'child', 'adult' ou 'senior' (092), escolhido pelo convidado.
  final String ageGroup;
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

  /// `guests.invite_sent_at` — preenchido pelo ecrã «Convidar»
  /// (`invite_screen.dart`, 2026-11-15) quando o organizador envia o
  /// convite a esta pessoa.
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

  /// `guests.menu_selection` — escolha de menu do próprio convidado,
  /// preenchida no wizard "Vais ao casamento?" (`GuestOnboardingWizard`).
  final String? menuSelection;

  /// `guests.onboarding_completed_at` — marca que o convidado já passou
  /// pelo wizard uma vez; usado só para decidir se o wizard volta a
  /// aparecer, nunca mostrado na UI.
  final DateTime? onboardingCompletedAt;

  /// `guests.nickname` (101) — nome carinhoso que o organizador dá ao
  /// convidado (ex: "Avó Lurdes"); aparece nos Lugares em vez do nome.
  final String? nickname;

  /// `guests.linked_profile_id` (067) — a conta da pessoa na app, quando
  /// já entrou com o link ou o código; serve para «Ver perfil».
  final String? linkedProfileId;

  /// O nome a mostrar nos Lugares: o carinhoso, se existir.
  String get displayName => (nickname?.trim().isNotEmpty ?? false) ? nickname!.trim() : name;

  const Guest({
    required this.id,
    required this.eventId,
    required this.name,
    this.email,
    this.phone,
    this.group = '',
    this.side = WeddingSide.both,
    this.plusOneAllowed = false,
    this.maxCompanions = 0,
    this.ageGroup = 'adult',
    this.plusOneName,
    this.rsvpStatus = RsvpStatus.pending,
    this.dietaryRestrictions,
    this.note,
    this.notes,
    this.createdAt,
    this.inviteSentAt,
    this.rsvpRespondedAt,
    this.rsvpToken,
    this.menuSelection,
    this.onboardingCompletedAt,
    this.nickname,
    this.linkedProfileId,
  });

  Guest copyWith({
    String? name,
    String? email,
    String? phone,
    String? group,
    WeddingSide? side,
    bool? plusOneAllowed,
    int? maxCompanions,
    String? plusOneName,
    RsvpStatus? rsvpStatus,
    String? dietaryRestrictions,
    String? note,
    String? notes,
    String? menuSelection,
    DateTime? onboardingCompletedAt,
  }) {
    return Guest(
      id: id,
      eventId: eventId,
      name: name ?? this.name,
      email: email ?? this.email,
      phone: phone ?? this.phone,
      group: group ?? this.group,
      side: side ?? this.side,
      plusOneAllowed: plusOneAllowed ?? this.plusOneAllowed,
      maxCompanions: maxCompanions ?? this.maxCompanions,
      ageGroup: ageGroup,
      plusOneName: plusOneName ?? this.plusOneName,
      rsvpStatus: rsvpStatus ?? this.rsvpStatus,
      dietaryRestrictions: dietaryRestrictions ?? this.dietaryRestrictions,
      note: note ?? this.note,
      notes: notes ?? this.notes,
      createdAt: createdAt,
      inviteSentAt: inviteSentAt,
      rsvpRespondedAt: rsvpRespondedAt,
      rsvpToken: rsvpToken,
      menuSelection: menuSelection ?? this.menuSelection,
      onboardingCompletedAt: onboardingCompletedAt ?? this.onboardingCompletedAt,
      nickname: nickname,
      linkedProfileId: linkedProfileId,
    );
  }
}

/// Casamento a que uma conta `UserRole.guest` está ligada
/// (`wedding_guest_members`, `050_wedding_guest_code.sql`) — versão
/// mínima só com o que `guest_home_screen.dart` mostra, não o [Wedding]
/// completo (o convidado não tem acesso ao resto dos dados do
/// casamento).
/// Um momento do Programa (`events.program`, 085): hora, título e local.
class ProgramItem {
  final String time;
  final String title;
  final String place;

  /// Data da etapa (texto livre, p.ex. "2026-07-12"); vazio = o dia do evento.
  /// Permite programas de mais do que um dia (2026-11-17).
  final String date;

  /// Nome do parceiro, quando a etapa é de um parceiro do evento; vazio = sem
  /// parceiro (etapa à mão, p.ex. "Passeio no parque").
  final String partner;

  /// Foto do parceiro escolhido (cover_photo_url), quando a etapa tem um
  /// parceiro escolhido na app; vazio = sem foto (mostra o avatar por nome).
  final String partnerAvatarUrl;

  /// Id do perfil do parceiro escolhido (`partner_profiles.id`). Serve para
  /// saber se o parceiro já aceitou (tem reserva ativa) — enquanto não tiver,
  /// a etapa fica "à espera que aceite". Vazio = parceiro escrito à mão ou sem
  /// parceiro (2026-11-18).
  final String partnerId;

  const ProgramItem(
      {this.time = '',
      this.title = '',
      this.place = '',
      this.date = '',
      this.partner = '',
      this.partnerAvatarUrl = '',
      this.partnerId = ''});

  factory ProgramItem.fromJson(Map<String, dynamic> j) => ProgramItem(
        time: (j['time'] as String?) ?? '',
        title: (j['title'] as String?) ?? '',
        place: (j['place'] as String?) ?? '',
        date: (j['date'] as String?) ?? '',
        partner: (j['partner'] as String?) ?? '',
        partnerAvatarUrl: (j['partner_avatar'] as String?) ?? '',
        partnerId: (j['partner_id'] as String?) ?? '',
      );

  Map<String, dynamic> toJson() => {
        'time': time.trim(),
        'title': title.trim(),
        'place': place.trim(),
        if (date.trim().isNotEmpty) 'date': date.trim(),
        if (partner.trim().isNotEmpty) 'partner': partner.trim(),
        if (partnerAvatarUrl.trim().isNotEmpty) 'partner_avatar': partnerAvatarUrl.trim(),
        if (partnerId.trim().isNotEmpty) 'partner_id': partnerId.trim(),
      };

  ProgramItem copyWith(
          {String? time,
          String? title,
          String? place,
          String? date,
          String? partner,
          String? partnerAvatarUrl,
          String? partnerId}) =>
      ProgramItem(
        time: time ?? this.time,
        title: title ?? this.title,
        place: place ?? this.place,
        date: date ?? this.date,
        partner: partner ?? this.partner,
        partnerAvatarUrl: partnerAvatarUrl ?? this.partnerAvatarUrl,
        partnerId: partnerId ?? this.partnerId,
      );

  bool get isEmpty =>
      time.trim().isEmpty && title.trim().isEmpty && place.trim().isEmpty && date.trim().isEmpty && partner.trim().isEmpty;

  static List<ProgramItem> listFrom(Object? raw) => raw is List
      ? raw.whereType<Map>().map((m) => ProgramItem.fromJson(m.cast<String, dynamic>())).where((i) => !i.isEmpty).toList()
      : const [];
}

/// Um organizador visto pelo convidado: conta e nome (migração 187).
class EventOrganizerRef {
  final String id;
  final String name;
  const EventOrganizerRef({required this.id, required this.name});

  static List<EventOrganizerRef> listFrom(Object? raw) => raw is List
      ? [
          for (final m in raw.whereType<Map>())
            if (m['id'] is String) EventOrganizerRef(id: m['id'] as String, name: (m['name'] as String?) ?? 'Organizador'),
        ]
      : const [];
}

class GuestEvent {
  final String eventId;
  final String partnerName1;
  final String? partnerName2;
  final DateTime? eventDate;
  final String? venue;
  final String? location;
  final String? quote;
  final String? coverPhotoUrl;

  /// `events.ceremony_time`/`welcome_message`/`theme_colors`
  /// (`067_guest_self_service.sql`) — mostrados no ecrã de Detalhes do
  /// casamento do convidado; todos opcionais, sem ecrã de edição
  /// próprio ainda para o casal os preencher.
  final String? ceremonyTime;
  final String? welcomeMessage;
  final List<String> themeColors;

  /// `events.updated_at` — mesma razão de [Wedding.updatedAt]: o
  /// caminho no Storage é fixo por casamento (`upsert: true`), por isso
  /// um novo upload de foto de capa devolve sempre o mesmo URL e ficava
  /// preso em cache do browser sem isto. Pedido explícito do
  /// utilizador (2026-09-13): "quando o casal atualiza as fotos...
  /// deve atualizar em todos os lados" — incluindo aqui, do lado do
  /// convidado.
  final DateTime? updatedAt;

  const GuestEvent({
    required this.eventId,
    required this.partnerName1,
    this.partnerName2,
    this.eventDate,
    this.venue,
    this.location,
    this.quote,
    this.coverPhotoUrl,
    this.ceremonyTime,
    this.welcomeMessage,
    this.themeColors = const [],
    this.updatedAt,
    this.giftListUrl,
    this.giftIban,
    this.giftMessage,
    this.eventType = EventType.wedding,
    this.program = const [],
    this.dressCode,
    this.venueAddress,
    this.venueLatitude,
    this.venueLongitude,
    this.organizers = const [],
  });

  /// Coordenadas do local (087), quando a morada veio do local escolhido
  /// na app.
  final double? venueLatitude;
  final double? venueLongitude;

  /// Quem organiza (migração 187): para o convidado abrir o perfil e
  /// seguir. Vazio antes da migração.
  final List<EventOrganizerRef> organizers;

  /// Programa, dress code e morada (085) — definidos pelo casal em
  /// "Para os convidados".
  final List<ProgramItem> program;
  final String? dressCode;
  final String? venueAddress;

  /// `events.event_type` (074) — casamento por omissão.
  final EventType eventType;

  /// Presentes (`events.gift_*`, `075_connect_remaining.sql`) — definidos
  /// pelo casal nas Definições; `null` quando não indicaram nada.
  final String? giftListUrl;
  final String? giftIban;
  final String? giftMessage;

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
  final String eventId;
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
    required this.eventId,
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
      eventId: eventId,
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

  /// Marcado à mão no admin (`partner_profiles.featured`, migração 106):
  /// aparece primeiro no carrossel "Em destaque".
  final bool featured;

  /// Quando entrou na app (secção «Novos na À Nossa!»).
  final DateTime? createdAt;
  final int? yearsExperience;
  final int? maxTravelDistanceKm;

  /// Só para quem trabalha por orçamento (migração 203, pedido do Rafael
  /// 2026-11-20): para que tipo de evento é o valor de referência
  /// ([averageQuotePrice]) — "Bolo de 3 andares para 100 pessoas".
  final String? referenceNote;

  /// Trabalha só por orçamento (sem pacotes com preço).
  bool get quoteOnly => startingPrice == null;

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
    this.featured = false,
    this.createdAt,
    this.yearsExperience,
    this.maxTravelDistanceKm,
    this.referenceNote,
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
  final String eventId;
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

  /// Tipo de evento do pedido (`events.event_type`) — muda os textos do
  /// lado do parceiro ("O casal…", "A família…").
  final EventType eventType;

  /// Foto do casal (`events.profile_photo_url`, senão a capa) — PFP
  /// em toda a app (2026-10-20).
  final String? clientAvatarUrl;

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

  /// 188: pedido de um pacote — a cópia do pacote e dos extras como
  /// estavam quando o cliente pediu, o nº de pessoas e o total.
  final Map<String, dynamic>? packageSnapshot;
  final List<Map<String, dynamic>> extrasSnapshot;
  final int? people;
  final double? totalAmount;

  /// 190: «Como escolhem» ('same' / 'each') e «Quem paga»
  /// ('organizer' / 'each').
  final String choiceMode;
  final String payerMode;
  bool get eachChooses => choiceMode == 'each';
  bool get eachPays => payerMode == 'each';
  bool get canAcceptTable => fromQuoteRequest && eachChooses;
  final DateTime? choiceDeadline;
  String? get choiceDeadlineLabel {
    final d = choiceDeadline;
    if (d == null) return null;
    const w = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
    const m = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
    return '${w[d.weekday - 1]}, ${d.day} ${m[d.month - 1]}';
  }

  bool get isPackageRequest => packageSnapshot != null;
  bool get canAcceptPackage =>
      fromQuoteRequest && packageSnapshot != null && packageSnapshot!['is_starting_price'] != true && (totalAmount ?? 0) > 0;

  const Booking({
    required this.id,
    required this.partnerId,
    required this.eventId,
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
    this.clientAvatarUrl,
    this.eventType = EventType.wedding,
    this.packageSnapshot,
    this.extrasSnapshot = const [],
    this.people,
    this.totalAmount,
    this.choiceMode = 'same',
    this.payerMode = 'organizer',
    this.choiceDeadline,
  });

  Booking copyWith({BookingStatus? status}) => Booking(
    choiceMode: choiceMode,
    payerMode: payerMode,
    choiceDeadline: choiceDeadline,
    packageSnapshot: packageSnapshot,
    extrasSnapshot: extrasSnapshot,
    people: people,
    totalAmount: totalAmount,
    eventType: eventType,
    clientAvatarUrl: clientAvatarUrl,
    id: id,
    partnerId: partnerId,
    eventId: eventId,
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

  /// 188: o que inclui (uma linha por coisa), o que não inclui, a unidade
  /// do preço (`total` / `person` / `unit`) e para quantas pessoas.
  final List<String> includes;
  final String? excludes;
  final String priceUnit;
  final int? minPeople;
  final int? maxPeople;

  const ServicePackage({
    required this.id,
    required this.partnerId,
    required this.name,
    this.description = '',
    required this.price,
    this.isStartingPrice = false,
    this.position = 0,
    this.includes = const [],
    this.excludes,
    this.priceUnit = 'total',
    this.minPeople,
    this.maxPeople,
  });

  bool get perPerson => priceUnit == 'person';

  factory ServicePackage.fromRow(Map<String, dynamic> row) => ServicePackage(
        id: row['id'] as String,
        partnerId: row['partner_id'] as String,
        name: row['name'] as String,
        description: row['description'] as String? ?? '',
        price: (row['price'] as num).toDouble(),
        isStartingPrice: row['is_starting_price'] as bool? ?? false,
        position: row['position'] as int? ?? 0,
        includes: [for (final x in (row['includes'] as List?) ?? const []) '$x'],
        excludes: (row['excludes'] as String?)?.trim().isEmpty == true ? null : row['excludes'] as String?,
        priceUnit: row['price_unit'] as String? ?? 'total',
        minPeople: row['min_people'] as int?,
        maxPeople: row['max_people'] as int?,
      );
}

/// Extra do parceiro (188): aparece ao cliente só depois de ele escolher
/// um dos pacotes em [packageIds] (vazio = qualquer pacote).
class ServiceExtra {
  final String id;
  final String partnerId;
  final String name;
  final List<String> details;
  final double price;
  final String priceUnit;
  final List<String> packageIds;
  final int position;

  const ServiceExtra({
    required this.id,
    required this.partnerId,
    required this.name,
    this.details = const [],
    required this.price,
    this.priceUnit = 'total',
    this.packageIds = const [],
    this.position = 0,
  });

  bool appliesTo(String packageId) => packageIds.isEmpty || packageIds.contains(packageId);

  factory ServiceExtra.fromRow(Map<String, dynamic> row) => ServiceExtra(
        id: row['id'] as String,
        partnerId: row['partner_id'] as String,
        name: row['name'] as String,
        details: [for (final x in (row['details'] as List?) ?? const []) '$x'],
        price: (row['price'] as num).toDouble(),
        priceUnit: row['price_unit'] as String? ?? 'total',
        packageIds: [for (final x in (row['package_ids'] as List?) ?? const []) '$x'],
        position: row['position'] as int? ?? 0,
      );
}

/// Sufixo do preço conforme a unidade (188).
String priceUnitSuffix(String unit) => switch (unit) {
      'person' => ' / pessoa',
      'unit' => ' / unid.',
      _ => '',
    };

/// Avaliação real (`reviews`, 045_reviews.sql). `events` só é
/// legível pelos próprios membros/admin (RLS de `003_wedding.sql`) —
/// por isso `coupleDisplayName`/`coupleAvatarUrl` no perfil público do
/// parceiro (`partner_detail_screen.dart`) vêm de uma função à parte
/// (`get_review_authors()`, `069_public_review_authors.sql`) que expõe
/// deliberadamente só nome+foto de casamentos com review publicada
/// desse parceiro, nunca o resto de `events`. Pedido explícito do
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

  /// Quem escreveu (`reviews.couple_id`): abre o perfil desse organizador.
  final String? coupleId;

  /// Nome a mostrar ("Rafael & Inês") — o mesmo `events.partner_name_1`/
  /// `partner_name_2` que aparece em "Os noivos", não o nome da conta
  /// individual (`profiles.full_name`). Pedido explícito do utilizador:
  /// "devem mostrar o nome dos noivos e o icon deles, tal como o perfil
  /// deles".
  final String coupleDisplayName;

  /// `events.cover_photo_url` — mesma foto do "perfil" do casal
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
  final DateTime? eventDate;
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
    this.coupleId,
    this.coupleDisplayName = 'Organizadores',
    this.coupleAvatarUrl,
    required this.accountCreatedAt,
    this.eventDate,
    this.location,
    this.estimatedGuests,
  });

  factory Review.fromRow(Map<String, dynamic> row) {
    final event = row['events'] as Map<String, dynamic>?;
    final profile = row['profiles'] as Map<String, dynamic>?;
    final name1 = event?['partner_name_1'] as String?;
    final name2 = event?['partner_name_2'] as String?;
    final displayName = (name1 == null || name1.isEmpty)
        ? 'Organizadores'
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
      coupleId: row['couple_id'] as String?,
      coupleDisplayName: displayName,
      coupleAvatarUrl: event?['cover_photo_url'] as String?,
      accountCreatedAt: profile?['created_at'] == null
          ? DateTime.parse(row['created_at'] as String)
          : DateTime.parse(profile!['created_at'] as String),
      eventDate: event?['wedding_date'] == null
          ? null
          : DateTime.parse(event!['wedding_date'] as String),
      location: event?['location'] as String?,
      estimatedGuests: event?['estimated_guests'] as int?,
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

enum SupportTicketCategory { general, disputeDelay, bug }

extension SupportTicketCategoryLabel on SupportTicketCategory {
  String get label => switch (this) {
    SupportTicketCategory.general => 'Geral',
    SupportTicketCategory.disputeDelay => 'Disputa / atraso',
    SupportTicketCategory.bug => 'Erro na app',
  };

  String toDb() => switch (this) {
    SupportTicketCategory.general => 'general',
    SupportTicketCategory.disputeDelay => 'dispute_delay',
    SupportTicketCategory.bug => 'bug',
  };

  static SupportTicketCategory fromDb(String value) => switch (value) {
    'dispute_delay' => SupportTicketCategory.disputeDelay,
    'bug' => SupportTicketCategory.bug,
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
  final String eventId;
  final String partnerName;

  /// Para "Pedir nova proposta" depois de um cancelamento (2026-10-21).
  final String? partnerId;

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
  /// para abrir o pagamento na app (`create-payment-intent`).
  final String? pendingDepositPaymentId;
  final double? depositAmount;

  /// 190: «Como escolhem» — 'same' (o organizador escolhe para todos) ou
  /// 'each' (cada convidado escolhe o seu).
  final String choiceMode;

  /// Reserva com menus (restaurante ou catering) que o organizador escolhe:
  /// os menus escolhem-se no momento de pagar — «Escolher e pagar»
  /// (pedido do Rafael, 2026-11-21).
  bool get organizerChoosesMenus =>
      choiceMode != 'each' && (category == 'Restaurantes' || category == 'Catering');

  /// 191: sem sinal nesta categoria — o primeiro pagamento é o valor todo.
  bool get depositIsFull => amount > 0 && (depositAmount ?? 0) >= amount;

  /// Sem sinal (pagamento único): só se paga nos 6 dias antes do prazo,
  /// como o resto (migração 205). Com sinal, paga-se quando quiser.
  DateTime? get depositOpensAt =>
      depositIsFull ? pendingDepositDueAt?.toLocal().subtract(const Duration(days: 6)) : null;
  bool get depositOpen => depositOpensAt == null || !DateTime.now().isBefore(depositOpensAt!);

  /// Prazo do sinal pendente (`payments.due_at`) — para os "Pagamentos
  /// próximos" do menu.
  final DateTime? pendingDepositDueAt;

  /// Id do pedido de pagamento final (`payments.id`, tipo
  /// `final_payment`, estado `pending`) — criado automaticamente por
  /// `admin_complete_booking()` (`053_final_payment.sql`) assim que o
  /// serviço é marcado como concluído, quando sobra valor por cobrar
  /// além do sinal. `null` quando não há nenhum pagamento final por
  /// fazer (ainda não concluído, já pago, ou o sinal já cobria tudo).
  final String? pendingFinalPaymentId;
  final double? finalPaymentAmount;

  /// Prazo do restante (`payments.due_at`, migração 204): até N dias antes
  /// do evento (30 por defeito, o parceiro pode baixar até 1).
  final DateTime? finalPaymentDueAt;

  /// O restante só se paga nos 6 dias antes do prazo (fica cativo até ao
  /// prazo, dentro dos 7 dias que a Stripe deixa) — migração 204.
  DateTime? get finalPaymentOpensAt => finalPaymentDueAt?.subtract(const Duration(days: 6));
  bool get finalPaymentOpen => finalPaymentOpensAt == null || !DateTime.now().isBefore(finalPaymentOpensAt!);

  const CoupleBooking({
    required this.id,
    required this.eventId,
    required this.partnerName,
    this.partnerId,
    this.partnerLogoUrl,
    required this.category,
    required this.serviceDate,
    required this.amount,
    required this.status,
    this.pendingDepositPaymentId,
    this.depositAmount,
    this.choiceMode = 'same',
    this.pendingDepositDueAt,
    this.pendingFinalPaymentId,
    this.finalPaymentAmount,
    this.finalPaymentDueAt,
    this.paidAmount = 0,
    this.isPrivate = false,
  });

  /// Contratação em segredo (migração 116): só quem a fez a vê.
  final bool isPrivate;

  /// Total já pago na app (pagamentos `paid`, sem a comissão).
  final double paidAmount;

  /// O que ainda falta pagar ao parceiro (sem a comissão).
  double get remainingAmount => (amount - paidAmount).clamp(0, double.infinity);
}

/// Proposta real (`proposals`, `009_quotations_bookings.sql`) enviada por
/// um parceiro em resposta a um pedido de orçamento, ainda por aceitar
/// pelo casal — distinto de [CoupleBooking] porque ainda não existe
/// nenhuma linha em `bookings` (só passa a existir depois de
/// `accept_proposal()`). Ver `pendingProposalsProvider`,
/// `couple_bookings_screen.dart`.
class ReceivedProposal {
  final String id;
  final String eventId;
  final String partnerName;
  final String? partnerId;
  final String? category;
  final String title;
  final String? description;
  final double price;
  final double depositAmount;
  final DateTime? eventDate;

  /// Escolha do parceiro na proposta (migração 108): se o casal cancelar a
  /// tempo, recebe o sinal de volta.
  final bool depositRefundable;

  const ReceivedProposal({
    required this.id,
    required this.eventId,
    required this.partnerName,
    this.partnerId,
    required this.category,
    required this.title,
    this.description,
    required this.price,
    required this.depositAmount,
    this.eventDate,
    this.depositRefundable = true,
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
    this.attachmentUrl,
    this.attachmentType,
    this.attachmentName,
  });

  /// Anexo (foto, ficheiro, sticker ou GIF) — `105_chat_groups_attachments.sql`.
  final String? attachmentUrl;
  final String? attachmentType;
  final String? attachmentName;
  bool get hasAttachment => attachmentUrl != null;

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
  final String? eventId;
  final String? partnerId;
  final String? lastMessage;
  final DateTime? lastMessageAt;
  final int unreadCount;

  const ChatConversation({
    required this.id,
    required this.name,
    required this.avatarSeed,
    this.avatarUrl,
    this.eventId,
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
  final String eventId;
  final List<String> guestIds;

  /// Forma da mesa na planta (Lugares) — retangular ou redonda
  /// (default). Só visual, não afeta a lógica de preenchimento.
  final bool rectangular;

  /// Nome dado pelo organizador (101), ex: "Amigos da faculdade".
  /// `null` = "Mesa N".
  final String? name;

  /// Forma escolhida (101); `null` = a do tipo de mesa do espaço.
  final TableShape? shape;

  const SeatingTable({
    required this.id,
    required this.eventId,
    this.guestIds = const [],
    this.rectangular = false,
    this.name,
    this.shape,
  });

  SeatingTable copyWith({List<String>? guestIds}) {
    return SeatingTable(
      id: id,
      eventId: eventId,
      guestIds: guestIds ?? this.guestIds,
      rectangular: rectangular,
      name: name,
      shape: shape,
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
  final String eventId;
  final String title;
  final PartnerCategory? category;

  /// Categoria da empresa (`partner_categories.slug`, 2026-11-08); a
  /// [category] antiga (5 valores) vem dela quando há equivalente.
  final String? categorySlug;
  final double amount;
  final DateTime? dueDate;
  final bool paid;

  const Expense({
    required this.id,
    required this.eventId,
    required this.title,
    this.category,
    this.categorySlug,
    required this.amount,
    this.dueDate,
    this.paid = false,
  });

  Expense copyWith({bool? paid}) {
    return Expense(
      id: id,
      eventId: eventId,
      title: title,
      category: category,
      categorySlug: categorySlug,
      amount: amount,
      dueDate: dueDate,
      paid: paid ?? this.paid,
    );
  }
}

class Budget {
  final String eventId;
  final double total;
  final List<BudgetCategory> categories;

  const Budget({
    required this.eventId,
    required this.total,
    required this.categories,
  });

  double get spent => categories.fold(0, (sum, c) => sum + c.amount);

  double get remaining => total - spent;

  double get progress => total == 0 ? 0 : (spent / total).clamp(0, 1);
}
