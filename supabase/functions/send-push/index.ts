import { createClient } from "jsr:@supabase/supabase-js@2";
import webpush from "npm:web-push@3.6.7";

// Envia uma notificação (linha de `notifications`) a todos os dispositivos
// das pessoas a quem se destina. Chamada só pela base de dados (trigger
// `push_on_notification`, migração 115), com o segredo partilhado em
// `x-push-secret`. Subscrições que já não existem (404/410) são apagadas.
Deno.serve(async (req) => {
  if (req.method !== "POST") return new Response("method not allowed", { status: 405 });
  const admin = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: cfg } = await admin.rpc("push_config");
  const config = (cfg ?? {}) as Record<string, string>;
  const secret = req.headers.get("x-push-secret") ?? "";
  if (!config.push_secret || secret !== config.push_secret) return new Response("forbidden", { status: 403 });
  if (!config.vapid_public || !config.vapid_private) return Response.json({ skipped: "no_vapid" });

  let id: string | null = null;
  try {
    id = (await req.json())?.id ?? null;
  } catch { /* vazio */ }
  if (!id) return new Response("bad request", { status: 400 });

  const { data: n } = await admin.from("notifications").select("id, title, body, link, type").eq("id", id).maybeSingle();
  if (!n) return Response.json({ skipped: "not_found" });
  const { data: ids } = await admin.rpc("notification_recipient_ids", { p_id: id });
  const recipients = ((ids ?? []) as unknown[]).map((r) => (typeof r === "string" ? r : (r as Record<string, string>).notification_recipient_ids)).filter(Boolean);
  if (recipients.length === 0) return Response.json({ sent: 0 });

  const { data: subs } = await admin
    .from("push_subscriptions")
    .select("id, endpoint, p256dh, auth")
    .in("profile_id", recipients);
  if (!subs || subs.length === 0) return Response.json({ sent: 0 });

  webpush.setVapidDetails("mailto:ola@anossa.app", config.vapid_public, config.vapid_private);
  const payload = JSON.stringify({
    title: n.title,
    body: n.body ?? "",
    url: n.link ?? "/",
    tag: `${n.type}:${n.link ?? n.id}`,
  });

  let sent = 0;
  for (const s of subs) {
    try {
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
