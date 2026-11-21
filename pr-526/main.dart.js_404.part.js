((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,G,H,I,K,L,F,M,N,B={
dgx(){var x,w=$.ND(),v=J.mT(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aS(C.i.hA(w.qh(256),16),2,"0")
return C.e.jc(v)},
aNb(d,e,f){var x=0,w=A.m(y.N),v,u,t,s,r,q
var $async$aNb=A.i(function(g,h){if(g===1)return A.j(h,w)
for(;;)switch(x){case 0:r=$.Q()
q=r.b
q===$&&A.b()
q=q.gbC().e.a
u=(q==null?null:q.r).a
t=C.f.n(e,".")?C.e.ga7(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.dgx()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.qw(s,d,new A.tR(!1,f)),$async$aNb)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Be(s)
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$aNb,w)},
cQN(d){var x,w=C.e.ga7(d.split(".")).toLowerCase()
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
qz(d){var x=0,w=A.m(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$qz=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.cx(null,new B.csg(),!0,d,!0,!1,null,l),$async$qz)
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
return A.d(new A.lr().WP(85,2048,C.fB),$async$qz)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.ko(),$async$qz)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.fv(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aNb(t,s,B.cQN(s)),$async$qz)
case 12:v=new j.Gt(f,r,s)
x=1
break
case 7:x=13
return A.d($.cUU().x5(D.bvW,null,null),$async$qz)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.ko(),$async$qz)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.R(y.q).f.a3(D.bUv)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.cd(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbmy(p))
if(C.f.fv(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aNb(t,l,B.cQN(l)),$async$qz)
case 15:v=new j.Gt(f,r,l)
x=1
break
case 8:x=16
return A.d(A.cx(null,new B.csh(),!0,d,!0,!1,null,l),$async$qz)
case 16:n=f
v=n==null?null:new B.Gt("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.cx(null,new B.csi(),!0,d,!0,!0,null,l),$async$qz)
case 17:m=f
v=m==null?null:new B.Gt(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$qz,w)},
Gt:function Gt(d,e,f){this.a=d
this.b=e
this.c=f},
csg:function csg(){},
csh:function csh(){},
csi:function csi(){},
Lt:function Lt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bvA:function bvA(d,e){this.a=d
this.b=e},
VT:function VT(d){this.a=d},
ceN:function ceN(d,e){this.a=d
this.b=e},
M2:function M2(d){this.a=d},
a9H:function a9H(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bJP:function bJP(d){this.a=d},
bJR:function bJR(d){this.a=d},
bJQ:function bJQ(d,e,f){this.a=d
this.b=e
this.c=f},
Ol:function Ol(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aSf:function aSf(d,e){this.a=d
this.b=e},
aSc:function aSc(d){this.a=d},
aSe:function aSe(d){this.a=d},
aSd:function aSd(d){this.a=d},
aSg:function aSg(d){this.a=d},
d9a(d){return new B.uT(d,A.K(y.N,y.F),new A.an(A.kd(0,0),0,!1))},
cEK(d){var x,w=J.a3(d)
if(w.gZ(d))return null
x=w.du(d,new B.cxE(),y.N).bx(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
uT:function uT(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bqU:function bqU(){},
bqV:function bqV(d){this.a=d},
bqS:function bqS(){},
bqT:function bqT(){},
bqW:function bqW(d,e){this.a=d
this.b=e},
bqX:function bqX(d){this.a=d},
bqR:function bqR(d){this.a=d},
br_:function br_(){},
br0:function br0(){},
bqY:function bqY(){},
bqZ:function bqZ(){},
cxE:function cxE(){},
WN(d,e,f,g,h){var x=0,w=A.m(y.H),v,u,t
var $async$WN=A.i(function(i,j){if(i===1)return A.j(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.R(y.q).f.a3(D.bTY)
x=1
break}x=3
return A.d(A.cx(null,new B.cx7(A.fA(h,0,A.i5(12,"count",y.r),A.a8(h).c).bx(0)),!0,d,!0,!0,null,y.C),$async$WN)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(L.vd(d,e,f,u.c,u.d,g,t),$async$WN)
case 4:case 1:return A.k(v,w)}})
return A.l($async$WN,w)},
zI:function zI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cx7:function cx7(d){this.a=d},
cx6:function cx6(d,e){this.a=d
this.b=e},
czk(d,e,f,g,h,i,j){return new B.ajj(f,d,i,j,g,h,e,null)},
ajj:function ajj(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aSm:function aSm(){},
aSj:function aSj(d){this.a=d},
aSl:function aSl(d){this.a=d},
aSk:function aSk(){},
cHs(d){var x,w,v,u
for(x=new A.c1(d),w=y.V,x=new A.al(x,x.gA(0),w.i("al<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bAp[C.i.am(v,5)]},
ya:function ya(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
Om:function Om(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aSh:function aSh(d,e){this.a=d
this.b=e},
aSi:function aSi(d,e){this.a=d
this.b=e},
Oo:function Oo(d,e){this.c=d
this.a=e},
bd1:function bd1(d,e){this.a=d
this.b=e},
aQj:function aQj(){},
aQk:function aQk(){},
ah6:function ah6(){},
Gz:function Gz(){},
aSP:function aSP(d,e){this.a=d
this.b=e},
a80:function a80(){},
cKT(d,e,f,g,h,i,j,k){return new B.a1u(A.dk_(B.dkC(),i,j),d,g,h,e,A.agA(e),f,i.i("@<0>").b0(j).b0(k).i("a1u<1,2,3>"))},
b93(d,e,f,g,h,i,j,k,l,m){return new A.wu(d,h,f,j,k,g,e,i,l.i("@<0>").b0(m).i("wu<1,2>"))},
a1u:function a1u(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,O,P,Q,R,S,T,U
J=c[1]
A=c[0]
C=c[2]
E=c[331]
G=c[376]
H=c[170]
I=c[193]
K=c[322]
L=c[147]
F=c[253]
M=c[416]
N=c[443]
B=a.updateHolder(c[114],B)
D=c[259]
O=c[390]
P=c[373]
Q=c[392]
R=c[408]
S=c[412]
T=c[414]
U=c[442]
B.Gt.prototype={}
B.Lt.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eE(!1,w,!0,new A.R(C.fZ,A.D(A.a([A.B(x,A.b0(this.c,$.ag,x,x,26),C.r,x,x,new A.J(C.ag,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.aA,A.h(this.d,x,x,x,C.lM,x,x,x)],y.p),C.x,C.j,C.V,0,C.w),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bvA(this,d),x,x,x,x,x,x,x)}}
B.VT.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.btJ[x]
v=new A.aV(14,14)
s.push(A.eE(!1,new A.bX(v,v,v,v),!0,new A.R(C.ps,A.an5(w,C.hs,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.ceN(d,w),u,u,u,u,u,u,u))}return new A.R(D.aqz,A.D(A.a([D.c8B,C.U,A.PM(1,s,4,8,8,u,C.eD,!0)],t),C.I,C.j,C.V,0,C.w),u)}}
B.M2.prototype={
S(){return new B.a9H(new A.aE(C.am,$.ac()),D.bwh)}}
B.a9H.prototype={
ak(){this.aE()
this.P_("")},
m(){var x=this.d
x.T$=$.ac()
x.X$=0
this.a5()},
P_(d){return this.baM(d)},
baM(d){var x=0,w=A.m(y.H),v,u=this
var $async$P_=A.i(function(e,f){if(e===1)return A.j(f,w)
for(;;)switch(x){case 0:u.p(new B.bJP(u))
x=1
break
case 1:return A.k(v,w)}})
return A.l($async$P_,w)},
u(d){var x=this,w=null,v=A.au(d,w,y.w).w,u=A.cP(w,C.ab,!1,w,!0,C.A,w,A.cQ(),x.d,w,w,w,w,w,2,D.aC8,C.a2,!0,w,!0,w,!1,w,C.aO,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaP4(),w,!1,w,w,!1,w,!0,w,C.ay,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.at,w,C.bb,w,C.ri,w,w),t=x.r
if(t!=null)t=A.bP(A.h(t,w,w,w,C.hj,C.a6,w,w),w,w)
else t=x.f?C.bn:I.a_q(w,C.a2,U.a6x,new B.bJR(x),x.e.length,w,w,!1)
return A.aJ(new A.R(D.aqw,A.D(A.a([u,C.aa,A.a5(t,1),C.aA,D.ab6],y.p),C.I,C.j,C.q,0,C.w),w),v.a.b*0.62,w)}}
B.Ol.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.au(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b9(s.c,"asset:"))return A.an5(C.f.bJ(s.c,6),C.hs,120,120)
if(p==="image"||p==="gif")return A.dB(r,A.ey(A.W(16),new A.ea(new A.aH(0,q,0,320),A.k5(s.c,new B.aSd(q),C.bW,r,new B.aSe(q),r,r),r),C.aM),C.a2,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aSf(s,d),r,r,r,r,r,r,!1,C.bc)
p=A.W(16)
x=s.f
w=x?$.ag:C.ag
v=A.W(16)
u=A.b0(N.Na,x?C.u:$.ag,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,C.a1,r,A.aF(r,r,x?C.u:C.z,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eE(!1,p,!0,A.B(r,A.S(A.a([u,C.ax,new A.ed(1,C.bJ,t,r),C.bC,A.b0(K.uy,x?C.u:C.P,r,r,18)],y.p),C.x,C.j,C.V,0,r,r),C.r,r,new A.aH(0,q,0,1/0),new A.J(w,r,r,v,r,r,C.y),r,r,r,D.aq3,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aSg(s),r,r,r,r,r,r,r)}}
B.uT.prototype={
cP(){var x=this,w=y.T,v=A.el(x).M(A.cE($.b6(),new B.bqU(),y.D,w),w)
A.el(x).a8K(new B.bqV(x))
if(v==null)return C.ab
w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.a5F(0,"typing:"+x.x,C.a4M).brn(new B.bqW(x,v),"typing")
w.ac4(0)
x.y=w
x.Q=A.x7(C.fW,new B.bqX(x))
return C.ab},
ahd(){var x,w=this,v=w.z
v.ea(v,new B.bqR(new A.an(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c7(v,v.r,v.e,A.t(v).i("c7<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.b2(w.ga1(0))||!C.e.e9(x,J.cZe(w.ga1(0))))w.sa1(0,x)},
a9V(d){var x,w=this,v=w.y,u=A.el(w).a2(0,$.b6(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.an(Date.now(),0,!1)
if(x.da(w.as).a<2e6)return
w.as=x
v.abr(0,"typing",A.U(["id",t,"name",d],y.N,y.z),C.Fs).cF(new B.br_(),new B.br0(),y.H)},
fG(d){var x=this.y,w=A.el(this).a2(0,$.b6(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.an(A.kd(0,0),0,!1)
x.abr(0,"typing",A.U(["id",v,"stop",!0],y.N,y.z),C.Fs).cF(new B.bqY(),new B.bqZ(),y.H)}}
B.zI.prototype={}
B.ajj.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.e0(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.h(s.c,1,C.a1,r,M.H_,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.h(v,1,C.a1,r,A.aF(r,r,s.f?C.dV:C.P,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.S(A.a([q,C.aw,A.a5(A.D(w,C.I,C.j,C.V,0,C.w),1)],x),C.x,C.j,C.q,0,r,r)
q=A.a([new A.cL(0,C.bg,C.z.bV(0.06),C.wX,14)],y.E)
w=A.au(d,C.ba,y.w).w
v=new B.aSm().$3(O.D5,"Voltar",new B.aSj(d))
t=s.r
v=A.a([v,C.aw,A.a5(t==null?u:A.aY(u,t,r),1)],x)
C.e.q(v,A.a([C.ax,A.Ie(A.B(C.O,Q.Or,C.r,r,r,C.fR,r,44,r,r,r,r,44),r,new B.aSk(),new B.aSl(s),r,D.bLB,"Mais op\xe7\xf5es",y.N)],x))
return A.B(r,A.D(A.a([A.S(v,C.x,C.j,C.q,0,r,r)],x),C.J,C.j,C.V,0,C.w),C.r,r,r,new A.J(C.u,r,r,r,q,r,C.y),r,r,r,new A.Z(16,w.r.b+10,16,12),r,r,r)}}
B.ya.prototype={
u(d){var x=null,w=A.au(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.z:C.u,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.R(F.Lr,A.h(v,x,x,x,A.aF(x,x,B.cHs(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,A.aF(x,x,s?C.u:C.z,x,x,x,x,x,x,x,x,15,x,x,C.be,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ea(new A.aH(0,w.a.a*0.78,0,1/0),A.B(x,A.D(o,C.I,C.j,C.V,0,C.w),C.r,x,x,new A.J(r,x,x,new A.bX(E.xl,E.xl,new A.aV(q,q),new A.aV(p,p)),x,x,C.y),x,x,x,new A.Z(14,t,14,10),x,x,x),x)}}
B.Om.prototype={
af3(d){if(!A.t9(this.c.a.a)){d.R(y.q).f.a3(D.bUd)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.q(u,A.a([A.aY(A.B(C.O,D.aF7,C.r,w,w,C.fR,w,44,w,w,w,w,44),x.e,w),C.ax],v))
v=A.W(999)
u.push(A.a5(A.B(C.bL,A.cP(w,C.ab,!1,w,!0,C.A,w,A.cQ(),x.c,w,w,w,w,w,2,A.iT(w,C.cr,w,C.Y,w,w,w,w,!0,C.cr,w,w,w,w,w,w,!1,w,w,w,w,C.cr,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a2,!0,w,!0,w,!1,w,C.aO,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aSh(x,d),w,!1,w,w,!1,w,!0,w,C.ay,w,w,w,w,w,w,w,w,w,w,w,C.jo,!0,C.at,w,C.bb,w,C.a7t,w,w),C.r,w,w,new A.J(C.ag,w,w,v,w,w,C.y),w,44,w,C.bR,w,w,w),1))
u.push(C.ax)
u.push(A.aY(A.B(C.O,D.aF9,C.r,w,w,C.ma,w,44,w,w,w,w,44),new B.aSi(x,d),w))
return A.B(w,A.bA(!0,new A.R(S.LF,A.S(u,C.x,C.j,C.q,0,w,w),w),w,R.Ls,!1),C.r,C.u,w,w,w,w,w,w,w,w,w)}}
B.Oo.prototype={
u(d){var x=null,w=this.c
return A.cz3(C.fo,w==null?D.bSV:new A.R(D.aqD,A.bP(A.h(w,x,x,x,C.hN,x,x,x),x,x),x),C.cj,C.aB)}}
B.bd1.prototype={
J(){return"PopupMenuPosition."+this.b}}
B.aQj.prototype={
$1(d){return A.ly(d,null,!0,null,null,y.S,y.z)},
gV_(d){return D.aeT},
auv(d,e,f,g,h){return this.gV_(this).$3$1(e,f,g,h)}}
B.aQk.prototype={
$3$1(d,e,f,g){return B.cKT(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.ah6.prototype={}
B.Gz.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.aSP(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.a80.prototype={}
B.a1u.prototype={}
var z=a.updateTypes(["VT(M)","M2(M)","G<~>(c)","r<c>()","uT(c)","wu<0^,1^>(0^(){$allTransitiveDependencies!x<fL>?,argument!H?,dependencies!x<fL>?,from!kh?,isAutoDispose!y,name!c?,retry!bi?(v,H)?})<eO<1^>,H?>"])
B.csg.prototype={
$1(d){var x=null,w=y.p
return new A.R(D.ar7,A.D(A.a([A.S(A.a([new B.Lt(C.jW,"Foto","photo",x),new B.Lt(D.aze,"Ficheiro","file",x),new B.Lt(T.jS,"Sticker","sticker",x),new B.Lt(D.az5,"GIF","gif",x)],w),C.x,C.EE,C.q,0,x,x)],w),C.x,C.j,C.V,0,C.w),x)},
$S:83}
B.csh.prototype={
$1(d){return D.cjL},
$S:z+0}
B.csi.prototype={
$1(d){return D.ch5},
$S:z+1}
B.bvA.prototype={
$0(){return A.ar(this.b,!1).ap(this.a.e)},
$S:0}
B.ceN.prototype={
$0(){return A.ar(this.a,!1).ap(this.b)},
$S:0}
B.bJP.prototype={
$0(){return this.a.r="A pesquisa de GIFs ainda n\xe3o est\xe1 configurada."},
$S:0}
B.bJR.prototype={
$2(d,e){var x=null,w=this.a
return A.eE(!1,x,!0,A.ey(A.W(10),A.k5(w.e[e].a,x,C.bW,x,x,x,x),C.aM),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bJQ(w,d,e),x,x,x,x,x,x,x)},
$S:439}
B.bJQ.prototype={
$0(){return A.ar(this.b,!1).ap(this.a.e[this.c].b)},
$S:0}
B.aSf.prototype={
$0(){var x=y.H
return A.ar(this.b,!1).hQ(A.rr(new B.aSc(this.a),null,x),x)},
$S:0}
B.aSc.prototype={
$1(d){var x=null
return A.k2(A.cz5(C.aj,x,C.u,x),C.aj,A.bP(H.cAv(C.Y,A.yU(this.a.c,x,x,!1,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1184}
B.aSe.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:153}
B.aSd.prototype={
$3(d,e,f){var x=null
return A.B(x,D.aAV,C.r,C.ag,x,x,x,120,x,x,x,x,this.a)},
$S:61}
B.aSg.prototype={
$0(){return A.AY(A.e7(this.a.c,0,null),C.uU,null)},
$S:0}
B.bqU.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:16}
B.bqV.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aX(0)
x=w.y
w.y=null
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.Fi(x).cF(new B.bqS(),new B.bqT(),y.H)}},
$S:0}
B.bqS.prototype={
$1(d){},
$S:102}
B.bqT.prototype={
$1(d){},
$S:13}
B.bqW.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.fq(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.I(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.I(t.h(0,"name"))
x=u==null?null:C.f.D(u)
u=this.a
w=u.z
if(J.n(t.h(0,"stop"),!0))w.L(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.k(0,s,new A.a4(v,new A.an(Date.now(),0,!1).fo(5e6)))}u.ahd()},
$S:415}
B.bqX.prototype={
$1(d){return this.a.ahd()},
$S:63}
B.bqR.prototype={
$2(d,e){return e.b.fa(this.a)},
$S:1186}
B.br_.prototype={
$1(d){},
$S:184}
B.br0.prototype={
$1(d){},
$S:13}
B.bqY.prototype={
$1(d){},
$S:184}
B.bqZ.prototype={
$1(d){},
$S:13}
B.cxE.prototype={
$1(d){return C.e.gO(d.split(" "))},
$S:23}
B.cx7.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v]
t=C.f.D(u.b)
t=A.h(t.length===0?"Anexo":t,2,C.a1,r,C.GX,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r)
p.push(A.iF(!1,C.Y,r,r,!0,r,r,r,!0,r,D.aAH,r,r,r,r,new B.cx6(d,u),!1,r,r,r,r,r,s,r,t,r,F.NF,r))}return A.bA(!0,new A.R(D.aqA,A.D(A.a([D.c9F,C.av,D.c4w,C.Z,new A.ed(1,C.bJ,A.cX(p,r,r,r,r,!1,C.a_,!0),r)],q),C.I,C.j,C.V,0,C.w),r),r,C.Y,!0)},
$S:48}
B.cx6.prototype={
$0(){return A.ar(this.a,!1).ap(this.b)},
$S:0}
B.aSm.prototype={
$3(d,e,f){var x=null
return A.k6(A.aY(A.B(C.O,d,C.r,x,x,C.fR,x,44,x,x,x,x,44),f,x),x,e)},
$S:1187}
B.aSj.prototype={
$0(){return A.ar(this.a,!1).l1()},
$S:0}
B.aSl.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.aSk.prototype={
$1(d){return D.buB},
$S:62}
B.aSh.prototype={
$1(d){return this.a.af3(this.b)},
$S:3}
B.aSi.prototype={
$0(){return this.a.af3(this.b)},
$S:0}
B.aSP.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Gz.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.a9H.prototype,"gaP4","P_",2)
w(B,"dlu","d9a",4)
v(B.uT.prototype,"gi1","cP",3)
u(B,"dkC",1,function(){return{$allTransitiveDependencies:C.cB,argument:C.cB,dependencies:C.cB,from:C.cB,isAutoDispose:C.cB,name:C.cB,retry:C.cB}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["b93",function(d,e,f,g,h,i,j,k){return B.b93(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.b93(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.b93(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.H,[B.Gt,B.zI,B.aQj,B.aQk,B.ah6])
w(A.bq,[B.csg,B.csh,B.csi,B.aSc,B.aSe,B.aSd,B.bqU,B.bqS,B.bqT,B.bqW,B.bqX,B.br_,B.br0,B.bqY,B.bqZ,B.cxE,B.cx7,B.aSm,B.aSl,B.aSk,B.aSh])
w(A.O,[B.Lt,B.VT,B.Ol,B.ajj,B.ya,B.Om,B.Oo])
w(A.bI,[B.bvA,B.ceN,B.bJP,B.bJQ,B.aSf,B.aSg,B.bqV,B.cx6,B.aSj,B.aSi,B.aSP])
v(B.M2,A.F)
v(B.a9H,A.a_)
w(A.cG,[B.bJR,B.bqR])
v(B.uT,A.eO)
v(B.bd1,A.fn)
v(B.a80,A.kh)
v(B.Gz,B.a80)
v(B.a1u,B.Gz)
x(B.a80,B.ah6)})()
A.bj(b.typeUniverse,JSON.parse('{"VT":{"O":[],"e":[]},"M2":{"F":[],"e":[]},"Lt":{"O":[],"e":[]},"a9H":{"a_":["M2"]},"Ol":{"O":[],"e":[]},"uT":{"eO":["r<c>"]},"ajj":{"O":[],"e":[]},"ya":{"O":[],"e":[]},"Om":{"O":[],"e":[]},"Oo":{"O":[],"e":[]},"Gz":{"kh":[],"fL":[],"F5":[],"l7":[]},"a1u":{"Gz":["1","2","2","3","2","wu<1,2>"],"kh":[],"fL":[],"F5":[],"l7":[],"Gz.0":"1"}}'))
A.N0(b.typeUniverse,JSON.parse('{"ah6":5,"a80":6}'))
var y=(function rtii(){var x=A.u
return{D:x("ct"),V:x("c1"),E:x("q<cL>"),s:x("q<c>"),p:x("q<e>"),f:x("a6<@,@>"),w:x("dh"),S:x("eO<@>"),F:x("+(c,an)"),C:x("zI"),N:x("c"),q:x("dv"),z:x("@"),r:x("v"),B:x("Gt?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c3h=new A.z("Powered by GIPHY",null,G.GW,null,null,null,null,null,null,null,null)
D.ab6=new A.dA(C.e7,null,null,D.c3h,null)
D.J3=new B.aQj()
D.aeT=new B.aQk()
D.aq3=new A.Z(12,10,14,10)
D.aqw=new A.Z(16,16,16,12)
D.aqz=new A.Z(16,16,16,24)
D.aqA=new A.Z(16,16,16,8)
D.aqD=new A.Z(16,2,16,8)
D.ar7=new A.Z(20,18,20,24)
D.az5=new A.aO(57404,"HeroiconsSolid",null,!1)
D.aze=new A.aO(57436,"HeroiconsSolid",null,!1)
D.aAH=new A.aZ(C.hz,null,C.P,null,null,null)
D.aAV=new A.aZ(C.jW,null,C.P,null,null,null)
D.azX=new A.aZ(C.uD,null,null,null,null,null)
D.aC8=new A.dW(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.azX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aF7=new A.jY("M12 5v14M5 12h14",20,C.z,2.4,!1,C.ca,null)
D.aF9=new A.jY("M12 19V5M5 12l7-7 7 7",18,C.u,2.4,!1,C.ca,null)
D.btJ=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bLw=new A.je("report",!0,P.a8M,null,A.u("je<c>"))
D.buB=x([D.bLw],A.u("q<oH<c>>"))
D.bvW=x([],A.u("q<cNZ>"))
D.bwh=x([],A.u("q<+(c,c)>"))
D.akk=new A.P(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.alb=new A.P(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.amg=new A.P(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.akJ=new A.P(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bAp=x([D.akk,C.dV,D.alb,D.amg,D.akJ],A.u("q<P>"))
D.bLB=new B.bd1(1,"under")
D.bSV=new A.c9(1/0,null,null,null)
D.c9R=new A.z("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bTY=new A.bS(D.c9R,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.A,null)
D.caS=new A.z("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bUd=new A.bS(D.caS,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.A,null)
D.c9k=new A.z("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bUv=new A.bS(D.c9k,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.A,null)
D.c4w=new A.z("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.a5,null,null,null,null,null,null,null,null)
D.c8B=new A.z("Stickers",null,C.aC,null,null,null,null,null,null,null,null)
D.c9F=new A.z("Que mensagem queres denunciar?",null,C.eK,null,null,null,null,null,null,null,null)
D.ch5=new B.M2(null)
D.cjL=new B.VT(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dxv","Bb",()=>D.J3.auv(0,B.dlu(),A.u("uT"),A.u("r<c>"),y.N))})()};
(a=>{a["RFFgs+5tnOdwKf5w3AAXgMogRg0="]=a.current})($__dart_deferred_initializers__);