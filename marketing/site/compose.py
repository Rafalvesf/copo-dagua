# Põe fotos nos espaços "Adicionar foto" das capturas reais da app.
import numpy as np
from PIL import Image, ImageFilter, ImageOps, ImageDraw
SH='../shots/png/'
FILL=np.array([220,228,216])
def hull(pts):
    pts=sorted(set(map(tuple,pts)))
    def cross(o,a,b): return (a[0]-o[0])*(b[1]-o[1])-(a[1]-o[1])*(b[0]-o[0])
    lo=[];up=[]
    for p in pts:
        while len(lo)>=2 and cross(lo[-2],lo[-1],p)<=0: lo.pop()
        lo.append(p)
    for p in reversed(pts):
        while len(up)>=2 and cross(up[-2],up[-1],p)<=0: up.pop()
        up.append(p)
    return lo[:-1]+up[:-1]
def fill_photo(src, out, box, photo, focus, protect, radius=0, shrink=2, fill=None):
    global FILL
    FILL=np.array(fill if fill else [220,228,216])
    im=Image.open(SH+src).convert('RGB'); a=np.asarray(im).astype(int)
    x0,y0,x1,y1=box
    near=(np.abs(a[y0:y1,x0:x1]-FILL).sum(2)<=10)
    ys,xs=np.nonzero(near); pts=np.stack([xs[::7]+x0,ys[::7]+y0],1)
    h=hull(pts)
    shape=Image.new('L',im.size,0); d=ImageDraw.Draw(shape)
    if radius:
        bx=[min(p[0] for p in h),min(p[1] for p in h),max(p[0] for p in h),max(p[1] for p in h)]
        d.rounded_rectangle([bx[0]+shrink,bx[1]+shrink,bx[2]-shrink,bx[3]-shrink],radius=radius,fill=255)
    else:
        d.polygon(h,fill=255)
        if shrink>0: shape=shape.filter(ImageFilter.MinFilter(2*shrink+1))
    for kind,*c in protect:
        if kind=='c': cx,cy,r=c; d.ellipse([cx-r,cy-r,cx+r,cy+r],fill=0)
    shape=shape.filter(ImageFilter.GaussianBlur(1.2))
    sa=np.asarray(shape).copy()
    for kind,*c in protect:
        if kind=='r':
            rx0,ry0,rx1,ry1,_=c
            keep=(np.abs(a[ry0:ry1,rx0:rx1]-FILL).sum(2)>30)
            k=Image.fromarray((keep*255).astype('uint8')).filter(ImageFilter.MaxFilter(3)).filter(ImageFilter.GaussianBlur(1))
            sa[ry0:ry1,rx0:rx1]=np.minimum(sa[ry0:ry1,rx0:rx1],255-np.asarray(k))
    shape=Image.fromarray(sa)
    bb=shape.getbbox()
    ph=ImageOps.fit(Image.open('photos/'+photo+'.jpg').convert('RGB'),(bb[2]-bb[0],bb[3]-bb[1]),Image.LANCZOS,centering=focus)
    big=im.copy(); big.paste(ph,bb[:2])
    Image.composite(big,im,shape).save('real/'+out+'.png')
    return h
fill_photo('11b_menu_autocolantes.png','home',(222,420,946,1046),'couple_trees',(0.5,0.35),
           [('c',187,461,80),('c',975,556,80)])
fill_photo('11_casal_casamento.png','casamento',(150,186,1020,828),'couple_field',(0.5,0.45),
           [('c',224,270,50),('c',260,636,66),('r',590,200,1000,330,40),('r',346,722,830,840,44)],radius=58)

def avatar(src_png, out, cx, cy, r, photo):
    im=Image.open(src_png).convert('RGB')
    ph=ImageOps.fit(Image.open('photos/'+photo+'.jpg').convert('RGB'),(2*r,2*r),Image.LANCZOS,centering=(0.5,0.4))
    m=Image.new('L',(8*r,8*r),0); ImageDraw.Draw(m).ellipse([0,0,8*r-1,8*r-1],fill=255); m=m.resize((2*r,2*r),Image.LANCZOS)
    im.paste(ph,(cx-r,cy-r),m); im.save(out)
avatar(SH+'20_casal_conversa.png','real/conversa.png',312,90,61,'house')
avatar(SH+'30_parceiro_painel.png','real/painel.png',135,125,38,'house')
import shutil
for s,d in [('15_casal_convidados','convidados'),('17_casal_lugares','lugares'),('14_casal_orcamento','orcamento'),('50_convidado_inicio','convidado_inicio'),('54_convidado_detalhes','convidado_programa'),('12_casal_tarefas','tarefas'),('37_parceiro_pagamentos','pagamentos'),('33_parceiro_mensagens','mensagens'),('77_sub_tua_mesa','tua_mesa'),('53_convidado_presentes','presentes')]:
    shutil.copy(SH+s+'.png','real/'+d+'.png')

fill_photo('11c_menu_mural.png','mural',(240,330,930,1010),'couple_kiss',(0.5,0.3),[],fill=(250,230,236))
fill_photo('11d_menu_estendal.png','estendal',(255,430,920,1075),'couple_sky',(0.5,0.35),[],fill=(220,232,240))
fill_photo('11f_menu_classico_pastel.png','pastel',(150,186,1020,828),'couple_shore',(0.5,0.4),
           [('c',224,270,50),('c',260,636,66),('r',590,200,1000,330,40),('r',346,722,830,840,44)],radius=58,fill=(231,240,248))

# Variantes do menu (4 estilos x 4 cores), com a mesma foto por estilo.
import os as _os
GEO = {
    'classic':     dict(box=(150,186,1020,828), sample=(300,300), photo='couple_field', focus=(0.5,0.45), radius=58,
                        protect=[('c',224,270,50),('c',260,636,66),('r',590,200,1000,330,40),('r',346,722,830,840,44)]),
    'stickers':    dict(box=(222,420,946,1046), sample=(330,500), photo='couple_trees', focus=(0.5,0.35), radius=0,
                        protect=[('c',187,461,80),('c',975,556,80)]),
    'mural':       dict(box=(240,330,930,1010), sample=(300,420), photo='couple_kiss', focus=(0.5,0.3), radius=0, protect=[]),
    'clothesline': dict(box=(255,430,920,1075), sample=(320,520), photo='couple_sky', focus=(0.5,0.35), radius=0, protect=[]),
}
for lay, g in GEO.items():
    for col in ['eucalyptus','pink','blue','gold']:
        src = f'90_menu_{lay}_{col}.png'
        if not _os.path.exists(SH+src): continue
        fillc = Image.open(SH+src).convert('RGB').getpixel(g['sample'])
        fill_photo(src, f'v_{lay}_{col}', g['box'], g['photo'], g['focus'], g['protect'], radius=g['radius'], fill=fillc)

# Parceiros (lista real) com fotos nos destaques e nas linhas.
def multi_fill(src, out, jobs):
    import shutil
    shutil.copy(SH+src, SH+'_mf.png')
    for box, photo, focus, protect in jobs:
        fillc = Image.open(SH+'_mf.png').convert('RGB').getpixel(((box[0]+box[2])//2 - 100, (box[1]+box[3])//2 + 60))
        fill_photo('_mf.png', '_tmp', box, photo, focus, protect, fill=fillc, shrink=0)
        shutil.copy('real/_tmp.png', SH+'_mf.png')
    shutil.copy(SH+'_mf.png', 'real/'+out+'.png')
multi_fill('18_casal_parceiros.png', 'parceiros', [
    ((84,700,532,1000), 'mansion_flowers', (0.5,0.5), [('r',100,725,256,806,20)]),
    ((564,700,1012,1000), 'flower_decor', (0.5,0.5), [('r',580,725,736,806,20)]),
    ((108,1428,348,1666), 'mansion_flowers', (0.5,0.5), []),
    ((108,1746,348,1986), 'flower_decor', (0.5,0.5), []),
])

# Publicações (real) com a foto e os avatares
fill_photo('91_publicacoes.png', 'publicacoes', (60,474,1110,1785), 'toast', (0.5,0.5), [], radius=66, fill=(221,229,211))
avatar('real/publicacoes.png', 'real/publicacoes.png', 114, 384, 50, 'couple_road')
avatar('real/publicacoes.png', 'real/publicacoes.png', 114, 2469, 50, 'couple_sky')

# Perfil do parceiro (página inteira, design novo): foto no topo, por baixo do painel branco.
def profile_photo(src, out, photo, panel_top=738, panel_r=72, buttons=((114,100,68),(1055,100,68))):
    im=Image.open(SH+src).convert('RGB')
    W=im.width
    m=Image.new('L',im.size,0); d=ImageDraw.Draw(m)
    d.rectangle([0,0,W,panel_top+panel_r],fill=255)
    d.rounded_rectangle([0,panel_top,W,panel_top+4*panel_r],radius=panel_r,fill=0)
    for cx,cy,r in buttons: d.ellipse([cx-r,cy-r,cx+r,cy+r],fill=0)
    m=m.filter(ImageFilter.GaussianBlur(1.2))
    ph=ImageOps.fit(Image.open('photos/'+photo+'.jpg').convert('RGB'),(W,panel_top+panel_r),Image.LANCZOS,centering=(0.5,0.5))
    # escurece levemente o topo, como na app (legibilidade dos botões)
    g=Image.linear_gradient('L').resize((W,panel_top+panel_r)).point(lambda v: max(0,90-v))
    ph=Image.composite(Image.new('RGB',ph.size,(0,0,0)),ph,g)
    big=im.copy(); big.paste(ph,(0,0))
    Image.composite(big,im,m).save('real/'+out+'.png')
profile_photo('27_casal_parceiro_folha.png','perfil_parceiro','mansion_flowers')
