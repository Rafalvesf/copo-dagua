"use client";

import { downloadCsv, type Signup } from "./SignupsSheet";

/** Exporta tudo de uma vez: um ficheiro de parceiros e outro de organizadores. */
export function BulkExport({
  partners,
  organizers,
}: {
  partners: Signup[];
  organizers: Signup[];
}) {
  return (
    <button
      type="button"
      className="btn btn-secondary btn-sm"
      disabled={!partners.length && !organizers.length}
      onClick={() => {
        if (partners.length) downloadCsv("parceiro", partners);
        if (organizers.length)
          setTimeout(() => downloadCsv("organizador", organizers), 400);
      }}
    >
      Exportar tudo ({partners.length + organizers.length})
    </button>
  );
}
