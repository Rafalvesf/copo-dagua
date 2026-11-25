import 'dart:async';

import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:qr_flutter/qr_flutter.dart';

import '../../../core/events/event_pass.dart';
import '../../../core/events/my_qr.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/skeleton.dart';
import '../../../shared/widgets/snappy_tap.dart';
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';

/// Bilhete e QR da conta.
///
/// Migração 158: depois de pagar, o convidado mostra o QR à entrada.
/// Migração 228 (2026-11-23): o QR passou a ser UM por conta ("apenas um qr
/// code para todos os eventos … assim posso colocar na página principal"),
/// assinado no servidor e a mudar a cada 30 s. Quem o lê (sobretudo o
/// parceiro, para verificar a marcação; o organizador à entrada) abre
/// «Quem é» (`ScanScreen`).

String _hhmm(DateTime d) => '${d.hour.toString().padLeft(2, '0')}:${d.minute.toString().padLeft(2, '0')}';

/// QR com as cores da app.
QrImageView brandQr(String data, double size, {String label = 'O teu código QR'}) => QrImageView(
      data: data,
      size: size,
      padding: EdgeInsets.zero,
      backgroundColor: Colors.white,
      eyeStyle: const QrEyeStyle(eyeShape: QrEyeShape.square, color: AppTheme.ink),
      dataModuleStyle: const QrDataModuleStyle(dataModuleShape: QrDataModuleShape.square, color: AppTheme.ink),
      semanticsLabel: label,
    );

/// Cartão do bilhete no início do evento do convidado.
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
                  ticket.checkedInAt != null ? 'Entrada registada às ${_hhmm(ticket.checkedInAt!)}' : 'Mostra o teu QR à entrada',
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

/// Ecrã do bilhete: o QR da conta, grande, para mostrar à porta.
class TicketPassScreen extends StatelessWidget {
  final MyTicket ticket;
  final String eventName;
  const TicketPassScreen({super.key, required this.ticket, required this.eventName});

  @override
  Widget build(BuildContext context) => MyQrScreen(
        eyebrow: eventName,
        title: 'O teu bilhete',
        subtitle: ticket.quantity == 1 ? '1 pessoa' : '${ticket.quantity} pessoas',
        footer: ticket.checkedInAt != null ? 'Entrada registada às ${_hhmm(ticket.checkedInAt!)}.' : null,
      );
}

/// Ecrã inteiro com o QR da conta.
class MyQrScreen extends StatelessWidget {
  final String? eyebrow;
  final String title;
  final String? subtitle;
  final String? footer;
  const MyQrScreen({super.key, this.eyebrow, this.title = 'O teu QR', this.subtitle, this.footer});

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        top: false,
        child: ListView(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 40)
              .add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
          children: [
            Align(
              alignment: Alignment.centerLeft,
              child: PressScale(child: IconButton(onPressed: () => Navigator.of(context).maybePop(), icon: const Icon(Hi.arrowLeft), tooltip: 'Voltar')),
            ),
            const SizedBox(height: 4),
            if (eyebrow != null)
              Text(eyebrow!.toUpperCase(),
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.accentOliveDark)),
            const SizedBox(height: 4),
            Text(title, textAlign: TextAlign.center, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 20),
            MyQrPanel(subtitle: subtitle),
            const SizedBox(height: 18),
            Text(
              footer ??
                  'Mostra este QR à entrada, no restaurante ou para pagar. Muda a cada 30 segundos e só serve para ti: um screenshot não serve.',
              textAlign: TextAlign.center,
              style: TextStyle(
                fontSize: 14,
                height: 1.4,
                fontWeight: footer != null ? FontWeight.w700 : FontWeight.w400,
                color: footer != null ? AppTheme.accentOliveDark : AppTheme.inkMuted,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// O QR da conta, sempre fresco: pede o token da janela ao servidor e o
/// próximo quando a janela acaba. Sem rede não há QR (de propósito: o
/// segredo nunca fica no telemóvel). [size] = null → grande, à largura.
class MyQrPanel extends StatefulWidget {
  final String? subtitle;
  final double? size;
  const MyQrPanel({super.key, this.subtitle, this.size});

  @override
  State<MyQrPanel> createState() => _MyQrPanelState();
}

class _MyQrPanelState extends State<MyQrPanel> with WidgetsBindingObserver {
  MyQr? _qrNow;
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
    // Ao voltar à app o token pode já ter passado; em segundo plano, pára.
    if (state == AppLifecycleState.resumed) {
      _refresh();
    } else if (state == AppLifecycleState.paused) {
      _timer?.cancel();
    }
  }

  Future<void> _refresh() async {
    _timer?.cancel();
    final q = await fetchMyQr();
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
    final q = _qrNow;
    final compact = widget.size != null;
    final w = MediaQuery.sizeOf(context).width;
    final size = widget.size ?? (w - 2 * AppTheme.screenMargin - 48).clamp(180.0, 300.0);
    final qr = SizedBox(
      width: size,
      height: size,
      child: q != null && !_failed
          ? brandQr(q.qrData, size)
          : Center(
              child: _loading
                  ? SkeletonBox(width: size, height: size, radius: AppRadius.md)
                  : compact
                      ? const Icon(Hi.signalSlash, size: 28, color: AppTheme.inkMuted)
                      : Column(mainAxisSize: MainAxisSize.min, children: [
                          const Icon(Hi.signalSlash, size: 40, color: AppTheme.inkMuted),
                          const SizedBox(height: 8),
                          const Text('Sem ligação. O QR aparece quando voltar a rede.',
                              textAlign: TextAlign.center,
                              style: TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted)),
                          PressScale(child: TextButton(onPressed: _refresh, child: const Text('Tentar outra vez'))),
                        ]),
            ),
    );
    if (compact) {
      return Column(mainAxisSize: MainAxisSize.min, children: [
        qr,
        if (q != null && !_failed) ...[
          const SizedBox(height: 6),
          SizedBox(width: size, child: _Countdown(key: ValueKey(q.token), until: _expires, total: const Duration(seconds: 30))),
        ],
      ]);
    }
    return Center(
      child: Container(
        padding: const EdgeInsets.all(24),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(AppRadius.lg), boxShadow: AppTheme.searchBarShadow),
        child: Column(children: [
          qr,
          if (q != null && !_failed) ...[
            const SizedBox(height: 12),
            SizedBox(width: size, child: _Countdown(key: ValueKey(q.token), until: _expires, total: const Duration(seconds: 30))),
          ],
          if (q?.name != null) ...[
            const SizedBox(height: 12),
            Text(q!.name!, style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ],
          if (widget.subtitle != null)
            Text(widget.subtitle!, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        ]),
      ),
    );
  }
}

/// Na página principal: o QR da conta, já vivo, e toque para o ver grande.
class MyQrCard extends StatelessWidget {
  const MyQrCard({super.key});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: () => Navigator.of(context).push(MaterialPageRoute(builder: (_) => const MyQrScreen())),
      child: Semantics(
        button: true,
        label: 'Abrir o teu QR em grande',
        child: Container(
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(AppRadius.lg)),
          child: Row(children: [
            const MyQrPanel(size: 84),
            const SizedBox(width: 14),
            const Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text('O teu QR', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                SizedBox(height: 2),
                Text('Mostra-o à entrada, no restaurante ou para pagar. Muda a cada 30 segundos.',
                    style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
            const Icon(Hi.chevronRight, color: AppTheme.ink),
          ]),
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
            color: AppTheme.progress,
          ),
        ),
      ),
    );
  }
}
