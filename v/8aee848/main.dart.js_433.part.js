((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,I,K,L,M,F,N,O,C={
dI6(){var x,w=$.I0(),v=J.nJ(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aT(B.j.hE(w.pw(256),16),2,"0")
return B.e.hy(v)},
aUB(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUB=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.P()
q=r.b
q===$&&A.b()
q=q.gbu().e.a
u=(q==null?null:q.r).a
t=B.f.t(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dI6()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.yn(s,d,new A.qD("3600",!1,f)),$async$aUB)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cl(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUB,w)},
ded(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
rI(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$rI=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.bQ(null,new C.cOb(),!1,d,!0,!1,null,l),$async$rI)
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
return A.d(new A.lL().aBc(85,2048,B.fw),$async$rI)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.ki(),$async$rI)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=B.f.fc(s.toLowerCase(),".gif")?"gif":"image"
j=C
x=12
return A.d(C.aUB(t,s,C.ded(s)),$async$rI)
case 12:v=new j.ID(f,r,s)
x=1
break
case 7:x=13
return A.d($.diB().y3(D.bz6,null,null),$async$rI)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.ki(),$async$rI)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a0(D.bZ2)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.cb(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbsC(p))
if(B.f.fc(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUB(t,l,C.ded(l)),$async$rI)
case 15:v=new j.ID(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bQ(null,new C.cOc(),!1,d,!0,!1,null,l),$async$rI)
case 16:n=f
v=n==null?null:new C.ID("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bQ(null,new C.cOd(),!1,d,!0,!0,null,l),$async$rI)
case 17:m=f
v=m==null?null:new C.ID(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rI,w)},
ID:function ID(d,e,f){this.a=d
this.b=e
this.c=f},
cOb:function cOb(){},
cOc:function cOc(){},
cOd:function cOd(){},
O3:function O3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bKh:function bKh(d,e){this.a=d
this.b=e},
Zx:function Zx(d){this.a=d},
czH:function czH(d,e){this.a=d
this.b=e},
OH:function OH(d){this.a=d},
adT:function adT(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
c_b:function c_b(d){this.a=d},
c_c:function c_c(d,e){this.a=d
this.b=e},
c_d:function c_d(d){this.a=d},
c_e:function c_e(d){this.a=d},
c_g:function c_g(d){this.a=d},
c_f:function c_f(d,e,f){this.a=d
this.b=e
this.c=f},
Rk:function Rk(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_g:function b_g(d,e){this.a=d
this.b=e},
b_d:function b_d(d){this.a=d},
b_f:function b_f(d){this.a=d},
b_e:function b_e(d){this.a=d},
b_h:function b_h(d){this.a=d},
dAg(d){return new C.w7(d,A.E(y.N,y.F),new A.ab(A.jl(0,0),0,!1))},
d0R(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dq(d,new C.cUs(),y.N).bx(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
w7:function w7(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
bET:function bET(){},
bEU:function bEU(d){this.a=d},
bER:function bER(){},
bES:function bES(){},
bEV:function bEV(d,e){this.a=d
this.b=e},
bEW:function bEW(d){this.a=d},
bEQ:function bEQ(d){this.a=d},
bEZ:function bEZ(){},
bF_:function bF_(){},
bEX:function bEX(){},
bEY:function bEY(){},
cUs:function cUs(){},
a_x(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_x=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a0(D.bZp)
x=1
break}x=3
return A.d(A.bQ(null,new C.cTO(A.dz(h,0,A.et(12,"count",y.r),A.a8(h).c).bx(0)),!1,d,!0,!0,null,y.C),$async$a_x)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wy(d,e,f,u.c,u.d,g,t),$async$a_x)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_x,w)},
B8:function B8(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTO:function cTO(d){this.a=d},
cTN:function cTN(d,e){this.a=d
this.b=e},
cWi(d,e,f,g,h,i,j,k,l){return new C.ao4(g,d,k,h,i,e,j,l,f,null)},
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
b_t:function b_t(){},
b_q:function b_q(d){this.a=d},
b_s:function b_s(d){this.a=d},
b_r:function b_r(d){this.a=d},
cHv(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ae)
v=new A.b5(16,16)
u=d[x]
w.push(new A.bK(1,B.at,A.x(t,A.y(A.a([A.i(u.a,1,B.a1,t,t,B.c6,t,t),B.aU,A.i(u.b,t,t,t,t,B.bf,B.a4,t)],s),B.u,B.h,B.l),B.r,t,t,new A.J(B.a3,t,t,new A.cz(v,v,v,v),t,t,B.x),t,t,t,D.au0,t,t,t),t))
B.e.n(r,w)}return A.O(r,B.u,B.h,B.l,0,t)},
akH(d,e,f){var x,w=null
if(f){x=A.fM(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c7,w,w,B.cY,w)
x=new A.am(A.hl(A.i(d,w,w,w,w,w,w,w),e,x),w)}else{x=A.ce(B.z,w,w,B.t,w,w,B.ab,w,w,B.cY)
x=new A.am(A.bD(A.i(d,w,w,w,w,w,w,w),e,x),w)}return A.aK(x,52,w)},
d_J(d,e,f,g){var x=null,w=y.p,v=A.a([new A.di(1,B.ba,A.i(d,x,x,x,x,B.c6,B.a4,x),x)],w)
if(g)B.e.n(v,A.a([B.dY,D.Pd],w))
v=A.a([new A.ch(d,76,e,!1,!0,x),B.aC,A.O(v,B.u,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.i(f,x,x,x,x,B.L,B.a4,x)],w))
return new A.bA(B.aw,x,B.aD,B.y,A.a([new A.S(B.jE,A.bO(A.y(v,B.u,B.h,B.l),x,x),x),D.bPm],w),x)},
cHd(d,e){var x,w,v=null,u=A.aT(d,B.dR,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a_)
w.push(e[x])
B.e.n(s,w)}return A.bB(!0,new A.ec(new A.aR(0,1/0,0,u.a.b*0.9),A.dS(A.y(s,B.E,B.h,B.l),B.y,v,B.al,v,B.av),v),v,B.Z,!1)},
ach:function ach(d){this.a=d},
bQp:function bQp(d){this.a=d},
d3M(d){var x,w,v,u
for(x=new A.cf(d),w=y.E,x=new A.af(x,x.gA(0),w.i("af<V.E>")),w=w.i("V.E"),v=0;x.q();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDx[B.j.aI(v,5)]},
cWh(d,e,f,g,h,i,j){return new C.ao3(d,i,f,e,g,j,h,null)},
zB:function zB(d,e,f,g){var _=this
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
b_j:function b_j(d,e){this.a=d
this.b=e},
b_k:function b_k(d,e){this.a=d
this.b=e},
b_m:function b_m(){},
b_l:function b_l(d){this.a=d},
b_i:function b_i(d,e){this.a=d
this.b=e},
Rl:function Rl(d,e){this.c=d
this.a=e},
Ks:function Ks(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aeA:function aeA(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c8c:function c8c(d,e){this.a=d
this.b=e},
bom:function bom(d,e){this.a=d
this.b=e},
aY6:function aY6(){},
aY7:function aY7(){},
alE:function alE(){},
IH:function IH(){},
b_Z:function b_Z(d,e){this.a=d
this.b=e},
acg:function acg(){},
d7v(d,e,f,g,h,i,j,k){return new C.a5w(A.dLV(C.dMC(),i,j),d,g,h,e,A.al5(e),f,i.i("@<0>").b7(j).b7(k).i("a5w<1,2,3>"))},
bjd(d,e,f,g,h,i,j,k,l,m){return new A.xS(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xS<1,2>"))},
a5w:function a5w(d,e,f,g,h,i,j,k){var _=this
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
K=c[434]
L=c[331]
M=c[157]
F=c[237]
N=c[167]
O=c[433]
C=a.updateHolder(c[122],C)
D=c[232]
P=c[378]
Q=c[393]
R=c[266]
S=c[180]
T=c[432]
C.ID.prototype={
gap(d){return this.c}}
C.O3.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eY(!1,w,!0,new A.S(B.hy,A.y(A.a([A.x(x,A.b9(this.c,$.au,x,x,26),B.r,x,x,new A.J(B.a3,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aC,A.i(this.d,x,x,x,x,B.hR,x,x)],y.p),B.u,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,new C.bKh(this,d),x,x,x,x,x,x,x)}}
C.Zx.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwM[x]
v=new A.b5(14,14)
s.push(A.eY(!1,new A.cz(v,v,v,v),!0,new A.S(B.q5,A.asn(w,B.js,u,u),u),u,!0,u,u,u,u,u,u,u,u,new C.czH(d,w),u,u,u,u,u,u,u))}return new A.S(D.asB,A.y(A.a([D.c7h,B.R,A.a3p(1,s,4,8,8,u,B.dO,!0)],t),B.G,B.h,B.J),u)}}
C.OH.prototype={
R(){return new C.adT(new A.aF(B.ak,$.aa()),D.ii)}}
C.adT.prototype={
ad(){this.aq()
this.HW("")},
m(){var x=this.d
x.Z$=$.aa()
x.W$=0
this.a6()},
HW(d){return this.bgl(d)},
bgl(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HW=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.c_b(s))
v=3
m=B.f.B(d)
l=m.length===0
r=l?"trending":"search"
k=A.p(r)
q=A.E(y.N,y.z)
J.b1(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.b1(q,"limit","24")
J.b1(q,"rating","pg")
l=!l
if(l)J.b1(q,"q",m)
if(l)J.b1(q,"lang","pt")
p=A.ajg("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aV1(p,null),$async$HW)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(B.bt.jG(0,A.jj(A.jh(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.c_c(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.c_d(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.c_e(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HW,w)},
u(d){var x=this,w=null,v=A.aT(d,w,y.w).w,u=A.cs(w,B.a6,!1,w,!0,B.y,w,A.cv(),x.d,w,w,w,w,w,2,D.aEJ,B.U,!0,w,!0,w,!1,w,B.aB,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTn(),w,!1,w,w,!1,w,!0,w,B.al,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b0,w,B.rU,w,w),t=x.r
if(t!=null)t=A.bO(A.i(t,w,w,w,w,B.mn,B.a4,w),w,w)
else t=x.f?D.bXz:N.b9f(T.a8v,new C.c_g(x),x.e.length,w,w,!1)
return A.aK(new A.S(D.asz,A.y(A.a([u,B.ad,A.a5(t,1),B.aC,D.acQ],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.Rk.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aT(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.aY(s.c,"asset:"))return A.asn(B.f.bF(s.c,6),B.js,120,120)
if(p==="image"||p==="gif")return A.cp(r,A.hX(A.W(16),new A.ec(new A.aR(0,q,0,320),A.jR(s.c,new C.b_e(q),B.bD,r,new C.b_f(q),r,r),r),B.bd),B.U,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_g(s,d),r,r,r,r,r,r,!1,B.aE)
p=A.W(16)
x=s.f
w=x?$.au:B.a3
v=A.W(16)
u=A.b9(O.OD,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,B.a1,r,r,A.aH(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r)
return A.eY(!1,p,!0,A.x(r,A.O(A.a([u,B.ac,new A.di(1,B.ba,t,r),B.be,A.b9(L.vf,x?B.t:B.W,r,r,18)],y.p),B.u,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.J(w,r,r,v,r,r,B.x),r,r,r,D.as3,r,r,r),r,!0,r,r,r,r,r,r,r,r,new C.b_h(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
C.w7.prototype={
d1(){var x=this,w=y.T,v=A.eQ(x).G(A.cC($.b7(),new C.bET(),y.D,w),w)
A.eQ(x).NJ(new C.bEU(x))
if(v==null)return B.a6
w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.LU(0,"typing:"+x.x,B.yj).bxw(new C.bEV(x,v),"typing")
w.PA(0)
x.y=w
x.Q=A.ub(B.hs,new C.bEW(x))
return B.a6},
aki(){var x,w=this,v=w.z
v.eg(v,new C.bEQ(new A.ab(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c5(v,v.r,v.e,A.u(v).i("c5<2>"));v.q();)x.push(v.d.a)
if(x.length!==J.aN(w.ga1(0))||!B.e.e6(x,J.dnQ(w.ga1(0))))w.sa1(0,x)},
acD(d){var x,w=this,v=w.y,u=A.eQ(w).a_(0,$.b7(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ab(Date.now(),0,!1)
if(x.cf(w.as).a<2e6)return
w.as=x
v.aej(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GM).cs(new C.bEZ(),new C.bF_(),y.H)},
cZ(d){var x=this.y,w=A.eQ(this).a_(0,$.b7(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ab(A.jl(0,0),0,!1)
x.aej(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GM).cs(new C.bEX(),new C.bEY(),y.H)}}
C.B8.prototype={}
C.ao4.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.ch(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.di(1,B.ba,A.i(s.c,1,B.a1,r,r,B.a9,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.dY,D.Pd],x))
w=A.a([A.O(w,B.u,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uN,A.x(r,A.i(v,1,r,r,r,B.he,r,r),B.r,r,r,new A.J(B.cz,r,r,u,r,r,B.x),r,r,r,B.CY,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.i(v,1,B.a1,r,r,A.aH(r,r,B.W,r,r,r,r,r,r,r,r,13,r,r,B.b_,r,r,!0,r,r,r,r,r,r,r,r),r,r))}t=A.O(A.a([q,B.af,A.a5(A.y(w,B.G,B.h,B.J),1)],x),B.u,B.h,B.l,0,r)
q=A.a([new A.d4(0,B.bm,B.z.cc(0.06),B.Gc,14)],y.V)
w=A.aT(d,B.b5,y.w).w
v=new C.b_t().$3(K.P1,"Voltar",new C.b_q(d))
u=s.r
v=A.a([v,B.af,A.a5(u==null?t:A.aX(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Ep(A.x(B.K,Q.E8,B.r,r,r,B.bV,r,44,r,r,r,r,44),r,new C.b_r(s),new C.b_s(s),r,D.bPi,"Mais op\xe7\xf5es",y.N)],x))
return A.x(r,A.y(A.a([A.O(v,B.u,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.J(B.t,r,r,B.tE,q,r,B.x),r,r,r,new A.a4(20,w.r.b+20,20,14),r,r,r)},
gap(d){return this.c}}
C.ach.prototype={
u(d){var x=null
return A.bj(x,!0,x,A.cp(x,A.x(x,B.hC,B.r,x,x,new A.J(B.z,x,x,x,x,x,B.ap),x,44,x,x,x,x,44),B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bQp(d),x,x,x,x,x,x,!1,B.aE),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zB.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(F.MP,A.i(v,x,x,x,x,A.aH(x,x,C.d3M(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),x))
o.push(A.i(this.c,x,x,x,x,A.aH(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bn,x,1.4,!0,x,x,x,x,x,x,x,x),x,x))
return new A.ec(new A.aR(0,w.a.a*0.78,0,1/0),A.x(x,A.y(o,B.G,B.h,B.J),B.r,x,x,new A.J(r,x,x,new A.cz(E.yc,E.yc,new A.b5(q,q),new A.b5(p,p)),x,x,B.x),x,x,x,new A.a4(14,t,14,10),x,x,x),x)}}
C.ao3.prototype={
ai4(d){if(!A.uj(this.c.a.a)){d.O(y.q).f.a0(D.bYY)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aX(A.x(B.K,B.P4,B.r,t,t,B.bV,t,44,t,t,t,t,44),u.e,t),B.ac],s))
x=A.W(24)
r.push(A.a5(A.x(B.bb,A.cs(t,B.a6,!1,t,!0,B.y,t,A.cv(),u.c,t,t,t,t,t,2,A.ja(t,B.bk,t,B.Z,t,t,t,t,!0,B.bk,t,t,t,t,t,t,!1,t,t,t,t,B.bk,t,t,t,t,t,t,t,t,B.mk,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.U,!0,t,!0,t,!1,t,B.aB,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_j(u,d),t,!1,t,t,!1,t,!0,t,B.al,t,t,t,t,t,t,t,t,t,t,t,B.fj,!0,B.au,t,B.b0,t,B.a9x,t,t),B.r,t,t,new A.J(B.a3,t,t,x,t,t,B.x),t,48,t,B.bY,t,t,t),1))
r.push(B.ac)
r.push(A.bj(t,!0,t,A.aX(A.x(B.K,D.aDo,B.r,t,t,B.bV,t,44,t,t,t,t,44),new C.b_k(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.O(r,B.u,B.h,B.l,0,t)
r=A.a([new A.d4(0,B.bm,B.z.cc(0.12),B.k4,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aK(A.a4B(B.y,new C.b_l(u),v,t,B.jq,B.bJ,new C.b_m()),34,t),B.ad],s))
x.push(w)
return A.x(t,A.bB(!0,new A.S(B.hw,A.y(x,B.E,B.h,B.J),t),t,D.arE,!1),B.r,t,t,new A.J(B.t,t,t,B.pg,r,t,B.x),t,t,t,t,t,t,t)}}
C.Rl.prototype={
u(d){var x=null,w=this.c
return A.amI(B.f7,w==null?D.bX2:new A.S(D.asF,A.bO(A.i(w,x,x,x,x,B.kf,x,x),x,x),x),B.cj,B.aN)}}
C.Ks.prototype={
R(){return new C.aeA()}}
C.aeA.prototype={
ad(){var x,w=this
w.aq()
x=w.a
w.e=x.d
x.c.an(0,w.ga1h())},
bi(d){var x,w,v=this
v.bD(d)
x=d.c
if(x!==v.a.c){w=v.ga1h()
x.a3(0,w)
v.a.c.an(0,w)}if(!v.d)v.e=v.a.d},
m(){this.a.c.a3(0,this.ga1h())
this.a6()},
aTq(){var x,w=this,v=w.a.c
if(v.f.length===0)return
v=v.gby(0).at
v.toString
x=v>300
if(x!==w.d)w.p(new C.c8c(w,x))},
b5R(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aT(x,null,y.w).w
w=this.a
if(x.ax)w.c.hz(0)
else w.c.i0(0,B.ee,G.Cy)},
u(d){var x,w,v,u=this,t=null,s=B.j.af(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iZ(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.x(B.K,D.aDh,B.r,t,t,D.afw,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bH(B.z,2)
r.push(A.cc(t,A.x(B.K,A.i(""+s,t,t,t,t,B.hR,t,t),B.r,t,B.ld,new A.J(B.t,t,v,x,t,t,B.x),t,20,t,B.CV,t,t,t),t,t,t,-6,-6,t))}q.push(A.cc(16,A.bj(t,!0,t,A.aX(new A.bA(B.aw,t,B.aD,B.r,r,t),u.gb5Q(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bA(B.aw,t,B.aD,B.y,q,t)}}
C.bom.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aY6.prototype={
$1(d){return A.mX(d,null,!0,null,null,y.S,y.z)},
gX1(d){return D.agU},
ay_(d,e,f,g,h){return this.gX1(this).$3$1(e,f,g,h)}}
C.aY7.prototype={
$3$1(d,e,f,g){return C.d7v(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alE.prototype={}
C.IH.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_Z(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.acg.prototype={}
C.a5w.prototype={}
var z=a.updateTypes(["~()","Zx(N)","OH(N)","F<~>(c)","t<c>()","w7(c)","xS<0^,1^>(0^(){$allTransitiveDependencies!w<hb>?,argument!M?,dependencies!w<hb>?,from!kT?,isAutoDispose!C,name!c?,retry!bp?(v,M)?})<fd<1^>,M?>"])
C.cOb.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.at4,A.y(A.a([A.O(A.a([new C.O3(B.jU,"Foto","photo",x),new C.O3(D.aBT,"Ficheiro","file",x),new C.O3(R.jR,"Sticker","sticker",x),new C.O3(D.aBL,"GIF","gif",x)],w),B.u,B.a0z,B.l,0,x)],w),B.u,B.h,B.J),x)},
$S:67}
C.cOc.prototype={
$1(d){return D.coI},
$S:z+1}
C.cOd.prototype={
$1(d){return D.clW},
$S:z+2}
C.bKh.prototype={
$0(){return A.al(this.b,!1).ah(this.a.e)},
$S:0}
C.czH.prototype={
$0(){return A.al(this.a,!1).ah(this.b)},
$S:0}
C.c_b.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.c_c.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bf(this.b,y.P),v=A.u(w),w=new A.af(w,w.gA(w),v.i("af<V.E>")),u=y.f,v=v.i("V.E");w.q();){t=w.d
x=t==null?v.a(t):t
J.ba(s,new A.X(A.Y(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.Y(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.c_d.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.c_e.prototype={
$0(){return this.a.f=!1},
$S:0}
C.c_g.prototype={
$2(d,e){var x=null,w=this.a
return A.eY(!1,x,!0,A.hX(A.W(10),A.jR(w.e[e].a,x,B.bD,x,x,x,x),B.bd),x,!0,x,x,x,x,x,x,x,x,new C.c_f(w,d,e),x,x,x,x,x,x,x)},
$S:1339}
C.c_f.prototype={
$0(){return A.al(this.b,!1).ah(this.a.e[this.c].b)},
$S:0}
C.b_g.prototype={
$0(){var x=y.H
return A.al(this.b,!1).h1(A.tw(new C.b_d(this.a),null,x),x)},
$S:0}
C.b_d.prototype={
$1(d){var x=null
return A.kx(A.cW1(B.ao,x,B.t,x),B.ao,A.bO(I.cXg(B.Z,A.pq(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1340}
C.b_f.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1341}
C.b_e.prototype={
$3(d,e,f){var x=null
return A.x(x,D.aDw,B.r,B.a3,x,x,x,120,x,x,x,x,this.a)},
$S:72}
C.b_h.prototype={
$0(){return A.z9(A.dA(this.a.c,0,null),B.qm,null)},
$S:0}
C.bET.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bEU.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aK(0)
x=w.y
w.y=null
if(x!=null){w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.ya(x).cs(new C.bER(),new C.bES(),y.H)}},
$S:0}
C.bER.prototype={
$1(d){},
$S:113}
C.bES.prototype={
$1(d){},
$S:11}
C.bEV.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dV(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.B(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.B(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.X(v,new A.ab(Date.now(),0,!1).en(5e6)))}u.aki()},
$S:230}
C.bEW.prototype={
$1(d){return this.a.aki()},
$S:65}
C.bEQ.prototype={
$2(d,e){return e.b.fg(this.a)},
$S:1342}
C.bEZ.prototype={
$1(d){},
$S:234}
C.bF_.prototype={
$1(d){},
$S:11}
C.bEX.prototype={
$1(d){},
$S:234}
C.bEY.prototype={
$1(d){},
$S:11}
C.cUs.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:22}
C.cTO.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.i(t.length===0?"Anexo":t,2,B.a1,r,r,B.Ir,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r)
p.push(A.jo(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDf,r,r,r,r,new C.cTN(d,u),!1,r,r,r,r,r,s,r,t,r,F.Pc,r))}return A.bB(!0,new A.S(D.asC,A.y(A.a([D.ca_,B.ar,D.caY,B.P,new A.di(1,B.ba,A.d6(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:31}
C.cTN.prototype={
$0(){return A.al(this.a,!1).ah(this.b)},
$S:0}
C.b_t.prototype={
$3(d,e,f){var x=null
return A.kA(A.aX(A.x(B.K,d,B.r,x,x,B.bV,x,44,x,x,x,x,44),f,x),x,e)},
$S:1343}
C.b_q.prototype={
$0(){return A.al(this.a,!1).hA()},
$S:0}
C.b_s.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.H)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_r.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
r.push(A.bol(A.i(t,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bPa)
return r},
$S:58}
C.bQp.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
C.b_j.prototype={
$1(d){return this.a.ai4(this.b)},
$S:3}
C.b_k.prototype={
$0(){return this.a.ai4(this.b)},
$S:0}
C.b_m.prototype={
$2(d,e){return B.ac},
$S:124}
C.b_l.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bH(B.z,1.5)
return A.aX(A.x(B.K,A.i(w.w[e],x,x,x,x,B.dZ,x,x),B.r,x,x,new A.J(B.t,x,u,v,x,x,B.x),x,34,x,B.cH,x,x,x),new C.b_i(w,e),x)},
$S:278}
C.b_i.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c8c.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_Z.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("IH.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adT.prototype,"gaTn","HW",3)
w(C,"dNA","dAg",5)
v(C.w7.prototype,"giF","d1",4)
var t
v(t=C.aeA.prototype,"ga1h","aTq",0)
v(t,"gb5Q","b5R",0)
u(C,"dMC",1,function(){return{$allTransitiveDependencies:B.cM,argument:B.cM,dependencies:B.cM,from:B.cM,isAutoDispose:B.cM,name:B.cM,retry:B.cM}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bjd",function(d,e,f,g,h,i,j,k){return C.bjd(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjd(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bjd(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.M,[C.ID,C.B8,C.aY6,C.aY7,C.alE])
w(A.bu,[C.cOb,C.cOc,C.cOd,C.b_d,C.b_f,C.b_e,C.bET,C.bER,C.bES,C.bEV,C.bEW,C.bEZ,C.bF_,C.bEX,C.bEY,C.cUs,C.cTO,C.b_t,C.b_s,C.b_r,C.b_j])
w(A.L,[C.O3,C.Zx,C.Rk,C.ao4,C.ach,C.zB,C.ao3,C.Rl])
w(A.bL,[C.bKh,C.czH,C.c_b,C.c_c,C.c_d,C.c_e,C.c_f,C.b_g,C.b_h,C.bEU,C.cTN,C.b_q,C.bQp,C.b_k,C.b_i,C.c8c,C.b_Z])
w(A.G,[C.OH,C.Ks])
w(A.a_,[C.adT,C.aeA])
w(A.cK,[C.c_g,C.bEQ,C.b_m,C.b_l])
v(C.w7,A.fd)
v(C.bom,A.f7)
v(C.acg,A.kT)
v(C.IH,C.acg)
v(C.a5w,C.IH)
x(C.acg,C.alE)})()
A.br(b.typeUniverse,JSON.parse('{"Zx":{"L":[],"e":[],"f":[]},"OH":{"G":[],"e":[],"f":[]},"O3":{"L":[],"e":[],"f":[]},"adT":{"a_":["OH"]},"Rk":{"L":[],"e":[],"f":[]},"w7":{"fd":["t<c>"]},"ao4":{"L":[],"e":[],"f":[]},"ach":{"L":[],"e":[],"f":[]},"Ks":{"G":[],"e":[],"f":[]},"zB":{"L":[],"e":[],"f":[]},"ao3":{"L":[],"e":[],"f":[]},"Rl":{"L":[],"e":[],"f":[]},"aeA":{"a_":["Ks"]},"IH":{"kT":[],"hb":[],"Hc":[],"lO":[]},"a5w":{"IH":["1","2","2","3","2","xS<1,2>"],"kT":[],"hb":[],"Hc":[],"lO":[],"IH.0":"1"}}'))
A.PU(b.typeUniverse,JSON.parse('{"alE":5,"acg":6}'))
var y=(function rtii(){var x=A.z
return{D:x("cH"),E:x("cf"),V:x("r<d4>"),X:x("r<pF<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("du"),S:x("fd<@>"),F:x("+(c,ab)"),C:x("B8"),N:x("c"),q:x("dl"),z:x("@"),r:x("v"),B:x("ID?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.caA=new A.D("Powered by GIPHY",null,H.Ip,null,null,null,null,null,null,null)
D.acQ=new A.d0(B.e_,null,null,D.caA,null)
D.afw=new A.J(B.z,null,null,null,B.ih,null,B.ap)
D.Ks=new C.aY6()
D.agU=new C.aY7()
D.arE=new A.a4(0,0,0,24)
D.as3=new A.a4(12,10,14,10)
D.asz=new A.a4(16,16,16,12)
D.asB=new A.a4(16,16,16,24)
D.asC=new A.a4(16,16,16,8)
D.asF=new A.a4(16,2,16,8)
D.at4=new A.a4(20,18,20,24)
D.au0=new A.a4(8,12,8,12)
D.aBL=new A.b0(57404,"HeroiconsSolid",null,!1)
D.aBT=new A.b0(57436,"HeroiconsSolid",null,!1)
D.Pd=new A.b8(B.ib,18,B.bq,null,"Verificado",null)
D.aDf=new A.b8(B.fe,null,B.W,null,null,null)
D.aBA=new A.b0(57347,"HeroiconsSolid",null,!1)
D.aDh=new A.b8(D.aBA,20,B.t,null,null,null)
D.aDo=new A.b8(B.lH,20,B.t,null,null,null)
D.aDw=new A.b8(B.jU,null,B.W,null,null,null)
D.aCy=new A.b8(B.vh,null,null,null,null,null)
D.aEJ=new A.dE(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCy,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwM=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bz6=x([],A.z("r<dba>"))
D.bz9=x([],A.z("r<+(c,~())>"))
D.ii=x([],y.L)
D.amo=new A.Z(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.anc=new A.Z(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aof=new A.Z(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amP=new A.Z(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDx=x([D.amo,B.cR,D.anc,D.aof,D.amP],A.z("r<Z>"))
D.bPa=new A.jO("report",!0,P.aaD,null,A.z("jO<c>"))
D.bPi=new C.bom(1,"under")
D.ckZ=new C.ach(null)
D.bPm=new A.eF(null,0,0,null,null,null,D.ckZ,null)
D.bX2=new A.c6(1/0,null,null,null)
D.bXz=new S.yk(12,3,null)
D.caf=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null)
D.bYY=new A.bF(D.caf,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cbR=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null)
D.bZ2=new A.bF(D.cbR,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c9_=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null)
D.bZp=new A.bF(D.c9_,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c7h=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null)
D.ca_=new A.D("Que mensagem queres denunciar?",null,B.hQ,null,null,null,null,null,null,null)
D.caY=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null)
D.clW=new C.OH(null)
D.coI=new C.Zx(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e0k","CO",()=>D.Ks.ay_(0,C.dNA(),A.z("w7"),A.z("t<c>"),y.N))})()};
(a=>{a["oglPvt7XK4304MAVs20MxeByrxA="]=a.current})($__dart_deferred_initializers__);