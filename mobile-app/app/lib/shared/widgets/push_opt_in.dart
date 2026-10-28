import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';

import '../../core/notifications/push.dart';
import '../../core/theme/app_theme.dart';

/// Cartão "Receber notificações com a app fechada" (2026-10-21) — aparece
/// no topo das notificações enquanto este dispositivo não estiver ativo.
class PushOptInCard extends StatefulWidget {
  const PushOptInCard({super.key});

  @override
  State<PushOptInCard> createState() => _PushOptInCardState();
}

class _PushOptInCardState extends State<PushOptInCard> {
  PushStatus _status = PushNotifications.status();
  bool _busy = false;

  Future<void> _enable() async {
    setState(() => _busy = true);
    PushStatus s;
    try {
      s = await PushNotifications.enable();
    } catch (_) {
      s = PushNotifications.status();
    }
    if (!mounted) return;
    setState(() {
      _status = s;
      _busy = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    final (String title, String text, bool action) = switch (_status) {
      PushStatus.notAsked => (
          'Recebe avisos com a app fechada',
          'Mensagens, pagamentos, propostas e lembretes chegam a este dispositivo.',
          true,
        ),
      PushStatus.denied => (
          'Notificações bloqueadas',
          kIsWeb
              ? 'Bloqueaste as notificações neste browser. Para as receber, permite-as nas definições do site.'
              : 'Bloqueaste as notificações. Para as receber, abre as Definições do telemóvel → À Nossa! → Notificações.',
          false,
        ),
      PushStatus.iosInstall => (
          'No iPhone, instala a app',
          'Toca em Partilhar → “Adicionar ao ecrã principal” e abre a À Nossa! a partir daí para receber notificações.',
          false,
        ),
      _ => ('', '', false),
    };
    if (title.isEmpty) return const SizedBox.shrink();
    return Container(
      margin: const EdgeInsets.fromLTRB(16, 0, 16, 12),
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: AppTheme.accentTint,
        borderRadius: BorderRadius.circular(16),
      ),
      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Icon(Icons.notifications_active_outlined, color: AppTheme.accentOliveDark),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base, color: AppTheme.ink)),
            const SizedBox(height: 3),
            Text(text, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.35)),
            if (action) ...[
              const SizedBox(height: 10),
              FilledButton(
                onPressed: _busy ? null : _enable,
                style: FilledButton.styleFrom(backgroundColor: AppTheme.accentOliveDark, shape: const StadiumBorder()),
                child: Text(_busy ? 'A ativar…' : 'Ativar notificações'),
              ),
            ],
          ]),
        ),
      ]),
    );
  }
}
