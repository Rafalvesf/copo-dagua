import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import 'snappy_tap.dart';

void openSupportScreen(BuildContext context) {
  context.push('/support');
}

/// Ícone ilustrado de chat/ajuda — substitui o ícone Material usado
/// antes nos pontos de entrada do Suporte & IA.
class ChatIconButton extends StatelessWidget {
  final VoidCallback? onTap;
  final double size;

  const ChatIconButton({super.key, this.onTap, this.size = 40});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: ClipOval(
        child: Image.asset(
          'assets/images/chat_icon.png',
          width: size,
          height: size,
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}

/// Bolha de chat flutuante e arrastável — presente na maioria dos ecrãs
/// (no feed inicial o mesmo atalho vive fixo no cabeçalho, ver
/// HomeFeedScreen). Colocar como `Positioned.fill(child: DraggableChatBubble())`
/// dentro do Stack de topo de cada ecrã.
class DraggableChatBubble extends StatefulWidget {
  const DraggableChatBubble({super.key});

  @override
  State<DraggableChatBubble> createState() => _DraggableChatBubbleState();
}

class _DraggableChatBubbleState extends State<DraggableChatBubble> {
  static const _bubbleSize = 56.0;
  static const _targetSize = 56.0;
  static const _dropRadius = 44.0;

  Offset? _position;
  bool _dragging = false;
  bool _dismissed = false;

  Offset _targetCenter(Size size) => Offset(size.width / 2, size.height * 0.2);

  @override
  Widget build(BuildContext context) {
    if (_dismissed) return const SizedBox.shrink();

    return LayoutBuilder(
      builder: (context, constraints) {
        final size = constraints.biggest;
        _position ??= Offset(size.width - 72, size.height - 190);
        final targetCenter = _targetCenter(size);

        return Stack(
          children: [
            // Esbate o ecrã por trás enquanto se arrasta a bolha — dá
            // foco ao gesto, como um modo de "largar para fechar".
            Positioned.fill(
              child: IgnorePointer(
                child: AnimatedOpacity(
                  opacity: _dragging ? 0.5 : 0,
                  duration: const Duration(milliseconds: 200),
                  child: Container(color: Colors.black),
                ),
              ),
            ),
            // Alvo "X": aparece só durante o arrasto, a 30% da altura
            // do ecrã — largar a bolha aqui fecha-a.
            Positioned(
              left: targetCenter.dx - _targetSize / 2,
              top: targetCenter.dy - _targetSize / 2,
              child: IgnorePointer(
                child: AnimatedOpacity(
                  opacity: _dragging ? 1 : 0,
                  duration: const Duration(milliseconds: 200),
                  child: Container(
                    width: _targetSize,
                    height: _targetSize,
                    decoration: BoxDecoration(
                      color: Colors.black.withValues(alpha: 0.6),
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(
                      Icons.close,
                      color: Colors.white,
                      size: 26,
                    ),
                  ),
                ),
              ),
            ),
            Positioned(
              left: _position!.dx,
              top: _position!.dy,
              child: GestureDetector(
                onPanStart: (_) => setState(() => _dragging = true),
                onPanUpdate: (details) {
                  setState(() {
                    final newX = (_position!.dx + details.delta.dx).clamp(
                      8.0,
                      size.width - _bubbleSize - 8,
                    );
                    final newY = (_position!.dy + details.delta.dy).clamp(
                      8.0,
                      size.height - _bubbleSize - 8,
                    );
                    _position = Offset(newX, newY);
                  });
                },
                onPanEnd: (_) {
                  final bubbleCenter =
                      _position! +
                      const Offset(_bubbleSize / 2, _bubbleSize / 2);
                  final droppedOnTarget =
                      (bubbleCenter - targetCenter).distance <= _dropRadius;
                  setState(() {
                    _dragging = false;
                    if (droppedOnTarget) _dismissed = true;
                  });
                },
                onTap: () => openSupportScreen(context),
                child: Container(
                  width: _bubbleSize,
                  height: _bubbleSize,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    boxShadow: AppTheme.cardShadowStrong,
                  ),
                  child: ClipOval(
                    child: Image.asset(
                      'assets/images/chat_icon.png',
                      width: _bubbleSize,
                      height: _bubbleSize,
                      fit: BoxFit.cover,
                    ),
                  ),
                ),
              ),
            ),
          ],
        );
      },
    );
  }
}
