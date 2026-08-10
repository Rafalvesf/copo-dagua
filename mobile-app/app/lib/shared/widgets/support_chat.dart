import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

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
    return InkWell(
      customBorder: const CircleBorder(),
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
  Offset? _position;

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final size = constraints.biggest;
        _position ??= Offset(size.width - 72, size.height - 190);

        return Stack(
          children: [
            Positioned(
              left: _position!.dx,
              top: _position!.dy,
              child: GestureDetector(
                onPanUpdate: (details) {
                  setState(() {
                    final newX = (_position!.dx + details.delta.dx).clamp(8.0, size.width - 64);
                    final newY = (_position!.dy + details.delta.dy).clamp(8.0, size.height - 64);
                    _position = Offset(newX, newY);
                  });
                },
                onTap: () => openSupportScreen(context),
                child: Container(
                  width: 56,
                  height: 56,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(color: Colors.black.withValues(alpha: 0.3), blurRadius: 16, offset: const Offset(0, 6)),
                    ],
                  ),
                  child: ClipOval(
                    child: Image.asset('assets/images/chat_icon.png', width: 56, height: 56, fit: BoxFit.cover),
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
