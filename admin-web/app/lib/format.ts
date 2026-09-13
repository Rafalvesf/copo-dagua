// Pequenos helpers de formatação puros, partilhados entre AdminSidebar e o
// cabeçalho do layout — ambos mostram um avatar com iniciais do admin.
export function initials(name: string): string {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  return (parts[0][0] + (parts[1]?.[0] ?? "")).toUpperCase();
}
