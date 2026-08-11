import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../core/wedding/wedding_nav_icon.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/support_chat.dart';
import '../../../shared/widgets/wedding_widgets.dart';

class WeddingDetailsScreen extends ConsumerStatefulWidget {
  const WeddingDetailsScreen({super.key});

  @override
  ConsumerState<WeddingDetailsScreen> createState() =>
      _WeddingDetailsScreenState();
}

class _WeddingDetailsScreenState extends ConsumerState<WeddingDetailsScreen> {
  final _partner1 = TextEditingController();
  final _partner1Age = TextEditingController();
  final _partner2 = TextEditingController();
  final _partner2Age = TextEditingController();
  final _location = TextEditingController();
  final _venue = TextEditingController();
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
    _date = wedding.weddingDate;
    _ceremonyType = wedding.ceremonyType;
  }

  @override
  Widget build(BuildContext context) {
    final weddingState = ref.watch(weddingControllerProvider);
    final wedding = weddingState.wedding;

    return Scaffold(
      appBar: AppBar(
        title: const Text('O nosso casamento'),
        leading: const CircleBackButton(),
      ),
      body: wedding == null
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                Builder(
                  builder: (context) {
                    _syncControllers(wedding);
                    return ListView(
                      padding: const EdgeInsets.fromLTRB(
                        AppTheme.screenMargin,
                        24,
                        AppTheme.screenMargin,
                        110,
                      ),
                      children: [
                        WeddingCoverHeader(wedding: wedding),
                        const SizedBox(height: 24),
                        Text(
                          'Bonecos da navbar',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                        const SizedBox(height: 4),
                        Text(
                          'Escolhe a ilustração do ícone central da barra de navegação.',
                          style: Theme.of(context).textTheme.bodySmall,
                        ),
                        const SizedBox(height: 12),
                        const _NavIconPicker(),
                        const SizedBox(height: 24),
                        Text(
                          'Editar detalhes',
                          style: Theme.of(context).textTheme.titleMedium,
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
                      ],
                    );
                  },
                ),
                const Positioned(
                  left: AppTheme.screenMargin,
                  right: AppTheme.screenMargin,
                  bottom: 24,
                  child: FloatingBottomNav(current: AppTab.wedding),
                ),
                const Positioned.fill(child: DraggableChatBubble()),
              ],
            ),
    );
  }
}

class _NavIconPicker extends ConsumerWidget {
  const _NavIconPicker();

  static const _tileExtent = 92.0;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final selected = ref.watch(weddingNavIconProvider);
    final options = WeddingNavIcon.values;

    if (options.length <= 4) {
      return Row(
        children: [
          for (final option in options) ...[
            _NavIconOptionTile(
              option: option,
              selected: option == selected,
              onTap: () =>
                  ref.read(weddingNavIconProvider.notifier).select(option),
            ),
            if (option != options.last) const SizedBox(width: 14),
          ],
        ],
      );
    }

    // Mais de 4 opções: grelha de 4 colunas com scroll vertical — a 4ª
    // posição vira um botão "+" para ganhar/receber mais bonecos, e o
    // resto fica acessível a fazer scroll na própria grelha.
    final tiles = <Widget>[];
    for (var i = 0; i < options.length; i++) {
      if (i == 3) tiles.add(const _MoreNavIconTile());
      tiles.add(
        _NavIconOptionTile(
          option: options[i],
          selected: options[i] == selected,
          onTap: () =>
              ref.read(weddingNavIconProvider.notifier).select(options[i]),
        ),
      );
    }

    return SizedBox(
      height: _tileExtent * 2 + 20,
      child: GridView.count(
        crossAxisCount: 4,
        mainAxisSpacing: 14,
        crossAxisSpacing: 14,
        childAspectRatio: 0.78,
        children: tiles,
      ),
    );
  }
}

class _NavIconOptionTile extends StatelessWidget {
  final WeddingNavIcon option;
  final bool selected;
  final VoidCallback onTap;

  const _NavIconOptionTile({
    required this.option,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(20),
      onTap: onTap,
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(18),
            child: Image.asset(
              option.assetPath,
              width: _NavIconPicker._tileExtent,
              height: _NavIconPicker._tileExtent,
              fit: BoxFit.cover,
            ),
          ),
          const SizedBox(height: 6),
          Icon(
            selected ? Icons.check_circle : Icons.circle_outlined,
            size: 16,
            color: selected ? AppTheme.ink : AppTheme.inkMuted,
          ),
        ],
      ),
    );
  }
}

class _MoreNavIconTile extends StatelessWidget {
  const _MoreNavIconTile();

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(20),
      onTap: () => ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text(
            'Em breve: ganha mais bonecos ou recebe-os como oferta.',
          ),
        ),
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        children: [
          Container(
            width: _NavIconPicker._tileExtent,
            height: _NavIconPicker._tileExtent,
            decoration: BoxDecoration(
              color: AppColors.muted,
              borderRadius: BorderRadius.circular(18),
            ),
            child: const Icon(Icons.add, color: AppTheme.inkMuted, size: 32),
          ),
          const SizedBox(height: 6),
          const Icon(
            Icons.circle_outlined,
            size: 16,
            color: Colors.transparent,
          ),
        ],
      ),
    );
  }
}
