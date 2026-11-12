import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../events/events_providers.dart';
import '../supabase/supabase_config.dart';

/// Perfil público e seguir (migração 183, mockup "Perfil" 2026-11-12).

class MiniPerson {
  final String id;
  final String name;
  final String? avatarUrl;
  const MiniPerson(this.id, this.name, this.avatarUrl);

  static List<MiniPerson> list(Object? v) => [
        for (final r in (v is List ? v : const []).cast<Map>())
          MiniPerson(r['id'] as String, (r['full_name'] as String?) ?? '', r['avatar_url'] as String?),
      ];
}

class PublicProfile {
  final String id;
  final String name;
  final String? username;
  final String? avatarUrl;
  final String? bio;
  final String? city;
  final bool isMe;
  final bool isPublic;
  final int followers;
  final int following;
  final int followingPeople;
  final int followingPartners;
  final int events;
  final bool iFollow;
  final bool followsMe;
  final List<MiniPerson> mutual;
  final int mutualCount;
  final List<PublicEvent> upcoming;

  const PublicProfile({
    required this.id,
    required this.name,
    this.username,
    this.avatarUrl,
    this.bio,
    this.city,
    this.isMe = false,
    this.isPublic = true,
    this.followers = 0,
    this.following = 0,
    this.followingPeople = 0,
    this.followingPartners = 0,
    this.events = 0,
    this.iFollow = false,
    this.followsMe = false,
    this.mutual = const [],
    this.mutualCount = 0,
    this.upcoming = const [],
  });

  factory PublicProfile.fromJson(Map<String, dynamic> j) => PublicProfile(
        id: j['id'] as String,
        name: (j['full_name'] as String?)?.trim().isNotEmpty == true ? j['full_name'] as String : 'Sem nome',
        username: j['username'] as String?,
        avatarUrl: j['avatar_url'] as String?,
        bio: j['bio'] as String?,
        city: j['city'] as String?,
        isMe: j['is_me'] == true,
        isPublic: j['profile_public'] != false,
        followers: (j['followers'] as num?)?.toInt() ?? 0,
        following: (j['following'] as num?)?.toInt() ?? 0,
        followingPeople: (j['following_people'] as num?)?.toInt() ?? 0,
        followingPartners: (j['following_partners'] as num?)?.toInt() ?? 0,
        events: (j['events'] as num?)?.toInt() ?? 0,
        iFollow: j['i_follow'] == true,
        followsMe: j['follows_me'] == true,
        mutual: MiniPerson.list(j['mutual']),
        mutualCount: (j['mutual_count'] as num?)?.toInt() ?? 0,
        upcoming: [
          for (final r in (j['upcoming'] is List ? j['upcoming'] as List : const []).cast<Map<String, dynamic>>())
            PublicEvent.fromRow(r),
        ],
      );

  /// "@sofiasilva · Lisboa"
  String get handleLine => [
        if (username != null && username!.isNotEmpty) '@$username',
        if (city != null && city!.isNotEmpty) city!,
      ].join(' · ');
}

/// null antes da migração 183 (ou se a pessoa não existe).
final publicProfileProvider = FutureProvider.autoDispose.family<PublicProfile?, String>((ref, id) async {
  try {
    final r = await supabase.rpc('public_profile', params: {'p_id': id});
    if (r is! Map) return null;
    return PublicProfile.fromJson(Map<String, dynamic>.from(r));
  } catch (_) {
    return null;
  }
});

class FollowRow {
  final String id;
  final String name;
  final String? avatarUrl;
  final String subtitle;
  final bool iFollow;
  final bool isMe;
  const FollowRow(this.id, this.name, this.avatarUrl, this.subtitle, this.iFollow, this.isMe);
}

/// Quem [id] segue: 'people' ou 'partners'.
final followListProvider = FutureProvider.autoDispose.family<List<FollowRow>, (String, String)>((ref, k) async {
  try {
    final r = await supabase.rpc('follow_list', params: {'p_id': k.$1, 'p_kind': k.$2});
    return [
      for (final m in (r is List ? r : const []).cast<Map>())
        FollowRow(m['id'] as String, (m['name'] as String?) ?? '', m['avatar_url'] as String?,
            (m['subtitle'] as String?) ?? '', m['i_follow'] == true, m['is_me'] == true),
    ];
  } catch (_) {
    return const [];
  }
});

class PartnerFollowInfo {
  final int followers;
  final bool iFollow;
  final List<MiniPerson> friends;
  final int friendsCount;
  const PartnerFollowInfo({this.followers = 0, this.iFollow = false, this.friends = const [], this.friendsCount = 0});
}

final partnerFollowInfoProvider = FutureProvider.autoDispose.family<PartnerFollowInfo?, String>((ref, id) async {
  try {
    final r = await supabase.rpc('partner_follow_info', params: {'p_partner': id});
    if (r is! Map) return null;
    return PartnerFollowInfo(
      followers: (r['followers'] as num?)?.toInt() ?? 0,
      iFollow: r['i_follow'] == true,
      friends: MiniPerson.list(r['friends']),
      friendsCount: (r['friends_count'] as num?)?.toInt() ?? 0,
    );
  } catch (_) {
    return null;
  }
});

Future<void> followPerson(String id, bool follow) async {
  final me = supabase.auth.currentUser?.id;
  if (me == null) return;
  if (follow) {
    await supabase.from('follows').insert({'follower_id': me, 'profile_id': id});
  } else {
    await supabase.from('follows').delete().eq('follower_id', me).eq('profile_id', id);
  }
}

Future<void> followPartner(String id, bool follow) async {
  final me = supabase.auth.currentUser?.id;
  if (me == null) return;
  if (follow) {
    await supabase.from('follows').insert({'follower_id': me, 'partner_id': id});
  } else {
    await supabase.from('follows').delete().eq('follower_id', me).eq('partner_id', id);
  }
}

Future<void> updateMyProfileExtras({String? bio, String? city, String? fullName}) async {
  final me = supabase.auth.currentUser?.id;
  if (me == null) return;
  await supabase.from('profiles').update({
    'bio': (bio ?? '').trim().isEmpty ? null : bio!.trim(),
    'city': (city ?? '').trim().isEmpty ? null : city!.trim(),
    if (fullName != null && fullName.trim().isNotEmpty) 'full_name': fullName.trim(),
  }).eq('id', me);
}

/// "Seguido pela Rita, e por outros 2."
String followedByLine(List<MiniPerson> people, int total, {bool female = true}) {
  if (people.isEmpty) return '';
  final first = people.first.name.split(' ').first;
  final others = total - 1;
  final art = female ? 'Seguida' : 'Seguido';
  if (others <= 0) return '$art por $first.';
  return '$art por $first, e por ${others == 1 ? 'mais 1' : 'outros $others'}.';
}

Future<void> setProfilePublic(bool v) async {
  final me = supabase.auth.currentUser?.id;
  if (me == null) return;
  await supabase.from('profiles').update({'profile_public': v}).eq('id', me);
}
