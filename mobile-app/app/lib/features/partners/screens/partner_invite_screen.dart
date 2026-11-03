import 'package:flutter/foundation.dart' show kIsWeb;
import 'package:copo_dagua_app/core/analytics/funnel.dart';
import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../core/models/models.dart';
import '../../../core/partners/partner_referrals.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/widgets/buttons.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/install_app_sheet.dart';
import '../../../shared/widgets/mascot.dart';
import '../../../shared/widgets/public_state.dart';

/// `/p/:code` — link de convite de um parceiro para os seus clientes
/// (migração 151). Público: sem sessão guarda o código e pede para criar
/// conta; com sessão regista logo o convite.
class PartnerInviteScreen extends ConsumerStatefulWidget {
  final String code;
  const PartnerInviteScreen({super.key, required this.code});

  @override
  ConsumerState<PartnerInviteScreen> createState() => _PartnerInviteScreenState();
}

class _PartnerInviteScreenState extends ConsumerState<PartnerInviteScreen> {
  PartnerReferralResult? _result;
  String? _error;
  bool _busy = false;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) => _handle());
  }

  Future<void> _handle() async {
    Funnel.track('partner_invite_open', ref: widget.code.toUpperCase());
    final auth = ref.read(authControllerProvider);
    if (auth.status != AuthStatus.active) {
      await savePendingPartnerReferral(widget.code);
      return;
    }
    if (auth.profile?.role == UserRole.partner) {
      setState(() => _error = 'Este link é para os clientes do parceiro. Entra com uma conta de cliente.');
      return;
    }
    setState(() => _busy = true);
    try {
      final r = await claimPartnerReferral(widget.code);
      if (!mounted) return;
      setState(() {
        _busy = false;
        _result = r;
      });
    } on PartnerReferralError catch (e) {
      if (!mounted) return;
      setState(() {
        _busy = false;
        _error = e.message;
      });
    }
  }

  String get _home => switch (ref.read(authControllerProvider).profile?.role) {
        UserRole.couple => '/home',
        UserRole.partner => '/partner-home',
        _ => '/eventos',
      };

  @override
  Widget build(BuildContext context) {
    final auth = ref.watch(authControllerProvider);
    final r = _result;
    Widget body;
    if (auth.status != AuthStatus.active) {
      body = PublicStateView(
        pose: MascotPose.wave,
        title: 'Foste convidado para a À Nossa!',
        message: 'Um parceiro convidou-te para organizares o teu evento na À Nossa!: orçamento, convidados, '
            'contratos e pagamentos seguros num só sítio. Cria conta (ou entra) e o convite fica ligado a ti.',
        actions: [
          PrimaryButton(label: 'Criar conta', onPressed: () => context.push('/role')),
          TextButton(onPressed: () => context.push('/login'), child: const Text('Já tenho conta')),
          if (kIsWeb)
            TextButton(onPressed: () => showInstallAppSheet(context), child: const Text('Instalar a app')),
        ],
      );
    } else if (_busy || (r == null && _error == null)) {
      body = const CircularProgressIndicator();
    } else if (_error != null) {
      body = PublicStateView(
        pose: MascotPose.sad,
        title: 'Não deu para abrir o convite',
        message: _error,
        actions: [PrimaryButton(label: 'Continuar', onPressed: () => context.go(_home))],
      );
    } else {
      body = PublicStateView(
        pose: MascotPose.clink,
        title: r!.valid ? 'Convite de ${r.businessName}' : 'Já estás ligado a ${r.businessName}',
        message: r.valid
            ? '${r.businessName} convidou-te para a À Nossa!. Faz as reservas e os pagamentos com eles pela app: '
                'fica tudo com contrato, recibo e pagamento protegido.'
            : 'Já tinhas falado com ${r.businessName} pela app — continua tudo como estava.',
        actions: [PrimaryButton(label: 'Continuar', onPressed: () => context.go(_home))],
      );
    }
    return GradientScaffold(
      background: AppBackground.subtle,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.all(24),
          child: Center(child: body),
        ),
      ),
    );
  }
}
