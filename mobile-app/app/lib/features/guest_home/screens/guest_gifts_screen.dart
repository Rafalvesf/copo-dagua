import 'package:flutter/material.dart';
import 'package:copo_dagua_app/features/guest_home/widgets/guest_events_pill.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../core/gifts/envelopes.dart';
import '../widgets/envelope_sheet.dart';
import '../../gifts/screens/gift_list_screens.dart' show GuestGiftListSection;
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

/// "Presentes" — pedido explícito do utilizador (mockup de referência).
/// Ligado em 2026-10-16 aos campos `weddings.gift_*`
/// (`075_connect_remaining.sql`), que o casal preenche nas Definições:
/// "Ver lista de presentes" abre o link da lista; "Contribuir com um
/// valor" mostra o IBAN para transferência. Sem pagamento dentro da app.
class GuestGiftsScreen extends ConsumerWidget {
  /// Presente só quando aberto a partir de "Modo convidado"
  /// (conta de casal a acompanhar outro casamento), ver [GuestHomeScreen].
  final String? weddingId;

  const GuestGiftsScreen({super.key, this.weddingId});

  void _notSet(BuildContext context, String what) {
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text('Os noivos ainda não indicaram $what.')),
    );
  }

  Future<void> _openList(BuildContext context, GuestWedding? w) async {
    final url = w?.giftListUrl?.trim();
    if (url == null || url.isEmpty) return _notSet(context, 'uma lista de presentes');
    final uri = Uri.tryParse(url.startsWith('http') ? url : 'https://$url');
    if (uri == null || !await launchUrl(uri, mode: LaunchMode.externalApplication)) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível abrir a lista.')),
        );
      }
    }
  }

  void _showIban(BuildContext context, GuestWedding? w) {
    final iban = w?.giftIban?.trim();
    if (iban == null || iban.isEmpty) return _notSet(context, 'um IBAN para contribuições');
    showIslandSheet<void>(
      context: context,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(
        borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl)),
      ),
      builder: (context) => Padding(
        padding: const EdgeInsets.fromLTRB(24, 24, 24, 32),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Text('Contribuir com um valor', style: Theme.of(context).textTheme.titleLarge),
            const SizedBox(height: 6),
            Text(
              'Faz uma transferência para a conta de ${w!.displayNames}.',
              style: const TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
            ),
            const SizedBox(height: 16),
            Container(
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(
                color: AppTheme.accentTint,
                borderRadius: BorderRadius.circular(AppRadius.md),
              ),
              child: SelectableText(
                iban,
                style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base, letterSpacing: 0.5),
              ),
            ),
            const SizedBox(height: 12),
            ElevatedButton.icon(
              onPressed: () async {
                await Clipboard.setData(ClipboardData(text: iban.replaceAll(' ', '')));
                if (context.mounted) Navigator.of(context).pop();
              },
              icon: const Icon(Icons.copy, size: 18),
              label: const Text('Copiar IBAN'),
            ),
          ],
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddings = ref.watch(guestWeddingsProvider).asData?.value ?? const <GuestWedding>[];
    GuestWedding? wedding;
    for (final w in weddings) {
      if (weddingId == null || w.weddingId == weddingId) {
        wedding = w;
        break;
      }
    }
    final message = wedding?.giftMessage?.trim();
    final iban = wedding?.giftIban?.trim();
    final hasList = wedding?.giftListUrl?.trim().isNotEmpty == true;
    // Canvas "Convidado · Presentes".
    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: ListView(
              padding: const EdgeInsets.only(bottom: 140),
              children: [
                const GuestEventsPillRow(),
                const PageHeader(title: 'Presentes', showBack: false, centered: true),
                Padding(
                  padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 14, AppTheme.screenMargin, 0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      // Redesign 2026-10-19 (canvas "Convidado — presentes").
                      GreenHero(
                        label: 'DOS ANFITRIÕES',
                        value: '',
                        doodles: const [Icons.card_giftcard_outlined, Icons.favorite_border, Icons.wb_sunny_outlined],
                        footer: Text(
                          message?.isNotEmpty == true
                              ? message!
                              : 'A vossa presença é o melhor presente. Se quiserem mesmo oferecer algo, deixamos aqui as opções.',
                          style: const TextStyle(fontSize: 16, height: 1.5, color: Colors.white),
                        ),
                      ),
                      const SizedBox(height: 14),
                      // Lista de presentes na app (migração 160).
                      if (wedding != null) GuestGiftListSection(weddingId: wedding.weddingId),
                      if (hasList)
                      SnappyTap(
                        onTap: () => _openList(context, wedding),
                        child: Container(
                          padding: const EdgeInsets.all(14),
                          decoration: softCard(),
                          child: Row(
                            children: [
                              const StickerIcon(Icons.card_giftcard_outlined),
                              const SizedBox(width: 12),
                              Expanded(
                                child: Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    const Text('Lista de presentes', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                    Text(
                                      hasList ? 'Abre a lista dos anfitriões' : 'Os anfitriões ainda não indicaram',
                                      style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted),
                                    ),
                                  ],
                                ),
                              ),
                              const Icon(Icons.chevron_right, size: 18, color: AppTheme.inkMuted),
                            ],
                          ),
                        ),
                      ),
                      const Padding(
                        padding: EdgeInsets.symmetric(vertical: 12),
                        child: Text('ou', textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                      ),
                      Container(
                        padding: const EdgeInsets.all(14),
                        decoration: softCard(),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            Row(children: [
                              StickerIcon(Icons.credit_card_outlined, turns: StickerIcon.tilt(1)),
                              const SizedBox(width: 12),
                              Expanded(
                                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                                  const Text('Envelope digital',
                                      style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                  Text(
                                      iban?.isNotEmpty == true
                                          ? 'Transferência direta para os anfitriões'
                                          : 'Os anfitriões ainda não indicaram um IBAN',
                                      style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                                ]),
                              ),
                            ]),
                            const SizedBox(height: 12),
                            // Envelope digital (migração 156): valor + mensagem,
                            // transferência direta e confirmação para os anfitriões.
                            if (iban?.isNotEmpty == true && wedding != null) ...[
                              FilledButton.icon(
                                onPressed: () => showEnvelopeSheet(context, wedding!),
                                icon: const Icon(Icons.mail_outline_rounded, size: 18),
                                label: const Text('Oferecer um envelope'),
                                style: FilledButton.styleFrom(
                                  backgroundColor: AppTheme.accentOliveDark,
                                  foregroundColor: Colors.white,
                                  minimumSize: const Size.fromHeight(48),
                                  shape: const StadiumBorder(),
                                ),
                              ),
                              const SizedBox(height: 10),
                            ],
                            if (iban?.isNotEmpty == true)
                              SnappyTap(
                                onTap: () async {
                                  await Clipboard.setData(ClipboardData(text: iban!.replaceAll(' ', '')));
                                  if (context.mounted) {
                                    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('IBAN copiado.')));
                                  }
                                },
                                child: Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
                                  decoration: BoxDecoration(color: const Color(0xFFEEF2E9), borderRadius: BorderRadius.circular(14)),
                                  child: Row(
                                    children: [
                                      Expanded(
                                        child: Column(
                                          crossAxisAlignment: CrossAxisAlignment.start,
                                          children: [
                                            Text(iban!, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, letterSpacing: 0.3, color: AppTheme.ink)),
                                          ],
                                        ),
                                      ),
                                      Icon(Icons.copy_rounded, size: 18, color: AppTheme.accentOliveDark),
                                    ],
                                  ),
                                ),
                              )
                            else
                              const Text('Os anfitriões ainda não indicaram um IBAN.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                            const SizedBox(height: 10),
                            const Text(
                              'O dinheiro vai diretamente para a conta dos anfitriões — a À Nossa! não fica com nada.',
                              style: TextStyle(fontSize: 12, color: Color(0xFF8F8B84)),
                            ),
                            if (wedding != null) _MyEnvelopes(weddingId: wedding.weddingId),
                          ],
                        ),
                      ),
                    ],
                  ),
                ),
              ],
            ),
          ),
          Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: GuestBottomNav(current: GuestTab.gifts, weddingId: weddingId),
          ),
        ],
      ),
    );
  }
}

/// Os envelopes que este convidado já ofereceu.
class _MyEnvelopes extends ConsumerWidget {
  final String weddingId;
  const _MyEnvelopes({required this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final list = ref.watch(myEnvelopesProvider(weddingId)).value ?? const <GiftEnvelope>[];
    if (list.isEmpty) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(top: 12),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        const Text('Os teus envelopes', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 4),
        for (final e in list)
          Padding(
            padding: const EdgeInsets.symmetric(vertical: 3),
            child: Row(children: [
              Icon(e.received ? Icons.check_circle_rounded : Icons.schedule_rounded,
                  size: 16, color: e.received ? AppTheme.accentOliveDark : AppTheme.inkMuted),
              const SizedBox(width: 6),
              Expanded(
                child: Text(
                  '${envelopeEuros(e.amount)} · ${e.received ? 'recebido pelos anfitriões' : 'enviado'}',
                  style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
                ),
              ),
            ]),
          ),
      ]),
    );
  }
}
