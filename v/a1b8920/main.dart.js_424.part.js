((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,L,M,E,N,O,C={
dGY(){var x,w=$.Qm(),v=J.nM(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aV(B.j.hW(w.qV(256),16),2,"0")
return B.e.hN(v)},
aUw(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUw=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.P()
q=r.b
q===$&&A.b()
q=q.gbx().e.a
u=(q==null?null:q.r).a
t=B.f.q(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dGY()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r6(s,d,new A.v2(!1,f)),$async$aUw)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cp(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUw,w)},
ddc(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.bW(null,new C.cNr(),!1,d,!0,!1,null,l),$async$rG)
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
return A.d(new A.lK().Zi(85,2048,B.fs),$async$rG)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.km(),$async$rG)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fp(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUw(t,s,C.ddc(s)),$async$rG)
case 12:v=new j.Iw(f,r,s)
x=1
break
case 7:x=13
return A.d($.dhy().y9(D.bzk,null,null),$async$rG)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.km(),$async$rG)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a2(D.bZE)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.cb(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbtL(p))
if(B.f.fp(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUw(t,l,C.ddc(l)),$async$rG)
case 15:v=new j.Iw(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bW(null,new C.cNs(),!1,d,!0,!1,null,l),$async$rG)
case 16:n=f
v=n==null?null:new C.Iw("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bW(null,new C.cNt(),!1,d,!0,!0,null,l),$async$rG)
case 17:m=f
v=m==null?null:new C.Iw(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rG,w)},
Iw:function Iw(d,e,f){this.a=d
this.b=e
this.c=f},
cNr:function cNr(){},
cNs:function cNs(){},
cNt:function cNt(){},
NV:function NV(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJJ:function bJJ(d,e){this.a=d
this.b=e},
Zr:function Zr(d){this.a=d},
cz_:function cz_(d,e){this.a=d
this.b=e},
Oy:function Oy(d){this.a=d},
adV:function adV(d,e){var _=this
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
R8:function R8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_c:function b_c(d,e){this.a=d
this.b=e},
b_9:function b_9(d){this.a=d},
b_b:function b_b(d){this.a=d},
b_a:function b_a(d){this.a=d},
b_d:function b_d(d){this.a=d},
dz9(d){return new C.w3(d,A.E(y.N,y.F),new A.ac(A.j5(0,0),0,!1))},
d_Y(d){var x,w=J.a7(d)
if(w.gZ(d))return null
x=w.du(d,new C.cTw(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w3:function w3(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bEk:function bEk(){},
bEl:function bEl(d){this.a=d},
bEi:function bEi(){},
bEj:function bEj(){},
bEm:function bEm(d,e){this.a=d
this.b=e},
bEn:function bEn(d){this.a=d},
bEh:function bEh(d){this.a=d},
bEq:function bEq(){},
bEr:function bEr(){},
bEo:function bEo(){},
bEp:function bEp(){},
cTw:function cTw(){},
a_q(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_q=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a2(D.bZ4)
x=1
break}x=3
return A.d(A.bW(null,new C.cSS(A.dC(h,0,A.ew(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_q)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wv(d,e,f,u.c,u.d,g,t),$async$a_q)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_q,w)},
B8:function B8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSS:function cSS(d){this.a=d},
cSR:function cSR(d,e){this.a=d
this.b=e},
cVi(d,e,f,g,h,i,j,k,l){return new C.ao0(g,d,k,h,i,e,j,l,f,null)},
ao0:function ao0(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_p:function b_p(){},
b_m:function b_m(d){this.a=d},
b_o:function b_o(d){this.a=d},
b_n:function b_n(d){this.a=d},
cGQ(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ag)
v=new A.b6(16,16)
u=d[x]
w.push(new A.bQ(1,B.au,A.B(t,A.A(A.a([A.h(u.a,1,B.a1,t,t,B.c1,t,t,t),B.aU,A.h(u.b,t,t,t,t,B.bf,B.a4,t,t)],s),B.v,B.h,B.l),B.r,t,t,new A.K(B.a5,t,t,new A.cz(v,v,v,v),t,t,B.x),t,t,t,D.aud,t,t,t),t))
B.e.n(r,w)}return A.O(r,B.v,B.h,B.l,0,t)},
akG(d,e,f){var x,w=null
if(f){x=A.fP(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.ac,B.c8,w,w,B.d0,w)
x=A.hh(A.h(d,w,w,w,w,w,w,w,w),e,x)}else{x=A.ck(B.z,w,w,B.t,w,w,B.ac,w,w,B.d0)
x=A.bE(A.h(d,w,w,w,w,w,w,w,w),e,x)}return A.aH(x,52,w)},
cZO(d,e,f,g){var x=null,w=y.p,v=A.a([new A.df(1,B.b9,A.h(d,x,x,x,x,B.c1,B.a4,x,x),x)],w)
if(g)B.e.n(v,A.a([B.e5,D.Pm],w))
v=A.a([new A.ci(d,76,e,!1,!0,x),B.aF,A.O(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.h(f,x,x,x,x,B.L,B.a4,x,x)],w))
return new A.bB(B.ax,x,B.aD,B.y,A.a([new A.T(B.jE,A.bL(A.A(v,B.v,B.h,B.l),x,x),x),D.bPH],w),x)},
cGA(d,e){var x,w,v=null,u=A.aO(d,B.dR,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a0)
w.push(e[x])
B.e.n(s,w)}return A.bD(!0,new A.e6(new A.aR(0,1/0,0,u.a.b*0.9),A.dT(A.A(s,B.E,B.h,B.l),B.y,v,B.ao,v,B.av),v),v,B.Z,!1)},
acf:function acf(d,e){this.c=d
this.a=e},
bPU:function bPU(d){this.a=d},
d2V(d){var x,w,v,u
for(x=new A.cg(d),w=y.E,x=new A.aj(x,x.gA(0),w.i("aj<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDP[B.j.aF(v,5)]},
cVh(d,e,f,g,h,i,j){return new C.ao_(d,i,f,e,g,j,h,null)},
zE:function zE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ao_:function ao_(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_f:function b_f(d,e){this.a=d
this.b=e},
b_g:function b_g(d,e){this.a=d
this.b=e},
b_i:function b_i(){},
b_h:function b_h(d){this.a=d},
b_e:function b_e(d,e){this.a=d
this.b=e},
R9:function R9(d,e){this.c=d
this.a=e},
Kp:function Kp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeD:function aeD(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c7Y:function c7Y(d,e){this.a=d
this.b=e},
bo1:function bo1(d,e){this.a=d
this.b=e},
aY2:function aY2(){},
aY3:function aY3(){},
alD:function alD(){},
IA:function IA(){},
b_U:function b_U(d,e){this.a=d
this.b=e},
ace:function ace(){},
d6y(d,e,f,g,h,i,j,k){return new C.a5n(A.dKI(C.dLp(),i,j),d,g,h,e,A.al5(e),f,i.i("@<0>").b8(j).b8(k).i("a5n<1,2,3>"))},
bj7(d,e,f,g,h,i,j,k,l,m){return new A.xS(d,h,f,j,k,g,e,i,l.i("@<0>").b8(m).i("xS<1,2>"))},
a5n:function a5n(d,e,f,g,h,i,j,k){var _=this
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
H=c[383]
I=c[177]
K=c[433]
L=c[334]
M=c[155]
E=c[239]
N=c[186]
O=c[432]
C=a.updateHolder(c[121],C)
D=c[234]
P=c[381]
Q=c[396]
R=c[269]
S=c[181]
T=c[431]
F=c[232]
C.Iw.prototype={
gar(d){return this.c}}
C.NV.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eR(!1,w,!0,new A.T(B.hy,A.A(A.a([A.B(x,A.b5(this.c,$.au,x,x,26),B.r,x,x,new A.K(B.a5,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aF,A.h(this.d,x,x,x,x,B.hP,x,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,x,new C.bJJ(this,d),x,x,x,x,x,x,x)}}
C.Zr.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwZ[x]
v=new A.b6(14,14)
s.push(A.eR(!1,new A.cz(v,v,v,v),!0,new A.T(B.ny,A.asi(w,B.ke,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,new C.cz_(d,w),u,u,u,u,u,u,u))}return new A.T(D.asN,A.A(A.a([D.cdy,B.R,A.ary(1,s,4,8,8,u,B.dY,!0)],t),B.F,B.h,B.J),u)}}
C.Oy.prototype={
R(){return new C.adV(new A.aE(B.aj,$.aa()),D.ic)}}
C.adV.prototype={
ac(){this.ap()
this.Ie("")},
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a6()},
Ie(d){return this.bhx(d)},
bhx(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Ie=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bZX(s))
v=3
m=B.f.B(d)
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
p=A.ajg("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUW(p,null),$async$Ie)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bu.jP(0,A.jg(A.je(q.e)).bJ(0,q.w),null)),"data"))
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
return A.m($async$Ie,w)},
u(d){var x=this,w=null,v=A.aO(d,w,y.w).w,u=A.cs(w,B.a6,!1,w,!0,B.y,w,A.ct(),x.d,w,w,w,w,w,2,D.aEV,B.W,!0,w,!0,w,!1,w,B.aC,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaU4(),w,!1,w,w,!1,w,!0,w,B.ao,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.at,w,B.b_,w,B.t8,w,w),t=x.r
if(t!=null)t=A.bL(A.h(t,w,w,w,w,B.mr,B.a4,w,w),w,w)
else t=x.f?D.bXR:N.a3h(w,B.W,T.a8C,new C.c_1(x),x.e.length,w,w,!1)
return A.aH(new A.T(D.asL,A.A(A.a([u,B.ab,A.a6(t,1),B.aF,D.acY],y.p),B.F,B.h,B.l),w),v.a.b*0.62,w)}}
C.R8.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aO(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b1(s.c,"asset:"))return A.asi(B.f.bF(s.c,6),B.ke,120,120)
if(p==="image"||p==="gif")return A.cP(r,A.fT(A.W(16),new A.e6(new A.aR(0,q,0,320),A.k5(s.c,new C.b_a(q),B.bG,r,new C.b_b(q),r,r),r),B.bb),B.W,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_c(s,d),r,r,r,r,r,r,!1,B.aN)
p=A.W(16)
x=s.f
w=x?$.au:B.a5
v=A.W(16)
u=A.b5(O.OM,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aJ(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.G,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eR(!1,p,!0,A.B(r,A.O(A.a([u,B.ad,new A.df(1,B.b9,t,r),B.bh,A.b5(L.vr,x?B.t:B.V,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.K(w,r,r,v,r,r,B.x),r,r,r,D.asf,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,new C.b_d(s),r,r,r,r,r,r,r)},
gar(d){return this.e}}
C.w3.prototype={
d5(){var x=this,w=y.T,v=A.eQ(x).G(A.cG($.b8(),new C.bEk(),y.D,w),w)
A.eQ(x).YP(new C.bEl(x))
if(v==null)return B.a6
w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.Mf(0,"typing:"+x.x,B.yr).byE(new C.bEm(x,v),"typing")
w.Q3(0)
x.y=w
x.Q=A.u5(B.fR,new C.bEn(x))
return B.a6},
akP(){var x,w=this,v=w.z
v.eg(v,new C.bEh(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c4(v,v.r,v.e,A.u(v).i("c4<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aQ(w.ga4(0))||!B.e.e9(x,J.dmH(w.ga4(0))))w.sa4(0,x)},
adb(d){var x,w=this,v=w.y,u=A.eQ(w).a1(0,$.b8(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.cA(w.as).a<2e6)return
w.as=x
v.aeP(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GW).cE(new C.bEq(),new C.bEr(),y.H)},
d3(d){var x=this.y,w=A.eQ(this).a1(0,$.b8(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.j5(0,0),0,!1)
x.aeP(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GW).cE(new C.bEo(),new C.bEp(),y.H)}}
C.B8.prototype={}
C.ao0.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.ci(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.df(1,B.b9,A.h(s.c,1,B.a1,r,r,B.a9,r,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.e5,D.Pm],x))
w=A.a([A.O(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.T(B.uZ,A.B(r,A.h(v,1,r,r,r,B.hg,r,r,r),B.r,r,r,new A.K(B.cy,r,r,u,r,r,B.x),r,r,r,B.D2,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aJ(r,r,B.V,r,r,r,r,r,r,r,r,13,r,r,B.b0,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=A.O(A.a([q,B.ae,A.a6(A.A(w,B.F,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d5(0,B.bk,B.z.ce(0.06),B.Gk,14)],y.V)
w=A.aO(d,B.b5,y.w).w
v=new C.b_p().$3(K.Pa,"Voltar",new C.b_m(d))
u=s.r
v=A.a([v,B.ae,A.a6(u==null?t:A.aX(t,u,r),1)],x)
B.e.n(v,A.a([B.ae,A.Eo(A.B(B.K,Q.Ee,B.r,r,r,B.cc,r,44,r,r,r,r,44),r,new C.b_n(s),new C.b_o(s),r,D.bPy,"Mais op\xe7\xf5es",y.N)],x))
return A.B(r,A.A(A.a([A.O(v,B.v,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.K(B.t,r,r,B.tR,q,r,B.x),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gar(d){return this.c}}
C.acf.prototype={
u(d){var x=null
return A.ba(x,!0,x,A.cP(x,A.B(x,B.kB,B.r,x,x,new A.K(B.z,x,this.c?A.bA(B.t,2):x,x,x,x,B.as),x,44,x,x,x,x,44),B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPU(d),x,x,x,x,x,x,!1,B.aN),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x)}}
C.zE.prototype={
u(d){var x=null,w=A.aO(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.T(E.N1,A.h(v,x,x,x,x,A.aJ(x,x,C.d2V(v),x,x,x,x,x,x,x,x,12,x,x,B.G,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aJ(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bo,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.e6(new A.aR(0,w.a.a*0.78,0,1/0),A.B(x,A.A(o,B.F,B.h,B.J),B.r,x,x,new A.K(r,x,x,new A.cz(F.yk,F.yk,new A.b6(q,q),new A.b6(p,p)),x,x,B.x),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.ao_.prototype={
aiA(d){if(!A.uc(this.c.a.a)){d.O(y.q).f.a2(D.bZi)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aX(A.B(B.K,B.Pd,B.r,t,t,B.cc,t,44,t,t,t,t,44),u.e,t),B.ad],s))
x=A.W(24)
r.push(A.a6(A.B(B.be,A.cs(t,B.a6,!1,t,!0,B.y,t,A.ct(),u.c,t,t,t,t,t,2,A.iV(t,B.bs,t,B.Z,t,t,t,t,!0,B.bs,t,t,t,t,t,t,!1,t,t,t,t,B.bs,t,t,t,t,t,t,t,t,B.mp,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.W,!0,t,!0,t,!1,t,B.aC,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_f(u,d),t,!1,t,t,!1,t,!0,t,B.ao,t,t,t,t,t,t,t,t,t,t,t,B.fj,!0,B.at,t,B.b_,t,B.a9C,t,t),B.r,t,t,new A.K(B.a5,t,t,x,t,t,B.x),t,48,t,B.bQ,t,t,t),1))
r.push(B.ad)
r.push(A.ba(t,!0,t,A.aX(A.B(B.K,D.aDB,B.r,t,t,B.cc,t,44,t,t,t,t,44),new C.b_g(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t))
w=A.O(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d5(0,B.bk,B.z.ce(0.12),B.kH,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aH(A.a4r(B.y,new C.b_h(u),v,t,t,B.bF,new C.b_i()),34,t),B.ab],s))
x.push(w)
return A.B(t,A.bD(!0,new A.T(B.hv,A.A(x,B.E,B.h,B.J),t),t,D.arP,!1),B.r,t,t,new A.K(B.t,t,t,B.px,r,t,B.x),t,t,t,t,t,t,t)}}
C.R9.prototype={
u(d){var x=null,w=this.c
return A.aWU(B.f7,w==null?D.bXl:new A.T(D.asS,A.bL(A.h(w,x,x,x,x,B.k8,x,x,x),x,x),x),B.ct,B.aG)}}
C.Kp.prototype={
R(){return new C.aeD()}}
C.aeD.prototype={
ac(){var x,w=this
w.ap()
x=w.a
w.e=x.d
x.c.an(0,w.ga1M())},
bh(d){var x,w,v=this
v.bB(d)
x=d.c
if(x!==v.a.c){w=v.ga1M()
x.a_(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a_(0,this.ga1M())
this.a6()},
aU7(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbA(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c7Y(w,x))},
b76(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aO(x,null,y.w).w
w=this.a
if(x.ax)w.c.hg(0)
else w.c.i1(0,B.ev,G.CD)},
u(d){var x,w,v,u=this,t=null,s=B.j.ah(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iX(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.B(B.K,D.aDu,B.r,t,t,D.afC,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bA(B.z,2)
r.push(A.ca(t,A.B(B.K,A.h(""+s,t,t,t,t,B.hP,t,t,t),B.r,t,B.le,new A.K(B.t,t,v,x,t,t,B.x),t,20,t,B.D_,t,t,t),t,t,t,-6,-6,t))}q.push(A.ca(16,A.ba(t,!0,t,A.aX(new A.bB(B.ax,t,B.aD,B.r,r,t),u.gb75(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t),t,t,t,20,t,t))}return new A.bB(B.ax,t,B.aD,B.y,q,t)}}
C.bo1.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aY2.prototype={
$1(d){return A.mZ(d,null,!0,null,null,y.S,y.z)},
gXn(d){return D.ah0},
ayF(d,e,f,g,h){return this.gXn(this).$3$1(e,f,g,h)}}
C.aY3.prototype={
$3$1(d,e,f,g){return C.d6y(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alD.prototype={}
C.IA.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_U(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.ace.prototype={}
C.a5n.prototype={}
var z=a.updateTypes(["~()","Zr(N)","Oy(N)","F<~>(c)","t<c>()","w3(c)","xS<0^,1^>(0^(){$allTransitiveDependencies!x<h7>?,argument!J?,dependencies!x<h7>?,from!kO?,isAutoDispose!z,name!c?,retry!bp?(v,J)?})<fd<1^>,J?>"])
C.cNr.prototype={
$1(d){var x=null,w=y.p
return new A.T(D.ati,A.A(A.a([A.O(A.a([new C.NV(B.jT,"Foto","photo",x),new C.NV(D.aC2,"Ficheiro","file",x),new C.NV(R.jQ,"Sticker","sticker",x),new C.NV(D.aBV,"GIF","gif",x)],w),B.v,B.G1,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:71}
C.cNs.prototype={
$1(d){return D.coN},
$S:z+1}
C.cNt.prototype={
$1(d){return D.cm1},
$S:z+2}
C.bJJ.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e)},
$S:0}
C.cz_.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.bZX.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZY.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bh(this.b,y.P),v=A.u(w),w=new A.aj(w,w.gA(w),v.i("aj<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.br(s,new A.Z(A.a_(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a_(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZZ.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.c__.prototype={
$0(){return this.a.f=!1},
$S:0}
C.c_1.prototype={
$2(d,e){var x=null,w=this.a
return A.eR(!1,x,!0,A.fT(A.W(10),A.k5(w.e[e].a,x,B.bG,x,x,x,x),B.bb),x,!0,x,x,x,x,x,x,x,x,x,new C.c_0(w,d,e),x,x,x,x,x,x,x)},
$S:1323}
C.c_0.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e[this.c].b)},
$S:0}
C.b_c.prototype={
$0(){var x=y.H
return A.am(this.b,!1).fO(A.ts(new C.b_9(this.a),null,x),x)},
$S:0}
C.b_9.prototype={
$1(d){var x=null
return A.kt(A.cV1(B.an,x,B.t,x),B.an,A.bL(I.cWo(B.Z,A.pn(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1324}
C.b_b.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1325}
C.b_a.prototype={
$3(d,e,f){var x=null
return A.B(x,D.aDJ,B.r,B.a5,x,x,x,120,x,x,x,x,this.a)},
$S:69}
C.b_d.prototype={
$0(){return A.zb(A.dy(this.a.c,0,null),B.qF,null)},
$S:0}
C.bEk.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bEl.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aN(0)
x=w.y
w.y=null
if(x!=null){w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yg(x).cE(new C.bEi(),new C.bEj(),y.H)}},
$S:0}
C.bEi.prototype={
$1(d){},
$S:113}
C.bEj.prototype={
$1(d){},
$S:11}
C.bEm.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dZ(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.M(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.Z(v,new A.ac(Date.now(),0,!1).el(5e6)))}u.akP()},
$S:227}
C.bEn.prototype={
$1(d){return this.a.akP()},
$S:67}
C.bEh.prototype={
$2(d,e){return e.b.f0(this.a)},
$S:1326}
C.bEq.prototype={
$1(d){},
$S:230}
C.bEr.prototype={
$1(d){},
$S:11}
C.bEo.prototype={
$1(d){},
$S:230}
C.bEp.prototype={
$1(d){},
$S:11}
C.cTw.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:24}
C.cSS.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.IC,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jp(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDs,r,r,r,r,new C.cSR(d,u),!1,r,r,r,r,r,s,r,t,r,E.Pl,r))}return A.bD(!0,new A.T(D.asO,A.A(A.a([D.ceG,B.ar,D.c9j,B.Q,new A.df(1,B.b9,A.d6(p,r,r,r,r,!1,!0),r)],q),B.F,B.h,B.J),r),r,B.Z,!0)},
$S:43}
C.cSR.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.b_p.prototype={
$3(d,e,f){var x=null
return A.kY(A.aX(A.B(B.K,d,B.r,x,x,B.cc,x,44,x,x,x,x,44),f,x),x,e)},
$S:1327}
C.b_m.prototype={
$0(){return A.am(this.a,!1).iw()},
$S:0}
C.b_o.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_n.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bo0(A.h(t,s,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bPt)
return r},
$S:54}
C.bPU.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
C.b_f.prototype={
$1(d){return this.a.aiA(this.b)},
$S:3}
C.b_g.prototype={
$0(){return this.a.aiA(this.b)},
$S:0}
C.b_i.prototype={
$2(d,e){return B.ad},
$S:111}
C.b_h.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bA(B.z,1.5)
return A.aX(A.B(B.K,A.h(w.w[e],x,x,x,x,B.e_,x,x,x),B.r,x,x,new A.K(B.t,x,u,v,x,x,B.x),x,34,x,B.cP,x,x,x),new C.b_e(w,e),x)},
$S:160}
C.b_e.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c7Y.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_U.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("IA.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adV.prototype,"gaU4","Ie",3)
w(C,"dMn","dz9",5)
v(C.w3.prototype,"giI","d5",4)
var t
v(t=C.aeD.prototype,"ga1M","aU7",0)
v(t,"gb75","b76",0)
u(C,"dLp",1,function(){return{$allTransitiveDependencies:B.cO,argument:B.cO,dependencies:B.cO,from:B.cO,isAutoDispose:B.cO,name:B.cO,retry:B.cO}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bj7",function(d,e,f,g,h,i,j,k){return C.bj7(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bj7(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bj7(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.J,[C.Iw,C.B8,C.aY2,C.aY3,C.alD])
w(A.bw,[C.cNr,C.cNs,C.cNt,C.b_9,C.b_b,C.b_a,C.bEk,C.bEi,C.bEj,C.bEm,C.bEn,C.bEq,C.bEr,C.bEo,C.bEp,C.cTw,C.cSS,C.b_p,C.b_o,C.b_n,C.b_f])
w(A.M,[C.NV,C.Zr,C.R8,C.ao0,C.acf,C.zE,C.ao_,C.R9])
w(A.bO,[C.bJJ,C.cz_,C.bZX,C.bZY,C.bZZ,C.c__,C.c_0,C.b_c,C.b_d,C.bEl,C.cSR,C.b_m,C.bPU,C.b_g,C.b_e,C.c7Y,C.b_U])
w(A.G,[C.Oy,C.Kp])
w(A.Y,[C.adV,C.aeD])
w(A.cK,[C.c_1,C.bEh,C.b_i,C.b_h])
v(C.w3,A.fd)
v(C.bo1,A.eX)
v(C.ace,A.kO)
v(C.IA,C.ace)
v(C.a5n,C.IA)
x(C.ace,C.alD)})()
A.bt(b.typeUniverse,JSON.parse('{"Zr":{"M":[],"e":[],"f":[]},"Oy":{"G":[],"e":[],"f":[]},"NV":{"M":[],"e":[],"f":[]},"adV":{"Y":["Oy"]},"R8":{"M":[],"e":[],"f":[]},"w3":{"fd":["t<c>"]},"ao0":{"M":[],"e":[],"f":[]},"acf":{"M":[],"e":[],"f":[]},"Kp":{"G":[],"e":[],"f":[]},"zE":{"M":[],"e":[],"f":[]},"ao_":{"M":[],"e":[],"f":[]},"R9":{"M":[],"e":[],"f":[]},"aeD":{"Y":["Kp"]},"IA":{"kO":[],"h7":[],"H6":[],"lN":[]},"a5n":{"IA":["1","2","2","3","2","xS<1,2>"],"kO":[],"h7":[],"H6":[],"lN":[],"IA.0":"1"}}'))
A.Hz(b.typeUniverse,JSON.parse('{"alD":5,"ace":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cJ"),E:x("cg"),V:x("r<d5>"),X:x("r<pD<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dh"),S:x("fd<@>"),F:x("+(c,ac)"),C:x("B8"),N:x("c"),q:x("dr"),z:x("@"),r:x("v"),B:x("Iw?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c7Z=new A.D("Powered by GIPHY",null,H.IA,null,null,null,null,null,null,null,null)
D.acY=new A.d0(B.e0,null,null,D.c7Z,null)
D.afC=new A.K(B.z,null,null,null,B.ib,null,B.as)
D.KD=new C.aY2()
D.ah0=new C.aY3()
D.arP=new A.a3(0,0,0,24)
D.asf=new A.a3(12,10,14,10)
D.asL=new A.a3(16,16,16,12)
D.asN=new A.a3(16,16,16,24)
D.asO=new A.a3(16,16,16,8)
D.asS=new A.a3(16,2,16,8)
D.ati=new A.a3(20,18,20,24)
D.aud=new A.a3(8,12,8,12)
D.aBV=new A.aZ(57404,"HeroiconsSolid",null,!1)
D.aC2=new A.aZ(57436,"HeroiconsSolid",null,!1)
D.Pm=new A.b7(B.i6,18,B.bq,null,"Verificado",null)
D.aDs=new A.b7(B.fe,null,B.V,null,null,null)
D.aBK=new A.aZ(57347,"HeroiconsSolid",null,!1)
D.aDu=new A.b7(D.aBK,20,B.t,null,null,null)
D.aDB=new A.b7(B.lI,20,B.t,null,null,null)
D.aDJ=new A.b7(B.jT,null,B.V,null,null,null)
D.aCK=new A.b7(B.vt,null,null,null,null,null)
D.aEV=new A.dB(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwZ=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bzk=x([],A.w("r<dab>"))
D.bzn=x([],A.w("r<+(c,~())>"))
D.ic=x([],y.L)
D.amv=new A.X(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.anj=new A.X(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aom=new A.X(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amW=new A.X(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDP=x([D.amv,B.cW,D.anj,D.aom,D.amW],A.w("r<X>"))
D.bPt=new A.jO("report",!0,P.aaX,null,A.w("jO<c>"))
D.bPy=new C.bo1(1,"under")
D.cl4=new C.acf(!1,null)
D.bPH=new A.eF(null,0,0,null,null,null,D.cl4,null)
D.bXl=new A.c_(1/0,null,null,null)
D.bXR=new S.yl(12,3,null)
D.ceR=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bZ4=new A.bF(D.ceR,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cfW=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bZi=new A.bF(D.cfW,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.ced=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bZE=new A.bF(D.ced,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c9j=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null,null)
D.cdy=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null,null)
D.ceG=new A.D("Que mensagem queres denunciar?",null,B.hO,null,null,null,null,null,null,null,null)
D.cm1=new C.Oy(null)
D.coN=new C.Zr(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e__","CO",()=>D.KD.ayF(0,C.dMn(),A.w("w3"),A.w("t<c>"),y.N))})()};
(a=>{a["/ocnzWXLUBUlDgODoY9QU3EffNM="]=a.current})($__dart_deferred_initializers__);