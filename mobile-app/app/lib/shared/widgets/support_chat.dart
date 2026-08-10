import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

void openSupportSheet(BuildContext context) {
  showModalBottomSheet(
    context: context,
    isScrollControlled: true,
    builder: (sheetContext) => Padding(
      padding: EdgeInsets.only(
        left: 24,
        right: 24,
        top: 24,
        bottom: MediaQuery.of(sheetContext).viewInsets.bottom + 24,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              Container(
                width: 40,
                height: 40,
                decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
                child: const Icon(Icons.live_help_outlined, color: Colors.white, size: 20),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Suporte & IA', style: Theme.of(sheetContext).textTheme.titleMedium),
                    Text('Em breve', style: Theme.of(sheetContext).textTheme.bodySmall),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          const Text(
            'Esta funcionalidade ainda não está ligada a um assistente real. '
            'Vai permitir tirar dúvidas com IA ou falar com a equipa de suporte diretamente daqui.',
          ),
          const SizedBox(height: 16),
          TextField(
            enabled: false,
            decoration: InputDecoration(
              hintText: 'Escreve a tua pergunta...',
              suffixIcon: const Icon(Icons.send_outlined),
              fillColor: AppTheme.background,
            ),
          ),
          const SizedBox(height: 8),
        ],
      ),
    ),
  );
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
                onTap: () => openSupportSheet(context),
                child: Container(
                  width: 56,
                  height: 56,
                  decoration: BoxDecoration(
                    color: AppTheme.ink,
                    shape: BoxShape.circle,
                    boxShadow: [
                      BoxShadow(color: Colors.black.withValues(alpha: 0.3), blurRadius: 16, offset: const Offset(0, 6)),
                    ],
                  ),
                  child: const Icon(Icons.live_help_outlined, color: Colors.white, size: 26),
                ),
              ),
            ),
          ],
        );
      },
    );
  }
}
