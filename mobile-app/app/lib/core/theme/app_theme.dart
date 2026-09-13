import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';

/// Implementação executável do design system documentado em
/// mobile-app/shared/design-system.md — fundo branco (creme quente
/// antes, pedido explícito do utilizador 2026-08-31: "make the bg
/// white on all pages instead of that cream") com acentos
/// verde-oliva, cards brancos com sombra difusa, tipografia Roboto
/// Black para títulos e Roboto Regular para o resto. Escala definida
/// para um ecrã de referência de 375px.
class AppTheme {
  static const seedColor = accentOliveDark;

  static const background = Colors.white;
  static const ink = Color(0xFF171713);

  /// Alias de [ink] — texto "secundário"/"muted" deixou de ter um tom
  /// mais claro próprio; usa-se preto sólido em todo o lado.
  static const inkMuted = ink;

  /// Cinza escuro neutro — só para o estado inativo dos ícones da
  /// navbar (Home/FloatingBottomNav/PartnerBottomNav), distinto do
  /// preto sólido usado no resto do texto.
  static const navIconMuted = Color(0xFF57534E);

  /// Verde principal da marca — cor única de acento (botões primários,
  /// estados ativos, barras de progresso). [accentOlive] e
  /// [accentOliveDark] eram dois tons; unificados num só verde.
  static const accentOlive = Color(0xFF5F7545);
  static const accentOliveDark = Color(0xFF5F7545);

  /// Cor de contorno neutra e quente, partilhada por bordas subtis
  /// (chips, botões outline, separadores).
  static const borderMuted = Color(0xFFE6E0D2);

  /// Fundo geral atrás da moldura de telemóvel, em janelas largas.
  static const outerBackdrop = Color(0xFFEAE3D1);

  /// Margem lateral partilhada por todos os ecrãs principais — o
  /// conteúdo e a navbar flutuante alinham-se a esta mesma largura.
  static const screenMargin = 28.0;

  /// Pedido explícito do utilizador 2026-08-31: "remove shadows from
  /// boxes" — cards deixaram de ter sombra própria; a separação do
  /// fundo branco vem agora da cor [surface] (cinzento claro), não de
  /// um halo. Mantidas como listas vazias (em vez de remover o campo)
  /// para não obrigar a tocar nos ~30 ficheiros que já referenciam
  /// [cardShadow]/[cardShadowStrong] no seu `boxShadow:`.
  static const cardShadow = <BoxShadow>[];

  static const cardShadowStrong = <BoxShadow>[];

  /// Superfície cinzenta clara para cards/caixas — pedido explícito do
  /// utilizador 2026-08-31: "if the boxes are white turn them
  /// greyish" (depois de remover a sombra dos cards, um card branco
  /// sobre o novo fundo branco liso ficava sem nenhum contraste).
  static const surface = Color(0xFFF0F0F0);

  /// Sombra exclusiva das barras de pesquisa — pedido explícito do
  /// utilizador 2026-08-31: "only leave the shadow on the
  /// searchbar(s)" (depois de [cardShadow]/[cardShadowStrong] ficarem
  /// vazias para todas as outras caixas). Mesmos valores que
  /// [cardShadow] tinha antes de ser esvaziada.
  static const searchBarShadow = [
    BoxShadow(color: Color(0x1F3F4A30), blurRadius: 24, offset: Offset(0, 10)),
  ];

  /// Sombra virada para cima — para elementos ancorados ao fundo do
  /// ecrã (FloatingBottomNav/PartnerBottomNav). [cardShadow] projeta
  /// para baixo (offset Y positivo), o que não dá nenhum contraste
  /// visível numa doca já encostada à borda inferior — a sombra ficava
  /// fora do ecrã. Pedido explícito do utilizador: "add a shadow to
  /// the navbar to add contrast" (depois de o fundo ter passado a
  /// branco liso, a doca branca deixou de se destacar sem isto).
  static const navBarShadow = [
    BoxShadow(color: Color(0x293F4A30), blurRadius: 20, offset: Offset(0, -6)),
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

    final baseText = GoogleFonts.robotoTextTheme(ThemeData.light().textTheme);

    return ThemeData(
      useMaterial3: true,
      fontFamily: GoogleFonts.roboto().fontFamily,
      colorScheme: colorScheme,
      scaffoldBackgroundColor: background,
      textTheme: baseText.copyWith(
        // Saudação (headline) — Roboto Black, forte e direta.
        headlineMedium: GoogleFonts.roboto(
          textStyle: baseText.headlineMedium?.copyWith(
            fontSize: 50,
            height: 40 / 34,
            fontWeight: FontWeight.w900,
            letterSpacing: -0.5,
            color: ink,
          ),
        ),
        headlineSmall: GoogleFonts.roboto(
          textStyle: baseText.headlineSmall?.copyWith(
            fontWeight: FontWeight.w900,
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
        titleTextStyle: GoogleFonts.roboto(
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
          backgroundColor: accentOliveDark,
          foregroundColor: Colors.white,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(14),
          ),
          textStyle: GoogleFonts.inter(
            fontSize: 16,
            height: 24 / 16,
            fontWeight: FontWeight.w500,
          ),
        ),
      ),
      filledButtonTheme: FilledButtonThemeData(
        style: FilledButton.styleFrom(
          minimumSize: const Size.fromHeight(54),
          backgroundColor: accentOliveDark,
          foregroundColor: Colors.white,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(14),
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
          foregroundColor: accentOliveDark,
          side: const BorderSide(color: accentOliveDark),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(14),
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
        color: surface,
        surfaceTintColor: Colors.transparent,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(24)),
      ),
      chipTheme: ChipThemeData(
        backgroundColor: surface,
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

  /// Título em Roboto Black para usar fora do textTheme, onde a cor tem
  /// de ser explícita (ex: texto sobre um gradiente). Mantém o nome
  /// histórico `displaySerif` (já usado em dezenas de ecrãs) mesmo não
  /// sendo serifado — só a família/peso mudaram.
  static TextStyle displaySerif({
    double fontSize = 28,
    FontWeight fontWeight = FontWeight.w900,
    Color? color,
  }) => GoogleFonts.roboto(
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
  static const green = Color(0xFFDDE5D3);
  static const yellow = Color(0xFFF7EACA);
  static const pink = Color(0xFFF3DEE0);
  static const gray = Color(0xFFEEF2E9);
  static const purple = Color(0xFFDCD9EA);

  static const muted = Color(0xFFEEF2E9);

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
  /// Verde-sálvia → branco, diagonal (creme antes, ver nota em
  /// [AppTheme]). Ecrãs de primeira impressão / emoção (boas-vindas,
  /// onboarding).
  static const hero = LinearGradient(
    begin: Alignment.topLeft,
    end: Alignment.bottomRight,
    colors: [Color(0xFFE6E7D5), Colors.white],
  );

  /// Branco sólido. Ecrãs de lista/dashboard.
  static const feed = LinearGradient(
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
    colors: [Colors.white, Colors.white],
  );

  /// Branco sólido. Ecrãs de formulário/detalhe.
  static const subtle = LinearGradient(
    begin: Alignment.topCenter,
    end: Alignment.bottomCenter,
    colors: [Colors.white, Colors.white],
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
