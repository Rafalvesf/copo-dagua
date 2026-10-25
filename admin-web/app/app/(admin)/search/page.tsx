import Link from "next/link";
import type { ReactNode } from "react";
import { requireAdmin } from "@/lib/dal";
import { createClient } from "@/lib/supabase/server";
import { bookingStatusLabel } from "@/components/BookingStatusBadge";
import { eventTypeLabel } from "@/lib/event-types";
import { Card, Empty, PageHeader } from "@/components/ui";

// Pesquisa global do admin (2026-10-20): substitui a caixa "Pesquisar..."
// que não fazia nada. Procura em utilizadores, parceiros, eventos e
// reservas (pelo número, ex: WED-1).
export default async function SearchPage({ searchParams }: PageProps<"/search">) {
  await requireAdmin();
  const params = await searchParams;
  const raw = typeof params.q === "string" ? params.q : "";
  // Sem vírgulas/parênteses: são separadores no filtro `or` do PostgREST.
  const q = raw.replace(/[,()*%]/g, " ").trim().slice(0, 60);

  const supabase = await createClient();
  const like = `%${q}%`;
  const [users, partners, events, bookings] = q
    ? await Promise.all([
        supabase.from("profiles").select("id, full_name, role").ilike("full_name", like).limit(10),
        supabase.from("partner_profiles").select("id, business_name, status, city").ilike("business_name", like).limit(10),
        supabase
          .from("weddings")
          .select("id, partner_name_1, partner_name_2, location, event_type, event_type_other, wedding_date")
          .or(`partner_name_1.ilike.${like},partner_name_2.ilike.${like},location.ilike.${like}`)
          .limit(10),
        supabase
          .from("bookings")
          .select("id, booking_number, status, event_date, partner_profiles(business_name)")
          .ilike("booking_number", like)
          .limit(20),
      ])
    : [null, null, null, null];

  const total =
    (users?.data?.length ?? 0) + (partners?.data?.length ?? 0) + (events?.data?.length ?? 0) + (bookings?.data?.length ?? 0);

  return (
    <div className="page" style={{ maxWidth: 860 }}>
      <PageHeader title="Pesquisa" subtitle={q ? `${total} ${total === 1 ? "resultado" : "resultados"} para “${q}”` : "Pessoas, parceiros, eventos e reservas."} />
      <form action="/search" className="row" style={{ flexWrap: "nowrap" }}>
        <input type="search" name="q" defaultValue={raw} autoFocus placeholder="Nome, parceiro, local ou número da reserva (ex.: WED-1)" className="input" style={{ flex: 1, minWidth: 0, height: 42 }} />
        <button type="submit" className="btn btn-primary" style={{ height: 42 }}>
          Pesquisar
        </button>
      </form>

      {q && total === 0 && (
        <Card>
          <Empty title="Nada encontrado">Experimenta outro nome ou o número da reserva.</Empty>
        </Card>
      )}

      {(users?.data?.length ?? 0) > 0 && (
        <Group title="Utilizadores">
          {users!.data!.map((u) => (
            <Row key={u.id} href={`/users/${u.id}`} title={u.full_name || "Sem nome"} sub={roleLabel(u.role)} />
          ))}
        </Group>
      )}
      {(partners?.data?.length ?? 0) > 0 && (
        <Group title="Parceiros">
          {partners!.data!.map((p) => (
            <Row key={p.id} href={`/partners/${p.id}`} title={p.business_name} sub={[p.city, statusLabel(p.status)].filter(Boolean).join(" · ")} />
          ))}
        </Group>
      )}
      {(events?.data?.length ?? 0) > 0 && (
        <Group title="Eventos">
          {events!.data!.map((w) => (
            <Row
              key={w.id}
              href={`/weddings/${w.id}`}
              title={[w.partner_name_1, w.partner_name_2].filter(Boolean).join(" & ") || "Sem nome"}
              sub={[eventTypeLabel(w.event_type, w.event_type_other), w.location, w.wedding_date ? new Date(w.wedding_date).toLocaleDateString("pt-PT") : null]
                .filter(Boolean)
                .join(" · ")}
            />
          ))}
        </Group>
      )}
      {(bookings?.data?.length ?? 0) > 0 && (
        <Group title="Reservas">
          {bookings!.data!.map((b) => {
            const pp = b.partner_profiles as unknown as { business_name: string } | { business_name: string }[] | null;
            const name = (Array.isArray(pp) ? pp[0] : pp)?.business_name ?? "Parceiro";
            return (
              <Row
                key={b.id}
                href={`/bookings/${b.id}`}
                title={`${b.booking_number} · ${name}`}
                sub={`${bookingStatusLabel(b.status)} · ${new Date(b.event_date).toLocaleDateString("pt-PT")}`}
              />
            );
          })}
        </Group>
      )}
    </div>
  );
}

function roleLabel(role: string) {
  return role === "couple" ? "Organizador" : role === "partner" ? "Parceiro" : role === "guest" ? "Convidado" : "Admin";
}
function statusLabel(s: string) {
  return (
    { published: "Publicado", pending_review: "A aguardar", changes_required: "Alterações pedidas", rejected: "Rejeitado", suspended: "Suspenso", draft: "Rascunho" } as Record<
      string,
      string
    >
  )[s] ?? s;
}
function Group({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Card title={title} flush>
      <ul className="list">{children}</ul>
    </Card>
  );
}
function Row({ href, title, sub }: { href: string; title: string; sub: string }) {
  return (
    <li style={{ padding: 0 }}>
      <Link href={href} className="row" style={{ flexWrap: "nowrap", padding: "12px 20px", width: "100%", gap: 12 }}>
        <span className="list-main">
          <span className="list-title" style={{ display: "block", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{title}</span>
          <span className="list-sub" style={{ display: "block" }}>{sub}</span>
        </span>
        <span className="subtle" aria-hidden>›</span>
      </Link>
    </li>
  );
}
