import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'alert_outline.dart';
import 'island_sheet.dart';

/// «Pagar mais tarde?» (mockups «Reservar por categoria», 2026-11-21): o
/// aviso do que acontece sem pagamento — amarelo, vermelho nos últimos 3
/// dias (DESIGN.md §7) — com «Pagar mais tarde» e «Pagar agora». Devolve
/// `true` se a pessoa escolher pagar mais tarde.
Future<bool> askPayLater(
  BuildContext context, {
  required String partnerName,
  required AlertTone tone,
  required String head,
  required String sub,
  required String note,
}) async {
  final r = await showIslandSheet<bool>(
    context: context,
    builder: (ctx) => Padding(
      padding: const EdgeInsets.all(20),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('Pagar mais tarde?', style: TextStyle(fontSize: 23, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 4),
              Text(partnerName, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
            ]),
          ),
          const SizedBox(width: 12),
          const IslandCloseButton(),
        ]),
        const SizedBox(height: 16),
        AlertOutline(
          tone: tone,
          radius: 22,
          padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 12),
          child: Row(children: [
            Container(width: 8, height: 8, decoration: BoxDecoration(shape: BoxShape.circle, color: alertColor(tone))),
            const SizedBox(width: 10),
            Expanded(
              child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                Text(head, style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text(sub, style: const TextStyle(fontSize: 14, color: AppTheme.inkMuted)),
              ]),
            ),
          ]),
        ),
        const SizedBox(height: 12),
        Text(note, style: const TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted)),
        const SizedBox(height: 20),
        Row(children: [
          Expanded(
            child: SizedBox(
              height: 52,
              child: OutlinedButton(
                onPressed: () => Navigator.of(ctx).pop(true),
                style: OutlinedButton.styleFrom(
                  backgroundColor: Colors.white,
                  foregroundColor: AppTheme.ink,
                  side: const BorderSide(color: AppTheme.ink, width: 1.5),
                  shape: const StadiumBorder(),
                  textStyle: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700),
                ),
                child: const Text('Pagar mais tarde'),
              ),
            ),
          ),
          const SizedBox(width: 8),
          Expanded(
            child: SizedBox(
              height: 52,
              child: FilledButton(
                onPressed: () => Navigator.of(ctx).pop(false),
                style: FilledButton.styleFrom(
                  backgroundColor: AppTheme.ink,
                  foregroundColor: Colors.white,
                  shape: const StadiumBorder(),
                  textStyle: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700),
                ),
                child: const Text('Pagar agora'),
              ),
            ),
          ),
        ]),
      ]),
    ),
  );
  return r == true;
}

/// «Faltam 2 dias» / «Último dia» até [due].
String payLaterDaysLeft(DateTime due) {
  final now = DateTime.now();
  final days = DateTime(due.year, due.month, due.day).difference(DateTime(now.year, now.month, now.day)).inDays;
  return days <= 0 ? 'Último dia' : 'Faltam $days ${days == 1 ? 'dia' : 'dias'}';
}

const _monthsPt = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'];

/// «9 jun».
String payLaterDay(DateTime d) => '${d.day} ${_monthsPt[d.month - 1]}';
