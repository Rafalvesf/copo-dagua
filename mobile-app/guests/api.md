# Guests — API

## Endpoints autenticados (casal, via SDK Supabase + RLS)

CRUD direto sobre `guests`, protegido por `is_wedding_member()` (ver `database.md`). Sem Edge Functions dedicadas para operações simples de leitura/escrita — o RLS já garante o isolamento.

## RPCs do convidado (autenticado) — implementadas ✅

| Função | Chamada a partir de | Descrição |
|---|---|---|
| `lookup_wedding_by_guest_code(p_code)` | `register_screen.dart`, antes do signup | **Pública** (`anon`). Recebe o `guest_code`, devolve só os nomes do casal — nada sensível. Valida o código antes de existir conta. |
| `join_wedding_by_code(p_code)` | `auth_controller.dart#register`, `guest_home_providers.dart#joinWeddingByCode` | Autenticada. Associa a conta a `wedding_guest_members` e tenta ligar automaticamente a linha de `guests` com o mesmo email (`linked_profile_id`). |
| `update_own_guest_info(p_phone, p_dietary_restrictions, p_plus_one_name)` | `guest_home_providers.dart` | Autenticada, `security definer`. Só altera colunas da própria linha (`linked_profile_id = auth.uid()`), nunca `rsvp_status` ou outros campos geridos pelo casal. |
| `get_my_seating_table(p_wedding_id)` | `guest_home_providers.dart` | Autenticada. Devolve só o número da mesa do próprio convidado. |
| `get_my_table_roster(p_wedding_id)` | `guest_home_providers.dart` | Autenticada. Devolve só quem mais está sentado na mesma mesa. |

Nenhuma destas exige `service_role` do lado do cliente — todas correm como `security definer` dentro do Postgres, com a validação de `auth.uid()` no corpo da função (ver `050_wedding_guest_code.sql`, `067_guest_self_service.sql`, `068_guest_table_roster.sql`).

## Proposto — RPC do wizard de RSVP (ainda não implementada)

| Função | Descrição |
|---|---|
| `submit_own_rsvp(p_status, p_side, p_relationship_label, p_menu_choice, p_dietary_restrictions, p_companions jsonb)` | Autenticada, `security definer`, restrita a `linked_profile_id = auth.uid()`. `p_companions` é um array `[{full_name, menu_choice, dietary_restrictions}]`; a função valida `length(p_companions) <= companions_limit` antes de gravar, faz upsert em `guest_companions` (por `guest_id`, substituindo a lista completa), atualiza `guests.rsvp_status/side/relationship_label/menu_choice/dietary_restrictions/rsvp_wizard_completed_at`, e insere uma linha em `guest_rsvp_events`. Nunca apaga acompanhantes só porque `p_status = 'declined'` (RN11, `requirements.md`) — a UI decide se mostra o wizard de novo ou preserva os dados. |

Ver `database.md` para o esquema (`guest_companions`, `guest_rsvp_events`, `070_guest_rsvp_wizard.sql`).

## Superseded (histórico)

Antes da revisão de RN02 (2026-09-06), esta spec assumia RSVP **anónimo por token**, sem conta — as funções abaixo chegaram a ser desenhadas mas nunca implementadas, e deixaram de fazer parte do plano:

- `send-rsvp-invite` — geraria/confirmaria `rsvp_token` e enviaria o convite por email/SMS/WhatsApp
- `get-rsvp-by-token` — carregaria a página pública de RSVP a partir do token
- `submit-rsvp` — submeteria a resposta pública, sem autenticação
- `regenerate-rsvp-token` — invalidaria um token partilhado indevidamente

Mantidas aqui só como registo do porquê da mudança de arquitetura — ver `README.md` para a decisão atual.
