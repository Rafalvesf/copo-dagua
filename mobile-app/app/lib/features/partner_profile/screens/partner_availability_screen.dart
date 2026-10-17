import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/auth_ui.dart';
import '../../../shared/widgets/page_header.dart';

/// "Disponibilidade" do parceiro — saiu de Informações do negócio para
/// ter a sua própria linha no Perfil (pedido 2026-10-17).
class PartnerAvailabilityScreen extends ConsumerStatefulWidget {
  const PartnerAvailabilityScreen({super.key});

  @override
  ConsumerState<PartnerAvailabilityScreen> createState() => _PartnerAvailabilityScreenState();
}

class _PartnerAvailabilityScreenState extends ConsumerState<PartnerAvailabilityScreen> {
  late final _initial = ref.read(authControllerProvider).profile!;
  late bool _accepting = _initial.acceptingRequests;
  late bool _travels = _initial.travelsForEvents;
  late final _distance = TextEditingController(text: _initial.maxTravelDistanceKm?.toString() ?? '');
  bool _saving = false;

  @override
  void dispose() {
    _distance.dispose();
    super.dispose();
  }

  Future<void> _save() async {
    setState(() => _saving = true);
    final km = int.tryParse(_distance.text.replaceAll(RegExp(r'[^0-9]'), ''));
    var msg = 'Disponibilidade guardada.';
    try {
      await ref.read(partnerProfileControllerProvider.notifier).updateBusinessInfo(
            acceptingRequests: _accepting,
            travelsForEvents: _travels,
            maxTravelDistanceKm: km != null && km > 0 && km <= 2000 ? km : null,
          );
    } catch (_) {
      msg = 'Não foi possível guardar. Tenta outra vez.';
    }
    if (!mounted) return;
    setState(() => _saving = false);
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    if (msg == 'Disponibilidade guardada.') Navigator.of(context).maybePop();
  }

  Widget _switch(IconData icon, String label, String subtitle, bool value, ValueChanged<bool> onChanged) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Row(
        children: [
          Icon(icon, size: 20, color: AppTheme.inkMuted),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(label, style: const TextStyle(fontSize: AppFontSize.base + 1, color: AppTheme.ink)),
                Text(subtitle, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
              ],
            ),
          ),
          Switch(value: value, activeTrackColor: AppTheme.accentOliveDark, onChanged: onChanged),
        ],
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.only(bottom: 40),
          children: [
            const PageHeader(title: 'Disponibilidade', centered: true),
            Padding(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                    decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.lg)),
                    child: Column(
                      children: [
                        _switch(Icons.event_available_outlined, 'Aceitar novos pedidos', 'Recebe pedidos de orçamento dos clientes.', _accepting,
                            (v) => setState(() => _accepting = v)),
                        const Divider(height: 1, color: AppTheme.borderMuted),
                        _switch(Icons.directions_car_outlined, 'Deslocações', 'Disponível para ir ao local do evento.', _travels,
                            (v) => setState(() => _travels = v)),
                      ],
                    ),
                  ),
                  if (_travels)
                    AuthField(
                      label: 'Distância máxima de deslocação (km)',
                      controller: _distance,
                      hint: 'Ex.: 100',
                      keyboardType: TextInputType.number,
                      topGap: 20,
                    ),
                  const SizedBox(height: 28),
                  AuthPrimaryButton(label: 'Guardar', loading: _saving, onPressed: _save),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
