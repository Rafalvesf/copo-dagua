import 'package:flutter/material.dart';

import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/guest_bottom_nav.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// "Presentes" — pedido explícito do utilizador (mockup de referência).
/// Sem tabela de registo de presentes nem integração de pagamento real
/// ainda (confirmado explicitamente pelo utilizador: "só UI por agora,
/// sem pagamento real") — os dois botões mostram um aviso honesto em
/// vez de abrir um checkout ou lista externa a fingir que existem.
class GuestGiftsScreen extends StatelessWidget {
  /// Presente só quando aberto a partir de "Modo convidado"
  /// (conta de casal a acompanhar outro casamento), ver [GuestHomeScreen].
  final String? weddingId;

  const GuestGiftsScreen({super.key, this.weddingId});

  void _comingSoon(BuildContext context) {
    ScaffoldMessenger.of(context).showSnackBar(
      const SnackBar(content: Text('Em breve.')),
    );
  }

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Column(
              children: [
                const PageHeader(title: 'Presentes'),
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
                        borderRadius: BorderRadius.circular(24),
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
                            style: TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink),
                          ),
                          Icon(Icons.favorite_border, size: 16, color: AppStatusColors.declined),
                        ],
                      ),
                      const SizedBox(height: 10),
                      const Text(
                        'A tua presença é o nosso maior presente. Mas, se quiseres ajudar-nos a construir o nosso futuro, deixamos aqui algumas sugestões.',
                        textAlign: TextAlign.center,
                        style: TextStyle(color: AppTheme.inkMuted, fontSize: 13.5, height: 1.4),
                      ),
                      const SizedBox(height: 24),
                      SnappyTap(
                        onTap: () => _comingSoon(context),
                        child: Container(
                          width: double.infinity,
                          padding: const EdgeInsets.symmetric(vertical: 16),
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: AppColors.pink,
                            borderRadius: BorderRadius.circular(999),
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
                            child: Text('ou', style: TextStyle(color: AppTheme.inkMuted, fontSize: 12)),
                          ),
                          Expanded(child: Divider(color: AppTheme.borderMuted)),
                        ],
                      ),
                      const SizedBox(height: 14),
                      SnappyTap(
                        onTap: () => _comingSoon(context),
                        child: Container(
                          width: double.infinity,
                          padding: const EdgeInsets.symmetric(vertical: 16),
                          alignment: Alignment.center,
                          decoration: BoxDecoration(
                            color: AppTheme.surface,
                            borderRadius: BorderRadius.circular(999),
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
                            style: TextStyle(color: AppTheme.inkMuted, fontSize: 12.5),
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
