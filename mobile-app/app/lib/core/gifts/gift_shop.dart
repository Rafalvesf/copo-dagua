import 'package:flutter/foundation.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:image_picker/image_picker.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show FileOptions, FunctionException, PostgrestException;

import '../../shared/public_link.dart';
import '../supabase/supabase_config.dart';

/// Lista de presentes (migração 160): produtos da loja dos parceiros, pagos
/// na app ao parceiro, e desejos do organizador, reservados e comprados fora.
/// O dinheiro nunca vai para o organizador.

String giftEuros(num v) {
  final cents = (v * 100).round();
  final int whole = cents ~/ 100;
  final rest = cents % 100;
  final s = whole.toString().replaceAllMapped(RegExp(r'\B(?=(\d{3})+(?!\d))'), (_) => ' ');
  return '$s${rest == 0 ? '' : ',${rest.toString().padLeft(2, '0')}'} €';
}

double? parseEuros(String s) => double.tryParse(s.trim().replaceAll(' ', '').replaceAll('€', '').replaceAll(',', '.'));

class GiftItem {
  final String id;
  final String kind; // product | wish
  final String? productId;
  final String title;
  final String? note;
  final String? linkUrl;
  final double? price;
  final String? photoUrl;
  final String? partnerName;
  final String? deliveryNote;
  final bool available;
  final int wanted;
  final int taken;
  final int mine;
  final String? myClaimId;

  const GiftItem({
    required this.id,
    required this.kind,
    this.productId,
    required this.title,
    this.note,
    this.linkUrl,
    this.price,
    this.photoUrl,
    this.partnerName,
    this.deliveryNote,
    this.available = true,
    this.wanted = 1,
    this.taken = 0,
    this.mine = 0,
    this.myClaimId,
  });

  bool get isProduct => kind == 'product';
  int get left => (wanted - taken).clamp(0, wanted);
  bool get complete => left == 0;

  factory GiftItem.fromRow(Map<String, dynamic> r) => GiftItem(
        id: r['id'] as String,
        kind: r['kind'] as String? ?? 'wish',
        productId: r['product_id'] as String?,
        title: r['title'] as String? ?? '',
        note: r['note'] as String?,
        linkUrl: r['link_url'] as String?,
        price: (r['price'] as num?)?.toDouble(),
        photoUrl: r['photo_url'] as String?,
        partnerName: r['partner_name'] as String?,
        deliveryNote: r['delivery_note'] as String?,
        available: r['available'] != false,
        wanted: (r['quantity_wanted'] as num?)?.toInt() ?? 1,
        taken: (r['quantity_taken'] as num?)?.toInt() ?? 0,
        mine: (r['my_quantity'] as num?)?.toInt() ?? 0,
        myClaimId: r['my_claim_id'] as String?,
      );
}

/// A lista do evento. `null` = migração 160 ainda por correr.
final giftListProvider = FutureProvider.family<List<GiftItem>?, String>((ref, weddingId) async {
  try {
    final rows = await supabase.rpc('gift_list', params: {'p_wedding': weddingId}) as List;
    return rows.cast<Map<String, dynamic>>().map(GiftItem.fromRow).toList();
  } on PostgrestException {
    return null;
  }
});

class GiftGiver {
  final String? itemId;
  final String title;
  final String kind;
  final String name;
  final int quantity;
  final String? message;
  final double? amount;
  final DateTime? shippedAt;
  final DateTime? at;
  const GiftGiver({this.itemId, required this.title, required this.kind, required this.name, required this.quantity, this.message, this.amount, this.shippedAt, this.at});
}

final giftGiversProvider = FutureProvider.family<List<GiftGiver>, String>((ref, weddingId) async {
  try {
    final rows = await supabase.rpc('gift_givers', params: {'p_wedding': weddingId}) as List;
    return [
      for (final r in rows.cast<Map<String, dynamic>>())
        GiftGiver(
          itemId: r['item_id'] as String?,
          title: r['title'] as String? ?? '',
          kind: r['kind'] as String? ?? 'wish',
          name: r['guest_name'] as String? ?? 'Convidado',
          quantity: (r['quantity'] as num?)?.toInt() ?? 1,
          message: r['message'] as String?,
          amount: (r['amount'] as num?)?.toDouble(),
          shippedAt: DateTime.tryParse('${r['shipped_at'] ?? ''}')?.toLocal(),
          at: DateTime.tryParse('${r['created_at'] ?? ''}')?.toLocal(),
        ),
    ];
  } on PostgrestException {
    return const [];
  }
});

// ---------- Organizador: gerir a lista ----------

Future<void> addWish({
  required String weddingId,
  required String title,
  String? note,
  String? linkUrl,
  double? price,
  int quantity = 1,
}) async {
  await supabase.from('gift_list_items').insert({
    'wedding_id': weddingId,
    'kind': 'wish',
    'title': title.trim(),
    'note': note?.trim().isEmpty == true ? null : note?.trim(),
    'link_url': _cleanUrl(linkUrl),
    'price': price,
    'quantity_wanted': quantity,
    'created_by': supabase.auth.currentUser?.id,
  });
}

Future<void> updateWish(String id, {required String title, String? note, String? linkUrl, double? price, int quantity = 1}) async {
  await supabase.from('gift_list_items').update({
    'title': title.trim(),
    'note': note?.trim().isEmpty == true ? null : note?.trim(),
    'link_url': _cleanUrl(linkUrl),
    'price': price,
    'quantity_wanted': quantity,
  }).eq('id', id);
}

Future<void> addProductToList({required String weddingId, required String productId, int quantity = 1}) async {
  await supabase.from('gift_list_items').insert({
    'wedding_id': weddingId,
    'kind': 'product',
    'product_id': productId,
    'quantity_wanted': quantity,
    'created_by': supabase.auth.currentUser?.id,
  });
}

Future<void> removeGiftItem(String id) async {
  await supabase.from('gift_list_items').delete().eq('id', id);
}

String? _cleanUrl(String? url) {
  final u = url?.trim() ?? '';
  if (u.isEmpty) return null;
  return u.startsWith('http://') || u.startsWith('https://') ? u : 'https://$u';
}

/// Morada para os parceiros enviarem os presentes da loja.
final giftDeliveryAddressProvider = FutureProvider.family<String?, String>((ref, weddingId) async {
  try {
    final row = await supabase.from('weddings').select('gift_delivery_address').eq('id', weddingId).maybeSingle();
    return row?['gift_delivery_address'] as String?;
  } on PostgrestException {
    return null;
  }
});

Future<void> saveGiftDeliveryAddress(String weddingId, String address) async {
  await supabase.from('weddings').update({'gift_delivery_address': address.trim().isEmpty ? null : address.trim()}).eq('id', weddingId);
}

// ---------- Loja ----------

class ShopProduct {
  final String id;
  final String partnerId;
  final String partnerName;
  final String? city;
  final String title;
  final String? description;
  final double price;
  final String? photoUrl;
  final String? deliveryNote;
  final bool inStock;
  final int? stock;
  final bool active;
  const ShopProduct({
    required this.id,
    required this.partnerId,
    required this.partnerName,
    this.city,
    required this.title,
    this.description,
    required this.price,
    this.photoUrl,
    this.deliveryNote,
    this.inStock = true,
    this.stock,
    this.active = true,
  });
}

final shopProductsProvider = FutureProvider.family<List<ShopProduct>, String>((ref, query) async {
  try {
    final rows = await supabase.rpc('shop_products', params: {'p_query': query}) as List;
    return [
      for (final r in rows.cast<Map<String, dynamic>>())
        ShopProduct(
          id: r['id'] as String,
          partnerId: r['partner_id'] as String,
          partnerName: r['partner_name'] as String? ?? 'Parceiro',
          city: r['city'] as String?,
          title: r['title'] as String? ?? '',
          description: r['description'] as String?,
          price: (r['price'] as num?)?.toDouble() ?? 0,
          photoUrl: r['photo_url'] as String?,
          deliveryNote: r['delivery_note'] as String?,
          inStock: r['in_stock'] != false,
        ),
    ];
  } on PostgrestException {
    return const [];
  }
});

// ---------- Parceiro: os meus produtos e encomendas ----------

final myProductsProvider = FutureProvider<List<ShopProduct>?>((ref) async {
  final uid = supabase.auth.currentUser?.id;
  if (uid == null) return const [];
  try {
    final rows = await supabase.from('partner_products').select().eq('partner_id', uid).order('created_at', ascending: false);
    return [
      for (final r in (rows as List).cast<Map<String, dynamic>>())
        ShopProduct(
          id: r['id'] as String,
          partnerId: uid,
          partnerName: '',
          title: r['title'] as String? ?? '',
          description: r['description'] as String?,
          price: (r['price'] as num?)?.toDouble() ?? 0,
          photoUrl: r['photo_url'] as String?,
          deliveryNote: r['delivery_note'] as String?,
          stock: (r['stock'] as num?)?.toInt(),
          inStock: r['stock'] == null || (r['stock'] as num) > 0,
          active: r['active'] != false,
        ),
    ];
  } on PostgrestException {
    return null;
  }
});

Future<String> uploadProductPhoto(XFile file) async {
  final uid = supabase.auth.currentUser!.id;
  final bytes = await file.readAsBytes();
  final ext = file.name.contains('.') ? file.name.split('.').last.toLowerCase() : 'jpg';
  final path = '$uid/products/${DateTime.now().microsecondsSinceEpoch}.$ext';
  await supabase.storage.from('portfolio').uploadBinary(path, bytes, fileOptions: FileOptions(contentType: 'image/${ext == 'jpg' ? 'jpeg' : ext}'));
  return supabase.storage.from('portfolio').getPublicUrl(path);
}

Future<void> saveProduct({
  String? id,
  required String title,
  String? description,
  required double price,
  int? stock,
  String? deliveryNote,
  String? photoUrl,
  bool active = true,
}) async {
  final data = {
    'title': title.trim(),
    'description': description?.trim().isEmpty == true ? null : description?.trim(),
    'price': price,
    'stock': stock,
    'delivery_note': deliveryNote?.trim().isEmpty == true ? null : deliveryNote?.trim(),
    'photo_url': photoUrl,
    'active': active,
    'updated_at': DateTime.now().toUtc().toIso8601String(),
  };
  if (id == null) {
    await supabase.from('partner_products').insert({...data, 'partner_id': supabase.auth.currentUser!.id});
  } else {
    await supabase.from('partner_products').update(data).eq('id', id);
  }
}

Future<void> deleteProduct(String id) async {
  await supabase.from('partner_products').delete().eq('id', id);
}

class PartnerGiftOrder {
  final String id;
  final String productTitle;
  final int quantity;
  final double amount;
  final double fee;
  final String buyerName;
  final String? message;
  final String client;
  final String? deliveryAddress;
  final DateTime? paidAt;
  final DateTime? shippedAt;
  const PartnerGiftOrder({
    required this.id,
    required this.productTitle,
    required this.quantity,
    required this.amount,
    required this.fee,
    required this.buyerName,
    this.message,
    required this.client,
    this.deliveryAddress,
    this.paidAt,
    this.shippedAt,
  });
}

final partnerGiftOrdersProvider = FutureProvider<List<PartnerGiftOrder>>((ref) async {
  try {
    final rows = await supabase.rpc('partner_gift_orders') as List;
    return [
      for (final r in rows.cast<Map<String, dynamic>>())
        PartnerGiftOrder(
          id: r['id'] as String,
          productTitle: r['product_title'] as String? ?? '',
          quantity: (r['quantity'] as num?)?.toInt() ?? 1,
          amount: (r['amount'] as num?)?.toDouble() ?? 0,
          fee: ((r['platform_fee'] as num?)?.toDouble() ?? 0) + ((r['stripe_fee'] as num?)?.toDouble() ?? 0),
          buyerName: r['buyer_name'] as String? ?? 'Convidado',
          message: r['message'] as String?,
          client: r['client'] as String? ?? 'Cliente',
          deliveryAddress: r['delivery_address'] as String?,
          paidAt: DateTime.tryParse('${r['paid_at'] ?? ''}')?.toLocal(),
          shippedAt: DateTime.tryParse('${r['shipped_at'] ?? ''}')?.toLocal(),
        ),
    ];
  } on PostgrestException {
    return const [];
  }
});

Future<void> markGiftOrderShipped(String orderId) async {
  await supabase.rpc('mark_gift_order_shipped', params: {'p_order': orderId});
}

// ---------- Convidado ----------

Future<void> claimGift(String itemId, {int quantity = 1, String? message}) async {
  try {
    await supabase.rpc('claim_gift', params: {'p_item': itemId, 'p_quantity': quantity, 'p_message': message});
  } on PostgrestException catch (e) {
    throw GiftError(e.message.contains('already_taken') ? 'already_taken' : 'unknown');
  }
}

Future<void> unclaimGift(String claimId) async {
  await supabase.rpc('unclaim_gift', params: {'p_claim': claimId});
}

class GiftError implements Exception {
  final String code;
  const GiftError(this.code);
  String get message => switch (code) {
        'already_taken' => 'Alguém já ofereceu este presente.',
        'out_of_stock' => 'Este produto esgotou.',
        'unavailable' => 'Este produto já não está disponível.',
        'partner_not_onboarded' => 'A loja ainda não ativou os pagamentos. Tenta mais tarde.',
        'not_guest' => 'Só os convidados do evento podem oferecer.',
        'own_product' => 'É um produto da tua loja.',
        _ => 'Não foi possível abrir o pagamento. Tenta novamente.',
      };
}

Future<String> createGiftCheckoutUrl({required String itemId, required int quantity, String? message, required String weddingId}) async {
  final success = kIsWeb ? publicLink('/presente/{ORDER_ID}') : 'anossa://presente/{ORDER_ID}';
  final cancel = kIsWeb ? publicLink('/guest-gifts/$weddingId') : 'anossa://payment-cancel';
  try {
    final res = await supabase.functions.invoke('create-gift-checkout', body: {
      'action': 'checkout',
      'item_id': itemId,
      'quantity': quantity,
      if (message != null && message.trim().isNotEmpty) 'message': message.trim(),
      'success_url': success,
      'cancel_url': cancel,
    });
    final url = (res.data as Map?)?['url'] as String?;
    if (url == null) throw const GiftError('unknown');
    return url;
  } on FunctionException catch (e) {
    final d = e.details;
    throw GiftError(d is Map ? (d['error'] as String? ?? 'unknown') : 'unknown');
  }
}

Future<({String status, String? weddingId})> syncGiftOrder(String orderId) async {
  final res = await supabase.functions.invoke('create-gift-checkout', body: {'action': 'sync', 'order_id': orderId});
  final m = (res.data as Map).cast<String, dynamic>();
  return (status: m['status'] as String? ?? 'open', weddingId: m['wedding_id'] as String?);
}
