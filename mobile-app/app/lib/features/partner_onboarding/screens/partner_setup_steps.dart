import '../../../core/partner_profile/partner_completion.dart';

/// «em Lisboa», «no Porto», «na Maia».
String inCity(String city) {
  const no = {'Porto', 'Funchal', 'Algarve', 'Cartaxo', 'Entroncamento', 'Montijo', 'Seixal', 'Barreiro'};
  const na = {'Maia', 'Amadora', 'Figueira da Foz', 'Póvoa de Varzim', 'Covilhã', 'Guarda', 'Nazaré', 'Ericeira', 'Madeira', 'Trofa', 'Lourinhã', 'Batalha', 'Golegã'};
  const nos = {'Açores'};
  if (no.contains(city)) return 'no $city';
  if (na.contains(city)) return 'na $city';
  if (nos.contains(city)) return 'nos $city';
  return 'em $city';
}

/// Para onde leva o botão de um passo em falta.
enum PartnerSetupTarget { businessInfo, profile, portfolio, pricing, payout }

/// Um passo do perfil do parceiro (Início, «O teu perfil»; «Já está quase!»).
class PartnerSetupStep {
  final String title;
  final String sub;
  final bool done;
  final String action;
  final PartnerSetupTarget target;
  const PartnerSetupStep(this.title, this.sub, {required this.done, required this.action, required this.target});
}

/// Os passos pela ordem do mockup «Parceiro 5». A descrição não estava no
/// mockup mas o servidor exige-a para a verificação (50+ letras, migração 104).
List<PartnerSetupStep> partnerSetupSteps(PartnerCompletion c) {
  final zone = c.nationwide
      ? 'em todo o país'
      : [if (c.city.isNotEmpty) inCity(c.city), if (c.travelKm != null) 'até ${c.travelKm} km'].join(', ');
  final cat = c.categories.isEmpty ? '' : c.categories.first;
  final left = PartnerCompletion.minPhotos - c.photos;
  return [
    PartnerSetupStep(
      'Nome, categoria e zona',
      c.basics ? [cat, zone].where((s) => s.isNotEmpty).join(' ') : 'O nome, o que fazes e onde',
      done: c.basics,
      action: 'Pôr',
      target: PartnerSetupTarget.businessInfo,
    ),
    PartnerSetupStep('Foto de perfil', c.logo ? 'Feito' : 'O teu logótipo ou uma foto tua',
        done: c.logo, action: 'Pôr', target: PartnerSetupTarget.profile),
    PartnerSetupStep(
      'Fotos do teu trabalho',
      c.photosDone
          ? '${c.photos} fotos'
          : c.photos == 0
              ? 'A primeira é a capa do cartão'
              : 'Faltam $left de ${PartnerCompletion.minPhotos} fotos',
      done: c.photosDone,
      action: 'Juntar',
      target: PartnerSetupTarget.portfolio,
    ),
    PartnerSetupStep('Descrição', c.description ? 'Feito' : 'O que fazes, em 50 letras ou mais',
        done: c.description, action: 'Pôr', target: PartnerSetupTarget.businessInfo),
    PartnerSetupStep('Preços', c.pricing ? 'Feito' : 'Com preço recebes mais pedidos',
        done: c.pricing, action: 'Pôr', target: PartnerSetupTarget.pricing),
    PartnerSetupStep(
      'Dados bancários',
      c.payoutDone
          ? 'Feito'
          : c.taxId
              ? 'Falta o IBAN e ativar os pagamentos'
              : 'NIF e IBAN',
      done: c.payoutDone,
      action: 'Pôr',
      target: PartnerSetupTarget.payout,
    ),
  ];
}
