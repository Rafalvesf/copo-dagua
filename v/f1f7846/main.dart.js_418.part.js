((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,L,M,E,N,O,C={
dGx(){var x,w=$.Qp(),v=J.nK(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aY(B.j.hZ(w.r1(256),16),2,"0")
return B.e.hQ(v)},
aUP(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUP=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.R()
q=r.b
q===$&&A.b()
q=q.gbA().e.a
u=(q==null?null:q.r).a
t=B.f.q(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dGx()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.rh(s,d,new A.v2(!1,f)),$async$aUP)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cx(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUP,w)},
dcT(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
rM(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rM=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bZ(null,new C.cNe(),!1,d,!0,!1,null,l),$async$rM)
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
return A.d(new A.lF().Zr(85,2048,B.fx),$async$rM)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kr(),$async$rM)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fs(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUP(t,s,C.dcT(s)),$async$rM)
case 12:v=new j.Ix(f,r,s)
x=1
break
case 7:x=13
return A.d($.dhf().yb(D.bAi,null,null),$async$rM)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kr(),$async$rM)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a2(D.c_U)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.c2(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbuA(p))
if(B.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUP(t,l,C.dcT(l)),$async$rM)
case 15:v=new j.Ix(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bZ(null,new C.cNf(),!1,d,!0,!1,null,l),$async$rM)
case 16:n=f
v=n==null?null:new C.Ix("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bZ(null,new C.cNg(),!1,d,!0,!0,null,l),$async$rM)
case 17:m=f
v=m==null?null:new C.Ix(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rM,w)},
Ix:function Ix(d,e,f){this.a=d
this.b=e
this.c=f},
cNe:function cNe(){},
cNf:function cNf(){},
cNg:function cNg(){},
NW:function NW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJy:function bJy(d,e){this.a=d
this.b=e},
Zu:function Zu(d){this.a=d},
cyH:function cyH(d,e){this.a=d
this.b=e},
Oz:function Oz(d){this.a=d},
adV:function adV(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bZO:function bZO(d){this.a=d},
bZP:function bZP(d,e){this.a=d
this.b=e},
bZQ:function bZQ(d){this.a=d},
bZR:function bZR(d){this.a=d},
bZT:function bZT(d){this.a=d},
bZS:function bZS(d,e,f){this.a=d
this.b=e
this.c=f},
Rc:function Rc(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_s:function b_s(d,e){this.a=d
this.b=e},
b_p:function b_p(d){this.a=d},
b_r:function b_r(d){this.a=d},
b_q:function b_q(d){this.a=d},
b_t:function b_t(d){this.a=d},
dyK(d){return new C.w8(d,A.E(y.N,y.F),new A.ac(A.j0(0,0),0,!1))},
d_F(d){var x,w=J.a7(d)
if(w.gZ(d))return null
x=w.dt(d,new C.cTe(),y.N).by(0)
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
bEb:function bEb(){},
bEc:function bEc(d){this.a=d},
bE9:function bE9(){},
bEa:function bEa(){},
bEd:function bEd(d,e){this.a=d
this.b=e},
bEe:function bEe(d){this.a=d},
bE8:function bE8(d){this.a=d},
bEh:function bEh(){},
bEi:function bEi(){},
bEf:function bEf(){},
bEg:function bEg(){},
cTe:function cTe(){},
a_s(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_s=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a2(D.c_j)
x=1
break}x=3
return A.d(A.bZ(null,new C.cSB(A.dM(h,0,A.eF(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_s)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wy(d,e,f,u.c,u.d,g,t),$async$a_s)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_s,w)},
Bd:function Bd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSB:function cSB(d){this.a=d},
cSA:function cSA(d,e){this.a=d
this.b=e},
cV_(d,e,f,g,h,i,j,k,l){return new C.aoc(g,d,k,h,i,e,j,l,f,null)},
aoc:function aoc(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_F:function b_F(){},
b_C:function b_C(d){this.a=d},
b_E:function b_E(d){this.a=d},
b_D:function b_D(d){this.a=d},
cGJ(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ah)
v=new A.b2(16,16)
u=d[x]
w.push(new A.bJ(1,B.at,A.z(t,A.x(A.a([A.h(u.a,1,B.a2,t,t,B.c2,t,t,t),B.aW,A.h(u.b,t,t,t,t,B.bb,B.a6,t,t)],s),B.w,B.h,B.l,0,B.u),B.r,t,t,new A.I(B.a7,t,t,new A.cd(v,v,v,v),t,t,B.y),t,t,t,D.avc,t,t,t),t))
B.e.n(r,w)}return A.N(r,B.w,B.h,B.l,0,t,t)},
akR(d,e,f){var x,w=null
if(f){x=A.fK(w,w,w,w,w,w,w,w,w,B.A,w,w,w,w,B.ae,B.c8,w,w,B.d4,w)
x=A.h5(A.h(d,w,w,w,w,w,w,w,w),e,x)}else{x=A.cn(B.A,w,w,B.t,w,w,B.ae,w,w,B.d4)
x=A.bG(A.h(d,w,w,w,w,w,w,w,w),e,x)}return A.aH(x,52,w)},
cZw(d,e,f,g){var x=null,w=y.p,v=A.a([new A.d8(1,B.b7,A.h(d,x,x,x,x,B.c2,B.a6,x,x),x)],w)
if(g)B.e.n(v,A.a([B.e7,D.PX],w))
v=A.a([new A.cp(d,76,e,!1,!0,x),B.aF,A.N(v,B.w,B.h,B.K,0,x,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aW,A.h(f,x,x,x,x,B.N,B.a6,x,x)],w))
return new A.bD(B.aA,x,B.aG,B.z,A.a([new A.Q(B.jH,A.bN(A.x(v,B.w,B.h,B.l,0,B.u),x,x),x),D.bQK],w),x)},
cGt(d,e){var x,w,v=null,u=A.ax(d,B.dS,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a1)
w.push(e[x])
B.e.n(s,w)}return A.bF(!0,new A.ee(new A.aQ(0,1/0,0,u.a.b*0.9),A.dR(A.x(s,B.G,B.h,B.l,0,B.u),B.z,v,B.aq,v,v,B.a3),v),v,B.a_,!1)},
acc:function acc(d,e){this.c=d
this.a=e},
bPu:function bPu(d){this.a=d},
d2B(d){var x,w,v,u
for(x=new A.cg(d),w=y.E,x=new A.al(x,x.gA(0),w.i("al<W.E>")),w=w.i("W.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bEN[B.j.aq(v,5)]},
cUZ(d,e,f,g,h,i,j){return new C.aob(d,i,f,e,g,j,h,null)},
zJ:function zJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aob:function aob(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_v:function b_v(d,e){this.a=d
this.b=e},
b_w:function b_w(d,e){this.a=d
this.b=e},
b_y:function b_y(){},
b_x:function b_x(d){this.a=d},
b_u:function b_u(d,e){this.a=d
this.b=e},
Re:function Re(d,e){this.c=d
this.a=e},
Ko:function Ko(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeG:function aeG(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c7P:function c7P(d,e){this.a=d
this.b=e},
bo3:function bo3(d,e){this.a=d
this.b=e},
aYj:function aYj(){},
aYk:function aYk(){},
alR:function alR(){},
IA:function IA(){},
b09:function b09(d,e){this.a=d
this.b=e},
acb:function acb(){},
d6c(d,e,f,g,h,i,j,k){return new C.a5l(A.dKe(C.dKW(),i,j),d,g,h,e,A.alg(e),f,i.i("@<0>").b7(j).b7(k).i("a5l<1,2,3>"))},
bjr(d,e,f,g,h,i,j,k,l,m){return new A.xT(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xT<1,2>"))},
a5l:function a5l(d,e,f,g,h,i,j,k){var _=this
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
C.NW.prototype={
u(d){var x=null,w=A.V(18),v=A.V(18)
return A.eC(!1,w,!0,new A.Q(B.hD,A.x(A.a([A.z(x,A.b4(this.c,$.au,x,x,26),B.r,x,x,new A.I(B.a7,x,x,v,x,x,B.y),x,58,x,x,x,x,58),B.aF,A.h(this.d,x,x,x,x,B.hm,x,x,x)],y.p),B.w,B.h,B.K,0,B.u),x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bJy(this,d),x,x,x,x,x,x,x)}}
C.Zu.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.by_[x]
v=new A.b2(14,14)
s.push(A.eC(!1,new A.cd(v,v,v,v),!0,new A.Q(B.qC,A.ass(w,B.kq,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new C.cyH(d,w),u,u,u,u,u,u,u))}return new A.Q(D.atO,A.x(A.a([D.cf_,B.R,A.SF(1,s,4,8,8,u,B.dE,!0)],t),B.H,B.h,B.K,0,B.u),u)}}
C.Oz.prototype={
R(){return new C.adV(new A.aF(B.al,$.aa()),D.m2)}}
C.adV.prototype={
ad(){this.ar()
this.Ik("")},
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a6()},
Ik(d){return this.bi5(d)},
bi5(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Ik=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bZO(s))
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
p=A.ajn("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aVb(p,null),$async$Ik)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bu.jU(0,A.jc(A.ja(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.bZP(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.bZQ(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.bZR(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ik,w)},
u(d){var x=this,w=null,v=A.ax(d,w,y.w).w,u=A.cs(w,B.a8,!1,w,!0,B.z,w,A.cu(),x.d,w,w,w,w,w,2,D.aFO,B.Y,!0,w,!0,w,!1,w,B.aD,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaUv(),w,!1,w,w,!1,w,!0,w,B.aq,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.ar,w,B.b2,w,B.tm,w,w),t=x.r
if(t!=null)t=A.bN(A.h(t,w,w,w,w,B.l0,B.a6,w,w),w,w)
else t=x.f?D.bZ3:N.a3g(w,B.Y,T.a9h,new C.bZT(x),x.e.length,w,w,!1)
return A.aH(new A.Q(D.atL,A.x(A.a([u,B.ad,A.a4(t,1),B.aF,D.adY],y.p),B.H,B.h,B.l,0,B.u),w),v.a.b*0.62,w)}}
C.Rc.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.ax(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b2(s.c,"asset:"))return A.ass(B.f.bF(s.c,6),B.kq,120,120)
if(p==="image"||p==="gif")return A.cR(r,A.fV(A.V(16),new A.ee(new A.aQ(0,q,0,320),A.k1(s.c,new C.b_q(q),B.bK,r,new C.b_r(q),r,r),r),B.ba),B.Y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_s(s,d),r,r,r,r,r,r,!1,B.aP)
p=A.V(16)
x=s.f
w=x?$.au:B.a7
v=A.V(16)
u=A.b4(O.Pn,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a2,r,r,A.aJ(r,r,x?B.t:B.A,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eC(!1,p,!0,A.z(r,A.N(A.a([u,B.ag,new A.d8(1,B.b7,t,r),B.bm,A.b4(L.vE,x?B.t:B.V,r,r,18)],y.p),B.w,B.h,B.K,0,r,r),B.r,r,new A.aQ(0,q,0,1/0),new A.I(w,r,r,v,r,r,B.y),r,r,r,D.atf,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new C.b_t(s),r,r,r,r,r,r,r)},
gao(d){return this.e}}
C.w8.prototype={
d7(){var x=this,w=y.T,v=A.eT(x).H(A.cI($.ba(),new C.bEb(),y.D,w),w)
A.eT(x).YX(new C.bEc(x))
if(v==null)return B.a8
w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.Ml(0,"typing:"+x.x,B.yI).bzw(new C.bEd(x,v),"typing")
w.Qh(0)
x.y=w
x.Q=A.u8(B.fT,new C.bEe(x))
return B.a8},
al2(){var x,w=this,v=w.z
v.eg(v,new C.bE8(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c7(v,v.r,v.e,A.u(v).i("c7<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aR(w.ga4(0))||!B.e.ea(x,J.dmm(w.ga4(0))))w.sa4(0,x)},
adu(d){var x,w=this,v=w.y,u=A.eT(w).a1(0,$.ba(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.cL(w.as).a<2e6)return
w.as=x
v.af5(0,"typing",A.T(["id",t,"name",d],y.N,y.z),B.Hg).cD(new C.bEh(),new C.bEi(),y.H)},
d5(d){var x=this.y,w=A.eT(this).a1(0,$.ba(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.j0(0,0),0,!1)
x.af5(0,"typing",A.T(["id",v,"stop",!0],y.N,y.z),B.Hg).cD(new C.bEf(),new C.bEg(),y.H)}}
C.Bd.prototype={}
C.aoc.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cp(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.d8(1,B.b7,A.h(s.c,1,B.a2,r,r,B.ab,r,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.e7,D.PX],x))
w=A.a([A.N(w,B.w,B.h,B.l,0,r,r)],x)
v=s.y
if(v!=null){u=A.V(999)
w.push(new A.Q(B.v9,A.z(r,A.h(v,1,r,r,r,B.hj,r,r,r),B.r,r,r,new A.I(B.cA,r,r,u,r,r,B.y),r,r,r,B.vf,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a2,r,r,A.aJ(r,r,B.V,r,r,r,r,r,r,r,r,13,r,r,B.b3,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=A.N(A.a([q,B.af,A.a4(A.x(w,B.H,B.h,B.K,0,B.u),1)],x),B.w,B.h,B.l,0,r,r)
q=A.a([new A.d1(0,B.bo,B.A.cd(0.06),B.GF,14)],y.V)
w=A.ax(d,B.b4,y.w).w
v=new C.b_F().$3(K.PL,"Voltar",new C.b_C(d))
u=s.r
v=A.a([v,B.af,A.a4(u==null?t:A.aW(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Er(A.z(B.L,Q.EB,B.r,r,r,B.cg,r,44,r,r,r,r,44),r,new C.b_D(s),new C.b_E(s),r,D.bQB,"Mais op\xe7\xf5es",y.N)],x))
return A.z(r,A.x(A.a([A.N(v,B.w,B.h,B.l,0,r,r)],x),B.G,B.h,B.K,0,B.u),B.r,r,r,new A.I(B.t,r,r,B.u3,q,r,B.y),r,r,r,new A.a2(20,w.r.b+20,20,14),r,r,r)},
gao(d){return this.c}}
C.acc.prototype={
u(d){var x=null
return A.b8(x,!0,x,A.cR(x,A.z(x,B.lX,B.r,x,x,new A.I(B.A,x,this.c?A.bB(B.t,2):x,x,x,x,B.aw),x,44,x,x,x,x,44),B.Y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPu(d),x,x,x,x,x,x,!1,B.aP),!1,x,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zJ.prototype={
u(d){var x=null,w=A.ax(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.A:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.Q(E.Nw,A.h(v,x,x,x,x,A.aJ(x,x,C.d2B(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aJ(x,x,s?B.t:B.A,x,x,x,x,x,x,x,x,15,x,x,B.bq,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ee(new A.aQ(0,w.a.a*0.78,0,1/0),A.z(x,A.x(o,B.H,B.h,B.K,0,B.u),B.r,x,x,new A.I(r,x,x,new A.cd(F.yB,F.yB,new A.b2(q,q),new A.b2(p,p)),x,x,B.y),x,x,x,new A.a2(14,t,14,10),x,x,x),x)}}
C.aob.prototype={
aiS(d){if(!A.uf(this.c.a.a)){d.O(y.q).f.a2(D.c_y)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aW(A.z(B.L,B.PO,B.r,t,t,B.cg,t,44,t,t,t,t,44),u.e,t),B.ag],s))
x=A.V(24)
r.push(A.a4(A.z(B.bg,A.cs(t,B.a8,!1,t,!0,B.z,t,A.cu(),u.c,t,t,t,t,t,2,A.iI(t,B.bw,t,B.a_,t,t,t,t,!0,B.bw,t,t,t,t,t,t,!1,t,t,t,t,B.bw,t,t,t,t,t,t,t,t,B.mC,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.Y,!0,t,!0,t,!1,t,B.aD,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_v(u,d),t,!1,t,t,!1,t,!0,t,B.aq,t,t,t,t,t,t,t,t,t,t,t,B.fg,!0,B.ar,t,B.b2,t,B.aah,t,t),B.r,t,t,new A.I(B.a7,t,t,x,t,t,B.y),t,48,t,B.bU,t,t,t),1))
r.push(B.ag)
r.push(A.b8(t,!0,t,A.aW(A.z(B.L,D.aEr,B.r,t,t,B.cg,t,44,t,t,t,t,44),new C.b_w(u,d),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.N(r,B.w,B.h,B.l,0,t,t)
r=A.a([new A.d1(0,B.bo,B.A.cd(0.12),B.kP,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aH(A.Tz(B.z,new C.b_x(u),v,t,t,B.bx,new C.b_y()),34,t),B.ad],s))
x.push(w)
return A.z(t,A.bF(!0,new A.Q(B.hB,A.x(x,B.G,B.h,B.K,0,B.u),t),t,D.asP,!1),B.r,t,t,new A.I(B.t,t,t,B.pI,r,t,B.y),t,t,t,t,t,t,t)}}
C.Re.prototype={
u(d){var x=null,w=this.c
return A.cUI(B.fm,w==null?D.bYz:new A.Q(D.atS,A.bN(A.h(w,x,x,x,x,B.kg,x,x,x),x,x),x),B.cv,B.aE)}}
C.Ko.prototype={
R(){return new C.aeG()}}
C.aeG.prototype={
ad(){var x,w=this
w.ar()
x=w.a
w.e=x.d
x.c.an(0,w.ga1Z())},
ba(d){var x,w,v=this
v.bz(d)
x=d.c
if(x!==v.a.c){w=v.ga1Z()
x.a_(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a_(0,this.ga1Z())
this.a6()},
aUy(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbC(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c7P(w,x))},
b7I(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.ax(x,null,y.w).w
w=this.a
if(x.ax)w.c.hR(0)
else w.c.iJ(0,B.eT,G.CZ)},
u(d){var x,w,v,u=this,t=null,s=B.j.ag(u.a.d-u.e,0,99),r=y.p,q=A.a([A.j5(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.z(B.L,D.aEk,B.r,t,t,D.agD,t,44,t,t,t,t,44)],r)
if(x){x=A.V(10)
v=A.bB(B.A,2)
r.push(A.ce(t,A.z(B.L,A.h(""+s,t,t,t,t,B.hm,t,t,t),B.r,t,B.lq,new A.I(B.t,t,v,x,t,t,B.y),t,20,t,B.Dn,t,t,t),t,t,t,-6,-6,t))}q.push(A.ce(16,A.b8(t,!0,t,A.aW(new A.bD(B.aA,t,B.aG,B.r,r,t),u.gb7H(),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bD(B.aA,t,B.aG,B.z,q,t)}}
C.bo3.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aYj.prototype={
$1(d){return A.mV(d,null,!0,null,null,y.S,y.z)},
gXs(d){return D.ai1},
az1(d,e,f,g,h){return this.gXs(this).$3$1(e,f,g,h)}}
C.aYk.prototype={
$3$1(d,e,f,g){return C.d6c(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alR.prototype={}
C.IA.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b09(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.acb.prototype={}
C.a5l.prototype={}
var z=a.updateTypes(["~()","Zu(O)","Oz(O)","F<~>(c)","t<c>()","w8(c)","xT<0^,1^>(0^(){$allTransitiveDependencies!B<h6>?,argument!L?,dependencies!B<h6>?,from!kL?,isAutoDispose!y,name!c?,retry!bp?(v,L)?})<fd<1^>,L?>"])
C.cNe.prototype={
$1(d){var x=null,w=y.p
return new A.Q(D.auh,A.x(A.a([A.N(A.a([new C.NW(B.jX,"Foto","photo",x),new C.NW(D.aCR,"Ficheiro","file",x),new C.NW(R.jU,"Sticker","sticker",x),new C.NW(D.aCJ,"GIF","gif",x)],w),B.w,B.Gn,B.l,0,x,x)],w),B.w,B.h,B.K,0,B.u),x)},
$S:69}
C.cNf.prototype={
$1(d){return D.cqF},
$S:z+1}
C.cNg.prototype={
$1(d){return D.cnU},
$S:z+2}
C.bJy.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e)},
$S:0}
C.cyH.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.bZO.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZP.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bh(this.b,y.P),v=A.u(w),w=new A.al(w,w.gA(w),v.i("al<W.E>")),u=y.f,v=v.i("W.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bt(s,new A.a_(A.a0(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a0(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZQ.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bZR.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bZT.prototype={
$2(d,e){var x=null,w=this.a
return A.eC(!1,x,!0,A.fV(A.V(10),A.k1(w.e[e].a,x,B.bK,x,x,x,x),B.ba),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bZS(w,d,e),x,x,x,x,x,x,x)},
$S:347}
C.bZS.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e[this.c].b)},
$S:0}
C.b_s.prototype={
$0(){var x=y.H
return A.am(this.b,!1).hE(A.ty(new C.b_p(this.a),null,x),x)},
$S:0}
C.b_p.prototype={
$1(d){var x=null
return A.kt(A.cUJ(B.ap,x,B.t,x),B.ap,A.bN(I.cW6(B.a_,A.pn(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1334}
C.b_r.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1335}
C.b_q.prototype={
$3(d,e,f){var x=null
return A.z(x,D.aEz,B.r,B.a7,x,x,x,120,x,x,x,x,this.a)},
$S:72}
C.b_t.prototype={
$0(){return A.ze(A.dw(this.a.c,0,null),B.qT,null)},
$S:0}
C.bEb.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
C.bEc.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aM(0)
x=w.y
w.y=null
if(x!=null){w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yh(x).cD(new C.bE9(),new C.bEa(),y.H)}},
$S:0}
C.bE9.prototype={
$1(d){},
$S:120}
C.bEa.prototype={
$1(d){},
$S:11}
C.bEd.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e5(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:B.f.C(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.L(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a_(v,new A.ac(Date.now(),0,!1).e6(5e6)))}u.al2()},
$S:227}
C.bEe.prototype={
$1(d){return this.a.al2()},
$S:64}
C.bE8.prototype={
$2(d,e){return e.b.eK(this.a)},
$S:1336}
C.bEh.prototype={
$1(d){},
$S:228}
C.bEi.prototype={
$1(d){},
$S:11}
C.bEf.prototype={
$1(d){},
$S:228}
C.bEg.prototype={
$1(d){},
$S:11}
C.cTe.prototype={
$1(d){return B.e.gK(d.split(" "))},
$S:22}
C.cSB.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.C(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a2,r,r,B.IZ,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jl(!1,B.a_,r,r,!0,r,r,r,!0,r,D.aEj,r,r,r,r,new C.cSA(d,u),!1,r,r,r,r,r,s,r,t,r,E.PW,r))}return A.bF(!0,new A.Q(D.atP,A.x(A.a([D.cg5,B.av,D.caK,B.S,new A.d8(1,B.b7,A.d0(p,r,r,r,r,!1,B.a3,!0),r)],q),B.H,B.h,B.K,0,B.u),r),r,B.a_,!0)},
$S:46}
C.cSA.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.b_F.prototype={
$3(d,e,f){var x=null
return A.kV(A.aW(A.z(B.L,d,B.r,x,x,B.cg,x,44,x,x,x,x,44),f,x),x,e)},
$S:1337}
C.b_C.prototype={
$0(){return A.am(this.a,!1).iz()},
$S:0}
C.b_E.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_D.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bo2(A.h(t,s,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bQw)
return r},
$S:63}
C.bPu.prototype={
$0(){return A.am(this.a,!1).bx()},
$S:0}
C.b_v.prototype={
$1(d){return this.a.aiS(this.b)},
$S:3}
C.b_w.prototype={
$0(){return this.a.aiS(this.b)},
$S:0}
C.b_y.prototype={
$2(d,e){return B.ag},
$S:97}
C.b_x.prototype={
$2(d,e){var x=null,w=this.a,v=A.V(17),u=A.bB(B.A,1.5)
return A.aW(A.z(B.L,A.h(w.w[e],x,x,x,x,B.dQ,x,x,x),B.r,x,x,new A.I(B.t,x,u,v,x,x,B.y),x,34,x,B.cP,x,x,x),new C.b_u(w,e),x)},
$S:156}
C.b_u.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c7P.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b09.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("IA.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adV.prototype,"gaUv","Ik",3)
w(C,"dLT","dyK",5)
v(C.w8.prototype,"giM","d7",4)
var t
v(t=C.aeG.prototype,"ga1Z","aUy",0)
v(t,"gb7H","b7I",0)
u(C,"dKW",1,function(){return{$allTransitiveDependencies:B.cN,argument:B.cN,dependencies:B.cN,from:B.cN,isAutoDispose:B.cN,name:B.cN,retry:B.cN}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bjr",function(d,e,f,g,h,i,j,k){return C.bjr(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjr(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjr(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.L,[C.Ix,C.Bd,C.aYj,C.aYk,C.alR])
w(A.bz,[C.cNe,C.cNf,C.cNg,C.b_p,C.b_r,C.b_q,C.bEb,C.bE9,C.bEa,C.bEd,C.bEe,C.bEh,C.bEi,C.bEf,C.bEg,C.cTe,C.cSB,C.b_F,C.b_E,C.b_D,C.b_v])
w(A.J,[C.NW,C.Zu,C.Rc,C.aoc,C.acc,C.zJ,C.aob,C.Re])
w(A.bR,[C.bJy,C.cyH,C.bZO,C.bZP,C.bZQ,C.bZR,C.bZS,C.b_s,C.b_t,C.bEc,C.cSA,C.b_C,C.bPu,C.b_w,C.b_u,C.c7P,C.b09])
w(A.G,[C.Oz,C.Ko])
w(A.Y,[C.adV,C.aeG])
w(A.cN,[C.bZT,C.bE8,C.b_y,C.b_x])
v(C.w8,A.fd)
v(C.bo3,A.f8)
v(C.acb,A.kL)
v(C.IA,C.acb)
v(C.a5l,C.IA)
x(C.acb,C.alR)})()
A.bq(b.typeUniverse,JSON.parse('{"Zu":{"J":[],"e":[],"f":[]},"Oz":{"G":[],"e":[],"f":[]},"NW":{"J":[],"e":[],"f":[]},"adV":{"Y":["Oz"]},"Rc":{"J":[],"e":[],"f":[]},"w8":{"fd":["t<c>"]},"aoc":{"J":[],"e":[],"f":[]},"acc":{"J":[],"e":[],"f":[]},"Ko":{"G":[],"e":[],"f":[]},"zJ":{"J":[],"e":[],"f":[]},"aob":{"J":[],"e":[],"f":[]},"Re":{"J":[],"e":[],"f":[]},"aeG":{"Y":["Ko"]},"IA":{"kL":[],"h6":[],"H8":[],"lH":[]},"a5l":{"IA":["1","2","2","3","2","xT<1,2>"],"kL":[],"h6":[],"H8":[],"lH":[],"IA.0":"1"}}'))
A.PN(b.typeUniverse,JSON.parse('{"alR":5,"acb":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cF"),E:x("cg"),V:x("r<d1>"),X:x("r<pH<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dg"),S:x("fd<@>"),F:x("+(c,ac)"),C:x("Bd"),N:x("c"),q:x("dn"),z:x("@"),r:x("v"),B:x("Ix?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c9n=new A.D("Powered by GIPHY",null,H.IX,null,null,null,null,null,null,null,null)
D.adY=new A.cZ(B.e1,null,null,D.c9n,null)
D.agD=new A.I(B.A,null,null,null,B.ig,null,B.aw)
D.L6=new C.aYj()
D.ai1=new C.aYk()
D.asP=new A.a2(0,0,0,24)
D.atf=new A.a2(12,10,14,10)
D.atL=new A.a2(16,16,16,12)
D.atO=new A.a2(16,16,16,24)
D.atP=new A.a2(16,16,16,8)
D.atS=new A.a2(16,2,16,8)
D.auh=new A.a2(20,18,20,24)
D.avc=new A.a2(8,12,8,12)
D.aCJ=new A.aV(57404,"HeroiconsSolid",null,!1)
D.aCR=new A.aV(57436,"HeroiconsSolid",null,!1)
D.PX=new A.b7(B.ia,18,B.bn,null,"Verificado",null)
D.aEj=new A.b7(B.fZ,null,B.V,null,null,null)
D.aCv=new A.aV(57347,"HeroiconsSolid",null,!1)
D.aEk=new A.b7(D.aCv,20,B.t,null,null,null)
D.aEr=new A.b7(B.lU,20,B.t,null,null,null)
D.aEz=new A.b7(B.jX,null,B.V,null,null,null)
D.aDA=new A.b7(B.vJ,null,null,null,null,null)
D.aFO=new A.dF(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aDA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.by_=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bAi=x([],A.w("r<d9R>"))
D.bAl=x([],A.w("r<+(c,~())>"))
D.m2=x([],y.L)
D.anu=new A.X(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.aoi=new A.X(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.apl=new A.X(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.anU=new A.X(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bEN=x([D.anu,B.d_,D.aoi,D.apl,D.anU],A.w("r<X>"))
D.bQw=new A.jM("report",!0,P.abA,null,A.w("jM<c>"))
D.bQB=new C.bo3(1,"under")
D.cmU=new C.acc(!1,null)
D.bQK=new A.eM(null,0,0,null,null,null,D.cmU,null)
D.bYz=new A.c0(1/0,null,null,null)
D.bZ3=new S.yo(12,3,null)
D.cgh=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.c_j=new A.bH(D.cgh,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.z,null)
D.chp=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.c_y=new A.bH(D.chp,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.z,null)
D.cfG=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.c_U=new A.bH(D.cfG,null,null,null,null,null,null,null,null,null,null,null,null,B.T,!1,null,null,null,B.z,null)
D.caK=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.N,null,null,null,null,null,null,null,null)
D.cf_=new A.D("Stickers",null,B.ab,null,null,null,null,null,null,null,null)
D.cg5=new A.D("Que mensagem queres denunciar?",null,B.hh,null,null,null,null,null,null,null,null)
D.cnU=new C.Oz(null)
D.cqF=new C.Zu(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZp","CP",()=>D.L6.az1(0,C.dLT(),A.w("w8"),A.w("t<c>"),y.N))})()};
(a=>{a["DGCfaCRjo0PboezXjDMn7cJTMIA="]=a.current})($__dart_deferred_initializers__);