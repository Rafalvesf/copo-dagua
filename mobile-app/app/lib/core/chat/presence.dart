import 'dart:async';

import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show RealtimeChannel, RealtimeChannelConfig, RealtimeSubscribeStatus;

import '../auth/auth_controller.dart';
import '../supabase/supabase_config.dart';

/// Quem está online agora (mockup das Mensagens, 2026-11-12): cada conta
/// com a app aberta entra no canal de presença "online" com o seu id.
/// Sem tabela nem migração — vive só enquanto a app está aberta.
class OnlineNow extends Notifier<Set<String>> {
  RealtimeChannel? _channel;

  @override
  Set<String> build() {
    final me = ref.watch(authControllerProvider.select((s) => s.profile?.id));
    ref.onDispose(_leave);
    if (me == null) return const {};
    final channel = supabase.channel('online', opts: RealtimeChannelConfig(key: me));
    _channel = channel;
    channel
        .onPresenceSync((_) => _sync())
        .onPresenceJoin((_) => _sync())
        .onPresenceLeave((_) => _sync())
        .subscribe((status, _) {
      if (status == RealtimeSubscribeStatus.subscribed) {
        unawaited(channel.track({'at': DateTime.now().toUtc().toIso8601String()}).then((_) {}, onError: (_) {}));
      }
    });
    return const {};
  }

  void _sync() {
    final c = _channel;
    if (c == null) return;
    try {
      state = {for (final s in c.presenceState()) s.key};
    } catch (_) {}
  }

  void _leave() {
    final c = _channel;
    _channel = null;
    if (c != null) unawaited(supabase.removeChannel(c).then((_) {}, onError: (_) {}));
  }
}

final onlineNowProvider = NotifierProvider<OnlineNow, Set<String>>(OnlineNow.new);

/// Está online agora?
final isOnlineProvider = Provider.family<bool, String>((ref, id) => ref.watch(onlineNowProvider).contains(id));

/// "A Marta está a escrever…" (mockup "Grupo", 2026-11-12): mensagens
/// de broadcast num canal por conversa/grupo, sem guardar nada. Cada
/// "está a escrever" vale 5 s; quem escreve volta a avisar a cada 2 s.
class TypingNow extends Notifier<List<String>> {
  TypingNow(this.key);
  final String key;
  RealtimeChannel? _channel;
  final _until = <String, (String, DateTime)>{};
  Timer? _tick;
  DateTime _lastSent = DateTime.fromMillisecondsSinceEpoch(0);

  @override
  List<String> build() {
    final me = ref.watch(authControllerProvider.select((s) => s.profile?.id));
    ref.onDispose(() {
      _tick?.cancel();
      final c = _channel;
      _channel = null;
      if (c != null) unawaited(supabase.removeChannel(c).then((_) {}, onError: (_) {}));
    });
    if (me == null) return const [];
    _channel = supabase.channel('typing:$key').onBroadcast(
      event: 'typing',
      callback: (raw) {
        final p = raw['payload'] is Map ? Map<String, dynamic>.from(raw['payload'] as Map) : raw;
        final id = p['id'] as String?;
        if (id == null || id == me) return;
        final name = (p['name'] as String?)?.trim();
        if (p['stop'] == true) {
          _until.remove(id);
        } else {
          _until[id] = (name == null || name.isEmpty ? 'Alguém' : name, DateTime.now().add(const Duration(seconds: 5)));
        }
        _emit();
      },
    )..subscribe();
    _tick = Timer.periodic(const Duration(seconds: 1), (_) => _emit());
    return const [];
  }

  void _emit() {
    final now = DateTime.now();
    _until.removeWhere((_, v) => v.$2.isBefore(now));
    final names = [for (final v in _until.values) v.$1];
    if (names.length != state.length || !names.every(state.contains)) state = names;
  }

  /// Chamar a cada tecla: avisa no máximo a cada 2 s.
  void typing(String myName) {
    final c = _channel;
    final me = ref.read(authControllerProvider).profile?.id;
    if (c == null || me == null) return;
    final now = DateTime.now();
    if (now.difference(_lastSent) < const Duration(seconds: 2)) return;
    _lastSent = now;
    unawaited(c
        .sendBroadcastMessage(event: 'typing', payload: {'id': me, 'name': myName})
        .then((_) {}, onError: (_) {}));
  }

  /// Ao enviar a mensagem: deixa de aparecer logo.
  void stop() {
    final c = _channel;
    final me = ref.read(authControllerProvider).profile?.id;
    if (c == null || me == null) return;
    _lastSent = DateTime.fromMillisecondsSinceEpoch(0);
    unawaited(c.sendBroadcastMessage(event: 'typing', payload: {'id': me, 'stop': true}).then((_) {}, onError: (_) {}));
  }
}

final typingNowProvider =
    NotifierProvider.autoDispose.family<TypingNow, List<String>, String>(TypingNow.new);

/// "A Marta está a escrever…", "A Marta e o Rui estão a escrever…".
String? typingLine(List<String> names) {
  if (names.isEmpty) return null;
  final first = names.map((n) => n.split(' ').first).toList();
  if (first.length == 1) return '${first[0]} está a escrever…';
  if (first.length == 2) return '${first[0]} e ${first[1]} estão a escrever…';
  return '${first.length} pessoas estão a escrever…';
}

/// "Responde em ~1 h" a partir da mediana em minutos.
String? responseLabel(int? minutes) {
  if (minutes == null) return null;
  if (minutes < 60) return 'Responde em menos de 1 h';
  final h = (minutes / 60).round();
  if (h < 24) return 'Responde em ~$h h';
  final d = (minutes / 1440).round();
  return 'Responde em ~$d ${d == 1 ? 'dia' : 'dias'}';
}
