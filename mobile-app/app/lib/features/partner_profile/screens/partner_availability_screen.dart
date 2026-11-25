import '../../../shared/widgets/opening_hours.dart';
import 'package:copo_dagua_app/shared/hero_icons.dart';
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

  /// Horário de funcionamento (241), na Disponibilidade (pedido 2026-11-25).
  OpeningHours? _hours;

  @override
  void initState() {
    super.initState();
    ref.read(partnerOpeningHoursProvider(_initial.id).future).then((h) {
      if (mounted && _hours == null) setState(() => _hours = h ?? OpeningHours.standard);
    });
  }

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
      if (_hours != null) {
        await saveMyOpeningHours(_hours!);
        ref.invalidate(partnerOpeningHoursProvider(_initial.id));
      }
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
          // Sem ícones nas linhas (DESIGN.md §4).
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(label, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(subtitle, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
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
      backgroundColor: AppTheme.background,
      body: SafeArea(top: false, 
        child: ListView(
          padding: ( const EdgeInsets.only(bottom: 40)).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
          children: [
            const PageHeader(title: 'Disponibilidade', centered: true),
            Padding(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  // Horário de funcionamento: todos os dias de uma vez ou
                  // cada dia à parte (pedido 2026-11-25).
                  const Padding(
                    padding: EdgeInsets.only(bottom: 8),
                    child: Text('HORÁRIO DE FUNCIONAMENTO',
                        style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                  ),
                  if (_hours == null)
                    const SizedBox(height: 120, child: Center(child: CircularProgressIndicator(strokeWidth: 2.5)))
                  else
                    OpeningHoursEditor(value: _hours!, onChanged: (h) => setState(() => _hours = h)),
                  const Padding(
                    padding: EdgeInsets.fromLTRB(4, 8, 4, 0),
                    child: Text('Aparece na tua página. Toca nas horas para mudar um dia; «Aplicar a todos» muda todos de uma vez.',
                        style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  ),
                  const SizedBox(height: 24),
                  const Padding(
                    padding: EdgeInsets.only(bottom: 8),
                    child: Text('PEDIDOS E DESLOCAÇÕES',
                        style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                  ),
                  Container(
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                    decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                    child: Column(
                      children: [
                        _switch(Hi.calendarDays, 'Aceitar novos pedidos', 'Recebe pedidos de orçamento dos clientes.', _accepting,
                            (v) => setState(() => _accepting = v)),
                        const Divider(height: 1, thickness: 1, color: Color(0xFFD9D9D9)),
                        _switch(Hi.truck, 'Deslocações', 'Disponível para ir ao local do evento.', _travels,
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
