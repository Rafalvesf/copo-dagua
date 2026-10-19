import sys, os
from playwright.sync_api import sync_playwright
ts=[float(x) for x in sys.argv[1:]]
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/opt/pw-browsers/chromium-1194/chrome-linux/chrome')
    pg=b.new_page(viewport={'width':1280,'height':720}); pg.on('console', lambda m: print('console', m.text)); pg.on('pageerror', lambda e: print('ERR', e))
    pg.goto('file://'+os.path.abspath('film.html')+'?render'); pg.wait_for_timeout(500)
    for t in ts:
        pg.evaluate(f'renderAt({t})'); pg.locator('#stage').screenshot(path=f'snap_{t}.png')
    b.close()
from PIL import Image
ims=[Image.open(f'snap_{t}.png').resize((640,360)) for t in ts]
sheet=Image.new('RGB',(1280, 360*((len(ims)+1)//2)),'white')
for i,im in enumerate(ims): sheet.paste(im,((i%2)*640,(i//2)*360))
sheet.save('snaps.png')
