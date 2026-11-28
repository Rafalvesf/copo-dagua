((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,E,L,M,N,O,C={
dIe(){var x,w=$.HZ(),v=J.nM(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aP(B.j.hD(w.pC(256),16),2,"0")
return B.e.hz(v)},
aVb(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aVb=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Q()
q=r.b
q===$&&A.b()
q=q.gbt().e.a
u=(q==null?null:q.r).a
t=B.f.u(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dIe()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.R("chat-attachments")
x=3
return A.d(q.yf(s,d,new A.qz("3600",!1,f)),$async$aVb)
case 3:r=r.b.ay
r===$&&A.b()
v=r.R("chat-attachments").Cl(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aVb,w)},
deb(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.bV(null,new C.cNP(),!1,d,!0,!1,null,l),$async$rG)
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
return A.d(new A.mS().aBG(85,2048,B.fC),$async$rG)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kh(),$async$rG)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fb(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aVb(t,s,C.deb(s)),$async$rG)
case 12:v=new j.IA(f,r,s)
x=1
break
case 7:x=13
return A.d($.diJ().xV(D.bz7,null,null),$async$rG)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kh(),$async$rG)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a4(D.bZp)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.c8(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbtC(p))
if(B.f.fb(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aVb(t,l,C.deb(l)),$async$rG)
case 15:v=new j.IA(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bV(null,new C.cNQ(),!1,d,!0,!1,null,l),$async$rG)
case 16:n=f
v=n==null?null:new C.IA("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bV(null,new C.cNR(),!1,d,!0,!0,null,l),$async$rG)
case 17:m=f
v=m==null?null:new C.IA(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rG,w)},
IA:function IA(d,e,f){this.a=d
this.b=e
this.c=f},
cNP:function cNP(){},
cNQ:function cNQ(){},
cNR:function cNR(){},
O6:function O6(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bKB:function bKB(d,e){this.a=d
this.b=e},
ZO:function ZO(d){this.a=d},
cyY:function cyY(d,e){this.a=d
this.b=e},
OK:function OK(d){this.a=d},
aee:function aee(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
c_w:function c_w(d){this.a=d},
c_x:function c_x(d,e){this.a=d
this.b=e},
c_y:function c_y(d){this.a=d},
c_z:function c_z(d){this.a=d},
c_B:function c_B(d){this.a=d},
c_A:function c_A(d,e,f){this.a=d
this.b=e
this.c=f},
Rs:function Rs(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_W:function b_W(d,e){this.a=d
this.b=e},
b_T:function b_T(d){this.a=d},
b_V:function b_V(d){this.a=d},
b_U:function b_U(d){this.a=d},
b_X:function b_X(d){this.a=d},
dAl(d){return new C.w6(d,A.E(y.N,y.F),new A.ab(A.jk(0,0),0,!1))},
d0G(d){var x,w=J.a6(d)
if(w.gY(d))return null
x=w.dq(d,new C.cUg(),y.N).by(0)
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
bFb:function bFb(){},
bFc:function bFc(d){this.a=d},
bF9:function bF9(){},
bFa:function bFa(){},
bFd:function bFd(d,e){this.a=d
this.b=e},
bFe:function bFe(d){this.a=d},
bF8:function bF8(d){this.a=d},
bFh:function bFh(){},
bFi:function bFi(){},
bFf:function bFf(){},
bFg:function bFg(){},
cUg:function cUg(){},
a_N(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_N=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a4(D.bZN)
x=1
break}x=3
return A.d(A.bV(null,new C.cTC(A.dp(h,0,A.eu(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_N)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(K.wy(d,e,f,u.c,u.d,g,t),$async$a_N)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_N,w)},
B7:function B7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTC:function cTC(d){this.a=d},
cTB:function cTB(d,e){this.a=d
this.b=e},
cWa(d,e,f,g,h,i,j,k,l){return new C.aox(g,d,k,h,i,e,j,l,f,null)},
aox:function aox(d,e,f,g,h,i,j,k,l,m){var _=this
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
b08:function b08(){},
b05:function b05(d){this.a=d},
b07:function b07(d){this.a=d},
b06:function b06(d){this.a=d},
cGZ(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ae)
v=new A.b7(16,16)
u=d[x]
w.push(new A.bJ(1,B.at,A.w(t,A.y(A.a([A.h(u.a,1,B.a1,t,t,B.ce,t,t),B.aR,A.h(u.b,t,t,t,t,B.bi,B.a6,t)],s),B.u,B.h,B.l),B.r,t,t,new A.O(B.a5,t,t,new A.cJ(v,v,v,v),t,t,B.z),t,t,t,D.aub,t,t,t),t))
B.e.n(r,w)}return A.M(r,B.u,B.h,B.l,0,t)},
alc(d,e,f){var x,w=null
if(f){x=A.fY(w,w,w,w,w,w,w,w,w,B.x,w,w,w,w,B.ab,B.c4,w,w,B.df,w)
x=new A.am(A.ht(A.h(d,w,w,w,w,w,w,w),e,x),w)}else{x=A.cc(B.x,w,w,B.t,w,w,B.ab,w,w,B.df)
x=new A.am(A.bD(A.h(d,w,w,w,w,w,w,w),e,x),w)}return A.aG(x,52,w)},
d_D(d,e,f,g){var x=null,w=y.p,v=A.a([new A.dl(1,B.bc,A.h(d,x,x,x,x,B.ce,B.a6,x),x)],w)
if(g)B.e.n(v,A.a([B.dM,D.Po],w))
v=A.a([new A.cg(d,76,e,!1,!0,x),B.aD,A.M(v,B.u,B.h,B.I,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aR,A.h(f,x,x,x,x,B.L,B.a6,x)],w))
return new A.bB(B.av,x,B.aC,B.y,A.a([new A.S(B.iM,A.bG(A.y(v,B.u,B.h,B.l),x,x),x),D.bPf],w),x)},
cGG(d,e){var x,w,v=null,u=A.aU(d,B.dP,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a0)
w.push(e[x])
B.e.n(s,w)}return A.bE(!0,new A.e7(new A.aP(0,1/0,0,u.a.b*0.9),A.dU(A.y(s,B.F,B.h,B.l),B.y,v,B.ak,v,B.au),v),v,B.Z,!1)},
acC:function acC(d){this.a=d},
bQJ:function bQJ(d){this.a=d},
d3A(d){var x,w,v,u
for(x=new A.cf(d),w=y.E,x=new A.aj(x,x.gA(0),w.i("aj<V.E>")),w=w.i("V.E"),v=0;x.q();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDw[B.j.aC(v,5)]},
cW9(d,e,f,g,h,i,j){return new C.aow(d,i,f,e,g,j,h,null)},
zA:function zA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aow:function aow(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_Z:function b_Z(d,e){this.a=d
this.b=e},
b0_:function b0_(d,e){this.a=d
this.b=e},
b01:function b01(){},
b00:function b00(d){this.a=d},
b_Y:function b_Y(d,e){this.a=d
this.b=e},
Rt:function Rt(d,e){this.c=d
this.a=e},
Kt:function Kt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeZ:function aeZ(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c8D:function c8D(d,e){this.a=d
this.b=e},
bpb:function bpb(d,e){this.a=d
this.b=e},
aYM:function aYM(){},
aYN:function aYN(){},
am6:function am6(){},
IE:function IE(){},
b0E:function b0E(d,e){this.a=d
this.b=e},
acB:function acB(){},
d7r(d,e,f,g,h,i,j,k){return new C.a5P(A.dM0(C.dMI(),i,j),d,g,h,e,A.alA(e),f,i.i("@<0>").b7(j).b7(k).i("a5P<1,2,3>"))},
bk2(d,e,f,g,h,i,j,k,l,m){return new A.xX(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xX<1,2>"))},
a5P:function a5P(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,P,Q,R,F,S
J=c[1]
A=c[0]
B=c[2]
G=c[383]
H=c[180]
I=c[336]
K=c[156]
E=c[239]
L=c[172]
M=c[170]
N=c[157]
O=c[432]
C=a.updateHolder(c[123],C)
D=c[234]
P=c[270]
Q=c[381]
R=c[396]
F=c[232]
S=c[404]
C.IA.prototype={
gaq(d){return this.c}}
C.O6.prototype={
t(d){var x=null,w=A.W(18),v=A.W(18)
return A.eZ(!1,w,!0,new A.S(B.h1,A.y(A.a([A.w(x,A.b4(this.c,$.ay,x,x,26),B.r,x,x,new A.O(B.a5,x,x,v,x,x,B.z),x,58,x,x,x,x,58),B.aD,A.h(this.d,x,x,x,x,B.kj,x,x)],y.p),B.u,B.h,B.I),x),x,!0,x,x,x,x,x,x,x,x,new C.bKB(this,d),x,x,x,x,x,x,x)}}
C.ZO.prototype={
t(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwP[x]
v=new A.b7(14,14)
s.push(A.eZ(!1,new A.cJ(v,v,v,v),!0,new A.S(B.q7,A.asW(w,B.jE,u,u),u),u,!0,u,u,u,u,u,u,u,u,new C.cyY(d,w),u,u,u,u,u,u,u))}return new A.S(D.asB,A.y(A.a([D.c7S,B.S,A.a3H(1,s,4,8,8,u,B.e7,!0)],t),B.G,B.h,B.I),u)}}
C.OK.prototype={
P(){return new C.aee(new A.aH(B.ap,$.aa()),D.ig)}}
C.aee.prototype={
ad(){this.ao()
this.HV("")},
m(){var x=this.d
x.a_$=$.aa()
x.X$=0
this.a6()},
HV(d){return this.bhe(d)},
bhe(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HV=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.c_w(s))
v=3
m=B.f.C(d)
l=m.length===0
r=l?"trending":"search"
k=A.p(r)
q=A.E(y.N,y.z)
J.b3(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b3(q,"limit","24")
J.b3(q,"rating","pg")
l=!l
if(l)J.b3(q,"q",m)
if(l)J.b3(q,"lang","pt")
p=A.ajL("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aVC(p,null),$async$HV)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bm.j9(0,A.jh(A.jf(q.e)).bI(0,q.w),null)),"data"))
s.p(new C.c_x(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.c_y(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.c_z(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HV,w)},
t(d){var x=this,w=null,v=A.aU(d,w,y.w).w,u=A.cr(w,B.a9,!1,w,!0,B.y,w,A.ct(),x.d,w,w,w,w,w,2,D.aF0,B.Y,!0,w,!0,w,!1,w,B.aB,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTQ(),w,!1,w,w,!1,w,!0,w,B.ak,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.ax,w,B.b2,w,B.rY,w,w),t=x.r
if(t!=null)t=A.bG(A.h(t,w,w,w,w,B.mw,B.a6,w),w,w)
else t=x.f?D.bY_:M.ba2(D.bYn,new C.c_B(x),x.e.length,w,w,!1)
return A.aG(new A.S(D.asz,A.y(A.a([u,B.ad,A.a4(t,1),B.aD,D.ad8],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.Rs.prototype={
t(d){var x,w,v,u,t,s=this,r=null,q=A.aU(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b2(s.c,"asset:"))return A.asW(B.f.bE(s.c,6),B.jE,120,120)
if(p==="image"||p==="gif")return A.cG(r,A.hX(A.W(16),new A.e7(new A.aP(0,q,0,320),A.jv(s.c,new C.b_U(q),B.bv,r,new C.b_V(q),r,r),r),B.bg),B.Y,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_W(s,d),r,r,r,r,r,r,!1,B.aI)
p=A.W(16)
x=s.f
w=x?$.ay:B.a5
v=A.W(16)
u=A.b4(O.OS,x?B.t:$.ay,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aI(r,r,x?B.t:B.x,r,r,r,r,r,r,r,r,13,r,r,B.E,r,r,!0,r,r,r,r,r,r,r,r),r,r)
return A.eZ(!1,p,!0,A.w(r,A.M(A.a([u,B.aa,new A.dl(1,B.bc,t,r),B.bf,A.b4(I.vm,x?B.t:B.V,r,r,18)],y.p),B.u,B.h,B.I,0,r),B.r,r,new A.aP(0,q,0,1/0),new A.O(w,r,r,v,r,r,B.z),r,r,r,D.as5,r,r,r),r,!0,r,r,r,r,r,r,r,r,new C.b_X(s),r,r,r,r,r,r,r)},
gaq(d){return this.e}}
C.w6.prototype={
d0(){var x=this,w=y.T,v=A.eS(x).G(A.cA($.bb(),new C.bFb(),y.D,w),w)
A.eS(x).NQ(new C.bFc(x))
if(v==null)return B.a9
w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.M_(0,"typing:"+x.x,B.ys).byt(new C.bFd(x,v),"typing")
w.PK(0)
x.y=w
x.Q=A.rn(B.hw,new C.bFe(x))
return B.a9},
akr(){var x,w=this,v=w.z
v.eg(v,new C.bF8(new A.ab(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c5(v,v.r,v.e,A.u(v).i("c5<2>"));v.q();)x.push(v.d.a)
if(x.length!==J.aS(w.gZ(0))||!B.e.e5(x,J.dnW(w.gZ(0))))w.sZ(0,x)},
acO(d){var x,w=this,v=w.y,u=A.eS(w).a0(0,$.bb(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ab(Date.now(),0,!1)
if(x.cc(w.as).a<2e6)return
w.as=x
v.aeu(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.H2).cH(new C.bFh(),new C.bFi(),y.H)},
cY(d){var x=this.y,w=A.eS(this).a0(0,$.bb(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ab(A.jk(0,0),0,!1)
x.aeu(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.H2).cH(new C.bFf(),new C.bFg(),y.H)}}
C.B7.prototype={}
C.aox.prototype={
t(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cg(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.dl(1,B.bc,A.h(s.c,1,B.a1,r,r,B.ac,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.dM,D.Po],x))
w=A.a([A.M(w,B.u,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uU,A.w(r,A.h(v,1,r,r,r,B.jm,r,r),B.r,r,r,new A.O(B.cL,r,r,u,r,r,B.z),r,r,r,B.Db,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aI(r,r,B.V,r,r,r,r,r,r,r,r,13,r,r,B.b0,r,r,!0,r,r,r,r,r,r,r,r),r,r))}t=A.M(A.a([q,B.aj,A.a4(A.y(w,B.G,B.h,B.I),1)],x),B.u,B.h,B.l,0,r)
q=A.a([new A.d5(0,B.bl,B.x.c7(0.06),B.Gv,14)],y.V)
w=A.aU(d,B.b4,y.w).w
v=new C.b08().$3(B.Ek,"Voltar",new C.b05(d))
u=s.r
v=A.a([v,B.aj,A.a4(u==null?t:A.aN(t,u,r),1)],x)
B.e.n(v,A.a([B.aj,A.Eq(A.w(B.J,R.El,B.r,r,r,B.bG,r,44,r,r,r,r,44),r,new C.b06(s),new C.b07(s),r,D.bPb,"Mais op\xe7\xf5es",y.N)],x))
return A.w(r,A.y(A.a([A.M(v,B.u,B.h,B.l,0,r)],x),B.F,B.h,B.I),B.r,r,r,new A.O(B.t,r,r,B.tJ,q,r,B.z),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gaq(d){return this.c}}
C.acC.prototype={
t(d){var x=null
return A.b9(x,!0,x,A.cG(x,A.w(x,B.h9,B.r,x,x,new A.O(B.x,x,x,x,x,x,B.am),x,44,x,x,x,x,44),B.Y,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bQJ(d),x,x,x,x,x,x,!1,B.aI),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x)}}
C.zA.prototype={
t(d){var x=null,w=A.aU(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.x:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(E.N5,A.h(v,x,x,x,x,A.aI(x,x,C.d3A(v),x,x,x,x,x,x,x,x,12,x,x,B.E,x,x,!0,x,x,x,x,x,x,x,x),x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aI(x,x,s?B.t:B.x,x,x,x,x,x,x,x,x,15,x,x,B.bk,x,1.4,!0,x,x,x,x,x,x,x,x),x,x))
return new A.e7(new A.aP(0,w.a.a*0.78,0,1/0),A.w(x,A.y(o,B.G,B.h,B.I),B.r,x,x,new A.O(r,x,x,new A.cJ(F.yl,F.yl,new A.b7(q,q),new A.b7(p,p)),x,x,B.z),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.aow.prototype={
aic(d){if(!N.GS(this.c.a.a)){d.O(y.q).f.a4(D.bZk)
return}this.d.$0()},
t(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aN(A.w(B.J,B.qk,B.r,t,t,B.bG,t,44,t,t,t,t,44),u.e,t),B.aa],s))
x=A.W(24)
r.push(A.a4(A.w(B.bh,A.cr(t,B.a9,!1,t,!0,B.y,t,A.ct(),u.c,t,t,t,t,t,2,A.iV(t,B.aS,t,B.Z,t,t,t,t,!0,B.aS,t,t,t,t,t,t,!1,t,t,t,t,B.aS,t,t,t,t,t,t,t,t,B.l6,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.Y,!0,t,!0,t,!1,t,B.aB,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_Z(u,d),t,!1,t,t,!1,t,!0,t,B.ak,t,t,t,t,t,t,t,t,t,t,t,B.eI,!0,B.ax,t,B.b2,t,B.a9L,t,t),B.r,t,t,new A.O(B.a5,t,t,x,t,t,B.z),t,48,t,B.bZ,t,t,t),1))
r.push(B.aa)
r.push(A.b9(t,!0,t,A.aN(A.w(B.J,D.aDF,B.r,t,t,B.bG,t,44,t,t,t,t,44),new C.b0_(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t))
w=A.M(r,B.u,B.h,B.l,0,t)
r=A.a([new A.d5(0,B.bl,B.x.c7(0.12),B.k9,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aG(A.a4U(B.y,new C.b00(u),v,t,B.jC,B.bQ,new C.b01()),34,t),B.ad],s))
x.push(w)
return A.w(t,A.bE(!0,new A.S(B.hA,A.y(x,B.F,B.h,B.I),t),t,D.arH,!1),B.r,t,t,new A.O(B.t,t,t,B.pl,r,t,B.z),t,t,t,t,t,t,t)}}
C.Rt.prototype={
t(d){var x=null,w=this.c
return A.ana(B.f9,w==null?D.bXp:new A.S(D.asE,A.bG(A.h(w,x,x,x,x,B.jp,x,x),x,x),x),B.ca,B.aN)}}
C.Kt.prototype={
P(){return new C.aeZ()}}
C.aeZ.prototype={
ad(){var x,w=this
w.ao()
x=w.a
w.e=x.d
x.c.am(0,w.ga1o())},
bh(d){var x,w,v=this
v.bC(d)
x=d.c
if(x!==v.a.c){w=v.ga1o()
x.a2(0,w)
v.a.c.am(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a2(0,this.ga1o())
this.a6()},
aTT(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbz(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c8D(w,x))},
b6x(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aU(x,null,y.w).w
w=this.a
if(x.ax)w.c.hf(0)
else w.c.i4(0,B.ex,S.CN)},
t(d){var x,w,v,u=this,t=null,s=B.j.ah(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iY(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.w(B.J,D.aDz,B.r,t,t,D.afG,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bR(B.x,2)
r.push(A.cd(t,A.w(B.J,A.h(""+s,t,t,t,t,B.kj,t,t),B.r,t,B.lr,new A.O(B.t,t,v,x,t,t,B.z),t,20,t,B.D9,t,t,t),t,t,t,-6,-6,t))}q.push(A.cd(16,A.b9(t,!0,t,A.aN(new A.bB(B.av,t,B.aC,B.r,r,t),u.gb6w(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t),t,t,t,20,t,t))}return new A.bB(B.av,t,B.aC,B.y,q,t)}}
C.bpb.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aYM.prototype={
$1(d){return A.mZ(d,null,!0,null,null,y.S,y.z)},
gX9(d){return D.ah5},
ayq(d,e,f,g,h){return this.gX9(this).$3$1(e,f,g,h)}}
C.aYN.prototype={
$3$1(d,e,f,g){return C.d7r(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.am6.prototype={}
C.IE.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b0E(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.acB.prototype={}
C.a5P.prototype={}
var z=a.updateTypes(["~()","ZO(N)","OK(N)","D<~>(c)","t<c>()","w6(c)","xX<0^,1^>(0^(){$allTransitiveDependencies!z<hb>?,argument!L?,dependencies!z<hb>?,from!kT?,isAutoDispose!C,name!c?,retry!bx?(v,L)?})<fq<1^>,L?>"])
C.cNP.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.at6,A.y(A.a([A.M(A.a([new C.O6(B.jZ,"Foto","photo",x),new C.O6(D.aC7,"Ficheiro","file",x),new C.O6(P.kF,"Sticker","sticker",x),new C.O6(D.aC_,"GIF","gif",x)],w),B.u,B.a0O,B.l,0,x)],w),B.u,B.h,B.I),x)},
$S:70}
C.cNQ.prototype={
$1(d){return D.cp6},
$S:z+1}
C.cNR.prototype={
$1(d){return D.cmv},
$S:z+2}
C.bKB.prototype={
$0(){return A.an(this.b,!1).ar(this.a.e)},
$S:0}
C.cyY.prototype={
$0(){return A.an(this.a,!1).ar(this.b)},
$S:0}
C.c_w.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.c_x.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bi(this.b,y.P),v=A.u(w),w=new A.aj(w,w.gA(w),v.i("aj<V.E>")),u=y.f,v=v.i("V.E");w.q();){t=w.d
x=t==null?v.a(t):t
J.bn(s,new A.X(A.a0(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a0(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.c_y.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.c_z.prototype={
$0(){return this.a.f=!1},
$S:0}
C.c_B.prototype={
$2(d,e){var x=null,w=this.a
return A.eZ(!1,x,!0,A.hX(A.W(10),A.jv(w.e[e].a,x,B.bv,x,x,x,x),B.bg),x,!0,x,x,x,x,x,x,x,x,new C.c_A(w,d,e),x,x,x,x,x,x,x)},
$S:1332}
C.c_A.prototype={
$0(){return A.an(this.b,!1).ar(this.a.e[this.c].b)},
$S:0}
C.b_W.prototype={
$0(){var x=y.H
return A.an(this.b,!1).h3(A.tv(new C.b_T(this.a),null,x),x)},
$S:0}
C.b_T.prototype={
$1(d){var x=null
return A.lm(A.cVU(B.an,x,B.t,x),B.an,A.bG(H.cXa(B.Z,A.on(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1333}
C.b_V.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1334}
C.b_U.prototype={
$3(d,e,f){var x=null
return A.w(x,D.aDM,B.r,B.a5,x,x,x,120,x,x,x,x,this.a)},
$S:72}
C.b_X.prototype={
$0(){return A.zc(A.dA(this.a.c,0,null),B.qp,null)},
$S:0}
C.bFb.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bFc.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aI(0)
x=w.y
w.y=null
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y3(x).cH(new C.bF9(),new C.bFa(),y.H)}},
$S:0}
C.bF9.prototype={
$1(d){},
$S:119}
C.bFa.prototype={
$1(d){},
$S:13}
C.bFd.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dY(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.x(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.x(t.h(0,"name"))
x=u==null?null:B.f.C(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.X(v,new A.ab(Date.now(),0,!1).ea(5e6)))}u.akr()},
$S:226}
C.bFe.prototype={
$1(d){return this.a.akr()},
$S:58}
C.bF8.prototype={
$2(d,e){return e.b.f3(this.a)},
$S:1335}
C.bFh.prototype={
$1(d){},
$S:278}
C.bFi.prototype={
$1(d){},
$S:13}
C.bFf.prototype={
$1(d){},
$S:278}
C.bFg.prototype={
$1(d){},
$S:13}
C.cUg.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:26}
C.cTC.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v]
t=B.f.C(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.IF,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r)
p.push(A.jp(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDx,r,r,r,r,new C.cTB(d,u),!1,r,r,r,r,r,s,r,t,r,E.Pn,r))}return A.bE(!0,new A.S(D.asC,A.y(A.a([D.cay,B.ao,D.cbz,B.M,new A.dl(1,B.bc,A.d4(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.I),r),r,B.Z,!0)},
$S:32}
C.cTB.prototype={
$0(){return A.an(this.a,!1).ar(this.b)},
$S:0}
C.b08.prototype={
$3(d,e,f){var x=null
return A.kE(A.aN(A.w(B.J,d,B.r,x,x,B.bG,x,44,x,x,x,x,44),f,x),x,e)},
$S:1336}
C.b05.prototype={
$0(){return A.iL(this.a,!1)},
$S:0}
C.b07.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b06.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.I)(x),++u){t=x[u].a
r.push(A.bpa(A.h(t,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bP3)
return r},
$S:61}
C.bQJ.prototype={
$0(){return A.an(this.a,!1).bi()},
$S:0}
C.b_Z.prototype={
$1(d){return this.a.aic(this.b)},
$S:3}
C.b0_.prototype={
$0(){return this.a.aic(this.b)},
$S:0}
C.b01.prototype={
$2(d,e){return B.aa},
$S:121}
C.b00.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bR(B.x,1.5)
return A.aN(A.w(B.J,A.h(w.w[e],x,x,x,x,B.dx,x,x),B.r,x,x,new A.O(B.t,x,u,v,x,x,B.z),x,34,x,B.cF,x,x,x),new C.b_Y(w,e),x)},
$S:196}
C.b_Y.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c8D.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b0E.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("IE.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.aee.prototype,"gaTQ","HV",3)
w(C,"dNG","dAl",5)
v(C.w6.prototype,"giI","d0",4)
var t
v(t=C.aeZ.prototype,"ga1o","aTT",0)
v(t,"gb6w","b6x",0)
u(C,"dMI",1,function(){return{$allTransitiveDependencies:B.cK,argument:B.cK,dependencies:B.cK,from:B.cK,isAutoDispose:B.cK,name:B.cK,retry:B.cK}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bk2",function(d,e,f,g,h,i,j,k){return C.bk2(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bk2(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bk2(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.L,[C.IA,C.B7,C.aYM,C.aYN,C.am6])
w(A.bv,[C.cNP,C.cNQ,C.cNR,C.b_T,C.b_V,C.b_U,C.bFb,C.bF9,C.bFa,C.bFd,C.bFe,C.bFh,C.bFi,C.bFf,C.bFg,C.cUg,C.cTC,C.b08,C.b07,C.b06,C.b_Z])
w(A.H,[C.O6,C.ZO,C.Rs,C.aox,C.acC,C.zA,C.aow,C.Rt])
w(A.bN,[C.bKB,C.cyY,C.c_w,C.c_x,C.c_y,C.c_z,C.c_A,C.b_W,C.b_X,C.bFc,C.cTB,C.b05,C.bQJ,C.b0_,C.b_Y,C.c8D,C.b0E])
w(A.G,[C.OK,C.Kt])
w(A.Z,[C.aee,C.aeZ])
w(A.cM,[C.c_B,C.bF8,C.b01,C.b00])
v(C.w6,A.fq)
v(C.bpb,A.fj)
v(C.acB,A.kT)
v(C.IE,C.acB)
v(C.a5P,C.IE)
x(C.acB,C.am6)})()
A.bq(b.typeUniverse,JSON.parse('{"ZO":{"H":[],"e":[],"f":[]},"OK":{"G":[],"e":[],"f":[]},"O6":{"H":[],"e":[],"f":[]},"aee":{"Z":["OK"]},"Rs":{"H":[],"e":[],"f":[]},"w6":{"fq":["t<c>"]},"aox":{"H":[],"e":[],"f":[]},"acC":{"H":[],"e":[],"f":[]},"Kt":{"G":[],"e":[],"f":[]},"zA":{"H":[],"e":[],"f":[]},"aow":{"H":[],"e":[],"f":[]},"Rt":{"H":[],"e":[],"f":[]},"aeZ":{"Z":["Kt"]},"IE":{"kT":[],"hb":[],"Hd":[],"lN":[]},"a5P":{"IE":["1","2","2","3","2","xX<1,2>"],"kT":[],"hb":[],"Hd":[],"lN":[],"IE.0":"1"}}'))
A.PZ(b.typeUniverse,JSON.parse('{"am6":5,"acB":6}'))
var y=(function rtii(){var x=A.B
return{D:x("cI"),E:x("cf"),V:x("r<d5>"),X:x("r<pE<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dC"),S:x("fq<@>"),F:x("+(c,ab)"),C:x("B7"),N:x("c"),q:x("di"),z:x("@"),r:x("v"),B:x("IA?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cb7=new A.F("Powered by GIPHY",null,G.ID,null,null,null,null,null,null,null)
D.ad8=new A.dd(B.dQ,null,null,D.cb7,null)
D.afG=new A.O(B.x,null,null,null,B.ie,null,B.am)
D.KM=new C.aYM()
D.ah5=new C.aYN()
D.arH=new A.a3(0,0,0,24)
D.as5=new A.a3(12,10,14,10)
D.asz=new A.a3(16,16,16,12)
D.asB=new A.a3(16,16,16,24)
D.asC=new A.a3(16,16,16,8)
D.asE=new A.a3(16,2,16,8)
D.at6=new A.a3(20,18,20,24)
D.aub=new A.a3(8,12,8,12)
D.aC_=new A.aZ(57404,"HeroiconsSolid",null,!1)
D.aC7=new A.aZ(57436,"HeroiconsSolid",null,!1)
D.Po=new A.b8(B.hE,18,B.bx,null,"Verificado",null)
D.aDx=new A.b8(B.fk,null,B.V,null,null,null)
D.aBP=new A.aZ(57347,"HeroiconsSolid",null,!1)
D.aDz=new A.b8(D.aBP,20,B.t,null,null,null)
D.aDF=new A.b8(B.nY,20,B.t,null,null,null)
D.aDM=new A.b8(B.jZ,null,B.V,null,null,null)
D.aCP=new A.b8(B.vo,null,null,null,null,null)
D.aF0=new A.dG(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCP,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwP=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bz7=x([],A.B("r<db7>"))
D.bzb=x([],A.B("r<+(c,~())>"))
D.ig=x([],y.L)
D.amp=new A.Y(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.B)
D.and=new A.Y(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.B)
D.aog=new A.Y(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.B)
D.amQ=new A.Y(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.B)
D.bDw=x([D.amp,B.cT,D.and,D.aog,D.amQ],A.B("r<Y>"))
D.bP3=new A.jN("report",!0,Q.aaU,null,A.B("jN<c>"))
D.bPb=new C.bpb(1,"under")
D.cly=new C.acC(null)
D.bPf=new A.eU(null,0,0,null,null,null,D.cly,null)
D.bXp=new A.bX(1/0,null,null,null)
D.bY_=new L.Bj(12,3,null)
D.bYn=new A.Bm(3,6,6,1,null)
D.caP=new A.F("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null)
D.bZk=new A.bH(D.caP,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.y,null)
D.ccs=new A.F("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null)
D.bZp=new A.bH(D.ccs,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.y,null)
D.c9A=new A.F("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null)
D.bZN=new A.bH(D.c9A,null,null,null,null,null,null,null,null,null,null,null,null,B.U,!1,null,null,null,B.y,null)
D.c7S=new A.F("Stickers",null,B.ac,null,null,null,null,null,null,null)
D.cay=new A.F("Que mensagem queres denunciar?",null,B.fS,null,null,null,null,null,null,null)
D.cbz=new A.F("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null)
D.cmv=new C.OK(null)
D.cp6=new C.ZO(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e0r","CM",()=>D.KM.ayq(0,C.dNG(),A.B("w6"),A.B("t<c>"),y.N))})()};
(a=>{a["mnCqw5rQzevHle0QvuisJ8EwcQw="]=a.current})($__dart_deferred_initializers__);