# Guests — Critérios de Aceitação e Testes

## Critérios de aceitação

- [ ] O casal consegue adicionar, editar e remover convidados.
- [ ] O casal consegue filtrar a lista por estado de RSVP.
- [ ] O envio de convite de RSVP gera um link funcional e atualiza o estado do convidado para "Convite enviado".
- [ ] Um convidado consegue abrir o link de RSVP sem qualquer login e submeter a resposta.
- [ ] Um convidado consegue alterar a resposta depois de já ter respondido, usando o mesmo link.
- [ ] O campo de acompanhante só aparece se `plus_one_allowed = true`.
- [ ] Um token inválido ou regenerado mostra mensagem de erro clara, não uma página em branco ou erro técnico.
- [ ] RLS impede que um utilizador autenticado (mas sem ser membro do casamento) leia a lista de convidados de outro casamento.
- [ ] As funções públicas (`get-rsvp-by-token`, `submit-rsvp`) nunca expõem dados de convidados que não correspondam ao token fornecido.

## Testes unitários
- Validação de email/telefone
- Lógica de resumo agregado (contagem de confirmados/pendentes/recusados/lugares totais)

## Testes de integração
- `send-rsvp-invite` gera token válido e atualiza estado corretamente
- `get-rsvp-by-token` com token inexistente devolve erro controlado, não expõe detalhes internos
- `submit-rsvp` com token válido atualiza o registo correto e nenhum outro
- RLS: utilizador não-membro do casamento não consegue ler/escrever `guests` via chamada direta à API

## Testes E2E
- Fluxo completo: casal adiciona convidado → envia convite → convidado (sem app) responde → casal vê a resposta atualizada
- Fluxo completo: convidado responde "não vou" e depois muda para "vou", com acompanhante

## Testes de segurança
- Tentativa de enumerar tokens válidos por força bruta → deve ser mitigada por rate limiting
- Tentativa de aceder a `get-rsvp-by-token` com token de outro convidado → deve devolver apenas os dados desse convidado, nunca de outros
