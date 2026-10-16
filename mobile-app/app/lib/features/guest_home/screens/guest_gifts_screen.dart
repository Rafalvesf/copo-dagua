import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

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
    showModalBottomSheet<void>(
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
                color: AppColors.green,
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
    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                const PageHeader(title: 'Presentes', topPadding: 8, showBack: false),
                const SizedBox(height: 16),
                Expanded(
                  child: ListView(
                    padding: const EdgeInsets.fromLTRB(
                      AppTheme.screenMargin,
                      12,
                      AppTheme.screenMargin,
                      120,
                    ),
                    children: [
                      ClipRRect(
                        borderRadius: BorderRadius.circular(AppRadius.xl),
                        child: AspectRatio(
                          aspectRatio: 16 / 10,
                          child: Image.asset('assets/images/gifts_hero.png', fit: BoxFit.cover),
                        ),
                      ),
                      const SizedBox(height: 20),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: const [
                          Text(
                            'O vosso apoio significa tudo ',
                            style: TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink),
                          ),
                          Icon(Icons.favorite_border, size: 16, color: AppStatusColors.declined),
                        ],
                      ),
                      const SizedBox(height: 10),
                      Text(
                        message?.isNotEmpty == true
                            ? message!
                            : 'A tua presença é o nosso maior presente. Mas, se quiseres ajudar-nos a construir o nosso futuro, deixamos aqui algumas sugestões.',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md, height: 1.4),
                      ),
                      const SizedBox(height: 24),
                      SnappyTap(
                        onTap: () => _openList(context, wedding),
                        child: Container(
                          width: double.infinity,
                          padding: const EdgeInsets.symmetric(vertical: 16),
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: AppColors.pink,
                            borderRadius: BorderRadius.circular(AppRadius.pill),
                          ),
                          child: const Text(
                            'Ver lista de presentes',
                            style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink),
                          ),
                        ),
                      ),
                      const SizedBox(height: 14),
                      const Row(
                        children: [
                          Expanded(child: Divider(color: AppTheme.borderMuted)),
                          Padding(
                            padding: EdgeInsets.symmetric(horizontal: 10),
                            child: Text('ou', style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm)),
                          ),
                          Expanded(child: Divider(color: AppTheme.borderMuted)),
                        ],
                      ),
                      const SizedBox(height: 14),
                      SnappyTap(
                        onTap: () => _showIban(context, wedding),
                        child: Container(
                          width: double.infinity,
                          padding: const EdgeInsets.symmetric(vertical: 16),
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: AppTheme.surface,
                            borderRadius: BorderRadius.circular(AppRadius.pill),
                          ),
                          child: const Row(
                            mainAxisSize: MainAxisSize.min,
                            children: [
                              Icon(Icons.edit_outlined, size: 16, color: AppTheme.ink),
                              SizedBox(width: 8),
                              Text('Contribuir com um valor', style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(height: 20),
                      Row(
                        mainAxisAlignment: MainAxisAlignment.center,
                        children: const [
                          Text(
                            'Todo o apoio é recebido com muito carinho! ',
                            style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm),
                          ),
                          Icon(Icons.favorite_border, size: 13, color: AppStatusColors.declined),
                        ],
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
