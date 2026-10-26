import '../../shared/money.dart';
import '../supabase/supabase_config.dart';

/// Relatórios para descarregar (pedido do utilizador, 2026-10-20):
/// - parceiros: "Lucros e clientes" em PDF e Excel;
/// - organizadores: "Gastos e parceiros" em PDF e Excel;
/// - ambos: comprovativos dos pagamentos feitos na app, em PDF.
///
/// Os comprovativos NÃO são faturas certificadas pela AT: a fatura legal
/// continua a ser emitida pelo parceiro no seu programa de faturação.

// Os ficheiros (PDF/Excel) estão em `export_files.dart`, carregado só ao
// exportar (2026-10-25: as bibliotecas de PDF e Excel deixam de vir no
// primeiro download da app).

// ------------------------------------------------------------ dados

/// Os preços na app incluem sempre IVA (o parceiro confirma ao escrevê-los,
/// `shared/widgets/vat_confirm.dart`). Taxa normal em Portugal continental.
const vatRate = 0.23;
double vatBase(double gross) => double.parse((gross / (1 + vatRate)).toStringAsFixed(2));
double vatAmount(double gross) => double.parse((gross - vatBase(gross)).toStringAsFixed(2));

/// Comissão da À Nossa! (`platform_settings.platform_commission_percentage`),
/// cobrada ao cliente por cima do valor do parceiro — mesma conta em
/// cêntimos que `amountWithCommission()` e o checkout da Stripe.
double exportCommissionPct = 0;

/// Taxa descontada ao parceiro (migrações 123/126), IVA incluído, já em
/// texto ("8% até 2 000 €, 6% até 10 000 €, 4% acima"). Vazio = sem taxa.
String exportPartnerFeeText = '';
double commissionOf(double partnerAmount) {
  final cents = (partnerAmount * 100).round();
  return (cents * exportCommissionPct / 100).round() / 100;
}

double withCommission(double partnerAmount) => partnerAmount + commissionOf(partnerAmount);
String get exportPctLabel => '${exportCommissionPct.toStringAsFixed(exportCommissionPct % 1 == 0 ? 0 : 1)}%';

Future<void> _loadCommission() async {
  try {
    final row = await supabase.from('platform_settings').select('*').eq('id', 1).single();
    exportCommissionPct = (row['platform_commission_percentage'] as num).toDouble();
    final raw = row['partner_fee_tiers'];
    String pct(num p) => p % 1 == 0 ? p.toStringAsFixed(0) : p.toStringAsFixed(1);
    if (raw is List && raw.isNotEmpty) {
      exportPartnerFeeText = [
        for (final t in raw.cast<Map>())
          t['up_to'] == null ? '${pct(t['pct'] as num)}% acima' : '${pct(t['pct'] as num)}% até ${euros(t['up_to'] as num)}',
      ].join(', ');
    } else {
      final flat = (row['partner_fee_percentage'] as num?) ?? 0;
      exportPartnerFeeText = flat > 0 ? '${pct(flat)}%' : '';
    }
  } catch (_) {}
}

class ReportBooking {
  final String number;
  final String counterpart; // cliente (parceiro) ou parceiro (organizador)
  final String service;
  final DateTime? eventDate;
  final String location;
  final String status;
  final double total;
  final double paid;
  const ReportBooking({
    required this.number,
    required this.counterpart,
    required this.service,
    required this.eventDate,
    required this.location,
    required this.status,
    required this.total,
    required this.paid,
  });
  double get due => (total - paid) < 0 ? 0 : total - paid;
}

class ReportPayment {
  final String bookingNumber;
  final String payer;
  final String payee;
  final String type;
  final String status;
  final double amount;
  final DateTime? paidAt;
  final DateTime? dueAt;
  final String provider;
  final String service;
  const ReportPayment({
    required this.bookingNumber,
    required this.payer,
    required this.payee,
    required this.type,
    required this.status,
    required this.amount,
    required this.paidAt,
    required this.dueAt,
    required this.provider,
    required this.service,
  });
  bool get isPaid => status == 'Pago';
}

class ReportExpense {
  final String title;
  final String category;
  final double amount;
  final DateTime? dueDate;
  final bool paid;
  const ReportExpense(this.title, this.category, this.amount, this.dueDate, this.paid);
}

class ReportCategory {
  final String name;
  final double amount;
  const ReportCategory(this.name, this.amount);
}

class ReportData {
  final String title;
  final String owner;
  final List<ReportBooking> bookings;
  final List<ReportPayment> payments;
  final List<ReportExpense> expenses;
  final List<ReportCategory> categories;
  final double? budgetTotal;
  const ReportData({
    required this.title,
    required this.owner,
    required this.bookings,
    required this.payments,
    this.expenses = const [],
    this.categories = const [],
    this.budgetTotal,
  });

  double get paidTotal => payments.where((p) => p.isPaid).fold(0.0, (a, p) => a + p.amount);
  double get dueTotal => bookings.fold(0.0, (a, b) => a + b.due);
  double get expensesTotal => expenses.fold(0.0, (a, e) => a + e.amount);
}

const _bookingStatus = {
  'awaiting_deposit': 'A aguardar sinal',
  'confirmed': 'Confirmada',
  'completed': 'Concluída',
  'expired': 'Expirada',
  'cancelled_by_couple': 'Cancelada pelo cliente',
  'cancelled_by_partner': 'Cancelada pelo parceiro',
  'payment_overdue': 'Pagamento em atraso',
  'disputed': 'Em disputa',
};
const _paymentType = {'deposit': 'Sinal', 'final_payment': 'Pagamento final'};
const _paymentStatus = {'paid': 'Pago', 'pending': 'Pendente', 'failed': 'Falhou', 'refunded': 'Reembolsado'};

double _num(Object? v) => v is num ? v.toDouble() : double.tryParse('$v') ?? 0;
DateTime? _date(Object? v) => v == null ? null : DateTime.tryParse('$v')?.toLocal();
String _couple(Map? w) {
  if (w == null) return 'Cliente';
  final a = (w['partner_name_1'] ?? '').toString().trim();
  final b = (w['partner_name_2'] ?? '').toString().trim();
  return [a, b].where((s) => s.isNotEmpty).join(' & ').ifEmpty('Cliente');
}

extension on String {
  String ifEmpty(String other) => isEmpty ? other : this;
}

/// Lucros e clientes do parceiro com sessão iniciada.
Future<ReportData> loadPartnerReport() async {
  await _loadCommission();
  final uid = supabase.auth.currentUser!.id;
  final profile = await supabase.from('partner_profiles').select('business_name').eq('id', uid).maybeSingle();
  final business = (profile?['business_name'] ?? 'Parceiro').toString();
  final rows = await supabase
      .from('bookings')
      .select('id, booking_number, event_date, status, total_amount, weddings(partner_name_1, partner_name_2, location), proposals(title)')
      .eq('partner_id', uid)
      .order('event_date', ascending: false);
  final pays = await supabase
      .from('payments')
      .select('booking_id, type, status, amount, paid_at, due_at, provider')
      .eq('partner_id', uid)
      .order('created_at');
  return _assemble(business, 'Lucros e clientes', rows, pays, partnerSide: true);
}

/// Gastos e parceiros do casamento [weddingId] (organizador).
Future<ReportData> loadCoupleReport(String weddingId) async {
  await _loadCommission();
  final wedding = await supabase.from('weddings').select('partner_name_1, partner_name_2').eq('id', weddingId).maybeSingle();
  final rows = await supabase
      .from('bookings')
      .select('id, booking_number, event_date, status, total_amount, partner_profiles(business_name), weddings(partner_name_1, partner_name_2, location), proposals(title)')
      .eq('wedding_id', weddingId)
      .order('event_date', ascending: false);
  final ids = [for (final r in rows) r['id'] as String];
  final pays = ids.isEmpty
      ? <Map<String, dynamic>>[]
      : await supabase
          .from('payments')
          .select('booking_id, type, status, amount, paid_at, due_at, provider')
          .inFilter('booking_id', ids)
          .order('created_at');
  final exps = await supabase.from('expenses').select('title, category, amount, due_date, paid').eq('wedding_id', weddingId).order('due_date');
  final cats = await supabase.from('budget_categories').select('name, amount').eq('wedding_id', weddingId).order('position');
  final budget = await supabase.from('budgets').select('total').eq('wedding_id', weddingId).maybeSingle();
  final base = _assemble(_couple(wedding), 'Gastos e parceiros', rows, pays, partnerSide: false);
  return ReportData(
    title: base.title,
    owner: base.owner,
    bookings: base.bookings,
    payments: base.payments,
    expenses: [
      for (final e in exps)
        ReportExpense((e['title'] ?? '').toString(), (e['category'] ?? '').toString(), _num(e['amount']), _date(e['due_date']), e['paid'] == true),
    ],
    categories: [for (final c in cats) ReportCategory((c['name'] ?? '').toString(), _num(c['amount']))],
    budgetTotal: budget == null ? null : _num(budget['total']),
  );
}

/// Uma reserva só (detalhe da reserva do organizador).
Future<ReportData> loadSingleBookingReport(String bookingId, {bool partnerSide = false}) async {
  await _loadCommission();
  final rows = await supabase
      .from('bookings')
      .select('id, booking_number, event_date, status, total_amount, partner_profiles(business_name), weddings(partner_name_1, partner_name_2, location), proposals(title)')
      .eq('id', bookingId);
  final pays = await supabase
      .from('payments')
      .select('booking_id, type, status, amount, paid_at, due_at, provider')
      .eq('booking_id', bookingId)
      .order('created_at');
  final owner = rows.isEmpty
      ? (partnerSide ? 'Parceiro' : 'Organizador')
      : partnerSide
          ? ((rows.first['partner_profiles'] as Map?)?['business_name'] ?? 'Parceiro').toString()
          : _couple(rows.first['weddings'] as Map?);
  final partnerName = rows.isEmpty ? '' : ((rows.first['partner_profiles'] as Map?)?['business_name'] ?? '').toString();
  final base = _assemble(owner, 'Reserva ${rows.isEmpty ? '' : bookingRef(rows.first['booking_number'], partnerName)}', rows, pays, partnerSide: partnerSide);
  return base;
}

/// Número da reserva com o nome do parceiro (2026-10-20): os números
/// repetem-se entre parceiros (WED-1 de cada um, migração 107).
String bookingRef(Object? number, String partnerName) {
  final n = (number ?? '').toString();
  if (n.isEmpty) return partnerName;
  return partnerName.isEmpty ? n : '$n · $partnerName';
}

ReportData _assemble(String owner, String title, List<Map<String, dynamic>> rows, List<Map<String, dynamic>> pays, {required bool partnerSide}) {
  final byBooking = <String, Map<String, dynamic>>{for (final r in rows) r['id'] as String: r};
  String other(Map<String, dynamic>? r) => r == null
      ? ''
      : partnerSide
          ? _couple(r['weddings'] as Map?)
          : ((r['partner_profiles'] as Map?)?['business_name'] ?? 'Parceiro').toString();
  String service(Map<String, dynamic>? r) => ((r?['proposals'] as Map?)?['title'] ?? '').toString();
  final payments = [
    for (final p in pays)
      () {
        final r = byBooking[p['booking_id']];
        final couple = _couple(r?['weddings'] as Map?);
        final partner = ((r?['partner_profiles'] as Map?)?['business_name'] ?? (partnerSide ? owner : '')).toString();
        return ReportPayment(
          bookingNumber: bookingRef(r?['booking_number'], partner),
          payer: partnerSide ? couple : owner,
          payee: partnerSide ? owner : partner,
          type: _paymentType[p['type']] ?? '${p['type']}',
          status: _paymentStatus[p['status']] ?? '${p['status']}',
          amount: _num(p['amount']),
          paidAt: _date(p['paid_at']),
          dueAt: _date(p['due_at']),
          provider: (p['provider'] ?? '').toString(),
          service: service(r),
        );
      }(),
  ];
  final paidByBooking = <String, double>{};
  for (final p in pays) {
    if (p['status'] == 'paid') {
      final id = p['booking_id'] as String;
      paidByBooking[id] = (paidByBooking[id] ?? 0) + _num(p['amount']);
    }
  }
  final bookings = [
    for (final r in rows)
      ReportBooking(
        number: bookingRef(r['booking_number'], ((r['partner_profiles'] as Map?)?['business_name'] ?? (partnerSide ? owner : '')).toString()),
        counterpart: other(r),
        service: service(r),
        eventDate: _date(r['event_date']),
        location: ((r['weddings'] as Map?)?['location'] ?? '').toString(),
        status: _bookingStatus[r['status']] ?? '${r['status']}',
        total: _num(r['total_amount']),
        paid: paidByBooking[r['id']] ?? 0,
      ),
  ];
  return ReportData(title: title, owner: owner, bookings: bookings, payments: payments);
}

// ------------------------------------------------------------ ficheiros
