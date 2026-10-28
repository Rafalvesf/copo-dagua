/// Termos e Política de Privacidade da À Nossa! (2026-10-25).
///
/// Rascunho preparado com base no funcionamento real da app (pagamentos
/// retidos, comissão, reembolsos, disputas, dados tratados). Deve ser
/// revisto por um advogado antes do lançamento. Os dados da empresa estão
/// em [LegalEntity] — preencher antes de publicar.
library;

class LegalEntity {
  static const name = '[Nome legal da empresa]';
  static const nif = '[NIF]';
  static const address = '[Morada da sede]';
  static const email = '[email de contacto]';
  static const updated = '25 de outubro de 2026';
}

class LegalSection {
  final String title;
  final List<String> paragraphs;
  const LegalSection(this.title, this.paragraphs);
}

class LegalDoc {
  final String title;
  final String intro;
  final List<LegalSection> sections;
  const LegalDoc(this.title, this.intro, this.sections);
}

const termsDoc = LegalDoc(
  'Termos e Condições',
  'Estes termos regem a utilização da À Nossa!, a app que liga quem organiza um evento aos parceiros que o tornam possível. Ao criar conta, aceitas estes termos.',
  [
    LegalSection('1. Quem somos', [
      'A À Nossa! é explorada por ${LegalEntity.name}, NIF ${LegalEntity.nif}, com sede em ${LegalEntity.address} ("À Nossa!", "nós"). Contacto: ${LegalEntity.email}.',
      'A À Nossa! é uma plataforma de intermediação: os serviços do evento (espaço, catering, fotografia, música, etc.) são prestados pelos parceiros, que são os únicos responsáveis por eles. A À Nossa! não é parte do contrato de prestação de serviços entre o organizador e o parceiro.',
    ]),
    LegalSection('2. Contas', [
      'Há três tipos de conta: organizador (quem organiza o evento), parceiro (quem presta serviços) e convidado (quem é convidado para um evento).',
      'Para criar uma conta de organizador ou de parceiro tens de ter pelo menos 18 anos. Os dados que indicas têm de ser verdadeiros e estar atualizados.',
      'És responsável por manter a tua palavra-passe em segredo e por tudo o que é feito com a tua conta. Se suspeitares de uso indevido, avisa-nos.',
    ]),
    LegalSection('3. Parceiros', [
      'Os perfis de parceiro são revistos pela À Nossa! antes de aparecerem aos organizadores. Para receber pagamentos, o parceiro tem de indicar os dados de identificação e a conta bancária pedidos na app, que são enviados à Stripe, a entidade que processa os pagamentos.',
      'O parceiro é responsável pela qualidade e legalidade dos seus serviços, pelas licenças necessárias e por emitir a fatura legal ao organizador. Os comprovativos gerados pela app não são faturas.',
      'Os preços indicados pelos parceiros incluem IVA.',
    ]),
    LegalSection('4. Propostas, reservas e pagamentos', [
      'O organizador pede um orçamento, o parceiro envia uma proposta e, se o organizador a aceitar, a reserva fica a aguardar o pagamento do sinal. A reserva só fica confirmada quando o sinal é pago.',
      'O sinal corresponde à percentagem indicada na proposta (por defeito, 20%). O restante tem de ser pago até 30 dias antes do evento (ou no prazo indicado na app, se o evento for mais cedo).',
      'Sobre o valor do parceiro, a À Nossa! cobra ao organizador uma taxa de proteção de pagamento, por escalões sobre o valor total da reserva (atualmente 2,5% até 2 000 €, 1,5% de 2 000 € a 10 000 € e 1% acima, IVA incluído), mostrada antes de pagar. Ao parceiro é descontada uma taxa de serviço, também por escalões sobre o valor total da reserva (atualmente 5% até 2 000 €, 3% de 2 000 € a 10 000 € e 2% acima, IVA incluído), no momento em que o dinheiro é libertado; parceiros novos não pagam esta taxa no primeiro mês depois de criarem o perfil, e durante mais um mês se nesse primeiro mês não tiverem nenhuma venda. A À Nossa! emite fatura de ambas.',
      'Os pagamentos são processados pela Stripe (cartão, Apple Pay, Google Pay, MB WAY ou Multibanco). A À Nossa! nunca vê nem guarda os dados do teu cartão.',
      'O dinheiro pago fica retido pela À Nossa! e é transferido ao parceiro assim: o sinal, 48 horas depois de ser pago (quando deixa de poder ser recuperado pelo organizador); o restante, 3 dias depois da data do evento, desde que não tenha sido reportado nenhum problema nesse período.',
    ]),
    LegalSection('5. Cancelamentos e reembolsos', [
      'Se o organizador cancelar a reserva: o sinal só é devolvido se o cancelamento for feito nas 48 horas seguintes ao seu pagamento e se a proposta do parceiro o permitir; o restante é devolvido se o cancelamento for feito com pelo menos 30 dias de antecedência do evento.',
      'Se o parceiro cancelar a reserva, o organizador recebe de volta tudo o que pagou.',
      'Os reembolsos são feitos para o meio de pagamento usado e chegam normalmente em 5 a 10 dias úteis.',
      'Estas regras não afastam os direitos que a lei te dá enquanto consumidor.',
    ]),
    LegalSection('6. Problemas com um serviço', [
      'Se houver um problema com um serviço, reporta-o na app até 3 dias depois do evento. Enquanto o problema estiver em análise, o pagamento ao parceiro fica retido.',
      'A À Nossa! analisa a informação das duas partes e pode decidir devolver ao organizador todo ou parte do valor pago. Fazemos o possível por resolver com justiça, mas a responsabilidade pelo serviço é sempre do parceiro.',
    ]),
    LegalSection('7. Avaliações e conteúdos', [
      'Só podes avaliar um parceiro depois de uma reserva concluída. As avaliações têm de ser verdadeiras e respeitosas.',
      'És responsável pelo que publicas (mensagens, fotos da galeria, comentários). Não é permitido conteúdo ilegal, ofensivo, enganoso ou que viole direitos de terceiros. Ao publicar, autorizas a À Nossa! a mostrar esse conteúdo às pessoas do evento ou da conversa a que se destina.',
      'Podemos remover conteúdos e suspender contas que violem estes termos.',
    ]),
    LegalSection('8. Responsabilidade', [
      'Fazemos o possível para que a app funcione sem falhas, mas não garantimos que esteja sempre disponível. Na medida permitida por lei, a À Nossa! não é responsável pelos serviços prestados pelos parceiros nem por danos indiretos resultantes do uso da app.',
    ]),
    LegalSection('9. Alterações', [
      'Podemos atualizar estes termos. Se a alteração for importante, avisamos-te na app antes de entrar em vigor.',
    ]),
    LegalSection('10. Lei e litígios', [
      'Estes termos regem-se pela lei portuguesa.',
      'Em caso de litígio de consumo, podes recorrer a uma entidade de resolução alternativa de litígios, como o Centro de Arbitragem de Conflitos de Consumo de Lisboa (www.centroarbitragemlisboa.pt) ou outra da lista em www.consumidor.gov.pt. Tens também o Livro de Reclamações Eletrónico (www.livroreclamacoes.pt).',
    ]),
    LegalSection('11. Contactos', [
      'Para qualquer questão, usa "Falar com a equipa À Nossa!" nas Definições ou escreve para ${LegalEntity.email}.',
    ]),
  ],
);

const privacyDoc = LegalDoc(
  'Política de Privacidade',
  'Explicamos aqui que dados pessoais tratamos, para quê e quais são os teus direitos, de acordo com o Regulamento Geral sobre a Proteção de Dados (RGPD).',
  [
    LegalSection('1. Responsável pelo tratamento', [
      '${LegalEntity.name}, NIF ${LegalEntity.nif}, ${LegalEntity.address}. Contacto para privacidade: ${LegalEntity.email}.',
    ]),
    LegalSection('2. Que dados tratamos', [
      'Conta: nome, email, telemóvel, tipo de conta e palavra-passe (guardada de forma cifrada).',
      'Evento: tipo e data do evento, local, orçamento, tarefas, plano de mesas, fotos da galeria e mensagens trocadas na app.',
      'Convidados: os dados que o organizador introduz (nome, contacto, acompanhantes, resposta ao convite, menu e restrições alimentares) e os que o próprio convidado indica.',
      'Parceiros: dados do negócio, fotos e preços. Os dados de identificação e o IBAN para receber pagamentos são enviados diretamente à Stripe e não ficam guardados pela À Nossa!.',
      'Pagamentos: valores, datas e estado dos pagamentos. Os dados do cartão são tratados apenas pela Stripe.',
      'Com a tua autorização: localização aproximada (para mostrar parceiros perto de ti), câmara (para fotos) e notificações.',
      'Dados técnicos: registos de erros da app (o erro, o tipo de dispositivo e o identificador da conta — sem nome nem email), para corrigirmos problemas.',
    ]),
    LegalSection('3. Para que usamos os dados', [
      'Para prestar o serviço que pediste: criar e gerir o evento, ligar-te aos parceiros, processar reservas, pagamentos e reembolsos (execução do contrato).',
      'Para cumprir obrigações legais, como as fiscais e contabilísticas.',
      'Para manter a app segura, prevenir fraude e corrigir erros (interesse legítimo).',
      'Para notificações, localização e câmara, apenas com o teu consentimento, que podes retirar a qualquer momento nas definições do telemóvel.',
      'Não vendemos os teus dados nem os usamos para publicidade de terceiros.',
    ]),
    LegalSection('4. Dados dos convidados', [
      'Quando o organizador adiciona convidados, é ele quem decide que dados introduz e tem de ter legitimidade para o fazer (por exemplo, o convidado deu-lhe esses contactos). Os convidados podem pedir-nos acesso, correção ou eliminação dos seus dados a qualquer momento.',
      'As restrições alimentares podem revelar informação de saúde. Só são usadas para o organizador e o catering prepararem o evento.',
    ]),
    LegalSection('5. Com quem partilhamos', [
      'Dentro da app: com as pessoas do mesmo evento ou conversa, na medida necessária (por exemplo, o parceiro vê os dados da reserva e o nome do organizador).',
      'Prestadores de serviços que tratam dados por nossa conta: Supabase (base de dados e autenticação, servidores na UE, em Frankfurt), Stripe (pagamentos), GitHub e Vercel (alojamento da app e do painel de administração), Sentry (registo de erros) e Giphy (pesquisa de GIFs no chat, só o termo pesquisado).',
      'Alguns destes prestadores podem tratar dados fora da UE; nesse caso, existem as garantias exigidas pelo RGPD, como as cláusulas contratuais-tipo da Comissão Europeia.',
      'Autoridades, quando a lei o exigir.',
    ]),
    LegalSection('6. Durante quanto tempo', [
      'Enquanto a tua conta estiver ativa. Podes apagá-la a qualquer momento em Definições → Conta → Apagar conta: os teus dados pessoais são apagados de imediato, exceto os que a lei nos obriga a guardar (por exemplo, registos de pagamentos, durante 10 anos, sem o teu nome). Se tiveres reservas ativas, tens de as cancelar ou esperar que o evento passe.',
    ]),
    LegalSection('7. Os teus direitos', [
      'Podes apagar a tua conta diretamente nas Definições. Podes também pedir acesso aos teus dados, a sua correção, eliminação ou portabilidade, opor-te a um tratamento ou pedir a sua limitação, e retirar um consentimento dado. Para isso, usa "Falar com a equipa À Nossa!" nas Definições ou escreve para ${LegalEntity.email}. Respondemos no prazo de um mês.',
      'Tens também o direito de apresentar reclamação à Comissão Nacional de Proteção de Dados (www.cnpd.pt).',
    ]),
    LegalSection('8. Segurança', [
      'Os dados viajam sempre cifrados, o acesso é limitado por regras de permissões em cada tabela e a equipa só acede ao necessário para dar suporte.',
    ]),
    LegalSection('9. Armazenamento no dispositivo', [
      'A app guarda no teu dispositivo apenas o necessário para funcionar (por exemplo, a sessão iniciada e preferências). Não usamos cookies de publicidade.',
    ]),
    LegalSection('10. Menores', [
      'As contas de organizador e de parceiro são para maiores de 18 anos. Dados de menores (por exemplo, crianças acompanhantes de um convidado) só são tratados quando introduzidos por um adulto responsável, para a organização do evento.',
    ]),
    LegalSection('11. Alterações', [
      'Se alterarmos esta política de forma importante, avisamos-te na app.',
    ]),
  ],
);

/// Página pública para pedir a eliminação da conta (2026-10-28) — a
/// Google Play exige um endereço web para isto, sem ter de instalar a app.
const deleteAccountDoc = LegalDoc(
  'Apagar a tua conta',
  'Podes apagar a tua conta da À Nossa! e os dados associados a qualquer momento, sem custos.',
  [
    LegalSection('Na app (o mais rápido)', [
      '1. Entra na tua conta na app ou em rafalvesf.github.io/copo-dagua.',
      '2. Abre Definições → Conta → Apagar conta.',
      '3. Escreve APAGAR para confirmar. A conta é apagada de imediato.',
    ]),
    LegalSection('Sem acesso à app', [
      'Envia um email para ${LegalEntity.email} a partir do endereço da conta, com o assunto "Apagar conta". Apagamos a conta em até 30 dias e confirmamos por email.',
    ]),
    LegalSection('O que é apagado', [
      'Nome, email, telefone, fotografia de perfil, mensagens, fotografias e comentários na galeria, convidados e listas, e o perfil de parceiro (deixa de aparecer na pesquisa).',
    ]),
    LegalSection('O que guardamos e durante quanto tempo', [
      'Registos de pagamentos e faturas, sem o teu nome, durante 10 anos, porque a lei fiscal portuguesa o obriga. Eventos partilhados com outras pessoas passam para o outro organizador.',
      'Se tiveres reservas ativas, tens de as cancelar ou esperar que o evento passe antes de apagar a conta.',
    ]),
  ],
);
