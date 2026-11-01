import 'package:flutter/material.dart';
import '../../../core/events/events_providers.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
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
const _cardBorder = Color(0xFFEFEBE3);

class _SettingsPage extends StatelessWidget {
  final String title;
  final List<Widget> children;

  const _SettingsPage({required this.title, required this.children});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: _pageBackground,
      body: SafeArea(
        bottom: false,
        child: ListView(
          padding: EdgeInsets.zero,
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
            child: onTap == null ? null : const Icon(Icons.chevron_right, size: 18, color: Color(0xFFB5B0A6)),
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
            Icon(Icons.logout_rounded, size: 18),
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
          icon: Icons.explore_outlined,
          label: 'Ver o guia da app',
          onTap: () => FirstRunTour.replay(context, role),
        ),
        _Row(
          icon: Icons.support_agent_outlined,
          label: 'Falar com a equipa À Nossa!',
          onTap: () => context.push('/support'),
        ),
        _Row(
          icon: Icons.bug_report_outlined,
          label: 'Reportar um erro',
          onTap: () => showBugReportSheet(context, ref),
        ),
        _Row(
          icon: Icons.star_outline_rounded,
          label: 'Classificar a app',
          onTap: () => RatingPrompt.show(context, ref),
        ),
        _Row(icon: Icons.description_outlined, label: 'Termos e Condições', onTap: () => context.push('/termos')),
        _Row(icon: Icons.privacy_tip_outlined, label: 'Política de Privacidade', onTap: () => context.push('/privacidade')),
      ],
    );
  }
}

// ───────────────────────── Organizadores ─────────────────────────

/// "Evento público" (migração 141): aparece a todos no separador
/// Eventos e qualquer utilizador pode entrar.
class _PublicEventRow extends ConsumerWidget {
  final String weddingId;
  const _PublicEventRow({required this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final value = ref.watch(eventIsPublicProvider(weddingId)).value ?? false;
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 6),
      child: Row(
        children: [
          StickerIcon(Icons.public_rounded, size: 36, turns: StickerIcon.tilt(7)),
          const SizedBox(width: 12),
          const Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text('Evento público', style: TextStyle(fontSize: AppFontSize.base + 1, color: AppTheme.ink)),
                Text('Aparece a todos em Eventos e qualquer pessoa pode entrar',
                    style: TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
              ],
            ),
          ),
          Switch(
            value: value,
            onChanged: (v) async {
              final messenger = ScaffoldMessenger.of(context);
              try {
                await setEventPublic(weddingId, v);
                ref.invalidate(eventIsPublicProvider(weddingId));
                messenger.showSnackBar(SnackBar(
                  content: Text(v ? 'O evento está aberto a todos.' : 'O evento voltou a ser só para convidados.'),
                ));
              } catch (_) {
                messenger.showSnackBar(const SnackBar(content: Text('Não foi possível alterar. Tenta outra vez.')));
              }
            },
          ),
        ],
      ),
    );
  }
}

class _CoupleSettings extends ConsumerWidget {
  final bool fromGuestMode;
  const _CoupleSettings({required this.fromGuestMode});

  Future<void> _invite(BuildContext context, WidgetRef ref, Wedding wedding) async {
    final messenger = ScaffoldMessenger.of(context);
    String link;
    try {
      final token = await ref.read(weddingControllerProvider.notifier).createPartnerInviteToken(wedding.id);
      link = publicLink('/juntar/$token');
    } catch (_) {
      messenger.showSnackBar(const SnackBar(content: Text('Não foi possível criar o link de convite.')));
      return;
    }
    var shared = false;
    try {
      final result = await SharePlus.instance.share(
        ShareParams(text: 'Junta-te a mim para organizarmos o evento na app À Nossa!: $link', subject: 'Organiza comigo'),
      );
      shared = result.status != ShareResultStatus.unavailable;
    } catch (_) {}
    if (!shared) {
      await Clipboard.setData(ClipboardData(text: link));
      messenger.showSnackBar(const SnackBar(content: Text('Link copiado.')));
    }
  }

  List<Widget> _sections(BuildContext context, WidgetRef ref, Wedding wedding, {bool help = true, bool signOut = true}) {
    return [
      const _SectionTitle('Organização'),
      _Group(
        children: [
          // "Convidar o teu par" num casamento; noutro evento, outro
          // organizador (pedido 2026-10-17 — antes havia as duas linhas).
          _Row(
            icon: Icons.person_add_alt_outlined,
            label: wedding.eventType == EventType.wedding ? 'Convidar o teu par' : 'Convidar outro organizador',
            value: 'Link',
            onTap: () => _invite(context, ref, wedding),
          ),
          _Row(
            icon: Icons.calendar_today_outlined,
            label: 'Detalhes do evento',
            onTap: () => Navigator.of(context).push(MaterialPageRoute(builder: (_) => _EditEventPage(wedding: wedding))),
          ),
          _Row(
            icon: Icons.palette_outlined,
            label: 'Aparência do menu',
            onTap: () => context.go('/wedding?aparencia=1'),
          ),
          _PublicEventRow(weddingId: wedding.id),
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
        SnappyTap(
          onTap: () => Navigator.of(context).push(MaterialPageRoute(builder: (_) => _EditEventPage(wedding: wedding))),
          child: Container(
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(AppRadius.xl),
              gradient: LinearGradient(
                begin: Alignment(-0.6, -1),
                end: Alignment(0.6, 1),
                colors: [AppTheme.accentTint, Color(0xFFF7EACA), Color(0xFFF3DEE0)],
                stops: [0, 0.6, 1],
              ),
            ),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Row(
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 4),
                      decoration: BoxDecoration(color: Colors.white.withValues(alpha: 0.8), borderRadius: BorderRadius.circular(999)),
                      child: Text(wedding.eventType.label, style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: Color(0xFF3E5539))),
                    ),
                    const Spacer(),
                    const Text('Editar', style: TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: Color(0xFF3E5539))),
                  ],
                ),
                const SizedBox(height: 10),
                Text(wedding.displayNames, style: const TextStyle(fontSize: AppFontSize.h2, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                if (meta.isNotEmpty) Text(meta, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted)),
              ],
            ),
          ),
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
            _Row(icon: Icons.storefront_outlined, label: 'Informações do negócio', onTap: () => context.push('/partner-business-info')),
            _Row(
              icon: Icons.place_outlined,
              label: 'Localização',
              value: ref.watch(partnerLocationProvider).maybeWhen(
                    data: (l) => l == null || l.isEmpty ? null : (l.city.isNotEmpty ? l.city : l.summary),
                    orElse: () => null,
                  ),
              onTap: () => context.push('/partner-location'),
            ),
            _Row(
              icon: Icons.event_available_outlined,
              label: 'Disponibilidade',
              value: profile == null ? null : (profile.acceptingRequests ? 'A aceitar pedidos' : 'Em pausa'),
              onTap: () => context.push('/partner-availability'),
            ),
            if (profile?.categoryLabels.contains('Espaço / Quinta') ?? false)
              _Row(icon: Icons.event_seat_outlined, label: 'Mesas do local', onTap: () => context.push('/partner-venue-tables')),
            _Row(icon: Icons.calendar_month_outlined, label: 'Calendário e datas bloqueadas', onTap: () => context.push('/partner-calendar')),
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
            _Row(icon: Icons.celebration_outlined, label: 'Os teus eventos', onTap: () => context.go('/eventos')),
            _Row(icon: Icons.key_outlined, label: 'Juntar-me a outro evento', onTap: () => showGuestModeSheet(context)),
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

  @override
  void dispose() {
    _partner1.dispose();
    _partner2.dispose();
    _location.dispose();
    _venue.dispose();
    _quote.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final loading = ref.watch(weddingControllerProvider).loading;
    final isWedding = widget.wedding.eventType == EventType.wedding;
    return _SettingsPage(
      title: 'Detalhes do evento',
      children: [
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
            if (!context.mounted) return;
            ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Evento atualizado.')));
            Navigator.of(context).pop();
          },
        ),
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
    final initials = name.trim().split(RegExp(r'\s+')).where((w) => w.isNotEmpty).take(2).map((w) => w[0].toUpperCase()).join();
    return _SettingsPage(
      title: 'Definições',
      children: [
        Container(
          padding: const EdgeInsets.all(16),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(AppRadius.xl),
            border: Border.all(color: _cardBorder),
          ),
          child: Row(
            children: [
              Container(
                width: 56,
                height: 56,
                alignment: Alignment.center,
                decoration: BoxDecoration(color: AppTheme.accentTint, borderRadius: BorderRadius.circular(16)),
                child: Text(initials, style: const TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: Color(0xFF3E5539))),
              ),
              const SizedBox(width: 14),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(name, style: const TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    if (profile?.categoryLabels.isNotEmpty == true) ...[
                      const SizedBox(height: 4),
                      Wrap(
                        spacing: 6,
                        runSpacing: 4,
                        children: [
                          for (final c in profile!.categoryLabels)
                            Container(
                              padding: const EdgeInsets.symmetric(horizontal: 9, vertical: 3),
                              decoration: BoxDecoration(color: AppColors.gray, borderRadius: BorderRadius.circular(999)),
                              child: Text(c, style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: Color(0xFF3E5539))),
                            ),
                        ],
                      ),
                    ],
                  ],
                ),
              ),
              TextButton(
                onPressed: () => context.push('/partner-profile'),
                child: const Text('Ver'),
              ),
            ],
          ),
        ),
        const _SectionTitle('Negócio'),
        _Group(
          children: [
            _Row(icon: Icons.storefront_outlined, label: 'Informações do negócio', onTap: () => context.push('/partner-business-info')),
            _Row(icon: Icons.euro, label: 'Preços e pacotes', onTap: () => context.push('/partner-pricing')),
            _Row(
              icon: Icons.place_outlined,
              label: 'Localização',
              value: ref.watch(partnerLocationProvider).maybeWhen(
                    data: (l) => l == null || l.isEmpty ? null : (l.city.isNotEmpty ? l.city : l.summary),
                    orElse: () => null,
                  ),
              onTap: () => context.push('/partner-location'),
            ),
            _Row(
              icon: Icons.route_outlined,
              label: 'Área de deslocação',
              value: profile?.maxTravelDistanceKm == null ? null : 'até ${profile!.maxTravelDistanceKm} km',
              onTap: () => context.push('/partner-business-info'),
            ),
            _Row(icon: Icons.photo_library_outlined, label: 'Fotos e vídeos', onTap: () => context.push('/partner-portfolio')),
          ],
        ),
        const _SectionTitle('Pedidos'),
        _Group(
          children: [
            _Row(icon: Icons.calendar_month_outlined, label: 'Calendário e datas bloqueadas', onTap: () => context.push('/partner-calendar')),
            _Row(icon: Icons.star_outline, label: 'Avaliações', onTap: () => context.push('/partner-reviews')),
          ],
        ),
        const _SectionTitle('Pagamentos'),
        _Group(
          children: [
            _Row(icon: Icons.credit_card, label: 'Pagamentos e conta Stripe', onTap: () => context.push('/partner-payments')),
            _Row(icon: Icons.description_outlined, label: 'Contratos', onTap: () => context.push('/partner-contracts')),
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
            _Row(icon: Icons.celebration_outlined, label: 'Os teus eventos', onTap: () => context.go('/eventos')),
            _Row(icon: Icons.key_outlined, label: 'Juntar-me a outro evento', onTap: () => showGuestModeSheet(context)),
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
          icon: Icons.person_outline,
          label: 'Nome',
          value: profile.fullName,
          onTap: () => _editName(context, ref, profile.fullName),
        ),
        _Row(icon: Icons.mail_outline, label: 'Email', value: profile.email),
        _Row(
          icon: Icons.lock_outline,
          label: 'Mudar password',
          onTap: () => _resetPassword(context, ref, profile.email),
        ),
        // NIF opcional nas faturas da taxa de serviço (migração 132).
        if (profile.role == UserRole.couple)
          _Row(
            icon: Icons.receipt_long_outlined,
            label: 'Dados de faturação',
            value: ref.watch(billingDetailsProvider).value?.nif ?? 'Consumidor final',
            onTap: () => _editBilling(context, ref),
          ),
        // Pessoas bloqueadas (migração 130, exigência das lojas).
        if ((ref.watch(blockedProfilesProvider).value ?? const <String>{}).isNotEmpty)
          _Row(
            icon: Icons.block,
            label: 'Pessoas bloqueadas',
            value: '${ref.watch(blockedProfilesProvider).value!.length}',
            onTap: () => _blockedList(context, ref),
          ),
        // Direito ao apagamento (RGPD, 2026-10-25).
        _Row(
          icon: Icons.delete_outline_rounded,
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
