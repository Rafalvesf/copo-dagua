import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

class GradientMark extends StatelessWidget {
  final double size;
  final IconData icon;

  const GradientMark({super.key, this.size = 40, this.icon = Icons.favorite});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: size,
      height: size,
      decoration: const BoxDecoration(
        gradient: AppGradients.wedding,
        shape: BoxShape.circle,
      ),
      child: Icon(icon, size: size * 0.5, color: Colors.white),
    );
  }
}
