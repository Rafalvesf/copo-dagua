import { createClient } from "jsr:@supabase/supabase-js@2";
import { stripeClient } from "../_shared/stripe.ts";

// Faturas das comissões no InvoiceXpress (2026-10-28, migração 131).
// Corre de hora a hora (pg_cron + pg_net, segredo `x-push-secret`).
//
// Emite faturas-recibo com IVA a 23% incluído e envia-as por email:
// - ao organizador, pela taxa de serviço (`commission_cents` do pagamento);
// - ao parceiro, pela taxa À Nossa! descontada quando o dinheiro é
//   libertado (`payments.partner_fee_amount`);
// - notas de crédito quando o pagamento é reembolsado na totalidade.
//
// Segredos (Supabase → Edge Functions → Secrets):
// - INVOICEXPRESS_ACCOUNT  (o nome da conta: <conta>.app.invoicexpress.com)
// - INVOICEXPRESS_API_KEY
// - INVOICEXPRESS_TAX_NAME (opcional, por omissão "IVA23")
// - INVOICEXPRESS_ALLOW_TEST=1 (opcional: fatura também pagamentos do modo
//   de teste da Stripe — só numa conta InvoiceXpress de testes!)
// Sem a conta/chave a função não faz nada.

// deno-lint-ignore no-explicit-any
type Admin = any;
type Kind = "organizer_fee" | "partner_fee" | "credit_organizer" | "credit_partner";

const VAT = 0.23;
const MAX_PER_RUN = 40;

Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("method not allowed", { status: 405 });
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: cfg } = await admin.rpc("push_config");
  const secret = (cfg as Record<string, string> | null)?.push_secret;
  if (!secret || req.headers.get("x-push-secret") !== secret) return new Response("forbidden", { status: 403 });

  // Aceita também os nomes alternativos usados no painel.
  const env = (...names: string[]) => names.map((n) => Deno.env.get(n)?.trim()).find((v) => v);
  const account = env("INVOICEXPRESS_ACCOUNT", "INVOICEXPRESS_API_ACCOUNT")
    ?.replace(/^https?:\/\//, "").replace(/\.app\.invoicexpress\.com.*$/, "");
  const apiKey = env("INVOICEXPRESS_API_KEY", "INVOICEXPRESS_KEY", "IVOICEXPRESS_API_KEY");
  if (!account || !apiKey) {
    // Diagnóstico: só os NOMES dos segredos parecidos (nunca os valores).
    const similar = Object.keys(Deno.env.toObject()).filter((k) => /voice|express|fcm/i.test(k));
    return Response.json({ skipped: "not_configured", has_account: Boolean(account), has_key: Boolean(apiKey), similar });
  }
  const ix = new InvoiceXpress(account, apiKey, Deno.env.get("INVOICEXPRESS_TAX_NAME") || "IVA23");
  const allowTest = Deno.env.get("INVOICEXPRESS_ALLOW_TEST") === "1";
  const stripe = stripeClient();

  const { data: done } = await admin.from("commission_invoices").select("payment_id, kind, status, attempts");
  const issued = new Map<string, { status: string; attempts: number }>();
  for (const d of (done ?? []) as { payment_id: string; kind: string; status: string; attempts: number }[]) {
    issued.set(`${d.payment_id}:${d.kind}`, { status: d.status, attempts: d.attempts });
  }
  // Volta a tentar as que falharam, no máximo 5 vezes.
  const pending = (id: string, kind: Kind) => {
    const r = issued.get(`${id}:${kind}`);
    return !r || (r.status === "failed" && r.attempts < 5);
  };

  const { data: rows } = await admin
    .from("payments")
    .select("id, status, payer_id, partner_id, provider_payment_id, paid_at, released_at, partner_fee_amount, refunded_amount, bookings(booking_number)")
    .in("status", ["paid", "refunded"])
    .not("paid_at", "is", null)
    .order("paid_at", { ascending: true })
    .limit(500);

  const out: Record<string, string[]> = { issued: [], failed: [], skipped: [] };
  let work = 0;

  for (const p of (rows ?? []) as PaymentRow[]) {
    if (work >= MAX_PER_RUN) break;
    const sid = p.provider_payment_id ?? "";
    if (!sid.startsWith("pi_")) continue;
    const booking = (Array.isArray(p.bookings) ? p.bookings[0] : p.bookings)?.booking_number ?? "";

    const needOrg = pending(p.id, "organizer_fee");
    const needPartner = p.released_at != null && Number(p.partner_fee_amount ?? 0) > 0 && pending(p.id, "partner_fee");
    const fullyRefunded = p.status === "refunded";
    const needCreditOrg = fullyRefunded && issued.get(`${p.id}:organizer_fee`)?.status === "issued" && pending(p.id, "credit_organizer");
    const needCreditPartner = fullyRefunded && issued.get(`${p.id}:partner_fee`)?.status === "issued" && pending(p.id, "credit_partner");
    if (!needOrg && !needPartner && !needCreditOrg && !needCreditPartner) continue;
    work++;

    let intent;
    try {
      intent = await stripe.paymentIntents.retrieve(sid);
    } catch (e) {
      console.error("stripe retrieve failed", p.id, (e as Error).message);
      continue;
    }
    if (!intent.livemode && !allowTest) continue;
    const commission = Number(intent.metadata?.commission_cents ?? 0) / 100;

    // Organizador: taxa de serviço. Reembolsado antes de faturar → não fatura.
    if (needOrg) {
      if (commission <= 0 || fullyRefunded) {
        await record(admin, p.id, "organizer_fee", 0, "skipped");
        out.skipped.push(`${p.id}:organizer_fee`);
      } else {
        const client = await organizerClient(admin, p.payer_id);
        await issue(admin, ix, out, p.id, "organizer_fee", commission, client, {
          item: "Taxa de serviço À Nossa!",
          description: `Taxa de serviço da reserva ${booking} (proteção de pagamento)`,
        });
      }
    }

    if (needPartner) {
      const fee = Number(p.partner_fee_amount);
      const client = await partnerClient(admin, p.partner_id);
      await issue(admin, ix, out, p.id, "partner_fee", fee, client, {
        item: "Taxa de parceiro À Nossa!",
        description: `Taxa À Nossa! sobre a reserva ${booking}`,
      });
    }

    if (needCreditOrg) {
      const { amount, providerId } = await issuedDoc(admin, p.id, "organizer_fee");
      const client = await organizerClient(admin, p.payer_id);
      await issue(admin, ix, out, p.id, "credit_organizer", amount, client, {
        item: "Taxa de serviço À Nossa!",
        description: `Devolução da taxa de serviço da reserva ${booking} (reembolso)`,
        credit: true,
        ownerId: providerId,
      });
    }

    if (needCreditPartner) {
      const { amount, providerId } = await issuedDoc(admin, p.id, "partner_fee");
      const client = await partnerClient(admin, p.partner_id);
      await issue(admin, ix, out, p.id, "credit_partner", amount, client, {
        item: "Taxa de parceiro À Nossa!",
        description: `Devolução da taxa À Nossa! da reserva ${booking} (reembolso)`,
        credit: true,
        ownerId: providerId,
      });
    }
  }

  return Response.json(out);
});

type PaymentRow = {
  id: string;
  status: string;
  payer_id: string | null;
  partner_id: string | null;
  provider_payment_id: string | null;
  paid_at: string | null;
  released_at: string | null;
  partner_fee_amount: number | null;
  refunded_amount: number | null;
  bookings: { booking_number: string } | { booking_number: string }[] | null;
};

type Client = { name: string; code: string; email: string | null; fiscal_id: string; address?: string; city?: string; postal_code?: string };

async function issue(
  admin: Admin,
  ix: InvoiceXpress,
  out: Record<string, string[]>,
  paymentId: string,
  kind: Kind,
  amount: number,
  client: Client,
  doc: { item: string; description: string; credit?: boolean; ownerId?: number | null },
) {
  const key = `${paymentId}:${kind}`;
  try {
    const res = await ix.issue({
      type: doc.credit ? "credit_notes" : "invoice_receipts",
      uid: key,
      client,
      item: doc.item,
      description: doc.description,
      grossAmount: amount,
      ownerId: doc.ownerId ?? null,
    });
    await record(admin, paymentId, kind, amount, "issued", res);
    out.issued.push(key);
  } catch (e) {
    const msg = (e as Error).message.slice(0, 500);
    console.error("invoice failed", key, msg);
    await record(admin, paymentId, kind, amount, "failed", undefined, msg);
    out.failed.push(key);
  }
}

async function record(
  admin: Admin,
  paymentId: string,
  kind: Kind,
  amount: number,
  status: "issued" | "failed" | "skipped",
  res?: { id: number; sequence_number: string | null; permalink: string | null },
  error?: string,
) {
  const { data: prev } = await admin.from("commission_invoices").select("attempts").eq("payment_id", paymentId).eq("kind", kind).maybeSingle();
  const attempts = ((prev as { attempts?: number } | null)?.attempts ?? 0) + (status === "failed" ? 1 : 0);
  await admin.from("commission_invoices").upsert({
    payment_id: paymentId,
    kind,
    amount,
    status,
    provider_id: res?.id ?? null,
    sequence_number: res?.sequence_number ?? null,
    permalink: res?.permalink ?? null,
    error: error ?? null,
    attempts: Math.max(attempts, 1),
    updated_at: new Date().toISOString(),
  }, { onConflict: "payment_id,kind" });
}

async function issuedDoc(admin: Admin, paymentId: string, kind: Kind): Promise<{ amount: number; providerId: number | null }> {
  const { data } = await admin.from("commission_invoices").select("amount, provider_id").eq("payment_id", paymentId).eq("kind", kind).maybeSingle();
  const d = (data ?? {}) as { amount?: number; provider_id?: number | null };
  return { amount: Number(d.amount ?? 0), providerId: d.provider_id ?? null };
}

// Organizador: particular, sem NIF guardado → "Consumidor final".
async function organizerClient(admin: Admin, profileId: string | null): Promise<Client> {
  let name = "Consumidor final";
  let email: string | null = null;
  if (profileId) {
    const { data: prof } = await admin.from("profiles").select("full_name").eq("id", profileId).maybeSingle();
    name = (prof as { full_name?: string } | null)?.full_name?.trim() || name;
    try {
      const { data } = await admin.auth.admin.getUserById(profileId);
      email = data.user?.email ?? null;
    } catch (_) { /* sem email: emite na mesma, não envia */ }
  }
  return { name, code: `org-${profileId ?? "anon"}`, email, fiscal_id: "999999990" };
}

// Parceiro: empresa/profissional com NIF (partner_verification.tax_id).
async function partnerClient(admin: Admin, partnerId: string | null): Promise<Client> {
  const { data: pp } = await admin
    .from("partner_profiles")
    .select("business_name, contact_email, address_line, postal_code, city")
    .eq("id", partnerId ?? "")
    .maybeSingle();
  const { data: ver } = await admin.from("partner_verification").select("tax_id").eq("partner_id", partnerId ?? "").maybeSingle();
  const p = (pp ?? {}) as { business_name?: string; contact_email?: string; address_line?: string; postal_code?: string; city?: string };
  let email = p.contact_email ?? null;
  if (!email && partnerId) {
    try {
      const { data } = await admin.auth.admin.getUserById(partnerId);
      email = data.user?.email ?? null;
    } catch (_) { /* ignora */ }
  }
  const nif = ((ver as { tax_id?: string } | null)?.tax_id ?? "").replace(/\D/g, "");
  return {
    name: p.business_name?.trim() || "Parceiro À Nossa!",
    code: `par-${partnerId ?? "anon"}`,
    email,
    fiscal_id: nif.length === 9 ? nif : "999999990",
    address: p.address_line ?? undefined,
    city: p.city ?? undefined,
    postal_code: p.postal_code ?? undefined,
  };
}

class InvoiceXpress {
  constructor(private account: string, private key: string, private taxName: string) {}

  private url(path: string) {
    return `https://${this.account}.app.invoicexpress.com/${path}?api_key=${encodeURIComponent(this.key)}`;
  }

  private async call(method: string, path: string, body: unknown) {
    const res = await fetch(this.url(path), {
      method,
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(body),
    });
    const text = await res.text();
    if (!res.ok) throw new Error(`${method} ${path} ${res.status}: ${text.slice(0, 300)}`);
    return text ? JSON.parse(text) : {};
  }

  async issue(o: {
    type: "invoice_receipts" | "credit_notes";
    uid: string;
    client: Client;
    item: string;
    description: string;
    grossAmount: number;
    ownerId?: number | null;
  }) {
    const today = new Date();
    const d = `${String(today.getDate()).padStart(2, "0")}/${String(today.getMonth() + 1).padStart(2, "0")}/${today.getFullYear()}`;
    // Valor com IVA incluído → preço unitário sem IVA (o InvoiceXpress
    // soma o IVA). 4 casas para o total bater ao cêntimo.
    const net = Math.round((o.grossAmount / (1 + VAT)) * 10000) / 10000;
    const created = await this.call("POST", `${o.type}.json`, {
      proprietary_uid: o.uid,
      invoice: {
        date: d,
        due_date: d,
        observations: "Documento emitido automaticamente pela plataforma À Nossa!.",
        // Nota de crédito: referencia a fatura-recibo original.
        ...(o.ownerId ? { owner_invoice_id: o.ownerId } : {}),
        client: {
          name: o.client.name,
          code: o.client.code,
          email: o.client.email ?? undefined,
          fiscal_id: o.client.fiscal_id,
          country: "Portugal",
          address: o.client.address,
          city: o.client.city,
          postal_code: o.client.postal_code,
        },
        items: [{ name: o.item, description: o.description, unit_price: net, quantity: 1, tax: { name: this.taxName } }],
      },
    });
    const doc = created.invoice ?? created.invoice_receipt ?? created.credit_note ?? created;
    const id = Number(doc.id);
    if (!id) throw new Error("sem id na resposta");
    const finalized = await this.call("PUT", `${o.type}/${id}/change-state.json`, { invoice: { state: "finalized" } });
    const fin = finalized.invoice ?? finalized.invoice_receipt ?? finalized.credit_note ?? doc;
    if (o.client.email) {
      try {
        await this.call("PUT", `${o.type}/${id}/email-document.json`, {
          message: {
            client: { email: o.client.email, save: "0" },
            subject: o.type === "credit_notes" ? "Nota de crédito À Nossa!" : "Fatura-recibo À Nossa!",
            body: "Olá! Segue em anexo o documento relativo à tua reserva na À Nossa!. Obrigado.",
            logo: "1",
          },
        });
      } catch (e) {
        console.error("email failed", o.uid, (e as Error).message);
      }
    }
    return { id, sequence_number: (fin.inverted_sequence_number ?? fin.sequence_number ?? null) as string | null, permalink: (fin.permalink ?? doc.permalink ?? null) as string | null };
  }
}
