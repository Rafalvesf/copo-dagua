"""Descarrega as fotos livres dos eventos reais (Wikimedia Commons),
reduz para 1280 px e grava em out/<nome>.jpg (corre no GitHub Actions)."""
import hashlib, io, json, os, sys, time, urllib.parse, urllib.request
from PIL import Image

UA = {'User-Agent': 'ANossaApp/1.0 (https://github.com/Rafalvesf/copo-dagua)'}
os.makedirs('out', exist_ok=True)
for p in json.load(open(os.path.join(os.path.dirname(__file__), 'photos.json'))):
    n = p['file'].replace(' ', '_')
    h = hashlib.md5(n.encode()).hexdigest()
    url = f'https://upload.wikimedia.org/wikipedia/commons/{h[0]}/{h[:2]}/{urllib.parse.quote(n)}'
    for attempt in range(4):
        try:
            data = urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60).read()
            break
        except Exception as e:
            print(p['name'], 'retry', e); time.sleep(10)
    else:
        sys.exit(f'falhou {p["name"]}')
    im = Image.open(io.BytesIO(data)).convert('RGB')
    im.thumbnail((1280, 1280))
    im.save(f'out/{p["name"]}.jpg', quality=80, optimize=True, progressive=True)
    print(p['name'], im.size, os.path.getsize(f'out/{p["name"]}.jpg'))
    time.sleep(2)
