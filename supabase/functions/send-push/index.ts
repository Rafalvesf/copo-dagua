import { createClient } from "jsr:@supabase/supabase-js@2";
import webpush from "npm:web-push@3.6.7";

// Envia uma notificação (linha de `notifications`) a todos os dispositivos
// das pessoas a quem se destina. Chamada só pela base de dados (trigger
// `push_on_notification`, migração 115), com o segredo partilhado em
// `x-push-secret`. Subscrições que já não existem (404/410) são apagadas.
//
// - Browser (Web Push, VAPID): `endpoint` https://…
// - Android/iOS (Firebase Cloud Messaging, 2026-10-28): `endpoint`
//   `fcm:<token>`; precisa do segredo FCM_SERVICE_ACCOUNT (o JSON da conta
//   de serviço do Firebase, Project settings → Service accounts).
Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("method not allowed", { status: 405 });
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: cfg } = await admin.rpc("push_config");
  const config = (cfg ?? {}) as Record<string, string>;
  const secret = req.headers.get("x-push-secret") ?? "";
  if (!config.push_secret || secret !== config.push_secret) return new Response("forbidden", { status: 403 });

  let id: string | null = null;
  try {
    id = (await req.json())?.id ?? null;
  } catch { /* vazio */ }
  if (!id) return new Response("bad request", { status: 400 });

  const { data: n } = await admin.from("notifications").select("*").eq("id", id).maybeSingle();
  if (!n) return Response.json({ skipped: "not_found" });
  const { data: ids } = await admin.rpc("notification_recipient_ids", { p_id: id });
  const recipients = ((ids ?? []) as unknown[]).map((r) => (typeof r === "string" ? r : (r as Record<string, string>).notification_recipient_ids)).filter(Boolean);
  if (recipients.length === 0) return Response.json({ sent: 0 });

  const { data: subs } = await admin
    .from("push_subscriptions")
    .select("id, endpoint, p256dh, auth")
    .in("profile_id", recipients);
  if (!subs || subs.length === 0) return Response.json({ sent: 0 });

  const link = n.link ?? "/";
  const tag = `${n.type}:${n.link ?? n.id}`;
  // Imagem da mensagem da equipa (migração 148), quando existe.
  const image = typeof n.image_url === "string" && n.image_url.startsWith("https://") ? n.image_url : undefined;
  // Subtítulo (migração 157): no iPhone vai como subtítulo; na web e no
  // Android (que não têm subtítulo) vai na primeira linha do texto.
  const subtitle = typeof n.subtitle === "string" && n.subtitle.trim() ? n.subtitle.trim() : undefined;
  const flatBody = subtitle ? `${subtitle}\n${n.body ?? ""}`.trim() : (n.body ?? "");
  const payload = JSON.stringify({ title: n.title, body: flatBody, url: link, tag, image });
  const hasVapid = Boolean(config.vapid_public && config.vapid_private);
  if (hasVapid) webpush.setVapidDetails("mailto:ola@anossa.app", config.vapid_public, config.vapid_private);
  const fcm = await fcmClient();

  let sent = 0;
  for (const s of subs) {
    try {
      if (s.endpoint.startsWith("fcm:")) {
        if (!fcm) continue;
        const r = await fcm.send(s.endpoint.slice(4), { title: n.title, subtitle, body: n.body ?? "", flatBody, url: link, tag, image });
        if (r === "gone") {
          await admin.from("push_subscriptions").delete().eq("id", s.id);
        } else if (r === "ok") {
          sent++;
          await admin.from("push_subscriptions").update({ last_used_at: new Date().toISOString() }).eq("id", s.id);
        }
        continue;
      }
      if (!hasVapid) continue;
      const d = webpush.generateRequestDetails(
        { endpoint: s.endpoint, keys: { p256dh: s.p256dh, auth: s.auth } },
        payload,
        { TTL: 60 * 60 * 24 },
      );
      const res = await fetch(d.endpoint, { method: d.method, headers: d.headers as Record<string, string>, body: d.body });
      if (res.status === 404 || res.status === 410) {
        await admin.from("push_subscriptions").delete().eq("id", s.id);
      } else if (res.ok) {
        sent++;
        await admin.from("push_subscriptions").update({ last_used_at: new Date().toISOString() }).eq("id", s.id);
      } else {
        console.error("push failed", res.status, await res.text().catch(() => ""));
      }
    } catch (e) {
      console.error("push error", (e as Error).message);
    }
  }
  return Response.json({ sent });
});

// ---------- Firebase Cloud Messaging (HTTP v1) ----------

type ServiceAccount = { client_email: string; private_key: string; project_id: string };

async function fcmClient() {
  const raw = Deno.env.get("FCM_SERVICE_ACCOUNT");
  if (!raw) return null;
  let sa: ServiceAccount;
  try {
    sa = JSON.parse(raw);
  } catch {
    console.error("FCM_SERVICE_ACCOUNT inválido");
    return null;
  }
  let token: string;
  try {
    token = await accessToken(sa);
  } catch (e) {
    console.error("fcm token failed", (e as Error).message);
    return null;
  }
  return {
    async send(deviceToken: string, m: { title: string; subtitle?: string; body: string; flatBody: string; url: string; tag: string; image?: string }): Promise<"ok" | "gone" | "error"> {
      const res = await fetch(`https://fcm.googleapis.com/v1/projects/${sa.project_id}/messages:send`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          message: {
            token: deviceToken,
            notification: { title: m.title, body: m.flatBody, ...(m.image ? { image: m.image } : {}) },
            data: { url: m.url, tag: m.tag },
            android: { priority: "high", notification: { tag: m.tag, ...(m.image ? { image: m.image } : {}) } },
            apns: {
              headers: { "apns-collapse-id": m.tag.slice(0, 64) },
              // mutable-content deixa o iOS juntar a imagem à notificação.
              payload: {
                aps: {
                  sound: "default",
                  ...(m.subtitle ? { alert: { title: m.title, subtitle: m.subtitle, body: m.body } } : {}),
                  ...(m.image ? { "mutable-content": 1 } : {}),
                },
              },
              ...(m.image ? { fcm_options: { image: m.image } } : {}),
            },
          },
        }),
      });
      if (res.ok) return "ok";
      const text = await res.text().catch(() => "");
      if (res.status === 404 || text.includes("UNREGISTERED") || text.includes("registration-token-not-registered")) return "gone";
      console.error("fcm failed", res.status, text.slice(0, 300));
      return "error";
    },
  };
}

function b64url(data: ArrayBuffer | Uint8Array | string): string {
  const bytes = typeof data === "string" ? new TextEncoder().encode(data) : new Uint8Array(data);
  let s = "";
  for (const b of bytes) s += String.fromCharCode(b);
  return btoa(s).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

async function accessToken(sa: ServiceAccount): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const header = b64url(JSON.stringify({ alg: "RS256", typ: "JWT" }));
  const claims = b64url(JSON.stringify({
    iss: sa.client_email,
    scope: "https://www.googleapis.com/auth/firebase.messaging",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }));
  const pem = sa.private_key.replace(/-----[^-]+-----/g, "").replace(/\s+/g, "");
  const der = Uint8Array.from(atob(pem), (c) => c.charCodeAt(0));
  const key = await crypto.subtle.importKey("pkcs8", der, { name: "RSASSA-PKCS1-v1_5", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("RSASSA-PKCS1-v1_5", key, new TextEncoder().encode(`${header}.${claims}`));
  const jwt = `${header}.${claims}.${b64url(sig)}`;
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer", assertion: jwt }),
  });
  if (!res.ok) throw new Error(`oauth ${res.status}: ${(await res.text()).slice(0, 200)}`);
  return (await res.json()).access_token as string;
}
