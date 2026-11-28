import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/budget/booked_partners.dart';
import '../../../core/partners/partner_providers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/hero_icons.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/step_sheet_head.dart';
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';

/// «Já têm tratado?» dentro das Reservas (pedido 2026-11-23: antes era a
/// página «Serviços tratados» à parte). Por categoria, o organizador diz se
/// ainda precisa, já tratou (na app ou fora) ou dispensa — `já tratámos` e
/// `dispensamos` deixam de ser sugeridos (`wedding_service_preferences`,
/// 039_task_engine.sql). Uma linha por categoria com o estado e a seta;
/// tocar abre um popup com as três opções.
class ServicePreferencesFrame extends ConsumerStatefulWidget {
  final String eventId;
  const ServicePreferencesFrame({super.key, required this.eventId});

  @override
  ConsumerState<ServicePreferencesFrame> createState() => _ServicePreferencesFrameState();
}

class _ServicePreferencesFrameState extends ConsumerState<ServicePreferencesFrame> {
  bool _loading = true;
  final Map<String, String> _pref = {};
  final Map<String, String> _external = {};

  @override
  void initState() {
    super.initState();
    _load();
  }

  @override
  void didUpdateWidget(covariant ServicePreferencesFrame old) {
    super.didUpdateWidget(old);
    if (old.eventId != widget.eventId) {
      _pref.clear();
      _external.clear();
      _loading = true;
      _load();
    }
  }

  Future<void> _load() async {
    try {
      final rows = await supabase
          .from('wedding_service_preferences')
          .select('partner_category_slug, preference, external_partner_name')
          .eq('wedding_id', widget.eventId);
      for (final r in (rows as List).cast<Map<String, dynamic>>()) {
        final slug = r['partner_category_slug'] as String;
        _pref[slug] = r['preference'] as String;
        final name = r['external_partner_name'] as String?;
        if (name != null && name.isNotEmpty) _external[slug] = name;
      }
    } catch (_) {
      // Sem ligação: todas como «Por tratar».
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  Future<void> _save(String slug, String preference, String? name) async {
    final n = preference == 'already_booked' && name != null && name.trim().isNotEmpty ? name.trim() : null;
    setState(() {
      _pref[slug] = preference;
      if (n == null) {
        _external.remove(slug);
      } else {
        _external[slug] = n;
      }
    });
    await supabase.from('wedding_service_preferences').upsert({
      'wedding_id': widget.eventId,
      'partner_category_slug': slug,
      'preference': preference,
      'external_partner_name': n,
      'updated_at': DateTime.now().toIso8601String(),
    });
    ref.read(taskEngineControllerProvider.notifier).recompute();
  }

  Future<void> _open(String slug, String label, List<String> inApp) async {
    final picked = await showIslandSheet<(String, String?)>(
      context: context,
      isScrollControlled: true,
      builder: (_) => _PreferenceSheet(
        label: label,
        preference: _pref[slug] ?? 'needed',
        externalName: _external[slug],
        askName: inApp.isEmpty,
      ),
    );
    if (picked == null || !mounted) return;
    try {
      await _save(slug, picked.$1, picked.$2);
    } catch (_) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar. Tenta outra vez.')));
    }
  }

  @override
  Widget build(BuildContext context) {
    final categories = ref.watch(partnerCategoryOptionsProvider).value;
    final booked = ref.watch(bookedPartnersBySlugProvider(widget.eventId)).value ?? const <String, List<String>>{};
    if (categories == null || _loading) return const SizedBox.shrink();

    String stateOf(String slug) {
      final p = _pref[slug];
      if (p != null) return p;
      return (booked[slug] ?? const []).isNotEmpty ? 'already_booked' : 'needed';
    }

    final skipped = categories.where((c) => stateOf(c.slug) == 'not_needed').length;
    final done = categories.where((c) => stateOf(c.slug) == 'already_booked').length;
    final total = categories.length - skipped;

    return SectionFrame(
      title: 'Já têm tratado? · $done de $total',
      children: [
        const FrameNote('Diz-nos o que já resolveram (na app ou fora dela) e deixamos de o sugerir.'),
        const SizedBox(height: 4),
        for (final (i, c) in categories.indexed) ...[
          if (i > 0) const Divider(height: 1, thickness: 1, color: AppTheme.line),
          _PreferenceRow(
            label: c.label,
            meta: switch (stateOf(c.slug)) {
              'already_booked' => (booked[c.slug] ?? const []).isNotEmpty
                  ? 'Na app · ${booked[c.slug]!.join(', ')}'
                  : _external[c.slug] != null
                      ? 'Fora da app · ${_external[c.slug]}'
                      : 'Fora da app',
              'not_needed' => 'Não precisam',
              _ => 'Ainda precisam',
            },
            tag: switch (stateOf(c.slug)) {
              'already_booked' => const KitTag('Tratado'),
              'not_needed' => const KitTag('Dispensado', kind: KitTagKind.neutral),
              _ => const KitTag('Por tratar', kind: KitTagKind.pending),
            },
            onTap: () => _open(c.slug, c.label, booked[c.slug] ?? const []),
          ),
        ],
      ],
    );
  }
}

/// Linha: nome 16, meta 13, etiqueta e seta à direita.
class _PreferenceRow extends StatelessWidget {
  final String label;
  final String meta;
  final Widget tag;
  final VoidCallback onTap;
  const _PreferenceRow({required this.label, required this.meta, required this.tag, required this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Container(
          constraints: const BoxConstraints(minHeight: 56),
          padding: const EdgeInsets.symmetric(vertical: 10),
          color: Colors.transparent,
          child: Row(children: [
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                Text(label, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 2),
                Text(meta,
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
            const SizedBox(width: 10),
            tag,
            const SizedBox(width: 6),
            const Icon(Hi.chevronRight, size: 18, color: AppTheme.inkMuted),
          ]),
        ),
      );
}

/// Popup (molde do §6.3): título, grupo com as três opções (círculo verde
/// com o visto na escolhida), «Com quem?» quando foi tratado fora da app e
/// «Guardar» preto 52.
class _PreferenceSheet extends StatefulWidget {
  final String label;
  final String preference;
  final String? externalName;
  final bool askName;
  const _PreferenceSheet({required this.label, required this.preference, this.externalName, required this.askName});

  @override
  State<_PreferenceSheet> createState() => _PreferenceSheetState();
}

class _PreferenceSheetState extends State<_PreferenceSheet> {
  late String _value = widget.preference;
  late final _name = TextEditingController(text: widget.externalName ?? '');

  @override
  void dispose() {
    _name.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    const options = [
      ('needed', 'Ainda precisamos', 'Continuamos a sugerir parceiros.'),
      ('already_booked', 'Já tratámos', 'Na app ou fora dela.'),
      ('not_needed', 'Não precisamos', 'Deixamos de sugerir.'),
    ];
    return SafeArea(
      top: false,
      child: Padding(
        padding: EdgeInsets.fromLTRB(20, 20, 20, 20 + MediaQuery.viewInsetsOf(context).bottom),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: [
          StepSheetHead(title: widget.label, subtitle: 'Já têm isto tratado?'),
          const SizedBox(height: 16),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 4),
            decoration: BoxDecoration(color: AppTheme.background, borderRadius: BorderRadius.circular(22)),
            child: Column(children: [
              for (final (i, (value, title, sub)) in options.indexed) ...[
                if (i > 0) const Divider(height: 1, thickness: 1, color: Color(0xFFD9D9D9)),
                SnappyTap(
                  onTap: () => setState(() => _value = value),
                  child: Container(
                    constraints: const BoxConstraints(minHeight: 56),
                    color: Colors.transparent,
                    padding: const EdgeInsets.symmetric(vertical: 10),
                    child: Row(children: [
                      Expanded(
                        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                          Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          const SizedBox(height: 2),
                          Text(sub, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                        ]),
                      ),
                      _Check(selected: _value == value),
                    ]),
                  ),
                ),
              ],
            ]),
          ),
          if (_value == 'already_booked' && widget.askName) ...[
            const SizedBox(height: 16),
            const Text('COM QUEM? (OPCIONAL)',
                style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
            const SizedBox(height: 8),
            Container(
              height: 52,
              padding: const EdgeInsets.symmetric(horizontal: 18),
              alignment: Alignment.centerLeft,
              decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(26), border: Border.all(color: AppTheme.ink, width: 1.5)),
              child: TextField(
                controller: _name,
                style: const TextStyle(fontSize: 15, color: AppTheme.ink),
                decoration: const InputDecoration.collapsed(hintText: 'Nome da empresa'),
              ),
            ),
          ],
          const SizedBox(height: 20),
          SizedBox(
            height: 52,
            child: PressScale(child: FilledButton(
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.action,
                foregroundColor: Colors.white,
                shape: const StadiumBorder(),
                textStyle: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700),
              ),
              onPressed: () => Navigator.of(context).pop((_value, _name.text)),
              child: const Text('Guardar'),
            )),
          ),
        ]),
      ),
    );
  }
}

class _Check extends StatelessWidget {
  final bool selected;
  const _Check({required this.selected});

  @override
  Widget build(BuildContext context) => AnimatedContainer(
        duration: const Duration(milliseconds: 160),
        width: 24,
        height: 24,
        decoration: BoxDecoration(
          shape: BoxShape.circle,
          color: selected ? AppTheme.accentOliveDark : Colors.white,
          border: selected ? null : Border.all(color: const Color(0xFFCFCFCF), width: 1.5),
        ),
        child: selected ? const Icon(Hi.check, size: 14, color: Colors.white) : null,
      );
}
