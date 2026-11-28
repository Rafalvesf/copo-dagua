((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,E,L,M,N,O,C={
dI1(){var x,w=$.I0(),v=J.nN(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aN(B.j.hD(w.pC(256),16),2,"0")
return B.e.hz(v)},
aVc(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aVc=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Q()
q=r.b
q===$&&A.b()
q=q.gbs().e.a
u=(q==null?null:q.r).a
t=B.f.u(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dI1()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.R("chat-attachments")
x=3
return A.d(q.yg(s,d,new A.qB("3600",!1,f)),$async$aVc)
case 3:r=r.b.ay
r===$&&A.b()
v=r.R("chat-attachments").Ck(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aVc,w)},
de_(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.bR(null,new C.cNF(),!1,d,!0,!1,null,l),$async$rG)
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
return A.d(new A.mV().aBG(85,2048,B.fB),$async$rG)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kh(),$async$rG)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fb(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aVc(t,s,C.de_(s)),$async$rG)
case 12:v=new j.IC(f,r,s)
x=1
break
case 7:x=13
return A.d($.diw().xW(D.bz6,null,null),$async$rG)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kh(),$async$rG)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a4(D.bZq)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.c8(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbtB(p))
if(B.f.fb(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aVc(t,l,C.de_(l)),$async$rG)
case 15:v=new j.IC(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bR(null,new C.cNG(),!1,d,!0,!1,null,l),$async$rG)
case 16:n=f
v=n==null?null:new C.IC("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bR(null,new C.cNH(),!1,d,!0,!0,null,l),$async$rG)
case 17:m=f
v=m==null?null:new C.IC(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rG,w)},
IC:function IC(d,e,f){this.a=d
this.b=e
this.c=f},
cNF:function cNF(){},
cNG:function cNG(){},
cNH:function cNH(){},
O6:function O6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bKw:function bKw(d,e){this.a=d
this.b=e},
ZL:function ZL(d){this.a=d},
cyP:function cyP(d,e){this.a=d
this.b=e},
OJ:function OJ(d){this.a=d},
aeb:function aeb(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
c_t:function c_t(d){this.a=d},
c_u:function c_u(d,e){this.a=d
this.b=e},
c_v:function c_v(d){this.a=d},
c_w:function c_w(d){this.a=d},
c_y:function c_y(d){this.a=d},
c_x:function c_x(d,e,f){this.a=d
this.b=e
this.c=f},
Rr:function Rr(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_W:function b_W(d,e){this.a=d
this.b=e},
b_T:function b_T(d){this.a=d},
b_V:function b_V(d){this.a=d},
b_U:function b_U(d){this.a=d},
b_X:function b_X(d){this.a=d},
dA8(d){return new C.w7(d,A.F(y.N,y.F),new A.aa(A.jk(0,0),0,!1))},
d0u(d){var x,w=J.a6(d)
if(w.gY(d))return null
x=w.dq(d,new C.cU3(),y.N).bx(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w7:function w7(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bF8:function bF8(){},
bF9:function bF9(d){this.a=d},
bF6:function bF6(){},
bF7:function bF7(){},
bFa:function bFa(d,e){this.a=d
this.b=e},
bFb:function bFb(d){this.a=d},
bF5:function bF5(d){this.a=d},
bFe:function bFe(){},
bFf:function bFf(){},
bFc:function bFc(){},
bFd:function bFd(){},
cU3:function cU3(){},
a_K(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_K=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a4(D.bZO)
x=1
break}x=3
return A.d(A.bR(null,new C.cTp(A.dq(h,0,A.eu(12,"count",y.r),A.a8(h).c).bx(0)),!1,d,!0,!0,null,y.C),$async$a_K)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(K.wz(d,e,f,u.c,u.d,g,t),$async$a_K)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_K,w)},
B9:function B9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTp:function cTp(d){this.a=d},
cTo:function cTo(d,e){this.a=d
this.b=e},
cVZ(d,e,f,g,h,i,j,k,l){return new C.aot(g,d,k,h,i,e,j,l,f,null)},
aot:function aot(d,e,f,g,h,i,j,k,l,m){var _=this
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
b08:function b08(){},
b05:function b05(d){this.a=d},
b07:function b07(d){this.a=d},
b06:function b06(d){this.a=d},
cGP(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.af)
v=new A.b7(16,16)
u=d[x]
w.push(new A.bK(1,B.au,A.w(t,A.x(A.a([A.h(u.a,1,B.a1,t,t,B.cd,t,t),B.aS,A.h(u.b,t,t,t,t,B.bk,B.a3,t)],s),B.u,B.h,B.l),B.r,t,t,new A.O(B.ac,t,t,new A.cI(v,v,v,v),t,t,B.y),t,t,t,D.aua,t,t,t),t))
B.e.n(r,w)}return A.N(r,B.u,B.h,B.l,0,t)},
al9(d,e,f){var x,w=null
if(f){x=A.fZ(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.a9,B.bm,w,w,B.df,w)
x=new A.am(A.ht(A.h(d,w,w,w,w,w,w,w),e,x),w)}else{x=A.cd(B.a4,w,w,B.t,w,w,B.a9,w,w,B.df)
x=new A.am(A.bD(A.h(d,w,w,w,w,w,w,w),e,x),w)}return A.aG(x,52,w)},
d_r(d,e,f,g){var x=null,w=y.p,v=A.a([new A.dg(1,B.be,A.h(d,x,x,x,x,B.cd,B.a3,x),x)],w)
if(g)B.e.n(v,A.a([B.dM,D.Pj],w))
v=A.a([new A.cg(d,76,e,!1,!0,x),B.aE,A.N(v,B.u,B.h,B.I,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aS,A.h(f,x,x,x,x,B.L,B.a3,x)],w))
return new A.by(B.aw,x,B.aC,B.x,A.a([new A.S(B.iK,A.bG(A.x(v,B.u,B.h,B.l),x,x),x),D.bPg],w),x)},
cGw(d,e){var x,w,v=null,u=A.aT(d,B.dP,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a0)
w.push(e[x])
B.e.n(s,w)}return A.bF(!0,new A.e7(new A.aP(0,1/0,0,u.a.b*0.9),A.dU(A.x(s,B.F,B.h,B.l),B.x,v,B.am,v,B.av),v),v,B.Y,!1)},
acz:function acz(d){this.a=d},
d3o(d){var x,w,v,u
for(x=new A.cf(d),w=y.E,x=new A.aj(x,x.gA(0),w.i("aj<V.E>")),w=w.i("V.E"),v=0;x.q();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDw[B.j.aD(v,5)]},
cVY(d,e,f,g,h,i,j){return new C.aos(d,i,f,e,g,j,h,null)},
zC:function zC(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aos:function aos(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_Z:function b_Z(d,e){this.a=d
this.b=e},
b0_:function b0_(d,e){this.a=d
this.b=e},
b01:function b01(){},
b00:function b00(d){this.a=d},
b_Y:function b_Y(d,e){this.a=d
this.b=e},
Rs:function Rs(d,e){this.c=d
this.a=e},
Kt:function Kt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeW:function aeW(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c8y:function c8y(d,e){this.a=d
this.b=e},
bp8:function bp8(d,e){this.a=d
this.b=e},
aYN:function aYN(){},
aYO:function aYO(){},
am2:function am2(){},
IG:function IG(){},
b0E:function b0E(d,e){this.a=d
this.b=e},
acy:function acy(){},
d7f(d,e,f,g,h,i,j,k){return new C.a5M(A.dLO(C.dMv(),i,j),d,g,h,e,A.alx(e),f,i.i("@<0>").b7(j).b7(k).i("a5M<1,2,3>"))},
bk1(d,e,f,g,h,i,j,k,l,m){return new A.xY(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xY<1,2>"))},
a5M:function a5M(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,P,Q,R,F,S
J=c[1]
A=c[0]
B=c[2]
G=c[384]
H=c[180]
I=c[336]
K=c[156]
E=c[239]
L=c[172]
M=c[170]
N=c[157]
O=c[433]
C=a.updateHolder(c[123],C)
D=c[234]
P=c[270]
Q=c[382]
R=c[397]
F=c[232]
S=c[405]
C.IC.prototype={
gar(d){return this.c}}
C.O6.prototype={
t(d){var x=null,w=A.W(18),v=A.W(18)
return A.f_(!1,w,!0,new A.S(B.h0,A.x(A.a([A.w(x,A.b4(this.c,$.ay,x,x,26),B.r,x,x,new A.O(B.ac,x,x,v,x,x,B.y),x,58,x,x,x,x,58),B.aE,A.h(this.d,x,x,x,x,B.kh,x,x)],y.p),B.u,B.h,B.I),x),x,!0,x,x,x,x,x,x,x,x,new C.bKw(this,d),x,x,x,x,x,x,x)}}
C.ZL.prototype={
t(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwP[x]
v=new A.b7(14,14)
s.push(A.f_(!1,new A.cI(v,v,v,v),!0,new A.S(B.q3,A.asT(w,B.jC,u,u),u),u,!0,u,u,u,u,u,u,u,u,new C.cyP(d,w),u,u,u,u,u,u,u))}return new A.S(D.asA,A.x(A.a([D.c7Y,B.S,A.a3E(1,s,4,8,8,u,B.e7,!0)],t),B.G,B.h,B.I),u)}}
C.OJ.prototype={
P(){return new C.aeb(new A.aI(B.aq,$.ab()),D.ig)}}
C.aeb.prototype={
ad(){this.ao()
this.HV("")},
m(){var x=this.d
x.a_$=$.ab()
x.X$=0
this.a6()},
HV(d){return this.bhd(d)},
bhd(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HV=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.c_t(s))
v=3
m=B.f.C(d)
l=m.length===0
r=l?"trending":"search"
k=A.p(r)
q=A.F(y.N,y.z)
J.b3(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b3(q,"limit","24")
J.b3(q,"rating","pg")
l=!l
if(l)J.b3(q,"q",m)
if(l)J.b3(q,"lang","pt")
p=A.ajI("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aVE(p,null),$async$HV)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bo.j8(0,A.jh(A.jf(q.e)).bI(0,q.w),null)),"data"))
s.p(new C.c_u(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.c_v(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.c_w(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HV,w)},
t(d){var x=this,w=null,v=A.aT(d,w,y.w).w,u=A.cr(w,B.a8,!1,w,!0,B.x,w,A.ct(),x.d,w,w,w,w,w,2,D.aF_,B.a_,!0,w,!0,w,!1,w,B.aD,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTQ(),w,!1,w,w,!1,w,!0,w,B.am,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.ay,w,B.b3,w,B.rU,w,w),t=x.r
if(t!=null)t=A.bG(A.h(t,w,w,w,w,B.mu,B.a3,w),w,w)
else t=x.f?D.bY0:M.ba2(D.bYo,new C.c_y(x),x.e.length,w,w,!1)
return A.aG(new A.S(D.asy,A.x(A.a([u,B.ae,A.a5(t,1),B.aE,D.ad6],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.Rr.prototype={
t(d){var x,w,v,u,t,s=this,r=null,q=A.aT(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b2(s.c,"asset:"))return A.asT(B.f.bF(s.c,6),B.jC,120,120)
if(p==="image"||p==="gif")return A.d5(r,A.hX(A.W(16),new A.e7(new A.aP(0,q,0,320),A.jw(s.c,new C.b_U(q),B.bx,r,new C.b_V(q),r,r),r),B.bh),B.a_,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_W(s,d),r,r,r,r,r,r,!1,B.b_)
p=A.W(16)
x=s.f
w=x?$.ay:B.ac
v=A.W(16)
u=A.b4(O.ON,x?B.t:$.ay,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aH(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.E,r,r,!0,r,r,r,r,r,r,r,r),r,r)
return A.f_(!1,p,!0,A.w(r,A.N(A.a([u,B.ab,new A.dg(1,B.be,t,r),B.bg,A.b4(I.vh,x?B.t:B.V,r,r,18)],y.p),B.u,B.h,B.I,0,r),B.r,r,new A.aP(0,q,0,1/0),new A.O(w,r,r,v,r,r,B.y),r,r,r,D.as4,r,r,r),r,!0,r,r,r,r,r,r,r,r,new C.b_X(s),r,r,r,r,r,r,r)},
gar(d){return this.e}}
C.w7.prototype={
d0(){var x=this,w=y.T,v=A.eS(x).G(A.cA($.bb(),new C.bF8(),y.D,w),w)
A.eS(x).NQ(new C.bF9(x))
if(v==null)return B.a8
w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.M_(0,"typing:"+x.x,B.yo).bys(new C.bFa(x,v),"typing")
w.PJ(0)
x.y=w
x.Q=A.rn(B.hu,new C.bFb(x))
return B.a8},
akq(){var x,w=this,v=w.z
v.eg(v,new C.bF5(new A.aa(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c5(v,v.r,v.e,A.u(v).i("c5<2>"));v.q();)x.push(v.d.a)
if(x.length!==J.aS(w.gZ(0))||!B.e.e5(x,J.dnJ(w.gZ(0))))w.sZ(0,x)},
acN(d){var x,w=this,v=w.y,u=A.eS(w).a0(0,$.bb(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.aa(Date.now(),0,!1)
if(x.cc(w.as).a<2e6)return
w.as=x
v.aet(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GW).cH(new C.bFe(),new C.bFf(),y.H)},
cY(d){var x=this.y,w=A.eS(this).a0(0,$.bb(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.aa(A.jk(0,0),0,!1)
x.aet(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GW).cH(new C.bFc(),new C.bFd(),y.H)}}
C.B9.prototype={}
C.aot.prototype={
t(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cg(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.dg(1,B.be,A.h(s.c,1,B.a1,r,r,B.aa,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.dM,D.Pj],x))
w=A.a([A.N(w,B.u,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uP,A.w(r,A.h(v,1,r,r,r,B.jk,r,r),B.r,r,r,new A.O(B.cL,r,r,u,r,r,B.y),r,r,r,B.D5,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aH(r,r,B.V,r,r,r,r,r,r,r,r,13,r,r,B.b1,r,r,!0,r,r,r,r,r,r,r,r),r,r))}t=A.N(A.a([q,B.al,A.a5(A.x(w,B.G,B.h,B.I),1)],x),B.u,B.h,B.l,0,r)
q=A.a([new A.d4(0,B.bn,B.z.c3(0.06),B.Go,14)],y.V)
w=A.aT(d,B.b5,y.w).w
v=new C.b08().$3(B.Ee,"Voltar",new C.b05(d))
u=s.r
v=A.a([v,B.al,A.a5(u==null?t:A.aO(t,u,r),1)],x)
B.e.n(v,A.a([B.al,A.Es(A.w(B.J,R.Ef,B.r,r,r,B.cf,r,44,r,r,r,r,44),r,new C.b06(s),new C.b07(s),r,D.bPc,"Mais op\xe7\xf5es",y.N)],x))
return A.w(r,A.x(A.a([A.N(v,B.u,B.h,B.l,0,r)],x),B.F,B.h,B.I),B.r,r,r,new A.O(B.t,r,r,B.tF,q,r,B.y),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gar(d){return this.c}}
C.acz.prototype={
t(d){return B.ah}}
C.zC.prototype={
t(d){var x=null,w=A.aT(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(E.N0,A.h(v,x,x,x,x,A.aH(x,x,C.d3o(v),x,x,x,x,x,x,x,x,12,x,x,B.E,x,x,!0,x,x,x,x,x,x,x,x),x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aH(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bj,x,1.4,!0,x,x,x,x,x,x,x,x),x,x))
return new A.e7(new A.aP(0,w.a.a*0.78,0,1/0),A.w(x,A.x(o,B.G,B.h,B.I),B.r,x,x,new A.O(r,x,x,new A.cI(F.yh,F.yh,new A.b7(q,q),new A.b7(p,p)),x,x,B.y),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.aos.prototype={
aib(d){if(!N.GU(this.c.a.a)){d.O(y.q).f.a4(D.bZl)
return}this.d.$0()},
t(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aO(A.w(B.J,B.qg,B.r,t,t,B.cf,t,44,t,t,t,t,44),u.e,t),B.ab],s))
x=A.W(24)
w=A.bE(B.z,1.5)
r.push(A.a5(A.w(B.bi,A.cr(t,B.a8,!1,t,!0,B.x,t,A.ct(),u.c,t,t,t,t,t,2,A.iV(t,B.aT,t,B.Y,t,t,t,t,!0,B.aT,t,t,t,t,t,t,!1,t,t,t,t,B.aT,t,t,t,t,t,t,t,t,B.l4,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.a_,!0,t,!0,t,!1,t,B.aD,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_Z(u,d),t,!1,t,t,!1,t,!0,t,B.am,t,t,t,t,t,t,t,t,t,t,t,B.eH,!0,B.ay,t,B.b3,t,B.a9K,t,t),B.r,t,t,new A.O(B.t,t,w,x,t,t,B.y),t,48,t,B.c_,t,t,t),1))
r.push(B.ab)
r.push(A.bh(t,!0,t,A.aO(A.w(B.J,D.aDE,B.r,t,t,B.cf,t,44,t,t,t,t,44),new C.b0_(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
v=A.N(r,B.u,B.h,B.l,0,t)
r=A.a([new A.d4(0,B.bn,B.z.c3(0.12),B.k7,24)],y.V)
x=A.a([],s)
w=u.w.length
if(w!==0&&u.x!=null)B.e.n(x,A.a([A.aG(A.a4R(B.x,new C.b00(u),w,t,B.jA,B.bR,new C.b01()),34,t),B.ae],s))
x.push(v)
return A.w(t,A.bF(!0,new A.S(B.hy,A.x(x,B.F,B.h,B.I),t),t,D.arF,!1),B.r,t,t,new A.O(B.t,t,t,B.pi,r,t,B.y),t,t,t,t,t,t,t)}}
C.Rs.prototype={
t(d){var x=null,w=this.c
return A.an6(B.f9,w==null?D.bXp:new A.S(D.asD,A.bG(A.h(w,x,x,x,x,B.jn,x,x),x,x),x),B.c9,B.aN)}}
C.Kt.prototype={
P(){return new C.aeW()}}
C.aeW.prototype={
ad(){var x,w=this
w.ao()
x=w.a
w.e=x.d
x.c.am(0,w.ga1m())},
bh(d){var x,w,v=this
v.bC(d)
x=d.c
if(x!==v.a.c){w=v.ga1m()
x.a2(0,w)
v.a.c.am(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a2(0,this.ga1m())
this.a6()},
aTT(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbz(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c8y(w,x))},
b6x(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aT(x,null,y.w).w
w=this.a
if(x.ax)w.c.hf(0)
else w.c.i4(0,B.ex,S.CH)},
t(d){var x,w,v,u=this,t=null,s=B.j.ah(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iY(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.w(B.J,D.aDy,B.r,t,t,D.afE,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bE(B.z,2)
r.push(A.ca(t,A.w(B.J,A.h(""+s,t,t,t,t,B.kh,t,t),B.r,t,B.lp,new A.O(B.t,t,v,x,t,t,B.y),t,20,t,B.D3,t,t,t),t,t,t,-6,-6,t))}q.push(A.ca(16,A.bh(t,!0,t,A.aO(new A.by(B.aw,t,B.aC,B.r,r,t),u.gb6w(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.by(B.aw,t,B.aC,B.x,q,t)}}
C.bp8.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aYN.prototype={
$1(d){return A.n1(d,null,!0,null,null,y.S,y.z)},
gX6(d){return D.ah2},
ayq(d,e,f,g,h){return this.gX6(this).$3$1(e,f,g,h)}}
C.aYO.prototype={
$3$1(d,e,f,g){return C.d7f(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.am2.prototype={}
C.IG.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b0E(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.acy.prototype={}
C.a5M.prototype={}
var z=a.updateTypes(["~()","ZL(M)","OJ(M)","D<~>(c)","t<c>()","w7(c)","xY<0^,1^>(0^(){$allTransitiveDependencies!z<hb>?,argument!L?,dependencies!z<hb>?,from!kU?,isAutoDispose!C,name!c?,retry!bx?(v,L)?})<fq<1^>,L?>"])
C.cNF.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.at5,A.x(A.a([A.N(A.a([new C.O6(B.jX,"Foto","photo",x),new C.O6(D.aC6,"Ficheiro","file",x),new C.O6(P.kD,"Sticker","sticker",x),new C.O6(D.aBZ,"GIF","gif",x)],w),B.u,B.a0J,B.l,0,x)],w),B.u,B.h,B.I),x)},
$S:70}
C.cNG.prototype={
$1(d){return D.cpg},
$S:z+1}
C.cNH.prototype={
$1(d){return D.cmD},
$S:z+2}
C.bKw.prototype={
$0(){return A.ap(this.b,!1).au(this.a.e)},
$S:0}
C.cyP.prototype={
$0(){return A.ap(this.a,!1).au(this.b)},
$S:0}
C.c_t.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.c_u.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bi(this.b,y.P),v=A.u(w),w=new A.aj(w,w.gA(w),v.i("aj<V.E>")),u=y.f,v=v.i("V.E");w.q();){t=w.d
x=t==null?v.a(t):t
J.bn(s,new A.X(A.a0(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a0(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.c_v.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.c_w.prototype={
$0(){return this.a.f=!1},
$S:0}
C.c_y.prototype={
$2(d,e){var x=null,w=this.a
return A.f_(!1,x,!0,A.hX(A.W(10),A.jw(w.e[e].a,x,B.bx,x,x,x,x),B.bh),x,!0,x,x,x,x,x,x,x,x,new C.c_x(w,d,e),x,x,x,x,x,x,x)},
$S:1332}
C.c_x.prototype={
$0(){return A.ap(this.b,!1).au(this.a.e[this.c].b)},
$S:0}
C.b_W.prototype={
$0(){var x=y.H
return A.ap(this.b,!1).h3(A.tv(new C.b_T(this.a),null,x),x)},
$S:0}
C.b_T.prototype={
$1(d){var x=null
return A.ln(A.cVH(B.ao,x,B.t,x),B.ao,A.bG(H.cWZ(B.Y,A.op(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1333}
C.b_V.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1334}
C.b_U.prototype={
$3(d,e,f){var x=null
return A.w(x,D.aDL,B.r,B.ac,x,x,x,120,x,x,x,x,this.a)},
$S:72}
C.b_X.prototype={
$0(){return A.ze(A.dA(this.a.c,0,null),B.ql,null)},
$S:0}
C.bF8.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bF9.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aI(0)
x=w.y
w.y=null
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y4(x).cH(new C.bF6(),new C.bF7(),y.H)}},
$S:0}
C.bF6.prototype={
$1(d){},
$S:119}
C.bF7.prototype={
$1(d){},
$S:13}
C.bFa.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dY(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.y(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.y(t.h(0,"name"))
x=u==null?null:B.f.C(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.X(v,new A.aa(Date.now(),0,!1).ea(5e6)))}u.akq()},
$S:226}
C.bFb.prototype={
$1(d){return this.a.akq()},
$S:58}
C.bF5.prototype={
$2(d,e){return e.b.f3(this.a)},
$S:1335}
C.bFe.prototype={
$1(d){},
$S:278}
C.bFf.prototype={
$1(d){},
$S:13}
C.bFc.prototype={
$1(d){},
$S:278}
C.bFd.prototype={
$1(d){},
$S:13}
C.cU3.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:26}
C.cTp.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v]
t=B.f.C(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.Iw,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r)
p.push(A.jq(!1,B.Y,r,r,!0,r,r,r,!0,r,D.aDw,r,r,r,r,new C.cTo(d,u),!1,r,r,r,r,r,s,r,t,r,E.Pi,r))}return A.bF(!0,new A.S(D.asB,A.x(A.a([D.caE,B.ap,D.cbF,B.M,new A.dg(1,B.be,A.d3(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.I),r),r,B.Y,!0)},
$S:32}
C.cTo.prototype={
$0(){return A.ap(this.a,!1).au(this.b)},
$S:0}
C.b08.prototype={
$3(d,e,f){var x=null
return A.kE(A.aO(A.w(B.J,d,B.r,x,x,B.cf,x,44,x,x,x,x,44),f,x),x,e)},
$S:1336}
C.b05.prototype={
$0(){return A.iL(this.a,!1)},
$S:0}
C.b07.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b06.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.I)(x),++u){t=x[u].a
r.push(A.bp7(A.h(t,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bP4)
return r},
$S:61}
C.b_Z.prototype={
$1(d){return this.a.aib(this.b)},
$S:3}
C.b0_.prototype={
$0(){return this.a.aib(this.b)},
$S:0}
C.b01.prototype={
$2(d,e){return B.ab},
$S:121}
C.b00.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bE(B.z,1.5)
return A.aO(A.w(B.J,A.h(w.w[e],x,x,x,x,B.dx,x,x),B.r,x,x,new A.O(B.t,x,u,v,x,x,B.y),x,34,x,B.cF,x,x,x),new C.b_Y(w,e),x)},
$S:196}
C.b_Y.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c8y.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b0E.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("IG.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.aeb.prototype,"gaTQ","HV",3)
w(C,"dNt","dA8",5)
v(C.w7.prototype,"giH","d0",4)
var t
v(t=C.aeW.prototype,"ga1m","aTT",0)
v(t,"gb6w","b6x",0)
u(C,"dMv",1,function(){return{$allTransitiveDependencies:B.cK,argument:B.cK,dependencies:B.cK,from:B.cK,isAutoDispose:B.cK,name:B.cK,retry:B.cK}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bk1",function(d,e,f,g,h,i,j,k){return C.bk1(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bk1(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bk1(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.L,[C.IC,C.B9,C.aYN,C.aYO,C.am2])
w(A.bv,[C.cNF,C.cNG,C.cNH,C.b_T,C.b_V,C.b_U,C.bF8,C.bF6,C.bF7,C.bFa,C.bFb,C.bFe,C.bFf,C.bFc,C.bFd,C.cU3,C.cTp,C.b08,C.b07,C.b06,C.b_Z])
w(A.H,[C.O6,C.ZL,C.Rr,C.aot,C.acz,C.zC,C.aos,C.Rs])
w(A.bO,[C.bKw,C.cyP,C.c_t,C.c_u,C.c_v,C.c_w,C.c_x,C.b_W,C.b_X,C.bF9,C.cTo,C.b05,C.b0_,C.b_Y,C.c8y,C.b0E])
w(A.G,[C.OJ,C.Kt])
w(A.Z,[C.aeb,C.aeW])
w(A.cL,[C.c_y,C.bF5,C.b01,C.b00])
v(C.w7,A.fq)
v(C.bp8,A.fj)
v(C.acy,A.kU)
v(C.IG,C.acy)
v(C.a5M,C.IG)
x(C.acy,C.am2)})()
A.bq(b.typeUniverse,JSON.parse('{"ZL":{"H":[],"e":[],"f":[]},"OJ":{"G":[],"e":[],"f":[]},"O6":{"H":[],"e":[],"f":[]},"aeb":{"Z":["OJ"]},"Rr":{"H":[],"e":[],"f":[]},"w7":{"fq":["t<c>"]},"aot":{"H":[],"e":[],"f":[]},"acz":{"H":[],"e":[],"f":[]},"Kt":{"G":[],"e":[],"f":[]},"zC":{"H":[],"e":[],"f":[]},"aos":{"H":[],"e":[],"f":[]},"Rs":{"H":[],"e":[],"f":[]},"aeW":{"Z":["Kt"]},"IG":{"kU":[],"hb":[],"Hf":[],"lO":[]},"a5M":{"IG":["1","2","2","3","2","xY<1,2>"],"kU":[],"hb":[],"Hf":[],"lO":[],"IG.0":"1"}}'))
A.PY(b.typeUniverse,JSON.parse('{"am2":5,"acy":6}'))
var y=(function rtii(){var x=A.B
return{D:x("cH"),E:x("cf"),V:x("r<d4>"),X:x("r<pG<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dC"),S:x("fq<@>"),F:x("+(c,aa)"),C:x("B9"),N:x("c"),q:x("dj"),z:x("@"),r:x("v"),B:x("IC?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cbd=new A.E("Powered by GIPHY",null,G.Iu,null,null,null,null,null,null,null)
D.ad6=new A.dd(B.dQ,null,null,D.cbd,null)
D.afE=new A.O(B.z,null,null,null,B.ie,null,B.ar)
D.KE=new C.aYN()
D.ah2=new C.aYO()
D.arF=new A.a3(0,0,0,24)
D.as4=new A.a3(12,10,14,10)
D.asy=new A.a3(16,16,16,12)
D.asA=new A.a3(16,16,16,24)
D.asB=new A.a3(16,16,16,8)
D.asD=new A.a3(16,2,16,8)
D.at5=new A.a3(20,18,20,24)
D.aua=new A.a3(8,12,8,12)
D.aBZ=new A.aZ(57404,"HeroiconsSolid",null,!1)
D.aC6=new A.aZ(57436,"HeroiconsSolid",null,!1)
D.Pj=new A.ba(B.hC,18,B.a4,null,"Verificado",null)
D.aDw=new A.ba(B.fj,null,B.V,null,null,null)
D.aBO=new A.aZ(57347,"HeroiconsSolid",null,!1)
D.aDy=new A.ba(D.aBO,20,B.t,null,null,null)
D.aDE=new A.ba(B.nU,20,B.t,null,null,null)
D.aDL=new A.ba(B.jX,null,B.V,null,null,null)
D.aCO=new A.ba(B.vj,null,null,null,null,null)
D.aF_=new A.dH(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwP=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bz6=x([],A.B("r<daW>"))
D.bza=x([],A.B("r<+(c,~())>"))
D.ig=x([],y.L)
D.amm=new A.Y(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.ana=new A.Y(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aob=new A.Y(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amN=new A.Y(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDw=x([D.amm,B.cU,D.ana,D.aob,D.amN],A.B("r<Y>"))
D.bP4=new A.jO("report",!0,Q.aaS,null,A.B("jO<c>"))
D.bPc=new C.bp8(1,"under")
D.clG=new C.acz(null)
D.bPg=new A.eU(null,0,0,null,null,null,D.clG,null)
D.bXp=new A.bU(1/0,null,null,null)
D.bY0=new L.Bl(12,3,null)
D.bYo=new A.Bo(3,6,6,1,null)
D.caV=new A.E("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null)
D.bZl=new A.bI(D.caV,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.x,null)
D.ccy=new A.E("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null)
D.bZq=new A.bI(D.ccy,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.x,null)
D.c9G=new A.E("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null)
D.bZO=new A.bI(D.c9G,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.x,null)
D.c7Y=new A.E("Stickers",null,B.aa,null,null,null,null,null,null,null)
D.caE=new A.E("Que mensagem queres denunciar?",null,B.fR,null,null,null,null,null,null,null)
D.cbF=new A.E("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null)
D.cmD=new C.OJ(null)
D.cpg=new C.ZL(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e0g","CO",()=>D.KE.ayq(0,C.dNt(),A.B("w7"),A.B("t<c>"),y.N))})()};
(a=>{a["VjJprsV/ItBFF/JOXnADoKEqMj4="]=a.current})($__dart_deferred_initializers__);