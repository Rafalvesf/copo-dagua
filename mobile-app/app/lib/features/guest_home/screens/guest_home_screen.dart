import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// Home de quem se regista com `UserRole.guest` (`role_selection_screen.dart`,
/// "Sou convidado") — pedido explícito do utilizador (mockup de
/// referência): página de aterragem "O nosso casamento" (foto de capa,
/// contagem decrescente, data/local/hashtag, citação), em vez da lista
/// simples de casamentos que existia antes. Um convidado ligado a mais
/// do que um casamento (`wedding_guest_members` é many-to-many) vê o
/// mais recente aqui; os outros continuam acessíveis, mas este ecrã
/// deixou de listar todos de propósito — mostrar vários "O nosso
/// casamento" ao mesmo tempo não fazia sentido para o mockup pedido.
class GuestHomeScreen extends ConsumerWidget {
  /// Presente só quando aberto a partir de "Modo convidado"
  /// (`guest_mode_screen.dart`, `/guest-home/:weddingId`) — uma conta
  /// de casal pode estar ligada a mais do que um casamento como
  /// convidado, por isso escolhe explicitamente qual mostrar em vez de
  /// assumir sempre `weddings.first`.
  final String? weddingId;

  const GuestHomeScreen({super.key, this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    final weddingsAsync = ref.watch(guestWeddingsProvider);

    // Completa um convite individual aberto sem sessão
    // (`invite_token_screen.dart` guardou o token e mandou para
    // login/registo) agora que a conta já está ativa.
    final pendingToken = ref.watch(pendingInviteTokenProvider);
    if (pendingToken != null) {
      ref.read(pendingInviteTokenProvider.notifier).set(null);
      WidgetsBinding.instance.addPostFrameCallback((_) async {
        try {
          final result = await joinWeddingByInviteToken(pendingToken);
          ref.invalidate(guestWeddingsProvider);
          ref.invalidate(myGuestRowProvider(result.weddingId));
        } catch (_) {}
      });
    }

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: weddingsAsync.when(
              loading: () => const Center(child: CircularProgressIndicator()),
              error: (err, st) => const Center(
                child: Text('Não foi possível carregar o teu casamento.'),
              ),
              data: (weddings) {
                if (weddings.isEmpty) {
                  return _EmptyState(profile: profile, ref: ref);
                }
                final wedding = weddingId == null
                    ? weddings.first
                    : weddings.where((w) => w.weddingId == weddingId).firstOrNull ?? weddings.first;

                // Mostra o wizard "Vais ao casamento?" uma única vez,
                // assim que a conta fica ligada a uma linha de `guests`
                // (`onboarding_completed_at is null`) — pedido explícito
                // do utilizador, ver `073_guest_onboarding_wizard.sql`.
                ref.watch(myGuestRowProvider(wedding.weddingId)).whenData((guest) {
                  if (guest != null && guest.onboardingCompletedAt == null) {
                    WidgetsBinding.instance.addPostFrameCallback((_) {
                      if (context.mounted) {
                        context.push('/guest-onboarding/${wedding.weddingId}', extra: guest);
                      }
                    });
                  }
                });

                return _GuestHomeBody(wedding: wedding);
              },
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: GuestBottomNav(current: GuestTab.home, weddingId: weddingId),
          ),
        ],
      ),
    );
  }
}

extension _FirstOrNull<T> on Iterable<T> {
  T? get firstOrNull => isEmpty ? null : first;
}

class _EmptyState extends StatelessWidget {
  final dynamic profile;
  final WidgetRef ref;

  const _EmptyState({required this.profile, required this.ref});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.all(24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          const SizedBox(height: 40),
          Text(
            'Olá${profile?.fullName?.isNotEmpty == true ? ', ${profile.fullName.split(' ').first}' : ''}!',
            style: Theme.of(context).textTheme.headlineSmall,
          ),
          const SizedBox(height: 16),
          const Text(
            'Ainda não tens nenhum casamento associado a esta conta. Pede aos noivos o código do casal e junta-te nas Definições.',
          ),
          const SizedBox(height: 24),
          Center(
            child: TextButton.icon(
              onPressed: () => ref.read(authControllerProvider.notifier).logout(),
              icon: const Icon(Icons.logout),
              label: const Text('Sair'),
            ),
          ),
        ],
      ),
    );
  }
}

class _GuestHomeBody extends StatelessWidget {
  final GuestWedding wedding;

  const _GuestHomeBody({required this.wedding});

  @override
  Widget build(BuildContext context) {
    return ListView(
      padding: const EdgeInsets.fromLTRB(
        AppTheme.screenMargin,
        20,
        AppTheme.screenMargin,
        120,
      ),
      children: [
        // Espaçador invisível equivalente à linha de ícones + gap do
        // PageHeader (46 + 18 = 64) — este título fica centrado (pedido
        // explícito), mas sem isto arrancava a 20px do topo em vez de
        // 84px como Galeria/Presentes/Perfil, ficando visivelmente mais
        // alto que o resto da navbar de convidado.
        const SizedBox(height: 64),
        Text(
          'O nosso casamento',
          textAlign: TextAlign.center,
          style: AppTypography.displaySerif(fontSize: 26, color: AppTheme.ink),
        ),
        const SizedBox(height: 8),
        Text(
          wedding.displayNames,
          textAlign: TextAlign.center,
          style: AppTypography.displaySerif(fontSize: 20, color: AppTheme.ink),
        ),
        const SizedBox(height: 8),
        const Text(
          'Estamos felizes por te ter connosco!',
          textAlign: TextAlign.center,
          style: TextStyle(color: AppTheme.inkMuted),
        ),
        const SizedBox(height: 28),
        ClipRRect(
          borderRadius: BorderRadius.circular(24),
          child: AspectRatio(
            aspectRatio: 4 / 3,
            child: wedding.coverPhotoUrl == null
                ? Container(
                    color: AppTheme.surface,
                    alignment: Alignment.center,
                    child: const Icon(Icons.favorite_border, size: 40, color: AppTheme.inkMuted),
                  )
                : Image.network(wedding.coverPhotoUrlCacheBusted!, fit: BoxFit.cover),
          ),
        ),
        const SizedBox(height: 28),
        _CountdownCard(weddingDate: wedding.weddingDate),
        const SizedBox(height: 10),
        Center(
          child: SnappyTap(
            onTap: () => context.push('/guest-wedding-details', extra: wedding),
            child: const Row(
              mainAxisSize: MainAxisSize.min,
              children: [
                Text(
                  'Mais detalhes',
                  style: TextStyle(color: AppTheme.accentOliveDark, fontWeight: FontWeight.w700, fontSize: 13),
                ),
                SizedBox(width: 4),
                Icon(Icons.chevron_right, size: 16, color: AppTheme.accentOliveDark),
              ],
            ),
          ),
        ),
        const SizedBox(height: 24),
        IntrinsicHeight(
          child: Row(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Expanded(
                child: _FactColumn(
                  icon: Icons.calendar_today_outlined,
                  label: wedding.weddingDate == null
                      ? 'Data por definir'
                      : formatWeddingDateCaps(wedding.weddingDate!),
                ),
              ),
              const VerticalDivider(color: AppTheme.borderMuted, width: 1),
              Expanded(
                child: _FactColumn(
                  icon: Icons.place_outlined,
                  label: [
                    if (wedding.venue?.isNotEmpty == true) wedding.venue!,
                    if (wedding.location?.isNotEmpty == true) wedding.location!,
                  ].join(', ').isEmpty
                      ? 'Local a confirmar'
                      : [
                          if (wedding.venue?.isNotEmpty == true) wedding.venue!,
                          if (wedding.location?.isNotEmpty == true) wedding.location!,
                        ].join(', '),
                ),
              ),
              const VerticalDivider(color: AppTheme.borderMuted, width: 1),
              Expanded(
                child: _FactColumn(icon: Icons.favorite_border, label: wedding.hashtag),
              ),
            ],
          ),
        ),
        const SizedBox(height: 32),
        SnappyTap(
          onTap: () => context.push('/guest-wedding-details', extra: wedding),
          child: Text(
            '"${wedding.quote?.isNotEmpty == true ? wedding.quote : 'Grandes momentos são ainda melhores quando partilhados.'}"',
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontStyle: FontStyle.italic,
              color: AppTheme.ink,
              fontSize: 14.5,
            ),
          ),
        ),
      ],
    );
  }
}

class _FactColumn extends StatelessWidget {
  final IconData icon;
  final String label;

  const _FactColumn({required this.icon, required this.label});

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Icon(icon, size: 18, color: AppTheme.ink),
        const SizedBox(height: 6),
        Text(
          label,
          textAlign: TextAlign.center,
          maxLines: 2,
          overflow: TextOverflow.ellipsis,
          style: const TextStyle(fontSize: 11.5, fontWeight: FontWeight.w600, color: AppTheme.ink),
        ),
      ],
    );
  }
}

class _CountdownCard extends StatefulWidget {
  final DateTime? weddingDate;

  const _CountdownCard({required this.weddingDate});

  @override
  State<_CountdownCard> createState() => _CountdownCardState();
}

class _CountdownCardState extends State<_CountdownCard> {
  Timer? _timer;

  @override
  void initState() {
    super.initState();
    _timer = Timer.periodic(const Duration(seconds: 1), (_) {
      if (mounted) setState(() {});
    });
  }

  @override
  void dispose() {
    _timer?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final date = widget.weddingDate;
    if (date == null) return const SizedBox.shrink();

    final remaining = date.difference(DateTime.now());

    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(20),
      ),
      child: remaining.isNegative
          ? const Text(
              'É hoje! 🎉',
              textAlign: TextAlign.center,
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: 16, color: AppTheme.ink),
            )
          : Column(
              children: [
                const Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Icon(Icons.hourglass_empty, size: 15, color: AppTheme.inkMuted),
                    SizedBox(width: 6),
                    Text(
                      'Faltam apenas',
                      style: TextStyle(color: AppTheme.inkMuted, fontWeight: FontWeight.w600, fontSize: 12.5),
                    ),
                  ],
                ),
                const SizedBox(height: 12),
                Row(
                  children: [
                    Expanded(child: _CountdownBox(value: remaining.inDays, label: 'Dias')),
                    const SizedBox(width: 8),
                    Expanded(child: _CountdownBox(value: remaining.inHours % 24, label: 'Horas')),
                    const SizedBox(width: 8),
                    Expanded(child: _CountdownBox(value: remaining.inMinutes % 60, label: 'Minutos')),
                    const SizedBox(width: 8),
                    Expanded(child: _CountdownBox(value: remaining.inSeconds % 60, label: 'Segundos')),
                  ],
                ),
              ],
            ),
    );
  }
}

/// Cartão simples "nome · data · local" — usado por `guest_mode_screen.dart`
/// (uma conta de casal a acompanhar outro casamento como convidado),
/// distinto do corpo rico de [_GuestHomeBody] (só faz sentido para o
/// casamento principal de uma conta 100% convidado).
class GuestWeddingCard extends StatelessWidget {
  final GuestWedding wedding;
  final VoidCallback? onTap;

  const GuestWeddingCard({super.key, required this.wedding, this.onTap});

  @override
  Widget build(BuildContext context) {
    final date = wedding.weddingDate;
    final dateLabel = date == null
        ? null
        : '${date.day.toString().padLeft(2, '0')}/${date.month.toString().padLeft(2, '0')}/${date.year}';

    return SnappyTap(
      onTap: onTap ?? () => context.push('/guest-home/${wedding.weddingId}'),
      child: Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(20),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              wedding.displayNames,
              style: const TextStyle(
                fontWeight: FontWeight.w800,
                fontSize: 16,
                color: AppTheme.ink,
              ),
            ),
            if (dateLabel != null || wedding.venue != null) ...[
              const SizedBox(height: 6),
              Text(
                [
                  if (dateLabel != null) dateLabel,
                  if (wedding.venue != null) wedding.venue!,
                ].join(' · '),
                style: TextStyle(color: AppTheme.inkMuted, fontSize: 13),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

class _CountdownBox extends StatelessWidget {
  final int value;
  final String label;

  const _CountdownBox({required this.value, required this.label});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(
          value.toString().padLeft(2, '0'),
          style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 22, color: AppTheme.ink),
        ),
        const SizedBox(height: 2),
        Text(label, style: const TextStyle(color: AppTheme.inkMuted, fontSize: 11)),
      ],
    );
  }
}
