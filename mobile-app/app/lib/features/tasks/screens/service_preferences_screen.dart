import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/booked_partner_badge.dart';
import 'package:copo_dagua_app/core/budget/booked_partners.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/partners/partner_providers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// "O que já têm tratado?" — pedido explícito do utilizador (RN37/38
/// do motor de tarefas): por categoria real, o casal diz se ainda
/// precisa, já tem reservado (dentro ou fora da app) ou não precisa.
/// `não precisamos`/`já tratámos` impedem o motor de continuar a
/// sugerir essa categoria (`wedding_service_preferences`,
/// 039_task_engine.sql).
class ServicePreferencesScreen extends ConsumerStatefulWidget {
  const ServicePreferencesScreen({super.key});

  @override
  ConsumerState<ServicePreferencesScreen> createState() => _ServicePreferencesScreenState();
}

class _ServicePreferencesScreenState extends ConsumerState<ServicePreferencesScreen> {
  bool _loading = true;
  final Map<String, String> _preferences = {};
  final Map<String, TextEditingController> _externalNameControllers = {};

  @override
  void initState() {
    super.initState();
    Future.microtask(_load);
  }

  @override
  void dispose() {
    for (final c in _externalNameControllers.values) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _load() async {
    final weddingId = ref.read(weddingControllerProvider).wedding?.id;
    // Antes: sem casamento carregado ou com um erro de rede, o ecrã
    // ficava a carregar para sempre (revisão 2026-10-17).
    if (weddingId == null) {
      ref.listenManual(weddingControllerProvider.select((s) => s.wedding?.id), (prev, next) {
        if (next != null && _loading) _load();
      });
      return;
    }
    try {
      final rows = await supabase
          .from('wedding_service_preferences')
          .select('partner_category_slug, preference, external_partner_name')
          .eq('wedding_id', weddingId);
      for (final r in (rows as List).cast<Map<String, dynamic>>()) {
        final slug = r['partner_category_slug'] as String;
        _preferences[slug] = r['preference'] as String;
        final name = r['external_partner_name'] as String?;
        if (name != null) {
          _externalNameControllers[slug] = TextEditingController(text: name);
        }
      }
    } catch (_) {
      // Mostra as categorias com "Ainda preciso" por omissão.
    } finally {
      if (mounted) setState(() => _loading = false);
    }
  }

  Future<void> _setPreference(String slug, String preference) async {
    final weddingId = ref.read(weddingControllerProvider).wedding?.id;
    if (weddingId == null) return;
    setState(() => _preferences[slug] = preference);
    await supabase.from('wedding_service_preferences').upsert({
      'wedding_id': weddingId,
      'partner_category_slug': slug,
      'preference': preference,
      'external_partner_name': preference == 'already_booked'
          ? _externalNameControllers[slug]?.text.trim()
          : null,
      'updated_at': DateTime.now().toIso8601String(),
    });
    ref.read(taskEngineControllerProvider.notifier).recompute();
  }

  Future<void> _saveExternalName(String slug) async {
    final weddingId = ref.read(weddingControllerProvider).wedding?.id;
    if (weddingId == null || _preferences[slug] != 'already_booked') return;
    await supabase.from('wedding_service_preferences').upsert({
      'wedding_id': weddingId,
      'partner_category_slug': slug,
      'preference': 'already_booked',
      'external_partner_name': _externalNameControllers[slug]?.text.trim(),
      'updated_at': DateTime.now().toIso8601String(),
    });
  }

  @override
  Widget build(BuildContext context) {
    final categoriesAsync = ref.watch(partnerCategoryOptionsProvider);
    final weddingId = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
    final booked = weddingId == null ? const <String, List<String>>{} : (ref.watch(bookedPartnersBySlugProvider(weddingId)).value ?? const {});

    // Mockup «Páginas do evento» → Já têm tratado? (2026-11-14).
    return GradientScaffold(
      background: AppBackground.feed,
      body: KitPage(
        pinnedBack: true,
        bottom: 60,
        children: [
          const KitHeader(),
          const KitTitle('Já têm tratado?', subtitle: 'Ajuda-nos a não sugerir o que já resolveram.'),
          categoriesAsync.when(
            loading: () => const Padding(
              padding: EdgeInsets.only(top: 40),
              child: Center(child: CircularProgressIndicator()),
            ),
            error: (err, st) => const Padding(
              padding: EdgeInsets.only(top: 20),
              child: Text('Não foi possível carregar as categorias.'),
            ),
            data: (categories) {
              if (_loading) {
                return const Padding(padding: EdgeInsets.only(top: 40), child: Center(child: CircularProgressIndicator()));
              }
              final done = categories.where((c) => _preferences[c.slug] == 'already_booked').length;
              final skipped = categories.where((c) => _preferences[c.slug] == 'not_needed').length;
              final needed = categories.length - done - skipped;
              final total = categories.length - skipped;
              return Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  KitSummary(
                    kicker: 'Serviços tratados',
                    value: '$done',
                    unit: 'de $total ${total == 1 ? 'serviço' : 'serviços'}',
                    progress: total == 0 ? 0 : done / total,
                    footer: ['$needed por tratar', if (skipped > 0) '$skipped dispensados'].join(' · '),
                  ),
                  const KitSection('Serviços'),
                  for (final category in categories) ...[
                    _CategoryPreferenceCard(
                      slug: category.slug,
                      label: category.label,
                      preference: _preferences[category.slug] ?? 'needed',
                      partners: booked[category.slug] ?? const [],
                      onChanged: (pref) => _setPreference(category.slug, pref),
                      // Contratado na app: o nome já aparece, não se pede.
                      nameField: _preferences[category.slug] == 'already_booked' && (booked[category.slug] ?? const []).isEmpty
                          ? TextField(
                              controller: _externalNameControllers.putIfAbsent(category.slug, () => TextEditingController()),
                              onEditingComplete: () => _saveExternalName(category.slug),
                              onTapOutside: (_) => _saveExternalName(category.slug),
                              decoration: const InputDecoration(isDense: true, hintText: 'Com quem? (opcional)'),
                            )
                          : null,
                    ),
                    const SizedBox(height: 12),
                  ],
                ],
              );
            },
          ),
        ],
      ),
    );
  }
}

class _CategoryPreferenceCard extends StatelessWidget {
  final String slug;
  final String label;
  final String preference;
  final ValueChanged<String> onChanged;
  final Widget? nameField;

  /// Empresas contratadas na app nesta categoria (2026-11).
  final List<String> partners;

  const _CategoryPreferenceCard({
    required this.slug,
    required this.label,
    required this.preference,
    required this.onChanged,
    this.nameField,
    this.partners = const [],
  });

  @override
  Widget build(BuildContext context) {
    final tag = switch (preference) {
      'already_booked' => const KitTag('Tratado'),
      'not_needed' => const KitTag('Dispensado', kind: KitTagKind.neutral),
      _ => const KitTag('Por tratar', kind: KitTagKind.pending),
    };
    const options = [
      ('needed', 'Precisamos'),
      ('already_booked', 'Já tratámos'),
      ('not_needed', 'Dispensamos'),
    ];
    return Container(
      padding: const EdgeInsets.all(16),
      decoration: BoxDecoration(color: Colors.white, borderRadius: BorderRadius.circular(22)),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
              Text(label, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (partners.isNotEmpty) Padding(padding: const EdgeInsets.only(top: 6), child: BookedPartnerBadge(partners)),
            ]),
          ),
          tag,
        ]),
        const SizedBox(height: 12),
        Row(children: [
          for (final (i, (value, text)) in options.indexed) ...[
            if (i > 0) const SizedBox(width: 6),
            Expanded(
              child: Semantics(
                button: true,
                selected: preference == value,
                child: SnappyTap(
                  onTap: () => onChanged(value),
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 160),
                    height: 34,
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: preference == value ? AppTheme.accentOliveDark : AppTheme.background,
                      borderRadius: BorderRadius.circular(17),
                    ),
                    child: FittedBox(
                      fit: BoxFit.scaleDown,
                      child: Padding(
                        padding: const EdgeInsets.symmetric(horizontal: 8),
                        child: Text(text,
                            style: TextStyle(
                                fontSize: 14,
                                fontWeight: FontWeight.w700,
                                color: preference == value ? Colors.white : AppTheme.ink)),
                      ),
                    ),
                  ),
                ),
              ),
            ),
          ],
        ]),
        if (nameField != null) ...[const SizedBox(height: 10), nameField!],
      ]),
    );
  }
}
