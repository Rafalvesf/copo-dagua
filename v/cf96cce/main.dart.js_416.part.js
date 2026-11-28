((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,L,M,E,N,O,C={
dEO(){var x,w=$.Qf(),v=J.nJ(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aY(B.j.hX(w.r_(256),16),2,"0")
return B.e.hO(v)},
aUA(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUA=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.S()
q=r.b
q===$&&A.b()
q=q.gbD().e.a
u=(q==null?null:q.r).a
t=B.f.q(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dEO()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.R("chat-attachments")
x=3
return A.d(q.rf(s,d,new A.uY(!1,f)),$async$aUA)
case 3:r=r.b.ay
r===$&&A.b()
v=r.R("chat-attachments").Ct(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUA,w)},
dbc(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
rH(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rH=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.c9(null,new C.cLG(),!1,d,!0,!1,null,l),$async$rH)
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
return A.d(new A.lF().Zc(85,2048,B.fv),$async$rH)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kr(),$async$rH)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fs(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUA(t,s,C.dbc(s)),$async$rH)
case 12:v=new j.Is(f,r,s)
x=1
break
case 7:x=13
return A.d($.dfy().yb(D.bA5,null,null),$async$rH)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kr(),$async$rH)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a3(D.c_E)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.cb(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbub(p))
if(B.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUA(t,l,C.dbc(l)),$async$rH)
case 15:v=new j.Is(f,r,l)
x=1
break
case 8:x=16
return A.d(A.c9(null,new C.cLH(),!1,d,!0,!1,null,l),$async$rH)
case 16:n=f
v=n==null?null:new C.Is("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.c9(null,new C.cLI(),!1,d,!0,!0,null,l),$async$rH)
case 17:m=f
v=m==null?null:new C.Is(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rH,w)},
Is:function Is(d,e,f){this.a=d
this.b=e
this.c=f},
cLG:function cLG(){},
cLH:function cLH(){},
cLI:function cLI(){},
NQ:function NQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJe:function bJe(d,e){this.a=d
this.b=e},
Zp:function Zp(d){this.a=d},
cxh:function cxh(d,e){this.a=d
this.b=e},
Os:function Os(d){this.a=d},
adS:function adS(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bZ9:function bZ9(d){this.a=d},
bZa:function bZa(d,e){this.a=d
this.b=e},
bZb:function bZb(d){this.a=d},
bZc:function bZc(d){this.a=d},
bZe:function bZe(d){this.a=d},
bZd:function bZd(d,e,f){this.a=d
this.b=e
this.c=f},
R2:function R2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_d:function b_d(d,e){this.a=d
this.b=e},
b_a:function b_a(d){this.a=d},
b_c:function b_c(d){this.a=d},
b_b:function b_b(d){this.a=d},
b_e:function b_e(d){this.a=d},
dx2(d){return new C.w6(d,A.E(y.N,y.F),new A.ad(A.j1(0,0),0,!1))},
cZ0(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dA(d,new C.cRA(),y.N).by(0)
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
bDS:function bDS(){},
bDT:function bDT(d){this.a=d},
bDQ:function bDQ(){},
bDR:function bDR(){},
bDU:function bDU(d,e){this.a=d
this.b=e},
bDV:function bDV(d){this.a=d},
bDP:function bDP(d){this.a=d},
bDY:function bDY(){},
bDZ:function bDZ(){},
bDW:function bDW(){},
bDX:function bDX(){},
cRA:function cRA(){},
a_p(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_p=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a3(D.c_5)
x=1
break}x=3
return A.d(A.c9(null,new C.cQX(A.e5(h,0,A.eV(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_p)
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
cQX:function cQX(d){this.a=d},
cQW:function cQW(d,e){this.a=d
this.b=e},
cTm(d,e,f,g,h,i,j,k,l){return new C.ao2(g,d,k,h,i,e,j,l,f,null)},
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
b_n:function b_n(){},
b_k:function b_k(d){this.a=d},
b_m:function b_m(d){this.a=d},
b_l:function b_l(d){this.a=d},
d0W(d){var x,w,v,u
for(x=new A.ce(d),w=y.E,x=new A.al(x,x.gA(0),w.i("al<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bEz[B.j.ap(v,5)]},
cTl(d,e,f,g,h,i,j){return new C.ao1(d,i,f,e,g,j,h,null)},
zI:function zI(d,e,f,g){var _=this
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
b_g:function b_g(d,e){this.a=d
this.b=e},
b_h:function b_h(d,e){this.a=d
this.b=e},
b_j:function b_j(){},
b_i:function b_i(d){this.a=d},
b_f:function b_f(d,e){this.a=d
this.b=e},
R5:function R5(d,e){this.c=d
this.a=e},
Kk:function Kk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeB:function aeB(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c6U:function c6U(d,e){this.a=d
this.b=e},
bnK:function bnK(d,e){this.a=d
this.b=e},
aY4:function aY4(){},
aY5:function aY5(){},
alH:function alH(){},
Iv:function Iv(){},
b_R:function b_R(d,e){this.a=d
this.b=e},
ac9:function ac9(){},
d4x(d,e,f,g,h,i,j,k){return new C.a5i(A.dIv(C.dJc(),i,j),d,g,h,e,A.al7(e),f,i.i("@<0>").b6(j).b6(k).i("a5i<1,2,3>"))},
bj8(d,e,f,g,h,i,j,k,l,m){return new A.xP(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("xP<1,2>"))},
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
C.Is.prototype={
gaq(d){return this.c}}
C.NQ.prototype={
u(d){var x=null,w=A.X(18),v=A.X(18)
return A.eC(!1,w,!0,new A.Q(B.hy,A.A(A.a([A.B(x,A.b2(this.c,$.at,x,x,26),B.r,x,x,new A.M(B.a7,x,x,v,x,x,B.y),x,58,x,x,x,x,58),B.aE,A.h(this.d,x,x,x,x,B.hU,x,x,x)],y.p),B.w,B.h,B.K,0,B.u),x),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bJe(this,d),x,x,x,x,x,x,x)}}
C.Zp.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bxO[x]
v=new A.b4(14,14)
s.push(A.eC(!1,new A.ch(v,v,v,v),!0,new A.Q(B.qB,A.asi(w,B.km,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new C.cxh(d,w),u,u,u,u,u,u,u))}return new A.Q(D.atz,A.A(A.a([D.ceJ,B.R,A.Sx(1,s,4,8,8,u,B.dD,!0)],t),B.H,B.h,B.K,0,B.u),u)}}
C.Os.prototype={
P(){return new C.adS(new A.aF(B.al,$.ab()),D.kI)}}
C.adS.prototype={
ah(){this.aA()
this.Ih("")},
m(){var x=this.d
x.Z$=$.ab()
x.V$=0
this.a6()},
Ih(d){return this.bhJ(d)},
bhJ(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Ih=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bZ9(s))
v=3
m=B.f.C(d)
l=m.length===0
r=l?"trending":"search"
k=A.q(r)
q=A.E(y.N,y.z)
J.b6(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b6(q,"limit","24")
J.b6(q,"rating","pg")
l=!l
if(l)J.b6(q,"q",m)
if(l)J.b6(q,"lang","pt")
p=A.ajg("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUX(p,null),$async$Ih)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bu.jT(0,A.jc(A.ja(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.bZa(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.bZb(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.bZc(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ih,w)},
u(d){var x=this,w=null,v=A.aw(d,w,y.w).w,u=A.cw(w,B.a8,!1,w,!0,B.z,w,A.cz(),x.d,w,w,w,w,w,2,D.aFC,B.Z,!0,w,!0,w,!1,w,B.aF,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaUb(),w,!1,w,w,!1,w,!0,w,B.at,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.as,w,B.b3,w,B.tj,w,w),t=x.r
if(t!=null)t=A.bO(A.h(t,w,w,w,w,B.kY,B.a6,w,w),w,w)
else t=x.f?D.bYQ:N.a3d(w,B.Z,T.a97,new C.bZe(x),x.e.length,w,w,!1)
return A.aG(new A.Q(D.atw,A.A(A.a([u,B.ac,A.a4(t,1),B.aE,D.adJ],y.p),B.H,B.h,B.l,0,B.u),w),v.a.b*0.62,w)}}
C.R2.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aw(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b2(s.c,"asset:"))return A.asi(B.f.bF(s.c,6),B.km,120,120)
if(p==="image"||p==="gif")return A.cW(r,A.fZ(A.X(16),new A.ek(new A.aQ(0,q,0,320),A.k0(s.c,new C.b_b(q),B.bR,r,new C.b_c(q),r,r),r),B.ba),B.Z,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_d(s,d),r,r,r,r,r,r,!1,B.aV)
p=A.X(16)
x=s.f
w=x?$.at:B.a7
v=A.X(16)
u=A.b2(O.Pf,x?B.t:$.at,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a3,r,r,A.aI(r,r,x?B.t:B.A,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eC(!1,p,!0,A.B(r,A.O(A.a([u,B.ag,new A.de(1,B.bc,t,r),B.bn,A.b2(L.vA,x?B.t:B.U,r,r,18)],y.p),B.w,B.h,B.K,0,r,r),B.r,r,new A.aQ(0,q,0,1/0),new A.M(w,r,r,v,r,r,B.y),r,r,r,D.at_,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new C.b_e(s),r,r,r,r,r,r,r)},
gaq(d){return this.e}}
C.w6.prototype={
d6(){var x=this,w=y.T,v=A.eQ(x).H(A.cH($.ba(),new C.bDS(),y.D,w),w)
A.eQ(x).YI(new C.bDT(x))
if(v==null)return B.a8
w=$.S().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.Mg(0,"typing:"+x.x,B.yE).bz8(new C.bDU(x,v),"typing")
w.Qb(0)
x.y=w
x.Q=A.u4(B.fR,new C.bDV(x))
return B.a8},
akL(){var x,w=this,v=w.z
v.ee(v,new C.bDP(new A.ad(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.cg(v,v.r,v.e,A.u(v).i("cg<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aR(w.ga4(0))||!B.e.e8(x,J.dkF(w.ga4(0))))w.sa4(0,x)},
adb(d){var x,w=this,v=w.y,u=A.eQ(w).a0(0,$.ba(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ad(Date.now(),0,!1)
if(x.cS(w.as).a<2e6)return
w.as=x
v.aeO(0,"typing",A.T(["id",t,"name",d],y.N,y.z),B.Hc).cC(new C.bDY(),new C.bDZ(),y.H)},
d4(d){var x=this.y,w=A.eQ(this).a0(0,$.ba(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ad(A.j1(0,0),0,!1)
x.aeO(0,"typing",A.T(["id",v,"stop",!0],y.N,y.z),B.Hc).cC(new C.bDW(),new C.bDX(),y.H)}}
C.Bc.prototype={}
C.ao2.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cx(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.de(1,B.bc,A.h(s.c,1,B.a3,r,r,B.ae,r,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.el,D.aE1],x))
w=A.a([A.O(w,B.w,B.h,B.l,0,r,r)],x)
v=s.y
if(v!=null){u=A.X(999)
w.push(new A.Q(B.v5,A.B(r,A.h(v,1,r,r,r,B.io,r,r,r),B.r,r,r,new A.M(B.d1,r,r,u,r,r,B.y),r,r,r,B.vb,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a3,r,r,A.aI(r,r,B.U,r,r,r,r,r,r,r,r,13,r,r,B.b2,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=A.O(A.a([q,B.af,A.a4(A.A(w,B.H,B.h,B.K,0,B.u),1)],x),B.w,B.h,B.l,0,r,r)
q=A.a([new A.cY(0,B.bm,B.A.cc(0.06),B.GB,14)],y.V)
w=A.aw(d,B.b4,y.w).w
v=new C.b_n().$3(K.PD,"Voltar",new C.b_k(d))
u=s.r
v=A.a([v,B.af,A.a4(u==null?t:A.aW(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Eo(A.B(B.L,Q.Ey,B.r,r,r,B.cg,r,44,r,r,r,r,44),r,new C.b_l(s),new C.b_m(s),r,D.bQp,"Mais op\xe7\xf5es",y.N)],x))
return A.B(r,A.A(A.a([A.O(v,B.w,B.h,B.l,0,r,r)],x),B.G,B.h,B.K,0,B.u),B.r,r,r,new A.M(B.t,r,r,B.u_,q,r,B.y),r,r,r,new A.a0(20,w.r.b+20,20,14),r,r,r)},
gaq(d){return this.c}}
C.zI.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.A:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.Q(E.Nq,A.h(v,x,x,x,x,A.aI(x,x,C.d0W(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aI(x,x,s?B.t:B.A,x,x,x,x,x,x,x,x,15,x,x,B.bp,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ek(new A.aQ(0,w.a.a*0.78,0,1/0),A.B(x,A.A(o,B.H,B.h,B.K,0,B.u),B.r,x,x,new A.M(r,x,x,new A.ch(F.yx,F.yx,new A.b4(q,q),new A.b4(p,p)),x,x,B.y),x,x,x,new A.a0(14,t,14,10),x,x,x),x)}}
C.ao1.prototype={
aiA(d){if(!A.ub(this.c.a.a)){d.O(y.q).f.a3(D.c_k)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aW(A.B(B.L,B.PG,B.r,t,t,B.cg,t,44,t,t,t,t,44),u.e,t),B.ag],s))
x=A.X(24)
r.push(A.a4(A.B(B.bg,A.cw(t,B.a8,!1,t,!0,B.z,t,A.cz(),u.c,t,t,t,t,t,2,A.iI(t,B.by,t,B.a_,t,t,t,t,!0,B.by,t,t,t,t,t,t,!1,t,t,t,t,B.by,t,t,t,t,t,t,t,t,B.my,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.Z,!0,t,!0,t,!1,t,B.aF,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_g(u,d),t,!1,t,t,!1,t,!0,t,B.at,t,t,t,t,t,t,t,t,t,t,t,B.ff,!0,B.as,t,B.b3,t,B.aa8,t,t),B.r,t,t,new A.M(B.a7,t,t,x,t,t,B.y),t,48,t,B.bT,t,t,t),1))
r.push(B.ag)
r.push(A.b8(t,!0,t,A.aW(A.B(B.L,D.aEg,B.r,t,t,B.cg,t,44,t,t,t,t,44),new C.b_h(u,d),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.O(r,B.w,B.h,B.l,0,t,t)
r=A.a([new A.cY(0,B.bm,B.A.cc(0.12),B.k0,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aG(A.Tr(B.z,new C.b_i(u),v,t,t,B.bw,new C.b_j()),34,t),B.ac],s))
x.push(w)
return A.B(t,A.bC(!0,new A.Q(B.hw,A.A(x,B.G,B.h,B.K,0,B.u),t),t,D.asz,!1),B.r,t,t,new A.M(B.t,t,t,B.pF,r,t,B.y),t,t,t,t,t,t,t)}}
C.R5.prototype={
u(d){var x=null,w=this.c
return A.cT3(B.fI,w==null?D.bYl:new A.Q(D.atD,A.bO(A.h(w,x,x,x,x,B.kb,x,x,x),x,x),x),B.cq,B.aD)}}
C.Kk.prototype={
P(){return new C.aeB()}}
C.aeB.prototype={
ah(){var x,w=this
w.aA()
x=w.a
w.e=x.d
x.c.am(0,w.ga1K())},
ba(d){var x,w,v=this
v.bx(d)
x=d.c
if(x!==v.a.c){w=v.ga1K()
x.a_(0,w)
v.a.c.am(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a_(0,this.ga1K())
this.a6()},
aUg(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbA(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c6U(w,x))},
b7o(){var x,w
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
r=A.a([A.B(B.L,D.aE9,B.r,t,t,D.ago,t,44,t,t,t,t,44)],r)
if(x){x=A.X(10)
v=A.bz(B.A,2)
r.push(A.cc(t,A.B(B.L,A.h(""+s,t,t,t,t,B.hU,t,t,t),B.r,t,B.lm,new A.M(B.t,t,v,x,t,t,B.y),t,20,t,B.Dj,t,t,t),t,t,t,-6,-6,t))}q.push(A.cc(16,A.b8(t,!0,t,A.aW(new A.bE(B.aB,t,B.aH,B.r,r,t),u.gb7n(),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bE(B.aB,t,B.aH,B.z,q,t)}}
C.bnK.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aY4.prototype={
$1(d){return A.mV(d,null,!0,null,null,y.S,y.z)},
gXe(d){return D.ahM},
ayI(d,e,f,g,h){return this.gXe(this).$3$1(e,f,g,h)}}
C.aY5.prototype={
$3$1(d,e,f,g){return C.d4x(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alH.prototype={}
C.Iv.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_R(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.ac9.prototype={}
C.a5i.prototype={}
var z=a.updateTypes(["~()","Zp(N)","Os(N)","F<~>(c)","t<c>()","w6(c)","xP<0^,1^>(0^(){$allTransitiveDependencies!z<h3>?,argument!J?,dependencies!z<h3>?,from!kL?,isAutoDispose!x,name!c?,retry!bp?(v,J)?})<fd<1^>,J?>"])
C.cLG.prototype={
$1(d){var x=null,w=y.p
return new A.Q(D.au4,A.A(A.a([A.O(A.a([new C.NQ(B.jS,"Foto","photo",x),new C.NQ(D.aCF,"Ficheiro","file",x),new C.NQ(R.jP,"Sticker","sticker",x),new C.NQ(D.aCx,"GIF","gif",x)],w),B.w,B.Gj,B.l,0,x,x)],w),B.w,B.h,B.K,0,B.u),x)},
$S:71}
C.cLH.prototype={
$1(d){return D.cql},
$S:z+1}
C.cLI.prototype={
$1(d){return D.cnA},
$S:z+2}
C.bJe.prototype={
$0(){return A.am(this.b,!1).ad(this.a.e)},
$S:0}
C.cxh.prototype={
$0(){return A.am(this.a,!1).ad(this.b)},
$S:0}
C.bZ9.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZa.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bl(this.b,y.P),v=A.u(w),w=new A.al(w,w.gA(w),v.i("al<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.by(s,new A.a3(A.a1(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a1(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZb.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bZc.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bZe.prototype={
$2(d,e){var x=null,w=this.a
return A.eC(!1,x,!0,A.fZ(A.X(10),A.k0(w.e[e].a,x,B.bR,x,x,x,x),B.ba),x,!0,x,x,x,x,x,x,x,x,x,x,new C.bZd(w,d,e),x,x,x,x,x,x,x)},
$S:341}
C.bZd.prototype={
$0(){return A.am(this.b,!1).ad(this.a.e[this.c].b)},
$S:0}
C.b_d.prototype={
$0(){var x=y.H
return A.am(this.b,!1).ic(A.tu(new C.b_a(this.a),null,x),x)},
$S:0}
C.b_a.prototype={
$1(d){var x=null
return A.kt(A.cT5(B.ao,x,B.t,x),B.ao,A.bO(I.cUt(B.a_,A.tj(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1331}
C.b_c.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1332}
C.b_b.prototype={
$3(d,e,f){var x=null
return A.B(x,D.aEo,B.r,B.a7,x,x,x,120,x,x,x,x,this.a)},
$S:70}
C.b_e.prototype={
$0(){return A.za(A.dv(this.a.c,0,null),B.qR,null)},
$S:0}
C.bDS.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:19}
C.bDT.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aL(0)
x=w.y
w.y=null
if(x!=null){w=$.S().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yh(x).cC(new C.bDQ(),new C.bDR(),y.H)}},
$S:0}
C.bDQ.prototype={
$1(d){},
$S:117}
C.bDR.prototype={
$1(d){},
$S:13}
C.bDU.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e9(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.D(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.D(t.h(0,"name"))
x=u==null?null:B.f.C(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a3(v,new A.ad(Date.now(),0,!1).e5(5e6)))}u.akL()},
$S:225}
C.bDV.prototype={
$1(d){return this.a.akL()},
$S:65}
C.bDP.prototype={
$2(d,e){return e.b.eA(this.a)},
$S:1333}
C.bDY.prototype={
$1(d){},
$S:283}
C.bDZ.prototype={
$1(d){},
$S:13}
C.bDW.prototype={
$1(d){},
$S:283}
C.bDX.prototype={
$1(d){},
$S:13}
C.cRA.prototype={
$1(d){return B.e.gM(d.split(" "))},
$S:24}
C.cQX.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v]
t=B.f.C(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a3,r,r,B.IU,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jl(!1,B.a_,r,r,!0,r,r,r,!0,r,D.aE8,r,r,r,r,new C.cQW(d,u),!1,r,r,r,r,r,s,r,t,r,E.PO,r))}return A.bC(!0,new A.Q(D.atA,A.A(A.a([D.cfO,B.au,D.cau,B.T,new A.de(1,B.bc,A.d0(p,r,r,r,r,!1,B.a2,!0),r)],q),B.H,B.h,B.K,0,B.u),r),r,B.a_,!0)},
$S:45}
C.cQW.prototype={
$0(){return A.am(this.a,!1).ad(this.b)},
$S:0}
C.b_n.prototype={
$3(d,e,f){var x=null
return A.kV(A.aW(A.B(B.L,d,B.r,x,x,B.cg,x,44,x,x,x,x,44),f,x),x,e)},
$S:1334}
C.b_k.prototype={
$0(){return A.am(this.a,!1).iz()},
$S:0}
C.b_m.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_l.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.K)(x),++u){t=x[u].a
r.push(A.bnJ(A.h(t,s,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bQk)
return r},
$S:58}
C.b_g.prototype={
$1(d){return this.a.aiA(this.b)},
$S:3}
C.b_h.prototype={
$0(){return this.a.aiA(this.b)},
$S:0}
C.b_j.prototype={
$2(d,e){return B.ag},
$S:99}
C.b_i.prototype={
$2(d,e){var x=null,w=this.a,v=A.X(17),u=A.bz(B.A,1.5)
return A.aW(A.B(B.L,A.h(w.w[e],x,x,x,x,B.dM,x,x,x),B.r,x,x,new A.M(B.t,x,u,v,x,x,B.y),x,34,x,B.cX,x,x,x),new C.b_f(w,e),x)},
$S:156}
C.b_f.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c6U.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_R.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Iv.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adS.prototype,"gaUb","Ih",3)
w(C,"dK9","dx2",5)
v(C.w6.prototype,"giM","d6",4)
var t
v(t=C.aeB.prototype,"ga1K","aUg",0)
v(t,"gb7n","b7o",0)
u(C,"dJc",1,function(){return{$allTransitiveDependencies:B.cK,argument:B.cK,dependencies:B.cK,from:B.cK,isAutoDispose:B.cK,name:B.cK,retry:B.cK}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bj8",function(d,e,f,g,h,i,j,k){return C.bj8(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bj8(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bj8(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.J,[C.Is,C.Bc,C.aY4,C.aY5,C.alH])
w(A.bw,[C.cLG,C.cLH,C.cLI,C.b_a,C.b_c,C.b_b,C.bDS,C.bDQ,C.bDR,C.bDU,C.bDV,C.bDY,C.bDZ,C.bDW,C.bDX,C.cRA,C.cQX,C.b_n,C.b_m,C.b_l,C.b_g])
w(A.H,[C.NQ,C.Zp,C.R2,C.ao2,C.zI,C.ao1,C.R5])
w(A.bQ,[C.bJe,C.cxh,C.bZ9,C.bZa,C.bZb,C.bZc,C.bZd,C.b_d,C.b_e,C.bDT,C.cQW,C.b_k,C.b_h,C.b_f,C.c6U,C.b_R])
w(A.G,[C.Os,C.Kk])
w(A.Z,[C.adS,C.aeB])
w(A.cO,[C.bZe,C.bDP,C.b_j,C.b_i])
v(C.w6,A.fd)
v(C.bnK,A.f7)
v(C.ac9,A.kL)
v(C.Iv,C.ac9)
v(C.a5i,C.Iv)
x(C.ac9,C.alH)})()
A.bn(b.typeUniverse,JSON.parse('{"Zp":{"H":[],"e":[],"f":[]},"Os":{"G":[],"e":[],"f":[]},"NQ":{"H":[],"e":[],"f":[]},"adS":{"Z":["Os"]},"R2":{"H":[],"e":[],"f":[]},"w6":{"fd":["t<c>"]},"ao2":{"H":[],"e":[],"f":[]},"Kk":{"G":[],"e":[],"f":[]},"zI":{"H":[],"e":[],"f":[]},"ao1":{"H":[],"e":[],"f":[]},"R5":{"H":[],"e":[],"f":[]},"aeB":{"Z":["Kk"]},"Iv":{"kL":[],"h3":[],"H5":[],"lH":[]},"a5i":{"Iv":["1","2","2","3","2","xP<1,2>"],"kL":[],"h3":[],"H5":[],"lH":[],"Iv.0":"1"}}'))
A.PD(b.typeUniverse,JSON.parse('{"alH":5,"ac9":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cE"),E:x("ce"),V:x("r<cY>"),X:x("r<pE<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("df"),S:x("fd<@>"),F:x("+(c,ad)"),C:x("Bc"),N:x("c"),q:x("dm"),z:x("@"),r:x("v"),B:x("Is?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c99=new A.C("Powered by GIPHY",null,H.IS,null,null,null,null,null,null,null,null)
D.adJ=new A.d1(B.dY,null,null,D.c99,null)
D.ago=new A.M(B.A,null,null,null,B.i9,null,B.av)
D.L1=new C.aY4()
D.ahM=new C.aY5()
D.asz=new A.a0(0,0,0,24)
D.at_=new A.a0(12,10,14,10)
D.atw=new A.a0(16,16,16,12)
D.atz=new A.a0(16,16,16,24)
D.atA=new A.a0(16,16,16,8)
D.atD=new A.a0(16,2,16,8)
D.au4=new A.a0(20,18,20,24)
D.aCx=new A.aV(57404,"HeroiconsSolid",null,!1)
D.aCF=new A.aV(57436,"HeroiconsSolid",null,!1)
D.aE1=new A.b7(B.i4,18,B.br,null,"Verificado",null)
D.aE8=new A.b7(B.fX,null,B.U,null,null,null)
D.aCj=new A.aV(57347,"HeroiconsSolid",null,!1)
D.aE9=new A.b7(D.aCj,20,B.t,null,null,null)
D.aEg=new A.b7(B.lS,20,B.t,null,null,null)
D.aEo=new A.b7(B.jS,null,B.U,null,null,null)
D.aDo=new A.b7(B.vF,null,null,null,null,null)
D.aFC=new A.dJ(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aDo,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxO=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bA5=x([],A.w("r<d8b>"))
D.bA8=x([],A.w("r<+(c,~())>"))
D.kI=x([],y.L)
D.anf=new A.W(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.ao3=new A.W(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.ap7=new A.W(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.anF=new A.W(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bEz=x([D.anf,B.dc,D.ao3,D.ap7,D.anF],A.w("r<W>"))
D.bQk=new A.jM("report",!0,P.abm,null,A.w("jM<c>"))
D.bQp=new C.bnK(1,"under")
D.bYl=new A.c1(1/0,null,null,null)
D.bYQ=new S.yk(12,3,null)
D.cg_=new A.C("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.c_5=new A.bG(D.cg_,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.z,null)
D.ch7=new A.C("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.c_k=new A.bG(D.ch7,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.z,null)
D.cfp=new A.C("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.c_E=new A.bG(D.cfp,null,null,null,null,null,null,null,null,null,null,null,null,B.V,!1,null,null,null,B.z,null)
D.cau=new A.C("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.P,null,null,null,null,null,null,null,null)
D.ceJ=new A.C("Stickers",null,B.ae,null,null,null,null,null,null,null,null)
D.cfO=new A.C("Que mensagem queres denunciar?",null,B.hf,null,null,null,null,null,null,null,null)
D.cnA=new C.Os(null)
D.cql=new C.Zp(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dXC","CO",()=>D.L1.ayI(0,C.dK9(),A.w("w6"),A.w("t<c>"),y.N))})()};
(a=>{a["kiA7F4r+ckH+VlMhbiqv5O7HzsU="]=a.current})($__dart_deferred_initializers__);