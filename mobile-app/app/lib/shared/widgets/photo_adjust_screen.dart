import 'dart:typed_data';
import 'dart:ui' as ui;

import 'package:flutter/material.dart';
import 'package:flutter/rendering.dart';

import '../../core/theme/app_theme.dart';

/// Deixa o casal posicionar/ampliar a foto antes de a guardar como capa
/// — pedido explícito do utilizador: "faz com que eu consiga ajustar a
/// fotografia do casal". Sem pacote de crop nativo (nenhum instalado
/// suporta bem Flutter Web, o alvo real desta app) — usa só
/// `InteractiveViewer` (pan/zoom) + `RepaintBoundary.toImage()` para
/// capturar exatamente o que fica visível na moldura como PNG, sem
/// depender de nenhuma biblioteca externa.
Future<Uint8List?> showPhotoAdjustScreen(
  BuildContext context, {
  required Uint8List imageBytes,
  double aspectRatio = 4 / 3,
}) {
  return Navigator.of(context).push<Uint8List>(
    MaterialPageRoute(
      builder: (_) => _PhotoAdjustScreen(imageBytes: imageBytes, aspectRatio: aspectRatio),
    ),
  );
}

class _PhotoAdjustScreen extends StatefulWidget {
  final Uint8List imageBytes;
  final double aspectRatio;

  const _PhotoAdjustScreen({required this.imageBytes, required this.aspectRatio});

  @override
  State<_PhotoAdjustScreen> createState() => _PhotoAdjustScreenState();
}

class _PhotoAdjustScreenState extends State<_PhotoAdjustScreen> {
  final _boundaryKey = GlobalKey();
  bool _saving = false;

  Future<void> _save() async {
    setState(() => _saving = true);
    try {
      final boundary = _boundaryKey.currentContext!.findRenderObject() as RenderRepaintBoundary;
      // `pixelRatio` mais alto do que 1 para não sair uma imagem final
      // em baixa resolução — a moldura no ecrã é só ~90% da largura,
      // bem menor do que o ficheiro original.
      final image = await boundary.toImage(pixelRatio: 3);
      final byteData = await image.toByteData(format: ui.ImageByteFormat.png);
      if (!mounted) return;
      Navigator.of(context).pop(byteData!.buffer.asUint8List());
    } catch (_) {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
              child: Row(
                children: [
                  IconButton(
                    onPressed: () => Navigator.of(context).pop(),
                    icon: const Icon(Icons.close, color: Colors.white),
                  ),
                  const Spacer(),
                  const Text(
                    'Ajustar foto',
                    style: TextStyle(color: Colors.white, fontWeight: FontWeight.w700),
                  ),
                  const Spacer(),
                  const SizedBox(width: 48),
                ],
              ),
            ),
            const SizedBox(height: 8),
            const Text(
              'Arrasta e afasta os dedos para ajustar',
              style: TextStyle(color: Colors.white70, fontSize: 12.5),
            ),
            const SizedBox(height: 16),
            Expanded(
              child: Center(
                child: AspectRatio(
                  aspectRatio: widget.aspectRatio,
                  child: RepaintBoundary(
                    key: _boundaryKey,
                    child: ClipRect(
                      child: InteractiveViewer(
                        minScale: 1,
                        maxScale: 4,
                        boundaryMargin: const EdgeInsets.all(double.infinity),
                        child: Image.memory(widget.imageBytes, fit: BoxFit.cover),
                      ),
                    ),
                  ),
                ),
              ),
            ),
            Padding(
              padding: const EdgeInsets.all(20),
              child: SizedBox(
                width: double.infinity,
                child: FilledButton(
                  style: FilledButton.styleFrom(
                    backgroundColor: AppTheme.accentOliveDark,
                    minimumSize: const Size.fromHeight(52),
                  ),
                  onPressed: _saving ? null : _save,
                  child: _saving
                      ? const SizedBox(
                          height: 20,
                          width: 20,
                          child: CircularProgressIndicator(strokeWidth: 2.5, color: Colors.white),
                        )
                      : const Text('Guardar'),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}
