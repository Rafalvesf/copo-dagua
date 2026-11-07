// Migrações por correr no SQL Editor do Supabase (página /migrations,
// pedido 2026-11-03: "vai colocando as migrações numa página no admin e
// quando é feita tiras"). Cada entrada tem uma verificação: quando a
// migração já está na base de dados, sai sozinha da lista.
//
// Ao criar uma migração nova, acrescentar aqui (por ordem).

export type MigrationCheck =
  | { kind: "column"; table: string; column: string }
  | { kind: "table"; table: string }
  | { kind: "settings"; test: (s: Record<string, unknown>) => boolean };

export type PendingMigration = {
  file: string;
  title: string;
  what: string;
  after?: string;
  check: MigrationCheck;
};

const tierPct = (v: unknown, i: number) =>
  Array.isArray(v) ? Number((v[i] as { pct?: unknown } | undefined)?.pct) : NaN;

export const MIGRATIONS: PendingMigration[] = [
  {
    file: "145_support_attachments.sql",
    title: "Fotografias no «Reportar um erro»",
    what: "Bucket privado para anexos e coluna attachments nos pedidos de suporte.",
    check: { kind: "column", table: "support_tickets", column: "attachments" },
  },
  {
    file: "146_admin_message_styles.sql",
    title: "Mensagens da Equipa: estilos",
    what: "Notificação, banner e mensagem direta; validade e fio da equipa.",
    check: { kind: "column", table: "admin_messages", column: "style" },
  },
  {
    file: "147_team_message_image.sql",
    title: "Mensagens da Equipa: imagem",
    what: "Imagem otimizada nas mensagens (bucket team-media).",
    after: "146",
    check: { kind: "column", table: "admin_messages", column: "image_url" },
  },
  {
    file: "148_banner_dismiss_push_image.sql",
    title: "Fechar banners e imagem nas notificações",
    what: "Banners fechados ficam fechados em todos os dispositivos; imagem nas notificações.",
    after: "147",
    check: { kind: "table", table: "admin_message_dismissals" },
  },
  {
    file: "149_event_tickets.sql",
    title: "Bilhetes para eventos pagos",
    what: "Venda de bilhetes com Stripe; o organizador paga 4% + taxa da Stripe.",
    check: { kind: "table", table: "event_tickets" },
  },
  {
    file: "150_organizer_top_tier_3.sql",
    title: "Comissões: 4% até 2 000 € e 3% acima",
    what: "3.º escalão do organizador e do parceiro passa de 2,5% para 3%.",
    check: {
      kind: "settings",
      test: (s) => tierPct(s.organizer_fee_tiers, 2) === 3 && tierPct(s.partner_fee_tiers, 2) === 3,
    },
  },
  {
    file: "151_partner_referrals_founders.sql",
    title: "Convites do parceiro e Parceiros Fundadores",
    what: "A cada 5 clientes trazidos (que pagam ≥ 500 €), o 5.º sem comissão; primeiros 100 fundadores.",
    after: "150",
    check: { kind: "table", table: "partner_referrals" },
  },
  {
    file: "152_ticket_refunds.sql",
    title: "Reembolsos e cancelamento de eventos",
    what: "Reembolsar bilhetes e cancelar eventos pagos com reembolso total.",
    after: "149",
    check: { kind: "column", table: "event_tickets", column: "refunded_at" },
  },
  {
    file: "153_private_paid_events.sql",
    title: "Eventos privados e pagos",
    what: "Com o código ou link, paga o bilhete e entra logo; sem bilhete não se entra.",
    after: "152",
    check: { kind: "column", table: "event_tickets", column: "invite_guest_id" },
  },
  {
    file: "154_funnel_events.sql",
    title: "Funil de conversão",
    what: "Registo anónimo dos passos da app para a página Funil.",
    check: { kind: "table", table: "funnel_events" },
  },
  {
    file: "155_partner_promotions.sql",
    title: "Destaque pago e destaques personalizados",
    what: "Parceiros em destaque (+6% nas reservas do destaque, máx. 6 por categoria e zona) e destaques/sugestões à medida de cada cliente.",
    after: "151",
    check: { kind: "table", table: "partner_promotions" },
  },
  {
    file: "156_gift_envelopes.sql",
    title: "Envelope digital",
    what: "Convidados oferecem por transferência direta para o IBAN; os anfitriões veem quem, quanto e a mensagem.",
    check: { kind: "table", table: "gift_envelopes" },
  },
  {
    file: "157_notifications_no_booking_number.sql",
    title: "Notificações mais bonitas",
    what: "Título curto + subtítulo com quem + o essencial (versão B); sem número de reserva; valores como 4 500 € e datas como 10 nov., às 18:00.",
    after: "156",
    check: { kind: "column", table: "platform_settings", column: "notification_copy_version" },
  },
  {
    file: "158_ticket_qr_guest_sections.sql",
    title: "Bilhete com QR + o que os convidados veem",
    what: "Código de entrada em cada bilhete (o organizador lê o QR à porta) e o organizador escolhe que partes do evento os convidados veem.",
    after: "152",
    check: { kind: "column", table: "event_tickets", column: "check_in_code" },
  },
  {
    file: "159_organizer_permissions.sql",
    title: "O que cada co-organizador pode fazer",
    what: "O organizador principal liga e desliga as permissões de cada co-organizador (evento, convidados, tarefas, conversas, bilhetes, orçamento) ou retira-o.",
    after: "158",
    check: { kind: "column", table: "wedding_collaborators", column: "permissions" },
  },
  {
    file: "160_gift_shop.sql",
    title: "Lista de presentes: loja dos parceiros + desejos",
    what: "Parceiros vendem produtos para as listas de presentes (pagos na app ao parceiro); o organizador escreve o que precisa e os convidados reservam e compram fora.",
    after: "159",
    check: { kind: "table", table: "gift_list_items" },
  },
  {
    file: "161_partner_pro_founders_admin.sql",
    title: "Plano Pro dos parceiros + fundadores no admin",
    what: "Pro a 19 €/mês ou 190 €/ano: comissão −1 ponto, cliente grátis a cada 3, destaque +4%, selo, visibilidade, estatísticas, loja sem limites; fundadores e Pro no admin.",
    after: "160",
    check: { kind: "column", table: "partner_profiles", column: "pro_until" },
  },
  {
    file: "162_public_rsvp_link.sql",
    title: "Convite geral: responder sem conta",
    what: "O mesmo link para todos: quem abre vê o convite completo e responde sem conta (nome, acompanhantes, menu, alergias). Evento privado fica em Pedidos para entrar com as respostas.",
    after: "159",
    check: { kind: "column", table: "guest_join_requests", column: "answers" },
  },
];

export const RAW_BASE = "https://raw.githubusercontent.com/Rafalvesf/copo-dagua/master/database/migrations/";
export const GITHUB_BASE = "https://github.com/Rafalvesf/copo-dagua/blob/master/database/migrations/";
