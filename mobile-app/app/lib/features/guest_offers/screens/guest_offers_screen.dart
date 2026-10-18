import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../core/guest_offers/guest_offers.dart';
import '../../../core/home/home_providers.dart'
    show CheckoutUnavailable, amountWithCommission, platformCommissionPercentageProvider;
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import '../../../shared/widgets/page_header.dart';
import '../widgets/guest_offer_widgets.dart';

/// Lado do convidado: o alojamento e o transporte que o organizador
/// preparou. Reserva e paga na app (Stripe), o valor vai para o parceiro.
class GuestOffersScreen extends ConsumerWidget {
  final String weddingId;
  const GuestOffersScreen({super.key, required this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final offersAsync = ref.watch(guestOffersProvider(weddingId));
    final mineAsync = ref.watch(myGuestReservationsProvider(weddingId));
    final mine = mineAsync.asData?.value ?? const <GuestReservation>[];

    Future<void> refresh() async {
      ref.invalidate(guestOffersProvider(weddingId));
      ref.invalidate(myGuestReservationsProvider(weddingId));
    }

    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        bottom: false,
        child: Column(
          children: [
            const PageHeader(title: 'Alojamento e transporte', centered: true),
            Expanded(
              child: RefreshIndicator(
                onRefresh: refresh,
                child: offersAsync.when(
                  loading: () => const Center(child: CircularProgressIndicator()),
                  error: (_, __) => ListView(
                    padding: const EdgeInsets.all(AppTheme.screenMargin),
                    children: const [Text('Não foi possível carregar. Puxa para tentar de novo.')],
                  ),
                  data: (offers) => ListView(
                    padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 60),
                    children: [
                      Text(
                        'Os anfitriões combinaram estas opções para ti. Reserva e paga aqui mesmo.',
                        style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md, height: 1.4),
                      ),
                      if (mine.isNotEmpty) ...[
                        const SizedBox(height: 20),
                        const Text('As tuas reservas',
                            style: TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                        const SizedBox(height: 12),
                        for (final r in mine) ...[
                          _MyReservationCard(r, onChanged: refresh),
                          const SizedBox(height: 10),
                        ],
                      ],
                      const SizedBox(height: 20),
                      if (offers.isEmpty)
                        Text('Ainda não há opções de alojamento ou transporte.',
                            style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.base))
                      else
                        for (final kind in GuestOfferKind.values)
                          if (offers.any((o) => o.kind == kind)) ...[
                            Text(kind.label,
                                style: const TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                            const SizedBox(height: 12),
                            for (final o in offers.where((o) => o.kind == kind)) ...[
                              _OfferCard(offer: o, weddingId: weddingId, onReserved: refresh),
                              const SizedBox(height: 12),
                            ],
                            const SizedBox(height: 8),
                          ],
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _OfferCard extends ConsumerWidget {
  final GuestOffer offer;
  final String weddingId;
  final Future<void> Function() onReserved;
  const _OfferCard({required this.offer, required this.weddingId, required this.onReserved});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final o = offer;
    final fee = ref.watch(platformCommissionPercentageProvider).asData?.value ?? 0.0;
    final when = offerWhen(o);
    final soldOut = o.remaining == 0;
    final per = o.kind == GuestOfferKind.lodging ? '/ noite' : '/ lugar';
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: offerCardDecoration(),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Row(
            children: [
              StickerIcon(offerIcon(o.kind), turns: o.kind == GuestOfferKind.lodging ? -0.014 : 0.012),
              const SizedBox(width: 12),
              Expanded(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(o.title, style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    const SizedBox(height: 2),
                    Text([o.partnerName, if (when != null) when].join(' · '),
                        style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
                  ],
                ),
              ),
              const SizedBox(width: 8),
              Column(
                crossAxisAlignment: CrossAxisAlignment.end,
                children: [
                  Text(euros(amountWithCommission(o.price, fee), cents: true),
                      style: const TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  Text(per, style: const TextStyle(fontSize: AppFontSize.xs, color: AppTheme.inkMuted)),
                ],
              ),
            ],
          ),
          if (o.details != null && o.details!.isNotEmpty) ...[
            const SizedBox(height: 10),
            Text(o.details!, style: const TextStyle(fontSize: AppFontSize.md, color: AppTheme.ink, height: 1.35)),
          ],
          const SizedBox(height: 12),
          ThinProgress(o.capacity == 0 ? 1 : o.taken / o.capacity),
          const SizedBox(height: 6),
          Text(soldOut ? 'Esgotado' : '${o.kind.count(o.remaining)} livres',
              style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
          const SizedBox(height: 12),
          FilledButton(
            onPressed: soldOut || !o.payable
                ? null
                : () async {
                    final paid = await showModalBottomSheet<bool>(
                      context: context,
                      isScrollControlled: true,
                      backgroundColor: Colors.white,
                      shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(28))),
                      builder: (_) => _ReserveSheet(offer: o, weddingId: weddingId),
                    );
                    if (paid == true) await onReserved();
                  },
            style: FilledButton.styleFrom(
              backgroundColor: AppTheme.accentOliveDark,
              minimumSize: const Size.fromHeight(46),
              shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999)),
            ),
            child: Text(soldOut
                ? 'Esgotado'
                : o.payable
                    ? 'Reservar'
                    : 'Pagamentos ainda indisponíveis'),
          ),
        ],
      ),
    );
  }
}

class _ReserveSheet extends ConsumerStatefulWidget {
  final GuestOffer offer;
  final String weddingId;
  const _ReserveSheet({required this.offer, required this.weddingId});

  @override
  ConsumerState<_ReserveSheet> createState() => _ReserveSheetState();
}

class _ReserveSheetState extends ConsumerState<_ReserveSheet> {
  int _qty = 1;
  late int _nights = widget.offer.defaultNights;
  bool _busy = false;

  Future<void> _pay() async {
    setState(() => _busy = true);
    try {
      final url = await createGuestReservationCheckoutUrl(
        weddingId: widget.weddingId,
        offerId: widget.offer.id,
        quantity: _qty,
        nights: _nights,
      );
      final opened = await launchUrl(
        Uri.parse(url),
        mode: kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication,
        webOnlyWindowName: kIsWeb ? '_self' : null,
      );
      if (!mounted) return;
      if (!opened) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível abrir o pagamento.')));
      }
      Navigator.of(context).pop(true);
    } on CheckoutUnavailable catch (e) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(guestCheckoutErrorMessage(e.reason))));
      setState(() => _busy = false);
    } catch (_) {
      if (!mounted) return;
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(guestCheckoutErrorMessage('unknown'))));
      setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final o = widget.offer;
    final fee = ref.watch(platformCommissionPercentageProvider).asData?.value ?? 0.0;
    final lodging = o.kind == GuestOfferKind.lodging;
    final total = amountWithCommission(o.price * _qty * (lodging ? _nights : 1), fee);
    final maxQty = o.remaining < 1 ? 1 : (o.remaining > 20 ? 20 : o.remaining);
    return SafeArea(
      child: Padding(
        padding: const EdgeInsets.fromLTRB(24, 12, 24, 24),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          crossAxisAlignment: CrossAxisAlignment.stretch,
          children: [
            Center(
              child: Container(
                width: 40,
                height: 4,
                decoration: BoxDecoration(color: AppTheme.borderMuted, borderRadius: BorderRadius.circular(2)),
              ),
            ),
            const SizedBox(height: 16),
            Row(
              children: [
                StickerIcon(offerIcon(o.kind)),
                const SizedBox(width: 12),
                Expanded(
                  child: Text(o.title,
                      style: const TextStyle(fontSize: AppFontSize.h3, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ),
              ],
            ),
            const SizedBox(height: 20),
            _Stepper(
              label: lodging ? 'Quartos' : 'Lugares',
              value: _qty,
              min: 1,
              max: maxQty,
              onChanged: (v) => setState(() => _qty = v),
            ),
            if (lodging) ...[
              const SizedBox(height: 12),
              _Stepper(label: 'Noites', value: _nights, min: 1, max: 30, onChanged: (v) => setState(() => _nights = v)),
            ],
            const SizedBox(height: 20),
            Container(
              padding: const EdgeInsets.all(14),
              decoration: offerCardDecoration(),
              child: Row(
                children: [
                  const Expanded(child: Text('Total', style: TextStyle(fontSize: AppFontSize.base, color: AppTheme.inkMuted))),
                  Text(euros(total, cents: true),
                      style: const TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                ],
              ),
            ),
            const SizedBox(height: 8),
            Text('Inclui a comissão da app. Pagas com cartão num ecrã seguro da Stripe.',
                style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
            const SizedBox(height: 20),
            FilledButton(
              onPressed: _busy ? null : _pay,
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.accentOliveDark,
                minimumSize: const Size.fromHeight(52),
                shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
              ),
              child: Text(_busy ? 'A abrir pagamento…' : 'Pagar ${euros(total, cents: true)}'),
            ),
          ],
        ),
      ),
    );
  }
}

class _Stepper extends StatelessWidget {
  final String label;
  final int value;
  final int min;
  final int max;
  final ValueChanged<int> onChanged;
  const _Stepper({required this.label, required this.value, required this.min, required this.max, required this.onChanged});

  @override
  Widget build(BuildContext context) {
    final c = AppTheme.accentOliveDark;
    Widget btn(IconData icon, String tip, int? next) => IconButton.filledTonal(
          tooltip: tip,
          onPressed: next == null ? null : () => onChanged(next),
          icon: Icon(icon, color: c),
        );
    return Row(
      children: [
        Expanded(child: Text(label, style: const TextStyle(fontSize: AppFontSize.base, color: AppTheme.ink))),
        btn(Icons.remove, 'Menos', value > min ? value - 1 : null),
        SizedBox(
          width: 40,
          child: Text('$value',
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: AppFontSize.lg, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        ),
        btn(Icons.add, 'Mais', value < max ? value + 1 : null),
      ],
    );
  }
}

class _MyReservationCard extends StatelessWidget {
  final GuestReservation r;
  final Future<void> Function() onChanged;
  const _MyReservationCard(this.r, {required this.onChanged});

  @override
  Widget build(BuildContext context) {
    final paid = r.status == GuestReservationStatus.paid;
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: paid
          ? offerCardDecoration()
          : BoxDecoration(color: const Color(0xFFF6E3DF), borderRadius: BorderRadius.circular(20)),
      child: Row(
        children: [
          StickerIcon(offerIcon(r.kind)),
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(r.offerTitle, style: const TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 2),
                Text(paid ? r.summary : '${r.summary} · a aguardar pagamento',
                    style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
              ],
            ),
          ),
          if (paid)
            const StatusChip('Pago', strong: true)
          else
            TextButton(
              onPressed: () async {
                await cancelGuestReservation(r.id);
                await onChanged();
              },
              child: const Text('Cancelar'),
            ),
        ],
      ),
    );
  }
}
