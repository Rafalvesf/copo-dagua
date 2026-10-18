import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/guest_offers/guest_offers.dart';
import '../../../core/home/home_providers.dart' show amountWithCommission, platformCommissionPercentageProvider;
import '../../../core/theme/app_theme.dart';
import '../../../shared/money.dart';
import 'guest_offer_widgets.dart';

/// Separador "Convidados" das Reservas do organizador: alojamento e
/// transporte combinados com parceiros, que os convidados reservam e
/// pagam na app.
class OrganizerGuestOffers extends ConsumerWidget {
  final String weddingId;
  const OrganizerGuestOffers({super.key, required this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final enabled = ref.watch(guestOffersEnabledProvider).asData?.value ?? false;
    if (!enabled) {
      return ListView(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 140),
        children: const [
          LockedFeatureCard(
            text: 'Alojamento e transporte para os convidados: combinas quartos ou lugares com um parceiro e cada convidado reserva e paga na app.',
          ),
        ],
      );
    }
    final offersAsync = ref.watch(guestOffersProvider(weddingId));
    final resAsync = ref.watch(weddingGuestReservationsProvider(weddingId));
    final offers = offersAsync.asData?.value ?? const <GuestOffer>[];
    final reservations = resAsync.asData?.value ?? const <GuestReservation>[];
    final paid = reservations.where((r) => r.status == GuestReservationStatus.paid).toList();
    final guests = paid.map((r) => r.guestName ?? r.id).toSet().length;

    Future<void> refresh() async {
      ref.invalidate(guestOffersProvider(weddingId));
      ref.invalidate(weddingGuestReservationsProvider(weddingId));
    }

    return RefreshIndicator(
      onRefresh: refresh,
      child: ListView(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 140),
        children: [
          _Hero(guests: guests, paidCount: paid.length, offers: offers.length),
          if (offersAsync.isLoading && offers.isEmpty)
            const Padding(padding: EdgeInsets.all(32), child: Center(child: CircularProgressIndicator()))
          else if (offersAsync.hasError)
            Padding(
              padding: const EdgeInsets.only(top: 24),
              child: Text('Não foi possível carregar. Puxa para tentar de novo.',
                  style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md)),
            )
          else ...[
            if (reservations.isNotEmpty) ...[
              const _SectionTitle('Reservas dos convidados'),
              Container(
                padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 4),
                decoration: offerCardDecoration(),
                child: Column(
                  children: [
                    for (var i = 0; i < reservations.length; i++) _ReservationRow(reservations[i], divider: i > 0),
                  ],
                ),
              ),
            ],
            const _SectionTitle('Para os convidados'),
            if (offers.isEmpty)
              Text(
                'Combina com um hotel ou uma transportadora um bloco de quartos ou lugares. Os convidados veem as opções na app, reservam e pagam lá.',
                style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.md, height: 1.4),
              ),
            for (final o in offers) ...[
              _OfferCard(offer: o, onChanged: refresh),
              const SizedBox(height: 12),
            ],
            const SizedBox(height: 4),
            _AddButton(onTap: () async {
              final created = await showModalBottomSheet<bool>(
                context: context,
                isScrollControlled: true,
                backgroundColor: Colors.white,
                shape: const RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(28))),
                builder: (_) => _NewOfferSheet(weddingId: weddingId),
              );
              if (created == true) await refresh();
            }),
            const SizedBox(height: 10),
            Text(
              'O convidado paga na app e o valor vai para o parceiro.',
              style: TextStyle(color: AppTheme.inkMuted, fontSize: AppFontSize.sm),
            ),
          ],
        ],
      ),
    );
  }
}

class _SectionTitle extends StatelessWidget {
  final String text;
  const _SectionTitle(this.text);

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(top: 24, bottom: 12),
        child: Text(text, style: const TextStyle(fontSize: AppFontSize.xl, fontWeight: FontWeight.w700, color: AppTheme.ink)),
      );
}

class _Hero extends StatelessWidget {
  final int guests;
  final int paidCount;
  final int offers;
  const _Hero({required this.guests, required this.paidCount, required this.offers});

  @override
  Widget build(BuildContext context) {
    final c = AppTheme.accentOliveDark;
    Widget pill(String t, {bool solid = false}) => Container(
          padding: const EdgeInsets.symmetric(horizontal: 10, vertical: 4),
          decoration: BoxDecoration(
            color: solid ? Colors.white : Colors.white.withValues(alpha: 0.2),
            borderRadius: BorderRadius.circular(999),
          ),
          child: Text(t, style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: solid ? c : Colors.white)),
        );
    return Container(
      padding: const EdgeInsets.all(20),
      decoration: BoxDecoration(
        color: c,
        borderRadius: BorderRadius.circular(28),
        boxShadow: const [BoxShadow(color: Color(0x24171713), blurRadius: 28, offset: Offset(0, 10))],
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          const Text('CONVIDADOS COM RESERVA',
              style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, letterSpacing: 1, color: Colors.white)),
          const SizedBox(height: 4),
          Row(
            crossAxisAlignment: CrossAxisAlignment.baseline,
            textBaseline: TextBaseline.alphabetic,
            children: [
              Text('$guests', style: const TextStyle(fontSize: 40, height: 1.1, fontWeight: FontWeight.w700, color: Colors.white)),
              const SizedBox(width: 8),
              Text(guests == 1 ? 'convidado' : 'convidados', style: const TextStyle(fontSize: AppFontSize.base, color: Colors.white)),
            ],
          ),
          const SizedBox(height: 14),
          Wrap(spacing: 8, runSpacing: 8, children: [
            pill('$paidCount ${paidCount == 1 ? 'reserva paga' : 'reservas pagas'}', solid: true),
            pill('$offers ${offers == 1 ? 'opção' : 'opções'}'),
          ]),
        ],
      ),
    );
  }
}

class _ReservationRow extends StatelessWidget {
  final GuestReservation r;
  final bool divider;
  const _ReservationRow(this.r, {required this.divider});

  @override
  Widget build(BuildContext context) {
    final name = r.guestName ?? 'Convidado';
    final initials = name.trim().split(RegExp(r'\s+')).take(2).map((w) => w.isEmpty ? '' : w[0].toUpperCase()).join();
    final avatar = Container(
      width: 36,
      height: 36,
      clipBehavior: Clip.antiAlias,
      decoration: const BoxDecoration(
        color: Colors.white,
        shape: BoxShape.circle,
        boxShadow: [
          BoxShadow(color: Color(0x14171713), offset: Offset(0, 3)),
          BoxShadow(color: Color(0x1A171713), blurRadius: 12, offset: Offset(0, 4)),
        ],
      ),
      alignment: Alignment.center,
      child: r.guestAvatarUrl != null
          ? Image.network(r.guestAvatarUrl!, fit: BoxFit.cover, width: 36, height: 36,
              errorBuilder: (_, __, ___) => Text(initials, style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)))
          : Text(initials, style: TextStyle(fontSize: AppFontSize.sm, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
    );
    return Container(
      padding: const EdgeInsets.symmetric(vertical: 10),
      decoration: BoxDecoration(border: divider ? const Border(top: BorderSide(color: Color(0xFFEEF2EC))) : null),
      child: Row(
        children: [
          avatar,
          const SizedBox(width: 12),
          Expanded(
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                Text(name, style: const TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                const SizedBox(height: 2),
                Text('${r.offerTitle} · ${r.summary}',
                    maxLines: 1,
                    overflow: TextOverflow.ellipsis,
                    style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
              ],
            ),
          ),
          const SizedBox(width: 8),
          StatusChip(r.status == GuestReservationStatus.paid ? 'Pago' : 'A pagar', strong: r.status == GuestReservationStatus.paid),
        ],
      ),
    );
  }
}

class _OfferCard extends StatefulWidget {
  final GuestOffer offer;
  final Future<void> Function() onChanged;
  const _OfferCard({required this.offer, required this.onChanged});

  @override
  State<_OfferCard> createState() => _OfferCardState();
}

class _OfferCardState extends State<_OfferCard> {
  bool _busy = false;

  @override
  Widget build(BuildContext context) {
    final o = widget.offer;
    final when = offerWhen(o);
    final per = o.kind == GuestOfferKind.lodging ? 'por quarto/noite' : 'por lugar';
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
                    Text(
                      [o.kind.label, o.partnerName, if (when != null) when].join(' · '),
                      maxLines: 2,
                      overflow: TextOverflow.ellipsis,
                      style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted),
                    ),
                  ],
                ),
              ),
              const SizedBox(width: 8),
              Text('${o.taken}/${o.capacity}',
                  style: TextStyle(fontSize: AppFontSize.base + 1, fontWeight: FontWeight.w700, color: AppTheme.accentOliveDark)),
            ],
          ),
          const SizedBox(height: 12),
          ThinProgress(o.capacity == 0 ? 0 : o.taken / o.capacity),
          const SizedBox(height: 8),
          Row(
            children: [
              Expanded(
                child: Text('${o.kind.count(o.remaining)} livres · ${euros(o.price, cents: true)} $per',
                    style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
              ),
            ],
          ),
          if (!o.payable) ...[
            const SizedBox(height: 10),
            Container(
              padding: const EdgeInsets.all(10),
              decoration: BoxDecoration(color: const Color(0xFFF6E3DF), borderRadius: BorderRadius.circular(14)),
              child: const Text(
                'O parceiro ainda não ativou os pagamentos na app. Os convidados só conseguem pagar quando ele o fizer.',
                style: TextStyle(fontSize: AppFontSize.sm, color: AppTheme.ink),
              ),
            ),
          ],
          const SizedBox(height: 4),
          Row(
            children: [
              const Expanded(child: Text('Visível aos convidados', style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.ink))),
              Switch(
                value: o.isActive,
                activeTrackColor: AppTheme.accentOliveDark,
                onChanged: _busy
                    ? null
                    : (v) async {
                        setState(() => _busy = true);
                        try {
                          await setGuestOfferActive(o.id, v);
                          await widget.onChanged();
                        } catch (_) {
                          if (context.mounted) {
                            ScaffoldMessenger.of(context).showSnackBar(
                              const SnackBar(content: Text('Não foi possível guardar. Tenta novamente.')),
                            );
                          }
                        } finally {
                          if (mounted) setState(() => _busy = false);
                        }
                      },
              ),
            ],
          ),
        ],
      ),
    );
  }
}

class _AddButton extends StatelessWidget {
  final VoidCallback onTap;
  const _AddButton({required this.onTap});

  @override
  Widget build(BuildContext context) {
    final c = AppTheme.accentOliveDark;
    return Material(
      color: Colors.white,
      borderRadius: BorderRadius.circular(18),
      child: InkWell(
        borderRadius: BorderRadius.circular(18),
        onTap: onTap,
        child: Container(
          height: 52,
          decoration: BoxDecoration(
            borderRadius: BorderRadius.circular(18),
            border: Border.all(color: c, width: 1.5),
          ),
          alignment: Alignment.center,
          child: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(Icons.add, size: 18, color: c),
              const SizedBox(width: 8),
              Text('Adicionar alojamento ou transporte',
                  style: TextStyle(fontSize: AppFontSize.base, fontWeight: FontWeight.w700, color: c)),
            ],
          ),
        ),
      ),
    );
  }
}

class _NewOfferSheet extends ConsumerStatefulWidget {
  final String weddingId;
  const _NewOfferSheet({required this.weddingId});

  @override
  ConsumerState<_NewOfferSheet> createState() => _NewOfferSheetState();
}

class _NewOfferSheetState extends ConsumerState<_NewOfferSheet> {
  GuestOfferKind _kind = GuestOfferKind.lodging;
  String? _partnerId;
  final _title = TextEditingController();
  final _details = TextEditingController();
  final _capacity = TextEditingController();
  final _price = TextEditingController();
  DateTime? _start;
  DateTime? _end;
  DateTime? _departure;
  bool _saving = false;
  String? _error;

  @override
  void dispose() {
    _title.dispose();
    _details.dispose();
    _capacity.dispose();
    _price.dispose();
    super.dispose();
  }

  Future<DateTime?> _pickDate(DateTime? initial) => showDatePicker(
        context: context,
        initialDate: initial ?? DateTime.now().add(const Duration(days: 30)),
        firstDate: DateTime.now().subtract(const Duration(days: 1)),
        lastDate: DateTime.now().add(const Duration(days: 365 * 3)),
      );

  Future<void> _save() async {
    final capacity = int.tryParse(_capacity.text.trim());
    final price = double.tryParse(_price.text.trim().replaceAll(',', '.'));
    String? err;
    if (_partnerId == null) {
      err = 'Escolhe o parceiro.';
    } else if (_title.text.trim().isEmpty) {
      err = 'Dá um nome a esta opção.';
    } else if (capacity == null || capacity < 1) {
      err = 'Indica quantos ${_kind.units} há.';
    } else if (price == null || price < 0.5) {
      err = 'Indica o preço (mínimo 0,50 €).';
    } else if (_kind == GuestOfferKind.lodging && _start != null && _end != null && !_end!.isAfter(_start!)) {
      err = 'A data de saída tem de ser depois da entrada.';
    }
    if (err != null) {
      setState(() => _error = err);
      return;
    }
    setState(() {
      _saving = true;
      _error = null;
    });
    try {
      await createGuestOffer(
        weddingId: widget.weddingId,
        partnerId: _partnerId!,
        kind: _kind,
        title: _title.text,
        details: _details.text,
        capacity: capacity!,
        price: price!,
        startsOn: _kind == GuestOfferKind.lodging ? _start : null,
        endsOn: _kind == GuestOfferKind.lodging ? _end : null,
        departureAt: _kind == GuestOfferKind.transport ? _departure : null,
      );
      if (mounted) Navigator.of(context).pop(true);
    } catch (_) {
      if (mounted) {
        setState(() {
          _saving = false;
          _error = 'Não foi possível guardar. Tenta novamente.';
        });
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    final c = AppTheme.accentOliveDark;
    final partners = ref.watch(bookedPartnersProvider(widget.weddingId));
    final fee = ref.watch(platformCommissionPercentageProvider).asData?.value ?? 0.0;
    final price = double.tryParse(_price.text.trim().replaceAll(',', '.'));
    InputDecoration deco(String label, {String? hint, String? suffix}) => InputDecoration(
          labelText: label,
          hintText: hint,
          suffixText: suffix,
          filled: true,
          fillColor: Colors.white,
          border: OutlineInputBorder(borderRadius: BorderRadius.circular(16)),
        );
    Widget dateButton(String label, DateTime? value, ValueChanged<DateTime> onPicked, {bool withTime = false}) {
      final text = value == null
          ? label
          : withTime
              ? '${shortDate(value)} · ${value.hour.toString().padLeft(2, '0')}:${value.minute.toString().padLeft(2, '0')}'
              : shortDate(value);
      return Expanded(
        child: OutlinedButton.icon(
          onPressed: () async {
            final d = await _pickDate(value);
            if (d == null || !mounted) return;
            var picked = d;
            if (withTime) {
              final t = await showTimePicker(context: context, initialTime: const TimeOfDay(hour: 15, minute: 0));
              if (t == null) return;
              picked = DateTime(d.year, d.month, d.day, t.hour, t.minute);
            }
            onPicked(picked);
          },
          icon: Icon(withTime ? Icons.schedule_outlined : Icons.event_outlined, size: 18, color: c),
          label: Text(text, style: TextStyle(color: value == null ? AppTheme.inkMuted : AppTheme.ink)),
          style: OutlinedButton.styleFrom(
            minimumSize: const Size(0, 48),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
          ),
        ),
      );
    }

    return Padding(
      padding: EdgeInsets.only(bottom: MediaQuery.of(context).viewInsets.bottom),
      child: SafeArea(
        child: SingleChildScrollView(
          padding: const EdgeInsets.fromLTRB(24, 12, 24, 24),
          child: Column(
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
              const Text('Para os convidados',
                  textAlign: TextAlign.center,
                  style: TextStyle(fontSize: AppFontSize.h3, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              const SizedBox(height: 16),
              SegmentedButton<GuestOfferKind>(
                segments: const [
                  ButtonSegment(value: GuestOfferKind.lodging, label: Text('Alojamento'), icon: Icon(Icons.hotel_outlined)),
                  ButtonSegment(value: GuestOfferKind.transport, label: Text('Transporte'), icon: Icon(Icons.directions_bus_outlined)),
                ],
                selected: {_kind},
                onSelectionChanged: (s) => setState(() => _kind = s.first),
              ),
              const SizedBox(height: 16),
              partners.when(
                loading: () => const LinearProgressIndicator(),
                error: (_, __) => const Text('Não foi possível carregar os parceiros.'),
                data: (list) => list.isEmpty
                    ? Container(
                        padding: const EdgeInsets.all(12),
                        decoration: BoxDecoration(color: const Color(0xFFF6E3DF), borderRadius: BorderRadius.circular(14)),
                        child: const Text(
                          'Primeiro reserva o hotel ou a transportadora nos Parceiros. O pagamento dos convidados vai para a conta desse parceiro.',
                          style: TextStyle(fontSize: AppFontSize.md, color: AppTheme.ink),
                        ),
                      )
                    : DropdownButtonFormField<String>(
                        initialValue: _partnerId,
                        decoration: deco('Parceiro'),
                        items: [for (final p in list) DropdownMenuItem(value: p.id, child: Text(p.name))],
                        onChanged: (v) => setState(() => _partnerId = v),
                      ),
              ),
              const SizedBox(height: 12),
              TextField(
                controller: _title,
                textCapitalization: TextCapitalization.sentences,
                maxLength: 120,
                decoration: deco('Nome', hint: _kind == GuestOfferKind.lodging ? 'Hotel da Ribeira' : 'Autocarro Porto → Quinta'),
              ),
              TextField(
                controller: _details,
                maxLength: 500,
                maxLines: 2,
                decoration: deco('Detalhes (opcional)', hint: _kind == GuestOfferKind.lodging ? 'Pequeno-almoço incluído' : 'Sai da Trindade, volta à 01:00'),
              ),
              Row(
                children: [
                  Expanded(
                    child: TextField(
                      controller: _capacity,
                      keyboardType: TextInputType.number,
                      inputFormatters: [FilteringTextInputFormatter.digitsOnly],
                      decoration: deco(_kind == GuestOfferKind.lodging ? 'Quartos' : 'Lugares'),
                    ),
                  ),
                  const SizedBox(width: 12),
                  Expanded(
                    child: TextField(
                      controller: _price,
                      keyboardType: const TextInputType.numberWithOptions(decimal: true),
                      onChanged: (_) => setState(() {}),
                      decoration: deco(_kind == GuestOfferKind.lodging ? 'Preço/noite' : 'Preço/lugar', suffix: '€'),
                    ),
                  ),
                ],
              ),
              if (price != null && price > 0) ...[
                const SizedBox(height: 6),
                Text('O convidado paga ${euros(amountWithCommission(price, fee), cents: true)} (com a comissão da app).',
                    style: const TextStyle(fontSize: AppFontSize.sm, color: AppTheme.inkMuted)),
              ],
              const SizedBox(height: 12),
              Row(
                children: _kind == GuestOfferKind.lodging
                    ? [
                        dateButton('Entrada', _start, (d) => setState(() => _start = d)),
                        const SizedBox(width: 12),
                        dateButton('Saída', _end, (d) => setState(() => _end = d)),
                      ]
                    : [dateButton('Partida', _departure, (d) => setState(() => _departure = d), withTime: true)],
              ),
              if (_error != null) ...[
                const SizedBox(height: 12),
                Text(_error!, style: const TextStyle(color: AppStatusColors.declined, fontSize: AppFontSize.md)),
              ],
              const SizedBox(height: 20),
              FilledButton(
                onPressed: _saving ? null : _save,
                style: FilledButton.styleFrom(
                  backgroundColor: c,
                  minimumSize: const Size.fromHeight(52),
                  shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(18)),
                ),
                child: Text(_saving ? 'A guardar…' : 'Guardar'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
