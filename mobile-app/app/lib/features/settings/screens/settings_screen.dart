import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:share_plus/share_plus.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_profile/partner_location.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/date_format_pt.dart';
import '../../../core/wedding/guest_facing.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../core/wedding/wedding_nav_icon.dart';
import '../../../shared/public_link.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/cover_flow_picker.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../guest_home/screens/guest_mode_screen.dart' show showGuestModeSheet;

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

const _pageBackground = Color(0xFFF7F5F0);
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
      padding: const EdgeInsets.fromLTRB(4, 20, 4, 8),
      child: Text(
        text.toUpperCase(),
        style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: Color(0xFF8F8B84)),
      ),
    );
  }
}

class _Group extends StatelessWidget {
  final List<Widget> children;
  const _Group({required this.children});

  @override
  Widget build(BuildContext context) {
    return Container(
      // Botões em cinzento, como no Perfil (pedido 2026-10-17).
      padding: const EdgeInsets.symmetric(horizontal: 16),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      child: Column(
        children: [
          for (var i = 0; i < children.length; i++) ...[
            if (i > 0) const Divider(height: 1, color: AppTheme.borderMuted),
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
      padding: const EdgeInsets.symmetric(vertical: 13),
      child: Row(
        children: [
          Icon(icon, size: 20, color: color ?? AppTheme.inkMuted),
          const SizedBox(width: 12),
          Expanded(
            child: Text(label, style: TextStyle(fontSize: AppFontSize.base + 1, color: color ?? AppTheme.ink)),
          ),
          if (value != null)
            Flexible(
              child: Text(
                value!,
                overflow: TextOverflow.ellipsis,
                textAlign: TextAlign.right,
                style: const TextStyle(fontSize: AppFontSize.base, color: AppTheme.inkMuted),
              ),
            ),
          if (onTap != null) ...[
            const SizedBox(width: 6),
            const Icon(Icons.chevron_right, size: 18, color: Color(0xFFB5B0A6)),
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
      padding: const EdgeInsets.only(top: 24),
      child: Center(
        child: TextButton(
          onPressed: () => ref.read(authControllerProvider.notifier).logout(),
          style: TextButton.styleFrom(
            foregroundColor: const Color(0xFFB4232C),
            textStyle: const TextStyle(
              fontFamily: AppTheme.fontFamily,
              fontFamilyFallback: AppTheme.fontFamilyFallback,
              fontSize: AppFontSize.base + 1,
              fontWeight: FontWeight.w700,
            ),
          ),
          child: const Text('Terminar sessão'),
        ),
      ),
    );
  }
}

class _HelpGroup extends StatelessWidget {
  const _HelpGroup();

  @override
  Widget build(BuildContext context) {
    return _Group(
      children: [
        _Row(
          icon: Icons.support_agent_outlined,
          label: 'Falar com a equipa Tchin Tchin',
          onTap: () => context.push('/support'),
        ),
      ],
    );
  }
}

class _RadioCard extends StatelessWidget {
  final String title;
  final String subtitle;
  final bool selected;
  final VoidCallback onTap;

  const _RadioCard({required this.title, required this.subtitle, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(14),
        decoration: BoxDecoration(
          color: selected ? const Color(0xFFF6F8F2) : Colors.white,
          borderRadius: BorderRadius.circular(AppRadius.md),
          border: Border.all(
            color: selected ? AppTheme.accentOliveDark : AppTheme.borderMuted,
            width: selected ? 1.5 : 1,
          ),
        ),
        child: Row(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Container(
              width: 20,
              height: 20,
              margin: const EdgeInsets.only(top: 1),
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                border: Border.all(color: selected ? AppTheme.accentOliveDark : const Color(0xFFCFC8B8), width: 2),
              ),
              alignment: Alignment.center,
              child: selected
                  ? Container(
                      width: 10,
                      height: 10,
                      decoration: const BoxDecoration(color: AppTheme.accentOliveDark, shape: BoxShape.circle),
                    )
                  : null,
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(title, style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  const SizedBox(height: 2),
                  Text(subtitle, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

// ───────────────────────── Organizadores ─────────────────────────

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
        ShareParams(text: 'Junta-te a mim para organizarmos o evento no Tchin Tchin: $link', subject: 'Organiza comigo'),
      );
      shared = result.status != ShareResultStatus.unavailable;
    } catch (_) {}
    if (!shared) {
      await Clipboard.setData(ClipboardData(text: link));
      messenger.showSnackBar(const SnackBar(content: Text('Link copiado.')));
    }
  }

  void _pickNavIcon(BuildContext context) {
    showModalBottomSheet(
      context: context,
      backgroundColor: Colors.white,
      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(28))),
      builder: (context) => const SafeArea(
        child: Padding(
          padding: EdgeInsets.fromLTRB(20, 20, 20, 28),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text('Ícone da barra', style: TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              SizedBox(height: 16),
              _NavIconPicker(),
            ],
          ),
        ),
      ),
    );
  }

  List<Widget> _sections(BuildContext context, WidgetRef ref, Wedding wedding, {bool help = true, bool signOut = true}) {
    return [
      const _SectionTitle('Organização'),
      _Group(
        children: [
          _Row(icon: Icons.link, label: 'Convidar outro organizador', value: 'Link', onTap: () => _invite(context, ref, wedding)),
          _Row(
            icon: Icons.calendar_today_outlined,
            label: 'Detalhes do evento',
            onTap: () => Navigator.of(context).push(MaterialPageRoute(builder: (_) => _EditEventPage(wedding: wedding))),
          ),
          _Row(icon: Icons.emoji_emotions_outlined, label: 'Ícone da barra', onTap: () => _pickNavIcon(context)),
        ],
      ),
      const _SectionTitle('Para os convidados'),
      _Group(
        children: [
          if (wedding.guestCode?.isNotEmpty == true)
            _Row(
              icon: Icons.key_outlined,
              label: 'Código do evento',
              value: wedding.guestCode,
              onTap: () async {
                await Clipboard.setData(ClipboardData(text: wedding.guestCode!));
                if (context.mounted) {
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Código copiado.')));
                }
              },
            ),
          _Row(
            icon: Icons.tune,
            label: 'Entrada, programa e presentes',
            onTap: () => Navigator.of(context).push(
              MaterialPageRoute(builder: (_) => _GuestFacingPage(weddingId: wedding.id, code: wedding.guestCode)),
            ),
          ),
          _Row(
            icon: Icons.swap_horiz,
            label: fromGuestMode ? 'Ver em modo organizador' : 'Ver como convidado',
            onTap: fromGuestMode ? () => context.go('/home') : () => showGuestModeSheet(context),
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
        SnappyTap(
          onTap: () => Navigator.of(context).push(MaterialPageRoute(builder: (_) => _EditEventPage(wedding: wedding))),
          child: Container(
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(
              borderRadius: BorderRadius.circular(AppRadius.xl),
              gradient: const LinearGradient(
                begin: Alignment(-0.6, -1),
                end: Alignment(0.6, 1),
                colors: [Color(0xFFDDE5D3), Color(0xFFF7EACA), Color(0xFFF3DEE0)],
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
                      child: Text(wedding.eventType.label, style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: Color(0xFF4A5D35))),
                    ),
                    const Spacer(),
                    const Text('Editar', style: TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: Color(0xFF4A5D35))),
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
  const GuestAccountSections({super.key});

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
            _Row(icon: Icons.celebration_outlined, label: 'Os teus eventos', onTap: () => context.push('/guest-events')),
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

class _GuestFacingPage extends StatelessWidget {
  final String weddingId;
  final String? code;
  const _GuestFacingPage({required this.weddingId, this.code});

  @override
  Widget build(BuildContext context) {
    return _SettingsPage(
      title: 'Para os convidados',
      children: [
        if (code?.isNotEmpty == true)
          Container(
            padding: const EdgeInsets.all(18),
            decoration: BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(AppRadius.lg)),
            child: Row(
              children: [
                Expanded(
                  child: Column(
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Text('CÓDIGO DO EVENTO', style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: Color(0xFFDDE5D3))),
                      Text(code!, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, letterSpacing: 2, color: Colors.white)),
                    ],
                  ),
                ),
                TextButton(
                  onPressed: () async {
                    try {
                      await SharePlus.instance.share(ShareParams(text: 'Entra no meu evento no Tchin Tchin com o código $code'));
                    } catch (_) {
                      await Clipboard.setData(ClipboardData(text: code!));
                    }
                  },
                  style: TextButton.styleFrom(
                    backgroundColor: Colors.white.withValues(alpha: 0.18),
                    foregroundColor: Colors.white,
                    textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontWeight: FontWeight.w700),
                  ),
                  child: const Text('Partilhar'),
                ),
              ],
            ),
          ),
        _GuestFacingSection(weddingId: weddingId),
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
                decoration: BoxDecoration(color: AppColors.green, borderRadius: BorderRadius.circular(16)),
                child: Text(initials, style: const TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: Color(0xFF4A5D35))),
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
                              child: Text(c, style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: Color(0xFF4A5D35))),
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
            _Row(icon: Icons.celebration_outlined, label: 'Os teus eventos', onTap: () => context.push('/guest-events')),
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

/// Seleção do ícone da navbar através do carrossel "cover flow"
/// partilhado ([CoverFlowPicker]) — `null` representa o botão "+" de
/// desbloquear mais bonecos. Movido de "Os noivos" para aqui.
class _NavIconPicker extends ConsumerWidget {
  const _NavIconPicker();

  static const _maxExtent = 92.0;

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final selected = ref.watch(weddingNavIconProvider);
    return CoverFlowPicker<WeddingNavIcon?>(
      options: [...WeddingNavIcon.values, null],
      selected: selected,
      itemExtent: _maxExtent,
      itemBuilder: (context, option, isSelected) => option == null
          ? const _MoreNavIconTile()
          : _NavIconOptionTile(option: option),
      onChanged: (option) {
        if (option == null) {
          ScaffoldMessenger.of(context).showSnackBar(
            const SnackBar(
              content: Text(
                'Em breve: ganha mais bonecos ou recebe-os como oferta.',
              ),
            ),
          );
          return;
        }
        ref.read(weddingNavIconProvider.notifier).select(option);
      },
    );
  }
}

class _NavIconOptionTile extends StatelessWidget {
  final WeddingNavIcon option;

  const _NavIconOptionTile({required this.option});

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(AppRadius.lg),
      child: Transform.scale(
        scale: option.zoom,
        child: Image.asset(
          option.assetPath,
          width: _NavIconPicker._maxExtent,
          height: _NavIconPicker._maxExtent,
          fit: BoxFit.cover,
        ),
      ),
    );
  }
}

class _MoreNavIconTile extends StatelessWidget {
  const _MoreNavIconTile();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: _NavIconPicker._maxExtent,
      height: _NavIconPicker._maxExtent,
      decoration: BoxDecoration(
        color: AppColors.muted,
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      child: const Icon(Icons.add, color: AppTheme.inkMuted, size: 28),
    );
  }
}


/// "Para os convidados" — hora da cerimónia, mensagem de boas-vindas e
/// presentes (lista/IBAN). Até aqui os convidados tinham estes campos no
/// ecrã deles mas o casal não tinha onde os preencher.
class _GuestFacingSection extends StatefulWidget {
  final String weddingId;

  const _GuestFacingSection({required this.weddingId});

  @override
  State<_GuestFacingSection> createState() => _GuestFacingSectionState();
}

class _GuestFacingSectionState extends State<_GuestFacingSection> {
  final _time = TextEditingController();
  final _welcome = TextEditingController();
  final _giftUrl = TextEditingController();
  final _iban = TextEditingController();
  final _giftMessage = TextEditingController();
  bool _loading = true;
  bool _saving = false;
  bool _giftsAvailable = true;
  String? _joinMode;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final info = await loadGuestFacingInfo(widget.weddingId);
      _time.text = info.ceremonyTime ?? '';
      _welcome.text = info.welcomeMessage ?? '';
      _giftUrl.text = info.giftListUrl ?? '';
      _iban.text = info.giftIban ?? '';
      _giftMessage.text = info.giftMessage ?? '';
      _giftsAvailable = info.giftsAvailable;
      _joinMode = info.joinMode;
    } catch (_) {
      // Fica com os campos vazios; guardar continua possível.
    }
    if (mounted) setState(() => _loading = false);
  }

  Future<void> _save() async {
    setState(() => _saving = true);
    String message = 'Guardado. Os convidados já veem as alterações.';
    try {
      await saveGuestFacingInfo(
        widget.weddingId,
        GuestFacingInfo(
          ceremonyTime: _time.text,
          welcomeMessage: _welcome.text,
          giftListUrl: _giftUrl.text,
          giftIban: _iban.text,
          giftMessage: _giftMessage.text,
          giftsAvailable: _giftsAvailable,
          joinMode: _joinMode,
        ),
      );
    } catch (_) {
      message = 'Não foi possível guardar. Tenta outra vez.';
    }
    if (!mounted) return;
    setState(() => _saving = false);
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(message)));
  }

  @override
  void dispose() {
    _time.dispose();
    _welcome.dispose();
    _giftUrl.dispose();
    _iban.dispose();
    _giftMessage.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    if (_loading) return const SizedBox(height: 40);
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (_joinMode != null) ...[
          const _SectionTitle('Quem pode entrar'),
          for (final (value, title, subtitle) in const [
            ('code_open', 'Qualquer pessoa com o código', 'Mais simples. Tu decides depois quem fica.'),
            ('code_with_match', 'Só quem está na lista', 'O email ou telemóvel tem de estar nos convidados.'),
            ('invite_only', 'Só com convite individual', 'Cada pessoa recebe o seu link.'),
          ])
            Padding(
              padding: const EdgeInsets.only(bottom: 8),
              child: _RadioCard(
                title: title,
                subtitle: subtitle,
                selected: _joinMode == value,
                onTap: () => setState(() => _joinMode = value),
              ),
            ),
        ],
        const _SectionTitle('Programa'),
        AuthTextField(label: 'Hora da cerimónia (ex: 16:00)', controller: _time),
        const SizedBox(height: 12),
        AuthTextField(label: 'Mensagem de boas-vindas', controller: _welcome),
        if (_giftsAvailable) ...[
          const _SectionTitle('Presentes'),
          AuthTextField(label: 'Link da lista de presentes', controller: _giftUrl),
          const SizedBox(height: 12),
          AuthTextField(label: 'IBAN para contribuições', controller: _iban),
          const SizedBox(height: 12),
          AuthTextField(label: 'Mensagem nos presentes', controller: _giftMessage),
        ],
        const SizedBox(height: 20),
        PrimaryButton(label: 'Guardar', loading: _saving, onPressed: _save),
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
    final result = await showDialog<String>(
      context: context,
      builder: (context) => AlertDialog(
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
      ],
    );
  }
}
