((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,L,E,M,N,B={
doU(){var x,w=$.OR(),v=J.nh(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aT(C.i.hK(w.qN(256),16),2,"0")
return C.e.io(v)},
aQp(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aQp=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.R()
q=r.b
q===$&&A.b()
q=q.gbG().e.a
u=(q==null?null:q.r).a
t=C.f.n(e,".")?C.e.ga3(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.doU()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.S("chat-attachments")
x=3
return A.d(q.r_(s,d,new A.uj(!1,f)),$async$aQp)
case 3:r=r.b.ay
r===$&&A.b()
v=r.S("chat-attachments").BX(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aQp,w)},
cXX(d){var x,w=C.e.ga3(d.split(".")).toLowerCase()
A:{if("jpg"===w||"jpeg"===w){x="image/jpeg"
break A}if("png"===w){x="image/png"
break A}if("gif"===w){x="image/gif"
break A}if("webp"===w){x="image/webp"
break A}if("heic"===w){x="image/heic"
break A}if("pdf"===w){x="application/pdf"
break A}if("doc"===w){x="application/msword"
break A}if("docx"===w){x="application/vnd.openxmlformats-officedocument.wordprocessingml.document"
break A}if("xls"===w){x="application/vnd.ms-excel"
break A}if("xlsx"===w){x="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
break A}x="application/octet-stream"
break A}return x},
qW(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$qW=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bG(null,new B.cyw(),d,!0,!1,null,l),$async$qW)
case 3:k=f
if(k==null||d.e==null){v=null
x=1
break}case 4:switch(k){case"photo":x=6
break
case"file":x=7
break
case"sticker":x=8
break
case"gif":x=9
break
default:x=5
break}break
case 6:x=10
return A.d(new A.lK().XT(85,2048,C.fF),$async$qW)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kD(),$async$qW)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.fl(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aQp(t,s,B.cXX(s)),$async$qW)
case 12:v=new j.Hj(f,r,s)
x=1
break
case 7:x=13
return A.d($.d0v().xI(D.bwL,null,null),$async$qW)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kD(),$async$qW)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.R(y.q).f.a7(D.bVb)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.cg(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbq_(p))
if(C.f.fl(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aQp(t,l,B.cXX(l)),$async$qW)
case 15:v=new j.Hj(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bG(null,new B.cyx(),d,!0,!1,null,l),$async$qW)
case 16:n=f
v=n==null?null:new B.Hj("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bG(null,new B.cyy(),d,!0,!0,null,l),$async$qW)
case 17:m=f
v=m==null?null:new B.Hj(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$qW,w)},
Hj:function Hj(d,e,f){this.a=d
this.b=e
this.c=f},
cyw:function cyw(){},
cyx:function cyx(){},
cyy:function cyy(){},
MB:function MB(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bCt:function bCt(d,e){this.a=d
this.b=e},
Xv:function Xv(d){this.a=d},
ckZ:function ckZ(d,e){this.a=d
this.b=e},
Na:function Na(d){this.a=d},
abx:function abx(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bQE:function bQE(d){this.a=d},
bQF:function bQF(d,e){this.a=d
this.b=e},
bQG:function bQG(d){this.a=d},
bQH:function bQH(d){this.a=d},
bQJ:function bQJ(d){this.a=d},
bQI:function bQI(d,e,f){this.a=d
this.b=e
this.c=f},
PI:function PI(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aVH:function aVH(d,e){this.a=d
this.b=e},
aVE:function aVE(d){this.a=d},
aVG:function aVG(d){this.a=d},
aVF:function aVF(d){this.a=d},
aVI:function aVI(d){this.a=d},
dhm(d){return new B.vo(d,A.A(y.N,y.F),new A.ah(A.iM(0,0),0,!1))},
cL7(d){var x,w=J.a5(d)
if(w.gY(d))return null
x=w.dA(d,new B.cDS(),y.N).bB(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
vo:function vo(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bxz:function bxz(){},
bxA:function bxA(d){this.a=d},
bxx:function bxx(){},
bxy:function bxy(){},
bxB:function bxB(d,e){this.a=d
this.b=e},
bxC:function bxC(d){this.a=d},
bxw:function bxw(d){this.a=d},
bxF:function bxF(){},
bxG:function bxG(){},
bxD:function bxD(){},
bxE:function bxE(){},
cDS:function cDS(){},
Yp(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$Yp=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.R(y.q).f.a7(D.bUG)
x=1
break}x=3
return A.d(A.bG(null,new B.cDj(A.fu(h,0,A.ij(12,"count",y.r),A.a6(h).c).bB(0)),d,!0,!0,null,y.C),$async$Yp)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(L.vL(d,e,f,u.c,u.d,g,t),$async$Yp)
case 4:case 1:return A.l(v,w)}})
return A.m($async$Yp,w)},
Am:function Am(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cDj:function cDj(d){this.a=d},
cDi:function cDi(d,e){this.a=d
this.b=e},
cFE(d,e,f,g,h,i,j){return new B.ala(f,d,i,j,g,h,e,null)},
ala:function ala(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aVO:function aVO(){},
aVL:function aVL(d){this.a=d},
aVN:function aVN(d){this.a=d},
aVM:function aVM(){},
cO_(d){var x,w,v,u
for(x=new A.c2(d),w=y.V,x=new A.ao(x,x.gA(0),w.i("ao<T.E>")),w=w.i("T.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bBc[C.i.an(v,5)]},
yO:function yO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
PJ:function PJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aVJ:function aVJ(d,e){this.a=d
this.b=e},
aVK:function aVK(d,e){this.a=d
this.b=e},
PL:function PL(d,e){this.c=d
this.a=e},
bhJ:function bhJ(d,e){this.a=d
this.b=e},
aTF:function aTF(){},
aTG:function aTG(){},
aiT:function aiT(){},
Hp:function Hp(){},
aWg:function aWg(d,e){this.a=d
this.b=e},
a9Q:function a9Q(){},
cRt(d,e,f,g,h,i,j,k){return new B.a33(A.dsp(B.dt2(),i,j),d,g,h,e,A.aim(e),f,i.i("@<0>").b6(j).b6(k).i("a33<1,2,3>"))},
bdF(d,e,f,g,h,i,j,k,l,m){return new A.x2(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("x2<1,2>"))},
a33:function a33(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,O,P,Q,R,S,T,U,F
J=c[1]
A=c[0]
C=c[2]
G=c[191]
H=c[367]
I=c[167]
K=c[309]
L=c[148]
E=c[240]
M=c[407]
N=c[433]
B=a.updateHolder(c[114],B)
D=c[248]
O=c[380]
P=c[363]
Q=c[382]
R=c[398]
S=c[402]
T=c[405]
U=c[432]
F=c[318]
B.Hj.prototype={
gar(d){return this.c}}
B.MB.prototype={
u(d){var x=null,w=A.X(18),v=A.X(18)
return A.eJ(!1,w,!0,new A.V(C.h6,A.G(A.a([A.F(x,A.b6(this.c,$.an,x,x,26),C.r,x,x,new A.M(C.af,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.aD,A.i(this.d,x,x,x,C.oe,x,x,x)],y.p),C.x,C.l,C.U,0,C.w),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bCt(this,d),x,x,x,x,x,x,x)}}
B.Xv.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bux[x]
v=new A.aY(14,14)
s.push(A.eJ(!1,new A.c_(v,v,v,v),!0,new A.V(C.pK,A.apk(w,C.hy,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.ckZ(d,w),u,u,u,u,u,u,u))}return new A.V(D.arp,A.G(A.a([D.c97,C.V,A.Rb(1,s,4,8,8,u,C.eE,!0)],t),C.J,C.l,C.U,0,C.w),u)}}
B.Na.prototype={
P(){return new B.abx(new A.aG(C.al,$.ad()),D.bx8)}}
B.abx.prototype={
aj(){this.aH()
this.HB("")},
m(){var x=this.d
x.a0$=$.ad()
x.V$=0
this.a8()},
HB(d){return this.bdL(d)},
bdL(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HB=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bQE(s))
v=3
m=C.f.D(d)
l=m.length===0
r=l?"trending":"search"
k=A.q(r)
q=A.A(y.N,y.z)
J.ba(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.ba(q,"limit","24")
J.ba(q,"rating","pg")
l=!l
if(l)J.ba(q,"q",m)
if(l)J.ba(q,"lang","pt")
p=A.agA("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aQI(p,null),$async$HB)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bm.jK(0,A.j2(A.j0(q.e)).bF(0,q.w),null)),"data"))
s.q(new B.bQF(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.q(new B.bQG(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.bQH(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HB,w)},
u(d){var x=this,w=null,v=A.au(d,w,y.w).w,u=A.cR(w,C.a7,!1,w,!0,C.z,w,A.cS(),x.d,w,w,w,w,w,2,D.aCY,C.a2,!0,w,!0,w,!1,w,C.aM,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaRy(),w,!1,w,w,!1,w,!0,w,C.aB,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.at,w,C.b9,w,C.rx,w,w),t=x.r
if(t!=null)t=A.bT(A.i(t,w,w,w,C.hr,C.a5,w,w),w,w)
else t=x.f?C.bo:G.a10(w,C.a2,U.a78,new B.bQJ(x),x.e.length,w,w,!1)
return A.aM(new A.V(D.arm,A.G(A.a([u,C.a8,A.a9(t,1),C.aD,D.abP],y.p),C.J,C.l,C.q,0,C.w),w),v.a.b*0.62,w)}}
B.PI.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.au(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b3(s.c,"asset:"))return A.apk(C.f.bJ(s.c,6),C.hy,120,120)
if(p==="image"||p==="gif")return A.dH(r,A.eV(A.X(16),new A.ee(new A.aL(0,q,0,320),A.kf(s.c,new B.aVF(q),C.bW,r,new B.aVG(q),r,r),r),C.aN),C.a2,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aVH(s,d),r,r,r,r,r,r,!1,C.bd)
p=A.X(16)
x=s.f
w=x?$.an:C.af
v=A.X(16)
u=A.b6(N.NJ,x?C.u:$.an,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.X,r,A.aH(r,r,x?C.u:C.A,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eJ(!1,p,!0,A.F(r,A.Y(A.a([u,C.ay,new A.ef(1,C.bC,t,r),C.bp,A.b6(K.uS,x?C.u:C.Q,r,r,18)],y.p),C.x,C.l,C.U,0,r,r),C.r,r,new A.aL(0,q,0,1/0),new A.M(w,r,r,v,r,r,C.y),r,r,r,D.aqU,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aVI(s),r,r,r,r,r,r,r)},
gar(d){return this.e}}
B.vo.prototype={
cT(){var x=this,w=y.T,v=A.es(x).L(A.cG($.b7(),new B.bxz(),y.D,w),w)
A.es(x).aac(new B.bxA(x))
if(v==null)return C.a7
w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.a7_(0,"typing:"+x.x,C.a5o).buY(new B.bxB(x,v),"typing")
w.adN(0)
x.y=w
x.Q=A.xM(C.h2,new B.bxC(x))
return C.a7},
aj2(){var x,w=this,v=w.z
v.eb(v,new B.bxw(new A.ah(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c9(v,v.r,v.e,A.u(v).i("c9<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aU(w.ga2(0))||!C.e.eh(x,J.d5u(w.ga2(0))))w.sa2(0,x)},
abz(d){var x,w=this,v=w.y,u=A.es(w).a1(0,$.b7(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ah(Date.now(),0,!1)
if(x.dd(w.as).a<2e6)return
w.as=x
v.ad7(0,"typing",A.Q(["id",t,"name",d],y.N,y.z),C.FP).cA(new B.bxF(),new B.bxG(),y.H)},
fQ(d){var x=this.y,w=A.es(this).a1(0,$.b7(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ah(A.iM(0,0),0,!1)
x.ad7(0,"typing",A.Q(["id",v,"stop",!0],y.N,y.z),C.FP).cA(new B.bxD(),new B.bxE(),y.H)}}
B.Am.prototype={}
B.ala.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.dL(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.X,r,M.Hk,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.X,r,A.aH(r,r,s.f?C.dY:C.Q,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.Y(A.a([q,C.ax,A.a9(A.G(w,C.J,C.l,C.U,0,C.w),1)],x),C.x,C.l,C.q,0,r,r)
q=A.a([new A.cO(0,C.bh,C.A.c4(0.06),C.xf,14)],y.E)
w=A.au(d,C.bb,y.w).w
v=new B.aVO().$3(O.Dp,"Voltar",new B.aVL(d))
t=s.r
v=A.a([v,C.ax,A.a9(t==null?u:A.b0(u,t,r),1)],x)
C.e.p(v,A.a([C.ay,A.Jb(A.F(C.O,Q.P1,C.r,r,r,C.fX,r,44,r,r,r,r,44),r,new B.aVM(),new B.aVN(s),r,D.bMx,"Mais op\xe7\xf5es",y.N)],x))
return A.F(r,A.G(A.a([A.Y(v,C.x,C.l,C.q,0,r,r)],x),C.I,C.l,C.U,0,C.w),C.r,r,r,new A.M(C.u,r,r,r,q,r,C.y),r,r,r,new A.a0(16,w.r.b+10,16,12),r,r,r)},
gar(d){return this.c}}
B.yO.prototype={
u(d){var x=null,w=A.au(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.A:C.u,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.V(E.LT,A.i(v,x,x,x,A.aH(x,x,B.cO_(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,A.aH(x,x,s?C.u:C.A,x,x,x,x,x,x,x,x,15,x,x,C.bg,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ee(new A.aL(0,w.a.a*0.78,0,1/0),A.F(x,A.G(o,C.J,C.l,C.U,0,C.w),C.r,x,x,new A.M(r,x,x,new A.c_(F.xF,F.xF,new A.aY(q,q),new A.aY(p,p)),x,x,C.y),x,x,x,new A.a0(14,t,14,10),x,x,x),x)}}
B.PJ.prototype={
agR(d){if(!A.tA(this.c.a.a)){d.R(y.q).f.a7(D.bUV)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.p(u,A.a([A.b0(A.F(C.O,D.aFX,C.r,w,w,C.fX,w,44,w,w,w,w,44),x.e,w),C.ay],v))
v=A.X(999)
u.push(A.a9(A.F(C.bU,A.cR(w,C.a7,!1,w,!0,C.z,w,A.cS(),x.c,w,w,w,w,w,2,A.j7(w,C.ct,w,C.Z,w,w,w,w,!0,C.ct,w,w,w,w,w,w,!1,w,w,w,w,C.ct,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a2,!0,w,!0,w,!1,w,C.aM,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aVJ(x,d),w,!1,w,w,!1,w,!0,w,C.aB,w,w,w,w,w,w,w,w,w,w,w,C.hP,!0,C.at,w,C.b9,w,C.a84,w,w),C.r,w,w,new A.M(C.af,w,w,v,w,w,C.y),w,44,w,C.bP,w,w,w),1))
u.push(C.ay)
u.push(A.b0(A.F(C.O,D.aFZ,C.r,w,w,C.mh,w,44,w,w,w,w,44),new B.aVK(x,d),w))
return A.F(w,A.bA(!0,new A.V(S.Ma,A.Y(u,C.x,C.l,C.q,0,w,w),w),w,R.LU,!1),C.r,C.u,w,w,w,w,w,w,w,w,w)}}
B.PL.prototype={
u(d){var x=null,w=this.c
return A.cFm(C.fo,w==null?D.bTF:new A.V(D.art,A.bT(A.i(w,x,x,x,C.hR,x,x,x),x,x),x),C.cl,C.az)}}
B.bhJ.prototype={
H(){return"PopupMenuPosition."+this.b}}
B.aTF.prototype={
$1(d){return A.lR(d,null,!0,null,null,y.S,y.z)},
gVY(d){return D.afD},
awG(d,e,f,g,h){return this.gVY(this).$3$1(e,f,g,h)}}
B.aTG.prototype={
$3$1(d,e,f,g){return B.cRt(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.aiT.prototype={}
B.Hp.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.aWg(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.a9Q.prototype={}
B.a33.prototype={}
var z=a.updateTypes(["Xv(N)","Na(N)","E<~>(c)","t<c>()","vo(c)","x2<0^,1^>(0^(){$allTransitiveDependencies!y<fT>?,argument!J?,dependencies!y<fT>?,from!ks?,isAutoDispose!z,name!c?,retry!bn?(v,J)?})<eY<1^>,J?>"])
B.cyw.prototype={
$1(d){var x=null,w=y.p
return new A.V(D.arZ,A.G(A.a([A.Y(A.a([new B.MB(C.k3,"Foto","photo",x),new B.MB(D.aA4,"Ficheiro","file",x),new B.MB(T.k_,"Sticker","sticker",x),new B.MB(D.azW,"GIF","gif",x)],w),C.x,C.EZ,C.q,0,x,x)],w),C.x,C.l,C.U,0,C.w),x)},
$S:102}
B.cyx.prototype={
$1(d){return D.cki},
$S:z+0}
B.cyy.prototype={
$1(d){return D.chB},
$S:z+1}
B.bCt.prototype={
$0(){return A.av(this.b,!1).aC(this.a.e)},
$S:0}
B.ckZ.prototype={
$0(){return A.av(this.a,!1).aC(this.b)},
$S:0}
B.bQE.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bQF.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bw(this.b,y.P),v=A.u(w),w=new A.ao(w,w.gA(w),v.i("ao<T.E>")),u=y.f,v=v.i("T.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bS(s,new A.ab(A.a2(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a2(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bQG.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bQH.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bQJ.prototype={
$2(d,e){var x=null,w=this.a
return A.eJ(!1,x,!0,A.eV(A.X(10),A.kf(w.e[e].a,x,C.bW,x,x,x,x),C.aN),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bQI(w,d,e),x,x,x,x,x,x,x)},
$S:440}
B.bQI.prototype={
$0(){return A.av(this.b,!1).aC(this.a.e[this.c].b)},
$S:0}
B.aVH.prototype={
$0(){var x=y.H
return A.av(this.b,!1).i0(A.rQ(new B.aVE(this.a),null,x),x)},
$S:0}
B.aVE.prototype={
$1(d){var x=null
return A.kd(A.cFo(C.ak,x,C.u,x),C.ak,A.bT(I.cGR(C.Z,A.zB(this.a.c,x,x,!1,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1259}
B.aVG.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:169}
B.aVF.prototype={
$3(d,e,f){var x=null
return A.F(x,D.aBL,C.r,C.af,x,x,x,120,x,x,x,x,this.a)},
$S:60}
B.aVI.prototype={
$0(){return A.BD(A.dm(this.a.c,0,null),C.vc,null)},
$S:0}
B.bxz.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
B.bxA.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aV(0)
x=w.y
w.y=null
if(x!=null){w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.G9(x).cA(new B.bxx(),new B.bxy(),y.H)}},
$S:0}
B.bxx.prototype={
$1(d){},
$S:108}
B.bxy.prototype={
$1(d){},
$S:14}
B.bxB.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.ei(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.L(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.L(t.h(0,"name"))
x=u==null?null:C.f.D(u)
u=this.a
w=u.z
if(J.p(t.h(0,"stop"),!0))w.J(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.ab(v,new A.ah(Date.now(),0,!1).eY(5e6)))}u.aj2()},
$S:228}
B.bxC.prototype={
$1(d){return this.a.aj2()},
$S:65}
B.bxw.prototype={
$2(d,e){return e.b.f0(this.a)},
$S:1261}
B.bxF.prototype={
$1(d){},
$S:176}
B.bxG.prototype={
$1(d){},
$S:14}
B.bxD.prototype={
$1(d){},
$S:176}
B.bxE.prototype={
$1(d){},
$S:14}
B.cDS.prototype={
$1(d){return C.e.gN(d.split(" "))},
$S:23}
B.cDj.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v]
t=C.f.D(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.X,r,C.Hi,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r)
p.push(A.iS(!1,C.Z,r,r,!0,r,r,r,!0,r,D.aBx,r,r,r,r,new B.cDi(d,u),!1,r,r,r,r,r,s,r,t,r,E.Ob,r))}return A.bA(!0,new A.V(D.arq,A.G(A.a([D.ca8,C.au,D.c56,C.a1,new A.ef(1,C.bC,A.d2(p,r,r,r,r,!1,C.a0,!0),r)],q),C.J,C.l,C.U,0,C.w),r),r,C.Z,!0)},
$S:50}
B.cDi.prototype={
$0(){return A.av(this.a,!1).aC(this.b)},
$S:0}
B.aVO.prototype={
$3(d,e,f){var x=null
return A.jx(A.b0(A.F(C.O,d,C.r,x,x,C.fX,x,44,x,x,x,x,44),f,x),x,e)},
$S:1262}
B.aVL.prototype={
$0(){return A.av(this.a,!1).lf()},
$S:0}
B.aVN.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.aVM.prototype={
$1(d){return D.bvp},
$S:61}
B.aVJ.prototype={
$1(d){return this.a.agR(this.b)},
$S:3}
B.aVK.prototype={
$0(){return this.a.agR(this.b)},
$S:0}
B.aWg.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Hp.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.abx.prototype,"gaRy","HB",2)
w(B,"dtU","dhm",4)
v(B.vo.prototype,"gib","cT",3)
u(B,"dt2",1,function(){return{$allTransitiveDependencies:C.cB,argument:C.cB,dependencies:C.cB,from:C.cB,isAutoDispose:C.cB,name:C.cB,retry:C.cB}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bdF",function(d,e,f,g,h,i,j,k){return B.bdF(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bdF(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bdF(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.J,[B.Hj,B.Am,B.aTF,B.aTG,B.aiT])
w(A.bv,[B.cyw,B.cyx,B.cyy,B.aVE,B.aVG,B.aVF,B.bxz,B.bxx,B.bxy,B.bxB,B.bxC,B.bxF,B.bxG,B.bxD,B.bxE,B.cDS,B.cDj,B.aVO,B.aVN,B.aVM,B.aVJ])
w(A.O,[B.MB,B.Xv,B.PI,B.ala,B.yO,B.PJ,B.PL])
w(A.bN,[B.bCt,B.ckZ,B.bQE,B.bQF,B.bQG,B.bQH,B.bQI,B.aVH,B.aVI,B.bxA,B.cDi,B.aVL,B.aVK,B.aWg])
v(B.Na,A.I)
v(B.abx,A.a1)
w(A.cM,[B.bQJ,B.bxw])
v(B.vo,A.eY)
v(B.bhJ,A.fv)
v(B.a9Q,A.ks)
v(B.Hp,B.a9Q)
v(B.a33,B.Hp)
x(B.a9Q,B.aiT)})()
A.bt(b.typeUniverse,JSON.parse('{"Xv":{"O":[],"e":[],"f":[]},"Na":{"I":[],"e":[],"f":[]},"MB":{"O":[],"e":[],"f":[]},"abx":{"a1":["Na"]},"PI":{"O":[],"e":[],"f":[]},"vo":{"eY":["t<c>"]},"ala":{"O":[],"e":[],"f":[]},"yO":{"O":[],"e":[],"f":[]},"PJ":{"O":[],"e":[],"f":[]},"PL":{"O":[],"e":[],"f":[]},"Hp":{"ks":[],"fT":[],"FX":[],"lm":[]},"a33":{"Hp":["1","2","2","3","2","x2<1,2>"],"ks":[],"fT":[],"FX":[],"lm":[],"Hp.0":"1"}}'))
A.Oe(b.typeUniverse,JSON.parse('{"aiT":5,"a9Q":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cw"),V:x("c2"),E:x("r<cO>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("dk"),S:x("eY<@>"),F:x("+(c,ah)"),C:x("Am"),N:x("c"),q:x("dF"),z:x("@"),r:x("v"),B:x("Hj?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c3W=new A.B("Powered by GIPHY",null,H.Hh,null,null,null,null,null,null,null,null)
D.abP=new A.dN(C.eO,null,null,D.c3W,null)
D.Jr=new B.aTF()
D.afD=new B.aTG()
D.aqU=new A.a0(12,10,14,10)
D.arm=new A.a0(16,16,16,12)
D.arp=new A.a0(16,16,16,24)
D.arq=new A.a0(16,16,16,8)
D.art=new A.a0(16,2,16,8)
D.arZ=new A.a0(20,18,20,24)
D.azW=new A.aQ(57404,"HeroiconsSolid",null,!1)
D.aA4=new A.aQ(57436,"HeroiconsSolid",null,!1)
D.aBx=new A.b5(C.hD,null,C.Q,null,null,null)
D.aBL=new A.b5(C.k3,null,C.Q,null,null,null)
D.aAL=new A.b5(C.uX,null,null,null,null,null)
D.aCY=new A.e4(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aAL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aFX=new A.k9("M12 5v14M5 12h14",20,C.A,2.4,!1,C.cb,null)
D.aFZ=new A.k9("M12 19V5M5 12l7-7 7 7",18,C.u,2.4,!1,C.cb,null)
D.bux=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bMs=new A.jv("report",!0,P.a9o,null,A.w("jv<c>"))
D.bvp=x([D.bMs],A.w("r<p6<c>>"))
D.bwL=x([],A.w("r<cV2>"))
D.bx8=x([],y.L)
D.al8=new A.P(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.am_=new A.P(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.an4=new A.P(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.alx=new A.P(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bBc=x([D.al8,C.dY,D.am_,D.an4,D.alx],A.w("r<P>"))
D.bMx=new B.bhJ(1,"under")
D.bTF=new A.cd(1/0,null,null,null)
D.cak=new A.B("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bUG=new A.bX(D.cak,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.cbg=new A.B("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bUV=new A.bX(D.cbg,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.c9P=new A.B("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bVb=new A.bX(D.c9P,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.c56=new A.B("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.a6,null,null,null,null,null,null,null,null)
D.c97=new A.B("Stickers",null,C.aH,null,null,null,null,null,null,null,null)
D.ca8=new A.B("Que mensagem queres denunciar?",null,C.eL,null,null,null,null,null,null,null,null)
D.chB=new B.Na(null)
D.cki=new B.Xv(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dHI","BS",()=>D.Jr.awG(0,B.dtU(),A.w("vo"),A.w("t<c>"),y.N))})()};
(a=>{a["rEaifa6jCTFvEK7/hphTkzkgPNM="]=a.current})($__dart_deferred_initializers__);