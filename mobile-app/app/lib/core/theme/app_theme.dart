import 'package:flutter/material.dart';

/// Placeholder theme — mobile-app/shared/design-system.md ainda não foi
/// escrito a sério. Paleta extraída pelo utilizador a partir dos
/// mockups de referência: fundo branco, superfícies pastel planas
/// (sem gradiente), preto para texto/ícones.
class AppTheme {
  static const seedColor = Color(0xFF141719);

  static const background = Color(0xFFFFFFFF);
  static const ink = Color(0xFF141719);
  static const inkMuted = Color(0xFF6E7378);

  /// Fundo geral atrás da moldura de telemóvel, em janelas largas.
  static const outerBackdrop = Color(0xFFD1D4DA);

  static ThemeData get light {
    final colorScheme = ColorScheme.fromSeed(
      seedColor: seedColor,
      brightness: Brightness.light,
    ).copyWith(surface: background);

    final baseText = ThemeData.light().textTheme.apply(fontFamily: 'Aeonik');

    return ThemeData(
      useMaterial3: true,
      fontFamily: 'Aeonik',
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
        fillColor: AppColors.gray,
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
          side: const BorderSide(color: Color(0xFFE3E4E7)),
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
        side: const BorderSide(color: Color(0xFFE3E4E7)),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999)),
      ),
    );
  }
}

/// Paleta extraída dos mockups de referência — superfícies planas
/// (sem gradiente) para os cartões de destaque.
class AppColors {
  static const blue = Color(0xFFDEF3FA);
  static const green = Color(0xFFE1F7DD);
  static const yellow = Color(0xFFFFF5C0);
  static const gray = Color(0xFFF2F2F2);
  static const purple = Color(0xFFB589DF);

  static const muted = Color(0xFFEDEDED);
}

/// Cores semânticas de estado (ex: RSVP) — usadas em vez de emojis para
/// comunicar estado, mantendo a app livre de emojis decorativos.
class AppStatusColors {
  static const confirmed = Color(0xFF3FA463);
  static const pending = Color(0xFFDB9A34);
  static const declined = Color(0xFFD5615A);
}
