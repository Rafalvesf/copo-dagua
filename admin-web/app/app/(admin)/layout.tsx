import type { ReactNode } from "react";
import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { AdminSidebar } from "@/components/AdminSidebar";
import { EditModeProvider } from "@/lib/edit-mode-context";
import { EditModeToggle } from "@/components/EditModeToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NotificationsMenu, type AdminAlert } from "@/components/NotificationsMenu";
import { initials } from "@/lib/format";

// Estrutura de todas as páginas do admin: menu à esquerda, barra de topo
// (pesquisa, manutenção, alertas, conta) e o conteúdo com largura máxima.
// requireAdmin() aqui só evita mostrar a estrutura a quem não é admin; cada
// página volta a verificar antes de ler dados (ver lib/dal.ts).
export default async function AdminLayout({ children }: { children: ReactNode }) {
  const { fullName } = await requireAdmin();

  const supabase = await createClient();
  const [pendingQ, disputesQ, ticketsQ, settingsQ, flaggedQ, refundsQ, reportsQ, tasksQ] = await Promise.all([
    supabase.from("partner_profiles").select("id", { count: "exact", head: true }).eq("status", "pending_review"),
    // Disputas por decidir (migração 109) — 0 se a tabela ainda não existir.
    supabase.from("disputes").select("id", { count: "exact", head: true }).eq("status", "open"),
    supabase.from("support_tickets").select("id", { count: "exact", head: true }).in("status", ["open", "pending"]),
    supabase.from("platform_settings").select("*").eq("id", 1).maybeSingle(),
    supabase.from("bookings").select("id", { count: "exact", head: true }).eq("status", "payment_overdue"),
    supabase
      .from("payments")
      .select("id, bookings!inner(status)", { count: "exact", head: true })
      .eq("status", "paid")
      .in("bookings.status", ["cancelled_by_couple", "cancelled_by_partner"]),
    // Denúncias por decidir (migração 130) — 0 se a tabela ainda não existir.
    supabase.from("content_reports").select("id", { count: "exact", head: true }).eq("status", "open"),
    // Pendentes por fazer (migração 137) — 0 se a tabela ainda não existir.
    supabase.from("admin_tasks").select("id", { count: "exact", head: true }).eq("done", false),
  ]);
  const pending = pendingQ.count ?? 0;
  const openDisputes = disputesQ.count ?? 0;
  const openTickets = ticketsQ.count ?? 0;
  const overdue = flaggedQ.count ?? 0;
  const refunds = refundsQ.count ?? 0;
  const openReports = reportsQ.count ?? 0;
  const openTasks = tasksQ.count ?? 0;
  const plural = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;
  const alerts: AdminAlert[] = [
    ...(openReports > 0 ? [{ key: "rep", href: "/reports", title: plural(openReports, "denúncia por decidir", "denúncias por decidir"), detail: "Decidir em menos de 24 horas" }] : []),
    ...(openDisputes > 0 ? [{ key: "disp", href: "/disputes", title: plural(openDisputes, "disputa por decidir", "disputas por decidir"), detail: "A reserva fica parada até decidires" }] : []),
    ...(overdue > 0 ? [{ key: "over", href: "/bookings?status=problems", title: plural(overdue, "reserva com pagamento em atraso", "reservas com pagamento em atraso"), detail: "Ver reservas" }] : []),
    ...(refunds > 0 ? [{ key: "ref", href: "/refunds", title: plural(refunds, "reembolso por confirmar", "reembolsos por confirmar"), detail: "Pagamentos de reservas canceladas" }] : []),
    ...(pending > 0 ? [{ key: "pp", href: "/partners?status=pending_review", title: plural(pending, "parceiro para aprovar", "parceiros para aprovar"), detail: "Rever perfil e aprovar" }] : []),
    ...(openTickets > 0 ? [{ key: "sup", href: "/support", title: plural(openTickets, "pedido de suporte", "pedidos de suporte"), detail: "Por responder" }] : []),
  ];
  const s = (settingsQ.data ?? {}) as Record<string, unknown>;
  const maintenance = [
    s.maintenance_mode_couple ? "Organizadores" : null,
    s.maintenance_mode_partner ? "Parceiros" : null,
    s.maintenance_mode_guest ? "Convidados" : null,
  ].filter(Boolean) as string[];

  return (
    <EditModeProvider>
      <div className="admin-shell">
        <AdminSidebar
          fullName={fullName}
          pendingCount={pending}
          openDisputes={openDisputes}
          openTickets={openTickets}
          openReports={openReports}
          openTasks={openTasks}
          maintenance={maintenance}
        />
        <main className="admin-main">
          <div className="admin-topbar">
            <form action="/search" className="topbar-search" role="search">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21l-4.3-4.3" />
              </svg>
              <input type="search" name="q" placeholder="Pesquisar pessoas, parceiros, eventos, reservas…" aria-label="Pesquisar" />
            </form>
            <div className="spacer" />
            {maintenance.length > 0 && (
              <Link href="/settings#manutencao" className="maint-pill" title="Abrir definições de manutenção">
                <span aria-hidden style={{ width: 7, height: 7, borderRadius: "50%", background: "currentColor" }} />
                Manutenção: {maintenance.join(", ")}
              </Link>
            )}
            <EditModeToggle />
            <ThemeToggle />
            <NotificationsMenu alerts={alerts} />
            <Link href="/settings" className="avatar" aria-label="Definições" title={fullName}>
              {initials(fullName)}
            </Link>
          </div>
          <div className="admin-content">{children}</div>
        </main>
      </div>
    </EditModeProvider>
  );
}
