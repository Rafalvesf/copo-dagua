((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,L,M,E,N,O,C={
dGI(){var x,w=$.Qr(),v=J.nL(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aY(B.j.hZ(w.r1(256),16),2,"0")
return B.e.hQ(v)},
aUR(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUR=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.R()
q=r.b
q===$&&A.b()
q=q.gbA().e.a
u=(q==null?null:q.r).a
t=B.f.q(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dGI()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.rh(s,d,new A.v2(!1,f)),$async$aUR)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cy(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUR,w)},
dd3(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
rN(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rN=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bZ(null,new C.cNn(),!1,d,!0,!1,null,l),$async$rN)
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
return A.d(new A.lF().Zv(85,2048,B.fy),$async$rN)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kr(),$async$rN)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fs(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUR(t,s,C.dd3(s)),$async$rN)
case 12:v=new j.Ix(f,r,s)
x=1
break
case 7:x=13
return A.d($.dhq().yb(D.bAk,null,null),$async$rN)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kr(),$async$rN)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a2(D.c_V)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.c2(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbuD(p))
if(B.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUR(t,l,C.dd3(l)),$async$rN)
case 15:v=new j.Ix(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bZ(null,new C.cNo(),!1,d,!0,!1,null,l),$async$rN)
case 16:n=f
v=n==null?null:new C.Ix("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bZ(null,new C.cNp(),!1,d,!0,!0,null,l),$async$rN)
case 17:m=f
v=m==null?null:new C.Ix(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rN,w)},
Ix:function Ix(d,e,f){this.a=d
this.b=e
this.c=f},
cNn:function cNn(){},
cNo:function cNo(){},
cNp:function cNp(){},
NX:function NX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJA:function bJA(d,e){this.a=d
this.b=e},
Zv:function Zv(d){this.a=d},
cyQ:function cyQ(d,e){this.a=d
this.b=e},
OA:function OA(d){this.a=d},
adX:function adX(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bZX:function bZX(d){this.a=d},
bZY:function bZY(d,e){this.a=d
this.b=e},
bZZ:function bZZ(d){this.a=d},
c__:function c__(d){this.a=d},
c_1:function c_1(d){this.a=d},
c_0:function c_0(d,e,f){this.a=d
this.b=e
this.c=f},
Re:function Re(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_u:function b_u(d,e){this.a=d
this.b=e},
b_r:function b_r(d){this.a=d},
b_t:function b_t(d){this.a=d},
b_s:function b_s(d){this.a=d},
b_v:function b_v(d){this.a=d},
dyV(d){return new C.w8(d,A.E(y.N,y.F),new A.ab(A.j2(0,0),0,!1))},
d_P(d){var x,w=J.a7(d)
if(w.gZ(d))return null
x=w.dt(d,new C.cTn(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w8:function w8(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bEd:function bEd(){},
bEe:function bEe(d){this.a=d},
bEb:function bEb(){},
bEc:function bEc(){},
bEf:function bEf(d,e){this.a=d
this.b=e},
bEg:function bEg(d){this.a=d},
bEa:function bEa(d){this.a=d},
bEj:function bEj(){},
bEk:function bEk(){},
bEh:function bEh(){},
bEi:function bEi(){},
cTn:function cTn(){},
a_s(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_s=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a2(D.c_k)
x=1
break}x=3
return A.d(A.bZ(null,new C.cSK(A.dM(h,0,A.eF(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_s)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wy(d,e,f,u.c,u.d,g,t),$async$a_s)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_s,w)},
Be:function Be(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSK:function cSK(d){this.a=d},
cSJ:function cSJ(d,e){this.a=d
this.b=e},
cV8(d,e,f,g,h,i,j,k,l){return new C.aoe(g,d,k,h,i,e,j,l,f,null)},
aoe:function aoe(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_H:function b_H(){},
b_E:function b_E(d){this.a=d},
b_G:function b_G(d){this.a=d},
b_F:function b_F(d){this.a=d},
cGS(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ah)
v=new A.b2(16,16)
u=d[x]
w.push(new A.bJ(1,B.at,A.z(t,A.x(A.a([A.h(u.a,1,B.a2,t,t,B.c2,t,t,t),B.aW,A.h(u.b,t,t,t,t,B.bb,B.a6,t,t)],s),B.w,B.h,B.l,0,B.u),B.r,t,t,new A.I(B.a7,t,t,new A.cd(v,v,v,v),t,t,B.y),t,t,t,D.avd,t,t,t),t))
B.e.n(r,w)}return A.N(r,B.w,B.h,B.l,0,t,t)},
akT(d,e,f){var x,w=null
if(f){x=A.fK(w,w,w,w,w,w,w,w,w,B.A,w,w,w,w,B.ae,B.c8,w,w,B.d4,w)
x=A.h5(A.h(d,w,w,w,w,w,w,w,w),e,x)}else{x=A.cn(B.A,w,w,B.t,w,w,B.ae,w,w,B.d4)
x=A.bG(A.h(d,w,w,w,w,w,w,w,w),e,x)}return A.aI(x,52,w)},
cZG(d,e,f,g){var x=null,w=y.p,v=A.a([new A.d9(1,B.b7,A.h(d,x,x,x,x,B.c2,B.a6,x,x),x)],w)
if(g)B.e.n(v,A.a([B.e7,D.PX],w))
v=A.a([new A.cp(d,76,e,!1,!0,x),B.aF,A.N(v,B.w,B.h,B.K,0,x,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aW,A.h(f,x,x,x,x,B.N,B.a6,x,x)],w))
return new A.bD(B.aA,x,B.aG,B.z,A.a([new A.Q(B.jI,A.bN(A.x(v,B.w,B.h,B.l,0,B.u),x,x),x),D.bQL],w),x)},
cGC(d,e){var x,w,v=null,u=A.ax(d,B.dS,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a1)
w.push(e[x])
B.e.n(s,w)}return A.bF(!0,new A.ee(new A.aQ(0,1/0,0,u.a.b*0.9),A.dR(A.x(s,B.G,B.h,B.l,0,B.u),B.z,v,B.aq,v,v,B.a3),v),v,B.a_,!1)},
ace:function ace(d,e){this.c=d
this.a=e},
bPD:function bPD(d){this.a=d},
d2M(d){var x,w,v,u
for(x=new A.cg(d),w=y.E,x=new A.al(x,x.gA(0),w.i("al<W.E>")),w=w.i("W.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bEO[B.j.ar(v,5)]},
cV7(d,e,f,g,h,i,j){return new C.aod(d,i,f,e,g,j,h,null)},
zJ:function zJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aod:function aod(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_x:function b_x(d,e){this.a=d
this.b=e},
b_y:function b_y(d,e){this.a=d
this.b=e},
b_A:function b_A(){},
b_z:function b_z(d){this.a=d},
b_w:function b_w(d,e){this.a=d
this.b=e},
Rf:function Rf(d,e){this.c=d
this.a=e},
Kp:function Kp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeI:function aeI(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c7Y:function c7Y(d,e){this.a=d
this.b=e},
bo5:function bo5(d,e){this.a=d
this.b=e},
aYl:function aYl(){},
aYm:function aYm(){},
alT:function alT(){},
IB:function IB(){},
b0b:function b0b(d,e){this.a=d
this.b=e},
acd:function acd(){},
d6n(d,e,f,g,h,i,j,k){return new C.a5m(A.dKp(C.dL6(),i,j),d,g,h,e,A.ali(e),f,i.i("@<0>").b7(j).b7(k).i("a5m<1,2,3>"))},
bjt(d,e,f,g,h,i,j,k,l,m){return new A.xT(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xT<1,2>"))},
a5m:function a5m(d,e,f,g,h,i,j,k){var _=this
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
G=c[405]
H=c[382]
I=c[178]
K=c[432]
L=c[335]
M=c[154]
E=c[240]
N=c[187]
O=c[431]
C=a.updateHolder(c[120],C)
D=c[235]
P=c[380]
Q=c[396]
R=c[270]
S=c[182]
T=c[430]
F=c[233]
C.Ix.prototype={
gao(d){return this.c}}
C.NX.prototype={
u(d){var x=null,w=A.V(18),v=A.V(18)
return A.eC(!1,w,!0,new A.Q(B.hF,A.x(A.a([A.z(x,A.b4(this.c,$.au,x,x,26),B.r,x,x,new A.I(B.a7,x,x,v,x,x,B.y),x,58,x,x,x,x,58),B.aF,A.h(this.d,x,x,x,x,B.ho,x,x,x)],y.p),B.w,B.h,B.K,0,B.u),x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bJA(this,d),x,x,x,x,x,x,x)}}
C.Zv.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.by0[x]
v=new A.b2(14,14)
s.push(A.eC(!1,new A.cd(v,v,v,v),!0,new A.Q(B.qE,A.asu(w,B.kr,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new C.cyQ(d,w),u,u,u,u,u,u,u))}return new A.Q(D.atP,A.x(A.a([D.cf0,B.R,A.SG(1,s,4,8,8,u,B.dE,!0)],t),B.H,B.h,B.K,0,B.u),u)}}
C.OA.prototype={
R(){return new C.adX(new A.aF(B.al,$.aa()),D.ih)}}
C.adX.prototype={
ac(){this.au()
this.Im("")},
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a6()},
Im(d){return this.bi8(d)},
bi8(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Im=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bZX(s))
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
p=A.ajp("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aVd(p,null),$async$Im)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bv.jU(0,A.je(A.jc(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.bZY(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.bZZ(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.c__(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Im,w)},
u(d){var x=this,w=null,v=A.ax(d,w,y.w).w,u=A.cs(w,B.a8,!1,w,!0,B.z,w,A.cu(),x.d,w,w,w,w,w,2,D.aFP,B.Y,!0,w,!0,w,!1,w,B.aD,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaUy(),w,!1,w,w,!1,w,!0,w,B.aq,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.ar,w,B.b2,w,B.tp,w,w),t=x.r
if(t!=null)t=A.bN(A.h(t,w,w,w,w,B.l7,B.a6,w,w),w,w)
else t=x.f?D.bZ4:N.a3h(w,B.Y,T.a9h,new C.c_1(x),x.e.length,w,w,!1)
return A.aI(new A.Q(D.atM,A.x(A.a([u,B.ad,A.a4(t,1),B.aF,D.adY],y.p),B.H,B.h,B.l,0,B.u),w),v.a.b*0.62,w)}}
C.Re.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.ax(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b2(s.c,"asset:"))return A.asu(B.f.bF(s.c,6),B.kr,120,120)
if(p==="image"||p==="gif")return A.cR(r,A.fW(A.V(16),new A.ee(new A.aQ(0,q,0,320),A.k1(s.c,new C.b_s(q),B.bK,r,new C.b_t(q),r,r),r),B.ba),B.Y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_u(s,d),r,r,r,r,r,r,!1,B.aP)
p=A.V(16)
x=s.f
w=x?$.au:B.a7
v=A.V(16)
u=A.b4(O.Pn,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a2,r,r,A.aJ(r,r,x?B.t:B.A,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eC(!1,p,!0,A.z(r,A.N(A.a([u,B.ag,new A.d9(1,B.b7,t,r),B.bn,A.b4(L.vH,x?B.t:B.V,r,r,18)],y.p),B.w,B.h,B.K,0,r,r),B.r,r,new A.aQ(0,q,0,1/0),new A.I(w,r,r,v,r,r,B.y),r,r,r,D.atg,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new C.b_v(s),r,r,r,r,r,r,r)},
gao(d){return this.e}}
C.w8.prototype={
d7(){var x=this,w=y.T,v=A.eU(x).H(A.cI($.ba(),new C.bEd(),y.D,w),w)
A.eU(x).Z0(new C.bEe(x))
if(v==null)return B.a8
w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.Mn(0,"typing:"+x.x,B.yJ).bzz(new C.bEf(x,v),"typing")
w.Qi(0)
x.y=w
x.Q=A.u9(B.fU,new C.bEg(x))
return B.a8},
al5(){var x,w=this,v=w.z
v.eh(v,new C.bEa(new A.ab(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c7(v,v.r,v.e,A.u(v).i("c7<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aR(w.ga4(0))||!B.e.ea(x,J.dmx(w.ga4(0))))w.sa4(0,x)},
adx(d){var x,w=this,v=w.y,u=A.eU(w).a1(0,$.ba(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ab(Date.now(),0,!1)
if(x.cH(w.as).a<2e6)return
w.as=x
v.af8(0,"typing",A.T(["id",t,"name",d],y.N,y.z),B.Hg).cE(new C.bEj(),new C.bEk(),y.H)},
d5(d){var x=this.y,w=A.eU(this).a1(0,$.ba(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ab(A.j2(0,0),0,!1)
x.af8(0,"typing",A.T(["id",v,"stop",!0],y.N,y.z),B.Hg).cE(new C.bEh(),new C.bEi(),y.H)}}
C.Be.prototype={}
C.aoe.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cp(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.d9(1,B.b7,A.h(s.c,1,B.a2,r,r,B.ab,r,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.e7,D.PX],x))
w=A.a([A.N(w,B.w,B.h,B.l,0,r,r)],x)
v=s.y
if(v!=null){u=A.V(999)
w.push(new A.Q(B.vc,A.z(r,A.h(v,1,r,r,r,B.hl,r,r,r),B.r,r,r,new A.I(B.cA,r,r,u,r,r,B.y),r,r,r,B.vi,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a2,r,r,A.aJ(r,r,B.V,r,r,r,r,r,r,r,r,13,r,r,B.b3,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=A.N(A.a([q,B.af,A.a4(A.x(w,B.H,B.h,B.K,0,B.u),1)],x),B.w,B.h,B.l,0,r,r)
q=A.a([new A.d1(0,B.bp,B.A.cd(0.06),B.GF,14)],y.V)
w=A.ax(d,B.b4,y.w).w
v=new C.b_H().$3(K.PL,"Voltar",new C.b_E(d))
u=s.r
v=A.a([v,B.af,A.a4(u==null?t:A.aW(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Er(A.z(B.L,Q.EC,B.r,r,r,B.cg,r,44,r,r,r,r,44),r,new C.b_F(s),new C.b_G(s),r,D.bQC,"Mais op\xe7\xf5es",y.N)],x))
return A.z(r,A.x(A.a([A.N(v,B.w,B.h,B.l,0,r,r)],x),B.G,B.h,B.K,0,B.u),B.r,r,r,new A.I(B.t,r,r,B.u6,q,r,B.y),r,r,r,new A.a2(20,w.r.b+20,20,14),r,r,r)},
gao(d){return this.c}}
C.ace.prototype={
u(d){var x=null
return A.b8(x,!0,x,A.cR(x,A.z(x,B.m2,B.r,x,x,new A.I(B.A,x,this.c?A.bB(B.t,2):x,x,x,x,B.aw),x,44,x,x,x,x,44),B.Y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPD(d),x,x,x,x,x,x,!1,B.aP),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zJ.prototype={
u(d){var x=null,w=A.ax(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.A:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.Q(E.Nw,A.h(v,x,x,x,x,A.aJ(x,x,C.d2M(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aJ(x,x,s?B.t:B.A,x,x,x,x,x,x,x,x,15,x,x,B.br,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ee(new A.aQ(0,w.a.a*0.78,0,1/0),A.z(x,A.x(o,B.H,B.h,B.K,0,B.u),B.r,x,x,new A.I(r,x,x,new A.cd(F.yC,F.yC,new A.b2(q,q),new A.b2(p,p)),x,x,B.y),x,x,x,new A.a2(14,t,14,10),x,x,x),x)}}
C.aod.prototype={
aiV(d){if(!A.ug(this.c.a.a)){d.O(y.q).f.a2(D.c_z)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aW(A.z(B.L,B.PO,B.r,t,t,B.cg,t,44,t,t,t,t,44),u.e,t),B.ag],s))
x=A.V(24)
r.push(A.a4(A.z(B.bg,A.cs(t,B.a8,!1,t,!0,B.z,t,A.cu(),u.c,t,t,t,t,t,2,A.iJ(t,B.bx,t,B.a_,t,t,t,t,!0,B.bx,t,t,t,t,t,t,!1,t,t,t,t,B.bx,t,t,t,t,t,t,t,t,B.mG,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.Y,!0,t,!0,t,!1,t,B.aD,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_x(u,d),t,!1,t,t,!1,t,!0,t,B.aq,t,t,t,t,t,t,t,t,t,t,t,B.fh,!0,B.ar,t,B.b2,t,B.aah,t,t),B.r,t,t,new A.I(B.a7,t,t,x,t,t,B.y),t,48,t,B.bU,t,t,t),1))
r.push(B.ag)
r.push(A.b8(t,!0,t,A.aW(A.z(B.L,D.aEs,B.r,t,t,B.cg,t,44,t,t,t,t,44),new C.b_y(u,d),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.N(r,B.w,B.h,B.l,0,t,t)
r=A.a([new A.d1(0,B.bp,B.A.cd(0.12),B.kV,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aI(A.TA(B.z,new C.b_z(u),v,t,t,B.by,new C.b_A()),34,t),B.ad],s))
x.push(w)
return A.z(t,A.bF(!0,new A.Q(B.hD,A.x(x,B.G,B.h,B.K,0,B.u),t),t,D.asQ,!1),B.r,t,t,new A.I(B.t,t,t,B.pL,r,t,B.y),t,t,t,t,t,t,t)}}
C.Rf.prototype={
u(d){var x=null,w=this.c
return A.cUR(B.fn,w==null?D.bYA:new A.Q(D.atT,A.bN(A.h(w,x,x,x,x,B.kh,x,x,x),x,x),x),B.cv,B.aE)}}
C.Kp.prototype={
R(){return new C.aeI()}}
C.aeI.prototype={
ac(){var x,w=this
w.au()
x=w.a
w.e=x.d
x.c.an(0,w.ga22())},
ba(d){var x,w,v=this
v.bz(d)
x=d.c
if(x!==v.a.c){w=v.ga22()
x.a_(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a_(0,this.ga22())
this.a6()},
aUB(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbC(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c7Y(w,x))},
b7L(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.ax(x,null,y.w).w
w=this.a
if(x.ax)w.c.hR(0)
else w.c.iJ(0,B.eU,G.D_)},
u(d){var x,w,v,u=this,t=null,s=B.j.ag(u.a.d-u.e,0,99),r=y.p,q=A.a([A.j7(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.z(B.L,D.aEl,B.r,t,t,D.agD,t,44,t,t,t,t,44)],r)
if(x){x=A.V(10)
v=A.bB(B.A,2)
r.push(A.ce(t,A.z(B.L,A.h(""+s,t,t,t,t,B.ho,t,t,t),B.r,t,B.lx,new A.I(B.t,t,v,x,t,t,B.y),t,20,t,B.Do,t,t,t),t,t,t,-6,-6,t))}q.push(A.ce(16,A.b8(t,!0,t,A.aW(new A.bD(B.aA,t,B.aG,B.r,r,t),u.gb7K(),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bD(B.aA,t,B.aG,B.z,q,t)}}
C.bo5.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aYl.prototype={
$1(d){return A.mW(d,null,!0,null,null,y.S,y.z)},
gXw(d){return D.ai1},
az4(d,e,f,g,h){return this.gXw(this).$3$1(e,f,g,h)}}
C.aYm.prototype={
$3$1(d,e,f,g){return C.d6n(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alT.prototype={}
C.IB.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b0b(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.acd.prototype={}
C.a5m.prototype={}
var z=a.updateTypes(["~()","Zv(O)","OA(O)","F<~>(c)","t<c>()","w8(c)","xT<0^,1^>(0^(){$allTransitiveDependencies!B<h6>?,argument!L?,dependencies!B<h6>?,from!kL?,isAutoDispose!y,name!c?,retry!bq?(v,L)?})<fd<1^>,L?>"])
C.cNn.prototype={
$1(d){var x=null,w=y.p
return new A.Q(D.aui,A.x(A.a([A.N(A.a([new C.NX(B.jY,"Foto","photo",x),new C.NX(D.aCS,"Ficheiro","file",x),new C.NX(R.jV,"Sticker","sticker",x),new C.NX(D.aCK,"GIF","gif",x)],w),B.w,B.Gn,B.l,0,x,x)],w),B.w,B.h,B.K,0,B.u),x)},
$S:69}
C.cNo.prototype={
$1(d){return D.cqG},
$S:z+1}
C.cNp.prototype={
$1(d){return D.cnV},
$S:z+2}
C.bJA.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e)},
$S:0}
C.cyQ.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.bZX.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZY.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bh(this.b,y.P),v=A.u(w),w=new A.al(w,w.gA(w),v.i("al<W.E>")),u=y.f,v=v.i("W.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bt(s,new A.Z(A.a0(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a0(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZZ.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.c__.prototype={
$0(){return this.a.f=!1},
$S:0}
C.c_1.prototype={
$2(d,e){var x=null,w=this.a
return A.eC(!1,x,!0,A.fW(A.V(10),A.k1(w.e[e].a,x,B.bK,x,x,x,x),B.ba),x,!0,x,x,x,x,x,x,x,x,x,x,new C.c_0(w,d,e),x,x,x,x,x,x,x)},
$S:347}
C.c_0.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e[this.c].b)},
$S:0}
C.b_u.prototype={
$0(){var x=y.H
return A.am(this.b,!1).hE(A.tz(new C.b_r(this.a),null,x),x)},
$S:0}
C.b_r.prototype={
$1(d){var x=null
return A.kt(A.cUS(B.ap,x,B.t,x),B.ap,A.bN(I.cWf(B.a_,A.po(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1334}
C.b_t.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1335}
C.b_s.prototype={
$3(d,e,f){var x=null
return A.z(x,D.aEA,B.r,B.a7,x,x,x,120,x,x,x,x,this.a)},
$S:72}
C.b_v.prototype={
$0(){return A.ze(A.dx(this.a.c,0,null),B.qW,null)},
$S:0}
C.bEd.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
C.bEe.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aM(0)
x=w.y
w.y=null
if(x!=null){w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yh(x).cE(new C.bEb(),new C.bEc(),y.H)}},
$S:0}
C.bEb.prototype={
$1(d){},
$S:120}
C.bEc.prototype={
$1(d){},
$S:11}
C.bEf.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e5(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:B.f.C(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.L(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.Z(v,new A.ab(Date.now(),0,!1).e3(5e6)))}u.al5()},
$S:227}
C.bEg.prototype={
$1(d){return this.a.al5()},
$S:68}
C.bEa.prototype={
$2(d,e){return e.b.eK(this.a)},
$S:1336}
C.bEj.prototype={
$1(d){},
$S:228}
C.bEk.prototype={
$1(d){},
$S:11}
C.bEh.prototype={
$1(d){},
$S:228}
C.bEi.prototype={
$1(d){},
$S:11}
C.cTn.prototype={
$1(d){return B.e.gK(d.split(" "))},
$S:22}
C.cSK.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.C(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a2,r,r,B.IZ,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jm(!1,B.a_,r,r,!0,r,r,r,!0,r,D.aEk,r,r,r,r,new C.cSJ(d,u),!1,r,r,r,r,r,s,r,t,r,E.PW,r))}return A.bF(!0,new A.Q(D.atQ,A.x(A.a([D.cg6,B.av,D.caL,B.S,new A.d9(1,B.b7,A.d0(p,r,r,r,r,!1,B.a3,!0),r)],q),B.H,B.h,B.K,0,B.u),r),r,B.a_,!0)},
$S:46}
C.cSJ.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.b_H.prototype={
$3(d,e,f){var x=null
return A.kV(A.aW(A.z(B.L,d,B.r,x,x,B.cg,x,44,x,x,x,x,44),f,x),x,e)},
$S:1337}
C.b_E.prototype={
$0(){return A.am(this.a,!1).iz()},
$S:0}
C.b_G.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_F.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bo4(A.h(t,s,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bQx)
return r},
$S:60}
C.bPD.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
C.b_x.prototype={
$1(d){return this.a.aiV(this.b)},
$S:3}
C.b_y.prototype={
$0(){return this.a.aiV(this.b)},
$S:0}
C.b_A.prototype={
$2(d,e){return B.ag},
$S:97}
C.b_z.prototype={
$2(d,e){var x=null,w=this.a,v=A.V(17),u=A.bB(B.A,1.5)
return A.aW(A.z(B.L,A.h(w.w[e],x,x,x,x,B.dQ,x,x,x),B.r,x,x,new A.I(B.t,x,u,v,x,x,B.y),x,34,x,B.cP,x,x,x),new C.b_w(w,e),x)},
$S:156}
C.b_w.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c7Y.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b0b.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("IB.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adX.prototype,"gaUy","Im",3)
w(C,"dM3","dyV",5)
v(C.w8.prototype,"giM","d7",4)
var t
v(t=C.aeI.prototype,"ga22","aUB",0)
v(t,"gb7K","b7L",0)
u(C,"dL6",1,function(){return{$allTransitiveDependencies:B.cN,argument:B.cN,dependencies:B.cN,from:B.cN,isAutoDispose:B.cN,name:B.cN,retry:B.cN}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bjt",function(d,e,f,g,h,i,j,k){return C.bjt(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjt(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjt(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.L,[C.Ix,C.Be,C.aYl,C.aYm,C.alT])
w(A.bz,[C.cNn,C.cNo,C.cNp,C.b_r,C.b_t,C.b_s,C.bEd,C.bEb,C.bEc,C.bEf,C.bEg,C.bEj,C.bEk,C.bEh,C.bEi,C.cTn,C.cSK,C.b_H,C.b_G,C.b_F,C.b_x])
w(A.J,[C.NX,C.Zv,C.Re,C.aoe,C.ace,C.zJ,C.aod,C.Rf])
w(A.bR,[C.bJA,C.cyQ,C.bZX,C.bZY,C.bZZ,C.c__,C.c_0,C.b_u,C.b_v,C.bEe,C.cSJ,C.b_E,C.bPD,C.b_y,C.b_w,C.c7Y,C.b0b])
w(A.G,[C.OA,C.Kp])
w(A.Y,[C.adX,C.aeI])
w(A.cN,[C.c_1,C.bEa,C.b_A,C.b_z])
v(C.w8,A.fd)
v(C.bo5,A.f8)
v(C.acd,A.kL)
v(C.IB,C.acd)
v(C.a5m,C.IB)
x(C.acd,C.alT)})()
A.br(b.typeUniverse,JSON.parse('{"Zv":{"J":[],"e":[],"f":[]},"OA":{"G":[],"e":[],"f":[]},"NX":{"J":[],"e":[],"f":[]},"adX":{"Y":["OA"]},"Re":{"J":[],"e":[],"f":[]},"w8":{"fd":["t<c>"]},"aoe":{"J":[],"e":[],"f":[]},"ace":{"J":[],"e":[],"f":[]},"Kp":{"G":[],"e":[],"f":[]},"zJ":{"J":[],"e":[],"f":[]},"aod":{"J":[],"e":[],"f":[]},"Rf":{"J":[],"e":[],"f":[]},"aeI":{"Y":["Kp"]},"IB":{"kL":[],"h6":[],"H8":[],"lH":[]},"a5m":{"IB":["1","2","2","3","2","xT<1,2>"],"kL":[],"h6":[],"H8":[],"lH":[],"IB.0":"1"}}'))
A.PO(b.typeUniverse,JSON.parse('{"alT":5,"acd":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cF"),E:x("cg"),V:x("r<d1>"),X:x("r<pI<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dg"),S:x("fd<@>"),F:x("+(c,ab)"),C:x("Be"),N:x("c"),q:x("dn"),z:x("@"),r:x("v"),B:x("Ix?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c9o=new A.D("Powered by GIPHY",null,H.IX,null,null,null,null,null,null,null,null)
D.adY=new A.cZ(B.e1,null,null,D.c9o,null)
D.agD=new A.I(B.A,null,null,null,B.ig,null,B.aw)
D.L6=new C.aYl()
D.ai1=new C.aYm()
D.asQ=new A.a2(0,0,0,24)
D.atg=new A.a2(12,10,14,10)
D.atM=new A.a2(16,16,16,12)
D.atP=new A.a2(16,16,16,24)
D.atQ=new A.a2(16,16,16,8)
D.atT=new A.a2(16,2,16,8)
D.aui=new A.a2(20,18,20,24)
D.avd=new A.a2(8,12,8,12)
D.aCK=new A.aV(57404,"HeroiconsSolid",null,!1)
D.aCS=new A.aV(57436,"HeroiconsSolid",null,!1)
D.PX=new A.b7(B.ia,18,B.bo,null,"Verificado",null)
D.aEk=new A.b7(B.h_,null,B.V,null,null,null)
D.aCw=new A.aV(57347,"HeroiconsSolid",null,!1)
D.aEl=new A.b7(D.aCw,20,B.t,null,null,null)
D.aEs=new A.b7(B.m0,20,B.t,null,null,null)
D.aEA=new A.b7(B.jY,null,B.V,null,null,null)
D.aDB=new A.b7(B.vK,null,null,null,null,null)
D.aFP=new A.dF(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aDB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.by0=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bAk=x([],A.w("r<da1>"))
D.bAn=x([],A.w("r<+(c,~())>"))
D.ih=x([],y.L)
D.anv=new A.X(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.aoj=new A.X(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.apm=new A.X(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.anV=new A.X(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bEO=x([D.anv,B.d_,D.aoj,D.apm,D.anV],A.w("r<X>"))
D.bQx=new A.jN("report",!0,P.abA,null,A.w("jN<c>"))
D.bQC=new C.bo5(1,"under")
D.cmV=new C.ace(!1,null)
D.bQL=new A.eM(null,0,0,null,null,null,D.cmV,null)
D.bYA=new A.c0(1/0,null,null,null)
D.bZ4=new S.yo(12,3,null)
D.cgi=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.c_k=new A.bH(D.cgi,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.z,null)
D.chq=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.c_z=new A.bH(D.chq,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.z,null)
D.cfH=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.c_V=new A.bH(D.cfH,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.z,null)
D.caL=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.N,null,null,null,null,null,null,null,null)
D.cf0=new A.D("Stickers",null,B.ab,null,null,null,null,null,null,null,null)
D.cg6=new A.D("Que mensagem queres denunciar?",null,B.hj,null,null,null,null,null,null,null,null)
D.cnV=new C.OA(null)
D.cqG=new C.Zv(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZA","CQ",()=>D.L6.az4(0,C.dM3(),A.w("w8"),A.w("t<c>"),y.N))})()};
(a=>{a["+AfD9xdQFdPyKtXHQLh+WQI6KbI="]=a.current})($__dart_deferred_initializers__);