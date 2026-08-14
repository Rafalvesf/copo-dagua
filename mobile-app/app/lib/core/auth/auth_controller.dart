import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../mock/mock_backend.dart';
import '../models/models.dart';

class _Unset {
  const _Unset();
}

const _unset = _Unset();

enum AuthStatus {
  unauthenticated,
  authenticating,
  emailUnverified,
  onboardingIncomplete,
  active,
  error,
}

class AuthState {
  final AuthStatus status;
  final Profile? profile;
  final String? errorMessage;

  const AuthState({required this.status, this.profile, this.errorMessage});

  const AuthState.unauthenticated() : this(status: AuthStatus.unauthenticated);

  AuthState copyWith({AuthStatus? status, Profile? profile, Object? errorMessage = _unset}) {
    return AuthState(
      status: status ?? this.status,
      profile: profile ?? this.profile,
      errorMessage: identical(errorMessage, _unset) ? this.errorMessage : errorMessage as String?,
    );
  }

  static AuthStatus statusFor(Profile profile) {
    if (!profile.emailVerified) return AuthStatus.emailUnverified;
    if (!profile.onboardingComplete) return AuthStatus.onboardingIncomplete;
    return AuthStatus.active;
  }
}

class AuthController extends Notifier<AuthState> {
  final _backend = MockBackend.instance;

  @override
  AuthState build() => const AuthState.unauthenticated();

  Future<void> register({
    required String fullName,
    required String email,
    required String password,
    required UserRole role,
  }) async {
    state = state.copyWith(status: AuthStatus.authenticating, errorMessage: null);
    try {
      final profile = await _backend.signUp(
        fullName: fullName,
        email: email,
        password: password,
        role: role,
      );
      state = AuthState(status: AuthStatus.emailUnverified, profile: profile);
    } on EmailAlreadyRegisteredException {
      state = state.copyWith(
        status: AuthStatus.error,
        errorMessage: 'Este email já está registado. Queres entrar?',
      );
    } catch (_) {
      state = state.copyWith(status: AuthStatus.error, errorMessage: 'Não foi possível criar a conta.');
    }
  }

  Future<void> login({required String email, required String password}) async {
    state = state.copyWith(status: AuthStatus.authenticating, errorMessage: null);
    try {
      final profile = await _backend.signIn(email: email, password: password);
      state = AuthState(status: AuthState.statusFor(profile), profile: profile);
    } on InvalidCredentialsException {
      state = state.copyWith(status: AuthStatus.error, errorMessage: 'Email ou password incorretos.');
    } catch (_) {
      state = state.copyWith(status: AuthStatus.error, errorMessage: 'Não foi possível entrar.');
    }
  }

  Future<void> confirmEmailVerified() async {
    final profile = state.profile;
    if (profile == null) return;
    state = state.copyWith(status: AuthStatus.authenticating);
    final updated = await _backend.markEmailVerified(profile.id);
    state = AuthState(status: AuthState.statusFor(updated), profile: updated);
  }

  Future<void> requestPasswordReset(String email) async {
    await _backend.requestPasswordReset(email);
  }

  void completeOnboarding(Profile updatedProfile) {
    state = AuthState(status: AuthState.statusFor(updatedProfile), profile: updatedProfile);
  }

  Future<void> completePartnerOnboarding() async {
    final profile = state.profile;
    if (profile == null) return;
    state = state.copyWith(status: AuthStatus.authenticating);
    final updated = await _backend.completePartnerOnboarding(profile.id);
    state = AuthState(status: AuthState.statusFor(updated), profile: updated);
  }

  /// Troca entre as duas contas de demonstração (Noivo/a ↔ Parceiro) sem
  /// pedir password de novo — não existe ainda um conceito real de conta
  /// multi-role (ver RN01 em backend/auth/requirements.md), isto é só um
  /// atalho de teste para navegar entre as duas experiências.
  Future<void> switchDemoAccount() async {
    final isPartner = state.profile?.role == UserRole.partner;
    await login(
      email: isPartner ? MockBackend.demoCoupleEmail : MockBackend.demoPartnerEmail,
      password: MockBackend.demoPassword,
    );
  }

  void logout() {
    state = const AuthState.unauthenticated();
  }

  void clearError() {
    if (state.status == AuthStatus.error) {
      state = state.copyWith(status: AuthStatus.unauthenticated, errorMessage: null);
    }
  }
}

final authControllerProvider = NotifierProvider<AuthController, AuthState>(AuthController.new);
