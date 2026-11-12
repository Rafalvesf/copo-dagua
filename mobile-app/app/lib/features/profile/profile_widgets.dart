import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../core/profile/username.dart';
import '../../core/social/social.dart';
import '../../core/theme/app_theme.dart';
import '../../shared/widgets/snappy_tap.dart';
import '../../shared/widgets/v2_kit.dart';

/// Peças do Perfil (mockup "Perfil", 2026-11-12).

/// Botão do perfil: preto cheio ou branco com contorno.
class ProfileButton extends StatelessWidget {
  final String label;
  final bool dark;
  final VoidCallback? onTap;
  final double height;
  const ProfileButton(this.label, {super.key, this.dark = false, this.onTap, this.height = 44});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Container(
          height: height,
          alignment: Alignment.center,
          padding: const EdgeInsets.symmetric(horizontal: 14),
          decoration: BoxDecoration(
            color: dark ? AppTheme.ink : Colors.white,
            borderRadius: BorderRadius.circular(height / 2),
            border: dark ? null : Border.all(color: AppTheme.ink, width: 1.5),
          ),
          child: Text(label,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(fontSize: height < 40 ? 13 : 14, fontWeight: FontWeight.w700, color: dark ? Colors.white : AppTheme.ink)),
        ),
      );
}

/// Bolinhas sobrepostas com as caras e "Seguida por …".
class FollowedByRow extends StatelessWidget {
  final List<MiniPerson> people;
  final String text;
  const FollowedByRow({super.key, required this.people, required this.text});

  @override
  Widget build(BuildContext context) {
    if (people.isEmpty || text.isEmpty) return const SizedBox.shrink();
    final shown = people.take(3).toList();
    return Row(children: [
      SizedBox(
        width: 24 + (shown.length - 1) * 17,
        height: 24,
        child: Stack(children: [
          for (var i = 0; i < shown.length; i++)
            Positioned(
              left: i * 17,
              child: Container(
                decoration: BoxDecoration(shape: BoxShape.circle, border: Border.all(color: Colors.white, width: 2)),
                child: V2Avatar(shown[i].name, size: 20, imageUrl: shown[i].avatarUrl, flat: true),
              ),
            ),
        ]),
      ),
      const SizedBox(width: 8),
      Expanded(
        child: Text(text,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
      ),
    ]);
  }
}

/// Cartão branco do topo: foto, números, nome, @ · cidade, bio e botões.
class ProfileCard extends StatelessWidget {
  final Widget avatar;
  final String name;
  final String handleLine;
  final String? bio;
  final int events;
  final int followers;
  final int following;
  final Widget? followedBy;

  /// Por baixo da descrição (o parceiro põe aqui as etiquetas).
  final Widget? extra;

  /// Ao lado do nome (o visto de verificado do parceiro).
  final Widget? nameBadge;
  final List<Widget> buttons;
  /// Etiquetas dos três números (o parceiro mostra avaliações).
  final List<String> labels;
  const ProfileCard({
    super.key,
    required this.avatar,
    required this.name,
    required this.handleLine,
    this.bio,
    required this.events,
    required this.followers,
    required this.following,
    this.followedBy,
    this.extra,
    this.nameBadge,
    this.buttons = const [],
    this.labels = const ['Eventos', 'Seguidores', 'A seguir'],
  });

  Widget _stat(int n, String label) => Column(children: [
        Text('$n', style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        Text(label, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
      ]);

  @override
  Widget build(BuildContext context) => Container(
        padding: const EdgeInsets.all(18),
        // Sem sombra (mockup).
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            SizedBox(width: 76, height: 76, child: avatar),
            const SizedBox(width: 16),
            Expanded(child: _stat(events, labels[0])),
            Expanded(child: _stat(followers, labels[1])),
            Expanded(child: _stat(following, labels[2])),
          ]),
          const SizedBox(height: 14),
          Row(children: [
            Flexible(child: Text(name, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink))),
            ?nameBadge,
          ]),
          if (handleLine.isNotEmpty) ...[
            const SizedBox(height: 2),
            Text(handleLine, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          ],
          if (bio != null && bio!.trim().isNotEmpty) ...[
            const SizedBox(height: 8),
            Text(bio!.trim(),
                textAlign: TextAlign.justify,
                style: const TextStyle(fontSize: 14, height: 1.4, fontWeight: FontWeight.w600, color: AppTheme.ink)),
          ],
          if (extra != null) ...[const SizedBox(height: 12), extra!],
          if (followedBy != null) ...[const SizedBox(height: 14), followedBy!],
          if (buttons.isNotEmpty) ...[
            const SizedBox(height: 14),
            Row(children: [
              for (var i = 0; i < buttons.length; i++) ...[
                if (i > 0) const SizedBox(width: 8),
                Expanded(child: buttons[i]),
              ],
            ]),
          ],
        ]),
      );
}

/// Título de secção à esquerda, com um link à direita.
class ProfileSectionTitle extends StatelessWidget {
  final String title;
  final String? action;
  final VoidCallback? onAction;
  const ProfileSectionTitle(this.title, {super.key, this.action, this.onAction});

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin + 2, 22, AppTheme.screenMargin, 10),
        child: Row(children: [
          Expanded(child: Text(title, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink))),
          if (action != null)
            SnappyTap(
              onTap: onAction,
              child: Text(action!, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
            ),
        ]),
      );
}

/// "A seguir": Amigos · N | Parceiros · N e a lista com Seguir / A seguir.
class FollowingSection extends ConsumerStatefulWidget {
  final String profileId;
  final int people;
  final int partners;
  const FollowingSection({super.key, required this.profileId, required this.people, required this.partners});

  @override
  ConsumerState<FollowingSection> createState() => _FollowingSectionState();
}

class _FollowingSectionState extends ConsumerState<FollowingSection> {
  bool _partners = false;
  bool _all = false;
  final _busy = <String>{};

  Widget _chip(String label, bool on, VoidCallback onTap) => SnappyTap(
        onTap: onTap,
        child: Container(
          height: 40,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: on ? AppTheme.accentOliveDark : Colors.white,
            borderRadius: BorderRadius.circular(20),
            
          ),
          child: Text(label, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: on ? Colors.white : AppTheme.ink)),
        ),
      );

  Future<void> _toggle(FollowRow r) async {
    setState(() => _busy.add(r.id));
    try {
      if (_partners) {
        await followPartner(r.id, !r.iFollow);
      } else {
        await followPerson(r.id, !r.iFollow);
      }
      ref.invalidate(followListProvider((widget.profileId, _partners ? 'partners' : 'people')));
      ref.invalidate(publicProfileProvider(widget.profileId));
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível. Tenta outra vez.')));
      }
    } finally {
      if (mounted) setState(() => _busy.remove(r.id));
    }
  }

  @override
  Widget build(BuildContext context) {
    final kind = _partners ? 'partners' : 'people';
    final rows = ref.watch(followListProvider((widget.profileId, kind))).value ?? const <FollowRow>[];
    final total = widget.people + widget.partners;
    final shown = _all ? rows : rows.take(5).toList();
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      ProfileSectionTitle('A seguir',
          action: total > 5 && !_all ? 'Ver todos ($total)' : null, onAction: () => setState(() => _all = true)),
      Padding(
        padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
        child: Row(children: [
          _chip('Amigos · ${widget.people}', !_partners, () => setState(() => _partners = false)),
          const SizedBox(width: 8),
          _chip('Parceiros · ${widget.partners}', _partners, () => setState(() => _partners = true)),
        ]),
      ),
      const SizedBox(height: 12),
      if (shown.isEmpty)
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin + 2),
          child: Text(_partners ? 'Ainda não segue parceiros.' : 'Ainda não segue ninguém.',
              style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
        )
      else
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
          child: Container(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 4),
            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
            child: Column(children: [
              for (var i = 0; i < shown.length; i++)
                Container(
                  padding: const EdgeInsets.symmetric(vertical: 12),
                  decoration: BoxDecoration(
                    border: i == shown.length - 1 ? null : const Border(bottom: BorderSide(color: Color(0xFFECE7DC))),
                  ),
                  child: Row(children: [
                    Expanded(
                      child: SnappyTap(
                        onTap: _partners || shown[i].isMe ? null : () => context.push('/u/${shown[i].id}'),
                        child: Row(children: [
                          V2Avatar(shown[i].name, size: 44, imageUrl: shown[i].avatarUrl, flat: true),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                              Text(shown[i].name,
                                  maxLines: 1,
                                  overflow: TextOverflow.ellipsis,
                                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                              if (shown[i].subtitle.isNotEmpty)
                                Text(shown[i].subtitle,
                                    maxLines: 1,
                                    overflow: TextOverflow.ellipsis,
                                    style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                            ]),
                          ),
                        ]),
                      ),
                    ),
                    if (!shown[i].isMe) ...[
                      const SizedBox(width: 8),
                      ProfileButton(
                        shown[i].iFollow ? 'A seguir' : 'Seguir',
                        dark: !shown[i].iFollow,
                        height: 34,
                        onTap: _busy.contains(shown[i].id) ? null : () => _toggle(shown[i]),
                      ),
                    ],
                  ]),
                ),
            ]),
          ),
        ),
    ]);
  }
}

/// Editar nome, cidade e bio.
Future<void> showEditProfileSheet(BuildContext context, WidgetRef ref, PublicProfile p) async {
  final name = TextEditingController(text: p.name == 'Sem nome' ? '' : p.name);
  final city = TextEditingController(text: p.city ?? '');
  final bio = TextEditingController(text: p.bio ?? '');
  final saved = await showModalBottomSheet<bool>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.white,
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(28))),
    builder: (ctx) => Padding(
      padding: EdgeInsets.fromLTRB(20, 20, 20, MediaQuery.viewInsetsOf(ctx).bottom + 24),
      child: SingleChildScrollView(
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          const Text('Editar perfil', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 12),
          // O @ edita-se só aqui, no perfil (pedido 2026-11-12).
          UsernameEditRow(onTap: () {
            Navigator.of(ctx).pop(false);
            context.push('/username');
          }),
          const SizedBox(height: 12),
          TextField(controller: name, decoration: const InputDecoration(labelText: 'Nome'), textCapitalization: TextCapitalization.words),
          const SizedBox(height: 12),
          TextField(controller: city, decoration: const InputDecoration(labelText: 'Cidade'), textCapitalization: TextCapitalization.words),
          const SizedBox(height: 12),
          TextField(
            controller: bio,
            maxLength: 300,
            maxLines: 4,
            minLines: 2,
            decoration: const InputDecoration(labelText: 'Sobre ti'),
            textCapitalization: TextCapitalization.sentences,
          ),
          const SizedBox(height: 8),
          ProfileButton('Guardar', dark: true, onTap: () => Navigator.of(ctx).pop(true)),
        ]),
      ),
    ),
  );
  if (saved != true) return;
  try {
    await updateMyProfileExtras(bio: bio.text, city: city.text, fullName: name.text);
    ref.invalidate(publicProfileProvider(p.id));
  } catch (_) {
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
    }
  }
}


/// "Nome de utilizador · @ana" — abre o ecrã do @ (migração 163).
class UsernameEditRow extends ConsumerWidget {
  final VoidCallback onTap;
  const UsernameEditRow({super.key, required this.onTap});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final u = ref.watch(myUsernameProvider).value?.username;
    return SnappyTap(
      onTap: onTap,
      child: Container(
        height: 56,
        padding: const EdgeInsets.symmetric(horizontal: 16),
        decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(16)),
        child: Row(children: [
          const Expanded(
            child: Text('Nome de utilizador', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          Text(u == null ? 'Escolher' : '@$u',
              style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          const SizedBox(width: 8),
          const Icon(Icons.chevron_right_rounded, size: 18, color: AppTheme.inkMuted),
        ]),
      ),
    );
  }
}

/// "Editar perfil" do parceiro: o @, as informações do negócio e as fotos.
Future<void> showPartnerEditProfileSheet(BuildContext context) async {
  final go = await showModalBottomSheet<String>(
    context: context,
    backgroundColor: Colors.white,
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(28))),
    builder: (ctx) => Padding(
      padding: const EdgeInsets.fromLTRB(20, 20, 20, 28),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        const Text('Editar perfil', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 12),
        UsernameEditRow(onTap: () => Navigator.of(ctx).pop('/username')),
        const SizedBox(height: 8),
        _SheetLink('Informações do negócio', () => Navigator.of(ctx).pop('/partner-business-info')),
        const SizedBox(height: 8),
        _SheetLink('Fotos e vídeos', () => Navigator.of(ctx).pop('/partner-portfolio')),
      ]),
    ),
  );
  if (go != null && context.mounted) context.push(go);
}

class _SheetLink extends StatelessWidget {
  final String label;
  final VoidCallback onTap;
  const _SheetLink(this.label, this.onTap);

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Container(
          height: 56,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(16)),
          child: Row(children: [
            Expanded(child: Text(label, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink))),
            const Icon(Icons.chevron_right_rounded, size: 18, color: AppTheme.inkMuted),
          ]),
        ),
      );
}
