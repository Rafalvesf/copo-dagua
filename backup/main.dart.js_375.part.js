((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,H,I,K,E,L,M,N,B={
drt(){var x,w=$.OX(),v=J.ni(16,y.N)
for(x=0;x<16;++x)v[x]=C.f.aY(C.i.hM(w.qP(256),16),2,"0")
return C.e.iq(v)},
aQN(d,e,f){var x=0,w=A.n(y.N),v,u,t,s,r,q
var $async$aQN=A.j(function(g,h){if(g===1)return A.k(h,w)
for(;;)switch(x){case 0:r=$.R()
q=r.b
q===$&&A.b()
q=q.gbF().e.a
u=(q==null?null:q.r).a
t=C.f.n(e,".")?C.e.ga3(e.split(".")).toLowerCase():"bin"
s=u+"/"+B.drt()+"."+t
q=r.b.ay
q===$&&A.b()
q=q.P("chat-attachments")
x=3
return A.d(q.r3(s,d,new A.ul(!1,f)),$async$aQN)
case 3:r=r.b.ay
r===$&&A.b()
v=r.P("chat-attachments").C0(s)
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$aQN,w)},
cZQ(d){var x,w=C.e.ga3(d.split(".")).toLowerCase()
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
r0(d){var x=0,w=A.n(y.B),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$r0=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:l=y.N
x=3
return A.d(A.cB(null,new B.cA1(),!0,d,!0,!1,null,l),$async$r0)
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
return A.d(new A.lO().Y3(85,2048,C.fI),$async$r0)
case 10:u=f
if(u==null){v=null
x=1
break}x=11
return A.d(u.kD(),$async$r0)
case 11:t=f
s=u.b
if(s.length===0)s="foto.jpg"
r=C.f.fl(s.toLowerCase(),".gif")?"gif":"image"
j=B
x=12
return A.d(B.aQN(t,s,B.cZQ(s)),$async$r0)
case 12:v=new j.Hs(f,r,s)
x=1
break
case 7:x=13
return A.d($.d35().xL(D.bx1,null,null),$async$r0)
case 13:q=f
if(q==null){v=null
x=1
break}x=14
return A.d(q.kD(),$async$r0)
case 14:t=f
l=q.b
if(l.length===0)l="ficheiro"
if(t.length>15728640){if(d.e!=null)d.R(y.q).f.a5(D.bVJ)
v=null
x=1
break}p=l.toLowerCase()
o=C.e.ci(A.a([".jpg",".jpeg",".png",".webp",".heic"],y.s),C.f.gbqK(p))
if(C.f.fl(p,".gif"))r="gif"
else r=o?"image":"file"
j=B
x=15
return A.d(B.aQN(t,l,B.cZQ(l)),$async$r0)
case 15:v=new j.Hs(f,r,l)
x=1
break
case 8:x=16
return A.d(A.cB(null,new B.cA2(),!0,d,!0,!1,null,l),$async$r0)
case 16:n=f
v=n==null?null:new B.Hs("asset:"+n,"sticker",null)
x=1
break
case 9:x=17
return A.d(A.cB(null,new B.cA3(),!0,d,!0,!0,null,l),$async$r0)
case 17:m=f
v=m==null?null:new B.Hs(m,"gif","GIF")
x=1
break
case 5:v=null
x=1
break
case 1:return A.l(v,w)}})
return A.m($async$r0,w)},
Hs:function Hs(d,e,f){this.a=d
this.b=e
this.c=f},
cA1:function cA1(){},
cA2:function cA2(){},
cA3:function cA3(){},
MJ:function MJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bCV:function bCV(d,e){this.a=d
this.b=e},
XE:function XE(d){this.a=d},
cmi:function cmi(d,e){this.a=d
this.b=e},
Ni:function Ni(d){this.a=d},
abK:function abK(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
bRb:function bRb(d){this.a=d},
bRc:function bRc(d,e){this.a=d
this.b=e},
bRd:function bRd(d){this.a=d},
bRe:function bRe(d){this.a=d},
bRg:function bRg(d){this.a=d},
bRf:function bRf(d,e,f){this.a=d
this.b=e
this.c=f},
PM:function PM(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aW6:function aW6(d,e){this.a=d
this.b=e},
aW3:function aW3(d){this.a=d},
aW5:function aW5(d){this.a=d},
aW4:function aW4(d){this.a=d},
aW7:function aW7(d){this.a=d},
djW(d){return new B.vr(d,A.B(y.N,y.F),new A.ai(A.iO(0,0),0,!1))},
cMW(d){var x,w=J.a5(d)
if(w.gY(d))return null
x=w.dB(d,new B.cFr(),y.N).bz(0)
w=x.length
if(w===1)return x[0]+" est\xe1 a escrever\u2026"
if(w===2)return x[0]+" e "+x[1]+" est\xe3o a escrever\u2026"
return""+w+" pessoas est\xe3o a escrever\u2026"},
vr:function vr(d,e,f){var _=this
_.x=d
_.y=null
_.z=e
_.Q=null
_.as=f
_.b=null},
by0:function by0(){},
by1:function by1(d){this.a=d},
bxZ:function bxZ(){},
by_:function by_(){},
by2:function by2(d,e){this.a=d
this.b=e},
by3:function by3(d){this.a=d},
bxY:function bxY(d){this.a=d},
by6:function by6(){},
by7:function by7(){},
by4:function by4(){},
by5:function by5(){},
cFr:function cFr(){},
Yy(d,e,f,g,h){var x=0,w=A.n(y.H),v,u,t
var $async$Yy=A.j(function(i,j){if(i===1)return A.k(j,w)
for(;;)switch(x){case 0:if(h.length===0){d.R(y.q).f.a5(D.bVb)
x=1
break}x=3
return A.d(A.cB(null,new B.cET(A.fb(h,0,A.hS(12,"count",y.r),A.a8(h).c).bz(0)),!0,d,!0,!0,null,y.C),$async$Yy)
case 3:u=j
if(u==null||d.e==null){x=1
break}t=u.a
x=4
return A.d(K.vN(d,e,f,u.c,u.d,g,t),$async$Yy)
case 4:case 1:return A.l(v,w)}})
return A.m($async$Yy,w)},
Ar:function Ar(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cET:function cET(d){this.a=d},
cES:function cES(d,e){this.a=d
this.b=e},
cHe(d,e,f,g,h,i,j){return new B.alo(f,d,i,j,g,h,e,null)},
alo:function alo(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aWd:function aWd(){},
aWa:function aWa(d){this.a=d},
aWc:function aWc(d){this.a=d},
aWb:function aWb(){},
cPN(d){var x,w,v,u
for(x=new A.c2(d),w=y.V,x=new A.an(x,x.gA(0),w.i("an<V.E>")),w=w.i("V.E"),v=0;x.t();){u=x.d
if(u==null)u=w.a(u)
v=v*31+u&2147483647}return D.bBu[C.i.an(v,5)]},
yT:function yT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
PN:function PN(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aW8:function aW8(d,e){this.a=d
this.b=e},
aW9:function aW9(d,e){this.a=d
this.b=e},
PP:function PP(d,e){this.c=d
this.a=e},
bia:function bia(d,e){this.a=d
this.b=e},
aU3:function aU3(){},
aU4:function aU4(){},
aj6:function aj6(){},
Hy:function Hy(){},
aWG:function aWG(d,e){this.a=d
this.b=e},
aa2:function aa2(){},
cTi(d,e,f,g,h,i,j,k){return new B.a3h(A.dv_(B.dvE(),i,j),d,g,h,e,A.aiA(e),f,i.i("@<0>").b6(j).b6(k).i("a3h<1,2,3>"))},
be6(d,e,f,g,h,i,j,k,l,m){return new A.x7(d,h,f,j,k,g,e,i,l.i("@<0>").b6(m).i("x7<1,2>"))},
a3h:function a3h(d,e,f,g,h,i,j,k){var _=this
_.as=d
_.at=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.$ti=k}},D,O,P,Q,R,S,T,U,F
J=c[1]
A=c[0]
C=c[2]
G=c[353]
H=c[167]
I=c[298]
K=c[145]
E=c[229]
L=c[392]
M=c[181]
N=c[418]
B=a.updateHolder(c[113],B)
D=c[236]
O=c[366]
P=c[350]
Q=c[368]
R=c[384]
S=c[388]
T=c[390]
U=c[417]
F=c[307]
B.Hs.prototype={
gau(d){return this.c}}
B.MJ.prototype={
u(d){var x=null,w=A.X(18),v=A.X(18)
return A.eO(!1,w,!0,new A.T(C.hb,A.E(A.a([A.C(x,A.b7(this.c,$.aj,x,x,26),C.r,x,x,new A.L(C.ag,x,x,v,x,x,C.y),x,58,x,x,x,x,58),C.az,A.i(this.d,x,x,x,x,C.lZ,x,x,x)],y.p),C.x,C.k,C.U,0,C.w),x),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bCV(this,d),x,x,x,x,x,x,x)}}
B.XE.prototype={
u(d){var x,w,v,u=null,t=y.p,s=A.a([],t)
for(x=0;x<8;++x){w=D.buP[x]
v=new A.b_(14,14)
s.push(A.eO(!1,new A.bY(v,v,v,v),!0,new A.T(C.pO,A.apB(w,C.hz,u,u),u),u,!0,u,u,u,u,u,u,u,u,u,u,new B.cmi(d,w),u,u,u,u,u,u,u))}return new A.T(D.arF,A.E(A.a([D.c9L,C.V,A.Re(1,s,4,8,8,u,C.eJ,!0)],t),C.I,C.k,C.U,0,C.w),u)}}
B.Ni.prototype={
S(){return new B.abK(new A.aH(C.am,$.ae()),D.bxp)}}
B.abK.prototype={
al(){this.aI()
this.HE("")},
m(){var x=this.d
x.a0$=$.ae()
x.W$=0
this.aa()},
HE(d){return this.beo(d)},
beo(d){var x=0,w=A.n(y.H),v=1,u=[],t=[],s=this,r,q,p,o,n,m,l,k,j,i
var $async$HE=A.j(function(e,f){if(e===1){u.push(f)
x=v}for(;;)switch(x){case 0:s.q(new B.bRb(s))
v=3
m=C.f.D(d)
l=m.length===0
r=l?"trending":"search"
k=A.q(r)
q=A.B(y.N,y.z)
J.bc(q,"api_key","hesiTgROn0yX7ND3qxoBYcYGpMAouZKa")
J.bc(q,"limit","24")
J.bc(q,"rating","pg")
l=!l
if(l)J.bc(q,"q",m)
if(l)J.bc(q,"lang","pt")
p=A.agO("https","api.giphy.com","/v1/gifs/"+k,q)
x=6
return A.d(A.aR6(p,null),$async$HE)
case 6:o=f
q=o
n=y.j.a(J.h(y.P.a(C.bn.jM(0,A.j4(A.j1(q.e)).bG(0,q.w),null)),"data"))
s.q(new B.bRc(s,n))
t.push(5)
x=4
break
case 3:v=2
i=u.pop()
s.q(new B.bRd(s))
t.push(5)
x=4
break
case 2:t=[1]
case 4:v=1
if(s.c!=null)s.q(new B.bRe(s))
x=t.pop()
break
case 5:return A.l(null,w)
case 1:return A.k(u.at(-1),w)}})
return A.m($async$HE,w)},
u(d){var x=this,w=null,v=A.av(d,w,y.w).w,u=A.cR(w,C.aa,!1,w,!0,C.A,w,A.cT(),x.d,w,w,w,w,w,2,D.aDe,C.a1,!0,w,!0,w,!1,w,C.aN,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,x.gaRY(),w,!1,w,w,!1,w,!0,w,C.ay,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.as,w,C.bc,w,C.rw,w,w),t=x.r
if(t!=null)t=A.bR(A.i(t,w,w,w,w,C.hV,C.a6,w,w),w,w)
else t=x.f?C.bp:M.a1b(w,C.a1,U.a7m,new B.bRg(x),x.e.length,w,w,!1)
return A.aM(new A.T(D.arC,A.E(A.a([u,C.ac,A.a7(t,1),C.az,D.ac_],y.p),C.I,C.k,C.p,0,C.w),w),v.a.b*0.62,w)}}
B.PM.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=A.av(d,r,y.w).w.a.a*0.62,p=s.d
if(p==="sticker"&&C.f.b3(s.c,"asset:"))return A.apB(C.f.bI(s.c,6),C.hz,120,120)
if(p==="image"||p==="gif")return A.dH(r,A.eR(A.X(16),new A.eh(new A.aL(0,q,0,320),A.ki(s.c,new B.aW4(q),C.bY,r,new B.aW5(q),r,r),r),C.aO),C.a1,!1,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,new B.aW6(s,d),r,r,r,r,r,r,!1,C.bd)
p=A.X(16)
x=s.f
w=x?$.aj:C.ag
v=A.X(16)
u=A.b7(N.NR,x?C.u:$.aj,r,r,r)
t=s.e
if(t==null)t="Ficheiro"
t=A.i(t,2,C.a_,r,r,A.aF(r,r,x?C.u:C.z,r,r,r,r,r,r,r,r,13,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)
return A.eO(!1,p,!0,A.C(r,A.S(A.a([u,C.ax,new A.ei(1,C.bI,t,r),C.bt,A.b7(I.uP,x?C.u:C.P,r,r,18)],y.p),C.x,C.k,C.U,0,r,r),C.r,r,new A.aL(0,q,0,1/0),new A.L(w,r,r,v,r,r,C.y),r,r,r,D.ar7,r,r,r),r,!0,r,r,r,r,r,r,r,r,r,r,new B.aW7(s),r,r,r,r,r,r,r)},
gau(d){return this.e}}
B.vr.prototype={
cT(){var x=this,w=y.T,v=A.ew(x).L(A.cH($.bb(),new B.by0(),y.D,w),w)
A.ew(x).aat(new B.by1(x))
if(v==null)return C.aa
w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w=w.a7e(0,"typing:"+x.x,C.a5x).bvJ(new B.by2(x,v),"typing")
w.ae4(0)
x.y=w
x.Q=A.xP(C.h8,new B.by3(x))
return C.aa},
ajn(){var x,w=this,v=w.z
v.ee(v,new B.bxY(new A.ai(Date.now(),0,!1)))
x=A.a([],y.s)
for(v=new A.c9(v,v.r,v.e,A.u(v).i("c9<2>"));v.t();)x.push(v.d.a)
if(x.length!==J.aU(w.ga1(0))||!C.e.ej(x,J.d84(w.ga1(0))))w.sa1(0,x)},
abQ(d){var x,w=this,v=w.y,u=A.ew(w).a2(0,$.bb(),y.D).b,t=u==null?null:u.a
if(v==null||t==null)return
x=new A.ai(Date.now(),0,!1)
if(x.cZ(w.as).a<2e6)return
w.as=x
v.adq(0,"typing",A.Q(["id",t,"name",d],y.N,y.z),C.FW).cA(new B.by6(),new B.by7(),y.H)},
fR(d){var x=this.y,w=A.ew(this).a2(0,$.bb(),y.D).b,v=w==null?null:w.a
if(x==null||v==null)return
this.as=new A.ai(A.iO(0,0),0,!1)
x.adq(0,"typing",A.Q(["id",v,"stop",!0],y.N,y.z),C.FW).cA(new B.by4(),new B.by5(),y.H)}}
B.Ar.prototype={}
B.alo.prototype={
u(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q==null)q=new A.dV(s.c,44,s.d,!1,!0,r)
x=y.p
w=A.a([A.i(s.c,1,C.a_,r,r,L.Hx,r,r,r)],x)
v=s.e
if(v!=null)w.push(A.i(v,1,C.a_,r,r,A.aF(r,r,s.f?C.ef:C.P,r,r,r,r,r,r,r,r,12,r,r,C.F,r,r,!0,r,r,r,r,r,r,r,r),r,r,r))
u=A.S(A.a([q,C.aw,A.a7(A.E(w,C.I,C.k,C.U,0,C.w),1)],x),C.x,C.k,C.p,0,r,r)
q=A.a([new A.cO(0,C.bh,C.z.c_(0.06),C.xd,14)],y.E)
w=A.av(d,C.bb,y.w).w
v=new B.aWd().$3(O.Dx,"Voltar",new B.aWa(d))
t=s.r
v=A.a([v,C.aw,A.a7(t==null?u:A.aZ(u,t,r),1)],x)
C.e.p(v,A.a([C.ax,A.Jj(A.C(C.O,Q.P9,C.r,r,r,C.fu,r,44,r,r,r,r,44),r,new B.aWb(),new B.aWc(s),r,D.bMO,"Mais op\xe7\xf5es",y.N)],x))
return A.C(r,A.E(A.a([A.S(v,C.x,C.k,C.p,0,r,r)],x),C.J,C.k,C.U,0,C.w),C.r,r,r,new A.L(C.u,r,r,r,q,r,C.y),r,r,r,new A.a0(16,w.r.b+10,16,12),r,r,r)},
gau(d){return this.c}}
B.yT.prototype={
u(d){var x=null,w=A.av(d,x,y.w).w,v=this.e,u=v==null,t=u?10:8,s=this.d,r=s?C.z:C.u,q=s?18:6,p=s?6:18,o=A.a([],y.p)
if(!u)o.push(new A.T(E.M5,A.i(v,x,x,x,x,A.aF(x,x,B.cPN(v),x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),x))
o.push(A.i(this.c,x,x,x,x,A.aF(x,x,s?C.u:C.z,x,x,x,x,x,x,x,x,15,x,x,C.be,x,1.4,!0,x,x,x,x,x,x,x,x),x,x,x))
return new A.eh(new A.aL(0,w.a.a*0.78,0,1/0),A.C(x,A.E(o,C.I,C.k,C.U,0,C.w),C.r,x,x,new A.L(r,x,x,new A.bY(F.xE,F.xE,new A.b_(q,q),new A.b_(p,p)),x,x,C.y),x,x,x,new A.a0(14,t,14,10),x,x,x),x)}}
B.PN.prototype={
ah8(d){if(!A.tC(this.c.a.a)){d.R(y.q).f.a5(D.bVr)
return}this.d.$0()},
u(d){var x=this,w=null,v=y.p,u=A.a([],v)
C.e.p(u,A.a([A.aZ(A.C(C.O,D.aGb,C.r,w,w,C.fu,w,44,w,w,w,w,44),x.e,w),C.ax],v))
v=A.X(999)
u.push(A.a7(A.C(C.bM,A.cR(w,C.aa,!1,w,!0,C.A,w,A.cT(),x.c,w,w,w,w,w,2,A.ja(w,C.cv,w,C.Z,w,w,w,w,!0,C.cv,w,w,w,w,w,w,!1,w,w,w,w,C.cv,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,!0,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a1,!0,w,!0,w,!1,w,C.aN,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,x.r,w,new B.aW8(x,d),w,!1,w,w,!1,w,!0,w,C.ay,w,w,w,w,w,w,w,w,w,w,w,C.jA,!0,C.as,w,C.bc,w,C.a8j,w,w),C.r,w,w,new A.L(C.ag,w,w,v,w,w,C.y),w,44,w,C.bV,w,w,w),1))
u.push(C.ax)
u.push(A.aZ(A.C(C.O,D.aGd,C.r,w,w,C.ml,w,44,w,w,w,w,44),new B.aW9(x,d),w))
return A.C(w,A.bE(!0,new A.T(S.Mj,A.S(u,C.x,C.k,C.p,0,w,w),w),w,R.M6,!1),C.r,C.u,w,w,w,w,w,w,w,w,w)}}
B.PP.prototype={
u(d){var x=null,w=this.c
return A.cGX(C.ft,w==null?D.bUa:new A.T(D.arK,A.bR(A.i(w,x,x,x,x,C.hX,x,x,x),x,x),x),C.cm,C.aC)}}
B.bia.prototype={
H(){return"PopupMenuPosition."+this.b}}
B.aU3.prototype={
$1(d){return A.lV(d,null,!0,null,null,y.S,y.z)},
gW9(d){return D.afR},
ax0(d,e,f,g,h){return this.gW9(this).$3$1(e,f,g,h)}}
B.aU4.prototype={
$3$1(d,e,f,g){return B.cTi(d,null,!0,null,null,e,f,g)},
$1(d){var x=y.z
return this.$3$1(d,y.S,x,x)}}
B.aj6.prototype={}
B.Hy.prototype={
$1(d){var x=this
return x.as.$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry(new B.aWG(x,d),null,d,null,x,x.f,x.b,x.c)}}
B.aa2.prototype={}
B.a3h.prototype={}
var z=a.updateTypes(["XE(N)","Ni(N)","G<~>(c)","t<c>()","vr(c)","x7<0^,1^>(0^(){$allTransitiveDependencies!y<fU>?,argument!K?,dependencies!y<fU>?,from!kw?,isAutoDispose!z,name!c?,retry!bo?(v,K)?})<f_<1^>,K?>"])
B.cA1.prototype={
$1(d){var x=null,w=y.p
return new A.T(D.ase,A.E(A.a([A.S(A.a([new B.MJ(C.ka,"Foto","photo",x),new B.MJ(D.aAm,"Ficheiro","file",x),new B.MJ(T.k6,"Sticker","sticker",x),new B.MJ(D.aAd,"GIF","gif",x)],w),C.x,C.F6,C.p,0,x,x)],w),C.x,C.k,C.U,0,C.w),x)},
$S:71}
B.cA2.prototype={
$1(d){return D.cl2},
$S:z+0}
B.cA3.prototype={
$1(d){return D.cim},
$S:z+1}
B.bCV.prototype={
$0(){return A.at(this.b,!1).ar(this.a.e)},
$S:0}
B.cmi.prototype={
$0(){return A.at(this.a,!1).ar(this.b)},
$S:0}
B.bRb.prototype={
$0(){var x=this.a
x.f=!0
x.r=null},
$S:0}
B.bRc.prototype={
$0(){var x,w,v,u,t,s=A.a([],y.L)
for(w=J.bw(this.b,y.P),v=A.u(w),w=new A.an(w,w.gA(w),v.i("an<V.E>")),u=y.f,v=v.i("V.E");w.t();){t=w.d
x=t==null?v.a(t):t
J.bM(s,new A.a6(A.a2(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_width_small")),"url")),A.a2(J.h(u.a(J.h(u.a(J.h(x,"images")),"fixed_height")),"url"))))}return this.a.e=s},
$S:0}
B.bRd.prototype={
$0(){return this.a.r="N\xe3o foi poss\xedvel carregar os GIFs."},
$S:0}
B.bRe.prototype={
$0(){return this.a.f=!1},
$S:0}
B.bRg.prototype={
$2(d,e){var x=null,w=this.a
return A.eO(!1,x,!0,A.eR(A.X(10),A.ki(w.e[e].a,x,C.bY,x,x,x,x),C.aO),x,!0,x,x,x,x,x,x,x,x,x,x,new B.bRf(w,d,e),x,x,x,x,x,x,x)},
$S:354}
B.bRf.prototype={
$0(){return A.at(this.b,!1).ar(this.a.e[this.c].b)},
$S:0}
B.aW6.prototype={
$0(){var x=y.H
return A.at(this.b,!1).i3(A.rS(new B.aW3(this.a),null,x),x)},
$S:0}
B.aW3.prototype={
$1(d){var x=null
return A.kf(A.cGZ(C.ai,x,C.u,x),C.ai,A.bR(H.cIs(C.Z,A.zF(this.a.c,x,x,!1,x,!1,x,x,x),2.5,0.8),x,x),x,!1,x,x)},
$S:1291}
B.aW5.prototype={
$3(d,e,f){return e},
$C:"$3",
$R:3,
$S:169}
B.aW4.prototype={
$3(d,e,f){var x=null
return A.C(x,D.aC0,C.r,C.ag,x,x,x,120,x,x,x,x,this.a)},
$S:62}
B.aW7.prototype={
$0(){return A.BK(A.dl(this.a.c,0,null),C.va,null)},
$S:0}
B.by0.prototype={
$1(d){var x=d.b
return x==null?null:x.a},
$S:17}
B.by1.prototype={
$0(){var x,w=this.a,v=w.Q
if(v!=null)v.aV(0)
x=w.y
w.y=null
if(x!=null){w=$.R().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.Gb(x).cA(new B.bxZ(),new B.by_(),y.H)}},
$S:0}
B.bxZ.prototype={
$1(d){},
$S:104}
B.by_.prototype={
$1(d){},
$S:13}
B.by2.prototype={
$1(d){var x,w,v,u=y.f,t=u.b(d.h(0,"payload"))?A.el(u.a(d.h(0,"payload")),y.N,y.z):d,s=A.M(t.h(0,"id"))
if(s==null||s===this.b)return
u=A.M(t.h(0,"name"))
x=u==null?null:C.f.D(u)
u=this.a
w=u.z
if(J.o(t.h(0,"stop"),!0))w.J(0,s)
else{v=x==null||x.length===0?"Algu\xe9m":x
w.j(0,s,new A.a6(v,new A.ai(Date.now(),0,!1).dF(5e6)))}u.ajn()},
$S:233}
B.by3.prototype={
$1(d){return this.a.ajn()},
$S:64}
B.bxY.prototype={
$2(d,e){return e.b.fc(this.a)},
$S:1293}
B.by6.prototype={
$1(d){},
$S:264}
B.by7.prototype={
$1(d){},
$S:13}
B.by4.prototype={
$1(d){},
$S:264}
B.by5.prototype={
$1(d){},
$S:13}
B.cFr.prototype={
$1(d){return C.e.gN(d.split(" "))},
$S:24}
B.cET.prototype={
$1(d){var x,w,v,u,t,s,r=null,q=y.p,p=A.a([],q)
for(x=this.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v]
t=C.f.D(u.b)
t=A.i(t.length===0?"Anexo":t,2,C.a_,r,r,C.Hu,r,r,r)
s=u.d
s=s==null?r:A.i(s,r,r,r,r,r,r,r,r)
p.push(A.iU(!1,C.Z,r,r,!0,r,r,r,!0,r,D.aBN,r,r,r,r,new B.cES(d,u),!1,r,r,r,r,r,s,r,t,r,E.Ol,r))}return A.bE(!0,new A.T(D.arG,A.E(A.a([D.caQ,C.ar,D.c5H,C.Y,new A.ei(1,C.bI,A.d5(p,r,r,r,r,!1,C.a2,!0),r)],q),C.I,C.k,C.U,0,C.w),r),r,C.Z,!0)},
$S:50}
B.cES.prototype={
$0(){return A.at(this.a,!1).ar(this.b)},
$S:0}
B.aWd.prototype={
$3(d,e,f){var x=null
return A.kj(A.aZ(A.C(C.O,d,C.r,x,x,C.fu,x,44,x,x,x,x,44),f,x),x,e)},
$S:1294}
B.aWa.prototype={
$0(){return A.at(this.a,!1).lg()},
$S:0}
B.aWc.prototype={
$1(d){return this.a.w.$0()},
$S:3}
B.aWb.prototype={
$1(d){return D.bvH},
$S:59}
B.aW8.prototype={
$1(d){return this.a.ah8(this.b)},
$S:3}
B.aW9.prototype={
$0(){return this.a.ah8(this.b)},
$S:0}
B.aWG.prototype={
$0(){return this.a.at.$1(this.b)},
$S(){return this.a.$ti.i("Hy.0()")}};(function installTearOffs(){var x=a._instance_1u,w=a._static_1,v=a._instance_0u,u=a.installStaticTearOff
x(B.abK.prototype,"gaRY","HE",2)
w(B,"dww","djW",4)
v(B.vr.prototype,"gie","cT",3)
u(B,"dvE",1,function(){return{$allTransitiveDependencies:C.cF,argument:C.cF,dependencies:C.cF,from:C.cF,isAutoDispose:C.cF,name:C.cF,retry:C.cF}},["$2$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry","$8$$allTransitiveDependencies$argument$dependencies$from$isAutoDispose$name$retry"],["be6",function(d,e,f,g,h,i,j,k){return B.be6(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.be6(d,e,f,g,h,i,j,k,y.S,y.z)},function(d,e,f,g,h,i,j,k){return B.be6(d,e,f,g,h,i,j,k,y.S,y.z)}],5,1)})();(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(A.K,[B.Hs,B.Ar,B.aU3,B.aU4,B.aj6])
w(A.bx,[B.cA1,B.cA2,B.cA3,B.aW3,B.aW5,B.aW4,B.by0,B.bxZ,B.by_,B.by2,B.by3,B.by6,B.by7,B.by4,B.by5,B.cFr,B.cET,B.aWd,B.aWc,B.aWb,B.aW8])
w(A.O,[B.MJ,B.XE,B.PM,B.alo,B.yT,B.PN,B.PP])
w(A.bS,[B.bCV,B.cmi,B.bRb,B.bRc,B.bRd,B.bRe,B.bRf,B.aW6,B.aW7,B.by1,B.cES,B.aWa,B.aW9,B.aWG])
v(B.Ni,A.I)
v(B.abK,A.a1)
w(A.cS,[B.bRg,B.bxY])
v(B.vr,A.f_)
v(B.bia,A.fx)
v(B.aa2,A.kw)
v(B.Hy,B.aa2)
v(B.a3h,B.Hy)
x(B.aa2,B.aj6)})()
A.bu(b.typeUniverse,JSON.parse('{"XE":{"O":[],"e":[],"f":[]},"Ni":{"I":[],"e":[],"f":[]},"MJ":{"O":[],"e":[],"f":[]},"abK":{"a1":["Ni"]},"PM":{"O":[],"e":[],"f":[]},"vr":{"f_":["t<c>"]},"alo":{"O":[],"e":[],"f":[]},"yT":{"O":[],"e":[],"f":[]},"PN":{"O":[],"e":[],"f":[]},"PP":{"O":[],"e":[],"f":[]},"Hy":{"kw":[],"fU":[],"G4":[],"lp":[]},"a3h":{"Hy":["1","2","2","3","2","x7<1,2>"],"kw":[],"fU":[],"G4":[],"lp":[],"Hy.0":"1"}}'))
A.Oi(b.typeUniverse,JSON.parse('{"aj6":5,"aa2":6}'))
var y=(function rtii(){var x=A.w
return{D:x("cw"),V:x("c2"),E:x("r<cO>"),L:x("r<+(c,c)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),P:x("a3<c,@>"),f:x("a3<@,@>"),w:x("dy"),S:x("f_<@>"),F:x("+(c,ai)"),C:x("Ar"),N:x("c"),q:x("dJ"),z:x("@"),r:x("v"),B:x("Hs?"),T:x("c?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.c4s=new A.A("Powered by GIPHY",null,G.Ht,null,null,null,null,null,null,null,null)
D.ac_=new A.dF(C.ec,null,null,D.c4s,null)
D.JD=new B.aU3()
D.afR=new B.aU4()
D.ar7=new A.a0(12,10,14,10)
D.arC=new A.a0(16,16,16,12)
D.arF=new A.a0(16,16,16,24)
D.arG=new A.a0(16,16,16,8)
D.arK=new A.a0(16,2,16,8)
D.ase=new A.a0(20,18,20,24)
D.aAd=new A.aS(57404,"HeroiconsSolid",null,!1)
D.aAm=new A.aS(57436,"HeroiconsSolid",null,!1)
D.aBN=new A.b6(C.hG,null,C.P,null,null,null)
D.aC0=new A.b6(C.ka,null,C.P,null,null,null)
D.aB2=new A.b6(C.uU,null,null,null,null,null)
D.aDe=new A.e3(null,null,null,null,null,null,null,null,null,null,"Pesquisar GIFs",null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.aB2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.aGb=new A.kB("M12 5v14M5 12h14",20,C.z,2.4,!1,C.cc,null)
D.aGd=new A.kB("M12 19V5M5 12l7-7 7 7",18,C.u,2.4,!1,C.cc,null)
D.buP=x(["assets/mascot/duo_clink.png","assets/mascot/duo_wave.png","assets/mascot/duo_chat.png","assets/mascot/duo_budget.png","assets/mascot/duo_sleep.png","assets/mascot/duo_sad.png","assets/mascot/glass_gold.png","assets/mascot/glass_rose.png"],y.s)
D.bMJ=new A.jz("report",!0,P.a9B,null,A.w("jz<c>"))
D.bvH=x([D.bMJ],A.w("r<p7<c>>"))
D.bx1=x([],A.w("r<cWV>"))
D.bxp=x([],y.L)
D.alk=new A.P(1,0.6039215686274509,0.30980392156862746,0.3411764705882353,C.C)
D.amb=new A.P(1,0.5411764705882353,0.41568627450980394,0.1803921568627451,C.C)
D.ang=new A.P(1,0.30980392156862746,0.3686274509803922,0.5411764705882353,C.C)
D.alJ=new A.P(1,0.47843137254901963,0.30980392156862746,0.5411764705882353,C.C)
D.bBu=x([D.alk,C.ef,D.amb,D.ang,D.alJ],A.w("r<P>"))
D.bMO=new B.bia(1,"under")
D.bUa=new A.c8(1/0,null,null,null)
D.cb1=new A.A("Ainda n\xe3o h\xe1 mensagens da outra pessoa para denunciar.",null,null,null,null,null,null,null,null,null,null)
D.bVb=new A.bX(D.cb1,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.A,null)
D.cc2=new A.A("Esta palavra n\xe3o \xe9 permitida. Escolhe outra.",null,null,null,null,null,null,null,null,null,null)
D.bVr=new A.bX(D.cc2,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.A,null)
D.cau=new A.A("O ficheiro tem de ter at\xe9 15 MB.",null,null,null,null,null,null,null,null,null,null)
D.bVJ=new A.bX(D.cau,null,null,null,null,null,null,null,null,null,null,null,null,C.X,!1,null,null,null,C.A,null)
D.c5H=new A.A("Tamb\xe9m podes tocar sem largar numa mensagem.",null,C.a3,null,null,null,null,null,null,null,null)
D.c9L=new A.A("Stickers",null,C.aD,null,null,null,null,null,null,null,null)
D.caQ=new A.A("Que mensagem queres denunciar?",null,C.eQ,null,null,null,null,null,null,null,null)
D.cim=new B.Ni(null)
D.cl2=new B.XE(null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"dJB","BZ",()=>D.JD.ax0(0,B.dww(),A.w("vr"),A.w("t<c>"),y.N))})()};
(a=>{a["Lvm69NdC1pVzvnRzm/FRHAvAdu8="]=a.current})($__dart_deferred_initializers__);