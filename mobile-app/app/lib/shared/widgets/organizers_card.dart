import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../core/auth/auth_controller.dart';
import '../../core/models/models.dart';
import '../../core/theme/app_theme.dart';
import 'v2_kit.dart';

/// «Quem organiza» no Início do convidado (2026-11-15: "um botão ver
/// perfil para os organizadores o seguirem, e vice-versa"): cada
/// organizador com «Ver perfil», que abre o perfil público para seguir.
class GuestOrganizersCard extends ConsumerWidget {
  final List<EventOrganizerRef> organizers;
  const GuestOrganizersCard({super.key, required this.organizers});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final me = ref.watch(authControllerProvider.select((s) => s.profile?.id));
    final shown = organizers.where((o) => o.id != me).toList();
    if (shown.isEmpty) return const SizedBox.shrink();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const Padding(
          padding: EdgeInsets.only(top: 24, bottom: 12),
          child: Text('QUEM ORGANIZA',
              style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
        ),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
          decoration: BoxDecoration(color: Colors.white, border: AppTheme.cardBorder, borderRadius: BorderRadius.circular(22)),
          child: Column(
            children: [
              for (final (i, o) in shown.indexed) ...[
                if (i > 0) const Divider(height: 1, thickness: 1, color: Color(0xFFD9D9D9)),
                Padding(
                  padding: const EdgeInsets.symmetric(vertical: 10),
                  child: Row(
                    children: [
                      V2Avatar(o.name, size: 44),
                      const SizedBox(width: 12),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(o.name,
                                maxLines: 1,
                                overflow: TextOverflow.ellipsis,
                                style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                            const Text('Organizador', style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
                          ],
                        ),
                      ),
                      const SizedBox(width: 8),
                      RowPillButton(label: 'Ver perfil', onTap: () => context.push('/u/${o.id}')),
                    ],
                  ),
                ),
              ],
            ],
          ),
        ),
      ],
    );
  }
}

/// Botão preto das linhas de lista: pílula 36, texto 13 negrito
/// (DESIGN.md §2 — «Ver evento», «Ver perfil»).
class RowPillButton extends StatelessWidget {
  final String label;
  final VoidCallback? onTap;
  final bool secondary;
  const RowPillButton({super.key, required this.label, this.onTap, this.secondary = false});

  @override
  Widget build(BuildContext context) {
    const text = TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 14, fontWeight: FontWeight.w700);
    const pad = EdgeInsets.symmetric(horizontal: 16);
    if (secondary) {
      return OutlinedButton(
        onPressed: onTap,
        style: OutlinedButton.styleFrom(
          backgroundColor: Colors.white,
          foregroundColor: AppTheme.ink,
          minimumSize: const Size(0, 36),
          padding: pad,
          shape: const StadiumBorder(),
          side: const BorderSide(color: AppTheme.ink, width: 1.5),
          textStyle: text,
          tapTargetSize: MaterialTapTargetSize.shrinkWrap,
        ),
        child: Text(label),
      );
    }
    return FilledButton(
      onPressed: onTap,
      style: FilledButton.styleFrom(
        backgroundColor: AppTheme.ink,
        foregroundColor: Colors.white,
        minimumSize: const Size(0, 36),
        padding: pad,
        shape: const StadiumBorder(),
        textStyle: text,
        tapTargetSize: MaterialTapTargetSize.shrinkWrap,
      ),
      child: Text(label),
    );
  }
}
