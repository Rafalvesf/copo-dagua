import 'package:flutter/material.dart';

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
        borderRadius: BorderRadius.circular(10),
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
      color: colorScheme.tertiaryContainer,
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
