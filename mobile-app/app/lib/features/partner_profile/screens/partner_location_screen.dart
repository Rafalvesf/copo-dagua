import 'package:copo_dagua_app/shared/hero_icons.dart';

import 'package:flutter/material.dart';
import '../../../shared/widgets/permissions_step.dart' show ensurePermission, AppPermission;
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/partner_profile/partner_location.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/address_picker.dart' show AddressField;

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

  @override
  void dispose() {
    _address.dispose();
    _postal.dispose();
    _city.dispose();
    _region.dispose();
    _search.dispose();
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
    });
  }

  Future<void> _useCurrent() async {
    // Pede a localização outra vez, se for preciso (2026-10-25).
    if (!await ensurePermission(context, AppPermission.location)) return;
    if (!mounted) return;
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
      backgroundColor: AppTheme.background,
      body: SafeArea(top: false, 
        child: ListView(
          padding: ( const EdgeInsets.only(bottom: 40)).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
          children: [
            const PageHeader(title: 'Localização', centered: true),
            Padding(
              padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  SnappyTap(
                    onTap: _locating ? () {} : _useCurrent,
                    child: Container(
                      // Mockup «Páginas do parceiro» → Localização: linha branca.
                      padding: const EdgeInsets.fromLTRB(16, 14, 12, 14),
                      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
                      child: Row(
                        children: [
                          const Expanded(
                            child: Column(
                              crossAxisAlignment: CrossAxisAlignment.start,
                              children: [
                                Text('Usar a minha localização', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                Text('Preenche a morada automaticamente.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                              ],
                            ),
                          ),
                          _locating
                              ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2))
                              : const Icon(Hi.chevronRight, size: 16, color: AppTheme.inkMuted),
                        ],
                      ),
                    ),
                  ),
                  const SizedBox(height: 18),
                  const Center(
                    child: Text('ou procura a morada', style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                  ),
                  const SizedBox(height: 12),
                  // Seletor de moradas com o Google (2026-11-20).
                  AddressField(
                    controller: _search,
                    hint: 'Rua, localidade ou código postal',
                    pickerTitle: 'Morada do negócio',
                    onPicked: (p) => _fill(p.toPartnerLocation()),
                  ),
                  const SizedBox(height: 20),
                  const Text('MORADA', style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: Color(0xFF6E6A63))),
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
                        Icon(Hi.checkCircle, size: 16, color: AppTheme.accentOliveDark),
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
                    // Antes mostrava uma mensagem técnica ("migração 080") ao
                    // parceiro; agora só uma indicação neutra.
                    const Text(
                      'Ainda não definiste a morada do teu espaço.',
                      style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
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
