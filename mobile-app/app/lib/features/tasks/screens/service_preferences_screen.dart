import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/partners/partner_providers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/fading_scroll.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
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
    if (weddingId == null) return;
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
    if (mounted) setState(() => _loading = false);
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

    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        bottom: false,
        child: EdgeFade(
          topFadeHeight: 24,
          bottomFadeHeight: 40,
          child: ListView(
            padding: EdgeInsets.zero,
            children: [
              const PageHeader(
                title: 'Já têm tratado?',
                subtitle: 'Ajuda-nos a não sugerir o que já resolveram.',
                titleFontSize: 26,
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(
                  AppTheme.screenMargin,
                  20,
                  AppTheme.screenMargin,
                  60,
                ),
                child: categoriesAsync.when(
                  loading: () => const Center(child: CircularProgressIndicator()),
                  error: (err, st) => const Text('Não foi possível carregar as categorias.'),
                  data: (categories) {
                    if (_loading) return const Center(child: CircularProgressIndicator());
                    return Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        for (final category in categories) ...[
                          _CategoryPreferenceRow(
                            label: category.label,
                            preference: _preferences[category.slug] ?? 'needed',
                            onChanged: (pref) => _setPreference(category.slug, pref),
                          ),
                          if (_preferences[category.slug] == 'already_booked') ...[
                            const SizedBox(height: 8),
                            Padding(
                              padding: const EdgeInsets.only(left: 4, right: 4, bottom: 4),
                              child: TextField(
                                controller: _externalNameControllers.putIfAbsent(
                                  category.slug,
                                  () => TextEditingController(),
                                ),
                                onEditingComplete: () => _saveExternalName(category.slug),
                                decoration: InputDecoration(
                                  isDense: true,
                                  hintText: 'Nome do fornecedor (opcional)',
                                  hintStyle: TextStyle(color: AppTheme.inkMuted, fontSize: 12.5),
                                  border: OutlineInputBorder(
                                    borderRadius: BorderRadius.circular(12),
                                  ),
                                ),
                              ),
                            ),
                          ],
                          const SizedBox(height: 14),
                        ],
                      ],
                    );
                  },
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _CategoryPreferenceRow extends StatelessWidget {
  final String label;
  final String preference;
  final ValueChanged<String> onChanged;

  const _CategoryPreferenceRow({
    required this.label,
    required this.preference,
    required this.onChanged,
  });

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: BoxDecoration(
        color: AppTheme.surface,
        borderRadius: BorderRadius.circular(18),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 13.5)),
          const SizedBox(height: 10),
          Row(
            children: [
              _PreferenceChip(
                label: 'Precisamos',
                selected: preference == 'needed',
                onTap: () => onChanged('needed'),
              ),
              const SizedBox(width: 8),
              _PreferenceChip(
                label: 'Já tratámos',
                selected: preference == 'already_booked',
                onTap: () => onChanged('already_booked'),
              ),
              const SizedBox(width: 8),
              _PreferenceChip(
                label: 'Não precisamos',
                selected: preference == 'not_needed',
                onTap: () => onChanged('not_needed'),
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _PreferenceChip extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _PreferenceChip({required this.label, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Expanded(
      child: SnappyTap(
        onTap: onTap,
        child: Container(
          padding: const EdgeInsets.symmetric(vertical: 8),
          alignment: Alignment.center,
          decoration: BoxDecoration(
            color: selected ? AppTheme.ink : Colors.white,
            borderRadius: BorderRadius.circular(999),
            border: Border.all(color: AppTheme.borderMuted),
          ),
          child: Text(
            label,
            textAlign: TextAlign.center,
            style: TextStyle(
              color: selected ? Colors.white : AppTheme.ink,
              fontWeight: FontWeight.w600,
              fontSize: 11,
            ),
          ),
        ),
      ),
    );
  }
}
