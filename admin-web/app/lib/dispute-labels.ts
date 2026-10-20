// Rótulos das disputas (migração 109), partilhados por páginas e formulários.
export const DISPUTE_REASONS: Record<string, string> = {
  service_not_provided: "Serviço não prestado",
  service_different: "Serviço diferente do combinado",
  partner_no_show: "O parceiro não apareceu",
  couple_no_show: "O casal não apareceu / não respondeu",
  payment_issue: "Problema com pagamento",
  other: "Outro",
};

export const DISPUTE_RESOLUTIONS: Record<string, string> = {
  refund_full: "Reembolso total",
  refund_partial: "Reembolso parcial",
  partner_favor: "A favor do parceiro",
};
