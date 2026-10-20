import 'dart:typed_data';

import 'package:excel/excel.dart' as xl;
import 'package:flutter/services.dart' show rootBundle;
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;
import 'package:share_plus/share_plus.dart';

import '../../shared/money.dart';
import '../supabase/supabase_config.dart';

/// Relatórios para descarregar (pedido do utilizador, 2026-10-20):
/// - parceiros: "Lucros e clientes" em PDF e Excel;
/// - organizadores: "Gastos e parceiros" em PDF e Excel;
/// - ambos: comprovativos dos pagamentos feitos na app, em PDF.
///
/// Os comprovativos NÃO são faturas certificadas pela AT: a fatura legal
/// continua a ser emitida pelo parceiro no seu programa de faturação.

// ------------------------------------------------------------ dados

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
        final partner = ((r?['partner_profiles'] as Map?)?['business_name'] ?? owner).toString();
        return ReportPayment(
          bookingNumber: (r?['booking_number'] ?? '').toString(),
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
        number: (r['booking_number'] ?? '').toString(),
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

String _d(DateTime? d) => d == null ? '' : '${d.day.toString().padLeft(2, '0')}/${d.month.toString().padLeft(2, '0')}/${d.year}';
String _e(num v) => euros(v, cents: true);
String _stamp() {
  final n = DateTime.now();
  return '${n.year}-${n.month.toString().padLeft(2, '0')}-${n.day.toString().padLeft(2, '0')}';
}

String _slug(String s) => s
    .toLowerCase()
    .replaceAll(RegExp('[àáâã]'), 'a')
    .replaceAll(RegExp('[éê]'), 'e')
    .replaceAll('í', 'i')
    .replaceAll(RegExp('[óôõ]'), 'o')
    .replaceAll('ú', 'u')
    .replaceAll('ç', 'c')
    .replaceAll(RegExp('[^a-z0-9]+'), '-')
    .replaceAll(RegExp('^-|-\$'), '');

Future<pw.ThemeData> _pdfTheme() async {
  final reg = pw.Font.ttf(await rootBundle.load('assets/fonts/roboto/Roboto-Regular.ttf'));
  final bold = pw.Font.ttf(await rootBundle.load('assets/fonts/roboto/Roboto-Bold.ttf'));
  return pw.ThemeData.withFont(base: reg, bold: bold);
}

const _green = PdfColor.fromInt(0xFF4F6B4A);
const _muted = PdfColor.fromInt(0xFF6B6A66);

pw.Widget _header(String title, String owner) => pw.Column(crossAxisAlignment: pw.CrossAxisAlignment.start, children: [
      pw.Text('À Nossa!', style: pw.TextStyle(color: _green, fontWeight: pw.FontWeight.bold, fontSize: 12)),
      pw.SizedBox(height: 4),
      pw.Text(title, style: pw.TextStyle(fontSize: 22, fontWeight: pw.FontWeight.bold)),
      pw.Text('$owner · gerado a ${_d(DateTime.now())}', style: const pw.TextStyle(color: _muted, fontSize: 10)),
      pw.SizedBox(height: 16),
    ]);

pw.Widget _stats(List<(String, String)> items) => pw.Row(children: [
      for (final (label, value) in items)
        pw.Expanded(
          child: pw.Container(
            margin: const pw.EdgeInsets.only(right: 8),
            padding: const pw.EdgeInsets.all(10),
            decoration: pw.BoxDecoration(color: const PdfColor.fromInt(0xFFF2F5EE), borderRadius: pw.BorderRadius.circular(8)),
            child: pw.Column(crossAxisAlignment: pw.CrossAxisAlignment.start, children: [
              pw.Text(label, style: const pw.TextStyle(color: _muted, fontSize: 9)),
              pw.SizedBox(height: 3),
              pw.Text(value, style: pw.TextStyle(fontSize: 14, fontWeight: pw.FontWeight.bold)),
            ]),
          ),
        ),
    ]);

pw.Widget _section(String title) => pw.Padding(
      padding: const pw.EdgeInsets.only(top: 18, bottom: 6),
      child: pw.Text(title, style: pw.TextStyle(fontSize: 14, fontWeight: pw.FontWeight.bold, color: _green)),
    );

pw.Widget _table(List<String> headers, List<List<String>> rows, {Set<int> right = const {}}) => rows.isEmpty
    ? pw.Text('Sem registos.', style: const pw.TextStyle(color: _muted, fontSize: 10))
    : pw.TableHelper.fromTextArray(
        headers: headers,
        data: rows,
        headerStyle: pw.TextStyle(fontWeight: pw.FontWeight.bold, fontSize: 9, color: PdfColors.white),
        headerDecoration: const pw.BoxDecoration(color: _green),
        cellStyle: const pw.TextStyle(fontSize: 9),
        cellAlignments: {for (final i in right) i: pw.Alignment.centerRight},
        oddRowDecoration: const pw.BoxDecoration(color: PdfColor.fromInt(0xFFF7F8F5)),
        border: null,
        cellPadding: const pw.EdgeInsets.symmetric(horizontal: 6, vertical: 5),
      );

List<List<String>> _bookingRows(ReportData r) => [
      for (final b in r.bookings) [b.number, b.counterpart, b.service, _d(b.eventDate), b.status, _e(b.total), _e(b.paid), _e(b.due)],
    ];
List<List<String>> _paymentRows(ReportData r, {required bool partnerSide}) => [
      for (final p in r.payments)
        [_d(p.paidAt ?? p.dueAt), p.bookingNumber, partnerSide ? p.payer : p.payee, p.type, p.status, _e(p.amount)],
    ];

/// PDF do relatório (parceiro ou organizador).
Future<Uint8List> reportPdf(ReportData r, {required bool partnerSide}) async {
  final doc = pw.Document(theme: await _pdfTheme(), title: '${r.title} — ${r.owner}', author: 'À Nossa!');
  final who = partnerSide ? 'Cliente' : 'Parceiro';
  doc.addPage(pw.MultiPage(
    pageFormat: PdfPageFormat.a4,
    margin: const pw.EdgeInsets.all(32),
    footer: (c) => pw.Align(
      alignment: pw.Alignment.centerRight,
      child: pw.Text('Página ${c.pageNumber} de ${c.pagesCount}', style: const pw.TextStyle(color: _muted, fontSize: 8)),
    ),
    build: (c) => [
      _header(r.title, r.owner),
      if (partnerSide)
        _stats([
          ('Recebido', _e(r.paidTotal)),
          ('Por receber', _e(r.dueTotal)),
          ('Clientes', '${r.bookings.map((b) => b.counterpart).toSet().length}'),
          ('Reservas', '${r.bookings.length}'),
        ])
      else
        _stats([
          ('Orçamento', r.budgetTotal == null ? '—' : _e(r.budgetTotal!)),
          ('Pago a parceiros', _e(r.paidTotal)),
          ('Por pagar', _e(r.dueTotal)),
          ('Outros gastos', _e(r.expensesTotal)),
        ]),
      _section(partnerSide ? 'Clientes e reservas' : 'Parceiros e reservas'),
      _table(['Reserva', who, 'Serviço', 'Data', 'Estado', 'Total', 'Pago', 'Em falta'], _bookingRows(r), right: {5, 6, 7}),
      _section('Pagamentos'),
      _table(['Data', 'Reserva', who, 'Tipo', 'Estado', 'Valor'], _paymentRows(r, partnerSide: partnerSide), right: {5}),
      if (!partnerSide) ...[
        _section('Gastos'),
        _table(['Descrição', 'Categoria', 'Data', 'Pago', 'Valor'],
            [for (final e in r.expenses) [e.title, e.category, _d(e.dueDate), e.paid ? 'Sim' : 'Não', _e(e.amount)]],
            right: {4}),
        if (r.categories.isNotEmpty) ...[
          _section('Orçamento por categoria'),
          _table(['Categoria', 'Orçamento'], [for (final c in r.categories) [c.name, _e(c.amount)]], right: {1}),
        ],
      ],
    ],
  ));
  return doc.save();
}

/// Comprovativos de todos os pagamentos já feitos (um por página).
Future<Uint8List> receiptsPdf(ReportData r) async {
  final doc = pw.Document(theme: await _pdfTheme(), title: 'Comprovativos de pagamento — ${r.owner}', author: 'À Nossa!');
  final paid = r.payments.where((p) => p.isPaid).toList();
  if (paid.isEmpty) {
    doc.addPage(pw.Page(
      pageFormat: PdfPageFormat.a4,
      build: (c) => pw.Column(crossAxisAlignment: pw.CrossAxisAlignment.start, children: [
        _header('Comprovativos de pagamento', r.owner),
        pw.Text('Ainda não há pagamentos feitos na app.', style: const pw.TextStyle(color: _muted)),
      ]),
    ));
  }
  for (final (i, p) in paid.indexed) {
    pw.Widget row(String k, String v) => pw.Padding(
          padding: const pw.EdgeInsets.symmetric(vertical: 6),
          child: pw.Row(children: [
            pw.SizedBox(width: 130, child: pw.Text(k, style: const pw.TextStyle(color: _muted, fontSize: 11))),
            pw.Expanded(child: pw.Text(v, style: const pw.TextStyle(fontSize: 11))),
          ]),
        );
    doc.addPage(pw.Page(
      pageFormat: PdfPageFormat.a4,
      margin: const pw.EdgeInsets.all(40),
      build: (c) => pw.Column(crossAxisAlignment: pw.CrossAxisAlignment.start, children: [
        _header('Comprovativo de pagamento', 'N.º ${p.bookingNumber}-${(i + 1).toString().padLeft(2, '0')}'),
        pw.Container(
          padding: const pw.EdgeInsets.all(16),
          decoration: pw.BoxDecoration(border: pw.Border.all(color: const PdfColor.fromInt(0xFFDDE5D3)), borderRadius: pw.BorderRadius.circular(10)),
          child: pw.Column(children: [
            row('Data do pagamento', _d(p.paidAt)),
            row('Pago por', p.payer),
            row('Pago a', p.payee),
            row('Reserva', p.bookingNumber),
            row('Descrição', [p.type, if (p.service.isNotEmpty) p.service].join(' · ')),
            row('Meio de pagamento', p.provider.isEmpty ? 'Pagamento na app' : (p.provider == 'stripe' ? 'Stripe (cartão, MB WAY ou Multibanco)' : p.provider)),
            pw.Divider(color: const PdfColor.fromInt(0xFFDDE5D3)),
            pw.Row(mainAxisAlignment: pw.MainAxisAlignment.spaceBetween, children: [
              pw.Text('Valor pago', style: pw.TextStyle(fontSize: 13, fontWeight: pw.FontWeight.bold)),
              pw.Text(_e(p.amount), style: pw.TextStyle(fontSize: 18, fontWeight: pw.FontWeight.bold, color: _green)),
            ]),
          ]),
        ),
        pw.Spacer(),
        pw.Text(
          'Documento emitido pela À Nossa! como comprovativo de um pagamento feito na app. '
          'Não substitui a fatura, que é emitida pelo parceiro no seu programa de faturação certificado.',
          style: const pw.TextStyle(color: _muted, fontSize: 8),
        ),
      ]),
    ));
  }
  return doc.save();
}

/// Excel do relatório, com uma folha por tabela.
Uint8List reportXlsx(ReportData r, {required bool partnerSide}) {
  final book = xl.Excel.createExcel();
  final first = book.getDefaultSheet() ?? 'Sheet1';
  final bold = xl.CellStyle(bold: true);

  void sheet(String name, List<String> headers, List<List<Object?>> rows) {
    final s = book[name];
    s.appendRow([for (final h in headers) xl.TextCellValue(h)]);
    for (var c = 0; c < headers.length; c++) {
      s.cell(xl.CellIndex.indexByColumnRow(columnIndex: c, rowIndex: 0)).cellStyle = bold;
    }
    for (final row in rows) {
      s.appendRow([
        for (final v in row)
          v is num
              ? xl.DoubleCellValue(v.toDouble())
              : v is DateTime
                  ? xl.DateCellValue(year: v.year, month: v.month, day: v.day)
                  : xl.TextCellValue('${v ?? ''}'),
      ]);
    }
    for (var c = 0; c < headers.length; c++) {
      s.setColumnWidth(c, 18);
    }
  }

  final who = partnerSide ? 'Cliente' : 'Parceiro';
  sheet('Resumo', ['Indicador', 'Valor (€)'], partnerSide
      ? [
          ['Recebido', r.paidTotal],
          ['Por receber', r.dueTotal],
          ['Clientes', r.bookings.map((b) => b.counterpart).toSet().length],
          ['Reservas', r.bookings.length],
        ]
      : [
          ['Orçamento', r.budgetTotal ?? 0],
          ['Pago a parceiros', r.paidTotal],
          ['Por pagar a parceiros', r.dueTotal],
          ['Outros gastos', r.expensesTotal],
        ]);
  sheet(partnerSide ? 'Clientes' : 'Parceiros', ['Reserva', who, 'Serviço', 'Data do evento', 'Local', 'Estado', 'Total (€)', 'Pago (€)', 'Em falta (€)'], [
    for (final b in r.bookings) [b.number, b.counterpart, b.service, b.eventDate, b.location, b.status, b.total, b.paid, b.due],
  ]);
  sheet('Pagamentos', ['Data', 'Reserva', who, 'Tipo', 'Estado', 'Valor (€)'], [
    for (final p in r.payments) [p.paidAt ?? p.dueAt, p.bookingNumber, partnerSide ? p.payer : p.payee, p.type, p.status, p.amount],
  ]);
  if (!partnerSide) {
    sheet('Gastos', ['Descrição', 'Categoria', 'Data', 'Pago', 'Valor (€)'], [
      for (final e in r.expenses) [e.title, e.category, e.dueDate, e.paid ? 'Sim' : 'Não', e.amount],
    ]);
    sheet('Categorias', ['Categoria', 'Orçamento (€)'], [for (final c in r.categories) [c.name, c.amount]]);
  }
  book.delete(first);
  book.setDefaultSheet('Resumo');
  return Uint8List.fromList(book.encode()!);
}

/// Entrega o ficheiro: partilha (telemóvel) ou descarrega (computador).
Future<void> deliverFile(Uint8List bytes, String name, String mime) async {
  await SharePlus.instance.share(ShareParams(
    files: [XFile.fromData(bytes, name: name, mimeType: mime)],
    fileNameOverrides: [name],
    downloadFallbackEnabled: true,
  ));
}

String reportFileName(ReportData r, String ext) => '${_slug('a-nossa ${r.title} ${r.owner}')}-${_stamp()}.$ext';
const pdfMime = 'application/pdf';
const xlsxMime = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
