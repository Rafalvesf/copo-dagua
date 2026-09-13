import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../auth/auth_controller.dart';
import '../models/models.dart';
import '../supabase/supabase_config.dart';

class PartnerVenueTablesState {
  final bool loading;
  final List<VenueTableType> tableTypes;

  const PartnerVenueTablesState({this.loading = false, this.tableTypes = const []});

  int get totalTables => tableTypes.fold(0, (sum, t) => sum + t.quantity);

  PartnerVenueTablesState copyWith({bool? loading, List<VenueTableType>? tableTypes}) {
    return PartnerVenueTablesState(
      loading: loading ?? this.loading,
      tableTypes: tableTypes ?? this.tableTypes,
    );
  }
}

/// Inventário de mesas de um local (parceiro de categoria "venue") —
/// liga-se a `partner_venue_tables` real
/// (`database/migrations/022_venue_tables.sql`). RLS: "Owner manages own
/// venue tables" garante que só o próprio parceiro edita as suas linhas.
/// Ver `mobile-app/payments/stripe-connect.md` para o mesmo padrão de
/// controller Notifier + Supabase direto (sem Edge Function — só um CRUD
/// simples, sem transição de estado a validar).
class PartnerVenueTablesController extends Notifier<PartnerVenueTablesState> {
  @override
  PartnerVenueTablesState build() {
    final partnerId = ref.watch(authControllerProvider.select((s) => s.profile?.id));
    if (partnerId != null) {
      Future.microtask(() => load(partnerId));
    }
    return const PartnerVenueTablesState();
  }

  Future<void> load(String partnerId) async {
    state = state.copyWith(loading: true);
    final rows = await supabase
        .from('partner_venue_tables')
        .select()
        .eq('partner_id', partnerId)
        .order('created_at', ascending: true);
    state = PartnerVenueTablesState(
      loading: false,
      tableTypes: rows.map(_fromRow).toList(),
    );
  }

  Future<void> add({
    required TableShape shape,
    required int seats,
    required int quantity,
  }) async {
    final partnerId = supabase.auth.currentUser!.id;
    final row = await supabase
        .from('partner_venue_tables')
        .insert({
          'partner_id': partnerId,
          'shape': shape.name,
          'seats': seats,
          'quantity': quantity,
        })
        .select()
        .single();
    state = state.copyWith(tableTypes: [...state.tableTypes, _fromRow(row)]);
  }

  Future<void> update(
    String id, {
    required TableShape shape,
    required int seats,
    required int quantity,
  }) async {
    final row = await supabase
        .from('partner_venue_tables')
        .update({
          'shape': shape.name,
          'seats': seats,
          'quantity': quantity,
          'updated_at': DateTime.now().toIso8601String(),
        })
        .eq('id', id)
        .select()
        .single();
    final updated = _fromRow(row);
    state = state.copyWith(
      tableTypes: [
        for (final t in state.tableTypes) if (t.id == id) updated else t,
      ],
    );
  }

  Future<void> remove(String id) async {
    await supabase.from('partner_venue_tables').delete().eq('id', id);
    state = state.copyWith(
      tableTypes: state.tableTypes.where((t) => t.id != id).toList(),
    );
  }

  VenueTableType _fromRow(Map<String, dynamic> row) => VenueTableType(
    id: row['id'] as String,
    partnerId: row['partner_id'] as String,
    shape: TableShape.values.byName(row['shape'] as String),
    seats: row['seats'] as int,
    quantity: row['quantity'] as int,
  );
}

final partnerVenueTablesControllerProvider =
    NotifierProvider<PartnerVenueTablesController, PartnerVenueTablesState>(
      PartnerVenueTablesController.new,
    );
