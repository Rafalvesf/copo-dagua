"use client";

import { useEffect, useState, type ReactNode } from "react";
import { NotificationsMenu, type AdminAlert } from "@/components/NotificationsMenu";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { initials } from "@/lib/format";
import { ThemeToggle } from "./ThemeToggle";

type NavItem = { href: string; label: string; icon: ReactNode; badge?: number; also?: string[] };
type NavGroup = { title?: string; items: NavItem[] };

function Icon({ children }: { children: ReactNode }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}

const icons = {
  home: (
    <Icon>
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
    </Icon>
  ),
  users: (
    <Icon>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3.5 20c0-3.3 2.5-5.5 5.5-5.5s5.5 2.2 5.5 5.5" />
      <circle cx="17.5" cy="9" r="2.5" />
      <path d="M15.8 14.2c2.4.3 4.2 2.3 4.2 5" />
    </Icon>
  ),
  store: (
    <Icon>
      <path d="M4 9V5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5V9" />
      <path d="M3.5 9h17l-.9 4.5a2 2 0 0 1-2 1.6h-11.2a2 2 0 0 1-2-1.6L3.5 9Z" />
      <path d="M6 15v4.5A.5.5 0 0 0 6.5 20h11a.5.5 0 0 0 .5-.5V15" />
    </Icon>
  ),
  calendar: (
    <Icon>
      <rect x="3.5" y="5" width="17" height="15" rx="2" />
      <path d="M8 3v4M16 3v4M3.5 10h17" />
    </Icon>
  ),
  coin: (
    <Icon>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 8v8M9.3 15.2c.4.7 1.4 1.2 2.7 1.2 1.7 0 3-.8 3-2.1 0-3-5.5-1.4-5.5-4.3 0-1.3 1.3-2.1 3-2.1 1.3 0 2.3.5 2.7 1.2" />
    </Icon>
  ),
  tag: (
    <Icon>
      <path d="M11.5 4h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-.6 1.4l-8 8a2 2 0 0 1-2.8 0l-5.5-5.5a2 2 0 0 1 0-2.8l8-8a2 2 0 0 1 1.4-.6Z" />
      <circle cx="15.5" cy="8.5" r="1.3" />
    </Icon>
  ),
  star: (
    <Icon>
      <path d="M12 3.5l2.6 5.4 5.9.7-4.3 4.1 1.1 5.9-5.3-2.9-5.3 2.9 1.1-5.9-4.3-4.1 5.9-.7Z" />
    </Icon>
  ),
  headset: (
    <Icon>
      <path d="M4 13v-1a8 8 0 0 1 16 0v1" />
      <rect x="3" y="13" width="4" height="6" rx="1.5" />
      <rect x="17" y="13" width="4" height="6" rx="1.5" />
      <path d="M19 19v.5a3 3 0 0 1-3 3h-2.5" />
    </Icon>
  ),
  scale: (
    <Icon>
      <path d="M12 4v16" />
      <path d="M7 20h10" />
      <path d="M5 8h14" />
      <path d="m5 8-3 6a3 3 0 0 0 6 0Z" />
      <path d="m19 8-3 6a3 3 0 0 0 6 0Z" />
    </Icon>
  ),
  refund: (
    <Icon>
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h11a5 5 0 0 1 0 10h-3" />
    </Icon>
  ),
  flag: (
    <Icon>
      <path d="M5 21V4" />
      <path d="M5 4.5h11l-2.2 3.5L16 11.5H5" />
    </Icon>
  ),
  bar: (
    <Icon>
      <path d="M4 20V10M11 20V4M18 20v-7" />
      <path d="M2.5 20.5h19" />
    </Icon>
  ),
  bell: (
    <Icon>
      <path d="M6 9a6 6 0 0 1 12 0c0 4.5 1.5 6 1.5 6H4.5S6 13.5 6 9Z" />
      <path d="M10 19a2 2 0 0 0 4 0" />
    </Icon>
  ),
  settings: (
    <Icon>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 13.5a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.9 2.9l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5v.2a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.9-2.9l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1h-.2a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.9-2.9l.1.1a1.7 1.7 0 0 0 1.9.3h.1a1.7 1.7 0 0 0 1-1.5v-.2a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5h.1a1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.9 2.9l-.1.1a1.7 1.7 0 0 0-.3 1.9v.1a1.7 1.7 0 0 0 1.5 1h.2a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
    </Icon>
  ),
  chart: (
    <Icon>
      <path d="M4 19V5" />
      <path d="M4 19h16" />
      <path d="m7 14 4-4 3 3 5-6" />
    </Icon>
  ),
  list: (
    <Icon>
      <path d="M9 6h11M9 12h11M9 18h11" />
      <path d="m3.5 6 1 1 2-2M3.5 12l1 1 2-2M3.5 18l1 1 2-2" />
    </Icon>
  ),
  ticket: (
    <Icon>
      <path d="M4 7.5A1.5 1.5 0 0 1 5.5 6h13A1.5 1.5 0 0 1 20 7.5V10a2 2 0 0 0 0 4v2.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 16.5V14a2 2 0 0 0 0-4Z" />
    </Icon>
  ),
  party: (
    <Icon>
      <path d="M4 20 9.5 6.5l8 8Z" />
      <path d="M14 4.5c.5 1 .3 2-.5 2.8M19.5 10c-1-.5-2-.3-2.8.5M17 3v1.5M21 7h-1.5" />
    </Icon>
  ),
} as const;

// Menu (redesenho 2026-10-20): menos grupos e nomes do dia a dia.
// Comissões e manutenção vivem agora dentro de Definições; Analytics de
// tarefas é um separador de Tarefas.
function buildGroups(pendingPartners: number, openDisputes: number, openTickets: number, openReports: number, openTasks: number): NavGroup[] {
  return [
    {
      items: [
        { href: "/", label: "Início", icon: icons.home },
        { href: "/analytics", label: "Analytics", icon: icons.chart },
        { href: "/pending", label: "Pendentes", icon: icons.list, badge: openTasks },
      ],
    },
    {
      title: "Operação",
      items: [
        { href: "/partners", label: "Parceiros", icon: icons.store, badge: pendingPartners },
        { href: "/bookings", label: "Reservas", icon: icons.ticket },
        { href: "/weddings", label: "Eventos", icon: icons.party },
        { href: "/users", label: "Utilizadores", icon: icons.users },
      ],
    },
    {
      title: "Dinheiro",
      items: [
        { href: "/payments", label: "Pagamentos", icon: icons.coin },
        { href: "/refunds", label: "Reembolsos", icon: icons.refund },
        { href: "/disputes", label: "Disputas", icon: icons.scale, badge: openDisputes },
      ],
    },
    {
      title: "Conteúdo",
      items: [
        { href: "/categories", label: "Categorias", icon: icons.tag },
        { href: "/moderation", label: "Avaliações", icon: icons.star },
        { href: "/reports", label: "Denúncias", icon: icons.scale, badge: openReports },
        { href: "/task-templates", label: "Tarefas", icon: icons.list, also: ["/task-analytics"] },
      ],
    },
    {
      title: "Ajuda",
      items: [
        { href: "/support", label: "Suporte", icon: icons.headset, badge: openTickets },
        { href: "/messages", label: "Mensagens", icon: icons.users },
      ],
    },
  ];
}

function isActive(pathname: string, item: NavItem): boolean {
  if (item.href === "/") return pathname === "/";
  return [item.href, ...(item.also ?? [])].some((h) => pathname === h || pathname.startsWith(h + "/"));
}

export function AdminSidebar({
  fullName,
  pendingCount,
  openDisputes = 0,
  openTickets = 0,
  openReports = 0,
  openTasks = 0,
  maintenance = [],
  alerts: alertItems = [],
}: {
  fullName: string;
  pendingCount: number;
  openDisputes?: number;
  openTickets?: number;
  openReports?: number;
  openTasks?: number;
  maintenance?: string[];
  alerts?: AdminAlert[];
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/login");
  }

  const groups = buildGroups(pendingCount, openDisputes, openTickets, openReports, openTasks);
  const settingsItem: NavItem = { href: "/settings", label: "Definições", icon: icons.settings, also: ["/commissions"] };
  // Telemóvel: o menu é uma gaveta que fecha sozinha ao mudar de página.
  const [open, setOpen] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- fecha a gaveta ao navegar
    setOpen(false);
  }, [pathname]);
  const current = [...groups.flatMap((g) => g.items), settingsItem].find((i) => isActive(pathname, i));
  const alerts = pendingCount + openDisputes;

  return (
    <>
      <div className="admin-mobilebar">
        <button type="button" className="icon-btn" aria-label="Abrir menu" onClick={() => setOpen(true)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          {alerts > 0 && <span className="dot-count">{alerts}</span>}
        </button>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="subtle" style={{ fontSize: 11 }}>À Nossa! · Admin</p>
          <p style={{ fontWeight: 600, fontSize: 15, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {current?.label ?? "Admin"}
          </p>
        </div>
        {maintenance.length > 0 && (
          <Link href="/settings#manutencao" className="badge badge-warning" title={`Manutenção: ${maintenance.join(", ")}`}>
            Manutenção
          </Link>
        )}
        <ThemeToggle />
        {/* No telemóvel a barra de topo some: o sino passa para aqui. */}
        <NotificationsMenu alerts={alertItems} />
        <Link href="/search" className="icon-btn" aria-label="Pesquisar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
        </Link>
      </div>
      <div className="admin-scrim" data-open={open} onClick={() => setOpen(false)} aria-hidden />
      <nav className="admin-sidebar" data-open={open} aria-label="Menu principal">
        <div className="sb-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="" className="sb-logo" width={32} height={32} />
          <div style={{ minWidth: 0 }}>
            <p className="sb-brand-name">À Nossa!</p>
            <p className="sb-brand-sub">Administração</p>
          </div>
          <button type="button" className="icon-btn admin-sidebar-close" aria-label="Fechar menu" onClick={() => setOpen(false)}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        {groups.map((group, gi) => (
          <div key={group.title ?? gi} className="sb-group">
            {group.title && <p className="sb-group-title">{group.title}</p>}
            {group.items.map((item) => (
              <SidebarLink key={item.href} item={item} active={isActive(pathname, item)} />
            ))}
          </div>
        ))}

        <div style={{ marginTop: "auto" }}>
          <div className="sb-group">
            <SidebarLink item={settingsItem} active={isActive(pathname, settingsItem)} />
          </div>
          <div className="sb-footer">
            <span className="avatar" aria-hidden>
              {initials(fullName)}
            </span>
            <div style={{ minWidth: 0, flex: 1 }}>
              <p className="sb-footer-name">{fullName}</p>
              <button type="button" className="sb-logout" onClick={handleLogout}>
                Terminar sessão
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

function SidebarLink({ item, active }: { item: NavItem; active: boolean }) {
  return (
    <Link href={item.href} className="sb-link" aria-current={active ? "page" : undefined}>
      {item.icon}
      <span className="sb-link-label">{item.label}</span>
      {item.badge !== undefined && item.badge > 0 && <span className="sb-count">{item.badge}</span>}
    </Link>
  );
}
