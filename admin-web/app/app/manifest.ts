import type { MetadataRoute } from "next";

// Ao adicionar ao ecrã principal, abre como uma app (sem barras do
// navegador), pedido 2026-11.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "À Nossa! Admin",
    short_name: "Admin",
    description: "Painel de administração da À Nossa!.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    display_override: ["standalone", "minimal-ui"],
    orientation: "portrait",
    background_color: "#faf9f5",
    theme_color: "#4F6B4A",
    lang: "pt-PT",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
