import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:copo_dagua_app/shared/utils_clipboard.dart';
import 'package:flutter/foundation.dart' show kIsWeb;
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
const _dressStyles = ['Formal', 'Cocktail', 'Casual chique', 'Black tie', 'Tema'];
const _caps = Color(0xFF6E6A63);
const _olive = Color(0xFF3E5539);

class _GuestFacingScreenState extends ConsumerState<GuestFacingScreen> {
  final _welcome = TextEditingController();
  final _time = TextEditingController();
  final _address = TextEditingController();
  final _dressCode = TextEditingController();
  final _giftUrl = TextEditingController();
  final _iban = TextEditingController();
  final _giftMessage = TextEditingController();
  final _venueName = TextEditingController();
  final _dressNote = TextEditingController();
  String? _dressStyle;
  bool _ibanOn = false;
  bool _giftUrlOn = false;
  final List<_Moment> _moments = [];

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

  /// Faz as folhas de edição (que vivem noutra rota) redesenharem quando
  /// este ecrã muda (2026-11-08: cada parte edita-se numa folha).
  final _tick = ValueNotifier<int>(0);

  @override
  void setState(VoidCallback fn) {
    super.setState(fn);
    _tick.value++;
  }

  /// Abre a folha de uma parte; ao fechar guarda sozinho se houve mudanças.
  Future<void> _openPart(String title, List<Widget> Function() body) async {
    await showIslandSheet<void>(
      context: context,
      isScrollControlled: true,
      builder: (sheet) => ValueListenableBuilder<int>(
        valueListenable: _tick,
        builder: (context, _, _) => SingleChildScrollView(
          padding: EdgeInsets.fromLTRB(20, 16, 20, 20 + MediaQuery.of(context).viewInsets.bottom),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Text(title, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 14),
            ...body(),
            const SizedBox(height: 18),
            // Só "Feito" (2026-11-08: sem "Ver como convidado" nas partes).
            FilledButton(
              onPressed: () => Navigator.of(sheet).pop(),
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                minimumSize: const Size.fromHeight(50),
                shape: const StadiumBorder(),
              ),
              child: const Text('Feito', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15)),
            ),
          ]),
        ),
      ),
    );
    if (mounted && _dirty) await _save();
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
    _venueName.text = widget.wedding.venue ?? '';
    // Dress code "Estilo · nota" (2026-11-08, como no mockup).
    final dc = _dressCode.text.trim();
    final style = _dressStyles.where((st) => dc == st || dc.startsWith('$st · ')).firstOrNull;
    _dressStyle = style;
    _dressNote.text = style == null ? dc : dc.substring(style.length).replaceFirst(RegExp(r'^\s*·\s*'), '');
    _ibanOn = _iban.text.trim().isNotEmpty;
    _giftUrlOn = _giftUrl.text.trim().isNotEmpty;
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

    for (final c in [_welcome, _time, _address, _dressCode, _giftUrl, _iban, _giftMessage, _venueName, _dressNote]) {
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
        if (mounted) _openProgram();
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
      giftListUrl: _giftUrlOn ? _giftUrl.text : '',
      giftIban: _ibanOn ? _iban.text : '',
      giftMessage: _giftMessage.text,
      giftsAvailable: _info.giftsAvailable,
      program: program,
      dressCode: [?_dressStyle, if (_dressNote.text.trim().isNotEmpty) _dressNote.text.trim()].join(' · '),
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
    var message = 'Guardado.';
    var ok = true;
    try {
      await saveGuestFacingInfo(widget.wedding.id, _current());
      // Nome do local (weddings.venue), editado na folha Local.
      final w = ref.read(weddingControllerProvider).wedding;
      final name = _venueName.text.trim();
      if (w != null && name != (w.venue ?? '')) {
        await ref.read(weddingControllerProvider.notifier).update(w.copyWith(venue: name.isEmpty ? null : name));
      }
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
      await copyText(link);
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
    _tick.dispose();
    for (final c in [_welcome, _time, _address, _dressCode, _giftUrl, _iban, _giftMessage, _venueName, _dressNote]) {
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
        // A página inteira desliza, cabeçalho incluído, como no Orçamento
        // (pedido 2026-11-08).
        child: Column(
          children: [
            Expanded(
              child: _loading
                  ? const Column(children: [
                      PageHeader(title: 'Para os convidados', titleFontSize: 24),
                      Expanded(child: Center(child: CircularProgressIndicator())),
                    ])
                  : ListView(
                      padding: const EdgeInsets.fromLTRB(0, 0, 0, 40),
                      // Redesign 2026-11-08 (canvas "Para os convidados"):
                      // código, acompanhantes, acesso e uma só lista com
                      // cada parte da página; cada parte numa folha.
                      children: [
                        const PageHeader(title: 'Para os convidados', titleFontSize: 24),
                        Padding(
                          padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 0),
                          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                        _CodeHero(
                          wedding: widget.wedding,
                          onShare: widget.wedding.inviteUrl == null ? null : () => _shareLink(widget.wedding.inviteUrl!),
                          onPreview: _preview,
                        ),
                        const SizedBox(height: 14),
                        _CompanionsSection(weddingId: widget.wedding.id),
                        const SizedBox(height: 14),
                        _AccessCard(wedding: widget.wedding),
                        const SizedBox(height: 8),
                        _PartsList(weddingId: widget.wedding.id, parts: _parts()),
                          ]),
                        ),
                      ],
                    ),
            ),
          ],
        ),
      ),
    );
  }

  void _openProgram() => _openPart('Programa', () => [
        if (_info.programAvailable) ..._programSection() else _Field(controller: _time, label: 'Hora da cerimónia', hint: 'Ex: 16:00'),
      ]);

  /// As partes da página, pela ordem do mockup.
  List<_Part> _parts() {
    String? t(String v) => v.trim().isEmpty ? null : v.trim();
    final welcome = t(_welcome.text);
    final moments = _moments.where((m) => m.title.text.trim().isNotEmpty || m.time.text.trim().isNotEmpty).toList();
    final firstTime = moments.map((m) => m.time.text.trim()).firstWhere((x) => x.isNotEmpty, orElse: () => '');
    final address = t(_address.text);
    final dress = t([?_dressStyle, if (_dressNote.text.trim().isNotEmpty) _dressNote.text.trim()].join(' · '));
    final iban = _ibanOn ? t(_iban.text) : null;
    final giftUrl = _giftUrlOn ? t(_giftUrl.text) : null;
    return [
      _Part(
        icon: Hi.handRaised,
        title: 'Boas-vindas',
        status: welcome == null ? 'Falta escrever' : '"${welcome.length > 40 ? '${welcome.substring(0, 40)}…' : welcome}"',
        missing: welcome == null,
        onOpen: () => _openPart('Boas-vindas', () => [
              const Text('Aparece no topo da página dos convidados.',
                  style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
              const SizedBox(height: 10),
              _Field(controller: _welcome, hint: 'Ex: Mal podemos esperar por brindar convosco!', maxLines: 4),
              const SizedBox(height: 10),
              Wrap(spacing: 8, runSpacing: 8, children: [
                for (final sug in const ['Contamos convosco!', 'Vamos celebrar juntos!', 'Obrigado por fazerem parte do nosso dia.'])
                  _SuggestChip(label: sug, onTap: () => setState(() => _welcome.text = sug)),
              ]),
              const SizedBox(height: 8),
              Text('Assinado: ${widget.wedding.displayNames}', style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
            ]),
      ),
      _Part(
        icon: Hi.clock,
        title: 'Programa',
        section: GuestSection.programa,
        status: _info.programAvailable
            ? (moments.isEmpty
                ? 'Falta juntar os momentos'
                : '${moments.length} ${moments.length == 1 ? 'momento' : 'momentos'}${firstTime.isEmpty ? '' : ' · começa às $firstTime'}')
            : (t(_time.text) == null ? 'Falta a hora' : 'Às ${_time.text.trim()}'),
        missing: _info.programAvailable ? moments.isEmpty : t(_time.text) == null,
        onOpen: _openProgram,
      ),
      if (_info.programAvailable) ...[
        _Part(
          icon: Hi.mapPin,
          title: 'Local',
          status: address ?? 'Falta a morada',
          missing: address == null && _lat == null,
          onOpen: () => _openPart('Local', _placeSection),
        ),
        _Part(
          icon: Hi.shoppingBag,
          title: 'Dress code',
          status: dress ?? (_colors.isEmpty ? 'Falta escrever' : '${_colors.length} ${_colors.length == 1 ? 'cor' : 'cores'}'),
          missing: dress == null && _colors.isEmpty,
          onOpen: () => _openPart('Dress code', _dressSection),
        ),
      ],
      if (_info.giftsAvailable)
        _Part(
          icon: Hi.gift,
          title: 'Presentes',
          section: GuestSection.presentes,
          status: [if (iban != null) 'IBAN para envelopes', if (giftUrl != null) 'lista noutra loja'].join(' · ').isEmpty
              ? 'Lista na app'
              : ['Lista na app', if (iban != null) 'IBAN para envelopes', if (giftUrl != null) 'lista noutra loja'].join(' · '),
          onOpen: () => _openPart('Presentes', () => [
                _PreviewButton(
                  onTap: () => context.push('/gift-list'),
                  icon: Hi.clipboardDocumentList,
                  title: 'Lista na app',
                  subtitle: 'Desejos e produtos das lojas parceiras · Gerir',
                ),
                const SizedBox(height: 6),
                SwitchListTile.adaptive(
                  contentPadding: EdgeInsets.zero,
                  activeTrackColor: AppTheme.accentOliveDark,
                  title: const Text('Envelope digital (IBAN)', style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  subtitle: const Text('Os convidados transferem para a vossa conta', style: TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
                  value: _ibanOn,
                  onChanged: (v) => setState(() {
                    _ibanOn = v;
                    _dirty = true;
                  }),
                ),
                if (_ibanOn) ...[
                  _Field(controller: _iban, label: 'IBAN para contribuições', hint: 'PT50 …'),
                  const SizedBox(height: 10),
                  _Field(controller: _giftMessage, label: 'Mensagem', hint: 'Ex: A vossa presença é o melhor presente.', maxLines: 2),
                  const SizedBox(height: 6),
                ],
                SwitchListTile.adaptive(
                  contentPadding: EdgeInsets.zero,
                  activeTrackColor: AppTheme.accentOliveDark,
                  title: const Text('Lista noutra loja', style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  subtitle: const Text('Um link para uma lista fora da app', style: TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
                  value: _giftUrlOn,
                  onChanged: (v) => setState(() {
                    _giftUrlOn = v;
                    _dirty = true;
                  }),
                ),
                if (_giftUrlOn) _Field(controller: _giftUrl, label: 'Link da lista', hint: 'https://…', keyboardType: TextInputType.url),
                const SizedBox(height: 12),
                // Envelope digital (migração 156).
                _PreviewButton(
                  onTap: () => context.push('/envelopes'),
                  icon: Hi.envelope,
                  title: 'Envelopes recebidos',
                  subtitle: 'Quem ofereceu, quanto e a mensagem.',
                ),
              ]),
        ),
      _Part(
        icon: Hi.tableCells,
        title: 'A tua mesa',
        section: GuestSection.mesa,
        status: 'Cada convidado vê a sua mesa',
        onOpen: () => _openPart('A tua mesa', () => [
              _PreviewButton(
                onTap: () => context.push('/seating'),
                icon: Hi.ticket,
                title: 'Mesas e lugares',
                subtitle: 'Sentar quem ainda não tem lugar',
              ),
              const SizedBox(height: 16),
              _OptSegment(
                weddingId: widget.wedding.id,
                optKey: 'opt_table_reveal',
                fallback: 'now',
                title: 'Quando aparece aos convidados',
                options: const [('now', 'Já'), ('week', '1 semana antes'), ('day', 'No dia')],
              ),
              const SizedBox(height: 8),
              _OptSwitch(
                weddingId: widget.wedding.id,
                optKey: 'opt_table_mates',
                fallback: true,
                title: 'Mostrar quem está na mesa',
                subtitle: 'Os nomes de quem fica ao lado',
              ),
            ]),
      ),
      _Part(
        icon: Hi.rectangleStack,
        title: 'Galeria',
        section: GuestSection.galeria,
        status: 'Fotos do evento, partilhadas por todos',
        onOpen: () => _openPart('Galeria', () => [
              _OptSwitch(
                weddingId: widget.wedding.id,
                optKey: 'opt_gallery_upload',
                fallback: true,
                title: 'Convidados publicam fotos',
                subtitle: 'Senão só vocês publicam',
              ),
              _OptSwitch(
                weddingId: widget.wedding.id,
                optKey: 'opt_gallery_on_day',
                fallback: false,
                title: 'Abrir só no dia',
                subtitle: 'Antes disso os convidados veem "Abre no dia"',
              ),
              const SizedBox(height: 10),
              _PreviewButton(
                onTap: () => context.push('/gallery'),
                icon: Hi.rectangleStack,
                title: 'Ver a galeria',
                subtitle: 'As fotos já partilhadas',
              ),
            ]),
      ),
      _Part(
        icon: Hi.userGroup,
        title: 'Grupos',
        section: GuestSection.grupos,
        status: 'Conversa entre os convidados',
        onOpen: () => _openPart('Grupos', () => [
              _OptSwitch(
                weddingId: widget.wedding.id,
                optKey: 'opt_groups_create',
                fallback: true,
                title: 'Convidados criam grupos',
                subtitle: 'Ex.: boleia, despedida. Senão só vocês criam.',
              ),
            ]),
      ),
      // Ainda não disponível (pedido 2026-11-08: "bloqueia").
      const _Part(icon: Hi.homeModern, title: 'Dormir e transporte', status: 'Ainda não disponível', locked: true),
    ];
  }

  List<Widget> _programSection() {
    const suggestions = ['Cerimónia', 'Cocktail', 'Jantar', 'Primeira dança', 'Bolo', 'Festa'];
    final used = _moments.map((m) => m.title.text.trim().toLowerCase()).toSet();
    return [
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
            _SuggestChip(label: 'Outro momento', icon: Hi.plus, onTap: () => _addMoment('')),
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
              const Icon(Hi.buildingStorefront, size: 20, color: _olive),
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
                        child: Icon(Hi.checkCircle, size: 20, color: _olive),
                      )
                    : TextButton(
                        onPressed: () => setState(() => _useVenue(venue, markDirty: true)),
                        child: const Text('Usar'),
                      ),
            ],
          ),
        ),
      _Field(controller: _venueName, label: 'Nome do local', hint: 'Ex: Quinta do Lago Azul'),
      const SizedBox(height: 10),
      _Field(controller: _address, label: 'Morada', hint: 'Rua, número, localidade', keyboardType: TextInputType.streetAddress),
      const SizedBox(height: 8),
      Align(
        alignment: Alignment.centerLeft,
        child: TextButton.icon(
          onPressed: _address.text.trim().isEmpty && _lat == null
              ? null
              : () => showNavigationSheet(context, label: placeName, address: _address.text.trim(), latitude: _lat, longitude: _lng),
          icon: const Icon(Hi.paperAirplane, size: 18),
          label: const Text('Experimentar o "Como chegar"'),
        ),
      ),
    ];
  }

  List<Widget> _dressSection() {
    return [
      const Text('Estilo', style: TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      const SizedBox(height: 8),
      Wrap(spacing: 8, runSpacing: 8, children: [
        for (final st in _dressStyles)
          ChoiceChip(
            label: Text(st),
            selected: _dressStyle == st,
            showCheckmark: false,
            selectedColor: AppTheme.accentOliveDark,
            labelStyle: TextStyle(
              fontFamily: AppTheme.fontFamily,
              fontWeight: FontWeight.w700,
              color: _dressStyle == st ? Colors.white : AppTheme.ink,
            ),
            onSelected: (on) => setState(() {
              _dressStyle = on ? st : null;
              _dirty = true;
            }),
          ),
      ]),
      const SizedBox(height: 14),
      _Field(controller: _dressNote, label: 'Nota para os convidados', hint: 'Ex: Evita branco · sapatos rasos para o jardim'),
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
          (Hi.globeEuropeAfrica, code?.isNotEmpty == true
              ? 'Evento público: quem abre o link (ou escreve o código na app) entra logo.'
              : 'Evento público: quem abre o link entra logo.'),
          (Hi.lockClosed, 'Evento privado: a pessoa pede para entrar e tu aceitas em Convidados › Pedidos para entrar.'),
          (Hi.ticket, 'Evento pago: paga o bilhete e entra logo, mesmo sendo privado.'),
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
                await copyText(code!);
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
                  const Icon(Hi.documentDuplicate, size: 18, color: Colors.white, semanticLabel: 'Copiar código'),
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
                await copyText(link);
                if (context.mounted) {
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Link copiado.')));
                }
              },
              icon: const Icon(Hi.documentDuplicate, size: 18),
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
              icon: const Icon(Hi.arrowUpOnSquare, size: 18),
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
    this.icon = Hi.eye,
    this.title = 'Ver como os convidados',
    this.subtitle = 'Pré-visualiza o Programa antes de guardar',
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
        color: AppTheme.surface,
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
            const Icon(Hi.chevronRight, size: 18, color: Color(0xFFB5B0A6)),
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
                      icon: const Icon(Hi.ellipsisHorizontal, size: 20, color: AppTheme.inkMuted),
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
            Icon(icon ?? Hi.plus, size: 16, color: _olive),
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
              child: selected ? const Icon(Hi.check, size: 18, color: _olive) : null,
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

  // Conteúdo da folha "Acompanhantes" (mockup: linha compacta que abre
  // uma folha, 2026-11-08).
  List<Widget> _sheetBody(void Function() refresh) {
    final v = _value ?? 1;
    return [
      CompanionLimitRow(
        title: 'Cada convidado pode trazer',
        subtitle: v == 0 ? 'Ninguém traz acompanhantes' : (v == 1 ? 'Até 1 pessoa' : 'Até $v pessoas'),
        value: v,
        onChanged: (n) async {
          await _set(n);
          refresh();
        },
      ),
      const SizedBox(height: 4),
      _OptSwitch(
        weddingId: widget.weddingId,
        optKey: 'opt_companion_details',
        fallback: true,
        title: 'Pedir nome, menu e alergias',
        subtitle: 'De cada acompanhante, na resposta',
      ),
      _OptSwitch(
        weddingId: widget.weddingId,
        optKey: 'opt_kids_free',
        fallback: false,
        title: 'Crianças à parte',
        subtitle: 'Crianças não contam para o limite',
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
    ];
  }

  Future<void> _openSheet() async {
    await showIslandSheet<void>(
      context: context,
      isScrollControlled: true,
      builder: (sheet) => StatefulBuilder(
        builder: (context, setSheet) => SingleChildScrollView(
          padding: EdgeInsets.fromLTRB(20, 16, 20, 20 + MediaQuery.of(context).viewInsets.bottom),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            const Text('Acompanhantes', style: TextStyle(fontSize: 20, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 14),
            ..._sheetBody(() => setSheet(() {})),
            const SizedBox(height: 18),
            FilledButton(
              onPressed: () => Navigator.of(sheet).pop(),
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                minimumSize: const Size.fromHeight(50),
                shape: const StadiumBorder(),
              ),
              child: const Text('Feito', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15)),
            ),
          ]),
        ),
      ),
    );
    if (mounted) setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    if (!_available) return const SizedBox.shrink();
    final v = _value;
    final sub = v == null
        ? 'A carregar…'
        : '${v == 0 ? 'Só o convidado' : 'Até $v por convidado'} · editar por pessoa';
    return Container(
      decoration: _whiteCard(),
      clipBehavior: Clip.antiAlias,
      child: Material(
        type: MaterialType.transparency,
        child: InkWell(
          onTap: v == null ? null : _openSheet,
          child: Padding(
            padding: const EdgeInsets.fromLTRB(14, 12, 10, 12),
            child: Row(children: [
              Container(
                width: 38,
                height: 38,
                decoration: BoxDecoration(color: const Color(0xFFDDE5D3), borderRadius: BorderRadius.circular(12)),
                child: const Icon(Hi.userGroup, size: 19, color: _heroGreen),
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  const Text('Acompanhantes', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  Text(sub, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
                ]),
              ),
              const Icon(Hi.chevronRight, color: AppTheme.inkMuted),
            ]),
          ),
        ),
      ),
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
  final _priceFocus = FocusNode();

  @override
  void dispose() {
    _price.dispose();
    _priceFocus.dispose();
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
      // O campo do preço aparece e fica logo selecionado (pedido 2026-11-08).
      // Na web (PWA no iPhone) não: o foco dado por código, fora de um
      // toque, deixa o campo "focado" sem teclado e os toques seguintes já
      // não o abrem — era por isso que não dava para escrever o preço.
      if (!kIsWeb) {
        WidgetsBinding.instance.addPostFrameCallback((_) {
          if (mounted) _priceFocus.requestFocus();
        });
      }
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
    // Abaixo disto a taxa de serviço come o bilhete todo (2026-11-09).
    if (v < _minTicketPrice) {
      _toast('O preço mínimo é ${_fmt(_minTicketPrice)} €.');
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

  void _bump(int delta) {
    final next = ((_priceValue ?? 0) + delta).clamp(_minTicketPrice, 100000).toDouble();
    setState(() => _price.text = _fmt(next));
  }

  Widget _stepBtn(IconData icon, String label, VoidCallback onTap) => Semantics(
        button: true,
        label: label,
        child: SnappyTap(
          onTap: onTap,
          child: Container(
            width: 48,
            height: 48,
            decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
            child: Icon(icon, color: Colors.white),
          ),
        ),
      );

  /// Preço mínimo por pessoa (abaixo a taxa de serviço come o bilhete).
  static const double _minTicketPrice = 3;

  static String _fmt(double v) => v == v.roundToDouble() ? v.toStringAsFixed(0) : v.toStringAsFixed(2).replaceAll('.', ',');

  // Seletor em pílula (redesign 2026-11-08); o `hint` passa a uma linha
  // por baixo do seletor.
  Widget _choice({required String label, required String hint, required bool selected, required VoidCallback onTap}) {
    return Expanded(
      child: Semantics(
        button: true,
        selected: selected,
        hint: hint,
        child: SnappyTap(
          onTap: onTap,
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 160),
            height: 38,
            alignment: Alignment.center,
            decoration: BoxDecoration(
              color: selected ? AppTheme.accentOliveDark : Colors.transparent,
              borderRadius: BorderRadius.circular(999),
            ),
            child: Text(label,
                style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.inkMuted)),
          ),
        ),
      ),
    );
  }

  Widget _segment(List<Widget> children) => Container(
        padding: const EdgeInsets.all(4),
        decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(999)),
        child: Row(children: children),
      );

  Widget _quickChip(int v) {
    final selected = _priceValue == v.toDouble();
    return Semantics(
      button: true,
      selected: selected,
      child: SnappyTap(
        onTap: () => setState(() => _price.text = '$v'),
        // Sem `alignment`: com ele o Container esticava-se à largura toda
        // e cada valor ficava numa linha (iPhone, 2026-11-09).
        child: Container(
          height: 34,
          padding: const EdgeInsets.symmetric(horizontal: 14),
          decoration: BoxDecoration(
            color: selected ? const Color(0xFFDDE5D3) : Colors.white,
            borderRadius: BorderRadius.circular(999),
            border: selected ? null : Border.all(color: const Color(0xFFDCD8CE), width: 1.5),
          ),
          child: Center(
            widthFactor: 1,
            child: Text('$v €',
                style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: selected ? const Color(0xFF3F5A3B) : AppTheme.ink)),
          ),
        ),
      ),
    );
  }

  // Contas do bilhete. A taxa de serviço inclui o custo do pagamento
  // (que depende do cartão), por isso o valor recebido é aproximado.
  Widget _feeBox() {
    final price = _priceValue ?? 0;
    final cfg = ref.watch(_ticketFeeProvider).value ?? (pct: 4.0, fixed: 1.0);
    final fee = price <= 0 ? 0.0 : (price * cfg.pct / 100 + cfg.fixed + price * 0.015 + 0.25).clamp(0, price).toDouble();
    String eur(double v) => '${v.toStringAsFixed(2).replaceAll('.', ',')} €';
    Widget line(String a, String b, {bool bold = false, bool muted = false}) => Padding(
          padding: const EdgeInsets.symmetric(vertical: 3),
          child: Row(children: [
            Expanded(
              child: Text(a,
                  style: TextStyle(fontSize: bold ? 14.5 : 13.5, fontWeight: bold ? FontWeight.w700 : FontWeight.w600, color: muted ? AppTheme.inkMuted : AppTheme.ink)),
            ),
            Text(b,
                style: TextStyle(fontSize: bold ? 14.5 : 13.5, fontWeight: bold || !muted ? FontWeight.w700 : FontWeight.w600, color: muted ? AppTheme.inkMuted : AppTheme.ink)),
          ]),
        );
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 9),
      decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(14)),
      child: Column(children: [
        line('Quem compra paga', eur(price)),
        line('Taxa de serviço', '− ${eur(fee)}', muted: true),
        line('Recebes por bilhete', '≈ ${eur(price - fee)}', bold: true),
        if (price > 0 && price < _minTicketPrice)
          Padding(
            padding: const EdgeInsets.only(top: 6),
            child: Text('O preço mínimo é ${_fmt(_minTicketPrice)} €.',
                style: const TextStyle(fontSize: 12.5, fontWeight: FontWeight.w700, color: Color(0xFFB3261E))),
          ),
      ]),
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

    // Igual ao mockup "Para os convidados" (2026-11-08): título, dois
    // seletores e uma nota; com Pago, o preço por baixo.
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: _whiteCard(),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        const Text('Acesso e entrada', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 12),
        _segment([
          _choice(
            label: 'Privado',
            hint: 'Só convidados, com código ou convite.',
            selected: !isPublic,
            onTap: () => isPublic ? _setPublic(false) : null,
          ),
          _choice(
            label: 'Público',
            hint: 'Aparece a todos em Eventos.',
            selected: isPublic,
            onTap: () {
              if (isPublic) return;
              if (!canBePublic) {
                _toast('${widget.wedding.eventType.label} é sempre privado. Públicos só festas, concertos, festivais e eventos de empresa.');
                return;
              }
              _setPublic(true);
            },
          ),
        ]),
        const SizedBox(height: 10),
        _segment([
          _choice(
            label: 'Grátis',
            hint: 'Sem pagamento para entrar.',
            selected: !paid,
            onTap: () => paid ? _setPaid(false) : null,
          ),
          _choice(
            label: 'Pago',
            hint: 'Bilhete pago na app.',
            selected: paid,
            onTap: () => paid ? null : _setPaid(true),
          ),
        ]),
        if (!paid) ...[
          const SizedBox(height: 10),
          Text(
            '${canBePublic ? (isPublic ? 'Aparece a todos em Eventos.' : 'Só entra quem tem o código ou o convite.') : '${widget.wedding.eventType.label} é sempre privado.'} Com Pago aparece o preço por pessoa.',
            style: const TextStyle(fontSize: AppFontSize.sm, height: 1.4, color: AppTheme.inkMuted),
          ),
        ] else ...[
          // Igual ao mockup "Bilhetes · Entrada paga" (2026-11-08): − / +
          // à volta do preço, valores rápidos, contas e Guardar preço.
          const SizedBox(height: 16),
          const Text('Preço por pessoa', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
          const SizedBox(height: 8),
          Row(children: [
            _stepBtn(Hi.minus, 'Menos 1 €', () => _bump(-1)),
            const SizedBox(width: 10),
            Expanded(
              child: Container(
                height: 56,
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: AppTheme.accentOliveDark, width: 1.5),
                ),
                // Número e € na mesma linha de base (no iPhone o € ficava mais abaixo).
                child: Row(crossAxisAlignment: CrossAxisAlignment.center, mainAxisAlignment: MainAxisAlignment.center, children: [
                  // O campo ocupa a metade esquerda toda: um toque em
                  // qualquer ponto abre o teclado.
                  Expanded(
                    child: TextField(
                      controller: _price,
                      focusNode: _priceFocus,
                      textAlign: TextAlign.right,
                      keyboardType: const TextInputType.numberWithOptions(decimal: true),
                      textInputAction: TextInputAction.done,
                      onChanged: (_) => setState(() {}),
                      onSubmitted: (_) => _savePrice(),
                      style: const TextStyle(fontSize: 26, height: 1, fontWeight: FontWeight.w700, color: AppTheme.ink),
                      // Sem o fundo cinzento do tema (só metade da caixa ficava cinzenta).
                      decoration: const InputDecoration(
                        hintText: '25',
                        filled: false,
                        border: InputBorder.none,
                        enabledBorder: InputBorder.none,
                        focusedBorder: InputBorder.none,
                        isCollapsed: true,
                        contentPadding: EdgeInsets.symmetric(vertical: 14),
                      ),
                    ),
                  ),
                  const SizedBox(width: 6),
                  const Expanded(
                    child: Text('€', style: TextStyle(fontSize: 26, height: 1, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                  ),
                ]),
              ),
            ),
            const SizedBox(width: 10),
            _stepBtn(Hi.plus, 'Mais 1 €', () => _bump(1)),
          ]),
          const SizedBox(height: 10),
          Wrap(
            alignment: WrapAlignment.center,
            spacing: 6,
            runSpacing: 6,
            children: [
              for (final v in const [10, 15, 20, 25, 50]) _quickChip(v),
            ],
          ),
          const SizedBox(height: 12),
          _feeBox(),
          const SizedBox(height: 12),
          SizedBox(
            height: 50,
            child: FilledButton(
              onPressed: _savingPrice ? null : _savePrice,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                shape: const StadiumBorder(),
              ),
              child: _savingPrice
                  ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                  : const Text('Guardar preço', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700)),
            ),
          ),
          if (entry.paid) ...[
            const SizedBox(height: 6),
            Center(
              child: TextButton(
                onPressed: () => context.push('/bilhetes'),
                style: TextButton.styleFrom(foregroundColor: AppTheme.accentOliveDark),
                child: const Text('Bilhetes vendidos e revendas ›', style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700)),
              ),
            ),
          ],
        ],
        const SizedBox(height: 18),
        _CapacityBlock(weddingId: _id, segment: _segment, choice: _choice, stepBtn: _stepBtn),
      ]),
    );
  }
}

/// Limite de pessoas (migração 182, pedido 2026-11-11): sem limite ou um
/// máximo; quando enche, ninguém mais entra nem compra bilhete.
class _CapacityBlock extends ConsumerStatefulWidget {
  final String weddingId;
  final Widget Function(List<Widget>) segment;
  final Widget Function({required String label, required String hint, required bool selected, required VoidCallback onTap}) choice;
  final Widget Function(IconData, String, VoidCallback) stepBtn;
  const _CapacityBlock({required this.weddingId, required this.segment, required this.choice, required this.stepBtn});

  @override
  ConsumerState<_CapacityBlock> createState() => _CapacityBlockState();
}

class _CapacityBlockState extends ConsumerState<_CapacityBlock> {
  final _max = TextEditingController();
  bool _loaded = false;
  bool? _limitedLocal;
  bool _saving = false;

  @override
  void dispose() {
    _max.dispose();
    super.dispose();
  }

  int? get _value {
    final v = int.tryParse(_max.text.trim().replaceAll(' ', '').replaceAll('.', ''));
    return v == null || v < 1 ? null : v;
  }

  void _toast(String text) => ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(text)));

  Future<void> _save(int? v) async {
    setState(() => _saving = true);
    try {
      await setEventMaxAttendees(widget.weddingId, v);
      ref.invalidate(eventMaxAttendeesProvider(widget.weddingId));
      ref.invalidate(publicEventsProvider);
      if (!mounted) return;
      FocusScope.of(context).unfocus();
      _toast(v == null ? 'Sem limite de pessoas.' : 'Limite: $v pessoas.');
    } catch (_) {
      _toast('Não foi possível guardar. Tenta outra vez.');
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  void _bump(int delta) {
    final next = ((_value ?? 0) + delta).clamp(1, 100000);
    setState(() => _max.text = '$next');
  }

  @override
  Widget build(BuildContext context) {
    final async = ref.watch(eventMaxAttendeesProvider(widget.weddingId));
    final saved = async.value;
    if (!_loaded && async.hasValue) {
      _loaded = true;
      if (saved != null) _max.text = '$saved';
    }
    final limited = _limitedLocal ?? saved != null;
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      const Text('Limite de pessoas', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
      const SizedBox(height: 8),
      widget.segment([
        widget.choice(
          label: 'Sem limite',
          hint: 'Entra quem quiser.',
          selected: !limited,
          onTap: () {
            if (!limited) return;
            setState(() => _limitedLocal = false);
            if (saved != null) _save(null);
          },
        ),
        widget.choice(
          label: 'Com limite',
          hint: 'Fecha quando enche.',
          selected: limited,
          onTap: () {
            if (limited) return;
            setState(() {
              _limitedLocal = true;
              if (_max.text.isEmpty) _max.text = '100';
            });
          },
        ),
      ]),
      if (limited) ...[
        const SizedBox(height: 12),
        Row(children: [
          widget.stepBtn(Hi.minus, 'Menos 10', () => _bump(-10)),
          const SizedBox(width: 10),
          Expanded(
            child: Container(
              height: 56,
              decoration: BoxDecoration(
                color: Colors.white,
                borderRadius: BorderRadius.circular(16),
                border: Border.all(color: AppTheme.accentOliveDark, width: 1.5),
              ),
              child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                Expanded(
                  child: TextField(
                    controller: _max,
                    textAlign: TextAlign.right,
                    keyboardType: TextInputType.number,
                    textInputAction: TextInputAction.done,
                    onChanged: (_) => setState(() {}),
                    onSubmitted: (_) => _value == null ? null : _save(_value),
                    style: const TextStyle(fontSize: 26, height: 1, fontWeight: FontWeight.w700, color: AppTheme.ink),
                    decoration: const InputDecoration(
                      hintText: '100',
                      filled: false,
                      border: InputBorder.none,
                      enabledBorder: InputBorder.none,
                      focusedBorder: InputBorder.none,
                      isCollapsed: true,
                      contentPadding: EdgeInsets.symmetric(vertical: 14),
                    ),
                  ),
                ),
                const SizedBox(width: 6),
                const Expanded(
                  child: Text('pessoas', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                ),
              ]),
            ),
          ),
          const SizedBox(width: 10),
          widget.stepBtn(Hi.plus, 'Mais 10', () => _bump(10)),
        ]),
        const SizedBox(height: 12),
        SizedBox(
          height: 50,
          child: FilledButton(
            onPressed: _saving || _value == null ? null : () => _save(_value),
            style: FilledButton.styleFrom(
              backgroundColor: AppTheme.ink,
              foregroundColor: Colors.white,
              shape: const StadiumBorder(),
            ),
            child: _saving
                ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
                : const Text('Guardar limite', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700)),
          ),
        ),
      ],
    ]);
  }
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
      color: AppTheme.surface,
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          Icon(Hi.adjustmentsHorizontal, size: 20, color: green),
          const SizedBox(width: 8),
          const Expanded(
            child: Text('O que os convidados veem',
                style: TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          if (_saving) const SizedBox(width: 16, height: 16, child: CircularProgressIndicator(strokeWidth: 2)),
        ]),
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

// ───────────────────────── redesign 2026-11-08

const _heroGreen = Color(0xFF3F5A3B);

BoxDecoration _whiteCard() => BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.circular(20),
      border: Border.all(color: const Color(0xFFDCD8CE)),
      boxShadow: const [BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))],
    );

/// Cartão verde: código em grande, Partilhar convite e Ver como convidado.
class _CodeHero extends ConsumerWidget {
  final Wedding wedding;
  final VoidCallback? onShare;
  final VoidCallback onPreview;
  const _CodeHero({required this.wedding, required this.onShare, required this.onPreview});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final code = wedding.guestCode;
    final isPublic = ref.watch(eventIsPublicProvider(wedding.id)).value ?? false;
    return Container(
      clipBehavior: Clip.antiAlias,
      decoration: BoxDecoration(color: _heroGreen, borderRadius: BorderRadius.circular(26)),
      child: Stack(children: [
        Positioned(
          right: -50,
          top: -60,
          child: Container(
            width: 180,
            height: 180,
            decoration: const BoxDecoration(shape: BoxShape.circle, color: Color(0x14FFFFFF)),
          ),
        ),
        Padding(
          padding: const EdgeInsets.all(20),
          child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            const Text('CÓDIGO DO EVENTO',
                style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, letterSpacing: 1.4, color: Color(0xFFDDE5D3))),
            const SizedBox(height: 6),
            Row(children: [
              Expanded(
                child: FittedBox(
                  fit: BoxFit.scaleDown,
                  alignment: Alignment.centerLeft,
                  child: Text(code?.isNotEmpty == true ? code! : '—',
                      style: const TextStyle(fontSize: 30, fontWeight: FontWeight.w700, letterSpacing: 1, color: Colors.white)),
                ),
              ),
              if (code?.isNotEmpty == true)
                Material(
                  color: const Color(0x29FFFFFF),
                  borderRadius: BorderRadius.circular(12),
                  child: InkWell(
                    borderRadius: BorderRadius.circular(12),
                    onTap: () async {
                      await copyText(code!);
                      if (context.mounted) {
                        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Código copiado.')));
                      }
                    },
                    child: const Padding(
                      padding: EdgeInsets.all(10),
                      child: Icon(Hi.documentDuplicate, size: 18, color: Colors.white, semanticLabel: 'Copiar código'),
                    ),
                  ),
                ),
            ]),
            const SizedBox(height: 6),
            Text(
              isPublic ? 'Aparece a todos em Eventos · público' : 'Quem tem o código ou o link entra · privado',
              style: const TextStyle(fontSize: 13, color: Color(0xFFDDE5D3)),
            ),
            const SizedBox(height: 14),
            // Um por linha (2026-11-08: "Ver como convidado desformatado").
            FilledButton.icon(
              onPressed: onShare,
              icon: const Icon(Hi.arrowUpOnSquare, size: 18),
              label: const Text('Partilhar convite', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15)),
              style: FilledButton.styleFrom(
                backgroundColor: Colors.white,
                foregroundColor: _heroGreen,
                minimumSize: const Size.fromHeight(48),
                shape: const StadiumBorder(),
              ),
            ),
            const SizedBox(height: 8),
            OutlinedButton.icon(
              onPressed: onPreview,
              icon: const Icon(Hi.eye, size: 18),
              label: const Text('Ver como convidado', style: TextStyle(fontWeight: FontWeight.w700, fontSize: 15)),
              style: OutlinedButton.styleFrom(
                foregroundColor: Colors.white,
                side: const BorderSide(color: Color(0x80FFFFFF), width: 1.5),
                minimumSize: const Size.fromHeight(48),
                shape: const StadiumBorder(),
              ),
            ),
          ]),
        ),
      ]),
    );
  }
}

/// Uma parte da página dos convidados.
class _Part {
  final IconData icon;
  final String title;
  final String status;
  final bool missing;
  final bool locked;
  final GuestSection? section;
  final VoidCallback? onOpen;
  const _Part({
    required this.icon,
    required this.title,
    required this.status,
    this.missing = false,
    this.locked = false,
    this.section,
    this.onOpen,
  });
}

/// "A página": cada parte com o que já tem, mostrar/esconder (migração
/// 158) e a folha para editar. O que falta fica a amarelo.
class _PartsList extends ConsumerStatefulWidget {
  final String weddingId;
  final List<_Part> parts;
  const _PartsList({required this.weddingId, required this.parts});

  @override
  ConsumerState<_PartsList> createState() => _PartsListState();
}

class _PartsListState extends ConsumerState<_PartsList> {
  GuestSections? _local;

  Future<void> _set(GuestSections next) async {
    final before = _local;
    setState(() => _local = next);
    try {
      await saveGuestSections(widget.weddingId, next);
      ref.invalidate(guestSectionsProvider(widget.weddingId));
    } catch (_) {
      if (!mounted) return;
      setState(() => _local = before);
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
    }
  }

  @override
  Widget build(BuildContext context) {
    // Sem resposta ainda: tudo visível (o padrão), para os interruptores
    // aparecerem sempre, como no mockup.
    final sections = _local ?? ref.watch(guestSectionsProvider(widget.weddingId)).value ?? const GuestSections();
    final parts = widget.parts;
    final countable = parts.where((p) => !p.locked).toList();
    final ready = countable.where((p) => !p.missing).length;
    const amber = Color(0xFF8A4B10);
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      Padding(
        padding: const EdgeInsets.fromLTRB(2, 12, 2, 10),
        child: Row(crossAxisAlignment: CrossAxisAlignment.baseline, textBaseline: TextBaseline.alphabetic, children: [
          const Expanded(
            child: Text('A página', style: TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ),
          Text('$ready de ${countable.length} prontas',
              style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
        ]),
      ),
      Container(
        decoration: _whiteCard(),
        clipBehavior: Clip.antiAlias,
        child: Material(
          type: MaterialType.transparency,
          child: Column(children: [
            for (final (i, p) in parts.indexed) ...[
              if (i > 0) const Divider(height: 1, indent: 64, color: Color(0xFFF2F0EB)),
              InkWell(
                onTap: p.locked
                    ? () => ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Dormir e transporte ainda não está disponível. Avisamos quando abrir.')))
                    : p.onOpen,
                child: Padding(
                  padding: const EdgeInsets.fromLTRB(14, 12, 10, 12),
                  child: Row(children: [
                    Container(
                      width: 38,
                      height: 38,
                      decoration: BoxDecoration(
                        color: p.locked ? const Color(0xFFF2F0EB) : (p.missing ? const Color(0xFFF7EACA) : const Color(0xFFDDE5D3)),
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: Icon(p.icon, size: 19, color: p.locked ? AppTheme.inkMuted : (p.missing ? amber : _heroGreen)),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: Opacity(
                        opacity: p.locked ? 0.6 : 1,
                        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                          Text(p.title, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          Text(p.status,
                              maxLines: 1,
                              overflow: TextOverflow.ellipsis,
                              style: TextStyle(
                                fontSize: 12.5,
                                fontWeight: p.missing ? FontWeight.w700 : FontWeight.w600,
                                color: p.missing ? amber : AppTheme.inkMuted,
                              )),
                        ]),
                      ),
                    ),
                    if (p.locked)
                      Container(
                        padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 5),
                        decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(999)),
                        child: const Row(mainAxisSize: MainAxisSize.min, children: [
                          Icon(Hi.lockClosed, size: 13, color: AppTheme.inkMuted),
                          SizedBox(width: 4),
                          Text('Em breve', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                        ]),
                      )
                    else if (p.section != null)
                      Switch.adaptive(
                        value: sections.shows(p.section!),
                        activeTrackColor: AppTheme.accentOliveDark,
                        onChanged: (v) => _set(sections.withSection(p.section!, v)),
                      )
                    else if (p.onOpen != null)
                      const Icon(Hi.chevronRight, color: AppTheme.inkMuted),
                  ]),
                ),
              ),
            ],
          ]),
        ),
      ),
      const SizedBox(height: 10),
      const Text('Toca numa parte para a editar. Guarda sozinho.',
          textAlign: TextAlign.center, style: TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
      ...[
        const SizedBox(height: 6),
        Center(
          child: TextButton(
            onPressed: () => _set(sections.onlyTicket ? sections.all(true) : sections.all(false)),
            child: Text(sections.onlyTicket ? 'Mostrar tudo outra vez' : 'Esconder tudo (só o bilhete)'),
          ),
        ),
      ],
    ]);
  }
}

/// Opção da página (guardada em `guest_sections`, 2026-11-08).
class _OptSwitch extends ConsumerStatefulWidget {
  final String weddingId;
  final String optKey;
  final bool fallback;
  final String title;
  final String subtitle;
  const _OptSwitch({required this.weddingId, required this.optKey, required this.fallback, required this.title, required this.subtitle});
  @override
  ConsumerState<_OptSwitch> createState() => _OptSwitchState();
}

class _OptSwitchState extends ConsumerState<_OptSwitch> {
  bool? _local;

  Future<void> _set(GuestSections sections, bool v) async {
    setState(() => _local = v);
    try {
      await saveGuestSections(widget.weddingId, sections.withOption(widget.optKey, v));
      ref.invalidate(guestSectionsProvider(widget.weddingId));
    } catch (_) {
      if (!mounted) return;
      setState(() => _local = null);
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
    }
  }

  @override
  Widget build(BuildContext context) {
    final sections = ref.watch(guestSectionsProvider(widget.weddingId)).value;
    if (sections == null) return const SizedBox.shrink();
    final value = _local ?? sections.flag(widget.optKey, fallback: widget.fallback);
    return SwitchListTile.adaptive(
      contentPadding: EdgeInsets.zero,
      activeTrackColor: AppTheme.accentOliveDark,
      title: Text(widget.title, style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
      subtitle: Text(widget.subtitle, style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
      value: value,
      onChanged: (v) => _set(sections, v),
    );
  }
}

/// Opção com várias escolhas em pílula (ex.: quando a mesa aparece).
class _OptSegment extends ConsumerStatefulWidget {
  final String weddingId;
  final String optKey;
  final String fallback;
  final String title;
  final List<(String, String)> options;
  const _OptSegment({required this.weddingId, required this.optKey, required this.fallback, required this.title, required this.options});
  @override
  ConsumerState<_OptSegment> createState() => _OptSegmentState();
}

class _OptSegmentState extends ConsumerState<_OptSegment> {
  String? _local;

  Future<void> _set(GuestSections sections, String v) async {
    setState(() => _local = v);
    try {
      await saveGuestSections(widget.weddingId, sections.withOption(widget.optKey, v));
      ref.invalidate(guestSectionsProvider(widget.weddingId));
    } catch (_) {
      if (!mounted) return;
      setState(() => _local = null);
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
    }
  }

  @override
  Widget build(BuildContext context) {
    final sections = ref.watch(guestSectionsProvider(widget.weddingId)).value;
    if (sections == null) return const SizedBox.shrink();
    final raw = sections.toJson()[widget.optKey];
    final value = _local ?? (raw is String ? raw : widget.fallback);
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      Text(widget.title, style: const TextStyle(fontSize: AppFontSize.md, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
      const SizedBox(height: 8),
      Container(
        padding: const EdgeInsets.all(4),
        decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(999)),
        child: Row(children: [
          for (final (k, label) in widget.options)
            Expanded(
              child: SnappyTap(
                onTap: () => _set(sections, k),
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 160),
                  height: 38,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(
                    color: value == k ? AppTheme.accentOliveDark : Colors.transparent,
                    borderRadius: BorderRadius.circular(999),
                  ),
                  child: FittedBox(
                    child: Padding(
                      padding: const EdgeInsets.symmetric(horizontal: 6),
                      child: Text(label,
                          style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: value == k ? Colors.white : AppTheme.inkMuted)),
                    ),
                  ),
                ),
              ),
            ),
        ]),
      ),
    ]);
  }
}

/// Taxa de serviço dos bilhetes (`ticket_fee_percentage` + `fixed_fee_cents`).
final _ticketFeeProvider = FutureProvider<({double pct, double fixed})>((ref) async {
  try {
    final r = await supabase.from('platform_settings').select('*').eq('id', 1).maybeSingle();
    return (
      pct: (r?['ticket_fee_percentage'] as num?)?.toDouble() ?? 4.0,
      fixed: ((r?['fixed_fee_cents'] as num?)?.toDouble() ?? 100) / 100,
    );
  } catch (_) {
    return (pct: 4.0, fixed: 1.0);
  }
});
