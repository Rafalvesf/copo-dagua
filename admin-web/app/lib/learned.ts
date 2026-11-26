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
        verdict: "problema",
        found:
          "O motor de tarefas (task_engine_controller.dart) atualiza e cria tarefas com um pedido por linha (em paralelo, mas " +
          "um pedido cada). O mesmo padrão, mais pequeno: marcar conversas como lidas (uma chamada por conversa) e ver as " +
          "permissões de cada evento na página do parceiro (uma a uma, à espera de cada).",
        next: "Juntar num só pedido: upsert com a lista toda nas tarefas; uma função na base de dados para marcar várias conversas e para as permissões de vários eventos.",
      },
      {
        item: "3 · Gargalo numa dependência",
        verdict: "ok",
        found:
          "Ao abrir a app (sem sessão): o maior é a própria app, main.dart.wasm (2,3 MB, 1,2 s), e o motor de desenho do " +
          "Flutter (skwasm, 1,1 s em paralelo) — cerca de metade do tempo até ao primeiro ecrã; nenhum chega aos 90 %. Há " +
          "pedidos repetidos: platform_settings (2×) e track_funnel_event (2×), e carregam-se a letra fina (300, que não se " +
          "usa) e a Roboto de reserva.",
        next: "Ler platform_settings uma só vez (há 5 sítios que a pedem), juntar os eventos do funil, tirar a letra fina do pubspec e medir também com sessão iniciada.",
      },
      {
        item: "4 · Ecrã à espera do servidor",
        verdict: "problema",
        found:
          "Já são imediatos o coração dos favoritos e o «Seguir» (25 nov). Ainda esperam: enviar uma mensagem na conversa " +
          "(só aparece quando o servidor responde) e marcar uma tarefa da checklist como feita.",
        next: "Mostrar a mensagem logo (cinzenta, «a enviar») e trocar pela do servidor quando chegar; o visto da tarefa muda logo e volta atrás se falhar.",
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
      { item: "Entradas a 0,97 e acordeões", verdict: "problema", found: "Ainda não aplicados de forma geral.", next: "Decidir com o Rafael onde vale a pena." },
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
