// Mostrado logo ao mudar de página enquanto os dados chegam (2026-11).
export default function Loading() {
  return (
    <div className="page" aria-busy="true" aria-label="A carregar">
      <div className="skel" style={{ height: 34, width: "min(320px, 70%)" }} />
      <div className="skel" style={{ height: 16, width: "min(520px, 90%)" }} />
      <div className="grid grid-4">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="skel" style={{ height: 96 }} />
        ))}
      </div>
      <div className="skel" style={{ height: 320 }} />
    </div>
  );
}
