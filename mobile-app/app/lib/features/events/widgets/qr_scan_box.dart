import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:mobile_scanner/mobile_scanner.dart';

import '../../../core/events/event_pay.dart';
import '../../../core/theme/app_theme.dart';

/// Câmara para ler QR da À Nossa! (pranchetas «Entrada · Scannear» e
/// «Entrada do parceiro», 2026-11-23). O que se lê é decidido por
/// [parseScanned]: um pedido de pagamento abre a folha «Pagar»
/// (`/pagar/<código>`); o QR da conta de alguém abre «Quem é» (`/q/<token>`).
/// Ao voltar, a câmara liga outra vez e chama [onReturn].
class QrScanBox extends StatefulWidget {
  final double height;
  final bool showTorch;
  final VoidCallback? onReturn;
  const QrScanBox({super.key, required this.height, this.showTorch = false, this.onReturn});

  @override
  State<QrScanBox> createState() => _QrScanBoxState();
}

class _QrScanBoxState extends State<QrScanBox> with WidgetsBindingObserver, SingleTickerProviderStateMixin {
  final _ctrl = MobileScannerController(
    detectionSpeed: DetectionSpeed.noDuplicates,
    formats: const [BarcodeFormat.qrCode],
  );
  late final AnimationController _line = AnimationController(vsync: this, duration: const Duration(milliseconds: 1600));
  bool _handling = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    // Linha a correr pela moldura; parada com «reduzir movimento».
    if (MediaQuery.of(context).disableAnimations) {
      _line.stop();
    } else if (!_line.isAnimating) {
      _line.repeat(reverse: true);
    }
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (_handling) return;
    if (state == AppLifecycleState.resumed) {
      _ctrl.start();
    } else if (state == AppLifecycleState.paused) {
      _ctrl.stop();
    }
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _line.dispose();
    _ctrl.dispose();
    super.dispose();
  }

  Future<void> _onDetect(BarcodeCapture capture) async {
    if (_handling) return;
    String? raw;
    for (final b in capture.barcodes) {
      if (b.rawValue != null && b.rawValue!.isNotEmpty) {
        raw = b.rawValue;
        break;
      }
    }
    if (raw == null) return;
    final parsed = parseScanned(raw);
    if (parsed == null) {
      ScaffoldMessenger.of(context)
        ..hideCurrentSnackBar()
        ..showSnackBar(const SnackBar(content: Text('Este QR não é da À Nossa!')));
      return;
    }
    _handling = true;
    await _ctrl.stop();
    if (!mounted) return;
    final path = parsed.kind == 'pay' ? '/pagar/${parsed.value}' : '/q/${parsed.value}';
    await context.push(path);
    if (!mounted) return;
    _handling = false;
    widget.onReturn?.call();
    await _ctrl.start();
  }

  @override
  Widget build(BuildContext context) {
    final frame = widget.height >= 380 ? 230.0 : 180.0;
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      ClipRRect(
        borderRadius: BorderRadius.circular(16),
        child: SizedBox(
          height: widget.height,
          child: Stack(fit: StackFit.expand, children: [
            const ColoredBox(color: Color(0xFF3A3733)),
            MobileScanner(
              controller: _ctrl,
              onDetect: _onDetect,
              errorBuilder: (context, error, child) => const _CameraProblem(),
            ),
            Center(
              child: SizedBox(
                width: frame,
                height: frame,
                child: Stack(children: [
                  const Positioned.fill(child: CustomPaint(painter: _CornersPainter())),
                  AnimatedBuilder(
                    animation: _line,
                    builder: (context, _) => Positioned(
                      left: 16,
                      right: 16,
                      top: 16 + _line.value * (frame - 34),
                      child: Container(height: 2, color: AppTheme.progress),
                    ),
                  ),
                ]),
              ),
            ),
            Positioned(
              bottom: 16,
              left: 0,
              right: 0,
              child: Center(
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                  decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(999)),
                  child: const Text('À procura de um QR…',
                      style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
              ),
            ),
          ]),
        ),
      ),
      if (widget.showTorch)
        ValueListenableBuilder<MobileScannerState>(
          valueListenable: _ctrl,
          builder: (context, s, _) {
            if (s.torchState == TorchState.unavailable) return const SizedBox.shrink();
            final on = s.torchState == TorchState.on;
            return Padding(
              padding: const EdgeInsets.only(top: 14),
              child: Semantics(
                button: true,
                toggled: on,
                label: 'Lanterna',
                child: InkWell(
                  onTap: _ctrl.toggleTorch,
                  child: Container(
                    constraints: const BoxConstraints(minHeight: 48),
                    decoration: const BoxDecoration(
                      border: Border.symmetric(horizontal: BorderSide(color: AppTheme.line)),
                    ),
                    child: Row(children: [
                      const Expanded(
                        child: Text('Lanterna', style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
                      ),
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        decoration: BoxDecoration(
                          color: on ? const Color(0xFFE6EDE1) : const Color(0xFFE6E6E6),
                          borderRadius: BorderRadius.circular(999),
                        ),
                        child: Text(on ? 'Ligada' : 'Desligada',
                            style: TextStyle(
                                fontSize: 12,
                                fontWeight: FontWeight.w700,
                                color: on ? const Color(0xFF3F7A4F) : const Color(0xFF3A3733))),
                      ),
                    ]),
                  ),
                ),
              ),
            );
          },
        ),
    ]);
  }
}

class _CameraProblem extends StatelessWidget {
  const _CameraProblem();

  @override
  Widget build(BuildContext context) => const ColoredBox(
        color: Color(0xFF3A3733),
        child: Center(
          child: Padding(
            padding: EdgeInsets.all(24),
            child: Text(
              'Sem acesso à câmara. Dá permissão à À Nossa! nas definições do telemóvel.',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 14, height: 1.4, color: Colors.white),
            ),
          ),
        ),
      );
}

/// Os quatro cantos brancos da moldura de leitura (cantos 16).
class _CornersPainter extends CustomPainter {
  const _CornersPainter();

  @override
  void paint(Canvas canvas, Size size) {
    const len = 44.0;
    const r = 16.0;
    final p = Paint()
      ..color = Colors.white
      ..style = PaintingStyle.stroke
      ..strokeWidth = 4
      ..strokeCap = StrokeCap.round;
    final w = size.width, h = size.height;
    const arc = Radius.circular(r - 2);
    canvas
      ..drawPath(Path()..moveTo(2, len)..lineTo(2, r)..arcToPoint(const Offset(r, 2), radius: arc)..lineTo(len, 2), p)
      ..drawPath(Path()..moveTo(w - len, 2)..lineTo(w - r, 2)..arcToPoint(Offset(w - 2, r), radius: arc)..lineTo(w - 2, len), p)
      ..drawPath(
          Path()..moveTo(w - 2, h - len)..lineTo(w - 2, h - r)..arcToPoint(Offset(w - r, h - 2), radius: arc)..lineTo(w - len, h - 2), p)
      ..drawPath(Path()..moveTo(len, h - 2)..lineTo(r, h - 2)..arcToPoint(Offset(2, h - r), radius: arc)..lineTo(2, h - len), p);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
