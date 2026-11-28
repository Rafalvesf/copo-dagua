((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,I,K,L,M,F,N,O,C={
dHH(){var x,w=$.HV(),v=J.nI(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aT(B.j.hE(w.pw(256),16),2,"0")
return B.e.hy(v)},
aUq(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUq=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Q()
q=r.b
q===$&&A.b()
q=q.gbu().e.a
u=(q==null?null:q.r).a
t=B.f.t(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dHH()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r6(s,d,new A.v7(!1,f)),$async$aUq)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cl(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUq,w)},
ddP(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.bQ(null,new C.cNP(),!1,d,!0,!1,null,l),$async$rH)
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
return A.d(new A.lL().ty(85,2048,B.fw),$async$rH)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.ki(),$async$rH)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fo(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUq(t,s,C.ddP(s)),$async$rH)
case 12:v=new j.Iw(f,r,s)
x=1
break
case 7:x=13
return A.d($.did().y4(D.bz1,null,null),$async$rH)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.ki(),$async$rH)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a0(D.bYW)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.cb(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbsv(p))
if(B.f.fo(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUq(t,l,C.ddP(l)),$async$rH)
case 15:v=new j.Iw(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bQ(null,new C.cNQ(),!1,d,!0,!1,null,l),$async$rH)
case 16:n=f
v=n==null?null:new C.Iw("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bQ(null,new C.cNR(),!1,d,!0,!0,null,l),$async$rH)
case 17:m=f
v=m==null?null:new C.Iw(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rH,w)},
Iw:function Iw(d,e,f){this.a=d
this.b=e
this.c=f},
cNP:function cNP(){},
cNQ:function cNQ(){},
cNR:function cNR(){},
NW:function NW(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJX:function bJX(d,e){this.a=d
this.b=e},
Zq:function Zq(d){this.a=d},
czm:function czm(d,e){this.a=d
this.b=e},
Oz:function Oz(d){this.a=d},
adJ:function adJ(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bZR:function bZR(d){this.a=d},
bZS:function bZS(d,e){this.a=d
this.b=e},
bZT:function bZT(d){this.a=d},
bZU:function bZU(d){this.a=d},
bZW:function bZW(d){this.a=d},
bZV:function bZV(d,e,f){this.a=d
this.b=e
this.c=f},
Rd:function Rd(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_5:function b_5(d,e){this.a=d
this.b=e},
b_2:function b_2(d){this.a=d},
b_4:function b_4(d){this.a=d},
b_3:function b_3(d){this.a=d},
b_6:function b_6(d){this.a=d},
dzS(d){return new C.w6(d,A.E(y.N,y.F),new A.ab(A.jl(0,0),0,!1))},
d0t(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dq(d,new C.cU4(),y.N).bx(0)
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
bEy:function bEy(){},
bEz:function bEz(d){this.a=d},
bEw:function bEw(){},
bEx:function bEx(){},
bEA:function bEA(d,e){this.a=d
this.b=e},
bEB:function bEB(d){this.a=d},
bEv:function bEv(d){this.a=d},
bEE:function bEE(){},
bEF:function bEF(){},
bEC:function bEC(){},
bED:function bED(){},
cU4:function cU4(){},
a_q(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_q=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a0(D.bZi)
x=1
break}x=3
return A.d(A.bQ(null,new C.cTq(A.dz(h,0,A.et(12,"count",y.r),A.a8(h).c).bx(0)),!1,d,!0,!0,null,y.C),$async$a_q)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wx(d,e,f,u.c,u.d,g,t),$async$a_q)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_q,w)},
B6:function B6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTq:function cTq(d){this.a=d},
cTp:function cTp(d,e){this.a=d
this.b=e},
cVT(d,e,f,g,h,i,j,k,l){return new C.anV(g,d,k,h,i,e,j,l,f,null)},
anV:function anV(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_i:function b_i(){},
b_f:function b_f(d){this.a=d},
b_h:function b_h(d){this.a=d},
b_g:function b_g(d){this.a=d},
cHa(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ae)
v=new A.b6(16,16)
u=d[x]
w.push(new A.bJ(1,B.at,A.x(t,A.y(A.a([A.h(u.a,1,B.a1,t,t,B.c6,t,t),B.aU,A.h(u.b,t,t,t,t,B.be,B.a4,t)],s),B.v,B.h,B.l),B.r,t,t,new A.J(B.a3,t,t,new A.cA(v,v,v,v),t,t,B.x),t,t,t,D.atW,t,t,t),t))
B.e.n(r,w)}return A.O(r,B.v,B.h,B.l,0,t)},
akx(d,e,f){var x,w=null
if(f){x=A.fM(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c7,w,w,B.cY,w)
x=new A.am(A.hj(A.h(d,w,w,w,w,w,w,w),e,x),w)}else{x=A.cd(B.z,w,w,B.t,w,w,B.ab,w,w,B.cY)
x=new A.am(A.bD(A.h(d,w,w,w,w,w,w,w),e,x),w)}return A.aK(x,52,w)},
d_l(d,e,f,g){var x=null,w=y.p,v=A.a([new A.di(1,B.ba,A.h(d,x,x,x,x,B.c6,B.a4,x),x)],w)
if(g)B.e.n(v,A.a([B.dY,D.P8],w))
v=A.a([new A.ch(d,76,e,!1,!0,x),B.aE,A.O(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.h(f,x,x,x,x,B.L,B.a4,x)],w))
return new A.bA(B.aw,x,B.aC,B.y,A.a([new A.S(B.jD,A.bO(A.y(v,B.v,B.h,B.l),x,x),x),D.bPg],w),x)},
cGT(d,e){var x,w,v=null,u=A.aT(d,B.dR,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a_)
w.push(e[x])
B.e.n(s,w)}return A.bB(!0,new A.ec(new A.aR(0,1/0,0,u.a.b*0.9),A.dS(A.y(s,B.E,B.h,B.l),B.y,v,B.al,v,B.av),v),v,B.Z,!1)},
ac7:function ac7(d){this.a=d},
bQ4:function bQ4(d){this.a=d},
d3p(d){var x,w,v,u
for(x=new A.ce(d),w=y.E,x=new A.ag(x,x.gA(0),w.i("ag<V.E>")),w=w.i("V.E"),v=0;x.q();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDt[B.j.aI(v,5)]},
cVS(d,e,f,g,h,i,j){return new C.anU(d,i,f,e,g,j,h,null)},
zz:function zz(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anU:function anU(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_8:function b_8(d,e){this.a=d
this.b=e},
b_9:function b_9(d,e){this.a=d
this.b=e},
b_b:function b_b(){},
b_a:function b_a(d){this.a=d},
b_7:function b_7(d,e){this.a=d
this.b=e},
Re:function Re(d,e){this.c=d
this.a=e},
Kl:function Kl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeq:function aeq(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c7S:function c7S(d,e){this.a=d
this.b=e},
bo5:function bo5(d,e){this.a=d
this.b=e},
aXW:function aXW(){},
aXX:function aXX(){},
alu:function alu(){},
IA:function IA(){},
b_O:function b_O(d,e){this.a=d
this.b=e},
ac6:function ac6(){},
d76(d,e,f,g,h,i,j,k){return new C.a5m(A.dLs(C.dM9(),i,j),d,g,h,e,A.akW(e),f,i.i("@<0>").b7(j).b7(k).i("a5m<1,2,3>"))},
biX(d,e,f,g,h,i,j,k,l,m){return new A.xQ(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xQ<1,2>"))},
a5m:function a5m(d,e,f,g,h,i,j,k){var _=this
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
K=c[433]
L=c[331]
M=c[157]
F=c[237]
N=c[167]
O=c[432]
C=a.updateHolder(c[122],C)
D=c[232]
P=c[378]
Q=c[393]
R=c[266]
S=c[180]
T=c[431]
C.Iw.prototype={
gap(d){return this.c}}
C.NW.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eY(!1,w,!0,new A.S(B.hy,A.y(A.a([A.x(x,A.b9(this.c,$.au,x,x,26),B.r,x,x,new A.J(B.a3,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aE,A.h(this.d,x,x,x,x,B.hR,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,new C.bJX(this,d),x,x,x,x,x,x,x)}}
C.Zq.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwI[x]
v=new A.b6(14,14)
s.push(A.eY(!1,new A.cA(v,v,v,v),!0,new A.S(B.q2,A.ase(w,B.km,u,u),u),u,!0,u,u,u,u,u,u,u,u,new C.czm(d,w),u,u,u,u,u,u,u))}return new A.S(D.asx,A.y(A.a([D.c7a,B.R,A.arv(1,s,4,8,8,u,B.dO,!0)],t),B.G,B.h,B.J),u)}}
C.Oz.prototype={
R(){return new C.adJ(new A.aF(B.ak,$.aa()),D.ii)}}
C.adJ.prototype={
ad(){this.aq()
this.HV("")},
m(){var x=this.d
x.Z$=$.aa()
x.W$=0
this.a6()},
HV(d){return this.bgg(d)},
bgg(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HV=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bZR(s))
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
p=A.aj6("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUR(p,null),$async$HV)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bt.jG(0,A.jj(A.jh(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.bZS(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.bZT(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.bZU(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HV,w)},
u(d){var x=this,w=null,v=A.aT(d,w,y.w).w,u=A.cs(w,B.a6,!1,w,!0,B.y,w,A.cv(),x.d,w,w,w,w,w,2,D.aEF,B.U,!0,w,!0,w,!1,w,B.aB,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTj(),w,!1,w,w,!1,w,!0,w,B.al,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b0,w,B.rT,w,w),t=x.r
if(t!=null)t=A.bO(A.h(t,w,w,w,w,B.mm,B.a4,w),w,w)
else t=x.f?D.bXt:N.aru(T.a8q,new C.bZW(x),x.e.length,w,w,!1)
return A.aK(new A.S(D.asv,A.y(A.a([u,B.ad,A.a5(t,1),B.aE,D.acM],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.Rd.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aT(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b2(s.c,"asset:"))return A.ase(B.f.bF(s.c,6),B.km,120,120)
if(p==="image"||p==="gif")return A.cp(r,A.hJ(A.W(16),new A.ec(new A.aR(0,q,0,320),A.k7(s.c,new C.b_3(q),B.bF,r,new C.b_4(q),r,r),r),B.bc),B.U,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_5(s,d),r,r,r,r,r,r,!1,B.aD)
p=A.W(16)
x=s.f
w=x?$.au:B.a3
v=A.W(16)
u=A.b9(O.Oz,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aI(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r)
return A.eY(!1,p,!0,A.x(r,A.O(A.a([u,B.ac,new A.di(1,B.ba,t,r),B.bj,A.b9(L.vf,x?B.t:B.W,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.J(w,r,r,v,r,r,B.x),r,r,r,D.as_,r,r,r),r,!0,r,r,r,r,r,r,r,r,new C.b_6(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
C.w6.prototype={
d1(){var x=this,w=y.T,v=A.eQ(x).G(A.cC($.b7(),new C.bEy(),y.D,w),w)
A.eQ(x).NI(new C.bEz(x))
if(v==null)return B.a6
w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.LU(0,"typing:"+x.x,B.yi).bxp(new C.bEA(x,v),"typing")
w.PA(0)
x.y=w
x.Q=A.u9(B.hs,new C.bEB(x))
return B.a6},
akf(){var x,w=this,v=w.z
v.eg(v,new C.bEv(new A.ab(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c4(v,v.r,v.e,A.u(v).i("c4<2>"));v.q();)x.push(v.d.a)
if(x.length!==J.aO(w.ga1(0))||!B.e.e6(x,J.dnr(w.ga1(0))))w.sa1(0,x)},
acA(d){var x,w=this,v=w.y,u=A.eQ(w).a_(0,$.b7(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ab(Date.now(),0,!1)
if(x.cf(w.as).a<2e6)return
w.as=x
v.aeg(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GK).cs(new C.bEE(),new C.bEF(),y.H)},
cZ(d){var x=this.y,w=A.eQ(this).a_(0,$.b7(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ab(A.jl(0,0),0,!1)
x.aeg(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GK).cs(new C.bEC(),new C.bED(),y.H)}}
C.B6.prototype={}
C.anV.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.ch(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.di(1,B.ba,A.h(s.c,1,B.a1,r,r,B.a9,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.dY,D.P8],x))
w=A.a([A.O(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uN,A.x(r,A.h(v,1,r,r,r,B.he,r,r),B.r,r,r,new A.J(B.cz,r,r,u,r,r,B.x),r,r,r,B.CW,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aI(r,r,B.W,r,r,r,r,r,r,r,r,13,r,r,B.b_,r,r,!0,r,r,r,r,r,r,r,r),r,r))}t=A.O(A.a([q,B.af,A.a5(A.y(w,B.G,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d4(0,B.bm,B.z.cc(0.06),B.Ga,14)],y.V)
w=A.aT(d,B.b5,y.w).w
v=new C.b_i().$3(K.OX,"Voltar",new C.b_f(d))
u=s.r
v=A.a([v,B.af,A.a5(u==null?t:A.aY(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Em(A.x(B.K,Q.E7,B.r,r,r,B.bV,r,44,r,r,r,r,44),r,new C.b_g(s),new C.b_h(s),r,D.bPc,"Mais op\xe7\xf5es",y.N)],x))
return A.x(r,A.y(A.a([A.O(v,B.v,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.J(B.t,r,r,B.tD,q,r,B.x),r,r,r,new A.a4(20,w.r.b+20,20,14),r,r,r)},
gap(d){return this.c}}
C.ac7.prototype={
u(d){var x=null
return A.bj(x,!0,x,A.cp(x,A.x(x,B.hC,B.r,x,x,new A.J(B.z,x,x,x,x,x,B.ap),x,44,x,x,x,x,44),B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bQ4(d),x,x,x,x,x,x,!1,B.aD),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zz.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(F.MO,A.h(v,x,x,x,x,A.aI(x,x,C.d3p(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aI(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bn,x,1.4,!0,x,x,x,x,x,x,x,x),x,x))
return new A.ec(new A.aR(0,w.a.a*0.78,0,1/0),A.x(x,A.y(o,B.G,B.h,B.J),B.r,x,x,new A.J(r,x,x,new A.cA(E.yb,E.yb,new A.b6(q,q),new A.b6(p,p)),x,x,B.x),x,x,x,new A.a4(14,t,14,10),x,x,x),x)}}
C.anU.prototype={
ai1(d){if(!A.uh(this.c.a.a)){d.O(y.q).f.a0(D.bYR)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aY(A.x(B.K,B.P_,B.r,t,t,B.bV,t,44,t,t,t,t,44),u.e,t),B.ac],s))
x=A.W(24)
r.push(A.a5(A.x(B.bb,A.cs(t,B.a6,!1,t,!0,B.y,t,A.cv(),u.c,t,t,t,t,t,2,A.j9(t,B.bk,t,B.Z,t,t,t,t,!0,B.bk,t,t,t,t,t,t,!1,t,t,t,t,B.bk,t,t,t,t,t,t,t,t,B.mj,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.U,!0,t,!0,t,!1,t,B.aB,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_8(u,d),t,!1,t,t,!1,t,!0,t,B.al,t,t,t,t,t,t,t,t,t,t,t,B.fj,!0,B.au,t,B.b0,t,B.a9t,t,t),B.r,t,t,new A.J(B.a3,t,t,x,t,t,B.x),t,48,t,B.bY,t,t,t),1))
r.push(B.ac)
r.push(A.bj(t,!0,t,A.aY(A.x(B.K,D.aDk,B.r,t,t,B.bV,t,44,t,t,t,t,44),new C.b_9(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.O(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d4(0,B.bm,B.z.cc(0.12),B.k3,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aK(A.a4r(B.y,new C.b_a(u),v,t,B.jq,B.bJ,new C.b_b()),34,t),B.ad],s))
x.push(w)
return A.x(t,A.bB(!0,new A.S(B.hw,A.y(x,B.E,B.h,B.J),t),t,D.arA,!1),B.r,t,t,new A.J(B.t,t,t,B.pe,r,t,B.x),t,t,t,t,t,t,t)}}
C.Re.prototype={
u(d){var x=null,w=this.c
return A.amy(B.f7,w==null?D.bWX:new A.S(D.asB,A.bO(A.h(w,x,x,x,x,B.ke,x,x),x,x),x),B.cj,B.aN)}}
C.Kl.prototype={
R(){return new C.aeq()}}
C.aeq.prototype={
ad(){var x,w=this
w.aq()
x=w.a
w.e=x.d
x.c.an(0,w.ga1f())},
bi(d){var x,w,v=this
v.bD(d)
x=d.c
if(x!==v.a.c){w=v.ga1f()
x.a3(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a3(0,this.ga1f())
this.a6()},
aTm(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gby(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c7S(w,x))},
b5N(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aT(x,null,y.w).w
w=this.a
if(x.ax)w.c.hz(0)
else w.c.i0(0,B.ee,G.Cw)},
u(d){var x,w,v,u=this,t=null,s=B.j.af(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iW(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.x(B.K,D.aDd,B.r,t,t,D.afs,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bH(B.z,2)
r.push(A.cb(t,A.x(B.K,A.h(""+s,t,t,t,t,B.hR,t,t),B.r,t,B.ld,new A.J(B.t,t,v,x,t,t,B.x),t,20,t,B.CT,t,t,t),t,t,t,-6,-6,t))}q.push(A.cb(16,A.bj(t,!0,t,A.aY(new A.bA(B.aw,t,B.aC,B.r,r,t),u.gb5M(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bA(B.aw,t,B.aC,B.y,q,t)}}
C.bo5.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aXW.prototype={
$1(d){return A.mW(d,null,!0,null,null,y.S,y.z)},
gX0(d){return D.agQ},
axY(d,e,f,g,h){return this.gX0(this).$3$1(e,f,g,h)}}
C.aXX.prototype={
$3$1(d,e,f,g){return C.d76(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alu.prototype={}
C.IA.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_O(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.ac6.prototype={}
C.a5m.prototype={}
var z=a.updateTypes(["~()","Zq(N)","Oz(N)","F<~>(c)","t<c>()","w6(c)","xQ<0^,1^>(0^(){$allTransitiveDependencies!w<ha>?,argument!M?,dependencies!w<ha>?,from!kR?,isAutoDispose!B,name!c?,retry!bp?(v,M)?})<fb<1^>,M?>"])
C.cNP.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.at0,A.y(A.a([A.O(A.a([new C.NW(B.jT,"Foto","photo",x),new C.NW(D.aBO,"Ficheiro","file",x),new C.NW(R.jQ,"Sticker","sticker",x),new C.NW(D.aBG,"GIF","gif",x)],w),B.v,B.a0u,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:74}
C.cNQ.prototype={
$1(d){return D.coA},
$S:z+1}
C.cNR.prototype={
$1(d){return D.clO},
$S:z+2}
C.bJX.prototype={
$0(){return A.al(this.b,!1).ag(this.a.e)},
$S:0}
C.czm.prototype={
$0(){return A.al(this.a,!1).ag(this.b)},
$S:0}
C.bZR.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZS.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bf(this.b,y.P),v=A.u(w),w=new A.ag(w,w.gA(w),v.i("ag<V.E>")),u=y.f,v=v.i("V.E");w.q();){t=w.d
x=t==null?v.a(t):t
J.bb(s,new A.X(A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZT.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bZU.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bZW.prototype={
$2(d,e){var x=null,w=this.a
return A.eY(!1,x,!0,A.hJ(A.W(10),A.k7(w.e[e].a,x,B.bF,x,x,x,x),B.bc),x,!0,x,x,x,x,x,x,x,x,new C.bZV(w,d,e),x,x,x,x,x,x,x)},
$S:1337}
C.bZV.prototype={
$0(){return A.al(this.b,!1).ag(this.a.e[this.c].b)},
$S:0}
C.b_5.prototype={
$0(){var x=y.H
return A.al(this.b,!1).h1(A.tu(new C.b_2(this.a),null,x),x)},
$S:0}
C.b_2.prototype={
$1(d){var x=null
return A.kv(A.cVC(B.an,x,B.t,x),B.an,A.bO(I.cWT(B.Z,A.pq(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1338}
C.b_4.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1339}
C.b_3.prototype={
$3(d,e,f){var x=null
return A.x(x,D.aDs,B.r,B.a3,x,x,x,120,x,x,x,x,this.a)},
$S:73}
C.b_6.prototype={
$0(){return A.z7(A.dA(this.a.c,0,null),B.qk,null)},
$S:0}
C.bEy.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bEz.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aK(0)
x=w.y
w.y=null
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yb(x).cs(new C.bEw(),new C.bEx(),y.H)}},
$S:0}
C.bEw.prototype={
$1(d){},
$S:120}
C.bEx.prototype={
$1(d){},
$S:11}
C.bEA.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dV(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.X(v,new A.ab(Date.now(),0,!1).en(5e6)))}u.akf()},
$S:253}
C.bEB.prototype={
$1(d){return this.a.akf()},
$S:64}
C.bEv.prototype={
$2(d,e){return e.b.ff(this.a)},
$S:1340}
C.bEE.prototype={
$1(d){},
$S:245}
C.bEF.prototype={
$1(d){},
$S:11}
C.bEC.prototype={
$1(d){},
$S:245}
C.bED.prototype={
$1(d){},
$S:11}
C.cU4.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:24}
C.cTq.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.Iq,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r)
p.push(A.jo(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDb,r,r,r,r,new C.cTp(d,u),!1,r,r,r,r,r,s,r,t,r,F.P7,r))}return A.bB(!0,new A.S(D.asy,A.y(A.a([D.c9S,B.ar,D.caQ,B.P,new A.di(1,B.ba,A.d6(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:31}
C.cTp.prototype={
$0(){return A.al(this.a,!1).ag(this.b)},
$S:0}
C.b_i.prototype={
$3(d,e,f){var x=null
return A.ky(A.aY(A.x(B.K,d,B.r,x,x,B.bV,x,44,x,x,x,x,44),f,x),x,e)},
$S:1341}
C.b_f.prototype={
$0(){return A.al(this.a,!1).hA()},
$S:0}
C.b_h.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_g.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.G)(x),++u){t=x[u].a
r.push(A.bo4(A.h(t,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bP4)
return r},
$S:57}
C.bQ4.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
C.b_8.prototype={
$1(d){return this.a.ai1(this.b)},
$S:3}
C.b_9.prototype={
$0(){return this.a.ai1(this.b)},
$S:0}
C.b_b.prototype={
$2(d,e){return B.ac},
$S:124}
C.b_a.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bH(B.z,1.5)
return A.aY(A.x(B.K,A.h(w.w[e],x,x,x,x,B.dZ,x,x),B.r,x,x,new A.J(B.t,x,u,v,x,x,B.x),x,34,x,B.cH,x,x,x),new C.b_7(w,e),x)},
$S:179}
C.b_7.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c7S.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_O.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("IA.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adJ.prototype,"gaTj","HV",3)
w(C,"dN7","dzS",5)
v(C.w6.prototype,"giF","d1",4)
var t
v(t=C.aeq.prototype,"ga1f","aTm",0)
v(t,"gb5M","b5N",0)
u(C,"dM9",1,function(){return{$allTransitiveDependencies:B.cM,argument:B.cM,dependencies:B.cM,from:B.cM,isAutoDispose:B.cM,name:B.cM,retry:B.cM}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["biX",function(d,e,f,g,h,i,j,k){return C.biX(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.biX(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.biX(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.M,[C.Iw,C.B6,C.aXW,C.aXX,C.alu])
w(A.bu,[C.cNP,C.cNQ,C.cNR,C.b_2,C.b_4,C.b_3,C.bEy,C.bEw,C.bEx,C.bEA,C.bEB,C.bEE,C.bEF,C.bEC,C.bED,C.cU4,C.cTq,C.b_i,C.b_h,C.b_g,C.b_8])
w(A.L,[C.NW,C.Zq,C.Rd,C.anV,C.ac7,C.zz,C.anU,C.Re])
w(A.bL,[C.bJX,C.czm,C.bZR,C.bZS,C.bZT,C.bZU,C.bZV,C.b_5,C.b_6,C.bEz,C.cTp,C.b_f,C.bQ4,C.b_9,C.b_7,C.c7S,C.b_O])
w(A.H,[C.Oz,C.Kl])
w(A.a_,[C.adJ,C.aeq])
w(A.cK,[C.bZW,C.bEv,C.b_b,C.b_a])
v(C.w6,A.fb)
v(C.bo5,A.fg)
v(C.ac6,A.kR)
v(C.IA,C.ac6)
v(C.a5m,C.IA)
x(C.ac6,C.alu)})()
A.br(b.typeUniverse,JSON.parse('{"Zq":{"L":[],"e":[],"f":[]},"Oz":{"H":[],"e":[],"f":[]},"NW":{"L":[],"e":[],"f":[]},"adJ":{"a_":["Oz"]},"Rd":{"L":[],"e":[],"f":[]},"w6":{"fb":["t<c>"]},"anV":{"L":[],"e":[],"f":[]},"ac7":{"L":[],"e":[],"f":[]},"Kl":{"H":[],"e":[],"f":[]},"zz":{"L":[],"e":[],"f":[]},"anU":{"L":[],"e":[],"f":[]},"Re":{"L":[],"e":[],"f":[]},"aeq":{"a_":["Kl"]},"IA":{"kR":[],"ha":[],"H6":[],"lO":[]},"a5m":{"IA":["1","2","2","3","2","xQ<1,2>"],"kR":[],"ha":[],"H6":[],"lO":[],"IA.0":"1"}}'))
A.PM(b.typeUniverse,JSON.parse('{"alu":5,"ac6":6}'))
var y=(function rtii(){var x=A.z
return{D:x("cH"),E:x("ce"),V:x("r<d4>"),X:x("r<pF<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("du"),S:x("fb<@>"),F:x("+(c,ab)"),C:x("B6"),N:x("c"),q:x("dl"),z:x("@"),r:x("v"),B:x("Iw?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cas=new A.D("Powered by GIPHY",null,H.Io,null,null,null,null,null,null,null)
D.acM=new A.d_(B.e_,null,null,D.cas,null)
D.afs=new A.J(B.z,null,null,null,B.ih,null,B.ap)
D.Kr=new C.aXW()
D.agQ=new C.aXX()
D.arA=new A.a4(0,0,0,24)
D.as_=new A.a4(12,10,14,10)
D.asv=new A.a4(16,16,16,12)
D.asx=new A.a4(16,16,16,24)
D.asy=new A.a4(16,16,16,8)
D.asB=new A.a4(16,2,16,8)
D.at0=new A.a4(20,18,20,24)
D.atW=new A.a4(8,12,8,12)
D.aBG=new A.b0(57404,"HeroiconsSolid",null,!1)
D.aBO=new A.b0(57436,"HeroiconsSolid",null,!1)
D.P8=new A.b8(B.ib,18,B.bq,null,"Verificado",null)
D.aDb=new A.b8(B.fe,null,B.W,null,null,null)
D.aBv=new A.b0(57347,"HeroiconsSolid",null,!1)
D.aDd=new A.b8(D.aBv,20,B.t,null,null,null)
D.aDk=new A.b8(B.lG,20,B.t,null,null,null)
D.aDs=new A.b8(B.jT,null,B.W,null,null,null)
D.aCu=new A.b8(B.vh,null,null,null,null,null)
D.aEF=new A.dE(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCu,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwI=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bz1=x([],A.z("r<daM>"))
D.bz4=x([],A.z("r<+(c,~())>"))
D.ii=x([],y.L)
D.amk=new A.Z(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.an8=new A.Z(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aob=new A.Z(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amL=new A.Z(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDt=x([D.amk,B.cR,D.an8,D.aob,D.amL],A.z("r<Z>"))
D.bP4=new A.jO("report",!0,P.aaz,null,A.z("jO<c>"))
D.bPc=new C.bo5(1,"under")
D.ckR=new C.ac7(null)
D.bPg=new A.eF(null,0,0,null,null,null,D.ckR,null)
D.bWX=new A.c5(1/0,null,null,null)
D.bXt=new S.yi(12,3,null)
D.ca7=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null)
D.bYR=new A.bF(D.ca7,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cbJ=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null)
D.bYW=new A.bF(D.cbJ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c8T=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null)
D.bZi=new A.bF(D.c8T,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c7a=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null)
D.c9S=new A.D("Que mensagem queres denunciar?",null,B.hQ,null,null,null,null,null,null,null)
D.caQ=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null)
D.clO=new C.Oz(null)
D.coA=new C.Zq(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_P","CL",()=>D.Kr.axY(0,C.dN7(),A.z("w6"),A.z("t<c>"),y.N))})()};
(a=>{a["VWdRqov3SMAmkWPO8IwESModmmk="]=a.current})($__dart_deferred_initializers__);