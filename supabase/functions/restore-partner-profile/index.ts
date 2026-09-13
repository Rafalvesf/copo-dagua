import { handlePartnerTransition } from "../_shared/partner-transition.ts";

// Contract: admin-web/partners/api.md
Deno.serve((req) =>
  handlePartnerTransition(req, "restore_partner_profile", (body) => ({
    p_partner_id: body.partner_id,
  })),
);
