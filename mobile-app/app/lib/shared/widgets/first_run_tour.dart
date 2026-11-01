import 'dart:async';
import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../core/feedback/app_feedback.dart';
import '../../core/notifications/push.dart';
import '../../core/supabase/supabase_config.dart';
import '../../core/theme/app_theme.dart';
import 'brinde_gate.dart';

/// Guia da primeira entrada (aprovado 2026-10-25, canvas "Guia de
/// primeira entrada"): boas-vindas, 4 passos com foco num separador da
/// barra de baixo (ou no sino) e um passo final com atalhos. Um por perfil
/// (organizador, parceiro, convidado), uma vez por conta neste dispositivo.
/// Pode ser revisto em Definições → "Ver o guia da app".
enum TourRole { organizer, partner, guest }

/// Pontos que o guia destaca (a barra de baixo, o sino). Guarda o último
/// `BuildContext` montado com cada id — sem GlobalKey, porque durante as
/// transições há duas barras no ecrã ao mesmo tempo.
class TourAnchor extends StatefulWidget {
  final String id;
  final Widget child;
  const TourAnchor({super.key, required this.id, required this.child});

  static final Map<String, BuildContext> _contexts = {};

  static Rect? rectOf(String id) {
    final ctx = _contexts[id];
    if (ctx == null || !ctx.mounted) return null;
    final box = ctx.findRenderObject();
    if (box is! RenderBox || !box.hasSize || !box.attached) return null;
    return box.localToGlobal(Offset.zero) & box.size;
  }

  @override
  State<TourAnchor> createState() => _TourAnchorState();
}

class _TourAnchorState extends State<TourAnchor> {
  @override
  Widget build(BuildContext context) {
    TourAnchor._contexts[widget.id] = context;
    return widget.child;
  }

  @override
  void dispose() {
    if (identical(TourAnchor._contexts[widget.id], context)) {
      TourAnchor._contexts.remove(widget.id);
    }
    super.dispose();
  }
}

/// Envolve a barra de baixo de cada perfil: regista-a como ponto do guia
/// e, na primeira vez, abre o guia.
class TourHost extends ConsumerStatefulWidget {
  final TourRole role;
  final String? guestWeddingId;
  final Widget child;
  const TourHost({super.key, required this.role, this.guestWeddingId, required this.child});

  @override
  ConsumerState<TourHost> createState() => _TourHostState();
}

class _TourHostState extends ConsumerState<TourHost> {
  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      if (mounted) FirstRunTour.maybeShow(context, widget.role, guestWeddingId: widget.guestWeddingId);
      // Pop-up de classificação (só depois de alguns dias de uso).
      if (mounted) RatingPrompt.maybeAsk(context, ref);
    });
  }

  @override
  Widget build(BuildContext context) => TourAnchor(id: 'nav', child: widget.child);
}

class FirstRunTour {
  static bool _running = false;
  static final Set<TourRole> _checked = {};

  /// Pedido em Definições: mostra outra vez na próxima barra que aparecer.
  static bool _replay = false;

  static String _key(TourRole role, String uid) => 'first_tour_v1_${role.name}_$uid';

  static Future<void> maybeShow(BuildContext context, TourRole role, {String? guestWeddingId}) async {
    if (_running) return;
    final uid = supabase.auth.currentUser?.id;
    if (uid == null) return;
    final replay = _replay;
    if (!replay) {
      if (_checked.contains(role)) return;
      _checked.add(role);
      try {
        final prefs = await SharedPreferences.getInstance();
        if (prefs.getBool(_key(role, uid)) == true) return;
      } catch (_) {
        return;
      }
    }
    _replay = false;
    _running = true;
    try {
      // Espera pelo brinde/animação de entrada.
      await Future<void>.delayed(const Duration(milliseconds: 1200));
      for (var i = 0; i < 20 && BrindeGate.pending; i++) {
        await Future<void>.delayed(const Duration(milliseconds: 500));
      }
      if (!context.mounted) return;
      await showGeneralDialog<void>(
        context: context,
        barrierDismissible: false,
        barrierColor: Colors.transparent,
        transitionDuration: const Duration(milliseconds: 220),
        pageBuilder: (ctx, _, __) => _TourOverlay(role: role, guestWeddingId: guestWeddingId),
        transitionBuilder: (ctx, anim, _, child) => FadeTransition(opacity: anim, child: child),
      );
      try {
        final prefs = await SharedPreferences.getInstance();
        await prefs.setBool(_key(role, uid), true);
      } catch (_) {}
    } finally {
      _running = false;
    }
  }

  /// "Ver o guia da app" (Definições): volta ao início do perfil e mostra.
  static void replay(BuildContext context, TourRole role) {
    _replay = true;
    context.go(switch (role) {
      TourRole.organizer => '/home',
      TourRole.partner => '/partner-home',
      TourRole.guest => '/guest-home',
    });
    // Se a barra já estava montada (o ecrã inicial não foi recriado), abre
    // a partir dela.
    Future<void>.delayed(const Duration(milliseconds: 700), () {
      final ctx = TourAnchor._contexts['nav'];
      if (_replay && ctx != null && ctx.mounted) maybeShow(ctx, role);
    });
  }
}

class _Step {
  final String title;
  final String body;
  final int? navIndex; // separador da barra de baixo (0–3)
  final String? anchor; // ou outro ponto (ex.: 'bell')
  const _Step(this.title, this.body, {this.navIndex, this.anchor});
}

class _Copy {
  final String welcomeTitle;
  final String welcomeBody;
  final List<_Step> steps;
  final String notifSub;
  final String second;
  final String secondSub;
  final String secondCta;
  final IconData secondIcon;
  final String finalCta;
  const _Copy({
    required this.welcomeTitle,
    required this.welcomeBody,
    required this.steps,
    required this.notifSub,
    required this.second,
    required this.secondSub,
    required this.secondCta,
    required this.secondIcon,
    required this.finalCta,
  });
}

const _copy = {
  TourRole.organizer: _Copy(
    welcomeTitle: 'Bem-vindos à À Nossa!',
    welcomeBody: 'Em menos de um minuto mostramos onde está tudo para organizarem o vosso evento.',
    steps: [
      _Step('Encontra parceiros', 'Espaços, catering, fotografia e muito mais. Pede orçamento e recebe propostas aqui.', navIndex: 0),
      _Step('O vosso evento', 'Convidados, mesas, orçamento e programa do dia, tudo num só sítio.', navIndex: 1),
      _Step('Conversas', 'Fala com os parceiros e cria grupos com a equipa e os convidados.', navIndex: 2),
      _Step('Tarefas e notificações', 'Dizemos-vos o que fazer a seguir: propostas para rever, pagamentos e lembretes.', anchor: 'bell', navIndex: 3),
    ],
    notifSub: 'Mensagens e pagamentos com a app fechada',
    second: 'Convidar quem organiza contigo',
    secondSub: 'Partilhem tarefas, convidados e orçamento',
    secondCta: 'Convidar',
    secondIcon: Icons.person_add_alt_outlined,
    finalCta: 'Começar a organizar',
  ),
  TourRole.partner: _Copy(
    welcomeTitle: 'Bem-vindo à À Nossa!',
    welcomeBody: 'Mostramos em menos de um minuto como recebes pedidos, envias propostas e recebes pagamentos.',
    steps: [
      _Step('O teu painel', 'Vendas, reservas, calendário e atalhos para tudo o que é do teu negócio.', navIndex: 0),
      _Step('Pedidos e propostas', 'Os pedidos de orçamento chegam aqui. Responde com uma proposta e o organizador aceita na app.', navIndex: 1),
      _Step('Mensagens', 'Fala com os organizadores antes e depois de te contratarem.', navIndex: 2),
      _Step('Perfil e pagamentos', 'Fotos, serviços e preços. Ativa os pagamentos para receberes os sinais diretamente.', navIndex: 3),
    ],
    notifSub: 'Novos pedidos e pagamentos com a app fechada',
    second: 'Ativar pagamentos',
    secondSub: 'Sem isto não podes receber sinais',
    secondCta: 'Ativar',
    secondIcon: Icons.account_balance_wallet_outlined,
    finalCta: 'Ir para o painel',
  ),
  TourRole.guest: _Copy(
    welcomeTitle: 'Que bom ter-te aqui!',
    welcomeBody: 'Mostramos em menos de um minuto onde vês o programa, a tua mesa e as fotos.',
    steps: [
      _Step('O evento', 'Programa, local, a tua mesa e a confirmação de presença.', navIndex: 0),
      _Step('Galeria', 'Partilha fotos do dia e vê as dos outros convidados.', navIndex: 1),
      _Step('Presentes', 'A lista de presentes e as ofertas preparadas pelos anfitriões.', navIndex: 2),
      _Step('O teu perfil', 'Acompanhantes, menu e as tuas preferências.', navIndex: 3),
    ],
    notifSub: 'Novidades do evento e mensagens',
    second: 'Confirmar presença',
    secondSub: 'Os anfitriões agradecem saber cedo',
    secondCta: 'Confirmar',
    secondIcon: Icons.check_rounded,
    finalCta: 'Ver o evento',
  ),
};

class _TourOverlay extends StatefulWidget {
  final TourRole role;
  final String? guestWeddingId;
  const _TourOverlay({required this.role, this.guestWeddingId});

  @override
  State<_TourOverlay> createState() => _TourOverlayState();
}

class _TourOverlayState extends State<_TourOverlay> {
  int _step = 0; // 0 = boas-vindas, 1–4 = passos, 5 = pronto
  PushStatus _push = PushNotifications.status();
  bool _enabling = false;

  _Copy get _c => _copy[widget.role]!;

  void _close() => Navigator.of(context).pop();

  /// Círculo de foco do passo atual (coordenadas do ecrã), ou null.
  ({Offset center, double radius})? _spot(Size screen, EdgeInsets pad) {
    if (_step < 1 || _step > 4) return null;
    final s = _c.steps[_step - 1];
    if (s.anchor != null) {
      final r = TourAnchor.rectOf(s.anchor!);
      if (r != null) return (center: r.center, radius: math.max(r.width, r.height) / 2 + 6);
    }
    if (s.navIndex != null) {
      final r = TourAnchor.rectOf('nav');
      if (r == null) return null;
      // A ilha da barra: margem 16 dos lados e 26 (ou a área segura) em
      // baixo; dentro, 8 de margem e 4 separadores com a mesma largura.
      final left = r.left + 16 + 8;
      final width = r.width - 32 - 16;
      final bottom = r.bottom - math.max(pad.bottom, 26);
      final x = left + width * (s.navIndex! + 0.5) / 4;
      return (center: Offset(x, bottom - 32), radius: 32);
    }
    return null;
  }

  Future<void> _enablePush() async {
    setState(() => _enabling = true);
    PushStatus s;
    try {
      s = await PushNotifications.enable();
    } catch (_) {
      s = PushNotifications.status();
    }
    if (!mounted) return;
    setState(() {
      _push = s;
      _enabling = false;
    });
  }

  void _second() {
    final router = GoRouter.of(context);
    _close();
    switch (widget.role) {
      case TourRole.organizer:
        router.push('/settings');
      case TourRole.partner:
        router.push('/partner-payments/setup');
      case TourRole.guest:
        final id = widget.guestWeddingId;
        router.go(id == null ? '/guest-profile' : '/guest-profile/$id');
    }
  }

  @override
  Widget build(BuildContext context) {
    final mq = MediaQuery.of(context);
    final spot = _spot(mq.size, mq.padding);
    return Material(
      type: MaterialType.transparency,
      child: Stack(
        children: [
          Positioned.fill(
            child: CustomPaint(painter: _DimPainter(spot?.center, spot?.radius)),
          ),
          if (_step == 0) _bottomCard(_welcome()),
          if (_step >= 1 && _step <= 4) _tipCard(spot, mq),
          if (_step == 5) _bottomCard(_done()),
        ],
      ),
    );
  }

  Widget _bottomCard(Widget child) => Positioned(
        left: 0,
        right: 0,
        bottom: 0,
        child: SafeArea(
          top: false,
          minimum: const EdgeInsets.all(16),
          child: Center(child: _card(child)),
        ),
      );

  Widget _card(Widget child) => ConstrainedBox(
        constraints: const BoxConstraints(maxWidth: 440),
        child: Container(
          padding: const EdgeInsets.fromLTRB(22, 22, 22, 18),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(26),
            boxShadow: const [BoxShadow(color: Color(0x2E171713), blurRadius: 40, offset: Offset(0, 16))],
          ),
          child: child,
        ),
      );

  Widget _tipCard(({Offset center, double radius})? spot, MediaQueryData mq) {
    final s = _c.steps[_step - 1];
    final card = _card(Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text('PASSO $_step DE 4',
            style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.accentOliveDark)),
        const SizedBox(height: 8),
        Text(s.title, style: const TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 6),
        Text(s.body, style: const TextStyle(fontSize: AppFontSize.base, color: AppTheme.inkMuted, height: 1.45)),
        const SizedBox(height: 12),
        Row(children: [
          for (var i = 0; i < 6; i++)
            AnimatedContainer(
              duration: const Duration(milliseconds: 200),
              margin: const EdgeInsets.only(right: 6),
              width: i == _step ? 18 : 6,
              height: 6,
              decoration: BoxDecoration(
                color: i == _step ? AppTheme.accentOliveDark : AppTheme.borderMuted,
                borderRadius: BorderRadius.circular(3),
              ),
            ),
          const Spacer(),
          TextButton(
            onPressed: () => setState(() => _step = 5),
            style: TextButton.styleFrom(foregroundColor: AppTheme.inkMuted),
            child: const Text('Saltar'),
          ),
          const SizedBox(width: 4),
          FilledButton(
            onPressed: () => setState(() => _step++),
            style: FilledButton.styleFrom(backgroundColor: AppTheme.accentOliveDark, shape: const StadiumBorder()),
            child: const Text('Seguinte'),
          ),
        ]),
      ],
    ));
    if (spot == null) {
      return Positioned.fill(child: Center(child: Padding(padding: const EdgeInsets.all(16), child: card)));
    }
    final above = spot.center.dy > mq.size.height / 2;
    return Positioned(
      left: 16,
      right: 16,
      top: above ? null : spot.center.dy + spot.radius + 16,
      bottom: above ? mq.size.height - (spot.center.dy - spot.radius - 16) : null,
      child: Center(child: card),
    );
  }

  Widget _welcome() => Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Container(
            width: 52,
            height: 52,
            decoration: BoxDecoration(color: AppTheme.accentTint, shape: BoxShape.circle),
            child: Icon(Icons.celebration_outlined, color: AppTheme.accentOliveDark),
          ),
          const SizedBox(height: 14),
          Text(_c.welcomeTitle, style: const TextStyle(fontSize: AppFontSize.xl + 4, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 8),
          Text(_c.welcomeBody, style: const TextStyle(fontSize: AppFontSize.base, color: AppTheme.inkMuted, height: 1.45)),
          const SizedBox(height: 18),
          Row(children: [
            Expanded(
              child: TextButton(
                onPressed: _close,
                style: TextButton.styleFrom(
                  minimumSize: const Size.fromHeight(50),
                  backgroundColor: AppTheme.surface,
                  foregroundColor: AppTheme.ink,
                  shape: const StadiumBorder(),
                ),
                child: const Text('Saltar'),
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: FilledButton(
                onPressed: () => setState(() => _step = 1),
                style: FilledButton.styleFrom(
                  minimumSize: const Size.fromHeight(50),
                  backgroundColor: AppTheme.accentOliveDark,
                  shape: const StadiumBorder(),
                ),
                child: const Text('Começar'),
              ),
            ),
          ]),
        ],
      );

  Widget _done() {
    final showPush = _push != PushStatus.unsupported;
    final pushOn = _push == PushStatus.enabled;
    final pushLabel = switch (_push) {
      PushStatus.enabled => 'Ativas',
      PushStatus.denied => 'Bloqueadas',
      PushStatus.iosInstall => 'Instalar',
      _ => _enabling ? 'A ativar…' : 'Ativar',
    };
    return Column(
      mainAxisSize: MainAxisSize.min,
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const Text('Está tudo pronto', style: TextStyle(fontSize: AppFontSize.xl + 2, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 6),
        const Text('Dois passos rápidos para não perder nada:',
            style: TextStyle(fontSize: AppFontSize.base, color: AppTheme.inkMuted, height: 1.45)),
        const SizedBox(height: 14),
        if (showPush) ...[
          _actionRow(
            icon: Icons.notifications_active_outlined,
            title: 'Ativar notificações',
            sub: _push == PushStatus.iosInstall
                ? 'No iPhone, adiciona a app ao ecrã principal primeiro'
                : _c.notifSub,
            cta: pushLabel,
            filled: !pushOn,
            onTap: _push == PushStatus.notAsked && !_enabling ? _enablePush : null,
          ),
          const SizedBox(height: 10),
        ],
        _actionRow(
          icon: _c.secondIcon,
          title: _c.second,
          sub: _c.secondSub,
          cta: _c.secondCta,
          filled: false,
          onTap: _second,
        ),
        const SizedBox(height: 16),
        FilledButton(
          onPressed: _close,
          style: FilledButton.styleFrom(
            minimumSize: const Size.fromHeight(50),
            backgroundColor: AppTheme.accentOliveDark,
            shape: const StadiumBorder(),
          ),
          child: Text(_c.finalCta),
        ),
      ],
    );
  }

  Widget _actionRow({
    required IconData icon,
    required String title,
    required String sub,
    required String cta,
    required bool filled,
    required VoidCallback? onTap,
  }) {
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(18)),
      child: Row(children: [
        Container(
          width: 40,
          height: 40,
          decoration: BoxDecoration(color: AppTheme.accentTint, shape: BoxShape.circle),
          child: Icon(icon, size: 20, color: AppTheme.accentOliveDark),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base, color: AppTheme.ink)),
            const SizedBox(height: 2),
            Text(sub, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.3)),
          ]),
        ),
        const SizedBox(width: 8),
        FilledButton(
          onPressed: onTap,
          style: FilledButton.styleFrom(
            backgroundColor: filled ? AppTheme.accentOliveDark : Colors.white,
            foregroundColor: filled ? Colors.white : AppTheme.accentOliveDark,
            disabledBackgroundColor: AppTheme.accentTint,
            disabledForegroundColor: AppTheme.accentOliveDark,
            shape: const StadiumBorder(),
            padding: const EdgeInsets.symmetric(horizontal: 14),
            minimumSize: const Size(0, 38),
          ),
          child: Text(cta),
        ),
      ]),
    );
  }
}

class _DimPainter extends CustomPainter {
  final Offset? center;
  final double? radius;
  _DimPainter(this.center, this.radius);

  @override
  void paint(Canvas canvas, Size size) {
    final path = Path()..addRect(Offset.zero & size);
    if (center != null && radius != null) {
      path
        ..addOval(Rect.fromCircle(center: center!, radius: radius!))
        ..fillType = PathFillType.evenOdd;
    }
    canvas.drawPath(path, Paint()..color = const Color(0x94171713));
    if (center != null && radius != null) {
      canvas.drawCircle(
        center!,
        radius! + 2,
        Paint()
          ..style = PaintingStyle.stroke
          ..strokeWidth = 4
          ..color = Colors.white.withValues(alpha: 0.9),
      );
    }
  }

  @override
  bool shouldRepaint(_DimPainter old) => old.center != center || old.radius != radius;
}
