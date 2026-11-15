import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:copo_dagua_app/shared/utils_clipboard.dart';
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
import '../../../shared/widgets/page_kit.dart';
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
              child: Text(
                iban,
                style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base, letterSpacing: 0.5),
              ),
            ),
            const SizedBox(height: 12),
            ElevatedButton.icon(
              onPressed: () async {
                await copyText(iban.replaceAll(' ', ''));
                if (context.mounted) Navigator.of(context).pop();
              },
              icon: const Icon(Hi.documentDuplicate, size: 18),
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
      background: AppBackground.feed,
      body: Stack(
        children: [
          SafeArea(top: false, 
            bottom: false,
            child: ListView(
              padding: ( const EdgeInsets.only(bottom: 140)).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
              children: [
                // Mockup «Páginas do convidado» → Presentes (2026-11-14).
                Padding(
                  padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 0),
                  child: Align(
                    alignment: Alignment.centerLeft,
                    child: GuestEventsPill(to: weddingId == null ? '/guest-home' : '/guest-home/$weddingId'),
                  ),
                ),
                Padding(
                  padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 0),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      const KitTitle('Presentes'),
                      const SizedBox(height: 16),
                      Container(
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                          const Text('DOS ANFITRIÕES',
                              style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
                          const SizedBox(height: 8),
                          Text(
                            '«${message?.isNotEmpty == true ? message! : 'A vossa presença é o melhor presente. Se quiserem mesmo oferecer algo, deixamos aqui as opções.'}»',
                            style: const TextStyle(fontSize: 15, height: 1.45, fontWeight: FontWeight.w700, color: AppTheme.ink),
                          ),
                        ]),
                      ),
                      // Lista de presentes na app (migração 160).
                      if (wedding != null) ...[const SizedBox(height: 14), GuestGiftListSection(weddingId: wedding.weddingId)],
                      const KitSection('Como oferecer'),
                      if (hasList || iban?.isNotEmpty != true)
                        KitGroup([
                          if (iban?.isNotEmpty != true)
                            const KitRow(
                              title: 'Envelope digital',
                              sub: 'Os anfitriões ainda não indicaram um IBAN.',
                              trailing: KitTag('Ainda não', kind: KitTagKind.neutral),
                            ),
                          if (hasList)
                            KitRow(
                              title: 'Lista de presentes',
                              sub: 'Abre a lista dos anfitriões',
                              chevron: true,
                              onTap: () => _openList(context, wedding),
                            ),
                        ]),
                      if (iban?.isNotEmpty == true) ...[
                      const SizedBox(height: 12),
                      Container(
                        padding: const EdgeInsets.all(16),
                        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.stretch,
                          children: [
                            Row(children: [
                              StickerIcon(Hi.creditCard, turns: StickerIcon.tilt(1)),
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
                                icon: const Icon(Hi.envelope, size: 18),
                                label: const Text('Oferecer um envelope'),
                                style: FilledButton.styleFrom(
                                  backgroundColor: AppTheme.ink,
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
                                  await copyText(iban!.replaceAll(' ', ''));
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
                                      Icon(Hi.documentDuplicate, size: 18, color: AppTheme.accentOliveDark),
                                    ],
                                  ),
                                ),
                              )
                            else
                              const Text('Os anfitriões ainda não indicaram um IBAN.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                            if (wedding != null) _MyEnvelopes(weddingId: wedding.weddingId),
                          ],
                        ),
                      ),
                      ],
                    ],
                  ),
                ),
              ],
            ),
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
              Icon(e.received ? Hi.checkCircle : Hi.clock,
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
