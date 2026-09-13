import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/chat/chat_helpers.dart';
import '../../../core/home/home_providers.dart';
import '../../../core/models/models.dart';
import '../../../core/partner_app/partner_app_providers.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/feedback.dart';
import '../../../shared/widgets/form_fields.dart';
import '../../../shared/widgets/gradient_scaffold.dart';

/// Proposta formal em resposta a um pedido de orçamento — chama
/// `send_proposal()` (`database/migrations/009_quotations_bookings.sql`),
/// nunca chamada em nenhum outro ponto da app antes disto (o botão
/// "Responder" em `booking_detail_screen.dart` só abre o Chat). Sem esta
/// proposta o casal nunca tem nada para aceitar em
/// `couple_bookings_screen.dart`, e sem aceitação nunca existe uma linha
/// real em `bookings` — este ecrã fecha esse buraco.
class SendProposalScreen extends ConsumerStatefulWidget {
  final Booking booking;

  const SendProposalScreen({super.key, required this.booking});

  @override
  ConsumerState<SendProposalScreen> createState() => _SendProposalScreenState();
}

class _SendProposalScreenState extends ConsumerState<SendProposalScreen> {
  late final _title = TextEditingController(
    text: widget.booking.category ?? '',
  );
  final _description = TextEditingController();
  final _price = TextEditingController();
  final _paymentTerms = TextEditingController();

  String? _titleError;
  String? _priceError;
  String? _formError;
  bool _submitting = false;

  @override
  void initState() {
    super.initState();
    _price.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _title.dispose();
    _description.dispose();
    _price.dispose();
    _paymentTerms.dispose();
    super.dispose();
  }

  double? _parseAmount(String text) =>
      double.tryParse(text.trim().replaceAll(',', '.'));

  bool _validate() {
    final price = _parseAmount(_price.text);
    setState(() {
      _titleError = _title.text.trim().isEmpty
          ? 'Indica um título para a proposta'
          : null;
      _priceError = (price == null || price <= 0)
          ? 'Indica um valor total válido'
          : null;
    });
    return _titleError == null && _priceError == null;
  }

  Future<void> _submit() async {
    if (!_validate()) return;
    setState(() {
      _submitting = true;
      _formError = null;
    });
    try {
      final title = _title.text.trim();
      final price = _parseAmount(_price.text)!;
      // Sinal calculado no servidor a partir de
      // `platform_settings.deposit_percentage` (062_deposit_and_cancellation_rules.sql)
      // — o parceiro nunca escolhe este valor. `depositPct` aqui é só
      // para o cartão do chat mostrar o mesmo valor sem esperar por um
      // segundo pedido de rede.
      final depositPct = ref.read(platformDepositPercentageProvider).maybeWhen(
        data: (pct) => pct,
        orElse: () => 20.0,
      );
      final deposit = double.parse((price * depositPct / 100).toStringAsFixed(2));
      final proposalId =
          await supabase.rpc(
                'send_proposal',
                params: {
                  'p_quote_request_id': widget.booking.id,
                  'p_title': title,
                  'p_description': _description.text.trim().isEmpty
                      ? null
                      : _description.text.trim(),
                  'p_price': price,
                  'p_payment_terms': _paymentTerms.text.trim().isEmpty
                      ? null
                      : _paymentTerms.text.trim(),
                },
              )
              as String;
      // Pedido explícito do utilizador: a proposta tem de aparecer no
      // chat, dos dois lados — melhor esforço (não desfaz a proposta já
      // criada se a conversa/mensagem falhar por algum motivo).
      try {
        final conversationId = await getOrCreateConversation(
          weddingId: widget.booking.weddingId,
          partnerId: supabase.auth.currentUser!.id,
        );
        await sendProposalMessage(
          conversationId: conversationId,
          proposalId: proposalId,
          title: title,
          price: price,
          depositAmount: deposit,
        );
      } catch (_) {}
      ref.invalidate(partnerBookingsProvider);
      if (!mounted) return;
      // `context.pop()` (go_router), não `Navigator.of(context).pop()` —
      // misturar os dois é o que estava a fazer o segundo pop "saltar"
      // para fora da pilha de pedidos do parceiro (bug real reportado
      // pelo utilizador, 2026-09-05). Duas chamadas separadas em vez de
      // encadeadas: a segunda só deve correr depois da primeira
      // reconstruir a árvore, `mounted` confirma isso a cada passo.
      context.pop();
      if (!mounted) return;
      context.pop();
    } on PostgrestException catch (e) {
      if (!mounted) return;
      setState(() {
        _submitting = false;
        _formError = e.code == 'P0001'
            ? 'Este pedido já teve uma proposta enviada ou já não está disponível.'
            : 'Não foi possível enviar a proposta.';
      });
    } catch (_) {
      if (!mounted) return;
      setState(() {
        _submitting = false;
        _formError = 'Não foi possível enviar a proposta.';
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.all(24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
              Row(
                children: [
                  const CircleBackButton(),
                  const SizedBox(width: 4),
                  const Text(
                    'Enviar proposta',
                    style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.ink,
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 16),
              Text(
                'Para ${widget.booking.clientName}',
                style: TextStyle(color: AppTheme.inkMuted, fontSize: 13),
              ),
              const SizedBox(height: 16),
              if (_formError != null) ErrorBanner(message: _formError!),
              AuthTextField(
                label: 'Título do serviço',
                controller: _title,
                errorText: _titleError,
              ),
              const SizedBox(height: 12),
              TextField(
                controller: _description,
                maxLines: 4,
                decoration: const InputDecoration(
                  labelText: 'Descrição (opcional)',
                ),
              ),
              const SizedBox(height: 12),
              AuthTextField(
                label: 'Valor total (€)',
                controller: _price,
                keyboardType: const TextInputType.numberWithOptions(
                  decimal: true,
                ),
                errorText: _priceError,
              ),
              const SizedBox(height: 12),
              _DepositPreview(priceText: _price.text),
              const SizedBox(height: 12),
              AuthTextField(
                label: 'Condições de pagamento (opcional)',
                controller: _paymentTerms,
              ),
              const SizedBox(height: 20),
              PrimaryButton(
                label: 'Enviar proposta',
                loading: _submitting,
                onPressed: _submit,
              ),
            ],
          ),
        ),
      ),
    );
  }
}

/// Mostra o sinal que `send_proposal()` vai calcular sozinho a partir de
/// `platform_settings.deposit_percentage` — só leitura, o parceiro nunca
/// escreve este valor (062_deposit_and_cancellation_rules.sql).
class _DepositPreview extends ConsumerWidget {
  final String priceText;

  const _DepositPreview({required this.priceText});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final pctAsync = ref.watch(platformDepositPercentageProvider);
    final price = double.tryParse(priceText.trim().replaceAll(',', '.'));
    return pctAsync.when(
      loading: () => const SizedBox.shrink(),
      error: (err, st) => const SizedBox.shrink(),
      data: (pct) {
        final deposit = price == null ? null : price * pct / 100;
        return Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: BoxDecoration(
            color: AppTheme.surface,
            borderRadius: BorderRadius.circular(14),
          ),
          child: Row(
            children: [
              Text(
                'Sinal (${pct.toStringAsFixed(0)}%, fixo pela plataforma)',
                style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
              ),
              const Spacer(),
              Text(
                deposit == null ? '—' : '${deposit.toStringAsFixed(2)} €',
                style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 14),
              ),
            ],
          ),
        );
      },
    );
  }
}
