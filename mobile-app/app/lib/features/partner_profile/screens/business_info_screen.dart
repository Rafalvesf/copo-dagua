import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/mock/mock_backend.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';

class BusinessInfoScreen extends ConsumerStatefulWidget {
  const BusinessInfoScreen({super.key});

  @override
  ConsumerState<BusinessInfoScreen> createState() =>
      _BusinessInfoScreenState();
}

class _BusinessInfoScreenState extends ConsumerState<BusinessInfoScreen> {
  late var _profile = ref.read(authControllerProvider).profile!;
  bool _saving = false;

  Future<void> _editField({
    required String label,
    required String value,
    required ValueChanged<String> onSaved,
  }) async {
    final controller = TextEditingController(text: value);
    final result = await showDialog<String>(
      context: context,
      builder: (context) => AlertDialog(
        title: Text(label),
        content: TextField(controller: controller, autofocus: true),
        actions: [
          TextButton(
            onPressed: () => Navigator.of(context).pop(),
            child: const Text('Cancelar'),
          ),
          FilledButton(
            onPressed: () => Navigator.of(context).pop(controller.text),
            child: const Text('Guardar'),
          ),
        ],
      ),
    );
    if (result == null) return;
    setState(() => onSaved(result.trim()));
  }

  void _comingSoon() {
    ScaffoldMessenger.of(
      context,
    ).showSnackBar(const SnackBar(content: Text('Em breve.')));
  }

  Future<void> _save() async {
    setState(() => _saving = true);
    final updated = await MockBackend.instance.updateBusinessInfo(
      _profile.id,
      fullName: _profile.fullName,
      businessDescription: _profile.businessDescription,
      website: _profile.website,
      instagram: _profile.instagram,
      phone: _profile.phone,
      contactEmail: _profile.contactEmail,
      acceptingRequests: _profile.acceptingRequests,
      travelsForEvents: _profile.travelsForEvents,
    );
    ref.read(authControllerProvider.notifier).refreshProfile(updated);
    if (!mounted) return;
    setState(() => _saving = false);
    ScaffoldMessenger.of(
      context,
    ).showSnackBar(const SnackBar(content: Text('Alterações guardadas.')));
    Navigator.of(context).pop();
  }

  @override
  Widget build(BuildContext context) {
    final serviceAreas = _profile.serviceAreas.join(' · ');

    return GradientScaffold(
      background: AppBackground.feed,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(
                AppTheme.screenMargin,
                20,
                AppTheme.screenMargin,
                0,
              ),
              child: Row(
                children: [
                  const CircleBackButton(),
                  const Spacer(),
                  const AccountSwitcherBadge(),
                ],
              ),
            ),
            Expanded(
              child: ListView(
                padding: const EdgeInsets.fromLTRB(
                  AppTheme.screenMargin,
                  18,
                  AppTheme.screenMargin,
                  48,
                ),
                children: [
                  Row(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(
                              'Informações do negócio',
                              style: AppTypography.displaySerif(
                                fontSize: 28,
                                color: AppTheme.ink,
                              ),
                            ),
                            const SizedBox(height: 10),
                            const Text(
                              'Mantém os dados do teu negócio atualizados '
                              'para que os casais te possam encontrar.',
                              style: TextStyle(
                                color: AppTheme.inkMuted,
                                fontSize: 13.5,
                                height: 1.4,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ],
                        ),
                      ),
                      const SizedBox(width: 14),
                      ClipOval(
                        child: Container(
                          width: 84,
                          height: 84,
                          color: AppColors.green,
                          padding: const EdgeInsets.all(10),
                          child: Image.asset(
                            'assets/images/nav_icon_bears.png',
                            fit: BoxFit.contain,
                          ),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),
                  const Text(
                    'Dados do negócio',
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 14.5,
                      color: AppTheme.ink,
                    ),
                  ),
                  const SizedBox(height: 10),
                  _GroupedCard(
                    rows: [
                      _InfoRow(
                        icon: Icons.sell_outlined,
                        label: 'Nome do negócio',
                        value: _profile.fullName,
                        editable: true,
                        onTap: () => _editField(
                          label: 'Nome do negócio',
                          value: _profile.fullName,
                          onSaved: (v) => _profile = _profile.copyWith(
                            fullName: v.isEmpty ? _profile.fullName : v,
                          ),
                        ),
                      ),
                      _InfoRow(
                        icon: Icons.camera_alt_outlined,
                        label: 'Categoria',
                        value: _profile.category?.label ?? '—',
                        onTap: _comingSoon,
                      ),
                      _InfoRow(
                        icon: Icons.description_outlined,
                        label: 'Descrição',
                        value: _profile.businessDescription ?? '—',
                        onTap: _comingSoon,
                      ),
                      _InfoRow(
                        icon: Icons.place_outlined,
                        label: 'Localização',
                        value: _profile.location ?? '—',
                        onTap: _comingSoon,
                      ),
                      _InfoRow(
                        icon: Icons.radar_outlined,
                        label: 'Área de serviço',
                        value: serviceAreas.isEmpty ? '—' : serviceAreas,
                        onTap: _comingSoon,
                      ),
                      _InfoRow(
                        icon: Icons.star_border_rounded,
                        label: 'Anos de experiência',
                        value: _profile.yearsExperience == null
                            ? '—'
                            : '${_profile.yearsExperience} anos',
                        onTap: _comingSoon,
                      ),
                      _InfoRow(
                        icon: Icons.language,
                        label: 'Website',
                        value: (_profile.website == null ||
                                _profile.website!.isEmpty)
                            ? 'Adiciona o teu website (opcional)'
                            : _profile.website!,
                        editable: true,
                        onTap: () => _editField(
                          label: 'Website',
                          value: _profile.website ?? '',
                          onSaved: (v) =>
                              _profile = _profile.copyWith(website: v),
                        ),
                      ),
                      _InfoRow(
                        icon: Icons.camera_outlined,
                        label: 'Instagram',
                        value: _profile.instagram ?? '—',
                        editable: true,
                        onTap: () => _editField(
                          label: 'Instagram',
                          value: _profile.instagram ?? '',
                          onSaved: (v) =>
                              _profile = _profile.copyWith(instagram: v),
                        ),
                      ),
                      _InfoRow(
                        icon: Icons.call_outlined,
                        label: 'Telefone profissional',
                        value: _profile.phone ?? '—',
                        editable: true,
                        onTap: () => _editField(
                          label: 'Telefone profissional',
                          value: _profile.phone ?? '',
                          onSaved: (v) =>
                              _profile = _profile.copyWith(phone: v),
                        ),
                      ),
                      _InfoRow(
                        icon: Icons.mail_outline,
                        label: 'Email de contacto',
                        value: _profile.contactEmail ?? '—',
                        editable: true,
                        isLast: true,
                        onTap: () => _editField(
                          label: 'Email de contacto',
                          value: _profile.contactEmail ?? '',
                          onSaved: (v) =>
                              _profile = _profile.copyWith(contactEmail: v),
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),
                  const Text(
                    'Disponibilidade',
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 14.5,
                      color: AppTheme.ink,
                    ),
                  ),
                  const SizedBox(height: 10),
                  _GroupedCard(
                    rows: [
                      _SwitchRow(
                        icon: Icons.event_available_outlined,
                        label: 'Aceitar novos pedidos',
                        subtitle: 'Recebe pedidos de orçamentos de casais.',
                        value: _profile.acceptingRequests,
                        onChanged: (v) => setState(
                          () => _profile =
                              _profile.copyWith(acceptingRequests: v),
                        ),
                      ),
                      _SwitchRow(
                        icon: Icons.directions_car_outlined,
                        label: 'Deslocações',
                        subtitle: 'Disponível para deslocações.',
                        value: _profile.travelsForEvents,
                        onChanged: (v) => setState(
                          () => _profile =
                              _profile.copyWith(travelsForEvents: v),
                        ),
                      ),
                      _InfoRow(
                        icon: Icons.place_outlined,
                        label: 'Distância máxima de deslocação',
                        value: _profile.maxTravelDistanceKm == null
                            ? '—'
                            : '${_profile.maxTravelDistanceKm} km',
                        isLast: true,
                        onTap: _comingSoon,
                      ),
                    ],
                  ),
                  const SizedBox(height: 24),
                  PrimaryButton(
                    label: 'Guardar alterações',
                    loading: _saving,
                    onPressed: _saving ? null : _save,
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

class _GroupedCard extends StatelessWidget {
  final List<Widget> rows;

  const _GroupedCard({required this.rows});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(18),
        border: Border.all(color: AppColors.gray),
      ),
      child: Column(children: rows),
    );
  }
}

class _InfoRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final String value;
  final bool editable;
  final bool isLast;
  final VoidCallback onTap;

  const _InfoRow({
    required this.icon,
    required this.label,
    required this.value,
    this.editable = false,
    this.isLast = false,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 13),
        decoration: BoxDecoration(
          border: isLast
              ? null
              : const Border(
                  bottom: BorderSide(color: AppColors.gray, width: 1),
                ),
        ),
        child: Row(
          children: [
            Icon(icon, size: 19, color: AppTheme.inkMuted),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    label,
                    style: const TextStyle(
                      color: AppTheme.inkMuted,
                      fontSize: 11.5,
                    ),
                  ),
                  const SizedBox(height: 2),
                  Text(
                    value,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(
                      color: AppTheme.ink,
                      fontSize: 13.5,
                      fontWeight: FontWeight.w600,
                    ),
                  ),
                ],
              ),
            ),
            const SizedBox(width: 8),
            Icon(
              editable ? Icons.edit_outlined : Icons.chevron_right_rounded,
              size: editable ? 16 : 20,
              color: AppTheme.inkMuted,
            ),
          ],
        ),
      ),
    );
  }
}

class _SwitchRow extends StatelessWidget {
  final IconData icon;
  final String label;
  final String subtitle;
  final bool value;
  final ValueChanged<bool> onChanged;

  const _SwitchRow({
    required this.icon,
    required this.label,
    required this.subtitle,
    required this.value,
    required this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 10),
      decoration: const BoxDecoration(
        border: Border(bottom: BorderSide(color: AppColors.gray, width: 1)),
      ),
      child: Row(
        children: [
          Icon(icon, size: 19, color: AppTheme.inkMuted),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(
                  label,
                  style: const TextStyle(
                    fontWeight: FontWeight.w600,
                    fontSize: 13.5,
                    color: AppTheme.ink,
                  ),
                ),
                const SizedBox(height: 2),
                Text(
                  subtitle,
                  style: const TextStyle(
                    color: AppTheme.inkMuted,
                    fontSize: 11.5,
                  ),
                ),
              ],
            ),
          ),
          Switch(
            value: value,
            activeThumbColor: AppTheme.accentOliveDark,
            onChanged: onChanged,
          ),
        ],
      ),
    );
  }
}
