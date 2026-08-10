import 'package:flutter/material.dart';

/// Placeholder theme — mobile-app/shared/design-system.md ainda não foi
/// escrito a sério. Estilo inspirado num moodboard partilhado pelo
/// utilizador: fundo creme quente, cartões com gradientes pastel suaves,
/// tipografia bold e cantos bem arredondados.
class AppTheme {
  static const seedColor = Color(0xFFE0708A);

  static const background = Color(0xFFF7F1EA);
  static const ink = Color(0xFF241F1C);
  static const inkMuted = Color(0xFF837A73);

  static ThemeData get light {
    final colorScheme = ColorScheme.fromSeed(
      seedColor: seedColor,
      brightness: Brightness.light,
    ).copyWith(surface: background);

    final baseText = ThemeData.light().textTheme;

    return ThemeData(
      useMaterial3: true,
      colorScheme: colorScheme,
      scaffoldBackgroundColor: background,
      textTheme: baseText.copyWith(
        headlineMedium: baseText.headlineMedium?.copyWith(fontWeight: FontWeight.w800, color: ink, height: 1.1),
        headlineSmall: baseText.headlineSmall?.copyWith(fontWeight: FontWeight.w800, color: ink, height: 1.15),
        titleLarge: baseText.titleLarge?.copyWith(fontWeight: FontWeight.w700, color: ink),
        titleMedium: baseText.titleMedium?.copyWith(fontWeight: FontWeight.w700, color: ink),
        bodyLarge: baseText.bodyLarge?.copyWith(color: ink),
        bodyMedium: baseText.bodyMedium?.copyWith(color: inkMuted),
        bodySmall: baseText.bodySmall?.copyWith(color: inkMuted),
      ),
      appBarTheme: const AppBarTheme(
        backgroundColor: background,
        foregroundColor: ink,
        elevation: 0,
        centerTitle: false,
        titleTextStyle: TextStyle(color: ink, fontSize: 20, fontWeight: FontWeight.w800),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: Colors.white,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(18),
          borderSide: BorderSide.none,
        ),
        contentPadding: const EdgeInsets.symmetric(horizontal: 18, vertical: 16),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          minimumSize: const Size.fromHeight(54),
          backgroundColor: ink,
          foregroundColor: Colors.white,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
          textStyle: const TextStyle(fontWeight: FontWeight.w700),
        ),
      ),
      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          minimumSize: const Size.fromHeight(54),
          foregroundColor: ink,
          side: const BorderSide(color: Color(0xFFE2D9CF)),
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
          textStyle: const TextStyle(fontWeight: FontWeight.w700),
        ),
      ),
      cardTheme: CardThemeData(
        elevation: 0,
        color: Colors.white,
        surfaceTintColor: Colors.transparent,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
      ),
      chipTheme: ChipThemeData(
        backgroundColor: Colors.white,
        selectedColor: ink,
        side: const BorderSide(color: Color(0xFFE2D9CF)),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999)),
      ),
    );
  }
}

/// Gradientes pastel usados nos cartões de destaque (feed, cabeçalho do
/// casamento) — inspirados no moodboard partilhado, sem depender de imagens.
class AppGradients {
  static const wedding = LinearGradient(
    colors: [Color(0xFFFFC9D4), Color(0xFFFFE3A3)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const guests = LinearGradient(
    colors: [Color(0xFFC3CCFF), Color(0xFFE7C6FF)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const checklist = LinearGradient(
    colors: [Color(0xFFC6F2D6), Color(0xFF9FE6D3)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const budget = LinearGradient(
    colors: [Color(0xFFFFDCA6), Color(0xFFFFB19E)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const seating = LinearGradient(
    colors: [Color(0xFFAEE6FF), Color(0xFFCFC0FF)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const suppliers = LinearGradient(
    colors: [Color(0xFFFFC0B8), Color(0xFFFFDDA6)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );

  static const muted = LinearGradient(
    colors: [Color(0xFFE9E2D9), Color(0xFFDCD3C8)],
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
  );
}

/// Cores semânticas de estado (ex: RSVP) — usadas em vez de emojis para
/// comunicar estado, mantendo a app livre de emojis decorativos.
class AppStatusColors {
  static const confirmed = Color(0xFF3FA463);
  static const pending = Color(0xFFDB9A34);
  static const declined = Color(0xFFD5615A);
}
