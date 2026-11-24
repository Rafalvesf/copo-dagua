import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/chat/group_chat.dart' show openDirectChat, DirectChatUnavailable;

import '../../../core/moderation/moderation.dart' show blockProfile;
import '../../../core/social/social.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/reduced_top_bar.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../events/screens/eventos_screen.dart' show EventPosterCard;
import '../profile_widgets.dart';
import '../../../shared/widgets/reviews_left.dart';
import 'package:copo_dagua_app/shared/widgets/island_sheet.dart';
import 'package:flutter/services.dart' show Clipboard, ClipboardData;
import 'package:share_plus/share_plus.dart';
import '../../../shared/public_link.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

/// Perfil de outra pessoa (mockup "Perfil de um amigo", 2026-11-12):
/// Seguir / Mensagem, quem a segue em comum, os próximos eventos
/// (públicos ou a que fui convidado) e quem ela segue.
class PublicProfileScreen extends ConsumerStatefulWidget {
  final String profileId;
  const PublicProfileScreen({super.key, required this.profileId});

  @override
  ConsumerState<PublicProfileScreen> createState() => _PublicProfileScreenState();
}

class _PublicProfileScreenState extends ConsumerState<PublicProfileScreen> {
  bool _busy = false;
  // Topo reduzido como nos parceiros (pedido 2026-11-22).
  final _scroll = ScrollController();
  final _eventsKey = GlobalKey();
  final _followingKey = GlobalKey();
  final _reviewsKey = GlobalKey();

  @override
  void dispose() {
    _scroll.dispose();
    super.dispose();
  }

  Future<void> _follow(PublicProfile p) async {
    setState(() => _busy = true);
    try {
      await followPerson(p.id, !p.iFollow);
      ref.invalidate(publicProfileProvider(p.id));
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível. Tenta outra vez.')));
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  /// «Mensagem» (192): conversa direta na app.
  Future<void> _message(PublicProfile p) async {
    setState(() => _busy = true);
    try {
      final g = await openDirectChat(p.id);
      if (mounted) await context.push('/group/${g.id}', extra: g);
    } on DirectChatUnavailable catch (e) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(e.message)));
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível abrir a conversa.')));
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Widget _round(Widget icon, String tip, VoidCallback onTap) => Tooltip(
        message: tip,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            width: 44,
            height: 44,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: AppTheme.ink,
              shape: BoxShape.circle,
              border: Border.all(color: Colors.white, width: 2),
            ),
            child: icon,
          ),
        ),
      );

  Future<void> _share(PublicProfile p) async {
    final link = publicLink('/u/${p.id}');
    try {
      await SharePlus.instance.share(ShareParams(text: '${p.name} na À Nossa!: $link', subject: p.name));
    } catch (_) {
      await Clipboard.setData(ClipboardData(text: link));
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
    }
  }

  @override
  Widget build(BuildContext context) {
    final async = ref.watch(publicProfileProvider(widget.profileId));
    final p = async.value;
    final top = MediaQuery.paddingOf(context).top;
    final bottom = MediaQuery.paddingOf(context).bottom;
    // Mockup «Perfil do organizador» (2026-11-20): faixa de cor no topo
    // (sem foto, por isso os botões são os brancos cheios 44), a cabeça do
    // perfil por cima dela, os próximos eventos num carrossel, quem segue
    // e a barra fixa em baixo com Mensagem e Seguir.
    return GradientScaffold(
      // Fundo creme liso (mockup).
      gradientOverride: const LinearGradient(colors: [Color(0xFFF2F2F2), Color(0xFFF2F2F2)]),
      body: async.isLoading && p == null
          ? const SkeletonProfilePage()
          : p == null
              ? const Center(child: Text('Perfil indisponível.'))
              : Stack(children: [
                  ListView(
                    controller: _scroll,
                    padding: EdgeInsets.only(bottom: p.isMe ? 60 : bottom + 130),
                    children: [
                      Container(
                        height: 200 + top,
                        // Faixa preta (2026-11-23, mockup «Perfis com contraste»).
                        color: AppTheme.ink,
                        padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, top + 8, AppTheme.screenMargin, 0),
                        alignment: Alignment.topCenter,
                        child: Row(children: [
                          _round(const Icon(Hi.chevronLeft, size: 20, color: Colors.white), 'Voltar', () => Navigator.of(context).maybePop()),
                          const Spacer(),
                          _round(const Icon(Hi.arrowUpOnSquare, size: 20, color: Colors.white), 'Partilhar perfil', () => _share(p)),
                          if (!p.isMe) ...[
                            const SizedBox(width: 10),
                            IslandMenuButton<String>(
                              tooltip: 'Mais opções',
                              onSelected: (_) => blockProfile(context, ref, p.id, p.name),
                              itemBuilder: (_) => const [PopupMenuItem(value: 'block', child: Text('Bloquear'))],
                              child: Container(
                                width: 44,
                                height: 44,
                                alignment: Alignment.center,
                                decoration: BoxDecoration(
                                  color: AppTheme.ink,
                                  shape: BoxShape.circle,
                                  border: Border.all(color: Colors.white, width: 2),
                                ),
                                child: const Icon(Hi.ellipsisHorizontal, size: 20, color: Colors.white),
                              ),
                            ),
                          ],
                        ]),
                      ),
                      // O perfil já não tem caixa branca (2026-11-22): fica
                      // por baixo da faixa, sem a sobrepor.
                      Transform.translate(
                        offset: Offset.zero,
                        child: Padding(
                          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
                          child: ProfileCard_Users(
                            avatar: V2Avatar(p.name, size: 76, imageUrl: p.avatarUrl, flat: true),
                            name: p.name,
                            handleLine: [
                              if (p.username?.isNotEmpty == true) '@${p.username}',
                              if (p.city?.isNotEmpty == true) p.city!,
                            ].join(' · '),
                            bio: p.bio,
                            events: p.events,
                            followers: p.followers,
                            following: p.following,
                            followedBy: FollowedByRow(people: p.mutual, text: followedByLine(p.mutual, p.mutualCount)),
                            // Seguir e Mensagem estão na barra de baixo.
                            buttons: const [],
                          ),
                        ),
                      ),
                      Transform.translate(
                        offset: Offset.zero,
                        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                          if (p.upcoming.isNotEmpty) ...[
                            ProfileSectionTitle(
                              key: _eventsKey,
                              'Próximos eventos',
                              action: '${p.upcoming.length} ${p.upcoming.length == 1 ? 'evento' : 'eventos'}',
                            ),
                            SingleChildScrollView(
                              scrollDirection: Axis.horizontal,
                              clipBehavior: Clip.none,
                              padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                              child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                                for (var i = 0; i < p.upcoming.length; i++) ...[
                                  if (i > 0) const SizedBox(width: 12),
                                  SizedBox(
                                    width: p.upcoming.length == 1
                                        ? MediaQuery.sizeOf(context).width - AppTheme.screenMargin * 2
                                        : 300,
                                    child: EventPosterCard(event: p.upcoming[i]),
                                  ),
                                ],
                              ]),
                            ),
                            const Padding(
                              padding: EdgeInsets.fromLTRB(AppTheme.screenMargin + 2, 12, AppTheme.screenMargin, 0),
                              child: Text('Só aparecem eventos públicos ou a que foste convidado.',
                                  style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                            ),
                          ],
                          KeyedSubtree(
                            key: _followingKey,
                            child: FollowingSection(profileId: p.id, people: p.followingPeople, partners: p.followingPartners),
                          ),
                          // Avaliações que deixou (mockup «Avaliações · resposta do
                          // parceiro», 2026-11-22): as avaliações já são públicas
                          // na página de cada parceiro.
                          KeyedSubtree(key: _reviewsKey, child: ReviewsLeftSection(profileId: p.id)),
                        ]),
                      ),
                    ],
                  ),
                  // Topo reduzido (barra branca + atalhos), como nos parceiros.
                  Positioned(
                    left: 0,
                    right: 0,
                    top: 0,
                    child: ReducedTopBar(
                      scroll: _scroll,
                      showAfter: 170,
                      leading: ReducedTopAction(Hi.chevronLeft, label: 'Voltar', onTap: () => Navigator.of(context).maybePop()),
                      thumb: V2Avatar(p.name, size: 32, imageUrl: p.avatarUrl, flat: true),
                      title: p.name,
                      meta: [
                        if (p.username?.isNotEmpty == true) '@${p.username}',
                        if (p.city?.isNotEmpty == true) p.city!,
                      ].join(' · '),
                      actions: [
                        ReducedTopAction(Hi.arrowUpOnSquare, label: 'Partilhar perfil', onTap: () => _share(p)),
                        if (!p.isMe)
                          IslandMenuButton<String>(
                            tooltip: 'Mais opções',
                            onSelected: (_) => blockProfile(context, ref, p.id, p.name),
                            itemBuilder: (_) => const [PopupMenuItem(value: 'block', child: Text('Bloquear'))],
                            child: Container(
                              width: 44,
                              height: 44,
                              alignment: Alignment.center,
                              decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
                              child: const Icon(Hi.ellipsisHorizontal, size: 20, color: Colors.white),
                            ),
                          ),
                      ],
                    ),
                  ),
                  if (!p.isMe)
                    Positioned(
                      left: AppTheme.screenMargin,
                      right: AppTheme.screenMargin,
                      bottom: bottom > 20 ? bottom : 20,
                      child: Container(
                        height: 76,
                        padding: const EdgeInsets.symmetric(horizontal: 12),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(35),
                          boxShadow: AppTheme.navBarShadow,
                        ),
                        child: Row(children: [
                          Expanded(
                            child: ProfileButton('Mensagem', height: 52, onTap: _busy ? null : () => _message(p)),
                          ),
                          const SizedBox(width: 8),
                          Expanded(
                            child: ProfileButton(
                              p.iFollow ? 'A seguir' : (p.followsMe ? 'Seguir também' : 'Seguir'),
                              height: 52,
                              dark: !p.iFollow,
                              onTap: _busy ? null : () => _follow(p),
                            ),
                          ),
                        ]),
                      ),
                    ),
                ]),
    );
  }
}
