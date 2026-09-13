import 'package:flutter/material.dart';

import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

/// Página pública de RSVP — acessível sem sessão nenhuma, para um
/// convidado específico abrir o link partilhado pelos noivos
/// (`copodagua.pt/rsvp/{rsvp_token}`, `guests.rsvp_token`). Consome
/// `get-rsvp-by-token`/`submit-rsvp` (`060_rsvp_public_access.sql`,
/// `mobile-app/guests/api.md`) — nunca lê/escreve `guests` diretamente
/// (não há sessão para a RLS de `is_wedding_member()` autorizar).
/// Substitui a "Simular resposta do convidado" de `guest_detail_screen.dart`,
/// que ficava fora desta primeira versão.
class RsvpPageScreen extends StatefulWidget {
  final String token;

  const RsvpPageScreen({super.key, required this.token});

  @override
  State<RsvpPageScreen> createState() => _RsvpPageScreenState();
}

class _RsvpPageScreenState extends State<RsvpPageScreen> {
  late Future<Map<String, dynamic>?> _dataFuture;
  bool _submitting = false;
  bool _submitted = false;
  String? _rsvpStatus;
  final _plusOneName = TextEditingController();
  final _dietaryRestrictions = TextEditingController();
  final _guestMessage = TextEditingController();

  @override
  void initState() {
    super.initState();
    _dataFuture = _loadGuest();
  }

  @override
  void dispose() {
    _plusOneName.dispose();
    _dietaryRestrictions.dispose();
    _guestMessage.dispose();
    super.dispose();
  }

  Future<Map<String, dynamic>?> _loadGuest() async {
    try {
      final response = await supabase.functions.invoke(
        'get-rsvp-by-token',
        body: {'token': widget.token},
      );
      final data = response.data as Map<String, dynamic>?;
      if (data == null) return null;
      _rsvpStatus = data['rsvp_status'] as String?;
      _plusOneName.text = (data['plus_one_name'] as String?) ?? '';
      _dietaryRestrictions.text = (data['dietary_restrictions'] as String?) ?? '';
      _guestMessage.text = (data['guest_message'] as String?) ?? '';
      return data;
    } catch (_) {
      return null;
    }
  }

  Future<void> _submit() async {
    if (_rsvpStatus == null || _submitting) return;
    setState(() => _submitting = true);
    try {
      await supabase.functions.invoke(
        'submit-rsvp',
        body: {
          'token': widget.token,
          'rsvp_status': _rsvpStatus,
          'plus_one_name': _plusOneName.text.trim().isEmpty
              ? null
              : _plusOneName.text.trim(),
          'dietary_restrictions': _dietaryRestrictions.text.trim().isEmpty
              ? null
              : _dietaryRestrictions.text.trim(),
          'guest_message': _guestMessage.text.trim().isEmpty
              ? null
              : _guestMessage.text.trim(),
        },
      );
      if (mounted) setState(() => _submitted = true);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(
            content: Text('Não foi possível enviar a resposta. Tenta novamente.'),
          ),
        );
      }
    } finally {
      if (mounted) setState(() => _submitting = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: FutureBuilder<Map<String, dynamic>?>(
          future: _dataFuture,
          builder: (context, snapshot) {
            if (snapshot.connectionState != ConnectionState.done) {
              return const Center(child: CircularProgressIndicator());
            }
            final data = snapshot.data;
            if (data == null) {
              return Center(
                child: Padding(
                  padding: const EdgeInsets.all(24),
                  child: Text(
                    'Convite não encontrado.',
                    style: TextStyle(color: AppTheme.inkMuted),
                  ),
                ),
              );
            }
            if (_submitted) {
              return Center(
                child: Padding(
                  padding: const EdgeInsets.all(24),
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      const Icon(
                        Icons.check_circle_outline,
                        size: 56,
                        color: AppTheme.accentOliveDark,
                      ),
                      const SizedBox(height: 16),
                      const Text(
                        'Resposta enviada. Obrigado!',
                        textAlign: TextAlign.center,
                        style: TextStyle(fontWeight: FontWeight.w700, fontSize: 18),
                      ),
                    ],
                  ),
                ),
              );
            }

            final name1 = data['wedding_partner_name_1'] as String?;
            final name2 = data['wedding_partner_name_2'] as String?;
            final coupleNames = (name2 == null || name2.isEmpty)
                ? (name1 ?? '')
                : '$name1 & $name2';
            final weddingDate = data['wedding_date'] as String?;
            final location = data['wedding_location'] as String?;
            final guestName = data['guest_name'] as String?;
            final plusOneAllowed = data['plus_one_allowed'] as bool? ?? false;

            return SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(
                AppTheme.screenMargin,
                12,
                AppTheme.screenMargin,
                32,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  Text(
                    'Olá, $guestName',
                    textAlign: TextAlign.center,
                    style: const TextStyle(fontWeight: FontWeight.w800, fontSize: 22),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    'Casamento de $coupleNames'
                    '${weddingDate != null ? ' — $weddingDate' : ''}'
                    '${location != null && location.isNotEmpty ? ' · $location' : ''}',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: 13),
                  ),
                  const SizedBox(height: 24),
                  Row(
                    children: [
                      Expanded(
                        child: _RsvpChoiceButton(
                          label: 'Vou!',
                          selected: _rsvpStatus == 'confirmed',
                          onTap: () => setState(() => _rsvpStatus = 'confirmed'),
                        ),
                      ),
                      const SizedBox(width: 12),
                      Expanded(
                        child: _RsvpChoiceButton(
                          label: 'Não vou poder ir',
                          selected: _rsvpStatus == 'declined',
                          onTap: () => setState(() => _rsvpStatus = 'declined'),
                        ),
                      ),
                    ],
                  ),
                  if (_rsvpStatus == 'confirmed') ...[
                    const SizedBox(height: 20),
                    if (plusOneAllowed)
                      TextField(
                        controller: _plusOneName,
                        decoration: const InputDecoration(
                          labelText: 'Nome do acompanhante (opcional)',
                        ),
                      ),
                    if (plusOneAllowed) const SizedBox(height: 12),
                    TextField(
                      controller: _dietaryRestrictions,
                      decoration: const InputDecoration(
                        labelText: 'Restrições alimentares (opcional)',
                      ),
                    ),
                    const SizedBox(height: 12),
                    TextField(
                      controller: _guestMessage,
                      maxLines: 3,
                      decoration: const InputDecoration(
                        labelText: 'Mensagem para os noivos (opcional)',
                      ),
                    ),
                  ],
                  const SizedBox(height: 24),
                  ElevatedButton(
                    onPressed: _rsvpStatus == null || _submitting ? null : _submit,
                    child: Text(_submitting ? 'A enviar...' : 'Confirmar resposta'),
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}

class _RsvpChoiceButton extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _RsvpChoiceButton({
    required this.label,
    required this.selected,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return OutlinedButton(
      onPressed: onTap,
      style: OutlinedButton.styleFrom(
        backgroundColor: selected ? AppTheme.accentOliveDark : Colors.transparent,
        foregroundColor: selected ? Colors.white : AppTheme.ink,
        padding: const EdgeInsets.symmetric(vertical: 14),
      ),
      child: Text(label, textAlign: TextAlign.center),
    );
  }
}
