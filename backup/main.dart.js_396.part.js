((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,H,I,K,L,F,M,N,O,P,B={
dce(){var x,w=$.N7(),v=J.m4(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aX(C.i.hX(w.t5(256),16),2,"0")
return C.e.im(v)},
aMF(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aMF=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Z()
q=r.b
q===$&&A.b()
q=q.gbK().e.a
u=(q==null?null:q.r).a
t=C.f.n(e,".")?C.e.ga4(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.dce()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.S("chat-attachments")
x=3
return A.d(q.qL(s,d,new A.ty(!1,f)),$async$aMF)
case 3:r=r.b.ay
r===$&&A.b()
v=r.S("chat-attachments").B4(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aMF,w)},
cMP(d){var x,w=C.e.ga4(d.split(".")).toLowerCase()
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
qv(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$qv=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.cb(null,new B.co8(),d,!0,!1,null,l),$async$qv)
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
return A.d(new A.ln().W3(85,2048,C.fA),$async$qv)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.ks(),$async$qv)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.hL(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aMF(t,s,B.cMP(s)),$async$qv)
case 12:v=new j.FZ(f,r,s)
x=1
break
case 7:x=13
return A.d($.cQ4().x5(D.bqH,null,null),$async$qv)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.ks(),$async$qv)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.T(y.q).f.af(D.bOe)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.cl(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbl_(p))
if(C.f.hL(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aMF(t,l,B.cMP(l)),$async$qv)
case 15:v=new j.FZ(f,r,l)
x=1
break
case 8:x=16
return A.d(A.cb(null,new B.co9(),d,!0,!1,null,l),$async$qv)
case 16:n=f
v=n==null?null:new B.FZ("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.cb(null,new B.coa(),d,!0,!0,null,l),$async$qv)
case 17:m=f
v=m==null?null:new B.FZ(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$qv,w)},
FZ:function FZ(d,e,f){this.a=d
this.b=e
this.c=f},
co8:function co8(){},
co9:function co9(){},
coa:function coa(){},
L6:function L6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bx_:function bx_(d,e){this.a=d
this.b=e},
Vq:function Vq(d){this.a=d},
cbb:function cbb(d,e){this.a=d
this.b=e},
LB:function LB(d){this.a=d},
a9_:function a9_(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bJH:function bJH(d){this.a=d},
bJI:function bJI(d,e){this.a=d
this.b=e},
bJJ:function bJJ(d){this.a=d},
bJK:function bJK(d){this.a=d},
bJM:function bJM(d){this.a=d},
bJL:function bJL(d,e,f){this.a=d
this.b=e
this.c=f},
NS:function NS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aRy:function aRy(d,e){this.a=d
this.b=e},
aRv:function aRv(d){this.a=d},
aRx:function aRx(d){this.a=d},
aRw:function aRw(d){this.a=d},
aRz:function aRz(d){this.a=d},
d5k(d){return new B.ur(d,A.B(y.N,y.F),new A.an(A.iC(0,0),0,!1))},
cAq(d){var x,w=J.a3(d)
if(w.gZ(d))return null
x=w.dv(d,new B.cti(),y.N).bB(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
ur:function ur(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bsI:function bsI(){},
bsJ:function bsJ(d){this.a=d},
bsG:function bsG(){},
bsH:function bsH(){},
bsK:function bsK(d,e){this.a=d
this.b=e},
bsL:function bsL(d){this.a=d},
bsF:function bsF(d){this.a=d},
bsO:function bsO(){},
bsP:function bsP(){},
bsM:function bsM(){},
bsN:function bsN(){},
cti:function cti(){},
Wk(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$Wk=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.T(y.q).f.af(D.bNP)
x=1
break}x=3
return A.d(A.cb(null,new B.csN(A.hm(h,0,A.jg(12,"count",y.r),A.a7(h).c).bB(0)),d,!0,!0,null,y.C),$async$Wk)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(L.uQ(d,e,f,u.c,u.d,g,t),$async$Wk)
case 4:case 1:return A.l(v,w)}})
return A.m($async$Wk,w)},
z9:function z9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
csN:function csN(d){this.a=d},
csM:function csM(d,e){this.a=d
this.b=e},
cv7(d,e,f,g,h,i,j){return new B.aim(f,d,i,j,g,h,e,null)},
aim:function aim(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aRE:function aRE(){},
aRB:function aRB(d){this.a=d},
aRD:function aRD(d){this.a=d},
aRC:function aRC(){},
cDd(d){var x,w,v,u
for(x=new A.bV(d),w=y.V,x=new A.ap(x,x.gv(0),w.i("ap<a6.E>")),w=w.i("a6.E"),v=0;x.p();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bvm[C.i.aj(v,5)]},
xA:function xA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
NT:function NT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aRA:function aRA(d){this.a=d},
NV:function NV(d,e){this.c=d
this.a=e},
aPH:function aPH(){},
aPI:function aPI(){},
ag5:function ag5(){},
G5:function G5(){},
aS6:function aS6(d,e){this.a=d
this.b=e},
a7l:function a7l(){},
cGE(d,e,f,g,h,i,j,k){return new B.a0R(A.dfG(B.dgg(),i,j),d,g,h,e,A.afC(e),f,i.i("@<0>").b4(j).b4(k).i("a0R<1,2,3>"))},
b9a(d,e,f,g,h,i,j,k,l,m){return new A.w2(d,h,f,j,k,g,e,i,l.i("@<0>").b4(m).i("w2<1,2>"))},
a0R:function a0R(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,Q,R,S,T,U,V
J=c[1]
A=c[0]
C=c[2]
E=c[312]
G=c[182]
H=c[385]
I=c[369]
K=c[302]
L=c[145]
F=c[241]
M=c[405]
N=c[295]
O=c[356]
P=c[439]
B=a.updateHolder(c[110],B)
D=c[245]
Q=c[365]
R=c[386]
S=c[126]
T=c[404]
U=c[318]
V=c[428]
B.FZ.prototype={
gaF(d){return this.c}}
B.L6.prototype={
u(d){var x=null,w=A.T(18),v=A.T(18)
return A.eY(!1,w,!0,new A.a_(C.ee,A.I(A.a([A.E(x,A.aJ(this.c,$.a5,x,x,26),C.t,x,x,new A.K(C.af,x,x,v,x,x,C.y),x,58,x,x,x,x,x,58),C.aF,A.i(this.d,x,x,x,C.lE,x,x,x)],y.p),C.x,C.l,C.a_,0,C.w),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bx_(this,d),x,x,x,x,x,x,x)}}
B.Vq.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.boA[x]
v=new A.aX(14,14)
s.push(A.eY(!1,new A.bW(v,v,v,v),!0,new A.a_(C.fY,A.a_f(w,C.js,u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.cbb(d,w),u,u,u,u,u,u,u))}return new A.a_(D.amF,A.I(A.a([D.c1j,C.Y,A.yc(1,s,4,8,8,u,C.e4,!0)],t),C.I,C.l,C.a_,0,C.w),u)}}
B.LB.prototype={
R(){return new B.a9_(new A.aM(C.aj,$.ah()),D.br3)}}
B.a9_.prototype={
ak(){this.aG()
this.IO("")},
m(){var x=this.d
x.a_$=$.ah()
x.V$=0
this.a9()},
IO(d){return this.b93(d)},
b93(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$IO=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bJH(s))
v=3
m=C.f.L(d)
l=m.length===0
r=l?"trending":"search"
k=A.u(r)
q=A.B(y.N,y.z)
J.bk(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.bk(q,"limit","24")
J.bk(q,"rating","pg")
l=!l
if(l)J.bk(q,"q",m)
if(l)J.bk(q,"lang","pt")
p=A.adR("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aN_(p,null),$async$IO)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bt.jB(0,A.iS(A.iP(q.e)).bD(0,q.w),null)),"data"))
s.q(new B.bJI(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.q(new B.bJJ(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.bJK(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$IO,w)},
u(d){var x=this,w=null,v=A.at(d,w,y.w).w,u=A.cD(w,C.a9,!1,w,!0,C.C,w,A.cI(),x.d,w,w,w,w,w,2,D.ayj,C.X,!0,w,!0,w,!1,w,C.aG,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gb92(),w,!1,w,w,!1,w,!0,w,C.av,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.au,w,C.b6,w,C.xF,w,w),t=x.r
if(t!=null)t=A.bF(A.i(t,w,w,w,C.eV,C.aa,w,w),w,w)
else t=x.f?C.bk:G.ZR(w,C.X,V.a5Z,new B.bJM(x),x.e.length,w,w,!1)
return A.aT(new A.a_(D.amC,A.I(A.a([u,C.a5,A.ab(t,1),C.aF,D.aan],y.p),C.I,C.l,C.q,0,C.w),w),v.a.b*0.62,w)}}
B.NS.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.at(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.be(s.c,"asset:"))return A.a_f(C.f.bP(s.c,6),C.js,120,r,120)
if(p==="image"||p==="gif")return A.dT(r,A.eu(A.T(16),new A.ev(new A.aK(0,q,0,320),A.l4(s.c,new B.aRw(q),C.c_,r,new B.aRx(q),r,r),r),C.aH),C.X,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aRy(s,d),r,r,r,r,r,r,!1,C.bl)
p=A.T(16)
x=s.f
w=x?$.a5:C.af
v=A.T(16)
u=A.aJ(P.MJ,x?C.v:$.a5,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.a1,r,A.as(r,r,x?C.v:C.D,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eY(!1,p,!0,A.E(r,A.V(A.a([u,C.al,new A.eo(1,C.bM,t,r),C.bo,A.aJ(K.u7,x?C.v:C.L,r,r,18)],y.p),C.x,C.l,C.a_,0,r,r),C.t,r,new A.aK(0,q,0,1/0),new A.K(w,r,r,v,r,r,C.y),r,r,r,r,D.am5,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aRz(s),r,r,r,r,r,r,r)},
gaF(d){return this.e}}
B.ur.prototype={
cY(){var x=this,w=y.T,v=A.en(x).M(A.cC($.bi(),new B.bsI(),y.D,w),w)
A.en(x).a7Q(new B.bsJ(x))
if(v==null)return C.a9
w=$.Z().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.a4M(0,"typing:"+x.x,C.a46).bq4(new B.bsK(x,v),"typing")
w.abj(0)
x.y=w
x.Q=A.wH(C.fW,new B.bsL(x))
return C.a9},
agp(){var x,w=this,v=w.z
v.e6(v,new B.bsF(new A.an(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.cu(v,v.r,v.e,A.r(v).i("cu<2>"));v.p();)x.push(v.d.a)
if(x.length!==J.b0(w.ga1(0))||!C.e.eb(x,J.cUK(w.ga1(0))))w.sa1(0,x)},
a9a(d){var x,w=this,v=w.y,u=A.en(w).a2(0,$.bi(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.an(Date.now(),0,!1)
if(x.df(w.as).a<2e6)return
w.as=x
v.aaE(0,"typing",A.Q(["id",t,"name",d],y.N,y.z),C.Ff).cJ(new B.bsO(),new B.bsP(),y.H)},
fK(d){var x=this.y,w=A.en(this).a2(0,$.bi(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.an(A.iC(0,0),0,!1)
x.aaE(0,"typing",A.Q(["id",v,"stop",!0],y.N,y.z),C.Ff).cJ(new B.bsM(),new B.bsN(),y.H)}}
B.z9.prototype={}
B.aim.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.fw(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.a1,r,M.GE,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.a1,r,A.as(r,r,s.f?C.fU:C.L,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.V(A.a([q,C.aR,A.ab(A.I(w,C.I,C.l,C.a_,0,C.w),1)],x),C.x,C.l,C.q,0,r,r)
q=A.a([new A.cz(0,C.bi,C.D.bW(0.06),C.ED,14)],y.E)
w=A.at(d,C.bb,y.w).w
v=new B.aRE().$3(H.ut,"Voltar",new B.aRB(d))
t=s.r
v=A.a([v,C.aR,A.ab(t==null?u:A.aY(u,t,r),1)],x)
C.e.A(v,A.a([C.al,A.Ji(A.E(C.S,R.NN,C.t,r,r,C.kx,r,44,r,r,r,r,r,44),r,new B.aRC(),new B.aRD(s),C.ee,C.a3k,"Mais op\xe7\xf5es",y.N)],x))
return A.E(r,A.I(A.a([A.V(v,C.x,C.l,C.q,0,r,r)],x),C.T,C.l,C.a_,0,C.w),C.t,r,r,new A.K(C.v,r,r,r,q,r,C.y),r,r,r,r,new A.X(16,w.r.b+10,16,12),r,r,r)},
gaF(d){return this.c}}
B.xA.prototype={
u(d){var x=null,w=A.at(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.D:C.v,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.a_(F.KS,A.i(v,x,x,x,A.as(x,x,B.cDd(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,A.as(x,x,s?C.v:C.D,x,x,x,x,x,x,x,x,15,x,x,C.bg,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ev(new A.aK(0,w.a.a*0.78,0,1/0),A.E(x,A.I(o,C.I,C.l,C.a_,0,C.w),C.t,x,x,new A.K(r,x,x,new A.bW(E.wW,E.wW,new A.aX(q,q),new A.aX(p,p)),x,x,C.y),x,x,x,x,new A.X(14,t,14,10),x,x,x),x)}}
B.NT.prototype={
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.A(u,A.a([A.aY(A.E(C.S,D.aA1,C.t,w,w,C.kx,w,44,w,w,w,w,w,44),x.e,w),C.al],v))
v=A.T(999)
u.push(A.ab(A.E(C.bZ,A.cD(w,C.a9,!1,w,!0,C.C,w,A.cI(),x.c,w,w,w,w,w,2,A.jO(w,C.cc,w,C.V,w,w,w,w,!0,C.cc,w,w,w,w,w,w,!1,w,w,w,w,C.cc,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.X,!0,w,!0,w,!1,w,C.aG,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aRA(x),w,!1,w,w,!1,w,!0,w,C.av,w,w,w,w,w,w,w,w,w,w,w,N.xK,!0,C.au,w,C.b6,w,C.a6M,w,w),C.t,w,w,new A.K(C.af,w,w,v,w,w,C.y),w,44,w,w,C.cm,w,w,w),1))
u.push(C.al)
u.push(A.aY(A.E(C.S,D.aA3,C.t,w,w,C.oh,w,44,w,w,w,w,w,44),x.d,w))
return A.E(w,A.bo(!0,new A.a_(T.L9,A.V(u,C.x,C.l,C.q,0,w,w),w),w,D.alu,!1),C.t,C.v,w,w,w,w,w,w,w,w,w,w)}}
B.NV.prototype={
u(d){var x=null,w=this.c
return A.cuQ(C.fm,w==null?D.bN_:new A.a_(D.amJ,A.bF(A.i(w,x,x,x,C.fj,x,x,x),x,x),x),C.cH,C.az)}}
B.aPH.prototype={
$1(d){return A.lu(d,null,!0,null,null,y.S,y.z)},
gUc(d){return D.ads},
atH(d,e,f,g,h){return this.gUc(this).$3$1(e,f,g,h)}}
B.aPI.prototype={
$3$1(d,e,f,g){return B.cGE(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.ag5.prototype={}
B.G5.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.aS6(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.a7l.prototype={}
B.a0R.prototype={}
var z=a.updateTypes(["Vq(N)","LB(N)","H<~>(c)","t<c>()","ur(c)","w2<0^,1^>(0^(){$allTransitiveDependencies!y<fG>?,argument!G?,dependencies!y<fG>?,from!k2?,isAutoDispose!z,name!c?,retry!bl?(w,G)?})<eO<1^>,G?>"])
B.co8.prototype={
$1(d){var x=null,w=y.p
return new A.a_(D.and,A.I(A.a([A.V(A.a([new B.L6(C.jL,"Foto","photo",x),new B.L6(D.avn,"Ficheiro","file",x),new B.L6(U.iW,"Sticker","sticker",x),new B.L6(D.avc,"GIF","gif",x)],w),C.x,C.El,C.q,0,x,x)],w),C.x,C.l,C.a_,0,C.w),x)},
$S:109}
B.co9.prototype={
$1(d){return D.cbA},
$S:z+0}
B.coa.prototype={
$1(d){return D.c96},
$S:z+1}
B.bx_.prototype={
$0(){return A.aC(this.b,!1).b_(this.a.e)},
$S:0}
B.cbb.prototype={
$0(){return A.aC(this.a,!1).b_(this.b)},
$S:0}
B.bJH.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bJI.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bA(this.b,y.P),v=A.r(w),w=new A.ap(w,w.gv(w),v.i("ap<a6.E>")),u=y.f,v=v.i("a6.E");w.p();){t=w.d
x=t==null?v.a(t):t
J.ce(s,new A.ag(A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bJJ.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bJK.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bJM.prototype={
$2(d,e){var x=null,w=this.a
return A.eY(!1,x,!0,A.eu(A.T(10),A.l4(w.e[e].a,x,C.c_,x,x,x,x),C.aH),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bJL(w,d,e),x,x,x,x,x,x,x)},
$S:431}
B.bJL.prototype={
$0(){return A.aC(this.b,!1).b_(this.a.e[this.c].b)},
$S:0}
B.aRy.prototype={
$0(){var x=y.H
return A.aC(this.b,!1).ir(A.tR(new B.aRv(this.a),null,x),x)},
$S:0}
B.aRv.prototype={
$1(d){var x=null
return A.ku(A.cuS(C.ah,x,C.v,x),C.ah,A.bF(S.cFE(C.V,A.yn(this.a.c,x,x,!1,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1193}
B.aRx.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:155}
B.aRw.prototype={
$3(d,e,f){var x=null
return A.E(x,D.ax6,C.t,C.af,x,x,x,120,x,x,x,x,x,this.a)},
$S:66}
B.aRz.prototype={
$0(){return A.xd(A.di(this.a.c,0,null),C.pf,null)},
$S:0}
B.bsI.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.bsJ.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aQ(0)
x=w.y
w.y=null
if(x!=null){w=$.Z().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.F0(x).cJ(new B.bsG(),new B.bsH(),y.H)}},
$S:0}
B.bsG.prototype={
$1(d){},
$S:97}
B.bsH.prototype={
$1(d){},
$S:13}
B.bsK.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.eN(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.P(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.P(t.h(0,"name"))
x=u==null?null:C.f.L(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.ag(v,new A.an(Date.now(),0,!1).fe(5e6)))}u.agp()},
$S:226}
B.bsL.prototype={
$1(d){return this.a.agp()},
$S:59}
B.bsF.prototype={
$2(d,e){return e.b.f8(this.a)},
$S:1195}
B.bsO.prototype={
$1(d){},
$S:179}
B.bsP.prototype={
$1(d){},
$S:13}
B.bsM.prototype={
$1(d){},
$S:179}
B.bsN.prototype={
$1(d){},
$S:13}
B.cti.prototype={
$1(d){return C.e.gN(d.split(" "))},
$S:23}
B.csN.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v]
t=C.f.L(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.a1,r,C.GA,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r)
p.push(A.i8(!1,C.V,r,r,!0,r,r,r,!0,r,D.awU,r,r,r,r,new B.csM(d,u),!1,r,r,r,r,r,s,r,t,r,F.Na,r))}return A.bo(!0,new A.a_(D.amG,A.I(A.a([D.c2m,C.aK,D.bYM,C.a4,new A.eo(1,C.bM,A.cM(p,r,r,r,r,!1,C.Z,!0),r)],q),C.I,C.l,C.a_,0,C.w),r),r,C.V,!0)},
$S:56}
B.csM.prototype={
$0(){return A.aC(this.a,!1).b_(this.b)},
$S:0}
B.aRE.prototype={
$3(d,e,f){var x=null
return A.kz(A.aY(A.E(C.S,d,C.t,x,x,C.kx,x,44,x,x,x,x,x,44),f,x),x,e)},
$S:1196}
B.aRB.prototype={
$0(){return A.aC(this.a,!1).qu()},
$S:0}
B.aRD.prototype={
$1(d){return this.a.w.$0()},
$S:6}
B.aRC.prototype={
$1(d){return D.bpt},
$S:83}
B.aRA.prototype={
$1(d){return this.a.d.$0()},
$S:6}
B.aS6.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("G5.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.a9_.prototype,"gb92","IO",2)
w(B,"dgH","d5k",4)
v(B.ur.prototype,"gi7","cY",3)
u(B,"dgg",1,function(){return{$allTransitiveDependencies:C.cz,argument:C.cz,dependencies:C.cz,from:C.cz,isAutoDispose:C.cz,name:C.cz,retry:C.cz}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["b9a",function(d,e,f,g,h,i,j,k){return B.b9a(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.b9a(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.b9a(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.G,[B.FZ,B.z9,B.aPH,B.aPI,B.ag5])
w(A.bv,[B.co8,B.co9,B.coa,B.aRv,B.aRx,B.aRw,B.bsI,B.bsG,B.bsH,B.bsK,B.bsL,B.bsO,B.bsP,B.bsM,B.bsN,B.cti,B.csN,B.aRE,B.aRD,B.aRC,B.aRA])
w(A.M,[B.L6,B.Vq,B.NS,B.aim,B.xA,B.NT,B.NV])
w(A.bI,[B.bx_,B.cbb,B.bJH,B.bJI,B.bJJ,B.bJK,B.bJL,B.aRy,B.aRz,B.bsJ,B.csM,B.aRB,B.aS6])
v(B.LB,A.F)
v(B.a9_,A.a0)
w(A.cF,[B.bJM,B.bsF])
v(B.ur,A.eO)
v(B.a7l,A.k2)
v(B.G5,B.a7l)
v(B.a0R,B.G5)
x(B.a7l,B.ag5)})()
A.bx(b.typeUniverse,JSON.parse('{"Vq":{"M":[],"e":[],"f":[]},"LB":{"F":[],"e":[],"f":[]},"L6":{"M":[],"e":[],"f":[]},"a9_":{"a0":["LB"]},"NS":{"M":[],"e":[],"f":[]},"ur":{"eO":["t<c>"]},"aim":{"M":[],"e":[],"f":[]},"xA":{"M":[],"e":[],"f":[]},"NT":{"M":[],"e":[],"f":[]},"NV":{"M":[],"e":[],"f":[]},"G5":{"k2":[],"fG":[],"Ey":[],"kX":[]},"a0R":{"G5":["1","2","2","3","2","w2<1,2>"],"k2":[],"fG":[],"Ey":[],"kX":[],"G5.0":"1"}}'))
A.VJ(b.typeUniverse,JSON.parse('{"ag5":5,"a7l":6}'))
var y=(function rtii(){var x=A.v
return{D:x("cE"),V:x("bV"),E:x("q<cz>"),L:x("q<+(c,c)>"),s:x("q<c>"),p:x("q<e>"),j:x("t<@>"),P:x("a2<c,@>"),f:x("a2<@,@>"),w:x("d9"),S:x("eO<@>"),F:x("+(c,an)"),C:x("z9"),N:x("c"),q:x("dC"),z:x("@"),r:x("w"),B:x("FZ?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bXN=new A.J("Powered by GIPHY",null,I.Gy,null,null,null,null,null,null,null,null)
D.aan=new A.dM(C.f0,null,null,D.bXN,null)
D.Iw=new B.aPH()
D.ads=new B.aPI()
D.alu=new A.X(0,0,0,20)
D.am5=new A.X(12,10,14,10)
D.amC=new A.X(16,16,16,12)
D.amF=new A.X(16,16,16,24)
D.amG=new A.X(16,16,16,8)
D.amJ=new A.X(16,2,16,8)
D.and=new A.X(20,18,20,24)
D.avc=new A.aB(57404,"HeroiconsSolid",null,!1)
D.avn=new A.aB(57436,"HeroiconsSolid",null,!1)
D.awU=new A.aZ(C.h3,null,C.L,null,null,null)
D.ax6=new A.aZ(C.jL,null,C.L,null,null,null)
D.ayj=new A.dz(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,O.CA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aA1=new A.lr("M12 5v14M5 12h14",20,C.D,2.4,!1,C.h9,null)
D.aA3=new A.lr("M12 19V5M5 12l7-7 7 7",18,C.v,2.4,!1,C.h9,null)
D.boA=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bFE=new A.ks("report",!0,Q.a7O,null,A.v("ks<c>"))
D.bpt=x([D.bFE],A.v("q<pU<c>>"))
D.bqH=x([],A.v("q<cK1>"))
D.br3=x([],y.L)
D.agH=new A.O(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.A)
D.ahx=new A.O(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.A)
D.aiz=new A.O(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.A)
D.ah3=new A.O(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.A)
D.bvm=x([D.agH,C.fU,D.ahx,D.aiz,D.ah3],A.v("q<O>"))
D.bN_=new A.cg(1/0,null,null,null)
D.c2v=new A.J("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bNP=new A.cd(D.c2v,null,null,null,null,null,null,null,null,null,null,null,null,C.a0,!1,null,null,null,C.C,null)
D.c1Z=new A.J("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bOe=new A.cd(D.c1Z,null,null,null,null,null,null,null,null,null,null,null,null,C.a0,!1,null,null,null,C.C,null)
D.bYM=new A.J("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.bd,null,null,null,null,null,null,null,null)
D.c1j=new A.J("Stickers",null,C.cl,null,null,null,null,null,null,null,null)
D.c2m=new A.J("Que mensagem queres denunciar?",null,C.cT,null,null,null,null,null,null,null,null)
D.c96=new B.LB(null)
D.cbA=new B.Vq(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dtU","AF",()=>D.Iw.atH(0,B.dgH(),A.v("ur"),A.v("t<c>"),y.N))})()};
(a=>{a["6eJPVMUL2AQPbp/KA9Q9UIUhvuM="]=a.current})($__dart_deferred_initializers__);