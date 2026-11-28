((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,E,B={
dLI(d){var x,w,v=A.aS("/(q|entrada|pagar)/([A-Za-z0-9.]+)",!0,!1,!1).h2(C.f.B(d))
if(v==null)return null
x=v.b
w=x[1]==="pagar"?"pay":"person"
x=x[2]
x.toString
return new A.aMt(w,x)},
cJv(){var x=0,w=A.n(y.t),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$cJv=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.jm("partner_today",y.z),$async$cJv)
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
l=A.aF(J.i(q,"people"))
l=l==null?null:C.k.F(l)
k=A.aF(J.i(q,"arrived"))
k=k==null?null:C.k.F(k)
if(k==null)k=0
J.br(r,new A.aMU([k,n,m,l]))}}p=A.aF(J.i(s,"charged_cents"))
p=p==null?null:C.k.F(p)
if(p==null)p=0
o=A.aF(J.i(s,"charged_count"))
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
return A.m($async$cJv,w)},
avn:function avn(d,e,f){this.a=d
this.b=e
this.c=f},
dtI(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=null,j=J.a7(d),i=j.h(d,"ticket"),h=A.q(j.h(d,"event_id")),g=j.h(d,"event")
g=A.q(g==null?"Evento":g)
x=j.h(d,"date")
x=A.d4(A.q(x==null?"":x))
w=A.C(j.h(d,"location"))
v=J.o(j.h(d,"role"),"organizer")
u=J.o(j.h(d,"is_paid"),!0)
t=y.f
s=t.b(i)
r=s?A.C(J.i(i,"status")):k
if(s){s=A.aF(J.i(i,"quantity"))
s=s==null?k:C.k.F(s)
if(s==null)s=1}else s=1
q=A.aF(j.h(d,"table"))
q=q==null?k:C.k.F(q)
p=j.h(d,"checked_in_at")
p=A.d4(A.q(p==null?"":p))
p=p==null?k:p.dM()
o=A.a([],y.S)
j=y.g.a(j.h(d,"arrivals"))
j=J.ap(j==null?C.ak:j)
while(j.t()){n=j.gE(j)
if(t.b(n)&&A.d4(A.q(J.i(n,"at")))!=null){m=J.a7(n)
l=m.h(n,"partner")
l=A.q(l==null?"Parceiro":l)
o.push(new A.aMf(A.dc(A.q(m.h(n,"at"))).dM(),l))}}return new B.TN(h,g,x,w,v,u,r,s,q,p,o)},
cJt(){var x=0,w=A.n(y.r),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cJt=A.j(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=$.P().b
p===$&&A.b()
x=7
return A.d(p.jm("my_entries",y.z),$async$cJt)
case 7:s=e
if(!y.j.b(s)){v=null
x=1
break}r=A.a([],y.G)
for(p=J.ap(s),o=y.f;p.t();){q=p.gE(p)
if(o.b(q))J.br(r,B.dtI(q))}v=r
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
return A.m($async$cJt,w)},
dL0(d){var x,w,v="public",u=$.P().b
u===$&&A.b()
x=u.gbx().e.a
x=x==null?null:x.r
w=x==null?null:x.a
if(w==null)return null
x=new B.cKA(w)
u=u.ch
u===$&&A.b()
return u.Mf(0,"entries-"+w,C.yr).O9(new B.cKx(d),C.GP,x.$1("user_id"),v,"event_checkins").O9(new B.cKy(d),C.GP,x.$1("user_id"),v,"booking_arrivals").O9(new B.cKz(d),C.GQ,x.$1("buyer_id"),v,"event_tickets").Q3(0)},
TN:function TN(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cKA:function cKA(d){this.a=d},
cKx:function cKx(d){this.a=d},
cKy:function cKy(d){this.a=d},
cKz:function cKz(d){this.a=d},
dqe(){return new B.Jj(null)},
dcP(d){return C.f.aV(C.j.k(A.ic(d)),2,"0")+":"+C.f.aV(C.j.k(A.i_(d)),2,"0")},
Jj:function Jj(d){this.a=d},
b4M:function b4M(){},
af3:function af3(d){this.a=d},
af4:function af4(){var _=this
_.d=!1
_.e=null
_.f=!1
_.c=_.a=_.w=_.r=null},
cal:function cal(d){this.a=d},
cak:function cak(d){this.a=d},
caf:function caf(d,e){this.a=d
this.b=e},
cai:function cai(d){this.a=d},
cah:function cah(d){this.a=d},
caj:function caj(d){this.a=d},
cag:function cag(d){this.a=d},
afE:function afE(d){this.a=d},
afF:function afF(){var _=this
_.d=null
_.e=!1
_.c=_.a=null},
cgn:function cgn(d,e){this.a=d
this.b=e},
cgo:function cgo(){},
adn:function adn(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
bVE:function bVE(d){this.a=d},
P6:function P6(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aee:function aee(d,e){this.c=d
this.a=e},
ac3:function ac3(d,e){this.c=d
this.a=e},
aho:function aho(d,e){this.c=d
this.a=e},
aiZ:function aiZ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aiK:function aiK(d,e,f){this.c=d
this.d=e
this.a=f},
aGa:function aGa(d,e){this.c=d
this.a=e},
abs:function abs(d){this.a=d},
abt:function abt(d,e){var _=this
_.w=null
_.x=!0
_.y=d
_.z=e
_.as=_.Q=null
_.d=$
_.c=_.a=null},
bHe:function bHe(d){this.a=d},
bHd:function bHd(){},
bHc:function bHc(d,e){this.a=d
this.b=e},
aSA:function aSA(){},
aSW:function aSW(){},
aT0:function aT0(){},
UI:function UI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
agu:function agu(d,e,f){var _=this
_.d=d
_.e=$
_.f=!1
_.eo$=e
_.bK$=f
_.c=_.a=null},
cr8:function cr8(){},
cr9:function cr9(d,e){this.a=d
this.b=e},
cra:function cra(d){this.a=d},
X6:function X6(d){this.a=d},
aEw:function aEw(d){this.a=d},
aT4:function aT4(){},
akj:function akj(){},
apA:function apA(d,e,f){this.c=d
this.a=e
this.b=f},
dty(d,e){},
a4N:function a4N(d,e,f,g){var _=this
_.c=d
_.d=e
_.f=f
_.a=g},
aJ7:function aJ7(){var _=this
_.d=$
_.c=_.a=_.f=_.e=null},
c9P:function c9P(d){this.a=d},
c9O:function c9O(d,e){this.a=d
this.b=e},
aSU:function aSU(){},
dtv(d,e){var x=null,w=d===D.aqr?250:0
return new B.a4Q(d,w,e,new A.lp(x,x,y.J),new B.xN(x,C.Bi,x,!1,!1,C.aT,C.jh,1),$.aa())},
a4Q:function a4Q(d,e,f,g,h,i){var _=this
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
bhJ:function bhJ(d){this.a=d},
bhK:function bhK(d){this.a=d},
bhL:function bhL(d){this.a=d},
bhM:function bhM(d){this.a=d},
xN:function xN(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ayc:function ayc(d){this.a=d},
bAo:function bAo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
bAp:function bAp(){}},D,F,G,H,I,K,L,M
J=c[1]
A=c[0]
C=c[2]
E=c[280]
B=a.updateHolder(c[13],B)
D=c[276]
F=c[87]
G=c[194]
H=c[278]
I=c[123]
K=c[241]
L=c[279]
M=c[277]
B.avn.prototype={}
B.TN.prototype={}
B.Jj.prototype={
bb(d,e){var x=y.E
return e.G(A.cG($.b8(),new B.b4M(),y.D,x),x)===C.dQ?D.cns:D.cnc}}
B.af3.prototype={
R(){return new B.af4()}}
B.af4.prototype={
ac(){var x=this
x.ap()
$.aA.b3$.push(x)
x.kq()
x.r=B.dL0(new B.cal(x))},
m(){var x,w,v=this
$.aA.ic(v)
x=v.w
if(x!=null)x.aN(0)
x=v.r
if(x!=null){w=$.P().b
w===$&&A.b()
w=w.ch
w===$&&A.b()
w.yg(x)}v.a6()},
nf(d){if(d===C.et)this.kq()},
Dl(d){return this.b7z(d)},
kq(){return this.Dl(!1)},
b7z(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o
var $async$Dl=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:p=A.E(y.N,y.Y)
o=u.e
o=J.ap(o==null?D.byW:o)
while(o.t()){t=o.gE(o)
p.j(0,t.a,t)}x=3
return A.d(B.cJt(),$async$Dl)
case 3:s=f
if(u.c==null){x=1
break}u.p(new B.caf(u,s))
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
return A.m($async$Dl,w)},
u(d){var x,w,v,u=this,t=null,s=u.e,r=u.gDk(),q=u.d,p=y.p
q=A.a([new B.P6("QR code",C.qA,!q,new B.cai(u),t),new B.P6("Scannear",C.vx,q,new B.caj(u),t)],p)
if(u.d)p=D.bf2
else{x=A.a([D.ckm,C.R,D.ajh,C.bM,D.ckU,C.ar],p)
w=s==null
if(w&&!u.f)x.push(M.a8x)
else if(w)x.push(new B.aho(r,t))
else{w=J.a7(s)
if(w.gZ(s))x.push(D.bL8)
else{v=A.a([],p)
for(w=w.gX(s);w.t();)C.e.n(v,A.a([D.qa,new B.aGa(w.gE(w),t)],p))
v.push(D.qa)
C.e.n(x,v)}}p=x}return new B.adn(r,q,p,t)}}
B.afE.prototype={
R(){return new B.afF()}}
B.afF.prototype={
ac(){this.ap()
$.aA.b3$.push(this)
this.kq()},
m(){$.aA.ic(this)
this.a6()},
nf(d){if(d===C.et)this.kq()},
kq(){var x=0,w=A.n(y.H),v,u=this,t
var $async$kq=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:x=3
return A.d(B.cJv(),$async$kq)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.cgn(u,t))
case 1:return A.l(v,w)}})
return A.m($async$kq,w)},
QP(){var x=0,w=A.n(y.H),v=this,u
var $async$QP=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.d(A.ae(u).al("/cobrar",null,y.X),$async$QP)
case 2:if(v.c!=null)v.kq()
return A.l(null,w)}})
return A.m($async$QP,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.d,l=o.gDk(),k=y.p,j=A.a([new B.P6("Scannear",C.vx,!0,new B.cgo(),n),new B.P6("Cobrar",C.nW,!1,o.gaU3(),n)],k),i=A.a([D.cm9,C.R,new B.UI(290,!1,l,n),C.bM,D.ckV,C.ar],k),h=m==null
if(h&&!o.e)i.push(H.a8u)
else if(h)i.push(new B.aho(l,n))
else{h=A.a([],k)
x=m.a
if(x.length===0)h.push(D.bKU)
for(w=x.length,v=y.s,u=0;u<x.length;x.length===w||(0,A.H)(x),++u){t=x[u].a
s=t[1]
r=A.a([],v)
q=t[2]
if(q!=null)r.push(q)
q=t[3]
if(q!=null)r.push(q===1?"1 pessoa":A.q(q)+" pessoas")
r=C.e.a0(r," \xb7 ")
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
t=p}C.e.n(h,A.a([D.qa,new B.aiZ(s,r,t,q>0,n,n)],k))}h.push(D.qa)
k=m.c
k=k===1?"1 pagamento com QR":""+k+" pagamentos com QR"
h.push(new B.aiZ("Cobrado hoje",k,n,!1,F.cIQ(m.b),n))
h.push(D.qa)
C.e.n(i,h)}return new B.adn(l,j,i,n)}}
B.adn.prototype={
u(d){var x=null,w=C.CX.C(0,new A.a3(0,A.aO(d,C.b5,y.w).w.r.b,0,0)),v=A.a([new A.d0(C.be,x,x,A.pV(C.lE,new B.bVE(d),"Voltar"),x),C.R,D.cc5,C.aB,A.e1(C.bd,this.d,C.r,C.bj,8,8),C.aB],y.p)
C.e.n(v,this.e)
return A.cQ(x,C.bx,A.bD(!0,A.B4(A.d6(v,x,w,x,x,!1,!1),x,this.c),x,C.Z,!1),!0,x)}}
B.P6.prototype={
u(d){var x=this,w=null,v=x.e,u=v?C.t:C.z,t=v?$.au:C.t
return A.ba(w,!0,w,A.fE(!1,C.aG,!0,w,A.eR(!1,w,!0,A.aH(new A.T(C.bQ,A.O(A.a([A.b5(x.d,u,w,w,16),C.bh,A.h(x.c,w,w,w,w,A.aJ(w,w,u,w,w,w,w,w,w,w,w,14,w,w,C.G,w,w,!0,w,w,w,w,w,w,w,w),w,w,w)],y.p),C.v,C.h,C.J,0,w),w),38,w),C.ac,!0,w,w,w,w,w,w,w,w,w,x.f,w,w,w,w,w,w,w),C.r,t,0,w,w,C.ac,w,w,C.cR),!1,w,w,w,!1,w,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,C.a3,w)}}
B.aee.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.L,x,x,x)}}
B.ac3.prototype={
u(d){var x=null
return A.h(this.c,x,x,x,x,C.aJ,x,x,x)}}
B.aho.prototype={
u(d){var x=null
return new A.T(C.qh,A.A(A.a([D.cb2,A.cx(C.tl,x,x,this.c,x,x)],y.p),C.v,C.h,C.l),x)}}
B.aiZ.prototype={
u(d){var x,w,v=this,u=null,t=y.p,s=A.a([A.h(v.c,u,u,u,u,C.a9,u,u,u)],t),r=v.d
if(r.length!==0)s.push(A.h(r,u,u,u,u,C.L,u,u,u))
t=A.a([A.a6(A.A(s,C.F,C.h,C.l),1),C.ag],t)
s=v.e
if(s!=null){r=v.f
x=r?C.cy:C.dU
w=A.W(999)
t.push(A.B(u,A.h(s,u,u,u,u,A.aJ(u,u,r?C.cW:C.cp,u,u,u,u,u,u,u,u,12,u,u,C.G,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.K(x,u,u,w,u,u,C.x),u,u,u,C.dq,u,u,u))}s=v.r
if(s!=null)t.push(A.h(s,u,u,u,u,C.a9,u,u,u))
return new A.T(C.cm,A.O(t,C.v,C.h,C.l,0,u),u)}}
B.aiK.prototype={
u(d){var x=null,w=this.d,v=w?C.cy:C.dU,u=A.W(999)
return A.B(x,A.h(this.c,x,x,x,x,A.aJ(x,x,w?C.cW:C.cp,x,x,x,x,x,x,x,x,12,x,x,C.G,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.r,x,x,new A.K(v,x,x,u,x,x,C.x),x,x,x,C.dq,x,x,x)}}
B.aGa.prototype={
u(d){var x,w,v,u,t,s,r,q,p,o,n=null,m=this.c,l=m.c,k=A.a([],y.s)
if(l!=null)k.push(C.dv[A.fH(l)-1]+", "+A.ay(l)+" "+C.bg[A.an(l)-1])
x=m.d
if(x!=null)k.push(x)
x=m.x
if(x!=null)k.push("Mesa "+A.q(x))
x=m.e
w=!x
if(w&&m.f&&m.r==="paid"){v=m.w
k.push(v===1?"bilhete para 1":"bilhete para "+v)}u=C.e.a0(k," \xb7 ")
k=m.z
t=k.length===0?n:C.e.ga5(k)
k=m.y
if(k!=null)s=new A.Z("Entrou \xe0s "+B.dcP(k),!0)
else if(t!=null){k=new A.Z("Chegou \xe0s "+B.dcP(t.a),!0)
s=k}else{if(w&&m.f&&m.r!=="paid")k=D.bSq
else if(x)k=D.bRv
else k=m.f?D.bQY:D.bS4
s=k}r=s.a
q=n
p=s.b
q=p
o=r
k=y.p
x=A.a([A.h(m.b,n,n,n,n,C.a9,n,n,n)],k)
if(u.length!==0)x.push(new A.T(L.N5,A.h(u,n,n,n,n,C.L,n,n,n),n))
return new A.T(C.cm,A.O(A.a([A.a6(A.A(x,C.F,C.h,C.l),1),C.ag,new B.aiK(o,q,n)],k),C.F,C.h,C.l,0,n),n)}}
B.abs.prototype={
R(){return new B.abt(new A.ac(Date.now(),0,!1),C.nl)}}
B.abt.prototype={
ac(){var x=this
x.ap()
$.aA.b3$.push(x)
x.kq()
x.as=A.u5(C.fR,new B.bHe(x))},
m(){var x,w=this
$.aA.ic(w)
x=w.Q
if(x!=null)x.aN(0)
x=w.as
if(x!=null)x.aN(0)
w.a6()},
nf(d){var x
if(d===C.et)this.kq()
else if(d===C.mI){x=this.Q
if(x!=null)x.aN(0)}},
kq(){var x=0,w=A.n(y.H),v,u=this,t,s
var $async$kq=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=u.Q
if(s!=null)s.aN(0)
x=3
return A.d(A.aUU(),$async$kq)
case 3:t=e
if(u.c==null){x=1
break}u.p(new B.bHc(u,t))
s=t==null?null:t.b
if(s==null)s=C.nn
u.Q=A.dm(s,u.gDk())
case 1:return A.l(v,w)}})
return A.m($async$kq,w)},
u(d){var x,w,v,u,t,s,r,q,p,o=this,n=null,m=o.gS().G($.b8(),y.D).b,l=o.w,k=l==null
if(k)x=n
else{x=l.c
x=x==null?n:C.f.B(x).length!==0}if(x===!0){x=l.c
x.toString
w=C.f.B(x)}else{x=m==null?n:m.b
w=x==null?"":x}x=o.y.cA(new A.ac(Date.now(),0,!1)).a
v=x<0?0:C.k.eD(C.j.aP(x,1000)/1000)
u=C.k.ah(C.j.aP(x,1000)/C.j.aP(o.z.a,1000),0,1)
x=A.W(16)
t=A.bA(C.fa,0.5)
s=A.W(16)
r=A.bA(C.fa,0.5)
k=!k
if(k)q=A.bpy(C.t,A.kf("/q/"+l.a),C.GS,C.GT,C.Z,"C\xf3digo QR da conta",186)
else q=o.x?D.bXD:A.bL(A.A(A.a([C.aDE,C.aF,D.ccb,A.cx(C.tl,n,n,o.gDk(),n,n)],y.p),C.v,C.h,C.J),n,n)
p=y.p
s=A.a([A.B(n,A.aH(q,186,186),C.r,n,n,new A.K(C.t,n,r,s,n,n,C.x),n,n,n,C.cY,n,n,214)],p)
if(k){k=A.W(2)
C.e.n(s,A.a([C.ab,A.B(C.be,A.ar8(C.K,A.B(n,n,C.r,n,n,new A.K(C.uh,n,n,A.W(2),n,n,C.x),n,n,n,n,n,n,n),n,u),C.r,n,n,new A.K(C.fa,n,n,k,n,n,C.x),n,4,n,n,n,n,214),C.aF,A.ba(n,n,n,A.h("Novo c\xf3digo em "+v+" s",n,n,n,n,C.L,n,n,n),!1,n,n,n,!1,n,!1,n,n,n,n,n,n,n,n,n,n,!1,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,n,C.a3,n)],p))}s.push(C.R)
k=w.length===0?"?":w
r=m==null?n:m.go
s.push(A.O(A.a([new A.ci(k,32,r,!1,!0,n),C.ag,new A.df(1,C.b9,A.A(A.a([A.h(w,n,n,n,n,C.a9,n,n,n),D.c8d],p),C.F,C.h,C.l),n)],p),C.v,C.bS,C.l,0,n))
return A.B(n,A.A(s,C.v,C.h,C.l),C.r,n,n,new A.K(C.t,n,t,x,n,n,C.x),n,n,n,C.cY,n,n,n)}}
B.aSA.prototype={}
B.aSW.prototype={}
B.aT0.prototype={}
B.UI.prototype={
R(){return new B.agu(B.dtv(D.aqq,D.brS),null,null)}}
B.agu.prototype={
gKE(){var x,w=this,v=w.e
if(v===$){x=A.cI(null,E.MQ,null,1,null,w)
w.e!==$&&A.aY()
w.e=x
v=x}return v},
ac(){this.ap()
$.aA.b3$.push(this)},
bT(){var x,w,v=this
v.dz()
x=v.c
x.toString
if(A.aO(x,null,y.w).w.ax)v.gKE().d3(0)
else{x=v.gKE()
w=x.r
if(!(w!=null&&w.a!=null))x.acR(0,!0)}},
nf(d){if(this.f)return
if(d===C.et)this.d.ka(0)
else if(d===C.mI)this.d.d3(0)},
m(){var x=this
$.aA.ic(x)
x.gKE().m()
x.d.m()
x.aPH()},
DU(d){return this.b9l(d)},
b9l(d){var x=0,w=A.n(y.H),v,u=this,t,s,r,q,p,o,n,m
var $async$DU=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}s=d.a
r=s.length
q=0
for(;;){if(!(q<r)){t=null
break}t=s[q].z
if(t!=null&&t.length!==0)break;++q}if(t==null){x=1
break}p=B.dLI(t)
if(p==null){s=u.c.O(y.q).f
s.azQ()
s.a2(D.bYX)
x=1
break}u.f=!0
s=u.d
x=3
return A.d(s.d3(0),$async$DU)
case 3:r=u.c
if(r==null){x=1
break}o=p.a
n=p.b
m=o==="pay"?"/pagar/"+n:"/q/"+n
x=4
return A.d(A.ae(r).al(m,null,y.X),$async$DU)
case 4:if(u.c==null){x=1
break}u.f=!1
r=u.a.e
if(r!=null)r.$0()
x=5
return A.d(s.ka(0),$async$DU)
case 5:case 1:return A.l(v,w)}})
return A.m($async$DU,w)},
u(d){var x=this,w=null,v=x.a.c,u=v>=380?230:180,t=x.d,s=y.p
s=A.a([A.fT(A.W(16),A.aH(new A.bB(C.ax,w,C.e6,C.y,A.a([C.jw,new B.a4N(t,x.gb9k(),new B.cr8(),w),A.bL(A.aH(new A.bB(C.ax,w,C.aD,C.y,A.a([D.bPC,A.f5(x.gKE(),new B.cr9(x,u),w)],s),w),u,u),w,w),A.ca(16,A.bL(A.B(w,D.cbR,C.r,w,w,new A.K(C.t,w,w,A.W(999),w,w,C.x),w,w,w,C.dq,w,w,w),w,w),w,w,0,0,w,w)],s),w),v,w),C.bb)],s)
if(x.a.d)s.push(new A.ln(t,new B.cra(x),w,w,y.n))
return A.A(s,C.E,C.h,C.l)}}
B.X6.prototype={
u(d){return D.ap7}}
B.aEw.prototype={
b_(d,e){var x,w,v,u,t,s,r,q,p,o=null,n=$.aD(),m=A.bd()
m.r=C.t.gv(0)
m.b=C.bK
m.c=4
m.d=C.ha
x=e.a
w=e.b
n=n.r
v=y.v
u=new A.cC(n,C.aQ,o,o,A.a([],v))
u.aB(new A.f_(2,44))
u.aB(new A.cS(2,16))
u.Av(D.bJi,D.yj)
u.aB(new A.cS(44,2))
d.dT(u,m)
u=new A.cC(n,C.aQ,o,o,A.a([],v))
t=x-44
u.aB(new A.f_(t,2))
s=x-16
u.aB(new A.cS(s,2))
r=x-2
u.Av(new A.L(r,16),D.yj)
u.aB(new A.cS(r,44))
d.dT(u,m)
u=new A.cC(n,C.aQ,o,o,A.a([],v))
q=w-44
u.aB(new A.f_(r,q))
p=w-16
u.aB(new A.cS(r,p))
r=w-2
u.Av(new A.L(s,r),D.yj)
u.aB(new A.cS(t,r))
d.dT(u,m)
v=new A.cC(n,C.aQ,o,o,A.a([],v))
v.aB(new A.f_(44,r))
v.aB(new A.cS(16,r))
v.Av(new A.L(2,p),D.yj)
v.aB(new A.cS(2,q))
d.dT(v,m)},
dZ(d){return!1}}
B.aT4.prototype={}
B.akj.prototype={
m(){var x=this,w=x.bK$
if(w!=null)w.a_(0,x.ghG())
x.bK$=null
x.a6()},
bW(){this.cG()
this.d4()
this.hH()}}
B.apA.prototype={
I(){return"DetectionSpeed."+this.b}}
B.a4N.prototype={
R(){return new B.aJ7()}}
B.aJ7.prototype={
b8j(d,e){this.a.toString
return},
u(d){var x=this.d
x===$&&A.b()
return new A.ln(x,new B.c9P(this),null,null,y.n)},
Yc(){var x=0,w=A.n(y.H),v=this,u,t,s
var $async$Yc=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:s=v.a
s.toString
u=v.d
u===$&&A.b()
t=u.ch
v.f=new A.hb(t,A.u(t).i("hb<1>")).Yp(s.d,!1,B.dLk())
x=2
return A.d(u.ka(0),$async$Yc)
case 2:return A.l(null,w)}})
return A.m($async$Yc,w)},
MV(){var x=0,w=A.n(y.H),v=this,u
var $async$MV=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:v.a.toString
u=v.f
u=u==null?null:u.aN(0)
x=2
return A.d(y.x.b(u)?u:A.ei(u,y.H),$async$MV)
case 2:v.f=null
u=v.d
u===$&&A.b()
x=3
return A.d(u.d3(0),$async$MV)
case 3:v.a.toString
return A.l(null,w)}})
return A.m($async$MV,w)},
ac(){var x,w=this
w.ap()
x=w.a.c
w.d!==$&&A.bv()
w.d=x
w.Yc()},
m(){this.a6()
this.MV()},
nf(d){var x,w=this.d
w===$&&A.b()
x=w.a
if(x.d){x=x.c
x=(x==null?null:x.a)!==C.xQ}else x=!1
if(!x)return
switch(d.a){case 0:case 3:case 4:return
case 1:w.ka(0)
break
case 2:w.d3(0)
break}}}
B.aSU.prototype={}
B.a4Q.prototype={
biF(){var x=this
x.CW=$.HW().gavU().Yp(new B.bhJ(x),!1,new B.bhK(x))
x.cx=$.HW().gaDh().ln(new B.bhL(x))
x.cy=$.HW().gaEm().ln(new B.bhM(x))},
b8A(){var x=this,w=x.a
if(!w.d||!w.e||x.db)return!1
w=x.CW
if(w!=null)w.aN(0)
w=x.cx
if(w!=null)w.aN(0)
w=x.cy
if(w!=null)w.aN(0)
x.cy=x.cx=x.CW=null
w=x.a
x.sv(0,w.brh(!1,w.r===C.jh?C.jh:C.ab7))
return!0},
ka(d){var x=0,w=A.n(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$ka=A.j(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(s.db)throw A.p(A.xM(C.xP,A.xL(null,null,C.xP.geT(0))))
if(s.a.e){x=1
break}r=C.Bi
q=new B.bAo(r,null,s.y,s.z,s.as,!1,!1,!1)
u=4
s.biF()
x=7
return A.d($.HW().lz(0,q),$async$ka)
case 7:p=f
if(!s.db)s.sv(0,s.a.brB(p.b,r,!0,!0,p.c,p.a))
u=2
x=6
break
case 4:u=3
l=t.pop()
m=A.a9(l)
if(m instanceof A.tv){o=m
if(!s.db)s.sv(0,s.a.brD(C.Bi,o,!0,!1,C.aT,C.jh,1))}else throw l
x=6
break
case 3:x=2
break
case 6:case 1:return A.l(v,w)
case 2:return A.k(t.at(-1),w)}})
return A.m($async$ka,w)},
d3(d){var x=0,w=A.n(y.H),v=this
var $async$d3=A.j(function(e,f){if(e===1)return A.k(f,w)
for(;;)switch(x){case 0:x=v.b8A()?2:3
break
case 2:x=4
return A.d($.HW().d3(0),$async$d3)
case 4:case 3:return A.l(null,w)}})
return A.m($async$d3,w)},
tT(){var x=0,w=A.n(y.H),v,u=this,t
var $async$tT=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:t=u.a
if(!t.d)A.al(A.xM(C.a1l,A.xL(null,null,C.a1l.geT(0))))
if(u.db)A.al(A.xM(C.xP,A.xL(null,null,C.xP.geT(0))))
if(!t.e){x=1
break}if(t.r===C.jh){x=1
break}x=3
return A.d($.HW().tT(),$async$tT)
case 3:case 1:return A.l(v,w)}})
return A.m($async$tT,w)},
m(){var x=0,w=A.n(y.H),v,u=this
var $async$m=A.j(function(d,e){if(d===1)return A.k(e,w)
for(;;)switch(x){case 0:if(u.db){x=1
break}u.db=!0
u.ch.aW(0)
u.fV()
x=3
return A.d($.HW().m(),$async$m)
case 3:case 1:return A.l(v,w)}})
return A.m($async$m,w)}}
B.xN.prototype={
Mt(d,e,f,g,h,i,j,k){var x=this,w=d==null?x.a:d,v=e==null?x.b:e,u=g==null?x.d:g,t=h==null?x.e:h,s=i==null?x.f:i,r=j==null?x.r:j
return new B.xN(w,v,f,u,t,s,r,k==null?x.w:k)},
brh(d,e){var x=null
return this.Mt(x,x,x,x,d,x,e,x)},
brB(d,e,f,g,h,i){return this.Mt(d,e,null,f,g,h,i,null)},
brD(d,e,f,g,h,i,j){return this.Mt(null,d,e,f,g,h,i,j)},
br2(d){var x=null
return this.Mt(x,x,x,x,x,x,x,d)},
bqY(d){var x=null
return this.Mt(x,x,x,x,x,x,d,x)}}
B.ayc.prototype={
u(d){var x=null,w=A.a([D.bKD],y.p)
w.push(A.h(C.k_.geT(0),x,x,x,x,C.a9T,x,x,x))
return A.kK(A.bL(A.A(w,C.v,C.h,C.J),x,x),C.an,!0)}}
B.bAo.prototype={
a_c(){var x,w,v=this,u=A.E(y.N,y.X)
u.j(0,"facing",v.a.c)
x=v.e
if(x.length!==0){w=A.a8(x).i("ak<1,v>")
x=A.U(new A.ak(x,new B.bAp(),w),w.i("aV.E"))
u.j(0,"formats",x)}u.j(0,"returnImage",!1)
u.j(0,"speed",v.c.c)
u.j(0,"timeout",v.d)
u.j(0,"torch",!1)
u.j(0,"useNewCameraSelector",!1)
return u}}
var z=a.updateTypes(["F<~>()","F<~>({announce:z})","F<~>(mD)","X6(N,tv,e?)","cj(N,xN,e?)","e(N,xN,e?)","~(J,c1)"])
B.cKA.prototype={
$1(d){return new I.Fv(K.ye,d,this.a)},
$S:1365}
B.cKx.prototype={
$1(d){return this.a.$0()},
$S:132}
B.cKy.prototype={
$1(d){return this.a.$0()},
$S:132}
B.cKz.prototype={
$1(d){return this.a.$0()},
$S:132}
B.b4M.prototype={
$1(d){var x=d.b
return x==null?null:x.e},
$S:124}
B.cal.prototype={
$0(){var x=this.a,w=x.w
if(w!=null)w.aN(0)
x.w=A.dm(C.fp,new B.cak(x))},
$S:0}
B.cak.prototype={
$0(){return this.a.Dl(!0)},
$S:0}
B.caf.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.f=v&&x.e==null
if(!v)x.e=w},
$S:0}
B.cai.prototype={
$0(){var x=this.a
return x.p(new B.cah(x))},
$S:0}
B.cah.prototype={
$0(){return this.a.d=!1},
$S:0}
B.caj.prototype={
$0(){var x=this.a
return x.p(new B.cag(x))},
$S:0}
B.cag.prototype={
$0(){return this.a.d=!0},
$S:0}
B.cgn.prototype={
$0(){var x=this.a,w=this.b,v=w==null
x.e=v&&x.d==null
if(!v)x.d=w},
$S:0}
B.cgo.prototype={
$0(){},
$S:0}
B.bVE.prototype={
$0(){return A.am(this.a,!1).iw()},
$S:0}
B.bHe.prototype={
$1(d){var x=this.a
if(x.c!=null)x.p(new B.bHd())},
$S:67}
B.bHd.prototype={
$0(){},
$S:0}
B.bHc.prototype={
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
B.cr8.prototype={
$3(d,e,f){return D.ckt},
$S:z+3}
B.cr9.prototype={
$2(d,e){var x=null,w=this.a.gKE().x
w===$&&A.b()
return A.ca(x,A.B(x,x,C.r,C.uh,x,x,x,2,x,x,x,x,x),x,x,16,16,16+w*(this.b-34),x)},
$S:213}
B.cra.prototype={
$3(d,e,f){var x,w,v,u=null,t=e.r
if(t===C.jh)return C.ap
x=t===C.ab8
t=x?C.cy:C.dU
w=A.W(999)
v=x?"Ligada":"Desligada"
return new A.T(C.N3,A.ba(u,!0,u,A.eR(!1,u,!0,A.B(u,A.O(A.a([D.azp,A.B(u,A.h(v,u,u,u,u,A.aJ(u,u,x?C.cW:C.cp,u,u,u,u,u,u,u,u,12,u,u,C.G,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),C.r,u,u,new A.K(t,u,u,w,u,u,C.x),u,u,u,C.dq,u,u,u)],y.p),C.v,C.h,C.l,0,u),C.r,u,G.iA,D.afT,u,u,u,u,u,u,u),u,!0,u,u,u,u,u,u,u,u,u,this.a.d.gbCZ(),u,u,u,u,u,u,u),!1,u,u,u,!1,u,!1,u,u,u,u,u,u,u,u,u,"Lanterna",u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,u,x,u,u,C.a3,u),u)},
$S:z+4}
B.c9P.prototype={
$3(d,e,f){var x,w,v
if(!e.d){this.a.a.toString
return D.ap8}x=e.c
if(x!=null){w=new B.ayc(null)
v=this.a.a.f.$3(d,x,f)
return v==null?w:v}return A.kR(new B.c9O(this.a,e))},
$S:z+5}
B.c9O.prototype={
$2(d,e){var x,w,v=this.a,u=this.b
v.b8j(u,e)
v.a.toString
x=u.f
v=A.ai(1/0,e.a,e.b)
u=A.ai(1/0,e.c,e.d)
w=A.wY(A.Gd(A.JC(C.K,A.aH($.HW().avZ(),x.b,x.a),C.r,C.bG),new A.af(v,u)),C.y,null)
return w},
$S:106}
B.bhJ.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0||d==null)return
x.C(0,d)},
$S:1366}
B.bhK.prototype={
$1(d){var x=this.a.ch
if((x.c&4)!==0)return
x.xi(d)},
$S:72}
B.bhL.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.bqY(d))},
$S:1367}
B.bhM.prototype={
$1(d){var x=this.a
if(x.db)return
x.sv(0,x.a.br2(d))},
$S:108}
B.bAp.prototype={
$1(d){return d.c},
$S:1368};(function aliases(){var x=B.akj.prototype
x.aPH=x.m})();(function installTearOffs(){var x=a.installInstanceTearOff,w=a._instance_0u,v=a._instance_1u,u=a._static_2
x(B.af4.prototype,"gDk",0,0,null,["$1$announce","$0"],["Dl","kq"],1,0,0)
var t
w(t=B.afF.prototype,"gDk","kq",0)
w(t,"gaU3","QP",0)
w(B.abt.prototype,"gDk","kq",0)
v(B.agu.prototype,"gb9k","DU",2)
u(B,"dLk","dty",6)
w(t=B.a4Q.prototype,"gbCZ","tT",0)
w(t,"geF","m",0)})();(function inheritance(){var x=a.mixin,w=a.mixinHard,v=a.inheritMany,u=a.inherit
v(A.J,[B.avn,B.TN,B.xN,B.bAo])
v(A.bw,[B.cKA,B.cKx,B.cKy,B.cKz,B.b4M,B.bHe,B.cr8,B.cra,B.c9P,B.bhJ,B.bhK,B.bhL,B.bhM,B.bAp])
u(B.Jj,A.et)
v(A.G,[B.af3,B.afE,B.UI,B.a4N])
v(A.Y,[B.aSW,B.aT0,B.aT4,B.aSU])
u(B.af4,B.aSW)
v(A.bO,[B.cal,B.cak,B.caf,B.cai,B.cah,B.caj,B.cag,B.cgn,B.cgo,B.bVE,B.bHd,B.bHc])
u(B.afF,B.aT0)
v(A.M,[B.adn,B.P6,B.aee,B.ac3,B.aho,B.aiZ,B.aiK,B.aGa,B.X6,B.ayc])
u(B.abs,A.dA)
u(B.aSA,A.dv)
u(B.abt,B.aSA)
u(B.akj,B.aT4)
u(B.agu,B.akj)
v(A.cK,[B.cr9,B.c9O])
u(B.aEw,A.qu)
u(B.apA,A.eX)
u(B.aJ7,B.aSU)
u(B.a4Q,A.d_)
x(B.aSA,A.en)
x(B.aSW,A.en)
x(B.aT0,A.en)
x(B.aT4,A.en)
w(B.akj,A.iI)
x(B.aSU,A.en)})()
A.bt(b.typeUniverse,JSON.parse('{"af3":{"G":[],"e":[],"f":[]},"afE":{"G":[],"e":[],"f":[]},"abs":{"G":[],"e":[],"f":[]},"Jj":{"G":[],"e":[],"f":[]},"af4":{"Y":["af3"],"en":[]},"afF":{"Y":["afE"],"en":[]},"adn":{"M":[],"e":[],"f":[]},"P6":{"M":[],"e":[],"f":[]},"aee":{"M":[],"e":[],"f":[]},"ac3":{"M":[],"e":[],"f":[]},"aho":{"M":[],"e":[],"f":[]},"aiZ":{"M":[],"e":[],"f":[]},"aiK":{"M":[],"e":[],"f":[]},"aGa":{"M":[],"e":[],"f":[]},"abt":{"Y":["abs"],"en":[]},"UI":{"G":[],"e":[],"f":[]},"X6":{"M":[],"e":[],"f":[]},"agu":{"Y":["UI"],"en":[]},"aEw":{"aU":[]},"a4N":{"G":[],"e":[],"f":[]},"aJ7":{"Y":["a4N"],"en":[]},"a4Q":{"d_":["xN"],"aU":[]},"ayc":{"M":[],"e":[],"f":[]}}'))
var y=(function rtii(){var x=A.w
return{D:x("cJ"),x:x("F<~>"),k:x("r<kJ>"),G:x("r<TN>"),v:x("r<fF>"),S:x("r<+at,partner(ac,c)>"),I:x("r<+arrived,event,number,people(v,c,c?,v?)>"),s:x("r<c>"),p:x("r<e>"),j:x("t<@>"),f:x("a4<@,@>"),w:x("dh"),Y:x("TN"),N:x("c"),n:x("ln<xN>"),J:x("lp<mD>"),q:x("dr"),z:x("@"),r:x("t<TN>?"),g:x("t<@>?"),X:x("J?"),t:x("avn?"),E:x("rt?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.af8=new A.dO(C.tS,C.aa,C.tS,C.aa)
D.afT=new A.K(null,null,D.af8,null,null,null,C.x)
D.coU=new B.aiK("S\xf3 funciona na tua conta",!0,null)
D.ajh=new A.f8(C.K,null,null,D.coU,null)
D.c4C=new A.Q(!0,C.t,null,null,null,null,14,null,null,null,null,null,1.4,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.cgW=new A.D("Sem acesso \xe0 c\xe2mara. D\xe1 permiss\xe3o \xe0 \xc0 Nossa! nas defini\xe7\xf5es do telem\xf3vel.",null,D.c4C,C.a4,null,null,null,null,null,null,null)
D.bLs=new A.T(C.hw,D.cgW,null)
D.ajp=new A.f8(C.K,null,null,D.bLs,null)
D.ap7=new A.pg(C.cp,!0,D.ajp,null)
D.ap8=new A.pg(C.an,!0,null,null)
D.aqq=new B.apA(0,0,"noDuplicates")
D.aqr=new B.apA(1,1,"normal")
D.qa=new A.jZ(0.5,0.5,null,null,C.fa,null)
D.cbC=new A.D("Lanterna",null,C.cj,null,null,null,null,null,null,null,null)
D.azp=new A.bQ(1,C.au,D.cbC,null)
D.cm8=new B.aee("Aponta a c\xe2mara para o QR que o parceiro te mostra.",null)
D.bQh=new B.UI(420,!0,null,null)
D.bf2=x([D.cm8,C.R,D.bQh],y.p)
D.brS=x([C.tO],y.k)
D.cpz=x([],y.k)
D.byW=x([],y.G)
D.bJi=new A.L(16,2)
D.aCg=new A.aZ(57911,"MaterialIcons",null,!1)
D.aCM=new A.b7(D.aCg,null,C.t,null,null,null)
D.bKD=new A.T(C.N0,D.aCM,null)
D.c8U=new A.D("Sem marca\xe7\xf5es para hoje.",null,C.cj,null,null,null,null,null,null,null,null)
D.bKU=new A.T(C.fS,D.c8U,null)
D.cgO=new A.D("Ainda n\xe3o tens eventos. Quando entrares num, aparece aqui.",null,C.cj,null,null,null,null,null,null,null,null)
D.bL8=new A.T(C.qh,D.cgO,null)
D.cl9=new B.aEw(null)
D.aq0=new A.uS(D.cl9,null,C.aT,null,null)
D.bPC=new A.eF(0,0,0,0,null,null,D.aq0,null)
D.yj=new A.b6(14,14)
D.bQY=new A.Z("Bilhete",!1)
D.bRv=new A.Z("Organizas",!1)
D.bS4=new A.Z("Por entrar",!1)
D.bSq=new A.Z("Sem bilhete pago",!1)
D.bXD=new A.iy(186,186,8,C.dN,0,null)
D.c8p=new A.D("Este QR n\xe3o \xe9 da \xc0 Nossa!",null,null,null,null,null,null,null,null,null,null)
D.bYX=new A.bF(D.c8p,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.y,null)
D.c8d=new A.D("Um QR para todos os eventos",null,C.L,null,null,null,null,null,null,null,null)
D.cb2=new A.D("Sem liga\xe7\xe3o. Puxa para baixo para tentar outra vez.",null,C.cj,C.a4,null,null,null,null,null,null,null)
D.cbR=new A.D("\xc0 procura de um QR\u2026",null,C.hP,null,null,null,null,null,null,null,null)
D.cc5=new A.D("Entrada",null,C.hQ,null,null,null,null,null,null,null,null)
D.ccb=new A.D("Sem liga\xe7\xe3o",null,C.L,null,null,null,null,null,null,null,null)
D.ckm=new B.abs(null)
D.ckt=new B.X6(null)
D.ckU=new B.ac3("D\xc1 ENTRADA EM",null)
D.ckV=new B.ac3("HOJE",null)
D.cm9=new B.aee("L\xea o QR de um cliente para ver a marca\xe7\xe3o e registar a chegada.",null)
D.cnc=new B.af3(null)
D.cns=new B.afE(null)})()};
(a=>{a["ny/HdypSnqazZEUgXc0UlLS9xrk="]=a.current})($__dart_deferred_initializers__);