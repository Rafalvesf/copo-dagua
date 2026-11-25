import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';

import '../../../core/auth/auth_controller.dart';
import '../../../shared/widgets/gradient_scaffold.dart';
import '../../../shared/widgets/opening_hours.dart';
import '../../../shared/widgets/page_kit.dart';
import '../../../shared/widgets/section_frame.dart';
import 'package:copo_dagua_app/shared/widgets/press_scale.dart';

/// «Horário» do parceiro (migração 241, pedido do Rafael, 2026-11-25): os
/// dias abertos e as horas, que aparecem na página do parceiro. Aberto em
/// Início › A tua página › Horário.
class PartnerHoursScreen extends ConsumerStatefulWidget {
  const PartnerHoursScreen({super.key});

  @override
  ConsumerState<PartnerHoursScreen> createState() => _PartnerHoursScreenState();
}

class _PartnerHoursScreenState extends ConsumerState<PartnerHoursScreen> {
  OpeningHours? _hours;
  bool _saving = false;

  @override
  void initState() {
    super.initState();
    final me = ref.read(authControllerProvider).profile?.id;
    if (me != null) {
      ref.read(partnerOpeningHoursProvider(me).future).then((h) {
        if (mounted && _hours == null) setState(() => _hours = h ?? OpeningHours.standard);
      });
    }
  }

  Future<void> _save() async {
    final h = _hours;
    if (h == null) return;
    setState(() => _saving = true);
    var msg = 'Horário guardado.';
    try {
      await saveMyOpeningHours(h);
      final me = ref.read(authControllerProvider).profile?.id;
      if (me != null) ref.invalidate(partnerOpeningHoursProvider(me));
    } catch (_) {
      msg = 'Não foi possível guardar. Tenta outra vez.';
    }
    if (!mounted) return;
    setState(() => _saving = false);
    ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text(msg)));
    if (msg == 'Horário guardado.') Navigator.of(context).maybePop();
  }

  @override
  Widget build(BuildContext context) {
    final h = _hours;
    return GradientScaffold(
      background: AppBackground.feed,
      body: KitPage(
        pinnedBack: true,
        rotateBack: false,
        children: [
          const KitHeader(),
          const KitTitle('Horário', subtitle: 'Quando estão abertos. Aparece na vossa página.'),
          SectionFrame(title: 'Dias e horas', children: [
            if (h == null)
              const FrameNote('A carregar…')
            else
              OpeningHoursEditor(value: h, fill: const Color(0xFFF2F2F2), onChanged: (v) => setState(() => _hours = v)),
            const FrameNote('Toca nas horas para as mudar. Um dia desligado fica «Fechado».', top: 10),
          ]),
          const SizedBox(height: 20),
          SizedBox(
            height: 52,
            child: PressScale(child: FilledButton(
              onPressed: _saving || h == null ? null : _save,
              style: FilledButton.styleFrom(shape: const StadiumBorder()),
              child: Text(_saving ? 'A guardar…' : 'Guardar'),
            )),
          ),
        ],
      ),
    );
  }
}
