import 'package:flutter/material.dart';

import '../../core/theme/app_theme.dart';
import 'mascot.dart';

class ErrorBanner extends StatelessWidget {
  final String message;

  const ErrorBanner({super.key, required this.message});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.all(12),
      margin: const EdgeInsets.only(bottom: 12),
      decoration: BoxDecoration(
        color: colorScheme.errorContainer,
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      child: Row(
        children: [
          Icon(Icons.error_outline, color: colorScheme.onErrorContainer, size: 20),
          const SizedBox(width: 8),
          Expanded(
            child: Text(message, style: TextStyle(color: colorScheme.onErrorContainer)),
          ),
        ],
      ),
    );
  }
}

class PersistentWarningBanner extends StatelessWidget {
  final String message;
  final String? actionLabel;
  final VoidCallback? onAction;

  const PersistentWarningBanner({super.key, required this.message, this.actionLabel, this.onAction});

  @override
  Widget build(BuildContext context) {
    final colorScheme = Theme.of(context).colorScheme;
    return Container(
      width: double.infinity,
      decoration: BoxDecoration(
        color: colorScheme.tertiaryContainer,
        borderRadius: BorderRadius.circular(AppRadius.lg),
      ),
      padding: const EdgeInsets.symmetric(horizontal: 16, vertical: 10),
      child: Row(
        children: [
          Icon(Icons.info_outline, color: colorScheme.onTertiaryContainer, size: 18),
          const SizedBox(width: 8),
          Expanded(child: Text(message, style: TextStyle(color: colorScheme.onTertiaryContainer))),
          if (actionLabel != null)
            TextButton(onPressed: onAction, child: Text(actionLabel!)),
        ],
      ),
    );
  }
}

/// Estado de erro de um `AsyncValue.when(error: ...)` — substitui os
/// `Center(child: Text('Não foi possível carregar.'))` soltos que havia
/// em cada ecrã. Mesmo aspeto em toda a app e, quando há [onRetry]
/// (normalmente `() => ref.invalidate(<provider>)`), um botão para
/// tentar de novo em vez de obrigar a sair e voltar ao ecrã.
class AsyncErrorView extends StatelessWidget {
  final String message;
  final VoidCallback? onRetry;

  const AsyncErrorView({
    super.key,
    this.message = 'Não foi possível carregar.',
    this.onRetry,
  });

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 32),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            const Icon(
              Icons.cloud_off_outlined,
              size: 32,
              color: AppTheme.navIconMuted,
            ),
            const SizedBox(height: 12),
            Text(
              message,
              textAlign: TextAlign.center,
              style: const TextStyle(
                fontSize: AppFontSize.base,
                color: AppTheme.ink,
              ),
            ),
            if (onRetry != null) ...[
              const SizedBox(height: 8),
              TextButton.icon(
                onPressed: onRetry,
                icon: const Icon(Icons.refresh, size: 18),
                label: const Text('Tentar de novo'),
                style: TextButton.styleFrom(
                  foregroundColor: AppTheme.accentOliveDark,
                ),
              ),
            ],
          ],
        ),
      ),
    );
  }
}

/// Estado vazio de uma lista/ecrã inteiro — ícone + mensagem centrados,
/// mesmo ritmo visual que [AsyncErrorView]. Para caixas de altura fixa
/// (ex: uma secção pequena dentro de um card) continua a usar-se só um
/// `Text`, que é o que cabe.
class EmptyStateView extends StatelessWidget {
  final String message;
  final IconData icon;

  const EmptyStateView({
    super.key,
    required this.message,
    this.icon = Icons.inbox_outlined,
  });

  @override
  Widget build(BuildContext context) {
    return Center(
      child: Padding(
        padding: const EdgeInsets.symmetric(
          horizontal: AppTheme.screenMargin,
          vertical: 32,
        ),
        child: Column(
          mainAxisSize: MainAxisSize.min,
          children: [
            Icon(icon, size: 32, color: AppTheme.navIconMuted),
            const SizedBox(height: 12),
            Text(
              message,
              textAlign: TextAlign.center,
              style: const TextStyle(
                fontSize: AppFontSize.base,
                color: AppTheme.inkMuted,
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class LoadingOverlay extends StatelessWidget {
  final bool visible;
  final Widget child;

  const LoadingOverlay({super.key, required this.visible, required this.child});

  @override
  Widget build(BuildContext context) {
    return Stack(
      children: [
        child,
        if (visible)
          Positioned.fill(
            child: Container(
              color: Colors.black.withValues(alpha: 0.15),
              child: const Center(child: CircularProgressIndicator()),
            ),
          ),
      ],
    );
  }
}

/// Estado vazio de primeira utilização (redesign 2026-10): ilustração da
/// app, título em Bold, explicação em Light e até duas ações. Usado quando
/// uma lista inteira ainda não tem nada (0 convidados, sem orçamento, sem
/// espaço, sem conversas) — para estados vazios pequenos dentro de um
/// cartão continua a usar-se [EmptyStateView] ou um `Text`.
class IllustratedEmptyState extends StatelessWidget {
  final String? imageAsset;

  /// Mascote "o Tchin e o Tchin" no lugar da ilustração (pedido do
  /// utilizador, 2026-10-17: "substitui os icons em convidados,
  /// orçamentos, lugares e mensagens").
  final MascotPose? mascot;
  final String title;
  final String message;
  final String? primaryLabel;
  final VoidCallback? onPrimary;
  final String? secondaryLabel;
  final VoidCallback? onSecondary;
  final double imageSize;
  final bool circularImage;

  const IllustratedEmptyState({
    super.key,
    this.imageAsset,
    this.mascot,
    required this.title,
    required this.message,
    this.primaryLabel,
    this.onPrimary,
    this.secondaryLabel,
    this.onSecondary,
    this.imageSize = 168,
    this.circularImage = true,
  });

  @override
  Widget build(BuildContext context) {
    final Widget image = mascot != null
        ? TchinMascot(pose: mascot!, width: 220)
        : Image.asset(
            imageAsset!,
            width: imageSize,
            height: imageSize,
            fit: circularImage ? BoxFit.cover : BoxFit.contain,
          );
    return SingleChildScrollView(
      padding: const EdgeInsets.fromLTRB(
        AppTheme.screenMargin,
        32,
        AppTheme.screenMargin,
        140,
      ),
      child: Column(
        children: [
          circularImage && mascot == null ? ClipOval(child: image) : image,
          const SizedBox(height: 24),
          Text(
            title,
            textAlign: TextAlign.center,
            style: const TextStyle(
              fontSize: AppFontSize.h3,
              height: 28 / 22,
              fontWeight: FontWeight.w700,
              color: AppTheme.ink,
            ),
          ),
          const SizedBox(height: 8),
          ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 290),
            child: Text(
              message,
              textAlign: TextAlign.center,
              style: const TextStyle(
                fontSize: AppFontSize.base,
                height: 1.5,
                fontWeight: FontWeight.w300,
                color: AppTheme.inkMuted,
              ),
            ),
          ),
          if (primaryLabel != null) ...[
            const SizedBox(height: 28),
            SizedBox(
              width: double.infinity,
              child: FilledButton(
                onPressed: onPrimary,
                child: Text(primaryLabel!),
              ),
            ),
          ],
          if (secondaryLabel != null) ...[
            const SizedBox(height: 10),
            SizedBox(
              width: double.infinity,
              child: OutlinedButton(
                onPressed: onSecondary,
                child: Text(secondaryLabel!),
              ),
            ),
          ],
        ],
      ),
    );
  }
}
