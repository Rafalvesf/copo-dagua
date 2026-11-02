import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/v2_kit.dart';

/// Saída do modo convidado (pedido 2026-11): botão no topo, com as três
/// linhas e a dizer para onde se volta. Em todos os separadores do modo
/// convidado (Início, Galeria, Presentes e Perfil).
class GuestEventsPill extends ConsumerWidget {
  const GuestEventsPill({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(guestWeddingsProvider).value?.length ?? 0;
    return Semantics(
      button: true,
      label: 'Voltar a Os meus eventos',
      child: SnappyTap(
        onTap: () => context.go('/eventos?tab=meus'),
        child: Container(
          height: 44,
          padding: const EdgeInsets.symmetric(horizontal: 14),
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(999), boxShadow: softShadow),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              const Icon(Icons.menu_rounded, size: 20, color: AppTheme.ink),
              const SizedBox(width: 8),
              Text(
                count > 1 ? 'Os meus eventos ($count)' : 'Os meus eventos',
                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/// Linha do topo com o botão, para os ecrãs com cabeçalho próprio.
class GuestEventsPillRow extends StatelessWidget {
  const GuestEventsPillRow({super.key});

  @override
  Widget build(BuildContext context) => const Padding(
        padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 0),
        child: Align(alignment: Alignment.centerLeft, child: GuestEventsPill()),
      );
}
