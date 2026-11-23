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
import 'ticket_pass_screens.dart' show MyQrPanel;

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
              const MyQrPanel(),
              const SizedBox(height: 14),
              const Text(
                'Um QR para todos os eventos. Mostra-o à entrada, no restaurante ou ao parceiro. Muda a cada 30 segundos e só serve para ti.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted),
              ),
              const SizedBox(height: 24),
              const _Caps('DÁ ENTRADA EM'),
              const SizedBox(height: 8),
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
              else
                for (final (i, e) in entries.indexed) ...[
                  if (i > 0) const Divider(height: 1, thickness: 1, color: AppTheme.line),
                  _EntryRow(entry: e),
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
            const Divider(height: 1, thickness: 1, color: AppTheme.line),
            _TodayRow(
              title: b.event,
              meta: [?b.number, if (b.people != null) b.people == 1 ? '1 pessoa' : '${b.people} pessoas'].join(' · '),
              tag: b.people != null
                  ? (b.arrived > 0 ? '${b.arrived} de ${b.people} chegaram' : '0 de ${b.people}')
                  : (b.arrived == 1 ? '1 chegou' : '${b.arrived} chegaram'),
              green: b.arrived > 0,
            ),
          ],
          const Divider(height: 1, thickness: 1, color: AppTheme.line),
          _TodayRow(
            title: 'Cobrado hoje',
            meta: t.chargedCount == 1 ? '1 pagamento com QR' : '${t.chargedCount} pagamentos com QR',
            value: euros(t.chargedCents),
          ),
          const Divider(height: 1, thickness: 1, color: AppTheme.line),
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
              const Text('Entrada', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
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

const _months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

class _EntryRow extends StatelessWidget {
  final MyEntry entry;
  const _EntryRow({required this.entry});

  @override
  Widget build(BuildContext context) {
    final e = entry;
    final today = DateUtils.dateOnly(DateTime.now());
    final when = e.date == null
        ? null
        : DateUtils.isSameDay(e.date, today)
            ? 'Hoje'
            : '${e.date!.day} ${_months[e.date!.month - 1]}';
    final meta = [
      ?when,
      ?e.location,
      if (e.table != null) 'Mesa ${e.table}',
      if (e.organizer) 'Organizas',
      if (!e.organizer && e.isPaid && e.ticketStatus == 'paid') e.quantity == 1 ? 'Bilhete · 1 pessoa' : 'Bilhete · ${e.quantity} pessoas',
    ].join(' · ');
    final green = AppTheme.accentOliveDark;
    final (String status, Color color) = e.blocked
        ? ('Sem bilhete pago: o QR não dá entrada', const Color(0xFFB3261E))
        : e.checkedInAt != null
            ? ('Entrada registada às ${_hhmm(e.checkedInAt!)}', green)
            : e.organizer
                ? ('És tu que organizas', AppTheme.inkMuted)
                : ('Mostra o QR à entrada', AppTheme.inkMuted);
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 14),
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Container(
          width: 44,
          height: 44,
          decoration: BoxDecoration(
            color: e.checkedInAt != null ? green : Colors.white,
            shape: BoxShape.circle,
          ),
          child: Icon(
            e.checkedInAt != null ? Hi.check : Hi.calendar,
            size: 20,
            color: e.checkedInAt != null ? Colors.white : AppTheme.ink,
          ),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(e.event, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            const SizedBox(height: 4),
            Text(status, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: color)),
            for (final a in e.arrivals)
              Text('Chegada registada: ${a.partner} às ${_hhmm(a.at)}',
                  style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: green)),
          ]),
        ),
      ]),
    );
  }
}
