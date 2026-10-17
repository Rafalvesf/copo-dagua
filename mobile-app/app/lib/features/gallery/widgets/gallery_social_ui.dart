import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:share_plus/share_plus.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/gallery/gallery_providers.dart';
import '../../../core/gallery/gallery_social.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/gallery_placeholder.dart';
import '../../../shared/widgets/initials_avatar.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// Galeria como uma rede social (pedido 2026-10-17): grelha de
/// quadrados (como no design) → toque abre as publicações com quem
/// publicou, gostos e comentários; toque no autor abre o perfil dele.
/// Partilhado pela galeria do casal e do convidado.

String _ago(DateTime t) {
  final d = DateTime.now().difference(t);
  if (d.inMinutes < 1) return 'agora';
  if (d.inMinutes < 60) return 'há ${d.inMinutes} min';
  if (d.inHours < 24) return 'há ${d.inHours} h';
  if (d.inDays < 7) return 'há ${d.inDays} ${d.inDays == 1 ? 'dia' : 'dias'}';
  return '${t.day.toString().padLeft(2, '0')}/${t.month.toString().padLeft(2, '0')}/${t.year}';
}

Widget _avatar(String name, String? url, double radius) => url == null
    ? InitialsAvatar(name: name, radius: radius)
    : CircleAvatar(radius: radius, backgroundColor: AppColors.green, backgroundImage: NetworkImage(url));

/// Grelha 3 colunas. Coração vermelho no canto das fotos de que gostaste.
class GallerySocialGrid extends ConsumerWidget {
  final String weddingId;
  final List<GalleryPhoto> photos;

  const GallerySocialGrid({super.key, required this.weddingId, required this.photos});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final meta = ref.watch(galleryFeedMetaProvider(weddingId)).asData?.value ?? const {};
    return GridView.builder(
      shrinkWrap: true,
      physics: const NeverScrollableScrollPhysics(),
      gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
        crossAxisCount: 3,
        crossAxisSpacing: 4,
        mainAxisSpacing: 4,
      ),
      itemCount: photos.length,
      itemBuilder: (context, index) {
        final photo = photos[index];
        final m = meta[photo.id];
        return SnappyTap(
          onTap: () => openGalleryPosts(context, weddingId: weddingId, photos: photos, initialIndex: index),
          child: ClipRRect(
            borderRadius: galleryTileRadius(index, photos.length),
            child: Stack(
              fit: StackFit.expand,
              children: [
                ColoredBox(color: galleryTint(index)),
                Image.network(
                  photo.imageUrl,
                  fit: BoxFit.cover,
                  errorBuilder: (context, error, stack) => const SizedBox.shrink(),
                ),
                if (m != null && (m.likedByMe || m.commentCount > 0))
                  Positioned(
                    top: 5,
                    right: 6,
                    child: Icon(
                      m.likedByMe ? Icons.favorite : Icons.chat_bubble,
                      size: 16,
                      color: m.likedByMe ? AppStatusColors.declined : Colors.white,
                      shadows: const [Shadow(blurRadius: 4, color: Colors.black38)],
                    ),
                  ),
              ],
            ),
          ),
        );
      },
    );
  }
}

void openGalleryPosts(
  BuildContext context, {
  required String weddingId,
  required List<GalleryPhoto> photos,
  required int initialIndex,
}) {
  Navigator.of(context).push(
    MaterialPageRoute<void>(
      builder: (_) => GalleryPostsScreen(weddingId: weddingId, photos: photos, initialIndex: initialIndex),
    ),
  );
}

/// Publicações em lista (como o feed do Instagram), a começar na foto
/// tocada.
class GalleryPostsScreen extends ConsumerStatefulWidget {
  final String weddingId;
  final List<GalleryPhoto> photos;
  final int initialIndex;

  const GalleryPostsScreen({
    super.key,
    required this.weddingId,
    required this.photos,
    required this.initialIndex,
  });

  @override
  ConsumerState<GalleryPostsScreen> createState() => _GalleryPostsScreenState();
}

class _GalleryPostsScreenState extends ConsumerState<GalleryPostsScreen> {
  final _initialKey = GlobalKey();

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) {
      final ctx = _initialKey.currentContext;
      if (ctx != null) Scrollable.ensureVisible(ctx);
    });
  }

  @override
  Widget build(BuildContext context) {
    final meta = ref.watch(galleryFeedMetaProvider(widget.weddingId)).asData?.value ?? const {};
    final me = ref.watch(authControllerProvider).profile;
    // Nome do evento por baixo do título (canvas "Galeria — publicação").
    String? eventName;
    final own = ref.watch(weddingControllerProvider).wedding;
    if (own != null && own.id == widget.weddingId) {
      eventName = '${own.eventType.label} · ${own.displayNames}';
    } else {
      for (final w in ref.watch(guestWeddingsProvider).value ?? const <GuestWedding>[]) {
        if (w.weddingId == widget.weddingId) eventName = '${w.eventType.label} · ${w.displayNames}';
      }
    }
    // Sem a parte social (078) ainda ativa, mostra na mesma o autor e as
    // ações — a publicação fica sempre com o mesmo aspeto.
    GalleryPostMeta metaFor(GalleryPhoto p) =>
        meta[p.id] ??
        GalleryPostMeta(
          photoId: p.id,
          uploadedBy: p.uploadedBy,
          authorName: p.uploadedBy == me?.id ? (me?.fullName ?? 'Tu') : 'Convidado',
          // Sem a 078: quem organiza este evento e publicou é anfitrião.
          authorIsCouple: p.uploadedBy == me?.id && own != null && own.id == widget.weddingId,
          likeCount: 0,
          likedByMe: false,
          commentCount: 0,
        );
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        bottom: false,
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              PageHeader(title: 'Publicações', subtitle: eventName, centered: true),
              const SizedBox(height: 12),
              for (var i = 0; i < widget.photos.length; i++)
                _PostCard(
                  key: i == widget.initialIndex ? _initialKey : ValueKey(widget.photos[i].id),
                  weddingId: widget.weddingId,
                  photo: widget.photos[i],
                  meta: metaFor(widget.photos[i]),
                  tint: galleryTint(i),
                  allPhotos: widget.photos,
                ),
              const SizedBox(height: 40),
            ],
          ),
        ),
      ),
    );
  }
}

class _PostCard extends ConsumerStatefulWidget {
  final String weddingId;
  final GalleryPhoto photo;
  final GalleryPostMeta? meta;
  final Color tint;
  final List<GalleryPhoto> allPhotos;

  const _PostCard({
    super.key,
    required this.weddingId,
    required this.photo,
    required this.meta,
    required this.tint,
    required this.allPhotos,
  });

  @override
  ConsumerState<_PostCard> createState() => _PostCardState();
}

class _PostCardState extends ConsumerState<_PostCard> with SingleTickerProviderStateMixin {
  bool? _liked;
  int? _likes;
  bool _busy = false;
  late final AnimationController _burst = AnimationController(
    vsync: this,
    duration: const Duration(milliseconds: 900),
  );

  bool get liked => _liked ?? widget.meta?.likedByMe ?? false;
  int get likes => _likes ?? widget.meta?.likeCount ?? 0;

  @override
  void dispose() {
    _burst.dispose();
    super.dispose();
  }

  Future<void> _toggleLike() async {
    final me = ref.read(authControllerProvider).profile?.id;
    if (me == null || _busy || widget.meta == null) return;
    final next = !liked;
    setState(() {
      _busy = true;
      _liked = next;
      _likes = likes + (next ? 1 : -1);
    });
    try {
      await setGalleryLike(widget.photo.id, me, next);
      ref.invalidate(galleryFeedMetaProvider(widget.weddingId));
    } catch (_) {
      if (mounted) {
        setState(() {
          _liked = !next;
          _likes = likes + (next ? -1 : 1);
        });
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível guardar o gosto. Tenta outra vez.')),
        );
      }
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  /// Duplo toque: coração grande por cima da foto (pedido 2026-10-17,
  /// "melhora a parte das publicações").
  void _doubleTap() {
    if (!MediaQuery.of(context).disableAnimations) _burst.forward(from: 0);
    if (!liked) _toggleLike();
  }

  void _openAuthor() {
    final m = widget.meta;
    if (m == null) return;
    showGalleryMember(context, weddingId: widget.weddingId, profileId: m.uploadedBy, allPhotos: widget.allPhotos);
  }

  Future<void> _share() async {
    try {
      await SharePlus.instance.share(ShareParams(uri: Uri.parse(widget.photo.imageUrl)));
    } catch (_) {}
  }

  @override
  Widget build(BuildContext context) {
    final m = widget.meta;
    final name = m?.authorName ?? '';
    final comments = m?.commentCount ?? 0;
    return Padding(
      padding: const EdgeInsets.fromLTRB(20, 4, 20, 24),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          if (m != null)
            SnappyTap(
              onTap: _openAuthor,
              child: Padding(
                padding: const EdgeInsets.only(bottom: 12),
                child: Row(
                  children: [
                    _avatar(name, m.authorAvatarUrl, 18),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Row(
                            children: [
                              Flexible(child: Text(name, overflow: TextOverflow.ellipsis, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 14))),
                              if (m.authorIsCouple) ...[
                                const SizedBox(width: 6),
                                Container(
                                  padding: const EdgeInsets.symmetric(horizontal: 7, vertical: 2),
                                  decoration: BoxDecoration(color: AppColors.gray, borderRadius: BorderRadius.circular(999)),
                                  child: const Text('Anfitrião', style: TextStyle(fontSize: AppFontSize.xs, fontWeight: FontWeight.w700, color: Color(0xFF4A5D35))),
                                ),
                              ],
                            ],
                          ),
                          Text(
                            '${m.authorIsCouple ? 'Anfitrião' : 'Convidado'} · ${_ago(widget.photo.createdAt)}',
                            style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
                          ),
                        ],
                      ),
                    ),
                  ],
                ),
              ),
            ),
          GestureDetector(
            onDoubleTap: _doubleTap,
            child: ClipRRect(
              borderRadius: BorderRadius.circular(AppRadius.xl),
              child: AspectRatio(
                aspectRatio: 4 / 5,
                child: Stack(
                  fit: StackFit.expand,
                  children: [
                    ColoredBox(color: widget.tint),
                    Image.network(
                      widget.photo.imageUrl,
                      fit: BoxFit.cover,
                      errorBuilder: (context, error, stack) => const SizedBox.shrink(),
                    ),
                    AnimatedBuilder(
                      animation: _burst,
                      builder: (context, _) {
                        final t = _burst.value;
                        if (t == 0 || t == 1) return const SizedBox.shrink();
                        final scale = t < 0.25 ? Curves.easeOutBack.transform(t / 0.25) * 1.2 : (t < 0.7 ? 1.0 : 1 + (t - 0.7));
                        final opacity = t < 0.7 ? 1.0 : (1 - (t - 0.7) / 0.3);
                        return Center(
                          child: Opacity(
                            opacity: opacity.clamp(0.0, 1.0),
                            child: Transform.scale(
                              scale: scale,
                              child: const Icon(Icons.favorite, size: 96, color: Colors.white, shadows: [Shadow(color: Color(0x40000000), blurRadius: 16, offset: Offset(0, 6))]),
                            ),
                          ),
                        );
                      },
                    ),
                  ],
                ),
              ),
            ),
          ),
          if (m != null) ...[
            const SizedBox(height: 6),
            Row(
              children: [
                _Action(
                  icon: liked ? Icons.favorite : Icons.favorite_border,
                  color: liked ? AppStatusColors.declined : AppTheme.ink,
                  label: likes > 0 ? '$likes' : null,
                  tooltip: liked ? 'Retirar gosto' : 'Gosto',
                  onTap: _toggleLike,
                ),
                _Action(
                  icon: Icons.chat_bubble_outline_rounded,
                  label: comments > 0 ? '$comments' : null,
                  tooltip: 'Comentar',
                  onTap: () => showGalleryComments(context, weddingId: widget.weddingId, photoId: widget.photo.id),
                ),
                _Action(icon: Icons.ios_share_rounded, tooltip: 'Partilhar', onTap: _share),
                const Spacer(),
                _Action(
                  icon: Icons.download_rounded,
                  tooltip: 'Descarregar',
                  onTap: () => launchUrl(Uri.parse(widget.photo.imageUrl), mode: LaunchMode.externalApplication),
                ),
              ],
            ),
            if (widget.photo.caption?.isNotEmpty == true) ...[
              const SizedBox(height: 2),
              Text.rich(
                TextSpan(children: [
                  TextSpan(text: '$name ', style: const TextStyle(fontWeight: FontWeight.w700)),
                  TextSpan(text: widget.photo.caption),
                ]),
                style: const TextStyle(fontSize: 14, height: 1.4, color: AppTheme.ink),
              ),
            ],
            if (comments > 0) ...[
              const SizedBox(height: 4),
              SnappyTap(
                onTap: () => showGalleryComments(context, weddingId: widget.weddingId, photoId: widget.photo.id),
                child: Text(
                  comments == 1 ? 'Ver 1 comentário' : 'Ver os $comments comentários',
                  style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted),
                ),
              ),
            ],
          ],
        ],
      ),
    );
  }
}

class _Action extends StatelessWidget {
  final IconData icon;
  final String? label;
  final String tooltip;
  final Color color;
  final VoidCallback onTap;

  const _Action({required this.icon, this.label, required this.tooltip, required this.onTap, this.color = AppTheme.ink});

  @override
  Widget build(BuildContext context) {
    return Tooltip(
      message: tooltip,
      child: InkWell(
        onTap: onTap,
        borderRadius: BorderRadius.circular(999),
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 8),
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, size: 25, color: color),
              if (label != null) ...[
                const SizedBox(width: 5),
                Text(label!, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ],
            ],
          ),
        ),
      ),
    );
  }
}

// ------------------------------------------------------------ comentários

Future<void> showGalleryComments(BuildContext context, {required String weddingId, required String photoId}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.white,
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl))),
    builder: (_) => _CommentsSheet(weddingId: weddingId, photoId: photoId),
  );
}

class _CommentsSheet extends ConsumerStatefulWidget {
  final String weddingId;
  final String photoId;

  const _CommentsSheet({required this.weddingId, required this.photoId});

  @override
  ConsumerState<_CommentsSheet> createState() => _CommentsSheetState();
}

class _CommentsSheetState extends ConsumerState<_CommentsSheet> {
  final _text = TextEditingController();
  bool _sending = false;

  @override
  void dispose() {
    _text.dispose();
    super.dispose();
  }

  Future<void> _send() async {
    final me = ref.read(authControllerProvider).profile?.id;
    final body = _text.text.trim();
    if (me == null || body.isEmpty || _sending) return;
    setState(() => _sending = true);
    try {
      await addGalleryComment(widget.photoId, me, body);
      _text.clear();
      ref.invalidate(galleryCommentsProvider(widget.photoId));
      ref.invalidate(galleryFeedMetaProvider(widget.weddingId));
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível comentar. Tenta outra vez.')),
        );
      }
    } finally {
      if (mounted) setState(() => _sending = false);
    }
  }

  Future<void> _delete(GalleryComment c) async {
    final ok = await showDialog<bool>(
      context: context,
      builder: (context) => AlertDialog(
        title: const Text('Apagar comentário?'),
        actions: [
          TextButton(onPressed: () => Navigator.of(context).pop(false), child: const Text('Cancelar')),
          FilledButton(onPressed: () => Navigator.of(context).pop(true), child: const Text('Apagar')),
        ],
      ),
    );
    if (ok != true) return;
    try {
      await deleteGalleryComment(c.id);
      ref.invalidate(galleryCommentsProvider(widget.photoId));
      ref.invalidate(galleryFeedMetaProvider(widget.weddingId));
    } catch (_) {}
  }

  @override
  Widget build(BuildContext context) {
    final me = ref.watch(authControllerProvider).profile?.id;
    final comments = ref.watch(galleryCommentsProvider(widget.photoId));
    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: ConstrainedBox(
        constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.75),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const SizedBox(height: 10),
            Container(
              width: 40,
              height: 4,
              decoration: BoxDecoration(color: AppTheme.borderMuted, borderRadius: BorderRadius.circular(2)),
            ),
            const SizedBox(height: 12),
            const Text('Comentários', style: TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.lg)),
            const Divider(height: 24, color: AppTheme.borderMuted),
            Flexible(
              child: comments.when(
                loading: () => const Padding(
                  padding: EdgeInsets.all(24),
                  child: Center(child: CircularProgressIndicator()),
                ),
                error: (e, s) => const Padding(
                  padding: EdgeInsets.all(24),
                  child: Text('Não foi possível carregar os comentários.'),
                ),
                data: (list) => list.isEmpty
                    ? const Padding(
                        padding: EdgeInsets.symmetric(vertical: 28),
                        child: Text('Ainda sem comentários. Sê o primeiro!',
                            style: TextStyle(color: AppTheme.inkMuted)),
                      )
                    : ListView(
                        shrinkWrap: true,
                        padding: const EdgeInsets.symmetric(horizontal: 16),
                        children: [
                          for (final c in list)
                            GestureDetector(
                              onLongPress: c.profileId == me ? () => _delete(c) : null,
                              child: Padding(
                                padding: const EdgeInsets.only(bottom: 14),
                                child: Row(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: [
                                    _avatar(c.authorName, c.authorAvatarUrl, 16),
                                    const SizedBox(width: 10),
                                    Expanded(
                                      child: Column(
                                        crossAxisAlignment: CrossAxisAlignment.start,
                                        children: [
                                          Text.rich(
                                            TextSpan(children: [
                                              TextSpan(
                                                text: '${c.authorName} ',
                                                style: const TextStyle(fontWeight: FontWeight.w700),
                                              ),
                                              TextSpan(text: c.body),
                                            ]),
                                            style: const TextStyle(fontSize: 14, color: AppTheme.ink),
                                          ),
                                          const SizedBox(height: 2),
                                          Text(
                                            _ago(c.createdAt),
                                            style: const TextStyle(fontSize: AppFontSize.xs, color: AppTheme.inkMuted),
                                          ),
                                        ],
                                      ),
                                    ),
                                  ],
                                ),
                              ),
                            ),
                        ],
                      ),
              ),
            ),
            Container(
              decoration: const BoxDecoration(border: Border(top: BorderSide(color: AppTheme.borderMuted))),
              padding: const EdgeInsets.fromLTRB(16, 8, 16, 0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  for (final e in const ['❤️', '🥂', '😍', '👏', '😂', '🥹'])
                    InkWell(
                      borderRadius: BorderRadius.circular(999),
                      onTap: () {
                        _text.text = '${_text.text}$e';
                        _text.selection = TextSelection.collapsed(offset: _text.text.length);
                      },
                      child: Padding(padding: const EdgeInsets.all(6), child: Text(e, style: const TextStyle(fontSize: 22))),
                    ),
                ],
              ),
            ),
            SafeArea(
              top: false,
              child: Container(
                padding: const EdgeInsets.fromLTRB(16, 6, 16, 10),
                child: Row(
                  children: [
                    Expanded(
                      child: Container(
                        height: 44,
                        padding: const EdgeInsets.symmetric(horizontal: 16),
                        alignment: Alignment.centerLeft,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(AppRadius.pill),
                          border: Border.all(color: AppTheme.accentOliveDark),
                          boxShadow: AppTheme.searchBarShadow,
                        ),
                        child: TextField(
                          controller: _text,
                          onSubmitted: (_) => _send(),
                          decoration: const InputDecoration(
                            hintText: 'Escreve um comentário…',
                            isDense: true,
                            filled: false,
                            border: InputBorder.none,
                            enabledBorder: InputBorder.none,
                            focusedBorder: InputBorder.none,
                            contentPadding: EdgeInsets.zero,
                          ),
                        ),
                      ),
                    ),
                    const SizedBox(width: 8),
                    SnappyTap(
                      onTap: _send,
                      child: Container(
                        width: 44,
                        height: 44,
                        alignment: Alignment.center,
                        decoration: const BoxDecoration(color: AppTheme.accentOliveDark, shape: BoxShape.circle),
                        child: const Icon(Icons.arrow_upward_rounded, color: Colors.white, size: 20),
                      ),
                    ),
                  ],
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ------------------------------------------------------------ perfil

Future<void> showGalleryMember(
  BuildContext context, {
  required String weddingId,
  required String profileId,
  required List<GalleryPhoto> allPhotos,
}) {
  return showModalBottomSheet<void>(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.white,
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(AppRadius.xl))),
    builder: (_) => _MemberSheet(weddingId: weddingId, profileId: profileId, allPhotos: allPhotos),
  );
}

class _MemberSheet extends ConsumerWidget {
  final String weddingId;
  final String profileId;
  final List<GalleryPhoto> allPhotos;

  const _MemberSheet({required this.weddingId, required this.profileId, required this.allPhotos});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final member = ref.watch(galleryMemberProvider((weddingId: weddingId, profileId: profileId)));
    final theirs = allPhotos.where((p) => p.uploadedBy == profileId).toList();
    return ConstrainedBox(
      constraints: BoxConstraints(maxHeight: MediaQuery.of(context).size.height * 0.8),
      child: member.when(
        loading: () => const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator())),
        error: (e, s) => const Padding(padding: EdgeInsets.all(40), child: Text('Não foi possível abrir o perfil.')),
        data: (m) => m == null
            ? const Padding(padding: EdgeInsets.all(40), child: Text('Perfil indisponível.'))
            : ListView(
                shrinkWrap: true,
                padding: const EdgeInsets.fromLTRB(24, 12, 24, 32),
                children: [
                  Center(
                    child: Container(
                      width: 40,
                      height: 4,
                      decoration: BoxDecoration(color: AppTheme.borderMuted, borderRadius: BorderRadius.circular(2)),
                    ),
                  ),
                  const SizedBox(height: 20),
                  Row(
                    children: [
                      _avatar(m.fullName, m.avatarUrl, 40),
                      const SizedBox(width: 16),
                      Expanded(
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            Text(m.fullName, style: const TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700)),
                            const SizedBox(height: 4),
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
                              decoration: BoxDecoration(
                                color: m.isCouple ? AppColors.green : AppTheme.surface,
                                borderRadius: BorderRadius.circular(AppRadius.pill),
                              ),
                              child: Text(
                                m.isCouple
                                    ? 'Casal'
                                    : (m.groupLabel?.isNotEmpty == true ? 'Convidado · ${m.groupLabel}' : 'Convidado'),
                                style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark),
                              ),
                            ),
                          ],
                        ),
                      ),
                    ],
                  ),
                  const SizedBox(height: 18),
                  Row(
                    children: [
                      _Stat(value: '${m.approvedPhotos}', label: m.approvedPhotos == 1 ? 'foto' : 'fotos'),
                      const SizedBox(width: 24),
                      _Stat(value: '${m.likesReceived}', label: m.likesReceived == 1 ? 'gosto recebido' : 'gostos recebidos'),
                    ],
                  ),
                  const SizedBox(height: 18),
                  if (theirs.isEmpty)
                    const Text('Ainda sem fotos publicadas.', style: TextStyle(color: AppTheme.inkMuted))
                  else
                    GallerySocialGrid(weddingId: weddingId, photos: theirs),
                ],
              ),
      ),
    );
  }
}

class _Stat extends StatelessWidget {
  final String value;
  final String label;

  const _Stat({required this.value, required this.label});

  @override
  Widget build(BuildContext context) {
    return Row(
      crossAxisAlignment: CrossAxisAlignment.baseline,
      textBaseline: TextBaseline.alphabetic,
      children: [
        Text(value, style: const TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w800)),
        const SizedBox(width: 4),
        Text(label, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
      ],
    );
  }
}
