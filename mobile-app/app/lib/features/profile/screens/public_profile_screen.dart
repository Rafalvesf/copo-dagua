import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/social/social.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../events/screens/eventos_screen.dart' show EventPosterCard;
import '../profile_widgets.dart';

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

  Widget _round(IconData icon, String tip, VoidCallback onTap) => Tooltip(
        message: tip,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            width: 44,
            height: 44,
            alignment: Alignment.center,
            decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
            child: Icon(icon, size: 22, color: AppTheme.ink),
          ),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final async = ref.watch(publicProfileProvider(widget.profileId));
    final p = async.value;
    return GradientScaffold(
      background: AppBackground.feed,
      body: async.isLoading && p == null
          ? const Center(child: CircularProgressIndicator())
          : p == null
              ? const Center(child: Text('Perfil indisponível.'))
              : ListView(
                  padding: EdgeInsets.fromLTRB(0, MediaQuery.paddingOf(context).top + 16, 0, 60),
                  children: [
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                      child: Row(children: [
                        _round(Hi.chevronLeft, 'Voltar', () => Navigator.of(context).maybePop()),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Text(p.username?.isNotEmpty == true ? '@${p.username}' : p.name,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                        ),
                      ]),
                    ),
                    const SizedBox(height: 18),
                    Padding(
                      padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                      child: ProfileCard(
                        avatar: V2Avatar(p.name, size: 76, imageUrl: p.avatarUrl, flat: true),
                        name: p.name,
                        handleLine: p.city ?? '',
                        bio: p.bio,
                        events: p.events,
                        followers: p.followers,
                        following: p.following,
                        followedBy: FollowedByRow(people: p.mutual, text: followedByLine(p.mutual, p.mutualCount)),
                        buttons: p.isMe
                            ? const []
                            : [
                                ProfileButton(p.iFollow ? 'A seguir' : (p.followsMe ? 'Seguir também' : 'Seguir'),
                                    dark: !p.iFollow, onTap: _busy ? null : () => _follow(p)),
                              ],
                      ),
                    ),
                    if (p.upcoming.isNotEmpty) ...[
                      const ProfileSectionTitle('Próximos eventos'),
                      for (final e in p.upcoming)
                        Padding(
                          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 12),
                          child: EventPosterCard(event: e),
                        ),
                      const Padding(
                        padding: EdgeInsets.symmetric(horizontal: AppTheme.screenMargin + 2),
                        child: Text('Só aparecem eventos públicos ou a que foste convidado.',
                            style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                      ),
                    ],
                    FollowingSection(profileId: p.id, people: p.followingPeople, partners: p.followingPartners),
                  ],
                ),
    );
  }
}
