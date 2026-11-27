import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:copo_dagua_app/core/analytics/funnel.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/onboarding/intro_answers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/estrela.dart';
import '../../../shared/widgets/flow_kit.dart';
import '../../../shared/widgets/step_slide.dart';
import 'start_flow_screen.dart';
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
    // Topo das boas-vindas (fundo verde suave): a barra fica desta cor
    // quando a abertura a soltar, em vez de branca.
    setRouteBarColor(ModalRoute.of(context), FlowTint.green);
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
          // Sem confetis na página verde de início (pedido 2026-11-26).
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

/// Boas-vindas 1 a 3 (pranchetas «Fluxo novo», 2026-11-27): três cartões
/// com a estrela, só na primeira abertura sem conta neste aparelho
/// ([IntroAnswers.introSeen]). «Saltar» e «Começar» levam ao papel, que
/// aparece aqui mesmo; «Entrar» vai ao login. Das vezes seguintes, o
/// `/welcome` mostra logo o papel.
class _WelcomeContent extends StatefulWidget {
  const _WelcomeContent();

  @override
  State<_WelcomeContent> createState() => _WelcomeContentState();
}

class _WelcomeContentState extends State<_WelcomeContent> {
  bool? _showIntro;
  int _page = 0;

  static const _cards = [
    (FlowTint.green, Estrela.feliz, 'Organiza\nsem stress', 'Continuar'),
    (Colors.white, Estrela.piscar, 'Convida\nnum toque', 'Continuar'),
    (FlowTint.terra, Estrela.feliz, 'Tens um\nnegócio?', 'Começar'),
  ];

  @override
  void initState() {
    super.initState();
    IntroAnswers.introSeen().then((seen) {
      if (mounted) setState(() => _showIntro = !seen);
    });
  }

  void _toRoles() {
    IntroAnswers.markIntroSeen();
    setState(() => _showIntro = false);
  }

  void _login() {
    IntroAnswers.markIntroSeen();
    context.push('/login');
  }

  @override
  Widget build(BuildContext context) {
    final intro = _showIntro;
    if (intro == null) return const ColoredBox(color: FlowTint.green, child: SizedBox.expand());
    if (!intro) return const StartFlowBody();
    final c = _cards[_page];
    return StepSlide(
      id: _page,
      order: _page,
      child: FlowPage(
        key: ValueKey('intro$_page'),
        tint: c.$1,
        dashOn: _page,
        trailingLabel: 'Saltar',
        onTrailing: _toRoles,
        centerContent: true,
        content: FlowStarHalo(c.$2),
        title: c.$3,
        cta: FlowCta(label: c.$4, onPressed: () => _page < _cards.length - 1 ? setState(() => _page++) : _toRoles()),
        footer: FlowFooterLink(prefix: 'Já tens conta?', action: 'Entrar', onTap: _login),
      ),
    );
  }
}
