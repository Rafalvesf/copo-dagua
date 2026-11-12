import '../../../core/moderation/word_filter.dart';
import '../../../shared/widgets/onb_kit.dart';
import 'package:copo_dagua_app/shared/hero_icons.dart';
import '../../../core/exports/export_files.dart' show deliverFile;
import '../../../core/notifications/push.dart';
import 'dart:typed_data';
import 'dart:convert';
import 'package:flutter/material.dart';
import '../../../shared/text_case.dart';
import '../../../core/wedding/event_lifecycle.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../shared/widgets/line_icon.dart';
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
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/public_link.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../guest_home/screens/guest_mode_screen.dart' show showGuestModeSheet;
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/first_run_tour.dart' show FirstRunTour, TourRole;
import '../../../core/supabase/supabase_config.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FunctionException;

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
// Mockup "Definições (botão)" (2026-11-12): fundo creme, grupos brancos
// de cantos 22, linhas de 56 sem ícones, títulos de secção espaçados.
const _pageBackground = Color(0xFFF2F0EB);

class _SettingsPage extends StatelessWidget {
  final String title;
  final List<Widget> children;

  const _SettingsPage({required this.title, required this.children});

  @override
  Widget build(BuildContext context) => SettingsScaffold(title: title, children: children);
}

/// Página de definições com o estilo do mockup: voltar redondo branco e
/// título de 28 à esquerda. Partilhada com as Definições do Perfil.
class SettingsScaffold extends StatelessWidget {
  final String title;
  final List<Widget> children;
  const SettingsScaffold({super.key, required this.title, required this.children});

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      gradientOverride: const LinearGradient(colors: [_pageBackground, _pageBackground]),
      body: ListView(
        padding: EdgeInsets.fromLTRB(AppTheme.screenMargin, MediaQuery.paddingOf(context).top + 16, AppTheme.screenMargin, 60),
        children: [
          Row(children: [
            SnappyTap(
              onTap: () => Navigator.of(context).maybePop(),
              child: Container(
                width: 44,
                height: 44,
                alignment: Alignment.center,
                decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
                child: const LineIcon(LineIcon.back, stroke: 2.2),
              ),
            ),
            const SizedBox(width: 10),
            Expanded(
              child: Text(title,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ),
          ]),
          const SizedBox(height: 6),
          ...children,
        ],
      ),
    );
  }
}

class _SectionTitle extends StatelessWidget {
  final String text;
  const _SectionTitle(this.text);

  @override
  Widget build(BuildContext context) => SettingsSectionTitle(text);
}

class SettingsSectionTitle extends StatelessWidget {
  final String text;
  const SettingsSectionTitle(this.text, {super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(4, 20, 4, 12),
      child: Text(
        text.toUpperCase(),
        style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted),
      ),
    );
  }
}

class _Group extends StatelessWidget {
  final List<Widget> children;
  const _Group({required this.children});

  @override
  Widget build(BuildContext context) => SettingsGroup(children: children);
}

/// Grupo branco de cantos 22 com divisórias finas (mockup).
class SettingsGroup extends StatelessWidget {
  final List<Widget> children;
  const SettingsGroup({super.key, required this.children});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Column(
        children: [
          for (var i = 0; i < children.length; i++) ...[
            if (i > 0) const Divider(height: 1, thickness: 1, color: Color(0xFFECE7DC)),
            children[i],
          ],
        ],
      ),
    );
  }
}

class _Row extends StatelessWidget {
  // O ícone já não aparece (mockup sem ícones); fica para não mexer em
  // todas as linhas.
  final IconData icon;
  final String label;
  final String? value;
  final VoidCallback? onTap;
  final Color? color;

  const _Row({required this.icon, required this.label, this.value, this.onTap, this.color});

  @override
  Widget build(BuildContext context) => SettingsRow(label: label, value: value, onTap: onTap, color: color);
}

/// Linha de 56: nome à esquerda, valor e seta à direita (mockup).
class SettingsRow extends StatelessWidget {
  final String label;
  final String? value;
  final VoidCallback? onTap;
  final Color? color;

  const SettingsRow({super.key, required this.label, this.value, this.onTap, this.color});

  @override
  Widget build(BuildContext context) {
    final row = ConstrainedBox(
      constraints: const BoxConstraints(minHeight: 56),
      child: Row(
        children: [
          Expanded(
            child: Text(
              label,
              maxLines: 1,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: color ?? AppTheme.ink),
            ),
          ),
          if (value != null) ...[
            const SizedBox(width: 12),
            ConstrainedBox(
              constraints: BoxConstraints(maxWidth: MediaQuery.sizeOf(context).width * 0.45),
              child: Text(
                value!,
                maxLines: 1,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.right,
                style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.inkMuted),
              ),
            ),
          ],
          if (onTap != null) ...[
            const SizedBox(width: 12),
            const LineIcon(LineIcon.forward, size: 16, color: AppTheme.inkMuted),
          ],
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
      padding: const EdgeInsets.only(top: 20),
      child: SnappyTap(
        onTap: () => ref.read(authControllerProvider.notifier).logout(),
        child: Container(
          height: 52,
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(26),
            border: Border.all(color: AppTheme.ink, width: 1.5),
          ),
          child: const Text('Terminar sessão', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
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

  List<Widget> _sections(BuildContext context, WidgetRef ref, Wedding wedding,
      {bool help = true, bool signOut = true, List<Widget> afterOrganization = const []}) {
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
          // Arquivados e apagados (185) — só aqui.
          _Row(
            icon: Hi.archiveBox,
            label: 'Eventos arquivados e apagados',
            onTap: () => context.push('/eventos-arquivados'),
          ),
        ],
      ),
      // "Perfil" entre Organização e Conta (mockup).
      ...afterOrganization,
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
    return _SettingsPage(
      title: 'Definições',
      children: [
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
  final List<Widget> afterOrganization;
  const CoupleAccountSections({super.key, this.help = true, this.signOut = true, this.afterOrganization = const []});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final wedding = ref.watch(weddingControllerProvider).wedding;
    if (wedding == null) return const SizedBox.shrink();
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: const _CoupleSettings(fromGuestMode: false)
          ._sections(context, ref, wedding, help: help, signOut: signOut, afterOrganization: afterOrganization),
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
  // Nome do evento (até 40) — o que aparece em todo o lado.
  late final _name = TextEditingController(text: widget.wedding.displayNames);
  late EventType _type = widget.wedding.eventType;
  late final _location = TextEditingController(text: widget.wedding.location ?? '');
  late final _venue = TextEditingController(text: widget.wedding.venue ?? '');
  late final _quote = TextEditingController(text: widget.wedding.quote ?? '');
  late DateTime? _date = widget.wedding.weddingDate;
  late CeremonyType _ceremonyType = widget.wedding.ceremonyType;
  late final _typeName = TextEditingController(text: widget.wedding.eventTypeOther ?? '');

  @override
  void dispose() {
    _name.dispose();
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
        // Mesma grelha do criar evento; «Outro» pede o nome (até 24).
        const OnbGroupLabel('Tipo de evento'),
        const SizedBox(height: 8),
        OnbTypeGrid(selected: _type, onTap: (t) => setState(() => _type = t)),
        if (_type == EventType.other) ...[
          const SizedBox(height: 12),
          OnbField(
            controller: _typeName,
            label: 'Que evento é?',
            hint: 'Ex.: Despedida de solteira',
            maxLength: 24,
            error: WordFilter.allowed(_typeName.text) ? null : WordFilter.message,
            onChanged: (_) => setState(() {}),
          ),
        ],
        const SizedBox(height: 16),
        OnbField(
          controller: _name,
          label: 'Nome do evento',
          maxLength: 40,
          error: WordFilter.allowed(_name.text) ? null : WordFilter.message,
          onChanged: (_) => setState(() {}),
        ),
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
            final messenger = ScaffoldMessenger.of(context);
            final name = _name.text.trim();
            if (name.isEmpty || !WordFilter.allowed(name) || !WordFilter.allowed(_typeName.text)) {
              messenger.showSnackBar(SnackBar(content: Text(name.isEmpty ? 'Escreve o nome do evento.' : WordFilter.message)));
              return;
            }
            // Nome igual ao de antes: mantém os dois nomes do casal.
            final same = name == widget.wedding.displayNames;
            try {
            await ref.read(weddingControllerProvider.notifier).update(
                  widget.wedding.copyWith(
                    partnerName1: same ? widget.wedding.partnerName1 : name,
                    partnerName2: same ? (widget.wedding.partnerName2 ?? '') : '',
                    location: _location.text.trim(),
                    venue: _venue.text.trim(),
                    quote: _quote.text.trim(),
                    weddingDate: _date,
                    ceremonyType: _ceremonyType,
                  ),
                );
            if (_type != widget.wedding.eventType || (_type == EventType.other && _typeName.text.trim() != (widget.wedding.eventTypeOther ?? ''))) {
              await ref.read(weddingControllerProvider.notifier).setEventType(_type, otherLabel: _typeName.text);
            }
            } catch (e) {
              messenger.showSnackBar(SnackBar(content: Text(WordFilter.serverMessage(e) ?? 'Não foi possível guardar.')));
              return;
            }
            if (!context.mounted) return;
            messenger.showSnackBar(const SnackBar(content: Text('Evento atualizado.')));
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
    return _SettingsPage(
      title: 'Definições',
      children: [
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
    return ConstrainedBox(
      constraints: const BoxConstraints(minHeight: 56),
      child: Row(children: [
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
            const Text('Notificações', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            Text(sub, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
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


/// Definições → "Eventos arquivados e apagados" (migração 185).
class HiddenEventsScreen extends ConsumerWidget {
  const HiddenEventsScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final list = ref.watch(hiddenEventsProvider).value ?? const <HiddenEvent>[];
    final archived = list.where((e) => !e.deleted).toList();
    final deleted = list.where((e) => e.deleted).toList();
    return SettingsScaffold(
      title: 'Arquivados e apagados',
      children: [
        if (list.isEmpty)
          const Padding(
            padding: EdgeInsets.only(top: 20),
            child: Text('Não tens eventos arquivados nem apagados.',
                style: TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
          ),
        if (archived.isNotEmpty) ...[
          const SettingsSectionTitle('Arquivados'),
          SettingsGroup(children: [for (final e in archived) _HiddenEventRow(e)]),
        ],
        if (deleted.isNotEmpty) ...[
          const SettingsSectionTitle('Apagados'),
          SettingsGroup(children: [for (final e in deleted) _HiddenEventRow(e)]),
          const Padding(
            padding: EdgeInsets.fromLTRB(4, 10, 4, 0),
            child: Text(
              'Os apagados não aparecem a ninguém. Restaura-os quando quiseres, ou apaga-os de vez se não tiverem pedidos a parceiros, bilhetes ou presentes.',
              style: TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted),
            ),
          ),
        ],
      ],
    );
  }
}

class _HiddenEventRow extends ConsumerStatefulWidget {
  final HiddenEvent event;
  const _HiddenEventRow(this.event);

  @override
  ConsumerState<_HiddenEventRow> createState() => _HiddenEventRowState();
}

class _HiddenEventRowState extends ConsumerState<_HiddenEventRow> {
  bool _busy = false;
  bool _confirmPurge = false;

  Future<void> _run(Future<void> Function() action, String ok) async {
    setState(() => _busy = true);
    final messenger = ScaffoldMessenger.of(context);
    try {
      await action();
      final me = ref.read(authControllerProvider).profile?.id;
      if (me != null) await ref.read(weddingControllerProvider.notifier).load(me);
      ref.invalidate(hiddenEventsProvider);
      messenger.showSnackBar(SnackBar(content: Text(ok)));
    } catch (e) {
      messenger.showSnackBar(SnackBar(content: Text(eventActionError(e))));
    } finally {
      if (mounted) {
        setState(() {
          _busy = false;
          _confirmPurge = false;
        });
      }
    }
  }

  Widget _pill(String text, {bool dark = false, VoidCallback? onTap}) => SnappyTap(
        onTap: _busy ? null : onTap,
        child: Container(
          height: 36,
          padding: const EdgeInsets.symmetric(horizontal: 14),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: dark ? AppTheme.ink : Colors.white,
            borderRadius: BorderRadius.circular(18),
            border: dark ? null : Border.all(color: AppTheme.ink, width: 1.5),
          ),
          child: Text(text, style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: dark ? Colors.white : AppTheme.ink)),
        ),
      );

  @override
  Widget build(BuildContext context) {
    final e = widget.event;
    final date = e.date == null ? null : formatWeddingDateCaps(e.date!);
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 12),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(e.name.isEmpty ? 'Evento' : capFirst(e.name),
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (date != null) Text(date, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          const SizedBox(width: 10),
          _pill('Restaurar', dark: true, onTap: () => _run(() => restoreEvent(e.id), 'Evento restaurado.')),
        ]),
        if (e.deleted && e.mine) ...[
          const SizedBox(height: 10),
          if (!_confirmPurge)
            Align(
              alignment: Alignment.centerLeft,
              child: SnappyTap(
                onTap: _busy ? null : () => setState(() => _confirmPurge = true),
                child: const Text('Apagar de vez',
                    style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppStatusColors.declined)),
              ),
            )
          else
            Row(children: [
              const Expanded(
                child: Text('Apagar de vez? Não dá para desfazer.',
                    style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppStatusColors.declined)),
              ),
              _pill('Não', onTap: () => setState(() => _confirmPurge = false)),
              const SizedBox(width: 6),
              _pill('Apagar', dark: true, onTap: () => _run(() => purgeEvent(e.id), 'Evento apagado de vez.')),
            ]),
        ],
      ]),
    );
  }
}
