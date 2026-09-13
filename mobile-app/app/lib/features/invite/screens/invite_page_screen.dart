import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/mock/mock_backend.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/cards.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

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

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
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
                      color: AppTheme.surface,
                      borderRadius: BorderRadius.circular(20),
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
                    onPressed: () => context.push(
                      '/register?role=guest'
                      '${wedding.guestCode != null ? '&code=${wedding.guestCode}' : ''}',
                    ),
                    child: const Text('Criar conta e confirmar presença'),
                  ),
                  const SizedBox(height: 8),
                  Text(
                    'É preciso criar conta para confirmar presença e '
                    'acompanhar o casamento.',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: 12),
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
