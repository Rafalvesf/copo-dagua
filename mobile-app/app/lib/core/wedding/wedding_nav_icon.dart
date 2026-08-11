import 'package:flutter_riverpod/flutter_riverpod.dart';

/// Opções de ilustração para o ícone central (casamento) da navbar
/// flutuante — escolhidas pelo utilizador no ecrã de detalhes do
/// casamento. Todas as opções são ilustrações personalizadas.
enum WeddingNavIcon {
  bears('Ursinhos', 'assets/images/nav_icon_bears.png', 1),
  penguins('Pinguins', 'assets/images/nav_icon_penguins.png', 1),
  frogs('Sapos', 'assets/images/nav_icon_frogs.png', 1),
  // Ficheiro quadrado (1024x1024) em vez de retangular como os outros —
  // com BoxFit.cover num quadro quadrado não há corte nenhum, por isso
  // o boneco fica visivelmente mais pequeno que os restantes (que são
  // recortados/ampliados ao encaixar no quadro). Compensado à mão aqui.
  capybaras('Capivaras', 'assets/images/nav_icon_capybaras.png', 1.45);

  final String label;
  final String assetPath;

  /// Ampliação manual para compensar diferenças de enquadramento entre
  /// as ilustrações (nem todas têm o boneco a preencher o mesmo espaço
  /// do canvas).
  final double zoom;

  const WeddingNavIcon(this.label, this.assetPath, this.zoom);
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
