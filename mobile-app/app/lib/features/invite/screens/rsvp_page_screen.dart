import 'package:flutter/material.dart';

import '../../../core/wedding/date_format_pt.dart';
import 'package:go_router/go_router.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/public_state.dart';
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

  /// Só para as capturas de ecrã: dados de um convite sem ir ao servidor.
  @visibleForTesting
  static Future<Map<String, dynamic>?> Function(String token)? debugLoader;

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
      final loader = RsvpPageScreen.debugLoader;
      if (loader != null) {
        final data = await loader(widget.token);
        _rsvpStatus = data?['rsvp_status'] as String?;
        return data;
      }
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
              return PublicStateView(
                pose: MascotPose.sad,
                title: 'Convite não encontrado',
                message: 'O link pode estar incompleto ou já não existir. Confirma com quem te convidou.',
                actions: [PrimaryButton(label: 'Ir para o início', onPressed: () => context.go('/welcome'))],
              );
            }
            if (_submitted) {
              return const PublicStateView(
                pose: MascotPose.clink,
                title: 'Resposta enviada!',
                message: 'Obrigado. Os anfitriões já sabem a tua resposta.',
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

            // Convite "de papel" (pedido 2026-10-17: "faz um mais bonito
            // para casamentos"): cartão branco com moldura fina, nomes em
            // letra de título, ornamento e a data por extenso.
            final date = weddingDate == null ? null : DateTime.tryParse(weddingDate);
            final first = (guestName ?? '').trim().split(' ').first;
            final isCouple = (name2 ?? '').trim().isNotEmpty;
            const months = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];
            const weekdays = ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado', 'domingo'];
            return Center(
              child: SingleChildScrollView(
                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 24, AppTheme.screenMargin, 32),
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxWidth: 440),
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.stretch,
                    children: [
                      Container(
                        padding: const EdgeInsets.all(8),
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(30),
                          boxShadow: const [BoxShadow(color: Color(0x1A3F4A30), blurRadius: 30, offset: Offset(0, 12))],
                        ),
                        child: Container(
                          padding: const EdgeInsets.fromLTRB(22, 26, 22, 26),
                          decoration: BoxDecoration(
                            borderRadius: BorderRadius.circular(24),
                            border: Border.all(color: const Color(0xFFCBD5BE)),
                            gradient: const LinearGradient(
                              begin: Alignment.topCenter,
                              end: Alignment.bottomCenter,
                              colors: [Color(0xFFFFFFFF), Color(0xFFFBF7EE)],
                            ),
                          ),
                          child: Column(
                            children: [
                              const TchinMascot(pose: MascotPose.clink, width: 96),
                              const SizedBox(height: 14),
                              Text(
                                isCouple ? 'COM MUITA ALEGRIA' : 'ESTÁS CONVIDADO',
                                style: const TextStyle(fontSize: 11, letterSpacing: 3, fontWeight: FontWeight.w700, color: Color(0xFF8F8B84)),
                              ),
                              const SizedBox(height: 12),
                              if (isCouple) ...[
                                Text(name1 ?? '', textAlign: TextAlign.center, style: AppTypography.displaySerif(fontSize: 38, color: AppTheme.ink)),
                                Text('&', style: AppTypography.displaySerif(fontSize: 28, color: AppTheme.accentOliveDark).copyWith(fontStyle: FontStyle.italic)),
                                Text(name2!, textAlign: TextAlign.center, style: AppTypography.displaySerif(fontSize: 38, color: AppTheme.ink)),
                              ] else
                                Text(coupleNames, textAlign: TextAlign.center, style: AppTypography.displaySerif(fontSize: 34, color: AppTheme.ink)),
                              const SizedBox(height: 14),
                              Text(
                                isCouple ? 'convidam-te para celebrar o seu casamento' : 'convida-te para celebrar',
                                textAlign: TextAlign.center,
                                style: const TextStyle(fontSize: AppFontSize.base, fontStyle: FontStyle.italic, color: AppTheme.inkMuted),
                              ),
                              const SizedBox(height: 18),
                              const Row(
                                children: [
                                  Expanded(child: Divider(color: Color(0xFFCBD5BE), thickness: 1)),
                                  Padding(
                                    padding: EdgeInsets.symmetric(horizontal: 10),
                                    child: Icon(Icons.favorite, size: 14, color: AppTheme.accentOliveDark),
                                  ),
                                  Expanded(child: Divider(color: Color(0xFFCBD5BE), thickness: 1)),
                                ],
                              ),
                              const SizedBox(height: 16),
                              if (date != null) ...[
                                Text(weekdays[date.weekday - 1].toUpperCase(),
                                    style: const TextStyle(fontSize: 11, letterSpacing: 2.5, fontWeight: FontWeight.w700, color: Color(0xFF8F8B84))),
                                const SizedBox(height: 4),
                                Text(
                                  '${date.day} de ${months[date.month - 1]} de ${date.year}',
                                  textAlign: TextAlign.center,
                                  style: const TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: AppTheme.ink),
                                ),
                              ],
                              if (location != null && location.isNotEmpty) ...[
                                const SizedBox(height: 6),
                                Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    const Icon(Icons.place_outlined, size: 16, color: AppTheme.inkMuted),
                                    const SizedBox(width: 4),
                                    Flexible(child: Text(location, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted))),
                                  ],
                                ),
                              ],
                            ],
                          ),
                        ),
                      ),
                      const SizedBox(height: 26),
                      Text(
                        first.isEmpty ? 'Contamos contigo?' : '$first, contamos contigo?',
                        textAlign: TextAlign.center,
                        style: const TextStyle(fontSize: AppFontSize.xl + 2, fontWeight: FontWeight.w700, color: AppTheme.ink),
                      ),
                      const SizedBox(height: 20),
                      Row(
                        children: [
                          Expanded(
                            child: _RsvpChoiceButton(
                              label: 'Vou!',
                              selected: _rsvpStatus == 'confirmed',
                              onTap: () => setState(() => _rsvpStatus = 'confirmed'),
                            ),
                          ),
                          const SizedBox(width: 10),
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
                        const SizedBox(height: 18),
                        if (plusOneAllowed) ...[
                          TextField(
                            controller: _plusOneName,
                            textCapitalization: TextCapitalization.words,
                            decoration: const InputDecoration(hintText: 'Nome do acompanhante (opcional)'),
                          ),
                          const SizedBox(height: 10),
                        ],
                        TextField(
                          controller: _dietaryRestrictions,
                          decoration: const InputDecoration(hintText: 'Alergias ou restrições (opcional)'),
                        ),
                        const SizedBox(height: 10),
                      ],
                      if (_rsvpStatus != null)
                        TextField(
                          controller: _guestMessage,
                          maxLines: 3,
                          minLines: 2,
                          decoration: const InputDecoration(hintText: 'Uma mensagem para os anfitriões (opcional)'),
                        ),
                      const SizedBox(height: 20),
                      PrimaryButton(
                        label: _submitting ? 'A enviar…' : 'Confirmar resposta',
                        loading: _submitting,
                        onPressed: _rsvpStatus == null || _submitting ? null : _submit,
                      ),
                    ],
                  ),
                ),
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
    return Material(
      color: selected ? AppTheme.accentOliveDark : AppTheme.surface,
      borderRadius: BorderRadius.circular(AppRadius.lg),
      child: InkWell(
        borderRadius: BorderRadius.circular(AppRadius.lg),
        onTap: onTap,
        child: Container(
          height: 54,
          alignment: Alignment.center,
          child: Text(
            label,
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.ink),
          ),
        ),
      ),
    );
  }
}
