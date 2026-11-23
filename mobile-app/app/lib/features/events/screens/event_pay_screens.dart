import 'dart:async';

import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show RealtimeChannel;

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

String _hhmm(DateTime d) => '${d.hour.toString().padLeft(2, '0')}:${d.minute.toString().padLeft(2, '0')}';

class _WhiteCard extends StatelessWidget {
  final Widget child;
  const _WhiteCard({required this.child});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(16),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
        child: child,
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
  late Future<ScanResult> _future = scanQr(widget.token);
  final Map<String, ({String result, DateTime? at})> _done = {};
  String? _busy;

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
        FilledButton(onPressed: () => setState(() => _future = scanQr(widget.token)), child: const Text('Tentar outra vez')),
      ],
    ];
  }

  List<Widget> _person(ScanResult r) {
    final name = r.name ?? 'Convidado';
    return [
      Center(
        child: CircleAvatar(
          radius: 44,
          backgroundColor: AppTheme.ink,
          foregroundImage: r.avatarUrl != null && r.avatarUrl!.isNotEmpty ? NetworkImage(r.avatarUrl!) : null,
          child: Text(name.trim().isEmpty ? '?' : name.trim()[0].toUpperCase(),
              style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: Colors.white)),
        ),
      ),
      const SizedBox(height: 12),
      Text(name, textAlign: TextAlign.center, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      const SizedBox(height: 4),
      const Text('QR verificado agora', textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
      const SizedBox(height: 24),
      if (r.items.isEmpty)
        const Text(
          'Esta pessoa não tem marcações contigo nem entradas em eventos que organizas.',
          textAlign: TextAlign.center,
          style: TextStyle(fontSize: 16, height: 1.4, color: AppTheme.ink),
        )
      else
        for (final i in r.items) ...[_item(r, i), const SizedBox(height: 12)],
    ];
  }

  Widget _item(ScanResult r, ScanItem i) {
    final key = _key(i);
    final done = _done[key];
    final at = done?.at ?? i.doneAt;
    final booking = i.kind == 'booking';
    final already = done == null && i.doneAt != null;
    final blocked = !booking && i.isPaid && i.ticketStatus != 'paid';
    final meta = [
      if (i.date != null) '${i.date!.day.toString().padLeft(2, '0')}/${i.date!.month.toString().padLeft(2, '0')}/${i.date!.year}',
      if (booking && i.bookingNumber != null) 'Marcação ${i.bookingNumber}',
      if (booking && i.people != null) '${i.people} pessoas',
      if (!booking && i.isPaid) i.ticketStatus == 'paid' ? (i.quantity == 1 ? 'Bilhete pago · 1 pessoa' : 'Bilhete pago · ${i.quantity} pessoas') : 'Sem bilhete pago',
    ].join(' · ');
    final (String? statusText, Color statusColor) = switch (done?.result) {
      'ok' => ('${booking ? 'Chegada' : 'Entrada'} registada às ${_hhmm(done!.at ?? DateTime.now())}', AppTheme.accentOliveDark),
      'already' => ('Já ${booking ? 'chegou' : 'entrou'} às ${at == null ? '—' : _hhmm(at)}', const Color(0xFF9A5B00)),
      'expired' => ('A leitura expirou. Lê o QR outra vez.', const Color(0xFFB3261E)),
      'not_paid' => ('Bilhete por pagar.', const Color(0xFFB3261E)),
      'refunded' => ('Bilhete reembolsado.', const Color(0xFFB3261E)),
      null => already
          ? ('Já ${booking ? 'chegou' : 'entrou'} às ${_hhmm(i.doneAt!)}', const Color(0xFF9A5B00))
          : blocked
              ? ('Sem bilhete pago: não dá entrada.', const Color(0xFFB3261E))
              : (null, AppTheme.ink),
      _ => ('Não foi possível registar. Tenta outra vez.', const Color(0xFFB3261E)),
    };
    final showConfirm = !already && !blocked && (done == null || done.result == 'error');
    return _WhiteCard(
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Text(booking ? 'A TUA MARCAÇÃO' : 'ENTRADA NO TEU EVENTO',
            style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
        const SizedBox(height: 4),
        Text(i.event, style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        if (statusText != null) ...[
          const SizedBox(height: 8),
          Text(statusText, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: statusColor)),
        ],
        const SizedBox(height: 12),
        Row(children: [
          if (showConfirm)
            Expanded(
              child: SizedBox(
                height: 44,
                child: FilledButton(
                  onPressed: _busy == null ? () => _confirm(r, i) : null,
                  child: _busy == key
                      ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                      : Text(booking ? 'Registar chegada' : 'Registar entrada', style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700)),
                ),
              ),
            ),
          // Pagar no balcão (migração 229): o parceiro escreve o valor e
          // mostra um QR de uso único (prancheta «Quem é»).
          if (booking) ...[
            if (showConfirm) const SizedBox(width: 10),
            Expanded(
              child: SizedBox(
                height: 44,
                child: OutlinedButton(
                  onPressed: () => context.push('/cobrar'),
                  style: OutlinedButton.styleFrom(
                    backgroundColor: Colors.white,
                    foregroundColor: AppTheme.ink,
                    side: const BorderSide(color: AppTheme.ink, width: 1.5),
                    shape: const StadiumBorder(),
                  ),
                  child: const Text('Cobrar', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700)),
                ),
              ),
            ),
          ],
        ]),
      ]),
    );
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
          ? OutlinedButton(
              onPressed: onTap,
              style: OutlinedButton.styleFrom(
                backgroundColor: Colors.white,
                foregroundColor: AppTheme.ink,
                side: const BorderSide(color: AppTheme.ink, width: 1.5),
                shape: const StadiumBorder(),
              ),
              child: child,
            )
          : FilledButton(
              onPressed: busy ? () {} : onTap,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                disabledBackgroundColor: AppTheme.ink.withValues(alpha: 0.35),
                disabledForegroundColor: Colors.white,
                shape: const StadiumBorder(),
              ),
              child: child,
            ),
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
            TextButton(onPressed: () => Navigator.of(ctx).pop(), child: const Text('Agora não')),
            FilledButton(
              onPressed: () {
                Navigator.of(ctx).pop();
                context.push('/partner-payments/setup');
              },
              child: const Text('Ativar pagamentos'),
            ),
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
            TextButton(onPressed: () => Navigator.of(ctx).pop(false), child: const Text('Continuar à espera')),
            FilledButton(onPressed: () => Navigator.of(ctx).pop(true), child: const Text('Cancelar cobrança')),
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
                borderRadius: BorderRadius.circular(16),
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
          Container(
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
            child: Column(children: [
              const Text('VALOR',
                  style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
              const SizedBox(height: 6),
              Semantics(
                liveRegion: true,
                child: Text(euros(_cents),
                    style: const TextStyle(fontSize: 40, height: 1.1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
              const SizedBox(height: 6),
              Text(
                ok ? 'Quem paga escolhe como paga quando ler o QR.' : 'Mínimo 0,50 €',
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
              ),
            ]),
          ),
          const SizedBox(height: 10),
          Container(
            height: 52,
            padding: const EdgeInsets.symmetric(horizontal: 18),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(26)),
            child: Row(children: [
              const Text('O quê', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              const SizedBox(width: 10),
              Expanded(
                child: TextField(
                  controller: _what,
                  maxLength: 80,
                  textCapitalization: TextCapitalization.sentences,
                  style: const TextStyle(fontSize: 15, color: AppTheme.ink),
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
            const SizedBox(height: 10),
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
          constraints: const BoxConstraints(minHeight: 48),
          decoration: const BoxDecoration(border: Border(top: BorderSide(color: AppTheme.line))),
          child: Row(children: [
            Expanded(child: Text(label, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted))),
            value,
          ]),
        );
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      Expanded(
        child: ListView(padding: EdgeInsets.zero, children: [
          Container(
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
            child: Column(children: [
              Text(what.isEmpty ? 'Pagamento no balcão' : what,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 12),
              if (paid)
                const SizedBox(height: 214, child: Center(child: EstrelaMascot(Estrela.piscar, size: 150)))
              else
                Container(
                  padding: const EdgeInsets.all(14),
                  decoration: BoxDecoration(
                    color: Colors.white,
                    borderRadius: BorderRadius.circular(16),
                    border: Border.all(color: AppTheme.line),
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
          if (open)
            row('Expira em', Text(expires, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink))),
          const Divider(height: 1, thickness: 1, color: AppTheme.line),
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
                _Button52(label: 'Fechar', outline: true, onTap: () => context.pop()),
              ] else
                _Button52(label: 'OK', onTap: () => context.pop()),
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
        Expanded(child: GestureDetector(behavior: HitTestBehavior.opaque, onTap: () => context.pop())),
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
              V2RoundButton(icon: Hi.xMark, tooltip: 'Fechar', onTap: () => context.pop()),
            ]),
            const SizedBox(height: 16),
            ...children,
          ]),
        ),
      ]),
    );
  }
}
