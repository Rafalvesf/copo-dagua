# Authentication — Validações

| Campo | Regra | Mensagem de erro (PT) |
|---|---|---|
| Nome completo | Mínimo 2 palavras, só letras e espaços | "Introduz o teu nome completo" |
| Email | Formato RFC 5322 válido | "Introduz um email válido" |
| Email (registo) | Não pode já existir | "Este email já está registado. Queres entrar?" |
| Password | ≥ 8 caracteres, 1 letra, 1 número | "A password precisa de pelo menos 8 caracteres, com letras e números" |
| Confirmação password | Igual à password | "As passwords não coincidem" |
| Termos | Checkbox obrigatório | "Precisas de aceitar os termos para continuar" |
| Login | Máx. 5 tentativas / 15 min | "Demasiadas tentativas. Tenta novamente em 15 minutos." |
