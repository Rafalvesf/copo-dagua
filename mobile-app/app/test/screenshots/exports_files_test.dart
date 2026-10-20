@Tags(['screenshots'])
library;

import 'dart:io';

import 'package:flutter_test/flutter_test.dart';
import 'package:copo_dagua_app/core/exports/exports.dart';

/// Gera os relatórios com dados de exemplo e guarda-os ao lado das
/// capturas (o workflow "App screenshots" publica-os no ramo screenshots).
void main() {
  TestWidgetsFlutterBinding.ensureInitialized();

  final partner = ReportData(
    title: 'Lucros e clientes',
    owner: 'Cravos & Canela',
    bookings: [
      ReportBooking(number: 'WED-1016', counterpart: 'Sofia & Tiago', service: 'Flores e Decoração', eventDate: DateTime(2027, 5, 21), location: 'Sintra', status: 'Concluída', total: 300, paid: 300),
      ReportBooking(number: 'WED-1040', counterpart: 'Inês & João', service: 'Arranjos de mesa', eventDate: DateTime(2027, 2, 16), location: 'Cascais', status: 'Confirmada', total: 1200, paid: 240),
    ],
    payments: [
      ReportPayment(bookingNumber: 'WED-1016', payer: 'Sofia & Tiago', payee: 'Cravos & Canela', type: 'Sinal', status: 'Pago', amount: 150, paidAt: DateTime(2026, 9, 5), dueAt: null, provider: 'stripe', service: 'Flores e Decoração'),
      ReportPayment(bookingNumber: 'WED-1016', payer: 'Sofia & Tiago', payee: 'Cravos & Canela', type: 'Pagamento final', status: 'Pago', amount: 150, paidAt: DateTime(2026, 10, 1), dueAt: null, provider: 'stripe', service: 'Flores e Decoração'),
      ReportPayment(bookingNumber: 'WED-1040', payer: 'Inês & João', payee: 'Cravos & Canela', type: 'Sinal', status: 'Pago', amount: 240, paidAt: DateTime(2026, 10, 12), dueAt: null, provider: 'stripe', service: 'Arranjos de mesa'),
    ],
  );
  final couple = ReportData(
    title: 'Gastos e parceiros',
    owner: 'Sofia & Tiago',
    bookings: partner.bookings.take(1).map((b) => ReportBooking(number: b.number, counterpart: 'Cravos & Canela', service: b.service, eventDate: b.eventDate, location: b.location, status: b.status, total: b.total, paid: b.paid)).toList(),
    payments: partner.payments.take(2).toList(),
    expenses: [ReportExpense('Vestido', 'Roupa', 1800, DateTime(2027, 3, 1), true), ReportExpense('Convites', 'Papelaria', 240, DateTime(2027, 1, 10), false)],
    categories: const [ReportCategory('Espaço', 9000), ReportCategory('Catering', 7000)],
    budgetTotal: 25000,
  );

  test('gera relatórios', () async {
    exportCommissionPct = 5;
    final dir = Directory('test/screenshots/goldens')..createSync(recursive: true);
    final p1 = await reportPdf(partner, partnerSide: true);
    final p2 = await reportPdf(couple, partnerSide: false);
    final r1 = await receiptsPdf(couple);
    final x1 = reportXlsx(partner, partnerSide: true);
    final x2 = reportXlsx(couple, partnerSide: false);
    expect(String.fromCharCodes(p1.take(4)), '%PDF');
    expect(String.fromCharCodes(x1.take(2)), 'PK');
    File('${dir.path}/export_parceiro.pdf').writeAsBytesSync(p1);
    File('${dir.path}/export_organizador.pdf').writeAsBytesSync(p2);
    File('${dir.path}/export_comprovativos.pdf').writeAsBytesSync(r1);
    File('${dir.path}/export_parceiro.xlsx').writeAsBytesSync(x1);
    File('${dir.path}/export_organizador.xlsx').writeAsBytesSync(x2);
  });
}
