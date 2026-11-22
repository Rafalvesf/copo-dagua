import 'package:flutter/material.dart';
import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:flutter_svg/flutter_svg.dart';

import '../../core/partners/partner_achievements.dart';
import '../../core/theme/app_theme.dart';
import '../hero_icons.dart';
import 'island_sheet.dart';

// Conquistas dos parceiros (pedido do Rafael, 2026-11-22, mockup
// «Conquistas dos parceiros», forma C; DESIGN.md §6 «Conquistas»):
// no canto da foto do cartão, a primeira conquista numa pílula branca com o
// nome e as outras só em ícone (discos brancos 28). Tocar abre o popup
// «Conquistas».

const _green = Color(0xFF4F6B4A);
const _amber = Color(0xFFF2A01B);

String _label(PartnerAchievement a) => switch (a) {
      PartnerAchievement.founder => 'Fundador',
      PartnerAchievement.pro => 'Modo Pro',
      PartnerAchievement.active => 'Mais ativo',
    };

String _meaning(PartnerAchievement a) => switch (a) {
      PartnerAchievement.founder => 'Um dos primeiros 100 parceiros da À Nossa!',
      PartnerAchievement.pro => 'Tem o Modo Pro: subscrição ativa',
      PartnerAchievement.active => 'Entre os 10 % com mais reservas nos últimos 30 dias',
    };

Color _color(PartnerAchievement a) => switch (a) {
      PartnerAchievement.founder => _green,
      PartnerAchievement.pro => AppTheme.ink,
      PartnerAchievement.active => _amber,
    };

// Coroa de louros com a estrela (Fundador) e a chama (Mais ativo), 24×24.
const _laurelSvg = '<svg viewBox="0 0 24 24"><g fill="#000">'
    '<path d="M10.54 20.77 A8.4 8.4 0 0 1 5.12 7.68" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>'
    '<path d="M13.46 20.77 A8.4 8.4 0 0 0 18.88 7.68" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round"/>'
    '<ellipse cx="6.09" cy="20.94" rx="1.6" ry="3" transform="rotate(245 6.09 20.94)"/>'
    '<ellipse cx="2.05" cy="15.17" rx="1.6" ry="3" transform="rotate(285 2.05 15.17)"/>'
    '<ellipse cx="2.67" cy="8.15" rx="1.6" ry="3" transform="rotate(325 2.67 8.15)"/>'
    '<ellipse cx="17.91" cy="20.94" rx="1.6" ry="3" transform="rotate(-65 17.91 20.94)"/>'
    '<ellipse cx="21.95" cy="15.17" rx="1.6" ry="3" transform="rotate(-105 21.95 15.17)"/>'
    '<ellipse cx="21.33" cy="8.15" rx="1.6" ry="3" transform="rotate(-145 21.33 8.15)"/>'
    '<polygon points="12.00,7.70 13.18,10.68 16.37,10.88 13.90,12.92 14.70,16.02 12.00,14.30 9.30,16.02 10.10,12.92 7.63,10.88 10.82,10.68"/>'
    '</g></svg>';

const _fireSvg = '<svg viewBox="0 0 24 24"><path fill="#000" fill-rule="evenodd" '
    'd="M12.963 2.286a.75.75 0 0 0-1.071-.136 9.742 9.742 0 0 0-3.539 6.176 7.547 7.547 0 0 1-1.705-1.715.75.75 0 0 0-1.152-.082A9 9 0 1 0 15.68 4.534a7.46 7.46 0 0 1-2.717-2.248ZM15.75 14.25a3.75 3.75 0 1 1-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 0 1 1.925-3.546 3.75 3.75 0 0 1 3.255 3.718Z"/></svg>';

/// O ícone de uma conquista, na cor dada.
class AchievementIcon extends StatelessWidget {
  final PartnerAchievement achievement;
  final double size;
  final Color? color;
  const AchievementIcon(this.achievement, {super.key, this.size = 16, this.color});

  @override
  Widget build(BuildContext context) {
    final c = color ?? _color(achievement);
    return switch (achievement) {
      PartnerAchievement.pro => Icon(Hi.star, size: size, color: c),
      PartnerAchievement.founder =>
        SvgPicture.string(_laurelSvg, width: size, height: size, colorFilter: ColorFilter.mode(c, BlendMode.srcIn)),
      PartnerAchievement.active =>
        SvgPicture.string(_fireSvg, width: size, height: size, colorFilter: ColorFilter.mode(c, BlendMode.srcIn)),
    };
  }
}

/// Canto da foto: a primeira conquista com o nome, as outras em ícone.
/// Sem conquistas devolve `null` (o cartão mostra «Novo», se for o caso).
class AchievementsCorner extends ConsumerWidget {
  final String partnerId;
  final String partnerName;

  /// Fundo das pílulas: branco sobre fotos; `#F2F2F2` num cartão branco
  /// (Perfil do parceiro).
  final Color background;
  const AchievementsCorner({
    super.key,
    required this.partnerId,
    required this.partnerName,
    this.background = Colors.white,
  });

  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final list = ref.watch(partnerAchievementsProvider(partnerId));
    if (list.isEmpty) return const SizedBox.shrink();
    return Semantics(
      button: true,
      label: 'Conquistas: ${list.map(_label).join(', ')}',
      excludeSemantics: true,
      child: GestureDetector(
        behavior: HitTestBehavior.opaque,
        onTap: () => showAchievementsSheet(context, partnerName, list),
        child: Row(mainAxisSize: MainAxisSize.min, children: [
          Container(
            height: 28,
            padding: const EdgeInsets.only(left: 8, right: 10),
            decoration: BoxDecoration(color: background, borderRadius: BorderRadius.circular(14)),
            child: Row(mainAxisSize: MainAxisSize.min, children: [
              AchievementIcon(list.first, size: 15),
              const SizedBox(width: 5),
              Text(_label(list.first), style: const TextStyle(fontSize: 12, fontWeight: FontWeight.w700, color: AppTheme.ink)),
            ]),
          ),
          for (final a in list.skip(1)) ...[
            const SizedBox(width: 6),
            Container(
              width: 28,
              height: 28,
              alignment: Alignment.center,
              decoration: BoxDecoration(color: background, shape: BoxShape.circle),
              child: AchievementIcon(a, size: 15),
            ),
          ],
        ]),
      ),
    );
  }
}

/// Popup «Conquistas» (molde do §6.3): título 22, nome do parceiro 13, «×»
/// preto; uma linha por conquista (ícone 44 na sua cor, nome 16, o que
/// quer dizer 13) e a de verificado; «OK» preto 52.
Future<void> showAchievementsSheet(BuildContext context, String partnerName, List<PartnerAchievement> list) =>
    showIslandSheet<void>(
      context: context,
      confirmExit: false,
      builder: (ctx) {
        Widget line(Widget icon, Color bg, String title, String meaning, {bool first = false}) => Container(
              padding: const EdgeInsets.symmetric(vertical: 12),
              decoration: BoxDecoration(
                border: first ? null : const Border(top: BorderSide(color: Color(0xFFE3E3E3))),
              ),
              child: Row(children: [
                Container(
                  width: 44,
                  height: 44,
                  alignment: Alignment.center,
                  decoration: BoxDecoration(color: bg, shape: BoxShape.circle),
                  child: icon,
                ),
                const SizedBox(width: 12),
                Expanded(
                  child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                    Text(title, style: const TextStyle(fontSize: 16, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                    Text(meaning, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                  ]),
                ),
              ]),
            );
        return Padding(
          padding: const EdgeInsets.all(20),
          child: Column(mainAxisSize: MainAxisSize.min, crossAxisAlignment: CrossAxisAlignment.stretch, children: [
            Row(crossAxisAlignment: CrossAxisAlignment.start, children: [
              Expanded(
                child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
                  const Text('Conquistas', style: TextStyle(fontSize: 22, fontWeight: FontWeight.w700, color: AppTheme.ink)),
                  const SizedBox(height: 2),
                  Text(partnerName, style: const TextStyle(fontSize: 13, color: AppTheme.inkMuted)),
                ]),
              ),
              IslandRoundButton(icon: Hi.xMark, label: 'Fechar', onTap: () => Navigator.of(ctx).pop()),
            ]),
            const SizedBox(height: 16),
            for (var i = 0; i < list.length; i++)
              line(AchievementIcon(list[i], size: 20, color: Colors.white), _color(list[i]), _label(list[i]), _meaning(list[i]),
                  first: i == 0),
            line(Icon(Hi.checkBadge, size: 22, color: AppTheme.accentOliveDark), const Color(0xFFE6EDE1), 'Verificado',
                'Perfil aprovado pela equipa da À Nossa!'),
            const SizedBox(height: 16),
            FilledButton(
              onPressed: () => Navigator.of(ctx).pop(),
              style: FilledButton.styleFrom(
                backgroundColor: AppTheme.ink,
                foregroundColor: Colors.white,
                minimumSize: const Size.fromHeight(52),
                shape: const StadiumBorder(),
                textStyle: const TextStyle(
                    fontFamily: AppTheme.fontFamily, fontFamilyFallback: AppTheme.fontFamilyFallback, fontSize: 15, fontWeight: FontWeight.w700),
              ),
              child: const Text('OK'),
            ),
          ]),
        );
      },
    );
