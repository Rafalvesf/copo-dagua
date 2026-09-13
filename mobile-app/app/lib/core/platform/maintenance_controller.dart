import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';

class MaintenanceState {
  final bool couple;
  final bool partner;

  const MaintenanceState({this.couple = false, this.partner = false});
}

/// Liga-se a `platform_settings.maintenance_mode_couple`/
/// `maintenance_mode_partner` (`database/migrations/034_maintenance_mode.sql`)
/// — pedido explícito do utilizador: "add a maintenance switch for
/// couple, partner and both side at the same time", controlado no
/// dashboard do admin (`admin-web/app/components/MaintenanceSwitch.tsx`).
/// Falha aberto (`const MaintenanceState()`, os dois `false`) enquanto
/// carrega ou se o pedido falhar — nunca bloquear a app inteira por um
/// erro de rede neste único pedido. Relê sempre que a sessão muda
/// (login/logout) em vez de subscrição em tempo real — suficiente para
/// o caso de uso (um admin ligar manutenção não precisa de expulsar
/// sessões já abertas no mesmo segundo).
class MaintenanceController extends Notifier<MaintenanceState> {
  @override
  MaintenanceState build() {
    ref.watch(authControllerProvider.select((s) => s.status));
    Future.microtask(_load);
    return const MaintenanceState();
  }

  Future<void> retry() => _load();

  Future<void> _load() async {
    try {
      final row = await supabase
          .from('platform_settings')
          .select('maintenance_mode_couple, maintenance_mode_partner')
          .eq('id', 1)
          .maybeSingle();
      if (row == null) return;
      state = MaintenanceState(
        couple: row['maintenance_mode_couple'] as bool? ?? false,
        partner: row['maintenance_mode_partner'] as bool? ?? false,
      );
    } catch (_) {
      // Falha aberto — ver nota na classe.
    }
  }
}

final maintenanceControllerProvider =
    NotifierProvider<MaintenanceController, MaintenanceState>(MaintenanceController.new);
