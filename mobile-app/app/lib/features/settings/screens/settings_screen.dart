import 'package:copo_dagua_app/shared/hero_icons.dart';
import '../../../core/exports/export_files.dart' show deliverFile;
import '../../../core/notifications/push.dart';
import 'dart:typed_data';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/gradient_scaffold.dart';
import '../../../core/wedding/organizers.dart' show myWeddingPermsProvider;
import '../../../core/events/events_providers.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import '../../../core/seating/seating_controller.dart';
import 'package:go_router/go_router.dart';
import 'package:share_plus/share_plus.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/billing/billing_details.dart';
import '../../../core/feedback/app_feedback.dart';
import '../../../core/models/models.dart';
import '../../../core/moderation/moderation.dart';
import '../../../core/partner_profile/partner_location.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/public_link.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../guest_home/screens/guest_mode_screen.dart' show showGuestModeSheet;
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/first_run_tour.dart' show FirstRunTour, TourRole;
import '../../../shared/widgets/v2_kit.dart';
import '../../../core/supabase/supabase_config.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FunctionException;
import '../../../core/profile/username.dart';

/// Definições — uma por tipo de conta (organizadores, parceiros,
/// convidados). Redesign 2026-10-17 (canvas "Organizadores · Definições",
/// "Parceiro — definições" e "Convidado · Definições"): cartão no topo,
/// grupos com linhas e "Terminar sessão" no fundo.
class SettingsScreen extends ConsumerWidget {
  /// Presente quando aberto a partir do perfil de "Modo convidado"
  /// (conta de casal a acompanhar outro casamento) — o atalho "Ver como
  /// convidado" passa a "Ver em modo casamento".
  final bool fromGuestMode;

  const SettingsScreen({super.key, this.fromGuestMode = false});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final role = ref.watch(authControllerProvider.select((s) => s.profile?.role));
    return switch (role) {
      UserRole.partner => const _PartnerSettings(),
      UserRole.guest => const _GuestSettings(),
      _ => _CoupleSettings(fromGuestMode: fromGuestMode),
    };
  }
}

// Fundo branco e linhas soltas com divisórias, como em "Convidado ·
// Definições" — pedido 2026-10-17: "gostei destas definições, aplica no
// resto" (parceiro e organizador usam os mesmos componentes).
const _pageBackground = Colors.white;

class _SettingsPage extends StatelessWidget {
  final String title;
  final List<Widget> children;

  const _SettingsPage({required this.title, required this.children});

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      gradientOverride: const LinearGradient(colors: [_pageBackground, _pageBackground]),
      body: SafeArea(top: false, 
        bottom: false,
        child: ListView(
          padding: ( EdgeInsets.zero).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
          children: [
            PageHeader(title: title, centered: true),
            Padding(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 14, AppTheme.screenMargin, 60),
              child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: children),
            ),
          ],
        ),
      ),
    );
  }
}

/// Cartão do topo das Definições, igual para organizadores e parceiros:
/// degradê suave, etiqueta, ação à direita, nome e uma linha de detalhe.
class _HeaderCard extends StatelessWidget {
  final String chip;
  final String action;
  final String title;
  final String meta;
  final VoidCallback onTap;
  const _HeaderCard({required this.chip, required this.action, required this.title, required this.meta, required this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.all(18),
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(AppRadius.xl),
            gradient: LinearGradient(
              begin: const Alignment(-0.6, -1),
              end: const Alignment(0.6, 1),
              colors: [AppTheme.accentTint, const Color(0xFFF7EACA), const Color(0xFFF3DEE0)],
              stops: const [0, 0.6, 1],
            ),
          ),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Row(children: [
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
                decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.8), borderRadius: BorderRadius.circular(999)),
                child: Text(chip, style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: Color(0xFF3E5539))),
              ),
              const Spacer(),
              Text(action, style: const TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: Color(0xFF3E5539))),
            ]),
            const SizedBox(height: 10),
            Text(title, style: const TextStyle(fontSize: AppFontSize.h2, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
          ]),
        ),
      );
}

class _SectionTitle extends StatelessWidget {
  final String text;
  const _SectionTitle(this.text);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(0, 24, 0, 12),
      child: Text(
        text.toUpperCase(),
        style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.inkMuted),
      ),
    );
  }
}

class _Group extends StatelessWidget {
  final List<Widget> children;
  const _Group({required this.children});

  // Redesign 2026-10-19 (canvas "definições (redesign)"): cada grupo é
  // um cartão branco com sombra suave e linhas com autocolantes.
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 2),
      decoration: softCard(),
      child: Column(
        children: [
          for (var i = 0; i < children.length; i++) ...[
            if (i > 0) const Divider(height: 1, thickness: 1, color: Color(0xFFEEF2EC)),
            children[i],
          ],
        ],
      ),
    );
  }
}

class _Row extends StatelessWidget {
  final IconData icon;
  final String label;
  final String? value;
  final VoidCallback? onTap;
  final Color? color;

  const _Row({required this.icon, required this.label, this.value, this.onTap, this.color});

  @override
  Widget build(BuildContext context) {
    final row = Padding(
      padding: const EdgeInsets.symmetric(vertical: 11),
      child: Row(
        children: [
          StickerIcon(icon, size: 36, color: color, turns: StickerIcon.tilt(label.length)),
          const SizedBox(width: 12),
          Expanded(
            child: Text(
              label,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(fontSize: AppFontSize.base + 1, color: color ?? AppTheme.ink),
            ),
          ),
          // Valor encostado à direita, sempre no mesmo sítio, e a seta
          // (ou o espaço dela) sempre na mesma coluna — antes o valor
          // ficava a meio da linha e desalinhado entre linhas.
          if (value != null) ...[
            const SizedBox(width: 8),
            ConstrainedBox(
              constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(context).width * 0.42),
              child: Text(
                value!,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.right,
                style: const TextStyle(fontSize: AppFontSize.base, color: AppTheme.inkMuted),
              ),
            ),
          ],
          const SizedBox(width: 6),
          SizedBox(
            width: 18,
            child: onTap == null ? null : const Icon(Hi.chevronRight, size: 18, color: Color(0xFFB5B0A6)),
          ),
        ],
      ),
    );
    return onTap == null ? row : SnappyTap(onTap: onTap!, child: row);
  }
}

class _SignOut extends ConsumerWidget {
  const _SignOut();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Padding(
      padding: const EdgeInsets.only(top: 24),
      child: Center(
        child: TextButton(
          onPressed: () => ref.read(authControllerProvider.notifier).logout(),
          style: TextButton.styleFrom(
            foregroundColor: const Color(0xFFA3412E),
            textStyle: const TextStyle(
              fontFamily: AppTheme.fontFamily,
              fontFamilyFallback: AppTheme.fontFamilyFallback,
              fontSize: AppFontSize.base + 1,
              fontWeight: FontWeight.w700,
            ),
          ),
          child: const Row(mainAxisSize: MainAxisSize.min, children: [
            Icon(Hi.arrowRightStartOnRectangle, size: 18),
            SizedBox(width: 8),
            Text('Terminar sessão'),
          ]),
        ),
      ),
    ).withVersion();
  }
}

class _HelpGroup extends ConsumerWidget {
  const _HelpGroup();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final role = switch (ref.watch(authControllerProvider.select((s) => s.profile?.role))) {
      UserRole.partner => TourRole.partner,
      UserRole.guest => TourRole.guest,
      _ => TourRole.organizer,
    };
    return _Group(
      children: [
        // Guia da primeira entrada outra vez (2026-10-25).
        _Row(
          icon: Hi.globeEuropeAfrica,
          label: 'Ver o guia da app',
          onTap: () => FirstRunTour.replay(context, role),
        ),
        _Row(
          icon: Hi.lifebuoy,
          label: 'Falar com a equipa À Nossa!',
          onTap: () => context.push('/support'),
        ),
        _Row(
          icon: Hi.bugAnt,
          label: 'Reportar um erro',
          onTap: () => showBugReportSheet(context, ref),
        ),
        _Row(
          icon: Hi.starOutline,
          label: 'Classificar a app',
          onTap: () => RatingPrompt.show(context, ref),
        ),
        _Row(icon: Hi.documentText, label: 'Termos e Condições', onTap: () => context.push('/termos')),
        _Row(icon: Hi.shieldExclamation, label: 'Política de Privacidade', onTap: () => context.push('/privacidade')),
      ],
    );
  }
}

class _CoupleSettings extends ConsumerWidget {
  final bool fromGuestMode;
  const _CoupleSettings({required this.fromGuestMode});

  List<Widget> _sections(BuildContext context, WidgetRef ref, Wedding wedding, {bool help = true, bool signOut = true}) {
    return [
      const _SectionTitle('Organização'),
      _Group(
        children: [
          // Quem organiza e o que pode fazer (migração 159).
          _Row(
            icon: Hi.shieldCheck,
            label: wedding.eventType == EventType.wedding ? 'Organizadores e o teu par' : 'Organizadores',
            value: 'Convidar',
            onTap: () => context.push('/organizadores'),
          ),
          _Row(
            icon: Hi.calendar,
            label: 'Detalhes do evento',
            onTap: () => Navigator.of(context).push(MaterialPageRoute(builder: (_) => _EditEventPage(wedding: wedding))),
          ),
          _Row(
            icon: Hi.squaresPlus,
            label: 'Painel do evento',
            value: 'O que aparece',
            onTap: () => Navigator.of(context).push(MaterialPageRoute(builder: (_) => const _PanelPage())),
          ),
          _Row(
            icon: Hi.swatch,
            label: 'Aparência do menu',
            onTap: () => context.go('/wedding?aparencia=1'),
          ),
          // Público/privado e entrada passaram para "Para os convidados" (2026-11-03).
          _Row(
            icon: Hi.ticket,
            label: 'Acesso e entrada',
            value: 'Para os convidados',
            onTap: () => context.push('/guest-page'),
          ),
        ],
      ),
      const _SectionTitle('Conta'),
      const _AccountSection(),
      if (help) ...[
        const _SectionTitle('Ajuda'),
        const _HelpGroup(),
      ],
      if (signOut) const _SignOut(),
    ];
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final wedding = ref.watch(weddingControllerProvider).wedding;
    if (wedding == null) {
      return const Scaffold(backgroundColor: _pageBackground, body: Center(child: CircularProgressIndicator()));
    }
    final meta = [
      if (wedding.weddingDate != null) formatWeddingDateCaps(wedding.weddingDate!),
      if (wedding.venue?.isNotEmpty == true) wedding.venue! else if (wedding.location?.isNotEmpty == true) wedding.location!,
      if (wedding.estimatedGuests != null) '${wedding.estimatedGuests} convidados',
    ].join(' · ');
    return _SettingsPage(
      title: 'Definições',
      children: [
        _HeaderCard(
          chip: wedding.eventType.label,
          action: 'Editar',
          title: wedding.displayNames,
          meta: meta,
          onTap: () => Navigator.of(context).push(MaterialPageRoute(builder: (_) => _EditEventPage(wedding: wedding))),
        ),
        ..._sections(context, ref, wedding),
      ],
    );
  }
}

/// Conteúdo das Definições do organizador, para pôr dentro do Perfil
/// (pedido 2026-10-17: "coloca todo o conteúdo das definições de conta
/// na página do perfil").
class CoupleAccountSections extends ConsumerWidget {
  final bool help;
  final bool signOut;
  const CoupleAccountSections({super.key, this.help = true, this.signOut = true});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final wedding = ref.watch(weddingControllerProvider).wedding;
    if (wedding == null) return const SizedBox.shrink();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const _CoupleSettings(fromGuestMode: false)._sections(context, ref, wedding, help: help, signOut: signOut),
    );
  }
}

/// Conteúdo das Definições do parceiro para o Perfil. Serviços e preços,
/// portefólio, avaliações, resultados, pagamentos, contratos e reservas
/// ficam no Painel.
class PartnerAccountSections extends ConsumerWidget {
  const PartnerAccountSections({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const _SectionTitle('Negócio'),
        _Group(
          children: [
            _Row(icon: Hi.buildingStorefront, label: 'Informações do negócio', onTap: () => context.push('/partner-business-info')),
            _Row(icon: Hi.calendar, label: 'Regras de cancelamento', onTap: () => context.push('/partner-cancellation')),
            _Row(
              icon: Hi.mapPin,
              label: 'Localização',
              value: ref.watch(partnerLocationProvider).maybeWhen(
                    data: (l) => l == null || l.isEmpty ? null : (l.city.isNotEmpty ? l.city : l.summary),
                    orElse: () => null,
                  ),
              onTap: () => context.push('/partner-location'),
            ),
            _Row(
              icon: Hi.calendarDays,
              label: 'Disponibilidade',
              value: profile == null ? null : (profile.acceptingRequests ? 'A aceitar pedidos' : 'Em pausa'),
              onTap: () => context.push('/partner-availability'),
            ),
            if (profile?.categoryLabels.contains('Espaço / Quinta') ?? false)
              _Row(icon: Hi.ticket, label: 'Mesas do local', onTap: () => context.push('/partner-venue-tables')),
            _Row(icon: Hi.calendarDays, label: 'Calendário e datas bloqueadas', onTap: () => context.push('/partner-calendar')),
          ],
        ),
        const _SectionTitle('Conta'),
        const _AccountSection(),
        const _SectionTitle('Ajuda'),
        const _HelpGroup(),
        const _SignOut(),
      ],
    );
  }
}

/// Conteúdo das Definições do convidado para o Perfil.
class GuestAccountSections extends StatelessWidget {
  final bool help;
  final bool signOut;
  const GuestAccountSections({super.key, this.help = true, this.signOut = true});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const _SectionTitle('Conta'),
        const _AccountSection(),
        const _SectionTitle('Eventos'),
        _Group(
          children: [
            _Row(icon: Hi.sparkles, label: 'Os teus eventos', onTap: () => context.go('/eventos')),
            _Row(icon: Hi.key, label: 'Juntar-me a outro evento', onTap: () => showGuestModeSheet(context)),
          ],
        ),
        if (help) ...[
          const _SectionTitle('Ajuda'),
          const _HelpGroup(),
        ],
        if (signOut) const _SignOut(),
      ],
    );
  }
}

class _EditEventPage extends ConsumerStatefulWidget {
  final Wedding wedding;
  const _EditEventPage({required this.wedding});

  @override
  ConsumerState<_EditEventPage> createState() => _EditEventPageState();
}

class _EditEventPageState extends ConsumerState<_EditEventPage> {
  late final _partner1 = TextEditingController(text: widget.wedding.partnerName1);
  late final _partner2 = TextEditingController(text: widget.wedding.partnerName2 ?? '');
  late final _location = TextEditingController(text: widget.wedding.location ?? '');
  late final _venue = TextEditingController(text: widget.wedding.venue ?? '');
  late final _quote = TextEditingController(text: widget.wedding.quote ?? '');
  late DateTime? _date = widget.wedding.weddingDate;
  late CeremonyType _ceremonyType = widget.wedding.ceremonyType;
  late final _typeName = TextEditingController(text: widget.wedding.eventTypeOther ?? '');

  @override
  void dispose() {
    _partner1.dispose();
    _partner2.dispose();
    _location.dispose();
    _venue.dispose();
    _quote.dispose();
    _typeName.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final loading = ref.watch(weddingControllerProvider).loading;
    final isWedding = widget.wedding.eventType == EventType.wedding;
    return _SettingsPage(
      title: 'Detalhes do evento',
      children: [
        // "Outro": o nome que aparece no topo do evento (ex.: Despedida).
        if (widget.wedding.eventType == EventType.other) ...[
          AuthTextField(label: 'Tipo de evento (ex.: Despedida)', controller: _typeName),
          const SizedBox(height: 12),
        ],
        AuthTextField(label: 'O teu nome', controller: _partner1),
        const SizedBox(height: 12),
        AuthTextField(label: isWedding ? 'Nome do teu par' : 'Quem organiza contigo', controller: _partner2),
        const SizedBox(height: 12),
        DatePickerField(label: 'Data', value: _date, allowUnknown: false, onChanged: (d) => setState(() => _date = d)),
        const SizedBox(height: 12),
        AuthTextField(label: 'Região / localidade', controller: _location),
        const SizedBox(height: 12),
        AuthTextField(label: 'Local', controller: _venue),
        const SizedBox(height: 12),
        AuthTextField(label: 'Frase de destaque', controller: _quote),
        if (isWedding) ...[
          const SizedBox(height: 12),
          DropdownButtonFormField<CeremonyType>(
            initialValue: _ceremonyType,
            decoration: const InputDecoration(labelText: 'Tipo de cerimónia'),
            items: const [
              DropdownMenuItem(value: CeremonyType.civil, child: Text('Civil')),
              DropdownMenuItem(value: CeremonyType.religious, child: Text('Religiosa')),
              DropdownMenuItem(value: CeremonyType.both, child: Text('Ambas')),
            ],
            onChanged: (v) => setState(() => _ceremonyType = v ?? _ceremonyType),
          ),
        ],
        const SizedBox(height: 24),
        PrimaryButton(
          label: 'Guardar',
          loading: loading,
          onPressed: () async {
            await ref.read(weddingControllerProvider.notifier).update(
                  widget.wedding.copyWith(
                    partnerName1: _partner1.text.trim(),
                    partnerName2: _partner2.text.trim(),
                    location: _location.text.trim(),
                    venue: _venue.text.trim(),
                    quote: _quote.text.trim(),
                    weddingDate: _date,
                    ceremonyType: _ceremonyType,
                  ),
                );
            if (widget.wedding.eventType == EventType.other) {
              await ref.read(weddingControllerProvider.notifier).setEventTypeOther(_typeName.text);
            }
            if (!context.mounted) return;
            ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Evento atualizado.')));
            Navigator.of(context).pop();
          },
        ),
      ],
    );
  }
}

/// Definições → Painel do evento: o organizador escolhe o que aparece no
/// painel (2026-11-11). Esconder não apaga nada.
class _PanelPage extends ConsumerWidget {
  const _PanelPage();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final w = ref.watch(weddingControllerProvider).wedding;
    if (w == null) return const SizedBox.shrink();
    final c = ref.read(weddingControllerProvider.notifier);
    final fourth = switch (w.eventType) {
      EventType.wedding || EventType.vowRenewal || EventType.baptism || EventType.communion || EventType.corporate => 'Mesas',
      EventType.graduation || EventType.party || EventType.nightlife || EventType.concert || EventType.festival => 'Bilhetes',
      _ => 'Presentes',
    };
    Widget tile(String key, String label, String sub, {bool indent = false}) => SwitchListTile(
          contentPadding: EdgeInsets.only(left: indent ? 32 : 4, right: 4),
          title: Text(label, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          subtitle: Text(sub, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          value: w.panelShows(key),
          onChanged: (v) => c.setPanelShown(key, v),
        );
    // Só mesas e presentes se podem desligar; mesas só aparecem com mais
    // de uma mesa (2026-11-11).
    final tables = ref.watch(seatingControllerProvider).tables.length;
    final canFourth = fourth == 'Presentes' || (fourth == 'Mesas' && tables > 1);
    return _SettingsPage(
      title: 'Painel do evento',
      children: [
        const Text('Escolhe o que aparece no painel. Esconder não apaga nada.',
            style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
        const SizedBox(height: 8),
        tile('countdown', 'Contagem decrescente', 'Dias, horas, minutos e segundos'),
        if (canFourth)
          tile('stat_fourth', fourth, fourth == 'Mesas' ? 'Pessoas sentadas, nos números do painel' : 'Já oferecidos, nos números do painel'),
      ],
    );
  }
}

// ───────────────────────── Parceiros ─────────────────────────

class _PartnerSettings extends ConsumerWidget {
  const _PartnerSettings();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    final name = profile?.businessName?.isNotEmpty == true ? profile!.businessName! : (profile?.fullName ?? '');
    return _SettingsPage(
      title: 'Definições',
      children: [
        // Mesmo cartão do organizador (pedido 2026-11-08: "mantém igual").
        _HeaderCard(
          chip: 'Parceiro',
          action: 'Ver perfil',
          title: name,
          meta: [
            ...?profile?.categoryLabels,
            ?ref.watch(partnerLocationProvider).maybeWhen(
                  data: (l) => l == null || l.isEmpty || l.city.isEmpty ? null : l.city,
                  orElse: () => null,
                ),
          ].join(' · '),
          onTap: () => context.push('/partner-profile'),
        ),
        const _SectionTitle('Negócio'),
        _Group(
          children: [
            _Row(icon: Hi.buildingStorefront, label: 'Informações do negócio', onTap: () => context.push('/partner-business-info')),
            _Row(icon: Hi.calendar, label: 'Regras de cancelamento', onTap: () => context.push('/partner-cancellation')),
            _Row(icon: Hi.currencyEuro, label: 'Preços e pacotes', onTap: () => context.push('/partner-pricing')),
            _Row(
              icon: Hi.mapPin,
              label: 'Localização',
              value: ref.watch(partnerLocationProvider).maybeWhen(
                    data: (l) => l == null || l.isEmpty ? null : (l.city.isNotEmpty ? l.city : l.summary),
                    orElse: () => null,
                  ),
              onTap: () => context.push('/partner-location'),
            ),
            _Row(
              icon: Hi.map,
              label: 'Área de deslocação',
              value: profile?.maxTravelDistanceKm == null ? null : 'até ${profile!.maxTravelDistanceKm} km',
              onTap: () => context.push('/partner-business-info'),
            ),
            _Row(icon: Hi.rectangleStack, label: 'Fotos e vídeos', onTap: () => context.push('/partner-portfolio')),
          ],
        ),
        const _SectionTitle('Pedidos'),
        _Group(
          children: [
            _Row(icon: Hi.calendarDays, label: 'Calendário e datas bloqueadas', onTap: () => context.push('/partner-calendar')),
            _Row(icon: Hi.starOutline, label: 'Avaliações', onTap: () => context.push('/partner-reviews')),
          ],
        ),
        const _SectionTitle('Pagamentos'),
        _Group(
          children: [
            _Row(icon: Hi.creditCard, label: 'Pagamentos e conta Stripe', onTap: () => context.push('/partner-payments')),
            _Row(icon: Hi.documentText, label: 'Contratos', onTap: () => context.push('/partner-contracts')),
          ],
        ),
        const _SectionTitle('Conta'),
        const _AccountSection(),
        const _SectionTitle('Ajuda'),
        const _HelpGroup(),
        const _SignOut(),
      ],
    );
  }
}

// ───────────────────────── Convidados ─────────────────────────

class _GuestSettings extends StatelessWidget {
  const _GuestSettings();

  @override
  Widget build(BuildContext context) {
    return _SettingsPage(
      title: 'Definições',
      children: [
        const _SectionTitle('Conta'),
        const _AccountSection(),
        const _SectionTitle('Eventos'),
        _Group(
          children: [
            _Row(icon: Hi.sparkles, label: 'Os teus eventos', onTap: () => context.go('/eventos')),
            _Row(icon: Hi.key, label: 'Juntar-me a outro evento', onTap: () => showGuestModeSheet(context)),
          ],
        ),
        const _SectionTitle('Ajuda'),
        const _HelpGroup(),
        const _SignOut(),
      ],
    );
  }
}

/// "Conta" — nome, email e alterar password. Igual para todos os tipos
/// de conta.
class _AccountSection extends ConsumerWidget {
  const _AccountSection();

  Future<void> _editName(BuildContext context, WidgetRef ref, String current) async {
    final controller = TextEditingController(text: current);
    final result = await showIslandDialog<String>(
      context: context,
      builder: (context) => IslandAlert(
        title: const Text('O teu nome'),
        content: TextField(controller: controller, autofocus: true),
        actions: [
          TextButton(onPressed: () => Navigator.of(context).pop(), child: const Text('Cancelar')),
          FilledButton(
            onPressed: () => Navigator.of(context).pop(controller.text.trim()),
            child: const Text('Guardar'),
          ),
        ],
      ),
    );
    if (result == null || result.isEmpty) return;
    try {
      await ref.read(authControllerProvider.notifier).updateFullName(result);
    } catch (_) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível guardar o nome.')),
        );
      }
    }
  }

  Future<void> _resetPassword(BuildContext context, WidgetRef ref, String email) async {
    var message = 'Enviámos um email para $email com o link para mudar a password.';
    try {
      await ref.read(authControllerProvider.notifier).requestPasswordReset(email);
    } catch (_) {
      message = 'Não foi possível enviar o email. Tenta daqui a uns minutos.';
    }
    if (context.mounted) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(message)));
    }
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final profile = ref.watch(authControllerProvider).profile;
    if (profile == null) return const SizedBox.shrink();
    return _Group(
      children: [
        _Row(
          icon: Hi.user,
          label: 'Nome',
          value: profile.fullName,
          onTap: () => _editName(context, ref, profile.fullName),
        ),
        // @ único (migração 163).
        _Row(
          icon: Hi.atSymbol,
          label: 'Nome de utilizador',
          value: switch (ref.watch(myUsernameProvider).value?.username) {
            final u? => '@$u',
            _ => 'Escolher',
          },
          onTap: () => context.push('/username'),
        ),
        _Row(icon: Hi.envelope, label: 'Email', value: profile.email),
        _Row(
          icon: Hi.lockClosed,
          label: 'Mudar password',
          onTap: () => _resetPassword(context, ref, profile.email),
        ),
        // NIF opcional nas faturas da taxa de serviço (migração 132).
        // Organizadores e convidados (cada um o seu NIF). Parceiros: NIF da verificação.
        if (profile.role != UserRole.partner)
          _Row(
            icon: Hi.documentText,
            label: 'Dados de faturação',
            value: ref.watch(billingDetailsProvider).value?.nif ?? 'Consumidor final',
            onTap: () => _editBilling(context, ref),
          ),
        // Pessoas bloqueadas (migração 130, exigência das lojas).
        if ((ref.watch(blockedProfilesProvider).value ?? const <String>{}).isNotEmpty)
          _Row(
            icon: Hi.noSymbol,
            label: 'Pessoas bloqueadas',
            value: '${ref.watch(blockedProfilesProvider).value!.length}',
            onTap: () => _blockedList(context, ref),
          ),
        // Notificações no telemóvel (lista de conformidade, 2026-11-08).
        const _PushRow(),
        // Direito de acesso e portabilidade (RGPD, migração 167).
        _Row(
          icon: Hi.arrowDownTray,
          label: 'Descarregar os meus dados',
          onTap: () => _exportData(context),
        ),
        // Direito ao apagamento (RGPD, 2026-10-25).
        _Row(
          icon: Hi.trash,
          label: 'Apagar conta',
          color: const Color(0xFFA3412E),
          onTap: () => _deleteAccount(context, ref),
        ),
      ],
    );
  }

  Future<void> _editBilling(BuildContext context, WidgetRef ref) async {
    final current = ref.read(billingDetailsProvider).value ?? const BillingDetails();
    final nif = TextEditingController(text: current.nif ?? '');
    final name = TextEditingController(text: current.name ?? '');
    String? error;
    final ok = await showIslandDialog<bool>(
      context: context,
      builder: (ctx) => StatefulBuilder(
        builder: (ctx, setState) => IslandAlert(
          title: const Text('Dados de faturação'),
          content: Column(mainAxisSize: MainAxisSize.min, children: [
            const Text(
              'Opcional. Aparecem nas faturas da taxa de serviço. Sem NIF, a fatura sai como consumidor final.',
              style: TextStyle(fontSize: 13, color: AppTheme.inkMuted, height: 1.35),
            ),
            const SizedBox(height: 12),
            TextField(
              controller: nif,
              keyboardType: TextInputType.number,
              maxLength: 9,
              decoration: InputDecoration(labelText: 'NIF', errorText: error, counterText: ''),
            ),
            TextField(controller: name, decoration: const InputDecoration(labelText: 'Nome na fatura (opcional)')),
          ]),
          actions: [
            TextButton(onPressed: () => Navigator.of(ctx).pop(false), child: const Text('Cancelar')),
            FilledButton(
              onPressed: () {
                final v = nif.text.trim();
                if (v.isNotEmpty && !isValidNif(v)) {
                  setState(() => error = 'NIF inválido');
                  return;
                }
                Navigator.of(ctx).pop(true);
              },
              child: const Text('Guardar'),
            ),
          ],
        ),
      ),
    );
    if (ok != true) return;
    try {
      await saveBillingDetails(ref, nif: nif.text, name: name.text);
    } catch (_) {
      if (context.mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar.')));
      }
    }
  }

  Future<void> _blockedList(BuildContext context, WidgetRef ref) async {
    final ids = (ref.read(blockedProfilesProvider).value ?? const <String>{}).toList();
    final names = <String, String>{};
    try {
      final rows = await supabase.from('profiles').select('id, full_name').inFilter('id', ids) as List;
      for (final r in rows) {
        names[(r as Map)['id'] as String] = (r['full_name'] as String?) ?? '';
      }
    } catch (_) {}
    if (!context.mounted) return;
    await showIslandSheet<void>(
      context: context,
      builder: (ctx) => Consumer(builder: (ctx, ref, _) {
        final current = ref.watch(blockedProfilesProvider).value ?? const <String>{};
        return SafeArea(
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 12),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              const Padding(
                padding: EdgeInsets.fromLTRB(20, 4, 20, 8),
                child: Text('Pessoas bloqueadas', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w700)),
              ),
              if (current.isEmpty)
                const Padding(padding: EdgeInsets.all(20), child: Text('Não tens ninguém bloqueado.')),
              for (final id in current)
                ListTile(
                  title: Text((names[id] ?? '').isEmpty ? 'Pessoa bloqueada' : names[id]!),
                  trailing: TextButton(
                    onPressed: () => unblockProfile(ref, id),
                    child: const Text('Desbloquear'),
                  ),
                ),
            ]),
          ),
        );
      }),
    );
  }

  Future<void> _deleteAccount(BuildContext context, WidgetRef ref) async {
    final controller = TextEditingController();
    final ok = await showIslandDialog<bool>(
      context: context,
      builder: (context) => StatefulBuilder(
        builder: (context, setState) => IslandAlert(
          title: const Text('Apagar a conta?'),
          content: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text(
              'Apagamos o teu perfil, os teus eventos (convidados, tarefas, galeria, mesas e orçamento), as tuas fotos, '
              'mensagens de grupo e notificações. Não dá para voltar atrás.\n\n'
              'Por lei, guardamos o registo dos pagamentos já feitos, sem o teu nome. '
              'Se tiveres reservas ativas, tens de as cancelar ou esperar que o evento passe.',
              style: TextStyle(fontSize: AppFontSize.md, height: 1.45, color: AppTheme.ink),
            ),
            const SizedBox(height: 14),
            const Text('Escreve APAGAR para confirmar.', style: TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 6),
            TextField(
              controller: controller,
              autocorrect: false,
              textCapitalization: TextCapitalization.characters,
              onChanged: (_) => setState(() {}),
            ),
          ]),
          actions: [
            TextButton(onPressed: () => Navigator.of(context).pop(false), child: const Text('Cancelar')),
            FilledButton(
              style: FilledButton.styleFrom(backgroundColor: const Color(0xFFA3412E)),
              onPressed: controller.text.trim().toUpperCase() == 'APAGAR' ? () => Navigator.of(context).pop(true) : null,
              child: const Text('Apagar conta'),
            ),
          ],
        ),
      ),
    );
    if (ok != true || !context.mounted) return;
    final messenger = ScaffoldMessenger.of(context);
    try {
      await supabase.functions.invoke('delete-account', body: {'confirm': true});
      messenger.showSnackBar(const SnackBar(content: Text('A tua conta foi apagada.')));
      await ref.read(authControllerProvider.notifier).logout();
    } on FunctionException catch (e) {
      final d = e.details;
      final code = d is Map ? d['error'] : null;
      final count = d is Map ? d['count'] : null;
      messenger.showSnackBar(SnackBar(
        content: Text(code == 'active_bookings'
            ? 'Tens ${count ?? 'algumas'} reservas ativas. Cancela-as ou espera que o evento passe para apagares a conta.'
            : 'Não foi possível apagar a conta. Tenta outra vez ou fala com a equipa.'),
      ));
    } catch (_) {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível apagar a conta. Verifica a ligação.')));
    }
  }
}

/// Versão publicada (commit), para saber se o telemóvel já tem a última.
const _appVersion = String.fromEnvironment('APP_VERSION', defaultValue: 'local');

extension on Widget {
  Widget withVersion() => Column(children: [
        this,
        Padding(
          padding: const EdgeInsets.only(top: 6),
          child: Text('Versão $_appVersion',
              style: const TextStyle(fontSize: AppFontSize.xs, color: AppTheme.inkMuted)),
        ),
      ]);
}

/// Descarrega os dados pessoais da conta num ficheiro JSON (migração 167).
Future<void> _exportData(BuildContext context) async {
  final messenger = ScaffoldMessenger.of(context);
  messenger.showSnackBar(const SnackBar(content: Text('A preparar os teus dados…')));
  try {
    final data = await supabase.rpc('export_my_data');
    final json = const JsonEncoder.withIndent('  ').convert(data);
    final now = DateTime.now();
    final stamp = '${now.year}${now.month.toString().padLeft(2, '0')}${now.day.toString().padLeft(2, '0')}';
    await deliverFile(Uint8List.fromList(utf8.encode(json)), 'a-nossa-os-meus-dados-$stamp.json', 'application/json');
  } catch (_) {
    messenger.showSnackBar(const SnackBar(content: Text('Não foi possível preparar os dados. Tenta outra vez ou fala com a equipa.')));
  }
}

/// Ligar/desligar as notificações neste dispositivo.
class _PushRow extends StatefulWidget {
  const _PushRow();
  @override
  State<_PushRow> createState() => _PushRowState();
}

class _PushRowState extends State<_PushRow> {
  PushStatus _status = PushNotifications.status();
  bool _off = false;
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    PushNotifications.isOff().then((v) {
      if (mounted) setState(() => _off = v);
    });
  }

  Future<void> _toggle(bool on) async {
    setState(() => _busy = true);
    if (on) {
      final st = await PushNotifications.enable();
      if (mounted) setState(() {
        _status = st;
        _off = st != PushStatus.enabled;
      });
      if (st == PushStatus.denied && mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(
          content: Text('As notificações estão bloqueadas nas definições do telemóvel para esta app.'),
        ));
      }
    } else {
      await PushNotifications.turnOff();
      if (mounted) setState(() => _off = true);
    }
    if (mounted) setState(() => _busy = false);
  }

  @override
  Widget build(BuildContext context) {
    if (_status == PushStatus.unsupported) return const SizedBox.shrink();
    final on = _status == PushStatus.enabled && !_off;
    final sub = switch (_status) {
      PushStatus.iosInstall => 'Adiciona a app ao ecrã principal para as receber',
      PushStatus.denied => 'Bloqueadas nas definições do telemóvel',
      _ => on ? 'Mensagens, pedidos e lembretes' : 'Desligadas neste dispositivo',
    };
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 4),
      child: Row(children: [
        StickerIcon(Hi.bell, size: 36, turns: StickerIcon.tilt(12)),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            const Text('Notificações', style: TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w600, color: AppTheme.ink)),
            Text(sub, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
          ]),
        ),
        Switch.adaptive(
          value: on,
          activeTrackColor: AppTheme.accentOliveDark,
          onChanged: _busy || _status == PushStatus.iosInstall || _status == PushStatus.denied ? null : _toggle,
        ),
      ]),
    );
  }
}
