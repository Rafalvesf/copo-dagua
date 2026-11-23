import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';

import '../../../core/events/my_qr.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/skeleton.dart';
import '../../../shared/widgets/v2_kit.dart';

String _hhmm(DateTime d) => '${d.hour.toString().padLeft(2, '0')}:${d.minute.toString().padLeft(2, '0')}';

class _WhiteCard extends StatelessWidget {
  final Widget child;
  const _WhiteCard({required this.child});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
        child: child,
      );
}

/// «Quem é» (migração 228): quem lê o QR da conta de alguém (sobretudo o
/// parceiro, para verificar a marcação; o organizador à entrada) vê o nome
/// da pessoa e só o que os liga: as suas marcações em eventos onde ela vai,
/// ou a entrada nos eventos que organiza. Daqui regista a chegada/entrada
/// ou cobra (uma cobrança por leitura).
class ScanScreen extends StatefulWidget {
  final String token;
  const ScanScreen({super.key, required this.token});

  @override
  State<ScanScreen> createState() => _ScanScreenState();
}

class _ScanScreenState extends State<ScanScreen> {
  late Future<ScanResult> _future = scanQr(widget.token);
  final Map<String, ({String result, DateTime? at})> _done = {};
  String? _busy;

  String _key(ScanItem i) => i.bookingId ?? 'e${i.eventId}';

  Future<void> _confirm(ScanResult r, ScanItem i) async {
    setState(() => _busy = _key(i));
    final res = await scanConfirm(r.scanId!, i);
    if (!mounted) return;
    setState(() {
      _busy = null;
      _done[_key(i)] = res;
    });
  }

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: FutureBuilder<ScanResult>(
          future: _future,
          builder: (context, snap) {
            if (!snap.hasData) return const SkeletonPage(carousel: false, rows: 3);
            final r = snap.data!;
            return ListView(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 40),
              children: [
                Row(children: [
                  V2RoundButton(icon: Hi.arrowLeft, tooltip: 'Voltar', onTap: () => Navigator.of(context).maybePop()),
                ]),
                const SizedBox(height: 16),
                if (r.result != 'ok') ..._problem(r) else ..._person(r),
              ],
            );
          },
        ),
      ),
    );
  }

  List<Widget> _problem(ScanResult r) {
    final (IconData icon, String title, String text) = switch (r.result) {
      'expired' => (Hi.clock, 'QR expirado', 'Este QR já mudou. Pede para mostrar o QR outra vez e lê de novo.'),
      'own_code' => (Hi.informationCircle, 'É o teu QR', 'Este é o teu próprio QR.'),
      'not_found' => (Hi.xCircle, 'QR inválido', 'Este código não é um QR da À Nossa! válido.'),
      _ => (Hi.signalSlash, 'Não foi possível ler', 'Verifica a ligação e tenta outra vez.'),
    };
    return [
      const SizedBox(height: 40),
      Icon(icon, size: 96, color: r.result == 'error' ? AppTheme.inkMuted : const Color(0xFFB3261E)),
      const SizedBox(height: 16),
      Text(title, textAlign: TextAlign.center, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      const SizedBox(height: 8),
      Text(text, textAlign: TextAlign.center, style: const TextStyle(fontSize: 16, height: 1.4, color: AppTheme.ink)),
      if (r.result == 'error') ...[
        const SizedBox(height: 24),
        FilledButton(onPressed: () => setState(() => _future = scanQr(widget.token)), child: const Text('Tentar outra vez')),
      ],
    ];
  }

  List<Widget> _person(ScanResult r) {
    final name = r.name ?? 'Convidado';
    return [
      Center(
        child: CircleAvatar(
          radius: 44,
          backgroundColor: AppTheme.ink,
          foregroundImage: r.avatarUrl != null && r.avatarUrl!.isNotEmpty ? NetworkImage(r.avatarUrl!) : null,
          child: Text(name.trim().isEmpty ? '?' : name.trim()[0].toUpperCase(),
              style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: Colors.white)),
        ),
      ),
      const SizedBox(height: 12),
      Text(name, textAlign: TextAlign.center, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      const SizedBox(height: 4),
      const Text('QR verificado agora', textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
      const SizedBox(height: 24),
      if (r.items.isEmpty)
        const Text(
          'Esta pessoa não tem marcações contigo nem entradas em eventos que organizas.',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 16, height: 1.4, color: AppTheme.ink),
        )
      else
        for (final i in r.items) ...[_item(r, i), const SizedBox(height: 12)],
    ];
  }

  Widget _item(ScanResult r, ScanItem i) {
    final key = _key(i);
    final done = _done[key];
    final at = done?.at ?? i.doneAt;
    final booking = i.kind == 'booking';
    final already = done == null && i.doneAt != null;
    final blocked = !booking && i.isPaid && i.ticketStatus != 'paid';
    final meta = [
      if (i.date != null) '${i.date!.day.toString().padLeft(2, '0')}/${i.date!.month.toString().padLeft(2, '0')}/${i.date!.year}',
      if (booking && i.bookingNumber != null) 'Marcação ${i.bookingNumber}',
      if (booking && i.people != null) '${i.people} pessoas',
      if (!booking && i.isPaid) i.ticketStatus == 'paid' ? (i.quantity == 1 ? 'Bilhete pago · 1 pessoa' : 'Bilhete pago · ${i.quantity} pessoas') : 'Sem bilhete pago',
    ].join(' · ');
    final (String? statusText, Color statusColor) = switch (done?.result) {
      'ok' => ('${booking ? 'Chegada' : 'Entrada'} registada às ${_hhmm(done!.at ?? DateTime.now())}', AppTheme.accentOliveDark),
      'already' => ('Já ${booking ? 'chegou' : 'entrou'} às ${at == null ? '—' : _hhmm(at)}', const Color(0xFF9A5B00)),
      'expired' => ('A leitura expirou. Lê o QR outra vez.', const Color(0xFFB3261E)),
      'not_paid' => ('Bilhete por pagar.', const Color(0xFFB3261E)),
      'refunded' => ('Bilhete reembolsado.', const Color(0xFFB3261E)),
      null => already
          ? ('Já ${booking ? 'chegou' : 'entrou'} às ${_hhmm(i.doneAt!)}', const Color(0xFF9A5B00))
          : blocked
              ? ('Sem bilhete pago: não dá entrada.', const Color(0xFFB3261E))
              : (null, AppTheme.ink),
      _ => ('Não foi possível registar. Tenta outra vez.', const Color(0xFFB3261E)),
    };
    final showConfirm = !already && !blocked && (done == null || done.result == 'error');
    return _WhiteCard(
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(booking ? 'A TUA MARCAÇÃO' : 'ENTRADA NO TEU EVENTO',
            style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
        const SizedBox(height: 4),
        Text(i.event, style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        if (statusText != null) ...[
          const SizedBox(height: 8),
          Text(statusText, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: statusColor)),
        ],
        const SizedBox(height: 12),
        Row(children: [
          if (showConfirm)
            Expanded(
              child: SizedBox(
                height: 44,
                child: FilledButton(
                  onPressed: _busy == null ? () => _confirm(r, i) : null,
                  child: _busy == key
                      ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                      : Text(booking ? 'Registar chegada' : 'Registar entrada', style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700)),
                ),
              ),
            ),
        ]),
      ]),
    );
  }
}
