((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,L,M,E,N,O,C={
dGH(){var x,w=$.Qm(),v=J.nJ(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aV(B.j.hW(w.qV(256),16),2,"0")
return B.e.hN(v)},
aUy(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUy=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.Q()
q=r.b
q===$&&A.b()
q=q.gbx().e.a
u=(q==null?null:q.r).a
t=B.f.q(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dGH()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r6(s,d,new A.v2(!1,f)),$async$aUy)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cn(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUy,w)},
dcZ(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.bW(null,new C.cNh(),!1,d,!0,!1,null,l),$async$rH)
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
return A.d(new A.lJ().Zh(85,2048,B.fs),$async$rH)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.km(),$async$rH)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fp(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUy(t,s,C.dcZ(s)),$async$rH)
case 12:v=new j.Iv(f,r,s)
x=1
break
case 7:x=13
return A.d($.dhk().y9(D.bzf,null,null),$async$rH)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.km(),$async$rH)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a2(D.bZz)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.c2(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbtJ(p))
if(B.f.fp(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUy(t,l,C.dcZ(l)),$async$rH)
case 15:v=new j.Iv(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bW(null,new C.cNi(),!1,d,!0,!1,null,l),$async$rH)
case 16:n=f
v=n==null?null:new C.Iv("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bW(null,new C.cNj(),!1,d,!0,!0,null,l),$async$rH)
case 17:m=f
v=m==null?null:new C.Iv(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rH,w)},
Iv:function Iv(d,e,f){this.a=d
this.b=e
this.c=f},
cNh:function cNh(){},
cNi:function cNi(){},
cNj:function cNj(){},
NU:function NU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJN:function bJN(d,e){this.a=d
this.b=e},
Zr:function Zr(d){this.a=d},
cyX:function cyX(d,e){this.a=d
this.b=e},
Ox:function Ox(d){this.a=d},
adZ:function adZ(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
c_0:function c_0(d){this.a=d},
c_1:function c_1(d,e){this.a=d
this.b=e},
c_2:function c_2(d){this.a=d},
c_3:function c_3(d){this.a=d},
c_5:function c_5(d){this.a=d},
c_4:function c_4(d,e,f){this.a=d
this.b=e
this.c=f},
R8:function R8(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_f:function b_f(d,e){this.a=d
this.b=e},
b_c:function b_c(d){this.a=d},
b_e:function b_e(d){this.a=d},
b_d:function b_d(d){this.a=d},
b_g:function b_g(d){this.a=d},
dyV(d){return new C.w2(d,A.E(y.N,y.F),new A.ac(A.j4(0,0),0,!1))},
d_O(d){var x,w=J.a7(d)
if(w.gZ(d))return null
x=w.du(d,new C.cTl(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w2:function w2(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bEo:function bEo(){},
bEp:function bEp(d){this.a=d},
bEm:function bEm(){},
bEn:function bEn(){},
bEq:function bEq(d,e){this.a=d
this.b=e},
bEr:function bEr(d){this.a=d},
bEl:function bEl(d){this.a=d},
bEu:function bEu(){},
bEv:function bEv(){},
bEs:function bEs(){},
bEt:function bEt(){},
cTl:function cTl(){},
a_q(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_q=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a2(D.bZ_)
x=1
break}x=3
return A.d(A.bW(null,new C.cSH(A.dG(h,0,A.ew(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_q)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wu(d,e,f,u.c,u.d,g,t),$async$a_q)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_q,w)},
B7:function B7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSH:function cSH(d){this.a=d},
cSG:function cSG(d,e){this.a=d
this.b=e},
cV6(d,e,f,g,h,i,j,k,l){return new C.ao4(g,d,k,h,i,e,j,l,f,null)},
ao4:function ao4(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_s:function b_s(){},
b_p:function b_p(d){this.a=d},
b_r:function b_r(d){this.a=d},
b_q:function b_q(d){this.a=d},
cGH(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.af)
v=new A.b6(16,16)
u=d[x]
w.push(new A.bO(1,B.au,A.y(t,A.A(A.a([A.h(u.a,1,B.a1,t,t,B.c1,t,t,t),B.aU,A.h(u.b,t,t,t,t,B.be,B.a4,t,t)],s),B.v,B.h,B.l),B.r,t,t,new A.K(B.a5,t,t,new A.cy(v,v,v,v),t,t,B.x),t,t,t,D.aud,t,t,t),t))
B.e.n(r,w)}return A.O(r,B.v,B.h,B.l,0,t)},
akK(d,e,f){var x,w=null
if(f){x=A.fP(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c8,w,w,B.d0,w)
x=A.hh(A.h(d,w,w,w,w,w,w,w,w),e,x)}else{x=A.cj(B.z,w,w,B.t,w,w,B.ab,w,w,B.d0)
x=A.bE(A.h(d,w,w,w,w,w,w,w,w),e,x)}return A.aH(x,52,w)},
cZD(d,e,f,g){var x=null,w=y.p,v=A.a([new A.dd(1,B.b4,A.h(d,x,x,x,x,B.c1,B.a4,x,x),x)],w)
if(g)B.e.n(v,A.a([B.e6,D.Pp],w))
v=A.a([new A.ci(d,76,e,!1,!0,x),B.aF,A.O(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.h(f,x,x,x,x,B.M,B.a4,x,x)],w))
return new A.bB(B.ax,x,B.aD,B.y,A.a([new A.S(B.jF,A.bL(A.A(v,B.v,B.h,B.l),x,x),x),D.bPE],w),x)},
cGr(d,e){var x,w,v=null,u=A.aO(d,B.dS,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a0)
w.push(e[x])
B.e.n(s,w)}return A.bD(!0,new A.e5(new A.aR(0,1/0,0,u.a.b*0.9),A.dT(A.A(s,B.E,B.h,B.l),B.y,v,B.ao,v,B.av),v),v,B.a_,!1)},
acj:function acj(d,e){this.c=d
this.a=e},
bPY:function bPY(d){this.a=d},
d2K(d){var x,w,v,u
for(x=new A.ce(d),w=y.E,x=new A.aj(x,x.gA(0),w.i("aj<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDJ[B.j.aF(v,5)]},
cV5(d,e,f,g,h,i,j){return new C.ao3(d,i,f,e,g,j,h,null)},
zE:function zE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ao3:function ao3(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_i:function b_i(d,e){this.a=d
this.b=e},
b_j:function b_j(d,e){this.a=d
this.b=e},
b_l:function b_l(){},
b_k:function b_k(d){this.a=d},
b_h:function b_h(d,e){this.a=d
this.b=e},
R9:function R9(d,e){this.c=d
this.a=e},
Ko:function Ko(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeH:function aeH(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c81:function c81(d,e){this.a=d
this.b=e},
bo6:function bo6(d,e){this.a=d
this.b=e},
aY5:function aY5(){},
aY6:function aY6(){},
alH:function alH(){},
Iz:function Iz(){},
b_X:function b_X(d,e){this.a=d
this.b=e},
aci:function aci(){},
d6k(d,e,f,g,h,i,j,k){return new C.a5q(A.dKr(C.dL8(),i,j),d,g,h,e,A.al9(e),f,i.i("@<0>").b8(j).b8(k).i("a5q<1,2,3>"))},
bjc(d,e,f,g,h,i,j,k,l,m){return new A.xS(d,h,f,j,k,g,e,i,l.i("@<0>").b8(m).i("xS<1,2>"))},
a5q:function a5q(d,e,f,g,h,i,j,k){var _=this
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
G=c[406]
H=c[383]
I=c[178]
K=c[434]
L=c[334]
M=c[155]
E=c[240]
N=c[187]
O=c[433]
C=a.updateHolder(c[120],C)
D=c[235]
P=c[381]
Q=c[397]
R=c[270]
S=c[182]
T=c[432]
F=c[233]
C.Iv.prototype={
gar(d){return this.c}}
C.NU.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eP(!1,w,!0,new A.S(B.hx,A.A(A.a([A.y(x,A.b5(this.c,$.at,x,x,26),B.r,x,x,new A.K(B.a5,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aF,A.h(this.d,x,x,x,x,B.hP,x,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,x,new C.bJN(this,d),x,x,x,x,x,x,x)}}
C.Zr.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwX[x]
v=new A.b6(14,14)
s.push(A.eP(!1,new A.cy(v,v,v,v),!0,new A.S(B.qn,A.ask(w,B.kf,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,new C.cyX(d,w),u,u,u,u,u,u,u))}return new A.S(D.asN,A.A(A.a([D.cdD,B.Q,A.a3k(1,s,4,8,8,u,B.dO,!0)],t),B.G,B.h,B.J),u)}}
C.Ox.prototype={
R(){return new C.adZ(new A.aE(B.aj,$.aa()),D.ic)}}
C.adZ.prototype={
ac(){this.ap()
this.Id("")},
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a6()},
Id(d){return this.bhv(d)},
bhv(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Id=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.c_0(s))
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
p=A.ajk("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUY(p,null),$async$Id)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bu.jP(0,A.jf(A.jd(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.c_1(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.c_2(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.c_3(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Id,w)},
u(d){var x=this,w=null,v=A.aO(d,w,y.w).w,u=A.cr(w,B.a6,!1,w,!0,B.y,w,A.cs(),x.d,w,w,w,w,w,2,D.aER,B.W,!0,w,!0,w,!1,w,B.aC,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaU2(),w,!1,w,w,!1,w,!0,w,B.ao,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.at,w,B.b_,w,B.t7,w,w),t=x.r
if(t!=null)t=A.bL(A.h(t,w,w,w,w,B.mq,B.a4,w,w),w,w)
else t=x.f?D.bXK:N.a3j(w,B.W,T.a8D,new C.c_5(x),x.e.length,w,w,!1)
return A.aH(new A.S(D.asL,A.A(A.a([u,B.ac,A.a5(t,1),B.aF,D.acX],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.R8.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aO(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b2(s.c,"asset:"))return A.ask(B.f.bF(s.c,6),B.kf,120,120)
if(p==="image"||p==="gif")return A.cO(r,A.fT(A.W(16),new A.e5(new A.aR(0,q,0,320),A.k4(s.c,new C.b_d(q),B.bG,r,new C.b_e(q),r,r),r),B.bb),B.W,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_f(s,d),r,r,r,r,r,r,!1,B.aN)
p=A.W(16)
x=s.f
w=x?$.at:B.a5
v=A.W(16)
u=A.b5(O.OP,x?B.t:$.at,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aI(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eP(!1,p,!0,A.y(r,A.O(A.a([u,B.ae,new A.dd(1,B.b4,t,r),B.bi,A.b5(L.vq,x?B.t:B.V,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.K(w,r,r,v,r,r,B.x),r,r,r,D.ase,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,new C.b_g(s),r,r,r,r,r,r,r)},
gar(d){return this.e}}
C.w2.prototype={
d5(){var x=this,w=y.T,v=A.eO(x).G(A.cF($.b8(),new C.bEo(),y.D,w),w)
A.eO(x).YO(new C.bEp(x))
if(v==null)return B.a6
w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.Mf(0,"typing:"+x.x,B.ys).byC(new C.bEq(x,v),"typing")
w.Q3(0)
x.y=w
x.Q=A.u5(B.fR,new C.bEr(x))
return B.a6},
akP(){var x,w=this,v=w.z
v.eg(v,new C.bEl(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c4(v,v.r,v.e,A.u(v).i("c4<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aQ(w.ga4(0))||!B.e.e9(x,J.dms(w.ga4(0))))w.sa4(0,x)},
adb(d){var x,w=this,v=w.y,u=A.eO(w).a1(0,$.b8(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.cw(w.as).a<2e6)return
w.as=x
v.aeP(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GW).cC(new C.bEu(),new C.bEv(),y.H)},
d3(d){var x=this.y,w=A.eO(this).a1(0,$.b8(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.j4(0,0),0,!1)
x.aeP(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GW).cC(new C.bEs(),new C.bEt(),y.H)}}
C.B7.prototype={}
C.ao4.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.ci(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.dd(1,B.b4,A.h(s.c,1,B.a1,r,r,B.a9,r,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.e6,D.Pp],x))
w=A.a([A.O(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uY,A.y(r,A.h(v,1,r,r,r,B.hg,r,r,r),B.r,r,r,new A.K(B.cy,r,r,u,r,r,B.x),r,r,r,B.D2,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aI(r,r,B.V,r,r,r,r,r,r,r,r,13,r,r,B.b0,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=A.O(A.a([q,B.ad,A.a5(A.A(w,B.G,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d5(0,B.bm,B.z.cd(0.06),B.Gk,14)],y.V)
w=A.aO(d,B.b6,y.w).w
v=new C.b_s().$3(K.Pd,"Voltar",new C.b_p(d))
u=s.r
v=A.a([v,B.ad,A.a5(u==null?t:A.aV(t,u,r),1)],x)
B.e.n(v,A.a([B.ad,A.Em(A.y(B.K,Q.Ee,B.r,r,r,B.cc,r,44,r,r,r,r,44),r,new C.b_q(s),new C.b_r(s),r,D.bPv,"Mais op\xe7\xf5es",y.N)],x))
return A.y(r,A.A(A.a([A.O(v,B.v,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.K(B.t,r,r,B.tR,q,r,B.x),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gar(d){return this.c}}
C.acj.prototype={
u(d){var x=null
return A.ba(x,!0,x,A.cO(x,A.y(x,B.kC,B.r,x,x,new A.K(B.z,x,this.c?A.bA(B.t,2):x,x,x,x,B.as),x,44,x,x,x,x,44),B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPY(d),x,x,x,x,x,x,!1,B.aN),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x)}}
C.zE.prototype={
u(d){var x=null,w=A.aO(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(E.N3,A.h(v,x,x,x,x,A.aI(x,x,C.d2K(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aI(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bp,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.e5(new A.aR(0,w.a.a*0.78,0,1/0),A.y(x,A.A(o,B.G,B.h,B.J),B.r,x,x,new A.K(r,x,x,new A.cy(F.yl,F.yl,new A.b6(q,q),new A.b6(p,p)),x,x,B.x),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.ao3.prototype={
aiA(d){if(!A.uc(this.c.a.a)){d.O(y.q).f.a2(D.bZd)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aV(A.y(B.K,B.Pg,B.r,t,t,B.cc,t,44,t,t,t,t,44),u.e,t),B.ae],s))
x=A.W(24)
r.push(A.a5(A.y(B.bc,A.cr(t,B.a6,!1,t,!0,B.y,t,A.cs(),u.c,t,t,t,t,t,2,A.iU(t,B.bs,t,B.a_,t,t,t,t,!0,B.bs,t,t,t,t,t,t,!1,t,t,t,t,B.bs,t,t,t,t,t,t,t,t,B.mo,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.W,!0,t,!0,t,!1,t,B.aC,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_i(u,d),t,!1,t,t,!1,t,!0,t,B.ao,t,t,t,t,t,t,t,t,t,t,t,B.fi,!0,B.at,t,B.b_,t,B.a9D,t,t),B.r,t,t,new A.K(B.a5,t,t,x,t,t,B.x),t,48,t,B.bQ,t,t,t),1))
r.push(B.ae)
r.push(A.ba(t,!0,t,A.aV(A.y(B.K,D.aDw,B.r,t,t,B.cc,t,44,t,t,t,t,44),new C.b_j(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t))
w=A.O(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d5(0,B.bm,B.z.cd(0.12),B.kI,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aH(A.a4u(B.y,new C.b_k(u),v,t,t,B.bC,new C.b_l()),34,t),B.ac],s))
x.push(w)
return A.y(t,A.bD(!0,new A.S(B.hv,A.A(x,B.E,B.h,B.J),t),t,D.arN,!1),B.r,t,t,new A.K(B.t,t,t,B.pv,r,t,B.x),t,t,t,t,t,t,t)}}
C.R9.prototype={
u(d){var x=null,w=this.c
return A.aWX(B.f7,w==null?D.bXe:new A.S(D.asS,A.bL(A.h(w,x,x,x,x,B.k9,x,x,x),x,x),x),B.ct,B.aG)}}
C.Ko.prototype={
R(){return new C.aeH()}}
C.aeH.prototype={
ac(){var x,w=this
w.ap()
x=w.a
w.e=x.d
x.c.an(0,w.ga1L())},
bh(d){var x,w,v=this
v.bB(d)
x=d.c
if(x!==v.a.c){w=v.ga1L()
x.a_(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a_(0,this.ga1L())
this.a6()},
aU5(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbA(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c81(w,x))},
b74(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aO(x,null,y.w).w
w=this.a
if(x.ax)w.c.hg(0)
else w.c.i1(0,B.eu,G.CD)},
u(d){var x,w,v,u=this,t=null,s=B.j.ah(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iW(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.y(B.K,D.aDp,B.r,t,t,D.afB,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bA(B.z,2)
r.push(A.c7(t,A.y(B.K,A.h(""+s,t,t,t,t,B.hP,t,t,t),B.r,t,B.le,new A.K(B.t,t,v,x,t,t,B.x),t,20,t,B.D_,t,t,t),t,t,t,-6,-6,t))}q.push(A.c7(16,A.ba(t,!0,t,A.aV(new A.bB(B.ax,t,B.aD,B.r,r,t),u.gb73(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t),t,t,t,20,t,t))}return new A.bB(B.ax,t,B.aD,B.y,q,t)}}
C.bo6.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aY5.prototype={
$1(d){return A.mX(d,null,!0,null,null,y.S,y.z)},
gXm(d){return D.ah_},
ayF(d,e,f,g,h){return this.gXm(this).$3$1(e,f,g,h)}}
C.aY6.prototype={
$3$1(d,e,f,g){return C.d6k(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alH.prototype={}
C.Iz.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_X(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.aci.prototype={}
C.a5q.prototype={}
var z=a.updateTypes(["~()","Zr(N)","Ox(N)","F<~>(c)","t<c>()","w2(c)","xS<0^,1^>(0^(){$allTransitiveDependencies!x<h7>?,argument!J?,dependencies!x<h7>?,from!kO?,isAutoDispose!B,name!c?,retry!bp?(v,J)?})<fe<1^>,J?>"])
C.cNh.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.ati,A.A(A.a([A.O(A.a([new C.NU(B.jU,"Foto","photo",x),new C.NU(D.aBY,"Ficheiro","file",x),new C.NU(R.jR,"Sticker","sticker",x),new C.NU(D.aBQ,"GIF","gif",x)],w),B.v,B.G1,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:73}
C.cNi.prototype={
$1(d){return D.coS},
$S:z+1}
C.cNj.prototype={
$1(d){return D.cm6},
$S:z+2}
C.bJN.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e)},
$S:0}
C.cyX.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.c_0.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.c_1.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bh(this.b,y.P),v=A.u(w),w=new A.aj(w,w.gA(w),v.i("aj<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bt(s,new A.a0(A.Z(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.Z(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.c_2.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.c_3.prototype={
$0(){return this.a.f=!1},
$S:0}
C.c_5.prototype={
$2(d,e){var x=null,w=this.a
return A.eP(!1,x,!0,A.fT(A.W(10),A.k4(w.e[e].a,x,B.bG,x,x,x,x),B.bb),x,!0,x,x,x,x,x,x,x,x,x,new C.c_4(w,d,e),x,x,x,x,x,x,x)},
$S:1320}
C.c_4.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e[this.c].b)},
$S:0}
C.b_f.prototype={
$0(){var x=y.H
return A.am(this.b,!1).fO(A.ts(new C.b_c(this.a),null,x),x)},
$S:0}
C.b_c.prototype={
$1(d){var x=null
return A.ku(A.cUQ(B.an,x,B.t,x),B.an,A.bL(I.cWc(B.a_,A.pl(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1321}
C.b_e.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1322}
C.b_d.prototype={
$3(d,e,f){var x=null
return A.y(x,D.aDE,B.r,B.a5,x,x,x,120,x,x,x,x,this.a)},
$S:69}
C.b_g.prototype={
$0(){return A.zb(A.dy(this.a.c,0,null),B.qE,null)},
$S:0}
C.bEo.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bEp.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aN(0)
x=w.y
w.y=null
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yg(x).cC(new C.bEm(),new C.bEn(),y.H)}},
$S:0}
C.bEm.prototype={
$1(d){},
$S:111}
C.bEn.prototype={
$1(d){},
$S:11}
C.bEq.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e1(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.M(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a0(v,new A.ac(Date.now(),0,!1).el(5e6)))}u.akP()},
$S:253}
C.bEr.prototype={
$1(d){return this.a.akP()},
$S:66}
C.bEl.prototype={
$2(d,e){return e.b.f5(this.a)},
$S:1323}
C.bEu.prototype={
$1(d){},
$S:197}
C.bEv.prototype={
$1(d){},
$S:11}
C.bEs.prototype={
$1(d){},
$S:197}
C.bEt.prototype={
$1(d){},
$S:11}
C.cTl.prototype={
$1(d){return B.e.gL(d.split(" "))},
$S:24}
C.cSH.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.ID,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jo(!1,B.a_,r,r,!0,r,r,r,!0,r,D.aDn,r,r,r,r,new C.cSG(d,u),!1,r,r,r,r,r,s,r,t,r,E.Po,r))}return A.bD(!0,new A.S(D.asO,A.A(A.a([D.ceJ,B.aq,D.c9j,B.R,new A.dd(1,B.b4,A.d6(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.a_,!0)},
$S:44}
C.cSG.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.b_s.prototype={
$3(d,e,f){var x=null
return A.kX(A.aV(A.y(B.K,d,B.r,x,x,B.cc,x,44,x,x,x,x,44),f,x),x,e)},
$S:1324}
C.b_p.prototype={
$0(){return A.am(this.a,!1).iw()},
$S:0}
C.b_r.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_q.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bo5(A.h(t,s,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bPq)
return r},
$S:59}
C.bPY.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
C.b_i.prototype={
$1(d){return this.a.aiA(this.b)},
$S:3}
C.b_j.prototype={
$0(){return this.a.aiA(this.b)},
$S:0}
C.b_l.prototype={
$2(d,e){return B.ae},
$S:122}
C.b_k.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bA(B.z,1.5)
return A.aV(A.y(B.K,A.h(w.w[e],x,x,x,x,B.dQ,x,x,x),B.r,x,x,new A.K(B.t,x,u,v,x,x,B.x),x,34,x,B.cH,x,x,x),new C.b_h(w,e),x)},
$S:166}
C.b_h.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c81.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_X.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Iz.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adZ.prototype,"gaU2","Id",3)
w(C,"dM6","dyV",5)
v(C.w2.prototype,"giI","d5",4)
var t
v(t=C.aeH.prototype,"ga1L","aU5",0)
v(t,"gb73","b74",0)
u(C,"dL8",1,function(){return{$allTransitiveDependencies:B.cO,argument:B.cO,dependencies:B.cO,from:B.cO,isAutoDispose:B.cO,name:B.cO,retry:B.cO}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bjc",function(d,e,f,g,h,i,j,k){return C.bjc(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjc(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjc(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.J,[C.Iv,C.B7,C.aY5,C.aY6,C.alH])
w(A.bw,[C.cNh,C.cNi,C.cNj,C.b_c,C.b_e,C.b_d,C.bEo,C.bEm,C.bEn,C.bEq,C.bEr,C.bEu,C.bEv,C.bEs,C.bEt,C.cTl,C.cSH,C.b_s,C.b_r,C.b_q,C.b_i])
w(A.M,[C.NU,C.Zr,C.R8,C.ao4,C.acj,C.zE,C.ao3,C.R9])
w(A.bP,[C.bJN,C.cyX,C.c_0,C.c_1,C.c_2,C.c_3,C.c_4,C.b_f,C.b_g,C.bEp,C.cSG,C.b_p,C.bPY,C.b_j,C.b_h,C.c81,C.b_X])
w(A.G,[C.Ox,C.Ko])
w(A.Y,[C.adZ,C.aeH])
w(A.cK,[C.c_5,C.bEl,C.b_l,C.b_k])
v(C.w2,A.fe)
v(C.bo6,A.eX)
v(C.aci,A.kO)
v(C.Iz,C.aci)
v(C.a5q,C.Iz)
x(C.aci,C.alH)})()
A.br(b.typeUniverse,JSON.parse('{"Zr":{"M":[],"e":[],"f":[]},"Ox":{"G":[],"e":[],"f":[]},"NU":{"M":[],"e":[],"f":[]},"adZ":{"Y":["Ox"]},"R8":{"M":[],"e":[],"f":[]},"w2":{"fe":["t<c>"]},"ao4":{"M":[],"e":[],"f":[]},"acj":{"M":[],"e":[],"f":[]},"Ko":{"G":[],"e":[],"f":[]},"zE":{"M":[],"e":[],"f":[]},"ao3":{"M":[],"e":[],"f":[]},"R9":{"M":[],"e":[],"f":[]},"aeH":{"Y":["Ko"]},"Iz":{"kO":[],"h7":[],"H5":[],"lL":[]},"a5q":{"Iz":["1","2","2","3","2","xS<1,2>"],"kO":[],"h7":[],"H5":[],"lL":[],"Iz.0":"1"}}'))
A.Hy(b.typeUniverse,JSON.parse('{"alH":5,"aci":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cI"),E:x("ce"),V:x("r<d5>"),X:x("r<pD<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a6<c,@>"),f:x("a6<@,@>"),w:x("dh"),S:x("fe<@>"),F:x("+(c,ac)"),C:x("B7"),N:x("c"),q:x("dr"),z:x("@"),r:x("v"),B:x("Iv?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c7Y=new A.D("Powered by GIPHY",null,H.IB,null,null,null,null,null,null,null,null)
D.acX=new A.d_(B.e0,null,null,D.c7Y,null)
D.afB=new A.K(B.z,null,null,null,B.ib,null,B.as)
D.KF=new C.aY5()
D.ah_=new C.aY6()
D.arN=new A.a3(0,0,0,24)
D.ase=new A.a3(12,10,14,10)
D.asL=new A.a3(16,16,16,12)
D.asN=new A.a3(16,16,16,24)
D.asO=new A.a3(16,16,16,8)
D.asS=new A.a3(16,2,16,8)
D.ati=new A.a3(20,18,20,24)
D.aud=new A.a3(8,12,8,12)
D.aBQ=new A.aY(57404,"HeroiconsSolid",null,!1)
D.aBY=new A.aY(57436,"HeroiconsSolid",null,!1)
D.Pp=new A.b7(B.i6,18,B.br,null,"Verificado",null)
D.aDn=new A.b7(B.fd,null,B.V,null,null,null)
D.aBD=new A.aY(57347,"HeroiconsSolid",null,!1)
D.aDp=new A.b7(D.aBD,20,B.t,null,null,null)
D.aDw=new A.b7(B.lH,20,B.t,null,null,null)
D.aDE=new A.b7(B.jU,null,B.V,null,null,null)
D.aCF=new A.b7(B.vs,null,null,null,null,null)
D.aER=new A.dB(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwX=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bzf=x([],A.w("r<d9Y>"))
D.bzi=x([],A.w("r<+(c,~())>"))
D.ic=x([],y.L)
D.amu=new A.X(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.ani=new A.X(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aol=new A.X(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amV=new A.X(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDJ=x([D.amu,B.cX,D.ani,D.aol,D.amV],A.w("r<X>"))
D.bPq=new A.jO("report",!0,P.aaW,null,A.w("jO<c>"))
D.bPv=new C.bo6(1,"under")
D.cl9=new C.acj(!1,null)
D.bPE=new A.eF(null,0,0,null,null,null,D.cl9,null)
D.bXe=new A.c_(1/0,null,null,null)
D.bXK=new S.yl(12,3,null)
D.ceV=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bZ_=new A.bF(D.ceV,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cg_=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bZd=new A.bF(D.cg_,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cei=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bZz=new A.bF(D.cei,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c9j=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.M,null,null,null,null,null,null,null,null)
D.cdD=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null,null)
D.ceJ=new A.D("Que mensagem queres denunciar?",null,B.hO,null,null,null,null,null,null,null,null)
D.cm6=new C.Ox(null)
D.coS=new C.Zr(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZH","CN",()=>D.KF.ayF(0,C.dM6(),A.w("w2"),A.w("t<c>"),y.N))})()};
(a=>{a["TY0Plnhk365r7vi7eIkaYt4i9Og="]=a.current})($__dart_deferred_initializers__);