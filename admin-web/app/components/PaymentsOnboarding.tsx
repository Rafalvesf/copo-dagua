"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { getPayoutStatus, submitPayoutDetails, type PayoutPrefill } from "@/app/(admin)/partners/[id]/actions";

// Dados de pagamento do parceiro preenchidos no admin com o UI do próprio
// admin (2026-10-25: "nada de links nem caixas com o site da Stripe"). O
// servidor passa-os à Stripe; o admin só guarda o estado.

function describe(fields: string[]): string {
  const names = fields.map((f) => {
    if (f.includes("external_account")) return "IBAN";
    if (f.includes("verification")) return "documento de identificação (o parceiro envia na app)";
    if (f.includes("tos_acceptance")) return "aceitar os termos";
    if (f.includes("address")) return "morada";
    if (f.includes("dob")) return "data de nascimento";
    if (f.includes("phone")) return "telefone";
    if (f.includes("email")) return "email";
    if (f.includes("tax_id") || f.includes("id_number")) return "NIF";
    if (f.includes("business_profile")) return "descrição do serviço";
    if (f.includes("name")) return "nome";
    return f;
  });
  return [...new Set(names)].join(", ");
}

type Form = {
  business_type: "individual" | "company";
  first_name: string;
  last_name: string;
  dob: string; // AAAA-MM-DD (input date)
  nif: string;
  email: string;
  phone: string;
  title: string;
  company_name: string;
  company_nif: string;
  line1: string;
  line2: string;
  postal_code: string;
  city: string;
  product_description: string;
  url: string;
  iban: string;
  holder: string;
  accept: boolean;
};

function fromPrefill(p: PayoutPrefill): Form {
  const a = p?.person?.address ?? p?.company?.address ?? null;
  return {
    business_type: p?.business_type === "company" ? "company" : "individual",
    first_name: p?.person?.first_name ?? "",
    last_name: p?.person?.last_name ?? "",
    dob: p?.person?.dob ?? "",
    nif: "",
    email: p?.person?.email ?? "",
    phone: p?.person?.phone ?? "",
    title: p?.person?.title || "Gerente",
    company_name: p?.company?.name ?? "",
    company_nif: "",
    line1: a?.line1 ?? "",
    line2: a?.line2 ?? "",
    postal_code: a?.postal_code ?? "",
    city: a?.city ?? "",
    product_description: p?.product_description ?? "",
    url: p?.url ?? "",
    iban: "",
    holder: p?.account_holder_name ?? "",
    accept: false,
  };
}

export function PaymentsOnboarding({ partnerId }: { partnerId: string }) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [info, setInfo] = useState<string | null>(null);
  const [prefill, setPrefill] = useState<PayoutPrefill>(null);
  const [f, setF] = useState<Form | null>(null);

  const set = <K extends keyof Form>(k: K, v: Form[K]) => setF((x) => (x ? { ...x, [k]: v } : x));

  function explain(s: { chargesEnabled: boolean; currentlyDue: string[]; pendingVerification: string[] }) {
    if (s.chargesEnabled) return "Pagamentos ativos.";
    if (s.currentlyDue.length > 0) return `Ainda falta: ${describe(s.currentlyDue)}.`;
    if (s.pendingVerification.length > 0) return "A Stripe está a verificar os dados. Fica ativo dentro de alguns minutos.";
    return "Ainda não está ativo.";
  }

  async function start() {
    setBusy(true);
    setError(null);
    setInfo(null);
    const s = await getPayoutStatus(partnerId);
    setBusy(false);
    if (!s.ok) {
      setError(s.error);
      return;
    }
    setPrefill(s.prefill);
    setF(fromPrefill(s.prefill));
    if (s.hasAccount) setInfo(explain(s));
    setOpen(true);
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!f) return;
    if (!f.accept && !prefill?.tos_accepted) {
      setError("Confirma os dados e os termos para enviar.");
      return;
    }
    setBusy(true);
    setError(null);
    const address = { line1: f.line1, line2: f.line2, postal_code: f.postal_code, city: f.city };
    const details: Record<string, unknown> = {
      business_type: f.business_type,
      person: {
        first_name: f.first_name,
        last_name: f.last_name,
        email: f.email,
        phone: f.phone,
        dob: f.dob || undefined,
        nif: f.nif || undefined,
        address,
        title: f.business_type === "company" ? f.title : undefined,
      },
      company:
        f.business_type === "company"
          ? { name: f.company_name, tax_id: f.company_nif || undefined, phone: f.phone, address }
          : undefined,
      product_description: f.product_description,
      url: f.url ? (f.url.startsWith("http") ? f.url : `https://${f.url}`) : undefined,
      iban: f.iban || undefined,
      account_holder_name: f.holder || undefined,
      accept_tos: f.accept || prefill?.tos_accepted === true,
    };
    const s = await submitPayoutDetails(partnerId, details);
    setBusy(false);
    if (!s.ok) {
      setError(s.error);
      return;
    }
    setOpen(false);
    setInfo(explain(s));
    router.refresh();
  }

  if (!open || !f) {
    return (
      <>
        {info && <p className="field-hint" style={{ marginTop: 10, color: "var(--ink)", fontWeight: 600 }}>{info}</p>}
        {error && <p className="field-hint" style={{ marginTop: 10, color: "var(--ink)", fontWeight: 600 }}>{error}</p>}
        <button type="button" className="btn btn-primary btn-block" style={{ marginTop: 12 }} onClick={start} disabled={busy}>
          {busy ? "A carregar…" : "Preencher dados de pagamento"}
        </button>
      </>
    );
  }

  const company = f.business_type === "company";
  const field = (label: string, k: keyof Form, props: React.InputHTMLAttributes<HTMLInputElement> = {}) => (
    <label className="field">
      <span className="field-label">{label}</span>
      <input
        className="input"
        value={String(f[k] ?? "")}
        onChange={(e) => set(k, e.target.value as never)}
        {...props}
      />
    </label>
  );

  return (
    <form onSubmit={submit} style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
      {info && <p className="field-hint" style={{ color: "var(--ink)", fontWeight: 600 }}>{info}</p>}
      <div className="row" style={{ gap: 8 }}>
        <label className="row" style={{ gap: 6 }}>
          <input type="radio" checked={!company} onChange={() => set("business_type", "individual")} /> Em nome individual
        </label>
        <label className="row" style={{ gap: 6 }}>
          <input type="radio" checked={company} onChange={() => set("business_type", "company")} /> Empresa
        </label>
      </div>
      {company && (
        <>
          {field("Nome da empresa", "company_name", { required: true })}
          {field(prefill?.company?.tax_id_provided ? "NIPC (já indicado)" : "NIPC", "company_nif", { inputMode: "numeric", placeholder: "501234567" })}
        </>
      )}
      <strong style={{ fontSize: 13, marginTop: 4 }}>{company ? "Responsável" : "Titular"}</strong>
      {field("Nome", "first_name", { required: true })}
      {field("Apelido", "last_name", { required: true })}
      {field("Data de nascimento", "dob", { type: "date", required: true })}
      {field(prefill?.person?.nif_provided ? "NIF (já indicado)" : "NIF", "nif", { inputMode: "numeric", placeholder: "123456789" })}
      {field("Email", "email", { type: "email", required: true })}
      {field("Telemóvel", "phone", { type: "tel", required: true, placeholder: "912 345 678" })}
      {company && field("Cargo", "title")}
      <strong style={{ fontSize: 13, marginTop: 4 }}>Morada</strong>
      {field("Rua e número", "line1", { required: true })}
      {field("Andar, porta", "line2")}
      {field("Código postal", "postal_code", { required: true, placeholder: "1000-001" })}
      {field("Localidade", "city", { required: true })}
      <strong style={{ fontSize: 13, marginTop: 4 }}>Serviço</strong>
      {field("Descrição do serviço", "product_description", { required: true })}
      {field("Site ou Instagram", "url")}
      <strong style={{ fontSize: 13, marginTop: 4 }}>Conta bancária</strong>
      {field(prefill?.bank_last4 ? `IBAN (atual termina em ${prefill.bank_last4})` : "IBAN", "iban", { placeholder: "PT50 …" })}
      {field("Titular da conta", "holder")}
      {!prefill?.tos_accepted && (
        <label className="row" style={{ gap: 8, alignItems: "flex-start", fontSize: 13 }}>
          <input type="checkbox" checked={f.accept} onChange={(e) => set("accept", e.target.checked)} style={{ marginTop: 3 }} />
          <span>O parceiro confirma que os dados são verdadeiros e aceita os termos de serviço da Stripe, que processa os pagamentos.</span>
        </label>
      )}
      {error && <p className="field-hint" style={{ color: "var(--ink)", fontWeight: 600 }}>{error}</p>}
      <button type="submit" className="btn btn-primary btn-block" disabled={busy}>
        {busy ? "A enviar…" : "Enviar dados"}
      </button>
      <button type="button" className="btn btn-ghost btn-sm" onClick={() => setOpen(false)} disabled={busy}>
        Fechar
      </button>
    </form>
  );
}
