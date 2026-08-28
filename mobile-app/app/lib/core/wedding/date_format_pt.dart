const monthNamesPt = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

/// "24 AGOSTO 2026" — formato usado nos cabeçalhos de casamento
/// (Home, "Os noivos").
String formatWeddingDateCaps(DateTime date) =>
    '${date.day.toString().padLeft(2, '0')} '
    '${monthNamesPt[date.month - 1].toUpperCase()} ${date.year}';
