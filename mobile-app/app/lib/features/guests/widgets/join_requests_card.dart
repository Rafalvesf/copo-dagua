import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/events/events_providers.dart';
import '../../../core/guests/guest_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/v2_kit.dart';

/// Categorias que o organizador dá a quem aceita (2026-11-14: «já não são
/// os convidados a colocar isso»). Ficam em `guests.group_label` e são os
/// filtros da lista de convidados.
const guestCategories = ['Família', 'Amigos', 'Trabalho', 'Vizinhos', 'Escola / Faculdade', 'Outro'];

/// "Pedidos para entrar" (migração 143): quem entrou num evento privado
/// com o código ou o link e ainda não está na lista. Aceitar põe a pessoa
/// na lista com a categoria escolhida; recusar tira-a do evento.
/// Mockup «Páginas do evento» → Convidados (2026-11-14).
class JoinRequestsCard extends ConsumerWidget {
  final String weddingId;
  const JoinRequestsCard({super.key, required this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final requests = ref.watch(joinRequestsProvider(weddingId)).value ?? const <JoinRequest>[];
    if (requests.isEmpty) return const SizedBox.shrink();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const SectionTitle('Pedidos para entrar'),
        for (final (i, r) in requests.indexed) ...[
          if (i > 0) const SizedBox(height: 12),
          _RequestCard(key: ValueKey(r.id), weddingId: weddingId, request: r),
        ],
      ],
    );
  }
}

class _RequestCard extends ConsumerStatefulWidget {
  final String weddingId;
  final JoinRequest request;
  const _RequestCard({super.key, required this.weddingId, required this.request});

  @override
  ConsumerState<_RequestCard> createState() => _RequestCardState();
}

class _RequestCardState extends ConsumerState<_RequestCard> {
  String? _category;
  bool _busy = false;

  Future<void> _review(bool approve) async {
    final r = widget.request;
    final messenger = ScaffoldMessenger.of(context);
    setState(() => _busy = true);
    try {
      await reviewJoinRequest(r.id, approve: approve, category: approve ? _category : null);
      ref.invalidate(joinRequestsProvider(widget.weddingId));
      if (approve) await ref.read(guestsControllerProvider.notifier).load(widget.weddingId);
      messenger.showSnackBar(SnackBar(
        content: Text(approve ? '${r.name} está na lista de convidados.' : 'Pedido de ${r.name} recusado.'),
      ));
    } catch (_) {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final r = widget.request;
    final contact = r.email ?? r.phone;
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: softCard(radius: 22),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              V2Avatar(r.name.trim().isEmpty ? '?' : r.name, size: 44),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(r.name,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    if (contact != null)
                      Text(contact,
                          maxLines: 1,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                    if (r.answerSummary != null)
                      Text(r.answerSummary!,
                          maxLines: 2,
                          overflow: TextOverflow.ellipsis,
                          style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  ],
                ),
              ),
            ],
          ),
          const SizedBox(height: 14),
          const Text('Quem é para vocês?', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          const SizedBox(height: 8),
          Wrap(
            spacing: 8,
            runSpacing: 8,
            children: [
              for (final c in guestCategories)
                _CategoryPill(
                  label: c,
                  selected: _category == c,
                  onTap: () => setState(() => _category = _category == c ? null : c),
                ),
            ],
          ),
          const SizedBox(height: 16),
          Row(
            children: [
              Expanded(
                child: OutlinedButton(
                  onPressed: _busy ? null : () => _review(false),
                  style: OutlinedButton.styleFrom(
                    foregroundColor: AppTheme.ink,
                    minimumSize: const Size(0, 44),
                    side: const BorderSide(color: AppTheme.ink, width: 1.5),
                    shape: const StadiumBorder(),
                    textStyle: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700),
                  ),
                  child: const Text('Recusar'),
                ),
              ),
              const SizedBox(width: 10),
              Expanded(
                child: FilledButton(
                  onPressed: _busy ? null : () => _review(true),
                  style: FilledButton.styleFrom(
                    backgroundColor: AppTheme.ink,
                    foregroundColor: Colors.white,
                    minimumSize: const Size(0, 44),
                    shape: const StadiumBorder(),
                    textStyle: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700),
                  ),
                  child: const Text('Aceitar'),
                ),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _CategoryPill extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;
  const _CategoryPill({required this.label, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      selected: selected,
      child: GestureDetector(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 160),
          height: 34,
          padding: const EdgeInsets.symmetric(horizontal: 14),
          alignment: Alignment.center,
          decoration: ShapeDecoration(
            color: selected ? AppTheme.accentOliveDark : AppTheme.background,
            shape: const StadiumBorder(),
          ),
          child: Text(label,
              style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.ink)),
        ),
      ),
    );
  }
}
