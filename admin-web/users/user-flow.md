# Users (admin-web) — Fluxo do Utilizador

```
/users
  → Lista, filtro por omissão: todos, role=todos, status=active
    → Pesquisa por nome
    → Filtra por role (Casal/Parceiro/Admin) e status (Ativo/Suspenso)
    → Admin abre uma conta
      → /users/:id
        → Vê identidade + estado
        → Se role=partner: [ Ver perfil de parceiro → admin-web/partners/:id ]
        → Se role=couple: [ Ver casamento → admin-web/weddings/:id ]
        → Decide:
          ├── Suspender (só se status=active e não for a própria conta — RN03)
          │     → motivo obrigatório → confirma → suspend-user-account
          └── Reativar (só se status=suspended)
                → confirma → restore-user-account
```
