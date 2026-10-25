import type { Metadata } from "next";
import { Roboto, Source_Serif_4 } from "next/font/google";
import "./globals.css";

// Texto em Roboto (pedido 2026-08-31); títulos com serifa ao estilo do
// Claude (pedido 2026-10-21: "usa um estilo do design do Claude").
const sans = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const serif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "À Nossa! — Admin",
  description: "Painel de administração da À Nossa!.",
};

// Aplica o tema escolhido (claro/escuro/sistema) antes de pintar, para não
// piscar ao abrir. Só lê uma preferência local deste navegador.
const themeScript = `try{var t=localStorage.getItem('admin-theme');if(t==='light'||t==='dark')document.documentElement.dataset.theme=t;}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT" className={`${sans.variable} ${serif.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body style={{ fontFamily: "var(--font-sans)" }}>{children}</body>
    </html>
  );
}
