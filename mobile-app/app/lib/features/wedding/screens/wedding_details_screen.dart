import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/budget/budget_controller.dart';
import '../../../core/budget/effective_budget.dart';
import '../../../core/checklist/checklist_controller.dart';
import '../../../core/guests/guest_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../core/wedding/wedding_nav_icon.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/cover_flow_picker.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';
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
    final checklistState = ref.watch(checklistControllerProvider);
    final guestsState = ref.watch(guestsControllerProvider);
    final budgetState = ref.watch(budgetControllerProvider);
    final budget = budgetState.budget == null
        ? null
        : computeEffectiveBudget(budgetState.budget!, checklistState.items);

    return GradientScaffold(
      background: AppBackground.subtle,
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
                    return EdgeFade(
                      topFadeHeight: 32,
                      bottomFadeHeight: 140,
                      child: ListView(
                        padding: const EdgeInsets.fromLTRB(
                          AppTheme.screenMargin,
                          32,
                          AppTheme.screenMargin,
                          140,
                        ),
                        children: [
                          WeddingCoverHeader(wedding: wedding),
                          const SizedBox(height: 22),
                          UrgentTasksSection(
                            items: checklistState.items,
                            onOpenChecklist: () => context.push('/checklist'),
                          ),
                          const SizedBox(height: 22),
                          Row(
                            children: [
                              Expanded(
                                child: BudgetStatCard(
                                  budget: budget,
                                  onTap: () => context.push('/budget'),
                                ),
                              ),
                              const SizedBox(width: 12),
                              Expanded(
                                child: GuestsStatCard(
                                  confirmed: guestsState.confirmedCount,
                                  total: guestsState.guests.length,
                                  onTap: () => context.push('/guests'),
                                ),
                              ),
                            ],
                          ),
                          const SizedBox(height: 16),
                          _WeddingCopilotCard(
                            onTap: () => context.push(
                              '/partners',
                              extra: const PartnerPickerArgs(
                                category: PartnerCategory.music,
                              ),
                            ),
                          ),
                          const SizedBox(height: 24),
                          Text(
                            'Nós <3',
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
                          Row(
                            children: [
                              const Icon(
                                Icons.person_outline,
                                size: 18,
                                color: AppTheme.ink,
                              ),
                              const SizedBox(width: 6),
                              Text(
                                'Editar detalhes',
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
                      ),
                    );
                  },
                ),
                const Positioned(
                  left: 0,
                  right: 0,
                  bottom: 0,
                  child: FloatingBottomNav(current: AppTab.wedding),
                ),
                const Positioned.fill(child: DraggableChatBubble()),
              ],
            ),
    );
  }
}

class _WeddingCopilotCard extends StatelessWidget {
  final VoidCallback onTap;

  const _WeddingCopilotCard({required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(
        gradient: LinearGradient(
          colors: [AppColors.purple.withValues(alpha: 0.7), AppColors.purple],
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
        ),
        borderRadius: BorderRadius.circular(20),
      ),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 36,
            height: 36,
            decoration: const BoxDecoration(
              color: Colors.white,
              shape: BoxShape.circle,
            ),
            child: const Icon(
              Icons.auto_awesome,
              size: 18,
              color: AppColors.purple,
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text(
                  'Wedding Copilot',
                  style: TextStyle(
                    color: Colors.white,
                    fontWeight: FontWeight.w800,
                    fontSize: 14,
                  ),
                ),
                const SizedBox(height: 4),
                Text(
                  'Ainda não tens música reservada. Os DJs mais populares ficam completos 9 meses antes.',
                  style: TextStyle(
                    color: Colors.white.withValues(alpha: 0.92),
                    fontSize: 12,
                    height: 1.4,
                  ),
                ),
                const SizedBox(height: 10),
                SnappyTap.builder(
                  onTap: onTap,
                  builder: (context, hovered) => Container(
                    padding: const EdgeInsets.symmetric(
                      horizontal: 14,
                      vertical: 8,
                    ),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(999),
                      boxShadow: hovered
                          ? AppTheme.cardShadowStrong
                          : AppTheme.cardShadow,
                    ),
                    child: const Text(
                      'Ver sugestões',
                      style: TextStyle(
                        color: AppColors.purple,
                        fontSize: 12,
                        fontWeight: FontWeight.w700,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

/// Seleção do ícone da navbar através do carrossel "cover flow"
/// partilhado ([CoverFlowPicker]) — `null` representa o botão "+" de
/// desbloquear mais bonecos.
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
