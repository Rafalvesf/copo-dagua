((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,I,K,L,M,F,N,O,C={
dH9(){var x,w=$.HS(),v=J.nI(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aT(B.j.hD(w.pv(256),16),2,"0")
return B.e.hx(v)},
aUa(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUa=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Q()
q=r.b
q===$&&A.b()
q=q.gbu().e.a
u=(q==null?null:q.r).a
t=B.f.t(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dH9()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r2(s,d,new A.v4(!1,f)),$async$aUa)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cd(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUa,w)},
ddg(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.bQ(null,new C.cNm(),!1,d,!0,!1,null,l),$async$rG)
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
return A.d(new A.lJ().YP(85,2048,B.fv),$async$rG)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kh(),$async$rG)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fn(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUa(t,s,C.ddg(s)),$async$rG)
case 12:v=new j.It(f,r,s)
x=1
break
case 7:x=13
return A.d($.dhF().xV(D.bz5,null,null),$async$rG)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kh(),$async$rG)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a0(D.bYW)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.cb(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbsj(p))
if(B.f.fn(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUa(t,l,C.ddg(l)),$async$rG)
case 15:v=new j.It(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bQ(null,new C.cNn(),!1,d,!0,!1,null,l),$async$rG)
case 16:n=f
v=n==null?null:new C.It("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bQ(null,new C.cNo(),!1,d,!0,!0,null,l),$async$rG)
case 17:m=f
v=m==null?null:new C.It(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rG,w)},
It:function It(d,e,f){this.a=d
this.b=e
this.c=f},
cNm:function cNm(){},
cNn:function cNn(){},
cNo:function cNo(){},
NT:function NT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJB:function bJB(d,e){this.a=d
this.b=e},
Zl:function Zl(d){this.a=d},
cyZ:function cyZ(d,e){this.a=d
this.b=e},
Ow:function Ow(d){this.a=d},
adB:function adB(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bZt:function bZt(d){this.a=d},
bZu:function bZu(d,e){this.a=d
this.b=e},
bZv:function bZv(d){this.a=d},
bZw:function bZw(d){this.a=d},
bZy:function bZy(d){this.a=d},
bZx:function bZx(d,e,f){this.a=d
this.b=e
this.c=f},
R9:function R9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZR:function aZR(d,e){this.a=d
this.b=e},
aZO:function aZO(d){this.a=d},
aZQ:function aZQ(d){this.a=d},
aZP:function aZP(d){this.a=d},
aZS:function aZS(d){this.a=d},
dzk(d){return new C.w3(d,A.E(y.N,y.F),new A.ac(A.ji(0,0),0,!1))},
d_Z(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dn(d,new C.cTz(),y.N).bx(0)
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
bEc:function bEc(){},
bEd:function bEd(d){this.a=d},
bEa:function bEa(){},
bEb:function bEb(){},
bEe:function bEe(d,e){this.a=d
this.b=e},
bEf:function bEf(d){this.a=d},
bE9:function bE9(d){this.a=d},
bEi:function bEi(){},
bEj:function bEj(){},
bEg:function bEg(){},
bEh:function bEh(){},
cTz:function cTz(){},
a_k(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_k=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a0(D.bZi)
x=1
break}x=3
return A.d(A.bQ(null,new C.cSV(A.dz(h,0,A.et(12,"count",y.r),A.a8(h).c).bx(0)),!1,d,!0,!0,null,y.C),$async$a_k)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wu(d,e,f,u.c,u.d,g,t),$async$a_k)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_k,w)},
B4:function B4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSV:function cSV(d){this.a=d},
cSU:function cSU(d,e){this.a=d
this.b=e},
cVm(d,e,f,g,h,i,j,k,l){return new C.anK(g,d,k,h,i,e,j,l,f,null)},
anK:function anK(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_3:function b_3(){},
b_0:function b_0(d){this.a=d},
b_2:function b_2(d){this.a=d},
b_1:function b_1(d){this.a=d},
cGI(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ae)
v=new A.b6(16,16)
u=d[x]
w.push(new A.bJ(1,B.at,A.x(t,A.z(A.a([A.h(u.a,1,B.a1,t,t,B.c3,t,t),B.aU,A.h(u.b,t,t,t,t,B.be,B.a3,t)],s),B.v,B.h,B.l),B.r,t,t,new A.I(B.a4,t,t,new A.cz(v,v,v,v),t,t,B.x),t,t,t,D.au_,t,t,t),t))
B.e.n(r,w)}return A.O(r,B.v,B.h,B.l,0,t)},
akn(d,e,f){var x,w=null
if(f){x=A.fM(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.aa,B.c6,w,w,B.cY,w)
x=new A.am(A.hi(A.h(d,w,w,w,w,w,w,w),e,x),w)}else{x=A.cc(B.z,w,w,B.t,w,w,B.aa,w,w,B.cY)
x=new A.am(A.bC(A.h(d,w,w,w,w,w,w,w),e,x),w)}return A.aK(x,52,w)},
cZR(d,e,f,g){var x=null,w=y.p,v=A.a([new A.di(1,B.bb,A.h(d,x,x,x,x,B.c3,B.a3,x),x)],w)
if(g)B.e.n(v,A.a([B.dY,D.P8],w))
v=A.a([new A.cg(d,76,e,!1,!0,x),B.aE,A.O(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.h(f,x,x,x,x,B.L,B.a3,x)],w))
return new A.bA(B.aw,x,B.aC,B.y,A.a([new A.S(B.jC,A.bO(A.z(v,B.v,B.h,B.l),x,x),x),D.bPk],w),x)},
cGq(d,e){var x,w,v=null,u=A.aT(d,B.dR,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a_)
w.push(e[x])
B.e.n(s,w)}return A.bB(!0,new A.eb(new A.aR(0,1/0,0,u.a.b*0.9),A.dS(A.z(s,B.E,B.h,B.l),B.y,v,B.al,v,B.av),v),v,B.Z,!1)},
ac_:function ac_(d){this.a=d},
bPH:function bPH(d){this.a=d},
d2W(d){var x,w,v,u
for(x=new A.ce(d),w=y.E,x=new A.ag(x,x.gA(0),w.i("ag<V.E>")),w=w.i("V.E"),v=0;x.q();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDx[B.j.aI(v,5)]},
cVl(d,e,f,g,h,i,j){return new C.anJ(d,i,f,e,g,j,h,null)},
zx:function zx(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anJ:function anJ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aZU:function aZU(d,e){this.a=d
this.b=e},
aZV:function aZV(d,e){this.a=d
this.b=e},
aZX:function aZX(){},
aZW:function aZW(d){this.a=d},
aZT:function aZT(d,e){this.a=d
this.b=e},
Ra:function Ra(d,e){this.c=d
this.a=e},
Ki:function Ki(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aei:function aei(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c7u:function c7u(d,e){this.a=d
this.b=e},
bnN:function bnN(d,e){this.a=d
this.b=e},
aXH:function aXH(){},
aXI:function aXI(){},
alk:function alk(){},
Ix:function Ix(){},
b_y:function b_y(d,e){this.a=d
this.b=e},
abZ:function abZ(){},
d6B(d,e,f,g,h,i,j,k){return new C.a5d(A.dKV(C.dLC(),i,j),d,g,h,e,A.akM(e),f,i.i("@<0>").b7(j).b7(k).i("a5d<1,2,3>"))},
biF(d,e,f,g,h,i,j,k,l,m){return new A.xL(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xL<1,2>"))},
a5d:function a5d(d,e,f,g,h,i,j,k){var _=this
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
C.It.prototype={
gap(d){return this.c}}
C.NT.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eY(!1,w,!0,new A.S(B.hv,A.z(A.a([A.x(x,A.b9(this.c,$.au,x,x,26),B.r,x,x,new A.I(B.a4,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aE,A.h(this.d,x,x,x,x,B.hO,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,new C.bJB(this,d),x,x,x,x,x,x,x)}}
C.Zl.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwM[x]
v=new A.b6(14,14)
s.push(A.eY(!1,new A.cz(v,v,v,v),!0,new A.S(B.q2,A.as1(w,B.km,u,u),u),u,!0,u,u,u,u,u,u,u,u,new C.cyZ(d,w),u,u,u,u,u,u,u))}return new A.S(D.asB,A.z(A.a([D.c7a,B.R,A.ari(1,s,4,8,8,u,B.dO,!0)],t),B.G,B.h,B.J),u)}}
C.Ow.prototype={
R(){return new C.adB(new A.aF(B.ak,$.aa()),D.ie)}}
C.adB.prototype={
ad(){this.aq()
this.HT("")},
m(){var x=this.d
x.Z$=$.aa()
x.W$=0
this.a7()},
HT(d){return this.bg6(d)},
bg6(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HT=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bZt(s))
v=3
m=B.f.B(d)
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
p=A.aiZ("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUB(p,null),$async$HT)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bt.jG(0,A.jg(A.je(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.bZu(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.bZv(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.bZw(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HT,w)},
u(d){var x=this,w=null,v=A.aT(d,w,y.w).w,u=A.cs(w,B.a6,!1,w,!0,B.y,w,A.cu(),x.d,w,w,w,w,w,2,D.aEJ,B.U,!0,w,!0,w,!1,w,B.aB,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaT9(),w,!1,w,w,!1,w,!0,w,B.al,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b0,w,B.rT,w,w),t=x.r
if(t!=null)t=A.bO(A.h(t,w,w,w,w,B.ml,B.a3,w),w,w)
else t=x.f?D.bXt:N.arh(T.a8r,new C.bZy(x),x.e.length,w,w,!1)
return A.aK(new A.S(D.asz,A.z(A.a([u,B.ac,A.a4(t,1),B.aE,D.acN],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.R9.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aT(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b1(s.c,"asset:"))return A.as1(B.f.bE(s.c,6),B.km,120,120)
if(p==="image"||p==="gif")return A.cp(r,A.fR(A.W(16),new A.eb(new A.aR(0,q,0,320),A.k5(s.c,new C.aZP(q),B.bE,r,new C.aZQ(q),r,r),r),B.ba),B.U,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.aZR(s,d),r,r,r,r,r,r,!1,B.aD)
p=A.W(16)
x=s.f
w=x?$.au:B.a4
v=A.W(16)
u=A.b9(O.Oz,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aI(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r)
return A.eY(!1,p,!0,A.x(r,A.O(A.a([u,B.ab,new A.di(1,B.bb,t,r),B.bj,A.b9(L.ve,x?B.t:B.W,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.I(w,r,r,v,r,r,B.x),r,r,r,D.as3,r,r,r),r,!0,r,r,r,r,r,r,r,r,new C.aZS(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
C.w3.prototype={
d0(){var x=this,w=y.T,v=A.eQ(x).G(A.cB($.b7(),new C.bEc(),y.D,w),w)
A.eQ(x).NF(new C.bEd(x))
if(v==null)return B.a6
w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.LS(0,"typing:"+x.x,B.yh).bxd(new C.bEe(x,v),"typing")
w.Pw(0)
x.y=w
x.Q=A.u6(B.hq,new C.bEf(x))
return B.a6},
akc(){var x,w=this,v=w.z
v.ee(v,new C.bE9(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c4(v,v.r,v.e,A.u(v).i("c4<2>"));v.q();)x.push(v.d.a)
if(x.length!==J.aP(w.ga4(0))||!B.e.e6(x,J.dmT(w.ga4(0))))w.sa4(0,x)},
acz(d){var x,w=this,v=w.y,u=A.eQ(w).a_(0,$.b7(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.co(w.as).a<2e6)return
w.as=x
v.aee(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GK).cC(new C.bEi(),new C.bEj(),y.H)},
cX(d){var x=this.y,w=A.eQ(this).a_(0,$.b7(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.ji(0,0),0,!1)
x.aee(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GK).cC(new C.bEg(),new C.bEh(),y.H)}}
C.B4.prototype={}
C.anK.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cg(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.di(1,B.bb,A.h(s.c,1,B.a1,r,r,B.a9,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.dY,D.P8],x))
w=A.a([A.O(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uM,A.x(r,A.h(v,1,r,r,r,B.he,r,r),B.r,r,r,new A.I(B.cx,r,r,u,r,r,B.x),r,r,r,B.CV,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aI(r,r,B.W,r,r,r,r,r,r,r,r,13,r,r,B.b_,r,r,!0,r,r,r,r,r,r,r,r),r,r))}t=A.O(A.a([q,B.af,A.a4(A.z(w,B.G,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d4(0,B.bl,B.z.cc(0.06),B.G9,14)],y.V)
w=A.aT(d,B.b5,y.w).w
v=new C.b_3().$3(K.OX,"Voltar",new C.b_0(d))
u=s.r
v=A.a([v,B.af,A.a4(u==null?t:A.aY(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Ej(A.x(B.K,Q.E6,B.r,r,r,B.bV,r,44,r,r,r,r,44),r,new C.b_1(s),new C.b_2(s),r,D.bPg,"Mais op\xe7\xf5es",y.N)],x))
return A.x(r,A.z(A.a([A.O(v,B.v,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.I(B.t,r,r,B.tD,q,r,B.x),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gap(d){return this.c}}
C.ac_.prototype={
u(d){var x=null
return A.bi(x,!0,x,A.cp(x,A.x(x,B.hz,B.r,x,x,new A.I(B.z,x,x,x,x,x,B.ap),x,44,x,x,x,x,44),B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPH(d),x,x,x,x,x,x,!1,B.aD),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zx.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(F.MO,A.h(v,x,x,x,x,A.aI(x,x,C.d2W(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aI(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bm,x,1.4,!0,x,x,x,x,x,x,x,x),x,x))
return new A.eb(new A.aR(0,w.a.a*0.78,0,1/0),A.x(x,A.z(o,B.G,B.h,B.J),B.r,x,x,new A.I(r,x,x,new A.cz(E.ya,E.ya,new A.b6(q,q),new A.b6(p,p)),x,x,B.x),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.anJ.prototype={
ai_(d){if(!A.ue(this.c.a.a)){d.O(y.q).f.a0(D.bYR)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aY(A.x(B.K,B.P_,B.r,t,t,B.bV,t,44,t,t,t,t,44),u.e,t),B.ab],s))
x=A.W(24)
r.push(A.a4(A.x(B.bc,A.cs(t,B.a6,!1,t,!0,B.y,t,A.cu(),u.c,t,t,t,t,t,2,A.j7(t,B.br,t,B.Z,t,t,t,t,!0,B.br,t,t,t,t,t,t,!1,t,t,t,t,B.br,t,t,t,t,t,t,t,t,B.mi,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.U,!0,t,!0,t,!1,t,B.aB,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.aZU(u,d),t,!1,t,t,!1,t,!0,t,B.al,t,t,t,t,t,t,t,t,t,t,t,B.fh,!0,B.au,t,B.b0,t,B.a9u,t,t),B.r,t,t,new A.I(B.a4,t,t,x,t,t,B.x),t,48,t,B.bY,t,t,t),1))
r.push(B.ab)
r.push(A.bi(t,!0,t,A.aY(A.x(B.K,D.aDo,B.r,t,t,B.bV,t,44,t,t,t,t,44),new C.aZV(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.O(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d4(0,B.bl,B.z.cc(0.12),B.k2,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aK(A.a4i(B.y,new C.aZW(u),v,t,B.jn,B.bJ,new C.aZX()),34,t),B.ac],s))
x.push(w)
return A.x(t,A.bB(!0,new A.S(B.ht,A.z(x,B.E,B.h,B.J),t),t,D.arE,!1),B.r,t,t,new A.I(B.t,t,t,B.pe,r,t,B.x),t,t,t,t,t,t,t)}}
C.Ra.prototype={
u(d){var x=null,w=this.c
return A.aWz(B.f6,w==null?D.bWX:new A.S(D.asF,A.bO(A.h(w,x,x,x,x,B.kd,x,x),x,x),x),B.cy,B.aM)}}
C.Ki.prototype={
R(){return new C.aei()}}
C.aei.prototype={
ad(){var x,w=this
w.aq()
x=w.a
w.e=x.d
x.c.an(0,w.ga1b())},
bi(d){var x,w,v=this
v.bD(d)
x=d.c
if(x!==v.a.c){w=v.ga1b()
x.a2(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a2(0,this.ga1b())
this.a7()},
aTc(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gby(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c7u(w,x))},
b5D(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aT(x,null,y.w).w
w=this.a
if(x.ax)w.c.hy(0)
else w.c.hZ(0,B.ee,G.Cv)},
u(d){var x,w,v,u=this,t=null,s=B.j.ae(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iU(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.x(B.K,D.aDh,B.r,t,t,D.aft,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bF(B.z,2)
r.push(A.cb(t,A.x(B.K,A.h(""+s,t,t,t,t,B.hO,t,t),B.r,t,B.lc,new A.I(B.t,t,v,x,t,t,B.x),t,20,t,B.CS,t,t,t),t,t,t,-6,-6,t))}q.push(A.cb(16,A.bi(t,!0,t,A.aY(new A.bA(B.aw,t,B.aC,B.r,r,t),u.gb5C(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bA(B.aw,t,B.aC,B.y,q,t)}}
C.bnN.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aXH.prototype={
$1(d){return A.mV(d,null,!0,null,null,y.S,y.z)},
gWV(d){return D.agS},
axT(d,e,f,g,h){return this.gWV(this).$3$1(e,f,g,h)}}
C.aXI.prototype={
$3$1(d,e,f,g){return C.d6B(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alk.prototype={}
C.Ix.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_y(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.abZ.prototype={}
C.a5d.prototype={}
var z=a.updateTypes(["~()","Zl(N)","Ow(N)","F<~>(c)","t<c>()","w3(c)","xL<0^,1^>(0^(){$allTransitiveDependencies!w<h9>?,argument!M?,dependencies!w<h9>?,from!kO?,isAutoDispose!C,name!c?,retry!bo?(v,M)?})<fb<1^>,M?>"])
C.cNm.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.at4,A.z(A.a([A.O(A.a([new C.NT(B.jS,"Foto","photo",x),new C.NT(D.aBS,"Ficheiro","file",x),new C.NT(R.jP,"Sticker","sticker",x),new C.NT(D.aBK,"GIF","gif",x)],w),B.v,B.a0u,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:68}
C.cNn.prototype={
$1(d){return D.coA},
$S:z+1}
C.cNo.prototype={
$1(d){return D.clO},
$S:z+2}
C.bJB.prototype={
$0(){return A.al(this.b,!1).af(this.a.e)},
$S:0}
C.cyZ.prototype={
$0(){return A.al(this.a,!1).af(this.b)},
$S:0}
C.bZt.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bZu.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.be(this.b,y.P),v=A.u(w),w=new A.ag(w,w.gA(w),v.i("ag<V.E>")),u=y.f,v=v.i("V.E");w.q();){t=w.d
x=t==null?v.a(t):t
J.br(s,new A.X(A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bZv.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bZw.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bZy.prototype={
$2(d,e){var x=null,w=this.a
return A.eY(!1,x,!0,A.fR(A.W(10),A.k5(w.e[e].a,x,B.bE,x,x,x,x),B.ba),x,!0,x,x,x,x,x,x,x,x,new C.bZx(w,d,e),x,x,x,x,x,x,x)},
$S:1335}
C.bZx.prototype={
$0(){return A.al(this.b,!1).af(this.a.e[this.c].b)},
$S:0}
C.aZR.prototype={
$0(){var x=y.H
return A.al(this.b,!1).h_(A.tt(new C.aZO(this.a),null,x),x)},
$S:0}
C.aZO.prototype={
$1(d){var x=null
return A.ku(A.cV5(B.an,x,B.t,x),B.an,A.bO(I.cWn(B.Z,A.po(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1336}
C.aZQ.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1337}
C.aZP.prototype={
$3(d,e,f){var x=null
return A.x(x,D.aDw,B.r,B.a4,x,x,x,120,x,x,x,x,this.a)},
$S:70}
C.aZS.prototype={
$0(){return A.z4(A.dA(this.a.c,0,null),B.qk,null)},
$S:0}
C.bEc.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bEd.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aK(0)
x=w.y
w.y=null
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y3(x).cC(new C.bEa(),new C.bEb(),y.H)}},
$S:0}
C.bEa.prototype={
$1(d){},
$S:114}
C.bEb.prototype={
$1(d){},
$S:11}
C.bEe.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dY(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.B(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.B(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.X(v,new A.ac(Date.now(),0,!1).el(5e6)))}u.akc()},
$S:197}
C.bEf.prototype={
$1(d){return this.a.akc()},
$S:65}
C.bE9.prototype={
$2(d,e){return e.b.fe(this.a)},
$S:1338}
C.bEi.prototype={
$1(d){},
$S:264}
C.bEj.prototype={
$1(d){},
$S:11}
C.bEg.prototype={
$1(d){},
$S:264}
C.bEh.prototype={
$1(d){},
$S:11}
C.cTz.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:22}
C.cSV.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.Iq,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r)
p.push(A.jn(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDf,r,r,r,r,new C.cSU(d,u),!1,r,r,r,r,r,s,r,t,r,F.P7,r))}return A.bB(!0,new A.S(D.asC,A.z(A.a([D.c9S,B.ar,D.caQ,B.P,new A.di(1,B.bb,A.d6(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:32}
C.cSU.prototype={
$0(){return A.al(this.a,!1).af(this.b)},
$S:0}
C.b_3.prototype={
$3(d,e,f){var x=null
return A.kx(A.aY(A.x(B.K,d,B.r,x,x,B.bV,x,44,x,x,x,x,44),f,x),x,e)},
$S:1339}
C.b_0.prototype={
$0(){return A.al(this.a,!1).hz()},
$S:0}
C.b_2.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_1.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bnM(A.h(t,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bP8)
return r},
$S:62}
C.bPH.prototype={
$0(){return A.al(this.a,!1).bk()},
$S:0}
C.aZU.prototype={
$1(d){return this.a.ai_(this.b)},
$S:3}
C.aZV.prototype={
$0(){return this.a.ai_(this.b)},
$S:0}
C.aZX.prototype={
$2(d,e){return B.ab},
$S:117}
C.aZW.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bF(B.z,1.5)
return A.aY(A.x(B.K,A.h(w.w[e],x,x,x,x,B.dZ,x,x),B.r,x,x,new A.I(B.t,x,u,v,x,x,B.x),x,34,x,B.cG,x,x,x),new C.aZT(w,e),x)},
$S:179}
C.aZT.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c7u.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_y.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Ix.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adB.prototype,"gaT9","HT",3)
w(C,"dMA","dzk",5)
v(C.w3.prototype,"giD","d0",4)
var t
v(t=C.aei.prototype,"ga1b","aTc",0)
v(t,"gb5C","b5D",0)
u(C,"dLC",1,function(){return{$allTransitiveDependencies:B.cM,argument:B.cM,dependencies:B.cM,from:B.cM,isAutoDispose:B.cM,name:B.cM,retry:B.cM}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["biF",function(d,e,f,g,h,i,j,k){return C.biF(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.biF(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.biF(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.M,[C.It,C.B4,C.aXH,C.aXI,C.alk])
w(A.bs,[C.cNm,C.cNn,C.cNo,C.aZO,C.aZQ,C.aZP,C.bEc,C.bEa,C.bEb,C.bEe,C.bEf,C.bEi,C.bEj,C.bEg,C.bEh,C.cTz,C.cSV,C.b_3,C.b_2,C.b_1,C.aZU])
w(A.L,[C.NT,C.Zl,C.R9,C.anK,C.ac_,C.zx,C.anJ,C.Ra])
w(A.bL,[C.bJB,C.cyZ,C.bZt,C.bZu,C.bZv,C.bZw,C.bZx,C.aZR,C.aZS,C.bEd,C.cSU,C.b_0,C.bPH,C.aZV,C.aZT,C.c7u,C.b_y])
w(A.G,[C.Ow,C.Ki])
w(A.a0,[C.adB,C.aei])
w(A.cK,[C.bZy,C.bE9,C.aZX,C.aZW])
v(C.w3,A.fb)
v(C.bnN,A.fg)
v(C.abZ,A.kO)
v(C.Ix,C.abZ)
v(C.a5d,C.Ix)
x(C.abZ,C.alk)})()
A.bq(b.typeUniverse,JSON.parse('{"Zl":{"L":[],"e":[],"f":[]},"Ow":{"G":[],"e":[],"f":[]},"NT":{"L":[],"e":[],"f":[]},"adB":{"a0":["Ow"]},"R9":{"L":[],"e":[],"f":[]},"w3":{"fb":["t<c>"]},"anK":{"L":[],"e":[],"f":[]},"ac_":{"L":[],"e":[],"f":[]},"Ki":{"G":[],"e":[],"f":[]},"zx":{"L":[],"e":[],"f":[]},"anJ":{"L":[],"e":[],"f":[]},"Ra":{"L":[],"e":[],"f":[]},"aei":{"a0":["Ki"]},"Ix":{"kO":[],"h9":[],"H2":[],"lM":[]},"a5d":{"Ix":["1","2","2","3","2","xL<1,2>"],"kO":[],"h9":[],"H2":[],"lM":[],"Ix.0":"1"}}'))
A.PJ(b.typeUniverse,JSON.parse('{"alk":5,"abZ":6}'))
var y=(function rtii(){var x=A.y
return{D:x("cH"),E:x("ce"),V:x("r<d4>"),X:x("r<pD<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dt"),S:x("fb<@>"),F:x("+(c,ac)"),C:x("B4"),N:x("c"),q:x("dl"),z:x("@"),r:x("v"),B:x("It?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cas=new A.D("Powered by GIPHY",null,H.Io,null,null,null,null,null,null,null)
D.acN=new A.d_(B.e_,null,null,D.cas,null)
D.aft=new A.I(B.z,null,null,null,B.id,null,B.ap)
D.Kr=new C.aXH()
D.agS=new C.aXI()
D.arE=new A.a3(0,0,0,24)
D.as3=new A.a3(12,10,14,10)
D.asz=new A.a3(16,16,16,12)
D.asB=new A.a3(16,16,16,24)
D.asC=new A.a3(16,16,16,8)
D.asF=new A.a3(16,2,16,8)
D.at4=new A.a3(20,18,20,24)
D.au_=new A.a3(8,12,8,12)
D.aBK=new A.b0(57404,"HeroiconsSolid",null,!1)
D.aBS=new A.b0(57436,"HeroiconsSolid",null,!1)
D.P8=new A.b8(B.i8,18,B.bp,null,"Verificado",null)
D.aDf=new A.b8(B.fd,null,B.W,null,null,null)
D.aBz=new A.b0(57347,"HeroiconsSolid",null,!1)
D.aDh=new A.b8(D.aBz,20,B.t,null,null,null)
D.aDo=new A.b8(B.lF,20,B.t,null,null,null)
D.aDw=new A.b8(B.jS,null,B.W,null,null,null)
D.aCy=new A.b8(B.vg,null,null,null,null,null)
D.aEJ=new A.dE(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwM=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bz5=x([],A.y("r<dae>"))
D.bz8=x([],A.y("r<+(c,~())>"))
D.ie=x([],y.L)
D.amm=new A.Z(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.ana=new A.Z(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aod=new A.Z(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amN=new A.Z(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDx=x([D.amm,B.cR,D.ana,D.aod,D.amN],A.y("r<Z>"))
D.bP8=new A.jM("report",!0,P.aaA,null,A.y("jM<c>"))
D.bPg=new C.bnN(1,"under")
D.ckR=new C.ac_(null)
D.bPk=new A.eF(null,0,0,null,null,null,D.ckR,null)
D.bWX=new A.c5(1/0,null,null,null)
D.bXt=new S.ye(12,3,null)
D.ca7=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null)
D.bYR=new A.bG(D.ca7,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cbJ=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null)
D.bYW=new A.bG(D.cbJ,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c8T=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null)
D.bZi=new A.bG(D.c8T,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c7a=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null)
D.c9S=new A.D("Que mensagem queres denunciar?",null,B.hN,null,null,null,null,null,null,null)
D.caQ=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null)
D.clO=new C.Ow(null)
D.coA=new C.Zl(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_f","CH",()=>D.Kr.axT(0,C.dMA(),A.y("w3"),A.y("t<c>"),y.N))})()};
(a=>{a["VIlN2gSHAMjCjfWk+cFSaN1qX+c="]=a.current})($__dart_deferred_initializers__);