import 'dart:async';
import 'dart:math' as math;

import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';

import '../../core/partner_profile/partner_location.dart';
import '../../core/supabase/supabase_config.dart';
import '../../core/theme/app_theme.dart';
import 'island_sheet.dart';
import 'snappy_tap.dart';
import 'venue_map.dart';

/// Seletor de moradas com o Google (pedido do Rafael, 2026-11-20; mockups
/// «Morada · pesquisa» e «Morada · confirmar»), para **todos** os campos de
/// local da app: escreve-se o nome do espaço ou a morada, aparecem as
/// sugestões, escolhe-se uma e confirma-se no mapa — a localidade, o código
/// postal e o distrito ficam preenchidos sozinhos.
///
/// O Google passa pela função `places` (a chave nunca está na app). Sem a
/// chave configurada, ou se a função falhar, usa o OpenStreetMap
/// (Nominatim), como antes.
class PickedAddress {
  /// «Quinta da Ribafria» (o nome do sítio, ou a rua).
  final String name;

  /// «Estrada da Ribafria, 2705 Sintra» (o resto da morada).
  final String secondary;

  /// Morada inteira, numa linha.
  final String address;
  final String addressLine;
  final String postalCode;
  final String city;
  final String region;
  final double? latitude;
  final double? longitude;

  const PickedAddress({
    required this.name,
    this.secondary = '',
    this.address = '',
    this.addressLine = '',
    this.postalCode = '',
    this.city = '',
    this.region = '',
    this.latitude,
    this.longitude,
  });

  /// «Quinta da Ribafria, Sintra» — para guardar num campo de texto.
  String get label {
    if (city.isNotEmpty && !name.contains(city)) return '$name, $city';
    return name;
  }

  PartnerLocation toPartnerLocation() => PartnerLocation(
        addressLine: addressLine.isNotEmpty ? addressLine : name,
        postalCode: postalCode,
        city: city,
        region: region,
        latitude: latitude,
        longitude: longitude,
      );
}

/// Abre o seletor numa ilha. [citiesOnly] sugere só localidades (ex.:
/// «Cidade ou região»). Devolve `null` se a pessoa fechar.
Future<PickedAddress?> showAddressPicker(
  BuildContext context, {
  String title = 'Onde é?',
  String? initialQuery,
  bool citiesOnly = false,
  (String, String)? shortcut,
}) =>
    showIslandSheet<PickedAddress>(
      context: context,
      isScrollControlled: true,
      builder: (_) => _AddressPicker(title: title, initialQuery: initialQuery, citiesOnly: citiesOnly, shortcut: shortcut),
    );

class _Suggestion {
  final String name;
  final String secondary;
  final String? placeId;
  final PartnerLocation? osm;
  const _Suggestion({required this.name, required this.secondary, this.placeId, this.osm});
}

class _AddressPicker extends StatefulWidget {
  final String title;
  final String? initialQuery;
  final bool citiesOnly;

  /// Atalho por cima das sugestões: (título, valor) — ex.: «Usar a tua
  /// zona», «Lisboa».
  final (String, String)? shortcut;
  const _AddressPicker({required this.title, this.initialQuery, required this.citiesOnly, this.shortcut});

  @override
  State<_AddressPicker> createState() => _AddressPickerState();
}

class _AddressPickerState extends State<_AddressPicker> {
  late final _query = TextEditingController(text: widget.initialQuery ?? '');
  final _session = '${DateTime.now().microsecondsSinceEpoch}${math.Random().nextInt(1 << 30)}';
  Timer? _debounce;
  List<_Suggestion> _results = const [];
  bool _loading = false;
  bool _google = false;
  String? _error;

  /// Depois de escolher: o passo «Confirmar local».
  PickedAddress? _picked;

  @override
  void initState() {
    super.initState();
    if ((widget.initialQuery ?? '').trim().length >= 3) _search(widget.initialQuery!);
  }

  @override
  void dispose() {
    _debounce?.cancel();
    _query.dispose();
    super.dispose();
  }

  void _onChanged(String v) {
    _debounce?.cancel();
    _debounce = Timer(const Duration(milliseconds: 280), () => _search(v));
    setState(() {});
  }

  Future<void> _search(String q) async {
    final text = q.trim();
    if (text.length < 3) {
      setState(() => _results = const []);
      return;
    }
    setState(() {
      _loading = true;
      _error = null;
    });
    try {
      final res = await supabase.functions.invoke('places', body: {
        'action': 'autocomplete',
        'input': text,
        'sessionToken': _session,
        'citiesOnly': widget.citiesOnly,
      });
      final list = ((res.data as Map?)?['results'] as List?) ?? const [];
      if (!mounted || _query.text.trim() != text) return;
      setState(() {
        _google = true;
        _results = [
          for (final r in list.cast<Map>())
            _Suggestion(name: '${r['name'] ?? ''}', secondary: '${r['secondary'] ?? ''}', placeId: '${r['placeId'] ?? ''}'),
        ];
      });
    } catch (_) {
      // Sem a chave do Google (ou sem rede para a função): OpenStreetMap.
      try {
        final osm = await searchAddress(text);
        if (!mounted || _query.text.trim() != text) return;
        setState(() {
          _google = false;
          _results = [
            for (final (label, loc) in osm)
              _Suggestion(
                name: label.split(', ').first,
                secondary: label.split(', ').skip(1).take(3).join(', '),
                osm: loc,
              ),
          ];
        });
      } catch (_) {
        if (mounted) setState(() => _error = 'Não foi possível procurar. Tenta outra vez.');
      }
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  Future<void> _choose(_Suggestion s) async {
    if (s.osm != null) {
      final l = s.osm!;
      setState(() => _picked = PickedAddress(
            name: s.name,
            secondary: s.secondary,
            address: [s.name, s.secondary].where((e) => e.isNotEmpty).join(', '),
            addressLine: l.addressLine,
            postalCode: l.postalCode,
            city: l.city,
            region: l.region,
            latitude: l.latitude,
            longitude: l.longitude,
          ));
      return;
    }
    setState(() => _loading = true);
    try {
      final res = await supabase.functions.invoke('places', body: {
        'action': 'details',
        'placeId': s.placeId,
        'sessionToken': _session,
      });
      final d = (res.data as Map?) ?? const {};
      if (!mounted) return;
      setState(() => _picked = PickedAddress(
            name: s.name.isNotEmpty ? s.name : '${d['name'] ?? ''}',
            secondary: s.secondary,
            address: '${d['address'] ?? ''}',
            addressLine: '${d['addressLine'] ?? ''}',
            postalCode: '${d['postalCode'] ?? ''}',
            city: '${d['city'] ?? ''}',
            region: '${d['region'] ?? ''}',
            latitude: (d['lat'] as num?)?.toDouble(),
            longitude: (d['lng'] as num?)?.toDouble(),
          ));
    } catch (_) {
      if (mounted) setState(() => _picked = PickedAddress(name: s.name, secondary: s.secondary));
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  Future<void> _useMyLocation() async {
    setState(() {
      _loading = true;
      _error = null;
    });
    try {
      final pos = await currentPosition();
      final l = await reverseGeocode(pos.latitude, pos.longitude);
      if (!mounted) return;
      final name = l.addressLine.isNotEmpty ? l.addressLine : (l.city.isNotEmpty ? l.city : 'A minha localização');
      setState(() => _picked = PickedAddress(
            name: name,
            secondary: [l.postalCode, l.city].where((e) => e.isNotEmpty).join(' '),
            address: l.summary,
            addressLine: l.addressLine,
            postalCode: l.postalCode,
            city: l.city,
            region: l.region,
            latitude: l.latitude,
            longitude: l.longitude,
          ));
    } on LocationException catch (e) {
      if (mounted) setState(() => _error = e.message);
    } catch (_) {
      if (mounted) setState(() => _error = 'Não foi possível saber onde estás.');
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  Widget _header(String title, {String? subtitle}) => Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: const TextStyle(fontSize: 23, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            if (subtitle != null) ...[
              const SizedBox(height: 4),
              Text(subtitle, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
            ],
          ]),
        ),
        const SizedBox(width: 12),
        Tooltip(
          message: 'Fechar',
          excludeFromSemantics: true,
          child: SnappyTap(
            onTap: () => Navigator.of(context).maybePop(),
            semanticLabel: 'Fechar',
            child: Container(
              width: 44,
              height: 44,
              alignment: Alignment.center,
              decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
              child: const Icon(Hi.xMark, size: 20, color: Colors.white),
            ),
          ),
        ),
      ]);

  Widget get _attribution => _google
      ? const Align(
          alignment: Alignment.centerRight,
          child: Text.rich(TextSpan(children: [
            TextSpan(text: 'com tecnologia '),
            TextSpan(text: 'Google', style: TextStyle(fontWeight: FontWeight.w700, color: Color(0xFF3A3733))),
          ]), style: TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
        )
      : const SizedBox.shrink();

  @override
  Widget build(BuildContext context) => _picked == null ? _searchStep(context) : _confirmStep(context);

  Widget _searchStep(BuildContext context) {
    final mq = MediaQuery.sizeOf(context);
    return SizedBox(
      height: math.min(620, mq.height * 0.78),
      child: Padding(
        padding: const EdgeInsets.all(20),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          _header(widget.title,
              subtitle: widget.citiesOnly ? 'Escreve a localidade.' : 'Escreve o nome do espaço ou a morada.'),
          const SizedBox(height: 16),
          TextField(
            controller: _query,
            autofocus: true,
            onChanged: _onChanged,
            textInputAction: TextInputAction.search,
            style: const TextStyle(fontSize: 16, color: AppTheme.ink),
            decoration: InputDecoration(
              hintText: widget.citiesOnly ? 'Ex.: Lisboa' : 'Ex.: Quinta da Ribafria, Sintra',
              hintStyle: const TextStyle(fontSize: 16, color: AppTheme.inkMuted),
              prefixIcon: const Icon(Hi.magnifyingGlass, size: 18, color: AppTheme.inkMuted),
              suffixIcon: _query.text.isEmpty
                  ? null
                  : IconButton(
                      tooltip: 'Limpar',
                      icon: const Icon(Hi.xMark, size: 16, color: AppTheme.ink),
                      onPressed: () {
                        _query.clear();
                        setState(() => _results = const []);
                      },
                    ),
              filled: true,
              fillColor: AppTheme.background,
              contentPadding: const EdgeInsets.symmetric(vertical: 16),
              border: OutlineInputBorder(borderRadius: BorderRadius.circular(26), borderSide: BorderSide.none),
              enabledBorder: OutlineInputBorder(borderRadius: BorderRadius.circular(26), borderSide: BorderSide.none),
              focusedBorder: OutlineInputBorder(
                  borderRadius: BorderRadius.circular(26), borderSide: const BorderSide(color: AppTheme.ink, width: 1.5)),
            ),
          ),
          const SizedBox(height: 8),
          SnappyTap(
            onTap: _loading ? null : _useMyLocation,
            child: SizedBox(
              height: 52,
              child: Row(children: [
                Container(
                  width: 36,
                  height: 36,
                  alignment: Alignment.center,
                  decoration: const BoxDecoration(color: Color(0xFFE6EDE1), shape: BoxShape.circle),
                  child: const Icon(Hi.paperAirplane, size: 16, color: Color(0xFF3F7A4F)),
                ),
                const SizedBox(width: 12),
                const Text('Usar a minha localização',
                    style: TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ]),
            ),
          ),
          if (widget.shortcut != null)
            SnappyTap(
              onTap: () => Navigator.of(context).pop(PickedAddress(name: widget.shortcut!.$2, city: widget.shortcut!.$2)),
              child: SizedBox(
                height: 52,
                child: Row(children: [
                  Container(
                    width: 36,
                    height: 36,
                    alignment: Alignment.center,
                    decoration: const BoxDecoration(color: AppTheme.background, shape: BoxShape.circle),
                    child: const Icon(Hi.home, size: 16, color: AppTheme.inkMuted),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                      Text(widget.shortcut!.$1,
                          style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                      Text(widget.shortcut!.$2, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
                    ]),
                  ),
                ]),
              ),
            ),
          if (_error != null)
            Padding(
              padding: const EdgeInsets.only(top: 4),
              child: Text(_error!, style: const TextStyle(fontSize: 14, color: AppStatusColors.declined)),
            ),
          const SizedBox(height: 8),
          if (_results.isNotEmpty)
            const Padding(
              padding: EdgeInsets.only(bottom: 4),
              child: Text('SUGESTÕES',
                  style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
            ),
          Expanded(
            child: _loading && _results.isEmpty
                ? const Center(child: CircularProgressIndicator())
                : ListView.builder(
                    itemCount: _results.length,
                    itemBuilder: (context, i) {
                      final r = _results[i];
                      return SnappyTap(
                        onTap: () => _choose(r),
                        child: Container(
                          constraints: const BoxConstraints(minHeight: 64),
                          decoration: BoxDecoration(
                            border: i == 0 ? null : const Border(top: BorderSide(color: Color(0xFFD9D9D9))),
                          ),
                          child: Row(children: [
                            Container(
                              width: 36,
                              height: 36,
                              alignment: Alignment.center,
                              decoration: const BoxDecoration(color: AppTheme.background, shape: BoxShape.circle),
                              child: const Icon(Hi.mapPin, size: 18, color: AppTheme.inkMuted),
                            ),
                            const SizedBox(width: 12),
                            Expanded(
                              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                                Text(r.name,
                                    maxLines: 1,
                                    overflow: TextOverflow.ellipsis,
                                    style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                if (r.secondary.isNotEmpty)
                                  Text(r.secondary,
                                      maxLines: 1,
                                      overflow: TextOverflow.ellipsis,
                                      style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
                              ]),
                            ),
                          ]),
                        ),
                      );
                    },
                  ),
          ),
          _attribution,
        ]),
      ),
    );
  }

  Widget _confirmStep(BuildContext context) {
    final p = _picked!;
    Widget row(String label, String value, {bool first = false}) => Container(
          constraints: const BoxConstraints(minHeight: 44),
          decoration: BoxDecoration(border: first ? null : const Border(top: BorderSide(color: Color(0xFFD9D9D9)))),
          child: Row(children: [
            Text(label, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
            const Spacer(),
            Text(value, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          ]),
        );
    final rows = <(String, String)>[
      if (p.city.isNotEmpty) ('Localidade', p.city),
      if (p.postalCode.isNotEmpty) ('Código postal', p.postalCode),
      if (p.region.isNotEmpty) ('Distrito', p.region),
    ];
    return SingleChildScrollView(
      padding: const EdgeInsets.all(20),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        _header('Confirmar local'),
        const SizedBox(height: 16),
        ClipRRect(
          borderRadius: BorderRadius.circular(22),
          child: VenueMap(
            label: p.name,
            address: p.address.isNotEmpty ? p.address : p.label,
            latitude: p.latitude,
            longitude: p.longitude,
            height: 180,
          ),
        ),
        const SizedBox(height: 12),
        Text(p.name, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        if (p.secondary.isNotEmpty || p.address.isNotEmpty)
          Text(p.secondary.isNotEmpty ? p.secondary : p.address,
              style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
        if (rows.isNotEmpty) ...[
          const SizedBox(height: 12),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
            child: Column(children: [
              for (var i = 0; i < rows.length; i++) row(rows[i].$1, rows[i].$2, first: i == 0),
            ]),
          ),
        ],
        const SizedBox(height: 16),
        SizedBox(
          height: 52,
          child: FilledButton(
            onPressed: () => Navigator.of(context).pop(p),
            style: FilledButton.styleFrom(
              backgroundColor: AppTheme.ink,
              foregroundColor: Colors.white,
              shape: const StadiumBorder(),
              textStyle: const TextStyle(
                  fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 16, fontWeight: FontWeight.w700),
            ),
            child: const Text('Usar este local'),
          ),
        ),
        const SizedBox(height: 8),
        Center(
          child: SnappyTap(
            onTap: () => setState(() => _picked = null),
            child: const Padding(
              padding: EdgeInsets.all(8),
              child: Text('Procurar outro', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ),
          ),
        ),
        const SizedBox(height: 4),
        _attribution,
      ]),
    );
  }
}

/// Campo de local para formulários: parece uma caixa de texto em pílula e,
/// ao tocar, abre o seletor de moradas. Guarda o texto em [controller]
/// (o mesmo que antes se escrevia à mão) e devolve o resto em [onPicked].
class AddressField extends StatelessWidget {
  final TextEditingController controller;
  final String? label;
  final String hint;
  final String pickerTitle;
  final bool citiesOnly;
  final ValueChanged<PickedAddress>? onPicked;
  final Color? fill;

  /// Guarda a morada inteira («Rua X 12, 2705-001 Sintra») em vez do nome.
  final bool fullAddress;

  const AddressField({
    super.key,
    required this.controller,
    this.label,
    this.hint = 'Escolher local',
    this.pickerTitle = 'Onde é?',
    this.citiesOnly = false,
    this.onPicked,
    this.fill,
    this.fullAddress = false,
  });

  Future<void> _open(BuildContext context) async {
    final picked = await showAddressPicker(
      context,
      title: pickerTitle,
      initialQuery: controller.text.trim().isEmpty ? null : controller.text.trim(),
      citiesOnly: citiesOnly,
    );
    if (picked == null) return;
    controller.text = citiesOnly
        ? (picked.city.isNotEmpty ? picked.city : picked.name)
        : fullAddress && picked.address.isNotEmpty
            ? picked.address
            : picked.label;
    onPicked?.call(picked);
  }

  @override
  Widget build(BuildContext context) => Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: [
        if (label != null)
          Padding(
            padding: const EdgeInsets.only(bottom: 8),
            child: Text(label!.toUpperCase(),
                style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, letterSpacing: 2, color: AppTheme.inkMuted)),
          ),
        Semantics(
          button: true,
          label: label ?? hint,
          child: SnappyTap(
            onTap: () => _open(context),
            child: Container(
              height: 52,
              padding: const EdgeInsets.fromLTRB(16, 0, 14, 0),
              decoration: BoxDecoration(color: fill ?? Colors.white, borderRadius: BorderRadius.circular(26)),
              child: Row(children: [
                const Icon(Hi.mapPin, size: 18, color: AppTheme.inkMuted),
                const SizedBox(width: 10),
                Expanded(
                  child: ListenableBuilder(
                    listenable: controller,
                    builder: (context, _) => Text(
                      controller.text.trim().isEmpty ? hint : controller.text.trim(),
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(fontSize: 16, color: controller.text.trim().isEmpty ? AppTheme.inkMuted : AppTheme.ink),
                    ),
                  ),
                ),
                const Icon(Hi.chevronRight, size: 16, color: AppTheme.inkMuted),
              ]),
            ),
          ),
        ),
      ]);
}
