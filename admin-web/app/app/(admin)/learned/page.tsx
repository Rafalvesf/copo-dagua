import { requireAdmin } from "@/lib/dal";
import { Badge, Card, PageHeader, type Tone } from "@/components/ui";
import { LEARNED, type Verdict } from "@/lib/learned";

// Achievements Learned (pedido do Rafael, 2026-11-25): o que aprendemos, o
// que verificámos na À Nossa! e o que falta fazer. Os dados estão em
// lib/learned.ts — cada coisa nova que o Rafael aprende entra lá.

const VERDICT: Record<Verdict, { label: string; tone: Tone }> = {
  ok: { label: "Está bem", tone: "success" },
  problema: { label: "Por resolver", tone: "warning" },
  "nao-se-aplica": { label: "Não se aplica", tone: "neutral" },
};

function fmtDate(d: string): string {
  return new Date(d + "T12:00:00Z").toLocaleDateString("pt-PT", { day: "numeric", month: "short", year: "numeric", timeZone: "Europe/Lisbon" });
}

export default async function LearnedPage() {
  await requireAdmin();
  const open = LEARNED.reduce((n, l) => n + l.checks.filter((c) => c.verdict === "problema").length, 0);

  return (
    <div className="stack">
      <PageHeader
        title="Achievements Learned"
        subtitle="O que aprendemos, o que verificámos na À Nossa! e o que falta fazer. Se voltar a acontecer, está aqui."
        badge={open > 0 ? <Badge tone="warning">{open} por resolver</Badge> : <Badge tone="success">Tudo resolvido</Badge>}
      />

      {LEARNED.map((l) => (
        <Card key={l.id} title={l.title} subtitle={`${fmtDate(l.date)} · ${l.source}`}>
          <p style={{ margin: "0 0 16px", fontSize: 14, lineHeight: 1.5 }}>{l.lesson}</p>
          <div className="stack" style={{ gap: 12 }}>
            {l.checks.map((c) => (
              <div key={c.item} style={{ borderTop: "1px solid var(--border, #E3E3E3)", paddingTop: 12 }}>
                <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
                  <strong style={{ fontSize: 14 }}>{c.item}</strong>
                  <Badge tone={VERDICT[c.verdict].tone}>{VERDICT[c.verdict].label}</Badge>
                </div>
                <p className="muted" style={{ margin: "6px 0 0", fontSize: 13, lineHeight: 1.5 }}>{c.found}</p>
                {c.next && (
                  <p style={{ margin: "6px 0 0", fontSize: 13, lineHeight: 1.5 }}>
                    <strong>A seguir:</strong> {c.next}
                  </p>
                )}
              </div>
            ))}
          </div>
        </Card>
      ))}
    </div>
  );
}
