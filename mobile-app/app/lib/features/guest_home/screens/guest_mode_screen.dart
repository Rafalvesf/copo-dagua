import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import 'guest_home_screen.dart' show GuestWeddingCard;

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

  Future<void> _join() async {
    final code = _code.text.trim();
    if (code.isEmpty) {
      setState(() => _codeError = 'Indica o código do casal');
      return;
    }
    setState(() {
      _joining = true;
      _codeError = null;
    });
    try {
      await joinWeddingByCode(code);
      if (!mounted) return;
      _code.clear();
      ref.invalidate(guestWeddingsProvider);
    } catch (e) {
      if (!mounted) return;
      setState(() {
        _codeError = e is PostgrestException && e.code == 'P0002'
            ? 'Código inválido — confirma com o casal.'
            : 'Não foi possível associar o código. Tenta novamente.';
      });
    } finally {
      if (mounted) setState(() => _joining = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final weddingsAsync = ref.watch(guestWeddingsProvider);

    return Padding(
      padding: EdgeInsets.only(
        left: 20,
        right: 20,
        top: 20,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        mainAxisSize: MainAxisSize.min,
        children: [
          const Text(
            'Modo convidado',
            style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink),
          ),
          const SizedBox(height: 4),
          const Text(
            'Junta-te a outro casamento com o código do casal, usando a mesma conta.',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: 13),
          ),
          const SizedBox(height: 20),
          Container(
            padding: const EdgeInsets.all(16),
            decoration: BoxDecoration(
              color: AppTheme.surface,
              borderRadius: BorderRadius.circular(20),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                AuthTextField(
                  label: 'Código do casal',
                  controller: _code,
                  errorText: _codeError,
                ),
                const SizedBox(height: 12),
                PrimaryButton(
                  label: 'Entrar',
                  loading: _joining,
                  onPressed: _join,
                ),
              ],
            ),
          ),
          const SizedBox(height: 20),
          weddingsAsync.when(
            loading: () => const Padding(
              padding: EdgeInsets.symmetric(vertical: 12),
              child: Center(child: CircularProgressIndicator()),
            ),
            error: (err, st) => const Text(
              'Não foi possível carregar os teus casamentos.',
              style: TextStyle(color: AppTheme.inkMuted),
            ),
            data: (weddings) {
              if (weddings.isEmpty) {
                return const Text(
                  'Ainda não te juntaste a nenhum casamento como convidado.',
                  style: TextStyle(color: AppTheme.inkMuted),
                );
              }
              return Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const Text(
                    'Os teus casamentos',
                    style: TextStyle(fontWeight: FontWeight.w700, fontSize: 14, color: AppTheme.ink),
                  ),
                  const SizedBox(height: 10),
                  for (final wedding in weddings)
                    Padding(
                      padding: const EdgeInsets.only(bottom: 12),
                      child: GuestWeddingCard(
                        wedding: wedding,
                        onTap: () {
                          Navigator.of(context).pop();
                          context.push('/guest-home/${wedding.weddingId}');
                        },
                      ),
                    ),
                ],
              );
            },
          ),
        ],
      ),
    );
  }
}
