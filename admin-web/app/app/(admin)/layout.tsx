import type { ReactNode } from "react";
import Link from "next/link";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { AdminSidebar } from "@/components/AdminSidebar";
import { EditModeProvider } from "@/lib/edit-mode-context";
import { EditModeToggle } from "@/components/EditModeToggle";
import { initials } from "@/lib/format";

// Auth check happens once here via requireAdmin() (cached per request with
// React's cache()), not repeated in every page below — see lib/dal.ts and
// the Next.js auth guide's note on "Layouts and auth checks": this layout
// still relies on requireAdmin() being called again inside each page/action
// for the actual data fetch, since a layout doesn't gate what renders below it.
export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { fullName } = await requireAdmin();

  const supabase = await createClient();
  const { count } = await supabase
    .from("partner_profiles")
    .select("id", { count: "exact", head: true })
    .eq("status", "pending_review");

  return (
    // `height` (não `minHeight`) — teto rígido no ecrã visível, não um
    // mínimo. Combinado com `overflow: hidden` no `main`, garante que o
    // dashboard nunca causa scroll na página inteira (pedido explícito
    // do utilizador, 2026-08-31): se o conteúdo de cima (KPIs/gráficos)
    // não coubesse, era antes empurrado para além do ecrã; agora fica
    // sempre contido, e a última secção da página (`flex: 1,
    // minHeight: 0` em page.tsx) é a que cede espaço primeiro.
    <EditModeProvider>
      <div style={{ display: "flex", height: "100dvh" }}>
        <AdminSidebar fullName={fullName} pendingCount={count ?? 0} />
        <main
          style={{
            flex: 1,
            padding: "18px 40px 24px",
            display: "flex",
            flexDirection: "column",
            minHeight: 0,
          }}
        >
          <TopBar fullName={fullName} />
          {children}
        </main>
      </div>
    </EditModeProvider>
  );
}

// Barra fixa no topo de todas as páginas admin (pesquisa, notificações,
// avatar) — pesquisa e notificações são só chrome visual por agora, sem
// backend próprio ainda (nenhum módulo de pesquisa global nem de
// notificações existe no admin-web), ao contrário do avatar que já leva a
// uma página real (`/settings`). Ver `admin-web/dashboard/tasks.md`.
function TopBar({ fullName }: { fullName: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", gap: 12, marginBottom: 14, flexShrink: 0 }}>
      <div style={{ position: "relative", width: 260 }}>
        <span style={{ position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)", color: "var(--ink-muted)" }}>
          <SearchIcon />
        </span>
        <input
          type="text"
          placeholder="Pesquisar..."
          disabled
          style={{
            width: "100%",
            padding: "9px 44px 9px 36px",
            borderRadius: 10,
            border: "1px solid var(--border-muted)",
            background: "var(--surface)",
            fontSize: 13,
          }}
        />
        <span
          style={{
            position: "absolute",
            right: 10,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 11,
            color: "var(--ink-muted)",
            border: "1px solid var(--border-muted)",
            borderRadius: 6,
            padding: "1px 5px",
          }}
        >
          ⌘K
        </span>
      </div>
      <EditModeToggle />
      <span
        aria-hidden
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1px solid var(--border-muted)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--ink-muted)",
          flexShrink: 0,
        }}
      >
        <BellIcon />
      </span>
      <Link
        href="/settings"
        aria-label="Definições da conta"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          background: "var(--status-suspended-bg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 12,
          fontWeight: 600,
          flexShrink: 0,
        }}
      >
        {initials(fullName)}
      </Link>
    </div>
  );
}

function SearchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9a6 6 0 0 1 12 0c0 4.5 1.5 6 1.5 6H4.5S6 13.5 6 9Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </svg>
  );
}
