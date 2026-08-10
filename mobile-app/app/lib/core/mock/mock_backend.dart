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

  final List<Profile> profiles = [];
  final List<Wedding> weddings = [];
  final List<Collaborator> collaboratorsByWedding = [];
  final List<Guest> guests = [];

  static const Duration _latency = Duration(milliseconds: 400);

  void _seed() {
    final demo = const Profile(
      id: 'demo-user',
      fullName: 'Ana Silva',
      email: 'ana@exemplo.com',
      password: 'teste1234',
      role: UserRole.couple,
      emailVerified: true,
      onboardingComplete: true,
    );
    profiles.add(demo);

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
      Collaborator(id: 'c1', name: 'Ana Silva', email: demo.email, status: CollaboratorStatus.owner),
      const Collaborator(id: 'c2', name: 'Miguel Costa', email: 'miguel@exemplo.com', status: CollaboratorStatus.active),
      const Collaborator(id: 'c3', name: 'Pedro Alves', email: 'pedro@exemplo.com', status: CollaboratorStatus.pending),
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
    final exists = profiles.any((p) => p.email.toLowerCase() == email.toLowerCase());
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

  Future<Profile> signIn({required String email, required String password}) async {
    await Future.delayed(_latency);
    final profile = profiles
        .where((p) => p.email.toLowerCase() == email.toLowerCase() && p.password == password)
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
      Collaborator(id: _nextId('collab'), name: partnerName1, email: '', status: CollaboratorStatus.owner),
    );

    final profileIndex = profiles.indexWhere((p) => p.id == ownerId);
    if (profileIndex != -1) {
      profiles[profileIndex] = profiles[profileIndex].copyWith(onboardingComplete: true);
    }
    return wedding;
  }

  Future<Wedding?> getWeddingForOwner(String ownerId) async {
    await Future.delayed(_latency ~/ 2);
    return weddings.where((w) => w.ownerId == ownerId).firstOrNull;
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

  Future<Collaborator> inviteCollaborator({required String weddingId, required String email}) async {
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
      rsvpStatus: guest.rsvpStatus,
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
}

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}
