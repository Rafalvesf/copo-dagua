import 'dart:async';

import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show RealtimeChannel;

import '../../../core/auth/auth_controller.dart';
import '../../../core/events/event_pay.dart';
import '../../../core/events/my_qr.dart';
import '../../../core/home/home_providers.dart' show CheckoutUnavailable;
import '../../../core/payments/payments.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/estrela.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/skeleton.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../payments/screens/pay_screen.dart' show PayScreen;
import 'ticket_pass_screens.dart' show brandQr;
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';
import '../../../shared/leave.dart';

String _hhmm(DateTime d) => '${d.hour.toString().padLeft(2, '0')}:${d.minute.toString().padLeft(2, '0')}';

class _WhiteCard extends StatelessWidget {
  final Widget child;
  const _WhiteCard({required this.child});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(14),
        decoration: _cardBox,
        child: child,
      );
}

/// Cartão das pranchetas do QR (2026-11-23): branco, contorno 0,5 #E3E3E3,
/// cantos 16.
final _cardBox = BoxDecoration(
  color: Colors.white,
  borderRadius: BorderRadius.circular(16),
  border: Border.all(color: AppTheme.line, width: 0.5),
);

const _weekdays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const _monthsPt = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

/// «Sex, 18 dez».
String _day(DateTime d) => '${_weekdays[d.weekday - 1]}, ${d.day} ${_monthsPt[d.month - 1]}';

/// Linha de detalhe dentro de um cartão: rótulo 14 cinzento à esquerda,
/// valor 14 negrito (ou etiqueta) à direita, linha 0,5 por cima.
class _DetailRow extends StatelessWidget {
  final String label;
  final String? value;
  final Widget? trailing;
  const _DetailRow(this.label, {this.value, this.trailing});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(vertical: 8),
        decoration: const BoxDecoration(border: Border(top: BorderSide(color: AppTheme.line, width: 0.5))),
        child: Row(children: [
          Expanded(child: Text(label, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted))),
          if (value != null) Text(value!, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ?trailing,
        ]),
      );
}

/// «Quem é» (migração 228): quem lê o QR da conta de alguém (sobretudo o
/// parceiro, para verificar a marcação; o organizador à entrada) vê o nome
/// da pessoa e só o que os liga: as suas marcações em eventos onde ela vai,
/// ou a entrada nos eventos que organiza. Daqui regista a chegada/entrada
/// ou cobra (uma cobrança por leitura).
class ScanScreen extends StatefulWidget {
  final String token;
  const ScanScreen({super.key, required this.token});

  @override
  State<ScanScreen> createState() => _ScanScreenState();
}

class _ScanScreenState extends State<ScanScreen> {
  late Future<ScanResult> _future = _scan();
  final Map<String, ({String result, DateTime? at})> _done = {};
  String? _busy;

  /// Migração 232: sem entrada nem marcação para quem lê, o QR abre o
  /// perfil da pessoa (no lugar deste ecrã).
  Future<ScanResult> _scan() async {
    final r = await scanQr(widget.token);
    if (r.result == 'ok' && r.mode == 'profile' && r.profileId != null && mounted) {
      context.pushReplacement('/u/${r.profileId}');
      // Fica a carregar até o perfil abrir.
      return Completer<ScanResult>().future;
    }
    return r;
  }

  String _key(ScanItem i) => i.bookingId ?? 'e${i.eventId}';

  Future<void> _confirm(ScanResult r, ScanItem i) async {
    setState(() => _busy = _key(i));
    final res = await scanConfirm(r.scanId!, i);
    if (!mounted) return;
    setState(() {
      _busy = null;
      _done[_key(i)] = res;
    });
  }

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: FutureBuilder<ScanResult>(
          future: _future,
          builder: (context, snap) {
            if (!snap.hasData) return const SkeletonPage(carousel: false, rows: 3);
            final r = snap.data!;
            return ListView(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 40),
              children: [
                Row(children: [
                  V2RoundButton(icon: Hi.arrowLeft, tooltip: 'Voltar', onTap: () => Navigator.of(context).maybePop()),
                ]),
                if (r.result == 'ok') ...[
                  const SizedBox(height: 12),
                  const Text('Quem é', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  const SizedBox(height: 18),
                ] else
                  const SizedBox(height: 16),
                if (r.result != 'ok') ..._problem(r) else ..._person(r),
              ],
            );
          },
        ),
      ),
    );
  }

  List<Widget> _problem(ScanResult r) {
    final (IconData icon, String title, String text) = switch (r.result) {
      'expired' => (Hi.clock, 'QR expirado', 'Este QR já mudou. Pede para mostrar o QR outra vez e lê de novo.'),
      'own_code' => (Hi.informationCircle, 'É o teu QR', 'Este é o teu próprio QR.'),
      'not_found' => (Hi.xCircle, 'QR inválido', 'Este código não é um QR da À Nossa! válido.'),
      _ => (Hi.signalSlash, 'Não foi possível ler', 'Verifica a ligação e tenta outra vez.'),
    };
    return [
      const SizedBox(height: 40),
      Icon(icon, size: 96, color: r.result == 'error' ? AppTheme.inkMuted : const Color(0xFFB3261E)),
      const SizedBox(height: 16),
      Text(title, textAlign: TextAlign.center, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      const SizedBox(height: 8),
      Text(text, textAlign: TextAlign.center, style: const TextStyle(fontSize: 16, height: 1.4, color: AppTheme.ink)),
      if (r.result == 'error') ...[
        const SizedBox(height: 24),
        PressScale(child: FilledButton(onPressed: () => setState(() => _future = _scan()), child: const Text('Tentar outra vez'))),
      ],
    ];
  }

  List<Widget> _person(ScanResult r) {
    final name = r.name ?? 'Convidado';
    return [
      // Prancheta «Quem é»: cartão com a pessoa e «Verificado».
      _WhiteCard(
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            V2Avatar(name, size: 44, imageUrl: r.avatarUrl),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(name, style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const Text('Leste o QR agora', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
            const SizedBox(width: 8),
            const _Tag('Verificado', green: true),
          ]),
          // «Ver perfil» também na entrada e nas marcações (migração 232).
          if (r.profileId != null) ...[
            const SizedBox(height: 12),
            Align(
              alignment: Alignment.centerLeft,
              child: SizedBox(
                height: 36,
                child: PressScale(child: OutlinedButton(
                  onPressed: () => context.push('/u/${r.profileId}'),
                  style: OutlinedButton.styleFrom(
                    backgroundColor: Colors.white,
                    foregroundColor: AppTheme.ink,
                    side: const BorderSide(color: AppTheme.ink, width: 1.5),
                    shape: const StadiumBorder(),
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                  ),
                  child: const Text('Ver perfil', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700)),
                )),
              ),
            ),
          ],
        ]),
      ),
      if (r.items.isEmpty) ...[
        const SizedBox(height: 18),
        const Text(
          'Esta pessoa não tem marcações contigo nem entradas em eventos que organizas.',
          style: TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted),
        ),
      ] else
        for (final i in r.items) ..._item(r, i),
    ];
  }

  List<Widget> _item(ScanResult r, ScanItem i) {
    final key = _key(i);
    final done = _done[key];
    final booking = i.kind == 'booking';
    final blocked = !booking && i.isPaid && i.ticketStatus != 'paid';
    // A hora da chegada/entrada: a que acabou de ser registada ou a de antes.
    final at = (done?.result == 'ok' || done?.result == 'already') ? (done!.at ?? i.doneAt) : i.doneAt;
    final registered = at != null;
    final String? problem = switch (done?.result) {
      'expired' => 'A leitura expirou. Lê o QR outra vez.',
      'not_paid' => 'Bilhete por pagar: não dá entrada.',
      'refunded' => 'Bilhete reembolsado: não dá entrada.',
      'ok' || 'already' || null => null,
      _ => 'Não foi possível registar. Tenta outra vez.',
    };
    final showConfirm = !registered && !blocked && (done == null || done.result == 'error');
    return [
      const SizedBox(height: 18),
      Text(booking ? 'A TUA MARCAÇÃO' : 'ENTRADA NO TEU EVENTO',
          style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
      const SizedBox(height: 4),
      _WhiteCard(
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Text(i.event, style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          if (i.date != null)
            Padding(
              padding: const EdgeInsets.only(top: 2),
              child: Text(_day(i.date!), style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ),
          const SizedBox(height: 10),
          if (booking) ...[
            if (i.bookingNumber != null) _DetailRow('Marcação', value: i.bookingNumber),
            if (i.people != null) _DetailRow('Pessoas', value: '${i.people}'),
            _DetailRow('Chegada',
                trailing: registered ? _Tag('Registada às ${_hhmm(at)}', green: true) : const _Tag('Por registar')),
          ] else ...[
            _DetailRow('Bilhete',
                trailing: i.ticketStatus == 'paid'
                    ? _Tag(i.quantity == 1 ? 'Pago · 1 pessoa' : 'Pago · ${i.quantity} pessoas', green: true)
                    : const _Tag('Sem bilhete pago')),
            _DetailRow('Entrada',
                trailing: registered ? _Tag('Registada às ${_hhmm(at)}', green: true) : const _Tag('Por registar')),
          ],
          if (problem != null)
            Padding(
              padding: const EdgeInsets.only(top: 8),
              child: Text(problem, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFFC8553D))),
            ),
        ]),
      ),
      if (showConfirm || booking) const SizedBox(height: 12),
      Row(children: [
          if (showConfirm)
            Expanded(
              child: SizedBox(
                height: 44,
                child: PressScale(child: FilledButton(
                  onPressed: _busy == null ? () => _confirm(r, i) : null,
                  child: _busy == key
                      ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                      : Text(booking ? 'Registar chegada' : 'Registar entrada', style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700)),
                )),
              ),
            ),
          // Pagar no balcão (migração 229): o parceiro escreve o valor e
          // mostra um QR de uso único (prancheta «Quem é»).
          if (booking) ...[
            if (showConfirm) const SizedBox(width: 10),
            Expanded(
              child: SizedBox(
                height: 44,
                child: PressScale(child: OutlinedButton(
                  onPressed: () => context.push('/cobrar'),
                  style: OutlinedButton.styleFrom(
                    backgroundColor: Colors.white,
                    foregroundColor: AppTheme.ink,
                    side: const BorderSide(color: AppTheme.ink, width: 1.5),
                    shape: const StadiumBorder(),
                  ),
                  child: const Text('Cobrar', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700)),
                )),
              ),
            ),
          ],
        ]),
    ];
  }
}

// ---------------------------------------------------------------------------
// Pagar com QR no balcão (migração 229, pranchetas «Cobrar», «QR da cobrança»
// e «Pagar no balcão», 2026-11-23). Sem saldo: o parceiro escreve o valor e
// mostra um QR de uso único; quem paga lê-o e paga com cartão, Apple Pay ou
// Google Pay. Sem taxa para quem paga.
// ---------------------------------------------------------------------------

const _greenBg = Color(0xFFE6EDE1);
const _greenFg = Color(0xFF3F7A4F);
const _neutralBg = Color(0xFFE6E6E6);
const _neutralFg = Color(0xFF3A3733);

class _Tag extends StatelessWidget {
  final String text;
  final bool green;
  const _Tag(this.text, {this.green = false});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: BoxDecoration(color: green ? _greenBg : _neutralBg, borderRadius: BorderRadius.circular(999)),
        child: Text(text,
            style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: green ? _greenFg : _neutralFg)),
      );
}

/// Botão 52 a toda a largura: preto, ou branco com contorno (DESIGN.md §2).
class _Button52 extends StatelessWidget {
  final String label;
  final VoidCallback? onTap;
  final bool outline;
  final bool busy;
  const _Button52({required this.label, this.onTap, this.outline = false, this.busy = false});

  @override
  Widget build(BuildContext context) {
    const text = TextStyle(fontSize: 15, fontWeight: FontWeight.w700);
    final child = busy
        ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
        : Text(label, style: text);
    return SizedBox(
      height: 52,
      width: double.infinity,
      child: outline
          ? PressScale(child: OutlinedButton(
              onPressed: onTap,
              style: OutlinedButton.styleFrom(
                backgroundColor: Colors.white,
                foregroundColor: AppTheme.ink,
                side: const BorderSide(color: AppTheme.ink, width: 1.5),
                shape: const StadiumBorder(),
              ),
              child: child,
            ))
          : PressScale(child: FilledButton(
              onPressed: busy ? () {} : onTap,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.action,
                foregroundColor: Colors.white,
                disabledBackgroundColor: AppTheme.ink.withValues(alpha: 0.35),
                disabledForegroundColor: Colors.white,
                shape: const StadiumBorder(),
              ),
              child: child,
            )),
    );
  }
}

/// «Cobrar» (`/cobrar`, só parceiros): teclado numérico, o valor e «O quê»
/// (opcional) → «Mostrar o QR para pagar» → «QR para pagar», que passa a
/// «Pago às HH:MM» assim que o cliente paga (Realtime).
class ChargeScreen extends StatefulWidget {
  const ChargeScreen({super.key});

  @override
  State<ChargeScreen> createState() => _ChargeScreenState();
}

class _ChargeScreenState extends State<ChargeScreen> {
  static const _min = 50;
  static const _max = 999999;

  int _cents = 0;
  final _what = TextEditingController();
  bool _busy = false;

  PayRequest? _req;
  String _status = 'open';
  DateTime? _paidAt;
  RealtimeChannel? _channel;
  Timer? _tick;
  Timer? _poll;

  @override
  void dispose() {
    _stopWatching();
    _what.dispose();
    super.dispose();
  }

  void _stopWatching() {
    closeChannel(_channel);
    _channel = null;
    _tick?.cancel();
    _poll?.cancel();
  }

  void _press(String k) {
    setState(() {
      final next = switch (k) {
        'del' => _cents ~/ 10,
        '00' => _cents * 100,
        _ => _cents * 10 + int.parse(k),
      };
      if (next <= _max) _cents = next;
    });
  }

  Future<void> _create() async {
    if (_cents < _min || _busy) return;
    setState(() => _busy = true);
    final what = _what.text.trim();
    final r = await createPayRequest(_cents, description: what.isEmpty ? null : what);
    if (!mounted) return;
    setState(() => _busy = false);
    final req = r.request;
    if (req == null) return _showError(r.error ?? 'error');
    setState(() {
      _req = req;
      _status = 'open';
      _paidAt = null;
    });
    _watch(req);
  }

  void _watch(PayRequest req) {
    _stopWatching();
    _channel = listenPayRequest(req.id, _onStatus);
    _tick = Timer.periodic(const Duration(seconds: 1), (_) {
      if (!mounted) return;
      if (_status == 'open' && !req.expiresAt.isAfter(DateTime.now())) {
        _onStatus('expired');
      } else {
        setState(() {});
      }
    });
    // Se o Realtime falhar, confirma de vez em quando no servidor.
    _poll = Timer.periodic(const Duration(seconds: 6), (_) async {
      if (_status != 'open') return;
      final s = await eventPay({'action': 'sync', 'id': req.id});
      if (mounted && s['state'] == 'paid') _onStatus('paid');
    });
  }

  void _onStatus(String s) {
    if (!mounted || s == _status || _status == 'paid') return;
    setState(() {
      _status = s;
      if (s == 'paid') _paidAt = DateTime.now();
    });
    if (s != 'open') {
      _tick?.cancel();
      _poll?.cancel();
    }
  }

  void _showError(String code) {
    if (code == 'not_onboarded') {
      showIslandDialog<void>(
        context: context,
        builder: (ctx) => IslandAlert(
          title: const Text('Ativa os pagamentos'),
          content: const Text(
              'Para cobrar com QR tens de ativar os pagamentos na app (Stripe). É para lá que vai o dinheiro que recebes.'),
          actions: [
            PressScale(child: TextButton(onPressed: () => Navigator.of(ctx).pop(), child: const Text('Agora não'))),
            PressScale(child: FilledButton(
              onPressed: () {
                Navigator.of(ctx).pop();
                context.push('/partner-payments/setup');
              },
              child: const Text('Ativar pagamentos'),
            )),
          ],
        ),
      );
      return;
    }
    final msg = switch (code) {
      'not_partner' => 'Só os parceiros podem cobrar com QR.',
      'invalid_amount' => 'O valor não é válido.',
      _ => 'Não foi possível criar a cobrança. Verifica a ligação e tenta outra vez.',
    };
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  /// Cancelar (ou voltar) com o QR à espera: pergunta antes.
  Future<void> _cancel() async {
    final req = _req;
    if (req == null) return;
    if (_status == 'open') {
      final ok = await showIslandDialog<bool>(
        context: context,
        builder: (ctx) => IslandAlert(
          title: const Text('Cancelar a cobrança?'),
          content: const Text('O QR deixa de funcionar e o cliente já não consegue pagar com ele.'),
          actions: [
            PressScale(child: TextButton(onPressed: () => Navigator.of(ctx).pop(false), child: const Text('Continuar à espera'))),
            PressScale(child: FilledButton(onPressed: () => Navigator.of(ctx).pop(true), child: const Text('Cancelar cobrança'))),
          ],
        ),
      );
      if (ok != true || !mounted) return;
      await cancelPayRequest(req.id);
      if (!mounted) return;
    }
    _stopWatching();
    setState(() => _req = null);
  }

  void _newCharge() {
    _stopWatching();
    setState(() {
      _req = null;
      _cents = 0;
      _what.clear();
    });
  }

  void _back() {
    if (_req != null) {
      _status == 'open' ? _cancel() : _newCharge();
    } else {
      Navigator.of(context).maybePop();
    }
  }

  @override
  Widget build(BuildContext context) {
    return PopScope(
      canPop: _req == null,
      onPopInvokedWithResult: (didPop, _) {
        if (!didPop) _back();
      },
      child: GradientScaffold(
        background: AppBackground.subtle,
        body: SafeArea(
          child: Padding(
            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 20),
            child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
              Align(
                alignment: Alignment.centerLeft,
                child: V2RoundButton(icon: Hi.arrowLeft, tooltip: 'Voltar', onTap: _back),
              ),
              const SizedBox(height: 12),
              Text(_req == null ? 'Cobrar' : 'QR para pagar',
                  style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 18),
              Expanded(child: _req == null ? _keypad() : _qr(_req!)),
            ]),
          ),
        ),
      ),
    );
  }

  Widget _keypad() {
    final ok = _cents >= _min;
    Widget key(String k) => Expanded(
          child: Semantics(
              button: true,
              label: k == 'del' ? 'Apagar' : k,
              excludeSemantics: true,
              child: Material(
                color: Colors.white,
                shape: RoundedRectangleBorder(
                  borderRadius: BorderRadius.circular(16),
                  side: const BorderSide(color: AppTheme.line, width: 0.5),
                ),
                child: InkWell(
                  borderRadius: BorderRadius.circular(16),
                  onTap: () => _press(k),
                  child: SizedBox(
                    height: 60,
                    child: Center(
                      child: k == 'del'
                          ? const Icon(Icons.backspace_outlined, size: 22, color: AppTheme.ink)
                          : Text(k, style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                  ),
                ),
              ),
          ),
        );
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      Expanded(
        child: ListView(padding: EdgeInsets.zero, children: [
          // Prancheta «Cobrar»: a frase 13 por cima e o valor 44.
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 18),
            decoration: _cardBox,
            child: Column(children: [
              Text(
                ok ? 'Quem paga escolhe como paga quando ler o QR' : 'Mínimo 0,50 €',
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
              ),
              const SizedBox(height: 10),
              Semantics(
                liveRegion: true,
                child: Text(euros(_cents),
                    style: const TextStyle(fontSize: 44, height: 1.1, letterSpacing: -0.5, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
            ]),
          ),
          const SizedBox(height: 10),
          Container(
            height: 44,
            padding: const EdgeInsets.symmetric(horizontal: 16),
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(999),
              border: Border.all(color: AppTheme.line, width: 0.5),
            ),
            child: Row(children: [
              const Text('O quê', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              const SizedBox(width: 10),
              Expanded(
                child: TextField(
                  controller: _what,
                  maxLength: 80,
                  textCapitalization: TextCapitalization.sentences,
                  style: const TextStyle(fontSize: 14, color: AppTheme.ink),
                  decoration: const InputDecoration(
                    isCollapsed: true,
                    filled: false,
                    counterText: '',
                    border: InputBorder.none,
                    enabledBorder: InputBorder.none,
                    focusedBorder: InputBorder.none,
                    hintText: '2 gin tónico (opcional)',
                  ),
                ),
              ),
            ]),
          ),
          for (final row in const [
            ['1', '2', '3'],
            ['4', '5', '6'],
            ['7', '8', '9'],
            ['00', '0', 'del'],
          ]) ...[
            SizedBox(height: row.first == '1' ? 16 : 10),
            Row(children: [
              for (final (j, k) in row.indexed) ...[if (j > 0) const SizedBox(width: 10), key(k)],
            ]),
          ],
        ]),
      ),
      const SizedBox(height: 12),
      _Button52(label: 'Mostrar o QR para pagar', busy: _busy, onTap: ok ? _create : null),
    ]);
  }

  Widget _qr(PayRequest req) {
    final paid = _status == 'paid';
    final open = _status == 'open';
    final left = req.expiresAt.difference(DateTime.now());
    final secs = left.isNegative ? 0 : left.inSeconds;
    final expires = '${secs ~/ 60}:${(secs % 60).toString().padLeft(2, '0')}';
    final what = _what.text.trim();
    final (String state, bool green) = switch (_status) {
      'paid' => ('Pago às ${_hhmm(_paidAt ?? DateTime.now())}', true),
      'expired' => ('Expirou', false),
      'cancelled' => ('Cancelado', false),
      _ => ('À espera…', false),
    };
    Widget row(String label, Widget value) => Container(
          padding: const EdgeInsets.symmetric(vertical: 10),
          decoration: const BoxDecoration(border: Border(top: BorderSide(color: AppTheme.line, width: 0.5))),
          child: Row(children: [
            Expanded(child: Text(label, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted))),
            value,
          ]),
        );
    final merchant = ProviderScope.containerOf(context, listen: false).read(authControllerProvider).profile?.businessName;
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      Expanded(
        child: ListView(padding: EdgeInsets.zero, children: [
          // Prancheta «QR da cobrança»: o nome do parceiro 19, o que é 13,
          // o QR, o valor uma só vez e «Uso único».
          Container(
            padding: const EdgeInsets.all(14),
            decoration: _cardBox,
            child: Column(children: [
              if (merchant != null && merchant.trim().isNotEmpty)
                Text(merchant.trim(),
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              Padding(
                padding: const EdgeInsets.only(top: 2),
                child: Text(what.isEmpty ? 'Pagamento no balcão' : what,
                    textAlign: TextAlign.center, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ),
              const SizedBox(height: 12),
              if (paid)
                const SizedBox(height: 214, child: Center(child: EstrelaMascot(Estrela.piscar, size: 150)))
              else
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: AppTheme.line, width: 0.5),
                  ),
                  child: Opacity(
                    opacity: open ? 1 : 0.15,
                    child: brandQr(payQrData(req.code), 186, label: 'QR para pagar ${euros(_cents)}'),
                  ),
                ),
              const SizedBox(height: 12),
              Text(euros(_cents), style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 2),
              Text(
                paid
                    ? 'O dinheiro vai para a tua conta de pagamentos.'
                    : open
                        ? 'Pede ao cliente para ler este QR com a app À Nossa!'
                        : 'Este QR já não funciona.',
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
              ),
              if (open) ...[const SizedBox(height: 10), const _Tag('Uso único · só uma pessoa pode pagar', green: true)],
            ]),
          ),
          const SizedBox(height: 14),
          Semantics(liveRegion: true, child: row('Estado', _Tag(state, green: green))),
          row('Expira em',
              Text(open ? expires : '—', style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink))),
        ]),
      ),
      const SizedBox(height: 12),
      if (open)
        _Button52(label: 'Cancelar cobrança', outline: true, onTap: _cancel)
      else if (paid) ...[
        _Button52(label: 'Nova cobrança', onTap: _newCharge),
        const SizedBox(height: 10),
        _Button52(label: 'Fechar', outline: true, onTap: () => Navigator.of(context).maybePop()),
      ] else
        _Button52(label: 'Mostrar outro QR', busy: _busy, onTap: _create),
    ]);
  }
}

/// Folha «Pagar» de quem leu o QR do parceiro (`/pagar/:code`, também a
/// partir da câmara em «Entrada»). Mostra o pedido (`pay_request_info`) e,
/// se estiver em aberto, a mesma folha de pagamento da app ([PayScreen]):
/// Apple Pay / Google Pay recomendado, «Mais opções» → Cartão, o total uma
/// só vez e «Pagamento seguro pela Stripe, dentro da app.».
class PayRequestSheet extends StatefulWidget {
  final String code;
  const PayRequestSheet({super.key, required this.code});

  @override
  State<PayRequestSheet> createState() => _PayRequestSheetState();
}

class _PayRequestSheetState extends State<PayRequestSheet> {
  PayRequestInfo? _info;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    if (_info != null) setState(() => _info = null);
    final i = await payRequestInfo(widget.code);
    if (mounted) setState(() => _info = i);
  }

  static String _error(String c) => switch (c) {
        'expired' => 'Este QR expirou. Pede ao parceiro para mostrar outro.',
        'used' => 'Este QR já foi usado por outra pessoa.',
        'own_request' => 'Não podes pagar uma cobrança tua.',
        'not_found' => 'Este QR não é válido.',
        'declined' => 'O cartão foi recusado. Experimenta outro.',
        'network' => 'Sem ligação. Verifica a internet e tenta outra vez.',
        _ => payErrorMessage(c),
      };

  PayArgs _args(PayRequestInfo i) {
    final what = i.description?.trim() ?? '';
    return PayArgs(
      paymentId: '',
      partnerName: i.merchant,
      kind: 'pay_request',
      amount: i.amountCents / 100,
      titleOverride: what.isEmpty ? 'Pagamento no balcão' : what,
      methods: const [PayMethod.wallet, PayMethod.card],
      create: (m, {phone, paymentMethodId}) async {
        final r = await eventPay({'action': 'intent', 'code': widget.code, 'method': m.code});
        if (r['state'] == 'paid') throw const CheckoutUnavailable('invalid_state');
        final err = r['error'];
        if (err != null) throw CheckoutUnavailable('$err');
        return paymentIntentInfoFromJson(r);
      },
      state: () async {
        if (i.id == null) return ('open', null);
        final r = await eventPay({'action': 'sync', 'id': i.id});
        return (r['state'] == 'paid' ? 'paid' : 'open', null);
      },
      errorText: _error,
    );
  }

  @override
  Widget build(BuildContext context) {
    final i = _info;
    if (i != null && i.result == 'ok') return PayScreen(args: _args(i));
    return _SheetShell(
      title: i == null ? 'Pagar' : _problemTitle(i.result),
      children: i == null
          // O fundo da folha é #F2F2F2: os esqueletos vão a branco.
          ? const [
              Row(children: [
                SkeletonBox(width: 40, height: 40, radius: 20, color: Colors.white),
                SizedBox(width: 12),
                Expanded(child: SkeletonBox(height: 32, radius: 12, color: Colors.white, delay: 1)),
              ]),
              SizedBox(height: 18),
              SkeletonBox(height: 120, radius: 22, color: Colors.white, delay: 1),
              SizedBox(height: 12),
              SkeletonBox(height: 56, radius: 22, color: Colors.white, delay: 2),
              SizedBox(height: 16),
              SkeletonBox(height: 52, radius: 26, color: Colors.white, delay: 2),
            ]
          : [
              Center(child: EstrelaMascot(i.result == 'paid' ? Estrela.piscar : Estrela.triste, size: 120)),
              const SizedBox(height: 12),
              Text(_problemText(i.result),
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 14, height: 1.45, color: AppTheme.inkMuted)),
              const SizedBox(height: 20),
              if (i.result == 'error') ...[
                _Button52(label: 'Tentar outra vez', onTap: _load),
                const SizedBox(height: 10),
                _Button52(label: 'Fechar', outline: true, onTap: () => leave(context, force: true)),
              ] else
                _Button52(label: 'OK', onTap: () => leave(context, force: true)),
            ],
    );
  }

  static String _problemTitle(String r) => switch (r) {
        'paid' => 'Pago',
        'expired' => 'QR expirado',
        'used' => 'QR já usado',
        'own_request' => 'É a tua cobrança',
        'not_found' => 'QR inválido',
        _ => 'Sem ligação',
      };

  static String _problemText(String r) => switch (r) {
        'paid' => 'Já pagaste esta conta.',
        'expired' => 'Este QR já não está válido. Pede ao parceiro para mostrar um novo.',
        'used' => 'Outra pessoa já pagou ou está a pagar com este QR.',
        'own_request' => 'Não podes pagar uma cobrança tua. Mostra este QR ao cliente para ele pagar.',
        'not_found' => 'Este QR não é de uma cobrança da À Nossa!',
        _ => 'Não foi possível abrir o pagamento. Verifica a ligação e tenta outra vez.',
      };
}

/// A mesma folha da [PayScreen] (sobe do fundo, título 22 e «×» preto 44),
/// para o carregamento e para os estados sem pagamento.
class _SheetShell extends StatelessWidget {
  final String title;
  final List<Widget> children;
  const _SheetShell({required this.title, required this.children});

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.of(context).padding.bottom;
    return Material(
      type: MaterialType.transparency,
      child: Column(mainAxisAlignment: MainAxisAlignment.end, children: [
        Expanded(child: GestureDetector(behavior: HitTestBehavior.opaque, onTap: () => leave(context, force: true))),
        Container(
          width: double.infinity,
          decoration: const BoxDecoration(
            color: AppTheme.background,
            borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
          ),
          padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 10, AppTheme.screenMargin, 20 + bottom),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Center(
              child: Container(
                width: 40,
                height: 5,
                decoration: BoxDecoration(color: const Color(0xFFD8D3C9), borderRadius: BorderRadius.circular(3)),
              ),
            ),
            const SizedBox(height: 14),
            Row(children: [
              Expanded(
                child: Text(title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
              V2RoundButton(icon: Hi.xMark, tooltip: 'Fechar', onTap: () => leave(context, force: true)),
            ]),
            const SizedBox(height: 16),
            ...children,
          ]),
        ),
      ]),
    );
  }
}
