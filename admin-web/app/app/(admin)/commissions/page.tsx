import { redirect } from "next/navigation";

// Comissões passou a ser uma secção de Definições (redesenho 2026-10-20).
export default function CommissionsPage() {
  redirect("/settings#comissoes");
}
