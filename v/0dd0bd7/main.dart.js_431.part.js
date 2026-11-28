((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,I,K,L,M,F,N,O,C={
dGv(){var x,w=$.HN(),v=J.nG(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aT(B.j.hA(w.pu(256),16),2,"0")
return B.e.hv(v)},
aTT(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aTT=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Q()
q=r.b
q===$&&A.b()
q=q.gbu().e.a
u=(q==null?null:q.r).a
t=B.f.t(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dGv()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r2(s,d,new A.v2(!1,f)),$async$aTT)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cd(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTT,w)},
dcF(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
rB(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rB=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bP(null,new C.cMM(),!1,d,!0,!1,null,l),$async$rB)
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
return A.d(new A.lI().YO(85,2048,B.ft),$async$rB)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kh(),$async$rB)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fn(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aTT(t,s,C.dcF(s)),$async$rB)
case 12:v=new j.Io(f,r,s)
x=1
break
case 7:x=13
return A.d($.dh3().xU(D.bz1,null,null),$async$rB)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kh(),$async$rB)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a0(D.bYM)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.cb(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbs8(p))
if(B.f.fn(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aTT(t,l,C.dcF(l)),$async$rB)
case 15:v=new j.Io(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bP(null,new C.cMN(),!1,d,!0,!1,null,l),$async$rB)
case 16:n=f
v=n==null?null:new C.Io("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bP(null,new C.cMO(),!1,d,!0,!0,null,l),$async$rB)
case 17:m=f
v=m==null?null:new C.Io(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rB,w)},
Io:function Io(d,e,f){this.a=d
this.b=e
this.c=f},
cMM:function cMM(){},
cMN:function cMN(){},
cMO:function cMO(){},
NO:function NO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJi:function bJi(d,e){this.a=d
this.b=e},
Zg:function Zg(d){this.a=d},
cyp:function cyp(d,e){this.a=d
this.b=e},
Or:function Or(d){this.a=d},
adv:function adv(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bZ4:function bZ4(d){this.a=d},
bZ5:function bZ5(d,e){this.a=d
this.b=e},
bZ6:function bZ6(d){this.a=d},
bZ7:function bZ7(d){this.a=d},
bZ9:function bZ9(d){this.a=d},
bZ8:function bZ8(d,e,f){this.a=d
this.b=e
this.c=f},
R2:function R2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZB:function aZB(d,e){this.a=d
this.b=e},
aZy:function aZy(d){this.a=d},
aZA:function aZA(d){this.a=d},
aZz:function aZz(d){this.a=d},
aZC:function aZC(d){this.a=d},
dyH(d){return new C.w0(d,A.E(y.N,y.F),new A.ac(A.jh(0,0),0,!1))},
d_o(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dn(d,new C.cSZ(),y.N).bx(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w0:function w0(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bDU:function bDU(){},
bDV:function bDV(d){this.a=d},
bDS:function bDS(){},
bDT:function bDT(){},
bDW:function bDW(d,e){this.a=d
this.b=e},
bDX:function bDX(d){this.a=d},
bDR:function bDR(d){this.a=d},
bE_:function bE_(){},
bE0:function bE0(){},
bDY:function bDY(){},
bDZ:function bDZ(){},
cSZ:function cSZ(){},
a_f(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_f=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a0(D.bZ8)
x=1
break}x=3
return A.d(A.bP(null,new C.cSk(A.dy(h,0,A.es(12,"count",y.r),A.a8(h).c).bx(0)),!1,d,!0,!0,null,y.C),$async$a_f)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wr(d,e,f,u.c,u.d,g,t),$async$a_f)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_f,w)},
B0:function B0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSk:function cSk(d){this.a=d},
cSj:function cSj(d,e){this.a=d
this.b=e},
cUL(d,e,f,g,h,i,j,k,l){return new C.anA(g,d,k,h,i,e,j,l,f,null)},
anA:function anA(d,e,f,g,h,i,j,k,l,m){var _=this
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
aZO:function aZO(){},
aZL:function aZL(d){this.a=d},
aZN:function aZN(d){this.a=d},
aZM:function aZM(d){this.a=d},
cG7(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ae)
v=new A.b5(16,16)
u=d[x]
w.push(new A.bI(1,B.at,A.x(t,A.z(A.a([A.h(u.a,1,B.a1,t,t,B.c3,t,t),B.aU,A.h(u.b,t,t,t,t,B.be,B.a3,t)],s),B.v,B.h,B.l),B.r,t,t,new A.I(B.a4,t,t,new A.cy(v,v,v,v),t,t,B.x),t,t,t,D.atX,t,t,t),t))
B.e.n(r,w)}return A.N(r,B.v,B.h,B.l,0,t)},
akf(d,e,f){var x,w=null
if(f){x=A.fL(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.aa,B.c6,w,w,B.cY,w)
x=A.hh(A.h(d,w,w,w,w,w,w,w),e,x)}else{x=A.cb(B.z,w,w,B.t,w,w,B.aa,w,w,B.cY)
x=A.bA(A.h(d,w,w,w,w,w,w,w),e,x)}return A.aJ(x,52,w)},
cZg(d,e,f,g){var x=null,w=y.p,v=A.a([new A.dh(1,B.ba,A.h(d,x,x,x,x,B.c3,B.a3,x),x)],w)
if(g)B.e.n(v,A.a([B.dY,D.P5],w))
v=A.a([new A.cf(d,76,e,!1,!0,x),B.aD,A.N(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.h(f,x,x,x,x,B.L,B.a3,x)],w))
return new A.bB(B.aw,x,B.aC,B.y,A.a([new A.S(B.jB,A.bN(A.z(v,B.v,B.h,B.l),x,x),x),D.bPf],w),x)},
cFQ(d,e){var x,w,v=null,u=A.aS(d,B.dR,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a_)
w.push(e[x])
B.e.n(s,w)}return A.bz(!0,new A.e9(new A.aR(0,1/0,0,u.a.b*0.9),A.dR(A.z(s,B.E,B.h,B.l),B.y,v,B.al,v,B.av),v),v,B.Z,!1)},
abW:function abW(d){this.a=d},
bPo:function bPo(d){this.a=d},
d2l(d){var x,w,v,u
for(x=new A.cd(d),w=y.E,x=new A.ag(x,x.gA(0),w.i("ag<V.E>")),w=w.i("V.E"),v=0;x.q();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDs[B.j.aI(v,5)]},
cUK(d,e,f,g,h,i,j){return new C.anz(d,i,f,e,g,j,h,null)},
zu:function zu(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anz:function anz(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aZE:function aZE(d,e){this.a=d
this.b=e},
aZF:function aZF(d,e){this.a=d
this.b=e},
aZH:function aZH(){},
aZG:function aZG(d){this.a=d},
aZD:function aZD(d,e){this.a=d
this.b=e},
R3:function R3(d,e){this.c=d
this.a=e},
Kd:function Kd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aec:function aec(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c76:function c76(d,e){this.a=d
this.b=e},
bnu:function bnu(d,e){this.a=d
this.b=e},
aXr:function aXr(){},
aXs:function aXs(){},
alc:function alc(){},
Is:function Is(){},
b_i:function b_i(d,e){this.a=d
this.b=e},
abV:function abV(){},
d60(d,e,f,g,h,i,j,k){return new C.a5a(A.dKg(C.dKY(),i,j),d,g,h,e,A.akE(e),f,i.i("@<0>").b7(j).b7(k).i("a5a<1,2,3>"))},
bio(d,e,f,g,h,i,j,k,l,m){return new A.xK(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xK<1,2>"))},
a5a:function a5a(d,e,f,g,h,i,j,k){var _=this
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
C.Io.prototype={
gap(d){return this.c}}
C.NO.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eW(!1,w,!0,new A.S(B.hv,A.z(A.a([A.x(x,A.b8(this.c,$.at,x,x,26),B.r,x,x,new A.I(B.a4,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aD,A.h(this.d,x,x,x,x,B.hO,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,new C.bJi(this,d),x,x,x,x,x,x,x)}}
C.Zg.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwI[x]
v=new A.b5(14,14)
s.push(A.eW(!1,new A.cy(v,v,v,v),!0,new A.S(B.q0,A.arS(w,B.kj,u,u),u),u,!0,u,u,u,u,u,u,u,u,new C.cyp(d,w),u,u,u,u,u,u,u))}return new A.S(D.asy,A.z(A.a([D.c70,B.R,A.ar8(1,s,4,8,8,u,B.dO,!0)],t),B.G,B.h,B.J),u)}}
C.Or.prototype={
S(){return new C.adv(new A.aE(B.ak,$.aa()),D.ie)}}
C.adv.prototype={
ad(){this.aq()
this.HR("")},
m(){var x=this.d
x.Z$=$.aa()
x.W$=0
this.a7()},
HR(d){return this.bfW(d)},
bfW(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HR=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bZ4(s))
v=3
m=B.f.B(d)
l=m.length===0
r=l?"trending":"search"
k=A.p(r)
q=A.E(y.N,y.z)
J.b2(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b2(q,"limit","24")
J.b2(q,"rating","pg")
l=!l
if(l)J.b2(q,"q",m)
if(l)J.b2(q,"lang","pt")
p=A.aiT("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUj(p,null),$async$HR)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bt.jG(0,A.jf(A.jd(q.e)).bI(0,q.w),null)),"data"))
s.p(new C.bZ5(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.bZ6(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.bZ7(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HR,w)},
u(d){var x=this,w=null,v=A.aS(d,w,y.w).w,u=A.cr(w,B.a6,!1,w,!0,B.y,w,A.ct(),x.d,w,w,w,w,w,2,D.aEF,B.W,!0,w,!0,w,!1,w,B.aB,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaT3(),w,!1,w,w,!1,w,!0,w,B.al,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b0,w,B.rR,w,w),t=x.r
if(t!=null)t=A.bN(A.h(t,w,w,w,w,B.mj,B.a3,w),w,w)
else t=x.f?D.bXj:N.ar7(T.a8n,new C.bZ9(x),x.e.length,w,w,!1)
return A.aJ(new A.S(D.asw,A.z(A.a([u,B.ac,A.a4(t,1),B.aD,D.acJ],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.R2.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aS(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b1(s.c,"asset:"))return A.arS(B.f.bD(s.c,6),B.kj,120,120)
if(p==="image"||p==="gif")return A.cp(r,A.fQ(A.W(16),new A.e9(new A.aR(0,q,0,320),A.k2(s.c,new C.aZz(q),B.bE,r,new C.aZA(q),r,r),r),B.bc),B.W,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.aZB(s,d),r,r,r,r,r,r,!1,B.aE)
p=A.W(16)
x=s.f
w=x?$.at:B.a4
v=A.W(16)
u=A.b8(O.Ow,x?B.t:$.at,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aH(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r)
return A.eW(!1,p,!0,A.x(r,A.N(A.a([u,B.ab,new A.dh(1,B.ba,t,r),B.bj,A.b8(L.vc,x?B.t:B.V,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.I(w,r,r,v,r,r,B.x),r,r,r,D.as0,r,r,r),r,!0,r,r,r,r,r,r,r,r,new C.aZC(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
C.w0.prototype={
d_(){var x=this,w=y.T,v=A.eP(x).G(A.cC($.b6(),new C.bDU(),y.D,w),w)
A.eP(x).NE(new C.bDV(x))
if(v==null)return B.a6
w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.LR(0,"typing:"+x.x,B.yf).bx2(new C.bDW(x,v),"typing")
w.Pv(0)
x.y=w
x.Q=A.u3(B.hq,new C.bDX(x))
return B.a6},
ak9(){var x,w=this,v=w.z
v.ee(v,new C.bDR(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c3(v,v.r,v.e,A.u(v).i("c3<2>"));v.q();)x.push(v.d.a)
if(x.length!==J.aO(w.ga4(0))||!B.e.e6(x,J.dmf(w.ga4(0))))w.sa4(0,x)},
acw(d){var x,w=this,v=w.y,u=A.eP(w).a_(0,$.b6(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.cs(w.as).a<2e6)return
w.as=x
v.aeb(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GI).cB(new C.bE_(),new C.bE0(),y.H)},
cZ(d){var x=this.y,w=A.eP(this).a_(0,$.b6(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.jh(0,0),0,!1)
x.aeb(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GI).cB(new C.bDY(),new C.bDZ(),y.H)}}
C.B0.prototype={}
C.anA.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cf(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.dh(1,B.ba,A.h(s.c,1,B.a1,r,r,B.a9,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.dY,D.P5],x))
w=A.a([A.N(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uK,A.x(r,A.h(v,1,r,r,r,B.he,r,r),B.r,r,r,new A.I(B.cx,r,r,u,r,r,B.x),r,r,r,B.CT,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aH(r,r,B.V,r,r,r,r,r,r,r,r,13,r,r,B.b_,r,r,!0,r,r,r,r,r,r,r,r),r,r))}t=A.N(A.a([q,B.af,A.a4(A.z(w,B.G,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d2(0,B.bm,B.z.cc(0.06),B.G7,14)],y.V)
w=A.aS(d,B.b5,y.w).w
v=new C.aZO().$3(K.OU,"Voltar",new C.aZL(d))
u=s.r
v=A.a([v,B.af,A.a4(u==null?t:A.aX(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Ed(A.x(B.K,Q.E4,B.r,r,r,B.bV,r,44,r,r,r,r,44),r,new C.aZM(s),new C.aZN(s),r,D.bPb,"Mais op\xe7\xf5es",y.N)],x))
return A.x(r,A.z(A.a([A.N(v,B.v,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.I(B.t,r,r,B.tA,q,r,B.x),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gap(d){return this.c}}
C.abW.prototype={
u(d){var x=null
return A.bh(x,!0,x,A.cp(x,A.x(x,B.hz,B.r,x,x,new A.I(B.z,x,x,x,x,x,B.ap),x,44,x,x,x,x,44),B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPo(d),x,x,x,x,x,x,!1,B.aE),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zu.prototype={
u(d){var x=null,w=A.aS(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(F.ML,A.h(v,x,x,x,x,A.aH(x,x,C.d2l(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aH(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bl,x,1.4,!0,x,x,x,x,x,x,x,x),x,x))
return new A.e9(new A.aR(0,w.a.a*0.78,0,1/0),A.x(x,A.z(o,B.G,B.h,B.J),B.r,x,x,new A.I(r,x,x,new A.cy(E.y8,E.y8,new A.b5(q,q),new A.b5(p,p)),x,x,B.x),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.anz.prototype={
ahX(d){if(!A.ub(this.c.a.a)){d.O(y.q).f.a0(D.bYH)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aX(A.x(B.K,B.OX,B.r,t,t,B.bV,t,44,t,t,t,t,44),u.e,t),B.ab],s))
x=A.W(24)
r.push(A.a4(A.x(B.bb,A.cr(t,B.a6,!1,t,!0,B.y,t,A.ct(),u.c,t,t,t,t,t,2,A.j5(t,B.br,t,B.Z,t,t,t,t,!0,B.br,t,t,t,t,t,t,!1,t,t,t,t,B.br,t,t,t,t,t,t,t,t,B.mg,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.W,!0,t,!0,t,!1,t,B.aB,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.aZE(u,d),t,!1,t,t,!1,t,!0,t,B.al,t,t,t,t,t,t,t,t,t,t,t,B.fh,!0,B.au,t,B.b0,t,B.a9q,t,t),B.r,t,t,new A.I(B.a4,t,t,x,t,t,B.x),t,48,t,B.bY,t,t,t),1))
r.push(B.ab)
r.push(A.bh(t,!0,t,A.aX(A.x(B.K,D.aDk,B.r,t,t,B.bV,t,44,t,t,t,t,44),new C.aZF(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.N(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d2(0,B.bm,B.z.cc(0.12),B.kI,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aJ(A.a4f(B.y,new C.aZG(u),v,t,t,B.bJ,new C.aZH()),34,t),B.ac],s))
x.push(w)
return A.x(t,A.bz(!0,new A.S(B.ht,A.z(x,B.E,B.h,B.J),t),t,D.arB,!1),B.r,t,t,new A.I(B.t,t,t,B.pd,r,t,B.x),t,t,t,t,t,t,t)}}
C.R3.prototype={
u(d){var x=null,w=this.c
return A.aWh(B.f6,w==null?D.bWN:new A.S(D.asC,A.bN(A.h(w,x,x,x,x,B.kb,x,x),x,x),x),B.cE,B.aM)}}
C.Kd.prototype={
S(){return new C.aec()}}
C.aec.prototype={
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
aT6(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gby(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c76(w,x))},
b5t(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aS(x,null,y.w).w
w=this.a
if(x.ax)w.c.hw(0)
else w.c.hY(0,B.es,G.Ct)},
u(d){var x,w,v,u=this,t=null,s=B.j.ae(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iS(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.x(B.K,D.aDd,B.r,t,t,D.afp,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bD(B.z,2)
r.push(A.ca(t,A.x(B.K,A.h(""+s,t,t,t,t,B.hO,t,t),B.r,t,B.lb,new A.I(B.t,t,v,x,t,t,B.x),t,20,t,B.CQ,t,t,t),t,t,t,-6,-6,t))}q.push(A.ca(16,A.bh(t,!0,t,A.aX(new A.bB(B.aw,t,B.aC,B.r,r,t),u.gb5s(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bB(B.aw,t,B.aC,B.y,q,t)}}
C.bnu.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aXr.prototype={
$1(d){return A.mT(d,null,!0,null,null,y.S,y.z)},
gWU(d){return D.agO},
axP(d,e,f,g,h){return this.gWU(this).$3$1(e,f,g,h)}}
C.aXs.prototype={
$3$1(d,e,f,g){return C.d60(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alc.prototype={}
C.Is.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_i(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.abV.prototype={}
C.a5a.prototype={}
var z=a.updateTypes(["~()","Zg(O)","Or(O)","F<~>(c)","t<c>()","w0(c)","xK<0^,1^>(0^(){$allTransitiveDependencies!w<h7>?,argument!L?,dependencies!w<h7>?,from!kN?,isAutoDispose!C,name!c?,retry!bm?(v,L)?})<f9<1^>,L?>"])
C.cMM.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.at1,A.z(A.a([A.N(A.a([new C.NO(B.jR,"Foto","photo",x),new C.NO(D.aBO,"Ficheiro","file",x),new C.NO(R.jO,"Sticker","sticker",x),new C.NO(D.aBG,"GIF","gif",x)],w),B.v,B.a0r,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:72}
C.cMN.prototype={
$1(d){return D.coq},
$S:z+1}
C.cMO.prototype={
$1(d){return D.clE},
$S:z+2}
C.bJi.prototype={
$0(){return A.am(this.b,!1).af(this.a.e)},
$S:0}
C.cyp.prototype={
$0(){return A.am(this.a,!1).af(this.b)},
$S:0}
C.bZ4.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZ5.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bd(this.b,y.P),v=A.u(w),w=new A.ag(w,w.gA(w),v.i("ag<V.E>")),u=y.f,v=v.i("V.E");w.q();){t=w.d
x=t==null?v.a(t):t
J.bq(s,new A.X(A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZ6.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bZ7.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bZ9.prototype={
$2(d,e){var x=null,w=this.a
return A.eW(!1,x,!0,A.fQ(A.W(10),A.k2(w.e[e].a,x,B.bE,x,x,x,x),B.bc),x,!0,x,x,x,x,x,x,x,x,new C.bZ8(w,d,e),x,x,x,x,x,x,x)},
$S:1329}
C.bZ8.prototype={
$0(){return A.am(this.b,!1).af(this.a.e[this.c].b)},
$S:0}
C.aZB.prototype={
$0(){var x=y.H
return A.am(this.b,!1).h_(A.tp(new C.aZy(this.a),null,x),x)},
$S:0}
C.aZy.prototype={
$1(d){var x=null
return A.ks(A.cUu(B.an,x,B.t,x),B.an,A.bN(I.cVL(B.Z,A.pm(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1330}
C.aZA.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1331}
C.aZz.prototype={
$3(d,e,f){var x=null
return A.x(x,D.aDs,B.r,B.a4,x,x,x,120,x,x,x,x,this.a)},
$S:71}
C.aZC.prototype={
$0(){return A.z1(A.dz(this.a.c,0,null),B.qi,null)},
$S:0}
C.bDU.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bDV.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aK(0)
x=w.y
w.y=null
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y0(x).cB(new C.bDS(),new C.bDT(),y.H)}},
$S:0}
C.bDS.prototype={
$1(d){},
$S:124}
C.bDT.prototype={
$1(d){},
$S:11}
C.bDW.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dX(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.B(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.B(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.X(v,new A.ac(Date.now(),0,!1).ek(5e6)))}u.ak9()},
$S:250}
C.bDX.prototype={
$1(d){return this.a.ak9()},
$S:67}
C.bDR.prototype={
$2(d,e){return e.b.fe(this.a)},
$S:1332}
C.bE_.prototype={
$1(d){},
$S:241}
C.bE0.prototype={
$1(d){},
$S:11}
C.bDY.prototype={
$1(d){},
$S:241}
C.bDZ.prototype={
$1(d){},
$S:11}
C.cSZ.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:23}
C.cSk.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.Io,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r)
p.push(A.jm(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDb,r,r,r,r,new C.cSj(d,u),!1,r,r,r,r,r,s,r,t,r,F.P4,r))}return A.bz(!0,new A.S(D.asz,A.z(A.a([D.c9I,B.ar,D.caG,B.P,new A.dh(1,B.ba,A.d4(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:33}
C.cSj.prototype={
$0(){return A.am(this.a,!1).af(this.b)},
$S:0}
C.aZO.prototype={
$3(d,e,f){var x=null
return A.kv(A.aX(A.x(B.K,d,B.r,x,x,B.bV,x,44,x,x,x,x,44),f,x),x,e)},
$S:1333}
C.aZL.prototype={
$0(){return A.am(this.a,!1).i6()},
$S:0}
C.aZN.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.aZM.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bnt(A.h(t,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bP3)
return r},
$S:60}
C.bPo.prototype={
$0(){return A.am(this.a,!1).bj()},
$S:0}
C.aZE.prototype={
$1(d){return this.a.ahX(this.b)},
$S:3}
C.aZF.prototype={
$0(){return this.a.ahX(this.b)},
$S:0}
C.aZH.prototype={
$2(d,e){return B.ab},
$S:111}
C.aZG.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bD(B.z,1.5)
return A.aX(A.x(B.K,A.h(w.w[e],x,x,x,x,B.dZ,x,x),B.r,x,x,new A.I(B.t,x,u,v,x,x,B.x),x,34,x,B.cG,x,x,x),new C.aZD(w,e),x)},
$S:170}
C.aZD.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c76.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_i.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Is.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adv.prototype,"gaT3","HR",3)
w(C,"dLW","dyH",5)
v(C.w0.prototype,"giD","d_",4)
var t
v(t=C.aec.prototype,"ga1a","aT6",0)
v(t,"gb5s","b5t",0)
u(C,"dKY",1,function(){return{$allTransitiveDependencies:B.cM,argument:B.cM,dependencies:B.cM,from:B.cM,isAutoDispose:B.cM,name:B.cM,retry:B.cM}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bio",function(d,e,f,g,h,i,j,k){return C.bio(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bio(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bio(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.L,[C.Io,C.B0,C.aXr,C.aXs,C.alc])
w(A.br,[C.cMM,C.cMN,C.cMO,C.aZy,C.aZA,C.aZz,C.bDU,C.bDS,C.bDT,C.bDW,C.bDX,C.bE_,C.bE0,C.bDY,C.bDZ,C.cSZ,C.cSk,C.aZO,C.aZN,C.aZM,C.aZE])
w(A.M,[C.NO,C.Zg,C.R2,C.anA,C.abW,C.zu,C.anz,C.R3])
w(A.bK,[C.bJi,C.cyp,C.bZ4,C.bZ5,C.bZ6,C.bZ7,C.bZ8,C.aZB,C.aZC,C.bDV,C.cSj,C.aZL,C.bPo,C.aZF,C.aZD,C.c76,C.b_i])
w(A.G,[C.Or,C.Kd])
w(A.a0,[C.adv,C.aec])
w(A.cJ,[C.bZ9,C.bDR,C.aZH,C.aZG])
v(C.w0,A.f9)
v(C.bnu,A.ff)
v(C.abV,A.kN)
v(C.Is,C.abV)
v(C.a5a,C.Is)
x(C.abV,C.alc)})()
A.bp(b.typeUniverse,JSON.parse('{"Zg":{"M":[],"e":[],"f":[]},"Or":{"G":[],"e":[],"f":[]},"NO":{"M":[],"e":[],"f":[]},"adv":{"a0":["Or"]},"R2":{"M":[],"e":[],"f":[]},"w0":{"f9":["t<c>"]},"anA":{"M":[],"e":[],"f":[]},"abW":{"M":[],"e":[],"f":[]},"Kd":{"G":[],"e":[],"f":[]},"zu":{"M":[],"e":[],"f":[]},"anz":{"M":[],"e":[],"f":[]},"R3":{"M":[],"e":[],"f":[]},"aec":{"a0":["Kd"]},"Is":{"kN":[],"h7":[],"GY":[],"lL":[]},"a5a":{"Is":["1","2","2","3","2","xK<1,2>"],"kN":[],"h7":[],"GY":[],"lL":[],"Is.0":"1"}}'))
A.PE(b.typeUniverse,JSON.parse('{"alc":5,"abV":6}'))
var y=(function rtii(){var x=A.y
return{D:x("cE"),E:x("cd"),V:x("r<d2>"),X:x("r<pB<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("ds"),S:x("f9<@>"),F:x("+(c,ac)"),C:x("B0"),N:x("c"),q:x("dk"),z:x("@"),r:x("v"),B:x("Io?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cai=new A.D("Powered by GIPHY",null,H.Im,null,null,null,null,null,null,null)
D.acJ=new A.cY(B.e_,null,null,D.cai,null)
D.afp=new A.I(B.z,null,null,null,B.id,null,B.ap)
D.Kq=new C.aXr()
D.agO=new C.aXs()
D.arB=new A.a3(0,0,0,24)
D.as0=new A.a3(12,10,14,10)
D.asw=new A.a3(16,16,16,12)
D.asy=new A.a3(16,16,16,24)
D.asz=new A.a3(16,16,16,8)
D.asC=new A.a3(16,2,16,8)
D.at1=new A.a3(20,18,20,24)
D.atX=new A.a3(8,12,8,12)
D.aBG=new A.aZ(57404,"HeroiconsSolid",null,!1)
D.aBO=new A.aZ(57436,"HeroiconsSolid",null,!1)
D.P5=new A.b7(B.i8,18,B.bp,null,"Verificado",null)
D.aDb=new A.b7(B.fd,null,B.V,null,null,null)
D.aBv=new A.aZ(57347,"HeroiconsSolid",null,!1)
D.aDd=new A.b7(D.aBv,20,B.t,null,null,null)
D.aDk=new A.b7(B.lD,20,B.t,null,null,null)
D.aDs=new A.b7(B.jR,null,B.V,null,null,null)
D.aCu=new A.b7(B.ve,null,null,null,null,null)
D.aEF=new A.dD(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCu,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwI=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bz1=x([],A.y("r<d9D>"))
D.bz4=x([],A.y("r<+(c,~())>"))
D.ie=x([],y.L)
D.amj=new A.Z(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.an7=new A.Z(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aoa=new A.Z(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amK=new A.Z(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDs=x([D.amj,B.cR,D.an7,D.aoa,D.amK],A.y("r<Z>"))
D.bP3=new A.jL("report",!0,P.aaw,null,A.y("jL<c>"))
D.bPb=new C.bnu(1,"under")
D.ckH=new C.abW(null)
D.bPf=new A.eE(null,0,0,null,null,null,D.ckH,null)
D.bWN=new A.c4(1/0,null,null,null)
D.bXj=new S.yc(12,3,null)
D.c9Y=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null)
D.bYH=new A.bE(D.c9Y,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cbz=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null)
D.bYM=new A.bE(D.cbz,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c8J=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null)
D.bZ8=new A.bE(D.c8J,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c70=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null)
D.c9I=new A.D("Que mensagem queres denunciar?",null,B.hN,null,null,null,null,null,null,null)
D.caG=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null)
D.clE=new C.Or(null)
D.coq=new C.Zg(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZy","CD",()=>D.Kq.axP(0,C.dLW(),A.y("w0"),A.y("t<c>"),y.N))})()};
(a=>{a["uzPlYPHvty39taGG06LYKgdBvJw="]=a.current})($__dart_deferred_initializers__);