"use client";

import { useState } from "react";

// Copia o SQL de uma migração (ou de todas) para colar no SQL Editor.
export function CopySql({ sql, label = "Copiar SQL" }: { sql: string; label?: string }) {
  const [done, setDone] = useState<"ok" | "fail" | null>(null);
  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(sql);
          setDone("ok");
        } catch {
          setDone("fail");
        }
        setTimeout(() => setDone(null), 2500);
      }}
    >
      {done === "ok" ? "Copiado ✓" : done === "fail" ? "Não deu — usa o ficheiro" : label}
    </button>
  );
}
