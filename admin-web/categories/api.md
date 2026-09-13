# Categories (admin-web) — API

Leitura e escrita diretas via SDK Supabase (RLS garante que só admin escreve — ver `database.md`). Sem Edge Function: não há transição de estado nem necessidade de atomicidade entre tabelas (ao contrário de `admin-web/partners/`), só um `insert`/`update` de uma linha.

```
supabase.from('partner_categories').select('*, partner_profile_categories(count)')
supabase.from('partner_categories').insert({ slug, label_pt })
supabase.from('partner_categories').update({ is_active }).eq('id', categoryId)
```

Não regista em `audit_logs` — ativar/desativar uma categoria é uma operação de baixo risco e reversível (ao contrário de aprovar/rejeitar/suspender um parceiro); revisitar se a experiência mostrar necessidade.
