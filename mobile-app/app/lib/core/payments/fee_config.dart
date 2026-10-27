/// Taxas da À Nossa! por escalões marginais sobre o valor total da reserva
/// (como no IRS), IVA incluído — migrações 126/127. Usado para a taxa do
/// parceiro (descontada na libertação) e para a do organizador (somada a
/// cada pagamento). Mesma conta que `supabase/functions/_shared/fees.ts`.
class FeeConfig {
  final List<({double? upTo, double pct})> tiers;
  final double flatPct;

  /// Parceiro: sem taxa até esta data (lançamento, migração 127).
  final DateTime? freeUntil;

  const FeeConfig({this.tiers = const [], this.flatPct = 0, this.freeUntil});

  static FeeConfig parse(Object? raw, {double flatPct = 0, DateTime? freeUntil}) {
    final tiers = <({double? upTo, double pct})>[
      if (raw is List)
        for (final t in raw.whereType<Map>())
          if (t['pct'] is num) (upTo: (t['up_to'] as num?)?.toDouble(), pct: (t['pct'] as num).toDouble()),
    ];
    return FeeConfig(tiers: tiers, flatPct: flatPct, freeUntil: freeUntil);
  }

  bool get isFree => freeUntil != null && DateTime.now().isBefore(freeUntil!);
  bool get isZero => isFree || (tiers.isEmpty && flatPct <= 0);

  /// Taxa sobre o valor total de uma reserva.
  double feeFor(double total) {
    if (isFree) return 0;
    final cents = (total * 100).round();
    if (tiers.isEmpty) return (cents * flatPct / 100).round() / 100;
    var fee = 0.0;
    var prev = 0;
    for (final t in tiers) {
      // Sem `1 << 62`: na web os inteiros são de 53 bits e `<<` é de 32.
      final cap = t.upTo == null ? 9007199254740991 : (t.upTo! * 100).round();
      final portion = (cents < cap ? cents : cap) - prev;
      if (portion <= 0) break;
      fee += portion * t.pct / 100;
      prev = cap;
    }
    return fee.round() / 100;
  }

  /// Percentagem efetiva de uma reserva com este valor total — a mesma
  /// para o sinal e para o restante dessa reserva.
  double effectivePct(double total) {
    if (isFree) return 0;
    if (tiers.isEmpty) return flatPct;
    if (total <= 0) return tiers.first.pct;
    return feeFor(total) / total * 100;
  }

  /// Parte da taxa de um pagamento (sinal/restante) de uma reserva.
  double feeForPayment(double payment, double bookingTotal) {
    if (isFree) return 0;
    if (tiers.isEmpty) return ((payment * 100).round() * flatPct / 100).round() / 100;
    if (bookingTotal <= 0) return 0;
    final f = (feeFor(bookingTotal) * 100 * payment / bookingTotal).round() / 100;
    return f > payment ? payment : f;
  }

  /// "8% até 2 000 €, 6% até 10 000 €, 4% acima"
  String describe(String Function(num) money) {
    String pct(double p) => (p % 1 == 0 ? p.toStringAsFixed(0) : p.toStringAsFixed(1)).replaceAll('.', ',');
    if (tiers.isEmpty) return '${pct(flatPct)}%';
    return [
      for (final t in tiers) t.upTo == null ? '${pct(t.pct)}% acima' : '${pct(t.pct)}% até ${money(t.upTo!)}',
    ].join(', ');
  }
}

typedef PartnerFeeConfig = FeeConfig;

/// Valor que o organizador paga por um pagamento [partnerAmount] de uma
/// reserva com valor total [bookingTotal] (o do parceiro + a taxa).
double organizerPays(double partnerAmount, double bookingTotal, FeeConfig fee) {
  final cents = (partnerAmount * 100).round();
  final pct = fee.effectivePct(bookingTotal);
  return (cents + (cents * pct / 100).round()) / 100;
}
