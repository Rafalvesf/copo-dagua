/// Primeira letra em maiúscula nos títulos dos cartões de eventos
/// (DESIGN.md, pedido 2026-11-12): "festa da rita" → "Festa da rita".
String capFirst(String s) {
  final t = s.trimLeft();
  return t.isEmpty ? t : t[0].toUpperCase() + t.substring(1);
}
