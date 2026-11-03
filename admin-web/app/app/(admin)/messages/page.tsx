import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { Alert, Card, Empty, PageHeader } from "@/components/ui";
import { fmtDateTime } from "@/lib/format";
import { SendMessageForm } from "./send-form";

// Mensagens da equipa a qualquer utilizador (migração 133).
type Sent = {
  id: string;
  audience: string;
  title: string;
  body: string;
  recipients: number;
  style?: string | null;
  image_url?: string | null;
  expires_at?: string | null;
  created_at: string;
  recipient: { full_name: string | null } | null;
};

const STYLE_LABEL: Record<string, string> = { notification: "Notificação", banner: "Banner", direct: "Direta" };

const AUDIENCE: Record<string, string> = {
  all: "Todos",
  couple: "Utilizadores com evento",
  partner: "Parceiros",
  guest: "Utilizadores sem evento",
};

export default async function MessagesPage({ searchParams }: PageProps<"/messages">) {
  await requireAdmin();
  const params = await searchParams;
  const to = typeof params.to === "string" ? params.to : undefined;

  const supabase = await createClient();
  const [{ data: people }, full] = await Promise.all([
    supabase
      .from("profiles")
      .select("id, full_name, role")
      .neq("role", "admin")
      .neq("status", "deleted")
      .order("full_name")
      .limit(2000),
    supabase
      .from("admin_messages")
      .select("id, audience, title, body, recipients, created_at, style, expires_at, image_url, recipient:profiles!admin_messages_recipient_id_fkey(full_name)")
      .order("created_at", { ascending: false })
      .limit(30),
  ]);
  // Sem as migrações 146–148 (estilo, validade, imagem) a lista mostra-se na
  // mesma, só com as colunas da 133, e um aviso a apontar para Migrações.
  let sent = full.data as unknown[] | null;
  let error = full.error;
  const missingNewer = Boolean(error);
  if (error) {
    const basic = await supabase
      .from("admin_messages")
      .select("id, audience, title, body, recipients, created_at, recipient:profiles!admin_messages_recipient_id_fkey(full_name)")
      .order("created_at", { ascending: false })
      .limit(30);
    sent = basic.data as unknown[] | null;
    error = basic.error;
  }

  return (
    <div className="page">
      <PageHeader
        title="Mensagens"
        subtitle="Envia uma mensagem da Equipa À Nossa! a uma pessoa ou a um grupo: notificação, banner de novidade ou mensagem direta no Chat."
      />
      <div className="grid grid-main-side">
        <Card title="Nova mensagem">
          <SendMessageForm
            people={(people ?? []) as { id: string; full_name: string | null; role: string }[]}
            preselect={to}
          />
        </Card>
        <Card title="Enviadas" flush>
          {missingNewer && !error && (
            <div style={{ padding: "12px 16px 0" }}>
              <Alert tone="warning">
                Faltam as migrações 146–148 (estilos, validade e imagem das mensagens). Corre-as na página Migrações.
              </Alert>
            </div>
          )}
          {error ? (
            <Empty title="Falta aplicar a migração 133" />
          ) : (sent ?? []).length === 0 ? (
            <Empty title="Ainda sem mensagens enviadas" />
          ) : (
            <ul className="list">
              {((sent ?? []) as unknown as Sent[]).map((m) => (
                <li key={m.id} className="stack-sm" style={{ gap: 4 }}>
                  <div className="row" style={{ gap: 6 }}>
                    <strong>{m.title}</strong>
                    <span className="badge">{STYLE_LABEL[m.style ?? "notification"] ?? "Notificação"}</span>
                  </div>
                  <div className="muted">
                    {m.audience === "user" ? m.recipient?.full_name || "Pessoa" : AUDIENCE[m.audience] ?? m.audience}
                    {" · "}
                    {m.recipients} {m.recipients === 1 ? "pessoa" : "pessoas"} · {fmtDateTime(m.created_at)}
                  </div>
                  {m.image_url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.image_url} alt="" loading="lazy" style={{ width: 160, maxWidth: "100%", borderRadius: 10 }} />
                  )}
                  <div style={{ whiteSpace: "pre-wrap" }}>{m.body}</div>
                </li>
              ))}
            </ul>
          )}
        </Card>
      </div>
    </div>
  );
}
