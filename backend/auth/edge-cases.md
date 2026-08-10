# Authentication — Casos Limite

- Utilizador tenta registar-se com email já usado por login social (Google) mas quer usar password → oferecer *account linking* em vez de erro seco.
- Utilizador fecha a app entre o registo e a verificação de email → ao reabrir, deve cair diretamente no ecrã "Verifica o teu email", não repetir o registo.
- Token de verificação de email expirado (ex: 24h) → ecrã com opção clara de reenvio.
- Utilizador elimina a conta mas tem um contrato ativo com pagamentos pendentes → bloquear eliminação com mensagem explicativa e link para suporte.
- Dois dispositivos com a mesma conta autenticados em simultâneo → permitido no MVP (não há single-session enforcement), mas token comprometido deve poder revogar todas as sessões (relacionado com RN08).
- OAuth falha a meio (utilizador cancela no browser) → app deve voltar ao ecrã anterior sem erro alarmante.
- Utilizador com password fraca tenta reset e define a mesma password fraca antiga → deve ser bloqueado pela mesma validação do registo.
- Admin é despromovido/removido enquanto tem sessão ativa → sessão deve perder privilégios no próximo refresh token (não instantaneamente, é um trade-off aceite no MVP).
