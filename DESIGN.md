# À Nossa! — Base de design

**Regra:** isto é a fonte de verdade do aspeto da app (organizador, parceiro e
convidado). Nada daqui muda sem o Rafael pedir explicitamente. Ecrãs novos
seguem isto tal e qual; o mesmo elemento tem sempre o mesmo tamanho em todo o
lado. Se um pedido parecer contrariar esta base, perguntar antes.

Referência visual: mockups "Perfil" e "Mensagens" (canvas de design,
2026-11-12). Em caso de dúvida, o mockup manda.

Código: `mobile-app/app/lib/core/theme/app_theme.dart` (tokens),
`shared/widgets/` (componentes). Usar os tokens/componentes — não escrever
cores, sombras ou tamanhos à mão quando já existe um.

---

## 1. Cores

| Uso | Cor | Token |
|---|---|---|
| Fundo de **todas** as páginas | `#F2F0EB` (cinzento claro quente, liso, sem degradê) | `AppTheme.background`, `AppBackground.*` |
| Cartões, grupos, barras | `#FFFFFF` | — |
| Texto principal | `#171713` | `AppTheme.ink` |
| Texto secundário / ícones inativos | `#57534E` | `AppTheme.inkMuted` |
| Verde da marca | `#4F6B4A` | `AppTheme.accentOliveDark` |
| Verde claro (etiquetas "sucesso", "Responde em ~1 h") | fundo `#E6EDE1`, texto `#3F7A4F` | — |
| Amarelo de aviso (dentro da conversa) | fundo `#F7EACA`, texto `#5A3E0C` | — |
| Etiqueta neutra | fundo `#F2F0EB`, texto `#3A3733` | — |
| Divisórias dentro de cartões | `#ECE7DC`, 1 px | — |
| Pílula ativa da navbar | `#EDEAE3` | — |
| Erro / recusado | `#C8553D` | `AppStatusColors.declined` |

**Verde só para seleção, progresso e etiquetas** (filtro ativo, barras,
contadores). **Nunca** para botões.

## 2. Botões

- **Principal:** fundo preto `#171713`, texto branco.
- **Secundário:** fundo branco, contorno preto 1,5 px, texto preto.
- Sempre em **pílula** (`StadiumBorder`).
- Altura: **52** a toda a largura; **44** dentro de cartões; **36** nas linhas
  de lista ("A seguir", "Ver evento"); **34** nas respostas rápidas.
- Texto: 15 negrito (52), 14 negrito (44), 13 negrito (36/34).
- Botão redondo (voltar, sino, definições, ⋯): círculo branco **44**, ícone 20.
- "+" de criar: círculo preto 44, "+" branco.

## 3. Letra

- Família: **Louis George Café** (só fina 300, normal 400, negrito 700).
  - `w500`/`w600` = normal (mapeado no `pubspec.yaml`); `w700`+ = negrito.
  - Nunca usar a fina (300).
- **Títulos sempre a negrito (w700); o resto normal (w600).**

| Elemento | Tamanho | Peso |
|---|---|---|
| Título de página ("Eventos", "Perfil", "Mensagens") — à esquerda | 28 | negrito |
| Título de secção ("Os meus eventos", "Descobrir", "Pacotes") | 22 | negrito |
| Ação da secção ("Ver todos (3)") | 14 | negrito, verde |
| Nome no cartão de perfil | 20 | negrito |
| Título de cartão de evento/parceiro | 19 | negrito |
| Título de linha de lista (nome, conversa, pacote) | 16 | negrito |
| Corpo / descrição | 14 | normal (justificado nas descrições) |
| Mensagem (bolha) | 15 | normal |
| Subtítulo / meta (data, local, "Vai a 2 eventos") | 13 | normal, `#57534E` |
| Etiqueta / chip | 12 | negrito |
| Título de grupo em maiúsculas ("HOJE", "CONTA") | 12, espaçamento 2 | negrito, `#57534E` |
| Texto da navbar | 11 | negrito |

## 4. Espaços e formas

- Margem lateral das páginas: **20** (`AppTheme.screenMargin`).
- Cartões: branco, cantos **22**, interior 18 (perfil) / 16 (listas), **sem
  linha à volta**.
- Grupos de linhas (listas, definições): cartão branco cantos 22, interior
  4×16, linhas separadas por `#ECE7DC`.
- Linha de definições: altura mínima 56, nome 16 negrito à esquerda, valor 14
  `#57534E` + seta à direita. **Sem ícones** nas linhas.
- Espaço entre título de secção e conteúdo: 12.

## 5. Sombras

- **Uma só sombra** para cartões em destaque (cartões de evento/parceiro,
  lista de conversas, cartão do parceiro): `0 6 18 rgba(23,23,19,0.06)` —
  `BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))`
  (`softShadow` / `softCard`).
- Cartão de perfil, grupos de definições, "A seguir": **sem sombra**.
- Cabeçalho de conversa: `0 4 14 rgba(23,23,19,0.06)`.
- Navbar: `0 8 24 rgba(23,23,19,0.12)`.
- Nunca sombras duplas nem mais escuras.

## 6. Componentes

- **Pesquisa:** pílula branca 48, sem sombra, lupa de traço `#57534E` 18,
  texto 15.
- **Filtros/categorias:** pílula 38, cantos 19, texto 14 negrito. Ativo:
  verde `#4F6B4A` + texto branco. Inativo: branco, **sem contorno**.
  Contador dentro: círculo 20 (preto no inativo, branco no ativo).
- **Etiquetas:** pílula, interior 10×5, 12 negrito, **sem contorno**.
- **Fotos de perfil:** redondas, **planas** (cor suave fixa por nome, sem aro
  nem sombra) — `V2Avatar` (`flat` é o padrão). Lista de mensagens 52, perfil
  76, listas 44, avaliações 40, "seguido por" 24 sobrepostas.
- **Preço:** caixa `DESDE` (rótulo 9, valor 16) ou "Por orçamento".
- **Navbar:** branca, flutuante, margens 16 laterais / 20 em baixo, cantos 35;
  ícone 24 + texto 11 negrito; inativo `#57534E`, ativo `#171713` com pílula
  `#EDEAE3`.
- **Ícones:** Heroicons Solid na app; nos ecrãs dos mockups (Perfil,
  Mensagens, Conversa, Definições, Parceiro) os ícones de traço dos mockups
  (`LineIcon`). Sem emojis.
- **Conversa:** bolha minha preta / dele branca, cantos 18 com o canto do lado
  a 6; dia numa pílula `#E9E5DC`; "hh:mm · Visto"; ilha do evento flutuante
  com cantos da navbar, esconde-se no scroll.

## 7. Texto e tom

- Português de Portugal. "Taxa de serviço", nunca "comissão".
- Botões com verbos curtos ("Pedir orçamento", "Ver evento").
- Sem funcionalidades inventadas: o design não promete o que a app não faz.
