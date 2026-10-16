import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../../core/supabase/supabase_config.dart';
import '../../../core/models/models.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/cards.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

/// Página pública de convite — acessível sem sessão iniciada, para os
/// convidados abrirem a partir do link partilhado pelos noivos
/// (`.../#/invite/<código de convidado>`, ver `Wedding.inviteUrl`).
/// Lê o casamento real por `get_public_invite()`
/// (`075_connect_remaining.sql`); se essa migração ainda não correu,
/// cai em `lookup_wedding_by_guest_code()` (050), que só dá os nomes.
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
    _weddingFuture = _load(widget.slug);
  }

  static Future<Wedding?> _load(String code) async {
    List rows;
    try {
      rows = await supabase.rpc('get_public_invite', params: {'p_code': code}) as List;
    } catch (_) {
      rows = await supabase.rpc('lookup_wedding_by_guest_code', params: {'p_code': code}) as List;
    }
    if (rows.isEmpty) return null;
    final r = rows.first as Map<String, dynamic>;
    final date = r['wedding_date'] as String?;
    return Wedding(
      id: r['wedding_id'] as String,
      ownerId: '',
      partnerName1: (r['partner_name_1'] as String?) ?? '',
      partnerName2: r['partner_name_2'] as String?,
      weddingDate: date == null ? null : DateTime.parse(date),
      location: r['location'] as String?,
      venue: r['venue'] as String?,
      coverPhotoUrl: r['cover_photo_url'] as String?,
      quote: r['quote'] as String?,
      guestCode: (r['guest_code'] as String?) ?? code.trim().toUpperCase(),
    );
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
                    borderRadius: BorderRadius.circular(AppRadius.xl),
                    child: SizedBox(
                      height: 260,
                      child: PhotoCardBackground(
                        // Foto de capa real do casal (antes: uma foto
                        // aleatória do picsum.photos).
                        imageUrl: wedding.coverPhotoUrl ?? '',
                        fallbackColor: AppColors.blue,
                      ),
                    ),
                  ),
                  const SizedBox(height: 20),
                  Text(
                    'Estás convidado para o casamento de',
                    textAlign: TextAlign.center,
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md),
                  ),
                  const SizedBox(height: 4),
                  Text(
                    wedding.displayNames,
                    textAlign: TextAlign.center,
                    style: const TextStyle(
                      fontWeight: FontWeight.w800,
                      fontSize: AppFontSize.h2,
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
                        borderRadius: BorderRadius.circular(AppRadius.pill),
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
                      borderRadius: BorderRadius.circular(AppRadius.lg),
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
                    style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm),
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
                fontSize: AppFontSize.md,
              ),
            ),
          ),
        ],
      ),
    );
  }
}
