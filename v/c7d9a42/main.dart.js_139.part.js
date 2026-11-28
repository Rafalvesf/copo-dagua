((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dJF(d){var x,w,v=A.aT("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).h4(C.f.C(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMB(w,x)},
cI2(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cI2=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.S().b
p===$&&A.b()
x=7
return A.d(p.jI("partner_today",y.z),$async$cI2)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.aq(o==null?C.am:o)
while(o.t()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.q(n==null?"Evento":n)
m=A.D(J.i(q,"booking_number"))
l=A.aL(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aL(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.by(r,new A.aN1([k,n,m,l]))}}p=A.aL(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aL(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avn(r,p,o)
x=1
break
u=2
x=6
break
case 4:u=3
i=t.pop()
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cI2,w)},
avn:function avn(d,e,f){this.a=d
this.b=e
this.c=f},
drN(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
g=A.q(g==null?"Evento":g)
x=j.h(d,"date")
x=A.dq(A.q(x==null?"":x))
w=A.D(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.D(J.i(i,"status")):k
if(s){s=A.aL(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aL(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.dq(A.q(p==null?"":p))
p=p==null?k:p.e0()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.aq(j==null?C.am:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.dq(A.q(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.q(l==null?"Parceiro":l)
o.push(new A.aMn(A.db(A.q(m.h(n,"at"))).e0(),l))}}return new B.TL(h,g,x,w,v,u,r,s,q,p,o)},
cI0(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cI0=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.S().b
p===$&&A.b()
x=7
return A.d(p.jI("my_entries",y.z),$async$cI0)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.aq(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.by(r,B.drN(q))}v=r
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$cI0,w)},
dIZ(d){var x,w,v="public",u=$.S().b
u===$&&A.b()
x=u.gbD().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cJ7(w)
u=u.ch
u===$&&A.b()
return u.Mg(0,"entries-"+w,C.yE).Oh(new B.cJ4(d),C.H5,x.$1("user_id"),v,"event_checkins").Oh(new B.cJ5(d),C.H5,x.$1("user_id"),v,"booking_arrivals").Oh(new B.cJ6(d),C.H6,x.$1("buyer_id"),v,"event_tickets").Qb(0)},
TL:function TL(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l
_.y=m
_.z=n},
cJ7:function cJ7(d){this.a=d},
cJ4:function cJ4(d){this.a=d},
cJ5:function cJ5(d){this.a=d},
cJ6:function cJ6(d){this.a=d},
dok(){return new B.Jf(null)},
db_(d){return C.f.aY(C.j.k(A.ic(d)),2,"0")+":"+C.f.aY(C.j.k(A.hY(d)),2,"0")},
Jf:function Jf(d){this.a=d},
b4I:function b4I(){},
af0:function af0(d){this.a=d},
af1:function af1(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
c9f:function c9f(d){this.a=d},
c9e:function c9e(d){this.a=d},
c99:function c99(d,e){this.a=d
this.b=e},
c9c:function c9c(d){this.a=d},
c9b:function c9b(d){this.a=d},
c9d:function c9d(d){this.a=d},
c9a:function c9a(d){this.a=d},
afB:function afB(d){this.a=d},
afC:function afC(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cf5:function cf5(d,e){this.a=d
this.b=e},
cf6:function cf6(){},
adk:function adk(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bUV:function bUV(d){this.a=d},
P_:function P_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aea:function aea(d,e){this.c=d
this.a=e},
abY:function abY(d,e){this.c=d
this.a=e},
ahi:function ahi(d,e){this.c=d
this.a=e},
aj_:function aj_(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiF:function aiF(d,e,f){this.c=d
this.d=e
this.a=f},
aGf:function aGf(d,e){this.c=d
this.a=e},
abn:function abn(d){this.a=d},
abo:function abo(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bGL:function bGL(d){this.a=d},
bGK:function bGK(){},
bGJ:function bGJ(d,e){this.a=d
this.b=e},
aSG:function aSG(){},
aT1:function aT1(){},
aT6:function aT6(){},
UG:function UG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agr:function agr(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.eh$=e
_.bH$=f
_.c=_.a=null},
cpA:function cpA(){},
cpB:function cpB(d,e){this.a=d
this.b=e},
cpC:function cpC(d){this.a=d},
X4:function X4(d){this.a=d},
aEA:function aEA(d){this.a=d},
aTa:function aTa(){},
akl:function akl(){},
apF:function apF(d,e,f){this.c=d
this.a=e
this.b=f},
drD(d,e){},
a4I:function a4I(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJf:function aJf(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c8K:function c8K(d){this.a=d},
c8J:function c8J(d,e){this.a=d
this.b=e},
aT_:function aT_(){},
drA(d,e){var x=null,w=d===D.arb?250:0
return new B.a4L(d,w,e,new A.ll(x,x,y.J),new B.xK(x,C.Bz,x,!1,!1,C.aS,C.je,1),$.aa())},
a4L:function a4L(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.V$=0
_.Y$=i
_.aH$=_.bn$=0},
bhL:function bhL(d){this.a=d},
bhM:function bhM(d){this.a=d},
bhN:function bhN(d){this.a=d},
bhO:function bhO(d){this.a=d},
xK:function xK(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayc:function ayc(d){this.a=d},
bzW:function bzW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bzX:function bzX(){}},D,F,G,H,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[278]
B=a.updateHolder(c[13],B)
D=c[275]
F=c[88]
G=c[195]
H=c[122]
I=c[242]
K=c[277]
L=c[276]
B.avn.prototype={}
B.TL.prototype={}
B.Jf.prototype={
bg(d,e){var x=y.E
return e.H(A.cH($.ba(),new B.b4I(),y.D,x),x)===C.dO?D.cp5:D.coQ}}
B.af0.prototype={
P(){return new B.af1()}}
B.af1.prototype={
ag(){var x=this
x.aA()
$.az.b4$.push(x)
x.kv()
x.r=B.dIZ(new B.c9f(x))},
m(){var x,w,v=this
$.az.ie(v)
x=v.w
if(x!=null)x.aL(0)
x=v.r
if(x!=null){w=$.S().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yh(x)}v.a6()},
nf(d){if(d===C.es)this.kv()},
Dq(d){return this.b7S(d)},
kv(){return this.Dq(!1)},
b7S(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Dq=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.aq(o==null?D.bAx:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cI0(),$async$Dq)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.c99(u,s))
if(!d||s==null){x=1
break}for(o=J.aq(s);o.t();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null,null)
p.a3(new A.bF(o,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.z,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$Dq,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDp(),q=u.d,p=y.p
q=A.a([new B.P_("QR code",C.qM,!q,new B.c9c(u),t),new B.P_("Scannear",C.vJ,q,new B.c9d(u),t)],p)
if(u.d)p=D.bfR
else{x=A.a([D.cm_,C.R,D.ak3,C.bs,D.cmx,C.au],p)
w=s==null
if(w&&!u.f)x.push(L.a93)
else if(w)x.push(new B.ahi(r,t))
else{w=J.a7(s)
if(w.gZ(s))x.push(D.bLZ)
else{v=A.a([],p)
for(w=w.gX(s);w.t();)C.e.n(v,A.a([D.qn,new B.aGf(w.gE(w),t)],p))
v.push(D.qn)
C.e.n(x,v)}}p=x}return new B.adk(r,q,p,t)}}
B.afB.prototype={
P(){return new B.afC()}}
B.afC.prototype={
ag(){this.aA()
$.az.b4$.push(this)
this.kv()},
m(){$.az.ie(this)
this.a6()},
nf(d){if(d===C.es)this.kv()},
kv(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cI2(),$async$kv)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cf5(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kv,w)},
QW(){var x=0,w=A.n(y.H),v=this,u
var $async$QW=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ai(u).au("/cobrar",null,y.X),$async$QW)
case 2:if(v.c!=null)v.kv()
return A.l(null,w)}})
return A.m($async$QW,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDp(),k=y.p,j=A.a([new B.P_("Scannear",C.vJ,!0,new B.cf6(),n),new B.P_("Cobrar",C.vD,!1,o.gaUe(),n)],k),i=A.a([D.cnO,C.R,new B.UG(290,!1,l,n),C.bs,D.cmy,C.au],k),h=m==null
if(h&&!o.e)i.push(D.bZ4)
else if(h)i.push(new B.ahi(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bLK)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.K)(x),++u){t=x[u].a
s=t[1]
r=A.a([],v)
q=t[2]
if(q!=null)r.push(q)
q=t[3]
if(q!=null)r.push(q===1?"1 pessoa":A.q(q)+" pessoas")
r=C.e.a2(r," \xb7 ")
q=t[3]
if(q!=null){t=t[0]
q=A.q(q)
q=t>0?""+t+" de "+q+" chegaram":"0 de "+q
p=q
q=t
t=p}else{t=t[0]
q=t===1?"1 chegou":""+t+" chegaram"
p=q
q=t
t=p}C.e.n(h,A.a([D.qn,new B.aj_(s,r,t,q>0,n,n)],k))}h.push(D.qn)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aj_("Cobrado hoje",k,n,!1,F.cHp(m.b),n))
h.push(D.qn)
C.e.n(i,h)}return new B.adk(l,j,i,n)}}
B.adk.prototype={
u(d){var x=null,w=C.De.B(0,new A.a0(0,A.aw(d,C.b4,y.w).w.r.b,0,0)),v=A.a([new A.d1(C.bg,x,x,A.pW(C.lO,new B.bUV(d),"Voltar"),x),C.R,D.cdn,C.aC,A.e0(C.bf,this.d,C.r,C.bl,8,8),C.aC],y.p)
C.e.n(v,this.e)
return A.cP(x,C.bz,A.bC(!0,A.yc(A.d0(v,x,w,x,x,!1,C.a2,!1),x,this.c),x,C.a_,!1),!0,x)}}
B.P_.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.A,t=v?$.at:C.t
return A.b8(w,!0,w,A.fo(!1,C.aE,!0,w,A.eC(!1,w,!0,A.aG(new A.Q(C.bT,A.N(A.a([A.b3(x.d,u,w,w,16),C.bn,A.h(x.c,w,w,w,w,A.aH(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.F,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.w,C.h,C.K,0,w,w),w),38,w),C.ad,!0,w,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ad,w,w,C.cC),!1,w,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a5,w)}}
B.aea.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.P,x,x,x)}}
B.abY.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aO,x,x,x)}}
B.ahi.prototype={
u(d){var x=null
return new A.Q(C.qt,A.A(A.a([D.cci,A.cv(C.tt,x,x,this.c,x,x)],y.p),C.w,C.h,C.l,0,C.u),x)}}
B.aj_.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.ae,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.P,u,u,u))
t=A.a([A.a4(A.A(s,C.H,C.h,C.l,0,C.u),1),C.ah],t)
s=v.e
if(s!=null){r=v.f
x=r?C.d1:C.f7
w=A.W(999)
t.push(A.B(u,A.h(s,u,u,u,u,A.aH(u,u,r?C.dc:C.d0,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.M(x,u,u,w,u,u,C.y),u,u,u,C.dz,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.ae,u,u,u))
return new A.Q(C.cn,A.N(t,C.w,C.h,C.l,0,u,u),u)}}
B.aiF.prototype={
u(d){var x=null,w=this.d,v=w?C.d1:C.f7,u=A.W(999)
return A.B(x,A.h(this.c,x,x,x,x,A.aH(x,x,w?C.dc:C.d0,x,x,x,x,x,x,x,x,12,x,x,C.F,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.M(v,x,x,u,x,x,C.y),x,x,x,C.dz,x,x,x)}}
B.aGf.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.ez[A.hi(l)-1]+", "+A.aI(l)+" "+C.bO[A.ax(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.q(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a2(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga5(k)
k=m.y
if(k!=null)s=new A.a3("Entrou \xe0s "+B.db_(k),!0)
else if(t!=null){k=new A.a3("Chegou \xe0s "+B.db_(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bTe
else if(x)k=D.bSj
else k=m.f?D.bRM:D.bST
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.ae,n,n,n)],k)
if(u.length!==0)x.push(new A.Q(K.Nu,A.h(u,n,n,n,n,C.P,n,n,n),n))
return new A.Q(C.cn,A.N(A.a([A.a4(A.A(x,C.H,C.h,C.l,0,C.u),1),C.ah,new B.aiF(o,q,n)],k),C.H,C.h,C.l,0,n,n),n)}}
B.abn.prototype={
P(){return new B.abo(new A.ad(Date.now(),0,!1),C.nt)}}
B.abo.prototype={
ag(){var x=this
x.aA()
$.az.b4$.push(x)
x.kv()
x.as=A.u5(C.fS,new B.bGL(x))},
m(){var x,w=this
$.az.ie(w)
x=w.Q
if(x!=null)x.aL(0)
x=w.as
if(x!=null)x.aL(0)
w.a6()},
nf(d){var x
if(d===C.es)this.kv()
else if(d===C.mP){x=this.Q
if(x!=null)x.aL(0)}},
kv(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kv=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aL(0)
x=3
return A.d(A.aUW(),$async$kv)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bGJ(u,t))
s=t==null?null:t.b
if(s==null)s=C.nv
u.Q=A.dg(s,u.gDp())
case 1:return A.l(v,w)}})
return A.m($async$kv,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().H($.ba(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.C(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.C(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cS(new A.ad(Date.now(),0,!1)).a
v=x<0?0:C.k.eH(C.j.aT(x,1000)/1000)
u=C.k.af(C.j.aT(x,1000)/C.j.aT(o.z.a,1000),0,1)
x=A.W(16)
t=A.bz(C.fp,0.5)
s=A.W(16)
r=A.bz(C.fp,0.5)
k=!k
if(k)q=A.cVu(C.t,A.kC("/q/"+l.a),C.H8,C.H9,C.a_,"C\xf3digo QR da conta",186)
else q=o.x?D.bYD:A.bO(A.A(A.a([C.aEk,C.aF,D.cdt,A.cv(C.tt,n,n,o.gDp(),n,n)],y.p),C.w,C.h,C.K,0,C.u),n,n)
p=y.p
s=A.a([A.B(n,A.aG(q,186,186),C.r,n,n,new A.M(C.t,n,r,s,n,n,C.y),n,n,n,C.cz,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ac,A.B(C.bg,A.arc(C.L,A.B(n,n,C.r,n,n,new A.M(C.up,n,n,A.W(2),n,n,C.y),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.M(C.fp,n,n,k,n,n,C.y),n,4,n,n,n,n,214),C.aF,A.b8(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.P,n,n,n),!1,n,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a5,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.N(A.a([new A.cy(k,32,r,!1,!0,n),C.ah,new A.de(1,C.bc,A.A(A.a([A.h(w,n,n,n,n,C.ae,n,n,n),D.c9p],p),C.H,C.h,C.l,0,C.u),n)],p),C.w,C.bW,C.l,0,n,n))
return A.B(n,A.A(s,C.w,C.h,C.l,0,C.u),C.r,n,n,new A.M(C.t,n,t,x,n,n,C.y),n,n,n,C.cz,n,n,n)}}
B.aSG.prototype={}
B.aT1.prototype={}
B.aT6.prototype={}
B.UG.prototype={
P(){return new B.agr(B.drA(D.ara,D.bsH),null,null)}}
B.agr.prototype={
gKH(){var x,w=this,v=w.e
if(v===$){x=A.cD(null,E.Nd,null,1,null,w)
w.e!==$&&A.aX()
w.e=x
v=x}return v},
ag(){this.aA()
$.az.b4$.push(this)},
bK(){var x,w,v=this
v.d6()
x=v.c
x.toString
if(A.aw(x,null,y.w).w.ax)v.gKH().d5(0)
else{x=v.gKH()
w=x.r
if(!(w!=null&&w.a!=null))x.acS(0,!0)}},
nf(d){if(this.f)return
if(d===C.es)this.d.kh(0)
else if(d===C.mP)this.d.d5(0)},
m(){var x=this
$.az.ie(x)
x.gKH().m()
x.d.m()
x.aPO()},
E_(d){return this.b9F(d)},
b9F(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$E_=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dJF(t)
if(p==null){s=u.c.O(y.q).f
s.azW()
s.a3(D.bZZ)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d5(0),$async$E_)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ai(r).au(m,null,y.X),$async$E_)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.kh(0),$async$E_)
case 5:case 1:return A.l(v,w)}})
return A.m($async$E_,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fZ(A.W(16),A.aG(new A.bG(C.aB,w,C.en,C.z,A.a([C.qb,new B.a4I(t,x.gb9E(),new B.cpA(),w),A.bO(A.aG(new A.bG(C.aB,w,C.aH,C.z,A.a([D.bQu,A.f8(x.gKH(),new B.cpB(x,u),w)],s),w),u,u),w,w),A.cc(16,A.bO(A.B(w,D.cd8,C.r,w,w,new A.M(C.t,w,w,A.W(999),w,w,C.y),w,w,w,C.dz,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.ba)],s)
if(x.a.d)s.push(new A.lk(t,new B.cpC(x),w,w,y.n))
return A.A(s,C.G,C.h,C.l,0,C.u)}}
B.X4.prototype={
u(d){return D.apU}}
B.aEA.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aB(),m=A.bb()
m.r=C.t.gv(0)
m.b=C.bP
m.c=4
m.d=C.h9
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cB(n,C.aQ,o,o,A.a([],v))
u.aB(new A.eZ(2,44))
u.aB(new A.cR(2,16))
u.Av(D.bK4,D.yw)
u.aB(new A.cR(44,2))
d.dR(u,m)
u=new A.cB(n,C.aQ,o,o,A.a([],v))
t=x-44
u.aB(new A.eZ(t,2))
s=x-16
u.aB(new A.cR(s,2))
r=x-2
u.Av(new A.L(r,16),D.yw)
u.aB(new A.cR(r,44))
d.dR(u,m)
u=new A.cB(n,C.aQ,o,o,A.a([],v))
q=w-44
u.aB(new A.eZ(r,q))
p=w-16
u.aB(new A.cR(r,p))
r=w-2
u.Av(new A.L(s,r),D.yw)
u.aB(new A.cR(t,r))
d.dR(u,m)
v=new A.cB(n,C.aQ,o,o,A.a([],v))
v.aB(new A.eZ(44,r))
v.aB(new A.cR(16,r))
v.Av(new A.L(2,p),D.yw)
v.aB(new A.cR(2,q))
d.dR(v,m)},
dO(d){return!1}}
B.aTa.prototype={}
B.akl.prototype={
m(){var x=this,w=x.bH$
if(w!=null)w.a_(0,x.ghr())
x.bH$=null
x.a6()},
bU(){this.cA()
this.d2()
this.hs()}}
B.apF.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4I.prototype={
P(){return new B.aJf()}}
B.aJf.prototype={
b8B(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lk(x,new B.c8K(this),null,null,y.n)},
Y5(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$Y5=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.h7(t,A.u(t).i("h7<1>")).Yj(s.d,!1,B.dJi())
x=2
return A.d(u.kh(0),$async$Y5)
case 2:return A.l(null,w)}})
return A.m($async$Y5,w)},
N_(){var x=0,w=A.n(y.H),v=this,u
var $async$N_=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aL(0)
x=2
return A.d(y.x.b(u)?u:A.ei(u,y.H),$async$N_)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.d5(0),$async$N_)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$N_,w)},
ag(){var x,w=this
w.aA()
x=w.a.c
w.d!==$&&A.bt()
w.d=x
w.Y5()},
m(){this.a6()
this.N_()},
nf(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.y1}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.kh(0)
break
case 2:w.d5(0)
break}}}
B.aT_.prototype={}
B.a4L.prototype={
biV(){var x=this
x.CW=$.HT().gavY().Yj(new B.bhL(x),!1,new B.bhM(x))
x.cx=$.HT().gaDr().lq(new B.bhN(x))
x.cy=$.HT().gaEv().lq(new B.bhO(x))},
b8T(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aL(0)
w=x.cx
if(w!=null)w.aL(0)
w=x.cy
if(w!=null)w.aL(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.brL(!1,w.r===C.je?C.je:C.abO))
return!0},
kh(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$kh=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xJ(C.y0,A.xI(null,null,C.y0.geT(0))))
if(s.a.e){x=1
break}r=C.Bz
q=new B.bzW(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.biV()
x=7
return A.d($.HT().lD(0,q),$async$kh)
case 7:p=f
if(!s.db)s.sv(0,s.a.bs3(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.ty){o=m
if(!s.db)s.sv(0,s.a.bs5(C.Bz,o,!0,!1,C.aS,C.je,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$kh,w)},
d5(d){var x=0,w=A.n(y.H),v=this
var $async$d5=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b8T()?2:3
break
case 2:x=4
return A.d($.HT().d5(0),$async$d5)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d5,w)},
tZ(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tZ=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.aj(A.xJ(C.a1U,A.xI(null,null,C.a1U.geT(0))))
if(u.db)A.aj(A.xJ(C.y0,A.xI(null,null,C.y0.geT(0))))
if(!t.e){x=1
break}if(t.r===C.je){x=1
break}x=3
return A.d($.HT().tZ(),$async$tZ)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tZ,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.fW()
x=3
return A.d($.HT().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xK.prototype={
Mt(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xK(w,v,f,u,t,s,r,k==null?x.w:k)},
brL(d,e){var x=null
return this.Mt(x,x,x,x,d,x,e,x)},
bs3(d,e,f,g,h,i){return this.Mt(d,e,null,f,g,h,i,null)},
bs5(d,e,f,g,h,i,j){return this.Mt(null,d,e,f,g,h,i,j)},
bru(d){var x=null
return this.Mt(x,x,x,x,x,x,x,d)},
brp(d){var x=null
return this.Mt(x,x,x,x,x,x,d,x)}}
B.ayc.prototype={
u(d){var x=null,w=A.a([D.bLr],y.p)
w.push(A.h(C.jZ.geT(0),x,x,x,x,C.aaq,x,x,x))
return A.kI(A.bO(A.A(w,C.w,C.h,C.K,0,C.u),x,x),C.ao,!0)}}
B.bzW.prototype={
a_7(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ak<1,v>")
x=A.U(new A.ak(x,new B.bzX(),w),w.i("aZ.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:x})","F<~>(my)","X4(O,ty,e?)","cj(O,xK,e?)","e(O,xK,e?)","~(J,bX)"])
B.cJ7.prototype={
$1(d){return new H.Fv(I.yr,d,this.a)},
$S:1370}
B.cJ4.prototype={
$1(d){return this.a.$0()},
$S:148}
B.cJ5.prototype={
$1(d){return this.a.$0()},
$S:148}
B.cJ6.prototype={
$1(d){return this.a.$0()},
$S:148}
B.b4I.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:115}
B.c9f.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aL(0)
x.w=A.dg(C.fT,new B.c9e(x))},
$S:0}
B.c9e.prototype={
$0(){return this.a.Dq(!0)},
$S:0}
B.c99.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.c9c.prototype={
$0(){var x=this.a
return x.p(new B.c9b(x))},
$S:0}
B.c9b.prototype={
$0(){return this.a.d=!1},
$S:0}
B.c9d.prototype={
$0(){var x=this.a
return x.p(new B.c9a(x))},
$S:0}
B.c9a.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cf5.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cf6.prototype={
$0(){},
$S:0}
B.bUV.prototype={
$0(){return A.am(this.a,!1).iz()},
$S:0}
B.bGL.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bGK())},
$S:67}
B.bGK.prototype={
$0(){},
$S:0}
B.bGJ.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ad(w,0,!1).e5(v)
u.z=v>3e7?x:C.nt}},
$S:0}
B.cpA.prototype={
$3(d,e,f){return D.cm6},
$S:z+3}
B.cpB.prototype={
$2(d,e){var x=null,w=this.a.gKH().x
w===$&&A.b()
return A.cc(x,A.B(x,x,C.r,C.up,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:219}
B.cpC.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.je)return C.at
x=t===C.abP
t=x?C.d1:C.f7
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.Q(C.Ns,A.b8(u,!0,u,A.eC(!1,u,!0,A.B(u,A.N(A.a([D.aAb,A.B(u,A.h(v,u,u,u,u,A.aH(u,u,x?C.dc:C.d0,u,u,u,u,u,u,u,u,12,u,u,C.F,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.M(t,u,u,w,u,u,C.y),u,u,u,C.dz,u,u,u)],y.p),C.w,C.h,C.l,0,u,u),C.r,u,G.iy,D.agF,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,u,this.a.d.gbDt(),u,u,u,u,u,u,u),!1,u,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a5,u),u)},
$S:z+4}
B.c8K.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.apV}x=e.c
if(x!=null){w=new B.ayc(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.ko(new B.c8J(this.a,e))},
$S:z+5}
B.c8J.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b8B(u,e)
v.a.toString
x=u.f
v=A.ag(1/0,e.a,e.b)
u=A.ag(1/0,e.c,e.d)
w=A.wY(A.vV(A.DS(C.L,A.aG($.HT().aw2(),x.b,x.a),C.r,C.bR),new A.ac(v,u)),C.z,null)
return w},
$S:121}
B.bhL.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.B(0,d)},
$S:1371}
B.bhM.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xg(d)},
$S:72}
B.bhN.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.brp(d))},
$S:1372}
B.bhO.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bru(d))},
$S:119}
B.bzX.prototype={
$1(d){return d.c},
$S:1373};(function aliases(){var x=B.akl.prototype
x.aPO=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.af1.prototype,"gDp",0,0,null,["$1$announce","$0"],["Dq","kv"],1,0,0)
var t
w(t=B.afC.prototype,"gDp","kv",0)
w(t,"gaUe","QW",0)
w(B.abo.prototype,"gDp","kv",0)
v(B.agr.prototype,"gb9E","E_",2)
u(B,"dJi","drD",6)
w(t=B.a4L.prototype,"gbDt","tZ",0)
w(t,"geI","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.J,[B.avn,B.TL,B.xK,B.bzW])
v(A.bx,[B.cJ7,B.cJ4,B.cJ5,B.cJ6,B.b4I,B.bGL,B.cpA,B.cpC,B.c8K,B.bhL,B.bhM,B.bhN,B.bhO,B.bzX])
u(B.Jf,A.eq)
v(A.G,[B.af0,B.afB,B.UG,B.a4I])
v(A.Z,[B.aT1,B.aT6,B.aTa,B.aT_])
u(B.af1,B.aT1)
v(A.bQ,[B.c9f,B.c9e,B.c99,B.c9c,B.c9b,B.c9d,B.c9a,B.cf5,B.cf6,B.bUV,B.bGK,B.bGJ])
u(B.afC,B.aT6)
v(A.H,[B.adk,B.P_,B.aea,B.abY,B.ahi,B.aj_,B.aiF,B.aGf,B.X4,B.ayc])
u(B.abn,A.dC)
u(B.aSG,A.dy)
u(B.abo,B.aSG)
u(B.akl,B.aTa)
u(B.agr,B.akl)
v(A.cO,[B.cpB,B.c8J])
u(B.aEA,A.qw)
u(B.apF,A.f7)
u(B.aJf,B.aT_)
u(B.a4L,A.d3)
x(B.aSG,A.ep)
x(B.aT1,A.ep)
x(B.aT6,A.ep)
x(B.aTa,A.ep)
w(B.akl,A.iw)
x(B.aT_,A.ep)})()
A.bn(b.typeUniverse,JSON.parse('{"af0":{"G":[],"e":[],"f":[]},"afB":{"G":[],"e":[],"f":[]},"abn":{"G":[],"e":[],"f":[]},"Jf":{"G":[],"e":[],"f":[]},"af1":{"Z":["af0"],"ep":[]},"afC":{"Z":["afB"],"ep":[]},"adk":{"H":[],"e":[],"f":[]},"P_":{"H":[],"e":[],"f":[]},"aea":{"H":[],"e":[],"f":[]},"abY":{"H":[],"e":[],"f":[]},"ahi":{"H":[],"e":[],"f":[]},"aj_":{"H":[],"e":[],"f":[]},"aiF":{"H":[],"e":[],"f":[]},"aGf":{"H":[],"e":[],"f":[]},"abo":{"Z":["abn"],"ep":[]},"UG":{"G":[],"e":[],"f":[]},"X4":{"H":[],"e":[],"f":[]},"agr":{"Z":["UG"],"ep":[]},"aEA":{"aS":[]},"a4I":{"G":[],"e":[],"f":[]},"aJf":{"Z":["a4I"],"ep":[]},"a4L":{"d3":["xK"],"aS":[]},"ayc":{"H":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cE"),x:x("F<~>"),k:x("r<kH>"),G:x("r<TL>"),v:x("r<fI>"),S:x("r<+at,partner(ad,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("df"),Y:x("TL"),N:x("c"),n:x("lk<xK>"),J:x("ll<my>"),q:x("dm"),z:x("@"),r:x("t<TL>?"),g:x("t<@>?"),X:x("J?"),t:x("avn?"),E:x("rv?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afV=new A.dS(C.u0,C.ab,C.u0,C.ab)
D.agF=new A.M(null,null,D.afV,null,null,null,C.y)
D.cqy=new B.aiF("S\xf3 funciona na tua conta",!0,null)
D.ak3=new A.fw(C.L,null,null,D.cqy,null)
D.c5L=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cid=new A.C("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c5L,C.a6,null,null,null,null,null,null,null)
D.bMj=new A.Q(C.fs,D.cid,null)
D.akb=new A.fw(C.L,null,null,D.bMj,null)
D.apU=new A.pe(C.d0,!0,D.akb,null)
D.apV=new A.pe(C.ao,!0,null,null)
D.ara=new B.apF(0,0,"noDuplicates")
D.arb=new B.apF(1,1,"normal")
D.qn=new A.jV(0.5,0.5,null,null,C.fp,null)
D.ccU=new A.C("Lanterna",null,C.ch,null,null,null,null,null,null,null,null)
D.aAb=new A.bP(1,C.aw,D.ccU,null)
D.cnN=new B.aea("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bR5=new B.UG(420,!0,null,null)
D.bfR=x([D.cnN,C.R,D.bR5],y.p)
D.bsH=x([C.tX],y.k)
D.cre=x([],y.k)
D.bAx=x([],y.G)
D.bK4=new A.L(16,2)
D.aCU=new A.aV(57911,"MaterialIcons",null,!1)
D.aDr=new A.b7(D.aCU,null,C.t,null,null,null)
D.bLr=new A.Q(C.Np,D.aDr,null)
D.ca7=new A.C("Sem marca\xe7\xf5es para hoje.",null,C.ch,null,null,null,null,null,null,null,null)
D.bLK=new A.Q(C.fU,D.ca7,null)
D.ci5=new A.C("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.ch,null,null,null,null,null,null,null,null)
D.bLZ=new A.Q(C.qt,D.ci5,null)
D.cmL=new B.aEA(null)
D.aqM=new A.uQ(D.cmL,null,C.aS,null,null)
D.bQu=new A.f_(0,0,0,0,null,null,D.aqM,null)
D.yw=new A.b5(14,14)
D.bRM=new A.a3("Bilhete",!1)
D.bSj=new A.a3("Organizas",!1)
D.bST=new A.a3("Por entrar",!1)
D.bTe=new A.a3("Sem bilhete pago",!1)
D.bYD=new A.ix(186,186,8,C.dJ,0,null)
D.bZ4=new A.oM(2,C.a_,null)
D.c9D=new A.C("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.bZZ=new A.bF(D.c9D,null,null,null,null,null,null,null,null,null,null,null,null,C.V,!1,null,null,null,C.z,null)
D.c9p=new A.C("Um QR para todos os eventos",null,C.P,null,null,null,null,null,null,null,null)
D.cci=new A.C("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.ch,C.a6,null,null,null,null,null,null,null)
D.cd8=new A.C("\xc0 procura de um QR\u2026",null,C.hV,null,null,null,null,null,null,null,null)
D.cdn=new A.C("Entrada",null,C.hl,null,null,null,null,null,null,null,null)
D.cdt=new A.C("Sem liga\xe7\xe3o",null,C.P,null,null,null,null,null,null,null,null)
D.cm_=new B.abn(null)
D.cm6=new B.X4(null)
D.cmx=new B.abY("D\xc1 ENTRADA EM",null)
D.cmy=new B.abY("HOJE",null)
D.cnO=new B.aea("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.coQ=new B.af0(null)
D.cp5=new B.afB(null)})()};
(a=>{a["Z4I69j/gKJdaciB2+kHKT17GyjU="]=a.current})($__dart_deferred_initializers__);