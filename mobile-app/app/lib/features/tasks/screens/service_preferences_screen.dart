import 'package:copo_dagua_app/shared/hero_icons.dart';
import 'package:flutter/material.dart';
import 'package:copo_dagua_app/shared/widgets/booked_partner_badge.dart';
import 'package:copo_dagua_app/core/budget/booked_partners.dart';
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
import '../../../shared/widgets/green_hero.dart';
import '../../../shared/widgets/sticker_icon.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../partners/partner_style.dart';

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

    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(top: false, 
        bottom: false,
        child: EdgeFade(
          topFadeHeight: 24,
          bottomFadeHeight: 40,
          child: ListView(
            padding: ( EdgeInsets.zero).add(EdgeInsets.only(top: MediaQuery.paddingOf(context).top)),
            children: [
              const PageHeader(
                title: 'Já têm tratado?',
                subtitle: 'Ajuda-nos a não sugerir o que já resolveram.',
                centered: true,
              ),
              Padding(
                padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 60),
                child: categoriesAsync.when(
                  loading: () => const Center(child: CircularProgressIndicator()),
                  error: (err, st) => const Text('Não foi possível carregar as categorias.'),
                  data: (categories) {
                    if (_loading) return const Center(child: CircularProgressIndicator());
                    // Redesign 2026-10-20: resumo verde + cartão por serviço
                    // com ícone, estado e escolha segmentada.
                    final done = categories.where((c) => _preferences[c.slug] == 'already_booked').length;
                    final skipped = categories.where((c) => _preferences[c.slug] == 'not_needed').length;
                    final needed = categories.length - done - skipped;
                    return Column(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        GreenHero(
                          label: 'SERVIÇOS TRATADOS',
                          value: '$done',
                          suffix: 'de ${categories.length - skipped} ${categories.length - skipped == 1 ? 'serviço' : 'serviços'}',
                          progress: categories.length - skipped == 0 ? 0 : done / (categories.length - skipped),
                          doodles: const [Hi.checkCircle, Hi.buildingStorefront, Hi.sparkles],
                          footer: Wrap(spacing: 8, runSpacing: 8, children: [
                            HeroPill('$needed por tratar', solid: true),
                            if (skipped > 0) HeroPill('$skipped não precisam'),
                          ]),
                        ),
                        const SizedBox(height: 18),
                        for (final (i, category) in categories.indexed) ...[
                          _CategoryPreferenceCard(
                            index: i,
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
                                    decoration: const InputDecoration(
                                      isDense: true,
                                      prefixIcon: Icon(Hi.buildingStorefront, size: 18),
                                      hintText: 'Com quem? (opcional)',
                                    ),
                                  )
                                : null,
                          ),
                          const SizedBox(height: 12),
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

class _CategoryPreferenceCard extends StatelessWidget {
  final int index;
  final String slug;
  final String label;
  final String preference;
  final ValueChanged<String> onChanged;
  final Widget? nameField;

  /// Empresas contratadas na app nesta categoria (2026-11).
  final List<String> partners;

  const _CategoryPreferenceCard({
    required this.index,
    required this.slug,
    required this.label,
    required this.preference,
    required this.onChanged,
    this.nameField,
    this.partners = const [],
  });

  @override
  Widget build(BuildContext context) {
    final (status, color) = switch (preference) {
      'already_booked' => ('Tratado', AppTheme.accentOliveDark),
      'not_needed' => ('Não precisam', v2Muted),
      _ => ('Por tratar', const Color(0xFFB7791F)),
    };
    const options = [
      ('needed', 'Precisamos', Hi.magnifyingGlass),
      ('already_booked', 'Já tratámos', Hi.checkCircle),
      ('not_needed', 'Dispensamos', Hi.noSymbol),
    ];
    return Container(
      padding: const EdgeInsets.fromLTRB(14, 14, 14, 14),
      decoration: softCard(radius: 22),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.center, children: [
          Transform.rotate(
            angle: StickerIcon.tilt(index) * 6.283,
            child: Container(
              width: 42,
              height: 42,
              alignment: Alignment.center,
              decoration: BoxDecoration(color: colorForCategorySlug(slug), borderRadius: BorderRadius.circular(14), boxShadow: StickerIcon.shadow),
              child: Icon(iconForCategorySlug(slug), color: AppTheme.accentOliveDark, size: 21),
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
              Text(label, style: const TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              if (partners.isNotEmpty)
                Padding(
                  padding: const EdgeInsets.only(top: 6),
                  child: BookedPartnerBadge(partners),
                ),
            ]),
          ),
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
            decoration: BoxDecoration(color: color.withValues(alpha: 0.12), borderRadius: BorderRadius.circular(99)),
            child: Text(status, style: TextStyle(fontSize: AppFontSize.xs, fontWeight: FontWeight.w700, color: color)),
          ),
        ]),
        const SizedBox(height: 12),
        // Escolha segmentada numa só pista.
        Container(
          padding: const EdgeInsets.all(4),
          decoration: BoxDecoration(color: const Color(0xFFF2F0EB), borderRadius: BorderRadius.circular(99)),
          child: Row(children: [
            for (final (value, text, icon) in options)
              Expanded(
                child: SnappyTap(
                  onTap: () => onChanged(value),
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 180),
                    padding: const EdgeInsets.symmetric(vertical: 9),
                    decoration: BoxDecoration(
                      color: preference == value ? AppTheme.accentOliveDark : Colors.transparent,
                      borderRadius: BorderRadius.circular(99),
                    ),
                    child: Row(mainAxisAlignment: MainAxisAlignment.center, children: [
                      Icon(icon, size: 14, color: preference == value ? Colors.white : v2Muted),
                      const SizedBox(width: 4),
                      Flexible(
                        child: Text(text,
                            maxLines: 1,
                            overflow: TextOverflow.ellipsis,
                            style: TextStyle(
                                fontSize: AppFontSize.xs,
                                fontWeight: FontWeight.w700,
                                color: preference == value ? Colors.white : AppTheme.ink)),
                      ),
                    ]),
                  ),
                ),
              ),
          ]),
        ),
        if (nameField != null) ...[const SizedBox(height: 10), nameField!],
      ]),
    );
  }
}
