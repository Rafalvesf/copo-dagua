import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { Card, Empty, PageHeader } from "@/components/ui";

// Pré-newsletter (migração 195): quem se inscreveu no site de
// apresentação para receber novidades antes das lojas.
export default async function NewsletterPage() {
  await requireAdmin();
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("newsletter_signups")
    .select("email, kind, source, created_at")
    .order("created_at", { ascending: false })
    .limit(2000);
  const rows = (data ?? []) as { email: string; kind: string; source: string | null; created_at: string }[];
  const partners = rows.filter((r) => r.kind === "parceiro").length;
  const emails = rows.map((r) => r.email).join(", ");

  return (
    <div className="page">
      <PageHeader
        title="Pré-registos"
        subtitle={`${rows.length} pré-registos no site (${rows.length - partners} organizadores, ${partners} parceiros). Ainda não se enviam emails.`}
      />
      {rows.length > 0 && (
        <Card title="Copiar todos os emails">
          <textarea readOnly value={emails} rows={4} style={{ width: "100%", fontSize: 13 }} />
        </Card>
      )}
      <Card flush>
        {error ? (
          <Empty title={error.message.includes("newsletter_signups") ? "Falta aplicar a migração 195" : "Não foi possível carregar a lista"} />
        ) : rows.length === 0 ? (
          <Empty title="Ainda sem pré-registos" />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Tipo</th>
                  <th>Data</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.email}>
                    <td><span className="cell-main">{r.email}</span></td>
                    <td>{r.kind === "parceiro" ? "Parceiro" : "Organizador"}</td>
                    <td>{new Date(r.created_at).toLocaleDateString("pt-PT")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
