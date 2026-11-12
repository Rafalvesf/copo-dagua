import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/event_lifecycle.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// Arquivar ou apagar um evento (migração 185): na página do evento (⋯) e
/// com um toque longo no cartão em "Os meus eventos". O apagar pede
/// confirmação dentro da própria folha.
Future<void> showEventActionsSheet(BuildContext context, WidgetRef ref, {required String weddingId, required String name, required bool isOwner}) async {
  final messenger = ScaffoldMessenger.of(context);
  final done = await showIslandSheet<String>(
    context: context,
    builder: (ctx) => _EventActions(weddingId: weddingId, name: name, isOwner: isOwner),
  );
  if (done == null) return;
  final me = ref.read(authControllerProvider).profile?.id;
  if (me != null) await ref.read(weddingControllerProvider.notifier).load(me);
  ref.invalidate(hiddenEventsProvider);
  messenger.showSnackBar(SnackBar(
    content: Text(done == 'archived'
        ? 'Evento arquivado. Está em Definições → Eventos arquivados e apagados.'
        : 'Evento apagado. Podes restaurá-lo em Definições → Eventos arquivados e apagados.'),
  ));
}

class _EventActions extends StatefulWidget {
  final String weddingId;
  final String name;
  final bool isOwner;
  const _EventActions({required this.weddingId, required this.name, required this.isOwner});

  @override
  State<_EventActions> createState() => _EventActionsState();
}

class _EventActionsState extends State<_EventActions> {
  bool _confirmDelete = false;
  bool _busy = false;
  String? _error;

  Future<void> _run(Future<void> Function() action, String result) async {
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      await action();
      if (mounted) Navigator.of(context).pop(result);
    } catch (e) {
      if (mounted) {
        setState(() {
          _busy = false;
          _error = eventActionError(e);
        });
      }
    }
  }

  Widget _row(String label, {String? sub, Color color = AppTheme.ink, required VoidCallback? onTap}) => SnappyTap(
        onTap: onTap,
        child: Container(
          constraints: const BoxConstraints(minHeight: 56),
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
          decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(16)),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisAlignment: MainAxisAlignment.center, children: [
            Text(label, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: color)),
            if (sub != null) Text(sub, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        ),
      );

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(20, 20, 20, 24),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Text(widget.name, maxLines: 1, overflow: TextOverflow.ellipsis,
            style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 14),
        if (!_confirmDelete) ...[
          _row('Arquivar evento',
              sub: 'Sai das tuas listas. Os convidados continuam a vê-lo.',
              onTap: _busy ? null : () => _run(() => archiveEvent(widget.weddingId), 'archived')),
          if (widget.isOwner) ...[
            const SizedBox(height: 8),
            _row('Apagar evento',
                sub: 'Deixa de aparecer a todos. Podes restaurá-lo.',
                color: AppStatusColors.declined,
                onTap: _busy ? null : () => setState(() => _confirmDelete = true)),
          ],
        ] else ...[
          Text('Apagar «${widget.name}»? Deixa de aparecer a ti, aos convidados e no Descobrir. Fica nas Definições, de onde o podes restaurar.',
              style: const TextStyle(fontSize: 14, height: 1.4, color: AppTheme.ink)),
          const SizedBox(height: 16),
          Row(children: [
            Expanded(
              child: OutlinedButton(
                onPressed: _busy ? null : () => setState(() => _confirmDelete = false),
                style: OutlinedButton.styleFrom(
                  minimumSize: const Size.fromHeight(52),
                  foregroundColor: AppTheme.ink,
                  side: const BorderSide(color: AppTheme.ink, width: 1.5),
                  shape: const StadiumBorder(),
                ),
                child: const Text('Cancelar'),
              ),
            ),
            const SizedBox(width: 8),
            Expanded(
              child: FilledButton(
                onPressed: _busy ? null : () => _run(() => deleteEvent(widget.weddingId), 'deleted'),
                style: FilledButton.styleFrom(
                  minimumSize: const Size.fromHeight(52),
                  backgroundColor: AppTheme.ink,
                  foregroundColor: Colors.white,
                  shape: const StadiumBorder(),
                ),
                child: _busy
                    ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                    : const Text('Apagar'),
              ),
            ),
          ]),
        ],
        if (_error != null) ...[
          const SizedBox(height: 12),
          Text(_error!, style: const TextStyle(fontSize: 13, color: AppStatusColors.declined)),
        ],
      ]),
    );
  }
}
