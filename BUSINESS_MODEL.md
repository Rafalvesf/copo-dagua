# Modelo de Negócio — Copo d'Água

## Fonte de receita principal

**Comissão de 3%** sobre o valor total de cada pagamento realizado por um casal a um fornecedor dentro da plataforma.

## Fluxo de valor e dinheiro

```
Casal
  ↓ escolhe fornecedor no Marketplace
Fornecedor
  ↓ envia orçamento (Quotation)
Casal + Fornecedor
  ↓ conversam via Chat
Casal
  ↓ aceita a proposta
Casal + Fornecedor
  ↓ assinam Contrato (digital, dentro da app)
Casal
  ↓ paga dentro da app (Stripe Connect)
Copo d'Água
  ↓ retém 3% de comissão
Fornecedor
  ↓ recebe o valor líquido (payout)
```

Todo o histórico — mensagens, propostas, contratos, pagamentos — permanece associado ao casamento (`wedding_id`), criando um registo completo e auditável de principio a fim.

## Por que este modelo funciona

- **Incentivo alinhado:** só ganhamos quando o casal e o fornecedor concluem negócio com sucesso através da plataforma. Não há receita de "listagem" que desalinhe incentivos com a qualidade do marketplace.
- **Baixa fricção de adoção:** fornecedores não pagam mensalidade para estar na plataforma — o custo de entrada é zero, o que acelera a curadoria inicial (crítico em modelo de marketplace de dois lados / problema do "ovo e da galinha").
- **Retenção pela confiança:** ao processar o pagamento, ficamos com o histórico completo do casamento — isto é o fosso competitivo (moat) que um simples grupo de WhatsApp ou diretório de fornecedores nunca vai ter.

## Riscos do modelo (a documentar e mitigar)

| Risco | Descrição | Mitigação proposta |
|---|---|---|
| **Desintermediação** | Casal e fornecedor conhecem-se na plataforma e fecham negócio fora dela (pagamento direto, sem comissão) | Valor percebido do contrato digital + proteção do pagamento (garantias, disputa mediada) deve ser suficientemente forte para justificar ficar na plataforma. Explorar cláusulas contratuais e possivelmente taxas reduzidas para fornecedores recorrentes de alto volume. |
| **Regulação de pagamentos (PSD2, KYC)** | Como marketplace de pagamentos, há obrigações legais de identificação de fornecedores e possivelmente licenciamento | Usar Stripe Connect (Standard/Express) que absorve grande parte da carga de compliance (KYC, PCI-DSS). Validar com jurídico o enquadramento exato em Portugal/UE — ver `docs/legal/`. |
| **Cash flow do fornecedor** | Fornecedores podem preferir pagamento imediato fora da plataforma em vez de esperar pelo payout | Definir SLA claro de payout (ex: D+2 após confirmação) e comunicar isso como vantagem (pagamento garantido) vs. risco de não pagamento em transações diretas. |
| **Concentração de risco em disputas** | Como intermediário do pagamento, seremos o ponto de escalada de qualquer conflito casal↔fornecedor | Módulo de disputas dedicado no `admin-web/disputes/`, com processo claro e política pública de resolução. |

## Modelo de custos (alto nível, a detalhar em fase de financeiro)

- Infraestrutura (Supabase, Firebase) — custo variável com escala, baixo no MVP.
- Taxas Stripe Connect (tipicamente ~1.5–2.9% + fixo, absorvidas ou repassadas — decisão de pricing a validar).
- Aquisição de fornecedores (curadoria manual no início, depois self-service).
- Aquisição de casais (marketing — ver `docs/marketing/`).

**Nota de arquiteto:** a margem real da plataforma é **3% menos as taxas Stripe**, não 3% líquidos. Isto deve ficar explícito em qualquer projeção financeira para não sobrestimar receita líquida. Vale a pena modelar dois cenários de pricing: comissão absorvida pela plataforma vs. comissão repassada parcialmente ao fornecedor/casal.

## Futuras fontes de receita (não MVP)

- Subscrição premium para fornecedores (destaque no marketplace, analytics avançado).
- Publicidade/destaque pago no marketplace (com cuidado para não comprometer confiança do casal).
- Taxas de serviço adicionais em funcionalidades avançadas (ex: geração de website de casamento, convites digitais).

Estas não fazem parte do MVP e só devem ser exploradas depois de validado o loop principal de comissão.
