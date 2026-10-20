import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

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
                                  const Text('Contribuir com um valor',
                                      style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                  if (iban?.isNotEmpty == true)
                                    Text('IBAN · ${wedding?.partnerName1 ?? ''}',
                                        style: const TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
                                ]),
                              ),
                            ]),
                            const SizedBox(height: 12),
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
                              'Na descrição, escreve o teu nome para saberem de quem é.',
                              style: TextStyle(fontSize: 12, color: Color(0xFF8F8B84)),
                            ),
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
