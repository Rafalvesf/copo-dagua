# Mockups da app Tchin Tchin em HTML/CSS (390 px de largura), usados no
# site e no vídeo. Reproduzem os ecrãs redesenhados (Menu · Casamento).
import base64, os

HERE = os.path.dirname(os.path.abspath(__file__))

def b64(name):
    with open(os.path.join(HERE, 'assets', name), 'rb') as f:
        return base64.b64encode(f.read()).decode()

def img(name):
    return f"data:image/png;base64,{b64(name)}"

PHOTOS = os.path.join(HERE, 'photos')
_pc = {}
def photo(name, w=560):
    """Foto (Unsplash) redimensionada e embutida; gradiente se faltar."""
    key = (name, w)
    if key in _pc: return _pc[key]
    p = os.path.join(PHOTOS, name + '.jpg')
    if not os.path.exists(p):
        _pc[key] = None; return None
    from PIL import Image
    import io
    im = Image.open(p).convert('RGB')
    if im.width > w: im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    buf = io.BytesIO(); im.save(buf, 'JPEG', quality=74, optimize=True, progressive=True)
    _pc[key] = 'data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode()
    return _pc[key]

def bg(name, w=560, fallback='linear-gradient(135deg,#C8D6BE,#8FA57F)', pos='center'):
    u = photo(name, w)
    return f"background:url('{u}') {pos}/cover no-repeat, {fallback}" if u else f"background:{fallback}"

FONT_CSS = f"""
@font-face {{ font-family: 'LGC'; src: url(data:font/ttf;base64,{b64('LouisGeorgeCafe-Regular.ttf')}) format('truetype'); font-weight: 400; font-display: block; }}
@font-face {{ font-family: 'LGC'; src: url(data:font/ttf;base64,{b64('LouisGeorgeCafe-Bold.ttf')}) format('truetype'); font-weight: 700; font-display: block; }}
"""

# Ícones (traço) — desenhados à mão, mesmo estilo dos autocolantes da app.
P = {
  'users': '<path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM2 21v-1a6 6 0 0 1 12 0v1M16 3.5a4 4 0 0 1 0 7M22 21v-1a6 6 0 0 0-4-5.6"/>',
  'euro': '<path d="M17 6a7 7 0 1 0 0 12M4 10h9M4 14h9"/>',
  'seat': '<path d="M6 19v-6h12v6M5 13h14M8 13V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7"/>',
  'check': '<path d="M4 12l5 5L20 6"/>',
  'cal': '<rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  'heart': '<path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/>',
  'chat': '<path d="M4 5h16v11H9l-5 4z"/>',
  'store': '<path d="M4 9l1.5-5h13L20 9M4 9h16v11H4zM9 20v-6h6v6"/>',
  'search': '<circle cx="11" cy="11" r="6.5"/><path d="M16 16l4.5 4.5"/>',
  'home': '<path d="M4 11l8-7 8 7v9H4z"/>',
  'gift': '<rect x="3" y="9" width="18" height="12" rx="2"/><path d="M12 9v12M3 13h18M12 9s-4-5-6-3 2 3 6 3zM12 9s4-5 6-3-2 3-6 3z"/>',
  'photo': '<rect x="3" y="5" width="18" height="14" rx="3"/><circle cx="9" cy="10" r="2"/><path d="M21 16l-5-5-8 8"/>',
  'clock': '<circle cx="12" cy="12" r="8.5"/><path d="M12 7v5l3 2"/>',
  'table': '<circle cx="12" cy="12" r="5"/><circle cx="12" cy="3.5" r="1.5"/><circle cx="12" cy="20.5" r="1.5"/><circle cx="3.5" cy="12" r="1.5"/><circle cx="20.5" cy="12" r="1.5"/>',
  'tasks': '<path d="M9 6h11M9 12h11M9 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2"/>',
  'star': '<path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z"/>',
  'card': '<rect x="3" y="6" width="18" height="13" rx="3"/><path d="M3 10h18M7 15h4"/>',
  'down': '<path d="M12 4v14M6 12l6 6 6-6"/>',
  'pin': '<path d="M12 21s-6-5.5-6-11a6 6 0 0 1 12 0c0 5.5-6 11-6 11z"/><circle cx="12" cy="10" r="2.2"/>',
  'spark': '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5L18 18M6 18l2.5-2.5M15.5 8.5L18 6"/>',
  'lock': '<rect x="5" y="10" width="14" height="10" rx="2.5"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  'plus': '<path d="M12 5v14M5 12h14"/>',
  'share': '<path d="M12 15V4M8 8l4-4 4 4M5 13v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6"/>',
  'glass': '<path d="M7 3h10l-1 7a4 4 0 0 1-8 0zM12 14v6M8 20h8"/>',
}

def svg(name, size=20, color='currentColor', sw='1.8'):
    return (f'<svg width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="{color}" '
            f'stroke-width="{sw}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">{P[name]}</svg>')

def stk(name, i=0, size=40):
    rot = [-5, 4, -3, 6][i % 4]
    return (f'<span class="m-stk" style="width:{size}px;height:{size}px;border-radius:{size*0.35:.0f}px;'
            f'transform:rotate({rot}deg)">{svg(name, int(size*0.55), "#4F6B4A")}</span>')

MOCK_CSS = """
.phone { position: relative; width: 390px; height: 856px; border-radius: 54px; background: #171713;
  padding: 12px; box-sizing: border-box; box-shadow: 0 40px 80px -30px rgba(23,23,19,.45), 0 10px 30px rgba(23,23,19,.18); flex: none; }
.phone::before { content: ""; position: absolute; top: 22px; left: 50%; width: 104px; height: 30px; margin-left: -52px;
  background: #171713; border-radius: 20px; z-index: 5; }
.screen { position: relative; width: 100%; height: 100%; border-radius: 43px; overflow: hidden; background: #fff;
  font-family: 'LGC', 'Trebuchet MS', sans-serif; color: #171713; text-align: left; }
.screen.sub { background: linear-gradient(180deg, #F2F5EE 0%, #FFFFFF 38%); }
.m-status { height: 50px; display: flex; align-items: center; justify-content: space-between; padding: 6px 30px 0;
  font-size: 15px; font-weight: 700; }
.m-status i { display: inline-block; width: 26px; height: 12px; border-radius: 4px; border: 1.5px solid #171713; position: relative; }
.m-status i::after { content: ""; position: absolute; inset: 1.5px 5px 1.5px 1.5px; background: #171713; border-radius: 2px; }
.m-body { padding: 8px 22px 0; }
.m-title { text-align: center; font-size: 21px; font-weight: 700; margin: 6px 0 14px; }
.m-hero { position: relative; border-radius: 26px; background: #4F6B4A; color: #fff; padding: 18px; overflow: hidden;
  box-shadow: 0 10px 26px rgba(23,23,19,.14); }
.m-hero .lab { font-size: 11px; font-weight: 700; letter-spacing: 1px; }
.m-hero .val { font-size: 36px; font-weight: 700; line-height: 1.1; margin-top: 2px; }
.m-hero .val small { font-size: 13px; font-weight: 400; margin-left: 6px; }
.m-hero .doodle { position: absolute; color: rgba(255,255,255,.22); }
.m-pills { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 12px; }
.m-pill { padding: 4px 10px; border-radius: 99px; font-size: 11px; font-weight: 700; background: rgba(255,255,255,.2); }
.m-pill.s { background: #fff; color: #4F6B4A; }
.m-bar { height: 9px; border-radius: 99px; background: rgba(255,255,255,.28); margin-top: 12px; overflow: hidden; }
.m-bar b { display: block; height: 100%; border-radius: 99px; background: #fff; }
.m-stk { display: inline-flex; align-items: center; justify-content: center; background: #fff; flex: none;
  box-shadow: 0 3px 0 rgba(23,23,19,.08), 0 4px 12px rgba(23,23,19,.10); }
.m-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 11px; margin-top: 13px; }
.m-tile { height: 104px; border-radius: 20px; padding: 13px 14px; box-sizing: border-box; display: flex; flex-direction: column;
  justify-content: space-between; box-shadow: 0 6px 18px rgba(23,23,19,.07); position: relative; }
.m-tile b { font-size: 14px; display: block; }
.m-tile span { font-size: 11px; color: #57534E; }
.m-tile .badge { position: absolute; top: 11px; right: 11px; min-width: 20px; height: 20px; border-radius: 99px; background: #4F6B4A;
  color: #fff; font-size: 10px; font-weight: 700; display: flex; align-items: center; justify-content: center; padding: 0 5px; box-sizing: border-box; }
.t0 { background: #DCE4D8; } .t1 { background: #F3EBDD; }
.m-sec { display: flex; align-items: baseline; justify-content: space-between; margin: 18px 0 10px; }
.m-sec b { font-size: 16px; } .m-sec span { font-size: 12px; font-weight: 700; color: #4F6B4A; }
.m-card { display: flex; align-items: center; gap: 11px; padding: 12px; border-radius: 20px; background: #fff;
  box-shadow: 0 6px 18px rgba(23,23,19,.07), 0 1px 3px rgba(23,23,19,.05); margin-bottom: 9px; }
.m-card .tx { flex: 1; min-width: 0; } .m-card .tx b { display: block; font-size: 13.5px; }
.m-card .tx span { display: block; font-size: 11px; color: #57534E; }
.m-av { width: 38px; height: 38px; border-radius: 50%; background: #fff; border: 2px solid #fff; display: flex; align-items: center;
  justify-content: center; font-size: 12px; font-weight: 700; color: #4F6B4A; flex: none; box-sizing: border-box;
  box-shadow: 0 3px 0 rgba(23,23,19,.08), 0 4px 12px rgba(23,23,19,.10); }
.m-chip { flex: none; padding: 3px 9px; border-radius: 99px; font-size: 10px; font-weight: 700; }
.c-g { background: #DDE5D3; color: #4F6B4A; } .c-s { background: #4F6B4A; color: #fff; }
.c-a { background: #FCEFD6; color: #7A5000; } .c-r { background: #F7E3DC; color: #A3412E; }
.m-nav { position: absolute; left: 14px; right: 14px; bottom: 16px; height: 62px; border-radius: 26px; background: #fff;
  box-shadow: 0 -6px 20px rgba(63,74,48,.16); display: grid; grid-template-columns: repeat(4, 1fr); align-items: center; justify-items: center; color: #57534E; }
.m-nav .on { width: 42px; height: 42px; border-radius: 50%; background: #4F6B4A; color: #fff; display: flex; align-items: center; justify-content: center;
  box-shadow: 0 0 0 2px #fff, 0 0 0 4px #4F6B4A; }
.m-pay { display: flex; align-items: center; gap: 10px; padding: 11px; border-radius: 18px; background: #F6E3DF; margin-bottom: 8px; }
.m-date { width: 36px; height: 38px; border-radius: 10px; background: #fff; display: flex; flex-direction: column; align-items: center;
  justify-content: center; transform: rotate(-4deg); box-shadow: 0 3px 0 rgba(23,23,19,.08); flex: none; }
.m-date small { font-size: 8px; font-weight: 700; color: #A3412E; } .m-date b { font-size: 14px; line-height: 1; }
.m-search { display: flex; align-items: center; gap: 9px; height: 44px; border-radius: 99px; background: #fff; padding: 0 16px;
  box-shadow: 0 6px 18px rgba(23,23,19,.07); color: #57534E; font-size: 13px; }
.m-chips { display: flex; gap: 7px; margin: 12px 0; }
.m-chips span { padding: 7px 12px; border-radius: 99px; background: #fff; font-size: 11.5px; font-weight: 700; color: #57534E;
  box-shadow: 0 3px 10px rgba(23,23,19,.06); white-space: nowrap; }
.m-chips span.on { background: #4F6B4A; color: #fff; }
.m-pcard { border-radius: 22px; overflow: hidden; background: #fff; box-shadow: 0 8px 22px rgba(23,23,19,.09); margin-bottom: 12px; }
.m-pcard .ph { height: 128px; position: relative; }
.m-pcard .meta { padding: 11px 13px 13px; display: flex; justify-content: space-between; align-items: flex-end; }
.m-pcard .meta b { display: block; font-size: 15px; } .m-pcard .meta span { font-size: 11px; color: #57534E; }
.m-pcard .price { font-size: 12px; font-weight: 700; color: #4F6B4A; text-align: right; }
.m-bub { max-width: 76%; padding: 10px 13px; border-radius: 18px; font-size: 13px; line-height: 1.35; margin-bottom: 8px; }
.m-bub.in { background: #F2F0EB; border-bottom-left-radius: 6px; }
.m-bub.out { background: #4F6B4A; color: #fff; margin-left: auto; border-bottom-right-radius: 6px; }
.m-prop { border-radius: 20px; background: #fff; box-shadow: 0 8px 22px rgba(23,23,19,.10); padding: 14px; margin: 6px 0 10px; }
.m-prop .row { display: flex; justify-content: space-between; font-size: 12px; color: #57534E; margin-top: 6px; }
.m-prop .row b { color: #171713; }
.m-prop .btns { display: grid; grid-template-columns: 1fr 1.3fr; gap: 8px; margin-top: 12px; }
.m-prop .btns span { height: 38px; border-radius: 99px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: 700; }
.m-cd { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin-top: 12px; }
.m-cd div { text-align: center; } .m-cd b { display: flex; height: 40px; border-radius: 13px; background: #fff; color: #4F6B4A;
  align-items: center; justify-content: center; font-size: 17px; }
.m-cd span { font-size: 9.5px; font-weight: 700; letter-spacing: .6px; }
.m-done { position: absolute; inset: 0; background: #4F6B4A; color: #fff; display: flex; flex-direction: column; align-items: center; padding: 0 26px; text-align: center; }
.m-ok { width: 96px; height: 96px; border-radius: 30px; background: #fff; color: #4F6B4A; display: flex; align-items: center; justify-content: center;
  transform: rotate(-4deg); box-shadow: 0 14px 30px rgba(23,23,19,.25); margin-top: 180px; }
.m-table { position: relative; height: 300px; border-radius: 22px; background: #fff radial-gradient(#E3E9DF 1px, transparent 1px);
  background-size: 16px 16px; box-shadow: 0 6px 18px rgba(23,23,19,.07); margin-top: 12px; }
.m-rt { position: absolute; border-radius: 50%; background: #DDE5D3; border: 1.6px solid #4F6B4A; display: flex; align-items: center; justify-content: center;
  color: #4F6B4A; font-weight: 700; font-size: 13px; box-sizing: border-box; }
.m-seat { position: absolute; width: 18px; height: 18px; border-radius: 50%; background: #fff; border: 1.5px solid #4F6B4A; box-sizing: border-box; }
.m-seat.f { background: #4F6B4A; }
"""

def status(color='#171713'):
    return f'<div class="m-status" style="color:{color}"><span>9:41</span><i style="border-color:{color}"></i></div>'

def nav(icons, on=0):
    cells = ''.join(f'<span class="on">{svg(n, 21, "#fff")}</span>' if i == on else svg(n, 25, '#57534E') for i, n in enumerate(icons))
    return f'<div class="m-nav">{cells}</div>'

def doodles(a, b, c):
    return (f'<span class="doodle" style="right:16px;top:14px;transform:rotate(14deg)">{svg(a, 26, "currentColor")}</span>'
            f'<span class="doodle" style="right:64px;bottom:16px;transform:rotate(-12deg)">{svg(b, 21, "currentColor")}</span>'
            f'<span class="doodle" style="right:140px;top:10px;transform:rotate(8deg)">{svg(c, 15, "currentColor")}</span>')

def phone(inner, cls=''):
    return f'<div class="phone"><div class="screen {cls}">{inner}</div></div>'

ORG_NAV = ['home', 'store', 'chat', 'photo']

EXTRA_CSS = """
.m-av.ph { background-size: cover; background-position: center; }
.m-cover { position: relative; height: 150px; border-radius: 26px; overflow: hidden; box-shadow: 0 10px 26px rgba(23,23,19,.14); }
.m-cover::after { content: ""; position: absolute; inset: 0; background: linear-gradient(180deg, rgba(23,23,19,0) 30%, rgba(23,23,19,.62)); }
.m-cover .in { position: absolute; left: 16px; right: 16px; bottom: 14px; color: #fff; z-index: 2; }
.m-cover .in b { display: block; font-size: 22px; line-height: 1.1; } .m-cover .in span { font-size: 12px; font-weight: 700; opacity: .92; }
.m-hs { display: flex; gap: 10px; overflow: hidden; margin: 0 -22px; padding: 2px 22px 6px; }
.m-feat { flex: none; width: 150px; border-radius: 20px; overflow: hidden; background: #fff; box-shadow: 0 6px 18px rgba(23,23,19,.08); }
.m-feat .ph { height: 92px; position: relative; }
.m-feat .tx { padding: 8px 10px 10px; } .m-feat .tx b { display: block; font-size: 12.5px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
.m-feat .tx span { font-size: 10.5px; color: #57534E; }
.m-row { display: flex; gap: 11px; align-items: center; padding: 9px; border-radius: 20px; background: #fff; box-shadow: 0 6px 18px rgba(23,23,19,.07); margin-bottom: 9px; }
.m-row .ph { width: 68px; height: 68px; border-radius: 15px; flex: none; position: relative; }
.m-row .tx { flex: 1; min-width: 0; } .m-row .tx b { display: block; font-size: 13.5px; }
.m-row .tx span { display: block; font-size: 11px; color: #57534E; margin-top: 1px; }
.m-row .tx em { font-style: normal; font-size: 11px; font-weight: 700; color: #4F6B4A; display: block; margin-top: 4px; }
.m-gal { display: grid; grid-template-columns: repeat(3, 1fr); gap: 5px; }
.m-gal span { aspect-ratio: 1; border-radius: 12px; display: block; position: relative; }
.m-gal span.tall { grid-row: span 2; aspect-ratio: auto; }
.m-like { position: absolute; right: 6px; bottom: 6px; font-size: 9.5px; font-weight: 700; color: #fff; background: rgba(23,23,19,.35); padding: 2px 6px; border-radius: 99px; }
.m-pk { border-radius: 18px; padding: 12px 13px; background: #fff; box-shadow: 0 6px 18px rgba(23,23,19,.07); margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center; }
.m-pk b { font-size: 13.5px; display: block; } .m-pk span { font-size: 11px; color: #57534E; }
.m-pk .pr { font-size: 14px; font-weight: 700; color: #4F6B4A; }
.m-seat.ph { background-size: cover; background-position: center; border-color: #fff; box-shadow: 0 0 0 1.5px #4F6B4A; }
.m-fly { position: absolute; width: 18px; height: 18px; border-radius: 50%; background-size: cover; background-position: center; border: 1.5px solid #fff;
  box-shadow: 0 0 0 1.5px #4F6B4A, 0 6px 14px rgba(23,23,19,.25); z-index: 6; }
"""

def av(text, ph=None, size=38, extra=''):
    if ph and photo(ph, 120):
        return f'<span class="m-av ph" style="width:{size}px;height:{size}px;background-image:url(\'{photo(ph, 120)}\');{extra}"></span>'
    return f'<span class="m-av" style="width:{size}px;height:{size}px;font-size:{size*0.32:.0f}px;{extra}">{text}</span>'

# ---------------------------------------------------------------- dados
# Conteúdo de exemplo (inventado) para o site e o vídeo.
COUPLE = ('Inês', 'Rafael')
PARTNERS = [
    # nome, categoria, local, preço, rating, avaliações, foto
    ('Quinta do Lago Azul', 'Espaço', 'Sintra', 'desde 8 500 €', '4,9', 32, 'mansion_flowers'),
    ('Casa Tília', 'Espaço', 'Lisboa', 'desde 4 500 €', '4,8', 38, 'house'),
    ('Cravos &amp; Canela', 'Flores e decoração', 'Loures', 'desde 650 €', '4,8', 27, 'flower_decor'),
    ('Luz &amp; Grão', 'Fotografia', 'Lisboa', 'desde 1 400 €', '5,0', 41, 'camera'),
    ('Mesa Posta', 'Catering', 'Cascais', '58 € / pessoa', '4,7', 63, 'fine_dining'),
    ('Som de Verão', 'Música e DJ', 'Setúbal', 'desde 900 €', '4,9', 19, 'dance'),
    ('Atelier Véu', 'Vestidos', 'Porto', 'desde 1 100 €', '4,8', 24, 'bride_window'),
    ('Monte Branco', 'Espaço', 'Alentejo', 'desde 5 800 €', '4,9', 31, 'outdoor_ceremony'),
]

# ---------------------------------------------------------------- ecrãs

def org_home():
    return phone(status() + f'''<div class="m-body">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
    <span style="font-size:13px;color:#57534E">Olá, Inês</span>
    <span class="m-av" style="width:34px;height:34px">IR</span></div>
  <div style="font-size:26px;font-weight:700;line-height:1.15;margin:6px 0 14px">O nosso casamento</div>
  <div class="m-hero">{doodles("heart","spark","glass")}
    <div class="lab">CASAMENTO · 12 SET 2027</div><div class="val">268 <small>dias para o sim</small></div>
    <div class="m-bar"><b style="width:62%"></b></div>
    <div class="m-pills"><span class="m-pill s">Quinta do Lago</span><span class="m-pill">Sintra</span></div></div>
  <div class="m-grid">
    <div class="m-tile t0">{stk("users",0,36)}<div><b>Convidados</b><span>86 de 120 confirmados</span></div></div>
    <div class="m-tile t1">{stk("euro",1,36)}<div><b>Orçamento</b><span>Ainda tens 6 240 €</span></div></div>
    <div class="m-tile t1">{stk("seat",2,36)}<div><b>Mesas</b><span>12 mesas · 3 por sentar</span></div></div>
    <div class="m-tile t0">{stk("tasks",3,36)}<span class="badge">4</span><div><b>Tarefas</b><span>4 esta semana</span></div></div></div>
  <div class="m-sec"><b>Pagamentos próximos</b><span>Ver todos</span></div>
  <div class="m-pay"><span class="m-date"><small>OUT</small><b>24</b></span><div class="tx" style="flex:1"><b style="font-size:13px;display:block">Sinal · Casa Tília</b><span style="font-size:11px;color:#57534E">Pendente · toca para pagar</span></div><b style="font-size:13px">1 785 €</b></div>
</div>''' + nav(ORG_NAV, 0))

def guests():
    rows = [('IS','Isabel Santos','Família · Lado da noiva · Mesa 2','Vai','c-s'),('MC','Miguel Costa','Amigos · com Rita · Mesa 6','Vai','c-s'),
            ('LP','Leonor Pires','Trabalho · enviado há 3 dias','Por responder','c-a'),('AR','Avó Rosa','Família · Menu sem glúten','Vai','c-s'),
            ('TR','Tio Rui','Família · com Paula e 2 filhos','Vai','c-s'),('JT','João Teixeira','Amigos · lado do noivo','Não vai','c-r'),
            ('CF','Carolina Faria','Amigos · Menu vegetariano','Vai','c-s')]
    cards = ''.join(f'<div class="m-card" style="padding:10px 12px;margin-bottom:8px">{av(a, None, 34)}<div class="tx"><b>{n}</b><span>{m}</span></div><span class="m-chip {c}">{s}</span></div>' for a,n,m,s,c in rows)
    return phone(status() + f'''<div class="m-body"><div class="m-title">Convidados</div>
  <div class="m-hero">{doodles("users","heart","spark")}<div class="lab">CONFIRMADOS</div><div class="val">98 <small>de 132 convidados</small></div>
    <div class="m-bar"><b style="width:74%"></b></div><div class="m-pills"><span class="m-pill s">22 por responder</span><span class="m-pill">12 não vão</span><span class="m-pill">9 menus especiais</span></div></div>
  <div class="m-chips"><span class="on">Todos 132</span><span>Família 54</span><span>Amigos 61</span><span>Trabalho</span></div>{cards}</div>''' + nav(ORG_NAV, 0), 'sub')

def budget():
    cats = [('store','Espaço · Casa Tília','8 925 €',0.9),('glass','Catering · Mesa Posta','7 656 €',0.6),('photo','Fotografia · Luz &amp; Grão','1 400 €',0.5),
            ('heart','Flores · Cravos &amp; Canela','950 €',0.75),('spark','Música · Som de Verão','900 €',0.3),('gift','Vestido e fato','2 300 €',1.0)]
    cards = ''.join(f'<div class="m-card" style="padding:10px 12px;margin-bottom:8px">{stk(i,k,32)}<div class="tx"><b>{n}</b><span style="display:block;height:6px;border-radius:9px;background:#EEF2EC;margin-top:7px;overflow:hidden"><span style="display:block;height:100%;width:{p*100:.0f}%;background:#4F6B4A;border-radius:9px"></span></span></div><b style="font-size:13px">{v}</b></div>' for k,(i,n,v,p) in enumerate(cats))
    return phone(status() + f'''<div class="m-body"><div class="m-title">Orçamento</div>
  <div class="m-hero">{doodles("euro","heart","spark")}<div class="lab">AINDA TENS</div><div class="val">6 240 € <small>de 28 000 €</small></div>
    <div class="m-bar"><b style="width:78%"></b></div><div class="m-pills"><span class="m-pill s">21 760 € gastos</span><span class="m-pill">3 pagamentos este mês</span></div></div>
  <div class="m-chips"><span class="on">Categorias</span><span>Pagas</span><span>Pendentes</span></div>{cards}</div>''' + nav(ORG_NAV, 0), 'sub')

SEAT_PEOPLE = ['couple_hands','bride','couple_road','couple_green','couple_trees','couple_kiss2','couple_field','couple_beach']

def seating(pre='s'):
    """Mesas — com ids (prefixo [pre]) para o vídeo animar convidados a sentar."""
    import math
    # cx, cy, nome, lugares, ocupados
    tables = [(62,62,'1',8,8),(178,62,'2',8,8),(294,62,'3',8,6),(120,170,'Noivos',6,6),(236,170,'5',8,7),(62,278,'6',8,5),(178,278,'7',8,4),(294,278,'8',8,8)]
    out = ''
    targets = []
    for ti,(cx,cy,n,seats,full) in enumerate(tables):
        r = 26 if n != 'Noivos' else 30
        fs = 13 if n != 'Noivos' else 10
        bgc = '#4F6B4A' if n == 'Noivos' else '#DDE5D3'
        col = '#fff' if n == 'Noivos' else '#4F6B4A'
        out += f'<span class="m-rt" style="left:{cx-r}px;top:{cy-r}px;width:{2*r}px;height:{2*r}px;font-size:{fs}px;background:{bgc};color:{col}">{n}</span>'
        for k in range(seats):
            a = 2*math.pi*k/seats - math.pi/2
            x, y = cx + (r+13)*math.cos(a) - 9, cy + (r+13)*math.sin(a) - 9
            if k < full:
                pp = SEAT_PEOPLE[(ti*3+k) % len(SEAT_PEOPLE)] if (ti+k) % 3 == 0 else None
                u = photo(pp, 60) if pp else None
                if u: out += f'<span class="m-seat ph" style="left:{x:.0f}px;top:{y:.0f}px;background-image:url(\'{u}\')"></span>'
                else: out += f'<span class="m-seat f" style="left:{x:.0f}px;top:{y:.0f}px"></span>'
            else:
                if n == '7' and len(targets) < 3:
                    targets.append((x, y))
                    out += f'<span class="m-seat" id="{pre}t{len(targets)-1}" style="left:{x:.0f}px;top:{y:.0f}px"></span>'
                else:
                    out += f'<span class="m-seat" style="left:{x:.0f}px;top:{y:.0f}px"></span>'
    chips = [('Avó Rosa','couple_trees'),('Tio Rui','couple_road'),('Leonor','bride')]
    chip_html = ''.join(f'<span id="{pre}c{i}" style="display:inline-flex;align-items:center;gap:6px;padding:4px 11px 4px 4px">{av("",p,22,"border-width:1px")}{n}</span>' for i,(n,p) in enumerate(chips))
    return phone(status() + f'''<div class="m-body"><div class="m-title">Mesas</div>
  <div class="m-hero">{doodles("table","heart","spark")}<div class="lab">SENTADOS</div><div class="val"><span id="{pre}n">89</span> <small>de 98 confirmados</small></div>
    <div class="m-pills"><span class="m-pill s">14 mesas</span><span class="m-pill" id="{pre}left">9 por sentar</span><span class="m-pill">Jardim · Casa Tília</span></div></div>
  <div class="m-table" id="{pre}tab" style="margin:12px 0 0;height:330px">{out}</div>
  <div style="font-size:12px;font-weight:700;color:#57534E;margin:12px 2px 0">Por sentar · arrasta para uma mesa</div>
  <div class="m-chips" style="margin-top:8px">{chip_html}<span>+6</span></div></div>''' + nav(ORG_NAV, 0), 'sub')

def partners():
    feat = ''.join(f'''<div class="m-feat"><div class="ph" style="{bg(ph,320)}"><span style="position:absolute;left:8px;top:8px" class="m-chip c-s">★ {r}</span></div>
      <div class="tx"><b>{n}</b><span>{c} · {l}</span></div></div>''' for n,c,l,p,r,k,ph in PARTNERS[:3])
    rows = ''.join(f'''<div class="m-row"><div class="ph" style="{bg(ph,200)}"></div><div class="tx"><b>{n}</b><span>{c} · {l} · ★ {r} ({k})</span><em>{p}</em></div>
      <span class="m-stk" style="width:32px;height:32px;border-radius:50%">{svg("heart",15,"#4F6B4A")}</span></div>''' for n,c,l,p,r,k,ph in PARTNERS[3:7])
    return phone(status() + f'''<div class="m-body"><div class="m-title">Parceiros</div>
  <div class="m-search">{svg("search",18,"#57534E")}Espaços, fotografia, flores…</div>
  <div class="m-chips"><span class="on">Todos</span><span>Espaço</span><span>Catering</span><span>Fotografia</span><span>Música</span></div>
  <div class="m-sec" style="margin-top:4px"><b>Em destaque perto de ti</b><span>Lisboa</span></div>
  <div class="m-hs">{feat}</div>
  <div class="m-sec" style="margin-top:10px"><b>312 parceiros</b><span>Filtrar</span></div>{rows}</div>''' + nav(ORG_NAV, 1), 'sub')

def partner_profile():
    gal = ['canopy','table_floral','arch','glasses','aisle','house']
    thumbs = ''.join(f'<span style="{bg(g,220)}"></span>' for g in gal)
    return phone(f'''<div style="position:relative;height:250px;{bg("mansion_flowers",700)}">
    <div style="position:absolute;inset:0;background:linear-gradient(180deg,rgba(23,23,19,.25),rgba(23,23,19,0) 35%)"></div>
    <div style="position:relative">{status('#fff')}</div>
    <span class="m-stk" style="position:absolute;left:18px;top:56px;border-radius:50%;width:36px;height:36px;font-size:18px">‹</span>
    <span class="m-stk" style="position:absolute;right:18px;top:56px;border-radius:50%;width:36px;height:36px">{svg("heart",17,"#A3412E")}</span>
    <span style="position:absolute;right:18px;bottom:30px;font-size:11px;font-weight:700;color:#fff;background:rgba(23,23,19,.4);padding:4px 10px;border-radius:99px">1 / 24</span></div>
  <div class="m-body" style="margin-top:-22px;position:relative;background:#fff;border-radius:26px 26px 0 0;padding-top:18px">
    <div style="display:flex;justify-content:space-between;align-items:flex-start"><div><div style="font-size:24px;font-weight:700">Quinta do Lago Azul</div>
      <div style="font-size:12px;color:#57534E;margin-top:2px">Espaço · Sintra · até 180 pessoas</div></div><span class="m-chip c-s" style="font-size:12px;padding:5px 10px">★ 4,9 · 32</span></div>
    <div style="font-size:12.5px;line-height:1.5;color:#3F3B37;margin:10px 0 12px">Quinta com jardim e lago, entre a serra e o mar. Cerimónia junto ao lago e jantar na estufa.</div>
    <div class="m-gal">{thumbs}</div>
    <div class="m-sec" style="margin-top:14px"><b>Pacotes</b><span>3</span></div>
    <div class="m-pk"><div><b>Pacote Jardim</b><span>Cerimónia + jantar · até 120</span></div><span class="pr">8 500 €</span></div>
    <div class="m-pk"><div><b>Pacote Clássico</b><span>Dia inteiro · até 180</span></div><span class="pr">11 000 €</span></div></div>
  <div style="position:absolute;left:18px;right:18px;bottom:18px;display:grid;grid-template-columns:1fr 1.5fr;gap:9px">
    <span style="height:50px;border-radius:99px;background:#F2F0EB;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px">Mensagem</span>
    <span style="height:50px;border-radius:99px;background:#4F6B4A;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px">Pedir orçamento</span></div>''')

def chat():
    return phone(status() + f'''<div class="m-body">
  <div style="display:flex;align-items:center;gap:10px;margin:4px 0 14px">{av("CT","mansion_flowers",40)}
    <div><b style="font-size:15px;display:block">Casa Tília</b><span style="font-size:11px;color:#4F6B4A">Responde em ~1 h</span></div></div>
  <div class="m-bub out">Olá! Podemos visitar o jardim no sábado?</div>
  <div class="m-bub in">Claro! Às 11h está ótimo. Deixo umas fotos da estufa montada para jantar 👇</div>
  <div style="display:grid;grid-template-columns:1fr 1fr;gap:5px;width:76%;margin-bottom:8px"><span style="height:86px;border-radius:14px;{bg("table_room",260)}"></span><span style="height:86px;border-radius:14px;{bg("canopy",260)}"></span></div>
  <div class="m-prop"><div style="display:flex;align-items:center;gap:10px">{stk("store",1,34)}<div><b style="font-size:13px;display:block">Casamento · 12 set 2027</b><span style="font-size:11px;color:#57534E">Pacote Palacete · 132 pessoas</span></div></div>
    <div class="row"><span>Valor</span><b>8 925 €</b></div><div class="row"><span>Sinal (20%)</span><b>1 785 €</b></div>
    <div class="btns"><span style="background:#F2F0EB">Ver detalhe</span><span style="background:#4F6B4A;color:#fff">Aceitar · pagar sinal</span></div></div>
  <div class="m-bub out">Perfeito, aceitámos! 🥂</div></div>''', 'sub')

def pay_done():
    return phone(f'''<div class="m-done"><div style="width:100%">{status('#fff')}</div>
  <div class="m-ok" style="margin-top:130px">{svg("check",58,"#4F6B4A","2.6")}</div>
  <div style="font-size:36px;font-weight:700;margin-top:24px">Sinal pago!</div>
  <div style="font-size:15px;margin-top:6px">2 805 € para Quinta do Lago Azul</div>
  <div style="background:rgba(255,255,255,.14);border-radius:20px;padding:14px;margin-top:22px;text-align:left;font-size:13px;line-height:1.6;width:100%;box-sizing:border-box">
    <div>{svg("cal",16,"#fff")} &nbsp;Reserva confirmada para 21 mai 2027.</div><div>{svg("card",16,"#fff")} &nbsp;MB WAY · pago na app, sem abrir o browser.</div><div>{svg("euro",16,"#fff")} &nbsp;Restante: 6 545 € até 21 abr 2027.</div></div>
  <div style="position:absolute;bottom:44px;left:26px;right:26px;height:52px;border-radius:99px;background:#fff;color:#4F6B4A;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:15px">Ver reservas</div></div>''')

def guest_home():
    return phone(status() + f'''<div class="m-body"><div class="m-title">O teu evento</div>
  <div class="m-cover" style="{bg("couple_sky",700)}"><div class="in"><span>CASAMENTO · SÁB, 12 SET 2027</span><b>Inês &amp; Rafael</b><span>15:00 · Casa Tília, Lisboa</span></div></div>
  <div class="m-hero" style="margin-top:10px;padding:12px 14px"><div class="m-cd" style="margin-top:0"><div><b>268</b><span>DIAS</span></div><div><b>14</b><span>HORAS</span></div><div><b>22</b><span>MIN</span></div></div></div>
  <div class="m-card" style="margin-top:12px">{stk("check",0,36)}<div class="tx"><b>Vais · 2 pessoas</b><span>Tu e o Nuno · menus escolhidos</span></div><span style="font-size:12px;font-weight:700;color:#4F6B4A">Alterar</span></div>
  <div class="m-grid" style="margin-top:4px">
    <div class="m-tile t0">{stk("clock",0,34)}<div><b>Programa</b><span>Cerimónia às 15:00</span></div></div>
    <div class="m-tile t1">{stk("table",1,34)}<div><b>A tua mesa</b><span>Mesa 7 · com 6 amigos</span></div></div></div></div>''' + nav(['heart','photo','gift','users'], 0), 'sub')

def gallery():
    """Galeria · Publicações (feed como o Instagram), igual ao ecrã da app."""
    def post(who, ph_av, role, ago, photo_name, likes, liked_by, caption, comments, stamp, hid=''):
        heart = svg("heart", 23, "#A3412E", "0") .replace('fill="none"', 'fill="#A3412E"')
        burst = (f'<span id="{hid}" style="position:absolute;left:50%;top:50%;width:96px;height:96px;margin:-48px 0 0 -48px;opacity:0">'
                 f'{svg("heart",96,"#fff","0").replace('fill="none"','fill="#fff" style="filter:drop-shadow(0 6px 16px rgba(0,0,0,.25))"')}</span>') if hid else ''
        return f'''<div style="padding:4px 0 22px">
      <div style="display:flex;align-items:center;gap:10px;margin-bottom:12px">{av(who[:1], ph_av, 36)}
        <div><b style="font-size:14px;display:block">{who}{' <span class="m-chip c-g" style="font-size:10px;margin-left:4px">Anfitrião</span>' if role=='Anfitrião' else ''}</b>
        <span style="font-size:12px;color:#57534E">{role} · {ago}</span></div></div>
      <div style="position:relative;aspect-ratio:4/5;border-radius:24px;overflow:hidden;{bg(photo_name,700)}">{burst}</div>
      <div style="display:flex;align-items:center;gap:16px;margin-top:10px;font-size:14px;font-weight:700">
        <span style="display:flex;align-items:center;gap:5px">{heart}{likes}</span>
        <span style="display:flex;align-items:center;gap:5px">{svg("chat",22,"#171713")}{comments}</span>
        {svg("share",22,"#171713")}<span style="flex:1"></span>{svg("down",22,"#171713")}</div>
      <div style="font-size:13px;margin-top:8px">Gostado por <b>{liked_by}</b> e <b>outras {likes-1} pessoas</b></div>
      <div style="font-size:14px;line-height:1.43;margin-top:6px"><b>{who}</b> {caption}</div>
      <div style="font-size:14px;color:#57534E;margin-top:4px">Ver os {comments} comentários</div>
      <div style="font-size:11px;letter-spacing:.7px;color:#8F8B84;margin-top:6px">{stamp}</div></div>'''
    return phone(status() + f'''<div style="display:flex;align-items:center;padding:2px 18px 8px">
    <span class="m-stk" style="border-radius:50%;width:36px;height:36px;font-size:20px">‹</span>
    <div style="flex:1;text-align:center;margin-right:36px"><b style="font-size:19px;display:block">Publicações</b><span style="font-size:12px;color:#57534E">Sofia &amp; Tiago</span></div></div>
  <div class="m-body" style="padding-top:2px">
    {post("Carolina Faria","couple_road","Convidado","há 2 h","toast",31,"Avó Rosa","O brinde mais bonito do ano 🥂","6","21 MAI · 18:42","burst")}
  </div>''' + nav(['heart','photo','gift','users'], 1), 'sub')

def partner_home():
    reqs = [('Inês &amp; Rafael','12 set 2027 · 132 pessoas','Novo','c-s','couple_sky'),('Marta &amp; Rui','3 jun 2027 · 90 pessoas','Novo','c-s','couple_beach'),
            ('Sara &amp; Tomás','18 abr 2027 · sinal pago','Confirmado','c-g','couple_field')]
    rows = ''.join(f'<div class="m-card" style="padding:10px 12px;margin-bottom:8px">{av("",p,36)}<div class="tx"><b>{n}</b><span>{m}</span></div><span class="m-chip {c}">{s}</span></div>' for n,m,s,c,p in reqs)
    return phone(status() + f'''<div class="m-body">
  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px">
    <span style="display:flex;align-items:center;gap:7px;height:32px;padding:0 12px 0 4px;border-radius:99px;background:#fff;box-shadow:0 6px 18px rgba(23,23,19,.07);font-size:12px;font-weight:700">{av("CT","mansion_flowers",24)}Casa Tília</span>
    <span class="m-stk" style="border-radius:50%;width:38px;height:38px">···</span></div>
  <div style="font-size:23px;font-weight:700;line-height:1.2;margin:12px 0 14px">Olá, Ana! O que precisas hoje?</div>
  <div class="m-hero">{doodles("store","spark","heart")}<div class="lab">VENDAS ESTE MÊS</div><div class="val">14 250 € <small>5 reservas</small></div>
    <div class="m-pills"><span class="m-pill s">2 pedidos novos</span><span class="m-pill">1 sinal a aguardar</span></div></div>
  <div class="m-grid">
    <div class="m-tile t0">{stk("cal",0,34)}<span class="badge">2</span><div><b>Reservas</b><span>2 pendentes</span></div></div>
    <div class="m-tile t1">{stk("card",1,34)}<div><b>Pagamentos</b><span>3 120 € para levantar</span></div></div></div>
  <div class="m-sec"><b>Pedidos recentes</b><span>Ver todos</span></div>{rows}</div>''' + nav(['home','cal','chat','store'], 0), 'sub')

def partner_payments():
    pays = [('Sinal · Inês &amp; Rafael','Hoje · MB WAY','+ 1 785 €'),('Sinal · Sara &amp; Tomás','Ontem · Cartão','+ 1 335 €'),('Levantamento','12 out · IBAN ···· 4821','− 4 200 €')]
    rows = ''.join(f'<div class="m-card" style="padding:11px 12px;margin-bottom:8px">{stk("euro" if "+" in v else "down",i,32)}<div class="tx"><b>{n}</b><span>{m}</span></div><b style="font-size:13px;color:{"#4F6B4A" if "+" in v else "#171713"}">{v}</b></div>' for i,(n,m,v) in enumerate(pays))
    return phone(status() + f'''<div class="m-body"><div class="m-title">Pagamentos</div>
  <div class="m-hero">{doodles("card","spark","euro")}<div class="lab">DISPONÍVEL PARA LEVANTAR</div><div class="val">3 120 €</div>
    <div class="m-pills"><span class="m-pill s">1 780 € a caminho</span><span class="m-pill">Stripe · verificado</span></div></div>
  <div style="height:54px;border-radius:99px;background:#4F6B4A;color:#fff;display:flex;align-items:center;justify-content:center;gap:8px;font-weight:700;font-size:16px;margin-top:12px">{svg("down",20,"#fff")} Levantar 3 120 €</div>
  <div class="m-sec"><b>Movimentos</b><span>Manual · mudar</span></div>{rows}</div>''' + nav(['home','cal','chat','store'], 3), 'sub')

MOCK_CSS += EXTRA_CSS


# ---------------------------------------------------------------- ecrãs reais
# Capturas reais da app (testes de screenshots), com fotos nos espaços vazios.
REAL = os.path.join(HERE, 'real')
_rc = {}
def real_src(name, w=732):
    if name in _rc: return _rc[name]
    from PIL import Image
    import io
    im = Image.open(os.path.join(REAL, name + '.png')).convert('RGB')
    top = im.getpixel((im.width // 2, 4))
    im = im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
    buf = io.BytesIO(); im.save(buf, 'JPEG', quality=86, optimize=True, progressive=True)
    _rc[name] = ('data:image/jpeg;base64,' + base64.b64encode(buf.getvalue()).decode(), '#%02x%02x%02x' % top)
    return _rc[name]

def real(name, overlay=''):
    src, top = real_src(name)
    return (f'<div class="phone real"><div class="screen" style="background:{top}">{status()}'
            f'<div style="position:relative"><img src="{src}" style="display:block;width:100%" alt="">{overlay}</div></div></div>')



SCREENS = {
    'org_home': lambda: real('home'), 'wedding': lambda: real('casamento'), 'guests': lambda: real('convidados'),
    'budget': lambda: real('orcamento'), 'seating': lambda: real('lugares'), 'tasks': lambda: real('tarefas'),
    'chat': lambda: real('conversa'), 'guest_home': lambda: real('convidado_inicio'), 'guest_program': lambda: real('convidado_programa'),
    'partner_home': lambda: real('painel'), 'partner_requests': lambda: real('pedidos'), 'pay_done': pay_done,
    # desenhados (aprovados): parceiros, perfil do parceiro, galeria
    'partners': lambda: real('parceiros'), 'partner_profile': lambda: real('perfil_parceiro'), 'gallery': lambda: real('publicacoes'),
}

def gallery_grid():
    """Galeria (grelha) no design da app, com fotos."""
    pics = ['toast','couple_kiss','glasses2','dance2','aisle_flowers','rings','long_table','couple_shore','wood_tables','dance','bouquet_plank','couple_hands2','fine_dining_out','couple_trees','arch']
    cells = ''.join(f'<span style="aspect-ratio:1;border-radius:4px;display:block;{bg(p,240)}"></span>' for p in pics)
    return phone(status() + f'''<div style="display:flex;align-items:center;padding:4px 18px 10px">
    <span class="m-stk" style="border-radius:50%;width:38px;height:38px;font-size:20px;background:#F2F0EB;box-shadow:none">‹</span>
    <div style="flex:1;text-align:center"><b style="font-size:20px">Galeria</b></div>
    <span style="width:38px;height:38px;border-radius:50%;background:#4F6B4A;display:flex;align-items:center;justify-content:center">{svg("plus",20,"#fff","2.4")}</span></div>
  <div class="m-body" style="padding-top:0">
    <div style="display:flex;align-items:center;gap:10px;padding:11px 13px;border-radius:16px;background:#FCEFD6;color:#7A5000;font-size:12px;margin-bottom:12px">{svg("clock",16,"#7A5000")}<span style="flex:1">3 fotos de convidados à espera da vossa aprovação.</span><b style="text-decoration:underline">Rever</b></div>
    <div style="font-size:11px;font-weight:700;letter-spacing:1px;color:#57534E;margin:4px 0 8px">ESTA SEMANA · 214 FOTOS</div>
    <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:4px">{cells}</div></div>
  <div style="position:absolute;left:14px;right:14px;bottom:16px;height:62px;border-radius:26px;background:#fff;box-shadow:0 -6px 20px rgba(63,74,48,.16);display:grid;grid-template-columns:repeat(3,1fr);align-items:center;justify-items:center;font-size:13px;color:#57534E">
    <span style="background:#4F6B4A;color:#fff;padding:9px 18px;border-radius:99px;font-weight:700">Todas</span><span>As tuas</span><span>Favoritas</span></div>''', 'sub')

SCREENS['gallery_grid'] = gallery_grid
