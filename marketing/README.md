# Marketing da À Nossa!

Site de apresentação, vídeo motion graphic e a proposta da mascote nova.

## O que está aqui

| Ficheiro | O que é |
|---|---|
| `site/a-nossa-site.html` | Site de apresentação (uma página, tudo embutido) |
| `site/a-nossa.mp4` | Vídeo de apresentação (1280×720, 48 s) |
| `site/poster.jpg` | Imagem de capa do vídeo |
| `mascote/copos.html` | Proposta dos copos novos: poses e ecrãs da app |

## Como voltar a gerar

Os scripts precisam de duas pastas ao lado de `site/`, que não estão no repositório por serem grandes:

- `shots/png/`: as capturas reais da app. Faz clone do ramo `screenshots` (gerado pelo workflow "App screenshots").
- `site/photos/`: as fotos do Unsplash. Estão no ramo `marketing-assets`, na pasta `photos/`.

Depois, dentro de `site/`:

```sh
python3 compose.py      # põe fotos nas capturas reais (cria site/real/)
python3 build_film.py   # cria film.html (o vídeo, com renderAt(t))
python3 render.py       # captura imagem a imagem e cria a-nossa.mp4 e poster.jpg (precisa de Playwright e ffmpeg)
python3 build_site.py   # cria a-nossa-site.html
python3 snap.py 5 12 20 # opcional: imagens de alguns instantes do vídeo, para rever
```

A mascote: dentro de `mascote/`, `python3 build.py` cria `copos.html`. Os copos são SVG gerados por `mascot.py` (função `duo(pose)`: `clink`, `wave`, `celebrate`, `sleep`, `sad`).
