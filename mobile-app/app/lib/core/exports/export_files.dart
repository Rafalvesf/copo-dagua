import 'dart:typed_data';

import 'package:excel/excel.dart' as xl;
import 'package:flutter/services.dart' show rootBundle;
import 'package:pdf/pdf.dart';
import 'package:pdf/widgets.dart' as pw;
import 'package:share_plus/share_plus.dart';

import '../../shared/money.dart';
import 'exports.dart';

/// PDF e Excel dos relatórios. Importado com `deferred as` em
/// `shared/widgets/export_card.dart`: estas bibliotecas só são
/// descarregadas quando alguém carrega em Exportar (2026-10-25).

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

/// Organizador: valores com a comissão (o que paga de facto).
/// Parceiro: valores do parceiro (o que recebe).
List<List<String>> _bookingRows(ReportData r, {required bool partnerSide}) => [
      for (final b in r.bookings)
        partnerSide
            ? [b.number, b.counterpart, b.service, _d(b.eventDate), b.status, _e(b.total), _e(b.paid), _e(b.due)]
            : [b.number, b.counterpart, b.service, _d(b.eventDate), b.status, _e(withCommission(b.total)), _e(withCommission(b.paid)), _e(withCommission(b.due))],
    ];
List<List<String>> _paymentRows(ReportData r, {required bool partnerSide}) => [
      for (final p in r.payments)
        partnerSide
            ? [_d(p.paidAt ?? p.dueAt), p.bookingNumber, p.payer, p.type, p.status, _e(p.amount), _e(commissionOf(p.amount)), _e(withCommission(p.amount))]
            : [_d(p.paidAt ?? p.dueAt), p.bookingNumber, p.payee, p.type, p.status, _e(p.amount), _e(commissionOf(p.amount)), _e(withCommission(p.amount))],
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
          ('Pago (com comissão)', _e(withCommission(r.paidTotal))),
          ('Por pagar', _e(withCommission(r.dueTotal))),
          ('Outros gastos', _e(r.expensesTotal)),
        ]),
      _section(partnerSide ? 'Clientes e reservas' : 'Parceiros e reservas'),
      _table(['Reserva', who, 'Serviço', 'Data', 'Estado', 'Total', 'Pago', 'Em falta'], _bookingRows(r, partnerSide: partnerSide), right: {5, 6, 7}),
      _section('Pagamentos'),
      _table(
        partnerSide
            ? ['Data', 'Reserva', who, 'Tipo', 'Estado', 'Recebido', 'Comissão*', 'Cliente pagou']
            : ['Data', 'Reserva', who, 'Tipo', 'Estado', 'Serviço', 'Comissão', 'Total pago'],
        _paymentRows(r, partnerSide: partnerSide),
        right: {5, 6, 7},
      ),
      pw.Padding(
        padding: const pw.EdgeInsets.only(top: 4),
        child: pw.Text(
          partnerSide
              ? (exportPartnerFeeText.isNotEmpty
                  ? '* Comissão da À Nossa! ($exportPctLabel, IVA incluído) paga pelo cliente por cima do teu valor. Ao que recebes é descontada a taxa da À Nossa! ($exportPartnerFeeText do valor da reserva, IVA incluído) quando o dinheiro é libertado.'
                  : '* Comissão da À Nossa! ($exportPctLabel) paga pelo cliente por cima do teu valor — não é descontada ao que recebes.')
              : 'Comissão da À Nossa! ($exportPctLabel, IVA incluído) sobre o valor do parceiro. ${partnerSide ? '' : 'Totais da tabela de reservas já com comissão.'}',
          style: const pw.TextStyle(color: _muted, fontSize: 8),
        ),
      ),
      pw.Padding(
        padding: const pw.EdgeInsets.only(top: 4),
        child: pw.Text('Valores com IVA incluído (${(vatRate * 100).round()}%).', style: const pw.TextStyle(color: _muted, fontSize: 8)),
      ),
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
Future<Uint8List> receiptsPdf(ReportData r, {bool receiptForPartner = false}) async {
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
        _header('Comprovativo de pagamento', 'N.º ${p.bookingNumber} · ${(i + 1).toString().padLeft(2, '0')}'),
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
            // Valor do parceiro + comissão da À Nossa! = total pago.
            row('Valor do serviço', _e(p.amount)),
            row('Comissão À Nossa! ($exportPctLabel)', _e(commissionOf(p.amount))),
            pw.Divider(color: const PdfColor.fromInt(0xFFDDE5D3)),
            // Detalhe do IVA (pedido do utilizador, 2026-10-20).
            row('Total sem IVA', _e(vatBase(withCommission(p.amount)))),
            row('IVA (${(vatRate * 100).round()}%)', _e(vatAmount(withCommission(p.amount)))),
            pw.Divider(color: const PdfColor.fromInt(0xFFDDE5D3)),
            pw.Row(mainAxisAlignment: pw.MainAxisAlignment.spaceBetween, children: [
              pw.Text('Total pago (IVA incluído)', style: pw.TextStyle(fontSize: 13, fontWeight: pw.FontWeight.bold)),
              pw.Text(_e(withCommission(p.amount)), style: pw.TextStyle(fontSize: 18, fontWeight: pw.FontWeight.bold, color: _green)),
            ]),
            if (receiptForPartner) ...[
              pw.SizedBox(height: 6),
              row('Recebido pelo parceiro', _e(p.amount)),
            ],
          ]),
        ),
        pw.Spacer(),
        pw.Text(
          'Documento emitido pela À Nossa! como comprovativo de um pagamento feito na app. '
          'Valores com IVA incluído à taxa normal de ${(vatRate * 100).round()}% (Portugal continental), indicada pelo parceiro ao definir o preço. '
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
          ['Pago (com comissão)', withCommission(r.paidTotal)],
          ['Por pagar (com comissão)', withCommission(r.dueTotal)],
          ['Comissão À Nossa! ($exportPctLabel)', commissionOf(r.paidTotal)],
          ['Outros gastos', r.expensesTotal],
        ]);
  sheet(partnerSide ? 'Clientes' : 'Parceiros', ['Reserva', who, 'Serviço', 'Data do evento', 'Local', 'Estado', 'Total (€)', 'Pago (€)', 'Em falta (€)'], [
    for (final b in r.bookings)
      partnerSide
          ? [b.number, b.counterpart, b.service, b.eventDate, b.location, b.status, b.total, b.paid, b.due]
          : [b.number, b.counterpart, b.service, b.eventDate, b.location, b.status, withCommission(b.total), withCommission(b.paid), withCommission(b.due)],
  ]);
  sheet('Pagamentos', [
    'Data', 'Reserva', who, 'Tipo', 'Estado',
    partnerSide ? 'Recebido (€)' : 'Serviço (€)',
    'Comissão $exportPctLabel (€)',
    partnerSide ? 'Cliente pagou (€)' : 'Total pago (€)',
    'Sem IVA (€)', 'IVA ${(vatRate * 100).round()}% (€)',
  ], [
    for (final p in r.payments)
      [
        p.paidAt ?? p.dueAt, p.bookingNumber, partnerSide ? p.payer : p.payee, p.type, p.status,
        p.amount, commissionOf(p.amount), withCommission(p.amount),
        vatBase(partnerSide ? p.amount : withCommission(p.amount)),
        vatAmount(partnerSide ? p.amount : withCommission(p.amount)),
      ],
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
