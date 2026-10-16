/// Valores em euros no formato português, iguais em toda a app:
/// `8 500 €`, `594,00 €` (com [cents]). Antes havia três formatos
/// misturados ("25000€", "8500 €", "594.00 €"). Os espaços são
/// não-separáveis (U+00A0) para o "€" nunca ficar sozinho numa linha.
String euros(num value, {bool cents = false}) {
  final negative = value < 0;
  final abs = value.abs();
  final whole = cents ? abs.truncate() : abs.round();
  final digits = whole.toString();
  final buf = StringBuffer();
  for (var i = 0; i < digits.length; i++) {
    if (i > 0 && (digits.length - i) % 3 == 0) buf.write('\u00A0');
    buf.write(digits[i]);
  }
  if (cents) {
    final c = ((abs - whole) * 100).round().clamp(0, 99);
    buf.write(',${c.toString().padLeft(2, '0')}');
  }
  return '${negative ? '-' : ''}$buf\u00A0€';
}
