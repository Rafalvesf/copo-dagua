import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Cores dos quadrados da Galeria — as mesmas do design (canvas
/// "Galeria"). Usadas enquanto uma foto carrega/falha e no estado vazio.
const galleryTints = [
  AppTheme.accentTint,
  Color(0xFFF7EACA),
  Color(0xFFECE7DC),
  Color(0xFFF3DEE0),
  Color(0xFFF4E1D2),
  Color(0xFFC9D3B0),
  Color(0xFFEEF2E9),
  Color(0xFFF7EACA),
  AppTheme.accentTint,
];

Color galleryTint(int index) => galleryTints[index % galleryTints.length];

/// Cantos dos quadrados como no design: 12 nos cantos de fora da grelha
/// 3×3, 4 nos restantes.
BorderRadius galleryTileRadius(int index, int count) {
  const big = Radius.circular(12);
  const small = Radius.circular(4);
  final lastRowStart = ((count - 1) ~/ 3) * 3;
  return BorderRadius.only(
    topLeft: index == 0 ? big : small,
    topRight: index == 2 || (count < 3 && index == count - 1) ? big : small,
    bottomLeft: index == lastRowStart ? big : small,
    bottomRight: index == count - 1 ? big : small,
  );
}

/// Galeria sem fotos: aviso na mesma caixa do aviso amarelo de
/// aprovação, mas em cinzento, e os quadrados do design por baixo.
class GalleryEmptyState extends StatelessWidget {
  final String message;

  const GalleryEmptyState({super.key, required this.message});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(
          padding: const EdgeInsets.fromLTRB(14, 14, 14, 14),
          decoration: BoxDecoration(
            color: AppTheme.surface,
            borderRadius: BorderRadius.circular(AppRadius.md),
            border: Border.all(color: const Color(0xFFD9D6CF)),
          ),
          child: Row(
            children: [
              const Icon(Icons.photo_outlined, size: 18, color: AppTheme.inkMuted),
              const SizedBox(width: 10),
              Expanded(
                child: Text(
                  message,
                  style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted),
                ),
              ),
            ],
          ),
        ),
        const SizedBox(height: 16),
        GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: 3,
            crossAxisSpacing: 4,
            mainAxisSpacing: 4,
          ),
          itemCount: 9,
          itemBuilder: (context, i) => DecoratedBox(
            decoration: BoxDecoration(
              color: galleryTint(i),
              borderRadius: galleryTileRadius(i, 9),
            ),
          ),
        ),
      ],
    );
  }
}
