import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

/// Implementação executável do design system documentado em
/// mobile-app/shared/design-system.md — fundo branco, superfícies
/// pastel planas (sem gradiente), preto quase absoluto para
/// texto/ícones. Tipografia Inter, com escala definida para um ecrã de
/// referência de 375px.
class AppTheme {
  static const seedColor = Color(0xFF141719);

  static const background = Color(0xFFFFFFFF);
  static const ink = Color(0xFF141719);
  static const inkMuted = Color(0xFF6E7378);

  /// Fundo geral atrás da moldura de telemóvel, em janelas largas.
  static const outerBackdrop = Color(0xFFD1D4DA);

  /// Margem lateral partilhada por todos os ecrãs principais — o
  /// conteúdo e a navbar flutuante alinham-se a esta mesma largura.
  static const screenMargin = 28.0;

  /// Sombra partilhada por todos os cards — projetada para baixo, sem
  /// distorção, sem blur (aresta nítida e visível, em vez de um halo
  /// difuso).
  static const cardShadow = [
    BoxShadow(color: Color(0x1A000000), blurRadius: 0, offset: Offset(0, 3)),
  ];

  /// Variante mais carregada de [cardShadow], para elementos que devem
  /// ganhar destaque/dominância sobre os cards normais (ex: tiles de
  /// estatística selecionáveis, estado de hover) — mesma aresta nítida,
  /// mais opacidade e um pouco mais de alcance.
  static const cardShadowStrong = [
    BoxShadow(color: Color(0x33000000), blurRadius: 0, offset: Offset(0, 5)),
  ];

  /// Escurece uma cor de superfície ~10% para o estado pressionado —
  /// mesma cor base, sem introduzir tons novos, sem alterar tamanho,
  /// posição ou border-radius.
  static Color pressedOverlay(Color base) =>
      Color.alphaBlend(Colors.black.withValues(alpha: 0.1), base);

  static ThemeData get light {
    final colorScheme = ColorScheme.fromSeed(
      seedColor: seedColor,
      brightness: Brightness.light,
    ).copyWith(surface: background);

    final baseText = GoogleFonts.interTextTheme(ThemeData.light().textTheme);

    return ThemeData(
      useMaterial3: true,
      fontFamily: GoogleFonts.inter().fontFamily,
      colorScheme: colorScheme,
      scaffoldBackgroundColor: background,
      textTheme: baseText.copyWith(
        // Saudação (headline)
        headlineMedium: baseText.headlineMedium?.copyWith(
          fontSize: 50,
          height: 40 / 34,
          fontWeight: FontWeight.w700,
          letterSpacing: -0.5,
          color: ink,
        ),
        headlineSmall: baseText.headlineSmall?.copyWith(
          fontWeight: FontWeight.w700,
          color: ink,
          height: 1.15,
        ),
        // Título do card principal
        titleLarge: baseText.titleLarge?.copyWith(
          fontSize: 22,
          height: 28 / 22,
          fontWeight: FontWeight.w600,
          letterSpacing: 0,
          color: ink,
        ),
        // Títulos dos módulos
        titleMedium: baseText.titleMedium?.copyWith(
          fontSize: 18,
          height: 24 / 18,
          fontWeight: FontWeight.w600,
          letterSpacing: 0,
          color: ink,
        ),
        bodyLarge: baseText.bodyLarge?.copyWith(letterSpacing: 0, color: ink),
        // Subtítulo do card / descrições dos módulos
        bodyMedium: baseText.bodyMedium?.copyWith(
          fontSize: 14,
          height: 20 / 14,
          fontWeight: FontWeight.w400,
          letterSpacing: 0,
          color: inkMuted,
        ),
        bodySmall: baseText.bodySmall?.copyWith(
          letterSpacing: 0,
          color: inkMuted,
        ),
        // Texto do botão "Ver mais"
        labelLarge: baseText.labelLarge?.copyWith(
          fontSize: 16,
          height: 24 / 16,
          fontWeight: FontWeight.w500,
          letterSpacing: 0,
          color: ink,
        ),
      ),
      appBarTheme: AppBarTheme(
        backgroundColor: background,
        foregroundColor: ink,
        elevation: 0,
        centerTitle: false,
        titleTextStyle: GoogleFonts.inter(
          color: ink,
          fontSize: 22,
          height: 28 / 22,
          fontWeight: FontWeight.w600,
        ),
      ),
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: AppColors.gray,
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(18),
          borderSide: BorderSide.none,
        ),
        contentPadding: const EdgeInsets.symmetric(
          horizontal: 18,
          vertical: 16,
        ),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          minimumSize: const Size.fromHeight(54),
          backgroundColor: ink,
          foregroundColor: Colors.white,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(28),
          ),
          textStyle: GoogleFonts.inter(
            fontSize: 16,
            height: 24 / 16,
            fontWeight: FontWeight.w500,
          ),
        ),
      ),
      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          minimumSize: const Size.fromHeight(54),
          foregroundColor: ink,
          side: const BorderSide(color: Color(0xFFE3E4E7)),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(28),
          ),
          textStyle: GoogleFonts.inter(
            fontSize: 16,
            height: 24 / 16,
            fontWeight: FontWeight.w500,
          ),
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
        selectedColor: AppColors.green,
        side: const BorderSide(color: Color(0xFFE3E4E7)),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(999)),
      ),
    );
  }
}

/// Escala tipográfica definida pelo utilizador (ecrã de referência 375px).
/// Espelha os tokens acima como TextStyle prontos, para usar em widgets
/// com texto sobre fundos coloridos (onde a cor tem de ser explícita e
/// não pode vir do tema, ex: texto branco sobre um botão preto).
class AppTypography {
  static const cardTitle = TextStyle(
    fontSize: 22,
    height: 28 / 22,
    fontWeight: FontWeight.w600,
  );
  static const cardSubtitle = TextStyle(
    fontSize: 14,
    height: 20 / 14,
    fontWeight: FontWeight.w400,
  );
  static const buttonLabel = TextStyle(
    fontSize: 16,
    height: 24 / 16,
    fontWeight: FontWeight.w500,
  );
  static const moduleTitle = TextStyle(
    fontSize: 18,
    height: 24 / 18,
    fontWeight: FontWeight.w600,
  );
  static const moduleDescription = TextStyle(
    fontSize: 14,
    height: 20 / 14,
    fontWeight: FontWeight.w400,
  );
  static const iconSize = 24.0;
}

/// Paleta extraída dos mockups de referência — superfícies planas
/// (sem gradiente) para os cartões de destaque.
class AppColors {
  static const blue = Color(0xFFDEF3FA);
  static const green = Color(0xFFE2F7DE);
  static const yellow = Color(0xFFFFF5C0);
  static const pink = Color(0xFFFCE1EC);
  static const gray = Color(0xFFF2F2F2);
  static const purple = Color(0xFFB589DF);

  static const muted = Color(0xFFEDEDED);
}

/// Cores semânticas de estado (ex: RSVP) — usadas em vez de emojis para
/// comunicar estado, mantendo a app livre de emojis decorativos.
class AppStatusColors {
  static const confirmed = Color(0xFF2EAD65);
  static const pending = Color(0xFFF2A01B);
  static const declined = Color(0xFFEF5350);
}
