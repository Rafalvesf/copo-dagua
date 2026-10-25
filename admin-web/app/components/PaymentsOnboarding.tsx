"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { createPaymentsSession } from "@/app/(admin)/partners/[id]/actions";

// Formulário da Stripe para ativar os pagamentos do parceiro, embutido no
// admin (2026-10-25): "nunca por link, tal como vai ser a app". Os dados
// (identidade, morada, IBAN) vão do formulário diretamente para a Stripe.

type ConnectInstance = { create: (c: string) => HTMLElement & Record<string, unknown> };
type StripeConnectGlobal = {
  init?: (o: Record<string, unknown>) => ConnectInstance;
  onLoad?: () => void;
};

function loadConnect(): Promise<StripeConnectGlobal> {
  const w = window as unknown as { StripeConnect?: StripeConnectGlobal };
  return new Promise((resolve, reject) => {
    if (w.StripeConnect?.init) return resolve(w.StripeConnect);
    const s = document.createElement("script");
    s.src = "https://connect-js.stripe.com/v1.0/connect.js";
    s.onload = () => {
      if (w.StripeConnect?.init) return resolve(w.StripeConnect);
      w.StripeConnect = w.StripeConnect || {};
      w.StripeConnect.onLoad = () => resolve(w.StripeConnect!);
    };
    s.onerror = () => reject(new Error("connect_js"));
    document.head.appendChild(s);
  });
}

function cssVar(name: string, fallback: string): string {
  const v = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return v || fallback;
}

export function PaymentsOnboarding({ partnerId }: { partnerId: string }) {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<"idle" | "loading" | "ready" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const host = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    let el: HTMLElement | null = null;
    (async () => {
      setState("loading");
      setError(null);
      const first = await createPaymentsSession(partnerId);
      if (cancelled) return;
      if ("error" in first) {
        setError(first.error);
        setState("error");
        return;
      }
      try {
        const sc = await loadConnect();
        if (cancelled || !host.current || !sc.init) return;
        let used = false;
        const instance = sc.init({
          publishableKey: first.publishableKey,
          locale: "pt-PT",
          fetchClientSecret: async () => {
            if (!used) {
              used = true;
              return first.clientSecret;
            }
            const again = await createPaymentsSession(partnerId);
            return "error" in again ? "" : again.clientSecret;
          },
          appearance: {
            overlays: "dialog",
            variables: {
              colorPrimary: cssVar("--accent", "#4f6b4a"),
              colorText: cssVar("--ink", "#141413"),
              colorBackground: cssVar("--surface", "#ffffff"),
              colorBorder: cssVar("--border", "#e8e6dc"),
              borderRadius: "10px",
              buttonBorderRadius: "999px",
              fontFamily: "Roboto, system-ui, sans-serif",
            },
          },
        });
        el = instance.create("account-onboarding");
        const anyEl = el as unknown as Record<string, (arg: unknown) => void>;
        try {
          anyEl.setCollectionOptions?.({ fields: "eventually_due", futureRequirements: "include" });
        } catch {
          /* versões antigas do Connect.js */
        }
        anyEl.setOnExit?.(() => {
          setOpen(false);
          setState("idle");
          router.refresh();
        });
        host.current.innerHTML = "";
        host.current.appendChild(el);
        setState("ready");
      } catch {
        if (!cancelled) {
          setError("Não foi possível carregar o formulário da Stripe.");
          setState("error");
        }
      }
    })();
    return () => {
      cancelled = true;
      if (el?.parentNode) el.parentNode.removeChild(el);
    };
  }, [open, partnerId, router]);

  if (!open) {
    return (
      <button type="button" className="btn btn-primary btn-block" style={{ marginTop: 12 }} onClick={() => setOpen(true)}>
        Preencher dados de pagamento
      </button>
    );
  }

  return (
    <div style={{ marginTop: 12, display: "flex", flexDirection: "column", gap: 10 }}>
      {state === "loading" && <p className="field-hint">A abrir o formulário da Stripe…</p>}
      {error && <p className="field-hint" style={{ color: "var(--ink)", fontWeight: 600 }}>{error}</p>}
      <div ref={host} style={{ minHeight: state === "ready" ? 320 : 0 }} />
      <button
        type="button"
        className="btn btn-ghost btn-sm"
        onClick={() => {
          setOpen(false);
          setState("idle");
          router.refresh();
        }}
      >
        Fechar
      </button>
    </div>
  );
}
