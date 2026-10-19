# Site da À Nossa! com scroll animado: um telemóvel fixo que troca de ecrã
# e muda de lugar (centro, esquerda, centro, direita) enquanto se faz scroll.
import os, json
from screens import FONT_CSS, img, real_src

HERE = os.path.dirname(os.path.abspath(__file__))
APP = 'https://rafalvesf.github.io/copo-dagua/'

# (passo, ecrã, posição do telemóvel)
SHOTS = [
    (0, 'home', 'C'),
    (1, None, 'L'),
    (2, 'v_classic_eucalyptus', 'C'), (2.7, 'v_stickers_pink', 'C'),
    (3.4, 'v_mural_blue', 'C'), (4.1, 'v_clothesline_gold', 'C'),
    (5, 'convidados', 'R'),
    (6, 'orcamento', 'C'),
    (7, 'lugares', 'L'),
    (8, 'parceiros', 'C'),
    (9, 'perfil_parceiro', 'R'),
    (10, 'conversa', 'C'),
    (11, 'publicacoes', 'L'),
    (12, 'convidado_inicio', 'C'),
    (13, 'tua_mesa', 'R'),
    (14, 'painel', 'C'),
    (15, 'pedidos', 'L'),
    (16.2, 'home', 'C'),
]
END = 17.6

# (início, fim, posição, eyebrow, título, texto)
TEXTS = [
    (1, 1, 'L', 'Organizadores', 'O teu evento,<br><span>num só lugar.</span>',
     'O menu principal junta convidados, orçamento, mesas, parceiros e galeria.'),
    (2, 4.1, 'C', 'Estilos', 'Quatro estilos.<br><span>As tuas cores.</span>',
     'Escolhe o visual do menu e a cor que combina com a festa.<div class="sty"><b id="styName">Clássico</b><span id="styDots"></span></div>'),
    (5, 5, 'R', 'Convidados', 'Quem vai,<br><span>num relance.</span>',
     'Envias o convite e eles respondem na app: acompanhantes, menus e alergias.'),
    (6, 6, 'C', 'Orçamento', 'Cada euro<br><span>no sítio certo.</span>',
     'Vês quanto ainda tens, o que já pagaste e os pagamentos que aí vêm.'),
    (7, 7, 'L', 'Mesas', 'Arrasta<br><span>e senta.</span>',
     'Mesas redondas, quadradas ou retangulares, com o nome que quiseres. Desbloqueias mais à medida que precisas.'),
    (8, 8, 'C', 'Parceiros', 'Quem faz a festa,<br><span>perto de ti.</span>',
     'Espaços, catering, fotografia, flores e música, com filtros por categoria.'),
    (9, 9, 'R', 'Perfil do parceiro', 'Tudo antes<br><span>de decidir.</span>',
     'Fotos, pacotes, avaliações e a disponibilidade na tua data.'),
    (10, 10, 'C', 'Reservas', 'Proposta no chat.<br><span>Sinal na app.</span>',
     'Pedes orçamento, recebes a proposta e confirmas a reserva com pagamento seguro.'),
    (11, 11, 'L', 'Galeria', 'As fotos<br><span>de todos.</span>',
     'Os convidados publicam, vocês aprovam. Gostos e comentários, como nas redes.'),
    (12, 12, 'C', 'Convidados', 'Quem é convidado<br><span>também brinda.</span>',
     'Entram com o código do evento e têm tudo no telemóvel: programa, mesa e presentes.'),
    (13, 13, 'R', 'A tua mesa', 'Sabes onde<br><span>te sentas.</span>',
     'Cada convidado vê a mesa e quem está ao lado, antes de chegar.'),
    (14, 14, 'C', 'Para quem faz a festa', 'O teu negócio,<br><span>num só painel.</span>',
     'Vendas, pedidos, calendário e levantamentos, sempre à mão.'),
    (15, 15, 'L', 'Pedidos', 'Responde<br><span>com uma proposta.</span>',
     'Cada pedido vira proposta no chat, e o sinal entra direto na tua conta.'),
]

CHAPTERS = [('Organizadores', 0.6, 7.5), ('Parceiros', 7.5, 10.5), ('Galeria', 10.5, 11.5),
            ('Convidados', 11.5, 13.5), ('Profissionais', 13.5, 15.6)]

BG = [(0, '#4F6B4A'), (0.9, '#F2F5EE'), (2, '#E9F0E5'), (2.7, '#F8E6EC'), (3.4, '#E4EEF5'), (4.1, '#F6EEDA'),
      (5, '#F2F5EE'), (7, '#F2F5EE'), (8, '#FBF3E2'), (10, '#FBF3E2'), (11, '#F4F1EC'), (12, '#FBEFF0'),
      (13, '#FBEFF0'), (14, '#EEF2F6'), (15, '#EEF2F6'), (16.2, '#FFFFFF')]

STYLES = [('Clássico', 'Eucalipto', '#4F6B4A'), ('Autocolantes', 'Rosa', '#B8476B'),
          ('Mural', 'Azul', '#3F6E8C'), ('Estendal', 'Dourado', '#7A5C22')]

def layer(name, i):
    src, top = real_src(name)
    return (f'<div class="layer" id="L{i}" style="background:{top}"><div class="st"><span>9:41</span><i></i></div>'
            f'<img src="{src}" alt=""></div>')

def phone(inner, id_, cls=''):
    return f'<div class="phone {cls}" id="{id_}"><div class="screen">{inner}<b class="island"></b></div></div>'

LAYERS = [(st, n) for st, n, _ in SHOTS if n]
layers = ''.join(layer(n, i) for i, (_, n) in enumerate(LAYERS))
texts = ''.join(
    f'<div class="txt pos-{p}" id="T{i}"><div class="ta"><div class="eye">{e}</div><h2>{h}</h2></div>'
    f'<div class="tb"><p>{b}</p></div></div>' for i, (_, _, p, e, h, b) in enumerate((a, b_, p, e, h.replace('<br>', ' <br>'), b) for a, b_, p, e, h, b in TEXTS))
chapters = ''.join(f'<li id="C{i}">{n}</li>' for i, (n, _, _) in enumerate(CHAPTERS))
dots = ''.join(f'<i style="background:{c}" title="{cn}"></i>' for _, cn, c in STYLES)

DATA = json.dumps(dict(shots=[[s, p] for s, _, p in SHOTS], layers=[s for s, _ in LAYERS], texts=[[a, b] for a, b, *_ in TEXTS],
                       chapters=[[a, b] for _, a, b in CHAPTERS], bg=BG, end=END,
                       styles=[[n, cn] for n, cn, _ in STYLES]))

page = f"""<title>À Nossa!</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="À Nossa! — o teu evento, num só lugar.">
<style>
{FONT_CSS}
/* Um só visual, claro e da marca (verde eucalipto). O fundo muda por capítulo. */
:root {{
  --euc: #4F6B4A; --ink: #171713; --muted: #5C5A55; --paper: #FFFFFF; --gold: #F2D98D;
  --font: 'LGC', 'Trebuchet MS', 'Segoe UI', sans-serif;
  color-scheme: light;
}}
* {{ box-sizing: border-box; }}
body {{ margin: 0; background: #F2F5EE; color: var(--ink); font-family: var(--font); -webkit-font-smoothing: antialiased; overflow-x: hidden; }}
a {{ color: inherit; }}
h1, h2 {{ margin: 0; font-weight: 700; letter-spacing: -1px; text-wrap: balance; }}
.btn {{ display: inline-flex; align-items: center; height: 52px; padding: 0 26px; border-radius: 99px; font-weight: 700; font-size: 16px;
  text-decoration: none; transition: transform .2s ease; }}
.btn:hover {{ transform: translateY(-2px); }}
.btn:focus-visible {{ outline: 3px solid var(--gold); outline-offset: 3px; }}

/* barra de topo */
.top {{ position: fixed; z-index: 30; top: env(safe-area-inset-top, 0px); left: 0; right: 0; display: flex; align-items: center; gap: 12px;
  padding: 16px max(20px, env(safe-area-inset-right, 0px)) 0 max(20px, env(safe-area-inset-left, 0px)); color: #fff; transition: color .3s; pointer-events: none; }}
.top > * {{ pointer-events: auto; }}
.top .brand {{ display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 21px; text-decoration: none; }}
.top .brand img {{ width: 38px; }}
.top .btn {{ margin-left: auto; height: 40px; padding: 0 18px; font-size: 14px; background: #fff; color: var(--euc); box-shadow: 0 8px 20px rgba(0,0,0,.12); }}
.top.ink {{ color: var(--ink); }}
.top.ink .btn {{ background: var(--euc); color: #fff; }}

/* história em scroll */
.story {{ position: relative; height: calc({END + 1} * 100vh); }}
.pin {{ position: sticky; top: 0; height: 100vh; overflow: hidden; }}
.pin {{ --pw: min(calc(76vh / 2.2), 330px); }}
.stage {{ position: absolute; inset: 0; }}
.phone {{ position: absolute; left: 50%; top: 50%; width: var(--pw); height: calc(var(--pw) * 2.2); margin: calc(var(--pw) * -1.1) 0 0 calc(var(--pw) * -.5);
  border-radius: calc(var(--pw) * .16); background: #121212; padding: calc(var(--pw) * .03);
  box-shadow: 0 50px 90px -40px rgba(23,23,19,.55), 0 0 0 1.5px #2b2b2b inset; will-change: transform; }}
.screen {{ position: relative; width: 100%; height: 100%; border-radius: calc(var(--pw) * .13); overflow: hidden; background: #fff; }}
.island {{ position: absolute; z-index: 50; left: 50%; top: calc(var(--pw) * .025); width: calc(var(--pw) * .3); height: calc(var(--pw) * .085);
  margin-left: calc(var(--pw) * -.15); border-radius: 99px; background: #121212; }}
.layer {{ position: absolute; inset: 0; will-change: transform; }}
.layer img {{ position: absolute; left: 0; top: calc(var(--pw) * .1); width: 100%; display: block; }}
.layer .st {{ position: absolute; left: 0; right: 0; top: 0; height: calc(var(--pw) * .1); display: flex; align-items: center; justify-content: space-between;
  padding: calc(var(--pw) * .02) calc(var(--pw) * .1) 0; font-size: calc(var(--pw) * .042); font-weight: 700; color: #171713; }}
.layer .st i {{ width: calc(var(--pw) * .07); height: calc(var(--pw) * .034); border: 1.5px solid currentColor; border-radius: 4px; opacity: .8; }}
.side {{ z-index: 0; }}
#ph {{ z-index: 2; }}

/* textos */
.txt {{ position: absolute; inset: 0; pointer-events: none; opacity: 0; }}
.eye {{ font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: var(--euc); margin-bottom: 14px; }}
.txt h2 {{ font-size: clamp(34px, 4.4vw, 60px); line-height: 1.02; }}
.txt h2 span, .fin h2 span {{ color: var(--euc); }}
.txt p {{ margin: 0; font-size: clamp(16px, 1.35vw, 19px); line-height: 1.55; color: var(--muted); max-width: 400px; }}
.txt .ta, .txt .tb {{ position: absolute; top: 50%; transform: translateY(-50%); }}
.pos-L .ta, .pos-L .tb {{ left: calc(50% + var(--pw) * .5 + 6vw); width: min(420px, 36vw); }}
.pos-R .ta, .pos-R .tb {{ left: max(6vw, 24px); width: min(420px, 36vw); }}
.pos-L .ta, .pos-R .ta {{ transform: translateY(calc(-100% - 6px)); }}
.pos-L .tb, .pos-R .tb {{ transform: translateY(18px); }}
.pos-C .ta {{ right: calc(50% + var(--pw) * .5 + 5vw); width: min(380px, 30vw); text-align: right; }}
.pos-C .tb {{ left: calc(50% + var(--pw) * .5 + 5vw); width: min(340px, 26vw); }}
.sty {{ display: flex; align-items: center; gap: 12px; margin-top: 18px; color: var(--ink); font-size: 15px; }}
.sty b {{ font-size: 18px; }}
#styDots {{ display: inline-flex; gap: 8px; }}
#styDots i {{ width: 18px; height: 18px; border-radius: 50%; box-shadow: 0 0 0 0 #fff; transition: box-shadow .25s, transform .25s; }}
#styDots i.on {{ box-shadow: 0 0 0 3px #fff, 0 0 0 5px currentColor; transform: scale(1.08); }}

/* abertura e fecho */
.hero {{ position: absolute; inset: 0; display: flex; flex-direction: column; align-items: center; padding-top: 15vh; color: #fff; text-align: center; }}
.hero img {{ width: min(190px, 40vw); }}
.hero h1 {{ font-size: clamp(56px, 10vw, 128px); line-height: .95; margin-top: 6px; letter-spacing: -3px; }}
.hero p {{ font-size: clamp(17px, 1.8vw, 22px); margin: 14px 0 0; opacity: .9; }}
.cue {{ position: absolute; left: 50%; bottom: 28px; transform: translateX(-50%); color: #fff; font-size: 13px; letter-spacing: 2px; text-transform: uppercase; opacity: .8; }}
.cue::after {{ content: ""; display: block; width: 2px; height: 28px; margin: 10px auto 0; background: currentColor; animation: cue 1.6s ease-in-out infinite; transform-origin: top; }}
@keyframes cue {{ 0%, 100% {{ transform: scaleY(.3); }} 50% {{ transform: scaleY(1); }} }}
.fin {{ position: absolute; left: 0; right: 0; top: 8vh; text-align: center; opacity: 0; padding: 0 20px; }}
.fin h2 {{ font-size: clamp(36px, 5vw, 68px); }}
.fin p {{ margin: 12px 0 0; color: var(--muted); font-size: 18px; }}
.chap {{ position: absolute; left: max(24px, 3vw); bottom: 32px; display: flex; gap: 18px; margin: 0; padding: 0; list-style: none; font-size: 13px;
  font-weight: 700; color: rgba(23,23,19,.35); opacity: 0; }}
.chap li {{ transition: color .3s; }}
.chap li.on {{ color: var(--ink); }}
.chap li.on::before {{ content: ""; display: inline-block; width: 7px; height: 7px; border-radius: 50%; background: var(--euc); margin-right: 7px; vertical-align: 1px; }}

/* secções normais */
.band {{ padding-block: 96px; padding-left: max(20px, env(safe-area-inset-left, 0px)); padding-right: max(20px, env(safe-area-inset-right, 0px)); }}
.inner {{ max-width: 1040px; margin: 0 auto; }}
.vid {{ background: #fff; }}
.vid h2 {{ font-size: clamp(30px, 4vw, 48px); }}
.vid p {{ color: var(--muted); font-size: 18px; margin: 10px 0 30px; }}
.vid video {{ display: block; width: 100%; max-width: 100%; aspect-ratio: 16 / 9; border-radius: 26px; background: #111; box-shadow: 0 40px 80px -40px rgba(23,23,19,.45); }}
.cta {{ background: var(--euc); color: #fff; text-align: center; }}
.cta img {{ width: min(230px, 56vw); }}
.cta h2 {{ font-size: clamp(54px, 9vw, 110px); letter-spacing: -3px; margin-top: 8px; }}
.cta p {{ font-size: 20px; opacity: .9; margin: 6px 0 28px; }}
.cta .btn {{ background: #fff; color: var(--euc); }}
footer {{ background: #3E5539; color: rgba(255,255,255,.75); font-size: 13px; padding: 18px max(20px, env(safe-area-inset-right, 0px)) 18px max(20px, env(safe-area-inset-left, 0px));
  display: flex; flex-wrap: wrap; gap: 8px 24px; justify-content: space-between; }}

/* telemóvel: o mockup fica ao centro e o texto em baixo */
@media (max-width: 820px) {{
  .pin {{ --pw: min(calc(56vh / 2.2), 62vw); }}
  .phone {{ top: 40%; }}
  .txt .ta, .txt .tb {{ position: static; transform: none !important; width: auto !important; text-align: left !important; }}
  .txt {{ inset: auto 16px 22px 16px; padding: 18px 20px; border-radius: 22px; background: rgba(255,255,255,.92); box-shadow: 0 18px 40px -20px rgba(23,23,19,.3);
    -webkit-backdrop-filter: blur(10px); backdrop-filter: blur(10px); }}
  .txt h2 {{ font-size: 26px; }}
  .txt h2 br {{ display: none; }}
  .eye {{ margin-bottom: 6px; font-size: 11px; }}
  .txt p {{ font-size: 15px; margin-top: 6px; }}
  .chap {{ display: none; }}
  .hero {{ padding-top: 13vh; }}
  .fin {{ top: 7vh; }}
}}
</style>

<header class="top" id="top">
  <a class="brand" href="#"><img src="{img('glass_gold.png')}" alt="">À Nossa!</a>
  <a class="btn" href="{APP}" target="_blank" rel="noopener">Abrir a app</a>
</header>

<main>
<section class="story" id="story" aria-label="A app À Nossa!, ecrã a ecrã">
  <div class="pin" id="pin">
    <div class="hero" id="hero">
      <img src="{img('duo_clink.png')}" alt="Duas taças a brindar">
      <h1>À Nossa!</h1>
      <p>O teu evento, num só lugar.</p>
    </div>
    <div class="cue" id="cue">Faz scroll</div>
    <div class="fin" id="fin"><h2>Todos à <span>mesma mesa.</span></h2>
      <p>Organizadores, parceiros e convidados, na mesma app.</p></div>
    {texts}
    <ul class="chap" id="chap">{chapters}</ul>
    <div class="stage" id="stage">
      {phone(layer('painel', 'sa'), 'sideA', 'side')}
      {phone(layer('convidado_inicio', 'sb'), 'sideB', 'side')}
      {phone(layers, 'ph')}
    </div>
  </div>
</section>

<section class="band vid" id="video">
  <div class="inner">
    <h2>A app num brinde.</h2>
    <p>48 segundos, do primeiro convite ao sinal pago.</p>
    <video src="a-nossa.mp4" poster="poster.jpg" controls playsinline preload="none"></video>
  </div>
</section>

<section class="band cta">
  <img src="{img('duo_clink.png')}" alt="">
  <h2>À Nossa!</h2>
  <p>Para todas as festas.</p>
  <a class="btn" href="{APP}" target="_blank" rel="noopener">Abrir a app</a>
</section>
</main>
<footer><span>© 2026 À Nossa!</span><span>Feito em Portugal · Funciona no telemóvel e no computador</span></footer>

<script>
const D = {DATA};
const $ = id => document.getElementById(id);
const ss = (a, b, x) => {{ const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); }};
const story = $('story'), top_ = $('top');
document.getElementById('styDots').innerHTML = {json.dumps(dots)};
const dotEls = [...document.querySelectorAll('#styDots i')];
const hex = c => [1, 3, 5].map(i => parseInt(c.slice(i, i + 2), 16));
function bgAt(p) {{
  const k = D.bg; if (p <= k[0][0]) return k[0][1];
  for (let i = 0; i < k.length - 1; i++) {{
    const [a, ca] = k[i], [b, cb] = k[i + 1];
    if (p <= b) {{ const t = ss(b - .65, b - .35, p), A = hex(ca), B = hex(cb);
      return `rgb(${{A.map((v, j) => Math.round(v + (B[j] - v) * t)).join(',')}})`; }}
  }}
  return k[k.length - 1][1];
}}
const POS = {{ L: -1, C: 0, R: 1 }};
function frame() {{
  const vh = innerHeight, vw = innerWidth, wide = vw > 820;
  const p = Math.max(0, (scrollY - story.offsetTop) / vh);
  document.body.style.background = bgAt(p);
  top_.classList.toggle('ink', p > .55);
  // abertura
  const h = ss(.05, .55, p);
  $('hero').style.opacity = 1 - h; $('hero').style.transform = `translateY(${{-60 * h}}px) scale(${{1 - .08 * h}})`;
  $('cue').style.opacity = .8 * (1 - ss(0, .2, p));
  // telemóvel: entra por baixo e muda de lugar (esquerda, centro, direita)
  const S = D.shots; let x = POS[S[0][1]];
  for (let i = 1; i < S.length; i++) x += (POS[S[i][1]] - POS[S[i - 1][1]]) * ss(S[i][0] - .65, S[i][0] - .35, p);
  const shift = x * (wide ? Math.min(vw * .22, 330) : vw * .15);
  const rise = 1 - ss(0, 1, p);
  const fin = ss(15.6, 16.4, p);
  const tilt = -x * 6 * (1 - fin);
  $('ph').style.transform = `translate(${{shift}}px, ${{rise * vh * (wide ? .62 : .5) + fin * vh * (wide ? .13 : .1)}}px) rotate(${{rise * -8 + tilt * .35}}deg) scale(${{1 - .14 * fin}})`;
  // ecrãs: empurrados da direita, como na app
  const LY = D.layers;
  LY.forEach((s, i) => {{
    const enter = i ? ss(s - .65, s - .35, p) : 1;
    const leave = i < LY.length - 1 ? ss(LY[i + 1] - .65, LY[i + 1] - .35, p) : 0;
    const el = $('L' + i);
    el.style.transform = `translateX(${{(1 - enter) * 100 - leave * 30}}%)`;
    el.style.visibility = enter > 0 && leave < 1 ? 'visible' : 'hidden';
    el.style.filter = leave > 0 ? `brightness(${{1 - .25 * leave}})` : '';
  }});
  // fecho: dois telemóveis abrem-se dos lados
  const spread = (wide ? 1.02 : .58) * $('ph').offsetWidth;
  [['sideA', -1], ['sideB', 1]].forEach(([id, d]) => {{
    const e = $(id);
    e.style.opacity = fin;
    e.style.transform = `translate(${{d * spread * fin}}px, ${{vh * (wide ? .16 : .12) * fin}}px) rotate(${{d * 7 * fin}}deg) scale(.8)`;
  }});
  $('fin').style.opacity = ss(15.9, 16.4, p);
  $('fin').style.transform = `translateY(${{20 * (1 - ss(15.9, 16.4, p))}}px)`;
  // textos
  D.texts.forEach(([a, b], i) => {{
    const inn = ss(a - .5, a - .2, p), out = ss(b + .25, b + .55, p), el = $('T' + i);
    el.style.opacity = inn * (1 - out);
    el.querySelectorAll('.ta, .tb').forEach((q, j) => q.style.translate = `0 ${{(1 - inn) * (30 + j * 14) - out * 30}}px`);
  }});
  // estilos: nome e cor
  const si = Math.max(0, Math.min(3, Math.round((p - 2) / .7)));
  $('styName').textContent = D.styles[si][0] + ' · ' + D.styles[si][1];
  dotEls.forEach((d, j) => {{ d.classList.toggle('on', j === si); d.style.color = d.style.background; }});
  // capítulos
  $('chap').style.opacity = ss(.6, 1, p) * (1 - ss(15.5, 15.9, p));
  D.chapters.forEach(([a, b], i) => $('C' + i).classList.toggle('on', p >= a && p < b));
}}
let req = 0;
const tick = () => {{ if (!req) req = requestAnimationFrame(() => {{ req = 0; frame(); }}); }};
addEventListener('scroll', tick, {{ passive: true }});
addEventListener('resize', tick);
frame();
</script>
"""

open(os.path.join(HERE, 'a-nossa-scroll.html'), 'w').write(page)
print('ok', len(page))
