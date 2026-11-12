import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/partners/cancellation_rule.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/auth_ui.dart';
import '../../../shared/widgets/page_header.dart';

/// "Regras de cancelamento" do parceiro (migração 173). Começa na regra
/// da categoria e o parceiro pode trocá-la quando quiser.
class PartnerCancellationScreen extends ConsumerStatefulWidget {
  const PartnerCancellationScreen({super.key});

  @override
  ConsumerState<PartnerCancellationScreen> createState() => _PartnerCancellationScreenState();
}

class _PartnerCancellationScreenState extends ConsumerState<PartnerCancellationScreen> {
  static const _hourChoices = [2, 6, 24, 48, 168, 720];

  late final _profile = ref.read(authControllerProvider).profile!;
  late final String? _slug =
      slugForCategoryLabel(_profile.categoryLabels.isEmpty ? null : _profile.categoryLabels.first);
  final _note = TextEditingController();
  CancellationKind _kind = CancellationKind.hours;
  int _hours = 2;
  bool _loaded = false;
  bool _saving = false;

  @override
  void initState() {
    super.initState();
    ref.read(partnerCancellationProvider((_profile.id, _slug)).future).then((r) {
      if (!mounted) return;
      setState(() {
        _kind = r.kind;
        _hours = r.hours ?? 2;
        _note.text = r.note;
        _loaded = true;
      });
    });
  }

  @override
  void dispose() {
    _note.dispose();
    super.dispose();
  }

  Future<void> _save() async {
    if (_kind == CancellationKind.partnerTerms && _note.text.trim().isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Escreve as tuas condições.')));
      return;
    }
    setState(() => _saving = true);
    final rule = CancellationRule(_kind, hours: _hours, note: _note.text.trim());
    var ok = true;
    try {
      await supabase.from('partner_profiles').update({
        // Regra base = sem regra própria (null).
        'cancellation_rule': rule.dbValue,
        'cancellation_hours': _kind == CancellationKind.hours ? _hours : null,
        'cancellation_note': rule.note.isEmpty || _kind == CancellationKind.standard ? null : rule.note,
      }).eq('id', _profile.id);
      ref.invalidate(partnerCancellationProvider((_profile.id, _slug)));
    } catch (_) {
      ok = false;
    }
    if (!mounted) return;
    setState(() => _saving = false);
    ScaffoldMessenger.of(context).showSnackBar(
      SnackBar(content: Text(ok ? 'Regras guardadas.' : 'Não foi possível guardar. Tenta outra vez.')),
    );
    if (ok) Navigator.of(context).maybePop();
  }

  Widget _option(CancellationKind kind, String title) {
    final selected = _kind == kind;
    return RadioListTile<CancellationKind>(
      value: kind,
      activeColor: AppTheme.accentOliveDark,
      contentPadding: EdgeInsets.zero,
      title: Text(title,
          style: TextStyle(fontSize: AppFontSize.base + 1, fontWeight: selected ? FontWeight.w700 : FontWeight.w600, color: AppTheme.ink)),
    );
  }

  @override
  Widget build(BuildContext context) {
    final preview = CancellationRule(_kind, hours: _hours, note: _note.text.trim()).summary(_slug);
    return Scaffold(
      backgroundColor: AppTheme.background,
      body: SafeArea(top: false, 
        child: ListView(
          padding: ( const EdgeInsets.only(bottom: 40)).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
          children: [
            const PageHeader(title: 'Regras de cancelamento', centered: true),
            if (!_loaded)
              const Padding(padding: EdgeInsets.all(40), child: Center(child: CircularProgressIndicator()))
            else
              Padding(
                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    Container(
                      padding: const EdgeInsets.symmetric(horizontal: 12, vertical: 4),
                      decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.lg)),
                      child: RadioGroup<CancellationKind>(
                        groupValue: _kind,
                        onChanged: (v) => setState(() => _kind = v ?? _kind),
                        child: Column(children: [
                        _option(CancellationKind.standard, 'Regra base da À Nossa!'),
                        const Divider(height: 1, color: AppTheme.borderMuted),
                        _option(CancellationKind.hours, 'Grátis até um prazo antes'),
                        const Divider(height: 1, color: AppTheme.borderMuted),
                        _option(CancellationKind.untilPurchase, 'Até à compra; depois, segundo as minhas condições'),
                        const Divider(height: 1, color: AppTheme.borderMuted),
                        _option(CancellationKind.partnerTerms, 'Segundo as minhas condições'),
                      ]),
                      ),
                    ),
                    if (_kind == CancellationKind.hours) ...[
                      const SizedBox(height: 18),
                      const Text('Até quanto tempo antes',
                          style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                      const SizedBox(height: 8),
                      Wrap(spacing: 8, runSpacing: 8, children: [
                        for (final h in _hourChoices)
                          ChoiceChip(
                            label: Text(CancellationRule.hoursLabel(h)),
                            selected: _hours == h,
                            onSelected: (_) => setState(() => _hours = h),
                            selectedColor: AppTheme.accentTint,
                            showCheckmark: false,
                          ),
                      ]),
                    ],
                    if (_kind == CancellationKind.untilPurchase || _kind == CancellationKind.partnerTerms) ...[
                      const SizedBox(height: 18),
                      const Text('As tuas condições',
                          style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                      const SizedBox(height: 8),
                      TextField(
                        controller: _note,
                        maxLines: 3,
                        maxLength: 500,
                        onChanged: (_) => setState(() {}),
                        decoration: InputDecoration(
                          hintText: 'Ex.: Grátis até 7 dias antes; depois, fica o sinal.',
                          border: OutlineInputBorder(borderRadius: BorderRadius.circular(14)),
                        ),
                      ),
                    ],
                    const SizedBox(height: 20),
                    Container(
                      padding: const EdgeInsets.all(14),
                      decoration: BoxDecoration(color: AppTheme.accentTint, borderRadius: BorderRadius.circular(14)),
                      child: Row(children: [
                        Icon(Hi.eye, size: 18, color: AppTheme.accentOliveDark),
                        const SizedBox(width: 10),
                        Expanded(child: Text(preview, style: const TextStyle(fontSize: 13.5, color: AppTheme.ink))),
                      ]),
                    ),
                    const SizedBox(height: 28),
                    AuthPrimaryButton(label: 'Guardar', loading: _saving, onPressed: _save),
                  ],
                ),
              ),
          ],
        ),
      ),
    );
  }
}
