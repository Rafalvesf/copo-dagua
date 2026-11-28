((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var B,A,G,C={
cEz(d){return A.f.aT(A.j.k(B.aD(d)),2,"0")+"/"+A.f.aT(A.j.k(B.aw(d)),2,"0")+"/"+B.aL(d)},
dNF(d){var x,w,v=A.j.aO(new B.ad(Date.now(),0,!1).cf(d).a,864e8)
if(v<30)return"conta h\xe1 "+(v<1?1:v)+" dias"
if(v<365)return"conta h\xe1 "+A.k.eN(v/30)+" meses"
x=A.k.eN(v/365)
w=x===1?"ano":"anos"
return"conta h\xe1 "+x+" "+w},
a8a:function a8a(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
bug:function bug(d,e){this.a=d
this.b=e},
aMd:function aMd(d,e,f){this.c=d
this.d=e
this.a=f},
aNL:function aNL(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aNM:function aNM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h}},D,H,I,E,K,F
B=c[0]
A=c[2]
G=c[242]
C=a.updateHolder(c[174],C)
D=c[236]
H=c[380]
I=c[195]
E=c[436]
K=c[185]
F=c[326]
C.a8a.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.c,h=k.f
if(h){x=B.a([C.dNF(i.as)],y.h)
w=i.at
if(w!=null)x.push("evento a "+C.cEz(w))
w=i.ax
if(w!=null&&w.length!==0)x.push(w)
w=i.ay
if(w!=null)x.push("~"+B.p(w)+" convidados")
v=A.e.a_(x," \xb7 ")}else if(k.x){x=B.a([],y.h)
w=i.ax
if(w!=null&&w.length!==0)x.push(A.e.gJ(w.split(", ")))
w=i.at
if(w==null)w=i.f
x.push(F.lO[B.aw(w)-1]+" "+B.aL(w))
x=A.e.a_(x," \xb7 ")
v=x}else{x=C.cEz(i.f)
v=x}x=k.x
w=x?A.i5:A.bp
u=x?A.mI:new B.J(A.t,j,j,B.W(22),j,j,A.x)
t=!h
s=t&&i.y!=null?new C.bug(d,i):j
r=i.z
q=h?44:40
p=y.e
o=B.a([new B.dg(1,A.bb,B.h(r,1,A.a1,j,j,A.a9,j,j),j)],p)
if(t&&i.y!=null)A.e.p(o,B.a([I.yK,D.OX],p))
s=B.a([B.a5(B.aV(B.O(B.a([new B.ch(r,q,i.Q,!1,!0,j),A.ae,B.a5(B.x(B.a([B.O(o,A.u,A.h,A.l,0,j),B.h(v,j,j,j,j,A.L,j,j)],p),A.G,A.h,A.l),1)],p),A.u,A.h,A.l,0,j),s,j),1)],p)
if(t)A.e.p(s,B.a([A.ac,new C.aMd(i.d,x,j)],p))
s=B.a([B.O(s,A.u,A.h,A.l,0,j)],p)
if(!t||i.x!=="published"){r=B.a([],p)
for(q=i.d,n=1;n<=5;++n)r.push(B.b9(n<=q?A.fw:A.el,D.M0,j,j,18))
if(h)A.e.p(r,B.a([A.ac,B.h(C.cEz(i.f),j,j,j,j,A.L,j,j)],p))
q=i.x
if(q!=="published"){q=q==="flagged"
o=q?A.bY.ce(0.12):A.a3
m=B.W(99)
l=q?"Denunciada":"Removida"
A.e.p(r,B.a([A.ac,B.w(j,B.h(l,j,j,j,j,B.aH(j,j,q?A.bY:A.W,j,j,j,j,j,j,j,j,10,j,j,A.F,j,j,!0,j,j,j,j,j,j,j,j),j,j),A.r,j,j,new B.J(o,j,j,m,j,j,A.x),j,j,j,D.NC,j,j,j)],p))}A.e.p(s,B.a([A.ad,B.O(r,A.u,A.h,A.l,0,j)],p))}r=i.e
if(r!=null&&A.f.B(r).length!==0){r=A.f.B(r)
q=x?A.it:A.au
A.e.p(s,B.a([A.ad,B.h(r,j,j,j,j,B.aH(j,j,x?A.z:A.co,j,j,j,j,j,j,j,j,14,j,j,A.bo,j,1.45,!0,j,j,j,j,j,j,j,j),q,j)],p))}r=i.r
q=r==null
if(!q&&A.f.B(r).length!==0){o=B.a([A.R],p)
x=x&&t
t=k.d
m=k.e
l=i.w
if(x)o.push(new C.aNM(t,m,A.f.B(r),l,j))
else o.push(new C.aNL(t,m,A.f.B(r),l,h,j))
A.e.p(s,o)}if(h)h=k.r!=null||k.w!=null
else h=!1
if(h){h=B.a([],p)
x=k.r
if(x!=null)h.push(new B.MG(q?"Responder":"Editar resposta",x,!0,j))
h.push(A.cl)
x=k.w
if(x!=null&&i.x==="published")h.push(B.aV(D.ceY,x,j))
A.e.p(s,B.a([A.R,B.O(h,A.u,A.h,A.l,0,j)],p))}return B.w(j,B.x(s,A.G,A.h,A.l),A.r,j,j,u,j,j,j,w,j,j,j)}}
C.aMd.prototype={
u(d){var x=null,w=this.d,v=K.TG("M12 2l3 6.5 7 .9-5.1 4.8 1.3 7L12 17.8 5.8 21.2l1.3-7L2 9.4l7-.9z",A.cE,w?A.z:A.ao1,!0,13,2),u=B.aK(x,x,w?4:3)
return B.O(B.a([v,u,B.h(""+this.c+",0",x,x,x,x,B.aH(x,x,A.z,x,x,x,x,x,x,x,x,w?12:13,x,x,A.F,x,x,!0,x,x,x,x,x,x,x,x),x,x)],y.e),A.u,A.h,A.J,0,x)}}
C.aNL.prototype={
u(d){var x=this,w=null,v=B.w(w,w,A.r,w,w,new B.J(D.ak0,w,w,B.W(2),w,w,A.x),w,w,D.atz,w,w,w,2),u=x.c,t=y.e,s=B.a([new B.dg(1,A.bb,B.h(x.r?"A tua resposta":u,1,A.a1,w,w,A.hR,w,w),w),A.bg,B.b9(A.ic,$.au,w,w,14)],t),r=x.f
if(r!=null)A.e.p(s,B.a([A.bg,B.h(C.cEz(r),w,w,w,w,H.Iq,w,w)],t))
return new B.Ar(B.O(B.a([v,B.a5(B.O(B.a([new B.ch(u,30,x.d,!1,!0,w),A.ac,B.a5(B.w(w,B.x(B.a([B.O(s,A.u,A.h,A.l,0,w),A.j9,B.h(x.e,w,w,w,w,D.c75,w,w)],t),A.G,A.h,A.l),A.r,w,w,D.afQ,w,w,w,D.ase,w,w,w),1)],t),A.G,A.h,A.l,0,w),1)],t),A.E,A.h,A.l,0,w),w)}}
C.aNM.prototype={
u(d){var x,w=this,v=null,u=B.W(18),t=w.c,s=y.e
t=B.a([B.O(B.a([new B.ch(t,24,w.d,!1,!0,v),A.ac,new B.dg(1,A.bb,B.h(t,1,A.a1,v,v,A.dR,v,v),v),A.bX6,B.b9(A.ic,$.au,"Verificado",v,16),A.ac,B.w(v,D.caN,A.r,v,v,new B.J(A.cz,v,v,B.W(999),v,v,A.x),v,v,v,A.D0,v,v,v)],s),A.u,A.h,A.l,0,v),A.aB,B.h(w.e,v,v,v,v,A.Il,A.it,v)],s)
x=w.f
if(x!=null)A.e.p(t,B.a([A.aB,B.h("Respondeu em "+F.lO[B.aw(x)-1]+" "+B.aL(x),v,v,v,v,A.bh,v,v)],s))
return B.w(v,B.x(t,A.G,A.h,A.l),A.r,v,v,new B.J(A.t,v,v,u,v,v,A.x),v,v,v,G.i7,v,v,1/0)}}
var z=a.updateTypes([])
C.bug.prototype={
$0(){return B.ae(this.a).ag("/u/"+B.p(this.b.y),null,y.a)},
$S:0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.L,[C.a8a,C.aMd,C.aNL,C.aNM])
w(C.bug,B.bL)})()
B.br(b.typeUniverse,JSON.parse('{"a8a":{"L":[],"e":[],"f":[]},"aMd":{"L":[],"e":[],"f":[]},"aNL":{"L":[],"e":[],"f":[]},"aNM":{"L":[],"e":[],"f":[]}}'))
var y={h:B.A("r<c>"),e:B.A("r<e>"),a:B.A("M?")};(function constants(){D.aew=new B.cz(A.fG,E.kO,E.kO,E.kO)
D.afQ=new B.J(A.a3,null,null,D.aew,null,null,A.x)
D.ak0=new B.Y(1,0.8941176470588236,0.8862745098039215,0.8627450980392157,A.C)
D.M0=new B.Y(1,0.9490196078431372,0.7019607843137254,0.23921568627450981,A.C)
D.ase=new B.a4(12,9,12,10)
D.atz=new B.a4(21,0,12,18)
D.NC=new B.a4(8,2,8,2)
D.OX=new B.b8(A.ig,14,A.W,null,null,null)
D.c75=new B.P(!0,A.z,null,null,null,null,12,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.caN=new B.D("Parceiro",null,A.hf,null,null,null,null,null,null,null)
D.ceY=new B.D("Denunciar",null,A.dR,null,null,null,null,null,null,null)})()};
(a=>{a["H/BKKVN2JxGh/MEKCv/hKH6GEi8="]=a.current})($__dart_deferred_initializers__);