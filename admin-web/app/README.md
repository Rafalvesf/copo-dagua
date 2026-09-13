# admin-web (código)

Next.js 16 (App Router) + `@supabase/ssr`. Esta pasta é o código real do primeiro módulo de `admin-web/` — a documentação funcional (objetivo, regras de negócio, wireframes, contrato de API) vive em [`../partners/`](../partners/), não aqui. Ver o padrão equivalente em `mobile-app/app/` (código) vs. `mobile-app/onboarding/`, `mobile-app/wedding/`, etc. (documentação).

## Âmbito

Só o módulo Partners (`/login`, `/partners`, `/partners/[id]`). Sem dashboard de KPIs, bookings, payments, disputes, reviews, categories, settings — ver `../partners/tasks.md`, "Nota de arquiteto".

## Autorização

`is_admin()` flat (`profiles.role = 'admin'`), não RBAC — decisão registada em `../../docs/architecture/RLS_POLICY.md`. `proxy.ts` só faz um redirect otimista (sessão presente ou não); a verificação real de que o utilizador é admin acontece em `lib/dal.ts` (`requireAdmin()`), que consulta a base de dados a cada Server Component/Action protegido — nunca confiar só no frontend (ver `../partners/requirements.md`, RN01).

## Correr localmente

Não existe ainda nenhum projeto Supabase real provisionado para este código (ver `../partners/dependencies.md`, "Bloqueios conhecidos") — sem isso, o login e as queries a `partner_profiles`/`audit_logs` não têm com que falar. Uma vez que exista um projeto:

1. `supabase db push` (ou aplicar manualmente `database/migrations/000` a `007`) e fazer deploy das quatro Edge Functions em `../../supabase/functions/`.
2. Copiar `.env.local.example` para `.env.local` e preencher `NEXT_PUBLIC_SUPABASE_URL`/`NEXT_PUBLIC_SUPABASE_ANON_KEY`.
3. Criar manualmente pelo menos um `profiles.role = 'admin'` (não há self-signup em `admin-web/`, ver `../partners/user-flow.md`).
4. `npm run dev` e abrir `http://localhost:3000`.

Até lá, `npm run dev` sobe a app e renderiza o shell (login, layout), mas qualquer chamada real ao Supabase falha — o mesmo estado em que está `mobile-app/app/` (ver `ROADMAP.md` da raiz, "Marco: implementação e testes da fundação").
