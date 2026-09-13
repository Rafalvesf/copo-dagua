import '../models/models.dart';

class EmailAlreadyRegisteredException implements Exception {}

class InvalidCredentialsException implements Exception {}

class ProfileNotFoundException implements Exception {}

/// Fake in-memory "backend" — stands in for Supabase while there is no real
/// project connected yet. Shaped like the tables described in each module's
/// database.md so it can be swapped for real Supabase calls later.
class MockBackend {
  MockBackend._internal() {
    _seed();
  }

  static final MockBackend instance = MockBackend._internal();

  // Credenciais de demonstração — usadas tanto para semear as duas contas
  // seed abaixo como pelo botão "Trocar de conta" (ver auth_controller.dart),
  // que troca entre elas sem pedir password de novo.
  static const demoCoupleEmail = 'ana@exemplo.com';
  static const demoPartnerEmail = 'parceiro@exemplo.com';
  static const demoPassword = 'teste1234';

  final List<Profile> profiles = [];
  final List<Wedding> weddings = [];
  final List<Collaborator> collaboratorsByWedding = [];
  final List<Guest> guests = [];
  final List<ChatMessage> chatMessages = [];
  final List<ChatConversation> chatConversations = [];

  static const Duration _latency = Duration(milliseconds: 400);

  void _seed() {
    final demo = const Profile(
      id: 'demo-user',
      fullName: 'Sofia Silva',
      email: demoCoupleEmail,
      password: demoPassword,
      role: UserRole.couple,
      emailVerified: true,
      onboardingComplete: true,
    );
    profiles.add(demo);

    final demoPartner = const Profile(
      id: 'demo-partner',
      fullName: 'Miguel Fotografias',
      email: demoPartnerEmail,
      password: demoPassword,
      role: UserRole.partner,
      emailVerified: true,
      onboardingComplete: true,
      category: PartnerCategory.photography,
      businessDescription:
          'Conta aos casais um pouco sobre o teu negócio e o teu estilo.',
      location: 'Lisboa, Portugal',
      serviceAreas: ['Lisboa', 'Sintra', 'Cascais'],
      yearsExperience: 6,
      instagram: '@miguel.fotografias',
      phone: '+351 912 345 678',
      contactEmail: 'ola@miguel.fotografias.pt',
      acceptingRequests: true,
      travelsForEvents: true,
      maxTravelDistanceKm: 100,
    );
    profiles.add(demoPartner);

    final wedding = Wedding(
      id: 'demo-wedding',
      ownerId: demo.id,
      partnerName1: 'Sofia',
      partnerName2: 'André',
      partner1Age: 29,
      partner2Age: 31,
      weddingDate: DateTime.now().add(const Duration(days: 214)),
      location: 'Sintra, Portugal',
      venue: 'Quinta da Regaleira',
      ceremonyType: CeremonyType.both,
      estimatedGuests: 120,
      estimatedBudget: 25000,
      status: WeddingStatus.planning,
    );
    weddings.add(wedding);

    collaboratorsByWedding.addAll([
      Collaborator(
        id: 'c1',
        name: 'Sofia Silva',
        email: demo.email,
        status: CollaboratorStatus.owner,
      ),
      const Collaborator(
        id: 'c2',
        name: 'Miguel Costa',
        email: 'miguel@exemplo.com',
        status: CollaboratorStatus.active,
      ),
      const Collaborator(
        id: 'c3',
        name: 'Pedro Alves',
        email: 'pedro@exemplo.com',
        status: CollaboratorStatus.pending,
      ),
    ]);

    guests.addAll([
      Guest(
        id: 'g1',
        weddingId: wedding.id,
        name: 'Rita Almeida',
        email: 'rita@exemplo.com',
        group: 'Família noiva',
        side: WeddingSide.bride,
        plusOneAllowed: true,
        plusOneName: 'João',
        rsvpStatus: RsvpStatus.confirmed,
        dietaryRestrictions: 'Vegetariana',
        note: 'Mal posso esperar!',
      ),
      const Guest(
        id: 'g2',
        weddingId: 'demo-wedding',
        name: 'Carlos Ferreira',
        email: 'carlos@exemplo.com',
        group: 'Amigos',
        side: WeddingSide.groom,
        rsvpStatus: RsvpStatus.pending,
      ),
      const Guest(
        id: 'g3',
        weddingId: 'demo-wedding',
        name: 'Sofia Martins',
        phone: '912345678',
        group: 'Trabalho',
        side: WeddingSide.both,
        rsvpStatus: RsvpStatus.declined,
      ),
      const Guest(
        id: 'g4',
        weddingId: 'demo-wedding',
        name: 'Tiago Rocha',
        email: 'tiago@exemplo.com',
        group: 'Família noivo',
        side: WeddingSide.groom,
        plusOneAllowed: true,
        rsvpStatus: RsvpStatus.confirmed,
      ),
      const Guest(
        id: 'g5',
        weddingId: 'demo-wedding',
        name: 'Beatriz Nunes',
        email: 'beatriz@exemplo.com',
        group: 'Amigos',
        side: WeddingSide.bride,
        rsvpStatus: RsvpStatus.pending,
      ),
      const Guest(
        id: 'g6',
        weddingId: 'demo-wedding',
        name: 'Miguel Sousa',
        email: 'miguel.sousa@exemplo.com',
        group: 'Família noivo',
        side: WeddingSide.groom,
        rsvpStatus: RsvpStatus.confirmed,
      ),
      const Guest(
        id: 'g7',
        weddingId: 'demo-wedding',
        name: 'Inês Pereira',
        email: 'ines@exemplo.com',
        group: 'Amigos',
        side: WeddingSide.bride,
        rsvpStatus: RsvpStatus.confirmed,
      ),
      const Guest(
        id: 'g8',
        weddingId: 'demo-wedding',
        name: 'Duarte Costa',
        email: 'duarte@exemplo.com',
        group: 'Trabalho',
        side: WeddingSide.groom,
        rsvpStatus: RsvpStatus.confirmed,
      ),
      const Guest(
        id: 'g9',
        weddingId: 'demo-wedding',
        name: 'Marta Lopes',
        email: 'marta@exemplo.com',
        group: 'Família noiva',
        side: WeddingSide.bride,
        rsvpStatus: RsvpStatus.confirmed,
      ),
      const Guest(
        id: 'g10',
        weddingId: 'demo-wedding',
        name: 'André Ramos',
        email: 'andre@exemplo.com',
        group: 'Amigos',
        side: WeddingSide.groom,
        rsvpStatus: RsvpStatus.pending,
      ),
    ]);

    final now = DateTime.now();
    chatMessages.addAll([
      ChatMessage(
        id: 'msg1',
        partnerId: demoPartner.id,
        fromPartner: false,
        text: 'Olá! Vimos o vosso portefólio e adorámos, queríamos avançar.',
        sentAt: now.subtract(const Duration(days: 2, hours: 3)),
      ),
      ChatMessage(
        id: 'msg2',
        partnerId: demoPartner.id,
        fromPartner: true,
        text: 'Que bom, Sofia! Fico já a preparar o contrato para vos enviar aqui.',
        sentAt: now.subtract(const Duration(days: 2, hours: 2)),
      ),
      // Conversas com o cortejo (madrinha/padrinho) — não têm parceiro no
      // backend mock, por isso reutilizam o mesmo `chatMessages`/`partnerId`
      // como chave arbitrária da conversa (ver `listMessages`).
      ChatMessage(
        id: 'msg-party1',
        partnerId: 'party-marta',
        fromPartner: true,
        text: 'Já comprei o vestido! 💚',
        sentAt: now.subtract(const Duration(days: 1, hours: 5)),
      ),
      ChatMessage(
        id: 'msg-party2',
        partnerId: 'party-tiago',
        fromPartner: true,
        text: 'Entendido. Até já',
        sentAt: now.subtract(const Duration(days: 1, hours: 2)),
      ),
      // Conversas com parceiros já contratados/contactados fora do fio
      // único do `demoPartner` — seed mínimo para as threads do Chat
      // não abrirem vazias.
      ChatMessage(
        id: 'msg-photo1',
        partnerId: 'sup-photo-1',
        fromPartner: false,
        text: 'Olá! Vimos o vosso portefólio e adorámos, queríamos avançar.',
        sentAt: now.subtract(const Duration(hours: 5)),
      ),
      ChatMessage(
        id: 'msg-photo2',
        partnerId: 'sup-photo-1',
        fromPartner: true,
        text: 'Perfeito! Obrigado 🙏',
        sentAt: now.subtract(const Duration(hours: 3)),
      ),
      ChatMessage(
        id: 'msg-decor1',
        partnerId: 'sup-decor-1',
        fromPartner: true,
        text: 'Enviei algumas ideias de decoração ✨',
        sentAt: now.subtract(const Duration(days: 1)),
      ),
      ChatMessage(
        id: 'msg-music1',
        partnerId: 'sup-music-1',
        fromPartner: true,
        text: 'Vamos confirmar a lista de músicas!',
        sentAt: now.subtract(const Duration(days: 3)),
      ),
    ]);

    chatConversations.addAll([
      ChatConversation(
        id: 'sup-photo-1',
        name: 'Instantes Photography',
        avatarSeed: 'sup-photo-1',
        partnerId: 'sup-photo-1',
        lastMessage: 'Perfeito! Obrigado 🙏',
        lastMessageAt: now.subtract(const Duration(hours: 3)),
        unreadCount: 1,
      ),
      ChatConversation(
        id: 'sup-decor-1',
        name: 'Flores & Cia',
        avatarSeed: 'sup-decor-1',
        partnerId: 'sup-decor-1',
        lastMessage: 'Enviei algumas ideias de decoração ✨',
        lastMessageAt: now.subtract(const Duration(days: 1)),
      ),
      ChatConversation(
        id: 'party-marta',
        name: 'Marta (Madrinha)',
        avatarSeed: 'marta-madrinha',
        lastMessage: 'Já comprei o vestido! 💚',
        lastMessageAt: now.subtract(const Duration(days: 1, hours: 5)),
        unreadCount: 2,
      ),
      ChatConversation(
        id: 'party-tiago',
        name: 'Tiago (Padrinho)',
        avatarSeed: 'tiago-padrinho',
        lastMessage: 'Entendido. Até já',
        lastMessageAt: now.subtract(const Duration(days: 1, hours: 2)),
      ),
      ChatConversation(
        id: 'sup-music-1',
        name: 'DJ Nuno Beats',
        avatarSeed: 'sup-music-1',
        partnerId: 'sup-music-1',
        lastMessage: 'Vamos confirmar a lista de músicas!',
        lastMessageAt: now.subtract(const Duration(days: 3)),
      ),
      // Conversas dos clientes do `demoPartner` — reutilizam o `id` como
      // chave arbitrária de thread em `chatMessages` (mesmo padrão do
      // cortejo acima), já que o parceiro fala com vários casais e não
      // só com o `demoPartner.id` (que é a sua própria conta).
      ChatConversation(
        id: 'client-mariana-pedro',
        name: 'Mariana & Pedro',
        avatarSeed: 'client-mariana-pedro',
        lastMessage: 'Olá! Podemos agendar uma reunião?',
        lastMessageAt: now.subtract(const Duration(hours: 14)),
        unreadCount: 2,
      ),
      ChatConversation(
        id: 'client-ines-joao',
        name: 'Inês & João',
        avatarSeed: 'client-ines-joao',
        lastMessage: 'Obrigada! Ficamos aguardar.',
        lastMessageAt: now.subtract(const Duration(days: 1)),
      ),
      ChatConversation(
        id: 'client-beatriz-marco',
        name: 'Beatriz & Marco',
        avatarSeed: 'client-beatriz-marco',
        lastMessage: 'Perfeito, muito obrigado!',
        lastMessageAt: now.subtract(const Duration(days: 2)),
      ),
      ChatConversation(
        id: 'client-catarina-luis',
        name: 'Catarina & Luís',
        avatarSeed: 'client-catarina-luis',
        lastMessage: 'Enviar-te-ei o contrato.',
        lastMessageAt: now.subtract(const Duration(days: 3)),
      ),
    ]);

    chatMessages.addAll([
      ChatMessage(
        id: 'msg-cli-mp1',
        partnerId: 'client-mariana-pedro',
        fromPartner: false,
        text: 'Olá! Podemos agendar uma reunião?',
        sentAt: now.subtract(const Duration(hours: 14)),
      ),
      ChatMessage(
        id: 'msg-cli-ij1',
        partnerId: 'client-ines-joao',
        fromPartner: false,
        text: 'Obrigada! Ficamos aguardar.',
        sentAt: now.subtract(const Duration(days: 1)),
      ),
      ChatMessage(
        id: 'msg-cli-bm1',
        partnerId: 'client-beatriz-marco',
        fromPartner: false,
        text: 'Perfeito, muito obrigado!',
        sentAt: now.subtract(const Duration(days: 2)),
      ),
      ChatMessage(
        id: 'msg-cli-cl1',
        partnerId: 'client-catarina-luis',
        fromPartner: false,
        text: 'Enviar-te-ei o contrato.',
        sentAt: now.subtract(const Duration(days: 3)),
      ),
    ]);

  }

  int _idCounter = 100;
  String _nextId(String prefix) => '$prefix-${_idCounter++}';

  Future<Profile> signUp({
    required String fullName,
    required String email,
    required String password,
    required UserRole role,
  }) async {
    await Future.delayed(_latency);
    final exists = profiles.any(
      (p) => p.email.toLowerCase() == email.toLowerCase(),
    );
    if (exists) throw EmailAlreadyRegisteredException();
    final profile = Profile(
      id: _nextId('user'),
      fullName: fullName,
      email: email,
      password: password,
      role: role,
    );
    profiles.add(profile);
    return profile;
  }

  Future<Profile> signIn({
    required String email,
    required String password,
  }) async {
    await Future.delayed(_latency);
    final profile = profiles
        .where(
          (p) =>
              p.email.toLowerCase() == email.toLowerCase() &&
              p.password == password,
        )
        .firstOrNull;
    if (profile == null) throw InvalidCredentialsException();
    return profile;
  }

  Future<void> requestPasswordReset(String email) async {
    await Future.delayed(_latency);
  }

  Profile getProfile(String profileId) {
    return profiles.firstWhere((p) => p.id == profileId);
  }

  Future<Profile> updateBusinessInfo(
    String profileId, {
    String? fullName,
    String? businessDescription,
    String? website,
    String? instagram,
    String? phone,
    String? contactEmail,
    bool? acceptingRequests,
    bool? travelsForEvents,
  }) async {
    await Future.delayed(_latency);
    final index = profiles.indexWhere((p) => p.id == profileId);
    final updated = profiles[index].copyWith(
      fullName: fullName,
      businessDescription: businessDescription,
      website: website,
      instagram: instagram,
      phone: phone,
      contactEmail: contactEmail,
      acceptingRequests: acceptingRequests,
      travelsForEvents: travelsForEvents,
    );
    profiles[index] = updated;
    return updated;
  }

  Future<Profile> markEmailVerified(String profileId) async {
    await Future.delayed(_latency ~/ 2);
    final index = profiles.indexWhere((p) => p.id == profileId);
    if (index == -1) throw ProfileNotFoundException();
    final updated = profiles[index].copyWith(emailVerified: true);
    profiles[index] = updated;
    return updated;
  }

  // O wizard completo de perfil de parceiro (categorias, portefólio, dados
  // fiscais — ver partner-app/profile/) ainda não está implementado nesta
  // app; isto so desbloqueia a conta para entrar na área do parceiro.
  Future<Profile> completePartnerOnboarding(String profileId) async {
    await Future.delayed(_latency ~/ 2);
    final index = profiles.indexWhere((p) => p.id == profileId);
    if (index == -1) throw ProfileNotFoundException();
    final updated = profiles[index].copyWith(onboardingComplete: true);
    profiles[index] = updated;
    return updated;
  }

  Future<Wedding> createWedding({
    required String ownerId,
    required String partnerName1,
    String? partnerName2,
    int? partner1Age,
    int? partner2Age,
    DateTime? weddingDate,
    String? location,
    int? estimatedGuests,
    double? estimatedBudget,
  }) async {
    await Future.delayed(_latency);
    final wedding = Wedding(
      id: _nextId('wedding'),
      ownerId: ownerId,
      partnerName1: partnerName1,
      partnerName2: partnerName2,
      partner1Age: partner1Age,
      partner2Age: partner2Age,
      weddingDate: weddingDate,
      location: location,
      estimatedGuests: estimatedGuests,
      estimatedBudget: estimatedBudget,
    );
    weddings.add(wedding);
    collaboratorsByWedding.add(
      Collaborator(
        id: _nextId('collab'),
        name: partnerName1,
        email: '',
        status: CollaboratorStatus.owner,
      ),
    );

    final profileIndex = profiles.indexWhere((p) => p.id == ownerId);
    if (profileIndex != -1) {
      profiles[profileIndex] = profiles[profileIndex].copyWith(
        onboardingComplete: true,
      );
    }
    return wedding;
  }

  Future<Wedding?> getWeddingForOwner(String ownerId) async {
    await Future.delayed(_latency ~/ 2);
    return weddings.where((w) => w.ownerId == ownerId).firstOrNull;
  }

  Future<Wedding?> getWeddingBySlug(String slug) async {
    await Future.delayed(_latency ~/ 2);
    return weddings.where((w) => w.inviteSlug == slug).firstOrNull;
  }

  Future<Wedding> updateWedding(Wedding wedding) async {
    await Future.delayed(_latency);
    final index = weddings.indexWhere((w) => w.id == wedding.id);
    if (index != -1) weddings[index] = wedding;
    return wedding;
  }

  Future<List<Collaborator>> listCollaborators(String weddingId) async {
    await Future.delayed(_latency ~/ 2);
    return List.unmodifiable(collaboratorsByWedding);
  }

  Future<Collaborator> inviteCollaborator({
    required String weddingId,
    required String email,
  }) async {
    await Future.delayed(_latency);
    final invite = Collaborator(
      id: _nextId('collab'),
      name: email.split('@').first,
      email: email,
      status: CollaboratorStatus.pending,
    );
    collaboratorsByWedding.add(invite);
    return invite;
  }

  Future<List<Guest>> listGuests(String weddingId) async {
    await Future.delayed(_latency ~/ 2);
    return guests.where((g) => g.weddingId == weddingId).toList();
  }

  Future<Guest> addGuest(Guest guest) async {
    await Future.delayed(_latency);
    final withId = Guest(
      id: _nextId('guest'),
      weddingId: guest.weddingId,
      name: guest.name,
      email: guest.email,
      phone: guest.phone,
      group: guest.group,
      side: guest.side,
      plusOneAllowed: guest.plusOneAllowed,
      plusOneName: guest.plusOneName,
      rsvpStatus: guest.rsvpStatus,
      dietaryRestrictions: guest.dietaryRestrictions,
      note: guest.note,
    );
    guests.add(withId);
    return withId;
  }

  Future<Guest> updateGuest(Guest guest) async {
    await Future.delayed(_latency);
    final index = guests.indexWhere((g) => g.id == guest.id);
    if (index != -1) guests[index] = guest;
    return guest;
  }

  Future<void> removeGuest(String guestId) async {
    await Future.delayed(_latency ~/ 2);
    guests.removeWhere((g) => g.id == guestId);
  }

  Future<List<ChatMessage>> listMessages(String partnerId) async {
    await Future.delayed(_latency ~/ 2);
    final messages = chatMessages.where((m) => m.partnerId == partnerId).toList()
      ..sort((a, b) => a.sentAt.compareTo(b.sentAt));
    return messages;
  }

  Future<ChatMessage> sendMessage({
    required String partnerId,
    required bool fromPartner,
    String? text,
    String? contractTitle,
  }) async {
    await Future.delayed(_latency);
    final message = ChatMessage(
      id: _nextId('msg'),
      partnerId: partnerId,
      fromPartner: fromPartner,
      text: text,
      contractTitle: contractTitle,
      sentAt: DateTime.now(),
    );
    chatMessages.add(message);
    return message;
  }

  /// Números agregados fixos de referência para o período — mock só
  /// visual, não derivado de outros dados semeados.
  PartnerStats getPartnerStats(String partnerId, {String period = 'Este mês'}) {
    return const PartnerStats(
      views: 152,
      viewsDeltaPct: 24,
      requestCount: 38,
      requestDeltaPct: 18,
      conversionPct: 25,
      conversionDeltaPct: 6,
      avgRating: 4.8,
      avgRatingDelta: 0.2,
      revenue: 3250,
      revenueDeltaPct: 14,
      viewsTrend: [40, 55, 48, 70, 65, 90, 85, 110, 100, 130, 120, 152],
    );
  }

}

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}
