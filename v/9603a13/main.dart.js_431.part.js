((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,I,K,L,M,F,N,O,C={
dGB(){var x,w=$.HP(),v=J.nH(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aT(B.j.hA(w.pu(256),16),2,"0")
return B.e.hv(v)},
aTV(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aTV=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Q()
q=r.b
q===$&&A.b()
q=q.gbu().e.a
u=(q==null?null:q.r).a
t=B.f.t(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dGB()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r2(s,d,new A.v3(!1,f)),$async$aTV)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cd(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTV,w)},
dcL(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
rC(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rC=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bQ(null,new C.cMS(),!1,d,!0,!1,null,l),$async$rC)
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
return A.d(new A.lJ().YO(85,2048,B.fu),$async$rC)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kh(),$async$rC)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fn(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aTV(t,s,C.dcL(s)),$async$rC)
case 12:v=new j.Iq(f,r,s)
x=1
break
case 7:x=13
return A.d($.dh9().xU(D.bz1,null,null),$async$rC)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kh(),$async$rC)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a0(D.bYM)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.cb(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbsa(p))
if(B.f.fn(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aTV(t,l,C.dcL(l)),$async$rC)
case 15:v=new j.Iq(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bQ(null,new C.cMT(),!1,d,!0,!1,null,l),$async$rC)
case 16:n=f
v=n==null?null:new C.Iq("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bQ(null,new C.cMU(),!1,d,!0,!0,null,l),$async$rC)
case 17:m=f
v=m==null?null:new C.Iq(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rC,w)},
Iq:function Iq(d,e,f){this.a=d
this.b=e
this.c=f},
cMS:function cMS(){},
cMT:function cMT(){},
cMU:function cMU(){},
NP:function NP(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJk:function bJk(d,e){this.a=d
this.b=e},
Zi:function Zi(d){this.a=d},
cyv:function cyv(d,e){this.a=d
this.b=e},
Os:function Os(d){this.a=d},
adw:function adw(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bZ6:function bZ6(d){this.a=d},
bZ7:function bZ7(d,e){this.a=d
this.b=e},
bZ8:function bZ8(d){this.a=d},
bZ9:function bZ9(d){this.a=d},
bZb:function bZb(d){this.a=d},
bZa:function bZa(d,e,f){this.a=d
this.b=e
this.c=f},
R4:function R4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZD:function aZD(d,e){this.a=d
this.b=e},
aZA:function aZA(d){this.a=d},
aZC:function aZC(d){this.a=d},
aZB:function aZB(d){this.a=d},
aZE:function aZE(d){this.a=d},
dyN(d){return new C.w1(d,A.E(y.N,y.F),new A.ac(A.ji(0,0),0,!1))},
d_v(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dn(d,new C.cT4(),y.N).bx(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w1:function w1(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bDW:function bDW(){},
bDX:function bDX(d){this.a=d},
bDU:function bDU(){},
bDV:function bDV(){},
bDY:function bDY(d,e){this.a=d
this.b=e},
bDZ:function bDZ(d){this.a=d},
bDT:function bDT(d){this.a=d},
bE1:function bE1(){},
bE2:function bE2(){},
bE_:function bE_(){},
bE0:function bE0(){},
cT4:function cT4(){},
a_h(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_h=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a0(D.bZ8)
x=1
break}x=3
return A.d(A.bQ(null,new C.cSq(A.dz(h,0,A.et(12,"count",y.r),A.a8(h).c).bx(0)),!1,d,!0,!0,null,y.C),$async$a_h)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.ws(d,e,f,u.c,u.d,g,t),$async$a_h)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_h,w)},
B3:function B3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSq:function cSq(d){this.a=d},
cSp:function cSp(d,e){this.a=d
this.b=e},
cUS(d,e,f,g,h,i,j,k,l){return new C.anB(g,d,k,h,i,e,j,l,f,null)},
anB:function anB(d,e,f,g,h,i,j,k,l,m){var _=this
_.c=d
_.d=e
_.e=f
_.r=g
_.w=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.a=m},
aZQ:function aZQ(){},
aZN:function aZN(d){this.a=d},
aZP:function aZP(d){this.a=d},
aZO:function aZO(d){this.a=d},
cGd(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ae)
v=new A.b6(16,16)
u=d[x]
w.push(new A.bJ(1,B.at,A.x(t,A.z(A.a([A.h(u.a,1,B.a1,t,t,B.c3,t,t),B.aU,A.h(u.b,t,t,t,t,B.be,B.a3,t)],s),B.v,B.h,B.l),B.r,t,t,new A.I(B.a4,t,t,new A.cz(v,v,v,v),t,t,B.x),t,t,t,D.atX,t,t,t),t))
B.e.n(r,w)}return A.N(r,B.v,B.h,B.l,0,t)},
akg(d,e,f){var x,w=null
if(f){x=A.fM(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.aa,B.c6,w,w,B.cY,w)
x=new A.al(A.hi(A.h(d,w,w,w,w,w,w,w),e,x),w)}else{x=A.cc(B.z,w,w,B.t,w,w,B.aa,w,w,B.cY)
x=new A.al(A.bB(A.h(d,w,w,w,w,w,w,w),e,x),w)}return A.aK(x,52,w)},
cZn(d,e,f,g){var x=null,w=y.p,v=A.a([new A.di(1,B.ba,A.h(d,x,x,x,x,B.c3,B.a3,x),x)],w)
if(g)B.e.n(v,A.a([B.dY,D.P5],w))
v=A.a([new A.cg(d,76,e,!1,!0,x),B.aD,A.N(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.h(f,x,x,x,x,B.L,B.a3,x)],w))
return new A.bC(B.aw,x,B.aC,B.y,A.a([new A.S(B.jB,A.bO(A.z(v,B.v,B.h,B.l),x,x),x),D.bPf],w),x)},
cFW(d,e){var x,w,v=null,u=A.aT(d,B.dR,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a_)
w.push(e[x])
B.e.n(s,w)}return A.bA(!0,new A.ea(new A.aS(0,1/0,0,u.a.b*0.9),A.dS(A.z(s,B.E,B.h,B.l),B.y,v,B.al,v,B.av),v),v,B.Z,!1)},
abX:function abX(d){this.a=d},
bPq:function bPq(d){this.a=d},
d2r(d){var x,w,v,u
for(x=new A.ce(d),w=y.E,x=new A.ag(x,x.gA(0),w.i("ag<V.E>")),w=w.i("V.E"),v=0;x.q();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDs[B.j.aI(v,5)]},
cUR(d,e,f,g,h,i,j){return new C.anA(d,i,f,e,g,j,h,null)},
zw:function zw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anA:function anA(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aZG:function aZG(d,e){this.a=d
this.b=e},
aZH:function aZH(d,e){this.a=d
this.b=e},
aZJ:function aZJ(){},
aZI:function aZI(d){this.a=d},
aZF:function aZF(d,e){this.a=d
this.b=e},
R5:function R5(d,e){this.c=d
this.a=e},
Ke:function Ke(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aed:function aed(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c78:function c78(d,e){this.a=d
this.b=e},
bnw:function bnw(d,e){this.a=d
this.b=e},
aXt:function aXt(){},
aXu:function aXu(){},
ald:function ald(){},
Iu:function Iu(){},
b_k:function b_k(d,e){this.a=d
this.b=e},
abW:function abW(){},
d66(d,e,f,g,h,i,j,k){return new C.a5b(A.dKm(C.dL3(),i,j),d,g,h,e,A.akF(e),f,i.i("@<0>").b7(j).b7(k).i("a5b<1,2,3>"))},
biq(d,e,f,g,h,i,j,k,l,m){return new A.xL(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xL<1,2>"))},
a5b:function a5b(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,P,Q,R,S,T
J=c[1]
A=c[0]
B=c[2]
E=c[230]
G=c[402]
H=c[380]
I=c[178]
K=c[433]
L=c[331]
M=c[157]
F=c[237]
N=c[167]
O=c[432]
C=a.updateHolder(c[122],C)
D=c[232]
P=c[378]
Q=c[393]
R=c[266]
S=c[180]
T=c[431]
C.Iq.prototype={
gap(d){return this.c}}
C.NP.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eX(!1,w,!0,new A.S(B.hv,A.z(A.a([A.x(x,A.b9(this.c,$.au,x,x,26),B.r,x,x,new A.I(B.a4,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aD,A.h(this.d,x,x,x,x,B.hO,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,new C.bJk(this,d),x,x,x,x,x,x,x)}}
C.Zi.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwI[x]
v=new A.b6(14,14)
s.push(A.eX(!1,new A.cz(v,v,v,v),!0,new A.S(B.q0,A.arT(w,B.kj,u,u),u),u,!0,u,u,u,u,u,u,u,u,new C.cyv(d,w),u,u,u,u,u,u,u))}return new A.S(D.asy,A.z(A.a([D.c70,B.R,A.ar9(1,s,4,8,8,u,B.dO,!0)],t),B.G,B.h,B.J),u)}}
C.Os.prototype={
S(){return new C.adw(new A.aF(B.ak,$.aa()),D.ie)}}
C.adw.prototype={
ad(){this.aq()
this.HR("")},
m(){var x=this.d
x.Z$=$.aa()
x.W$=0
this.a7()},
HR(d){return this.bfY(d)},
bfY(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HR=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bZ6(s))
v=3
m=B.f.B(d)
l=m.length===0
r=l?"trending":"search"
k=A.p(r)
q=A.E(y.N,y.z)
J.b3(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b3(q,"limit","24")
J.b3(q,"rating","pg")
l=!l
if(l)J.b3(q,"q",m)
if(l)J.b3(q,"lang","pt")
p=A.aiU("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUl(p,null),$async$HR)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bt.jG(0,A.jg(A.je(q.e)).bI(0,q.w),null)),"data"))
s.p(new C.bZ7(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.bZ8(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.bZ9(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HR,w)},
u(d){var x=this,w=null,v=A.aT(d,w,y.w).w,u=A.cs(w,B.a6,!1,w,!0,B.y,w,A.cu(),x.d,w,w,w,w,w,2,D.aEF,B.W,!0,w,!0,w,!1,w,B.aB,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaT4(),w,!1,w,w,!1,w,!0,w,B.al,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b0,w,B.rR,w,w),t=x.r
if(t!=null)t=A.bO(A.h(t,w,w,w,w,B.mj,B.a3,w),w,w)
else t=x.f?D.bXj:N.ar8(T.a8n,new C.bZb(x),x.e.length,w,w,!1)
return A.aK(new A.S(D.asw,A.z(A.a([u,B.ac,A.a4(t,1),B.aD,D.acJ],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.R4.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aT(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b1(s.c,"asset:"))return A.arT(B.f.bD(s.c,6),B.kj,120,120)
if(p==="image"||p==="gif")return A.cq(r,A.fR(A.W(16),new A.ea(new A.aS(0,q,0,320),A.k3(s.c,new C.aZB(q),B.bE,r,new C.aZC(q),r,r),r),B.bc),B.W,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.aZD(s,d),r,r,r,r,r,r,!1,B.aE)
p=A.W(16)
x=s.f
w=x?$.au:B.a4
v=A.W(16)
u=A.b9(O.Ow,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aI(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r)
return A.eX(!1,p,!0,A.x(r,A.N(A.a([u,B.ab,new A.di(1,B.ba,t,r),B.bj,A.b9(L.vd,x?B.t:B.V,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aS(0,q,0,1/0),new A.I(w,r,r,v,r,r,B.x),r,r,r,D.as0,r,r,r),r,!0,r,r,r,r,r,r,r,r,new C.aZE(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
C.w1.prototype={
d_(){var x=this,w=y.T,v=A.eQ(x).G(A.cD($.b7(),new C.bDW(),y.D,w),w)
A.eQ(x).NE(new C.bDX(x))
if(v==null)return B.a6
w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.LR(0,"typing:"+x.x,B.yg).bx4(new C.bDY(x,v),"typing")
w.Pv(0)
x.y=w
x.Q=A.u4(B.hq,new C.bDZ(x))
return B.a6},
aka(){var x,w=this,v=w.z
v.ee(v,new C.bDT(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c4(v,v.r,v.e,A.u(v).i("c4<2>"));v.q();)x.push(v.d.a)
if(x.length!==J.aP(w.ga4(0))||!B.e.e6(x,J.dml(w.ga4(0))))w.sa4(0,x)},
acx(d){var x,w=this,v=w.y,u=A.eQ(w).a_(0,$.b7(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.cs(w.as).a<2e6)return
w.as=x
v.aec(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GJ).cB(new C.bE1(),new C.bE2(),y.H)},
cZ(d){var x=this.y,w=A.eQ(this).a_(0,$.b7(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.ji(0,0),0,!1)
x.aec(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GJ).cB(new C.bE_(),new C.bE0(),y.H)}}
C.B3.prototype={}
C.anB.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cg(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.di(1,B.ba,A.h(s.c,1,B.a1,r,r,B.a9,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.dY,D.P5],x))
w=A.a([A.N(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uL,A.x(r,A.h(v,1,r,r,r,B.he,r,r),B.r,r,r,new A.I(B.cx,r,r,u,r,r,B.x),r,r,r,B.CU,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aI(r,r,B.V,r,r,r,r,r,r,r,r,13,r,r,B.b_,r,r,!0,r,r,r,r,r,r,r,r),r,r))}t=A.N(A.a([q,B.af,A.a4(A.z(w,B.G,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d4(0,B.bm,B.z.cc(0.06),B.G8,14)],y.V)
w=A.aT(d,B.b5,y.w).w
v=new C.aZQ().$3(K.OU,"Voltar",new C.aZN(d))
u=s.r
v=A.a([v,B.af,A.a4(u==null?t:A.aY(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Eh(A.x(B.K,Q.E5,B.r,r,r,B.bV,r,44,r,r,r,r,44),r,new C.aZO(s),new C.aZP(s),r,D.bPb,"Mais op\xe7\xf5es",y.N)],x))
return A.x(r,A.z(A.a([A.N(v,B.v,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.I(B.t,r,r,B.tB,q,r,B.x),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gap(d){return this.c}}
C.abX.prototype={
u(d){var x=null
return A.bi(x,!0,x,A.cq(x,A.x(x,B.hz,B.r,x,x,new A.I(B.z,x,x,x,x,x,B.ap),x,44,x,x,x,x,44),B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPq(d),x,x,x,x,x,x,!1,B.aE),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zw.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(F.ML,A.h(v,x,x,x,x,A.aI(x,x,C.d2r(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aI(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bl,x,1.4,!0,x,x,x,x,x,x,x,x),x,x))
return new A.ea(new A.aS(0,w.a.a*0.78,0,1/0),A.x(x,A.z(o,B.G,B.h,B.J),B.r,x,x,new A.I(r,x,x,new A.cz(E.y9,E.y9,new A.b6(q,q),new A.b6(p,p)),x,x,B.x),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.anA.prototype={
ahY(d){if(!A.uc(this.c.a.a)){d.O(y.q).f.a0(D.bYH)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aY(A.x(B.K,B.OX,B.r,t,t,B.bV,t,44,t,t,t,t,44),u.e,t),B.ab],s))
x=A.W(24)
r.push(A.a4(A.x(B.bb,A.cs(t,B.a6,!1,t,!0,B.y,t,A.cu(),u.c,t,t,t,t,t,2,A.j6(t,B.br,t,B.Z,t,t,t,t,!0,B.br,t,t,t,t,t,t,!1,t,t,t,t,B.br,t,t,t,t,t,t,t,t,B.mg,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.W,!0,t,!0,t,!1,t,B.aB,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.aZG(u,d),t,!1,t,t,!1,t,!0,t,B.al,t,t,t,t,t,t,t,t,t,t,t,B.fh,!0,B.au,t,B.b0,t,B.a9q,t,t),B.r,t,t,new A.I(B.a4,t,t,x,t,t,B.x),t,48,t,B.bY,t,t,t),1))
r.push(B.ab)
r.push(A.bi(t,!0,t,A.aY(A.x(B.K,D.aDk,B.r,t,t,B.bV,t,44,t,t,t,t,44),new C.aZH(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.N(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d4(0,B.bm,B.z.cc(0.12),B.kH,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aK(A.a4g(B.y,new C.aZI(u),v,t,t,B.bJ,new C.aZJ()),34,t),B.ac],s))
x.push(w)
return A.x(t,A.bA(!0,new A.S(B.ht,A.z(x,B.E,B.h,B.J),t),t,D.arB,!1),B.r,t,t,new A.I(B.t,t,t,B.pd,r,t,B.x),t,t,t,t,t,t,t)}}
C.R5.prototype={
u(d){var x=null,w=this.c
return A.aWj(B.f6,w==null?D.bWN:new A.S(D.asC,A.bO(A.h(w,x,x,x,x,B.kb,x,x),x,x),x),B.cy,B.aM)}}
C.Ke.prototype={
S(){return new C.aed()}}
C.aed.prototype={
ad(){var x,w=this
w.aq()
x=w.a
w.e=x.d
x.c.an(0,w.ga1a())},
bm(d){var x,w,v=this
v.bE(d)
x=d.c
if(x!==v.a.c){w=v.ga1a()
x.a2(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a2(0,this.ga1a())
this.a7()},
aT7(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gby(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c78(w,x))},
b5u(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aT(x,null,y.w).w
w=this.a
if(x.ax)w.c.hw(0)
else w.c.hY(0,B.es,G.Cu)},
u(d){var x,w,v,u=this,t=null,s=B.j.ae(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iT(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.x(B.K,D.aDd,B.r,t,t,D.afp,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bE(B.z,2)
r.push(A.cb(t,A.x(B.K,A.h(""+s,t,t,t,t,B.hO,t,t),B.r,t,B.la,new A.I(B.t,t,v,x,t,t,B.x),t,20,t,B.CR,t,t,t),t,t,t,-6,-6,t))}q.push(A.cb(16,A.bi(t,!0,t,A.aY(new A.bC(B.aw,t,B.aC,B.r,r,t),u.gb5t(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bC(B.aw,t,B.aC,B.y,q,t)}}
C.bnw.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aXt.prototype={
$1(d){return A.mU(d,null,!0,null,null,y.S,y.z)},
gWU(d){return D.agO},
axQ(d,e,f,g,h){return this.gWU(this).$3$1(e,f,g,h)}}
C.aXu.prototype={
$3$1(d,e,f,g){return C.d66(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.ald.prototype={}
C.Iu.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_k(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.abW.prototype={}
C.a5b.prototype={}
var z=a.updateTypes(["~()","Zi(O)","Os(O)","F<~>(c)","t<c>()","w1(c)","xL<0^,1^>(0^(){$allTransitiveDependencies!w<h8>?,argument!L?,dependencies!w<h8>?,from!kO?,isAutoDispose!C,name!c?,retry!bn?(v,L)?})<fa<1^>,L?>"])
C.cMS.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.at1,A.z(A.a([A.N(A.a([new C.NP(B.jR,"Foto","photo",x),new C.NP(D.aBO,"Ficheiro","file",x),new C.NP(R.jO,"Sticker","sticker",x),new C.NP(D.aBG,"GIF","gif",x)],w),B.v,B.a0r,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:72}
C.cMT.prototype={
$1(d){return D.coq},
$S:z+1}
C.cMU.prototype={
$1(d){return D.clE},
$S:z+2}
C.bJk.prototype={
$0(){return A.an(this.b,!1).af(this.a.e)},
$S:0}
C.cyv.prototype={
$0(){return A.an(this.a,!1).af(this.b)},
$S:0}
C.bZ6.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZ7.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.be(this.b,y.P),v=A.u(w),w=new A.ag(w,w.gA(w),v.i("ag<V.E>")),u=y.f,v=v.i("V.E");w.q();){t=w.d
x=t==null?v.a(t):t
J.br(s,new A.X(A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZ8.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bZ9.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bZb.prototype={
$2(d,e){var x=null,w=this.a
return A.eX(!1,x,!0,A.fR(A.W(10),A.k3(w.e[e].a,x,B.bE,x,x,x,x),B.bc),x,!0,x,x,x,x,x,x,x,x,new C.bZa(w,d,e),x,x,x,x,x,x,x)},
$S:1330}
C.bZa.prototype={
$0(){return A.an(this.b,!1).af(this.a.e[this.c].b)},
$S:0}
C.aZD.prototype={
$0(){var x=y.H
return A.an(this.b,!1).h_(A.tq(new C.aZA(this.a),null,x),x)},
$S:0}
C.aZA.prototype={
$1(d){var x=null
return A.kt(A.cUB(B.an,x,B.t,x),B.an,A.bO(I.cVS(B.Z,A.pn(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1331}
C.aZC.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1332}
C.aZB.prototype={
$3(d,e,f){var x=null
return A.x(x,D.aDs,B.r,B.a4,x,x,x,120,x,x,x,x,this.a)},
$S:69}
C.aZE.prototype={
$0(){return A.z3(A.dA(this.a.c,0,null),B.qi,null)},
$S:0}
C.bDW.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bDX.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aK(0)
x=w.y
w.y=null
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y0(x).cB(new C.bDU(),new C.bDV(),y.H)}},
$S:0}
C.bDU.prototype={
$1(d){},
$S:111}
C.bDV.prototype={
$1(d){},
$S:11}
C.bDY.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dY(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.B(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.B(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.X(v,new A.ac(Date.now(),0,!1).ek(5e6)))}u.aka()},
$S:213}
C.bDZ.prototype={
$1(d){return this.a.aka()},
$S:63}
C.bDT.prototype={
$2(d,e){return e.b.fe(this.a)},
$S:1333}
C.bE1.prototype={
$1(d){},
$S:257}
C.bE2.prototype={
$1(d){},
$S:11}
C.bE_.prototype={
$1(d){},
$S:257}
C.bE0.prototype={
$1(d){},
$S:11}
C.cT4.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:23}
C.cSq.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.Ip,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r)
p.push(A.jn(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDb,r,r,r,r,new C.cSp(d,u),!1,r,r,r,r,r,s,r,t,r,F.P4,r))}return A.bA(!0,new A.S(D.asz,A.z(A.a([D.c9I,B.ar,D.caG,B.P,new A.di(1,B.ba,A.d6(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:31}
C.cSp.prototype={
$0(){return A.an(this.a,!1).af(this.b)},
$S:0}
C.aZQ.prototype={
$3(d,e,f){var x=null
return A.kw(A.aY(A.x(B.K,d,B.r,x,x,B.bV,x,44,x,x,x,x,44),f,x),x,e)},
$S:1334}
C.aZN.prototype={
$0(){return A.an(this.a,!1).i6()},
$S:0}
C.aZP.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.aZO.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bnv(A.h(t,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bP3)
return r},
$S:57}
C.bPq.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
C.aZG.prototype={
$1(d){return this.a.ahY(this.b)},
$S:3}
C.aZH.prototype={
$0(){return this.a.ahY(this.b)},
$S:0}
C.aZJ.prototype={
$2(d,e){return B.ab},
$S:115}
C.aZI.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bE(B.z,1.5)
return A.aY(A.x(B.K,A.h(w.w[e],x,x,x,x,B.dZ,x,x),B.r,x,x,new A.I(B.t,x,u,v,x,x,B.x),x,34,x,B.cG,x,x,x),new C.aZF(w,e),x)},
$S:190}
C.aZF.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c78.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_k.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Iu.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adw.prototype,"gaT4","HR",3)
w(C,"dM1","dyN",5)
v(C.w1.prototype,"giD","d_",4)
var t
v(t=C.aed.prototype,"ga1a","aT7",0)
v(t,"gb5t","b5u",0)
u(C,"dL3",1,function(){return{$allTransitiveDependencies:B.cM,argument:B.cM,dependencies:B.cM,from:B.cM,isAutoDispose:B.cM,name:B.cM,retry:B.cM}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["biq",function(d,e,f,g,h,i,j,k){return C.biq(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.biq(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.biq(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.L,[C.Iq,C.B3,C.aXt,C.aXu,C.ald])
w(A.bs,[C.cMS,C.cMT,C.cMU,C.aZA,C.aZC,C.aZB,C.bDW,C.bDU,C.bDV,C.bDY,C.bDZ,C.bE1,C.bE2,C.bE_,C.bE0,C.cT4,C.cSq,C.aZQ,C.aZP,C.aZO,C.aZG])
w(A.M,[C.NP,C.Zi,C.R4,C.anB,C.abX,C.zw,C.anA,C.R5])
w(A.bL,[C.bJk,C.cyv,C.bZ6,C.bZ7,C.bZ8,C.bZ9,C.bZa,C.aZD,C.aZE,C.bDX,C.cSp,C.aZN,C.bPq,C.aZH,C.aZF,C.c78,C.b_k])
w(A.G,[C.Os,C.Ke])
w(A.a0,[C.adw,C.aed])
w(A.cK,[C.bZb,C.bDT,C.aZJ,C.aZI])
v(C.w1,A.fa)
v(C.bnw,A.fg)
v(C.abW,A.kO)
v(C.Iu,C.abW)
v(C.a5b,C.Iu)
x(C.abW,C.ald)})()
A.bq(b.typeUniverse,JSON.parse('{"Zi":{"M":[],"e":[],"f":[]},"Os":{"G":[],"e":[],"f":[]},"NP":{"M":[],"e":[],"f":[]},"adw":{"a0":["Os"]},"R4":{"M":[],"e":[],"f":[]},"w1":{"fa":["t<c>"]},"anB":{"M":[],"e":[],"f":[]},"abX":{"M":[],"e":[],"f":[]},"Ke":{"G":[],"e":[],"f":[]},"zw":{"M":[],"e":[],"f":[]},"anA":{"M":[],"e":[],"f":[]},"R5":{"M":[],"e":[],"f":[]},"aed":{"a0":["Ke"]},"Iu":{"kO":[],"h8":[],"H_":[],"lM":[]},"a5b":{"Iu":["1","2","2","3","2","xL<1,2>"],"kO":[],"h8":[],"H_":[],"lM":[],"Iu.0":"1"}}'))
A.PF(b.typeUniverse,JSON.parse('{"ald":5,"abW":6}'))
var y=(function rtii(){var x=A.y
return{D:x("cF"),E:x("ce"),V:x("r<d4>"),X:x("r<pC<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dt"),S:x("fa<@>"),F:x("+(c,ac)"),C:x("B3"),N:x("c"),q:x("dl"),z:x("@"),r:x("v"),B:x("Iq?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cai=new A.D("Powered by GIPHY",null,H.In,null,null,null,null,null,null,null)
D.acJ=new A.d_(B.e_,null,null,D.cai,null)
D.afp=new A.I(B.z,null,null,null,B.id,null,B.ap)
D.Kq=new C.aXt()
D.agO=new C.aXu()
D.arB=new A.a3(0,0,0,24)
D.as0=new A.a3(12,10,14,10)
D.asw=new A.a3(16,16,16,12)
D.asy=new A.a3(16,16,16,24)
D.asz=new A.a3(16,16,16,8)
D.asC=new A.a3(16,2,16,8)
D.at1=new A.a3(20,18,20,24)
D.atX=new A.a3(8,12,8,12)
D.aBG=new A.b_(57404,"HeroiconsSolid",null,!1)
D.aBO=new A.b_(57436,"HeroiconsSolid",null,!1)
D.P5=new A.b8(B.i8,18,B.bp,null,"Verificado",null)
D.aDb=new A.b8(B.fd,null,B.V,null,null,null)
D.aBv=new A.b_(57347,"HeroiconsSolid",null,!1)
D.aDd=new A.b8(D.aBv,20,B.t,null,null,null)
D.aDk=new A.b8(B.lD,20,B.t,null,null,null)
D.aDs=new A.b8(B.jR,null,B.V,null,null,null)
D.aCu=new A.b8(B.vf,null,null,null,null,null)
D.aEF=new A.dE(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCu,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwI=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bz1=x([],A.y("r<d9J>"))
D.bz4=x([],A.y("r<+(c,~())>"))
D.ie=x([],y.L)
D.amj=new A.Z(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.an7=new A.Z(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aoa=new A.Z(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amK=new A.Z(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDs=x([D.amj,B.cR,D.an7,D.aoa,D.amK],A.y("r<Z>"))
D.bP3=new A.jM("report",!0,P.aaw,null,A.y("jM<c>"))
D.bPb=new C.bnw(1,"under")
D.ckH=new C.abX(null)
D.bPf=new A.eF(null,0,0,null,null,null,D.ckH,null)
D.bWN=new A.c5(1/0,null,null,null)
D.bXj=new S.ye(12,3,null)
D.c9Y=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null)
D.bYH=new A.bF(D.c9Y,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cbz=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null)
D.bYM=new A.bF(D.cbz,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c8J=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null)
D.bZ8=new A.bF(D.c8J,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c70=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null)
D.c9I=new A.D("Que mensagem queres denunciar?",null,B.hN,null,null,null,null,null,null,null)
D.caG=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null)
D.clE=new C.Os(null)
D.coq=new C.Zi(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZE","CG",()=>D.Kq.axQ(0,C.dM1(),A.y("w1"),A.y("t<c>"),y.N))})()};
(a=>{a["/HsefSSHEjEcMF+E70Tfddk4i2M="]=a.current})($__dart_deferred_initializers__);