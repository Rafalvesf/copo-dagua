import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:share_plus/share_plus.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/guest_facing.dart';
import '../../../core/wedding/pastel_colors.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../core/wedding/wedding_venue.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/navigation_sheet.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../guest_home/screens/guest_mode_screen.dart' show showGuestModeSheet;
import '../../guest_home/screens/guest_wedding_details_screen.dart';

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
const _olive = Color(0xFF4A5D35);

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

  Future<void> _shareCode(String code) async {
    try {
      await SharePlus.instance.share(ShareParams(text: 'Entra no meu evento no Tchin Tchin com o código $code'));
    } catch (_) {
      await Clipboard.setData(ClipboardData(text: code));
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Código copiado.')));
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
    final code = widget.wedding.guestCode;
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            const PageHeader(title: 'Para os convidados', centered: true),
            Expanded(
              child: _loading
                  ? const Center(child: CircularProgressIndicator())
                  : ListView(
                      padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 40),
                      children: [
                        if (code?.isNotEmpty == true) _CodeCard(code: code!, onShare: () => _shareCode(code)),
                        const SizedBox(height: 12),
                        _PreviewButton(onTap: _preview),
                        if (_joinMode != null) ..._joinSection(),
                        const _Caps('Boas-vindas'),
                        _Field(
                          controller: _welcome,
                          hint: 'Ex: Mal podemos esperar por brindar convosco!',
                          maxLines: 3,
                        ),
                        _Caps('Programa', key: _programKey),
                        if (_info.programAvailable) ..._programSection() else _Field(controller: _time, label: 'Hora da cerimónia', hint: 'Ex: 16:00'),
                        if (_info.programAvailable) ...[
                          const _Caps('Local'),
                          ..._placeSection(),
                          const _Caps('Dress code'),
                          ..._dressSection(),
                        ],
                        if (_info.giftsAvailable) ...[
                          const _Caps('Presentes'),
                          _Field(controller: _giftUrl, label: 'Link da lista', hint: 'https://…', keyboardType: TextInputType.url),
                          const SizedBox(height: 10),
                          _Field(controller: _iban, label: 'IBAN para contribuições', hint: 'PT50 …'),
                          const SizedBox(height: 10),
                          _Field(controller: _giftMessage, label: 'Mensagem', hint: 'Ex: A vossa presença é o melhor presente.', maxLines: 2),
                        ],
                        const _Caps('Modo convidado'),
                        _PreviewButton(
                          onTap: () => showGuestModeSheet(context),
                          icon: Icons.key_outlined,
                          title: 'Entrar noutro evento',
                          subtitle: 'Foste convidado para outro evento? Usa o código.',
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

  List<Widget> _joinSection() {
    const options = [
      ('code_open', 'Qualquer pessoa com o código', 'Mais simples. Tu decides depois quem fica.'),
      ('code_with_match', 'Só quem está na lista', 'O email ou telemóvel tem de estar nos convidados.'),
      ('invite_only', 'Só com convite individual', 'Cada pessoa recebe o seu link.'),
    ];
    return [
      const _Caps('Quem pode entrar'),
      for (var i = 0; i < options.length; i++) ...[
        if (i > 0) const Divider(height: 1, thickness: 1, color: _line),
        _RadioLine(
          title: options[i].$2,
          subtitle: options[i].$3,
          selected: _joinMode == options[i].$1,
          onTap: () => setState(() {
            _joinMode = options[i].$1;
            _dirty = true;
          }),
        ),
      ],
    ];
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
              borderSide: const BorderSide(color: AppTheme.accentOliveDark, width: 1.5),
            ),
          ),
        ),
      ],
    );
  }
}

class _CodeCard extends StatelessWidget {
  final String code;
  final VoidCallback onShare;
  const _CodeCard({required this.code, required this.onShare});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: BoxDecoration(color: AppTheme.accentOliveDark, borderRadius: BorderRadius.circular(AppRadius.lg)),
      child: Row(
        children: [
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('CÓDIGO DO EVENTO', style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: Color(0xFFDDE5D3))),
                const SizedBox(height: 2),
                FittedBox(
                  fit: BoxFit.scaleDown,
                  alignment: Alignment.centerLeft,
                  child: Text(code, maxLines: 1, style: const TextStyle(fontSize: 28, fontWeight: FontWeight.w700, letterSpacing: 2, color: Colors.white)),
                ),
              ],
            ),
          ),
          IconButton(
            tooltip: 'Copiar',
            onPressed: () async {
              await Clipboard.setData(ClipboardData(text: code));
              if (context.mounted) {
                ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Código copiado.')));
              }
            },
            icon: const Icon(Icons.copy_rounded, color: Colors.white, size: 20),
          ),
          TextButton(
            onPressed: onShare,
            style: TextButton.styleFrom(
              backgroundColor: Colors.white.withValues(alpha: 0.18),
              foregroundColor: Colors.white,
              textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontWeight: FontWeight.w700),
            ),
            child: const Text('Partilhar'),
          ),
        ],
      ),
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

class _RadioLine extends StatelessWidget {
  final String title;
  final String subtitle;
  final bool selected;
  final VoidCallback onTap;

  const _RadioLine({required this.title, required this.subtitle, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Padding(
        padding: const EdgeInsets.symmetric(vertical: 12),
        child: Row(
          children: [
            Expanded(
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(title, style: TextStyle(fontSize: AppFontSize.base + 1, fontWeight: selected ? FontWeight.w700 : FontWeight.w400, color: AppTheme.ink)),
                  const SizedBox(height: 2),
                  Text(subtitle, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                ],
              ),
            ),
            const SizedBox(width: 12),
            AnimatedContainer(
              duration: const Duration(milliseconds: 160),
              width: 22,
              height: 22,
              decoration: BoxDecoration(
                shape: BoxShape.circle,
                border: Border.all(color: selected ? AppTheme.accentOliveDark : const Color(0xFFCFC8B8), width: 2),
              ),
              alignment: Alignment.center,
              child: selected
                  ? Container(width: 11, height: 11, decoration: const BoxDecoration(color: AppTheme.accentOliveDark, shape: BoxShape.circle))
                  : null,
            ),
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
