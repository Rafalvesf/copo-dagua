# Wedding — Casos Limite

- Convite a colaborador enviado para um email que já é colaborador `pending` do mesmo casamento → reenviar o convite existente em vez de duplicar linha (respeitando o índice único `wedding_collaborators_unique_active`).
- Owner tenta eliminar o casamento com um contrato ativo → bloqueado, mesma lógica de proteção do módulo Authentication (RN08 lá / RN07 aqui).
- Owner elimina a própria conta (fluxo de Authentication) enquanto ainda é dono de um casamento ativo com colaboradores → antes de permitir a eliminação da conta, o sistema deve obrigar a transferência de propriedade do casamento para um colaborador ativo, ou bloquear a eliminação da conta com mensagem explicativa. **Este é um ponto de integração crítico entre Authentication e Wedding a testar explicitamente.**
- Colaborador aceita convite mas entretanto o owner cancelou/removeu o convite → deep link expira com mensagem clara ("Este convite já não é válido").
- Dois colaboradores editam o mesmo campo em simultâneo → last-write-wins no MVP (sem CRDT/merge), aceite como limitação inicial.
- Transição automática para `completed` corre no mesmo dia em que o owner está a tentar editar a data manualmente → o cron job e a edição manual devem ser idempotentes e não entrar em conflito (lock otimista simples via `updated_at`).
- Casamento sem `wedding_date` (RN08 do Onboarding) nunca transita automaticamente — deve ficar visível no ecrã de definições que "a transição automática só acontece depois de definires uma data".
- Utilizador tenta transferir propriedade para si próprio → bloqueado com mensagem clara.
