import 'dart:async';

import 'package:copo_dagua_app/shared/hero_icons.dart';
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
            // O QR é rotativo (migração 228): só o ecrã do bilhete o mostra,
            // sempre fresco; aqui fica o ícone.
            Container(
              width: 64,
              height: 64,
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(10)),
              child: const Icon(Hi.qrCode, size: 40, color: AppTheme.ink),
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
            const Icon(Hi.chevronRight, color: Colors.white),
          ]),
        ),
      ),
    );
  }
}

/// Ecrã inteiro com o QR grande, para mostrar à porta.
///
/// QR rotativo (migração 228, 2026-11-23): o token vem do servidor e muda a
/// cada 30 s; pedimos o próximo quando a janela acaba. Sem rede não há QR
/// (de propósito: o segredo nunca fica no telemóvel).
class TicketPassScreen extends StatefulWidget {
  final MyTicket ticket;
  final String eventName;
  const TicketPassScreen({super.key, required this.ticket, required this.eventName});

  @override
  State<TicketPassScreen> createState() => _TicketPassScreenState();
}

class _TicketPassScreenState extends State<TicketPassScreen> with WidgetsBindingObserver {
  EntryQr? _qrNow;
  bool _loading = true;
  bool _failed = false;
  Timer? _timer;
  DateTime _expires = DateTime.now();

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _refresh();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _timer?.cancel();
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    // Ao voltar à app o token pode já ter passado.
    if (state == AppLifecycleState.resumed) _refresh();
  }

  Future<void> _refresh() async {
    _timer?.cancel();
    final q = await fetchEntryQr(widget.ticket.weddingId);
    if (!mounted) return;
    setState(() {
      _loading = false;
      _failed = q == null;
      if (q != null) {
        _qrNow = q;
        _expires = DateTime.now().add(q.refreshIn);
      }
    });
    // Sem rede: tenta outra vez daqui a 5 s.
    _timer = Timer(q?.refreshIn ?? const Duration(seconds: 5), _refresh);
  }

  @override
  Widget build(BuildContext context) {
    final ticket = widget.ticket;
    final eventName = widget.eventName;
    final q = _qrNow;
    final checkedInAt = q?.checkedInAt ?? ticket.checkedInAt;
    final w = MediaQuery.sizeOf(context).width;
    final size = (w - 2 * AppTheme.screenMargin - 48).clamp(180.0, 300.0);
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(top: false, 
        child: ListView(
          padding: ( const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 40)).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
          children: [
            Align(
              alignment: Alignment.centerLeft,
              child: IconButton(
                onPressed: () => Navigator.of(context).maybePop(),
                icon: const Icon(Hi.arrowLeft),
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
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 20),
            Center(
              child: Container(
                padding: const EdgeInsets.all(24),
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(AppRadius.lg), boxShadow: AppTheme.searchBarShadow),
                child: Column(children: [
                  SizedBox(
                    width: size,
                    height: size,
                    child: q != null && !_failed
                        ? _qr(q.qrData, size)
                        : Center(
                            child: _loading
                                ? const CircularProgressIndicator()
                                : Column(mainAxisSize: MainAxisSize.min, children: [
                                    const Icon(Hi.signalSlash, size: 40, color: AppTheme.inkMuted),
                                    const SizedBox(height: 8),
                                    const Text('Sem ligação. O QR aparece quando voltar a rede.',
                                        textAlign: TextAlign.center,
                                        style: TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted)),
                                    TextButton(onPressed: _refresh, child: const Text('Tentar outra vez')),
                                  ]),
                          ),
                  ),
                  if (q != null && !_failed) ...[
                    const SizedBox(height: 12),
                    _Countdown(key: ValueKey(q.token), until: _expires, total: const Duration(seconds: 30)),
                  ],
                  const SizedBox(height: 12),
                  Text(
                    ticket.quantity == 1 ? '1 pessoa' : '${ticket.quantity} pessoas',
                    style: const TextStyle(fontSize: 15, color: AppTheme.inkMuted),
                  ),
                ]),
              ),
            ),
            const SizedBox(height: 18),
            if (checkedInAt != null)
              Text('Entrada registada às ${_hhmm(checkedInAt)}.',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark))
            else
              const Text(
                'Mostra este QR à entrada. Muda a cada 30 segundos e só serve para ti: um screenshot não dá entrada.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted),
              ),
          ],
        ),
      ),
    );
  }
}

/// Barra fina com o tempo que falta até o QR mudar.
class _Countdown extends StatefulWidget {
  final DateTime until;
  final Duration total;
  const _Countdown({super.key, required this.until, required this.total});

  @override
  State<_Countdown> createState() => _CountdownState();
}

class _CountdownState extends State<_Countdown> with SingleTickerProviderStateMixin {
  late final AnimationController _c;

  @override
  void initState() {
    super.initState();
    final left = widget.until.difference(DateTime.now());
    final start = (left.inMilliseconds / widget.total.inMilliseconds).clamp(0.0, 1.0);
    _c = AnimationController(vsync: this, duration: left.isNegative ? Duration.zero : left, value: start);
    _c.animateTo(0, duration: left.isNegative ? Duration.zero : left);
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Semantics(
      label: 'O código QR muda daqui a pouco',
      child: AnimatedBuilder(
        animation: _c,
        builder: (context, _) => ClipRRect(
          borderRadius: BorderRadius.circular(2),
          child: LinearProgressIndicator(
            value: _c.value,
            minHeight: 4,
            backgroundColor: AppTheme.ink.withValues(alpha: 0.08),
            color: AppTheme.accentOliveDark,
          ),
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
                  Hi.checkCircle,
                  AppTheme.accentOliveDark,
                  'Entrada válida',
                  '${c.name ?? 'Convidado'} · ${c.quantity == 1 ? '1 pessoa' : '${c.quantity} pessoas'}',
                ),
              CheckInResult.already => (
                  Hi.informationCircle,
                  const Color(0xFF9A5B00),
                  'Já entrou',
                  '${c.name ?? 'Convidado'} entrou às ${c.at == null ? '—' : _hhmm(c.at!)}.',
                ),
              CheckInResult.refunded => (
                  Hi.xCircle,
                  const Color(0xFFB3261E),
                  'Bilhete reembolsado',
                  'Este bilhete foi reembolsado e já não dá entrada.',
                ),
              CheckInResult.notPaid => (Hi.xCircle, const Color(0xFFB3261E), 'Bilhete por pagar', 'O pagamento deste bilhete não foi concluído.'),
              CheckInResult.notFound => (Hi.xCircle, const Color(0xFFB3261E), 'Bilhete inválido', 'Este código não corresponde a nenhum bilhete.'),
              CheckInResult.expired => (
                  Hi.clock,
                  const Color(0xFF9A5B00),
                  'QR expirado',
                  'O QR de ${c.name ?? 'Convidado'} já mudou. Pede para abrir o bilhete e lê outra vez.',
                ),
              CheckInResult.notOrganizer => (
                  Hi.lockClosed,
                  AppTheme.inkMuted,
                  'Só o organizador',
                  'Só quem organiza o evento, com a permissão de bilhetes e entradas, pode validar. Entra com essa conta.',
                ),
              CheckInResult.error => (Hi.signalSlash, AppTheme.inkMuted, 'Não foi possível validar', 'Verifica a ligação e tenta outra vez.'),
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
