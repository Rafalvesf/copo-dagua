import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/gifts/envelopes.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/v2_kit.dart';

/// Envelopes recebidos (migração 156): quem ofereceu, quanto e a mensagem.
/// O dinheiro chega por transferência à vossa conta; aqui marcam "Chegou"
/// quando o virem no banco e "Agradecido" depois de agradecerem.
class EnvelopesScreen extends ConsumerWidget {
  const EnvelopesScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingId = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
    final list = weddingId == null ? const <GiftEnvelope>[] : (ref.watch(weddingEnvelopesProvider(weddingId)).value ?? const <GiftEnvelope>[]);
    final total = list.fold<double>(0, (a, e) => a + e.amount);
    final received = list.where((e) => e.received).fold<double>(0, (a, e) => a + e.amount);
    final toThank = list.where((e) => !e.thanked).length;

    Future<void> set(GiftEnvelope e, {bool? received, bool? thanked}) async {
      try {
        await updateGiftEnvelope(e.id, received: received, thanked: thanked);
      } catch (_) {
        if (context.mounted) {
          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
        }
      }
      if (weddingId != null) ref.invalidate(weddingEnvelopesProvider(weddingId));
    }

    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: RefreshIndicator(
          onRefresh: () async {
            if (weddingId != null) ref.invalidate(weddingEnvelopesProvider(weddingId));
          },
          child: ListView(
            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 40),
            children: [
              const PageHeader(title: 'Envelopes', centered: true),
              GreenHero(
                label: 'ENVELOPES',
                value: envelopeEuros(total),
                suffix: '${list.length} ${list.length == 1 ? 'envelope' : 'envelopes'}',
                doodles: const [Hi.envelope, Hi.heartOutline, Hi.gift],
                footer: Wrap(spacing: 8, runSpacing: 8, children: [
                  HeroPill('${envelopeEuros(received)} confirmado', solid: true),
                  if (toThank > 0) HeroPill('$toThank por agradecer'),
                ]),
              ),
              const SizedBox(height: 10),
              const Text(
                'Os convidados transferem diretamente para o vosso IBAN (em Para os convidados › Presentes). '
                'Marquem "Chegou" quando o virem no banco.',
                style: TextStyle(fontSize: 12.5, height: 1.4, color: AppTheme.inkMuted),
              ),
              const SizedBox(height: 14),
              if (list.isEmpty)
                const Padding(
                  padding: EdgeInsets.symmetric(vertical: 30),
                  child: Text('Ainda não há envelopes.', textAlign: TextAlign.center, style: TextStyle(color: AppTheme.inkMuted)),
                ),
              for (final e in list)
                Padding(
                  padding: const EdgeInsets.only(bottom: 10),
                  child: Container(
                    padding: const EdgeInsets.all(14),
                    decoration: softCard(radius: 20),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                      Row(children: [
                        Expanded(
                          child: Text(e.guestName,
                              style: const TextStyle(fontSize: 15.5, fontWeight: FontWeight.w800, color: AppTheme.ink)),
                        ),
                        Text(envelopeEuros(e.amount),
                            style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w800, color: AppTheme.ink)),
                      ]),
                      Text(
                        '${e.createdAt.day.toString().padLeft(2, '0')}/${e.createdAt.month.toString().padLeft(2, '0')}/${e.createdAt.year}',
                        style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted),
                      ),
                      if ((e.message ?? '').isNotEmpty) ...[
                        const SizedBox(height: 8),
                        Text('«${e.message}»',
                            style: const TextStyle(fontSize: 14, height: 1.4, fontStyle: FontStyle.italic, color: AppTheme.ink)),
                      ],
                      const SizedBox(height: 10),
                      Wrap(spacing: 8, runSpacing: 8, children: [
                        FilterChip(
                          label: const Text('Chegou'),
                          selected: e.received,
                          onSelected: (v) => set(e, received: v),
                        ),
                        FilterChip(
                          label: const Text('Agradecido'),
                          selected: e.thanked,
                          onSelected: (v) => set(e, thanked: v),
                        ),
                      ]),
                    ]),
                  ),
                ),
            ],
          ),
        ),
      ),
    );
  }
}
