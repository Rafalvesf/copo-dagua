# Guests — Validações

| Campo | Regra | Mensagem de erro (PT) |
|---|---|---|
| Nome do convidado | Obrigatório, mínimo 2 caracteres | "Introduz o nome do convidado" |
| Email (convidado) | Formato válido, se preenchido | "Introduz um email válido" |
| Telefone (convidado) | Formato válido (PT ou internacional), se preenchido | "Introduz um número de telefone válido" |
| Nº de acompanhantes permitidos | Inteiro ≥ 0 | "Introduz um número válido" |
| Nome do acompanhante | Obrigatório para cada acompanhante adicionado no wizard | "Introduz o nome do acompanhante" |
| Nº de acompanhantes adicionados | Não pode exceder `companions_limit` da linha do convidado | "Este convite permite no máximo {n} acompanhante(s)" |
| Menu (por pessoa) | Obrigatório antes de avançar do ecrã dessa pessoa | "Escolhe uma opção de menu" |
| Alergias/intolerâncias (por pessoa) | Texto livre, opcional, máx. 200 caracteres | — |
| Lado / Relação | Obrigatório confirmar antes do ecrã de menu, mesmo se pré-preenchido pelo casal | "Confirma de que lado vens" / "Confirma como nos conheces" |
| Mensagem do convidado | Texto livre, opcional, máx. 500 caracteres | — |
