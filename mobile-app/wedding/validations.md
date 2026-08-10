# Wedding — Validações

| Campo | Regra | Mensagem de erro (PT) |
|---|---|---|
| Nomes dos noivos | Obrigatório pelo menos 1 nome | "Precisamos de pelo menos um nome" |
| Data do casamento | Data futura (se definida); bloqueada para edição se `status = completed` | "Escolhe uma data futura" / "Não é possível alterar a data de um casamento já realizado" |
| Localização | Resultado válido do autocomplete | "Seleciona uma localização da lista" |
| Local / Venue | Texto livre, opcional, máx. 100 caracteres | — |
| Tipo de cerimónia | Um de: civil, religiosa, ambas | "Seleciona um tipo de cerimónia válido" |
| Email de convite a colaborador | Formato válido; não pode ser o próprio utilizador; não pode já ser Fornecedor (RN03) | "Introduz um email válido" / "Não podes convidar-te a ti próprio/a" / "Este email já está registado como fornecedor" |
| Foto de capa | JPG/PNG, ≤ 10MB | "A imagem tem de ser JPG ou PNG até 10MB" |
| Transferência de propriedade | Novo owner tem de ser colaborador `active` | "Só podes transferir a propriedade para um colaborador ativo" |
