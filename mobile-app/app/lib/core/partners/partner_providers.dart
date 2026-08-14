import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../mock/mock_backend.dart';
import '../models/models.dart';

final suppliersProvider = FutureProvider.family<List<Supplier>, SupplierCategory?>((ref, category) {
  return MockBackend.instance.listSuppliers(category: category);
});

class SupplierPickerArgs {
  final SupplierCategory? category;
  final bool selectionMode;

  const SupplierPickerArgs({this.category, this.selectionMode = false});
}
