"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Polling-based "live" refresh, not a websocket/Supabase Realtime
// subscription — simpler, no publication/RLS-for-realtime setup required,
// good enough for an admin dashboard where a few seconds of staleness is
// fine. See admin-web/dashboard/requirements.md.
export function LiveRefresh({ intervalSeconds = 20 }: { intervalSeconds?: number }) {
  const router = useRouter();
  const [secondsAgo, setSecondsAgo] = useState(0);

  useEffect(() => {
    const refreshId = setInterval(() => {
      router.refresh();
      setSecondsAgo(0);
    }, intervalSeconds * 1000);

    const tickId = setInterval(() => setSecondsAgo((s) => s + 1), 1000);

    return () => {
      clearInterval(refreshId);
      clearInterval(tickId);
    };
  }, [router, intervalSeconds]);

  return (
    <span style={{ fontSize: 12, color: "var(--ink-muted)", display: "inline-flex", alignItems: "center", gap: 6 }}>
      <span
        aria-hidden
        style={{
          width: 6,
          height: 6,
          borderRadius: "50%",
          background: "var(--status-published-fg)",
          display: "inline-block",
        }}
      />
      Atualizado há {secondsAgo}s
    </span>
  );
}
