import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Avatar de iniciais — substitui `NetworkImage('https://i.pravatar.cc/...')`
/// (serviço externo de avatares aleatórios) nos ecrãs de reservas do
/// parceiro. Pedido explícito do utilizador: "o pfp não faz load no
/// perfil do client" — não existe (ainda) nenhuma foto de perfil real
/// para casais (`profiles.avatar_url` existe na base de dados mas
/// nunca chegou a ter nenhum ecrã de upload), por isso o placeholder
/// era sempre um serviço de terceiros só a gerar uma imagem aleatória a
/// partir do id do casal — sem controlo sobre a disponibilidade desse
/// serviço. Iniciais nunca falham a carregar, por não dependerem de
/// nenhum pedido de rede.
class InitialsAvatar extends StatelessWidget {
  final String name;
  final double radius;
  final Color background;
  final Color foreground;

  const InitialsAvatar({
    super.key,
    required this.name,
    this.radius = 24,
    this.background = AppColors.green,
    this.foreground = AppTheme.ink,
  });

  String get _initials {
    final parts = name.trim().split(RegExp(r'\s+')).where((p) => p.isNotEmpty).toList();
    if (parts.isEmpty) return '?';
    if (parts.length == 1) return parts.first.substring(0, 1).toUpperCase();
    return (parts.first.substring(0, 1) + parts.last.substring(0, 1)).toUpperCase();
  }

  @override
  Widget build(BuildContext context) {
    return CircleAvatar(
      radius: radius,
      backgroundColor: background,
      child: Text(
        _initials,
        style: TextStyle(
          color: foreground,
          fontWeight: FontWeight.w700,
          fontSize: radius * 0.6,
        ),
      ),
    );
  }
}
