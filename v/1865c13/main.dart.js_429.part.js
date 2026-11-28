((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,I,K,L,M,F,N,O,C={
dG8(){var x,w=$.Qe(),v=J.oq(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aT(B.j.hQ(w.qR(256),16),2,"0")
return B.e.hI(v)},
aTR(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aTR=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.P()
q=r.b
q===$&&A.b()
q=q.gbu().e.a
u=(q==null?null:q.r).a
t=B.f.t(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dG8()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r2(s,d,new A.v1(!1,f)),$async$aTR)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cc(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTR,w)},
dcl(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
rA(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rA=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bP(null,new C.cMu(),!1,d,!0,!1,null,l),$async$rA)
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
return A.d(new A.lI().YN(85,2048,B.ft),$async$rA)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kh(),$async$rA)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fn(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aTR(t,s,C.dcl(s)),$async$rA)
case 12:v=new j.Im(f,r,s)
x=1
break
case 7:x=13
return A.d($.dgJ().xT(D.byZ,null,null),$async$rA)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kh(),$async$rA)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a1(D.bYL)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.ca(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbs6(p))
if(B.f.fn(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aTR(t,l,C.dcl(l)),$async$rA)
case 15:v=new j.Im(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bP(null,new C.cMv(),!1,d,!0,!1,null,l),$async$rA)
case 16:n=f
v=n==null?null:new C.Im("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bP(null,new C.cMw(),!1,d,!0,!0,null,l),$async$rA)
case 17:m=f
v=m==null?null:new C.Im(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rA,w)},
Im:function Im(d,e,f){this.a=d
this.b=e
this.c=f},
cMu:function cMu(){},
cMv:function cMv(){},
cMw:function cMw(){},
NM:function NM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJ8:function bJ8(d,e){this.a=d
this.b=e},
Ze:function Ze(d){this.a=d},
cy9:function cy9(d,e){this.a=d
this.b=e},
Op:function Op(d){this.a=d},
adt:function adt(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bYS:function bYS(d){this.a=d},
bYT:function bYT(d,e){this.a=d
this.b=e},
bYU:function bYU(d){this.a=d},
bYV:function bYV(d){this.a=d},
bYX:function bYX(d){this.a=d},
bYW:function bYW(d,e,f){this.a=d
this.b=e
this.c=f},
R1:function R1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZy:function aZy(d,e){this.a=d
this.b=e},
aZv:function aZv(d){this.a=d},
aZx:function aZx(d){this.a=d},
aZw:function aZw(d){this.a=d},
aZz:function aZz(d){this.a=d},
dym(d){return new C.w_(d,A.E(y.N,y.F),new A.ae(A.jg(0,0),0,!1))},
d_4(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dn(d,new C.cSH(),y.N).bx(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w_:function w_(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bDK:function bDK(){},
bDL:function bDL(d){this.a=d},
bDI:function bDI(){},
bDJ:function bDJ(){},
bDM:function bDM(d,e){this.a=d
this.b=e},
bDN:function bDN(d){this.a=d},
bDH:function bDH(d){this.a=d},
bDQ:function bDQ(){},
bDR:function bDR(){},
bDO:function bDO(){},
bDP:function bDP(){},
cSH:function cSH(){},
a_d(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_d=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a1(D.bZ7)
x=1
break}x=3
return A.d(A.bP(null,new C.cS2(A.dy(h,0,A.es(12,"count",y.r),A.a8(h).c).bx(0)),!1,d,!0,!0,null,y.C),$async$a_d)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wq(d,e,f,u.c,u.d,g,t),$async$a_d)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_d,w)},
B_:function B_(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cS2:function cS2(d){this.a=d},
cS1:function cS1(d,e){this.a=d
this.b=e},
cUt(d,e,f,g,h,i,j,k,l){return new C.any(g,d,k,h,i,e,j,l,f,null)},
any:function any(d,e,f,g,h,i,j,k,l,m){var _=this
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
aZL:function aZL(){},
aZI:function aZI(d){this.a=d},
aZK:function aZK(d){this.a=d},
aZJ:function aZJ(d){this.a=d},
cFR(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ae)
v=new A.b5(16,16)
u=d[x]
w.push(new A.bI(1,B.at,A.x(t,A.z(A.a([A.h(u.a,1,B.a1,t,t,B.c1,t,t),B.aU,A.h(u.b,t,t,t,t,B.be,B.a4,t)],s),B.v,B.h,B.l),B.r,t,t,new A.I(B.a3,t,t,new A.cy(v,v,v,v),t,t,B.x),t,t,t,D.atU,t,t,t),t))
B.e.n(r,w)}return A.N(r,B.v,B.h,B.l,0,t)},
akd(d,e,f){var x,w=null
if(f){x=A.fK(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.aa,B.c6,w,w,B.cZ,w)
x=A.hh(A.h(d,w,w,w,w,w,w,w),e,x)}else{x=A.cb(B.z,w,w,B.t,w,w,B.aa,w,w,B.cZ)
x=A.bB(A.h(d,w,w,w,w,w,w,w),e,x)}return A.aJ(x,52,w)},
cYX(d,e,f,g){var x=null,w=y.p,v=A.a([new A.dg(1,B.ba,A.h(d,x,x,x,x,B.c1,B.a4,x),x)],w)
if(g)B.e.n(v,A.a([B.dY,D.P4],w))
v=A.a([new A.cf(d,76,e,!1,!0,x),B.aD,A.N(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.h(f,x,x,x,x,B.L,B.a4,x)],w))
return new A.bC(B.aw,x,B.aC,B.y,A.a([new A.S(B.jC,A.bN(A.z(v,B.v,B.h,B.l),x,x),x),D.bPg],w),x)},
cFz(d,e){var x,w,v=null,u=A.aS(d,B.dR,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a_)
w.push(e[x])
B.e.n(s,w)}return A.bA(!0,new A.e9(new A.aR(0,1/0,0,u.a.b*0.9),A.dR(A.z(s,B.E,B.h,B.l),B.y,v,B.al,v,B.av),v),v,B.Z,!1)},
abT:function abT(d,e){this.c=d
this.a=e},
bPe:function bPe(d){this.a=d},
d21(d){var x,w,v,u
for(x=new A.cd(d),w=y.E,x=new A.ag(x,x.gA(0),w.i("ag<V.E>")),w=w.i("V.E"),v=0;x.q();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDp[B.j.aI(v,5)]},
cUs(d,e,f,g,h,i,j){return new C.anx(d,i,f,e,g,j,h,null)},
zt:function zt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anx:function anx(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aZB:function aZB(d,e){this.a=d
this.b=e},
aZC:function aZC(d,e){this.a=d
this.b=e},
aZE:function aZE(){},
aZD:function aZD(d){this.a=d},
aZA:function aZA(d,e){this.a=d
this.b=e},
R2:function R2(d,e){this.c=d
this.a=e},
Kb:function Kb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aea:function aea(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c6U:function c6U(d,e){this.a=d
this.b=e},
bnq:function bnq(d,e){this.a=d
this.b=e},
aXo:function aXo(){},
aXp:function aXp(){},
ala:function ala(){},
Iq:function Iq(){},
b_f:function b_f(d,e){this.a=d
this.b=e},
abS:function abS(){},
d5H(d,e,f,g,h,i,j,k){return new C.a57(A.dJS(C.dKz(),i,j),d,g,h,e,A.akC(e),f,i.i("@<0>").b7(j).b7(k).i("a57<1,2,3>"))},
bik(d,e,f,g,h,i,j,k,l,m){return new A.xK(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xK<1,2>"))},
a57:function a57(d,e,f,g,h,i,j,k){var _=this
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
E=c[229]
G=c[401]
H=c[379]
I=c[177]
K=c[430]
L=c[330]
M=c[157]
F=c[236]
N=c[167]
O=c[429]
C=a.updateHolder(c[122],C)
D=c[231]
P=c[377]
Q=c[392]
R=c[265]
S=c[179]
T=c[428]
C.Im.prototype={
gap(d){return this.c}}
C.NM.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eW(!1,w,!0,new A.S(B.hv,A.z(A.a([A.x(x,A.b8(this.c,$.at,x,x,26),B.r,x,x,new A.I(B.a3,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aD,A.h(this.d,x,x,x,x,B.hO,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,new C.bJ8(this,d),x,x,x,x,x,x,x)}}
C.Ze.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwF[x]
v=new A.b5(14,14)
s.push(A.eW(!1,new A.cy(v,v,v,v),!0,new A.S(B.q_,A.arQ(w,B.kj,u,u),u),u,!0,u,u,u,u,u,u,u,u,new C.cy9(d,w),u,u,u,u,u,u,u))}return new A.S(D.asv,A.z(A.a([D.c6U,B.R,A.ar6(1,s,4,8,8,u,B.dO,!0)],t),B.G,B.h,B.J),u)}}
C.Op.prototype={
S(){return new C.adt(new A.aE(B.ak,$.aa()),D.ie)}}
C.adt.prototype={
ad(){this.aq()
this.HR("")},
m(){var x=this.d
x.Z$=$.aa()
x.W$=0
this.a7()},
HR(d){return this.bfT(d)},
bfT(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HR=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bYS(s))
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
p=A.aiR("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUg(p,null),$async$HR)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bt.jG(0,A.je(A.jc(q.e)).bI(0,q.w),null)),"data"))
s.p(new C.bYT(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.bYU(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.bYV(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HR,w)},
u(d){var x=this,w=null,v=A.aS(d,w,y.w).w,u=A.cr(w,B.a6,!1,w,!0,B.y,w,A.ct(),x.d,w,w,w,w,w,2,D.aEC,B.W,!0,w,!0,w,!1,w,B.aB,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaT0(),w,!1,w,w,!1,w,!0,w,B.al,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b0,w,B.rQ,w,w),t=x.r
if(t!=null)t=A.bN(A.h(t,w,w,w,w,B.mh,B.a4,w),w,w)
else t=x.f?D.bXg:N.ar5(T.a8m,new C.bYX(x),x.e.length,w,w,!1)
return A.aJ(new A.S(D.ast,A.z(A.a([u,B.ac,A.a4(t,1),B.aD,D.acI],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.R1.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aS(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b1(s.c,"asset:"))return A.arQ(B.f.bD(s.c,6),B.kj,120,120)
if(p==="image"||p==="gif")return A.cp(r,A.fR(A.W(16),new A.e9(new A.aR(0,q,0,320),A.k2(s.c,new C.aZw(q),B.bE,r,new C.aZx(q),r,r),r),B.bc),B.W,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.aZy(s,d),r,r,r,r,r,r,!1,B.aE)
p=A.W(16)
x=s.f
w=x?$.at:B.a3
v=A.W(16)
u=A.b8(O.Ov,x?B.t:$.at,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aH(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r)
return A.eW(!1,p,!0,A.x(r,A.N(A.a([u,B.ab,new A.dg(1,B.ba,t,r),B.bj,A.b8(L.vb,x?B.t:B.V,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.I(w,r,r,v,r,r,B.x),r,r,r,D.arY,r,r,r),r,!0,r,r,r,r,r,r,r,r,new C.aZz(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
C.w_.prototype={
d_(){var x=this,w=y.T,v=A.eP(x).G(A.cC($.b6(),new C.bDK(),y.D,w),w)
A.eP(x).Yj(new C.bDL(x))
if(v==null)return B.a6
w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.LS(0,"typing:"+x.x,B.ye).bx_(new C.bDM(x,v),"typing")
w.Pu(0)
x.y=w
x.Q=A.u2(B.hq,new C.bDN(x))
return B.a6},
ak7(){var x,w=this,v=w.z
v.ee(v,new C.bDH(new A.ae(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c3(v,v.r,v.e,A.u(v).i("c3<2>"));v.q();)x.push(v.d.a)
if(x.length!==J.aO(w.ga4(0))||!B.e.e6(x,J.dlV(w.ga4(0))))w.sa4(0,x)},
acu(d){var x,w=this,v=w.y,u=A.eP(w).a_(0,$.b6(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ae(Date.now(),0,!1)
if(x.cu(w.as).a<2e6)return
w.as=x
v.ae9(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GH).cB(new C.bDQ(),new C.bDR(),y.H)},
cZ(d){var x=this.y,w=A.eP(this).a_(0,$.b6(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ae(A.jg(0,0),0,!1)
x.ae9(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GH).cB(new C.bDO(),new C.bDP(),y.H)}}
C.B_.prototype={}
C.any.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cf(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.dg(1,B.ba,A.h(s.c,1,B.a1,r,r,B.a9,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.dY,D.P4],x))
w=A.a([A.N(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uJ,A.x(r,A.h(v,1,r,r,r,B.he,r,r),B.r,r,r,new A.I(B.cx,r,r,u,r,r,B.x),r,r,r,B.CS,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aH(r,r,B.V,r,r,r,r,r,r,r,r,13,r,r,B.b_,r,r,!0,r,r,r,r,r,r,r,r),r,r))}t=A.N(A.a([q,B.af,A.a4(A.z(w,B.G,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d2(0,B.bm,B.z.cc(0.06),B.G6,14)],y.V)
w=A.aS(d,B.b5,y.w).w
v=new C.aZL().$3(K.OT,"Voltar",new C.aZI(d))
u=s.r
v=A.a([v,B.af,A.a4(u==null?t:A.aX(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Ec(A.x(B.K,Q.E3,B.r,r,r,B.bV,r,44,r,r,r,r,44),r,new C.aZJ(s),new C.aZK(s),r,D.bP8,"Mais op\xe7\xf5es",y.N)],x))
return A.x(r,A.z(A.a([A.N(v,B.v,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.I(B.t,r,r,B.tz,q,r,B.x),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gap(d){return this.c}}
C.abT.prototype={
u(d){var x=null
return A.bh(x,!0,x,A.cp(x,A.x(x,B.hz,B.r,x,x,new A.I(B.z,x,this.c?A.bz(B.t,2):x,x,x,x,B.ap),x,44,x,x,x,x,44),B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPe(d),x,x,x,x,x,x,!1,B.aE),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zt.prototype={
u(d){var x=null,w=A.aS(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(F.MK,A.h(v,x,x,x,x,A.aH(x,x,C.d21(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aH(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bl,x,1.4,!0,x,x,x,x,x,x,x,x),x,x))
return new A.e9(new A.aR(0,w.a.a*0.78,0,1/0),A.x(x,A.z(o,B.G,B.h,B.J),B.r,x,x,new A.I(r,x,x,new A.cy(E.y7,E.y7,new A.b5(q,q),new A.b5(p,p)),x,x,B.x),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.anx.prototype={
ahV(d){if(!A.ua(this.c.a.a)){d.O(y.q).f.a1(D.bYG)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aX(A.x(B.K,B.OW,B.r,t,t,B.bV,t,44,t,t,t,t,44),u.e,t),B.ab],s))
x=A.W(24)
r.push(A.a4(A.x(B.bb,A.cr(t,B.a6,!1,t,!0,B.y,t,A.ct(),u.c,t,t,t,t,t,2,A.j4(t,B.br,t,B.Z,t,t,t,t,!0,B.br,t,t,t,t,t,t,!1,t,t,t,t,B.br,t,t,t,t,t,t,t,t,B.mf,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.W,!0,t,!0,t,!1,t,B.aB,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.aZB(u,d),t,!1,t,t,!1,t,!0,t,B.al,t,t,t,t,t,t,t,t,t,t,t,B.fh,!0,B.au,t,B.b0,t,B.a9n,t,t),B.r,t,t,new A.I(B.a3,t,t,x,t,t,B.x),t,48,t,B.bY,t,t,t),1))
r.push(B.ab)
r.push(A.bh(t,!0,t,A.aX(A.x(B.K,D.aDh,B.r,t,t,B.bV,t,44,t,t,t,t,44),new C.aZC(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.N(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d2(0,B.bm,B.z.cc(0.12),B.kH,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aJ(A.a4c(B.y,new C.aZD(u),v,t,t,B.bJ,new C.aZE()),34,t),B.ac],s))
x.push(w)
return A.x(t,A.bA(!0,new A.S(B.ht,A.z(x,B.E,B.h,B.J),t),t,D.ary,!1),B.r,t,t,new A.I(B.t,t,t,B.pc,r,t,B.x),t,t,t,t,t,t,t)}}
C.R2.prototype={
u(d){var x=null,w=this.c
return A.aWe(B.f6,w==null?D.bWK:new A.S(D.asz,A.bN(A.h(w,x,x,x,x,B.kb,x,x),x,x),x),B.cE,B.aM)}}
C.Kb.prototype={
S(){return new C.aea()}}
C.aea.prototype={
ad(){var x,w=this
w.aq()
x=w.a
w.e=x.d
x.c.an(0,w.ga19())},
bm(d){var x,w,v=this
v.bE(d)
x=d.c
if(x!==v.a.c){w=v.ga19()
x.a2(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a2(0,this.ga19())
this.a7()},
aT3(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gby(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c6U(w,x))},
b5q(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aS(x,null,y.w).w
w=this.a
if(x.ax)w.c.hv(0)
else w.c.hY(0,B.es,G.Cs)},
u(d){var x,w,v,u=this,t=null,s=B.j.af(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iS(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.x(B.K,D.aDa,B.r,t,t,D.afo,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bz(B.z,2)
r.push(A.ca(t,A.x(B.K,A.h(""+s,t,t,t,t,B.hO,t,t),B.r,t,B.lb,new A.I(B.t,t,v,x,t,t,B.x),t,20,t,B.CP,t,t,t),t,t,t,-6,-6,t))}q.push(A.ca(16,A.bh(t,!0,t,A.aX(new A.bC(B.aw,t,B.aC,B.r,r,t),u.gb5p(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bC(B.aw,t,B.aC,B.y,q,t)}}
C.bnq.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aXo.prototype={
$1(d){return A.mT(d,null,!0,null,null,y.S,y.z)},
gWS(d){return D.agN},
axM(d,e,f,g,h){return this.gWS(this).$3$1(e,f,g,h)}}
C.aXp.prototype={
$3$1(d,e,f,g){return C.d5H(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.ala.prototype={}
C.Iq.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_f(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.abS.prototype={}
C.a57.prototype={}
var z=a.updateTypes(["~()","Ze(O)","Op(O)","F<~>(c)","t<c>()","w_(c)","xK<0^,1^>(0^(){$allTransitiveDependencies!w<h7>?,argument!L?,dependencies!w<h7>?,from!kN?,isAutoDispose!C,name!c?,retry!bm?(v,L)?})<f9<1^>,L?>"])
C.cMu.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.asZ,A.z(A.a([A.N(A.a([new C.NM(B.jS,"Foto","photo",x),new C.NM(D.aBL,"Ficheiro","file",x),new C.NM(R.jP,"Sticker","sticker",x),new C.NM(D.aBD,"GIF","gif",x)],w),B.v,B.a0q,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:72}
C.cMv.prototype={
$1(d){return D.coj},
$S:z+1}
C.cMw.prototype={
$1(d){return D.clx},
$S:z+2}
C.bJ8.prototype={
$0(){return A.al(this.b,!1).ae(this.a.e)},
$S:0}
C.cy9.prototype={
$0(){return A.al(this.a,!1).ae(this.b)},
$S:0}
C.bYS.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bYT.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bd(this.b,y.P),v=A.u(w),w=new A.ag(w,w.gA(w),v.i("ag<V.E>")),u=y.f,v=v.i("V.E");w.q();){t=w.d
x=t==null?v.a(t):t
J.bp(s,new A.X(A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bYU.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bYV.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bYX.prototype={
$2(d,e){var x=null,w=this.a
return A.eW(!1,x,!0,A.fR(A.W(10),A.k2(w.e[e].a,x,B.bE,x,x,x,x),B.bc),x,!0,x,x,x,x,x,x,x,x,new C.bYW(w,d,e),x,x,x,x,x,x,x)},
$S:1327}
C.bYW.prototype={
$0(){return A.al(this.b,!1).ae(this.a.e[this.c].b)},
$S:0}
C.aZy.prototype={
$0(){var x=y.H
return A.al(this.b,!1).h_(A.tn(new C.aZv(this.a),null,x),x)},
$S:0}
C.aZv.prototype={
$1(d){var x=null
return A.ks(A.cUc(B.an,x,B.t,x),B.an,A.bN(I.cVt(B.Z,A.pl(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1328}
C.aZx.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1329}
C.aZw.prototype={
$3(d,e,f){var x=null
return A.x(x,D.aDp,B.r,B.a3,x,x,x,120,x,x,x,x,this.a)},
$S:71}
C.aZz.prototype={
$0(){return A.z0(A.dz(this.a.c,0,null),B.qh,null)},
$S:0}
C.bDK.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bDL.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aL(0)
x=w.y
w.y=null
if(x!=null){w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y_(x).cB(new C.bDI(),new C.bDJ(),y.H)}},
$S:0}
C.bDI.prototype={
$1(d){},
$S:124}
C.bDJ.prototype={
$1(d){},
$S:11}
C.bDM.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dX(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.B(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.B(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.X(v,new A.ae(Date.now(),0,!1).ek(5e6)))}u.ak7()},
$S:250}
C.bDN.prototype={
$1(d){return this.a.ak7()},
$S:67}
C.bDH.prototype={
$2(d,e){return e.b.fe(this.a)},
$S:1330}
C.bDQ.prototype={
$1(d){},
$S:241}
C.bDR.prototype={
$1(d){},
$S:11}
C.bDO.prototype={
$1(d){},
$S:241}
C.bDP.prototype={
$1(d){},
$S:11}
C.cSH.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:23}
C.cS2.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.In,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r)
p.push(A.jm(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aD8,r,r,r,r,new C.cS1(d,u),!1,r,r,r,r,r,s,r,t,r,F.P3,r))}return A.bA(!0,new A.S(D.asw,A.z(A.a([D.c9B,B.ar,D.caz,B.P,new A.dg(1,B.ba,A.d4(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:33}
C.cS1.prototype={
$0(){return A.al(this.a,!1).ae(this.b)},
$S:0}
C.aZL.prototype={
$3(d,e,f){var x=null
return A.kv(A.aX(A.x(B.K,d,B.r,x,x,B.bV,x,44,x,x,x,x,44),f,x),x,e)},
$S:1331}
C.aZI.prototype={
$0(){return A.al(this.a,!1).i6()},
$S:0}
C.aZK.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.aZJ.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.G)(x),++u){t=x[u].a
r.push(A.bnp(A.h(t,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bP0)
return r},
$S:60}
C.bPe.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
C.aZB.prototype={
$1(d){return this.a.ahV(this.b)},
$S:3}
C.aZC.prototype={
$0(){return this.a.ahV(this.b)},
$S:0}
C.aZE.prototype={
$2(d,e){return B.ab},
$S:111}
C.aZD.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bz(B.z,1.5)
return A.aX(A.x(B.K,A.h(w.w[e],x,x,x,x,B.dZ,x,x),B.r,x,x,new A.I(B.t,x,u,v,x,x,B.x),x,34,x,B.cG,x,x,x),new C.aZA(w,e),x)},
$S:170}
C.aZA.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c6U.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_f.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Iq.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adt.prototype,"gaT0","HR",3)
w(C,"dLx","dym",5)
v(C.w_.prototype,"giD","d_",4)
var t
v(t=C.aea.prototype,"ga19","aT3",0)
v(t,"gb5p","b5q",0)
u(C,"dKz",1,function(){return{$allTransitiveDependencies:B.cM,argument:B.cM,dependencies:B.cM,from:B.cM,isAutoDispose:B.cM,name:B.cM,retry:B.cM}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bik",function(d,e,f,g,h,i,j,k){return C.bik(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bik(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bik(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.L,[C.Im,C.B_,C.aXo,C.aXp,C.ala])
w(A.bt,[C.cMu,C.cMv,C.cMw,C.aZv,C.aZx,C.aZw,C.bDK,C.bDI,C.bDJ,C.bDM,C.bDN,C.bDQ,C.bDR,C.bDO,C.bDP,C.cSH,C.cS2,C.aZL,C.aZK,C.aZJ,C.aZB])
w(A.M,[C.NM,C.Ze,C.R1,C.any,C.abT,C.zt,C.anx,C.R2])
w(A.bK,[C.bJ8,C.cy9,C.bYS,C.bYT,C.bYU,C.bYV,C.bYW,C.aZy,C.aZz,C.bDL,C.cS1,C.aZI,C.bPe,C.aZC,C.aZA,C.c6U,C.b_f])
w(A.H,[C.Op,C.Kb])
w(A.a1,[C.adt,C.aea])
w(A.cJ,[C.bYX,C.bDH,C.aZE,C.aZD])
v(C.w_,A.f9)
v(C.bnq,A.ff)
v(C.abS,A.kN)
v(C.Iq,C.abS)
v(C.a57,C.Iq)
x(C.abS,C.ala)})()
A.bq(b.typeUniverse,JSON.parse('{"Ze":{"M":[],"e":[],"f":[]},"Op":{"H":[],"e":[],"f":[]},"NM":{"M":[],"e":[],"f":[]},"adt":{"a1":["Op"]},"R1":{"M":[],"e":[],"f":[]},"w_":{"f9":["t<c>"]},"any":{"M":[],"e":[],"f":[]},"abT":{"M":[],"e":[],"f":[]},"Kb":{"H":[],"e":[],"f":[]},"zt":{"M":[],"e":[],"f":[]},"anx":{"M":[],"e":[],"f":[]},"R2":{"M":[],"e":[],"f":[]},"aea":{"a1":["Kb"]},"Iq":{"kN":[],"h7":[],"GX":[],"lL":[]},"a57":{"Iq":["1","2","2","3","2","xK<1,2>"],"kN":[],"h7":[],"GX":[],"lL":[],"Iq.0":"1"}}'))
A.PC(b.typeUniverse,JSON.parse('{"ala":5,"abS":6}'))
var y=(function rtii(){var x=A.y
return{D:x("cF"),E:x("cd"),V:x("r<d2>"),X:x("r<pA<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("ds"),S:x("f9<@>"),F:x("+(c,ae)"),C:x("B_"),N:x("c"),q:x("dp"),z:x("@"),r:x("v"),B:x("Im?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cab=new A.D("Powered by GIPHY",null,H.Il,null,null,null,null,null,null,null)
D.acI=new A.cY(B.e_,null,null,D.cab,null)
D.afo=new A.I(B.z,null,null,null,B.id,null,B.ap)
D.Kp=new C.aXo()
D.agN=new C.aXp()
D.ary=new A.a3(0,0,0,24)
D.arY=new A.a3(12,10,14,10)
D.ast=new A.a3(16,16,16,12)
D.asv=new A.a3(16,16,16,24)
D.asw=new A.a3(16,16,16,8)
D.asz=new A.a3(16,2,16,8)
D.asZ=new A.a3(20,18,20,24)
D.atU=new A.a3(8,12,8,12)
D.aBD=new A.aZ(57404,"HeroiconsSolid",null,!1)
D.aBL=new A.aZ(57436,"HeroiconsSolid",null,!1)
D.P4=new A.b7(B.i8,18,B.bp,null,"Verificado",null)
D.aD8=new A.b7(B.fd,null,B.V,null,null,null)
D.aBs=new A.aZ(57347,"HeroiconsSolid",null,!1)
D.aDa=new A.b7(D.aBs,20,B.t,null,null,null)
D.aDh=new A.b7(B.lC,20,B.t,null,null,null)
D.aDp=new A.b7(B.jS,null,B.V,null,null,null)
D.aCr=new A.b7(B.vd,null,null,null,null,null)
D.aEC=new A.dD(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCr,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwF=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.byZ=x([],A.y("r<d9j>"))
D.bz1=x([],A.y("r<+(c,~())>"))
D.ie=x([],y.L)
D.amh=new A.Z(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.an5=new A.Z(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.ao8=new A.Z(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amI=new A.Z(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDp=x([D.amh,B.cS,D.an5,D.ao8,D.amI],A.y("r<Z>"))
D.bP0=new A.jL("report",!0,P.aav,null,A.y("jL<c>"))
D.bP8=new C.bnq(1,"under")
D.ckA=new C.abT(!1,null)
D.bPg=new A.eE(null,0,0,null,null,null,D.ckA,null)
D.bWK=new A.c4(1/0,null,null,null)
D.bXg=new S.yc(12,3,null)
D.c9R=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null)
D.bYG=new A.bE(D.c9R,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cbs=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null)
D.bYL=new A.bE(D.cbs,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c8C=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null)
D.bZ7=new A.bE(D.c8C,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c6U=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null)
D.c9B=new A.D("Que mensagem queres denunciar?",null,B.hN,null,null,null,null,null,null,null)
D.caz=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null)
D.clx=new C.Op(null)
D.coj=new C.Ze(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZ9","CC",()=>D.Kp.axM(0,C.dLx(),A.y("w_"),A.y("t<c>"),y.N))})()};
(a=>{a["PKfNeV/jcIhYPdGSG1d88DkPxIE="]=a.current})($__dart_deferred_initializers__);