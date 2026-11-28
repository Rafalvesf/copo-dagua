((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,L,M,E,N,O,C={
dFS(){var x,w=$.Qe(),v=J.op(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aT(B.j.hQ(w.qR(256),16),2,"0")
return B.e.hI(v)},
aTO(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aTO=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.P()
q=r.b
q===$&&A.b()
q=q.gbu().e.a
u=(q==null?null:q.r).a
t=B.f.t(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dFS()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r2(s,d,new A.v1(!1,f)),$async$aTO)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cc(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aTO,w)},
dc4(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
rB(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rB=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bS(null,new C.cMj(),!1,d,!0,!1,null,l),$async$rB)
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
return A.d(new A.lI().YL(85,2048,B.fs),$async$rB)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kh(),$async$rB)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fn(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aTO(t,s,C.dc4(s)),$async$rB)
case 12:v=new j.Il(f,r,s)
x=1
break
case 7:x=13
return A.d($.dgs().xT(D.byY,null,null),$async$rB)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kh(),$async$rB)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a1(D.bYM)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.ca(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbs6(p))
if(B.f.fn(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aTO(t,l,C.dc4(l)),$async$rB)
case 15:v=new j.Il(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bS(null,new C.cMk(),!1,d,!0,!1,null,l),$async$rB)
case 16:n=f
v=n==null?null:new C.Il("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bS(null,new C.cMl(),!1,d,!0,!0,null,l),$async$rB)
case 17:m=f
v=m==null?null:new C.Il(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rB,w)},
Il:function Il(d,e,f){this.a=d
this.b=e
this.c=f},
cMj:function cMj(){},
cMk:function cMk(){},
cMl:function cMl(){},
NM:function NM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJ4:function bJ4(d,e){this.a=d
this.b=e},
Ze:function Ze(d){this.a=d},
cxZ:function cxZ(d,e){this.a=d
this.b=e},
Op:function Op(d){this.a=d},
ads:function ads(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bYM:function bYM(d){this.a=d},
bYN:function bYN(d,e){this.a=d
this.b=e},
bYO:function bYO(d){this.a=d},
bYP:function bYP(d){this.a=d},
bYR:function bYR(d){this.a=d},
bYQ:function bYQ(d,e,f){this.a=d
this.b=e
this.c=f},
R1:function R1(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aZv:function aZv(d,e){this.a=d
this.b=e},
aZs:function aZs(d){this.a=d},
aZu:function aZu(d){this.a=d},
aZt:function aZt(d){this.a=d},
aZw:function aZw(d){this.a=d},
dy5(d){return new C.w_(d,A.E(y.N,y.F),new A.ae(A.jg(0,0),0,!1))},
cZP(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dn(d,new C.cSs(),y.N).bx(0)
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
bDH:function bDH(){},
bDI:function bDI(d){this.a=d},
bDF:function bDF(){},
bDG:function bDG(){},
bDJ:function bDJ(d,e){this.a=d
this.b=e},
bDK:function bDK(d){this.a=d},
bDE:function bDE(d){this.a=d},
bDN:function bDN(){},
bDO:function bDO(){},
bDL:function bDL(){},
bDM:function bDM(){},
cSs:function cSs(){},
a_d(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_d=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a1(D.bZ8)
x=1
break}x=3
return A.d(A.bS(null,new C.cRO(A.dy(h,0,A.es(12,"count",y.r),A.a8(h).c).bx(0)),!1,d,!0,!0,null,y.C),$async$a_d)
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
cRO:function cRO(d){this.a=d},
cRN:function cRN(d,e){this.a=d
this.b=e},
cUe(d,e,f,g,h,i,j,k,l){return new C.anv(g,d,k,h,i,e,j,l,f,null)},
anv:function anv(d,e,f,g,h,i,j,k,l,m){var _=this
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
aZI:function aZI(){},
aZF:function aZF(d){this.a=d},
aZH:function aZH(d){this.a=d},
aZG:function aZG(d){this.a=d},
cFG(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.af)
v=new A.b5(16,16)
u=d[x]
w.push(new A.bI(1,B.at,A.x(t,A.y(A.a([A.h(u.a,1,B.a1,t,t,B.c1,t,t),B.aU,A.h(u.b,t,t,t,t,B.bf,B.a4,t)],s),B.v,B.h,B.l),B.r,t,t,new A.I(B.a3,t,t,new A.cy(v,v,v,v),t,t,B.x),t,t,t,D.atT,t,t,t),t))
B.e.n(r,w)}return A.O(r,B.v,B.h,B.l,0,t)},
akc(d,e,f){var x,w=null
if(f){x=A.fK(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.aa,B.c6,w,w,B.d_,w)
x=A.hh(A.h(d,w,w,w,w,w,w,w),e,x)}else{x=A.cc(B.z,w,w,B.t,w,w,B.aa,w,w,B.d_)
x=A.bB(A.h(d,w,w,w,w,w,w,w),e,x)}return A.aJ(x,52,w)},
cYH(d,e,f,g){var x=null,w=y.p,v=A.a([new A.dl(1,B.bc,A.h(d,x,x,x,x,B.c1,B.a4,x),x)],w)
if(g)B.e.n(v,A.a([B.dY,D.P4],w))
v=A.a([new A.cf(d,76,e,!1,!0,x),B.aD,A.O(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.h(f,x,x,x,x,B.L,B.a4,x)],w))
return new A.bC(B.aw,x,B.aC,B.y,A.a([new A.S(B.jA,A.bM(A.y(v,B.v,B.h,B.l),x,x),x),D.bPf],w),x)},
cFo(d,e){var x,w,v=null,u=A.aR(d,B.dQ,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a0)
w.push(e[x])
B.e.n(s,w)}return A.bA(!0,new A.e8(new A.aQ(0,1/0,0,u.a.b*0.9),A.dR(A.y(s,B.E,B.h,B.l),B.y,v,B.al,v,B.av),v),v,B.Z,!1)},
abS:function abS(d,e){this.c=d
this.a=e},
bPa:function bPa(d){this.a=d},
d1L(d){var x,w,v,u
for(x=new A.cd(d),w=y.E,x=new A.ag(x,x.gA(0),w.i("ag<V.E>")),w=w.i("V.E"),v=0;x.q();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDo[B.j.aI(v,5)]},
cUd(d,e,f,g,h,i,j){return new C.anu(d,i,f,e,g,j,h,null)},
zt:function zt(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
anu:function anu(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aZy:function aZy(d,e){this.a=d
this.b=e},
aZz:function aZz(d,e){this.a=d
this.b=e},
aZB:function aZB(){},
aZA:function aZA(d){this.a=d},
aZx:function aZx(d,e){this.a=d
this.b=e},
R2:function R2(d,e){this.c=d
this.a=e},
Kb:function Kb(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ae9:function ae9(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c6L:function c6L(d,e){this.a=d
this.b=e},
bnn:function bnn(d,e){this.a=d
this.b=e},
aXl:function aXl(){},
aXm:function aXm(){},
al9:function al9(){},
Ip:function Ip(){},
b_c:function b_c(d,e){this.a=d
this.b=e},
abR:function abR(){},
d5q(d,e,f,g,h,i,j,k){return new C.a57(A.dJB(C.dKi(),i,j),d,g,h,e,A.akB(e),f,i.i("@<0>").b7(j).b7(k).i("a57<1,2,3>"))},
bih(d,e,f,g,h,i,j,k,l,m){return new A.xK(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xK<1,2>"))},
a57:function a57(d,e,f,g,h,i,j,k){var _=this
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
G=c[399]
H=c[377]
I=c[175]
K=c[427]
L=c[328]
M=c[156]
E=c[234]
N=c[166]
O=c[426]
C=a.updateHolder(c[121],C)
D=c[229]
P=c[375]
Q=c[390]
R=c[263]
S=c[177]
T=c[425]
F=c[227]
C.Il.prototype={
gap(d){return this.c}}
C.NM.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eW(!1,w,!0,new A.S(B.hv,A.y(A.a([A.x(x,A.b8(this.c,$.at,x,x,26),B.r,x,x,new A.I(B.a3,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aD,A.h(this.d,x,x,x,x,B.hN,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,new C.bJ4(this,d),x,x,x,x,x,x,x)}}
C.Ze.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwE[x]
v=new A.b5(14,14)
s.push(A.eW(!1,new A.cy(v,v,v,v),!0,new A.S(B.q0,A.arM(w,B.kg,u,u),u),u,!0,u,u,u,u,u,u,u,u,new C.cxZ(d,w),u,u,u,u,u,u,u))}return new A.S(D.asu,A.y(A.a([D.c6V,B.R,A.ar2(1,s,4,8,8,u,B.dW,!0)],t),B.G,B.h,B.J),u)}}
C.Op.prototype={
S(){return new C.ads(new A.aE(B.ak,$.aa()),D.ie)}}
C.ads.prototype={
ad(){this.aq()
this.HR("")},
m(){var x=this.d
x.Z$=$.aa()
x.W$=0
this.a7()},
HR(d){return this.bfT(d)},
bfT(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HR=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.bYM(s))
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
p=A.aiQ("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUd(p,null),$async$HR)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bt.jG(0,A.je(A.jc(q.e)).bI(0,q.w),null)),"data"))
s.p(new C.bYN(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.bYO(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.bYP(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HR,w)},
u(d){var x=this,w=null,v=A.aR(d,w,y.w).w,u=A.cp(w,B.a5,!1,w,!0,B.y,w,A.cr(),x.d,w,w,w,w,w,2,D.aEB,B.W,!0,w,!0,w,!1,w,B.aB,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaT0(),w,!1,w,w,!1,w,!0,w,B.al,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b_,w,B.rQ,w,w),t=x.r
if(t!=null)t=A.bM(A.h(t,w,w,w,w,B.mg,B.a4,w),w,w)
else t=x.f?D.bXf:N.ar1(T.a8m,new C.bYR(x),x.e.length,w,w,!1)
return A.aJ(new A.S(D.ass,A.y(A.a([u,B.ac,A.a4(t,1),B.aD,D.acH],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.R1.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aR(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b1(s.c,"asset:"))return A.arM(B.f.bD(s.c,6),B.kg,120,120)
if(p==="image"||p==="gif")return A.ct(r,A.fQ(A.W(16),new A.e8(new A.aQ(0,q,0,320),A.k2(s.c,new C.aZt(q),B.bE,r,new C.aZu(q),r,r),r),B.bb),B.W,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.aZv(s,d),r,r,r,r,r,r,!1,B.aF)
p=A.W(16)
x=s.f
w=x?$.at:B.a3
v=A.W(16)
u=A.b8(O.Ov,x?B.t:$.at,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aH(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r)
return A.eW(!1,p,!0,A.x(r,A.O(A.a([u,B.ab,new A.dl(1,B.bc,t,r),B.bh,A.b8(L.vb,x?B.t:B.V,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aQ(0,q,0,1/0),new A.I(w,r,r,v,r,r,B.x),r,r,r,D.arX,r,r,r),r,!0,r,r,r,r,r,r,r,r,new C.aZw(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
C.w_.prototype={
d_(){var x=this,w=y.T,v=A.eP(x).G(A.cC($.b6(),new C.bDH(),y.D,w),w)
A.eP(x).Yh(new C.bDI(x))
if(v==null)return B.a5
w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.LS(0,"typing:"+x.x,B.ye).bx_(new C.bDJ(x,v),"typing")
w.Pu(0)
x.y=w
x.Q=A.u2(B.hq,new C.bDK(x))
return B.a5},
ak7(){var x,w=this,v=w.z
v.ee(v,new C.bDE(new A.ae(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c3(v,v.r,v.e,A.u(v).i("c3<2>"));v.q();)x.push(v.d.a)
if(x.length!==J.aO(w.ga4(0))||!B.e.e6(x,J.dlE(w.ga4(0))))w.sa4(0,x)},
acv(d){var x,w=this,v=w.y,u=A.eP(w).a_(0,$.b6(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ae(Date.now(),0,!1)
if(x.cu(w.as).a<2e6)return
w.as=x
v.aea(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GG).cB(new C.bDN(),new C.bDO(),y.H)},
cZ(d){var x=this.y,w=A.eP(this).a_(0,$.b6(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ae(A.jg(0,0),0,!1)
x.aea(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GG).cB(new C.bDL(),new C.bDM(),y.H)}}
C.B_.prototype={}
C.anv.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cf(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.dl(1,B.bc,A.h(s.c,1,B.a1,r,r,B.a9,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.dY,D.P4],x))
w=A.a([A.O(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uJ,A.x(r,A.h(v,1,r,r,r,B.he,r,r),B.r,r,r,new A.I(B.cx,r,r,u,r,r,B.x),r,r,r,B.CR,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aH(r,r,B.V,r,r,r,r,r,r,r,r,13,r,r,B.b0,r,r,!0,r,r,r,r,r,r,r,r),r,r))}t=A.O(A.a([q,B.ae,A.a4(A.y(w,B.G,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d2(0,B.bm,B.z.cc(0.06),B.G5,14)],y.V)
w=A.aR(d,B.b5,y.w).w
v=new C.aZI().$3(K.OT,"Voltar",new C.aZF(d))
u=s.r
v=A.a([v,B.ae,A.a4(u==null?t:A.aW(t,u,r),1)],x)
B.e.n(v,A.a([B.ae,A.Ec(A.x(B.K,Q.E2,B.r,r,r,B.c_,r,44,r,r,r,r,44),r,new C.aZG(s),new C.aZH(s),r,D.bP7,"Mais op\xe7\xf5es",y.N)],x))
return A.x(r,A.y(A.a([A.O(v,B.v,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.I(B.t,r,r,B.tz,q,r,B.x),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gap(d){return this.c}}
C.abS.prototype={
u(d){var x=null
return A.bk(x,!0,x,A.ct(x,A.x(x,B.ic,B.r,x,x,new A.I(B.z,x,this.c?A.bz(B.t,2):x,x,x,x,B.ap),x,44,x,x,x,x,44),B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPa(d),x,x,x,x,x,x,!1,B.aF),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a6,x)}}
C.zt.prototype={
u(d){var x=null,w=A.aR(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(E.MK,A.h(v,x,x,x,x,A.aH(x,x,C.d1L(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aH(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bl,x,1.4,!0,x,x,x,x,x,x,x,x),x,x))
return new A.e8(new A.aQ(0,w.a.a*0.78,0,1/0),A.x(x,A.y(o,B.G,B.h,B.J),B.r,x,x,new A.I(r,x,x,new A.cy(F.y7,F.y7,new A.b5(q,q),new A.b5(p,p)),x,x,B.x),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.anu.prototype={
ahW(d){if(!A.ua(this.c.a.a)){d.O(y.q).f.a1(D.bYH)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aW(A.x(B.K,B.OW,B.r,t,t,B.c_,t,44,t,t,t,t,44),u.e,t),B.ab],s))
x=A.W(24)
r.push(A.a4(A.x(B.ba,A.cp(t,B.a5,!1,t,!0,B.y,t,A.cr(),u.c,t,t,t,t,t,2,A.j3(t,B.br,t,B.Z,t,t,t,t,!0,B.br,t,t,t,t,t,t,!1,t,t,t,t,B.br,t,t,t,t,t,t,t,t,B.me,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.W,!0,t,!0,t,!1,t,B.aB,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.aZy(u,d),t,!1,t,t,!1,t,!0,t,B.al,t,t,t,t,t,t,t,t,t,t,t,B.fh,!0,B.au,t,B.b_,t,B.a9m,t,t),B.r,t,t,new A.I(B.a3,t,t,x,t,t,B.x),t,48,t,B.bW,t,t,t),1))
r.push(B.ab)
r.push(A.bk(t,!0,t,A.aW(A.x(B.K,D.aDg,B.r,t,t,B.c_,t,44,t,t,t,t,44),new C.aZz(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a6,t))
w=A.O(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d2(0,B.bm,B.z.cc(0.12),B.kH,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aJ(A.a4c(B.y,new C.aZA(u),v,t,t,B.bJ,new C.aZB()),34,t),B.ac],s))
x.push(w)
return A.x(t,A.bA(!0,new A.S(B.ht,A.y(x,B.E,B.h,B.J),t),t,D.arx,!1),B.r,t,t,new A.I(B.t,t,t,B.pe,r,t,B.x),t,t,t,t,t,t,t)}}
C.R2.prototype={
u(d){var x=null,w=this.c
return A.aWb(B.f6,w==null?D.bWJ:new A.S(D.asy,A.bM(A.h(w,x,x,x,x,B.k8,x,x),x,x),x),B.cE,B.aM)}}
C.Kb.prototype={
S(){return new C.ae9()}}
C.ae9.prototype={
ad(){var x,w=this
w.aq()
x=w.a
w.e=x.d
x.c.an(0,w.ga17())},
bm(d){var x,w,v=this
v.bE(d)
x=d.c
if(x!==v.a.c){w=v.ga17()
x.a2(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a2(0,this.ga17())
this.a7()},
aT3(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gby(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c6L(w,x))},
b5q(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aR(x,null,y.w).w
w=this.a
if(x.ax)w.c.hv(0)
else w.c.hY(0,B.es,G.Cr)},
u(d){var x,w,v,u=this,t=null,s=B.j.af(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iR(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.x(B.K,D.aD9,B.r,t,t,D.afn,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bz(B.z,2)
r.push(A.ca(t,A.x(B.K,A.h(""+s,t,t,t,t,B.hN,t,t),B.r,t,B.lb,new A.I(B.t,t,v,x,t,t,B.x),t,20,t,B.CO,t,t,t),t,t,t,-6,-6,t))}q.push(A.ca(16,A.bk(t,!0,t,A.aW(new A.bC(B.aw,t,B.aC,B.r,r,t),u.gb5p(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a6,t),t,t,t,20,t,t))}return new A.bC(B.aw,t,B.aC,B.y,q,t)}}
C.bnn.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aXl.prototype={
$1(d){return A.mU(d,null,!0,null,null,y.S,y.z)},
gWQ(d){return D.agM},
axM(d,e,f,g,h){return this.gWQ(this).$3$1(e,f,g,h)}}
C.aXm.prototype={
$3$1(d,e,f,g){return C.d5q(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.al9.prototype={}
C.Ip.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_c(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.abR.prototype={}
C.a57.prototype={}
var z=a.updateTypes(["~()","Ze(N)","Op(N)","F<~>(c)","t<c>()","w_(c)","xK<0^,1^>(0^(){$allTransitiveDependencies!w<h6>?,argument!L?,dependencies!w<h6>?,from!kN?,isAutoDispose!C,name!c?,retry!bm?(v,L)?})<f9<1^>,L?>"])
C.cMj.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.asY,A.y(A.a([A.O(A.a([new C.NM(B.jQ,"Foto","photo",x),new C.NM(D.aBK,"Ficheiro","file",x),new C.NM(R.jN,"Sticker","sticker",x),new C.NM(D.aBC,"GIF","gif",x)],w),B.v,B.a0q,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:72}
C.cMk.prototype={
$1(d){return D.cok},
$S:z+1}
C.cMl.prototype={
$1(d){return D.cly},
$S:z+2}
C.bJ4.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e)},
$S:0}
C.cxZ.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.bYM.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.bYN.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bd(this.b,y.P),v=A.u(w),w=new A.ag(w,w.gA(w),v.i("ag<V.E>")),u=y.f,v=v.i("V.E");w.q();){t=w.d
x=t==null?v.a(t):t
J.bp(s,new A.X(A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.Y(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.bYO.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.bYP.prototype={
$0(){return this.a.f=!1},
$S:0}
C.bYR.prototype={
$2(d,e){var x=null,w=this.a
return A.eW(!1,x,!0,A.fQ(A.W(10),A.k2(w.e[e].a,x,B.bE,x,x,x,x),B.bb),x,!0,x,x,x,x,x,x,x,x,new C.bYQ(w,d,e),x,x,x,x,x,x,x)},
$S:1327}
C.bYQ.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e[this.c].b)},
$S:0}
C.aZv.prototype={
$0(){var x=y.H
return A.am(this.b,!1).h_(A.tn(new C.aZs(this.a),null,x),x)},
$S:0}
C.aZs.prototype={
$1(d){var x=null
return A.ks(A.cTY(B.an,x,B.t,x),B.an,A.bM(I.cVe(B.Z,A.pl(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1328}
C.aZu.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1329}
C.aZt.prototype={
$3(d,e,f){var x=null
return A.x(x,D.aDo,B.r,B.a3,x,x,x,120,x,x,x,x,this.a)},
$S:71}
C.aZw.prototype={
$0(){return A.z0(A.dz(this.a.c,0,null),B.qi,null)},
$S:0}
C.bDH.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bDI.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aL(0)
x=w.y
w.y=null
if(x!=null){w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.y_(x).cB(new C.bDF(),new C.bDG(),y.H)}},
$S:0}
C.bDF.prototype={
$1(d){},
$S:124}
C.bDG.prototype={
$1(d){},
$S:11}
C.bDJ.prototype={
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
C.bDK.prototype={
$1(d){return this.a.ak7()},
$S:67}
C.bDE.prototype={
$2(d,e){return e.b.fe(this.a)},
$S:1330}
C.bDN.prototype={
$1(d){},
$S:241}
C.bDO.prototype={
$1(d){},
$S:11}
C.bDL.prototype={
$1(d){},
$S:241}
C.bDM.prototype={
$1(d){},
$S:11}
C.cSs.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:23}
C.cRO.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.Im,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r)
p.push(A.jm(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aD7,r,r,r,r,new C.cRN(d,u),!1,r,r,r,r,r,s,r,t,r,E.P3,r))}return A.bA(!0,new A.S(D.asv,A.y(A.a([D.c9C,B.ar,D.caA,B.P,new A.dl(1,B.bc,A.d4(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:36}
C.cRN.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.aZI.prototype={
$3(d,e,f){var x=null
return A.kv(A.aW(A.x(B.K,d,B.r,x,x,B.c_,x,44,x,x,x,x,44),f,x),x,e)},
$S:1331}
C.aZF.prototype={
$0(){return A.am(this.a,!1).i6()},
$S:0}
C.aZH.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.aZG.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.G)(x),++u){t=x[u].a
r.push(A.bnm(A.h(t,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bP_)
return r},
$S:60}
C.bPa.prototype={
$0(){return A.am(this.a,!1).bl()},
$S:0}
C.aZy.prototype={
$1(d){return this.a.ahW(this.b)},
$S:3}
C.aZz.prototype={
$0(){return this.a.ahW(this.b)},
$S:0}
C.aZB.prototype={
$2(d,e){return B.ab},
$S:111}
C.aZA.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bz(B.z,1.5)
return A.aW(A.x(B.K,A.h(w.w[e],x,x,x,x,B.dZ,x,x),B.r,x,x,new A.I(B.t,x,u,v,x,x,B.x),x,34,x,B.cG,x,x,x),new C.aZx(w,e),x)},
$S:170}
C.aZx.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c6L.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_c.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Ip.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.ads.prototype,"gaT0","HR",3)
w(C,"dLf","dy5",5)
v(C.w_.prototype,"giD","d_",4)
var t
v(t=C.ae9.prototype,"ga17","aT3",0)
v(t,"gb5p","b5q",0)
u(C,"dKi",1,function(){return{$allTransitiveDependencies:B.cN,argument:B.cN,dependencies:B.cN,from:B.cN,isAutoDispose:B.cN,name:B.cN,retry:B.cN}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bih",function(d,e,f,g,h,i,j,k){return C.bih(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bih(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bih(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.L,[C.Il,C.B_,C.aXl,C.aXm,C.al9])
w(A.bv,[C.cMj,C.cMk,C.cMl,C.aZs,C.aZu,C.aZt,C.bDH,C.bDF,C.bDG,C.bDJ,C.bDK,C.bDN,C.bDO,C.bDL,C.bDM,C.cSs,C.cRO,C.aZI,C.aZH,C.aZG,C.aZy])
w(A.M,[C.NM,C.Ze,C.R1,C.anv,C.abS,C.zt,C.anu,C.R2])
w(A.bN,[C.bJ4,C.cxZ,C.bYM,C.bYN,C.bYO,C.bYP,C.bYQ,C.aZv,C.aZw,C.bDI,C.cRN,C.aZF,C.bPa,C.aZz,C.aZx,C.c6L,C.b_c])
w(A.H,[C.Op,C.Kb])
w(A.a1,[C.ads,C.ae9])
w(A.cJ,[C.bYR,C.bDE,C.aZB,C.aZA])
v(C.w_,A.f9)
v(C.bnn,A.ff)
v(C.abR,A.kN)
v(C.Ip,C.abR)
v(C.a57,C.Ip)
x(C.abR,C.al9)})()
A.bt(b.typeUniverse,JSON.parse('{"Ze":{"M":[],"e":[],"f":[]},"Op":{"H":[],"e":[],"f":[]},"NM":{"M":[],"e":[],"f":[]},"ads":{"a1":["Op"]},"R1":{"M":[],"e":[],"f":[]},"w_":{"f9":["t<c>"]},"anv":{"M":[],"e":[],"f":[]},"abS":{"M":[],"e":[],"f":[]},"Kb":{"H":[],"e":[],"f":[]},"zt":{"M":[],"e":[],"f":[]},"anu":{"M":[],"e":[],"f":[]},"R2":{"M":[],"e":[],"f":[]},"ae9":{"a1":["Kb"]},"Ip":{"kN":[],"h6":[],"GX":[],"lL":[]},"a57":{"Ip":["1","2","2","3","2","xK<1,2>"],"kN":[],"h6":[],"GX":[],"lL":[],"Ip.0":"1"}}'))
A.PC(b.typeUniverse,JSON.parse('{"al9":5,"abR":6}'))
var y=(function rtii(){var x=A.z
return{D:x("cF"),E:x("cd"),V:x("r<d2>"),X:x("r<pA<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("ds"),S:x("f9<@>"),F:x("+(c,ae)"),C:x("B_"),N:x("c"),q:x("dp"),z:x("@"),r:x("v"),B:x("Il?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.cac=new A.D("Powered by GIPHY",null,H.Ik,null,null,null,null,null,null,null)
D.acH=new A.cY(B.e_,null,null,D.cac,null)
D.afn=new A.I(B.z,null,null,null,B.id,null,B.ap)
D.Kp=new C.aXl()
D.agM=new C.aXm()
D.arx=new A.a3(0,0,0,24)
D.arX=new A.a3(12,10,14,10)
D.ass=new A.a3(16,16,16,12)
D.asu=new A.a3(16,16,16,24)
D.asv=new A.a3(16,16,16,8)
D.asy=new A.a3(16,2,16,8)
D.asY=new A.a3(20,18,20,24)
D.atT=new A.a3(8,12,8,12)
D.aBC=new A.aZ(57404,"HeroiconsSolid",null,!1)
D.aBK=new A.aZ(57436,"HeroiconsSolid",null,!1)
D.P4=new A.b7(B.i7,18,B.bp,null,"Verificado",null)
D.aD7=new A.b7(B.fd,null,B.V,null,null,null)
D.aBr=new A.aZ(57347,"HeroiconsSolid",null,!1)
D.aD9=new A.b7(D.aBr,20,B.t,null,null,null)
D.aDg=new A.b7(B.lB,20,B.t,null,null,null)
D.aDo=new A.b7(B.jQ,null,B.V,null,null,null)
D.aCq=new A.b7(B.vd,null,null,null,null,null)
D.aEB=new A.dC(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwE=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.byY=x([],A.z("r<d92>"))
D.bz0=x([],A.z("r<+(c,~())>"))
D.ie=x([],y.L)
D.amg=new A.Z(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.an4=new A.Z(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.ao7=new A.Z(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amH=new A.Z(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDo=x([D.amg,B.cT,D.an4,D.ao7,D.amH],A.z("r<Z>"))
D.bP_=new A.jL("report",!0,P.aau,null,A.z("jL<c>"))
D.bP7=new C.bnn(1,"under")
D.ckB=new C.abS(!1,null)
D.bPf=new A.eE(null,0,0,null,null,null,D.ckB,null)
D.bWJ=new A.c4(1/0,null,null,null)
D.bXf=new S.yc(12,3,null)
D.c9S=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null)
D.bYH=new A.bE(D.c9S,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cbt=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null)
D.bYM=new A.bE(D.cbt,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c8D=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null)
D.bZ8=new A.bE(D.c8D,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c6V=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null)
D.c9C=new A.D("Que mensagem queres denunciar?",null,B.hM,null,null,null,null,null,null,null)
D.caA=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null)
D.cly=new C.Op(null)
D.cok=new C.Ze(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dYS","CC",()=>D.Kp.axM(0,C.dLf(),A.z("w_"),A.z("t<c>"),y.N))})()};
(a=>{a["1QI/9bv+4YqTkA0T1OzoWxwiuNY="]=a.current})($__dart_deferred_initializers__);