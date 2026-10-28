import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { Card, Empty, PageHeader } from "@/components/ui";
import { fmtDateTime } from "@/lib/format";
import { SendMessageForm } from "./send-form";

// Mensagens da equipa a qualquer utilizador (migração 133).
type Sent = {
  id: string;
  audience: string;
  title: string;
  body: string;
  recipients: number;
  created_at: string;
  recipient: { full_name: string | null } | null;
};

const AUDIENCE: Record<string, string> = {
  all: "Todos",
  couple: "Organizadores",
  partner: "Parceiros",
  guest: "Convidados",
};

export default async function MessagesPage({ searchParams }: PageProps<"/messages">) {
  await requireAdmin();
  const params = await searchParams;
  const to = typeof params.to === "string" ? params.to : undefined;

  const supabase = await createClient();
  const [{ data: people }, { data: sent, error }] = await Promise.all([
    supabase
      .from("profiles")
      .select("id, full_name, role")
      .neq("role", "admin")
      .neq("status", "deleted")
      .order("full_name")
      .limit(2000),
    supabase
      .from("admin_messages")
      .select("id, audience, title, body, recipients, created_at, recipient:profiles!admin_messages_recipient_id_fkey(full_name)")
      .order("created_at", { ascending: false })
      .limit(30),
  ]);

  return (
    <div className="page">
      <PageHeader
        title="Mensagens"
        subtitle="Envia uma mensagem a uma pessoa ou a um grupo. Chega como notificação na app e no telemóvel."
      />
      <div className="grid grid-main-side">
        <Card title="Nova mensagem">
          <SendMessageForm
            people={(people ?? []) as { id: string; full_name: string | null; role: string }[]}
            preselect={to}
          />
        </Card>
        <Card title="Enviadas" flush>
          {error ? (
            <Empty title="Falta aplicar a migração 133" />
          ) : (sent ?? []).length === 0 ? (
            <Empty title="Ainda sem mensagens enviadas" />
          ) : (
            <ul className="list">
              {((sent ?? []) as unknown as Sent[]).map((m) => (
                <li key={m.id} className="stack-sm" style={{ gap: 4 }}>
                  <strong>{m.title}</strong>
                  <div className="muted">
                    {m.audience === "user" ? m.recipient?.full_name || "Pessoa" : AUDIENCE[m.audience] ?? m.audience}
                    {" · "}
                    {m.recipients} {m.recipients === 1 ? "pessoa" : "pessoas"} · {fmtDateTime(m.created_at)}
                  </div>
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
