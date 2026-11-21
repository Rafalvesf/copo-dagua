((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,L,E,M,N,B={
doF(){var x,w=$.OP(),v=J.nh(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aT(C.i.hK(w.qN(256),16),2,"0")
return C.e.iq(v)},
aQm(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aQm=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.R()
q=r.b
q===$&&A.b()
q=q.gbG().e.a
u=(q==null?null:q.r).a
t=C.f.n(e,".")?C.e.ga3(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.doF()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.T("chat-attachments")
x=3
return A.d(q.r1(s,d,new A.uk(!1,f)),$async$aQm)
case 3:r=r.b.ay
r===$&&A.b()
v=r.T("chat-attachments").BX(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aQm,w)},
cXI(d){var x,w=C.e.ga3(d.split(".")).toLowerCase()
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
qW(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$qW=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bG(null,new B.cyi(),d,!0,!1,null,l),$async$qW)
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
return A.d(new A.lK().XU(85,2048,C.fE),$async$qW)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kD(),$async$qW)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.fl(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aQm(t,s,B.cXI(s)),$async$qW)
case 12:v=new j.Hi(f,r,s)
x=1
break
case 7:x=13
return A.d($.d0g().xI(D.bwM,null,null),$async$qW)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kD(),$async$qW)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.S(y.q).f.a7(D.bV8)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.cg(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbq1(p))
if(C.f.fl(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aQm(t,l,B.cXI(l)),$async$qW)
case 15:v=new j.Hi(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bG(null,new B.cyj(),d,!0,!1,null,l),$async$qW)
case 16:n=f
v=n==null?null:new B.Hi("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bG(null,new B.cyk(),d,!0,!0,null,l),$async$qW)
case 17:m=f
v=m==null?null:new B.Hi(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$qW,w)},
Hi:function Hi(d,e,f){this.a=d
this.b=e
this.c=f},
cyi:function cyi(){},
cyj:function cyj(){},
cyk:function cyk(){},
Mz:function Mz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bCk:function bCk(d,e){this.a=d
this.b=e},
Xu:function Xu(d){this.a=d},
ckM:function ckM(d,e){this.a=d
this.b=e},
N8:function N8(d){this.a=d},
abs:function abs(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bQv:function bQv(d){this.a=d},
bQw:function bQw(d,e){this.a=d
this.b=e},
bQx:function bQx(d){this.a=d},
bQy:function bQy(d){this.a=d},
bQA:function bQA(d){this.a=d},
bQz:function bQz(d,e,f){this.a=d
this.b=e
this.c=f},
PF:function PF(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aVG:function aVG(d,e){this.a=d
this.b=e},
aVD:function aVD(d){this.a=d},
aVF:function aVF(d){this.a=d},
aVE:function aVE(d){this.a=d},
aVH:function aVH(d){this.a=d},
dh6(d){return new B.vp(d,A.A(y.N,y.F),new A.ah(A.iN(0,0),0,!1))},
cKV(d){var x,w=J.a5(d)
if(w.gY(d))return null
x=w.dA(d,new B.cDE(),y.N).bB(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
vp:function vp(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bxq:function bxq(){},
bxr:function bxr(d){this.a=d},
bxo:function bxo(){},
bxp:function bxp(){},
bxs:function bxs(d,e){this.a=d
this.b=e},
bxt:function bxt(d){this.a=d},
bxn:function bxn(d){this.a=d},
bxw:function bxw(){},
bxx:function bxx(){},
bxu:function bxu(){},
bxv:function bxv(){},
cDE:function cDE(){},
Yo(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$Yo=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.S(y.q).f.a7(D.bUD)
x=1
break}x=3
return A.d(A.bG(null,new B.cD5(A.fu(h,0,A.ij(12,"count",y.r),A.a6(h).c).bB(0)),d,!0,!0,null,y.C),$async$Yo)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(L.vM(d,e,f,u.c,u.d,g,t),$async$Yo)
case 4:case 1:return A.l(v,w)}})
return A.m($async$Yo,w)},
Am:function Am(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cD5:function cD5(d){this.a=d},
cD4:function cD4(d,e){this.a=d
this.b=e},
cFq(d,e,f,g,h,i,j){return new B.al7(f,d,i,j,g,h,e,null)},
al7:function al7(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aVN:function aVN(){},
aVK:function aVK(d){this.a=d},
aVM:function aVM(d){this.a=d},
aVL:function aVL(){},
cNM(d){var x,w,v,u
for(x=new A.c4(d),w=y.V,x=new A.ao(x,x.gA(0),w.i("ao<T.E>")),w=w.i("T.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bBd[C.i.an(v,5)]},
yO:function yO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
PG:function PG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aVI:function aVI(d,e){this.a=d
this.b=e},
aVJ:function aVJ(d,e){this.a=d
this.b=e},
PI:function PI(d,e){this.c=d
this.a=e},
bhA:function bhA(d,e){this.a=d
this.b=e},
aTD:function aTD(){},
aTE:function aTE(){},
aiP:function aiP(){},
Ho:function Ho(){},
aWf:function aWf(d,e){this.a=d
this.b=e},
a9L:function a9L(){},
cRf(d,e,f,g,h,i,j,k){return new B.a30(A.dsa(B.dsO(),i,j),d,g,h,e,A.aij(e),f,i.i("@<0>").b6(j).b6(k).i("a30<1,2,3>"))},
bdB(d,e,f,g,h,i,j,k,l,m){return new A.x3(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("x3<1,2>"))},
a30:function a30(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,O,P,Q,R,S,T,U,F
J=c[1]
A=c[0]
C=c[2]
G=c[191]
H=c[368]
I=c[167]
K=c[312]
L=c[148]
E=c[241]
M=c[409]
N=c[436]
B=a.updateHolder(c[114],B)
D=c[249]
O=c[382]
P=c[365]
Q=c[384]
R=c[400]
S=c[404]
T=c[407]
U=c[435]
F=c[321]
B.Hi.prototype={
gar(d){return this.c}}
B.Mz.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eJ(!1,w,!0,new A.X(C.h5,A.G(A.a([A.F(x,A.b9(this.c,$.al,x,x,26),C.r,x,x,new A.M(C.af,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.aD,A.i(this.d,x,x,x,C.od,x,x,x)],y.p),C.x,C.l,C.U,0,C.w),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bCk(this,d),x,x,x,x,x,x,x)}}
B.Xu.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.buy[x]
v=new A.aZ(14,14)
s.push(A.eJ(!1,new A.c_(v,v,v,v),!0,new A.X(C.pH,A.apg(w,C.hx,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.ckM(d,w),u,u,u,u,u,u,u))}return new A.X(D.arm,A.G(A.a([D.c93,C.V,A.R8(1,s,4,8,8,u,C.eE,!0)],t),C.J,C.l,C.U,0,C.w),u)}}
B.N8.prototype={
R(){return new B.abs(new A.aG(C.al,$.ae()),D.bx9)}}
B.abs.prototype={
aj(){this.aH()
this.HB("")},
m(){var x=this.d
x.a0$=$.ae()
x.V$=0
this.a8()},
HB(d){return this.bdN(d)},
bdN(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HB=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bQv(s))
v=3
m=C.f.D(d)
l=m.length===0
r=l?"trending":"search"
k=A.q(r)
q=A.A(y.N,y.z)
J.bb(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.bb(q,"limit","24")
J.bb(q,"rating","pg")
l=!l
if(l)J.bb(q,"q",m)
if(l)J.bb(q,"lang","pt")
p=A.agx("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aQF(p,null),$async$HB)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bm.jM(0,A.j2(A.j0(q.e)).bF(0,q.w),null)),"data"))
s.q(new B.bQw(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.q(new B.bQx(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.bQy(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HB,w)},
u(d){var x=this,w=null,v=A.au(d,w,y.w).w,u=A.cR(w,C.a7,!1,w,!0,C.z,w,A.cS(),x.d,w,w,w,w,w,2,D.aCZ,C.a2,!0,w,!0,w,!1,w,C.aM,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaRA(),w,!1,w,w,!1,w,!0,w,C.az,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.at,w,C.b9,w,C.ru,w,w),t=x.r
if(t!=null)t=A.bT(A.i(t,w,w,w,C.hq,C.a5,w,w),w,w)
else t=x.f?C.bo:G.a0Y(w,C.a2,U.a73,new B.bQA(x),x.e.length,w,w,!1)
return A.aN(new A.X(D.arj,A.G(A.a([u,C.a8,A.a9(t,1),C.aD,D.abJ],y.p),C.J,C.l,C.q,0,C.w),w),v.a.b*0.62,w)}}
B.PF.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.au(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b3(s.c,"asset:"))return A.apg(C.f.bJ(s.c,6),C.hx,120,120)
if(p==="image"||p==="gif")return A.dH(r,A.eP(A.W(16),new A.ee(new A.aL(0,q,0,320),A.kh(s.c,new B.aVE(q),C.bW,r,new B.aVF(q),r,r),r),C.aN),C.a2,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aVG(s,d),r,r,r,r,r,r,!1,C.bd)
p=A.W(16)
x=s.f
w=x?$.al:C.af
v=A.W(16)
u=A.b9(N.NE,x?C.u:$.al,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.Y,r,A.aH(r,r,x?C.u:C.A,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eJ(!1,p,!0,A.F(r,A.Y(A.a([u,C.aA,new A.eq(1,C.bK,t,r),C.bC,A.b9(K.uR,x?C.u:C.P,r,r,18)],y.p),C.x,C.l,C.U,0,r,r),C.r,r,new A.aL(0,q,0,1/0),new A.M(w,r,r,v,r,r,C.y),r,r,r,D.aqS,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aVH(s),r,r,r,r,r,r,r)},
gar(d){return this.e}}
B.vp.prototype={
cT(){var x=this,w=y.T,v=A.et(x).L(A.cG($.b7(),new B.bxq(),y.D,w),w)
A.et(x).aab(new B.bxr(x))
if(v==null)return C.a7
w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.a7_(0,"typing:"+x.x,C.a5i).bv_(new B.bxs(x,v),"typing")
w.adN(0)
x.y=w
x.Q=A.xL(C.h1,new B.bxt(x))
return C.a7},
aj2(){var x,w=this,v=w.z
v.ec(v,new B.bxn(new A.ah(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.ca(v,v.r,v.e,A.u(v).i("ca<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aU(w.ga2(0))||!C.e.eh(x,J.d5f(w.ga2(0))))w.sa2(0,x)},
aby(d){var x,w=this,v=w.y,u=A.et(w).a1(0,$.b7(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ah(Date.now(),0,!1)
if(x.dd(w.as).a<2e6)return
w.as=x
v.ad7(0,"typing",A.Q(["id",t,"name",d],y.N,y.z),C.FS).cA(new B.bxw(),new B.bxx(),y.H)},
fQ(d){var x=this.y,w=A.et(this).a1(0,$.b7(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ah(A.iN(0,0),0,!1)
x.ad7(0,"typing",A.Q(["id",v,"stop",!0],y.N,y.z),C.FS).cA(new B.bxu(),new B.bxv(),y.H)}}
B.Am.prototype={}
B.al7.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.dV(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.Y,r,M.Ho,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.Y,r,A.aH(r,r,s.f?C.dZ:C.P,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.Y(A.a([q,C.ax,A.a9(A.G(w,C.J,C.l,C.U,0,C.w),1)],x),C.x,C.l,C.q,0,r,r)
q=A.a([new A.cO(0,C.bh,C.A.c9(0.06),C.xf,14)],y.E)
w=A.au(d,C.bb,y.w).w
v=new B.aVN().$3(O.Ds,"Voltar",new B.aVK(d))
t=s.r
v=A.a([v,C.ax,A.a9(t==null?u:A.b0(u,t,r),1)],x)
C.e.p(v,A.a([C.aA,A.J9(A.F(C.O,Q.OW,C.r,r,r,C.fW,r,44,r,r,r,r,44),r,new B.aVL(),new B.aVM(s),r,D.bMw,"Mais op\xe7\xf5es",y.N)],x))
return A.F(r,A.G(A.a([A.Y(v,C.x,C.l,C.q,0,r,r)],x),C.I,C.l,C.U,0,C.w),C.r,r,r,new A.M(C.u,r,r,r,q,r,C.y),r,r,r,new A.a0(16,w.r.b+10,16,12),r,r,r)},
gar(d){return this.c}}
B.yO.prototype={
u(d){var x=null,w=A.au(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.A:C.u,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.X(E.LU,A.i(v,x,x,x,A.aH(x,x,B.cNM(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,A.aH(x,x,s?C.u:C.A,x,x,x,x,x,x,x,x,15,x,x,C.bf,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ee(new A.aL(0,w.a.a*0.78,0,1/0),A.F(x,A.G(o,C.J,C.l,C.U,0,C.w),C.r,x,x,new A.M(r,x,x,new A.c_(F.xF,F.xF,new A.aZ(q,q),new A.aZ(p,p)),x,x,C.y),x,x,x,new A.a0(14,t,14,10),x,x,x),x)}}
B.PG.prototype={
agR(d){if(!A.tB(this.c.a.a)){d.S(y.q).f.a7(D.bUS)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.p(u,A.a([A.b0(A.F(C.O,D.aFY,C.r,w,w,C.fW,w,44,w,w,w,w,44),x.e,w),C.aA],v))
v=A.W(999)
u.push(A.a9(A.F(C.bP,A.cR(w,C.a7,!1,w,!0,C.z,w,A.cS(),x.c,w,w,w,w,w,2,A.j7(w,C.ct,w,C.Z,w,w,w,w,!0,C.ct,w,w,w,w,w,w,!1,w,w,w,w,C.ct,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a2,!0,w,!0,w,!1,w,C.aM,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aVI(x,d),w,!1,w,w,!1,w,!0,w,C.az,w,w,w,w,w,w,w,w,w,w,w,C.iG,!0,C.at,w,C.b9,w,C.a8_,w,w),C.r,w,w,new A.M(C.af,w,w,v,w,w,C.y),w,44,w,C.bU,w,w,w),1))
u.push(C.aA)
u.push(A.b0(A.F(C.O,D.aG_,C.r,w,w,C.mh,w,44,w,w,w,w,44),new B.aVJ(x,d),w))
return A.F(w,A.bB(!0,new A.X(S.Ma,A.Y(u,C.x,C.l,C.q,0,w,w),w),w,R.LV,!1),C.r,C.u,w,w,w,w,w,w,w,w,w)}}
B.PI.prototype={
u(d){var x=null,w=this.c
return A.cF8(C.fo,w==null?D.bTC:new A.X(D.arq,A.bT(A.i(w,x,x,x,C.hQ,x,x,x),x,x),x),C.cl,C.ay)}}
B.bhA.prototype={
H(){return"PopupMenuPosition."+this.b}}
B.aTD.prototype={
$1(d){return A.lR(d,null,!0,null,null,y.S,y.z)},
gVZ(d){return D.afA},
awH(d,e,f,g,h){return this.gVZ(this).$3$1(e,f,g,h)}}
B.aTE.prototype={
$3$1(d,e,f,g){return B.cRf(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.aiP.prototype={}
B.Ho.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.aWf(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.a9L.prototype={}
B.a30.prototype={}
var z=a.updateTypes(["Xu(N)","N8(N)","E<~>(c)","t<c>()","vp(c)","x3<0^,1^>(0^(){$allTransitiveDependencies!y<fT>?,argument!J?,dependencies!y<fT>?,from!ku?,isAutoDispose!z,name!c?,retry!bo?(v,J)?})<eX<1^>,J?>"])
B.cyi.prototype={
$1(d){var x=null,w=y.p
return new A.X(D.arV,A.G(A.a([A.Y(A.a([new B.Mz(C.k3,"Foto","photo",x),new B.Mz(D.aA3,"Ficheiro","file",x),new B.Mz(T.k_,"Sticker","sticker",x),new B.Mz(D.azV,"GIF","gif",x)],w),C.x,C.F1,C.q,0,x,x)],w),C.x,C.l,C.U,0,C.w),x)},
$S:112}
B.cyj.prototype={
$1(d){return D.cke},
$S:z+0}
B.cyk.prototype={
$1(d){return D.chx},
$S:z+1}
B.bCk.prototype={
$0(){return A.av(this.b,!1).aD(this.a.e)},
$S:0}
B.ckM.prototype={
$0(){return A.av(this.a,!1).aD(this.b)},
$S:0}
B.bQv.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bQw.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bw(this.b,y.P),v=A.u(w),w=new A.ao(w,w.gA(w),v.i("ao<T.E>")),u=y.f,v=v.i("T.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bS(s,new A.ac(A.a2(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a2(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bQx.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bQy.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bQA.prototype={
$2(d,e){var x=null,w=this.a
return A.eJ(!1,x,!0,A.eP(A.W(10),A.kh(w.e[e].a,x,C.bW,x,x,x,x),C.aN),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bQz(w,d,e),x,x,x,x,x,x,x)},
$S:502}
B.bQz.prototype={
$0(){return A.av(this.b,!1).aD(this.a.e[this.c].b)},
$S:0}
B.aVG.prototype={
$0(){var x=y.H
return A.av(this.b,!1).i2(A.rQ(new B.aVD(this.a),null,x),x)},
$S:0}
B.aVD.prototype={
$1(d){var x=null
return A.kf(A.cFa(C.aj,x,C.u,x),C.aj,A.bT(I.cGE(C.Z,A.zB(this.a.c,x,x,!1,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1259}
B.aVF.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:165}
B.aVE.prototype={
$3(d,e,f){var x=null
return A.F(x,D.aBM,C.r,C.af,x,x,x,120,x,x,x,x,this.a)},
$S:60}
B.aVH.prototype={
$0(){return A.BC(A.dm(this.a.c,0,null),C.vc,null)},
$S:0}
B.bxq.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
B.bxr.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aV(0)
x=w.y
w.y=null
if(x!=null){w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.G9(x).cA(new B.bxo(),new B.bxp(),y.H)}},
$S:0}
B.bxo.prototype={
$1(d){},
$S:111}
B.bxp.prototype={
$1(d){},
$S:14}
B.bxs.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.eh(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.L(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.L(t.h(0,"name"))
x=u==null?null:C.f.D(u)
u=this.a
w=u.z
if(J.p(t.h(0,"stop"),!0))w.J(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.ac(v,new A.ah(Date.now(),0,!1).eY(5e6)))}u.aj2()},
$S:176}
B.bxt.prototype={
$1(d){return this.a.aj2()},
$S:67}
B.bxn.prototype={
$2(d,e){return e.b.f0(this.a)},
$S:1261}
B.bxw.prototype={
$1(d){},
$S:213}
B.bxx.prototype={
$1(d){},
$S:14}
B.bxu.prototype={
$1(d){},
$S:213}
B.bxv.prototype={
$1(d){},
$S:14}
B.cDE.prototype={
$1(d){return C.e.gN(d.split(" "))},
$S:24}
B.cD5.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v]
t=C.f.D(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.Y,r,C.Hl,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r)
p.push(A.iS(!1,C.Z,r,r,!0,r,r,r,!0,r,D.aBy,r,r,r,r,new B.cD4(d,u),!1,r,r,r,r,r,s,r,t,r,E.O8,r))}return A.bB(!0,new A.X(D.arn,A.G(A.a([D.ca4,C.au,D.c54,C.a1,new A.eq(1,C.bK,A.d2(p,r,r,r,r,!1,C.a0,!0),r)],q),C.J,C.l,C.U,0,C.w),r),r,C.Z,!0)},
$S:49}
B.cD4.prototype={
$0(){return A.av(this.a,!1).aD(this.b)},
$S:0}
B.aVN.prototype={
$3(d,e,f){var x=null
return A.jQ(A.b0(A.F(C.O,d,C.r,x,x,C.fW,x,44,x,x,x,x,44),f,x),x,e)},
$S:1262}
B.aVK.prototype={
$0(){return A.av(this.a,!1).lf()},
$S:0}
B.aVM.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.aVL.prototype={
$1(d){return D.bvq},
$S:58}
B.aVI.prototype={
$1(d){return this.a.agR(this.b)},
$S:3}
B.aVJ.prototype={
$0(){return this.a.agR(this.b)},
$S:0}
B.aWf.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Ho.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.abs.prototype,"gaRA","HB",2)
w(B,"dtF","dh6",4)
v(B.vp.prototype,"gie","cT",3)
u(B,"dsO",1,function(){return{$allTransitiveDependencies:C.cB,argument:C.cB,dependencies:C.cB,from:C.cB,isAutoDispose:C.cB,name:C.cB,retry:C.cB}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bdB",function(d,e,f,g,h,i,j,k){return B.bdB(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bdB(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.bdB(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.J,[B.Hi,B.Am,B.aTD,B.aTE,B.aiP])
w(A.bv,[B.cyi,B.cyj,B.cyk,B.aVD,B.aVF,B.aVE,B.bxq,B.bxo,B.bxp,B.bxs,B.bxt,B.bxw,B.bxx,B.bxu,B.bxv,B.cDE,B.cD5,B.aVN,B.aVM,B.aVL,B.aVI])
w(A.O,[B.Mz,B.Xu,B.PF,B.al7,B.yO,B.PG,B.PI])
w(A.bM,[B.bCk,B.ckM,B.bQv,B.bQw,B.bQx,B.bQy,B.bQz,B.aVG,B.aVH,B.bxr,B.cD4,B.aVK,B.aVJ,B.aWf])
v(B.N8,A.I)
v(B.abs,A.a1)
w(A.cM,[B.bQA,B.bxn])
v(B.vp,A.eX)
v(B.bhA,A.fv)
v(B.a9L,A.ku)
v(B.Ho,B.a9L)
v(B.a30,B.Ho)
x(B.a9L,B.aiP)})()
A.bt(b.typeUniverse,JSON.parse('{"Xu":{"O":[],"e":[],"f":[]},"N8":{"I":[],"e":[],"f":[]},"Mz":{"O":[],"e":[],"f":[]},"abs":{"a1":["N8"]},"PF":{"O":[],"e":[],"f":[]},"vp":{"eX":["t<c>"]},"al7":{"O":[],"e":[],"f":[]},"yO":{"O":[],"e":[],"f":[]},"PG":{"O":[],"e":[],"f":[]},"PI":{"O":[],"e":[],"f":[]},"Ho":{"ku":[],"fT":[],"FW":[],"lm":[]},"a30":{"Ho":["1","2","2","3","2","x3<1,2>"],"ku":[],"fT":[],"FW":[],"lm":[],"Ho.0":"1"}}'))
A.Oc(b.typeUniverse,JSON.parse('{"aiP":5,"a9L":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cx"),V:x("c4"),E:x("r<cO>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("dk"),S:x("eX<@>"),F:x("+(c,ah)"),C:x("Am"),N:x("c"),q:x("dF"),z:x("@"),r:x("v"),B:x("Hi?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c3U=new A.C("Powered by GIPHY",null,H.Hk,null,null,null,null,null,null,null,null)
D.abJ=new A.dI(C.eq,null,null,D.c3U,null)
D.Js=new B.aTD()
D.afA=new B.aTE()
D.aqS=new A.a0(12,10,14,10)
D.arj=new A.a0(16,16,16,12)
D.arm=new A.a0(16,16,16,24)
D.arn=new A.a0(16,16,16,8)
D.arq=new A.a0(16,2,16,8)
D.arV=new A.a0(20,18,20,24)
D.azV=new A.aQ(57404,"HeroiconsSolid",null,!1)
D.aA3=new A.aQ(57436,"HeroiconsSolid",null,!1)
D.aBy=new A.b3(C.hD,null,C.P,null,null,null)
D.aBM=new A.b3(C.k3,null,C.P,null,null,null)
D.aAM=new A.b3(C.uW,null,null,null,null,null)
D.aCZ=new A.e4(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aAM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aFY=new A.ka("M12 5v14M5 12h14",20,C.A,2.4,!1,C.cb,null)
D.aG_=new A.ka("M12 19V5M5 12l7-7 7 7",18,C.u,2.4,!1,C.cb,null)
D.buy=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bMr=new A.jw("report",!0,P.a9i,null,A.w("jw<c>"))
D.bvq=x([D.bMr],A.w("r<p5<c>>"))
D.bwM=x([],A.w("r<cUP>"))
D.bx9=x([],y.L)
D.al5=new A.P(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.alX=new A.P(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.an1=new A.P(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.alu=new A.P(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bBd=x([D.al5,C.dZ,D.alX,D.an1,D.alu],A.w("r<P>"))
D.bMw=new B.bhA(1,"under")
D.bTC=new A.cd(1/0,null,null,null)
D.cag=new A.C("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bUD=new A.bX(D.cag,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.z,null)
D.cbc=new A.C("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bUS=new A.bX(D.cbc,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.z,null)
D.c9L=new A.C("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bV8=new A.bX(D.c9L,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.z,null)
D.c54=new A.C("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.a6,null,null,null,null,null,null,null,null)
D.c93=new A.C("Stickers",null,C.aI,null,null,null,null,null,null,null,null)
D.ca4=new A.C("Que mensagem queres denunciar?",null,C.eL,null,null,null,null,null,null,null,null)
D.chx=new B.N8(null)
D.cke=new B.Xu(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dHt","BR",()=>D.Js.awH(0,B.dtF(),A.w("vp"),A.w("t<c>"),y.N))})()};
(a=>{a["dm34DqKZSUdCwMK+0vMDYZZaWBY="]=a.current})($__dart_deferred_initializers__);