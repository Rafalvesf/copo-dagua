# Segurança da À Nossa!

Como protegemos o código e os dados para que não possam ser manipulados.
Quatro frentes, da mais importante para a menos.

## 1. Regras no servidor (a que conta)

Um cliente (app) nunca é de confiar: qualquer pessoa pode descompilar o APK,
ligar-se à API e enviar o que quiser. Por isso **a lógica crítica — taxas,
pagamentos, permissões, quem vê o quê — vive no Postgres (Supabase)**, em
funções `SECURITY DEFINER` com RLS, e não na app. É isto que impede a
manipulação a sério.

Estado atual (Supabase Advisor, 2026-11-16): **sem erros**. Nenhuma tabela
exposta sem RLS. Ações:

- **Corrigido** (migração `database/migrations/197_harden_function_search_path.sql`):
  três funções (`fee_region`, `event_display_name`, `newsletter_resubscribe`)
  tinham o `search_path` por fixar. A migração fixa-o, sem mudar comportamento.
  Aplicar com o processo normal de migrações.
- **Por design, não mexer:** os ~293 avisos "SECURITY DEFINER executável por
  anon/authenticated" são esperados — é assim que a API de RPC funciona. Cada
  função faz a sua própria verificação (`is_admin`, `is_event_member`, …). Não
  há aqui vulnerabilidade; revê caso a caso se alguma vez duvidares de uma.
- **A ligar no painel Supabase** (Authentication → Policies/Passwords):
  ativar *Leaked Password Protection* (verifica palavras-passe contra o
  HaveIBeenPwned). Toggle de projeto, não dá por migração.

Testes de RLS: `database/tests/rls_test_suite.sql`.

## 2. Proteção do repositório no GitHub

Impede que alguém (ou um engano) altere o código no `master` sem passar por PR
e pelos checks de CI. **Tem de ser ativado por ti** — o proxy desta sessão não
deixa o Claude escrever na API de administração do GitHub.

Opção A — pela interface: Settings → Branches → Add branch ruleset / protection
para `master`, e liga: *Require a pull request before merging*, *Require status
checks to pass* (`analyze-and-test`, `android`, `ios`), *Require linear
history*, *Require conversation resolution*, e desliga force-push e deletions.

Opção B — por comando (precisa do `gh` autenticado com permissão de admin):

```bash
gh api -X PUT repos/Rafalvesf/copo-dagua/branches/master/protection \
  --input - <<'JSON'
{
  "required_status_checks": { "strict": true, "contexts": ["analyze-and-test", "android", "ios"] },
  "enforce_admins": false,
  "required_pull_request_reviews": { "dismiss_stale_reviews": true, "required_approving_review_count": 0 },
  "restrictions": null,
  "required_linear_history": true,
  "allow_force_pushes": false,
  "allow_deletions": false,
  "required_conversation_resolution": true
}
JSON
```

Nota: `required_approving_review_count` fica em **0** porque trabalhas sozinho
(se fosse 1, nunca poderias fazer merge dos teus próprios PRs). Mesmo com 0,
continua a exigir PR + CI verde e a bloquear push direto e force-push. Quando
houver equipa, sobe para 1.

## 3. Ofuscação da app compilada

`--obfuscate` baralha os nomes no código Dart compilado; `--split-debug-info`
tira os símbolos para fora do binário. Sem isto, qualquer pessoa lê e altera a
lógica a partir do APK/IPA.

- Script: `scripts/build-release.sh` (App Bundle + IPA ofuscados).
- **Guardar sempre** a pasta `build/symbols/<data>/` de cada versão (fora do
  git) — é a única forma de ler os crashes dessa versão.
- Os builds de CI atuais (`native-build.yml`) são `--debug` só para validar
  que compila; os builds de loja usam este script.

## 4. Deteção de tampering / root

Defesa em profundidade no cliente: a app deteta root/jailbreak, emulador, app
re-assinado e debugger, e bloqueia-se. Não substitui o servidor (ponto 1).

- Esqueleto e política: `mobile-app/app/lib/core/security/security_gate.dart`
  (sem dependências novas; por omissão não deteta nada).
- Como ligar a deteção real (`freerasp`) e testar:
  `docs/security/anti-tamper.md`. **Por fazer e testar** — envolve build nativo,
  que não dá para validar fora do teu ambiente.

## Reportar uma falha de segurança

Em privado para o email de contacto dos Termos. Não abrir issue pública.
