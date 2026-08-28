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
  final List<ChecklistItem> checklistItems = [];
  final List<Partner> partners = [];
  final List<Budget> budgets = [];
  final List<SeatingTable> seatingTables = [];
  final List<ChatMessage> chatMessages = [];
  final List<Expense> expenses = [];
  final List<ChatConversation> chatConversations = [];

  static const Duration _latency = Duration(milliseconds: 400);

  void _seed() {
    final demo = const Profile(
      id: 'demo-user',
      fullName: 'Ana Silva',
      email: demoCoupleEmail,
      password: demoPassword,
      role: UserRole.couple,
      emailVerified: true,
      onboardingComplete: true,
    );
    profiles.add(demo);

    final demoPartner = const Profile(
      id: 'demo-partner',
      fullName: 'Miguel Fotografia',
      email: demoPartnerEmail,
      password: demoPassword,
      role: UserRole.partner,
      emailVerified: true,
      onboardingComplete: true,
    );
    profiles.add(demoPartner);

    final wedding = Wedding(
      id: 'demo-wedding',
      ownerId: demo.id,
      partnerName1: 'Ana',
      partnerName2: 'Miguel',
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
        name: 'Ana Silva',
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

    // Mesa 1 completa (8/8, aparece com ✓); mesa 2 é a "próxima", já
    // com um rascunho de 2 convidados guardado (mostra "2/8") — dá para
    // ver os três estados da matriz (✓, próxima em progresso, bloqueada)
    // já ao abrir o ecrã.
    seatingTables.addAll(const [
      SeatingTable(
        id: 'table-1',
        weddingId: 'demo-wedding',
        guestIds: ['g1', 'g2', 'g3', 'g4', 'g5', 'g6', 'g7', 'g8'],
      ),
      SeatingTable(
        id: 'table-2',
        weddingId: 'demo-wedding',
        guestIds: ['g9', 'g10'],
        rectangular: true,
      ),
    ]);

    partners.addAll(const [
      Partner(
        id: 'sup-photo-1',
        name: 'Instantes Photography',
        category: PartnerCategory.photography,
        city: 'Lisboa',
        rating: 4.9,
        reviewCount: 132,
        startingPrice: 1200,
        description:
            'Fotografia documental de casamentos, com edição incluída e entrega em 4 semanas.',
        imageUrl: 'https://picsum.photos/seed/sup-photo-1/900/700',
      ),
      Partner(
        id: 'sup-photo-2',
        name: 'Luz & Sombra Studio',
        category: PartnerCategory.photography,
        city: 'Sintra',
        rating: 4.7,
        reviewCount: 84,
        startingPrice: 950,
        description:
            'Estilo clássico e atemporal, especialistas em luz natural.',
        imageUrl: 'https://picsum.photos/seed/sup-photo-2/900/700',
      ),
      Partner(
        id: 'sup-catering-1',
        name: 'Sabores & Cia',
        category: PartnerCategory.catering,
        city: 'Sintra',
        rating: 4.8,
        reviewCount: 201,
        startingPrice: 45,
        description:
            'Catering português contemporâneo, menus personalizáveis por pessoa.',
        imageUrl: 'https://picsum.photos/seed/sup-catering-1/900/700',
      ),
      Partner(
        id: 'sup-catering-2',
        name: 'Quinta do Paladar',
        category: PartnerCategory.catering,
        city: 'Lisboa',
        rating: 4.6,
        reviewCount: 97,
        startingPrice: 38,
        description:
            'Buffet e serviço à mesa, opções vegetarianas e sem glúten incluídas.',
        imageUrl: 'https://picsum.photos/seed/sup-catering-2/900/700',
      ),
      Partner(
        id: 'sup-music-1',
        name: 'DJ Nuno Beats',
        category: PartnerCategory.music,
        city: 'Cascais',
        rating: 4.9,
        reviewCount: 156,
        startingPrice: 600,
        description:
            'DJ com mais de 10 anos de casamentos, equipamento de som e luz incluído.',
        imageUrl: 'https://picsum.photos/seed/sup-music-1/900/700',
      ),
      Partner(
        id: 'sup-music-2',
        name: 'Quarteto Harmonia',
        category: PartnerCategory.music,
        city: 'Lisboa',
        rating: 4.8,
        reviewCount: 63,
        startingPrice: 800,
        description:
            'Quarteto de cordas para cerimónia, repertório clássico e contemporâneo.',
        imageUrl: 'https://picsum.photos/seed/sup-music-2/900/700',
      ),
      Partner(
        id: 'sup-decor-1',
        name: 'Flores & Cia',
        category: PartnerCategory.decoration,
        city: 'Sintra',
        rating: 4.7,
        reviewCount: 74,
        startingPrice: 500,
        description:
            'Decoração floral completa — cerimónia, mesa de honra e centros de mesa.',
        imageUrl: 'https://picsum.photos/seed/sup-decor-1/900/700',
      ),
      Partner(
        id: 'sup-decor-2',
        name: 'Decor Elegance',
        category: PartnerCategory.decoration,
        city: 'Oeiras',
        rating: 4.5,
        reviewCount: 41,
        startingPrice: 650,
        description:
            'Cenografia e iluminação decorativa para cerimónia e receção.',
        imageUrl: 'https://picsum.photos/seed/sup-decor-2/900/700',
      ),
    ]);

    budgets.add(
      Budget(
        weddingId: wedding.id,
        total: wedding.estimatedBudget ?? 25000,
        categories: const [
          BudgetCategory(
            name: 'Quinta',
            amount: 6000,
            allocated: 8500,
            partnerCategory: PartnerCategory.venue,
          ),
          BudgetCategory(
            name: 'Fotografia',
            amount: 1000,
            allocated: 1250,
            partnerCategory: PartnerCategory.photography,
          ),
          BudgetCategory(
            name: 'Catering',
            amount: 2800,
            allocated: 4500,
            partnerCategory: PartnerCategory.catering,
          ),
          BudgetCategory(
            name: 'Decoração',
            amount: 1500,
            allocated: 2730,
            partnerCategory: PartnerCategory.decoration,
          ),
          BudgetCategory(
            name: 'Música',
            amount: 1000,
            allocated: 1000,
            partnerCategory: PartnerCategory.music,
          ),
          BudgetCategory(name: 'Vestido e fato', amount: 800, allocated: 1100),
          BudgetCategory(name: 'Outros', amount: 1200, allocated: 1500),
        ],
      ),
    );

    final now = DateTime.now();
    checklistItems.addAll([
      ChecklistItem(
        id: 'cl1',
        weddingId: wedding.id,
        title: 'Reservar o local da cerimónia',
        category: 'Local & Data',
        done: true,
      ),
      ChecklistItem(
        id: 'cl2',
        weddingId: wedding.id,
        title: 'Reservar o local da receção',
        category: 'Local & Data',
        done: true,
      ),
      ChecklistItem(
        id: 'cl3',
        weddingId: wedding.id,
        title: 'Escolher e contratar fotógrafo',
        category: 'Parceiros',
        done: true,
        partnerCategory: PartnerCategory.photography,
        selectedPartnerId: 'sup-photo-1',
      ),
      ChecklistItem(
        id: 'cl4',
        weddingId: wedding.id,
        title: 'Escolher catering e provar o menu',
        category: 'Parceiros',
        dueDate: now.add(const Duration(days: 30)),
        partnerCategory: PartnerCategory.catering,
        progressPercent: 50,
        assigneeSeeds: const ['ana', 'miguel'],
      ),
      ChecklistItem(
        id: 'cl5',
        weddingId: wedding.id,
        title: 'Contratar música/DJ',
        category: 'Parceiros',
        dueDate: now.add(const Duration(days: 45)),
        partnerCategory: PartnerCategory.music,
        assigneeSeeds: const ['ana'],
      ),
      ChecklistItem(
        id: 'cl11',
        weddingId: wedding.id,
        title: 'Escolher decoração floral',
        category: 'Parceiros',
        dueDate: now.add(const Duration(days: 100)),
        partnerCategory: PartnerCategory.decoration,
        progressPercent: 30,
        assigneeSeeds: const ['ana', 'miguel'],
      ),
      ChecklistItem(
        id: 'cl6',
        weddingId: wedding.id,
        title: 'Enviar convites digitais',
        category: 'Convidados',
        dueDate: now.add(const Duration(days: 60)),
        assigneeSeeds: const ['ana', 'miguel'],
      ),
      ChecklistItem(
        id: 'cl7',
        weddingId: wedding.id,
        title: 'Fechar lista final de convidados',
        category: 'Convidados',
        dueDate: now.add(const Duration(days: 90)),
      ),
      ChecklistItem(
        id: 'cl8',
        weddingId: wedding.id,
        title: 'Comprar o vestido/fato',
        category: 'Vestuário',
        dueDate: now.add(const Duration(days: 120)),
        assigneeSeeds: const ['ana'],
      ),
      ChecklistItem(
        id: 'cl9',
        weddingId: wedding.id,
        title: 'Tratar da papelada legal do casamento',
        category: 'Legal',
        dueDate: now.add(const Duration(days: 150)),
      ),
      ChecklistItem(
        id: 'cl10',
        weddingId: wedding.id,
        title: 'Confirmar cronograma do dia com todos os parceiros',
        category: 'No dia',
        dueDate: now.add(const Duration(days: 210)),
      ),
    ]);

    expenses.addAll([
      Expense(
        id: 'exp1',
        weddingId: wedding.id,
        title: 'Sinal da quinta',
        category: PartnerCategory.venue,
        amount: 2000,
        dueDate: now.add(const Duration(days: 16)),
      ),
      Expense(
        id: 'exp2',
        weddingId: wedding.id,
        title: 'Última prestação fotografia',
        category: PartnerCategory.photography,
        amount: 800,
        dueDate: now.add(const Duration(days: 42)),
      ),
      Expense(
        id: 'exp3',
        weddingId: wedding.id,
        title: 'DJ / Banda',
        category: PartnerCategory.music,
        amount: 1000,
        dueDate: now.add(const Duration(days: 67)),
      ),
      Expense(
        id: 'exp4',
        weddingId: wedding.id,
        title: 'Reserva da quinta',
        category: PartnerCategory.venue,
        amount: 4200,
        dueDate: now.subtract(const Duration(days: 30)),
        paid: true,
      ),
      Expense(
        id: 'exp5',
        weddingId: wedding.id,
        title: 'Sinal fotografia',
        category: PartnerCategory.photography,
        amount: 400,
        dueDate: now.subtract(const Duration(days: 45)),
        paid: true,
      ),
      Expense(
        id: 'exp6',
        weddingId: wedding.id,
        title: 'Prova de menu',
        category: PartnerCategory.catering,
        amount: 180,
        dueDate: now.subtract(const Duration(days: 12)),
        paid: true,
      ),
      Expense(
        id: 'exp7',
        weddingId: wedding.id,
        title: 'Sinal catering',
        category: PartnerCategory.catering,
        amount: 1400,
        dueDate: now.add(const Duration(days: 20)),
      ),
      Expense(
        id: 'exp8',
        weddingId: wedding.id,
        title: 'Flores da cerimónia',
        category: PartnerCategory.decoration,
        amount: 500,
        dueDate: now.subtract(const Duration(days: 5)),
        paid: true,
      ),
      Expense(
        id: 'exp9',
        weddingId: wedding.id,
        title: 'Centros de mesa',
        category: PartnerCategory.decoration,
        amount: 300,
        dueDate: now.subtract(const Duration(days: 3)),
        paid: true,
      ),
      Expense(
        id: 'exp10',
        weddingId: wedding.id,
        title: 'Vestido de noiva',
        amount: 800,
        dueDate: now.subtract(const Duration(days: 60)),
        paid: true,
      ),
      Expense(
        id: 'exp11',
        weddingId: wedding.id,
        title: 'Convites impressos',
        amount: 220,
        dueDate: now.add(const Duration(days: 8)),
      ),
      Expense(
        id: 'exp12',
        weddingId: wedding.id,
        title: 'Alianças',
        amount: 980,
        dueDate: now.add(const Duration(days: 90)),
      ),
    ]);

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
        text: 'Que bom, Ana! Fico já a preparar o contrato para vos enviar aqui.',
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

  Future<List<ChecklistItem>> listChecklistItems(String weddingId) async {
    await Future.delayed(_latency ~/ 2);
    return checklistItems.where((c) => c.weddingId == weddingId).toList();
  }

  Future<ChecklistItem> addChecklistItem(ChecklistItem item) async {
    await Future.delayed(_latency);
    final withId = ChecklistItem(
      id: _nextId('checklist'),
      weddingId: item.weddingId,
      title: item.title,
      category: item.category,
      dueDate: item.dueDate,
      partnerCategory: item.partnerCategory,
      selectedPartnerId: item.selectedPartnerId,
      progressPercent: item.progressPercent,
      assigneeSeeds: item.assigneeSeeds,
    );
    checklistItems.add(withId);
    return withId;
  }

  Future<ChecklistItem> updateChecklistItem(ChecklistItem item) async {
    await Future.delayed(_latency ~/ 2);
    final index = checklistItems.indexWhere((c) => c.id == item.id);
    if (index != -1) checklistItems[index] = item;
    return item;
  }

  Future<void> removeChecklistItem(String itemId) async {
    await Future.delayed(_latency ~/ 2);
    checklistItems.removeWhere((c) => c.id == itemId);
  }

  Future<List<Partner>> listPartners({PartnerCategory? category}) async {
    await Future.delayed(_latency ~/ 2);
    if (category == null) return List.unmodifiable(partners);
    return partners.where((s) => s.category == category).toList();
  }

  Partner getPartner(String partnerId) {
    return partners.firstWhere((s) => s.id == partnerId);
  }

  Future<Budget> getBudget(String weddingId) async {
    await Future.delayed(_latency ~/ 2);
    return budgets.firstWhere((b) => b.weddingId == weddingId);
  }

  Future<Budget> updateBudgetTotal(String weddingId, double total) async {
    await Future.delayed(_latency);
    final index = budgets.indexWhere((b) => b.weddingId == weddingId);
    final updated = Budget(
      weddingId: weddingId,
      total: total,
      categories: budgets[index].categories,
    );
    budgets[index] = updated;
    return updated;
  }

  Future<List<SeatingTable>> listSeatingTables(String weddingId) async {
    await Future.delayed(_latency ~/ 2);
    return seatingTables.where((t) => t.weddingId == weddingId).toList();
  }

  Future<SeatingTable> addSeatingTable({
    required String weddingId,
    required List<String> guestIds,
  }) async {
    await Future.delayed(_latency);
    final table = SeatingTable(
      id: _nextId('table'),
      weddingId: weddingId,
      guestIds: guestIds,
    );
    seatingTables.add(table);
    return table;
  }

  Future<SeatingTable> updateSeatingTable(SeatingTable table) async {
    await Future.delayed(_latency);
    final index = seatingTables.indexWhere((t) => t.id == table.id);
    if (index != -1) seatingTables[index] = table;
    return table;
  }

  Future<void> removeSeatingTable(String tableId) async {
    await Future.delayed(_latency ~/ 2);
    seatingTables.removeWhere((t) => t.id == tableId);
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

  Future<List<Expense>> listExpenses(String weddingId) async {
    await Future.delayed(_latency ~/ 2);
    return expenses.where((e) => e.weddingId == weddingId).toList();
  }

  Future<Expense> addExpense(Expense expense) async {
    await Future.delayed(_latency);
    final withId = Expense(
      id: _nextId('expense'),
      weddingId: expense.weddingId,
      title: expense.title,
      category: expense.category,
      amount: expense.amount,
      dueDate: expense.dueDate,
      paid: expense.paid,
    );
    expenses.add(withId);
    return withId;
  }

  Future<Expense> updateExpense(Expense expense) async {
    await Future.delayed(_latency ~/ 2);
    final index = expenses.indexWhere((e) => e.id == expense.id);
    if (index != -1) expenses[index] = expense;
    return expense;
  }

  Future<List<ChatConversation>> listChatConversations() async {
    await Future.delayed(_latency ~/ 2);
    final list = List<ChatConversation>.from(chatConversations)
      ..sort((a, b) => b.lastMessageAt.compareTo(a.lastMessageAt));
    return list;
  }
}

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}
