# Site de apresentação da À Nossa! (artifact HTML autónomo).
import os
from screens import FONT_CSS, MOCK_CSS, SCREENS, img, svg, stk

HERE = os.path.dirname(os.path.abspath(__file__))
APP = 'https://rafalvesf.github.io/copo-dagua/'

def mock(key, s=0.62, rot=0, cls=''):
    w, h = round(390 * s), round(856 * s)
    return (f'<div class="mock {cls}" style="--w:{w}px;--h:{h}px;--s:{s};--r:{rot}deg">'
            f'<div class="mock-in">{SCREENS[key]()}</div></div>')

def feat(icon, i, title, text):
    return (f'<li class="feat">{stk(icon, i, 44)}<div><h3>{title}</h3><p>{text}</p></div></li>')

EVENTS = ['Casamento', 'Batizado', 'Aniversário', 'Comunhão', 'Noivado', 'Renovação de votos',
          'Festa de curso', 'Chá de bebé', 'Evento de empresa']

page = f"""<title>À Nossa!</title>
<meta name="claude:viewport-fit-sides" content="cover">
<meta name="description" content="À Nossa! — o teu evento, num só lugar.">
<style>
{FONT_CSS}
/* Layout: faixas de largura total (verde da marca, branco, areia) com um
   eixo de 1120 px; telemóveis da app como protagonistas visuais. */
:root {{
  --euc: #4F6B4A; --euc-deep: #3E5539; --sage: #DDE5D3; --sand: #F7EACA; --blush: #F3DEE0;
  --gold: #F2D98D; --ink: #171713; --muted: #57534E; --paper: #FFFFFF; --mist: #F2F5EE;
  --display: 'LGC', 'Trebuchet MS', 'Segoe UI', sans-serif;
  --body: 'LGC', 'Trebuchet MS', 'Segoe UI', sans-serif;
  color-scheme: light;
}}
{MOCK_CSS}
* {{ box-sizing: border-box; }}
html {{ scroll-behavior: smooth; }}
body {{ background: var(--paper); color: var(--ink); font-family: var(--body); font-size: 17px; line-height: 1.55;
  -webkit-font-smoothing: antialiased; overflow-x: hidden; }}
body::before {{ content: ""; position: fixed; inset: 0 0 auto; height: env(safe-area-inset-top, 0px); z-index: 30; background: var(--euc); }}
a {{ color: inherit; }}
.wrap {{ max-width: 1120px; margin: 0 auto; padding-left: max(20px, env(safe-area-inset-left, 0px)); padding-right: max(20px, env(safe-area-inset-right, 0px)); }}
h1, h2, h3 {{ font-family: var(--display); font-weight: 700; text-wrap: balance; margin: 0; letter-spacing: -.5px; }}
.eyebrow {{ font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; }}
.btn {{ display: inline-flex; align-items: center; gap: 10px; height: 54px; padding: 0 26px; border-radius: 999px; font-weight: 700;
  font-size: 16px; text-decoration: none; transition: transform .2s ease, box-shadow .2s ease; }}
.btn:hover {{ transform: translateY(-2px); }}
.btn:focus-visible {{ outline: 3px solid var(--gold); outline-offset: 3px; }}
.btn-white {{ background: var(--paper); color: var(--euc); box-shadow: 0 10px 24px rgba(23,23,19,.18); }}
.btn-line {{ border: 1.5px solid rgba(255,255,255,.7); color: var(--paper); }}
.btn-green {{ background: var(--euc); color: var(--paper); box-shadow: 0 10px 24px rgba(79,107,74,.3); }}

/* nav */
.nav {{ position: sticky; top: env(safe-area-inset-top, 0px); z-index: 20; background: var(--euc); color: var(--paper); }}
.nav .wrap {{ display: flex; align-items: center; gap: 24px; height: 68px; }}
.brand {{ display: flex; align-items: center; gap: 10px; font-weight: 700; font-size: 22px; text-decoration: none; }}
.brand img {{ width: 40px; height: auto; }}
.nav nav {{ display: flex; gap: 22px; margin-left: auto; font-size: 15px; }}
.nav nav a {{ text-decoration: none; opacity: .88; }}
.nav nav a:hover {{ opacity: 1; text-decoration: underline; text-underline-offset: 5px; }}
.nav .btn {{ height: 42px; padding: 0 18px; font-size: 14px; }}

/* hero */
.hero {{ background: var(--euc); color: var(--paper); position: relative; overflow: hidden; }}
.hero .wrap {{ display: grid; grid-template-columns: minmax(0, 1fr) minmax(0, 1.05fr); gap: 32px; align-items: center; padding-block: 56px 0; }}
.stage {{ min-width: 0; }}
.hero h1 {{ font-size: clamp(44px, 6.2vw, 80px); line-height: .98; margin-top: 14px; }}
.hero h1 span {{ color: var(--sand); }}
.hero .lead {{ font-size: 20px; color: var(--sage); max-width: 33ch; margin: 22px 0 30px; }}
.hero .ctas {{ display: flex; flex-wrap: wrap; gap: 12px; }}
.hero .eyebrow {{ color: var(--gold); display: inline-flex; align-items: center; gap: 8px; }}
.stage {{ position: relative; height: 600px; }}
.mock {{ width: var(--w); height: var(--h); flex: none; transform: rotate(var(--r)); }}
.mock-in {{ transform: scale(var(--s)); transform-origin: 0 0; width: 390px; height: 856px; }}
.stage .mock {{ position: absolute; bottom: -70px; }}
.stage .m1 {{ left: 0; transform: rotate(-7deg); bottom: -110px; }}
.stage .m2 {{ left: 50%; margin-left: calc(var(--w) / -2); z-index: 2; }}
.stage .m3 {{ right: 0; transform: rotate(7deg); bottom: -110px; }}
.hero .duo {{ position: absolute; z-index: 3; width: 150px; left: 50%; margin-left: -235px; top: 14px; transform: rotate(-8deg); }}
.confetti i {{ position: absolute; width: 10px; height: 16px; border-radius: 3px; opacity: .9; }}

/* event types */
.types {{ background: var(--mist); border-bottom: 1px solid #E3E9DF; }}
.types .wrap {{ display: flex; flex-wrap: wrap; gap: 10px; align-items: center; padding-block: 22px; }}
.types b {{ font-size: 14px; color: var(--muted); margin-right: 6px; }}
.chip {{ padding: 8px 14px; border-radius: 999px; background: var(--paper); font-size: 14px; font-weight: 700; color: var(--euc);
  box-shadow: 0 3px 10px rgba(23,23,19,.06); }}

/* video */
.film {{ padding-block: 88px 40px; }}
.film .head {{ display: flex; flex-wrap: wrap; align-items: end; justify-content: space-between; gap: 16px; margin-bottom: 26px; }}
.film h2 {{ font-size: clamp(32px, 4vw, 48px); }}
.film p {{ color: var(--muted); margin: 0; max-width: 40ch; }}
.player {{ position: relative; border-radius: 28px; overflow: hidden; background: var(--euc); box-shadow: 0 40px 80px -40px rgba(23,23,19,.45);
  aspect-ratio: 16 / 9; max-width: 100%; }}
.player video {{ display: block; width: 100%; height: 100%; object-fit: cover; }}

/* secções */
.sec {{ padding-block: 96px; overflow-x: clip; }}
.hero, .film, .types {{ overflow-x: clip; }}
.sec .grid {{ display: grid; grid-template-columns: minmax(0, .95fr) minmax(0, 1.05fr); gap: 56px; align-items: center; }}
.sec .eyebrow {{ color: var(--euc); }}
.sec h2 {{ font-size: clamp(34px, 4.4vw, 54px); line-height: 1.02; margin: 12px 0 18px; }}
.sec h2 em {{ font-style: normal; color: var(--euc); }}
.sec .intro {{ color: var(--muted); font-size: 18px; max-width: 42ch; margin: 0 0 30px; }}
.feats {{ list-style: none; padding: 0; margin: 0; display: grid; gap: 18px; }}
.feat {{ display: flex; gap: 16px; align-items: flex-start; }}
.feat h3 {{ font-size: 18px; letter-spacing: 0; }}
.feat p {{ margin: 2px 0 0; color: var(--muted); font-size: 15.5px; }}
.row {{ display: flex; gap: 18px; justify-content: center; align-items: flex-end; }}
.row .mock:nth-child(1) {{ transform: rotate(-4deg) translateY(18px); }}
.row .mock:nth-child(3) {{ transform: rotate(4deg) translateY(18px); }}
.sand {{ background: linear-gradient(180deg, #FBF3E4 0%, #FFFFFF 100%); }}
.blush {{ background: linear-gradient(180deg, #F9EDEE 0%, #FFFFFF 100%); }}
.flip .grid > :first-child {{ order: 2; }}
.note {{ display: inline-flex; gap: 8px; align-items: center; margin-top: 26px; padding: 10px 16px; border-radius: 999px;
  background: var(--paper); box-shadow: 0 6px 18px rgba(23,23,19,.07); font-size: 14px; font-weight: 700; color: var(--euc); }}
.methods {{ display: flex; flex-wrap: wrap; gap: 8px; margin-top: 18px; }}
.methods span {{ padding: 6px 12px; border-radius: 10px; background: var(--paper); border: 1px solid #E6E0D2; font-size: 13px; font-weight: 700; }}

/* passos */
.steps {{ background: var(--mist); padding-block: 88px; }}
.steps h2 {{ font-size: clamp(32px, 4vw, 48px); text-align: center; margin-bottom: 40px; }}
.steps ol {{ list-style: none; padding: 0; margin: 0; display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 18px; counter-reset: s; }}
.steps li {{ background: var(--paper); border-radius: 26px; padding: 26px; box-shadow: 0 6px 18px rgba(23,23,19,.07); counter-increment: s; }}
.steps li::before {{ content: counter(s); display: flex; width: 44px; height: 44px; border-radius: 15px; background: var(--euc); color: var(--paper);
  align-items: center; justify-content: center; font-weight: 700; font-size: 20px; transform: rotate(-5deg); margin-bottom: 16px; }}
.steps h3 {{ font-size: 21px; }}
.steps p {{ color: var(--muted); margin: 6px 0 0; font-size: 15.5px; }}

/* final */
.final {{ background: var(--euc); color: var(--paper); text-align: center; position: relative; overflow: hidden; }}
.final .wrap {{ padding-block: 80px 90px; display: flex; flex-direction: column; align-items: center; }}
.final img {{ width: 260px; max-width: 70%; }}
.final h2 {{ font-size: clamp(54px, 8vw, 104px); letter-spacing: -2px; margin-top: 4px; }}
.final p {{ color: var(--sage); font-size: 20px; margin: 6px 0 28px; }}
footer {{ background: var(--euc-deep); color: var(--sage); font-size: 14px; }}
footer .wrap {{ display: flex; flex-wrap: wrap; justify-content: space-between; gap: 10px; padding-block: 22px; }}

@keyframes floaty {{ 0%,100% {{ translate: 0 0; }} 50% {{ translate: 0 -10px; }} }}
@keyframes clink {{ 0%,100% {{ rotate: 0deg; }} 50% {{ rotate: 6deg; }} }}
.hero .duo {{ animation: floaty 4s ease-in-out infinite; }}
.final img {{ animation: clink 2.4s ease-in-out infinite; transform-origin: 50% 90%; }}
.stage .m2 {{ animation: floaty 6s ease-in-out infinite; }}
@media (prefers-reduced-motion: reduce) {{ *, *::before {{ animation: none !important; transition: none !important; }} html {{ scroll-behavior: auto; }} }}

@media (max-width: 900px) {{
  .hero .wrap {{ grid-template-columns: minmax(0, 1fr); padding-block: 40px 0; text-align: left; }}
  .stage {{ height: 430px; max-width: 520px; width: 100%; margin: 0 auto; }}
  .stage .mock {{ --s: .5 !important; width: 195px !important; height: 428px !important; }}
  .stage .m2 {{ margin-left: -97px; }}
  .hero .duo {{ width: 110px; margin-left: -170px; }}
  .sec .grid {{ grid-template-columns: minmax(0, 1fr); gap: 40px; }}
  .flip .grid > :first-child {{ order: 0; }}
  .steps ol {{ grid-template-columns: minmax(0, 1fr); }}
  .nav nav {{ display: none; }}
  .nav .btn {{ margin-left: auto; }}
}}
@media (max-width: 560px) {{
  .row .mock {{ --s: .29 !important; width: 113px !important; height: 248px !important; }}
  .row {{ gap: 6px; }}
  .row.two .mock {{ --s: .4 !important; width: 156px !important; height: 342px !important; }}
  .stage .m1, .stage .m3 {{ display: none; }}
  .hero .duo {{ margin-left: -150px; }}
  .sec, .film {{ padding-block: 64px; }}
}}
</style>

<header class="nav"><div class="wrap">
  <a class="brand" href="#top"><img src="{img('duo_clink.png')}" alt="">À Nossa!</a>
  <nav aria-label="Secções"><a href="#organizadores">Organizadores</a><a href="#parceiros">Parceiros</a><a href="#convidados">Convidados</a><a href="#video">Vídeo</a></nav>
  <a class="btn btn-white" href="{APP}" target="_blank" rel="noopener">Abrir a app</a>
</div></header>

<section class="hero" id="top">
  <div class="confetti" aria-hidden="true">
    <i style="left:6%;top:18%;background:#F2D98D;transform:rotate(24deg)"></i><i style="left:12%;top:70%;background:#F3C9CF;transform:rotate(-30deg)"></i>
    <i style="left:44%;top:12%;background:#A9BC8F;transform:rotate(50deg)"></i><i style="left:52%;top:84%;background:#F2D98D;transform:rotate(-12deg)"></i>
    <i style="left:88%;top:16%;background:#F3C9CF;transform:rotate(18deg)"></i><i style="left:94%;top:58%;background:#E8B44C;transform:rotate(-44deg)"></i>
  </div>
  <div class="wrap">
    <div>
      <span class="eyebrow">{svg('glass', 18, '#F2D98D')} Para todas as festas</span>
      <h1>O teu evento,<br><span>num só lugar.</span></h1>
      <p class="lead">Convidados, orçamento, mesas, parceiros e pagamentos na mesma app. Para quem organiza, para quem trabalha no evento e para quem é convidado.</p>
      <div class="ctas">
        <a class="btn btn-white" href="{APP}" target="_blank" rel="noopener">Abrir a app {svg('down', 18, '#4F6B4A')}</a>
        <a class="btn btn-line" href="#video">Ver o vídeo</a>
      </div>
    </div>
    <div class="stage" aria-label="Ecrãs da app À Nossa!">
      <img class="duo" src="{img('duo_wave.png')}" alt="">
      {mock('guest_home', 0.6, -7, 'm1')}{mock('wedding', 0.66, 0, 'm2')}{mock('partner_home', 0.6, 7, 'm3')}
    </div>
  </div>
</section>

<div class="types"><div class="wrap"><b>Funciona para</b>{''.join(f'<span class="chip">{e}</span>' for e in EVENTS)}</div></div>

<section class="film wrap" id="video">
  <div class="head"><div><span class="eyebrow" style="color:var(--euc)">Vídeo · 48 segundos</span><h2>A app num brinde.</h2></div>
    <p>Do primeiro convite ao sinal pago: vê como organizadores, parceiros e convidados usam a app.</p></div>
  <div class="player"><video src="a-nossa.mp4" poster="poster.jpg" controls muted autoplay loop playsinline preload="metadata" aria-label="Vídeo de apresentação da À Nossa!"></video></div>
</section>

<section class="sec" id="organizadores"><div class="wrap grid">
  <div>
    <span class="eyebrow">Para quem organiza</span>
    <h2>Tudo o que tens de decidir, <em>arrumado.</em></h2>
    <p class="intro">Da lista de convidados ao último pagamento, cada parte do evento tem o seu lugar e as tarefas aparecem quando são precisas.</p>
    <ul class="feats">
      {feat('users', 0, 'Convidados e respostas', 'Envias o convite, eles respondem na app: quem vai, acompanhantes, menus e alergias.')}
      {feat('euro', 1, 'Orçamento sempre em dia', 'Vês quanto ainda tens, o que já pagaste e os pagamentos que aí vêm.')}
      {feat('seat', 2, 'Mesas por arrastar', 'Desenhas a sala com os tipos de mesa do espaço e sentas cada convidado com um gesto.')}
      {feat('tasks', 3, 'Tarefas que se fazem sozinhas', 'A app propõe o próximo passo e risca-o quando já está feito.')}
    </ul>
  </div>
  <div class="row">{mock('guests', 0.44)}{mock('seating', 0.44)}{mock('budget', 0.44)}</div>
</div></section>

<section class="sec sand flip" id="parceiros"><div class="wrap grid">
  <div>
    <span class="eyebrow">Parceiros</span>
    <h2>Encontra, conversa e <em>paga o sinal na app.</em></h2>
    <p class="intro">Espaços, catering, fotografia, flores e música. Pedes orçamento, recebes a proposta no chat e confirmas a reserva sem sair da app.</p>
    <ul class="feats">
      {feat('store', 0, 'Parceiros perto de ti', 'Filtra por categoria, região e preço, e guarda os favoritos.')}
      {feat('chat', 1, 'Propostas no chat', 'Cada proposta mostra o valor, o sinal e o estado do pagamento.')}
      {feat('card', 2, 'Pagamento seguro', 'Processado pela Stripe. A comissão aparece logo no valor, sem surpresas.')}
    </ul>
    <div class="methods"><span>Cartão</span><span>Apple Pay</span><span>Google Pay</span><span>MB WAY</span><span>Multibanco</span></div>
  </div>
  <div class="row">{mock('partners', 0.44)}{mock('partner_profile', 0.44)}{mock('chat', 0.44)}</div>
</div></section>

<section class="sec blush" id="convidados"><div class="wrap grid">
  <div>
    <span class="eyebrow">Convidados</span>
    <h2>Quem é convidado <em>também brinda.</em></h2>
    <p class="intro">Os convidados entram com o código do evento e têm tudo no telemóvel, até ao dia.</p>
    <ul class="feats">
      {feat('check', 0, 'Responde em segundos', 'Diz se vai, junta acompanhantes com o telemóvel deles e escolhe o menu.')}
      {feat('table', 1, 'A tua mesa e o programa', 'Sabe onde fica sentado, a que horas é a cerimónia e como chegar.')}
      {feat('photo', 2, 'Galeria partilhada', 'As fotos de todos num só sítio, aprovadas pelos anfitriões.')}
      {feat('gift', 3, 'Presentes', 'A lista dos anfitriões ou o IBAN para contribuir, com um toque para copiar.')}
    </ul>
    <span class="note">{svg('store', 18, '#4F6B4A')} Os parceiros têm painel, pedidos, calendário e levantamentos.</span>
  </div>
  <div class="row">{mock('guest_home', 0.44)}{mock('gallery', 0.44)}{mock('partner_home', 0.44)}</div>
</div></section>

<section class="steps"><div class="wrap">
  <h2>Do primeiro convite ao brinde</h2>
  <ol>
    <li><h3>Cria o evento</h3><p>Escolhe o tipo de festa, a data e a região. A app prepara o plano e o orçamento.</p></li>
    <li><h3>Convida e contrata</h3><p>Envia o código aos convidados e pede propostas aos parceiros que te interessam.</p></li>
    <li><h3>Brinda</h3><p>No dia, os convidados veem o programa e a mesa. Tu só tens de aproveitar.</p></li>
  </ol>
</div></section>

<section class="final"><div class="wrap">
  <img src="{img('duo_clink.png')}" alt="Duas taças a brindar">
  <h2>À Nossa!</h2>
  <p>Para todas as festas.</p>
  <a class="btn btn-white" href="{APP}" target="_blank" rel="noopener">Abrir a app</a>
</div></section>

<footer><div class="wrap"><span>© 2026 À Nossa!</span><span>Feito em Portugal · Funciona no telemóvel e no computador</span></div></footer>
"""
open(os.path.join(HERE, 'a-nossa-site.html'), 'w').write(page)
print('ok', len(page))
