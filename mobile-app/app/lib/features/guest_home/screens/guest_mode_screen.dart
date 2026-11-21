import 'package:flutter/material.dart';
import 'package:copo_dagua_app/features/events/screens/tickets_screens.dart' show openTicketPurchase;
import 'package:copo_dagua_app/core/events/tickets.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/guest_home/guest_home_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/island_sheet.dart';

/// Acedido a partir de "Definições" pelo lado do casal — deixa uma conta
/// de casal também acompanhar outro casamento como convidado, usando o
/// `guest_code` desse casal (`050_wedding_guest_code.sql`), com a MESMA
/// conta/sessão (mesmo email/password) em vez de precisar de uma
/// segunda conta. Pedido explícito do utilizador (2026-09-13): "não
/// quero páginas separadas" — passou de ecrã próprio empilhado
/// (`GuestModeScreen`/`/guest-mode`) a uma folha modal sobre as
/// próprias Definições.
Future<void> showGuestModeSheet(BuildContext context) {
  return showIslandSheet(
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
      // Evento pago (153): com o código compra-se o bilhete e entra-se logo.
      if (isTicketRequired(e)) {
        final opened = await openTicketPurchase(context, code: code);
        if (opened || !mounted) return;
      }
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
                  hintStyle: const TextStyle(color: Color(0xFF6E6A63), letterSpacing: 3),
                  errorText: _codeError,
                  errorMaxLines: 2,
                  filled: true,
                  fillColor: AppTheme.surface,
                  contentPadding: const EdgeInsets.symmetric(vertical: 18),
                  border: OutlineInputBorder(borderRadius: BorderRadius.circular(AppRadius.lg), borderSide: BorderSide.none),
                  enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(AppRadius.lg), borderSide: BorderSide.none),
                  focusedBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(AppRadius.lg),
                    borderSide: BorderSide(color: AppTheme.accentOliveDark, width: 1.5),
                  ),
                ),
              ),
              const SizedBox(height: 12),
              PrimaryButton(label: 'Entrar', loading: _joining, onPressed: _join),
              // Sem a lista dos eventos (pedido 2026-11-12): já estão em
              // "Os meus eventos".
            ],
          ),
        ),
      ),
    );
  }
}
