# Guests — Critérios de Aceitação e Testes

## Critérios de aceitação

- [ ] O casal consegue adicionar, editar e remover convidados, incluindo lado, relação e nº de acompanhantes permitidos.
- [ ] O casal consegue filtrar a lista por estado de RSVP.
- [ ] Um convidado que cria conta com o `guest_code` correto fica automaticamente associado ao casamento (`wedding_guest_members`) e, quando o email coincide, à sua linha em `guests` (`linked_profile_id`).
- [ ] Na primeira entrada com a linha ligada, o wizard de RSVP arranca automaticamente e não volta a arrancar sozinho depois de `rsvp_wizard_completed_at` ficar preenchido.
- [ ] Responder "Não vou" no wizard não impede o acesso a "O Casamento", "Presentes", "Galeria" e "Perfil".
- [ ] Responder "Sim, vou" não deixa adicionar mais acompanhantes do que `companions_limit`.
- [ ] Cada pessoa (convidado principal e cada acompanhante) tem o seu próprio menu e alergias, visíveis separadamente no ecrã de confirmação e no detalhe do casal.
- [ ] Mudar de "Confirmado" para "Recusado" e depois outra vez para "Confirmado" reaproveita os acompanhantes/menu/alergias anteriores, sem os pedir de novo.
- [ ] RLS impede que um utilizador autenticado (mas sem ser membro do casamento, nem o próprio convidado) leia a lista de convidados de outro casamento.
- [ ] RLS impede que um convidado leia ou escreva acompanhantes (`guest_companions`) de outro convidado que não seja o seu.

## Testes unitários
- Validação de email/telefone
- Lógica de resumo agregado (contagem de confirmados/pendentes/recusados/lugares totais)
- Limite de acompanhantes: adicionar acima de `companions_limit` é rejeitado antes de chamar a API

## Testes de integração
- `join_wedding_by_code` associa `wedding_guest_members` e liga `linked_profile_id` quando o email coincide; não liga nada quando não coincide
- `submit_own_rsvp` com `p_status = 'declined'` preserva `guest_companions` já existentes (RN11)
- `submit_own_rsvp` com mais acompanhantes do que `companions_limit` é rejeitado pela função
- RLS: utilizador não-membro do casamento e sem `linked_profile_id` correspondente não consegue ler/escrever `guests` nem `guest_companions` via chamada direta à API

## Testes E2E
- Fluxo completo: casal adiciona convidado com `companions_limit = 2` → convidado cria conta → wizard corre → adiciona 1 acompanhante → escolhe menu/alergias para os dois → confirma → casal vê a resposta atualizada com os dois menus
- Fluxo completo: convidado responde "não vou" → entra na app → mais tarde reabre "Alterar RSVP" → muda para "sim" com os mesmos acompanhantes de antes

## Testes de segurança
- Tentativa de um convidado chamar `submit_own_rsvp` para uma linha de `guests` que não é a sua (via `linked_profile_id` de outra conta) → deve falhar, nunca escrever no registo errado
- Tentativa de ler `guest_companions` de outro convidado do mesmo casamento → só o casal (via `is_wedding_member`) ou o próprio convidado (via `linked_profile_id`) podem
