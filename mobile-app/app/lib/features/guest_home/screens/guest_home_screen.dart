import 'dart:async';

import 'package:flutter/material.dart';
import '../../../shared/widgets/open_tile.dart';
import 'guest_wedding_details_screen.dart';
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
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/mascot.dart';
import 'guest_table_screen.dart';

/// Home de quem se regista com `UserRole.guest` (`role_selection_screen.dart`,
/// "Sou convidado") — pedido explícito do utilizador (mockup de
/// referência): página de aterragem "O nosso casamento" (foto de capa,
/// contagem decrescente, data/local/hashtag, citação), em vez da lista
/// simples de casamentos que existia antes. Um convidado ligado a mais
/// do que um casamento (`wedding_guest_members` é many-to-many) vê o
/// mais recente aqui; os outros continuam acessíveis, mas este ecrã
/// deixou de listar todos de propósito — mostrar vários "O nosso
/// casamento" ao mesmo tempo não fazia sentido para o mockup pedido.
/// Eventos cujo assistente "Vais?" já foi aberto nesta sessão.
final Set<String> _openedOnboarding = {};

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
              error: (err, st) => AsyncErrorView(message: 'Não foi possível carregar o teu casamento.', onRetry: () => ref.invalidate(guestWeddingsProvider)),
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
                // Só uma vez por evento: antes, cada reconstrução deste ecrã
                // (ex.: depois de entrar com o código numa conta de
                // organizador) empilhava mais um assistente por cima do
                // outro e a app bloqueava (2026-10-17).
                ref.watch(myGuestRowProvider(wedding.weddingId)).whenData((guest) {
                  if (guest != null &&
                      guest.onboardingCompletedAt == null &&
                      // Por conta e evento: antes era só o evento, e quem criava
                      // uma conta nova no mesmo separador (depois de testar
                      // com outra conta) nunca via o onboarding (2026-10-17).
                      _openedOnboarding.add('${profile?.id}:${wedding.weddingId}')) {
                    WidgetsBinding.instance.addPostFrameCallback((_) {
                      if (context.mounted) {
                        context.push('/guest-onboarding/${wedding.weddingId}', extra: guest);
                      }
                    });
                  }
                });

                return _GuestHomeBody(wedding: wedding, eventCount: weddings.length);
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

class _GuestHomeBody extends ConsumerWidget {
  final GuestWedding wedding;
  final int eventCount;

  const _GuestHomeBody({required this.wedding, required this.eventCount});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Redesign 2026-10-17 (canvas "Convidado · Evento" e "É hoje!").
    final date = wedding.weddingDate;
    final now = DateTime.now();
    final isToday = date != null && date.year == now.year && date.month == now.month && date.day == now.day;
    final guestAsync = ref.watch(myGuestRowProvider(wedding.weddingId));
    final tableAsync = ref.watch(mySeatingTableProvider(wedding.weddingId));
    final table = tableAsync.maybeWhen(data: (t) => t, orElse: () => null);
    final place = [
      if (wedding.venue?.isNotEmpty == true) wedding.venue!,
      if (wedding.location?.isNotEmpty == true) wedding.location!,
    ].join(', ');

    return ListView(
      padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 120),
      children: [
        if (eventCount > 1)
          Align(
            alignment: Alignment.centerLeft,
            child: SnappyTap(
              onTap: () => context.push('/guest-events'),
              child: const Padding(
                padding: EdgeInsets.symmetric(vertical: 6),
                child: Row(
                  mainAxisSize: MainAxisSize.min,
                  children: [
                    Icon(Icons.chevron_left, size: 18, color: AppTheme.inkMuted),
                    Text('Os teus eventos', style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
                  ],
                ),
              ),
            ),
          )
        else
          const SizedBox(height: 18),
        if (isToday) ...[
          const Center(child: TchinMascot(pose: MascotPose.clink, width: 180)),
          const SizedBox(height: 10),
          Text(
            '${wedding.eventType.label.toUpperCase()} · ${wedding.displayNames.toUpperCase()}',
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.accentOliveDark),
          ),
          const SizedBox(height: 6),
          const Text(
            'É hoje!',
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 36, height: 42 / 36, fontWeight: FontWeight.w700, color: AppTheme.ink),
          ),
          const SizedBox(height: 20),
        ] else
          _HeroCard(wedding: wedding, place: place),
        const SizedBox(height: 14),
        guestAsync.maybeWhen(
          data: (guest) => guest == null ? const SizedBox.shrink() : _RsvpCard(guest: guest, weddingId: wedding.weddingId),
          orElse: () => const SizedBox.shrink(),
        ),
        const SizedBox(height: 14),
        GridView.count(
          crossAxisCount: 2,
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          mainAxisSpacing: 10,
          crossAxisSpacing: 10,
          childAspectRatio: 1.35,
          children: [
            _Tile(
              icon: Icons.schedule_outlined,
              title: 'Programa',
              subtitle: wedding.ceremonyTime?.isNotEmpty == true ? 'Começa às ${wedding.ceremonyTime}' : 'Horários e local',
              page: (_) => GuestWeddingDetailsScreen(wedding: wedding),
            ),
            _Tile(
              icon: Icons.table_restaurant_outlined,
              title: 'A tua mesa',
              subtitle: table == null ? 'Ainda não atribuída' : 'Mesa $table',
              page: (_) => GuestTableScreen(weddingId: wedding.weddingId, tableNumber: table),
            ),
            _Tile(
              icon: Icons.card_giftcard_outlined,
              title: 'Presentes',
              subtitle: 'Lista e contribuições',
              onTap: () => context.go('/guest-gifts/${wedding.weddingId}'),
            ),
            _Tile(
              icon: isToday ? Icons.photo_camera_outlined : Icons.photo_library_outlined,
              title: isToday ? 'Partilhar fotos' : 'Galeria',
              subtitle: isToday ? 'Vão para a galeria' : 'Fotos do evento',
              tint: isToday ? const Color(0xFFFBF6E9) : null,
              onTap: () => context.go('/guest-gallery/${wedding.weddingId}'),
            ),
          ],
        ),
      ],
    );
  }
}

class _HeroCard extends StatelessWidget {
  final GuestWedding wedding;
  final String place;
  const _HeroCard({required this.wedding, required this.place});

  @override
  Widget build(BuildContext context) {
    final date = wedding.weddingDate;
    final meta = [
      if (date != null) formatWeddingDateCaps(date),
      if (wedding.ceremonyTime?.isNotEmpty == true) wedding.ceremonyTime!,
      if (place.isNotEmpty) place,
    ].join(' · ');
    return Container(
      padding: const EdgeInsets.fromLTRB(20, 20, 20, 16),
      decoration: BoxDecoration(
        borderRadius: BorderRadius.circular(26),
        image: wedding.coverPhotoUrl == null
            ? null
            : DecorationImage(
                image: NetworkImage(wedding.coverPhotoUrlCacheBusted!),
                fit: BoxFit.cover,
                colorFilter: ColorFilter.mode(Colors.white.withValues(alpha: 0.55), BlendMode.lighten),
              ),
        gradient: wedding.coverPhotoUrl != null
            ? null
            : const LinearGradient(
                begin: Alignment(-0.6, -1),
                end: Alignment(0.6, 1),
                colors: [Color(0xFFDDE5D3), Color(0xFFF7EACA), Color(0xFFF3DEE0)],
                stops: [0, 0.6, 1],
              ),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.8), borderRadius: BorderRadius.circular(999)),
            child: Text(
              wedding.eventType.label,
              style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark),
            ),
          ),
          const SizedBox(height: 10),
          Text(
            wedding.displayNames,
            style: const TextStyle(fontSize: 32, height: 36 / 32, fontWeight: FontWeight.w700, color: AppTheme.ink),
          ),
          if (meta.isNotEmpty) ...[
            const SizedBox(height: 6),
            Text(meta, style: const TextStyle(fontSize: AppFontSize.base, color: AppTheme.inkMuted)),
          ],
          if (date != null) ...[
            const SizedBox(height: 12),
            _CountdownCard(weddingDate: date),
          ],
        ],
      ),
    );
  }
}

class _RsvpCard extends StatelessWidget {
  final Guest guest;
  final String weddingId;
  const _RsvpCard({required this.guest, required this.weddingId});

  @override
  Widget build(BuildContext context) {
    final people = 1 + (guest.plusOneName?.isNotEmpty == true ? 1 : 0);
    final (title, subtitle, icon, filled) = switch (guest.rsvpStatus) {
      RsvpStatus.confirmed => (
          'Vais · $people ${people == 1 ? 'pessoa' : 'pessoas'}',
          [
            guest.plusOneName?.isNotEmpty == true ? 'Tu e ${guest.plusOneName}' : 'Só tu',
            if (guest.menuSelection?.isNotEmpty == true) 'menu escolhido',
          ].join(' · '),
          Icons.check_rounded,
          true,
        ),
      RsvpStatus.declined => ('Não vais', 'Podes mudar a resposta', Icons.close_rounded, false),
      RsvpStatus.pending => ('Ainda não respondeste', 'Diz aos anfitriões se vais', Icons.help_outline_rounded, false),
    };
    return SnappyTap(
      onTap: () => context.go('/guest-profile/$weddingId'),
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(18),
          border: Border.all(color: AppTheme.accentOliveDark),
          boxShadow: AppTheme.searchBarShadow,
        ),
        child: Row(
          children: [
            Container(
              width: 36,
              height: 36,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: filled ? AppTheme.accentOliveDark : AppColors.gray,
              ),
              child: Icon(icon, size: 18, color: filled ? Colors.white : AppTheme.accentOliveDark),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(title, style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  Text(subtitle, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                ],
              ),
            ),
            const Text('Alterar', style: TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
          ],
        ),
      ),
    );
  }
}

class _Tile extends StatelessWidget {
  final IconData icon;
  final String title;
  final String subtitle;
  final VoidCallback? onTap;
  final Color? tint;

  /// Programa e A tua mesa abrem a crescer a partir do cartão; Presentes
  /// e Galeria são separadores da barra de baixo e navegam normalmente.
  final WidgetBuilder? page;
  const _Tile({required this.icon, required this.title, required this.subtitle, this.onTap, this.tint, this.page});

  @override
  Widget build(BuildContext context) {
    final card = _card();
    if (page != null) return OpenTile(color: tint ?? AppTheme.surface, page: page!, child: card);
    return SnappyTap(onTap: onTap, child: card);
  }

  Widget _card() {
    return Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(color: tint ?? AppTheme.surface, borderRadius: BorderRadius.circular(20)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 36,
              height: 36,
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(12)),
              child: Icon(icon, size: 20, color: AppTheme.accentOliveDark),
            ),
            const Spacer(),
            Text(title, style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 2),
            Text(subtitle, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
          ],
        ),
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
          style: const TextStyle(fontSize: AppFontSize.xs, fontWeight: FontWeight.w600, color: AppTheme.ink),
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
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      child: remaining.isNegative
          ? const Text(
              'É hoje! 🎉',
              textAlign: TextAlign.center,
              style: TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.lg, color: AppTheme.ink),
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
                      style: TextStyle(color: AppTheme.inkMuted, fontWeight: FontWeight.w600, fontSize: AppFontSize.sm),
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
          borderRadius: BorderRadius.circular(AppRadius.lg),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              wedding.displayNames,
              style: const TextStyle(
                fontWeight: FontWeight.w800,
                fontSize: AppFontSize.lg,
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
                style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
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
          style: const TextStyle(fontWeight: FontWeight.w800, fontSize: AppFontSize.h3, color: AppTheme.ink),
        ),
        const SizedBox(height: 2),
        Text(label, style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.xs)),
      ],
    );
  }
}
