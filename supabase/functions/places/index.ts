import { corsHeaders } from "../_shared/cors.ts";

// Moradas com o Google (pedido do Rafael, 2026-11-20): sugestões enquanto
// se escreve e os detalhes do local escolhido, para todos os campos de
// local da app (seletor de moradas, `shared/widgets/address_picker.dart`).
//
// A chave fica só aqui, no segredo GOOGLE_MAPS_API_KEY (Places API (New)).
// Sem a chave responde 503 `not_configured` e a app usa o OpenStreetMap.
//
// POST { action: "autocomplete", input, sessionToken?, citiesOnly? }
//   → { results: [{ placeId, name, secondary }] }
// POST { action: "details", placeId, sessionToken? }
//   → { name, address, addressLine, postalCode, city, region, lat, lng }
// POST { action: "staticmap", lat, lng, width?, height?, zoom? }
//   → { image (png em base64), type }

const KEY = Deno.env.get("GOOGLE_MAPS_API_KEY") ?? "";
const BASE = "https://places.googleapis.com/v1";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (!KEY) return json({ error: "not_configured" }, 503);
  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return json({ error: "bad_request" }, 400);
  }

  try {
    if (body.action === "autocomplete") {
      const input = String(body.input ?? "").trim().slice(0, 120);
      if (input.length < 2) return json({ results: [] });
      const res = await fetch(`${BASE}/places:autocomplete`, {
        method: "POST",
        headers: { "Content-Type": "application/json", "X-Goog-Api-Key": KEY },
        body: JSON.stringify({
          input,
          languageCode: "pt-PT",
          includedRegionCodes: ["pt"],
          ...(body.citiesOnly ? { includedPrimaryTypes: ["locality", "administrative_area_level_2"] } : {}),
          ...(body.sessionToken ? { sessionToken: String(body.sessionToken) } : {}),
        }),
      });
      if (!res.ok) return json({ error: "google_error", status: res.status }, 502);
      const data = await res.json();
      const results = ((data.suggestions ?? []) as Array<Record<string, any>>)
        .map((s) => s.placePrediction)
        .filter(Boolean)
        .slice(0, 6)
        .map((p: Record<string, any>) => ({
          placeId: p.placeId,
          name: p.structuredFormat?.mainText?.text ?? p.text?.text ?? "",
          secondary: p.structuredFormat?.secondaryText?.text ?? "",
        }));
      return json({ results });
    }

    if (body.action === "details") {
      const id = String(body.placeId ?? "");
      if (!/^[A-Za-z0-9_-]+$/.test(id)) return json({ error: "bad_request" }, 400);
      const qs = new URLSearchParams({ languageCode: "pt-PT" });
      if (body.sessionToken) qs.set("sessionToken", String(body.sessionToken));
      const res = await fetch(`${BASE}/places/${id}?${qs}`, {
        headers: {
          "X-Goog-Api-Key": KEY,
          "X-Goog-FieldMask": "displayName,formattedAddress,addressComponents,location",
        },
      });
      if (!res.ok) return json({ error: "google_error", status: res.status }, 502);
      const p = await res.json();
      const comps = (p.addressComponents ?? []) as Array<{ longText: string; types: string[] }>;
      const pick = (...types: string[]) => comps.find((c) => types.some((t) => c.types.includes(t)))?.longText ?? "";
      const street = [pick("route"), pick("street_number")].filter(Boolean).join(" ");
      return json({
        name: p.displayName?.text ?? "",
        address: p.formattedAddress ?? "",
        addressLine: street,
        postalCode: pick("postal_code"),
        city: pick("locality", "postal_town", "administrative_area_level_2"),
        region: pick("administrative_area_level_1"),
        lat: p.location?.latitude ?? null,
        lng: p.location?.longitude ?? null,
      });
    }

    // Imagem do Google Maps para o «Onde fica» (pedido 2026-11-22): mapa
    // estático com o pino, devolvido em base64 (a chave nunca sai daqui).
    // Precisa da «Maps Static API» ligada na mesma chave.
    if (body.action === "staticmap") {
      const lat = Number(body.lat), lng = Number(body.lng);
      if (!Number.isFinite(lat) || !Number.isFinite(lng) || Math.abs(lat) > 90 || Math.abs(lng) > 180) {
        return json({ error: "bad_request" }, 400);
      }
      const w = Math.max(100, Math.min(640, Math.round(Number(body.width) || 600)));
      const h = Math.max(100, Math.min(640, Math.round(Number(body.height) || 280)));
      const zoom = Math.max(3, Math.min(19, Math.round(Number(body.zoom) || 15)));
      const qs = new URLSearchParams({
        center: `${lat},${lng}`,
        zoom: String(zoom),
        size: `${w}x${h}`,
        scale: "2",
        language: "pt-PT",
        region: "PT",
        markers: `color:0x4F6B4A|${lat},${lng}`,
        key: KEY,
      });
      const res = await fetch(`https://maps.googleapis.com/maps/api/staticmap?${qs}`);
      const type = res.headers.get("content-type") ?? "";
      if (!res.ok || !type.startsWith("image/")) return json({ error: "google_error", status: res.status }, 502);
      const bytes = new Uint8Array(await res.arrayBuffer());
      let bin = "";
      for (let i = 0; i < bytes.length; i += 0x8000) bin += String.fromCharCode(...bytes.subarray(i, i + 0x8000));
      return json({ image: btoa(bin), type });
    }

    return json({ error: "bad_request" }, 400);
  } catch (_) {
    return json({ error: "google_error" }, 502);
  }
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
