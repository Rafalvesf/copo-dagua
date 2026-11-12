import 'package:copo_dagua_app/core/analytics/funnel.dart';
import 'package:copo_dagua_app/shared/utils_clipboard.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:share_plus/share_plus.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/events/events_providers.dart' show organizerPaymentsReady, setEventMaxAttendees;
import '../../../core/models/models.dart';
import '../../../core/moderation/word_filter.dart';
import '../../../core/onboarding/intro_answers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/public_link.dart';
import '../../../shared/widgets/first_run_tour.dart' show TourRole;
import '../../../shared/widgets/line_icon.dart';
import '../../../shared/widgets/onb_kit.dart';
import '../../../shared/widgets/onboarding_exit.dart';
import '../../../shared/widgets/permissions_step.dart' show PermissionsStep;
import '../../../shared/widgets/snappy_tap.dart';
import '../../partner_onboarding/screens/partner_welcome_screen.dart';

/// Criar evento (mockup "Onboarding", 2026-11-12): uma ou duas perguntas
/// por ecrã, sem repetir o que já sabemos (nome e telemóvel da conta,
/// zona do início da app):
///   1. Que evento vais criar? (grelha; "Outro" → "Que evento é?", 24)
///   2. Como se chama? (até 40, com sugestões)
///   3. Quando e onde?
///   4. Quantas pessoas, no máximo? (= convidados previstos e limite)
///   ·  Quem pode ir? (só nos tipos que podem ser públicos)
///   5. Organizas com alguém?
/// e no fim "Parabéns! 🎉". Tudo se muda depois no evento.
enum _Step { type, name, when, people, access, organizer }

const _peopleChips = [30, 50, 80, 120, 200, 300];

/// Interesses do início da app → tipo pré-escolhido.
const _interestType = {
  'Casamento': EventType.wedding,
  'Aniversário': EventType.birthday,
  'Batizado': EventType.baptism,
  'Festa': EventType.party,
  'Evento de empresa': EventType.corporate,
  'Despedida': EventType.other,
  'Jantar': EventType.other,
  'Outro': EventType.other,
};

class OnboardingWizardScreen extends ConsumerStatefulWidget {
  /// Só para as capturas de ecrã (`?step=N`).
  final int initialStep;

  /// `true` = criar mais um evento a partir do separador Eventos
  /// (`/novo-evento`) — sem pergunta inicial, sem permissões e sem marcar
  /// o onboarding.
  final bool newEvent;

  /// Tipo já escolhido no cartão "O que vamos celebrar?" (`?tipo=`).
  final String? initialType;

  const OnboardingWizardScreen({super.key, this.initialStep = 0, this.newEvent = false, this.initialType});

  @override
  ConsumerState<OnboardingWizardScreen> createState() => _OnboardingWizardScreenState();
}

class _OnboardingWizardScreenState extends ConsumerState<OnboardingWizardScreen> {
  late int _index = widget.initialStep;
  bool _saving = false;
  Wedding? _createdWedding;
  bool _permsDone = false;
  late bool _startAnswered = widget.newEvent || widget.initialStep > 0;

  EventType? _type;
  final _otherLabel = TextEditingController();
  final _name = TextEditingController();
  bool _nameTouched = false;
  DateTime? _date;
  final _location = TextEditingController();
  int _people = 50;
  bool _isPublic = false;
  double? _price;
  bool _inviteOrganizer = false;

  @override
  void initState() {
    super.initState();
    Funnel.track(widget.newEvent ? 'event_create_start' : 'onboarding_start');
    _type = EventType.values.where((e) => e.name == widget.initialType).firstOrNull;
    if (_type == null) {
      for (final i in IntroAnswers.interests) {
        final t = _interestType[i];
        if (t != null) {
          _type = t;
          if (t == EventType.other && i != 'Outro') _otherLabel.text = i;
          break;
        }
      }
    }
    _type ??= EventType.wedding;
    _location.text = IntroAnswers.city;
    for (final c in [_otherLabel, _name, _location]) {
      c.addListener(() => setState(() {}));
    }
    if (_location.text.isEmpty) _loadCity();
  }

  /// Zona da conta (perfil) quando o início da app foi noutro aparelho.
  Future<void> _loadCity() async {
    final id = supabase.auth.currentUser?.id;
    if (id == null) return;
    try {
      final row = await supabase.from('profiles').select('city').eq('id', id).maybeSingle();
      final city = (row?['city'] as String?)?.trim() ?? '';
      if (city.isNotEmpty && mounted && _location.text.isEmpty) _location.text = city;
    } catch (_) {}
  }

  @override
  void dispose() {
    _otherLabel.dispose();
    _name.dispose();
    _location.dispose();
    super.dispose();
  }

  EventType get _eventType => _type ?? EventType.other;

  List<_Step> get _steps => [
        _Step.type,
        _Step.name,
        _Step.when,
        _Step.people,
        if (_eventType.canBePublic) _Step.access,
        _Step.organizer,
      ];

  _Step get _current => _steps[_index.clamp(0, _steps.length - 1)];

  // Percentagens do mockup: tipo 20 (30 com «Outro» escrito), nome 40,
  // quando 50, pessoas 60, quem pode ir 70, organizador 80, pronto 100.
  double get _progress => switch (_current) {
        _Step.type => _eventType == EventType.other && _otherLabel.text.trim().isNotEmpty ? 0.3 : 0.2,
        _Step.name => 0.4,
        _Step.when => 0.5,
        _Step.people => 0.6,
        _Step.access => 0.7,
        _Step.organizer => 0.8,
      };

  String _firstName(Profile p) => p.fullName.trim().split(' ').first;

  String get _typeText {
    if (_eventType == EventType.other && _otherLabel.text.trim().isNotEmpty) return _otherLabel.text.trim();
    return _eventType.label;
  }

  List<String> _nameSuggestions(Profile p) {
    final n = _firstName(p);
    final t = _typeText;
    final out = <String>[
      switch (_eventType) {
        EventType.wedding => 'O casamento do $n',
        EventType.birthday => 'Os anos do $n',
        _ => '$t do $n',
      },
      if (_eventType == EventType.wedding) '$n & …' else t,
      '$t ${(DateTime.now().year + (DateTime.now().month > 9 ? 1 : 0))}',
    ];
    return [for (final s in out) if (s.length <= 40 && !s.contains('…')) s];
  }

  String? get _otherError {
    if (_eventType != EventType.other) return null;
    return WordFilter.allowed(_otherLabel.text) ? null : WordFilter.message;
  }

  String? get _nameError => WordFilter.allowed(_name.text) ? null : WordFilter.message;

  bool get _canContinue => switch (_current) {
        _Step.type => _type != null &&
            (_eventType != EventType.other || (_otherLabel.text.trim().isNotEmpty && _otherError == null)),
        _Step.name => _name.text.trim().isNotEmpty && _nameError == null,
        _Step.when => WordFilter.allowed(_location.text),
        _ => true,
      };

  void _back() {
    if (_index > 0) {
      setState(() => _index--);
    } else if (widget.newEvent) {
      context.go('/eventos');
    } else {
      setState(() => _startAnswered = false);
    }
  }

  Future<void> _next(Profile profile) async {
    if (_current == _Step.type && !_nameTouched) {
      final s = _nameSuggestions(profile);
      if (s.isNotEmpty) _name.text = s.first;
    }
    if (_index < _steps.length - 1) {
      setState(() => _index++);
      return;
    }
    await _create(profile);
  }

  /// "Mais tarde": a conta fica criada sem evento e vai para Eventos.
  Future<void> _later() async {
    setState(() => _saving = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      await ref.read(authControllerProvider.notifier).skipEventCreation();
    } on SignupFailed catch (e) {
      messenger.showSnackBar(SnackBar(content: Text(e.message)));
    } catch (_) {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível continuar. Tenta novamente.')));
    }
    if (mounted) setState(() => _saving = false);
  }

  /// Cria o evento no fim das perguntas. Se já existir um (ex.: a app foi
  /// fechada no fim), reaproveita-o em vez de criar outro.
  Future<void> _create(Profile profile) async {
    setState(() => _saving = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      // A conta só é criada agora, mesmo antes do "Pronto".
      final auth = ref.read(authControllerProvider.notifier);
      if (auth.hasPendingSignup) {
        await auth.commitSignup();
        final id = ref.read(authControllerProvider).profile?.id;
        if (id != null && id.isNotEmpty) {
          await ref.read(weddingControllerProvider.notifier).load(id);
        }
        if (!mounted) return;
      }
      final existing = widget.newEvent ? null : ref.read(weddingControllerProvider).wedding;
      final wedding = existing ??
          await ref.read(weddingControllerProvider.notifier).create(
                // O nome do evento (até 40) é o nome que aparece em todo o lado.
                partnerName1: _name.text.trim(),
                weddingDate: _date,
                location: _location.text.trim().isEmpty ? null : _location.text.trim(),
                estimatedGuests: _people,
                eventType: _eventType,
              );
      if (existing == null) {
        await ref.read(weddingControllerProvider.notifier).saveOnboardingExtras(
              weddingId: wedding.id,
              eventTypes: [_eventType],
              otherLabel: _eventType == EventType.other ? _otherLabel.text.trim() : null,
            );
        // Público/privado e preço (141/142) — ignora em silêncio sem as colunas.
        try {
          final public = _isPublic && _eventType.canBePublic;
          await supabase.from('weddings').update({
            'is_public': public,
            'is_paid': public && (_price ?? 0) > 0,
            'entry_price': public && (_price ?? 0) > 0 ? _price : null,
          }).eq('id', wedding.id);
        } catch (_) {}
        // O máximo de pessoas é também o limite de entradas (182).
        try {
          await setEventMaxAttendees(wedding.id, _people);
        } catch (_) {}
        if (ref.read(authControllerProvider).profile?.role == UserRole.guest) {
          await ref.read(authControllerProvider.notifier).becomeOrganizer();
        }
      }
      if (!mounted) return;
      setState(() {
        _createdWedding = wedding;
        _saving = false;
      });
      if (_inviteOrganizer) _invite(wedding);
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

  /// Convidar outro organizador por link (079): menu de partilha; sem
  /// menu, copia o link.
  Future<void> _invite(Wedding wedding) async {
    final messenger = ScaffoldMessenger.of(context);
    String link;
    try {
      final token = await ref.read(weddingControllerProvider.notifier).createPartnerInviteToken(wedding.id);
      link = publicLink('/juntar/$token');
    } catch (_) {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível criar o link de convite.')));
      return;
    }
    var shared = false;
    try {
      final result = await SharePlus.instance.share(
        ShareParams(text: 'Junta-te a mim para organizarmos «${wedding.displayNames}» na app À Nossa!: $link'),
      );
      shared = result.status != ShareResultStatus.unavailable;
    } catch (_) {}
    if (!shared) {
      await copyText(link);
      messenger.showSnackBar(const SnackBar(content: Text('Link para organizar contigo copiado.')));
    }
  }

  Future<void> _pickDate() async {
    final now = DateTime.now();
    final d = await showDatePicker(
      context: context,
      initialDate: _date ?? now.add(const Duration(days: 180)),
      firstDate: DateTime(now.year, now.month, now.day),
      lastDate: DateTime(now.year + 5, 12, 31),
      locale: const Locale('pt', 'PT'),
    );
    if (d != null) setState(() => _date = d);
  }

  Future<void> _editText({
    required String title,
    required TextEditingController target,
    String? hint,
    TextInputType? keyboard,
  }) async {
    final c = TextEditingController(text: target.text);
    final v = await showDialog<String>(
      context: context,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setD) {
          final err = WordFilter.allowed(c.text) ? null : WordFilter.message;
          return AlertDialog(
            backgroundColor: AppTheme.background,
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(22)),
            title: Text(title, style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            content: OnbField(controller: c, hint: hint, autofocus: true, keyboardType: keyboard, error: err, onChanged: (_) => setD(() {})),
            actions: [
              TextButton(onPressed: () => Navigator.pop(ctx), child: const Text('Cancelar')),
              TextButton(onPressed: err == null ? () => Navigator.pop(ctx, c.text.trim()) : null, child: const Text('Guardar')),
            ],
          );
        },
      ),
    );
    if (v != null) setState(() => target.text = v);
  }

  Future<void> _editPrice() async {
    // Antes de pôr preço: ativar os pagamentos para receber o dinheiro
    // dos bilhetes (pedido 2026-11-12). Volta aqui depois.
    if (_price == null && !await organizerPaymentsReady()) {
      if (!mounted) return;
      // Conta ainda por criar (fica criada no fim): ativa-se depois.
      if (supabase.auth.currentUser == null || ref.read(authControllerProvider.notifier).hasPendingSignup) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
            content: Text('Para cobrar a entrada, ativa os pagamentos depois de criar o evento, em Acesso e entrada.')));
        return;
      }
      ScaffoldMessenger.of(context)
          .showSnackBar(const SnackBar(content: Text('Para cobrar a entrada, ativa primeiro os pagamentos.')));
      await context.push('/bilhetes/ativar');
      if (!mounted || !await organizerPaymentsReady()) return;
    }
    final c = TextEditingController(text: _price == null ? '' : _price!.toStringAsFixed(_price! % 1 == 0 ? 0 : 2));
    await _editText(title: 'Preço da entrada (€)', target: c, hint: 'Vazio = grátis', keyboard: const TextInputType.numberWithOptions(decimal: true));
    final v = double.tryParse(c.text.replaceAll('€', '').replaceAll(',', '.').trim());
    setState(() => _price = v == null || v <= 0 ? null : v);
  }

  @override
  Widget build(BuildContext context) {
    final profile = ref.watch(authControllerProvider).profile;
    if (profile == null) {
      return const Scaffold(backgroundColor: AppTheme.background, body: Center(child: CircularProgressIndicator()));
    }
    if (profile.role == UserRole.partner) return PartnerWelcomeScreen(initialStep: widget.initialStep);

    if (!_startAnswered) {
      return _StartChoice(
        name: _firstName(profile),
        saving: _saving,
        onNow: () => setState(() => _startAnswered = true),
        onLater: _later,
        onExit: () => exitOnboarding(context, ref),
      );
    }

    final created = _createdWedding;
    if (created != null && !_permsDone && !widget.newEvent) {
      return PermissionsStep(role: TourRole.organizer, onDone: () => setState(() => _permsDone = true));
    }
    if (created != null) {
      return _DoneView(
        name: created.displayNames,
        saving: _saving,
        onGuests: () => _finish('/guests'),
        onEvent: () => _finish('/wedding'),
      );
    }

    final kicker = '${_index + 1} de ${_steps.length}';
    final cta = OnbButton(
      label: _current == _Step.organizer ? 'Criar evento' : 'Continuar',
      loading: _saving,
      onPressed: _canContinue && !_saving ? () => _next(profile) : null,
    );

    switch (_current) {
      case _Step.type:
        final other = _eventType == EventType.other;
        return OnbStep(
          onBack: _back,
          progress: _progress,
          kicker: kicker,
          title: 'Que evento vais criar?',
          subtitle: other ? 'Escreve o que é, em poucas palavras.' : 'Já vem escolhido o que disseste no início.',
          bottom: cta,
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            OnbTypeGrid(selected: _type, onTap: (t) => setState(() => _type = t)),
            if (other) ...[
              const SizedBox(height: 12),
              Container(
                padding: const EdgeInsets.all(16),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(22),
                  boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
                ),
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  const Text('Que evento é?', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  const SizedBox(height: 12),
                  OnbField(
                    controller: _otherLabel,
                    hint: 'Ex.: Despedida de solteira',
                    maxLength: 24,
                    fill: AppTheme.background,
                    autofocus: _otherLabel.text.isEmpty,
                    error: _otherError,
                  ),
                  if (_otherError == null) ...[
                    const SizedBox(height: 12),
                    Wrap(spacing: 6, runSpacing: 6, children: [
                      for (final s in const ['Despedida', 'Jantar', 'Reunião de família', 'Workshop', 'Inauguração'])
                        SnappyTap(
                          onTap: () => _otherLabel.text = s,
                          child: Container(
                            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                            decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(999)),
                            child: Text(s, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3A3733))),
                          ),
                        ),
                    ]),
                  ],
                  const SizedBox(height: 12),
                  OnbMeta(_otherError == null
                      ? 'Escreve o que quiseres, até nomes. Aparece no Descobrir e nos convites. Máximo 24 caracteres.'
                      : 'Podes escrever o que quiseres, incluindo nomes de pessoas.'),
                ]),
              ),
            ],
          ]),
        );
      case _Step.name:
        final suggestions = _nameSuggestions(profile);
        return OnbStep(
          onBack: _back,
          progress: _progress,
          kicker: kicker,
          title: 'Como se chama?',
          subtitle: 'Escreve o que quiseres. É o nome que os convidados veem.',
          bottom: cta,
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            OnbField(
              controller: _name,
              label: 'Nome do evento',
              maxLength: 40,
              error: _nameError,
              onChanged: (_) => _nameTouched = true,
            ),
            if (suggestions.isNotEmpty) ...[
              const SizedBox(height: 20),
              const OnbGroupLabel('Sugestões'),
              const SizedBox(height: 8),
              OnbChips(
                items: suggestions,
                selected: {_name.text.trim()},
                onTap: (s) => setState(() {
                  _name.text = s;
                  _nameTouched = true;
                }),
              ),
            ],
          ]),
        );
      case _Step.when:
        final days = _date?.difference(DateTime.now()).inDays;
        return OnbStep(
          onBack: _back,
          progress: _progress,
          kicker: kicker,
          title: 'Quando e onde?',
          subtitle: 'Se ainda não sabes a data, avança.',
          skipLabel: 'Ainda não sei',
          onSkip: () => setState(() {
            _date = null;
            _index++;
          }),
          bottom: cta,
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            OnbRows(rows: [
              ('Data', _date == null ? 'Escolher' : '${formatShortDatePt(_date!).replaceFirstMapped(RegExp(r' [A-Z]\w+$'), (m) => m[0]!.toLowerCase())} ${_date!.year}', _pickDate),
              ('Onde', _location.text.trim().isEmpty ? 'Escolher' : _location.text.trim(),
                  () => _editText(title: 'Onde é?', target: _location, hint: 'Ex.: Lisboa')),
            ]),
            if (days != null && days >= 0) ...[
              const SizedBox(height: 12),
              Align(
                alignment: Alignment.centerLeft,
                child: Container(
                  padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                  decoration: BoxDecoration(color: const Color(0xFFE6EDE1), borderRadius: BorderRadius.circular(999)),
                  child: Text('Faltam ${days + 1} dias',
                      style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3F7A4F))),
                ),
              ),
            ],
            if (IntroAnswers.city.isNotEmpty) ...[const SizedBox(height: 12), const OnbMeta('A zona vem da tua conta.')],
          ]),
        );
      case _Step.people:
        return OnbStep(
          onBack: _back,
          progress: _progress,
          kicker: kicker,
          title: 'Quantas pessoas, no máximo?',
          subtitle: 'Uma estimativa chega.',
          bottom: cta,
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
              child: Row(children: [
                _RoundStep(
                  path: 'M5 12h14',
                  dark: false,
                  onTap: _people > 1 ? () => setState(() => _people = (_people - (_people > 20 ? 10 : 1)).clamp(1, 5000)) : null,
                ),
                Expanded(
                  child: Column(children: [
                    Text('$_people', style: const TextStyle(fontSize: 40, height: 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    const SizedBox(height: 2),
                    const Text('pessoas no máximo', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
                  ]),
                ),
                _RoundStep(
                  path: LineIcon.plus,
                  dark: true,
                  onTap: () => setState(() => _people = (_people + (_people >= 20 ? 10 : 1)).clamp(1, 5000)),
                ),
              ]),
            ),
            const SizedBox(height: 12),
            OnbChips(
              items: [for (final n in _peopleChips) n == 300 ? '300+' : '$n'],
              selected: {_people == 300 ? '300+' : '$_people'},
              onTap: (v) => setState(() => _people = int.parse(v.replaceAll('+', ''))),
            ),
            const SizedBox(height: 12),
            const OnbMeta('É o limite de convidados e de entradas. Não voltamos a perguntar. Podes mudar mais tarde.'),
          ]),
        );
      case _Step.access:
        return OnbStep(
          onBack: _back,
          progress: _progress,
          kicker: kicker,
          title: 'Quem pode ir?',
          subtitle: 'Só em festas, noites, concertos, festivais, empresas e «Outro».',
          bottom: cta,
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            OnbOption(
              title: 'Só convidados',
              subtitle: 'Entra quem tiver o teu link.',
              selected: !_isPublic,
              onTap: () => setState(() => _isPublic = false),
            ),
            const SizedBox(height: 12),
            OnbOption(
              title: 'Aberto a todos',
              subtitle: 'Aparece no Descobrir. Limite: as $_people pessoas que puseste.',
              selected: _isPublic,
              onTap: () => setState(() => _isPublic = true),
            ),
            if (_isPublic) ...[
              const SizedBox(height: 12),
              OnbRows(rows: [
                ('Entrada', _price == null ? 'Grátis' : '${_price!.toStringAsFixed(_price! % 1 == 0 ? 0 : 2)} €', _editPrice),
              ]),
              const SizedBox(height: 12),
              const OnbMeta('Podes pôr preço na entrada.'),
            ],
          ]),
        );
      case _Step.organizer:
        return OnbStep(
          onBack: _back,
          progress: _progress,
          kicker: kicker,
          title: 'Organizas com alguém?',
          subtitle: 'Partilham convidados, orçamento e conversas.',
          bottom: cta,
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
              child: Column(children: [
                Container(
                  constraints: const BoxConstraints(minHeight: 64),
                  decoration: const BoxDecoration(border: Border(bottom: BorderSide(color: Color(0xFFECE7DC)))),
                  child: Row(children: [
                    Container(
                      width: 44,
                      height: 44,
                      decoration: const BoxDecoration(color: Color(0xFFE7D9C3), shape: BoxShape.circle),
                      alignment: Alignment.center,
                      child: Text(_firstName(profile).isEmpty ? '?' : _firstName(profile)[0].toUpperCase(),
                          style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                    const SizedBox(width: 12),
                    Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text(_firstName(profile), style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      const Text('Tu', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
                    ]),
                  ]),
                ),
                SnappyTap(
                  onTap: () => setState(() => _inviteOrganizer = !_inviteOrganizer),
                  child: Container(
                    constraints: const BoxConstraints(minHeight: 64),
                    child: Row(children: [
                      Container(
                        width: 44,
                        height: 44,
                        decoration: BoxDecoration(
                            color: _inviteOrganizer ? const Color(0xFF4F6B4A) : AppTheme.ink, shape: BoxShape.circle),
                        alignment: Alignment.center,
                        child: LineIcon(_inviteOrganizer ? LineIcon.check : LineIcon.plus, size: 20, color: Colors.white),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                          const Text('Adicionar organizador',
                              style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          Text(
                            _inviteOrganizer
                                ? 'Ao criar, abrimos o link para lhe enviares.'
                                : 'O teu par, família ou wedding planner. Recebe um link.',
                            style: const TextStyle(fontSize: 13, height: 1.35, fontWeight: FontWeight.w600, color: AppTheme.inkMuted),
                          ),
                        ]),
                      ),
                    ]),
                  ),
                ),
              ]),
            ),
            const SizedBox(height: 12),
            const OnbMeta('Também podes fazer isto depois, nas definições do evento.'),
          ]),
        );
    }
  }
}

/// Botão redondo 44 do contador de pessoas (− contorno, + preto).
class _RoundStep extends StatelessWidget {
  final String path;
  final bool dark;
  final VoidCallback? onTap;
  const _RoundStep({required this.path, required this.dark, this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Opacity(
          opacity: onTap == null ? 0.35 : 1,
          child: Container(
            width: 44,
            height: 44,
            decoration: BoxDecoration(
              color: dark ? AppTheme.ink : Colors.white,
              shape: BoxShape.circle,
              border: dark ? null : Border.all(color: AppTheme.ink, width: 1.5),
            ),
            alignment: Alignment.center,
            child: LineIcon(path, size: 20, color: dark ? Colors.white : AppTheme.ink),
          ),
        ),
      );
}

/// Criar já ou mais tarde (a conta "Utilizador" não tem de criar logo
/// um evento).
class _StartChoice extends StatelessWidget {
  final String name;
  final bool saving;
  final VoidCallback onNow;
  final VoidCallback onLater;
  final VoidCallback onExit;

  const _StartChoice({required this.name, required this.saving, required this.onNow, required this.onLater, required this.onExit});

  @override
  Widget build(BuildContext context) {
    return OnbStep(
      onBack: onExit,
      progress: 0.2,
      title: 'Olá, $name! Queres criar um evento já?',
      subtitle: 'Podes criar agora ou entrar primeiro e ver os eventos públicos. Crias um evento quando quiseres no separador Eventos.',
      bottom: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        OnbButton(label: 'Criar um evento agora', onPressed: saving ? null : onNow),
        const SizedBox(height: 10),
        OnbButton(label: 'Mais tarde', secondary: true, loading: saving, onPressed: onLater),
      ]),
      child: const SizedBox.shrink(),
    );
  }
}

/// "Parabéns! 🎉" (mockup Pronto).
class _DoneView extends StatelessWidget {
  final String name;
  final bool saving;
  final VoidCallback onGuests;
  final VoidCallback onEvent;
  const _DoneView({required this.name, required this.saving, required this.onGuests, required this.onEvent});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: AppTheme.background,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 24),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            const SizedBox(height: 44, child: OnbProgress(value: 1)),
            Expanded(
              child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                const Text('Parabéns! 🎉',
                    textAlign: TextAlign.center,
                    style: TextStyle(fontSize: 35, height: 1.15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 16),
                Text('$name está criado. Agora é convidar.',
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 14, height: 1.45, fontWeight: FontWeight.w600, color: AppTheme.inkMuted)),
              ]),
            ),
            OnbButton(label: 'Adicionar convidados', loading: saving, onPressed: onGuests),
            const SizedBox(height: 10),
            OnbButton(label: 'Ver o evento', secondary: true, onPressed: saving ? null : onEvent),
          ]),
        ),
      ),
    );
  }
}
