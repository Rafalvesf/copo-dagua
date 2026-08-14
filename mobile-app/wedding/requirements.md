# Wedding — Requisitos

## Funcionalidades

- Ver e editar os dados do casamento: nomes dos noivos, data, localização, local (venue), tipo de cerimónia (civil/religiosa/ambas)
- Alterar foto de capa do casamento
- Countdown até ao grande dia (dado calculado a partir de `wedding_date`, consumido pelo Dashboard)
- Gerir colaboradores: convidar o parceiro/a (ou outra pessoa de confiança) para editar o casamento
- Aceitar/recusar convite de colaboração (do lado de quem recebe)
- Remover colaborador (só o owner pode remover; um colaborador pode sair voluntariamente)
- Transferir propriedade (`owner_id`) do casamento para outro colaborador — caso raro mas necessário (ex: conta original perdida)
- Marcar o casamento como "realizado" manualmente, ou transição automática passados N dias após `wedding_date`
- Arquivar/eliminar o casamento (soft-delete, alinhado com o padrão de Authentication)
- Alternar entre casamentos, caso o utilizador seja colaborador em mais do que um (além do seu próprio, como owner)

## Regras de negócio

| # | Regra |
|---|---|
| RN01 | Só o `owner_id` pode eliminar o casamento ou transferir a propriedade. Colaboradores podem editar todos os outros dados. |
| RN02 | Um utilizador só pode ser `owner_id` de **um** casamento ativo de cada vez (herdado do Onboarding RN07). Pode ser colaborador em múltiplos. |
| RN03 | Convite de colaborador é feito por email. Se o email já tiver conta noutro `role` (ex: parceiro), o convite falha com mensagem clara — mesma lógica já aplicada no convite do Onboarding. |
| RN04 | Não existem permissões granulares por colaborador no MVP — um colaborador aceite tem acesso de edição total aos dados do casamento (guests, budget, checklist, etc.), exceto eliminar/transferir propriedade (RN01). Papéis diferenciados (ex: "só visualização" para um wedding planner) ficam para depois do MVP. |
| RN05 | `wedding_date` pode ser alterada livremente enquanto o casamento estiver em estado `planning`. Uma vez em `completed`, a data fica bloqueada para edição (preserva integridade do histórico e de contratos/pagamentos já associados). |
| RN06 | Transição automática de `planning` para `completed` acontece 1 dia depois de `wedding_date`, via job agendado — mas pode também ser feita manualmente antes disso pelo owner. |
| RN07 | Eliminação do casamento segue o padrão de soft-delete de 30 dias já estabelecido em Authentication — bloqueada se existirem contratos ou pagamentos ativos associados (mesma lógica de proteção usada para eliminação de conta). |
| RN08 | Um casamento sem `wedding_date` definida (RN06 do Onboarding, "ainda não sei") permanece em `planning` indefinidamente — não há transição automática sem data. |

## Risco identificado

RN04 (sem permissões granulares) é aceitável para o caso de uso principal (parceiro/a como colaborador), mas não escala bem se o produto evoluir para incluir wedding planners profissionais com acesso a múltiplos casamentos de clientes diferentes — nesse cenário, "acesso total" pode ser inadequado do ponto de vista de confiança do casal. Marcar como decisão a revisitar antes de abrir a plataforma a esse segmento.
