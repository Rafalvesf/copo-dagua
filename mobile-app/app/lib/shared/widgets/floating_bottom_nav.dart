import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

enum AppTab {
  home,
  wedding,
  guests,
  checklist,
  partners,
  budget,
  seating,
  chat,
  mascot,
}

/// Navbar flutuante — superfície preta única e contínua, construída
/// como uma sequência de "lóbulos" circulares fundidos (5 botões: um
/// elevado + 4 na base), com pequenas concavidades entre lóbulos
/// adjacentes. Especificação exata (não escalar a partir de nenhuma
/// imagem — são medidas fixas do componente):
///
/// - Altura da base: 48px · diâmetro de cada lóbulo: 48px (raio 24)
/// - Elevação do primeiro botão: 20px acima do eixo dos outros 4
/// - Distância entre centros dos botões 2–5: 44px (meio de 43–45px)
/// - Concavidades entre lóbulos: ~6px de profundidade, ~12px de largura
/// - Margem lateral mínima ao viewport: 20px
/// - Distância ao fundo do ecrã: 16px + safe area
/// - Largura total: ~229px · Altura total: 68px (48 + 20)
class FloatingBottomNav extends StatelessWidget {
  final AppTab current;

  const FloatingBottomNav({super.key, required this.current});

  static const _items = [
    _NavItem(icon: Icons.home_outlined, tab: AppTab.home, route: '/home'),
    _NavItem(icon: Icons.storefront_outlined, tab: AppTab.partners, route: '/partners'),
    _NavItem(icon: Icons.forum_outlined, tab: AppTab.chat, route: '/chat'),
    _NavItem(icon: Icons.favorite_outline, tab: AppTab.mascot, route: '/mascot'),
    _NavItem(icon: Icons.person_outline, tab: AppTab.wedding, route: '/wedding'),
  ];

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      top: false,
      minimum: const EdgeInsets.only(bottom: 16),
      child: Align(
        alignment: Alignment.bottomCenter,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: _LobedNavShape(items: _items, current: current),
        ),
      ),
    );
  }
}

class _NavItem {
  final IconData icon;
  final AppTab tab;
  final String route;

  const _NavItem({required this.icon, required this.tab, required this.route});
}

/// Desenha a silhueta preta (lóbulos + concavidades) via [CustomPaint] e
/// posiciona os 5 botões diretamente sobre os centros geométricos dos
/// lóbulos correspondentes.
class _LobedNavShape extends StatelessWidget {
  final List<_NavItem> items;
  final AppTab current;

  const _LobedNavShape({required this.items, required this.current});

  static const double _lobeRadius = 24;
  static const double _pitch = 44;
  static const double _elevation = 20;
  static const double _baseHeight = 48;
  static const double _width = 229;
  static const double _height = _elevation + _baseHeight;

  /// Centros dos 5 lóbulos — índice 0 é o botão elevado.
  static List<Offset> get _centers => [
        const Offset(_lobeRadius, _lobeRadius),
        for (var i = 1; i <= 4; i++)
          Offset(_lobeRadius + i * _pitch, _elevation + _lobeRadius),
      ];

  @override
  Widget build(BuildContext context) {
    final centers = _centers;
    return SizedBox(
      width: _width,
      height: _height,
      child: CustomPaint(
        painter: const _LobedNavPainter(),
        child: Stack(
          clipBehavior: Clip.none,
          children: [
            for (var i = 0; i < items.length; i++)
              Positioned(
                left: centers[i].dx - _lobeRadius,
                top: centers[i].dy - _lobeRadius,
                width: _lobeRadius * 2,
                height: _lobeRadius * 2,
                child: _NavButton(
                  item: items[i],
                  active: items[i].tab == current,
                ),
              ),
          ],
        ),
      ),
    );
  }
}

class _NavButton extends StatelessWidget {
  final _NavItem item;
  final bool active;

  const _NavButton({required this.item, required this.active});

  void _go(BuildContext context) {
    switch (item.route) {
      case '/home':
      case '/partners':
      case '/chat':
      case '/mascot':
        context.go(item.route);
      default:
        context.push(item.route);
    }
  }

  @override
  Widget build(BuildContext context) {
    // Estado ativo: mudança subtil no próprio ícone (preenchido em vez
    // de outline), sem alterar a geometria da navbar — nunca um
    // indicador em pill/underline/background, como pedido.
    return Material(
      color: Colors.transparent,
      shape: const CircleBorder(),
      child: InkWell(
        customBorder: const CircleBorder(),
        onTap: () => _go(context),
        child: Center(
          child: Icon(
            active ? _filledVariant(item.icon) : item.icon,
            color: Colors.white,
            size: 19,
          ),
        ),
      ),
    );
  }

  IconData _filledVariant(IconData outline) {
    if (outline == Icons.home_outlined) return Icons.home_rounded;
    if (outline == Icons.storefront_outlined) return Icons.storefront_rounded;
    if (outline == Icons.forum_outlined) return Icons.forum_rounded;
    if (outline == Icons.favorite_outline) return Icons.favorite_rounded;
    if (outline == Icons.person_outline) return Icons.person_rounded;
    return outline;
  }
}

/// Silhueta construída com arcos de circunferência (raio 24, um por
/// lóbulo) ligados por curvas curtas: uma fusão suave e contínua entre
/// o lóbulo elevado e o segundo botão (sem concavidade — "sem corte
/// vertical"), e pequenas concavidades côncavas entre os lóbulos 2–5.
class _LobedNavPainter extends CustomPainter {
  const _LobedNavPainter();

  static const _fill = Color(0xFF0B0B0B);

  @override
  void paint(Canvas canvas, Size size) {
    final path = _buildPath();

    // Sombra extremamente subtil — a própria superfície preta domina
    // visualmente, a sombra só separa do conteúdo por trás.
    canvas.drawShadow(path, Colors.black.withValues(alpha: 0.08), 3, false);

    canvas.drawPath(path, Paint()..color = _fill);
  }

  Path _buildPath() {
    final path = Path();
    const r = Radius.circular(24);

    path.moveTo(14, 68);
    // canto inferior-esquerdo → ponto onde a curvatura do lóbulo 0 começa
    path.cubicTo(6, 64, 2, 52, 8.6, 42.4);
    // arco do lóbulo elevado (0), passando pelo topo
    path.arcToPoint(const Offset(43.7, 10.2), radius: r, largeArc: true);
    // fusão suave lóbulo 0 → lóbulo 1 (sem concavidade, sem corte vertical)
    path.cubicTo(49.7, 18.2, 46.1, 18.0, 52.1, 26);
    // arco do lóbulo 1
    path.arcToPoint(const Offset(83.9, 26), radius: r);
    // concavidade 1→2
    path.quadraticBezierTo(90, 28, 96.1, 26);
    // arco do lóbulo 2
    path.arcToPoint(const Offset(127.9, 26), radius: r);
    // concavidade 2→3
    path.quadraticBezierTo(134, 28, 140.1, 26);
    // arco do lóbulo 3
    path.arcToPoint(const Offset(171.9, 26), radius: r);
    // concavidade 3→4
    path.quadraticBezierTo(178, 28, 184.1, 26);
    // arco do lóbulo 4, estendido para a direita
    path.arcToPoint(const Offset(223.6, 48.2), radius: r);
    // pequena extensão + curva até ao canto inferior-direito
    path.cubicTo(227, 52, 229, 54, 229, 54);
    path.cubicTo(229, 60, 223, 68, 215, 68);
    // fecha ao longo do fundo
    path.close();

    return path;
  }

  @override
  bool shouldRepaint(covariant _LobedNavPainter oldDelegate) => false;
}
