import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:share_plus/share_plus.dart';
import '../../../shared/public_link.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';
import '../../../core/partner_app/partner_app_providers.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/partner_notification_bell.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../core/social/social.dart';
import '../../profile/profile_widgets.dart';

class PartnerProfileScreen extends ConsumerStatefulWidget {
  const PartnerProfileScreen({super.key});

  @override
  ConsumerState<PartnerProfileScreen> createState() => _PartnerProfileScreenState();
}

class _PartnerProfileScreenState extends ConsumerState<PartnerProfileScreen> {
  @override
  void initState() {
    super.initState();
    // Pedido explícito do utilizador: "o pedido de alterações no
    // dashboard/crm não está a refletir as mensagens na app do
    // cliente" — o `status`/`rejection_reason` só viviam na cache local
    // do `Profile`, preenchida uma vez no login; uma ação do admin
    // (`request_changes_from_partner`, `024_partner_changes_required.sql`)
    // feita depois disso nunca chegava ao ecrã sem sair e voltar a
    // entrar. Relê o estado real sempre que este ecrã é aberto, mesmo
    // padrão de `refreshReviewStatus()` já usado depois de cada escrita
    // do próprio parceiro (`partner_profile_controller.dart`).
    Future.microtask(
      () => ref.read(partnerProfileControllerProvider.notifier).refreshReviewStatus().catchError((_) {}),
    );
  }

  @override
  Widget build(BuildContext context) {
    final profile = ref.watch(authControllerProvider).profile;

    return GradientScaffold(
      background: AppBackground.subtle,
      body: Stack(
        children: [
          SafeArea(top: false, 
            bottom: false,
            child: ListView(
              padding: ( const EdgeInsets.fromLTRB(0, 20, 0, 140)).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
              children: [
                Padding(
                  padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                    // Como o Perfil do organizador (mockup 2026-11-12): título
                    // à esquerda, avisos e Definições em botões redondos.
                    Row(children: [
                      const Expanded(
                        child: Text('Perfil', style: TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      ),
                      const PartnerNotificationBell(round: true),
                      const SizedBox(width: 10),
                      Tooltip(
                        message: 'Definições',
                        child: SnappyTap(
                          onTap: () => context.push('/settings'),
                          child: Container(
                            width: 44,
                            height: 44,
                            alignment: Alignment.center,
                            decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
                            child: const Icon(Hi.cog6Tooth, size: 20, color: AppTheme.ink),
                          ),
                        ),
                      ),
                    ]),
                    const SizedBox(height: 18),
                    _BusinessHeader(profile: profile),
                    if (profile != null) ...[
                      const SizedBox(height: 18),
                      _MyLinkCard(partnerId: profile.id),
                      const SizedBox(height: 18),
                      const Padding(
                        padding: EdgeInsets.symmetric(horizontal: 4),
                        child: Text(
                          '"Partilhar perfil" abre a partilha do telemóvel com este link. Quem o abrir vê a tua página pública, mesmo sem a app.',
                          style: TextStyle(fontSize: 13, height: 1.4, fontWeight: FontWeight.w700, color: AppTheme.inkMuted),
                        ),
                      ),
                    ],
                    if (profile?.partnerProfileStatus != null &&
                        profile!.partnerProfileStatus != 'published') ...[
                      // Pagamentos obrigatórios para a verificação (2026-10-20).
                      const _PaymentsRequiredCard(),
                      const SizedBox(height: 16),
                      _ReviewStatusCard(
                        status: profile.partnerProfileStatus!,
                        rejectionReason: profile.rejectionReason,
                      ),
                    ],
                  ]),
                ),
                if (profile != null) _PartnerFollowing(profileId: profile.id),
              ],
            ),
          ),
          const Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: PartnerBottomNav(current: PartnerTab.profile),
          ),
        ],
      ),
    );
  }
}

class _BusinessHeader extends ConsumerStatefulWidget {
  final Profile? profile;

  const _BusinessHeader({required this.profile});

  @override
  ConsumerState<_BusinessHeader> createState() => _BusinessHeaderState();
}

class _BusinessHeaderState extends ConsumerState<_BusinessHeader> {
  bool _uploading = false;

  /// Foto de perfil do parceiro (pedido do utilizador, 2026-10-20): fica
  /// como logótipo do negócio (o que os organizadores veem) e como foto da
  /// conta (comentários, publicações, chat).
  Future<void> _pickPhoto() async {
    final file = await ImagePicker().pickImage(source: ImageSource.gallery, imageQuality: 85, maxWidth: 1024);
    if (file == null || !mounted) return;
    setState(() => _uploading = true);
    try {
      await ref.read(partnerProfileControllerProvider.notifier).uploadLogo(file);
      await ref.read(authControllerProvider.notifier).uploadAvatarPhoto(file);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível carregar a foto.')));
      }
    } finally {
      if (mounted) setState(() => _uploading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final p = widget.profile;
    if (p == null) return const SizedBox.shrink();
    final name = (p.businessName?.isEmpty ?? true) ? (p.fullName ?? '') : p.businessName!;
    final meta = [
      if (p.category != null) p.category!.label,
      if (p.location != null && p.location!.isNotEmpty) p.location!,
    ].join(' · ');
    final stats = ref.watch(partnerPublicStatsProvider(p.id)).value;
    final follow = ref.watch(partnerFollowInfoProvider(p.id)).value;
    final pub = ref.watch(publicProfileProvider(p.id)).value;
    return ProfileCard(
      avatar: Semantics(
        button: true,
        label: 'Mudar foto de perfil',
        child: GestureDetector(
          onTap: _uploading ? null : _pickPhoto,
          child: Stack(children: [
            V2Avatar(name, size: 76, imageUrl: p.logoUrl ?? p.avatarUrl, flat: true),
            if (_uploading)
              const Positioned.fill(
                child: Center(child: SizedBox(width: 24, height: 24, child: CircularProgressIndicator(strokeWidth: 2.5))),
              ),
          ]),
        ),
      ),
      name: name,
      handleLine: meta,
      bio: p.businessDescription,
      // Mockup "Parceiro · o meu perfil" (2026-11-12).
      labels: const ['Eventos', 'Seguidores', 'A seguir'],
      events: stats?.eventsDone ?? 0,
      followers: stats?.followers ?? follow?.followers ?? 0,
      following: pub?.following ?? 0,
      buttons: [
        ProfileButton('Editar perfil', onTap: () => showPartnerEditProfileSheet(context)),
        ProfileButton('Partilhar perfil', dark: true, onTap: () => sharePartnerProfile(context, p.id, name)),
      ],
    );
  }
}

class _PartnerFollowing extends ConsumerWidget {
  final String profileId;
  const _PartnerFollowing({required this.profileId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final pub = ref.watch(publicProfileProvider(profileId)).value;
    if (pub == null || pub.followingPeople + pub.followingPartners == 0) return const SizedBox.shrink();
    return FollowingSection(profileId: profileId, people: pub.followingPeople, partners: pub.followingPartners);
  }
}

/// Estado de revisão de `partner_profiles.status` — sem nenhum botão de
/// submissão manual (pedido explícito do utilizador: "Não quero um
/// botão separado de 'Enviar para revisão'"). Em `draft`/
/// `changes_required`, a transição para `pending_review` acontece
/// sozinha assim que os requisitos ficam completos
/// (`maybe_auto_submit_partner_profile()`,
/// `026_partner_auto_submission.sql`) — este cartão só informa, nunca
/// aciona nada.
class _ReviewStatusCard extends StatelessWidget {
  final String status;
  final String? rejectionReason;

  const _ReviewStatusCard({required this.status, required this.rejectionReason});

  @override
  Widget build(BuildContext context) {
    final (label, subtitle, color) = switch (status) {
      'draft' => (
          'Rascunho',
          'Completa os passos em falta (incluindo ativar os pagamentos) — o perfil é enviado para revisão sozinho assim que estiver tudo pronto.',
          AppTheme.inkMuted,
        ),
      'pending_review' => (
          'Em revisão pela equipa À Nossa!',
          'Recebemos todas as informações necessárias. Avisamos assim que houver novidades.',
          AppTheme.accentOliveDark,
        ),
      'changes_required' => (
          'Alterações pedidas',
          null,
          Colors.orange,
        ),
      'published' => ('Publicado — visível aos clientes', null, AppTheme.accentOliveDark),
      'rejected' => ('Candidatura recusada', null, Colors.red),
      'suspended' => ('Suspenso', null, Colors.red),
      _ => (status, null, AppTheme.inkMuted),
    };

    return Container(
      padding: const EdgeInsets.all(14),
      decoration: softCard(radius: 18),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(
            label,
            style: TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.md, color: color),
          ),
          if (subtitle != null) ...[
            const SizedBox(height: 6),
            Text(
              subtitle,
              style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
            ),
          ],
          if ((status == 'changes_required' || status == 'rejected') &&
              rejectionReason != null &&
              rejectionReason!.isNotEmpty) ...[
            const SizedBox(height: 6),
            Text(
              rejectionReason!,
              style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
            ),
          ],
        ],
      ),
    );
  }
}

/// Aviso enquanto o perfil não está publicado e os pagamentos ainda não
/// estão ativos: é obrigatório ativá-los para o perfil ser verificado e
/// aparecer na página dos parceiros (pedido do utilizador, 2026-10-20;
/// regra no servidor: `104_payments_required_for_verification.sql`).
class _PaymentsRequiredCard extends ConsumerWidget {
  const _PaymentsRequiredCard();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final enabled = ref.watch(partnerStripeStatusProvider).maybeWhen(data: (s) => s.chargesEnabled, orElse: () => true);
    if (enabled) return const SizedBox.shrink();
    return Padding(
      padding: const EdgeInsets.only(top: 16),
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: softCard(radius: 18),
        child: Row(children: [
          Icon(Hi.creditCard, color: AppTheme.accentOliveDark),
          const SizedBox(width: 12),
          const Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Ativa os pagamentos', style: TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.md, color: AppTheme.ink)),
              SizedBox(height: 2),
              Text('Obrigatório para o teu perfil ser verificado e aparecer aos organizadores.',
                  style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
            ]),
          ),
          const SizedBox(width: 8),
          FilledButton(
            onPressed: () => context.push('/partner-payments'),
            style: FilledButton.styleFrom(backgroundColor: AppTheme.ink, shape: const StadiumBorder()),
            child: const Text('Ativar'),
          ),
        ]),
      ),
    );
  }
}


/// Link da página pública do parceiro (`/parceiro/:id`).
String partnerPublicLink(String partnerId) => publicLink('/parceiro/$partnerId');

Future<void> sharePartnerProfile(BuildContext context, String partnerId, String name) async {
  final link = partnerPublicLink(partnerId);
  try {
    await SharePlus.instance.share(ShareParams(text: '$name na À Nossa!: $link', subject: name));
  } catch (_) {
    await Clipboard.setData(ClipboardData(text: link));
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
    }
  }
}

/// "O teu link" + Copiar (mockup "Parceiro · o meu perfil").
class _MyLinkCard extends StatelessWidget {
  final String partnerId;
  const _MyLinkCard({required this.partnerId});

  @override
  Widget build(BuildContext context) {
    final link = partnerPublicLink(partnerId);
    final shown = link.replaceFirst(RegExp(r'^https?://'), '');
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 14, 14, 14),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Row(children: [
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
            const Text('O teu link', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 2),
            Text(shown,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          ]),
        ),
        const SizedBox(width: 12),
        SnappyTap(
          onTap: () async {
            await Clipboard.setData(ClipboardData(text: link));
            if (context.mounted) {
              ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
            }
          },
          child: Container(
            height: 36,
            padding: const EdgeInsets.symmetric(horizontal: 14),
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: Colors.white,
              borderRadius: BorderRadius.circular(18),
              border: Border.all(color: AppTheme.ink, width: 1.5),
            ),
            child: const Text('Copiar', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
        ),
      ]),
    );
  }
}
