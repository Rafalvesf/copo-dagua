import 'dart:async';
import 'dart:math' as math;
import 'dart:typed_data';

import 'package:copo_dagua_app/core/analytics/funnel.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/event/date_format_pt.dart';
import '../../../core/event/event_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/moderation/word_filter.dart';
import '../../../core/profile/username.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/hero_icons.dart';
import '../../../shared/widgets/estrela.dart';
import '../../../shared/widgets/flow_kit.dart';
import '../../../shared/widgets/line_icon.dart';
import '../../../shared/widgets/onb_kit.dart' show onbTypeIcons, showOnbDateSheet;
import '../../../shared/widgets/onboarding_exit.dart';
import '../../../shared/widgets/skeleton.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/step_slide.dart';
import '../../../shared/widgets/time_wheels.dart' show pickTimeWheel;
import '../../guest_home/screens/guest_mode_screen.dart' show showGuestModeSheet;
import '../../partner_onboarding/screens/partner_welcome_screen.dart';

/// Organizador depois de ter conta, e criar evento (pranchetas «Fluxo
/// novo», 2026-11-27):
///   1. «O teu perfil» (foto, nome, @, bio) — a conta por email é criada
///      aqui;
///   2. «Tudo pronto, Ana!» — «Começar» (Explorar, sem evento) ou «Criar o
///      meu evento»;
///   3. «Que evento vais criar?» num só ecrã (tipo, como vai ser, nome, dia
///      e hora);
///   4. «Evento feito!» — convidar (por link ou a pessoas da app) ou ver o painel.
/// Em `/novo-evento` ([newEvent]) abre logo no 3. As pessoas e o resto
/// pedem-se depois, no painel do evento.
enum _Stage { profile, ready, create, done }

/// «Como vai ser?» (`events.event_format`, migração 245).
const _formats = {'Comer fora': 'fora', 'Num espaço': 'espaco', 'Em casa': 'casa'};

/// Os sete tipos, em duas filas (4 + 3), como na prancheta.
const _typeRows = [
  [EventType.birthday, EventType.wedding, EventType.party, EventType.corporate],
  [EventType.baptism, EventType.newYear, EventType.other],
];

String _typeLabel(EventType t) => t == EventType.corporate ? 'Empresa' : t.label;

class OnboardingWizardScreen extends ConsumerStatefulWidget {
  /// Só para as capturas de ecrã (`?step=N`): 0 perfil, 1 pronto, 2 criar.
  final int initialStep;

  /// `true` = criar mais um evento (`/novo-evento`, o «+» de Meus eventos):
  /// abre logo no criar evento, sem permissões e sem marcar o onboarding.
  final bool newEvent;

  /// Tipo já escolhido (`?tipo=`).
  final String? initialType;

  /// Já preenchidos ao criar o plano a partir de um evento real
  /// (`?nome=&data=AAAA-MM-DD&local=`, 2026-11-23).
  final String? initialName;
  final String? initialDate;
  final String? initialLocation;

  const OnboardingWizardScreen({
    super.key,
    this.initialStep = 0,
    this.newEvent = false,
    this.initialType,
    this.initialName,
    this.initialDate,
    this.initialLocation,
  });

  @override
  ConsumerState<OnboardingWizardScreen> createState() => _OnboardingWizardScreenState();
}

class _OnboardingWizardScreenState extends ConsumerState<OnboardingWizardScreen> {
  late _Stage _stage = widget.newEvent
      ? _Stage.create
      : switch (widget.initialStep) {
          1 => _Stage.ready,
          2 => _Stage.create,
          _ => _Stage.profile,
        };
  bool _saving = false;

  // ---- O teu perfil ----
  final _fullName = TextEditingController();
  final _username = TextEditingController();
  final _bio = TextEditingController();
  XFile? _photo;
  Uint8List? _photoBytes;
  String? _usernameError;
  String? _usernameOk;
  String? _nameError;
  Timer? _usernameDebounce;

  // ---- Criar evento ----
  EventType? _type;
  final _otherLabel = TextEditingController();
  String? _format;
  final _name = TextEditingController();
  DateTime? _date;
  TimeOfDay? _time;
  String? _location;

  @override
  void initState() {
    super.initState();
    Funnel.track(widget.newEvent ? 'event_create_start' : 'onboarding_start');
    _type = EventType.values.where((e) => e.name == widget.initialType).firstOrNull;
    if (widget.initialName?.trim().isNotEmpty == true) _name.text = widget.initialName!.trim();
    final d = DateTime.tryParse(widget.initialDate ?? '');
    if (d != null) _date = d;
    if (widget.initialLocation?.trim().isNotEmpty == true) _location = widget.initialLocation!.trim();
    for (final c in [_fullName, _bio, _otherLabel, _name]) {
      c.addListener(() => setState(() {}));
    }
    if (!widget.newEvent) _prefillProfile();
  }

  /// Nome, @ e bio que a conta já tem (Apple/Google, ou depois de
  /// confirmar o email).
  Future<void> _prefillProfile() async {
    final profile = ref.read(authControllerProvider).profile;
    if (profile != null && _fullName.text.isEmpty) _fullName.text = profile.fullName.trim();
    if (ref.read(authControllerProvider.notifier).hasPendingSignup) return;
    final id = supabase.auth.currentUser?.id;
    if (id == null) return;
    try {
      final r = await supabase.rpc('my_username');
      final u = r is Map ? r['username'] as String? : null;
      if (u != null && u.isNotEmpty && mounted && _username.text.isEmpty) {
        _username.text = u;
        setState(() => _usernameOk = '@$u é teu');
      }
    } catch (_) {}
    try {
      final row = await supabase.from('profiles').select('bio').eq('id', id).maybeSingle();
      final bio = (row?['bio'] as String?)?.trim() ?? '';
      if (bio.isNotEmpty && mounted && _bio.text.isEmpty) _bio.text = bio;
    } catch (_) {}
  }

  @override
  void dispose() {
    _usernameDebounce?.cancel();
    for (final c in [_fullName, _username, _bio, _otherLabel, _name]) {
      c.dispose();
    }
    super.dispose();
  }

  void _go(_Stage s) => setState(() => _stage = s);

  String get _firstName {
    final n = _fullName.text.trim().isNotEmpty ? _fullName.text.trim() : (ref.read(authControllerProvider).profile?.fullName ?? '');
    return n.trim().split(' ').first;
  }

  // ---------------------------------------------------------------- perfil

  /// Verifica o @ enquanto se escreve (como no registo antigo).
  void _onUsernameChanged(String v) {
    _usernameDebounce?.cancel();
    final u = normalizeUsername(v);
    setState(() {
      _usernameOk = null;
      _usernameError = u.isEmpty ? null : usernameFormatError(u);
    });
    if (u.isEmpty || _usernameError != null) return;
    _usernameDebounce = Timer(const Duration(milliseconds: 450), () async {
      String? status;
      try {
        status = await usernameStatus(u);
      } catch (_) {}
      if (!mounted || normalizeUsername(_username.text) != u) return;
      setState(() {
        switch (status) {
          case 'taken':
            _usernameError = 'Esse @ já está ocupado.';
          case 'reserved':
            _usernameError = 'Esse @ não está disponível.';
          case 'invalid':
            _usernameError = usernameFormatError(u) ?? 'Esse @ não é válido.';
          case 'mine':
            _usernameOk = '@$u é teu';
          case 'ok':
            _usernameOk = '@$u está livre';
        }
      });
    });
  }

  /// A foto chega inteira (os seletores não reduzem); a versão leve faz-se
  /// ao subir, em `uploadImageBinary`.
  Future<void> _pickPhoto() async {
    try {
      final f = await ImagePicker().pickImage(source: ImageSource.gallery);
      if (f == null) return;
      final bytes = await f.readAsBytes();
      if (!mounted) return;
      setState(() {
        _photo = f;
        _photoBytes = bytes;
      });
    } catch (_) {}
  }

  bool get _profileReady =>
      _fullName.text.trim().isNotEmpty &&
      normalizeUsername(_username.text).isNotEmpty &&
      _usernameError == null &&
      WordFilter.allowed(_bio.text);

  Future<void> _saveProfile() async {
    final name = _fullName.text.trim();
    setState(() => _nameError = WordFilter.allowed(name) ? null : WordFilter.message);
    if (_nameError != null) return;
    setState(() => _saving = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      await ref.read(authControllerProvider.notifier).saveOrganizerProfile(
            fullName: name,
            username: _username.text,
            bio: _bio.text.trim().isEmpty ? null : _bio.text.trim(),
            avatar: _photo,
          );
      if (!mounted) return;
      setState(() => _saving = false);
      _go(_Stage.ready);
    } on UsernameError catch (e) {
      if (!mounted) return;
      setState(() {
        _saving = false;
        _usernameOk = null;
        _usernameError = switch (e.code) {
          'taken' => 'Esse @ já está ocupado.',
          'reserved' => 'Esse @ não está disponível.',
          'too_soon' => 'Só podes mudar o @ uma vez por mês.',
          _ => 'Esse @ não é válido.',
        };
      });
    } on SignupFailed catch (e) {
      if (!mounted) return;
      setState(() => _saving = false);
      messenger.showSnackBar(SnackBar(content: Text(e.message)));
    } catch (_) {
      if (!mounted) return;
      setState(() => _saving = false);
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta novamente.')));
    }
  }

  // ----------------------------------------------------------------- pronto

  /// «Começar»: a conta fica sem evento e entra no Explorar (o router segue
  /// o novo estado). Com [then], vai a seguir para essa página.
  Future<void> _explore({String? then}) async {
    setState(() => _saving = true);
    final router = GoRouter.of(context);
    final messenger = ScaffoldMessenger.of(context);
    try {
      await ref.read(authControllerProvider.notifier).skipEventCreation();
      if (then != null) router.go(then);
    } on SignupFailed catch (e) {
      messenger.showSnackBar(SnackBar(content: Text(e.message)));
    } catch (_) {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível continuar. Tenta novamente.')));
    }
    if (mounted) setState(() => _saving = false);
  }

  // ------------------------------------------------------------ criar evento

  EventType get _eventType => _type ?? EventType.other;

  String? get _otherError {
    if (_type != EventType.other) return null;
    if (_otherLabel.text.trim().length > 24) return 'No máximo 24 caracteres.';
    return WordFilter.allowed(_otherLabel.text) ? null : WordFilter.message;
  }

  String? get _nameFieldError {
    if (_name.text.trim().length > 40) return 'No máximo 40 caracteres.';
    return WordFilter.allowed(_name.text) ? null : WordFilter.message;
  }

  bool get _canCreate =>
      _type != null &&
      (_type != EventType.other || (_otherLabel.text.trim().isNotEmpty && _otherError == null)) &&
      _name.text.trim().isNotEmpty &&
      _nameFieldError == null;

  Future<void> _pickDate() async {
    final now = DateTime.now();
    final d = await showOnbDateSheet(
      context,
      initial: _date,
      first: DateTime(now.year, now.month, now.day),
      last: DateTime(now.year + 5, 12, 31),
    );
    if (d != null) setState(() => _date = d);
  }

  Future<void> _pickTime() async {
    final t = await pickTimeWheel(context,
        initial: _time ?? const TimeOfDay(hour: 20, minute: 0), title: 'A que horas começa?', label: 'COMEÇA ÀS');
    if (t != null) setState(() => _time = t);
  }

  void _useCode() {
    if (widget.newEvent) {
      showGuestModeSheet(context);
    } else {
      // Ainda no onboarding: entra sem evento e abre Meus eventos, onde
      // está «Recebeste um convite?».
      _explore(then: '/meus-eventos');
    }
  }

  void _closeCreate() {
    if (!widget.newEvent) return _go(_Stage.ready);
    context.canPop() ? context.pop() : context.go('/meus-eventos');
  }

  /// Cria o evento. Se já existir um (ex.: a app foi fechada a meio do
  /// onboarding), reaproveita-o em vez de criar outro.
  Future<void> _create() async {
    setState(() => _saving = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      final auth = ref.read(authControllerProvider.notifier);
      // Normalmente a conta já foi criada em «O teu perfil».
      if (auth.hasPendingSignup) {
        await auth.commitSignup();
        final id = ref.read(authControllerProvider).profile?.id;
        if (id != null && id.isNotEmpty) await ref.read(eventControllerProvider.notifier).load(id);
        if (!mounted) return;
      }
      final existing = widget.newEvent ? null : ref.read(eventControllerProvider).event;
      final event = existing ??
          await ref.read(eventControllerProvider.notifier).create(
                partnerName1: _name.text.trim(),
                eventDate: _date,
                location: _location,
                eventType: _eventType,
              );
      if (existing == null) {
        await ref.read(eventControllerProvider.notifier).saveOnboardingExtras(
              eventId: event.id,
              eventTypes: [_eventType],
              otherLabel: _eventType == EventType.other ? _otherLabel.text.trim() : null,
            );
        final t = _time;
        if (t != null) {
          String two(int v) => v.toString().padLeft(2, '0');
          try {
            // A hora de início (`events.ceremony_time`), como no painel.
            await supabase.from('events').update({'ceremony_time': '${two(t.hour)}:${two(t.minute)}'}).eq('id', event.id);
          } catch (_) {}
        }
        final f = _format;
        if (f != null) {
          try {
            // «Como vai ser?» (`events.event_format`, migração 245).
            await supabase.from('events').update({'event_format': _formats[f]!}).eq('id', event.id);
          } catch (_) {}
        }
        if (ref.read(authControllerProvider).profile?.role == UserRole.guest) {
          await auth.becomeOrganizer();
        }
      }
      if (!mounted) return;
      setState(() {
        _saving = false;
        _stage = _Stage.done;
      });
    } on SignupFailed catch (e) {
      if (!mounted) return;
      setState(() => _saving = false);
      messenger.showSnackBar(SnackBar(content: Text(e.message)));
    } catch (e) {
      if (!mounted) return;
      setState(() => _saving = false);
      messenger.showSnackBar(SnackBar(
        content: Text(WordFilter.serverMessage(e) ?? 'Não foi possível criar o ${_eventType.noun}. Tenta novamente.'),
      ));
    }
  }

  // ---------------------------------------------------------- evento feito

  /// Marca o onboarding como feito e segue para [route].
  Future<void> _finish(String route) async {
    if (widget.newEvent) {
      context.go(route);
      return;
    }
    setState(() => _saving = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      await ref.read(authControllerProvider.notifier).completeOnboarding();
    } catch (_) {
      if (mounted) setState(() => _saving = false);
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta de novo.')));
      return;
    }
    if (!mounted) return;
    context.go(route);
  }

  /// «Convidar» (pedido 2026-11-27): a página Convidar tem as duas formas,
  /// por link e a pessoas dentro da app (quem segues).
  Future<void> _shareInvite() => _finish('/guests/convidar');

  // ----------------------------------------------------------------- build

  @override
  Widget build(BuildContext context) {
    final profile = ref.watch(authControllerProvider).profile;
    if (profile == null) return const SkeletonPage(carousel: false);
    if (profile.role == UserRole.partner) return PartnerWelcomeScreen(initialStep: widget.initialStep);

    final Widget page = switch (_stage) {
      _Stage.profile => _profilePage(),
      _Stage.ready => _readyPage(),
      _Stage.create => _createPage(),
      _Stage.done => _donePage(),
    };
    return StepSlide(id: _stage, order: _stage.index, child: page);
  }

  Widget _profilePage() => FlowPage(
        key: const ValueKey('profile'),
        tint: FlowTint.yellow,
        dashOn: 2,
        trailingLabel: 'Voltar',
        onTrailing: () => exitOnboarding(context, ref),
        content: Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: [
          Center(child: _PhotoPicker(bytes: _photoBytes, onTap: _pickPhoto)),
          const SizedBox(height: 16),
          FlowBlock(
            label: 'Nome',
            child: FlowField(
              controller: _fullName,
              hint: 'Nome e apelido',
              error: _nameError,
              autofillHints: const [AutofillHints.name],
              onChanged: (_) {
                if (_nameError != null) setState(() => _nameError = null);
              },
            ),
          ),
          const SizedBox(height: 12),
          FlowBlock(
            label: 'Nome de utilizador',
            child: FlowField(
              controller: _username,
              prefix: '@',
              hint: 'ana.silva',
              error: _usernameError,
              okText: _usernameError == null ? _usernameOk : null,
              onChanged: _onUsernameChanged,
            ),
          ),
          const SizedBox(height: 12),
          FlowBlock(
            label: 'Bio (opcional)',
            child: FlowField(
              controller: _bio,
              hint: 'Uma frase sobre ti',
              error: WordFilter.allowed(_bio.text) ? null : WordFilter.message,
            ),
          ),
        ]),
        title: 'O teu perfil',
        cta: FlowCta(label: 'Continuar', loading: _saving, onPressed: _profileReady && !_saving ? _saveProfile : null),
      );

  Widget _readyPage() => FlowPage(
        key: const ValueKey('ready'),
        tint: FlowTint.green,
        dashOn: 2,
        centerContent: true,
        content: const FlowStarHalo(Estrela.feliz),
        title: _firstName.isEmpty ? 'Tudo pronto!' : 'Tudo pronto,\n$_firstName!',
        cta: FlowCta(label: 'Começar', loading: _saving, onPressed: _saving ? null : () => _explore()),
        footer: FlowFooterLink(
          prefix: 'Já tens um em mente?',
          action: 'Criar o meu evento',
          onTap: _saving ? null : () => _go(_Stage.create),
        ),
      );

  Widget _createPage() {
    final other = _type == EventType.other;
    return FlowPage(
      key: const ValueKey('create'),
      brand: 'Novo evento',
      tint: FlowTint.blue,
      dashCount: 2,
      dashOn: 0,
      trailingLabel: 'Fechar',
      onTrailing: _saving ? null : _closeCreate,
      content: Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: [
        FlowBlock(
          label: 'Tipo',
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            for (var r = 0; r < _typeRows.length; r++) ...[
              if (r > 0) const SizedBox(height: 8),
              Row(children: [
                for (var k = 0; k < _typeRows[r].length; k++) ...[
                  if (k > 0) const SizedBox(width: 8),
                  Expanded(
                    child: _TypeTile(
                      type: _typeRows[r][k],
                      selected: _type == _typeRows[r][k],
                      onTap: () => setState(() => _type = _typeRows[r][k]),
                    ),
                  ),
                ],
              ]),
            ],
            if (other) ...[
              const SizedBox(height: 8),
              FlowField(
                controller: _otherLabel,
                hint: 'Que evento é? Ex.: Despedida',
                autofocus: _otherLabel.text.isEmpty,
                error: _otherError,
              ),
            ],
          ]),
        ),
        const SizedBox(height: 12),
        FlowBlock(
          label: 'Como vai ser?',
          child: FlowPillGrid(
            items: _formats.keys.toList(),
            selected: {?_format},
            onTap: (v) => setState(() => _format = _format == v ? null : v),
          ),
        ),
        const SizedBox(height: 12),
        FlowBlock(
          label: 'Nome',
          child: FlowField(controller: _name, hint: 'Os 30 da Rita', error: _nameFieldError),
        ),
        const SizedBox(height: 12),
        FlowBlock(
          label: 'Quando',
          child: Row(children: [
            Expanded(
              child: _PickPill(
                icon: Hi.calendar,
                label: _date == null
                    ? 'Dia'
                    : '${formatShortDatePt(_date!).replaceFirstMapped(RegExp(r' [A-Z]\w+$'), (m) => m[0]!.toLowerCase())} ${_date!.year}',
                onTap: _pickDate,
              ),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: _PickPill(
                icon: Hi.clock,
                label: _time == null
                    ? 'Hora'
                    : '${_time!.hour.toString().padLeft(2, '0')}:${_time!.minute.toString().padLeft(2, '0')}',
                onTap: _pickTime,
              ),
            ),
          ]),
        ),
      ]),
      title: 'Que evento\nvais criar?',
      cta: FlowCta(label: 'Confirmar evento', loading: _saving, onPressed: _canCreate && !_saving ? _create : null),
      footer: FlowFooterLink(prefix: 'Recebeste um convite?', action: 'Usar código', onTap: _saving ? null : _useCode),
    );
  }

  Widget _donePage() => FlowPage(
        key: const ValueKey('done'),
      brand: 'Novo evento',
        tint: FlowTint.green,
        dashCount: 2,
        dashOn: 1,
        trailingLabel: 'Fechar',
        onTrailing: _saving ? null : () => _finish('/evento'),
        centerContent: true,
        content: const FlowStarHalo(Estrela.parabens),
        title: 'Evento feito!',
        cta: FlowCta(label: 'Convidar', loading: _saving, onPressed: _saving ? null : _shareInvite),
        footer: FlowFooterLink(prefix: 'Mais tarde?', action: 'Ver o painel', onTap: _saving ? null : () => _finish('/evento')),
      );
}

/// Mosaico do tipo (72, cantos 22, ícone 22 + nome 12); escolhido a preto.
class _TypeTile extends StatelessWidget {
  final EventType type;
  final bool selected;
  final VoidCallback onTap;
  const _TypeTile({required this.type, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final fg = selected ? Colors.white : AppTheme.ink;
    final icon = onbTypeIcons[type];
    return SnappyTap(
      onTap: onTap,
      semanticLabel: _typeLabel(type),
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 150),
        curve: Curves.easeOut,
        height: 72,
        padding: const EdgeInsets.symmetric(horizontal: 4),
        decoration: ShapeDecoration(
          color: selected ? AppTheme.ink : Colors.white,
          shape: RoundedSuperellipseBorder(borderRadius: BorderRadius.circular(22)),
        ),
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          if (icon != null) LineIcon(icon.$1, circles: icon.$2, size: 22, stroke: 1.8, color: fg),
          const SizedBox(height: 6),
          Text(_typeLabel(type),
              textAlign: TextAlign.center,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(fontSize: 12, height: 1.1, fontWeight: FontWeight.w700, color: fg)),
        ]),
      ),
    );
  }
}

/// Pílula branca 52 com ícone, texto e a seta («Dia», «Hora»).
class _PickPill extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback onTap;
  const _PickPill({required this.icon, required this.label, required this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        semanticLabel: label,
        child: Container(
          height: 52,
          padding: const EdgeInsets.fromLTRB(18, 0, 14, 0),
          decoration: const ShapeDecoration(color: Colors.white, shape: StadiumBorder()),
          child: Row(children: [
            Icon(icon, size: 18, color: AppTheme.ink),
            const SizedBox(width: 10),
            Expanded(
              child: Text(label,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ),
            const Icon(Hi.chevronRight, size: 16, color: AppTheme.ink),
          ]),
        ),
      );
}

/// Foto do perfil (opcional): círculo 104 tracejado com «Foto» e o «+»
/// preto 40; com foto, mostra-a.
class _PhotoPicker extends StatelessWidget {
  final Uint8List? bytes;
  final VoidCallback onTap;
  const _PhotoPicker({required this.bytes, required this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        semanticLabel: 'Escolher foto',
        child: SizedBox(
          width: 104,
          height: 104,
          child: Stack(children: [
            Positioned.fill(
              child: bytes != null
                  ? ClipOval(child: Image.memory(bytes!, fit: BoxFit.cover))
                  : CustomPaint(
                      painter: _DashedCircle(),
                      child: const DecoratedBox(
                        decoration: BoxDecoration(color: FlowTint.halo, shape: BoxShape.circle),
                        child: Center(
                          child: Text('Foto',
                              style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                        ),
                      ),
                    ),
            ),
            Positioned(
              right: 0,
              bottom: 0,
              child: Container(
                width: 40,
                height: 40,
                decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
                alignment: Alignment.center,
                child: Icon(bytes != null ? Hi.pencil : Hi.plus, size: 20, color: Colors.white),
              ),
            ),
          ]),
        ),
      );
}

class _DashedCircle extends CustomPainter {
  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = AppTheme.inkMuted
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5;
    final r = size.width / 2 - 0.75;
    final c = Offset(size.width / 2, size.height / 2);
    const dashes = 36;
    const sweep = 2 * math.pi / dashes;
    for (var i = 0; i < dashes; i++) {
      canvas.drawArc(Rect.fromCircle(center: c, radius: r), i * sweep, sweep * 0.55, false, paint);
    }
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => false;
}
