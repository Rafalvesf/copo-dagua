/// Sentinel para distinguir "parâmetro omitido" de "parâmetro passado como
/// null" em copyWith — necessário para campos int? que precisam de poder
/// ser limpos explicitamente (ex: idade), ao contrário de String? onde uma
/// string vazia já serve esse propósito sem ambiguidade.
class _Unset {
  const _Unset();
}

const _unset = _Unset();

enum UserRole { couple, supplier }

enum CeremonyType { civil, religious, both }

enum WeddingStatus { planning, completed }

enum RsvpStatus { pending, confirmed, declined }

enum WeddingSide { groom, bride, both }

enum CollaboratorStatus { owner, active, pending }

enum SupplierCategory { catering, photography, music, decoration, venue }

extension SupplierCategoryLabel on SupplierCategory {
  String get label => switch (this) {
        SupplierCategory.catering => 'Catering',
        SupplierCategory.photography => 'Fotografia',
        SupplierCategory.music => 'Música & DJ',
        SupplierCategory.decoration => 'Decoração',
        SupplierCategory.venue => 'Espaços',
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
    Object? partner1Age = _unset,
    Object? partner2Age = _unset,
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
      partner1Age: identical(partner1Age, _unset) ? this.partner1Age : partner1Age as int?,
      partner2Age: identical(partner2Age, _unset) ? this.partner2Age : partner2Age as int?,
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

class ChecklistItem {
  final String id;
  final String weddingId;
  final String title;
  final String category;
  final bool done;
  final DateTime? dueDate;
  final SupplierCategory? supplierCategory;
  final String? selectedSupplierId;

  const ChecklistItem({
    required this.id,
    required this.weddingId,
    required this.title,
    this.category = 'Geral',
    this.done = false,
    this.dueDate,
    this.supplierCategory,
    this.selectedSupplierId,
  });

  ChecklistItem copyWith({
    String? title,
    String? category,
    bool? done,
    DateTime? dueDate,
    Object? selectedSupplierId = _unset,
  }) {
    return ChecklistItem(
      id: id,
      weddingId: weddingId,
      title: title ?? this.title,
      category: category ?? this.category,
      done: done ?? this.done,
      dueDate: dueDate ?? this.dueDate,
      supplierCategory: supplierCategory,
      selectedSupplierId:
          identical(selectedSupplierId, _unset) ? this.selectedSupplierId : selectedSupplierId as String?,
    );
  }
}

class Supplier {
  final String id;
  final String name;
  final SupplierCategory category;
  final String city;
  final double rating;
  final int reviewCount;
  final double startingPrice;
  final String description;

  const Supplier({
    required this.id,
    required this.name,
    required this.category,
    required this.city,
    required this.rating,
    required this.reviewCount,
    required this.startingPrice,
    required this.description,
  });
}
