import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { Card, Empty, FilterTabs, PageHeader } from "@/components/ui";
import { SignupsSheet, type Signup } from "./SignupsSheet";
import { BulkExport } from "./BulkExport";

// Pré-registos do site (migração 195), separados em organizadores e
// parceiros (pedido 2026-11-16) para enviar emails à parte e
// personalizados, numa folha tipo Excel.
export default async function NewsletterPage({
  searchParams,
}: PageProps<"/newsletter">) {
  await requireAdmin();
  const params = await searchParams;
  const kind = params.tipo === "parceiro" ? "parceiro" : "organizador";
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("newsletter_signups")
    .select(
      "email, kind, name, interests, business_name, city, country, age_range, created_at",
    )
    .order("created_at", { ascending: false })
    .limit(5000);
  const all = (data ?? []) as Signup[];
  const partners = all.filter((r) => r.kind === "parceiro");
  const organizers = all.filter((r) => r.kind !== "parceiro");
  const rows = kind === "parceiro" ? partners : organizers;

  return (
    <div className="page">
      <PageHeader
        title="Pré-registos"
        subtitle="Quem se inscreveu no site antes das lojas. Escreve a mensagem, vê como fica para cada pessoa e descarrega para o Excel."
        actions={<BulkExport partners={partners} organizers={organizers} />}
      />
      <FilterTabs
        current={kind}
        items={[
          {
            value: "organizador",
            label: "Organizadores",
            href: "/newsletter",
            count: organizers.length,
          },
          {
            value: "parceiro",
            label: "Parceiros",
            href: "/newsletter?tipo=parceiro",
            count: partners.length,
          },
        ]}
      />
      {error ? (
        <Card flush>
          <Empty
            title={
              error.message.includes("newsletter_signups")
                ? "Falta aplicar a migração 195"
                : "Não foi possível carregar a lista"
            }
          />
        </Card>
      ) : rows.length === 0 ? (
        <Card flush>
          <Empty
            title={
              kind === "parceiro"
                ? "Ainda sem parceiros pré-registados"
                : "Ainda sem organizadores pré-registados"
            }
          />
        </Card>
      ) : (
        <SignupsSheet key={kind} kind={kind} rows={rows} />
      )}
    </div>
  );
}
