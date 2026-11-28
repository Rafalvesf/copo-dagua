import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import '../hero_icons.dart';
import 'estrela.dart';
import 'snappy_tap.dart';

/// Peças dos fluxos novos de boas-vindas, conta, criar evento e parceiro
/// (pranchetas «Fluxo novo», 2026-11-27). Cada ecrã tem um fundo de cor
/// suave, os traços do progresso em cima, o conteúdo, o título grande (54)
/// por baixo do conteúdo e o botão preto com a seta.

/// Fundos suaves dos ecrãs dos fluxos.
abstract final class FlowTint {
  static const green = Color(0xFFDCE8D3);
  static const yellow = Color(0xFFF7E6BF);
  static const terra = Color(0xFFF3D9CF);
  static const blue = Color(0xFFD9E3EF);
  static const plum = Color(0xFFE6DAE8);

  /// Branco translúcido (halo da estrela, caixas sobre o fundo de cor).
  static const halo = Color(0x8CFFFFFF);
  static const box = Color(0x99FFFFFF);
}

/// Traços do progresso: `count` traços de 4, os feitos a preto.
class FlowDashes extends StatelessWidget {
  final int count;
  final int on;
  const FlowDashes({super.key, required this.count, required this.on});

  @override
  Widget build(BuildContext context) => Row(children: [
        for (var k = 0; k < count; k++) ...[
          if (k > 0) const SizedBox(width: 6),
          Expanded(
            child: AnimatedContainer(
              duration: const Duration(milliseconds: 260),
              curve: Curves.easeOut,
              height: 4,
              decoration: BoxDecoration(
                color: k <= on ? AppTheme.ink : AppTheme.ink.withValues(alpha: 0.15),
                borderRadius: BorderRadius.circular(2),
              ),
            ),
          ),
        ],
      ]);
}

/// Círculo preto 44 com a seta branca (o voltar de toda a app, §2).
class FlowBackCircle extends StatelessWidget {
  final VoidCallback onTap;
  const FlowBackCircle({super.key, required this.onTap});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        semanticLabel: 'Voltar',
        child: Container(
          width: 44,
          height: 44,
          decoration: const BoxDecoration(color: AppTheme.ink, shape: BoxShape.circle),
          alignment: Alignment.center,
          child: const Icon(Hi.arrowLeft, size: 20, color: Colors.white),
        ),
      );
}

/// Texto que se toca (15, negrito, cinzento): «Saltar», «Voltar», «Fechar».
class FlowTextAction extends StatelessWidget {
  final String label;
  final VoidCallback? onTap;
  final Color color;
  const FlowTextAction(this.label, {super.key, this.onTap, this.color = AppTheme.inkMuted});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: onTap,
        child: Padding(
          padding: const EdgeInsets.symmetric(vertical: 12, horizontal: 2),
          child: Text(label, style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: color)),
        ),
      );
}

/// Botão principal dos fluxos: pílula preta 56, texto 17 à esquerda e o
/// círculo branco 40 com a seta à direita.
class FlowCta extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final bool loading;
  const FlowCta({super.key, required this.label, this.onPressed, this.loading = false});

  @override
  Widget build(BuildContext context) {
    final enabled = onPressed != null && !loading;
    return SnappyTap(
      onTap: enabled ? onPressed : null,
      semanticLabel: label,
      child: AnimatedOpacity(
        duration: const Duration(milliseconds: 150),
        opacity: onPressed == null && !loading ? 0.35 : 1,
        child: Container(
          height: 56,
          padding: const EdgeInsets.fromLTRB(24, 0, 8, 0),
          decoration: const ShapeDecoration(color: AppTheme.ink, shape: StadiumBorder()),
          child: Row(children: [
            Expanded(
              child: Text(label,
                  maxLines: 1,
                  overflow: TextOverflow.ellipsis,
                  style: const TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: Colors.white)),
            ),
            Container(
              width: 40,
              height: 40,
              decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
              alignment: Alignment.center,
              child: loading
                  ? const SizedBox(width: 18, height: 18, child: CircularProgressIndicator(strokeWidth: 2, color: AppTheme.ink))
                  : const Icon(Hi.chevronRight, size: 18, color: AppTheme.ink),
            ),
          ]),
        ),
      ),
    );
  }
}

/// Linha por baixo do botão: «Já tens conta? **Entrar**».
class FlowFooterLink extends StatelessWidget {
  final String? prefix;
  final String action;
  final VoidCallback? onTap;
  const FlowFooterLink({super.key, this.prefix, required this.action, this.onTap});

  @override
  Widget build(BuildContext context) => Center(
        child: SnappyTap(
          onTap: onTap,
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 6),
            child: Text.rich(
              TextSpan(children: [
                if (prefix != null) TextSpan(text: '$prefix '),
                TextSpan(text: action, style: const TextStyle(fontWeight: FontWeight.w700, color: AppTheme.ink)),
              ]),
              textAlign: TextAlign.center,
              style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w600, color: AppTheme.inkMuted),
            ),
          ),
        ),
      );
}

/// Nota pequena centrada (13, cinzento).
class FlowNote extends StatelessWidget {
  final String text;
  final TextAlign align;
  const FlowNote(this.text, {super.key, this.align = TextAlign.center});

  @override
  Widget build(BuildContext context) => Text(text,
      textAlign: align, style: const TextStyle(fontSize: 13, height: 1.4, fontWeight: FontWeight.w600, color: AppTheme.inkMuted));
}

/// Título grande dos fluxos (54, negrito, entrelinha curta — pedido
/// 2026-11-28: «aumenta a letra do título»). Em ecrãs estreitos desce com a
/// largura (14 %), nunca abaixo de 40.
class FlowTitle extends StatelessWidget {
  final String text;
  const FlowTitle(this.text, {super.key});

  @override
  Widget build(BuildContext context) {
    final size = (MediaQuery.sizeOf(context).width * 0.14).clamp(40.0, 54.0);
    return Text(text,
        style: TextStyle(fontSize: size, height: 1.0, letterSpacing: -1, fontWeight: FontWeight.w700, color: AppTheme.ink));
  }
}

/// Frase por baixo do título (17, cinzento).
class FlowBody extends StatelessWidget {
  final String text;
  const FlowBody(this.text, {super.key});

  @override
  Widget build(BuildContext context) => Text(text,
      style: const TextStyle(fontSize: 17, height: 1.35, fontWeight: FontWeight.w600, color: AppTheme.inkMuted));
}

/// Título de grupo em maiúsculas (12, espaçamento 2).
class FlowCaps extends StatelessWidget {
  final String text;
  const FlowCaps(this.text, {super.key});

  @override
  Widget build(BuildContext context) => Text(text.toUpperCase(),
      style: const TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted));
}

/// Rótulo + conteúdo, com 8 entre os dois.
class FlowBlock extends StatelessWidget {
  final String label;
  final Widget child;
  const FlowBlock({super.key, required this.label, required this.child});

  @override
  Widget build(BuildContext context) => Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: [
        FlowCaps(label),
        const SizedBox(height: 8),
        child,
      ]);
}

/// A estrela num círculo branco translúcido (o «herói» dos ecrãs).
class FlowStarHalo extends StatelessWidget {
  final Estrela reaction;
  final double size;
  const FlowStarHalo(this.reaction, {super.key, this.size = 270});

  @override
  Widget build(BuildContext context) => Container(
        width: size,
        height: size,
        decoration: const BoxDecoration(color: FlowTint.halo, shape: BoxShape.circle),
        alignment: Alignment.center,
        child: EstrelaMascot(reaction, size: size * 0.74),
      );
}

/// Página de um fluxo. Em cima os traços e a linha do topo (marca ou
/// voltar à esquerda, uma ação de texto à direita); depois o [content],
/// que ocupa o espaço livre; por baixo o título, a frase, o botão e o
/// rodapé. Faz scroll quando não cabe (ecrãs pequenos ou teclado aberto).
class FlowPage extends StatelessWidget {
  final Color tint;
  final int dashCount;
  final int dashOn;
  final VoidCallback? onBack;
  final String? trailingLabel;
  final VoidCallback? onTrailing;
  final Widget? content;

  /// `true`: o conteúdo fica ao centro do espaço livre (estrela, cartões).
  final bool centerContent;
  final String? title;
  final String? body;
  final Widget? cta;
  final Widget? footer;

  /// Texto do topo à esquerda quando não há voltar («Novo evento»).
  final String brand;

  const FlowPage({
    super.key,
    this.brand = 'À Nossa!',
    required this.tint,
    this.dashCount = 3,
    required this.dashOn,
    this.onBack,
    this.trailingLabel,
    this.onTrailing,
    this.content,
    this.centerContent = false,
    this.title,
    this.body,
    this.cta,
    this.footer,
  });

  @override
  Widget build(BuildContext context) {
    final top = Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      if (dashCount > 0) FlowDashes(count: dashCount, on: dashOn),
      const SizedBox(height: 16),
      SizedBox(
        height: 44,
        child: Row(children: [
          if (onBack != null)
            FlowBackCircle(onTap: onBack!)
          else
            Text(brand, style: const TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: AppTheme.ink)),
          const Spacer(),
          if (trailingLabel != null) FlowTextAction(trailingLabel!, onTap: onTrailing),
        ]),
      ),
    ]);
    final bottom = <Widget>[
      if (title != null) ...[const SizedBox(height: 16), FlowTitle(title!)],
      if (body != null) ...[const SizedBox(height: 16), FlowBody(body!)],
      if (cta != null) ...[const SizedBox(height: 22), cta!],
      if (footer != null) ...[const SizedBox(height: 10), footer!],
    ];
    return Scaffold(
      backgroundColor: tint,
      body: SafeArea(
        child: LayoutBuilder(
          builder: (context, box) => SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(22, 12, 22, 24),
            child: ConstrainedBox(
              constraints: BoxConstraints(minHeight: box.maxHeight - 36),
              child: IntrinsicHeight(
                child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
                  top,
                  const SizedBox(height: 16),
                  if (content != null)
                    Expanded(
                      child: centerContent
                          ? Center(child: content)
                          : Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [content!, const Spacer()]),
                    )
                  else
                    const Spacer(),
                  ...bottom,
                ]),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

/// Caixa de texto em pílula branca 56 (texto 17), com prefixo opcional
/// («@») e erro (linha vermelha 1,5 + ponto + frase 13).
class FlowField extends StatelessWidget {
  final TextEditingController controller;
  final String? hint;
  final String? prefix;
  final String? error;
  final String? okText;
  final bool obscure;
  final bool autofocus;
  final TextInputType? keyboardType;
  final Iterable<String>? autofillHints;
  final ValueChanged<String>? onChanged;
  final Widget? trailing;

  const FlowField({
    super.key,
    required this.controller,
    this.hint,
    this.prefix,
    this.error,
    this.okText,
    this.obscure = false,
    this.autofocus = false,
    this.keyboardType,
    this.autofillHints,
    this.onChanged,
    this.trailing,
  });

  @override
  Widget build(BuildContext context) {
    const red = Color(0xFFC8553D);
    const style = TextStyle(fontSize: 17, fontWeight: FontWeight.w600, color: AppTheme.ink);
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, mainAxisSize: MainAxisSize.min, children: [
      Container(
        height: 56,
        padding: const EdgeInsets.symmetric(horizontal: 20),
        decoration: ShapeDecoration(
          color: Colors.white,
          shape: StadiumBorder(side: error != null ? const BorderSide(color: red, width: 1.5) : BorderSide.none),
        ),
        child: Row(children: [
          if (prefix != null) Text(prefix!, style: style.copyWith(color: AppTheme.inkMuted)),
          Expanded(
            child: TextField(
              controller: controller,
              obscureText: obscure,
              autofocus: autofocus,
              keyboardType: keyboardType,
              autofillHints: autofillHints,
              onChanged: onChanged,
              cursorColor: AppTheme.ink,
              style: style,
              decoration: InputDecoration(
                isCollapsed: true,
                filled: false,
                border: InputBorder.none,
                enabledBorder: InputBorder.none,
                focusedBorder: InputBorder.none,
                hintText: hint,
                hintStyle: style.copyWith(color: AppTheme.inkMuted),
              ),
            ),
          ),
          ?trailing,
        ]),
      ),
      if (error != null) ...[
        const SizedBox(height: 8),
        Padding(
          padding: const EdgeInsets.only(left: 8),
          child: Row(children: [
            Container(width: 8, height: 8, decoration: const BoxDecoration(color: red, shape: BoxShape.circle)),
            const SizedBox(width: 8),
            Expanded(child: Text(error!, style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: red))),
          ]),
        ),
      ] else if (okText != null) ...[
        const SizedBox(height: 8),
        Padding(
          padding: const EdgeInsets.only(left: 8),
          child: Text('✓ $okText', style: const TextStyle(fontSize: 13, fontWeight: FontWeight.w700, color: Color(0xFF4F6B4A))),
        ),
      ],
    ]);
  }
}

/// Cartão de escolha grande (min. 96): ícone num círculo 52, título 19 e
/// o visto à direita; escolhido fica preto com o texto branco.
class FlowChoiceCard extends StatelessWidget {
  final String title;
  final String? subtitle;
  final IconData icon;
  final bool selected;
  final VoidCallback onTap;

  /// Visto à direita (o mockup «Como vais usar» já não o tem: a escolha
  /// vê-se só pelo cartão preto).
  final bool showCheck;
  const FlowChoiceCard({
    super.key,
    required this.title,
    this.subtitle,
    required this.icon,
    required this.selected,
    required this.onTap,
    this.showCheck = false,
  });

  @override
  Widget build(BuildContext context) {
    final fg = selected ? Colors.white : AppTheme.ink;
    return SnappyTap(
      onTap: onTap,
      semanticLabel: title,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 180),
        curve: Curves.easeOut,
        constraints: const BoxConstraints(minHeight: 96),
        padding: const EdgeInsets.all(18),
        decoration: ShapeDecoration(
          color: selected ? AppTheme.ink : Colors.white,
          shape: RoundedSuperellipseBorder(borderRadius: BorderRadius.circular(22)),
        ),
        child: Row(children: [
          Container(
            width: 52,
            height: 52,
            decoration: BoxDecoration(
              color: selected ? Colors.white.withValues(alpha: 0.15) : AppTheme.background,
              shape: BoxShape.circle,
            ),
            alignment: Alignment.center,
            child: Icon(icon, size: 24, color: fg),
          ),
          const SizedBox(width: 14),
          Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, mainAxisSize: MainAxisSize.min, children: [
              Text(title, style: TextStyle(fontSize: 19, height: 1.2, fontWeight: FontWeight.w700, color: fg)),
              if (subtitle != null) ...[
                const SizedBox(height: 4),
                Text(subtitle!,
                    style: TextStyle(
                        fontSize: 14,
                        height: 1.3,
                        fontWeight: FontWeight.w600,
                        color: selected ? Colors.white.withValues(alpha: 0.75) : AppTheme.inkMuted)),
              ],
            ]),
          ),
          if (showCheck) ...[
          const SizedBox(width: 10),
          Container(
            width: 28,
            height: 28,
            decoration: BoxDecoration(
              color: selected ? Colors.white : Colors.transparent,
              shape: BoxShape.circle,
              border: selected ? null : Border.all(color: const Color(0xFFCFCFCF), width: 2),
            ),
            alignment: Alignment.center,
            child: selected ? const Icon(Hi.check, size: 16, color: AppTheme.ink) : null,
          ),
          ],
        ]),
      ),
    );
  }
}

/// Caixa de confirmação em cima do fundo de cor (18 anos e termos).
class FlowCheckBox extends StatelessWidget {
  final bool value;
  final ValueChanged<bool> onChanged;
  final InlineSpan label;
  final bool error;
  const FlowCheckBox({super.key, required this.value, required this.onChanged, required this.label, this.error = false});

  @override
  Widget build(BuildContext context) => SnappyTap(
        onTap: () => onChanged(!value),
        child: Container(
          padding: const EdgeInsets.symmetric(horizontal: 14, vertical: 12),
          decoration: ShapeDecoration(
            color: FlowTint.box,
            shape: RoundedSuperellipseBorder(
              borderRadius: BorderRadius.circular(18),
              side: error ? const BorderSide(color: Color(0xFFC8553D), width: 1.5) : BorderSide.none,
            ),
          ),
          child: Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
            AnimatedContainer(
              duration: const Duration(milliseconds: 150),
              width: 24,
              height: 24,
              decoration: BoxDecoration(
                color: value ? AppTheme.ink : Colors.white,
                borderRadius: BorderRadius.circular(7),
                border: value ? null : Border.all(color: AppTheme.ink, width: 1.5),
              ),
              alignment: Alignment.center,
              child: value ? const Icon(Hi.check, size: 15, color: Colors.white) : null,
            ),
            const SizedBox(width: 12),
            Expanded(
              child: Text.rich(label,
                  style: const TextStyle(fontSize: 14, height: 1.35, fontWeight: FontWeight.w600, color: AppTheme.ink)),
            ),
          ]),
        ),
      );
}

/// Botões «Continuar com Apple» (preto) e «Continuar com Google» (branco).
class FlowSocialButton extends StatelessWidget {
  final bool apple;
  final VoidCallback? onPressed;
  final bool loading;
  const FlowSocialButton.apple({super.key, this.onPressed, this.loading = false}) : apple = true;
  const FlowSocialButton.google({super.key, this.onPressed, this.loading = false}) : apple = false;

  @override
  Widget build(BuildContext context) {
    final fg = apple ? Colors.white : AppTheme.ink;
    return SnappyTap(
      onTap: loading ? null : onPressed,
      semanticLabel: apple ? 'Continuar com Apple' : 'Continuar com Google',
      child: AnimatedOpacity(
        duration: const Duration(milliseconds: 150),
        opacity: onPressed == null ? 0.4 : 1,
        child: Container(
          height: 56,
          decoration: ShapeDecoration(color: apple ? AppTheme.ink : Colors.white, shape: const StadiumBorder()),
          alignment: Alignment.center,
          child: loading
              ? SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2, color: fg))
              : Row(mainAxisSize: MainAxisSize.min, children: [
                  if (apple)
                    const Icon(Icons.apple, size: 22, color: Colors.white)
                  else
                    const Text('G', style: TextStyle(fontSize: 19, fontWeight: FontWeight.w700, color: Color(0xFF4285F4))),
                  const SizedBox(width: 10),
                  Text(apple ? 'Continuar com Apple' : 'Continuar com Google',
                      style: TextStyle(fontSize: 17, fontWeight: FontWeight.w700, color: fg)),
                ]),
        ),
      ),
    );
  }
}

/// Grelha de botões em pílula 44, todos com a mesma largura (`cols` por
/// linha). Escolhido: preto com texto branco. Com [line], os não
/// escolhidos levam a linha preta 1,5 (regra das categorias, §6).
class FlowPillGrid extends StatelessWidget {
  final List<String> items;
  final Set<String> selected;
  final int cols;
  final bool line;
  final ValueChanged<String> onTap;
  const FlowPillGrid({
    super.key,
    required this.items,
    required this.selected,
    this.cols = 3,
    this.line = false,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) => LayoutBuilder(builder: (context, box) {
        const gap = 8.0;
        final w = (box.maxWidth - gap * (cols - 1)) / cols;
        return Wrap(spacing: gap, runSpacing: gap, children: [
          for (final t in items)
            SizedBox(
              width: w,
              child: SnappyTap(
                onTap: () => onTap(t),
                semanticLabel: t,
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 150),
                  height: 44,
                  alignment: Alignment.center,
                  padding: const EdgeInsets.symmetric(horizontal: 6),
                  decoration: ShapeDecoration(
                    color: selected.contains(t) ? AppTheme.ink : Colors.white,
                    shape: StadiumBorder(side: line ? const BorderSide(color: AppTheme.ink, width: 1.5) : BorderSide.none),
                  ),
                  child: Text(t,
                      maxLines: 1,
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.center,
                      style: TextStyle(
                          fontSize: 14, fontWeight: FontWeight.w700, color: selected.contains(t) ? Colors.white : AppTheme.ink)),
                ),
              ),
            ),
        ]);
      });
}
