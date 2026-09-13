import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { SettingsForm } from "./SettingsForm";
import type { PlatformSettings } from "@/lib/types";

export default async function SettingsPage() {
  const { adminRole } = await requireAdmin();
  const supabase = await createClient();

  const { data } = await supabase.from("platform_settings").select("*").eq("id", 1).single();
  const settings = data as PlatformSettings;

  // A policy de UPDATE (has_admin_permission('platform.manage'),
  // 019_platform_settings.sql) só deixa super_admin gravar — alterar
  // regras de negócio globais tem o maior raio de ação de qualquer ação
  // administrativa desta plataforma. Um admin sem essa role vê os
  // valores atuais mas não o formulário editável.
  const canManage = adminRole === "super_admin";

  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28, fontWeight: 600, marginBottom: 4 }}>
        Definições
      </h1>
      <p style={{ color: "var(--ink-muted)", fontSize: 14, marginBottom: 24 }}>
        Regras de negócio configuráveis da plataforma.
      </p>

      {canManage ? (
        <SettingsForm settings={settings} />
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
            Só uma conta Super Admin pode alterar estas definições. Valores atuais:
          </p>
          <ReadOnlyField label="Prazo mínimo para nova reserva" value={`${settings.booking_min_days_before_event} dias`} />
          <ReadOnlyField label="Tempo para pagamento do sinal" value={`${settings.default_booking_hold_hours} horas`} />
          <ReadOnlyField label="Margem após pagamento em atraso" value={`${settings.payment_grace_period_days} dias`} />
          <ReadOnlyField label="Aprovação manual de parceiros" value={settings.manual_partner_approval ? "Ativa" : "Inativa"} />
          <ReadOnlyField
            label="Review só após reserva concluída"
            value={settings.review_requires_completed_booking ? "Ativo" : "Inativo"}
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
