import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../mock/mock_backend.dart';
import '../models/models.dart';

final partnersProvider = FutureProvider.family<List<Partner>, PartnerCategory?>((ref, category) {
  return MockBackend.instance.listPartners(category: category);
});

class PartnerPickerArgs {
  final PartnerCategory? category;
  final bool selectionMode;

  const PartnerPickerArgs({this.category, this.selectionMode = false});
}
