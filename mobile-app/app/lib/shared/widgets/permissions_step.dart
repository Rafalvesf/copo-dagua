import 'package:flutter/material.dart';
import 'package:geolocator/geolocator.dart';

import '../../core/notifications/push.dart';
import '../../core/permissions/camera_stub.dart' if (dart.library.js_interop) '../../core/permissions/camera_web.dart' as cam;
import '../../core/theme/app_theme.dart';
import 'first_run_tour.dart' show TourRole;
import 'island_sheet.dart';

/// Último passo de todos os registos, antes do ecrã de sucesso
/// (aprovado 2026-10-25, canvas "Permissões"): notificações, localização
/// e câmara, cada uma com "Permitir", mais "Permitir tudo e continuar".
/// O que o dispositivo não suporta não aparece.
class PermissionsStep extends StatefulWidget {
  final TourRole role;
  final VoidCallback onDone;
  const PermissionsStep({super.key, required this.role, required this.onDone});

  @override
  State<PermissionsStep> createState() => _PermissionsStepState();
}

/// Permissões que a app pede (registo e, separadamente, quando são
/// precisas outra vez — [ensurePermission]).
enum AppPermission { notifications, location, camera }

typedef _Perm = AppPermission;

enum _State { ask, granted, denied, unsupported }

class _PermissionsStepState extends State<PermissionsStep> {
  final Map<_Perm, _State> _state = {
    _Perm.notifications: _State.ask,
    _Perm.location: _State.ask,
    _Perm.camera: _State.ask,
  };
  final Set<_Perm> _busy = {};
  bool _all = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    for (final p in _Perm.values) {
      _state[p] = await _statusOf(p);
    }
    if (mounted) setState(() {});
  }

  Future<void> _request(_Perm p) async {
    if (_state[p] != _State.ask) return;
    setState(() => _busy.add(p));
    final result = await _requestPerm(p);
    if (!mounted) return;
    setState(() {
      _state[p] = result;
      _busy.remove(p);
    });
  }

  List<_Perm> get _order => switch (widget.role) {
        TourRole.guest => const [_Perm.notifications, _Perm.camera, _Perm.location],
        _ => const [_Perm.notifications, _Perm.location, _Perm.camera],
      };

  bool get _allAnswered => _order.every((p) => _state[p] != _State.ask);

  Future<void> _allowAll() async {
    if (_allAnswered) {
      widget.onDone();
      return;
    }
    setState(() => _all = true);
    // Notificações primeiro: o browser só as pede logo a seguir a um toque.
    for (final p in _order) {
      await _request(p);
    }
    if (!mounted) return;
    setState(() => _all = false);
    widget.onDone();
  }

  ({String kicker, String intro, Map<_Perm, String> subs}) get _copy => switch (widget.role) {
        TourRole.organizer => (
            kicker: 'Organizador',
            intro: 'Três permissões para a app trabalhar por ti. Podes mudar quando quiseres nas definições.',
            subs: {
              _Perm.notifications: 'Propostas, mensagens e pagamentos, mesmo com a app fechada',
              _Perm.location: 'Parceiros perto do local do evento',
              _Perm.camera: 'Foto do evento e fotos para a galeria',
            },
          ),
        TourRole.partner => (
            kicker: 'Parceiro',
            intro: 'Para receberes pedidos a tempo e mostrares o teu trabalho. Podes mudar quando quiseres nas definições.',
            subs: {
              _Perm.notifications: 'Novos pedidos, mensagens e pagamentos recebidos',
              _Perm.location: 'A morada do teu negócio e a distância aos eventos',
              _Perm.camera: 'Portefólio, capa e logótipo',
            },
          ),
        TourRole.guest => (
            kicker: 'Convidado',
            intro: 'Para não perderes nada do grande dia. Podes mudar quando quiseres nas definições.',
            subs: {
              _Perm.notifications: 'Novidades do evento e mensagens dos anfitriões',
              _Perm.location: 'Como chegar ao local no dia',
              _Perm.camera: 'Partilhar fotos na galeria do evento',
            },
          ),
      };

  static const _titles = {
    _Perm.notifications: 'Notificações',
    _Perm.location: 'Localização',
    _Perm.camera: 'Câmara e fotos',
  };

  @override
  Widget build(BuildContext context) {
    final c = _copy;
    final visible = _order.where((p) => _state[p] != _State.unsupported).toList();
    final accent = AppTheme.accentOliveDark;
    return Scaffold(
      backgroundColor: Colors.white,
      body: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Container(
            height: 260 + MediaQuery.of(context).padding.top,
            decoration: BoxDecoration(
              color: accent,
              borderRadius: const BorderRadius.vertical(bottom: Radius.circular(40)),
            ),
            padding: const EdgeInsets.only(bottom: 30),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.end,
              children: [
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  crossAxisAlignment: CrossAxisAlignment.end,
                  children: [
                    _HeroIcon(icon: Icons.notifications_none_rounded, big: false, turn: -0.02),
                    const SizedBox(width: 14),
                    _HeroIcon(
                      icon: widget.role == TourRole.guest ? Icons.photo_camera_outlined : Icons.location_on_outlined,
                      big: true,
                      accent: accent,
                    ),
                    const SizedBox(width: 14),
                    _HeroIcon(
                      icon: widget.role == TourRole.guest ? Icons.location_on_outlined : Icons.photo_camera_outlined,
                      big: false,
                      turn: 0.02,
                    ),
                  ],
                ),
                const SizedBox(height: 16),
                Text(
                  c.kicker.toUpperCase(),
                  style: TextStyle(
                    fontSize: AppFontSize.sm,
                    fontWeight: FontWeight.w700,
                    letterSpacing: 1.2,
                    color: Colors.white.withValues(alpha: 0.85),
                  ),
                ),
              ],
            ),
          ),
          Expanded(
            child: SafeArea(
              top: false,
              child: Center(
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxWidth: 520),
                  child: ListView(
                    padding: const EdgeInsets.fromLTRB(24, 26, 24, 16),
                    children: [
                      const Text(
                        'Um último passo',
                        style: TextStyle(fontSize: AppFontSize.h2 + 2, fontWeight: FontWeight.w700, color: AppTheme.ink),
                      ),
                      const SizedBox(height: 8),
                      Text(c.intro, style: const TextStyle(fontSize: AppFontSize.base + 1, color: AppTheme.inkMuted, height: 1.45)),
                      const SizedBox(height: 18),
                      for (final p in visible) ...[
                        _PermRow(
                          title: _titles[p]!,
                          sub: c.subs[p]!,
                          state: _state[p]!,
                          busy: _busy.contains(p),
                          onTap: () => _request(p),
                        ),
                        const SizedBox(height: 10),
                      ],
                    ],
                  ),
                ),
              ),
            ),
          ),
          SafeArea(
            top: false,
            minimum: const EdgeInsets.fromLTRB(24, 0, 24, 16),
            child: Center(
              child: ConstrainedBox(
                constraints: const BoxConstraints(maxWidth: 472),
                child: Column(
                  mainAxisSize: MainAxisSize.min,
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    FilledButton(
                      onPressed: _all ? null : _allowAll,
                      style: FilledButton.styleFrom(
                        minimumSize: const Size.fromHeight(52),
                        backgroundColor: accent,
                        shape: const StadiumBorder(),
                      ),
                      child: Text(_all ? 'A pedir…' : (_allAnswered ? 'Continuar' : 'Permitir tudo e continuar')),
                    ),
                    const SizedBox(height: 4),
                    TextButton(
                      onPressed: _all ? null : widget.onDone,
                      style: TextButton.styleFrom(foregroundColor: AppTheme.inkMuted, minimumSize: const Size.fromHeight(44)),
                      child: const Text('Agora não'),
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _HeroIcon extends StatelessWidget {
  final IconData icon;
  final bool big;
  final double turn;
  final Color? accent;
  const _HeroIcon({required this.icon, required this.big, this.turn = 0, this.accent});

  @override
  Widget build(BuildContext context) {
    final size = big ? 80.0 : 64.0;
    return RotationTransition(
      turns: AlwaysStoppedAnimation(turn),
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          color: big ? Colors.white : Colors.white.withValues(alpha: 0.14),
          borderRadius: BorderRadius.circular(big ? 26 : 22),
        ),
        child: Icon(icon, size: big ? 34 : 28, color: big ? accent : Colors.white),
      ),
    );
  }
}

class _PermRow extends StatelessWidget {
  final String title;
  final String sub;
  final _State state;
  final bool busy;
  final VoidCallback onTap;
  const _PermRow({required this.title, required this.sub, required this.state, required this.busy, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final (label, filled) = switch (state) {
      _State.granted => ('Permitido', false),
      _State.denied => ('Bloqueado', false),
      _ => (busy ? 'A pedir…' : 'Permitir', true),
    };
    return Container(
      padding: const EdgeInsets.fromLTRB(14, 12, 12, 12),
      decoration: BoxDecoration(
        border: Border.all(color: AppTheme.borderMuted),
        borderRadius: BorderRadius.circular(18),
      ),
      child: Row(children: [
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base + 1, color: AppTheme.ink)),
            const SizedBox(height: 2),
            Text(
              state == _State.denied ? 'Podes permitir nas definições do browser ou do telemóvel' : sub,
              style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted, height: 1.35),
            ),
          ]),
        ),
        const SizedBox(width: 10),
        FilledButton(
          onPressed: filled && !busy ? onTap : null,
          style: FilledButton.styleFrom(
            backgroundColor: AppTheme.accentOliveDark,
            foregroundColor: Colors.white,
            disabledBackgroundColor: state == _State.granted ? AppTheme.accentTint : AppTheme.surface,
            disabledForegroundColor: state == _State.granted ? AppTheme.accentOliveDark : AppTheme.inkMuted,
            shape: const StadiumBorder(),
            minimumSize: const Size(92, 38),
            padding: const EdgeInsets.symmetric(horizontal: 14),
          ),
          child: Text(label),
        ),
      ]),
    );
  }
}


Future<_State> _statusOf(AppPermission p) async {
  switch (p) {
    case AppPermission.notifications:
      return switch (PushNotifications.status()) {
        PushStatus.enabled => _State.granted,
        PushStatus.denied => _State.denied,
        PushStatus.unsupported || PushStatus.iosInstall => _State.unsupported,
        PushStatus.notAsked => _State.ask,
      };
    case AppPermission.location:
      try {
        return switch (await Geolocator.checkPermission()) {
          LocationPermission.always || LocationPermission.whileInUse => _State.granted,
          LocationPermission.deniedForever => _State.denied,
          LocationPermission.unableToDetermine || LocationPermission.denied => _State.ask,
        };
      } catch (_) {
        return _State.unsupported;
      }
    case AppPermission.camera:
      return switch (await cam.cameraStatus()) {
        'granted' => _State.granted,
        'denied' => _State.denied,
        'unsupported' => _State.unsupported,
        _ => _State.ask,
      };
  }
}

Future<_State> _requestPerm(AppPermission p) async {
  try {
    switch (p) {
      case AppPermission.notifications:
        final s = await PushNotifications.enable();
        return s == PushStatus.enabled ? _State.granted : (s == PushStatus.denied ? _State.denied : _State.ask);
      case AppPermission.location:
        final l = await Geolocator.requestPermission();
        return (l == LocationPermission.always || l == LocationPermission.whileInUse) ? _State.granted : _State.denied;
      case AppPermission.camera:
        final c = await cam.cameraRequest();
        return c == 'granted' ? _State.granted : (c == 'unsupported' ? _State.unsupported : _State.denied);
    }
  } catch (_) {
    return _State.denied;
  }
}

/// Pede UMA permissão outra vez, quando é precisa (2026-10-25): ex. tirar
/// uma foto sem câmara autorizada, usar a localização, ativar avisos.
/// Já autorizada (ou sem suporte neste dispositivo): devolve `true` sem
/// mostrar nada. Bloqueada: explica como desbloquear e devolve `false`.
Future<bool> ensurePermission(BuildContext context, AppPermission p, {String? reason}) async {
  final st = await _statusOf(p);
  if (st == _State.granted || st == _State.unsupported) return true;
  if (!context.mounted) return false;
  final ok = await showIslandSheet<bool>(
    context: context,
    builder: (ctx) => _SinglePermissionSheet(permission: p, blocked: st == _State.denied, reason: reason),
  );
  return ok == true;
}

class _SinglePermissionSheet extends StatefulWidget {
  final AppPermission permission;
  final bool blocked;
  final String? reason;
  const _SinglePermissionSheet({required this.permission, required this.blocked, this.reason});

  @override
  State<_SinglePermissionSheet> createState() => _SinglePermissionSheetState();
}

class _SinglePermissionSheetState extends State<_SinglePermissionSheet> {
  bool _busy = false;
  late bool _blocked = widget.blocked;

  ({IconData icon, String title, String body}) get _copy => switch (widget.permission) {
        AppPermission.notifications => (
            icon: Icons.notifications_none_rounded,
            title: 'Ativar notificações',
            body: 'Para receberes mensagens, propostas e pagamentos mesmo com a app fechada.',
          ),
        AppPermission.location => (
            icon: Icons.location_on_outlined,
            title: 'Usar a localização',
            body: 'Para encontrarmos a morada e as distâncias certas sem teres de escrever.',
          ),
        AppPermission.camera => (
            icon: Icons.photo_camera_outlined,
            title: 'Usar a câmara',
            body: 'Para tirares fotos diretamente na app.',
          ),
      };

  Future<void> _allow() async {
    setState(() => _busy = true);
    final r = await _requestPerm(widget.permission);
    if (!mounted) return;
    if (r == _State.granted || r == _State.unsupported) {
      Navigator.of(context).pop(true);
      return;
    }
    setState(() {
      _busy = false;
      _blocked = r == _State.denied;
    });
  }

  @override
  Widget build(BuildContext context) {
    final c = _copy;
    final accent = AppTheme.accentOliveDark;
    return Padding(
      padding: const EdgeInsets.fromLTRB(22, 14, 22, 20),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Center(
            child: Container(
              width: 40,
              height: 4,
              decoration: BoxDecoration(color: AppTheme.borderMuted, borderRadius: BorderRadius.circular(2)),
            ),
          ),
          const SizedBox(height: 18),
          Center(
            child: Container(
              width: 72,
              height: 72,
              decoration: BoxDecoration(color: accent, borderRadius: BorderRadius.circular(24)),
              child: Icon(c.icon, size: 32, color: Colors.white),
            ),
          ),
          const SizedBox(height: 16),
          Text(
            _blocked ? '${c.title}: bloqueado' : c.title,
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: AppFontSize.h3, fontWeight: FontWeight.w700, color: AppTheme.ink),
          ),
          const SizedBox(height: 8),
          Text(
            _blocked
                ? 'Esta permissão foi recusada antes. Para a ativar, abre as definições do site no browser (o cadeado ao lado do endereço) ou do telemóvel e permite-a.'
                : (widget.reason ?? c.body),
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: AppFontSize.base, color: AppTheme.inkMuted, height: 1.45),
          ),
          const SizedBox(height: 20),
          if (!_blocked)
            FilledButton(
              onPressed: _busy ? null : _allow,
              style: FilledButton.styleFrom(minimumSize: const Size.fromHeight(50), backgroundColor: accent, shape: const StadiumBorder()),
              child: Text(_busy ? 'A pedir…' : 'Permitir'),
            ),
          const SizedBox(height: 6),
          TextButton(
            onPressed: () => Navigator.of(context).pop(false),
            style: TextButton.styleFrom(foregroundColor: AppTheme.inkMuted, minimumSize: const Size.fromHeight(44)),
            child: Text(_blocked ? 'Fechar' : 'Agora não'),
          ),
        ],
      ),
    );
  }
}
