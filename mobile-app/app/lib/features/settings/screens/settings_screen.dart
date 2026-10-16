import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../core/wedding/wedding_nav_icon.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/cover_flow_picker.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../guest_home/screens/guest_mode_screen.dart' show showGuestModeSheet;
import '../../../core/wedding/guest_facing.dart';

/// Ecrã de catch-all para tudo o que os mockups do redesign não
/// mostram diretamente — o formulário de edição do casamento, o
/// carrossel de ícone da navbar e os atalhos para Orçamento/
/// Convidados/Lugares, que antes viviam espalhados por "Os noivos" e
/// pelo menu do Home. Acedido pela engrenagem no Home e pelo "..." em
/// "Os noivos".
class SettingsScreen extends ConsumerStatefulWidget {
  /// Presente quando aberto a partir do perfil de "Modo convidado"
  /// (conta de casal a acompanhar outro casamento, ver
  /// `guest_profile_screen.dart`) — nesse caso o atalho que normalmente
  /// entra em modo convidado passa a voltar ao modo casamento (o
  /// próprio casal já está dentro de modo convidado, então "ver como
  /// convidado" deixa de fazer sentido ali).
  final bool fromGuestMode;

  const SettingsScreen({super.key, this.fromGuestMode = false});

  @override
  ConsumerState<SettingsScreen> createState() => _SettingsScreenState();
}

class _SettingsScreenState extends ConsumerState<SettingsScreen> {
  final _partner1 = TextEditingController();
  final _partner1Age = TextEditingController();
  final _partner2 = TextEditingController();
  final _partner2Age = TextEditingController();
  final _location = TextEditingController();
  final _venue = TextEditingController();
  final _quote = TextEditingController();
  DateTime? _date;
  CeremonyType _ceremonyType = CeremonyType.civil;
  String? _syncedWeddingId;

  void _syncControllers(Wedding wedding) {
    if (_syncedWeddingId == wedding.id) return;
    _syncedWeddingId = wedding.id;
    _partner1.text = wedding.partnerName1;
    _partner1Age.text = wedding.partner1Age?.toString() ?? '';
    _partner2.text = wedding.partnerName2 ?? '';
    _partner2Age.text = wedding.partner2Age?.toString() ?? '';
    _location.text = wedding.location ?? '';
    _venue.text = wedding.venue ?? '';
    _quote.text = wedding.quote ?? '';
    _date = wedding.weddingDate;
    _ceremonyType = wedding.ceremonyType;
  }

  @override
  void dispose() {
    _partner1.dispose();
    _partner1Age.dispose();
    _partner2.dispose();
    _partner2Age.dispose();
    _location.dispose();
    _venue.dispose();
    _quote.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    // Definições por tipo de conta — antes o parceiro e o convidado
    // caíam neste mesmo ecrã de "editar casamento" (que nem sequer
    // carregava para eles, por não terem casamento).
    final role = ref.watch(authControllerProvider.select((s) => s.profile?.role));
    if (role == UserRole.partner || role == UserRole.guest) {
      return _AccountSettingsScreen(role: role!);
    }
    final weddingState = ref.watch(weddingControllerProvider);
    final wedding = weddingState.wedding;

    return GradientScaffold(
      background: AppBackground.subtle,
      body: wedding == null
          ? const Center(child: CircularProgressIndicator())
          : Builder(
              builder: (context) {
                _syncControllers(wedding);
                return SafeArea(
                  bottom: false,
                  child: EdgeFade(
                    topFadeHeight: 24,
                    bottomFadeHeight: 40,
                    child: ListView(
                      padding: EdgeInsets.zero,
                      children: [
                        const PageHeader(title: 'Definições', centered: true),
                        Padding(
                          padding: const EdgeInsets.fromLTRB(
                            AppTheme.screenMargin,
                            24,
                            AppTheme.screenMargin,
                            60,
                          ),
                          child: Column(
                            crossAxisAlignment: CrossAxisAlignment.start,
                            children: [
                        Text(
                          'Nós <3',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                        const SizedBox(height: 4),
                        Text(
                          'Escolhe a ilustração do ícone de "Os noivos" na barra de navegação.',
                          style: Theme.of(context).textTheme.bodySmall,
                        ),
                        const SizedBox(height: 12),
                        const _NavIconPicker(),
                        const SizedBox(height: 28),
                        Row(
                          children: [
                            const Icon(
                              Icons.person_outline,
                              size: 18,
                              color: AppTheme.ink,
                            ),
                            const SizedBox(width: 6),
                            Text(
                              'Editar casamento',
                              style: Theme.of(context).textTheme.titleMedium,
                            ),
                          ],
                        ),
                        const SizedBox(height: 12),
                        AuthTextField(
                          label: 'Nome (tu)',
                          controller: _partner1,
                        ),
                        const SizedBox(height: 12),
                        AuthTextField(
                          label: 'Idade (tu)',
                          controller: _partner1Age,
                          keyboardType: TextInputType.number,
                        ),
                        const SizedBox(height: 12),
                        AuthTextField(
                          label: 'Nome (parceiro/a)',
                          controller: _partner2,
                        ),
                        const SizedBox(height: 12),
                        AuthTextField(
                          label: 'Idade (parceiro/a)',
                          controller: _partner2Age,
                          keyboardType: TextInputType.number,
                        ),
                        const SizedBox(height: 12),
                        DatePickerField(
                          label: 'Data',
                          value: _date,
                          allowUnknown: false,
                          onChanged: (d) => setState(() => _date = d),
                        ),
                        const SizedBox(height: 12),
                        AuthTextField(
                          label: 'Localização',
                          controller: _location,
                        ),
                        const SizedBox(height: 12),
                        AuthTextField(
                          label: 'Local / Venue',
                          controller: _venue,
                        ),
                        const SizedBox(height: 12),
                        AuthTextField(
                          label: 'Frase de destaque ("Os noivos")',
                          controller: _quote,
                        ),
                        const SizedBox(height: 12),
                        DropdownButtonFormField<CeremonyType>(
                          initialValue: _ceremonyType,
                          decoration: const InputDecoration(
                            labelText: 'Tipo de cerimónia',
                          ),
                          items: const [
                            DropdownMenuItem(
                              value: CeremonyType.civil,
                              child: Text('Civil'),
                            ),
                            DropdownMenuItem(
                              value: CeremonyType.religious,
                              child: Text('Religiosa'),
                            ),
                            DropdownMenuItem(
                              value: CeremonyType.both,
                              child: Text('Ambas'),
                            ),
                          ],
                          onChanged: (v) => setState(
                            () => _ceremonyType = v ?? _ceremonyType,
                          ),
                        ),
                        const SizedBox(height: 20),
                        PrimaryButton(
                          label: 'Guardar alterações',
                          loading: weddingState.loading,
                          onPressed: () {
                            ref
                                .read(weddingControllerProvider.notifier)
                                .update(
                                  wedding.copyWith(
                                    partnerName1: _partner1.text.trim(),
                                    partnerName2: _partner2.text.trim(),
                                    partner1Age: int.tryParse(
                                      _partner1Age.text.trim(),
                                    ),
                                    partner2Age: int.tryParse(
                                      _partner2Age.text.trim(),
                                    ),
                                    location: _location.text.trim(),
                                    venue: _venue.text.trim(),
                                    quote: _quote.text.trim(),
                                    weddingDate: _date,
                                    ceremonyType: _ceremonyType,
                                  ),
                                );
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(
                                content: Text('Casamento atualizado.'),
                              ),
                            );
                          },
                        ),
                        const SizedBox(height: 32),
                        _GuestFacingSection(weddingId: wedding.id),
                        const SizedBox(height: 32),
                        const _AccountSection(),
                        const SizedBox(height: 10),
                        _ShortcutRow(
                          icon: Icons.swap_horizontal_circle_outlined,
                          label: widget.fromGuestMode ? 'Ver em modo casamento' : 'Ver como convidado',
                          onTap: widget.fromGuestMode
                              ? () => context.go('/home')
                              : () => showGuestModeSheet(context),
                        ),
                        const SizedBox(height: 10),
                        _ShortcutRow(
                          icon: Icons.logout,
                          label: 'Terminar sessão',
                          onTap: () => ref
                              .read(authControllerProvider.notifier)
                              .logout(),
                        ),
                            ],
                          ),
                        ),
                      ],
                    ),
                  ),
                );
              },
            ),
    );
  }
}

class _ShortcutRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;

  const _ShortcutRow({
    required this.icon,
    required this.label,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
        decoration: BoxDecoration(
          color: AppTheme.surface,
          borderRadius: BorderRadius.circular(AppRadius.md),
        ),
        child: Row(
          children: [
            Icon(icon, size: 18, color: AppTheme.accentOliveDark),
            const SizedBox(width: 12),
            Expanded(
              child: Text(
                label,
                style: const TextStyle(fontWeight: FontWeight.w600),
              ),
            ),
            const Icon(Icons.chevron_right, color: AppTheme.inkMuted, size: 20),
          ],
        ),
      ),
    );
  }
}

/// Seleção do ícone da navbar através do carrossel "cover flow"
/// partilhado ([CoverFlowPicker]) — `null` representa o botão "+" de
/// desbloquear mais bonecos. Movido de "Os noivos" para aqui.
class _NavIconPicker extends ConsumerWidget {
  const _NavIconPicker();

  static const _maxExtent = 92.0;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final selected = ref.watch(weddingNavIconProvider);
    return CoverFlowPicker<WeddingNavIcon?>(
      options: [...WeddingNavIcon.values, null],
      selected: selected,
      itemExtent: _maxExtent,
      itemBuilder: (context, option, isSelected) => option == null
          ? const _MoreNavIconTile()
          : _NavIconOptionTile(option: option),
      onChanged: (option) {
        if (option == null) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(
              content: Text(
                'Em breve: ganha mais bonecos ou recebe-os como oferta.',
              ),
            ),
          );
          return;
        }
        ref.read(weddingNavIconProvider.notifier).select(option);
      },
    );
  }
}

class _NavIconOptionTile extends StatelessWidget {
  final WeddingNavIcon option;

  const _NavIconOptionTile({required this.option});

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(AppRadius.lg),
      child: Transform.scale(
        scale: option.zoom,
        child: Image.asset(
          option.assetPath,
          width: _NavIconPicker._maxExtent,
          height: _NavIconPicker._maxExtent,
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}

class _MoreNavIconTile extends StatelessWidget {
  const _MoreNavIconTile();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: _NavIconPicker._maxExtent,
      height: _NavIconPicker._maxExtent,
      decoration: BoxDecoration(
        color: AppColors.muted,
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      child: const Icon(Icons.add, color: AppTheme.inkMuted, size: 28),
    );
  }
}


/// "Para os convidados" — hora da cerimónia, mensagem de boas-vindas e
/// presentes (lista/IBAN). Até aqui os convidados tinham estes campos no
/// ecrã deles mas o casal não tinha onde os preencher.
class _GuestFacingSection extends StatefulWidget {
  final String weddingId;

  const _GuestFacingSection({required this.weddingId});

  @override
  State<_GuestFacingSection> createState() => _GuestFacingSectionState();
}

class _GuestFacingSectionState extends State<_GuestFacingSection> {
  final _time = TextEditingController();
  final _welcome = TextEditingController();
  final _giftUrl = TextEditingController();
  final _iban = TextEditingController();
  final _giftMessage = TextEditingController();
  bool _loading = true;
  bool _saving = false;
  bool _giftsAvailable = true;
  String? _joinMode;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final info = await loadGuestFacingInfo(widget.weddingId);
      _time.text = info.ceremonyTime ?? '';
      _welcome.text = info.welcomeMessage ?? '';
      _giftUrl.text = info.giftListUrl ?? '';
      _iban.text = info.giftIban ?? '';
      _giftMessage.text = info.giftMessage ?? '';
      _giftsAvailable = info.giftsAvailable;
      _joinMode = info.joinMode;
    } catch (_) {
      // Fica com os campos vazios; guardar continua possível.
    }
    if (mounted) setState(() => _loading = false);
  }

  Future<void> _save() async {
    setState(() => _saving = true);
    String message = 'Guardado. Os convidados já veem as alterações.';
    try {
      await saveGuestFacingInfo(
        widget.weddingId,
        GuestFacingInfo(
          ceremonyTime: _time.text,
          welcomeMessage: _welcome.text,
          giftListUrl: _giftUrl.text,
          giftIban: _iban.text,
          giftMessage: _giftMessage.text,
          giftsAvailable: _giftsAvailable,
          joinMode: _joinMode,
        ),
      );
    } catch (_) {
      message = 'Não foi possível guardar. Tenta outra vez.';
    }
    if (!mounted) return;
    setState(() => _saving = false);
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(message)));
  }

  @override
  void dispose() {
    _time.dispose();
    _welcome.dispose();
    _giftUrl.dispose();
    _iban.dispose();
    _giftMessage.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) return const SizedBox(height: 40);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('Para os convidados', style: Theme.of(context).textTheme.titleMedium),
        const SizedBox(height: 4),
        Text(
          'Aparece no ecrã dos convidados (Detalhes e Presentes).',
          style: Theme.of(context).textTheme.bodySmall,
        ),
        const SizedBox(height: 12),
        if (_joinMode != null) ...[
          DropdownButtonFormField<String>(
            initialValue: _joinMode,
            isExpanded: true,
            decoration: const InputDecoration(labelText: 'Quem pode entrar com o código do casal'),
            items: const [
              DropdownMenuItem(value: 'code_open', child: Text('Qualquer pessoa com o código')),
              DropdownMenuItem(value: 'code_with_match', child: Text('Só quem já está na lista (email/telefone)')),
              DropdownMenuItem(value: 'invite_only', child: Text('Só com convite individual')),
            ],
            onChanged: (v) => setState(() => _joinMode = v),
          ),
          const SizedBox(height: 12),
        ],
        AuthTextField(label: 'Hora da cerimónia (ex: 16:00)', controller: _time),
        const SizedBox(height: 12),
        AuthTextField(label: 'Mensagem de boas-vindas', controller: _welcome),
        if (_giftsAvailable) ...[
          const SizedBox(height: 12),
          AuthTextField(label: 'Link da lista de presentes', controller: _giftUrl),
          const SizedBox(height: 12),
          AuthTextField(label: 'IBAN para contribuições', controller: _iban),
          const SizedBox(height: 12),
          AuthTextField(label: 'Mensagem nos presentes', controller: _giftMessage),
        ],
        const SizedBox(height: 20),
        PrimaryButton(label: 'Guardar para os convidados', loading: _saving, onPressed: _save),
      ],
    );
  }
}


/// Definições do parceiro e do convidado — só a conta (e, para o
/// convidado, juntar-se a outro casamento com um código).
class _AccountSettingsScreen extends ConsumerWidget {
  final UserRole role;

  const _AccountSettingsScreen({required this.role});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        bottom: false,
        child: ListView(
          padding: EdgeInsets.zero,
          children: [
            const PageHeader(title: 'Definições', centered: true),
            Padding(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 24, AppTheme.screenMargin, 60),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const _AccountSection(),
                  if (role == UserRole.partner) ...[
                    const SizedBox(height: 10),
                    _ShortcutRow(
                      icon: Icons.storefront_outlined,
                      label: 'Informações do negócio',
                      onTap: () => context.push('/partner-business-info'),
                    ),
                    const SizedBox(height: 10),
                    _ShortcutRow(
                      icon: Icons.account_balance_outlined,
                      label: 'Pagamentos e conta Stripe',
                      onTap: () => context.push('/partner-payments'),
                    ),
                  ],
                  if (role == UserRole.guest) ...[
                    const SizedBox(height: 10),
                    _ShortcutRow(
                      icon: Icons.favorite_border,
                      label: 'Juntar-me a outro casamento',
                      onTap: () => showGuestModeSheet(context),
                    ),
                  ],
                  const SizedBox(height: 10),
                  _ShortcutRow(
                    icon: Icons.support_agent_outlined,
                    label: 'Falar com a equipa',
                    onTap: () => context.push('/support'),
                  ),
                  const SizedBox(height: 10),
                  _ShortcutRow(
                    icon: Icons.logout,
                    label: 'Terminar sessão',
                    onTap: () => ref.read(authControllerProvider.notifier).logout(),
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// "Conta" — nome, email e alterar password. Igual para todos os tipos
/// de conta.
class _AccountSection extends ConsumerWidget {
  const _AccountSection();

  Future<void> _editName(BuildContext context, WidgetRef ref, String current) async {
    final controller = TextEditingController(text: current);
    final result = await showDialog<String>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('O teu nome'),
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
    if (result == null || result.isEmpty) return;
    try {
      await ref.read(authControllerProvider.notifier).updateFullName(result);
    } catch (_) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível guardar o nome.')),
        );
      }
    }
  }

  Future<void> _resetPassword(BuildContext context, WidgetRef ref, String email) async {
    var message = 'Enviámos um email para $email com o link para mudar a password.';
    try {
      await ref.read(authControllerProvider.notifier).requestPasswordReset(email);
    } catch (_) {
      message = 'Não foi possível enviar o email. Tenta daqui a uns minutos.';
    }
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(message)));
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    if (profile == null) return const SizedBox.shrink();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text('Conta', style: Theme.of(context).textTheme.titleMedium),
        const SizedBox(height: 12),
        _ShortcutRow(
          icon: Icons.person_outline,
          label: 'Nome · ${profile.fullName}',
          onTap: () => _editName(context, ref, profile.fullName),
        ),
        const SizedBox(height: 10),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
          decoration: BoxDecoration(
            color: AppTheme.surface,
            borderRadius: BorderRadius.circular(AppRadius.md),
          ),
          child: Row(
            children: [
              const Icon(Icons.mail_outline, size: 18, color: AppTheme.accentOliveDark),
              const SizedBox(width: 12),
              Expanded(
                child: Text(
                  profile.email,
                  style: const TextStyle(fontWeight: FontWeight.w600),
                  overflow: TextOverflow.ellipsis,
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 10),
        _ShortcutRow(
          icon: Icons.lock_outline,
          label: 'Mudar password',
          onTap: () => _resetPassword(context, ref, profile.email),
        ),
      ],
    );
  }
}
