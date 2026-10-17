import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/auth_ui.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/theme_color/theme_color.dart';
import '../../../shared/widgets/tchin_splash.dart';

/// Início da app (canvas "Início 1 · Abertura" + "Início 2 · Boas-vindas").
///
/// Na primeira abertura da sessão mostra a abertura verde: as duas
/// palavras "Tchin" entram dos lados e brindam, depois o verde fecha num
/// círculo até ao centro e rebenta em confetti, revelando as boas-vindas.
class WelcomeScreen extends StatefulWidget {
  const WelcomeScreen({super.key});

  @override
  State<WelcomeScreen> createState() => _WelcomeScreenState();
}

class _WelcomeScreenState extends State<WelcomeScreen> with SingleTickerProviderStateMixin {
  late final AnimationController _splash = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 5000),
  );
  bool _showSplash = true;
  bool _burst = false;
  bool _barGreen = false;

  @override
  void initState() {
    super.initState();
    // Só marca como vista quando a abertura chega ao fim — se o ecrã for
    // recriado a meio do arranque (ex.: o router volta a montar a página
    // quando a sessão é verificada), a abertura recomeça em vez de
    // desaparecer (bug 2026-10-17: "boas-vindas sem animação").
    _splash.addListener(() {
      if (!_burst && _splash.value >= 0.78) setState(() => _burst = true);
      // A barra do topo fica verde enquanto o verde cobre o topo do ecrã.
      final green = _splash.value < 0.7;
      if (green != _barGreen) {
        _barGreen = green;
        setBarColor(green ? AppTheme.accentOliveDark : const Color(0xFFFFFFFF));
      }
    });
    _splash.addStatusListener((s) {
      if (s == AnimationStatus.completed) {
        if (mounted) setState(() => _showSplash = false);
      }
    });
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    // Pedido do utilizador (2026-10-17): a abertura acontece sempre,
    // todas as vezes — mesmo com "reduzir movimento" ligado no telemóvel.
    if (_showSplash && !_splash.isAnimating && _splash.value == 0) {
      // A página web já mostrou as palavras a brindar enquanto a app
      // carregava (`web/index.html`) — continua a partir do brinde.
      _barGreen = true;
      setBarColor(AppTheme.accentOliveDark);
      _splash.forward(from: 0.32);
    }
  }

  @override
  void dispose() {
    _splash.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          const _WelcomeContent(),
          if (_burst) const Positioned.fill(child: ConfettiBurst(origin: Offset(0.5, 0.45), count: 32)),
          if (_showSplash)
            Positioned.fill(
              child: AnimatedBuilder(
                animation: _splash,
                builder: (context, _) => IgnorePointer(ignoring: _splash.value >= 0.78, child: TchinSplash(t: _splash.value)),
              ),
            ),
        ],
      ),
    );
  }
}

class _WelcomeContent extends StatelessWidget {
  const _WelcomeContent();

  @override
  Widget build(BuildContext context) {
    final top = MediaQuery.of(context).padding.top;
    return CustomScrollView(
      slivers: [
        SliverFillRemaining(
          hasScrollBody: false,
          child: Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Container(
          height: 318 + top,
          padding: EdgeInsets.only(top: top + 24),
          decoration: const BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment(-0.6, -1),
              end: Alignment(0.6, 1),
              colors: [Color(0xFFDDE5D3), Color(0xFFF7EACA), Color(0xFFF3DEE0)],
              stops: [0, 0.55, 1],
            ),
          ),
          alignment: Alignment.center,
          child: const TchinMascot(pose: MascotPose.wave, width: 230),
        ),
        Expanded(
          child: SafeArea(
            top: false,
            child: Padding(
              padding: const EdgeInsets.fromLTRB(28, 26, 28, 24),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text(
                    'O teu evento, num só lugar',
                    style: TextStyle(
                      fontSize: AppFontSize.h1,
                      height: 34 / 28,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.ink,
                    ),
                  ),
                  const SizedBox(height: 8),
                  const Text(
                    'Casamentos, batizados, aniversários e mais. Convidados, orçamento, parceiros e fotos — tudo junto.',
                    style: TextStyle(
                      fontSize: AppFontSize.base + 1,
                      height: 22 / 15,
                      fontWeight: FontWeight.w300,
                      color: AppTheme.inkMuted,
                    ),
                  ),
                  const SizedBox(height: 22),
                  const _Feature(
                    icon: Icons.groups_2_outlined,
                    title: 'Convidados e lugares',
                    subtitle: 'Confirmações, menus e mesas',
                  ),
                  const SizedBox(height: 14),
                  const _Feature(
                    icon: Icons.storefront_outlined,
                    title: 'Parceiros de confiança',
                    subtitle: 'Pede orçamentos e reserva',
                  ),
                  const Spacer(),
                  AuthPrimaryButton(label: 'Criar conta', onPressed: () => context.push('/role')),
                  const SizedBox(height: 10),
                  SizedBox(
                    height: 54,
                    child: OutlinedButton(
                      onPressed: () => context.push('/login'),
                      style: OutlinedButton.styleFrom(
                        backgroundColor: Colors.white,
                        foregroundColor: AppTheme.accentOliveDark,
                        side: const BorderSide(color: AppTheme.accentOliveDark, width: 1.5),
                        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                        textStyle: const TextStyle(
                          fontFamily: AppTheme.fontFamily,
                          fontFamilyFallback: AppTheme.fontFamilyFallback,
                          fontSize: 16,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                      child: const Text('Já tenho conta'),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ],
          ),
        ),
      ],
    );
  }
}

class _Feature extends StatelessWidget {
  final IconData icon;
  final String title;
  final String subtitle;
  const _Feature({required this.icon, required this.title, required this.subtitle});

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Container(
          width: 44,
          height: 44,
          decoration: BoxDecoration(color: const Color(0xFFEEF2E9), borderRadius: BorderRadius.circular(14)),
          child: Icon(icon, color: AppTheme.accentOliveDark, size: 20),
        ),
        const SizedBox(width: 14),
        Expanded(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(title, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 2),
              Text(subtitle, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
            ],
          ),
        ),
      ],
    );
  }
}
