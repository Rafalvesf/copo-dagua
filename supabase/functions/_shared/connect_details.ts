// Dados de pagamento do parceiro pedidos com o UI da própria app (2026-10-25:
// "nada de caixas com o site da Stripe"). A app mostra os seus formulários e
// envia para aqui; esta função passa tudo à Stripe pela API (contas geridas
// pela À Nossa!, `requirement_collection: "application"`). Nada fica guardado
// na base de dados da À Nossa! — só o estado (ativo ou não).
import type Stripe from "npm:stripe@17";

// deno-lint-ignore no-explicit-any
type Admin = any;

export type Address = { line1: string; line2?: string; postal_code: string; city: string };
export type Person = {
  first_name: string;
  last_name: string;
  email?: string;
  phone?: string;
  dob?: string; // AAAA-MM-DD
  nif?: string;
  address?: Address;
  title?: string;
};
export type Details = {
  business_type: "individual" | "company";
  person: Person;
  company?: { name: string; tax_id?: string; phone?: string; address?: Address };
  product_description?: string;
  url?: string;
  iban?: string;
  account_holder_name?: string;
  accept_tos?: boolean;
};

/// Cria a conta Stripe gerida se ainda não existir (mesma configuração em
/// todo o lado). Devolve o id.
export async function ensureAccount(
  stripe: Stripe,
  admin: Admin,
  partnerId: string,
  email: string | null,
  businessName: string | null,
  current: string | null,
): Promise<string> {
  if (current) {
    try {
      await stripe.accounts.retrieve(current);
      return current;
    } catch {
      // conta apagada na Stripe: cria outra
    }
  }
  const account = await stripe.accounts.create({
    country: "PT",
    email: email ?? undefined,
    controller: {
      stripe_dashboard: { type: "none" },
      requirement_collection: "application",
      losses: { payments: "application" },
      fees: { payer: "application" },
    },
    business_profile: { name: businessName || undefined, mcc: "7299" },
    capabilities: { card_payments: { requested: true }, transfers: { requested: true } },
    settings: { payouts: { schedule: { interval: "manual" } } },
    metadata: { partner_id: partnerId },
  } as never);
  await admin
    .from("partner_profiles")
    .update({ stripe_account_id: account.id, stripe_charges_enabled: false, stripe_payouts_enabled: false })
    .eq("id", partnerId);
  return account.id;
}

function dob(s?: string) {
  if (!s) return undefined;
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(s);
  if (!m) return undefined;
  return { year: Number(m[1]), month: Number(m[2]), day: Number(m[3]) };
}

function addr(a?: Address) {
  if (!a) return undefined;
  return {
    line1: a.line1,
    line2: a.line2 || undefined,
    postal_code: a.postal_code,
    city: a.city,
    country: "PT",
  };
}

function phone(p?: string) {
  if (!p) return undefined;
  const digits = p.replace(/[^\d+]/g, "");
  if (digits.startsWith("+")) return digits;
  if (digits.startsWith("00")) return "+" + digits.slice(2);
  return "+351" + digits;
}

function personFields(p: Person) {
  return {
    first_name: p.first_name.trim(),
    last_name: p.last_name.trim(),
    email: p.email?.trim() || undefined,
    phone: phone(p.phone),
    dob: dob(p.dob),
    address: addr(p.address),
    id_number: p.nif?.replace(/\s/g, "") || undefined,
  };
}

/// Envia os dados à Stripe. Lança o erro da Stripe (mensagem legível) se
/// algum campo for recusado (ex.: IBAN inválido).
export async function applyDetails(
  stripe: Stripe,
  accountId: string,
  d: Details,
  meta: { ip: string; userAgent: string },
): Promise<void> {
  const update: Record<string, unknown> = {
    business_type: d.business_type,
    business_profile: {
      mcc: "7299",
      product_description: d.product_description?.trim() || undefined,
      url: d.url?.trim() || undefined,
    },
  };
  if (d.business_type === "individual") {
    update.individual = personFields(d.person);
  } else if (d.company) {
    update.company = {
      name: d.company.name.trim(),
      tax_id: d.company.tax_id?.replace(/\s/g, "") || undefined,
      phone: phone(d.company.phone),
      address: addr(d.company.address),
      owners_provided: true,
      directors_provided: true,
      executives_provided: true,
    };
  }
  if (d.iban) {
    update.external_account = {
      object: "bank_account",
      country: "PT",
      currency: "eur",
      account_number: d.iban.replace(/\s/g, "").toUpperCase(),
      account_holder_name: (d.account_holder_name || `${d.person.first_name} ${d.person.last_name}`).trim(),
      account_holder_type: d.business_type === "company" ? "company" : "individual",
    };
  }
  if (d.accept_tos) {
    update.tos_acceptance = {
      date: Math.floor(Date.now() / 1000),
      ip: meta.ip,
      user_agent: meta.userAgent.slice(0, 500),
    };
  }
  await stripe.accounts.update(accountId, update as never);

  if (d.business_type === "company") {
    // Responsável da empresa (representante, gerente e sócio).
    const persons = await stripe.accounts.listPersons(accountId, { limit: 10 });
    const rep = persons.data.find((p) => p.relationship?.representative);
    const fields = {
      ...personFields(d.person),
      relationship: {
        representative: true,
        owner: true,
        director: true,
        executive: true,
        percent_ownership: 100,
        title: d.person.title?.trim() || "Gerente",
      },
    };
    if (rep) await stripe.accounts.updatePerson(accountId, rep.id, fields as never);
    else await stripe.accounts.createPerson(accountId, fields as never);
  }
}

/// Fotografia do documento de identificação (só quando a Stripe pede).
export async function applyDocument(
  stripe: Stripe,
  accountId: string,
  front: { data: string; type: string },
  back: { data: string; type: string } | null,
): Promise<void> {
  async function upload(f: { data: string; type: string }, name: string) {
    const bytes = Uint8Array.from(atob(f.data), (c) => c.charCodeAt(0));
    const file = await stripe.files.create({
      purpose: "identity_document",
      file: { data: bytes, name, type: f.type || "image/jpeg" },
    } as never);
    return file.id;
  }
  const frontId = await upload(front, "frente.jpg");
  const backId = back ? await upload(back, "verso.jpg") : undefined;
  const document = { front: frontId, ...(backId ? { back: backId } : {}) };
  const acc = await stripe.accounts.retrieve(accountId);
  if (acc.business_type === "company") {
    const persons = await stripe.accounts.listPersons(accountId, { limit: 10 });
    const rep = persons.data.find((p) => p.relationship?.representative);
    if (rep) await stripe.accounts.updatePerson(accountId, rep.id, { verification: { document } } as never);
  } else {
    await stripe.accounts.update(accountId, { individual: { verification: { document } } } as never);
  }
}

/// O que já está preenchido, para a app mostrar nos campos.
export async function prefill(stripe: Stripe, acc: Stripe.Account) {
  let person: Stripe.Person | null = null;
  if (acc.business_type === "company") {
    try {
      const persons = await stripe.accounts.listPersons(acc.id, { limit: 10 });
      person = persons.data.find((p) => p.relationship?.representative) ?? null;
    } catch {
      person = null;
    }
  } else {
    person = (acc.individual as Stripe.Person | undefined) ?? null;
  }
  const fmtDob = (p: Stripe.Person | null) =>
    p?.dob?.year ? `${p.dob.year}-${String(p.dob.month).padStart(2, "0")}-${String(p.dob.day).padStart(2, "0")}` : null;
  const a = (x?: Stripe.Address | null) =>
    x ? { line1: x.line1 ?? "", line2: x.line2 ?? "", postal_code: x.postal_code ?? "", city: x.city ?? "" } : null;
  const bank = acc.external_accounts?.data?.find((x) => x.object === "bank_account") as
    | { last4?: string; account_holder_name?: string | null }
    | undefined;
  return {
    business_type: acc.business_type ?? null,
    person: person
      ? {
          first_name: person.first_name ?? "",
          last_name: person.last_name ?? "",
          email: person.email ?? acc.email ?? "",
          phone: person.phone ?? "",
          dob: fmtDob(person),
          address: a(person.address),
          nif_provided: person.id_number_provided ?? false,
          title: person.relationship?.title ?? "",
        }
      : { email: acc.email ?? "" },
    company: acc.company
      ? {
          name: acc.company.name ?? "",
          tax_id_provided: acc.company.tax_id_provided ?? false,
          phone: acc.company.phone ?? "",
          address: a(acc.company.address),
        }
      : null,
    product_description: acc.business_profile?.product_description ?? "",
    url: acc.business_profile?.url ?? "",
    bank_last4: bank?.last4 ?? null,
    account_holder_name: bank?.account_holder_name ?? "",
    tos_accepted: Boolean(acc.tos_acceptance?.date),
  };
}

/// Mensagem em português para um erro da Stripe ao gravar os dados.
export function stripeMessage(e: unknown): string {
  const err = e as { code?: string; param?: string; message?: string };
  const p = err.param ?? "";
  if (p.includes("account_number") || err.code === "invalid_bank_account_iban") return "O IBAN não é válido.";
  if (p.includes("postal_code")) return "O código postal não é válido (ex.: 1000-001).";
  if (p.includes("phone")) return "O número de telemóvel não é válido.";
  if (p.includes("dob")) return "A data de nascimento não é válida (tens de ter 18 anos ou mais).";
  if (p.includes("email")) return "O email não é válido.";
  if (p.includes("tax_id") || p.includes("id_number")) return "O NIF não é válido.";
  if (p.includes("url")) return "O site não é válido (ex.: https://oteusite.pt).";
  return "A Stripe recusou os dados. Confirma os campos e tenta outra vez.";
}
