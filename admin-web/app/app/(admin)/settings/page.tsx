import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { SettingsForm } from "./SettingsForm";
import { GrowthForm, type GrowthSettings } from "./GrowthForm";
import { CommissionsForm } from "../commissions/CommissionsForm";
import { MaintenanceSwitch } from "@/components/MaintenanceSwitch";
import { Alert, Card, DetailList, PageHeader } from "@/components/ui";
import type { PlatformSettings } from "@/lib/types";

// Definições num só sítio (redesenho 2026-10-20): comissões e sinal,
// regras de reservas e marketplace, e o modo de manutenção.
// Só Super Admin grava (policy has_admin_permission('platform.manage')).
export default async function SettingsPage() {
  const { adminRole } = await requireAdmin();
  const supabase = await createClient();

  const { data } = await supabase.from("platform_settings").select("*").eq("id", 1).single();
  const settings = data as PlatformSettings & { maintenance_mode_guest?: boolean; guest_offers_enabled?: boolean };
  const canManage = adminRole === "super_admin";
  const { data: summary } = await supabase.rpc("admin_growth_summary");
  const sum = (summary ?? null) as { founders: number; founders_featured: number; pro_active: number; pro_paying: number; referrals: number; referrals_counted: number } | null;
  const g = settings as unknown as GrowthSettings;
  const growthReady = g.pro_price_monthly !== undefined;
  const yes = (b: boolean | undefined) => (b ? "Sim" : "Não");

  return (
    <div className="page" style={{ maxWidth: 880 }}>
      <PageHeader title="Definições" subtitle="Regras de negócio da plataforma. As alterações aplicam-se logo a toda a app." />

      {!canManage && <Alert tone="warning">Só uma conta Super Admin pode alterar estas definições. Estás a ver os valores atuais.</Alert>}

      <Card id="comissoes" title="Comissão, sinal e cancelamento" subtitle="Quanto a À Nossa! recebe e quando o sinal é devolvido.">
        {canManage ? (
          <CommissionsForm settings={settings} />
        ) : (
          <DetailList
            items={[
              {
                label: "Taxa do organizador",
                value: (((settings as { organizer_fee_tiers?: { up_to: number | null; pct: number }[] }).organizer_fee_tiers) ?? [])
                  .map((t) => (t.up_to == null ? `${t.pct}% acima` : `${t.pct}% até ${t.up_to} €`))
                  .join(", ") || `${settings.platform_commission_percentage}%`,
              },
              {
                label: "Taxa descontada ao parceiro",
                value: (((settings as { partner_fee_tiers?: { up_to: number | null; pct: number }[] }).partner_fee_tiers) ?? [])
                  .map((t) => (t.up_to == null ? `${t.pct}% acima` : `${t.pct}% até ${t.up_to} €`))
                  .join(", ") + " (IVA incl.)",
              },
              {
                label: "Parceiros novos sem taxa",
                value: `${(settings as { partner_free_months?: number }).partner_free_months ?? 0} mês(es) + ${(settings as { partner_free_extra_months?: number }).partner_free_extra_months ?? 0} se não vender`,
              },
              { label: "Sinal", value: `${settings.deposit_percentage}% do total` },
              { label: "Sinal reembolsável", value: `${(settings as { deposit_refund_window_hours?: number }).deposit_refund_window_hours ?? 48} h depois de pagar` },
              { label: "Restante reembolsável", value: `até ${settings.cancellation_penalty_days} dias antes` },
            ]}
          />
        )}
      </Card>

      <Card title="Reservas e marketplace" subtitle="Prazos das reservas, aprovação de parceiros e avaliações.">
        {canManage ? (
          <SettingsForm settings={settings} />
        ) : (
          <DetailList
            items={[
              { label: "Prazo mínimo para reservar", value: `${settings.booking_min_days_before_event} dias antes` },
              { label: "Tempo para pagar o sinal", value: `${settings.default_booking_hold_hours} horas` },
              { label: "Margem após atraso", value: `${settings.payment_grace_period_days} dias` },
              { label: "Aprovação manual de parceiros", value: yes(settings.manual_partner_approval) },
              { label: "Avaliar só depois de concluída", value: yes(settings.review_requires_completed_booking) },
              { label: "Ofertas para convidados", value: yes(settings.guest_offers_enabled) },
            ]}
          />
        )}
      </Card>

      <Card id="fundadores" title="Fundadores, convites e Pro" subtitle="Incentivos para os parceiros: vagas de fundador, clientes sem comissão pelos convites e o plano Pro.">
        {sum && (
          <DetailList
            items={[
              { label: "Fundadores", value: `${sum.founders} de ${g.founder_slots ?? 100} (${sum.founders_featured} com destaque grátis)` },
              { label: "Clientes trazidos por convite", value: `${sum.referrals} (${sum.referrals_counted} já pagaram)` },
              { label: "Parceiros Pro", value: `${sum.pro_active} (${sum.pro_paying} a pagar)` },
            ]}
          />
        )}
        {!growthReady ? (
          <Alert tone="warning">Falta correr as migrações 160 e 161 (página Migrações) para editar estas definições.</Alert>
        ) : canManage ? (
          <div style={{ marginTop: 14 }}>
            <GrowthForm settings={g} />
          </div>
        ) : (
          <DetailList
            items={[
              { label: "Vagas de fundador", value: `${g.founder_slots}` },
              { label: "Sem comissão a cada", value: `${g.referral_free_every} clientes (mín. ${g.referral_min_booking} €)` },
              { label: "Pro", value: `${g.pro_price_monthly} €/mês · ${g.pro_price_yearly} €/ano · −${g.pro_fee_discount} ponto(s) de comissão · cliente grátis a cada ${g.pro_referral_free_every} · destaque +${g.pro_promotion_extra_pct}%` },
            ]}
          />
        )}
        <p className="field-hint" style={{ marginTop: 12 }}>Para dar ou tirar o selo de fundador ou o Pro a um parceiro, abre o parceiro em Parceiros.</p>
      </Card>

      <Card id="manutencao" title="Modo de manutenção" subtitle="Bloqueia a app para um tipo de utilizador enquanto fazes alterações. O admin continua a funcionar.">
        {canManage ? (
          <MaintenanceSwitch
            couple={settings.maintenance_mode_couple}
            partner={settings.maintenance_mode_partner}
            guest={settings.maintenance_mode_guest ?? false}
            guestAvailable={settings.maintenance_mode_guest !== undefined}
          />
        ) : (
          <DetailList
            items={[
              { label: "Utilizadores · organizar", value: yes(settings.maintenance_mode_couple) },
              { label: "Parceiros", value: yes(settings.maintenance_mode_partner) },
              { label: "Utilizadores · sem evento", value: yes(settings.maintenance_mode_guest) },
            ]}
          />
        )}
      </Card>
    </div>
  );
}
