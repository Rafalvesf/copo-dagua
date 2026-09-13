import { requireAdmin } from "@/lib/dal";
import { ComingSoon } from "@/components/ComingSoon";

export default async function DisputesPage() {
  await requireAdmin();
  return (
    <ComingSoon
      title="Disputas"
      description="Conflitos entre casais e parceiros sobre uma reserva."
      dependsOn="Bookings e Payments já existem (base pronta) — falta o modelo de dados de disputas em si (tabela + timeline + evidências) e o fluxo de resolução"
      docsPath="admin-web/disputes/README.md"
    />
  );
}
