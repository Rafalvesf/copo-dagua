"use client";

import { useActionState } from "react";
import { login, type LoginState } from "./actions";

const initialState: LoginState = { error: null };

export default function LoginPage() {
  const [state, formAction, pending] = useActionState(login, initialState);

  return (
    <main style={{ minHeight: "100dvh", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px max(16px, env(safe-area-inset-left, 0px))" }}>
      <div style={{ width: "100%", maxWidth: 380 }} className="stack">
        <div className="row" style={{ justifyContent: "center", gap: 10, marginBottom: 6 }}>
          <span className="sb-logo" aria-hidden>
            À
          </span>
          <div>
            <p className="sb-brand-name">À Nossa!</p>
            <p className="sb-brand-sub">Administração</p>
          </div>
        </div>
        <form action={formAction} className="card card-body stack" style={{ padding: 28 }}>
          <div>
            <h1 style={{ fontSize: 20 }}>Entrar</h1>
            <p className="muted" style={{ fontSize: 13, marginTop: 4 }}>
              Só para a equipa À Nossa!.
            </p>
          </div>
          <label className="field">
            <span className="field-label">Email</span>
            <input name="email" type="email" required autoComplete="username" className="input" />
          </label>
          <label className="field">
            <span className="field-label">Password</span>
            <input name="password" type="password" required autoComplete="current-password" className="input" />
          </label>
          {state.error && <p className="form-error">{state.error}</p>}
          <button type="submit" disabled={pending} className="btn btn-primary btn-block" style={{ height: 42 }}>
            {pending ? "A entrar…" : "Entrar"}
          </button>
        </form>
      </div>
    </main>
  );
}
