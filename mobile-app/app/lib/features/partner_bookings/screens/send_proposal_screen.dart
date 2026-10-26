import 'package:flutter/material.dart';
import '../../../shared/widgets/vat_confirm.dart';
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
import '../../../shared/widgets/page_header.dart';
import '../../../shared/money.dart';

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
  // Escolha do parceiro (migração 108): sinal reembolsável se o casal
  // cancelar com 30+ dias de antecedência.
  bool _depositRefundable = true;

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
    // Confirma que o preço da proposta já inclui IVA (2026-10-20).
    if (!await confirmVatIncluded(context, _parseAmount(_price.text)!)) return;
    if (!mounted) return;
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
                  'p_deposit_refundable': _depositRefundable,
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
            // `P0008` = `already_booked_with_partner` (migração 102).
            : e.code == 'P0008'
                ? 'Este casal já tem uma reserva contigo. Só podes enviar outra proposta se essa for cancelada sem o sinal pago.'
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
        child: Column(
          children: [
          PageHeader(
            title: 'Enviar proposta',
            subtitle: 'Para ${widget.booking.clientName}',
          ),
          Expanded(
            child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(24, 20, 24, 24),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.stretch,
            children: [
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
              Container(
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                ),
                child: SwitchListTile.adaptive(
                  value: _depositRefundable,
                  onChanged: (v) => setState(() => _depositRefundable = v),
                  activeTrackColor: AppTheme.accentOliveDark,
                  title: const Text(
                    'Sinal reembolsável',
                    style: TextStyle(fontWeight: FontWeight.w700, fontSize: AppFontSize.base),
                  ),
                  subtitle: Text(
                    _depositRefundable
                        ? 'Se o organizador cancelar nas 48 h depois de pagar, recebe o sinal de volta. Depois disso, fica contigo.'
                        : 'Se o organizador cancelar, o sinal fica sempre contigo. Se fores tu a cancelar, o organizador recebe tudo de volta.',
                    style: const TextStyle(fontSize: AppFontSize.xs),
                  ),
                ),
              ),
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
          ],
        ),
      ),
    );
  }
}

/// Mostra logo, enquanto o parceiro escreve o valor, o que o cliente vai
/// pagar: o valor do parceiro mais a comissão da plataforma por cima, e o
/// sinal (percentagem fixa, `062`) também com a comissão. Pedido do
/// utilizador (2026-10-17): "quando o parceiro coloca 300 € no orçamento,
/// adiciona logo a comissão da app — no valor total e no do sinal".
/// Mesma conta que o checkout ([amountWithCommission]).
class _DepositPreview extends ConsumerWidget {
  final String priceText;

  const _DepositPreview({required this.priceText});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final depositPct = ref.watch(platformDepositPercentageProvider).value;
    final commissionPct = ref.watch(platformCommissionPercentageProvider).value;
    final partnerFeePct = ref.watch(partnerFeePercentageProvider).value ?? 0;
    if (depositPct == null || commissionPct == null) return const SizedBox.shrink();
    final price = double.tryParse(priceText.trim().replaceAll(' ', '').replaceAll(',', '.'));
    String money(double? v) => v == null ? '—' : euros(v, cents: true);
    final fee = price == null ? null : amountWithCommission(price, commissionPct) - price;
    final total = price == null ? null : amountWithCommission(price, commissionPct);
    final deposit = price == null ? null : price * depositPct / 100;
    final depositTotal = deposit == null ? null : amountWithCommission(deposit, commissionPct);
    final pct = commissionPct % 1 == 0 ? commissionPct.toStringAsFixed(0) : commissionPct.toStringAsFixed(1);
    final feePct = partnerFeePct % 1 == 0 ? partnerFeePct.toStringAsFixed(0) : partnerFeePct.toStringAsFixed(1);
    final partnerFee = price == null ? null : price - partnerNet(price, partnerFeePct);
    final net = price == null ? null : partnerNet(price, partnerFeePct);
    final depositNet = deposit == null ? null : partnerNet(deposit, partnerFeePct);

    Widget line(String label, String value, {bool strong = false, bool muted = false}) => Padding(
          padding: const EdgeInsets.symmetric(vertical: 3),
          child: Row(
            children: [
              Expanded(
                child: Text(
                  label,
                  style: TextStyle(
                    fontSize: strong ? AppFontSize.base : AppFontSize.md,
                    fontWeight: strong ? FontWeight.w700 : FontWeight.w400,
                    color: strong ? AppTheme.ink : AppTheme.inkMuted,
                  ),
                ),
              ),
              Text(
                value,
                style: TextStyle(
                  fontSize: strong ? AppFontSize.base : AppFontSize.md,
                  fontWeight: strong ? FontWeight.w700 : FontWeight.w400,
                  color: muted ? AppTheme.inkMuted : AppTheme.ink,
                ),
              ),
            ],
          ),
        );

    return Container(
      padding: const EdgeInsets.fromLTRB(14, 10, 14, 10),
      decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.md)),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          line('O teu valor', money(price), muted: true),
          line('Comissão À Nossa! ($pct%)', fee == null ? '—' : '+ ${money(fee)}', muted: true),
          line('Total para o cliente', money(total), strong: true),
          const Divider(height: 16, color: AppTheme.borderMuted),
          if (partnerFeePct > 0) ...[
            line('Taxa À Nossa! ($feePct%)', partnerFee == null ? '—' : '− ${money(partnerFee)}', muted: true),
            line('Recebes no total', money(net), strong: true),
          ],
          const Divider(height: 16, color: AppTheme.borderMuted),
          line('Sinal (${depositPct.toStringAsFixed(0)}%) para o cliente', money(depositTotal), strong: true),
          line('Recebes de sinal', money(partnerFeePct > 0 ? depositNet : deposit), muted: true),
          const SizedBox(height: 4),
          Text(
            partnerFeePct > 0
                ? 'O cliente paga a comissão de $pct% por cima do teu valor. A À Nossa! desconta $feePct% ao que recebes, quando o dinheiro é libertado (3 dias depois do evento). Valores com IVA incluído.'
                : 'A comissão é paga pelo cliente, por cima do teu valor — recebes o valor por inteiro.',
            style: const TextStyle(fontSize: AppFontSize.sm, height: 1.35, color: AppTheme.inkMuted),
          ),
        ],
      ),
    );
  }
}
