import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/home/home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/support/support_providers.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/estrela.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/island_sheet.dart';
import 'package:copo_dagua_app/shared/widgets/skeleton.dart';

/// "Falar com a equipa" — pedidos de suporte reais
/// (`support_tickets`, 047_support_tickets.sql). Inclui a categoria
/// "Disputa/atraso" — pedido explícito do utilizador para se resolver
/// diretamente nesta aba, sem um módulo `admin-web/disputes/` à parte.
class SupportScreen extends ConsumerWidget {
  const SupportScreen({super.key});

  Future<void> _showNewTicketSheet(BuildContext context, WidgetRef ref) {
    return showIslandSheet(
      context: context,
      isScrollControlled: true,
      builder: (context) => const _NewTicketSheet(),
    );
  }

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final ticketsAsync = ref.watch(coupleSupportTicketsProvider);

    // Mockup «Páginas do evento» → Falar com a equipa (2026-11-14).
    return GradientScaffold(
      background: AppBackground.feed,
      body: Column(
        children: [
          Expanded(
            child: KitPage(
              pinnedBack: true,
              bottom: 20,
              children: [
                const KitHeader(),
                const KitTitle('Falar com a equipa', subtitle: 'Os vossos pedidos de ajuda.'),
                ticketsAsync.when(
                  loading: () => const Padding(
                    padding: EdgeInsets.only(top: 20),
                    child: SkeletonList(count: 4),
                  ),
                  error: (err, st) => AsyncErrorView(onRetry: () => ref.invalidate(coupleSupportTicketsProvider)),
                  data: (tickets) {
                    if (tickets.isEmpty) {
                      // Lista vazia → a estrela a dormir (DESIGN.md §6).
                      return const Padding(
                        padding: EdgeInsets.only(top: 80),
                        child: Column(children: [
                          EstrelaMascot(Estrela.dormir, size: 88),
                          SizedBox(height: 16),
                          Text('Ainda não abriram nenhum pedido',
                              textAlign: TextAlign.center,
                              style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                          SizedBox(height: 4),
                          Text('Quando precisarem, abram um pedido e respondemos por aqui.',
                              textAlign: TextAlign.center, style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                        ]),
                      );
                    }
                    return KitGroup(top: 20, [for (final t in tickets) _TicketRow(ticket: t)]);
                  },
                ),
              ],
            ),
          ),
          SafeArea(
            top: false,
            minimum: const EdgeInsets.only(bottom: 20),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
              child: FilledButton(
                onPressed: () => _showNewTicketSheet(context, ref),
                style: FilledButton.styleFrom(
                  backgroundColor: AppTheme.ink,
                  foregroundColor: Colors.white,
                  minimumSize: const Size.fromHeight(52),
                  shape: const StadiumBorder(),
                  textStyle: const TextStyle(fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 15, fontWeight: FontWeight.w700),
                ),
                child: const Text('Novo pedido de suporte'),
              ),
            ),
          ),
        ],
      ),
    );
  }
}

class _TicketRow extends StatelessWidget {
  final SupportTicket ticket;

  const _TicketRow({required this.ticket});

  @override
  Widget build(BuildContext context) {
    final tag = switch (ticket.status) {
      SupportTicketStatus.open => const KitTag('Aberto', kind: KitTagKind.pending),
      SupportTicketStatus.pending => const KitTag('A aguardar', kind: KitTagKind.pending),
      SupportTicketStatus.resolved => const KitTag('Resolvido'),
    };
    final sub = [
      if (ticket.category == SupportTicketCategory.disputeDelay) 'Disputa / atraso',
      if (ticket.resolutionNote != null) 'Equipa: ${ticket.resolutionNote}' else if (ticket.description.isNotEmpty) ticket.description,
    ].join(' · ');
    return KitRow(title: ticket.subject, sub: sub.isEmpty ? null : sub, trailing: tag);
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
          Text('Tipo de pedido', style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm)),
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
              const SizedBox(width: 8),
              Expanded(
                child: _CategoryChip(
                  label: 'Erro na app',
                  selected: _category == SupportTicketCategory.bug,
                  onTap: () => setState(() => _category = SupportTicketCategory.bug),
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
          color: selected ? AppTheme.accentOliveDark : AppTheme.surface,
          borderRadius: BorderRadius.circular(AppRadius.pill),
        ),
        child: Text(
          label,
          style: TextStyle(
            color: selected ? Colors.white : AppTheme.ink,
            fontWeight: FontWeight.w700,
            fontSize: AppFontSize.sm,
          ),
        ),
      ),
    );
  }
}
