import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/initials_avatar.dart';
import '../../../shared/widgets/page_header.dart';
import 'guest_table_screen.dart';

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
                // parceiro, Mensagens, Galeria).
                const PageHeader(title: 'O meu perfil', showBack: false),
                const SizedBox(height: 16),
                Expanded(
                  child: weddingsAsync.when(
                    loading: () => const Center(child: CircularProgressIndicator()),
                    error: (err, st) => const Center(child: Text('Não foi possível carregar.')),
                    data: (weddings) {
                      if (weddings.isEmpty || profile == null) {
                        return const Center(child: Text('Ainda sem casamento associado.'));
                      }
                      final resolvedWeddingId = weddingId == null
                          ? weddings.first.weddingId
                          : (weddings.any((w) => w.weddingId == weddingId) ? weddingId! : weddings.first.weddingId);
                      return _GuestProfileBody(weddingId: resolvedWeddingId, profile: profile);
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

class _GuestProfileBody extends ConsumerWidget {
  final String weddingId;
  final Profile profile;

  const _GuestProfileBody({required this.weddingId, required this.profile});

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
    await onSave(result.isEmpty ? null : result);
    ref.invalidate(myGuestRowProvider(weddingId));
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final guestAsync = ref.watch(myGuestRowProvider(weddingId));
    final tableAsync = ref.watch(mySeatingTableProvider(weddingId));

    return guestAsync.when(
      loading: () => const Center(child: CircularProgressIndicator()),
      error: (err, st) => const Center(child: Text('Não foi possível carregar.')),
      data: (guest) {
        return ListView(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 120),
          children: [
            Center(
              child: Stack(
                children: [
                  InitialsAvatar(name: profile.fullName, radius: 44, background: AppTheme.surface),
                  Positioned(
                    right: 0,
                    bottom: 0,
                    child: SizedBox(
                      width: 26,
                      height: 26,
                      child: Material(
                        color: AppTheme.accentOliveDark,
                        shape: const CircleBorder(),
                        child: InkWell(
                          customBorder: const CircleBorder(),
                          onTap: () => ScaffoldMessenger.of(context).showSnackBar(
                            const SnackBar(content: Text('Foto de perfil em breve.')),
                          ),
                          child: const Icon(Icons.edit, size: 13, color: Colors.white),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 14),
            Text(
              profile.fullName,
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink),
            ),
            const SizedBox(height: 2),
            Text(
              profile.email,
              textAlign: TextAlign.center,
              style: const TextStyle(color: AppTheme.inkMuted, fontSize: 13.5),
            ),
            const SizedBox(height: 24),
            if (guest == null)
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(18)),
                child: const Text(
                  'Ainda não encontrámos a tua entrada na lista de convidados. Fala com os noivos para confirmarem o teu email.',
                  style: TextStyle(color: AppTheme.inkMuted, fontSize: 13),
                ),
              )
            else ...[
              _ProfileRow(
                icon: Icons.people_alt_outlined,
                label: 'Acompanhantes',
                value: !guest.plusOneAllowed
                    ? 'Sem acompanhante'
                    : (guest.plusOneName?.isNotEmpty == true ? '1 acompanhante: ${guest.plusOneName}' : '1 acompanhante'),
                onEdit: !guest.plusOneAllowed
                    ? null
                    : () => _editField(
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
              ),
              _ProfileRow(
                icon: Icons.restaurant_outlined,
                label: 'Menu escolhido',
                value: 'Menu normal',
                onEdit: () => ScaffoldMessenger.of(context).showSnackBar(
                  const SnackBar(content: Text('Escolha de menu em breve.')),
                ),
              ),
              _ProfileRow(
                icon: Icons.event_seat_outlined,
                label: 'A tua mesa',
                value: tableAsync.maybeWhen(
                  data: (table) => table == null ? 'Ainda não atribuída' : 'Mesa $table',
                  orElse: () => '...',
                ),
                actionLabel: 'Ver',
                onEdit: tableAsync.maybeWhen(data: (table) => table, orElse: () => null) == null
                    ? null
                    : () => Navigator.of(context).push(
                          MaterialPageRoute(
                            builder: (_) => GuestTableScreen(
                              weddingId: weddingId,
                              tableNumber: tableAsync.value,
                            ),
                          ),
                        ),
              ),
              const SizedBox(height: 20),
              const Text(
                'Informações adicionais',
                style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15, color: AppTheme.ink),
              ),
              const SizedBox(height: 10),
              _ProfileRow(
                icon: Icons.no_food_outlined,
                label: 'Alergias ou restrições',
                value: guest.dietaryRestrictions?.isNotEmpty == true ? guest.dietaryRestrictions! : 'Sem alergias',
                onEdit: () => _editField(
                  context,
                  ref,
                  title: 'Alergias ou restrições',
                  guest: guest,
                  currentValue: (g) => g.dietaryRestrictions,
                  onSave: (value) => updateOwnGuestInfo(
                    phone: guest.phone,
                    dietaryRestrictions: value,
                    plusOneName: guest.plusOneName,
                  ),
                ),
              ),
              _ProfileRow(
                icon: Icons.call_outlined,
                label: 'Telefone de contacto',
                value: guest.phone?.isNotEmpty == true ? guest.phone! : 'Sem telefone',
                onEdit: () => _editField(
                  context,
                  ref,
                  title: 'Telefone de contacto',
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
          ],
        );
      },
    );
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
      decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(18)),
      child: Row(
        children: [
          Icon(icon, size: 20, color: AppTheme.inkMuted),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(label, style: const TextStyle(color: AppTheme.inkMuted, fontSize: 12.5)),
                const SizedBox(height: 2),
                Text(value, style: const TextStyle(color: AppTheme.ink, fontWeight: FontWeight.w600, fontSize: 14)),
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
