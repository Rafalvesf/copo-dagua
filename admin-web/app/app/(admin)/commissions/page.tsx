import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { CommissionsForm } from "./CommissionsForm";
import type { PlatformSettings } from "@/lib/types";

// Deixou de ser ComingSoon (2026-09-12) — pedido explícito do
// utilizador: "o sinal nunca pode ser editado pelo parceiro, mas pode
// ser ajustado pelo administrador no admin web na secção comissões".
// `platform_commission_percentage` mudou-se de Definições para aqui
// (mesma coluna, só a UI que se moveu); `deposit_percentage`/
// `cancellation_penalty_days` são novos (`062_deposit_and_cancellation_rules.sql`).
// Override por parceiro/categoria e relatórios de faturação continuam
// por fazer — sem modelo de dados ainda, ver `admin-web/commissions/README.md`.
export default async function CommissionsPage() {
  const { adminRole } = await requireAdmin();
  const supabase = await createClient();

  const { data } = await supabase.from("platform_settings").select("*").eq("id", 1).single();
  const settings = data as PlatformSettings;

  const canManage = adminRole === "super_admin";

  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 600, marginBottom: 4 }}>
        Comissões
      </h1>
      <p style={{ color: "var(--ink-muted)", fontSize: 14, marginBottom: 24 }}>
        Regras de comissão da plataforma e do sinal.
      </p>

      {canManage ? (
        <CommissionsForm settings={settings} />
      ) : (
        <div
          style={{
            background: "var(--surface)",
            borderRadius: 16,
            boxShadow: "var(--shadow-card)",
            padding: 24,
            maxWidth: 560,
            display: "flex",
            flexDirection: "column",
            gap: 12,
          }}
        >
          <p style={{ fontSize: 13, color: "var(--ink-muted)" }}>
            Só uma conta Super Admin pode alterar estas comissões. Valores atuais:
          </p>
          <ReadOnlyField label="Comissão da plataforma" value={`${settings.platform_commission_percentage}%`} />
          <ReadOnlyField label="Percentagem do sinal" value={`${settings.deposit_percentage}%`} />
          <ReadOnlyField
            label="Janela sem penalização para cancelar"
            value={`${settings.cancellation_penalty_days} dias`}
          />
        </div>
      )}
    </div>
  );
}

function ReadOnlyField({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", fontSize: 14 }}>
      <span style={{ color: "var(--ink-muted)" }}>{label}</span>
      <span style={{ fontWeight: 600 }}>{value}</span>
    </div>
  );
}
