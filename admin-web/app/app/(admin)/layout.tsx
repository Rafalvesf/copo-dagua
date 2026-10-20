import type { ReactNode } from "react";
import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { AdminSidebar } from "@/components/AdminSidebar";
import { EditModeProvider } from "@/lib/edit-mode-context";
import { EditModeToggle } from "@/components/EditModeToggle";
import { ThemeToggle } from "@/components/ThemeToggle";
import { initials } from "@/lib/format";

// Estrutura de todas as páginas do admin: menu à esquerda, barra de topo
// (pesquisa, manutenção, alertas, conta) e o conteúdo com largura máxima.
// requireAdmin() aqui só evita mostrar a estrutura a quem não é admin; cada
// página volta a verificar antes de ler dados (ver lib/dal.ts).
export default async function AdminLayout({ children }: { children: ReactNode }) {
  const { fullName } = await requireAdmin();

  const supabase = await createClient();
  const [pendingQ, disputesQ, ticketsQ, settingsQ] = await Promise.all([
    supabase.from("partner_profiles").select("id", { count: "exact", head: true }).eq("status", "pending_review"),
    // Disputas por decidir (migração 109) — 0 se a tabela ainda não existir.
    supabase.from("disputes").select("id", { count: "exact", head: true }).eq("status", "open"),
    supabase.from("support_tickets").select("id", { count: "exact", head: true }).in("status", ["open", "pending"]),
    supabase.from("platform_settings").select("*").eq("id", 1).maybeSingle(),
  ]);
  const pending = pendingQ.count ?? 0;
  const openDisputes = disputesQ.count ?? 0;
  const openTickets = ticketsQ.count ?? 0;
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
            <Link
              href="/"
              className="icon-btn"
              aria-label={pending + openDisputes > 0 ? `${pending + openDisputes} assuntos por tratar` : "Sem assuntos por tratar"}
              title={pending + openDisputes > 0 ? `${pending + openDisputes} assuntos por tratar` : "Sem assuntos por tratar"}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9a6 6 0 0 1 12 0c0 4.5 1.5 6 1.5 6H4.5S6 13.5 6 9Z" />
                <path d="M10 19a2 2 0 0 0 4 0" />
              </svg>
              {pending + openDisputes > 0 && <span className="dot-count">{pending + openDisputes}</span>}
            </Link>
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
