((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,E,L,M,N,O,B={
dcy(){var x,w=$.Ne(),v=J.m4(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aY(C.i.hY(w.t4(256),16),2,"0")
return C.e.il(v)},
aMK(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aMK=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.W()
q=r.b
q===$&&A.b()
q=q.gbI().e.a
u=(q==null?null:q.r).a
t=C.f.n(e,".")?C.e.ga4(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.dcy()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.T("chat-attachments")
x=3
return A.d(q.qJ(s,d,new A.ty(!1,f)),$async$aMK)
case 3:r=r.b.ay
r===$&&A.b()
v=r.T("chat-attachments").B7(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aMK,w)},
cN9(d){var x,w=C.e.ga4(d.split(".")).toLowerCase()
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
qy(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$qy=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.cb(null,new B.cok(),d,!0,!1,null,l),$async$qy)
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
return A.d(new A.ln().Wj(85,2048,C.fz),$async$qy)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.ks(),$async$qy)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.hM(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aMK(t,s,B.cN9(s)),$async$qy)
case 12:v=new j.G4(f,r,s)
x=1
break
case 7:x=13
return A.d($.cQm().x6(D.bqJ,null,null),$async$qy)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.ks(),$async$qy)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.S(y.q).f.ad(D.bOJ)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.ci(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbli(p))
if(C.f.hM(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aMK(t,l,B.cN9(l)),$async$qy)
case 15:v=new j.G4(f,r,l)
x=1
break
case 8:x=16
return A.d(A.cb(null,new B.col(),d,!0,!1,null,l),$async$qy)
case 16:n=f
v=n==null?null:new B.G4("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.cb(null,new B.com(),d,!0,!0,null,l),$async$qy)
case 17:m=f
v=m==null?null:new B.G4(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$qy,w)},
G4:function G4(d,e,f){this.a=d
this.b=e
this.c=f},
cok:function cok(){},
col:function col(){},
com:function com(){},
Ld:function Ld(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bxd:function bxd(d,e){this.a=d
this.b=e},
Vw:function Vw(d){this.a=d},
cbn:function cbn(d,e){this.a=d
this.b=e},
LI:function LI(d){this.a=d},
a93:function a93(d,e){var _=this
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
NY:function NY(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aRC:function aRC(d,e){this.a=d
this.b=e},
aRz:function aRz(d){this.a=d},
aRB:function aRB(d){this.a=d},
aRA:function aRA(d){this.a=d},
aRD:function aRD(d){this.a=d},
d5F(d){return new B.uq(d,A.B(y.N,y.F),new A.am(A.iA(0,0),0,!1))},
cAF(d){var x,w=J.a3(d)
if(w.gZ(d))return null
x=w.dv(d,new B.ctx(),y.N).bB(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
uq:function uq(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bsV:function bsV(){},
bsW:function bsW(d){this.a=d},
bsT:function bsT(){},
bsU:function bsU(){},
bsX:function bsX(d,e){this.a=d
this.b=e},
bsY:function bsY(d){this.a=d},
bsS:function bsS(d){this.a=d},
bt0:function bt0(){},
bt1:function bt1(){},
bsZ:function bsZ(){},
bt_:function bt_(){},
ctx:function ctx(){},
Wp(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$Wp=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.S(y.q).f.ad(D.bOh)
x=1
break}x=3
return A.d(A.cb(null,new B.ct_(A.hl(h,0,A.jh(12,"count",y.r),A.a6(h).c).bB(0)),d,!0,!0,null,y.C),$async$Wp)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(K.uP(d,e,f,u.c,u.d,g,t),$async$Wp)
case 4:case 1:return A.l(v,w)}})
return A.m($async$Wp,w)},
ze:function ze(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ct_:function ct_(d){this.a=d},
csZ:function csZ(d,e){this.a=d
this.b=e},
cvn(d,e,f,g,h,i,j){return new B.ais(f,d,i,j,g,h,e,null)},
ais:function ais(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aRJ:function aRJ(){},
aRG:function aRG(d){this.a=d},
aRI:function aRI(d){this.a=d},
aRH:function aRH(){},
cDs(d){var x,w,v,u
for(x=new A.bW(d),w=y.V,x=new A.ap(x,x.gv(0),w.i("ap<a5.E>")),w=w.i("a5.E"),v=0;x.p();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bvn[C.i.ah(v,5)]},
xE:function xE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
NZ:function NZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aRE:function aRE(d,e){this.a=d
this.b=e},
aRF:function aRF(d,e){this.a=d
this.b=e},
O0:function O0(d,e){this.c=d
this.a=e},
aPL:function aPL(){},
aPM:function aPM(){},
agc:function agc(){},
Gb:function Gb(){},
aSb:function aSb(d,e){this.a=d
this.b=e},
a7r:function a7r(){},
cGT(d,e,f,g,h,i,j,k){return new B.a0U(A.dfZ(B.dgz(),i,j),d,g,h,e,A.afF(e),f,i.i("@<0>").b4(j).b4(k).i("a0U<1,2,3>"))},
b9j(d,e,f,g,h,i,j,k,l,m){return new A.w0(d,h,f,j,k,g,e,i,l.i("@<0>").b4(m).i("w0<1,2>"))},
a0U:function a0U(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,P,Q,R,S,T,U,V,F
J=c[1]
A=c[0]
C=c[2]
G=c[376]
H=c[359]
I=c[304]
K=c[146]
E=c[241]
L=c[400]
M=c[297]
N=c[346]
O=c[435]
B=a.updateHolder(c[111],B)
D=c[245]
P=c[355]
Q=c[377]
R=c[129]
S=c[397]
T=c[425]
U=c[185]
V=c[423]
F=c[313]
B.G4.prototype={
gaF(d){return this.c}}
B.Ld.prototype={
u(d){var x=null,w=A.T(18),v=A.T(18)
return A.eX(!1,w,!0,new A.a_(C.ee,A.J(A.a([A.E(x,A.aK(this.c,$.a9,x,x,26),C.t,x,x,new A.L(C.ag,x,x,v,x,x,C.y),x,58,x,x,x,x,x,58),C.aI,A.i(this.d,x,x,x,C.lB,x,x,x)],y.p),C.x,C.m,C.a0,0,C.w),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bxd(this,d),x,x,x,x,x,x,x)}}
B.Vw.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.boA[x]
v=new A.aW(14,14)
s.push(A.eX(!1,new A.bU(v,v,v,v),!0,new A.a_(C.hm,A.a_i(w,C.jn,u,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.cbn(d,w),u,u,u,u,u,u,u))}return new A.a_(D.amE,A.J(A.a([D.c1K,C.W,A.ZU(1,s,4,8,8,u,C.eT,!0)],t),C.I,C.m,C.a0,0,C.w),u)}}
B.LI.prototype={
R(){return new B.a93(new A.aP(C.am,$.ah()),D.br5)}}
B.a93.prototype={
ak(){this.aG()
this.IU("")},
m(){var x=this.d
x.a0$=$.ah()
x.V$=0
this.aa()},
IU(d){return this.b9k(d)},
b9k(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$IU=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bJH(s))
v=3
m=C.f.L(d)
l=m.length===0
r=l?"trending":"search"
k=A.u(r)
q=A.B(y.N,y.z)
J.bg(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.bg(q,"limit","24")
J.bg(q,"rating","pg")
l=!l
if(l)J.bg(q,"q",m)
if(l)J.bg(q,"lang","pt")
p=A.adV("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aN4(p,null),$async$IU)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bv.jC(0,A.iQ(A.iN(q.e)).bD(0,q.w),null)),"data"))
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
return A.m($async$IU,w)},
u(d){var x=this,w=null,v=A.at(d,w,y.w).w,u=A.cF(w,C.aa,!1,w,!0,C.D,w,A.cI(),x.d,w,w,w,w,w,2,D.aye,C.Y,!0,w,!0,w,!1,w,C.aH,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gb9j(),w,!1,w,w,!1,w,!0,w,C.aw,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.ar,w,C.b5,w,C.xH,w,w),t=x.r
if(t!=null)t=A.bE(A.i(t,w,w,w,C.fk,C.a6,w,w),w,w)
else t=x.f?C.bl:U.ZT(w,C.Y,V.a5Q,new B.bJM(x),x.e.length,w,w,!1)
return A.aU(new A.a_(D.amB,A.J(A.a([u,C.a5,A.ac(t,1),C.aI,D.aaf],y.p),C.I,C.m,C.q,0,C.w),w),v.a.b*0.62,w)}}
B.NY.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.at(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.be(s.c,"asset:"))return A.a_i(C.f.bP(s.c,6),C.jn,120,r,120)
if(p==="image"||p==="gif")return A.dI(r,A.es(A.T(16),new A.eu(new A.aI(0,q,0,320),A.l4(s.c,new B.aRA(q),C.bZ,r,new B.aRB(q),r,r),r),C.aG),C.Y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aRC(s,d),r,r,r,r,r,r,!1,C.bg)
p=A.T(16)
x=s.f
w=x?$.a9:C.ag
v=A.T(16)
u=A.aK(O.MG,x?C.v:$.a9,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.a1,r,A.as(r,r,x?C.v:C.C,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eX(!1,p,!0,A.E(r,A.Z(A.a([u,C.aq,new A.ei(1,C.bK,t,r),C.bp,A.aK(I.u7,x?C.v:C.L,r,r,18)],y.p),C.x,C.m,C.a0,0,r,r),C.t,r,new A.aI(0,q,0,1/0),new A.L(w,r,r,v,r,r,C.y),r,r,r,r,D.am5,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aRD(s),r,r,r,r,r,r,r)},
gaF(d){return this.e}}
B.uq.prototype={
cY(){var x=this,w=y.T,v=A.em(x).M(A.cB($.be(),new B.bsV(),y.D,w),w)
A.em(x).a80(new B.bsW(x))
if(v==null)return C.aa
w=$.W().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.a4Z(0,"typing:"+x.x,C.a4_).bqn(new B.bsX(x,v),"typing")
w.abt(0)
x.y=w
x.Q=A.wI(C.fU,new B.bsY(x))
return C.aa},
agC(){var x,w=this,v=w.z
v.e6(v,new B.bsS(new A.am(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.cw(v,v.r,v.e,A.r(v).i("cw<2>"));v.p();)x.push(v.d.a)
if(x.length!==J.aX(w.ga1(0))||!C.e.el(x,J.cV2(w.ga1(0))))w.sa1(0,x)},
a9k(d){var x,w=this,v=w.y,u=A.em(w).a2(0,$.be(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.am(Date.now(),0,!1)
if(x.dl(w.as).a<2e6)return
w.as=x
v.aaO(0,"typing",A.Q(["id",t,"name",d],y.N,y.z),C.Fg).cJ(new B.bt0(),new B.bt1(),y.H)},
fL(d){var x=this.y,w=A.em(this).a2(0,$.be(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.am(A.iA(0,0),0,!1)
x.aaO(0,"typing",A.Q(["id",v,"stop",!0],y.N,y.z),C.Fg).cJ(new B.bsZ(),new B.bt_(),y.H)}}
B.ze.prototype={}
B.ais.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.fy(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.a1,r,L.GB,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.a1,r,A.as(r,r,s.f?C.fS:C.L,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.Z(A.a([q,C.aY,A.ac(A.J(w,C.I,C.m,C.a0,0,C.w),1)],x),C.x,C.m,C.q,0,r,r)
q=A.a([new A.cJ(0,C.bi,C.C.bV(0.06),C.ED,14)],y.E)
w=A.at(d,C.ba,y.w).w
v=new B.aRJ().$3(G.uu,"Voltar",new B.aRG(d))
t=s.r
v=A.a([v,C.aY,A.ac(t==null?u:A.b0(u,t,r),1)],x)
C.e.A(v,A.a([C.aq,A.Jp(A.E(C.T,Q.NJ,C.t,r,r,C.kt,r,44,r,r,r,r,r,44),r,new B.aRH(),new B.aRI(s),C.ee,C.a3e,"Mais op\xe7\xf5es",y.N)],x))
return A.E(r,A.J(A.a([A.Z(v,C.x,C.m,C.q,0,r,r)],x),C.R,C.m,C.a0,0,C.w),C.t,r,r,new A.L(C.v,r,r,r,q,r,C.y),r,r,r,r,new A.Y(16,w.r.b+10,16,12),r,r,r)},
gaF(d){return this.c}}
B.xE.prototype={
u(d){var x=null,w=A.at(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.C:C.v,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.a_(E.KR,A.i(v,x,x,x,A.as(x,x,B.cDs(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,A.as(x,x,s?C.v:C.C,x,x,x,x,x,x,x,x,15,x,x,C.bd,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.eu(new A.aI(0,w.a.a*0.78,0,1/0),A.E(x,A.J(o,C.I,C.m,C.a0,0,C.w),C.t,x,x,new A.L(r,x,x,new A.bU(F.wW,F.wW,new A.aW(q,q),new A.aW(p,p)),x,x,C.y),x,x,x,x,new A.Y(14,t,14,10),x,x,x),x)}}
B.NZ.prototype={
aeu(d){if(!A.uu(this.c.a.a)){d.S(y.q).f.ad(D.bOt)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.A(u,A.a([A.b0(A.E(C.T,D.azX,C.t,w,w,C.kt,w,44,w,w,w,w,w,44),x.e,w),C.aq],v))
v=A.T(999)
u.push(A.ac(A.E(C.bY,A.cF(w,C.aa,!1,w,!0,C.D,w,A.cI(),x.c,w,w,w,w,w,2,A.jP(w,C.cp,w,C.V,w,w,w,w,!0,C.cp,w,w,w,w,w,w,!1,w,w,w,w,C.cp,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.Y,!0,w,!0,w,!1,w,C.aH,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aRE(x,d),w,!1,w,w,!1,w,!0,w,C.aw,w,w,w,w,w,w,w,w,w,w,w,M.xM,!0,C.ar,w,C.b5,w,C.a6D,w,w),C.t,w,w,new A.L(C.ag,w,w,v,w,w,C.y),w,44,w,w,C.cy,w,w,w),1))
u.push(C.aq)
u.push(A.b0(A.E(C.T,D.azZ,C.t,w,w,C.ok,w,44,w,w,w,w,w,44),new B.aRF(x,d),w))
return A.E(w,A.bp(!0,new A.a_(S.L7,A.Z(u,C.x,C.m,C.q,0,w,w),w),w,D.alv,!1),C.t,C.v,w,w,w,w,w,w,w,w,w,w)}}
B.O0.prototype={
u(d){var x=null,w=this.c
return A.cv5(C.f0,w==null?D.bNm:new A.a_(D.amI,A.bE(A.i(w,x,x,x,C.fl,x,x,x),x,x),x),C.cJ,C.ax)}}
B.aPL.prototype={
$1(d){return A.lt(d,null,!0,null,null,y.S,y.z)},
gUs(d){return D.adn},
atV(d,e,f,g,h){return this.gUs(this).$3$1(e,f,g,h)}}
B.aPM.prototype={
$3$1(d,e,f,g){return B.cGT(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.agc.prototype={}
B.Gb.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.aSb(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.a7r.prototype={}
B.a0U.prototype={}
var z=a.updateTypes(["Vw(M)","LI(M)","H<~>(c)","t<c>()","uq(c)","w0<0^,1^>(0^(){$allTransitiveDependencies!y<fG>?,argument!F?,dependencies!y<fG>?,from!k6?,isAutoDispose!z,name!c?,retry!bn?(w,F)?})<eM<1^>,F?>"])
B.cok.prototype={
$1(d){var x=null,w=y.p
return new A.a_(D.anb,A.J(A.a([A.Z(A.a([new B.Ld(C.jF,"Foto","photo",x),new B.Ld(D.avj,"Ficheiro","file",x),new B.Ld(T.jD,"Sticker","sticker",x),new B.Ld(D.av8,"GIF","gif",x)],w),C.x,C.El,C.q,0,x,x)],w),C.x,C.m,C.a0,0,C.w),x)},
$S:113}
B.col.prototype={
$1(d){return D.cc8},
$S:z+0}
B.com.prototype={
$1(d){return D.c9B},
$S:z+1}
B.bxd.prototype={
$0(){return A.aB(this.b,!1).aX(this.a.e)},
$S:0}
B.cbn.prototype={
$0(){return A.aB(this.a,!1).aX(this.b)},
$S:0}
B.bJH.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bJI.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bA(this.b,y.P),v=A.r(w),w=new A.ap(w,w.gv(w),v.i("ap<a5.E>")),u=y.f,v=v.i("a5.E");w.p();){t=w.d
x=t==null?v.a(t):t
J.cg(s,new A.ag(A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a1(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bJJ.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bJK.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bJM.prototype={
$2(d,e){var x=null,w=this.a
return A.eX(!1,x,!0,A.es(A.T(10),A.l4(w.e[e].a,x,C.bZ,x,x,x,x),C.aG),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bJL(w,d,e),x,x,x,x,x,x,x)},
$S:305}
B.bJL.prototype={
$0(){return A.aB(this.b,!1).aX(this.a.e[this.c].b)},
$S:0}
B.aRC.prototype={
$0(){var x=y.H
return A.aB(this.b,!1).iq(A.tS(new B.aRz(this.a),null,x),x)},
$S:0}
B.aRz.prototype={
$1(d){var x=null
return A.ke(A.cv7(C.ah,x,C.v,x),C.ah,A.bE(R.cFU(C.V,A.yr(this.a.c,x,x,!1,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1188}
B.aRB.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:127}
B.aRA.prototype={
$3(d,e,f){var x=null
return A.E(x,D.ax1,C.t,C.ag,x,x,x,120,x,x,x,x,x,this.a)},
$S:71}
B.aRD.prototype={
$0(){return A.xf(A.dh(this.a.c,0,null),C.po,null)},
$S:0}
B.bsV.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.bsW.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aQ(0)
x=w.y
w.y=null
if(x!=null){w=$.W().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.F6(x).cJ(new B.bsT(),new B.bsU(),y.H)}},
$S:0}
B.bsT.prototype={
$1(d){},
$S:104}
B.bsU.prototype={
$1(d){},
$S:13}
B.bsX.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.eL(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.P(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.P(t.h(0,"name"))
x=u==null?null:C.f.L(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.ag(v,new A.am(Date.now(),0,!1).f4(5e6)))}u.agC()},
$S:212}
B.bsY.prototype={
$1(d){return this.a.agC()},
$S:61}
B.bsS.prototype={
$2(d,e){return e.b.fj(this.a)},
$S:1190}
B.bt0.prototype={
$1(d){},
$S:218}
B.bt1.prototype={
$1(d){},
$S:13}
B.bsZ.prototype={
$1(d){},
$S:218}
B.bt_.prototype={
$1(d){},
$S:13}
B.ctx.prototype={
$1(d){return C.e.gO(d.split(" "))},
$S:23}
B.ct_.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v]
t=C.f.L(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.a1,r,C.Gz,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r)
p.push(A.i8(!1,C.V,r,r,!0,r,r,r,!0,r,D.awP,r,r,r,r,new B.csZ(d,u),!1,r,r,r,r,r,s,r,t,r,E.N7,r))}return A.bp(!0,new A.a_(D.amF,A.J(A.a([D.c2N,C.aK,D.bZe,C.a4,new A.ei(1,C.bK,A.cO(p,r,r,r,r,!1,C.Z,!0),r)],q),C.I,C.m,C.a0,0,C.w),r),r,C.V,!0)},
$S:51}
B.csZ.prototype={
$0(){return A.aB(this.a,!1).aX(this.b)},
$S:0}
B.aRJ.prototype={
$3(d,e,f){var x=null
return A.kA(A.b0(A.E(C.T,d,C.t,x,x,C.kt,x,44,x,x,x,x,x,44),f,x),x,e)},
$S:1191}
B.aRG.prototype={
$0(){return A.aB(this.a,!1).qs()},
$S:0}
B.aRI.prototype={
$1(d){return this.a.w.$0()},
$S:5}
B.aRH.prototype={
$1(d){return D.bpu},
$S:79}
B.aRE.prototype={
$1(d){return this.a.aeu(this.b)},
$S:5}
B.aRF.prototype={
$0(){return this.a.aeu(this.b)},
$S:0}
B.aSb.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Gb.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.a93.prototype,"gb9j","IU",2)
w(B,"dh_","d5F",4)
v(B.uq.prototype,"gi7","cY",3)
u(B,"dgz",1,function(){return{$allTransitiveDependencies:C.cB,argument:C.cB,dependencies:C.cB,from:C.cB,isAutoDispose:C.cB,name:C.cB,retry:C.cB}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["b9j",function(d,e,f,g,h,i,j,k){return B.b9j(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.b9j(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.b9j(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.F,[B.G4,B.ze,B.aPL,B.aPM,B.agc])
w(A.bv,[B.cok,B.col,B.com,B.aRz,B.aRB,B.aRA,B.bsV,B.bsT,B.bsU,B.bsX,B.bsY,B.bt0,B.bt1,B.bsZ,B.bt_,B.ctx,B.ct_,B.aRJ,B.aRI,B.aRH,B.aRE])
w(A.N,[B.Ld,B.Vw,B.NY,B.ais,B.xE,B.NZ,B.O0])
w(A.bI,[B.bxd,B.cbn,B.bJH,B.bJI,B.bJJ,B.bJK,B.bJL,B.aRC,B.aRD,B.bsW,B.csZ,B.aRG,B.aRF,B.aSb])
v(B.LI,A.G)
v(B.a93,A.a0)
w(A.cD,[B.bJM,B.bsS])
v(B.uq,A.eM)
v(B.a7r,A.k6)
v(B.Gb,B.a7r)
v(B.a0U,B.Gb)
x(B.a7r,B.agc)})()
A.bx(b.typeUniverse,JSON.parse('{"Vw":{"N":[],"e":[],"f":[]},"LI":{"G":[],"e":[],"f":[]},"Ld":{"N":[],"e":[],"f":[]},"a93":{"a0":["LI"]},"NY":{"N":[],"e":[],"f":[]},"uq":{"eM":["t<c>"]},"ais":{"N":[],"e":[],"f":[]},"xE":{"N":[],"e":[],"f":[]},"NZ":{"N":[],"e":[],"f":[]},"O0":{"N":[],"e":[],"f":[]},"Gb":{"k6":[],"fG":[],"EF":[],"kX":[]},"a0U":{"Gb":["1","2","2","3","2","w0<1,2>"],"k6":[],"fG":[],"EF":[],"kX":[],"Gb.0":"1"}}'))
A.VP(b.typeUniverse,JSON.parse('{"agc":5,"a7r":6}'))
var y=(function rtii(){var x=A.v
return{D:x("cC"),V:x("bW"),E:x("q<cJ>"),L:x("q<+(c,c)>"),s:x("q<c>"),p:x("q<e>"),j:x("t<@>"),P:x("a2<c,@>"),f:x("a2<@,@>"),w:x("d8"),S:x("eM<@>"),F:x("+(c,am)"),C:x("ze"),N:x("c"),q:x("dB"),z:x("@"),r:x("w"),B:x("G4?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.bYf=new A.I("Powered by GIPHY",null,H.Gx,null,null,null,null,null,null,null,null)
D.aaf=new A.dH(C.f1,null,null,D.bYf,null)
D.It=new B.aPL()
D.adn=new B.aPM()
D.alv=new A.Y(0,0,0,20)
D.am5=new A.Y(12,10,14,10)
D.amB=new A.Y(16,16,16,12)
D.amE=new A.Y(16,16,16,24)
D.amF=new A.Y(16,16,16,8)
D.amI=new A.Y(16,2,16,8)
D.anb=new A.Y(20,18,20,24)
D.av8=new A.aC(57404,"HeroiconsSolid",null,!1)
D.avj=new A.aC(57436,"HeroiconsSolid",null,!1)
D.awP=new A.b_(C.h0,null,C.L,null,null,null)
D.ax1=new A.b_(C.jF,null,C.L,null,null,null)
D.aye=new A.dC(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,N.CA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.azX=new A.jQ("M12 5v14M5 12h14",20,C.C,2.4,!1,C.cA,null)
D.azZ=new A.jQ("M12 19V5M5 12l7-7 7 7",18,C.v,2.4,!1,C.cA,null)
D.boA=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bFR=new A.kv("report",!0,P.a7M,null,A.v("kv<c>"))
D.bpu=x([D.bFR],A.v("q<pW<c>>"))
D.bqJ=x([],A.v("q<cKk>"))
D.br5=x([],y.L)
D.agD=new A.O(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.A)
D.aht=new A.O(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.A)
D.aix=new A.O(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.A)
D.ah_=new A.O(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.A)
D.bvn=x([D.agD,C.fS,D.aht,D.aix,D.ah_],A.v("q<O>"))
D.bNm=new A.ce(1/0,null,null,null)
D.c2W=new A.I("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bOh=new A.c4(D.c2W,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.D,null)
D.c3L=new A.I("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bOt=new A.c4(D.c3L,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.D,null)
D.c2q=new A.I("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bOJ=new A.c4(D.c2q,null,null,null,null,null,null,null,null,null,null,null,null,C.a_,!1,null,null,null,C.D,null)
D.bZe=new A.I("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.bm,null,null,null,null,null,null,null,null)
D.c1K=new A.I("Stickers",null,C.c2,null,null,null,null,null,null,null,null)
D.c2N=new A.I("Que mensagem queres denunciar?",null,C.cU,null,null,null,null,null,null,null,null)
D.c9B=new B.LI(null)
D.cc8=new B.Vw(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dud","AJ",()=>D.It.atV(0,B.dh_(),A.v("uq"),A.v("t<c>"),y.N))})()};
(a=>{a["nXmrPOhKQhQndnOLsio8duhfOok="]=a.current})($__dart_deferred_initializers__);