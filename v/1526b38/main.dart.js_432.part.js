((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,B,E,G,H,I,K,L,M,F,N,O,C={
dHX(){var x,w=$.I_(),v=J.nI(16,y.N)
for(x=0;x<16;++x)v[x]=B.f.aT(B.j.hE(w.pw(256),16),2,"0")
return B.e.hy(v)},
aUz(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aUz=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.P()
q=r.b
q===$&&A.b()
q=q.gbu().e.a
u=(q==null?null:q.r).a
t=B.f.t(e,".")?B.e.ga5(e.split(".")).toLowerCase():"bin"
s=u+"/"+C.dHX()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.yn(s,d,new A.qD("3600",!1,f)),$async$aUz)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").Cl(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aUz,w)},
de3(d){var x,w=B.e.ga5(d.split(".")).toLowerCase()
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
return A.d(A.bQ(null,new C.cO3(),!1,d,!0,!1,null,l),$async$rI)
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
return A.d(C.aUz(t,s,C.de3(s)),$async$rI)
case 12:v=new j.IB(f,r,s)
x=1
break
case 7:x=13
return A.d($.dis().y3(D.bz4,null,null),$async$rI)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.ki(),$async$rI)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.O(y.q).f.a0(D.bYZ)
v=null
x=1
break}p=l.toLowerCase()
o=B.e.cb(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),B.f.gbsC(p))
if(B.f.fc(p,".gif"))r="gif"
else r=o?"image":"file"
j=C
x=15
return A.d(C.aUz(t,l,C.de3(l)),$async$rI)
case 15:v=new j.IB(f,r,l)
x=1
break
case 8:x=16
return A.d(A.bQ(null,new C.cO4(),!1,d,!0,!1,null,l),$async$rI)
case 16:n=f
v=n==null?null:new C.IB("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.bQ(null,new C.cO5(),!1,d,!0,!0,null,l),$async$rI)
case 17:m=f
v=m==null?null:new C.IB(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$rI,w)},
IB:function IB(d,e,f){this.a=d
this.b=e
this.c=f},
cO3:function cO3(){},
cO4:function cO4(){},
cO5:function cO5(){},
O1:function O1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bK9:function bK9(d,e){this.a=d
this.b=e},
Zv:function Zv(d){this.a=d},
czz:function czz(d,e){this.a=d
this.b=e},
OF:function OF(d){this.a=d},
adQ:function adQ(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
c_3:function c_3(d){this.a=d},
c_4:function c_4(d,e){this.a=d
this.b=e},
c_5:function c_5(d){this.a=d},
c_6:function c_6(d){this.a=d},
c_8:function c_8(d){this.a=d},
c_7:function c_7(d,e,f){this.a=d
this.b=e
this.c=f},
Rj:function Rj(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
b_e:function b_e(d,e){this.a=d
this.b=e},
b_b:function b_b(d){this.a=d},
b_d:function b_d(d){this.a=d},
b_c:function b_c(d){this.a=d},
b_f:function b_f(d){this.a=d},
dA7(d){return new C.w6(d,A.E(y.N,y.F),new A.ab(A.jl(0,0),0,!1))},
d0J(d){var x,w=J.a7(d)
if(w.gY(d))return null
x=w.dq(d,new C.cUk(),y.N).bx(0)
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
bEL:function bEL(){},
bEM:function bEM(d){this.a=d},
bEJ:function bEJ(){},
bEK:function bEK(){},
bEN:function bEN(d,e){this.a=d
this.b=e},
bEO:function bEO(d){this.a=d},
bEI:function bEI(d){this.a=d},
bER:function bER(){},
bES:function bES(){},
bEP:function bEP(){},
bEQ:function bEQ(){},
cUk:function cUk(){},
a_v(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$a_v=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.O(y.q).f.a0(D.bZl)
x=1
break}x=3
return A.d(A.bQ(null,new C.cTG(A.dz(h,0,A.et(12,"count",y.r),A.a8(h).c).bx(0)),!1,d,!0,!0,null,y.C),$async$a_v)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(M.wx(d,e,f,u.c,u.d,g,t),$async$a_v)
case 4:case 1:return A.l(v,w)}})
return A.m($async$a_v,w)},
B7:function B7(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cTG:function cTG(d){this.a=d},
cTF:function cTF(d,e){this.a=d
this.b=e},
cW9(d,e,f,g,h,i,j,k,l){return new C.ao2(g,d,k,h,i,e,j,l,f,null)},
ao2:function ao2(d,e,f,g,h,i,j,k,l,m){var _=this
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
b_r:function b_r(){},
b_o:function b_o(d){this.a=d},
b_q:function b_q(d){this.a=d},
b_p:function b_p(d){this.a=d},
cHn(d){var x,w,v,u,t=null,s=y.p,r=A.a([],s)
for(x=0;x<3;++x){w=A.a([],s)
if(x>0)w.push(B.ae)
v=new A.b5(16,16)
u=d[x]
w.push(new A.bK(1,B.at,A.x(t,A.y(A.a([A.i(u.a,1,B.a1,t,t,B.c6,t,t),B.aU,A.i(u.b,t,t,t,t,B.be,B.a4,t)],s),B.v,B.h,B.l),B.r,t,t,new A.J(B.a3,t,t,new A.cz(v,v,v,v),t,t,B.x),t,t,t,D.atY,t,t,t),t))
B.e.n(r,w)}return A.O(r,B.v,B.h,B.l,0,t)},
akF(d,e,f){var x,w=null
if(f){x=A.fM(w,w,w,w,w,w,w,w,w,B.z,w,w,w,w,B.ab,B.c7,w,w,B.cY,w)
x=new A.am(A.hk(A.i(d,w,w,w,w,w,w,w),e,x),w)}else{x=A.cd(B.z,w,w,B.t,w,w,B.ab,w,w,B.cY)
x=new A.am(A.bD(A.i(d,w,w,w,w,w,w,w),e,x),w)}return A.aK(x,52,w)},
d_B(d,e,f,g){var x=null,w=y.p,v=A.a([new A.di(1,B.ba,A.i(d,x,x,x,x,B.c6,B.a4,x),x)],w)
if(g)B.e.n(v,A.a([B.dY,D.P9],w))
v=A.a([new A.ch(d,76,e,!1,!0,x),B.aE,A.O(v,B.v,B.h,B.J,0,x)],w)
if(f.length!==0)B.e.n(v,A.a([B.aU,A.i(f,x,x,x,x,B.L,B.a4,x)],w))
return new A.bA(B.aw,x,B.aC,B.y,A.a([new A.S(B.jE,A.bO(A.y(v,B.v,B.h,B.l),x,x),x),D.bPj],w),x)},
cH5(d,e){var x,w,v=null,u=A.aT(d,B.dR,y.w).w,t=y.p,s=A.a([],t)
for(x=0;x<e.length;++x){w=A.a([],t)
if(x>0)w.push(B.a_)
w.push(e[x])
B.e.n(s,w)}return A.bB(!0,new A.ec(new A.aR(0,1/0,0,u.a.b*0.9),A.dS(A.y(s,B.E,B.h,B.l),B.y,v,B.al,v,B.av),v),v,B.Z,!1)},
ace:function ace(d){this.a=d},
bQh:function bQh(d){this.a=d},
d3E(d){var x,w,v,u
for(x=new A.ce(d),w=y.E,x=new A.af(x,x.gA(0),w.i("af<V.E>")),w=w.i("V.E"),v=0;x.q();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bDv[B.j.aI(v,5)]},
cW8(d,e,f,g,h,i,j){return new C.ao1(d,i,f,e,g,j,h,null)},
zA:function zA(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
ao1:function ao1(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
b_h:function b_h(d,e){this.a=d
this.b=e},
b_i:function b_i(d,e){this.a=d
this.b=e},
b_k:function b_k(){},
b_j:function b_j(d){this.a=d},
b_g:function b_g(d,e){this.a=d
this.b=e},
Rk:function Rk(d,e){this.c=d
this.a=e},
Kq:function Kq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aex:function aex(){var _=this
_.d=!1
_.e=0
_.c=_.a=null},
c84:function c84(d,e){this.a=d
this.b=e},
boe:function boe(d,e){this.a=d
this.b=e},
aY4:function aY4(){},
aY5:function aY5(){},
alC:function alC(){},
IF:function IF(){},
b_X:function b_X(d,e){this.a=d
this.b=e},
acd:function acd(){},
d7l(d,e,f,g,h,i,j,k){return new C.a5t(A.dLL(C.dMs(),i,j),d,g,h,e,A.al3(e),f,i.i("@<0>").b7(j).b7(k).i("a5t<1,2,3>"))},
bj5(d,e,f,g,h,i,j,k,l,m){return new A.xR(d,h,f,j,k,g,e,i,l.i("@<0>").b7(m).i("xR<1,2>"))},
a5t:function a5t(d,e,f,g,h,i,j,k){var _=this
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
C.IB.prototype={
gap(d){return this.c}}
C.O1.prototype={
u(d){var x=null,w=A.W(18),v=A.W(18)
return A.eY(!1,w,!0,new A.S(B.hy,A.y(A.a([A.x(x,A.ba(this.c,$.au,x,x,26),B.r,x,x,new A.J(B.a3,x,x,v,x,x,B.x),x,58,x,x,x,x,58),B.aE,A.i(this.d,x,x,x,x,B.hR,x,x)],y.p),B.v,B.h,B.J),x),x,!0,x,x,x,x,x,x,x,x,new C.bK9(this,d),x,x,x,x,x,x,x)}}
C.Zv.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.bwK[x]
v=new A.b5(14,14)
s.push(A.eY(!1,new A.cz(v,v,v,v),!0,new A.S(B.q3,A.asl(w,B.js,u,u),u),u,!0,u,u,u,u,u,u,u,u,new C.czz(d,w),u,u,u,u,u,u,u))}return new A.S(D.asy,A.y(A.a([D.c7d,B.R,A.a3m(1,s,4,8,8,u,B.dB,!0)],t),B.G,B.h,B.J),u)}}
C.OF.prototype={
R(){return new C.adQ(new A.aF(B.ak,$.aa()),D.ii)}}
C.adQ.prototype={
ad(){this.aq()
this.HW("")},
m(){var x=this.d
x.Z$=$.aa()
x.W$=0
this.a6()},
HW(d){return this.bgl(d)},
bgl(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HW=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.p(new C.c_3(s))
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
p=A.aje("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aV_(p,null),$async$HW)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(B.bt.jG(0,A.jj(A.jh(q.e)).bJ(0,q.w),null)),"data"))
s.p(new C.c_4(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.p(new C.c_5(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.p(new C.c_6(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HW,w)},
u(d){var x=this,w=null,v=A.aT(d,w,y.w).w,u=A.cs(w,B.a6,!1,w,!0,B.y,w,A.cv(),x.d,w,w,w,w,w,2,D.aEH,B.U,!0,w,!0,w,!1,w,B.aB,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaTn(),w,!1,w,w,!1,w,!0,w,B.al,w,w,w,w,w,w,w,w,w,w,w,w,!0,B.au,w,B.b0,w,B.rT,w,w),t=x.r
if(t!=null)t=A.bO(A.i(t,w,w,w,w,B.mm,B.a4,w),w,w)
else t=x.f?D.bXw:N.arC(T.a8r,new C.c_8(x),x.e.length,w,w,!1)
return A.aK(new A.S(D.asw,A.y(A.a([u,B.ad,A.a5(t,1),B.aE,D.acN],y.p),B.G,B.h,B.l),w),v.a.b*0.62,w)}}
C.Rj.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.aT(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&B.f.aY(s.c,"asset:"))return A.asl(B.f.bF(s.c,6),B.js,120,120)
if(p==="image"||p==="gif")return A.cp(r,A.hK(A.W(16),new A.ec(new A.aR(0,q,0,320),A.jR(s.c,new C.b_c(q),B.bD,r,new C.b_d(q),r,r),r),B.bc),B.U,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new C.b_e(s,d),r,r,r,r,r,r,!1,B.aD)
p=A.W(16)
x=s.f
w=x?$.au:B.a3
v=A.W(16)
u=A.ba(O.OA,x?B.t:$.au,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,B.a1,r,r,A.aI(r,r,x?B.t:B.z,r,r,r,r,r,r,r,r,13,r,r,B.F,r,r,!0,r,r,r,r,r,r,r,r),r,r)
return A.eY(!1,p,!0,A.x(r,A.O(A.a([u,B.ac,new A.di(1,B.ba,t,r),B.bj,A.ba(L.vf,x?B.t:B.W,r,r,18)],y.p),B.v,B.h,B.J,0,r),B.r,r,new A.aR(0,q,0,1/0),new A.J(w,r,r,v,r,r,B.x),r,r,r,D.as0,r,r,r),r,!0,r,r,r,r,r,r,r,r,new C.b_f(s),r,r,r,r,r,r,r)},
gap(d){return this.e}}
C.w6.prototype={
d1(){var x=this,w=y.T,v=A.eQ(x).G(A.cC($.b7(),new C.bEL(),y.D,w),w)
A.eQ(x).NJ(new C.bEM(x))
if(v==null)return B.a6
w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.LU(0,"typing:"+x.x,B.yi).bxw(new C.bEN(x,v),"typing")
w.PA(0)
x.y=w
x.Q=A.ua(B.hs,new C.bEO(x))
return B.a6},
aki(){var x,w=this,v=w.z
v.eg(v,new C.bEI(new A.ab(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c4(v,v.r,v.e,A.u(v).i("c4<2>"));v.q();)x.push(v.d.a)
if(x.length!==J.aN(w.ga1(0))||!B.e.e6(x,J.dnH(w.ga1(0))))w.sa1(0,x)},
acD(d){var x,w=this,v=w.y,u=A.eQ(w).a_(0,$.b7(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ab(Date.now(),0,!1)
if(x.cf(w.as).a<2e6)return
w.as=x
v.aej(0,"typing",A.R(["id",t,"name",d],y.N,y.z),B.GL).cs(new C.bER(),new C.bES(),y.H)},
cZ(d){var x=this.y,w=A.eQ(this).a_(0,$.b7(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ab(A.jl(0,0),0,!1)
x.aej(0,"typing",A.R(["id",v,"stop",!0],y.N,y.z),B.GL).cs(new C.bEP(),new C.bEQ(),y.H)}}
C.B7.prototype={}
C.ao2.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.ch(s.c,40,s.d,!1,!0,r)
x=y.p
w=A.a([new A.di(1,B.ba,A.i(s.c,1,B.a1,r,r,B.a9,r,r),r)],x)
if(s.z)B.e.n(w,A.a([B.dY,D.P9],x))
w=A.a([A.O(w,B.v,B.h,B.l,0,r)],x)
v=s.y
if(v!=null){u=A.W(999)
w.push(new A.S(B.uN,A.x(r,A.i(v,1,r,r,r,B.he,r,r),B.r,r,r,new A.J(B.cz,r,r,u,r,r,B.x),r,r,r,B.CW,r,r,r),r))}else{v=s.e
if(v!=null)w.push(A.i(v,1,B.a1,r,r,A.aI(r,r,B.W,r,r,r,r,r,r,r,r,13,r,r,B.b_,r,r,!0,r,r,r,r,r,r,r,r),r,r))}t=A.O(A.a([q,B.af,A.a5(A.y(w,B.G,B.h,B.J),1)],x),B.v,B.h,B.l,0,r)
q=A.a([new A.d4(0,B.bm,B.z.cc(0.06),B.Gb,14)],y.V)
w=A.aT(d,B.b5,y.w).w
v=new C.b_r().$3(K.OY,"Voltar",new C.b_o(d))
u=s.r
v=A.a([v,B.af,A.a5(u==null?t:A.aY(t,u,r),1)],x)
B.e.n(v,A.a([B.af,A.Eo(A.x(B.K,Q.E7,B.r,r,r,B.bV,r,44,r,r,r,r,44),r,new C.b_p(s),new C.b_q(s),r,D.bPf,"Mais op\xe7\xf5es",y.N)],x))
return A.x(r,A.y(A.a([A.O(v,B.v,B.h,B.l,0,r)],x),B.E,B.h,B.J),B.r,r,r,new A.J(B.t,r,r,B.tD,q,r,B.x),r,r,r,new A.a4(20,w.r.b+20,20,14),r,r,r)},
gap(d){return this.c}}
C.ace.prototype={
u(d){var x=null
return A.bj(x,!0,x,A.cp(x,A.x(x,B.hC,B.r,x,x,new A.J(B.z,x,x,x,x,x,B.ap),x,44,x,x,x,x,44),B.U,!1,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,new C.bQh(d),x,x,x,x,x,x,!1,B.aD),!1,x,x,x,!1,x,!1,x,x,x,x,x,x,x,x,"Fechar",x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,B.a5,x)}}
C.zA.prototype={
u(d){var x=null,w=A.aT(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?B.z:B.t,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.S(F.MP,A.i(v,x,x,x,x,A.aI(x,x,C.d3E(v),x,x,x,x,x,x,x,x,12,x,x,B.F,x,x,!0,x,x,x,x,x,x,x,x),x,x),x))
o.push(A.i(this.c,x,x,x,x,A.aI(x,x,s?B.t:B.z,x,x,x,x,x,x,x,x,15,x,x,B.bn,x,1.4,!0,x,x,x,x,x,x,x,x),x,x))
return new A.ec(new A.aR(0,w.a.a*0.78,0,1/0),A.x(x,A.y(o,B.G,B.h,B.J),B.r,x,x,new A.J(r,x,x,new A.cz(E.yb,E.yb,new A.b5(q,q),new A.b5(p,p)),x,x,B.x),x,x,x,new A.a4(14,t,14,10),x,x,x),x)}}
C.ao1.prototype={
ai4(d){if(!A.ui(this.c.a.a)){d.O(y.q).f.a0(D.bYU)
return}this.d.$0()},
u(d){var x,w,v,u=this,t=null,s=y.p,r=A.a([],s)
B.e.n(r,A.a([A.aY(A.x(B.K,B.P0,B.r,t,t,B.bV,t,44,t,t,t,t,44),u.e,t),B.ac],s))
x=A.W(24)
r.push(A.a5(A.x(B.bb,A.cs(t,B.a6,!1,t,!0,B.y,t,A.cv(),u.c,t,t,t,t,t,2,A.ja(t,B.bk,t,B.Z,t,t,t,t,!0,B.bk,t,t,t,t,t,t,!1,t,t,t,t,B.bk,t,t,t,t,t,t,t,t,B.mj,u.f,t,t,t,t,t,!0,t,t,t,!0,!0,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t),B.U,!0,t,!0,t,!1,t,B.aB,t,t,t,t,t,t,t,t,1,t,t,!1,"\u2022",t,u.r,t,new C.b_h(u,d),t,!1,t,t,!1,t,!0,t,B.al,t,t,t,t,t,t,t,t,t,t,t,B.fj,!0,B.au,t,B.b0,t,B.a9u,t,t),B.r,t,t,new A.J(B.a3,t,t,x,t,t,B.x),t,48,t,B.bY,t,t,t),1))
r.push(B.ac)
r.push(A.bj(t,!0,t,A.aY(A.x(B.K,D.aDm,B.r,t,t,B.bV,t,44,t,t,t,t,44),new C.b_i(u,d),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,"Enviar",t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t))
w=A.O(r,B.v,B.h,B.l,0,t)
r=A.a([new A.d4(0,B.bm,B.z.cc(0.12),B.k4,24)],y.V)
x=A.a([],s)
v=u.w.length
if(v!==0&&u.x!=null)B.e.n(x,A.a([A.aK(A.a4y(B.y,new C.b_j(u),v,t,B.jq,B.bJ,new C.b_k()),34,t),B.ad],s))
x.push(w)
return A.x(t,A.bB(!0,new A.S(B.hw,A.y(x,B.E,B.h,B.J),t),t,D.arB,!1),B.r,t,t,new A.J(B.t,t,t,B.pf,r,t,B.x),t,t,t,t,t,t,t)}}
C.Rk.prototype={
u(d){var x=null,w=this.c
return A.amG(B.f7,w==null?D.bX_:new A.S(D.asC,A.bO(A.i(w,x,x,x,x,B.kf,x,x),x,x),x),B.cj,B.aN)}}
C.Kq.prototype={
R(){return new C.aex()}}
C.aex.prototype={
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
if(x!==w.d)w.p(new C.c84(w,x))},
b5R(){var x,w
if(this.a.c.f.length===0)return
x=this.c
x.toString
x=A.aT(x,null,y.w).w
w=this.a
if(x.ax)w.c.hz(0)
else w.c.i0(0,B.ee,G.Cw)},
u(d){var x,w,v,u=this,t=null,s=B.j.af(u.a.d-u.e,0,99),r=y.p,q=A.a([A.iX(0,u.a.e)],r)
if(u.d){x=s>0
w=x?"Descer at\xe9 \xe0s "+s+" mensagens novas":"Descer at\xe9 \xe0 \xfaltima mensagem"
r=A.a([A.x(B.K,D.aDf,B.r,t,t,D.aft,t,44,t,t,t,t,44)],r)
if(x){x=A.W(10)
v=A.bH(B.z,2)
r.push(A.cb(t,A.x(B.K,A.i(""+s,t,t,t,t,B.hR,t,t),B.r,t,B.ld,new A.J(B.t,t,v,x,t,t,B.x),t,20,t,B.CT,t,t,t),t,t,t,-6,-6,t))}q.push(A.cb(16,A.bj(t,!0,t,A.aY(new A.bA(B.aw,t,B.aC,B.r,r,t),u.gb5Q(),t),!1,t,t,t,!1,t,!1,t,t,t,t,t,t,t,t,w,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,B.a5,t),t,t,t,20,t,t))}return new A.bA(B.aw,t,B.aC,B.y,q,t)}}
C.boe.prototype={
I(){return"PopupMenuPosition."+this.b}}
C.aY4.prototype={
$1(d){return A.mW(d,null,!0,null,null,y.S,y.z)},
gX1(d){return D.agR},
ay_(d,e,f,g,h){return this.gX1(this).$3$1(e,f,g,h)}}
C.aY5.prototype={
$3$1(d,e,f,g){return C.d7l(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
C.alC.prototype={}
C.IF.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new C.b_X(x,d),null,d,null,x,x.f,x.b,x.c)}}
C.acd.prototype={}
C.a5t.prototype={}
var z=a.updateTypes(["~()","Zv(N)","OF(N)","F<~>(c)","t<c>()","w6(c)","xR<0^,1^>(0^(){$allTransitiveDependencies!w<hb>?,argument!M?,dependencies!w<hb>?,from!kR?,isAutoDispose!C,name!c?,retry!bp?(v,M)?})<fb<1^>,M?>"])
C.cO3.prototype={
$1(d){var x=null,w=y.p
return new A.S(D.at1,A.y(A.a([A.O(A.a([new C.O1(B.jU,"Foto","photo",x),new C.O1(D.aBQ,"Ficheiro","file",x),new C.O1(R.jR,"Sticker","sticker",x),new C.O1(D.aBI,"GIF","gif",x)],w),B.v,B.a0v,B.l,0,x)],w),B.v,B.h,B.J),x)},
$S:66}
C.cO4.prototype={
$1(d){return D.coE},
$S:z+1}
C.cO5.prototype={
$1(d){return D.clS},
$S:z+2}
C.bK9.prototype={
$0(){return A.al(this.b,!1).ah(this.a.e)},
$S:0}
C.czz.prototype={
$0(){return A.al(this.a,!1).ah(this.b)},
$S:0}
C.c_3.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
C.c_4.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bf(this.b,y.P),v=A.u(w),w=new A.af(w,w.gA(w),v.i("af<V.E>")),u=y.f,v=v.i("V.E");w.q();){t=w.d
x=t==null?v.a(t):t
J.b9(s,new A.X(A.Y(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.Y(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
C.c_5.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
C.c_6.prototype={
$0(){return this.a.f=!1},
$S:0}
C.c_8.prototype={
$2(d,e){var x=null,w=this.a
return A.eY(!1,x,!0,A.hK(A.W(10),A.jR(w.e[e].a,x,B.bD,x,x,x,x),B.bc),x,!0,x,x,x,x,x,x,x,x,new C.c_7(w,d,e),x,x,x,x,x,x,x)},
$S:1339}
C.c_7.prototype={
$0(){return A.al(this.b,!1).ah(this.a.e[this.c].b)},
$S:0}
C.b_e.prototype={
$0(){var x=y.H
return A.al(this.b,!1).h1(A.tv(new C.b_b(this.a),null,x),x)},
$S:0}
C.b_b.prototype={
$1(d){var x=null
return A.kv(A.cVT(B.ao,x,B.t,x),B.ao,A.bO(I.cX8(B.Z,A.pq(this.a.c,x,x,!1,x,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1340}
C.b_d.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:1341}
C.b_c.prototype={
$3(d,e,f){var x=null
return A.x(x,D.aDu,B.r,B.a3,x,x,x,120,x,x,x,x,this.a)},
$S:69}
C.b_f.prototype={
$0(){return A.z8(A.dA(this.a.c,0,null),B.qk,null)},
$S:0}
C.bEL.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
C.bEM.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aK(0)
x=w.y
w.y=null
if(x!=null){w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.ya(x).cs(new C.bEJ(),new C.bEK(),y.H)}},
$S:0}
C.bEJ.prototype={
$1(d){},
$S:116}
C.bEK.prototype={
$1(d){},
$S:11}
C.bEN.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.dV(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.B(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.B(t.h(0,"name"))
x=u==null?null:B.f.B(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.K(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.X(v,new A.ab(Date.now(),0,!1).en(5e6)))}u.aki()},
$S:199}
C.bEO.prototype={
$1(d){return this.a.aki()},
$S:68}
C.bEI.prototype={
$2(d,e){return e.b.fg(this.a)},
$S:1342}
C.bER.prototype={
$1(d){},
$S:230}
C.bES.prototype={
$1(d){},
$S:11}
C.bEP.prototype={
$1(d){},
$S:230}
C.bEQ.prototype={
$1(d){},
$S:11}
C.cUk.prototype={
$1(d){return B.e.gJ(d.split(" "))},
$S:22}
C.cTG.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
t=B.f.B(u.b)
t=A.i(t.length===0?"Anexo":t,2,B.a1,r,r,B.Ir,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r)
p.push(A.jo(!1,B.Z,r,r,!0,r,r,r,!0,r,D.aDd,r,r,r,r,new C.cTF(d,u),!1,r,r,r,r,r,s,r,t,r,F.P8,r))}return A.bB(!0,new A.S(D.asz,A.y(A.a([D.c9W,B.ar,D.caU,B.P,new A.di(1,B.ba,A.d6(p,r,r,r,r,!1,!0),r)],q),B.G,B.h,B.J),r),r,B.Z,!0)},
$S:33}
C.cTF.prototype={
$0(){return A.al(this.a,!1).ah(this.b)},
$S:0}
C.b_r.prototype={
$3(d,e,f){var x=null
return A.ky(A.aY(A.x(B.K,d,B.r,x,x,B.bV,x,44,x,x,x,x,44),f,x),x,e)},
$S:1343}
C.b_o.prototype={
$0(){return A.al(this.a,!1).hA()},
$S:0}
C.b_q.prototype={
$1(d){var x,w,v,u
if(d==="report"){this.a.w.$0()
return}for(x=this.a.Q,w=x.length,v=0;v<x.length;x.length===w||(0,A.G)(x),++v){u=x[v]
if(u.a===d)u.b.$0()}},
$S:3}
C.b_p.prototype={
$1(d){var x,w,v,u,t,s=null,r=A.a([],y.X)
for(x=this.a.Q,w=x.length,v=y.N,u=0;u<x.length;x.length===w||(0,A.G)(x),++u){t=x[u].a
r.push(A.bod(A.i(t,s,s,s,s,s,s,s),!0,t,v))}r.push(D.bP7)
return r},
$S:60}
C.bQh.prototype={
$0(){return A.al(this.a,!1).bj()},
$S:0}
C.b_h.prototype={
$1(d){return this.a.ai4(this.b)},
$S:3}
C.b_i.prototype={
$0(){return this.a.ai4(this.b)},
$S:0}
C.b_k.prototype={
$2(d,e){return B.ac},
$S:105}
C.b_j.prototype={
$2(d,e){var x=null,w=this.a,v=A.W(17),u=A.bH(B.z,1.5)
return A.aY(A.x(B.K,A.i(w.w[e],x,x,x,x,B.dZ,x,x),B.r,x,x,new A.J(B.t,x,u,v,x,x,B.x),x,34,x,B.cH,x,x,x),new C.b_g(w,e),x)},
$S:163}
C.b_g.prototype={
$0(){var x=this.a
return x.x.$1(x.w[this.b])},
$S:0}
C.c84.prototype={
$0(){var x=this.a,w=this.b
x.d=w
if(!w)x.e=x.a.d},
$S:0}
C.b_X.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("IF.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(C.adQ.prototype,"gaTn","HW",3)
w(C,"dNq","dA7",5)
v(C.w6.prototype,"giF","d1",4)
var t
v(t=C.aex.prototype,"ga1h","aTq",0)
v(t,"gb5Q","b5R",0)
u(C,"dMs",1,function(){return{$allTransitiveDependencies:B.cM,argument:B.cM,dependencies:B.cM,from:B.cM,isAutoDispose:B.cM,name:B.cM,retry:B.cM}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["bj5",function(d,e,f,g,h,i,j,k){return C.bj5(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bj5(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return C.bj5(d,e,f,g,h,i,j,k,y.S,y.z)}],6,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.M,[C.IB,C.B7,C.aY4,C.aY5,C.alC])
w(A.bu,[C.cO3,C.cO4,C.cO5,C.b_b,C.b_d,C.b_c,C.bEL,C.bEJ,C.bEK,C.bEN,C.bEO,C.bER,C.bES,C.bEP,C.bEQ,C.cUk,C.cTG,C.b_r,C.b_q,C.b_p,C.b_h])
w(A.L,[C.O1,C.Zv,C.Rj,C.ao2,C.ace,C.zA,C.ao1,C.Rk])
w(A.bL,[C.bK9,C.czz,C.c_3,C.c_4,C.c_5,C.c_6,C.c_7,C.b_e,C.b_f,C.bEM,C.cTF,C.b_o,C.bQh,C.b_i,C.b_g,C.c84,C.b_X])
w(A.H,[C.OF,C.Kq])
w(A.a_,[C.adQ,C.aex])
w(A.cK,[C.c_8,C.bEI,C.b_k,C.b_j])
v(C.w6,A.fb)
v(C.boe,A.fg)
v(C.acd,A.kR)
v(C.IF,C.acd)
v(C.a5t,C.IF)
x(C.acd,C.alC)})()
A.br(b.typeUniverse,JSON.parse('{"Zv":{"L":[],"e":[],"f":[]},"OF":{"H":[],"e":[],"f":[]},"O1":{"L":[],"e":[],"f":[]},"adQ":{"a_":["OF"]},"Rj":{"L":[],"e":[],"f":[]},"w6":{"fb":["t<c>"]},"ao2":{"L":[],"e":[],"f":[]},"ace":{"L":[],"e":[],"f":[]},"Kq":{"H":[],"e":[],"f":[]},"zA":{"L":[],"e":[],"f":[]},"ao1":{"L":[],"e":[],"f":[]},"Rk":{"L":[],"e":[],"f":[]},"aex":{"a_":["Kq"]},"IF":{"kR":[],"hb":[],"Hb":[],"lO":[]},"a5t":{"IF":["1","2","2","3","2","xR<1,2>"],"kR":[],"hb":[],"Hb":[],"lO":[],"IF.0":"1"}}'))
A.PS(b.typeUniverse,JSON.parse('{"alC":5,"acd":6}'))
var y=(function rtii(){var x=A.z
return{D:x("cH"),E:x("ce"),V:x("r<d4>"),X:x("r<pF<c>>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("du"),S:x("fb<@>"),F:x("+(c,ab)"),C:x("B7"),N:x("c"),q:x("dl"),z:x("@"),r:x("v"),B:x("IB?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.caw=new A.D("Powered by GIPHY",null,H.Ip,null,null,null,null,null,null,null)
D.acN=new A.d_(B.e_,null,null,D.caw,null)
D.aft=new A.J(B.z,null,null,null,B.ih,null,B.ap)
D.Ks=new C.aY4()
D.agR=new C.aY5()
D.arB=new A.a4(0,0,0,24)
D.as0=new A.a4(12,10,14,10)
D.asw=new A.a4(16,16,16,12)
D.asy=new A.a4(16,16,16,24)
D.asz=new A.a4(16,16,16,8)
D.asC=new A.a4(16,2,16,8)
D.at1=new A.a4(20,18,20,24)
D.atY=new A.a4(8,12,8,12)
D.aBI=new A.b0(57404,"HeroiconsSolid",null,!1)
D.aBQ=new A.b0(57436,"HeroiconsSolid",null,!1)
D.P9=new A.b8(B.ib,18,B.bq,null,"Verificado",null)
D.aDd=new A.b8(B.fe,null,B.W,null,null,null)
D.aBx=new A.b0(57347,"HeroiconsSolid",null,!1)
D.aDf=new A.b8(D.aBx,20,B.t,null,null,null)
D.aDm=new A.b8(B.lG,20,B.t,null,null,null)
D.aDu=new A.b8(B.jU,null,B.W,null,null,null)
D.aCw=new A.b8(B.vh,null,null,null,null,null)
D.aEH=new A.dE(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aCw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bwK=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bz4=x([],A.z("r<db0>"))
D.bz7=x([],A.z("r<+(c,~())>"))
D.ii=x([],y.L)
D.aml=new A.Z(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,B.C)
D.an9=new A.Z(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,B.C)
D.aoc=new A.Z(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,B.C)
D.amM=new A.Z(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,B.C)
D.bDv=x([D.aml,B.cR,D.an9,D.aoc,D.amM],A.z("r<Z>"))
D.bP7=new A.jO("report",!0,P.aaA,null,A.z("jO<c>"))
D.bPf=new C.boe(1,"under")
D.ckV=new C.ace(null)
D.bPj=new A.eF(null,0,0,null,null,null,D.ckV,null)
D.bX_=new A.c5(1/0,null,null,null)
D.bXw=new S.yj(12,3,null)
D.cab=new A.D("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null)
D.bYU=new A.bF(D.cab,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.cbN=new A.D("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null)
D.bYZ=new A.bF(D.cbN,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c8W=new A.D("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null)
D.bZl=new A.bF(D.c8W,null,null,null,null,null,null,null,null,null,null,null,null,B.S,!1,null,null,null,B.y,null)
D.c7d=new A.D("Stickers",null,B.a9,null,null,null,null,null,null,null)
D.c9W=new A.D("Que mensagem queres denunciar?",null,B.hQ,null,null,null,null,null,null,null)
D.caU=new A.D("Tamb\xe9m podes tocar sem largar numa mensagem.",null,B.L,null,null,null,null,null,null,null)
D.clS=new C.OF(null)
D.coE=new C.Zv(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"e09","CN",()=>D.Ks.ay_(0,C.dNq(),A.z("w6"),A.z("t<c>"),y.N))})()};
(a=>{a["QrPqvi3J6BJImg7mq/TMvatavJI="]=a.current})($__dart_deferred_initializers__);