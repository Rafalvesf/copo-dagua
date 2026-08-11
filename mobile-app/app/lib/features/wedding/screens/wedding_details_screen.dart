import 'dart:async';

import 'package:flutter/gestures.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../core/wedding/wedding_nav_icon.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/floating_bottom_nav.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/support_chat.dart';
import '../../../shared/widgets/wedding_widgets.dart';

class WeddingDetailsScreen extends ConsumerStatefulWidget {
  const WeddingDetailsScreen({super.key});

  @override
  ConsumerState<WeddingDetailsScreen> createState() =>
      _WeddingDetailsScreenState();
}

class _WeddingDetailsScreenState extends ConsumerState<WeddingDetailsScreen> {
  final _partner1 = TextEditingController();
  final _partner1Age = TextEditingController();
  final _partner2 = TextEditingController();
  final _partner2Age = TextEditingController();
  final _location = TextEditingController();
  final _venue = TextEditingController();
  DateTime? _date;
  CeremonyType _ceremonyType = CeremonyType.civil;
  String? _syncedWeddingId;

  void _syncControllers(Wedding wedding) {
    if (_syncedWeddingId == wedding.id) return;
    _syncedWeddingId = wedding.id;
    _partner1.text = wedding.partnerName1;
    _partner1Age.text = wedding.partner1Age?.toString() ?? '';
    _partner2.text = wedding.partnerName2 ?? '';
    _partner2Age.text = wedding.partner2Age?.toString() ?? '';
    _location.text = wedding.location ?? '';
    _venue.text = wedding.venue ?? '';
    _date = wedding.weddingDate;
    _ceremonyType = wedding.ceremonyType;
  }

  @override
  Widget build(BuildContext context) {
    final weddingState = ref.watch(weddingControllerProvider);
    final wedding = weddingState.wedding;

    return Scaffold(
      appBar: AppBar(
        title: const Text('O nosso casamento'),
        leading: const CircleBackButton(),
      ),
      body: wedding == null
          ? const Center(child: CircularProgressIndicator())
          : Stack(
              children: [
                Builder(
                  builder: (context) {
                    _syncControllers(wedding);
                    return ListView(
                      padding: const EdgeInsets.fromLTRB(
                        AppTheme.screenMargin,
                        24,
                        AppTheme.screenMargin,
                        110,
                      ),
                      children: [
                        WeddingCoverHeader(wedding: wedding),
                        const SizedBox(height: 24),
                        Text(
                          'Nós <3',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                        const SizedBox(height: 4),
                        Text(
                          'Escolhe a ilustração do ícone central da barra de navegação.',
                          style: Theme.of(context).textTheme.bodySmall,
                        ),
                        const SizedBox(height: 12),
                        const _NavIconPicker(),
                        const SizedBox(height: 24),
                        Text(
                          'Editar detalhes',
                          style: Theme.of(context).textTheme.titleMedium,
                        ),
                        const SizedBox(height: 12),
                        AuthTextField(
                          label: 'Nome (tu)',
                          controller: _partner1,
                        ),
                        const SizedBox(height: 12),
                        AuthTextField(
                          label: 'Idade (tu)',
                          controller: _partner1Age,
                          keyboardType: TextInputType.number,
                        ),
                        const SizedBox(height: 12),
                        AuthTextField(
                          label: 'Nome (parceiro/a)',
                          controller: _partner2,
                        ),
                        const SizedBox(height: 12),
                        AuthTextField(
                          label: 'Idade (parceiro/a)',
                          controller: _partner2Age,
                          keyboardType: TextInputType.number,
                        ),
                        const SizedBox(height: 12),
                        DatePickerField(
                          label: 'Data',
                          value: _date,
                          allowUnknown: false,
                          onChanged: (d) => setState(() => _date = d),
                        ),
                        const SizedBox(height: 12),
                        AuthTextField(
                          label: 'Localização',
                          controller: _location,
                        ),
                        const SizedBox(height: 12),
                        AuthTextField(
                          label: 'Local / Venue',
                          controller: _venue,
                        ),
                        const SizedBox(height: 12),
                        DropdownButtonFormField<CeremonyType>(
                          initialValue: _ceremonyType,
                          decoration: const InputDecoration(
                            labelText: 'Tipo de cerimónia',
                          ),
                          items: const [
                            DropdownMenuItem(
                              value: CeremonyType.civil,
                              child: Text('Civil'),
                            ),
                            DropdownMenuItem(
                              value: CeremonyType.religious,
                              child: Text('Religiosa'),
                            ),
                            DropdownMenuItem(
                              value: CeremonyType.both,
                              child: Text('Ambas'),
                            ),
                          ],
                          onChanged: (v) => setState(
                            () => _ceremonyType = v ?? _ceremonyType,
                          ),
                        ),
                        const SizedBox(height: 20),
                        PrimaryButton(
                          label: 'Guardar alterações',
                          loading: weddingState.loading,
                          onPressed: () {
                            ref
                                .read(weddingControllerProvider.notifier)
                                .update(
                                  wedding.copyWith(
                                    partnerName1: _partner1.text.trim(),
                                    partnerName2: _partner2.text.trim(),
                                    partner1Age: int.tryParse(
                                      _partner1Age.text.trim(),
                                    ),
                                    partner2Age: int.tryParse(
                                      _partner2Age.text.trim(),
                                    ),
                                    location: _location.text.trim(),
                                    venue: _venue.text.trim(),
                                    weddingDate: _date,
                                    ceremonyType: _ceremonyType,
                                  ),
                                );
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(
                                content: Text('Casamento atualizado.'),
                              ),
                            );
                          },
                        ),
                      ],
                    );
                  },
                ),
                const Positioned(
                  left: AppTheme.screenMargin,
                  right: AppTheme.screenMargin,
                  bottom: 24,
                  child: FloatingBottomNav(current: AppTab.wedding),
                ),
                const Positioned.fill(child: DraggableChatBubble()),
              ],
            ),
    );
  }
}

/// Carrossel horizontal estilo "cover flow" (como a roda de álbuns de um
/// iPod): a opção centrada fica maior, as vizinhas ficam mais pequenas e
/// semi-transparentes, e o gesto de deslizar tem inércia/snap suave. Sem
/// anéis, checkmarks ou recortes circulares — só o tamanho comunica qual
/// está selecionada.
class _NavIconPicker extends ConsumerStatefulWidget {
  const _NavIconPicker();

  @override
  ConsumerState<_NavIconPicker> createState() => _NavIconPickerState();
}

class _NavIconPickerState extends ConsumerState<_NavIconPicker> {
  static const _maxExtent = 92.0;
  static const _minScale = 0.6;

  late final PageController _controller;
  double _page = 0;
  Timer? _wheelSnapTimer;

  // Número real de opções (bonecos + botão "+"). O PageView usa um espaço
  // de índices muito maior — um múltiplo grande deste valor — só para dar
  // a sensação de loop infinito em ambas as direções: nunca se chega a
  // uma ponta vazia, seja a arrastar seja com a roda do rato.
  int get _realCount => WeddingNavIcon.values.length + 1; // +1 = botão "+"
  int get _moreIndex => WeddingNavIcon.values.length;
  static const _loopSpan = 2000;

  int _realIndexOf(int rawIndex) => rawIndex % _realCount;

  @override
  void initState() {
    super.initState();
    final initialRealIndex = WeddingNavIcon.values.indexOf(
      ref.read(weddingNavIconProvider),
    );
    final initialPage = (_loopSpan ~/ 2) * _realCount + initialRealIndex;
    _page = initialPage.toDouble();
    _controller =
        PageController(viewportFraction: 0.34, initialPage: initialPage)
          ..addListener(() {
            setState(() => _page = _controller.page ?? _page);
          });
  }

  @override
  void dispose() {
    _wheelSnapTimer?.cancel();
    _controller.dispose();
    super.dispose();
  }

  // A roda do rato num browser desktop só emite delta vertical — sem
  // isto o carrossel horizontal não reage a scroll nenhum, só a
  // arrastar. Depois de uma pausa no scroll, ajusta suavemente para a
  // opção mais próxima, como o "click" da roda de um iPod.
  void _onPointerSignal(PointerSignalEvent event) {
    if (event is! PointerScrollEvent || !_controller.hasClients) return;
    final target = (_controller.offset + event.scrollDelta.dy).clamp(
      0.0,
      _controller.position.maxScrollExtent,
    );
    _controller.jumpTo(target);

    _wheelSnapTimer?.cancel();
    _wheelSnapTimer = Timer(const Duration(milliseconds: 160), () {
      if (!_controller.hasClients) return;
      _controller.animateToPage(
        _page.round(),
        duration: const Duration(milliseconds: 260),
        curve: Curves.easeOut,
      );
    });
  }

  void _onSettle(int rawIndex) {
    final realIndex = _realIndexOf(rawIndex);
    if (realIndex == _moreIndex) {
      ScaffoldMessenger.of(context).showSnackBar(
        const SnackBar(
          content: Text(
            'Em breve: ganha mais bonecos ou recebe-os como oferta.',
          ),
        ),
      );
      return;
    }
    ref
        .read(weddingNavIconProvider.notifier)
        .select(WeddingNavIcon.values[realIndex]);
  }

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: _maxExtent + 24,
      child: Listener(
        onPointerSignal: _onPointerSignal,
        child: PageView.builder(
          controller: _controller,
          itemCount: _loopSpan * _realCount,
          onPageChanged: _onSettle,
          itemBuilder: (context, rawIndex) {
            final realIndex = _realIndexOf(rawIndex);
            final distance = (_page - rawIndex).abs().clamp(0.0, 1.0);
            final scale = 1.0 - distance * (1 - _minScale);
            return Center(
              child: GestureDetector(
                onTap: () => _controller.animateToPage(
                  rawIndex,
                  duration: const Duration(milliseconds: 300),
                  curve: Curves.easeOut,
                ),
                child: Opacity(
                  opacity: 1.0 - distance * 0.55,
                  child: Transform.scale(
                    scale: scale,
                    child: realIndex == _moreIndex
                        ? const _MoreNavIconTile()
                        : _NavIconOptionTile(
                            option: WeddingNavIcon.values[realIndex],
                          ),
                  ),
                ),
              ),
            );
          },
        ),
      ),
    );
  }
}

class _NavIconOptionTile extends StatelessWidget {
  final WeddingNavIcon option;

  const _NavIconOptionTile({required this.option});

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(18),
      child: Image.asset(
        option.assetPath,
        width: _NavIconPickerState._maxExtent,
        height: _NavIconPickerState._maxExtent,
        fit: BoxFit.cover,
      ),
    );
  }
}

class _MoreNavIconTile extends StatelessWidget {
  const _MoreNavIconTile();

  @override
  Widget build(BuildContext context) {
    return Container(
      width: _NavIconPickerState._maxExtent,
      height: _NavIconPickerState._maxExtent,
      decoration: BoxDecoration(
        color: AppColors.muted,
        borderRadius: BorderRadius.circular(18),
      ),
      child: const Icon(Icons.add, color: AppTheme.inkMuted, size: 28),
    );
  }
}
