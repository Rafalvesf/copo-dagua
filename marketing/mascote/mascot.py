# Mascote "À Nossa!" v2 — duas taças (espumante e rosé) em SVG vetorial.
INK = '#26332B'
KINDS = {
    # Verde da marca (pedido do utilizador, 2026-10-19): eucalipto e sálvia.
    'gold': dict(liq='#8FAD80', liq2='#B5CBA8', glass='#FFFFFF', blush='#F0A0A8'),
    'rose': dict(liq='#A9C49A', liq2='#CFDFC4', glass='#FFFFFF', blush='#F0A0A8'),
}

def bowl_path(kind):
    if kind == 'gold':   # tulipa: mais alta e estreita
        return 'M56 34 Q56 24 66 24 L134 24 Q144 24 144 34 L142 104 Q140 150 100 152 Q60 150 58 104 Z'
    return 'M44 40 Q44 24 60 24 L140 24 Q156 24 156 40 Q162 124 100 148 Q38 124 44 40 Z'

def eyes(kind, mood):
    y = 86
    out = ''
    for x in (81, 119):
        if mood == 'closed':
            out += f'<path d="M{x-10} {y} Q{x} {y+9} {x+10} {y}" fill="none" stroke="{INK}" stroke-width="5" stroke-linecap="round"/>'
        elif mood == 'happy':
            out += f'<path d="M{x-10} {y+4} Q{x} {y-9} {x+10} {y+4}" fill="none" stroke="{INK}" stroke-width="5" stroke-linecap="round"/>'
        else:
            out += (f'<ellipse cx="{x}" cy="{y}" rx="9" ry="11" fill="{INK}"/>'
                    f'<circle cx="{x-2.6}" cy="{y-4}" r="2.4" fill="#fff" opacity=".9"/>')
        if mood == 'sad':
            d = -1 if x < 100 else 1
            out += f'<path d="M{x-9} {y-15+ (4 if d<0 else 0)} L{x+9} {y-15+(0 if d<0 else 4)}" stroke="{INK}" stroke-width="4" stroke-linecap="round"/>'
    return out

def mouth(kind, m):
    y = 104
    if m == 'open':
        return (f'<path d="M88 {y} Q100 {y+19} 112 {y} Q100 {y+4} 88 {y} Z" fill="{INK}"/>'
                f'<path d="M93 {y+8} Q100 {y+14} 107 {y+8} Q100 {y+5} 93 {y+8} Z" fill="#E8667C"/>')
    if m == 'smile':
        return f'<path d="M91 {y+1} Q100 {y+10} 109 {y+1}" fill="none" stroke="{INK}" stroke-width="4.5" stroke-linecap="round"/>'
    if m == 'frown':
        return f'<path d="M92 {y+8} Q100 {y+1} 108 {y+8}" fill="none" stroke="{INK}" stroke-width="4.5" stroke-linecap="round"/>'
    if m == 'o':
        return f'<ellipse cx="100" cy="{y+5}" rx="5" ry="6" fill="{INK}"/>'
    return ''

def arms(kind, pose):
    ly, ry = 84, 84
    lx, rx = (59, 141) if kind == 'gold' else (46, 154)
    s = f'stroke="{INK}" stroke-width="5" stroke-linecap="round" fill="none"'
    hand = lambda x, y: f'<circle cx="{x}" cy="{y}" r="7.5" fill="#fff" stroke="{INK}" stroke-width="4.5"/>'
    L = {'down': (f'M{lx} {ly} Q{lx-18} {ly+18} {lx-16} {ly+38}', (lx-16, ly+40)),
         'up': (f'M{lx} {ly} Q{lx-24} {ly-14} {lx-22} {ly-44}', (lx-22, ly-46)),
         'hip': (f'M{lx} {ly+6} Q{lx-22} {ly+10} {lx-8} {ly+30}', (lx-8, ly+30))}
    R = {'down': (f'M{rx} {ry} Q{rx+18} {ry+18} {rx+16} {ry+38}', (rx+16, ry+40)),
         'up': (f'M{rx} {ry} Q{rx+24} {ry-14} {rx+22} {ry-44}', (rx+22, ry-46)),
         'wave': (f'M{rx} {ry} Q{rx+30} {ry-4} {rx+30} {ry-40}', (rx+31, ry-42)),
         'hip': (f'M{rx} {ry+6} Q{rx+22} {ry+10} {rx+8} {ry+30}', (rx+8, ry+30))}
    l, r = pose
    out = ''
    for path, (hx, hy) in (L[l], R[r]):
        out += f'<path d="{path}" {s}/>' + hand(hx, hy)
    return out

def glass(kind, mood='open', mouth_='open', pose=('down', 'down'), fill=0.62, extra=''):
    k = KINDS[kind]
    top = 152 - (152 - 24) * fill if kind == 'gold' else 148 - (148 - 24) * fill
    clip = f'clip-{kind}-{mood}-{mouth_}-{pose[0]}{pose[1]}'
    bubbles = ''.join(f'<circle cx="{x}" cy="{y}" r="{r}" fill="#fff" opacity=".8"/>' for x, y, r in
                      ([(86, 134, 3.2), (122, 126, 2.6), (106, 142, 2.2), (138, 112, 2)] if kind == 'gold' else [(84, 132, 3.2), (128, 124, 2.8), (110, 138, 2.2)]))
    base_y = 204
    stem_top = 150 if kind == 'gold' else 146
    return f'''<svg viewBox="0 0 200 240" xmlns="http://www.w3.org/2000/svg">
  <defs><clipPath id="{clip}"><path d="{bowl_path(kind)}"/></clipPath></defs>
  <ellipse cx="100" cy="{base_y+10}" rx="52" ry="7" fill="#000" opacity=".08"/>
  <path d="M100 {stem_top} L100 {base_y-6}" stroke="{INK}" stroke-width="18" stroke-linecap="round"/>
  <path d="M100 {stem_top} L100 {base_y-6}" stroke="#fff" stroke-width="7.5" stroke-linecap="round"/>
  <path d="M60 {base_y} Q100 {base_y-20} 140 {base_y} Q100 {base_y+10} 60 {base_y} Z" fill="#fff" stroke="{INK}" stroke-width="5.5" stroke-linejoin="round"/>
  {arms(kind, pose)}
  <path d="{bowl_path(kind)}" fill="{k['glass']}"/>
  <g clip-path="url(#{clip})">
    <path d="M30 {top} Q65 {top-9} 100 {top} T170 {top} V200 H30 Z" fill="{k['liq']}"/>
    <path d="M30 {top} Q65 {top-9} 100 {top} T170 {top} V{top+10} Q135 {top+3} 100 {top+10} T30 {top+10} Z" fill="{k['liq2']}"/>
    {bubbles}
    <path d="M{68 if kind=='gold' else 58} 42 Q{64 if kind=='gold' else 54} 76 {69 if kind=='gold' else 60} 104" stroke="#fff" stroke-width="8" stroke-linecap="round" fill="none" opacity=".9"/>
    <circle cx="{69 if kind=='gold' else 60}" cy="118" r="4" fill="#fff" opacity=".9"/>
  </g>
  <path d="{bowl_path(kind)}" fill="none" stroke="{INK}" stroke-width="5.5" stroke-linejoin="round"/>
  <ellipse cx="70" cy="104" rx="10" ry="6" fill="{k['blush']}" opacity=".6"/>
  <ellipse cx="130" cy="104" rx="10" ry="6" fill="{k['blush']}" opacity=".6"/>
  <path d="M{62 if kind=='gold' else 50} 30 Q100 38 {138 if kind=='gold' else 150} 30" fill="none" stroke="{INK}" stroke-width="3" opacity=".25" stroke-linecap="round"/>
  {eyes(kind, mood)}{mouth(kind, mouth_)}{extra}
</svg>'''

def sparkle(x, y, s=1, c='#F2C14E'):
    return f'<path transform="translate({x} {y}) scale({s})" d="M0 -14 Q2 -2 14 0 Q2 2 0 14 Q-2 2 -14 0 Q-2 -2 0 -14Z" fill="{c}"/>'

def duo(pose='clink', w=320):
    """Dois copos juntos numa só imagem."""
    if pose == 'clink':
        a = glass('gold', 'happy', 'open', ('down', 'up'))
        b = glass('rose', 'happy', 'open', ('up', 'down'))
        ra, rb, dx = 14, -14, 0
        top = sparkle(200, 26, 1.1) + sparkle(160, 50, .55, '#F29AAE') + sparkle(242, 46, .6, '#9FB58F')
    elif pose == 'wave':
        a = glass('gold', 'open', 'open', ('down', 'wave'))
        b = glass('rose', 'open', 'smile', ('hip', 'wave'))
        ra, rb, dx = -4, 5, 20
        top = ''
    elif pose == 'sleep':
        a = glass('gold', 'closed', 'o', ('down', 'down'), fill=.45)
        b = glass('rose', 'closed', 'smile', ('down', 'down'), fill=.45)
        ra, rb, dx = 10, -6, 10
        top = f'<text x="300" y="54" font-family="sans-serif" font-weight="700" font-size="30" fill="#9FB58F">z</text><text x="322" y="30" font-family="sans-serif" font-weight="700" font-size="22" fill="#9FB58F">z</text>'
    elif pose == 'sad':
        a = glass('gold', 'sad', 'frown', ('down', 'down'), fill=.25)
        b = glass('rose', 'sad', 'frown', ('down', 'down'), fill=.25)
        ra, rb, dx = -3, 3, 20
        top = ''
    else:  # celebrate
        a = glass('gold', 'happy', 'open', ('up', 'up'), fill=.8)
        b = glass('rose', 'happy', 'open', ('up', 'up'), fill=.8)
        ra, rb, dx = -8, 8, 24
        top = sparkle(200, 30, 1.1) + sparkle(40, 40, .6, '#F29AAE') + sparkle(360, 50, .7, '#9FB58F')
    def inner(svg):
        return svg.split('\n', 1)[1].rsplit('</svg>', 1)[0]
    return f'''<svg viewBox="0 0 400 270" width="{w}" xmlns="http://www.w3.org/2000/svg">
  <g transform="translate({20+dx} 20) rotate({ra} 100 150)">{inner(a)}</g>
  <g transform="translate({180-dx} 20) rotate({rb} 100 150)">{inner(b)}</g>
  {top}
</svg>'''
