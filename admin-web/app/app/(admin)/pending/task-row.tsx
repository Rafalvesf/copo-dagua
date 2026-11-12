"use client";

import { useOptimistic, useState, useTransition } from "react";
import { RemoveX } from "@/components/RemoveX";
import { deleteAdminTask, toggleAdminTask } from "./actions";

export type AdminTask = {
  id: string;
  title: string;
  detail: string | null;
  area: string;
  owner: "tu" | "claude";
  done: boolean;
  done_at: string | null;
  created_at: string;
};

const fmt = (d: string) =>
  new Date(d).toLocaleDateString("pt-PT", { day: "numeric", month: "short", year: "numeric", timeZone: "Europe/Lisbon" });

export function TaskRow({ task }: { task: AdminTask }) {
  const [done, setDone] = useOptimistic(task.done);
  const [pending, start] = useTransition();
  const [error, setError] = useState<string | null>(null);
  return (
    <li style={{ alignItems: "flex-start", opacity: pending ? 0.7 : 1 }}>
      <label className="check" style={{ flex: 1, minWidth: 0 }}>
        <input
          type="checkbox"
          checked={done}
          onChange={(e) => {
            const next = e.target.checked;
            setError(null);
            start(async () => {
              setDone(next);
              const r = await toggleAdminTask(task.id, next);
              if (r.error) setError(r.error);
            });
          }}
        />
        <span className="list-main">
          <span className="list-title" style={{ display: "block", textDecoration: done ? "line-through" : "none", color: done ? "var(--ink-muted)" : undefined }}>
            {task.title}
          </span>
          {task.detail && <span className="list-sub" style={{ display: "block" }}>{task.detail}</span>}
          <span className="list-sub" style={{ display: "block", fontSize: 12 }}>
            {fmt(task.created_at)}
            {done && task.done_at ? ` · feita a ${fmt(task.done_at)}` : ""}
          </span>
          {error && <span className="form-error" style={{ display: "block" }}>{error}</span>}
        </span>
      </label>
      <span className={`badge ${task.owner === "claude" ? "badge-warning" : "badge-success"}`} style={{ flexShrink: 0 }}>
        {task.owner === "claude" ? "Claude" : "Tu"}
      </span>
      <RemoveX onRemove={() => deleteAdminTask(task.id)} />
    </li>
  );
}
