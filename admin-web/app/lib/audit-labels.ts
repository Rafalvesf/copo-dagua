// Texto legível das ações do registo de auditoria (audit_logs.action),
// usado no dashboard e no histórico dos parceiros.
const ACTIONS: Record<string, string> = {
  approve_partner: "aprovou um parceiro",
  reject_partner: "rejeitou um parceiro",
  suspend_partner: "suspendeu um parceiro",
  restore_partner: "restaurou um parceiro",
  request_changes_partner: "pediu alterações a um parceiro",
  auto_submit_partner: "perfil de parceiro enviado para revisão",
  featured: "pôs um parceiro em destaque",
  unfeatured: "tirou um parceiro do destaque",
  delete_user: "eliminou uma conta",
  suspend_user: "suspendeu uma conta",
  restore_user: "reativou uma conta",
  create_user: "criou uma conta",
  payment_refunded: "fez um reembolso",
  payment_partially_refunded: "fez um reembolso parcial",
  dispute_refund_full: "fechou uma disputa com reembolso total",
  dispute_refund_partial: "fechou uma disputa com reembolso parcial",
  dispute_partner_favor: "fechou uma disputa a favor do parceiro",
};

export function auditActionLabel(action: string): string {
  return ACTIONS[action] ?? action.replace(/_/g, " ");
}

// Histórico das reservas (booking_events).
const BOOKING_EVENTS: Record<string, string> = {
  created: "Reserva criada",
  booking_created: "Reserva criada",
  deposit_paid: "Sinal pago",
  deposit_confirmed: "Sinal confirmado",
  final_payment_paid: "Restante pago",
  payment_confirmed: "Pagamento confirmado",
  confirmed: "Reserva confirmada",
  completed: "Reserva concluída",
  booking_completed: "Reserva concluída",
  deposit_confirmed_stripe: "Sinal pago (Stripe)",
  deposit_confirmed_manual: "Sinal confirmado à mão pelo admin",
  deposit_confirmed_stub: "Sinal confirmado (teste)",
  deposit_manual_reverted: "Confirmação manual do sinal anulada",
  final_payment_confirmed_stripe: "Restante pago (Stripe)",
  expired: "Prazo do sinal expirou",
  cancelled_by_couple: "Cancelada pelo organizador",
  cancelled_by_partner: "Cancelada pelo parceiro",
  refunded: "Reembolso feito",
  dispute_opened: "Disputa aberta",
  dispute_resolved: "Disputa resolvida",
};
const ACTORS: Record<string, string> = { couple: "organizador", partner: "parceiro", admin: "admin", system: "automático" };

export function bookingEventLabel(type: string): string {
  return BOOKING_EVENTS[type] ?? type.replace(/_/g, " ");
}
export function actorLabel(actor: string): string {
  return ACTORS[actor] ?? actor;
}
