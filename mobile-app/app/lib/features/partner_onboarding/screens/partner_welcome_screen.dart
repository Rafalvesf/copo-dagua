import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_mark.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/partner_bottom_nav.dart';
import '../../../shared/widgets/support_chat.dart';

/// Primeiro ecrã visto por uma conta de parceiro recém-registada —
/// substitui o placeholder textual anterior no ramo `UserRole.partner`
/// de `OnboardingWizardScreen`.
class PartnerWelcomeScreen extends ConsumerStatefulWidget {
  const PartnerWelcomeScreen({super.key});

  @override
  ConsumerState<PartnerWelcomeScreen> createState() =>
      _PartnerWelcomeScreenState();
}

class _PartnerWelcomeScreenState extends ConsumerState<PartnerWelcomeScreen> {
  bool _starting = false;

  @override
  Widget build(BuildContext context) {
    return GradientScaffold(
      background: AppBackground.hero,
      body: Stack(
        children: [
          SafeArea(
            bottom: false,
            child: Padding(
              padding: const EdgeInsets.fromLTRB(20, 12, 20, 168),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Row(
                    children: [
                      ChatIconButton(
                        onTap: () => openSupportScreen(context),
                      ),
                      const Spacer(),
                      const AccountSwitcherBadge(),
                    ],
                  ),
                  Expanded(
                    child: Center(
                      child: Column(
                        mainAxisSize: MainAxisSize.min,
                        crossAxisAlignment: CrossAxisAlignment.start,
                        children: [
                          Text(
                            'Olá, parceiro!',
                            style: AppTypography.displaySerif(
                              fontSize: 34,
                              color: AppTheme.ink,
                            ),
                          ),
                          const SizedBox(height: 14),
                          const Text(
                            'Estamos felizes por ter-te aqui.',
                            style: TextStyle(
                              fontSize: 16,
                              fontWeight: FontWeight.w700,
                              color: AppTheme.ink,
                            ),
                          ),
                          const SizedBox(height: 8),
                          Text(
                            'Junta-te a uma comunidade de parceiros incríveis '
                            'e faz parte de casamentos inesquecíveis.',
                            style: TextStyle(
                              fontSize: 14.5,
                              height: 1.4,
                              color: AppTheme.inkMuted,
                            ),
                          ),
                          const SizedBox(height: 32),
                          Center(
                            child: ClipOval(
                              child: Container(
                                width: 220,
                                height: 220,
                                color: Colors.white,
                                padding: const EdgeInsets.all(20),
                                child: Image.asset(
                                  'assets/images/nav_icon_bears.png',
                                  fit: BoxFit.contain,
                                ),
                              ),
                            ),
                          ),
                        ],
                      ),
                    ),
                  ),
                  PrimaryButton(
                    label: 'Começar',
                    loading: _starting,
                    onPressed: _starting
                        ? null
                        : () async {
                            setState(() => _starting = true);
                            await ref
                                .read(authControllerProvider.notifier)
                                .completePartnerOnboarding();
                          },
                  ),
                ],
              ),
            ),
          ),
          const Positioned(
            left: 0,
            right: 0,
            bottom: 0,
            child: PartnerBottomNav(current: PartnerTab.requests),
          ),
        ],
      ),
    );
  }
}
