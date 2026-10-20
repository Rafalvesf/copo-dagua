import { requireAdmin } from "@/lib/dal";
import { Alert, Card, PageHeader } from "@/components/ui";
import { NewUserForm } from "./new-user-form";

export default async function NewUserPage() {
  const { adminRole } = await requireAdmin();
  const canCreate = adminRole === "super_admin" || adminRole === "admin" || adminRole === null;

  return (
    <div className="page" style={{ maxWidth: 560 }}>
      <PageHeader
        back={{ href: "/users", label: "Utilizadores" }}
        title="Novo utilizador"
        subtitle="Cria a conta e envia um convite por email. A pessoa escolhe a própria password — a app nunca gera nem guarda uma."
      />
      {!canCreate ? (
        <Alert tone="warning">Só administradores (não Suporte/Financeiro/Moderação) podem criar contas.</Alert>
      ) : (
        <Card>
          <NewUserForm />
        </Card>
      )}
    </div>
  );
}
