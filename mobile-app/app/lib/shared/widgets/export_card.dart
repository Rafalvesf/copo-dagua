import 'package:flutter/material.dart';

import '../../core/exports/exports.dart';
import '../../core/theme/app_theme.dart';
import 'v2_kit.dart';

/// Cartão "Exportar" com os relatórios em PDF/Excel e os comprovativos
/// (pedido do utilizador, 2026-10-20). [load] vai buscar os dados na hora.
class ExportCard extends StatefulWidget {
  final String reportLabel;
  final bool partnerSide;
  final Future<ReportData> Function() load;

  const ExportCard({super.key, required this.reportLabel, required this.partnerSide, required this.load});

  @override
  State<ExportCard> createState() => _ExportCardState();
}

class _ExportCardState extends State<ExportCard> {
  String? _busy;

  Future<void> _run(String key, Future<void> Function(ReportData r) make) async {
    if (_busy != null) return;
    setState(() => _busy = key);
    try {
      final data = await widget.load();
      await make(data);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível gerar o ficheiro. Tenta novamente.')),
        );
      }
    } finally {
      if (mounted) setState(() => _busy = null);
    }
  }

  @override
  Widget build(BuildContext context) {
    final side = widget.partnerSide;
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 14, 16, 14),
      decoration: softCard(radius: 22),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        _Row(
          icon: Icons.picture_as_pdf_outlined,
          title: '${widget.reportLabel} · PDF',
          subtitle: 'Resumo, reservas e pagamentos',
          busy: _busy == 'pdf',
          onTap: () => _run('pdf', (r) async => deliverFile(await reportPdf(r, partnerSide: side), reportFileName(r, 'pdf'), pdfMime)),
        ),
        const Divider(height: 18),
        _Row(
          icon: Icons.table_chart_outlined,
          title: '${widget.reportLabel} · Excel',
          subtitle: 'Uma folha por tabela, pronta a filtrar',
          busy: _busy == 'xlsx',
          onTap: () => _run('xlsx', (r) async => deliverFile(reportXlsx(r, partnerSide: side), reportFileName(r, 'xlsx'), xlsxMime)),
        ),
        const Divider(height: 18),
        _Row(
          icon: Icons.receipt_long_outlined,
          title: 'Comprovativos de pagamento · PDF',
          subtitle: 'Um por pagamento feito na app (não substitui a fatura)',
          busy: _busy == 'rec',
          onTap: () => _run('rec', (r) async {
            final copy = ReportData(title: 'Comprovativos', owner: r.owner, bookings: r.bookings, payments: r.payments);
            await deliverFile(await receiptsPdf(r), reportFileName(copy, 'pdf'), pdfMime);
          }),
        ),
      ]),
    );
  }
}

class _Row extends StatelessWidget {
  final IconData icon;
  final String title;
  final String subtitle;
  final bool busy;
  final VoidCallback onTap;
  const _Row({required this.icon, required this.title, required this.subtitle, required this.busy, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      borderRadius: BorderRadius.circular(14),
      onTap: busy ? null : onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 4),
        child: Row(children: [
          Container(
            width: 40,
            height: 40,
            alignment: Alignment.center,
            decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(12)),
            child: Icon(icon, size: 20, color: AppTheme.brandGreen),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(title, style: const TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              Text(subtitle, style: const TextStyle(fontSize: AppFontSize.xs, color: v2Muted)),
            ]),
          ),
          busy
              ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: AppTheme.brandGreen))
              : const Icon(Icons.download_rounded, size: 20, color: AppTheme.brandGreen),
        ]),
      ),
    );
  }
}
