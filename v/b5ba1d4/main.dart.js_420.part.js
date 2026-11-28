((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,L,M,E,N,O,C={
dGG(){var x,w=$.Qk(),v=J.nK(16,y.N)
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
s=u+"/"+C.dGG()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r6(s,d,new A.v2(!1,f)),$async$aUw)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cn(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUw,w)},
dcX(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.bW(null,new C.cNg(),!1,d,!0,!1,null,l),$async$rH)
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
return A.d(new A.lK().Zh(85,2048,B.fs),$async$rH)
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
return A.d(C.aUw(t,s,C.dcX(s)),$async$rH)
case 12:v=new j.Iu(f,r,s)
x=1
break
case 7:x=13
return A.d($.dhi().y9(D.bzd,null,null),$async$rH)
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
o=B.e.c2(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbtH(p))
if(B.f.fp(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUw(t,l,C.dcX(l)),$async$rH)
case 15:v=new j.Iu(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bW(null,new C.cNh(),!1,d,!0,!1,null,l),$async$rH)
case 16:n=f
v=n==null?null:new C.Iu("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bW(null,new C.cNi(),!1,d,!0,!0,null,l),$async$rH)
case 17:m=f
v=m==null?null:new C.Iu(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rH,w)},
Iu:function Iu(d,e,f){this.a=d
this.b=e
this.c=f},
cNg:function cNg(){},
cNh:function cNh(){},
cNi:function cNi(){},
NT:function NT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bJM:function bJM(d,e){this.a=d
this.b=e},
Zq:function Zq(d){this.a=d},
cyW:function cyW(d,e){this.a=d
this.b=e},
Ow:function Ow(d){this.a=d},
adW:function adW(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
c__:function c__(d){this.a=d},
c_0:function c_0(d,e){this.a=d
this.b=e},
c_1:function c_1(d){this.a=d},
c_2:function c_2(d){this.a=d},
c_4:function c_4(d){this.a=d},
c_3:function c_3(d,e,f){this.a=d
this.b=e
this.c=f},
R6:function R6(d,e,f,g,h){var _=this
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
dyT(d){return new C.w2(d,A.E(y.N,y.F),new A.ac(A.j5(0,0),0,!1))},
d_N(d){var x,w=J.a7(d)
if(w.gZ(d))return null
x=w.du(d,new C.cTk(),y.N).by(0)
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
bEn:function bEn(){},
bEo:function bEo(d){this.a=d},
bEl:function bEl(){},
bEm:function bEm(){},
bEp:function bEp(d,e){this.a=d
this.b=e},
bEq:function bEq(d){this.a=d},
bEk:function bEk(d){this.a=d},
bEt:function bEt(){},
bEu:function bEu(){},
bEr:function bEr(){},
bEs:function bEs(){},
cTk:function cTk(){},
a_p(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_p=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a2(D.bZ_)
x=1
break}x=3
return A.d(A.bW(null,new C.cSG(A.dG(h,0,A.ew(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_p)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wu(d,e,f,u.c,u.d,g,t),$async$a_p)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_p,w)},
B7:function B7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cSG:function cSG(d){this.a=d},
cSF:function cSF(d,e){this.a=d
this.b=e},
cV5(d,e,f,g,h,i,j,k,l){return new C.ao1(g,d,k,h,i,e,j,l,f,null)},
ao1:function ao1(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_q:function b_q(){},
b_n:function b_n(d){this.a=d},
b_p:function b_p(d){this.a=d},
b_o:function b_o(d){this.a=d},
cGG(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.af)
v=new A.b6(16,16)
u=d[x]
w.push(new A.bQ(1,B.au,A.A(t,A.B(A.a([A.h(u.a,1,B.a1,t,t,B.c1,t,t,t),B.aU,A.h(u.b,t,t,t,t,B.bf,B.a4,t,t)],s),B.v,B.h,B.l),B.r,t,t,new A.K(B.a5,t,t,new A.cy(v,v,v,v),t,t,B.x),t,t,t,D.aua,t,t,t),t))
B.e.n(r,w)}return A.O(r,B.v,B.h,B.l,0,t)},
akH(d,e,f){var x,w=null
if(f){x=A.fP(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.ac,B.c8,w,w,B.d0,w)
x=A.hh(A.h(d,w,w,w,w,w,w,w,w),e,x)}else{x=A.cj(B.z,w,w,B.t,w,w,B.ac,w,w,B.d0)
x=A.bE(A.h(d,w,w,w,w,w,w,w,w),e,x)}return A.aH(x,52,w)},
cZC(d,e,f,g){var x=null,w=y.p,v=A.a([new A.dd(1,B.b4,A.h(d,x,x,x,x,B.c1,B.a4,x,x),x)],w)
if(g)B.e.n(v,A.a([B.e6,D.Pn],w))
v=A.a([new A.ci(d,76,e,!1,!0,x),B.aF,A.O(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.h(f,x,x,x,x,B.M,B.a4,x,x)],w))
return new A.bB(B.ax,x,B.aD,B.y,A.a([new A.S(B.jF,A.bL(A.B(v,B.v,B.h,B.l),x,x),x),D.bPB],w),x)},
cGq(d,e){var x,w,v=null,u=A.aO(d,B.dR,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a0)
w.push(e[x])
B.e.n(s,w)}return A.bD(!0,new A.e5(new A.aR(0,1/0,0,u.a.b*0.9),A.dT(A.B(s,B.E,B.h,B.l),B.y,v,B.ao,v,B.av),v),v,B.Z,!1)},
acg:function acg(d,e){this.c=d
this.a=e},
bPX:function bPX(d){this.a=d},
d2J(d){var x,w,v,u
for(x=new A.ce(d),w=y.E,x=new A.aj(x,x.gA(0),w.i("aj<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDI[B.j.aF(v,5)]},
cV4(d,e,f,g,h,i,j){return new C.ao0(d,i,f,e,g,j,h,null)},
zE:function zE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ao0:function ao0(d,e,f,g,h,i,j,k){var _=this
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
R7:function R7(d,e){this.c=d
this.a=e},
Kn:function Kn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeE:function aeE(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c80:function c80(d,e){this.a=d
this.b=e},
bo4:function bo4(d,e){this.a=d
this.b=e},
aY3:function aY3(){},
aY4:function aY4(){},
alE:function alE(){},
Iy:function Iy(){},
b_V:function b_V(d,e){this.a=d
this.b=e},
acf:function acf(){},
d6j(d,e,f,g,h,i,j,k){return new C.a5n(A.dKq(C.dL7(),i,j),d,g,h,e,A.al6(e),f,i.i("@<0>").b8(j).b8(k).i("a5n<1,2,3>"))},
bja(d,e,f,g,h,i,j,k,l,m){return new A.xS(d,h,f,j,k,g,e,i,l.i("@<0>").b8(m).i("xS<1,2>"))},
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
I=c[178]
K=c[433]
L=c[334]
M=c[155]
E=c[240]
N=c[187]
O=c[432]
C=a.updateHolder(c[121],C)
D=c[235]
P=c[381]
Q=c[396]
R=c[270]
S=c[182]
T=c[431]
F=c[233]
C.Iu.prototype={
gar(d){return this.c}}
C.NT.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eP(!1,w,!0,new A.S(B.hw,A.B(A.a([A.A(x,A.b5(this.c,$.at,x,x,26),B.r,x,x,new A.K(B.a5,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aF,A.h(this.d,x,x,x,x,B.hO,x,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,x,new C.bJM(this,d),x,x,x,x,x,x,x)}}
C.Zq.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwT[x]
v=new A.b6(14,14)
s.push(A.eP(!1,new A.cy(v,v,v,v),!0,new A.S(B.nw,A.asi(w,B.kf,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,new C.cyW(d,w),u,u,u,u,u,u,u))}return new A.S(D.asK,A.B(A.a([D.cdv,B.R,A.ary(1,s,4,8,8,u,B.dY,!0)],t),B.G,B.h,B.J),u)}}
C.Ow.prototype={
R(){return new C.adW(new A.aE(B.aj,$.aa()),D.ic)}}
C.adW.prototype={
ac(){this.ap()
this.Id("")},
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a6()},
Id(d){return this.bht(d)},
bht(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Id=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.c__(s))
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
p=A.ajh("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aUW(p,null),$async$Id)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bu.jP(0,A.jg(A.je(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.c_0(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.c_1(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.c_2(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Id,w)},
u(d){var x=this,w=null,v=A.aO(d,w,y.w).w,u=A.cr(w,B.a6,!1,w,!0,B.y,w,A.cs(),x.d,w,w,w,w,w,2,D.aEO,B.W,!0,w,!0,w,!1,w,B.aC,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaU0(),w,!1,w,w,!1,w,!0,w,B.ao,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.at,w,B.b_,w,B.t7,w,w),t=x.r
if(t!=null)t=A.bL(A.h(t,w,w,w,w,B.mp,B.a4,w,w),w,w)
else t=x.f?D.bXK:N.a3i(w,B.W,T.a8B,new C.c_4(x),x.e.length,w,w,!1)
return A.aH(new A.S(D.asI,A.B(A.a([u,B.ab,A.a5(t,1),B.aF,D.acW],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.R6.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aO(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b2(s.c,"asset:"))return A.asi(B.f.bF(s.c,6),B.kf,120,120)
if(p==="image"||p==="gif")return A.cP(r,A.fT(A.W(16),new A.e5(new A.aR(0,q,0,320),A.k4(s.c,new C.b_b(q),B.bF,r,new C.b_c(q),r,r),r),B.bb),B.W,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_d(s,d),r,r,r,r,r,r,!1,B.aN)
p=A.W(16)
x=s.f
w=x?$.at:B.a5
v=A.W(16)
u=A.b5(O.ON,x?B.t:$.at,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aJ(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eP(!1,p,!0,A.A(r,A.O(A.a([u,B.ae,new A.dd(1,B.b4,t,r),B.bh,A.b5(L.vq,x?B.t:B.V,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.K(w,r,r,v,r,r,B.x),r,r,r,D.asc,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,new C.b_e(s),r,r,r,r,r,r,r)},
gar(d){return this.e}}
C.w2.prototype={
d5(){var x=this,w=y.T,v=A.eO(x).G(A.cG($.b8(),new C.bEn(),y.D,w),w)
A.eO(x).YO(new C.bEo(x))
if(v==null)return B.a6
w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.Mf(0,"typing:"+x.x,B.ys).byA(new C.bEp(x,v),"typing")
w.Q3(0)
x.y=w
x.Q=A.u5(B.fR,new C.bEq(x))
return B.a6},
akO(){var x,w=this,v=w.z
v.eg(v,new C.bEk(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c4(v,v.r,v.e,A.u(v).i("c4<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aQ(w.ga4(0))||!B.e.e9(x,J.dmq(w.ga4(0))))w.sa4(0,x)},
ada(d){var x,w=this,v=w.y,u=A.eO(w).a1(0,$.b8(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.cw(w.as).a<2e6)return
w.as=x
v.aeO(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GW).cC(new C.bEt(),new C.bEu(),y.H)},
d3(d){var x=this.y,w=A.eO(this).a1(0,$.b8(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.j5(0,0),0,!1)
x.aeO(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GW).cC(new C.bEr(),new C.bEs(),y.H)}}
C.B7.prototype={}
C.ao1.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.ci(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.dd(1,B.b4,A.h(s.c,1,B.a1,r,r,B.a9,r,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.e6,D.Pn],x))
w=A.a([A.O(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uY,A.A(r,A.h(v,1,r,r,r,B.hg,r,r,r),B.r,r,r,new A.K(B.cy,r,r,u,r,r,B.x),r,r,r,B.D2,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aJ(r,r,B.V,r,r,r,r,r,r,r,r,13,r,r,B.b0,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=A.O(A.a([q,B.ad,A.a5(A.B(w,B.G,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d5(0,B.bl,B.z.cd(0.06),B.Gk,14)],y.V)
w=A.aO(d,B.b6,y.w).w
v=new C.b_q().$3(K.Pb,"Voltar",new C.b_n(d))
u=s.r
v=A.a([v,B.ad,A.a5(u==null?t:A.aW(t,u,r),1)],x)
B.e.n(v,A.a([B.ad,A.Em(A.A(B.K,Q.Ee,B.r,r,r,B.cc,r,44,r,r,r,r,44),r,new C.b_o(s),new C.b_p(s),r,D.bPs,"Mais op\xe7\xf5es",y.N)],x))
return A.A(r,A.B(A.a([A.O(v,B.v,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.K(B.t,r,r,B.tQ,q,r,B.x),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gar(d){return this.c}}
C.acg.prototype={
u(d){var x=null
return A.ba(x,!0,x,A.cP(x,A.A(x,B.kB,B.r,x,x,new A.K(B.z,x,this.c?A.bA(B.t,2):x,x,x,x,B.as),x,44,x,x,x,x,44),B.W,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bPX(d),x,x,x,x,x,x,!1,B.aN),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x)}}
C.zE.prototype={
u(d){var x=null,w=A.aO(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(E.N2,A.h(v,x,x,x,x,A.aJ(x,x,C.d2J(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aJ(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bo,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.e5(new A.aR(0,w.a.a*0.78,0,1/0),A.A(x,A.B(o,B.G,B.h,B.J),B.r,x,x,new A.K(r,x,x,new A.cy(F.yl,F.yl,new A.b6(q,q),new A.b6(p,p)),x,x,B.x),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.ao0.prototype={
aiz(d){if(!A.uc(this.c.a.a)){d.O(y.q).f.a2(D.bZd)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aW(A.A(B.K,B.Pe,B.r,t,t,B.cc,t,44,t,t,t,t,44),u.e,t),B.ae],s))
x=A.W(24)
r.push(A.a5(A.A(B.be,A.cr(t,B.a6,!1,t,!0,B.y,t,A.cs(),u.c,t,t,t,t,t,2,A.iV(t,B.bs,t,B.Z,t,t,t,t,!0,B.bs,t,t,t,t,t,t,!1,t,t,t,t,B.bs,t,t,t,t,t,t,t,t,B.mn,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.W,!0,t,!0,t,!1,t,B.aC,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_g(u,d),t,!1,t,t,!1,t,!0,t,B.ao,t,t,t,t,t,t,t,t,t,t,t,B.fi,!0,B.at,t,B.b_,t,B.a9B,t,t),B.r,t,t,new A.K(B.a5,t,t,x,t,t,B.x),t,48,t,B.bP,t,t,t),1))
r.push(B.ae)
r.push(A.ba(t,!0,t,A.aW(A.A(B.K,D.aDt,B.r,t,t,B.cc,t,44,t,t,t,t,44),new C.b_h(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t))
w=A.O(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d5(0,B.bl,B.z.cd(0.12),B.kH,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aH(A.a4r(B.y,new C.b_i(u),v,t,t,B.bE,new C.b_j()),34,t),B.ab],s))
x.push(w)
return A.A(t,A.bD(!0,new A.S(B.hu,A.B(x,B.E,B.h,B.J),t),t,D.arM,!1),B.r,t,t,new A.K(B.t,t,t,B.px,r,t,B.x),t,t,t,t,t,t,t)}}
C.R7.prototype={
u(d){var x=null,w=this.c
return A.aWV(B.f6,w==null?D.bXe:new A.S(D.asP,A.bL(A.h(w,x,x,x,x,B.k9,x,x,x),x,x),x),B.ct,B.aG)}}
C.Kn.prototype={
R(){return new C.aeE()}}
C.aeE.prototype={
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
aU3(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbA(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c80(w,x))},
b72(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aO(x,null,y.w).w
w=this.a
if(x.ax)w.c.hg(0)
else w.c.i1(0,B.eu,G.CD)},
u(d){var x,w,v,u=this,t=null,s=B.j.ah(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iX(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.A(B.K,D.aDm,B.r,t,t,D.afA,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bA(B.z,2)
r.push(A.c7(t,A.A(B.K,A.h(""+s,t,t,t,t,B.hO,t,t,t),B.r,t,B.ld,new A.K(B.t,t,v,x,t,t,B.x),t,20,t,B.D_,t,t,t),t,t,t,-6,-6,t))}q.push(A.c7(16,A.ba(t,!0,t,A.aW(new A.bB(B.ax,t,B.aD,B.r,r,t),u.gb71(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t),t,t,t,20,t,t))}return new A.bB(B.ax,t,B.aD,B.y,q,t)}}
C.bo4.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aY3.prototype={
$1(d){return A.mY(d,null,!0,null,null,y.S,y.z)},
gXm(d){return D.agZ},
ayE(d,e,f,g,h){return this.gXm(this).$3$1(e,f,g,h)}}
C.aY4.prototype={
$3$1(d,e,f,g){return C.d6j(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alE.prototype={}
C.Iy.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_V(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.acf.prototype={}
C.a5n.prototype={}
var z=a.updateTypes(["~()","Zq(N)","Ow(N)","F<~>(c)","t<c>()","w2(c)","xS<0^,1^>(0^(){$allTransitiveDependencies!x<h7>?,argument!J?,dependencies!x<h7>?,from!kN?,isAutoDispose!z,name!c?,retry!bp?(v,J)?})<fe<1^>,J?>"])
C.cNg.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.atf,A.B(A.a([A.O(A.a([new C.NT(B.jU,"Foto","photo",x),new C.NT(D.aBV,"Ficheiro","file",x),new C.NT(R.jR,"Sticker","sticker",x),new C.NT(D.aBN,"GIF","gif",x)],w),B.v,B.G1,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:73}
C.cNh.prototype={
$1(d){return D.coJ},
$S:z+1}
C.cNi.prototype={
$1(d){return D.clY},
$S:z+2}
C.bJM.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e)},
$S:0}
C.cyW.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.c__.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.c_0.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bh(this.b,y.P),v=A.u(w),w=new A.aj(w,w.gA(w),v.i("aj<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bt(s,new A.a0(A.Z(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.Z(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.c_1.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.c_2.prototype={
$0(){return this.a.f=!1},
$S:0}
C.c_4.prototype={
$2(d,e){var x=null,w=this.a
return A.eP(!1,x,!0,A.fT(A.W(10),A.k4(w.e[e].a,x,B.bF,x,x,x,x),B.bb),x,!0,x,x,x,x,x,x,x,x,x,new C.c_3(w,d,e),x,x,x,x,x,x,x)},
$S:1320}
C.c_3.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e[this.c].b)},
$S:0}
C.b_d.prototype={
$0(){var x=y.H
return A.am(this.b,!1).fO(A.ts(new C.b_a(this.a),null,x),x)},
$S:0}
C.b_a.prototype={
$1(d){var x=null
return A.kt(A.cUP(B.an,x,B.t,x),B.an,A.bL(I.cWc(B.Z,A.pl(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1321}
C.b_c.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1322}
C.b_b.prototype={
$3(d,e,f){var x=null
return A.A(x,D.aDB,B.r,B.a5,x,x,x,120,x,x,x,x,this.a)},
$S:69}
C.b_e.prototype={
$0(){return A.zb(A.dy(this.a.c,0,null),B.qE,null)},
$S:0}
C.bEn.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bEo.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aN(0)
x=w.y
w.y=null
if(x!=null){w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yg(x).cC(new C.bEl(),new C.bEm(),y.H)}},
$S:0}
C.bEl.prototype={
$1(d){},
$S:111}
C.bEm.prototype={
$1(d){},
$S:11}
C.bEp.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.e1(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.M(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a0(v,new A.ac(Date.now(),0,!1).el(5e6)))}u.akO()},
$S:253}
C.bEq.prototype={
$1(d){return this.a.akO()},
$S:66}
C.bEk.prototype={
$2(d,e){return e.b.f5(this.a)},
$S:1323}
C.bEt.prototype={
$1(d){},
$S:197}
C.bEu.prototype={
$1(d){},
$S:11}
C.bEr.prototype={
$1(d){},
$S:197}
C.bEs.prototype={
$1(d){},
$S:11}
C.cTk.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:24}
C.cSG.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.IC,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jp(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDk,r,r,r,r,new C.cSF(d,u),!1,r,r,r,r,r,s,r,t,r,E.Pm,r))}return A.bD(!0,new A.S(D.asL,A.B(A.a([D.ceD,B.ar,D.c9e,B.Q,new A.dd(1,B.b4,A.d6(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:44}
C.cSF.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.b_q.prototype={
$3(d,e,f){var x=null
return A.kX(A.aW(A.A(B.K,d,B.r,x,x,B.cc,x,44,x,x,x,x,44),f,x),x,e)},
$S:1324}
C.b_n.prototype={
$0(){return A.am(this.a,!1).iw()},
$S:0}
C.b_p.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_o.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bo3(A.h(t,s,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bPn)
return r},
$S:59}
C.bPX.prototype={
$0(){return A.am(this.a,!1).bp()},
$S:0}
C.b_g.prototype={
$1(d){return this.a.aiz(this.b)},
$S:3}
C.b_h.prototype={
$0(){return this.a.aiz(this.b)},
$S:0}
C.b_j.prototype={
$2(d,e){return B.ae},
$S:122}
C.b_i.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bA(B.z,1.5)
return A.aW(A.A(B.K,A.h(w.w[e],x,x,x,x,B.e_,x,x,x),B.r,x,x,new A.K(B.t,x,u,v,x,x,B.x),x,34,x,B.cO,x,x,x),new C.b_f(w,e),x)},
$S:166}
C.b_f.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c80.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_V.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Iy.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adW.prototype,"gaU0","Id",3)
w(C,"dM5","dyT",5)
v(C.w2.prototype,"giI","d5",4)
var t
v(t=C.aeE.prototype,"ga1L","aU3",0)
v(t,"gb71","b72",0)
u(C,"dL7",1,function(){return{$allTransitiveDependencies:B.cN,argument:B.cN,dependencies:B.cN,from:B.cN,isAutoDispose:B.cN,name:B.cN,retry:B.cN}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bja",function(d,e,f,g,h,i,j,k){return C.bja(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bja(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bja(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.J,[C.Iu,C.B7,C.aY3,C.aY4,C.alE])
w(A.bw,[C.cNg,C.cNh,C.cNi,C.b_a,C.b_c,C.b_b,C.bEn,C.bEl,C.bEm,C.bEp,C.bEq,C.bEt,C.bEu,C.bEr,C.bEs,C.cTk,C.cSG,C.b_q,C.b_p,C.b_o,C.b_g])
w(A.M,[C.NT,C.Zq,C.R6,C.ao1,C.acg,C.zE,C.ao0,C.R7])
w(A.bO,[C.bJM,C.cyW,C.c__,C.c_0,C.c_1,C.c_2,C.c_3,C.b_d,C.b_e,C.bEo,C.cSF,C.b_n,C.bPX,C.b_h,C.b_f,C.c80,C.b_V])
w(A.G,[C.Ow,C.Kn])
w(A.Y,[C.adW,C.aeE])
w(A.cL,[C.c_4,C.bEk,C.b_j,C.b_i])
v(C.w2,A.fe)
v(C.bo4,A.eX)
v(C.acf,A.kN)
v(C.Iy,C.acf)
v(C.a5n,C.Iy)
x(C.acf,C.alE)})()
A.br(b.typeUniverse,JSON.parse('{"Zq":{"M":[],"e":[],"f":[]},"Ow":{"G":[],"e":[],"f":[]},"NT":{"M":[],"e":[],"f":[]},"adW":{"Y":["Ow"]},"R6":{"M":[],"e":[],"f":[]},"w2":{"fe":["t<c>"]},"ao1":{"M":[],"e":[],"f":[]},"acg":{"M":[],"e":[],"f":[]},"Kn":{"G":[],"e":[],"f":[]},"zE":{"M":[],"e":[],"f":[]},"ao0":{"M":[],"e":[],"f":[]},"R7":{"M":[],"e":[],"f":[]},"aeE":{"Y":["Kn"]},"Iy":{"kN":[],"h7":[],"H4":[],"lN":[]},"a5n":{"Iy":["1","2","2","3","2","xS<1,2>"],"kN":[],"h7":[],"H4":[],"lN":[],"Iy.0":"1"}}'))
A.Hx(b.typeUniverse,JSON.parse('{"alE":5,"acf":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cJ"),E:x("ce"),V:x("r<d5>"),X:x("r<pD<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a6<c,@>"),f:x("a6<@,@>"),w:x("dh"),S:x("fe<@>"),F:x("+(c,ac)"),C:x("B7"),N:x("c"),q:x("dr"),z:x("@"),r:x("v"),B:x("Iu?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c7U=new A.D("Powered by GIPHY",null,H.IA,null,null,null,null,null,null,null,null)
D.acW=new A.d0(B.e0,null,null,D.c7U,null)
D.afA=new A.K(B.z,null,null,null,B.ib,null,B.as)
D.KE=new C.aY3()
D.agZ=new C.aY4()
D.arM=new A.a3(0,0,0,24)
D.asc=new A.a3(12,10,14,10)
D.asI=new A.a3(16,16,16,12)
D.asK=new A.a3(16,16,16,24)
D.asL=new A.a3(16,16,16,8)
D.asP=new A.a3(16,2,16,8)
D.atf=new A.a3(20,18,20,24)
D.aua=new A.a3(8,12,8,12)
D.aBN=new A.aY(57404,"HeroiconsSolid",null,!1)
D.aBV=new A.aY(57436,"HeroiconsSolid",null,!1)
D.Pn=new A.b7(B.i6,18,B.br,null,"Verificado",null)
D.aDk=new A.b7(B.fd,null,B.V,null,null,null)
D.aBC=new A.aY(57347,"HeroiconsSolid",null,!1)
D.aDm=new A.b7(D.aBC,20,B.t,null,null,null)
D.aDt=new A.b7(B.lH,20,B.t,null,null,null)
D.aDB=new A.b7(B.jU,null,B.V,null,null,null)
D.aCC=new A.b7(B.vs,null,null,null,null,null)
D.aEO=new A.dB(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCC,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwT=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bzd=x([],A.w("r<d9X>"))
D.bzg=x([],A.w("r<+(c,~())>"))
D.ic=x([],y.L)
D.amt=new A.X(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.anh=new A.X(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aok=new A.X(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amU=new A.X(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDI=x([D.amt,B.cV,D.anh,D.aok,D.amU],A.w("r<X>"))
D.bPn=new A.jO("report",!0,P.aaV,null,A.w("jO<c>"))
D.bPs=new C.bo4(1,"under")
D.cl0=new C.acg(!1,null)
D.bPB=new A.eF(null,0,0,null,null,null,D.cl0,null)
D.bXe=new A.c_(1/0,null,null,null)
D.bXK=new S.yl(12,3,null)
D.ceO=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bZ_=new A.bF(D.ceO,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cfS=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bZd=new A.bF(D.cfS,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cea=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bZz=new A.bF(D.cea,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c9e=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.M,null,null,null,null,null,null,null,null)
D.cdv=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null,null)
D.ceD=new A.D("Que mensagem queres denunciar?",null,B.hN,null,null,null,null,null,null,null,null)
D.clY=new C.Ow(null)
D.coJ=new C.Zq(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dZG","CN",()=>D.KE.ayE(0,C.dM5(),A.w("w2"),A.w("t<c>"),y.N))})()};
(a=>{a["zHlXZXhI8ff3mdd1S65M/5nDnAw="]=a.current})($__dart_deferred_initializers__);