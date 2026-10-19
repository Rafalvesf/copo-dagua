import sys, os
sys.path.insert(0, '../site'); os.chdir('../site')
import screens
from screens import FONT_CSS, MOCK_CSS, svg, status, img
os.chdir('../mascot')
import mascot as M

def phone(inner, bg='#fff'):
    return f'<div class="phone"><div class="screen" style="background:{bg}">{inner}</div></div>'

NAV = ('<div class="nv"><span>' + svg('home',24,'#57534E') + '</span><span class="on">' + svg('heart',20,'#fff') +
       '</span><span>' + svg('chat',24,'#57534E') + '</span><span>' + svg('users',24,'#57534E') + '</span></div>')

splash = phone(f'''<div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center">
  {M.duo('clink', 300)}<div style="font-size:52px;font-weight:700;letter-spacing:-1px;margin-top:10px">À Nossa!</div>
  <div style="color:#DDE5D3;font-size:16px;margin-top:6px">Para todas as festas</div></div>''', '#4F6B4A')
empty = phone(status() + f'''<div style="text-align:center;padding:0 26px">
  <div style="font-size:22px;font-weight:700;margin:14px 0 40px">Mensagens</div>
  {M.duo('sleep', 270)}
  <div style="font-size:21px;font-weight:700;margin-top:18px">Ainda sem conversas</div>
  <div style="font-size:14px;color:#6E6E69;line-height:1.5;margin-top:8px">Quando pedirem um orçamento a um parceiro, a conversa e as propostas aparecem aqui.</div>
  <div class="btn">Explorar parceiros</div></div>{NAV}''')
paid = phone(f'''<div style="height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;color:#fff;text-align:center;padding:0 26px">
  {M.duo('celebrate', 290)}<div style="font-size:36px;font-weight:700;margin-top:14px">Sinal pago!</div>
  <div style="font-size:15px;margin-top:6px;color:#DDE5D3">2 805 € para Quinta do Lago Azul</div>
  <div class="btn" style="background:#fff;color:#4F6B4A;position:absolute;left:26px;right:26px;bottom:44px;margin:0">Ver reservas</div></div>''', '#4F6B4A')
invite = phone(status() + f'''<div style="text-align:center;padding:60px 26px 0">
  {M.duo('wave', 270)}
  <div style="font-size:24px;font-weight:700;margin-top:18px">Foste convidado!</div>
  <div style="font-size:14px;color:#6E6E69;line-height:1.5;margin-top:8px">Sofia &amp; Tiago contam contigo a 21 de maio. Instala a app e responde em segundos.</div>
  <div class="btn">Responder ao convite</div></div>''')
oops = phone(status() + f'''<div style="text-align:center;padding:80px 26px 0">
  {M.duo('sad', 260)}
  <div style="font-size:22px;font-weight:700;margin-top:18px">Link inválido</div>
  <div style="font-size:14px;color:#6E6E69;line-height:1.5;margin-top:8px">Este link de convite já não é válido. Pede um novo a quem te convidou.</div>
  <div class="btn">Ir para o início</div></div>''')

POSES = [('clink','Brinde','Abertura e momentos de festa'),('wave','Olá!','Convites e boas-vindas'),('celebrate','Festa','Pagamentos e tarefas concluídas'),
         ('sleep','A dormir','Ecrãs sem nada ainda'),('sad','Ups','Erros e links inválidos')]
poses = ''.join(f'<figure class="pose"><div class="pv">{M.duo(k, 260)}</div><figcaption><b>{t}</b><span>{d}</span></figcaption></figure>' for k,t,d in POSES)

html = f'''<title>Novos copos À Nossa!</title>
<meta name="claude:viewport-fit-sides" content="cover">
<style>
{FONT_CSS}
{MOCK_CSS}
/* Layout: faixa verde com o brinde, depois as poses em grelha e os ecrãs da app numa fila que desliza. */
:root {{ --bg:#F5F5F0; --fg:#1F2A23; --muted:#6B6E66; --card:#FFFFFF; --line:#E3E6DC; --brand:#4F6B4A; --brand-ink:#FFFFFF;
  --font: 'LGC', 'Trebuchet MS', sans-serif; }}
@media (prefers-color-scheme: dark) {{ :root:not([data-theme="light"]) {{ --bg:#141A16; --fg:#EEF1EA; --muted:#A6AD9F; --card:#1E2620; --line:#2C362E; --brand:#4F6B4A; --brand-ink:#FFFFFF; color-scheme: dark; }} }}
:root[data-theme="dark"] {{ --bg:#141A16; --fg:#EEF1EA; --muted:#A6AD9F; --card:#1E2620; --line:#2C362E; --brand:#4F6B4A; --brand-ink:#FFFFFF; color-scheme: dark; }}
* {{ box-sizing: border-box; }}
body {{ background: var(--bg); color: var(--fg); font-family: var(--font); padding-left: max(16px, env(safe-area-inset-left, 0px)); padding-right: max(16px, env(safe-area-inset-right, 0px)); }}
.wrap {{ max-width: 1120px; margin: 0 auto; padding-block: 28px 64px; display: grid; gap: 56px; }}
.hero {{ background: var(--brand); color: var(--brand-ink); border-radius: 32px; padding: 36px 28px; display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; align-items: center; }}
.hero h1 {{ font-size: clamp(34px, 5vw, 56px); line-height: 1.02; letter-spacing: -1.5px; margin: 8px 0 12px; text-wrap: balance; }}
.hero p {{ color: #DDE5D3; font-size: 17px; line-height: 1.5; max-width: 46ch; margin: 0; }}
.eye {{ font-size: 13px; font-weight: 700; letter-spacing: 2.2px; text-transform: uppercase; }}
.hero .eye {{ color: #F2D98D; }}
.hero .art svg {{ width: 100%; height: auto; }}
.cmp {{ display: flex; gap: 14px; margin-top: 22px; flex-wrap: wrap; }}
.cmp div {{ background: rgba(255,255,255,.1); border-radius: 18px; padding: 10px 14px 12px; text-align: center; font-size: 13px; color: #DDE5D3; }}
.cmp img, .cmp svg {{ height: 86px; width: auto; display: block; margin: 0 auto 6px; }}
h2 {{ font-size: clamp(26px, 3.4vw, 36px); letter-spacing: -.8px; margin: 6px 0 4px; text-wrap: balance; }}
.lead {{ color: var(--muted); font-size: 16px; margin: 0 0 20px; max-width: 60ch; line-height: 1.5; }}
.sec .eye {{ color: var(--brand); }}
.poses {{ display: grid; grid-template-columns: repeat(auto-fit, minmax(190px, 1fr)); gap: 14px; }}
.pose {{ margin: 0; background: var(--card); border: 1px solid var(--line); border-radius: 22px; padding: 14px 14px 16px; display: grid; gap: 8px; }}
.pose .pv {{ background: #F2F4EE; border-radius: 16px; padding: 8px; }}
.pose .pv svg {{ width: 100%; height: auto; display: block; }}
.pose b {{ display: block; font-size: 17px; }} .pose span {{ font-size: 13px; color: var(--muted); }}
.sec {{ min-width: 0; }}
.phones {{ min-width: 0; display: flex; gap: 22px; overflow-x: auto; padding: 6px 4px 22px; scroll-snap-type: x mandatory; }}
.phones .ph {{ flex: none; width: 273px; height: 599px; scroll-snap-align: start; }}
.phones .ph .phone {{ transform: scale(.7); transform-origin: 0 0; }}
.phones figure {{ margin: 0; flex: none; display: grid; gap: 10px; }}
.phones figcaption {{ font-size: 14px; color: var(--muted); text-align: center; }}
.btn {{ height: 50px; border-radius: 99px; background: #4F6B4A; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: 700; font-size: 15px; margin-top: 22px; }}
.nv {{ position: absolute; left: 14px; right: 14px; bottom: 16px; height: 70px; border-radius: 35px; background: #fff; box-shadow: 0 -6px 20px rgba(63,74,48,.16);
  display: grid; grid-template-columns: repeat(4,1fr); align-items: center; justify-items: center; }}
.nv .on {{ width: 42px; height: 42px; border-radius: 50%; background: #4F6B4A; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 0 2px #fff, 0 0 0 4px #4F6B4A; }}
@media (max-width: 760px) {{ .hero {{ grid-template-columns: 1fr; }} }}
</style>
<div class="wrap">
  <section class="hero">
    <div>
      <div class="eye">Mascote · proposta</div>
      <h1>Os novos copos da À Nossa!</h1>
      <p>Dois copos com o verde da app, caras maiores, olhos com brilho, bolhas e traço mais limpo. Continuam fofos, ficam mais expressivos e funcionam bem em pequeno.</p>
      <div class="cmp"><div><img src="{img('duo_clink.png')}" alt="Copos atuais">Atuais</div><div>{M.duo('clink', 150)}Novos</div></div>
    </div>
    <div class="art">{M.duo('clink', 520)}</div>
  </section>
  <section class="sec">
    <div class="eye">Poses</div>
    <h2>Cinco momentos, um par</h2>
    <p class="lead">Cada pose tem um sítio certo na app. Um é a tulipa em verde eucalipto; o outro é o copo redondo em verde sálvia.</p>
    <div class="poses">{poses}</div>
  </section>
  <section class="sec">
    <div class="eye">Na app</div>
    <h2>Como ficam nos ecrãs</h2>
    <p class="lead">Abertura, ecrã vazio, pagamento concluído, convite e erro. Desliza para ver todos.</p>
    <div class="phones">
      <figure><div class="ph">{splash}</div><figcaption>Abertura</figcaption></figure>
      <figure><div class="ph">{empty}</div><figcaption>Mensagens sem conversas</figcaption></figure>
      <figure><div class="ph">{paid}</div><figcaption>Sinal pago</figcaption></figure>
      <figure><div class="ph">{invite}</div><figcaption>Convite</figcaption></figure>
      <figure><div class="ph">{oops}</div><figcaption>Link inválido</figcaption></figure>
    </div>
  </section>
</div>
'''
open('copos.html','w').write(html)
print(len(html))
