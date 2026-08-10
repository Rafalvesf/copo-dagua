# Guests — Casos Limite

- Convidado tenta usar um link de RSVP depois de o casal ter regenerado o token (`regenerate-rsvp-token`) → mostrar mensagem clara ("Este link já não é válido, contacta os noivos") em vez de erro técnico.
- Convidado marcado como "pode trazer acompanhante" recusa presença → o formulário deve esconder os campos de acompanhante nesse caso, mas manter a flag `plus_one_allowed` intacta caso ele mude de resposta depois.
- Casal remove um convidado que já respondeu ao RSVP → hard delete acontece sem aviso especial (RN06), mas a UI deve confirmar explicitamente antes de remover ("Este convidado já respondeu. Queres mesmo remover?").
- Dois convidados com o mesmo nome mas pessoas diferentes → sem deduplicação automática; o casal é responsável por distinguir (ex: "Maria Silva (tia)" vs "Maria Silva (colega)").
- Convidado responde ao RSVP através do link múltiplas vezes em curto espaço de tempo (ex: muda de ideias 3x seguidas) → permitido (RN05), mas a função `submit-rsvp` deve ter rate limiting suave (ex: máx. 10 submissões/hora por token) para prevenir abuso automatizado.
- Convite enviado por WhatsApp mas o número está incorreto → sem forma de a plataforma detetar isto automaticamente no MVP; o casal só percebe pela ausência de resposta e pode reenviar por outro canal.
- Casamento muda de data depois de convites já enviados → o texto da página pública de RSVP deve refletir sempre a data atual de `weddings.wedding_date`, não uma cópia estática guardada no momento do envio.
- Colaborador remove um convidado enquanto o owner está a editá-lo em simultâneo → last-write-wins, mesma limitação aceite no módulo Wedding.
