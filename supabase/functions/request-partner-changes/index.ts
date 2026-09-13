import { handlePartnerTransition } from "../_shared/partner-transition.ts";

// Contract: admin-web/partners/api.md
Deno.serve((req) =>
  handlePartnerTransition(req, "request_changes_from_partner", (body) => ({
    p_partner_id: body.partner_id,
    p_reason: body.reason,
  })),
);
