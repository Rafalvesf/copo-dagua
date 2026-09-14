import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart';

import '../models/models.dart';
import '../supabase/supabase_config.dart';

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

  AuthState copyWith({
    AuthStatus? status,
    Profile? profile,
    Object? errorMessage = _unset,
  }) {
    return AuthState(
      status: status ?? this.status,
      profile: profile ?? this.profile,
      errorMessage: identical(errorMessage, _unset)
          ? this.errorMessage
          : errorMessage as String?,
    );
  }

  // Pedido explícito do utilizador (2026-08-31): "não bloqueies o
  // acesso à app mesmo que a review não tenha sido aceite ou tenha
  // sido recusada... não bloqueies acesso ao parceiro ou ao casal" —
  // existia um estado `partnerPendingVerification` que trancava o
  // parceiro no próprio perfil até `partner_profiles.status =
  // 'published'`. Removido por completo: um parceiro com onboarding
  // concluído passa a `active` independentemente do estado da revisão.
  // A visibilidade real no Marketplace continua garantida do lado do
  // servidor por `is_partner_profile_visible()`
  // (`partner-app/profile/database.md`) — nunca dependeu deste bloqueio
  // do lado da app, só a experiência do próprio parceiro dependia.
  static AuthStatus statusFor(Profile profile) {
    if (!profile.emailVerified) return AuthStatus.emailUnverified;
    // Convidado não tem nenhum wizard de onboarding (não cria casamento nem
    // negócio) — `onboarding_completed` fica sempre `false` em `profiles`
    // para este role e nunca deve prender o convidado no wizard do casal.
    if (profile.role != UserRole.guest && !profile.onboardingComplete) {
      return AuthStatus.onboardingIncomplete;
    }
    return AuthStatus.active;
  }
}

/// Liga-se ao Supabase real (`core/supabase/supabase_config.dart`) —
/// substitui `MockBackend.signUp/signIn/...` mantendo exatamente a mesma
/// forma de `AuthState`/`AuthStatus`, para nenhum dos ecrãs que já
/// observam este provider (login, registo, verificação de email,
/// onboarding, ...) precisar de mudar. Ver `ROADMAP.md`, 2026-08-30, para
/// o âmbito completo desta ronda de ligação a dados reais.
class AuthController extends Notifier<AuthState> {
  @override
  AuthState build() => const AuthState.unauthenticated();

  Future<void> register({
    required String fullName,
    required String email,
    required String password,
    required UserRole role,
    // Só usado quando `role == UserRole.guest` — já validado antes de
    // chegar aqui por `lookup_wedding_by_guest_code()`
    // (`register_screen.dart`), para nunca criar uma conta presa a um
    // código inválido. Ver `050_wedding_guest_code.sql`.
    String? weddingCode,
  }) async {
    state = state.copyWith(
      status: AuthStatus.authenticating,
      errorMessage: null,
    );
    try {
      final response = await supabase.auth.signUp(
        email: email,
        password: password,
        data: {'role': role.name, 'full_name': fullName},
      );
      final user = response.user;
      if (user == null) {
        state = state.copyWith(
          status: AuthStatus.error,
          errorMessage: 'Não foi possível criar a conta.',
        );
        return;
      }
      // O Supabase não lança erro para um email já registado e confirmado —
      // devolve um "sucesso" com `user` preenchido mas `identities` vazio,
      // sem enviar nenhum email, para não permitir descobrir que emails já
      // têm conta (proteção contra enumeração). Sem este check, o utilizador
      // via sempre o ecrã "verifica o teu email" mesmo quando nada foi
      // enviado. Descoberto 2026-08-30 ao testar um signup real.
      if (user.identities != null && user.identities!.isEmpty) {
        state = state.copyWith(
          status: AuthStatus.error,
          errorMessage:
              'Este email já está registado. Tenta entrar em vez disso.',
        );
        return;
      }
      if (response.session != null) {
        // Confirmação de email desligada no projeto (2026-08-30, temporário
        // para testes — ver ROADMAP.md) — `signUp` já devolve sessão ativa,
        // não há "verifica o teu email" nenhum para mostrar. Lê o perfil
        // real de volta em vez de construir um localmente.
        if (role == UserRole.guest &&
            weddingCode != null &&
            weddingCode.isNotEmpty) {
          // Melhor esforço: o código já foi validado antes do signUp
          // (`lookup_wedding_by_guest_code`), por isso uma falha aqui é
          // rara (ex: código apagado entretanto) — não bloqueia a conta
          // já criada, o convidado só fica sem casamento associado.
          try {
            await supabase.rpc(
              'join_wedding_by_code',
              params: {'p_code': weddingCode},
            );
          } catch (_) {}
        }
        final profile = await _loadProfile(user);
        state = AuthState(
          status: AuthState.statusFor(profile),
          profile: profile,
        );
        return;
      }
      // Sem sessão ainda (confirmação de email obrigatória, ver
      // backend/auth/requirements.md) — o `on_auth_user_created` trigger
      // (database/migrations/011_auth_provisioning.sql) já criou a linha
      // em `profiles`, mas sem sessão não há `auth.uid()` para a RLS
      // deixar lê-la de volta. O Profile local é construído a partir do
      // que acabámos de enviar, não de uma leitura à base de dados.
      final profile = Profile(
        id: user.id,
        fullName: fullName,
        email: email,
        password: '',
        role: role,
      );
      state = AuthState(status: AuthStatus.emailUnverified, profile: profile);
    } on AuthException catch (e) {
      final alreadyRegistered =
          e.message.toLowerCase().contains('already registered') ||
          e.message.toLowerCase().contains('already exists');
      // `over_email_send_rate_limit`: o serviço de email por omissão do
      // Supabase (sem SMTP próprio configurado) tem um limite muito baixo
      // (poucos emails/hora) — fácil de esgotar em testes. Sem este caso,
      // caía na mensagem genérica, indistinguível de um erro real de
      // criação de conta. Ver `backend/auth/tasks.md`.
      final rateLimited = e.code == 'over_email_send_rate_limit';
      state = state.copyWith(
        status: AuthStatus.error,
        errorMessage: alreadyRegistered
            ? 'Este email já está registado. Queres entrar?'
            : rateLimited
            ? 'Muitos pedidos de email em pouco tempo — espera uns minutos e tenta novamente.'
            : 'Não foi possível criar a conta.',
      );
    } catch (_) {
      state = state.copyWith(
        status: AuthStatus.error,
        errorMessage: 'Não foi possível criar a conta.',
      );
    }
  }

  Future<void> login({required String email, required String password}) async {
    state = state.copyWith(
      status: AuthStatus.authenticating,
      errorMessage: null,
    );
    try {
      final response = await supabase.auth.signInWithPassword(
        email: email,
        password: password,
      );
      final user = response.user;
      if (user == null) {
        state = state.copyWith(
          status: AuthStatus.error,
          errorMessage: 'Não foi possível entrar.',
        );
        return;
      }
      final profile = await _loadProfile(user);
      state = AuthState(status: AuthState.statusFor(profile), profile: profile);
    } on AuthException catch (e) {
      final notConfirmed =
          e.message.toLowerCase().contains('not confirmed') ||
          e.message.toLowerCase().contains('email not confirmed');
      state = state.copyWith(
        status: AuthStatus.error,
        errorMessage: notConfirmed
            ? 'Confirma o teu email antes de entrar (verifica a tua caixa de correio).'
            : 'Email ou password incorretos.',
      );
    } catch (_) {
      state = state.copyWith(
        status: AuthStatus.error,
        errorMessage: 'Não foi possível entrar.',
      );
    }
  }

  /// Lê `profiles` (+ `partner_profiles` quando aplicável) para o
  /// utilizador com sessão ativa e monta o [Profile] usado pelo resto da
  /// app — único ponto de mapeamento entre o schema real e o modelo local,
  /// ver notas de campo por campo abaixo.
  Future<Profile> _loadProfile(User user) async {
    final row = await supabase
        .from('profiles')
        .select()
        .eq('id', user.id)
        .single();
    final role = switch (row['role'] as String?) {
      'partner' => UserRole.partner,
      'guest' => UserRole.guest,
      _ => UserRole.couple,
    };

    Map<String, dynamic>? partnerRow;
    List<String> categoryLabels = const [];
    if (role == UserRole.partner) {
      partnerRow = await supabase
          .from('partner_profiles')
          .select()
          .eq('id', user.id)
          .maybeSingle();
      final categoryRows = await supabase
          .from('partner_profile_categories')
          .select('partner_categories(label_pt)')
          .eq('partner_id', user.id);
      categoryLabels = categoryRows
          .map(
            (r) =>
                (r['partner_categories'] as Map<String, dynamic>?)?['label_pt']
                    as String?,
          )
          .whereType<String>()
          .toList();
    }

    return Profile(
      id: user.id,
      fullName: row['full_name'] as String? ?? '',
      email: user.email ?? '',
      password: '',
      role: role,
      emailVerified: user.emailConfirmedAt != null,
      onboardingComplete: row['onboarding_completed'] as bool? ?? false,
      // `location` não tem equivalente 1:1 no schema real (só existem
      // `service_areas`/`nationwide`) — deixado null. Ver ROADMAP.md.
      businessName: partnerRow?['business_name'] as String?,
      businessDescription: partnerRow?['description'] as String?,
      categoryLabels: categoryLabels,
      serviceAreas:
          (partnerRow?['service_areas'] as List?)?.cast<String>() ?? const [],
      yearsExperience: partnerRow?['years_experience'] as int?,
      website: partnerRow?['website_url'] as String?,
      instagram: partnerRow?['instagram_url'] as String?,
      phone: (partnerRow?['phone'] ?? row['phone']) as String?,
      contactEmail: partnerRow?['contact_email'] as String? ?? user.email,
      acceptingRequests: !(partnerRow?['is_paused'] as bool? ?? false),
      travelsForEvents: partnerRow?['nationwide'] as bool? ?? true,
      partnerProfileStatus: partnerRow?['status'] as String?,
      rejectionReason: partnerRow?['rejection_reason'] as String?,
      logoUrl: partnerRow?['cover_photo_url'] as String?,
      pricingMode: partnerRow?['pricing_mode'] as String?,
      avatarUrl: row['avatar_url'] as String?,
    );
  }

  /// O mock simulava "cliquei no link do email" localmente. Com Supabase
  /// real, a confirmação acontece fora da app (o link do email chama o
  /// Supabase diretamente); não guardamos a password para reautenticar
  /// automaticamente aqui. Em vez disso, verifica se entretanto já existe
  /// sessão (ex: o link foi aberto no mesmo browser) e, se não, manda o
  /// utilizador voltar ao login para entrar com a conta já confirmada.
  Future<void> confirmEmailVerified() async {
    state = state.copyWith(status: AuthStatus.authenticating);
    final user = supabase.auth.currentUser;
    if (user != null && user.emailConfirmedAt != null) {
      final profile = await _loadProfile(user);
      state = AuthState(status: AuthState.statusFor(profile), profile: profile);
      return;
    }
    state = state.copyWith(
      status: AuthStatus.error,
      errorMessage:
          'Ainda não detetámos a confirmação — depois de clicares no link do email, entra novamente.',
    );
  }

  Future<void> requestPasswordReset(String email) async {
    await supabase.auth.resetPasswordForEmail(email);
  }

  /// Partilhado por casal (fim do wizard, depois de `create()` em
  /// `wedding_controller.dart`) e parceiro (`partner_welcome_screen.dart`)
  /// — antes eram dois métodos distintos, um deles (`completeOnboarding`,
  /// lado casal) só atualizava o estado local sem gravar na base de dados
  /// real, o que faria o casal voltar ao wizard no login seguinte apesar de
  /// já ter um casamento criado. Unificados 2026-08-30 ao ligar a Fase 2.
  Future<void> completeOnboarding() async {
    final profile = state.profile;
    if (profile == null) return;
    state = state.copyWith(status: AuthStatus.authenticating);
    await supabase
        .from('profiles')
        .update({'onboarding_completed': true})
        .eq('id', profile.id);
    final updated = profile.copyWith(onboardingComplete: true);
    state = AuthState(status: AuthState.statusFor(updated), profile: updated);
  }

  /// Aplica um [Profile] já atualizado no backend (ex: depois de gravar
  /// Informações do negócio) ao estado local — sem repetir o pedido de
  /// login, ao contrário de [login]/[completeOnboarding].
  void refreshProfile(Profile updated) {
    state = state.copyWith(profile: updated);
  }

  /// Upload da foto de perfil da conta (`profiles.avatar_url`) — bucket
  /// dedicado `avatars` (`072_avatar_storage.sql`), mesmo padrão que
  /// `PartnerProfileController.uploadLogo` (ficheiro único por conta,
  /// `upsert: true`, caminho `{user_id}/avatar.{ext}`). Partilhado por
  /// toda a app, Modo convidado incluído — é a mesma coluna, por isso
  /// não há nenhum upload separado do lado do convidado.
  Future<void> uploadAvatarPhoto(XFile file) async {
    final profile = state.profile;
    if (profile == null) return;
    final bytes = await file.readAsBytes();
    final ext = file.name.contains('.') ? file.name.split('.').last.toLowerCase() : 'jpg';
    final path = '${profile.id}/avatar.$ext';

    await supabase.storage.from('avatars').uploadBinary(
      path,
      bytes,
      fileOptions: FileOptions(contentType: 'image/$ext', upsert: true),
    );
    final avatarUrl = supabase.storage.from('avatars').getPublicUrl(path);

    await supabase
        .from('profiles')
        .update({'avatar_url': avatarUrl})
        .eq('id', profile.id);

    refreshProfile(profile.copyWith(avatarUrl: avatarUrl));
  }

  Future<void> logout() async {
    await supabase.auth.signOut();
    state = const AuthState.unauthenticated();
  }

  void clearError() {
    if (state.status == AuthStatus.error) {
      state = state.copyWith(
        status: AuthStatus.unauthenticated,
        errorMessage: null,
      );
    }
  }
}

final authControllerProvider = NotifierProvider<AuthController, AuthState>(
  AuthController.new,
);
