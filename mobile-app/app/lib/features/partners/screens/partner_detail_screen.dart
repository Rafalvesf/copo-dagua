import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import 'package:share_plus/share_plus.dart';
import 'package:flutter/services.dart';
import '../../../shared/public_link.dart';
import '../../../shared/widgets/line_icon.dart';
import '../../../core/chat/presence.dart' show responseLabel;
import '../../../core/pending_deep_link.dart';
import '../../../shared/widgets/install_app_sheet.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../core/social/social.dart';
import '../../profile/profile_widgets.dart' show FollowedByRow, ProfileButton, ProfileCard_Partners;
import 'package:copo_dagua_app/core/partners/promotions.dart';
import 'package:copo_dagua_app/core/analytics/funnel.dart';
import 'package:copo_dagua_app/shared/widgets/founder_badge.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/review_tile.dart';
import '../../../core/page_transitions.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/chat/chat_helpers.dart';
import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../shared/widgets/page_kit.dart' show KitCaps, KitPills, KitPill;
import '../../../core/partners/favorite_partners_controller.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/reviews/review_providers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../core/wedding/organizers.dart';
import '../../../shared/widgets/scroll_aware_back_button.dart';
import '../../../shared/widgets/alert_outline.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../partner_style.dart';
import '../../../shared/money.dart';
import '../../../core/partners/category_figure.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/v2_kit.dart';
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';
import '../../partner_pro/partner_pro_screen.dart' show ProBadge;
import '../../../core/profile/username.dart';


/// Eventos onde ainda dá para reservar este parceiro: elegíveis (sou dono, ou
/// co-organizador com permissão de tratar de parceiros — `OrganizerPerm.conversas`)
/// E onde ainda não pedi orçamento nem pacote. Em dúvida (erro), não oferece
/// (conservador, para nunca sugerir um duplo pedido).
final _partnerBookableEventsProvider =
    FutureProvider.autoDispose.family<List<Wedding>, String>((ref, partnerId) async {
  final myId = ref.watch(authControllerProvider).profile?.id;
  final events = ref.watch(weddingControllerProvider.select((s) => s.events));
  final out = <Wedding>[];
  for (final w in events) {
    if (w.ownerId != myId) {
      try {
        final r = await supabase.rpc('my_event_permissions', params: {'p_wedding': w.id});
        final perms = r is Map ? OrganizerPerms.fromJson(r, isOwner: r['is_owner'] == true) : OrganizerPerms.all;
        if (!perms.can(OrganizerPerm.conversas)) continue;
      } catch (_) {
        // Antes da migração de permissões: permitido.
      }
    }
    try {
      final booking = await supabase
          .from('bookings')
          .select('id')
          .eq('wedding_id', w.id)
          .eq('partner_id', partnerId)
          .inFilter('status', ['awaiting_deposit', 'confirmed', 'completed']);
      if (booking.isNotEmpty) continue;
      final quote = await supabase
          .from('quote_requests')
          .select('id')
          .eq('wedding_id', w.id)
          .eq('partner_id', partnerId)
          .inFilter('status', ['pending', 'viewed', 'proposal_sent']);
      if (quote.isNotEmpty) continue;
    } catch (_) {
      continue; // em dúvida, não oferecer este evento
    }
    out.add(w);
  }
  return out;
});

class PartnerDetailScreen extends ConsumerStatefulWidget {
  final Partner partner;
  final bool selectionMode;

  /// Página pública (link "Partilhar perfil", 2026-11-12), vista sem
  /// sessão: "À Nossa!" e "Abrir na app" no topo; seguir, mensagem e
  /// pedir orçamento pedem para entrar e voltam aqui.
  final bool publicView;

  const PartnerDetailScreen({
    super.key,
    required this.partner,
    this.selectionMode = false,
    this.publicView = false,
  });

  /// Abre o parceiro numa folha que sobe de baixo (canvas "Parceiro —
  /// bottom sheet"): pega no topo, cantos de 28, fecha ao tocar fora ou
  /// ao arrastar para baixo. Devolve o parceiro escolhido em
  /// [selectionMode].
  static Future<Partner?> show(
    BuildContext context,
    Partner partner, {
    bool selectionMode = false,
  }) {
    // Página inteira, como no mockup "Perfil do parceiro" (2026-10-19):
    // foto no topo com voltar e favorito, cartão branco por cima.
    return Navigator.of(context).push<Partner>(
      PageRouteBuilder<Partner>(
        transitionDuration: const Duration(milliseconds: 380),
        reverseTransitionDuration: const Duration(milliseconds: 380),
        pageBuilder: (context, animation, secondaryAnimation) => PartnerDetailScreen(
          partner: partner,
          selectionMode: selectionMode,
        ),
        // Mesma animação dos botões da app (`page_transitions.dart`).
        transitionsBuilder: (context, animation, secondaryAnimation, child) =>
            TopDownTransition(animation: animation, child: child),
      ),
    );
  }

  @override
  ConsumerState<PartnerDetailScreen> createState() =>
      _PartnerDetailScreenState();
}

class _PartnerDetailScreenState extends ConsumerState<PartnerDetailScreen> {
  bool _openingChat = false;
  bool _requestingQuote = false;
  /// Pacote escolhido no perfil (mockup «Perfis dos parceiros», 2026-11-15).
  int? _selectedPackage;
  final Set<String> _selectedExtras = {};
  int? _people;
  final _packageMessage = TextEditingController();
  final _scroll = ScrollController();
  /// «Como escolhem» (190): falso = igual para todos (escolhe-se aqui um
  /// menu), verdadeiro = cada um escolhe o seu na app antes de pagar.
  bool _eachChooses = false;
  /// «Quem paga» (190): verdadeiro = cada convidado paga a sua parte.
  bool _eachPays = false;

  @override
  void dispose() {
    _packageMessage.dispose();
    _scroll.dispose();
    super.dispose();
  }

  /// Escolhe o evento para onde reservar, entre os eventos **reserváveis**
  /// (elegíveis e onde ainda não pedi — [_partnerBookableEventsProvider]).
  /// Com um só, usa-o direto; com mais do que um, mostra o popup.
  Future<Wedding?> _chooseEvent() async {
    final bookable = await ref.read(_partnerBookableEventsProvider(widget.partner.id).future);
    if (bookable.isEmpty) return ref.read(weddingControllerProvider).wedding;
    if (bookable.length == 1) return bookable.first;
    if (!mounted) return null;
    return showModalBottomSheet<Wedding>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (_) => _EventPickerSheet(
        events: bookable,
        partnerName: widget.partner.name,
        myId: ref.read(authControllerProvider).profile?.id,
      ),
    );
  }

  /// «Pedir este pacote» (188): pacote, extras, pessoas e mensagem. Antes
  /// da migração (função em falta) cai no pedido de orçamento normal com
  /// o pacote na mensagem.
  Future<void> _requestPackage(ServicePackage pkg, List<ServiceExtra> extras, int people) async {
    if (_requestingQuote) return;
    final wedding = await _chooseEvent();
    if (wedding == null || !mounted) return;
    final chosen = extras.where((e) => _selectedExtras.contains(e.id)).toList();
    final summary = [
      'Pacote "${pkg.name}"',
      if (pkg.perPerson) 'para $people pessoas',
      if (chosen.isNotEmpty) 'com ${chosen.map((e) => e.name).join(', ')}',
      if (_eachPays) '(cada um paga o seu)',
    ].join(' ');
    final note = _packageMessage.text.trim();
    setState(() => _requestingQuote = true);
    Funnel.track('quote_request_start', ref: widget.partner.id);
    try {
      await supabase.rpc('request_package', params: {
        'p_partner_id': widget.partner.id,
        'p_wedding_id': wedding.id,
        'p_package_id': pkg.id,
        'p_extra_ids': chosen.map((e) => e.id).toList(),
        'p_people': people,
        'p_event_date': wedding.weddingDate?.toIso8601String().split('T').first,
        'p_message': note.isEmpty ? null : note,
        if (_eachPays) 'p_payer_mode': 'each',
      });
      try {
        await sendQuoteRequestMessage(
          weddingId: wedding.id,
          partnerId: widget.partner.id,
          partnerName: widget.partner.name,
          eventDate: wedding.weddingDate,
          message: [summary, if (note.isNotEmpty) note].join('\n'),
        );
      } catch (_) {}
      ref.invalidate(partnerRelationshipStatusProvider(widget.partner.id));
      ref.invalidate(_partnerBookableEventsProvider(widget.partner.id));
      if (mounted) {
        await _showRequestSent(
          title: 'Reserva pedida',
          body: '${widget.partner.name} aceita ou recusa — avisamos-te assim que responder.',
        );
      }
    } on PostgrestException catch (e) {
      if (!mounted) return;
      if (e.code == 'PGRST202' || e.code == '42883') {
        setState(() => _requestingQuote = false);
        await _requestQuote(initialMessage: 'Olá! Queremos o ${summary.substring(0, 1).toLowerCase()}${summary.substring(1)}.${note.isEmpty ? '' : ' $note'}');
        return;
      }
      final message = switch (e.code) {
        'P0002' => 'Este parceiro já não está disponível.',
        'P0010' => PartnerUnavailableException.message,
        'P0003' => 'Escolhe uma data com pelo menos 7 dias de antecedência.',
        'P0009' => 'Já fizeste um pedido a este parceiro. Só podes pedir outra vez se o pedido ou a reserva for cancelado.',
        _ when e.message.contains('too_few_people') => 'Este pacote pede mais pessoas.',
        _ when e.message.contains('too_many_people') => 'Este pacote não dá para tantas pessoas.',
        _ => 'Não foi possível enviar o pedido.',
      };
      _comingSoon(message);
    } catch (_) {
      if (mounted) _comingSoon('Não foi possível enviar o pedido.');
    } finally {
      if (mounted) setState(() => _requestingQuote = false);
    }
  }

  /// «Reservar mesa» (190): cada um escolhe o seu menu e extras na app.
  /// A reserva não tem sinal; quem paga é decidido em [_eachPays].
  Future<void> _requestTable(int people) async {
    if (_requestingQuote) return;
    final wedding = await _chooseEvent();
    if (wedding == null || !mounted) return;
    final note = _packageMessage.text.trim();
    final summary = 'Mesa para $people pessoas · cada um escolhe${_eachPays ? ' e paga' : ''} o seu';
    setState(() => _requestingQuote = true);
    Funnel.track('quote_request_start', ref: widget.partner.id);
    try {
      await supabase.rpc('request_table', params: {
        'p_partner_id': widget.partner.id,
        'p_wedding_id': wedding.id,
        'p_people': people,
        'p_event_date': wedding.weddingDate?.toIso8601String().split('T').first,
        'p_message': note.isEmpty ? null : note,
        'p_payer_mode': _eachPays ? 'each' : 'organizer',
      });
      try {
        await sendQuoteRequestMessage(
          weddingId: wedding.id,
          partnerId: widget.partner.id,
          partnerName: widget.partner.name,
          eventDate: wedding.weddingDate,
          message: [summary, if (note.isNotEmpty) note].join('\n'),
        );
      } catch (_) {}
      ref.invalidate(partnerRelationshipStatusProvider(widget.partner.id));
      ref.invalidate(_partnerBookableEventsProvider(widget.partner.id));
      if (mounted) {
        await _showRequestSent(
          title: 'Reserva pedida',
          body: '${widget.partner.name} aceita ou recusa — avisamos-te assim que responder.',
        );
      }
    } on PostgrestException catch (e) {
      if (!mounted) return;
      if (e.code == 'PGRST202' || e.code == '42883') {
        setState(() => _requestingQuote = false);
        await _requestQuote(initialMessage: 'Olá! Queremos uma ${summary.substring(0, 1).toLowerCase()}${summary.substring(1)}.${note.isEmpty ? '' : ' $note'}');
        return;
      }
      final message = switch (e.code) {
        'P0002' => 'Este parceiro já não está disponível.',
        'P0010' => PartnerUnavailableException.message,
        'P0003' => 'Escolhe uma data com pelo menos 7 dias de antecedência.',
        'P0009' => 'Já fizeste um pedido a este parceiro. Só podes pedir outra vez se o pedido ou a reserva for cancelado.',
        _ => 'Não foi possível enviar o pedido.',
      };
      _comingSoon(message);
    } catch (_) {
      if (mounted) _comingSoon('Não foi possível enviar o pedido.');
    } finally {
      if (mounted) setState(() => _requestingQuote = false);
    }
  }

  Widget _tableRequest(int people, Color ink, Color muted) {
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      Padding(
        padding: const EdgeInsets.only(top: 12),
        child: Text('Esta é a carta: cada convidado escolhe o seu menu e os extras na app.',
            textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: muted)),
      ),
      Padding(
        padding: const EdgeInsets.only(top: 24, bottom: 8),
        child: Text('MENSAGEM PARA ${widget.partner.name.toUpperCase()}',
            maxLines: 1, overflow: TextOverflow.ellipsis,
            style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: muted)),
      ),
      Container(
        padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 6),
        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
        child: TextField(
          controller: _packageMessage,
          minLines: 3,
          maxLines: 5,
          maxLength: 300,
          style: TextStyle(fontSize: 15, color: ink),
          decoration: const InputDecoration(
            border: InputBorder.none,
            enabledBorder: InputBorder.none,
            focusedBorder: InputBorder.none,
            filled: false,
            hintText: 'Ex.: mesa comprida junto à janela, um aniversariante…',
          ),
        ),
      ),
      const SizedBox(height: 16),
      Padding(
        padding: const EdgeInsets.only(bottom: 10),
        child: Row(children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Mesa para $people', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: ink)),
              Text(_eachPays ? 'Cada um escolhe e paga o seu' : 'Cada um escolhe · pagam vocês',
                  style: TextStyle(fontSize: 13, color: muted)),
            ]),
          ),
          Column(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Text('0 €', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: ink)),
            Text('agora', style: TextStyle(fontSize: 13, color: muted)),
          ]),
        ]),
      ),
      FilledButton(
        onPressed: _requestingQuote ? null : () => _requestTable(people),
        style: FilledButton.styleFrom(
          backgroundColor: ink,
          foregroundColor: Colors.white,
          minimumSize: const Size.fromHeight(52),
          shape: const StadiumBorder(),
          textStyle: TextStyle(
              fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 15, fontWeight: FontWeight.w700),
        ),
        child: const Text('Reservar mesa'),
      ),
      const SizedBox(height: 8),
      Text('${widget.partner.name} aceita ou recusa. A escolha fecha 3 dias antes do evento.',
          textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: muted)),
    ]);
  }

  @override
  void initState() {
    super.initState();
    Funnel.track('partner_view', ref: widget.partner.id);
    // Destaques personalizados (155): ver um parceiro = interesse na categoria.
    for (final slug in widget.partner.categorySlugs) {
      trackInterest(slug, 'view', partnerId: widget.partner.id);
    }
  }

  /// Sem sessão: entrar ou criar conta e voltar a esta página.
  void _needAccount() {
    PendingDeepLink.save('/parceiro/${widget.partner.id}');
    context.go('/welcome');
  }

  void _comingSoon(String message) {
    ScaffoldMessenger.of(
      context,
    ).showSnackBar(SnackBar(content: Text(message)));
  }

  /// Popup de confirmação depois de enviar um pedido/reserva (pedido do
  /// Rafael, 2026-11-18): "Reserva pedida" com um só botão "OK". O pagamento
  /// do sinal só acontece mais tarde, quando o parceiro aceita (no aceite).
  Future<void> _showRequestSent({required String title, required String body}) async {
    if (!mounted) return;
    await showModalBottomSheet<void>(
      context: context,
      isScrollControlled: true,
      backgroundColor: Colors.transparent,
      builder: (ctx) => Container(
        decoration: const BoxDecoration(
          color: AppTheme.background,
          borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
        ),
        padding: EdgeInsets.fromLTRB(20, 14, 20, 24 + MediaQuery.of(ctx).viewInsets.bottom),
        child: SafeArea(
          top: false,
          child: Column(
            mainAxisSize: MainAxisSize.min,
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Center(
                child: Container(
                  width: 40,
                  height: 4,
                  decoration: BoxDecoration(color: const Color(0xFFD8D3C8), borderRadius: BorderRadius.circular(999)),
                ),
              ),
              const SizedBox(height: 18),
              Center(
                child: Container(
                  width: 64,
                  height: 64,
                  alignment: Alignment.center,
                  decoration: const BoxDecoration(color: Color(0xFFE6EDE1), shape: BoxShape.circle),
                  child: const Icon(Hi.check, size: 30, color: Color(0xFF3F7A4F)),
                ),
              ),
              const SizedBox(height: 16),
              Text(title,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 8),
              Text(body,
                  textAlign: TextAlign.center,
                  style: const TextStyle(fontSize: 14, height: 1.5, color: Color(0xFF57534E))),
              const SizedBox(height: 20),
              SizedBox(
                height: 52,
                child: FilledButton(
                  style: FilledButton.styleFrom(
                    backgroundColor: AppTheme.ink,
                    foregroundColor: Colors.white,
                    shape: const StadiumBorder(),
                    textStyle: const TextStyle(
                        fontFamily: AppTheme.fontFamily,
                        fontFamilyFallback: AppTheme.fontFamilyFallback,
                        fontSize: 15,
                        fontWeight: FontWeight.w700),
                  ),
                  onPressed: () => Navigator.of(ctx).pop(),
                  child: const Text('OK'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Future<void> _openChat() async {
    final wedding = ref.read(weddingControllerProvider).wedding;
    if (wedding == null || _openingChat) return;
    setState(() => _openingChat = true);
    try {
      final partner = widget.partner;
      final conversationId = await getOrCreateConversation(
        weddingId: wedding.id,
        partnerId: partner.id,
      );
      if (!mounted) return;
      context.push(
        '/chat/$conversationId',
        extra: ChatConversation(
          id: conversationId,
          weddingId: wedding.id,
          partnerId: partner.id,
          name: partner.name,
          avatarSeed: partner.id,
          avatarUrl: partner.imageUrl,
        ),
      );
    } on PartnerUnavailableException {
      if (mounted) _comingSoon(PartnerUnavailableException.message);
    } catch (_) {
      if (mounted) _comingSoon('Não foi possível abrir o chat.');
    } finally {
      if (mounted) setState(() => _openingChat = false);
    }
  }

  Future<void> _requestQuote({String? initialMessage}) async {
    if (_requestingQuote) return;
    final wedding = await _chooseEvent();
    if (wedding == null || !mounted) return;

    final result = await showIslandSheet<_RequestQuoteResult>(
      context: context,
      isScrollControlled: true,
      builder: (context) => _RequestQuoteSheet(
        initialDate: wedding.weddingDate,
        initialLocation: wedding.location,
        initialMessage: initialMessage,
      ),
    );
    if (result == null || !mounted) return;

    setState(() => _requestingQuote = true);
    Funnel.track('quote_request_start', ref: widget.partner.id);
    for (final slug in widget.partner.categorySlugs) {
      trackInterest(slug, 'quote', partnerId: widget.partner.id);
    }
    try {
      await supabase.rpc(
        'request_quote',
        params: {
          'p_partner_id': widget.partner.id,
          'p_wedding_id': wedding.id,
          'p_event_date': result.eventDate?.toIso8601String().split('T').first,
          'p_location': result.location,
          // O parceiro define o preço na proposta (`send_proposal_screen.dart`)
          // — o casal deixou de indicar orçamento min./máx. aqui, pedido
          // explícito do utilizador (2026-09-04): só envia o pedido, sem
          // pré-condicionar o valor.
          'p_budget_min': null,
          'p_budget_max': null,
          'p_message': result.message,
        },
      );
      // Pedido explícito do utilizador: o pedido de orçamento tem de
      // aparecer no chat tal como a proposta — melhor esforço, não
      // desfaz o pedido já criado se isto falhar.
      try {
        await sendQuoteRequestMessage(
          weddingId: wedding.id,
          partnerId: widget.partner.id,
          partnerName: widget.partner.name,
          eventDate: result.eventDate,
          location: result.location,
          message: result.message,
        );
      } catch (_) {}
      // O botão passa logo a "Pedido já enviado".
      ref.invalidate(partnerRelationshipStatusProvider(widget.partner.id));
      ref.invalidate(_partnerBookableEventsProvider(widget.partner.id));
      if (mounted) {
        await _showRequestSent(
          title: 'Pedido enviado',
          body: 'O parceiro vai responder em breve com uma proposta.',
        );
      }
    } on PostgrestException catch (e) {
      if (!mounted) return;
      final message = switch (e.code) {
        'P0002' => 'Este parceiro já não está disponível.',
        // Migração 117: contratado em segredo por outro organizador.
        'P0010' => PartnerUnavailableException.message,
        'P0003' => 'Escolhe uma data com pelo menos 7 dias de antecedência.',
        // Migração 103: só um pedido de cada vez por parceiro.
        'P0009' => 'Já pediste orçamento a este parceiro. Só podes pedir outra vez se o pedido ou a reserva for cancelado.',
        _ => 'Não foi possível enviar o pedido de orçamento.',
      };
      _comingSoon(message);
    } catch (_) {
      if (mounted)
        _comingSoon('Não foi possível enviar o pedido de orçamento.');
    } finally {
      if (mounted) setState(() => _requestingQuote = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final partner = widget.partner;
    final pub = widget.publicView;
    final favorited = !pub &&
        ref.watch(
          favoritePartnersControllerProvider.select(
            (s) => s.partnerIds.contains(partner.id),
          ),
        );
    final responds = responseLabel(ref.watch(partnerPublicStatsProvider(partner.id)).value?.responseMinutes);
    // `null` enquanto a verificação real não responde ainda (ou falha) —
    // tratado como "não deixar enviar", nunca como "livre para pedir",
    // para nunca haver uma janela otimista em que um duplo pedido escapa.
    final relationshipStatus = ref
        .watch(partnerRelationshipStatusProvider(partner.id))
        .maybeWhen(data: (s) => s, orElse: () => null);
    final alreadyRelated =
        !pub && !widget.selectionMode && relationshipStatus != PartnerRelationshipStatus.none;
    // Posso reservar se houver pelo menos um evento reservável (elegível e sem
    // pedido). Mesmo "já relacionado" neste evento, se existir outro evento
    // livre, a zona de reservar reaparece (a Mensagem fica em cima). Enquanto
    // carrega (null) é conservador: não mostra, para nunca piscar um reservar
    // que leve a duplo pedido.
    final bookable = ref.watch(_partnerBookableEventsProvider(partner.id)).maybeWhen(data: (l) => l, orElse: () => null);
    final canReserve = !pub && !widget.selectionMode && bookable != null && bookable.isNotEmpty;
    // Só Mensagem: já pedi/reservei a este parceiro e não sobra nenhum evento
    // livre (ex.: tenho um só evento e já o escolhi). Aí explico porquê.
    final onlyMessage = !pub &&
        !widget.selectionMode &&
        relationshipStatus != null &&
        relationshipStatus != PartnerRelationshipStatus.none &&
        bookable != null &&
        bookable.isEmpty;
    final summary = ref.watch(publicReviewSummaryForPartnerProvider(partner.id));
    final packages = ref
        .watch(partnerPackagesForProvider(partner.id))
        .maybeWhen(data: (p) => p, orElse: () => const <ServicePackage>[]);
    final extras = ref
        .watch(partnerExtrasForProvider(partner.id))
        .maybeWhen(data: (e) => e, orElse: () => const <ServiceExtra>[]);
    final weddingGuests = ref.watch(weddingControllerProvider.select((s) => s.wedding?.estimatedGuests));
    final eventType = ref.watch(weddingControllerProvider.select((s) => s.wedding?.eventType));
    // Menus por pessoa (restaurantes, catering): pessoas e «Como escolhem»
    // no topo da carta (190).
    final perPersonMenus = !widget.selectionMode && !widget.publicView && packages.any((p) => p.perPerson);
    // «Quem paga» só em jantares e festas de grupo (empresa, aniversário,
    // curso…); nos eventos de família paga quem organiza (2026-11-15).
    final askWhoPays = perPersonMenus &&
        eventType != null &&
        !const {
          EventType.wedding, EventType.baptism, EventType.communion,
          EventType.engagement, EventType.vowRenewal, EventType.babyShower,
        }.contains(eventType);
    final selPkg = !_eachChooses && _selectedPackage != null && _selectedPackage! < packages.length ? packages[_selectedPackage!] : null;
    final peopleMin = selPkg?.minPeople ?? 1;
    final peopleMax = selPkg?.maxPeople ?? 9999;
    final topPeople = (_people ?? weddingGuests ?? peopleMin).clamp(peopleMin, peopleMax);
    final portfolio = ref
        .watch(partnerPortfolioForProvider(partner.id))
        .maybeWhen(data: (p) => p, orElse: () => const <PortfolioItem>[]);
    // Primeiro quadrado: o número que faz sentido para a categoria
    // (espaço: capacidade; catering: serve até; florista: arranjos; …).
    final figure = figureForSlug(partner.primaryCategorySlug);
    final isVenue = partner.primaryCategorySlug == 'venue';
    final capacity = isVenue
        ? ref
            .watch(partnerVenueCapacityProvider(partner.id))
            .maybeWhen(data: (c) => c, orElse: () => null)
        : null;
    final keyFigure = ref
        .watch(partnerKeyFigureProvider(partner.id))
        .maybeWhen(data: (v) => v, orElse: () => null);
    final figureValue = capacity ?? keyFigure;

    final photos = <String>[
      ?partner.imageUrl,
      for (final item in portfolio)
        if (item.mediaType == PortfolioMediaType.image) item.mediaUrl,
    ];
    final minPackage = packages.isEmpty
        ? null
        : packages.map((p) => p.price).reduce((a, b) => a < b ? a : b);
    final fromPrice = minPackage ?? partner.startingPrice;

    final figureText = figureValue == null ? null : figure.format(figureValue);
    // Avaliações: a nota média em cima e o nº de avaliações por baixo, numa
    // caixa com contorno (como o Main). Sem avaliações: «—».
    final avgText = summary.count > 0
        ? summary.average.toStringAsFixed(1).replaceAll('.', ',')
        : '—';
    final revLabel = summary.count > 0
        ? '${summary.count} ${summary.count == 1 ? 'avaliação' : 'avaliações'}'
        : 'Avaliações';
    final stats = ref.watch(partnerPublicStatsProvider(partner.id)).value;
    const ink = AppTheme.ink;
    const muted = Color(0xFF57534E);
    const cream = Color(0xFFF2F0EB);

    Widget chip(String text, {bool green = false}) => Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
          decoration: BoxDecoration(
            color: green ? const Color(0xFFE6EDE1) : cream,
            borderRadius: BorderRadius.circular(999),
          ),
          child: Text(text,
              style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: green ? const Color(0xFF3F7A4F) : const Color(0xFF3A3733))),
        );
    Widget sectionTitle(String t, {String? action, VoidCallback? onAction}) => Padding(
          padding: const EdgeInsets.fromLTRB(20, 22, 20, 12),
          child: Row(crossAxisAlignment: CrossAxisAlignment.end, children: [
            Expanded(child: Text(t, style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: ink))),
            if (action != null)
              SnappyTap(
                onTap: onAction,
                child: Text(action, style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
              ),
          ]),
        );

    final mainLabel = widget.selectionMode
        ? 'Escolher parceiro'
        : alreadyRelated
            ? 'Mensagem'
            : 'Pedir orçamento';
    void mainAction() {
      if (pub) return _needAccount();
      if (widget.selectionMode) return Navigator.of(context).pop(partner);
      if (alreadyRelated) {
        _openChat();
      } else {
        _requestQuote();
      }
    }

    // Mockup "Perfil do parceiro" (2026-11-12), tal e qual: foto a toda a
    // largura (300), cartão branco por cima com nome, preço "Desde",
    // descrição, números, etiquetas, quem segue e os dois botões;
    // depois Pacotes, Avaliações e Onde fica, em cartões brancos.
    return Material(
      color: cream,
      child: Stack(
        children: [
          SingleChildScrollView(
            controller: _scroll,
            padding: EdgeInsets.only(bottom: MediaQuery.paddingOf(context).bottom + 32),
            child: Column(
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            _PhotoCarousel(
              photos: photos,
              fallbackColor: colorForCategorySlug(partner.primaryCategorySlug),
              fallbackIcon: iconForCategorySlug(partner.primaryCategorySlug),
              favorited: favorited,
              publicView: pub,
              onShare: () => _share(partner),
              onFavorite: () {
                if (!favorited) {
                  for (final slug in partner.categorySlugs) {
                    trackInterest(slug, 'favorite', partnerId: partner.id);
                  }
                }
                ref.read(favoritePartnersControllerProvider.notifier).toggle(partner.id);
              },
            ),
            // Mesma disposição do perfil de um amigo (pedido 2026-11-12),
            // com as fotos por cima: cartão de perfil com logótipo,
            // números, nome, categoria e local, descrição, etiquetas,
            // quem segue e os dois botões.
            Transform.translate(
              offset: const Offset(0, -28),
              child: Padding(
                padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                // Cabeça própria do parceiro, estilo "Parceiro com pacotes"
                // (mockup 2026-11-17): nome + caixa de preço em cima, descrição,
                // três números em caixas com contorno e etiquetas; depois os
                // botões. Não é o ProfileCard_Users (perfis de amigos).
                child: ProfileCard_Partners(
                  name: partner.name,
                  nameBadge: ProBadge(partner.id),
                  handleLine:
                      [partner.primaryCategoryLabel, if (partner.location.isNotEmpty) partner.location].join(' · '),
                  bio: partner.description,
                  // Caixa "DESDE €X" / "POR Orçamento" (§6), ao lado do nome.
                  priceBox: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 6),
                    decoration: BoxDecoration(
                      border: Border.all(color: ink, width: 1.5),
                      borderRadius: BorderRadius.circular(12),
                    ),
                    child: fromPrice == null
                        ? const Column(mainAxisSize: MainAxisSize.min, children: [
                            Text('POR',
                                style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, letterSpacing: 1.5, color: muted)),
                            Text('Orçamento',
                                style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: ink, height: 1.1)),
                          ])
                        : Column(mainAxisSize: MainAxisSize.min, children: [
                            const Text('DESDE',
                                style: TextStyle(fontSize: 9, fontWeight: FontWeight.w700, letterSpacing: 1.5, color: muted)),
                            Text(euros(fromPrice),
                                style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: ink, height: 1.1)),
                          ]),
                  ),
                  // Três números em caixas com contorno: nota, seguidores, eventos.
                  stats: [
                    (avgText, revLabel),
                    ('${stats?.followers ?? 0}', 'Seguidores'),
                    ('${stats?.eventsDone ?? 0}', 'Eventos'),
                  ],
                  extra: Wrap(spacing: 6, runSpacing: 6, crossAxisAlignment: WrapCrossAlignment.center, children: [
                    FounderBadge(partner.id, long: true),
                    if (figureText != null) chip(figureText),
                    // O estado ("Reservado") saiu daqui: é dito no aviso (§7).
                    if (responds != null) chip(responds, green: true),
                  ]),
                  followedBy: widget.selectionMode
                      ? ProfileButton(mainLabel, dark: true, onTap: mainAction)
                      : _PartnerFollow(
                          partnerId: partner.id,
                          onNeedAccount: pub ? _needAccount : null,
                          // Com pacotes, o caminho é escolher um pacote (em
                          // baixo); o orçamento à medida fica em baixo dos
                          // pacotes (2026-11-15).
                          second: packages.isNotEmpty && !alreadyRelated
                              ? null
                              : ProfileButton(mainLabel, onTap: _requestingQuote || _openingChat ? null : mainAction),
                        ),
                ),
              ),
            ),
            // Só Mensagem (nenhum evento livre): explica que já foi escolhido
            // para este evento. (2026-11-17)
            if (onlyMessage)
              Transform.translate(
                offset: const Offset(0, -28),
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(20, 0, 20, 10),
                  // Nota de estado em caixa (DESIGN.md §7): branco + linha fina
                  // + ponto. Amarelo = pedido pendente, verde = já reservado.
                  child: AlertOutline(
                    tone: relationshipStatus == PartnerRelationshipStatus.booked
                        ? AlertTone.invite
                        : AlertTone.pending,
                    child: Row(children: [
                      Container(
                        width: 8,
                        height: 8,
                        decoration: BoxDecoration(
                          shape: BoxShape.circle,
                          color: relationshipStatus == PartnerRelationshipStatus.booked
                              ? const Color(0xFF4F6B4A)
                              : const Color(0xFFF2A01B),
                        ),
                      ),
                      const SizedBox(width: 10),
                      Expanded(
                        child: Text(
                          relationshipStatus == PartnerRelationshipStatus.booked
                              ? 'Já reservaste ${partner.name} para este evento.'
                              : 'Já pediste orçamento a ${partner.name} para este evento.',
                          style: const TextStyle(fontSize: 13, color: ink, height: 1.35),
                        ),
                      ),
                    ]),
                  ),
                ),
              ),
            // Sem pacotes e já pedi a este parceiro neste evento, mas há outro
            // evento livre: a Mensagem fica em cima e aqui em baixo dá para o
            // reservar para esse outro evento (orçamento à medida). (2026-11-17)
            if (packages.isEmpty && !widget.selectionMode && alreadyRelated && canReserve)
              Transform.translate(
                offset: const Offset(0, -28),
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(20, 0, 20, 0),
                  // Avisos na própria página (§7), não num cartão pesado: a
                  // linha fina diz o estado; o botão reserva noutro evento.
                  child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                    AlertOutline(
                      tone: relationshipStatus == PartnerRelationshipStatus.booked
                          ? AlertTone.invite
                          : AlertTone.pending,
                      child: Row(children: [
                        Container(
                          width: 8,
                          height: 8,
                          decoration: BoxDecoration(
                            shape: BoxShape.circle,
                            color: relationshipStatus == PartnerRelationshipStatus.booked
                                ? const Color(0xFF4F6B4A)
                                : const Color(0xFFF2A01B),
                          ),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: Text(
                            relationshipStatus == PartnerRelationshipStatus.booked
                                ? 'Já reservaste ${partner.name} para este evento.'
                                : 'Já pediste orçamento a ${partner.name} para este evento.',
                            style: const TextStyle(fontSize: 13, color: ink, height: 1.35),
                          ),
                        ),
                      ]),
                    ),
                    const SizedBox(height: 12),
                    ProfileButton('Pedir orçamento', dark: true, onTap: _requestingQuote ? null : () => _requestQuote()),
                    const SizedBox(height: 8),
                    const Text('Para reservar noutro evento teu.',
                        textAlign: TextAlign.center,
                        style: TextStyle(fontSize: 13, color: muted, height: 1.4)),
                  ]),
                ),
              ),
            if (packages.isNotEmpty) ...[
              Transform.translate(
                offset: const Offset(0, -28),
                child: sectionTitle('Pacotes', action: '${packages.length} ${packages.length == 1 ? 'pacote' : 'pacotes'}'),
              ),
              Transform.translate(
                offset: const Offset(0, -28),
                child: Padding(
                  padding: const EdgeInsets.symmetric(horizontal: 20),
                  child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                    // Menus por pessoa (mockup «Restaurante · perfil»): pessoas,
                    // «Como escolhem» e «Quem paga» antes da carta (190).
                    if (perPersonMenus) ...[
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                        decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                        child: Row(children: [
                          const Expanded(
                            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                              Text('Para quantas pessoas', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: ink)),
                              Text('Do teu evento · podes mudar', style: TextStyle(fontSize: 13, color: muted)),
                            ]),
                          ),
                          _StepButton(icon: Hi.minus, onTap: topPeople > peopleMin ? () => setState(() => _people = topPeople - 1) : null),
                          SizedBox(width: 44, child: Text('$topPeople', textAlign: TextAlign.center, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: ink))),
                          _StepButton(icon: Hi.plus, onTap: topPeople < peopleMax ? () => setState(() => _people = topPeople + 1) : null),
                        ]),
                      ),
                      const KitCaps('Como escolhem'),
                      KitPills([
                        KitPill(label: 'Igual para todos', selected: !_eachChooses, onTap: () => setState(() => _eachChooses = false)),
                        KitPill(
                          label: 'Cada um escolhe',
                          selected: _eachChooses,
                          onTap: () => setState(() {
                            _eachChooses = true;
                            _selectedPackage = null;
                            _selectedExtras.clear();
                          }),
                        ),
                      ], top: 0),
                      if (_eachChooses)
                        const Padding(
                          padding: EdgeInsets.only(top: 8),
                          child: Text('Reservam a mesa e cada convidado escolhe o seu menu e extras na app, antes de pagar.',
                              style: TextStyle(fontSize: 13, color: muted)),
                        ),
                      if (askWhoPays) ...[
                        const KitCaps('Quem paga'),
                        KitPills([
                          KitPill(label: 'Pagamos nós', selected: !_eachPays, onTap: () => setState(() => _eachPays = false)),
                          KitPill(label: 'Cada um paga o seu', selected: _eachPays, onTap: () => setState(() => _eachPays = true)),
                        ], top: 0),
                        if (_eachPays)
                          Padding(
                            padding: const EdgeInsets.only(top: 8),
                            child: Text(
                              _eachChooses
                                  ? 'Cada convidado paga a sua parte na app quando escolhe. A reserva é grátis.'
                                  : 'Cada convidado paga a sua parte na app. O pedido de pagamento chega 3 dias antes.',
                              style: const TextStyle(fontSize: 13, color: muted),
                            ),
                          ),
                      ],
                      const SizedBox(height: 16),
                    ],
                    for (var i = 0; i < packages.length; i++)
                      Padding(
                        padding: EdgeInsets.only(top: i == 0 ? 0 : 10),
                        child: PackageChoiceCard(
                          package: packages[i],
                          selected: !_eachChooses && _selectedPackage == i,
                          onTap: widget.selectionMode
                              ? null
                              : pub
                                  ? _needAccount
                                  : !canReserve
                                      ? _openChat
                                      : _eachChooses
                                          ? null
                                          : () => setState(() => _selectedPackage = _selectedPackage == i ? null : i),
                        ),
                      ),
                    if (_eachChooses && !widget.selectionMode && canReserve)
                      _tableRequest(topPeople, ink, muted),
                    if (!_eachChooses && !widget.selectionMode && canReserve && _selectedPackage != null && _selectedPackage! < packages.length)
                      Builder(builder: (context) {
                        final p = packages[_selectedPackage!];
                        final pkgExtras = extras.where((e) => e.appliesTo(p.id)).toList();
                        final people = perPersonMenus ? topPeople : (_people ?? weddingGuests ?? p.minPeople ?? 1)
                            .clamp(p.minPeople ?? 1, p.maxPeople ?? 9999);
                        double each(String unit, double price) => unit == 'person' ? price * people : price;
                        final total = each(p.priceUnit, p.price) +
                            pkgExtras.where((e) => _selectedExtras.contains(e.id)).fold<double>(0, (t, e) => t + each(e.priceUnit, e.price));
                        final label = p.isStartingPrice ? 'Reservar · ${p.name}' : 'Reservar · ${euros(total)}';
                        TextStyle btn(double size) => TextStyle(
                            fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: size, fontWeight: FontWeight.w700);
                        return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                          if (!perPersonMenus && (p.perPerson || pkgExtras.any((e) => e.priceUnit == 'person'))) ...[
                            const SizedBox(height: 16),
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                              child: Row(children: [
                                const Expanded(
                                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                                    Text('Para quantas pessoas', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: ink)),
                                    Text('Do teu evento · podes mudar', style: TextStyle(fontSize: 13, color: muted)),
                                  ]),
                                ),
                                _StepButton(icon: Hi.minus, onTap: people > (p.minPeople ?? 1) ? () => setState(() => _people = people - 1) : null),
                                SizedBox(width: 44, child: Text('$people', textAlign: TextAlign.center, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: ink))),
                                _StepButton(icon: Hi.plus, onTap: people < (p.maxPeople ?? 9999) ? () => setState(() => _people = people + 1) : null),
                              ]),
                            ),
                          ],
                          // Extras só depois de escolher o pacote, e só se o
                          // parceiro os criou (2026-11-15).
                          if (pkgExtras.isNotEmpty) ...[
                            Padding(
                              padding: const EdgeInsets.only(top: 24, bottom: 12),
                              child: Text('Juntar ao ${p.name}', style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: ink)),
                            ),
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
                              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                              child: Column(children: [
                                for (var i = 0; i < pkgExtras.length; i++)
                                  ExtraChoiceRow(
                                    extra: pkgExtras[i],
                                    on: _selectedExtras.contains(pkgExtras[i].id),
                                    last: i == pkgExtras.length - 1,
                                    onTap: () => setState(() => _selectedExtras.contains(pkgExtras[i].id)
                                        ? _selectedExtras.remove(pkgExtras[i].id)
                                        : _selectedExtras.add(pkgExtras[i].id)),
                                  ),
                              ]),
                            ),
                          ],
                          const Padding(
                            padding: EdgeInsets.only(top: 24, bottom: 8),
                            child: Text('MENSAGEM', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: muted)),
                          ),
                          Container(
                            padding: const EdgeInsets.symmetric(horizontal: 18, vertical: 6),
                            decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                            child: TextField(
                              controller: _packageMessage,
                              minLines: 3,
                              maxLines: 5,
                              maxLength: 300,
                              style: const TextStyle(fontSize: 15, color: ink),
                              decoration: const InputDecoration(
                                border: InputBorder.none,
                                enabledBorder: InputBorder.none,
                                focusedBorder: InputBorder.none,
                                filled: false,
                                hintText: 'Opcional · o que o parceiro deve saber',
                              ),
                            ),
                          ),
                          const SizedBox(height: 16),
                          if (!p.isStartingPrice)
                            Padding(
                              padding: const EdgeInsets.only(bottom: 10),
                              child: Row(children: [
                                Expanded(
                                  child: Text(
                                    [p.name, if (_selectedExtras.isNotEmpty) '+ ${pkgExtras.where((e) => _selectedExtras.contains(e.id)).length} extra', if (p.perPerson) '$people pessoas'].join(' · '),
                                    style: const TextStyle(fontSize: 13, color: muted),
                                  ),
                                ),
                                Text(euros(total), style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: ink)),
                              ]),
                            ),
                          // Reservar a toda a largura, como no mockup "parceiro
                          // com pacote" (sem caixa branca por trás).
                          FilledButton(
                            onPressed: _requestingQuote ? null : () => _requestPackage(p, pkgExtras, people),
                            style: FilledButton.styleFrom(
                              backgroundColor: ink,
                              foregroundColor: Colors.white,
                              minimumSize: const Size.fromHeight(52),
                              shape: const StadiumBorder(),
                              textStyle: btn(15),
                            ),
                            child: Text(label, maxLines: 1, overflow: TextOverflow.ellipsis),
                          ),
                          // Explicação do pagamento só nos pacotes de preço fixo.
                          if (!p.isStartingPrice) ...[
                            const SizedBox(height: 8),
                            Text(
                              _eachPays
                                  ? 'Cada convidado paga ${euros(total / people)} na app, 3 dias antes. ${widget.partner.name} aceita ou recusa.'
                                  : '${widget.partner.name} aceita ou recusa. Se aceitar, pagas para confirmar.',
                              textAlign: TextAlign.center,
                              style: const TextStyle(fontSize: 13, color: muted),
                            ),
                          ],
                        ]);
                      }),
                    if (!widget.selectionMode && canReserve) ...[
                      const SizedBox(height: 12),
                      // Secundário (§2): contorno preto 1,5, pílula, 44 — a
                      // toda a largura, sem caixa branca por trás.
                      SizedBox(
                        height: 44,
                        child: OutlinedButton(
                          onPressed: pub ? _needAccount : (_requestingQuote ? null : () => _requestQuote()),
                          style: OutlinedButton.styleFrom(
                            foregroundColor: ink,
                            side: const BorderSide(color: ink, width: 1.5),
                            shape: const StadiumBorder(),
                            textStyle: const TextStyle(
                                fontFamily: AppTheme.fontFamily,
                                fontFamilyFallback: AppTheme.fontFamilyFallback,
                                fontSize: 14,
                                fontWeight: FontWeight.w700),
                          ),
                          child: const Text('Pedir orçamento à medida'),
                        ),
                      ),
                    ],
                  ]),
                ),
              ),
            ],
            Transform.translate(
              offset: const Offset(0, -28),
              child: _ReviewsSection(
                partnerId: partner.id,
                partnerName: partner.name,
                partnerAvatarUrl: partner.imageUrl,
                title: (count, action, onAction) => sectionTitle('Avaliações', action: action, onAction: onAction),
              ),
            ),
            if (partner.location.isNotEmpty)
              Transform.translate(
                offset: const Offset(0, -28),
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  sectionTitle('Onde fica'),
                  Container(
                    margin: const EdgeInsets.symmetric(horizontal: 20),
                    clipBehavior: Clip.antiAlias,
                    decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                    child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                      Container(
                        height: 130,
                        color: const Color(0xFFDDE5D3),
                        alignment: Alignment.center,
                        child: const LineIcon(LineIcon.pin, size: 30, color: Color(0xFF4F6B4A), circles: LineIcon.pinCircle),
                      ),
                      Padding(
                        padding: const EdgeInsets.fromLTRB(16, 12, 16, 12),
                        child: Row(children: [
                          Expanded(
                            child: Text(partner.location,
                                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: ink)),
                          ),
                          const SizedBox(width: 10),
                          SnappyTap(
                            onTap: () => launchUrl(
                              Uri.parse('https://www.google.com/maps/search/?api=1&query=${Uri.encodeComponent('${partner.name} ${partner.location}')}'),
                              mode: LaunchMode.externalApplication,
                            ),
                            child: Text('Abrir mapa',
                                style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
                          ),
                        ]),
                      ),
                    ]),
                  ),
                ]),
              ),
            if (pub)
              const Padding(
                padding: EdgeInsets.fromLTRB(20, 0, 20, 0),
                child: Text(
                  '"Seguir" e "Pedir orçamento" pedem para entrar ou criar conta, e voltam a esta página.',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted),
                ),
              ),
          ],
        ),
          ),
          // Seta de voltar fixa do §6: fica sempre no ecrã, roda ←→↑, sobe ao
          // topo, e é translúcida sobre a foto — opaca depois de a foto sair.
          if (!pub)
            Positioned(
              left: 20,
              top: MediaQuery.paddingOf(context).top + 20,
              child: ScrollAwareBackButton(
                controller: _scroll,
                onBack: () => Navigator.of(context).canPop()
                    ? Navigator.of(context).pop()
                    : context.go('/partners'),
                imageExtent: 236,
              ),
            ),
        ],
      ),
    );
  }

  Future<void> _share(Partner partner) async {
    final link = publicLink('/parceiro/${partner.id}');
    try {
      await SharePlus.instance.share(ShareParams(text: '${partner.name} na À Nossa!: $link', subject: partner.name));
    } catch (_) {
      await Clipboard.setData(ClipboardData(text: link));
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
    }
  }
}

/// Fotos do parceiro (capa + portefólio) a toda a largura da folha, com
/// a pega por cima, o coração para guardar e o contador "1 / N".
class _PhotoCarousel extends StatefulWidget {
  final List<String> photos;
  final Color fallbackColor;
  final IconData fallbackIcon;
  final bool favorited;
  final VoidCallback onFavorite;
  final VoidCallback? onShare;
  final bool publicView;

  const _PhotoCarousel({
    required this.photos,
    required this.fallbackColor,
    required this.fallbackIcon,
    required this.favorited,
    required this.onFavorite,
    this.onShare,
    this.publicView = false,
  });

  @override
  State<_PhotoCarousel> createState() => _PhotoCarouselState();
}

class _PhotoCarouselState extends State<_PhotoCarousel> {
  int _page = 0;

  Widget _round(Widget icon, String label, VoidCallback onTap) => Semantics(
        button: true,
        label: label,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            width: 44,
            height: 44,
            alignment: Alignment.center,
            decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
            child: icon,
          ),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final photos = widget.photos;
    final top = MediaQuery.of(context).padding.top;
    // Mockup "Perfil do parceiro": foto a toda a largura, 300 de altura,
    // botões brancos redondos e "1 / N fotos" em baixo à esquerda.
    return SizedBox(
      height: 300 + top,
      child: Stack(
        fit: StackFit.expand,
        children: [
          Container(
            color: widget.fallbackColor,
            child: photos.isEmpty ? Icon(widget.fallbackIcon, color: Colors.white, size: 48) : null,
          ),
          if (photos.isNotEmpty)
            PageView.builder(
              itemCount: photos.length,
              onPageChanged: (i) => setState(() => _page = i),
              itemBuilder: (context, i) => SizedNetworkImage(
                photos[i],
                fit: BoxFit.cover,
                errorBuilder: (context, error, stackTrace) => const SizedBox.shrink(),
              ),
            ),
          if (widget.publicView) ...[
            // Página pública: marca à esquerda, "Abrir na app" à direita.
            Positioned(
              top: top + 20,
              left: 20,
              child: Container(
                height: 44,
                padding: const EdgeInsets.symmetric(horizontal: 16),
                alignment: Alignment.center,
                decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                child: const Text('À Nossa!', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ),
            ),
            if (kIsWeb)
              Positioned(
                top: top + 20,
                right: 20,
                child: SnappyTap(
                  onTap: () {
                    PendingDeepLink.save(GoRouterState.of(context).uri.toString());
                    showInstallAppSheet(context);
                  },
                  child: Container(
                    height: 44,
                    padding: const EdgeInsets.symmetric(horizontal: 16),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(22)),
                    child: const Text('Abrir na app',
                        style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: Colors.white)),
                  ),
                ),
              ),
          ] else ...[
            // O voltar é agora a seta fixa do §6 (fica no ecrã, não no
            // carrossel). Aqui ficam só partilhar e guardar, à direita.
            Positioned(
              top: top + 20,
              right: 20,
              child: Row(children: [
                if (widget.onShare != null) ...[
                  _round(const LineIcon(LineIcon.share, size: 18, stroke: 2.2), 'Partilhar', widget.onShare!),
                  const SizedBox(width: 8),
                ],
                _round(
                  LineIcon(LineIcon.heart,
                      size: 18,
                      stroke: 2.2,
                      fill: widget.favorited,
                      color: widget.favorited ? AppStatusColors.declined : AppTheme.ink),
                  widget.favorited ? 'Remover dos favoritos' : 'Guardar nos favoritos',
                  widget.onFavorite,
                ),
              ]),
            ),
          ],
          if (photos.isNotEmpty)
            Positioned(
              left: 20,
              bottom: 44,
              child: Container(
                padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
                decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(999)),
                child: Text('${_page + 1} / ${photos.length} ${photos.length == 1 ? 'foto' : 'fotos'}',
                    style: const TextStyle(color: Colors.white, fontSize: 12, fontWeight: FontWeight.w700)),
              ),
            ),
        ],
      ),
    );
  }
}







/// Avaliações publicadas do parceiro (`reviews`, 045_reviews.sql) —
/// mostra o nome e foto do casal autor (`get_review_authors()`,
/// `069_public_review_authors.sql`) a QUALQUER visitante do
/// Marketplace, pedido explícito do utilizador (2026-09-13), confirmado
/// mesmo sabendo que expõe isso além de a quem tem uma relação real com
/// o casal (o próprio parceiro avaliado).
class _ReviewsSection extends ConsumerStatefulWidget {
  final String partnerId;
  final String partnerName;
  final String? partnerAvatarUrl;

  /// Título "Avaliações" com "Ver todas (N)" (mockup).
  final Widget Function(int count, String? action, VoidCallback? onAction) title;

  const _ReviewsSection({required this.partnerId, required this.partnerName, this.partnerAvatarUrl, required this.title});

  @override
  ConsumerState<_ReviewsSection> createState() => _ReviewsSectionState();
}

class _ReviewsSectionState extends ConsumerState<_ReviewsSection> {
  bool _all = false;

  @override
  Widget build(BuildContext context) {
    final reviews = ref.watch(publicReviewsForPartnerProvider(widget.partnerId)).value ?? const <Review>[];
    final shown = _all ? reviews : reviews.take(1).toList();
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      widget.title(
        reviews.length,
        reviews.length > 1 && !_all ? 'Ver todas (${reviews.length})' : null,
        () => setState(() => _all = true),
      ),
      if (reviews.isEmpty)
        Container(
          margin: const EdgeInsets.symmetric(horizontal: 20),
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
          child: const Text('Ainda sem avaliações.',
              style: TextStyle(fontSize: 14, fontWeight: FontWeight.w600, color: Color(0xFF57534E))),
        )
      else
        for (final r in shown)
          Padding(
            padding: const EdgeInsets.fromLTRB(20, 0, 20, 10),
            child: ReviewTile(review: r, partnerName: widget.partnerName, partnerAvatarUrl: widget.partnerAvatarUrl),
          ),
    ]);
  }
}

class _RequestQuoteResult {
  final DateTime? eventDate;
  final String? location;
  final String? message;

  const _RequestQuoteResult({this.eventDate, this.location, this.message});
}

/// Formulário de "Pedir orçamento" — liga o botão "Reservar" ao RPC
/// real `request_quote()` (`009_quotations_bookings.sql`). Todos os
/// campos são opcionais (o RPC já trata `null` em cada um), exceto a
/// regra RN de a data do evento ter de ter pelo menos 7 dias de
/// antecedência (`p_event_date < current_date + 7` → erro `P0003`) —
/// aplicada aqui também no `firstDate` do date picker, para o casal
/// nunca conseguir escolher uma data que o servidor ia recusar.
class _RequestQuoteSheet extends StatefulWidget {
  final DateTime? initialDate;
  final String? initialLocation;
  final String? initialMessage;

  const _RequestQuoteSheet({this.initialDate, this.initialLocation, this.initialMessage});

  @override
  State<_RequestQuoteSheet> createState() => _RequestQuoteSheetState();
}

class _RequestQuoteSheetState extends State<_RequestQuoteSheet> {
  late final _location = TextEditingController(
    text: widget.initialLocation ?? '',
  );
  late final _message = TextEditingController(text: widget.initialMessage ?? '');
  DateTime? _eventDate;

  DateTime get _minSelectableDate =>
      DateTime.now().add(const Duration(days: 7));

  @override
  void initState() {
    super.initState();
    final initial = widget.initialDate;
    _eventDate = (initial != null && !initial.isBefore(_minSelectableDate))
        ? initial
        : null;
  }

  @override
  void dispose() {
    _location.dispose();
    _message.dispose();
    super.dispose();
  }

  Future<void> _pickDate() async {
    final picked = await showDatePicker(
      context: context,
      initialDate: _eventDate ?? _minSelectableDate,
      firstDate: _minSelectableDate,
      lastDate: DateTime.now().add(const Duration(days: 365 * 3)),
    );
    if (picked != null) setState(() => _eventDate = picked);
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: 20,
        right: 20,
        top: 20,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
      ),
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(
            'Pedir orçamento',
            style: Theme.of(context).textTheme.titleLarge,
          ),
          const SizedBox(height: 4),
          Text(
            'Envia os detalhes do teu casamento — o parceiro responde diretamente pelo Chat.',
            style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
          ),
          const SizedBox(height: 16),
          InkWell(
            borderRadius: BorderRadius.circular(AppRadius.sm),
            onTap: _pickDate,
            child: InputDecorator(
              decoration: const InputDecoration(
                labelText: 'Data do evento (opcional)',
              ),
              child: Text(
                _eventDate == null
                    ? 'A combinar'
                    : '${_eventDate!.day.toString().padLeft(2, '0')}/${_eventDate!.month.toString().padLeft(2, '0')}/${_eventDate!.year}',
              ),
            ),
          ),
          const SizedBox(height: 12),
          AuthTextField(label: 'Localização (opcional)', controller: _location),
          const SizedBox(height: 12),
          AuthTextField(label: 'Mensagem (opcional)', controller: _message),
          const SizedBox(height: 16),
          PrimaryButton(
            label: 'Enviar pedido',
            onPressed: () {
              Navigator.of(context).pop(
                _RequestQuoteResult(
                  eventDate: _eventDate,
                  location: _location.text.trim().isEmpty
                      ? null
                      : _location.text.trim(),
                  message: _message.text.trim().isEmpty
                      ? null
                      : _message.text.trim(),
                ),
              );
            },
          ),
        ],
      ),
    );
  }
}
/// Seguidores, amigos que seguem e o botão Seguir / A seguir.
class _PartnerFollow extends ConsumerStatefulWidget {
  final String partnerId;

  /// Página pública sem sessão: o botão pede para entrar.
  final VoidCallback? onNeedAccount;

  /// Segundo botão ao lado de "Seguir" (mockup: "Pedir orçamento").
  final Widget? second;
  const _PartnerFollow({required this.partnerId, this.onNeedAccount, this.second});

  @override
  ConsumerState<_PartnerFollow> createState() => _PartnerFollowState();
}

class _PartnerFollowState extends ConsumerState<_PartnerFollow> {
  bool _busy = false;

  @override
  Widget build(BuildContext context) {
    if (widget.onNeedAccount != null) {
      final followers = ref.watch(partnerPublicStatsProvider(widget.partnerId)).value?.followers ?? 0;
      return Padding(
        padding: EdgeInsets.zero,
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          if (followers > 0) ...[
            Text('Seguido por $followers ${followers == 1 ? 'pessoa' : 'pessoas'} na À Nossa!',
                style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
            const SizedBox(height: 12),
          ],
          Row(children: [
            Expanded(child: ProfileButton('Seguir', dark: true, onTap: widget.onNeedAccount)),
            if (widget.second != null) ...[const SizedBox(width: 8), Expanded(child: widget.second!)],
          ]),
        ]),
      );
    }
    final info = ref.watch(partnerFollowInfoProvider(widget.partnerId)).value;
    if (info == null) {
      return widget.second == null
          ? const SizedBox.shrink()
          : widget.second!;
    }
    return Padding(
      padding: EdgeInsets.zero,
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        if (info.friends.isNotEmpty) ...[
          FollowedByRow(people: info.friends, text: followedByLine(info.friends, info.friendsCount, female: false)),
          const SizedBox(height: 14),
        ],
        Row(children: [
          Expanded(
            child: ProfileButton(
              info.iFollow ? 'A seguir' : 'Seguir',
              dark: !info.iFollow,
              onTap: _busy
                  ? null
                  : () async {
                      setState(() => _busy = true);
                      try {
                        await followPartner(widget.partnerId, !info.iFollow);
                        ref.invalidate(partnerFollowInfoProvider(widget.partnerId));
                      } catch (_) {
                        if (mounted) {
                          ScaffoldMessenger.of(context)
                              .showSnackBar(const SnackBar(content: Text('Não foi possível. Tenta outra vez.')));
                        }
                      } finally {
                        if (mounted) setState(() => _busy = false);
                      }
                    },
            ),
          ),
          if (widget.second != null) ...[const SizedBox(width: 8), Expanded(child: widget.second!)],
        ]),
      ]),
    );
  }
}


/// Página pública do parceiro (`/parceiro/:id`, link "Partilhar perfil",
/// 2026-11-12). Abre sem sessão; com sessão é o perfil de sempre.
class PublicPartnerScreen extends ConsumerWidget {
  final String id;
  const PublicPartnerScreen({super.key, required this.id});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final signedIn = ref.watch(authControllerProvider.select((s) => s.status == AuthStatus.active));
    final async = ref.watch(partnerByIdProvider(id));
    return async.when(
      loading: () => const Scaffold(backgroundColor: AppTheme.background, body: Center(child: CircularProgressIndicator())),
      error: (e, st) => const _PartnerUnavailable(),
      data: (p) => p == null ? const _PartnerUnavailable() : PartnerDetailScreen(partner: p, publicView: !signedIn),
    );
  }
}

class _PartnerUnavailable extends StatelessWidget {
  const _PartnerUnavailable();

  @override
  Widget build(BuildContext context) => Scaffold(
        backgroundColor: AppTheme.background,
        body: Center(
          child: Padding(
            padding: const EdgeInsets.all(32),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              const Text('Este parceiro não está disponível.',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 16),
              ProfileButton('Ir para a À Nossa!', dark: true, onTap: () => context.go('/welcome')),
            ]),
          ),
        ),
      );
}

/// Cartão de um pacote no perfil (mockup «Perfis dos parceiros»,
/// 2026-11-15): branco com o círculo por escolher; verde quando escolhido.
class PackageChoiceCard extends StatelessWidget {
  final ServicePackage package;
  final bool selected;
  final VoidCallback? onTap;
  const PackageChoiceCard({required this.package, required this.selected, this.onTap});

  @override
  Widget build(BuildContext context) {
    final fg = selected ? Colors.white : AppTheme.ink;
    final mu = selected ? Colors.white.withValues(alpha: 0.85) : AppTheme.inkMuted;
    final price = '${package.isStartingPrice ? 'desde ' : ''}${euros(package.price)}${priceUnitSuffix(package.priceUnit)}';
    return Semantics(
      button: true,
      selected: selected,
      child: SnappyTap(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 160),
          padding: const EdgeInsets.all(16),
          decoration: selected
              ? BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(22))
              : softCard(radius: 22),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Container(
              width: 24,
              height: 24,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                color: selected ? Colors.white : null,
                border: selected ? null : Border.all(color: const Color(0xFFCFC8B8), width: 1.5),
              ),
              child: selected ? Icon(Hi.check, size: 16, color: AppTheme.accentOliveDark) : null,
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Expanded(child: Text(package.name, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: fg))),
                  const SizedBox(width: 10),
                  Text(price, style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: fg)),
                ]),
                if (package.description.trim().isNotEmpty) ...[
                  const SizedBox(height: 4),
                  Text(package.description.trim(), style: TextStyle(fontSize: 13, height: 1.4, color: mu)),
                ],
                // «Inclui / Não inclui» do parceiro, no pacote escolhido (188).
                if (selected && package.includes.isNotEmpty) ...[
                  Container(height: 1, margin: const EdgeInsets.symmetric(vertical: 10), color: Colors.white.withValues(alpha: 0.3)),
                  const Text('INCLUI', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: Colors.white)),
                  const SizedBox(height: 4),
                  for (final l in package.includes)
                    Padding(
                      padding: const EdgeInsets.only(top: 3),
                      child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
                        const Padding(padding: EdgeInsets.only(top: 7, right: 8), child: CircleAvatar(radius: 2.5, backgroundColor: Colors.white)),
                        Expanded(child: Text(l, style: const TextStyle(fontSize: 13, height: 1.4, color: Colors.white))),
                      ]),
                    ),
                  if (package.excludes != null) ...[
                    const SizedBox(height: 6),
                    Text('NÃO INCLUI: ${package.excludes}', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: mu)),
                  ],
                ],
              ]),
            ),
          ]),
        ),
      ),
    );
  }
}

class _StepButton extends StatelessWidget {
  final IconData icon;
  final VoidCallback? onTap;
  const _StepButton({required this.icon, this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Container(
          width: 36,
          height: 36,
          decoration: BoxDecoration(
            shape: BoxShape.circle,
            border: Border.all(color: onTap == null ? const Color(0xFFCFC8B8) : AppTheme.ink, width: 1.5),
          ),
          child: Icon(icon, size: 16, color: onTap == null ? const Color(0xFFCFC8B8) : AppTheme.ink),
        ),
      );
}

/// Linha de um extra: nome, o que é, preço e o botão + / ✓ (188).
class ExtraChoiceRow extends StatelessWidget {
  final ServiceExtra extra;
  final bool on;
  final bool last;
  final VoidCallback onTap;
  const ExtraChoiceRow({required this.extra, required this.on, required this.last, required this.onTap});

  @override
  Widget build(BuildContext context) => Semantics(
        button: true,
        selected: on,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            padding: const EdgeInsets.symmetric(vertical: 12),
            decoration: BoxDecoration(border: last ? null : const Border(bottom: BorderSide(color: Color(0xFFECE7DC)))),
            child: Row(children: [
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  Text(extra.name, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  if (extra.details.isNotEmpty)
                    Text(extra.details.join(' · '), style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
              ),
              const SizedBox(width: 10),
              Text('+${euros(extra.price)}${priceUnitSuffix(extra.priceUnit)}',
                  style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(width: 10),
              Container(
                width: 36,
                height: 36,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  color: on ? AppTheme.accentOliveDark : Colors.white,
                  border: on ? null : Border.all(color: AppTheme.ink, width: 1.5),
                ),
                child: Icon(on ? Hi.check : Hi.plus, size: 18, color: on ? Colors.white : AppTheme.ink),
              ),
            ]),
          ),
        ),
      );
}

/// Popup "Para qual evento?" — escolhe o evento onde reservar o parceiro
/// quando há mais do que um evento elegível (DESIGN.md §2/§4).
class _EventPickerSheet extends StatelessWidget {
  final List<Wedding> events;
  final String partnerName;
  final String? myId;
  const _EventPickerSheet({required this.events, required this.partnerName, this.myId});

  // Etiqueta do papel (§1): «Organizo» (dono) verde, «Posso contratar» neutra.
  Widget _roleChip(bool owner) => Container(
        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
        decoration: BoxDecoration(
          color: owner ? const Color(0xFFE6EDE1) : const Color(0xFFF2F0EB),
          borderRadius: BorderRadius.circular(999),
        ),
        child: Text(owner ? 'Organizo' : 'Posso contratar',
            style: TextStyle(
                fontSize: 12,
                fontWeight: FontWeight.w700,
                color: owner ? const Color(0xFF3F7A4F) : const Color(0xFF3A3733))),
      );

  String _meta(Wedding w) {
    final parts = <String>[];
    final d = w.weddingDate;
    if (d != null) {
      const meses = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];
      parts.add('${d.day} ${meses[d.month - 1]} ${d.year}');
    }
    final place = (w.venue?.isNotEmpty == true) ? w.venue! : (w.location ?? '');
    if (place.isNotEmpty) parts.add(place);
    return parts.join(' · ');
  }

  @override
  Widget build(BuildContext context) {
    final bottom = MediaQuery.of(context).viewInsets.bottom;
    return Container(
      decoration: const BoxDecoration(
        color: AppTheme.background,
        borderRadius: BorderRadius.vertical(top: Radius.circular(28)),
      ),
      padding: EdgeInsets.fromLTRB(20, 14, 20, 24 + bottom),
      child: SafeArea(
        top: false,
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Center(
              child: Container(
                width: 40,
                height: 4,
                decoration: BoxDecoration(color: const Color(0xFFD8D3C8), borderRadius: BorderRadius.circular(999)),
              ),
            ),
            const SizedBox(height: 14),
            const Text('Reservar — para qual evento?',
                style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 4),
            Text('$partnerName vai ficar reservado no evento que escolheres.',
                style: const TextStyle(fontSize: 13, color: Color(0xFF57534E))),
            const SizedBox(height: 16),
            Container(
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(22),
                boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
              ),
              clipBehavior: Clip.antiAlias,
              child: Column(
                mainAxisSize: MainAxisSize.min,
                children: [
                  for (var i = 0; i < events.length; i++) ...[
                    if (i > 0) const Divider(height: 1, color: Color(0xFFECE7DC)),
                    InkWell(
                      onTap: () => Navigator.of(context).pop(events[i]),
                      child: ConstrainedBox(
                        constraints: const BoxConstraints(minHeight: 64),
                        child: Padding(
                          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
                          child: Row(children: [
                            // Foto principal do evento (cai nas iniciais se não houver).
                            V2Avatar(events[i].displayNames, size: 44, imageUrl: events[i].coverPhotoUrlCacheBusted),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(
                                crossAxisAlignment: CrossAxisAlignment.start,
                                mainAxisSize: MainAxisSize.min,
                                children: [
                                  Text(events[i].displayNames,
                                      maxLines: 1,
                                      overflow: TextOverflow.ellipsis,
                                      style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                  if (_meta(events[i]).isNotEmpty) ...[
                                    const SizedBox(height: 2),
                                    Text(_meta(events[i]),
                                        maxLines: 1,
                                        overflow: TextOverflow.ellipsis,
                                        style: const TextStyle(fontSize: 13, color: Color(0xFF57534E))),
                                  ],
                                ],
                              ),
                            ),
                            const SizedBox(width: 10),
                            _roleChip(events[i].ownerId == myId),
                          ]),
                        ),
                      ),
                    ),
                  ],
                ],
              ),
            ),
            const SizedBox(height: 12),
            const Text('Só aparecem os eventos que organizas ou onde podes contratar.',
                textAlign: TextAlign.center,
                style: TextStyle(fontSize: 13, color: Color(0xFF57534E))),
          ],
        ),
      ),
    );
  }
}
