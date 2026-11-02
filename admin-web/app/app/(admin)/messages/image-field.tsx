"use client";

import { useEffect, useRef, useState } from "react";
import { createClient } from "@/lib/supabase/client";

// Tamanho em que a imagem aparece na app (largura do telemóvel × 3 de
// densidade de ecrã), para nunca enviar mais do que o necessário.
const TARGET: Record<string, { w: number; h: number; crop: boolean; label: string }> = {
  banner: { w: 1200, h: 500, crop: true, label: "1200 × 500 (cortada ao formato do banner)" },
  notification: { w: 1080, h: 1350, crop: false, label: "até 1080 px de largura" },
  direct: { w: 1080, h: 1350, crop: false, label: "até 1080 px de largura" },
};

async function optimise(file: File, style: string): Promise<{ blob: Blob; w: number; h: number }> {
  const t = TARGET[style] ?? TARGET.notification;
  const bitmap = await createImageBitmap(file);
  let sx = 0, sy = 0, sw = bitmap.width, sh = bitmap.height, w: number, h: number;
  if (t.crop) {
    // Corta ao centro para o formato do banner e reduz.
    const ratio = t.w / t.h;
    if (sw / sh > ratio) { const nw = sh * ratio; sx = (sw - nw) / 2; sw = nw; } else { const nh = sw / ratio; sy = (sh - nh) / 2; sh = nh; }
    const scale = Math.min(1, t.w / sw);
    w = Math.round(sw * scale); h = Math.round(sh * scale);
  } else {
    const scale = Math.min(1, t.w / sw, t.h / sh);
    w = Math.round(sw * scale); h = Math.round(sh * scale);
  }
  const canvas = document.createElement("canvas");
  canvas.width = w; canvas.height = h;
  const ctx = canvas.getContext("2d")!;
  ctx.imageSmoothingQuality = "high";
  ctx.drawImage(bitmap, sx, sy, sw, sh, 0, 0, w, h);
  bitmap.close();
  const toBlob = (type: string, q: number) => new Promise<Blob | null>((r) => canvas.toBlob(r, type, q));
  let blob = await toBlob("image/webp", 0.82);
  // Safari não grava WebP: usa JPEG.
  if (!blob || blob.type !== "image/webp") blob = await toBlob("image/jpeg", 0.84);
  if (!blob) throw new Error("encode");
  return { blob, w, h };
}

export function ImageField({ style }: { style: string }) {
  const [file, setFile] = useState<File | null>(null);
  const [url, setUrl] = useState("");
  const [info, setInfo] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!file) return;
    let cancelled = false;
    (async () => {
      setBusy(true);
      setError(null);
      try {
        const { blob, w, h } = await optimise(file, style);
        const ext = blob.type === "image/webp" ? "webp" : "jpg";
        const path = `${new Date().toISOString().slice(0, 7)}/${crypto.randomUUID()}.${ext}`;
        const supabase = createClient();
        const { error: upErr } = await supabase.storage.from("team-media").upload(path, blob, { contentType: blob.type, cacheControl: "31536000" });
        if (upErr) throw upErr;
        if (cancelled) return;
        setUrl(supabase.storage.from("team-media").getPublicUrl(path).data.publicUrl);
        setInfo(`${w} × ${h} · ${Math.round(blob.size / 1024)} KB · ${ext.toUpperCase()}`);
      } catch {
        if (!cancelled) {
          setUrl("");
          setError("Não foi possível preparar a imagem. Confirma que a migração 147 já correu.");
        }
      } finally {
        if (!cancelled) setBusy(false);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [file, style]);

  return (
    <div className="field">
      <span className="field-label">Imagem (opcional)</span>
      <input type="hidden" name="image_url" value={url} />
      {url ? (
        <div className="stack-sm">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={url}
            alt="Pré-visualização"
            style={{ width: "100%", maxWidth: 360, borderRadius: 12, aspectRatio: style === "banner" ? "12 / 5" : undefined, objectFit: "cover" }}
          />
          <span className="field-hint">{busy ? "A otimizar…" : `Otimizada: ${info}`}</span>
          <div className="row">
            <button type="button" className="btn btn-secondary" onClick={() => input.current?.click()} disabled={busy}>Trocar</button>
            <button type="button" className="btn btn-ghost" onClick={() => { setFile(null); setUrl(""); setInfo(""); }} disabled={busy}>Tirar imagem</button>
          </div>
        </div>
      ) : (
        <button type="button" className="btn btn-secondary" onClick={() => input.current?.click()} disabled={busy} style={{ alignSelf: "flex-start" }}>
          {busy ? "A otimizar…" : "Escolher imagem"}
        </button>
      )}
      <input
        ref={input}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) setFile(f);
          e.target.value = "";
        }}
      />
      <span className="field-hint">Reduzida e comprimida automaticamente: {TARGET[style]?.label ?? TARGET.notification.label}.</span>
      {error && <p className="form-error">{error}</p>}
    </div>
  );
}
