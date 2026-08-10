enum UserRole { couple, supplier }

enum CeremonyType { civil, religious, both }

enum WeddingStatus { planning, completed }

enum RsvpStatus { pending, confirmed, declined }

enum WeddingSide { groom, bride, both }

enum CollaboratorStatus { owner, active, pending }

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

  Profile copyWith({
    bool? emailVerified,
    bool? onboardingComplete,
  }) {
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
  });

  String get displayNames =>
      partnerName2 == null || partnerName2!.isEmpty ? partnerName1 : '$partnerName1 & $partnerName2';

  Wedding copyWith({
    String? partnerName1,
    String? partnerName2,
    int? partner1Age,
    int? partner2Age,
    DateTime? weddingDate,
    String? location,
    String? venue,
    CeremonyType? ceremonyType,
    int? estimatedGuests,
    double? estimatedBudget,
    WeddingStatus? status,
  }) {
    return Wedding(
      id: id,
      ownerId: ownerId,
      partnerName1: partnerName1 ?? this.partnerName1,
      partnerName2: partnerName2 ?? this.partnerName2,
      partner1Age: partner1Age ?? this.partner1Age,
      partner2Age: partner2Age ?? this.partner2Age,
      weddingDate: weddingDate ?? this.weddingDate,
      location: location ?? this.location,
      venue: venue ?? this.venue,
      ceremonyType: ceremonyType ?? this.ceremonyType,
      estimatedGuests: estimatedGuests ?? this.estimatedGuests,
      estimatedBudget: estimatedBudget ?? this.estimatedBudget,
      status: status ?? this.status,
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
