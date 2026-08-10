import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/models/models.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/wedding_widgets.dart';

class WeddingDetailsScreen extends ConsumerStatefulWidget {
  const WeddingDetailsScreen({super.key});

  @override
  ConsumerState<WeddingDetailsScreen> createState() => _WeddingDetailsScreenState();
}

class _WeddingDetailsScreenState extends ConsumerState<WeddingDetailsScreen> {
  final _partner1 = TextEditingController();
  final _partner2 = TextEditingController();
  final _location = TextEditingController();
  final _venue = TextEditingController();
  DateTime? _date;
  CeremonyType _ceremonyType = CeremonyType.civil;
  String? _syncedWeddingId;

  void _syncControllers(Wedding wedding) {
    if (_syncedWeddingId == wedding.id) return;
    _syncedWeddingId = wedding.id;
    _partner1.text = wedding.partnerName1;
    _partner2.text = wedding.partnerName2 ?? '';
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
      appBar: AppBar(title: const Text('O nosso casamento')),
      body: wedding == null
          ? const Center(child: CircularProgressIndicator())
          : Builder(builder: (context) {
              _syncControllers(wedding);
              return ListView(
                padding: const EdgeInsets.all(24),
                children: [
                  WeddingCoverHeader(wedding: wedding),
                  const SizedBox(height: 24),
                  Text('Editar detalhes', style: Theme.of(context).textTheme.titleMedium),
                  const SizedBox(height: 12),
                  AuthTextField(label: 'Nome (tu)', controller: _partner1),
                  const SizedBox(height: 12),
                  AuthTextField(label: 'Nome (parceiro/a)', controller: _partner2),
                  const SizedBox(height: 12),
                  DatePickerField(
                    label: 'Data',
                    value: _date,
                    allowUnknown: false,
                    onChanged: (d) => setState(() => _date = d),
                  ),
                  const SizedBox(height: 12),
                  AuthTextField(label: 'Localização', controller: _location),
                  const SizedBox(height: 12),
                  AuthTextField(label: 'Local / Venue', controller: _venue),
                  const SizedBox(height: 12),
                  DropdownButtonFormField<CeremonyType>(
                    initialValue: _ceremonyType,
                    decoration: const InputDecoration(labelText: 'Tipo de cerimónia'),
                    items: const [
                      DropdownMenuItem(value: CeremonyType.civil, child: Text('Civil')),
                      DropdownMenuItem(value: CeremonyType.religious, child: Text('Religiosa')),
                      DropdownMenuItem(value: CeremonyType.both, child: Text('Ambas')),
                    ],
                    onChanged: (v) => setState(() => _ceremonyType = v ?? _ceremonyType),
                  ),
                  const SizedBox(height: 20),
                  PrimaryButton(
                    label: 'Guardar alterações',
                    loading: weddingState.loading,
                    onPressed: () {
                      ref.read(weddingControllerProvider.notifier).update(
                            wedding.copyWith(
                              partnerName1: _partner1.text.trim(),
                              partnerName2: _partner2.text.trim(),
                              location: _location.text.trim(),
                              venue: _venue.text.trim(),
                              weddingDate: _date,
                              ceremonyType: _ceremonyType,
                            ),
                          );
                      ScaffoldMessenger.of(context).showSnackBar(
                        const SnackBar(content: Text('Casamento atualizado.')),
                      );
                    },
                  ),
                ],
              );
            }),
    );
  }
}
