import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:copo_dagua_app/core/analytics/funnel.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/mascot.dart' show ConfettiBurst;
import '../../../shared/widgets/onb_kit.dart';
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

class _WelcomeScreenState extends State<WelcomeScreen> with TickerProviderStateMixin {
  late final AnimationController _splash = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 5000),
  );
  late final SteadyDriver _driver;

  /// Na web, a primeira abertura é feita pela própria página
  /// (`web/index.html`, igual ao canvas "Início 1"), que corre mesmo
  /// enquanto a app ainda carrega. As vezes seguintes faz-se aqui.
  static bool _webOpeningDone = false;
  bool _showSplash = true;
  bool _burst = false;
  bool _started = false;
  bool _barGreen = false;
  Size _size = Size.zero;

  /// Ao terminar sessão: despedida em vez de "A preparar o brinde…".
  bool _farewell = false;
  String? _farewellName;

  @override
  void initState() {
    super.initState();
    Funnel.track('welcome_view');
    if (TchinSplash.farewellPending) {
      TchinSplash.farewellPending = false;
      _farewell = true;
      _farewellName = TchinSplash.farewellName;
    }
    _driver = SteadyDriver(this, _splash);
    // Só marca como vista quando a abertura chega ao fim — se o ecrã for
    // recriado a meio do arranque (ex.: o router volta a montar a página
    // quando a sessão é verificada), a abertura recomeça em vez de
    // desaparecer (bug 2026-10-17: "boas-vindas sem animação").
    _splash.addListener(() {
      if (!_burst && _splash.value >= 0.78) setState(() => _burst = true);
      // A barra do topo fica verde enquanto o círculo verde cobre o topo
      // do ecrã e muda no instante em que o deixa de cobrir.
      final green = TchinSplash.coversTop(_splash.value, _size);
      if (green != _barGreen) {
        _barGreen = green;
        if (green) {
          lockBarColor(TchinSplash.eucalyptus);
        } else {
          unlockBarColor();
        }
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
    // Topo das boas-vindas (gradiente claro): a barra fica desta cor
    // quando a abertura a soltar, em vez de branca.
    setRouteBarColor(ModalRoute.of(context), const Color(0xFFE9D8C4));
    // Pedido do utilizador (2026-10-17): a abertura acontece sempre,
    // todas as vezes — mesmo com "reduzir movimento" ligado no telemóvel.
    if (_showSplash && _splash.value == 0 && !_started) {
      _started = true;
      if (kIsWeb && !_webOpeningDone && !_farewell) {
        _webOpeningDone = true;
        _showSplash = false;
        return;
      }
      _barGreen = true;
      lockBarColor(TchinSplash.eucalyptus);
      _driver.start();
    }
  }

  @override
  void dispose() {
    // Se a página sair a meio da abertura (ex.: a sessão é reposta e o
    // router muda de página), a barra não pode ficar presa ao verde.
    if (_barGreen) unlockBarColor();
    _driver.dispose();
    _splash.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    _size = MediaQuery.sizeOf(context);
    return Scaffold(
      backgroundColor: AppTheme.background,
      body: Stack(
        children: [
          const _WelcomeContent(),
          if (_burst) const Positioned.fill(child: ConfettiBurst(origin: Offset(0.5, 0.45), count: 32)),
          if (_showSplash)
            Positioned.fill(
              child: AnimatedBuilder(
                animation: _splash,
                builder: (context, _) => IgnorePointer(ignoring: _splash.value >= 0.78, child: _farewell
                    ? TchinSplash(
                        t: _splash.value,
                        farewell: true,
                        greeting: _farewellName == null || _farewellName!.isEmpty ? 'Até já!' : 'Até já, $_farewellName!',
                        tagline: 'Sessão terminada. Até à próxima festa.',
                      )
                    : TchinSplash(t: _splash.value)),
              ),
            ),
        ],
      ),
    );
  }
}

/// Início (mockup "Onboarding · 1 Início", 2026-11-12): imagem de fundo
/// em cima, título e os botões "Começar" e "Já tenho conta". A barra de
/// progresso começa em 20%.
class _WelcomeContent extends StatelessWidget {
  const _WelcomeContent();

  @override
  Widget build(BuildContext context) {
    final top = MediaQuery.of(context).padding.top;
    final h = MediaQuery.sizeOf(context).height;
    return Stack(children: [
      // Fotografia de fundo (por enquanto o tom quente do mockup, até
      // haver foto) que se funde com o fundo da página.
      Positioned(
        left: 0,
        right: 0,
        top: 0,
        height: h * 0.71,
        child: const DecoratedBox(
          decoration: BoxDecoration(
            gradient: RadialGradient(
              center: Alignment(-0.4, -0.6),
              radius: 1.2,
              colors: [Color(0xFFE9D8C4), Color(0xFFCDB79C), Color(0xFF9C8468), Color(0xFF6E5C49)],
              stops: [0, 0.38, 0.7, 1],
            ),
          ),
        ),
      ),
      Positioned(
        left: 0,
        right: 0,
        top: 0,
        height: h * 0.71,
        child: const DecoratedBox(
          decoration: BoxDecoration(
            gradient: LinearGradient(
              begin: Alignment.topCenter,
              end: Alignment.bottomCenter,
              colors: [Color(0x00F2F0EB), AppTheme.background],
              stops: [0.45, 1],
            ),
          ),
        ),
      ),
      SafeArea(
        child: Padding(
          padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, top > 0 ? 12 : 24, AppTheme.screenMargin, 24),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            const SizedBox(height: 44, child: OnbProgress(value: 0.2, labelColor: Colors.white)),
            const Spacer(),
            const Text('À Nossa!',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 8),
            const Text('Organiza, convida e celebra.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 28, height: 1.15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 8),
            const Text('Casamentos, aniversários e festas, com os convidados e os parceiros no mesmo sítio.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 14, height: 1.45, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
            const SizedBox(height: 28),
            OnbButton(label: 'Começar', onPressed: () => context.push('/comecar')),
            const SizedBox(height: 10),
            OnbButton(label: 'Já tenho conta', secondary: true, onPressed: () => context.push('/login')),
          ]),
        ),
      ),
    ]);
  }
}
