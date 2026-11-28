((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dL9(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).h2(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMv(w,x)},
cJ6(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cJ6=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jG("partner_today",y.z),$async$cJ6)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.ap(o==null?C.ak:o)
while(o.t()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.q(n==null?"Evento":n)
m=A.C(J.i(q,"booking_number"))
l=A.aG(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aG(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bt(r,new A.aMW([k,n,m,l]))}}p=A.aG(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aG(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avm(r,p,o)
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
return A.m($async$cJ6,w)},
avm:function avm(d,e,f){this.a=d
this.b=e
this.c=f},
dta(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
g=A.q(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d4(A.q(x==null?"":x))
w=A.C(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.C(J.i(i,"status")):k
if(s){s=A.aG(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aG(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d4(A.q(p==null?"":p))
p=p==null?k:p.dP()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ap(j==null?C.ak:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.d4(A.q(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.q(l==null?"Parceiro":l)
o.push(new A.aMh(A.db(A.q(m.h(n,"at"))).dP(),l))}}return new B.TR(h,g,x,w,v,u,r,s,q,p,o)},
cJ4(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cJ4=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jG("my_entries",y.z),$async$cJ4)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ap(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.bt(r,B.dta(q))}v=r
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
return A.m($async$cJ4,w)},
dKs(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gbx().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cKb(w)
u=u.ch
u===$&&A.b()
return u.Me(0,"entries-"+w,C.yt).O8(new B.cK8(d),C.GP,x.$1("user_id"),v,"event_checkins").O8(new B.cK9(d),C.GP,x.$1("user_id"),v,"booking_arrivals").O8(new B.cKa(d),C.GQ,x.$1("buyer_id"),v,"event_tickets").Q2(0)},
TR:function TR(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cKb:function cKb(d){this.a=d},
cK8:function cK8(d){this.a=d},
cK9:function cK9(d){this.a=d},
cKa:function cKa(d){this.a=d},
dpH(){return new B.Jg(null)},
dck(d){return C.f.aW(C.j.k(A.ib(d)),2,"0")+":"+C.f.aW(C.j.k(A.hX(d)),2,"0")},
Jg:function Jg(d){this.a=d},
b4Q:function b4Q(){},
af6:function af6(d){this.a=d},
af7:function af7(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
ca7:function ca7(d){this.a=d},
ca6:function ca6(d){this.a=d},
ca1:function ca1(d,e){this.a=d
this.b=e},
ca4:function ca4(d){this.a=d},
ca3:function ca3(d){this.a=d},
ca5:function ca5(d){this.a=d},
ca2:function ca2(d){this.a=d},
afH:function afH(d){this.a=d},
afI:function afI(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cfZ:function cfZ(d,e){this.a=d
this.b=e},
cg_:function cg_(){},
adq:function adq(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVr:function bVr(d){this.a=d},
P4:function P4(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aeh:function aeh(d,e){this.c=d
this.a=e},
ac6:function ac6(d,e){this.c=d
this.a=e},
ahr:function ahr(d,e){this.c=d
this.a=e},
aj1:function aj1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiN:function aiN(d,e,f){this.c=d
this.d=e
this.a=f},
aGa:function aGa(d,e){this.c=d
this.a=e},
abv:function abv(d){this.a=d},
abw:function abw(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bH0:function bH0(d){this.a=d},
bH_:function bH_(){},
bGZ:function bGZ(d,e){this.a=d
this.b=e},
aSC:function aSC(){},
aSY:function aSY(){},
aT2:function aT2(){},
UM:function UM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agx:function agx(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.eo$=e
_.bK$=f
_.c=_.a=null},
cqM:function cqM(){},
cqN:function cqN(d,e){this.a=d
this.b=e},
cqO:function cqO(d){this.a=d},
X8:function X8(d){this.a=d},
aEw:function aEw(d){this.a=d},
aT6:function aT6(){},
akm:function akm(){},
apC:function apC(d,e,f){this.c=d
this.a=e
this.b=f},
dt0(d,e){},
a4P:function a4P(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJ7:function aJ7(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c9C:function c9C(d){this.a=d},
c9B:function c9B(d,e){this.a=d
this.b=e},
aSW:function aSW(){},
dsY(d,e){var x=null,w=d===D.aqw?250:0
return new B.a4S(d,w,e,new A.lo(x,x,y.J),new B.xP(x,C.Bl,x,!1,!1,C.aT,C.jf,1),$.aa())},
a4S:function a4S(d,e,f,g,h,i){var _=this
_.y=d
_.z=e
_.as=f
_.ch=g
_.cy=_.cx=_.CW=null
_.db=!1
_.a=h
_.W$=0
_.Y$=i
_.aI$=_.bu$=0},
bhO:function bhO(d){this.a=d},
bhP:function bhP(d){this.a=d},
bhQ:function bhQ(d){this.a=d},
bhR:function bhR(d){this.a=d},
xP:function xP(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayb:function ayb(d){this.a=d},
bAa:function bAa(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAb:function bAb(){}},D,F,G,H,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[282]
B=a.updateHolder(c[13],B)
D=c[279]
F=c[88]
G=c[198]
H=c[123]
I=c[246]
K=c[281]
L=c[280]
B.avm.prototype={}
B.TR.prototype={}
B.Jg.prototype={
bc(d,e){var x=y.E
return e.G(A.cI($.b9(),new B.b4Q(),y.D,x),x)===C.dR?D.cnZ:D.cnJ}}
B.af6.prototype={
R(){return new B.af7()}}
B.af7.prototype={
ac(){var x=this
x.ao()
$.aA.b3$.push(x)
x.kq()
x.r=B.dKs(new B.ca7(x))},
m(){var x,w,v=this
$.aA.ic(v)
x=v.w
if(x!=null)x.aN(0)
x=v.r
if(x!=null){w=$.Q().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yg(x)}v.a6()},
nf(d){if(d===C.er)this.kq()},
Dj(d){return this.b7t(d)},
kq(){return this.Dj(!1)},
b7t(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Dj=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ap(o==null?D.byY:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cJ4(),$async$Dj)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.ca1(u,s))
if(!d||s==null){x=1
break}for(o=J.ap(s);o.t();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null,null)
p.a1(new A.bF(o,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$Dj,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDi(),q=u.d,p=y.p
q=A.a([new B.P4("QR code",C.qA,!q,new B.ca4(u),t),new B.P4("Scannear",C.vy,q,new B.ca5(u),t)],p)
if(u.d)p=D.bf6
else{x=A.a([D.ckT,C.R,D.ajn,C.bs,D.clq,C.as],p)
w=s==null
if(w&&!u.f)x.push(L.a8F)
else if(w)x.push(new B.ahr(r,t))
else{w=J.a7(s)
if(w.gZ(s))x.push(D.bLb)
else{v=A.a([],p)
for(w=w.gX(s);w.t();)C.e.n(v,A.a([D.qa,new B.aGa(w.gE(w),t)],p))
v.push(D.qa)
C.e.n(x,v)}}p=x}return new B.adq(r,q,p,t)}}
B.afH.prototype={
R(){return new B.afI()}}
B.afI.prototype={
ac(){this.ao()
$.aA.b3$.push(this)
this.kq()},
m(){$.aA.ic(this)
this.a6()},
nf(d){if(d===C.er)this.kq()},
kq(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kq=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cJ6(),$async$kq)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cfZ(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kq,w)},
QO(){var x=0,w=A.n(y.H),v=this,u
var $async$QO=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ah(u).au("/cobrar",null,y.X),$async$QO)
case 2:if(v.c!=null)v.kq()
return A.l(null,w)}})
return A.m($async$QO,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDi(),k=y.p,j=A.a([new B.P4("Scannear",C.vy,!0,new B.cg_(),n),new B.P4("Cobrar",C.nU,!1,o.gaTZ(),n)],k),i=A.a([D.cmG,C.R,new B.UM(290,!1,l,n),C.bs,D.clr,C.as],k),h=m==null
if(h&&!o.e)i.push(D.bYc)
else if(h)i.push(new B.ahr(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKX)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
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
t=p}C.e.n(h,A.a([D.qa,new B.aj1(s,r,t,q>0,n,n)],k))}h.push(D.qa)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aj1("Cobrado hoje",k,n,!1,F.cIs(m.b),n))
h.push(D.qa)
C.e.n(i,h)}return new B.adq(l,j,i,n)}}
B.adq.prototype={
u(d){var x=null,w=C.D_.C(0,new A.a3(0,A.aO(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d2(C.bf,x,x,A.pS(C.lG,new B.bVr(d),"Voltar"),x),C.R,D.ccw,C.aB,A.e0(C.be,this.d,C.r,C.bl,8,8),C.aB],y.p)
C.e.n(v,this.e)
return A.cP(x,C.by,A.bD(!0,A.B5(A.d5(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.P4.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.at:C.t
return A.ba(w,!0,w,A.fE(!1,C.aG,!0,w,A.eL(!1,w,!0,A.aH(new A.S(C.bQ,A.O(A.a([A.b6(x.d,u,w,w,16),C.bk,A.h(x.c,w,w,w,w,A.aI(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.v,C.h,C.J,0,w),w),38,w),C.ab,!0,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ab,w,w,C.cR),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a3,w)}}
B.aeh.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.N,x,x,x)}}
B.ac6.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aN,x,x,x)}}
B.ahr.prototype={
u(d){var x=null
return new A.S(C.qh,A.A(A.a([D.cbr,A.cx(C.tl,x,x,this.c,x,x)],y.p),C.v,C.h,C.l),x)}}
B.aj1.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.a9,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.N,u,u,u))
t=A.a([A.a4(A.A(s,C.G,C.h,C.l),1),C.af],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cy:C.dV
w=A.W(999)
t.push(A.x(u,A.h(s,u,u,u,u,A.aI(u,u,r?C.cX:C.cp,u,u,u,u,u,u,u,u,12,u,u,C.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.I(x,u,u,w,u,u,C.x),u,u,u,C.dp,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.a9,u,u,u))
return new A.S(C.cm,A.O(t,C.v,C.h,C.l,0,u),u)}}
B.aiN.prototype={
u(d){var x=null,w=this.d,v=w?C.cy:C.dV,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?C.cX:C.cp,x,x,x,x,x,x,x,x,12,x,x,C.E,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(v,x,x,u,x,x,C.x),x,x,x,C.dp,x,x,x)}}
B.aGa.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.du[A.fI(l)-1]+", "+A.az(l)+" "+C.bm[A.ao(l)-1])
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
if(k!=null)s=new A.a_("Entrou \xe0s "+B.dck(k),!0)
else if(t!=null){k=new A.a_("Chegou \xe0s "+B.dck(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSt
else if(x)k=D.bRy
else k=m.f?D.bR0:D.bS7
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.a9,n,n,n)],k)
if(u.length!==0)x.push(new A.S(K.N9,A.h(u,n,n,n,n,C.N,n,n,n),n))
return new A.S(C.cm,A.O(A.a([A.a4(A.A(x,C.G,C.h,C.l),1),C.af,new B.aiN(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.abv.prototype={
R(){return new B.abw(new A.ac(Date.now(),0,!1),C.nl)}}
B.abw.prototype={
ac(){var x=this
x.ao()
$.aA.b3$.push(x)
x.kq()
x.as=A.u5(C.fS,new B.bH0(x))},
m(){var x,w=this
$.aA.ic(w)
x=w.Q
if(x!=null)x.aN(0)
x=w.as
if(x!=null)x.aN(0)
w.a6()},
nf(d){var x
if(d===C.er)this.kq()
else if(d===C.mJ){x=this.Q
if(x!=null)x.aN(0)}},
kq(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kq=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aN(0)
x=3
return A.d(A.aUW(),$async$kq)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bGZ(u,t))
s=t==null?null:t.b
if(s==null)s=C.nn
u.Q=A.dk(s,u.gDi())
case 1:return A.l(v,w)}})
return A.m($async$kq,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().G($.b9(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.B(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.B(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cH(new A.ac(Date.now(),0,!1)).a
v=x<0?0:C.k.eD(C.j.aP(x,1000)/1000)
u=C.k.ah(C.j.aP(x,1000)/C.j.aP(o.z.a,1000),0,1)
x=A.W(16)
t=A.bA(C.fo,0.5)
s=A.W(16)
r=A.bA(C.fo,0.5)
k=!k
if(k)q=A.cWP(C.t,A.kD("/q/"+l.a),C.GS,C.GT,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXL:A.bM(A.A(A.a([C.aDA,C.aD,D.ccC,A.cx(C.tl,n,n,o.gDi(),n,n)],y.p),C.v,C.h,C.J),n,n)
p=y.p
s=A.a([A.x(n,A.aH(q,186,186),C.r,n,n,new A.I(C.t,n,r,s,n,n,C.x),n,n,n,C.cI,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ac,A.x(C.bf,A.ara(C.K,A.x(n,n,C.r,n,n,new A.I(C.ug,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.I(C.fo,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aD,A.ba(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.N,n,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a3,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.cq(k,32,r,!1,!0,n),C.af,new A.de(1,C.b9,A.A(A.a([A.h(w,n,n,n,n,C.a9,n,n,n),D.c8y],p),C.G,C.h,C.l),n)],p),C.v,C.bS,C.l,0,n))
return A.x(n,A.A(s,C.v,C.h,C.l),C.r,n,n,new A.I(C.t,n,t,x,n,n,C.x),n,n,n,C.cI,n,n,n)}}
B.aSC.prototype={}
B.aSY.prototype={}
B.aT2.prototype={}
B.UM.prototype={
R(){return new B.agx(B.dsY(D.aqv,D.brW),null,null)}}
B.agx.prototype={
gKD(){var x,w=this,v=w.e
if(v===$){x=A.cG(null,E.MU,null,1,null,w)
w.e!==$&&A.aZ()
w.e=x
v=x}return v},
ac(){this.ao()
$.aA.b3$.push(this)},
bT(){var x,w,v=this
v.dz()
x=v.c
x.toString
if(A.aO(x,null,y.w).w.ax)v.gKD().d3(0)
else{x=v.gKD()
w=x.r
if(!(w!=null&&w.a!=null))x.acP(0,!0)}},
nf(d){if(this.f)return
if(d===C.er)this.d.ka(0)
else if(d===C.mJ)this.d.d3(0)},
m(){var x=this
$.aA.ic(x)
x.gKD().m()
x.d.m()
x.aPD()},
DS(d){return this.b9f(d)},
b9f(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DS=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dL9(t)
if(p==null){s=u.c.O(y.q).f
s.azP()
s.a1(D.bZ6)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d3(0),$async$DS)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ah(r).au(m,null,y.X),$async$DS)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.ka(0),$async$DS)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DS,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fT(A.W(16),A.aH(new A.bB(C.ax,w,C.e7,C.y,A.a([C.jt,new B.a4P(t,x.gb9e(),new B.cqM(),w),A.bM(A.aH(new A.bB(C.ax,w,C.aE,C.y,A.a([D.bPH,A.f6(x.gKD(),new B.cqN(x,u),w)],s),w),u,u),w,w),A.ca(16,A.bM(A.x(w,D.cch,C.r,w,w,new A.I(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dp,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.bc)],s)
if(x.a.d)s.push(new A.lm(t,new B.cqO(x),w,w,y.n))
return A.A(s,C.F,C.h,C.l)}}
B.X8.prototype={
u(d){return D.apd}}
B.aEw.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aD(),m=A.bd()
m.r=C.t.gv(0)
m.b=C.bN
m.c=4
m.d=C.hb
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cB(n,C.aQ,o,o,A.a([],v))
u.aB(new A.f_(2,44))
u.aB(new A.cR(2,16))
u.Au(D.bJi,D.yl)
u.aB(new A.cR(44,2))
d.dT(u,m)
u=new A.cB(n,C.aQ,o,o,A.a([],v))
t=x-44
u.aB(new A.f_(t,2))
s=x-16
u.aB(new A.cR(s,2))
r=x-2
u.Au(new A.M(r,16),D.yl)
u.aB(new A.cR(r,44))
d.dT(u,m)
u=new A.cB(n,C.aQ,o,o,A.a([],v))
q=w-44
u.aB(new A.f_(r,q))
p=w-16
u.aB(new A.cR(r,p))
r=w-2
u.Au(new A.M(s,r),D.yl)
u.aB(new A.cR(t,r))
d.dT(u,m)
v=new A.cB(n,C.aQ,o,o,A.a([],v))
v.aB(new A.f_(44,r))
v.aB(new A.cR(16,r))
v.Au(new A.M(2,p),D.yl)
v.aB(new A.cR(2,q))
d.dT(v,m)},
dZ(d){return!1}}
B.aT6.prototype={}
B.akm.prototype={
m(){var x=this,w=x.bK$
if(w!=null)w.a_(0,x.ghG())
x.bK$=null
x.a6()},
bW(){this.cE()
this.d4()
this.hH()}}
B.apC.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4P.prototype={
R(){return new B.aJ7()}}
B.aJ7.prototype={
b8d(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.lm(x,new B.c9C(this),null,null,y.n)},
Y9(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$Y9=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.ha(t,A.u(t).i("ha<1>")).Ym(s.d,!1,B.dKM())
x=2
return A.d(u.ka(0),$async$Y9)
case 2:return A.l(null,w)}})
return A.m($async$Y9,w)},
MU(){var x=0,w=A.n(y.H),v=this,u
var $async$MU=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aN(0)
x=2
return A.d(y.x.b(u)?u:A.ei(u,y.H),$async$MU)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.d3(0),$async$MU)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$MU,w)},
ac(){var x,w=this
w.ao()
x=w.a.c
w.d!==$&&A.bv()
w.d=x
w.Y9()},
m(){this.a6()
this.MU()},
nf(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xR}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.ka(0)
break
case 2:w.d3(0)
break}}}
B.aSW.prototype={}
B.a4S.prototype={
biy(){var x=this
x.CW=$.HT().gavT().Ym(new B.bhO(x),!1,new B.bhP(x))
x.cx=$.HT().gaDh().ln(new B.bhQ(x))
x.cy=$.HT().gaEl().ln(new B.bhR(x))},
b8u(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aN(0)
w=x.cx
if(w!=null)w.aN(0)
w=x.cy
if(w!=null)w.aN(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.bra(!1,w.r===C.jf?C.jf:C.abd))
return!0},
ka(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$ka=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xO(C.xQ,A.xN(null,null,C.xQ.geT(0))))
if(s.a.e){x=1
break}r=C.Bl
q=new B.bAa(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.biy()
x=7
return A.d($.HT().lz(0,q),$async$ka)
case 7:p=f
if(!s.db)s.sv(0,s.a.bru(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tu){o=m
if(!s.db)s.sv(0,s.a.brw(C.Bl,o,!0,!1,C.aT,C.jf,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ka,w)},
d3(d){var x=0,w=A.n(y.H),v=this
var $async$d3=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b8u()?2:3
break
case 2:x=4
return A.d($.HT().d3(0),$async$d3)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d3,w)},
tT(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tT=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.ak(A.xO(C.a1v,A.xN(null,null,C.a1v.geT(0))))
if(u.db)A.ak(A.xO(C.xQ,A.xN(null,null,C.xQ.geT(0))))
if(!t.e){x=1
break}if(t.r===C.jf){x=1
break}x=3
return A.d($.HT().tT(),$async$tT)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tT,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aV(0)
u.fV()
x=3
return A.d($.HT().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xP.prototype={
Ms(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xP(w,v,f,u,t,s,r,k==null?x.w:k)},
bra(d,e){var x=null
return this.Ms(x,x,x,x,d,x,e,x)},
bru(d,e,f,g,h,i){return this.Ms(d,e,null,f,g,h,i,null)},
brw(d,e,f,g,h,i,j){return this.Ms(null,d,e,f,g,h,i,j)},
bqW(d){var x=null
return this.Ms(x,x,x,x,x,x,x,d)},
bqR(d){var x=null
return this.Ms(x,x,x,x,x,x,d,x)}}
B.ayb.prototype={
u(d){var x=null,w=A.a([D.bKE],y.p)
w.push(A.h(C.jZ.geT(0),x,x,x,x,C.aa_,x,x,x))
return A.kJ(A.bM(A.A(w,C.v,C.h,C.J),x,x),C.ao,!0)}}
B.bAa.prototype={
a_9(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("aj<1,v>")
x=A.U(new A.aj(x,new B.bAb(),w),w.i("aY.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:y})","F<~>(mC)","X8(N,tu,e?)","ch(N,xP,e?)","e(N,xP,e?)","~(J,c2)"])
B.cKb.prototype={
$1(d){return new H.Fu(I.yg,d,this.a)},
$S:1364}
B.cK8.prototype={
$1(d){return this.a.$0()},
$S:126}
B.cK9.prototype={
$1(d){return this.a.$0()},
$S:126}
B.cKa.prototype={
$1(d){return this.a.$0()},
$S:126}
B.b4Q.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:114}
B.ca7.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aN(0)
x.w=A.dk(C.fq,new B.ca6(x))},
$S:0}
B.ca6.prototype={
$0(){return this.a.Dj(!0)},
$S:0}
B.ca1.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.ca4.prototype={
$0(){var x=this.a
return x.p(new B.ca3(x))},
$S:0}
B.ca3.prototype={
$0(){return this.a.d=!1},
$S:0}
B.ca5.prototype={
$0(){var x=this.a
return x.p(new B.ca2(x))},
$S:0}
B.ca2.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cfZ.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cg_.prototype={
$0(){},
$S:0}
B.bVr.prototype={
$0(){return A.am(this.a,!1).iw()},
$S:0}
B.bH0.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bH_())},
$S:65}
B.bH_.prototype={
$0(){},
$S:0}
B.bGZ.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ac(w,0,!1).el(v)
u.z=v>3e7?x:C.nl}},
$S:0}
B.cqM.prototype={
$3(d,e,f){return D.cl_},
$S:z+3}
B.cqN.prototype={
$2(d,e){var x=null,w=this.a.gKD().x
w===$&&A.b()
return A.ca(x,A.x(x,x,C.r,C.ug,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:258}
B.cqO.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jf)return C.aq
x=t===C.abe
t=x?C.cy:C.dV
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.N7,A.ba(u,!0,u,A.eL(!1,u,!0,A.x(u,A.O(A.a([D.azt,A.x(u,A.h(v,u,u,u,u,A.aI(u,u,x?C.cX:C.cp,u,u,u,u,u,u,u,u,12,u,u,C.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.I(t,u,u,w,u,u,C.x),u,u,u,C.dp,u,u,u)],y.p),C.v,C.h,C.l,0,u),C.r,u,G.iz,D.afZ,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,this.a.d.gbCS(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a3,u),u)},
$S:z+4}
B.c9C.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.ape}x=e.c
if(x!=null){w=new B.ayb(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kR(new B.c9B(this.a,e))},
$S:z+5}
B.c9B.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b8d(u,e)
v.a.toString
x=u.f
v=A.ai(1/0,e.a,e.b)
u=A.ai(1/0,e.c,e.d)
w=A.wZ(A.Gb(A.DT(C.K,A.aH($.HT().avY(),x.b,x.a),C.r,C.bH),new A.ae(v,u)),C.y,null)
return w},
$S:109}
B.bhO.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1365}
B.bhP.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xi(d)},
$S:68}
B.bhQ.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqR(d))},
$S:1366}
B.bhR.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqW(d))},
$S:116}
B.bAb.prototype={
$1(d){return d.c},
$S:1367};(function aliases(){var x=B.akm.prototype
x.aPD=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.af7.prototype,"gDi",0,0,null,["$1$announce","$0"],["Dj","kq"],1,0,0)
var t
w(t=B.afI.prototype,"gDi","kq",0)
w(t,"gaTZ","QO",0)
w(B.abw.prototype,"gDi","kq",0)
v(B.agx.prototype,"gb9e","DS",2)
u(B,"dKM","dt0",6)
w(t=B.a4S.prototype,"gbCS","tT",0)
w(t,"geF","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.J,[B.avm,B.TR,B.xP,B.bAa])
v(A.bw,[B.cKb,B.cK8,B.cK9,B.cKa,B.b4Q,B.bH0,B.cqM,B.cqO,B.c9C,B.bhO,B.bhP,B.bhQ,B.bhR,B.bAb])
u(B.Jg,A.et)
v(A.G,[B.af6,B.afH,B.UM,B.a4P])
v(A.Y,[B.aSY,B.aT2,B.aT6,B.aSW])
u(B.af7,B.aSY)
v(A.bP,[B.ca7,B.ca6,B.ca1,B.ca4,B.ca3,B.ca5,B.ca2,B.cfZ,B.cg_,B.bVr,B.bH_,B.bGZ])
u(B.afI,B.aT2)
v(A.L,[B.adq,B.P4,B.aeh,B.ac6,B.ahr,B.aj1,B.aiN,B.aGa,B.X8,B.ayb])
u(B.abv,A.dz)
u(B.aSC,A.du)
u(B.abw,B.aSC)
u(B.akm,B.aT6)
u(B.agx,B.akm)
v(A.cK,[B.cqN,B.c9B])
u(B.aEw,A.qs)
u(B.apC,A.eW)
u(B.aJ7,B.aSW)
u(B.a4S,A.cZ)
x(B.aSC,A.en)
x(B.aSY,A.en)
x(B.aT2,A.en)
x(B.aT6,A.en)
w(B.akm,A.iH)
x(B.aSW,A.en)})()
A.bn(b.typeUniverse,JSON.parse('{"af6":{"G":[],"e":[],"f":[]},"afH":{"G":[],"e":[],"f":[]},"abv":{"G":[],"e":[],"f":[]},"Jg":{"G":[],"e":[],"f":[]},"af7":{"Y":["af6"],"en":[]},"afI":{"Y":["afH"],"en":[]},"adq":{"L":[],"e":[],"f":[]},"P4":{"L":[],"e":[],"f":[]},"aeh":{"L":[],"e":[],"f":[]},"ac6":{"L":[],"e":[],"f":[]},"ahr":{"L":[],"e":[],"f":[]},"aj1":{"L":[],"e":[],"f":[]},"aiN":{"L":[],"e":[],"f":[]},"aGa":{"L":[],"e":[],"f":[]},"abw":{"Y":["abv"],"en":[]},"UM":{"G":[],"e":[],"f":[]},"X8":{"L":[],"e":[],"f":[]},"agx":{"Y":["UM"],"en":[]},"aEw":{"aU":[]},"a4P":{"G":[],"e":[],"f":[]},"aJ7":{"Y":["a4P"],"en":[]},"a4S":{"cZ":["xP"],"aU":[]},"ayb":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cH"),x:x("F<~>"),k:x("r<kI>"),G:x("r<TR>"),v:x("r<fG>"),S:x("r<+at,partner(ac,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a5<@,@>"),w:x("dg"),Y:x("TR"),N:x("c"),n:x("lm<xP>"),J:x("lo<mC>"),q:x("dp"),z:x("@"),r:x("t<TR>?"),g:x("t<@>?"),X:x("J?"),t:x("avm?"),E:x("rr?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afe=new A.dN(C.tR,C.aa,C.tR,C.aa)
D.afZ=new A.I(null,null,D.afe,null,null,null,C.x)
D.cpr=new B.aiN("S\xf3 funciona na tua conta",!0,null)
D.ajn=new A.f8(C.K,null,null,D.cpr,null)
D.c4S=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.chq=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4S,C.a4,null,null,null,null,null,null,null)
D.bLw=new A.S(C.fV,D.chq,null)
D.ajv=new A.f8(C.K,null,null,D.bLw,null)
D.apd=new A.pc(C.cp,!0,D.ajv,null)
D.ape=new A.pc(C.ao,!0,null,null)
D.aqv=new B.apC(0,0,"noDuplicates")
D.aqw=new B.apC(1,1,"normal")
D.qa=new A.jX(0.5,0.5,null,null,C.fo,null)
D.cc2=new A.D("Lanterna",null,C.cf,null,null,null,null,null,null,null,null)
D.azt=new A.bH(1,C.ap,D.cc2,null)
D.cmF=new B.aeh("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bQk=new B.UM(420,!0,null,null)
D.bf6=x([D.cmF,C.R,D.bQk],y.p)
D.brW=x([C.tO],y.k)
D.cq6=x([],y.k)
D.byY=x([],y.G)
D.bJi=new A.M(16,2)
D.aCc=new A.aW(57911,"MaterialIcons",null,!1)
D.aCI=new A.b7(D.aCc,null,C.t,null,null,null)
D.bKE=new A.S(C.N4,D.aCI,null)
D.c9g=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.cf,null,null,null,null,null,null,null,null)
D.bKX=new A.S(C.fT,D.c9g,null)
D.chi=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cf,null,null,null,null,null,null,null,null)
D.bLb=new A.S(C.qh,D.chi,null)
D.clG=new B.aEw(null)
D.aq5=new A.uS(D.clG,null,C.aT,null,null)
D.bPH=new A.eH(0,0,0,0,null,null,D.aq5,null)
D.yl=new A.b2(14,14)
D.bR0=new A.a_("Bilhete",!1)
D.bRy=new A.a_("Organizas",!1)
D.bS7=new A.a_("Por entrar",!1)
D.bSt=new A.a_("Sem bilhete pago",!1)
D.bXL=new A.iw(186,186,8,C.dO,0,null)
D.bYc=new A.oI(2,C.Z,null)
D.c8M=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.bZ6=new A.bF(D.c8M,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c8y=new A.D("Um QR para todos os eventos",null,C.N,null,null,null,null,null,null,null,null)
D.cbr=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cf,C.a4,null,null,null,null,null,null,null)
D.cch=new A.D("\xc0 procura de um QR\u2026",null,C.hl,null,null,null,null,null,null,null,null)
D.ccw=new A.D("Entrada",null,C.hm,null,null,null,null,null,null,null,null)
D.ccC=new A.D("Sem liga\xe7\xe3o",null,C.N,null,null,null,null,null,null,null,null)
D.ckT=new B.abv(null)
D.cl_=new B.X8(null)
D.clq=new B.ac6("D\xc1 ENTRADA EM",null)
D.clr=new B.ac6("HOJE",null)
D.cmG=new B.aeh("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cnJ=new B.af6(null)
D.cnZ=new B.afH(null)})()};
(a=>{a["/OxvjqntLletbBuHihgd+hozIjA="]=a.current})($__dart_deferred_initializers__);