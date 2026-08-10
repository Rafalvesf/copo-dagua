# Authentication — Critérios de Aceitação e Testes

## Critérios de aceitação

- [ ] Um utilizador consegue criar conta como Noivo ou Fornecedor com email/password.
- [ ] Um utilizador consegue criar conta via Google e via Apple.
- [ ] Um email de verificação é enviado e o deep link funciona corretamente em iOS e Android.
- [ ] Um utilizador não verificado consegue navegar mas não consegue aceder a Payments/Contracts.
- [ ] Login falha corretamente após 5 tentativas erradas, com bloqueio temporário.
- [ ] Reset de password funciona ponta a ponta, incluindo deep link.
- [ ] RLS impede um utilizador de ler o perfil de outro utilizador (testado via chamada direta à API, não só via UI).
- [ ] Eliminação de conta cumpre soft-delete de 30 dias e bloqueia se houver contratos ativos.
- [ ] Sessões persistem corretamente após fechar e reabrir a app (refresh automático).
- [ ] Nenhuma mensagem de erro revela se um email existe ou não na base de dados.

## Testes unitários

- Validação de formato de email
- Validação de força de password
- Lógica de `AuthStateNotifier` (transições de estado)

## Testes de integração

- Signup → verificação de email → onboarding redirect
- Login com credenciais erradas 5x → bloqueio → espera → desbloqueio
- RLS: tentar aceder ao perfil de outro utilizador via API direta → deve falhar
- Account linking: registo por Google com email já existente por password

## Testes E2E (mobile)

- Fluxo completo de registo até ao Dashboard (Noivo)
- Fluxo completo de registo até ao Dashboard (Fornecedor)
- Fluxo de "esqueci-me da password" com deep link real
- Eliminação de conta com e sem contratos ativos

## Testes de segurança

- Tentativa de SQL injection nos campos de registo/login
- Verificação de que passwords nunca aparecem em logs
- Verificação de rate limiting sob carga (ferramenta tipo k6)
