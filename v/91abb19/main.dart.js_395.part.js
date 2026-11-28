((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,L,E,M,N,O,B={
dCU(){var x,w=$.Q5(),v=J.nH(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aY(C.j.hX(w.r_(256),16),2,"0")
return C.e.hO(v)},
aU4(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aU4=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.T()
q=r.b
q===$&&A.b()
q=q.gbE().e.a
u=(q==null?null:q.r).a
t=C.f.p(e,".")?C.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.dCU()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.R("chat-attachments")
x=3
return A.d(q.rf(s,d,new A.uY(!1,f)),$async$aU4)
case 3:r=r.b.ay
r===$&&A.b()
v=r.R("chat-attachments").Cm(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aU4,w)},
d9o(d){var x,w=C.e.ga5(d.split(".")).toLowerCase()
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
rD(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rD=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.co(null,new B.cK1(),!1,d,!0,!1,null,l),$async$rD)
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
return A.d(new A.lD().YV(85,2048,C.fq),$async$rD)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kr(),$async$rD)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.fs(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aU4(t,s,B.d9o(s)),$async$rD)
case 12:v=new j.In(f,r,s)
x=1
break
case 7:x=13
return A.d($.ddH().y5(D.bA2,null,null),$async$rD)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kr(),$async$rD)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a4(D.c_w)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.c4(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbtA(p))
if(C.f.fs(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aU4(t,l,B.d9o(l)),$async$rD)
case 15:v=new j.In(f,r,l)
x=1
break
case 8:x=16
return A.d(A.co(null,new B.cK2(),!1,d,!0,!1,null,l),$async$rD)
case 16:n=f
v=n==null?null:new B.In("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.co(null,new B.cK3(),!1,d,!0,!0,null,l),$async$rD)
case 17:m=f
v=m==null?null:new B.In(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rD,w)},
In:function In(d,e,f){this.a=d
this.b=e
this.c=f},
cK1:function cK1(){},
cK2:function cK2(){},
cK3:function cK3(){},
NM:function NM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bIE:function bIE(d,e){this.a=d
this.b=e},
Z7:function Z7(d){this.a=d},
cvH:function cvH(d,e){this.a=d
this.b=e},
Ol:function Ol(d){this.a=d},
ady:function ady(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bY2:function bY2(d){this.a=d},
bY3:function bY3(d,e){this.a=d
this.b=e},
bY4:function bY4(d){this.a=d},
bY5:function bY5(d){this.a=d},
bY7:function bY7(d){this.a=d},
bY6:function bY6(d,e,f){this.a=d
this.b=e
this.c=f},
QS:function QS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZI:function aZI(d,e){this.a=d
this.b=e},
aZF:function aZF(d){this.a=d},
aZH:function aZH(d){this.a=d},
aZG:function aZG(d){this.a=d},
aZJ:function aZJ(d){this.a=d},
dv8(d){return new B.w4(d,A.C(y.N,y.F),new A.ad(A.iZ(0,0),0,!1))},
cXd(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dz(d,new B.cPN(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w4:function w4(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bDh:function bDh(){},
bDi:function bDi(d){this.a=d},
bDf:function bDf(){},
bDg:function bDg(){},
bDj:function bDj(d,e){this.a=d
this.b=e},
bDk:function bDk(d){this.a=d},
bDe:function bDe(d){this.a=d},
bDn:function bDn(){},
bDo:function bDo(){},
bDl:function bDl(){},
bDm:function bDm(){},
cPN:function cPN(){},
a_6(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_6=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a4(D.bZY)
x=1
break}x=3
return A.d(A.co(null,new B.cP9(A.e3(h,0,A.eT(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_6)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(L.wt(d,e,f,u.c,u.d,g,t),$async$a_6)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_6,w)},
Bb:function Bb(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cP9:function cP9(d){this.a=d},
cP8:function cP8(d,e){this.a=d
this.b=e},
cRy(d,e,f,g,h,i,j){return new B.anD(f,d,i,j,g,h,e,null)},
anD:function anD(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aZP:function aZP(){},
aZM:function aZM(d){this.a=d},
aZO:function aZO(d){this.a=d},
aZN:function aZN(){},
d_8(d){var x,w,v,u
for(x=new A.cc(d),w=y.V,x=new A.ak(x,x.gA(0),w.i("ak<U.E>")),w=w.i("U.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bEv[C.j.ao(v,5)]},
zI:function zI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
QU:function QU(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aZK:function aZK(d,e){this.a=d
this.b=e},
aZL:function aZL(d,e){this.a=d
this.b=e},
QW:function QW(d,e){this.c=d
this.a=e},
Kd:function Kd(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeh:function aeh(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c5P:function c5P(d,e){this.a=d
this.b=e},
bna:function bna(d,e){this.a=d
this.b=e},
aXz:function aXz(){},
aXA:function aXA(){},
ali:function ali(){},
Iq:function Iq(){},
b_i:function b_i(d,e){this.a=d
this.b=e},
abQ:function abQ(){},
d2M(d,e,f,g,h,i,j,k){return new B.a4Z(A.dGD(B.dHk(),i,j),d,g,h,e,A.akK(e),f,i.i("@<0>").b6(j).b6(k).i("a4Z<1,2,3>"))},
biA(d,e,f,g,h,i,j,k,l,m){return new A.xP(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("xP<1,2>"))},
a4Z:function a4Z(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,P,Q,R,S,T,U,V,F
J=c[1]
A=c[0]
C=c[2]
G=c[397]
H=c[377]
I=c[175]
K=c[329]
L=c[152]
E=c[233]
M=c[268]
N=c[183]
O=c[423]
B=a.updateHolder(c[118],B)
D=c[242]
P=c[375]
Q=c[388]
R=c[401]
S=c[251]
T=c[263]
U=c[179]
V=c[422]
F=c[230]
B.In.prototype={
gaq(d){return this.c}}
B.NM.prototype={
u(d){var x=null,w=A.Y(18),v=A.Y(18)
return A.eF(!1,w,!0,new A.Q(C.ht,A.B(A.a([A.A(x,A.b2(this.c,$.ar,x,x,26),C.r,x,x,new A.M(C.ac,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.aE,A.h(this.d,x,x,x,x,C.hN,x,x,x)],y.p),C.w,C.i,C.K,0,C.v),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bIE(this,d),x,x,x,x,x,x,x)}}
B.Z7.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bxK[x]
v=new A.b5(14,14)
s.push(A.eF(!1,new A.ch(v,v,v,v),!0,new A.Q(C.qt,A.arT(w,C.kd,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.cvH(d,w),u,u,u,u,u,u,u))}return new A.Q(D.aty,A.B(A.a([D.cer,C.Q,A.So(1,s,4,8,8,u,C.dz,!0)],t),C.G,C.i,C.K,0,C.v),u)}}
B.Ol.prototype={
P(){return new B.ady(new A.aJ(C.ap,$.ac()),D.bzG)}}
B.ady.prototype={
ak(){this.aD()
this.I6("")},
m(){var x=this.d
x.Z$=$.ac()
x.W$=0
this.a6()},
I6(d){return this.bh7(d)},
bh7(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$I6=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bY2(s))
v=3
m=C.f.D(d)
l=m.length===0
r=l?"trending":"search"
k=A.q(r)
q=A.C(y.N,y.z)
J.b6(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b6(q,"limit","24")
J.b6(q,"rating","pg")
l=!l
if(l)J.b6(q,"q",m)
if(l)J.b6(q,"lang","pt")
p=A.aiU("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUs(p,null),$async$I6)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(C.bu.jT(0,A.jb(A.j9(q.e)).bJ(0,q.w),null)),"data"))
s.q(new B.bY3(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.q(new B.bY4(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.bY5(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$I6,w)},
u(d){var x=this,w=null,v=A.aw(d,w,y.w).w,u=A.cJ(w,C.a9,!1,w,!0,C.z,w,A.cL(),x.d,w,w,w,w,w,2,D.aFA,C.a0,!0,w,!0,w,!1,w,C.aH,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTM(),w,!1,w,w,!1,w,!0,w,C.au,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.at,w,C.b6,w,C.td,w,w),t=x.r
if(t!=null)t=A.bO(A.h(t,w,w,w,w,C.k2,C.a6,w,w),w,w)
else t=x.f?D.bYI:N.a2T(w,C.a0,V.a93,new B.bY7(x),x.e.length,w,w,!1)
return A.aI(new A.Q(D.atv,A.B(A.a([u,C.ab,A.a5(t,1),C.aE,D.adG],y.p),C.G,C.i,C.m,0,C.v),w),v.a.b*0.62,w)}}
B.QS.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aw(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b4(s.c,"asset:"))return A.arT(C.f.bD(s.c,6),C.kd,120,120)
if(p==="image"||p==="gif")return A.de(r,A.fX(A.Y(16),new A.ew(new A.aP(0,q,0,320),A.jZ(s.c,new B.aZG(q),C.bS,r,new B.aZH(q),r,r),r),C.b8),C.a0,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aZI(s,d),r,r,r,r,r,r,!1,C.b_)
p=A.Y(16)
x=s.f
w=x?$.ar:C.ac
v=A.Y(16)
u=A.b2(O.P9,x?C.t:$.ar,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,C.a2,r,r,A.aF(r,r,x?C.t:C.A,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eF(!1,p,!0,A.A(r,A.P(A.a([u,C.ai,new A.dx(1,C.be,t,r),C.bl,A.b2(K.vr,x?C.t:C.S,r,r,18)],y.p),C.w,C.i,C.K,0,r,r),C.r,r,new A.aP(0,q,0,1/0),new A.M(w,r,r,v,r,r,C.y),r,r,r,D.asZ,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aZJ(s),r,r,r,r,r,r,r)},
gaq(d){return this.e}}
B.w4.prototype={
d5(){var x=this,w=y.T,v=A.eP(x).H(A.cv($.b8(),new B.bDh(),y.D,w),w)
A.eP(x).Yq(new B.bDi(x))
if(v==null)return C.a9
w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.M0(0,"typing:"+x.x,C.yu).byy(new B.bDj(x,v),"typing")
w.PX(0)
x.y=w
x.Q=A.u3(C.fO,new B.bDk(x))
return C.a9},
ako(){var x,w=this,v=w.z
v.ee(v,new B.bDe(new A.ad(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.ce(v,v.r,v.e,A.u(v).i("ce<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aR(w.ga3(0))||!C.e.e6(x,J.diN(w.ga3(0))))w.sa3(0,x)},
acP(d){var x,w=this,v=w.y,u=A.eP(w).a0(0,$.b8(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ad(Date.now(),0,!1)
if(x.cC(w.as).a<2e6)return
w.as=x
v.aer(0,"typing",A.S(["id",t,"name",d],y.N,y.z),C.H7).cE(new B.bDn(),new B.bDo(),y.H)},
d3(d){var x=this.y,w=A.eP(this).a0(0,$.b8(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ad(A.iZ(0,0),0,!1)
x.aer(0,"typing",A.S(["id",v,"stop",!0],y.N,y.z),C.H7).cE(new B.bDl(),new B.bDm(),y.H)}}
B.Bb.prototype={}
B.anD.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cw(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.h(s.c,1,C.a2,r,r,M.IO,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.h(v,1,C.a2,r,r,A.aF(r,r,s.f?C.cY:C.S,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.P(A.a([q,C.am,A.a5(A.B(w,C.G,C.i,C.K,0,C.v),1)],x),C.w,C.i,C.m,0,r,r)
q=A.a([new A.d_(0,C.bn,C.A.cc(0.06),C.Gx,14)],y.E)
w=A.aw(d,C.b0,y.w).w
v=new B.aZP().$3(C.lJ,"Voltar",new B.aZM(d))
t=s.r
v=A.a([v,C.am,A.a5(t==null?u:A.aU(u,t,r),1)],x)
C.e.n(v,A.a([C.ai,A.Ek(A.A(C.L,Q.Ev,C.r,r,r,C.cu,r,44,r,r,r,r,44),r,new B.aZN(),new B.aZO(s),r,D.bQm,"Mais op\xe7\xf5es",y.N)],x))
return A.A(r,A.B(A.a([A.P(v,C.w,C.i,C.m,0,r,r)],x),C.I,C.i,C.K,0,C.v),C.r,r,r,new A.M(C.t,r,r,r,q,r,C.y),r,r,r,new A.a0(16,w.r.b+10,16,12),r,r,r)},
gaq(d){return this.c}}
B.zI.prototype={
u(d){var x=null,w=A.aw(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.A:C.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.Q(E.Nk,A.h(v,x,x,x,x,A.aF(x,x,B.d_8(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aF(x,x,s?C.t:C.A,x,x,x,x,x,x,x,x,15,x,x,C.bk,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.ew(new A.aP(0,w.a.a*0.78,0,1/0),A.A(x,A.B(o,C.G,C.i,C.K,0,C.v),C.r,x,x,new A.M(r,x,x,new A.ch(F.yn,F.yn,new A.b5(q,q),new A.b5(p,p)),x,x,C.y),x,x,x,new A.a0(14,t,14,10),x,x,x),x)}}
B.QU.prototype={
aic(d){if(!A.ua(this.c.a.a)){d.O(y.q).f.a4(D.c_c)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.n(u,A.a([A.aU(A.A(C.L,C.Pz,C.r,w,w,C.cu,w,44,w,w,w,w,44),x.e,w),C.ai],v))
v=A.Y(999)
u.push(A.a5(A.A(C.bi,A.cJ(w,C.a9,!1,w,!0,C.z,w,A.cL(),x.c,w,w,w,w,w,2,A.j1(w,C.bR,w,C.a_,w,w,w,w,!0,C.bR,w,w,w,w,w,w,!1,w,w,w,w,C.bR,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a0,!0,w,!0,w,!1,w,C.aH,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aZK(x,d),w,!1,w,w,!1,w,!0,w,C.au,w,w,w,w,w,w,w,w,w,w,w,C.fD,!0,C.at,w,C.b6,w,C.aa1,w,w),C.r,w,w,new A.M(C.ac,w,w,v,w,w,C.y),w,44,w,C.bL,w,w,w),1))
u.push(C.ai)
u.push(A.aU(A.A(C.L,D.aII,C.r,w,w,C.cu,w,44,w,w,w,w,44),new B.aZL(x,d),w))
return A.A(w,A.bF(!0,new A.Q(S.ND,A.P(u,C.w,C.i,C.m,0,w,w),w),w,R.Nl,!1),C.r,C.t,w,w,w,w,w,w,w,w,w)}}
B.QW.prototype={
u(d){var x=null,w=this.c
return A.cRg(C.fF,w==null?D.bYd:new A.Q(D.atC,A.bO(A.h(w,x,x,x,x,C.hO,x,x,x),x,x),x),C.cp,C.aD)}}
B.Kd.prototype={
P(){return new B.aeh()}}
B.aeh.prototype={
ak(){var x,w=this
w.aD()
x=w.a
w.e=x.d
x.c.am(0,w.ga1s())},
ba(d){var x,w,v=this
v.bw(d)
x=d.c
if(x!==v.a.c){w=v.ga1s()
x.a_(0,w)
v.a.c.am(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a_(0,this.ga1s())
this.a6()},
aTR(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbA(0).at
v.toString
x=v>300
if(x!==w.d)w.q(new B.c5P(w,x))},
b6U(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aw(x,null,y.w).w
w=this.a
if(x.ax)w.c.hP(0)
else w.c.iI(0,C.er,G.CO)},
u(d){var x,w,v,u=this,t=null,s=C.j.ae(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iR(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.A(C.L,D.aE8,C.r,t,t,D.agl,t,44,t,t,t,t,44)],r)
if(x){x=A.Y(10)
v=A.bA(C.A,2)
r.push(A.cb(t,A.A(C.L,A.h(""+s,t,t,t,t,C.hN,t,t,t),C.r,t,C.ld,new A.M(C.t,t,v,x,t,t,C.y),t,20,t,C.Dc,t,t,t),t,t,t,-6,-6,t))}q.push(A.cb(16,A.ba(t,!0,t,A.aU(new A.bB(C.aA,t,C.aG,C.r,r,t),u.gb6T(),t),!1,t,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,C.a5,t),t,t,t,20,t,t))}return new A.bB(C.aA,t,C.aG,C.z,q,t)}}
B.bna.prototype={
I(){return"PopupMenuPosition."+this.b}}
B.aXz.prototype={
$1(d){return A.mU(d,null,!0,null,null,y.S,y.z)},
gWX(d){return D.ahI},
ayj(d,e,f,g,h){return this.gWX(this).$3$1(e,f,g,h)}}
B.aXA.prototype={
$3$1(d,e,f,g){return B.d2M(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.ali.prototype={}
B.Iq.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.b_i(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.abQ.prototype={}
B.a4Z.prototype={}
var z=a.updateTypes(["~()","Z7(O)","Ol(O)","F<~>(c)","t<c>()","w4(c)","xP<0^,1^>(0^(){$allTransitiveDependencies!z<h2>?,argument!J?,dependencies!z<h2>?,from!kK?,isAutoDispose!y,name!c?,retry!bo?(v,J)?})<fb<1^>,J?>"])
B.cK1.prototype={
$1(d){var x=null,w=y.p
return new A.Q(D.au5,A.B(A.a([A.P(A.a([new B.NM(C.jL,"Foto","photo",x),new B.NM(D.aCE,"Ficheiro","file",x),new B.NM(T.jI,"Sticker","sticker",x),new B.NM(D.aCx,"GIF","gif",x)],w),C.w,C.Gd,C.m,0,x,x)],w),C.w,C.i,C.K,0,C.v),x)},
$S:70}
B.cK2.prototype={
$1(d){return D.cpT},
$S:z+1}
B.cK3.prototype={
$1(d){return D.cn8},
$S:z+2}
B.bIE.prototype={
$0(){return A.ap(this.b,!1).aj(this.a.e)},
$S:0}
B.cvH.prototype={
$0(){return A.ap(this.a,!1).aj(this.b)},
$S:0}
B.bY2.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bY3.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bl(this.b,y.P),v=A.u(w),w=new A.ak(w,w.gA(w),v.i("ak<U.E>")),u=y.f,v=v.i("U.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bt(s,new A.a3(A.a2(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a2(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bY4.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bY5.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bY7.prototype={
$2(d,e){var x=null,w=this.a
return A.eF(!1,x,!0,A.fX(A.Y(10),A.jZ(w.e[e].a,x,C.bS,x,x,x,x),C.b8),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bY6(w,d,e),x,x,x,x,x,x,x)},
$S:351}
B.bY6.prototype={
$0(){return A.ap(this.b,!1).aj(this.a.e[this.c].b)},
$S:0}
B.aZI.prototype={
$0(){var x=y.H
return A.ap(this.b,!1).ib(A.tq(new B.aZF(this.a),null,x),x)},
$S:0}
B.aZF.prototype={
$1(d){var x=null
return A.ku(A.cRi(C.an,x,C.t,x),C.an,A.bO(I.cSF(C.a_,A.tg(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1338}
B.aZH.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1339}
B.aZG.prototype={
$3(d,e,f){var x=null
return A.A(x,D.aEl,C.r,C.ac,x,x,x,120,x,x,x,x,this.a)},
$S:69}
B.aZJ.prototype={
$0(){return A.zb(A.ds(this.a.c,0,null),C.qK,null)},
$S:0}
B.bDh.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:18}
B.bDi.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aL(0)
x=w.y
w.y=null
if(x!=null){w=$.T().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yb(x).cE(new B.bDf(),new B.bDg(),y.H)}},
$S:0}
B.bDf.prototype={
$1(d){},
$S:121}
B.bDg.prototype={
$1(d){},
$S:13}
B.bDj.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e7(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.E(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.E(t.h(0,"name"))
x=u==null?null:C.f.D(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a3(v,new A.ad(Date.now(),0,!1).e9(5e6)))}u.ako()},
$S:207}
B.bDk.prototype={
$1(d){return this.a.ako()},
$S:64}
B.bDe.prototype={
$2(d,e){return e.b.eR(this.a)},
$S:1340}
B.bDn.prototype={
$1(d){},
$S:245}
B.bDo.prototype={
$1(d){},
$S:13}
B.bDl.prototype={
$1(d){},
$S:245}
B.bDm.prototype={
$1(d){},
$S:13}
B.cPN.prototype={
$1(d){return C.e.gM(d.split(" "))},
$S:24}
B.cP9.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v]
t=C.f.D(u.b)
t=A.h(t.length===0?"Anexo":t,2,C.a2,r,r,C.IN,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jj(!1,C.a_,r,r,!0,r,r,r,!0,r,D.aE7,r,r,r,r,new B.cP8(d,u),!1,r,r,r,r,r,s,r,t,r,E.PH,r))}return A.bF(!0,new A.Q(D.atz,A.B(A.a([D.cfu,C.as,D.cak,C.X,new A.dx(1,C.be,A.cX(p,r,r,r,r,!1,C.a1,!0),r)],q),C.G,C.i,C.K,0,C.v),r),r,C.a_,!0)},
$S:46}
B.cP8.prototype={
$0(){return A.ap(this.a,!1).aj(this.b)},
$S:0}
B.aZP.prototype={
$3(d,e,f){var x=null
return A.kT(A.aU(A.A(C.L,d,C.r,x,x,C.cu,x,44,x,x,x,x,44),f,x),x,e)},
$S:1341}
B.aZM.prototype={
$0(){return A.ap(this.a,!1).iy()},
$S:0}
B.aZO.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.aZN.prototype={
$1(d){return D.byE},
$S:57}
B.aZK.prototype={
$1(d){return this.a.aic(this.b)},
$S:3}
B.aZL.prototype={
$0(){return this.a.aic(this.b)},
$S:0}
B.c5P.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
B.b_i.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Iq.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.ady.prototype,"gaTM","I6",3)
w(B,"dIh","dv8",5)
v(B.w4.prototype,"giL","d5",4)
var t
v(t=B.aeh.prototype,"ga1s","aTR",0)
v(t,"gb6T","b6U",0)
u(B,"dHk",1,function(){return{$allTransitiveDependencies:C.cJ,argument:C.cJ,dependencies:C.cJ,from:C.cJ,isAutoDispose:C.cJ,name:C.cJ,retry:C.cJ}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["biA",function(d,e,f,g,h,i,j,k){return B.biA(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.biA(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.biA(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.J,[B.In,B.Bb,B.aXz,B.aXA,B.ali])
w(A.bx,[B.cK1,B.cK2,B.cK3,B.aZF,B.aZH,B.aZG,B.bDh,B.bDf,B.bDg,B.bDj,B.bDk,B.bDn,B.bDo,B.bDl,B.bDm,B.cPN,B.cP9,B.aZP,B.aZO,B.aZN,B.aZK])
w(A.L,[B.NM,B.Z7,B.QS,B.anD,B.zI,B.QU,B.QW])
w(A.bT,[B.bIE,B.cvH,B.bY2,B.bY3,B.bY4,B.bY5,B.bY6,B.aZI,B.aZJ,B.bDi,B.cP8,B.aZM,B.aZL,B.c5P,B.b_i])
w(A.H,[B.Ol,B.Kd])
w(A.a_,[B.ady,B.aeh])
w(A.cQ,[B.bY7,B.bDe])
v(B.w4,A.fb)
v(B.bna,A.fg)
v(B.abQ,A.kK)
v(B.Iq,B.abQ)
v(B.a4Z,B.Iq)
x(B.abQ,B.ali)})()
A.bq(b.typeUniverse,JSON.parse('{"Z7":{"L":[],"e":[],"f":[]},"Ol":{"H":[],"e":[],"f":[]},"NM":{"L":[],"e":[],"f":[]},"ady":{"a_":["Ol"]},"QS":{"L":[],"e":[],"f":[]},"w4":{"fb":["t<c>"]},"anD":{"L":[],"e":[],"f":[]},"Kd":{"H":[],"e":[],"f":[]},"zI":{"L":[],"e":[],"f":[]},"QU":{"L":[],"e":[],"f":[]},"QW":{"L":[],"e":[],"f":[]},"aeh":{"a_":["Kd"]},"Iq":{"kK":[],"h2":[],"H1":[],"lG":[]},"a4Z":{"Iq":["1","2","2","3","2","xP<1,2>"],"kK":[],"h2":[],"H1":[],"lG":[],"Iq.0":"1"}}'))
A.Pu(b.typeUniverse,JSON.parse('{"ali":5,"abQ":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cD"),V:x("cc"),E:x("r<d_>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a4<c,@>"),f:x("a4<@,@>"),w:x("dm"),S:x("fb<@>"),F:x("+(c,ad)"),C:x("Bb"),N:x("c"),q:x("dt"),z:x("@"),r:x("v"),B:x("In?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c9_=new A.D("Powered by GIPHY",null,H.IM,null,null,null,null,null,null,null,null)
D.adG=new A.d0(C.dW,null,null,D.c9_,null)
D.agl=new A.M(C.A,null,null,null,C.i6,null,C.ax)
D.KX=new B.aXz()
D.ahI=new B.aXA()
D.asZ=new A.a0(12,10,14,10)
D.atv=new A.a0(16,16,16,12)
D.aty=new A.a0(16,16,16,24)
D.atz=new A.a0(16,16,16,8)
D.atC=new A.a0(16,2,16,8)
D.au5=new A.a0(20,18,20,24)
D.aCx=new A.aW(57404,"HeroiconsSolid",null,!1)
D.aCE=new A.aW(57436,"HeroiconsSolid",null,!1)
D.aE7=new A.b9(C.fp,null,C.S,null,null,null)
D.aCj=new A.aW(57347,"HeroiconsSolid",null,!1)
D.aE8=new A.b9(D.aCj,20,C.t,null,null,null)
D.aEl=new A.b9(C.jL,null,C.S,null,null,null)
D.aDp=new A.b9(C.vw,null,null,null,null,null)
D.aFA=new A.dO(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aDp,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aII=new A.lE("M12 19V5M5 12l7-7 7 7",18,C.t,2.4,!1,C.cm,null)
D.bxK=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bQh=new A.jJ("report",!0,P.abh,null,A.w("jJ<c>"))
D.byE=x([D.bQh],A.w("r<pD<c>>"))
D.bA2=x([],A.w("r<d6p>"))
D.bzG=x([],y.L)
D.anc=new A.W(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.ao1=new A.W(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.ap5=new A.W(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.anC=new A.W(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bEv=x([D.anc,C.cY,D.ao1,D.ap5,D.anC],A.w("r<W>"))
D.bQm=new B.bna(1,"under")
D.bYd=new A.c4(1/0,null,null,null)
D.bYI=new U.yk(12,3,null)
D.cfG=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bZY=new A.bJ(D.cfG,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.cgL=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.c_c=new A.bJ(D.cgL,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.cf6=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.c_w=new A.bJ(D.cf6,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.z,null)
D.cak=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.T,null,null,null,null,null,null,null,null)
D.cer=new A.D("Stickers",null,C.aj,null,null,null,null,null,null,null,null)
D.cfu=new A.D("Que mensagem queres denunciar?",null,C.ha,null,null,null,null,null,null,null,null)
D.cn8=new B.Ol(null)
D.cpT=new B.Z7(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dVG","CK",()=>D.KX.ayj(0,B.dIh(),A.w("w4"),A.w("t<c>"),y.N))})()};
(a=>{a["0ZfxtD9t3acpx8tXisfGwK3a9ao="]=a.current})($__dart_deferred_initializers__);