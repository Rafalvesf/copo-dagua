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

    return json({ error: "bad_request" }, 400);
  } catch (_) {
    return json({ error: "google_error" }, 502);
  }
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), { status, headers: { ...corsHeaders, "Content-Type": "application/json" } });
}
