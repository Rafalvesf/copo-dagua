# Partners (admin-web) — Fluxo do Utilizador

## Login

```
Abrir admin-web
  → Ecrã de login (email + password, mesma auth.users do Supabase)
    → Sucesso, profiles.role = 'admin' → Dashboard/Partners
    → Sucesso, profiles.role != 'admin' → sessão terminada, mensagem genérica
      ("Esta conta não tem acesso a esta aplicação") — nunca revelar que
      a conta existe mas não é admin, mesmo padrão anti-enumeration de
      backend/auth/user-flow.md
    → Falha de credenciais → mensagem de erro genérica
```

Não existe self-signup em `admin-web/` — contas admin são criadas manualmente (`profiles.role = 'admin'`) fora deste fluxo. Ver `dependencies.md`.

## Rever e decidir sobre um parceiro (fluxo principal)

```
/partners
  → Lista, filtro por omissão: status = pending_review
    → Admin abre um parceiro
      → /partners/:id
        → Vê dados de negócio, categorias, portefólio, dados fiscais
        → Vê histórico de decisões anteriores (audit_logs), se existir
        → Decide:
          ├── Aprovar
          │     → confirma → approve-partner-profile
          │       → status = published, reviewed_at/reviewed_by gravados
          │       → audit_logs regista a ação
          │       → volta à lista, parceiro sai do filtro "pending_review"
          │
          ├── Rejeitar
          │     → escreve motivo (obrigatório) → confirma
          │       → reject-partner-profile
          │       → status = rejected, rejection_reason gravado
          │       → audit_logs regista a ação
          │       → volta à lista
          │
          ├── Suspender (só visível quando status = published)
          │     → escreve motivo (obrigatório) → confirma
          │       → suspend-partner-profile
          │       → status = suspended
          │       → audit_logs regista a ação
          │
          └── Restaurar (só visível quando status = suspended)
                → confirma → restore-partner-profile
                  → status = published
                  → audit_logs regista a ação
```

## Falha de ação

```
Admin clica em Aprovar/Rejeitar/Suspender/Restaurar
  → Edge Function falha (rede, ou status já mudou entretanto — ver edge-cases.md)
    → Erro mostrado inline, ação não aplicada, UI não otimista
      (o estado só muda depois de confirmação do servidor, nunca antes)
```
