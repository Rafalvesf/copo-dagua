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

/// Ecrã de catch-all para tudo o que os mockups do redesign não
/// mostram diretamente — o formulário de edição do casamento, o
/// carrossel de ícone da navbar e os atalhos para Orçamento/
/// Convidados/Lugares, que antes viviam espalhados por "Os noivos" e
/// pelo menu do Home. Acedido pela engrenagem no Home e pelo "..." em
/// "Os noivos".
class SettingsScreen extends ConsumerStatefulWidget {
  const SettingsScreen({super.key});

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
                        const PageHeader(title: 'Definições', titleFontSize: 26),
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
                          'Atalhos',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                        const SizedBox(height: 12),
                        _ShortcutRow(
                          icon: Icons.savings_outlined,
                          label: 'Orçamento',
                          onTap: () => context.push('/budget'),
                        ),
                        const SizedBox(height: 10),
                        _ShortcutRow(
                          icon: Icons.people_outline,
                          label: 'Convidados',
                          onTap: () => context.push('/guests'),
                        ),
                        const SizedBox(height: 10),
                        _ShortcutRow(
                          icon: Icons.event_seat_outlined,
                          label: 'Lugares',
                          onTap: () => context.push('/seating'),
                        ),
                        const SizedBox(height: 28),
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
                        Text(
                          'Conta',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                        const SizedBox(height: 12),
                        _ShortcutRow(
                          icon: Icons.swap_horiz,
                          label: 'Ver como Parceiro',
                          onTap: () => ref
                              .read(authControllerProvider.notifier)
                              .switchDemoAccount(),
                        ),
                        const SizedBox(height: 10),
                        _ShortcutRow(
                          icon: Icons.logout,
                          label: 'Sair',
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
    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(16),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
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
      borderRadius: BorderRadius.circular(18),
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
        borderRadius: BorderRadius.circular(18),
      ),
      child: const Icon(Icons.add, color: AppTheme.inkMuted, size: 28),
    );
  }
}
