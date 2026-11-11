import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/profile/username.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

/// Escolher o @ (migração 163). Verifica enquanto se escreve se está livre.
class UsernameScreen extends ConsumerStatefulWidget {
  const UsernameScreen({super.key});

  @override
  ConsumerState<UsernameScreen> createState() => _UsernameScreenState();
}

const _months = ['jan.', 'fev.', 'mar.', 'abr.', 'mai.', 'jun.', 'jul.', 'ago.', 'set.', 'out.', 'nov.', 'dez.'];

class _UsernameScreenState extends ConsumerState<UsernameScreen> {
  final _ctrl = TextEditingController();
  Timer? _debounce;
  String? _status; // invalid | reserved | taken | ok | mine | checking
  String? _formatError;
  bool _saving = false;
  bool _filled = false;

  @override
  void dispose() {
    _debounce?.cancel();
    _ctrl.dispose();
    super.dispose();
  }

  void _onChanged(String v) {
    final norm = normalizeUsername(v);
    if (norm != v) {
      _ctrl.value = TextEditingValue(text: norm, selection: TextSelection.collapsed(offset: norm.length));
    }
    _debounce?.cancel();
    final err = usernameFormatError(norm);
    setState(() {
      _formatError = norm.isEmpty ? null : err;
      _status = err == null && norm.isNotEmpty ? 'checking' : null;
    });
    if (err != null || norm.isEmpty) return;
    _debounce = Timer(const Duration(milliseconds: 400), () async {
      String s;
      try {
        s = await usernameStatus(norm);
      } catch (_) {
        s = 'error';
      }
      if (!mounted || normalizeUsername(_ctrl.text) != norm) return;
      setState(() => _status = s);
    });
  }

  Future<void> _save() async {
    setState(() => _saving = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      final u = await setMyUsername(_ctrl.text);
      ref.invalidate(myUsernameProvider);
      messenger.showSnackBar(SnackBar(content: Text('O teu @ agora é @$u.')));
      if (mounted) context.pop();
    } on UsernameError catch (e) {
      setState(() => _status = e.code);
      if (e.code == 'too_soon') {
        final d = e.nextChangeAt;
        messenger.showSnackBar(SnackBar(
          content: Text(d == null ? 'Só podes mudar o @ uma vez a cada 30 dias.' : 'Só podes voltar a mudar o @ a partir de ${d.day} ${_months[d.month - 1]}.'),
        ));
      }
    } catch (_) {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final mine = ref.watch(myUsernameProvider).value;
    if (!_filled && mine?.username != null) {
      _filled = true;
      _ctrl.text = mine!.username!;
      _status = 'mine';
    }
    final locked = mine != null && mine.username != null && !mine.canChange;
    final (msg, color, icon) = switch (_formatError != null ? 'format' : _status) {
      'format' => (_formatError!, const Color(0xFFB3261E), Hi.exclamationCircle),
      'checking' => ('A verificar…', AppTheme.inkMuted, Hi.clock),
      'ok' => ('Está livre. Fica só teu.', const Color(0xFF3F7A50), Hi.checkBadge),
      'mine' => ('É o teu @.', const Color(0xFF3F7A50), Hi.checkBadge),
      'taken' => ('Já é de outra conta.', const Color(0xFFB3261E), Hi.noSymbol),
      'reserved' => ('Este @ está reservado.', const Color(0xFFB3261E), Hi.noSymbol),
      'invalid' => ('Este @ não é válido.', const Color(0xFFB3261E), Hi.exclamationCircle),
      'error' => ('Não foi possível verificar. Tenta outra vez.', const Color(0xFFB3261E), Hi.exclamationCircle),
      _ => ('', AppTheme.inkMuted, Hi.informationCircle),
    };
    final canSave = !locked && !_saving && _formatError == null && _status == 'ok';
    return GradientScaffold(
      background: AppBackground.subtle,
      appBar: AppBar(backgroundColor: Colors.transparent, elevation: 0, title: const Text('O teu @')),
      body: SafeArea(top: false, 
        child: ListView(
          padding: ( const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 32)).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
          children: [
            TextField(
              controller: _ctrl,
              enabled: !locked,
              autofocus: mine?.username == null,
              autocorrect: false,
              enableSuggestions: false,
              maxLength: 30,
              onChanged: _onChanged,
              onSubmitted: (_) => canSave ? _save() : null,
              style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700),
              decoration: const InputDecoration(
                labelText: 'Nome de utilizador',
                prefixText: '@',
                counterText: '',
              ),
            ),
            const SizedBox(height: 10),
            if (msg.isNotEmpty)
              Row(
                children: [
                  Icon(icon, size: 18, color: color),
                  const SizedBox(width: 6),
                  Expanded(child: Text(msg, style: TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: color))),
                ],
              ),
            const SizedBox(height: 18),
            const Text(
              '3 a 30 caracteres: letras, números, ponto e _. Sem espaços nem acentos. Podes mudar uma vez a cada 30 dias.',
              style: TextStyle(fontSize: AppFontSize.md, height: 1.45, color: AppTheme.inkMuted),
            ),
            if (locked) ...[
              const SizedBox(height: 10),
              Text(
                'Podes voltar a mudar a partir de ${mine.nextChangeAt!.day} ${_months[mine.nextChangeAt!.month - 1]}.',
                style: const TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: AppTheme.ink),
              ),
            ],
            const SizedBox(height: 26),
            PrimaryButton(label: 'Guardar', loading: _saving, onPressed: canSave ? _save : null),
          ],
        ),
      ),
    );
  }
}
