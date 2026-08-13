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
    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        height: 46,
        padding: const EdgeInsets.only(left: 20, right: 5),
        decoration: BoxDecoration(
          color: AppTheme.ink,
          borderRadius: BorderRadius.circular(999),
          boxShadow: hovered ? AppTheme.cardShadowStrong : AppTheme.cardShadow,
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
    return SnappyTap.builder(
      onTap: onTap,
      builder: (context, hovered) => Container(
        width: size,
        height: size,
        decoration: BoxDecoration(
          color: background,
          shape: BoxShape.circle,
          boxShadow: !shadow
              ? null
              : hovered
              ? AppTheme.cardShadowStrong
              : AppTheme.cardShadow,
        ),
        child: Icon(icon, size: size * 0.5, color: foreground),
      ),
    );
  }
}

/// Botão circular de voltar, para usar como `leading` de um AppBar —
/// substitui a seta simples por omissão do Flutter.
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
    return Center(
      child: Padding(
        padding: const EdgeInsets.only(left: 12),
        child: CircleIconButton(
          icon: Icons.arrow_back,
          background: Colors.white,
          shadow: false,
          onTap: onTap ?? () => _handleBack(context),
        ),
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
