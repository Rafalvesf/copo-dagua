// Achievements Learned (pedido do Rafael, 2026-11-25): tudo o que o Rafael
// aprende de novo fica aqui, com o que verificámos na À Nossa! e o que
// falta fazer — para, se voltar a acontecer, saber onde está. Mais recente
// primeiro. Página: /learned.

export type Verdict = "ok" | "problema" | "nao-se-aplica";

export type LearnedCheck = {
  item: string;
  verdict: Verdict;
  /** O que encontrámos ao testar a app. */
  found: string;
  /** O que falta fazer (se houver). */
  next?: string;
};

export type Learned = {
  id: string;
  date: string; // AAAA-MM-DD
  title: string;
  /** De onde veio (vídeo, artigo, conversa…). */
  source: string;
  /** A ideia, dita de forma simples. */
  lesson: string;
  checks: LearnedCheck[];
};

export const LEARNED: Learned[] = [
  {
    id: "friccao-onboarding-pagar",
    date: "2026-11-27",
    title: "Menos fricção no onboarding e no pagar (referências do Dribbble)",
    source: "Dribbble: Travel, Language e AI onboarding; Tasktugas; Learning OS; Parking Space (enviados pelo Rafael)",
    lesson:
      "Quem desiste, desiste antes de ver valor. Os bons onboardings mostram uma ideia por ecrã (título grande, cor forte, " +
      "um só botão), deixam entrar com Apple/Google e pedem a conta só quando há algo a guardar. Pagar é um só ecrã: o preço " +
      "em grande, escolhas em pílulas e «Desliza para pagar».",
    checks: [
      { item: "Organizador até ao 1.º evento", verdict: "problema", found: "~13 ecrãs: tipo de conta, interesses, «De onde és?», como entrar, registo com 6 campos, verificar email, 6 passos do evento.", next: "Proposta no canvas (OnbOrgIntro, OnbOrgEvento): evento primeiro, conta no fim, 4 ecrãs." },
      { item: "Parceiro até publicar", verdict: "problema", found: "13 passos obrigatórios (logótipo, fotos mínimas, descrição 50+, NIF, horário…).", next: "Proposta (OnbParceiro): 3 passos e completar depois com «Perfil a 50 %»; NIF/IBAN só antes do 1.º sinal." },
      { item: "Reservar e pagar o sinal", verdict: "problema", found: "~9 ecrãs entre escolher o evento e pagar.", next: "Proposta (PagarUmPopup): um só popup com «Desliza para pagar»." },
      { item: "Programa", verdict: "problema", found: "Lista simples.", next: "Proposta (ProgramaRoadmap): semana em fila, cartões de cor e «Agora»." },
    ],
  },
  {
    id: "graphify",
    date: "2026-11-27",
    title: "Graphify: um mapa do código para gastar menos tokens",
    source: "github.com/Graphify-Labs/graphify (pedido do Rafael)",
    lesson:
      "O graphify lê o código no computador (sem IA, sem enviar nada) e faz um grafo de ficheiros, classes e ligações em " +
      "graphify-out/. Em vez de abrir muitos ficheiros, o Claude pergunta ao grafo onde está uma coisa e o que liga a quê.",
    checks: [
      { item: "Instalação", verdict: "ok", found: "graphifyy 0.9.121 (+ SQL) com pip; skill /graphify no Claude Code. Grafo da À Nossa!: 13 982 nós, 24 856 ligações, 562 grupos, em 30 s. graphify-out/ fica fora do git." },
      { item: "Dart / Flutter", verdict: "problema", found: "Encontra onde cada classe está definida e de quem herda, mas não quem a usa (p. ex. que ecrãs montam um PhotoCard).", next: "Para «quem usa X» continuar a usar a pesquisa no código; atualizar com «graphify update .» depois de mudanças grandes." },
      { item: "Perguntas em texto livre", verdict: "problema", found: "Pesquisas como «lista de conversas» dão sobretudo documentos; funciona melhor com nomes exatos (explain \"PhotoCard\", path \"A\" \"B\")." },
    ],
  },
  {
    id: "fotos-memoria-iphone",
    date: "2026-11-26",
    title: "Fotos enormes fecham a página no iPhone (o «cartão verde»)",
    source: "Sentry (ligado a 26 nov) e o pedido «a app está extremamente lenta»",
    lesson:
      "Uma foto de 12 MP ocupa ~48 MB de memória para ser mostrada, mesmo pequena. Com várias no ecrã, o Safari do iPhone " +
      "fecha a página e ela volta a abrir do zero (o ecrã verde de arranque). As fotos têm de ser reduzidas ANTES de subir; " +
      "o Sentry diz a verdade — medir primeiro, mexer depois.",
    checks: [
      { item: "Página fechada sem aviso", verdict: "ok", found: "COPO-DAGUA-K: duas vezes em 14 s na página Parceiros, com a app à frente (iPhone, versão JavaScript).", next: "Confirmar no Sentry que não volta depois das fotos reduzidas." },
      { item: "Fotos guardadas", verdict: "ok", found: "36 fotos de 1–4,3 MB (87 MB) reduzidas para 1600 px / 512 px nos avatares e logótipos (~15 MB); originais em Documentos/a-nossa-fotos-originais-2026-11-26." },
      { item: "Fotos novas", verdict: "ok", found: "Os 12 sítios que escolhiam fotos sem limite passam a reduzir antes de subir (PR #698)." },
      { item: "Erro repetido das reservas do parceiro", verdict: "ok", found: "PGRST201 (37×): profiles ambíguo desde a booking_arrivals → profiles!bookings_couple_id_fkey (PR #698)." },
      { item: "Arranque", verdict: "ok", found: "No iPhone deixa de pré-carregar os 60 ecrãs; nos outros começa aos 10 s com pausas. Resumos dos cartões de eventos guardados 5 min." },
      { item: "Temporizadores e tempo real", verdict: "ok", found: "12 temporizadores e 5 canais: todos param ao sair do ecrã." },
      { item: "Pedidos por cartão na página Eventos", verdict: "problema", found: "Cada cartão ainda faz os seus pedidos.", next: "Juntar numa função na base de dados (precisa de migração e autorização)." },
    ],
  },
  {
    id: "desempenho-5-pontos",
    date: "2026-11-25",
    title: "Desempenho: 5 razões para uma app ficar lenta",
    source: "Vídeo partilhado pelo Rafael",
    lesson:
      "Uma app fica lenta por cinco razões comuns: dados que viajam sem compressão, escritas na base de dados uma a uma, " +
      "uma dependência que ocupa quase todo o tempo, ecrãs que esperam pelo servidor antes de mudar e um servidor que monta " +
      "o HTML de novo para cada visitante. Para achar o gargalo, mede o tempo de cada pedido de rede: se um ocupa 90 %, é esse.",
    checks: [
      {
        item: "1 · Dados sem compressão",
        verdict: "ok",
        found:
          "Tudo vai comprimido (gzip): a app no GitHub Pages (main.dart.wasm 2,3 MB já comprimido) e a API do Supabase " +
          "(949 B em vez de 2217 B). O browser e a app pedem gzip sozinhos.",
        next: "O GitHub Pages guarda em cache só 10 minutos e não faz brotli — só melhora com outro alojamento (Cloudflare, Vercel).",
      },
      {
        item: "2 · Escritas uma a uma",
        verdict: "ok",
        found:
          "O motor de tarefas (task_engine_controller.dart) atualiza e cria tarefas com um pedido por linha (em paralelo, mas " +
          "um pedido cada). O mesmo padrão, mais pequeno: marcar conversas como lidas (uma chamada por conversa) e ver as " +
          "permissões de cada evento na página do parceiro (uma a uma, à espera de cada).",
        next: "Resolvido a 26 nov: o motor de tarefas junta as escritas (um pedido por tipo, a lista de tarefas novas num só insert); conversas lidas e permissões em paralelo; reservas e pedidos de todos os eventos numa só consulta.",
      },
      {
        item: "3 · Gargalo numa dependência",
        verdict: "ok",
        found:
          "Ao abrir a app (sem sessão): o maior é a própria app, main.dart.wasm (2,3 MB, 1,2 s), e o motor de desenho do " +
          "Flutter (skwasm, 1,1 s em paralelo) — cerca de metade do tempo até ao primeiro ecrã; nenhum chega aos 90 %. Há " +
          "pedidos repetidos: platform_settings (2×) e track_funnel_event (2×), e carregam-se a letra fina (300, que não se " +
          "usa) e a Roboto de reserva.",
        next: "Feito a 26 nov: platform_settings pedida uma só vez (platformSettingsRow), o funil não repete o mesmo passo em 5 s e a letra fina saiu. Falta medir com sessão iniciada.",
      },
      {
        item: "4 · Ecrã à espera do servidor",
        verdict: "ok",
        found:
          "Já são imediatos o coração dos favoritos e o «Seguir» (25 nov). Ainda esperam: enviar uma mensagem na conversa " +
          "(só aparece quando o servidor responde) e marcar uma tarefa da checklist como feita.",
        next: "Resolvido a 26 nov: a mensagem aparece logo e é trocada pela do servidor; o visto da checklist muda logo e volta atrás se falhar.",
      },
      {
        item: "Extra · App a recarregar sozinha (logo e fundo verde)",
        verdict: "ok",
        found:
          "Na versão WebAssembly a app não sabia que versão corria e usava a do index.html, que o telemóvel guarda até 10 min: " +
          "depois de cada publicação recarregava, abria outra vez a versão antiga e voltava a recarregar.",
        next: "Corrigido a 26 nov: recarrega com endereço novo (?r=) para buscar o index.html atual, no máximo 3 vezes em 2 min, " +
          "e cada recarregamento (ou fecho sem aviso, p.ex. por falta de memória no iPhone) vai para o Sentry com o motivo.",
      },
      {
        item: "5 · HTML montado para cada visitante",
        verdict: "nao-se-aplica",
        found:
          "A app é um ficheiro estático no GitHub Pages — não há servidor a montar HTML. Só o Admin (Next.js) gera as " +
          "páginas no servidor, e é usado só pela equipa.",
      },
    ],
  },
  {
    id: "regras-animacao",
    date: "2026-11-25",
    title: "Regras de animação",
    source: "Skill colada pelo Rafael (.claude/skills/animacoes/SKILL.md)",
    lesson:
      "Entradas a partir de 0,97 (nunca de 0); botões a 0,97 ao carregar; campo errado abana; passos deslizam para o lado " +
      "para onde se vai; acordeões animam a altura; mexer só com transform; sem transições ao mudar de tema; só a primeira " +
      "dica espera; ao largar um gesto, uma mola com a velocidade do dedo; carrosséis resistem nas pontas.",
    checks: [
      { item: "Botões a 0,97", verdict: "ok", found: "Em toda a app: PressScale nos botões do Material e SnappyTap nos da app (PR #689)." },
      { item: "Cartão que cresce até à página", verdict: "ok", found: "PhotoCard → ExpandTransition; ao voltar encolhe para o mesmo sítio (PR #690)." },
      { item: "Passos a deslizar", verdict: "ok", found: "StepSlide no onboarding, no do parceiro, no assistente do convidado e no popup de reservar (PR #690)." },
      { item: "Palavra-passe errada abana", verdict: "ok", found: "Shake + linha vermelha no Entrar (PR #690)." },
      { item: "Molas e carrosséis", verdict: "ok", found: "Popups seguem o dedo e voltam com mola; carrosséis com BouncingScrollPhysics (PR #690)." },
      { item: "Entradas a 0,97 e acordeões", verdict: "ok", found: "EnterScale nos avisos e no «vazio» das molduras; SmoothSize no «Ler mais», nos «Ver todos» e no «O que pode fazer» (26 nov). Demonstrações no canvas, prancheta «Animações»." },
      { item: "Tema e dicas ao pairar", verdict: "nao-se-aplica", found: "A app não tem tema escuro nem dicas de rato." },
    ],
  },
  {
    id: "20-tecnicas-ux",
    date: "2026-11-25",
    title: "20 técnicas de UX que fazem uma app parecer rápida",
    source: "Imagem e vídeo partilhados pelo Rafael",
    lesson:
      "Esqueletos, atualizações otimistas, avisos com Desfazer, mostrar o que está guardado enquanto atualiza, pré-carregar, " +
      "desfocado enquanto a foto carrega, transições entre ecrãs, folhas que se fecham a puxar, números tabulares, cantos " +
      "contínuos, chaves de idempotência… Algumas (menu de comandos, atalhos, triângulo da Amazon) são para computador.",
    checks: [
      { item: "Esqueletos, transições, áreas de toque, margens seguras", verdict: "ok", found: "Já existiam." },
      { item: "Otimista, Desfazer, cache ao navegar, números tabulares, idempotência", verdict: "ok", found: "Feitos a 25 nov (PR #688, deploy do create-payment-intent)." },
      { item: "Desfocado enquanto a foto carrega (BlurHash)", verdict: "problema", found: "As transformações de imagem do Supabase não estão ligadas (FeatureNotEnabled).", next: "Ligar no Supabase (pago) ou guardar o desfocado de cada foto ao carregar (migração)." },
      { item: "Cantos contínuos", verdict: "problema", found: "Mockup no canvas («Cantos contínuos»).", next: "À espera da decisão do Rafael." },
      { item: "Voltar preditivo (Android)", verdict: "nao-se-aplica", found: "O Rafael pediu para não fazer." },
    ],
  },
];
