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
| Fundo de **todas** as páginas | `#F2F2F2` (cinzento claro **neutro**, liso, sem degradê — pedido 2026-11-21: «um cinzento não esverdeado») | `AppTheme.background`, `AppBackground.*` |
| Cartões, barras, popups | `#FFFFFF` | — |
| Linha entre **secções diferentes** | `#CFCFCF`, **2 px** | `AppTheme.sectionLine` |
| Linha entre elementos **da mesma secção** (linhas de uma lista) | `#E3E3E3`, 1 px | `AppTheme.line` |
| Texto principal | `#171713` | `AppTheme.ink` |
| Texto secundário / ícones inativos | `#57534E` | `AppTheme.inkMuted` |
| Verde da marca | `#4F6B4A` | `AppTheme.accentOliveDark` |
| Verde claro (etiquetas "sucesso", "Responde em ~1 h") | fundo `#E6EDE1`, texto `#3F7A4F` | — |
| Alerta pendente (linha) | `#F2A01B` | `AlertTone.pending` |
| Alerta urgente (linha) | `#C8553D` | `AlertTone.urgent` |
| Alerta de convite (linha) | `#4F6B4A` | `AlertTone.invite` |
| Etiqueta neutra / quadrado de ícone | fundo `#E6E6E6`, texto `#3A3733` | — |
| Pílula ativa da navbar | `#EBEBEB` | — |
| Erro / recusado | `#C8553D` | `AppStatusColors.declined` |
| Barra de progresso | `#A9C79A` (verde clarinho, pedido 2026-11-21) | `AppTheme.progress` |

**Verde só para seleção e etiquetas** (filtro ativo, contadores; e as barras
de progresso, verde clarinho, §6). **Nunca** para botões.

## 2. Botões

- **Principal:** fundo preto `#171713`, texto branco.
- **Secundário:** fundo branco, contorno preto 1,5 px, texto preto.
- Sempre em **pílula** (`StadiumBorder`).
- Altura: **52** a toda a largura; **44** dentro de cartões; **36** nas linhas
  de lista ("A seguir", "Ver evento"); **34** nas respostas rápidas.
- Texto: 15 negrito (52), 14 negrito (44), 13 negrito (36/34).
- **Botão redondo** (voltar, sino, conversa, partilhar, favorito,
  definições, ⋯, fechar «×»): **círculo preto `#171713` 44 com o ícone
  branco e sólido 20** (Heroicons Solid), sem sombra. **Em toda a app**
  (organizador, parceiro e convidado): nas páginas, sobre fotos e nos popups
  — nunca branco, cinzento ou translúcido (pedido do Rafael, 2026-11-21).
  Contador por cima (p. ex. mensagens por ler): pílula branca 20 com o
  número 12 negrito preto e aro preto 2.
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

- Margem lateral das páginas: **20** (`AppTheme.screenMargin`). A navbar e as
  barras flutuantes usam a mesma: **têm sempre a largura das caixas de
  conteúdo**. Os popups não: encostam aos lados e ao fundo (§6.1).
- **Sem caixas brancas nas listas** (pedido do Rafael, 2026-11-21): o
  conteúdo fica direto no fundo `#F2F2F2`. **Linha mais grossa (2 px
  `#CFCFCF`) entre secções diferentes** — os títulos de secção e de grupo já
  a trazem (`KitSection`, `KitCaps`, `V2Caps`, `SectionTitle`) — e **linha
  fina (1 px `#E3E3E3`) entre elementos da mesma secção**. Sem espaço a mais
  por baixo de um grupo: 12 até à linha, 16 da linha ao título.
- **Logo a seguir a uma caixa branca de destaque não há linha**
  (`KitCaps(line: false)`).
- **Grupos de linhas** (listas, definições, «Mais»): sem caixa e sem
  interior lateral — as linhas alinham com a margem 20 (`KitGroup`,
  `V2Group`, `SettingsGroup`).
- **Cartões com foto — eventos e parceiros** (pedido do Rafael,
  2026-11-22; `PhotoCard`, `shared/widgets/photo_card.dart`, em toda a
  app: «Os meus eventos», Descobrir, perfil de amigos, Parceiros,
  parceiros em destaque): **sem caixa e sem sombra** — o texto fica direto
  no fundo `#F2F2F2`; foto **150** com os **quatro cantos redondos (22)**,
  **até à linha da moldura** em cima e dos lados (proposta B do mockup «Foto
  até à linha», 2026-11-22) — o texto, o rodapé e a tarefa ficam 12 da
  linha e 8 em baixo;
  por cima da foto a etiqueta à esquerda («Novo», «Organizas»,
  «Convidado» — **nunca «Em destaque»**, que já é o título da secção) e uma pílula branca à direita (nota, dia);
  círculo **44** com aro branco 3 a sobrepor o canto de baixo da foto
  (logótipo do parceiro; nos eventos, a **foto de quem criou o evento**,
  ou as iniciais se não houver — pedido 2026-11-22); título **19** com os selos
  (§6) e a ação **sempre encostada à direita** (coração, partilhar), seja o
  nome curto ou comprido; meta **13**; divisória
  `#D9D9D9` e o rodapé — uma etiqueta à esquerda e, à direita, rótulo 9 +
  valor 16 **sem caixa nem linha** (`DESDE €900`, `ENTRADA Grátis`,
  `FALTAM 203 dias`, pedido 2026-11-22). **Empilhados na vertical**
  (Descobrir, lista de parceiros): uma **linha grossa 2 px `#CFCFCF`** entre
  cartões, 16 acima e abaixo (`CardsDivider`); nos carrosséis não há linha
  entre cartões. **Todos os cartões com foto** (eventos e parceiros, em
  todo o lado) vão numa **moldura** (forma A do mockup «Alerta com ação nos
  cartões», 2026-11-22; `PhotoCard.frameTone`): linha à volta do cartão,
  cantos 22, sem fundo — **cinzenta subtil 1 px `#E3E3E3`** sem nada por
  fazer; **1,5 da cor do tom** (amarelo / vermelho, §7) com coisas por
  fazer, com o brilho só na linha (para dentro). Nos carrosséis de eventos («Os meus eventos», perfil) **vê-se
  a ponta do cartão seguinte** (`SnapCarousel(peek: true)`, 86 % da
  largura); 16 a mais até «Descobrir».
  Os eventos já não levam as caixas de números
  (`MiniStats`) nem a barra de planeamento no cartão. **Exceção — «Os meus
  eventos»** (pedido do Rafael, 2026-11-22, mockup «Os meus eventos ·
  cartões brancos»): estes cartões têm **fundo branco** dentro da moldura
  (`PhotoCard(filled: true)`), em **duas linhas separadas** — «ORGANIZAS ·
  N» e «CONVIDADO · N», cada uma no seu carrossel. Os outros cartões
  (Descobrir, parceiros) ficam sem caixa; **nunca** sombra.
  - **Rodapé do parceiro** (no lugar de «Responde em ~1 h», por esta
    ordem): amigos que seguem («Ana e mais 2 seguem», com as fotos 20) ·
    «N eventos na À Nossa!» · «Responde em ~1 h» · «Desloca-se até X km» /
    «Todo o país».
  - **Quem confirmou** (pedido 2026-11-22, mockup «Quem vai nos eventos»,
    forma D; `AttendeesLine`): fotos 24 sobrepostas (como o «Seguido por»),
    **amigos primeiro e com o nome a negrito** — «**Ana e João** + 10
    confirmados»; sem amigos, «12 confirmados» com as fotos que se podem
    ver (só de quem segues ou tem perfil público, migração 214); ninguém
    ainda: três círculos cinzentos `#E0E0E0` com a forma das fotos (20 + aro
    2 da cor do fundo, sobrepostos) + «Sê o primeiro a ir!».
  - **Rodapé do evento:** **sempre as 3 fotos** (pedido 2026-11-22) —
    organizador: quem confirmou ou os 3 círculos cinzentos com «Ninguém
    respondeu ainda» / «Ainda sem convidados»; convidado: quem confirmou
    («**Ana** + 30 confirmados», migração 220) ou os círculos com «Ninguém
    confirmou ainda» — o que falta fazer vai na tarefa por baixo do rodapé
    (§7); Descobrir — quem confirmou (acima). Nos cartões brancos o aro das
    fotos é branco.
- **Outros cartões** (perfil, resumos): brancos, cantos 22,
  interior 18, com a sombra suave do §5 e **sem linha à volta**. A **linha
  preta 1,5 só no destaque dos painéis do evento** — convidado (o resumo
  «Faltam…», o «Agora» e «A tua resposta», §6.4) e organizador (o resumo e o
  «Agora», §6.5) — em mais lado nenhum (pedidos do Rafael, 2026-11-21).
- **«Para fazer» — sempre com um de três estados** (regra do Rafael,
  2026-11-21, para toda a app — organizador, parceiro e convidado): a
  **lista** das tarefas (com o número no título, «PARA FAZER · 2»); **feito**
  — estrela a piscar o olho + «Está tudo tratado» e o que ficou feito («Menus
  escolhidos e a tua parte paga.»); **ainda sem tarefas** — estrela a dormir
  + «Aparecem aqui as tuas tarefas» e o que vai aparecer («Menus para
  escolher e a tua parte para pagar.»). A secção nunca some sem explicação.
  (Se logo abaixo já houver outra estrela a dormir, esta vai sem estrela.)
- **Resumo do topo com o estado da pessoa** (toda a app): por baixo do
  número («Faltam N dias»), uma linha com o estado e a ação — «Vais com…» /
  «Vais só tu» + «Alterar» (contorno); «Não vais» + «Mudar» (preto). Quem
  disse que não vai vê o mesmo resumo, não uma caixa à parte.
- **Página para mudar uma resposta** (molde, mockup «A tua resposta»): voltar
  preto 44 · título 28 + subtítulo 13 · «VAIS?» com as opções num grupo
  (círculo verde com o visto na escolhida) · «QUEM VAI CONTIGO · N» com uma
  linha por pessoa (avatar 44, nome 16, meta 13 com alergias/idade/
  cadeirinha, «Editar» com contorno 36) · «+ Juntar alguém» com contorno 44 ·
  a nota 13 do prazo.
- **Listas com mais de 4 pessoas ou parceiros** (regra geral, pedido do
  Rafael, 2026-11-23): mostram 4 linhas e, no fim, as **fotos dos
  seguintes sobrepostas** (até 3, 28 com aro), «+X pessoas» (ou «+X
  pedidos», «+X parceiros») 14 negrito e «Ver todos» preto 36
  (`MoreFacesRow` + `kListPreview`, `shared/widgets/section_frame.dart`).
- Tudo o que se toca tem de parecer tocável: seta à direita ou botão (36,
  preto ou com contorno). Nunca texto verde como botão.
- Linha de definições: altura mínima 56, nome 16 negrito à esquerda, valor 14
  `#57534E` + seta à direita. **Sem ícones** nas linhas.
- Espaço entre título de secção e conteúdo: 12.

## 5. Sombras

- **Uma só sombra** para cartões em destaque (cartões de evento/parceiro,
  cartão do parceiro, resumos): `0 6 18 rgba(23,23,19,0.06)` —
  `BoxShadow(color: Color(0x0F171713), blurRadius: 18, offset: Offset(0, 6))`
  (`softShadow` / `softCard`).
- O destaque dos painéis do evento (convidado e organizador) não tem sombra (tem a linha preta, §4).
- Cabeçalho de conversa: `0 4 14 rgba(23,23,19,0.06)`.
- Navbar, barras fixas e popups: `0 8 24 rgba(23,23,19,0.12)`.
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
- **Caixas de números** (`MiniStats`: nota, seguidores, eventos no perfil
  do parceiro): fundo branco, linha preta 1,5 px à volta, cantos 12,
  conteúdo ao centro (número 16 negrito, rótulo 11). Exceção pedida à regra
  "sem linha". Já não vão nos cartões de evento (§4, 2026-11-22).
- **Selos do parceiro** (pedido do Rafael, 2026-11-22; `PartnerBadges`,
  `shared/widgets/partner_badges.dart`): ao lado do nome, em todo o lado
  onde aparece um parceiro (cartões, linhas de lista, topo do perfil), **só
  o visto verde de verificado** — `#4F6B4A` 18 (`checkBadge`): todo o
  parceiro aprovado pela equipa (perfil publicado). Sobre a foto escura do
  topo do perfil vai numa pílula branca.
- **Conquistas do parceiro** (pedido do Rafael, 2026-11-22, mockup
  «Conquistas dos parceiros», forma C; `AchievementsCorner`,
  `shared/widgets/partner_achievements.dart`): no **canto superior
  esquerdo da foto** do cartão de parceiro, por esta ordem:
  - **Fundador** — coroa de louros verde `#4F6B4A` com a estrela: os
    primeiros 100 parceiros.
  - **Modo Pro** — estrela preta: subscrição Pro ativa.
  - **Mais ativo** — chama amarela `#F2A01B`: os 10 % com mais reservas
    confirmadas nos últimos 30 dias (migração 213).
  A primeira vai numa **pílula branca 28 com o ícone 15 e o nome** (12
  negrito); as outras só em ícone, em **discos brancos 28**. Sem
  conquistas, o canto mostra «Novo» (se entrou há menos de 30 dias) ou
  nada. Tocar abre o popup **«Conquistas»** (molde do §6.3: título 22, nome
  do parceiro 13, «×»; uma linha por conquista com o ícone branco num
  círculo 44 da sua cor, nome 16 e o que quer dizer 13, e a linha
  «Verificado»; «OK» preto 52).
  Nos **perfis** (o meu Perfil de parceiro e a página do parceiro, mockup
  «Perfil do parceiro · conquistas», 2026-11-22) as mesmas conquistas vão
  **por cima do perfil**, 14 acima da foto 76, nas **mesmas pílulas e discos
  brancos** (o perfil já não tem caixa branca); sem conquistas, nada. Ao lado do nome, o visto verde
  de verificado (perfil publicado).
- **Preço:** **duas linhas, sem caixa nem linha** (pedido do Rafael,
  2026-11-22) — rótulo 9 `#57534E` em cima + valor 16 negrito por baixo,
  alinhados à direita: `DESDE` + `€X`, ou, para quem trabalha por
  orçamento, `POR` + `Orçamento`; também `ENTRADA` + `Grátis` e `FALTAM` +
  `203 dias`. O mesmo no topo do parceiro, na barra de reserva e nos
  cartões (`PriceBox`). Só por cima de uma foto leva a caixa branca (para
  se ler). Nunca "Por orçamento" numa só linha.
- **Cabeça do perfil:** `ProfileCard_Users` (amigos, organizadores, o meu
  perfil: avatar e os três números em colunas no topo) — **sem caixa
  branca**, direto no fundo `#F2F2F2` (pedido 2026-11-22, mockup «Perfil do
  parceiro · a página toda», B). No **parceiro**
  (página que os organizadores abrem) é o cartão do §6.2 — o mesmo
  desenho, com as conquistas por cima e sem preço ao lado do nome. O estado ("Reservado", "Pedido enviado")
  não é uma etiqueta solta: é dito uma só vez no aviso (§7), por baixo da
  cabeça.
- **Navbar:** branca, flutuante, margens **20 laterais** (a mesma largura das
  caixas de conteúdo, `AppTheme.screenMargin` — pedido 2026-11-20) / 20 em
  baixo, cantos 35;
  ícone 24 + texto 11 negrito; inativo `#57534E`, ativo `#171713` com pílula
  `#EBEBEB`.
- **Ícones:** Heroicons Solid na app; nos ecrãs dos mockups (Perfil,
  Mensagens, Conversa, Definições, Parceiro) os ícones de traço dos mockups
  (`LineIcon`) — menos dentro dos botões redondos, que levam sempre o ícone
  branco sólido (§2). Sem emojis (exceção: o "Parabéns! 🎉" do criar evento).
- **Conversa:** bolha minha preta / dele branca, cantos 18 com o canto do lado
  a 6; dia numa pílula `#E6E6E6`; "hh:mm · Visto"; ilha do evento flutuante
  com cantos da navbar, esconde-se no scroll.
- **Onboarding** (`shared/widgets/onb_kit.dart`, mockup "Onboarding"
  2026-11-12): barra de progresso (§6) de **10** com a percentagem (12
  negrito) à direita — começa sempre em 20%; botão de voltar redondo
  preto 44 (§2); "1 DE 4" como título de grupo (13); título 32, subtítulo 17
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
  listas vazias → a dormir; erros → triste; evento criado → parabéns;
  pagamento feito e «Reserva feita!» → piscar o olho (pedido 2026-11-22); convites e «vou» → apaixonada; aceitar/juntar →
  contente; sugestões → ideia; conversas vazias e «Está tudo tratado» → piscar o olho; Premium → fixe
  (de óculos, pedido 2026-11-21). Substitui
  as duas taças.
- **Páginas** (`shared/widgets/page_kit.dart`, canvases «Páginas do
  evento / parceiro / convidado», 2026-11-14): voltar redondo preto 44 numa
  linha com as ações à direita («+» preto 44, ⋯ preto 44); título de página
  28 à esquerda por baixo e subtítulo 13; filtros em pílula 38 **em cima**
  (com contador); **resumo do topo** branco (cantos 22, interior 18, sem
  sombra): rótulo 12 em maiúsculas, número 40, unidade 13, barra de progresso 10 (§6) e
  etiquetas ou uma linha 13 por baixo — nunca cartão verde; listas em grupos
  de linhas (avatar 44, nome 16, meta 13, etiqueta à direita).
- **Barra de progresso** (`AppProgressBar`, `shared/widgets/app_progress.dart`,
  pedido do Rafael 2026-11-21): **em toda a app**, a barra é **verde clarinho `#A9C79A`** (`AppTheme.progress`, pedido 2026-11-21) sobre o trilho `#E0E0E0`, **sem a mascote** (a estrela saiu de todas as barras, pedido 2026-11-22), e é **animada quando o progresso
  muda** — a barra cresce até ao sítio novo (e enche desde o início ao
  aparecer). Com «reduzir movimento» muda sem
  animação. Espessura 10 nos resumos e no onboarding, 6–8 nas linhas.
  `KitBar`, `OnbProgress`, `ProgressLine` e `ThinProgress` já a usam;
  **nunca** `LinearProgressIndicator` com valor (só o de carregar, sem valor).
- **Emojis:** só no "Parabéns! 🎉" do fim do criar evento (pedido do
  Rafael, 2026-11-12). Em mais lado nenhum.
- **Botões redondos sobre imagens e «voltar ao topo»**: sobre fotos (capa,
  herói) os botões redondos são os **pretos cheios 44** do §2, como em todo
  o lado — já não há botões translúcidos (pedido do Rafael, 2026-11-21;
  substitui a regra da transparência de 2026-11-16).
  Em **todas** as páginas que fazem scroll (com imagem ou sem), a **seta de
  voltar** (canto superior esquerdo) muda com o scroll: ao descer, o ícone
  **roda de ← para ↑** e o toque passa a **subir a página até ao topo** (com
  animação) em vez de voltar atrás; ao chegar ao topo, volta a ser a seta de
  voltar (←). Os restantes botões (definições, ⋯) não mudam. A rotação é
  sempre animada, nunca instantânea.
  - **Componente:** a seta fixa é o `ScrollAwareBackButton`
    (`shared/widgets/scroll_aware_back_button.dart`): recebe o
    `ScrollController` da lista do ecrã, a ação de voltar e `imageExtent` (os px
    de scroll em que ainda há imagem por trás — já não muda o aspeto, o
    botão é sempre preto). Fica num overlay fixo por cima da lista (não desce com ela).
    Todo o ecrã com scroll usa-o — o painel do evento já o usa
    (`wedding_details_screen.dart`, no `Stack` do `_normal`). **Nunca** refazer
    esta seta à mão: ligar o componente.

## 6.1 Popups (folhas e diálogos)

Pedido do Rafael, 2026-11-20. Vale para **todos** os popups da app
(organizador, parceiro e convidado), sem exceções.

- **Colados aos lados e ao fundo** (pedido do Rafael, 2026-11-22, mockup
  «Escolher o menu · popup»; substitui a ilha com margem de 2026-11-20):
  sem margem dos lados nem em baixo, **cantos 35 só em cima**, fundo
  branco e sombra; a margem segura do telemóvel fica dentro do popup. Com
  o teclado aberto, o popup sobe por cima dele.
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
  dentro do popup ficam a `#F2F2F2`, sem sombra (o popup é branco).
- **Animação — a onda da navbar:** ao abrir, uma onda no verde da marca
  `#4F6B4A` nasce no centro da navbar (o popup vem da navbar) e cresce em
  círculo até encher o popup; depois a cor desfaz-se no branco enquanto o conteúdo entra (cerca
  de 0,56 s). Ao fechar, a onda volta a encolher para a navbar (0,32 s).
  Com «reduzir movimento» o popup só aparece e desaparece. Esta é a única
  exceção à regra «verde nunca em botões/fundos»: o verde só existe durante
  a animação.
- **Fechar:** tocar fora ou puxar para baixo (se o popup o permitir).
- **Sair pergunta só na reserva e no pagamento** (pedido do Rafael,
  2026-11-20; só nestes fluxos desde 2026-11-22): nos popups de **reservar
  / pedir orçamento** (escolher o evento, o fluxo de reserva, os extras) e
  de **pagar** (pagamento em falta, bilhetes), tocar no «×», tocar fora ou
  puxar para baixo abre «Tens a certeza que queres sair?» («O que
  preencheste neste popup não fica guardado.») com «Sair» (contorno) e
  «Continuar» (preto, volta ao popup como estava). Esta pergunta não tem
  «×». **Nos outros popups fecha logo** (`showIslandSheet` tem
  `confirmExit: false` por omissão; estes fluxos passam `confirmExit:
  true`).
- **Voltar — sempre no mesmo sítio** (pedido do Rafael, 2026-11-20, regra
  da consistência): nos popups com passos, a partir do 2.º passo, o voltar é
  um **círculo preto 44 com a seta ← branca 20 (§2), no canto superior esquerdo**, ao
  lado do título (o «×» de fechar fica à direita). **Nunca** um botão
  «Voltar» em baixo: os botões de baixo são só ações (um preto a toda a
  largura, ou contorno + preto, p. ex. «Pagar mais tarde» + «Pagar»). Vale
  para todas as secções da app (organizador, parceiro e convidado).

## 6.2 Parceiros e perfis (mockups «Parceiros e perfis», 2026-11-20)

- **Página Parceiros** (pedido do Rafael, 2026-11-20, mockup «Parceiros ·
  cartões novos»): o **topo não muda** (título, localidade, Empresas/Lojas,
  pesquisa, categorias em pílulas **sem imagens**). Mudam os cartões e as
  secções:
  - **Cartão de parceiro** (`PartnerBigCard`, `partner_cards.dart`): o
    cartão com foto do §4 (**sem caixa nem sombra**, foto toda redonda) —
    etiqueta «Novo» (branca) e nota na foto (sem «Em destaque»: a secção já o diz); logótipo
    44 a sobrepor o canto; nome 19 com os selos (§6) e o coração; categoria
    13; «zona · N anos de experiência» 13; divisória `#D9D9D9`; rodapé do
    §4 e o preço (sem caixa).
  - **Secções em carrossel:** «Em destaque (perto de ti)», «Mais bem
    avaliados» e «Novos na À Nossa!». **Sem carrosséis por categoria em
    «Todos»** (pedido 2026-11-22): as categorias estão nas pílulas de cima. Cartões de **330**, 10 entre eles,
    12 entre o título e os cartões, 24 entre secções.
  - Por baixo, «N parceiros» + «Filtrar» com o **mesmo cartão a toda a
    largura**.
- **Avaliações no perfil do parceiro** (sem caixa, B; mockup «Avaliações ·
  resposta do parceiro», 2026-11-22): «Experiência geral» com a nota 40
  numa caixa com contorno e as barras (§6) por estrelas; por baixo, cada
  comentário (avatar 40, nome 16 **com «›»** — tocar abre o **perfil do
  organizador** que avaliou —, «zona · mês ano» 13, nota 12 com estrela
  preta, texto 14 justificado) e, se o parceiro respondeu, a **resposta em
  balão** (forma B): branco, cantos 18, logótipo 24, nome 13 negrito com o
  visto verde de verificado, etiqueta verde «Parceiro», texto 14 e «Respondeu em mês ano» 12. «Ver
  todas (N)» mostra o resto.
- **@ nos perfis:** o `@` aparece na meta do perfil de organizadores **e de
  parceiros** («@luzdeagosto · Fotografia · Porto»; edita-se em «Editar
  perfil» → nome de utilizador). **No registo**, logo a seguir ao «Nome»,
  vem «Nome de utilizador» (`@ana.silva`): obrigatório, verificado enquanto
  se escreve («@ana.silva está livre» a verde ou «Esse @ já está ocupado»);
  fica na conta e aplica-se assim que houver sessão (pedido 2026-11-22).
- **Perfil do organizador · «Avaliações que deixou · N»** (2026-11-22): uma
  linha por parceiro que avaliou (logótipo 44, nome 16 com o visto, «★ 5 · categoria ·
  mês ano» 13, seta), que abre a página do parceiro; sem avaliações, não
  aparece.
- **Topo do perfil do parceiro** (pedido do Rafael; foto 200 desde
  2026-11-22): a foto tem **200**, sem texto por cima, e **encolhe com o
  scroll** até à faixa dos botões, que fica **sempre visível**. **Reduzida**
  (mockup «Topo reduzido», **D**, 2026-11-22): a foto dá lugar a uma **barra
  branca** (cantos 35 em baixo, sombra da navbar) com o logótipo 32, o nome
  16 com o visto e a meta 13 `#57534E` («Fotografia · Porto»); fica só o
  favorito (o partilhar está no topo aberto); por baixo, **atalhos para as
  secções** (Pacotes/Menus, Portfólio, Onde fica, Avaliações — só as que
  existem) em pílulas 32 brancas, a da secção onde estás a preto, que levam
  à secção. Voltar e favorito ficam sempre no mesmo sítio e são os pretos
  44 do §2. **Exceção ao «voltar ao topo» do
  §6:** aqui a seta é sempre «voltar» (não roda para ↑). O mesmo nos
  **eventos** (painel do organizador e as páginas do evento — Orçamento,
  Convidados, Reservas/Parceiros, Mesas, Convidar, Para os convidados,
  Presentes, Definições do evento; pedido 2026-11-22:
  `ScrollAwareBackButton(rotate: false)` / `KitPage(rotateBack: false)`),
  que também não têm o desvanecer branco em cima e em baixo nem o degradê
  para branco no fundo (fundo liso `#F2F2F2`).
- **Perfil do parceiro** por baixo da foto (pedido 2026-11-22, mockup
  «Perfil do parceiro · a página toda», **B**): **sem caixa branca** — as
  **conquistas** por cima (pílulas e discos brancos, §6; sem nenhuma,
  nada), o **logótipo 76** e os três números em colunas (nota, seguidores,
  eventos: 20 negrito + 12), o nome 20 com o visto verde (**sem preço** ao
  lado: já está na barra de baixo), «categoria · zona» 13, anos de
  experiência 13 e, à direita, **o mesmo destaque do rodapé do cartão**
  (`PartnerHighlight`: amigos que seguem · N eventos na À Nossa! ·
  «Responde em ~1 h» · «Desloca-se até X km» / «Todo o país»), descrição justificada com «Ler
  mais», etiquetas e «Seguir» + «Mensagem» com contorno.
- **A página do parceiro toda sem caixas brancas** (B): pacotes, «Quanto
  pode custar», «Onde fica» e avaliações direto no fundo, com linhas finas
  `#E3E3E3` entre as linhas dos pacotes. Só a barra fixa de reserva fica
  branca.
- **«Onde fica»:** a **imagem do Google Maps** com o pino (`VenueMap`, ação
  `staticmap` da função `places`, cantos 16); sem ela, os mosaicos do
  OpenStreetMap.
- **Pacotes:** linhas num grupo com um círculo que fica verde com o visto
  quando escolhido, nome 16, meta 13 e o preço à direita.
- **Barra fixa de reserva:** branca, cantos 35, a largura das caixas de
  conteúdo, sombra da navbar; o preço (sem caixa) à esquerda e o botão preto
  52. Sem pacote escolhido: «DESDE €X» + «Escolher pacote» (vai aos
  pacotes); com pacote: o nome e o valor + «Reservar» (abre o popup); só
  orçamento: «REFERÊNCIA ≈ €X» (ou «POR Orçamento») + «Pedir orçamento»;
  sem evento livre: «Mensagem».
- **Só orçamento:** secção «Quanto pode custar» — rótulo 12 em maiúsculas,
  valor 40, para que é (13) e a explicação. O valor é o que o parceiro
  indica em «Preços e pacotes» (`average_quote_price`) e a nota é
  `reference_note` (migração 203).
- **Popups de reserva — o mesmo fluxo em todas as categorias** (mockups
  «Reservar por categoria», 2026-11-20/21): Para que evento? (sempre) ·
  Confirma as pessoas (vêm do evento e das respostas; aviso amarelo só se
  forem **mais** do que no evento, «22 de 122 do evento» se forem menos) ·
  Quem paga? (só onde faz sentido) · o que falta saber da categoria (hora,
  entrega, partida…) · Tudo certo? («Continuar») · Queres juntar alguma
  coisa? (extras; «Sem extras» + «Continuar») · Pedir reserva. A reserva só
  é pedida depois dos extras. Nunca se volta a perguntar o dia, o local nem
  as pessoas. Fim: «Reserva pedida» (estrela contente, resumo, «Ver
  conversa» + «OK»); pagamento feito → estrela a piscar o olho.
  **Com sinal** (pedido do Rafael, 2026-11-22, mockup «Reserva: quem paga e
  pagar o sinal»): o último passo é só «Pedir reserva»; depois vem
  **«Reserva feita!»** (estrela **a piscar o olho**, animada; resumo, «Continuar») e logo a
  seguir o popup **«Pagar o sinal»** — resumo (reserva, sinal), «A pagar
  agora», «+ taxa de serviço no passo seguinte», a nota (cativo até o
  parceiro aceitar; aceite, cancela-se com devolução até 48 h depois de
  pagar; depois, sem reembolso; recusado ou sem resposta em 48 h, é
  libertado) e **«Pagar mais tarde» + «Pagar agora»**. Pago → «Sinal pago»
  (a piscar o olho).
- **Pedir orçamento:** o mesmo fluxo — evento, pessoas, «O que procuras?»
  (hora e mensagem), Tudo certo? → «Pedir orçamento» → «Orçamento pedido».
  Na proposta: «Recusar» (pergunta o motivo, que segue para o parceiro na
  conversa) ou «Aceitar» → extras → pagar o sinal.
- **Pagar mais tarde:** enquanto houver tempo, o ecrã de pagar tem
  «Pagar mais tarde» ao lado de «Pagar». Abre «Pagar mais tarde?» com o
  aviso do que acontece sem pagamento (amarelo; vermelho nos últimos 3
  dias): sem o sinal, o parceiro pode aceitar outro pedido; sem o valor
  todo, a reserva é cancelada; o convidado que não paga sai da reserva (os
  outros vão na mesma). A taxa de serviço só entra no passo de pagar e
  diz-se antes: «+ taxa de serviço no passo seguinte».
- **Perfil do organizador:** faixa de cor 200 no topo (botões
  pretos 44 do §2 — voltar, partilhar, ⋯), a `ProfileCard_Users` por baixo
  dela (sem caixa branca, já não a sobrepõe), «Próximos eventos» em carrossel, «A seguir», e a barra fixa com
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
1. *(Só em fluxos com passos)* barra de progresso **10** (§6) + «2 DE 5» (12 negrito) à
   direita.
2. Cabeçalho: voltar **44** preto à esquerda (a partir do 2.º passo) ·
   título **22** negrito + subtítulo **13** `#57534E` · «×» **44** preto
   à direita (ícones brancos sólidos 20, §2).
3. Corpo, só com estas peças:
   - **Grupo** `#F2F2F2`, cantos 22, interior 4×16, linhas separadas por
     `#D9D9D9` (opções, pessoas, métodos de pagamento, extras). Opção
     escolhida: círculo verde com o visto; métodos: círculo com ponto.
   - **Título de grupo** em maiúsculas 12, espaçamento 2 («COMO QUERES
     PAGAR», «PARA QUEM»).
   - **Resumo**: grupo com linhas de 48 (rótulo 13 `#57534E`, valor 14
     negrito) e, por baixo, «A pagar agora» 13 + valor **20** negrito.
   - **Alerta** do §7 (linha 1,5, ponto, título 16 + frase 13).
   - **Nota**: uma linha 13 `#57534E` (prazos, o que acontece a seguir).
   - **Etiqueta** verde («Oferta», «3 meses grátis») antes de uma frase 13.
   - Pílulas **38** (filtros/escolhas, verdes quando escolhidas); caixas
     de texto em pílula **52** `#F2F2F2`.
4. Botões em baixo, **52**: um preto a toda a largura, ou contorno + preto
   («Pagar mais tarde» + «Pagar · 511,00 €»). Nunca «Voltar» aqui.

**Popup de fim** («Reserva pedida», «Pagamento feito», «És Premium»):
estrela **120** ao centro (contente para pedidos; a piscar o olho para
pagamentos; parabéns no Premium), título **22** ao centro, frase **14** `#57534E` ao centro,
resumo se houver, e «OK» preto (ou «Ver conversa» + «OK»). Sem «×».

**Página (fundo `#F2F2F2`, margem 20):** voltar preto **44** · título
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
  cartão de número `#F2F2F2`; botão **44** (preto para comprar, contorno
  para gerir).
- **Barra fixa** (`StickyActionBar`): branca, cantos 35, 20 dos lados e em
  baixo, sombra da navbar, interior 12; um botão **52** e uma linha 13 ao
  centro por baixo. Preto para a ação principal; contorno quando a ação
  não é para incentivar («Cancelar subscrição»).

**Taxas e preços no texto:** dizer sempre a taxa como fica («2 % + 1 €»),
nunca só o desconto («−2 %»), quando se sabe o valor.

## 6.4 Painel do convidado (mockups «Painel do convidado», 2026-11-21)

- **Topo:** foto do evento com, à esquerda, só a **seta para sair** (não há
  «Os meus eventos» aqui); à direita o **grupo do evento** (conversa dos
  convidados, com o contador; só para quem vai e com grupos ligados) e
  **«Como chegar»** (pin; leva ao mapa; só com local). Sem sino aqui.
- **Resumo** (o destaque da página, caixa branca com a linha preta 1,5 — o único sítio da app com essa linha, §4): «FALTAM N
  dias · data · hora» (véspera: «AMANHÃ 16:00»; no dia antes de começar:
  «COMEÇA DAQUI A 3 h») e, para quem vai, sempre a linha **«Vais com…»** (ou
  «Vais só tu») com «Alterar» (botão com contorno). No dia, durante o
  evento, o destaque é o **«Agora»** (o momento, a barra de progresso e «A
  seguir»). Quem disse que não vai: **«A tua resposta»** em caixa branca
  com «Mudar».
- **Ordem:** PARA FAZER (sempre: as tarefas, «Está tudo tratado» ou
  «Aparecem aqui as tuas tarefas», §4; uma tarefa por reserva — escolher o
  menu e pagar a parte vão juntos, «Escolher e pagar») → no dia FOTOS → **A tua mesa** (o número no
  centro do círculo com as pessoas à volta; tu a preto) → PROGRAMA (o mesmo
  desenho do organizador; cada momento com o seu ícone 34 — foto/iniciais do
  parceiro escolhido ou, sem parceiro, as iniciais do local) → DRESS CODE
  (cabide; as bolinhas das cores 22 + os nomes, se o organizador as escolheu)
  → MAIS («Oferece um presente» · lista ou
  envelope; «Alojamento e transporte» · onde ficar e como lá chegar) → ANFITRIÕES (Mensagem) → **COMO CHEGAR, sempre em último**
  (vista de mapa com o pino — `VenueMap`, em todo o «Como chegar» da app —,
  «Copiar morada» + «Abrir mapa», que pergunta com que app).
- **Só aparece o que existe:** mesa por revelar, programa sem nenhum
  momento, dress code vazio, nada para fazer, sem local → essas secções não
  aparecem; o que o organizador desliga também não. O programa já não se
  pode desligar. As **fotos só aparecem no dia** (e depois).
- **Sem nada ainda:** «Para fazer» vazio, uma linha de secção e a estrela a
  dormir com «Ainda à espera dos anfitriões», presentes (se ligados) e anfitriões.
- **Não vou:** o resumo «Faltam…» com «Não vais · Mudar» (§4), presentes e
  anfitriões. «Mudar» e «Alterar» abrem a página «A tua resposta» (§4).
- **Depois do evento:** as fotos em primeiro, agradecer, presentes e
  anfitriões; o programa e o mapa saem.
- «Vou / Não vou» só na página principal dos eventos (no aviso «Convite por
  responder», com «Não vou» de contorno e «Vou» preto) — e no RSVP pelo link.
  O painel do evento não tem «O teu convite» e o assistente do convidado não
  pergunta se vais: abre depois de «Vou» (quem vai contigo, idades, alergias).

## 6.5 Painel do organizador (mockups «Painel do organizador», 2026-11-21)

Muito semelhante ao painel do convidado (§6.4), com as mesmas peças.

- **Painel novo** (pedido do Rafael, 2026-11-22, mockup «Painel do
  organizador · secções com moldura»): **cada secção numa moldura cinzenta**
  (`SectionFrame`, `shared/widgets/section_frame.dart`: linha 1,5
  `#CFCFCF`, cantos 22, interior 16, sem fundo; o título em maiúsculas lá
  dentro) — Para fazer, Sugestões, Fotos, Programa, Números, Reservas,
  Convite e Gerir; as linhas grossas entre secções saem.
  - **Para fazer:** a moldura cinzenta e **cada aviso com a sua linha**
    amarela ou vermelha pelo prazo (como no cartão da página Eventos), o
    brilho só na linha e sem fundo; **sem bolinha** — à esquerda a imagem
    do parceiro (logótipo 44) ou do que se trata (pedidos para entrar: o
    ícone num círculo cinzento); título 16 e meta 13 **numa linha só**
    («Sinal 1 386 € · até 30 nov», «Menus e pagar · até 9 jun»); botões
    «Pagar», «Escolher», «Ver», «Aceitar».
  - **Sugestões: no máximo 4**, cada uma com o ícone num círculo cinzento
    44 e «Ver» (de venda) ou «Fazer» com contorno 36. As de venda (ver
    parceiros, uma por categoria em falta) **vão mudando de 4 em 4 horas**;
    primeiro até 2 de venda, depois as outras.
  - **Programa:** o programa todo e «+ Adicionar momento» (contorno 44);
    vazio, a estrela a dormir, «Ainda sem programa» e o mesmo botão.
  - **Reservas:** por pagar, o botão preto «Pagar» (abre os popups de
    pagar) em vez da etiqueta; «falta o sinal» / «por pagar» vai na meta;
    as etiquetas numa linha só (neutra a `#E6E6E6`).
  - **«Convidar»** (sem convidados) abre a página «Convidar»
    (`/guests/convidar`).
- **Topo reduzido** (pedido 2026-11-22): o mesmo dos parceiros (§6.2) nos
  eventos (organizador e convidado) e nos perfis — `ReducedTopBar`
  (`shared/widgets/reduced_top_bar.dart`): depois da capa, a barra branca
  com a foto 32, o nome 16 e a meta 13 («Casamento · Sáb, 12 jun»), ⋯ (no
  convidado, o grupo do evento; no perfil, partilhar) e os atalhos —
  organizador: Para fazer · Programa · Números · Reservas · Convite · Gerir;
  convidado: Para fazer · A tua mesa · Programa · Dress code · Como chegar;
  perfil: Próximos eventos · A seguir · Avaliações.

- **Capa:** a foto com o véu, o tipo, o nome 28 e a data/local a branco em
  baixo; a seta fixa de voltar (§6) à esquerda; **partilhar** e **⋯** pretos
  44 à direita. Tocar na foto muda a capa.
- **Resumo** (destaque, linha preta 1,5): «FALTAM N dias · data · hora» e,
  por baixo, os convidados — «48 vão» + «60 por responder · 12 não vão» com
  «Lembrar» (contorno); todos responderam → «Ver»; sem convidados → «Ainda
  sem convidados» + «Convidar» (preto); depois do evento → «FOI HÁ N dias»,
  «108 foram» + as fotos. No dia, a decorrer, o destaque é o **«Agora»**.
- **Para fazer** (os três estados do §4): **sem tarefas pré-feitas** — só o
  que existe mesmo: pagamentos com prazo **das reservas** (as despesas
  escritas à mão no Orçamento não entram: não se pagam na app, pedido
  2026-11-22) («Pagar»; numa reserva com menus
  que o organizador escolhe — restaurante ou catering — os menus escolhem-se
  ao pagar: o nome do parceiro, «Menus e o sinal (300 €)» e «Escolher e
  pagar», como no convidado), propostas dos parceiros («Ver») e pedidos
  para entrar («Aceitar»), com o ponto da cor do prazo
  (§7). **«Pagar» e «Escolher e pagar» abrem popups** por cima do painel
  (pedido 2026-11-22), nunca a página das reservas: o mesmo fluxo de
  depois de aceitar uma proposta — «Queres juntar alguma coisa?» (1 DE 2,
  só se o parceiro tiver extras por juntar) → pagar (2 DE 2, com o voltar
  aos extras). Nas mesas com menus, «Escolher e pagar» é o popup dos
  menus (§6.6). Feito: «Pagamentos em dia e propostas respondidas.»; vazio:
  «Pagamentos, pedidos para entrar e propostas dos parceiros.»
- **Sugestões:** **nunca repetem o «Para fazer»** nem o resto do painel; cada
  uma só aparece quando se aplica; sem nenhuma, a secção não aparece:
  - **Ver parceiros** — as categorias que o tipo de evento costuma precisar
    e ainda sem reserva nem proposta (no máximo duas no texto; abre os
    parceiros nessa categoria). Casamento/renovação: espaço, catering,
    fotografia, música, bolo, flores; batizado/comunhão: espaço ou
    restaurante, bolo, fotografia, decoração; aniversário/festa: espaço ou
    restaurante, bolo, música/animação; noivado/chá de bebé: restaurante ou
    espaço, bolo, decoração; festa de curso: espaço, música, transporte;
    empresa: espaço ou restaurante, catering, transporte; os outros tipos:
    «Ver parceiros» só sem nenhuma reserva.
  - **Partilhar o convite** (há convidados e ninguém respondeu) · **Juntar o
    local** (sem local) · **Revelar as mesas** (todos sentados, mesas ainda
    escondidas; pergunta «Revelar as mesas?» e os convidados passam a ver já
    a mesa deles) · **Dress code** (sem estilo nem cores) · **Lista de
    presentes** (ligada e vazia) · **Pôr foto de capa** (sem foto) ·
    **Convidar quem organiza contigo** (só um organizador) · **Convidar
    quem segues** (quem sigo e ainda não está no evento) · **Juntar a hora**
    (sem hora de início) · **Escrever as boas-vindas** (sem mensagem) ·
    **Definir o orçamento** (sem orçamento) · **Sentar os convidados** (só
    num espaço com mesas separadas, ainda sem mesas e já com confirmados — os
    restaurantes juntam mesas para o grupo) · **Onde ficar e como lá chegar**
    («Estadia» ligada e sem opções) · **Pôr bilhetes à venda** (festas,
    concertos, festivais e noites com entrada livre) · depois do evento,
    **Agradecer aos convidados** (abre o grupo do evento) e **Avaliar os
    parceiros** (reservas feitas ainda sem avaliação). O programa vazio é
    pedido pela própria secção Programa.
- **Grupo do evento** (pedido do Rafael, 2026-11-21, migração 212): nasce
  com o evento, com toda a gente (anfitriões, quem organiza e convidados com
  conta); tem a **foto** (a capa), o **nome** e a **descrição** do evento
  («Casamento · 12 jun 2027 · Quinta do Freixo»), que acompanham o evento;
  os **anfitriões aparecem em primeiro** na lista de membros, com a etiqueta
  «Anfitrião»; não se apaga.
- **Restaurantes não têm sinal** (191): paga-se tudo de uma vez — «Menus e o
  pagamento (300 €)», etiqueta «Por pagar» (nunca «Falta o sinal»).
- **Ordem:** resumo → PARA FAZER → SUGESTÕES → (no dia e depois) FOTOS →
  PROGRAMA → NÚMEROS → RESERVAS (estado em etiqueta; «Falta o sinal» ou, nos
  restaurantes, «Por pagar») → CONVITE (código, «Partilhar», «Ver como
  convidado») → GERIR → **PARCEIROS EM DESTAQUE** (carrossel, no fim, com o
  mesmo cartão da página Parceiros — `PartnerBigCard` / `PartnerCarousel`,
  pedido 2026-11-22: os parceiros em destaque usam sempre esse cartão, em
  todo o lado).
  Depois do evento, o programa, os números, o convite e os parceiros em
  destaque saem.
- **Números em caixas** (pedido 2026-11-22, mockup «Números do painel»,
  B): 2 por linha, 10 entre elas, **cada número na sua caixa com a linha da
  moldura** (1,5 `#CFCFCF`, cantos 16, interior 14×12, sem fundo), **sem
  ícones**; rótulo 12 em maiúsculas, valor **28** negrito e uma linha 13,
  tudo **ao centro na horizontal e na vertical**; as duas caixas de cada
  fila com a mesma altura: orçamento, convidados, parceiros e mesas (só
  num espaço com mesas separadas e já com mesas).
- **Gerir:** Presentes e Página dos convidados (os convidados e as mesas
  estão nos números); por baixo de uma linha grossa (2 px), **Definições
  do evento** à parte, com o botão redondo preto 44 (roda dentada).

## 6.6 Menus por pessoa (pedido do Rafael, 2026-11-22, migração 216; mockup «Escolher o menu · popup»)

- **Já não há menu igual para todos:** cada pessoa tem o seu menu.
- **Quem escolhe o menu: quem paga a comida** (pedido do Rafael,
  2026-11-22, migração 217). Quando cada convite paga o seu, escolhes o teu
  e o de quem vem no teu convite (acompanhantes e filhos); os organizadores
  escolhem por quem pagam — toda a gente com «Pagamos nós», ou as pessoas
  de «Nós pagamos por». **Quem tem a comida paga por outros só diz as
  alergias** (dele e de quem traz) e pode juntar **extras, que paga ele**.
  As alergias de quem vem contigo são obrigatórias; as dos outros, se as
  souberes.
- **Popup** (`chooseMenuAndPay`, `choose_menu_sheet.dart`): 1 «Escolhe os
  menus» — «PARA QUEM» com uma pílula 38 por pessoa («Tu · Carne», a aberta
  a verde), «MENU DO TOMÁS · 4» com os menus num grupo, «ALERGIAS DO TOMÁS»
  (caixa 52 + pílula «Nenhuma»; **pedem-se sempre**); para quem não
  escolhes o menu, em vez dos menus, o menu já escolhido (ou «Ainda por
  escolher») e «Escolhem os anfitriões: são eles que pagam.» — o título
  passa a «As tuas alergias»; «3 de 4 menus» + o
  valor 20 e o botão que diz o que falta («Falta o menu da Rita») → 2
  «Queres juntar alguma coisa?» (os extras do convite, **depois dos
  menus**; «Sem extras» + «Continuar · 98 €») → 3 pagar.
- **Muitas pessoas** (mais de 8 por quem escolhes, p. ex. «Pagamos nós»):
  o popup abre em **«Todos · N»** — um menu para todos de uma vez («O mesmo
  menu para todos. Muda o de alguém em «Por pessoa»…») — e as pílulas por
  pessoa ficam atrás de «Por pessoa (N)». Depois os extras e **um só
  pagamento** com tudo junto.
- **«Nós pagamos por» depois da reserva** (pedido 2026-11-22, migração
  218): no topo do popup dos menus do organizador, quando cada convite
  paga o seu — «Nós pagamos por · N pessoas» + «Escolher» (abre «Por quem
  pagamos?»); ao guardar, essas pessoas passam para a vossa conta e
  escolhes o menu delas.
- **Trocar o menu que outro paga** (pedido 2026-11-22, migração 219): quem
  tem a comida paga por outros vê o menu escolhido («Escolhido por quem
  paga») e pode trocar por um **do mesmo valor ou mais caro** — os mais
  baratos ficam apagados («Mais barato: não dá para trocar»), os mais caros
  dizem «+ 16 € · pagas tu»; **a diferença paga-a quem troca**. Se quem paga
  mudar o menu, a troca sai.
- **«Quem paga?» na reserva** (mockup «Menus por convite e cadeirinhas»,
  2026-11-22): «Pagamos nós» ou «Cada convite paga o seu» (opção escolhida
  a verde) e, neste, «NÓS PAGAMOS POR (SE QUISERES)» — um cartão `#F2F2F2`
  com «Pessoas» + «Escolhe pelo nome · 2 escolhidas» e «Escolher» (contorno
  36); as escolhidas ficam **dentro do cartão** em pílulas verdes 38 com o
  «×» num círculo; por baixo a nota 13. «Escolher» abre **«Por quem
  pagamos?»**: voltar + «×», «2 pessoas escolhidas», «Procurar
  convidado» e um grupo por convite — «**João** traz Ana e Manuel» 13 por
  cima e uma linha por pessoa (avatar 44 branco com as iniciais, nome 16,
  «Paga por si» / «Pagas tu» a verde / «Paga João», visto verde à
  direita); «Guardar · 2 pessoas» preto 52.
- **Pagar:** só cartão, Apple Pay e Google Pay em toda a app — sem
  Multibanco nem MB WAY (pedido 2026-11-22).

## 6.7 Páginas do evento (pedido do Rafael, 2026-11-22; mockups «Páginas do evento · com molduras» e «… quando estão vazias»)

O mesmo desenho do painel novo (§6.5) em Orçamento, Convidados, Reservas,
Mesas, Convidar, Para os convidados, Presentes, Definições do evento e
«Pedidos para entrar»: voltar preto 44 (sem rodar), título 28 + subtítulo
13, filtros em pílulas, o **resumo branco** do topo e **cada secção numa
moldura** (`SectionFrame`). Peças partilhadas em
`shared/widgets/section_frame.dart`: `FrameTaskRow` (aviso com a linha
amarela/vermelha e o botão 36), `FrameNumbers` (números em caixas),
`FrameEmpty` (mascote animada a dormir — ou a piscar o olho em «Está tudo
tratado» —, título 16, frase 13 e a ação), `FrameNote`, `FrameButton36`,
`FrameButton44`.

- **Orçamento:** tocar no resumo muda o **teto** («Mudar o teto ›»; sem
  teto, «Definir o teto»); números «Gasto» e «Por pagar»; pagamentos — os
  das reservas em aviso com «Pagar», os que fazes por fora com «Marcar
  pago» (contorno) ou «Pago»; categorias **aparecem sozinhas** (com gastos
  ou teto) e, sem teto, «Pôr teto».
- **Convidados:** o resumo mostra o **teto de convidados** do onboarding
  («120 de 150 convidados», tocar muda; sem ele, «Definir o teto»);
  «Pedidos para entrar» até 4 em aviso com «Ver» e, a mais, «+X pedidos»
  com as fotos e «Ver»; a lista em molduras por resposta («Por responder»,
  «Vão», «Não vão»), 5 de cada e **«Ver todos (N)»** (contorno 44).
- **Pedidos para entrar** (`/guests/pedidos`): um pedido de cada vez —
  foto 76, nome 20, @ e cidade, eventos, em comum e quem traz, as fotos em
  comum, as respostas, «Quem é para vocês?», «Ver perfil», «Recusar» +
  «Aceitar»; os outros por baixo com «Ver».
- **Reservas:** cada parceiro diz **para que evento é**; pílulas por
  evento quando há mais do que um; **«Para fazer»** com os pagamentos
  («Pagar», abre os popups) e as **propostas recebidas** (linha amarela).
- **Mesas:** **sem Mesa de Honra nem pista de dança**; mesas em caixas
  brancas com os lugares à volta, «n/8» ao centro e o estado por baixo
  («6 de 8», «Completa», «Bloqueada» — **sem cadeado**); a mesa escolhida
  com quem lá está por baixo; «Por sentar» e «Para o local» (copiar a
  lista) em molduras.
- **Presentes:** «Já oferecidos» no resumo; «Receber» com o **Envelope —
  em dinheiro ou por transferência** (IBAN, `events.gift_iban`), os
  envelopes recebidos e a morada; a lista numa moldura.
- **Vazio:** a mascote a dormir com o que vai aparecer e a ação; resumos a
  0 com a barra vazia; nada de avisos para o que falta escrever (diz-se no
  valor da linha, p. ex. «Por escrever»).

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
  depois fica parada. O brilho **pulsa só na linha e uns pixéis para dentro**
  (pedido 2026-11-22) — nunca à volta da caixa nem por cima do cartão todo. Amarelo e verde 3 vezes (2 s / 2,4 s), vermelho 4 vezes
  (1,4 s). Nunca a piscar sem parar.
- **Alertas nos cartões de evento** (pedido do Rafael, 2026-11-22, mockup
  «Alerta com ação nos cartões», forma A; sem o sinal «!» na foto desde
  2026-11-22): a linha à volta do cartão (a moldura do §4) fica na cor
  do tom, com o brilho só na linha (para dentro), e por baixo do rodapé
  vem a tarefa **sem pílula nem fundo**: o ponto, a tarefa com o prazo mais perto em 13 negrito («Pagar o sinal ao
  fotógrafo · +1») e o botão preto 36 com a ação — «Pagar» (pagamentos),
  «Ver» (propostas, presente), «Responder» («Diz se vais»), «Fazer» (o
  resto). **Cor pelo prazo de cada coisa**: vermelho a **3 dias ou menos**
  do prazo (ou já passado), amarelo antes disso; sem prazo, conta a data do
  evento; com amarelas e vermelhas ao mesmo tempo, a cor da mais urgente.
  Pagamentos: o sinal conta logo (amarelo); o resto, o pagamento único (sem
  sinal) e a parte do convidado **só aparecem nos 6 dias antes do prazo**
  (amarelo) e ficam vermelhos nos últimos 3. Tocar abre o «Para fazer»
  (organizador: o painel do evento; convidado: a página do evento).
  **Só conta o que está na lista «Para fazer»** (pedido 2026-11-22) —
  organizador: pagamentos com prazo, propostas dos parceiros e pedidos
  para entrar; convidado: responder, escolher/pagar a parte e o presente.
  As **sugestões nunca** fazem alerta nos cartões.
- Convite: uma linha fina (envelope num círculo verde claro, "CONVITE POR
  RESPONDER" 11, frase 15 negrito, data 13, e por baixo «Não vou» com contorno + «Vou» preto, 36), nunca um
  bloco verde cheio.

## 8. Texto e tom

- Português de Portugal. "Taxa de serviço", nunca "comissão".
- Botões com verbos curtos ("Pedir orçamento", "Ver evento").
- Sem funcionalidades inventadas: o design não promete o que a app não faz.
