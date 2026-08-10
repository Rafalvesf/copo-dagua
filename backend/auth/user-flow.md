# Authentication — Fluxo do Utilizador

## Registo (Noivo ou Fornecedor)

```
Abrir app
  → Ecrã "Bem-vindo" (Entrar / Criar conta)
    → Criar conta
      → Escolher papel: "Vou casar-me" ou "Sou fornecedor"
        → Formulário: Nome, Email, Password
          → (opcional) Continuar com Google / Apple
        → Aceitar Termos e Política de Privacidade (checkbox obrigatório)
        → Submeter
          → Conta criada (estado: email não verificado)
          → Email de verificação enviado
          → Redireciona para ecrã "Verifica o teu email"
            → Utilizador abre email → clica no link → deep link volta à app
              → Email verificado → redireciona para Onboarding (mobile-app/onboarding/)
```

## Login

```
Ecrã "Bem-vindo"
  → Entrar
    → Email + Password (ou OAuth)
      → Sucesso → sessão criada
        → Se email não verificado → banner persistente "Verifica o teu email" (não bloqueia navegação, bloqueia transações)
        → Se onboarding incompleto → redireciona para Onboarding
        → Caso contrário → Dashboard
      → Falha → mensagem de erro genérica ("Email ou password incorretos") — nunca revelar se o email existe ou não (proteção contra enumeration attacks)
```

## Recuperação de password

```
Ecrã de login → "Esqueci-me da password"
  → Inserir email
    → Email enviado (mensagem genérica sempre, mesmo que o email não exista — anti-enumeration)
      → Utilizador clica no link → deep link para ecrã "Nova password"
        → Define nova password → confirma → login automático
```

## Eliminação de conta

```
Definições → Conta → Eliminar conta
  → Aviso: "Esta ação é permanente ao fim de 30 dias"
  → Confirmação por password
  → Se existirem contratos/pagamentos ativos → bloqueio com mensagem explicativa
  → Conta marcada como `pending_deletion`, logout forçado
```
