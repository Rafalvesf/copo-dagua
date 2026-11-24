import 'dart:async';

import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show RealtimeChannel;

import '../../../core/auth/auth_controller.dart';
import '../../../core/events/event_pay.dart';
import '../../../core/events/my_qr.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/skeleton.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../widgets/qr_scan_box.dart';
import 'ticket_pass_screens.dart' show brandQr;

/// «Entrada» (pedido 2026-11-23: "faz a pagina entrada do codigo qr para
/// todos os eventos, updates to all"). Um QR da conta (migração 228) e, por
/// baixo, todos os eventos onde ele dá entrada — os que organizo e aqueles
/// a que vou — com data, local, mesa e estado. Abre do ícone do QR ao lado
/// do sino em «Eventos». Tudo atualiza em tempo real: quando um organizador
/// ou parceiro regista a entrada ou a chegada, esta página muda logo.
///
/// Pranchetas «Entrada · QR code» / «Entrada · Scannear» (2026-11-23): duas
/// pílulas no topo — o QR da conta ou a câmara para ler o QR que o parceiro
/// mostra (pagar no balcão). O parceiro vê outra variante (`_PartnerEntry`).
class EntryScreen extends ConsumerWidget {
  const EntryScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final role = ref.watch(authControllerProvider.select((s) => s.profile?.role));
    return role == UserRole.partner ? const _PartnerEntry() : const _MyEntry();
  }
}

class _MyEntry extends StatefulWidget {
  const _MyEntry();

  @override
  State<_MyEntry> createState() => _MyEntryState();
}

class _MyEntryState extends State<_MyEntry> with WidgetsBindingObserver {
  bool _scan = false;
  List<MyEntry>? _entries;
  bool _failed = false;
  RealtimeChannel? _channel;
  Timer? _debounce;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _load();
    _channel = listenMyEntries(() {
      // Várias linhas mudam juntas (entrada + bilhete): um só pedido.
      _debounce?.cancel();
      _debounce = Timer(const Duration(milliseconds: 300), () => _load(announce: true));
    });
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _debounce?.cancel();
    closeEntriesChannel(_channel);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) _load();
  }

  Future<void> _load({bool announce = false}) async {
    final before = {for (final e in _entries ?? const <MyEntry>[]) e.eventId: e};
    final list = await fetchMyEntries();
    if (!mounted) return;
    setState(() {
      _failed = list == null && _entries == null;
      if (list != null) _entries = list;
    });
    if (!announce || list == null) return;
    // Aviso curto quando a entrada ou uma chegada acabou de ser registada.
    for (final e in list) {
      final old = before[e.eventId];
      if (old == null) continue;
      final msg = old.checkedInAt == null && e.checkedInAt != null
          ? 'Entrada registada em ${e.event}'
          : e.arrivals.length > old.arrivals.length
              ? 'Chegada registada: ${e.arrivals.last.partner}'
              : null;
      if (msg != null) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
        break;
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final entries = _entries;
    return _EntryPage(
      onRefresh: _load,
      pills: [
        _Pill(label: 'QR code', icon: Hi.qrCode, active: !_scan, onTap: () => setState(() => _scan = false)),
        _Pill(label: 'Scannear', icon: Hi.viewfinderCircle, active: _scan, onTap: () => setState(() => _scan = true)),
      ],
      children: _scan
          ? const [
              _Hint('Aponta a câmara para o QR que o parceiro te mostra.'),
              SizedBox(height: 12),
              QrScanBox(height: 420, showTorch: true),
            ]
          : [
              const _AccountQrCard(),
              const SizedBox(height: 12),
              const Center(child: _Tag('Só funciona na tua conta', green: true)),
              const SizedBox(height: 18),
              const _Caps('DÁ ENTRADA EM'),
              const SizedBox(height: 4),
              if (entries == null && !_failed)
                const SkeletonList(count: 3, padding: EdgeInsets.zero)
              else if (entries == null)
                _Retry(onTap: _load)
              else if (entries.isEmpty)
                const Padding(
                  padding: EdgeInsets.symmetric(vertical: 16),
                  child: Text('Ainda não tens eventos. Quando entrares num, aparece aqui.',
                      style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
                )
              else ...[
                for (final e in entries) ...[_thinLine, _EntryRow(entry: e)],
                _thinLine,
              ],
            ],
    );
  }
}

/// «Entrada» do parceiro (prancheta «Entrada do parceiro · Scannear e
/// Cobrar»): câmara para ler o QR dos clientes (abre «Quem é»), «Cobrar»
/// (`/cobrar`), as marcações de hoje e o que cobrou hoje com QR. Sem «QR
/// code»: o parceiro lê o QR dos clientes, não mostra o seu.
class _PartnerEntry extends StatefulWidget {
  const _PartnerEntry();

  @override
  State<_PartnerEntry> createState() => _PartnerEntryState();
}

class _PartnerEntryState extends State<_PartnerEntry> with WidgetsBindingObserver {
  PartnerToday? _today;
  bool _failed = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _load();
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) _load();
  }

  Future<void> _load() async {
    final t = await fetchPartnerToday();
    if (!mounted) return;
    setState(() {
      _failed = t == null && _today == null;
      if (t != null) _today = t;
    });
  }

  Future<void> _charge() async {
    await context.push('/cobrar');
    if (mounted) _load();
  }

  @override
  Widget build(BuildContext context) {
    final t = _today;
    return _EntryPage(
      onRefresh: _load,
      pills: [
        _Pill(label: 'Scannear', icon: Hi.viewfinderCircle, active: true, onTap: () {}),
        _Pill(label: 'Cobrar', icon: Hi.creditCard, active: false, onTap: _charge),
      ],
      children: [
        const _Hint('Lê o QR de um cliente para ver a marcação e registar a chegada.'),
        const SizedBox(height: 12),
        QrScanBox(height: 290, onReturn: _load),
        const SizedBox(height: 18),
        const _Caps('HOJE'),
        const SizedBox(height: 4),
        if (t == null && !_failed)
          const SkeletonList(count: 2, padding: EdgeInsets.zero)
        else if (t == null)
          _Retry(onTap: _load)
        else ...[
          if (t.bookings.isEmpty)
            const Padding(
              padding: EdgeInsets.symmetric(vertical: 12),
              child: Text('Sem marcações para hoje.', style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
            ),
          for (final b in t.bookings) ...[
            _thinLine,
            _TodayRow(
              title: b.event,
              meta: [?b.number, if (b.people != null) b.people == 1 ? '1 pessoa' : '${b.people} pessoas'].join(' · '),
              tag: b.people != null
                  ? (b.arrived > 0 ? '${b.arrived} de ${b.people} chegaram' : '0 de ${b.people}')
                  : (b.arrived == 1 ? '1 chegou' : '${b.arrived} chegaram'),
              green: b.arrived > 0,
            ),
          ],
          _thinLine,
          _TodayRow(
            title: 'Cobrado hoje',
            meta: t.chargedCount == 1 ? '1 pagamento com QR' : '${t.chargedCount} pagamentos com QR',
            value: euros(t.chargedCents),
          ),
          _thinLine,
        ],
      ],
    );
  }
}

/// Molde da página: voltar preto 44, título 28 por baixo, pílulas 38.
class _EntryPage extends StatelessWidget {
  final Future<void> Function() onRefresh;
  final List<Widget> pills;
  final List<Widget> children;
  const _EntryPage({required this.onRefresh, required this.pills, required this.children});

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        top: false,
        child: RefreshIndicator(
          onRefresh: onRefresh,
          child: ListView(
            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 40)
                .add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
            children: [
              Align(
                alignment: Alignment.centerLeft,
                child: V2RoundButton(icon: Hi.arrowLeft, tooltip: 'Voltar', onTap: () => Navigator.of(context).maybePop()),
              ),
              const SizedBox(height: 12),
              const Text('Entrada', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w400, color: AppTheme.ink)),
              const SizedBox(height: 14),
              Wrap(spacing: 8, runSpacing: 8, children: pills),
              const SizedBox(height: 14),
              ...children,
            ],
          ),
        ),
      ),
    );
  }
}

/// Pílula 38 (DESIGN.md §6): ativa a verde com texto branco; inativa branca.
class _Pill extends StatelessWidget {
  final String label;
  final IconData icon;
  final bool active;
  final VoidCallback onTap;
  const _Pill({required this.label, required this.icon, required this.active, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final fg = active ? Colors.white : AppTheme.ink;
    return Semantics(
      button: true,
      selected: active,
      child: Material(
        color: active ? AppTheme.accentOliveDark : Colors.white,
        shape: const StadiumBorder(),
        child: InkWell(
          customBorder: const StadiumBorder(),
          onTap: onTap,
          child: SizedBox(
            height: 38,
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 16),
              child: Row(mainAxisSize: MainAxisSize.min, children: [
                Icon(icon, size: 16, color: fg),
                const SizedBox(width: 6),
                Text(label, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: fg)),
              ]),
            ),
          ),
        ),
      ),
    );
  }
}

class _Hint extends StatelessWidget {
  final String text;
  const _Hint(this.text);

  @override
  Widget build(BuildContext context) => Text(text, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted));
}

class _Caps extends StatelessWidget {
  final String text;
  const _Caps(this.text);

  @override
  Widget build(BuildContext context) => Text(text,
      style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted));
}

class _Retry extends StatelessWidget {
  final Future<void> Function() onTap;
  const _Retry({required this.onTap});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.symmetric(vertical: 16),
        child: Column(children: [
          const Text('Sem ligação. Puxa para baixo para tentar outra vez.',
              textAlign: TextAlign.center, style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
          TextButton(onPressed: onTap, child: const Text('Tentar outra vez')),
        ]),
      );
}

/// Linha de «Hoje»: título 16, meta 13 e, à direita, a etiqueta ou o valor.
class _TodayRow extends StatelessWidget {
  final String title;
  final String meta;
  final String? tag;
  final bool green;
  final String? value;
  const _TodayRow({required this.title, required this.meta, this.tag, this.green = false, this.value});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Row(children: [
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        ),
        const SizedBox(width: 10),
        if (tag != null)
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
            decoration: BoxDecoration(
              color: green ? const Color(0xFFE6EDE1) : const Color(0xFFE6E6E6),
              borderRadius: BorderRadius.circular(999),
            ),
            child: Text(tag!,
                style: TextStyle(
                    fontSize: 12, fontWeight: FontWeight.w700, color: green ? const Color(0xFF3F7A4F) : const Color(0xFF3A3733))),
          ),
        if (value != null)
          Text(value!, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      ]),
    );
  }
}

String _hhmm(DateTime d) => '${d.hour.toString().padLeft(2, '0')}:${d.minute.toString().padLeft(2, '0')}';

const _weekdays = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];
const _months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

/// Linha fina 0,5 #E3E3E3 entre as linhas das listas (pranchetas do QR).
const _thinLine = Divider(height: 0.5, thickness: 0.5, color: AppTheme.line);

/// Etiqueta 12 negrito: verde #E6EDE1/#3F7A4F ou neutra #E6E6E6/#3A3733.
class _Tag extends StatelessWidget {
  final String text;
  final bool green;
  const _Tag(this.text, {this.green = false});

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: BoxDecoration(
          color: green ? const Color(0xFFE6EDE1) : const Color(0xFFE6E6E6),
          borderRadius: BorderRadius.circular(999),
        ),
        child: Text(text,
            style: TextStyle(
                fontSize: 12, fontWeight: FontWeight.w700, color: green ? const Color(0xFF3F7A4F) : const Color(0xFF3A3733))),
      );
}

/// Linha de «Dá entrada em» (prancheta «Entrada · QR code»): título 16,
/// «Sáb, 12 dez · Quinta do Vale · Mesa 4» 13 e a etiqueta à direita.
class _EntryRow extends StatelessWidget {
  final MyEntry entry;
  const _EntryRow({required this.entry});

  @override
  Widget build(BuildContext context) {
    final e = entry;
    final d = e.date;
    final meta = [
      if (d != null) '${_weekdays[d.weekday - 1]}, ${d.day} ${_months[d.month - 1]}',
      ?e.location,
      if (e.table != null) 'Mesa ${e.table}',
      if (!e.organizer && e.isPaid && e.ticketStatus == 'paid') e.quantity == 1 ? 'bilhete para 1' : 'bilhete para ${e.quantity}',
    ].join(' · ');
    final arrived = e.arrivals.isEmpty ? null : e.arrivals.last;
    final (String tag, bool green) = e.checkedInAt != null
        ? ('Entrou às ${_hhmm(e.checkedInAt!)}', true)
        : arrived != null
            ? ('Chegou às ${_hhmm(arrived.at)}', true)
            : e.blocked
                ? ('Sem bilhete pago', false)
                : e.organizer
                    ? ('Organizas', false)
                    : e.isPaid
                        ? ('Bilhete', false)
                        : ('Por entrar', false);
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 10),
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(e.event, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            if (meta.isNotEmpty)
              Padding(
                padding: const EdgeInsets.only(top: 1),
                child: Text(meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ),
          ]),
        ),
        const SizedBox(width: 10),
        _Tag(tag, green: green),
      ]),
    );
  }
}

/// O QR da conta como na prancheta «Entrada · QR code»: cartão branco
/// (contorno 0,5, cantos 16), o QR 186 numa caixa 214, a barra verde clara
/// do tempo até mudar, «Novo código em N s» e a pessoa (foto 32, nome 16,
/// «Um QR para todos os eventos»). Muda a cada 30 s (migração 228).
class _AccountQrCard extends ConsumerStatefulWidget {
  const _AccountQrCard();

  @override
  ConsumerState<_AccountQrCard> createState() => _AccountQrCardState();
}

class _AccountQrCardState extends ConsumerState<_AccountQrCard> with WidgetsBindingObserver {
  MyQr? _qr;
  bool _loading = true;
  DateTime _expires = DateTime.now();
  Duration _total = const Duration(seconds: 30);
  Timer? _refresh;
  Timer? _tick;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addObserver(this);
    _load();
    _tick = Timer.periodic(const Duration(seconds: 1), (_) {
      if (mounted) setState(() {});
    });
  }

  @override
  void dispose() {
    WidgetsBinding.instance.removeObserver(this);
    _refresh?.cancel();
    _tick?.cancel();
    super.dispose();
  }

  @override
  void didChangeAppLifecycleState(AppLifecycleState state) {
    if (state == AppLifecycleState.resumed) {
      _load();
    } else if (state == AppLifecycleState.paused) {
      _refresh?.cancel();
    }
  }

  Future<void> _load() async {
    _refresh?.cancel();
    final q = await fetchMyQr();
    if (!mounted) return;
    setState(() {
      _loading = false;
      if (q != null) {
        _qr = q;
        _expires = DateTime.now().add(q.refreshIn);
        _total = q.refreshIn > const Duration(seconds: 30) ? q.refreshIn : const Duration(seconds: 30);
      }
    });
    // Sem rede: tenta outra vez daqui a 5 s.
    _refresh = Timer(q?.refreshIn ?? const Duration(seconds: 5), _load);
  }

  @override
  Widget build(BuildContext context) {
    final profile = ref.watch(authControllerProvider).profile;
    final q = _qr;
    final name = (q?.name?.trim().isNotEmpty ?? false) ? q!.name!.trim() : (profile?.fullName ?? '');
    final left = _expires.difference(DateTime.now());
    final secs = left.isNegative ? 0 : (left.inMilliseconds / 1000).ceil();
    final frac = (left.inMilliseconds / _total.inMilliseconds).clamp(0.0, 1.0);
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(16),
        border: Border.all(color: AppTheme.line, width: 0.5),
      ),
      child: Column(children: [
        Container(
          width: 214,
          padding: const EdgeInsets.all(14),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: AppTheme.line, width: 0.5),
          ),
          child: SizedBox(
            width: 186,
            height: 186,
            child: q != null
                ? brandQr(q.qrData, 186, label: 'Código QR da conta')
                : _loading
                    ? const SkeletonBox(width: 186, height: 186, radius: 8)
                    : Center(
                        child: Column(mainAxisSize: MainAxisSize.min, children: [
                          const Icon(Hi.signalSlash, size: 28, color: AppTheme.inkMuted),
                          const SizedBox(height: 6),
                          const Text('Sem ligação', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                          TextButton(onPressed: _load, child: const Text('Tentar outra vez')),
                        ]),
                      ),
          ),
        ),
        if (q != null) ...[
          const SizedBox(height: 10),
          // Barra do tempo até o código mudar (4, #A9C79A sobre #E3E3E3).
          Container(
            width: 214,
            height: 4,
            decoration: BoxDecoration(color: AppTheme.line, borderRadius: BorderRadius.circular(2)),
            alignment: Alignment.centerLeft,
            child: FractionallySizedBox(
              widthFactor: frac,
              child: Container(decoration: BoxDecoration(color: AppTheme.progress, borderRadius: BorderRadius.circular(2))),
            ),
          ),
          const SizedBox(height: 6),
          Semantics(
            liveRegion: false,
            child: Text('Novo código em $secs s', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ),
        ],
        const SizedBox(height: 12),
        Row(mainAxisAlignment: MainAxisAlignment.center, children: [
          V2Avatar(name.isEmpty ? '?' : name, size: 32, imageUrl: profile?.avatarUrl),
          const SizedBox(width: 10),
          Flexible(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const Text('Um QR para todos os eventos', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
        ]),
      ]),
    );
  }
}

