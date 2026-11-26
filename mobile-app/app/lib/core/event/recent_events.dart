import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Eventos abertos há menos tempo primeiro (pedido do Rafael, 2026-11-26: «o
/// evento que aparece na lista deve ser o que foi aberto/feito mais
/// recentemente»). Guarda no telemóvel quando cada evento foi aberto; um
/// evento acabado de criar também conta (a app abre-o).
final Map<String, int> _opened = {};
bool _loaded = false;

Future<void> loadRecentEvents() async {
  if (_loaded) return;
  _loaded = true;
  try {
    final raw = (await SharedPreferences.getInstance()).getString('recent_events');
    if (raw != null) {
      (jsonDecode(raw) as Map).forEach((k, v) => _opened['$k'] = (v as num).toInt());
    }
  } catch (_) {}
}

Future<void> markEventOpened(String eventId) async {
  _opened[eventId] = DateTime.now().millisecondsSinceEpoch;
  try {
    (await SharedPreferences.getInstance()).setString('recent_events', jsonEncode(_opened));
  } catch (_) {}
}

/// Para ordenar: o aberto há menos tempo primeiro; sem registo, [fallback].
int compareRecent(String a, String b, int Function() fallback) {
  final ta = _opened[a] ?? 0, tb = _opened[b] ?? 0;
  if (ta != tb) return tb.compareTo(ta);
  return fallback();
}
