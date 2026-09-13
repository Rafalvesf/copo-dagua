import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

// Roboto em todo o lado — pedido explícito do utilizador (2026-08-31):
// "Use Roboto throughout the entire Admin interface", sem tipo de letra
// serifado nenhum. Duas variáveis CSS ("--font-sans" e "--font-serif")
// apontam para a MESMA fonte de propósito: `var(--font-serif)` continua
// usada nos ficheiros já escritos antes deste pedido (títulos de página)
// sem ser preciso editar cada um — passa a resolver para Roboto 600
// também, em vez de precisar de duas famílias de tipo de letra distintas.
// Pesos limitados a 400/500/600 — o pedido é explícito em evitar
// 700-900 ("a interface deve parecer leve, elegante e premium").
const robotoSans = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const robotoSerifAlias = Roboto({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Copo d'Água — Admin",
  description: "Painel de administração da Copo d'Água.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-PT" className={`${robotoSans.variable} ${robotoSerifAlias.variable}`}>
      <body style={{ fontFamily: "var(--font-sans)" }}>{children}</body>
    </html>
  );
}
