import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../supabase/supabase_config.dart';

/// Galeria social (`078_gallery_social.sql`): gostos, comentários e
/// quem publicou cada foto. Pedido do utilizador (2026-10-17): "como se
/// fosse uma rede social como o Instagram".

class GalleryPostMeta {
  final String photoId;
  final String uploadedBy;
  final String authorName;
  final String? authorAvatarUrl;
  final bool authorIsCouple;
  final int likeCount;
  final bool likedByMe;
  final int commentCount;

  const GalleryPostMeta({
    required this.photoId,
    required this.uploadedBy,
    required this.authorName,
    this.authorAvatarUrl,
    required this.authorIsCouple,
    required this.likeCount,
    required this.likedByMe,
    required this.commentCount,
  });

  GalleryPostMeta copyWith({int? likeCount, bool? likedByMe, int? commentCount}) => GalleryPostMeta(
        photoId: photoId,
        uploadedBy: uploadedBy,
        authorName: authorName,
        authorAvatarUrl: authorAvatarUrl,
        authorIsCouple: authorIsCouple,
        likeCount: likeCount ?? this.likeCount,
        likedByMe: likedByMe ?? this.likedByMe,
        commentCount: commentCount ?? this.commentCount,
      );
}

/// Autor, gostos e comentários de cada foto visível, por id da foto.
/// Vazio se a migração 078 ainda não correu — a galeria continua a
/// funcionar, só sem a parte social.
final galleryFeedMetaProvider =
    FutureProvider.family<Map<String, GalleryPostMeta>, String>((ref, weddingId) async {
  try {
    final rows = await supabase.rpc('get_gallery_feed', params: {'p_wedding_id': weddingId}) as List;
    return {
      for (final r in rows.cast<Map<String, dynamic>>())
        r['photo_id'] as String: GalleryPostMeta(
          photoId: r['photo_id'] as String,
          uploadedBy: r['uploaded_by'] as String,
          authorName: (r['author_name'] as String?) ?? 'Convidado',
          authorAvatarUrl: r['author_avatar_url'] as String?,
          authorIsCouple: r['author_is_couple'] as bool? ?? false,
          likeCount: (r['like_count'] as num?)?.toInt() ?? 0,
          likedByMe: r['liked_by_me'] as bool? ?? false,
          commentCount: (r['comment_count'] as num?)?.toInt() ?? 0,
        ),
    };
  } catch (_) {
    return const {};
  }
});

Future<void> setGalleryLike(String photoId, String profileId, bool like) async {
  if (like) {
    await supabase.from('gallery_photo_likes').upsert({'photo_id': photoId, 'profile_id': profileId});
  } else {
    await supabase.from('gallery_photo_likes').delete().eq('photo_id', photoId).eq('profile_id', profileId);
  }
}

class GalleryComment {
  final String id;
  final String profileId;
  final String authorName;
  final String? authorAvatarUrl;
  final String body;
  final DateTime createdAt;

  const GalleryComment({
    required this.id,
    required this.profileId,
    required this.authorName,
    this.authorAvatarUrl,
    required this.body,
    required this.createdAt,
  });
}

final galleryCommentsProvider =
    FutureProvider.family<List<GalleryComment>, String>((ref, photoId) async {
  final rows = await supabase.rpc('get_gallery_comments', params: {'p_photo_id': photoId}) as List;
  return [
    for (final r in rows.cast<Map<String, dynamic>>())
      GalleryComment(
        id: r['comment_id'] as String,
        profileId: r['profile_id'] as String,
        authorName: (r['author_name'] as String?) ?? 'Convidado',
        authorAvatarUrl: r['author_avatar_url'] as String?,
        body: r['body'] as String,
        createdAt: DateTime.parse(r['created_at'] as String).toLocal(),
      ),
  ];
});

Future<void> addGalleryComment(String photoId, String profileId, String body) async {
  await supabase.from('gallery_photo_comments').insert({
    'photo_id': photoId,
    'profile_id': profileId,
    'body': body.trim(),
  });
}

Future<void> deleteGalleryComment(String commentId) async {
  await supabase.from('gallery_photo_comments').delete().eq('id', commentId);
}

class GalleryMember {
  final String profileId;
  final String fullName;
  final String? avatarUrl;
  final bool isCouple;
  final String? groupLabel;
  final int approvedPhotos;
  final int likesReceived;

  const GalleryMember({
    required this.profileId,
    required this.fullName,
    this.avatarUrl,
    required this.isCouple,
    this.groupLabel,
    required this.approvedPhotos,
    required this.likesReceived,
  });
}

typedef GalleryMemberKey = ({String weddingId, String profileId});

final galleryMemberProvider =
    FutureProvider.family<GalleryMember?, GalleryMemberKey>((ref, key) async {
  final rows = await supabase.rpc(
    'get_gallery_member',
    params: {'p_wedding_id': key.weddingId, 'p_profile_id': key.profileId},
  ) as List;
  if (rows.isEmpty) return null;
  final r = rows.first as Map<String, dynamic>;
  return GalleryMember(
    profileId: r['profile_id'] as String,
    fullName: (r['full_name'] as String?) ?? 'Convidado',
    avatarUrl: r['avatar_url'] as String?,
    isCouple: r['is_couple'] as bool? ?? false,
    groupLabel: r['group_label'] as String?,
    approvedPhotos: (r['approved_photos'] as num?)?.toInt() ?? 0,
    likesReceived: (r['likes_received'] as num?)?.toInt() ?? 0,
  );
});
