import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:go_router/go_router.dart';
import 'package:supabase_flutter/supabase_flutter.dart' show PostgrestException;

import '../../../core/auth/auth_controller.dart';
import '../../../core/partner_profile/partner_completion.dart';
import '../../../core/partner_profile/partner_profile_controller.dart';
import '../../../core/theme/app_theme.dart';
import '../../../shared/hero_icons.dart';
import '../../../shared/widgets/app_progress.dart';
import '../../../shared/widgets/estrela.dart';
import '../../../shared/widgets/island_sheet.dart';
import '../../../shared/widgets/section_frame.dart';
import '../../../shared/widgets/snappy_tap.dart';
import '../../partner_onboarding/screens/partner_setup_steps.dart';

/// Início do parceiro antes de verificado (prancheta «Parceiro 5»,
/// 2026-11-27): o cartão «O teu perfil» com a percentagem e os passos, e a
/// moldura «Verificação» para pedir a verificação à equipa.
class PartnerProfileProgress extends ConsumerStatefulWidget {
  final PartnerCompletion completion;
  const PartnerProfileProgress({super.key, required this.completion});

  @override
  ConsumerState<PartnerProfileProgress> createState() => _PartnerProfileProgressState();
}

class _PartnerProfileProgressState extends ConsumerState<PartnerProfileProgress> {
  bool _sending = false;

  Future<void> _open(PartnerSetupTarget target) async {
    final route = switch (target) {
      PartnerSetupTarget.businessInfo => '/partner-business-info',
      PartnerSetupTarget.profile => '/partner-profile',
      PartnerSetupTarget.portfolio => '/partner-portfolio',
      PartnerSetupTarget.pricing => '/partner-pricing',
      PartnerSetupTarget.payout => '/partner-payments/setup',
    };
    if (target == PartnerSetupTarget.payout && !widget.completion.taxId) {
      // O NIF vai para `partner_verification.tax_id` (o servidor exige-o);
      // o IBAN fica na Stripe, na página a seguir.
      final saved = await showIslandSheet<bool>(context: context, isScrollControlled: true, builder: (_) => const _TaxIdSheet());
      if (saved != true || !mounted) {
        ref.invalidate(partnerCompletionProvider);
        return;
      }
    }
    if (!mounted) return;
    await context.push(route);
    ref.invalidate(partnerCompletionProvider);
  }

  Future<void> _submit() async {
    setState(() => _sending = true);
    try {
      await submitPartnerProfileForReview();
      await ref.read(partnerProfileControllerProvider.notifier).refreshReviewStatus();
    } on PostgrestException catch (e) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(SnackBar(
          content: Text(e.code == 'P0005'
              ? 'Ainda falta completar o perfil.'
              : 'Não foi possível pedir a verificação. Tenta novamente.'),
        ));
      }
    } catch (_) {
      if (mounted) {
        ScaffoldMessenger.of(context).showSnackBar(
          const SnackBar(content: Text('Não foi possível pedir a verificação. Tenta novamente.')),
        );
      }
    } finally {
      ref.invalidate(partnerCompletionProvider);
      if (mounted) setState(() => _sending = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    final c = widget.completion;
    final steps = partnerSetupSteps(c);
    return Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
      Container(
        padding: const EdgeInsets.all(18),
        decoration: ShapeDecoration(
          color: Colors.white,
          shape: RoundedSuperellipseBorder(borderRadius: BorderRadius.circular(22)),
        ),
        child: Column(crossAxisAlignment: CrossAxisAlignment.stretch, children: [
          Row(children: [
            EstrelaMascot(c.complete ? Estrela.contente : Estrela.feliz, size: 64),
            const SizedBox(width: 14),
            Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              const Text('O TEU PERFIL',
                  style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
              Text('${c.percent} %',
                  style: const TextStyle(
                      fontSize: 40,
                      height: 1.1,
                      fontWeight: FontWeight.w700,
                      color: AppTheme.ink,
                      fontFeatures: [FontFeature.tabularFigures()])),
            ]),
          ]),
          const SizedBox(height: 8),
          AppProgressBar(value: c.percent / 100),
          const SizedBox(height: 8),
          Text(
            c.complete ? 'O perfil está a 100 %. Já podes pedir a verificação.' : 'Completa o perfil a 100 % para a equipa te verificar.',
            style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted),
          ),
          for (var i = 0; i < steps.length; i++) _StepRow(steps[i], last: i == steps.length - 1, onTap: () => _open(steps[i].target)),
        ]),
      ),
      _verification(c),
    ]);
  }

  Widget _verification(PartnerCompletion c) {
    final reason = ref.watch(authControllerProvider.select((s) => s.profile?.rejectionReason)) ?? '';
    final (title, sub, icon) = c.inReview
        ? ('Pedido enviado', 'A equipa responde em 24 h.', Hi.shieldCheck)
        : c.status == 'suspended'
            ? ('Perfil suspenso', 'Fala com a equipa pelas Mensagens.', Hi.shieldExclamation)
            : c.canSubmit
                ? ('Já podes pedir', 'O perfil está a 100 %.', Hi.shieldCheck)
                : c.status == 'changes_required' || c.status == 'rejected'
                    ? ('A equipa pediu alterações', 'Muda o que falta e volta a pedir.', Hi.shieldExclamation)
                    : ('Ainda não podes pedir', 'Primeiro, o perfil a 100 %.', Hi.shieldCheck);
    return SectionFrame(title: 'Verificação', children: [
      Row(children: [
        Container(
          width: 44,
          height: 44,
          decoration: BoxDecoration(
            color: c.inReview ? const Color(0xFFE6EDE1) : const Color(0xFFE6E6E6),
            shape: BoxShape.circle,
          ),
          alignment: Alignment.center,
          child: Icon(icon, size: 22, color: c.inReview ? AppTheme.accentOliveDark : AppTheme.ink),
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            const SizedBox(height: 2),
            Text(sub, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        ),
      ]),
      if ((c.status == 'changes_required' || c.status == 'rejected') && reason.isNotEmpty) FrameNote(reason, top: 10),
      FrameNote(
        c.inReview
            ? 'Depois de verificado, a tua página aparece na procura e os pedidos chegam aqui.'
            : 'Com o perfil completo, pedes a verificação e a equipa responde em 24 h. Depois de verificado, a tua página aparece na procura e os pedidos chegam aqui.',
        top: 10,
      ),
      if (!c.inReview && c.status != 'suspended')
        c.canSubmit
            ? (_sending
                ? const Padding(
                    padding: EdgeInsets.only(top: 10),
                    child: SizedBox(height: 44, child: Center(child: CircularProgressIndicator(strokeWidth: 2.5, color: AppTheme.ink))),
                  )
                : FrameButton44('Pedir verificação', onTap: _submit))
            : const _DisabledButton('Pedir verificação'),
    ]);
  }
}

class _StepRow extends StatelessWidget {
  final PartnerSetupStep step;
  final bool last;
  final VoidCallback onTap;
  const _StepRow(this.step, {required this.last, required this.onTap});

  @override
  Widget build(BuildContext context) {
    final row = Container(
      constraints: const BoxConstraints(minHeight: 56),
      padding: const EdgeInsets.symmetric(vertical: 8),
      decoration: BoxDecoration(
        border: last ? null : const Border(bottom: BorderSide(color: AppTheme.line)),
      ),
      child: Row(children: [
        Container(
          width: 24,
          height: 24,
          decoration: BoxDecoration(
            color: step.done ? AppTheme.accentOliveDark : null,
            shape: BoxShape.circle,
            border: step.done ? null : Border.all(color: const Color(0xFFCFCFCF), width: 2),
          ),
          alignment: Alignment.center,
          child: step.done ? const Icon(Hi.check, size: 14, color: Colors.white) : null,
        ),
        const SizedBox(width: 12),
        Expanded(
          child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
            Text(step.title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            Text(step.sub, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
          ]),
        ),
        if (!step.done) ...[
          const SizedBox(width: 8),
          FrameButton36(step.action, outlined: true, onTap: onTap),
        ],
      ]),
    );
    return step.done ? row : SnappyTap(onTap: onTap, child: row);
  }
}

/// «Pedir verificação» enquanto o perfil não está a 100 %.
class _DisabledButton extends StatelessWidget {
  final String label;
  const _DisabledButton(this.label);

  @override
  Widget build(BuildContext context) => Padding(
        padding: const EdgeInsets.only(top: 10),
        child: Semantics(
          button: true,
          enabled: false,
          label: label,
          child: Container(
            height: 44,
            alignment: Alignment.center,
            decoration: const ShapeDecoration(color: Color(0xFFE0E0E0), shape: StadiumBorder()),
            child: Text(label, style: const TextStyle(fontSize: 14, fontWeight: FontWeight.w700, color: Color(0xFF8A8580))),
          ),
        ),
      );
}

/// Popup do NIF (molde do §6.3), antes de ir pôr o IBAN.
class _TaxIdSheet extends ConsumerStatefulWidget {
  const _TaxIdSheet();

  @override
  ConsumerState<_TaxIdSheet> createState() => _TaxIdSheetState();
}

class _TaxIdSheetState extends ConsumerState<_TaxIdSheet> {
  final _nif = TextEditingController();
  String? _error;
  bool _saving = false;

  @override
  void dispose() {
    _nif.dispose();
    super.dispose();
  }

  Future<void> _save() async {
    final v = _nif.text.trim();
    if (!RegExp(r'^\d{9}$').hasMatch(v)) {
      setState(() => _error = 'O NIF tem 9 algarismos.');
      return;
    }
    setState(() {
      _saving = true;
      _error = null;
    });
    try {
      await ref.read(partnerProfileControllerProvider.notifier).updateTaxId(v);
      if (mounted) Navigator.of(context).pop(true);
    } catch (e) {
      if (mounted) {
        setState(() => _error = e is PostgrestException && e.code == '23505'
            ? 'Este NIF já está registado noutra conta.'
            : 'Não foi possível guardar. Tenta novamente.');
      }
    } finally {
      if (mounted) setState(() => _saving = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    const red = Color(0xFFC8553D);
    return Padding(
      padding: const EdgeInsets.all(20),
      child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
        Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
          const Expanded(
            child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Text('Dados bancários', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
              SizedBox(height: 2),
              Text('Primeiro o NIF do negócio. A seguir, o IBAN.', style: TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
            ]),
          ),
          const SizedBox.shrink(),
        ]),
        const SizedBox(height: 16),
        const Text('NIF',
            style: TextStyle(fontSize: 12, letterSpacing: 2, fontWeight: FontWeight.w700, color: AppTheme.inkMuted)),
        const SizedBox(height: 8),
        Container(
          height: 52,
          padding: const EdgeInsets.symmetric(horizontal: 18),
          alignment: Alignment.centerLeft,
          decoration: ShapeDecoration(
            color: Colors.white,
            shape: StadiumBorder(side: BorderSide(color: _error != null ? red : AppTheme.ink, width: 1.5)),
          ),
          child: TextField(
            controller: _nif,
            autofocus: true,
            keyboardType: TextInputType.number,
            inputFormatters: [FilteringTextInputFormatter.digitsOnly, LengthLimitingTextInputFormatter(9)],
            onChanged: (_) {
              if (_error != null) setState(() => _error = null);
            },
            onSubmitted: (_) => _save(),
            style: const TextStyle(fontSize: 15, color: AppTheme.ink),
            decoration: const InputDecoration(
              isCollapsed: true,
              filled: false,
              border: InputBorder.none,
              enabledBorder: InputBorder.none,
              focusedBorder: InputBorder.none,
              hintText: '9 algarismos',
            ),
          ),
        ),
        if (_error != null) ...[
          const SizedBox(height: 8),
          Row(children: [
            Container(width: 8, height: 8, decoration: const BoxDecoration(color: red, shape: BoxShape.circle)),
            const SizedBox(width: 8),
            Expanded(child: Text(_error!, style: const TextStyle(fontSize: 13, color: red))),
          ]),
        ],
        const SizedBox(height: 16),
        SnappyTap(
          onTap: _saving ? null : _save,
          semanticLabel: 'Continuar',
          child: Container(
            height: 52,
            alignment: Alignment.center,
            decoration: const ShapeDecoration(color: AppTheme.action, shape: StadiumBorder()),
            child: _saving
                ? const SizedBox(width: 20, height: 20, child: CircularProgressIndicator(strokeWidth: 2.5, color: Colors.white))
                : const Text('Continuar', style: TextStyle(fontSize: 15, fontWeight: FontWeight.w700, color: Colors.white)),
          ),
        ),
      ]),
    );
  }
}
