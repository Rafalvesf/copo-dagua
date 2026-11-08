import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../../core/gifts/gift_shop.dart';
import '../../../core/theme/app_theme.dart';
import '../../../core/wedding/wedding_controller.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/page_header.dart';
import '../../partners/screens/partners_list_screen.dart' show FeaturedOverlayCard;
import '../../../shared/widgets/snappy_tap.dart';
import '../../../shared/widgets/v2_kit.dart' show softCard;
import '../../../core/partners/partner_pro.dart' show proPartnerIdsProvider;

/// Lista de presentes (migração 160).
///  • Organizador: desejos (bloco de notas do que precisa) e produtos da
///    loja dos parceiros; vê quem ofereceu o quê.
///  • Convidado: reserva um desejo e compra fora, ou paga um produto da loja
///    na app (o dinheiro vai para o parceiro, nunca para o organizador).

Color get _green => AppTheme.accentOliveDark;

Widget _photo(String? url, {double size = 56}) => ClipRRect(
      borderRadius: BorderRadius.circular(12),
      child: url == null
          ? Container(
              width: size,
              height: size,
              color: AppTheme.accentTint,
              child: Icon(Icons.card_giftcard_outlined, color: _green),
            )
          : Image.network(url, width: size, height: size, fit: BoxFit.cover,
              errorBuilder: (_, e, s) => Container(width: size, height: size, color: AppTheme.accentTint)),
    );

String _progress(GiftItem i) => i.wanted == 1
    ? (i.complete ? 'Já oferecido' : 'Por oferecer')
    : '${i.taken} de ${i.wanted} oferecidos';

BoxDecoration _card() => BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.lg));

// =====================================================================
// Organizador
// =====================================================================

class OrganizerGiftListScreen extends ConsumerWidget {
  const OrganizerGiftListScreen({super.key});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final weddingId = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
    if (weddingId == null) return const SizedBox.shrink();
    final listAsync = ref.watch(giftListProvider(weddingId));
    final givers = ref.watch(giftGiversProvider(weddingId)).value ?? const <GiftGiver>[];
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        bottom: false,
        child: Column(children: [
          const PageHeader(title: 'Lista de presentes', subtitle: 'O que precisam e o que os convidados já ofereceram.', centered: true),
          Expanded(
            child: listAsync.when(
              loading: () => const Center(child: CircularProgressIndicator()),
              error: (e, s) => const _Info('Não foi possível carregar a lista.'),
              data: (items) {
                if (items == null) return const _Info('Falta correr a migração 160 na página Migrações do admin.');
                return RefreshIndicator(
                  onRefresh: () async {
                    ref.invalidate(giftListProvider(weddingId));
                    ref.invalidate(giftGiversProvider(weddingId));
                  },
                  child: ListView(
                    padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 12, AppTheme.screenMargin, 60),
                    children: [
                      const Text(
                        'Desejos: escreve o que precisam; os convidados reservam e compram onde quiserem. '
                        'Loja: produtos dos parceiros À Nossa!, pagos na app e enviados para a vossa morada. '
                        'O dinheiro dos presentes nunca passa por vocês nem pela À Nossa!, só o da loja vai para o parceiro.',
                        style: TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted),
                      ),
                      const SizedBox(height: 14),
                      Row(children: [
                        Expanded(
                          child: FilledButton.icon(
                            onPressed: () => showWishSheet(context, ref, weddingId: weddingId),
                            icon: const Icon(Icons.edit_note_rounded, size: 20),
                            label: const Text('Desejo'),
                            style: FilledButton.styleFrom(backgroundColor: _green, minimumSize: const Size(0, 46), shape: const StadiumBorder()),
                          ),
                        ),
                        const SizedBox(width: 10),
                        Expanded(
                          child: OutlinedButton.icon(
                            onPressed: () => context.push('/gift-shop'),
                            icon: const Icon(Icons.storefront_outlined, size: 20),
                            label: const Text('Da loja'),
                            style: OutlinedButton.styleFrom(
                              foregroundColor: AppTheme.ink,
                              minimumSize: const Size(0, 46),
                              side: const BorderSide(color: AppTheme.borderMuted, width: 1.5),
                              shape: const StadiumBorder(),
                            ),
                          ),
                        ),
                      ]),
                      const SizedBox(height: 16),
                      if (items.isEmpty)
                        const _Info('A lista está vazia. Junta um desejo ou um produto da loja.')
                      else
                        for (final i in items) ...[
                          _OrganizerItemTile(item: i, weddingId: weddingId),
                          const SizedBox(height: 10),
                        ],
                      if (items.any((i) => i.isProduct)) ...[
                        const SizedBox(height: 8),
                        _DeliveryAddressCard(weddingId: weddingId),
                      ],
                      if (givers.isNotEmpty) ...[
                        const SizedBox(height: 22),
                        const Text('Quem ofereceu', style: TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                        const SizedBox(height: 8),
                        for (final g in givers)
                          Container(
                            margin: const EdgeInsets.only(bottom: 8),
                            padding: const EdgeInsets.all(12),
                            decoration: _card(),
                            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                              Text('${g.name} · ${g.title}${g.quantity > 1 ? ' × ${g.quantity}' : ''}',
                                  style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
                              Text(
                                g.kind == 'product'
                                    ? 'Pago na loja${g.shippedAt != null ? ' · enviado pelo parceiro' : ' · o parceiro vai enviar'}'
                                    : 'Vai comprar fora da app',
                                style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted),
                              ),
                              if (g.message?.isNotEmpty == true) ...[
                                const SizedBox(height: 4),
                                Text('«${g.message}»', style: const TextStyle(fontSize: 13.5, fontStyle: FontStyle.italic, color: AppTheme.ink)),
                              ],
                            ]),
                          ),
                      ],
                    ],
                  ),
                );
              },
            ),
          ),
        ]),
      ),
    );
  }
}

class _Info extends StatelessWidget {
  final String text;
  const _Info(this.text);
  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.all(20),
        child: Text(text, textAlign: TextAlign.center, style: const TextStyle(fontSize: 14, height: 1.4, color: AppTheme.inkMuted)),
      );
}

class _OrganizerItemTile extends ConsumerWidget {
  final GiftItem item;
  final String weddingId;
  const _OrganizerItemTile({required this.item, required this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final i = item;
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: _card(),
      child: Row(children: [
        i.isProduct
            ? _photo(i.photoUrl)
            : Container(
                width: 56,
                height: 56,
                decoration: BoxDecoration(color: const Color(0xFFF4EBD9), borderRadius: BorderRadius.circular(12)),
                child: const Icon(Icons.sticky_note_2_outlined, color: Color(0xFF8A6A2F)),
              ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(i.title, maxLines: 2, overflow: TextOverflow.ellipsis, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            Text(
              [
                if (i.isProduct) i.partnerName ?? 'Loja' else 'Desejo',
                if (i.price != null && i.price! > 0) (i.isProduct ? giftEuros(i.price!) : '~${giftEuros(i.price!)}'),
                _progress(i),
              ].join(' · '),
              style: TextStyle(fontSize: 12.5, color: i.complete ? _green : AppTheme.inkMuted, fontWeight: i.complete ? FontWeight.w700 : FontWeight.w400),
            ),
            if (i.isProduct && !i.available)
              const Text('Indisponível na loja', style: TextStyle(fontSize: 12.5, color: Color(0xFFB3261E))),
          ]),
        ),
        PopupMenuButton<String>(
          tooltip: 'Opções',
          onSelected: (v) async {
            if (v == 'edit') {
              await showWishSheet(context, ref, weddingId: weddingId, existing: i);
            } else if (v == 'remove') {
              try {
                await removeGiftItem(i.id);
              } catch (_) {
                if (context.mounted) {
                  ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível tirar da lista.')));
                }
              }
              ref.invalidate(giftListProvider(weddingId));
            }
          },
          itemBuilder: (_) => [
            if (!i.isProduct) const PopupMenuItem(value: 'edit', child: Text('Editar')),
            const PopupMenuItem(value: 'remove', child: Text('Tirar da lista')),
          ],
        ),
      ]),
    );
  }
}

class _DeliveryAddressCard extends ConsumerStatefulWidget {
  final String weddingId;
  const _DeliveryAddressCard({required this.weddingId});
  @override
  ConsumerState<_DeliveryAddressCard> createState() => _DeliveryAddressCardState();
}

class _DeliveryAddressCardState extends ConsumerState<_DeliveryAddressCard> {
  final _c = TextEditingController();
  bool _loaded = false;
  bool _saving = false;

  @override
  void dispose() {
    _c.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final addr = ref.watch(giftDeliveryAddressProvider(widget.weddingId));
    if (!_loaded && addr.hasValue) {
      _c.text = addr.value ?? '';
      _loaded = true;
    }
    return Container(
      padding: const EdgeInsets.all(14),
      decoration: _card(),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        const Text('Morada para os presentes da loja', style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 2),
        const Text('Só os parceiros que receberem uma encomenda a veem.', style: TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
        const SizedBox(height: 8),
        TextField(
          controller: _c,
          maxLines: 3,
          maxLength: 400,
          decoration: const InputDecoration(hintText: 'Rua, número, código postal, localidade'),
        ),
        Align(
          alignment: Alignment.centerRight,
          child: TextButton(
            onPressed: _saving
                ? null
                : () async {
                    setState(() => _saving = true);
                    try {
                      await saveGiftDeliveryAddress(widget.weddingId, _c.text);
                      if (context.mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Morada guardada.')));
                    } catch (_) {
                      if (context.mounted) ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível guardar.')));
                    } finally {
                      if (mounted) setState(() => _saving = false);
                    }
                  },
            child: const Text('Guardar'),
          ),
        ),
      ]),
    );
  }
}

/// Desejo: o bloco de notas do que o organizador precisa.
Future<void> showWishSheet(BuildContext context, WidgetRef ref, {required String weddingId, GiftItem? existing}) {
  return showIslandSheet<void>(
    context: context,
    isScrollControlled: true,
    builder: (_) => _WishSheet(weddingId: weddingId, existing: existing),
  );
}

class _WishSheet extends ConsumerStatefulWidget {
  final String weddingId;
  final GiftItem? existing;
  const _WishSheet({required this.weddingId, this.existing});
  @override
  ConsumerState<_WishSheet> createState() => _WishSheetState();
}

class _WishSheetState extends ConsumerState<_WishSheet> {
  late final _title = TextEditingController(text: widget.existing?.title ?? '');
  late final _note = TextEditingController(text: widget.existing?.note ?? '');
  late final _link = TextEditingController(text: widget.existing?.linkUrl ?? '');
  late final _price = TextEditingController(
      text: widget.existing?.price == null ? '' : widget.existing!.price!.toStringAsFixed(widget.existing!.price! % 1 == 0 ? 0 : 2));
  late int _qty = widget.existing?.wanted ?? 1;
  bool _saving = false;
  String? _error;

  @override
  void dispose() {
    for (final c in [_title, _note, _link, _price]) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _save() async {
    if (_title.text.trim().length < 2) {
      setState(() => _error = 'Escreve o que precisam.');
      return;
    }
    setState(() {
      _saving = true;
      _error = null;
    });
    try {
      final price = parseEuros(_price.text);
      if (widget.existing == null) {
        await addWish(weddingId: widget.weddingId, title: _title.text, note: _note.text, linkUrl: _link.text, price: price, quantity: _qty);
      } else {
        await updateWish(widget.existing!.id, title: _title.text, note: _note.text, linkUrl: _link.text, price: price, quantity: _qty);
      }
      ref.invalidate(giftListProvider(widget.weddingId));
      if (mounted) Navigator.of(context).pop();
    } catch (_) {
      if (mounted) setState(() => _error = 'Não foi possível guardar. Tenta outra vez.');
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return SingleChildScrollView(
      padding: EdgeInsets.fromLTRB(22, 18, 22, 20 + MediaQuery.viewInsetsOf(context).bottom),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Text(widget.existing == null ? 'Novo desejo' : 'Editar desejo',
            style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: AppTheme.ink)),
        const SizedBox(height: 4),
        const Text('O que precisam? Os convidados reservam e compram onde quiserem.',
            style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
        const SizedBox(height: 14),
        TextField(controller: _title, maxLength: 120, decoration: const InputDecoration(labelText: 'O que precisam', hintText: 'Máquina de café')),
        TextField(controller: _note, maxLines: 3, maxLength: 600, decoration: const InputDecoration(labelText: 'Nota (opcional)', hintText: 'Cor, tamanho, modelo…')),
        TextField(
          controller: _link,
          keyboardType: TextInputType.url,
          decoration: const InputDecoration(labelText: 'Link para comprar (opcional)', hintText: 'https://…'),
        ),
        const SizedBox(height: 10),
        Row(children: [
          Expanded(
            child: TextField(
              controller: _price,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              decoration: const InputDecoration(labelText: 'Preço aproximado', suffixText: '€'),
            ),
          ),
          const SizedBox(width: 14),
          const Text('Quantidade', style: TextStyle(color: AppTheme.inkMuted)),
          IconButton(onPressed: _qty > 1 ? () => setState(() => _qty--) : null, icon: const Icon(Icons.remove_circle_outline), tooltip: 'Menos'),
          Text('$_qty', style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
          IconButton(onPressed: _qty < 50 ? () => setState(() => _qty++) : null, icon: const Icon(Icons.add_circle_outline), tooltip: 'Mais'),
        ]),
        if (_error != null) Padding(padding: const EdgeInsets.only(top: 6), child: Text(_error!, style: const TextStyle(color: Color(0xFFB3261E)))),
        const SizedBox(height: 14),
        FilledButton(
          onPressed: _saving ? null : _save,
          style: FilledButton.styleFrom(backgroundColor: _green, minimumSize: const Size.fromHeight(50), shape: const StadiumBorder()),
          child: Text(_saving ? 'A guardar…' : 'Guardar'),
        ),
      ]),
    );
  }
}

/// Loja dos parceiros: o organizador escolhe produtos para a lista.
class GiftShopScreen extends StatelessWidget {
  const GiftShopScreen({super.key});

  @override
  Widget build(BuildContext context) => const GradientScaffold(
        background: AppBackground.subtle,
        body: SafeArea(
          bottom: false,
          child: Column(children: [
            PageHeader(title: 'Loja', subtitle: 'Peças de artesãos e lojas parceiras.', centered: true),
            Expanded(child: GiftShopView()),
          ]),
        ),
      );
}

/// Pesquisa + grelha de produtos das lojas parceiras (migração 160).
/// Ecrã próprio ([GiftShopScreen]) e separador "Lojas" em Parceiros
/// (pedido 2026-11-07); ocupa o espaço que lhe derem (usar em Expanded).
class GiftShopView extends ConsumerStatefulWidget {
  /// Espaço no fim da grelha (a navbar flutuante tapa o fundo).
  final double bottomPadding;

  /// Atalho para a lista de presentes do evento por cima da grelha.
  final bool showListLink;
  const GiftShopView({super.key, this.bottomPadding = 40, this.showListLink = false});
  @override
  ConsumerState<GiftShopView> createState() => _GiftShopViewState();
}

class _GiftShopViewState extends ConsumerState<GiftShopView> {
  String _query = '';
  final Set<String> _added = {};

  Future<void> _add(ShopProduct p, String weddingId) async {
    try {
      await addProductToList(weddingId: weddingId, productId: p.id);
      if (mounted) setState(() => _added.add(p.id));
      ref.invalidate(giftListProvider(weddingId));
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('${p.title} está na lista.')));
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível pôr na lista.')));
      }
    }
  }

  void _showProduct(ShopProduct p, String? weddingId, bool added) {
    showIslandSheet<void>(
      context: context,
      isScrollControlled: true,
      builder: (sheetContext) => SingleChildScrollView(
        padding: const EdgeInsets.fromLTRB(22, 18, 22, 22),
        child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          if (p.photoUrl != null)
            ClipRRect(
              borderRadius: BorderRadius.circular(18),
              child: AspectRatio(aspectRatio: 4 / 3, child: Image.network(p.photoUrl!, fit: BoxFit.cover)),
            ),
          const SizedBox(height: 14),
          Text(p.title, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: AppTheme.ink)),
          Text('${p.partnerName}${p.city != null ? ' · ${p.city}' : ''}', style: const TextStyle(fontSize: 13.5, color: AppTheme.inkMuted)),
          const SizedBox(height: 8),
          Text(giftEuros(p.price), style: const TextStyle(fontSize: 22, fontWeight: FontWeight.w800, color: AppTheme.ink)),
          if (p.description?.isNotEmpty == true) ...[
            const SizedBox(height: 10),
            Text(p.description!, style: const TextStyle(fontSize: 14, height: 1.45, color: AppTheme.ink)),
          ],
          if (p.deliveryNote?.isNotEmpty == true) ...[
            const SizedBox(height: 8),
            Row(children: [
              const Icon(Icons.local_shipping_outlined, size: 18, color: AppTheme.inkMuted),
              const SizedBox(width: 6),
              Expanded(child: Text(p.deliveryNote!, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted))),
            ]),
          ],
          const SizedBox(height: 16),
          FilledButton.icon(
            onPressed: weddingId == null || added || !p.inStock
                ? null
                : () async {
                    Navigator.of(sheetContext).pop();
                    await _add(p, weddingId);
                  },
            icon: Icon(added ? Icons.check_rounded : Icons.add_rounded),
            label: Text(added ? 'Já está na vossa lista' : (p.inStock ? 'Pôr na lista de presentes' : 'Esgotado')),
            style: FilledButton.styleFrom(backgroundColor: _green, minimumSize: const Size.fromHeight(50), shape: const StadiumBorder()),
          ),
          const SizedBox(height: 6),
          const Text(
            'Os convidados pagam na app e a loja envia para a vossa morada.',
            textAlign: TextAlign.center,
            style: TextStyle(fontSize: 12.5, color: AppTheme.inkMuted),
          ),
        ]),
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final weddingId = ref.watch(weddingControllerProvider.select((s) => s.wedding?.id));
    final products = ref.watch(shopProductsProvider(_query));
    final list = weddingId == null ? null : ref.watch(giftListProvider(weddingId)).value;
    final inList = {
      ..._added,
      for (final i in list ?? const <GiftItem>[]) if (i.productId != null) i.productId!,
    };
    // Igual à aba Empresas (pedido 2026-11-08): pesquisa em pílula com um
    // botão redondo ao lado (a vossa lista), "Em destaque", "N produtos" e
    // cartões em lista com foto à esquerda.
    final pill = OutlineInputBorder(borderRadius: BorderRadius.circular(AppRadius.pill), borderSide: BorderSide.none);
    return Column(children: [
      Padding(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 16, AppTheme.screenMargin, 0),
        child: Row(children: [
          Expanded(
            child: Container(
              decoration: softCard(radius: AppRadius.pill),
              child: TextField(
                decoration: InputDecoration(
                  hintText: 'Cerâmica, mantas, vinho…',
                  prefixIcon: const Icon(Icons.search, size: 20),
                  filled: true,
                  fillColor: Colors.white,
                  border: pill,
                  enabledBorder: pill,
                  focusedBorder: OutlineInputBorder(
                    borderRadius: BorderRadius.circular(AppRadius.pill),
                    borderSide: BorderSide(color: AppTheme.accentOliveDark),
                  ),
                  contentPadding: const EdgeInsets.symmetric(vertical: 12),
                ),
                textInputAction: TextInputAction.search,
                onSubmitted: (v) => setState(() => _query = v.trim()),
              ),
            ),
          ),
          if (widget.showListLink && weddingId != null) ...[
            const SizedBox(width: 10),
            Tooltip(
              message: 'A vossa lista de presentes',
              child: SnappyTap(
                onTap: () => context.push('/gift-list'),
                child: Container(
                  width: 48,
                  height: 48,
                  alignment: Alignment.center,
                  decoration: softCard(radius: 999),
                  child: Badge(
                    isLabelVisible: (list?.length ?? 0) > 0,
                    backgroundColor: AppTheme.accentOliveDark,
                    label: Text('${list?.length ?? 0}'),
                    child: const Icon(Icons.checklist_rtl_rounded, size: 20, color: AppTheme.ink),
                  ),
                ),
              ),
            ),
          ],
        ]),
      ),
      Expanded(
        child: products.when(
          loading: () => const Center(child: CircularProgressIndicator()),
          error: (e, s) => const _Info('Não foi possível carregar a loja.'),
          data: (items) => items.isEmpty
              ? const _Info('Ainda não há produtos. Os parceiros juntam-nos na sua Loja.')
              : ListView(
                  padding: EdgeInsets.fromLTRB(0, 12, 0, widget.bottomPadding),
                  children: [
                    if (_query.isEmpty && featured(items).isNotEmpty) ...[
                      Padding(
                        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 4, AppTheme.screenMargin, 12),
                        child: Text('Em destaque',
                            style: AppTypography.displaySerif(fontSize: 22, fontWeight: FontWeight.w800, color: AppTheme.ink)),
                      ),
                      SizedBox(
                        height: FeaturedOverlayCard.height,
                        child: ListView.separated(
                          scrollDirection: Axis.horizontal,
                          clipBehavior: Clip.none,
                          padding: const EdgeInsets.symmetric(horizontal: AppTheme.screenMargin),
                          itemCount: featured(items).length,
                          separatorBuilder: (context, i) => const SizedBox(width: 10),
                          itemBuilder: (context, i) {
                            final p = featured(items)[i];
                            return _FeaturedProductCard(
                              product: p,
                              added: inList.contains(p.id),
                              onTap: () => _showProduct(p, weddingId, inList.contains(p.id)),
                            );
                          },
                        ),
                      ),
                      const SizedBox(height: 14),
                    ],
                    Padding(
                      padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 4, AppTheme.screenMargin, 12),
                      child: Text('${items.length} ${items.length == 1 ? 'produto' : 'produtos'}',
                          style: const TextStyle(fontSize: 18, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    ),
                    for (final p in items)
                      Padding(
                        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 0, AppTheme.screenMargin, 12),
                        child: _ProductRow(
                          product: p,
                          added: inList.contains(p.id),
                          canAdd: weddingId != null && p.inStock,
                          onTap: () => _showProduct(p, weddingId, inList.contains(p.id)),
                          onAdd: () => _add(p, weddingId!),
                        ),
                      ),
                  ],
                ),
        ),
      ),
    ]);
  }

  /// "Em destaque" (como nas empresas, 2026-11-07): lojas Verificado
  /// primeiro, depois produtos com foto; só o que há em stock, até 6.
  List<ShopProduct> featured(List<ShopProduct> all) {
    final pro = ref.watch(proPartnerIdsProvider).value ?? const <String>{};
    int score(ShopProduct p) => (pro.contains(p.partnerId) ? 2 : 0) + (p.photoUrl != null ? 1 : 0);
    final list = all.where((p) => p.inStock).toList()..sort((a, b) => score(b).compareTo(score(a)));
    return list.length < 3 ? const [] : list.take(6).toList();
  }
}

/// Produto em lista, com o mesmo cartão dos parceiros (foto à esquerda,
/// nome, loja, preço a verde e um botão redondo à direita).
class _ProductRow extends StatelessWidget {
  final ShopProduct product;
  final bool added;
  final bool canAdd;
  final VoidCallback onTap;
  final VoidCallback onAdd;
  const _ProductRow({required this.product, required this.added, required this.canAdd, required this.onTap, required this.onAdd});

  @override
  Widget build(BuildContext context) {
    final p = product;
    return SnappyTap(
      onTap: onTap,
      child: Container(
        padding: const EdgeInsets.all(10),
        decoration: softCard(radius: 22),
        child: Row(children: [
          ClipRRect(
            borderRadius: BorderRadius.circular(16),
            child: SizedBox(
              width: 76,
              height: 76,
              child: p.photoUrl == null
                  ? Container(color: AppTheme.accentTint, child: Icon(Icons.card_giftcard_outlined, color: _green))
                  : Image.network(p.photoUrl!, fit: BoxFit.cover, errorBuilder: (_, e, s) => Container(color: AppTheme.accentTint)),
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(p.title, maxLines: 1, overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontWeight: FontWeight.w700, fontSize: 15, color: AppTheme.ink)),
              const SizedBox(height: 2),
              Text('${p.partnerName}${p.city != null ? ' · ${p.city}' : ''}', maxLines: 1, overflow: TextOverflow.ellipsis,
                  style: const TextStyle(color: AppTheme.inkMuted, fontSize: 12)),
              const SizedBox(height: 6),
              Text(p.inStock ? giftEuros(p.price) : 'Esgotado',
                  style: TextStyle(color: AppTheme.accentOliveDark, fontWeight: FontWeight.w700, fontSize: 13)),
            ]),
          ),
          const SizedBox(width: 8),
          Tooltip(
            message: added ? 'Na vossa lista' : 'Pôr na lista',
            child: SnappyTap(
              onTap: added || !canAdd ? null : onAdd,
              child: Container(
                width: 38,
                height: 38,
                decoration: BoxDecoration(
                  color: added ? AppTheme.accentOliveDark : Colors.white,
                  shape: BoxShape.circle,
                  boxShadow: const [BoxShadow(color: Color(0x14171713), blurRadius: 10, offset: Offset(0, 3))],
                ),
                child: Icon(added ? Icons.check_rounded : Icons.add_rounded,
                    size: 19, color: added ? Colors.white : (canAdd ? AppTheme.accentOliveDark : AppTheme.inkMuted)),
              ),
            ),
          ),
        ]),
      ),
    );
  }
}

/// Cartão do carrossel "Em destaque" da Loja — o mesmo cartão grande
/// do destaque das empresas em Parceiros.
class _FeaturedProductCard extends StatelessWidget {
  final ShopProduct product;
  final bool added;
  final VoidCallback onTap;
  const _FeaturedProductCard({required this.product, required this.added, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final p = product;
    return FeaturedOverlayCard(
      onTap: onTap,
      image: p.photoUrl == null
          ? Container(color: AppTheme.accentTint, child: Icon(Icons.card_giftcard_outlined, size: 40, color: _green))
          : Image.network(p.photoUrl!, fit: BoxFit.cover, errorBuilder: (_, e, s) => Container(color: AppTheme.accentTint)),
      badge: added
          ? Container(
              padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
              decoration: BoxDecoration(color: _green, borderRadius: BorderRadius.circular(999)),
              child: const Text('Na lista', style: TextStyle(fontSize: 11.5, fontWeight: FontWeight.w700, color: Colors.white)),
            )
          : null,
      title: p.title,
      subtitle: '${p.partnerName} · ${giftEuros(p.price)}',
    );
  }
}

// =====================================================================
// Convidado
// =====================================================================

/// A lista no ecrã Presentes do convidado.
class GuestGiftListSection extends ConsumerWidget {
  final String weddingId;
  const GuestGiftListSection({super.key, required this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final items = ref.watch(giftListProvider(weddingId)).value;
    if (items == null || items.isEmpty) return const SizedBox.shrink();
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      const Text('Lista de presentes', style: TextStyle(fontSize: 17, fontWeight: FontWeight.w800, color: AppTheme.ink)),
      const SizedBox(height: 8),
      for (final i in items) ...[
        _GuestItemCard(item: i, weddingId: weddingId),
        const SizedBox(height: 10),
      ],
      const SizedBox(height: 4),
    ]);
  }
}

class _GuestItemCard extends ConsumerWidget {
  final GiftItem item;
  final String weddingId;
  const _GuestItemCard({required this.item, required this.weddingId});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final i = item;
    final canOffer = !i.complete && i.available;
    return Container(
      padding: const EdgeInsets.all(12),
      decoration: _card(),
      child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          i.isProduct
              ? _photo(i.photoUrl, size: 64)
              : Container(
                  width: 64,
                  height: 64,
                  decoration: BoxDecoration(color: const Color(0xFFF4EBD9), borderRadius: BorderRadius.circular(12)),
                  child: const Icon(Icons.sticky_note_2_outlined, color: Color(0xFF8A6A2F)),
                ),
          const SizedBox(width: 12),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text(i.title, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              Text(
                [
                  if (i.isProduct) i.partnerName ?? 'Loja',
                  if (i.price != null && i.price! > 0) (i.isProduct ? giftEuros(i.price!) : 'cerca de ${giftEuros(i.price!)}'),
                ].join(' · '),
                style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted),
              ),
              if (i.note?.isNotEmpty == true) ...[
                const SizedBox(height: 4),
                Text(i.note!, style: const TextStyle(fontSize: 13, height: 1.35, color: AppTheme.ink)),
              ],
              const SizedBox(height: 4),
              Text(
                i.mine > 0 ? 'Tu ofereces este presente' : _progress(i),
                style: TextStyle(fontSize: 12.5, fontWeight: FontWeight.w700, color: i.mine > 0 || i.complete ? _green : AppTheme.inkMuted),
              ),
            ]),
          ),
        ]),
        const SizedBox(height: 10),
        Wrap(spacing: 8, runSpacing: 8, alignment: WrapAlignment.end, children: [
          if (!i.isProduct && i.linkUrl != null)
            OutlinedButton.icon(
              onPressed: () => launchUrl(Uri.parse(i.linkUrl!), mode: LaunchMode.externalApplication),
              icon: const Icon(Icons.open_in_new_rounded, size: 18),
              label: const Text('Ver na loja'),
              style: OutlinedButton.styleFrom(foregroundColor: AppTheme.ink, shape: const StadiumBorder()),
            ),
          if (!i.isProduct && i.myClaimId != null)
            TextButton(
              onPressed: () async {
                try {
                  await unclaimGift(i.myClaimId!);
                } catch (_) {}
                ref.invalidate(giftListProvider(weddingId));
              },
              child: const Text('Já não vou oferecer'),
            ),
          if (canOffer)
            FilledButton(
              onPressed: () => showIslandSheet<void>(
                context: context,
                isScrollControlled: true,
                builder: (_) => _OfferSheet(item: i, weddingId: weddingId),
              ),
              style: FilledButton.styleFrom(backgroundColor: _green, shape: const StadiumBorder()),
              child: Text(i.isProduct ? 'Oferecer · ${giftEuros(i.price ?? 0)}' : 'Vou oferecer'),
            ),
        ]),
      ]),
    );
  }
}

class _OfferSheet extends ConsumerStatefulWidget {
  final GiftItem item;
  final String weddingId;
  const _OfferSheet({required this.item, required this.weddingId});
  @override
  ConsumerState<_OfferSheet> createState() => _OfferSheetState();
}

class _OfferSheetState extends ConsumerState<_OfferSheet> {
  final _message = TextEditingController();
  int _qty = 1;
  bool _busy = false;
  String? _error;

  @override
  void dispose() {
    _message.dispose();
    super.dispose();
  }

  Future<void> _go() async {
    final i = widget.item;
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      if (i.isProduct) {
        final url = await createGiftCheckoutUrl(itemId: i.id, quantity: _qty, message: _message.text, weddingId: widget.weddingId);
        final ok = await launchUrl(
          Uri.parse(url),
          mode: kIsWeb ? LaunchMode.platformDefault : LaunchMode.externalApplication,
          webOnlyWindowName: kIsWeb ? '_self' : null,
        );
        if (!ok && mounted) setState(() => _error = 'Não foi possível abrir o pagamento.');
      } else {
        await claimGift(i.id, quantity: _qty, message: _message.text);
        ref.invalidate(giftListProvider(widget.weddingId));
        if (!mounted) return;
        Navigator.of(context).pop();
        ScaffoldMessenger.of(context).showSnackBar(
          SnackBar(content: Text(i.linkUrl != null ? 'Reservado. Agora é só comprar na loja.' : 'Reservado. Os anfitriões já sabem.')),
        );
      }
    } on GiftError catch (e) {
      if (mounted) setState(() => _error = e.message);
    } catch (_) {
      if (mounted) setState(() => _error = const GiftError('unknown').message);
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final i = widget.item;
    final max = i.left.clamp(1, 20);
    return SingleChildScrollView(
      padding: EdgeInsets.fromLTRB(22, 18, 22, 20 + MediaQuery.viewInsetsOf(context).bottom),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Text(i.title, style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: AppTheme.ink)),
        const SizedBox(height: 4),
        Text(
          i.isProduct
              ? 'Pagas na app; ${i.partnerName ?? 'a loja'} envia o presente para os anfitriões.${i.deliveryNote != null ? ' ${i.deliveryNote}' : ''}'
              : 'Reservas para mais ninguém oferecer o mesmo, e compras onde quiseres.',
          style: const TextStyle(fontSize: 13.5, height: 1.4, color: AppTheme.inkMuted),
        ),
        if (max > 1) ...[
          const SizedBox(height: 10),
          Row(children: [
            const Expanded(child: Text('Quantidade', style: TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink))),
            IconButton(onPressed: _qty > 1 ? () => setState(() => _qty--) : null, icon: const Icon(Icons.remove_circle_outline), tooltip: 'Menos'),
            Text('$_qty', style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700)),
            IconButton(onPressed: _qty < max ? () => setState(() => _qty++) : null, icon: const Icon(Icons.add_circle_outline), tooltip: 'Mais'),
          ]),
        ],
        const SizedBox(height: 8),
        TextField(
          controller: _message,
          maxLines: 3,
          maxLength: 600,
          decoration: const InputDecoration(labelText: 'Mensagem para os anfitriões (opcional)', hintText: 'Muitas felicidades!'),
        ),
        if (_error != null) Text(_error!, style: const TextStyle(color: Color(0xFFB3261E), fontSize: 13)),
        const SizedBox(height: 12),
        FilledButton(
          onPressed: _busy ? null : _go,
          style: FilledButton.styleFrom(backgroundColor: _green, minimumSize: const Size.fromHeight(50), shape: const StadiumBorder()),
          child: _busy
              ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: Colors.white))
              : Text(i.isProduct ? 'Pagar ${giftEuros((i.price ?? 0) * _qty)}' : 'Reservar'),
        ),
      ]),
    );
  }
}

/// Volta da Stripe depois de pagar um presente da loja.
class GiftReturnScreen extends ConsumerStatefulWidget {
  final String orderId;
  const GiftReturnScreen({super.key, required this.orderId});
  @override
  ConsumerState<GiftReturnScreen> createState() => _GiftReturnScreenState();
}

class _GiftReturnScreenState extends ConsumerState<GiftReturnScreen> {
  String _status = 'checking';
  String? _weddingId;

  @override
  void initState() {
    super.initState();
    _check();
  }

  Future<void> _check() async {
    for (var n = 0; n < 6; n++) {
      try {
        final r = await syncGiftOrder(widget.orderId);
        _weddingId = r.weddingId;
        if (r.status == 'paid') {
          if (r.weddingId != null) ref.invalidate(giftListProvider(r.weddingId!));
          if (mounted) setState(() => _status = 'paid');
          return;
        }
      } catch (_) {}
      await Future<void>.delayed(const Duration(seconds: 2));
    }
    if (mounted) setState(() => _status = 'open');
  }

  @override
  Widget build(BuildContext context) {
    final paid = _status == 'paid';
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(28),
            child: Column(mainAxisSize: MainAxisSize.min, children: [
              if (_status == 'checking')
                const CircularProgressIndicator()
              else
                Icon(paid ? Icons.card_giftcard_rounded : Icons.schedule_rounded, size: 72, color: paid ? _green : AppTheme.inkMuted),
              const SizedBox(height: 16),
              Text(
                _status == 'checking' ? 'A confirmar o pagamento…' : (paid ? 'Presente oferecido!' : 'Pagamento por confirmar'),
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 24, fontWeight: FontWeight.w700, color: AppTheme.ink),
              ),
              const SizedBox(height: 8),
              Text(
                paid
                    ? 'Os anfitriões já sabem. A loja envia o presente para a morada deles.'
                    : (_status == 'checking' ? '' : 'Se pagaste, a confirmação chega em breve.'),
                textAlign: TextAlign.center,
                style: const TextStyle(fontSize: 15, height: 1.4, color: AppTheme.inkMuted),
              ),
              const SizedBox(height: 24),
              if (_status != 'checking')
                FilledButton(
                  onPressed: () => context.go(_weddingId != null ? '/guest-gifts/$_weddingId' : '/guest-gifts'),
                  style: FilledButton.styleFrom(backgroundColor: _green, shape: const StadiumBorder()),
                  child: const Text('Voltar aos presentes'),
                ),
            ]),
          ),
        ),
      ),
    );
  }
}
