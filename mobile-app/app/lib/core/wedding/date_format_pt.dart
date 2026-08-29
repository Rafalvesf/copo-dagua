const monthNamesPt = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro',
];

/// Abreviaturas de dia da semana (índice 0 = segunda), usadas na tira
/// de datas do Calendário.
const weekdayAbbrPt = ['SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB', 'DOM'];

/// "24 AGOSTO 2026" — formato usado nos cabeçalhos de casamento
/// (Home, "Os noivos").
String formatWeddingDateCaps(DateTime date) =>
    '${date.day.toString().padLeft(2, '0')} '
    '${monthNamesPt[date.month - 1].toUpperCase()} ${date.year}';

/// "Seg, 15 Set" — usado no atalho de data para o Calendário.
String formatShortDatePt(DateTime date) {
  final weekday = weekdayAbbrPt[date.weekday - 1];
  final weekdayCap = weekday[0] + weekday.substring(1).toLowerCase();
  final month = monthNamesPt[date.month - 1].substring(0, 3);
  return '$weekdayCap, ${date.day} $month';
}

/// "14:30" — hora de um evento/compromisso do Calendário.
String formatTimePt(DateTime date) =>
    '${date.hour.toString().padLeft(2, '0')}:'
    '${date.minute.toString().padLeft(2, '0')}';
