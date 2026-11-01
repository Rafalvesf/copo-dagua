import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:shared_preferences/shared_preferences.dart';

import '../../shared/widgets/island_sheet.dart';
import '../models/models.dart';
import '../supabase/supabase_config.dart';
import '../support/support_providers.dart';
import '../theme/app_theme.dart';

/// Reportar erros e classificar a app (2026-10-31, migração 136).
/// - "Reportar um erro" (Definições → Ajuda) cria um pedido de suporte
///   com a categoria `bug` e o contexto (ecrã, plataforma) — aparece no
///   admin em Suporte.
/// - Pop-up de classificação: uma vez, depois de 5 aberturas da app e 3
///   dias de uso; "Agora não" volta a perguntar daqui a 14 dias. As notas
///   ficam em `app_ratings`. Com 3 estrelas ou menos sugere reportar o que
///   correu mal.

String _platform() {
  if (kIsWeb) return 'web';
  return switch (defaultTargetPlatform) {
    TargetPlatform.android => 'android',
    TargetPlatform.iOS => 'ios',
    _ => defaultTargetPlatform.name,
  };
}

String _route(BuildContext context) {
  try {
    return GoRouterState.of(context).uri.toString();
  } catch (_) {
    try {
      return GoRouter.of(context).routeInformationProvider.value.uri.toString();
    } catch (_) {
      return '';
    }
  }
}

/// Folha "Reportar um erro".
Future<void> showBugReportSheet(BuildContext context, WidgetRef ref) async {
  final where = _route(context);
  final sent = await showIslandSheet<bool>(
    context: context,
    isScrollControlled: true,
    builder: (_) => _BugReportForm(where: where),
  );
  if (sent == true && context.mounted) {
    ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
      content: Text('Obrigado! A equipa vai ver o erro. Acompanhas a resposta em "Falar com a equipa".'),
    ));
  }
}

class _BugReportForm extends ConsumerStatefulWidget {
  final String where;
  const _BugReportForm({required this.where});
  @override
  ConsumerState<_BugReportForm> createState() => _BugReportFormState();
}

class _BugReportFormState extends ConsumerState<_BugReportForm> {
  final _what = TextEditingController();
  final _steps = TextEditingController();
  bool _sending = false;
  String? _error;

  @override
  void dispose() {
    _what.dispose();
    _steps.dispose();
    super.dispose();
  }

  Future<void> _send() async {
    final what = _what.text.trim();
    if (what.length < 5) {
      setState(() => _error = 'Descreve o erro em poucas palavras.');
      return;
    }
    setState(() {
      _sending = true;
      _error = null;
    });
    final steps = _steps.text.trim();
    final subject = what.length > 70 ? '${what.substring(0, 70)}…' : what;
    final description = [
      what,
      if (steps.isNotEmpty) '\nO que estava a fazer:\n$steps',
      '\n— Ecrã: ${widget.where.isEmpty ? '?' : widget.where} · Plataforma: ${_platform()}',
    ].join('\n');
    try {
      await createSupportTicket(ref,
          subject: 'Erro: $subject', description: description, category: SupportTicketCategory.bug);
      if (mounted) Navigator.of(context).pop(true);
    } catch (_) {
      if (mounted) {
        setState(() {
          _sending = false;
          _error = 'Não foi possível enviar. Tenta novamente.';
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(20, 20, 20, 12),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: [
          Row(children: [
            Icon(Icons.bug_report_outlined, color: AppTheme.accentOliveDark),
            const SizedBox(width: 10),
            const Text('Reportar um erro', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ]),
          const SizedBox(height: 6),
          const Text('Conta-nos o que correu mal. Juntamos o ecrã onde estavas para o encontrarmos mais depressa.',
              style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
          const SizedBox(height: 16),
          TextField(
            controller: _what,
            autofocus: true,
            maxLines: 4,
            minLines: 3,
            maxLength: 800,
            textCapitalization: TextCapitalization.sentences,
            decoration: const InputDecoration(labelText: 'O que aconteceu?', alignLabelWithHint: true),
          ),
          const SizedBox(height: 8),
          TextField(
            controller: _steps,
            maxLines: 3,
            minLines: 2,
            maxLength: 500,
            textCapitalization: TextCapitalization.sentences,
            decoration: const InputDecoration(labelText: 'O que estavas a fazer? (opcional)', alignLabelWithHint: true),
          ),
          if (_error != null) ...[
            const SizedBox(height: 4),
            Text(_error!, style: const TextStyle(color: Color(0xFFB3261E), fontSize: 13)),
          ],
          const SizedBox(height: 12),
          FilledButton(
            onPressed: _sending ? null : _send,
            child: _sending
                ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2))
                : const Text('Enviar'),
          ),
        ]),
      ),
    );
  }
}

// ───────────────────────── Classificar a app ─────────────────────────

class RatingPrompt {
  static const _kOpens = 'rating_opens_v1';
  static const _kFirst = 'rating_first_v1';
  static const _kDone = 'rating_done_v1';
  static const _kSnooze = 'rating_snooze_until_v1';
  static bool _countedThisRun = false;
  static bool _shownThisRun = false;

  /// Chamado quando a barra de baixo de um perfil aparece.
  static Future<void> maybeAsk(BuildContext context, WidgetRef ref) async {
    if (_shownThisRun || supabase.auth.currentUser == null) return;
    SharedPreferences prefs;
    try {
      prefs = await SharedPreferences.getInstance();
    } catch (_) {
      return;
    }
    final now = DateTime.now();
    if (!_countedThisRun) {
      _countedThisRun = true;
      await prefs.setInt(_kOpens, (prefs.getInt(_kOpens) ?? 0) + 1);
      if (prefs.getInt(_kFirst) == null) await prefs.setInt(_kFirst, now.millisecondsSinceEpoch);
    }
    if (prefs.getBool(_kDone) == true) return;
    final snooze = prefs.getInt(_kSnooze);
    if (snooze != null && now.millisecondsSinceEpoch < snooze) return;
    final first = DateTime.fromMillisecondsSinceEpoch(prefs.getInt(_kFirst) ?? now.millisecondsSinceEpoch);
    if ((prefs.getInt(_kOpens) ?? 0) < 5 || now.difference(first).inDays < 3) return;

    _shownThisRun = true;
    // Deixa o guia / brinde de entrada acabar primeiro.
    await Future<void>.delayed(const Duration(seconds: 6));
    if (!context.mounted) return;
    final answered = await show(context, ref);
    if (answered) {
      await prefs.setBool(_kDone, true);
    } else {
      await prefs.setInt(_kSnooze, now.add(const Duration(days: 14)).millisecondsSinceEpoch);
    }
  }

  /// Abre o pop-up. Devolve `true` se a pessoa deu uma nota.
  static Future<bool> show(BuildContext context, WidgetRef ref) async {
    final result = await showIslandDialog<(int, String)>(
      context: context,
      builder: (_) => const _RatingForm(),
    );
    if (result == null) return false;
    final (stars, comment) = result;
    try {
      await supabase.from('app_ratings').insert({
        'stars': stars,
        if (comment.trim().isNotEmpty) 'comment': comment.trim(),
        'platform': _platform(),
      });
    } catch (_) {}
    if (!context.mounted) return true;
    if (stars <= 3) {
      final report = await showIslandDialog<bool>(
        context: context,
        builder: (ctx) => IslandAlert(
          title: const Text('Obrigado pela sinceridade'),
          content: const Text('Encontraste algum erro? Conta-nos o que falhou e tratamos disso.'),
          actions: [
            TextButton(onPressed: () => Navigator.of(ctx).pop(false), child: const Text('Agora não')),
            FilledButton(onPressed: () => Navigator.of(ctx).pop(true), child: const Text('Reportar um erro')),
          ],
        ),
      );
      if (report == true && context.mounted) await showBugReportSheet(context, ref);
    } else {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Obrigado pela tua nota!')),
      );
    }
    return true;
  }
}

class _RatingForm extends StatefulWidget {
  const _RatingForm();
  @override
  State<_RatingForm> createState() => _RatingFormState();
}

class _RatingFormState extends State<_RatingForm> {
  int _stars = 0;
  final _comment = TextEditingController();

  @override
  void dispose() {
    _comment.dispose();
    super.dispose();
  }

  static const _labels = ['', 'Não gosto', 'Pode melhorar', 'Está bem', 'Gosto', 'Adoro!'];

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(20, 24, 20, 12),
        child: Column(mainAxisSize: MainAxisSize.min, children: [
          Image.asset('assets/mascot/duo_clink.png', height: 96),
          const SizedBox(height: 12),
          const Text('Estás a gostar da À Nossa!?',
              textAlign: TextAlign.center,
              style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 6),
          const Text('A tua nota ajuda-nos a melhorar.',
              textAlign: TextAlign.center, style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
          const SizedBox(height: 14),
          Row(mainAxisAlignment: MainAxisAlignment.center, children: [
            for (var i = 1; i <= 5; i++)
              IconButton(
                tooltip: '$i ${i == 1 ? 'estrela' : 'estrelas'}',
                iconSize: 38,
                onPressed: () => setState(() => _stars = i),
                icon: Icon(i <= _stars ? Icons.star_rounded : Icons.star_outline_rounded,
                    color: i <= _stars ? const Color(0xFFE0B23A) : AppTheme.inkMuted),
              ),
          ]),
          SizedBox(
            height: 22,
            child: Text(_labels[_stars], style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
          ),
          if (_stars > 0) ...[
            const SizedBox(height: 10),
            TextField(
              controller: _comment,
              maxLines: 3,
              minLines: 2,
              maxLength: 500,
              textCapitalization: TextCapitalization.sentences,
              decoration: InputDecoration(
                labelText: _stars <= 3 ? 'O que podemos melhorar? (opcional)' : 'Queres dizer mais alguma coisa? (opcional)',
                alignLabelWithHint: true,
              ),
            ),
          ],
          const SizedBox(height: 10),
          Row(children: [
            Expanded(
              child: TextButton(onPressed: () => Navigator.of(context).pop(), child: const Text('Agora não')),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: FilledButton(
                onPressed: _stars == 0 ? null : () => Navigator.of(context).pop((_stars, _comment.text)),
                child: const Text('Enviar'),
              ),
            ),
          ]),
        ]),
      ),
    );
  }
}
