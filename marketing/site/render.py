import asyncio, os, subprocess, shutil
from playwright.async_api import async_playwright
FPS=30; DUR=48.2
async def main():
    os.makedirs('frames', exist_ok=True)
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/opt/pw-browsers/chromium-1194/chrome-linux/chrome')
        pg = await b.new_page(viewport={'width':1280,'height':720})
        await pg.goto('file://'+os.path.abspath('film.html')+'?render')
        await pg.wait_for_timeout(800)
        n=int(DUR*FPS)
        for i in range(n):
            await pg.evaluate(f'renderAt({i/FPS})')
            await pg.locator('#stage').screenshot(path=f'frames/f{i:04d}.png')
        await b.close()
asyncio.run(main())
subprocess.run(['ffmpeg','-y','-loglevel','error','-framerate',str(FPS),'-i','frames/f%04d.png','-c:v','libx264','-pix_fmt','yuv420p','-crf','22','-preset','slow','-movflags','+faststart','a-nossa.mp4'],check=True)
subprocess.run(['ffmpeg','-y','-loglevel','error','-i','frames/f0350.png','-q:v','3','poster.jpg'],check=True)
print(os.path.getsize('a-nossa.mp4'))
