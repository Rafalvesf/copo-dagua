import 'package:flutter_riverpod/flutter_riverpod.dart';

/// Opções de ilustração para o ícone central (casamento) da navbar
/// flutuante — escolhidas pelo utilizador no ecrã de detalhes do
/// casamento. Todas as opções são ilustrações personalizadas; ainda só
/// existe uma, as restantes chegam a seguir.
enum WeddingNavIcon {
  bears('Ursinhos', 'assets/images/nav_icon_bears.png');

  final String label;
  final String assetPath;

  const WeddingNavIcon(this.label, this.assetPath);
}

class WeddingNavIconNotifier extends Notifier<WeddingNavIcon> {
  @override
  WeddingNavIcon build() => WeddingNavIcon.bears;

  void select(WeddingNavIcon icon) => state = icon;
}

final weddingNavIconProvider =
    NotifierProvider<WeddingNavIconNotifier, WeddingNavIcon>(
      WeddingNavIconNotifier.new,
    );
