import 'package:flutter/material.dart';

import 'v2_kit.dart' show V2Avatar;

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
  /// Ignorada desde 2026-11-23: a cor vem do nome, como no [V2Avatar]
  /// (cores fortes com letras brancas), para ler-se bem em todo o lado.
  final Color? background;
  final Color foreground;

  const InitialsAvatar({
    super.key,
    required this.name,
    this.radius = 24,
    this.background,
    this.foreground = const Color(0xFFFFFFFF),
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
      backgroundColor: V2Avatar.tintFor(name),
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
