import 'dart:async';

import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show RealtimeChannel;

import '../../../core/events/my_qr.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/skeleton.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'ticket_pass_screens.dart' show MyQrPanel;

/// «Entrada» (pedido 2026-11-23: "faz a pagina entrada do codigo qr para
/// todos os eventos, updates to all"). Um QR da conta (migração 228) e, por
/// baixo, todos os eventos onde ele dá entrada — os que organizo e aqueles
/// a que vou — com data, local, mesa e estado. Abre do ícone do QR ao lado
/// do sino em «Eventos». Tudo atualiza em tempo real: quando um organizador
/// ou parceiro regista a entrada ou a chegada, esta página muda logo.
class EntryScreen extends StatefulWidget {
  const EntryScreen({super.key});

  @override
  State<EntryScreen> createState() => _EntryScreenState();
}

class _EntryScreenState extends State<EntryScreen> with WidgetsBindingObserver {
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
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        top: false,
        child: RefreshIndicator(
          onRefresh: _load,
          child: ListView(
            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 40)
                .add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
            children: [
              Row(children: [
                V2RoundButton(icon: Hi.arrowLeft, tooltip: 'Voltar', onTap: () => Navigator.of(context).maybePop()),
                const SizedBox(width: 12),
                const Expanded(
                  child: Text('Entrada', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
              ]),
              const SizedBox(height: 20),
              const MyQrPanel(),
              const SizedBox(height: 14),
              const Text(
                'Um QR para todos os eventos. Mostra-o à entrada, no restaurante ou para pagar. Muda a cada 30 segundos e só serve para ti.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted),
              ),
              const SizedBox(height: 24),
              const Text('DÁ ENTRADA EM',
                  style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
              const SizedBox(height: 8),
              if (entries == null && !_failed)
                const SkeletonList(count: 3, padding: EdgeInsets.zero)
              else if (entries == null)
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 16),
                  child: Column(children: [
                    const Text('Sem ligação. Puxa para baixo para tentar outra vez.',
                        textAlign: TextAlign.center, style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
                    TextButton(onPressed: _load, child: const Text('Tentar outra vez')),
                  ]),
                )
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
          ),
        ),
      ),
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
