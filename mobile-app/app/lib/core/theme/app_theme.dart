import 'package:flutter/material.dart';

/// Implementação executável do design system documentado em
/// mobile-app/shared/design-system.md — fundo branco (creme quente
/// antes, pedido explícito do utilizador 2026-08-31: "make the bg
/// white on all pages instead of that cream") com acentos
/// verde-oliva, cards cinzento-claro sem sombra, tipografia Roboto
/// Black para títulos e Roboto Regular para o resto. Escala definida
/// para um ecrã de referência de 375px.
class AppTheme {
  static Color get seedColor => accentOliveDark;

  /// Família da app — Louis George Café embutida em
  /// `assets/fonts/louis_george_cafe/` (Light 300, Regular 400, Bold 700,
  /// cada um com itálico). Pesos intermédios pedidos no código (500, 600,
  /// 800, 900) resolvem para o peso declarado mais próximo. A Roboto fica
  /// como fallback para os poucos glifos que a Louis George Café não tem.
  ///
  /// Papéis: Bold → títulos, nomes, números e botões; Regular → texto
  /// corrente; Light → texto explicativo ≥14px em [inkMuted]; Italic →
  /// citações; Bold Italic → o nome do casal no cartão do Casamento.
  static const fontFamily = 'LouisGeorgeCafe';
  static const fontFamilyFallback = ['Roboto'];

  static const background = Colors.white;
  static const ink = Color(0xFF171713);

  /// Texto secundário (legendas, descrições). Cinzento quente — antes era
  /// igual a [ink], o que deixava a app com um só nível de texto.
  static const inkMuted = Color(0xFF57534E);

  /// Cinza escuro neutro — só para o estado inativo dos ícones da
  /// navbar (Home/FloatingBottomNav/PartnerBottomNav), distinto do
  /// preto sólido usado no resto do texto.
  static const navIconMuted = Color(0xFF57534E);

  /// Verde principal da marca — cor única de acento (botões primários,
  /// estados ativos, barras de progresso). [accentOlive] e
  /// [accentOliveDark] eram dois tons; unificados num só verde.
  static const brandGreen = Color(0xFF5F7545);

  /// Cor de acento atual: o verde da marca, ou a cor escolhida pelo
  /// organizador em "Aparência do menu" (pedido 2026-10-18: "quando mudas
  /// a cor muda a cor da app toda"). Mudada por `CopoDaguaApp`.
  static Color accentOliveDark = brandGreen;
  static Color get accentOlive => accentOliveDark;

  /// Cor de contorno neutra e quente, partilhada por bordas subtis
  /// (chips, botões outline, separadores).
  static const borderMuted = Color(0xFFE6E0D2);

  /// Fundo geral atrás da moldura de telemóvel, em janelas largas.
  static const outerBackdrop = Color(0xFFEAE3D1);

  /// Margem lateral partilhada por todos os ecrãs principais — o
  /// conteúdo e a navbar flutuante alinham-se a esta mesma largura.
  static const screenMargin = 28.0;

  /// Pedido explícito do utilizador 2026-08-31: "remove shadows from
  /// boxes" — cards não têm sombra; a separação do fundo branco vem da
  /// cor [surface] (cinzento claro), não de um halo.
  ///
  /// Superfície cinzenta clara para cards/caixas — pedido explícito do
  /// utilizador 2026-08-31: "if the boxes are white turn them
  /// greyish" (depois de remover a sombra dos cards, um card branco
  /// sobre o novo fundo branco liso ficava sem nenhum contraste).
  static const surface = Color(0xFFF2F0EB);

  /// Sombra exclusiva das barras de pesquisa — pedido explícito do
  /// utilizador 2026-08-31: "only leave the shadow on the
  /// searchbar(s)" (todas as outras caixas ficaram sem sombra).
  static const searchBarShadow = [
    BoxShadow(color: Color(0x1F3F4A30), blurRadius: 24, offset: Offset(0, 10)),
  ];

  /// Sombra virada para cima — para elementos ancorados ao fundo do
  /// ecrã (FloatingBottomNav/PartnerBottomNav). Uma sombra normal projeta
  /// para baixo (offset Y positivo), o que não dá nenhum contraste
  /// visível numa doca já encostada à borda inferior — a sombra ficava
  /// fora do ecrã. Pedido explícito do utilizador: "add a shadow to
  /// the navbar to add contrast" (depois de o fundo ter passado a
  /// branco liso, a doca branca deixou de se destacar sem isto).
  static const navBarShadow = [
    BoxShadow(color: Color(0x293F4A30), blurRadius: 20, offset: Offset(0, -6)),
  ];

  static ThemeData get light {
    final colorScheme = ColorScheme.fromSeed(
      seedColor: seedColor,
      brightness: Brightness.light,
    ).copyWith(surface: background);

    final baseText = ThemeData.light().textTheme.apply(
      fontFamily: fontFamily,
      fontFamilyFallback: fontFamilyFallback,
    );
    final buttonText = AppTypography.buttonLabel.copyWith(
      fontFamily: fontFamily,
      fontFamilyFallback: fontFamilyFallback,
    );

    return ThemeData(
      useMaterial3: true,
      fontFamily: fontFamily,
      fontFamilyFallback: fontFamilyFallback,
      colorScheme: colorScheme,
      scaffoldBackgroundColor: background,
      textTheme: baseText.copyWith(
        // Saudação (headline) — Roboto Black, forte e direta.
        headlineMedium: baseText.headlineMedium?.copyWith(
          fontSize: AppFontSize.hero,
          height: 40 / 34,
          fontWeight: FontWeight.w900,
          letterSpacing: 0,
          color: ink,
        ),
        headlineSmall: baseText.headlineSmall?.copyWith(
          fontWeight: FontWeight.w900,
          color: ink,
          height: 1.15,
        ),
        // Título do card principal
        titleLarge: baseText.titleLarge?.copyWith(
          fontSize: AppFontSize.h3,
          height: 28 / 22,
          fontWeight: FontWeight.w600,
          letterSpacing: 0,
          color: ink,
        ),
        // Títulos dos módulos
        titleMedium: baseText.titleMedium?.copyWith(
          fontSize: AppFontSize.xl,
          height: 24 / 18,
          fontWeight: FontWeight.w600,
          letterSpacing: 0,
          color: ink,
        ),
        bodyLarge: baseText.bodyLarge?.copyWith(letterSpacing: 0, color: ink),
        // Subtítulo do card / descrições dos módulos
        bodyMedium: baseText.bodyMedium?.copyWith(
          fontSize: AppFontSize.base,
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
          fontSize: AppFontSize.lg,
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
        titleTextStyle: const TextStyle(
          fontFamily: fontFamily,
          fontFamilyFallback: fontFamilyFallback,
          color: ink,
          fontSize: AppFontSize.h3,
          height: 28 / 22,
          fontWeight: FontWeight.w600,
        ),
      ),
      // Campos, diálogos, folhas e avisos no estilo novo em toda a app —
      // revisão 2026-10-17: muitas folhas e diálogos abertos por botões
      // ainda tinham o aspeto Material por omissão.
      inputDecorationTheme: InputDecorationTheme(
        filled: true,
        fillColor: surface,
        hintStyle: const TextStyle(color: Color(0xFF8F8B84)),
        labelStyle: const TextStyle(color: inkMuted),
        floatingLabelStyle: TextStyle(color: accentOliveDark, fontWeight: FontWeight.w700),
        border: OutlineInputBorder(
          borderRadius: BorderRadius.circular(AppRadius.lg),
          borderSide: BorderSide.none,
        ),
        enabledBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(AppRadius.lg),
          borderSide: BorderSide.none,
        ),
        focusedBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(AppRadius.lg),
          borderSide: BorderSide(color: accentOliveDark, width: 1.5),
        ),
        errorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(AppRadius.lg),
          borderSide: const BorderSide(color: Color(0xFFB4232C)),
        ),
        focusedErrorBorder: OutlineInputBorder(
          borderRadius: BorderRadius.circular(AppRadius.lg),
          borderSide: const BorderSide(color: Color(0xFFB4232C), width: 1.5),
        ),
        contentPadding: const EdgeInsets.symmetric(
          horizontal: 18,
          vertical: 16,
        ),
      ),
      dialogTheme: DialogThemeData(
        backgroundColor: Colors.white,
        surfaceTintColor: Colors.transparent,
        elevation: 0,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
        titleTextStyle: const TextStyle(
          fontFamily: fontFamily,
          fontFamilyFallback: fontFamilyFallback,
          fontSize: AppFontSize.xl,
          fontWeight: FontWeight.w700,
          color: ink,
        ),
        contentTextStyle: const TextStyle(
          fontFamily: fontFamily,
          fontFamilyFallback: fontFamilyFallback,
          fontSize: AppFontSize.base,
          height: 1.45,
          color: inkMuted,
        ),
        actionsPadding: const EdgeInsets.fromLTRB(20, 0, 20, 18),
      ),
      bottomSheetTheme: const BottomSheetThemeData(
        backgroundColor: Colors.white,
        surfaceTintColor: Colors.transparent,
        modalBackgroundColor: Colors.white,
        elevation: 0,
        showDragHandle: false,
        dragHandleColor: borderMuted,
        dragHandleSize: Size(40, 4),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.vertical(top: Radius.circular(28))),
      ),
      textButtonTheme: TextButtonThemeData(
        style: TextButton.styleFrom(
          foregroundColor: accentOliveDark,
          textStyle: const TextStyle(
            fontFamily: fontFamily,
            fontFamilyFallback: fontFamilyFallback,
            fontSize: AppFontSize.base,
            fontWeight: FontWeight.w700,
          ),
        ),
      ),
      snackBarTheme: SnackBarThemeData(
        behavior: SnackBarBehavior.floating,
        backgroundColor: ink,
        contentTextStyle: const TextStyle(
          fontFamily: fontFamily,
          fontFamilyFallback: fontFamilyFallback,
          fontSize: AppFontSize.base,
          color: Colors.white,
        ),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(AppRadius.lg)),
      ),
      listTileTheme: const ListTileThemeData(
        iconColor: inkMuted,
        contentPadding: EdgeInsets.symmetric(horizontal: 24),
        titleTextStyle: TextStyle(
          fontFamily: fontFamily,
          fontFamilyFallback: fontFamilyFallback,
          fontSize: AppFontSize.base + 1,
          fontWeight: FontWeight.w700,
          color: ink,
        ),
        subtitleTextStyle: TextStyle(
          fontFamily: fontFamily,
          fontFamilyFallback: fontFamilyFallback,
          fontSize: AppFontSize.sm,
          color: inkMuted,
        ),
      ),
      switchTheme: SwitchThemeData(
        thumbColor: WidgetStateProperty.resolveWith((s) => Colors.white),
        trackColor: WidgetStateProperty.resolveWith(
          (s) => s.contains(WidgetState.selected) ? accentOliveDark : const Color(0xFFD9D4C9),
        ),
        trackOutlineColor: WidgetStateProperty.all(Colors.transparent),
      ),
      checkboxTheme: CheckboxThemeData(
        fillColor: WidgetStateProperty.resolveWith(
          (s) => s.contains(WidgetState.selected) ? accentOliveDark : Colors.transparent,
        ),
        side: const BorderSide(color: Color(0xFFCFC8B8), width: 1.5),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(6)),
      ),
      popupMenuTheme: PopupMenuThemeData(
        color: Colors.white,
        surfaceTintColor: Colors.transparent,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(AppRadius.lg)),
        textStyle: const TextStyle(
          fontFamily: fontFamily,
          fontFamilyFallback: fontFamilyFallback,
          fontSize: AppFontSize.base,
          color: ink,
        ),
      ),
      datePickerTheme: DatePickerThemeData(
        backgroundColor: Colors.white,
        surfaceTintColor: Colors.transparent,
        headerBackgroundColor: accentOliveDark,
        headerForegroundColor: Colors.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
      ),
      timePickerTheme: TimePickerThemeData(
        backgroundColor: Colors.white,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(28)),
      ),
      elevatedButtonTheme: ElevatedButtonThemeData(
        style: ElevatedButton.styleFrom(
          minimumSize: const Size.fromHeight(54),
          backgroundColor: accentOliveDark,
          foregroundColor: Colors.white,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(AppRadius.md),
          ),
          textStyle: buttonText,
        ),
      ),
      filledButtonTheme: FilledButtonThemeData(
        style: FilledButton.styleFrom(
          minimumSize: const Size.fromHeight(54),
          backgroundColor: accentOliveDark,
          foregroundColor: Colors.white,
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(AppRadius.md),
          ),
          textStyle: buttonText,
        ),
      ),
      outlinedButtonTheme: OutlinedButtonThemeData(
        style: OutlinedButton.styleFrom(
          minimumSize: const Size.fromHeight(54),
          foregroundColor: accentOliveDark,
          side: BorderSide(color: accentOliveDark),
          shape: RoundedRectangleBorder(
            borderRadius: BorderRadius.circular(AppRadius.md),
          ),
          textStyle: buttonText,
        ),
      ),
      cardTheme: CardThemeData(
        elevation: 0,
        color: surface,
        surfaceTintColor: Colors.transparent,
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(AppRadius.xl)),
      ),
      // Spinners (52 `CircularProgressIndicator` na app) no verde da
      // marca em vez do tom derivado do seed pelo ColorScheme.
      progressIndicatorTheme: ProgressIndicatorThemeData(
        color: accentOliveDark,
        linearTrackColor: borderMuted,
      ),
      chipTheme: ChipThemeData(
        backgroundColor: surface,
        selectedColor: AppColors.green,
        side: const BorderSide(color: borderMuted),
        shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(AppRadius.pill)),
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
    fontSize: AppFontSize.h3,
    height: 28 / 22,
    fontWeight: FontWeight.w600,
  );
  static const cardSubtitle = TextStyle(
    fontSize: AppFontSize.base,
    height: 20 / 14,
    fontWeight: FontWeight.w400,
  );
  static const buttonLabel = TextStyle(
    fontSize: AppFontSize.lg,
    height: 24 / 16,
    fontWeight: FontWeight.w700,
  );
  static const moduleTitle = TextStyle(
    fontSize: AppFontSize.xl,
    height: 24 / 18,
    fontWeight: FontWeight.w600,
  );
  static const moduleDescription = TextStyle(
    fontSize: AppFontSize.base,
    height: 20 / 14,
    fontWeight: FontWeight.w400,
  );
  static const iconSize = 24.0;

  /// Título em Roboto Black para usar fora do textTheme, onde a cor tem
  /// de ser explícita (ex: texto sobre um gradiente). Mantém o nome
  /// histórico `displaySerif` (já usado em dezenas de ecrãs) mesmo não
  /// sendo serifado — só a família/peso mudaram.
  static TextStyle displaySerif({
    double fontSize = AppFontSize.h1,
    FontWeight fontWeight = FontWeight.w900,
    Color? color,
  }) => TextStyle(
    fontFamily: AppTheme.fontFamily,
    fontFamilyFallback: AppTheme.fontFamilyFallback,
    fontSize: fontSize,
    height: 1.2,
    fontWeight: fontWeight,
    color: color,
  );
}

/// Escala tipográfica — os únicos tamanhos de letra permitidos na app.
/// Substitui os ~25 valores soltos que existiam (12.5, 13.5, 11.5, …):
/// cada meio-ponto foi arredondado para baixo, para nunca aumentar texto
/// em sítios apertados (badges, navbar, chips). Um tamanho novo entra
/// aqui, nunca como literal num ecrã.
class AppFontSize {
  static const double xxxs = 9; // micro-labels (navbar, avatares agrupados)
  static const double xxs = 10;
  static const double xs = 11; // badges, meta-info
  static const double sm = 12;
  static const double md = 13; // texto secundário
  static const double base = 14; // corpo
  static const double lg = 16; // nomes, botões
  static const double xl = 18; // títulos de módulo
  static const double xxl = 20;
  static const double h3 = 22; // título de card/ecrã
  static const double h2 = 24;
  static const double h1 = 28;
  static const double display = 34;
  static const double displayLg = 42;
  static const double hero = 50; // saudação (headlineMedium)
}

/// Raios de canto — os únicos valores de `BorderRadius.circular` a usar.
/// Grelha de 4px que consolida os 14 valores soltos anteriores (10, 11,
/// 12, 13, 14, 16, 18, 20, 22, …): 10–13 → [sm], 14 → [md], 18 → [lg],
/// 22 → [xl].
class AppRadius {
  static const double xs = 4; // barras de progresso, indicadores finos
  static const double sm = 12; // chips pequenos, thumbnails, badges
  static const double md = 16; // botões, campos compactos, tiles
  static const double lg = 20; // inputs, cards secundários
  static const double xl = 24; // cards principais
  static const double xxl = 28; // sheets, cards hero
  static const double pill = 999; // pílulas e círculos
}

/// Paleta extraída dos mockups de referência — superfícies pastel
/// quentes para os cartões de destaque, pensadas para funcionar sobre
/// os novos fundos em gradiente.
class AppColors {
  /// Areia — era azul (`#DCE3EF`); trocado no redesign 2026-10 para
  /// manter só pastéis quentes. Nome mantido para não mexer nos usos.
  static const blue = Color(0xFFECE7DC);
  static const green = Color(0xFFDDE5D3);
  static const yellow = Color(0xFFF7EACA);
  static const pink = Color(0xFFF3DEE0);
  static const gray = Color(0xFFEEF2E9);
  /// Pêssego — era lilás (`#DCD9EA`), ver nota em [blue].
  static const purple = Color(0xFFF4E1D2);

  static const muted = Color(0xFFEEF2E9);

  /// Verde-oliva escuro de destaque forte — usar com moderação (cards
  /// de destaque, progresso importante, botões primários, estado ativo
  /// da navbar), nunca como cor de base. Hierarquia: [green] (normal) →
  /// [AppStatusColors.confirmed] (ativo/confirmado) → [greenDark]
  /// (destaque forte). Alias de [AppTheme.accentOliveDark].
  static Color get greenDark => AppTheme.accentOliveDark;
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
    // Branco, como em todos os ecrãs do canvas (pedido 2026-10-17:
    // "colocaste um gradiente no fundo" — os modelos são brancos).
    colors: [Colors.white, Colors.white],
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
  static const confirmed = Color(0xFF3F8A5A);
  static const pending = Color(0xFFF2A01B);
  static const declined = Color(0xFFC8553D);
}
