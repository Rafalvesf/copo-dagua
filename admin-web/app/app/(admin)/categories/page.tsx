import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { ToggleSwitch, NewCategoryForm, DeleteCategoryButton } from "./category-controls";
import type { PartnerCategory } from "@/lib/types";

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

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <div>
          <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>Categorias</h1>
          <p style={{ color: "var(--ink-muted)", marginTop: 4 }}>Taxonomia do Marketplace.</p>
        </div>
        <NewCategoryForm />
      </div>

      {error && <p style={{ color: "var(--status-rejected-fg)", marginTop: 24 }}>Não foi possível carregar a lista.</p>}

      {!error && categories && (
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: 24 }}>
          <thead>
            <tr style={{ textAlign: "left", fontSize: 13, color: "var(--ink-muted)" }}>
              <th style={{ padding: "8px 0" }}>Categoria</th>
              <th>Parceiros</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(categories as PartnerCategory[]).map((c) => {
              const partnerCount = countByCategory.get(c.id) ?? 0;
              return (
                <tr key={c.id} style={{ borderTop: "1px solid var(--border-muted)" }}>
                  <td style={{ padding: "12px 0", fontWeight: 600 }}>{c.label_pt}</td>
                  <td style={{ fontSize: 13 }}>{partnerCount}</td>
                  <td>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <span style={{ fontSize: 13, color: "var(--ink-muted)" }}>
                        {c.is_active ? "Ativa" : "Inativa"}
                      </span>
                      <ToggleSwitch categoryId={c.id} isActive={c.is_active} />
                    </div>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <DeleteCategoryButton categoryId={c.id} categoryLabel={c.label_pt} partnerCount={partnerCount} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}
