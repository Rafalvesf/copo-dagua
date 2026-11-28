((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,L,M,E,N,O,C={
dGm(){var x,w=$.Ql(),v=J.nI(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aW(B.j.hW(w.qV(256),16),2,"0")
return B.e.hN(v)},
aUy(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUy=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Q()
q=r.b
q===$&&A.b()
q=q.gbx().e.a
u=(q==null?null:q.r).a
t=B.f.q(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dGm()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r6(s,d,new A.v2(!1,f)),$async$aUy)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cn(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUy,w)},
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
rF(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rF=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bW(null,new C.cN0(),!1,d,!0,!1,null,l),$async$rF)
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
return A.d(new A.lJ().Zf(85,2048,B.fu),$async$rF)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.km(),$async$rF)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fp(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUy(t,s,C.dcF(s)),$async$rF)
case 12:v=new j.It(f,r,s)
x=1
break
case 7:x=13
return A.d($.dh_().y9(D.bzm,null,null),$async$rF)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.km(),$async$rF)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a1(D.bZO)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.bZ(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbtE(p))
if(B.f.fp(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUy(t,l,C.dcF(l)),$async$rF)
case 15:v=new j.It(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bW(null,new C.cN1(),!1,d,!0,!1,null,l),$async$rF)
case 16:n=f
v=n==null?null:new C.It("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bW(null,new C.cN2(),!1,d,!0,!0,null,l),$async$rF)
case 17:m=f
v=m==null?null:new C.It(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rF,w)},
It:function It(d,e,f){this.a=d
this.b=e
this.c=f},
cN0:function cN0(){},
cN1:function cN1(){},
cN2:function cN2(){},
NS:function NS(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJw:function bJw(d,e){this.a=d
this.b=e},
Zt:function Zt(d){this.a=d},
cyJ:function cyJ(d,e){this.a=d
this.b=e},
Ov:function Ov(d){this.a=d},
adY:function adY(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bZL:function bZL(d){this.a=d},
bZM:function bZM(d,e){this.a=d
this.b=e},
bZN:function bZN(d){this.a=d},
bZO:function bZO(d){this.a=d},
bZQ:function bZQ(d){this.a=d},
bZP:function bZP(d,e,f){this.a=d
this.b=e
this.c=f},
R7:function R7(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_h:function b_h(d,e){this.a=d
this.b=e},
b_e:function b_e(d){this.a=d},
b_g:function b_g(d){this.a=d},
b_f:function b_f(d){this.a=d},
b_i:function b_i(d){this.a=d},
dyz(d){return new C.w4(d,A.E(y.N,y.F),new A.ac(A.j3(0,0),0,!1))},
d_w(d){var x,w=J.a7(d)
if(w.gZ(d))return null
x=w.du(d,new C.cT2(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w4:function w4(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bE7:function bE7(){},
bE8:function bE8(d){this.a=d},
bE5:function bE5(){},
bE6:function bE6(){},
bE9:function bE9(d,e){this.a=d
this.b=e},
bEa:function bEa(d){this.a=d},
bE4:function bE4(d){this.a=d},
bEd:function bEd(){},
bEe:function bEe(){},
bEb:function bEb(){},
bEc:function bEc(){},
cT2:function cT2(){},
a_s(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_s=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a1(D.bZe)
x=1
break}x=3
return A.d(A.bW(null,new C.cSq(A.dL(h,0,A.eA(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_s)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.ww(d,e,f,u.c,u.d,g,t),$async$a_s)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_s,w)},
B9:function B9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSq:function cSq(d){this.a=d},
cSp:function cSp(d,e){this.a=d
this.b=e},
cUP(d,e,f,g,h,i,j,k,l){return new C.ao2(g,d,k,h,i,e,j,l,f,null)},
ao2:function ao2(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_u:function b_u(){},
b_r:function b_r(d){this.a=d},
b_t:function b_t(d){this.a=d},
b_s:function b_s(d){this.a=d},
cGs(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.af)
v=new A.b2(16,16)
u=d[x]
w.push(new A.bH(1,B.ap,A.x(t,A.A(A.a([A.h(u.a,1,B.a1,t,t,B.bV,t,t,t),B.aV,A.h(u.b,t,t,t,t,B.bb,B.a4,t,t)],s),B.v,B.h,B.l),B.r,t,t,new A.I(B.a5,t,t,new A.ci(v,v,v,v),t,t,B.x),t,t,t,D.aui,t,t,t),t))
B.e.n(r,w)}return A.O(r,B.v,B.h,B.l,0,t)},
akJ(d,e,f){var x,w=null
if(f){x=A.fF(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c6,w,w,B.d0,w)
x=A.h5(A.h(d,w,w,w,w,w,w,w,w),e,x)}else{x=A.cj(B.z,w,w,B.t,w,w,B.ab,w,w,B.d0)
x=A.bE(A.h(d,w,w,w,w,w,w,w,w),e,x)}return A.aH(x,52,w)},
cZl(d,e,f,g){var x=null,w=y.p,v=A.a([new A.de(1,B.b9,A.h(d,x,x,x,x,B.bV,B.a4,x,x),x)],w)
if(g)B.e.n(v,A.a([B.e6,D.Pu],w))
v=A.a([new A.cq(d,76,e,!1,!0,x),B.aD,A.O(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aV,A.h(f,x,x,x,x,B.N,B.a4,x,x)],w))
return new A.bB(B.ax,x,B.aE,B.y,A.a([new A.S(B.jC,A.bM(A.A(v,B.v,B.h,B.l),x,x),x),D.bPM],w),x)},
cGc(d,e){var x,w,v=null,u=A.aO(d,B.dS,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a0)
w.push(e[x])
B.e.n(s,w)}return A.bD(!0,new A.e6(new A.aR(0,1/0,0,u.a.b*0.9),A.dU(A.A(s,B.F,B.h,B.l),B.y,v,B.am,v,B.av),v),v,B.Z,!1)},
aci:function aci(d,e){this.c=d
this.a=e},
bPI:function bPI(d){this.a=d},
d2r(d){var x,w,v,u
for(x=new A.cf(d),w=y.E,x=new A.al(x,x.gA(0),w.i("al<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDP[B.j.aG(v,5)]},
cUO(d,e,f,g,h,i,j){return new C.ao1(d,i,f,e,g,j,h,null)},
zG:function zG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ao1:function ao1(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_k:function b_k(d,e){this.a=d
this.b=e},
b_l:function b_l(d,e){this.a=d
this.b=e},
b_n:function b_n(){},
b_m:function b_m(d){this.a=d},
b_j:function b_j(d,e){this.a=d
this.b=e},
R8:function R8(d,e){this.c=d
this.a=e},
Kl:function Kl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeG:function aeG(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c7M:function c7M(d,e){this.a=d
this.b=e},
bnQ:function bnQ(d,e){this.a=d
this.b=e},
aY7:function aY7(){},
aY8:function aY8(){},
alG:function alG(){},
Ix:function Ix(){},
b_Z:function b_Z(d,e){this.a=d
this.b=e},
ach:function ach(){},
d61(d,e,f,g,h,i,j,k){return new C.a5p(A.dK6(C.dKO(),i,j),d,g,h,e,A.al8(e),f,i.i("@<0>").b8(j).b8(k).i("a5p<1,2,3>"))},
bjd(d,e,f,g,h,i,j,k,l,m){return new A.xU(d,h,f,j,k,g,e,i,l.i("@<0>").b8(m).i("xU<1,2>"))},
a5p:function a5p(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,P,Q,R,S,T,F
J=c[1]
A=c[0]
B=c[2]
G=c[409]
H=c[386]
I=c[181]
K=c[436]
L=c[337]
M=c[156]
E=c[244]
N=c[190]
O=c[435]
C=a.updateHolder(c[121],C)
D=c[239]
P=c[384]
Q=c[400]
R=c[272]
S=c[185]
T=c[434]
F=c[237]
C.It.prototype={
gaq(d){return this.c}}
C.NS.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eL(!1,w,!0,new A.S(B.hA,A.A(A.a([A.x(x,A.b6(this.c,$.at,x,x,26),B.r,x,x,new A.I(B.a5,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aD,A.h(this.d,x,x,x,x,B.hl,x,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,x,new C.bJw(this,d),x,x,x,x,x,x,x)}}
C.Zt.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bx2[x]
v=new A.b2(14,14)
s.push(A.eL(!1,new A.ci(v,v,v,v),!0,new A.S(B.qo,A.asi(w,B.kf,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,new C.cyJ(d,w),u,u,u,u,u,u,u))}return new A.S(D.asT,A.A(A.a([D.cdZ,B.R,A.SC(1,s,4,8,8,u,B.dF,!0)],t),B.G,B.h,B.J),u)}}
C.Ov.prototype={
R(){return new C.adY(new A.aE(B.aj,$.aa()),D.ib)}}
C.adY.prototype={
ac(){this.ao()
this.Ic("")},
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a6()},
Ic(d){return this.bhq(d)},
bhq(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Ic=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bZL(s))
v=3
m=B.f.B(d)
l=m.length===0
r=l?"trending":"search"
k=A.q(r)
q=A.E(y.N,y.z)
J.b3(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b3(q,"limit","24")
J.b3(q,"rating","pg")
l=!l
if(l)J.b3(q,"q",m)
if(l)J.b3(q,"lang","pt")
p=A.ajj("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUY(p,null),$async$Ic)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bv.jP(0,A.je(A.jc(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.bZM(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.bZN(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.bZO(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ic,w)},
u(d){var x=this,w=null,v=A.aO(d,w,y.w).w,u=A.cs(w,B.a6,!1,w,!0,B.y,w,A.ct(),x.d,w,w,w,w,w,2,D.aES,B.W,!0,w,!0,w,!1,w,B.aC,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaU_(),w,!1,w,w,!1,w,!0,w,B.am,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b_,w,B.ta,w,w),t=x.r
if(t!=null)t=A.bM(A.h(t,w,w,w,w,B.mt,B.a4,w,w),w,w)
else t=x.f?D.bXZ:N.a3k(w,B.W,T.a8K,new C.bZQ(x),x.e.length,w,w,!1)
return A.aH(new A.S(D.asQ,A.A(A.a([u,B.ac,A.a4(t,1),B.aD,D.ad3],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.R7.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aO(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b2(s.c,"asset:"))return A.asi(B.f.bF(s.c,6),B.kf,120,120)
if(p==="image"||p==="gif")return A.cL(r,A.fT(A.W(16),new A.e6(new A.aR(0,q,0,320),A.k4(s.c,new C.b_f(q),B.bH,r,new C.b_g(q),r,r),r),B.bc),B.W,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_h(s,d),r,r,r,r,r,r,!1,B.aJ)
p=A.W(16)
x=s.f
w=x?$.at:B.a5
v=A.W(16)
u=A.b6(O.OU,x?B.t:$.at,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aI(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.E,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eL(!1,p,!0,A.x(r,A.O(A.a([u,B.ae,new A.de(1,B.b9,t,r),B.bk,A.b6(L.vr,x?B.t:B.U,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.I(w,r,r,v,r,r,B.x),r,r,r,D.ask,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,new C.b_i(s),r,r,r,r,r,r,r)},
gaq(d){return this.e}}
C.w4.prototype={
d5(){var x=this,w=y.T,v=A.eQ(x).G(A.cI($.b9(),new C.bE7(),y.D,w),w)
A.eQ(x).YM(new C.bE8(x))
if(v==null)return B.a6
w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.Me(0,"typing:"+x.x,B.yt).byx(new C.bE9(x,v),"typing")
w.Q2(0)
x.y=w
x.Q=A.u5(B.fS,new C.bEa(x))
return B.a6},
akN(){var x,w=this,v=w.z
v.eg(v,new C.bE4(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c6(v,v.r,v.e,A.u(v).i("c6<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aQ(w.ga4(0))||!B.e.e9(x,J.dm6(w.ga4(0))))w.sa4(0,x)},
ad9(d){var x,w=this,v=w.y,u=A.eQ(w).a0(0,$.b9(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.cH(w.as).a<2e6)return
w.as=x
v.aeN(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GW).cC(new C.bEd(),new C.bEe(),y.H)},
d3(d){var x=this.y,w=A.eQ(this).a0(0,$.b9(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.j3(0,0),0,!1)
x.aeN(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GW).cC(new C.bEb(),new C.bEc(),y.H)}}
C.B9.prototype={}
C.ao2.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cq(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.de(1,B.b9,A.h(s.c,1,B.a1,r,r,B.a9,r,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.e6,D.Pu],x))
w=A.a([A.O(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uY,A.x(r,A.h(v,1,r,r,r,B.hi,r,r,r),B.r,r,r,new A.I(B.cy,r,r,u,r,r,B.x),r,r,r,B.v3,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aI(r,r,B.U,r,r,r,r,r,r,r,r,13,r,r,B.b0,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=A.O(A.a([q,B.ad,A.a4(A.A(w,B.G,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d3(0,B.bo,B.z.cd(0.06),B.Gk,14)],y.V)
w=A.aO(d,B.b5,y.w).w
v=new C.b_u().$3(K.Pi,"Voltar",new C.b_r(d))
u=s.r
v=A.a([v,B.ad,A.a4(u==null?t:A.aX(t,u,r),1)],x)
B.e.n(v,A.a([B.ad,A.Ep(A.x(B.K,Q.Eg,B.r,r,r,B.cc,r,44,r,r,r,r,44),r,new C.b_s(s),new C.b_t(s),r,D.bPD,"Mais op\xe7\xf5es",y.N)],x))
return A.x(r,A.A(A.a([A.O(v,B.v,B.h,B.l,0,r)],x),B.F,B.h,B.J),B.r,r,r,new A.I(B.t,r,r,B.tQ,q,r,B.x),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gaq(d){return this.c}}
C.aci.prototype={
u(d){var x=null
return A.ba(x,!0,x,A.cL(x,A.x(x,B.kD,B.r,x,x,new A.I(B.z,x,this.c?A.bA(B.t,2):x,x,x,x,B.at),x,44,x,x,x,x,44),B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPI(d),x,x,x,x,x,x,!1,B.aJ),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x)}}
C.zG.prototype={
u(d){var x=null,w=A.aO(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(E.N5,A.h(v,x,x,x,x,A.aI(x,x,C.d2r(v),x,x,x,x,x,x,x,x,12,x,x,B.E,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aI(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bp,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.e6(new A.aR(0,w.a.a*0.78,0,1/0),A.x(x,A.A(o,B.G,B.h,B.J),B.r,x,x,new A.I(r,x,x,new A.ci(F.ym,F.ym,new A.b2(q,q),new A.b2(p,p)),x,x,B.x),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.ao1.prototype={
aiy(d){if(!A.uc(this.c.a.a)){d.O(y.q).f.a1(D.bZs)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aX(A.x(B.K,B.Pl,B.r,t,t,B.cc,t,44,t,t,t,t,44),u.e,t),B.ae],s))
x=A.W(24)
r.push(A.a4(A.x(B.bf,A.cs(t,B.a6,!1,t,!0,B.y,t,A.ct(),u.c,t,t,t,t,t,2,A.iT(t,B.bt,t,B.Z,t,t,t,t,!0,B.bt,t,t,t,t,t,t,!1,t,t,t,t,B.bt,t,t,t,t,t,t,t,t,B.mr,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.W,!0,t,!0,t,!1,t,B.aC,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_k(u,d),t,!1,t,t,!1,t,!0,t,B.am,t,t,t,t,t,t,t,t,t,t,t,B.ff,!0,B.au,t,B.b_,t,B.a9K,t,t),B.r,t,t,new A.I(B.a5,t,t,x,t,t,B.x),t,48,t,B.bQ,t,t,t),1))
r.push(B.ae)
r.push(A.ba(t,!0,t,A.aX(A.x(B.K,D.aDx,B.r,t,t,B.cc,t,44,t,t,t,t,44),new C.b_l(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t))
w=A.O(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d3(0,B.bo,B.z.cd(0.12),B.kJ,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aH(A.a4t(B.y,new C.b_m(u),v,t,t,B.bD,new C.b_n()),34,t),B.ac],s))
x.push(w)
return A.x(t,A.bD(!0,new A.S(B.hy,A.A(x,B.F,B.h,B.J),t),t,D.arT,!1),B.r,t,t,new A.I(B.t,t,t,B.pv,r,t,B.x),t,t,t,t,t,t,t)}}
C.R8.prototype={
u(d){var x=null,w=this.c
return A.aWZ(B.f4,w==null?D.bXt:new A.S(D.asX,A.bM(A.h(w,x,x,x,x,B.k8,x,x,x),x,x),x),B.ct,B.aG)}}
C.Kl.prototype={
R(){return new C.aeG()}}
C.aeG.prototype={
ac(){var x,w=this
w.ao()
x=w.a
w.e=x.d
x.c.am(0,w.ga1J())},
bh(d){var x,w,v=this
v.bB(d)
x=d.c
if(x!==v.a.c){w=v.ga1J()
x.a_(0,w)
v.a.c.am(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a_(0,this.ga1J())
this.a6()},
aU2(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbA(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c7M(w,x))},
b70(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aO(x,null,y.w).w
w=this.a
if(x.ax)w.c.hh(0)
else w.c.i1(0,B.et,G.CG)},
u(d){var x,w,v,u=this,t=null,s=B.j.ah(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iV(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.x(B.K,D.aDq,B.r,t,t,D.afI,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bA(B.z,2)
r.push(A.ca(t,A.x(B.K,A.h(""+s,t,t,t,t,B.hl,t,t,t),B.r,t,B.lg,new A.I(B.t,t,v,x,t,t,B.x),t,20,t,B.D3,t,t,t),t,t,t,-6,-6,t))}q.push(A.ca(16,A.ba(t,!0,t,A.aX(new A.bB(B.ax,t,B.aE,B.r,r,t),u.gb7_(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t),t,t,t,20,t,t))}return new A.bB(B.ax,t,B.aE,B.y,q,t)}}
C.bnQ.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aY7.prototype={
$1(d){return A.mX(d,null,!0,null,null,y.S,y.z)},
gXk(d){return D.ah6},
ayE(d,e,f,g,h){return this.gXk(this).$3$1(e,f,g,h)}}
C.aY8.prototype={
$3$1(d,e,f,g){return C.d61(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alG.prototype={}
C.Ix.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_Z(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.ach.prototype={}
C.a5p.prototype={}
var z=a.updateTypes(["~()","Zt(N)","Ov(N)","F<~>(c)","t<c>()","w4(c)","xU<0^,1^>(0^(){$allTransitiveDependencies!B<h6>?,argument!J?,dependencies!B<h6>?,from!kN?,isAutoDispose!y,name!c?,retry!bq?(v,J)?})<fe<1^>,J?>"])
C.cN0.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.atn,A.A(A.a([A.O(A.a([new C.NS(B.jS,"Foto","photo",x),new C.NS(D.aBZ,"Ficheiro","file",x),new C.NS(R.jP,"Sticker","sticker",x),new C.NS(D.aBR,"GIF","gif",x)],w),B.v,B.G1,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:73}
C.cN1.prototype={
$1(d){return D.cpk},
$S:z+1}
C.cN2.prototype={
$1(d){return D.cmy},
$S:z+2}
C.bJw.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e)},
$S:0}
C.cyJ.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.bZL.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZM.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bh(this.b,y.P),v=A.u(w),w=new A.al(w,w.gA(w),v.i("al<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bt(s,new A.a_(A.Z(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.Z(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZN.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bZO.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bZQ.prototype={
$2(d,e){var x=null,w=this.a
return A.eL(!1,x,!0,A.fT(A.W(10),A.k4(w.e[e].a,x,B.bH,x,x,x,x),B.bc),x,!0,x,x,x,x,x,x,x,x,x,new C.bZP(w,d,e),x,x,x,x,x,x,x)},
$S:1321}
C.bZP.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e[this.c].b)},
$S:0}
C.b_h.prototype={
$0(){var x=y.H
return A.am(this.b,!1).fO(A.tr(new C.b_e(this.a),null,x),x)},
$S:0}
C.b_e.prototype={
$1(d){var x=null
return A.kt(A.cUy(B.ao,x,B.t,x),B.ao,A.bM(I.cVV(B.Z,A.pj(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1322}
C.b_g.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1323}
C.b_f.prototype={
$3(d,e,f){var x=null
return A.x(x,D.aDF,B.r,B.a5,x,x,x,120,x,x,x,x,this.a)},
$S:68}
C.b_i.prototype={
$0(){return A.zd(A.dx(this.a.c,0,null),B.qF,null)},
$S:0}
C.bE7.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
C.bE8.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aN(0)
x=w.y
w.y=null
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yg(x).cC(new C.bE5(),new C.bE6(),y.H)}},
$S:0}
C.bE5.prototype={
$1(d){},
$S:112}
C.bE6.prototype={
$1(d){},
$S:11}
C.bE9.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e2(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.M(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a_(v,new A.ac(Date.now(),0,!1).el(5e6)))}u.akN()},
$S:226}
C.bEa.prototype={
$1(d){return this.a.akN()},
$S:63}
C.bE4.prototype={
$2(d,e){return e.b.f5(this.a)},
$S:1324}
C.bEd.prototype={
$1(d){},
$S:283}
C.bEe.prototype={
$1(d){},
$S:11}
C.bEb.prototype={
$1(d){},
$S:283}
C.bEc.prototype={
$1(d){},
$S:11}
C.cT2.prototype={
$1(d){return B.e.gL(d.split(" "))},
$S:22}
C.cSq.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.IE,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jo(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDo,r,r,r,r,new C.cSp(d,u),!1,r,r,r,r,r,s,r,t,r,E.Pt,r))}return A.bD(!0,new A.S(D.asU,A.A(A.a([D.cf5,B.as,D.c9G,B.Q,new A.de(1,B.b9,A.d5(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:43}
C.cSp.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.b_u.prototype={
$3(d,e,f){var x=null
return A.kX(A.aX(A.x(B.K,d,B.r,x,x,B.cc,x,44,x,x,x,x,44),f,x),x,e)},
$S:1325}
C.b_r.prototype={
$0(){return A.am(this.a,!1).iw()},
$S:0}
C.b_t.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_s.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bnP(A.h(t,s,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bPy)
return r},
$S:57}
C.bPI.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
C.b_k.prototype={
$1(d){return this.a.aiy(this.b)},
$S:3}
C.b_l.prototype={
$0(){return this.a.aiy(this.b)},
$S:0}
C.b_n.prototype={
$2(d,e){return B.ae},
$S:109}
C.b_m.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bA(B.z,1.5)
return A.aX(A.x(B.K,A.h(w.w[e],x,x,x,x,B.dQ,x,x,x),B.r,x,x,new A.I(B.t,x,u,v,x,x,B.x),x,34,x,B.cH,x,x,x),new C.b_j(w,e),x)},
$S:166}
C.b_j.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c7M.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_Z.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Ix.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adY.prototype,"gaU_","Ic",3)
w(C,"dLM","dyz",5)
v(C.w4.prototype,"giI","d5",4)
var t
v(t=C.aeG.prototype,"ga1J","aU2",0)
v(t,"gb7_","b70",0)
u(C,"dKO",1,function(){return{$allTransitiveDependencies:B.cP,argument:B.cP,dependencies:B.cP,from:B.cP,isAutoDispose:B.cP,name:B.cP,retry:B.cP}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bjd",function(d,e,f,g,h,i,j,k){return C.bjd(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjd(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjd(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.J,[C.It,C.B9,C.aY7,C.aY8,C.alG])
w(A.bw,[C.cN0,C.cN1,C.cN2,C.b_e,C.b_g,C.b_f,C.bE7,C.bE5,C.bE6,C.bE9,C.bEa,C.bEd,C.bEe,C.bEb,C.bEc,C.cT2,C.cSq,C.b_u,C.b_t,C.b_s,C.b_k])
w(A.L,[C.NS,C.Zt,C.R7,C.ao2,C.aci,C.zG,C.ao1,C.R8])
w(A.bP,[C.bJw,C.cyJ,C.bZL,C.bZM,C.bZN,C.bZO,C.bZP,C.b_h,C.b_i,C.bE8,C.cSp,C.b_r,C.bPI,C.b_l,C.b_j,C.c7M,C.b_Z])
w(A.G,[C.Ov,C.Kl])
w(A.Y,[C.adY,C.aeG])
w(A.cK,[C.bZQ,C.bE4,C.b_n,C.b_m])
v(C.w4,A.fe)
v(C.bnQ,A.eW)
v(C.ach,A.kN)
v(C.Ix,C.ach)
v(C.a5p,C.Ix)
x(C.ach,C.alG)})()
A.bn(b.typeUniverse,JSON.parse('{"Zt":{"L":[],"e":[],"f":[]},"Ov":{"G":[],"e":[],"f":[]},"NS":{"L":[],"e":[],"f":[]},"adY":{"Y":["Ov"]},"R7":{"L":[],"e":[],"f":[]},"w4":{"fe":["t<c>"]},"ao2":{"L":[],"e":[],"f":[]},"aci":{"L":[],"e":[],"f":[]},"Kl":{"G":[],"e":[],"f":[]},"zG":{"L":[],"e":[],"f":[]},"ao1":{"L":[],"e":[],"f":[]},"R8":{"L":[],"e":[],"f":[]},"aeG":{"Y":["Kl"]},"Ix":{"kN":[],"h6":[],"H4":[],"lL":[]},"a5p":{"Ix":["1","2","2","3","2","xU<1,2>"],"kN":[],"h6":[],"H4":[],"lL":[],"Ix.0":"1"}}'))
A.Hx(b.typeUniverse,JSON.parse('{"alG":5,"ach":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cH"),E:x("cf"),V:x("r<d3>"),X:x("r<pB<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dg"),S:x("fe<@>"),F:x("+(c,ac)"),C:x("B9"),N:x("c"),q:x("dp"),z:x("@"),r:x("v"),B:x("It?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c8j=new A.D("Powered by GIPHY",null,H.IC,null,null,null,null,null,null,null,null)
D.ad3=new A.d2(B.e1,null,null,D.c8j,null)
D.afI=new A.I(B.z,null,null,null,B.ia,null,B.at)
D.KG=new C.aY7()
D.ah6=new C.aY8()
D.arT=new A.a3(0,0,0,24)
D.ask=new A.a3(12,10,14,10)
D.asQ=new A.a3(16,16,16,12)
D.asT=new A.a3(16,16,16,24)
D.asU=new A.a3(16,16,16,8)
D.asX=new A.a3(16,2,16,8)
D.atn=new A.a3(20,18,20,24)
D.aui=new A.a3(8,12,8,12)
D.aBR=new A.aW(57404,"HeroiconsSolid",null,!1)
D.aBZ=new A.aW(57436,"HeroiconsSolid",null,!1)
D.Pu=new A.b7(B.i5,18,B.bn,null,"Verificado",null)
D.aDo=new A.b7(B.f9,null,B.U,null,null,null)
D.aBE=new A.aW(57347,"HeroiconsSolid",null,!1)
D.aDq=new A.b7(D.aBE,20,B.t,null,null,null)
D.aDx=new A.b7(B.lK,20,B.t,null,null,null)
D.aDF=new A.b7(B.jS,null,B.U,null,null,null)
D.aCG=new A.b7(B.vu,null,null,null,null,null)
D.aES=new A.dA(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bx2=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bzm=x([],A.w("r<d9F>"))
D.bzp=x([],A.w("r<+(c,~())>"))
D.ib=x([],y.L)
D.amB=new A.X(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.B)
D.anp=new A.X(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.B)
D.aos=new A.X(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.B)
D.an0=new A.X(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.B)
D.bDP=x([D.amB,B.cX,D.anp,D.aos,D.an0],A.w("r<X>"))
D.bPy=new A.jN("report",!0,P.ab2,null,A.w("jN<c>"))
D.bPD=new C.bnQ(1,"under")
D.clB=new C.aci(!1,null)
D.bPM=new A.eH(null,0,0,null,null,null,D.clB,null)
D.bXt=new A.c0(1/0,null,null,null)
D.bXZ=new S.yn(12,3,null)
D.cfh=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bZe=new A.bF(D.cfh,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cgp=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bZs=new A.bF(D.cgp,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.ceF=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bZO=new A.bF(D.ceF,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c9G=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.N,null,null,null,null,null,null,null,null)
D.cdZ=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null,null)
D.cf5=new A.D("Que mensagem queres denunciar?",null,B.hR,null,null,null,null,null,null,null,null)
D.cmy=new C.Ov(null)
D.cpk=new C.Zt(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZl","CO",()=>D.KG.ayE(0,C.dLM(),A.w("w4"),A.w("t<c>"),y.N))})()};
(a=>{a["B4DyA/vLjMIQ2Ew35WBum1Cc4vo="]=a.current})($__dart_deferred_initializers__);