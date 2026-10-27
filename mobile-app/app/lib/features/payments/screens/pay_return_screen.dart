import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/home/home_providers.dart';
import '../../../core/payments/pay_return.dart';
import '../../../core/payments/payments.dart';
import '../../../core/supabase/supabase_config.dart';
import '../../../core/tasks/task_engine_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import 'pay_done_screen.dart';

/// Volta de um pagamento que precisou de sair da app (2026-10-21):
/// confirma o estado e mostra logo o "Pagamento feito" — sem abertura,
/// sem brinde, sem cair noutro ecrã.
class PayReturnScreen extends ConsumerStatefulWidget {
  const PayReturnScreen({super.key});

  @override
  ConsumerState<PayReturnScreen> createState() => _PayReturnScreenState();
}

class _PayReturnScreenState extends ConsumerState<PayReturnScreen> {
  final String? _id = PayReturn.take();
  bool _gaveUp = false;

  @override
  void initState() {
    super.initState();
    if (_id == null) {
      WidgetsBinding.instance.addPostFrameCallback((_) {
        if (mounted) context.go('/bookings');
      });
    } else {
      _check();
    }
  }

  Future<void> _check() async {
    final id = _id!;
    for (var i = 0; i < 8 && mounted; i++) {
      final (state, _) = await paymentState(id);
      if (!mounted) return;
      if (state == 'paid') return _done(id);
      if (state == 'awaiting_multibanco' || state == 'processing') break;
      await Future<void>.delayed(const Duration(seconds: 2));
    }
    if (mounted) setState(() => _gaveUp = true);
  }

  Future<void> _done(String id) async {
    ref.invalidate(coupleBookingsProvider);
    ref.read(taskEngineControllerProvider.notifier).recompute();
    var partner = 'Parceiro';
    var title = 'Pagamento';
    var amount = '';
    try {
      final row = await supabase
          .from('payments')
          .select('type, amount, bookings(total_amount), partner_profiles(business_name)')
          .eq('id', id)
          .maybeSingle();
      partner = (row?['partner_profiles'] as Map?)?['business_name'] as String? ?? partner;
      title = row?['type'] == 'deposit' ? 'Sinal' : 'Restante';
      final base = (row?['amount'] as num?)?.toDouble() ?? 0;
      final total = ((row?['bookings'] as Map?)?['total_amount'] as num?)?.toDouble() ?? base;
      final pct = (await ref.read(organizerFeeConfigProvider.future)).effectivePct(total);
      amount = euros(amountWithCommission(base, pct), cents: true);
    } catch (_) {}
    if (!mounted) return;
    context.go('/pay/done', extra: PayDoneArgs(partnerName: partner, title: title, amountLabel: amount));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(28),
            child: _gaveUp
                ? Column(mainAxisSize: MainAxisSize.min, children: [
                    Icon(Icons.hourglass_top_rounded, size: 40, color: AppTheme.accentOliveDark),
                    const SizedBox(height: 14),
                    const Text('A confirmar o pagamento',
                        style: TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w800, color: AppTheme.ink)),
                    const SizedBox(height: 8),
                    const Text(
                      'Ainda não recebemos a confirmação. Assim que chegar, a reserva atualiza sozinha.',
                      textAlign: TextAlign.center,
                      style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted, height: 1.4),
                    ),
                    const SizedBox(height: 20),
                    FilledButton(
                      onPressed: () => context.go('/bookings'),
                      style: FilledButton.styleFrom(backgroundColor: AppTheme.accentOliveDark, shape: const StadiumBorder()),
                      child: const Text('Ver reservas'),
                    ),
                  ])
                : Column(mainAxisSize: MainAxisSize.min, children: [
                    CircularProgressIndicator(color: AppTheme.accentOliveDark),
                    const SizedBox(height: 16),
                    const Text('A confirmar o pagamento…', style: TextStyle(fontSize: AppFontSize.base, color: AppTheme.inkMuted)),
                  ]),
          ),
        ),
      ),
    );
  }
}
