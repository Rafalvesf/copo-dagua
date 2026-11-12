"use client";

import { useActionState, useRef } from "react";
import { addBlockedWord, removeBlockedWord, type WordState } from "./actions";
import { RemoveX } from "@/components/RemoveX";

const initial: WordState = { error: null };

export function NewWordForm() {
  const [state, formAction, isPending] = useActionState(addBlockedWord, initial);
  const formRef = useRef<HTMLFormElement>(null);
  return (
    <form
      ref={formRef}
      action={async (formData) => {
        await formAction(formData);
        formRef.current?.reset();
      }}
      className="row"
      style={{ alignItems: "flex-end", gap: 10 }}
    >
      <label className="field" style={{ flex: "1 1 220px" }}>
        <span className="field-label">Palavra</span>
        <input name="word" required className="input" placeholder="ex.: asneira" />
      </label>
      <button type="submit" disabled={isPending} className="btn btn-primary" style={{ height: 38 }}>
        {isPending ? "A adicionar…" : "Bloquear palavra"}
      </button>
      {state.error && <p className="form-error" style={{ flexBasis: "100%" }}>{state.error}</p>}
    </form>
  );
}

export function RemoveWord({ word }: { word: string }) {
  return <RemoveX onRemove={() => removeBlockedWord(word)} label="Desbloquear" confirm="Desbloquear?" />;
}
