// Honest placeholder for sections with no backing data yet — never shows
// fabricated numbers. See ROADMAP.md, "Nota de arquiteto — especificação
// de admin panel avaliada e reduzida de âmbito".
export function ComingSoon({
  title,
  description,
  dependsOn,
  docsPath,
}: {
  title: string;
  description: string;
  dependsOn: string;
  docsPath: string;
}) {
  return (
    <div>
      <h1 style={{ fontFamily: "var(--font-serif)", fontSize: 28 }}>{title}</h1>
      <p style={{ color: "var(--ink-muted)", marginTop: 4 }}>{description}</p>

      <div
        style={{
          marginTop: 24,
          background: "var(--surface)",
          borderRadius: 16,
          boxShadow: "var(--shadow-card)",
          padding: 32,
          textAlign: "center",
          color: "var(--ink-muted)",
        }}
      >
        <p style={{ fontSize: 15, marginBottom: 8 }}>Ainda não disponível.</p>
        <p style={{ fontSize: 13 }}>
          Depende de: <strong>{dependsOn}</strong>
        </p>
        <p style={{ fontSize: 13, marginTop: 8 }}>
          Ver <code>{docsPath}</code> para o âmbito planeado.
        </p>
      </div>
    </div>
  );
}
