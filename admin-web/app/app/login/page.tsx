"use client";

import { useActionState, type CSSProperties } from "react";
import { login, type LoginState } from "./actions";

const initialState: LoginState = { error: null };

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <main
      style={{
        minHeight: "100dvh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 24,
      }}
    >
      <form
        action={formAction}
        style={{
          width: "100%",
          maxWidth: 360,
          background: "var(--surface)",
          borderRadius: 20,
          boxShadow: "var(--shadow-card)",
          padding: 32,
          display: "flex",
          flexDirection: "column",
          gap: 16,
        }}
      >
        <div style={{ textAlign: "center", marginBottom: 8 }}>
          <div
            aria-hidden
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              margin: "0 auto 16px",
              background:
                "linear-gradient(135deg, var(--accent), var(--accent-dark))",
            }}
          />
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 22,
              fontWeight: 600,
            }}
          >
            Copo d&apos;Água — Admin
          </h1>
        </div>

        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 13, color: "var(--ink-muted)" }}>Email</span>
          <input
            name="email"
            type="email"
            required
            autoComplete="username"
            style={inputStyle}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          <span style={{ fontSize: 13, color: "var(--ink-muted)" }}>
            Password
          </span>
          <input
            name="password"
            type="password"
            required
            autoComplete="current-password"
            style={inputStyle}
          />
        </label>

        {state.error && (
          <p style={{ color: "var(--status-rejected-fg)", fontSize: 13 }}>
            {state.error}
          </p>
        )}

        <button
          type="submit"
          disabled={pending}
          style={{
            marginTop: 8,
            padding: "12px 20px",
            borderRadius: 999,
            border: "none",
            background: "var(--ink)",
            color: "var(--surface)",
            fontWeight: 600,
            cursor: pending ? "default" : "pointer",
            opacity: pending ? 0.7 : 1,
          }}
        >
          {pending ? "A entrar..." : "Entrar"}
        </button>
      </form>
    </main>
  );
}

const inputStyle: CSSProperties = {
  padding: "10px 14px",
  borderRadius: 12,
  border: "1px solid var(--border-muted)",
  background: "var(--background)",
};
