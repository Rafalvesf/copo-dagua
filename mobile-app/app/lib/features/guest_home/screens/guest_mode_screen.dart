import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../core/models/models.dart';
import '../../../core/wedding/date_format_pt.dart';

/// Acedido a partir de "Definições" pelo lado do casal — deixa uma conta
/// de casal também acompanhar outro casamento como convidado, usando o
/// `guest_code` desse casal (`050_wedding_guest_code.sql`), com a MESMA
/// conta/sessão (mesmo email/password) em vez de precisar de uma
/// segunda conta. Pedido explícito do utilizador (2026-09-13): "não
/// quero páginas separadas" — passou de ecrã próprio empilhado
/// (`GuestModeScreen`/`/guest-mode`) a uma folha modal sobre as
/// próprias Definições.
Future<void> showGuestModeSheet(BuildContext context) {
  return showModalBottomSheet(
    context: context,
    isScrollControlled: true,
    backgroundColor: Colors.white,
    shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(28))),
    builder: (context) => const _GuestModeSheet(),
  );
}

class _GuestModeSheet extends ConsumerStatefulWidget {
  const _GuestModeSheet();

  @override
  ConsumerState<_GuestModeSheet> createState() => _GuestModeSheetState();
}

class _GuestModeSheetState extends ConsumerState<_GuestModeSheet> {
  final _code = TextEditingController();
  bool _joining = false;
  String? _codeError;

  @override
  void dispose() {
    _code.dispose();
    super.dispose();
  }

  void _open(String weddingId) {
    final router = GoRouter.of(context);
    Navigator.of(context).pop();
    router.push('/guest-home/$weddingId');
  }

  Future<void> _join() async {
    final code = _code.text.trim();
    if (code.isEmpty) {
      setState(() => _codeError = 'Escreve o código do evento');
      return;
    }
    setState(() {
      _joining = true;
      _codeError = null;
    });
    try {
      final result = await joinWeddingByCode(code);
      if (!mounted) return;
      _code.clear();
      ref.invalidate(guestWeddingsProvider);
      ref.invalidate(myGuestRowProvider(result.weddingId));
      // Entra logo no evento (antes ficava na folha sem nada acontecer).
      _open(result.weddingId);
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _codeError = e is PostgrestException && e.code == 'P0002'
            ? 'Código inválido — confirma com quem te convidou.'
            : 'Não foi possível entrar. Tenta novamente.'
                '${e is PostgrestException && e.code != null ? ' (erro ${e.code})' : ''}';
      });
    } finally {
      if (mounted) setState(() => _joining = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final weddingsAsync = ref.watch(guestWeddingsProvider);
    final weddings = weddingsAsync.asData?.value ?? const [];

    // Redesign 2026-10-17: folha branca com pega, campo grande para o
    // código e a lista dos eventos em linhas simples.
    return SafeArea(
      top: false,
      child: Padding(
        padding: EdgeInsets.only(
          left: AppTheme.screenMargin,
          right: AppTheme.screenMargin,
          top: 10,
          bottom: MediaQuery.of(context).viewInsets.bottom + 20,
        ),
        child: SingleChildScrollView(
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            mainAxisSize: MainAxisSize.min,
            children: [
              Center(
                child: Container(
                  width: 40,
                  height: 4,
                  decoration: BoxDecoration(color: AppTheme.borderMuted, borderRadius: BorderRadius.circular(2)),
                ),
              ),
              const SizedBox(height: 18),
              const Text(
                'Entrar num evento',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: AppFontSize.xxl, fontWeight: FontWeight.w700, color: AppTheme.ink),
              ),
              const SizedBox(height: 4),
              const Text(
                'Foste convidado? Escreve o código que recebeste.',
                textAlign: TextAlign.center,
                style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
              ),
              const SizedBox(height: 20),
              TextField(
                controller: _code,
                textAlign: TextAlign.center,
                textCapitalization: TextCapitalization.characters,
                onSubmitted: (_) => _join(),
                style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, letterSpacing: 3, color: AppTheme.ink),
                decoration: InputDecoration(
                  hintText: 'CÓDIGO',
                  hintStyle: const TextStyle(color: Color(0xFFB5B0A6), letterSpacing: 3),
                  errorText: _codeError,
                  errorMaxLines: 2,
                  filled: true,
                  fillColor: AppTheme.surface,
                  contentPadding: const EdgeInsets.symmetric(vertical: 18),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(AppRadius.lg), borderSide: BorderSide.none),
                  enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(AppRadius.lg), borderSide: BorderSide.none),
                  focusedBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(AppRadius.lg),
                    borderSide: const BorderSide(color: AppTheme.accentOliveDark, width: 1.5),
                  ),
                ),
              ),
              const SizedBox(height: 12),
              PrimaryButton(label: 'Entrar', loading: _joining, onPressed: _join),
              if (weddings.isNotEmpty) ...[
                const SizedBox(height: 24),
                const Text(
                  'OS TEUS EVENTOS',
                  style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: Color(0xFF8F8B84)),
                ),
                const SizedBox(height: 4),
                for (var i = 0; i < weddings.length; i++) ...[
                  if (i > 0) const Divider(height: 1, thickness: 1, color: AppTheme.borderMuted),
                  InkWell(
                    onTap: () => _open(weddings[i].weddingId),
                    child: Padding(
                      padding: const EdgeInsets.symmetric(vertical: 12),
                      child: Row(
                        children: [
                          Container(
                            width: 40,
                            height: 40,
                            decoration: const BoxDecoration(color: AppColors.gray, shape: BoxShape.circle),
                            child: const Icon(Icons.celebration_outlined, size: 20, color: AppTheme.accentOliveDark),
                          ),
                          const SizedBox(width: 12),
                          Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text(weddings[i].displayNames, style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                Text(
                                  [
                                    weddings[i].eventType.label,
                                    if (weddings[i].weddingDate != null) formatWeddingDateCaps(weddings[i].weddingDate!),
                                  ].join(' · '),
                                  style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
                                ),
                              ],
                            ),
                          ),
                          const Icon(Icons.chevron_right, size: 18, color: Color(0xFFB5B0A6)),
                        ],
                      ),
                    ),
                  ),
                ],
              ],
            ],
          ),
        ),
      ),
    );
  }
}
