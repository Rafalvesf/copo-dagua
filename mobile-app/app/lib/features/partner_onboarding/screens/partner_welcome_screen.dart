import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/partner_profile/partner_completion.dart';
import '../../../core/partner_profile/partner_location.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/hero_icons.dart';
import '../../../shared/widgets/address_picker.dart';
import '../../../shared/widgets/estrela.dart';
import '../../../shared/widgets/flow_kit.dart';
import '../../../shared/widgets/skeleton.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/step_slide.dart';
import '../../../shared/widgets/v2_kit.dart';
import '../../../shared/widgets/venue_map.dart';
import 'partner_setup_steps.dart';

/// Perfil do negócio do parceiro (fluxo novo, pranchetas «Parceiro 1–4»,
/// 2026-11-27). Logo depois de criar a conta, o router traz aqui o parceiro
/// sem perfil (`onboardingComplete == false`): três passos curtos (nome e o
/// que faz, onde trabalha, foto de perfil) e o «Já está quase!». O resto do
/// perfil (fotos, descrição, preços, dados bancários) completa-se no Início,
/// onde também se pede a verificação.
class PartnerWelcomeScreen extends ConsumerStatefulWidget {
  /// Passo inicial (capturas de ecrã: `/onboarding?step=N`).
  final int initialStep;

  const PartnerWelcomeScreen({super.key, this.initialStep = 0});

  @override
  ConsumerState<PartnerWelcomeScreen> createState() => _PartnerWelcomeScreenState();
}

const _maxCategories = 3;
const _travelOptions = ['10 km', '25 km', '50 km', 'Todo o país'];
const _nationwide = 'Todo o país';

class _PartnerWelcomeScreenState extends ConsumerState<PartnerWelcomeScreen> {
  /// 0 nome e o que faz · 1 onde · 2 foto · 3 «Já está quase!».
  late int _step;
  bool _saving = false;

  final _name = TextEditingController();
  final _place = TextEditingController();
  List<PartnerCategoryOption> _options = const [];
  final List<String> _picked = []; // ids, pela ordem escolhida
  PickedAddress? _address;
  String _travel = '50 km';
  XFile? _logo;
  Uint8List? _logoBytes;

  @override
  void initState() {
    super.initState();
    final profile = ref.read(authControllerProvider).profile;
    // Perfil já criado (voltou a este ecrã): fica no «Já está quase!».
    _step = (profile?.onboardingComplete ?? false) ? 3 : widget.initialStep.clamp(0, 3);
    _name.text = profile?.businessName ?? '';
    if (profile != null && profile.serviceAreas.isNotEmpty) _place.text = profile.serviceAreas.first;
    Future.microtask(_loadCategories);
  }

  Future<void> _loadCategories() async {
    try {
      final options = await ref.read(partnerProfileControllerProvider.notifier).loadCategoryOptions();
      if (!mounted) return;
      final had = ref.read(authControllerProvider).profile?.categoryLabels ?? const <String>[];
      setState(() {
        _options = options;
        for (final o in options) {
          if (had.contains(o.label) && _picked.length < _maxCategories) _picked.add(o.id);
        }
      });
    } catch (_) {}
  }

  @override
  void dispose() {
    _name.dispose();
    _place.dispose();
    super.dispose();
  }

  void _go(int step) => setState(() => _step = step);

  void _toggleCategory(String label) {
    final o = _options.firstWhere((o) => o.label == label);
    setState(() {
      if (_picked.contains(o.id)) {
        _picked.remove(o.id);
      } else if (_picked.length < _maxCategories) {
        _picked.add(o.id);
      } else {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Escolhe até 3.')));
      }
    });
  }

  String get _primaryCategory {
    if (_picked.isEmpty) return '';
    return _options.firstWhere((o) => o.id == _picked.first, orElse: () => const PartnerCategoryOption(id: '', label: '')).label;
  }

  String get _city {
    final a = _address;
    if (a != null) return a.city.isNotEmpty ? a.city : a.name;
    return _place.text.trim();
  }

  Future<void> _pickLogo() async {
    final file = await ImagePicker().pickImage(source: ImageSource.gallery);
    if (file == null) return;
    final bytes = await file.readAsBytes();
    if (!mounted) return;
    setState(() {
      _logo = file;
      _logoBytes = bytes;
    });
  }

  Future<void> _finish() async {
    final logo = _logo;
    if (logo == null) return;
    setState(() => _saving = true);
    try {
      final auth = ref.read(authControllerProvider.notifier);
      if (auth.hasPendingSignup) await auth.commitSignup();
      final business = _name.text.trim();
      final ctrl = ref.read(partnerProfileControllerProvider.notifier);
      // Contas por email podem chegar sem nome: fica o do negócio.
      if ((ref.read(authControllerProvider).profile?.fullName ?? '').trim().isEmpty) {
        await auth.updateFullName(business);
      }
      await ctrl.saveCategories(_options.where((o) => _picked.contains(o.id)).toList());
      await ctrl.uploadLogo(logo);
      final nationwide = _travel == _nationwide;
      await ctrl.updateBusinessInfo(
        businessName: business,
        serviceAreas: [if (_city.isNotEmpty) _city],
        travelsForEvents: nationwide,
        maxTravelDistanceKm: nationwide ? null : int.tryParse(_travel.split(' ').first),
      );
      final id = ref.read(authControllerProvider).profile?.id;
      final a = _address;
      if (id != null && a != null) {
        try {
          await savePartnerLocation(id, a.toPartnerLocation());
          ref.invalidate(partnerLocationProvider);
        } catch (_) {}
      }
      await auth.completePartnerProfile();
      ref.invalidate(partnerCompletionProvider);
      if (mounted) _go(3);
    } on SignupFailed catch (e) {
      if (mounted) ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(e.message)));
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível criar o perfil. Tenta novamente.')),
        );
      }
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) => StepSlide(
        id: _step,
        order: _step,
        child: switch (_step) {
          0 => _nameStep(),
          1 => _placeStep(),
          2 => _photoStep(),
          _ => const _AlmostThere(),
        },
      );

  // Parceiro 1: nome do negócio e o que faz (até 3).
  Widget _nameStep() {
    final ok = _name.text.trim().isNotEmpty && _picked.isNotEmpty;
    final selected = {for (final o in _options) if (_picked.contains(o.id)) o.label};
    return FlowPage(
      tint: FlowTint.terra,
      dashOn: 0,
      content: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        FlowBlock(
          label: 'Nome do negócio',
          child: FlowField(controller: _name, hint: 'O nome que os clientes veem', onChanged: (_) => setState(() {})),
        ),
        const SizedBox(height: 22),
        FlowBlock(
          label: 'O que fazes (até 3)',
          child: _options.isEmpty
              ? const SkeletonBox(height: 148)
              : FlowPillGrid(
                  items: [for (final o in _options) o.label],
                  selected: selected,
                  cols: 3,
                  line: true,
                  onTap: _toggleCategory,
                ),
        ),
      ]),
      title: 'Como se chama o teu negócio?',
      cta: FlowCta(label: 'Continuar', onPressed: ok ? () => _go(1) : null),
    );
  }

  // Parceiro 2: onde trabalha e até onde se desloca.
  Widget _placeStep() {
    final a = _address;
    return FlowPage(
      tint: FlowTint.blue,
      dashOn: 1,
      onBack: () => _go(0),
      content: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        FlowBlock(
          label: 'Onde estás',
          child: AddressField(
            controller: _place,
            hint: 'Cidade ou morada',
            pickerTitle: 'Onde estás?',
            citiesOnly: true,
            onPicked: (p) => setState(() => _address = p),
          ),
        ),
        const SizedBox(height: 12),
        ClipRSuperellipse(
          borderRadius: BorderRadius.circular(22),
          child: a?.latitude != null && a?.longitude != null
              ? VenueMap(label: _city, latitude: a!.latitude, longitude: a.longitude, height: 170)
              : Container(
                  height: 170,
                  color: FlowTint.box,
                  alignment: Alignment.center,
                  child: const Icon(Hi.mapPin, size: 32, color: AppTheme.inkMuted),
                ),
        ),
        const SizedBox(height: 22),
        FlowBlock(
          label: 'Deslocas-te até',
          child: FlowPillGrid(
            items: _travelOptions,
            selected: {_travel},
            cols: 2,
            onTap: (t) => setState(() => _travel = t),
          ),
        ),
      ]),
      title: 'Onde trabalhas?',
      cta: FlowCta(label: 'Continuar', onPressed: _city.isNotEmpty ? () => _go(2) : null),
    );
  }

  // Parceiro 3: foto de perfil e como fica o cartão.
  Widget _photoStep() {
    final name = _name.text.trim();
    final bytes = _logoBytes;
    final cat = _primaryCategory;
    final sub = [if (cat.isNotEmpty) cat, if (_city.isNotEmpty) inCity(_city)].join(' ');
    return FlowPage(
      tint: FlowTint.green,
      dashOn: 2,
      onBack: () => _go(1),
      centerContent: true,
      content: Column(mainAxisSize: MainAxisSize.min, children: [
        SnappyTap(
          onTap: _pickLogo,
          semanticLabel: 'Escolher foto de perfil',
          child: SizedBox(
            width: 180,
            height: 180,
            child: Stack(children: [
              Container(
                width: 180,
                height: 180,
                decoration: BoxDecoration(
                  color: FlowTint.box,
                  shape: BoxShape.circle,
                  border: Border.all(color: Colors.white, width: 4),
                  image: bytes == null ? null : DecorationImage(image: MemoryImage(bytes), fit: BoxFit.cover),
                ),
                alignment: Alignment.center,
                child: bytes == null ? const Icon(Hi.camera, size: 40, color: AppTheme.inkMuted) : null,
              ),
              Positioned(
                right: 4,
                bottom: 4,
                child: Container(
                  width: 44,
                  height: 44,
                  decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
                  alignment: Alignment.center,
                  child: const Icon(Hi.plus, size: 20, color: Colors.white),
                ),
              ),
            ]),
          ),
        ),
        const SizedBox(height: 18),
        Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: ShapeDecoration(
            color: FlowTint.box,
            shape: RoundedSuperellipseBorder(borderRadius: BorderRadius.circular(22)),
          ),
          child: Row(children: [
            if (bytes != null)
              ClipOval(child: Image.memory(bytes, width: 44, height: 44, fit: BoxFit.cover))
            else
              V2Avatar(name.isEmpty ? '?' : name, size: 44),
            const SizedBox(width: 12),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
                Row(children: [
                  Flexible(
                    child: Text(name,
                        maxLines: 1,
                        overflow: TextOverflow.ellipsis,
                        style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ),
                  const SizedBox(width: 4),
                  Icon(Hi.checkBadge, size: 18, color: AppTheme.accentOliveDark),
                ]),
                if (sub.isNotEmpty)
                  Text(sub, maxLines: 1, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              ]),
            ),
          ]),
        ),
      ]),
      title: 'A tua foto de perfil',
      cta: FlowCta(label: 'Criar o meu perfil', loading: _saving, onPressed: _logo == null ? null : _finish),
    );
  }
}

/// Parceiro 4: «Já está quase!» — o perfil está criado; os passos que
/// faltam e a saída para o Início.
class _AlmostThere extends ConsumerWidget {
  const _AlmostThere();

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final c = ref.watch(partnerCompletionProvider).value;
    final steps = c == null
        ? const ['Fotos do teu trabalho', 'Preços', 'Dados bancários']
        : [for (final s in partnerSetupSteps(c)) if (!s.done) s.title];
    final n = steps.length;
    return FlowPage(
      tint: FlowTint.green,
      dashOn: 2,
      centerContent: true,
      content: const FlowStarHalo(Estrela.piscar, size: 200),
      title: 'Já está quase!',
      body: n == 0
          ? 'O teu perfil está criado e completo. Já podes pedir a verificação.'
          : 'O teu perfil está criado. Completa ${n == 1 ? 'este passo' : 'estes $n passos'} e pede a verificação.',
      cta: Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: [
        if (n > 0) ...[
          Container(
            padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 6),
            decoration: ShapeDecoration(
              color: FlowTint.box,
              shape: RoundedSuperellipseBorder(borderRadius: BorderRadius.circular(18)),
            ),
            child: Column(children: [
              for (final s in steps)
                SizedBox(
                  height: 40,
                  child: Row(children: [
                    Container(
                      width: 20,
                      height: 20,
                      decoration: BoxDecoration(
                        shape: BoxShape.circle,
                        border: Border.all(color: const Color(0xFFCFCFCF), width: 2),
                      ),
                    ),
                    const SizedBox(width: 10),
                    Text(s, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  ]),
                ),
            ]),
          ),
          const SizedBox(height: 22),
        ],
        // No Início está o cartão «O teu perfil» com cada passo e o botão.
        FlowCta(label: n == 0 ? 'Pedir a verificação' : 'Completar o perfil', onPressed: () => context.go('/partner-home')),
      ]),
      footer: FlowFooterLink(
        prefix: 'Preferes fazer depois?',
        action: 'Ir para o Início',
        onTap: () => context.go('/partner-home'),
      ),
    );
  }
}
