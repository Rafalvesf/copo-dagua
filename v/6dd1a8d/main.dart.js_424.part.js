((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,L,M,E,N,O,C={
dHL(){var x,w=$.Qo(),v=J.nM(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aU(B.j.hW(w.qW(256),16),2,"0")
return B.e.hN(v)},
aUG(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUG=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.P()
q=r.b
q===$&&A.b()
q=q.gbw().e.a
u=(q==null?null:q.r).a
t=B.f.q(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dHL()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r7(s,d,new A.v3(!1,f)),$async$aUG)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cp(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUG,w)},
ddX(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.bW(null,new C.cO5(),!1,d,!0,!1,null,l),$async$rH)
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
return A.d(new A.lL().Zn(85,2048,B.fu),$async$rH)
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
return A.d(C.aUG(t,s,C.ddX(s)),$async$rH)
case 12:v=new j.Iw(f,r,s)
x=1
break
case 7:x=13
return A.d($.dii().y9(D.bzx,null,null),$async$rH)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.km(),$async$rH)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a2(D.bZV)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.cb(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbu0(p))
if(B.f.fp(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUG(t,l,C.ddX(l)),$async$rH)
case 15:v=new j.Iw(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bW(null,new C.cO6(),!1,d,!0,!1,null,l),$async$rH)
case 16:n=f
v=n==null?null:new C.Iw("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bW(null,new C.cO7(),!1,d,!0,!0,null,l),$async$rH)
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
cO5:function cO5(){},
cO6:function cO6(){},
cO7:function cO7(){},
NX:function NX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bK3:function bK3(d,e){this.a=d
this.b=e},
Zu:function Zu(d){this.a=d},
czB:function czB(d,e){this.a=d
this.b=e},
OA:function OA(d){this.a=d},
ae_:function ae_(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
c_h:function c_h(d){this.a=d},
c_i:function c_i(d,e){this.a=d
this.b=e},
c_j:function c_j(d){this.a=d},
c_k:function c_k(d){this.a=d},
c_m:function c_m(d){this.a=d},
c_l:function c_l(d,e,f){this.a=d
this.b=e
this.c=f},
Ra:function Ra(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_m:function b_m(d,e){this.a=d
this.b=e},
b_j:function b_j(d){this.a=d},
b_l:function b_l(d){this.a=d},
b_k:function b_k(d){this.a=d},
b_n:function b_n(d){this.a=d},
dzX(d){return new C.w4(d,A.E(y.N,y.F),new A.ac(A.j6(0,0),0,!1))},
d0H(d){var x,w=J.a7(d)
if(w.gZ(d))return null
x=w.du(d,new C.cUc(),y.N).by(0)
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
bEF:function bEF(){},
bEG:function bEG(d){this.a=d},
bED:function bED(){},
bEE:function bEE(){},
bEH:function bEH(d,e){this.a=d
this.b=e},
bEI:function bEI(d){this.a=d},
bEC:function bEC(d){this.a=d},
bEL:function bEL(){},
bEM:function bEM(){},
bEJ:function bEJ(){},
bEK:function bEK(){},
cUc:function cUc(){},
a_u(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_u=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a2(D.bZl)
x=1
break}x=3
return A.d(A.bW(null,new C.cTy(A.dD(h,0,A.ew(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_u)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.ww(d,e,f,u.c,u.d,g,t),$async$a_u)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_u,w)},
B9:function B9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTy:function cTy(d){this.a=d},
cTx:function cTx(d,e){this.a=d
this.b=e},
cVZ(d,e,f,g,h,i,j,k,l){return new C.ao9(g,d,k,h,i,e,j,l,f,null)},
ao9:function ao9(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_z:function b_z(){},
b_w:function b_w(d){this.a=d},
b_y:function b_y(d){this.a=d},
b_x:function b_x(d){this.a=d},
cHr(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.af)
v=new A.b6(16,16)
u=d[x]
w.push(new A.bK(1,B.at,A.y(t,A.z(A.a([A.h(u.a,1,B.a1,t,t,B.c1,t,t,t),B.aU,A.h(u.b,t,t,t,t,B.bf,B.a5,t,t)],s),B.v,B.h,B.l),B.r,t,t,new A.J(B.a4,t,t,new A.cx(v,v,v,v),t,t,B.x),t,t,t,D.auo,t,t,t),t))
B.e.n(r,w)}return A.O(r,B.v,B.h,B.l,0,t)},
akO(d,e,f){var x,w=null
if(f){x=A.fP(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c9,w,w,B.d3,w)
x=A.hi(A.h(d,w,w,w,w,w,w,w,w),e,x)}else{x=A.ci(B.z,w,w,B.t,w,w,B.ab,w,w,B.d3)
x=A.bE(A.h(d,w,w,w,w,w,w,w,w),e,x)}return A.aH(x,52,w)},
d_x(d,e,f,g){var x=null,w=y.p,v=A.a([new A.de(1,B.b4,A.h(d,x,x,x,x,B.c1,B.a5,x,x),x)],w)
if(g)B.e.n(v,A.a([B.e_,D.Ps],w))
v=A.a([new A.cj(d,76,e,!1,!0,x),B.aF,A.O(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.h(f,x,x,x,x,B.L,B.a5,x,x)],w))
return new A.bC(B.ax,x,B.aD,B.y,A.a([new A.S(B.jF,A.bM(A.z(v,B.v,B.h,B.l),x,x),x),D.bPX],w),x)},
cHb(d,e){var x,w,v=null,u=A.aO(d,B.dR,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a_)
w.push(e[x])
B.e.n(s,w)}return A.bB(!0,new A.e4(new A.aR(0,1/0,0,u.a.b*0.9),A.dT(A.z(s,B.E,B.h,B.l),B.y,v,B.an,v,B.av),v),v,B.Z,!1)},
ack:function ack(d,e){this.c=d
this.a=e},
bQe:function bQe(d){this.a=d},
d3E(d){var x,w,v,u
for(x=new A.cg(d),w=y.E,x=new A.aj(x,x.gA(0),w.i("aj<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bE1[B.j.aB(v,5)]},
cVY(d,e,f,g,h,i,j){return new C.ao8(d,i,f,e,g,j,h,null)},
zF:function zF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ao8:function ao8(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_p:function b_p(d,e){this.a=d
this.b=e},
b_q:function b_q(d,e){this.a=d
this.b=e},
b_s:function b_s(){},
b_r:function b_r(d){this.a=d},
b_o:function b_o(d,e){this.a=d
this.b=e},
Rb:function Rb(d,e){this.c=d
this.a=e},
Kp:function Kp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeI:function aeI(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c8i:function c8i(d,e){this.a=d
this.b=e},
bon:function bon(d,e){this.a=d
this.b=e},
aYc:function aYc(){},
aYd:function aYd(){},
alM:function alM(){},
IA:function IA(){},
b03:function b03(d,e){this.a=d
this.b=e},
acj:function acj(){},
d7h(d,e,f,g,h,i,j,k){return new C.a5s(A.dLv(C.dMc(),i,j),d,g,h,e,A.alc(e),f,i.i("@<0>").b8(j).b8(k).i("a5s<1,2,3>"))},
bjh(d,e,f,g,h,i,j,k,l,m){return new A.xT(d,h,f,j,k,g,e,i,l.i("@<0>").b8(m).i("xT<1,2>"))},
a5s:function a5s(d,e,f,g,h,i,j,k){var _=this
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
G=c[404]
H=c[382]
I=c[177]
K=c[432]
L=c[332]
M=c[155]
E=c[238]
N=c[184]
O=c[431]
C=a.updateHolder(c[121],C)
D=c[233]
P=c[380]
Q=c[395]
R=c[267]
S=c[179]
T=c[430]
F=c[231]
C.Iw.prototype={
gar(d){return this.c}}
C.NX.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eR(!1,w,!0,new A.S(B.hz,A.z(A.a([A.y(x,A.b5(this.c,$.au,x,x,26),B.r,x,x,new A.J(B.a4,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aF,A.h(this.d,x,x,x,x,B.hQ,x,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,x,new C.bK3(this,d),x,x,x,x,x,x,x)}}
C.Zu.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bxb[x]
v=new A.b6(14,14)
s.push(A.eR(!1,new A.cx(v,v,v,v),!0,new A.S(B.ny,A.asr(w,B.kh,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,new C.czB(d,w),u,u,u,u,u,u,u))}return new A.S(D.asZ,A.z(A.a([D.cdR,B.R,A.arH(1,s,4,8,8,u,B.dY,!0)],t),B.G,B.h,B.J),u)}}
C.OA.prototype={
R(){return new C.ae_(new A.aE(B.aj,$.aa()),D.id)}}
C.ae_.prototype={
ac(){this.ap()
this.Ie("")},
m(){var x=this.d
x.Y$=$.aa()
x.W$=0
this.a6()},
Ie(d){return this.bhM(d)},
bhM(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$Ie=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.c_h(s))
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
p=A.ajo("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aV5(p,null),$async$Ie)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bv.jP(0,A.jh(A.jf(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.c_i(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.c_j(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.c_k(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ie,w)},
u(d){var x=this,w=null,v=A.aO(d,w,y.w).w,u=A.cs(w,B.a6,!1,w,!0,B.y,w,A.cu(),x.d,w,w,w,w,w,2,D.aF7,B.U,!0,w,!0,w,!1,w,B.aC,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaUg(),w,!1,w,w,!1,w,!0,w,B.an,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b_,w,B.t9,w,w),t=x.r
if(t!=null)t=A.bM(A.h(t,w,w,w,w,B.mr,B.a5,w,w),w,w)
else t=x.f?D.bY7:N.a3m(w,B.U,T.a8J,new C.c_m(x),x.e.length,w,w,!1)
return A.aH(new A.S(D.asX,A.z(A.a([u,B.ad,A.a4(t,1),B.aF,D.ad7],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.Ra.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aO(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b1(s.c,"asset:"))return A.asr(B.f.bF(s.c,6),B.kh,120,120)
if(p==="image"||p==="gif")return A.cy(r,A.fT(A.W(16),new A.e4(new A.aR(0,q,0,320),A.k5(s.c,new C.b_k(q),B.bG,r,new C.b_l(q),r,r),r),B.bb),B.U,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_m(s,d),r,r,r,r,r,r,!1,B.aH)
p=A.W(16)
x=s.f
w=x?$.au:B.a4
v=A.W(16)
u=A.b5(O.OR,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aJ(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eR(!1,p,!0,A.y(r,A.O(A.a([u,B.ac,new A.de(1,B.b4,t,r),B.bh,A.b5(L.vt,x?B.t:B.W,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.J(w,r,r,v,r,r,B.x),r,r,r,D.asr,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,new C.b_n(s),r,r,r,r,r,r,r)},
gar(d){return this.e}}
C.w4.prototype={
d5(){var x=this,w=y.T,v=A.eQ(x).G(A.cH($.b7(),new C.bEF(),y.D,w),w)
A.eQ(x).YU(new C.bEG(x))
if(v==null)return B.a6
w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.Mj(0,"typing:"+x.x,B.yw).byU(new C.bEH(x,v),"typing")
w.Q7(0)
x.y=w
x.Q=A.u6(B.fU,new C.bEI(x))
return B.a6},
akZ(){var x,w=this,v=w.z
v.eg(v,new C.bEC(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c3(v,v.r,v.e,A.u(v).i("c3<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aQ(w.ga4(0))||!B.e.e9(x,J.dnt(w.ga4(0))))w.sa4(0,x)},
adj(d){var x,w=this,v=w.y,u=A.eQ(w).a_(0,$.b7(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.cA(w.as).a<2e6)return
w.as=x
v.aeX(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.H1).cE(new C.bEL(),new C.bEM(),y.H)},
d3(d){var x=this.y,w=A.eQ(this).a_(0,$.b7(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.j6(0,0),0,!1)
x.aeX(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.H1).cE(new C.bEJ(),new C.bEK(),y.H)}}
C.B9.prototype={}
C.ao9.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cj(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.de(1,B.b4,A.h(s.c,1,B.a1,r,r,B.a9,r,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.e_,D.Ps],x))
w=A.a([A.O(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.v0,A.y(r,A.h(v,1,r,r,r,B.hh,r,r,r),B.r,r,r,new A.J(B.cz,r,r,u,r,r,B.x),r,r,r,B.Db,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aJ(r,r,B.W,r,r,r,r,r,r,r,r,13,r,r,B.b0,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=A.O(A.a([q,B.ae,A.a4(A.z(w,B.G,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d5(0,B.bm,B.z.ce(0.06),B.Gr,14)],y.V)
w=A.aO(d,B.b6,y.w).w
v=new C.b_z().$3(K.Pg,"Voltar",new C.b_w(d))
u=s.r
v=A.a([v,B.ae,A.a4(u==null?t:A.aW(t,u,r),1)],x)
B.e.n(v,A.a([B.ae,A.Ep(A.y(B.K,Q.En,B.r,r,r,B.c6,r,44,r,r,r,r,44),r,new C.b_x(s),new C.b_y(s),r,D.bPP,"Mais op\xe7\xf5es",y.N)],x))
return A.y(r,A.z(A.a([A.O(v,B.v,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.J(B.t,r,r,B.tS,q,r,B.x),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gar(d){return this.c}}
C.ack.prototype={
u(d){var x=null
return A.b9(x,!0,x,A.cy(x,A.y(x,B.iQ,B.r,x,x,new A.J(B.z,x,this.c?A.bA(B.t,2):x,x,x,x,B.aq),x,44,x,x,x,x,44),B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bQe(d),x,x,x,x,x,x,!1,B.aH),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x)}}
C.zF.prototype={
u(d){var x=null,w=A.aO(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(E.N5,A.h(v,x,x,x,x,A.aJ(x,x,C.d3E(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aJ(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bl,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.e4(new A.aR(0,w.a.a*0.78,0,1/0),A.y(x,A.z(o,B.G,B.h,B.J),B.r,x,x,new A.J(r,x,x,new A.cx(F.yp,F.yp,new A.b6(q,q),new A.b6(p,p)),x,x,B.x),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.ao8.prototype={
aiK(d){if(!A.ud(this.c.a.a)){d.O(y.q).f.a2(D.bZz)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aW(A.y(B.K,B.Pj,B.r,t,t,B.c6,t,44,t,t,t,t,44),u.e,t),B.ac],s))
x=A.W(24)
r.push(A.a4(A.y(B.bc,A.cs(t,B.a6,!1,t,!0,B.y,t,A.cu(),u.c,t,t,t,t,t,2,A.iW(t,B.bt,t,B.Z,t,t,t,t,!0,B.bt,t,t,t,t,t,t,!1,t,t,t,t,B.bt,t,t,t,t,t,t,t,t,B.mp,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.U,!0,t,!0,t,!1,t,B.aC,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_p(u,d),t,!1,t,t,!1,t,!0,t,B.an,t,t,t,t,t,t,t,t,t,t,t,B.fk,!0,B.au,t,B.b_,t,B.a9J,t,t),B.r,t,t,new A.J(B.a4,t,t,x,t,t,B.x),t,48,t,B.bQ,t,t,t),1))
r.push(B.ac)
r.push(A.b9(t,!0,t,A.aW(A.y(B.K,D.aDO,B.r,t,t,B.c6,t,44,t,t,t,t,44),new C.b_q(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t))
w=A.O(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d5(0,B.bm,B.z.ce(0.12),B.kJ,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aH(A.a4w(B.y,new C.b_r(u),v,t,t,B.bF,new C.b_s()),34,t),B.ad],s))
x.push(w)
return A.y(t,A.bB(!0,new A.S(B.hw,A.z(x,B.E,B.h,B.J),t),t,D.as0,!1),B.r,t,t,new A.J(B.t,t,t,B.px,r,t,B.x),t,t,t,t,t,t,t)}}
C.Rb.prototype={
u(d){var x=null,w=this.c
return A.aX3(B.f9,w==null?D.bXB:new A.S(D.at3,A.bM(A.h(w,x,x,x,x,B.kb,x,x,x),x,x),x),B.ct,B.aG)}}
C.Kp.prototype={
R(){return new C.aeI()}}
C.aeI.prototype={
ac(){var x,w=this
w.ap()
x=w.a
w.e=x.d
x.c.an(0,w.ga1R())},
bh(d){var x,w,v=this
v.bB(d)
x=d.c
if(x!==v.a.c){w=v.ga1R()
x.a0(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a0(0,this.ga1R())
this.a6()},
aUj(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbA(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c8i(w,x))},
b7i(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aO(x,null,y.w).w
w=this.a
if(x.ax)w.c.hg(0)
else w.c.i1(0,B.ev,G.CL)},
u(d){var x,w,v,u=this,t=null,s=B.j.ah(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iY(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.y(B.K,D.aDH,B.r,t,t,D.afN,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bA(B.z,2)
r.push(A.cb(t,A.y(B.K,A.h(""+s,t,t,t,t,B.hQ,t,t,t),B.r,t,B.lf,new A.J(B.t,t,v,x,t,t,B.x),t,20,t,B.D8,t,t,t),t,t,t,-6,-6,t))}q.push(A.cb(16,A.b9(t,!0,t,A.aW(new A.bC(B.ax,t,B.aD,B.r,r,t),u.gb7h(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t),t,t,t,20,t,t))}return new A.bC(B.ax,t,B.aD,B.y,q,t)}}
C.bon.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aYc.prototype={
$1(d){return A.mZ(d,null,!0,null,null,y.S,y.z)},
gXs(d){return D.ahb},
ayO(d,e,f,g,h){return this.gXs(this).$3$1(e,f,g,h)}}
C.aYd.prototype={
$3$1(d,e,f,g){return C.d7h(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alM.prototype={}
C.IA.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b03(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.acj.prototype={}
C.a5s.prototype={}
var z=a.updateTypes(["~()","Zu(N)","OA(N)","F<~>(c)","t<c>()","w4(c)","xT<0^,1^>(0^(){$allTransitiveDependencies!w<h7>?,argument!K?,dependencies!w<h7>?,from!kQ?,isAutoDispose!B,name!c?,retry!bp?(v,K)?})<fd<1^>,K?>"])
C.cO5.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.att,A.z(A.a([A.O(A.a([new C.NX(B.jV,"Foto","photo",x),new C.NX(D.aCg,"Ficheiro","file",x),new C.NX(R.jS,"Sticker","sticker",x),new C.NX(D.aC8,"GIF","gif",x)],w),B.v,B.G8,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:69}
C.cO6.prototype={
$1(d){return D.cp7},
$S:z+1}
C.cO7.prototype={
$1(d){return D.cmn},
$S:z+2}
C.bK3.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e)},
$S:0}
C.czB.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.c_h.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.c_i.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bi(this.b,y.P),v=A.u(w),w=new A.aj(w,w.gA(w),v.i("aj<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.br(s,new A.Z(A.a_(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a_(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.c_j.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.c_k.prototype={
$0(){return this.a.f=!1},
$S:0}
C.c_m.prototype={
$2(d,e){var x=null,w=this.a
return A.eR(!1,x,!0,A.fT(A.W(10),A.k5(w.e[e].a,x,B.bG,x,x,x,x),B.bb),x,!0,x,x,x,x,x,x,x,x,x,new C.c_l(w,d,e),x,x,x,x,x,x,x)},
$S:1328}
C.c_l.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e[this.c].b)},
$S:0}
C.b_m.prototype={
$0(){var x=y.H
return A.am(this.b,!1).fP(A.tt(new C.b_j(this.a),null,x),x)},
$S:0}
C.b_j.prototype={
$1(d){var x=null
return A.kt(A.cVI(B.ao,x,B.t,x),B.ao,A.bM(I.cX4(B.Z,A.pp(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1329}
C.b_l.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1330}
C.b_k.prototype={
$3(d,e,f){var x=null
return A.y(x,D.aDW,B.r,B.a4,x,x,x,120,x,x,x,x,this.a)},
$S:72}
C.b_n.prototype={
$0(){return A.zc(A.dy(this.a.c,0,null),B.qF,null)},
$S:0}
C.bEF.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bEG.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aN(0)
x=w.y
w.y=null
if(x!=null){w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yg(x).cE(new C.bED(),new C.bEE(),y.H)}},
$S:0}
C.bED.prototype={
$1(d){},
$S:121}
C.bEE.prototype={
$1(d){},
$S:11}
C.bEH.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dZ(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.Z(v,new A.ac(Date.now(),0,!1).el(5e6)))}u.akZ()},
$S:257}
C.bEI.prototype={
$1(d){return this.a.akZ()},
$S:65}
C.bEC.prototype={
$2(d,e){return e.b.f0(this.a)},
$S:1331}
C.bEL.prototype={
$1(d){},
$S:198}
C.bEM.prototype={
$1(d){},
$S:11}
C.bEJ.prototype={
$1(d){},
$S:198}
C.bEK.prototype={
$1(d){},
$S:11}
C.cUc.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:22}
C.cTy.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.II,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jp(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDF,r,r,r,r,new C.cTx(d,u),!1,r,r,r,r,r,s,r,t,r,E.Pr,r))}return A.bB(!0,new A.S(D.at_,A.z(A.a([D.cf_,B.as,D.c9B,B.Q,new A.de(1,B.b4,A.d6(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:42}
C.cTx.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.b_z.prototype={
$3(d,e,f){var x=null
return A.kw(A.aW(A.y(B.K,d,B.r,x,x,B.c6,x,44,x,x,x,x,44),f,x),x,e)},
$S:1332}
C.b_w.prototype={
$0(){return A.am(this.a,!1).ia()},
$S:0}
C.b_y.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_x.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bom(A.h(t,s,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bPK)
return r},
$S:56}
C.bQe.prototype={
$0(){return A.am(this.a,!1).bm()},
$S:0}
C.b_p.prototype={
$1(d){return this.a.aiK(this.b)},
$S:3}
C.b_q.prototype={
$0(){return this.a.aiK(this.b)},
$S:0}
C.b_s.prototype={
$2(d,e){return B.ac},
$S:124}
C.b_r.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bA(B.z,1.5)
return A.aW(A.y(B.K,A.h(w.w[e],x,x,x,x,B.e0,x,x,x),B.r,x,x,new A.J(B.t,x,u,v,x,x,B.x),x,34,x,B.cH,x,x,x),new C.b_o(w,e),x)},
$S:190}
C.b_o.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c8i.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b03.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("IA.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.ae_.prototype,"gaUg","Ie",3)
w(C,"dNa","dzX",5)
v(C.w4.prototype,"giI","d5",4)
var t
v(t=C.aeI.prototype,"ga1R","aUj",0)
v(t,"gb7h","b7i",0)
u(C,"dMc",1,function(){return{$allTransitiveDependencies:B.cP,argument:B.cP,dependencies:B.cP,from:B.cP,isAutoDispose:B.cP,name:B.cP,retry:B.cP}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bjh",function(d,e,f,g,h,i,j,k){return C.bjh(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjh(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjh(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.K,[C.Iw,C.B9,C.aYc,C.aYd,C.alM])
w(A.bx,[C.cO5,C.cO6,C.cO7,C.b_j,C.b_l,C.b_k,C.bEF,C.bED,C.bEE,C.bEH,C.bEI,C.bEL,C.bEM,C.bEJ,C.bEK,C.cUc,C.cTy,C.b_z,C.b_y,C.b_x,C.b_p])
w(A.M,[C.NX,C.Zu,C.Ra,C.ao9,C.ack,C.zF,C.ao8,C.Rb])
w(A.bQ,[C.bK3,C.czB,C.c_h,C.c_i,C.c_j,C.c_k,C.c_l,C.b_m,C.b_n,C.bEG,C.cTx,C.b_w,C.bQe,C.b_q,C.b_o,C.c8i,C.b03])
w(A.G,[C.OA,C.Kp])
w(A.Y,[C.ae_,C.aeI])
w(A.cL,[C.c_m,C.bEC,C.b_s,C.b_r])
v(C.w4,A.fd)
v(C.bon,A.f_)
v(C.acj,A.kQ)
v(C.IA,C.acj)
v(C.a5s,C.IA)
x(C.acj,C.alM)})()
A.bu(b.typeUniverse,JSON.parse('{"Zu":{"M":[],"e":[],"f":[]},"OA":{"G":[],"e":[],"f":[]},"NX":{"M":[],"e":[],"f":[]},"ae_":{"Y":["OA"]},"Ra":{"M":[],"e":[],"f":[]},"w4":{"fd":["t<c>"]},"ao9":{"M":[],"e":[],"f":[]},"ack":{"M":[],"e":[],"f":[]},"Kp":{"G":[],"e":[],"f":[]},"zF":{"M":[],"e":[],"f":[]},"ao8":{"M":[],"e":[],"f":[]},"Rb":{"M":[],"e":[],"f":[]},"aeI":{"Y":["Kp"]},"IA":{"kQ":[],"h7":[],"H6":[],"lN":[]},"a5s":{"IA":["1","2","2","3","2","xT<1,2>"],"kQ":[],"h7":[],"H6":[],"lN":[],"IA.0":"1"}}'))
A.Hz(b.typeUniverse,JSON.parse('{"alM":5,"acj":6}'))
var y=(function rtii(){var x=A.x
return{D:x("cK"),E:x("cg"),V:x("r<d5>"),X:x("r<pE<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dh"),S:x("fd<@>"),F:x("+(c,ac)"),C:x("B9"),N:x("c"),q:x("dr"),z:x("@"),r:x("v"),B:x("Iw?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c8g=new A.D("Powered by GIPHY",null,H.IG,null,null,null,null,null,null,null,null)
D.ad7=new A.cX(B.e1,null,null,D.c8g,null)
D.afN=new A.J(B.z,null,null,null,B.ic,null,B.aq)
D.KJ=new C.aYc()
D.ahb=new C.aYd()
D.as0=new A.a3(0,0,0,24)
D.asr=new A.a3(12,10,14,10)
D.asX=new A.a3(16,16,16,12)
D.asZ=new A.a3(16,16,16,24)
D.at_=new A.a3(16,16,16,8)
D.at3=new A.a3(16,2,16,8)
D.att=new A.a3(20,18,20,24)
D.auo=new A.a3(8,12,8,12)
D.aC8=new A.aZ(57404,"HeroiconsSolid",null,!1)
D.aCg=new A.aZ(57436,"HeroiconsSolid",null,!1)
D.Ps=new A.b8(B.i7,18,B.bq,null,"Verificado",null)
D.aDF=new A.b8(B.fg,null,B.W,null,null,null)
D.aBY=new A.aZ(57347,"HeroiconsSolid",null,!1)
D.aDH=new A.b8(D.aBY,20,B.t,null,null,null)
D.aDO=new A.b8(B.lJ,20,B.t,null,null,null)
D.aDW=new A.b8(B.jV,null,B.W,null,null,null)
D.aCX=new A.b8(B.vv,null,null,null,null,null)
D.aF7=new A.dC(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxb=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bzx=x([],A.x("r<daW>"))
D.bzA=x([],A.x("r<+(c,~())>"))
D.id=x([],y.L)
D.amH=new A.X(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.anv=new A.X(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aoy=new A.X(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.an7=new A.X(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bE1=x([D.amH,B.cY,D.anv,D.aoy,D.an7],A.x("r<X>"))
D.bPK=new A.jO("report",!0,P.ab4,null,A.x("jO<c>"))
D.bPP=new C.bon(1,"under")
D.clq=new C.ack(!1,null)
D.bPX=new A.eF(null,0,0,null,null,null,D.clq,null)
D.bXB=new A.bY(1/0,null,null,null)
D.bY7=new S.ym(12,3,null)
D.cfb=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bZl=new A.bF(D.cfb,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cgg=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bZz=new A.bF(D.cgg,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cey=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bZV=new A.bF(D.cey,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c9B=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null,null)
D.cdR=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null,null)
D.cf_=new A.D("Que mensagem queres denunciar?",null,B.hP,null,null,null,null,null,null,null,null)
D.cmn=new C.OA(null)
D.cp7=new C.Zu(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_Q","CP",()=>D.KJ.ayO(0,C.dNa(),A.x("w4"),A.x("t<c>"),y.N))})()};
(a=>{a["MPCWI4BGEEKBBK/HM658pzBcid0="]=a.current})($__dart_deferred_initializers__);