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
| Alerta pendente (linha) | `#F2A01B` | `AlertTone.pending` |
| Alerta urgente (linha) | `#C8553D` | `AlertTone.urgent` |
| Alerta de convite (linha) | `#4F6B4A` | `AlertTone.invite` |
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

**Regra do mesmo tamanho:** cada tipo de texto tem **um só tamanho e um só
peso em toda a app** (organizador, parceiro e convidado), os da tabela
abaixo. O título de um cartão de evento é 19 no Descobrir, em "Os meus
eventos", no perfil de um amigo e em qualquer outro sítio; uma linha de lista
é 16 em todas as listas; a meta é 13 em todo o lado; e assim por diante. Não
há tamanhos intermédios (12,5, 13,5, 17…). Antes de escrever um tamanho,
ver nesta tabela qual é o do elemento.

**Maiúscula:** o título dos cartões e linhas de eventos começa sempre com
letra maiúscula, mesmo que o organizador o tenha escrito em minúscula
(`capFirst` em `shared/text_case.dart`).

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

**Páginas de primeiro contacto** (onboarding e páginas/estados públicos —
`shared/widgets/onb_kit.dart` e `shared/widgets/public_state.dart`:
boas-vindas, convites, `/juntar`, RSVP, verificar email, erros): letra maior,
mais acolhedora. Só nestes ecrãs — e em mais lado nenhum — vale esta escala
(pedido do Rafael, 2026-11-16): título **32**, texto/subtítulo **17**, título
de grupo/eyebrow **13**, botões **17** (altura **56**). O 32 e o 17 são
exceções conscientes à regra «sem tamanhos intermédios», limitadas a estes
ecrãs. O resto da app mantém a tabela acima.

## 4. Espaços e formas

- Margem lateral das páginas: **20** (`AppTheme.screenMargin`). A navbar, as
  barras flutuantes e os popups usam a mesma: **têm sempre a largura das
  caixas de conteúdo**.
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
- **Números nos cartões de evento** (`MiniStats`: "2 convidados", "2 confirmados"):
  fundo branco, linha preta 1,5 px à volta, cantos 12, conteúdo ao centro
  (número 16 negrito, rótulo 11). Exceção pedida à regra "sem linha".
- **Preço:** caixa com contorno e **duas linhas** — rótulo 9 em cima + valor 16
  por baixo: `DESDE` + `€X`, ou, para quem trabalha por orçamento, `POR` +
  `Orçamento`. A mesma caixa no topo do parceiro e nos cartões de evento e de
  parceiro (`PriceBox`). Nunca "Por orçamento" numa só linha.
- **Cabeça do perfil:** `ProfileCard_Users` (amigos, organizadores, o meu
  perfil: avatar e os três números em colunas no topo). No **parceiro**
  (mockups «Parceiros e perfis», 2026-11-20) o logótipo e o nome estão na
  foto do topo (§6.2) e por baixo vem o cartão de dados: categoria, nota
  (n.º de avaliações) e zona com a caixa de preço à direita; anos de
  experiência e «Responde em ~1 h»; descrição justificada com «Ler mais»;
  etiquetas; os três números (nota, seguidores, eventos) em **caixas com
  contorno** (`MiniStats`); e «Seguir» + «Mensagem» com contorno (o botão
  preto é o da barra de baixo). O estado ("Reservado", "Pedido enviado")
  não é uma etiqueta solta: é dito uma só vez no aviso (§7), por baixo da
  cabeça.
- **Navbar:** branca, flutuante, margens **20 laterais** (a mesma largura das
  caixas de conteúdo, `AppTheme.screenMargin` — pedido 2026-11-20) / 20 em
  baixo, cantos 35;
  ícone 24 + texto 11 negrito; inativo `#57534E`, ativo `#171713` com pílula
  `#EDEAE3`.
- **Ícones:** Heroicons Solid na app; nos ecrãs dos mockups (Perfil,
  Mensagens, Conversa, Definições, Parceiro) os ícones de traço dos mockups
  (`LineIcon`). Sem emojis (exceção: o "Parabéns! 🎉" do criar evento).
- **Conversa:** bolha minha preta / dele branca, cantos 18 com o canto do lado
  a 6; dia numa pílula `#E9E5DC`; "hh:mm · Visto"; ilha do evento flutuante
  com cantos da navbar, esconde-se no scroll.
- **Onboarding** (`shared/widgets/onb_kit.dart`, mockup "Onboarding"
  2026-11-12): barra de progresso verde de **10** com a percentagem (12
  negrito) à direita — começa sempre em 20%; botão de voltar redondo
  branco 44; "1 DE 4" como título de grupo (13); título 32, subtítulo 17
  (escala de primeiro contacto, §3);
  caixas de texto em pílula branca **52** (texto 15, contador 13 à
  direita, erro = linha vermelha 1,5 + ponto + frase 13); cartões de
  opção brancos (cantos 22, interior 16), **verdes quando escolhidos**;
  grelha de tipos de evento em 3 colunas (82 de altura, ícone 24, texto
  12 negrito); contador de pessoas com número 40.
- **Mascote — a estrela** (`shared/widgets/estrela.dart`, desenho do
  Rafael, canvas «Estrela · reações», 2026-11-14): estrela no verde da app `#4F6B4A` (pedido 2026-11-16),
  lisa, com sombra no chão; 12 reações (feliz, parabéns, apaixonada, fixe,
  piscar o olho, surpresa, a dormir, a pensar, contente, triste, zangada,
  ideia). Anima 3 vezes ao aparecer e fica parada; só «a pensar» pode
  continuar enquanto carrega; parada com «reduzir movimento». Onde:
  listas vazias → a dormir; erros → triste; evento criado e pagamento
  feito → parabéns; convites e «vou» → apaixonada; aceitar/juntar →
  contente; sugestões → ideia; conversas vazias → piscar o olho; Premium → fixe
  (de óculos, pedido 2026-11-21). Substitui
  as duas taças.
- **Páginas** (`shared/widgets/page_kit.dart`, canvases «Páginas do
  evento / parceiro / convidado», 2026-11-14): voltar redondo branco 44 numa
  linha com as ações à direita («+» preto 44, ⋯ branco 44); título de página
  28 à esquerda por baixo e subtítulo 13; filtros em pílula 38 **em cima**
  (com contador); **resumo do topo** branco (cantos 22, interior 18, sem
  sombra): rótulo 12 em maiúsculas, número 40, unidade 13, barra verde 10 e
  etiquetas ou uma linha 13 por baixo — nunca cartão verde; listas em grupos
  de linhas (avatar 44, nome 16, meta 13, etiqueta à direita).
- **Emojis:** só no "Parabéns! 🎉" do fim do criar evento (pedido do
  Rafael, 2026-11-12). Em mais lado nenhum.
- **Botões redondos sobre imagens e «voltar ao topo»** (pedido do Rafael,
  2026-11-16): um botão redondo (voltar/sair, definições, sino, ⋯) é
  **translúcido só quando — e enquanto — tem uma imagem por trás** (foto de
  capa, herói com foto): branco a ~55 % com a sombra suave e o ícone preto 20
  bem legível. **Em mais lado nenhum:** sobre o fundo liso (`#F2F0EB`), sobre
  branco, ou depois de o cabeçalho deixar de assentar na imagem, é o **branco
  cheio 44** do §2. Ou seja, a transparência é decidida por "há imagem por
  trás agora?", não pela quantidade de scroll.
  Em **todas** as páginas que fazem scroll (com imagem ou sem), a **seta de
  voltar** (canto superior esquerdo) muda com o scroll: ao descer, o ícone
  **roda de ← para ↑** e o toque passa a **subir a página até ao topo** (com
  animação) em vez de voltar atrás; ao chegar ao topo, volta a ser a seta de
  voltar (←). A transparência é independente disto e segue só a regra de cima:
  onde há imagem por trás, a seta é translúcida no topo (sobre a imagem) e fica
  branco opaco depois de a imagem sair de trás; onde não há imagem, é sempre o
  branco cheio 44. Os restantes botões (definições, ⋯) não mudam de ação; só
  deixam de ser translúcidos quando a imagem sai de trás deles. A transição
  (rotação do ícone e, onde se aplique, a transparência) é sempre animada,
  nunca instantânea.
  - **Componente:** a seta fixa é o `ScrollAwareBackButton`
    (`shared/widgets/scroll_aware_back_button.dart`): recebe o
    `ScrollController` da lista do ecrã, a ação de voltar e `imageExtent` (os px
    de scroll em que ainda há imagem por trás; 0 = sem imagem, nunca
    translúcido). Fica num overlay fixo por cima da lista (não desce com ela).
    Todo o ecrã com scroll usa-o — o painel do evento já o usa
    (`wedding_details_screen.dart`, no `Stack` do `_normal`). **Nunca** refazer
    esta seta à mão: ligar o componente.

## 6.1 Popups (folhas e diálogos)

Pedido do Rafael, 2026-11-20. Vale para **todos** os popups da app
(organizador, parceiro e convidado), sem exceções.

- **Sempre em ilha, com o tamanho da navbar:** 20 de margem dos lados (a
  largura das caixas de conteúdo e da navbar), 20 em baixo (ou a margem segura do telemóvel, se for maior), cantos **35**,
  fundo branco e sombra da ilha. **Nunca** de canto a canto nem colado ao
  fundo do ecrã. Com o teclado aberto, a ilha sobe por cima dele.
- **Uma só forma de abrir:** `showIslandSheet` / `showIslandDialog`
  (`shared/widgets/island_sheet.dart`); diálogos com `IslandAlert`; menus
  «⋯» com `IslandMenuButton` (mesma forma de usar que o `PopupMenuButton`,
  as opções abrem numa ilha com «Cancelar» em baixo). **Nunca**
  `showModalBottomSheet`, `showDialog`, `AlertDialog` nem `PopupMenuButton`
  diretamente.
- **Inclui tudo o que abre por cima da página** e não é uma página nova:
  filtros, favoritos, escolher localidade, notificações, menus «⋯»,
  confirmações, pedir orçamento/reservar, pagar, editar campos. Os avisos
  rápidos (snackbars) têm a mesma largura (20 dos lados).
- **O conteúdo não desenha fundo próprio:** sem `Container` com cor, cantos
  ou margem à volta do popup — a ilha já trata disso. Cartões e caixas
  dentro do popup ficam a `#F2F0EB`, sem sombra (o popup é branco).
- **Animação — a onda da navbar:** ao abrir, uma onda no verde da marca
  `#4F6B4A` nasce no centro da navbar e cresce em círculo até encher o
  popup; depois a cor desfaz-se no branco enquanto o conteúdo entra (cerca
  de 0,56 s). Ao fechar, a onda volta a encolher para a navbar (0,32 s).
  Com «reduzir movimento» o popup só aparece e desaparece. Esta é a única
  exceção à regra «verde nunca em botões/fundos»: o verde só existe durante
  a animação.
- **Fechar:** tocar fora ou puxar para baixo (se o popup o permitir).

## 6.2 Parceiros e perfis (mockups «Parceiros e perfis», 2026-11-20)

- **Página Parceiros** (correção do Rafael, 2026-11-20): **não muda** — os
  cartões, os tamanhos e a barra de categorias ficam como estavam. Dos
  mockups «Parceiros e perfis» só entram o perfil do parceiro (abaixo) e os
  popups (§6.1).
- **Topo do perfil do parceiro** (pedido do Rafael): a foto tem 300 e
  **encolhe com o scroll** até à faixa dos botões, que fica **sempre
  visível**. Aberta: «Em destaque», logótipo 56 e nome 28 a branco sobre um
  véu escuro. Reduzida: ao lado da seta fica o nome 16 e a meta 13 a branco,
  e os cantos de baixo ficam iguais aos de cima (40). Voltar, partilhar e
  favorito ficam sempre no mesmo sítio e são sempre translúcidos (há sempre
  foto por trás). **Exceção ao «voltar ao topo» do §6:** aqui a seta é
  sempre «voltar» (não roda para ↑).
- **Pacotes:** linhas num grupo com um círculo que fica verde com o visto
  quando escolhido, nome 16, meta 13 e o preço à direita.
- **Barra fixa de reserva:** branca, cantos 35, a largura das caixas de
  conteúdo, sombra da navbar; a caixa de preço à esquerda e o botão preto
  52. Sem pacote escolhido: «DESDE €X» + «Escolher pacote» (vai aos
  pacotes); com pacote: o nome e o valor + «Reservar» (abre o popup); só
  orçamento: «REFERÊNCIA ≈ €X» (ou «POR Orçamento») + «Pedir orçamento»;
  sem evento livre: «Mensagem».
- **Só orçamento:** secção «Quanto pode custar» — rótulo 12 em maiúsculas,
  valor 40, para que é (13) e a explicação. O valor é o que o parceiro
  indica em «Preços e pacotes» (`average_quote_price`) e a nota é
  `reference_note` (migração 203).
- **Popups de reserva:** «Reservar <pacote>» (evento com «Mudar», pessoas,
  extras, mensagem, total e botão), «Reserva pedida» (estrela contente,
  resumo, «Ver conversa» + «OK») e «Pedir orçamento» (referência, evento,
  data, local com o seletor de moradas e mensagem).
- **Perfil do organizador:** faixa de cor 200 no topo (sem foto: botões
  brancos cheios 44 — voltar, partilhar, ⋯), a `ProfileCard_Users` por cima
  dela, «Próximos eventos» em carrossel, «A seguir», e a barra fixa com
  «Mensagem» (contorno) e «Seguir» (preto) a 52.
- **Moradas:** todos os campos de local (criar evento, local do evento,
  morada para convidados, cidade no registo, localização do parceiro,
  morada de pagamentos, pedir orçamento, procurar parceiros, morada dos
  presentes) usam o **seletor de moradas** (`AddressField` /
  `showAddressPicker`, `shared/widgets/address_picker.dart`): pesquisa com
  sugestões do Google, «Usar a minha localização» e «Confirmar local» com o
  mapa e a localidade, código postal e distrito preenchidos. **Nunca** uma
  caixa de texto livre para moradas.

## 6.3 Moldes fixos — popups e páginas (pedido do Rafael, 2026-11-21)

Para não inventar a cada ecrã: **qualquer popup ou página nova monta-se com
estes moldes**, tal e qual (mockups «Reservar por categoria», «Pagar ·
extras e loja» e «Definições · Pagamentos e Premium»). Se nenhum servir,
perguntar antes.

**Popup (ilha, §6.1) — de cima para baixo, interior 20, espaço 16:**
1. *(Só em fluxos com passos)* barra verde **10** + «2 DE 5» (12 negrito) à
   direita.
2. Cabeçalho: voltar **44** `#F2F0EB` à esquerda (a partir do 2.º passo) ·
   título **22** negrito + subtítulo **13** `#57534E` · «×» **44**
   `#F2F0EB` à direita.
3. Corpo, só com estas peças:
   - **Grupo** `#F2F0EB`, cantos 22, interior 4×16, linhas separadas por
     `#ECE7DC` (opções, pessoas, métodos de pagamento, extras). Opção
     escolhida: círculo verde com o visto; métodos: círculo com ponto.
   - **Título de grupo** em maiúsculas 12, espaçamento 2 («COMO QUERES
     PAGAR», «PARA QUEM»).
   - **Resumo**: grupo com linhas de 48 (rótulo 13 `#57534E`, valor 14
     negrito) e, por baixo, «A pagar agora» 13 + valor **20** negrito.
   - **Alerta** do §7 (linha 1,5, ponto, título 16 + frase 13).
   - **Nota**: uma linha 13 `#57534E` (prazos, o que acontece a seguir).
   - **Etiqueta** verde («Oferta», «3 meses grátis») antes de uma frase 13.
   - Pílulas **38** (filtros/escolhas, verdes quando escolhidas); caixas
     de texto em pílula **52** `#F2F0EB`.
4. Botões em baixo, **52**: um preto a toda a largura, ou contorno + preto
   («Pagar mais tarde» + «Pagar · 511,00 €»). Nunca «Voltar» aqui.

**Popup de fim** («Reserva pedida», «Pagamento feito», «És Premium»):
estrela **120** ao centro (contente para pedidos; parabéns para pagamentos
e Premium), título **22** ao centro, frase **14** `#57534E` ao centro,
resumo se houver, e «OK» preto (ou «Ver conversa» + «OK»). Sem «×».

**Página (fundo `#F2F0EB`, margem 20):** voltar branco **44** · título
**28** à esquerda + subtítulo **13** · blocos separados por títulos de
grupo em maiúsculas (24 acima, 12 abaixo). Blocos permitidos
(`shared/widgets/premium_kit.dart`, `page_kit.dart`):
- **Topo chamativo** (`HeroSummary`): cartão branco, cantos 22, interior
  18, **sem sombra**, tudo ao centro — estrela **150**, rótulo 12 em
  maiúsculas, número **40** + unidade 13, etiqueta verde, linha 13.
- **Cartão de número** (`NumberCard`): rótulo 12 em maiúsculas, número
  **40** + unidade 13, linha 13 («As contas», «Grátis ainda», «Disponível
  para receber»).
- **Sem / Com** (`CompareTable`): grupo branco, cabeçalho SEM/COM em
  maiúsculas 12, linhas de 56 com o nome 16, o «sem» a 14 `#57534E` e o
  «com» numa etiqueta verde.
- **Grupo de linhas** (§4): definições (nome 16, valor 14 + seta, sem
  ícones, sem texto por baixo) ou dinheiro (nome 16 + meta 13 à esquerda,
  valor 16 negrito à direita, sem seta).
- **Cartão em destaque** (`FeaturedCard`, só para o que queremos vender,
  como o Premium nas Definições, que fica **sempre no topo**): branco,
  cantos 22, interior 18, sombra suave do §5; estrela **76** à esquerda com
  etiqueta verde, título **19** e meta 13; por baixo `MiniStats` e/ou um
  cartão de número `#F2F0EB`; botão **44** (preto para comprar, contorno
  para gerir).
- **Barra fixa** (`StickyActionBar`): branca, cantos 35, 20 dos lados e em
  baixo, sombra da navbar, interior 12; um botão **52** e uma linha 13 ao
  centro por baixo. Preto para a ação principal; contorno quando a ação
  não é para incentivar («Cancelar subscrição»).

**Taxas e preços no texto:** dizer sempre a taxa como fica («2 % + 1 €»),
nunca só o desconto («−2 %»), quando se sabe o valor.

## 7. Alertas

- **Nunca** fundo amarelo. Todos os alertas, avisos e etiquetas de estado
  pendente são **fundo branco + linha fina (1,5 px) da cor do tom**, com um
  ponto da mesma cor antes do texto e o botão de ação preto
  (`AlertOutline`, `AlertStrip`, `shared/widgets/alert_outline.dart`).
- Tons:
  - **Amarelo** `#F2A01B` — pendente (para fazer, falta o sinal,
    "Proposta por responder", taxas a descontar…).
  - **Vermelho** `#C8553D` — urgente: o prazo acaba em **3 dias ou menos**
    (ou já acabou). `toneForDue(prazo)` decide.
  - **Verde** `#4F6B4A` — convite para um evento.
- **Brilho:** ao aparecer (entrar na aba), a linha brilha uns segundos e
  depois fica parada. Amarelo e verde 3 vezes (2 s / 2,4 s), vermelho 4 vezes
  (1,4 s). Nunca a piscar sem parar.
- Convite: uma linha fina (envelope num círculo verde claro, "CONVITE POR
  RESPONDER" 11, frase 15 negrito, data 13, botão preto "Ver" 36), nunca um
  bloco verde cheio.

## 8. Texto e tom

- Português de Portugal. "Taxa de serviço", nunca "comissão".
- Botões com verbos curtos ("Pedir orçamento", "Ver evento").
- Sem funcionalidades inventadas: o design não promete o que a app não faz.
