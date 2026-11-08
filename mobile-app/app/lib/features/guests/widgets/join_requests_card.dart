import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/events/events_providers.dart';
import '../../../core/guests/guest_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/v2_kit.dart';

/// "Pedidos para entrar" (migração 143): quem entrou num evento privado
/// com o código ou o link e ainda não está na lista. Confirmar põe a
/// pessoa na lista; recusar tira-a do evento.
class JoinRequestsCard extends ConsumerWidget {
  final String weddingId;
  const JoinRequestsCard({super.key, required this.weddingId});

  Future<void> _review(BuildContext context, WidgetRef ref, JoinRequest r, bool approve) async {
    final messenger = ScaffoldMessenger.of(context);
    try {
      await reviewJoinRequest(r.id, approve: approve);
      ref.invalidate(joinRequestsProvider(weddingId));
      if (approve) await ref.read(guestsControllerProvider.notifier).load(weddingId);
      messenger.showSnackBar(SnackBar(
        content: Text(approve ? '${r.name} está na lista de convidados.' : 'Pedido de ${r.name} recusado.'),
      ));
    } catch (_) {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final requests = ref.watch(joinRequestsProvider(weddingId)).value ?? const <JoinRequest>[];
    if (requests.isEmpty) return const SizedBox.shrink();
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 14, 16, 6),
      decoration: softCard(),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'PEDIDOS PARA ENTRAR · ${requests.length}',
            style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.accentOliveDark),
          ),
          for (final r in requests) ...[
            const SizedBox(height: 12),
            Container(
              padding: const EdgeInsets.fromLTRB(12, 12, 12, 12),
              decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.md)),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Row(
                    children: [
                      CircleAvatar(
                        radius: 18,
                        backgroundColor: AppTheme.accentTint,
                        child: Text(
                          r.name.trim().isEmpty ? '?' : r.name.trim().characters.first.toUpperCase(),
                          style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(r.name,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                            if ((r.email ?? r.phone) != null)
                              Text(r.email ?? r.phone!,
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
                            if (r.answerSummary != null)
                              Text(r.answerSummary!,
                                  maxLines: 2,
                                  overflow: TextOverflow.ellipsis,
                                  style: TextStyle(fontSize: 12.5, color: AppTheme.accentOliveDark)),
                          ],
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 10),
                  // Botões com tamanho próprio: o tema dá ao FilledButton
                  // largura infinita (Size.fromHeight), o que partia a linha.
                  Row(
                    children: [
                      Expanded(
                        child: OutlinedButton(
                          onPressed: () => _review(context, ref, r, false),
                          style: OutlinedButton.styleFrom(
                            foregroundColor: AppTheme.ink,
                            minimumSize: const Size(0, 42),
                            side: const BorderSide(color: AppTheme.borderMuted, width: 1.5),
                            shape: const StadiumBorder(),
                          ),
                          child: const Text('Recusar'),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: FilledButton(
                          onPressed: () => _review(context, ref, r, true),
                          style: FilledButton.styleFrom(
                            backgroundColor: AppTheme.accentOliveDark,
                            minimumSize: const Size(0, 42),
                            shape: const StadiumBorder(),
                          ),
                          child: const Text('Aceitar'),
                        ),
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
          const SizedBox(height: 10),
        ],
      ),
    );
  }
}
