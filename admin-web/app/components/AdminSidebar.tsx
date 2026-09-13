"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { initials } from "@/lib/format";

type NavItem = { href: string; label: string; icon: ReactNode; badge?: number };
type NavGroup = { title: string; items: NavItem[] };

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
} as const;

// Every section from the original platform spec gets a real route now —
// sections without a real backend yet show an honest "não disponível"
// state (components/ComingSoon.tsx) instead of being hidden or faked.
// See ROADMAP.md, "Nota de arquiteto".
function buildGroups(pendingPartners: number): NavGroup[] {
  return [
    { title: "Visão geral", items: [{ href: "/", label: "Dashboard", icon: icons.home }] },
    {
      title: "Gestão",
      items: [
        { href: "/users", label: "Utilizadores", icon: icons.users },
        { href: "/weddings", label: "Casamentos", icon: icons.calendar },
        { href: "/partners", label: "Parceiros", icon: icons.store, badge: pendingPartners },
        { href: "/bookings", label: "Reservas", icon: icons.calendar },
        { href: "/payments", label: "Pagamentos", icon: icons.coin },
      ],
    },
    {
      title: "Marketplace",
      items: [
        { href: "/categories", label: "Categorias", icon: icons.tag },
        { href: "/moderation", label: "Avaliações e Denúncias", icon: icons.star },
      ],
    },
    {
      title: "Motor de tarefas",
      items: [
        { href: "/task-templates", label: "Templates de tarefas", icon: icons.flag },
        { href: "/task-analytics", label: "Analytics de tarefas", icon: icons.bar },
      ],
    },
    {
      title: "Suporte",
      items: [{ href: "/support", label: "Pedidos de suporte", icon: icons.headset }],
    },
    {
      title: "Plataforma",
      items: [
        { href: "/analytics", label: "Analytics", icon: icons.bar },
        { href: "/commissions", label: "Comissões", icon: icons.flag },
        { href: "/settings", label: "Definições", icon: icons.settings },
      ],
    },
  ];
}

export function AdminSidebar({
  fullName,
  pendingCount,
}: {
  fullName: string;
  pendingCount: number;
}) {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    // `router.refresh()` a seguir a `push()` estava a forçar o layout
    // (incluindo esta sidebar, com o `pendingCount` já sem sessão válida
    // para o ir buscar) a voltar a renderizar antes da navegação para
    // `/login` terminar — o salto visível no bloco do avatar/logout que
    // o utilizador reportou. `push()` sozinho já é suficiente: a página
    // de destino não faz parte deste layout, não precisa dos dados dele
    // atualizados.
    router.push("/login");
  }

  const groups = buildGroups(pendingCount);

  return (
    <nav
      style={{
        width: 248,
        flexShrink: 0,
        display: "flex",
        flexDirection: "column",
        padding: "22px 14px",
        borderRight: "1px solid var(--border-muted)",
        minHeight: "100dvh",
        overflowY: "auto",
        background: "var(--surface)",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 10,
          padding: "0 8px",
          marginBottom: 28,
        }}
      >
        <span
          aria-hidden
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent), var(--accent-dark))",
          }}
        />
        <div>
          <p style={{ fontFamily: "var(--font-serif)", fontWeight: 600, fontSize: 15, letterSpacing: "0.01em" }}>
            Copo d&apos;Água
          </p>
          <p style={{ fontSize: 12, fontWeight: 400, color: "var(--ink-muted)" }}>
            Admin
          </p>
        </div>
      </div>

      {groups.map((group) => (
        <div key={group.title} style={{ marginBottom: 16 }}>
          <p
            style={{
              fontSize: 12,
              fontWeight: 400,
              color: "var(--ink-muted)",
              padding: "0 12px",
              marginBottom: 4,
            }}
          >
            {group.title}
          </p>
          {group.items.map((item) => (
            <SidebarLink
              key={item.href}
              href={item.href}
              label={item.label}
              icon={item.icon}
              active={item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)}
              badge={item.badge && item.badge > 0 ? item.badge : undefined}
            />
          ))}
        </div>
      ))}

      <div style={{ marginTop: "auto", paddingTop: 20 }}>
        <div
          style={{
            borderTop: "1px solid var(--border-muted)",
            paddingTop: 14,
            display: "flex",
            alignItems: "center",
            gap: 10,
            padding: "14px 8px 0",
          }}
        >
          <span
            aria-hidden
            style={{
              width: 32,
              height: 32,
              flexShrink: 0,
              borderRadius: "50%",
              background: "var(--status-suspended-bg)",
              color: "var(--ink)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {initials(fullName)}
          </span>
          <div style={{ minWidth: 0, flex: 1 }}>
            <p style={{ fontWeight: 600, fontSize: 13, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
              {fullName}
            </p>
            <button
              onClick={handleLogout}
              style={{
                marginTop: 2,
                background: "none",
                border: "none",
                padding: 0,
                fontSize: 12,
                color: "var(--ink-muted)",
                cursor: "pointer",
                textDecoration: "underline",
              }}
            >
              Terminar sessão
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function SidebarLink({
  href,
  label,
  icon,
  active,
  badge,
}: {
  href: string;
  label: string;
  icon: ReactNode;
  active: boolean;
  badge?: number;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "9px 12px",
        borderRadius: 12,
        fontSize: 14,
        fontWeight: 600,
        color: active ? "var(--accent-dark)" : "var(--ink)",
        background: active ? "var(--status-published-bg)" : "transparent",
      }}
    >
      <span style={{ display: "flex", flexShrink: 0, opacity: active ? 1 : 0.7 }}>{icon}</span>
      <span style={{ flex: 1, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{label}</span>
      {badge !== undefined && (
        <span
          style={{
            fontSize: 12,
            fontWeight: 600,
            background: "var(--status-pending-fg)",
            color: "var(--surface)",
            borderRadius: 999,
            padding: "1px 7px",
          }}
        >
          {badge}
        </span>
      )}
    </Link>
  );
}
