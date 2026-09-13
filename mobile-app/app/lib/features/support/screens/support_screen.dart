import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/home/home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/support/support_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/page_header.dart';
import '../../../shared/widgets/snappy_tap.dart';

/// "Falar com a equipa" — pedidos de suporte reais
/// (`support_tickets`, 047_support_tickets.sql). Inclui a categoria
/// "Disputa/atraso" — pedido explícito do utilizador para se resolver
/// diretamente nesta aba, sem um módulo `admin-web/disputes/` à parte.
class SupportScreen extends ConsumerWidget {
  const SupportScreen({super.key});

  Future<void> _showNewTicketSheet(BuildContext context, WidgetRef ref) {
    return showModalBottomSheet(
      context: context,
      isScrollControlled: true,
      builder: (context) => const _NewTicketSheet(),
    );
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final ticketsAsync = ref.watch(coupleSupportTicketsProvider);

    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Column(
          children: [
            Padding(
              padding: const EdgeInsets.fromLTRB(
                AppTheme.screenMargin,
                20,
                AppTheme.screenMargin,
                0,
              ),
              child: Row(
                children: [
                  CircleIconButton(
                    icon: Icons.arrow_back_rounded,
                    size: 46,
                    onTap: () => Navigator.of(context).canPop()
                        ? Navigator.of(context).pop()
                        : context.go('/home'),
                  ),
                  const Spacer(),
                  Text('Falar com a equipa', style: Theme.of(context).textTheme.titleLarge),
                  const Spacer(),
                  const SizedBox(width: 46),
                ],
              ),
            ),
            const SizedBox(height: 16),
            Expanded(
              child: ticketsAsync.when(
                loading: () => const Center(child: CircularProgressIndicator()),
                error: (err, st) => const Center(child: Text('Não foi possível carregar.')),
                data: (tickets) {
                  if (tickets.isEmpty) {
                    return Center(
                      child: Padding(
                        padding: const EdgeInsets.all(24),
                        child: Text(
                          'Ainda não abriram nenhum pedido de suporte.',
                          textAlign: TextAlign.center,
                          style: TextStyle(color: AppTheme.inkMuted),
                        ),
                      ),
                    );
                  }
                  return ListView.builder(
                    padding: const EdgeInsets.fromLTRB(
                      AppTheme.screenMargin,
                      0,
                      AppTheme.screenMargin,
                      140,
                    ),
                    itemCount: tickets.length,
                    itemBuilder: (context, index) => Padding(
                      padding: const EdgeInsets.only(bottom: 12),
                      child: _TicketRow(ticket: tickets[index]),
                    ),
                  );
                },
              ),
            ),
            Padding(
              padding: const EdgeInsets.fromLTRB(
                AppTheme.screenMargin,
                0,
                AppTheme.screenMargin,
                20,
              ),
              child: SizedBox(
                width: double.infinity,
                child: FilledButton(
                  onPressed: () => _showNewTicketSheet(context, ref),
                  style: FilledButton.styleFrom(
                    backgroundColor: AppTheme.accentOliveDark,
                    foregroundColor: Colors.white,
                    padding: const EdgeInsets.symmetric(vertical: 14),
                    shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999)),
                  ),
                  child: const Text('Novo pedido de suporte'),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _TicketRow extends StatelessWidget {
  final SupportTicket ticket;

  const _TicketRow({required this.ticket});

  Color get _statusColor => switch (ticket.status) {
    SupportTicketStatus.open => AppStatusColors.declined,
    SupportTicketStatus.pending => AppTheme.accentOliveDark,
    SupportTicketStatus.resolved => AppTheme.inkMuted,
  };

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
          Row(
            children: [
              if (ticket.category == SupportTicketCategory.disputeDelay) ...[
                Container(
                  padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                  decoration: BoxDecoration(
                    color: AppStatusColors.declined.withValues(alpha: 0.15),
                    borderRadius: BorderRadius.circular(999),
                  ),
                  child: Text(
                    'Disputa / atraso',
                    style: TextStyle(
                      color: AppStatusColors.declined,
                      fontSize: 10,
                      fontWeight: FontWeight.w800,
                    ),
                  ),
                ),
                const SizedBox(width: 6),
              ],
              Expanded(
                child: Text(
                  ticket.subject,
                  style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 13.5),
                ),
              ),
              StatusPill(label: ticket.status.label, color: _statusColor),
            ],
          ),
          if (ticket.description.isNotEmpty) ...[
            const SizedBox(height: 6),
            Text(
              ticket.description,
              maxLines: 2,
              overflow: TextOverflow.ellipsis,
              style: TextStyle(color: AppTheme.inkMuted, fontSize: 12.5),
            ),
          ],
          if (ticket.resolutionNote != null) ...[
            const SizedBox(height: 10),
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(
                color: AppColors.muted,
                borderRadius: BorderRadius.circular(14),
              ),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    'Resposta da equipa',
                    style: TextStyle(
                      fontWeight: FontWeight.w700,
                      fontSize: 11.5,
                      color: AppTheme.accentOliveDark,
                    ),
                  ),
                  const SizedBox(height: 3),
                  Text(
                    ticket.resolutionNote!,
                    style: TextStyle(color: AppTheme.ink, fontSize: 12.5, height: 1.4),
                  ),
                ],
              ),
            ),
          ],
        ],
      ),
    );
  }
}

class _NewTicketSheet extends ConsumerStatefulWidget {
  const _NewTicketSheet();

  @override
  ConsumerState<_NewTicketSheet> createState() => _NewTicketSheetState();
}

class _NewTicketSheetState extends ConsumerState<_NewTicketSheet> {
  final _subject = TextEditingController();
  final _description = TextEditingController();
  SupportTicketCategory _category = SupportTicketCategory.general;
  bool _submitting = false;
  String? _subjectError;

  @override
  void dispose() {
    _subject.dispose();
    _description.dispose();
    super.dispose();
  }

  Future<void> _submit() async {
    if (_subject.text.trim().isEmpty) {
      setState(() => _subjectError = 'O assunto é obrigatório');
      return;
    }
    setState(() => _submitting = true);
    try {
      await createSupportTicket(
        ref,
        subject: _subject.text.trim(),
        description: _description.text.trim(),
        category: _category,
      );
      if (mounted) Navigator.of(context).pop();
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível enviar. Tenta novamente.')),
        );
      }
    } finally {
      if (mounted) setState(() => _submitting = false);
    }
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
      child: Column(
        mainAxisSize: MainAxisSize.min,
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text('Novo pedido de suporte', style: Theme.of(context).textTheme.titleLarge),
          const SizedBox(height: 16),
          Text('Tipo de pedido', style: TextStyle(color: AppTheme.inkMuted, fontSize: 12.5)),
          const SizedBox(height: 8),
          Row(
            children: [
              Expanded(
                child: _CategoryChip(
                  label: 'Geral',
                  selected: _category == SupportTicketCategory.general,
                  onTap: () => setState(() => _category = SupportTicketCategory.general),
                ),
              ),
              const SizedBox(width: 8),
              Expanded(
                child: _CategoryChip(
                  label: 'Disputa / atraso',
                  selected: _category == SupportTicketCategory.disputeDelay,
                  onTap: () => setState(() => _category = SupportTicketCategory.disputeDelay),
                ),
              ),
            ],
          ),
          const SizedBox(height: 16),
          AuthTextField(label: 'Assunto', controller: _subject, errorText: _subjectError),
          const SizedBox(height: 12),
          AuthTextField(label: 'Descrição (opcional)', controller: _description),
          const SizedBox(height: 16),
          PrimaryButton(
            label: _submitting ? 'A enviar...' : 'Enviar pedido',
            onPressed: _submitting ? null : _submit,
          ),
        ],
      ),
    );
  }
}

class _CategoryChip extends StatelessWidget {
  final String label;
  final bool selected;
  final VoidCallback onTap;

  const _CategoryChip({required this.label, required this.selected, required this.onTap});

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.symmetric(vertical: 10),
        alignment: Alignment.center,
        decoration: BoxDecoration(
          color: selected ? AppTheme.ink : AppTheme.surface,
          borderRadius: BorderRadius.circular(999),
        ),
        child: Text(
          label,
          style: TextStyle(
            color: selected ? Colors.white : AppTheme.ink,
            fontWeight: FontWeight.w700,
            fontSize: 12.5,
          ),
        ),
      ),
    );
  }
}
