import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/auth/auth_controller.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/initials_avatar.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import 'guest_mode_screen.dart' show showGuestModeSheet;
import 'guest_table_screen.dart';
import '../../settings/screens/settings_screen.dart' show GuestAccountSections;
import '../../../shared/widgets/feedback.dart';

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

    return Scaffold(
      backgroundColor: Colors.white,
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
  final input = await showDialog<String>(
    context: context,
    builder: (context) => AlertDialog(
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
    final result = await showDialog<String>(
      context: context,
      builder: (context) => AlertDialog(
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
        return ListView(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 120),
          children: [
            Row(
              children: [
                GestureDetector(
                  onTap: () => _pickAndUploadAvatar(context, ref),
                  child: profile.avatarUrl == null
                      ? InitialsAvatar(name: profile.fullName, radius: 30, background: AppColors.yellow)
                      : CircleAvatar(radius: 30, backgroundImage: NetworkImage(profile.avatarUrl!)),
                ),
                const SizedBox(width: 14),
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(profile.fullName, style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      if (subtitle.isNotEmpty) Text(subtitle, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                    ],
                  ),
                ),
                SnappyTap(
                  onTap: onMore,
                  child: Container(
                    width: 40,
                    height: 40,
                    alignment: Alignment.center,
                    decoration: const BoxDecoration(color: AppTheme.surface, shape: BoxShape.circle),
                    child: const Icon(Icons.more_horiz, color: AppTheme.ink),
                  ),
                ),
              ],
            ),
            const SizedBox(height: 18),
            if (guest == null)
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.lg)),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    const Text(
                      'Ainda não encontrámos a tua entrada na lista de convidados.',
                      style: TextStyle(color: AppTheme.ink, fontWeight: FontWeight.w700, fontSize: AppFontSize.base),
                    ),
                    const SizedBox(height: 6),
                    const Text(
                      'Se recebeste um link ou código deste evento, usa-o para associares a tua conta.',
                      style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
                    ),
                    const SizedBox(height: 16),
                    PrimaryButton(label: 'Introduzir código do evento', onPressed: () => showGuestModeSheet(context)),
                    const SizedBox(height: 10),
                    TextButton(
                      onPressed: () => _openInviteLinkDialog(context, ref),
                      child: const Text('Abrir link de convite', style: TextStyle(color: AppTheme.accentOliveDark, fontWeight: FontWeight.w700)),
                    ),
                  ],
                ),
              )
            else ...[
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
              const SizedBox(height: 18),
              Row(
                children: [
                  const Expanded(child: Text('Quem vai', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink))),
                  if (guest.plusOneAllowed)
                    SnappyTap(
                      onTap: () => _editField(
                        context,
                        ref,
                        title: 'Nome do acompanhante',
                        guest: guest,
                        currentValue: (g) => g.plusOneName,
                        onSave: (value) => updateOwnGuestInfo(
                          phone: guest.phone,
                          dietaryRestrictions: guest.dietaryRestrictions,
                          plusOneName: value,
                        ),
                      ),
                      child: const Text('+ Acompanhante', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
                    ),
                ],
              ),
              _PersonLine(
                initials: _initialsOf(profile.fullName),
                color: AppColors.yellow,
                name: 'Tu',
                detail: [
                  guest.menuSelection?.isNotEmpty == true ? guest.menuSelection! : 'Menu por escolher',
                  guest.dietaryRestrictions?.isNotEmpty == true ? guest.dietaryRestrictions! : 'Sem alergias',
                ].join(' · '),
                status: '✓ Conta ligada',
                onTap: () => _editMe(context, ref, guest),
              ),
              if (companions.isNotEmpty)
                for (final c in companions)
                  _PersonLine(
                    initials: _initialsOf(c.name),
                    color: AppColors.green,
                    name: c.isChild && c.childAge != null ? '${c.name} · ${c.childAge} anos' : c.name,
                    detail: [c.menu ?? 'Menu por escolher', c.allergies.isEmpty ? 'Sem alergias' : c.allergies.join(', ')].join(' · '),
                    status: c.phone?.isNotEmpty == true ? 'Telemóvel ${c.phone}' : 'Sem conta — está contigo',
                    muted: c.phone?.isNotEmpty != true,
                  )
              else if (guest.plusOneName?.isNotEmpty == true)
                _PersonLine(
                  initials: _initialsOf(guest.plusOneName!),
                  color: AppColors.green,
                  name: guest.plusOneName!,
                  detail: 'Acompanhante',
                  status: 'Sem conta — está contigo',
                  muted: true,
                ),
              const SizedBox(height: 6),
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
            ],
            // Definições da conta dentro do Perfil (pedido 2026-10-17).
            if (profile.role == UserRole.guest) const GuestAccountSections(),
          ],
        );
      },
    );
  }

  void _editMe(BuildContext context, WidgetRef ref, Guest guest) {
    showModalBottomSheet<void>(
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
    Widget seg(String label, bool selected, VoidCallback onTap) => Expanded(
          child: SnappyTap(
            onTap: onTap,
            child: Container(
              padding: const EdgeInsets.symmetric(vertical: 11),
              alignment: Alignment.center,
              decoration: BoxDecoration(
                color: selected ? Colors.white : Colors.transparent,
                borderRadius: BorderRadius.circular(12),
                boxShadow: selected ? const [BoxShadow(color: Color(0x0F000000), blurRadius: 8, offset: Offset(0, 2))] : null,
              ),
              child: Text(
                label,
                style: TextStyle(
                  fontSize: 14,
                  fontWeight: selected ? FontWeight.w700 : FontWeight.w400,
                  color: selected ? AppTheme.ink : AppTheme.inkMuted,
                ),
              ),
            ),
          ),
        );
    return Container(
      padding: const EdgeInsets.all(4),
      decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(16)),
      child: Row(
        children: [
          seg(going ? 'Vou ✓' : 'Vou', going, () => onChanged(true)),
          const SizedBox(width: 6),
          seg('Não vou', !going, () => onChanged(false)),
        ],
      ),
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
      padding: const EdgeInsets.symmetric(vertical: 12),
      decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: AppTheme.borderMuted))),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          CircleAvatar(
            radius: 20,
            backgroundColor: color,
            child: Text(initials, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFF4A5D35))),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(detail, style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                Text(status, style: TextStyle(fontSize: 12, color: muted ? const Color(0xFF8F8B84) : AppTheme.accentOliveDark)),
              ],
            ),
          ),
          if (onTap != null) const Icon(Icons.chevron_right, size: 16, color: AppTheme.inkMuted),
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
      padding: const EdgeInsets.symmetric(vertical: 12),
      child: Row(
        children: [
          Icon(icon, size: 20, color: AppTheme.inkMuted),
          const SizedBox(width: 12),
          Expanded(child: Text(label, style: const TextStyle(fontSize: 14, color: AppTheme.ink))),
          Text(value, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
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
              child: Text(actionLabel, style: const TextStyle(color: AppTheme.accentOliveDark, fontWeight: FontWeight.w700)),
            ),
        ],
      ),
    );
  }
}
