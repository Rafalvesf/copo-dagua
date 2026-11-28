((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,I,K,L,M,F,N,O,C={
dHd(){var x,w=$.HS(),v=J.nI(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aT(B.j.hD(w.pv(256),16),2,"0")
return B.e.hx(v)},
aUf(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUf=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Q()
q=r.b
q===$&&A.b()
q=q.gbu().e.a
u=(q==null?null:q.r).a
t=B.f.t(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dHd()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r2(s,d,new A.v4(!1,f)),$async$aUf)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cd(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUf,w)},
ddk(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
rG(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rG=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bQ(null,new C.cNq(),!1,d,!0,!1,null,l),$async$rG)
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
return A.d(new A.lK().YR(85,2048,B.fv),$async$rG)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kh(),$async$rG)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fn(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUf(t,s,C.ddk(s)),$async$rG)
case 12:v=new j.It(f,r,s)
x=1
break
case 7:x=13
return A.d($.dhJ().xW(D.bz3,null,null),$async$rG)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kh(),$async$rG)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a0(D.bYU)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.cb(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbsl(p))
if(B.f.fn(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUf(t,l,C.ddk(l)),$async$rG)
case 15:v=new j.It(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bQ(null,new C.cNr(),!1,d,!0,!1,null,l),$async$rG)
case 16:n=f
v=n==null?null:new C.It("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bQ(null,new C.cNs(),!1,d,!0,!0,null,l),$async$rG)
case 17:m=f
v=m==null?null:new C.It(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rG,w)},
It:function It(d,e,f){this.a=d
this.b=e
this.c=f},
cNq:function cNq(){},
cNr:function cNr(){},
cNs:function cNs(){},
NT:function NT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJF:function bJF(d,e){this.a=d
this.b=e},
Zm:function Zm(d){this.a=d},
cz2:function cz2(d,e){this.a=d
this.b=e},
Ow:function Ow(d){this.a=d},
adE:function adE(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bZx:function bZx(d){this.a=d},
bZy:function bZy(d,e){this.a=d
this.b=e},
bZz:function bZz(d){this.a=d},
bZA:function bZA(d){this.a=d},
bZC:function bZC(d){this.a=d},
bZB:function bZB(d,e,f){this.a=d
this.b=e
this.c=f},
Ra:function Ra(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZW:function aZW(d,e){this.a=d
this.b=e},
aZT:function aZT(d){this.a=d},
aZV:function aZV(d){this.a=d},
aZU:function aZU(d){this.a=d},
aZX:function aZX(d){this.a=d},
dzo(d){return new C.w3(d,A.E(y.N,y.F),new A.ac(A.ji(0,0),0,!1))},
d02(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dn(d,new C.cTD(),y.N).bx(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w3:function w3(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bEg:function bEg(){},
bEh:function bEh(d){this.a=d},
bEe:function bEe(){},
bEf:function bEf(){},
bEi:function bEi(d,e){this.a=d
this.b=e},
bEj:function bEj(d){this.a=d},
bEd:function bEd(d){this.a=d},
bEm:function bEm(){},
bEn:function bEn(){},
bEk:function bEk(){},
bEl:function bEl(){},
cTD:function cTD(){},
a_l(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_l=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a0(D.bZg)
x=1
break}x=3
return A.d(A.bQ(null,new C.cSZ(A.dz(h,0,A.et(12,"count",y.r),A.a8(h).c).bx(0)),!1,d,!0,!0,null,y.C),$async$a_l)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wu(d,e,f,u.c,u.d,g,t),$async$a_l)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_l,w)},
B4:function B4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSZ:function cSZ(d){this.a=d},
cSY:function cSY(d,e){this.a=d
this.b=e},
cVq(d,e,f,g,h,i,j,k,l){return new C.anO(g,d,k,h,i,e,j,l,f,null)},
anO:function anO(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_8:function b_8(){},
b_5:function b_5(d){this.a=d},
b_7:function b_7(d){this.a=d},
b_6:function b_6(d){this.a=d},
cGM(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ae)
v=new A.b6(16,16)
u=d[x]
w.push(new A.bJ(1,B.at,A.x(t,A.y(A.a([A.h(u.a,1,B.a1,t,t,B.c3,t,t),B.aU,A.h(u.b,t,t,t,t,B.be,B.a3,t)],s),B.v,B.h,B.l),B.r,t,t,new A.I(B.a4,t,t,new A.cz(v,v,v,v),t,t,B.x),t,t,t,D.atY,t,t,t),t))
B.e.n(r,w)}return A.O(r,B.v,B.h,B.l,0,t)},
akr(d,e,f){var x,w=null
if(f){x=A.fM(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.aa,B.c6,w,w,B.cY,w)
x=new A.am(A.hj(A.h(d,w,w,w,w,w,w,w),e,x),w)}else{x=A.cc(B.z,w,w,B.t,w,w,B.aa,w,w,B.cY)
x=new A.am(A.bD(A.h(d,w,w,w,w,w,w,w),e,x),w)}return A.aK(x,52,w)},
cZV(d,e,f,g){var x=null,w=y.p,v=A.a([new A.di(1,B.bb,A.h(d,x,x,x,x,B.c3,B.a3,x),x)],w)
if(g)B.e.n(v,A.a([B.dY,D.P7],w))
v=A.a([new A.cg(d,76,e,!1,!0,x),B.aE,A.O(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.h(f,x,x,x,x,B.L,B.a3,x)],w))
return new A.bA(B.aw,x,B.aC,B.y,A.a([new A.S(B.jD,A.bO(A.y(v,B.v,B.h,B.l),x,x),x),D.bPi],w),x)},
cGu(d,e){var x,w,v=null,u=A.aT(d,B.dR,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a_)
w.push(e[x])
B.e.n(s,w)}return A.bB(!0,new A.eb(new A.aR(0,1/0,0,u.a.b*0.9),A.dS(A.y(s,B.E,B.h,B.l),B.y,v,B.al,v,B.av),v),v,B.Z,!1)},
ac2:function ac2(d){this.a=d},
bPL:function bPL(d){this.a=d},
d3_(d){var x,w,v,u
for(x=new A.ce(d),w=y.E,x=new A.ag(x,x.gA(0),w.i("ag<V.E>")),w=w.i("V.E"),v=0;x.q();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDv[B.j.aI(v,5)]},
cVp(d,e,f,g,h,i,j){return new C.anN(d,i,f,e,g,j,h,null)},
zx:function zx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anN:function anN(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aZZ:function aZZ(d,e){this.a=d
this.b=e},
b__:function b__(d,e){this.a=d
this.b=e},
b_1:function b_1(){},
b_0:function b_0(d){this.a=d},
aZY:function aZY(d,e){this.a=d
this.b=e},
Rb:function Rb(d,e){this.c=d
this.a=e},
Ki:function Ki(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ael:function ael(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c7y:function c7y(d,e){this.a=d
this.b=e},
bnS:function bnS(d,e){this.a=d
this.b=e},
aXM:function aXM(){},
aXN:function aXN(){},
alo:function alo(){},
Ix:function Ix(){},
b_D:function b_D(d,e){this.a=d
this.b=e},
ac1:function ac1(){},
d6F(d,e,f,g,h,i,j,k){return new C.a5f(A.dKZ(C.dLG(),i,j),d,g,h,e,A.akQ(e),f,i.i("@<0>").b7(j).b7(k).i("a5f<1,2,3>"))},
biK(d,e,f,g,h,i,j,k,l,m){return new A.xL(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xL<1,2>"))},
a5f:function a5f(d,e,f,g,h,i,j,k){var _=this
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
C.It.prototype={
gap(d){return this.c}}
C.NT.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eY(!1,w,!0,new A.S(B.hx,A.y(A.a([A.x(x,A.b9(this.c,$.au,x,x,26),B.r,x,x,new A.I(B.a4,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aE,A.h(this.d,x,x,x,x,B.hQ,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,new C.bJF(this,d),x,x,x,x,x,x,x)}}
C.Zm.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwK[x]
v=new A.b6(14,14)
s.push(A.eY(!1,new A.cz(v,v,v,v),!0,new A.S(B.q1,A.as5(w,B.km,u,u),u),u,!0,u,u,u,u,u,u,u,u,new C.cz2(d,w),u,u,u,u,u,u,u))}return new A.S(D.asz,A.y(A.a([D.c78,B.R,A.arm(1,s,4,8,8,u,B.dO,!0)],t),B.G,B.h,B.J),u)}}
C.Ow.prototype={
R(){return new C.adE(new A.aF(B.ak,$.aa()),D.ig)}}
C.adE.prototype={
ad(){this.aq()
this.HT("")},
m(){var x=this.d
x.Z$=$.aa()
x.W$=0
this.a6()},
HT(d){return this.bg8(d)},
bg8(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HT=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bZx(s))
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
p=A.aj1("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUG(p,null),$async$HT)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bt.jG(0,A.jg(A.je(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.bZy(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.bZz(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.bZA(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HT,w)},
u(d){var x=this,w=null,v=A.aT(d,w,y.w).w,u=A.cs(w,B.a6,!1,w,!0,B.y,w,A.cu(),x.d,w,w,w,w,w,2,D.aEH,B.U,!0,w,!0,w,!1,w,B.aB,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTb(),w,!1,w,w,!1,w,!0,w,B.al,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b0,w,B.rS,w,w),t=x.r
if(t!=null)t=A.bO(A.h(t,w,w,w,w,B.mm,B.a3,w),w,w)
else t=x.f?D.bXr:N.arl(T.a8q,new C.bZC(x),x.e.length,w,w,!1)
return A.aK(new A.S(D.asx,A.y(A.a([u,B.ac,A.a4(t,1),B.aE,D.acM],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.Ra.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aT(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b1(s.c,"asset:"))return A.as5(B.f.bE(s.c,6),B.km,120,120)
if(p==="image"||p==="gif")return A.cp(r,A.fS(A.W(16),new A.eb(new A.aR(0,q,0,320),A.k5(s.c,new C.aZU(q),B.bE,r,new C.aZV(q),r,r),r),B.ba),B.U,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.aZW(s,d),r,r,r,r,r,r,!1,B.aD)
p=A.W(16)
x=s.f
w=x?$.au:B.a4
v=A.W(16)
u=A.b9(O.Oy,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aI(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r)
return A.eY(!1,p,!0,A.x(r,A.O(A.a([u,B.ab,new A.di(1,B.bb,t,r),B.bj,A.b9(L.vd,x?B.t:B.W,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.I(w,r,r,v,r,r,B.x),r,r,r,D.as1,r,r,r),r,!0,r,r,r,r,r,r,r,r,new C.aZX(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
C.w3.prototype={
d0(){var x=this,w=y.T,v=A.eQ(x).G(A.cB($.b7(),new C.bEg(),y.D,w),w)
A.eQ(x).NF(new C.bEh(x))
if(v==null)return B.a6
w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.LS(0,"typing:"+x.x,B.yg).bxf(new C.bEi(x,v),"typing")
w.Pw(0)
x.y=w
x.Q=A.u6(B.hr,new C.bEj(x))
return B.a6},
akd(){var x,w=this,v=w.z
v.ee(v,new C.bEd(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c4(v,v.r,v.e,A.u(v).i("c4<2>"));v.q();)x.push(v.d.a)
if(x.length!==J.aP(w.ga4(0))||!B.e.e6(x,J.dmX(w.ga4(0))))w.sa4(0,x)},
acA(d){var x,w=this,v=w.y,u=A.eQ(w).a_(0,$.b7(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.co(w.as).a<2e6)return
w.as=x
v.aef(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GK).cB(new C.bEm(),new C.bEn(),y.H)},
cX(d){var x=this.y,w=A.eQ(this).a_(0,$.b7(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.ji(0,0),0,!1)
x.aef(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GK).cB(new C.bEk(),new C.bEl(),y.H)}}
C.B4.prototype={}
C.anO.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cg(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.di(1,B.bb,A.h(s.c,1,B.a1,r,r,B.a9,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.dY,D.P7],x))
w=A.a([A.O(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uL,A.x(r,A.h(v,1,r,r,r,B.he,r,r),B.r,r,r,new A.I(B.cy,r,r,u,r,r,B.x),r,r,r,B.CV,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aI(r,r,B.W,r,r,r,r,r,r,r,r,13,r,r,B.b_,r,r,!0,r,r,r,r,r,r,r,r),r,r))}t=A.O(A.a([q,B.af,A.a4(A.y(w,B.G,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d4(0,B.bl,B.z.cc(0.06),B.G9,14)],y.V)
w=A.aT(d,B.b5,y.w).w
v=new C.b_8().$3(K.OW,"Voltar",new C.b_5(d))
u=s.r
v=A.a([v,B.af,A.a4(u==null?t:A.aY(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Ej(A.x(B.K,Q.E6,B.r,r,r,B.bV,r,44,r,r,r,r,44),r,new C.b_6(s),new C.b_7(s),r,D.bPe,"Mais op\xe7\xf5es",y.N)],x))
return A.x(r,A.y(A.a([A.O(v,B.v,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.I(B.t,r,r,B.tC,q,r,B.x),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gap(d){return this.c}}
C.ac2.prototype={
u(d){var x=null
return A.bi(x,!0,x,A.cp(x,A.x(x,B.hB,B.r,x,x,new A.I(B.z,x,x,x,x,x,B.ap),x,44,x,x,x,x,44),B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPL(d),x,x,x,x,x,x,!1,B.aD),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zx.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(F.MN,A.h(v,x,x,x,x,A.aI(x,x,C.d3_(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aI(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bm,x,1.4,!0,x,x,x,x,x,x,x,x),x,x))
return new A.eb(new A.aR(0,w.a.a*0.78,0,1/0),A.x(x,A.y(o,B.G,B.h,B.J),B.r,x,x,new A.I(r,x,x,new A.cz(E.y9,E.y9,new A.b6(q,q),new A.b6(p,p)),x,x,B.x),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.anN.prototype={
ai0(d){if(!A.ue(this.c.a.a)){d.O(y.q).f.a0(D.bYP)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aY(A.x(B.K,B.OZ,B.r,t,t,B.bV,t,44,t,t,t,t,44),u.e,t),B.ab],s))
x=A.W(24)
r.push(A.a4(A.x(B.bc,A.cs(t,B.a6,!1,t,!0,B.y,t,A.cu(),u.c,t,t,t,t,t,2,A.j7(t,B.br,t,B.Z,t,t,t,t,!0,B.br,t,t,t,t,t,t,!1,t,t,t,t,B.br,t,t,t,t,t,t,t,t,B.mj,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.U,!0,t,!0,t,!1,t,B.aB,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.aZZ(u,d),t,!1,t,t,!1,t,!0,t,B.al,t,t,t,t,t,t,t,t,t,t,t,B.fi,!0,B.au,t,B.b0,t,B.a9t,t,t),B.r,t,t,new A.I(B.a4,t,t,x,t,t,B.x),t,48,t,B.bY,t,t,t),1))
r.push(B.ab)
r.push(A.bi(t,!0,t,A.aY(A.x(B.K,D.aDm,B.r,t,t,B.bV,t,44,t,t,t,t,44),new C.b__(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.O(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d4(0,B.bl,B.z.cc(0.12),B.k3,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aK(A.a4k(B.y,new C.b_0(u),v,t,B.jp,B.bJ,new C.b_1()),34,t),B.ac],s))
x.push(w)
return A.x(t,A.bB(!0,new A.S(B.hv,A.y(x,B.E,B.h,B.J),t),t,D.arC,!1),B.r,t,t,new A.I(B.t,t,t,B.pd,r,t,B.x),t,t,t,t,t,t,t)}}
C.Rb.prototype={
u(d){var x=null,w=this.c
return A.aWE(B.f7,w==null?D.bWV:new A.S(D.asD,A.bO(A.h(w,x,x,x,x,B.ke,x,x),x,x),x),B.cr,B.aM)}}
C.Ki.prototype={
R(){return new C.ael()}}
C.ael.prototype={
ad(){var x,w=this
w.aq()
x=w.a
w.e=x.d
x.c.an(0,w.ga1c())},
bi(d){var x,w,v=this
v.bC(d)
x=d.c
if(x!==v.a.c){w=v.ga1c()
x.a2(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a2(0,this.ga1c())
this.a6()},
aTe(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gby(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c7y(w,x))},
b5F(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aT(x,null,y.w).w
w=this.a
if(x.ax)w.c.hy(0)
else w.c.hZ(0,B.ee,G.Cv)},
u(d){var x,w,v,u=this,t=null,s=B.j.ae(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iU(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.x(B.K,D.aDf,B.r,t,t,D.afs,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bF(B.z,2)
r.push(A.cb(t,A.x(B.K,A.h(""+s,t,t,t,t,B.hQ,t,t),B.r,t,B.lc,new A.I(B.t,t,v,x,t,t,B.x),t,20,t,B.CS,t,t,t),t,t,t,-6,-6,t))}q.push(A.cb(16,A.bi(t,!0,t,A.aY(new A.bA(B.aw,t,B.aC,B.r,r,t),u.gb5E(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bA(B.aw,t,B.aC,B.y,q,t)}}
C.bnS.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aXM.prototype={
$1(d){return A.mV(d,null,!0,null,null,y.S,y.z)},
gWX(d){return D.agR},
axU(d,e,f,g,h){return this.gWX(this).$3$1(e,f,g,h)}}
C.aXN.prototype={
$3$1(d,e,f,g){return C.d6F(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alo.prototype={}
C.Ix.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_D(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.ac1.prototype={}
C.a5f.prototype={}
var z=a.updateTypes(["~()","Zm(N)","Ow(N)","F<~>(c)","t<c>()","w3(c)","xL<0^,1^>(0^(){$allTransitiveDependencies!w<ha>?,argument!M?,dependencies!w<ha>?,from!kQ?,isAutoDispose!C,name!c?,retry!bo?(v,M)?})<fb<1^>,M?>"])
C.cNq.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.at2,A.y(A.a([A.O(A.a([new C.NT(B.jT,"Foto","photo",x),new C.NT(D.aBQ,"Ficheiro","file",x),new C.NT(R.jQ,"Sticker","sticker",x),new C.NT(D.aBI,"GIF","gif",x)],w),B.v,B.a0t,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:68}
C.cNr.prototype={
$1(d){return D.coy},
$S:z+1}
C.cNs.prototype={
$1(d){return D.clM},
$S:z+2}
C.bJF.prototype={
$0(){return A.al(this.b,!1).af(this.a.e)},
$S:0}
C.cz2.prototype={
$0(){return A.al(this.a,!1).af(this.b)},
$S:0}
C.bZx.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZy.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.be(this.b,y.P),v=A.u(w),w=new A.ag(w,w.gA(w),v.i("ag<V.E>")),u=y.f,v=v.i("V.E");w.q();){t=w.d
x=t==null?v.a(t):t
J.br(s,new A.X(A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZz.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bZA.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bZC.prototype={
$2(d,e){var x=null,w=this.a
return A.eY(!1,x,!0,A.fS(A.W(10),A.k5(w.e[e].a,x,B.bE,x,x,x,x),B.ba),x,!0,x,x,x,x,x,x,x,x,new C.bZB(w,d,e),x,x,x,x,x,x,x)},
$S:1335}
C.bZB.prototype={
$0(){return A.al(this.b,!1).af(this.a.e[this.c].b)},
$S:0}
C.aZW.prototype={
$0(){var x=y.H
return A.al(this.b,!1).h_(A.tt(new C.aZT(this.a),null,x),x)},
$S:0}
C.aZT.prototype={
$1(d){var x=null
return A.kv(A.cV9(B.an,x,B.t,x),B.an,A.bO(I.cWr(B.Z,A.po(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1336}
C.aZV.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1337}
C.aZU.prototype={
$3(d,e,f){var x=null
return A.x(x,D.aDu,B.r,B.a4,x,x,x,120,x,x,x,x,this.a)},
$S:70}
C.aZX.prototype={
$0(){return A.z4(A.dA(this.a.c,0,null),B.qj,null)},
$S:0}
C.bEg.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bEh.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aK(0)
x=w.y
w.y=null
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y4(x).cB(new C.bEe(),new C.bEf(),y.H)}},
$S:0}
C.bEe.prototype={
$1(d){},
$S:114}
C.bEf.prototype={
$1(d){},
$S:11}
C.bEi.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dY(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.B(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.B(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.X(v,new A.ac(Date.now(),0,!1).em(5e6)))}u.akd()},
$S:197}
C.bEj.prototype={
$1(d){return this.a.akd()},
$S:65}
C.bEd.prototype={
$2(d,e){return e.b.fe(this.a)},
$S:1338}
C.bEm.prototype={
$1(d){},
$S:264}
C.bEn.prototype={
$1(d){},
$S:11}
C.bEk.prototype={
$1(d){},
$S:264}
C.bEl.prototype={
$1(d){},
$S:11}
C.cTD.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:22}
C.cSZ.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.Iq,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r)
p.push(A.jn(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDd,r,r,r,r,new C.cSY(d,u),!1,r,r,r,r,r,s,r,t,r,F.P6,r))}return A.bB(!0,new A.S(D.asA,A.y(A.a([D.c9Q,B.ar,D.caO,B.P,new A.di(1,B.bb,A.d6(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:32}
C.cSY.prototype={
$0(){return A.al(this.a,!1).af(this.b)},
$S:0}
C.b_8.prototype={
$3(d,e,f){var x=null
return A.ky(A.aY(A.x(B.K,d,B.r,x,x,B.bV,x,44,x,x,x,x,44),f,x),x,e)},
$S:1339}
C.b_5.prototype={
$0(){return A.al(this.a,!1).hz()},
$S:0}
C.b_7.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_6.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bnR(A.h(t,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bP6)
return r},
$S:62}
C.bPL.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
C.aZZ.prototype={
$1(d){return this.a.ai0(this.b)},
$S:3}
C.b__.prototype={
$0(){return this.a.ai0(this.b)},
$S:0}
C.b_1.prototype={
$2(d,e){return B.ab},
$S:117}
C.b_0.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bF(B.z,1.5)
return A.aY(A.x(B.K,A.h(w.w[e],x,x,x,x,B.dZ,x,x),B.r,x,x,new A.I(B.t,x,u,v,x,x,B.x),x,34,x,B.cG,x,x,x),new C.aZY(w,e),x)},
$S:179}
C.aZY.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c7y.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_D.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Ix.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adE.prototype,"gaTb","HT",3)
w(C,"dME","dzo",5)
v(C.w3.prototype,"giD","d0",4)
var t
v(t=C.ael.prototype,"ga1c","aTe",0)
v(t,"gb5E","b5F",0)
u(C,"dLG",1,function(){return{$allTransitiveDependencies:B.cM,argument:B.cM,dependencies:B.cM,from:B.cM,isAutoDispose:B.cM,name:B.cM,retry:B.cM}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["biK",function(d,e,f,g,h,i,j,k){return C.biK(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.biK(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.biK(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.M,[C.It,C.B4,C.aXM,C.aXN,C.alo])
w(A.bt,[C.cNq,C.cNr,C.cNs,C.aZT,C.aZV,C.aZU,C.bEg,C.bEe,C.bEf,C.bEi,C.bEj,C.bEm,C.bEn,C.bEk,C.bEl,C.cTD,C.cSZ,C.b_8,C.b_7,C.b_6,C.aZZ])
w(A.L,[C.NT,C.Zm,C.Ra,C.anO,C.ac2,C.zx,C.anN,C.Rb])
w(A.bL,[C.bJF,C.cz2,C.bZx,C.bZy,C.bZz,C.bZA,C.bZB,C.aZW,C.aZX,C.bEh,C.cSY,C.b_5,C.bPL,C.b__,C.aZY,C.c7y,C.b_D])
w(A.G,[C.Ow,C.Ki])
w(A.a_,[C.adE,C.ael])
w(A.cK,[C.bZC,C.bEd,C.b_1,C.b_0])
v(C.w3,A.fb)
v(C.bnS,A.fg)
v(C.ac1,A.kQ)
v(C.Ix,C.ac1)
v(C.a5f,C.Ix)
x(C.ac1,C.alo)})()
A.bq(b.typeUniverse,JSON.parse('{"Zm":{"L":[],"e":[],"f":[]},"Ow":{"G":[],"e":[],"f":[]},"NT":{"L":[],"e":[],"f":[]},"adE":{"a_":["Ow"]},"Ra":{"L":[],"e":[],"f":[]},"w3":{"fb":["t<c>"]},"anO":{"L":[],"e":[],"f":[]},"ac2":{"L":[],"e":[],"f":[]},"Ki":{"G":[],"e":[],"f":[]},"zx":{"L":[],"e":[],"f":[]},"anN":{"L":[],"e":[],"f":[]},"Rb":{"L":[],"e":[],"f":[]},"ael":{"a_":["Ki"]},"Ix":{"kQ":[],"ha":[],"H2":[],"lN":[]},"a5f":{"Ix":["1","2","2","3","2","xL<1,2>"],"kQ":[],"ha":[],"H2":[],"lN":[],"Ix.0":"1"}}'))
A.PJ(b.typeUniverse,JSON.parse('{"alo":5,"ac1":6}'))
var y=(function rtii(){var x=A.z
return{D:x("cH"),E:x("ce"),V:x("r<d4>"),X:x("r<pD<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dt"),S:x("fb<@>"),F:x("+(c,ac)"),C:x("B4"),N:x("c"),q:x("dl"),z:x("@"),r:x("v"),B:x("It?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.caq=new A.D("Powered by GIPHY",null,H.Io,null,null,null,null,null,null,null)
D.acM=new A.d_(B.e_,null,null,D.caq,null)
D.afs=new A.I(B.z,null,null,null,B.ie,null,B.ap)
D.Kr=new C.aXM()
D.agR=new C.aXN()
D.arC=new A.a3(0,0,0,24)
D.as1=new A.a3(12,10,14,10)
D.asx=new A.a3(16,16,16,12)
D.asz=new A.a3(16,16,16,24)
D.asA=new A.a3(16,16,16,8)
D.asD=new A.a3(16,2,16,8)
D.at2=new A.a3(20,18,20,24)
D.atY=new A.a3(8,12,8,12)
D.aBI=new A.b0(57404,"HeroiconsSolid",null,!1)
D.aBQ=new A.b0(57436,"HeroiconsSolid",null,!1)
D.P7=new A.b8(B.i9,18,B.bp,null,"Verificado",null)
D.aDd=new A.b8(B.fe,null,B.W,null,null,null)
D.aBx=new A.b0(57347,"HeroiconsSolid",null,!1)
D.aDf=new A.b8(D.aBx,20,B.t,null,null,null)
D.aDm=new A.b8(B.lG,20,B.t,null,null,null)
D.aDu=new A.b8(B.jT,null,B.W,null,null,null)
D.aCw=new A.b8(B.vf,null,null,null,null,null)
D.aEH=new A.dE(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwK=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bz3=x([],A.z("r<dai>"))
D.bz6=x([],A.z("r<+(c,~())>"))
D.ig=x([],y.L)
D.aml=new A.Z(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.an9=new A.Z(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aoc=new A.Z(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amM=new A.Z(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDv=x([D.aml,B.cR,D.an9,D.aoc,D.amM],A.z("r<Z>"))
D.bP6=new A.jM("report",!0,P.aaz,null,A.z("jM<c>"))
D.bPe=new C.bnS(1,"under")
D.ckP=new C.ac2(null)
D.bPi=new A.eF(null,0,0,null,null,null,D.ckP,null)
D.bWV=new A.c5(1/0,null,null,null)
D.bXr=new S.ye(12,3,null)
D.ca5=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null)
D.bYP=new A.bG(D.ca5,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cbH=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null)
D.bYU=new A.bG(D.cbH,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c8R=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null)
D.bZg=new A.bG(D.c8R,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c78=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null)
D.c9Q=new A.D("Que mensagem queres denunciar?",null,B.hP,null,null,null,null,null,null,null)
D.caO=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null)
D.clM=new C.Ow(null)
D.coy=new C.Zm(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_j","CH",()=>D.Kr.axU(0,C.dME(),A.z("w3"),A.z("t<c>"),y.N))})()};
(a=>{a["WaHLkbC3ahDWGikNz2wdXtCn45I="]=a.current})($__dart_deferred_initializers__);