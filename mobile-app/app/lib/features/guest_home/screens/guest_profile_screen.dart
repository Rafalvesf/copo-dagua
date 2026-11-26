import '../../../shared/widgets/time_wheels.dart';
import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/scrolling_header.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/auth/auth_controller.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/event/event_controller.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/initials_avatar.dart';
import '../../../shared/widgets/snappy_tap.dart';
import 'guest_table_screen.dart';
import '../../settings/screens/settings_screen.dart' show GuestAccountSections;
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../shared/widgets/page_kit.dart';
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';

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
  final String? eventId;

  const GuestProfileScreen({super.key, this.eventId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    final eventsAsync = ref.watch(guestEventsProvider);
    final isCouple = profile?.role == UserRole.couple;

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(top: false, 
            bottom: false,
            child: ScrollingHeader(
 header: [SizedBox(height: MediaQuery.paddingOf(context).top),
                // Ecrã raiz da navbar (Perfil) — sem seta de voltar,
                // mesma convenção de todos os outros separadores raiz
                // da app (Chat, Tarefas, Pedidos, "O meu perfil" do
                // parceiro, Mensagens, Galeria). `trailing` com a roda
                // de definições mantém a linha de ícones (senão o
                // título subia, tal como em `gallery_screen.dart`).
 ],
 body: eventsAsync.when(
                    loading: () => const SkeletonList(),
                    error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(guestEventsProvider)),
                    data: (events) {
                      if (events.isEmpty || profile == null) {
                        return const EmptyStateView(message: 'Ainda sem casamento associado.', icon: Hi.heartOutline);
                      }
                      final resolvedEventId = eventId == null
                          ? events.first.eventId
                          : (events.any((w) => w.eventId == eventId) ? eventId! : events.first.eventId);
                      return _GuestProfileBody(eventId: resolvedEventId, profile: profile, onMore: () => _openSettings(context, ref, isCouple));
                    },
                  ),
),
          ),
        ],
      ),
    );
  }
}

/// Uma conta de casal a acompanhar outro casamento em "Modo convidado"
/// tem o seu próprio casamento em `eventControllerProvider`, por isso
/// `/settings` (`settings_screen.dart`) funciona normalmente — mostra
/// as definições do casamento REAL do casal, não do casamento que estão
/// a visitar como convidados, o que é o comportamento certo. Uma conta
/// 100% convidada não tem casamento próprio (`SettingsScreen` fica
/// perpetuamente a carregar à espera de `eventControllerProvider`),
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
  final file = await ImagePicker().pickImage(maxWidth: 512, source: ImageSource.gallery, imageQuality: 85);
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


class _GuestProfileBody extends ConsumerWidget {
  final String eventId;
  final Profile profile;

  final VoidCallback onMore;

  const _GuestProfileBody({required this.eventId, required this.profile, required this.onMore});

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
          PressScale(child: TextButton(onPressed: () => Navigator.of(context).pop(), child: const Text('Cancelar'))),
          PressScale(child: FilledButton(
            onPressed: () => Navigator.of(context).pop(controller.text.trim()),
            child: const Text('Guardar'),
          )),
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
    ref.invalidate(myGuestRowProvider(eventId));
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    // Canvas "Convidado · A tua presença".
    final guestAsync = ref.watch(myGuestRowProvider(eventId));
    final isOrganizer = ref.watch(eventControllerProvider.select((s) => s.events.any((w) => w.id == eventId)));
    final tableAsync = ref.watch(mySeatingTableProvider(eventId));

    return guestAsync.when(
      loading: () => const SkeletonList(),
      error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(myGuestRowProvider(eventId))),
      data: (guest) {
        final companions = guest == null
            ? const <GuestCompanion>[]
            : ref.watch(guestCompanionsProvider(guest.id)).maybeWhen(data: (c) => c, orElse: () => const <GuestCompanion>[]);
        final subtitle = guest == null
            ? profile.email
            : [
                if (guest.group.isNotEmpty) guest.group,
              ].where((t) => t.isNotEmpty).join(' · ');
        // Mesmo estilo dos perfis do organizador e do parceiro
        // (pedido 2026-10-17): título grande, foto redonda com câmara,
        // e secções com títulos em maiúsculas e linhas com divisórias.
        return ScrollBackView(
          onBack: () => context.canPop() ? context.pop() : context.go('/eventos'),
          builder: (context, scrollCtrl) => ListView(
            controller: scrollCtrl,
            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 140),
            children: [
            // Redesign 2026-10-19 (canvas "Convidado — perfil (redesign)").
            // Kit das páginas (2026-11-15): voltar, título à esquerda e o
            // cartão do perfil. Sem «Em modo convidado»: só a categoria.
            const KitHeader(),
            const KitTitle('A tua resposta'),
            const SizedBox(height: 16),
            _GuestHeader(
              name: profile.fullName,
              email: profile.email,
              avatarUrl: profile.avatarUrl,
              chip: subtitle.isEmpty || guest == null ? 'Convidado' : subtitle,
              onChangePhoto: () => _pickAndUploadAvatar(context, ref),
            ),
            // Sem linha na lista de convidados (pedido 2026-11: a
            // mensagem antiga aparecia a quem organiza o próprio evento e
            // a quem já tinha entrado com o código).
            if (guest == null)
              Container(
                margin: const EdgeInsets.only(top: 16),
                width: double.infinity,
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
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
                            'Como organizas este evento, não tens resposta nem mesa aqui. Para voltar a organizar, usa o separador Eventos.',
                            style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
                          ),
                        ],
                      )
                    : Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          const Text(
                            'À espera que o organizador confirme a tua entrada.',
                            style: TextStyle(color: AppTheme.ink, fontWeight: FontWeight.w700, fontSize: AppFontSize.base),
                          ),
                          const SizedBox(height: 6),
                          const Text(
                            'Já podes ver o programa, a galeria e as novidades. Assim que o organizador confirmar, respondes e vês a tua mesa.',
                            style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
                          ),
                        ],
                      ),
              )
            else ...[
              const KitCaps('Vais?'),
              _Segmented(
                going: guest.rsvpStatus != RsvpStatus.declined,
                onChanged: (going) async {
                  if (going == (guest.rsvpStatus != RsvpStatus.declined) && guest.rsvpStatus != RsvpStatus.pending) return;
                  try {
                    await setMyRsvp(guest, going);
                    ref.invalidate(myGuestRowProvider(eventId));
                    ref.invalidate(guestEventsProvider);
                  } catch (_) {
                    if (context.mounted) {
                      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível mudar a resposta.')));
                    }
                  }
                },
              ),
              KitCaps('Quem vai contigo · ${1 + (companions.isNotEmpty ? companions.length : (guest.plusOneName?.isNotEmpty == true ? 1 : 0))}'),
              // Mockup «A tua resposta» (2026-11-21): linhas no fundo, «Editar»
              // com contorno, «+ Juntar alguém» por baixo e a nota.
              KitGroup([
              _PersonLine(
                initials: _initialsOf(profile.fullName),
                color: AppColors.yellow,
                name: 'Tu',
                detail: guest.dietaryRestrictions?.isNotEmpty == true ? guest.dietaryRestrictions! : 'Sem alergias',
                status: 'Conta ligada',
                onTap: () => _editMe(context, ref, guest),
              ),
              if (companions.isNotEmpty)
                for (final c in companions)
                  _PersonLine(
                    initials: _initialsOf(c.name),
                    color: AppTheme.accentTint,
                    name: [c.name, if (c.isChild && c.childAge != null) '${c.childAge} anos', if (c.isChild && c.highChair) 'cadeirinha'].join(' · '),
                    detail: c.allergies.isEmpty ? 'Sem alergias' : c.allergies.join(', '),
                    status: c.phone?.isNotEmpty == true ? 'Telemóvel ${c.phone}' : 'Sem contacto',
                    muted: c.phone?.isNotEmpty != true,
                    onTap: () async {
                      final edited = await _companionSheet(context, existing: c);
                      if (edited == null) return;
                      await saveGuestCompanions(
                        guestId: guest.id,
                        eventId: eventId,
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
              ]),
              if (companions.length < guest.maxCompanions)
                Padding(
                  padding: const EdgeInsets.only(top: 12),
                  child: _OutlineButton('+ Juntar alguém', onTap: () async {
                        // Nome, idade e telemóvel/email (2026-10-19): com o
                        // contacto o acompanhante pode depois entrar na app
                        // e ficar ligado a esta resposta.
                        final added = await _companionSheet(context);
                        if (added == null) return;
                        await saveGuestCompanions(
                          guestId: guest.id,
                          eventId: eventId,
                          companions: [...companions, added],
                        );
                        ref.invalidate(guestCompanionsProvider(guest.id));
                      }),
                ),
              Padding(
                padding: const EdgeInsets.only(top: 12, bottom: 4),
                child: Text(
                  guest.maxCompanions == 0
                      ? 'Este convite é só para ti.'
                      : 'Podes levar até ${guest.maxCompanions} ${guest.maxCompanions == 1 ? 'pessoa' : 'pessoas'} (${companions.length} indicada${companions.length == 1 ? '' : 's'}).',
                  style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
                ),
              ),
              const KitCaps('Detalhes'),
              KitGroup([
              KitSetRow(
                label: 'A tua mesa',
                value: tableAsync.maybeWhen(data: (t) => t == null ? 'Por atribuir' : 'Mesa $t', orElse: () => '…'),
                onTap: tableAsync.maybeWhen(data: (t) => t, orElse: () => null) == null
                    ? null
                    : () => Navigator.of(context).push(
                          MaterialPageRoute(builder: (_) => GuestTableScreen(eventId: eventId, tableNumber: tableAsync.value)),
                        ),
              ),
              KitSetRow(
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
            ],
            // Definições da conta dentro do Perfil (pedido 2026-10-17).
            if (profile.role == UserRole.guest)
              const GuestAccountSections()
            else ...[
              const KitCaps('Conta'),
              KitGroup([KitSetRow(label: 'Definições do teu evento', onTap: onMore)]),
            ],
          ],
          ),
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
              leading: const Icon(Hi.noSymbol),
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

  // «Vou» / «Não vou» como opções (círculo verde com o visto no escolhido).
  static Widget _dot(bool on) => Container(
        width: 26,
        height: 26,
        decoration: BoxDecoration(
          color: on ? AppTheme.accentOliveDark : null,
          shape: BoxShape.circle,
          border: on ? null : Border.all(color: AppTheme.sectionLine, width: 1.5),
        ),
        child: on ? const Icon(Icons.check_rounded, size: 16, color: Colors.white) : null,
      );

  @override
  Widget build(BuildContext context) {
    return KitGroup([
      KitRow(title: 'Vou', sub: 'Contam contigo', trailing: _dot(going), onTap: () => onChanged(true)),
      KitRow(title: 'Não vou', sub: 'Podes mudar a resposta mais tarde', trailing: _dot(!going), onTap: () => onChanged(false)),
    ]);
  }
}

/// Botão com contorno a toda a largura (44).
class _OutlineButton extends StatelessWidget {
  final String label;
  final VoidCallback onTap;
  const _OutlineButton(this.label, {required this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Container(
          height: 44,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: Colors.white,
            border: Border.all(color: AppTheme.ink, width: 1.5),
            borderRadius: BorderRadius.circular(22),
          ),
          child: Text(label, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ),
      );
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
    // Linha do grupo (mockup «A tua resposta», 2026-11-21): avatar 44, nome
    // 16, meta 13 e «Editar» com contorno.
    return KitRow(
      lead: V2Avatar(initials.isEmpty ? name : initials, size: 44),
      title: name,
      sub: muted ? '$detail · $status' : detail,
      trailing: onTap == null
          ? null
          : SnappyTap(
              onTap: onTap!,
              child: Container(
                height: 36,
                padding: const EdgeInsets.symmetric(horizontal: 16),
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  color: Colors.white,
                  border: Border.all(color: AppTheme.ink, width: 1.5),
                  borderRadius: BorderRadius.circular(18),
                ),
                child: const Text('Editar', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
            ),
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
      color: AppTheme.surface,
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
            PressScale(child: TextButton(
              onPressed: onEdit,
              child: Text(actionLabel, style: TextStyle(color: AppTheme.accentOliveDark, fontWeight: FontWeight.w700)),
            )),
        ],
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
    // Cartão do perfil (kit das páginas, 2026-11-15): branco, cantos 22,
    // interior 18, sem sombra; foto 76 plana com a câmara, nome 20, email
    // 13 e a etiqueta.
    final initials = Center(
      child: Text(
        _initialsOf(name).isEmpty ? '?' : _initialsOf(name),
        style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w700, color: AppTheme.ink),
      ),
    );
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Row(
        children: [
          Stack(
            clipBehavior: Clip.none,
            children: [
              Container(
                width: 76,
                height: 76,
                decoration: const BoxDecoration(color: Color(0xFFE7D9C3), shape: BoxShape.circle),
                child: ClipOval(
                  child: avatarUrl == null
                      ? initials
                      : SizedNetworkImage(avatarUrl!, fit: BoxFit.cover, errorBuilder: (context, error, stack) => initials),
                ),
              ),
              Positioned(
                bottom: -2,
                right: -2,
                child: Semantics(
                  button: true,
                  label: 'Mudar foto',
                  child: SnappyTap(
                    onTap: onChangePhoto,
                    child: Container(
                      width: 28,
                      height: 28,
                      decoration: BoxDecoration(
                        color: AppTheme.ink,
                        shape: BoxShape.circle,
                        border: Border.all(color: Colors.white, width: 2),
                      ),
                      child: const Icon(Hi.camera, size: 14, color: Colors.white),
                    ),
                  ),
                ),
              ),
            ],
          ),
          const SizedBox(width: 14),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, maxLines: 2, overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                if (email.isNotEmpty)
                  Text(email, maxLines: 1, overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                const SizedBox(height: 8),
                KitTag(chip, kind: KitTagKind.neutral),
              ],
            ),
          ),
        ],
      ),
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
  late bool _highChair = widget.existing?.highChair ?? false;
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
      highChair: _group == 'child' && _highChair,
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
            // Roda de números (pedido 2026-11-25).
            WheelNumberField(
              label: 'Idade',
              value: int.tryParse(_age.text.trim()),
              min: 0,
              max: 17,
              unit: 'anos',
              fill: AppTheme.background,
              onChanged: (v) => setState(() => _age.text = '$v'),
            ),
            const SizedBox(height: 4),
            SwitchListTile.adaptive(
              contentPadding: EdgeInsets.zero,
              value: _highChair,
              onChanged: (v) => setState(() => _highChair = v),
              title: const Text('Precisa de cadeirinha', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ),
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
            PressScale(child: TextButton(
              onPressed: () => Navigator.of(context).pop(const GuestCompanion(name: '')),
              style: TextButton.styleFrom(foregroundColor: const Color(0xFFA3412E)),
              child: const Text('Remover acompanhante', style: TextStyle(fontWeight: FontWeight.w700)),
            )),
        ],
      ),
    );
  }
}
