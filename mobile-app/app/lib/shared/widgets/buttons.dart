import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';

/// Pílula escura com um botão circular branco de seta encaixado no
/// canto direito — o padrão de CTA usado nos cartões de destaque.
class ArrowCtaButton extends StatelessWidget {
  final String label;
  final VoidCallback? onTap;
  final bool expand;

  const ArrowCtaButton({super.key, required this.label, this.onTap, this.expand = false});

  @override
  Widget build(BuildContext context) {
    final content = Container(
      height: 46,
      padding: const EdgeInsets.only(left: 20, right: 5),
      decoration: BoxDecoration(color: AppTheme.ink, borderRadius: BorderRadius.circular(999)),
      child: Row(
        mainAxisSize: expand ? MainAxisSize.max : MainAxisSize.min,
        children: [
          if (expand)
            Expanded(
              child: Text(
                label,
                style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13),
              ),
            )
          else
            Text(label, style: const TextStyle(color: Colors.white, fontWeight: FontWeight.w700, fontSize: 13)),
          const SizedBox(width: 14),
          Container(
            width: 36,
            height: 36,
            decoration: const BoxDecoration(color: Colors.white, shape: BoxShape.circle),
            child: const Icon(Icons.arrow_forward, color: AppTheme.ink, size: 18),
          ),
        ],
      ),
    );

    return InkWell(
      borderRadius: BorderRadius.circular(999),
      onTap: onTap,
      child: content,
    );
  }
}

class PrimaryButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final bool loading;

  const PrimaryButton({super.key, required this.label, required this.onPressed, this.loading = false});

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

  const SocialLoginButton({super.key, required this.label, required this.icon, this.onPressed});

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
