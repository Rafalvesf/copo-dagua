import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';

class SupportScreen extends ConsumerStatefulWidget {
  const SupportScreen({super.key});

  @override
  ConsumerState<SupportScreen> createState() => _SupportScreenState();
}

class _SupportScreenState extends ConsumerState<SupportScreen> {
  bool _showAiCard = true;
  bool _aiCardDismissing = false;
  bool _showExplanation = false;
  bool _searchHighlighted = false;
  final _searchBarKey = GlobalKey();
  Rect? _searchBarRect;

  void _captureSearchBarRect() {
    final box = _searchBarKey.currentContext?.findRenderObject() as RenderBox?;
    if (box == null) return;
    _searchBarRect = box.localToGlobal(Offset.zero) & box.size;
  }

  void _onAiCardTap() {
    _captureSearchBarRect();
    setState(() {
      _aiCardDismissing = true;
      _showExplanation = true;
    });
    Future.delayed(const Duration(milliseconds: 220), () {
      if (!mounted) return;
      setState(() => _showAiCard = false);
    });
  }

  void _dismissExplanation() {
    setState(() {
      _showExplanation = false;
      _searchHighlighted = true;
    });
  }

  void _comingSoon(BuildContext context) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(
        content: Text('Ainda sem assistente real ligado — em breve.'),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final profile = ref.watch(authControllerProvider).profile;
    final firstName = profile?.fullName.split(' ').first ?? '';

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            child: Column(
              children: [
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    20,
                    AppTheme.screenMargin,
                    0,
                  ),
                  child: Row(
                    children: [
                      CircleIconButton(
                        icon: Icons.arrow_back_rounded,
                        size: 46,
                        onTap: () => Navigator.of(context).canPop()
                            ? Navigator.of(context).pop()
                            : context.go('/home'),
                      ),
                      const Spacer(),
                      SnappyTap(
                        onTap: () => ScaffoldMessenger.of(context).showSnackBar(
                          const SnackBar(
                            content: Text('Sem notificações por agora.'),
                          ),
                        ),
                        child: ClipOval(
                          child: Image.asset(
                            'assets/images/nav_icon_capybaras.png',
                            width: 40,
                            height: 40,
                            fit: BoxFit.cover,
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
                Expanded(
                  child: SingleChildScrollView(
                    padding: const EdgeInsets.fromLTRB(24, 36, 24, 24),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(
                          firstName.isEmpty
                              ? 'Olá,\ncomo posso ajudar hoje?'
                              : 'Olá, $firstName,\ncomo posso ajudar hoje?',
                          style: Theme.of(context).textTheme.headlineMedium,
                        ),
                        const SizedBox(height: 28),
                        LayoutBuilder(
                          builder: (context, constraints) {
                            final cardWidth = (constraints.maxWidth - 14) / 2;
                            // O badge é irmão da GridView (não filho de uma
                            // Stack por-cartão) para poder pintar por cima da
                            // grelha inteira — incluindo o cartão vizinho onde
                            // transborda — em vez de ficar escondido atrás
                            // dele pela ordem normal de pintura das células.
                            return Stack(
                              clipBehavior: Clip.none,
                              children: [
                                GridView.count(
                                  crossAxisCount: 2,
                                  shrinkWrap: true,
                                  physics: const NeverScrollableScrollPhysics(),
                                  clipBehavior: Clip.none,
                                  mainAxisSpacing: 14,
                                  crossAxisSpacing: 14,
                                  childAspectRatio: 1.15,
                                  children: [
                                    if (_showAiCard)
                                      AnimatedOpacity(
                                        opacity: _aiCardDismissing ? 0 : 1,
                                        duration: const Duration(
                                          milliseconds: 200,
                                        ),
                                        child: AnimatedScale(
                                          scale: _aiCardDismissing ? 0.85 : 1,
                                          duration: const Duration(
                                            milliseconds: 200,
                                          ),
                                          child: _OptionCard(
                                            color: AppColors.yellow,
                                            iconBackground: Colors.transparent,
                                            iconColor: AppColors.purple,
                                            icon: Icons.auto_awesome,
                                            label: 'Perguntar à IA',
                                            onTap: _onAiCardTap,
                                          ),
                                        ),
                                      ),
                                    _OptionCard(
                                      color: AppColors.green,
                                      icon: Icons.support_agent,
                                      label: 'Falar com a equipa',
                                      onTap: () => _comingSoon(context),
                                    ),
                                    _OptionCard(
                                      color: AppColors.blue,
                                      icon: Icons.storefront_outlined,
                                      label: 'Sugestões de parceiros',
                                      onTap: () => _comingSoon(context),
                                    ),
                                    _OptionCard(
                                      color: AppColors.gray,
                                      icon: Icons.savings_outlined,
                                      label: 'Dicas de orçamento',
                                      onTap: () => _comingSoon(context),
                                    ),
                                  ],
                                ),
                                if (_showAiCard)
                                  Positioned(
                                    top: -22,
                                    left: cardWidth - 44,
                                    child: IgnorePointer(
                                      child: AnimatedOpacity(
                                        opacity: _aiCardDismissing ? 0 : 1,
                                        duration: const Duration(
                                          milliseconds: 200,
                                        ),
                                        child: Image.asset(
                                          'assets/images/new_badge.png',
                                          width: 84,
                                        ),
                                      ),
                                    ),
                                  ),
                              ],
                            );
                          },
                        ),
                      ],
                    ),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(
                    AppTheme.screenMargin,
                    0,
                    AppTheme.screenMargin,
                    20,
                  ),
                  child: Row(
                    children: [
                      Expanded(
                        child: AnimatedContainer(
                          key: _searchBarKey,
                          duration: const Duration(milliseconds: 250),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(999),
                            boxShadow: _searchHighlighted
                                ? [
                                    BoxShadow(
                                      color: AppColors.purple.withValues(
                                        alpha: 0.45,
                                      ),
                                      blurRadius: 16,
                                      spreadRadius: 1,
                                    ),
                                  ]
                                : [],
                          ),
                          child: TextField(
                            enabled: false,
                            decoration: InputDecoration(
                              hintText: _searchHighlighted
                                  ? 'Pergunta? Posso ajudar.'
                                  : 'Pergunta ou pesquisa qualquer coisa...',
                              hintStyle: TextStyle(
                                fontSize: 15,
                                fontWeight: _searchHighlighted
                                    ? FontWeight.w600
                                    : FontWeight.w400,
                                color: _searchHighlighted
                                    ? AppTheme.ink
                                    : AppTheme.inkMuted,
                              ),
                              fillColor: Colors.white,
                              border: OutlineInputBorder(
                                borderRadius: BorderRadius.circular(999),
                                borderSide: _searchHighlighted
                                    ? const BorderSide(
                                        color: AppColors.purple,
                                        width: 2,
                                      )
                                    : BorderSide.none,
                              ),
                              contentPadding: const EdgeInsets.symmetric(
                                horizontal: 20,
                                vertical: 14,
                              ),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(width: 10),
                      CircleIconButton(
                        icon: Icons.add,
                        size: 48,
                        background: AppTheme.ink,
                        foreground: Colors.white,
                        onTap: () => _comingSoon(context),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          if (_showExplanation)
            Positioned.fill(
              child: GestureDetector(
                behavior: HitTestBehavior.opaque,
                onTap: () {},
                child: Stack(
                  children: [
                    Positioned.fill(
                      child: CustomPaint(
                        painter: _SpotlightPainter(_searchBarRect),
                      ),
                    ),
                    if (_searchBarRect != null)
                      Positioned(
                        left: 20,
                        right: 20,
                        bottom:
                            MediaQuery.of(context).size.height -
                            _searchBarRect!.top +
                            16,
                        child: _ExplanationBubble(onOk: _dismissExplanation),
                      ),
                  ],
                ),
              ),
            ),
        ],
      ),
    );
  }
}

class _SpotlightPainter extends CustomPainter {
  final Rect? spotlightRect;

  const _SpotlightPainter(this.spotlightRect);

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()..addRect(Offset.zero & size);
    final rect = spotlightRect;
    if (rect != null) {
      path.addRRect(
        RRect.fromRectAndRadius(rect.inflate(8), const Radius.circular(999)),
      );
      path.fillType = PathFillType.evenOdd;
    }
    canvas.drawPath(
      path,
      Paint()..color = Colors.black.withValues(alpha: 0.72),
    );
  }

  @override
  bool shouldRepaint(covariant _SpotlightPainter oldDelegate) =>
      oldDelegate.spotlightRect != spotlightRect;
}

class _ExplanationBubble extends StatelessWidget {
  final VoidCallback onOk;

  const _ExplanationBubble({required this.onOk});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(20),
        boxShadow: AppTheme.cardShadow,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            'Escreve aqui a tua pergunta — sobre convidados, orçamento, '
            'parceiros ou o que precisares.',
            style: Theme.of(
              context,
            ).textTheme.bodyMedium?.copyWith(color: AppTheme.ink),
          ),
          const SizedBox(height: 14),
          SizedBox(
            width: double.infinity,
            child: ElevatedButton(
              onPressed: onOk,
              style: ElevatedButton.styleFrom(
                backgroundColor: AppColors.purple,
                minimumSize: const Size.fromHeight(46),
              ),
              child: const Text('OK!'),
            ),
          ),
        ],
      ),
    );
  }
}

class _OptionCard extends StatelessWidget {
  final Color color;
  final Color? iconBackground;
  final Color? iconColor;
  final IconData icon;
  final String label;
  final VoidCallback onTap;

  const _OptionCard({
    required this.color,
    this.iconBackground,
    this.iconColor,
    required this.icon,
    required this.label,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(
          color: color,
          borderRadius: BorderRadius.circular(24),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 36,
              height: 36,
              decoration: BoxDecoration(
                color: iconBackground ?? Colors.white,
                shape: BoxShape.circle,
              ),
              child: Icon(icon, size: 18, color: iconColor ?? AppTheme.ink),
            ),
            const Spacer(),
            Text(
              label,
              style: AppTypography.moduleTitle.copyWith(color: AppTheme.ink),
            ),
          ],
        ),
      ),
    );
  }
}
