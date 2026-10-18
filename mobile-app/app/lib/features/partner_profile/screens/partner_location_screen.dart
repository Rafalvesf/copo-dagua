import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/partner_profile/partner_location.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// "Localização" do parceiro — usar a localização atual, procurar a
/// morada ou escrevê-la à mão. Pedido do utilizador (2026-10-17).
class PartnerLocationScreen extends ConsumerStatefulWidget {
  const PartnerLocationScreen({super.key});

  @override
  ConsumerState<PartnerLocationScreen> createState() => _PartnerLocationScreenState();
}

class _PartnerLocationScreenState extends ConsumerState<PartnerLocationScreen> {
  final _address = TextEditingController();
  final _postal = TextEditingController();
  final _city = TextEditingController();
  final _region = TextEditingController();
  final _search = TextEditingController();
  double? _lat;
  double? _lng;
  bool _loaded = false;
  bool _locating = false;
  bool _saving = false;
  Timer? _debounce;
  List<(String, PartnerLocation)> _results = const [];

  @override
  void dispose() {
    _address.dispose();
    _postal.dispose();
    _city.dispose();
    _region.dispose();
    _search.dispose();
    _debounce?.cancel();
    super.dispose();
  }

  void _fill(PartnerLocation l) {
    setState(() {
      _address.text = l.addressLine;
      _postal.text = l.postalCode;
      _city.text = l.city;
      _region.text = l.region;
      _lat = l.latitude;
      _lng = l.longitude;
      _results = const [];
    });
  }

  Future<void> _useCurrent() async {
    setState(() => _locating = true);
    try {
      final pos = await currentPosition();
      final loc = await reverseGeocode(pos.latitude, pos.longitude);
      if (!mounted) return;
      _fill(loc);
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(content: Text('Localização encontrada. Confirma a morada antes de guardar.')),
      );
    } catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(
        SnackBar(content: Text(e is LocationException ? e.message : 'Não foi possível obter a localização.')),
      );
    } finally {
      if (mounted) setState(() => _locating = false);
    }
  }

  void _onSearch(String q) {
    _debounce?.cancel();
    _debounce = Timer(const Duration(milliseconds: 450), () async {
      try {
        final r = await searchAddress(q);
        if (mounted) setState(() => _results = r);
      } catch (_) {}
    });
  }

  Future<void> _save() async {
    final id = ref.read(authControllerProvider).profile?.id;
    if (id == null) return;
    setState(() => _saving = true);
    var msg = 'Localização guardada.';
    try {
      await savePartnerLocation(
        id,
        PartnerLocation(
          addressLine: _address.text,
          postalCode: _postal.text,
          city: _city.text,
          region: _region.text,
          latitude: _lat,
          longitude: _lng,
        ),
      );
      ref.invalidate(partnerLocationProvider);
    } catch (_) {
      msg = 'Não foi possível guardar. Tenta outra vez.';
    }
    if (!mounted) return;
    setState(() => _saving = false);
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    if (msg == 'Localização guardada.') Navigator.of(context).maybePop();
  }

  @override
  Widget build(BuildContext context) {
    final async = ref.watch(partnerLocationProvider);
    if (!_loaded && async.hasValue) {
      _loaded = true;
      final l = async.value;
      if (l != null) {
        _address.text = l.addressLine;
        _postal.text = l.postalCode;
        _city.text = l.city;
        _region.text = l.region;
        _lat = l.latitude;
        _lng = l.longitude;
      }
    }
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: ListView(
          padding: const EdgeInsets.only(bottom: 40),
          children: [
            const PageHeader(title: 'Localização', centered: true),
            Padding(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const Text(
                    'Onde fica o teu negócio? Os clientes veem a zona e a distância ao evento deles.',
                    style: TextStyle(fontSize: AppFontSize.base, height: 1.5, color: AppTheme.inkMuted),
                  ),
                  const SizedBox(height: 18),
                  SnappyTap(
                    onTap: _locating ? () {} : _useCurrent,
                    child: Container(
                      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 14),
                      decoration: BoxDecoration(
                        color: const Color(0xFFF6F8F2),
                        borderRadius: BorderRadius.circular(AppRadius.md),
                        border: Border.all(color: AppTheme.accentOliveDark, width: 1.5),
                      ),
                      child: Row(
                        children: [
                          _locating
                              ? const SizedBox(width: 22, height: 22, child: CircularProgressIndicator(strokeWidth: 2.5))
                              : Icon(Icons.my_location, color: AppTheme.accentOliveDark),
                          const SizedBox(width: 12),
                          const Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text('Usar a minha localização atual', style: TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                Text('Preenche a morada automaticamente', style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 18),
                  const Row(
                    children: [
                      Expanded(child: Divider(color: AppTheme.borderMuted)),
                      Padding(
                        padding: EdgeInsets.symmetric(horizontal: 10),
                        child: Text('ou procura a morada', style: TextStyle(fontSize: AppFontSize.sm, color: Color(0xFF8F8B84))),
                      ),
                      Expanded(child: Divider(color: AppTheme.borderMuted)),
                    ],
                  ),
                  const SizedBox(height: 12),
                  TextField(
                    controller: _search,
                    onChanged: _onSearch,
                    decoration: const InputDecoration(
                      hintText: 'Rua, localidade ou código postal',
                      prefixIcon: Icon(Icons.search),
                    ),
                  ),
                  for (final (label, loc) in _results)
                    SnappyTap(
                      onTap: () {
                        _search.clear();
                        _fill(loc);
                      },
                      child: Padding(
                        padding: const EdgeInsets.symmetric(vertical: 10),
                        child: Row(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: [
                            const Icon(Icons.place_outlined, size: 20, color: AppTheme.inkMuted),
                            const SizedBox(width: 10),
                            Expanded(child: Text(label, style: const TextStyle(fontSize: AppFontSize.base, color: AppTheme.ink))),
                          ],
                        ),
                      ),
                    ),
                  const SizedBox(height: 20),
                  const Text('MORADA', style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: Color(0xFF8F8B84))),
                  const SizedBox(height: 10),
                  AuthTextField(label: 'Rua e número', controller: _address),
                  const SizedBox(height: 12),
                  Row(
                    children: [
                      SizedBox(width: 130, child: AuthTextField(label: 'Código postal', controller: _postal)),
                      const SizedBox(width: 10),
                      Expanded(child: AuthTextField(label: 'Localidade', controller: _city)),
                    ],
                  ),
                  const SizedBox(height: 12),
                  AuthTextField(label: 'Distrito / concelho', controller: _region),
                  if (_lat != null && _lng != null) ...[
                    const SizedBox(height: 10),
                    Row(
                      children: [
                        Icon(Icons.check_circle, size: 16, color: AppTheme.accentOliveDark),
                        const SizedBox(width: 6),
                        Text(
                          'Localização no mapa definida (${_lat!.toStringAsFixed(4)}, ${_lng!.toStringAsFixed(4)})',
                          style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
                        ),
                      ],
                    ),
                  ],
                  if (async.hasValue && async.value == null) ...[
                    const SizedBox(height: 10),
                    const Text(
                      'A base de dados ainda não tem os campos de localização (migração 080).',
                      style: TextStyle(fontSize: AppFontSize.sm, color: Color(0xFFB4232C)),
                    ),
                  ],
                  const SizedBox(height: 24),
                  PrimaryButton(label: 'Guardar localização', loading: _saving, onPressed: _save),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}
