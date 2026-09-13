import 'dart:typed_data';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../features/partner_profile/screens/business_info_screen.dart' show CategoryPickerDialog;
import '../../../features/partner_profile/screens/partner_pricing_screen.dart' show showEditPackageSheet;
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/progress.dart';
import '../../../shared/widgets/snappy_tap.dart';

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
  const PartnerWelcomeScreen({super.key});

  @override
  ConsumerState<PartnerWelcomeScreen> createState() =>
      _PartnerWelcomeScreenState();
}

enum _Step {
  intro,
  businessName,
  category,
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

const _steps = _Step.values;

final _taxIdRegex = RegExp(r'^\d{9}$');

class _PartnerWelcomeScreenState extends ConsumerState<PartnerWelcomeScreen> {
  int _stepIndex = 0;
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
    Future.microtask(_loadCategories);
    Future.microtask(_loadPricing);
    Future.microtask(_loadPortfolio);
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
    _Step.logo => _pickedLogo != null || (_existingLogoUrl?.isNotEmpty ?? false),
    _Step.portfolio =>
      _portfolioItems.where((i) => i.mediaType == PortfolioMediaType.image).length >=
          _minPortfolioImages,
    _Step.description => _description.text.trim().length >= 50,
    _Step.serviceAreas => _serviceAreasText.text.trim().isNotEmpty,
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

  Future<void> _addPortfolioImages() async {
    final picker = ImagePicker();
    final files = await picker.pickMultiImage(imageQuality: 85);
    if (files.isEmpty) return;
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

  Future<void> _pickCategories() async {
    final result = await showDialog<Set<String>>(
      context: context,
      builder: (context) => CategoryPickerDialog(
        options: _categoryOptions,
        initialSelectedIds: _selectedCategoryIds,
      ),
    );
    if (result == null) return;
    setState(() {
      _selectedCategoryIds
        ..clear()
        ..addAll(result);
    });
  }

  Future<void> _continue() async {
    if (!_canContinue) return;
    if (_stepIndex < _steps.length - 1) {
      setState(() => _stepIndex++);
      return;
    }
    await _finish();
  }

  Future<void> _finish() async {
    setState(() => _saving = true);
    try {
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
          );
      await ref.read(partnerProfileControllerProvider.notifier).updateTaxId(_taxId.text.trim());
      if (!mounted) return;
      await ref.read(authControllerProvider.notifier).completeOnboarding();
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
    if (_step == _Step.intro) {
      return _IntroView(onStart: () => setState(() => _stepIndex++));
    }

    return GradientScaffold(
      background: AppBackground.hero,
      extendBodyBehindAppBar: false,
      appBar: AppBar(automaticallyImplyLeading: false),
      // `SafeArea` + a mesma margem inferior (40) do botão "Começar" em
      // `_IntroView` — pedido explícito do utilizador: "the button
      // continuar and back should be at the same height has the
      // comecar button". Sem isto, o rodapé ficava 16px mais perto do
      // fundo do que o "Começar" (Padding.all(24) vs
      // fromLTRB(_, _, _, 40) do intro).
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(24, 24, 24, 40),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              StepProgressBar(totalSteps: _steps.length - 1, currentStep: _stepIndex - 1),
              const SizedBox(height: 24),
              Expanded(child: _buildStep(context)),
              WizardFooter(
                onBack: () => setState(() => _stepIndex--),
                continueButton: Expanded(
                  child: PrimaryButton(
                    label: _stepIndex == _steps.length - 1 ? 'Concluir' : 'Continuar',
                    loading: _saving,
                    onPressed: !_canContinue || _saving ? null : _continue,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildStep(BuildContext context) {
    switch (_step) {
      case _Step.intro:
        return const SizedBox.shrink();
      case _Step.businessName:
        return _StepScaffold(
          question: 'Qual é o nome do teu negócio?',
          subtitle: 'É este nome que os casais vão ver na plataforma.',
          child: AuthTextField(
            label: 'Nome do negócio',
            controller: _businessName,
            onChanged: (_) => setState(() {}),
          ),
        );
      case _Step.category:
        return _StepScaffold(
          question: 'Em que categorias trabalhas?',
          subtitle: 'Até 5. Isto define quem te encontra na pesquisa.',
          child: SnappyCategoryPicker(
            selectedLabels: _categoryOptions
                .where((o) => _selectedCategoryIds.contains(o.id))
                .map((o) => o.label)
                .toList(),
            onTap: _categoryOptions.isEmpty ? null : _pickCategories,
          ),
        );
      case _Step.logo:
        return _StepScaffold(
          question: 'Logótipo do negócio',
          subtitle: 'Obrigatório — é assim que os casais te reconhecem na plataforma.',
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
                            ? Image.network(_existingLogoUrl!, fit: BoxFit.cover)
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
                      borderRadius: BorderRadius.circular(999),
                    ),
                    child: Text(
                      _pickedLogo != null || (_existingLogoUrl?.isNotEmpty ?? false)
                          ? 'Trocar logótipo'
                          : 'Escolher logótipo',
                      style: const TextStyle(
                        color: AppTheme.accentOliveDark,
                        fontWeight: FontWeight.w700,
                        fontSize: 14,
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
        return _StepScaffold(
          question: 'Mostra o teu trabalho',
          subtitle:
              images.length >= _minPortfolioImages
                  ? 'Já tens o mínimo de $_minPortfolioImages fotos.'
                  : '${images.length}/$_minPortfolioImages fotos — obrigatório.',
          child: Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Expanded(
                  child: GridView.builder(
                    gridDelegate: const SliverGridDelegateWithFixedCrossAxisCount(
                      crossAxisCount: 3,
                      mainAxisSpacing: 10,
                      crossAxisSpacing: 10,
                      childAspectRatio: 0.95,
                    ),
                    itemCount: images.length + videos.length,
                    itemBuilder: (context, index) {
                      final item = index < images.length ? images[index] : videos[index - images.length];
                      return ClipRRect(
                        borderRadius: BorderRadius.circular(14),
                        child: Stack(
                          fit: StackFit.expand,
                          children: [
                            item.mediaType == PortfolioMediaType.video
                                ? Container(
                                    color: AppTheme.ink,
                                    alignment: Alignment.center,
                                    child: const Icon(Icons.play_circle_outline, color: Colors.white, size: 28),
                                  )
                                : Image.network(item.mediaUrl, fit: BoxFit.cover),
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
                      );
                    },
                  ),
                ),
                const SizedBox(height: 12),
                SnappyTap(
                  onTap: _portfolioBusy ? () {} : _addPortfolioImages,
                  child: Container(
                    padding: const EdgeInsets.symmetric(vertical: 12),
                    alignment: Alignment.center,
                    decoration: BoxDecoration(
                      color: AppTheme.accentOliveDark,
                      borderRadius: BorderRadius.circular(999),
                    ),
                    child: Text(
                      _portfolioBusy ? 'A enviar...' : '+ Adicionar fotos',
                      style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 14),
                    ),
                  ),
                ),
                if (videos.isEmpty) ...[
                  const SizedBox(height: 8),
                  SnappyTap(
                    onTap: _portfolioBusy ? () {} : _addPortfolioVideo,
                    child: Container(
                      padding: const EdgeInsets.symmetric(vertical: 12),
                      alignment: Alignment.center,
                      decoration: BoxDecoration(
                        border: Border.all(color: AppTheme.accentOliveDark),
                        borderRadius: BorderRadius.circular(999),
                      ),
                      child: const Text(
                        '+ Adicionar vídeo (opcional)',
                        style: TextStyle(color: AppTheme.accentOliveDark, fontWeight: FontWeight.w700, fontSize: 14),
                      ),
                    ),
                  ),
                ],
              ],
            ),
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
        return _StepScaffold(
          question: 'Onde prestas serviço?',
          subtitle: 'Localidades ou distritos, separados por vírgula.',
          child: AuthTextField(
            label: 'Área de serviço',
            controller: _serviceAreasText,
            onChanged: (_) => setState(() {}),
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
          question: 'Como queres mostrar os teus preços?',
          subtitle: 'Até 3 pacotes fixos, ou só orçamento à medida.',
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(
                children: [
                  Expanded(
                    child: _PricingModeChip(
                      label: 'Pacotes',
                      selected: _pricingMode == 'packages',
                      onTap: _pricingBusy ? null : () => _setPricingMode('packages'),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: _PricingModeChip(
                      label: 'Só orçamento',
                      selected: _pricingMode == 'quote_only',
                      onTap: _pricingBusy ? null : () => _setPricingMode('quote_only'),
                    ),
                  ),
                ],
              ),
              if (_pricingMode == 'packages') ...[
                const SizedBox(height: 20),
                for (final pkg in _packages)
                  Padding(
                    padding: const EdgeInsets.only(bottom: 10),
                    child: Container(
                      padding: const EdgeInsets.all(14),
                      decoration: BoxDecoration(
                        color: Colors.white,
                        borderRadius: BorderRadius.circular(16),
                      ),
                      child: Row(
                        children: [
                          Expanded(
                            child: Text(
                              '${pkg.name}  ${pkg.isStartingPrice ? "A partir de " : ""}€${pkg.price.toStringAsFixed(0)}',
                              style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink),
                            ),
                          ),
                          GestureDetector(
                            onTap: _pricingBusy ? null : () => _removePackage(pkg),
                            child: const Icon(Icons.close, size: 18, color: AppTheme.inkMuted),
                          ),
                        ],
                      ),
                    ),
                  ),
                if (_packages.length < 3)
                  OutlinedButton(
                    onPressed: _pricingBusy ? null : _addPackage,
                    child: const Text('Adicionar pacote'),
                  ),
              ],
            ],
          ),
        );
      case _Step.yearsExperience:
        return _StepScaffold(
          question: 'Há quantos anos trabalhas nisto?',
          subtitle: 'Opcional, mas ajuda os casais a confiar em ti.',
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
          subtitle: 'Opcional, mas ajuda os casais a ver o teu trabalho.',
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

  const _IntroView({required this.onStart});

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.hero,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.fromLTRB(20, 12, 20, 40),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Expanded(
                child: Center(
                  child: Column(
                    mainAxisSize: MainAxisSize.min,
                    crossAxisAlignment: CrossAxisAlignment.start,
                    children: [
                      Text(
                        'Olá, parceiro!',
                        style: AppTypography.displaySerif(fontSize: 34, color: AppTheme.ink),
                      ),
                      const SizedBox(height: 14),
                      const Text(
                        'Estamos felizes por ter-te aqui.',
                        style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink),
                      ),
                      const SizedBox(height: 8),
                      const Text(
                        'Faltam só alguns passos rápidos para os casais te '
                        'poderem encontrar — nome do negócio, categoria, '
                        'logótipo, portefólio de fotos, descrição, área '
                        'de serviço, NIF e preços, mais dois passos '
                        'opcionais no fim.',
                        style: TextStyle(fontSize: 14.5, height: 1.4, color: AppTheme.inkMuted),
                      ),
                      const SizedBox(height: 32),
                      Center(
                        child: ClipOval(
                          child: Container(
                            width: 220,
                            height: 220,
                            color: Colors.white,
                            padding: const EdgeInsets.all(20),
                            child: Image.asset('assets/images/nav_icon_bears.png', fit: BoxFit.contain),
                          ),
                        ),
                      ),
                    ],
                  ),
                ),
              ),
              PrimaryButton(label: 'Começar', onPressed: onStart),
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
  final Widget child;

  const _StepScaffold({required this.question, this.subtitle, required this.child});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.stretch,
      children: [
        Text(question, style: Theme.of(context).textTheme.headlineSmall),
        if (subtitle != null) ...[
          const SizedBox(height: 6),
          Text(subtitle!, style: Theme.of(context).textTheme.bodyMedium),
        ],
        const SizedBox(height: 24),
        child,
      ],
    );
  }
}

class _PricingModeChip extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback? onTap;

  const _PricingModeChip({required this.label, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 14),
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: selected ? AppTheme.accentOliveDark : Colors.transparent,
          borderRadius: BorderRadius.circular(999),
        ),
        child: Text(
          label,
          style: TextStyle(
            color: selected ? Colors.white : AppTheme.ink,
            fontWeight: FontWeight.w700,
            fontSize: 13.5,
          ),
        ),
      ),
    );
  }
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
      borderRadius: BorderRadius.circular(12),
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
