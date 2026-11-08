import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:qr_flutter/qr_flutter.dart';

import '../../../core/events/event_pass.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// Bilhete com QR (migração 158): depois de pagar, o convidado mostra-o à
/// entrada; o organizador lê-o com a câmara do telemóvel.

String _hhmm(DateTime d) => '${d.hour.toString().padLeft(2, '0')}:${d.minute.toString().padLeft(2, '0')}';

QrImageView _qr(String data, double size) => QrImageView(
      data: data,
      size: size,
      padding: EdgeInsets.zero,
      backgroundColor: Colors.white,
      eyeStyle: const QrEyeStyle(eyeShape: QrEyeShape.square, color: AppTheme.ink),
      dataModuleStyle: const QrDataModuleStyle(dataModuleShape: QrDataModuleShape.square, color: AppTheme.ink),
      semanticsLabel: 'Código QR do bilhete',
    );

/// Cartão no início do convidado.
class TicketPassCard extends StatelessWidget {
  final MyTicket ticket;
  final String eventName;
  const TicketPassCard({super.key, required this.ticket, required this.eventName});

  @override
  Widget build(BuildContext context) {
    final green = AppTheme.accentOliveDark;
    return SnappyTap(
      onTap: () => Navigator.of(context).push(
        MaterialPageRoute(builder: (_) => TicketPassScreen(ticket: ticket, eventName: eventName)),
      ),
      child: Semantics(
        button: true,
        label: 'Abrir o teu bilhete',
        child: Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(color: green, borderRadius: BorderRadius.circular(AppRadius.lg)),
          child: Row(children: [
            Container(
              padding: const EdgeInsets.all(6),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(10)),
              child: _qr(ticket.qrData, 64),
            ),
            const SizedBox(width: 14),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('O TEU BILHETE',
                    style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.accentTint)),
                const SizedBox(height: 2),
                Text(
                  ticket.quantity == 1 ? '1 pessoa' : '${ticket.quantity} pessoas',
                  style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: Colors.white),
                ),
                const SizedBox(height: 2),
                Text(
                  ticket.checkedInAt != null ? 'Entrada registada às ${_hhmm(ticket.checkedInAt!)}' : 'Mostra o QR à entrada',
                  style: TextStyle(fontSize: 13, color: Colors.white.withValues(alpha: 0.85)),
                ),
              ]),
            ),
            const Icon(Icons.chevron_right, color: Colors.white),
          ]),
        ),
      ),
    );
  }
}

/// Ecrã inteiro com o QR grande, para mostrar à porta.
class TicketPassScreen extends StatelessWidget {
  final MyTicket ticket;
  final String eventName;
  const TicketPassScreen({super.key, required this.ticket, required this.eventName});

  @override
  Widget build(BuildContext context) {
    final w = MediaQuery.sizeOf(context).width;
    final size = (w - 2 * AppTheme.screenMargin - 48).clamp(180.0, 300.0);
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 40),
          children: [
            Align(
              alignment: Alignment.centerLeft,
              child: IconButton(
                onPressed: () => Navigator.of(context).maybePop(),
                icon: const Icon(Icons.arrow_back_rounded),
                tooltip: 'Voltar',
              ),
            ),
            const SizedBox(height: 4),
            Text(eventName.toUpperCase(),
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.accentOliveDark)),
            const SizedBox(height: 4),
            const Text('O teu bilhete',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 26, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 20),
            Center(
              child: Container(
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(AppRadius.lg), boxShadow: AppTheme.searchBarShadow),
                child: Column(children: [
                  _qr(ticket.qrData, size),
                  const SizedBox(height: 16),
                  Text(
                    ticket.code,
                    style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, letterSpacing: 3, color: AppTheme.ink),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    ticket.quantity == 1 ? '1 pessoa' : '${ticket.quantity} pessoas',
                    style: const TextStyle(fontSize: 15, color: AppTheme.inkMuted),
                  ),
                ]),
              ),
            ),
            const SizedBox(height: 18),
            if (ticket.checkedInAt != null)
              Text('Entrada registada às ${_hhmm(ticket.checkedInAt!)}.',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark))
            else
              const Text(
                'Mostra este código à entrada. Aumenta o brilho do ecrã para ler mais depressa.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted),
              ),
          ],
        ),
      ),
    );
  }
}

/// O organizador leu o QR com a câmara: abre aqui e marca a entrada.
class CheckInScreen extends ConsumerStatefulWidget {
  final String code;
  const CheckInScreen({super.key, required this.code});

  @override
  ConsumerState<CheckInScreen> createState() => _CheckInScreenState();
}

class _CheckInScreenState extends ConsumerState<CheckInScreen> {
  late Future<CheckIn> _future = checkInTicket(widget.code);

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: FutureBuilder<CheckIn>(
          future: _future,
          builder: (context, snap) {
            if (!snap.hasData) return const Center(child: CircularProgressIndicator());
            final c = snap.data!;
            final (IconData icon, Color color, String title, String text) = switch (c.result) {
              CheckInResult.ok => (
                  Icons.check_circle_rounded,
                  AppTheme.accentOliveDark,
                  'Entrada válida',
                  '${c.name ?? 'Convidado'} · ${c.quantity == 1 ? '1 pessoa' : '${c.quantity} pessoas'}',
                ),
              CheckInResult.already => (
                  Icons.info_rounded,
                  const Color(0xFF9A5B00),
                  'Já entrou',
                  '${c.name ?? 'Convidado'} entrou às ${c.at == null ? '—' : _hhmm(c.at!)}.',
                ),
              CheckInResult.refunded => (
                  Icons.cancel_rounded,
                  const Color(0xFFB3261E),
                  'Bilhete reembolsado',
                  'Este bilhete foi reembolsado e já não dá entrada.',
                ),
              CheckInResult.notPaid => (Icons.cancel_rounded, const Color(0xFFB3261E), 'Bilhete por pagar', 'O pagamento deste bilhete não foi concluído.'),
              CheckInResult.notFound => (Icons.cancel_rounded, const Color(0xFFB3261E), 'Bilhete inválido', 'Este código não corresponde a nenhum bilhete.'),
              CheckInResult.notOrganizer => (
                  Icons.lock_outline_rounded,
                  AppTheme.inkMuted,
                  'Só o organizador',
                  'Só quem organiza o evento, com a permissão de bilhetes e entradas, pode validar. Entra com essa conta.',
                ),
              CheckInResult.error => (Icons.wifi_off_rounded, AppTheme.inkMuted, 'Não foi possível validar', 'Verifica a ligação e tenta outra vez.'),
            };
            return ListView(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 60, AppTheme.screenMargin, 40),
              children: [
                Icon(icon, size: 96, color: color),
                const SizedBox(height: 16),
                Text(title, textAlign: TextAlign.center, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 8),
                Text(text, textAlign: TextAlign.center, style: const TextStyle(fontSize: 17, height: 1.4, color: AppTheme.ink)),
                if (c.event != null) ...[
                  const SizedBox(height: 4),
                  Text(c.event!, textAlign: TextAlign.center, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
                ],
                const SizedBox(height: 32),
                if (c.result == CheckInResult.error)
                  FilledButton(
                    onPressed: () => setState(() => _future = checkInTicket(widget.code)),
                    child: const Text('Tentar outra vez'),
                  ),
                TextButton(
                  onPressed: () => context.go('/bilhetes'),
                  child: const Text('Ver todos os bilhetes'),
                ),
              ],
            );
          },
        ),
      ),
    );
  }
}
