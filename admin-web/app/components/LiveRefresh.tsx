"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// Atualiza a página sozinha (polling, sem Realtime) — chega para o admin.
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
    <span className="subtle" style={{ fontSize: 12, display: "inline-flex", alignItems: "center", gap: 6 }}>
      <span aria-hidden style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--success-fg)" }} />
      Em direto · {secondsAgo < 5 ? "agora" : `há ${secondsAgo}s`}
    </span>
  );
}
