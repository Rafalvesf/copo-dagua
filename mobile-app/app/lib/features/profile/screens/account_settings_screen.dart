import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/social/social.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../home/screens/home_feed_screen.dart' show SupportSummaryCard;
import '../../settings/screens/settings_screen.dart'
    show CoupleAccountSections, GuestAccountSections, SettingsGroup, SettingsRow, SettingsScaffold, SettingsSectionTitle;

/// Definições num botão (mockup "Definições (botão)", 2026-11-12):
/// Organização, Perfil ("Quem vê o meu perfil") e Conta, no estilo do
/// mockup — igual às Definições do parceiro.
class AccountSettingsScreen extends ConsumerWidget {
  const AccountSettingsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider.select((s) => s.profile));
    final organizer = profile?.role == UserRole.couple;
    final me = profile?.id;
    final pub = me == null ? null : ref.watch(publicProfileProvider(me)).value;
    final perfil = pub == null
        ? const <Widget>[]
        : <Widget>[
            const SettingsSectionTitle('Perfil'),
            SettingsGroup(children: [
              SettingsRow(
                label: 'Quem vê o meu perfil',
                value: pub.isPublic ? 'Toda a gente' : 'Só quem me segue',
                onTap: () async {
                  try {
                    await setProfilePublic(!pub.isPublic);
                    ref.invalidate(publicProfileProvider(pub.id));
                  } catch (_) {}
                },
              ),
            ]),
          ];
    final hasEvent = organizer && ref.watch(weddingControllerProvider).wedding != null;
    return SettingsScaffold(
      title: 'Definições',
      children: [
        const SupportSummaryCard(),
        if (hasEvent) CoupleAccountSections(afterOrganization: perfil) else ...[
          ...perfil,
          const GuestAccountSections(),
        ],
      ],
    );
  }
}
