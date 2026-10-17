import 'package:flutter/material.dart';

import 'package:go_router/go_router.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/public_state.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/install_app_sheet.dart';
import '../../../core/models/models.dart';
import '../../../core/guest_home/guest_home_providers.dart';
import '../../guest_home/screens/guest_onboarding_wizard_screen.dart';

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
  bool _submitted = false;
  bool _declined = false;

  @override
  void initState() {
    super.initState();
    _dataFuture = _loadGuest();
  }

  /// `get_rsvp_details` (096) traz tudo o que o percurso completo precisa
  /// (limite de acompanhantes, tipo de evento, respostas anteriores);
  /// se ainda não existir no servidor, cai para `get-rsvp-by-token`.
  Future<Map<String, dynamic>?> _loadGuest() async {
    try {
      final loader = RsvpPageScreen.debugLoader;
      if (loader != null) return await loader(widget.token);
      try {
        final res = await supabase.rpc('get_rsvp_details', params: {'p_token': widget.token});
        if (res is Map<String, dynamic>) {
          final e = (res['event'] as Map?)?.cast<String, dynamic>() ?? const {};
          return {
            ...res,
            'wedding_partner_name_1': e['partner_name_1'],
            'wedding_partner_name_2': e['partner_name_2'],
            'wedding_date': e['wedding_date'],
            'wedding_location': (e['venue'] as String?)?.isNotEmpty == true ? e['venue'] : e['location'],
            'event_type': e['event_type'],
            'venue': e['venue'],
            'location': e['location'],
            'ceremony_time': e['ceremony_time'],
          };
        }
      } catch (_) {}
      final response = await supabase.functions.invoke('get-rsvp-by-token', body: {'token': widget.token});
      return response.data as Map<String, dynamic>?;
    } catch (_) {
      return null;
    }
  }

  /// Abre o mesmo percurso do convidado na app (canvas Convidado 1–8):
  /// vais?, quem vai contigo, idades, menu, alergias, de quem és
  /// convidado e a relação — gravado pelo `rsvp_token`.
  Future<void> _answer(Map<String, dynamic> d) async {
    final weddingId = (d['wedding_id'] as String?) ?? '';
    final max = (d['max_companions'] as num?)?.toInt() ?? ((d['plus_one_allowed'] as bool? ?? false) ? 1 : 0);
    final guest = Guest(
      id: (d['guest_id'] as String?) ?? '',
      weddingId: weddingId,
      name: (d['guest_name'] as String?) ?? '',
      maxCompanions: max,
      plusOneAllowed: max > 0,
      ageGroup: (d['age_group'] as String?) ?? 'adult',
      group: (d['group_label'] as String?) ?? '',
      side: switch (d['side']) {
        'couple_a' => WeddingSide.groom,
        'couple_b' => WeddingSide.bride,
        _ => WeddingSide.both,
      },
      plusOneName: d['plus_one_name'] as String?,
      menuSelection: d['menu_selection'] as String?,
      dietaryRestrictions: d['dietary_restrictions'] as String?,
      rsvpToken: widget.token,
    );
    final event = GuestWedding(
      weddingId: weddingId,
      partnerName1: (d['wedding_partner_name_1'] as String?) ?? '',
      partnerName2: d['wedding_partner_name_2'] as String?,
      weddingDate: d['wedding_date'] == null ? null : DateTime.tryParse(d['wedding_date'] as String),
      venue: d['venue'] as String?,
      location: (d['location'] as String?) ?? d['wedding_location'] as String?,
      ceremonyTime: d['ceremony_time'] as String?,
      eventType: EventType.fromDb(d['event_type'] as String?),
    );
    final companions = [
      for (final c in ((d['companions'] as List?) ?? const []).cast<Map>())
        GuestCompanion(
          name: (c['name'] as String?) ?? '',
          ageGroup: (c['age_group'] as String?) ?? 'adult',
          isChild: c['age_group'] == 'child',
          childAge: (c['child_age'] as num?)?.toInt(),
          menu: c['menu'] as String?,
          allergies: ((c['allergies'] as List?) ?? const []).cast<String>(),
          accompaniedBy: c['accompanied_by'] as String?,
          willInstallApp: c['will_install_app'] as bool? ?? false,
        ),
    ];
    final nav = Navigator.of(context);
    await nav.push(MaterialPageRoute<void>(
      builder: (route) => GuestOnboardingWizardScreen(
        weddingId: weddingId,
        guest: guest,
        rsvpToken: widget.token,
        event: event,
        initialCompanions: companions,
        onDone: () {
          if (nav.canPop()) nav.pop();
        },
      ),
    ));
    if (!mounted) return;
    final fresh = await _loadGuest();
    if (!mounted) return;
    final status = fresh?['rsvp_status'] as String?;
    if (status == 'confirmed' || status == 'declined') {
      setState(() {
        _submitted = true;
        _declined = status == 'declined';
        _dataFuture = Future.value(fresh);
      });
      if (status == 'confirmed') showInstallAppSheet(context);
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
            final answered = data['rsvp_status'] == 'confirmed' || data['rsvp_status'] == 'declined';
            if (_submitted) {
              return PublicStateView(
                pose: _declined ? MascotPose.wave : MascotPose.clink,
                title: _declined ? 'Resposta enviada' : 'Até lá!',
                message: _declined
                    ? 'Obrigado por avisares. Os anfitriões já sabem.'
                    : 'Os anfitriões já sabem a tua resposta. Instala a app para veres o programa, a tua mesa e as fotos.',
                actions: [
                  if (!_declined) PrimaryButton(label: 'Instalar a app', onPressed: () => showInstallAppSheet(context)),
                  TextButton(onPressed: () => setState(() => _submitted = false), child: const Text('Ver o convite')),
                ],
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
                      if (answered) ...[
                        Text(
                          data['rsvp_status'] == 'confirmed' ? 'Já confirmaste a tua presença.' : 'Disseste que não podes ir.',
                          textAlign: TextAlign.center,
                          style: const TextStyle(fontSize: AppFontSize.base, color: AppTheme.inkMuted),
                        ),
                        const SizedBox(height: 14),
                      ],
                      PrimaryButton(
                        label: answered ? 'Mudar a resposta' : 'Responder ao convite',
                        onPressed: () => _answer(data),
                      ),
                      const SizedBox(height: 10),
                      OutlinedButton.icon(
                        onPressed: () => showInstallAppSheet(context),
                        icon: const Icon(Icons.download_rounded, size: 18),
                        label: const Text('Instalar a app'),
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
