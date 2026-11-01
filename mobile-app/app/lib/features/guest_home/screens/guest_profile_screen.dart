import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/auth/auth_controller.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/initials_avatar.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import 'guest_table_screen.dart';
import '../../settings/screens/settings_screen.dart' show GuestAccountSections;
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';

/// "O meu perfil" — pedido explícito do utilizador (mockup de
/// referência): o próprio convidado a ver/editar a sua presença
/// (acompanhante, alergias, telefone) e a consultar a mesa atribuída,
/// em vez de só o casal poder ver isto em [GuestDetailScreen]. Só
/// funciona quando a conta está ligada a uma linha de `guests`
/// (`linked_profile_id`, `067_guest_self_service.sql`) — sem
/// correspondência automática por email no registo, mostra um estado
/// vazio em vez de inventar dados.
class GuestProfileScreen extends ConsumerWidget {
  /// Presente só quando aberto a partir de "Modo convidado"
  /// (conta de casal a acompanhar outro casamento), ver [GuestHomeScreen].
  final String? weddingId;

  const GuestProfileScreen({super.key, this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    final weddingsAsync = ref.watch(guestWeddingsProvider);
    final isCouple = profile?.role == UserRole.couple;

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                // Ecrã raiz da navbar (Perfil) — sem seta de voltar,
                // mesma convenção de todos os outros separadores raiz
                // da app (Chat, Tarefas, Pedidos, "O meu perfil" do
                // parceiro, Mensagens, Galeria). `trailing` com a roda
                // de definições mantém a linha de ícones (senão o
                // título subia, tal como em `gallery_screen.dart`).
                Expanded(
                  child: weddingsAsync.when(
                    loading: () => const Center(child: CircularProgressIndicator()),
                    error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(guestWeddingsProvider)),
                    data: (weddings) {
                      if (weddings.isEmpty || profile == null) {
                        return const EmptyStateView(message: 'Ainda sem casamento associado.', icon: Icons.favorite_border);
                      }
                      final resolvedWeddingId = weddingId == null
                          ? weddings.first.weddingId
                          : (weddings.any((w) => w.weddingId == weddingId) ? weddingId! : weddings.first.weddingId);
                      return _GuestProfileBody(weddingId: resolvedWeddingId, profile: profile, onMore: () => _openSettings(context, ref, isCouple));
                    },
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: GuestBottomNav(current: GuestTab.profile, weddingId: weddingId),
          ),
        ],
      ),
    );
  }
}

/// Uma conta de casal a acompanhar outro casamento em "Modo convidado"
/// tem o seu próprio casamento em `weddingControllerProvider`, por isso
/// `/settings` (`settings_screen.dart`) funciona normalmente — mostra
/// as definições do casamento REAL do casal, não do casamento que estão
/// a visitar como convidados, o que é o comportamento certo. Uma conta
/// 100% convidada não tem casamento próprio (`SettingsScreen` fica
/// perpetuamente a carregar à espera de `weddingControllerProvider`),
/// por isso mostra uma folha mínima com só "Sair" em vez de abrir esse
/// ecrã, que nunca foi desenhado para este caso.
void _openSettings(BuildContext context, WidgetRef ref, bool isCouple) {
  // Casal em modo convidado volta às definições do casamento; convidado
  // abre as Definições da conta dele (mesmo ecrã, conteúdo por tipo de
  // conta — ver `settings_screen.dart`). Antes o convidado só tinha um
  // menu com "Sair".
  context.push('/settings', extra: isCouple);
}

/// Substitui a antiga snackbar "Foto de perfil em breve." — mesma
/// coluna partilhada por toda a app (`profiles.avatar_url`), por isso
/// um único caminho de upload aqui já "sincroniza" tudo o resto que a
/// lê (incluindo uma conta de casal a ver a mesma foto).
Future<void> _pickAndUploadAvatar(BuildContext context, WidgetRef ref) async {
  final file = await ImagePicker().pickImage(source: ImageSource.gallery, imageQuality: 85);
  if (file == null) return;
  try {
    await ref.read(authControllerProvider.notifier).uploadAvatarPhoto(file);
  } catch (_) {
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Não foi possível enviar a foto. Tenta novamente.')),
      );
    }
  }
}

/// "Abrir link de convite" no estado vazio — aceita tanto um link
/// completo (`.../i/{token}`) como só o token, e liga a conta a essa
/// linha específica de `guests` via `joinWeddingByInviteToken()`
/// (`071_guest_join_mode_and_invite_token.sql`), sem nunca criar uma
/// linha nova (um token só existe para uma que o casal já criou).
Future<void> _openInviteLinkDialog(BuildContext context, WidgetRef ref) async {
  final controller = TextEditingController();
  final input = await showIslandDialog<String>(
    context: context,
    builder: (context) => IslandAlert(
      title: const Text('Link de convite'),
      content: TextField(
        controller: controller,
        autofocus: true,
        decoration: const InputDecoration(hintText: 'Cola aqui o link ou código do convite'),
      ),
      actions: [
        TextButton(onPressed: () => Navigator.of(context).pop(), child: const Text('Cancelar')),
        FilledButton(
          onPressed: () => Navigator.of(context).pop(controller.text.trim()),
          child: const Text('Associar'),
        ),
      ],
    ),
  );
  if (input == null || input.isEmpty) return;

  final token = input.contains('/') ? input.split('/').last : input;
  try {
    final result = await joinWeddingByInviteToken(token);
    ref.invalidate(guestWeddingsProvider);
    ref.invalidate(myGuestRowProvider(result.weddingId));
  } catch (e) {
    if (!context.mounted) return;
    final message = e is PostgrestException && e.code == 'P0002'
        ? 'Link inválido — confirma com os noivos.'
        : e is PostgrestException && e.code == 'P0007'
        ? 'Este convite já está associado a outra conta.'
        : 'Não foi possível associar o convite. Tenta novamente.';
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(message)));
  }
}

class _GuestProfileBody extends ConsumerWidget {
  final String weddingId;
  final Profile profile;

  final VoidCallback onMore;

  const _GuestProfileBody({required this.weddingId, required this.profile, required this.onMore});

  Future<void> _editField(
    BuildContext context,
    WidgetRef ref, {
    required String title,
    required Guest guest,
    required String? Function(Guest) currentValue,
    required Future<void> Function(String? value) onSave,
  }) async {
    final controller = TextEditingController(text: currentValue(guest) ?? '');
    final result = await showIslandDialog<String>(
      context: context,
      builder: (context) => IslandAlert(
        title: Text(title),
        content: TextField(controller: controller, autofocus: true),
        actions: [
          TextButton(onPressed: () => Navigator.of(context).pop(), child: const Text('Cancelar')),
          FilledButton(
            onPressed: () => Navigator.of(context).pop(controller.text.trim()),
            child: const Text('Guardar'),
          ),
        ],
      ),
    );
    if (result == null) return;
    try {
      await onSave(result.isEmpty ? null : result);
    } catch (_) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')),
        );
      }
      return;
    }
    ref.invalidate(myGuestRowProvider(weddingId));
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Canvas "Convidado · A tua presença".
    final guestAsync = ref.watch(myGuestRowProvider(weddingId));
    final isOrganizer = ref.watch(weddingControllerProvider.select((s) => s.events.any((w) => w.id == weddingId)));
    final tableAsync = ref.watch(mySeatingTableProvider(weddingId));

    return guestAsync.when(
      loading: () => const Center(child: CircularProgressIndicator()),
      error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(myGuestRowProvider(weddingId))),
      data: (guest) {
        final companions = guest == null
            ? const <GuestCompanion>[]
            : ref.watch(guestCompanionsProvider(guest.id)).maybeWhen(data: (c) => c, orElse: () => const <GuestCompanion>[]);
        final subtitle = guest == null
            ? profile.email
            : [
                if (guest.group.isNotEmpty) guest.group,
                switch (guest.side) {
                  WeddingSide.bride => 'Lado da noiva',
                  WeddingSide.groom => 'Lado do noivo',
                  WeddingSide.both => '',
                },
              ].where((t) => t.isNotEmpty).join(' · ');
        // Mesmo estilo dos perfis do organizador e do parceiro
        // (pedido 2026-10-17): título grande, foto redonda com câmara,
        // e secções com títulos em maiúsculas e linhas com divisórias.
        return ListView(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 140),
          children: [
            // Redesign 2026-10-19 (canvas "Convidado — perfil (redesign)").
            const SizedBox(
              height: 46,
              child: Center(
                child: Text(
                  'Perfil',
                  style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink),
                ),
              ),
            ),
            const SizedBox(height: 18),
            _GuestHeader(
              name: profile.fullName,
              email: profile.email,
              avatarUrl: profile.avatarUrl,
              chip: profile.role == UserRole.couple ? 'Em modo convidado' : (subtitle.isEmpty || guest == null ? 'Convidado' : subtitle),
              onChangePhoto: () => _pickAndUploadAvatar(context, ref),
            ),
            const SizedBox(height: 18),
            // Sem linha na lista de convidados (pedido 2026-11: a
            // mensagem antiga aparecia a quem organiza o próprio evento e
            // a quem já tinha entrado com o código).
            if (guest == null)
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(16),
                decoration: softCard(),
                child: isOrganizer
                    ? Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          const Text(
                            'Estás a ver o teu evento como os convidados o veem.',
                            style: TextStyle(color: AppTheme.ink, fontWeight: FontWeight.w700, fontSize: AppFontSize.base),
                          ),
                          const SizedBox(height: 6),
                          const Text(
                            'Como organizas este evento, não tens resposta, menu nem mesa aqui.',
                            style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
                          ),
                          const SizedBox(height: 16),
                          PrimaryButton(
                            label: 'Voltar ao modo organizador',
                            onPressed: () async {
                              await ref.read(weddingControllerProvider.notifier).select(weddingId);
                              if (context.mounted) context.go('/wedding');
                            },
                          ),
                        ],
                      )
                    : Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          const Text(
                            'Ainda não estás na lista de convidados deste evento.',
                            style: TextStyle(color: AppTheme.ink, fontWeight: FontWeight.w700, fontSize: AppFontSize.base),
                          ),
                          const SizedBox(height: 6),
                          const Text(
                            'Este evento é só por convite. Assim que o organizador te puser na lista, podes responder, escolher o menu e ver a tua mesa.',
                            style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
                          ),
                          const SizedBox(height: 10),
                          TextButton(
                            onPressed: () => _openInviteLinkDialog(context, ref),
                            child: Text('Recebi um link de convite',
                                style: TextStyle(color: AppTheme.accentOliveDark, fontWeight: FontWeight.w700)),
                          ),
                        ],
                      ),
              )
            else ...[
              const _Caps('A tua resposta'),
              _Segmented(
                going: guest.rsvpStatus != RsvpStatus.declined,
                onChanged: (going) async {
                  try {
                    await completeGuestOnboarding(
                      attending: going,
                      plusOneName: guest.plusOneName,
                      menuSelection: guest.menuSelection,
                      dietaryRestrictions: guest.dietaryRestrictions,
                      side: guest.side,
                      groupLabel: guest.group.isEmpty ? null : guest.group,
                    );
                    ref.invalidate(myGuestRowProvider(weddingId));
                  } catch (_) {
                    if (context.mounted) {
                      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível mudar a resposta.')));
                    }
                  }
                },
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(0, 24, 0, 6),
                child: Row(
                children: [
                  const Expanded(
                    child: Text(
                      'Quem vai',
                      style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink),
                    ),
                  ),
                  // Só enquanto houver lugar, segundo o limite dado pelo
                  // organizador (091).
                  if (companions.length < guest.maxCompanions)
                    SnappyTap(
                      onTap: () async {
                        // Nome, idade e telemóvel/email (2026-10-19): com o
                        // contacto o acompanhante pode depois entrar na app
                        // e ficar ligado a esta resposta.
                        final added = await _companionSheet(context);
                        if (added == null) return;
                        await saveGuestCompanions(
                          guestId: guest.id,
                          weddingId: weddingId,
                          companions: [...companions, added],
                        );
                        ref.invalidate(guestCompanionsProvider(guest.id));
                      },
                      child: Text('+ Acompanhante', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
                    ),
                ],
              ),
              ),
              Padding(
                padding: const EdgeInsets.only(bottom: 12),
                child: Text(
                  guest.maxCompanions == 0
                      ? 'Este convite é só para ti.'
                      : 'Podes levar até ${guest.maxCompanions} ${guest.maxCompanions == 1 ? 'pessoa' : 'pessoas'} (${companions.length} indicada${companions.length == 1 ? '' : 's'}).',
                  style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
                ),
              ),
              _PersonLine(
                initials: _initialsOf(profile.fullName),
                color: AppColors.yellow,
                name: 'Tu',
                detail: [
                  guest.menuSelection?.isNotEmpty == true ? guest.menuSelection! : 'Menu por escolher',
                  guest.dietaryRestrictions?.isNotEmpty == true ? guest.dietaryRestrictions! : 'Sem alergias',
                ].join(' · '),
                status: 'Conta ligada',
                onTap: () => _editMe(context, ref, guest),
              ),
              if (companions.isNotEmpty)
                for (final c in companions)
                  _PersonLine(
                    initials: _initialsOf(c.name),
                    color: AppTheme.accentTint,
                    name: c.isChild && c.childAge != null ? '${c.name} · ${c.childAge} anos' : c.name,
                    detail: [c.menu ?? 'Menu por escolher', c.allergies.isEmpty ? 'Sem alergias' : c.allergies.join(', ')].join(' · '),
                    status: c.phone?.isNotEmpty == true ? 'Telemóvel ${c.phone}' : 'Sem contacto',
                    muted: c.phone?.isNotEmpty != true,
                    onTap: () async {
                      final edited = await _companionSheet(context, existing: c);
                      if (edited == null) return;
                      await saveGuestCompanions(
                        guestId: guest.id,
                        weddingId: weddingId,
                        companions: [
                          for (final o in companions)
                            if (!identical(o, c)) o else if (edited.name.isNotEmpty) edited,
                        ],
                      );
                      ref.invalidate(guestCompanionsProvider(guest.id));
                    },
                  )
              else if (guest.plusOneName?.isNotEmpty == true)
                _PersonLine(
                  initials: _initialsOf(guest.plusOneName!),
                  color: AppTheme.accentTint,
                  name: guest.plusOneName!,
                  detail: 'Acompanhante',
                  status: 'Sem conta — está contigo',
                  muted: true,
                ),
              const _Caps('Detalhes'),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 2),
                decoration: softCard(),
                child: Column(children: [
              _InfoLine(
                icon: Icons.table_restaurant_outlined,
                label: 'A tua mesa',
                value: tableAsync.maybeWhen(data: (t) => t == null ? 'Por atribuir' : 'Mesa $t', orElse: () => '…'),
                onTap: tableAsync.maybeWhen(data: (t) => t, orElse: () => null) == null
                    ? null
                    : () => Navigator.of(context).push(
                          MaterialPageRoute(builder: (_) => GuestTableScreen(weddingId: weddingId, tableNumber: tableAsync.value)),
                        ),
              ),
              const Divider(height: 1, thickness: 1, color: Color(0xFFEEF2EC)),
              _InfoLine(
                icon: Icons.phone_outlined,
                label: 'Telemóvel',
                value: guest.phone?.isNotEmpty == true ? guest.phone! : 'Adicionar',
                onTap: () => _editField(
                  context,
                  ref,
                  title: 'Telemóvel',
                  guest: guest,
                  currentValue: (g) => g.phone,
                  onSave: (value) => updateOwnGuestInfo(
                    phone: value,
                    dietaryRestrictions: guest.dietaryRestrictions,
                    plusOneName: guest.plusOneName,
                  ),
                ),
              ),
                ]),
              ),
            ],
            // Definições da conta dentro do Perfil (pedido 2026-10-17).
            if (profile.role == UserRole.guest)
              const GuestAccountSections()
            else ...[
              const _Caps('Conta'),
              _InfoLine(icon: Icons.settings_outlined, label: 'Definições do teu evento', value: '', onTap: onMore),
            ],
          ],
        );
      },
    );
  }

  void _editMe(BuildContext context, WidgetRef ref, Guest guest) {
    showIslandSheet<void>(
      context: context,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl))),
      builder: (sheet) => SafeArea(
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            ListTile(
              leading: const Icon(Icons.restaurant_outlined),
              title: const Text('Menu'),
              subtitle: Text(guest.menuSelection ?? 'Por escolher'),
              onTap: () {
                Navigator.of(sheet).pop();
                _editField(context, ref, title: 'Menu', guest: guest, currentValue: (g) => g.menuSelection, onSave: updateOwnGuestMenu);
              },
            ),
            ListTile(
              leading: const Icon(Icons.no_food_outlined),
              title: const Text('Alergias ou restrições'),
              subtitle: Text(guest.dietaryRestrictions ?? 'Sem alergias'),
              onTap: () {
                Navigator.of(sheet).pop();
                _editField(
                  context,
                  ref,
                  title: 'Alergias ou restrições',
                  guest: guest,
                  currentValue: (g) => g.dietaryRestrictions,
                  onSave: (value) => updateOwnGuestInfo(phone: guest.phone, dietaryRestrictions: value, plusOneName: guest.plusOneName),
                );
              },
            ),
          ],
        ),
      ),
    );
  }
}

String _initialsOf(String name) => name
    .trim()
    .split(RegExp(r'\s+'))
    .where((w) => w.isNotEmpty)
    .take(2)
    .map((w) => w[0].toUpperCase())
    .join();

class _Segmented extends StatelessWidget {
  final bool going;
  final ValueChanged<bool> onChanged;
  const _Segmented({required this.going, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    return V2Segment(
      options: const ['Vou', 'Não vou'],
      selected: going ? 0 : 1,
      onChanged: (i) => onChanged(i == 0),
    );
  }
}

class _PersonLine extends StatelessWidget {
  final String initials;
  final Color color;
  final String name;
  final String detail;
  final String status;
  final bool muted;
  final VoidCallback? onTap;

  const _PersonLine({
    required this.initials,
    required this.color,
    required this.name,
    required this.detail,
    required this.status,
    this.muted = false,
    this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    final row = Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.all(14),
      decoration: softCard(),
      child: Row(
        children: [
          V2Avatar(initials.isEmpty ? name : initials),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(detail, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
              ],
            ),
          ),
          const SizedBox(width: 8),
          V2Chip(status, strong: !muted, tone: muted ? V2Tone.grey : V2Tone.green),
        ],
      ),
    );
    return onTap == null ? row : SnappyTap(onTap: onTap!, child: row);
  }
}

class _InfoLine extends StatelessWidget {
  final IconData icon;
  final String label;
  final String value;
  final VoidCallback? onTap;

  const _InfoLine({required this.icon, required this.label, required this.value, this.onTap});

  @override
  Widget build(BuildContext context) {
    final row = Padding(
      padding: const EdgeInsets.symmetric(vertical: 11),
      child: Row(
        children: [
          StickerIcon(icon, size: 36, turns: StickerIcon.tilt(label.length)),
          const SizedBox(width: 12),
          Expanded(child: Text(label, style: const TextStyle(fontSize: 14, color: AppTheme.ink))),
          Text(value, style: const TextStyle(fontSize: AppFontSize.base, color: AppTheme.inkMuted)),
          const SizedBox(width: 6),
          SizedBox(width: 18, child: onTap == null ? null : const Icon(Icons.chevron_right, size: 18, color: Color(0xFFB5B0A6))),
        ],
      ),
    );
    return onTap == null ? row : SnappyTap(onTap: onTap!, child: row);
  }
}

class _ProfileRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final String value;
  final VoidCallback? onEdit;
  final String actionLabel;

  const _ProfileRow({
    required this.icon,
    required this.label,
    required this.value,
    this.onEdit,
    this.actionLabel = 'Editar',
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(bottom: 10),
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
      decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.lg)),
      child: Row(
        children: [
          Icon(icon, size: 20, color: AppTheme.inkMuted),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(label, style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm)),
                const SizedBox(height: 2),
                Text(value, style: const TextStyle(color: AppTheme.ink, fontWeight: FontWeight.w600, fontSize: AppFontSize.base)),
              ],
            ),
          ),
          if (onEdit != null)
            TextButton(
              onPressed: onEdit,
              child: Text(actionLabel, style: TextStyle(color: AppTheme.accentOliveDark, fontWeight: FontWeight.w700)),
            ),
        ],
      ),
    );
  }
}

class _Caps extends StatelessWidget {
  final String text;
  const _Caps(this.text);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(0, 24, 0, 12),
      child: Text(
        text.toUpperCase(),
        style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.inkMuted),
      ),
    );
  }
}

/// Cabeçalho igual ao do perfil do organizador: foto redonda (88) com o
/// botão da câmara, nome, email e uma etiqueta.
class _GuestHeader extends StatelessWidget {
  final String name;
  final String email;
  final String? avatarUrl;
  final String chip;
  final VoidCallback onChangePhoto;

  const _GuestHeader({
    required this.name,
    required this.email,
    required this.avatarUrl,
    required this.chip,
    required this.onChangePhoto,
  });

  @override
  Widget build(BuildContext context) {
    final initials = Center(
      child: Text(
        _initialsOf(name).isEmpty ? '?' : _initialsOf(name),
        style: TextStyle(fontSize: AppFontSize.h1, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark),
      ),
    );
    return Column(
      children: [
        Stack(
          clipBehavior: Clip.none,
          children: [
            Container(
              width: 84,
              height: 84,
              decoration: BoxDecoration(
                color: Colors.white,
                shape: BoxShape.circle,
                border: Border.all(color: Colors.white, width: 2),
                boxShadow: StickerIcon.shadow,
              ),
              child: ClipOval(
                child: avatarUrl == null
                    ? initials
                    : SizedNetworkImage(avatarUrl!, fit: BoxFit.cover, errorBuilder: (context, error, stack) => initials),
              ),
            ),
            Positioned(
              bottom: -2,
              right: -4,
              child: Semantics(
                button: true,
                label: 'Mudar foto',
                child: SnappyTap(
                  onTap: onChangePhoto,
                  child: Container(
                    width: 34,
                    height: 34,
                    decoration: BoxDecoration(
                      color: AppTheme.accentOliveDark,
                      shape: BoxShape.circle,
                      border: Border.all(color: Colors.white, width: 2),
                    ),
                    child: const Icon(Icons.camera_alt_outlined, size: 16, color: Colors.white),
                  ),
                ),
              ),
            ),
          ],
        ),
        const SizedBox(height: 10),
        Text(
          name,
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink),
        ),
        if (email.isNotEmpty) ...[
          const SizedBox(height: 2),
          Text(email, textAlign: TextAlign.center, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        ],
        const SizedBox(height: 8),
        V2Chip(chip),
      ],
    );
  }
}

/// Folha para adicionar/editar um acompanhante depois de criar a conta:
/// nome, idade e contacto (telemóvel e email). Devolve um acompanhante
/// com nome vazio quando é para o remover.
Future<GuestCompanion?> _companionSheet(BuildContext context, {GuestCompanion? existing}) {
  return showIslandSheet<GuestCompanion>(
    context: context,
    isScrollControlled: true,
    builder: (sheet) => _CompanionForm(existing: existing),
  );
}

class _CompanionForm extends StatefulWidget {
  final GuestCompanion? existing;
  const _CompanionForm({this.existing});

  @override
  State<_CompanionForm> createState() => _CompanionFormState();
}

class _CompanionFormState extends State<_CompanionForm> {
  late final _name = TextEditingController(text: widget.existing?.name ?? '');
  late final _phone = TextEditingController(text: widget.existing?.phone ?? '');
  late final _email = TextEditingController(text: widget.existing?.email ?? '');
  late final _age = TextEditingController(text: widget.existing?.childAge?.toString() ?? '');
  late String _group = widget.existing?.ageGroup ?? 'adult';
  String? _error;

  static const _groups = [('adult', 'Adulto'), ('teen', 'Adolescente'), ('child', 'Criança'), ('senior', 'Sénior')];

  @override
  void dispose() {
    _name.dispose();
    _phone.dispose();
    _email.dispose();
    _age.dispose();
    super.dispose();
  }

  void _save() {
    final name = _name.text.trim();
    final phone = _phone.text.trim();
    final email = _email.text.trim();
    if (name.isEmpty) return setState(() => _error = 'Escreve o nome.');
    if (phone.isNotEmpty && phone.replaceAll(RegExp(r'[^0-9]'), '').length < 9) {
      return setState(() => _error = 'O telemóvel parece incompleto.');
    }
    if (email.isNotEmpty && !email.contains('@')) return setState(() => _error = 'O email não parece válido.');
    final e = widget.existing;
    Navigator.of(context).pop(GuestCompanion(
      name: name,
      ageGroup: _group,
      isChild: _group == 'child',
      childAge: _group == 'child' ? int.tryParse(_age.text.trim()) : null,
      phone: phone.isEmpty ? null : phone,
      email: email.isEmpty ? null : email,
      menu: e?.menu,
      allergies: e?.allergies ?? const [],
      accompaniedBy: e?.accompaniedBy,
      linkedGuestId: e?.linkedGuestId,
      willInstallApp: phone.isNotEmpty || email.isNotEmpty || (e?.willInstallApp ?? false),
    ));
  }

  InputDecoration _dec(String label, {String? hint}) => InputDecoration(
        labelText: label,
        hintText: hint,
        filled: true,
        fillColor: const Color(0xFFF6F4EF),
        border: OutlineInputBorder(borderRadius: BorderRadius.circular(14), borderSide: BorderSide.none),
      );

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(22, 14, 22, 20),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        mainAxisSize: MainAxisSize.min,
        children: [
          Center(
            child: Container(
              width: 40,
              height: 4,
              decoration: BoxDecoration(color: AppTheme.borderMuted, borderRadius: BorderRadius.circular(2)),
            ),
          ),
          const SizedBox(height: 16),
          Text(widget.existing == null ? 'Novo acompanhante' : 'Acompanhante',
              style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 14),
          TextField(
            controller: _name,
            autofocus: widget.existing == null,
            textCapitalization: TextCapitalization.words,
            decoration: _dec('Nome'),
          ),
          const SizedBox(height: 12),
          Wrap(spacing: 8, runSpacing: 8, children: [
            for (final (code, label) in _groups)
              ChoiceChip(
                label: Text(label),
                selected: _group == code,
                onSelected: (_) => setState(() => _group = code),
                selectedColor: AppTheme.accentOliveDark,
                labelStyle: TextStyle(
                  fontWeight: FontWeight.w700,
                  color: _group == code ? Colors.white : AppTheme.ink,
                ),
                showCheckmark: false,
              ),
          ]),
          if (_group == 'child') ...[
            const SizedBox(height: 12),
            TextField(controller: _age, keyboardType: TextInputType.number, decoration: _dec('Idade')),
          ],
          const SizedBox(height: 12),
          TextField(
            controller: _phone,
            keyboardType: TextInputType.phone,
            autofillHints: const [AutofillHints.telephoneNumber],
            decoration: _dec('Telemóvel', hint: '912 345 678'),
          ),
          const SizedBox(height: 12),
          TextField(
            controller: _email,
            keyboardType: TextInputType.emailAddress,
            decoration: _dec('Email (opcional)'),
          ),
          const SizedBox(height: 8),
          const Text(
            'Com o telemóvel ou o email, o acompanhante pode entrar na app e fica ligado a esta resposta.',
            style: TextStyle(fontSize: 12, color: AppTheme.inkMuted, height: 1.4),
          ),
          if (_error != null) ...[
            const SizedBox(height: 8),
            Text(_error!, style: const TextStyle(fontSize: 13, color: Color(0xFFB3261E))),
          ],
          const SizedBox(height: 18),
          V2BigButton(label: widget.existing == null ? 'Adicionar acompanhante' : 'Guardar', onTap: _save),
          if (widget.existing != null)
            TextButton(
              onPressed: () => Navigator.of(context).pop(const GuestCompanion(name: '')),
              style: TextButton.styleFrom(foregroundColor: const Color(0xFFA3412E)),
              child: const Text('Remover acompanhante', style: TextStyle(fontWeight: FontWeight.w700)),
            ),
        ],
      ),
    );
  }
}
