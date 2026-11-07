import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/gifts/gift_shop.dart';
import '../../../core/partners/partner_pro.dart' show myPartnerProProvider;
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/page_header.dart';

/// Loja do parceiro (migração 160): produtos que os organizadores põem na
/// lista de presentes; os convidados pagam na app e o parceiro envia.
class PartnerShopScreen extends ConsumerStatefulWidget {
  const PartnerShopScreen({super.key});
  @override
  ConsumerState<PartnerShopScreen> createState() => _PartnerShopScreenState();
}

class _PartnerShopScreenState extends ConsumerState<PartnerShopScreen> {
  int _tab = 0;

  @override
  Widget build(BuildContext context) {
    final products = ref.watch(myProductsProvider);
    final orders = ref.watch(partnerGiftOrdersProvider).value ?? const <PartnerGiftOrder>[];
    final toShip = orders.where((o) => o.shippedAt == null).length;
    final green = AppTheme.accentOliveDark;
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        bottom: false,
        child: Column(children: [
          const PageHeader(title: 'Loja', subtitle: 'Produtos para as listas de presentes dos eventos.', centered: true),
          Padding(
            padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 8),
            child: SegmentedButton<int>(
              segments: [
                const ButtonSegment(value: 0, label: Text('Produtos'), icon: Icon(Icons.inventory_2_outlined)),
                ButtonSegment(value: 1, label: Text(toShip > 0 ? 'Encomendas ($toShip)' : 'Encomendas'), icon: const Icon(Icons.local_shipping_outlined)),
              ],
              selected: {_tab},
              onSelectionChanged: (s) => setState(() => _tab = s.first),
            ),
          ),
          Expanded(
            child: _tab == 0
                ? products.when(
                    loading: () => const Center(child: CircularProgressIndicator()),
                    error: (e, s) => const _Info('Não foi possível carregar os produtos.'),
                    data: (list) {
                      if (list == null) return const _Info('Falta correr a migração 160 na página Migrações do admin.');
                      return ListView(
                        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 100),
                        children: [
                          const Text(
                            'Os organizadores escolhem os teus produtos para a lista de presentes. Os convidados pagam na app e tu '
                            'recebes o valor, menos a comissão da À Nossa! e a taxa do pagamento. Envias para a morada que aparece na encomenda.',
                            style: TextStyle(fontSize: 13, height: 1.4, color: AppTheme.inkMuted),
                          ),
                          const SizedBox(height: 12),
                          // Limite da loja sem Pro (migração 161).
                          Builder(builder: (context) {
                            final pro = ref.watch(myPartnerProProvider).value;
                            if (pro == null || !pro.enabled || pro.active) return const SizedBox.shrink();
                            return Padding(
                              padding: const EdgeInsets.only(bottom: 10),
                              child: InkWell(
                                onTap: () => context.push('/partner-pro'),
                                borderRadius: BorderRadius.circular(12),
                                child: Padding(
                                  padding: const EdgeInsets.symmetric(vertical: 6),
                                  child: Text(
                                    '${pro.products} de ${pro.freeShopProducts} produtos. Com o Verificado não há limite →',
                                    style: TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: green),
                                  ),
                                ),
                              ),
                            );
                          }),
                          FilledButton.icon(
                            onPressed: () => _edit(context, null),
                            icon: const Icon(Icons.add_rounded),
                            label: const Text('Novo produto'),
                            style: FilledButton.styleFrom(backgroundColor: green, minimumSize: const Size.fromHeight(48), shape: const StadiumBorder()),
                          ),
                          const SizedBox(height: 12),
                          if (list.isEmpty)
                            const _Info('Ainda não tens produtos.')
                          else
                            for (final p in list)
                              Container(
                                margin: const EdgeInsets.only(bottom: 10),
                                decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.lg)),
                                child: ListTile(
                                  contentPadding: const EdgeInsets.fromLTRB(12, 6, 6, 6),
                                  leading: ClipRRect(
                                    borderRadius: BorderRadius.circular(10),
                                    child: p.photoUrl == null
                                        ? Container(width: 52, height: 52, color: AppTheme.accentTint, child: Icon(Icons.card_giftcard_outlined, color: green))
                                        : Image.network(p.photoUrl!, width: 52, height: 52, fit: BoxFit.cover),
                                  ),
                                  title: Text(p.title, style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
                                  subtitle: Text(
                                    [
                                      giftEuros(p.price),
                                      if (p.stock != null) (p.stock == 0 ? 'esgotado' : '${p.stock} em stock'),
                                      if (!p.active) 'escondido',
                                    ].join(' · '),
                                  ),
                                  trailing: const Icon(Icons.chevron_right),
                                  onTap: () => _edit(context, p),
                                ),
                              ),
                        ],
                      );
                    },
                  )
                : _Orders(orders: orders),
          ),
        ]),
      ),
    );
  }

  Future<void> _edit(BuildContext context, ShopProduct? p) => showIslandSheet<void>(
        context: context,
        isScrollControlled: true,
        builder: (_) => _ProductSheet(existing: p),
      );
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

class _Orders extends ConsumerWidget {
  final List<PartnerGiftOrder> orders;
  const _Orders({required this.orders});

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    if (orders.isEmpty) return const _Info('Ainda não tens encomendas.');
    final green = AppTheme.accentOliveDark;
    return RefreshIndicator(
      onRefresh: () async => ref.invalidate(partnerGiftOrdersProvider),
      child: ListView(
        padding: const EdgeInsets.fromLTRB(AppTheme.screenMargin, 8, AppTheme.screenMargin, 100),
        children: [
          for (final o in orders)
            Container(
              margin: const EdgeInsets.only(bottom: 10),
              padding: const EdgeInsets.all(14),
              decoration: BoxDecoration(color: AppTheme.surface, borderRadius: BorderRadius.circular(AppRadius.lg)),
              child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                Text('${o.productTitle} × ${o.quantity}', style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                Text('${giftEuros(o.amount)} · oferecido por ${o.buyerName} a ${o.client}',
                    style: const TextStyle(fontSize: 12.5, color: AppTheme.inkMuted)),
                const SizedBox(height: 8),
                const Text('Enviar para', style: TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
                SelectableText(
                  o.deliveryAddress?.trim().isNotEmpty == true ? o.deliveryAddress! : 'O cliente ainda não indicou a morada. Fala com ele no chat.',
                  style: const TextStyle(fontSize: 14, height: 1.35, color: AppTheme.ink),
                ),
                if (o.message?.isNotEmpty == true) ...[
                  const SizedBox(height: 6),
                  Text('Mensagem para pôr no presente: «${o.message}»', style: const TextStyle(fontSize: 13, fontStyle: FontStyle.italic, color: AppTheme.ink)),
                ],
                const SizedBox(height: 10),
                if (o.shippedAt != null)
                  Row(children: [
                    Icon(Icons.check_circle_rounded, size: 18, color: green),
                    const SizedBox(width: 6),
                    Text('Enviado', style: TextStyle(fontWeight: FontWeight.w700, color: green)),
                  ])
                else
                  FilledButton.icon(
                    onPressed: () async {
                      try {
                        await markGiftOrderShipped(o.id);
                        ref.invalidate(partnerGiftOrdersProvider);
                      } catch (_) {
                        if (context.mounted) {
                          ScaffoldMessenger.of(context).showSnackBar(const SnackBar(content: Text('Não foi possível marcar. Tenta outra vez.')));
                        }
                      }
                    },
                    icon: const Icon(Icons.local_shipping_outlined, size: 18),
                    label: const Text('Marcar como enviado'),
                    style: FilledButton.styleFrom(backgroundColor: green, shape: const StadiumBorder()),
                  ),
              ]),
            ),
        ],
      ),
    );
  }
}

class _ProductSheet extends ConsumerStatefulWidget {
  final ShopProduct? existing;
  const _ProductSheet({this.existing});
  @override
  ConsumerState<_ProductSheet> createState() => _ProductSheetState();
}

class _ProductSheetState extends ConsumerState<_ProductSheet> {
  late final _title = TextEditingController(text: widget.existing?.title ?? '');
  late final _desc = TextEditingController(text: widget.existing?.description ?? '');
  late final _price = TextEditingController(
      text: widget.existing == null ? '' : widget.existing!.price.toStringAsFixed(widget.existing!.price % 1 == 0 ? 0 : 2));
  late final _stock = TextEditingController(text: widget.existing?.stock?.toString() ?? '');
  late final _delivery = TextEditingController(text: widget.existing?.deliveryNote ?? '');
  late String? _photo = widget.existing?.photoUrl;
  late bool _active = widget.existing?.active ?? true;
  bool _busy = false;
  String? _error;

  @override
  void dispose() {
    for (final c in [_title, _desc, _price, _stock, _delivery]) {
      c.dispose();
    }
    super.dispose();
  }

  Future<void> _pickPhoto() async {
    final file = await ImagePicker().pickImage(source: ImageSource.gallery, maxWidth: 1600, imageQuality: 85);
    if (file == null) return;
    setState(() => _busy = true);
    try {
      final url = await uploadProductPhoto(file);
      if (mounted) setState(() => _photo = url);
    } catch (_) {
      if (mounted) setState(() => _error = 'Não foi possível carregar a foto.');
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _save() async {
    final price = parseEuros(_price.text);
    final stock = _stock.text.trim().isEmpty ? null : int.tryParse(_stock.text.trim());
    if (_title.text.trim().length < 2) return setState(() => _error = 'Dá um nome ao produto.');
    if (price == null || price < 1) return setState(() => _error = 'Indica o preço (mínimo 1 €).');
    if (_stock.text.trim().isNotEmpty && (stock == null || stock < 0)) return setState(() => _error = 'Stock inválido.');
    setState(() {
      _busy = true;
      _error = null;
    });
    try {
      await saveProduct(
        id: widget.existing?.id,
        title: _title.text,
        description: _desc.text,
        price: price,
        stock: stock,
        deliveryNote: _delivery.text,
        photoUrl: _photo,
        active: _active,
      );
      ref.invalidate(myProductsProvider);
      ref.invalidate(myPartnerProProvider);
      if (mounted) Navigator.of(context).pop();
    } on PostgrestException catch (e) {
      // Sem Pro há um limite de produtos (migração 161).
      if (mounted) {
        setState(() => _error = e.message.contains('shop_limit')
            ? 'Sem o Verificado podes ter até ${ref.read(myPartnerProProvider).value?.freeShopProducts ?? 5} produtos. Passa a Verificado para não teres limites.'
            : 'Não foi possível guardar. Tenta outra vez.');
      }
    } catch (_) {
      if (mounted) setState(() => _error = 'Não foi possível guardar. Tenta outra vez.');
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  Future<void> _delete() async {
    final id = widget.existing?.id;
    if (id == null) return;
    setState(() => _busy = true);
    try {
      await deleteProduct(id);
      ref.invalidate(myProductsProvider);
      if (mounted) Navigator.of(context).pop();
    } catch (_) {
      if (mounted) setState(() => _error = 'Não foi possível apagar. Esconde-o em vez disso.');
    } finally {
      if (mounted) setState(() => _busy = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final green = AppTheme.accentOliveDark;
    return SingleChildScrollView(
      padding: EdgeInsets.fromLTRB(22, 18, 22, 20 + MediaQuery.viewInsetsOf(context).bottom),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Text(widget.existing == null ? 'Novo produto' : 'Editar produto',
            style: const TextStyle(fontSize: 20, fontWeight: FontWeight.w800, color: AppTheme.ink)),
        const SizedBox(height: 12),
        Center(
          child: InkWell(
            onTap: _busy ? null : _pickPhoto,
            borderRadius: BorderRadius.circular(16),
            child: ClipRRect(
              borderRadius: BorderRadius.circular(16),
              child: _photo == null
                  ? Container(
                      width: 140,
                      height: 140,
                      color: AppTheme.accentTint,
                      child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
                        Icon(Icons.add_a_photo_outlined, color: green),
                        const SizedBox(height: 6),
                        const Text('Foto', style: TextStyle(color: AppTheme.ink)),
                      ]),
                    )
                  : Image.network(_photo!, width: 140, height: 140, fit: BoxFit.cover),
            ),
          ),
        ),
        const SizedBox(height: 10),
        TextField(controller: _title, maxLength: 120, decoration: const InputDecoration(labelText: 'Nome', hintText: 'Jarra de barro pintada à mão')),
        TextField(controller: _desc, maxLines: 4, maxLength: 2000, decoration: const InputDecoration(labelText: 'Descrição')),
        Row(children: [
          Expanded(
            child: TextField(
              controller: _price,
              keyboardType: const TextInputType.numberWithOptions(decimal: true),
              decoration: const InputDecoration(labelText: 'Preço', suffixText: '€'),
            ),
          ),
          const SizedBox(width: 12),
          Expanded(
            child: TextField(
              controller: _stock,
              keyboardType: TextInputType.number,
              decoration: const InputDecoration(labelText: 'Stock', hintText: 'Sem limite'),
            ),
          ),
        ]),
        const SizedBox(height: 8),
        TextField(
          controller: _delivery,
          maxLength: 300,
          decoration: const InputDecoration(labelText: 'Envio (opcional)', hintText: 'Envio em 5 dias úteis, portes incluídos'),
        ),
        SwitchListTile.adaptive(
          contentPadding: EdgeInsets.zero,
          title: const Text('Visível na loja'),
          value: _active,
          onChanged: (v) => setState(() => _active = v),
        ),
        if (_error != null) Text(_error!, style: const TextStyle(color: Color(0xFFB3261E))),
        const SizedBox(height: 10),
        FilledButton(
          onPressed: _busy ? null : _save,
          style: FilledButton.styleFrom(backgroundColor: green, minimumSize: const Size.fromHeight(50), shape: const StadiumBorder()),
          child: Text(_busy ? 'A guardar…' : 'Guardar'),
        ),
        if (widget.existing != null)
          TextButton(onPressed: _busy ? null : _delete, child: const Text('Apagar produto')),
      ]),
    );
  }
}
