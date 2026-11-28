((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,G,H,I,K,L,M,E,N,O,C={
dHP(){var x,w=$.Qo(),v=J.nM(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aU(B.j.hW(w.qW(256),16),2,"0")
return B.e.hN(v)},
aUH(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUH=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.P()
q=r.b
q===$&&A.b()
q=q.gbw().e.a
u=(q==null?null:q.r).a
t=B.f.q(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dHP()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r7(s,d,new A.v4(!1,f)),$async$aUH)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cp(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUH,w)},
de0(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.bU(null,new C.cO9(),!1,d,!0,!1,null,l),$async$rH)
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
return A.d(C.aUH(t,s,C.de0(s)),$async$rH)
case 12:v=new j.Iw(f,r,s)
x=1
break
case 7:x=13
return A.d($.dim().y9(D.bzA,null,null),$async$rH)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.km(),$async$rH)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a2(D.bZY)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.cb(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbu0(p))
if(B.f.fp(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUH(t,l,C.de0(l)),$async$rH)
case 15:v=new j.Iw(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bU(null,new C.cOa(),!1,d,!0,!1,null,l),$async$rH)
case 16:n=f
v=n==null?null:new C.Iw("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bU(null,new C.cOb(),!1,d,!0,!0,null,l),$async$rH)
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
cO9:function cO9(){},
cOa:function cOa(){},
cOb:function cOb(){},
NX:function NX(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bK5:function bK5(d,e){this.a=d
this.b=e},
Zu:function Zu(d){this.a=d},
czD:function czD(d,e){this.a=d
this.b=e},
OA:function OA(d){this.a=d},
ae_:function ae_(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
c_j:function c_j(d){this.a=d},
c_k:function c_k(d,e){this.a=d
this.b=e},
c_l:function c_l(d){this.a=d},
c_m:function c_m(d){this.a=d},
c_o:function c_o(d){this.a=d},
c_n:function c_n(d,e,f){this.a=d
this.b=e
this.c=f},
Ra:function Ra(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_n:function b_n(d,e){this.a=d
this.b=e},
b_k:function b_k(d){this.a=d},
b_m:function b_m(d){this.a=d},
b_l:function b_l(d){this.a=d},
b_o:function b_o(d){this.a=d},
dA0(d){return new C.w5(d,A.E(y.N,y.F),new A.ac(A.j6(0,0),0,!1))},
d0L(d){var x,w=J.a7(d)
if(w.gZ(d))return null
x=w.du(d,new C.cUg(),y.N).by(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w5:function w5(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bEH:function bEH(){},
bEI:function bEI(d){this.a=d},
bEF:function bEF(){},
bEG:function bEG(){},
bEJ:function bEJ(d,e){this.a=d
this.b=e},
bEK:function bEK(d){this.a=d},
bEE:function bEE(d){this.a=d},
bEN:function bEN(){},
bEO:function bEO(){},
bEL:function bEL(){},
bEM:function bEM(){},
cUg:function cUg(){},
a_u(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_u=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a2(D.bZo)
x=1
break}x=3
return A.d(A.bU(null,new C.cTC(A.dy(h,0,A.eu(12,"count",y.r),A.a8(h).c).by(0)),!1,d,!0,!0,null,y.C),$async$a_u)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wx(d,e,f,u.c,u.d,g,t),$async$a_u)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_u,w)},
B9:function B9(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTC:function cTC(d){this.a=d},
cTB:function cTB(d,e){this.a=d
this.b=e},
cW2(d,e,f,g,h,i,j,k,l){return new C.aoa(g,d,k,h,i,e,j,l,f,null)},
aoa:function aoa(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_A:function b_A(){},
b_x:function b_x(d){this.a=d},
b_z:function b_z(d){this.a=d},
b_y:function b_y(d){this.a=d},
cHv(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.af)
v=new A.b6(16,16)
u=d[x]
w.push(new A.bK(1,B.at,A.y(t,A.z(A.a([A.h(u.a,1,B.a1,t,t,B.c1,t,t,t),B.aU,A.h(u.b,t,t,t,t,B.bf,B.a5,t,t)],s),B.v,B.h,B.l),B.r,t,t,new A.I(B.a4,t,t,new A.cy(v,v,v,v),t,t,B.x),t,t,t,D.aup,t,t,t),t))
B.e.n(r,w)}return A.O(r,B.v,B.h,B.l,0,t)},
akP(d,e,f){var x,w=null
if(f){x=A.fP(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c9,w,w,B.d3,w)
x=A.hj(A.h(d,w,w,w,w,w,w,w,w),e,x)}else{x=A.ci(B.z,w,w,B.t,w,w,B.ab,w,w,B.d3)
x=A.bE(A.h(d,w,w,w,w,w,w,w,w),e,x)}return A.aH(x,52,w)},
d_B(d,e,f,g){var x=null,w=y.p,v=A.a([new A.d8(1,B.b3,A.h(d,x,x,x,x,B.c1,B.a5,x,x),x)],w)
if(g)B.e.n(v,A.a([B.e_,D.Ps],w))
v=A.a([new A.cj(d,76,e,!1,!0,x),B.aF,A.O(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.h(f,x,x,x,x,B.L,B.a5,x,x)],w))
return new A.bC(B.ax,x,B.aD,B.y,A.a([new A.S(B.jF,A.bM(A.z(v,B.v,B.h,B.l),x,x),x),D.bQ_],w),x)},
cHd(d,e){var x,w,v=null,u=A.aO(d,B.dS,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a_)
w.push(e[x])
B.e.n(s,w)}return A.bA(!0,new A.e4(new A.aR(0,1/0,0,u.a.b*0.9),A.dT(A.z(s,B.E,B.h,B.l),B.y,v,B.an,v,B.av),v),v,B.Z,!1)},
ack:function ack(d,e){this.c=d
this.a=e},
bQg:function bQg(d){this.a=d},
d3I(d){var x,w,v,u
for(x=new A.cg(d),w=y.E,x=new A.aj(x,x.gA(0),w.i("aj<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bE4[B.j.aB(v,5)]},
cW1(d,e,f,g,h,i,j){return new C.ao9(d,i,f,e,g,j,h,null)},
zF:function zF(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ao9:function ao9(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_q:function b_q(d,e){this.a=d
this.b=e},
b_r:function b_r(d,e){this.a=d
this.b=e},
b_t:function b_t(){},
b_s:function b_s(d){this.a=d},
b_p:function b_p(d,e){this.a=d
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
c8k:function c8k(d,e){this.a=d
this.b=e},
bop:function bop(d,e){this.a=d
this.b=e},
aYd:function aYd(){},
aYe:function aYe(){},
alN:function alN(){},
IA:function IA(){},
b04:function b04(d,e){this.a=d
this.b=e},
acj:function acj(){},
d7l(d,e,f,g,h,i,j,k){return new C.a5s(A.dLA(C.dMh(),i,j),d,g,h,e,A.ald(e),f,i.i("@<0>").b8(j).b8(k).i("a5s<1,2,3>"))},
bji(d,e,f,g,h,i,j,k,l,m){return new A.xU(d,h,f,j,k,g,e,i,l.i("@<0>").b8(m).i("xU<1,2>"))},
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
return A.eR(!1,w,!0,new A.S(B.hz,A.z(A.a([A.y(x,A.b5(this.c,$.au,x,x,26),B.r,x,x,new A.I(B.a4,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aF,A.h(this.d,x,x,x,x,B.hQ,x,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,x,new C.bK5(this,d),x,x,x,x,x,x,x)}}
C.Zu.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bxe[x]
v=new A.b6(14,14)
s.push(A.eR(!1,new A.cy(v,v,v,v),!0,new A.S(B.nz,A.ass(w,B.ki,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,new C.czD(d,w),u,u,u,u,u,u,u))}return new A.S(D.asZ,A.z(A.a([D.cdU,B.R,A.arI(1,s,4,8,8,u,B.dY,!0)],t),B.F,B.h,B.J),u)}}
C.OA.prototype={
R(){return new C.ae_(new A.aF(B.ak,$.aa()),D.id)}}
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
x=v}for(;;)switch(x){case 0:s.p(new C.c_j(s))
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
p=A.ajp("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aV6(p,null),$async$Ie)
case 6:o=f
q=o
n=y.j.a(J.i(y.P.a(B.bv.jP(0,A.jh(A.jf(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.c_k(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.c_l(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.c_m(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$Ie,w)},
u(d){var x=this,w=null,v=A.aO(d,w,y.w).w,u=A.cs(w,B.a6,!1,w,!0,B.y,w,A.cu(),x.d,w,w,w,w,w,2,D.aFa,B.T,!0,w,!0,w,!1,w,B.aC,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaUg(),w,!1,w,w,!1,w,!0,w,B.an,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b_,w,B.t9,w,w),t=x.r
if(t!=null)t=A.bM(A.h(t,w,w,w,w,B.mr,B.a5,w,w),w,w)
else t=x.f?D.bYa:N.a3m(w,B.T,T.a8J,new C.c_o(x),x.e.length,w,w,!1)
return A.aH(new A.S(D.asX,A.z(A.a([u,B.ad,A.a4(t,1),B.aF,D.ad7],y.p),B.F,B.h,B.l),w),v.a.b*0.62,w)}}
C.Ra.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aO(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.b1(s.c,"asset:"))return A.ass(B.f.bF(s.c,6),B.ki,120,120)
if(p==="image"||p==="gif")return A.cw(r,A.fT(A.W(16),new A.e4(new A.aR(0,q,0,320),A.k5(s.c,new C.b_l(q),B.bG,r,new C.b_m(q),r,r),r),B.bb),B.T,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_n(s,d),r,r,r,r,r,r,!1,B.aH)
p=A.W(16)
x=s.f
w=x?$.au:B.a4
v=A.W(16)
u=A.b5(O.OR,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.h(t,2,B.a1,r,r,A.aJ(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.G,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eR(!1,p,!0,A.y(r,A.O(A.a([u,B.ac,new A.d8(1,B.b3,t,r),B.bh,A.b5(L.vt,x?B.t:B.W,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.I(w,r,r,v,r,r,B.x),r,r,r,D.asr,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,new C.b_o(s),r,r,r,r,r,r,r)},
gar(d){return this.e}}
C.w5.prototype={
d5(){var x=this,w=y.T,v=A.eQ(x).G(A.cH($.b7(),new C.bEH(),y.D,w),w)
A.eQ(x).YU(new C.bEI(x))
if(v==null)return B.a6
w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.Mj(0,"typing:"+x.x,B.yw).byU(new C.bEJ(x,v),"typing")
w.Q7(0)
x.y=w
x.Q=A.u6(B.fU,new C.bEK(x))
return B.a6},
akZ(){var x,w=this,v=w.z
v.eg(v,new C.bEE(new A.ac(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c6(v,v.r,v.e,A.u(v).i("c6<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aQ(w.ga4(0))||!B.e.e9(x,J.dnx(w.ga4(0))))w.sa4(0,x)},
adj(d){var x,w=this,v=w.y,u=A.eQ(w).a_(0,$.b7(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ac(Date.now(),0,!1)
if(x.cA(w.as).a<2e6)return
w.as=x
v.aeX(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.H1).cE(new C.bEN(),new C.bEO(),y.H)},
d3(d){var x=this.y,w=A.eQ(this).a_(0,$.b7(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ac(A.j6(0,0),0,!1)
x.aeX(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.H1).cE(new C.bEL(),new C.bEM(),y.H)}}
C.B9.prototype={}
C.aoa.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.cj(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.d8(1,B.b3,A.h(s.c,1,B.a1,r,r,B.a9,r,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.e_,D.Ps],x))
w=A.a([A.O(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.v0,A.y(r,A.h(v,1,r,r,r,B.hh,r,r,r),B.r,r,r,new A.I(B.cz,r,r,u,r,r,B.x),r,r,r,B.Db,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.h(v,1,B.a1,r,r,A.aJ(r,r,B.W,r,r,r,r,r,r,r,r,13,r,r,B.b0,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))}t=A.O(A.a([q,B.ae,A.a4(A.z(w,B.F,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d6(0,B.bm,B.z.ce(0.06),B.Gr,14)],y.V)
w=A.aO(d,B.b6,y.w).w
v=new C.b_A().$3(K.Pg,"Voltar",new C.b_x(d))
u=s.r
v=A.a([v,B.ae,A.a4(u==null?t:A.aW(t,u,r),1)],x)
B.e.n(v,A.a([B.ae,A.Ep(A.y(B.K,Q.En,B.r,r,r,B.c2,r,44,r,r,r,r,44),r,new C.b_y(s),new C.b_z(s),r,D.bPS,"Mais op\xe7\xf5es",y.N)],x))
return A.y(r,A.z(A.a([A.O(v,B.v,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.I(B.t,r,r,B.tS,q,r,B.x),r,r,r,new A.a3(20,w.r.b+20,20,14),r,r,r)},
gar(d){return this.c}}
C.ack.prototype={
u(d){var x=null
return A.b9(x,!0,x,A.cw(x,A.y(x,B.iQ,B.r,x,x,new A.I(B.z,x,this.c?A.bB(B.t,2):x,x,x,x,B.aq),x,44,x,x,x,x,44),B.T,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bQg(d),x,x,x,x,x,x,!1,B.aH),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a3,x)}}
C.zF.prototype={
u(d){var x=null,w=A.aO(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(E.N5,A.h(v,x,x,x,x,A.aJ(x,x,C.d3I(v),x,x,x,x,x,x,x,x,12,x,x,B.G,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.h(this.c,x,x,x,x,A.aJ(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bl,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.e4(new A.aR(0,w.a.a*0.78,0,1/0),A.y(x,A.z(o,B.F,B.h,B.J),B.r,x,x,new A.I(r,x,x,new A.cy(F.yp,F.yp,new A.b6(q,q),new A.b6(p,p)),x,x,B.x),x,x,x,new A.a3(14,t,14,10),x,x,x),x)}}
C.ao9.prototype={
aiK(d){if(!A.ud(this.c.a.a)){d.O(y.q).f.a2(D.bZC)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aW(A.y(B.K,B.Pj,B.r,t,t,B.c2,t,44,t,t,t,t,44),u.e,t),B.ac],s))
x=A.W(24)
r.push(A.a4(A.y(B.bc,A.cs(t,B.a6,!1,t,!0,B.y,t,A.cu(),u.c,t,t,t,t,t,2,A.iW(t,B.bt,t,B.Z,t,t,t,t,!0,B.bt,t,t,t,t,t,t,!1,t,t,t,t,B.bt,t,t,t,t,t,t,t,t,B.mp,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.T,!0,t,!0,t,!1,t,B.aC,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_q(u,d),t,!1,t,t,!1,t,!0,t,B.an,t,t,t,t,t,t,t,t,t,t,t,B.fk,!0,B.au,t,B.b_,t,B.a9J,t,t),B.r,t,t,new A.I(B.a4,t,t,x,t,t,B.x),t,48,t,B.bQ,t,t,t),1))
r.push(B.ac)
r.push(A.b9(t,!0,t,A.aW(A.y(B.K,D.aDQ,B.r,t,t,B.c2,t,44,t,t,t,t,44),new C.b_r(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t))
w=A.O(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d6(0,B.bm,B.z.ce(0.12),B.kK,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aH(A.a4w(B.y,new C.b_s(u),v,t,t,B.bF,new C.b_t()),34,t),B.ad],s))
x.push(w)
return A.y(t,A.bA(!0,new A.S(B.hw,A.z(x,B.E,B.h,B.J),t),t,D.as0,!1),B.r,t,t,new A.I(B.t,t,t,B.py,r,t,B.x),t,t,t,t,t,t,t)}}
C.Rb.prototype={
u(d){var x=null,w=this.c
return A.aX4(B.f9,w==null?D.bXE:new A.S(D.at3,A.bM(A.h(w,x,x,x,x,B.kb,x,x,x),x,x),x),B.ct,B.aG)}}
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
x.a1(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a1(0,this.ga1R())
this.a6()},
aUj(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gbA(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c8k(w,x))},
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
r=A.a([A.y(B.K,D.aDJ,B.r,t,t,D.afN,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bB(B.z,2)
r.push(A.cb(t,A.y(B.K,A.h(""+s,t,t,t,t,B.hQ,t,t,t),B.r,t,B.lf,new A.I(B.t,t,v,x,t,t,B.x),t,20,t,B.D8,t,t,t),t,t,t,-6,-6,t))}q.push(A.cb(16,A.b9(t,!0,t,A.aW(new A.bC(B.ax,t,B.aD,B.r,r,t),u.gb7h(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a3,t),t,t,t,20,t,t))}return new A.bC(B.ax,t,B.aD,B.y,q,t)}}
C.bop.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aYd.prototype={
$1(d){return A.mZ(d,null,!0,null,null,y.S,y.z)},
gXs(d){return D.ahb},
ayO(d,e,f,g,h){return this.gXs(this).$3$1(e,f,g,h)}}
C.aYe.prototype={
$3$1(d,e,f,g){return C.d7l(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alN.prototype={}
C.IA.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b04(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.acj.prototype={}
C.a5s.prototype={}
var z=a.updateTypes(["~()","Zu(N)","OA(N)","F<~>(c)","t<c>()","w5(c)","xU<0^,1^>(0^(){$allTransitiveDependencies!w<h8>?,argument!K?,dependencies!w<h8>?,from!kQ?,isAutoDispose!B,name!c?,retry!bp?(v,K)?})<fd<1^>,K?>"])
C.cO9.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.att,A.z(A.a([A.O(A.a([new C.NX(B.jV,"Foto","photo",x),new C.NX(D.aCh,"Ficheiro","file",x),new C.NX(R.jS,"Sticker","sticker",x),new C.NX(D.aC9,"GIF","gif",x)],w),B.v,B.G8,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:69}
C.cOa.prototype={
$1(d){return D.cpa},
$S:z+1}
C.cOb.prototype={
$1(d){return D.cmq},
$S:z+2}
C.bK5.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e)},
$S:0}
C.czD.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.c_j.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.c_k.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bf(this.b,y.P),v=A.u(w),w=new A.aj(w,w.gA(w),v.i("aj<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.br(s,new A.X(A.a_(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_width_small")),"url")),A.a_(J.i(u.a(J.i(u.a(J.i(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.c_l.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.c_m.prototype={
$0(){return this.a.f=!1},
$S:0}
C.c_o.prototype={
$2(d,e){var x=null,w=this.a
return A.eR(!1,x,!0,A.fT(A.W(10),A.k5(w.e[e].a,x,B.bG,x,x,x,x),B.bb),x,!0,x,x,x,x,x,x,x,x,x,new C.c_n(w,d,e),x,x,x,x,x,x,x)},
$S:1328}
C.c_n.prototype={
$0(){return A.am(this.b,!1).ae(this.a.e[this.c].b)},
$S:0}
C.b_n.prototype={
$0(){var x=y.H
return A.am(this.b,!1).fP(A.tt(new C.b_k(this.a),null,x),x)},
$S:0}
C.b_k.prototype={
$1(d){var x=null
return A.kt(A.cVM(B.ao,x,B.t,x),B.ao,A.bM(I.cX8(B.Z,A.pp(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1329}
C.b_m.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1330}
C.b_l.prototype={
$3(d,e,f){var x=null
return A.y(x,D.aDY,B.r,B.a4,x,x,x,120,x,x,x,x,this.a)},
$S:72}
C.b_o.prototype={
$0(){return A.zc(A.dz(this.a.c,0,null),B.qF,null)},
$S:0}
C.bEH.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bEI.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aN(0)
x=w.y
w.y=null
if(x!=null){w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yg(x).cE(new C.bEF(),new C.bEG(),y.H)}},
$S:0}
C.bEF.prototype={
$1(d){},
$S:121}
C.bEG.prototype={
$1(d){},
$S:11}
C.bEJ.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dZ(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.C(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.C(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.X(v,new A.ac(Date.now(),0,!1).el(5e6)))}u.akZ()},
$S:257}
C.bEK.prototype={
$1(d){return this.a.akZ()},
$S:65}
C.bEE.prototype={
$2(d,e){return e.b.f0(this.a)},
$S:1331}
C.bEN.prototype={
$1(d){},
$S:198}
C.bEO.prototype={
$1(d){},
$S:11}
C.bEL.prototype={
$1(d){},
$S:198}
C.bEM.prototype={
$1(d){},
$S:11}
C.cUg.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:22}
C.cTC.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.h(t.length===0?"Anexo":t,2,B.a1,r,r,B.II,r,r,r)
s=u.d
s=s==null?r:A.h(s,r,r,r,r,r,r,r,r)
p.push(A.jp(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDH,r,r,r,r,new C.cTB(d,u),!1,r,r,r,r,r,s,r,t,r,E.Pr,r))}return A.bA(!0,new A.S(D.at_,A.z(A.a([D.cf2,B.as,D.c9E,B.Q,new A.d8(1,B.b3,A.d5(p,r,r,r,r,!1,!0),r)],q),B.F,B.h,B.J),r),r,B.Z,!0)},
$S:40}
C.cTB.prototype={
$0(){return A.am(this.a,!1).ae(this.b)},
$S:0}
C.b_A.prototype={
$3(d,e,f){var x=null
return A.kw(A.aW(A.y(B.K,d,B.r,x,x,B.c2,x,44,x,x,x,x,44),f,x),x,e)},
$S:1332}
C.b_x.prototype={
$0(){return A.am(this.a,!1).ia()},
$S:0}
C.b_z.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_y.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.boo(A.h(t,s,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bPN)
return r},
$S:56}
C.bQg.prototype={
$0(){return A.am(this.a,!1).bm()},
$S:0}
C.b_q.prototype={
$1(d){return this.a.aiK(this.b)},
$S:3}
C.b_r.prototype={
$0(){return this.a.aiK(this.b)},
$S:0}
C.b_t.prototype={
$2(d,e){return B.ac},
$S:124}
C.b_s.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bB(B.z,1.5)
return A.aW(A.y(B.K,A.h(w.w[e],x,x,x,x,B.e0,x,x,x),B.r,x,x,new A.I(B.t,x,u,v,x,x,B.x),x,34,x,B.cH,x,x,x),new C.b_p(w,e),x)},
$S:190}
C.b_p.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c8k.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b04.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("IA.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.ae_.prototype,"gaUg","Ie",3)
w(C,"dNf","dA0",5)
v(C.w5.prototype,"giI","d5",4)
var t
v(t=C.aeI.prototype,"ga1R","aUj",0)
v(t,"gb7h","b7i",0)
u(C,"dMh",1,function(){return{$allTransitiveDependencies:B.cQ,argument:B.cQ,dependencies:B.cQ,from:B.cQ,isAutoDispose:B.cQ,name:B.cQ,retry:B.cQ}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bji",function(d,e,f,g,h,i,j,k){return C.bji(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bji(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bji(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.K,[C.Iw,C.B9,C.aYd,C.aYe,C.alN])
w(A.bx,[C.cO9,C.cOa,C.cOb,C.b_k,C.b_m,C.b_l,C.bEH,C.bEF,C.bEG,C.bEJ,C.bEK,C.bEN,C.bEO,C.bEL,C.bEM,C.cUg,C.cTC,C.b_A,C.b_z,C.b_y,C.b_q])
w(A.M,[C.NX,C.Zu,C.Ra,C.aoa,C.ack,C.zF,C.ao9,C.Rb])
w(A.bQ,[C.bK5,C.czD,C.c_j,C.c_k,C.c_l,C.c_m,C.c_n,C.b_n,C.b_o,C.bEI,C.cTB,C.b_x,C.bQg,C.b_r,C.b_p,C.c8k,C.b04])
w(A.G,[C.OA,C.Kp])
w(A.Z,[C.ae_,C.aeI])
w(A.cL,[C.c_o,C.bEE,C.b_t,C.b_s])
v(C.w5,A.fd)
v(C.bop,A.f_)
v(C.acj,A.kQ)
v(C.IA,C.acj)
v(C.a5s,C.IA)
x(C.acj,C.alN)})()
A.bu(b.typeUniverse,JSON.parse('{"Zu":{"M":[],"e":[],"f":[]},"OA":{"G":[],"e":[],"f":[]},"NX":{"M":[],"e":[],"f":[]},"ae_":{"Z":["OA"]},"Ra":{"M":[],"e":[],"f":[]},"w5":{"fd":["t<c>"]},"aoa":{"M":[],"e":[],"f":[]},"ack":{"M":[],"e":[],"f":[]},"Kp":{"G":[],"e":[],"f":[]},"zF":{"M":[],"e":[],"f":[]},"ao9":{"M":[],"e":[],"f":[]},"Rb":{"M":[],"e":[],"f":[]},"aeI":{"Z":["Kp"]},"IA":{"kQ":[],"h8":[],"H6":[],"lN":[]},"a5s":{"IA":["1","2","2","3","2","xU<1,2>"],"kQ":[],"h8":[],"H6":[],"lN":[],"IA.0":"1"}}'))
A.Hz(b.typeUniverse,JSON.parse('{"alN":5,"acj":6}'))
var y=(function rtii(){var x=A.x
return{D:x("cK"),E:x("cg"),V:x("r<d6>"),X:x("r<pE<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a5<c,@>"),f:x("a5<@,@>"),w:x("dh"),S:x("fd<@>"),F:x("+(c,ac)"),C:x("B9"),N:x("c"),q:x("dr"),z:x("@"),r:x("v"),B:x("Iw?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c8j=new A.D("Powered by GIPHY",null,H.IG,null,null,null,null,null,null,null,null)
D.ad7=new A.cX(B.e1,null,null,D.c8j,null)
D.afN=new A.I(B.z,null,null,null,B.ic,null,B.aq)
D.KJ=new C.aYd()
D.ahb=new C.aYe()
D.as0=new A.a3(0,0,0,24)
D.asr=new A.a3(12,10,14,10)
D.asX=new A.a3(16,16,16,12)
D.asZ=new A.a3(16,16,16,24)
D.at_=new A.a3(16,16,16,8)
D.at3=new A.a3(16,2,16,8)
D.att=new A.a3(20,18,20,24)
D.aup=new A.a3(8,12,8,12)
D.aC9=new A.aY(57404,"HeroiconsSolid",null,!1)
D.aCh=new A.aY(57436,"HeroiconsSolid",null,!1)
D.Ps=new A.b8(B.i7,18,B.bq,null,"Verificado",null)
D.aDH=new A.b8(B.fg,null,B.W,null,null,null)
D.aBZ=new A.aY(57347,"HeroiconsSolid",null,!1)
D.aDJ=new A.b8(D.aBZ,20,B.t,null,null,null)
D.aDQ=new A.b8(B.lJ,20,B.t,null,null,null)
D.aDY=new A.b8(B.jV,null,B.W,null,null,null)
D.aCZ=new A.b8(B.vv,null,null,null,null,null)
D.aFa=new A.dD(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCZ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxe=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bzA=x([],A.x("r<db_>"))
D.bzD=x([],A.x("r<+(c,~())>"))
D.id=x([],y.L)
D.amH=new A.Y(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.anv=new A.Y(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aoy=new A.Y(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.an7=new A.Y(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bE4=x([D.amH,B.cY,D.anv,D.aoy,D.an7],A.x("r<Y>"))
D.bPN=new A.jO("report",!0,P.ab4,null,A.x("jO<c>"))
D.bPS=new C.bop(1,"under")
D.clt=new C.ack(!1,null)
D.bQ_=new A.eG(null,0,0,null,null,null,D.clt,null)
D.bXE=new A.bZ(1/0,null,null,null)
D.bYa=new S.yn(12,3,null)
D.cfe=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bZo=new A.bF(D.cfe,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cgj=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bZC=new A.bF(D.cgj,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.ceB=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bZY=new A.bF(D.ceB,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c9E=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null,null)
D.cdU=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null,null)
D.cf2=new A.D("Que mensagem queres denunciar?",null,B.hP,null,null,null,null,null,null,null,null)
D.cmq=new C.OA(null)
D.cpa=new C.Zu(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e_V","CP",()=>D.KJ.ayO(0,C.dNf(),A.x("w5"),A.x("t<c>"),y.N))})()};
(a=>{a["dwBURScSWW+7qAvOeBfNWss0iJM="]=a.current})($__dart_deferred_initializers__);