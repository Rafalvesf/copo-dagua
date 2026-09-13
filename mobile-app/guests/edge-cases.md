# Guests — Casos Limite

- Convidado entra pela primeira vez mas não há correspondência automática de email (`linked_profile_id` continua `null` depois de `join_wedding_by_code()`) → o wizard de RSVP não pode arrancar (não sabe a que linha de `guests` associar as respostas); mostrar um estado vazio a pedir para confirmar o email com o casal, mesmo raciocínio já usado em `GuestProfileScreen`.
- Casal reduz `companions_limit` depois de o convidado já ter adicionado acompanhantes acima do novo limite → os acompanhantes já guardados não são removidos automaticamente; só fica bloqueado adicionar mais no wizard/Perfil até o número voltar a ficar dentro do limite.
- Convidado responde "Não vou" depois de já ter preenchido acompanhantes/menu/alergias numa resposta anterior → esses dados **não são apagados** (RN11); se voltar a confirmar, reaparecem tal como estavam.
- Convidado com `companions_limit = 0` tenta adicionar acompanhante → opção "+ Adicionar acompanhante" nem aparece no wizard, evitando o erro em vez de o mostrar depois de o convidado tentar.
- Casal remove um convidado que já respondeu ao RSVP → hard delete acontece sem aviso especial (RN06), mas a UI deve confirmar explicitamente antes de remover ("Este convidado já respondeu. Queres mesmo remover?"), incluindo os acompanhantes associados (`on delete cascade` em `guest_companions`).
- Dois convidados com o mesmo nome mas pessoas diferentes → sem deduplicação automática; o casal é responsável por distinguir (ex: "Maria Silva (tia)" vs "Maria Silva (colega)").
- Casamento muda de data depois de o convidado já ter respondido → não invalida a resposta; o convidado só é avisado através dos ecrãs normais de "O Casamento" (data atual de `weddings.wedding_date`), sem reabrir o wizard automaticamente.
- Colaborador remove um convidado enquanto o owner está a editá-lo em simultâneo → last-write-wins, mesma limitação aceite no módulo Wedding.
- Conta de casal entra em "Modo convidado" noutro casamento (`showGuestModeSheet`, `guest_mode_screen.dart`) e responde ao wizard desse casamento → tratado exatamente como qualquer outra conta convidada; `wedding_guest_members` já é many-to-many de propósito para isto.
