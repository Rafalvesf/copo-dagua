((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dKV(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).h2(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMt(w,x)},
cIW(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cIW=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jG("partner_today",y.z),$async$cIW)
case 7:s=e
p=y.f
if(!p.b(s)){v=null
x=1
break}r=A.a([],y.I)
o=y.g.a(J.i(s,"bookings"))
o=J.ap(o==null?C.al:o)
while(o.t()){q=o.gE(o)
if(p.b(q)){n=J.i(q,"event")
n=A.q(n==null?"Evento":n)
m=A.C(J.i(q,"booking_number"))
l=A.aG(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aG(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.bt(r,new A.aMU([k,n,m,l]))}}p=A.aG(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aG(J.i(s,"charged_count"))
o=o==null?null:C.k.F(o)
if(o==null)o=0
v=new B.avk(r,p,o)
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
return A.m($async$cIW,w)},
avk:function avk(d,e,f){this.a=d
this.b=e
this.c=f},
dsY(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
g=A.q(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d5(A.q(x==null?"":x))
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
p=A.d5(A.q(p==null?"":p))
p=p==null?k:p.dP()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ap(j==null?C.al:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.d5(A.q(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.q(l==null?"Parceiro":l)
o.push(new A.aMf(A.db(A.q(m.h(n,"at"))).dP(),l))}}return new B.TO(h,g,x,w,v,u,r,s,q,p,o)},
cIU(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cIU=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.Q().b
p===$&&A.b()
x=7
return A.d(p.jG("my_entries",y.z),$async$cIU)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ap(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.bt(r,B.dsY(q))}v=r
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
return A.m($async$cIU,w)},
dKd(d){var x,w,v="public",u=$.Q().b
u===$&&A.b()
x=u.gby().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cK0(w)
u=u.ch
u===$&&A.b()
return u.Me(0,"entries-"+w,C.yt).O8(new B.cJY(d),C.GP,x.$1("user_id"),v,"event_checkins").O8(new B.cJZ(d),C.GP,x.$1("user_id"),v,"booking_arrivals").O8(new B.cK_(d),C.GQ,x.$1("buyer_id"),v,"event_tickets").Q1(0)},
TO:function TO(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cK0:function cK0(d){this.a=d},
cJY:function cJY(d){this.a=d},
cJZ:function cJZ(d){this.a=d},
cK_:function cK_(d){this.a=d},
dpu(){return new B.Jg(null)},
dc8(d){return C.f.aW(C.j.k(A.ib(d)),2,"0")+":"+C.f.aW(C.j.k(A.hX(d)),2,"0")},
Jg:function Jg(d){this.a=d},
b4K:function b4K(){},
af5:function af5(d){this.a=d},
af6:function af6(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
c9Z:function c9Z(d){this.a=d},
c9Y:function c9Y(d){this.a=d},
c9T:function c9T(d,e){this.a=d
this.b=e},
c9W:function c9W(d){this.a=d},
c9V:function c9V(d){this.a=d},
c9X:function c9X(d){this.a=d},
c9U:function c9U(d){this.a=d},
afG:function afG(d){this.a=d},
afH:function afH(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cfQ:function cfQ(d,e){this.a=d
this.b=e},
cfR:function cfR(){},
adp:function adp(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVk:function bVk(d){this.a=d},
P3:function P3(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aeg:function aeg(d,e){this.c=d
this.a=e},
ac5:function ac5(d,e){this.c=d
this.a=e},
ahq:function ahq(d,e){this.c=d
this.a=e},
aj0:function aj0(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiM:function aiM(d,e,f){this.c=d
this.d=e
this.a=f},
aG8:function aG8(d,e){this.c=d
this.a=e},
abu:function abu(d){this.a=d},
abv:function abv(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bGU:function bGU(d){this.a=d},
bGT:function bGT(){},
bGS:function bGS(d,e){this.a=d
this.b=e},
aSA:function aSA(){},
aSW:function aSW(){},
aT0:function aT0(){},
UJ:function UJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agw:function agw(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.en$=e
_.bK$=f
_.c=_.a=null},
cqD:function cqD(){},
cqE:function cqE(d,e){this.a=d
this.b=e},
cqF:function cqF(d){this.a=d},
X6:function X6(d){this.a=d},
aEu:function aEu(d){this.a=d},
aT4:function aT4(){},
akl:function akl(){},
apA:function apA(d,e,f){this.c=d
this.a=e
this.b=f},
dsO(d,e){},
a4O:function a4O(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJ5:function aJ5(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c9t:function c9t(d){this.a=d},
c9s:function c9s(d,e){this.a=d
this.b=e},
aSU:function aSU(){},
dsL(d,e){var x=null,w=d===D.aqw?250:0
return new B.a4R(d,w,e,new A.ln(x,x,y.J),new B.xN(x,C.Bl,x,!1,!1,C.aT,C.jf,1),$.aa())},
a4R:function a4R(d,e,f,g,h,i){var _=this
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
bhI:function bhI(d){this.a=d},
bhJ:function bhJ(d){this.a=d},
bhK:function bhK(d){this.a=d},
bhL:function bhL(d){this.a=d},
xN:function xN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ay9:function ay9(d){this.a=d},
bA4:function bA4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bA5:function bA5(){}},D,F,G,H,I,K,L
J=c[1]
A=c[0]
C=c[2]
E=c[283]
B=a.updateHolder(c[13],B)
D=c[280]
F=c[88]
G=c[199]
H=c[123]
I=c[247]
K=c[282]
L=c[281]
B.avk.prototype={}
B.TO.prototype={}
B.Jg.prototype={
bc(d,e){var x=y.E
return e.G(A.cI($.b9(),new B.b4K(),y.D,x),x)===C.dR?D.cnZ:D.cnJ}}
B.af5.prototype={
R(){return new B.af6()}}
B.af6.prototype={
ac(){var x=this
x.ao()
$.aA.b2$.push(x)
x.kp()
x.r=B.dKd(new B.c9Z(x))},
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
nf(d){if(d===C.er)this.kp()},
Dj(d){return this.b7t(d)},
kp(){return this.Dj(!1)},
b7t(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Dj=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ap(o==null?D.byY:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cIU(),$async$Dj)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.c9T(u,s))
if(!d||s==null){x=1
break}for(o=J.ap(s);o.t();){t=o.gE(o)
r=p.h(0,t.a)
if(r==null)continue
if(r.y==null&&t.y!=null)q="Entrada registada em "+t.b
else{t=t.z
q=t.length>r.z.length?"Chegada registada: "+C.e.ga5(t).b:null}if(q!=null){p=u.c.O(y.q).f
o=A.h(q,null,null,null,null,null,null,null,null)
p.a2(new A.bF(o,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null))
break}}case 1:return A.l(v,w)}})
return A.m($async$Dj,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDi(),q=u.d,p=y.p
q=A.a([new B.P3("QR code",C.qA,!q,new B.c9W(u),t),new B.P3("Scannear",C.vy,q,new B.c9X(u),t)],p)
if(u.d)p=D.bf6
else{x=A.a([D.ckT,C.R,D.ajn,C.bs,D.clq,C.at],p)
w=s==null
if(w&&!u.f)x.push(L.a8E)
else if(w)x.push(new B.ahq(r,t))
else{w=J.a7(s)
if(w.gZ(s))x.push(D.bLb)
else{v=A.a([],p)
for(w=w.gX(s);w.t();)C.e.n(v,A.a([D.qa,new B.aG8(w.gE(w),t)],p))
v.push(D.qa)
C.e.n(x,v)}}p=x}return new B.adp(r,q,p,t)}}
B.afG.prototype={
R(){return new B.afH()}}
B.afH.prototype={
ac(){this.ao()
$.aA.b2$.push(this)
this.kp()},
m(){$.aA.ic(this)
this.a6()},
nf(d){if(d===C.er)this.kp()},
kp(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kp=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cIW(),$async$kp)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cfQ(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kp,w)},
QN(){var x=0,w=A.n(y.H),v=this,u
var $async$QN=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ah(u).av("/cobrar",null,y.X),$async$QN)
case 2:if(v.c!=null)v.kp()
return A.l(null,w)}})
return A.m($async$QN,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDi(),k=y.p,j=A.a([new B.P3("Scannear",C.vy,!0,new B.cfR(),n),new B.P3("Cobrar",C.nU,!1,o.gaTZ(),n)],k),i=A.a([D.cmG,C.R,new B.UJ(290,!1,l,n),C.bs,D.clr,C.at],k),h=m==null
if(h&&!o.e)i.push(D.bYc)
else if(h)i.push(new B.ahq(l,n))
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
r=C.e.a1(r," \xb7 ")
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
t=p}C.e.n(h,A.a([D.qa,new B.aj0(s,r,t,q>0,n,n)],k))}h.push(D.qa)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aj0("Cobrado hoje",k,n,!1,F.cIh(m.b),n))
h.push(D.qa)
C.e.n(i,h)}return new B.adp(l,j,i,n)}}
B.adp.prototype={
u(d){var x=null,w=C.D_.C(0,new A.a3(0,A.aO(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d3(C.bf,x,x,A.pS(C.lG,new B.bVk(d),"Voltar"),x),C.R,D.ccw,C.aB,A.e0(C.be,this.d,C.r,C.bl,8,8),C.aB],y.p)
C.e.n(v,this.e)
return A.cP(x,C.bz,A.bD(!0,A.B3(A.d_(v,x,w,x,x,!1,C.a1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.P3.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.at:C.t
return A.ba(w,!0,w,A.fE(!1,C.aG,!0,w,A.eL(!1,w,!0,A.aH(new A.S(C.bQ,A.O(A.a([A.b6(x.d,u,w,w,16),C.bk,A.h(x.c,w,w,w,w,A.aI(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.E,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.v,C.h,C.J,0,w),w),38,w),C.ac,!0,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ac,w,w,C.cR),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a4,w)}}
B.aeg.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.N,x,x,x)}}
B.ac5.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aN,x,x,x)}}
B.ahq.prototype={
u(d){var x=null
return new A.S(C.qh,A.A(A.a([D.cbr,A.cx(C.tl,x,x,this.c,x,x)],y.p),C.v,C.h,C.l),x)}}
B.aj0.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.aa,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.N,u,u,u))
t=A.a([A.a5(A.A(s,C.G,C.h,C.l),1),C.ag],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cy:C.dV
w=A.W(999)
t.push(A.x(u,A.h(s,u,u,u,u,A.aI(u,u,r?C.cX:C.cp,u,u,u,u,u,u,u,u,12,u,u,C.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.I(x,u,u,w,u,u,C.x),u,u,u,C.dn,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.aa,u,u,u))
return new A.S(C.cm,A.O(t,C.v,C.h,C.l,0,u),u)}}
B.aiM.prototype={
u(d){var x=null,w=this.d,v=w?C.cy:C.dV,u=A.W(999)
return A.x(x,A.h(this.c,x,x,x,x,A.aI(x,x,w?C.cX:C.cp,x,x,x,x,x,x,x,x,12,x,x,C.E,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.I(v,x,x,u,x,x,C.x),x,x,x,C.dn,x,x,x)}}
B.aG8.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dt[A.fI(l)-1]+", "+A.az(l)+" "+C.bm[A.ao(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.q(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a1(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga5(k)
k=m.y
if(k!=null)s=new A.a_("Entrou \xe0s "+B.dc8(k),!0)
else if(t!=null){k=new A.a_("Chegou \xe0s "+B.dc8(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSt
else if(x)k=D.bRy
else k=m.f?D.bR0:D.bS7
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.aa,n,n,n)],k)
if(u.length!==0)x.push(new A.S(K.N8,A.h(u,n,n,n,n,C.N,n,n,n),n))
return new A.S(C.cm,A.O(A.a([A.a5(A.A(x,C.G,C.h,C.l),1),C.ag,new B.aiM(o,q,n)],k),C.G,C.h,C.l,0,n),n)}}
B.abu.prototype={
R(){return new B.abv(new A.ac(Date.now(),0,!1),C.nl)}}
B.abv.prototype={
ac(){var x=this
x.ao()
$.aA.b2$.push(x)
x.kp()
x.as=A.u5(C.fR,new B.bGU(x))},
m(){var x,w=this
$.aA.ic(w)
x=w.Q
if(x!=null)x.aN(0)
x=w.as
if(x!=null)x.aN(0)
w.a6()},
nf(d){var x
if(d===C.er)this.kp()
else if(d===C.mJ){x=this.Q
if(x!=null)x.aN(0)}},
kp(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kp=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aN(0)
x=3
return A.d(A.aUS(),$async$kp)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bGS(u,t))
s=t==null?null:t.b
if(s==null)s=C.nn
u.Q=A.dk(s,u.gDi())
case 1:return A.l(v,w)}})
return A.m($async$kp,w)},
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
t=A.bA(C.fn,0.5)
s=A.W(16)
r=A.bA(C.fn,0.5)
k=!k
if(k)q=A.cWB(C.t,A.kD("/q/"+l.a),C.GS,C.GT,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXL:A.bM(A.A(A.a([C.aDA,C.aD,D.ccC,A.cx(C.tl,n,n,o.gDi(),n,n)],y.p),C.v,C.h,C.J),n,n)
p=y.p
s=A.a([A.x(n,A.aH(q,186,186),C.r,n,n,new A.I(C.t,n,r,s,n,n,C.x),n,n,n,C.cI,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ad,A.x(C.bf,A.ar8(C.K,A.x(n,n,C.r,n,n,new A.I(C.ug,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.I(C.fn,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aD,A.ba(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.N,n,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a4,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.cq(k,32,r,!1,!0,n),C.ag,new A.de(1,C.b8,A.A(A.a([A.h(w,n,n,n,n,C.aa,n,n,n),D.c8y],p),C.G,C.h,C.l),n)],p),C.v,C.bS,C.l,0,n))
return A.x(n,A.A(s,C.v,C.h,C.l),C.r,n,n,new A.I(C.t,n,t,x,n,n,C.x),n,n,n,C.cI,n,n,n)}}
B.aSA.prototype={}
B.aSW.prototype={}
B.aT0.prototype={}
B.UJ.prototype={
R(){return new B.agw(B.dsL(D.aqv,D.brW),null,null)}}
B.agw.prototype={
gKD(){var x,w=this,v=w.e
if(v===$){x=A.cH(null,E.MT,null,1,null,w)
w.e!==$&&A.aZ()
w.e=x
v=x}return v},
ac(){this.ao()
$.aA.b2$.push(this)},
bT(){var x,w,v=this
v.dz()
x=v.c
x.toString
if(A.aO(x,null,y.w).w.ax)v.gKD().d2(0)
else{x=v.gKD()
w=x.r
if(!(w!=null&&w.a!=null))x.acO(0,!0)}},
nf(d){if(this.f)return
if(d===C.er)this.d.ka(0)
else if(d===C.mJ)this.d.d2(0)},
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
break}p=B.dKV(t)
if(p==null){s=u.c.O(y.q).f
s.azP()
s.a2(D.bZ6)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d2(0),$async$DS)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ah(r).av(m,null,y.X),$async$DS)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.ka(0),$async$DS)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DS,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fT(A.W(16),A.aH(new A.bB(C.ax,w,C.e7,C.y,A.a([C.jt,new B.a4O(t,x.gb9e(),new B.cqD(),w),A.bM(A.aH(new A.bB(C.ax,w,C.aE,C.y,A.a([D.bPH,A.f6(x.gKD(),new B.cqE(x,u),w)],s),w),u,u),w,w),A.ca(16,A.bM(A.x(w,D.cch,C.r,w,w,new A.I(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dn,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.bc)],s)
if(x.a.d)s.push(new A.ll(t,new B.cqF(x),w,w,y.n))
return A.A(s,C.F,C.h,C.l)}}
B.X6.prototype={
u(d){return D.apd}}
B.aEu.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aD(),m=A.bd()
m.r=C.t.gv(0)
m.b=C.bN
m.c=4
m.d=C.hb
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cC(n,C.aQ,o,o,A.a([],v))
u.aB(new A.f_(2,44))
u.aB(new A.cR(2,16))
u.Au(D.bJi,D.yl)
u.aB(new A.cR(44,2))
d.dS(u,m)
u=new A.cC(n,C.aQ,o,o,A.a([],v))
t=x-44
u.aB(new A.f_(t,2))
s=x-16
u.aB(new A.cR(s,2))
r=x-2
u.Au(new A.M(r,16),D.yl)
u.aB(new A.cR(r,44))
d.dS(u,m)
u=new A.cC(n,C.aQ,o,o,A.a([],v))
q=w-44
u.aB(new A.f_(r,q))
p=w-16
u.aB(new A.cR(r,p))
r=w-2
u.Au(new A.M(s,r),D.yl)
u.aB(new A.cR(t,r))
d.dS(u,m)
v=new A.cC(n,C.aQ,o,o,A.a([],v))
v.aB(new A.f_(44,r))
v.aB(new A.cR(16,r))
v.Au(new A.M(2,p),D.yl)
v.aB(new A.cR(2,q))
d.dS(v,m)},
dY(d){return!1}}
B.aT4.prototype={}
B.akl.prototype={
m(){var x=this,w=x.bK$
if(w!=null)w.a_(0,x.ghG())
x.bK$=null
x.a6()},
bW(){this.cE()
this.d3()
this.hH()}}
B.apA.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4O.prototype={
R(){return new B.aJ5()}}
B.aJ5.prototype={
b8d(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.ll(x,new B.c9t(this),null,null,y.n)},
Y8(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$Y8=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.ha(t,A.u(t).i("ha<1>")).Yl(s.d,!1,B.dKx())
x=2
return A.d(u.ka(0),$async$Y8)
case 2:return A.l(null,w)}})
return A.m($async$Y8,w)},
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
return A.d(u.d2(0),$async$MU)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$MU,w)},
ac(){var x,w=this
w.ao()
x=w.a.c
w.d!==$&&A.bw()
w.d=x
w.Y8()},
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
case 2:w.d2(0)
break}}}
B.aSU.prototype={}
B.a4R.prototype={
biy(){var x=this
x.CW=$.HT().gavT().Yl(new B.bhI(x),!1,new B.bhJ(x))
x.cx=$.HT().gaDh().lm(new B.bhK(x))
x.cy=$.HT().gaEl().lm(new B.bhL(x))},
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
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xM(C.xQ,A.xL(null,null,C.xQ.geT(0))))
if(s.a.e){x=1
break}r=C.Bl
q=new B.bA4(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.biy()
x=7
return A.d($.HT().ly(0,q),$async$ka)
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
d2(d){var x=0,w=A.n(y.H),v=this
var $async$d2=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b8u()?2:3
break
case 2:x=4
return A.d($.HT().d2(0),$async$d2)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d2,w)},
tT(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tT=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.al(A.xM(C.a1u,A.xL(null,null,C.a1u.geT(0))))
if(u.db)A.al(A.xM(C.xQ,A.xL(null,null,C.xQ.geT(0))))
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
B.xN.prototype={
Ms(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xN(w,v,f,u,t,s,r,k==null?x.w:k)},
bra(d,e){var x=null
return this.Ms(x,x,x,x,d,x,e,x)},
bru(d,e,f,g,h,i){return this.Ms(d,e,null,f,g,h,i,null)},
brw(d,e,f,g,h,i,j){return this.Ms(null,d,e,f,g,h,i,j)},
bqW(d){var x=null
return this.Ms(x,x,x,x,x,x,x,d)},
bqR(d){var x=null
return this.Ms(x,x,x,x,x,x,d,x)}}
B.ay9.prototype={
u(d){var x=null,w=A.a([D.bKE],y.p)
w.push(A.h(C.jZ.geT(0),x,x,x,x,C.aa_,x,x,x))
return A.kJ(A.bM(A.A(w,C.v,C.h,C.J),x,x),C.ap,!0)}}
B.bA4.prototype={
a_9(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("aj<1,v>")
x=A.U(new A.aj(x,new B.bA5(),w),w.i("aY.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:y})","F<~>(mC)","X6(N,tu,e?)","ch(N,xN,e?)","e(N,xN,e?)","~(J,c1)"])
B.cK0.prototype={
$1(d){return new H.Ft(I.yg,d,this.a)},
$S:1361}
B.cJY.prototype={
$1(d){return this.a.$0()},
$S:135}
B.cJZ.prototype={
$1(d){return this.a.$0()},
$S:135}
B.cK_.prototype={
$1(d){return this.a.$0()},
$S:135}
B.b4K.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:107}
B.c9Z.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aN(0)
x.w=A.dk(C.fp,new B.c9Y(x))},
$S:0}
B.c9Y.prototype={
$0(){return this.a.Dj(!0)},
$S:0}
B.c9T.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.c9W.prototype={
$0(){var x=this.a
return x.p(new B.c9V(x))},
$S:0}
B.c9V.prototype={
$0(){return this.a.d=!1},
$S:0}
B.c9X.prototype={
$0(){var x=this.a
return x.p(new B.c9U(x))},
$S:0}
B.c9U.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cfQ.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cfR.prototype={
$0(){},
$S:0}
B.bVk.prototype={
$0(){return A.am(this.a,!1).iw()},
$S:0}
B.bGU.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bGT())},
$S:67}
B.bGT.prototype={
$0(){},
$S:0}
B.bGS.prototype={
$0(){var x,w,v,u=this.a
u.x=!1
x=this.b
if(x!=null){u.w=x
w=Date.now()
x=x.b
v=x.a
u.y=new A.ac(w,0,!1).ek(v)
u.z=v>3e7?x:C.nl}},
$S:0}
B.cqD.prototype={
$3(d,e,f){return D.cl_},
$S:z+3}
B.cqE.prototype={
$2(d,e){var x=null,w=this.a.gKD().x
w===$&&A.b()
return A.ca(x,A.x(x,x,C.r,C.ug,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:233}
B.cqF.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jf)return C.aq
x=t===C.abe
t=x?C.cy:C.dV
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.S(C.N6,A.ba(u,!0,u,A.eL(!1,u,!0,A.x(u,A.O(A.a([D.azt,A.x(u,A.h(v,u,u,u,u,A.aI(u,u,x?C.cX:C.cp,u,u,u,u,u,u,u,u,12,u,u,C.E,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.I(t,u,u,w,u,u,C.x),u,u,u,C.dn,u,u,u)],y.p),C.v,C.h,C.l,0,u),C.r,u,G.iz,D.afZ,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,this.a.d.gbCS(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a4,u),u)},
$S:z+4}
B.c9t.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.ape}x=e.c
if(x!=null){w=new B.ay9(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kR(new B.c9s(this.a,e))},
$S:z+5}
B.c9s.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b8d(u,e)
v.a.toString
x=u.f
v=A.ai(1/0,e.a,e.b)
u=A.ai(1/0,e.c,e.d)
w=A.wX(A.Ga(A.DR(C.K,A.aH($.HT().avY(),x.b,x.a),C.r,C.bH),new A.ae(v,u)),C.y,null)
return w},
$S:109}
B.bhI.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1362}
B.bhJ.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xi(d)},
$S:73}
B.bhK.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqR(d))},
$S:1363}
B.bhL.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqW(d))},
$S:119}
B.bA5.prototype={
$1(d){return d.c},
$S:1364};(function aliases(){var x=B.akl.prototype
x.aPD=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.af6.prototype,"gDi",0,0,null,["$1$announce","$0"],["Dj","kp"],1,0,0)
var t
w(t=B.afH.prototype,"gDi","kp",0)
w(t,"gaTZ","QN",0)
w(B.abv.prototype,"gDi","kp",0)
v(B.agw.prototype,"gb9e","DS",2)
u(B,"dKx","dsO",6)
w(t=B.a4R.prototype,"gbCS","tT",0)
w(t,"geF","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.J,[B.avk,B.TO,B.xN,B.bA4])
v(A.bu,[B.cK0,B.cJY,B.cJZ,B.cK_,B.b4K,B.bGU,B.cqD,B.cqF,B.c9t,B.bhI,B.bhJ,B.bhK,B.bhL,B.bA5])
u(B.Jg,A.et)
v(A.G,[B.af5,B.afG,B.UJ,B.a4O])
v(A.Y,[B.aSW,B.aT0,B.aT4,B.aSU])
u(B.af6,B.aSW)
v(A.bP,[B.c9Z,B.c9Y,B.c9T,B.c9W,B.c9V,B.c9X,B.c9U,B.cfQ,B.cfR,B.bVk,B.bGT,B.bGS])
u(B.afH,B.aT0)
v(A.L,[B.adp,B.P3,B.aeg,B.ac5,B.ahq,B.aj0,B.aiM,B.aG8,B.X6,B.ay9])
u(B.abu,A.dz)
u(B.aSA,A.du)
u(B.abv,B.aSA)
u(B.akl,B.aT4)
u(B.agw,B.akl)
v(A.cK,[B.cqE,B.c9s])
u(B.aEu,A.qs)
u(B.apA,A.eW)
u(B.aJ5,B.aSU)
u(B.a4R,A.cZ)
x(B.aSA,A.en)
x(B.aSW,A.en)
x(B.aT0,A.en)
x(B.aT4,A.en)
w(B.akl,A.iH)
x(B.aSU,A.en)})()
A.bn(b.typeUniverse,JSON.parse('{"af5":{"G":[],"e":[],"f":[]},"afG":{"G":[],"e":[],"f":[]},"abu":{"G":[],"e":[],"f":[]},"Jg":{"G":[],"e":[],"f":[]},"af6":{"Y":["af5"],"en":[]},"afH":{"Y":["afG"],"en":[]},"adp":{"L":[],"e":[],"f":[]},"P3":{"L":[],"e":[],"f":[]},"aeg":{"L":[],"e":[],"f":[]},"ac5":{"L":[],"e":[],"f":[]},"ahq":{"L":[],"e":[],"f":[]},"aj0":{"L":[],"e":[],"f":[]},"aiM":{"L":[],"e":[],"f":[]},"aG8":{"L":[],"e":[],"f":[]},"abv":{"Y":["abu"],"en":[]},"UJ":{"G":[],"e":[],"f":[]},"X6":{"L":[],"e":[],"f":[]},"agw":{"Y":["UJ"],"en":[]},"aEu":{"aU":[]},"a4O":{"G":[],"e":[],"f":[]},"aJ5":{"Y":["a4O"],"en":[]},"a4R":{"cZ":["xN"],"aU":[]},"ay9":{"L":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cB"),x:x("F<~>"),k:x("r<kI>"),G:x("r<TO>"),v:x("r<fG>"),S:x("r<+at,partner(ac,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a4<@,@>"),w:x("dg"),Y:x("TO"),N:x("c"),n:x("ll<xN>"),J:x("ln<mC>"),q:x("dp"),z:x("@"),r:x("t<TO>?"),g:x("t<@>?"),X:x("J?"),t:x("avk?"),E:x("rr?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.afe=new A.dN(C.tR,C.ab,C.tR,C.ab)
D.afZ=new A.I(null,null,D.afe,null,null,null,C.x)
D.cpr=new B.aiM("S\xf3 funciona na tua conta",!0,null)
D.ajn=new A.f8(C.K,null,null,D.cpr,null)
D.c4S=new A.P(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.chq=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4S,C.a5,null,null,null,null,null,null,null)
D.bLw=new A.S(C.fU,D.chq,null)
D.ajv=new A.f8(C.K,null,null,D.bLw,null)
D.apd=new A.pc(C.cp,!0,D.ajv,null)
D.ape=new A.pc(C.ap,!0,null,null)
D.aqv=new B.apA(0,0,"noDuplicates")
D.aqw=new B.apA(1,1,"normal")
D.qa=new A.jX(0.5,0.5,null,null,C.fn,null)
D.cc2=new A.D("Lanterna",null,C.cf,null,null,null,null,null,null,null,null)
D.azt=new A.bI(1,C.as,D.cc2,null)
D.cmF=new B.aeg("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bQk=new B.UJ(420,!0,null,null)
D.bf6=x([D.cmF,C.R,D.bQk],y.p)
D.brW=x([C.tO],y.k)
D.cq6=x([],y.k)
D.byY=x([],y.G)
D.bJi=new A.M(16,2)
D.aCc=new A.aW(57911,"MaterialIcons",null,!1)
D.aCI=new A.b7(D.aCc,null,C.t,null,null,null)
D.bKE=new A.S(C.N3,D.aCI,null)
D.c9g=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.cf,null,null,null,null,null,null,null,null)
D.bKX=new A.S(C.fS,D.c9g,null)
D.chi=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cf,null,null,null,null,null,null,null,null)
D.bLb=new A.S(C.qh,D.chi,null)
D.clG=new B.aEu(null)
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
D.cbr=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cf,C.a5,null,null,null,null,null,null,null)
D.cch=new A.D("\xc0 procura de um QR\u2026",null,C.hl,null,null,null,null,null,null,null,null)
D.ccw=new A.D("Entrada",null,C.hm,null,null,null,null,null,null,null,null)
D.ccC=new A.D("Sem liga\xe7\xe3o",null,C.N,null,null,null,null,null,null,null,null)
D.ckT=new B.abu(null)
D.cl_=new B.X6(null)
D.clq=new B.ac5("D\xc1 ENTRADA EM",null)
D.clr=new B.ac5("HOJE",null)
D.cmG=new B.aeg("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cnJ=new B.af5(null)
D.cnZ=new B.afG(null)})()};
(a=>{a["/tbG3u/mw7nYdBCca4Ksz+BQ93w="]=a.current})($__dart_deferred_initializers__);