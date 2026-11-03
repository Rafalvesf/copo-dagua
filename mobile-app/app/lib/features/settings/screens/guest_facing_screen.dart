import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:share_plus/share_plus.dart';

import 'package:go_router/go_router.dart';

import '../../../core/events/event_pass.dart';
import '../../../core/events/events_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/guests/guest_controller.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/guest_facing.dart';
import '../../../core/wedding/pastel_colors.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../core/wedding/wedding_venue.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/guest_widgets.dart' show CompanionLimitRow;
import '../../../shared/widgets/navigation_sheet.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../guest_home/screens/guest_mode_screen.dart' show showGuestModeSheet;
import '../../guest_home/screens/guest_wedding_details_screen.dart';
import '../../../shared/widgets/island_sheet.dart';

/// "Para os convidados" — tudo o que os convidados veem, num só sítio:
/// código, quem pode entrar, boas-vindas, programa (linha do tempo),
/// local com morada automática quando foi escolhido na app, dress code
/// com cores pastel e presentes. Pedidos de 2026-10-17: "faz uma
/// melhorada na aba para os convidados", "a morada do local escolhido na
/// app entra automaticamente", "dress code com cores pastel".
/// Rota `/guest-page` — tile "Para os convidados" na página do evento
/// (pedido 2026-10-17: "deve ter um tile na home page dos organizadores,
/// não faz sentido estar no perfil").
class GuestPageRoute extends ConsumerWidget {
  const GuestPageRoute({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final wedding = ref.watch(weddingControllerProvider).wedding;
    if (wedding == null) {
      return const Scaffold(backgroundColor: Colors.white, body: Center(child: CircularProgressIndicator()));
    }
    return GuestFacingScreen(key: ValueKey(wedding.id), wedding: wedding);
  }
}

class GuestFacingScreen extends ConsumerStatefulWidget {
  final Wedding wedding;

  /// Abre já na secção do Programa.
  final bool focusProgram;

  const GuestFacingScreen({super.key, required this.wedding, this.focusProgram = false});

  @override
  ConsumerState<GuestFacingScreen> createState() => _GuestFacingScreenState();
}

const _line = Color(0xFFE6E0D2);
const _caps = Color(0xFF8F8B84);
const _olive = Color(0xFF3E5539);

class _GuestFacingScreenState extends ConsumerState<GuestFacingScreen> {
  final _welcome = TextEditingController();
  final _time = TextEditingController();
  final _address = TextEditingController();
  final _dressCode = TextEditingController();
  final _giftUrl = TextEditingController();
  final _iban = TextEditingController();
  final _giftMessage = TextEditingController();
  final List<_Moment> _moments = [];
  final _programKey = GlobalKey();

  GuestFacingInfo _info = const GuestFacingInfo();
  List<String> _colors = [];
  String? _joinMode;
  double? _lat;
  double? _lng;

  /// Morada atual veio do local escolhido na app (guarda as coordenadas).
  String? _venueAddressUsed;

  bool _loading = true;
  bool _saving = false;
  bool _dirty = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  void _markDirty() {
    if (!_dirty && mounted) setState(() => _dirty = true);
  }

  Future<void> _load() async {
    try {
      _info = await loadGuestFacingInfo(widget.wedding.id);
    } catch (_) {
      // Campos vazios; guardar continua possível.
    }
    _welcome.text = _info.welcomeMessage ?? '';
    _time.text = _info.ceremonyTime ?? '';
    _address.text = _info.venueAddress ?? '';
    _dressCode.text = _info.dressCode ?? '';
    _giftUrl.text = _info.giftListUrl ?? '';
    _iban.text = _info.giftIban ?? '';
    _giftMessage.text = _info.giftMessage ?? '';
    _colors = [..._info.themeColors];
    _joinMode = _info.joinMode;
    _lat = _info.venueLatitude;
    _lng = _info.venueLongitude;
    if (_lat != null) _venueAddressUsed = _address.text;
    for (final m in _info.program) {
      _moments.add(_Moment(m));
    }
    if (_moments.isEmpty && _info.programAvailable) {
      _moments.add(_Moment(ProgramItem(time: _info.ceremonyTime ?? '', title: 'Cerimónia', place: widget.wedding.venue ?? '')));
    }

    // Local escolhido na app: a morada entra sozinha se ainda não há.
    final venue = await ref.read(weddingVenueProvider(widget.wedding.id).future);
    if (venue?.address != null && _address.text.trim().isEmpty) {
      _useVenue(venue!, markDirty: true);
    }

    for (final c in [_welcome, _time, _address, _dressCode, _giftUrl, _iban, _giftMessage]) {
      c.addListener(_markDirty);
    }
    _address.addListener(() {
      // Morada mudada à mão: deixa de usar as coordenadas do local.
      if (_venueAddressUsed != null && _address.text != _venueAddressUsed) {
        _lat = null;
        _lng = null;
        _venueAddressUsed = null;
      }
    });
    if (!mounted) return;
    setState(() => _loading = false);
    if (widget.focusProgram) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        final ctx = _programKey.currentContext;
        if (ctx != null) Scrollable.ensureVisible(ctx, duration: const Duration(milliseconds: 300), alignment: 0.02);
      });
    }
  }

  void _useVenue(WeddingVenue venue, {bool markDirty = false}) {
    _address.text = venue.address ?? '';
    _venueAddressUsed = _address.text;
    _lat = venue.latitude;
    _lng = venue.longitude;
    if (markDirty) _dirty = true;
  }

  GuestFacingInfo _current() {
    final program = [for (final m in _moments) m.value];
    final firstTime = program.map((p) => p.time.trim()).firstWhere((t) => t.isNotEmpty, orElse: () => '');
    return GuestFacingInfo(
      ceremonyTime: _info.programAvailable ? firstTime : _time.text,
      welcomeMessage: _welcome.text,
      joinMode: _joinMode,
      giftListUrl: _giftUrl.text,
      giftIban: _iban.text,
      giftMessage: _giftMessage.text,
      giftsAvailable: _info.giftsAvailable,
      program: program,
      dressCode: _dressCode.text,
      venueAddress: _address.text,
      themeColors: _colors,
      venueLatitude: _lat,
      venueLongitude: _lng,
      programAvailable: _info.programAvailable,
      coordsAvailable: _info.coordsAvailable,
    );
  }

  Future<void> _save() async {
    setState(() => _saving = true);
    var message = 'Guardado. Os convidados já veem as alterações.';
    var ok = true;
    try {
      await saveGuestFacingInfo(widget.wedding.id, _current());
    } catch (_) {
      ok = false;
      message = 'Não foi possível guardar. Tenta outra vez.';
    }
    if (!mounted) return;
    setState(() {
      _saving = false;
      if (ok) _dirty = false;
    });
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(message)));
  }

  void _preview() {
    final w = widget.wedding;
    final info = _current();
    Navigator.of(context).push(
      MaterialPageRoute(
        builder: (_) => GuestWeddingDetailsScreen(
          preview: true,
          wedding: GuestWedding(
            weddingId: w.id,
            partnerName1: w.partnerName1,
            partnerName2: w.partnerName2,
            weddingDate: w.weddingDate,
            venue: w.venue,
            location: w.location,
            quote: w.quote,
            coverPhotoUrl: w.coverPhotoUrl,
            ceremonyTime: info.ceremonyTime,
            welcomeMessage: info.welcomeMessage?.trim().isEmpty == true ? null : info.welcomeMessage?.trim(),
            themeColors: info.themeColors,
            eventType: w.eventType,
            program: info.program.where((p) => !p.isEmpty).toList(),
            dressCode: info.dressCode?.trim().isEmpty == true ? null : info.dressCode?.trim(),
            venueAddress: info.venueAddress?.trim().isEmpty == true ? null : info.venueAddress?.trim(),
            venueLatitude: info.venueLatitude,
            venueLongitude: info.venueLongitude,
          ),
        ),
      ),
    );
  }

  Future<void> _shareLink(String link) async {
    try {
      final code = widget.wedding.guestCode;
      final codeLine = code?.isNotEmpty == true ? '\nOu entra na app com o código $code' : '';
      await SharePlus.instance.share(ShareParams(text: 'Estás convidado para ${widget.wedding.displayNames} na À Nossa!: $link$codeLine'));
    } catch (_) {
      await Clipboard.setData(ClipboardData(text: link));
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
    }
  }

  Future<void> _pickTime(_Moment m) async {
    final parts = m.time.text.split(':');
    final initial = TimeOfDay(
      hour: int.tryParse(parts.first) ?? 16,
      minute: parts.length > 1 ? int.tryParse(parts[1]) ?? 0 : 0,
    );
    final picked = await showTimePicker(
      context: context,
      initialTime: initial,
      helpText: 'Hora do momento',
      cancelText: 'Cancelar',
      confirmText: 'OK',
      builder: (context, child) => MediaQuery(
        data: MediaQuery.of(context).copyWith(alwaysUse24HourFormat: true),
        child: child!,
      ),
    );
    if (picked == null) return;
    String two(int v) => v.toString().padLeft(2, '0');
    setState(() {
      m.time.text = '${two(picked.hour)}:${two(picked.minute)}';
      _dirty = true;
    });
  }

  void _addMoment(String title) {
    setState(() {
      _moments.add(_Moment(ProgramItem(title: title)));
      _dirty = true;
    });
  }

  @override
  void dispose() {
    for (final c in [_welcome, _time, _address, _dressCode, _giftUrl, _iban, _giftMessage]) {
      c.dispose();
    }
    for (final m in _moments) {
      m.dispose();
    }
    super.dispose();
  }

  // ───────────────────────── UI

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            const PageHeader(title: 'Para os convidados', subtitle: 'O que os convidados veem do vosso evento.', centered: true),
            Expanded(
              child: _loading
                  ? const Center(child: CircularProgressIndicator())
                  : ListView(
                      padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 40),
                      children: [
                        // Convite só por link (pedido 2026-11-03): quem abre o link
                        // entra; num evento privado o organizador aceita na app.
                        if (widget.wedding.inviteUrl != null)
                          _InviteLinkCard(
                            link: widget.wedding.inviteUrl!,
                            code: widget.wedding.guestCode,
                            onShare: () => _shareLink(widget.wedding.inviteUrl!),
                          ),
                        const SizedBox(height: 12),
                        _PreviewButton(onTap: _preview),
                        const SizedBox(height: 18),
                        // Público/privado e pago/grátis também aqui (pedido 2026-11-03).
                        _AccessCard(wedding: widget.wedding),
                        // O que os convidados veem (migração 158).
                        const SizedBox(height: 18),
                        _GuestSectionsCard(weddingId: widget.wedding.id),
                        _CompanionsSection(weddingId: widget.wedding.id),
                        // Redesign 2026-10-20: cada parte num cartão com
                        // ícone, título e o que os convidados vão ver.
                        const SizedBox(height: 18),
                        _SectionCard(
                          icon: Icons.waving_hand_outlined,
                          title: 'Boas-vindas',
                          subtitle: 'Aparece no topo da página dos convidados.',
                          children: [
                            _Field(controller: _welcome, hint: 'Ex: Mal podemos esperar por brindar convosco!', maxLines: 3),
                          ],
                        ),
                        _SectionCard(
                          key: _programKey,
                          icon: Icons.schedule_rounded,
                          title: 'Programa',
                          subtitle: 'Os momentos do dia, por ordem.',
                          children: [
                            if (_info.programAvailable) ..._programSection() else _Field(controller: _time, label: 'Hora da cerimónia', hint: 'Ex: 16:00'),
                          ],
                        ),
                        if (_info.programAvailable) ...[
                          _SectionCard(
                            icon: Icons.place_outlined,
                            title: 'Local',
                            subtitle: 'Com o botão "Como chegar" para os convidados.',
                            children: _placeSection(),
                          ),
                          _SectionCard(
                            icon: Icons.checkroom_outlined,
                            title: 'Dress code',
                            subtitle: 'Indicação e paleta de cores sugerida.',
                            children: _dressSection(),
                          ),
                        ],
                        if (_info.giftsAvailable)
                          _SectionCard(
                            icon: Icons.card_giftcard_outlined,
                            title: 'Presentes',
                            subtitle: 'Lista de presentes e contribuições.',
                            children: [
                              _Field(controller: _giftUrl, label: 'Link da lista', hint: 'https://…', keyboardType: TextInputType.url),
                              const SizedBox(height: 10),
                              _Field(controller: _iban, label: 'IBAN para contribuições', hint: 'PT50 …'),
                              const SizedBox(height: 10),
                              _Field(controller: _giftMessage, label: 'Mensagem', hint: 'Ex: A vossa presença é o melhor presente.', maxLines: 2),
                              const SizedBox(height: 10),
                              // Envelope digital (migração 156).
                              _PreviewButton(
                                onTap: () => context.push('/envelopes'),
                                icon: Icons.mail_outline_rounded,
                                title: 'Envelopes recebidos',
                                subtitle: 'Quem ofereceu, quanto e a mensagem. O dinheiro vai direto para o IBAN.',
                              ),
                            ],
                          ),
                        _SectionCard(
                          icon: Icons.key_outlined,
                          title: 'Modo convidado',
                          subtitle: 'Foste convidado para outro evento? Usa o código.',
                          children: [
                            _PreviewButton(
                              onTap: () => showGuestModeSheet(context),
                              icon: Icons.login_rounded,
                              title: 'Entrar noutro evento',
                              subtitle: 'Abre o evento com o código que recebeste.',
                            ),
                          ],
                        ),
                      ],
                    ),
            ),
            if (!_loading) _SaveBar(saving: _saving, dirty: _dirty, onSave: _save),
          ],
        ),
      ),
    );
  }

  List<Widget> _programSection() {
    const suggestions = ['Cerimónia', 'Cocktail', 'Jantar', 'Primeira dança', 'Bolo', 'Festa'];
    final used = _moments.map((m) => m.title.text.trim().toLowerCase()).toSet();
    return [
      const Padding(
        padding: EdgeInsets.only(bottom: 10),
        child: Text(
          'Os momentos do dia, por ordem. Os convidados veem-nos como uma linha do tempo.',
          style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.4),
        ),
      ),
      for (var i = 0; i < _moments.length; i++)
        _MomentRow(
          key: ObjectKey(_moments[i]),
          moment: _moments[i],
          first: i == 0,
          last: i == _moments.length - 1,
          onPickTime: () => _pickTime(_moments[i]),
          onChanged: _markDirty,
          onUp: i == 0
              ? null
              : () => setState(() {
                    _moments.insert(i - 1, _moments.removeAt(i));
                    _dirty = true;
                  }),
          onDown: i == _moments.length - 1
              ? null
              : () => setState(() {
                    _moments.insert(i + 1, _moments.removeAt(i));
                    _dirty = true;
                  }),
          onRemove: () => setState(() {
            _moments.removeAt(i).dispose();
            _dirty = true;
          }),
        ),
      if (_moments.length < 30) ...[
        const SizedBox(height: 4),
        Wrap(
          spacing: 8,
          runSpacing: 8,
          children: [
            for (final s in suggestions)
              if (!used.contains(s.toLowerCase())) _SuggestChip(label: s, onTap: () => _addMoment(s)),
            _SuggestChip(label: 'Outro momento', icon: Icons.add, onTap: () => _addMoment('')),
          ],
        ),
      ],
    ];
  }

  List<Widget> _placeSection() {
    final venue = ref.watch(weddingVenueProvider(widget.wedding.id)).asData?.value;
    final usingVenue = venue != null && _venueAddressUsed != null && _address.text == (venue.address ?? '');
    final placeName = widget.wedding.venue?.isNotEmpty == true ? widget.wedding.venue! : (venue?.name ?? 'Local');
    return [
      if (venue != null)
        Container(
          margin: const EdgeInsets.only(bottom: 10),
          padding: const EdgeInsets.fromLTRB(14, 12, 12, 12),
          decoration: BoxDecoration(color: const Color(0xFFEEF2E9), borderRadius: BorderRadius.circular(AppRadius.lg)),
          child: Row(
            children: [
              const Icon(Icons.storefront_outlined, size: 20, color: _olive),
              const SizedBox(width: 10),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text('Escolhido na app · ${venue.name}', style: const TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: _olive)),
                    Text(
                      venue.address ?? 'Este parceiro ainda não indicou a morada.',
                      style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
                    ),
                  ],
                ),
              ),
              if (venue.address != null)
                usingVenue
                    ? const Padding(
                        padding: EdgeInsets.only(left: 6),
                        child: Icon(Icons.check_circle, size: 20, color: _olive),
                      )
                    : TextButton(
                        onPressed: () => setState(() => _useVenue(venue, markDirty: true)),
                        child: const Text('Usar'),
                      ),
            ],
          ),
        ),
      _Field(controller: _address, label: 'Morada', hint: 'Rua, número, localidade', keyboardType: TextInputType.streetAddress),
      const SizedBox(height: 8),
      Align(
        alignment: Alignment.centerLeft,
        child: TextButton.icon(
          onPressed: _address.text.trim().isEmpty && _lat == null
              ? null
              : () => showNavigationSheet(context, label: placeName, address: _address.text.trim(), latitude: _lat, longitude: _lng),
          icon: const Icon(Icons.near_me_outlined, size: 18),
          label: const Text('Experimentar o "Como chegar"'),
        ),
      ),
    ];
  }

  List<Widget> _dressSection() {
    return [
      _Field(controller: _dressCode, hint: 'Ex: Formal · evita branco'),
      const SizedBox(height: 14),
      Row(
        children: [
          const Text('Cores', style: TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(width: 8),
          Text(
            _colors.isEmpty ? 'Escolhe até $maxDressColors' : '${_colors.length} de $maxDressColors',
            style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
          ),
          const Spacer(),
          if (_colors.isNotEmpty)
            TextButton(
              onPressed: () => setState(() {
                _colors = [];
                _dirty = true;
              }),
              child: const Text('Limpar'),
            ),
        ],
      ),
      const SizedBox(height: 8),
      LayoutBuilder(
        builder: (context, c) {
          const perRow = 7;
          final size = ((c.maxWidth - (perRow - 1) * 8) / perRow).clamp(36.0, 48.0);
          return Wrap(
            spacing: 8,
            runSpacing: 12,
            children: [
              for (final p in pastelPalette)
                _Swatch(
                  color: p.color,
                  name: p.name,
                  size: size,
                  selected: _colors.any((h) => h.toUpperCase() == p.hex.toUpperCase()),
                  onTap: () => setState(() {
                    final i = _colors.indexWhere((h) => h.toUpperCase() == p.hex.toUpperCase());
                    if (i >= 0) {
                      _colors.removeAt(i);
                    } else if (_colors.length < maxDressColors) {
                      _colors.add(p.hex);
                    } else {
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Podes escolher até $maxDressColors cores.')),
                      );
                    }
                    _dirty = true;
                  }),
                ),
            ],
          );
        },
      ),
      if (_colors.isNotEmpty) ...[
        const SizedBox(height: 10),
        Text(
          _colors.map((h) => pastelName(h) ?? h).join(' · '),
          style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
        ),
      ],
    ];
  }
}

// ───────────────────────── peças

class _Moment {
  final TextEditingController time;
  final TextEditingController title;
  final TextEditingController place;

  _Moment(ProgramItem item)
      : time = TextEditingController(text: item.time),
        title = TextEditingController(text: item.title),
        place = TextEditingController(text: item.place);

  ProgramItem get value => ProgramItem(time: time.text, title: title.text, place: place.text);

  void dispose() {
    time.dispose();
    title.dispose();
    place.dispose();
  }
}

/// Cartão de secção: ícone, título, explicação e o conteúdo.
class _SectionCard extends StatelessWidget {
  final IconData icon;
  final String title;
  final String subtitle;
  final List<Widget> children;
  const _SectionCard({super.key, required this.icon, required this.title, required this.subtitle, required this.children});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 14),
      child: Container(
        padding: const EdgeInsets.fromLTRB(16, 16, 16, 16),
        decoration: softCard(radius: 24),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            Container(
              width: 40,
              height: 40,
              decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(13)),
              child: Icon(icon, size: 20, color: _olive),
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(title, style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(subtitle, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
              ]),
            ),
          ]),
          const SizedBox(height: 14),
          ...children,
        ]),
      ),
    );
  }
}

class _Caps extends StatelessWidget {
  final String text;
  const _Caps(this.text, {super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.fromLTRB(0, 26, 0, 10),
      child: Text(
        text.toUpperCase(),
        style: const TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: _caps),
      ),
    );
  }
}

/// Campo cinzento sem contorno, como nos onboardings.
class _Field extends StatelessWidget {
  final TextEditingController controller;
  final String? label;
  final String? hint;
  final int maxLines;
  final TextInputType? keyboardType;

  const _Field({required this.controller, this.label, this.hint, this.maxLines = 1, this.keyboardType});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (label != null)
          Padding(
            padding: const EdgeInsets.only(bottom: 6),
            child: Text(label!, style: const TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
        TextField(
          controller: controller,
          maxLines: maxLines,
          minLines: 1,
          keyboardType: maxLines > 1 ? TextInputType.multiline : keyboardType,
          style: const TextStyle(fontSize: AppFontSize.base + 1, color: AppTheme.ink, height: 1.4),
          decoration: InputDecoration(
            hintText: hint,
            hintStyle: const TextStyle(color: _caps),
            filled: true,
            fillColor: AppTheme.surface,
            isDense: true,
            contentPadding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
            border: OutlineInputBorder(borderRadius: BorderRadius.circular(AppRadius.lg), borderSide: BorderSide.none),
            enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(AppRadius.lg), borderSide: BorderSide.none),
            focusedBorder: OutlineInputBorder(
              borderRadius: BorderRadius.circular(AppRadius.lg),
              borderSide: BorderSide(color: AppTheme.accentOliveDark, width: 1.5),
            ),
          ),
        ),
      ],
    );
  }
}

/// Link de convite (o único convite do evento, 2026-11-03).
class _InviteLinkCard extends ConsumerWidget {
  final String link;
  final String? code;
  final VoidCallback onShare;
  const _InviteLinkCard({required this.link, required this.onShare, this.code});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(AppRadius.lg)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Text('LINK DE CONVITE',
            style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.accentTint)),
        const SizedBox(height: 6),
        // Regras primeiro (pedido 2026-11-03), depois o link.
        for (final rule in [
          (Icons.public_rounded, code?.isNotEmpty == true
              ? 'Evento público: quem abre o link (ou escreve o código na app) entra logo.'
              : 'Evento público: quem abre o link entra logo.'),
          (Icons.lock_outline_rounded, 'Evento privado: a pessoa pede para entrar e tu aceitas em Convidados → Pedidos para entrar.'),
          (Icons.confirmation_number_outlined, 'Evento pago: paga o bilhete e entra logo, mesmo sendo privado.'),
        ])
          Padding(
            padding: const EdgeInsets.only(top: 6),
            child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Padding(
                padding: const EdgeInsets.only(top: 1),
                child: Icon(rule.$1, size: 16, color: AppTheme.accentTint),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: Text(rule.$2, style: const TextStyle(fontSize: 13.5, height: 1.35, color: Colors.white)),
              ),
            ]),
          ),
        const SizedBox(height: 14),
        Container(height: 1, color: Colors.white.withValues(alpha: 0.18)),
        const SizedBox(height: 12),
        Text(link,
            maxLines: 1,
            overflow: TextOverflow.ellipsis,
            style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: Colors.white)),
        // Código do evento (pedido 2026-11-03): quem já o tem continua a
        // poder entrar com ele na app.
        if (code?.isNotEmpty == true) ...[
          const SizedBox(height: 12),
          Material(
            color: Colors.white.withValues(alpha: 0.12),
            borderRadius: BorderRadius.circular(AppRadius.md),
            child: InkWell(
              borderRadius: BorderRadius.circular(AppRadius.md),
              onTap: () async {
                await Clipboard.setData(ClipboardData(text: code!));
                if (context.mounted) {
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Código copiado.')));
                }
              },
              child: Padding(
                padding: const EdgeInsets.fromLTRB(14, 10, 12, 10),
                child: Row(children: [
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                      Text('CÓDIGO DO EVENTO',
                          style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.accentTint)),
                      const SizedBox(height: 2),
                      Text(code!,
                          style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w700, letterSpacing: 2, color: Colors.white)),
                    ]),
                  ),
                  const Icon(Icons.copy_rounded, size: 18, color: Colors.white, semanticLabel: 'Copiar código'),
                ]),
              ),
            ),
          ),
        ],
        const SizedBox(height: 12),
        Row(children: [
          Expanded(
            child: TextButton.icon(
              onPressed: () async {
                await Clipboard.setData(ClipboardData(text: link));
                if (context.mounted) {
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
                }
              },
              icon: const Icon(Icons.copy_rounded, size: 18),
              label: const Text('Copiar'),
              style: TextButton.styleFrom(
                backgroundColor: Colors.white.withValues(alpha: 0.18),
                foregroundColor: Colors.white,
                minimumSize: const Size.fromHeight(44),
                shape: const StadiumBorder(),
              ),
            ),
          ),
          const SizedBox(width: 10),
          Expanded(
            child: FilledButton.icon(
              onPressed: onShare,
              icon: const Icon(Icons.ios_share_rounded, size: 18),
              label: const Text('Partilhar'),
              style: FilledButton.styleFrom(
                backgroundColor: Colors.white,
                foregroundColor: AppTheme.accentOliveDark,
                minimumSize: const Size.fromHeight(44),
                shape: const StadiumBorder(),
              ),
            ),
          ),
        ]),
      ]),
    );
  }
}

class _PreviewButton extends StatelessWidget {
  final VoidCallback onTap;
  final IconData icon;
  final String title;
  final String subtitle;
  const _PreviewButton({
    required this.onTap,
    this.icon = Icons.visibility_outlined,
    this.title = 'Ver como os convidados',
    this.subtitle = 'Pré-visualiza o Programa antes de guardar',
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
        decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.lg)),
        child: Row(
          children: [
            Icon(icon, size: 20, color: AppTheme.inkMuted),
            const SizedBox(width: 12),
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(title, style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  Text(subtitle, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                ],
              ),
            ),
            const Icon(Icons.chevron_right, size: 18, color: Color(0xFFB5B0A6)),
          ],
        ),
      ),
    );
  }
}

/// Um momento do programa, com o ponto da linha do tempo à esquerda.
class _MomentRow extends StatelessWidget {
  final _Moment moment;
  final bool first;
  final bool last;
  final VoidCallback onPickTime;
  final VoidCallback onChanged;
  final VoidCallback? onUp;
  final VoidCallback? onDown;
  final VoidCallback onRemove;

  const _MomentRow({
    super.key,
    required this.moment,
    required this.first,
    required this.last,
    required this.onPickTime,
    required this.onChanged,
    required this.onUp,
    required this.onDown,
    required this.onRemove,
  });

  @override
  Widget build(BuildContext context) {
    InputDecoration plain(String hint) => InputDecoration(
          hintText: hint,
          hintStyle: const TextStyle(color: _caps),
          isDense: true,
          border: InputBorder.none,
          contentPadding: EdgeInsets.zero,
        );
    final time = moment.time.text.trim();
    return IntrinsicHeight(
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          SizedBox(
            width: 14,
            child: Column(
              children: [
                Container(
                  margin: const EdgeInsets.only(top: 18),
                  width: 12,
                  height: 12,
                  decoration: BoxDecoration(
                    shape: BoxShape.circle,
                    color: first ? AppTheme.accentOliveDark : Colors.white,
                    border: Border.all(color: AppTheme.accentOliveDark, width: 2),
                  ),
                ),
                if (!last) Expanded(child: Container(width: 2, color: _line)),
              ],
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Padding(
              padding: const EdgeInsets.only(bottom: 10),
              child: Container(
                padding: const EdgeInsets.fromLTRB(12, 10, 4, 10),
                decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.lg)),
                child: Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    SnappyTap(
                      onTap: onPickTime,
                      child: Container(
                        width: 62,
                        padding: const EdgeInsets.symmetric(vertical: 7),
                        alignment: Alignment.center,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(999),
                          border: Border.all(color: time.isEmpty ? _line : AppTheme.accentOliveDark),
                        ),
                        child: Text(
                          time.isEmpty ? '--:--' : time,
                          style: TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: time.isEmpty ? _caps : _olive),
                        ),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Expanded(
                      child: Column(
                        crossAxisAlignment: CrossAxisAlignment.stretch,
                        children: [
                          const SizedBox(height: 4),
                          TextField(
                            controller: moment.title,
                            onChanged: (_) => onChanged(),
                            textCapitalization: TextCapitalization.sentences,
                            style: const TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink),
                            decoration: plain('Momento'),
                          ),
                          const SizedBox(height: 4),
                          TextField(
                            controller: moment.place,
                            onChanged: (_) => onChanged(),
                            style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted),
                            decoration: plain('Local ou nota (opcional)'),
                          ),
                        ],
                      ),
                    ),
                    PopupMenuButton<String>(
                      tooltip: 'Opções',
                      icon: const Icon(Icons.more_horiz, size: 20, color: AppTheme.inkMuted),
                      onSelected: (v) => switch (v) {
                        'up' => onUp?.call(),
                        'down' => onDown?.call(),
                        _ => onRemove(),
                      },
                      itemBuilder: (_) => [
                        PopupMenuItem(value: 'up', enabled: onUp != null, child: const Text('Subir')),
                        PopupMenuItem(value: 'down', enabled: onDown != null, child: const Text('Descer')),
                        const PopupMenuItem(value: 'remove', child: Text('Remover', style: TextStyle(color: Color(0xFFB4232C)))),
                      ],
                    ),
                  ],
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _SuggestChip extends StatelessWidget {
  final String label;
  final IconData? icon;
  final VoidCallback onTap;
  const _SuggestChip({required this.label, this.icon, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 9),
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(999),
          border: Border.all(color: _line, width: 1.5),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon ?? Icons.add, size: 16, color: _olive),
            const SizedBox(width: 6),
            Text(label, style: const TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: _olive)),
          ],
        ),
      ),
    );
  }
}

class _Swatch extends StatelessWidget {
  final Color color;
  final String name;
  final double size;
  final bool selected;
  final VoidCallback onTap;

  const _Swatch({required this.color, required this.name, required this.size, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      selected: selected,
      label: name,
      child: Tooltip(
        message: name,
        child: SnappyTap(
          onTap: onTap,
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 160),
            width: size,
            height: size,
            padding: const EdgeInsets.all(3),
            decoration: BoxDecoration(
              shape: BoxShape.circle,
              border: Border.all(color: selected ? AppTheme.accentOliveDark : Colors.transparent, width: 2),
            ),
            child: Container(
              decoration: BoxDecoration(
                color: color,
                shape: BoxShape.circle,
                border: Border.all(color: const Color(0x14000000)),
              ),
              alignment: Alignment.center,
              child: selected ? const Icon(Icons.check, size: 18, color: _olive) : null,
            ),
          ),
        ),
      ),
    );
  }
}

class _SaveBar extends StatelessWidget {
  final bool saving;
  final bool dirty;
  final VoidCallback onSave;
  const _SaveBar({required this.saving, required this.dirty, required this.onSave});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: const BoxDecoration(
        color: Colors.white,
        border: Border(top: BorderSide(color: _line)),
      ),
      child: SafeArea(
        top: false,
        minimum: const EdgeInsets.only(bottom: 12),
        child: Padding(
          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 0),
          child: PrimaryButton(
            label: dirty ? 'Guardar alterações' : 'Guardado',
            loading: saving,
            onPressed: dirty ? onSave : null,
          ),
        ),
      ),
    );
  }
}


/// "Acompanhantes" — quantas pessoas cada convidado pode trazer
/// (091). O valor por omissão vale para quem entra pelo código; o botão
/// aplica-o a todos os convidados que já existem. Cada convidado também
/// pode ter o seu limite na ficha dele (Convidados). Guarda logo.
class _CompanionsSection extends ConsumerStatefulWidget {
  final String weddingId;
  const _CompanionsSection({required this.weddingId});

  @override
  ConsumerState<_CompanionsSection> createState() => _CompanionsSectionState();
}

class _CompanionsSectionState extends ConsumerState<_CompanionsSection> {
  int? _value;
  bool _available = true;
  bool _applying = false;

  @override
  void initState() {
    super.initState();
    _load();
  }

  Future<void> _load() async {
    try {
      final r = await supabase.from('weddings').select('default_max_companions').eq('id', widget.weddingId).single();
      if (mounted) setState(() => _value = (r['default_max_companions'] as int?) ?? 1);
    } catch (_) {
      if (mounted) setState(() => _available = false);
    }
  }

  Future<void> _set(int v) async {
    setState(() => _value = v);
    try {
      await supabase.from('weddings').update({'default_max_companions': v}).eq('id', widget.weddingId);
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar.')));
      }
    }
  }

  Future<void> _applyAll() async {
    final v = _value ?? 1;
    final ok = await showIslandDialog<bool>(
      context: context,
      builder: (d) => IslandAlert(
        title: const Text('Aplicar a todos?'),
        content: Text(v == 0
            ? 'Todos os convidados passam a poder vir só eles.'
            : 'Todos os convidados passam a poder trazer até $v ${v == 1 ? 'pessoa' : 'pessoas'}. Podes depois mudar um a um.'),
        actions: [
          TextButton(onPressed: () => Navigator.of(d).pop(false), child: const Text('Cancelar')),
          FilledButton(onPressed: () => Navigator.of(d).pop(true), child: const Text('Aplicar')),
        ],
      ),
    );
    if (ok != true) return;
    setState(() => _applying = true);
    var msg = 'Aplicado a todos os convidados.';
    try {
      await supabase.from('guests').update({'max_companions': v}).eq('wedding_id', widget.weddingId);
      await ref.read(guestsControllerProvider.notifier).load(widget.weddingId);
    } catch (_) {
      msg = 'Não foi possível aplicar. Tenta outra vez.';
    }
    if (!mounted) return;
    setState(() => _applying = false);
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
  }

  @override
  Widget build(BuildContext context) {
    if (!_available) return const SizedBox.shrink();
    final v = _value;
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        const _Caps('Acompanhantes'),
        if (v == null)
          const SizedBox(height: 60, child: Center(child: CircularProgressIndicator()))
        else ...[
          CompanionLimitRow(
            title: 'Cada convidado pode trazer',
            subtitle: v == 0 ? 'Ninguém traz acompanhantes' : (v == 1 ? 'Até 1 pessoa' : 'Até $v pessoas'),
            value: v,
            onChanged: _set,
          ),
          const SizedBox(height: 6),
          const Text(
            'Vale para quem entra com o código. Na ficha de cada convidado podes dar mais ou menos lugares.',
            style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.4),
          ),
          Align(
            alignment: Alignment.centerLeft,
            child: TextButton(
              onPressed: _applying ? null : _applyAll,
              child: Text(_applying ? 'A aplicar…' : 'Aplicar a todos os convidados'),
            ),
          ),
        ],
      ],
    );
  }
}

/// "Acesso e entrada": evento público ou privado, grátis ou pago (com
/// preço). Guarda logo ao mudar — o mesmo que em Definições → Organização.
class _AccessCard extends ConsumerStatefulWidget {
  final Wedding wedding;
  const _AccessCard({required this.wedding});

  @override
  ConsumerState<_AccessCard> createState() => _AccessCardState();
}

class _AccessCardState extends ConsumerState<_AccessCard> {
  final _price = TextEditingController();
  bool _priceLoaded = false;
  bool _savingPrice = false;
  bool? _paidLocal;

  @override
  void dispose() {
    _price.dispose();
    super.dispose();
  }

  String get _id => widget.wedding.id;

  double? get _priceValue =>
      double.tryParse(_price.text.trim().replaceAll(' ', '').replaceAll('€', '').replaceAll(',', '.'));

  void _toast(String text) => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(text)));

  Future<void> _setPublic(bool v) async {
    try {
      await setEventPublic(_id, v);
      ref.invalidate(eventIsPublicProvider(_id));
      ref.invalidate(publicEventsProvider);
      _toast(v ? 'O evento está aberto a todos em Eventos.' : 'O evento é só para convidados.');
    } catch (_) {
      _toast('Não foi possível alterar. Tenta outra vez.');
    }
  }

  Future<void> _setPaid(bool paid) async {
    if (paid) {
      // Fica "Pago" quando houver preço.
      setState(() => _paidLocal = true);
      final v = _priceValue;
      if (v != null && v > 0) await _savePrice();
      return;
    }
    setState(() => _paidLocal = false);
    try {
      await setEventEntry(_id, paid: false);
      ref.invalidate(eventEntryProvider(_id));
      ref.invalidate(publicEventsProvider);
      _toast('Entrada grátis.');
    } catch (_) {
      _toast('Não foi possível guardar. Tenta outra vez.');
    }
  }

  Future<void> _savePrice() async {
    final v = _priceValue;
    if (v == null || v <= 0 || v > 100000) {
      _toast('Escreve um preço válido (ex.: 15).');
      return;
    }
    setState(() => _savingPrice = true);
    try {
      await setEventEntry(_id, paid: true, price: v);
      ref.invalidate(eventEntryProvider(_id));
      ref.invalidate(publicEventsProvider);
      FocusScope.of(context).unfocus();
      _toast('Entrada paga: ${_fmt(v)} € por pessoa.');
    } catch (_) {
      _toast('Não foi possível guardar. Tenta outra vez.');
    } finally {
      if (mounted) setState(() => _savingPrice = false);
    }
  }

  static String _fmt(double v) => v == v.roundToDouble() ? v.toStringAsFixed(0) : v.toStringAsFixed(2).replaceAll('.', ',');

  Widget _choice({required String label, required String hint, required bool selected, required VoidCallback onTap}) {
    final green = AppTheme.accentOliveDark;
    return Expanded(
      child: SnappyTap(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 160),
          padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 10),
          decoration: BoxDecoration(
            color: selected ? AppTheme.accentTint : const Color(0xFFF7F6F2),
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: selected ? green : const Color(0xFFE8E6DC), width: selected ? 1.5 : 1),
          ),
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Row(children: [
              Expanded(
                child: Text(label,
                    style: TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w800, color: selected ? green : AppTheme.ink)),
              ),
              if (selected) Icon(Icons.check_circle_rounded, size: 18, color: green),
            ]),
            const SizedBox(height: 2),
            Text(hint, style: const TextStyle(fontSize: AppFontSize.sm, height: 1.3, color: AppTheme.inkMuted)),
          ]),
        ),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final canBePublic = widget.wedding.eventType.canBePublic;
    final isPublic = ref.watch(eventIsPublicProvider(_id)).value ?? false;
    final entryAsync = ref.watch(eventEntryProvider(_id));
    final entry = entryAsync.value ?? (paid: false, price: null);
    if (!_priceLoaded && entryAsync.hasValue) {
      _priceLoaded = true;
      if (entry.price != null) _price.text = _fmt(entry.price!);
    }
    final paid = _paidLocal ?? entry.paid;

    return _SectionCard(
      icon: Icons.tune_rounded,
      title: 'Acesso e entrada',
      subtitle: 'Quem pode ver o evento e se a entrada é paga.',
      children: [
        const _Label('Quem vê o evento'),
        if (canBePublic)
          Row(children: [
            _choice(
              label: 'Privado',
              hint: 'Só convidados, com código ou convite.',
              selected: !isPublic,
              onTap: () => isPublic ? _setPublic(false) : null,
            ),
            const SizedBox(width: 10),
            _choice(
              label: 'Público',
              hint: 'Aparece a todos em Eventos.',
              selected: isPublic,
              onTap: () => isPublic ? null : _setPublic(true),
            ),
          ])
        else
          const Text(
            'Privado — só convidados. Casamentos, batizados e aniversários não podem ser públicos.',
            style: TextStyle(fontSize: AppFontSize.sm, height: 1.4, color: AppTheme.inkMuted),
          ),
        const SizedBox(height: 16),
        const _Label('Entrada'),
        Row(children: [
          _choice(
            label: 'Grátis',
            hint: 'Sem pagamento para entrar.',
            selected: !paid,
            onTap: () => paid ? _setPaid(false) : null,
          ),
          const SizedBox(width: 10),
          _choice(
            label: 'Pago',
            hint: 'Bilhete pago na app.',
            selected: paid,
            onTap: () => paid ? null : _setPaid(true),
          ),
        ]),
        if (paid) ...[
          const SizedBox(height: 12),
          Row(children: [
            Expanded(
              child: TextField(
                controller: _price,
                keyboardType: const TextInputType.numberWithOptions(decimal: true),
                textInputAction: TextInputAction.done,
                onSubmitted: (_) => _savePrice(),
                decoration: const InputDecoration(labelText: 'Preço por pessoa', suffixText: '€', isDense: true),
              ),
            ),
            const SizedBox(width: 10),
            FilledButton(
              onPressed: _savingPrice ? null : _savePrice,
              style: FilledButton.styleFrom(backgroundColor: AppTheme.accentOliveDark, shape: const StadiumBorder()),
              child: _savingPrice
                  ? const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                  : const Text('Guardar'),
            ),
          ]),
          if (entry.paid) ...[
            const SizedBox(height: 8),
            Align(
              alignment: Alignment.centerLeft,
              child: TextButton.icon(
                onPressed: () => context.push('/bilhetes'),
                icon: const Icon(Icons.account_balance_wallet_outlined, size: 18),
                label: const Text('Bilhetes e pagamentos'),
              ),
            ),
          ],
          if (!isPublic)
            const Padding(
              padding: EdgeInsets.only(top: 4),
              child: Text(
                'Privado e pago: quem tem o código ou o link de convite paga o bilhete na app e entra logo.',
                style: TextStyle(fontSize: AppFontSize.sm, height: 1.4, color: AppTheme.inkMuted),
              ),
            ),
        ],
      ],
    );
  }
}

class _Label extends StatelessWidget {
  final String text;
  const _Label(this.text);

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(bottom: 8),
        child: Text(text.toUpperCase(),
            style: const TextStyle(fontSize: 11, fontWeight: FontWeight.w700, letterSpacing: 1, color: AppTheme.inkMuted)),
      );
}


/// O que os convidados veem (migração 158): o organizador liga e desliga
/// cada parte. Tudo desligado = só o bilhete (num evento pago).
class _GuestSectionsCard extends ConsumerStatefulWidget {
  final String weddingId;
  const _GuestSectionsCard({required this.weddingId});

  @override
  ConsumerState<_GuestSectionsCard> createState() => _GuestSectionsCardState();
}

class _GuestSectionsCardState extends ConsumerState<_GuestSectionsCard> {
  GuestSections? _local;
  bool _saving = false;

  Future<void> _set(GuestSections next) async {
    final before = _local;
    setState(() {
      _local = next;
      _saving = true;
    });
    try {
      await saveGuestSections(widget.weddingId, next);
      ref.invalidate(guestSectionsProvider(widget.weddingId));
    } catch (_) {
      if (!mounted) return;
      setState(() => _local = before);
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final async = ref.watch(guestSectionsProvider(widget.weddingId));
    final loaded = async.value;
    if (async.isLoading && _local == null) return const SizedBox.shrink();
    // Antes da migração 158 não há onde guardar: não mostra o cartão.
    if (loaded == null && _local == null) return const SizedBox.shrink();
    final sections = _local ?? loaded!;
    final green = AppTheme.accentOliveDark;
    return Container(
      padding: const EdgeInsets.fromLTRB(16, 14, 16, 8),
      decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.lg)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          Icon(Icons.tune_rounded, size: 20, color: green),
          const SizedBox(width: 8),
          const Expanded(
            child: Text('O que os convidados veem',
                style: TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          if (_saving) const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2)),
        ]),
        const SizedBox(height: 4),
        const Text(
          'Escolhe o que aparece na página do evento. Quem pagou bilhete vê sempre o bilhete com o código QR.',
          style: TextStyle(fontSize: 12.5, height: 1.4, color: AppTheme.inkMuted),
        ),
        const SizedBox(height: 10),
        Wrap(spacing: 8, runSpacing: 8, children: [
          ChoiceChip(
            label: const Text('Tudo'),
            selected: GuestSection.values.every(sections.shows),
            showCheckmark: false,
            onSelected: _saving ? null : (_) => _set(sections.all(true)),
          ),
          ChoiceChip(
            label: const Text('Só o bilhete'),
            selected: sections.onlyTicket,
            showCheckmark: false,
            onSelected: _saving ? null : (_) => _set(sections.all(false)),
          ),
        ]),
        const SizedBox(height: 4),
        for (final sec in GuestSection.values)
          SwitchListTile.adaptive(
            contentPadding: EdgeInsets.zero,
            secondary: Icon(sec.icon, color: sections.shows(sec) ? green : AppTheme.inkMuted),
            title: Text(sec.label, style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
            subtitle: Text(sec.description, style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
            value: sections.shows(sec),
            onChanged: _saving ? null : (v) => _set(sections.withSection(sec, v)),
          ),
      ]),
    );
  }
}
