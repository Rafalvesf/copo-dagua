import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { Card, Empty, PageHeader } from "@/components/ui";
import { NewWordForm, RemoveWord } from "./controls";

export default async function BlockedWordsPage() {
  await requireAdmin();
  const supabase = await createClient();
  const { data, error } = await supabase.from("blocked_words").select("word, created_at").order("word");
  const rows = (data ?? []) as { word: string; created_at: string }[];

  return (
    <div className="page">
      <PageHeader
        title="Palavras bloqueadas"
        subtitle={`Não entram no nome e tipo dos eventos, no perfil (nome, @, bio, cidade) nem nas mensagens (${rows.length} palavras). A comparação é palavra a palavra, sem acentos, e apanha 0/1/3/4/5/7/@/$ e letras repetidas ou separadas.`}
      />
      <Card title="Bloquear uma palavra">
        <NewWordForm />
      </Card>
      <Card flush>
        {error ? (
          <Empty title="Não foi possível carregar a lista" />
        ) : rows.length === 0 ? (
          <Empty title="Ainda sem palavras" />
        ) : (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Palavra</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r.word}>
                    <td><span className="cell-main">{r.word}</span></td>
                    <td style={{ textAlign: "right" }}><RemoveWord word={r.word} /></td>
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
