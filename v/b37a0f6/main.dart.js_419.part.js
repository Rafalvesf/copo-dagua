((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,L,M,E,N,O,C={
dHx(){var x,w=$.Qx(),v=J.nP(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aX(B.j.i0(w.r5(256),16),2,"0")
return B.e.hT(v)},
aV8(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aV8=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Q()
q=r.b
q===$&&A.b()
q=q.gbA().e.a
u=(q==null?null:q.r).a
t=B.f.q(e,".")?B.e.ga6(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dHx()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.ri(s,d,new A.v6(!1,f)),$async$aV8)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").CF(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aV8,w)},
ddR(d){var x,w=B.e.ga6(d.split(".")).toLowerCase()
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
rP(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rP=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bZ(null,new C.cO9(),!1,d,!0,!1,null,l),$async$rP)
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
return A.d(new A.lJ().ZL(85,2048,B.fy),$async$rP)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.ks(),$async$rP)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fs(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aV8(t,s,C.ddR(s)),$async$rP)
case 12:v=new j.IC(f,r,s)
x=1
break
case 7:x=13
return A.d($.did().yk(D.bAo,null,null),$async$rP)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.ks(),$async$rP)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a2(D.c_X)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.c2(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbvq(p))
if(B.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aV8(t,l,C.ddR(l)),$async$rP)
case 15:v=new j.IC(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bZ(null,new C.cOa(),!1,d,!0,!1,null,l),$async$rP)
case 16:n=f
v=n==null?null:new C.IC("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bZ(null,new C.cOb(),!1,d,!0,!0,null,l),$async$rP)
case 17:m=f
v=m==null?null:new C.IC(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rP,w)},
IC:function IC(d,e,f){this.a=d
this.b=e
this.c=f},
cO9:function cO9(){},
cOa:function cOa(){},
cOb:function cOb(){},
O3:function O3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bK0:function bK0(d,e){this.a=d
this.b=e},
ZF:function ZF(d){this.a=d},
czw:function czw(d,e){this.a=d
this.b=e},
OH:function OH(d){this.a=d},
aec:function aec(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
c_z:function c_z(d){this.a=d},
c_A:function c_A(d,e){this.a=d
this.b=e},
c_B:function c_B(d){this.a=d},
c_C:function c_C(d){this.a=d},
c_E:function c_E(d){this.a=d},
c_D:function c_D(d,e,f){this.a=d
this.b=e
this.c=f},
Rj:function Rj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_O:function b_O(d,e){this.a=d
this.b=e},
b_L:function b_L(d){this.a=d},
b_N:function b_N(d){this.a=d},
b_M:function b_M(d){this.a=d},
b_P:function b_P(d){this.a=d},
dzK(d){return new C.w9(d,A.E(y.N,y.F),new A.ac(A.j4(0,0),0,!1))},
d0z(d){var x,w=J.a7(d)
if(w.gZ(d))return null
x=w.dz(d,new C.cU9(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w9:function w9(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bEE:function bEE(){},
bEF:function bEF(d){this.a=d},
bEC:function bEC(){},
bED:function bED(){},
bEG:function bEG(d,e){this.a=d
this.b=e},
bEH:function bEH(d){this.a=d},
bEB:function bEB(d){this.a=d},
bEK:function bEK(){},
bEL:function bEL(){},
bEI:function bEI(){},
bEJ:function bEJ(){},
cU9:function cU9(){},
a_F(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_F=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a2(D.c_n)
x=1
break}x=3
return A.d(A.bZ(null,new C.cTw(A.dM(h,0,A.eE(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_F)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wA(d,e,f,u.c,u.d,g,t),$async$a_F)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_F,w)},
Bj:function Bj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTw:function cTw(d){this.a=d},
cTv:function cTv(d,e){this.a=d
this.b=e},
cVV(d,e,f,g,h,i,j,k,l){return new C.aow(g,d,k,h,i,e,j,l,f,null)},
aow:function aow(d,e,f,g,h,i,j,k,l,m){var _=this
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
b00:function b00(){},
b_Y:function b_Y(d){this.a=d},
b0_:function b0_(d){this.a=d},
b_Z:function b_Z(d){this.a=d},
cHC(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ah)
v=new A.b2(16,16)
u=d[x]
w.push(new A.bI(1,B.ar,A.z(t,A.y(A.a([A.h(u.a,1,B.a3,t,t,B.bZ,t,t,t),B.aX,A.h(u.b,t,t,t,t,B.bd,B.a6,t,t)],s),B.w,B.h,B.l,0,B.u),B.r,t,t,new A.I(B.a7,t,t,new A.cd(v,v,v,v),t,t,B.y),t,t,t,D.ave,t,t,t),t))
B.e.n(r,w)}return A.O(r,B.w,B.h,B.l,0,t,t)},
alb(d,e,f){var x,w=null
if(f){x=A.fK(w,w,w,w,w,w,w,w,w,B.A,w,w,w,w,B.ad,B.c9,w,w,B.d1,w)
x=A.h8(A.h(d,w,w,w,w,w,w,w,w),e,x)}else{x=A.co(B.A,w,w,B.t,w,w,B.ad,w,w,B.d1)
x=A.bG(A.h(d,w,w,w,w,w,w,w,w),e,x)}return A.aH(x,52,w)},
d_q(d,e,f,g){var x=null,w=y.p,v=A.a([new A.dc(1,B.b6,A.h(d,x,x,x,x,B.bZ,B.a6,x,x),x)],w)
if(g)B.e.n(v,A.a([B.e8,D.PX],w))
v=A.a([new A.cq(d,76,e,!1,!0,x),B.aG,A.O(v,B.w,B.h,B.K,0,x,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aX,A.h(f,x,x,x,x,B.O,B.a6,x,x)],w))
return new A.bB(B.ay,x,B.aE,B.z,A.a([new A.R(B.jK,A.bK(A.y(v,B.w,B.h,B.l,0,B.u),x,x),x),D.bQO],w),x)},
cHm(d,e){var x,w,v=null,u=A.ax(d,B.dS,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a1)
w.push(e[x])
B.e.n(s,w)}return A.bF(!0,new A.e8(new A.aP(0,1/0,0,u.a.b*0.9),A.dR(A.y(s,B.G,B.h,B.l,0,B.u),B.z,v,B.aq,v,v,B.a2),v),v,B.a_,!1)},
acs:function acs(d,e){this.c=d
this.a=e},
bQ7:function bQ7(d){this.a=d},
d3y(d){var x,w,v,u
for(x=new A.ch(d),w=y.E,x=new A.ak(x,x.gA(0),w.i("ak<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bER[B.j.ar(v,5)]},
cVU(d,e,f,g,h,i,j){return new C.aov(d,i,f,e,g,j,h,null)},
zM:function zM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aov:function aov(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_R:function b_R(d,e){this.a=d
this.b=e},
b_S:function b_S(d,e){this.a=d
this.b=e},
b_U:function b_U(){},
b_T:function b_T(d){this.a=d},
b_Q:function b_Q(d,e){this.a=d
this.b=e},
Rk:function Rk(d,e){this.c=d
this.a=e},
Kv:function Kv(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeX:function aeX(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c8B:function c8B(d,e){this.a=d
this.b=e},
bol:function bol(d,e){this.a=d
this.b=e},
aYE:function aYE(){},
aYF:function aYF(){},
ama:function ama(){},
IG:function IG(){},
b0v:function b0v(d,e){this.a=d
this.b=e},
acr:function acr(){},
d7a(d,e,f,g,h,i,j,k){return new C.a5D(A.dLf(C.dLX(),i,j),d,g,h,e,A.alB(e),f,i.i("@<0>").b8(j).b8(k).i("a5D<1,2,3>"))},
bjJ(d,e,f,g,h,i,j,k,l,m){return new A.xV(d,h,f,j,k,g,e,i,l.i("@<0>").b8(m).i("xV<1,2>"))},
a5D:function a5D(d,e,f,g,h,i,j,k){var _=this
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
G=c[406]
H=c[383]
I=c[180]
K=c[433]
L=c[335]
M=c[156]
E=c[242]
N=c[189]
O=c[432]
C=a.updateHolder(c[121],C)
D=c[237]
P=c[381]
Q=c[397]
R=c[270]
S=c[184]
T=c[431]
F=c[235]
C.IC.prototype={
gaq(d){return this.c}}
C.O3.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eI(!1,w,!0,new A.R(B.hH,A.y(A.a([A.z(x,A.b6(this.c,$.au,x,x,26),B.r,x,x,new A.I(B.a7,x,x,v,x,x,B.y),x,58,x,x,x,x,58),B.aG,A.h(this.d,x,x,x,x,B.hq,x,x,x)],y.p),B.w,B.h,B.K,0,B.u),x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bK0(this,d),x,x,x,x,x,x,x)}}
C.ZF.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.by4[x]
v=new A.b2(14,14)
s.push(A.eI(!1,new A.cd(v,v,v,v),!0,new A.R(B.qG,A.asM(w,B.kr,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new C.czw(d,w),u,u,u,u,u,u,u))}return new A.R(D.atP,A.y(A.a([D.cf4,B.S,A.SO(1,s,4,8,8,u,B.dF,!0)],t),B.H,B.h,B.K,0,B.u),u)}}
C.OH.prototype={
R(){return new C.aec(new A.aF(B.al,$.aa()),D.ih)}}
C.aec.prototype={
ae(){this.ao()
this.Iu("")},
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a5()},
Iu(d){return this.biV(d)},
biV(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Iu=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.c_z(s))
v=3
m=B.f.C(d)
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
p=A.ajI("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aVw(p,null),$async$Iu)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bw.jW(0,A.jf(A.jd(q.e)).bK(0,q.w),null)),"data"))
s.p(new C.c_A(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.c_B(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.c_C(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Iu,w)},
u(d){var x=this,w=null,v=A.ax(d,w,y.w).w,u=A.cw(w,B.a8,!1,w,!0,B.z,w,A.cz(),x.d,w,w,w,w,w,2,D.aFS,B.X,!0,w,!0,w,!1,w,B.aF,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaV3(),w,!1,w,w,!1,w,!0,w,B.aq,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.at,w,B.b3,w,B.tr,w,w),t=x.r
if(t!=null)t=A.bK(A.h(t,w,w,w,w,B.mH,B.a6,w,w),w,w)
else t=x.f?D.bZ7:N.a3x(w,B.X,T.a9f,new C.c_E(x),x.e.length,w,w,!1)
return A.aH(new A.R(D.atM,A.y(A.a([u,B.ae,A.a4(t,1),B.aG,D.adX],y.p),B.H,B.h,B.l,0,B.u),w),v.a.b*0.62,w)}}
C.Rj.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.ax(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b4(s.c,"asset:"))return A.asM(B.f.bF(s.c,6),B.kr,120,120)
if(p==="image"||p==="gif")return A.cM(r,A.fX(A.W(16),new A.e8(new A.aP(0,q,0,320),A.k6(s.c,new C.b_M(q),B.bL,r,new C.b_N(q),r,r),r),B.ba),B.X,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_O(s,d),r,r,r,r,r,r,!1,B.aL)
p=A.W(16)
x=s.f
w=x?$.au:B.a7
v=A.W(16)
u=A.b6(O.Pn,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a3,r,r,A.aJ(r,r,x?B.t:B.A,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eI(!1,p,!0,A.z(r,A.O(A.a([u,B.ag,new A.dc(1,B.b6,t,r),B.bk,A.b6(L.vJ,x?B.t:B.V,r,r,18)],y.p),B.w,B.h,B.K,0,r,r),B.r,r,new A.aP(0,q,0,1/0),new A.I(w,r,r,v,r,r,B.y),r,r,r,D.atg,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new C.b_P(s),r,r,r,r,r,r,r)},
gaq(d){return this.e}}
C.w9.prototype={
d8(){var x=this,w=y.T,v=A.eT(x).H(A.cJ($.ba(),new C.bEE(),y.D,w),w)
A.eT(x).Zh(new C.bEF(x))
if(v==null)return B.a8
w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.Mv(0,"typing:"+x.x,B.yL).bAn(new C.bEG(x,v),"typing")
w.Qt(0)
x.y=w
x.Q=A.uc(B.fW,new C.bEH(x))
return B.a8},
alu(){var x,w=this,v=w.z
v.eh(v,new C.bEB(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c8(v,v.r,v.e,A.u(v).i("c8<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aR(w.ga4(0))||!B.e.e9(x,J.dnk(w.ga4(0))))w.sa4(0,x)},
adQ(d){var x,w=this,v=w.y,u=A.eT(w).a0(0,$.ba(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.cJ(w.as).a<2e6)return
w.as=x
v.afr(0,"typing",A.T(["id",t,"name",d],y.N,y.z),B.Hg).cG(new C.bEK(),new C.bEL(),y.H)},
d6(d){var x=this.y,w=A.eT(this).a0(0,$.ba(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.j4(0,0),0,!1)
x.afr(0,"typing",A.T(["id",v,"stop",!0],y.N,y.z),B.Hg).cG(new C.bEI(),new C.bEJ(),y.H)}}
C.Bj.prototype={}
C.aow.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cq(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.dc(1,B.b6,A.h(s.c,1,B.a3,r,r,B.ab,r,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.e8,D.PX],x))
w=A.a([A.O(w,B.w,B.h,B.l,0,r,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.R(B.ve,A.z(r,A.h(v,1,r,r,r,B.hn,r,r,r),B.r,r,r,new A.I(B.cz,r,r,u,r,r,B.y),r,r,r,B.vk,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a3,r,r,A.aJ(r,r,B.V,r,r,r,r,r,r,r,r,13,r,r,B.b2,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=A.O(A.a([q,B.af,A.a4(A.y(w,B.H,B.h,B.K,0,B.u),1)],x),B.w,B.h,B.l,0,r,r)
q=A.a([new A.d4(0,B.bp,B.A.ce(0.06),B.GF,14)],y.V)
w=A.ax(d,B.b7,y.w).w
v=new C.b00().$3(K.PL,"Voltar",new C.b_Y(d))
u=s.r
v=A.a([v,B.af,A.a4(u==null?t:A.aX(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Ev(A.z(B.L,Q.EB,B.r,r,r,B.cg,r,44,r,r,r,r,44),r,new C.b_Z(s),new C.b0_(s),r,D.bQF,"Mais op\xe7\xf5es",y.N)],x))
return A.z(r,A.y(A.a([A.O(v,B.w,B.h,B.l,0,r,r)],x),B.G,B.h,B.K,0,B.u),B.r,r,r,new A.I(B.t,r,r,B.u8,q,r,B.y),r,r,r,new A.a2(20,w.r.b+20,20,14),r,r,r)},
gaq(d){return this.c}}
C.acs.prototype={
u(d){var x=null
return A.b7(x,!0,x,A.cM(x,A.z(x,B.m0,B.r,x,x,new A.I(B.A,x,this.c?A.bC(B.t,2):x,x,x,x,B.aw),x,44,x,x,x,x,44),B.X,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bQ7(d),x,x,x,x,x,x,!1,B.aL),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zM.prototype={
u(d){var x=null,w=A.ax(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.A:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.R(E.Nw,A.h(v,x,x,x,x,A.aJ(x,x,C.d3y(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aJ(x,x,s?B.t:B.A,x,x,x,x,x,x,x,x,15,x,x,B.br,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.e8(new A.aP(0,w.a.a*0.78,0,1/0),A.z(x,A.y(o,B.H,B.h,B.K,0,B.u),B.r,x,x,new A.I(r,x,x,new A.cd(F.yE,F.yE,new A.b2(q,q),new A.b2(p,p)),x,x,B.y),x,x,x,new A.a2(14,t,14,10),x,x,x),x)}}
C.aov.prototype={
aje(d){if(!A.uj(this.c.a.a)){d.O(y.q).f.a2(D.c_B)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aX(A.z(B.L,B.PO,B.r,t,t,B.cg,t,44,t,t,t,t,44),u.e,t),B.ag],s))
x=A.W(24)
r.push(A.a4(A.z(B.bg,A.cw(t,B.a8,!1,t,!0,B.z,t,A.cz(),u.c,t,t,t,t,t,2,A.iK(t,B.bA,t,B.a_,t,t,t,t,!0,B.bA,t,t,t,t,t,t,!1,t,t,t,t,B.bA,t,t,t,t,t,t,t,t,B.mF,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.X,!0,t,!0,t,!1,t,B.aF,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_R(u,d),t,!1,t,t,!1,t,!0,t,B.aq,t,t,t,t,t,t,t,t,t,t,t,B.fg,!0,B.at,t,B.b3,t,B.aag,t,t),B.r,t,t,new A.I(B.a7,t,t,x,t,t,B.y),t,48,t,B.bV,t,t,t),1))
r.push(B.ag)
r.push(A.b7(t,!0,t,A.aX(A.z(B.L,D.aEw,B.r,t,t,B.cg,t,44,t,t,t,t,44),new C.b_S(u,d),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.O(r,B.w,B.h,B.l,0,t,t)
r=A.a([new A.d4(0,B.bp,B.A.ce(0.12),B.kV,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aH(A.a4H(B.z,new C.b_T(u),v,t,t,B.bv,new C.b_U()),34,t),B.ae],s))
x.push(w)
return A.z(t,A.bF(!0,new A.R(B.hF,A.y(x,B.G,B.h,B.K,0,B.u),t),t,D.asQ,!1),B.r,t,t,new A.I(B.t,t,t,B.pM,r,t,B.y),t,t,t,t,t,t,t)}}
C.Rk.prototype={
u(d){var x=null,w=this.c
return A.cVD(B.fm,w==null?D.bYD:new A.R(D.atT,A.bK(A.h(w,x,x,x,x,B.kh,x,x,x),x,x),x),B.cu,B.aD)}}
C.Kv.prototype={
R(){return new C.aeX()}}
C.aeX.prototype={
ae(){var x,w=this
w.ao()
x=w.a
w.e=x.d
x.c.an(0,w.ga2h())},
bb(d){var x,w,v=this
v.bz(d)
x=d.c
if(x!==v.a.c){w=v.ga2h()
x.a_(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a_(0,this.ga2h())
this.a5()},
aV6(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbB(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c8B(w,x))},
b8p(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.ax(x,null,y.w).w
w=this.a
if(x.ax)w.c.hp(0)
else w.c.i6(0,B.eU,G.D_)},
u(d){var x,w,v,u=this,t=null,s=B.j.ah(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iW(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.z(B.L,D.aEp,B.r,t,t,D.agC,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bC(B.A,2)
r.push(A.ce(t,A.z(B.L,A.h(""+s,t,t,t,t,B.hq,t,t,t),B.r,t,B.lv,new A.I(B.t,t,v,x,t,t,B.y),t,20,t,B.Dn,t,t,t),t,t,t,-6,-6,t))}q.push(A.ce(16,A.b7(t,!0,t,A.aX(new A.bB(B.ay,t,B.aE,B.r,r,t),u.gb8o(),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bB(B.ay,t,B.aE,B.z,q,t)}}
C.bol.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aYE.prototype={
$1(d){return A.n_(d,null,!0,null,null,y.S,y.z)},
gXP(d){return D.ai0},
azz(d,e,f,g,h){return this.gXP(this).$3$1(e,f,g,h)}}
C.aYF.prototype={
$3$1(d,e,f,g){return C.d7a(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.ama.prototype={}
C.IG.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b0v(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.acr.prototype={}
C.a5D.prototype={}
var z=a.updateTypes(["~()","ZF(N)","OH(N)","F<~>(c)","t<c>()","w9(c)","xV<0^,1^>(0^(){$allTransitiveDependencies!B<h9>?,argument!L?,dependencies!B<h9>?,from!kQ?,isAutoDispose!x,name!c?,retry!bn?(v,L)?})<fg<1^>,L?>"])
C.cO9.prototype={
$1(d){var x=null,w=y.p
return new A.R(D.auj,A.y(A.a([A.O(A.a([new C.O3(B.k_,"Foto","photo",x),new C.O3(D.aCW,"Ficheiro","file",x),new C.O3(R.jX,"Sticker","sticker",x),new C.O3(D.aCO,"GIF","gif",x)],w),B.w,B.Gm,B.l,0,x,x)],w),B.w,B.h,B.K,0,B.u),x)},
$S:73}
C.cOa.prototype={
$1(d){return D.cqK},
$S:z+1}
C.cOb.prototype={
$1(d){return D.cnY},
$S:z+2}
C.bK0.prototype={
$0(){return A.am(this.b,!1).af(this.a.e)},
$S:0}
C.czw.prototype={
$0(){return A.am(this.a,!1).af(this.b)},
$S:0}
C.c_z.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.c_A.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bi(this.b,y.P),v=A.u(w),w=new A.ak(w,w.gA(w),v.i("ak<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bv(s,new A.a0(A.Z(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.Z(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.c_B.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.c_C.prototype={
$0(){return this.a.f=!1},
$S:0}
C.c_E.prototype={
$2(d,e){var x=null,w=this.a
return A.eI(!1,x,!0,A.fX(A.W(10),A.k6(w.e[e].a,x,B.bL,x,x,x,x),B.ba),x,!0,x,x,x,x,x,x,x,x,x,x,new C.c_D(w,d,e),x,x,x,x,x,x,x)},
$S:1333}
C.c_D.prototype={
$0(){return A.am(this.b,!1).af(this.a.e[this.c].b)},
$S:0}
C.b_O.prototype={
$0(){var x=y.H
return A.am(this.b,!1).fS(A.tA(new C.b_L(this.a),null,x),x)},
$S:0}
C.b_L.prototype={
$1(d){var x=null
return A.kw(A.cVE(B.ap,x,B.t,x),B.ap,A.bK(I.cX0(B.a_,A.pr(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1334}
C.b_N.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1335}
C.b_M.prototype={
$3(d,e,f){var x=null
return A.z(x,D.aEE,B.r,B.a7,x,x,x,120,x,x,x,x,this.a)},
$S:69}
C.b_P.prototype={
$0(){return A.zh(A.dx(this.a.c,0,null),B.qX,null)},
$S:0}
C.bEE.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bEF.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aN(0)
x=w.y
w.y=null
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yr(x).cG(new C.bEC(),new C.bED(),y.H)}},
$S:0}
C.bEC.prototype={
$1(d){},
$S:124}
C.bED.prototype={
$1(d){},
$S:11}
C.bEG.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e4(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:B.f.C(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.M(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a0(v,new A.ac(Date.now(),0,!1).em(5e6)))}u.alu()},
$S:274}
C.bEH.prototype={
$1(d){return this.a.alu()},
$S:68}
C.bEB.prototype={
$2(d,e){return e.b.f7(this.a)},
$S:1336}
C.bEK.prototype={
$1(d){},
$S:268}
C.bEL.prototype={
$1(d){},
$S:11}
C.bEI.prototype={
$1(d){},
$S:268}
C.bEJ.prototype={
$1(d){},
$S:11}
C.cU9.prototype={
$1(d){return B.e.gL(d.split(" "))},
$S:24}
C.cTw.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.C(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a3,r,r,B.IZ,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jp(!1,B.a_,r,r,!0,r,r,r,!0,r,D.aEo,r,r,r,r,new C.cTv(d,u),!1,r,r,r,r,r,s,r,t,r,E.PW,r))}return A.bF(!0,new A.R(D.atQ,A.y(A.a([D.cga,B.av,D.caO,B.R,new A.dc(1,B.b6,A.cZ(p,r,r,r,r,!1,B.a2,!0),r)],q),B.H,B.h,B.K,0,B.u),r),r,B.a_,!0)},
$S:44}
C.cTv.prototype={
$0(){return A.am(this.a,!1).af(this.b)},
$S:0}
C.b00.prototype={
$3(d,e,f){var x=null
return A.kY(A.aX(A.z(B.L,d,B.r,x,x,B.cg,x,44,x,x,x,x,44),f,x),x,e)},
$S:1337}
C.b_Y.prototype={
$0(){return A.am(this.a,!1).iD()},
$S:0}
C.b0_.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_Z.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bok(A.h(t,s,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bQA)
return r},
$S:63}
C.bQ7.prototype={
$0(){return A.am(this.a,!1).bv()},
$S:0}
C.b_R.prototype={
$1(d){return this.a.aje(this.b)},
$S:3}
C.b_S.prototype={
$0(){return this.a.aje(this.b)},
$S:0}
C.b_U.prototype={
$2(d,e){return B.ag},
$S:117}
C.b_T.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bC(B.A,1.5)
return A.aX(A.z(B.L,A.h(w.w[e],x,x,x,x,B.dQ,x,x,x),B.r,x,x,new A.I(B.t,x,u,v,x,x,B.y),x,34,x,B.cJ,x,x,x),new C.b_Q(w,e),x)},
$S:174}
C.b_Q.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c8B.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b0v.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("IG.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.aec.prototype,"gaV3","Iu",3)
w(C,"dMV","dzK",5)
v(C.w9.prototype,"giP","d8",4)
var t
v(t=C.aeX.prototype,"ga2h","aV6",0)
v(t,"gb8o","b8p",0)
u(C,"dLX",1,function(){return{$allTransitiveDependencies:B.cR,argument:B.cR,dependencies:B.cR,from:B.cR,isAutoDispose:B.cR,name:B.cR,retry:B.cR}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bjJ",function(d,e,f,g,h,i,j,k){return C.bjJ(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjJ(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjJ(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.L,[C.IC,C.Bj,C.aYE,C.aYF,C.ama])
w(A.bw,[C.cO9,C.cOa,C.cOb,C.b_L,C.b_N,C.b_M,C.bEE,C.bEC,C.bED,C.bEG,C.bEH,C.bEK,C.bEL,C.bEI,C.bEJ,C.cU9,C.cTw,C.b00,C.b0_,C.b_Z,C.b_R])
w(A.J,[C.O3,C.ZF,C.Rj,C.aow,C.acs,C.zM,C.aov,C.Rk])
w(A.bQ,[C.bK0,C.czw,C.c_z,C.c_A,C.c_B,C.c_C,C.c_D,C.b_O,C.b_P,C.bEF,C.cTv,C.b_Y,C.bQ7,C.b_S,C.b_Q,C.c8B,C.b0v])
w(A.G,[C.OH,C.Kv])
w(A.Y,[C.aec,C.aeX])
w(A.cL,[C.c_E,C.bEB,C.b_U,C.b_T])
v(C.w9,A.fg)
v(C.bol,A.f3)
v(C.acr,A.kQ)
v(C.IG,C.acr)
v(C.a5D,C.IG)
x(C.acr,C.ama)})()
A.bs(b.typeUniverse,JSON.parse('{"ZF":{"J":[],"e":[],"f":[]},"OH":{"G":[],"e":[],"f":[]},"O3":{"J":[],"e":[],"f":[]},"aec":{"Y":["OH"]},"Rj":{"J":[],"e":[],"f":[]},"w9":{"fg":["t<c>"]},"aow":{"J":[],"e":[],"f":[]},"acs":{"J":[],"e":[],"f":[]},"Kv":{"G":[],"e":[],"f":[]},"zM":{"J":[],"e":[],"f":[]},"aov":{"J":[],"e":[],"f":[]},"Rk":{"J":[],"e":[],"f":[]},"aeX":{"Y":["Kv"]},"IG":{"kQ":[],"h9":[],"He":[],"lL":[]},"a5D":{"IG":["1","2","2","3","2","xV<1,2>"],"kQ":[],"h9":[],"He":[],"lL":[],"IG.0":"1"}}'))
A.PV(b.typeUniverse,JSON.parse('{"ama":5,"acr":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cF"),E:x("ch"),V:x("r<d4>"),X:x("r<pL<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("di"),S:x("fg<@>"),F:x("+(c,ac)"),C:x("Bj"),N:x("c"),q:x("dp"),z:x("@"),r:x("v"),B:x("IC?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c9r=new A.D("Powered by GIPHY",null,H.IX,null,null,null,null,null,null,null,null)
D.adX=new A.d1(B.e1,null,null,D.c9r,null)
D.agC=new A.I(B.A,null,null,null,B.ig,null,B.aw)
D.L7=new C.aYE()
D.ai0=new C.aYF()
D.asQ=new A.a2(0,0,0,24)
D.atg=new A.a2(12,10,14,10)
D.atM=new A.a2(16,16,16,12)
D.atP=new A.a2(16,16,16,24)
D.atQ=new A.a2(16,16,16,8)
D.atT=new A.a2(16,2,16,8)
D.auj=new A.a2(20,18,20,24)
D.ave=new A.a2(8,12,8,12)
D.aCO=new A.aV(57404,"HeroiconsSolid",null,!1)
D.aCW=new A.aV(57436,"HeroiconsSolid",null,!1)
D.PX=new A.b8(B.ia,18,B.bo,null,"Verificado",null)
D.aEo=new A.b8(B.h2,null,B.V,null,null,null)
D.aCA=new A.aV(57347,"HeroiconsSolid",null,!1)
D.aEp=new A.b8(D.aCA,20,B.t,null,null,null)
D.aEw=new A.b8(B.lY,20,B.t,null,null,null)
D.aEE=new A.b8(B.k_,null,B.V,null,null,null)
D.aDF=new A.b8(B.vM,null,null,null,null,null)
D.aFS=new A.dL(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aDF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.by4=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bAo=x([],A.w("r<daP>"))
D.bAr=x([],A.w("r<+(c,~())>"))
D.ih=x([],y.L)
D.anv=new A.X(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.aoj=new A.X(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.apm=new A.X(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.anV=new A.X(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bER=x([D.anv,B.cY,D.aoj,D.apm,D.anV],A.w("r<X>"))
D.bQA=new A.jO("report",!0,P.abA,null,A.w("jO<c>"))
D.bQF=new C.bol(1,"under")
D.cmZ=new C.acs(!1,null)
D.bQO=new A.eM(null,0,0,null,null,null,D.cmZ,null)
D.bYD=new A.c0(1/0,null,null,null)
D.bZ7=new S.yr(12,3,null)
D.cgm=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.c_n=new A.bH(D.cgm,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.z,null)
D.chu=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.c_B=new A.bH(D.chu,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.z,null)
D.cfL=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.c_X=new A.bH(D.cfL,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.z,null)
D.caO=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.O,null,null,null,null,null,null,null,null)
D.cf4=new A.D("Stickers",null,B.ab,null,null,null,null,null,null,null,null)
D.cga=new A.D("Que mensagem queres denunciar?",null,B.hl,null,null,null,null,null,null,null,null)
D.cnY=new C.OH(null)
D.cqK=new C.ZF(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_s","CW",()=>D.L7.azz(0,C.dMV(),A.w("w9"),A.w("t<c>"),y.N))})()};
(a=>{a["yhnytbiIbZE96L8IS9AujjyXL4I="]=a.current})($__dart_deferred_initializers__);