import 'package:flutter/material.dart';

import '../../../core/mock/mock_backend.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/cards.dart';
import '../../../shared/widgets/form_fields.dart';

/// Página pública de convite — acessível sem sessão iniciada, para os
/// convidados abrirem a partir do link partilhado pelos noivos
/// (`copodeagua.pt/invite/{slug}`).
class InvitePageScreen extends StatefulWidget {
  final String slug;

  const InvitePageScreen({super.key, required this.slug});

  @override
  State<InvitePageScreen> createState() => _InvitePageScreenState();
}

class _InvitePageScreenState extends State<InvitePageScreen> {
  late Future<Wedding?> _weddingFuture;

  @override
  void initState() {
    super.initState();
    _weddingFuture = MockBackend.instance.getWeddingBySlug(widget.slug);
  }

  Future<void> _openRsvpSheet(Wedding wedding) {
    return showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      builder: (context) => _RsvpSheet(wedding: wedding),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: FutureBuilder<Wedding?>(
          future: _weddingFuture,
          builder: (context, snapshot) {
            if (snapshot.connectionState != ConnectionState.done) {
              return const Center(child: CircularProgressIndicator());
            }
            final wedding = snapshot.data;
            if (wedding == null) {
              return Center(
                child: Padding(
                  padding: const EdgeInsets.all(24),
                  child: Text(
                    'Convite não encontrado.',
                    style: TextStyle(color: AppTheme.inkMuted),
                  ),
                ),
              );
            }

            final daysLeft = wedding.weddingDate
                ?.difference(DateTime.now())
                .inDays;

            return SingleChildScrollView(
              padding: const EdgeInsets.fromLTRB(
                AppTheme.screenMargin,
                12,
                AppTheme.screenMargin,
                32,
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.stretch,
                children: [
                  ClipRRect(
                    borderRadius: BorderRadius.circular(24),
                    child: SizedBox(
                      height: 260,
                      child: PhotoCardBackground(
                        imageUrl:
                            'https://picsum.photos/seed/${wedding.id}-venue/900/700',
                        fallbackColor: AppColors.blue,
                      ),
                    ),
                  ),
                  const SizedBox(height: 20),
                  Text(
                    'Estás convidado para o casamento de',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: 13),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    wedding.displayNames,
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      fontWeight: FontWeight.w800,
                      fontSize: 26,
                    ),
                  ),
                  const SizedBox(height: 12),
                  if (daysLeft != null && daysLeft >= 0)
                    Container(
                      alignment: Alignment.center,
                      padding: const EdgeInsets.symmetric(
                        vertical: 8,
                        horizontal: 16,
                      ),
                      decoration: BoxDecoration(
                        color: AppTheme.ink,
                        borderRadius: BorderRadius.circular(999),
                      ),
                      child: Text(
                        'Faltam $daysLeft dias',
                        style: const TextStyle(
                          color: Colors.white,
                          fontWeight: FontWeight.w700,
                        ),
                      ),
                    ),
                  const SizedBox(height: 20),
                  Container(
                    padding: const EdgeInsets.all(18),
                    decoration: BoxDecoration(
                      color: Colors.white,
                      borderRadius: BorderRadius.circular(20),
                      boxShadow: AppTheme.cardShadow,
                    ),
                    child: Column(
                      children: [
                        if (wedding.weddingDate != null)
                          _InfoLine(
                            icon: Icons.calendar_today_outlined,
                            label:
                                '${wedding.weddingDate!.day.toString().padLeft(2, '0')}/${wedding.weddingDate!.month.toString().padLeft(2, '0')}/${wedding.weddingDate!.year}',
                          ),
                        if (wedding.venue != null && wedding.venue!.isNotEmpty)
                          _InfoLine(
                            icon: Icons.villa_outlined,
                            label: wedding.venue!,
                          ),
                        if (wedding.location != null &&
                            wedding.location!.isNotEmpty)
                          _InfoLine(
                            icon: Icons.place_outlined,
                            label: wedding.location!,
                          ),
                      ],
                    ),
                  ),
                  const SizedBox(height: 24),
                  ElevatedButton(
                    onPressed: () => _openRsvpSheet(wedding),
                    child: const Text('Confirmar presença'),
                  ),
                ],
              ),
            );
          },
        ),
      ),
    );
  }
}

class _InfoLine extends StatelessWidget {
  final IconData icon;
  final String label;

  const _InfoLine({required this.icon, required this.label});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(vertical: 6),
      child: Row(
        children: [
          Icon(icon, size: 18, color: AppTheme.ink),
          const SizedBox(width: 10),
          Expanded(
            child: Text(
              label,
              style: const TextStyle(
                fontWeight: FontWeight.w600,
                fontSize: 13.5,
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _RsvpSheet extends StatefulWidget {
  final Wedding wedding;

  const _RsvpSheet({required this.wedding});

  @override
  State<_RsvpSheet> createState() => _RsvpSheetState();
}

class _RsvpSheetState extends State<_RsvpSheet> {
  final _name = TextEditingController();
  RsvpStatus _status = RsvpStatus.confirmed;
  bool _submitted = false;
  bool _submitting = false;
  String? _nameError;

  Future<void> _submit() async {
    if (_name.text.trim().isEmpty) {
      setState(() => _nameError = 'Indica o teu nome');
      return;
    }
    setState(() => _submitting = true);
    await MockBackend.instance.addGuest(
      Guest(
        id: '',
        weddingId: widget.wedding.id,
        name: _name.text.trim(),
        rsvpStatus: _status,
      ),
    );
    if (!mounted) return;
    setState(() {
      _submitting = false;
      _submitted = true;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.only(
        left: 20,
        right: 20,
        top: 20,
        bottom: MediaQuery.of(context).viewInsets.bottom + 20,
      ),
      child: _submitted
          ? Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const Icon(
                  Icons.check_circle,
                  color: AppStatusColors.confirmed,
                  size: 40,
                ),
                const SizedBox(height: 12),
                const Text(
                  'Resposta enviada! Obrigado.',
                  style: TextStyle(fontWeight: FontWeight.w700),
                ),
                const SizedBox(height: 16),
                PrimaryButton(
                  label: 'Fechar',
                  onPressed: () => Navigator.of(context).pop(),
                ),
              ],
            )
          : Column(
              mainAxisSize: MainAxisSize.min,
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Text(
                  'Confirmar presença',
                  style: Theme.of(context).textTheme.titleLarge,
                ),
                const SizedBox(height: 16),
                AuthTextField(
                  label: 'O teu nome',
                  controller: _name,
                  errorText: _nameError,
                ),
                const SizedBox(height: 16),
                SegmentedButton<RsvpStatus>(
                  segments: const [
                    ButtonSegment(
                      value: RsvpStatus.confirmed,
                      label: Text('Vou'),
                    ),
                    ButtonSegment(
                      value: RsvpStatus.declined,
                      label: Text('Não vou'),
                    ),
                  ],
                  selected: {_status},
                  onSelectionChanged: (s) => setState(() => _status = s.first),
                ),
                const SizedBox(height: 20),
                PrimaryButton(
                  label: 'Enviar',
                  onPressed: _submit,
                  loading: _submitting,
                ),
              ],
            ),
    );
  }
}
