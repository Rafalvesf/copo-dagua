import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/wedding_widgets.dart';

class HomeFeedScreen extends ConsumerWidget {
  const HomeFeedScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingState = ref.watch(weddingControllerProvider);
    final wedding = weddingState.wedding;

    return Scaffold(
      appBar: AppBar(
        title: const Text("Copo d'Água"),
        actions: [
          PopupMenuButton<String>(
            onSelected: (value) {
              if (value == 'logout') ref.read(authControllerProvider.notifier).logout();
            },
            itemBuilder: (context) => const [
              PopupMenuItem(value: 'logout', child: Text('Sair')),
            ],
          ),
        ],
      ),
      body: wedding == null
          ? const Center(child: CircularProgressIndicator())
          : ListView(
              padding: const EdgeInsets.all(24),
              children: [
                WeddingCoverHeader(wedding: wedding),
                const SizedBox(height: 28),
                Text('O que precisas hoje?', style: Theme.of(context).textTheme.titleMedium),
                const SizedBox(height: 12),
                GridView.count(
                  crossAxisCount: 2,
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  mainAxisSpacing: 12,
                  crossAxisSpacing: 12,
                  childAspectRatio: 1.15,
                  children: [
                    _FeedTile(
                      icon: Icons.favorite_outline,
                      label: 'O nosso casamento',
                      onTap: () => context.push('/wedding'),
                    ),
                    _FeedTile(
                      icon: Icons.people_outline,
                      label: 'Convidados',
                      onTap: () => context.push('/guests'),
                    ),
                    const _FeedTile(icon: Icons.checklist_outlined, label: 'Checklist'),
                    const _FeedTile(icon: Icons.savings_outlined, label: 'Orçamento'),
                    const _FeedTile(icon: Icons.event_seat_outlined, label: 'Lugares'),
                    const _FeedTile(icon: Icons.storefront_outlined, label: 'Fornecedores'),
                  ],
                ),
              ],
            ),
    );
  }
}

class _FeedTile extends StatelessWidget {
  final IconData icon;
  final String label;
  final VoidCallback? onTap;

  const _FeedTile({required this.icon, required this.label, this.onTap});

  bool get _enabled => onTap != null;

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    return Opacity(
      opacity: _enabled ? 1 : 0.45,
      child: Card(
        child: InkWell(
          borderRadius: BorderRadius.circular(16),
          onTap: onTap,
          child: Padding(
            padding: const EdgeInsets.all(16),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Icon(icon, size: 32, color: colorScheme.primary),
                const SizedBox(height: 10),
                Text(label, textAlign: TextAlign.center, style: Theme.of(context).textTheme.bodyMedium),
                if (!_enabled) ...[
                  const SizedBox(height: 4),
                  Text('Em breve', style: Theme.of(context).textTheme.bodySmall),
                ],
              ],
            ),
          ),
        ),
      ),
    );
  }
}
