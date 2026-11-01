import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { Alert, Card, Empty, FilterTabs, PageHeader } from "@/components/ui";
import { TaskRow, type AdminTask } from "./task-row";
import { AddTaskForm } from "./add-form";

// Pendentes (migração 137): o que falta fazer para lançar, para ir riscando.
const AREAS = ["Base de dados", "Segurança", "Lojas e contas", "Pagamentos e faturação", "Marketing", "Outros"];

export default async function PendingPage({ searchParams }: PageProps<"/pending">) {
  await requireAdmin();
  const params = await searchParams;
  const show = params.show === "all" || params.show === "done" ? params.show : "todo";

  const supabase = await createClient();
  const { data, error } = await supabase
    .from("admin_tasks")
    .select("id, title, detail, area, owner, done, done_at")
    .order("sort")
    .order("created_at");
  const tasks = (data ?? []) as AdminTask[];
  const total = tasks.length;
  const doneCount = tasks.filter((t) => t.done).length;
  const visible = tasks.filter((t) => (show === "all" ? true : show === "done" ? t.done : !t.done));
  const areas = [...AREAS, ...new Set(tasks.map((t) => t.area).filter((a) => !AREAS.includes(a)))];

  return (
    <div className="page">
      <PageHeader
        title="Pendentes"
        subtitle={total ? `${doneCount} de ${total} feitas. Marca cada tarefa quando a terminares.` : "O que falta fazer para lançar."}
      />
      {error ? (
        <Alert tone="warning">Falta aplicar a migração 137 (database/migrations/137_admin_tasks.sql) no SQL Editor.</Alert>
      ) : (
        <>
          <div style={{ height: 8, borderRadius: 8, background: "var(--border)", overflow: "hidden" }} aria-hidden>
            <div style={{ height: "100%", width: total ? `${(doneCount / total) * 100}%` : 0, background: "var(--accent)" }} />
          </div>
          <div className="toolbar">
            <FilterTabs
              current={show}
              items={[
                { value: "todo", label: "Por fazer", href: "/pending" },
                { value: "all", label: "Todas", href: "/pending?show=all" },
                { value: "done", label: "Feitas", href: "/pending?show=done" },
              ]}
            />
          </div>
          <div className="grid grid-main-side">
            <div className="stack">
              {visible.length === 0 ? (
                <Card>
                  <Empty title={show === "done" ? "Ainda nada feito" : "Está tudo feito"} />
                </Card>
              ) : (
                areas.map((area) => {
                  const items = visible.filter((t) => t.area === area);
                  if (!items.length) return null;
                  const all = tasks.filter((t) => t.area === area);
                  return (
                    <Card key={area} title={area} subtitle={`${all.filter((t) => t.done).length} de ${all.length}`} flush>
                      <ul className="list">
                        {items.map((t) => (
                          <TaskRow key={t.id} task={t} />
                        ))}
                      </ul>
                    </Card>
                  );
                })
              )}
            </div>
            <Card title="Nova tarefa">
              <AddTaskForm areas={areas} />
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
