import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';

import '../../core/theme/app_theme.dart';
import 'snappy_tap.dart';

/// Peças dos ecrãs de início (canvas "Início 3–6"), copiadas do design:
/// fundo branco, voltar redondo à esquerda, título 28/34, campos de 54 px
/// em cinzento (verde com brilho quando focados) e botão verde em baixo.

const _fieldFill = Color(0xFFF2F0EB);
const _placeholder = Color(0xFF8F8B84);

class AuthPage extends StatelessWidget {
  final List<Widget> children;

  /// Fica em baixo (botão principal, "ou", contas sociais…).
  final List<Widget> footer;
  final bool showBack;

  const AuthPage({super.key, required this.children, this.footer = const [], this.showBack = true});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: LayoutBuilder(
          builder: (context, c) => SingleChildScrollView(
            padding: const EdgeInsets.fromLTRB(28, 12, 28, 34),
            child: ConstrainedBox(
              constraints: BoxConstraints(minHeight: c.maxHeight - 46),
              child: IntrinsicHeight(
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.stretch,
                  children: [
                    SizedBox(
                      height: 44,
                      child: Align(
                        alignment: Alignment.centerLeft,
                        child: showBack ? const AuthBackButton() : const SizedBox.shrink(),
                      ),
                    ),
                    ...children,
                    const Spacer(),
                    const SizedBox(height: 20),
                    ...footer,
                  ],
                ),
              ),
            ),
          ),
        ),
      ),
    );
  }
}

class AuthBackButton extends StatelessWidget {
  const AuthBackButton({super.key});

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      label: 'Voltar',
      child: SnappyTap(
        onTap: () => context.canPop() ? context.pop() : context.go('/welcome'),
        child: Container(
          width: 44,
          height: 44,
          decoration: const BoxDecoration(color: _fieldFill, shape: BoxShape.circle),
          child: const Icon(Icons.chevron_left_rounded, color: AppTheme.ink),
        ),
      ),
    );
  }
}

class AuthHeading extends StatelessWidget {
  final String title;
  final String subtitle;
  final IconData? icon;

  const AuthHeading({super.key, required this.title, required this.subtitle, this.icon});

  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        if (icon != null) ...[
          const SizedBox(height: 28),
          Container(
            width: 72,
            height: 72,
            decoration: const BoxDecoration(color: AppColors.gray, shape: BoxShape.circle),
            child: Icon(icon, size: 32, color: AppTheme.accentOliveDark),
          ),
          const SizedBox(height: 20),
        ] else
          const SizedBox(height: 28),
        Text(title, style: const TextStyle(fontSize: 28, height: 34 / 28, fontWeight: FontWeight.w700, color: AppTheme.ink)),
        const SizedBox(height: 8),
        Text(subtitle, style: const TextStyle(fontSize: 15, height: 22 / 15, fontWeight: FontWeight.w300, color: AppTheme.inkMuted)),
      ],
    );
  }
}

class AuthField extends StatefulWidget {
  final String label;
  final TextEditingController controller;
  final String? hint;
  final bool password;
  final TextInputType? keyboardType;
  final String? errorText;
  final ValueChanged<String>? onChanged;
  final double topGap;

  /// Para o gestor de passwords do telemóvel/browser oferecer guardar e
  /// preencher o login (a app nunca guarda o que se escreve).
  final Iterable<String>? autofillHints;

  const AuthField({
    super.key,
    required this.label,
    required this.controller,
    this.hint,
    this.password = false,
    this.keyboardType,
    this.errorText,
    this.onChanged,
    this.topGap = 16,
    this.autofillHints,
  });

  @override
  State<AuthField> createState() => _AuthFieldState();
}

class _AuthFieldState extends State<AuthField> {
  final _focus = FocusNode();
  bool _obscure = true;

  @override
  void initState() {
    super.initState();
    _focus.addListener(() => setState(() {}));
  }

  @override
  void dispose() {
    _focus.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final focused = _focus.hasFocus;
    final error = widget.errorText != null;
    return Padding(
      padding: EdgeInsets.only(top: widget.topGap),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: [
          Text(widget.label, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          const SizedBox(height: 8),
          AnimatedContainer(
            duration: const Duration(milliseconds: 160),
            height: 54,
            padding: const EdgeInsets.symmetric(horizontal: 16),
            decoration: BoxDecoration(
              color: focused ? Colors.white : _fieldFill,
              borderRadius: BorderRadius.circular(16),
              border: Border.all(
                color: error ? AppStatusColors.declined : (focused ? AppTheme.accentOliveDark : Colors.transparent),
                width: 1.5,
              ),
              boxShadow: focused ? const [BoxShadow(color: Color(0x1F5F7545), spreadRadius: 4)] : null,
            ),
            child: Row(
              children: [
                Expanded(
                  child: TextField(
                    controller: widget.controller,
                    focusNode: _focus,
                    obscureText: widget.password && _obscure,
                    keyboardType: widget.keyboardType,
                    onChanged: widget.onChanged,
                    autofillHints: widget.autofillHints,
                    style: const TextStyle(fontSize: 17, color: AppTheme.ink),
                    decoration: InputDecoration(
                      hintText: widget.hint,
                      hintStyle: const TextStyle(fontSize: 17, color: _placeholder),
                      filled: false,
                      isDense: true,
                      border: InputBorder.none,
                      enabledBorder: InputBorder.none,
                      focusedBorder: InputBorder.none,
                      contentPadding: EdgeInsets.zero,
                    ),
                  ),
                ),
                if (widget.password)
                  SnappyTap(
                    onTap: () => setState(() => _obscure = !_obscure),
                    child: Icon(
                      _obscure ? Icons.visibility_outlined : Icons.visibility_off_outlined,
                      size: 20,
                      color: AppTheme.inkMuted,
                    ),
                  ),
              ],
            ),
          ),
          if (error) ...[
            const SizedBox(height: 6),
            Text(widget.errorText!, style: const TextStyle(fontSize: 12, color: AppStatusColors.declined)),
          ],
        ],
      ),
    );
  }
}

class AuthPrimaryButton extends StatelessWidget {
  final String label;
  final VoidCallback? onPressed;
  final bool loading;

  const AuthPrimaryButton({super.key, required this.label, required this.onPressed, this.loading = false});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: 54,
      child: FilledButton(
        onPressed: loading ? null : onPressed,
        style: FilledButton.styleFrom(
          backgroundColor: AppTheme.accentOliveDark,
          disabledBackgroundColor: AppTheme.accentOliveDark.withValues(alpha: 0.45),
          foregroundColor: Colors.white,
          shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
          textStyle: const TextStyle(
            fontFamily: AppTheme.fontFamily,
            fontFamilyFallback: AppTheme.fontFamilyFallback,
            fontSize: 16,
            fontWeight: FontWeight.w700,
          ),
        ),
        child: loading
            ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2.5, color: Colors.white))
            : Text(label),
      ),
    );
  }
}

class AuthSocialButton extends StatelessWidget {
  final String label;
  final Widget badge;
  final VoidCallback? onPressed;

  const AuthSocialButton({super.key, required this.label, required this.badge, this.onPressed});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.only(top: 10),
      child: SizedBox(
        height: 52,
        child: OutlinedButton(
          onPressed: onPressed ?? () => ScaffoldMessenger.of(context).showSnackBar(
                const SnackBar(content: Text('Em breve — por agora usa o email.')),
              ),
          style: OutlinedButton.styleFrom(
            backgroundColor: Colors.white,
            foregroundColor: AppTheme.ink,
            side: const BorderSide(color: AppTheme.borderMuted),
            shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
            textStyle: const TextStyle(
              fontFamily: AppTheme.fontFamily,
              fontFamilyFallback: AppTheme.fontFamilyFallback,
              fontSize: 15,
              fontWeight: FontWeight.w700,
            ),
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Container(
                width: 22,
                height: 22,
                alignment: Alignment.center,
                decoration: const BoxDecoration(color: _fieldFill, shape: BoxShape.circle),
                child: badge,
              ),
              const SizedBox(width: 10),
              Text(label),
            ],
          ),
        ),
      ),
    );
  }
}

class AuthOrDivider extends StatelessWidget {
  const AuthOrDivider({super.key});

  @override
  Widget build(BuildContext context) {
    return const Padding(
      padding: EdgeInsets.only(top: 14),
      child: Row(
        children: [
          Expanded(child: Divider(color: AppTheme.borderMuted, height: 1)),
          Padding(
            padding: EdgeInsets.symmetric(horizontal: 10),
            child: Text('ou', style: TextStyle(fontSize: 12, color: AppTheme.inkMuted)),
          ),
          Expanded(child: Divider(color: AppTheme.borderMuted, height: 1)),
        ],
      ),
    );
  }
}
