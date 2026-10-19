// Capturas de todos os ecrãs da app (casal, parceiro, convidado) com
// dados de exemplo, num ecrã de telemóvel 390×844. Não faz parte da
// suite normal: só corre com
//
//   flutter test --update-goldens --tags screenshots test/screenshots
//
// (workflow `app-screenshots.yml`), e as imagens saem como artefacto do
// GitHub Actions. Serve para rever o design de ponta a ponta sem
// precisar de contas reais nem de browser.
@Tags(['screenshots'])
library;

import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_riverpod/misc.dart' show Override;
import 'package:flutter_test/flutter_test.dart';
import 'package:go_router/go_router.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show Supabase, FlutterAuthClientOptions;

import 'package:copo_dagua_app/core/auth/auth_controller.dart';
import 'package:copo_dagua_app/core/budget/budget_controller.dart';
import 'package:copo_dagua_app/core/budget/expense_controller.dart';
import 'package:copo_dagua_app/core/chat/chat_list_controller.dart';
import 'package:copo_dagua_app/core/chat/chat_thread_controller.dart';
import 'package:copo_dagua_app/core/chat/partner_chat_thread_controller.dart';
import 'package:copo_dagua_app/core/checklist/checklist_controller.dart';
import 'package:copo_dagua_app/core/gallery/gallery_providers.dart';
import 'package:copo_dagua_app/core/gallery/gallery_social.dart';
import 'package:copo_dagua_app/features/gallery/widgets/gallery_social_ui.dart';
import 'package:copo_dagua_app/core/guest_home/guest_home_providers.dart';
import 'package:copo_dagua_app/core/guests/guest_controller.dart';
import 'package:copo_dagua_app/core/home/home_providers.dart';
import 'package:copo_dagua_app/core/models/models.dart';
import 'package:copo_dagua_app/core/notifications/partner_notifications_providers.dart';
import 'package:copo_dagua_app/core/partner_app/partner_analytics.dart';
import 'package:copo_dagua_app/core/partner_app/partner_app_providers.dart';
import 'package:copo_dagua_app/core/payments/partner_connect.dart';
import 'package:copo_dagua_app/core/partner_profile/partner_profile_controller.dart';
import 'package:copo_dagua_app/core/partner_venue_tables/partner_venue_tables_controller.dart';
import 'package:copo_dagua_app/core/partners/favorite_partners_controller.dart';
import 'package:copo_dagua_app/core/partners/partner_providers.dart';
import 'package:copo_dagua_app/core/platform/maintenance_controller.dart';
import 'package:copo_dagua_app/core/reviews/review_providers.dart';
import 'package:copo_dagua_app/core/router.dart';
import 'package:copo_dagua_app/core/seating/seating_controller.dart';
import 'package:copo_dagua_app/core/tasks/task_engine_controller.dart';
import 'package:copo_dagua_app/core/tasks/task_models.dart';
import 'package:copo_dagua_app/core/wedding/wedding_controller.dart';
import 'package:copo_dagua_app/features/partners/screens/partner_detail_screen.dart';
import 'package:copo_dagua_app/features/partners/screens/partners_list_screen.dart';
import 'package:copo_dagua_app/features/invite/screens/rsvp_page_screen.dart';
import 'package:copo_dagua_app/core/wedding/menu_style.dart';
import 'package:copo_dagua_app/main.dart';
import 'package:copo_dagua_app/shared/widgets/page_header.dart' show AddActionButton;

// ---------------------------------------------------------------- dados

final _now = DateTime.now();
DateTime _days(int d) => _now.add(Duration(days: d));

const _coupleProfile = Profile(
  id: 'u-couple',
  fullName: 'Sofia Silva',
  email: 'sofia@exemplo.com',
  password: '',
  role: UserRole.couple,
  emailVerified: true,
  onboardingComplete: true,
);

const _partnerProfile = Profile(
  id: 'u-partner',
  fullName: 'Miguel Costa',
  email: 'miguel@exemplo.com',
  password: '',
  role: UserRole.partner,
  emailVerified: true,
  onboardingComplete: true,
  businessName: 'Quinta do Lago Azul',
  businessDescription: 'Quinta para casamentos com jardins e vista para o rio.',
  location: 'Sintra',
  categoryLabels: ['Espaços', 'Catering'],
  serviceAreas: ['Lisboa', 'Sintra', 'Cascais'],
  yearsExperience: 8,
  partnerProfileStatus: 'published',
  pricingMode: 'packages',
);

const _guestProfile = Profile(
  id: 'u-guest',
  fullName: 'Rita Mendes',
  email: 'rita@exemplo.com',
  password: '',
  role: UserRole.guest,
  emailVerified: true,
  onboardingComplete: true,
);

final _wedding = Wedding(
  id: 'w1',
  ownerId: 'u-couple',
  partnerName1: 'Sofia',
  partnerName2: 'Tiago',
  weddingDate: _days(214),
  location: 'Sintra',
  venue: 'Quinta do Lago Azul',
  estimatedGuests: 120,
  estimatedBudget: 25000,
  quote: 'O melhor ainda está para vir.',
  guestCode: 'SOFIATIAGO24',
);

final _guests = [
  for (final (i, g) in const [
    ('Ana Ribeiro', 'Família', RsvpStatus.confirmed),
    ('Bruno Lopes', 'Amigos', RsvpStatus.confirmed),
    ('Carla Dias', 'Trabalho', RsvpStatus.pending),
    ('Diogo Faria', 'Amigos', RsvpStatus.declined),
    ('Eva Martins', 'Família', RsvpStatus.confirmed),
    ('Filipe Sousa', 'Família', RsvpStatus.pending),
    ('Gabriela Pinto', 'Amigos', RsvpStatus.confirmed),
    ('Hugo Neves', 'Trabalho', RsvpStatus.pending),
  ].indexed)
    Guest(
      id: 'g$i',
      weddingId: 'w1',
      name: g.$1,
      group: g.$2,
      rsvpStatus: g.$3,
      plusOneAllowed: i.isEven,
      createdAt: _days(-30 + i),
      onboardingCompletedAt: _days(-3),
      nickname: i == 5 ? 'Tio Filipe' : null,
    ),
];

final _checklist = [
  ChecklistItem(id: 'c1', weddingId: 'w1', title: 'Escolher o local', category: 'Espaço', done: true, dueDate: _days(-20)),
  ChecklistItem(id: 'c2', weddingId: 'w1', title: 'Reservar fotógrafo', category: 'Fotografia', dueDate: _days(12), progressPercent: 40),
  ChecklistItem(id: 'c3', weddingId: 'w1', title: 'Provar o menu', category: 'Catering', dueDate: _days(30)),
  ChecklistItem(id: 'c4', weddingId: 'w1', title: 'Enviar convites', category: 'Convidados', dueDate: _days(45)),
];

WeddingTask _task(String id, String title, String category, {int due = 10, TaskStatus status = TaskStatus.active}) => WeddingTask(
      id: id,
      weddingId: 'w1',
      source: TaskSource.system,
      title: title,
      description: 'Sugestão com base no que já fizeste.',
      category: category,
      priority: TaskPriority.normal,
      status: status,
      dueDate: _days(due),
      availableAt: _days(-5),
      createdAt: _days(-5),
    );

final _taskState = TaskEngineState(
  systemActive: [
    _task('t1', 'Definir o orçamento', 'budget', due: 3),
    _task('t2', 'Pedir orçamento a fotógrafos', 'photography', due: 14),
    _task('t3', 'Adicionar convidados', 'guests', due: 21),
  ],
  systemDone: [_task('t4', 'Escolher a data', 'wedding', due: -10, status: TaskStatus.completed)],
  notifications: [
    AppNotification(id: 'n1', weddingId: 'w1', type: 'task', title: 'Nova tarefa: pedir orçamentos', read: false, createdAt: _days(-1)),
  ],
);

const _budget = Budget(
  weddingId: 'w1',
  total: 25000,
  categories: [
    BudgetCategory(name: 'Espaço', amount: 8000, allocated: 9000, partnerCategory: PartnerCategory.venue),
    BudgetCategory(name: 'Catering', amount: 6200, allocated: 7000, partnerCategory: PartnerCategory.catering),
    BudgetCategory(name: 'Fotografia', amount: 1800, allocated: 2500, partnerCategory: PartnerCategory.photography),
    BudgetCategory(name: 'Música', amount: 900, allocated: 1500, partnerCategory: PartnerCategory.music),
    BudgetCategory(name: 'Outros', amount: 400, allocated: 1000),
  ],
);

final _expenses = [
  Expense(id: 'e1', weddingId: 'w1', title: 'Sinal da quinta', category: PartnerCategory.venue, amount: 2400, dueDate: _days(-40), paid: true),
  Expense(id: 'e2', weddingId: 'w1', title: 'Catering — 1.ª prestação', category: PartnerCategory.catering, amount: 3100, dueDate: _days(20)),
  Expense(id: 'e3', weddingId: 'w1', title: 'Fotógrafo — sinal', category: PartnerCategory.photography, amount: 600, dueDate: _days(8)),
  Expense(id: 'e4', weddingId: 'w1', title: 'DJ', category: PartnerCategory.music, amount: 900, dueDate: _days(60)),
];

final _partners = [
  for (final (i, p) in const [
    ('Quinta do Lago Azul', 'Espaços', 'venue', 'Sintra', 4.9, 32, 8500.0),
    ('Luz & Grão Fotografia', 'Fotografia', 'photography', 'Lisboa', 4.8, 21, 1800.0),
    ('Sabores da Serra', 'Catering', 'catering', 'Cascais', 4.7, 18, 55.0),
    ('Som de Verão', 'Música', 'music', 'Lisboa', 4.6, 12, 900.0),
    ('Flor de Sal', 'Decoração', 'decoration', 'Sintra', 4.9, 9, 1200.0),
  ].indexed)
    Partner(
      id: 'p$i',
      name: p.$1,
      categoryLabels: [p.$2],
      categorySlugs: [p.$3],
      location: p.$4,
      rating: p.$5,
      reviewCount: p.$6,
      startingPrice: p.$7,
      description: 'Trabalhamos com casais que querem um dia simples e bonito, '
          'com tudo tratado ao pormenor.',
    ),
];

final _reviews = [
  Review(
    id: 'r1',
    bookingId: 'b9',
    partnerId: 'p0',
    rating: 5,
    comment: 'Tudo impecável, do início ao fim. Recomendamos!',
    createdAt: _days(-40),
    coupleDisplayName: 'Inês & João',
    accountCreatedAt: _days(-300),
    weddingDate: _days(-50),
    location: 'Sintra',
    estimatedGuests: 90,
  ),
  Review(
    id: 'r2',
    bookingId: 'b8',
    partnerId: 'p0',
    rating: 4,
    comment: 'Equipa muito simpática e espaço lindo.',
    createdAt: _days(-90),
    coupleDisplayName: 'Marta & Rui',
    accountCreatedAt: _days(-400),
  ),
];

final _conversations = [
  ChatConversation(id: 'cv1', name: 'Quinta do Lago Azul', avatarSeed: 'a', weddingId: 'w1', partnerId: 'p0', lastMessage: 'Temos disponibilidade para essa data!', lastMessageAt: _days(0), unreadCount: 2),
  ChatConversation(id: 'cv2', name: 'Luz & Grão Fotografia', avatarSeed: 'b', weddingId: 'w1', partnerId: 'p1', lastMessage: 'Enviei a proposta, vê quando puderes.', lastMessageAt: _days(-1)),
  ChatConversation(id: 'cv3', name: 'Sabores da Serra', avatarSeed: 'c', weddingId: 'w1', partnerId: 'p2', lastMessage: 'Obrigado!', lastMessageAt: _days(-4)),
];

final _messages = [
  ChatMessage(id: 'm1', conversationId: 'cv1', fromPartner: false, isQuoteRequestNotice: true, text: 'Pediu um orçamento para Quinta do Lago Azul. 18/05/2027 · 120 convidados', sentAt: _days(-2)),
  ChatMessage(id: 'm2', conversationId: 'cv1', fromPartner: false, text: 'Olá! Ainda têm disponibilidade para maio?', sentAt: _days(-2)),
  ChatMessage(id: 'm3', conversationId: 'cv1', fromPartner: true, text: 'Olá Sofia! Temos disponibilidade para essa data!', sentAt: _days(-1)),
  ChatMessage(id: 'm4', conversationId: 'cv1', fromPartner: true, proposalId: 'pr1', proposalTitle: 'Pacote Jardim', proposalPrice: 8500, proposalDepositAmount: 2550, sentAt: _days(0)),
];

final _bookings = [
  Booking(id: 'b1', partnerId: 'u-partner', weddingId: 'w1', clientName: 'Sofia & Tiago', avatarSeed: 'a', eventDate: _days(214), city: 'Sintra', category: 'Espaços', packageLabel: 'Pacote Jardim', messageFromCouple: 'Olá! Queríamos saber se têm disponibilidade para a nossa data, somos cerca de 120 pessoas.', fromQuoteRequest: true),
  Booking(id: 'b2', partnerId: 'u-partner', weddingId: 'w2', clientName: 'Inês & João', avatarSeed: 'b', eventDate: _days(120), city: 'Cascais', category: 'Espaços', packageLabel: 'Pacote Clássico', status: BookingStatus.emAnalise, fromQuoteRequest: true, proposalSent: true),
  Booking(id: 'b3', partnerId: 'u-partner', weddingId: 'w3', clientName: 'Marta & Rui', avatarSeed: 'c', eventDate: _days(40), city: 'Lisboa', category: 'Espaços', packageLabel: 'Pacote Jardim', status: BookingStatus.confirmado),
  Booking(id: 'b4', partnerId: 'u-partner', weddingId: 'w4', clientName: 'Ana & Pedro', avatarSeed: 'd', eventDate: _days(-30), city: 'Sintra', category: 'Espaços', packageLabel: 'Pacote Clássico', status: BookingStatus.concluido),
];

List<Booking> _bookingsFor(BookingStatus? s) {
  if (s == null) return _bookings;
  return _bookings.where((b) => b.status == s).toList();
}

PartnerAnalytics _analytics(AnalyticsPeriod period) {
  final n = period == AnalyticsPeriod.year ? 12 : period.days;
  List<AnalyticsPoint> series(double base, double wave, int seed) => [
        for (var i = 0; i < n; i++)
          AnalyticsPoint(
            period == AnalyticsPeriod.year
                ? DateTime(_now.year, _now.month - (n - 1 - i), 1)
                : _days(-(n - 1 - i)),
            (base + wave * ((i * 7 + seed) % 5)).toDouble(),
          ),
      ];
  final rev = series(period == AnalyticsPeriod.year ? 9000 : 300, 400, 1);
  final prev = series(period == AnalyticsPeriod.year ? 7000 : 250, 300, 3);
  double sum(List<AnalyticsPoint> s) => s.fold(0, (a, p) => a + p.value);
  return PartnerAnalytics(
    period: period,
    revenue: sum(rev),
    previousRevenue: sum(prev),
    revenueSeries: rev,
    previousRevenueSeries: prev,
    bookings: 6,
    previousBookings: 4,
    bookingsSeries: series(0, 1, 2),
    requests: 18,
    previousRequests: 14,
    requestsSeries: series(0, 1, 4),
    proposals: 11,
    accepted: 6,
    requestsByWeek: [
      for (var i = 0; i < 8; i++) AnalyticsPoint(_days(-7 * (7 - i)), [2, 3, 1, 4, 3, 5, 2, 4][i].toDouble()),
    ],
    averageRating: 4.8,
    reviewCount: 32,
  );
}

const _guestWedding = GuestWedding(
  weddingId: 'w1',
  partnerName1: 'Sofia',
  partnerName2: 'Tiago',
  venue: 'Quinta do Lago Azul',
  location: 'Sintra',
  quote: 'O melhor ainda está para vir.',
  ceremonyTime: '16:00',
  welcomeMessage: 'Estamos muito felizes por partilhar este dia convosco.',
);

// --------------------------------------------------------------- fakes

class _FakeAuth extends AuthController {
  _FakeAuth(this.initial);
  final AuthState initial;
  @override
  AuthState build() => initial;
}

class _FakeWedding extends WeddingController {
  _FakeWedding(this.wedding);
  final Wedding? wedding;
  @override
  WeddingState build() => WeddingState(wedding: wedding);
}

class _FakeGuests extends GuestsController {
  @override
  GuestsState build() => GuestsState(guests: _guests);
}

class _FakeBudget extends BudgetController {
  @override
  BudgetState build() => const BudgetState(budget: _budget);
}

class _FakeExpenses extends ExpenseController {
  @override
  ExpenseState build() => ExpenseState(expenses: _expenses);
}

class _FakeChecklist extends ChecklistController {
  @override
  ChecklistState build() => ChecklistState(items: _checklist);
}

class _FakeTasks extends TaskEngineController {
  @override
  TaskEngineState build() => _taskState;
  @override
  Future<void> recompute() async {}
}

class _FakeChatList extends ChatListController {
  @override
  ChatListState build() => ChatListState(conversations: _conversations);
  @override
  Future<void> load(String weddingId) async {}
}

class _FakeFavorites extends FavoritePartnersController {
  @override
  FavoritePartnersState build() => const FavoritePartnersState(partnerIds: {'p1'});
}

class _FakeSeating extends SeatingController {
  @override
  SeatingState build() => SeatingState(
        hasVenue: true,
        totalTables: 12,
        tables: [
          SeatingTable(id: 's1', weddingId: 'w1', name: 'Família da noiva', guestIds: [for (var i = 0; i < 8; i++) 'g$i']),
          const SeatingTable(id: 's2', weddingId: 'w1', name: 'Amigos da faculdade', guestIds: ['g0', 'g1', 'g4']),
        ],
        venueTypes: const [
          VenueTableType(id: 'vt1', partnerId: 'p0', shape: TableShape.round, seats: 8, quantity: 6),
          VenueTableType(id: 'vt2', partnerId: 'p0', shape: TableShape.square, seats: 8, quantity: 4),
          VenueTableType(id: 'vt3', partnerId: 'p0', shape: TableShape.rectangular, seats: 8, quantity: 2),
        ],
      );
}

bool _maintenanceOn = false;

class _FakeMaintenance extends MaintenanceController {
  @override
  MaintenanceState build() => MaintenanceState(couple: _maintenanceOn);
}

class _FakeVenueTables extends PartnerVenueTablesController {
  @override
  PartnerVenueTablesState build() => const PartnerVenueTablesState(tableTypes: [
        VenueTableType(id: 'vt1', partnerId: 'u-partner', shape: TableShape.round, seats: 10, quantity: 12),
        VenueTableType(id: 'vt2', partnerId: 'u-partner', shape: TableShape.rectangular, seats: 20, quantity: 1),
      ]);
}

class _FakeChatThread extends ChatThreadController {
  _FakeChatThread(super.conversationId);
  @override
  ChatThreadState build() => ChatThreadState(messages: _messages);
}

class _FakePartnerChatThread extends PartnerChatThreadController {
  _FakePartnerChatThread(super.conversationId);
  @override
  ChatThreadState build() => ChatThreadState(messages: _messages);
}

// ------------------------------------------------------------ overrides

List<Override> _overrides(AuthState auth) => [
      authControllerProvider.overrideWith(() => _FakeAuth(auth)),
      maintenanceControllerProvider.overrideWith(_FakeMaintenance.new),
      weddingControllerProvider.overrideWith(
        () => _FakeWedding(auth.profile?.role == UserRole.couple && auth.status == AuthStatus.active ? _wedding : null),
      ),
      guestsControllerProvider.overrideWith(_FakeGuests.new),
      budgetControllerProvider.overrideWith(_FakeBudget.new),
      expenseControllerProvider.overrideWith(_FakeExpenses.new),
      checklistControllerProvider.overrideWith(_FakeChecklist.new),
      taskEngineControllerProvider.overrideWith(_FakeTasks.new),
      chatListControllerProvider.overrideWith(_FakeChatList.new),
      favoritePartnersControllerProvider.overrideWith(_FakeFavorites.new),
      seatingControllerProvider.overrideWith(_FakeSeating.new),
      partnerVenueTablesControllerProvider.overrideWith(_FakeVenueTables.new),
      chatThreadControllerProvider('cv1').overrideWith(() => _FakeChatThread('cv1')),
      partnerChatThreadControllerProvider('cv1').overrideWith(() => _FakePartnerChatThread('cv1')),
      unreadMessagesCountProvider.overrideWith((ref) async => 2),
      partnerUnreadMessagesCountProvider.overrideWith((ref) async => 1),
      coupleBookingsProvider.overrideWith((ref) async => [
            CoupleBooking(id: 'cb1', weddingId: 'w1', partnerName: 'Quinta do Lago Azul', category: 'Espaços', serviceDate: _days(214), amount: 8500, status: BookingStatus.confirmado),
            CoupleBooking(id: 'cb2', weddingId: 'w1', partnerName: 'Luz & Grão Fotografia', category: 'Fotografia', serviceDate: _days(214), amount: 1800, status: BookingStatus.aceite, pendingDepositPaymentId: 'pay1', depositAmount: 540),
          ]),
      pendingProposalsProvider.overrideWith((ref) async => [
            ReceivedProposal(id: 'pr1', weddingId: 'w1', partnerName: 'Sabores da Serra', category: 'Catering', title: 'Menu Primavera', description: 'Entradas, prato principal e sobremesa.', price: 6600, depositAmount: 1980, eventDate: _days(214)),
          ]),
      platformCommissionPercentageProvider.overrideWith((ref) async => 10),
      platformDepositPercentageProvider.overrideWith((ref) async => 30),
      coupleSupportTicketsProvider.overrideWith((ref) async => const []),
      partnerSupportTicketsProvider.overrideWith((ref) async => const []),
      reviewForBookingProvider.overrideWith((ref, id) async => null),
      partnersProvider.overrideWith((ref, slug) async =>
          slug == null ? _partners : _partners.where((p) => p.categorySlugs.contains(slug)).toList()),
      partnerByIdProvider.overrideWith((ref, id) async => _partners.firstWhere((p) => p.id == id, orElse: () => _partners.first)),
      partnerCategoryOptionsProvider.overrideWith((ref) async => const [
            PartnerCategoryOption(id: '1', label: 'Espaços', slug: 'venue'),
            PartnerCategoryOption(id: '2', label: 'Fotografia', slug: 'photography'),
            PartnerCategoryOption(id: '3', label: 'Catering', slug: 'catering'),
            PartnerCategoryOption(id: '4', label: 'Música', slug: 'music'),
            PartnerCategoryOption(id: '5', label: 'Decoração', slug: 'decoration'),
          ]),
      partnerPackagesForProvider.overrideWith((ref, id) async => const [
            ServicePackage(id: 'sp1', partnerId: 'p0', name: 'Pacote Jardim', price: 8500, isStartingPrice: true),
            ServicePackage(id: 'sp2', partnerId: 'p0', name: 'Pacote Clássico', price: 11000),
          ]),
      partnerVenueCapacityProvider.overrideWith((ref, id) async => 140),
      partnerPortfolioForProvider.overrideWith((ref, id) async => const []),
      partnerRelationshipStatusProvider.overrideWith((ref, id) async => PartnerRelationshipStatus.none),
      publicReviewsForPartnerProvider.overrideWith((ref, id) async => _reviews),
      weddingGalleryPhotosProvider.overrideWith((ref, id) async => [
            for (var i = 0; i < 9; i++)
              GalleryPhoto(id: 'ph$i', weddingId: 'w1', uploadedBy: 'u-guest', storagePath: 'x/$i.jpg', imageUrl: 'https://example.invalid/$i.jpg', status: i < 2 ? 'pending' : 'approved', createdAt: _days(-i)),
          ]),
      // Publicações (galeria social): autor, gostos e comentários.
      galleryFeedMetaProvider.overrideWith((ref, id) async => {
            for (var i = 0; i < 9; i++)
              'ph$i': GalleryPostMeta(
                photoId: 'ph$i',
                uploadedBy: 'u-guest',
                authorName: i.isEven ? 'Carolina Faria' : 'Sofia Silva',
                authorIsCouple: i.isOdd,
                likeCount: 31 - i,
                likedByMe: i == 2,
                commentCount: 6,
              ),
          }),
      galleryLikersProvider.overrideWith((ref, id) async => const [
            (profileId: 'u-ar', name: 'Avó Rosa', avatarUrl: null),
            (profileId: 'u-mc', name: 'Miguel Costa', avatarUrl: null),
          ]),
      galleryCommentsProvider.overrideWith((ref, id) async => [
            GalleryComment(id: 'cm1', profileId: 'u-ar', authorName: 'Avó Rosa', body: 'Que bonito!', createdAt: _days(0)),
          ]),
      guestWeddingsProvider.overrideWith((ref) async => const [_guestWedding]),
      myGuestRowProvider.overrideWith((ref, id) async => _guests.first),
      mySeatingTableProvider.overrideWith((ref, id) async => 3),
      myTableRosterProvider.overrideWith((ref, id) async => const [
            TableMate(guestId: 'g1', fullName: 'Bruno Lopes', group: 'Amigos', plusOneAllowed: false),
            TableMate(guestId: 'g4', fullName: 'Eva Martins', group: 'Família', plusOneAllowed: true, plusOneName: 'Nuno'),
          ]),
      partnerBookingsProvider.overrideWith((ref, s) async => _bookingsFor(s)),
      partnerAnalyticsProvider.overrideWith((ref, period) async => _analytics(period)),
      partnerConversationsProvider.overrideWith((ref) async => _conversations),
      partnerNotificationsProvider.overrideWith((ref) async => [
            PartnerNotification(id: 'pn1', title: 'Novo pedido de Sofia & Tiago', read: false, createdAt: _days(0)),
          ]),
      partnerPortfolioProvider.overrideWith((ref) async => const []),
      partnerReviewsProvider.overrideWith((ref) async => _reviews),
      partnerStripeStatusProvider.overrideWith((ref) async => const PartnerStripeStatus(hasAccount: true, chargesEnabled: true, payoutsEnabled: false)),
      partnerConnectStatusProvider.overrideWith((ref) async => const ConnectStatus(
            hasAccount: true,
            detailsSubmitted: true,
            chargesEnabled: true,
            payoutsEnabled: true,
            bankLast4: '4821',
            availableCents: 124000,
            pendingCents: 25500,
            eventuallyDue: ['individual.verification.document'],
            payouts: [ConnectPayout(id: 'po1', amountCents: 80000, status: 'paid')],
          )),
      partnerBalanceProvider.overrideWith((ref) async => const PartnerBalanceData(received: 12400, pendingDeposits: 2550, uncollectedBalance: 5950)),
      partnerPricingProvider.overrideWith((ref) async => const PartnerPricingData(
            pricingMode: 'packages',
            packages: [
              ServicePackage(id: 'sp1', partnerId: 'u-partner', name: 'Pacote Jardim', description: 'Cerimónia e jantar no jardim.', price: 8500, isStartingPrice: true),
              ServicePackage(id: 'sp2', partnerId: 'u-partner', name: 'Pacote Clássico', description: 'Salão interior, até 160 pessoas.', price: 11000, position: 1),
            ],
          )),
    ];

// ------------------------------------------------------------- harness

Future<void> _loadFonts() async {
  final manifest = json.decode(await rootBundle.loadString('FontManifest.json')) as List;
  for (final family in manifest.cast<Map<String, dynamic>>()) {
    final loader = FontLoader(family['family'] as String);
    for (final font in (family['fonts'] as List).cast<Map<String, dynamic>>()) {
      loader.addFont(rootBundle.load(font['asset'] as String));
    }
    await loader.load();
  }
}

/// Mostra [location] para a conta [auth] e grava `goldens/<name>.png`.
/// [after] corre depois de o ecrã aparecer (ex: abrir uma folha).
Future<void> _shoot(
  WidgetTester tester,
  String name,
  AuthState auth,
  String location, {
  Object? extra,
  Future<void> Function(WidgetTester tester)? after,
}) async {
  tester.view.physicalSize = const Size(1170, 2532);
  tester.view.devicePixelRatio = 3;
  addTearDown(tester.view.reset);

  final previousOnError = FlutterError.onError;
  final errors = <String>[];
  // Imagens de rede falham sempre em testes (não há rede) — não é um
  // problema do ecrã, por isso não deixa o teste falhar por isso.
  FlutterError.onError = (details) {
    final text = details.exceptionAsString();
    if (text.contains('HTTP') || text.contains('NetworkImage') || text.contains('ImageCodec')) return;
    errors.add(text);
  };
  debugDisableShadows = false;
  try {
    await tester.pumpWidget(
      ProviderScope(
        overrides: _overrides(auth),
        child: const CopoDaguaApp(),
      ),
    );
    await tester.pump(const Duration(milliseconds: 50));
    final context = tester.element(find.byType(Navigator).first);
    GoRouter.of(context).go(location, extra: extra);
    // Deixa terminar o carregamento real de imagens locais (assets).
    await tester.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 400)));
    for (var i = 0; i < 10; i++) {
      await tester.pump(const Duration(milliseconds: 120));
    }
    if (after != null) {
      await after(tester);
      for (var i = 0; i < 10; i++) {
        await tester.pump(const Duration(milliseconds: 120));
      }
    }
    await expectLater(find.byType(CopoDaguaApp), matchesGoldenFile('goldens/$name.png'));
  } finally {
    debugDisableShadows = true;
    FlutterError.onError = previousOnError;
  }
  if (errors.isNotEmpty) {
    // ignore: avoid_print
    print('[$name] ${errors.length} erro(s) de layout/render:\n${errors.join('\n---\n')}');
  }
  // Desmonta para não deixar timers/animações pendentes.
  await tester.pumpWidget(const SizedBox());
  await tester.pump(const Duration(seconds: 2));
}

/// Toca no primeiro widget com este texto (ou ícone) — para fotografar as
/// páginas e folhas que só abrem a partir de um botão.
Future<void> Function(WidgetTester) _tapText(String text) => (t) async {
      final f = find.text(text);
      if (f.evaluate().isEmpty) return;
      await t.ensureVisible(f.first);
      await t.pump(const Duration(milliseconds: 100));
      await t.tap(f.first, warnIfMissed: false);
    };

/// Dá um casamento ao controlador (nos testes não há nenhum carregado e
/// os botões "+" não faziam nada) e toca no "+".
Future<void> Function(WidgetTester) _addWith(void Function(ProviderContainer c) setup) => (t) async {
      final c = ProviderScope.containerOf(t.element(find.byType(AddActionButton).first));
      setup(c);
      await t.tap(find.byType(AddActionButton).first, warnIfMissed: false);
    };

Future<void> Function(WidgetTester) _tapAdd() => (t) async {
      final f = find.byType(AddActionButton);
      if (f.evaluate().isEmpty) return;
      await t.tap(f.first, warnIfMissed: false);
    };

Future<void> Function(WidgetTester) _tapIcon(IconData icon) => (t) async {
      final f = find.byIcon(icon);
      if (f.evaluate().isEmpty) return;
      await t.tap(f.first, warnIfMissed: false);
    };

AuthState _active(Profile p) => AuthState(status: AuthStatus.active, profile: p);

void main() {
  setUpAll(() async {
    await _loadFonts();
    // Alguns ecrãs (Orçamento, Serviços tratados, Perfil do parceiro,
    // onboarding do parceiro) chamam o Supabase diretamente. Sem isto o
    // teste falhava com "You must initialize the supabase instance". Um
    // endereço local que não responde: os pedidos falham logo (nunca
    // chegam à base de dados real) e os ecrãs mostram o seu estado vazio.
    SharedPreferences.setMockInitialValues({});
    try {
      await Supabase.initialize(
        url: 'http://127.0.0.1:9',
        publishableKey: 'test',
        authOptions: const FlutterAuthClientOptions(autoRefreshToken: false),
      );
    } catch (_) {}
  });

  final couple = _active(_coupleProfile);
  final partner = _active(_partnerProfile);
  final guest = _active(_guestProfile);
  const signedOut = AuthState.unauthenticated();

  // Sem sessão
  testWidgets('00 boas-vindas', (t) => _shoot(t, '00_welcome', signedOut, '/welcome'));
  testWidgets('01 login', (t) => _shoot(t, '01_login', signedOut, '/login'));
  testWidgets('02 tipo de conta', (t) => _shoot(t, '02_role', signedOut, '/role'));
  testWidgets('03 registo', (t) => _shoot(t, '03_register', signedOut, '/register?role=couple'));
  testWidgets('04 onboarding', (t) => _shoot(
        t,
        '04_onboarding',
        const AuthState(status: AuthStatus.onboardingIncomplete, profile: _coupleProfile),
        '/onboarding',
      ));
  for (var i = 1; i < 7; i++) {
    testWidgets('04 onboarding passo ${i + 1}', (t) => _shoot(
          t,
          '04_onboarding_${i + 1}',
          const AuthState(status: AuthStatus.onboardingIncomplete, profile: _coupleProfile),
          '/onboarding?step=$i',
        ));
  }

  // Casal
  for (final (name, path) in const [
    ('10_casal_perfil', '/home'),
    ('11_casal_casamento', '/wedding'),
    ('12_casal_tarefas', '/tasks'),
    ('13_casal_checklist', '/checklist'),
    ('14_casal_orcamento', '/budget'),
    ('15_casal_convidados', '/guests'),
    ('16_casal_convidado', '/guests/g0'),
    ('17_casal_lugares', '/seating'),
    ('18_casal_parceiros', '/partners'),
    ('19_casal_chat', '/chat'),
    ('21_casal_galeria', '/gallery'),
    ('22_casal_calendario', '/calendar'),
    ('23_casal_reservas', '/bookings'),
    ('24_casal_definicoes', '/settings'),
    ('25_casal_suporte', '/support'),
    ('26_casal_servicos', '/service-preferences'),
    ('28_casal_para_convidados', '/guest-page'),
  ]) {
    testWidgets(name, (t) => _shoot(t, name, couple, path));
  }
  testWidgets('20_casal_conversa', (t) => _shoot(t, '20_casal_conversa', couple, '/chat/cv1', extra: _conversations.first));
  testWidgets('27_casal_parceiro_folha', (t) => _shoot(
        t,
        '27_casal_parceiro_folha',
        couple,
        '/partners',
        after: (t) async {
          final ctx = t.element(find.byType(PartnersListScreen));
          PartnerDetailScreen.show(ctx, _partners.first);
        },
      ));

  // Parceiro
  for (final (name, path) in const [
    ('30_parceiro_painel', '/partner-home'),
    ('31_parceiro_pedidos', '/partner-requests'),
    ('33_parceiro_mensagens', '/partner-messages'),
    ('35_parceiro_calendario', '/partner-calendar'),
    ('36_parceiro_perfil', '/partner-profile'),
    ('37_parceiro_pagamentos', '/partner-payments'),
    ('37b_parceiro_dados_stripe', '/partner-payments/setup'),
    ('38_parceiro_contratos', '/partner-contracts'),
    ('39_parceiro_resultados', '/partner-stats'),
    ('40_parceiro_avaliacoes', '/partner-reviews'),
    ('41_parceiro_precos', '/partner-pricing'),
    ('42_parceiro_portefolio', '/partner-portfolio'),
    ('43_parceiro_negocio', '/partner-business-info'),
    ('44_parceiro_mesas', '/partner-venue-tables'),
    ('47_parceiro_disponibilidade', '/partner-availability'),
    ('48_parceiro_localizacao', '/partner-location'),
  ]) {
    testWidgets(name, (t) => _shoot(t, name, partner, path));
  }
  testWidgets('32_parceiro_pedido', (t) => _shoot(t, '32_parceiro_pedido', partner, '/partner-requests/b1', extra: _bookings.first));
  testWidgets('34_parceiro_conversa', (t) => _shoot(t, '34_parceiro_conversa', partner, '/partner-messages/cv1', extra: _conversations.first));
  testWidgets('45_parceiro_proposta', (t) => _shoot(t, '45_parceiro_proposta', partner, '/partner-requests/b1/proposal', extra: _bookings.first));

  // Convidado
  for (final (name, path) in const [
    ('50_convidado_inicio', '/guest-home'),
    ('51_convidado_galeria', '/guest-gallery'),
    ('52_convidado_perfil', '/guest-profile'),
    ('53_convidado_presentes', '/guest-gifts'),
    ('56_convidado_eventos', '/guest-events'),
  ]) {
    testWidgets(name, (t) => _shoot(t, name, guest, path));
  }
  for (var i = 0; i < 6; i++) {
    testWidgets('55 convidado onboarding ${i + 1}', (t) => _shoot(
          t,
          '55_convidado_onb_${i + 1}',
          guest,
          '/guest-onboarding/w1?step=$i',
          extra: Guest(
            id: 'g0',
            weddingId: 'w1',
            name: 'Rita Mendes',
            rsvpStatus: RsvpStatus.pending,
            plusOneAllowed: true,
            createdAt: _days(-3),
          ),
        ));
  }
  for (var i = 0; i < 12; i++) {
    testWidgets('46 parceiro onboarding ${i + 1}', (t) => _shoot(
          t,
          '46_parceiro_onb_${(i + 1).toString().padLeft(2, '0')}',
          const AuthState(status: AuthStatus.onboardingIncomplete, profile: _partnerProfile),
          '/onboarding?step=$i',
        ));
  }
  testWidgets('54_convidado_detalhes', (t) => _shoot(t, '54_convidado_detalhes', guest, '/guest-wedding-details', extra: _guestWedding));

  // Páginas e folhas abertas por botões (revisão 2026-10-17: "cada
  // botão de cada página tem uma aba, alguns nem foram refeitos").
  for (final (name, auth, path, after) in [
    ('60_sub_editar_evento', couple, '/settings', _tapText('Detalhes do evento')),
    ('61_sub_novo_convidado', couple, '/guests', _addWith((c) => c.read(guestsControllerProvider.notifier).currentWeddingId = 'w1')),
    ('62_sub_nova_despesa', couple, '/budget', _addWith((c) => c.read(expenseControllerProvider.notifier).currentWeddingId = 'w1')),
    ('63_sub_categoria', couple, '/budget', _tapText('Catering')),
    ('64_sub_nova_tarefa', couple, '/tasks', _tapAdd()),
    ('65_sub_checklist_nova', couple, '/checklist', _addWith((c) => c.read(checklistControllerProvider.notifier).currentWeddingId = 'w1')),
    ('66_sub_mesa', couple, '/seating', _tapAdd()),
    ('67_sub_reserva', couple, '/bookings', _tapText('Quinta do Lago Azul')),
    ('68_sub_suporte_novo', couple, '/support', _tapText('Novo pedido de suporte')),
    ('69_sub_partilhar', couple, '/guests', _tapIcon(Icons.ios_share)),
    ('70_sub_modo_convidado', guest, '/guest-events', _tapText('Tenho um código')),
    ('71_sub_editar_convidado', couple, '/guests/g0', _tapText('Editar convidado')),
    ('72_sub_pacote', partner, '/partner-pricing', _tapText('+ Adicionar pacote')),
    ('73_sub_negocio_editar', partner, '/partner-business-info', _tapText('Quinta do Lago Azul')),
    ('74_sub_bloquear_data', partner, '/partner-calendar', _tapText('20')),
    ('75_sub_mesa_local', partner, '/partner-venue-tables', _tapAdd()),
    ('76_sub_avaliacao', partner, '/partner-reviews', _tapIcon(Icons.more_horiz)),
    ('77_sub_tua_mesa', guest, '/guest-profile', _tapText('A tua mesa')),
    ('78_sub_editar_eu', guest, '/guest-profile', _tapText('Tu')),
    ('79_sub_icone_barra', couple, '/settings', _tapText('Ícone da barra')),
    ('80_sub_nome', couple, '/settings', _tapText('Nome')),
    ('81_sub_pedir_orcamento', couple, '/partners', (WidgetTester t) async {
      final ctx = t.element(find.byType(PartnersListScreen));
      PartnerDetailScreen.show(ctx, _partners.first);
      for (var i = 0; i < 8; i++) {
        await t.pump(const Duration(milliseconds: 120));
      }
      await _tapText('Pedir orçamento')(t);
    }),
  ]) {
    testWidgets(name, (t) => _shoot(t, name, auth, path, after: after));
  }
  testWidgets('83_verificar_email', (t) => _shoot(t, '83_verificar_email', const AuthState(status: AuthStatus.emailUnverified, profile: _coupleProfile), '/verify-email'));
  testWidgets('84_rsvp_publico', (t) async {
    // Os mesmos dados que get_rsvp_by_token devolve para um convite real.
    RsvpPageScreen.debugLoader = (_) async => {
          'guest_name': 'Ana',
          'plus_one_allowed': true,
          'plus_one_name': null,
          'dietary_restrictions': null,
          'guest_message': null,
          'rsvp_status': 'pending',
          'wedding_partner_name_1': 'Rafael',
          'wedding_partner_name_2': 'Ines',
          'wedding_date': '2027-07-15',
          'wedding_location': 'Madeira',
        };
    try {
      await _shoot(t, '84_rsvp_publico', signedOut, '/rsvp/token-de-teste');
    } finally {
      RsvpPageScreen.debugLoader = null;
    }
  });
  for (final (name, tap) in [
    ('84b_rsvp_percurso', 'Responder ao convite'),
    ('84c_rsvp_instalar_app', 'Instalar a app'),
  ]) {
    testWidgets(name, (t) async {
      RsvpPageScreen.debugLoader = (_) async => {
            'guest_id': 'g1',
            'wedding_id': 'w1',
            'guest_name': 'Ana Sousa',
            'max_companions': 2,
            'plus_one_allowed': true,
            'rsvp_status': 'pending',
            'event_type': 'wedding',
            'wedding_partner_name_1': 'Rafael',
            'wedding_partner_name_2': 'Ines',
            'wedding_date': '2027-07-15',
            'wedding_location': 'Madeira',
            'companions': const [],
          };
      try {
        await _shoot(t, name, signedOut, '/rsvp/token-de-teste', after: _tapText(tap));
      } finally {
        RsvpPageScreen.debugLoader = null;
      }
    });
  }
  testWidgets('85_convite_publico', (t) => _shoot(t, '85_convite_publico', signedOut, '/invite/SOFIATIAGO24', after: (t) => t.runAsync(() => Future<void>.delayed(const Duration(milliseconds: 600)))));
  testWidgets('86_convite_individual', (t) => _shoot(t, '86_convite_individual', signedOut, '/i/token-de-teste'));
  testWidgets('87_juntar_par', (t) => _shoot(t, '87_juntar_par', signedOut, '/juntar/00000000-0000-0000-0000-000000000000'));
  for (final (name, layout, color) in [
    ('11b_menu_autocolantes', MenuLayout.stickers, 'eucalyptus'),
    ('11c_menu_mural', MenuLayout.mural, 'p-pink'),
    ('11f_menu_classico_pastel', MenuLayout.classic, 'p-sky'),
    ('11d_menu_estendal', MenuLayout.clothesline, 'blue'),
  ]) {
    testWidgets(name, (t) async {
      debugMenuStyle = EventMenuStyle(layout, MenuColor.fromId(color));
      try {
        await _shoot(t, name, couple, '/wedding');
      } finally {
        debugMenuStyle = null;
      }
    });
  }
  // Os 4 estilos do menu em 4 cores (para o vídeo de apresentação).
  for (final layout in [MenuLayout.classic, MenuLayout.stickers, MenuLayout.mural, MenuLayout.clothesline]) {
    for (final color in ['eucalyptus', 'pink', 'blue', 'gold']) {
      final name = '90_menu_${layout.name}_$color';
      testWidgets(name, (t) async {
        debugMenuStyle = EventMenuStyle(layout, MenuColor.fromId(color));
        try {
          await _shoot(t, name, couple, '/wedding');
        } finally {
          debugMenuStyle = null;
        }
      });
    }
  }
  // Publicações (como o feed do Instagram), a abrir na 3.ª foto.
  testWidgets('91_publicacoes', (t) => _shoot(t, '91_publicacoes', couple, '/gallery', after: (t) async {
        final photos = [
          for (var i = 2; i < 9; i++)
            GalleryPhoto(id: 'ph$i', weddingId: 'w1', uploadedBy: 'u-guest', storagePath: 'x/$i.jpg', imageUrl: 'https://example.invalid/$i.jpg', caption: i == 2 ? 'O brinde mais bonito do ano' : null, status: 'approved', createdAt: _days(-i)),
        ];
        Navigator.of(t.element(find.byType(Navigator).first)).push(
          MaterialPageRoute<void>(builder: (_) => GalleryPostsScreen(weddingId: 'w1', photos: photos, initialIndex: 0)),
        );
      }));
  testWidgets('88_manutencao', (t) async {
    _maintenanceOn = true;
    try {
      await _shoot(t, '88_manutencao', couple, '/maintenance');
    } finally {
      _maintenanceOn = false;
    }
  });
  testWidgets('57_convidado_acompanhante', (t) => _shoot(
        t,
        '57_convidado_acompanhante',
        guest,
        '/guest-onboarding/w1?step=1',
        extra: Guest(
          id: 'g0',
          weddingId: 'w1',
          name: 'Rita Mendes',
          rsvpStatus: RsvpStatus.pending,
          plusOneAllowed: true,
          maxCompanions: 2,
          createdAt: _days(-3),
        ),
        after: _tapText('Adicionar acompanhante'),
      ));
  testWidgets('82_esqueci_password', (t) => _shoot(t, '82_esqueci_password', signedOut, '/forgot-password'));
}
