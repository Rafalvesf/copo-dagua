((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,I,K,L,M,F,N,O,C={
dHD(){var x,w=$.I2(),v=J.nL(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aT(B.j.hD(w.pA(256),16),2,"0")
return B.e.hz(v)},
aUz(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUz=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Q()
q=r.b
q===$&&A.b()
q=q.gbu().e.a
u=(q==null?null:q.r).a
t=B.f.t(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dHD()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.S("chat-attachments")
x=3
return A.d(q.yk(s,d,new A.qE("3600",!1,f)),$async$aUz)
case 3:r=r.b.ay
r===$&&A.b()
v=r.S("chat-attachments").Ci(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUz,w)},
ddI(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
rK(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rK=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bP(null,new C.cNF(),!1,d,!0,!1,null,l),$async$rK)
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
return A.d(new A.lM().aB7(85,2048,B.fw),$async$rK)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kh(),$async$rK)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fc(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUz(t,s,C.ddI(s)),$async$rK)
case 12:v=new j.IF(f,r,s)
x=1
break
case 7:x=13
return A.d($.di6().xZ(D.bz9,null,null),$async$rK)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kh(),$async$rK)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a0(D.bZ2)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.ca(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbsx(p))
if(B.f.fc(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUz(t,l,C.ddI(l)),$async$rK)
case 15:v=new j.IF(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bP(null,new C.cNG(),!1,d,!0,!1,null,l),$async$rK)
case 16:n=f
v=n==null?null:new C.IF("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bP(null,new C.cNH(),!1,d,!0,!0,null,l),$async$rK)
case 17:m=f
v=m==null?null:new C.IF(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rK,w)},
IF:function IF(d,e,f){this.a=d
this.b=e
this.c=f},
cNF:function cNF(){},
cNG:function cNG(){},
cNH:function cNH(){},
O7:function O7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJC:function bJC(d,e){this.a=d
this.b=e},
Zy:function Zy(d){this.a=d},
cz4:function cz4(d,e){this.a=d
this.b=e},
OL:function OL(d){this.a=d},
adU:function adU(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bZv:function bZv(d){this.a=d},
bZw:function bZw(d,e){this.a=d
this.b=e},
bZx:function bZx(d){this.a=d},
bZy:function bZy(d){this.a=d},
bZA:function bZA(d){this.a=d},
bZz:function bZz(d,e,f){this.a=d
this.b=e
this.c=f},
Rm:function Rm(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_g:function b_g(d,e){this.a=d
this.b=e},
b_d:function b_d(d){this.a=d},
b_f:function b_f(d){this.a=d},
b_e:function b_e(d){this.a=d},
b_h:function b_h(d){this.a=d},
dzL(d){return new C.w9(d,A.E(y.N,y.F),new A.ad(A.jm(0,0),0,!1))},
d0l(d){var x,w=J.a6(d)
if(w.gY(d))return null
x=w.dn(d,new C.cTX(),y.N).bx(0)
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
bEe:function bEe(){},
bEf:function bEf(d){this.a=d},
bEc:function bEc(){},
bEd:function bEd(){},
bEg:function bEg(d,e){this.a=d
this.b=e},
bEh:function bEh(d){this.a=d},
bEb:function bEb(d){this.a=d},
bEk:function bEk(){},
bEl:function bEl(){},
bEi:function bEi(){},
bEj:function bEj(){},
cTX:function cTX(){},
a_y(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_y=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a0(D.bZp)
x=1
break}x=3
return A.d(A.bP(null,new C.cTi(A.dz(h,0,A.et(12,"count",y.r),A.a8(h).c).bx(0)),!1,d,!0,!0,null,y.C),$async$a_y)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wA(d,e,f,u.c,u.d,g,t),$async$a_y)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_y,w)},
Ba:function Ba(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTi:function cTi(d){this.a=d},
cTh:function cTh(d,e){this.a=d
this.b=e},
cVO(d,e,f,g,h,i,j,k,l){return new C.ao3(g,d,k,h,i,e,j,l,f,null)},
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
b_t:function b_t(){},
b_q:function b_q(d){this.a=d},
b_s:function b_s(d){this.a=d},
b_r:function b_r(d){this.a=d},
cGV(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ae)
v=new A.b5(16,16)
u=d[x]
w.push(new A.bK(1,B.at,A.w(t,A.x(A.a([A.h(u.a,1,B.a1,t,t,B.c6,t,t),B.aU,A.h(u.b,t,t,t,t,B.bg,B.a4,t)],s),B.u,B.h,B.l),B.r,t,t,new A.J(B.a3,t,t,new A.cz(v,v,v,v),t,t,B.x),t,t,t,D.au2,t,t,t),t))
B.e.p(r,w)}return A.O(r,B.u,B.h,B.l,0,t)},
akH(d,e,f){var x,w=null
if(f){x=A.fN(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c7,w,w,B.cY,w)
x=new A.ak(A.hm(A.h(d,w,w,w,w,w,w,w),e,x),w)}else{x=A.ce(B.z,w,w,B.t,w,w,B.ab,w,w,B.cY)
x=new A.ak(A.bD(A.h(d,w,w,w,w,w,w,w),e,x),w)}return A.aK(x,52,w)},
d_d(d,e,f,g){var x=null,w=y.p,v=A.a([new A.dg(1,B.bb,A.h(d,x,x,x,x,B.c6,B.a4,x),x)],w)
if(g)B.e.p(v,A.a([B.dY,D.Pd],w))
v=A.a([new A.ch(d,76,e,!1,!0,x),B.aC,A.O(v,B.u,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.p(v,A.a([B.aU,A.h(f,x,x,x,x,B.L,B.a4,x)],w))
return new A.bA(B.aw,x,B.aD,B.y,A.a([new A.S(B.jE,A.bN(A.x(v,B.u,B.h,B.l),x,x),x),D.bPn],w),x)},
cGC(d,e){var x,w,v=null,u=A.aT(d,B.dR,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a_)
w.push(e[x])
B.e.p(s,w)}return A.bB(!0,new A.ec(new A.aR(0,1/0,0,u.a.b*0.9),A.dR(A.x(s,B.E,B.h,B.l),B.y,v,B.al,v,B.av),v),v,B.Z,!1)},
aci:function aci(d){this.a=d},
bPK:function bPK(d){this.a=d},
d3e(d){var x,w,v,u
for(x=new A.cf(d),w=y.E,x=new A.aj(x,x.gA(0),w.i("aj<V.E>")),w=w.i("V.E"),v=0;x.q();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDA[B.j.aK(v,5)]},
cVN(d,e,f,g,h,i,j){return new C.ao2(d,i,f,e,g,j,h,null)},
zD:function zD(d,e,f,g){var _=this
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
b_j:function b_j(d,e){this.a=d
this.b=e},
b_k:function b_k(d,e){this.a=d
this.b=e},
b_m:function b_m(){},
b_l:function b_l(d){this.a=d},
b_i:function b_i(d,e){this.a=d
this.b=e},
Rn:function Rn(d,e){this.c=d
this.a=e},
Kw:function Kw(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeB:function aeB(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c7w:function c7w(d,e){this.a=d
this.b=e},
bon:function bon(d,e){this.a=d
this.b=e},
aY6:function aY6(){},
aY7:function aY7(){},
alE:function alE(){},
IJ:function IJ(){},
b_Z:function b_Z(d,e){this.a=d
this.b=e},
ach:function ach(){},
d7_(d,e,f,g,h,i,j,k){return new C.a5x(A.dLr(C.dM8(),i,j),d,g,h,e,A.al5(e),f,i.i("@<0>").b7(j).b7(k).i("a5x<1,2,3>"))},
bje(d,e,f,g,h,i,j,k,l,m){return new A.xT(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xT<1,2>"))},
a5x:function a5x(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,P,Q,R,S,T
J=c[1]
A=c[0]
B=c[2]
E=c[230]
G=c[402]
H=c[380]
I=c[178]
K=c[434]
L=c[331]
M=c[157]
F=c[237]
N=c[167]
O=c[433]
C=a.updateHolder(c[122],C)
D=c[232]
P=c[378]
Q=c[393]
R=c[266]
S=c[180]
T=c[432]
C.IF.prototype={
gao(d){return this.c}}
C.O7.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eY(!1,w,!0,new A.S(B.hy,A.x(A.a([A.w(x,A.b9(this.c,$.au,x,x,26),B.r,x,x,new A.J(B.a3,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aC,A.h(this.d,x,x,x,x,B.hR,x,x)],y.p),B.u,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,new C.bJC(this,d),x,x,x,x,x,x,x)}}
C.Zy.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwP[x]
v=new A.b5(14,14)
s.push(A.eY(!1,new A.cz(v,v,v,v),!0,new A.S(B.q1,A.asm(w,B.ju,u,u),u),u,!0,u,u,u,u,u,u,u,u,new C.cz4(d,w),u,u,u,u,u,u,u))}return new A.S(D.asD,A.x(A.a([D.c7j,B.R,A.a3q(1,s,4,8,8,u,B.dP,!0)],t),B.G,B.h,B.J),u)}}
C.OL.prototype={
P(){return new C.adU(new A.aF(B.ak,$.aa()),D.ij)}}
C.adU.prototype={
ac(){this.ap()
this.HU("")},
m(){var x=this.d
x.Z$=$.aa()
x.V$=0
this.a6()},
HU(d){return this.bgg(d)},
bgg(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HU=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.n(new C.bZv(s))
v=3
m=B.f.B(d)
l=m.length===0
r=l?"trending":"search"
k=A.p(r)
q=A.E(y.N,y.z)
J.b2(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b2(q,"limit","24")
J.b2(q,"rating","pg")
l=!l
if(l)J.b2(q,"q",m)
if(l)J.b2(q,"lang","pt")
p=A.ajh("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aV_(p,null),$async$HU)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bn.j6(0,A.jk(A.ji(q.e)).bI(0,q.w),null)),"data"))
s.n(new C.bZw(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.n(new C.bZx(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.n(new C.bZy(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HU,w)},
u(d){var x=this,w=null,v=A.aT(d,w,y.w).w,u=A.cs(w,B.a6,!1,w,!0,B.y,w,A.cu(),x.d,w,w,w,w,w,2,D.aEL,B.U,!0,w,!0,w,!1,w,B.aB,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTi(),w,!1,w,w,!1,w,!0,w,B.al,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b0,w,B.rR,w,w),t=x.r
if(t!=null)t=A.bN(A.h(t,w,w,w,w,B.mm,B.a4,w),w,w)
else t=x.f?D.bXz:N.b9e(T.a8t,new C.bZA(x),x.e.length,w,w,!1)
return A.aK(new A.S(D.asB,A.x(A.a([u,B.ad,A.a5(t,1),B.aC,D.acQ],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.Rm.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aT(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.aY(s.c,"asset:"))return A.asm(B.f.bF(s.c,6),B.ju,120,120)
if(p==="image"||p==="gif")return A.cp(r,A.hY(A.W(16),new A.ec(new A.aR(0,q,0,320),A.jQ(s.c,new C.b_e(q),B.bD,r,new C.b_f(q),r,r),r),B.be),B.U,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_g(s,d),r,r,r,r,r,r,!1,B.aE)
p=A.W(16)
x=s.f
w=x?$.au:B.a3
v=A.W(16)
u=A.b9(O.OD,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aH(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r)
return A.eY(!1,p,!0,A.w(r,A.O(A.a([u,B.ac,new A.dg(1,B.bb,t,r),B.bf,A.b9(L.vc,x?B.t:B.W,r,r,18)],y.p),B.u,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.J(w,r,r,v,r,r,B.x),r,r,r,D.as5,r,r,r),r,!0,r,r,r,r,r,r,r,r,new C.b_h(s),r,r,r,r,r,r,r)},
gao(d){return this.e}}
C.w9.prototype={
d0(){var x=this,w=y.T,v=A.eP(x).G(A.cB($.b7(),new C.bEe(),y.D,w),w)
A.eP(x).NH(new C.bEf(x))
if(v==null)return B.a6
w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.LR(0,"typing:"+x.x,B.yg).bxq(new C.bEg(x,v),"typing")
w.Py(0)
x.y=w
x.Q=A.rs(B.hs,new C.bEh(x))
return B.a6},
akc(){var x,w=this,v=w.z
v.eg(v,new C.bEb(new A.ad(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c5(v,v.r,v.e,A.u(v).i("c5<2>"));v.q();)x.push(v.d.a)
if(x.length!==J.aO(w.ga1(0))||!B.e.e6(x,J.dnl(w.ga1(0))))w.sa1(0,x)},
acz(d){var x,w=this,v=w.y,u=A.eP(w).a_(0,$.b7(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ad(Date.now(),0,!1)
if(x.cf(w.as).a<2e6)return
w.as=x
v.aef(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GN).cG(new C.bEk(),new C.bEl(),y.H)},
cZ(d){var x=this.y,w=A.eP(this).a_(0,$.b7(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ad(A.jm(0,0),0,!1)
x.aef(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GN).cG(new C.bEi(),new C.bEj(),y.H)}}
C.Ba.prototype={}
C.ao3.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.ch(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.dg(1,B.bb,A.h(s.c,1,B.a1,r,r,B.a9,r,r),r)],x)
if(s.z)B.e.p(w,A.a([B.dY,D.Pd],x))
w=A.a([A.O(w,B.u,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uK,A.w(r,A.h(v,1,r,r,r,B.he,r,r),B.r,r,r,new A.J(B.cz,r,r,u,r,r,B.x),r,r,r,B.CY,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aH(r,r,B.W,r,r,r,r,r,r,r,r,13,r,r,B.b_,r,r,!0,r,r,r,r,r,r,r,r),r,r))}t=A.O(A.a([q,B.af,A.a5(A.x(w,B.G,B.h,B.J),1)],x),B.u,B.h,B.l,0,r)
q=A.a([new A.d4(0,B.bm,B.z.ce(0.06),B.Gd,14)],y.V)
w=A.aT(d,B.b5,y.w).w
v=new C.b_t().$3(K.P1,"Voltar",new C.b_q(d))
u=s.r
v=A.a([v,B.af,A.a5(u==null?t:A.aX(t,u,r),1)],x)
B.e.p(v,A.a([B.af,A.Er(A.w(B.K,Q.E8,B.r,r,r,B.bV,r,44,r,r,r,r,44),r,new C.b_r(s),new C.b_s(s),r,D.bPj,"Mais op\xe7\xf5es",y.N)],x))
return A.w(r,A.x(A.a([A.O(v,B.u,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.J(B.t,r,r,B.tB,q,r,B.x),r,r,r,new A.a4(20,w.r.b+20,20,14),r,r,r)},
gao(d){return this.c}}
C.aci.prototype={
u(d){var x=null
return A.bh(x,!0,x,A.cp(x,A.w(x,B.hC,B.r,x,x,new A.J(B.z,x,x,x,x,x,B.ap),x,44,x,x,x,x,44),B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPK(d),x,x,x,x,x,x,!1,B.aE),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zD.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(F.MP,A.h(v,x,x,x,x,A.aH(x,x,C.d3e(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aH(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bo,x,1.4,!0,x,x,x,x,x,x,x,x),x,x))
return new A.ec(new A.aR(0,w.a.a*0.78,0,1/0),A.w(x,A.x(o,B.G,B.h,B.J),B.r,x,x,new A.J(r,x,x,new A.cz(E.y9,E.y9,new A.b5(q,q),new A.b5(p,p)),x,x,B.x),x,x,x,new A.a4(14,t,14,10),x,x,x),x)}}
C.ao2.prototype={
ai_(d){if(!A.uj(this.c.a.a)){d.O(y.q).f.a0(D.bYY)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.p(r,A.a([A.aX(A.w(B.K,B.P4,B.r,t,t,B.bV,t,44,t,t,t,t,44),u.e,t),B.ac],s))
x=A.W(24)
r.push(A.a5(A.w(B.bc,A.cs(t,B.a6,!1,t,!0,B.y,t,A.cu(),u.c,t,t,t,t,t,2,A.ja(t,B.b1,t,B.Z,t,t,t,t,!0,B.b1,t,t,t,t,t,t,!1,t,t,t,t,B.b1,t,t,t,t,t,t,t,t,B.mj,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.U,!0,t,!0,t,!1,t,B.aB,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_j(u,d),t,!1,t,t,!1,t,!0,t,B.al,t,t,t,t,t,t,t,t,t,t,t,B.fj,!0,B.au,t,B.b0,t,B.a9v,t,t),B.r,t,t,new A.J(B.a3,t,t,x,t,t,B.x),t,48,t,B.bY,t,t,t),1))
r.push(B.ac)
r.push(A.bh(t,!0,t,A.aX(A.w(B.K,D.aDq,B.r,t,t,B.bV,t,44,t,t,t,t,44),new C.b_k(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.O(r,B.u,B.h,B.l,0,t)
r=A.a([new A.d4(0,B.bm,B.z.ce(0.12),B.k3,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.p(x,A.a([A.aK(A.a4C(B.y,new C.b_l(u),v,t,B.js,B.bJ,new C.b_m()),34,t),B.ad],s))
x.push(w)
return A.w(t,A.bB(!0,new A.S(B.hw,A.x(x,B.E,B.h,B.J),t),t,D.arG,!1),B.r,t,t,new A.J(B.t,t,t,B.pd,r,t,B.x),t,t,t,t,t,t,t)}}
C.Rn.prototype={
u(d){var x=null,w=this.c
return A.amH(B.f6,w==null?D.bX2:new A.S(D.asH,A.bN(A.h(w,x,x,x,x,B.ke,x,x),x,x),x),B.cj,B.aN)}}
C.Kw.prototype={
P(){return new C.aeB()}}
C.aeB.prototype={
ac(){var x,w=this
w.ap()
x=w.a
w.e=x.d
x.c.al(0,w.ga1e())},
bh(d){var x,w,v=this
v.bD(d)
x=d.c
if(x!==v.a.c){w=v.ga1e()
x.a3(0,w)
v.a.c.al(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a3(0,this.ga1e())
this.a6()},
aTl(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gby(0).at
v.toString
x=v>300
if(x!==w.d)w.n(new C.c7w(w,x))},
b5M(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aT(x,null,y.w).w
w=this.a
if(x.ax)w.c.hf(0)
else w.c.i0(0,B.eu,G.Cy)},
u(d){var x,w,v,u=this,t=null,s=B.j.af(u.a.d-u.e,0,99),r=y.p,q=A.a([A.j_(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.w(B.K,D.aDj,B.r,t,t,D.afw,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bG(B.z,2)
r.push(A.cc(t,A.w(B.K,A.h(""+s,t,t,t,t,B.hR,t,t),B.r,t,B.lc,new A.J(B.t,t,v,x,t,t,B.x),t,20,t,B.CV,t,t,t),t,t,t,-6,-6,t))}q.push(A.cc(16,A.bh(t,!0,t,A.aX(new A.bA(B.aw,t,B.aD,B.r,r,t),u.gb5L(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bA(B.aw,t,B.aD,B.y,q,t)}}
C.bon.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aY6.prototype={
$1(d){return A.mZ(d,null,!0,null,null,y.S,y.z)},
gWY(d){return D.agU},
axU(d,e,f,g,h){return this.gWY(this).$3$1(e,f,g,h)}}
C.aY7.prototype={
$3$1(d,e,f,g){return C.d7_(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alE.prototype={}
C.IJ.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_Z(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.ach.prototype={}
C.a5x.prototype={}
var z=a.updateTypes(["~()","Zy(N)","OL(N)","F<~>(c)","t<c>()","w9(c)","xT<0^,1^>(0^(){$allTransitiveDependencies!y<hc>?,argument!M?,dependencies!y<hc>?,from!kT?,isAutoDispose!C,name!c?,retry!bp?(v,M)?})<fb<1^>,M?>"])
C.cNF.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.at6,A.x(A.a([A.O(A.a([new C.O7(B.jU,"Foto","photo",x),new C.O7(D.aBV,"Ficheiro","file",x),new C.O7(R.jR,"Sticker","sticker",x),new C.O7(D.aBN,"GIF","gif",x)],w),B.u,B.a0y,B.l,0,x)],w),B.u,B.h,B.J),x)},
$S:67}
C.cNG.prototype={
$1(d){return D.coK},
$S:z+1}
C.cNH.prototype={
$1(d){return D.clY},
$S:z+2}
C.bJC.prototype={
$0(){return A.an(this.b,!1).aq(this.a.e)},
$S:0}
C.cz4.prototype={
$0(){return A.an(this.a,!1).aq(this.b)},
$S:0}
C.bZv.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZw.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bj(this.b,y.P),v=A.u(w),w=new A.aj(w,w.gA(w),v.i("aj<V.E>")),u=y.f,v=v.i("V.E");w.q();){t=w.d
x=t==null?v.a(t):t
J.bn(s,new A.X(A.a_(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a_(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZx.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bZy.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bZA.prototype={
$2(d,e){var x=null,w=this.a
return A.eY(!1,x,!0,A.hY(A.W(10),A.jQ(w.e[e].a,x,B.bD,x,x,x,x),B.be),x,!0,x,x,x,x,x,x,x,x,new C.bZz(w,d,e),x,x,x,x,x,x,x)},
$S:1333}
C.bZz.prototype={
$0(){return A.an(this.b,!1).aq(this.a.e[this.c].b)},
$S:0}
C.b_g.prototype={
$0(){var x=y.H
return A.an(this.b,!1).h1(A.ty(new C.b_d(this.a),null,x),x)},
$S:0}
C.b_d.prototype={
$1(d){var x=null
return A.ky(A.cVx(B.ao,x,B.t,x),B.ao,A.bN(I.cWN(B.Z,A.pq(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1334}
C.b_f.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1335}
C.b_e.prototype={
$3(d,e,f){var x=null
return A.w(x,D.aDy,B.r,B.a3,x,x,x,120,x,x,x,x,this.a)},
$S:72}
C.b_h.prototype={
$0(){return A.zb(A.dA(this.a.c,0,null),B.qi,null)},
$S:0}
C.bEe.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bEf.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aH(0)
x=w.y
w.y=null
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y7(x).cG(new C.bEc(),new C.bEd(),y.H)}},
$S:0}
C.bEc.prototype={
$1(d){},
$S:106}
C.bEd.prototype={
$1(d){},
$S:13}
C.bEg.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dV(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.A(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.A(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.X(v,new A.ad(Date.now(),0,!1).en(5e6)))}u.akc()},
$S:252}
C.bEh.prototype={
$1(d){return this.a.akc()},
$S:62}
C.bEb.prototype={
$2(d,e){return e.b.fg(this.a)},
$S:1336}
C.bEk.prototype={
$1(d){},
$S:238}
C.bEl.prototype={
$1(d){},
$S:13}
C.bEi.prototype={
$1(d){},
$S:238}
C.bEj.prototype={
$1(d){},
$S:13}
C.cTX.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:22}
C.cTi.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.Ir,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r)
p.push(A.jp(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDh,r,r,r,r,new C.cTh(d,u),!1,r,r,r,r,r,s,r,t,r,F.Pc,r))}return A.bB(!0,new A.S(D.asE,A.x(A.a([D.ca1,B.ar,D.cb_,B.P,new A.dg(1,B.bb,A.d6(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:31}
C.cTh.prototype={
$0(){return A.an(this.a,!1).aq(this.b)},
$S:0}
C.b_t.prototype={
$3(d,e,f){var x=null
return A.kB(A.aX(A.w(B.K,d,B.r,x,x,B.bV,x,44,x,x,x,x,44),f,x),x,e)},
$S:1337}
C.b_q.prototype={
$0(){return A.iO(this.a,!1)},
$S:0}
C.b_s.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_r.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bom(A.h(t,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bPb)
return r},
$S:63}
C.bPK.prototype={
$0(){return A.an(this.a,!1).bj()},
$S:0}
C.b_j.prototype={
$1(d){return this.a.ai_(this.b)},
$S:3}
C.b_k.prototype={
$0(){return this.a.ai_(this.b)},
$S:0}
C.b_m.prototype={
$2(d,e){return B.ac},
$S:122}
C.b_l.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bG(B.z,1.5)
return A.aX(A.w(B.K,A.h(w.w[e],x,x,x,x,B.dZ,x,x),B.r,x,x,new A.J(B.t,x,u,v,x,x,B.x),x,34,x,B.cI,x,x,x),new C.b_i(w,e),x)},
$S:218}
C.b_i.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c7w.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_Z.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("IJ.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adU.prototype,"gaTi","HU",3)
w(C,"dN6","dzL",5)
v(C.w9.prototype,"giF","d0",4)
var t
v(t=C.aeB.prototype,"ga1e","aTl",0)
v(t,"gb5L","b5M",0)
u(C,"dM8",1,function(){return{$allTransitiveDependencies:B.cN,argument:B.cN,dependencies:B.cN,from:B.cN,isAutoDispose:B.cN,name:B.cN,retry:B.cN}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bje",function(d,e,f,g,h,i,j,k){return C.bje(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bje(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bje(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.M,[C.IF,C.Ba,C.aY6,C.aY7,C.alE])
w(A.bu,[C.cNF,C.cNG,C.cNH,C.b_d,C.b_f,C.b_e,C.bEe,C.bEc,C.bEd,C.bEg,C.bEh,C.bEk,C.bEl,C.bEi,C.bEj,C.cTX,C.cTi,C.b_t,C.b_s,C.b_r,C.b_j])
w(A.L,[C.O7,C.Zy,C.Rm,C.ao3,C.aci,C.zD,C.ao2,C.Rn])
w(A.bL,[C.bJC,C.cz4,C.bZv,C.bZw,C.bZx,C.bZy,C.bZz,C.b_g,C.b_h,C.bEf,C.cTh,C.b_q,C.bPK,C.b_k,C.b_i,C.c7w,C.b_Z])
w(A.G,[C.OL,C.Kw])
w(A.Z,[C.adU,C.aeB])
w(A.cL,[C.bZA,C.bEb,C.b_m,C.b_l])
v(C.w9,A.fb)
v(C.bon,A.f7)
v(C.ach,A.kT)
v(C.IJ,C.ach)
v(C.a5x,C.IJ)
x(C.ach,C.alE)})()
A.br(b.typeUniverse,JSON.parse('{"Zy":{"L":[],"e":[],"f":[]},"OL":{"G":[],"e":[],"f":[]},"O7":{"L":[],"e":[],"f":[]},"adU":{"Z":["OL"]},"Rm":{"L":[],"e":[],"f":[]},"w9":{"fb":["t<c>"]},"ao3":{"L":[],"e":[],"f":[]},"aci":{"L":[],"e":[],"f":[]},"Kw":{"G":[],"e":[],"f":[]},"zD":{"L":[],"e":[],"f":[]},"ao2":{"L":[],"e":[],"f":[]},"Rn":{"L":[],"e":[],"f":[]},"aeB":{"Z":["Kw"]},"IJ":{"kT":[],"hc":[],"He":[],"lP":[]},"a5x":{"IJ":["1","2","2","3","2","xT<1,2>"],"kT":[],"hc":[],"He":[],"lP":[],"IJ.0":"1"}}'))
A.PY(b.typeUniverse,JSON.parse('{"alE":5,"ach":6}'))
var y=(function rtii(){var x=A.B
return{D:x("cI"),E:x("cf"),V:x("r<d4>"),X:x("r<pF<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("dv"),S:x("fb<@>"),F:x("+(c,ad)"),C:x("Ba"),N:x("c"),q:x("dj"),z:x("@"),r:x("v"),B:x("IF?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.caC=new A.D("Powered by GIPHY",null,H.Ip,null,null,null,null,null,null,null)
D.acQ=new A.d0(B.e0,null,null,D.caC,null)
D.afw=new A.J(B.z,null,null,null,B.ii,null,B.ap)
D.Kr=new C.aY6()
D.agU=new C.aY7()
D.arG=new A.a4(0,0,0,24)
D.as5=new A.a4(12,10,14,10)
D.asB=new A.a4(16,16,16,12)
D.asD=new A.a4(16,16,16,24)
D.asE=new A.a4(16,16,16,8)
D.asH=new A.a4(16,2,16,8)
D.at6=new A.a4(20,18,20,24)
D.au2=new A.a4(8,12,8,12)
D.aBN=new A.b0(57404,"HeroiconsSolid",null,!1)
D.aBV=new A.b0(57436,"HeroiconsSolid",null,!1)
D.Pd=new A.b8(B.ic,18,B.br,null,"Verificado",null)
D.aDh=new A.b8(B.fe,null,B.W,null,null,null)
D.aBC=new A.b0(57347,"HeroiconsSolid",null,!1)
D.aDj=new A.b8(D.aBC,20,B.t,null,null,null)
D.aDq=new A.b8(B.lG,20,B.t,null,null,null)
D.aDy=new A.b8(B.jU,null,B.W,null,null,null)
D.aCA=new A.b8(B.ve,null,null,null,null,null)
D.aEL=new A.dE(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwP=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bz9=x([],A.B("r<daE>"))
D.bzc=x([],A.B("r<+(c,~())>"))
D.ij=x([],y.L)
D.amp=new A.Y(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.and=new A.Y(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aog=new A.Y(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amQ=new A.Y(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDA=x([D.amp,B.cS,D.and,D.aog,D.amQ],A.B("r<Y>"))
D.bPb=new A.jN("report",!0,P.aaC,null,A.B("jN<c>"))
D.bPj=new C.bon(1,"under")
D.cl0=new C.aci(null)
D.bPn=new A.eL(null,0,0,null,null,null,D.cl0,null)
D.bX2=new A.c6(1/0,null,null,null)
D.bXz=new S.ym(12,3,null)
D.cah=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null)
D.bYY=new A.bF(D.cah,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cbT=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null)
D.bZ2=new A.bF(D.cbT,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c91=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null)
D.bZp=new A.bF(D.c91,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c7j=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null)
D.ca1=new A.D("Que mensagem queres denunciar?",null,B.hQ,null,null,null,null,null,null,null)
D.cb_=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null)
D.clY=new C.OL(null)
D.coK=new C.Zy(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_S","CQ",()=>D.Kr.axU(0,C.dN6(),A.B("w9"),A.B("t<c>"),y.N))})()};
(a=>{a["t+YxDvmp/JQ1wdPcgkrwh3b1wPo="]=a.current})($__dart_deferred_initializers__);