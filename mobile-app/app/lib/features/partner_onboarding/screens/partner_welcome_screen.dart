import 'dart:typed_data';

import 'package:flutter/material.dart';
import '../../../shared/widgets/permissions_step.dart' show PermissionsStep;
import '../../../shared/widgets/first_run_tour.dart' show TourRole;
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/partners/category_details.dart';
import '../../../core/theme/app_theme.dart';
import '../../../features/partner_profile/screens/partner_pricing_screen.dart' show showEditPackageSheet;
import '../../../shared/widgets/auth_ui.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/pronto_kit.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/onboarding_exit.dart';
import 'package:copo_dagua_app/shared/widgets/sized_network_image.dart';

/// Primeiro ecrã visto por uma conta de parceiro recém-registada.
///
/// Pedido explícito do utilizador (2026-08-31): antes disto, "onboarding"
/// para um parceiro era só este ecrã de boas-vindas com um único botão
/// "Começar" — zero dados reais recolhidos, ao contrário do assistente de
/// 7 passos do casal. Passou a ser um assistente obrigatório de verdade:
/// nome do negócio, categoria, logótipo, portefólio (mín. 3 fotos),
/// descrição, área de serviço, NIF e serviços/preços (sem "Saltar",
/// `_canContinue` bloqueia o avanço) são os oito campos que
/// `partner_profile_requirements_met()`
/// (`database/migrations/028_partner_service_packages.sql`) exige para a
/// submissão automática poder acontecer. Pedido explícito do
/// utilizador (2026-08-31): o portefólio tinha ficado de fora deste
/// assistente por decisão inicial ("upload de várias fotos tem UX
/// própria"), mas sendo obrigatório tem de estar aqui — sem isso um
/// parceiro conseguia carregar "Concluir" sem nunca ver o requisito.
/// A lógica de upload em si é a mesma de `partner_portfolio_screen.dart`
/// (`uploadPortfolioMedia`/`removePortfolioItem`), só reaproveitada
/// inline. O passo de serviços deixa o parceiro escolher entre até 3
/// pacotes fixos ou "só
/// orçamento" (pedido explícito: "up to 3 options or por orcamento
/// only. partner can choose") — no modo "só orçamento" não é preciso
/// nenhum pacote para o passo ficar completo. Anos de
/// experiência e Instagram vêm a seguir, mas **opcionais**
/// ("opcional mas benéfico", pedido explícito) — `_canContinue` nunca os
/// bloqueia, o botão "Continuar" serve também de saltar quando ficam em
/// branco. Telefone e email de contacto propositadamente **não** fazem
/// parte deste assistente nem são exigidos em lado nenhum — pedido
/// explícito do utilizador para manter a comunicação dentro da própria
/// app (chat), não a empurrar para fora dela; continuam só como campos
/// opcionais em "Informações do negócio" para quem quiser preenchê-los.
/// Isto não substitui a submissão em si: só depois disto
/// `completeOnboarding()` corre. O router já não tranca o parceiro em
/// `/partner-profile` até `published` — pedido explícito do utilizador
/// (2026-08-31): "não bloqueies o acesso à app mesmo que a review não
/// tenha sido aceite ou tenha sido recusada". A visibilidade real no
/// Marketplace continua só a acontecer com `status = 'published'`, via
/// `is_partner_profile_visible()` no servidor.
class PartnerWelcomeScreen extends ConsumerStatefulWidget {
  /// Só para as capturas de ecrã (`/onboarding?step=N`).
  final int initialStep;

  const PartnerWelcomeScreen({super.key, this.initialStep = 0});

  @override
  ConsumerState<PartnerWelcomeScreen> createState() =>
      _PartnerWelcomeScreenState();
}

enum _Step {
  intro,
  businessName,
  category,
  details,
  logo,
  portfolio,
  description,
  serviceAreas,
  taxId,
  services,
  yearsExperience,
  instagram,
}

const _minPortfolioImages = 3;
const _areaOptions = ['Lisboa', 'Sintra', 'Cascais', 'Setúbal', 'Porto', 'Braga', 'Aveiro', 'Coimbra', 'Leiria', 'Évora', 'Algarve', 'Madeira', 'Açores'];

const _steps = _Step.values;

final _taxIdRegex = RegExp(r'^\d{9}$');

class _PartnerWelcomeScreenState extends ConsumerState<PartnerWelcomeScreen> {
  late int _stepIndex = widget.initialStep.clamp(0, _Step.values.length - 1);
  bool _saving = false;

  final _businessName = TextEditingController();
  final _description = TextEditingController();
  final _serviceAreasText = TextEditingController();
  final _taxId = TextEditingController();
  final _yearsExperience = TextEditingController();
  final _instagram = TextEditingController();
  final Set<String> _selectedCategoryIds = {};
  List<PartnerCategoryOption> _categoryOptions = const [];
  final Map<String, String> _categoryLabelsById = {};

  // Logótipo: `_pickedLogo`/`_pickedLogoBytes` só quando o parceiro
  // escolhe um novo ficheiro nesta sessão (ainda não enviado — só sobe
  // ao Storage em [_finish]); `_existingLogoUrl` cobre quem já tinha
  // enviado um logótipo antes (ex: voltou a este ecrã depois de sair a
  // meio) e não precisa de escolher de novo para poder continuar.
  XFile? _pickedLogo;
  Uint8List? _pickedLogoBytes;
  String? _existingLogoUrl;

  // Portefólio: mesmo padrão de escrita imediata do passo de serviços
  // (abaixo) — lista construída aos poucos, cada foto já fica gravada
  // assim que é escolhida, não fica à espera de [_finish].
  List<PortfolioItem> _portfolioItems = const [];
  bool _portfolioBusy = false;

  // Registo ainda sem conta: fotos e pacotes ficam em memória e só são
  // enviados no fim, depois de criar a conta (2026-10-18).
  final Map<String, ({XFile file, Uint8List bytes})> _localMedia = {};
  int _localSeq = 0;
  bool get _deferred => ref.read(authControllerProvider.notifier).hasPendingSignup;
  bool _nationwide = false;
  final _otherArea = TextEditingController();

  // Serviços/preços: ao contrário dos outros passos, escreve
  // imediatamente na base de dados a cada ação (mesmo padrão de
  // `partner_portfolio_screen.dart`) em vez de ficar só em memória até
  // [_finish] — mais natural para uma lista que se constrói aos poucos
  // (adicionar/remover pacotes) do que um valor único de formulário.
  String _pricingMode = 'quote_only';
  List<ServicePackage> _packages = const [];
  bool _pricingBusy = false;

  @override
  void initState() {
    super.initState();
    final profile = ref.read(authControllerProvider).profile;
    if (profile != null) {
      _businessName.text = profile.businessName ?? '';
      _description.text = profile.businessDescription ?? '';
      _serviceAreasText.text = profile.serviceAreas.join(', ');
      _yearsExperience.text = profile.yearsExperience?.toString() ?? '';
      _instagram.text = profile.instagram ?? '';
      _existingLogoUrl = profile.logoUrl;
    }
    Future.microtask(() => _loadCategories().catchError((_) {}));
    Future.microtask(() => _loadPricing().catchError((_) {}));
    Future.microtask(() => _loadPortfolio().catchError((_) {}));
  }

  Future<void> _loadPortfolio() async {
    final items = await ref.read(partnerPortfolioProvider.future);
    if (!mounted) return;
    setState(() => _portfolioItems = items);
  }

  Future<void> _loadPricing() async {
    final data = await ref.read(partnerPricingProvider.future);
    if (!mounted) return;
    setState(() {
      _pricingMode = data.pricingMode;
      _packages = data.packages;
    });
  }

  Future<void> _loadCategories() async {
    final options =
        await ref.read(partnerProfileControllerProvider.notifier).loadCategoryOptions();
    if (!mounted) return;
    setState(() {
      _categoryOptions = options;
      for (final o in options) {
        _categoryLabelsById[o.id] = o.label;
      }
    });
  }

  @override
  void dispose() {
    _businessName.dispose();
    _description.dispose();
    _serviceAreasText.dispose();
    _otherArea.dispose();
    _taxId.dispose();
    _yearsExperience.dispose();
    _instagram.dispose();
    super.dispose();
  }

  _Step get _step => _steps[_stepIndex];

  bool get _canContinue => switch (_step) {
    _Step.intro => true,
    _Step.businessName => _businessName.text.trim().isNotEmpty,
    _Step.category => _selectedCategoryIds.isNotEmpty,
    _Step.details => true,
    _Step.logo => _pickedLogo != null || (_existingLogoUrl?.isNotEmpty ?? false),
    _Step.portfolio =>
      _portfolioItems.where((i) => i.mediaType == PortfolioMediaType.image).length >=
          _minPortfolioImages,
    _Step.description => _description.text.trim().length >= 50,
    _Step.serviceAreas => _areas.isNotEmpty || _nationwide,
    _Step.taxId => _taxIdRegex.hasMatch(_taxId.text.trim()),
    _Step.services => _pricingMode == 'quote_only' || _packages.isNotEmpty,
    // Opcionais — pedido explícito do utilizador ("anos de experiência e
    // insta opcional mas benéfico"): nunca bloqueiam o avanço, ao
    // contrário de todos os passos anteriores.
    _Step.yearsExperience => true,
    _Step.instagram => true,
  };

  Future<void> _pickLogo() async {
    final picker = ImagePicker();
    final file = await picker.pickImage(source: ImageSource.gallery, imageQuality: 85);
    if (file == null) return;
    final bytes = await file.readAsBytes();
    if (!mounted) return;
    setState(() {
      _pickedLogo = file;
      _pickedLogoBytes = bytes;
    });
  }

  PortfolioItem _localItem(XFile file, Uint8List bytes, PortfolioMediaType type) {
    final id = 'local-${_localSeq++}';
    _localMedia[id] = (file: file, bytes: bytes);
    return PortfolioItem(id: id, partnerId: '', mediaUrl: '', mediaType: type, position: _portfolioItems.length);
  }

  Future<void> _addPortfolioImages() async {
    final picker = ImagePicker();
    final files = await picker.pickMultiImage(imageQuality: 85);
    if (files.isEmpty) return;
    if (_deferred) {
      final added = <PortfolioItem>[];
      for (final f in files) {
        added.add(_localItem(f, await f.readAsBytes(), PortfolioMediaType.image));
      }
      if (mounted) setState(() => _portfolioItems = [..._portfolioItems, ...added]);
      return;
    }
    setState(() => _portfolioBusy = true);
    var position = _portfolioItems.length;
    try {
      for (final file in files) {
        await uploadPortfolioMedia(file: file, mediaType: PortfolioMediaType.image, position: position);
        position++;
      }
      ref.invalidate(partnerPortfolioProvider);
      await _loadPortfolio();
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível enviar as fotos. Tenta novamente.')),
        );
      }
    } finally {
      if (mounted) setState(() => _portfolioBusy = false);
    }
  }

  Future<void> _addPortfolioVideo() async {
    final picker = ImagePicker();
    final file = await picker.pickVideo(source: ImageSource.gallery);
    if (file == null) return;
    if (_deferred) {
      final item = _localItem(file, Uint8List(0), PortfolioMediaType.video);
      if (mounted) setState(() => _portfolioItems = [..._portfolioItems, item]);
      return;
    }
    setState(() => _portfolioBusy = true);
    try {
      await uploadPortfolioMedia(file: file, mediaType: PortfolioMediaType.video, position: _portfolioItems.length);
      ref.invalidate(partnerPortfolioProvider);
      await _loadPortfolio();
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Só é permitido 1 vídeo no portefólio.')),
        );
      }
    } finally {
      if (mounted) setState(() => _portfolioBusy = false);
    }
  }

  Future<void> _removePortfolioItem(PortfolioItem item) async {
    if (item.id.startsWith('local-')) {
      _localMedia.remove(item.id);
      setState(() => _portfolioItems = _portfolioItems.where((i) => i.id != item.id).toList());
      return;
    }
    setState(() => _portfolioBusy = true);
    try {
      await removePortfolioItem(item);
      ref.invalidate(partnerPortfolioProvider);
      await _loadPortfolio();
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível remover. Tenta novamente.')),
        );
      }
    } finally {
      if (mounted) setState(() => _portfolioBusy = false);
    }
  }

  Future<void> _setPricingMode(String mode) async {
    if (_pricingMode == mode) return;
    if (_deferred) {
      setState(() => _pricingMode = mode);
      return;
    }
    setState(() => _pricingBusy = true);
    try {
      await setPartnerPricingMode(mode);
      ref.invalidate(partnerPricingProvider);
      await _loadPricing();
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível guardar. Tenta novamente.')),
        );
      }
    } finally {
      if (mounted) setState(() => _pricingBusy = false);
    }
  }

  Future<void> _addPackage() async {
    final result = await showEditPackageSheet(context);
    if (result == null) return;
    if (_deferred) {
      setState(() => _packages = [
            ..._packages,
            ServicePackage(
              id: 'local-${_localSeq++}',
              partnerId: '',
              name: result.name,
              description: result.description,
              price: result.price,
              isStartingPrice: result.isStartingPrice,
              position: _packages.length,
            ),
          ]);
      return;
    }
    setState(() => _pricingBusy = true);
    try {
      await addServicePackage(
        name: result.name,
        description: result.description,
        price: result.price,
        isStartingPrice: result.isStartingPrice,
        position: _packages.length,
      );
      ref.invalidate(partnerPricingProvider);
      await _loadPricing();
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível guardar. Tenta novamente.')),
        );
      }
    } finally {
      if (mounted) setState(() => _pricingBusy = false);
    }
  }

  Future<void> _removePackage(ServicePackage pkg) async {
    if (pkg.id.startsWith('local-')) {
      setState(() => _packages = _packages.where((p) => p.id != pkg.id).toList());
      return;
    }
    setState(() => _pricingBusy = true);
    try {
      await removeServicePackage(pkg.id);
      ref.invalidate(partnerPricingProvider);
      await _loadPricing();
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível guardar. Tenta novamente.')),
        );
      }
    } finally {
      if (mounted) setState(() => _pricingBusy = false);
    }
  }

  Future<void> _continue() async {
    if (!_canContinue) return;
    if (_stepIndex < _steps.length - 1) {
      setState(() => _stepIndex++);
      return;
    }
    await _finish();
  }

  bool _sent = false;

  /// Permissões pedidas no último passo, antes do "Perfil enviado!" (2026-10-25).
  bool _permsDone = false;
  int? _figureMin;
  int? _figureMax;
  final Set<String> _offerings = {};

  /// Categoria principal (a primeira escolhida) — define o passo 4.
  String? get _primarySlug {
    for (final o in _categoryOptions) {
      if (_selectedCategoryIds.contains(o.id)) return o.slug;
    }
    return null;
  }

  Future<void> _finish() async {
    setState(() => _saving = true);
    try {
      // A conta é criada agora, mesmo antes do "Perfil enviado!".
      final auth = ref.read(authControllerProvider.notifier);
      if (auth.hasPendingSignup) {
        await auth.commitSignup();
        if (_pricingMode != 'quote_only') await setPartnerPricingMode(_pricingMode);
        for (final (i, pkg) in _packages.where((p) => p.id.startsWith('local-')).indexed) {
          await addServicePackage(
            name: pkg.name,
            description: pkg.description,
            price: pkg.price,
            isStartingPrice: pkg.isStartingPrice,
            position: i,
          );
        }
        var pos = 0;
        for (final item in _portfolioItems) {
          final local = _localMedia[item.id];
          if (local == null) continue;
          await uploadPortfolioMedia(file: local.file, mediaType: item.mediaType, position: pos++);
        }
        _localMedia.clear();
        ref.invalidate(partnerPortfolioProvider);
        ref.invalidate(partnerPricingProvider);
      }
      final selectedCategories = _categoryOptions
          .where((o) => _selectedCategoryIds.contains(o.id))
          .toList();
      await ref.read(partnerProfileControllerProvider.notifier).saveCategories(selectedCategories);
      if (_pickedLogo != null) {
        await ref.read(partnerProfileControllerProvider.notifier).uploadLogo(_pickedLogo!);
      }
      await ref.read(partnerProfileControllerProvider.notifier).updateBusinessInfo(
            businessName: _businessName.text.trim(),
            businessDescription: _description.text.trim(),
            serviceAreas: _serviceAreasText.text
                .split(',')
                .map((s) => s.trim())
                .where((s) => s.isNotEmpty)
                .toList(),
            yearsExperience: int.tryParse(_yearsExperience.text.trim()),
            instagram: _instagram.text.trim().isEmpty ? null : _instagram.text.trim(),
            travelsForEvents: _nationwide,
          );
      await ref.read(partnerProfileControllerProvider.notifier).updateTaxId(_taxId.text.trim());
      await ref.read(partnerProfileControllerProvider.notifier).saveCategoryDetails(
            keyFigure: _figureMin,
            keyFigureMax: _figureMax,
            offerings: _offerings.toList(),
          );
      if (!mounted) return;
      // Pedido do utilizador (2026-10-17): "anima o perfil enviado" — ecrã
      // "Perfil enviado!" (avião de papel → visto) antes do painel.
      setState(() => _sent = true);
    } on SignupFailed catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(e.message)));
      }
    } catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(
            content: Text(
              // `partner_verification_tax_id_idx` (`005_partner_profile.sql`)
              // é único por NIF — mensagem específica em vez da genérica,
              // porque "não foi possível concluir" não dava nenhuma pista
              // de que o problema era mesmo o NIF já estar noutra conta.
              e is PostgrestException && e.code == '23505' && e.message.contains('tax_id')
                  ? 'Este NIF já está registado noutra conta.'
                  : 'Não foi possível concluir o onboarding. Tenta novamente.',
            ),
          ),
        );
      }
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    if (_sent && !_permsDone) {
      return PermissionsStep(role: TourRole.partner, onDone: () => setState(() => _permsDone = true));
    }
    if (_sent) {
      final cats = _categoryOptions
          .where((o) => _selectedCategoryIds.contains(o.id))
          .map((o) => o.label)
          .join(' e ');
      final areas = _serviceAreasText.text.trim();
      return _SentView(
        rows: [
          [_businessName.text.trim(), if (cats.isNotEmpty) cats].where((t) => t.isNotEmpty).join(' · '),
          if (areas.isNotEmpty) areas,
          'Fica visível aos clientes depois de aprovado',
        ].where((t) => t.isNotEmpty).toList(),
        onContinue: () => ref.read(authControllerProvider.notifier).completeOnboarding(),
      );
    }
    if (_step == _Step.intro) {
      return _IntroView(
        onStart: () => setState(() => _stepIndex++),
        onExit: () => exitOnboarding(context, ref),
      );
    }

    // Canvas "Parceiro 1–7": branco, voltar redondo, "Passo X de N",
    // barra fina, pergunta 28/34 e "Continuar" verde em baixo.
    final total = _steps.length - 1;
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(28, 12, 28, 34),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              SizedBox(
                height: 44,
                child: Align(
                  alignment: Alignment.centerLeft,
                  child: CircleBackButton(onTap: () => setState(() => _stepIndex--)),
                ),
              ),
              const SizedBox(height: 20),
              Text('Passo $_stepIndex de $total', style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
              const SizedBox(height: 8),
              ClipRRect(
                borderRadius: BorderRadius.circular(3),
                child: TweenAnimationBuilder<double>(
                  tween: Tween(end: _stepIndex / total),
                  duration: const Duration(milliseconds: 260),
                  builder: (context, v, _) => LinearProgressIndicator(
                    value: v,
                    minHeight: 3,
                    backgroundColor: AppTheme.borderMuted,
                    color: AppTheme.accentOliveDark,
                  ),
                ),
              ),
              Expanded(child: SingleChildScrollView(child: _buildStep(context))),
              const SizedBox(height: 12),
              SizedBox(
                height: 54,
                child: FilledButton(
                  onPressed: !_canContinue || _saving ? null : _continue,
                  style: FilledButton.styleFrom(
                    backgroundColor: AppTheme.accentOliveDark,
                    disabledBackgroundColor: AppTheme.borderMuted,
                    foregroundColor: Colors.white,
                    disabledForegroundColor: AppTheme.inkMuted,
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
                    textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 16, fontWeight: FontWeight.w700),
                  ),
                  child: _saving
                      ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2.5, color: Colors.white))
                      : Text(_stepIndex == total ? 'Concluir' : 'Continuar'),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  List<String> get _areas => _serviceAreasText.text
      .split(',')
      .map((a) => a.trim())
      .where((a) => a.isNotEmpty)
      .toList();

  void _toggleArea(String area) {
    final list = _areas;
    list.contains(area) ? list.remove(area) : list.add(area);
    setState(() => _serviceAreasText.text = list.join(', '));
  }

  void _addOtherArea() {
    final a = _otherArea.text.trim();
    if (a.isEmpty) return;
    final list = _areas;
    if (!list.contains(a)) list.add(a);
    setState(() {
      _serviceAreasText.text = list.join(', ');
      _otherArea.clear();
    });
  }

  void _toggleCategory(String id) {
    setState(() {
      if (_selectedCategoryIds.contains(id)) {
        _selectedCategoryIds.remove(id);
      } else if (_selectedCategoryIds.length < 5) {
        _selectedCategoryIds.add(id);
      } else {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Até 5 categorias.')));
      }
    });
  }

  Widget _buildStep(BuildContext context) {
    switch (_step) {
      case _Step.intro:
        return const SizedBox.shrink();
      case _Step.businessName:
        return _StepScaffold(
          question: 'Como se chama o vosso negócio?',
          subtitle: 'É o nome que os clientes vão ver.',
          child: AuthTextField(
            label: 'Nome do negócio',
            controller: _businessName,
            onChanged: (_) => setState(() {}),
          ),
        );
      case _Step.category:
        return _StepScaffold(
          question: 'O que oferecem?',
          subtitle: 'Até 5 categorias.',
          child: _categoryOptions.isEmpty
              ? const Padding(padding: EdgeInsets.all(24), child: Center(child: CircularProgressIndicator()))
              : GridView(
                  shrinkWrap: true,
                  physics: const NeverScrollableScrollPhysics(),
                  gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                    crossAxisCount: 3,
                    mainAxisSpacing: 8,
                    crossAxisSpacing: 8,
                    mainAxisExtent: 80,
                  ),
                  children: [
                    for (final o in _categoryOptions)
                      _CategoryTile(
                        label: o.label,
                        icon: _categoryIcon(o.slug),
                        selected: _selectedCategoryIds.contains(o.id),
                        onTap: () => _toggleCategory(o.id),
                      ),
                  ],
                ),
        );
      case _Step.details:
        final spec = categoryDetailSpec(_primarySlug);
        final labels = _categoryOptions.where((o) => _selectedCategoryIds.contains(o.id)).map((o) => o.label);
        final label = labels.isEmpty ? '' : labels.first;
        return _StepScaffold(
          chip: label.isEmpty ? null : label,
          question: spec.question,
          subtitle: spec.hint,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              if (spec.range)
                Row(
                  children: [
                    Expanded(
                      child: _NumberStepper(
                        label: 'Mínimo',
                        unit: spec.unit,
                        value: _figureMin,
                        onChanged: (v) => setState(() => _figureMin = v),
                      ),
                    ),
                    const SizedBox(width: 12),
                    Expanded(
                      child: _NumberStepper(
                        label: 'Máximo',
                        unit: spec.unit,
                        value: _figureMax,
                        onChanged: (v) => setState(() => _figureMax = v),
                      ),
                    ),
                  ],
                )
              else
                _NumberStepper(
                  label: spec.singleLabel,
                  unit: spec.unit,
                  value: _figureMin,
                  onChanged: (v) => setState(() => _figureMin = v),
                ),
              if (spec.offerings.isNotEmpty) ...[
                const SizedBox(height: 24),
                Text(spec.offeringsTitle, style: const TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base + 1, color: AppTheme.ink)),
                const SizedBox(height: 10),
                Wrap(
                  spacing: 8,
                  runSpacing: 8,
                  children: [
                    for (final o in spec.offerings)
                      FilterChip(
                        label: Text(o),
                        selected: _offerings.contains(o),
                        showCheckmark: false,
                        selectedColor: AppTheme.accentOliveDark,
                        labelStyle: TextStyle(
                          fontFamily: AppTheme.fontFamily,
                          fontFamilyFallback: AppTheme.fontFamilyFallback,
                          fontWeight: FontWeight.w700,
                          color: _offerings.contains(o) ? Colors.white : AppTheme.ink,
                        ),
                        onSelected: (on) => setState(() => on ? _offerings.add(o) : _offerings.remove(o)),
                      ),
                  ],
                ),
              ],
            ],
          ),
        );
      case _Step.logo:
        return _StepScaffold(
          question: 'Logótipo do negócio',
          subtitle: 'Obrigatório — é assim que os clientes te reconhecem na plataforma.',
          child: Center(
            child: Column(
              children: [
                ClipOval(
                  child: Container(
                    width: 140,
                    height: 140,
                    color: AppColors.gray,
                    child: _pickedLogoBytes != null
                        ? Image.memory(_pickedLogoBytes!, fit: BoxFit.cover)
                        : (_existingLogoUrl?.isNotEmpty ?? false)
                            ? SizedNetworkImage(_existingLogoUrl!, fit: BoxFit.cover)
                            : const Icon(Icons.storefront_outlined, size: 40, color: AppTheme.inkMuted),
                  ),
                ),
                const SizedBox(height: 16),
                // `SnappyTap` (GestureDetector puro), não `OutlinedButton`
                // (Material) — no Flutter Web, a camada de ripple/animação
                // do Material introduz um atraso entre o clique físico e a
                // chamada a `onPressed` que faz o browser deixar de
                // considerar `ImagePicker.pickImage()` parte do mesmo gesto
                // do utilizador, e o `<input type="file">` interno não abre
                // (sem erro nenhum — falha silenciosa). Mesmo padrão já
                // usado com sucesso em `partner_portfolio_screen.dart`.
                SnappyTap(
                  onTap: _pickLogo,
                  child: Container(
                    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 12),
                    decoration: BoxDecoration(
                      border: Border.all(color: AppTheme.accentOliveDark),
                      borderRadius: BorderRadius.circular(AppRadius.pill),
                    ),
                    child: Text(
                      _pickedLogo != null || (_existingLogoUrl?.isNotEmpty ?? false)
                          ? 'Trocar logótipo'
                          : 'Escolher logótipo',
                      style: TextStyle(
                        color: AppTheme.accentOliveDark,
                        fontWeight: FontWeight.w700,
                        fontSize: AppFontSize.base,
                      ),
                    ),
                  ),
                ),
              ],
            ),
          ),
        );
      case _Step.portfolio:
        final images = _portfolioItems.where((i) => i.mediaType == PortfolioMediaType.image).toList();
        final videos = _portfolioItems.where((i) => i.mediaType == PortfolioMediaType.video).toList();
        final items = [...images, ...videos];
        final empty = (6 - items.length).clamp(1, 6);
        return _StepScaffold(
          question: 'Mostrem o vosso trabalho',
          subtitle: images.length >= _minPortfolioImages
              ? 'Já têm as $_minPortfolioImages fotos. Podem juntar mais.'
              : 'Pelo menos $_minPortfolioImages fotos. São a primeira coisa que os clientes veem.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              GridView(
                shrinkWrap: true,
                physics: const NeverScrollableScrollPhysics(),
                gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                  crossAxisCount: 3,
                  mainAxisSpacing: 6,
                  crossAxisSpacing: 6,
                ),
                children: [
                  for (final item in items)
                    ClipRRect(
                      borderRadius: BorderRadius.circular(12),
                      child: Stack(
                        fit: StackFit.expand,
                        children: [
                          item.mediaType == PortfolioMediaType.video
                              ? Container(
                                  color: AppTheme.ink,
                                  alignment: Alignment.center,
                                  child: const Icon(Icons.play_circle_outline, color: Colors.white, size: 28),
                                )
                              : _localMedia[item.id] != null
                                  ? Image.memory(_localMedia[item.id]!.bytes, fit: BoxFit.cover)
                                  : SizedNetworkImage(
                                      item.mediaUrl,
                                      fit: BoxFit.cover,
                                      errorBuilder: (c, e, st) => Container(color: AppTheme.accentTint),
                                    ),
                          Positioned(
                            top: 4,
                            right: 4,
                            child: GestureDetector(
                              onTap: _portfolioBusy ? null : () => _removePortfolioItem(item),
                              child: Container(
                                width: 22,
                                height: 22,
                                decoration: const BoxDecoration(color: Colors.black54, shape: BoxShape.circle),
                                child: const Icon(Icons.close, size: 13, color: Colors.white),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  for (var i = 0; i < empty; i++)
                    SnappyTap(
                      onTap: _portfolioBusy ? () {} : _addPortfolioImages,
                      child: CustomPaint(
                        painter: const _DashedBorder(radius: 12),
                        child: Center(
                          child: i == 0 && _portfolioBusy
                              ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2))
                              : const Icon(Icons.add, color: AppTheme.inkMuted),
                        ),
                      ),
                    ),
                ],
              ),
              if (videos.isEmpty) ...[
                const SizedBox(height: 14),
                Align(
                  alignment: Alignment.centerLeft,
                  child: SnappyTap(
                    onTap: _portfolioBusy ? () {} : _addPortfolioVideo,
                    child: Text(
                      '+ Adicionar vídeo (opcional)',
                      style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark),
                    ),
                  ),
                ),
              ],
            ],
          ),
        );
      case _Step.description:
        return _StepScaffold(
          question: 'Descreve o teu negócio',
          subtitle: 'Mín. 50 caracteres — ${_description.text.trim().length}/50.',
          child: TextField(
            controller: _description,
            maxLines: 5,
            minLines: 4,
            onChanged: (_) => setState(() {}),
            decoration: const InputDecoration(
              hintText: 'O que torna o teu serviço especial?',
            ),
          ),
        );
      case _Step.serviceAreas:
        final areas = _areas;
        return _StepScaffold(
          question: 'Onde trabalham?',
          subtitle: 'Escolham as zonas onde aceitam pedidos.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Wrap(
                spacing: 8,
                runSpacing: 8,
                children: [
                  for (final a in {..._areaOptions, ...areas})
                    _Pill(label: a, selected: areas.contains(a), onTap: () => _toggleArea(a)),
                ],
              ),
              const SizedBox(height: 14),
              Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: _otherArea,
                      onSubmitted: (_) => _addOtherArea(),
                      decoration: const InputDecoration(hintText: 'Outra zona', isDense: true),
                    ),
                  ),
                  const SizedBox(width: 8),
                  TextButton(onPressed: _addOtherArea, child: const Text('Juntar')),
                ],
              ),
              const SizedBox(height: 24),
              _RadioRow(
                label: 'Também me desloco a todo o país',
                selected: _nationwide,
                onTap: () => setState(() => _nationwide = !_nationwide),
              ),
            ],
          ),
        );
      case _Step.taxId:
        return _StepScaffold(
          question: 'Qual é o NIF da empresa?',
          subtitle: 'Precisamos disto para a faturação — 9 dígitos.',
          child: AuthTextField(
            label: 'NIF',
            controller: _taxId,
            keyboardType: TextInputType.number,
            onChanged: (_) => setState(() {}),
          ),
        );
      case _Step.services:
        return _StepScaffold(
          question: 'Como apresentam os preços?',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              _RadioRow(
                label: 'Pacotes com preço fechado',
                selected: _pricingMode == 'packages',
                onTap: _pricingBusy ? () {} : () => _setPricingMode('packages'),
              ),
              const SizedBox(height: 10),
              _RadioRow(
                label: 'Só por orçamento',
                selected: _pricingMode == 'quote_only',
                onTap: _pricingBusy ? () {} : () => _setPricingMode('quote_only'),
              ),
              if (_pricingMode == 'packages') ...[
                const SizedBox(height: 20),
                for (final (i, pkg) in _packages.indexed) ...[
                  Text(const ['Primeiro pacote', 'Segundo pacote', 'Terceiro pacote'][i.clamp(0, 2)], style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  const SizedBox(height: 6),
                  Container(
                    constraints: const BoxConstraints(minHeight: 60),
                    padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
                    margin: const EdgeInsets.only(bottom: 12),
                    decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(16)),
                    child: Row(
                      children: [
                        Expanded(
                          child: Text(
                            '${pkg.name} · ${pkg.isStartingPrice ? "desde " : ""}${euros(pkg.price)}',
                            style: const TextStyle(fontSize: 17, color: AppTheme.ink),
                          ),
                        ),
                        GestureDetector(
                          onTap: _pricingBusy ? null : () => _removePackage(pkg),
                          child: const Icon(Icons.close, size: 18, color: AppTheme.inkMuted),
                        ),
                      ],
                    ),
                  ),
                ],
                if (_packages.length < 3)
                  Align(
                    alignment: Alignment.centerLeft,
                    child: SnappyTap(
                      onTap: _pricingBusy ? () {} : _addPackage,
                      child: Text(
                        _packages.isEmpty ? '+ Adicionar pacote' : '+ Adicionar outro pacote',
                        style: TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark),
                      ),
                    ),
                  ),
              ],
            ],
          ),
        );
      case _Step.yearsExperience:
        return _StepScaffold(
          question: 'Há quantos anos trabalhas nisto?',
          subtitle: 'Opcional, mas ajuda os clientes a confiar em ti.',
          child: AuthTextField(
            label: 'Anos de experiência',
            controller: _yearsExperience,
            keyboardType: TextInputType.number,
            onChanged: (_) => setState(() {}),
          ),
        );
      case _Step.instagram:
        return _StepScaffold(
          question: 'Tens Instagram do negócio?',
          subtitle: 'Opcional, mas ajuda os clientes a ver o teu trabalho.',
          child: AuthTextField(
            label: 'Instagram',
            controller: _instagram,
            onChanged: (_) => setState(() {}),
          ),
        );
    }
  }
}

class _IntroView extends StatelessWidget {
  final VoidCallback onStart;
  final VoidCallback onExit;

  const _IntroView({required this.onStart, required this.onExit});

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.hero,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(28, 12, 28, 34),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              // Seta para sair do registo (nada fica gravado).
              SizedBox(height: 44, child: Align(alignment: Alignment.centerLeft, child: CircleBackButton(onTap: onExit))),
              Expanded(
                child: Center(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      const Center(child: TchinMascot(pose: MascotPose.wave, width: 200)),
                      const SizedBox(height: 28),
                      const Text(
                        'Olá, parceiro!',
                        style: TextStyle(fontSize: 28, height: 34 / 28, fontWeight: FontWeight.w700, color: AppTheme.ink),
                      ),
                      const SizedBox(height: 8),
                      const Text(
                        'Faltam só alguns passos rápidos para os clientes te '
                        'poderem encontrar — nome do negócio, categoria, '
                        'logótipo, portefólio de fotos, descrição, área '
                        'de serviço, NIF e preços, mais dois passos '
                        'opcionais no fim.',
                        style: TextStyle(fontSize: 15, height: 22 / 15, fontWeight: FontWeight.w300, color: AppTheme.inkMuted),
                      ),
                    ],
                  ),
                ),
              ),
              AuthPrimaryButton(label: 'Começar', onPressed: onStart),
            ],
          ),
        ),
      ),
    );
  }
}

class _StepScaffold extends StatelessWidget {
  final String question;
  final String? subtitle;
  final String? chip;
  final Widget child;

  const _StepScaffold({required this.question, this.subtitle, this.chip, required this.child});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        if (chip != null) ...[
          const SizedBox(height: 18),
          Align(
            alignment: Alignment.centerLeft,
            child: Container(
              height: 28,
              padding: const EdgeInsets.symmetric(horizontal: 12),
              alignment: Alignment.center,
              decoration: BoxDecoration(color: const Color(0xFFEEF2E9), borderRadius: BorderRadius.circular(999)),
              child: Text(chip!, style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: Color(0xFF3E5539))),
            ),
          ),
          const SizedBox(height: 12),
        ] else
          const SizedBox(height: 32),
        Text(question, style: const TextStyle(fontSize: 28, height: 34 / 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        if (subtitle != null && subtitle!.isNotEmpty) ...[
          const SizedBox(height: 8),
          Text(subtitle!, style: const TextStyle(fontSize: 15, height: 22 / 15, fontWeight: FontWeight.w300, color: AppTheme.inkMuted)),
        ],
        const SizedBox(height: 22),
        child,
      ],
    );
  }
}

IconData _categoryIcon(String slug) {
  final s = slug.toLowerCase();
  if (s.contains('espac') || s.contains('venue') || s.contains('quinta')) return Icons.villa_outlined;
  if (s.contains('cater')) return Icons.restaurant_outlined;
  if (s.contains('foto') || s.contains('photo')) return Icons.photo_camera_outlined;
  if (s.contains('video')) return Icons.videocam_outlined;
  if (s.contains('dj') || s.contains('music') || s.contains('banda')) return Icons.music_note_outlined;
  if (s.contains('flor') || s.contains('decor')) return Icons.local_florist_outlined;
  if (s.contains('bolo') || s.contains('cake')) return Icons.cake_outlined;
  if (s.contains('planner')) return Icons.event_note_outlined;
  if (s.contains('transp')) return Icons.directions_car_outlined;
  if (s.contains('beleza') || s.contains('beauty')) return Icons.face_retouching_natural_outlined;
  if (s.contains('convite') || s.contains('invit')) return Icons.mail_outline;
  return Icons.star_outline_rounded;
}

class _CategoryTile extends StatelessWidget {
  final String label;
  final IconData icon;
  final bool selected;
  final VoidCallback onTap;

  const _CategoryTile({required this.label, required this.icon, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 160),
        padding: const EdgeInsets.all(10),
        decoration: BoxDecoration(
          color: selected ? AppTheme.accentOliveDark : AppTheme.surface,
          borderRadius: BorderRadius.circular(16),
        ),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Icon(icon, size: 20, color: selected ? Colors.white : AppTheme.accentOliveDark),
            Text(
              label,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(fontSize: 12, height: 14 / 12, fontWeight: FontWeight.w700, color: selected ? Colors.white : AppTheme.ink),
            ),
          ],
        ),
      ),
    );
  }
}

class _Pill extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _Pill({required this.label, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 150),
        // Sem `alignment`: assim o botão fica do tamanho do texto em vez
        // de ocupar a linha toda dentro do Wrap.
        height: 40,
        padding: const EdgeInsets.symmetric(horizontal: 16),
        decoration: BoxDecoration(
          color: selected ? AppTheme.accentOliveDark : AppTheme.surface,
          borderRadius: BorderRadius.circular(999),
        ),
        child: Row(
          mainAxisSize: MainAxisSize.min,
          children: [
            if (selected) ...[
              const Icon(Icons.check, size: 16, color: Colors.white),
              const SizedBox(width: 6),
            ],
            Text(
              label,
              style: TextStyle(fontSize: 14, fontWeight: selected ? FontWeight.w700 : FontWeight.w400, color: selected ? Colors.white : AppTheme.ink),
            ),
          ],
        ),
      ),
    );
  }
}

class _RadioRow extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _RadioRow({required this.label, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return Semantics(
      checked: selected,
      button: true,
      child: SnappyTap(
        onTap: onTap,
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 150),
          height: 56,
          padding: const EdgeInsets.symmetric(horizontal: 16),
          decoration: BoxDecoration(
            color: selected ? const Color(0xFFEEF2E9) : AppTheme.surface,
            borderRadius: BorderRadius.circular(16),
            border: Border.all(color: selected ? AppTheme.accentOliveDark : Colors.transparent, width: 1.5),
          ),
          child: Row(
            children: [
              Container(
                width: 22,
                height: 22,
                alignment: Alignment.center,
                decoration: BoxDecoration(
                  shape: BoxShape.circle,
                  border: Border.all(color: selected ? AppTheme.accentOliveDark : const Color(0xFF8F8B84), width: 1.5),
                ),
                child: selected
                    ? Container(width: 12, height: 12, decoration: BoxDecoration(color: AppTheme.accentOliveDark, shape: BoxShape.circle))
                    : null,
              ),
              const SizedBox(width: 12),
              Expanded(
                child: Text(
                  label,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: TextStyle(fontSize: 15, fontWeight: selected ? FontWeight.w700 : FontWeight.w400, color: AppTheme.ink),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}

class _DashedBorder extends CustomPainter {
  final double radius;
  const _DashedBorder({this.radius = 16});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = const Color(0xFFD9D6CF)
      ..style = PaintingStyle.stroke
      ..strokeWidth = 1.5;
    final path = Path()..addRRect(RRect.fromRectAndRadius(Offset.zero & size, Radius.circular(radius)));
    for (final m in path.computeMetrics()) {
      for (double d = 0; d < m.length; d += 9) {
        canvas.drawPath(m.extractPath(d, d + 5), paint);
      }
    }
  }

  @override
  bool shouldRepaint(_DashedBorder old) => old.radius != radius;
}

/// Campo tocável que abre [CategoryPickerDialog] — mesmo aspeto de
/// [AuthTextField], mas de leitura própria (mostra as categorias já
/// escolhidas em vez de texto livre).
class SnappyCategoryPicker extends StatelessWidget {
  final List<String> selectedLabels;
  final VoidCallback? onTap;

  const SnappyCategoryPicker({super.key, required this.selectedLabels, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(AppRadius.sm),
      child: InputDecorator(
        decoration: const InputDecoration(labelText: 'Categorias'),
        child: Text(
          selectedLabels.isEmpty ? 'Escolher categorias' : selectedLabels.join(' · '),
          style: TextStyle(
            color: selectedLabels.isEmpty ? AppTheme.inkMuted : AppTheme.ink,
          ),
        ),
      ),
    );
  }
}


class _SentView extends StatefulWidget {
  final List<String> rows;
  final Future<void> Function() onContinue;

  const _SentView({required this.rows, required this.onContinue});

  @override
  State<_SentView> createState() => _SentViewState();
}

class _SentViewState extends State<_SentView> {
  bool _busy = false;

  @override
  Widget build(BuildContext context) {
    // Canvas "Parceiro 7 · Pronto" — mesmos tempos.
    return Scaffold(
      backgroundColor: Colors.white,
      body: Stack(
        children: [
          const Positioned.fill(
            child: FallingConfetti(delay: Duration(milliseconds: 1300), spread: Duration(milliseconds: 590)),
          ),
          SafeArea(
            child: Padding(
              padding: const EdgeInsets.fromLTRB(28, 12, 28, 34),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  const SizedBox(height: 104),
                  const Align(alignment: Alignment.centerLeft, child: SentBadge()),
                  const SizedBox(height: 28),
                  const UpIn(
                    delay: Duration(milliseconds: 1300),
                    child: Text(
                      'Perfil enviado!',
                      style: TextStyle(fontSize: 28, height: 34 / 28, fontWeight: FontWeight.w700, color: AppTheme.ink),
                    ),
                  ),
                  const SizedBox(height: 8),
                  const UpIn(
                    delay: Duration(milliseconds: 1450),
                    child: Text(
                      'A equipa revê o perfil e fica visível aos clientes assim que estiver aprovado.',
                      style: TextStyle(fontSize: 15, height: 22 / 15, fontWeight: FontWeight.w300, color: AppTheme.inkMuted),
                    ),
                  ),
                  const SizedBox(height: 24),
                  for (final (i, r) in widget.rows.indexed)
                    Padding(
                      padding: const EdgeInsets.only(bottom: 10),
                      child: UpIn(delay: Duration(milliseconds: 1620 + 120 * i), child: ProntoRow(text: r)),
                    ),
                  const Spacer(),
                  UpIn(
                    delay: const Duration(milliseconds: 2100),
                    child: ShineSweep(
                      delay: const Duration(milliseconds: 2400),
                      child: AuthPrimaryButton(
                        label: 'Ir para o painel',
                        loading: _busy,
                        onPressed: () async {
                          setState(() => _busy = true);
                          try {
                            await widget.onContinue();
                          } finally {
                            if (mounted) setState(() => _busy = false);
                          }
                        },
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ],
      ),
    );
  }
}


/// Campo numérico com − / + (passo 4 do parceiro).
class _NumberStepper extends StatelessWidget {
  final String label;
  final String unit;
  final int? value;
  final ValueChanged<int?> onChanged;

  const _NumberStepper({required this.label, required this.unit, required this.value, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    final v = value ?? 0;
    return Container(
      padding: const EdgeInsets.fromLTRB(14, 10, 14, 12),
      decoration: BoxDecoration(
        color: Colors.white,
        borderRadius: BorderRadius.circular(AppRadius.lg),
        border: Border.all(color: AppTheme.borderMuted),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          Text(label, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
          const SizedBox(height: 4),
          Row(
            children: [
              IconButton(
                onPressed: v <= 0 ? null : () => onChanged(v - 1 <= 0 ? null : v - 1),
                icon: const Icon(Icons.remove_rounded),
                tooltip: 'Menos',
              ),
              Expanded(
                child: Column(
                  children: [
                    Text(value == null ? '—' : '$v', style: const TextStyle(fontSize: 26, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    Text(unit, style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                  ],
                ),
              ),
              IconButton(
                onPressed: () => onChanged(v + (v >= 50 ? 10 : 1)),
                icon: const Icon(Icons.add_rounded),
                tooltip: 'Mais',
              ),
            ],
          ),
        ],
      ),
    );
  }
}
