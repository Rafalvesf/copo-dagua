import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

/// Implementação executável do design system documentado em
/// mobile-app/shared/design-system.md — fundo creme quente com
/// acentos verde-oliva, cards brancos com sombra difusa, tipografia
/// serifada (Fraunces) para títulos e Inter para o resto. Escala
/// definida para um ecrã de referência de 375px.
class AppTheme {
  static const seedColor = accentOliveDark;

  static const background = Color(0xFFF8F3EA);
  static const ink = Color(0xFF241F16);
  static const inkMuted = Color(0xFF8A8175);

  /// Acento principal da marca — verde-oliva médio. Usado em estados
  /// selecionados/ativos e para semear o ColorScheme.
  static const accentOlive = Color(0xFF6E7C55);

  /// Variante mais escura do acento — cards de destaque (hero do
  /// Home), botões primários, barras de progresso, estado ativo da
  /// navbar — e para tingir sombras onde o verde pastel não chega.
  static const accentOliveDark = Color(0xFF3F4A30);

  /// Cor de contorno neutra e quente, partilhada por bordas subtis
  /// (chips, botões outline, separadores).
  static const borderMuted = Color(0xFFE6E0D2);

  /// Fundo geral atrás da moldura de telemóvel, em janelas largas.
  static const outerBackdrop = Color(0xFFEAE3D1);

  /// Margem lateral partilhada por todos os ecrãs principais — o
  /// conteúdo e a navbar flutuante alinham-se a esta mesma largura.
  static const screenMargin = 28.0;

  /// Sombra partilhada por todos os cards — difusa e tingida com
  /// [accentOliveDark] a baixa opacidade, para um halo suave em vez de
  /// uma sombra cinzenta dura.
  static const cardShadow = [
    BoxShadow(color: Color(0x1F3F4A30), blurRadius: 24, offset: Offset(0, 10)),
  ];

  /// Variante mais carregada de [cardShadow], para elementos que devem
  /// ganhar destaque/dominância sobre os cards normais (ex: tiles de
  /// estatística selecionáveis, estado de hover) — mesmo halo, mais
  /// opacidade e alcance.
  static const cardShadowStrong = [
    BoxShadow(color: Color(0x2E3F4A30), blurRadius: 32, offset: Offset(0, 14)),
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
        // Saudação (headline) — serifado, editorial mas amigável.
        headlineMedium: GoogleFonts.fraunces(
          textStyle: baseText.headlineMedium?.copyWith(
            fontSize: 50,
            height: 40 / 34,
            fontWeight: FontWeight.w600,
            letterSpacing: -0.5,
            color: ink,
          ),
        ),
        headlineSmall: GoogleFonts.fraunces(
          textStyle: baseText.headlineSmall?.copyWith(
            fontWeight: FontWeight.w600,
            color: ink,
            height: 1.15,
          ),
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
        backgroundColor: Colors.transparent,
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
          side: const BorderSide(color: borderMuted),
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
        side: const BorderSide(color: borderMuted),
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

  /// Título serifado (Fraunces) para usar fora do textTheme, onde a cor
  /// tem de ser explícita (ex: texto sobre um gradiente).
  static TextStyle displaySerif({
    double fontSize = 28,
    FontWeight fontWeight = FontWeight.w600,
    Color? color,
  }) => GoogleFonts.fraunces(
    fontSize: fontSize,
    height: 1.2,
    fontWeight: fontWeight,
    color: color,
  );
}

/// Paleta extraída dos mockups de referência — superfícies pastel
/// quentes para os cartões de destaque, pensadas para funcionar sobre
/// os novos fundos em gradiente.
class AppColors {
  static const blue = Color(0xFFDCE3EF);
  static const green = Color(0xFFE4EADC);
  static const yellow = Color(0xFFF7EACA);
  static const pink = Color(0xFFF3DEE0);
  static const gray = Color(0xFFF1ECE1);
  static const purple = Color(0xFFDCD9EA);

  static const muted = Color(0xFFEEE8DA);

  /// Verde-oliva escuro de destaque forte — usar com moderação (cards
  /// de destaque, progresso importante, botões primários, estado ativo
  /// da navbar), nunca como cor de base. Hierarquia: [green] (normal) →
  /// [AppStatusColors.confirmed] (ativo/confirmado) → [greenDark]
  /// (destaque forte). Alias de [AppTheme.accentOliveDark].
  static const greenDark = AppTheme.accentOliveDark;
}

/// Gradientes de fundo — a linguagem visual principal do redesign.
/// Aplicados através de GradientScaffold, nunca diretamente num
/// Scaffold (que só aceita uma Color sólida).
class AppGradients {
  /// Verde-sálvia → creme, diagonal. Ecrãs de primeira impressão /
  /// emoção (boas-vindas, onboarding).
  static const hero = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFFE6E7D5), Color(0xFFF8F3EA)],
  );

  /// Creme, quase sólido, vertical. Ecrãs de lista/dashboard.
  static const feed = LinearGradient(
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
    colors: [Color(0xFFF8F3EA), Color(0xFFF3EEE0)],
  );

  /// Creme → branco, vertical, quase impercetível. Ecrãs de
  /// formulário/detalhe, onde um gradiente forte prejudicaria a
  /// legibilidade.
  static const subtle = LinearGradient(
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
    colors: [Color(0xFFF8F3EA), Color(0xFFFFFFFF)],
  );

  /// Sálvia sólido — momento único e celebratório (ex: fim do
  /// onboarding).
  static const moodSolid = Color(0xFFDCE3C8);
}

/// Cores semânticas de estado (ex: RSVP) — usadas em vez de emojis para
/// comunicar estado, mantendo a app livre de emojis decorativos.
class AppStatusColors {
  static const confirmed = Color(0xFF2EAD65);
  static const pending = Color(0xFFF2A01B);
  static const declined = Color(0xFFEF5350);
}
