import 'package:flutter/material.dart';

import '../../../core/guest_offers/guest_offers.dart';
import '../../../core/theme/app_theme.dart';

/// Peças visuais partilhadas pelos ecrãs do organizador e do convidado:
/// cartões brancos com a linha fina e a sombra suave, e o ícone
/// "autocolante" (quadrado branco inclinado) dos menus novos.
BoxDecoration offerCardDecoration({Color? border}) => BoxDecoration(
      color: Colors.white,
      borderRadius: BorderRadius.circular(22),
      border: Border.all(color: border ?? AppTheme.accentOliveDark.withValues(alpha: 0.45), width: border == null ? 1 : 2),
      boxShadow: const [
        BoxShadow(color: Color(0x12171713), blurRadius: 18, offset: Offset(0, 6)),
        BoxShadow(color: Color(0x0D171713), blurRadius: 3, offset: Offset(0, 1)),
      ],
    );

class StickerIcon extends StatelessWidget {
  final IconData icon;
  final double turns;
  final double size;
  const StickerIcon(this.icon, {super.key, this.turns = -0.016, this.size = 40});

  @override
  Widget build(BuildContext context) {
    return Transform.rotate(
      angle: turns * 6.283,
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          color: Colors.white,
          borderRadius: BorderRadius.circular(14),
          boxShadow: const [
            BoxShadow(color: Color(0x14171713), offset: Offset(0, 3)),
            BoxShadow(color: Color(0x1A171713), blurRadius: 12, offset: Offset(0, 4)),
          ],
        ),
        child: Icon(icon, size: size * 0.55, color: AppTheme.accentOliveDark),
      ),
    );
  }
}

IconData offerIcon(GuestOfferKind kind) =>
    kind == GuestOfferKind.lodging ? Icons.hotel_outlined : Icons.directions_bus_outlined;

class ThinProgress extends StatelessWidget {
  final double value;
  const ThinProgress(this.value, {super.key});

  @override
  Widget build(BuildContext context) {
    return ClipRRect(
      borderRadius: BorderRadius.circular(999),
      child: LinearProgressIndicator(
        value: value.clamp(0.0, 1.0),
        minHeight: 6,
        backgroundColor: const Color(0xFFEEF2EC),
        color: AppTheme.accentOliveDark,
      ),
    );
  }
}

class StatusChip extends StatelessWidget {
  final String label;
  final bool strong;
  const StatusChip(this.label, {super.key, this.strong = false});

  @override
  Widget build(BuildContext context) {
    final c = AppTheme.accentOliveDark;
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
      decoration: BoxDecoration(
        color: strong ? c : c.withValues(alpha: 0.14),
        borderRadius: BorderRadius.circular(999),
      ),
      child: Text(
        label,
        style: TextStyle(fontSize: AppFontSize.xs, fontWeight: FontWeight.w700, color: strong ? Colors.white : c),
      ),
    );
  }
}

const _months = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

String shortDate(DateTime d) => '${d.day} ${_months[d.month - 1]}';

/// "11 a 13 jun" para o alojamento; "12 jun · 15:00" para o transporte.
String? offerWhen(GuestOffer o) {
  if (o.kind == GuestOfferKind.lodging && o.startsOn != null) {
    return o.endsOn == null ? 'A partir de ${shortDate(o.startsOn!)}' : '${shortDate(o.startsOn!)} a ${shortDate(o.endsOn!)}';
  }
  final d = o.departureAt;
  if (d == null) return null;
  return '${shortDate(d)} · ${d.hour.toString().padLeft(2, '0')}:${d.minute.toString().padLeft(2, '0')}';
}

/// Cartão "Em breve" com cadeado, igual para convidados e organizadores.
class LockedFeatureCard extends StatelessWidget {
  final String text;
  const LockedFeatureCard({super.key, required this.text});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.all(18),
      decoration: offerCardDecoration(),
      child: Column(
        children: [
          const StickerIcon(Icons.lock_outline, size: 48),
          const SizedBox(height: 12),
          const Text('Em breve',
              style: TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const SizedBox(height: 6),
          Text(text,
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.inkMuted, height: 1.4)),
        ],
      ),
    );
  }
}
