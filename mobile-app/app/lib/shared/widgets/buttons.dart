import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import 'snappy_tap.dart';

/// Pílula escura com um botão circular branco de seta encaixado no
/// canto direito — o padrão de CTA usado nos cartões de destaque.
class ArrowCtaButton extends StatelessWidget {
  final String label;
  final VoidCallback? onTap;
  final bool expand;

  const ArrowCtaButton({
    super.key,
    required this.label,
    this.onTap,
    this.expand = false,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        height: 46,
        padding: const EdgeInsets.only(left: 20, right: 5),
        decoration: BoxDecoration(
          color: AppTheme.ink,
          borderRadius: BorderRadius.circular(999),
        ),
        child: Row(
          mainAxisSize: expand ? MainAxisSize.max : MainAxisSize.min,
          children: [
            if (expand)
              Expanded(
                child: Text(
                  label,
                  style: AppTypography.buttonLabel.copyWith(
                    color: Colors.white,
                  ),
                ),
              )
            else
              Text(
                label,
                style: AppTypography.buttonLabel.copyWith(color: Colors.white),
              ),
            const SizedBox(width: 14),
            Container(
              width: 36,
              height: 36,
              decoration: const BoxDecoration(
                color: Colors.white,
                shape: BoxShape.circle,
              ),
              child: const Icon(
                Icons.arrow_forward,
                color: AppTheme.ink,
                size: 18,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

/// Botão circular translúcido — o padrão de "voltar"/"favorito" usado
/// sobre os cartões de destaque na referência visual.
class CircleIconButton extends StatelessWidget {
  final IconData icon;
  final VoidCallback? onTap;
  final double size;
  final Color background;
  final Color foreground;
  final bool shadow;

  const CircleIconButton({
    super.key,
    required this.icon,
    this.onTap,
    this.size = 36,
    this.background = Colors.white,
    this.foreground = AppTheme.ink,
    this.shadow = true,
  });

  @override
  Widget build(BuildContext context) {
    return SnappyTap(
      onTap: onTap,
      child: Container(
        width: size,
        height: size,
        decoration: BoxDecoration(color: background, shape: BoxShape.circle),
        child: Icon(icon, size: size * 0.5, color: foreground),
      ),
    );
  }
}

/// Botão de voltar — só a seta, sem fundo/sombra, para usar como
/// `leading` de um AppBar ou no topo de um [PageHeader].
class CircleBackButton extends StatelessWidget {
  final VoidCallback? onTap;

  const CircleBackButton({super.key, this.onTap});

  // Ecrãs abertos a partir da navbar (com `context.go`) substituem a
  // pilha em vez de a empilhar — não há nada para o `Navigator` fazer
  // pop, e o botão de voltar ficava sem efeito nenhum. Quando não há
  // nada para popular, volta à home em vez de ficar sem fazer nada.
  void _handleBack(BuildContext context) {
    if (Navigator.of(context).canPop()) {
      Navigator.of(context).pop();
    } else {
      context.go('/home');
    }
  }

  @override
  Widget build(BuildContext context) {
    // Alinhamento à esquerda (em vez do centro por omissão) para o
    // glifo da seta ficar rente à margem do ecrã, tal como o resto do
    // conteúdo — a caixa de toque continua 46px, só cresce para a
    // direita, sem empurrar o desenho da seta para dentro.
    return IconButton(
      onPressed: onTap ?? () => _handleBack(context),
      icon: const Icon(Icons.arrow_back, color: AppTheme.ink),
      iconSize: 24,
      padding: EdgeInsets.zero,
      alignment: Alignment.centerLeft,
      constraints: const BoxConstraints(minWidth: 46, minHeight: 46),
      // Pedido explícito do utilizador (2026-09-04): sem o círculo de
      // hover/splash por omissão do Material — só a seta.
      style: IconButton.styleFrom(
        overlayColor: Colors.transparent,
        highlightColor: Colors.transparent,
      ),
    );
  }
}

class PrimaryButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final bool loading;

  const PrimaryButton({
    super.key,
    required this.label,
    required this.onPressed,
    this.loading = false,
  });

  @override
  Widget build(BuildContext context) {
    return ElevatedButton(
      onPressed: loading ? null : onPressed,
      child: loading
          ? const SizedBox(
              height: 20,
              width: 20,
              child: CircularProgressIndicator(strokeWidth: 2.5),
            )
          : Text(label),
    );
  }
}

/// Rodapé partilhado dos assistentes por passos (casal —
/// `onboarding_wizard_screen.dart` — e parceiro —
/// `partner_welcome_screen.dart`) — pedido explícito do utilizador:
/// "change the back button to a button next to the continuar button",
/// mais "rule 1: same locations same layout and architecture" — os
/// dois assistentes usavam o mesmo padrão (voltar na `AppBar`, sozinho),
/// por isso o novo padrão (voltar junto ao botão de continuar) vive
/// aqui, num único sítio, para não voltarem a divergir um do outro.
class WizardFooter extends StatelessWidget {
  /// null = primeiro passo do assistente, sem nada para onde voltar —
  /// esconde o botão de voltar em vez de o desativar.
  final VoidCallback? onBack;

  /// null = este assistente não tem "Saltar" (ex: parceiro, onde quase
  /// tudo é obrigatório).
  final VoidCallback? onSkip;

  /// Botão de continuar/concluir — cada assistente mantém o seu próprio
  /// (`PrimaryButton` no parceiro, `ArrowCtaButton` no casal), só a
  /// disposição à volta dele é partilhada.
  final Widget continueButton;

  const WizardFooter({
    super.key,
    this.onBack,
    this.onSkip,
    required this.continueButton,
  });

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 16),
      child: Row(
        children: [
          // O Spacer só existe para empurrar o grupo Voltar+Continuar
          // para a direita quando há Saltar à esquerda — sem Saltar
          // (parceiro), entraria em conflito com um `continueButton`
          // [Expanded] a disputar o mesmo espaço livre.
          if (onSkip != null) ...[
            TextButton(
              style: TextButton.styleFrom(foregroundColor: AppTheme.inkMuted),
              onPressed: onSkip,
              child: const Text('Saltar'),
            ),
            const Spacer(),
          ],
          if (onBack != null) ...[
            CircleBackButton(onTap: onBack),
            const SizedBox(width: 12),
          ],
          continueButton,
        ],
      ),
    );
  }
}

class SocialLoginButton extends StatelessWidget {
  final String label;
  final IconData icon;
  final VoidCallback? onPressed;

  const SocialLoginButton({
    super.key,
    required this.label,
    required this.icon,
    this.onPressed,
  });

  @override
  Widget build(BuildContext context) {
    return OutlinedButton.icon(
      onPressed: onPressed,
      icon: Icon(icon),
      label: Text(label),
      style: OutlinedButton.styleFrom(minimumSize: const Size.fromHeight(52)),
    );
  }
}
