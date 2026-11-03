import { requireAdmin } from "@/lib/dal";
import { createAdminClient } from "@/lib/supabase/admin";
import { Alert, Badge, Card, Empty, PageHeader } from "@/components/ui";
import { GITHUB_BASE, MIGRATIONS, RAW_BASE, type MigrationCheck } from "@/lib/pending-migrations";
import { CopySql } from "./CopySql";

// Migrações por correr (2026-11-03). Cada uma sai da lista sozinha quando a
// verificação encontra na base de dados o que ela cria. O SQL vem do
// repositório (público) no GitHub. Lê com a chave de serviço, depois de
// requireAdmin().

export const dynamic = "force-dynamic";

async function applied(db: ReturnType<typeof createAdminClient>, c: MigrationCheck): Promise<boolean> {
  try {
    if (c.kind === "table") {
      const { error } = await db.from(c.table).select("*", { head: true, count: "exact" }).limit(1);
      return !error;
    }
    if (c.kind === "column") {
      const { error } = await db.from(c.table).select(c.column).limit(1);
      return !error;
    }
    const { data, error } = await db.from("platform_settings").select("*").eq("id", 1).maybeSingle();
    return !error && !!data && c.test(data as Record<string, unknown>);
  } catch {
    return false;
  }
}

async function sqlOf(file: string): Promise<string | null> {
  try {
    const r = await fetch(RAW_BASE + file, { cache: "no-store" });
    return r.ok ? await r.text() : null;
  } catch {
    return null;
  }
}

export default async function MigrationsPage() {
  await requireAdmin();
  const db = createAdminClient();
  const states = await Promise.all(MIGRATIONS.map((m) => applied(db, m.check)));
  const pending = MIGRATIONS.filter((_, i) => !states[i]);
  const sqls = await Promise.all(pending.map((m) => sqlOf(m.file)));
  const all = pending
    .map((m, i) => (sqls[i] ? `-- >>> ${m.file}\n${sqls[i]}\n` : ""))
    .filter(Boolean)
    .join("\n");
  const doneCount = MIGRATIONS.length - pending.length;

  return (
    <div className="stack">
      <PageHeader
        title="Migrações"
        subtitle="Por correr no SQL Editor do Supabase, por esta ordem. Cada uma sai daqui sozinha quando estiver feita."
        badge={pending.length > 0 ? <Badge tone="warning">{pending.length} por correr</Badge> : <Badge tone="success">Tudo feito</Badge>}
        actions={pending.length > 1 && all ? <CopySql sql={all} label={`Copiar as ${pending.length} por ordem`} /> : undefined}
      />

      {pending.length === 0 ? (
        <Card>
          <Empty title="Não há migrações por correr">A base de dados está em dia.</Empty>
        </Card>
      ) : (
        <>
          <Alert tone="info">
            Abre o SQL Editor do Supabase, cola e carrega em Run. Se uma der erro, as anteriores ficam feitas — recarrega
            esta página e continua pela que falhou.
          </Alert>
          {pending.map((m, i) => (
            <Card
              key={m.file}
              title={
                <>
                  <span className="muted" style={{ fontWeight: 600 }}>{i + 1}.</span> {m.title}
                </>
              }
              subtitle={m.what}
              actions={
                <>
                  {sqls[i] ? <CopySql sql={sqls[i]!} /> : <Badge tone="danger">SQL indisponível</Badge>}
                  <a className="btn btn-secondary" href={GITHUB_BASE + m.file} target="_blank" rel="noreferrer">
                    Ver ficheiro
                  </a>
                </>
              }
            >
              <p className="muted" style={{ margin: 0, fontSize: 13 }}>
                <code>{m.file}</code>
                {m.after ? ` · depois da ${m.after}` : ""}
              </p>
            </Card>
          ))}
        </>
      )}

      {doneCount > 0 && (
        <p className="muted" style={{ fontSize: 13 }}>
          {doneCount} {doneCount === 1 ? "migração já feita saiu" : "migrações já feitas saíram"} da lista.
        </p>
      )}
    </div>
  );
}
