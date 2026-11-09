import 'package:copo_dagua_app/shared/utils_clipboard.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:go_router/go_router.dart';

import '../../../core/events/tickets.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/invite/public_invite.dart';
import '../../../core/models/models.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/pastel_colors.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/cards.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/install_app_sheet.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/navigation_sheet.dart';
import '../../../shared/widgets/public_state.dart';
import '../../../shared/widgets/venue_map.dart';
import '../../events/screens/tickets_screens.dart' show openTicketPurchase;
import '../../guest_home/screens/guest_onboarding_wizard_screen.dart';
import '../widgets/invite_envelope.dart';

/// Convite do evento (`/invite/<código>`) — o mesmo para todos, na app e
/// no browser (canvas "Envelope do convite", 2026-11-07):
///
/// 1. Sem conta: sugere a app/conta (nunca obrigatório) — "Continuar aqui".
/// 2. O convite completo: tudo o que o organizador preencheu.
/// 3. "Confirmar presença": nome → acompanhantes, menu e alergias
///    (obrigatórios). "Não vou poder": só o nome.
/// 4. Resposta enviada, com a sugestão de criar conta.
///
/// Sem conta, a resposta fica ligada a um token guardado no telemóvel
/// (migração 162); ao criar conta, liga-se a ela.
class InvitePageScreen extends StatefulWidget {
  final String slug;

  /// Aberto ao instalar a app a partir do convite (código já aplicado).
  final bool fromInstall;

  const InvitePageScreen({super.key, required this.slug, this.fromInstall = false});

  @override
  State<InvitePageScreen> createState() => _InvitePageScreenState();
}

enum _Stage { envelope, gate, invite, done }

class _InvitePageScreenState extends State<InvitePageScreen> {
  InviteEvent? _event;
  MyInviteAnswer? _answer;
  bool _loading = true;
  bool _missing = false;
  late _Stage _stage;
  bool _busy = false;
  String? _joinMessage;

  bool get _signedIn => supabase.auth.currentSession != null;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    InviteEvent? ev;
    try {
      ev = await loadInviteEvent(widget.slug);
    } catch (_) {}
    final answer = ev == null ? null : await loadMyInviteAnswer(ev.code);
    if (!mounted) return;
    setState(() {
      _event = ev;
      _missing = ev == null;
      _answer = answer;
      _loading = false;
      // Primeiro o envelope (canvas "Envelope do convite"); quem já
      // respondeu vai direto à resposta.
      _stage = answer?.answered == true ? _Stage.done : _Stage.envelope;
    });
  }

  // ---------- ações ----------

  void _downloadApp(InviteEvent ev) {
    // O código fica no telemóvel: ao abrir a app instalada, o convite
    // abre sozinho. Copiado também, para o caso de não entrar sozinho.
    PendingInvite.save(ev.code);
    copyText(ev.code);
    showInstallAppSheet(context, code: ev.code);
  }

  void _createAccount(InviteEvent ev) {
    // Só a resposta deste convite fica ligada à conta nova.
    if (_answer != null) markInviteClaim(ev.code);
    context.push('/register?role=guest&code=${ev.code}');
  }

  /// Com conta: entra no evento pelo código (143). Público entra logo;
  /// privado fica à espera do organizador; pago abre a compra.
  Future<void> _joinSignedIn(InviteEvent ev) async {
    setState(() {
      _busy = true;
      _joinMessage = null;
    });
    try {
      final r = await joinWeddingByCode(ev.code);
      if (!mounted) return;
      if (r.guestMatched) {
        context.go('/guest-home/${r.weddingId}');
      } else {
        setState(() => _joinMessage = 'Pedido enviado. ${ev.name1} vai aceitar na app e avisamos-te.');
      }
    } catch (e) {
      if (!mounted) return;
      if (isTicketRequired(e)) {
        await openTicketPurchase(context, code: ev.code);
      } else {
        setState(() => _joinMessage = 'Não foi possível entrar. Tenta outra vez.');
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _respond(InviteEvent ev, {required bool attending}) async {
    if (ev.isPaid) {
      await openTicketPurchase(context, code: ev.code);
      return;
    }
    if (_signedIn) {
      await _joinSignedIn(ev);
      return;
    }
    // Já começou a responder neste telemóvel: continua com o mesmo nome.
    var answer = _answer;
    String? token = answer?.token;
    var name = answer?.name;
    var max = answer?.maxCompanions ?? ev.maxCompanions;
    if (token == null) {
      name = await _askName(ev, attending: attending);
      if (name == null || !mounted) return;
      setState(() => _busy = true);
      try {
        final r = await startPublicRsvp(ev.code, name);
        token = r.token;
        max = r.maxCompanions;
      } on InviteRsvpError catch (e) {
        if (!mounted) return;
        setState(() => _busy = false);
        if (e.code == 'ticket_required') {
          await openTicketPurchase(context, code: ev.code);
          return;
        }
        _snack(switch (e.code) {
          'invalid_name' => 'Escreve o teu nome (2 a 80 letras).',
          'rate_limited' => 'Muitas respostas a chegar agora. Tenta daqui a uns minutos.',
          'not_found' => 'Este convite já não existe.',
          _ => 'Não foi possível enviar. Tenta outra vez.',
        });
        return;
      }
      if (!mounted) return;
      setState(() => _busy = false);
    }

    if (!attending) {
      setState(() => _busy = true);
      try {
        await declinePublicRsvp(token);
      } catch (_) {
        if (mounted) {
          setState(() => _busy = false);
          _snack('Não foi possível enviar. Tenta outra vez.');
        }
        return;
      }
      await _reloadAnswer(ev);
      return;
    }

    final guest = answer?.toGuest(ev.weddingId) ??
        Guest(
          id: '',
          weddingId: ev.weddingId,
          name: name ?? '',
          maxCompanions: max,
          plusOneAllowed: max > 0,
          rsvpToken: token,
        );
    final nav = Navigator.of(context);
    await nav.push(MaterialPageRoute<void>(
      builder: (_) => GuestOnboardingWizardScreen(
        weddingId: ev.weddingId,
        guest: guest,
        rsvpToken: token,
        event: ev.toGuestWedding(),
        // "Vais?" já foi respondido no convite.
        initialStep: answer?.answered == true ? 0 : 1,
        initialCompanions: answer?.companions ?? const [],
        onDone: () {
          if (nav.canPop()) nav.pop();
        },
      ),
    ));
    if (!mounted) return;
    await _reloadAnswer(ev);
  }

  Future<void> _reloadAnswer(InviteEvent ev) async {
    final a = await loadMyInviteAnswer(ev.code);
    if (!mounted) return;
    setState(() {
      _busy = false;
      _answer = a;
      if (a?.answered == true) _stage = _Stage.done;
    });
  }

  Future<String?> _askName(InviteEvent ev, {required bool attending}) {
    final ctrl = TextEditingController();
    return showModalBottomSheet<String>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xxl))),
      builder: (sheet) {
        String? error;
        return StatefulBuilder(
          builder: (sheet, setSheet) {
            void submit() {
              final v = ctrl.text.trim().replaceAll(RegExp(r'\s+'), ' ');
              if (v.length < 2) {
                setSheet(() => error = 'Escreve o teu nome.');
                return;
              }
              Navigator.of(sheet).pop(v);
            }

            return Padding(
              padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 24, AppTheme.screenMargin, 24 + MediaQuery.of(sheet).viewInsets.bottom),
              child: Column(
                mainAxisSize: MainAxisSize.min,
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    attending ? 'Boa! Como te chamas?' : 'Que pena. Como te chamas?',
                    style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w700, color: AppTheme.ink),
                  ),
                  const SizedBox(height: 6),
                  Text(
                    'Como ${ev.isCouple ? 'os anfitriões te conhecem' : '${ev.name1} te conhece'}. A partir daqui o convite passa a ser teu.',
                    style: const TextStyle(fontSize: AppFontSize.base, height: 1.45, color: AppTheme.inkMuted),
                  ),
                  const SizedBox(height: 18),
                  TextField(
                    controller: ctrl,
                    autofocus: true,
                    textCapitalization: TextCapitalization.words,
                    textInputAction: TextInputAction.done,
                    maxLength: 80,
                    autofillHints: const [AutofillHints.name],
                    onSubmitted: (_) => submit(),
                    decoration: InputDecoration(
                      labelText: 'O teu nome *',
                      errorText: error,
                      counterText: '',
                    ),
                  ),
                  const SizedBox(height: 16),
                  PrimaryButton(label: attending ? 'Continuar' : 'Enviar resposta', onPressed: submit),
                ],
              ),
            );
          },
        );
      },
    ).whenComplete(ctrl.dispose);
  }

  void _snack(String text) => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(text)));

  // ---------- ecrãs ----------

  void _afterEnvelope() => setState(() => _stage = (_signedIn || _answer != null) ? _Stage.invite : _Stage.gate);

  @override
  Widget build(BuildContext context) {
    final ev0 = _event;
    final showEnvelope = !_loading && ev0 != null && _stage == _Stage.envelope;
    // Transição envelope → convite (pedido 2026-11-09): o convite aparece
    // a esbater-se e a subir por cima do envelope aberto.
    return AnimatedSwitcher(
      duration: const Duration(milliseconds: 700),
      switchInCurve: Curves.easeOutCubic,
      switchOutCurve: Curves.easeIn,
      transitionBuilder: (child, a) => FadeTransition(
        opacity: a,
        child: SlideTransition(
          position: Tween(begin: const Offset(0, 0.03), end: Offset.zero).animate(a),
          child: child,
        ),
      ),
      child: showEnvelope
          ? KeyedSubtree(key: const ValueKey('envelope'), child: InviteEnvelopeScreen(event: ev0, onOpened: _afterEnvelope))
          : KeyedSubtree(key: const ValueKey('page'), child: _page(context)),
    );
  }

  Widget _page(BuildContext context) {
    // Seta para voltar só quando o convite foi aberto dentro da app (ex.:
    // pré-visualização do organizador); quem abre o link não a vê.
    final canPop = Navigator.of(context).canPop();
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Column(children: [
          if (canPop)
            const Padding(
              padding: EdgeInsets.fromLTRB(16, 8, 16, 0),
              child: Align(alignment: Alignment.centerLeft, child: CircleBackButton()),
            ),
          Expanded(child: Builder(builder: (context) {
          if (_loading) return const Center(child: CircularProgressIndicator());
          final ev = _event;
          if (_missing || ev == null) {
            return PublicStateView(
              pose: MascotPose.sad,
              title: 'Convite não encontrado',
              message: 'O link pode estar incompleto ou já não existir. Confirma com quem te convidou.',
              actions: [PrimaryButton(label: 'Ir para o início', onPressed: () => context.go('/welcome'))],
            );
          }
          return Center(
            child: ConstrainedBox(
              constraints: const BoxConstraints(maxWidth: 480),
              child: AnimatedSwitcher(
                duration: const Duration(milliseconds: 450),
                switchInCurve: Curves.easeOutCubic,
                transitionBuilder: (child, a) => FadeTransition(
                  opacity: a,
                  child: SlideTransition(
                    position: Tween(begin: const Offset(0, 0.02), end: Offset.zero).animate(a),
                    child: child,
                  ),
                ),
                child: KeyedSubtree(
                  key: ValueKey(_stage == _Stage.envelope ? _Stage.gate : _stage),
                  child: switch (_stage) {
                    _Stage.envelope || _Stage.gate => _gate(ev),
                    _Stage.invite => _invite(ev),
                    _Stage.done => _done(ev),
                  },
                ),
              ),
            ),
          );
        })),
        ]),
      ),
    );
  }

  /// 2 · Antes do convite: a app/conta, nunca obrigatória.
  Widget _gate(InviteEvent ev) {
    final native = !kIsWeb || widget.fromInstall;
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 20, AppTheme.screenMargin, 28),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: _revealInOrder([
          if (widget.fromInstall) ...[
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
              decoration: BoxDecoration(color: AppTheme.accentTint, borderRadius: BorderRadius.circular(AppRadius.sm)),
              child: Row(
                children: [
                  Icon(Icons.check_rounded, size: 18, color: AppTheme.accentOliveDark),
                  const SizedBox(width: 8),
                  Expanded(
                    child: Text('Código ${ev.code} aplicado',
                        style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
                  ),
                ],
              ),
            ),
            const SizedBox(height: 12),
          ],
          _EventSummary(ev: ev),
          const SizedBox(height: 26),
          Text(
            native ? 'Cria a tua conta para responder num instante' : 'Responde pela app',
            style: const TextStyle(fontSize: 28, height: 1.15, fontWeight: FontWeight.w700, color: AppTheme.ink),
          ),
          const SizedBox(height: 8),
          Text(
            native
                ? 'Leva 10 segundos. O teu nome fica preenchido e recebes os avisos do evento.'
                : 'Descarrega a À Nossa! e o convite abre lá sozinho. Não precisas de escrever o código.',
            style: const TextStyle(fontSize: AppFontSize.lg, height: 1.45, color: AppTheme.inkMuted),
          ),
          const SizedBox(height: 18),
          const _Benefit(icon: Icons.notifications_none_rounded, text: 'Avisos se a hora ou o local mudarem'),
          const _Benefit(icon: Icons.photo_outlined, text: 'Fotos da festa e lista de presentes'),
          const _Benefit(icon: Icons.event_outlined, text: 'Todos os teus convites num só sítio'),
          const SizedBox(height: 26),
          if (native) ...[
            PrimaryButton(label: 'Criar conta', onPressed: () => _createAccount(ev)),
            const SizedBox(height: 4),
            TextButton(onPressed: () => context.push('/login'), child: const Text('Já tenho conta')),
          ] else ...[
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(Icons.check_rounded, size: 16, color: AppTheme.accentOliveDark),
                const SizedBox(width: 6),
                Flexible(
                  child: Text('Código ${ev.code} entra sozinho na app',
                      style: TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
                ),
              ],
            ),
            const SizedBox(height: 10),
            PrimaryButton(label: 'Descarregar a app', onPressed: () => _downloadApp(ev)),
          ],
          const SizedBox(height: 18),
          const Row(
            children: [
              Expanded(child: Divider(color: AppTheme.borderMuted)),
              Padding(
                padding: EdgeInsets.symmetric(horizontal: 12),
                child: Text('não é obrigatório', style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
              ),
              Expanded(child: Divider(color: AppTheme.borderMuted)),
            ],
          ),
          const SizedBox(height: 14),
          SizedBox(
            height: 54,
            child: FilledButton.tonal(
              onPressed: () => setState(() => _stage = _Stage.invite),
              style: FilledButton.styleFrom(
                backgroundColor: AppColors.blue,
                foregroundColor: AppTheme.ink,
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(AppRadius.md)),
                textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontSize: 16, fontWeight: FontWeight.w700),
              ),
              child: const Text('Continuar aqui'),
            ),
          ),
        ]),
      ),
    );
  }

  /// 3 · O convite completo.
  Widget _invite(InviteEvent ev) {
    final a = _answer;
    return ListView(
      padding: const EdgeInsets.fromLTRB(20, 16, 20, 28),
      // Cada parte entra a seguir à anterior (pedido 2026-11-09).
      children: _revealInOrder([
        _InviteCard(ev: ev),
        if (ev.venue != null || ev.address != null || ev.location != null) ...[
          const SizedBox(height: 14),
          _Section(
            icon: Icons.place_outlined,
            title: 'Local',
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                if (ev.venue != null)
                  Text(ev.venue!, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                if ((ev.address ?? ev.location) != null) ...[
                  const SizedBox(height: 4),
                  Text(ev.address ?? ev.location!, style: const TextStyle(fontSize: AppFontSize.base, height: 1.45, color: AppTheme.inkMuted)),
                ],
                const SizedBox(height: 12),
                // Mapa embutido e botões numa coluna (pedido 2026-11-08).
                VenueMap(
                  label: ev.venue ?? ev.displayNames,
                  address: ev.address ?? ev.location,
                  latitude: ev.latitude,
                  longitude: ev.longitude,
                ),
                const SizedBox(height: 12),
                SizedBox(
                  height: 48,
                  child: FilledButton.icon(
                    onPressed: () => showNavigationSheet(
                      context,
                      label: ev.venue ?? ev.displayNames,
                      address: ev.address ?? ev.location,
                      latitude: ev.latitude,
                      longitude: ev.longitude,
                    ),
                    icon: const Icon(Icons.directions_outlined, size: 20),
                    label: const Text('Como chegar'),
                    style: FilledButton.styleFrom(
                      backgroundColor: AppTheme.accentOliveDark,
                      foregroundColor: Colors.white,
                      shape: const StadiumBorder(),
                      textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontSize: 15, fontWeight: FontWeight.w700),
                    ),
                  ),
                ),
                if ((ev.address ?? ev.location) != null) ...[
                  const SizedBox(height: 4),
                  Center(
                    child: TextButton.icon(
                      onPressed: () {
                        copyText(ev.address ?? ev.location!);
                        _snack('Morada copiada.');
                      },
                      icon: const Icon(Icons.copy_rounded, size: 16),
                      label: const Text('Copiar morada'),
                      style: TextButton.styleFrom(
                        foregroundColor: AppTheme.accentOliveDark,
                        textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontSize: 14, fontWeight: FontWeight.w700),
                      ),
                    ),
                  ),
                ],
              ],
            ),
          ),
        ],
        if (ev.program.isNotEmpty) ...[
          const SizedBox(height: 14),
          _Section(
            icon: Icons.schedule_rounded,
            title: 'Programa',
            child: Column(
              children: [
                for (final p in ev.program)
                  Padding(
                    padding: const EdgeInsets.symmetric(vertical: 6),
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        SizedBox(
                          width: 56,
                          child: Text(p.time, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                        ),
                        Expanded(
                          child: Container(
                            padding: const EdgeInsets.only(left: 14),
                            decoration: const BoxDecoration(border: Border(left: BorderSide(color: AppTheme.borderMuted, width: 1.5))),
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(p.title, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: AppTheme.ink)),
                                if (p.place.trim().isNotEmpty)
                                  Text(p.place, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
                              ],
                            ),
                          ),
                        ),
                      ],
                    ),
                  ),
              ],
            ),
          ),
        ],
        const SizedBox(height: 14),
        // Uma linha para cada (pedido 2026-11-08).
        _DetailsList(items: [
          if (ev.dressCode != null || ev.themeColors.isNotEmpty)
            (Icons.checkroom_outlined, 'Dress code', ev.dressCode ?? 'Cores do evento', ev.themeColors),
          (
            Icons.group_outlined,
            'Acompanhantes',
            ev.maxCompanions <= 0
                ? 'Só tu'
                : 'Podes levar ${ev.maxCompanions == 1 ? '1 pessoa' : 'até ${ev.maxCompanions} pessoas'}',
            const <String>[],
          ),
          (
            Icons.confirmation_number_outlined,
            'Entrada',
            ev.isPaid ? (ev.entryPrice == null ? 'Com bilhete' : '${_euros(ev.entryPrice!)} por pessoa') : 'Grátis',
            const <String>[],
          ),
          (Icons.favorite_border_rounded, 'Organização', ev.displayNames, const <String>[]),
        ]),
        const SizedBox(height: 14),
        _CodeBox(code: ev.code, onCopied: () => _snack('Código copiado.')),
        const SizedBox(height: 26),
        if (_signedIn) ...[
          PrimaryButton(
            label: ev.isPaid ? 'Comprar bilhete' : 'Entrar no evento',
            loading: _busy,
            onPressed: _busy ? null : () => _respond(ev, attending: true),
          ),
          if (_joinMessage != null) ...[
            const SizedBox(height: 10),
            Text(_joinMessage!, textAlign: TextAlign.center, style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm)),
          ],
        ] else if (ev.isPaid) ...[
          PrimaryButton(label: 'Comprar bilhete', onPressed: () => _respond(ev, attending: true)),
        ] else ...[
          Text(
            a == null ? 'Contamos contigo?' : '${a.name.split(' ').first}, contamos contigo?',
            textAlign: TextAlign.center,
            style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink),
          ),
          const SizedBox(height: 14),
          Row(
            children: [
              Expanded(
                child: OutlinedButton(
                  onPressed: _busy ? null : () => _respond(ev, attending: false),
                  style: OutlinedButton.styleFrom(
                    minimumSize: const Size(0, 54),
                    foregroundColor: AppTheme.ink,
                    side: const BorderSide(color: AppTheme.ink, width: 1.5),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(AppRadius.md)),
                  ),
                  child: const Text('Não vou poder'),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                flex: 7,
                child: FilledButton(
                  onPressed: _busy ? null : () => _respond(ev, attending: true),
                  style: FilledButton.styleFrom(
                    minimumSize: const Size(0, 54),
                    backgroundColor: AppTheme.accentOliveDark,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(AppRadius.md)),
                  ),
                  child: _busy
                      ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2.5, color: Colors.white))
                      : const Text('Confirmar presença'),
                ),
              ),
            ],
          ),
          const SizedBox(height: 10),
          const Text(
            'A seguir pedimos nome, acompanhantes, menu e alergias.',
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted),
          ),
        ],
      ]),
    );
  }

  /// 5 · Resposta enviada.
  Widget _done(InviteEvent ev) {
    final a = _answer!;
    final first = a.name.split(' ').first;
    final waiting = a.awaitingApproval;
    final people = [a.name, ...a.companions.map((c) => c.name)];
    return ListView(
      padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 36, AppTheme.screenMargin, 28),
      children: [
        Center(
          child: Container(
            width: 64,
            height: 64,
            decoration: BoxDecoration(color: AppTheme.accentOliveDark, shape: BoxShape.circle),
            child: Icon(a.declined ? Icons.mail_outline_rounded : Icons.check_rounded, color: Colors.white, size: 30),
          ),
        ),
        const SizedBox(height: 14),
        Text(
          a.declined ? 'Obrigado por avisares, $first' : 'Até lá, $first!',
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: 30, height: 1.15, fontWeight: FontWeight.w700, color: AppTheme.ink),
        ),
        const SizedBox(height: 8),
        Text(
          waiting
              ? 'A tua resposta está guardada. ${ev.isCouple ? 'Os anfitriões vão' : '${ev.name1} vai'} confirmar a tua entrada na lista.'
              : '${ev.isCouple ? 'Os anfitriões já sabem' : '${ev.name1} já sabe'} a tua resposta.',
          textAlign: TextAlign.center,
          style: const TextStyle(fontSize: AppFontSize.lg, height: 1.45, color: AppTheme.inkMuted),
        ),
        const SizedBox(height: 22),
        _Section(
          icon: Icons.assignment_turned_in_outlined,
          title: 'A tua resposta',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              if (a.declined)
                const Text('Não vais poder ir.', style: TextStyle(fontSize: 15, color: AppTheme.ink))
              else ...[
                _AnswerRow(name: people.first, detail: _personDetail(a.menu, a.dietary)),
                for (final c in a.companions) _AnswerRow(name: c.name, detail: _personDetail(c.menu, c.allergies.join(', '))),
              ],
              const SizedBox(height: 6),
              Align(
                alignment: Alignment.centerLeft,
                child: TextButton(
                  onPressed: _busy ? null : () => _respond(ev, attending: true),
                  child: const Text('Alterar resposta'),
                ),
              ),
            ],
          ),
        ),
        if (!_signedIn) ...[
          const SizedBox(height: 14),
          // Sugestão de conta (2026-11-07). No browser, "Criar conta aqui"
          // liga a resposta logo (o token está neste browser) — a app
          // instalada no iPhone não vê o que o Safari guardou.
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(color: AppColors.blue, borderRadius: BorderRadius.circular(AppRadius.md)),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Row(
                  children: [
                    Icon(Icons.notifications_none_rounded, color: AppTheme.accentOliveDark),
                    const SizedBox(width: 12),
                    const Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text('Queres saber se algo mudar?', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          SizedBox(height: 2),
                          Text('Cria conta com a resposta já guardada.', style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
                        ],
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 12),
                Row(
                  children: [
                    Expanded(
                      child: FilledButton(
                        onPressed: () => _createAccount(ev),
                        style: FilledButton.styleFrom(
                          minimumSize: const Size(0, 44),
                          backgroundColor: AppTheme.ink,
                          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(AppRadius.sm)),
                        ),
                        child: Text(kIsWeb && !widget.fromInstall ? 'Criar conta aqui' : 'Criar conta'),
                      ),
                    ),
                    if (kIsWeb && !widget.fromInstall) ...[
                      const SizedBox(width: 8),
                      Expanded(
                        child: OutlinedButton(
                          onPressed: () => _downloadApp(ev),
                          style: OutlinedButton.styleFrom(
                            minimumSize: const Size(0, 44),
                            foregroundColor: AppTheme.ink,
                            side: const BorderSide(color: AppTheme.ink, width: 1.5),
                            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(AppRadius.sm)),
                          ),
                          child: const Text('Ter a app'),
                        ),
                      ),
                    ],
                  ],
                ),
              ],
            ),
          ),
        ],
        const SizedBox(height: 22),
        TextButton(
          onPressed: () => setState(() => _stage = _Stage.invite),
          child: const Text('Ver o convite'),
        ),
      ],
    );
  }

  static String _personDetail(String? menu, String? allergies) {
    final al = (allergies ?? '').trim();
    return [menu ?? '—', al.isEmpty ? 'sem alergias' : al.toLowerCase()].join(' · ');
  }
}

String _euros(double v) => v == v.roundToDouble() ? '${v.toStringAsFixed(0)} €' : '${v.toStringAsFixed(2).replaceAll('.', ',')} €';

const _weekdays = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo'];
const _months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

String _invitedTo(InviteEvent ev) => switch (ev.eventType) {
      EventType.wedding => ev.isCouple ? 'convidam-te para celebrar o seu casamento' : 'convida-te para o casamento',
      EventType.birthday => 'convida-te para o aniversário',
      EventType.baptism => '${ev.isCouple ? 'convidam' : 'convida'}-te para o batizado',
      EventType.communion => '${ev.isCouple ? 'convidam' : 'convida'}-te para a comunhão',
      EventType.engagement => 'convidam-te para o noivado',
      EventType.vowRenewal => 'convidam-te para a renovação de votos',
      EventType.babyShower => '${ev.isCouple ? 'convidam' : 'convida'}-te para o chá de bebé',
      _ => '${ev.isCouple ? 'convidam' : 'convida'}-te para ${ev.eventType.noun == 'evento' ? 'o evento' : 'o ${ev.eventType.noun}'}',
    };

/// Resumo pequeno do evento (ecrã da conta).
class _EventSummary extends StatelessWidget {
  final InviteEvent ev;
  const _EventSummary({required this.ev});

  @override
  Widget build(BuildContext context) {
    final d = ev.date;
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(AppRadius.md)),
      child: Row(
        children: [
          Container(
            width: 60,
            height: 60,
            decoration: BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(AppRadius.sm)),
            child: d == null
                ? const Icon(Icons.celebration_outlined, color: Colors.white)
                : Column(
                    mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      Text('${d.day}', style: const TextStyle(fontSize: 22, height: 1, fontWeight: FontWeight.w700, color: Colors.white)),
                      Text(_months[d.month - 1].substring(0, 3).toUpperCase(),
                          style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 1, color: Colors.white)),
                    ],
                  ),
          ),
          const SizedBox(width: 14),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('${ev.displayNames} ${_invitedTo(ev).split(' para ').first} para',
                    style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                Text(ev.eventType.label, style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(
                  [
                    if (d != null) _weekdays[d.weekday - 1],
                    if (ev.time != null) ev.time!,
                    if ((ev.venue ?? ev.location) != null) (ev.venue ?? ev.location)!,
                  ].join(' · '),
                  maxLines: 2,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

/// Cartão principal do convite: capa, quem convida, data e hora.
class _InviteCard extends StatelessWidget {
  final InviteEvent ev;
  const _InviteCard({required this.ev});

  @override
  Widget build(BuildContext context) {
    final d = ev.date;
    const gold = Color(0xFFB8995A);
    Widget band(String text) => Container(
          width: 72,
          padding: const EdgeInsets.symmetric(vertical: 8),
          decoration: const BoxDecoration(border: Border.symmetric(horizontal: BorderSide(color: gold))),
          child: Text(text.toUpperCase(),
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 11, letterSpacing: 1.6, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
        );
    return Container(
      padding: const EdgeInsets.all(8),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(6),
        boxShadow: const [BoxShadow(color: Color(0x1A2E3B2B), blurRadius: 20, offset: Offset(0, 6))],
      ),
      child: Container(
        padding: const EdgeInsets.fromLTRB(14, 14, 14, 26),
        decoration: BoxDecoration(border: Border.all(color: gold)),
        child: Column(
          children: [
            ClipRRect(
              borderRadius: BorderRadius.circular(4),
              child: SizedBox(
                height: 170,
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    PhotoCardBackground(imageUrl: ev.coverPhotoUrl ?? '', fallbackColor: AppTheme.accentOliveDark),
                    Positioned(
                      left: 12,
                      bottom: 12,
                      child: Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(AppRadius.pill)),
                        child: Text(ev.eventType.label.toUpperCase(),
                            style: const TextStyle(fontSize: 11, letterSpacing: 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      ),
                    ),
                  ],
                ),
              ),
            ),
            const SizedBox(height: 18),
            Text(ev.displayNames,
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 38, height: 1.05, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 6),
            Text(_invitedTo(ev),
                textAlign: TextAlign.center, style: const TextStyle(fontSize: AppFontSize.base, height: 1.45, color: AppTheme.inkMuted)),
            if (ev.message != null) ...[
              const SizedBox(height: 12),
              Text('“${ev.message}”',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 17, height: 1.4, fontStyle: FontStyle.italic, color: AppTheme.accentOliveDark)),
            ],
            if (d != null) ...[
              const SizedBox(height: 18),
              Row(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  band(_weekdays[d.weekday - 1].split('-').first),
                  Padding(
                    padding: const EdgeInsets.symmetric(horizontal: 14),
                    child: Text('${d.day}', style: const TextStyle(fontSize: 54, height: 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ),
                  band(ev.time == null ? '${d.year}' : 'às ${ev.time}'),
                ],
              ),
              const SizedBox(height: 8),
              Text('${_months[d.month - 1]} · ${d.year}'.toUpperCase(),
                  style: const TextStyle(fontSize: 12, letterSpacing: 2.4, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ],
          ],
        ),
      ),
    );
  }
}

class _Section extends StatelessWidget {
  final IconData icon;
  final String title;
  final Widget child;
  const _Section({required this.icon, required this.title, required this.child});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(18),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(AppRadius.md)),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Row(
              children: [
                Icon(icon, size: 20, color: AppTheme.accentOliveDark),
                const SizedBox(width: 10),
                Text(title.toUpperCase(),
                    style: const TextStyle(fontSize: 12, letterSpacing: 1.6, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
              ],
            ),
            const SizedBox(height: 12),
            child,
          ],
        ),
      );
}

class _DetailsList extends StatelessWidget {
  final List<(IconData, String, String, List<String>)> items;
  const _DetailsList({required this.items});

  @override
  Widget build(BuildContext context) => Container(
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(AppRadius.md)),
        child: Column(
          children: [
            for (final (i, (icon, label, value, colors)) in items.indexed) ...[
              if (i > 0) const Divider(height: 1, indent: 18, endIndent: 18, color: AppTheme.borderMuted),
              Padding(
                padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 14),
                child: Row(
                  children: [
                    Icon(icon, size: 20, color: AppTheme.accentOliveDark),
                    const SizedBox(width: 14),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(label.toUpperCase(),
                              style: const TextStyle(fontSize: 11, letterSpacing: 1.2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                          const SizedBox(height: 3),
                          Text(value, style: const TextStyle(fontSize: 15, height: 1.35, fontWeight: FontWeight.w600, color: AppTheme.ink)),
                          if (colors.isNotEmpty) ...[
                            const SizedBox(height: 8),
                            Wrap(
                              spacing: 6,
                              runSpacing: 6,
                              children: [
                                for (final hex in colors)
                                  Tooltip(
                                    message: pastelName(hex) ?? hex,
                                    child: Semantics(
                                      label: pastelName(hex) ?? 'Cor $hex',
                                      child: Container(
                                        width: 24,
                                        height: 24,
                                        decoration: BoxDecoration(
                                          color: colorFromHex(hex),
                                          shape: BoxShape.circle,
                                          border: Border.all(color: const Color(0x1F000000)),
                                        ),
                                      ),
                                    ),
                                  ),
                              ],
                            ),
                          ],
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ],
          ],
        ),
      );
}

class _CodeBox extends StatelessWidget {
  final String code;
  final VoidCallback onCopied;
  const _CodeBox({required this.code, required this.onCopied});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.fromLTRB(16, 10, 10, 10),
        decoration: BoxDecoration(color: AppColors.blue, borderRadius: BorderRadius.circular(AppRadius.md)),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  const Text('CÓDIGO DO EVENTO',
                      style: TextStyle(fontSize: 11, letterSpacing: 1.2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                  const SizedBox(height: 2),
                  Text(code, style: const TextStyle(fontSize: 18, letterSpacing: 2.4, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ],
              ),
            ),
            IconButton(
              tooltip: 'Copiar código',
              onPressed: () {
                copyText(code);
                onCopied();
              },
              style: IconButton.styleFrom(backgroundColor: Colors.white, minimumSize: const Size(44, 44)),
              icon: const Icon(Icons.copy_rounded, size: 20, color: AppTheme.ink),
            ),
          ],
        ),
      );
}

class _Benefit extends StatelessWidget {
  final IconData icon;
  final String text;
  const _Benefit({required this.icon, required this.text});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 6),
        child: Row(
          children: [
            Icon(icon, size: 22, color: AppTheme.accentOliveDark),
            const SizedBox(width: 12),
            Expanded(child: Text(text, style: const TextStyle(fontSize: 15, color: AppTheme.ink))),
          ],
        ),
      );
}

class _AnswerRow extends StatelessWidget {
  final String name;
  final String detail;
  const _AnswerRow({required this.name, required this.detail});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 5),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Expanded(child: Text(name, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: AppTheme.ink))),
            const SizedBox(width: 12),
            Flexible(
              child: Text(detail,
                  textAlign: TextAlign.right, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
            ),
          ],
        ),
      );
}


/// Envolve cada parte em [_Reveal], com atraso crescente (até 7 passos).
List<Widget> _revealInOrder(List<Widget> children) => [
      for (var i = 0; i < children.length; i++)
        children[i] is SizedBox ? children[i] : _Reveal(step: i ~/ 2 > 7 ? 7 : i ~/ 2, child: children[i]),
    ];

/// Entra a esbater-se e a subir 16 px, uma vez (não repete em rebuilds).
class _Reveal extends StatefulWidget {
  const _Reveal({required this.step, required this.child});
  final int step;
  final Widget child;

  @override
  State<_Reveal> createState() => _RevealState();
}

class _RevealState extends State<_Reveal> with SingleTickerProviderStateMixin {
  late final AnimationController _c = AnimationController(vsync: this, duration: const Duration(milliseconds: 520));
  late final Animation<double> _a = CurvedAnimation(parent: _c, curve: Curves.easeOutCubic);

  @override
  void initState() {
    super.initState();
    Future<void>.delayed(Duration(milliseconds: 250 + widget.step * 110), () {
      if (mounted) _c.forward();
    });
  }

  @override
  void didChangeDependencies() {
    super.didChangeDependencies();
    if (MediaQuery.of(context).disableAnimations) _c.value = 1;
  }

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) => AnimatedBuilder(
        animation: _a,
        child: widget.child,
        builder: (context, child) => Opacity(
          opacity: _a.value,
          child: Transform.translate(offset: Offset(0, (1 - _a.value) * 16), child: child),
        ),
      );
}
