import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { ToggleSwitch, NewCategoryForm, DeleteCategoryButton } from "./category-controls";
import type { PartnerCategory } from "@/lib/types";
import { Card, Empty, PageHeader } from "@/components/ui";

export default async function CategoriesPage() {
  await requireAdmin();

  const supabase = await createClient();
  const { data: categories, error } = await supabase
    .from("partner_categories")
    .select("*")
    .order("label_pt");

  const { data: counts } = await supabase.from("partner_profile_categories").select("category_id");
  const countByCategory = new Map<string, number>();
  (counts ?? []).forEach((row: { category_id: string }) => {
    countByCategory.set(row.category_id, (countByCategory.get(row.category_id) ?? 0) + 1);
  });

  const rows = (categories ?? []) as PartnerCategory[];
  const active = rows.filter((c) => c.is_active).length;

  return (
    <div className="page">
      <PageHeader title="Categorias" subtitle={`As áreas de serviço do Marketplace (${active} ativas de ${rows.length}). Uma categoria inativa deixa de aparecer na app, mas os parceiros mantêm-na.`} />

      <Card title="Nova categoria">
        <NewCategoryForm />
      </Card>

      <Card flush>
        {error ? (
          <Empty title="Não foi possível carregar a lista" />
        ) : rows.length === 0 ? (
          <Empty title="Ainda sem categorias" />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Categoria</th>
                  <th className="num">Parceiros</th>
                  <th>Visível na app</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((c) => {
                  const partnerCount = countByCategory.get(c.id) ?? 0;
                  return (
                    <tr key={c.id}>
                      <td>
                        <span className="cell-main">{c.label_pt}</span>
                        <span className="cell-sub">{c.slug}</span>
                      </td>
                      <td className="num">{partnerCount}</td>
                      <td>
                        <div className="row" style={{ flexWrap: "nowrap" }}>
                          <ToggleSwitch categoryId={c.id} isActive={c.is_active} />
                          <span className="muted" style={{ fontSize: 13 }}>{c.is_active ? "Sim" : "Não"}</span>
                        </div>
                      </td>
                      <td className="num">
                        <DeleteCategoryButton categoryId={c.id} categoryLabel={c.label_pt} partnerCount={partnerCount} />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>
    </div>
  );
}
