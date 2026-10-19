# Vídeo motion graphic "À Nossa!" (1280×720): página determinística com
# renderAt(t), capturada imagem a imagem para MP4. Fundo liso, tipografia
# grande, telemóveis a entrar com ressalto e sempre a sair do ecrã.
import os
from screens import FONT_CSS, MOCK_CSS, SCREENS, img, svg, real, photo

HERE = os.path.dirname(os.path.abspath(__file__))
DUR = 48.2

def ph(key, id_):
    return f'<div class="phw" id="{id_}">{SCREENS[key]()}</div>'

def rp(name, id_, overlay=''):
    return f'<div class="phw" id="{id_}">{real(name, overlay)}</div>'

from screens import real_src, status
SWIPE = [('classic','eucalyptus','Clássico · Eucalipto'), ('stickers','pink','Autocolantes · Rosa'), ('mural','blue','Mural · Azul'), ('clothesline','gold','Estendal · Dourado')]
def swipe_phone():
    imgs = ''.join(f'<img src="{real_src(f"v_{l}_{c}")[0]}" style="display:block;width:25%;flex:none" alt="">' for l, c, _ in SWIPE)
    return (f'<div class="phone"><div class="screen" style="background:#fff">{status()}'
            f'<div style="position:relative;overflow:hidden"><div id="vStrip" style="display:flex;width:400%">{imgs}</div>'
            f'<span id="touch" style="position:absolute;left:0;top:0;width:64px;height:64px;border-radius:50%;background:rgba(29,29,27,.18);border:2px solid rgba(255,255,255,.7)"></span></div></div></div>')

SEATS = open(os.path.join(HERE, 'seat_overlay.html')).read()
CHIPS = ''.join(
    f'<span id="mc{i}" style="display:inline-flex;align-items:center;gap:8px;padding:5px 14px 5px 5px;border-radius:99px;'
    f'background:#F2F2EE;font-weight:700;font-size:15px"><span class="m-av" style="width:34px;height:34px;background-size:cover;'
    f'background-position:center;background-image:url(\'{photo(p,120)}\')"></span>{n}</span>'
    for i, (n, p) in enumerate([('Avó Rosa', 'couple_trees'), ('Tio Rui', 'couple_road'), ('Leonor', 'bride')]))

LAYOUTS = [('classic', 'Clássico'), ('stickers', 'Autocolantes'), ('mural', 'Mural'), ('clothesline', 'Estendal')]
COLORS = [('eucalyptus', '#4F6B4A', 'Eucalipto'), ('pink', '#B8476B', 'Rosa'), ('blue', '#3F6E8C', 'Azul'), ('gold', '#7A5C22', 'Dourado')]
VARIANTS = VCAPS = CNAMES = ''
VARIANTS = ''.join(rp(f'v_{l}_{c}', f'pV{i}_{j}') for i, (l, _) in enumerate(LAYOUTS) for j, (c, _, _) in enumerate(COLORS))
VCAPS = ''.join(f'<div class="cap" id="vC{i}" style="width:195px"><b style="font-size:17px">{n}</b></div>' for i, (_, n) in enumerate(LAYOUTS))
DOTS = ''.join(f'<span class="dot" id="dot{j}" style="background:{hexc}"></span>' for j, (_, hexc, _) in enumerate(COLORS))
CNAMES = ''.join(f'<span class="cname" id="cn{j}">{n}</span>' for j, (_, _, n) in enumerate(COLORS))

def side(id_, eye, h, sub, left=90, top=220, size=40):
    return (f'<div class="abs" id="{id_}" style="left:{left}px;top:{top}px;width:470px">'
            f'<div class="eye">{eye}</div><div class="h2" style="margin-top:14px;font-size:{size}px">{h}</div>'
            f'<div class="sub" style="font-size:18px;max-width:400px">{sub}</div></div>')

html = f"""<!doctype html><html lang="pt"><head><meta charset="utf-8"><title>À Nossa! — filme</title>
<style>
{FONT_CSS}
{MOCK_CSS}
* {{ box-sizing: border-box; }}
html, body {{ margin: 0; background: #111; }}
#stage {{ position: relative; width: 1280px; height: 720px; overflow: hidden; background: #F5F5F2; font-family: 'LGC', sans-serif; color: #1D1D1B; }}
.layer {{ position: absolute; inset: 0; }}
.abs {{ position: absolute; will-change: transform, opacity; }}
.phw {{ position: absolute; left: 0; top: 0; transform-origin: 50% 50%; will-change: transform, opacity; }}
.phone {{ box-shadow: 0 50px 90px -40px rgba(29,29,27,.35), 0 18px 40px -20px rgba(29,29,27,.18); }}
.eye {{ font-size: 14px; font-weight: 700; letter-spacing: 2.4px; color: #4F6B4A; }}
.h1 {{ font-weight: 700; font-size: 64px; line-height: 1.04; letter-spacing: -1.6px; }}
.h2 {{ font-weight: 700; font-size: 44px; line-height: 1.08; letter-spacing: -1px; }}
.sub {{ font-size: 20px; color: #6E6E69; line-height: 1.45; margin-top: 16px; }}
.cap {{ position: absolute; left: 0; top: 0; text-align: center; }}
.cap b {{ display: block; font-size: 21px; letter-spacing: -.2px; }}
.cap span {{ display: block; font-size: 15px; color: #6E6E69; margin-top: 3px; }}
.dim {{ color: #4F6B4A; }}
.dot {{ display: inline-block; width: 22px; height: 22px; border-radius: 50%; margin: 0 7px; }}
.cname {{ position: absolute; left: 0; width: 100%; text-align: center; font-size: 15px; font-weight: 700; color: #6E6E69; }}
#flys .m-fly {{ left: 0; top: 0; }}
</style></head><body>
<div id="stage">
  <!-- menu principal -->
  <div class="abs" id="bTxt" style="left:120px;top:236px;width:560px">
    <div class="eye">PARA QUEM ORGANIZA</div>
    <div class="h1" style="margin-top:14px">O teu evento,<br><span class="dim">num só lugar.</span></div>
    <div class="sub" style="max-width:450px">A contagem, a vossa foto e tudo o que falta tratar, logo à entrada.</div>
  </div>
  <div class="phw" id="pB">{swipe_phone()}</div>
  <!-- estilos: um só telemóvel, 4 designs em 4 cores, a deslizar -->
  <div class="abs" id="vTxt" style="left:120px;top:236px;width:560px">
    <div class="eye">ESTILOS DO MENU</div>
    <div class="h1" style="margin-top:14px">Quatro estilos.<br><span class="dim">As tuas cores.</span></div>
    <div style="margin-top:26px;display:flex;align-items:center">{DOTS}<span id="vName" style="margin-left:16px;font-size:18px;font-weight:700;color:#6E6E69"></span></div>
  </div>
  <!-- mesas -->
  <div class="phw" id="pS">{real('lugares', SEATS)}</div>
  <div class="abs" id="sTxt" style="left:640px;top:170px;width:560px">
    <div class="eye">MESAS</div>
    <div class="h1" style="margin-top:14px">Arrasta<br><span class="dim">e senta.</span></div>
    <div class="sub" style="max-width:440px">Desenha a sala, junta famílias e amigos e vê os lugares livres num relance.</div>
  </div>
  <div class="abs" id="sCard" style="left:640px;top:500px;padding:14px 16px;border-radius:22px;background:#fff;box-shadow:0 18px 40px -18px rgba(29,29,27,.25)">
    <div class="eye" style="font-size:12px;margin-bottom:10px">POR SENTAR</div>
    <div style="display:flex;gap:10px">{CHIPS}</div></div>
  <div id="flys"></div>
  <!-- galeria -->
  {rp('casal_galeria','pG1')}{rp('publicacoes','pG2', '<span id="burst" style="position:absolute;left:135px;top:305px;width:96px;height:96px;opacity:0">' + svg('heart',96,'#fff','0').replace('fill="none"','fill="#fff" style="filter:drop-shadow(0 6px 16px rgba(0,0,0,.3))"') + '</span>')}
  {side('gTxt', 'GALERIA', 'As fotos<br><span class="dim">de todos.</span>', 'Os convidados publicam, vocês aprovam. Gostos e comentários, como nas redes.', left=740, size=56)}
  <!-- reservas -->
  {side('dTxt', 'RESERVAS', 'Encontra, conversa<br><span class="dim">e paga o sinal na app.</span>', 'Propostas no chat e pagamento seguro com a Stripe.')}
  {ph('partner_profile','pD1')}{rp('conversa','pD2')}{ph('pay_done','pD3')}
  <!-- parceiros -->
  {side('pTxt', 'PARA QUEM FAZ A FESTA', 'O teu negócio,<br><span class="dim">num só painel.</span>', 'Vendas, pedidos, propostas e levantamentos, sempre à mão.')}
  {rp('painel','pP0')}{rp('pedidos','pP1')}
  <!-- convidados -->
  {side('qTxt', 'PARA QUEM É CONVIDADO', 'Tudo o que precisam,<br><span class="dim">até ao dia.</span>', 'Respondem, veem a mesa e o programa e partilham as fotos.')}
  {rp('convidado_inicio','pQ0')}{rp('tua_mesa','pQ1')}
  <!-- todos à mesma mesa: 2 de cada -->
  <div class="abs" id="eTxt" style="left:0;top:40px;width:1280px;text-align:center">
    <div class="eye">TODOS À MESMA MESA</div>
    <div class="h2" style="margin-top:10px;font-size:40px">Uma app, <span class="dim">três lados da festa.</span></div>
  </div>
  {rp('casamento','pE0')}{rp('lugares','pE1')}{rp('painel','pE2')}{rp('pedidos','pE3')}{rp('convidado_inicio','pE4')}{rp('convidado_galeria','pE5')}
  <div class="cap" id="eC0" style="width:324px"><b>Organizadores</b><span>Planeiam tudo num só lugar</span></div>
  <div class="cap" id="eC1" style="width:324px"><b>Parceiros</b><span>Recebem pedidos e pagamentos</span></div>
  <div class="cap" id="eC2" style="width:324px"><b>Convidados</b><span>Respondem e partilham as fotos</span></div>
  <!-- abertura e fecho (verde) -->
  <div class="layer" id="green" style="background:#4F6B4A">
    <img class="abs" id="gG" src="{img('glass_gold.png')}" style="left:470px;top:176px;width:170px">
    <img class="abs" id="gR" src="{img('glass_rose.png')}" style="left:640px;top:176px;width:170px">
    <div class="abs" id="spark" style="left:610px;top:150px;width:60px;height:60px">{svg('spark',60,'#F2D98D','2.4')}</div>
    <div class="abs" id="word" style="left:0;top:405px;width:1280px;text-align:center;color:#fff;font-weight:700;font-size:96px;line-height:1;letter-spacing:-2px">À Nossa!</div>
    <div class="abs" id="tag" style="left:0;top:521px;width:1280px;text-align:center;color:#DDE5D3;font-size:24px;line-height:1.25">Para todas as festas</div>
    <img class="abs" id="duo" src="{img('duo_clink.png')}" style="left:515px;top:140px;width:250px">
    <div class="abs" id="url" style="left:0;top:541px;width:1280px;text-align:center">
      <span style="display:inline-block;padding:12px 26px;border-radius:99px;background:#fff;color:#4F6B4A;font-weight:700;font-size:19px">rafalvesf.github.io/copo-dagua</span></div>
  </div>
</div>
<script>
const DUR = {DUR};
const $ = id => document.getElementById(id);
const clamp = (x,a=0,b=1) => Math.max(a, Math.min(b, x));
const seg = (t,a,b) => clamp((t-a)/(b-a));
const eo = x => 1 - Math.pow(1-x, 5);
const eio = x => x < .5 ? 16*x*x*x*x*x : 1 - Math.pow(-2*x+2, 5)/2;
const back = x => {{ const c1 = 1.4, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); }};
// telemóvel 390×856, escalado à volta do centro; (x, y) = canto superior esquerdo já escalado
function put(id, x, y, s, vis=true, o=1, rot=0) {{
  const e = $(id);
  const dx = x - 195 * (1 - s), dy = y - 428 * (1 - s);
  e.style.transform = `translate(${{dx}}px,${{dy}}px) rotate(${{rot}}deg) scale(${{s}})`;
  e.style.opacity = o; e.style.visibility = vis && o > .001 ? 'visible' : 'hidden';
}}
function show(id, o, tr='') {{ const e = $(id); e.style.opacity = o; e.style.transform = tr; e.style.visibility = o <= .001 ? 'hidden' : 'visible'; }}
function txt(id, t, a, b) {{
  const i = eo(seg(t, a, a + .8)), o = eio(seg(t, b - .6, b));
  show(id, (t > a - .01 && t < b + .01) ? i * (1 - o) : 0, `translate(0, ${{24 * (1 - i) - 30 * o}}px)`);
}}
// grupo de telemóveis: sobem com ressalto, ficam ligeiramente inclinados, saem por cima
function row(ids, xs, y, s, t, a, b, tilts) {{
  const on = t > a - .2 && t < b + .1;
  const out = eio(seg(t, b - .8, b));
  ids.forEach((id, i) => {{
    const k = back(seg(t, a + .12 * i, a + 1.0 + .12 * i));
    put(id, xs[i], y + 640 * (1 - k) - 820 * out, s, on, 1, tilts[i] * (1 + 1.5 * (1 - k)));
  }});
  return out;
}}
const FLY = [];
for (let i = 0; i < 3; i++) {{
  const f = document.createElement('div'); f.className = 'm-fly';
  const src = document.querySelector('#mc' + i + ' .m-av');
  f.style.backgroundImage = src ? src.style.backgroundImage : '';
  $('flys').appendChild(f); FLY.push(f);
}}
function renderAt(t) {{
  const vis = (a, b) => t > a && t < b;
  // ---------- abertura (0 – 3,8) e fecho (44,6 – fim)
  const F0 = 44.6;
  const inA = t < 3.8, inF = t >= F0;
  const r = inA ? 1 - eio(seg(t, 3.0, 3.8)) : eio(seg(t, F0, F0 + .9));
  const g = $('green');
  g.style.visibility = (inA || inF) ? 'visible' : 'hidden';
  g.style.clipPath = `circle(${{r * 75}}% at 50% 50%)`;
  const ent = eo(seg(t, .2, 1.3));
  const knock = (t > 1.3 && t < 1.7) ? Math.sin(seg(t, 1.3, 1.7) * Math.PI) : 0;
  const lift = eio(seg(t, 2.7, 3.2));
  const aO = inA ? (1 - lift) : 0;
  show('gG', aO * clamp(ent * 1.6), `translate(${{-380 * (1 - ent) + 14 * knock}}px, ${{-30 * lift}}px) rotate(${{-22 * (1 - ent) + 8 + 5 * knock}}deg)`);
  show('gR', aO * clamp(ent * 1.6), `translate(${{380 * (1 - ent) - 14 * knock}}px, ${{-30 * lift}}px) rotate(${{22 * (1 - ent) - 8 - 5 * knock}}deg)`);
  const sp = seg(t, 1.35, 2.0);
  show('spark', inA ? (sp > 0 && sp < 1 ? Math.sin(sp * Math.PI) : 0) : 0, `scale(${{.5 + sp}}) rotate(${{sp * 90}}deg)`);
  const wA = eo(seg(t, 1.5, 2.3)), tA = eo(seg(t, 1.9, 2.6));
  const duo = eo(seg(t, F0 + .5, F0 + 1.4)), wF = eo(seg(t, F0 + .9, F0 + 1.7)), tF = eo(seg(t, F0 + 1.2, F0 + 2.0)), uF = eo(seg(t, F0 + 1.5, F0 + 2.3));
  show('word', inA ? wA * (1 - lift) : wF, `translate(0, ${{inA ? 20 * (1 - wA) - 30 * lift : 20 * (1 - wF) - 36}}px)`);
  show('tag', inA ? tA * (1 - lift) : tF, `translate(0, ${{inA ? 14 * (1 - tA) - 30 * lift : 14 * (1 - tF) - 36}}px)`);
  show('duo', inF ? duo : 0, `translate(0, ${{30 * (1 - duo)}}px) scale(${{.85 + .15 * duo}})`);
  show('url', inF ? uF : 0, `translate(0, ${{12 * (1 - uF)}}px)`);

  // ---------- menu principal (3,6 – 8,4), depois os estilos no mesmo telemóvel (8,4 – 14,6)
  txt('bTxt', t, 4.0, 8.2);
  txt('vTxt', t, 8.6, 14.2);
  const pb = back(seg(t, 3.8, 4.8)), bOut = eio(seg(t, 13.8, 14.6));
  put('pB', 790, 104 + 640 * (1 - pb) - 820 * bOut, .6, vis(3.6, 14.7), 1, 3 + 4 * (1 - pb));
  // três deslizes: cada design entra da direita, como um swipe
  const SW = [9.6, 10.9, 12.2];
  let pos = 0, touchX = -200, touchO = 0;
  SW.forEach(a => {{
    const k = eio(seg(t, a, a + .55));
    pos += k;
    const d = seg(t, a - .25, a + .6);                  // dedo: aparece, arrasta para a esquerda, some
    if (d > 0 && d < 1) {{ touchO = Math.sin(d * Math.PI); touchX = 300 - 240 * eio(d); }}
  }});
  $('vStrip').style.transform = `translateX(${{-25 * pos}}%)`;
  const tc = $('touch');
  tc.style.opacity = touchO; tc.style.transform = `translate(${{touchX}}px, 420px)`;
  const cur = Math.min(3, Math.round(pos));
  const NAMES = ['Clássico · Eucalipto', 'Autocolantes · Rosa', 'Mural · Azul', 'Estendal · Dourado'];
  for (let j = 0; j < 4; j++) {{
    const on = j === cur ? 1 : 0;
    $('dot' + j).style.boxShadow = `0 0 0 3px #F5F5F2, 0 0 0 ${{3 + 2.5 * on}}px rgba(29,29,27,${{.75 * on}})`;
    $('dot' + j).style.transform = `scale(${{1 + .2 * on}})`;
  }}
  $('vName').textContent = NAMES[cur];

  // ---------- mesas (14,4 – 19,8)
  const sOn = vis(14.3, 19.9);
  const sIn = back(seg(t, 14.5, 15.5)), sOut = eio(seg(t, 19.0, 19.8));
  put('pS', 200 - 760 * sOut, 44 + 680 * (1 - sIn), .74, sOn, 1, -2 - 4 * (1 - sIn));
  txt('sTxt', t, 14.9, 19.5);
  const sc = eo(seg(t, 15.4, 16.1));
  show('sCard', sOn ? sc * (1 - eio(seg(t, 18.9, 19.5))) : 0, `translate(0, ${{20 * (1 - sc)}}px)`);
  let landed = 0;
  for (let i = 0; i < 3; i++) {{
    const a = 16.2 + .8 * i, k = seg(t, a, a + .85), f = FLY[i];
    const chip = $('mc' + i), seat = $('mt' + i);
    chip.style.opacity = k > 0 ? .3 : 1;
    if (k >= 1) {{
      landed++;
      const pop = seg(t, a + .85, a + 1.2);
      seat.style.backgroundImage = pop < 1 ? f.style.backgroundImage : '';
      seat.style.backgroundSize = 'cover';
      seat.style.backgroundColor = pop < 1 ? 'transparent' : '#4F6B4A';
      seat.style.transform = `scale(${{1 + .5 * Math.sin(pop * Math.PI)}})`;
    }} else {{ seat.style.backgroundImage = ''; seat.style.backgroundColor = 'transparent'; seat.style.transform = ''; }}
    if (sOn && k > 0 && k < 1) {{
      const s0 = chip.querySelector('.m-av').getBoundingClientRect(), s1 = seat.getBoundingClientRect();
      const e = eio(k), w = s0.width + (s1.width - s0.width) * e;
      const x = s0.left + (s1.left - s0.left) * e, y = s0.top + (s1.top - s0.top) * e - 80 * Math.sin(k * Math.PI);
      f.style.visibility = 'visible'; f.style.width = w + 'px'; f.style.height = w + 'px';
      f.style.transform = `translate(${{x}}px, ${{y}}px)`;
    }} else f.style.visibility = 'hidden';
  }}
  $('mn').textContent = 7 + landed;
  $('mleft').textContent = (3 - landed) + ' por sentar';
  $('mlab').textContent = (3 + landed) + '/8';
  $('mbar').style.width = (70 + 10 * landed) + '%';

  // ---------- galeria (19,6 – 25,0)
  txt('gTxt', t, 20.1, 24.6);
  row(['pG1','pG2'], [130, 410], 104, .6, t, 19.8, 25.0, [-3, 3]);
  const hb = seg(t, 21.8, 22.7);
  const hs = hb < .25 ? eo(hb / .25) * 1.15 : (hb < .7 ? 1 : 1 + (hb - .7));
  show('burst', hb > 0 && hb < 1 ? (hb < .7 ? 1 : 1 - (hb - .7) / .3) : 0, `scale(${{hs}})`);

  // ---------- reservas (24,8 – 30,2)
  const dOn = vis(24.7, 30.3);
  txt('dTxt', t, 25.2, 29.8);
  const k1 = back(seg(t, 24.9, 25.9)), k2 = back(seg(t, 25.1, 26.1)), dOut = eio(seg(t, 29.4, 30.2));
  put('pD1', 590, 104 + 640 * (1 - k1) - 820 * dOut, .6, dOn, 1, -3 * (1 + 1.5 * (1 - k1)));
  const swap = eio(seg(t, 27.3, 27.9));
  put('pD2', 870, 104 + 640 * (1 - k2) - 820 * swap, .6, dOn && swap < 1, 1, 3 * (1 + 1.5 * (1 - k2)));
  put('pD3', 870, 104 + 640 * (1 - swap) - 820 * dOut, .6, dOn && swap > 0, 1, 3);

  // ---------- parceiros (30,0 – 35,0) e convidados (34,8 – 39,8)
  txt('pTxt', t, 30.4, 34.6);
  row(['pP0','pP1'], [590, 870], 104, .6, t, 30.2, 35.0, [-3, 3]);
  txt('qTxt', t, 35.2, 39.4);
  row(['pQ0','pQ1'], [590, 870], 104, .6, t, 35.0, 39.8, [-3, 3]);

  // ---------- todos à mesma mesa (39,6 – 44,8): 2 de cada
  txt('eTxt', t, 39.9, 44.4);
  const EX = [94, 262, 478, 646, 862, 1030];
  const eOut = row(['pE0','pE1','pE2','pE3','pE4','pE5'], EX, 150, .4, t, 39.7, 44.8, [-2, 2, -2, 2, -2, 2]);
  const ec = eo(seg(t, 40.6, 41.3)), eOn = vis(39.5, 44.9);
  [0,1,2].forEach(i => show('eC' + i, eOn ? ec : 0, `translate(${{EX[2*i]}}px, ${{512 + 12 * (1 - ec) - 820 * eOut}}px)`));
}}
window.renderAt = renderAt; window.DUR = DUR;
if (!/render/.test(location.search)) {{
  let t0 = performance.now();
  (function loop(now) {{ renderAt(((now - t0) / 1000) % DUR); requestAnimationFrame(loop); }})(t0);
}} else renderAt(0);
</script></body></html>"""
open(os.path.join(HERE, 'film.html'), 'w').write(html)
print('ok', len(html))
