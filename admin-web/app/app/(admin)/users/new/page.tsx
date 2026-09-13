import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { NewUserForm } from "./new-user-form";

export default async function NewUserPage() {
  const { adminRole } = await requireAdmin();
  const canCreate = adminRole === "super_admin" || adminRole === "admin" || adminRole === null;

  return (
    <div style={{ maxWidth: 480 }}>
      <Link href="/users" style={{ color: "var(--ink-muted)", fontSize: 13 }}>
        ← Utilizadores
      </Link>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 26, marginTop: 12 }}>Novo utilizador</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 4, marginBottom: 20 }}>
        Cria uma conta e envia um email de convite real (o próprio utilizador escolhe a password — a app nunca gera
        nem guarda uma).
      </p>

      {!canCreate ? (
        <p style={{ color: "var(--status-rejected-fg)" }}>
          Só administradores (não Suporte/Financeiro/Moderação) podem criar contas novas.
        </p>
      ) : (
        <NewUserForm />
      )}
    </div>
  );
}
