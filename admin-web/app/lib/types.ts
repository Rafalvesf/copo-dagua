// Mirrors database/migrations/005_partner_profile.sql and 006_admin_audit_log.sql.
// This module has no tables of its own — see admin-web/partners/database.md.

export type PartnerProfileStatus =
  | "draft"
  | "pending_review"
  | "changes_required"
  | "published"
  | "rejected"
  | "suspended";

export type PartnerProfile = {
  id: string;
  business_name: string;
  business_type: "individual" | "company";
  description: string;
  years_experience: number | null;
  team_size: number | null;
  service_areas: string[];
  nationwide: boolean;
  phone: string | null;
  website_url: string | null;
  instagram_url: string | null;
  facebook_url: string | null;
  cover_photo_url: string | null;
  status: PartnerProfileStatus;
  pricing_mode: "packages" | "quote_only";
  is_paused: boolean;
  rejection_reason: string | null;
  submitted_at: string | null;
  reviewed_at: string | null;
  reviewed_by: string | null;
  created_at: string;
  updated_at: string;
};

export type PartnerVerification = {
  partner_id: string;
  tax_id: string;
  billing_address: string;
  verification_notes: string | null;
};

export type PartnerPortfolioItem = {
  id: string;
  partner_id: string;
  media_url: string;
  media_type: "image" | "video";
  position: number;
};

// Mirrors database/migrations/028_partner_service_packages.sql.
export type ServicePackage = {
  id: string;
  partner_id: string;
  name: string;
  description: string;
  price: number;
  is_starting_price: boolean;
  position: number;
};

export type AuditLogEntry = {
  id: string;
  actor_id: string;
  action: string;
  target_table: string;
  target_id: string;
  metadata: Record<string, unknown>;
  created_at: string;
};

export type PartnerAction = "approve" | "reject" | "suspend" | "restore" | "request_changes";

// Which actions are valid from a given status — mirrors the table in
// admin-web/partners/state.md ("Ações disponíveis por estado"). Kept as a
// single source of truth so the UI never offers a transition the Edge
// Function contract (api.md) would reject as invalid_state.
//
// `changes_required` tem `[]` de propósito: o parceiro corrige o que
// falta e o próprio sistema reenvia para `pending_review` assim que os
// requisitos voltarem a estar todos válidos (trigger real, não uma ação
// de admin) — ver `database/migrations/026_partner_auto_submission.sql`.
export const ACTIONS_BY_STATUS: Record<PartnerProfileStatus, PartnerAction[]> = {
  pending_review: ["approve", "reject", "request_changes"],
  published: ["suspend"],
  suspended: ["restore"],
  rejected: [],
  changes_required: [],
  draft: [],
};

// Mirrors database/migrations/001_authentication.sql — see admin-web/users/database.md.
export type UserRole = "couple" | "partner" | "admin";
export type AccountStatus = "active" | "pending_deletion" | "suspended" | "deleted";

export type Profile = {
  id: string;
  role: UserRole;
  // `null` = conta anterior a 018_admin_rbac.sql (só relevante quando
  // role='admin' — `has_admin_permission()` trata `null` como 'admin').
  admin_role: "super_admin" | "admin" | "support" | "finance" | "moderator" | null;
  full_name: string;
  avatar_url: string | null;
  phone: string | null;
  email_verified_at: string | null;
  onboarding_completed: boolean;
  status: AccountStatus;
  created_at: string;
};

// Mirrors database/migrations/002_onboarding.sql + 003_wedding.sql — see admin-web/weddings/database.md.
export type Wedding = {
  id: string;
  owner_id: string;
  partner_name_1: string;
  partner_name_2: string | null;
  wedding_date: string | null;
  location: string | null;
  venue: string | null;
  estimated_guests: number | null;
  estimated_budget: number | null;
  status: string;
  created_at: string;
};

// Mirrors database/migrations/005_partner_profile.sql — see admin-web/categories/database.md.
export type PartnerCategory = {
  id: string;
  slug: string;
  label_pt: string;
  is_active: boolean;
};

// Mirrors database/migrations/009_quotations_bookings.sql — see backend/bookings/database.md.
export type BookingStatus =
  | "awaiting_deposit"
  | "confirmed"
  | "completed"
  | "expired"
  | "cancelled_by_couple"
  | "cancelled_by_partner"
  | "payment_overdue"
  | "disputed";

export type Booking = {
  id: string;
  booking_number: string;
  couple_id: string;
  partner_id: string;
  wedding_id: string;
  proposal_id: string;
  event_date: string;
  total_amount: number;
  deposit_amount: number;
  status: BookingStatus;
  hold_started_at: string;
  hold_expires_at: string;
  confirmed_at: string | null;
  completed_at: string | null;
  cancelled_at: string | null;
  created_at: string;
};

export type BookingEvent = {
  id: string;
  booking_id: string;
  event_type: string;
  old_status: BookingStatus | null;
  new_status: BookingStatus | null;
  actor_type: "couple" | "partner" | "admin" | "system";
  actor_id: string | null;
  metadata: Record<string, unknown>;
  created_at: string;
};

// Mirrors the table in admin-web/bookings/requirements.md RN01.
export const BOOKING_ACTIONS_BY_STATUS: Record<BookingStatus, ("confirm_deposit" | "complete")[]> = {
  awaiting_deposit: ["confirm_deposit"],
  confirmed: ["complete"],
  completed: [],
  expired: [],
  cancelled_by_couple: [],
  cancelled_by_partner: [],
  payment_overdue: [],
  disputed: [],
};

// Mirrors database/migrations/019_platform_settings.sql + 034_maintenance_mode.sql.
export type PlatformSettings = {
  id: 1;
  booking_min_days_before_event: number;
  default_booking_hold_hours: number;
  payment_grace_period_days: number;
  manual_partner_approval: boolean;
  review_requires_completed_booking: boolean;
  platform_commission_percentage: number;
  deposit_percentage: number;
  cancellation_penalty_days: number;
  maintenance_mode_couple: boolean;
  maintenance_mode_partner: boolean;
  updated_at: string;
  updated_by: string | null;
};

// Mirrors database/migrations/018_admin_rbac.sql.
export type AdminRole = "super_admin" | "admin" | "support" | "finance" | "moderator";

// Mirrors database/migrations/020_payments.sql.
export type PaymentType = "deposit" | "installment" | "final_payment" | "refund";
export type PaymentStatus = "pending" | "paid" | "overdue" | "refunded" | "failed";

export type Payment = {
  id: string;
  booking_id: string;
  payer_id: string;
  partner_id: string;
  type: PaymentType;
  amount: number;
  currency: string;
  due_at: string | null;
  paid_at: string | null;
  status: PaymentStatus;
  provider: string | null;
  provider_payment_id: string | null;
  created_at: string;
};

// Mirrors database/migrations/039_task_engine.sql — o "catálogo" do
// motor de tarefas do lado da app (mobile-app/app/lib/core/tasks/).
// `eligibility_rule`/`completion_rule` são chaves de texto estruturadas,
// nunca código arbitrário — só as chaves já implementadas no motor
// (TASK_RULE_KEYS abaixo) têm efeito real.
export type TaskType = "automatic" | "manual" | "system_action";
export type TaskPriority = "low" | "normal" | "high" | "urgent";

// `completion_behavior` (como a tarefa se conclui) e `display_type` (o
// que é mostrado ao casal — "SUGESTÃO"/"PARA CONCLUIR") são conceitos
// distintos, nunca confundir — ver database/migrations/
// 043_task_completion_behavior.sql e 044_task_display_type.sql.
export type TaskCompletionBehavior = "action_completed" | "cta_opened" | "manual";
export type TaskDisplayType = "suggestion" | "required";

// `action_type` é só descritivo/admin — o motor da app
// (task_engine_controller.dart) nunca lê este campo, só
// `eligibility_rule`/`completion_rule`/`completion_behavior`.
export type TaskActionType =
  | "explore"
  | "create"
  | "edit"
  | "book"
  | "request_quote"
  | "review"
  | "pay"
  | "confirm"
  | "contact"
  | "complete_manually"
  | "open_section"
  | "none";

export type TaskTemplate = {
  id: string;
  key: string;
  title: string;
  description: string | null;
  category: string;
  task_type: TaskType;
  priority: TaskPriority;
  partner_category_slug: string | null;
  recommended_days_before_event: number | null;
  due_days_before_event: number | null;
  action_route: string | null;
  eligibility_rule: string;
  completion_rule: string | null;
  position: number;
  active: boolean;
  completion_behavior: TaskCompletionBehavior;
  display_type: TaskDisplayType;
  action_type: TaskActionType | null;
  cta_label: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
};

export const COMPLETION_BEHAVIOR_KEYS: { key: TaskCompletionBehavior; label: string }[] = [
  { key: "action_completed", label: "Ação concluída (dados reais confirmam)" },
  { key: "cta_opened", label: "Ao abrir o CTA (primeiro clique)" },
  { key: "manual", label: "Manual (casal marca \"Feito\")" },
];

export const DISPLAY_TYPE_KEYS: { key: TaskDisplayType; label: string }[] = [
  { key: "suggestion", label: "Sugestão" },
  { key: "required", label: "Para concluir" },
];

export const ACTION_TYPE_KEYS: { key: TaskActionType; label: string }[] = [
  { key: "explore", label: "Explorar" },
  { key: "create", label: "Criar" },
  { key: "edit", label: "Editar" },
  { key: "book", label: "Reservar" },
  { key: "request_quote", label: "Pedir orçamento" },
  { key: "review", label: "Rever" },
  { key: "pay", label: "Pagar" },
  { key: "confirm", label: "Confirmar" },
  { key: "contact", label: "Contactar" },
  { key: "complete_manually", label: "Concluir manualmente" },
  { key: "open_section", label: "Abrir secção" },
  { key: "none", label: "Nenhuma" },
];

// Espelha exatamente os `switch` de `_isEligible`/`_isComplete` em
// mobile-app/app/lib/core/tasks/task_engine_controller.dart — uma chave
// fora desta lista nunca é avaliada como verdadeira (fica sempre
// inelegível/incompleta), por isso o admin só pode escolher destas.
export const ELIGIBILITY_RULE_KEYS = [
  { key: "always", label: "Sempre (sem condição)", needsCategory: false },
  { key: "guests_with_pending_rsvp", label: "Há convidados com RSVP pendente", needsCategory: false },
  { key: "enough_confirmed_guests_for_seating", label: "Convidados confirmados chegam para lugares", needsCategory: false },
  { key: "explore_category", label: "Categoria ainda por explorar (sem favorito/pedido/reserva)", needsCategory: true },
  { key: "quote_category", label: "Categoria tem favorito mas sem pedido de orçamento", needsCategory: true },
  { key: "book_category", label: "Categoria tem proposta enviada mas sem reserva confirmada", needsCategory: true },
] as const;

export const COMPLETION_RULE_KEYS = [
  { key: "budget_defined", label: "Orçamento foi definido", needsCategory: false },
  { key: "has_guests", label: "Lista de convidados tem pelo menos 1", needsCategory: false },
  { key: "no_pending_rsvp", label: "Já não há RSVP pendente", needsCategory: false },
  { key: "seating_started", label: "Mapa de lugares foi iniciado", needsCategory: false },
  { key: "has_interest_in_category", label: "Há favorito, pedido ou reserva nessa categoria", needsCategory: true },
  { key: "has_quote_for_category", label: "Há pedido de orçamento ou reserva nessa categoria", needsCategory: true },
  { key: "has_confirmed_booking_for_category", label: "Há reserva confirmada nessa categoria", needsCategory: true },
] as const;

// Mirrors database/migrations/045_reviews.sql. `status` — nunca
// DELETE, ver a coluna homónima na migração para o significado de
// cada valor (moderação, `admin-web/moderation/`).
export type ReviewStatus = "published" | "flagged" | "removed";

export type Review = {
  id: string;
  booking_id: string;
  wedding_id: string;
  partner_id: string;
  couple_id: string;
  rating: number;
  comment: string | null;
  partner_response: string | null;
  partner_response_at: string | null;
  status: ReviewStatus;
  created_at: string;
  updated_at: string;
};

// Mirrors database/migrations/047_support_tickets.sql. `dispute_delay`
// resolve-se nesta mesma aba — pedido explícito do utilizador, nunca um
// módulo `admin-web/disputes/` separado.
export type SupportTicketStatus = "open" | "pending" | "resolved";
export type SupportTicketCategory = "general" | "dispute_delay";

export type SupportTicket = {
  id: string;
  user_id: string;
  booking_id: string | null;
  category: SupportTicketCategory;
  subject: string;
  description: string;
  status: SupportTicketStatus;
  resolution_note: string | null;
  resolved_at: string | null;
  resolved_by: string | null;
  created_at: string;
  updated_at: string;
};
