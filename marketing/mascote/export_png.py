"""Exporta as poses da mascote para PNG (os ficheiros de assets/mascot/ da app).

Uso: python3 export_png.py <pasta de destino>   (precisa de Playwright)
"""
import sys, pathlib
from playwright.sync_api import sync_playwright
from mascot import duo, glass

out = pathlib.Path(sys.argv[1]); out.mkdir(parents=True, exist_ok=True)

def duo_svg(pose):
    # Mesma proporção dos PNG antigos (672x552), com espaço em cima para a moeda/balão.
    svg = duo(pose, w=672)
    return svg.replace('viewBox="0 0 400 270" width="672"', 'viewBox="0 -52 400 328.57" width="672" height="552"')

def glass_svg(kind):
    g = glass(kind, 'happy', 'open', ('up', 'up'))
    return g.replace('viewBox="0 0 200 240"', 'viewBox="-12 -16 224 270.6" width="432" height="522"')

items = {f'duo_{p}.png': (duo_svg(p), 672, 552) for p in ('wave', 'budget', 'sleep', 'sad', 'chat', 'clink')}
items['glass_gold.png'] = (glass_svg('gold'), 432, 522)
items['glass_rose.png'] = (glass_svg('rose'), 432, 522)

with sync_playwright() as pw:
    b = pw.chromium.launch()
    pg = b.new_page()
    for name, (svg, w, h) in items.items():
        pg.set_viewport_size({'width': w, 'height': h})
        pg.set_content(f'<html><body style="margin:0;background:transparent">{svg}</body></html>')
        pg.locator('svg').first.screenshot(path=str(out / name), omit_background=True)
        print(name)
    b.close()
