((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,L,M,E,N,O,C={
dEZ(){var x,w=$.Qf(),v=J.nJ(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aY(B.j.hY(w.r_(256),16),2,"0")
return B.e.hO(v)},
aUB(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUB=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.S()
q=r.b
q===$&&A.b()
q=q.gbD().e.a
u=(q==null?null:q.r).a
t=B.f.q(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dEZ()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.R("chat-attachments")
x=3
return A.d(q.rf(s,d,new A.uZ(!1,f)),$async$aUB)
case 3:r=r.b.ay
r===$&&A.b()
v=r.R("chat-attachments").Ct(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUB,w)},
dbm(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
rI(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rI=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.c9(null,new C.cLQ(),!1,d,!0,!1,null,l),$async$rI)
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
return A.d(new A.lF().Zd(85,2048,B.fw),$async$rI)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kr(),$async$rI)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fs(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUB(t,s,C.dbm(s)),$async$rI)
case 12:v=new j.It(f,r,s)
x=1
break
case 7:x=13
return A.d($.dfI().yb(D.bA6,null,null),$async$rI)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kr(),$async$rI)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a3(D.c_G)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.cb(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbuf(p))
if(B.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUB(t,l,C.dbm(l)),$async$rI)
case 15:v=new j.It(f,r,l)
x=1
break
case 8:x=16
return A.d(A.c9(null,new C.cLR(),!1,d,!0,!1,null,l),$async$rI)
case 16:n=f
v=n==null?null:new C.It("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.c9(null,new C.cLS(),!1,d,!0,!0,null,l),$async$rI)
case 17:m=f
v=m==null?null:new C.It(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rI,w)},
It:function It(d,e,f){this.a=d
this.b=e
this.c=f},
cLQ:function cLQ(){},
cLR:function cLR(){},
cLS:function cLS(){},
NQ:function NQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJf:function bJf(d,e){this.a=d
this.b=e},
Zp:function Zp(d){this.a=d},
cxr:function cxr(d,e){this.a=d
this.b=e},
Os:function Os(d){this.a=d},
adS:function adS(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bZa:function bZa(d){this.a=d},
bZb:function bZb(d,e){this.a=d
this.b=e},
bZc:function bZc(d){this.a=d},
bZd:function bZd(d){this.a=d},
bZf:function bZf(d){this.a=d},
bZe:function bZe(d,e,f){this.a=d
this.b=e
this.c=f},
R2:function R2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_e:function b_e(d,e){this.a=d
this.b=e},
b_b:function b_b(d){this.a=d},
b_d:function b_d(d){this.a=d},
b_c:function b_c(d){this.a=d},
b_f:function b_f(d){this.a=d},
dxd(d){return new C.w6(d,A.E(y.N,y.F),new A.ad(A.j1(0,0),0,!1))},
cZa(d){var x,w=J.a7(d)
if(w.gZ(d))return null
x=w.dA(d,new C.cRK(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w6:function w6(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bDT:function bDT(){},
bDU:function bDU(d){this.a=d},
bDR:function bDR(){},
bDS:function bDS(){},
bDV:function bDV(d,e){this.a=d
this.b=e},
bDW:function bDW(d){this.a=d},
bDQ:function bDQ(d){this.a=d},
bDZ:function bDZ(){},
bE_:function bE_(){},
bDX:function bDX(){},
bDY:function bDY(){},
cRK:function cRK(){},
a_p(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_p=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a3(D.c_6)
x=1
break}x=3
return A.d(A.c9(null,new C.cR6(A.e6(h,0,A.eV(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_p)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.ww(d,e,f,u.c,u.d,g,t),$async$a_p)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_p,w)},
Bc:function Bc(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cR6:function cR6(d){this.a=d},
cR5:function cR5(d,e){this.a=d
this.b=e},
cTw(d,e,f,g,h,i,j,k,l){return new C.ao3(g,d,k,h,i,e,j,l,f,null)},
ao3:function ao3(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_o:function b_o(){},
b_l:function b_l(d){this.a=d},
b_n:function b_n(d){this.a=d},
b_m:function b_m(d){this.a=d},
d15(d){var x,w,v,u
for(x=new A.ce(d),w=y.E,x=new A.al(x,x.gA(0),w.i("al<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bEA[B.j.ap(v,5)]},
cTv(d,e,f,g,h,i,j){return new C.ao2(d,i,f,e,g,j,h,null)},
zI:function zI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ao2:function ao2(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_h:function b_h(d,e){this.a=d
this.b=e},
b_i:function b_i(d,e){this.a=d
this.b=e},
b_k:function b_k(){},
b_j:function b_j(d){this.a=d},
b_g:function b_g(d,e){this.a=d
this.b=e},
R5:function R5(d,e){this.c=d
this.a=e},
Kk:function Kk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeC:function aeC(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c6V:function c6V(d,e){this.a=d
this.b=e},
bnL:function bnL(d,e){this.a=d
this.b=e},
aY5:function aY5(){},
aY6:function aY6(){},
alI:function alI(){},
Iw:function Iw(){},
b_S:function b_S(d,e){this.a=d
this.b=e},
ac9:function ac9(){},
d4H(d,e,f,g,h,i,j,k){return new C.a5i(A.dIG(C.dJn(),i,j),d,g,h,e,A.al8(e),f,i.i("@<0>").b7(j).b7(k).i("a5i<1,2,3>"))},
bj9(d,e,f,g,h,i,j,k,l,m){return new A.xP(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xP<1,2>"))},
a5i:function a5i(d,e,f,g,h,i,j,k){var _=this
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
G=c[403]
H=c[380]
I=c[178]
K=c[432]
L=c[333]
M=c[154]
E=c[240]
N=c[187]
O=c[431]
C=a.updateHolder(c[120],C)
D=c[235]
P=c[378]
Q=c[394]
R=c[268]
S=c[182]
T=c[430]
F=c[233]
C.It.prototype={
gaq(d){return this.c}}
C.NQ.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eC(!1,w,!0,new A.Q(B.hz,A.A(A.a([A.B(x,A.b3(this.c,$.at,x,x,26),B.r,x,x,new A.M(B.a7,x,x,v,x,x,B.y),x,58,x,x,x,x,58),B.aF,A.h(this.d,x,x,x,x,B.hV,x,x,x)],y.p),B.w,B.h,B.K,0,B.u),x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bJf(this,d),x,x,x,x,x,x,x)}}
C.Zp.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bxP[x]
v=new A.b5(14,14)
s.push(A.eC(!1,new A.ch(v,v,v,v),!0,new A.Q(B.qB,A.asj(w,B.km,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new C.cxr(d,w),u,u,u,u,u,u,u))}return new A.Q(D.atA,A.A(A.a([D.ceO,B.R,A.Sx(1,s,4,8,8,u,B.dD,!0)],t),B.H,B.h,B.K,0,B.u),u)}}
C.Os.prototype={
P(){return new C.adS(new A.aE(B.al,$.aa()),D.lZ)}}
C.adS.prototype={
ag(){this.aA()
this.Ih("")},
m(){var x=this.d
x.Y$=$.aa()
x.V$=0
this.a6()},
Ih(d){return this.bhN(d)},
bhN(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Ih=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bZa(s))
v=3
m=B.f.C(d)
l=m.length===0
r=l?"trending":"search"
k=A.q(r)
q=A.E(y.N,y.z)
J.b2(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b2(q,"limit","24")
J.b2(q,"rating","pg")
l=!l
if(l)J.b2(q,"q",m)
if(l)J.b2(q,"lang","pt")
p=A.ajh("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUY(p,null),$async$Ih)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bu.jT(0,A.jc(A.ja(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.bZb(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.bZc(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.bZd(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ih,w)},
u(d){var x=this,w=null,v=A.aw(d,w,y.w).w,u=A.cr(w,B.a8,!1,w,!0,B.z,w,A.cw(),x.d,w,w,w,w,w,2,D.aFD,B.Z,!0,w,!0,w,!1,w,B.aD,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaUf(),w,!1,w,w,!1,w,!0,w,B.ar,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.aq,w,B.b2,w,B.tj,w,w),t=x.r
if(t!=null)t=A.bO(A.h(t,w,w,w,w,B.kX,B.a6,w,w),w,w)
else t=x.f?D.bYR:N.a3d(w,B.Z,T.a98,new C.bZf(x),x.e.length,w,w,!1)
return A.aG(new A.Q(D.atx,A.A(A.a([u,B.ac,A.a4(t,1),B.aF,D.adK],y.p),B.H,B.h,B.l,0,B.u),w),v.a.b*0.62,w)}}
C.R2.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aw(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b2(s.c,"asset:"))return A.asj(B.f.bF(s.c,6),B.km,120,120)
if(p==="image"||p==="gif")return A.cV(r,A.fZ(A.W(16),new A.ek(new A.aQ(0,q,0,320),A.k0(s.c,new C.b_c(q),B.bR,r,new C.b_d(q),r,r),r),B.ba),B.Z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_e(s,d),r,r,r,r,r,r,!1,B.aU)
p=A.W(16)
x=s.f
w=x?$.at:B.a7
v=A.W(16)
u=A.b3(O.Pf,x?B.t:$.at,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a3,r,r,A.aH(r,r,x?B.t:B.A,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eC(!1,p,!0,A.B(r,A.N(A.a([u,B.ag,new A.de(1,B.bc,t,r),B.bn,A.b3(L.vA,x?B.t:B.U,r,r,18)],y.p),B.w,B.h,B.K,0,r,r),B.r,r,new A.aQ(0,q,0,1/0),new A.M(w,r,r,v,r,r,B.y),r,r,r,D.at0,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new C.b_f(s),r,r,r,r,r,r,r)},
gaq(d){return this.e}}
C.w6.prototype={
d7(){var x=this,w=y.T,v=A.eQ(x).H(A.cH($.ba(),new C.bDT(),y.D,w),w)
A.eQ(x).YJ(new C.bDU(x))
if(v==null)return B.a8
w=$.S().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.Mg(0,"typing:"+x.x,B.yE).bzc(new C.bDV(x,v),"typing")
w.Qb(0)
x.y=w
x.Q=A.u5(B.fS,new C.bDW(x))
return B.a8},
akO(){var x,w=this,v=w.z
v.ee(v,new C.bDQ(new A.ad(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.cg(v,v.r,v.e,A.u(v).i("cg<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aR(w.ga4(0))||!B.e.e8(x,J.dkP(w.ga4(0))))w.sa4(0,x)},
adf(d){var x,w=this,v=w.y,u=A.eQ(w).a0(0,$.ba(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ad(Date.now(),0,!1)
if(x.cS(w.as).a<2e6)return
w.as=x
v.aeR(0,"typing",A.T(["id",t,"name",d],y.N,y.z),B.Hc).cC(new C.bDZ(),new C.bE_(),y.H)},
d5(d){var x=this.y,w=A.eQ(this).a0(0,$.ba(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ad(A.j1(0,0),0,!1)
x.aeR(0,"typing",A.T(["id",v,"stop",!0],y.N,y.z),B.Hc).cC(new C.bDX(),new C.bDY(),y.H)}}
C.Bc.prototype={}
C.ao3.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cy(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.de(1,B.bc,A.h(s.c,1,B.a3,r,r,B.ae,r,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.el,D.aE2],x))
w=A.a([A.N(w,B.w,B.h,B.l,0,r,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.Q(B.v5,A.B(r,A.h(v,1,r,r,r,B.io,r,r,r),B.r,r,r,new A.M(B.d1,r,r,u,r,r,B.y),r,r,r,B.vb,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a3,r,r,A.aH(r,r,B.U,r,r,r,r,r,r,r,r,13,r,r,B.b3,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=A.N(A.a([q,B.af,A.a4(A.A(w,B.H,B.h,B.K,0,B.u),1)],x),B.w,B.h,B.l,0,r,r)
q=A.a([new A.cY(0,B.bm,B.A.cc(0.06),B.GB,14)],y.V)
w=A.aw(d,B.b4,y.w).w
v=new C.b_o().$3(K.PD,"Voltar",new C.b_l(d))
u=s.r
v=A.a([v,B.af,A.a4(u==null?t:A.aW(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Ep(A.B(B.L,Q.Ey,B.r,r,r,B.cg,r,44,r,r,r,r,44),r,new C.b_m(s),new C.b_n(s),r,D.bQq,"Mais op\xe7\xf5es",y.N)],x))
return A.B(r,A.A(A.a([A.N(v,B.w,B.h,B.l,0,r,r)],x),B.G,B.h,B.K,0,B.u),B.r,r,r,new A.M(B.t,r,r,B.u_,q,r,B.y),r,r,r,new A.a0(20,w.r.b+20,20,14),r,r,r)},
gaq(d){return this.c}}
C.zI.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.A:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.Q(E.Nq,A.h(v,x,x,x,x,A.aH(x,x,C.d15(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aH(x,x,s?B.t:B.A,x,x,x,x,x,x,x,x,15,x,x,B.bq,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ek(new A.aQ(0,w.a.a*0.78,0,1/0),A.B(x,A.A(o,B.H,B.h,B.K,0,B.u),B.r,x,x,new A.M(r,x,x,new A.ch(F.yx,F.yx,new A.b5(q,q),new A.b5(p,p)),x,x,B.y),x,x,x,new A.a0(14,t,14,10),x,x,x),x)}}
C.ao2.prototype={
aiD(d){if(!A.uc(this.c.a.a)){d.O(y.q).f.a3(D.c_l)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aW(A.B(B.L,B.PG,B.r,t,t,B.cg,t,44,t,t,t,t,44),u.e,t),B.ag],s))
x=A.W(24)
r.push(A.a4(A.B(B.bg,A.cr(t,B.a8,!1,t,!0,B.z,t,A.cw(),u.c,t,t,t,t,t,2,A.iI(t,B.bw,t,B.a_,t,t,t,t,!0,B.bw,t,t,t,t,t,t,!1,t,t,t,t,B.bw,t,t,t,t,t,t,t,t,B.my,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.Z,!0,t,!0,t,!1,t,B.aD,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_h(u,d),t,!1,t,t,!1,t,!0,t,B.ar,t,t,t,t,t,t,t,t,t,t,t,B.ff,!0,B.aq,t,B.b2,t,B.aa9,t,t),B.r,t,t,new A.M(B.a7,t,t,x,t,t,B.y),t,48,t,B.bT,t,t,t),1))
r.push(B.ag)
r.push(A.b8(t,!0,t,A.aW(A.B(B.L,D.aEh,B.r,t,t,B.cg,t,44,t,t,t,t,44),new C.b_i(u,d),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.N(r,B.w,B.h,B.l,0,t,t)
r=A.a([new A.cY(0,B.bm,B.A.cc(0.12),B.k0,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aG(A.Tr(B.z,new C.b_j(u),v,t,t,B.bx,new C.b_k()),34,t),B.ac],s))
x.push(w)
return A.B(t,A.bC(!0,new A.Q(B.hx,A.A(x,B.G,B.h,B.K,0,B.u),t),t,D.asA,!1),B.r,t,t,new A.M(B.t,t,t,B.pF,r,t,B.y),t,t,t,t,t,t,t)}}
C.R5.prototype={
u(d){var x=null,w=this.c
return A.cTd(B.fJ,w==null?D.bYm:new A.Q(D.atE,A.bO(A.h(w,x,x,x,x,B.kb,x,x,x),x,x),x),B.cq,B.aE)}}
C.Kk.prototype={
P(){return new C.aeC()}}
C.aeC.prototype={
ag(){var x,w=this
w.aA()
x=w.a
w.e=x.d
x.c.am(0,w.ga1L())},
ba(d){var x,w,v=this
v.bx(d)
x=d.c
if(x!==v.a.c){w=v.ga1L()
x.a_(0,w)
v.a.c.am(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a_(0,this.ga1L())
this.a6()},
aUk(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbA(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c6V(w,x))},
b7s(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aw(x,null,y.w).w
w=this.a
if(x.ax)w.c.hP(0)
else w.c.iJ(0,B.eu,G.CV)},
u(d){var x,w,v,u=this,t=null,s=B.j.af(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iU(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.B(B.L,D.aEa,B.r,t,t,D.agp,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bz(B.A,2)
r.push(A.cc(t,A.B(B.L,A.h(""+s,t,t,t,t,B.hV,t,t,t),B.r,t,B.ll,new A.M(B.t,t,v,x,t,t,B.y),t,20,t,B.Dj,t,t,t),t,t,t,-6,-6,t))}q.push(A.cc(16,A.b8(t,!0,t,A.aW(new A.bG(B.aB,t,B.aH,B.r,r,t),u.gb7r(),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bG(B.aB,t,B.aH,B.z,q,t)}}
C.bnL.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aY5.prototype={
$1(d){return A.mV(d,null,!0,null,null,y.S,y.z)},
gXf(d){return D.ahN},
ayM(d,e,f,g,h){return this.gXf(this).$3$1(e,f,g,h)}}
C.aY6.prototype={
$3$1(d,e,f,g){return C.d4H(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alI.prototype={}
C.Iw.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_S(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.ac9.prototype={}
C.a5i.prototype={}
var z=a.updateTypes(["~()","Zp(O)","Os(O)","F<~>(c)","t<c>()","w6(c)","xP<0^,1^>(0^(){$allTransitiveDependencies!z<h3>?,argument!J?,dependencies!z<h3>?,from!kL?,isAutoDispose!x,name!c?,retry!bp?(v,J)?})<fd<1^>,J?>"])
C.cLQ.prototype={
$1(d){var x=null,w=y.p
return new A.Q(D.au5,A.A(A.a([A.N(A.a([new C.NQ(B.jS,"Foto","photo",x),new C.NQ(D.aCG,"Ficheiro","file",x),new C.NQ(R.jP,"Sticker","sticker",x),new C.NQ(D.aCy,"GIF","gif",x)],w),B.w,B.Gj,B.l,0,x,x)],w),B.w,B.h,B.K,0,B.u),x)},
$S:69}
C.cLR.prototype={
$1(d){return D.cqr},
$S:z+1}
C.cLS.prototype={
$1(d){return D.cnG},
$S:z+2}
C.bJf.prototype={
$0(){return A.am(this.b,!1).ad(this.a.e)},
$S:0}
C.cxr.prototype={
$0(){return A.am(this.a,!1).ad(this.b)},
$S:0}
C.bZa.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZb.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bl(this.b,y.P),v=A.u(w),w=new A.al(w,w.gA(w),v.i("al<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.by(s,new A.a3(A.a1(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a1(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZc.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bZd.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bZf.prototype={
$2(d,e){var x=null,w=this.a
return A.eC(!1,x,!0,A.fZ(A.W(10),A.k0(w.e[e].a,x,B.bR,x,x,x,x),B.ba),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bZe(w,d,e),x,x,x,x,x,x,x)},
$S:467}
C.bZe.prototype={
$0(){return A.am(this.b,!1).ad(this.a.e[this.c].b)},
$S:0}
C.b_e.prototype={
$0(){var x=y.H
return A.am(this.b,!1).ic(A.tv(new C.b_b(this.a),null,x),x)},
$S:0}
C.b_b.prototype={
$1(d){var x=null
return A.kt(A.cTf(B.ao,x,B.t,x),B.ao,A.bO(I.cUD(B.a_,A.tk(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1331}
C.b_d.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1332}
C.b_c.prototype={
$3(d,e,f){var x=null
return A.B(x,D.aEp,B.r,B.a7,x,x,x,120,x,x,x,x,this.a)},
$S:71}
C.b_f.prototype={
$0(){return A.za(A.dw(this.a.c,0,null),B.qR,null)},
$S:0}
C.bDT.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
C.bDU.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aL(0)
x=w.y
w.y=null
if(x!=null){w=$.S().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yh(x).cC(new C.bDR(),new C.bDS(),y.H)}},
$S:0}
C.bDR.prototype={
$1(d){},
$S:122}
C.bDS.prototype={
$1(d){},
$S:13}
C.bDV.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e9(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.D(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.D(t.h(0,"name"))
x=u==null?null:B.f.C(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a3(v,new A.ad(Date.now(),0,!1).e5(5e6)))}u.akO()},
$S:248}
C.bDW.prototype={
$1(d){return this.a.akO()},
$S:67}
C.bDQ.prototype={
$2(d,e){return e.b.eA(this.a)},
$S:1333}
C.bDZ.prototype={
$1(d){},
$S:227}
C.bE_.prototype={
$1(d){},
$S:13}
C.bDX.prototype={
$1(d){},
$S:227}
C.bDY.prototype={
$1(d){},
$S:13}
C.cRK.prototype={
$1(d){return B.e.gM(d.split(" "))},
$S:24}
C.cR6.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v]
t=B.f.C(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a3,r,r,B.IU,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jl(!1,B.a_,r,r,!0,r,r,r,!0,r,D.aE9,r,r,r,r,new C.cR5(d,u),!1,r,r,r,r,r,s,r,t,r,E.PO,r))}return A.bC(!0,new A.Q(D.atB,A.A(A.a([D.cfT,B.au,D.caw,B.S,new A.de(1,B.bc,A.d0(p,r,r,r,r,!1,B.a2,!0),r)],q),B.H,B.h,B.K,0,B.u),r),r,B.a_,!0)},
$S:43}
C.cR5.prototype={
$0(){return A.am(this.a,!1).ad(this.b)},
$S:0}
C.b_o.prototype={
$3(d,e,f){var x=null
return A.kV(A.aW(A.B(B.L,d,B.r,x,x,B.cg,x,44,x,x,x,x,44),f,x),x,e)},
$S:1334}
C.b_l.prototype={
$0(){return A.am(this.a,!1).iz()},
$S:0}
C.b_n.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_m.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.K)(x),++u){t=x[u].a
r.push(A.bnK(A.h(t,s,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bQl)
return r},
$S:58}
C.b_h.prototype={
$1(d){return this.a.aiD(this.b)},
$S:3}
C.b_i.prototype={
$0(){return this.a.aiD(this.b)},
$S:0}
C.b_k.prototype={
$2(d,e){return B.ag},
$S:105}
C.b_j.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bz(B.A,1.5)
return A.aW(A.B(B.L,A.h(w.w[e],x,x,x,x,B.dM,x,x,x),B.r,x,x,new A.M(B.t,x,u,v,x,x,B.y),x,34,x,B.cL,x,x,x),new C.b_g(w,e),x)},
$S:183}
C.b_g.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c6V.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_S.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Iw.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adS.prototype,"gaUf","Ih",3)
w(C,"dKk","dxd",5)
v(C.w6.prototype,"giM","d7",4)
var t
v(t=C.aeC.prototype,"ga1L","aUk",0)
v(t,"gb7r","b7s",0)
u(C,"dJn",1,function(){return{$allTransitiveDependencies:B.cK,argument:B.cK,dependencies:B.cK,from:B.cK,isAutoDispose:B.cK,name:B.cK,retry:B.cK}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bj9",function(d,e,f,g,h,i,j,k){return C.bj9(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bj9(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bj9(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.J,[C.It,C.Bc,C.aY5,C.aY6,C.alI])
w(A.bx,[C.cLQ,C.cLR,C.cLS,C.b_b,C.b_d,C.b_c,C.bDT,C.bDR,C.bDS,C.bDV,C.bDW,C.bDZ,C.bE_,C.bDX,C.bDY,C.cRK,C.cR6,C.b_o,C.b_n,C.b_m,C.b_h])
w(A.H,[C.NQ,C.Zp,C.R2,C.ao3,C.zI,C.ao2,C.R5])
w(A.bQ,[C.bJf,C.cxr,C.bZa,C.bZb,C.bZc,C.bZd,C.bZe,C.b_e,C.b_f,C.bDU,C.cR5,C.b_l,C.b_i,C.b_g,C.c6V,C.b_S])
w(A.G,[C.Os,C.Kk])
w(A.Z,[C.adS,C.aeC])
w(A.cO,[C.bZf,C.bDQ,C.b_k,C.b_j])
v(C.w6,A.fd)
v(C.bnL,A.f7)
v(C.ac9,A.kL)
v(C.Iw,C.ac9)
v(C.a5i,C.Iw)
x(C.ac9,C.alI)})()
A.bn(b.typeUniverse,JSON.parse('{"Zp":{"H":[],"e":[],"f":[]},"Os":{"G":[],"e":[],"f":[]},"NQ":{"H":[],"e":[],"f":[]},"adS":{"Z":["Os"]},"R2":{"H":[],"e":[],"f":[]},"w6":{"fd":["t<c>"]},"ao3":{"H":[],"e":[],"f":[]},"Kk":{"G":[],"e":[],"f":[]},"zI":{"H":[],"e":[],"f":[]},"ao2":{"H":[],"e":[],"f":[]},"R5":{"H":[],"e":[],"f":[]},"aeC":{"Z":["Kk"]},"Iw":{"kL":[],"h3":[],"H6":[],"lH":[]},"a5i":{"Iw":["1","2","2","3","2","xP<1,2>"],"kL":[],"h3":[],"H6":[],"lH":[],"Iw.0":"1"}}'))
A.PD(b.typeUniverse,JSON.parse('{"alI":5,"ac9":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cE"),E:x("ce"),V:x("r<cY>"),X:x("r<pF<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("df"),S:x("fd<@>"),F:x("+(c,ad)"),C:x("Bc"),N:x("c"),q:x("dm"),z:x("@"),r:x("v"),B:x("It?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c9b=new A.C("Powered by GIPHY",null,H.IS,null,null,null,null,null,null,null,null)
D.adK=new A.d1(B.dY,null,null,D.c9b,null)
D.agp=new A.M(B.A,null,null,null,B.ia,null,B.av)
D.L1=new C.aY5()
D.ahN=new C.aY6()
D.asA=new A.a0(0,0,0,24)
D.at0=new A.a0(12,10,14,10)
D.atx=new A.a0(16,16,16,12)
D.atA=new A.a0(16,16,16,24)
D.atB=new A.a0(16,16,16,8)
D.atE=new A.a0(16,2,16,8)
D.au5=new A.a0(20,18,20,24)
D.aCy=new A.aV(57404,"HeroiconsSolid",null,!1)
D.aCG=new A.aV(57436,"HeroiconsSolid",null,!1)
D.aE2=new A.b7(B.i5,18,B.bp,null,"Verificado",null)
D.aE9=new A.b7(B.fY,null,B.U,null,null,null)
D.aCk=new A.aV(57347,"HeroiconsSolid",null,!1)
D.aEa=new A.b7(D.aCk,20,B.t,null,null,null)
D.aEh=new A.b7(B.lR,20,B.t,null,null,null)
D.aEp=new A.b7(B.jS,null,B.U,null,null,null)
D.aDp=new A.b7(B.vF,null,null,null,null,null)
D.aFD=new A.dE(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aDp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxP=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bA6=x([],A.w("r<d8l>"))
D.bA9=x([],A.w("r<+(c,~())>"))
D.lZ=x([],y.L)
D.ang=new A.X(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.ao4=new A.X(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.ap8=new A.X(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.anG=new A.X(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bEA=x([D.ang,B.dc,D.ao4,D.ap8,D.anG],A.w("r<X>"))
D.bQl=new A.jM("report",!0,P.abn,null,A.w("jM<c>"))
D.bQq=new C.bnL(1,"under")
D.bYm=new A.c1(1/0,null,null,null)
D.bYR=new S.yk(12,3,null)
D.cg4=new A.C("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.c_6=new A.bF(D.cg4,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.z,null)
D.chc=new A.C("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.c_l=new A.bF(D.chc,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.z,null)
D.cfu=new A.C("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.c_G=new A.bF(D.cfu,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.z,null)
D.caw=new A.C("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.P,null,null,null,null,null,null,null,null)
D.ceO=new A.C("Stickers",null,B.ae,null,null,null,null,null,null,null,null)
D.cfT=new A.C("Que mensagem queres denunciar?",null,B.hh,null,null,null,null,null,null,null,null)
D.cnG=new C.Os(null)
D.cqr=new C.Zp(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXN","CO",()=>D.L1.ayM(0,C.dKk(),A.w("w6"),A.w("t<c>"),y.N))})()};
(a=>{a["BDAFWh8tINMjBcXliC9OqB8wfP8="]=a.current})($__dart_deferred_initializers__);