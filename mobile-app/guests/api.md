# Guests — API

## Endpoints autenticados (casal, via SDK Supabase + RLS)

CRUD direto sobre `guests`, protegido por `is_wedding_member()` (ver `database.md`). Sem Edge Functions dedicadas para operações simples de leitura/escrita — o RLS já garante o isolamento.

## Edge Functions custom

| Função | Trigger | Descrição |
|---|---|---|
| `send-rsvp-invite` | "Enviar convite de RSVP" | Gera/confirma `rsvp_token`, envia email/SMS/WhatsApp com link `copodagua.pt/rsvp/{token}`, atualiza `invite_sent_at` e `rsvp_status = invited` |
| `get-rsvp-by-token` | Carregamento da página pública de RSVP | **Função pública** (sem autenticação). Recebe `token`, devolve dados do casamento e do convidado necessários para preencher a página (nomes dos noivos, data, se `plus_one_allowed`). Usa `service_role` internamente; nunca expõe outros convidados. |
| `submit-rsvp` | Convidado submete o formulário | **Função pública.** Valida `token`, atualiza `rsvp_status`, `plus_one_name`, `dietary_restrictions`, `guest_message`, `rsvp_responded_at`. Aplica rate limiting por token/IP (ver `tasks.md`). |
| `regenerate-rsvp-token` | Casal suspeita que o link foi partilhado indevidamente | Gera novo `rsvp_token`, invalidando o anterior |

## Risco técnico

As duas funções públicas (`get-rsvp-by-token`, `submit-rsvp`) são a única superfície da plataforma acessível sem autenticação nenhuma. Precisam do mesmo nível de atenção a rate limiting e abuso que demos ao login em Authentication (RN07 desse módulo) — um atacante a tentar tokens UUID aleatórios tem uma probabilidade desprezável de acertar, mas a função deve mesmo assim limitar tentativas por IP para não servir de vetor de negação de serviço.
