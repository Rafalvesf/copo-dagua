"use client";

import { useTransition } from "react";
import { resolveReport } from "./actions";

export function ReportActions({ reportId }: { reportId: string }) {
  const [isPending, startTransition] = useTransition();
  return (
    <div className="row" style={{ gap: 6 }}>
      <button
        type="button"
        className="btn btn-danger-outline btn-sm"
        disabled={isPending}
        onClick={() => startTransition(async () => { await resolveReport(reportId, "remove"); })}
      >
        Remover conteúdo
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        disabled={isPending}
        onClick={() => startTransition(async () => { await resolveReport(reportId, "dismiss"); })}
      >
        Arquivar
      </button>
    </div>
  );
}
